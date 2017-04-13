import { AdobeAnalyticsCommon } from './adobe-analytics.common';

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
}
