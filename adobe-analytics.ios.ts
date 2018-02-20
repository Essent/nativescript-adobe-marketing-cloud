import { AdobeAnalyticsCommon } from './adobe-analytics.common';

declare type ADBMobile = any;

export class AdobeAnalytics extends AdobeAnalyticsCommon {
    protected static _instance: AdobeAnalyticsCommon = new AdobeAnalytics();

    public setContext(applicationContext: any): void {
        // not applicable for iOS
    }

    public collectLifecycleData(activity: any, debugLogging: boolean = true): void {
        ADBMobile.setDebugLogging(debugLogging);
        ADBMobile.collectLifecycleData();
    }

    public pauseCollectingLifecycleData() {
        // not applicable for iOS
    }

    public trackState(state: string, additional: { [key: string]: any }): void {
        ADBMobile.trackStateData(state, <NSDictionary<any, any>>additional);
    }

    public trackAction(action: string, additional: { [key: string]: any }): void {
        ADBMobile.trackActionData(action, <NSDictionary<any, any>>additional);
    }

    public trackTimedActionStart(action: string, additional: { [key: string]: any }): void {
        ADBMobile.trackTimedActionStartData(action, <NSDictionary<any, any>>additional);
    }

    public trackTimedActionUpdate(action: string, additional: { [key: string]: any }): void {
        ADBMobile.trackTimedActionUpdateData(action, <NSDictionary<any, any>>additional);
    }

    public trackTimedActionEnd(action: string): void {
        ADBMobile.trackTimedActionEndLogic(action, null);
    }

    public visitorAppendToURL(url: string): string {
        const nsurl = NSURL.URLWithString(url);
        const urlWithVisitorData = ADBMobile.visitorAppendToURL(nsurl);

        return urlWithVisitorData.absoluteString;
    }

    public trackLocation(location: CLLocation, additional: { [key: string]: any; }): void {
        ADBMobile.trackLocationData(location, <NSDictionary<any, any>>additional);
    }

    public optIn(): void {
        ADBMobile.setPrivacyStatus(ADBMobilePrivacyStatus.OptIn);
    }

    public optOut(): void {
        ADBMobile.setPrivacyStatus(ADBMobilePrivacyStatus.OptOut);
    }
}
