import { AdobeAnalyticsCommon } from './adobe-analytics.common';
import { AdobeAnalyticsSettings } from './adobe-analytics.common';
export declare class AdobeAnalytics extends AdobeAnalyticsCommon {
    protected static _instance: AdobeAnalyticsCommon;
    initSdk(adobeAnalyticsSettings: AdobeAnalyticsSettings, app: UIApplication): void;
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
    getExperienceCloudId(): Promise<string>;
    getIdentityInfoVariables(): Promise<string>;
    resumeCollectingLifecycleData(): void;
}
