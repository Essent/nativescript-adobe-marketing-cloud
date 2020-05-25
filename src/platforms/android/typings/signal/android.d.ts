/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class ListenerConfigurationResponseContentSignal extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.SignalExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ListenerConfigurationResponseContentSignal>;
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
				export class ListenerRulesEngineResponseContentSignal extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.SignalExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ListenerRulesEngineResponseContentSignal>;
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
				export class Signal {
					public static class: java.lang.Class<com.adobe.marketing.mobile.Signal>;
					public static extensionVersion(): string;
					public static registerExtension(): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class SignalConstants {
					public static class: java.lang.Class<com.adobe.marketing.mobile.SignalConstants>;
				}
				export module SignalConstants {
					export class EventDataKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.SignalConstants.EventDataKeys>;
					}
					export module EventDataKeys {
						export class Configuration {
							public static class: java.lang.Class<com.adobe.marketing.mobile.SignalConstants.EventDataKeys.Configuration>;
						}
						export class RuleEngine {
							public static class: java.lang.Class<com.adobe.marketing.mobile.SignalConstants.EventDataKeys.RuleEngine>;
						}
						export class Signal {
							public static class: java.lang.Class<com.adobe.marketing.mobile.SignalConstants.EventDataKeys.Signal>;
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
				export class SignalCore {
					public static class: java.lang.Class<com.adobe.marketing.mobile.SignalCore>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class SignalExtension {
					public static class: java.lang.Class<com.adobe.marketing.mobile.SignalExtension>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class SignalHit {
					public static class: java.lang.Class<com.adobe.marketing.mobile.SignalHit>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class SignalHitSchema extends com.adobe.marketing.mobile.AbstractHitSchema<com.adobe.marketing.mobile.SignalHit> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.SignalHitSchema>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class SignalHitsDatabase extends com.adobe.marketing.mobile.HitQueue.IHitProcessor<com.adobe.marketing.mobile.SignalHit> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.SignalHitsDatabase>;
					public process(param0: com.adobe.marketing.mobile.SignalHit): com.adobe.marketing.mobile.HitQueue.RetryType;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class SignalModuleDetails {
					public static class: java.lang.Class<com.adobe.marketing.mobile.SignalModuleDetails>;
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
				export class SignalTemplate {
					public static class: java.lang.Class<com.adobe.marketing.mobile.SignalTemplate>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export module signal {
					export class BuildConfig {
						public static class: java.lang.Class<com.adobe.marketing.mobile.signal.BuildConfig>;
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

