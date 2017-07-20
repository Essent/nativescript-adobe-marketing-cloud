export declare abstract class AdobeAnalyticsCommon {
    protected static _instance: AdobeAnalyticsCommon;
    constructor();
    static getInstance(): AdobeAnalyticsCommon;
    abstract setContext(applicationContext: any ): void; //applicationContext type is android.content.Context
    abstract collectLifecycleData(activity: any, debugLogging?: boolean): void; //activity type is android.app.Activity
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
}
