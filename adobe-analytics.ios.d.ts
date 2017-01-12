export declare class AdobeAnalytics {
    private static _instance;
    constructor();
    static getInstance(): AdobeAnalytics;
    setContext(applicationContext: any): void;
    collectLifecycleData(activity: any, debugLogging?: boolean): void;
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
}
