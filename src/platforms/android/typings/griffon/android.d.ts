/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AuthorizedSessionURLCallback {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AuthorizedSessionURLCallback>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.AuthorizedSessionURLCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						run(param0: string, param1: com.adobe.marketing.mobile.GriffonConstants.Environment): void;
					});
					public constructor();
					public run(param0: string, param1: com.adobe.marketing.mobile.GriffonConstants.Environment): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class Griffon {
					public static class: java.lang.Class<com.adobe.marketing.mobile.Griffon>;
					public getVersion(): string;
					public static extensionVersion(): string;
					public static addPlugin(param0: com.adobe.marketing.mobile.Griffon.Plugin): void;
					public static registerExtension(): boolean;
					public static sendBlob(param0: native.Array<number>, param1: string, param2: com.adobe.marketing.mobile.Griffon.SendBlobCallback): void;
					public onUnexpectedError(param0: com.adobe.marketing.mobile.ExtensionUnexpectedError): void;
					public static startSession(param0: string): void;
					public getName(): string;
					public static sendEvent(param0: com.adobe.marketing.mobile.GriffonEvent): void;
					public static logLocalUI(param0: com.adobe.marketing.mobile.Griffon.UILogColorVisibility, param1: string): void;
					public onUnregistered(): void;
					public static attemptReconnect(): void;
					public static endSession(): void;
				}
				export module Griffon {
					export class Plugin {
						public static class: java.lang.Class<com.adobe.marketing.mobile.Griffon.Plugin>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.Griffon$Plugin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getVendor(): string;
							onEventReceived(param0: com.adobe.marketing.mobile.GriffonEvent): void;
							onRegistered(param0: com.adobe.marketing.mobile.GriffonSession): void;
							onSessionConnected(): void;
							onSessionDisconnected(param0: number): void;
							onGriffonUIRemoved(): void;
						});
						public constructor();
						public getVendor(): string;
						public onRegistered(param0: com.adobe.marketing.mobile.GriffonSession): void;
						public onSessionDisconnected(param0: number): void;
						public onSessionConnected(): void;
						public onGriffonUIRemoved(): void;
						public onEventReceived(param0: com.adobe.marketing.mobile.GriffonEvent): void;
					}
					export class SendBlobCallback {
						public static class: java.lang.Class<com.adobe.marketing.mobile.Griffon.SendBlobCallback>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.Griffon$SendBlobCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: string): void;
							onFailure(param0: string): void;
						});
						public constructor();
						public onFailure(param0: string): void;
						public onSuccess(param0: string): void;
					}
					export class UILogColorVisibility {
						public static class: java.lang.Class<com.adobe.marketing.mobile.Griffon.UILogColorVisibility>;
						public static LOW: com.adobe.marketing.mobile.Griffon.UILogColorVisibility;
						public static NORMAL: com.adobe.marketing.mobile.Griffon.UILogColorVisibility;
						public static HIGH: com.adobe.marketing.mobile.Griffon.UILogColorVisibility;
						public static CRITICAL: com.adobe.marketing.mobile.Griffon.UILogColorVisibility;
						public static values(): native.Array<com.adobe.marketing.mobile.Griffon.UILogColorVisibility>;
						public static valueOf(param0: string): com.adobe.marketing.mobile.Griffon.UILogColorVisibility;
						public getValue(): number;
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
				export class GriffonConnectionStatusUI extends com.adobe.marketing.mobile.GriffonFullScreenTakeover.FullScreenTakeoverCallbacks {
					public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonConnectionStatusUI>;
					public onShow(param0: com.adobe.marketing.mobile.GriffonFullScreenTakeover): void;
					public onDismiss(param0: com.adobe.marketing.mobile.GriffonFullScreenTakeover): void;
					public onURLTriggered(param0: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class GriffonConstants {
					public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonConstants>;
				}
				export module GriffonConstants {
					export class BlobKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonConstants.BlobKeys>;
					}
					export class DataStoreKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonConstants.DataStoreKeys>;
					}
					export class Environment {
						public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonConstants.Environment>;
						public static PROD: com.adobe.marketing.mobile.GriffonConstants.Environment;
						public static STAGE: com.adobe.marketing.mobile.GriffonConstants.Environment;
						public static QA: com.adobe.marketing.mobile.GriffonConstants.Environment;
						public static DEV: com.adobe.marketing.mobile.GriffonConstants.Environment;
						public static values(): native.Array<com.adobe.marketing.mobile.GriffonConstants.Environment>;
						public stringValue(): string;
						public static get(param0: string): com.adobe.marketing.mobile.GriffonConstants.Environment;
						public static valueOf(param0: string): com.adobe.marketing.mobile.GriffonConstants.Environment;
					}
					export class EventDataKey {
						public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonConstants.EventDataKey>;
					}
					export class GriffonEventKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonConstants.GriffonEventKeys>;
					}
					export class SharedStateKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonConstants.SharedStateKeys>;
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
				export class GriffonEvent {
					public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonEvent>;
					public constructor(param0: string, param1: string, param2: string, param3: java.util.Map<string,any>);
					public constructor(param0: string, param1: string, param2: string, param3: java.util.Map<string,any>, param4: number);
					public constructor(param0: string, param1: string, param2: java.util.Map<string,any>);
					public createResponseEventWithPayload(param0: java.util.Map<string,any>): com.adobe.marketing.mobile.GriffonEvent;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class GriffonFloatingButton extends com.adobe.marketing.mobile.GriffonSessionLifecycleListener {
					public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonFloatingButton>;
					public getCurrentGraphic(): com.adobe.marketing.mobile.GriffonFloatingButtonView.Graphic;
					public onActivityResumed(param0: globalAndroid.app.Activity): void;
					public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class GriffonFloatingButtonView {
					public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonFloatingButtonView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setPosition(param0: number, param1: number): void;
					public setOnPositionChangedListener(param0: com.adobe.marketing.mobile.GriffonFloatingButtonView.OnPositionChangedListener): void;
					public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setGraphic(param0: com.adobe.marketing.mobile.GriffonFloatingButtonView.Graphic): void;
				}
				export module GriffonFloatingButtonView {
					export class Graphic {
						public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonFloatingButtonView.Graphic>;
						public static CONNECTED: com.adobe.marketing.mobile.GriffonFloatingButtonView.Graphic;
						public static DISCONNECTED: com.adobe.marketing.mobile.GriffonFloatingButtonView.Graphic;
						public static valueOf(param0: string): com.adobe.marketing.mobile.GriffonFloatingButtonView.Graphic;
						public static values(): native.Array<com.adobe.marketing.mobile.GriffonFloatingButtonView.Graphic>;
					}
					export class OnPositionChangedListener {
						public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonFloatingButtonView.OnPositionChangedListener>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.GriffonFloatingButtonView$OnPositionChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onPositionChanged(param0: number, param1: number): void;
						});
						public constructor();
						public onPositionChanged(param0: number, param1: number): void;
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
				export class GriffonFullScreenTakeover {
					public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonFullScreenTakeover>;
				}
				export module GriffonFullScreenTakeover {
					export class FullScreenTakeoverCallbacks {
						public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonFullScreenTakeover.FullScreenTakeoverCallbacks>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.GriffonFullScreenTakeover$FullScreenTakeoverCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onURLTriggered(param0: string): boolean;
							onShow(param0: com.adobe.marketing.mobile.GriffonFullScreenTakeover): void;
							onDismiss(param0: com.adobe.marketing.mobile.GriffonFullScreenTakeover): void;
						});
						public constructor();
						public onURLTriggered(param0: string): boolean;
						public onShow(param0: com.adobe.marketing.mobile.GriffonFullScreenTakeover): void;
						public onDismiss(param0: com.adobe.marketing.mobile.GriffonFullScreenTakeover): void;
					}
					export class MessageFullScreenRunner {
						public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonFullScreenTakeover.MessageFullScreenRunner>;
						public run(): void;
					}
					export class MessageFullScreenWebViewClient {
						public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonFullScreenTakeover.MessageFullScreenWebViewClient>;
						public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: globalAndroid.webkit.WebResourceRequest): boolean;
						public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: string): boolean;
						public onPageFinished(param0: globalAndroid.webkit.WebView, param1: string): void;
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
				export class GriffonFullScreenTakeoverActivity {
					public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonFullScreenTakeoverActivity>;
					public static weakFullScreenTakeoverReference: java.lang.ref.WeakReference<com.adobe.marketing.mobile.GriffonFullScreenTakeover>;
					public static isDisplayed: boolean;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
					public onBackPressed(): void;
					public static setFullscreenMessage(param0: com.adobe.marketing.mobile.GriffonFullScreenTakeover): void;
					public onStop(): void;
					public onResume(): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class GriffonIOUtils {
					public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonIOUtils>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class GriffonListenerConfigurationResponseContent {
					public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonListenerConfigurationResponseContent>;
					public constructor(param0: com.adobe.marketing.mobile.ExtensionApi, param1: string, param2: string);
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
				export class GriffonListenerHubPlacesRequests {
					public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonListenerHubPlacesRequests>;
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
				export class GriffonListenerHubPlacesResponses {
					public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonListenerHubPlacesResponses>;
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
				export class GriffonListenerHubSharedStateUpdates {
					public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonListenerHubSharedStateUpdates>;
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
				export class GriffonListenerHubWildcard {
					public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonListenerHubWildcard>;
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
				export class GriffonPinCodeEntryURLProvider implements com.adobe.marketing.mobile.GriffonSessionURLProvider, com.adobe.marketing.mobile.GriffonFullScreenTakeover.FullScreenTakeoverCallbacks {
					public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonPinCodeEntryURLProvider>;
					public onConnectionFailed(param0: string): void;
					public onConnectionInitialized(): void;
					public onConnectionSucceeded(): void;
					public onDismiss(param0: com.adobe.marketing.mobile.GriffonFullScreenTakeover): void;
					public onShow(param0: com.adobe.marketing.mobile.GriffonFullScreenTakeover): void;
					public onURLTriggered(param0: string): boolean;
					public getAuthorizedSessionURL(param0: com.adobe.marketing.mobile.AuthorizedSessionURLCallback): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class GriffonPluginAnalytics extends com.adobe.marketing.mobile.Griffon.Plugin {
					public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonPluginAnalytics>;
					public onGriffonUIRemoved(): void;
					public onSessionConnected(): void;
					public onSessionDisconnected(param0: number): void;
					public getVendor(): string;
					public onEventReceived(param0: com.adobe.marketing.mobile.GriffonEvent): void;
					public onRegistered(param0: com.adobe.marketing.mobile.GriffonSession): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class GriffonPluginConfigSwitcher extends com.adobe.marketing.mobile.Griffon.Plugin {
					public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonPluginConfigSwitcher>;
					public onGriffonUIRemoved(): void;
					public onSessionConnected(): void;
					public onSessionDisconnected(param0: number): void;
					public getVendor(): string;
					public onEventReceived(param0: com.adobe.marketing.mobile.GriffonEvent): void;
					public onRegistered(param0: com.adobe.marketing.mobile.GriffonSession): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class GriffonPluginFakeEventGenerator extends com.adobe.marketing.mobile.Griffon.Plugin {
					public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonPluginFakeEventGenerator>;
					public onGriffonUIRemoved(): void;
					public onSessionConnected(): void;
					public onSessionDisconnected(param0: number): void;
					public getVendor(): string;
					public onEventReceived(param0: com.adobe.marketing.mobile.GriffonEvent): void;
					public onRegistered(param0: com.adobe.marketing.mobile.GriffonSession): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class GriffonPluginLocalStorageAccess extends com.adobe.marketing.mobile.Griffon.Plugin {
					public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonPluginLocalStorageAccess>;
					public onGriffonUIRemoved(): void;
					public onSessionConnected(): void;
					public onSessionDisconnected(param0: number): void;
					public getVendor(): string;
					public onEventReceived(param0: com.adobe.marketing.mobile.GriffonEvent): void;
					public onRegistered(param0: com.adobe.marketing.mobile.GriffonSession): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class GriffonPluginLogForwarder extends com.adobe.marketing.mobile.Griffon.Plugin {
					public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonPluginLogForwarder>;
					public onGriffonUIRemoved(): void;
					public onSessionConnected(): void;
					public onSessionDisconnected(param0: number): void;
					public getVendor(): string;
					public onEventReceived(param0: com.adobe.marketing.mobile.GriffonEvent): void;
					public onRegistered(param0: com.adobe.marketing.mobile.GriffonSession): void;
				}
				export module GriffonPluginLogForwarder {
					export class LogForwardThread {
						public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonPluginLogForwarder.LogForwardThread>;
						public run(): void;
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
				export class GriffonPluginScreenShotter extends com.adobe.marketing.mobile.Griffon.Plugin {
					public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonPluginScreenShotter>;
					public onGriffonUIRemoved(): void;
					public onSessionConnected(): void;
					public onSessionDisconnected(param0: number): void;
					public getVendor(): string;
					public onEventReceived(param0: com.adobe.marketing.mobile.GriffonEvent): void;
					public onRegistered(param0: com.adobe.marketing.mobile.GriffonSession): void;
				}
				export module GriffonPluginScreenShotter {
					export class CaptureScreenShotListener {
						public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonPluginScreenShotter.CaptureScreenShotListener>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.GriffonPluginScreenShotter$CaptureScreenShotListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCaptureScreenshot(param0: globalAndroid.graphics.Bitmap): void;
						});
						public constructor();
						public onCaptureScreenshot(param0: globalAndroid.graphics.Bitmap): void;
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
				export class GriffonSession extends com.adobe.marketing.mobile.GriffonWebViewSocketHandler {
					public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonSession>;
					public onSocketDataReceived(param0: com.adobe.marketing.mobile.GriffonWebViewSocket, param1: string): void;
					public onSocketDisconnected(param0: com.adobe.marketing.mobile.GriffonWebViewSocket, param1: string, param2: number): void;
					public onSocketConnected(param0: com.adobe.marketing.mobile.GriffonWebViewSocket): void;
					public onSocketStateChange(param0: com.adobe.marketing.mobile.GriffonWebViewSocket, param1: com.adobe.marketing.mobile.GriffonWebViewSocket.SocketReadyState): void;
				}
				export module GriffonSession {
					export class ApplicationLifecycleHandler {
						public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonSession.ApplicationLifecycleHandler>;
						public onActivityPaused(param0: globalAndroid.app.Activity): void;
						public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
						public onActivityStarted(param0: globalAndroid.app.Activity): void;
						public onActivityResumed(param0: globalAndroid.app.Activity): void;
						public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityStopped(param0: globalAndroid.app.Activity): void;
					}
					export class InboundEventWorker {
						public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonSession.InboundEventWorker>;
						public run(): void;
					}
					export class OutboundEventWorker {
						public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonSession.OutboundEventWorker>;
						public run(): void;
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
				export class GriffonSessionLifecycleListener {
					public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonSessionLifecycleListener>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.GriffonSessionLifecycleListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onActivityResumed(param0: globalAndroid.app.Activity): void;
						onActivityDestroyed(param0: globalAndroid.app.Activity): void;
					});
					public constructor();
					public onActivityResumed(param0: globalAndroid.app.Activity): void;
					public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class GriffonSessionURLProvider {
					public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonSessionURLProvider>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.GriffonSessionURLProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getAuthorizedSessionURL(param0: com.adobe.marketing.mobile.AuthorizedSessionURLCallback): void;
						onConnectionInitialized(): void;
						onConnectionSucceeded(): void;
						onConnectionFailed(param0: string): void;
					});
					public constructor();
					public onConnectionFailed(param0: string): void;
					public onConnectionInitialized(): void;
					public onConnectionSucceeded(): void;
					public getAuthorizedSessionURL(param0: com.adobe.marketing.mobile.AuthorizedSessionURLCallback): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class GriffonState {
					public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonState>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class GriffonUtil {
					public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonUtil>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class GriffonWebViewSocket {
					public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonWebViewSocket>;
				}
				export module GriffonWebViewSocket {
					export class SocketReadyState {
						public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonWebViewSocket.SocketReadyState>;
						public static CONNECTING: com.adobe.marketing.mobile.GriffonWebViewSocket.SocketReadyState;
						public static OPEN: com.adobe.marketing.mobile.GriffonWebViewSocket.SocketReadyState;
						public static CLOSING: com.adobe.marketing.mobile.GriffonWebViewSocket.SocketReadyState;
						public static CLOSED: com.adobe.marketing.mobile.GriffonWebViewSocket.SocketReadyState;
						public static UNKNOWN: com.adobe.marketing.mobile.GriffonWebViewSocket.SocketReadyState;
						public static values(): native.Array<com.adobe.marketing.mobile.GriffonWebViewSocket.SocketReadyState>;
						public static valueOf(param0: string): com.adobe.marketing.mobile.GriffonWebViewSocket.SocketReadyState;
					}
					export class WebViewJavascriptInterface {
						public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonWebViewSocket.WebViewJavascriptInterface>;
						public onSocketClosed(param0: string, param1: number, param2: boolean): void;
						public log(param0: string): void;
						public onSocketError(param0: string): void;
						public onMessageReceived(param0: string): void;
						public onSocketOpened(): void;
					}
					export class WebViewSocketClient {
						public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonWebViewSocket.WebViewSocketClient>;
						public onReceivedError(param0: globalAndroid.webkit.WebView, param1: globalAndroid.webkit.WebResourceRequest, param2: globalAndroid.webkit.WebResourceError): void;
						public onPageFinished(param0: globalAndroid.webkit.WebView, param1: string): void;
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
				export class GriffonWebViewSocketHandler {
					public static class: java.lang.Class<com.adobe.marketing.mobile.GriffonWebViewSocketHandler>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.GriffonWebViewSocketHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSocketDataReceived(param0: com.adobe.marketing.mobile.GriffonWebViewSocket, param1: string): void;
						onSocketConnected(param0: com.adobe.marketing.mobile.GriffonWebViewSocket): void;
						onSocketDisconnected(param0: com.adobe.marketing.mobile.GriffonWebViewSocket, param1: string, param2: number): void;
						onSocketStateChange(param0: com.adobe.marketing.mobile.GriffonWebViewSocket, param1: com.adobe.marketing.mobile.GriffonWebViewSocket.SocketReadyState): void;
					});
					public constructor();
					public onSocketDataReceived(param0: com.adobe.marketing.mobile.GriffonWebViewSocket, param1: string): void;
					public onSocketDisconnected(param0: com.adobe.marketing.mobile.GriffonWebViewSocket, param1: string, param2: number): void;
					public onSocketConnected(param0: com.adobe.marketing.mobile.GriffonWebViewSocket): void;
					public onSocketStateChange(param0: com.adobe.marketing.mobile.GriffonWebViewSocket, param1: com.adobe.marketing.mobile.GriffonWebViewSocket.SocketReadyState): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export module griffon {
					export class BuildConfig {
						public static class: java.lang.Class<com.adobe.marketing.mobile.griffon.BuildConfig>;
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

