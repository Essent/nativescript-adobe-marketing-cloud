import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import * as frameModule from "ui/frame";
import { HelloWorldModel } from './main-view-model';
import { AdobeAnalytics } from "nativescript-adobe-marketing-cloud";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
  // Get the event sender
  let page = <Page>args.object;
  page.bindingContext = new HelloWorldModel();
}

export function action(): void {
	var data: { [id: string]: any } = {
   		"ActionData": "ThisIsActionData"
	};
	AdobeAnalytics.getInstance().trackAction('SomeAction', data);
}

export function nextState(): void {
	let topmost = frameModule.topmost();
    topmost.navigate("second-page");
    var data: { [id: string]: any } = {
   		"StateData": "ThisIsDataFromTheFirstState"
	};
    AdobeAnalytics.getInstance().trackState('SecondState', data);
}
