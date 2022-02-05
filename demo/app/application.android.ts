import { AdobeAnalytics } from '@essent/nativescript-adobe-experience-cloud';
import { adobeExperienceSettings } from '~/config'; 

// the `JavaProxy` decorator specifies the package and the name for the native *.JAVA file generated.
@NativeClass()
@JavaProxy('nl.essent.Application')
class Application extends android.app.Application {

    public onCreate(): void {
        super.onCreate();
        AdobeAnalytics.getInstance().initSdk(adobeExperienceSettings, this);
    }

    public attachBaseContext(baseContext: android.content.Context) {
        super.attachBaseContext(baseContext);
    }
}
