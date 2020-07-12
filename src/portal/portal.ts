/**
 * @author WMXPY
 * @namespace Portal
 * @description Portal
 */

import { LOCALE, SudooFormat } from "@sudoo/internationalization";
import { intl } from "../i18n/intl";
import { PROFILE } from "../i18n/profile";
import { replaceRedirectPath } from "../util/redirect";
import { PORTAL_MODE, postCurrentMessage, postParentMessage } from "./util";

export class Portal {

    private static _instance: Portal | undefined;

    public static register(): void {

        if (this._instance) {

            throw new Error("[Brontosaurus-Portal] Already registered");
        }

        const url: URL = new URL(window.location.href);

        const applicationKey: string | null = url.searchParams.get("key");
        const callbackPath: string | null = url.searchParams.get("cb");

        if (applicationKey && callbackPath) {

            const userAgent: string | null = url.searchParams.get("useragent");
            const platform: string | null = url.searchParams.get("platform");

            const externalLink: string | null = url.searchParams.get("el");

            if (callbackPath.toUpperCase().startsWith('IFRAME')) {
                this._instance = new Portal(PORTAL_MODE.IFRAME)
                    .setParams(applicationKey, callbackPath)
                    .setExternalLinkIfExist(externalLink)
                    .setPlatformIfExist(platform)
                    .setUserAgentOverrideIfExist(userAgent);
            } else if (callbackPath.toUpperCase().startsWith('POST')) {
                this._instance = new Portal(PORTAL_MODE.POST)
                    .setParams(applicationKey, callbackPath)
                    .setExternalLinkIfExist(externalLink)
                    .setPlatformIfExist(platform)
                    .setUserAgentOverrideIfExist(userAgent);
            } else if (callbackPath.toUpperCase().startsWith('ALERT')) {
                this._instance = new Portal(PORTAL_MODE.ALERT)
                    .setParams(applicationKey, callbackPath)
                    .setExternalLinkIfExist(externalLink)
                    .setPlatformIfExist(platform)
                    .setUserAgentOverrideIfExist(userAgent);
            } else if (callbackPath.toUpperCase().startsWith('NONE')) {
                this._instance = new Portal(PORTAL_MODE.NONE)
                    .setParams(applicationKey, callbackPath)
                    .setExternalLinkIfExist(externalLink)
                    .setPlatformIfExist(platform)
                    .setUserAgentOverrideIfExist(userAgent);
            } else {
                this._instance = new Portal(PORTAL_MODE.REDIRECT)
                    .setParams(applicationKey, callbackPath)
                    .setExternalLinkIfExist(externalLink)
                    .setPlatformIfExist(platform)
                    .setUserAgentOverrideIfExist(userAgent);
            }
            window.history.replaceState({}, document.title, url.origin);
        } else {
            this._instance = new Portal(PORTAL_MODE.ERROR);
        }
    }

    public static get instance(): Portal {

        if (!this._instance) {

            throw new Error("[Brontosaurus-Portal] Did not register");
        }

        return this._instance;
    }

    public static flush(token: string, locale: LOCALE): void {

        this.instance.flush(token, locale);
        return;
    }

    private readonly _mode: PORTAL_MODE;

    private _applicationKey: string | null;
    private _callbackPath: string | null;

    private _platform: string | null;
    private _userAgentOverride: string | null;

    private _externalLink: boolean;

    private constructor(mode: PORTAL_MODE) {

        this._mode = mode;

        this._applicationKey = null;
        this._callbackPath = null;

        this._platform = null;
        this._userAgentOverride = null;

        this._externalLink = false;
    }

    public get isErrored(): boolean {

        return this._mode === PORTAL_MODE.ERROR;
    }

    public get isIFrame(): boolean {

        return this._mode === PORTAL_MODE.IFRAME;
    }

    public get isAlert(): boolean {

        return this._mode === PORTAL_MODE.ALERT;
    }

    public get isNone(): boolean {

        return this._mode === PORTAL_MODE.NONE;
    }

    public get isPost(): boolean {

        return this._mode === PORTAL_MODE.POST;
    }

    public get isRedirect(): boolean {

        return this._mode === PORTAL_MODE.REDIRECT;
    }

    public get hasApplicationKey(): boolean {

        return typeof this._applicationKey === 'string';
    }

    public get applicationKey(): string {

        if (this._applicationKey) {
            return this._applicationKey;
        }
        throw new Error("[Brontosaurus-Portal] Not found");
    }

    public get callbackPath(): string {

        if (this._callbackPath) {
            return this._callbackPath;
        }
        throw new Error("[Brontosaurus-Portal] Not found");
    }

    public get platform(): string | null {

        return this._platform;
    }

    public get userAgentOverride(): string | null {

        return this._userAgentOverride;
    }

    public hasCallbackPath(): boolean {

        return Boolean(this._callbackPath);
    }

    public flush(token: string, locale: LOCALE): void {

        if (this._mode === PORTAL_MODE.IFRAME) {

            if (postParentMessage(token)) {
                return;
            }
        }

        if (this._mode === PORTAL_MODE.ALERT) {

            const textFormatter: SudooFormat = intl.format(locale);

            alert([
                textFormatter.get(PROFILE.DO_NOT_SHARE_CONTENT_BEFORE),
                token,
                textFormatter.get(PROFILE.DO_NOT_SHARE_CONTENT_AFTER),
            ].join('\n'));
            return;
        }

        if (this._mode === PORTAL_MODE.NONE) {

            const textFormatter: SudooFormat = intl.format(locale);
            const style: string = `font-size:24px;color:orange;background-color:white`;

            setTimeout(console.log.bind(console, `%c${textFormatter.get(PROFILE.DO_NOT_SHARE_CONTENT_BEFORE)}`, style), 1);
            setTimeout(console.log.bind(console, token), 1);
            setTimeout(console.log.bind(console, `%c${textFormatter.get(PROFILE.DO_NOT_SHARE_CONTENT_AFTER)}`, style), 1);
            return;
        }

        if (this._mode === PORTAL_MODE.POST) {

            if (postCurrentMessage(token)) {
                return;
            }
        }

        if (this._mode === PORTAL_MODE.REDIRECT) {

            const target: string = this.getCallback(token);
            replaceRedirectPath(target);
            return;
        }

        throw new Error("[Brontosaurus-Portal] Not Valid");
    }

    private getCallback(token: string): string {

        const formatted: string = decodeURIComponent(this.callbackPath);
        const url: URL = new URL(formatted);
        const entries: Array<[string, string]> = [...url.searchParams.entries()];
        const searchMap: Record<string, any> = {
            ...entries.reduce((previous: Record<string, any>, current: [string, string]) => {
                return {
                    ...previous,
                    [current[0]]: current[1],
                };
            }, {}),
            token,
        };

        const search: string = Object.keys(searchMap).reduce((previous: string, current: string, index: number) => {
            if (index === 0) {
                return `?${current}=${searchMap[current]}`;
            }
            return `${previous}&${current}=${searchMap[current]}`;
        }, '');

        return `${url.origin}${url.pathname}${search}`;
    }

    private setParams(applicationKey: string, callbackPath: string): Portal {

        this._applicationKey = applicationKey;
        this._callbackPath = callbackPath;
        return this;
    }

    private setUserAgentOverrideIfExist(userAgent: string | undefined | null): Portal {

        if (typeof userAgent === 'string') {
            return this.setUserAgentOverride(userAgent);
        }

        return this;
    }

    private setExternalLinkIfExist(externalLink: string | undefined | null): Portal {

        if (typeof externalLink === 'string') {
            if (externalLink === 'true') {
                this.setExternalLink(true);
                return this;
            }
        }

        this.setExternalLink(false);
        return this;
    }

    private setExternalLink(externalLink: boolean): Portal {

        this._externalLink = externalLink;
        return this;
    }

    private setUserAgentOverride(userAgent: string): Portal {

        this._userAgentOverride = userAgent;
        return this;
    }

    private setPlatformIfExist(platform: string | undefined | null): Portal {

        if (typeof platform === 'string') {
            return this.setPlatform(platform);
        }

        return this;
    }

    private setPlatform(platform: string): Portal {

        this._platform = platform;
        return this;
    }
}
