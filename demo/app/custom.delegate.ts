import { Application } from "@nativescript/core";
import { AdobeAnalytics } from '@essent/nativescript-adobe-experience-cloud';
import { adobeExperienceSettings } from '~/config'; 

if (global.isIOS) {
    @NativeClass()
    class MyDelegate extends UIResponder implements UIApplicationDelegate {
        public static ObjCProtocols = [UIApplicationDelegate];

        applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean {
            AdobeAnalytics.getInstance().initSdk(adobeExperienceSettings, application.applicationState);
            return true;
        }

        applicationDidEnterBackground(application: UIApplication): void {
            AdobeAnalytics.getInstance().pauseCollectingLifecycleData();
        }

        applicationWillEnterForeground(application: UIApplication){
            AdobeAnalytics.getInstance().resumeCollectingLifecycleData();
        }
    }

    Application.ios.delegate = MyDelegate;
}
