/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class ListenerRulesResponseContentProfile extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.UserProfileExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ListenerRulesResponseContentProfile>;
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
				export class ListenerUserProfileBootEvent extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.UserProfileExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ListenerUserProfileBootEvent>;
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
				export class ListenerUserProfileRequestProfile extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.UserProfileExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ListenerUserProfileRequestProfile>;
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
				export class ListenerUserProfileRequestReset extends com.adobe.marketing.mobile.ModuleEventListener<com.adobe.marketing.mobile.UserProfileExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.ListenerUserProfileRequestReset>;
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
				export class PersistentProfileData {
					public static class: java.lang.Class<com.adobe.marketing.mobile.PersistentProfileData>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class StandardProfileKeys {
					public static class: java.lang.Class<com.adobe.marketing.mobile.StandardProfileKeys>;
				}
				export module StandardProfileKeys {
					export class AggregatedKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.StandardProfileKeys.AggregatedKeys>;
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
				export class UserProfile {
					public static class: java.lang.Class<com.adobe.marketing.mobile.UserProfile>;
					public static extensionVersion(): string;
					public static updateUserAttribute(param0: string, param1: any): void;
					public static getUserAttributes(param0: java.util.List<string>, param1: com.adobe.marketing.mobile.AdobeCallback<java.util.Map<string,any>>): void;
					public static removeUserAttribute(param0: string): void;
					public static removeUserAttributes(param0: java.util.List<string>): void;
					public static registerExtension(): void;
					public static updateUserAttributes(param0: java.util.Map<string,any>): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class UserProfileConstants {
					public static class: java.lang.Class<com.adobe.marketing.mobile.UserProfileConstants>;
				}
				export module UserProfileConstants {
					export class EventDataKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.UserProfileConstants.EventDataKeys>;
					}
					export module EventDataKeys {
						export class RuleEngine {
							public static class: java.lang.Class<com.adobe.marketing.mobile.UserProfileConstants.EventDataKeys.RuleEngine>;
						}
						export class UserProfile {
							public static class: java.lang.Class<com.adobe.marketing.mobile.UserProfileConstants.EventDataKeys.UserProfile>;
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
				export class UserProfileCore {
					public static class: java.lang.Class<com.adobe.marketing.mobile.UserProfileCore>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class UserProfileDispatcher extends com.adobe.marketing.mobile.ModuleEventDispatcher<com.adobe.marketing.mobile.UserProfileExtension> {
					public static class: java.lang.Class<com.adobe.marketing.mobile.UserProfileDispatcher>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class UserProfileExtension {
					public static class: java.lang.Class<com.adobe.marketing.mobile.UserProfileExtension>;
					public dispatcher: com.adobe.marketing.mobile.UserProfileDispatcher;
					public constructor(param0: com.adobe.marketing.mobile.EventHub, param1: com.adobe.marketing.mobile.PlatformServices, param2: com.adobe.marketing.mobile.PersistentProfileData, param3: com.adobe.marketing.mobile.UserProfileDispatcher);
					public constructor(param0: com.adobe.marketing.mobile.EventHub, param1: com.adobe.marketing.mobile.PlatformServices);
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class UserprofileModuleDetails {
					public static class: java.lang.Class<com.adobe.marketing.mobile.UserprofileModuleDetails>;
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
				export module userprofile {
					export class BuildConfig {
						public static class: java.lang.Class<com.adobe.marketing.mobile.userprofile.BuildConfig>;
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

