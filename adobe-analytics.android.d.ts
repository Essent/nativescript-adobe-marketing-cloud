export declare class AdobeAnalytics {
    private static _instance;
    constructor();
    static getInstance(): AdobeAnalytics;
    setContext(applicationContext: android.content.Context): void;
    collectLifecycleData(activity: android.app.Activity, debugLogging?: boolean): void;
    pauseCollectingLifecycleData(): void;
    trackState(state: string, additional: {
        [key: string]: any;
    }): void;
    trackAction(action: string, additional: {
        [key: string]: any;
    }): void;
    trackTimedActionStart(action: string, additional: {
        [key: string]: any;
    }): void;
    trackTimedActionUpdate(action: string, additional: {
        [key: string]: any;
    }): void;
    trackTimedActionEnd(action: string): void;
    private convertToHashMap(dictionary);
}
