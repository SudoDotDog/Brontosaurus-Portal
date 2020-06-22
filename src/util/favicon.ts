/**
 * @author WMXPY
 * @namespace Util
 * @description Favicon
 */

export const getHeadElement = (): HTMLHeadElement => {

    const head: HTMLHeadElement | null = document.querySelector('head');

    if (head) {
        return head;
    }

    const newHead: HTMLHeadElement = document.createElement('head');
    document.appendChild(newHead);

    return newHead;
};

export const getFaviconElement = (): HTMLLinkElement => {

    const current: HTMLLinkElement | null = document.querySelector<HTMLLinkElement>('link[rel="shortcut icon"]');

    if (current) {
        return current;
    }

    const newFavicon: HTMLLinkElement = document.createElement('link');
    newFavicon.setAttribute('rel', 'shortcut icon');

    const head: HTMLHeadElement = getHeadElement();
    head.appendChild(newFavicon);

    return newFavicon;
};

export const setFavicon = (favicon: string): void => {

    const link: HTMLLinkElement = getFaviconElement();
    link.setAttribute('href', favicon);
};
