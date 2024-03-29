import { AdobeAnalyticsCommon } from './adobe-analytics.common';
import { AdobeAnalyticsSettings } from './adobe-analytics.common';

import MobileCore = com.adobe.marketing.mobile.MobileCore;
import LoggingMode = com.adobe.marketing.mobile.LoggingMode;
import Lifecycle = com.adobe.marketing.mobile.Lifecycle;
import Signal = com.adobe.marketing.mobile.Signal;
import Identity = com.adobe.marketing.mobile.Identity;
import Analytics = com.adobe.marketing.mobile.Analytics;
import UserProfile = com.adobe.marketing.mobile.UserProfile;
import Assurance = com.adobe.marketing.mobile.Assurance;
import Target = com.adobe.marketing.mobile.Target;
import MobilePrivacyStatus = com.adobe.marketing.mobile.MobilePrivacyStatus;
import AdobeCallbackWithError = com.adobe.marketing.mobile.AdobeCallbackWithError;
import AdobeCallback = com.adobe.marketing.mobile.AdobeCallback;
export class AdobeAnalytics extends AdobeAnalyticsCommon {
    protected static _instance: AdobeAnalyticsCommon = new AdobeAnalytics();

    private app: any;

    public initSdk(adobeAnalyticsSetting: AdobeAnalyticsSettings, app: android.app.Application): void {
        this.app = app;
        MobileCore.setApplication(this.app);
        MobileCore.setLogLevel(adobeAnalyticsSetting.debug ? LoggingMode.DEBUG : LoggingMode.ERROR);
        Assurance.registerExtension();
        Target.registerExtension();
        UserProfile.registerExtension();
        Identity.registerExtension();
        Lifecycle.registerExtension();
        Signal.registerExtension();
        Analytics.registerExtension();
        MobileCore.start(new AdobeCallbackWithError({
            fail(error: com.adobe.marketing.mobile.AdobeError): void {
                console.error("An error occured when trying to initialise adobe: " + error.getErrorName());
            },
            call(o: Object): void {
                MobileCore.configureWithAppID(adobeAnalyticsSetting.environmentId);
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

    public getExperienceCloudId(): Promise<string> {
        return new Promise((resolve, reject) => {
            Identity.getExperienceCloudId(new AdobeCallback({
                call(param: string): void {
                    resolve(param);
                }
            }));
        });
    }

    public getIdentityInfoVariables(): Promise<string> {
        return new Promise((resolve, reject) => {
            Identity.getUrlVariables(new AdobeCallback({
                call(params: string): void {
                    resolve(params);
               }
            }));
        });
    }

    private convertToHashMap(dictionary: { [key: string]: any } = {}): java.util.Map<string, string> {
        return Object.keys(dictionary)
            .reduce((result, key) => {
                const value = dictionary[key];
                result.put(key, value);
                return result;
            }, new java.util.HashMap<string, string>());
    }

    public startAssuranceSession(url: any) {
        //not applicable for Android
    }

}
