
declare class ACPCore extends NSObject {

	static alloc(): ACPCore; // inherited from NSObject

	static collectLaunchInfo(userInfo: NSDictionary<any, any>): void;

	static collectMessageInfo(messageInfo: NSDictionary<any, any>): void;

	static collectPii(data: NSDictionary<string, string>): void;

	static configureWithAppId(appid: string): void;

	static configureWithFileInPath(filepath: string): void;

	static dispatchEventError(event: ACPExtensionEvent): boolean;

	static dispatchEventWithResponseCallbackResponseCallbackError(requestEvent: ACPExtensionEvent, responseCallback: (p1: ACPExtensionEvent) => void): boolean;

	static dispatchResponseEventRequestEventError(responseEvent: ACPExtensionEvent, requestEvent: ACPExtensionEvent): boolean;

	static downloadRules(): void;

	static extensionVersion(): string;

	static getPrivacyStatus(callback: (p1: ACPMobilePrivacyStatus) => void): void;

	static getPrivacyStatusWithCompletionHandler(completionHandler: (p1: ACPMobilePrivacyStatus, p2: NSError) => void): void;

	static getSdkIdentities(callback: (p1: string) => void): void;

	static getSdkIdentitiesWithCompletionHandler(completionHandler: (p1: string, p2: NSError) => void): void;

	static lifecyclePause(): void;

	static lifecycleStart(additionalContextData: NSDictionary<string, string>): void;

	static logLevel(): ACPMobileLogLevel;

	static logTagMessage(logLevel: ACPMobileLogLevel, tag: string, message: string): void;

	static new(): ACPCore; // inherited from NSObject

	static registerExtensionError(extensionClass: typeof NSObject): boolean;

	static registerURLHandler(callback: (p1: string) => boolean): void;

	static setAdvertisingIdentifier(adId: string): void;

	static setAppGroup(appGroup: string): void;

	static setLogLevel(logLevel: ACPMobileLogLevel): void;

	static setPrivacyStatus(status: ACPMobilePrivacyStatus): void;

	static setPushIdentifier(deviceToken: NSData): void;

	static setWrapperType(wrapperType: ACPMobileWrapperType): void;

	static start(callback: () => void): void;

	static trackActionData(action: string, data: NSDictionary<string, string>): void;

	static trackStateData(state: string, data: NSDictionary<string, string>): void;

	static updateConfiguration(config: NSDictionary<any, any>): void;
}

declare var ACPCoreVersionNumber: number;

declare var ACPCoreVersionString: interop.Reference<number>;

declare const enum ACPError {

	Unexpected = 0,

	CallbackTimeout = 1,

	CallbackNil = 2,

	ExtensionNotInitialized = 11
}

declare var ACPErrorDomain: string;

declare class ACPExtension extends NSObject {

	static alloc(): ACPExtension; // inherited from NSObject

	static new(): ACPExtension; // inherited from NSObject

	readonly api: ACPExtensionApi;

	name(): string;

	onUnregister(): void;

	unexpectedError(error: NSError): void;

	version(): string;
}

declare class ACPExtensionApi extends NSObject {

	static alloc(): ACPExtensionApi; // inherited from NSObject

	static new(): ACPExtensionApi; // inherited from NSObject

	clearSharedEventStates(): boolean;

	getSharedEventStateEventError(name: string, event: ACPExtensionEvent): NSDictionary<any, any>;

	registerListenerEventTypeEventSourceError(listenerClass: typeof NSObject, eventType: string, eventSource: string): boolean;

	registerWildcardListenerError(listenerClass: typeof NSObject): boolean;

	setSharedEventStateEventError(state: NSDictionary<any, any>, event: ACPExtensionEvent): boolean;

	unregisterExtension(): void;
}

declare const enum ACPExtensionError {

	DBUnexpectedExtensionError = 0,

	DBBadExtensionNameExtensionError = 1,

	DBDuplicateExtensionNameExtensionError = 2,

	DBEventTypeNotSupportedExtensionError = 3,

	DBEventSourceNotSupportedExtensionError = 4,

	DBEventDataNotSupportedExtensionError = 5,

	DBBadExtensionClassExtensionError = 6,

	DBEventNullError = 7
}

declare var ACPExtensionErrorDomain: string;

declare class ACPExtensionEvent extends NSObject {

	static alloc(): ACPExtensionEvent; // inherited from NSObject

	static extensionEventWithNameTypeSourceDataError(name: string, type: string, source: string, data: NSDictionary<any, any>): ACPExtensionEvent;

	static new(): ACPExtensionEvent; // inherited from NSObject

	readonly eventData: NSDictionary<any, any>;

	readonly eventName: string;

	readonly eventNumber: number;

	readonly eventSource: string;

	readonly eventTimestamp: number;

	readonly eventType: string;

	readonly eventUniqueIdentifier: string;
}

declare class ACPExtensionListener extends NSObject {

	static alloc(): ACPExtensionListener; // inherited from NSObject

	static new(): ACPExtensionListener; // inherited from NSObject

	readonly extension: ACPExtension;

	hear(event: ACPExtensionEvent): void;
}

declare class ACPHttpConnection extends NSObject {

	static alloc(): ACPHttpConnection; // inherited from NSObject

	static new(): ACPHttpConnection; // inherited from NSObject

	readonly data: NSData;

	readonly response: NSHTTPURLResponse;

	constructor(o: { response: NSHTTPURLResponse; data: NSData; });

	initWithResponseData(response: NSHTTPURLResponse, data: NSData): this;
}

interface ACPHttpConnectionPerformer extends NSObjectProtocol {

	requestUrlHttpCommandConnectPayloadRequestPropertyDictConnectTimeoutReadTimeoutCompletion(url: NSURL, command: string, payload: string, requestProperty: NSDictionary<string, string>, connectTimeout: number, readTimeout: number, completion: (p1: ACPHttpConnection) => void): void;

	shouldOverrideMethod(url: NSURL, method: string): boolean;
}
declare var ACPHttpConnectionPerformer: {

	prototype: ACPHttpConnectionPerformer;
};

declare class ACPIdentity extends NSObject {

	static alloc(): ACPIdentity; // inherited from NSObject

	static appendToUrlWithCallback(baseUrl: NSURL, callback: (p1: NSURL) => void): void;

	static appendToUrlWithCompletionHandler(baseUrl: NSURL, completionHandler: (p1: NSURL, p2: NSError) => void): void;

	static extensionVersion(): string;

	static getExperienceCloudId(callback: (p1: string) => void): void;

	static getExperienceCloudIdWithCompletionHandler(completionHandler: (p1: string, p2: NSError) => void): void;

	static getIdentifiers(callback: (p1: NSArray<ACPMobileVisitorId>) => void): void;

	static getIdentifiersWithCompletionHandler(completionHandler: (p1: NSArray<ACPMobileVisitorId>, p2: NSError) => void): void;

	static getUrlVariables(callback: (p1: string) => void): void;

	static getUrlVariablesWithCompletionHandler(completionHandler: (p1: string, p2: NSError) => void): void;

	static new(): ACPIdentity; // inherited from NSObject

	static registerExtension(): void;

	static syncIdentifierIdentifierAuthentication(identifierType: string, identifier: string, authenticationState: ACPMobileVisitorAuthenticationState): void;

	static syncIdentifiers(identifiers: NSDictionary<any, any>): void;

	static syncIdentifiersAuthentication(identifiers: NSDictionary<any, any>, authenticationState: ACPMobileVisitorAuthenticationState): void;
}

declare class ACPLifecycle extends NSObject {

	static alloc(): ACPLifecycle; // inherited from NSObject

	static extensionVersion(): string;

	static new(): ACPLifecycle; // inherited from NSObject

	static registerExtension(): void;
}

declare const enum ACPMobileLogLevel {

	Error = 0,

	Warning = 1,

	Debug = 2,

	Verbose = 3
}

declare const enum ACPMobilePrivacyStatus {

	OptIn = 0,

	OptOut = 1,

	Unknown = 2
}

declare const enum ACPMobileVisitorAuthenticationState {

	Unknown = 0,

	Authenticated = 1,

	LoggedOut = 2
}

declare class ACPMobileVisitorId extends NSObject {

	static alloc(): ACPMobileVisitorId; // inherited from NSObject

	static new(): ACPMobileVisitorId; // inherited from NSObject

	authenticationState: ACPMobileVisitorAuthenticationState;

	idOrigin: string;

	idType: string;

	identifier: string;

	constructor(o: { origin: string; type: string; id: string; authentication: ACPMobileVisitorAuthenticationState; });

	initWithOriginTypeIdAuthentication(idOrigin: string, idType: string, identifier: string, authenticationState: ACPMobileVisitorAuthenticationState): this;
}

declare const enum ACPMobileWrapperType {

	None = 0,

	ReactNative = 1,

	Flutter = 2,

	Cordova = 3,

	Unity = 4,

	Xamarin = 5
}

declare class ACPNetworkServiceOverrider extends NSObject {

	static alloc(): ACPNetworkServiceOverrider; // inherited from NSObject

	static new(): ACPNetworkServiceOverrider; // inherited from NSObject

	static setHttpConnectionPerformer(performer: ACPHttpConnectionPerformer): void;
}

declare class ACPSignal extends NSObject {

	static alloc(): ACPSignal; // inherited from NSObject

	static extensionVersion(): string;

	static new(): ACPSignal; // inherited from NSObject

	static registerExtension(): void;
}
