declare var com: any;

export class AdobeAnalytics {

    private static _instance: AdobeAnalytics = new AdobeAnalytics();

    constructor() {

        if (AdobeAnalytics._instance) {
            throw new Error("Error: Instantiation failed: Use AdobeAnalytics.getInstance() instead of new.");
        }
        AdobeAnalytics._instance = this;

    }

    public static getInstance(): AdobeAnalytics {
        return AdobeAnalytics._instance;
    }

    public setContext(applicationContext: android.content.Context): void {
        com.adobe.mobile.Config.overrideConfigStream(applicationContext.getResources().openRawResource(applicationContext.getResources().getIdentifier("adbmobileconfig", "raw", applicationContext.getPackageName())));
        com.adobe.mobile.Config.setContext(applicationContext);
    }

    public collectLifecycleData(activity: android.app.Activity, debugLogging: boolean = true): void {
        com.adobe.mobile.Config.setDebugLogging(java.lang.Boolean.valueOf(debugLogging));
        com.adobe.mobile.Config.collectLifecycleData(activity);
    }

    public pauseCollectingLifecycleData() {
        com.adobe.mobile.Config.pauseCollectingLifecycleData();
    }

    public trackState(state: string, additional: { [key: string]: any }): void {
        com.adobe.mobile.Analytics.trackState(state, this.convertToHashMap(additional));
    }

    public trackAction(action: string, additional: { [key: string]: any }): void {
        com.adobe.mobile.Analytics.trackAction(action, this.convertToHashMap(additional));
    }

    public trackTimedActionStart(action: string, additional: { [key: string]: any }): void {
        com.adobe.mobile.Analytics.trackTimedActionStart(action, this.convertToHashMap(additional));
    }

    public trackTimedActionUpdate(action: string, additional: { [key: string]: any }): void {
        com.adobe.mobile.Analytics.trackTimedActionUpdate(action, this.convertToHashMap(additional));
    }

    public trackTimedActionEnd(action: string): void {
        com.adobe.mobile.Analytics.trackTimedActionEnd(action, null);
    }

    private convertToHashMap(dictionary: { [key: string]: any }): java.util.Map<string, Object> {
        return Object.keys(dictionary)
            .reduce((result, key) => {
                const value = dictionary[key];
                result.put(key, value);
                return result;
            }, new java.util.HashMap<string, Object>());
    }

}
