import * as app from "application";

declare var android: any;
declare var com: any;
declare var java: any;

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
    com.adobe.mobile.Config.overrideConfigStream(applicationContext.getResources().openRawResource(applicationContext.getResources().getIdentifier("adbmobileconfig","raw", applicationContext.getPackageName())));
    com.adobe.mobile.Config.setContext(applicationContext);
  }

  public collectLifecycleData(activity:android.app.Activity): void {
    com.adobe.mobile.Config.setDebugLogging(java.lang.Boolean.valueOf(true));
    com.adobe.mobile.Config.collectLifecycleData(activity);
  }

  public pauseCollectingLifecycleData() {
    com.adobe.mobile.Config.pauseCollectingLifecycleData();
  }

  public trackState(state: string, additional: {[key: string]:any}): void {
    com.adobe.mobile.Analytics.trackState(state, this.convertToHashMap(additional));
  } 

  public trackAction(action: string, additional: {[key: string]:any}): void {
    com.adobe.mobile.Analytics.trackAction(action, this.convertToHashMap(additional));
  }  
   
  public trackTimedActionStart(action: string, additional: {[key: string]:any}): void {
    com.adobe.mobile.Analytics.trackTimedActionStart(action, this.convertToHashMap(additional));
  } 
   
  public trackTimedActionUpdate(action: string, additional: {[key: string]:any}): void {
    com.adobe.mobile.Analytics.trackTimedActionUpdate(action, this.convertToHashMap(additional));
  } 
   
  public trackTimedActionEnd(action: string): void {
    com.adobe.mobile.Analytics.trackTimedActionEnd(action, null);
  }

  private convertToHashMap(dictionary: {[key: string]:any}): java.util.Map<String, Object> {
    var map = new java.util.HashMap();
    for (var key in dictionary) {
      var value = dictionary[key];
      map.put(key, value);
    }
    return map;
  }

}
