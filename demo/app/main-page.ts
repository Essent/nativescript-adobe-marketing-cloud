import * as observable from "data/observable";
import * as pages from "ui/page";
import {HelloWorldModel} from "./main-view-model";
import * as frameModule from "ui/frame";
import {AdobeAnalytics} from "nativescript-testplugin";

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();

}

export function action(): void {
	AdobeAnalytics.getInstance().trackAction('SomeAction', null);
}

export function nextState(): void {
	let topmost = frameModule.topmost();
    topmost.navigate("second-page");
    AdobeAnalytics.getInstance().trackState('SecondState', null);
}