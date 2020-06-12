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

    const titleStyle: string = `font-size:26px;color:red;background-color:white`;
    const contentStyle: string = `font-size:16px`;

    const title: string = getLogSecurityTitle(language);
    const content: string = getLogSecurityContent(language);

    setTimeout(console.log.bind(console, `%c> ${title} <`, titleStyle), 1);
    setTimeout(console.log.bind(console, `%c${content}`, contentStyle), 1);
};
