
declare var ADBConfigKeyCallbackDeepLink: string;

declare class ADBMediaSettings extends NSObject {

	static alloc(): ADBMediaSettings; // inherited from NSObject

	static new(): ADBMediaSettings; // inherited from NSObject

	CPM: string;

	channel: string;

	completeCloseOffsetThreshold: number;

	isMediaAd: boolean;

	length: number;

	milestones: string;

	name: string;

	offsetMilestones: string;

	parentName: string;

	parentPod: string;

	parentPodPosition: number;

	playerID: string;

	playerName: string;

	segmentByMilestones: boolean;

	segmentByOffsetMilestones: boolean;

	trackSeconds: number;
}

declare class ADBMediaState extends NSObject {

	static alloc(): ADBMediaState; // inherited from NSObject

	static new(): ADBMediaState; // inherited from NSObject

	ad: boolean;

	clicked: boolean;

	complete: boolean;

	eventFirstTime: boolean;

	eventType: number;

	length: number;

	mediaEvent: string;

	milestone: number;

	name: string;

	offset: number;

	offsetMilestone: number;

	openTime: Date;

	percent: number;

	playerName: string;

	segment: string;

	segmentLength: number;

	segmentNum: number;

	timePlayed: number;

	timePlayedSinceTrack: number;

	timestamp: number;
}

declare class ADBMobile extends NSObject {

	static acquisitionCampaignStartForAppData(appId: string, data: NSDictionary<any, any>): void;

	static alloc(): ADBMobile; // inherited from NSObject

	static audienceDpid(): string;

	static audienceDpuuid(): string;

	static audienceReset(): void;

	static audienceSetDpidDpuuid(dpid: string, dpuuid: string): void;

	static audienceSignalWithDataCallback(data: NSDictionary<any, any>, callback: (p1: NSDictionary<any, any>) => void): void;

	static audienceVisitorProfile(): NSDictionary<any, any>;

	static collectLifecycleData(): void;

	static collectLifecycleDataWithAdditionalData(data: NSDictionary<any, any>): void;

	static collectPII(data: NSDictionary<string, string>): void;

	static debugLogging(): boolean;

	static getAllIdentifiersAsync(callback: (p1: string) => void): void;

	static initializeWatch(): void;

	static keepLifecycleSessionAlive(): void;

	static lifetimeValue(): NSDecimalNumber;

	static locationClickedWithNameMboxParametersProductParametersOrderParametersProfileParameters(name: string, mboxParameters: NSDictionary<any, any>, productParameters: NSDictionary<any, any>, orderParameters: NSDictionary<any, any>, profileParameters: NSDictionary<any, any>): void;

	static mediaAdCreateSettingsWithNameLengthPlayerNameParentNameParentPodParentPodPositionCPM(name: string, length: number, playerName: string, parentName: string, parentPod: string, parentPodPosition: number, CPM: string): ADBMediaSettings;

	static mediaClickOffset(name: string, offset: number): void;

	static mediaClose(name: string): void;

	static mediaCompleteOffset(name: string, offset: number): void;

	static mediaCreateSettingsWithNameLengthPlayerNamePlayerID(name: string, length: number, playerName: string, playerID: string): ADBMediaSettings;

	static mediaOpenWithSettingsCallback(settings: ADBMediaSettings, callback: (p1: ADBMediaState) => void): void;

	static mediaPlayOffset(name: string, offset: number): void;

	static mediaStopOffset(name: string, offset: number): void;

	static mediaTrackData(name: string, data: NSDictionary<any, any>): void;

	static new(): ADBMobile; // inherited from NSObject

	static overrideConfigPath(path: string): void;

	static privacyStatus(): ADBMobilePrivacyStatus;

	static registerAdobeDataCallback(callback: (p1: ADBMobileDataEvent, p2: NSDictionary<any, any>) => void): void;

	static registerURLSessionConfigurationCallback(callback: (p1: NSURLSessionConfiguration) => void): void;

	static setAdvertisingIdentifier(identifier: string): void;

	static setAppExtensionType(type: ADBMobileAppExtensionType): void;

	static setAppGroup(appGroup: string): void;

	static setDebugLogging(debug: boolean): void;

	static setPrivacyStatus(status: ADBMobilePrivacyStatus): void;

	static setPushIdentifier(deviceToken: NSData): void;

	static setUserIdentifier(identifier: string): void;

	static syncSettings(settings: NSDictionary<any, any>): boolean;

	static targetClearCookies(): void;

	static targetCreateOrderConfirmRequestWithNameOrderIdOrderTotalProductPurchasedIdParameters(name: string, orderId: string, orderTotal: string, productPurchasedId: string, parameters: NSDictionary<any, any>): ADBTargetLocationRequest;

	static targetCreateRequestWithNameDefaultContentParameters(name: string, defaultContent: string, parameters: NSDictionary<any, any>): ADBTargetLocationRequest;

	static targetLoadRequestCallback(request: ADBTargetLocationRequest, callback: (p1: string) => void): void;

	static targetLoadRequestWithNameDefaultContentProfileParametersOrderParametersMboxParametersCallback(name: string, defaultContent: string, profileParameters: NSDictionary<any, any>, orderParameters: NSDictionary<any, any>, mboxParameters: NSDictionary<any, any>, callback: (p1: string) => void): void;

	static targetLoadRequestWithNameDefaultContentProfileParametersOrderParametersMboxParametersRequestLocationParametersCallback(name: string, defaultContent: string, profileParameters: NSDictionary<any, any>, orderParameters: NSDictionary<any, any>, mboxParameters: NSDictionary<any, any>, requestLocationParameters: NSDictionary<any, any>, callback: (p1: string) => void): void;

	static targetLoadRequestsWithProfileParameters(requests: NSArray<any> | any[], profileParameters: NSDictionary<any, any>): void;

	static targetPcID(): string;

	static targetPrefetchClearCache(): void;

	static targetPrefetchContentWithProfileParametersCallback(targetPrefetchObjectArray: NSArray<any> | any[], profileParameters: NSDictionary<any, any>, callback: (p1: boolean) => void): void;

	static targetPrefetchObjectWithNameMboxParameters(name: string, mboxParameters: NSDictionary<any, any>): ADBTargetPrefetchObject;

	static targetPreviewRestartDeepLink(callbackURL: string): void;

	static targetRequestObjectWithNameDefaultContentMboxParametersCallback(name: string, defaultContent: string, mboxParameters: NSDictionary<any, any>, callback: (p1: string) => void): ADBTargetRequestObject;

	static targetSessionID(): string;

	static targetSetThirdPartyID(thirdPartyID: string): void;

	static targetThirdPartyID(): string;

	static trackActionData(action: string, data: NSDictionary<any, any>): void;

	static trackActionFromBackgroundData(action: string, data: NSDictionary<any, any>): void;

	static trackAdobeDeepLink(url: NSURL): void;

	static trackBeaconData(beacon: CLBeacon, data: NSDictionary<any, any>): void;

	static trackLifetimeValueIncreaseData(amount: NSDecimalNumber, data: NSDictionary<any, any>): void;

	static trackLocalNotificationClickThrough(userInfo: NSDictionary<any, any>): void;

	static trackLocationData(location: CLLocation, data: NSDictionary<any, any>): void;

	static trackPushMessageClickThrough(userInfo: NSDictionary<any, any>): void;

	static trackStateData(state: string, data: NSDictionary<any, any>): void;

	static trackTimedActionEndLogic(action: string, block: (p1: number, p2: number, p3: NSMutableDictionary<any, any>) => boolean): void;

	static trackTimedActionStartData(action: string, data: NSDictionary<any, any>): void;

	static trackTimedActionUpdateData(action: string, data: NSDictionary<any, any>): void;

	static trackingClearCurrentBeacon(): void;

	static trackingClearQueue(): void;

	static trackingGetQueueSize(): number;

	static trackingIdentifier(): string;

	static trackingSendQueuedHits(): void;

	static trackingTimedActionExists(action: string): boolean;

	static userIdentifier(): string;

	static visitorAppendToURL(url: NSURL): NSURL;

	static visitorGetIDs(): NSArray<any>;

	static visitorGetUrlVariablesAsync(callback: (p1: string) => void): void;

	static visitorMarketingCloudID(): string;

	static visitorSyncIdentifierWithTypeIdentifierAuthenticationState(identifierType: string, identifier: string, authState: ADBMobileVisitorAuthenticationState): void;

	static visitorSyncIdentifiers(identifiers: NSDictionary<any, any>): void;

	static visitorSyncIdentifiersAuthenticationState(identifiers: NSDictionary<any, any>, authState: ADBMobileVisitorAuthenticationState): void;
}

declare const enum ADBMobileAppExtensionType {

	Regular = 0,

	StandAlone = 1
}

declare const enum ADBMobileDataEvent {

	Lifecycle = 0,

	AcquisitionInstall = 1,

	AcquisitionLaunch = 2,

	DeepLink = 3
}

declare const enum ADBMobilePrivacyStatus {

	OptIn = 1,

	OptOut = 2,

	Unknown = 3
}

declare const enum ADBMobileVisitorAuthenticationState {

	Unknown = 0,

	Authenticated = 1,

	LoggedOut = 2
}

declare class ADBTargetLocationRequest extends NSObject {

	static alloc(): ADBTargetLocationRequest; // inherited from NSObject

	static new(): ADBTargetLocationRequest; // inherited from NSObject

	defaultContent: string;

	name: string;

	parameters: NSMutableDictionary<any, any>;
}

declare var ADBTargetParameterCategoryId: string;

declare var ADBTargetParameterMbox3rdPartyId: string;

declare var ADBTargetParameterMboxHost: string;

declare var ADBTargetParameterMboxPageValue: string;

declare var ADBTargetParameterMboxPc: string;

declare var ADBTargetParameterMboxSessionId: string;

declare var ADBTargetParameterOrderId: string;

declare var ADBTargetParameterOrderTotal: string;

declare var ADBTargetParameterProductPurchasedId: string;

declare class ADBTargetPrefetchObject extends NSObject {

	static alloc(): ADBTargetPrefetchObject; // inherited from NSObject

	static new(): ADBTargetPrefetchObject; // inherited from NSObject

	mboxParameters: NSDictionary<any, any>;

	name: string;

	orderParameters: NSDictionary<any, any>;

	productParameters: NSDictionary<any, any>;
}

declare class ADBTargetRequestObject extends ADBTargetPrefetchObject {

	static alloc(): ADBTargetRequestObject; // inherited from NSObject

	static new(): ADBTargetRequestObject; // inherited from NSObject

	callback: (p1: string) => void;

	defaultContent: string;
}

declare class ADBVisitorID extends NSObject {

	static alloc(): ADBVisitorID; // inherited from NSObject

	static new(): ADBVisitorID; // inherited from NSObject

	authenticationState(): ADBMobileVisitorAuthenticationState;

	idType(): string;

	identifier(): string;
}
