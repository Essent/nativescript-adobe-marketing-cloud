/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class Analytics {
					public static class: java.lang.Class<com.adobe.marketing.mobile.Analytics>;
					public static getQueueSize(param0: com.adobe.marketing.mobile.AdobeCallback<java.lang.Long>): void;
					public static extensionVersion(): string;
					public static getVisitorIdentifier(param0: com.adobe.marketing.mobile.AdobeCallback<string>): void;
					public static clearQueue(): void;
					public static sendQueuedHits(): void;
					public static getTrackingIdentifier(param0: com.adobe.marketing.mobile.AdobeCallback<string>): void;
					public static registerExtension(): void;
					public static setVisitorIdentifier(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AnalyticsConstants {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsConstants>;
				}
				export module AnalyticsConstants {
					export class ContextDataKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsConstants.ContextDataKeys>;
					}
					export class ContextDataValues {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsConstants.ContextDataValues>;
					}
					export class DataStoreKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsConstants.DataStoreKeys>;
					}
					export class Default {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsConstants.Default>;
					}
					export class EventDataKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsConstants.EventDataKeys>;
					}
					export module EventDataKeys {
						export class Analytics {
							public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsConstants.EventDataKeys.Analytics>;
						}
						export class Configuration {
							public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsConstants.EventDataKeys.Configuration>;
						}
						export class Identity {
							public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsConstants.EventDataKeys.Identity>;
						}
						export class Lifecycle {
							public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsConstants.EventDataKeys.Lifecycle>;
						}
						export class Places {
							public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsConstants.EventDataKeys.Places>;
						}
						export class RuleEngine {
							public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsConstants.EventDataKeys.RuleEngine>;
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
				export class AnalyticsCore {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsCore>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AnalyticsDispatcherAnalyticsResponseContent extends com.adobe.marketing.mobile.ModuleEventDispatcher<com.adobe.marketing.mobile.AnalyticsExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsDispatcherAnalyticsResponseContent>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AnalyticsDispatcherAnalyticsResponseIdentity extends com.adobe.marketing.mobile.ModuleEventDispatcher<com.adobe.marketing.mobile.AnalyticsExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsDispatcherAnalyticsResponseIdentity>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AnalyticsExtension {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsExtension>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AnalyticsHit {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsHit>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AnalyticsHitSchema extends com.adobe.marketing.mobile.AbstractHitSchema<com.adobe.marketing.mobile.AnalyticsHit> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsHitSchema>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AnalyticsHitsDatabase extends com.adobe.marketing.mobile.HitQueue.IHitProcessor<com.adobe.marketing.mobile.AnalyticsHit> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsHitsDatabase>;
					public resetIsWaitingFlag(): void;
					public getTrackingQueueSize(): number;
					public clearTrackingQueue(): void;
					public process(param0: com.adobe.marketing.mobile.AnalyticsHit): com.adobe.marketing.mobile.HitQueue.RetryType;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AnalyticsListenerAcquisitionResponseContent extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.AnalyticsExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsListenerAcquisitionResponseContent>;
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
				export class AnalyticsListenerAnalyticsRequestContent extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.AnalyticsExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsListenerAnalyticsRequestContent>;
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
				export class AnalyticsListenerAnalyticsRequestIdentity extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.AnalyticsExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsListenerAnalyticsRequestIdentity>;
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
				export class AnalyticsListenerConfigurationResponseContent extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.AnalyticsExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsListenerConfigurationResponseContent>;
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
				export class AnalyticsListenerGenericTrackRequestContent extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.AnalyticsExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsListenerGenericTrackRequestContent>;
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
				export class AnalyticsListenerHubBooted extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.AnalyticsExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsListenerHubBooted>;
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
				export class AnalyticsListenerHubSharedState extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.AnalyticsExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsListenerHubSharedState>;
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
				export class AnalyticsListenerLifecycleRequestContent extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.AnalyticsExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsListenerLifecycleRequestContent>;
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
				export class AnalyticsListenerLifecycleResponseContent extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.AnalyticsExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsListenerLifecycleResponseContent>;
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
				export class AnalyticsListenerRulesEngineResponseContent extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.AnalyticsExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsListenerRulesEngineResponseContent>;
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
				export class AnalyticsModuleDetails {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsModuleDetails>;
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
				export class AnalyticsProperties {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsProperties>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AnalyticsRequestSerializer {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsRequestSerializer>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AnalyticsState {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsState>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AnalyticsUnprocessedEvent {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsUnprocessedEvent>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AnalyticsVersionProvider {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AnalyticsVersionProvider>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export module analytics {
					export class BuildConfig {
						public static class: java.lang.Class<com.adobe.marketing.mobile.analytics.BuildConfig>;
						public static DEBUG: boolean;
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
}

//Generics information:

