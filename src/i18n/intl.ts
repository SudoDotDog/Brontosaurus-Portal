/**
 * @author WMXPY
 * @namespace I18N
 * @description INTL
 */

import { LOCALE, SudooInternationalization } from "@sudoo/internationalization";
import { defaultLanguage } from "../state/preference/type";
import { CHINESE_SIMPLIFIED, CHINESE_TRADITIONAL, ENGLISH_UNITED_STATES, JAPANESE_JAPAN, KOREAN_KOREA, SPANISH_MEXICO } from "./all";

export const intl: SudooInternationalization = SudooInternationalization.create(defaultLanguage);

intl.set(LOCALE.CHINESE_SIMPLIFIED, CHINESE_SIMPLIFIED)
    .set(LOCALE.CHINESE_TRADITIONAL, CHINESE_TRADITIONAL)
    .set(LOCALE.ENGLISH_UNITED_STATES, ENGLISH_UNITED_STATES)
    .set(LOCALE.ENGLISH_UNITED_KINGDOM, ENGLISH_UNITED_STATES)
    .set(LOCALE.ENGLISH_CANADA, ENGLISH_UNITED_STATES)
    .set(LOCALE.JAPANESE_JAPAN, JAPANESE_JAPAN)
    .set(LOCALE.KOREAN_KOREA, KOREAN_KOREA)
    .set(LOCALE.SPANISH_MEXICO, SPANISH_MEXICO)
    .set(LOCALE.SPANISH_SPAIN, SPANISH_MEXICO);
