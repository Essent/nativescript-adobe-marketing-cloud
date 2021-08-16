import { EventData, Page, Frame } from '@nativescript/core';
import { HelloWorldModel } from './main-view-model';
import { AdobeAnalytics } from "@essent/nativescript-adobe-experience-cloud";

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: EventData) {
    // Get the event sender
    let page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
    AdobeAnalytics.getInstance().getExperienceCloudId().then(param => console.log('ECID: ' + param));
}

export function action(): void {
    let data: { [id: string]: any } = {
        "ActionData": "ThisIsActionData"
    };
    AdobeAnalytics.getInstance().trackAction('SomeAction', data);
}

export function nextState(): void {
    let topmost = Frame.topmost();
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
