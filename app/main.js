System.register(['angular2/platform/browser', './app.components'], function(exports_1) {
    var browser_1, app_components_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_components_1_1) {
                app_components_1 = app_components_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_components_1.AppComponent);
        }
    }
});
//# sourceMappingURL=main.js.map