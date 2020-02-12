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
import * as StyleForm from "../../style/page/form.sass";
import * as StyleLogin from "../../style/page/login.sass";
import { ErrorFlag } from "../components/flag";
import { ConnectedLanguage } from "../components/language";
import { Title } from "../components/title";
import { intl } from "../i18n/intl";
import { PROFILE } from "../i18n/profile";
import { IStore } from "../state/declare";
import { TargetInfo } from "../state/info/type";
import { setPage } from "../state/page/page";
import { PAGE } from "../state/page/type";
import { ErrorInfo } from "../state/status/type";
import { combineClasses } from "../util/style";

type ConnectedFormStates = {

    readonly language: SudooFormat;
    readonly isLoading: boolean;
    readonly error: ErrorInfo | null;
    readonly target: TargetInfo;
};

type ConnectedFormActions = {

    readonly setPage: (page: PAGE) => void;
};

export type FromStructureProps = {

    readonly showHelp?: boolean;
};

type ConnectedProps = ConnectedFormStates & ConnectedFormActions & FromStructureProps;

const connector = Connector.create<IStore, ConnectedFormStates, ConnectedFormActions>()
    .connectStates(({ info, preference, status }: IStore) => ({

        language: intl.format(preference.language),
        isLoading: Boolean(status.loading),
        error: status.error,
        target: info.target,
    })).connectActions({

        setPage,
    });

export class FormStructureBase extends React.Component<ConnectedProps> {

    public render(): JSX.Element {

        return (<div className={StyleLogin.page}>
            <div className={StyleLogin.wrapper}>
                <div className={StyleLogin.inner}>
                    <NeonPaper className={combineClasses(StyleLogin.login, StyleForm.borderOverride)}>
                        <NeonIndicator className={StyleLogin.indicator} loading={this.props.isLoading}>
                            {this._renderLogo()}
                            {this._renderTitle()}
                            {this._renderFlag()}
                            {this.props.children}
                            {this._renderHelp()}
                        </NeonIndicator>
                    </NeonPaper>
                </div>
            </div>
            {this._renderFooter()}
        </div>);
    }

    private _renderFooter(): React.ReactNode {

        return (<div className={StyleLogin.footer}>
            <div className={StyleLogin.languageText}>
                <ConnectedLanguage />
            </div>
            {this.props.target.privacy &&
                <div className={StyleLogin.privacyText}>
                    <a
                        className={StyleForm.link}
                        href={this.props.target.privacy}
                    >
                        {this.props.language.get(PROFILE.PRIVACY_POLICY)}
                    </a>
                </div>}
        </div>);
    }

    private _renderHelp(): React.ReactNode {

        if (!this.props.showHelp) {
            return null;
        }

        if (!this.props.target.name) {
            return null;
        }

        return (<div className={StyleForm.help}>
            <a
                className={StyleForm.link}
                onClick={() => {
                    this.props.setPage(PAGE.HELP);
                }}
            >
                {this.props.language.get(PROFILE.NEED_HELP)}
            </a>
        </div>);
    }

    private _renderLogo(): React.ReactNode {

        if (!this.props.target.avatar) {
            return null;
        }

        return (<div
            style={{
                backgroundImage: `url('${this.props.target.avatar}')`,
            }}
            className={StyleLogin.logoImage}
        />);
    }

    private _renderTitle(): React.ReactNode {

        if (!this.props.target.name) {
            return null;
        }

        return (<Title
            text={this._getLoginToText()}
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
            message={this.props.language.get(info.short as PROFILE)}
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
}

export const FormStructure: React.ComponentType<FromStructureProps> = connector.connect(FormStructureBase);
