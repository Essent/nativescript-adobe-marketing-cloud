/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class Lifecycle {
					public static class: java.lang.Class<com.adobe.marketing.mobile.Lifecycle>;
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
				export class LifecycleConstants {
					public static class: java.lang.Class<com.adobe.marketing.mobile.LifecycleConstants>;
				}
				export module LifecycleConstants {
					export class ContextDataValues {
						public static class: java.lang.Class<com.adobe.marketing.mobile.LifecycleConstants.ContextDataValues>;
					}
					export class DataStoreKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.LifecycleConstants.DataStoreKeys>;
					}
					export class EventDataKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.LifecycleConstants.EventDataKeys>;
					}
					export module EventDataKeys {
						export class Configuration {
							public static class: java.lang.Class<com.adobe.marketing.mobile.LifecycleConstants.EventDataKeys.Configuration>;
						}
						export class Identity {
							public static class: java.lang.Class<com.adobe.marketing.mobile.LifecycleConstants.EventDataKeys.Identity>;
						}
						export class Lifecycle {
							public static class: java.lang.Class<com.adobe.marketing.mobile.LifecycleConstants.EventDataKeys.Lifecycle>;
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
				export class LifecycleCore {
					public static class: java.lang.Class<com.adobe.marketing.mobile.LifecycleCore>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class LifecycleDispatcherResponseContent extends com.adobe.marketing.mobile.ModuleEventDispatcher<com.adobe.marketing.mobile.LifecycleExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.LifecycleDispatcherResponseContent>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class LifecycleExtension {
					public static class: java.lang.Class<com.adobe.marketing.mobile.LifecycleExtension>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class LifecycleListenerHubBooted extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.LifecycleExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.LifecycleListenerHubBooted>;
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
				export class LifecycleListenerRequestContent extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.LifecycleExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.LifecycleListenerRequestContent>;
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
				export class LifecycleListenerSharedState extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.LifecycleExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.LifecycleListenerSharedState>;
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
				export class LifecycleMetricsBuilder {
					public static class: java.lang.Class<com.adobe.marketing.mobile.LifecycleMetricsBuilder>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class LifecycleModuleDetails {
					public static class: java.lang.Class<com.adobe.marketing.mobile.LifecycleModuleDetails>;
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
				export class LifecycleSession {
					public static class: java.lang.Class<com.adobe.marketing.mobile.LifecycleSession>;
				}
				export module LifecycleSession {
					export class SessionInfo {
						public static class: java.lang.Class<com.adobe.marketing.mobile.LifecycleSession.SessionInfo>;
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
				export module lifecycle {
					export class BuildConfig {
						public static class: java.lang.Class<com.adobe.marketing.mobile.lifecycle.BuildConfig>;
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

