import { EventData, Page, Frame } from "@nativescript/core";
import { SecondPageModel } from "./second-view-model";
import { AdobeAnalytics } from "@essent/nativescript-adobe-experience-cloud";

// Event handler for Page "loaded" event attached in second-page.xml
export function pageLoaded(args: EventData) {
    // Get the event sender
    let page = <Page>args.object;
    page.bindingContext = new SecondPageModel();

}

export function previousState(): void {
    let topmost = Frame.topmost();
    topmost.navigate("main-page");
    let data: { [id: string]: any } = {
        "TrackStateData": "ThisIsTrackStateData"
    };
    AdobeAnalytics.getInstance().trackState('MainState', data);
}
