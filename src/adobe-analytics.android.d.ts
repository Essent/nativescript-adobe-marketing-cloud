import { AdobeAnalyticsCommon } from './adobe-analytics.common';
export declare class AdobeAnalytics extends AdobeAnalyticsCommon {
    protected static _instance: AdobeAnalyticsCommon;
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
    private convertToHashMap;
}
