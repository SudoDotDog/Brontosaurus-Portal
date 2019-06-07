/**
 * @author WMXPY
 * @namespace I18N
 * @description INTL
 */

import { LOCALE, SudooInternationalization } from "@sudoo/internationalization";
import { defaultLanguage } from "../state/preference/type";
import { CHINESE_SIMPLIFIED, CHINESE_TRADITIONAL, ENGLISH_UNITED_STATES, FRENCH_FRANCE, JAPANESE_JAPAN, KOREAN_KOREA, RUSSIAN_RUSSIA, SPANISH_MEXICO } from "./all";

export const intl: SudooInternationalization = SudooInternationalization.create(defaultLanguage);

intl.set(LOCALE.CHINESE_SIMPLIFIED, CHINESE_SIMPLIFIED)
    .set(LOCALE.CHINESE_TRADITIONAL, CHINESE_TRADITIONAL)
    .set(LOCALE.ENGLISH_UNITED_STATES, ENGLISH_UNITED_STATES)
    .set(LOCALE.FRENCH_FRANCE, FRENCH_FRANCE)
    .set(LOCALE.JAPANESE_JAPAN, JAPANESE_JAPAN)
    .set(LOCALE.KOREAN_KOREA, KOREAN_KOREA)
    .set(LOCALE.RUSSIAN_RUSSIA, RUSSIAN_RUSSIA)
    .set(LOCALE.SPANISH_SPAIN, SPANISH_MEXICO);
