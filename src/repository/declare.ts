/**
 * @author WMXPY
 * @namespace Repository
 * @description Declare
 */

import { Portal } from "../portal/portal";

export type BaseAttemptBody = {

    readonly target: string;
    readonly platform: string;

    readonly userAgentOverride?: string;
};

export const extendAttemptBody = <T extends BaseAttemptBody>(portal: Portal, original: Omit<T, keyof BaseAttemptBody>): T => {

    const platform: string = typeof portal.platform === 'string'
        ? portal.platform
        : '[WEB-DEFAULT]';

    if (typeof portal.userAgentOverride === 'string') {
        return {
            ...original,
            platform,
            target: portal.callbackPath,
            userAgentOverride: portal.userAgentOverride,
        } as T;
    }

    return {
        ...original,
        platform,
        target: portal.callbackPath,
    } as T;
};
