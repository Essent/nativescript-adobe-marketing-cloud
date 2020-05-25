// use take the ios or android .d.ts files and copy/paste them here
import { AdobeAnalyticsCommon } from './adobe-analytics.common';

export declare class AdobeAnalytics extends AdobeAnalyticsCommon {
    initSdk(environmentId: string, app: any): void;
    collectLifecycleData(additional: {
        [key: string]: any;
    }): void;
    pauseCollectingLifecycleData(): void;
    trackState(state: string, additional: {
        [key: string]: any;
    }): void;
    trackAction(action: string, additional: {
        [key: string]: any;
    }): void;
    optIn(): void;
    optOut(): void;
}
