import { ios } from "tns-core-modules/application";
import { AdobeAnalytics } from 'nativescript-adobe-marketing-cloud';

if (ios) {
    class MyDelegate extends UIResponder implements UIApplicationDelegate {
        public static ObjCProtocols = [UIApplicationDelegate];

        applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean {
            AdobeAnalytics.getInstance().initSdk('asdf', application);
            return true;
        }
    }

    ios.delegate = MyDelegate;
}
