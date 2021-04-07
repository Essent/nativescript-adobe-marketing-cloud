/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export abstract class AbstractHit {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AbstractHit>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				@NativeClass()
				export abstract class AbstractHitSchema<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AbstractHitSchema<any>>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export abstract class AbstractHitsDatabase {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AbstractHitsDatabase>;
					public getSize(param0: com.adobe.marketing.mobile.Query): number;
					public reset(): void;
					public getSize(): number;
				}
				export module AbstractHitsDatabase {
					export class DatabaseStatus {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AbstractHitsDatabase.DatabaseStatus>;
						public static OK: com.adobe.marketing.mobile.AbstractHitsDatabase.DatabaseStatus;
						public static FATAL_ERROR: com.adobe.marketing.mobile.AbstractHitsDatabase.DatabaseStatus;
						public id: number;
						public static values(): native.Array<com.adobe.marketing.mobile.AbstractHitsDatabase.DatabaseStatus>;
						public static valueOf(param0: string): com.adobe.marketing.mobile.AbstractHitsDatabase.DatabaseStatus;
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				@NativeClass()
				export class AdobeCallback<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AdobeCallback<any>>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.AdobeCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						call(param0: T): void;
					});
					public constructor();
					public call(param0: T): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AdobeCallbackWithError<T>  extends com.adobe.marketing.mobile.AdobeCallback<any> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AdobeCallbackWithError<any>>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.AdobeCallbackWithError<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						fail(param0: com.adobe.marketing.mobile.AdobeError): void;
						call(param0: any): void;
					});
					public constructor();
					public fail(param0: com.adobe.marketing.mobile.AdobeError): void;
					public call(param0: any): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AdobeError {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AdobeError>;
					public static UNEXPECTED_ERROR: com.adobe.marketing.mobile.AdobeError;
					public static CALLBACK_TIMEOUT: com.adobe.marketing.mobile.AdobeError;
					public static CALLBACK_NULL: com.adobe.marketing.mobile.AdobeError;
					public static EXTENSION_NOT_INITIALIZED: com.adobe.marketing.mobile.AdobeError;
					public getErrorCode(): number;
					public constructor(param0: string, param1: number);
					public getErrorName(): string;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AndroidCompressedFileService extends com.adobe.marketing.mobile.CompressedFileService {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AndroidCompressedFileService>;
					public extract(param0: java.io.File, param1: com.adobe.marketing.mobile.CompressedFileService.FileType, param2: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AndroidCursor extends com.adobe.marketing.mobile.DatabaseService.QueryResult {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AndroidCursor>;
					public getLong(param0: number): number;
					public getInt(param0: number): number;
					public moveToLast(): boolean;
					public getCount(): number;
					public isNull(param0: number): boolean;
					public getDouble(param0: number): number;
					public close(): void;
					public moveToNext(): boolean;
					public getString(param0: number): string;
					public getFloat(param0: number): number;
					public moveToFirst(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AndroidDataStore extends com.adobe.marketing.mobile.LocalStorageService.DataStore {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AndroidDataStore>;
					public getMap(param0: string): java.util.Map<string,string>;
					public remove(param0: string): void;
					public setDouble(param0: string, param1: number): void;
					public getDouble(param0: string, param1: number): number;
					public setLong(param0: string, param1: number): void;
					public getBoolean(param0: string, param1: boolean): boolean;
					public getString(param0: string, param1: string): string;
					public getLong(param0: string, param1: number): number;
					public setString(param0: string, param1: string): void;
					public setBoolean(param0: string, param1: boolean): void;
					public removeAll(): void;
					public setMap(param0: string, param1: java.util.Map<string,string>): void;
					public setFloat(param0: string, param1: number): void;
					public getFloat(param0: string, param1: number): number;
					public contains(param0: string): boolean;
					public setInt(param0: string, param1: number): void;
					public getInt(param0: string, param1: number): number;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AndroidDatabase extends com.adobe.marketing.mobile.DatabaseService.Database {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AndroidDatabase>;
					public delete(param0: string, param1: string, param2: native.Array<string>): boolean;
					public close(): void;
					public update(param0: string, param1: java.util.Map<string,any>, param2: string, param3: native.Array<string>): boolean;
					public createTable(param0: string, param1: native.Array<string>, param2: native.Array<com.adobe.marketing.mobile.DatabaseService.Database.ColumnDataType>, param3: java.util.List<java.util.List<com.adobe.marketing.mobile.DatabaseService.Database.ColumnConstraint>>, param4: boolean): boolean;
					public insert(param0: string, param1: java.util.Map<string,any>): boolean;
					public query(param0: com.adobe.marketing.mobile.Query): com.adobe.marketing.mobile.DatabaseService.QueryResult;
					public createTable(param0: string, param1: native.Array<string>, param2: native.Array<com.adobe.marketing.mobile.DatabaseService.Database.ColumnDataType>, param3: java.util.List<java.util.List<com.adobe.marketing.mobile.DatabaseService.Database.ColumnConstraint>>): boolean;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AndroidDatabaseService extends com.adobe.marketing.mobile.DatabaseService {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AndroidDatabaseService>;
					public deleteDatabase(param0: string): boolean;
					public openDatabase(param0: string): com.adobe.marketing.mobile.DatabaseService.Database;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AndroidDeepLinkService extends com.adobe.marketing.mobile.DeepLinkService {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AndroidDeepLinkService>;
					public triggerDeepLink(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AndroidDisplayInformation extends com.adobe.marketing.mobile.SystemInfoService.DisplayInformation {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AndroidDisplayInformation>;
					public getWidthPixels(): number;
					public getHeightPixels(): number;
					public getDensityDpi(): number;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AndroidEncodingService extends com.adobe.marketing.mobile.EncodingService {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AndroidEncodingService>;
					public base64Decode(param0: string): native.Array<number>;
					public base64Encode(param0: native.Array<number>): native.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AndroidFullscreenMessage extends com.adobe.marketing.mobile.UIService.UIFullScreenMessage {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AndroidFullscreenMessage>;
					public show(): void;
					public setLocalAssetsMap(param0: java.util.Map<string,string>): void;
					public openUrl(param0: string): void;
					public remove(): void;
				}
				export module AndroidFullscreenMessage {
					export class MessageFullScreenRunner {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AndroidFullscreenMessage.MessageFullScreenRunner>;
						public run(): void;
					}
					export class MessageFullScreenWebViewClient {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AndroidFullscreenMessage.MessageFullScreenWebViewClient>;
						public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: globalAndroid.webkit.WebResourceRequest): boolean;
						public shouldInterceptRequest(param0: globalAndroid.webkit.WebView, param1: globalAndroid.webkit.WebResourceRequest): globalAndroid.webkit.WebResourceResponse;
						public shouldInterceptRequest(param0: globalAndroid.webkit.WebView, param1: string): globalAndroid.webkit.WebResourceResponse;
						public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: string): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AndroidHttpConnection extends com.adobe.marketing.mobile.NetworkService.HttpConnection {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AndroidHttpConnection>;
					public getResponseCode(): number;
					public close(): void;
					public getInputStream(): java.io.InputStream;
					public getResponsePropertyValue(param0: string): string;
					public getResponseMessage(): string;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AndroidJsonArray extends com.adobe.marketing.mobile.JsonUtilityService.JSONArray {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AndroidJsonArray>;
					public getJSONArray(param0: number): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
					public optLong(param0: number, param1: number): number;
					public put(param0: number, param1: string): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
					public put(param0: string): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
					public opt(param0: number): any;
					public put(param0: number, param1: com.adobe.marketing.mobile.JsonUtilityService.JSONArray): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
					public put(param0: number, param1: boolean): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
					public optJSONArray(param0: number): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
					public toString(): string;
					public put(param0: number, param1: com.adobe.marketing.mobile.JsonUtilityService.JSONObject): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
					public optDouble(param0: number, param1: number): number;
					public get(param0: number): any;
					public put(param0: number, param1: number): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
					public put(param0: number, param1: any): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
					public put(param0: number): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
					public getJSONObject(param0: number): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
					public put(param0: com.adobe.marketing.mobile.JsonUtilityService.JSONObject): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
					public optInt(param0: number, param1: number): number;
					public getDouble(param0: number): number;
					public put(param0: any): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
					public getString(param0: number): string;
					public optString(param0: number, param1: string): string;
					public length(): number;
					public getLong(param0: number): number;
					public getInt(param0: number): number;
					public optJSONObject(param0: number): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
					public optBoolean(param0: number, param1: boolean): boolean;
					public getBoolean(param0: number): boolean;
					public put(param0: com.adobe.marketing.mobile.JsonUtilityService.JSONArray): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
					public put(param0: boolean): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AndroidJsonObject extends com.adobe.marketing.mobile.JsonUtilityService.JSONObject {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AndroidJsonObject>;
					public put(param0: string, param1: any): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
					public optString(param0: string, param1: string): string;
					public put(param0: string, param1: com.adobe.marketing.mobile.JsonUtilityService.JSONObject): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
					public optInt(param0: string, param1: number): number;
					public getBoolean(param0: string): boolean;
					public optJSONArray(param0: string): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
					public toString(): string;
					public put(param0: string, param1: boolean): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
					public opt(param0: string): any;
					public optDouble(param0: string, param1: number): number;
					public getLong(param0: string): number;
					public put(param0: string, param1: number): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
					public get(param0: string): any;
					public getJSONArray(param0: string): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
					public optBoolean(param0: string, param1: boolean): boolean;
					public remove(param0: string): void;
					public put(param0: string, param1: com.adobe.marketing.mobile.JsonUtilityService.JSONArray): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
					public getInt(param0: string): number;
					public getJSONObject(param0: string): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
					public put(param0: string, param1: string): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
					public getString(param0: string): string;
					public length(): number;
					public optLong(param0: string, param1: number): number;
					public optJSONObject(param0: string): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
					public getDouble(param0: string): number;
					public keys(): java.util.Iterator<string>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AndroidJsonUtility extends com.adobe.marketing.mobile.JsonUtilityService {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AndroidJsonUtility>;
					public createJSONObject(param0: java.util.Map): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
					public createJSONObject(param0: string): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
					public createJSONArray(param0: string): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
					public mapFromJsonObject(param0: com.adobe.marketing.mobile.JsonUtilityService.JSONObject): java.util.Map<string,string>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AndroidLocalStorageService extends com.adobe.marketing.mobile.LocalStorageService {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AndroidLocalStorageService>;
					public getDataStore(param0: string): com.adobe.marketing.mobile.LocalStorageService.DataStore;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AndroidLoggingService extends com.adobe.marketing.mobile.LoggingService {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AndroidLoggingService>;
					public trace(param0: string, param1: string): void;
					public error(param0: string, param1: string): void;
					public debug(param0: string, param1: string): void;
					public warning(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AndroidNetworkService extends com.adobe.marketing.mobile.NetworkService {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AndroidNetworkService>;
					public connectUrlAsync(param0: string, param1: com.adobe.marketing.mobile.NetworkService.HttpCommand, param2: native.Array<number>, param3: java.util.Map<string,string>, param4: number, param5: number, param6: com.adobe.marketing.mobile.NetworkService.Callback): void;
					public connectUrl(param0: string, param1: com.adobe.marketing.mobile.NetworkService.HttpCommand, param2: native.Array<number>, param3: java.util.Map<string,string>, param4: number, param5: number): com.adobe.marketing.mobile.NetworkService.HttpConnection;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AndroidNetworkServiceOverrider {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AndroidNetworkServiceOverrider>;
					public constructor();
					public static setHTTPConnectionPerformer(param0: com.adobe.marketing.mobile.AndroidNetworkServiceOverrider.HTTPConnectionPerformer): void;
				}
				export module AndroidNetworkServiceOverrider {
					export class Connection extends com.adobe.marketing.mobile.NetworkService.HttpConnection {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AndroidNetworkServiceOverrider.Connection>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.AndroidNetworkServiceOverrider$Connection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getInputStream(): java.io.InputStream;
							getResponseCode(): number;
							getResponseMessage(): string;
							getResponsePropertyValue(param0: string): string;
							close(): void;
						});
						public constructor();
						public getResponsePropertyValue(param0: string): string;
						public getResponseMessage(): string;
						public close(): void;
						public getResponseCode(): number;
						public getInputStream(): java.io.InputStream;
					}
					export abstract class HTTPConnectionPerformer {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AndroidNetworkServiceOverrider.HTTPConnectionPerformer>;
						public static CONNECTION_ERROR_IO: com.adobe.marketing.mobile.AndroidNetworkServiceOverrider.Connection;
						public static CONNECTION_ERROR_URL: com.adobe.marketing.mobile.AndroidNetworkServiceOverrider.Connection;
						public constructor();
						public shouldOverride(param0: string, param1: string): boolean;
						public connect(param0: string, param1: string, param2: native.Array<number>, param3: java.util.Map<string,string>, param4: number, param5: number): com.adobe.marketing.mobile.AndroidNetworkServiceOverrider.Connection;
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AndroidNotificationHelper {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AndroidNotificationHelper>;
					public static getNotificationTypeForAction(param0: string): com.adobe.marketing.mobile.SystemNotificationService.NotificationType;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AndroidPlatformServices extends com.adobe.marketing.mobile.PlatformServices {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AndroidPlatformServices>;
					public getSystemInfoService(): com.adobe.marketing.mobile.SystemInfoService;
					public getSystemNotificationService(): com.adobe.marketing.mobile.SystemNotificationService;
					public getLoggingService(): com.adobe.marketing.mobile.LoggingService;
					public getNetworkService(): com.adobe.marketing.mobile.NetworkService;
					public getCompressedFileService(): com.adobe.marketing.mobile.CompressedFileService;
					public getLocalStorageService(): com.adobe.marketing.mobile.LocalStorageService;
					public getDatabaseService(): com.adobe.marketing.mobile.DatabaseService;
					public getDeepLinkService(): com.adobe.marketing.mobile.DeepLinkService;
					public getEncodingService(): com.adobe.marketing.mobile.EncodingService;
					public getUIService(): com.adobe.marketing.mobile.UIService;
					public getJsonUtilityService(): com.adobe.marketing.mobile.JsonUtilityService;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AndroidSystemInfoService extends com.adobe.marketing.mobile.SystemInfoService {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AndroidSystemInfoService>;
					public getLocaleString(): string;
					public getApplicationVersionCode(): string;
					public getDefaultUserAgent(): string;
					public getApplicationBaseDir(): java.io.File;
					public getNetworkConnectionStatus(): com.adobe.marketing.mobile.SystemInfoService.ConnectionStatus;
					public getAsset(param0: string): java.io.InputStream;
					/** @deprecated */
					public getSdkVersion(): string;
					public getActiveLocale(): java.util.Locale;
					public getApplicationVersion(): string;
					public getDeviceName(): string;
					public registerOneTimeNetworkConnectionActiveListener(param0: com.adobe.marketing.mobile.SystemInfoService.NetworkConnectionActiveListener): boolean;
					public getApplicationCacheDir(): java.io.File;
					public getDeviceBuildId(): string;
					public getOperatingSystemName(): string;
					public getApplicationPackageName(): string;
					public getDeviceManufacturer(): string;
					public getDeviceType(): com.adobe.marketing.mobile.SystemInfoService.DeviceType;
					public getSdkVersion(): string;
					public getApplicationName(): string;
					public getMobileCarrierName(): string;
					public getCoreVersion(): string;
					public getOperatingSystemVersion(): string;
					public getCanonicalPlatformName(): string;
					public getCurrentOrientation(): number;
					public getProperty(param0: string): string;
					public getRunMode(): string;
					public getDisplayInformation(): com.adobe.marketing.mobile.SystemInfoService.DisplayInformation;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AndroidUIService extends com.adobe.marketing.mobile.UIService {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AndroidUIService>;
					public getIntentWithUrl(param0: string): globalAndroid.content.Intent;
					public showLocalNotification(param0: string, param1: string, param2: number, param3: number, param4: string, param5: java.util.Map<string,any>, param6: string): void;
					public createFullscreenMessage(param0: string, param1: com.adobe.marketing.mobile.UIService.UIFullScreenListener): com.adobe.marketing.mobile.UIService.UIFullScreenMessage;
					public showUrl(param0: string): boolean;
					public createFloatingButton(param0: com.adobe.marketing.mobile.UIService.FloatingButtonListener): com.adobe.marketing.mobile.UIService.FloatingButton;
					public showAlert(param0: string, param1: string, param2: string, param3: string, param4: com.adobe.marketing.mobile.UIService.UIAlertListener): void;
					public showLocalNotification(param0: string, param1: string, param2: number, param3: number, param4: string, param5: java.util.Map<string,any>, param6: string, param7: string): void;
					public isMessageDisplayed(): boolean;
					public unregisterAppStateListener(param0: com.adobe.marketing.mobile.UIService.AppStateListener): void;
					public getAppState(): com.adobe.marketing.mobile.UIService.AppState;
					public registerAppStateListener(param0: com.adobe.marketing.mobile.UIService.AppStateListener): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class App {
					public static class: java.lang.Class<com.adobe.marketing.mobile.App>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AppLifecycleListener {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AppLifecycleListener>;
					public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityStarted(param0: globalAndroid.app.Activity): void;
					public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityStopped(param0: globalAndroid.app.Activity): void;
					public onTrimMemory(param0: number): void;
					public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
					public onActivityResumed(param0: globalAndroid.app.Activity): void;
					public onActivityPaused(param0: globalAndroid.app.Activity): void;
					public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
					public onLowMemory(): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class BluetoothService extends com.adobe.marketing.mobile.PeripheralService {
					public static class: java.lang.Class<com.adobe.marketing.mobile.BluetoothService>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.BluetoothService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						startScan(): void;
						stopScan(): void;
						registerForDevice(param0: string, param1: com.adobe.marketing.mobile.PeripheralService.Callback): void;
					});
					public constructor();
					public startScan(): void;
					public registerForDevice(param0: string, param1: com.adobe.marketing.mobile.PeripheralService.Callback): void;
					public stopScan(): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class BooleanVariant extends com.adobe.marketing.mobile.Variant {
					public static class: java.lang.Class<com.adobe.marketing.mobile.BooleanVariant>;
					public convertToString(): string;
					public toString(): string;
					public convertToDouble(): number;
					public static from(param0: boolean): com.adobe.marketing.mobile.Variant;
					public getKind(): com.adobe.marketing.mobile.VariantKind;
					public clone(): com.adobe.marketing.mobile.Variant;
					public clone(): com.adobe.marketing.mobile.BooleanVariant;
					public getBoolean(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class BroadcastHandler {
					public static class: java.lang.Class<com.adobe.marketing.mobile.BroadcastHandler>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.BroadcastHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						handleBroadcast(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
					});
					public constructor();
					public handleBroadcast(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class BuildConfig {
					public static class: java.lang.Class<com.adobe.marketing.mobile.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public static FLAVOR_target: string;
					public static FLAVOR_coreImplementation: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class ButtonBackground {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ButtonBackground>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class CacheManager {
					public static class: java.lang.Class<com.adobe.marketing.mobile.CacheManager>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class CollectionUtils {
					public static class: java.lang.Class<com.adobe.marketing.mobile.CollectionUtils>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class CompressedFileService {
					public static class: java.lang.Class<com.adobe.marketing.mobile.CompressedFileService>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.CompressedFileService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						extract(param0: java.io.File, param1: com.adobe.marketing.mobile.CompressedFileService.FileType, param2: string): boolean;
					});
					public constructor();
					public extract(param0: java.io.File, param1: com.adobe.marketing.mobile.CompressedFileService.FileType, param2: string): boolean;
				}
				export module CompressedFileService {
					export class FileType {
						public static class: java.lang.Class<com.adobe.marketing.mobile.CompressedFileService.FileType>;
						public static ZIP: com.adobe.marketing.mobile.CompressedFileService.FileType;
						public static TAR: com.adobe.marketing.mobile.CompressedFileService.FileType;
						public static values(): native.Array<com.adobe.marketing.mobile.CompressedFileService.FileType>;
						public static valueOf(param0: string): com.adobe.marketing.mobile.CompressedFileService.FileType;
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class ConfigurationConstants {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ConfigurationConstants>;
				}
				export module ConfigurationConstants {
					export class EventDataKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.ConfigurationConstants.EventDataKeys>;
					}
					export module EventDataKeys {
						export class Configuration {
							public static class: java.lang.Class<com.adobe.marketing.mobile.ConfigurationConstants.EventDataKeys.Configuration>;
						}
						export class Lifecycle {
							public static class: java.lang.Class<com.adobe.marketing.mobile.ConfigurationConstants.EventDataKeys.Lifecycle>;
						}
						export class RuleEngine {
							public static class: java.lang.Class<com.adobe.marketing.mobile.ConfigurationConstants.EventDataKeys.RuleEngine>;
						}
					}
					export class SharedStateKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.ConfigurationConstants.SharedStateKeys>;
					}
					export module SharedStateKeys {
						export class Analytics {
							public static class: java.lang.Class<com.adobe.marketing.mobile.ConfigurationConstants.SharedStateKeys.Analytics>;
						}
						export class Audience {
							public static class: java.lang.Class<com.adobe.marketing.mobile.ConfigurationConstants.SharedStateKeys.Audience>;
						}
						export class Configuration {
							public static class: java.lang.Class<com.adobe.marketing.mobile.ConfigurationConstants.SharedStateKeys.Configuration>;
						}
						export class Identity {
							public static class: java.lang.Class<com.adobe.marketing.mobile.ConfigurationConstants.SharedStateKeys.Identity>;
						}
						export class Target {
							public static class: java.lang.Class<com.adobe.marketing.mobile.ConfigurationConstants.SharedStateKeys.Target>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class ConfigurationData {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ConfigurationData>;
					public toString(): string;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class ConfigurationDispatcherConfigurationRequestContent extends com.adobe.marketing.mobile.ModuleEventDispatcher<com.adobe.marketing.mobile.ConfigurationExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ConfigurationDispatcherConfigurationRequestContent>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class ConfigurationDispatcherConfigurationResponseContent extends com.adobe.marketing.mobile.ModuleEventDispatcher<com.adobe.marketing.mobile.ConfigurationExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ConfigurationDispatcherConfigurationResponseContent>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class ConfigurationDispatcherConfigurationResponseIdentity extends com.adobe.marketing.mobile.ModuleEventDispatcher<com.adobe.marketing.mobile.ConfigurationExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ConfigurationDispatcherConfigurationResponseIdentity>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class ConfigurationDownloader extends com.adobe.marketing.mobile.RemoteDownloader {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ConfigurationDownloader>;
					public downloadConfig(): string;
					public loadCachedConfig(): string;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class ConfigurationExtension extends com.adobe.marketing.mobile.InternalModule {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ConfigurationExtension>;
					public constructor(param0: string, param1: com.adobe.marketing.mobile.EventHub);
					public onUnregistered(): void;
					public constructor(param0: com.adobe.marketing.mobile.EventHub, param1: com.adobe.marketing.mobile.PlatformServices);
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class ConfigurationListenerBootEvent extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.ConfigurationExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ConfigurationListenerBootEvent>;
					public getEventSource(): com.adobe.marketing.mobile.EventSource;
					public hear(param0: com.adobe.marketing.mobile.Event): void;
					public onUnregistered(): void;
					public getEventType(): com.adobe.marketing.mobile.EventType;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class ConfigurationListenerLifecycleResponseContent extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.ConfigurationExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ConfigurationListenerLifecycleResponseContent>;
					public getEventSource(): com.adobe.marketing.mobile.EventSource;
					public hear(param0: com.adobe.marketing.mobile.Event): void;
					public onUnregistered(): void;
					public getEventType(): com.adobe.marketing.mobile.EventType;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class ConfigurationListenerRequestContent extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.ConfigurationExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ConfigurationListenerRequestContent>;
					public getEventSource(): com.adobe.marketing.mobile.EventSource;
					public hear(param0: com.adobe.marketing.mobile.Event): void;
					public onUnregistered(): void;
					public getEventType(): com.adobe.marketing.mobile.EventType;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class ConfigurationListenerRequestIdentity extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.ConfigurationExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ConfigurationListenerRequestIdentity>;
					public getEventSource(): com.adobe.marketing.mobile.EventSource;
					public hear(param0: com.adobe.marketing.mobile.Event): void;
					public onUnregistered(): void;
					public getEventType(): com.adobe.marketing.mobile.EventType;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class ConfigurationListenerSharedState extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.ConfigurationExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ConfigurationListenerSharedState>;
					public getEventSource(): com.adobe.marketing.mobile.EventSource;
					public hear(param0: com.adobe.marketing.mobile.Event): void;
					public onUnregistered(): void;
					public getEventType(): com.adobe.marketing.mobile.EventType;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class ConfigurationModuleDetails extends com.adobe.marketing.mobile.ModuleDetails {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ConfigurationModuleDetails>;
					public getVersion(): string;
					public getName(): string;
					public getAdditionalInfo(): java.util.Map<string,string>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class ContextData {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ContextData>;
					public value: any;
					public data: java.util.Map<string,any>;
					public containsKey(param0: string): boolean;
					public get(param0: string): com.adobe.marketing.mobile.ContextData;
					public toString(): string;
					public put(param0: string, param1: com.adobe.marketing.mobile.ContextData): void;
					public size(): number;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class ContextDataUtil {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ContextDataUtil>;
					public static cleanContextDataDictionary(param0: java.util.Map<string,string>): java.util.Map<string,any>;
					public static deserializeContextDataKeyValuePairs(param0: string): java.util.Map<string,string>;
					public static cleanContextDataKey(param0: string): string;
					public static translateContextData(param0: java.util.Map<string,string>): com.adobe.marketing.mobile.ContextData;
					public static serializeToQueryString(param0: java.util.Map<string,any>, param1: java.lang.StringBuilder): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class Core {
					public static class: java.lang.Class<com.adobe.marketing.mobile.Core>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class CoreConstants {
					public static class: java.lang.Class<com.adobe.marketing.mobile.CoreConstants>;
				}
				export module CoreConstants {
					export class EventDataKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.CoreConstants.EventDataKeys>;
					}
					export module EventDataKeys {
						export class Analytics {
							public static class: java.lang.Class<com.adobe.marketing.mobile.CoreConstants.EventDataKeys.Analytics>;
						}
						export class Configuration {
							public static class: java.lang.Class<com.adobe.marketing.mobile.CoreConstants.EventDataKeys.Configuration>;
						}
						export class Identity {
							public static class: java.lang.Class<com.adobe.marketing.mobile.CoreConstants.EventDataKeys.Identity>;
						}
						export class Lifecycle {
							public static class: java.lang.Class<com.adobe.marketing.mobile.CoreConstants.EventDataKeys.Lifecycle>;
						}
						export class RuleEngine {
							public static class: java.lang.Class<com.adobe.marketing.mobile.CoreConstants.EventDataKeys.RuleEngine>;
						}
						export class Signal {
							public static class: java.lang.Class<com.adobe.marketing.mobile.CoreConstants.EventDataKeys.Signal>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class DataMarshaller {
					public static class: java.lang.Class<com.adobe.marketing.mobile.DataMarshaller>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class DatabaseService {
					public static class: java.lang.Class<com.adobe.marketing.mobile.DatabaseService>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.DatabaseService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						openDatabase(param0: string): com.adobe.marketing.mobile.DatabaseService.Database;
						deleteDatabase(param0: string): boolean;
					});
					public constructor();
					public deleteDatabase(param0: string): boolean;
					public openDatabase(param0: string): com.adobe.marketing.mobile.DatabaseService.Database;
				}
				export module DatabaseService {
					export class Database {
						public static class: java.lang.Class<com.adobe.marketing.mobile.DatabaseService.Database>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.DatabaseService$Database interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							createTable(param0: string, param1: native.Array<string>, param2: native.Array<com.adobe.marketing.mobile.DatabaseService.Database.ColumnDataType>, param3: java.util.List<java.util.List<com.adobe.marketing.mobile.DatabaseService.Database.ColumnConstraint>>): boolean;
							query(param0: com.adobe.marketing.mobile.Query): com.adobe.marketing.mobile.DatabaseService.QueryResult;
							insert(param0: string, param1: java.util.Map<string,any>): boolean;
							update(param0: string, param1: java.util.Map<string,any>, param2: string, param3: native.Array<string>): boolean;
							delete(param0: string, param1: string, param2: native.Array<string>): boolean;
							close(): void;
						});
						public constructor();
						public update(param0: string, param1: java.util.Map<string,any>, param2: string, param3: native.Array<string>): boolean;
						public createTable(param0: string, param1: native.Array<string>, param2: native.Array<com.adobe.marketing.mobile.DatabaseService.Database.ColumnDataType>, param3: java.util.List<java.util.List<com.adobe.marketing.mobile.DatabaseService.Database.ColumnConstraint>>): boolean;
						public close(): void;
						public delete(param0: string, param1: string, param2: native.Array<string>): boolean;
						public query(param0: com.adobe.marketing.mobile.Query): com.adobe.marketing.mobile.DatabaseService.QueryResult;
						public insert(param0: string, param1: java.util.Map<string,any>): boolean;
					}
					export module Database {
						export class ColumnConstraint {
							public static class: java.lang.Class<com.adobe.marketing.mobile.DatabaseService.Database.ColumnConstraint>;
							public static NOT_NULL: com.adobe.marketing.mobile.DatabaseService.Database.ColumnConstraint;
							public static UNIQUE: com.adobe.marketing.mobile.DatabaseService.Database.ColumnConstraint;
							public static PRIMARY_KEY: com.adobe.marketing.mobile.DatabaseService.Database.ColumnConstraint;
							public static AUTOINCREMENT: com.adobe.marketing.mobile.DatabaseService.Database.ColumnConstraint;
							public static valueOf(param0: string): com.adobe.marketing.mobile.DatabaseService.Database.ColumnConstraint;
							public static values(): native.Array<com.adobe.marketing.mobile.DatabaseService.Database.ColumnConstraint>;
						}
						export class ColumnDataType {
							public static class: java.lang.Class<com.adobe.marketing.mobile.DatabaseService.Database.ColumnDataType>;
							public static INTEGER: com.adobe.marketing.mobile.DatabaseService.Database.ColumnDataType;
							public static REAL: com.adobe.marketing.mobile.DatabaseService.Database.ColumnDataType;
							public static TEXT: com.adobe.marketing.mobile.DatabaseService.Database.ColumnDataType;
							public static valueOf(param0: string): com.adobe.marketing.mobile.DatabaseService.Database.ColumnDataType;
							public static values(): native.Array<com.adobe.marketing.mobile.DatabaseService.Database.ColumnDataType>;
						}
					}
					export class QueryResult {
						public static class: java.lang.Class<com.adobe.marketing.mobile.DatabaseService.QueryResult>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.DatabaseService$QueryResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getCount(): number;
							getInt(param0: number): number;
							getDouble(param0: number): number;
							getFloat(param0: number): number;
							getLong(param0: number): number;
							getString(param0: number): string;
							isNull(param0: number): boolean;
							moveToFirst(): boolean;
							moveToLast(): boolean;
							moveToNext(): boolean;
							close(): void;
						});
						public constructor();
						public getDouble(param0: number): number;
						public moveToFirst(): boolean;
						public getLong(param0: number): number;
						public moveToLast(): boolean;
						public getString(param0: number): string;
						public close(): void;
						public getCount(): number;
						public getInt(param0: number): number;
						public getFloat(param0: number): number;
						public isNull(param0: number): boolean;
						public moveToNext(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class DeepLinkService {
					public static class: java.lang.Class<com.adobe.marketing.mobile.DeepLinkService>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.DeepLinkService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						triggerDeepLink(param0: string): void;
					});
					public constructor();
					public triggerDeepLink(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class DoubleVariant extends com.adobe.marketing.mobile.Variant {
					public static class: java.lang.Class<com.adobe.marketing.mobile.DoubleVariant>;
					public convertToString(): string;
					public toString(): string;
					public convertToDouble(): number;
					public static from(param0: number): com.adobe.marketing.mobile.Variant;
					public getLong(): number;
					public getKind(): com.adobe.marketing.mobile.VariantKind;
					public clone(): com.adobe.marketing.mobile.Variant;
					public clone(): com.adobe.marketing.mobile.DoubleVariant;
					public getDouble(): number;
					public getInteger(): number;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class EncodingService {
					public static class: java.lang.Class<com.adobe.marketing.mobile.EncodingService>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.EncodingService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						base64Decode(param0: string): native.Array<number>;
						base64Encode(param0: native.Array<number>): native.Array<number>;
					});
					public constructor();
					public base64Decode(param0: string): native.Array<number>;
					public base64Encode(param0: native.Array<number>): native.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class Event {
					public static class: java.lang.Class<com.adobe.marketing.mobile.Event>;
					public toString(): string;
					public copy(): com.adobe.marketing.mobile.Event;
					public getEventData(): java.util.Map<string,any>;
					public getName(): string;
					public getUniqueIdentifier(): string;
					public getSource(): string;
					public getType(): string;
				}
				export module Event {
					export class Builder {
						public static class: java.lang.Class<com.adobe.marketing.mobile.Event.Builder>;
						public constructor(param0: string, param1: string, param2: string);
						public setEventData(param0: java.util.Map<string,any>): com.adobe.marketing.mobile.Event.Builder;
						public build(): com.adobe.marketing.mobile.Event;
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class EventData {
					public static class: java.lang.Class<com.adobe.marketing.mobile.EventData>;
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class EventDataFlattener {
					public static class: java.lang.Class<com.adobe.marketing.mobile.EventDataFlattener>;
					public static getFlattenedDataMap(param0: com.adobe.marketing.mobile.EventData): java.util.Map<string,com.adobe.marketing.mobile.Variant>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class EventDataKeys {
					public static class: java.lang.Class<com.adobe.marketing.mobile.EventDataKeys>;
					public static CORE_VERSION: string;
					public static DEEPLINK_SCHEME: string;
					public static DEEPLINK_SCHEME_PATH_CANCEL: string;
					public static DEEPLINK_SCHEME_PATH_CONFIRM: string;
					public static EVENT_STATE_OWNER: string;
					public static DATA_MAP: string;
					public static PAGE_NAME: string;
					public static LOC_LATITUDE: string;
					public static LOC_LONGITUDE: string;
					public static DEEPLINK_URI: string;
					public static DEFAULT_DATA_KEY: string;
				}
				export module EventDataKeys {
					export class Acquisition {
						public static class: java.lang.Class<com.adobe.marketing.mobile.EventDataKeys.Acquisition>;
						public static MODULE_NAME: string;
						public static LIFECYCLE_PUSH_MESSAGE_ID_KEY: string;
						public static LIFECYCLE_LOCAL_NOTIFICATION_ID_KEY: string;
						public static APP_ID_KEY: string;
						public static DATA_DEEPLINK_KEY: string;
						public static REFERRER_DATA_KEY: string;
						public static ACQUISITION_TYPE_KEY: string;
						public static ACQUISITION_TYPE_INSTALL: string;
						public static ACQUISITION_TYPE_RETENTION: string;
						public static REFERRER_DATA: string;
					}
					export class Analytics {
						public static class: java.lang.Class<com.adobe.marketing.mobile.EventDataKeys.Analytics>;
						public static MODULE_NAME: string;
						public static ANALYTICS_SERVER_RESPONSE_KEY: string;
						public static FORCE_KICK_HITS: string;
						public static CLEAR_HITS_QUEUE: string;
						public static ANALYTICS_ID: string;
						public static GET_QUEUE_SIZE: string;
						public static QUEUE_SIZE: string;
						public static TRACK_INTERNAL: string;
						public static TRACK_ACTION: string;
						public static TRACK_STATE: string;
						public static CONTEXT_DATA: string;
					}
					export module Analytics {
						export class ContextDataKeys {
							public static class: java.lang.Class<com.adobe.marketing.mobile.EventDataKeys.Analytics.ContextDataKeys>;
						}
						export class ContextDataValues {
							public static class: java.lang.Class<com.adobe.marketing.mobile.EventDataKeys.Analytics.ContextDataValues>;
						}
					}
					export class Audience {
						public static class: java.lang.Class<com.adobe.marketing.mobile.EventDataKeys.Audience>;
						public static MODULE_NAME: string;
						public static VISITOR_TRAITS: string;
						public static VISITOR_PROFILE: string;
						public static DPID: string;
						public static DPUUID: string;
						public static UUID: string;
					}
					export class Configuration {
						public static class: java.lang.Class<com.adobe.marketing.mobile.EventDataKeys.Configuration>;
						public static MODULE_NAME: string;
						public static GLOBAL_CONFIG_SSL: string;
						public static GLOBAL_CONFIG_PRIVACY: string;
						public static AAM_CONFIG_SERVER: string;
						public static AAM_CONFIG_TIMEOUT: string;
						public static CONFIG_EXPERIENCE_CLOUD_ORGID_KEY: string;
						public static ANALYTICS_CONFIG_AAMFORWARDING: string;
						public static ANALYTICS_CONFIG_BATCH_LIMIT: string;
						public static ANALYTICS_CONFIG_OFFLINE_TRACKING: string;
						public static ANALYTICS_CONFIG_REPORT_SUITES: string;
						public static ANALYTICS_CONFIG_SERVER: string;
						public static ANALYTICS_CONFIG_REFERRER_TIMEOUT: string;
						public static ANALYTICS_CONFIG_LIFECYCLE_TIMEOUT: string;
						public static ANALYTICS_CONFIG_BACKDATE_PREVIOUS_SESSION: string;
						public static LIFECYCLE_CONFIG_SESSION_TIMEOUT: string;
						public static ACQUISITION_CONFIG_APPID: string;
						public static ACQUISITION_CONFIG_SERVER: string;
						public static IDENTITY_ADID_ENABLED: string;
						public static SIGNAL_CONFIG_URL: string;
						public static RULES_CONFIG_URL: string;
						public static MESSAGING_URL: string;
						public static TARGET_CLIENT_CODE: string;
						public static TARGET_NETWORK_TIMEOUT: string;
						public static TARGET_ENVIRONMENT_ID: string;
						public static CONFIGURATION_REQUEST_CONTENT_JSON_APP_ID: string;
						public static CONFIGURATION_REQUEST_CONTENT_JSON_FILE_PATH: string;
						public static CONFIGURATION_REQUEST_CONTENT_UPDATE_CONFIG: string;
						public static CONFIGURATION_REQUEST_CONTENT_INTERNAL_BOOT: string;
						public static CONFIGURATION_REQUEST_CONTENT_RETRIEVE_CONFIG: string;
						public static CONFIGURATION_RESPONSE_IDENTITY_ALL_IDENTIFIERS: string;
					}
					export class Identity {
						public static class: java.lang.Class<com.adobe.marketing.mobile.EventDataKeys.Identity>;
						public static MODULE_NAME: string;
						public static MCPNS_DPID: string;
						public static ADID_DSID: string;
						public static VISITOR_ID_MID: string;
						public static VISITOR_ID_BLOB: string;
						public static VISITOR_ID_LOCATION_HINT: string;
						public static VISITOR_IDS_LAST_SYNC: string;
						public static VISITOR_IDS_LIST: string;
						public static UPDATED_URL: string;
						public static BASE_URL: string;
						public static FORCE_SYNC: string;
						public static IDENTIFIERS: string;
						public static DPIDS: string;
						public static IS_SYNC_EVENT: string;
						public static USER_IDENTIFIER: string;
						public static ADVERTISING_IDENTIFIER: string;
						public static PUSH_IDENTIFIER: string;
						public static AUTHENTICATION_STATE: string;
						public static EVENT_PUSH_STATUS: string;
						public static PUSH_ID_ENABLED_ACTION_NAME: string;
					}
					export class Lifecycle {
						public static class: java.lang.Class<com.adobe.marketing.mobile.EventDataKeys.Lifecycle>;
						public static MODULE_NAME: string;
						public static ADDITIONAL_CONTEXT_DATA: string;
						public static LIFECYCLE_ACTION_KEY: string;
						public static LIFECYCLE_START: string;
						public static LIFECYCLE_PAUSE: string;
						public static LIFECYCLE_CONTEXT_DATA: string;
						public static SESSION_START_TIMESTAMP: string;
						public static PREVIOUS_SESSION_START_TIMESTAMP: string;
						public static PREVIOUS_SESSION_PAUSE_TIMESTAMP: string;
						public static SESSION_EVENT: string;
						public static MAX_SESSION_LENGTH: string;
					}
					export class Messages {
						public static class: java.lang.Class<com.adobe.marketing.mobile.EventDataKeys.Messages>;
						public static MODULE_NAME: string;
					}
					export class RuleEngine {
						public static class: java.lang.Class<com.adobe.marketing.mobile.EventDataKeys.RuleEngine>;
						public static MODULE_NAME: string;
						public static RULES_RESPONSE_CONSEQUENCE_KEY_TYPE: string;
						public static RULES_RESPONSE_CONSEQUENCE_KEY_ID: string;
						public static RULES_RESPONSE_CONSEQUENCE_KEY_DETAIL: string;
						public static RULES_RESPONSE_CONSEQUENCE_TYPE_POSTBACKS: string;
						public static RULES_RESPONSE_CONSEQUENCE_TYPE_PII: string;
						public static RULES_RESPONSE_CONSEQUENCE_TYPE_OPEN_URL: string;
						public static CONSEQUENCES_LOADED: string;
						public static CONSEQUENCE_TRIGGERED: string;
						public static RULES_RESPONSE_CONTENT_CONTEXT_DATA: string;
						public static RULES_REQUEST_CONTENT_DOWNLOAD_RULES: string;
						public static CONSEQUENCE_JSON_ID: string;
						public static CONSEQUENCE_JSON_TYPE: string;
						public static CONSEQUENCE_JSON_DETAIL: string;
						public static CONSEQUENCE_ASSETS_PATH: string;
					}
					export class Signal {
						public static class: java.lang.Class<com.adobe.marketing.mobile.EventDataKeys.Signal>;
						public static MODULE_NAME: string;
						public static SIGNAL_CONTEXT_DATA: string;
					}
					export class Target {
						public static class: java.lang.Class<com.adobe.marketing.mobile.EventDataKeys.Target>;
						public static MODULE_NAME: string;
						public static TNT_ID: string;
						public static THIRD_PARTY_ID: string;
						public static LOAD_REQUESTS: string;
						public static TARGET_CONTENT: string;
						public static LOCATION_CLICKED: string;
						public static PREFETCH_REQUESTS: string;
						public static PREFETCH_RESULT: string;
						public static RESET_EXPERIENCE: string;
						public static CLEAR_PREFETCH_CACHE: string;
						public static PROFILE_PARAMETERS: string;
						public static PREVIEW_RESTART_DEEP_LINK: string;
						public static MBOX_NAME: string;
						public static MBOX_PARAMETERS: string;
						public static ORDER_PARAMETERS: string;
						public static PRODUCT_PARAMETERS: string;
						public static DEFAULT_CONTENT: string;
						public static BASE_CLASS: string;
						public static RESPONSE_PAIR_ID: string;
					}
					export class UserProfile {
						public static class: java.lang.Class<com.adobe.marketing.mobile.EventDataKeys.UserProfile>;
						public static MODULE_NAME: string;
						public static USER_PROFILE_DATA_KEY: string;
						public static UPDATE_DATA_KEY: string;
						public static REMOVE_DATA_KEY: string;
						public static CONSEQUENCE_OPERATION: string;
						public static CONSEQUENCE_KEY: string;
						public static CONSEQUENCE_VALUE: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class EventDataVariantSerializer extends com.adobe.marketing.mobile.VariantSerializer<com.adobe.marketing.mobile.EventData> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.EventDataVariantSerializer>;
					public deserialize(param0: com.adobe.marketing.mobile.Variant): any;
					public serialize(param0: any): com.adobe.marketing.mobile.Variant;
					public serialize(param0: com.adobe.marketing.mobile.EventData): com.adobe.marketing.mobile.Variant;
					public deserialize(param0: com.adobe.marketing.mobile.Variant): com.adobe.marketing.mobile.EventData;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class EventHub {
					public static class: java.lang.Class<com.adobe.marketing.mobile.EventHub>;
					public static SHARED_STATE_PENDING: com.adobe.marketing.mobile.EventData;
					public static SHARED_STATE_INVALID: com.adobe.marketing.mobile.EventData;
					public static SHARED_STATE_NEXT: com.adobe.marketing.mobile.EventData;
					public static SHARED_STATE_PREV: com.adobe.marketing.mobile.EventData;
					public eventHubSharedState: com.adobe.marketing.mobile.EventData;
					public coreVersion: string;
					public isBooted: boolean;
					public constructor(param0: string, param1: com.adobe.marketing.mobile.PlatformServices);
					public getInitialEventHubSharedState(): com.adobe.marketing.mobile.EventData;
					public registerModuleWithCallback(param0: java.lang.Class<any>, param1: com.adobe.marketing.mobile.EventHub.RegisterModuleCallback): void;
					public removeModuleFromEventHubSharedState(param0: com.adobe.marketing.mobile.Module): void;
					public registerModuleWithCallback(param0: java.lang.Class<any>, param1: com.adobe.marketing.mobile.ModuleDetails, param2: com.adobe.marketing.mobile.EventHub.RegisterModuleCallback): void;
					public constructor(param0: string, param1: com.adobe.marketing.mobile.PlatformServices, param2: string);
					public getModuleRuleAssociation(): java.util.concurrent.ConcurrentHashMap<com.adobe.marketing.mobile.Module,java.util.concurrent.ConcurrentLinkedQueue<com.adobe.marketing.mobile.Rule>>;
					public createEventHubSharedState(param0: number): void;
					public addModuleToEventHubSharedState(param0: com.adobe.marketing.mobile.Module): void;
				}
				export module EventHub {
					export class EventRunnable {
						public static class: java.lang.Class<com.adobe.marketing.mobile.EventHub.EventRunnable>;
						public run(): void;
					}
					export class ProcessorCallable extends java.util.concurrent.Callable<com.adobe.marketing.mobile.Event> {
						public static class: java.lang.Class<com.adobe.marketing.mobile.EventHub.ProcessorCallable>;
						public call(): com.adobe.marketing.mobile.Event;
					}
					export class RegisterModuleCallback {
						public static class: java.lang.Class<com.adobe.marketing.mobile.EventHub.RegisterModuleCallback>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.EventHub$RegisterModuleCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							registered(param0: com.adobe.marketing.mobile.Module): void;
						});
						public constructor();
						public registered(param0: com.adobe.marketing.mobile.Module): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class EventHubConstants {
					public static class: java.lang.Class<com.adobe.marketing.mobile.EventHubConstants>;
				}
				export module EventHubConstants {
					export class EventDataKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.EventHubConstants.EventDataKeys>;
					}
					export module EventDataKeys {
						export class Configuration {
							public static class: java.lang.Class<com.adobe.marketing.mobile.EventHubConstants.EventDataKeys.Configuration>;
						}
						export class EventHub {
							public static class: java.lang.Class<com.adobe.marketing.mobile.EventHubConstants.EventDataKeys.EventHub>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class EventListener {
					public static class: java.lang.Class<com.adobe.marketing.mobile.EventListener>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.EventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						hear(param0: com.adobe.marketing.mobile.Event): void;
						onUnregistered(): void;
						getEventSource(): com.adobe.marketing.mobile.EventSource;
						getEventType(): com.adobe.marketing.mobile.EventType;
					});
					public constructor();
					public getEventSource(): com.adobe.marketing.mobile.EventSource;
					public hear(param0: com.adobe.marketing.mobile.Event): void;
					public onUnregistered(): void;
					public getEventType(): com.adobe.marketing.mobile.EventType;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class EventProcessor {
					public static class: java.lang.Class<com.adobe.marketing.mobile.EventProcessor>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.EventProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						process(param0: com.adobe.marketing.mobile.Event): com.adobe.marketing.mobile.Event;
						onUnregistered(): void;
					});
					public constructor();
					public process(param0: com.adobe.marketing.mobile.Event): com.adobe.marketing.mobile.Event;
					public onUnregistered(): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class EventSource {
					public static class: java.lang.Class<com.adobe.marketing.mobile.EventSource>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class EventType {
					public static class: java.lang.Class<com.adobe.marketing.mobile.EventType>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export abstract class Extension {
					public static class: java.lang.Class<com.adobe.marketing.mobile.Extension>;
					public getVersion(): string;
					public getApi(): com.adobe.marketing.mobile.ExtensionApi;
					public getName(): string;
					public onUnregistered(): void;
					public onUnexpectedError(param0: com.adobe.marketing.mobile.ExtensionUnexpectedError): void;
					public constructor(param0: com.adobe.marketing.mobile.ExtensionApi);
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class ExtensionApi extends com.adobe.marketing.mobile.Module {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ExtensionApi>;
					public getSharedEventState(param0: string, param1: com.adobe.marketing.mobile.Event): com.adobe.marketing.mobile.EventData;
					public unregisterExtension(): void;
					public onUnregistered(): void;
					public registerEventListener(param0: string, param1: string, param2: java.lang.Class, param3: com.adobe.marketing.mobile.ExtensionErrorCallback<any>): boolean;
					public registerWildcardListener(param0: java.lang.Class, param1: com.adobe.marketing.mobile.ExtensionErrorCallback<any>): boolean;
					public setSharedEventState(param0: java.util.Map<string,any>, param1: com.adobe.marketing.mobile.Event, param2: com.adobe.marketing.mobile.ExtensionErrorCallback<com.adobe.marketing.mobile.ExtensionError>): boolean;
					public registerWildcardListener(param0: java.lang.Class): void;
					public clearSharedEventStates(param0: com.adobe.marketing.mobile.ExtensionErrorCallback<com.adobe.marketing.mobile.ExtensionError>): boolean;
					public getSharedEventState(param0: string, param1: com.adobe.marketing.mobile.Event, param2: com.adobe.marketing.mobile.ExtensionErrorCallback<com.adobe.marketing.mobile.ExtensionError>): java.util.Map<string,any>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class ExtensionError extends com.adobe.marketing.mobile.AdobeError {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ExtensionError>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				@NativeClass()
				export class ExtensionErrorCallback<ExtensionError>  extends java.lang.Object {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ExtensionErrorCallback<any>>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.ExtensionErrorCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						error(param0: ExtensionError): void;
					});
					public constructor();
					public error(param0: ExtensionError): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export abstract class ExtensionListener extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.ExtensionApi> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ExtensionListener>;
					public getParentExtension(): com.adobe.marketing.mobile.Extension;
					public getEventSource(): com.adobe.marketing.mobile.EventSource;
					public constructor(param0: com.adobe.marketing.mobile.ExtensionApi, param1: string, param2: string);
					public hear(param0: com.adobe.marketing.mobile.Event): void;
					public onUnregistered(): void;
					public getEventType(): com.adobe.marketing.mobile.EventType;
					public constructor(param0: any, param1: com.adobe.marketing.mobile.EventType, param2: com.adobe.marketing.mobile.EventSource);
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class ExtensionUnexpectedError {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ExtensionUnexpectedError>;
					public getErrorCode(): com.adobe.marketing.mobile.ExtensionError;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class ExtensionVersionManager {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ExtensionVersionManager>;
					public static setWrapperType(param0: com.adobe.marketing.mobile.WrapperType): void;
					public static getSdkVersion(): string;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class FileUtil {
					public static class: java.lang.Class<com.adobe.marketing.mobile.FileUtil>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class FloatingButtonManager extends com.adobe.marketing.mobile.UIService.FloatingButton {
					public static class: java.lang.Class<com.adobe.marketing.mobile.FloatingButtonManager>;
					public display(): void;
					public remove(): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class FloatingButtonView {
					public static class: java.lang.Class<com.adobe.marketing.mobile.FloatingButtonView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
				export module FloatingButtonView {
					export class OnPositionChangedListener {
						public static class: java.lang.Class<com.adobe.marketing.mobile.FloatingButtonView.OnPositionChangedListener>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.FloatingButtonView$OnPositionChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onPositionChanged(param0: number, param1: number): void;
						});
						public constructor();
						public onPositionChanged(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class FullscreenMessageActivity {
					public static class: java.lang.Class<com.adobe.marketing.mobile.FullscreenMessageActivity>;
					public static message: com.adobe.marketing.mobile.AndroidFullscreenMessage;
					public static setFullscreenMessage(param0: com.adobe.marketing.mobile.AndroidFullscreenMessage): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
					public onBackPressed(): void;
					public onResume(): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class HitQueue<T, E>  extends com.adobe.marketing.mobile.AbstractHitsDatabase {
					public static class: java.lang.Class<com.adobe.marketing.mobile.HitQueue<any,any>>;
					public queue(param0: any): boolean;
				}
				export module HitQueue {
					@NativeClass()
					export class IHitProcessor<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.adobe.marketing.mobile.HitQueue.IHitProcessor<any>>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.HitQueue$IHitProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							process(param0: T): com.adobe.marketing.mobile.HitQueue.RetryType;
						});
						public constructor();
						public process(param0: T): com.adobe.marketing.mobile.HitQueue.RetryType;
					}
					export class RetryType {
						public static class: java.lang.Class<com.adobe.marketing.mobile.HitQueue.RetryType>;
						public static NO: com.adobe.marketing.mobile.HitQueue.RetryType;
						public static YES: com.adobe.marketing.mobile.HitQueue.RetryType;
						public static WAIT: com.adobe.marketing.mobile.HitQueue.RetryType;
						public static valueOf(param0: string): com.adobe.marketing.mobile.HitQueue.RetryType;
						public static values(): native.Array<com.adobe.marketing.mobile.HitQueue.RetryType>;
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class HttpConnectionHandler {
					public static class: java.lang.Class<com.adobe.marketing.mobile.HttpConnectionHandler>;
					public httpsUrlConnection: javax.net.ssl.HttpsURLConnection;
					public command: com.adobe.marketing.mobile.HttpConnectionHandler.Command;
				}
				export module HttpConnectionHandler {
					export class Command {
						public static class: java.lang.Class<com.adobe.marketing.mobile.HttpConnectionHandler.Command>;
						public static GET: com.adobe.marketing.mobile.HttpConnectionHandler.Command;
						public static POST: com.adobe.marketing.mobile.HttpConnectionHandler.Command;
						public isDoOutput(): boolean;
						public static valueOf(param0: string): com.adobe.marketing.mobile.HttpConnectionHandler.Command;
						public static values(): native.Array<com.adobe.marketing.mobile.HttpConnectionHandler.Command>;
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class IntegerVariant extends com.adobe.marketing.mobile.Variant {
					public static class: java.lang.Class<com.adobe.marketing.mobile.IntegerVariant>;
					public convertToString(): string;
					public toString(): string;
					public convertToDouble(): number;
					public static from(param0: number): com.adobe.marketing.mobile.Variant;
					public getLong(): number;
					public getKind(): com.adobe.marketing.mobile.VariantKind;
					public clone(): com.adobe.marketing.mobile.Variant;
					public clone(): com.adobe.marketing.mobile.IntegerVariant;
					public getDouble(): number;
					public getInteger(): number;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export abstract class InternalModule extends com.adobe.marketing.mobile.Module {
					public static class: java.lang.Class<com.adobe.marketing.mobile.InternalModule>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class InvalidInitException {
					public static class: java.lang.Class<com.adobe.marketing.mobile.InvalidInitException>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class InvalidModuleException {
					public static class: java.lang.Class<com.adobe.marketing.mobile.InvalidModuleException>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class JsonArrayVariantSerializer extends com.adobe.marketing.mobile.VariantSerializer<com.adobe.marketing.mobile.JsonUtilityService.JSONArray> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.JsonArrayVariantSerializer>;
					public constructor(param0: com.adobe.marketing.mobile.JsonUtilityService);
					public deserialize(param0: com.adobe.marketing.mobile.Variant): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
					public deserialize(param0: com.adobe.marketing.mobile.Variant): any;
					public serialize(param0: any): com.adobe.marketing.mobile.Variant;
					public serialize(param0: com.adobe.marketing.mobile.JsonUtilityService.JSONArray): com.adobe.marketing.mobile.Variant;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class JsonException {
					public static class: java.lang.Class<com.adobe.marketing.mobile.JsonException>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class JsonObjectVariantSerializer extends com.adobe.marketing.mobile.VariantSerializer<com.adobe.marketing.mobile.JsonUtilityService.JSONObject> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.JsonObjectVariantSerializer>;
					public constructor(param0: com.adobe.marketing.mobile.JsonUtilityService);
					public deserialize(param0: com.adobe.marketing.mobile.Variant): any;
					public serialize(param0: any): com.adobe.marketing.mobile.Variant;
					public serialize(param0: com.adobe.marketing.mobile.JsonUtilityService.JSONObject): com.adobe.marketing.mobile.Variant;
					public deserialize(param0: com.adobe.marketing.mobile.Variant): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class JsonUtilityService {
					public static class: java.lang.Class<com.adobe.marketing.mobile.JsonUtilityService>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.JsonUtilityService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						createJSONObject(param0: string): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
						createJSONObject(param0: java.util.Map): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
						createJSONArray(param0: string): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
						mapFromJsonObject(param0: com.adobe.marketing.mobile.JsonUtilityService.JSONObject): java.util.Map<string,string>;
					});
					public constructor();
					public createJSONObject(param0: java.util.Map): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
					public createJSONObject(param0: string): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
					public createJSONArray(param0: string): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
					public mapFromJsonObject(param0: com.adobe.marketing.mobile.JsonUtilityService.JSONObject): java.util.Map<string,string>;
				}
				export module JsonUtilityService {
					export class JSONArray {
						public static class: java.lang.Class<com.adobe.marketing.mobile.JsonUtilityService.JSONArray>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.JsonUtilityService$JSONArray interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							get(param0: number): any;
							put(param0: any): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
							put(param0: number, param1: any): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
							put(param0: com.adobe.marketing.mobile.JsonUtilityService.JSONObject): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
							put(param0: number, param1: com.adobe.marketing.mobile.JsonUtilityService.JSONObject): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
							put(param0: com.adobe.marketing.mobile.JsonUtilityService.JSONArray): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
							put(param0: number, param1: com.adobe.marketing.mobile.JsonUtilityService.JSONArray): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
							put(param0: number): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
							put(param0: number, param1: number): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
							put(param0: number): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
							put(param0: number, param1: number): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
							put(param0: number): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
							put(param0: number, param1: number): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
							put(param0: string): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
							put(param0: number, param1: string): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
							put(param0: boolean): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
							put(param0: number, param1: boolean): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
							getJSONObject(param0: number): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
							getJSONArray(param0: number): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
							getInt(param0: number): number;
							getLong(param0: number): number;
							getDouble(param0: number): number;
							getString(param0: number): string;
							getBoolean(param0: number): boolean;
							opt(param0: number): any;
							optJSONObject(param0: number): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
							optJSONArray(param0: number): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
							optInt(param0: number, param1: number): number;
							optLong(param0: number, param1: number): number;
							optDouble(param0: number, param1: number): number;
							optString(param0: number, param1: string): string;
							optBoolean(param0: number, param1: boolean): boolean;
							length(): number;
						});
						public constructor();
						public put(param0: number, param1: string): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
						public getBoolean(param0: number): boolean;
						public getJSONArray(param0: number): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
						public optBoolean(param0: number, param1: boolean): boolean;
						public put(param0: number): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
						public opt(param0: number): any;
						public put(param0: number, param1: com.adobe.marketing.mobile.JsonUtilityService.JSONObject): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
						public optJSONArray(param0: number): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
						public get(param0: number): any;
						public getInt(param0: number): number;
						public put(param0: com.adobe.marketing.mobile.JsonUtilityService.JSONObject): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
						public getDouble(param0: number): number;
						public put(param0: any): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
						public put(param0: number, param1: any): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
						public put(param0: number, param1: number): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
						public length(): number;
						public put(param0: com.adobe.marketing.mobile.JsonUtilityService.JSONArray): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
						public getString(param0: number): string;
						public optLong(param0: number, param1: number): number;
						public optInt(param0: number, param1: number): number;
						public put(param0: number, param1: com.adobe.marketing.mobile.JsonUtilityService.JSONArray): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
						public getJSONObject(param0: number): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
						public getLong(param0: number): number;
						public optDouble(param0: number, param1: number): number;
						public put(param0: boolean): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
						public optJSONObject(param0: number): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
						public put(param0: number, param1: boolean): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
						public optString(param0: number, param1: string): string;
						public put(param0: string): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
					}
					export class JSONObject {
						public static class: java.lang.Class<com.adobe.marketing.mobile.JsonUtilityService.JSONObject>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.JsonUtilityService$JSONObject interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							get(param0: string): any;
							getJSONObject(param0: string): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
							getJSONArray(param0: string): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
							getInt(param0: string): number;
							getLong(param0: string): number;
							getDouble(param0: string): number;
							getString(param0: string): string;
							getBoolean(param0: string): boolean;
							opt(param0: string): any;
							put(param0: string, param1: any): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
							put(param0: string, param1: com.adobe.marketing.mobile.JsonUtilityService.JSONObject): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
							put(param0: string, param1: com.adobe.marketing.mobile.JsonUtilityService.JSONArray): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
							put(param0: string, param1: number): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
							put(param0: string, param1: number): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
							put(param0: string, param1: number): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
							put(param0: string, param1: string): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
							put(param0: string, param1: boolean): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
							optJSONObject(param0: string): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
							optJSONArray(param0: string): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
							optInt(param0: string, param1: number): number;
							optLong(param0: string, param1: number): number;
							optDouble(param0: string, param1: number): number;
							optString(param0: string, param1: string): string;
							optBoolean(param0: string, param1: boolean): boolean;
							keys(): java.util.Iterator<string>;
							remove(param0: string): void;
							length(): number;
						});
						public constructor();
						public getJSONObject(param0: string): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
						public optDouble(param0: string, param1: number): number;
						public put(param0: string, param1: number): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
						public getLong(param0: string): number;
						public optLong(param0: string, param1: number): number;
						public optBoolean(param0: string, param1: boolean): boolean;
						public put(param0: string, param1: any): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
						public getDouble(param0: string): number;
						public get(param0: string): any;
						public opt(param0: string): any;
						public optJSONObject(param0: string): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
						public put(param0: string, param1: com.adobe.marketing.mobile.JsonUtilityService.JSONArray): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
						public put(param0: string, param1: string): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
						public length(): number;
						public remove(param0: string): void;
						public keys(): java.util.Iterator<string>;
						public put(param0: string, param1: com.adobe.marketing.mobile.JsonUtilityService.JSONObject): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
						public optInt(param0: string, param1: number): number;
						public getBoolean(param0: string): boolean;
						public getInt(param0: string): number;
						public optJSONArray(param0: string): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
						public getJSONArray(param0: string): com.adobe.marketing.mobile.JsonUtilityService.JSONArray;
						public getString(param0: string): string;
						public put(param0: string, param1: boolean): com.adobe.marketing.mobile.JsonUtilityService.JSONObject;
						public optString(param0: string, param1: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class JsonValueVariantSerializer extends com.adobe.marketing.mobile.VariantSerializer<any> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.JsonValueVariantSerializer>;
					public constructor(param0: com.adobe.marketing.mobile.JsonUtilityService);
					public deserialize(param0: com.adobe.marketing.mobile.Variant): any;
					public serialize(param0: any): com.adobe.marketing.mobile.Variant;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class LocalNotificationHandler {
					public static class: java.lang.Class<com.adobe.marketing.mobile.LocalNotificationHandler>;
					public constructor();
					public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class LocalStorageService {
					public static class: java.lang.Class<com.adobe.marketing.mobile.LocalStorageService>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.LocalStorageService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getDataStore(param0: string): com.adobe.marketing.mobile.LocalStorageService.DataStore;
					});
					public constructor();
					public getDataStore(param0: string): com.adobe.marketing.mobile.LocalStorageService.DataStore;
				}
				export module LocalStorageService {
					export class DataStore {
						public static class: java.lang.Class<com.adobe.marketing.mobile.LocalStorageService.DataStore>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.LocalStorageService$DataStore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setInt(param0: string, param1: number): void;
							getInt(param0: string, param1: number): number;
							setString(param0: string, param1: string): void;
							getString(param0: string, param1: string): string;
							setDouble(param0: string, param1: number): void;
							getDouble(param0: string, param1: number): number;
							setLong(param0: string, param1: number): void;
							getLong(param0: string, param1: number): number;
							setFloat(param0: string, param1: number): void;
							getFloat(param0: string, param1: number): number;
							setBoolean(param0: string, param1: boolean): void;
							getBoolean(param0: string, param1: boolean): boolean;
							setMap(param0: string, param1: java.util.Map<string,string>): void;
							getMap(param0: string): java.util.Map<string,string>;
							contains(param0: string): boolean;
							remove(param0: string): void;
							removeAll(): void;
						});
						public constructor();
						public getInt(param0: string, param1: number): number;
						public remove(param0: string): void;
						public setDouble(param0: string, param1: number): void;
						public setLong(param0: string, param1: number): void;
						public getMap(param0: string): java.util.Map<string,string>;
						public getBoolean(param0: string, param1: boolean): boolean;
						public removeAll(): void;
						public setBoolean(param0: string, param1: boolean): void;
						public setInt(param0: string, param1: number): void;
						public setFloat(param0: string, param1: number): void;
						public getString(param0: string, param1: string): string;
						public contains(param0: string): boolean;
						public getLong(param0: string, param1: number): number;
						public setString(param0: string, param1: string): void;
						public getFloat(param0: string, param1: number): number;
						public setMap(param0: string, param1: java.util.Map<string,string>): void;
						public getDouble(param0: string, param1: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class Log {
					public static class: java.lang.Class<com.adobe.marketing.mobile.Log>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class LoggingMode {
					public static class: java.lang.Class<com.adobe.marketing.mobile.LoggingMode>;
					public static ERROR: com.adobe.marketing.mobile.LoggingMode;
					public static WARNING: com.adobe.marketing.mobile.LoggingMode;
					public static DEBUG: com.adobe.marketing.mobile.LoggingMode;
					public static VERBOSE: com.adobe.marketing.mobile.LoggingMode;
					public id: number;
					public static values(): native.Array<com.adobe.marketing.mobile.LoggingMode>;
					public static valueOf(param0: string): com.adobe.marketing.mobile.LoggingMode;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class LoggingService {
					public static class: java.lang.Class<com.adobe.marketing.mobile.LoggingService>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.LoggingService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						trace(param0: string, param1: string): void;
						debug(param0: string, param1: string): void;
						warning(param0: string, param1: string): void;
						error(param0: string, param1: string): void;
					});
					public constructor();
					public trace(param0: string, param1: string): void;
					public error(param0: string, param1: string): void;
					public debug(param0: string, param1: string): void;
					public warning(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class LongVariant extends com.adobe.marketing.mobile.Variant {
					public static class: java.lang.Class<com.adobe.marketing.mobile.LongVariant>;
					public convertToString(): string;
					public toString(): string;
					public convertToDouble(): number;
					public clone(): com.adobe.marketing.mobile.LongVariant;
					public static from(param0: number): com.adobe.marketing.mobile.Variant;
					public getLong(): number;
					public getKind(): com.adobe.marketing.mobile.VariantKind;
					public clone(): com.adobe.marketing.mobile.Variant;
					public getDouble(): number;
					public getInteger(): number;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class MapVariant extends com.adobe.marketing.mobile.Variant {
					public static class: java.lang.Class<com.adobe.marketing.mobile.MapVariant>;
					public getVariantMap(): java.util.Map<string,com.adobe.marketing.mobile.Variant>;
					public toString(): string;
					public static from(param0: java.util.Map<string,com.adobe.marketing.mobile.Variant>): com.adobe.marketing.mobile.MapVariant;
					public getKind(): com.adobe.marketing.mobile.VariantKind;
					public clone(): com.adobe.marketing.mobile.Variant;
					public clone(): com.adobe.marketing.mobile.MapVariant;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export abstract class Matcher {
					public static class: java.lang.Class<com.adobe.marketing.mobile.Matcher>;
					public key: string;
					public values: java.util.ArrayList<any>;
					public static _matcherTypeDictionary: java.util.Map<string,java.lang.Class>;
					public toString(): string;
					public static matcherWithJsonObject(param0: com.adobe.marketing.mobile.JsonUtilityService.JSONObject): com.adobe.marketing.mobile.Matcher;
					public tryParseDouble(param0: any): java.lang.Double;
					public matches(param0: any): boolean;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class MatcherContains extends com.adobe.marketing.mobile.Matcher {
					public static class: java.lang.Class<com.adobe.marketing.mobile.MatcherContains>;
					public toString(): string;
					public matches(param0: any): boolean;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class MatcherEndsWith extends com.adobe.marketing.mobile.Matcher {
					public static class: java.lang.Class<com.adobe.marketing.mobile.MatcherEndsWith>;
					public toString(): string;
					public matches(param0: any): boolean;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class MatcherEquals extends com.adobe.marketing.mobile.Matcher {
					public static class: java.lang.Class<com.adobe.marketing.mobile.MatcherEquals>;
					public toString(): string;
					public compareObjectWithBoolean(param0: any, param1: boolean): boolean;
					public matches(param0: any): boolean;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class MatcherExists extends com.adobe.marketing.mobile.Matcher {
					public static class: java.lang.Class<com.adobe.marketing.mobile.MatcherExists>;
					public toString(): string;
					public matches(param0: any): boolean;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class MatcherGreaterThan extends com.adobe.marketing.mobile.Matcher {
					public static class: java.lang.Class<com.adobe.marketing.mobile.MatcherGreaterThan>;
					public toString(): string;
					public matches(param0: any): boolean;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class MatcherGreaterThanOrEqual extends com.adobe.marketing.mobile.Matcher {
					public static class: java.lang.Class<com.adobe.marketing.mobile.MatcherGreaterThanOrEqual>;
					public toString(): string;
					public matches(param0: any): boolean;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class MatcherLessThan extends com.adobe.marketing.mobile.Matcher {
					public static class: java.lang.Class<com.adobe.marketing.mobile.MatcherLessThan>;
					public toString(): string;
					public matches(param0: any): boolean;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class MatcherLessThanOrEqual extends com.adobe.marketing.mobile.Matcher {
					public static class: java.lang.Class<com.adobe.marketing.mobile.MatcherLessThanOrEqual>;
					public toString(): string;
					public matches(param0: any): boolean;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class MatcherNotContains extends com.adobe.marketing.mobile.MatcherContains {
					public static class: java.lang.Class<com.adobe.marketing.mobile.MatcherNotContains>;
					public toString(): string;
					public matches(param0: any): boolean;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class MatcherNotEquals extends com.adobe.marketing.mobile.MatcherEquals {
					public static class: java.lang.Class<com.adobe.marketing.mobile.MatcherNotEquals>;
					public toString(): string;
					public matches(param0: any): boolean;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class MatcherNotExists extends com.adobe.marketing.mobile.MatcherExists {
					public static class: java.lang.Class<com.adobe.marketing.mobile.MatcherNotExists>;
					public toString(): string;
					public matches(param0: any): boolean;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class MatcherStartsWith extends com.adobe.marketing.mobile.Matcher {
					public static class: java.lang.Class<com.adobe.marketing.mobile.MatcherStartsWith>;
					public toString(): string;
					public matches(param0: any): boolean;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class MatcherUnknown extends com.adobe.marketing.mobile.Matcher {
					public static class: java.lang.Class<com.adobe.marketing.mobile.MatcherUnknown>;
					public toString(): string;
					public matches(param0: any): boolean;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class MessagesMonitor {
					public static class: java.lang.Class<com.adobe.marketing.mobile.MessagesMonitor>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class MissingPlatformServicesException {
					public static class: java.lang.Class<com.adobe.marketing.mobile.MissingPlatformServicesException>;
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class MobileCore {
					public static class: java.lang.Class<com.adobe.marketing.mobile.MobileCore>;
					public static extensionVersion(): string;
					public static setApplication(param0: globalAndroid.app.Application): void;
					public static dispatchEventWithResponseCallback(param0: com.adobe.marketing.mobile.Event, param1: com.adobe.marketing.mobile.AdobeCallback<com.adobe.marketing.mobile.Event>, param2: com.adobe.marketing.mobile.ExtensionErrorCallback<com.adobe.marketing.mobile.ExtensionError>): boolean;
					public static trackState(param0: string, param1: java.util.Map<string,string>): void;
					public static setAdvertisingIdentifier(param0: string): void;
					public static collectPii(param0: java.util.Map<string,string>): void;
					public static collectMessageInfo(param0: java.util.Map<string,any>): void;
					public static getPrivacyStatus(param0: com.adobe.marketing.mobile.AdobeCallback<com.adobe.marketing.mobile.MobilePrivacyStatus>): void;
					public static getSdkIdentities(param0: com.adobe.marketing.mobile.AdobeCallback<string>): void;
					public static configureWithAppID(param0: string): void;
					public static start(param0: com.adobe.marketing.mobile.AdobeCallback<any>): void;
					public static dispatchResponseEvent(param0: com.adobe.marketing.mobile.Event, param1: com.adobe.marketing.mobile.Event, param2: com.adobe.marketing.mobile.ExtensionErrorCallback<com.adobe.marketing.mobile.ExtensionError>): boolean;
					public static registerExtension(param0: java.lang.Class<any>, param1: com.adobe.marketing.mobile.ExtensionErrorCallback<com.adobe.marketing.mobile.ExtensionError>): boolean;
					public static configureWithFileInPath(param0: string): void;
					public static lifecyclePause(): void;
					public static updateConfiguration(param0: java.util.Map<string,any>): void;
					public static lifecycleStart(param0: java.util.Map<string,string>): void;
					public static log(param0: com.adobe.marketing.mobile.LoggingMode, param1: string, param2: string): void;
					public static dispatchEvent(param0: com.adobe.marketing.mobile.Event, param1: com.adobe.marketing.mobile.ExtensionErrorCallback<com.adobe.marketing.mobile.ExtensionError>): boolean;
					public static setPrivacyStatus(param0: com.adobe.marketing.mobile.MobilePrivacyStatus): void;
					public static getApplication(): globalAndroid.app.Application;
					public static setWrapperType(param0: com.adobe.marketing.mobile.WrapperType): void;
					public static setPushIdentifier(param0: string): void;
					public static setLogLevel(param0: com.adobe.marketing.mobile.LoggingMode): void;
					public static setSmallIconResourceID(param0: number): void;
					public static getLogLevel(): com.adobe.marketing.mobile.LoggingMode;
					public static setLargeIconResourceID(param0: number): void;
					public static trackAction(param0: string, param1: java.util.Map<string,string>): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class MobileIdentities {
					public static class: java.lang.Class<com.adobe.marketing.mobile.MobileIdentities>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class MobilePrivacyStatus {
					public static class: java.lang.Class<com.adobe.marketing.mobile.MobilePrivacyStatus>;
					public static OPT_IN: com.adobe.marketing.mobile.MobilePrivacyStatus;
					public static OPT_OUT: com.adobe.marketing.mobile.MobilePrivacyStatus;
					public static UNKNOWN: com.adobe.marketing.mobile.MobilePrivacyStatus;
					public getValue(): string;
					public static valueOf(param0: string): com.adobe.marketing.mobile.MobilePrivacyStatus;
					public static values(): native.Array<com.adobe.marketing.mobile.MobilePrivacyStatus>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export abstract class Module {
					public static class: java.lang.Class<com.adobe.marketing.mobile.Module>;
					public hasSharedEventState(param0: string): boolean;
					public getModuleName(): string;
					public getExecutor(): java.util.concurrent.ExecutorService;
					public unregisterWildcardListener(): void;
					public createDispatcher(param0: java.lang.Class): com.adobe.marketing.mobile.ModuleEventDispatcher<any>;
					public createOrUpdateSharedState(param0: com.adobe.marketing.mobile.EventData): void;
					public clearSharedStates(): boolean;
					public getModuleVersion(): string;
					public unregisterListener(param0: com.adobe.marketing.mobile.EventType, param1: com.adobe.marketing.mobile.EventSource): void;
					public createSharedState(param0: number, param1: com.adobe.marketing.mobile.EventData): void;
					public registerWildcardListener(param0: java.lang.Class): void;
					public getSharedEventState(param0: string, param1: com.adobe.marketing.mobile.Event): com.adobe.marketing.mobile.EventData;
					public updateSharedState(param0: number, param1: com.adobe.marketing.mobile.EventData): void;
					public registerListener(param0: com.adobe.marketing.mobile.EventType, param1: com.adobe.marketing.mobile.EventSource, param2: java.lang.Class): void;
					public unregisterAllRules(): void;
					public constructor(param0: string, param1: com.adobe.marketing.mobile.EventHub);
					public createOrUpdateSharedState(param0: number, param1: com.adobe.marketing.mobile.EventData): void;
					public registerRule(param0: com.adobe.marketing.mobile.Rule): void;
					public onUnregistered(): void;
					public unregisterModule(): void;
					public createSharedStateAndDispatchEvent(param0: com.adobe.marketing.mobile.EventData, param1: com.adobe.marketing.mobile.Event): void;
					public replaceRules(param0: java.util.List<com.adobe.marketing.mobile.Rule>): void;
				}
				export module Module {
					export class OneTimeListenerBlock {
						public static class: java.lang.Class<com.adobe.marketing.mobile.Module.OneTimeListenerBlock>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.Module$OneTimeListenerBlock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							call(param0: com.adobe.marketing.mobile.Event): void;
						});
						public constructor();
						public call(param0: com.adobe.marketing.mobile.Event): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class ModuleDetails {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ModuleDetails>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.ModuleDetails interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getName(): string;
						getVersion(): string;
						getAdditionalInfo(): java.util.Map<string,string>;
					});
					public constructor();
					public getVersion(): string;
					public getName(): string;
					public getAdditionalInfo(): java.util.Map<string,string>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				@NativeClass()
				export abstract class ModuleEventDispatcher<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ModuleEventDispatcher<any>>;
					public parentModule: T;
					public dispatch(param0: com.adobe.marketing.mobile.Event): void;
					public constructor(param0: com.adobe.marketing.mobile.EventHub, param1: T);
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export abstract class ModuleEventListener<T>  extends com.adobe.marketing.mobile.EventListener {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ModuleEventListener<any>>;
					public getEventSource(): com.adobe.marketing.mobile.EventSource;
					public hear(param0: com.adobe.marketing.mobile.Event): void;
					public onUnregistered(): void;
					public getEventType(): com.adobe.marketing.mobile.EventType;
					public constructor(param0: any, param1: com.adobe.marketing.mobile.EventType, param2: com.adobe.marketing.mobile.EventSource);
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export abstract class ModuleEventProcessor<T>  extends com.adobe.marketing.mobile.EventProcessor {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ModuleEventProcessor<any>>;
					public parentModule: any;
					public process(param0: com.adobe.marketing.mobile.Event): com.adobe.marketing.mobile.Event;
					public constructor(param0: any);
					public onUnregistered(): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class NetworkConnectionUtil {
					public static class: java.lang.Class<com.adobe.marketing.mobile.NetworkConnectionUtil>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class NetworkService {
					public static class: java.lang.Class<com.adobe.marketing.mobile.NetworkService>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.NetworkService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						connectUrl(param0: string, param1: com.adobe.marketing.mobile.NetworkService.HttpCommand, param2: native.Array<number>, param3: java.util.Map<string,string>, param4: number, param5: number): com.adobe.marketing.mobile.NetworkService.HttpConnection;
						connectUrlAsync(param0: string, param1: com.adobe.marketing.mobile.NetworkService.HttpCommand, param2: native.Array<number>, param3: java.util.Map<string,string>, param4: number, param5: number, param6: com.adobe.marketing.mobile.NetworkService.Callback): void;
					});
					public constructor();
					public connectUrlAsync(param0: string, param1: com.adobe.marketing.mobile.NetworkService.HttpCommand, param2: native.Array<number>, param3: java.util.Map<string,string>, param4: number, param5: number, param6: com.adobe.marketing.mobile.NetworkService.Callback): void;
					public connectUrl(param0: string, param1: com.adobe.marketing.mobile.NetworkService.HttpCommand, param2: native.Array<number>, param3: java.util.Map<string,string>, param4: number, param5: number): com.adobe.marketing.mobile.NetworkService.HttpConnection;
				}
				export module NetworkService {
					export class Callback {
						public static class: java.lang.Class<com.adobe.marketing.mobile.NetworkService.Callback>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.NetworkService$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							call(param0: com.adobe.marketing.mobile.NetworkService.HttpConnection): void;
						});
						public constructor();
						public call(param0: com.adobe.marketing.mobile.NetworkService.HttpConnection): void;
					}
					export class HttpCommand {
						public static class: java.lang.Class<com.adobe.marketing.mobile.NetworkService.HttpCommand>;
						public static GET: com.adobe.marketing.mobile.NetworkService.HttpCommand;
						public static HEAD: com.adobe.marketing.mobile.NetworkService.HttpCommand;
						public static POST: com.adobe.marketing.mobile.NetworkService.HttpCommand;
						public static PUT: com.adobe.marketing.mobile.NetworkService.HttpCommand;
						public static DELETE: com.adobe.marketing.mobile.NetworkService.HttpCommand;
						public static TRACE: com.adobe.marketing.mobile.NetworkService.HttpCommand;
						public static OPTIONS: com.adobe.marketing.mobile.NetworkService.HttpCommand;
						public static CONNECT: com.adobe.marketing.mobile.NetworkService.HttpCommand;
						public static PATCH: com.adobe.marketing.mobile.NetworkService.HttpCommand;
						public static values(): native.Array<com.adobe.marketing.mobile.NetworkService.HttpCommand>;
						public static valueOf(param0: string): com.adobe.marketing.mobile.NetworkService.HttpCommand;
					}
					export class HttpConnection {
						public static class: java.lang.Class<com.adobe.marketing.mobile.NetworkService.HttpConnection>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.NetworkService$HttpConnection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getInputStream(): java.io.InputStream;
							getResponseCode(): number;
							getResponseMessage(): string;
							getResponsePropertyValue(param0: string): string;
							close(): void;
						});
						public constructor();
						public getResponsePropertyValue(param0: string): string;
						public getResponseMessage(): string;
						public close(): void;
						public getResponseCode(): number;
						public getInputStream(): java.io.InputStream;
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class NotificationDismissalHandler {
					public static class: java.lang.Class<com.adobe.marketing.mobile.NotificationDismissalHandler>;
					public constructor();
					public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class NullVariant extends com.adobe.marketing.mobile.Variant {
					public static class: java.lang.Class<com.adobe.marketing.mobile.NullVariant>;
					public toString(): string;
					public static from(): com.adobe.marketing.mobile.NullVariant;
					public clone(): com.adobe.marketing.mobile.NullVariant;
					public getKind(): com.adobe.marketing.mobile.VariantKind;
					public clone(): com.adobe.marketing.mobile.Variant;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class ObjectUtil {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ObjectUtil>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class OneTimeListener extends com.adobe.marketing.mobile.EventListener {
					public static class: java.lang.Class<com.adobe.marketing.mobile.OneTimeListener>;
					public isCalled(): boolean;
					public getEventSource(): com.adobe.marketing.mobile.EventSource;
					public constructor(param0: com.adobe.marketing.mobile.Module.OneTimeListenerBlock);
					public hear(param0: com.adobe.marketing.mobile.Event): void;
					public cancel(): void;
					public onUnregistered(): void;
					public getEventType(): com.adobe.marketing.mobile.EventType;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class PeripheralService {
					public static class: java.lang.Class<com.adobe.marketing.mobile.PeripheralService>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.PeripheralService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export module PeripheralService {
					export class Callback {
						public static class: java.lang.Class<com.adobe.marketing.mobile.PeripheralService.Callback>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.PeripheralService$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							call(): void;
						});
						public constructor();
						public call(): void;
					}
					export class PeripheralType {
						public static class: java.lang.Class<com.adobe.marketing.mobile.PeripheralService.PeripheralType>;
						public static BLUETOOTH: com.adobe.marketing.mobile.PeripheralService.PeripheralType;
						public static valueOf(param0: string): com.adobe.marketing.mobile.PeripheralService.PeripheralType;
						public static values(): native.Array<com.adobe.marketing.mobile.PeripheralService.PeripheralType>;
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class PermissiveVariantSerializer extends com.adobe.marketing.mobile.VariantSerializer<any> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.PermissiveVariantSerializer>;
					public static DEFAULT_INSTANCE: com.adobe.marketing.mobile.PermissiveVariantSerializer;
					public static MAX_DEPTH: number;
					public deserialize(param0: com.adobe.marketing.mobile.Variant): any;
					public serialize(param0: any): com.adobe.marketing.mobile.Variant;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class PlatformServices {
					public static class: java.lang.Class<com.adobe.marketing.mobile.PlatformServices>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.PlatformServices interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getLoggingService(): com.adobe.marketing.mobile.LoggingService;
						getNetworkService(): com.adobe.marketing.mobile.NetworkService;
						getLocalStorageService(): com.adobe.marketing.mobile.LocalStorageService;
						getDatabaseService(): com.adobe.marketing.mobile.DatabaseService;
						getSystemNotificationService(): com.adobe.marketing.mobile.SystemNotificationService;
						getSystemInfoService(): com.adobe.marketing.mobile.SystemInfoService;
						getUIService(): com.adobe.marketing.mobile.UIService;
						getJsonUtilityService(): com.adobe.marketing.mobile.JsonUtilityService;
						getDeepLinkService(): com.adobe.marketing.mobile.DeepLinkService;
						getEncodingService(): com.adobe.marketing.mobile.EncodingService;
						getCompressedFileService(): com.adobe.marketing.mobile.CompressedFileService;
					});
					public constructor();
					public getSystemInfoService(): com.adobe.marketing.mobile.SystemInfoService;
					public getSystemNotificationService(): com.adobe.marketing.mobile.SystemNotificationService;
					public getLoggingService(): com.adobe.marketing.mobile.LoggingService;
					public getNetworkService(): com.adobe.marketing.mobile.NetworkService;
					public getCompressedFileService(): com.adobe.marketing.mobile.CompressedFileService;
					public getLocalStorageService(): com.adobe.marketing.mobile.LocalStorageService;
					public getDatabaseService(): com.adobe.marketing.mobile.DatabaseService;
					public getDeepLinkService(): com.adobe.marketing.mobile.DeepLinkService;
					public getEncodingService(): com.adobe.marketing.mobile.EncodingService;
					public getUIService(): com.adobe.marketing.mobile.UIService;
					public getJsonUtilityService(): com.adobe.marketing.mobile.JsonUtilityService;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class Query {
					public static class: java.lang.Class<com.adobe.marketing.mobile.Query>;
				}
				export module Query {
					export class Builder {
						public static class: java.lang.Class<com.adobe.marketing.mobile.Query.Builder>;
						public constructor(param0: string, param1: native.Array<string>);
						public build(): com.adobe.marketing.mobile.Query;
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class QueryStringBuilder {
					public static class: java.lang.Class<com.adobe.marketing.mobile.QueryStringBuilder>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				@NativeClass()
				export class RangedResolver<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.adobe.marketing.mobile.RangedResolver<any>>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class RemoteDownloader {
					public static class: java.lang.Class<com.adobe.marketing.mobile.RemoteDownloader>;
					public static HTTP_HEADER_IF_MODIFIED_SINCE: string;
					public static HTTP_HEADER_IF_RANGE: string;
					public static HTTP_HEADER_RANGE: string;
					public url: string;
					public directory: string;
					public constructor(param0: com.adobe.marketing.mobile.NetworkService, param1: com.adobe.marketing.mobile.SystemInfoService, param2: string, param3: com.adobe.marketing.mobile.CacheManager);
					public constructor(param0: com.adobe.marketing.mobile.NetworkService, param1: com.adobe.marketing.mobile.SystemInfoService, param2: string, param3: string, param4: com.adobe.marketing.mobile.CacheManager);
					public startDownload(): boolean;
					public constructor(param0: com.adobe.marketing.mobile.NetworkService, param1: com.adobe.marketing.mobile.SystemInfoService, param2: string, param3: string);
					public onDownloadComplete(param0: java.io.File): void;
					public getRequestParameters(param0: java.io.File): java.util.HashMap<string,string>;
					public createRFC2822Formatter(): java.text.SimpleDateFormat;
					public startDownloadSync(): java.io.File;
					public constructor(param0: com.adobe.marketing.mobile.NetworkService, param1: com.adobe.marketing.mobile.SystemInfoService, param2: string, param3: string, param4: java.util.Map<string,string>);
					public constructor(param0: com.adobe.marketing.mobile.NetworkService, param1: com.adobe.marketing.mobile.SystemInfoService, param2: string, param3: com.adobe.marketing.mobile.CacheManager, param4: java.util.Map<string,string>);
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class Rule {
					public static class: java.lang.Class<com.adobe.marketing.mobile.Rule>;
					public condition: com.adobe.marketing.mobile.RuleCondition;
					public consequenceEvents: java.util.List<com.adobe.marketing.mobile.Event>;
					public evaluateCondition(param0: com.adobe.marketing.mobile.RuleTokenParser, param1: com.adobe.marketing.mobile.Event): boolean;
					public toString(): string;
					public getConsequenceEvents(): java.util.List<com.adobe.marketing.mobile.Event>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export abstract class RuleCondition {
					public static class: java.lang.Class<com.adobe.marketing.mobile.RuleCondition>;
					public toString(): string;
					public evaluate(param0: com.adobe.marketing.mobile.RuleTokenParser, param1: com.adobe.marketing.mobile.Event): boolean;
					public static ruleConditionFromJson(param0: com.adobe.marketing.mobile.JsonUtilityService.JSONObject): com.adobe.marketing.mobile.RuleCondition;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class RuleConditionAndGroup extends com.adobe.marketing.mobile.RuleConditionGroup {
					public static class: java.lang.Class<com.adobe.marketing.mobile.RuleConditionAndGroup>;
					public toString(): string;
					public evaluate(param0: com.adobe.marketing.mobile.RuleTokenParser, param1: com.adobe.marketing.mobile.Event): boolean;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export abstract class RuleConditionGroup extends com.adobe.marketing.mobile.RuleCondition {
					public static class: java.lang.Class<com.adobe.marketing.mobile.RuleConditionGroup>;
					public static ruleConditionGroupFromJson(param0: com.adobe.marketing.mobile.JsonUtilityService.JSONObject): com.adobe.marketing.mobile.RuleConditionGroup;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class RuleConditionMatcher extends com.adobe.marketing.mobile.RuleCondition {
					public static class: java.lang.Class<com.adobe.marketing.mobile.RuleConditionMatcher>;
					public static ruleConditionMatcherFromJson(param0: com.adobe.marketing.mobile.JsonUtilityService.JSONObject): com.adobe.marketing.mobile.RuleConditionMatcher;
					public toString(): string;
					public evaluate(param0: com.adobe.marketing.mobile.RuleTokenParser, param1: com.adobe.marketing.mobile.Event): boolean;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class RuleConditionOrGroup extends com.adobe.marketing.mobile.RuleConditionGroup {
					public static class: java.lang.Class<com.adobe.marketing.mobile.RuleConditionOrGroup>;
					public toString(): string;
					public evaluate(param0: com.adobe.marketing.mobile.RuleTokenParser, param1: com.adobe.marketing.mobile.Event): boolean;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class RuleConsequence {
					public static class: java.lang.Class<com.adobe.marketing.mobile.RuleConsequence>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class RuleTokenParser {
					public static class: java.lang.Class<com.adobe.marketing.mobile.RuleTokenParser>;
					public constructor(param0: com.adobe.marketing.mobile.EventHub);
				}
				export module RuleTokenParser {
					export class KeyFinder {
						public static class: java.lang.Class<com.adobe.marketing.mobile.RuleTokenParser.KeyFinder>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.RuleTokenParser$KeyFinder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							find(param0: com.adobe.marketing.mobile.Event): string;
						});
						public constructor();
						public find(param0: com.adobe.marketing.mobile.Event): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class RulesEngine {
					public static class: java.lang.Class<com.adobe.marketing.mobile.RulesEngine>;
					public ruleTokenParser: com.adobe.marketing.mobile.RuleTokenParser;
					public moduleRuleAssociation: java.util.concurrent.ConcurrentHashMap<com.adobe.marketing.mobile.Module,java.util.concurrent.ConcurrentLinkedQueue<com.adobe.marketing.mobile.Rule>>;
					public constructor(param0: com.adobe.marketing.mobile.EventHub);
					public evaluateRules(param0: com.adobe.marketing.mobile.Event): java.util.List<com.adobe.marketing.mobile.Event>;
					public getTokenExpandedList(param0: java.util.List<any>, param1: com.adobe.marketing.mobile.Event): java.util.List<any>;
					public processAttachDataConsequence(param0: java.util.Map<string,com.adobe.marketing.mobile.Variant>, param1: com.adobe.marketing.mobile.Event): void;
					public replaceRules(param0: com.adobe.marketing.mobile.Module, param1: java.util.List<com.adobe.marketing.mobile.Rule>): void;
					public evaluateRuleForEvent(param0: com.adobe.marketing.mobile.Event, param1: com.adobe.marketing.mobile.Rule): java.util.List<com.adobe.marketing.mobile.Event>;
					public getTokenExpandedEventData(param0: com.adobe.marketing.mobile.EventData, param1: com.adobe.marketing.mobile.Event): com.adobe.marketing.mobile.EventData;
					public getTokenExpandedMap(param0: java.util.Map<string,any>, param1: com.adobe.marketing.mobile.Event): java.util.Map<string,any>;
					public unregisterAllRules(param0: com.adobe.marketing.mobile.Module): void;
					public addRule(param0: com.adobe.marketing.mobile.Module, param1: com.adobe.marketing.mobile.Rule): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class RulesEngineConstants {
					public static class: java.lang.Class<com.adobe.marketing.mobile.RulesEngineConstants>;
				}
				export module RulesEngineConstants {
					export class EventDataKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.RulesEngineConstants.EventDataKeys>;
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class RulesRemoteDownloader extends com.adobe.marketing.mobile.RemoteDownloader {
					public static class: java.lang.Class<com.adobe.marketing.mobile.RulesRemoteDownloader>;
					public getRequestParameters(param0: java.io.File): java.util.HashMap<string,string>;
					public processBundle(param0: java.io.File): java.io.File;
					public startDownloadSync(): java.io.File;
				}
				export module RulesRemoteDownloader {
					export class Metadata {
						public static class: java.lang.Class<com.adobe.marketing.mobile.RulesRemoteDownloader.Metadata>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.RulesRemoteDownloader$Metadata interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getLastModifiedDate(): number;
							getSize(): number;
						});
						public constructor();
						public getLastModifiedDate(): number;
						public getSize(): number;
					}
					export class RulesBundleNetworkProtocolHandler {
						public static class: java.lang.Class<com.adobe.marketing.mobile.RulesRemoteDownloader.RulesBundleNetworkProtocolHandler>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.RulesRemoteDownloader$RulesBundleNetworkProtocolHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getMetadata(param0: java.io.File): com.adobe.marketing.mobile.RulesRemoteDownloader.Metadata;
							processDownloadedBundle(param0: java.io.File, param1: string, param2: number): boolean;
						});
						public constructor();
						public processDownloadedBundle(param0: java.io.File, param1: string, param2: number): boolean;
						public getMetadata(param0: java.io.File): com.adobe.marketing.mobile.RulesRemoteDownloader.Metadata;
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class StringEncoder {
					public static class: java.lang.Class<com.adobe.marketing.mobile.StringEncoder>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class StringUtils {
					public static class: java.lang.Class<com.adobe.marketing.mobile.StringUtils>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class StringVariant extends com.adobe.marketing.mobile.Variant {
					public static class: java.lang.Class<com.adobe.marketing.mobile.StringVariant>;
					public convertToString(): string;
					public toString(): string;
					public convertToDouble(): number;
					public getKind(): com.adobe.marketing.mobile.VariantKind;
					public clone(): com.adobe.marketing.mobile.Variant;
					public static from(param0: string): com.adobe.marketing.mobile.Variant;
					public getString(): string;
					public clone(): com.adobe.marketing.mobile.StringVariant;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class StringVariantSerializer extends com.adobe.marketing.mobile.VariantSerializer<string> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.StringVariantSerializer>;
					public serialize(param0: string): com.adobe.marketing.mobile.Variant;
					public deserialize(param0: com.adobe.marketing.mobile.Variant): any;
					public serialize(param0: any): com.adobe.marketing.mobile.Variant;
					public constructor();
					public deserialize(param0: com.adobe.marketing.mobile.Variant): string;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class SystemInfoService {
					public static class: java.lang.Class<com.adobe.marketing.mobile.SystemInfoService>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.SystemInfoService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getApplicationBaseDir(): java.io.File;
						getApplicationCacheDir(): java.io.File;
						getAsset(param0: string): java.io.InputStream;
						getProperty(param0: string): string;
						getApplicationName(): string;
						getApplicationPackageName(): string;
						getApplicationVersion(): string;
						getApplicationVersionCode(): string;
						getActiveLocale(): java.util.Locale;
						getLocaleString(): string;
						getDisplayInformation(): com.adobe.marketing.mobile.SystemInfoService.DisplayInformation;
						getCurrentOrientation(): number;
						getOperatingSystemName(): string;
						getCanonicalPlatformName(): string;
						getOperatingSystemVersion(): string;
						getDeviceManufacturer(): string;
						getDeviceName(): string;
						getDeviceType(): com.adobe.marketing.mobile.SystemInfoService.DeviceType;
						getDeviceBuildId(): string;
						getMobileCarrierName(): string;
						getNetworkConnectionStatus(): com.adobe.marketing.mobile.SystemInfoService.ConnectionStatus;
						registerOneTimeNetworkConnectionActiveListener(param0: com.adobe.marketing.mobile.SystemInfoService.NetworkConnectionActiveListener): boolean;
						getRunMode(): string;
						getSdkVersion(): string;
						getCoreVersion(): string;
						getDefaultUserAgent(): string;
					});
					public constructor();
					public getLocaleString(): string;
					public getApplicationVersionCode(): string;
					public getDefaultUserAgent(): string;
					public getApplicationBaseDir(): java.io.File;
					public getNetworkConnectionStatus(): com.adobe.marketing.mobile.SystemInfoService.ConnectionStatus;
					public getAsset(param0: string): java.io.InputStream;
					/** @deprecated */
					public getSdkVersion(): string;
					public getActiveLocale(): java.util.Locale;
					public getApplicationVersion(): string;
					public getDeviceName(): string;
					public registerOneTimeNetworkConnectionActiveListener(param0: com.adobe.marketing.mobile.SystemInfoService.NetworkConnectionActiveListener): boolean;
					public getApplicationCacheDir(): java.io.File;
					public getDeviceBuildId(): string;
					public getOperatingSystemName(): string;
					public getApplicationPackageName(): string;
					public getDeviceManufacturer(): string;
					public getDeviceType(): com.adobe.marketing.mobile.SystemInfoService.DeviceType;
					public getApplicationName(): string;
					public getMobileCarrierName(): string;
					public getCoreVersion(): string;
					public getOperatingSystemVersion(): string;
					public getCanonicalPlatformName(): string;
					public getCurrentOrientation(): number;
					public getProperty(param0: string): string;
					public getRunMode(): string;
					public getDisplayInformation(): com.adobe.marketing.mobile.SystemInfoService.DisplayInformation;
				}
				export module SystemInfoService {
					export class ConnectionStatus {
						public static class: java.lang.Class<com.adobe.marketing.mobile.SystemInfoService.ConnectionStatus>;
						public static CONNECTED: com.adobe.marketing.mobile.SystemInfoService.ConnectionStatus;
						public static DISCONNECTED: com.adobe.marketing.mobile.SystemInfoService.ConnectionStatus;
						public static UNKNOWN: com.adobe.marketing.mobile.SystemInfoService.ConnectionStatus;
						public static valueOf(param0: string): com.adobe.marketing.mobile.SystemInfoService.ConnectionStatus;
						public static values(): native.Array<com.adobe.marketing.mobile.SystemInfoService.ConnectionStatus>;
					}
					export class DeviceType {
						public static class: java.lang.Class<com.adobe.marketing.mobile.SystemInfoService.DeviceType>;
						public static PHONE: com.adobe.marketing.mobile.SystemInfoService.DeviceType;
						public static TABLET: com.adobe.marketing.mobile.SystemInfoService.DeviceType;
						public static WATCH: com.adobe.marketing.mobile.SystemInfoService.DeviceType;
						public static UNKNOWN: com.adobe.marketing.mobile.SystemInfoService.DeviceType;
						public static values(): native.Array<com.adobe.marketing.mobile.SystemInfoService.DeviceType>;
						public static valueOf(param0: string): com.adobe.marketing.mobile.SystemInfoService.DeviceType;
					}
					export class DisplayInformation {
						public static class: java.lang.Class<com.adobe.marketing.mobile.SystemInfoService.DisplayInformation>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.SystemInfoService$DisplayInformation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getWidthPixels(): number;
							getHeightPixels(): number;
							getDensityDpi(): number;
						});
						public constructor();
						public getDensityDpi(): number;
						public getHeightPixels(): number;
						public getWidthPixels(): number;
					}
					export class NetworkConnectionActiveListener {
						public static class: java.lang.Class<com.adobe.marketing.mobile.SystemInfoService.NetworkConnectionActiveListener>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.SystemInfoService$NetworkConnectionActiveListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onActive(): void;
						});
						public constructor();
						public onActive(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class SystemNotificationService {
					public static class: java.lang.Class<com.adobe.marketing.mobile.SystemNotificationService>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.SystemNotificationService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						registerForNotification(param0: com.adobe.marketing.mobile.SystemNotificationService.NotificationType): boolean;
						unregisterForNotification(param0: com.adobe.marketing.mobile.SystemNotificationService.NotificationType): void;
					});
					public constructor();
					public registerForNotification(param0: com.adobe.marketing.mobile.SystemNotificationService.NotificationType): boolean;
					public unregisterForNotification(param0: com.adobe.marketing.mobile.SystemNotificationService.NotificationType): void;
				}
				export module SystemNotificationService {
					export class NotificationType {
						public static class: java.lang.Class<com.adobe.marketing.mobile.SystemNotificationService.NotificationType>;
						public static CONNECTIVITY_CHANGE: com.adobe.marketing.mobile.SystemNotificationService.NotificationType;
						public static REFERRER_INFO_AVAILABLE: com.adobe.marketing.mobile.SystemNotificationService.NotificationType;
						public static valueOf(param0: string): com.adobe.marketing.mobile.SystemNotificationService.NotificationType;
						public static values(): native.Array<com.adobe.marketing.mobile.SystemNotificationService.NotificationType>;
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class TLSSocketFactory {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TLSSocketFactory>;
					public getSupportedCipherSuites(): native.Array<string>;
					public createSocket(): java.net.Socket;
					public createSocket(param0: string, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
					public createSocket(param0: java.net.Socket, param1: string, param2: number, param3: boolean): java.net.Socket;
					public static getInstance(): javax.net.ssl.SSLSocketFactory;
					public createSocket(param0: java.net.InetAddress, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
					public getDefaultCipherSuites(): native.Array<string>;
					public createSocket(param0: string, param1: number): java.net.Socket;
					public createSocket(param0: java.net.InetAddress, param1: number): java.net.Socket;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class ThreadService {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ThreadService>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.ThreadService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setThreadPriorityToBackground(): void;
					});
					public constructor();
					public setThreadPriorityToBackground(): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class TimeUtil {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TimeUtil>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class TimerState {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TimerState>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class TrivialVariantSerializer extends com.adobe.marketing.mobile.VariantSerializer<com.adobe.marketing.mobile.Variant> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TrivialVariantSerializer>;
					public deserialize(param0: com.adobe.marketing.mobile.Variant): any;
					public deserialize(param0: com.adobe.marketing.mobile.Variant): com.adobe.marketing.mobile.Variant;
					public serialize(param0: any): com.adobe.marketing.mobile.Variant;
					public serialize(param0: com.adobe.marketing.mobile.Variant): com.adobe.marketing.mobile.Variant;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class TypedListVariantSerializer<T>  extends com.adobe.marketing.mobile.VariantSerializer<java.util.List<any>> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TypedListVariantSerializer<any>>;
					public deserialize(param0: com.adobe.marketing.mobile.Variant): any;
					public serialize(param0: any): com.adobe.marketing.mobile.Variant;
					public serializeList(param0: java.util.List<any>): com.adobe.marketing.mobile.Variant;
					public serialize(param0: java.util.List<any>): com.adobe.marketing.mobile.Variant;
					public deserializeList(param0: java.util.List<com.adobe.marketing.mobile.Variant>): java.util.List<any>;
					public constructor(param0: com.adobe.marketing.mobile.VariantSerializer<any>);
					public deserialize(param0: com.adobe.marketing.mobile.Variant): java.util.List<any>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class TypedMapVariantSerializer<T>  extends com.adobe.marketing.mobile.VariantSerializer<java.util.Map<string,any>> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TypedMapVariantSerializer<any>>;
					public deserialize(param0: com.adobe.marketing.mobile.Variant): java.util.Map<string,any>;
					public serializeMap(param0: java.util.Map<string,any>): com.adobe.marketing.mobile.Variant;
					public deserialize(param0: com.adobe.marketing.mobile.Variant): any;
					public serialize(param0: any): com.adobe.marketing.mobile.Variant;
					public serializeMapToVariantMap(param0: java.util.Map<string,any>): java.util.Map<string,com.adobe.marketing.mobile.Variant>;
					public serialize(param0: java.util.Map<string,any>): com.adobe.marketing.mobile.Variant;
					public deserializeMap(param0: java.util.Map<string,com.adobe.marketing.mobile.Variant>): java.util.Map<string,any>;
					public constructor(param0: com.adobe.marketing.mobile.VariantSerializer<any>);
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class UIService {
					public static class: java.lang.Class<com.adobe.marketing.mobile.UIService>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.UIService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						showAlert(param0: string, param1: string, param2: string, param3: string, param4: com.adobe.marketing.mobile.UIService.UIAlertListener): void;
						createFullscreenMessage(param0: string, param1: com.adobe.marketing.mobile.UIService.UIFullScreenListener): com.adobe.marketing.mobile.UIService.UIFullScreenMessage;
						showLocalNotification(param0: string, param1: string, param2: number, param3: number, param4: string, param5: java.util.Map<string,any>, param6: string): void;
						showLocalNotification(param0: string, param1: string, param2: number, param3: number, param4: string, param5: java.util.Map<string,any>, param6: string, param7: string): void;
						showUrl(param0: string): boolean;
						getAppState(): com.adobe.marketing.mobile.UIService.AppState;
						registerAppStateListener(param0: com.adobe.marketing.mobile.UIService.AppStateListener): void;
						unregisterAppStateListener(param0: com.adobe.marketing.mobile.UIService.AppStateListener): void;
						isMessageDisplayed(): boolean;
						createFloatingButton(param0: com.adobe.marketing.mobile.UIService.FloatingButtonListener): com.adobe.marketing.mobile.UIService.FloatingButton;
					});
					public constructor();
					public showLocalNotification(param0: string, param1: string, param2: number, param3: number, param4: string, param5: java.util.Map<string,any>, param6: string): void;
					public createFullscreenMessage(param0: string, param1: com.adobe.marketing.mobile.UIService.UIFullScreenListener): com.adobe.marketing.mobile.UIService.UIFullScreenMessage;
					public showUrl(param0: string): boolean;
					public createFloatingButton(param0: com.adobe.marketing.mobile.UIService.FloatingButtonListener): com.adobe.marketing.mobile.UIService.FloatingButton;
					public showAlert(param0: string, param1: string, param2: string, param3: string, param4: com.adobe.marketing.mobile.UIService.UIAlertListener): void;
					public showLocalNotification(param0: string, param1: string, param2: number, param3: number, param4: string, param5: java.util.Map<string,any>, param6: string, param7: string): void;
					public isMessageDisplayed(): boolean;
					public unregisterAppStateListener(param0: com.adobe.marketing.mobile.UIService.AppStateListener): void;
					public getAppState(): com.adobe.marketing.mobile.UIService.AppState;
					public registerAppStateListener(param0: com.adobe.marketing.mobile.UIService.AppStateListener): void;
				}
				export module UIService {
					export class AppState {
						public static class: java.lang.Class<com.adobe.marketing.mobile.UIService.AppState>;
						public static FOREGROUND: com.adobe.marketing.mobile.UIService.AppState;
						public static BACKGROUND: com.adobe.marketing.mobile.UIService.AppState;
						public static UNKNOWN: com.adobe.marketing.mobile.UIService.AppState;
						public static values(): native.Array<com.adobe.marketing.mobile.UIService.AppState>;
						public static valueOf(param0: string): com.adobe.marketing.mobile.UIService.AppState;
					}
					export class AppStateListener {
						public static class: java.lang.Class<com.adobe.marketing.mobile.UIService.AppStateListener>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.UIService$AppStateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onForeground(): void;
							onBackground(): void;
						});
						public constructor();
						public onForeground(): void;
						public onBackground(): void;
					}
					export class FloatingButton {
						public static class: java.lang.Class<com.adobe.marketing.mobile.UIService.FloatingButton>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.UIService$FloatingButton interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							display(): void;
							remove(): void;
						});
						public constructor();
						public display(): void;
						public remove(): void;
					}
					export class FloatingButtonListener {
						public static class: java.lang.Class<com.adobe.marketing.mobile.UIService.FloatingButtonListener>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.UIService$FloatingButtonListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onTapDetected(): void;
							onPanDetected(): void;
						});
						public constructor();
						public onPanDetected(): void;
						public onTapDetected(): void;
					}
					export class UIAlertListener {
						public static class: java.lang.Class<com.adobe.marketing.mobile.UIService.UIAlertListener>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.UIService$UIAlertListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onPositiveResponse(): void;
							onNegativeResponse(): void;
							onShow(): void;
							onDismiss(): void;
						});
						public constructor();
						public onDismiss(): void;
						public onNegativeResponse(): void;
						public onPositiveResponse(): void;
						public onShow(): void;
					}
					export class UIFullScreenListener {
						public static class: java.lang.Class<com.adobe.marketing.mobile.UIService.UIFullScreenListener>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.UIService$UIFullScreenListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onShow(param0: com.adobe.marketing.mobile.UIService.UIFullScreenMessage): void;
							onDismiss(param0: com.adobe.marketing.mobile.UIService.UIFullScreenMessage): void;
							overrideUrlLoad(param0: com.adobe.marketing.mobile.UIService.UIFullScreenMessage, param1: string): boolean;
						});
						public constructor();
						public overrideUrlLoad(param0: com.adobe.marketing.mobile.UIService.UIFullScreenMessage, param1: string): boolean;
						public onShow(param0: com.adobe.marketing.mobile.UIService.UIFullScreenMessage): void;
						public onDismiss(param0: com.adobe.marketing.mobile.UIService.UIFullScreenMessage): void;
					}
					export class UIFullScreenMessage {
						public static class: java.lang.Class<com.adobe.marketing.mobile.UIService.UIFullScreenMessage>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.UIService$UIFullScreenMessage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							show(): void;
							openUrl(param0: string): void;
							remove(): void;
							setLocalAssetsMap(param0: java.util.Map<string,string>): void;
						});
						public constructor();
						public openUrl(param0: string): void;
						public setLocalAssetsMap(param0: java.util.Map<string,string>): void;
						public show(): void;
						public remove(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class URLBuilder {
					public static class: java.lang.Class<com.adobe.marketing.mobile.URLBuilder>;
					public build(): string;
					public addPath(param0: string): com.adobe.marketing.mobile.URLBuilder;
					public constructor();
					public addQueryParameters(param0: java.util.Map<string,string>): com.adobe.marketing.mobile.URLBuilder;
					public addQuery(param0: string, param1: com.adobe.marketing.mobile.URLBuilder.EncodeType): com.adobe.marketing.mobile.URLBuilder;
					public setServer(param0: string): com.adobe.marketing.mobile.URLBuilder;
					public addQueryParameter(param0: string, param1: string): com.adobe.marketing.mobile.URLBuilder;
					public addQuery(param0: string): com.adobe.marketing.mobile.URLBuilder;
					public enableSSL(param0: boolean): com.adobe.marketing.mobile.URLBuilder;
				}
				export module URLBuilder {
					export class EncodeType {
						public static class: java.lang.Class<com.adobe.marketing.mobile.URLBuilder.EncodeType>;
						public static NONE: com.adobe.marketing.mobile.URLBuilder.EncodeType;
						public static ENCODE: com.adobe.marketing.mobile.URLBuilder.EncodeType;
						public id: number;
						public static values(): native.Array<com.adobe.marketing.mobile.URLBuilder.EncodeType>;
						public static valueOf(param0: string): com.adobe.marketing.mobile.URLBuilder.EncodeType;
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class UnsupportedConditionException {
					public static class: java.lang.Class<com.adobe.marketing.mobile.UnsupportedConditionException>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class UrlUtilities {
					public static class: java.lang.Class<com.adobe.marketing.mobile.UrlUtilities>;
					public static urlEncode(param0: string): string;
					public static serializeToQueryString(param0: java.util.Map<string,com.adobe.marketing.mobile.Variant>): string;
					public static serializeKeyValuePair(param0: string, param1: string): string;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class UserProfileKeyConstants {
					public static class: java.lang.Class<com.adobe.marketing.mobile.UserProfileKeyConstants>;
					public static FIRST_NAME: string;
					public static LAST_NAME: string;
					public static EMAIL: string;
					public static DATE_OF_BIRTH: string;
					public static COUNTRY: string;
					public static LANGUAGE: string;
					public static TIME_ZONE: string;
					public static HOME_CITY: string;
					public static CURRENT_LOCATION: string;
					public static BIO: string;
					public static GENDER: string;
					public static PHONE: string;
					public static EMAIL_SUBSCRIBE: string;
					public static PUSH_SUBSCRIBE: string;
					public static DATE_OF_FIRST_SESSION: string;
					public static DATE_OF_LAST_SESSION: string;
					public static IMAGE_URL: string;
					public static PUSH_TOKENS: string;
					public static USER_ID: string;
					public static FACEBOOK_ID_HASH: string;
					public static TWITTER_ID_HASH: string;
					public static DATE_OF_LAST_RECEIVED_ANY_CAMPAIGN: string;
					public static DATE_OF_LAST_RECEIVED_EMAIL_CAMPAIGN: string;
					public static DATE_OF_LAST_RECEIVED_PUSH_CAMPAIGN: string;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class V4ToV5Migration {
					public static class: java.lang.Class<com.adobe.marketing.mobile.V4ToV5Migration>;
					public migrate(): void;
				}
				export module V4ToV5Migration {
					export class V4 {
						public static class: java.lang.Class<com.adobe.marketing.mobile.V4ToV5Migration.V4>;
					}
					export module V4 {
						export class Acquisition {
							public static class: java.lang.Class<com.adobe.marketing.mobile.V4ToV5Migration.V4.Acquisition>;
						}
						export class Analytics {
							public static class: java.lang.Class<com.adobe.marketing.mobile.V4ToV5Migration.V4.Analytics>;
						}
						export class AudienceManager {
							public static class: java.lang.Class<com.adobe.marketing.mobile.V4ToV5Migration.V4.AudienceManager>;
						}
						export class Configuration {
							public static class: java.lang.Class<com.adobe.marketing.mobile.V4ToV5Migration.V4.Configuration>;
						}
						export class Identity {
							public static class: java.lang.Class<com.adobe.marketing.mobile.V4ToV5Migration.V4.Identity>;
						}
						export class Lifecycle {
							public static class: java.lang.Class<com.adobe.marketing.mobile.V4ToV5Migration.V4.Lifecycle>;
						}
						export class Messages {
							public static class: java.lang.Class<com.adobe.marketing.mobile.V4ToV5Migration.V4.Messages>;
						}
						export class Target {
							public static class: java.lang.Class<com.adobe.marketing.mobile.V4ToV5Migration.V4.Target>;
						}
					}
					export class V5 {
						public static class: java.lang.Class<com.adobe.marketing.mobile.V4ToV5Migration.V5>;
					}
					export module V5 {
						export class Acquisition {
							public static class: java.lang.Class<com.adobe.marketing.mobile.V4ToV5Migration.V5.Acquisition>;
						}
						export class Analytics {
							public static class: java.lang.Class<com.adobe.marketing.mobile.V4ToV5Migration.V5.Analytics>;
						}
						export class AudienceManager {
							public static class: java.lang.Class<com.adobe.marketing.mobile.V4ToV5Migration.V5.AudienceManager>;
						}
						export class Configuration {
							public static class: java.lang.Class<com.adobe.marketing.mobile.V4ToV5Migration.V5.Configuration>;
						}
						export class Identity {
							public static class: java.lang.Class<com.adobe.marketing.mobile.V4ToV5Migration.V5.Identity>;
						}
						export class Lifecycle {
							public static class: java.lang.Class<com.adobe.marketing.mobile.V4ToV5Migration.V5.Lifecycle>;
						}
						export class MobileServices {
							public static class: java.lang.Class<com.adobe.marketing.mobile.V4ToV5Migration.V5.MobileServices>;
						}
						export class Target {
							public static class: java.lang.Class<com.adobe.marketing.mobile.V4ToV5Migration.V5.Target>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export abstract class Variant {
					public static class: java.lang.Class<com.adobe.marketing.mobile.Variant>;
					public static MAX_SAFE_INTEGER: number;
					public static MIN_SAFE_INTEGER: number;
					public getVariantMap(): java.util.Map<string,com.adobe.marketing.mobile.Variant>;
					public optInteger(param0: number): number;
					public convertToDouble(): number;
					public static optVariantFromMap(param0: java.util.Map<string,com.adobe.marketing.mobile.Variant>, param1: string): com.adobe.marketing.mobile.Variant;
					public static fromVariantList(param0: java.util.List<com.adobe.marketing.mobile.Variant>): com.adobe.marketing.mobile.Variant;
					public optStringList(param0: java.util.List<string>): java.util.List<string>;
					public getStringMap(): java.util.Map<string,string>;
					public optTypedMap(param0: java.util.Map, param1: com.adobe.marketing.mobile.VariantSerializer<any>): java.util.Map;
					public getVariantList(): java.util.List<com.adobe.marketing.mobile.Variant>;
					public optBoolean(param0: boolean): boolean;
					public static getVariantFromMap(param0: java.util.Map<string,com.adobe.marketing.mobile.Variant>, param1: string): com.adobe.marketing.mobile.Variant;
					public static fromBoolean(param0: boolean): com.adobe.marketing.mobile.Variant;
					public getString(): string;
					public getTypedObject(param0: com.adobe.marketing.mobile.VariantSerializer<any>): any;
					public static fromStringMap(param0: java.util.Map<string,string>): com.adobe.marketing.mobile.Variant;
					public optTypedObject(param0: any, param1: com.adobe.marketing.mobile.VariantSerializer<any>): any;
					public static fromVariantMap(param0: java.util.Map<string,com.adobe.marketing.mobile.Variant>): com.adobe.marketing.mobile.Variant;
					public static optVariantFromMap(param0: java.util.Map<string,com.adobe.marketing.mobile.Variant>, param1: string, param2: com.adobe.marketing.mobile.Variant): com.adobe.marketing.mobile.Variant;
					public optStringMap(param0: java.util.Map<string,string>): java.util.Map<string,string>;
					public static fromTypedList(param0: java.util.List, param1: com.adobe.marketing.mobile.VariantSerializer<any>): com.adobe.marketing.mobile.Variant;
					public hashCode(): number;
					public static fromTypedObject(param0: any, param1: com.adobe.marketing.mobile.VariantSerializer<any>): com.adobe.marketing.mobile.Variant;
					public static toVariantMap(param0: java.util.Map<any,any>): java.util.Map<string,com.adobe.marketing.mobile.Variant>;
					public static fromStringList(param0: java.util.List<string>): com.adobe.marketing.mobile.Variant;
					public optDouble(param0: number): number;
					public optTypedList(param0: java.util.List, param1: com.adobe.marketing.mobile.VariantSerializer<any>): java.util.List;
					public getLong(): number;
					public static fromString(param0: string): com.adobe.marketing.mobile.Variant;
					public getKind(): com.adobe.marketing.mobile.VariantKind;
					public getDouble(): number;
					public getTypedList(param0: com.adobe.marketing.mobile.VariantSerializer<any>): java.util.List;
					public static fromTypedMap(param0: java.util.Map, param1: com.adobe.marketing.mobile.VariantSerializer<any>): com.adobe.marketing.mobile.Variant;
					public getInteger(): number;
					public optString(param0: string): string;
					public static fromInteger(param0: number): com.adobe.marketing.mobile.Variant;
					public optLong(param0: number): number;
					public convertToString(): string;
					public equals(param0: any): boolean;
					public static fromLong(param0: number): com.adobe.marketing.mobile.Variant;
					public getStringList(): java.util.List<string>;
					public optVariantMap(param0: java.util.Map<string,com.adobe.marketing.mobile.Variant>): java.util.Map<string,com.adobe.marketing.mobile.Variant>;
					public static fromDouble(param0: number): com.adobe.marketing.mobile.Variant;
					public optVariantList(param0: java.util.List<com.adobe.marketing.mobile.Variant>): java.util.List<com.adobe.marketing.mobile.Variant>;
					public clone(): com.adobe.marketing.mobile.Variant;
					public getBoolean(): boolean;
					public getTypedMap(param0: com.adobe.marketing.mobile.VariantSerializer<any>): java.util.Map;
					public static fromNull(): com.adobe.marketing.mobile.Variant;
				}
				export module Variant {
					export class ObjectVariant extends com.adobe.marketing.mobile.Variant {
						public static class: java.lang.Class<com.adobe.marketing.mobile.Variant.ObjectVariant>;
						public clone(): com.adobe.marketing.mobile.Variant;
						public getKind(): com.adobe.marketing.mobile.VariantKind;
						public constructor(param0: any);
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class VariantException {
					public static class: java.lang.Class<com.adobe.marketing.mobile.VariantException>;
					public constructor(param0: string);
					public constructor();
					public constructor(param0: java.lang.Exception);
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class VariantKeyNotFoundException extends com.adobe.marketing.mobile.VariantException {
					public static class: java.lang.Class<com.adobe.marketing.mobile.VariantKeyNotFoundException>;
					public constructor(param0: string);
					public constructor();
					public constructor(param0: java.lang.Exception);
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class VariantKind {
					public static class: java.lang.Class<com.adobe.marketing.mobile.VariantKind>;
					public static NULL: com.adobe.marketing.mobile.VariantKind;
					public static STRING: com.adobe.marketing.mobile.VariantKind;
					public static INTEGER: com.adobe.marketing.mobile.VariantKind;
					public static LONG: com.adobe.marketing.mobile.VariantKind;
					public static DOUBLE: com.adobe.marketing.mobile.VariantKind;
					public static BOOLEAN: com.adobe.marketing.mobile.VariantKind;
					public static VECTOR: com.adobe.marketing.mobile.VariantKind;
					public static MAP: com.adobe.marketing.mobile.VariantKind;
					public static OBJECT: com.adobe.marketing.mobile.VariantKind;
					public static valueOf(param0: string): com.adobe.marketing.mobile.VariantKind;
					public isNumeric(): boolean;
					public static values(): native.Array<com.adobe.marketing.mobile.VariantKind>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class VariantKindException extends com.adobe.marketing.mobile.VariantException {
					public static class: java.lang.Class<com.adobe.marketing.mobile.VariantKindException>;
					public constructor(param0: string);
					public constructor();
					public constructor(param0: java.lang.Exception);
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class VariantRangeException extends com.adobe.marketing.mobile.VariantException {
					public static class: java.lang.Class<com.adobe.marketing.mobile.VariantRangeException>;
					public constructor(param0: string);
					public constructor();
					public constructor(param0: java.lang.Exception);
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class VariantSerializationFailedException extends com.adobe.marketing.mobile.VariantException {
					public static class: java.lang.Class<com.adobe.marketing.mobile.VariantSerializationFailedException>;
					public constructor(param0: string);
					public constructor();
					public constructor(param0: java.lang.Exception);
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				@NativeClass()
				export class VariantSerializer<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.adobe.marketing.mobile.VariantSerializer<any>>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.VariantSerializer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						serialize(param0: T): com.adobe.marketing.mobile.Variant;
						deserialize(param0: com.adobe.marketing.mobile.Variant): T;
					});
					public constructor();
					public deserialize(param0: com.adobe.marketing.mobile.Variant): T;
					public serialize(param0: T): com.adobe.marketing.mobile.Variant;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class VectorVariant extends com.adobe.marketing.mobile.Variant {
					public static class: java.lang.Class<com.adobe.marketing.mobile.VectorVariant>;
					public toString(): string;
					public clone(): com.adobe.marketing.mobile.VectorVariant;
					public getVariantList(): java.util.List<com.adobe.marketing.mobile.Variant>;
					public getKind(): com.adobe.marketing.mobile.VariantKind;
					public clone(): com.adobe.marketing.mobile.Variant;
					public static from(param0: java.util.List<com.adobe.marketing.mobile.Variant>): com.adobe.marketing.mobile.VectorVariant;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class VisitorID {
					public static class: java.lang.Class<com.adobe.marketing.mobile.VisitorID>;
					public static VARIANT_SERIALIZER: com.adobe.marketing.mobile.VariantSerializer<com.adobe.marketing.mobile.VisitorID>;
					public static LIST_VARIANT_SERIALIZER: com.adobe.marketing.mobile.VariantSerializer<java.util.List<com.adobe.marketing.mobile.VisitorID>>;
					public equals(param0: any): boolean;
					public getId(): string;
					public getAuthenticationState(): com.adobe.marketing.mobile.VisitorID.AuthenticationState;
					public getIdOrigin(): string;
					public constructor(param0: string, param1: string, param2: string, param3: com.adobe.marketing.mobile.VisitorID.AuthenticationState);
					public getIdType(): string;
					public hashCode(): number;
				}
				export module VisitorID {
					export class AuthenticationState {
						public static class: java.lang.Class<com.adobe.marketing.mobile.VisitorID.AuthenticationState>;
						public static UNKNOWN: com.adobe.marketing.mobile.VisitorID.AuthenticationState;
						public static AUTHENTICATED: com.adobe.marketing.mobile.VisitorID.AuthenticationState;
						public static LOGGED_OUT: com.adobe.marketing.mobile.VisitorID.AuthenticationState;
						public static values(): native.Array<com.adobe.marketing.mobile.VisitorID.AuthenticationState>;
						public static valueOf(param0: string): com.adobe.marketing.mobile.VisitorID.AuthenticationState;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class VisitorIDVariantSerializer extends com.adobe.marketing.mobile.VariantSerializer<com.adobe.marketing.mobile.VisitorID> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.VisitorIDVariantSerializer>;
					public deserialize(param0: com.adobe.marketing.mobile.Variant): any;
					public serialize(param0: any): com.adobe.marketing.mobile.Variant;
					public deserialize(param0: com.adobe.marketing.mobile.Variant): com.adobe.marketing.mobile.VisitorID;
					public serialize(param0: com.adobe.marketing.mobile.VisitorID): com.adobe.marketing.mobile.Variant;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class WrapperType {
					public static class: java.lang.Class<com.adobe.marketing.mobile.WrapperType>;
					public static NONE: com.adobe.marketing.mobile.WrapperType;
					public static REACT_NATIVE: com.adobe.marketing.mobile.WrapperType;
					public static FLUTTER: com.adobe.marketing.mobile.WrapperType;
					public static CORDOVA: com.adobe.marketing.mobile.WrapperType;
					public static UNITY: com.adobe.marketing.mobile.WrapperType;
					public static XAMARIN: com.adobe.marketing.mobile.WrapperType;
					public getWrapperTag(): string;
					public static valueOf(param0: string): com.adobe.marketing.mobile.WrapperType;
					public static values(): native.Array<com.adobe.marketing.mobile.WrapperType>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class ZipBundleHandler extends com.adobe.marketing.mobile.RulesRemoteDownloader.RulesBundleNetworkProtocolHandler {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ZipBundleHandler>;
					public processDownloadedBundle(param0: java.io.File, param1: string, param2: number): boolean;
					public getMetadata(param0: java.io.File): com.adobe.marketing.mobile.RulesRemoteDownloader.Metadata;
				}
				export module ZipBundleHandler {
					export class ZipMetadata extends com.adobe.marketing.mobile.RulesRemoteDownloader.Metadata {
						public static class: java.lang.Class<com.adobe.marketing.mobile.ZipBundleHandler.ZipMetadata>;
						public getLastModifiedDate(): number;
						public getSize(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

//Generics information:
//com.adobe.marketing.mobile.AbstractHitSchema:1
//com.adobe.marketing.mobile.AdobeCallback:1
//com.adobe.marketing.mobile.AdobeCallbackWithError:1
//com.adobe.marketing.mobile.ExtensionErrorCallback:1
//com.adobe.marketing.mobile.HitQueue:2
//com.adobe.marketing.mobile.HitQueue.IHitProcessor:1
//com.adobe.marketing.mobile.ModuleEventDispatcher:1
//com.adobe.marketing.mobile.ModuleEventListener:1
//com.adobe.marketing.mobile.ModuleEventProcessor:1
//com.adobe.marketing.mobile.RangedResolver:1
//com.adobe.marketing.mobile.TypedListVariantSerializer:1
//com.adobe.marketing.mobile.TypedMapVariantSerializer:1
//com.adobe.marketing.mobile.VariantSerializer:1

