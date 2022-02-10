/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class Target {
					public static class: java.lang.Class<com.adobe.marketing.mobile.Target>;
					public static extensionVersion(): string;
					/** @deprecated */
					public static loadRequests(param0: java.util.List<com.adobe.marketing.mobile.TargetRequest>, param1: java.util.Map<string,string>): void;
					public static clearPrefetchCache(): void;
					public static setPreviewRestartDeepLink(param0: globalAndroid.net.Uri): void;
					/** @deprecated */
					public static prefetchContent(param0: java.util.List<com.adobe.marketing.mobile.TargetPrefetch>, param1: java.util.Map<string,string>, param2: com.adobe.marketing.mobile.AdobeCallback<java.lang.Boolean>): void;
					public static prefetchContent(param0: java.util.List<com.adobe.marketing.mobile.TargetPrefetch>, param1: com.adobe.marketing.mobile.TargetParameters, param2: com.adobe.marketing.mobile.AdobeCallback<string>): void;
					/** @deprecated */
					public static locationClicked(param0: string, param1: java.util.Map<string,string>, param2: java.util.Map<string,string>, param3: java.util.Map<string,any>, param4: java.util.Map<string,string>): void;
					public static getTntId(param0: com.adobe.marketing.mobile.AdobeCallback<string>): void;
					public static locationsDisplayed(param0: java.util.List<string>, param1: com.adobe.marketing.mobile.TargetParameters): void;
					public static locationClicked(param0: string, param1: com.adobe.marketing.mobile.TargetParameters): void;
					public static getThirdPartyId(param0: com.adobe.marketing.mobile.AdobeCallback<string>): void;
					public static registerExtension(): void;
					public static retrieveLocationContent(param0: java.util.List<com.adobe.marketing.mobile.TargetRequest>, param1: com.adobe.marketing.mobile.TargetParameters): void;
					public static setThirdPartyId(param0: string): void;
					public static resetExperience(): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class TargetConstants {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TargetConstants>;
				}
				export module TargetConstants {
					export class ContextDataKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.TargetConstants.ContextDataKeys>;
					}
					export class DataStoreKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.TargetConstants.DataStoreKeys>;
					}
					export class EventDataKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.TargetConstants.EventDataKeys>;
					}
					export module EventDataKeys {
						export class Analytics {
							public static class: java.lang.Class<com.adobe.marketing.mobile.TargetConstants.EventDataKeys.Analytics>;
						}
						export class Configuration {
							public static class: java.lang.Class<com.adobe.marketing.mobile.TargetConstants.EventDataKeys.Configuration>;
						}
						export class Identity {
							public static class: java.lang.Class<com.adobe.marketing.mobile.TargetConstants.EventDataKeys.Identity>;
						}
						export class Lifecycle {
							public static class: java.lang.Class<com.adobe.marketing.mobile.TargetConstants.EventDataKeys.Lifecycle>;
						}
						export class Target {
							public static class: java.lang.Class<com.adobe.marketing.mobile.TargetConstants.EventDataKeys.Target>;
						}
					}
					export class Events {
						public static class: java.lang.Class<com.adobe.marketing.mobile.TargetConstants.Events>;
					}
					export class OrderKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.TargetConstants.OrderKeys>;
					}
					export class ProductKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.TargetConstants.ProductKeys>;
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
				export class TargetCore {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TargetCore>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class TargetErrors {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TargetErrors>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class TargetEventDispatcher extends com.adobe.marketing.mobile.ModuleEventDispatcher<com.adobe.marketing.mobile.TargetExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TargetEventDispatcher>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class TargetExtension {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TargetExtension>;
					public tntId: string;
					public thirdPartyId: string;
					public edgeHost: string;
					public clientCode: string;
					public prefetchedMbox: java.util.Map<string,com.adobe.marketing.mobile.JsonUtilityService.JSONObject>;
					public loadedMbox: java.util.Map<string,com.adobe.marketing.mobile.JsonUtilityService.JSONObject>;
					public notifications: java.util.List<com.adobe.marketing.mobile.JsonUtilityService.JSONObject>;
					public lastKnownConfigurationState: com.adobe.marketing.mobile.EventData;
					public sessionId: string;
					public sessionTimestampInSeconds: number;
					public getTargetRequestUrl(param0: string): string;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class TargetJson {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TargetJson>;
				}
				export module TargetJson {
					export class AAMParameters {
						public static class: java.lang.Class<com.adobe.marketing.mobile.TargetJson.AAMParameters>;
					}
					export class Context {
						public static class: java.lang.Class<com.adobe.marketing.mobile.TargetJson.Context>;
					}
					export class CustomerIds {
						public static class: java.lang.Class<com.adobe.marketing.mobile.TargetJson.CustomerIds>;
					}
					export class Mbox {
						public static class: java.lang.Class<com.adobe.marketing.mobile.TargetJson.Mbox>;
					}
					export class Metric {
						public static class: java.lang.Class<com.adobe.marketing.mobile.TargetJson.Metric>;
					}
					export class MetricType {
						public static class: java.lang.Class<com.adobe.marketing.mobile.TargetJson.MetricType>;
					}
					export class Notification {
						public static class: java.lang.Class<com.adobe.marketing.mobile.TargetJson.Notification>;
					}
					export class Option {
						public static class: java.lang.Class<com.adobe.marketing.mobile.TargetJson.Option>;
					}
					export class Order {
						public static class: java.lang.Class<com.adobe.marketing.mobile.TargetJson.Order>;
					}
					export class Product {
						public static class: java.lang.Class<com.adobe.marketing.mobile.TargetJson.Product>;
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
				export class TargetListenerConfigurationResponseContent extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.TargetExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TargetListenerConfigurationResponseContent>;
					public hear(param0: com.adobe.marketing.mobile.Event): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class TargetListenerGenericDataOS extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.TargetExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TargetListenerGenericDataOS>;
					public hear(param0: com.adobe.marketing.mobile.Event): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class TargetListenerRequestContent extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.TargetExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TargetListenerRequestContent>;
					public hear(param0: com.adobe.marketing.mobile.Event): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class TargetListenerRequestIdentity extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.TargetExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TargetListenerRequestIdentity>;
					public hear(param0: com.adobe.marketing.mobile.Event): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class TargetListenerRequestReset extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.TargetExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TargetListenerRequestReset>;
					public hear(param0: com.adobe.marketing.mobile.Event): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class TargetModuleDetails {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TargetModuleDetails>;
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
				export class TargetObject {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TargetObject>;
					public mboxName: string;
					public targetParameters: com.adobe.marketing.mobile.TargetParameters;
					public mboxParameters: java.util.Map<string,string>;
					public profileParameters: java.util.Map<string,string>;
					public orderParameters: java.util.Map<string,any>;
					public productParameters: java.util.Map<string,string>;
					public equals(param0: any): boolean;
					public static deserializeMboxName(param0: java.util.Map<string,com.adobe.marketing.mobile.Variant>): string;
					public static deserializeParameters(param0: java.util.Map<string,com.adobe.marketing.mobile.Variant>): com.adobe.marketing.mobile.TargetParameters;
					public static serializeParameters(param0: java.util.Map<string,com.adobe.marketing.mobile.Variant>, param1: com.adobe.marketing.mobile.TargetParameters): void;
					public hashCode(): number;
					public static serializeMboxName(param0: java.util.Map<string,com.adobe.marketing.mobile.Variant>, param1: string): void;
				}
				export module TargetObject {
					export abstract class Builder<TBuilder, TTargetObject>  extends java.lang.Object {
						public static class: java.lang.Class<com.adobe.marketing.mobile.TargetObject.Builder<any,any>>;
						public buildee: TTargetObject;
						public setProfileParameters(param0: java.util.Map<string,string>): TBuilder;
						public build(): TTargetObject;
						public setTargetParameters(param0: com.adobe.marketing.mobile.TargetParameters): TBuilder;
						public setOrderParameters(param0: java.util.Map<string,any>): TBuilder;
						public setMboxParameters(param0: java.util.Map<string,string>): TBuilder;
						public constructor(param0: TTargetObject);
						public setProductParameters(param0: java.util.Map<string,string>): TBuilder;
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
				export class TargetOrder {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TargetOrder>;
					public equals(param0: any): boolean;
					public getTotal(): number;
					public getId(): string;
					public constructor(param0: string, param1: number, param2: java.util.List<string>);
					public getPurchasedProductIds(): java.util.List<string>;
					public hashCode(): number;
				}
				export module TargetOrder {
					export class TargetOrderSerializer extends com.adobe.marketing.mobile.VariantSerializer<com.adobe.marketing.mobile.TargetOrder> {
						public static class: java.lang.Class<com.adobe.marketing.mobile.TargetOrder.TargetOrderSerializer>;
						public deserialize(param0: com.adobe.marketing.mobile.Variant): com.adobe.marketing.mobile.TargetOrder;
						public serialize(param0: com.adobe.marketing.mobile.TargetOrder): com.adobe.marketing.mobile.Variant;
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
				export class TargetParameters {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TargetParameters>;
					public equals(param0: any): boolean;
					public getProfileParameters(): java.util.Map<string,string>;
					public getProduct(): com.adobe.marketing.mobile.TargetProduct;
					public getParameters(): java.util.Map<string,string>;
					public hashCode(): number;
					public getOrder(): com.adobe.marketing.mobile.TargetOrder;
				}
				export module TargetParameters {
					export class Builder {
						public static class: java.lang.Class<com.adobe.marketing.mobile.TargetParameters.Builder>;
						public constructor();
						public order(param0: com.adobe.marketing.mobile.TargetOrder): com.adobe.marketing.mobile.TargetParameters.Builder;
						public build(): com.adobe.marketing.mobile.TargetParameters;
						public constructor(param0: java.util.Map<string,string>);
						public profileParameters(param0: java.util.Map<string,string>): com.adobe.marketing.mobile.TargetParameters.Builder;
						public product(param0: com.adobe.marketing.mobile.TargetProduct): com.adobe.marketing.mobile.TargetParameters.Builder;
						public parameters(param0: java.util.Map<string,string>): com.adobe.marketing.mobile.TargetParameters.Builder;
					}
					export class TargetParameterSerializer extends com.adobe.marketing.mobile.VariantSerializer<com.adobe.marketing.mobile.TargetParameters> {
						public static class: java.lang.Class<com.adobe.marketing.mobile.TargetParameters.TargetParameterSerializer>;
						public deserialize(param0: com.adobe.marketing.mobile.Variant): com.adobe.marketing.mobile.TargetParameters;
						public serialize(param0: com.adobe.marketing.mobile.TargetParameters): com.adobe.marketing.mobile.Variant;
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
				export class TargetPrefetch extends com.adobe.marketing.mobile.TargetObject {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TargetPrefetch>;
					public constructor(param0: string, param1: com.adobe.marketing.mobile.TargetParameters);
				}
				export module TargetPrefetch {
					export class Builder extends com.adobe.marketing.mobile.TargetObject.Builder<com.adobe.marketing.mobile.TargetPrefetch.Builder,com.adobe.marketing.mobile.TargetPrefetch> {
						public static class: java.lang.Class<com.adobe.marketing.mobile.TargetPrefetch.Builder>;
						public setOrderParameters(param0: java.util.Map<string,any>): any;
						public setMboxParameters(param0: java.util.Map<string,string>): com.adobe.marketing.mobile.TargetPrefetch.Builder;
						public setMboxParameters(param0: java.util.Map<string,string>): any;
						public setProfileParameters(param0: java.util.Map<string,string>): any;
						public setTargetParameters(param0: com.adobe.marketing.mobile.TargetParameters): any;
						/** @deprecated */
						public constructor(param0: string);
						public constructor(param0: any);
						public setProfileParameters(param0: java.util.Map<string,string>): com.adobe.marketing.mobile.TargetPrefetch.Builder;
						public setOrderParameters(param0: java.util.Map<string,any>): com.adobe.marketing.mobile.TargetPrefetch.Builder;
						public setProductParameters(param0: java.util.Map<string,string>): any;
						public setProductParameters(param0: java.util.Map<string,string>): com.adobe.marketing.mobile.TargetPrefetch.Builder;
						public setTargetParameters(param0: com.adobe.marketing.mobile.TargetParameters): com.adobe.marketing.mobile.TargetPrefetch.Builder;
					}
					export class PrefetchVariantSerializer extends com.adobe.marketing.mobile.VariantSerializer<com.adobe.marketing.mobile.TargetPrefetch> {
						public static class: java.lang.Class<com.adobe.marketing.mobile.TargetPrefetch.PrefetchVariantSerializer>;
						public deserialize(param0: com.adobe.marketing.mobile.Variant): com.adobe.marketing.mobile.TargetPrefetch;
						public serialize(param0: com.adobe.marketing.mobile.TargetPrefetch): com.adobe.marketing.mobile.Variant;
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
				export class TargetPrefetchResult {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TargetPrefetchResult>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class TargetPreviewButtonListener {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TargetPreviewButtonListener>;
					public onTapDetected(): void;
					public onPanDetected(): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class TargetPreviewFullscreenListener {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TargetPreviewFullscreenListener>;
					public onDismiss(param0: com.adobe.marketing.mobile.UIService.UIFullScreenMessage): void;
					public overrideUrlLoad(param0: com.adobe.marketing.mobile.UIService.UIFullScreenMessage, param1: string): boolean;
					public onShow(param0: com.adobe.marketing.mobile.UIService.UIFullScreenMessage): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class TargetPreviewManager {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TargetPreviewManager>;
					public previewParams: string;
					public token: string;
					public endPoint: string;
					public webViewHtml: string;
					public restartUrl: string;
					public floatingButton: com.adobe.marketing.mobile.UIService.FloatingButton;
					public setRestartDeepLink(param0: string): void;
					public getPreviewParameters(): string;
					public fetchWebView(): void;
					public enterPreviewModeWithDeepLinkParams(param0: string, param1: string): void;
					public previewConfirmedWithUrl(param0: com.adobe.marketing.mobile.UIService.UIFullScreenMessage, param1: string): void;
					public getPreviewToken(): string;
					public resetTargetPreviewProperties(): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class TargetProduct {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TargetProduct>;
					public constructor(param0: string, param1: string);
					public equals(param0: any): boolean;
					public getId(): string;
					public hashCode(): number;
					public getCategoryId(): string;
				}
				export module TargetProduct {
					export class TargetProductSerializer extends com.adobe.marketing.mobile.VariantSerializer<com.adobe.marketing.mobile.TargetProduct> {
						public static class: java.lang.Class<com.adobe.marketing.mobile.TargetProduct.TargetProductSerializer>;
						public deserialize(param0: com.adobe.marketing.mobile.Variant): com.adobe.marketing.mobile.TargetProduct;
						public serialize(param0: com.adobe.marketing.mobile.TargetProduct): com.adobe.marketing.mobile.Variant;
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
				export class TargetRequest extends com.adobe.marketing.mobile.TargetObject {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TargetRequest>;
					public equals(param0: any): boolean;
					public constructor(param0: string, param1: com.adobe.marketing.mobile.TargetParameters, param2: string, param3: com.adobe.marketing.mobile.AdobeCallback<string>);
					public hashCode(): number;
				}
				export module TargetRequest {
					export class Builder extends com.adobe.marketing.mobile.TargetObject.Builder<com.adobe.marketing.mobile.TargetRequest.Builder,com.adobe.marketing.mobile.TargetRequest> {
						public static class: java.lang.Class<com.adobe.marketing.mobile.TargetRequest.Builder>;
						public setOrderParameters(param0: java.util.Map<string,any>): any;
						public setProfileParameters(param0: java.util.Map<string,string>): com.adobe.marketing.mobile.TargetRequest.Builder;
						public setProductParameters(param0: java.util.Map<string,string>): com.adobe.marketing.mobile.TargetRequest.Builder;
						public setMboxParameters(param0: java.util.Map<string,string>): any;
						public setProfileParameters(param0: java.util.Map<string,string>): any;
						public setTargetParameters(param0: com.adobe.marketing.mobile.TargetParameters): any;
						public constructor(param0: any);
						public setProductParameters(param0: java.util.Map<string,string>): any;
						public setOrderParameters(param0: java.util.Map<string,any>): com.adobe.marketing.mobile.TargetRequest.Builder;
						public setTargetParameters(param0: com.adobe.marketing.mobile.TargetParameters): com.adobe.marketing.mobile.TargetRequest.Builder;
						public setContentCallback(param0: com.adobe.marketing.mobile.AdobeCallback<string>): com.adobe.marketing.mobile.TargetRequest.Builder;
						/** @deprecated */
						public constructor(param0: string, param1: string);
						public setMboxParameters(param0: java.util.Map<string,string>): com.adobe.marketing.mobile.TargetRequest.Builder;
					}
					export class RequestVariantSerializer extends com.adobe.marketing.mobile.VariantSerializer<com.adobe.marketing.mobile.TargetRequest> {
						public static class: java.lang.Class<com.adobe.marketing.mobile.TargetRequest.RequestVariantSerializer>;
						public constructor();
						public serialize(param0: com.adobe.marketing.mobile.TargetRequest): com.adobe.marketing.mobile.Variant;
						public deserialize(param0: com.adobe.marketing.mobile.Variant): com.adobe.marketing.mobile.TargetRequest;
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
				export class TargetRequestBuilder {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TargetRequestBuilder>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class TargetResponseParser {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TargetResponseParser>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class TargetUtil {
					public static class: java.lang.Class<com.adobe.marketing.mobile.TargetUtil>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export module target {
					export class BuildConfig {
						public static class: java.lang.Class<com.adobe.marketing.mobile.target.BuildConfig>;
						public static DEBUG: boolean;
						public static APPLICATION_ID: string;
						public static BUILD_TYPE: string;
						public static FLAVOR: string;
						public static VERSION_CODE: number;
						public static VERSION_NAME: string;
						public static FLAVOR_target: string;
						public static FLAVOR_coreImplementation: string;
						public static EXTENSION_VERSION: string;
						public constructor();
					}
				}
			}
		}
	}
}

//Generics information:
//com.adobe.marketing.mobile.TargetObject.Builder:2

