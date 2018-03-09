var AdobeAnalytics = require("nativescript-adobe-marketing-cloud").AdobeAnalytics;

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("getInstance", function () {
	it("exists", function () {
		expect(AdobeAnalytics.getInstance).toBeDefined();
	});

	it("returns a instance", function () {
		expect(AdobeAnalytics.getInstance()).toEqual(jasmine.any(AdobeAnalytics));
	});

	it("track without additional", function () {
		expect(() => {
			AdobeAnalytics.getInstance().trackAction("help");
		}).not.toThrow();
	});

	it("track with additional", function () {
		expect(() => {
			AdobeAnalytics.getInstance().trackAction("help", {
				"ActionData": "ThisIsActionData"
			});
		}).not.toThrow();
	});
});
