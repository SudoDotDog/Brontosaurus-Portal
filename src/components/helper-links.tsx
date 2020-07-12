/**
 * @author WMXPY
 * @namespace Component
 * @description Timeout
 */

import { SudooFormat } from "@sudoo/internationalization";
import { Connector } from "@sudoo/redux";
import * as React from "react";
import * as StyleForm from "../../style/page/form.sass";
import { intl } from "../i18n/intl";
import { PROFILE } from "../i18n/profile";
import { IStore } from "../state/declare";
import { TargetInfo } from "../state/info/type";
import { replaceRedirectPath } from "../util/redirect";

type ConnectedHelperLinksStates = {

    readonly language: SudooFormat;
    readonly target: TargetInfo;
};

type ConnectedProps = ConnectedHelperLinksStates;

const connector = Connector.create<IStore, ConnectedHelperLinksStates>()
    .connectStates(({ info, preference }: IStore) => ({

        language: intl.format(preference.language),
        target: info.target,
    }));

export class HelperLinksBase extends React.Component<ConnectedProps> {

    public render() {

        return (
            <div>
                {this._renderEntryPage()}
                {this._renderIndexPage()}
                {this._renderHelpCenter()}
            </div>
        );
    }

    private _renderEntryPage() {

        if (!this.props.target.entryPage) {
            return null;
        }

        return (<div className={StyleForm.help}>
            <span>
                {this.props.language.get(PROFILE.YOU_CAN)} -&nbsp;
                <a
                    className={StyleForm.link}
                    onClick={() => replaceRedirectPath(this.props.target.entryPage)}
                >
                    {this.props.language.get(PROFILE.GO_TO_ENTRY_PAGE)}
                </a>
            </span>
        </div>);
    }

    private _renderIndexPage() {

        if (!this.props.target.indexPage) {
            return null;
        }

        return (<div className={StyleForm.help}>
            <span>
                {this.props.language.get(PROFILE.YOU_CAN)} -&nbsp;
                <a
                    className={StyleForm.link}
                    onClick={() => replaceRedirectPath(this.props.target.indexPage)}
                >
                    {this.props.language.get(PROFILE.GO_TO_INDEX_PAGE)}
                </a>
            </span>
        </div>);
    }

    private _renderHelpCenter() {

        if (!this.props.target.help) {
            return null;
        }

        return (<div className={StyleForm.help}>
            <span>
                {this.props.language.get(PROFILE.YOU_CAN_ALSO)} -&nbsp;
                <a
                    className={StyleForm.link}
                    onClick={() => replaceRedirectPath(this.props.target.help)}
                >
                    {this.props.language.get(PROFILE.GO_TO_HELP_CENTER)}
                </a>
            </span>
        </div>);
    }
}

export const HelperLinks: React.ComponentType = connector.connect(HelperLinksBase);
