/**
 * @author WMXPY
 * @namespace Util
 * @description Style
 */

export const combineClasses = (...classNames: Array<string | undefined | null>): string => {

    return classNames.filter(Boolean).join(' ');
};
