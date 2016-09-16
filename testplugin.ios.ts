import * as app from "application";
import * as dialogs from "ui/dialogs";

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
    // do nothing
  }

  public collectLifecycleData(activity:any): void {
    // do nothing
  }

  public pauseCollectingLifecycleData() {
    // do nothing
  }

  public trackState(state: string, additional: {[key: string]:any}): void {
    // do nothing
  } 

  public trackAction(action: string, additional: {[key: string]:any}): void {
    // do nothing
  }  
   
  public trackTimedActionStart(action: string, additional: {[key: string]:any}): void {
    // do nothing
  } 
   
  public trackTimedActionUpdate(action: string, additional: {[key: string]:any}): void {
    // do nothing
  } 
   
  public trackTimedActionEnd(action: string): void {
    // do nothing
  }

}
