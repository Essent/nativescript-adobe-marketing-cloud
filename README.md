# Nativescript plugin for Adobe Marketing Cloud Solutions
[![npm version](https://badge.fury.io/js/nativescript-adobe-marketing-cloud.svg)](https://badge.fury.io/js/nativescript-adobe-marketing-cloud)

```
npm install nativescript-adobe-marketing-cloud --save
```

Based on:
- https://github.com/Adobe-Marketing-Cloud/mobile-services/releases/tag/v4.13.4-iOS
- https://github.com/Adobe-Marketing-Cloud/mobile-services/releases/tag/v4.13.4-Android

# Setting up the application for usage with this plugin.

## Set up lifecycle tracking

Listen to lifecycle events:

```
import * as application from "application";
import {AdobeAnalytics} from "nativescript-adobe-marketing-cloud";

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

## Setup ADBMobileConfig.json
Get the config file from the Adobe dashboard.

### iOS
place `ADBMobileConfig.json` file in `app\App_Resources\iOS`

## Android
place `adbmobileconfig.json` file in `app\App_Resources\Android\raw`


## Track states and actions

States and actions can be traced through method calls that match their native counterparts signature.

# Develop a NativeScript plugin now (w/ TypeScript)

## Getting started

1. `git clone https://git.essent.nl/scm/feapp/nativescript-adobe-marketing-cloud.git`
2. `npm install -g typescript`
3. `cd nativescript-adobe-marketing-cloud`
5. `npm run setup`
6. `npm run demo.android`

This seed expands on several things [presented here](http://developer.telerik.com/featured/creating-nativescript-plugins-in-typescript/).

## Usage

The seed is prepared to allow you to test and try out your plugin via the `demo` folder.
Additionally it provides a proper `.gitignore` to keep GitHub tidy as well as `.npmignore` to ensure everyone is happy when you publish your plugin via npm.

### Linking to CocoaPod or Android Arsenal plugins

You will want to create these folders and files in the root:

```
platforms --
  ios --
    Podfile
  android --
    include.gradle
```

Doing so will open up those native apis to your plugin :)

Take a look at these existing plugins for how that can be done very simply:

* [nativescript-cardview](https://github.com/bradmartin/nativescript-cardview/tree/master/platforms)
* [nativescript-floatingactionbutton](https://github.com/bradmartin/nativescript-floatingactionbutton/tree/master/platforms)

### Typical development workflow:

1. Make changes to plugin files
2. Make changes in `demo` that would test those changes out
3. `npm run demo.ios` or `npm run demo.android`  **(must be run from the root directory)**

Those `demo` tasks are just general helpers. You may want to have more granular control on the device and/or emulator you want to run. For that, you can just run things the manual way:

```
cd demo

// when developing, to ensure the latest code is built into the demo, it's a guarantee to remove the plugin and add it back
tns plugin remove nativescript-adobe-marketing-cloud
tns plugin add ..

// manual platform adds
tns platform add ios
// and/or
tns platform add android
```

Then use any of the available options from the `tns` command line:

* [Emulate your project](https://github.com/NativeScript/nativescript-cli#emulate-your-project)
* [Run your project](https://github.com/NativeScript/nativescript-cli#run-your-project)
* [Full list of commands](https://github.com/NativeScript/nativescript-cli#the-commands)

## Publish

When you have everything ready to publish:

* Bump the version number in `package.json`
* `npm run build` - **very important** - ensure the latest is built **before** you publish
* `npm publish`
