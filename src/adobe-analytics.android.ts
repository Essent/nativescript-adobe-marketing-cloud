import { AdobeAnalyticsCommon } from './adobe-analytics.common';

declare var com: any;

export class AdobeAnalytics extends AdobeAnalyticsCommon {
    protected static _instance: AdobeAnalyticsCommon = new AdobeAnalytics();

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

    public trackLocation(location: android.location.Location, additional: { [key: string]: any; }): void {
        com.adobe.mobile.Analytics.trackLocation(location, this.convertToHashMap(additional));
    }

    public optIn(): void {
        com.adobe.mobile.Config.setPrivacyStatus(com.adobe.mobile.MobilePrivacyStatus.MOBILE_PRIVACY_STATUS_OPT_IN);
    }

    public optOut(): void {
        com.adobe.mobile.Config.setPrivacyStatus(com.adobe.mobile.MobilePrivacyStatus.MOBILE_PRIVACY_STATUS_OPT_OUT);
    }

    private convertToHashMap(dictionary: { [key: string]: any } = {}): java.util.Map<string, Object> {
        return Object.keys(dictionary)
            .reduce((result, key) => {
                const value = dictionary[key];
                result.put(key, value);
                return result;
            }, new java.util.HashMap<string, Object>());
    }

    public visitorAppendToURL(url: string): string {
        return com.adobe.mobile.Visitor.appendToURL(url);
    }

}
