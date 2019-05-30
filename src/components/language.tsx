/**
 * @author WMXPY
 * @namespace Components
 * @description Language
 */

import * as React from "react";
import * as StyleForm from "../../style/page/form.sass";
import { combineClasses } from "../util/style";

export const LanguageBase: React.FC = () => {

    return (
        <select
            className={combineClasses(StyleForm.link, StyleForm.language)}
        >
            <option value="en_us">English</option>
            <option value="zh_cn">Chinese</option>
        </select>
    );
};

export const Language = LanguageBase;
