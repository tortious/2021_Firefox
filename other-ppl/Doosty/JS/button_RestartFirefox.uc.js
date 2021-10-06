Components.utils.import("resource:///modules/CustomizableUI.jsm");
var {Services} = Components.utils.import("resource://gre/modules/Services.jsm", {});
var sss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);

(function(){

let widgetId = "restart-button";

let listener = {
    onWidgetCreated: function(aWidgetId, aArea) {
        if (aWidgetId != widgetId)
            return;

        if(listener.css !== undefined)
            sss.unregisterSheet(listener.css, sss.AGENT_SHEET);

        listener.css = Services.io.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
#' + aWidgetId + '{\
list-style-image: url("chrome://browser/skin/sync.svg");\
}\
'), null, null);

        sss.loadAndRegisterSheet(listener.css, sss.AGENT_SHEET);
    }
}

CustomizableUI.addListener(listener);
CustomizableUI.createWidget({
    id: widgetId,
    type: "button",
    defaultArea: CustomizableUI.AREA_BOOKMARKS,
    label: "Restart Firefox",
    tooltiptext: "Restart browser (with middle click userChrome.js cache is also emptied)",
    class: 'toolbarbutton-1 chromeclass-toolbar-additional',
    onClick: (event) => {
      if(event.button == 1)
          Services.appinfo.invalidateCachesOnRestart();
      else if(event.button == 2)
          return;

      let cancelQuit = Cc["@mozilla.org/supports-PRBool;1"].createInstance(Ci.nsISupportsPRBool);
      Services.obs.notifyObservers(cancelQuit, "quit-application-requested", "restart");
      if(!cancelQuit.data)
          Services.startup.quit(Services.startup.eAttemptQuit | Services.startup.eRestart);
    }
});
})();

