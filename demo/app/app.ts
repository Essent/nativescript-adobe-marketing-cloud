import * as application from "application";
import {AdobeAnalytics} from "nativescript-adobe-analytics";

application.on(application.launchEvent, function (args: application.ApplicationEventData) {
    if (args.android) {
        AdobeAnalytics.getInstance().setContext(application.android.context);
    } else if (args.ios !== undefined) {
        AdobeAnalytics.getInstance().collectLifecycleData(null);
    }
});

application.on(application.suspendEvent, function (args: application.ApplicationEventData) {
    if (args.android) {
        AdobeAnalytics.getInstance().pauseCollectingLifecycleData();
    }
});

application.on(application.resumeEvent, function (args: application.ApplicationEventData) {
    if (args.android) {
        AdobeAnalytics.getInstance().collectLifecycleData(application.android.foregroundActivity);
    }
});


if (application.android) {
    application.android.on(application.AndroidApplication.activityPausedEvent, function (args: application.AndroidActivityEventData) {
        AdobeAnalytics.getInstance().pauseCollectingLifecycleData();
    });

    application.android.on(application.AndroidApplication.activityResumedEvent, function (args: application.AndroidActivityEventData) {
        AdobeAnalytics.getInstance().collectLifecycleData(application.android.foregroundActivity);
    });
}

application.start({ moduleName: "main-page" });
