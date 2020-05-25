import { AdobeAnalyticsCommon } from './adobe-analytics.common';

export class AdobeAnalytics extends AdobeAnalyticsCommon {
    protected static _instance: AdobeAnalyticsCommon = new AdobeAnalytics();

    public initSdk(environmentId: string, app: any): void {
        ACPCore.setLogLevel(ACPMobileLogLevel.Debug);
        ACPCore.configureWithAppId(environmentId);
        ACPLifecycle.registerExtension();
        ACPIdentity.registerExtension();
        ACPSignal.registerExtension();
        ACPCore.start(null);
    }

    public collectLifecycleData(additional: { [key: string]: any }): void {
        ACPCore.lifecycleStart(<NSDictionary<string, string>>additional);
    }

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
}
