
declare class AEPAssurance extends NSObject {

	static alloc(): AEPAssurance; // inherited from NSObject

	static extensionVersion(): string;

	static new(): AEPAssurance; // inherited from NSObject

	static registerExtension(): boolean;

	static startSession(url: NSURL): void;
}

declare var AEPAssuranceVersionNumber: number;

declare var AEPAssuranceVersionString: interop.Reference<number>;
