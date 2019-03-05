/**
 * @author WMXPY
 * @namespace Portal
 * @description Index
 */

export enum PORTAL_MODE {
    REDIRECT = "REDIRECT",
    IFRAME = "IFRAME",
    ERROR = "ERROR",
}

export class Portal {

    public static register(): void {

        if (this._instance) {

            throw new Error("[Brontosaurus-Portal] Already registered");
        }

        const url: URL = new URL(window.location.href);

        const applicationKey: string | null = url.searchParams.get("key");
        const callbackPath: string | null = url.searchParams.get("cb");

        if (applicationKey && callbackPath) {

            if (callbackPath === 'IFRAME') {
                this._instance = new Portal(PORTAL_MODE.IFRAME).setParams(applicationKey, callbackPath);
            } else {
                this._instance = new Portal(PORTAL_MODE.REDIRECT).setParams(applicationKey, callbackPath);
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

    public static flush(token: string): void {

        this.instance.flush(token);
        return;
    }

    private static _instance: Portal | undefined;

    private readonly _mode: PORTAL_MODE;

    private _applicationKey: string | null;
    private _callbackPath: string | null;

    private constructor(mode: PORTAL_MODE) {

        this._mode = mode;

        this._applicationKey = null;
        this._callbackPath = null;
    }

    public get isErrored(): boolean {

        return this._mode === PORTAL_MODE.ERROR;
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

    public flush(token: string): void {

        if (this._mode === PORTAL_MODE.IFRAME) {

            if (window.parent) {
                window.parent.postMessage({
                    type: 'Brontosaurus',
                    status: 'Succeed',
                    token,
                }, '*');
                return;
            }
        }

        if (this._mode === PORTAL_MODE.REDIRECT) {

            window.location.href = this.callbackPath + '?token=' + token;
            return;
        }

        throw new Error("[Brontosaurus-Portal] Not valid");
    }

    private setParams(applicationKey: string, callbackPath: string): Portal {

        this._applicationKey = applicationKey;
        this._callbackPath = callbackPath;
        return this;
    }
}
