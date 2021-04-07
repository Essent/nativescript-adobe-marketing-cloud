
@NativeClass()
declare class ACPAnalytics extends NSObject {

	static alloc(): ACPAnalytics; // inherited from NSObject

	static clearQueue(): void;

	static extensionVersion(): string;

	static getQueueSize(callback: (p1: number) => void): void;

	static getTrackingIdentifier(callback: (p1: string) => void): void;

	static getVisitorIdentifier(callback: (p1: string) => void): void;

	static new(): ACPAnalytics; // inherited from NSObject

	static registerExtension(): void;

	static sendQueuedHits(): void;

	static setVisitorIdentifier(visitorIdentifier: string): void;
}

declare var ACPAnalyticsVersionNumber: number;

declare var ACPAnalyticsVersionString: interop.Reference<number>;
