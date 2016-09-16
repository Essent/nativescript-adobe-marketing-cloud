import * as observable from "data/observable";
import * as pages from "ui/page";
import {SecondPageModel} from "./second-view-model";
import * as frameModule from "ui/frame";
import {AdobeAnalytics} from "nativescript-testplugin";

// Event handler for Page "loaded" event attached in second-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new SecondPageModel();

}

export function timedAction(): void {
	AdobeAnalytics.getInstance().trackTimedActionStart('timed.action', null);
	var millisecondsToWait = 500;
	setTimeout(function() {
	    AdobeAnalytics.getInstance().trackTimedActionEnd('timed.action', null);
	}, millisecondsToWait);
}

export function previousState(): void {
	let topmost = frameModule.topmost();
    topmost.navigate("main-page");
    AdobeAnalytics.getInstance().trackState('MainState', null);
}