import { AdobeAnalyticsCommon } from './adobe-analytics.common';

import MobileCore = com.adobe.marketing.mobile.MobileCore;
import LoggingMode = com.adobe.marketing.mobile.LoggingMode;
import Lifecycle = com.adobe.marketing.mobile.Lifecycle;
import Signal = com.adobe.marketing.mobile.Signal;
import Identity = com.adobe.marketing.mobile.Identity;
import MobilePrivacyStatus = com.adobe.marketing.mobile.MobilePrivacyStatus;
import AdobeCallbackWithError = com.adobe.marketing.mobile.AdobeCallbackWithError;
export class AdobeAnalytics extends AdobeAnalyticsCommon {
    protected static _instance: AdobeAnalyticsCommon = new AdobeAnalytics();

    private app: any;

    public initSdk(environmentId: string, app: any): void {
        this.app = app;
        MobileCore.setApplication(this.app);
        MobileCore.setLogLevel(LoggingMode.DEBUG);
        Lifecycle.registerExtension();
        Identity.registerExtension();
        Signal.registerExtension();
        MobileCore.start(new AdobeCallbackWithError({
            fail(error: com.adobe.marketing.mobile.AdobeError): void {
                console.error("An error occured when trying to initialise adobe: " + error.getErrorName());
            },
            call(o: Object): void {
                console.log('Nije errorr');
                MobileCore.configureWithAppID(environmentId);
           }
        }));
    }

    public collectLifecycleData(additional: { [key: string]: any }): void {
        MobileCore.lifecycleStart(this.convertToHashMap(additional));
    }

    // Should be called on each Activity pause
    public pauseCollectingLifecycleData(): void {
        MobileCore.lifecyclePause();
    }

    // Should be called on each Activity resume
    public resumeCollectingLifecycleData(): void {
        MobileCore.setApplication(this.app);
        MobileCore.lifecycleStart(null);
    }

    public trackState(state: string, additional: { [key: string]: any }): void {
        MobileCore.trackState(state, this.convertToHashMap(additional));
    }

    public trackAction(action: string, additional: { [key: string]: any }): void {
        MobileCore.trackAction(action, this.convertToHashMap(additional));
    }

    public optIn(): void {
        MobileCore.setPrivacyStatus(MobilePrivacyStatus.OPT_IN);
    }

    public optOut(): void {
        MobileCore.setPrivacyStatus(MobilePrivacyStatus.OPT_OUT);
    }

    private convertToHashMap(dictionary: { [key: string]: any } = {}): java.util.Map<string, string> {
        return Object.keys(dictionary)
            .reduce((result, key) => {
                const value = dictionary[key];
                result.put(key, value);
                return result;
            }, new java.util.HashMap<string, string>());
    }

}
