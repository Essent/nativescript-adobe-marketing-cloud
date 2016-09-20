import * as app from "application";
import * as dialogs from "ui/dialogs";

declare var ADBMobile: any;

export class AdobeAnalytics {

private static _instance: AdobeAnalytics = new AdobeAnalytics();

constructor() {

	if(AdobeAnalytics._instance){
            throw new Error("Error: Instantiation failed: Use AdobeAnalytics.getInstance() instead of new.");
        }
        AdobeAnalytics._instance = this;
}

  public static getInstance():AdobeAnalytics
  {
    return AdobeAnalytics._instance;
  }


  public setContext(applicationContext:any): void {
    // not applicable for iOS
  }

  public collectLifecycleData(activity:any): void {
    console.log('Collect lifecycle called');
    // call the adbMobile collectlifecycle here
    ADBMobile.setDebugLogging(true);
    ADBMobile.collectLifecycleData();
    console.log(ADBMobile.trackingIdentifier());
    console.log(ADBMobile);
    // ADBMobile.collectLifecycleDataWithAdditionalData(contextData);
  }

  public pauseCollectingLifecycleData() {
    // not applicable for iOS
  }

  public trackState(state: string, additional: {[key: string]:any}): void {
    ADBMobile.trackState(state, null);    
  } 

  public trackAction(action: string, additional: {[key: string]:any}): void {
    ADBMobile.trackAction(action, null);
  }  
   
  public trackTimedActionStart(action: string, additional: {[key: string]:any}): void {
    ADBMobile.trackTimedActionStart(action, null);
  } 
   
  public trackTimedActionUpdate(action: string, additional: {[key: string]:any}): void {
    ADBMobile.trackTimedActionUpdate(action, null);
  } 
   
  public trackTimedActionEnd(action: string): void {
    ADBMobile.trackTimedActionEnd(action);
  }

}
