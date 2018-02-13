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

    public abstract setContext(applicationContext: android.content.Context): void;
    public abstract collectLifecycleData(activity: android.app.Activity, debugLogging?: boolean): void;
    public abstract pauseCollectingLifecycleData();
    public abstract trackState(state: string, additional: { [key: string]: any }): void;
    public abstract trackAction(action: string, additional: { [key: string]: any }): void;
    public abstract trackTimedActionStart(action: string, additional: { [key: string]: any }): void;
    public abstract trackTimedActionUpdate(action: string, additional: { [key: string]: any }): void;
    public abstract trackTimedActionEnd(action: string): void;
    public abstract visitorAppendToURL(url: string): string;
}
