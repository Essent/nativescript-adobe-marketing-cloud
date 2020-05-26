
declare class ACPGriffon extends NSObject {

	static alloc(): ACPGriffon; // inherited from NSObject

	static attemptReconnect(): void;

	static endSession(): void;

	static extensionVersion(): string;

	static logLocalUILevelMessage(level: ACPGriffonUILogColor, message: string): void;

	static new(): ACPGriffon; // inherited from NSObject

	static registerExtension(): boolean;

	static registerListenerForVendorBlock(vendor: string, block: (p1: ACPGriffonEvent) => void): void;

	static sendBlobContentTypeCompletion(blob: NSData, contentType: string, block: (p1: string, p2: NSError) => void): void;

	static sendEvent(event: ACPGriffonEvent): void;

	static startSession(url: NSURL): void;
}

declare class ACPGriffonEvent extends NSObject {

	static alloc(): ACPGriffonEvent; // inherited from NSObject

	static new(): ACPGriffonEvent; // inherited from NSObject

	clientID: string;

	readonly eventID: string;

	readonly eventNumber: number;

	readonly pairID: string;

	readonly payload: NSDictionary<any, any>;

	readonly timestamp: number;

	readonly type: string;

	readonly vendor: string;

	constructor(o: { JSONData: NSData; });

	constructor(o: { vendor: string; type: string; pairID: string; payload: NSDictionary<any, any>; timestamp: number; });

	constructor(o: { vendor: string; type: string; payload: NSDictionary<any, any>; });

	initWithJSONData(json: NSData): this;

	initWithVendorTypePairIDPayloadTimestamp(vendor: string, type: string, pairID: string, payload: NSDictionary<any, any>, timestamp: number): this;

	initWithVendorTypePayload(vendor: string, type: string, payload: NSDictionary<any, any>): this;

	jsonRepresentation(): NSData;
}

interface ACPGriffonEventListener {

	hear(remoteEvent: ACPGriffonEvent): void;
}
declare var ACPGriffonEventListener: {

	prototype: ACPGriffonEventListener;
};

declare const enum ACPGriffonUILogColor {

	VisibilityLow = 0,

	VisibilityNormal = 1,

	VisibilityHigh = 2,

	VisibilityCritical = 3
}

declare var ACPGriffonVersionNumber: number;

declare var ACPGriffonVersionString: interop.Reference<number>;
