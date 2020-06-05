import { AdobeAnalyticsCommon } from './adobe-analytics.common';
import { AdobeAnalyticsSettings } from './adobe-analytics.common';

export class AdobeAnalytics extends AdobeAnalyticsCommon {
    protected static _instance: AdobeAnalyticsCommon = new AdobeAnalytics();

    public initSdk(adobeAnalyticsSettings: AdobeAnalyticsSettings, app: UIApplication): void {
        ACPCore.setLogLevel(adobeAnalyticsSettings.debug ? ACPMobileLogLevel.Debug : ACPMobileLogLevel.Error);
        ACPCore.configureWithAppId(adobeAnalyticsSettings.environmentId);
        ACPUserProfile.registerExtension();
        ACPIdentity.registerExtension();
        ACPLifecycle.registerExtension();
        ACPSignal.registerExtension();
        ACPAnalytics.registerExtension();
        ACPCore.start(function callback() {
            if (app.applicationState !== UIApplicationState.Background) {
                ACPCore.lifecycleStart(null);
            }
        });
    }

    public collectLifecycleData(additional: { [key: string]: any }): void {
        ACPCore.lifecycleStart(<NSDictionary<string, string>>additional);
    }

    // Should be called on applicationDidEnterBackground
    public pauseCollectingLifecycleData(): void {
        ACPCore.lifecyclePause();
    }

    public trackState(state: string, additional: { [key: string]: any }): void {
        ACPCore.trackStateData(state, <NSDictionary<string, string>>additional);
    }

    public trackAction(action: string, additional: { [key: string]: any }): void {
        ACPCore.trackActionData(action, <NSDictionary<string, string>>additional);
    }

    public optIn(): void {
        ACPCore.setPrivacyStatus(ACPMobilePrivacyStatus.OptIn);
    }

    public optOut(): void {
        ACPCore.setPrivacyStatus(ACPMobilePrivacyStatus.OptOut);
    }

    /**
     * Should be called from applicationWillEnterForeground IOS delegate
     */
    public resumeCollectingLifecycleData(): void {
        ACPCore.lifecycleStart(null);
    }
}
