import { ios } from "@nativescript/core/application";
import { AdobeAnalytics } from 'nativescript-adobe-experience-cloud';
import { adobeExperienceSettings } from '~/config'; 

if (ios) {
    @NativeClass()
    class MyDelegate extends UIResponder implements UIApplicationDelegate {
        public static ObjCProtocols = [UIApplicationDelegate];

        applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean {
            AdobeAnalytics.getInstance().initSdk(adobeExperienceSettings, application);
            return true;
        }

        applicationDidEnterBackground(application: UIApplication): void {
            AdobeAnalytics.getInstance().pauseCollectingLifecycleData();
        }

        applicationWillEnterForeground(application: UIApplication){
            AdobeAnalytics.getInstance().resumeCollectingLifecycleData();
        }
    }

    ios.delegate = MyDelegate;
}
