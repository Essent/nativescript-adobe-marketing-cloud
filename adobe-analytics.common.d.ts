export declare abstract class AdobeAnalyticsCommon {
    protected static _instance: AdobeAnalyticsCommon;
    constructor();
    static getInstance(): AdobeAnalyticsCommon;
    abstract setContext(applicationContext: any): void;
    abstract collectLifecycleData(activity: any, debugLogging?: boolean): void;
    abstract pauseCollectingLifecycleData(): any;
    abstract trackState(state: string, additional: {
        [key: string]: any;
    }): void;
    abstract trackAction(action: string, additional: {
        [key: string]: any;
    }): void;
    abstract trackTimedActionStart(action: string, additional: {
        [key: string]: any;
    }): void;
    abstract trackTimedActionUpdate(action: string, additional: {
        [key: string]: any;
    }): void;
    abstract trackTimedActionEnd(action: string): void;
    abstract visitorAppendToURL(url: string): string;
    abstract trackLocation(location: android.location.Location | CLLocation, additional: {
        [key: string]: any;
    }): void;
    abstract optin(): void;
    abstract optout(): void;
}
