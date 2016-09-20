import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import * as frameModule from "ui/frame";
import { HelloWorldModel } from './main-view-model';
import { AdobeAnalytics } from "nativescript-adobe-analytics";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
  // Get the event sender
  let page = <Page>args.object;
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