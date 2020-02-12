/**
 * @author WMXPY
 * @namespace Page
 * @description Help
 */

import { SudooFormat } from "@sudoo/internationalization";
import { NeonButton } from "@sudoo/neon/button";
import { MARGIN, SIZE, WIDTH } from "@sudoo/neon/declare";
import { INPUT_TYPE, NeonInput } from "@sudoo/neon/input";
import { Connector } from "@sudoo/redux";
import * as React from "react";
import * as StyleForm from "../../style/page/form.sass";
import { FormStructure } from "../components/form";
import { Subtitle } from "../components/subtitle";
import { intl } from "../i18n/intl";
import { PROFILE } from "../i18n/profile";
import { IStore } from "../state/declare";
import { TargetInfo } from "../state/info/type";
import { setPage } from "../state/page/page";
import { PAGE } from "../state/page/type";
import { combineClasses } from "../util/style";

type ConnectedHelpStates = {

    readonly username: string;
    readonly language: SudooFormat;
    readonly target: TargetInfo;
};

type HelpStates = {

    readonly username: string;
    readonly email: string;
};

type ConnectedHelpActions = {

    readonly setPage: (page: PAGE) => void;
};

type ConnectedProps = ConnectedHelpStates & ConnectedHelpActions;

const connector = Connector.create<IStore, ConnectedHelpStates, ConnectedHelpActions>()
    .connectStates(({ info, preference, form }: IStore) => ({

        username: form.username,
        language: intl.format(preference.language),
        target: info.target,
    })).connectActions({

        setPage,
    });

export class HelpBase extends React.Component<ConnectedProps, HelpStates> {

    public readonly state: HelpStates = {

        username: this.props.username,
        email: '',
    };

    public constructor(props: ConnectedProps) {

        super(props);

        this._sendResetEmail = this._sendResetEmail.bind(this);
    }

    public render(): JSX.Element {

        return (<FormStructure>
            <Subtitle
                text="123"
            />
            <NeonInput
                autoCapitalize={false}
                autoComplete={false}
                autoCorrect={false}
                className={combineClasses(StyleForm.selectOverride, StyleForm.marginOverride)}
                label={this.props.language.get(PROFILE.USERNAME)}
                margin={MARGIN.SMALL}
                value={this.state.username}
                onChange={(value: string) => this.setState({ username: value })}
            />
            <NeonInput
                autoCapitalize={false}
                autoComplete={false}
                autoCorrect={false}
                type={INPUT_TYPE.EMAIL}
                className={combineClasses(StyleForm.selectOverride, StyleForm.marginOverride)}
                label={this.props.language.get(PROFILE.PASSWORD)}
                margin={MARGIN.SMALL}
                value={this.state.email}
                onChange={(value: string) => this.setState({ email: value })}
            />
            <NeonButton
                className={combineClasses(StyleForm.selectOverride, StyleForm.marginOverride)}
                size={SIZE.MEDIUM}
                width={WIDTH.FULL}
                margin={MARGIN.SMALL}
                onClick={this._sendResetEmail}
            >
                {this.props.language.get(PROFILE.SIGN_IN)}
            </NeonButton>
        </FormStructure>);
    }

    private _sendResetEmail() {


    }
}

export const ConnectedHelp: React.ComponentType<{}> = connector.connect(HelpBase);
