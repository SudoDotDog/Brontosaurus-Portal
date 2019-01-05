/**
 * @author WMXPY
 * @namespace Portal
 * @description Index
 */

export class Portal {

    public static register(): void {

        if (this._instance) {

            throw new Error("[Brontosaurus-Portal] Already registered");
        }

        const url: URL = new URL(window.location.href);

        const applicationKey: string | null = url.searchParams.get("key");
        const callbackPath: string | null = url.searchParams.get("cb");

        if (applicationKey && callbackPath) {
            this._instance = new Portal(false).setParams(applicationKey, callbackPath);
        } else {
            this._instance = new Portal(true);
        }
    }

    public static get instance(): Portal {

        if (!this._instance) {

            throw new Error("[Brontosaurus-Portal] Did not register");
        }

        return this._instance;
    }

    private static _instance: Portal | undefined;

    private readonly _isErrored: boolean;

    private _applicationKey: string | null;
    private _callbackPath: string | null;

    private constructor(isErrored: boolean) {

        this._isErrored = isErrored;

        this._applicationKey = null;
        this._callbackPath = null;
    }

    public get isErrored(): boolean {

        return this._isErrored;
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

    private setParams(applicationKey: string, callbackPath: string): Portal {

        this._applicationKey = applicationKey;
        this._callbackPath = callbackPath;
        return this;
    }
}
