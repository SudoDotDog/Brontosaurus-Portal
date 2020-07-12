/**
 * @author WMXPY
 * @namespace Component
 * @description Helper Description
 */

import { SudooFormat } from "@sudoo/internationalization";
import { Connector } from "@sudoo/redux";
import * as React from "react";
import * as StyleForm from "../../style/page/form.sass";
import { intl } from "../i18n/intl";
import { PROFILE } from "../i18n/profile";
import { Portal } from "../portal/portal";
import { IStore } from "../state/declare";
import { TargetInfo } from "../state/info/type";
import { replaceRedirectPath } from "../util/redirect";
import { Subtitle } from "./subtitle";

type ConnectedHelperDescriptionStates = {

    readonly language: SudooFormat;
    readonly target: TargetInfo;
};

export type HelperDescriptionProps = {

    readonly withHelpProfile: PROFILE;
    readonly noHelpProfile: PROFILE;
};

type ConnectedProps = ConnectedHelperDescriptionStates & HelperDescriptionProps;

const connector = Connector.create<IStore, ConnectedHelperDescriptionStates>()
    .connectStates(({ info, preference }: IStore) => ({

        language: intl.format(preference.language),
        target: info.target,
    }));

export class HelperDescriptionBase extends React.Component<ConnectedProps> {

    public render() {

        const portal: Portal = Portal.instance;

        if (!portal.externalLink) {
            return (<Subtitle
                text={this.props.language.get(this.props.noHelpProfile)}
            />);
        }

        return (<Subtitle
            text={this.props.language.get(this.props.withHelpProfile)}
        >
            <div className={StyleForm.help}>
                <a
                    className={StyleForm.link}
                    onClick={() => replaceRedirectPath(this.props.target.help)}
                >
                    {this.props.language.get(PROFILE.GO_TO_HELP_CENTER)}
                </a>
            </div>
        </Subtitle>);
    }
}

export const HelperDescription: React.ComponentType<HelperDescriptionProps> = connector.connect(HelperDescriptionBase);
