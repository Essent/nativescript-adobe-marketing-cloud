## Setting up the application for usage with this plugin.

# Set up lifecycle tracking

Listen to lifecycle events:

```
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

```

ADBConfig.json file should be located in App_Resources.

TODO: Android config file in App_Resources doesnt work, but manually adding it to src/main/assets does.

# Track states and actions

States and actions can be traced through method calls that match their native counterparts signature.

