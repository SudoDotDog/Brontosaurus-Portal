/**
 * @author WMXPY
 * @namespace I18N
 * @description INTL
 */

import { LOCALE, SudooInternationalization } from "@sudoo/internationalization";
import { defaultLanguage } from "../state/preference/type";
import { Chinese, English, Spanish } from "./all";

export const intl: SudooInternationalization = SudooInternationalization.create(defaultLanguage);

intl.set(LOCALE.ENGLISH_UNITED_STATES, English);
intl.set(LOCALE.CHINESE_SIMPLIFIED, Chinese);
intl.set(LOCALE.SPANISH_MEXICO, Spanish);
