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

## Privacy options
See: https://marketing.adobe.com/resources/help/en_US/mobile/ios/privacy.html

Select a privacy option:

Send Data Until Opt-Out
```
AdobeAnalytics.getInstance().optIn();
```
Hold Data Until Opt-In
```
AdobeAnalytics.getInstance().optOut();
```

## Visitor Tracking Between an App and Mobile Web
See: https://marketing.adobe.com/resources/help/en_US/mobile/ios/hybrid_app.html
You can call:
```
AdobeAnalytics.getInstance().visitorAppendToURL(url);
```

This will return the url provided extended with the visitorId.

#### <a name='Developmentsetup'></a>Development setup
For easier development and debugging purposes continue with the following steps:

1. Open a command prompt/terminal, navigate to `src` folder and run `npm run demo.ios` or `npm run demo.android` to run the demo.
2. Open another command prompt/terminal, navigate to `src` folder and run `npm run plugin.tscwatch` to watch for file changes in your plugin.

Now go and make a change to your plugin. It will be automatically applied to the demo project.

NOTE: If you need to use a native library in your plugin or do some changes in Info.plist/AndroidManifest.xml, these cannot be applied to the demo project only by npm link. In such scenario, you need to use `tns plugin add ../src` from the `demo` so that the native libraries and changes in the above-mentioned files are applied in the demo. Then you can link again the code of your plugin in the demo by using `npm run plugin.link` from the `src`.

### <a name='LinkingtoCocoaPodorAndroidArsenalplugins'></a>Linking to CocoaPod or Android Arsenal plugins

You will want to create these folders and files in the `src` folder in order to use native APIs:

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
* [nativescript-floatingactionbutton](https://github.com/bradmartin/nativescript-floatingactionbutton/tree/master/src/platforms)

### Clean plugin and demo files

Sometimes you may need to wipe away the `node_modules` and `demo/platforms` folders to reinstall them fresh.

* Run `npm run clean` to wipe those clean then you can can run `npm i` to install fresh dependencies.

Sometimes you just need to wipe out the demo's `platforms` directory only:

* Run `npm run demo.reset` to delete the demo's `platforms` directory only.

Sometimes you may need to ensure plugin files are updated in the demo:

* Run `npm run plugin.prepare` will do a fresh build of the plugin then remove itself from the demo and add it back for assurance.

### <a name='Unittesting'></a>Unittesting
The plugin seed automatically adds Jasmine-based unittest support to your plugin.
Open `demo/app/tests/tests.js` and adjust its contents so the tests become meaningful in the context of your plugin and its features.

You can read more about this topic [here](https://docs.nativescript.org/tooling/testing).

Once you're ready to test your plugin's API go to `src` folder and execute one of these commands:

```
npm run test.ios
npm run test.android
```

### <a name='PublishtoNPM'></a>Publish to NPM

When you have everything ready to publish:

* Bump the version number in `src/package.json`
* Go to `publish` and execute `publish.sh` (run `chmod +x *.sh` if the file isn't executable)

If you just want to create a package, go to `publish` folder and execute `pack.sh`. The package will be created in `publish/package` folder.

**NOTE**: To run bash script on Windows you can install [GIT SCM](https://git-for-windows.github.io/) and use Git Bash.

### <a name='TravisCI'></a>TravisCI

The plugin structure comes with a fully functional .travis.yml file that deploys the testing app on Android emulator and iOS simulator and as a subsequent step runs the tests from [UnitTesting section](#Unittesting). All you have to do, after cloning the repo and implementing your plugin and tests, is to sign up at [https://travis-ci.org/](https://travis-ci.org/). Then enable your plugin's repo on "https://travis-ci.org/profile/<your github user\>" and that's it. Next time a PR is opened or change is committed to a branch TravisCI will trigger a build testing the code.

To properly show current build status you will have to edit the badge at the start of the README.md file so it matches your repo, user and branch. 

### <a name='ReferringtnscoremodulesinthePlugin'></a>Referring tns-core-modules in the Plugin
We recommend to use full imports of `tns-core-modules` due to [an issue in Angular CLI](https://github.com/angular/angular-cli/issues/5618#issuecomment-306479219). Read more detailed explanation in [this discussion](https://github.com/NativeScript/nativescript-plugin-seed/pull/32#discussion_r131147787).

Ultimately after the issue in Angular CLI is fixed this would not be a restriction, but till then the recommended approach is to import from `tns-core-modules` using full path. Here is an example:

**WRONG**

*tsconfig.json*
````
...

"paths": {
  "*": [
    "./node_modules/*",
    "./node_modules/tns-core-modules/*"
  ]
}
...
````

*yourplugin.common.ts*
````
import * as app from 'application';
````

**RIGHT**

*yourplugin.common.ts*
````
import * as app from 'tns-core-modules/application';
````
