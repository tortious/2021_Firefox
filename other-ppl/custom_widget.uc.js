// ==UserScript==
// @name           CustomWidget.uc.js
// @description    Add custom widget to Firefox.
// @charset        UTF-8
// @history        2020-12-30  Added support for Firefox 84.
// @homepageURL    https://github.com/nonoroazoro/firefox/tree/master/userchrome/quantum
// ==/UserScript==

// Add widget.
Common.createWidget("CustomWidget", "小组件", "小组件", CustomizableUI.AREA_NAVBAR, (node) =>
{
    // node.setAttribute("oncommand", "func();");
});

// Custom styles.
Common.loadCSS(`
@-moz-document url("chrome://browser/content/browser.xul"), url(chrome://browser/content/browser.xhtml) {
    #CustomWidget .toolbarbutton-icon {
        list-style-image: url(data:image/png;base64,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);
    }
}`);