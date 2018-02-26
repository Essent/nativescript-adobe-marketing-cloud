import { EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';
import * as frameModule from "tns-core-modules/ui/frame";
import { HelloWorldModel } from './main-view-model';
import { AdobeAnalytics } from "nativescript-adobe-marketing-cloud";

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: EventData) {
    // Get the event sender
    let page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function action(): void {
    let data: { [id: string]: any } = {
        "ActionData": "ThisIsActionData"
    };
    AdobeAnalytics.getInstance().trackAction('SomeAction', data);
}

export function nextState(): void {
    let topmost = frameModule.topmost();
    topmost.navigate("second-page");
    let data: { [id: string]: any } = {
        "StateData": "ThisIsDataFromTheFirstState"
    };
    AdobeAnalytics.getInstance().trackState('SecondState', data);
}
