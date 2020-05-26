import {setActivityCallbacks, AndroidActivityCallbacks} from "tns-core-modules/ui/frame";
import { AdobeAnalytics } from 'nativescript-adobe-marketing-cloud';

@JavaProxy("nl.essent.NatasasCustomActivity")
class Activity extends androidx.appcompat.app.AppCompatActivity {
    public isNativeScriptActivity;

    private _callbacks: AndroidActivityCallbacks;

    public onCreate(savedInstanceState: android.os.Bundle): void {
      console.log('********** Activity created'); 
      this.isNativeScriptActivity = true;
        if (!this._callbacks) {
            setActivityCallbacks(this);
        }

        this._callbacks.onCreate(this, savedInstanceState, this.getIntent(), super.onCreate);
    }

    public onSaveInstanceState(outState: android.os.Bundle): void {
        this._callbacks.onSaveInstanceState(this, outState, super.onSaveInstanceState);
    }

    public onStart(): void {
        this._callbacks.onStart(this, super.onStart);
    }

    public onStop(): void {
        this._callbacks.onStop(this, super.onStop);
    }

    public onDestroy(): void {
        this._callbacks.onDestroy(this, super.onDestroy);
    }

    public onBackPressed(): void {
        this._callbacks.onBackPressed(this, super.onBackPressed);
    }

    public onRequestPermissionsResult(requestCode: number, permissions: Array<string>, grantResults: Array<number>): void {
        this._callbacks.onRequestPermissionsResult(this, requestCode, permissions, grantResults, undefined /*TODO: Enable if needed*/);
    }

    public onActivityResult(requestCode: number, resultCode: number, data: android.content.Intent): void {
        this._callbacks.onActivityResult(this, requestCode, resultCode, data, super.onActivityResult);
    }

    public onResume() : void {
        console.log("********* Android app Resume");
        AdobeAnalytics.getInstance().resumeCollectingLifecycleData();
        super.onResume();
    }

    public onPause() : void {
        console.log("********* Android app Pause")
        AdobeAnalytics.getInstance().pauseCollectingLifecycleData();
        super.onPause();
    }
}