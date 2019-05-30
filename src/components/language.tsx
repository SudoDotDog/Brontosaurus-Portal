/**
 * @author WMXPY
 * @namespace Components
 * @description Language
 */

import { Connector } from "@sudoo/redux";
import * as React from "react";
import * as StyleForm from "../../style/page/form.sass";
import { IStore } from "../state/declare";
import { setLanguage } from "../state/preference/preference";
import { LANGUAGE } from "../state/preference/type";
import { combineClasses } from "../util/style";

type ConnectedLanguageStates = {

    readonly language: LANGUAGE;
};

type ConnectedLanguageActions = {

    readonly setLanguage: (language: LANGUAGE) => void;
};

type ConnectedProps = ConnectedLanguageStates & ConnectedLanguageActions;

const connector = Connector.create<IStore, ConnectedLanguageStates, ConnectedLanguageActions>()
    .connectStates(({ preference }: IStore) => ({

        language: preference.language,
    })).connectActions({

        setLanguage,
    });

export const LanguageBase: React.FC<ConnectedProps> = (props: ConnectedProps) => {

    return (
        <select
            value={props.language}
            onChange={(next: React.ChangeEvent<HTMLSelectElement>) => props.setLanguage(next.target.value as LANGUAGE)}
            className={combineClasses(StyleForm.link, StyleForm.language)}
        >
            <option value={LANGUAGE.UNITED_STATES_ENGLISH}>English</option>
            <option value={LANGUAGE.SIMPLIFY_CHINESE}>Chinese</option>
            <option value={LANGUAGE.SPANISH_MEXICO}>Spanish</option>
        </select>
    );
};

export const ConnectedLanguage: React.ComponentType<{}> = connector.connect(LanguageBase);
