/**
 * @author WMXPY
 * @namespace Component
 * @description Form
 */

import { SudooFormat } from "@sudoo/internationalization";
import { NeonPaper } from "@sudoo/neon/paper";
import { NeonIndicator } from "@sudoo/neon/spinner";
import { Connector } from "@sudoo/redux";
import * as React from "react";
import StyleForm from "../../style/page/form.sass";
import StyleLogin from "../../style/page/login.sass";
import { ErrorFlag, SucceedFlag } from "../components/flag";
import { ConnectedLanguage } from "../components/language";
import { Title } from "../components/title";
import { intl } from "../i18n/intl";
import { PROFILE } from "../i18n/profile";
import { Portal } from "../portal/portal";
import { IStore } from "../state/declare";
import { BRONTOSAURUS_NAMESPACE } from "../state/form/type";
import { ApplicationRedirection, TargetInfo } from "../state/info/type";
import { setPage } from "../state/page/page";
import { PAGE } from "../state/page/type";
import { clearError, clearSucceed } from "../state/status/status";
import { ErrorInfo } from "../state/status/type";
import { combineClasses } from "../util/style";
import { getVersion } from "../util/version";
import { ApplicationIssue } from "./application-issue";
import { InsecureRedirection } from "./insecure-redirection";
import { Timeout } from "./timeout";

type ConnectedFormStates = {

    readonly namespace: string;

    readonly language: SudooFormat;
    readonly isLoading: boolean;
    readonly error: ErrorInfo | null;
    readonly succeed: ErrorInfo | null;
    readonly target: TargetInfo;
};

type ConnectedFormActions = {

    readonly setPage: (page: PAGE) => void;
    readonly clearError: () => void;
    readonly clearSucceed: () => void;
};

export type FromStructureProps = {

    readonly showHelp?: boolean;
    readonly showVersion?: boolean;
    readonly showBackToLogin?: boolean;
};

type ConnectedProps = ConnectedFormStates & ConnectedFormActions & FromStructureProps;

const connector = Connector.create<IStore, ConnectedFormStates, ConnectedFormActions>()
    .connectStates(({ form, info, preference, status }: IStore) => ({

        namespace: form.namespace,

        language: intl.format(preference.language),
        isLoading: Boolean(status.loading),
        error: status.error,
        succeed: status.succeed,
        target: info.target,
    })).connectActions({

        setPage,
        clearError,
        clearSucceed,
    });

export class FormStructureBase extends React.Component<ConnectedProps> {

    public render(): JSX.Element {

        return (<div className={StyleLogin.page}>
            <div className={StyleLogin.wrapper}>
                <div className={StyleLogin.inner}>
                    <NeonPaper
                        className={combineClasses(
                            StyleLogin.login,
                            StyleForm["border-override"],
                        )}
                    >
                        <NeonIndicator
                            className={StyleLogin.indicator}
                            loading={this.props.isLoading}
                        >
                            {this._renderContents()}
                        </NeonIndicator>
                    </NeonPaper>
                </div>
            </div>
            {this._renderFooter()}
        </div>);
    }

    private _renderContents() {

        if (this.props.target.timeout) {
            return (<React.Fragment>
                {this._renderLogo()}
                {this._renderFlag()}
                <Timeout />
            </React.Fragment>);
        }

        if (this.props.target.applicationIssue) {
            return (<React.Fragment>
                {this._renderLogo()}
                <ApplicationIssue />
            </React.Fragment>);
        }

        if (this._isInsecureRedirection()) {
            return (<React.Fragment>
                {this._renderLogo()}
                {this._renderFlag()}
                <InsecureRedirection />
            </React.Fragment>);
        }

        return (<React.Fragment>
            {this._renderLogo()}
            {this._renderTitle()}
            {this._renderSucceed()}
            {this._renderFlag()}
            {this.props.children}
            <div className={StyleForm["extra-link"]}>
                <div className={StyleForm["main-extra-link"]}>
                    {this._renderHelp()}
                    {this._renderBackToLogin()}
                </div>
                <div>
                    {this._renderVersion()}
                </div>
            </div>
        </React.Fragment>);
    }

    private _renderFooter(): React.ReactNode {

        const portal: Portal = Portal.instance;
        const showPrivacy: boolean = portal.documentationLink && Boolean(this.props.target.privacy);

        return (<div className={StyleLogin.footer}>
            <div className={StyleLogin["language-text"]}>
                <ConnectedLanguage />
            </div>
            {showPrivacy &&
                <div className={StyleLogin["privacy-text"]}>
                    <a
                        className={StyleForm.link}
                        href={this.props.target.privacy}
                    >
                        {this.props.language.get(PROFILE.PRIVACY_POLICY)}
                    </a>
                </div>}
        </div>);
    }

    private _renderVersion(): React.ReactNode {

        if (!this.props.showVersion) {
            return null;
        }

        return (<span>
            {getVersion()}
        </span>);
    }

    private _renderHelp(): React.ReactNode {

        if (!this.props.showHelp) {
            return null;
        }

        if (!this.props.target.name) {
            return null;
        }

        return (<a
            className={StyleForm.link}
            onClick={() => {
                this.props.setPage(PAGE.HELP);
            }}
        >
            {this.props.language.get(PROFILE.NEED_HELP)}
        </a>);
    }

    private _renderBackToLogin(): React.ReactNode {

        if (!this.props.showBackToLogin) {
            return null;
        }

        return (<a
            className={StyleForm.link}
            onClick={() => {
                this.props.clearError();
                this.props.clearSucceed();
                this.props.setPage(PAGE.LOGIN);
            }}
        >
            {this.props.language.get(PROFILE.BACK_TO_LOGIN)}
        </a>);
    }

    private _renderLogo(): React.ReactNode {

        if (!this.props.target.avatar) {
            return null;
        }

        return (<div
            style={{
                backgroundImage: `url('${this.props.target.avatar}')`,
            }}
            className={StyleLogin["logo-image"]}
        />);
    }

    private _renderTitle(): React.ReactNode {

        if (!this.props.target.name) {
            return null;
        }

        return (<Title
            text={this._getLoginToText()}
            namespaceText={this._getNamespaceText()}
            applicationName={this.props.target.name}
        />);
    }

    private _renderFlag(): React.ReactNode {

        const info: ErrorInfo = this.props.error || {
            long: PROFILE.CONNECT_SERVICE,
            short: PROFILE.INTERNAL_ERROR,
        };
        return (<ErrorFlag
            show={Boolean(this.props.error)}
            info={this.props.language.get(info.long as PROFILE)}
            message={this.props.language.get(info.short)}
        />);
    }

    private _renderSucceed(): React.ReactNode {

        const info: ErrorInfo = this.props.succeed || {
            long: PROFILE.CONNECT_SERVICE,
            short: PROFILE.INTERNAL_ERROR,
        };
        return (<SucceedFlag
            show={Boolean(this.props.succeed)}
            info={this.props.language.get(info.long as PROFILE)}
            message={this.props.language.get(info.short)}
        />);
    }

    private _getLoginToText(): any {

        if (this.props.target.accountName) {

            const before: string = this.props.language.get(PROFILE.SIGN_IN_WITH_BEFORE);
            const after: string = this.props.language.get(PROFILE.SIGN_IN_WITH_AFTER);

            return (<span>
                {before && (before + " ")}
                <span style={{ fontWeight: 'bold' }}>{this.props.target.accountName}</span>
                {after && (" " + after)}
            </span>);
        }

        return this.props.language.get(PROFILE.SIGN_IN_TO);
    }

    private _getNamespaceText(): any {

        if (this.props.namespace !== BRONTOSAURUS_NAMESPACE.DEFAULT) {

            const before: string = this.props.language.get(PROFILE.SIGNING_IN_WITH_NAMESPACE_BEFORE);
            const after: string = this.props.language.get(PROFILE.SIGNING_IN_WITH_NAMESPACE_AFTER);

            return (<span>
                {before && (before + " ")}
                <span style={{ fontWeight: 'bold' }}>{this.props.namespace}</span>
                {after && (" " + after)}
            </span>);
        }

        return null;
    }

    private _isInsecureRedirection(): boolean {

        const portal: Portal = Portal.instance;

        if (portal.isIFrame) {
            return !this.props.target.iFrameProtocol;
        }
        if (portal.isPost) {
            return !this.props.target.postProtocol;
        }
        if (portal.isAlert) {
            return !this.props.target.alertProtocol;
        }
        if (portal.isNone) {
            return !this.props.target.noneProtocol;
        }

        if (!portal.isRedirect) {
            return false;
        }

        const redirections: ApplicationRedirection[] = this.props.target.redirections;
        if (!Array.isArray(redirections)) {
            return true;
        }

        if (redirections.length === 0) {
            return false;
        }

        if (!portal.hasCallbackPath()) {
            return false;
        }

        const callbackPath: string = Portal.instance.callbackPath;

        try {
            for (const redirection of redirections) {
                const regexp: RegExp = new RegExp(redirection.regexp);
                if (regexp.test(callbackPath)) {
                    return false;
                }
            }
        } catch (err) {
            return true;
        }

        return true;
    }
}

export const FormStructure: React.ComponentType<FromStructureProps> = connector.connect(FormStructureBase);
