
declare class ACPTarget extends NSObject {

	static alloc(): ACPTarget; // inherited from NSObject

	static clearPrefetchCache(): void;

	static extensionVersion(): string;

	static getThirdPartyId(callback: (p1: string) => void): void;

	static getTntId(callback: (p1: string) => void): void;

	static loadRequestsWithProfileParameters(requests: NSArray<ACPTargetRequestObject> | ACPTargetRequestObject[], profileParameters: NSDictionary<string, string>): void;

	static locationClickedWithNameMboxParametersProductParametersOrderParametersProfileParameters(name: string, mboxParameters: NSDictionary<string, string>, productParameters: NSDictionary<string, string>, orderParameters: NSDictionary<any, any>, profileParameters: NSDictionary<string, string>): void;

	static locationClickedWithNameTargetParameters(name: string, parameters: ACPTargetParameters): void;

	static locationsDisplayedWithTargetParameters(mboxNames: NSArray<string> | string[], parameters: ACPTargetParameters): void;

	static new(): ACPTarget; // inherited from NSObject

	static prefetchContentWithParametersCallback(prefetchObjectArray: NSArray<ACPTargetPrefetchObject> | ACPTargetPrefetchObject[], parameters: ACPTargetParameters, callback: (p1: NSError) => void): void;

	static prefetchContentWithProfileParametersCallback(prefetchObjectArray: NSArray<ACPTargetPrefetchObject> | ACPTargetPrefetchObject[], profileParameters: NSDictionary<string, string>, callback: (p1: boolean) => void): void;

	static registerExtension(): void;

	static resetExperience(): void;

	static retrieveLocationContentWithParameters(requests: NSArray<ACPTargetRequestObject> | ACPTargetRequestObject[], parameters: ACPTargetParameters): void;

	static setPreviewRestartDeeplink(deeplink: NSURL): void;

	static setThirdPartyId(thirdPartyId: string): void;
}

declare class ACPTargetOrder extends NSObject implements NSCoding, NSCopying {

	static alloc(): ACPTargetOrder; // inherited from NSObject

	static new(): ACPTargetOrder; // inherited from NSObject

	static targetOrderWithIdTotalPurchasedProductIds(orderId: string, total: number, purchasedProductIds: NSArray<string> | string[]): ACPTargetOrder;

	orderId: string;

	purchasedProductIds: NSArray<string>;

	total: number;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class ACPTargetParameters extends NSObject implements NSCoding, NSCopying {

	static alloc(): ACPTargetParameters; // inherited from NSObject

	static new(): ACPTargetParameters; // inherited from NSObject

	static targetParametersWithParametersProfileParametersProductOrder(parameters: NSDictionary<any, any>, profileParameters: NSDictionary<any, any>, product: ACPTargetProduct, order: ACPTargetOrder): ACPTargetParameters;

	order: ACPTargetOrder;

	parameters: NSDictionary<string, string>;

	product: ACPTargetProduct;

	profileParameters: NSDictionary<string, string>;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class ACPTargetPrefetchObject extends NSObject {

	static alloc(): ACPTargetPrefetchObject; // inherited from NSObject

	static new(): ACPTargetPrefetchObject; // inherited from NSObject

	static prefetchObjectWithNameMboxParameters(name: string, mboxParameters: NSDictionary<any, any>): ACPTargetPrefetchObject;

	static targetPrefetchObjectWithNameTargetParameters(name: string, targetParameters: ACPTargetParameters): ACPTargetPrefetchObject;

	mboxParameters: NSDictionary<string, string>;

	name: string;

	orderParameters: NSDictionary<any, any>;

	productParameters: NSDictionary<string, string>;

	targetParameters: ACPTargetParameters;

	setOrderParametersOrderTotalPurchasedProductIds(orderId: string, orderTotal: number, purchasedProductIds: NSArray<string> | string[]): void;

	setProductParametersCategoryId(productId: string, categoryId: string): void;
}

declare class ACPTargetProduct extends NSObject implements NSCoding, NSCopying {

	static alloc(): ACPTargetProduct; // inherited from NSObject

	static new(): ACPTargetProduct; // inherited from NSObject

	static targetProductWithIdCategoryId(productId: string, categoryId: string): ACPTargetProduct;

	categoryId: string;

	productId: string;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class ACPTargetRequestObject extends ACPTargetPrefetchObject {

	static alloc(): ACPTargetRequestObject; // inherited from NSObject

	static new(): ACPTargetRequestObject; // inherited from NSObject

	static prefetchObjectWithNameMboxParameters(name: string, mboxParameters: NSDictionary<any, any>): ACPTargetRequestObject; // inherited from ACPTargetPrefetchObject

	static requestObjectWithNameDefaultContentMboxParametersCallback(name: string, defaultContent: string, mboxParameters: NSDictionary<string, string>, callback: (p1: string) => void): ACPTargetRequestObject;

	static targetPrefetchObjectWithNameTargetParameters(name: string, targetParameters: ACPTargetParameters): ACPTargetRequestObject; // inherited from ACPTargetPrefetchObject

	static targetRequestObjectWithNameTargetParametersDefaultContentCallback(name: string, targetParameters: ACPTargetParameters, defaultContent: string, callback: (p1: string) => void): ACPTargetRequestObject;

	callback: (p1: string) => void;

	defaultContent: string;
}

declare var ACPTargetVersionNumber: number;

declare var ACPTargetVersionString: interop.Reference<number>;
