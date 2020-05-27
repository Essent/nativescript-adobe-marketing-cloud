export declare abstract class AdobeAnalyticsCommon {
    protected static _instance: AdobeAnalyticsCommon;
    constructor();
    static getInstance(): AdobeAnalyticsCommon;
    abstract initSdk(adobeAnalyticsSettings: AdobeAnalyticsSettings, app: any): void;
    abstract collectLifecycleData(additional: {
        [key: string]: any;
    }): void;
    abstract pauseCollectingLifecycleData(): void;
    abstract resumeCollectingLifecycleData(): void;
    abstract trackState(state: string, additional: {
        [key: string]: any;
    }): void;
    abstract trackAction(action: string, additional: {
        [key: string]: any;
    }): void;
    abstract optIn(): void;
    abstract optOut(): void;
}
export interface AdobeAnalyticsSettings {
    environmentId: string;
    debug: boolean;
}
