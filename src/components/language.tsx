/**
 * @author WMXPY
 * @namespace Components
 * @description Language
 */

import { LOCALE } from "@sudoo/internationalization";
import { Connector } from "@sudoo/redux";
import * as React from "react";
import * as StyleForm from "../../style/page/form.sass";
import { IStore } from "../state/declare";
import { setLanguage } from "../state/preference/preference";
import { combineClasses } from "../util/style";

type ConnectedLanguageStates = {

    readonly language: LOCALE;
};

type ConnectedLanguageActions = {

    readonly setLanguage: (language: LOCALE) => void;
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
            onChange={(next: React.ChangeEvent<HTMLSelectElement>) => props.setLanguage(next.target.value as LOCALE)}
            className={combineClasses(StyleForm.link, StyleForm.language)}
        >
            <option value={LOCALE.CHINESE_SIMPLIFIED}>简体中文</option>
            <option value={LOCALE.CHINESE_TRADITIONAL}>繁體中文</option>
            <option value={LOCALE.ENGLISH_UNITED_STATES}>English</option>
            <option value={LOCALE.FRENCH_FRANCE}>Français</option>
            <option value={LOCALE.JAPANESE_JAPAN}>日本語</option>
            <option value={LOCALE.KOREAN_KOREA}>한국어</option>
            <option value={LOCALE.RUSSIAN_RUSSIA}>Български език</option>
            <option value={LOCALE.SPANISH_SPAIN}>Español</option>
        </select>
    );
};

export const ConnectedLanguage: React.ComponentType<{}> = connector.connect(LanguageBase);
