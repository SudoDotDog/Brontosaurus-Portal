/**
 * @author WMXPY
 * @namespace Components
 * @description Subtitle
 */

import * as React from "react";
import * as StyleForm from "../../style/page/form.sass";

type SubtitleProp = {

    readonly text: any;
    readonly children?: any;
};

export const Subtitle: React.FC<SubtitleProp> = (props: SubtitleProp) => {

    return (
        <div className={StyleForm.title}>
            <div>{props.text}</div>
            {props.children}
        </div>
    );
};
