/**
 * @author WMXPY
 * @namespace I18N
 * @description Log
 */

import { LOCALE, SudooFormat } from "@sudoo/internationalization";
import { intl } from "./intl";
import { PROFILE } from "./profile";

export const getLogSecurityTitle = (language: LOCALE): string => {

    const format: SudooFormat = intl.format(language);
    return format.get(PROFILE.SECURITY_LOG_TITLE);
};

export const getLogSecurityContent = (language: LOCALE): string => {

    const format: SudooFormat = intl.format(language);
    return format.get(PROFILE.SECURITY_LOG_CONTENT);
};

export const logSecurityContent = (language: LOCALE): void => {

    const title: string = getLogSecurityTitle(language);
    const content: string = getLogSecurityContent(language);
    console.log(title);
    console.log(content);
};
