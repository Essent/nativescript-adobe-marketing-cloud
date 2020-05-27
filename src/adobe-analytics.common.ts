export abstract class AdobeAnalyticsCommon {
    protected static _instance: AdobeAnalyticsCommon;

    constructor() {
        if (AdobeAnalyticsCommon._instance) {
            throw new Error("Error: Instantiation failed: Use AdobeAnalytics.getInstance() instead of new.");
        }
        AdobeAnalyticsCommon._instance = this;
    }

    public static getInstance(): AdobeAnalyticsCommon {
        return AdobeAnalyticsCommon._instance;
    }

  public abstract initSdk(adobeAnalyticsSettings: AdobeAnalyticsSettings, app: any): void; // app is type of globalAndroid.app.Application or UIApplication for IOS
  public abstract collectLifecycleData(additional: { [key: string]: any }): void;
  public abstract pauseCollectingLifecycleData(): void;
  public abstract resumeCollectingLifecycleData(): void;
  public abstract trackState(state: string, additional: { [key: string]: any }): void;
  public abstract trackAction(action: string, additional: { [key: string]: any }): void;
  public abstract optIn(): void;
  public abstract optOut(): void;
}

export interface AdobeAnalyticsSettings {
    environmentId: string;
    debug: boolean;
}
