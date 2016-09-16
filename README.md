## Setting up the application for usage with this plugin.

# Set up lifecycle tracking

To track lifecycle in your application (essential) you need to set up listeners on application events, namely: 
1. launchEvent
2. suspendEvent
3. resumeEvent

TODO: update this code block with iOS

```
import * as application from "application";
import {NativescriptAdobeAnalytics} from "nativescript-adobe-analytics";

application.on(application.launchEvent, function (args: application.ApplicationEventData) {
    if (args.android) {
        NativescriptAdobeAnalytics.getInstance().setContext(application.android.context);
    } else if (args.ios !== undefined) {
        console.log("Launched iOS application with options: " + args.ios);
    }
});

application.on(application.suspendEvent, function (args: application.ApplicationEventData) {
    if (args.android) {
        NativescriptAdobeAnalytics.getInstance().pauseCollectingLifecycleData();
    } else if (args.ios) {
        console.log("UIApplication: " + args.ios);
    }
});

application.on(application.resumeEvent, function (args: application.ApplicationEventData) {
    if (args.android) {
        NativescriptAdobeAnalytics.getInstance().collectLifecycleData(application.android.foregroundActivity);
    } else if (args.ios) {
        console.log("UIApplication: " + args.ios);
    }
});

application.start({ moduleName: "main-page" });

```

Your config.json file should be located in your application assets.

# Track states and actions

Tracking states and actions is done through method calls on actions and state changes. 