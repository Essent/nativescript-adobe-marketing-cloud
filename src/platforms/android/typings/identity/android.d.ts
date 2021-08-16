/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class ConfigurationSharedStateIdentity {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ConfigurationSharedStateIdentity>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class DispatcherAnalyticsRequestContentIdentity extends com.adobe.marketing.mobile.ModuleEventDispatcher<com.adobe.marketing.mobile.IdentityExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.DispatcherAnalyticsRequestContentIdentity>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class DispatcherConfigurationRequestContentIdentity extends com.adobe.marketing.mobile.ModuleEventDispatcher<com.adobe.marketing.mobile.IdentityExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.DispatcherConfigurationRequestContentIdentity>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class DispatcherIdentityResponseIdentityIdentity extends com.adobe.marketing.mobile.ModuleEventDispatcher<com.adobe.marketing.mobile.IdentityExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.DispatcherIdentityResponseIdentityIdentity>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class Identity {
					public static class: java.lang.Class<com.adobe.marketing.mobile.Identity>;
					public static appendVisitorInfoForURL(param0: string, param1: com.adobe.marketing.mobile.AdobeCallback<string>): void;
					public static extensionVersion(): string;
					public static getIdentifiers(param0: com.adobe.marketing.mobile.AdobeCallback<java.util.List<com.adobe.marketing.mobile.VisitorID>>): void;
					public static syncIdentifiers(param0: java.util.Map<string,string>): void;
					public static syncIdentifiers(param0: java.util.Map<string,string>, param1: com.adobe.marketing.mobile.VisitorID.AuthenticationState): void;
					public static getUrlVariables(param0: com.adobe.marketing.mobile.AdobeCallback<string>): void;
					public static getExperienceCloudId(param0: com.adobe.marketing.mobile.AdobeCallback<string>): void;
					public static registerExtension(): void;
					public static syncIdentifier(param0: string, param1: string, param2: com.adobe.marketing.mobile.VisitorID.AuthenticationState): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class IdentityConstants {
					public static class: java.lang.Class<com.adobe.marketing.mobile.IdentityConstants>;
				}
				export module IdentityConstants {
					export class DataStoreKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.IdentityConstants.DataStoreKeys>;
					}
					export class Defaults {
						public static class: java.lang.Class<com.adobe.marketing.mobile.IdentityConstants.Defaults>;
					}
					export class EventDataKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.IdentityConstants.EventDataKeys>;
					}
					export module EventDataKeys {
						export class Analytics {
							public static class: java.lang.Class<com.adobe.marketing.mobile.IdentityConstants.EventDataKeys.Analytics>;
						}
						export class Audience {
							public static class: java.lang.Class<com.adobe.marketing.mobile.IdentityConstants.EventDataKeys.Audience>;
						}
						export class Configuration {
							public static class: java.lang.Class<com.adobe.marketing.mobile.IdentityConstants.EventDataKeys.Configuration>;
						}
						export class Identity {
							public static class: java.lang.Class<com.adobe.marketing.mobile.IdentityConstants.EventDataKeys.Identity>;
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
				export class IdentityCore {
					public static class: java.lang.Class<com.adobe.marketing.mobile.IdentityCore>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class IdentityExtension {
					public static class: java.lang.Class<com.adobe.marketing.mobile.IdentityExtension>;
					public sendOptOutHit(param0: com.adobe.marketing.mobile.ConfigurationSharedStateIdentity): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class IdentityHit {
					public static class: java.lang.Class<com.adobe.marketing.mobile.IdentityHit>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class IdentityHitSchema extends com.adobe.marketing.mobile.AbstractHitSchema<com.adobe.marketing.mobile.IdentityHit> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.IdentityHitSchema>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class IdentityHitsDatabase extends com.adobe.marketing.mobile.HitQueue.IHitProcessor<com.adobe.marketing.mobile.IdentityHit> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.IdentityHitsDatabase>;
					public process(param0: com.adobe.marketing.mobile.IdentityHit): com.adobe.marketing.mobile.HitQueue.RetryType;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class IdentityListenerAudienceResponseContent extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.IdentityExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.IdentityListenerAudienceResponseContent>;
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
				export class IdentityListenerConfigurationResponseContent extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.IdentityExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.IdentityListenerConfigurationResponseContent>;
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
				export class IdentityResponseObject {
					public static class: java.lang.Class<com.adobe.marketing.mobile.IdentityResponseObject>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class ListenerAnalyticsResponseIdentity extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.IdentityExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ListenerAnalyticsResponseIdentity>;
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
				export class ListenerHubBootedIdentity extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.IdentityExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ListenerHubBootedIdentity>;
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
				export class ListenerHubSharedStateIdentity extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.IdentityExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ListenerHubSharedStateIdentity>;
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
				export class ListenerIdentityGenericIdentityRequestIdentity extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.IdentityExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ListenerIdentityGenericIdentityRequestIdentity>;
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
				export class ListenerIdentityRequestIdentity extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.IdentityExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ListenerIdentityRequestIdentity>;
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
				export module identity {
					export class BuildConfig {
						public static class: java.lang.Class<com.adobe.marketing.mobile.identity.BuildConfig>;
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

