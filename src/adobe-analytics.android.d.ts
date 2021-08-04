import { AdobeAnalyticsCommon } from './adobe-analytics.common';
import { AdobeAnalyticsSettings } from './adobe-analytics.common';
export declare class AdobeAnalytics extends AdobeAnalyticsCommon {
    protected static _instance: AdobeAnalyticsCommon;
    private app;
    initSdk(adobeAnalyticsSetting: AdobeAnalyticsSettings, app: android.app.Application): void;
    collectLifecycleData(additional: {
        [key: string]: any;
    }): void;
    pauseCollectingLifecycleData(): void;
    resumeCollectingLifecycleData(): void;
    trackState(state: string, additional: {
        [key: string]: any;
    }): void;
    trackAction(action: string, additional: {
        [key: string]: any;
    }): void;
    optIn(): void;
    optOut(): void;
    getExperienceCloudId(): Promise<string>;
    getIdentityInfoVariables(): Promise<string>;
    private convertToHashMap;
    startAssuranceSession(url: any): void;
}
