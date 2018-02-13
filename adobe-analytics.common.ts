export abstract class AdobeAnalyticsCommon {
    protected static _instance: AdobeAnalyticsCommon;

    constructor() {
        if (AdobeAnalyticsCommon._instance) {
            throw new Error("Error: Instantiation failed: Use AdobeAnalytics.getInstance() instead of new.");
        }
        AdobeAnalyticsCommon._instance = this;
    }

    public static getInstance(): AdobeAnalyticsCommon {
        return AdobeAnalyticsCommon._instance;
    }

    public abstract setContext(applicationContext: any ): void; //applicationContext type is android.content.Context
    public abstract collectLifecycleData(activity: any, debugLogging?: boolean): void; //activity type is android.app.Activity
    public abstract pauseCollectingLifecycleData();
    public abstract trackState(state: string, additional: { [key: string]: any }): void;
    public abstract trackAction(action: string, additional: { [key: string]: any }): void;
    public abstract trackTimedActionStart(action: string, additional: { [key: string]: any }): void;
    public abstract trackTimedActionUpdate(action: string, additional: { [key: string]: any }): void;
    public abstract trackTimedActionEnd(action: string): void;
}
