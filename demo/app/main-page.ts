import { EventData } from 'tns-core-modules/data/observable';
import { Label } from 'tns-core-modules/ui/label';
import { Page } from 'tns-core-modules/ui/page';
import * as frameModule from "tns-core-modules/ui/frame";
import { HelloWorldModel } from './main-view-model';
import { AdobeAnalytics } from "nativescript-adobe-experience-cloud";
import * as view from "tns-core-modules/ui/core/view";

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

export function optIn(): void {
    AdobeAnalytics.getInstance().optIn();
}

export function optOut(): void {
    AdobeAnalytics.getInstance().optOut();
}
