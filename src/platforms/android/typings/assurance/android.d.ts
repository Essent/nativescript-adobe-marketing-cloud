/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class Assurance {
					public static class: java.lang.Class<com.adobe.marketing.mobile.Assurance>;
					public static extensionVersion(): string;
					public constructor();
					public static registerExtension(): boolean;
					public static startSession(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AssuranceBlob {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceBlob>;
				}
				export module AssuranceBlob {
					export class BlobUploadCallback {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceBlob.BlobUploadCallback>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.AssuranceBlob$BlobUploadCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: string): void;
							onFailure(param0: string): void;
						});
						public constructor();
						public onFailure(param0: string): void;
						public onSuccess(param0: string): void;
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
				export class AssuranceClientInfo {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceClientInfo>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AssuranceConnectionStatusUI extends com.adobe.marketing.mobile.AssuranceFullScreenTakeover.FullScreenTakeoverCallbacks {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceConnectionStatusUI>;
					public onDismiss(param0: com.adobe.marketing.mobile.AssuranceFullScreenTakeover): void;
					public onShow(param0: com.adobe.marketing.mobile.AssuranceFullScreenTakeover): void;
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
				export class AssuranceConstants {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceConstants>;
				}
				export module AssuranceConstants {
					export class AssuranceEnvironment {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceConstants.AssuranceEnvironment>;
						public static PROD: com.adobe.marketing.mobile.AssuranceConstants.AssuranceEnvironment;
						public static STAGE: com.adobe.marketing.mobile.AssuranceConstants.AssuranceEnvironment;
						public static QA: com.adobe.marketing.mobile.AssuranceConstants.AssuranceEnvironment;
						public static DEV: com.adobe.marketing.mobile.AssuranceConstants.AssuranceEnvironment;
						public static values(): native.Array<com.adobe.marketing.mobile.AssuranceConstants.AssuranceEnvironment>;
						public static valueOf(param0: string): com.adobe.marketing.mobile.AssuranceConstants.AssuranceEnvironment;
						public stringValue(): string;
						public static get(param0: string): com.adobe.marketing.mobile.AssuranceConstants.AssuranceEnvironment;
					}
					export class AssuranceEventKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceConstants.AssuranceEventKeys>;
					}
					export class AssuranceEventType {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceConstants.AssuranceEventType>;
					}
					export class AssuranceSocketError {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceConstants.AssuranceSocketError>;
						public static GENERIC_ERROR: com.adobe.marketing.mobile.AssuranceConstants.AssuranceSocketError;
						public static NO_ORGID: com.adobe.marketing.mobile.AssuranceConstants.AssuranceSocketError;
						public static ORGID_MISMATCH: com.adobe.marketing.mobile.AssuranceConstants.AssuranceSocketError;
						public static CONNECTION_LIMIT: com.adobe.marketing.mobile.AssuranceConstants.AssuranceSocketError;
						public static EVENT_LIMIT: com.adobe.marketing.mobile.AssuranceConstants.AssuranceSocketError;
						public static CLIENT_ERROR: com.adobe.marketing.mobile.AssuranceConstants.AssuranceSocketError;
						public static values(): native.Array<com.adobe.marketing.mobile.AssuranceConstants.AssuranceSocketError>;
						public static valueOf(param0: string): com.adobe.marketing.mobile.AssuranceConstants.AssuranceSocketError;
						public toString(): string;
					}
					export class BlobKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceConstants.BlobKeys>;
					}
					export class ClientInfoKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceConstants.ClientInfoKeys>;
					}
					export class ControlType {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceConstants.ControlType>;
					}
					export class DataStoreKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceConstants.DataStoreKeys>;
					}
					export class DeeplinkURLKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceConstants.DeeplinkURLKeys>;
					}
					export class GenericEventPayloadKey {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceConstants.GenericEventPayloadKey>;
					}
					export class IntentExtraKey {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceConstants.IntentExtraKey>;
					}
					export class PayloadDataKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceConstants.PayloadDataKeys>;
					}
					export class SDKConfigurationKey {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceConstants.SDKConfigurationKey>;
					}
					export class SDKEventDataKey {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceConstants.SDKEventDataKey>;
					}
					export class SDKEventName {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceConstants.SDKEventName>;
					}
					export class SDKEventType {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceConstants.SDKEventType>;
					}
					export class SDKSharedStateName {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceConstants.SDKSharedStateName>;
					}
					export class SharedStateKeys {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceConstants.SharedStateKeys>;
					}
					export class SocketCloseCode {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceConstants.SocketCloseCode>;
					}
					export class UILogColorVisibility {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceConstants.UILogColorVisibility>;
						public static LOW: com.adobe.marketing.mobile.AssuranceConstants.UILogColorVisibility;
						public static NORMAL: com.adobe.marketing.mobile.AssuranceConstants.UILogColorVisibility;
						public static HIGH: com.adobe.marketing.mobile.AssuranceConstants.UILogColorVisibility;
						public static CRITICAL: com.adobe.marketing.mobile.AssuranceConstants.UILogColorVisibility;
						public static values(): native.Array<com.adobe.marketing.mobile.AssuranceConstants.UILogColorVisibility>;
						public static valueOf(param0: string): com.adobe.marketing.mobile.AssuranceConstants.UILogColorVisibility;
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
				export class AssuranceErrorDisplayActivity {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceErrorDisplayActivity>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AssuranceEvent {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceEvent>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AssuranceExtension {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceExtension>;
					public getVersion(): string;
					public getName(): string;
					public onUnregistered(): void;
					public onUnexpectedError(param0: com.adobe.marketing.mobile.ExtensionUnexpectedError): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AssuranceFloatingButton extends com.adobe.marketing.mobile.AssuranceSessionLifecycleListener {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceFloatingButton>;
					public getCurrentGraphic(): com.adobe.marketing.mobile.AssuranceFloatingButtonView.Graphic;
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
				export class AssuranceFloatingButtonView {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceFloatingButtonView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setGraphic(param0: com.adobe.marketing.mobile.AssuranceFloatingButtonView.Graphic): void;
					public setOnPositionChangedListener(param0: com.adobe.marketing.mobile.AssuranceFloatingButtonView.OnPositionChangedListener): void;
					public setPosition(param0: number, param1: number): void;
					public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
				export module AssuranceFloatingButtonView {
					export class Graphic {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceFloatingButtonView.Graphic>;
						public static CONNECTED: com.adobe.marketing.mobile.AssuranceFloatingButtonView.Graphic;
						public static DISCONNECTED: com.adobe.marketing.mobile.AssuranceFloatingButtonView.Graphic;
						public static values(): native.Array<com.adobe.marketing.mobile.AssuranceFloatingButtonView.Graphic>;
						public static valueOf(param0: string): com.adobe.marketing.mobile.AssuranceFloatingButtonView.Graphic;
					}
					export class OnPositionChangedListener {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceFloatingButtonView.OnPositionChangedListener>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.AssuranceFloatingButtonView$OnPositionChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export class AssuranceFullScreenTakeover {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceFullScreenTakeover>;
				}
				export module AssuranceFullScreenTakeover {
					export class FullScreenTakeoverCallbacks {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceFullScreenTakeover.FullScreenTakeoverCallbacks>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.AssuranceFullScreenTakeover$FullScreenTakeoverCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onURLTriggered(param0: string): boolean;
							onShow(param0: com.adobe.marketing.mobile.AssuranceFullScreenTakeover): void;
							onDismiss(param0: com.adobe.marketing.mobile.AssuranceFullScreenTakeover): void;
						});
						public constructor();
						public onShow(param0: com.adobe.marketing.mobile.AssuranceFullScreenTakeover): void;
						public onURLTriggered(param0: string): boolean;
						public onDismiss(param0: com.adobe.marketing.mobile.AssuranceFullScreenTakeover): void;
					}
					export class MessageFullScreenRunner {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceFullScreenTakeover.MessageFullScreenRunner>;
						public run(): void;
					}
					export class MessageFullScreenWebViewClient {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceFullScreenTakeover.MessageFullScreenWebViewClient>;
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
				export class AssuranceFullScreenTakeoverActivity {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceFullScreenTakeoverActivity>;
					public static weakFullScreenTakeoverReference: java.lang.ref.WeakReference<com.adobe.marketing.mobile.AssuranceFullScreenTakeover>;
					public static isDisplayed: boolean;
					public static setFullscreenMessage(param0: com.adobe.marketing.mobile.AssuranceFullScreenTakeover): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
					public onBackPressed(): void;
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
				export class AssuranceIOUtils {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceIOUtils>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AssuranceListenerAssuranceRequestContent {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceListenerAssuranceRequestContent>;
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
				export class AssuranceListenerHubPlacesRequests {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceListenerHubPlacesRequests>;
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
				export class AssuranceListenerHubPlacesResponses {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceListenerHubPlacesResponses>;
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
				export class AssuranceListenerHubWildcard {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceListenerHubWildcard>;
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
				export class AssurancePinCodeEntryURLProvider implements com.adobe.marketing.mobile.AssuranceSessionURLProvider, com.adobe.marketing.mobile.AssuranceFullScreenTakeover.FullScreenTakeoverCallbacks {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssurancePinCodeEntryURLProvider>;
					public onDismiss(param0: com.adobe.marketing.mobile.AssuranceFullScreenTakeover): void;
					public onShow(param0: com.adobe.marketing.mobile.AssuranceFullScreenTakeover): void;
					public onConnectionInitialized(): void;
					public onConnectionSucceeded(): void;
					public isDisplayed(): boolean;
					public onURLTriggered(param0: string): boolean;
					public getAuthorizedSessionURL(param0: com.adobe.marketing.mobile.AuthorizedSessionURLCallback): void;
					public onConnectionFailed(param0: com.adobe.marketing.mobile.AssuranceConstants.AssuranceSocketError, param1: boolean): void;
					public onConnectionFinished(): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AssurancePlugin {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssurancePlugin>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.AssurancePlugin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getVendor(): string;
						getControlType(): string;
						onEventReceived(param0: com.adobe.marketing.mobile.AssuranceEvent): void;
						onRegistered(param0: com.adobe.marketing.mobile.AssuranceSession): void;
						onSessionConnected(): void;
						onSessionDisconnected(param0: number): void;
						onSessionTerminated(): void;
					});
					public constructor();
					public getControlType(): string;
					public onEventReceived(param0: com.adobe.marketing.mobile.AssuranceEvent): void;
					public onSessionConnected(): void;
					public onSessionDisconnected(param0: number): void;
					public onRegistered(param0: com.adobe.marketing.mobile.AssuranceSession): void;
					public getVendor(): string;
					public onSessionTerminated(): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AssurancePluginConfigSwitcher extends com.adobe.marketing.mobile.AssurancePlugin {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssurancePluginConfigSwitcher>;
					public getControlType(): string;
					public onEventReceived(param0: com.adobe.marketing.mobile.AssuranceEvent): void;
					public onSessionConnected(): void;
					public onSessionDisconnected(param0: number): void;
					public onRegistered(param0: com.adobe.marketing.mobile.AssuranceSession): void;
					public getVendor(): string;
					public onSessionTerminated(): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AssurancePluginFakeEventGenerator extends com.adobe.marketing.mobile.AssurancePlugin {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssurancePluginFakeEventGenerator>;
					public getControlType(): string;
					public onEventReceived(param0: com.adobe.marketing.mobile.AssuranceEvent): void;
					public onSessionConnected(): void;
					public onSessionDisconnected(param0: number): void;
					public onRegistered(param0: com.adobe.marketing.mobile.AssuranceSession): void;
					public getVendor(): string;
					public onSessionTerminated(): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AssurancePluginLogForwarder extends com.adobe.marketing.mobile.AssurancePlugin {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssurancePluginLogForwarder>;
					public getControlType(): string;
					public onEventReceived(param0: com.adobe.marketing.mobile.AssuranceEvent): void;
					public onSessionConnected(): void;
					public onSessionDisconnected(param0: number): void;
					public onRegistered(param0: com.adobe.marketing.mobile.AssuranceSession): void;
					public getVendor(): string;
					public onSessionTerminated(): void;
				}
				export module AssurancePluginLogForwarder {
					export class LogForwardThread {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssurancePluginLogForwarder.LogForwardThread>;
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
				export class AssurancePluginScreenshot extends com.adobe.marketing.mobile.AssurancePlugin {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssurancePluginScreenshot>;
					public getControlType(): string;
					public onEventReceived(param0: com.adobe.marketing.mobile.AssuranceEvent): void;
					public onSessionConnected(): void;
					public onSessionDisconnected(param0: number): void;
					public onRegistered(param0: com.adobe.marketing.mobile.AssuranceSession): void;
					public getVendor(): string;
					public onSessionTerminated(): void;
				}
				export module AssurancePluginScreenshot {
					export class CaptureScreenShotListener {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssurancePluginScreenshot.CaptureScreenShotListener>;
						/**
						 * Constructs a new instance of the com.adobe.marketing.mobile.AssurancePluginScreenshot$CaptureScreenShotListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export class AssuranceSession extends com.adobe.marketing.mobile.AssuranceWebViewSocketHandler {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceSession>;
					public onSocketError(param0: com.adobe.marketing.mobile.AssuranceWebViewSocket): void;
					public onSocketDisconnected(param0: com.adobe.marketing.mobile.AssuranceWebViewSocket, param1: string, param2: number, param3: boolean): void;
					public onSocketStateChange(param0: com.adobe.marketing.mobile.AssuranceWebViewSocket, param1: com.adobe.marketing.mobile.AssuranceWebViewSocket.SocketReadyState): void;
					public onSocketDataReceived(param0: com.adobe.marketing.mobile.AssuranceWebViewSocket, param1: string): void;
					public onSocketConnected(param0: com.adobe.marketing.mobile.AssuranceWebViewSocket): void;
				}
				export module AssuranceSession {
					export class ApplicationLifecycleHandler {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceSession.ApplicationLifecycleHandler>;
						public onActivityPaused(param0: globalAndroid.app.Activity): void;
						public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
						public onActivityStarted(param0: globalAndroid.app.Activity): void;
						public onActivityResumed(param0: globalAndroid.app.Activity): void;
						public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityStopped(param0: globalAndroid.app.Activity): void;
					}
					export class InboundEventWorker {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceSession.InboundEventWorker>;
						public run(): void;
					}
					export class OutboundEventWorker {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceSession.OutboundEventWorker>;
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
				export class AssuranceSessionLifecycleListener {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceSessionLifecycleListener>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.AssuranceSessionLifecycleListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export class AssuranceSessionURLProvider {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceSessionURLProvider>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.AssuranceSessionURLProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getAuthorizedSessionURL(param0: com.adobe.marketing.mobile.AuthorizedSessionURLCallback): void;
						onConnectionInitialized(): void;
						onConnectionSucceeded(): void;
						onConnectionFinished(): void;
						onConnectionFailed(param0: com.adobe.marketing.mobile.AssuranceConstants.AssuranceSocketError, param1: boolean): void;
						isDisplayed(): boolean;
					});
					public constructor();
					public onConnectionInitialized(): void;
					public onConnectionSucceeded(): void;
					public isDisplayed(): boolean;
					public getAuthorizedSessionURL(param0: com.adobe.marketing.mobile.AuthorizedSessionURLCallback): void;
					public onConnectionFailed(param0: com.adobe.marketing.mobile.AssuranceConstants.AssuranceSocketError, param1: boolean): void;
					public onConnectionFinished(): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AssuranceState {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceState>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AssuranceUtil {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceUtil>;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export class AssuranceWebViewSocket {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceWebViewSocket>;
				}
				export module AssuranceWebViewSocket {
					export class SocketReadyState {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceWebViewSocket.SocketReadyState>;
						public static CONNECTING: com.adobe.marketing.mobile.AssuranceWebViewSocket.SocketReadyState;
						public static OPEN: com.adobe.marketing.mobile.AssuranceWebViewSocket.SocketReadyState;
						public static CLOSING: com.adobe.marketing.mobile.AssuranceWebViewSocket.SocketReadyState;
						public static CLOSED: com.adobe.marketing.mobile.AssuranceWebViewSocket.SocketReadyState;
						public static UNKNOWN: com.adobe.marketing.mobile.AssuranceWebViewSocket.SocketReadyState;
						public static valueOf(param0: string): com.adobe.marketing.mobile.AssuranceWebViewSocket.SocketReadyState;
						public static values(): native.Array<com.adobe.marketing.mobile.AssuranceWebViewSocket.SocketReadyState>;
					}
					export class WebViewJavascriptInterface {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceWebViewSocket.WebViewJavascriptInterface>;
						public onSocketClosed(param0: string, param1: number, param2: boolean): void;
						public log(param0: string): void;
						public onSocketError(): void;
						public onMessageReceived(param0: string): void;
						public onSocketOpened(): void;
					}
					export class WebViewSocketClient {
						public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceWebViewSocket.WebViewSocketClient>;
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
				export class AssuranceWebViewSocketHandler {
					public static class: java.lang.Class<com.adobe.marketing.mobile.AssuranceWebViewSocketHandler>;
					/**
					 * Constructs a new instance of the com.adobe.marketing.mobile.AssuranceWebViewSocketHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSocketDataReceived(param0: com.adobe.marketing.mobile.AssuranceWebViewSocket, param1: string): void;
						onSocketConnected(param0: com.adobe.marketing.mobile.AssuranceWebViewSocket): void;
						onSocketDisconnected(param0: com.adobe.marketing.mobile.AssuranceWebViewSocket, param1: string, param2: number, param3: boolean): void;
						onSocketError(param0: com.adobe.marketing.mobile.AssuranceWebViewSocket): void;
						onSocketStateChange(param0: com.adobe.marketing.mobile.AssuranceWebViewSocket, param1: com.adobe.marketing.mobile.AssuranceWebViewSocket.SocketReadyState): void;
					});
					public constructor();
					public onSocketError(param0: com.adobe.marketing.mobile.AssuranceWebViewSocket): void;
					public onSocketDisconnected(param0: com.adobe.marketing.mobile.AssuranceWebViewSocket, param1: string, param2: number, param3: boolean): void;
					public onSocketStateChange(param0: com.adobe.marketing.mobile.AssuranceWebViewSocket, param1: com.adobe.marketing.mobile.AssuranceWebViewSocket.SocketReadyState): void;
					public onSocketDataReceived(param0: com.adobe.marketing.mobile.AssuranceWebViewSocket, param1: string): void;
					public onSocketConnected(param0: com.adobe.marketing.mobile.AssuranceWebViewSocket): void;
				}
			}
		}
	}
}

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
						run(param0: string, param1: com.adobe.marketing.mobile.AssuranceConstants.AssuranceEnvironment): void;
					});
					public constructor();
					public run(param0: string, param1: com.adobe.marketing.mobile.AssuranceConstants.AssuranceEnvironment): void;
				}
			}
		}
	}
}

declare module com {
	export module adobe {
		export module marketing {
			export module mobile {
				export module assurance {
					export class BuildConfig {
						public static class: java.lang.Class<com.adobe.marketing.mobile.assurance.BuildConfig>;
						public static DEBUG: boolean;
						public static APPLICATION_ID: string;
						public static BUILD_TYPE: string;
						public static FLAVOR: string;
						public static VERSION_CODE: number;
						public static VERSION_NAME: string;
						public static EXTENSION_VERSION: string;
						public constructor();
					}
				}
			}
		}
	}
}

//Generics information:

