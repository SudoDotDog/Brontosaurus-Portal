/**
 * @author WMXPY
 * @namespace Components
 * @description Title
 */

import * as React from "react";
import * as StyleForm from "../../style/page/form.sass";
import { combineClasses } from "../util/style";

type TitleProp = {

    readonly text: any;
    readonly namespaceText: string;
    readonly applicationName: string;
};

export const Title: React.FC<TitleProp> = (props: TitleProp) => {

    return (
        <div className={StyleForm.title}>
            <div className={combineClasses(StyleForm.upper, StyleForm.selectOverride)}>
                <div>{props.text}</div>
                <div>{props.namespaceText}</div>
            </div>
            <div className={StyleForm.lower}>{props.applicationName}</div>
        </div>
    );
};
