import { AdobeAnalyticsCommon } from './adobe-analytics.common';
import { AdobeAnalyticsSettings } from './adobe-analytics.common';

export class AdobeAnalytics extends AdobeAnalyticsCommon {
    protected static _instance: AdobeAnalyticsCommon = new AdobeAnalytics();

    public initSdk(adobeAnalyticsSettings: AdobeAnalyticsSettings, applicationState: number): void {
        ACPCore.setLogLevel(adobeAnalyticsSettings.debug ? ACPMobileLogLevel.Debug : ACPMobileLogLevel.Error);
        ACPCore.configureWithAppId(adobeAnalyticsSettings.environmentId);
        AEPAssurance.registerExtension();
        ACPTarget.registerExtension();
        ACPUserProfile.registerExtension();
        ACPIdentity.registerExtension();
        ACPLifecycle.registerExtension();
        ACPSignal.registerExtension();
        ACPAnalytics.registerExtension();
        ACPCore.start(function callback() {
            if (applicationState !== UIApplicationState.Background) {
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

    public getExperienceCloudId(): Promise<string> {
        return new Promise((resolve, reject) => {
            ACPIdentity.getExperienceCloudIdWithCompletionHandler(function completitionHandler(params: string, error: NSError) {
                if (error) {
                    console.error('Error while trying to retrieve ECID. Error code: ' + error.code);
                    reject (error);
                } else {
                    resolve(params);
                }
            });
        });
    }

    public getIdentityInfoVariables(): Promise<string> {
        return new Promise((resolve, reject) => {
            ACPIdentity.getUrlVariablesWithCompletionHandler(function completitionHandler(params: string, error: NSError) {
                if (error) {
                    console.error('Error while trying to retrieve identity URL variables. Error code: ' + error.code);
                    reject(error);
                } else {
                    resolve(params);
                }
            });
        });
    }

    /**
     * Should be called from applicationWillEnterForeground IOS delegate
     */
    public resumeCollectingLifecycleData(): void {
        ACPCore.lifecycleStart(null);
    }

    public startAssuranceSession(url: NSURL): void {
        AEPAssurance.startSession(url);
    }
}
