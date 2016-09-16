import * as app from "application";
import * as dialogs from "ui/dialogs";

declare var android: any;
declare var com: any;

export class AdobeAnalytics {

private static _instance: AdobeAnalytics = new AdobeAnalytics();

constructor() {

	if(AdobeAnalytics._instance)
  {
    throw new Error("Error: Instantiation failed: Use AdobeAnalytics.getInstance() instead of new.");
  }
  AdobeAnalytics._instance = this;

}

  public static getInstance():AdobeAnalytics {
    return AdobeAnalytics._instance;
  }


  public setContext(applicationContext:android.content.Context): void {
    com.adobe.mobile.Config.setContext(applicationContext);
  }

  public collectLifecycleData(activity:android.app.Activity): void {
    com.adobe.mobile.Config.collectLifecycleData(activity);
  }

  public pauseCollectingLifecycleData() {
    com.adobe.mobile.Config.pauseCollectingLifecycleData();
  }

  public trackState(state: string, additional: {[key: string]:any}): void {
    com.adobe.mobile.Analytics.trackState(state, additional);
  } 

  public trackAction(action: string, additional: {[key: string]:any}): void {
    com.adobe.mobile.Analytics.trackAction(action, additional);
  }  
   
  public trackTimedActionStart(action: string, additional: {[key: string]:any}): void {
    com.adobe.mobile.Analytics.trackTimedActionStart(action, additional);
  } 
   
  public trackTimedActionUpdate(action: string, additional: {[key: string]:any}): void {
    com.adobe.mobile.Analytics.trackTimedActionUpdate(action, additional);
  } 
   
  public trackTimedActionEnd(action: string): void {
    com.adobe.mobile.Analytics.trackTimedActionEnd(action);
  }

}
