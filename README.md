# Nativescript plugin for Adobe Experience Cloud Solution
[![npm version](https://badge.fury.io/js/nativescript-adobe-experience-cloud.svg)](https://badge.fury.io/js/nativescript-adobe-experience-cloud)

```
npm install @essent/nativescript-adobe-experience-cloud --save
```
This plugin is based on Nativescript 6 and Adobe Experience Platform solution 

https://github.com/Adobe-Marketing-Cloud/acp-sdks/releases
Get the Adobe Experience Platform SDK https://aep-sdks.gitbook.io/docs/getting-started/get-the-sdk

# Setting up the application for usage with this plugin.

## Setup config.ts

Create a configuration file and place your ENVIRONMENT_ID from Adobe Experience platform.

```ts
import { AdobeAnalyticsSettings } from "@essent/nativescript-adobe-experience-cloud";

export const adobeExperienceSettings: AdobeAnalyticsSettings = {
    environmentId: 'Put your environment id here.',
    debug: true
};
```
## Initialize SDK

### Android

```ts
import { AdobeAnalytics } from '@essent/nativescript-adobe-experience-cloud';
import { adobeExperienceSettings } from '~/config'; 

@JavaProxy('com.tns.NativeScriptApplication')
class MyCustomApplication extends android.app.Application {

    public onCreate(): void {
        super.onCreate();
        AdobeAnalytics.getInstance().initSdk(adobeExperienceSettings, this);
    }

    public attachBaseContext(baseContext: android.content.Context) {
        super.attachBaseContext(baseContext);
    }
}
```

### IOS

```ts
import { AdobeAnalytics } from '@essent/nativescript-adobe-experience-cloud';
import { adobeExperienceSettings } from '~/config'; 

class MyDelegate extends UIResponder implements UIApplicationDelegate {
    public static ObjCProtocols = [UIApplicationDelegate];

    applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean {
        AdobeAnalytics.getInstance().initSdk(adobeExperienceSettings, application);
        return true;
     }
 }
    ios.delegate = MyDelegate;
```

**NOTE** This plugin provides only initial set of extensions registered with Adobe Experience platform. For any additional extension fork this plugin and configure based on Mobile Property installation instructions. 

## Enable lifecycle tracking

### Android
 
With onResume function start Lifecycle data collection:

```ts
import {AdobeAnalytics} from "@essent/nativescript-adobe-experience-cloud";

public onResume() : void {
        AdobeAnalytics.getInstance().resumeCollectingLifecycleData();
        super.onResume();
    }
}
```

Use onPause function to pause collection Lifecycle data:

```ts
public onPause() : void {
        AdobeAnalytics.getInstance().pauseCollectingLifecycleData();
        super.onPause();
    }
```
### IOS

Start collection Lifecycle data is part of plugin implementation called during initialization of SDK.

When application is resuming from background state, you need to resume collection of Lifecycle data:

```ts
applicationWillEnterForeground(application: UIApplication){
    AdobeAnalytics.getInstance().resumeCollectingLifecycleData();
 }
```
When the app enters the background, pause collecting Lifecycle data:

```ts
applicationDidEnterBackground(application: UIApplication): void {
    AdobeAnalytics.getInstance().pauseCollectingLifecycleData();
}
```

## Track states and actions

States and actions can be traced through method calls that match their native counterparts signature.

## Privacy options
See: https://marketing.adobe.com/resources/help/en_US/mobile/ios/privacy.html

Select a privacy option:

Send Data Until Opt-Out
```ts
AdobeAnalytics.getInstance().optIn();
```
Hold Data Until Opt-In
```ts
AdobeAnalytics.getInstance().optOut();
```

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
````ts
import * as app from 'application';
````

**RIGHT**

*yourplugin.common.ts*
````ts
import * as app from 'tns-core-modules/application';
````
