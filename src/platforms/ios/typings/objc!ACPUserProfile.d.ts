
declare class ACPUserProfile extends NSObject {

	static alloc(): ACPUserProfile; // inherited from NSObject

	static extensionVersion(): string;

	static getUserAttributesWithCompletionHandler(attributNames: NSArray<string> | string[], completionHandler: (p1: NSDictionary<any, any>, p2: NSError) => void): void;

	static new(): ACPUserProfile; // inherited from NSObject

	static registerExtension(): void;

	static removeUserAttribute(attributeName: string): void;

	static removeUserAttributes(attributeNames: NSArray<string> | string[]): void;

	static updateUserAttributeWithValue(attributeName: string, attributeValue: string): void;

	static updateUserAttributes(attributeMap: NSDictionary<any, any>): void;
}

declare var ACPUserProfileVersionNumber: number;

declare var ACPUserProfileVersionString: interop.Reference<number>;
