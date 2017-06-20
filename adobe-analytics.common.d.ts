export declare abstract class AdobeAnalyticsCommon {
    protected static _instance: AdobeAnalyticsCommon;
    constructor();
    static getInstance(): AdobeAnalyticsCommon;
    abstract setContext(applicationContext: android.content.Context): void;
    abstract collectLifecycleData(activity: android.app.Activity, debugLogging?: boolean): void;
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
    abstract trackLocation(location: android.location.Location | CLLocation, additional: {
        [key: string]: any;
    }): void;
    abstract optin(): void;
    abstract optout(): void;
}
