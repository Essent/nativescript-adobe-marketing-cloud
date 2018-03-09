import * as application from "tns-core-modules/application";
import { AdobeAnalytics } from "nativescript-adobe-marketing-cloud";

application.on(application.launchEvent, (args: application.ApplicationEventData) => {
    if (args.android) {
        AdobeAnalytics.getInstance().setContext(application.android.context);
    } else if (args.ios !== undefined) {
        AdobeAnalytics.getInstance().collectLifecycleData(null);
    }
});

application.on(application.suspendEvent, (args: application.ApplicationEventData) => {
    if (args.android) {
        AdobeAnalytics.getInstance().pauseCollectingLifecycleData();
    }
});

application.on(application.resumeEvent, (args: application.ApplicationEventData) => {
    if (args.android) {
        AdobeAnalytics.getInstance().collectLifecycleData(application.android.foregroundActivity);
    }
});


if (application.android) {
    application.android.on(application.AndroidApplication.activityPausedEvent, (args: application.AndroidActivityEventData) => {
        AdobeAnalytics.getInstance().pauseCollectingLifecycleData();
    });

    application.android.on(application.AndroidApplication.activityResumedEvent, (args: application.AndroidActivityEventData) => {
        AdobeAnalytics.getInstance().collectLifecycleData(application.android.foregroundActivity);
    });
}

application.start({ moduleName: "main-page" });
