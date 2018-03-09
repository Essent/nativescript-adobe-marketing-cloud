import * as observable from "tns-core-modules/data/observable";
import * as pages from "tns-core-modules/ui/page";
import { SecondPageModel } from "./second-view-model";
import * as frameModule from "tns-core-modules/ui/frame";
import { AdobeAnalytics } from "nativescript-adobe-marketing-cloud";

// Event handler for Page "loaded" event attached in second-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new SecondPageModel();

}

export function startTimedAction(): void {
    let data: { [id: string]: any } = {
        "TimedActionStartData": "ThisIsData"
    };
    AdobeAnalytics.getInstance().trackTimedActionStart('TimedAction', data);
}

export function updateTimedAction(): void {
    let data: { [id: string]: any } = {
        "TimedActionUpdateData": "ThisIsUpdatedData"
    };
    AdobeAnalytics.getInstance().trackTimedActionUpdate('TimedAction', data);
}

export function endTimedAction(): void {
    AdobeAnalytics.getInstance().trackTimedActionEnd('TimedAction');
}

export function previousState(): void {
    let topmost = frameModule.topmost();
    topmost.navigate("main-page");
    let data: { [id: string]: any } = {
        "TrackStateData": "ThisIsTrackStateData"
    };
    AdobeAnalytics.getInstance().trackState('MainState', data);
}
