/**
 * @author WMXPY
 * @namespace I18N
 * @description Log
 */

import { LOCALE, SudooFormat } from "@sudoo/internationalization";
import { intl } from "./intl";
import { PROFILE } from "./profile";

export const getLogSecurityContent = (language: LOCALE): string => {

    const format: SudooFormat = intl.format(language);
    return format.get(PROFILE.APPLICATION_GROUP_NOT_FULFILLED);
};

export const logSecurityContent = (language: LOCALE): void => {

    const content: string = getLogSecurityContent(language);
    console.log(content);
};
