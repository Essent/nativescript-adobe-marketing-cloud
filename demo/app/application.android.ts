import { AdobeAnalytics } from 'nativescript-adobe-marketing-cloud';
import { adobeExperienceSettings } from '~/config'; 

// the `JavaProxy` decorator specifies the package and the name for the native *.JAVA file generated.
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

/* tslint:disable */
MyCustomApplication;
