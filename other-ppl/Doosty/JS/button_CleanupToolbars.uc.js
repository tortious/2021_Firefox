Components.utils.import("resource:///modules/CustomizableUI.jsm");
var {Services} = Components.utils.import("resource://gre/modules/Services.jsm", {});
var sss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);

(function(){
let widgetId = "cleanupToolbars-button";

let listener = {
    onWidgetCreated: function(aWidgetId, aArea) {
        if (aWidgetId != widgetId)
            return;

        if(listener.css !== undefined)
            sss.unregisterSheet(listener.css, sss.AGENT_SHEET);

        listener.css = Services.io.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
#' + aWidgetId + '{\
list-style-image: url("chrome://global/skin/icons/delete.svg");\
}\
'), null, null);

        sss.loadAndRegisterSheet(listener.css, sss.AGENT_SHEET);
    }
}



CustomizableUI.addListener(listener);
CustomizableUI.createWidget({
    id: widgetId,
    type: "button",
    defaultArea: CustomizableUI.AREA_NAVBAR,
    label: "Cleanup toolbars",
    tooltiptext: '- Left clicking will kick most items off your toolbars and put them either in Overflow menu or Customize toolbars view. (recommended option) \n- Middle clicking will reset ALL removable items to Customize view.',
    onClick: (event) => {

        let doNotRemoveThese = [
          "downloads-button",
          "wrapper-downloads-button",
          "movable-PanelUI-button",
          "wrapper-movable-PanelUI-button",
          "movable-overflow-button",
          "wrapper-movable-overflow-button",
          "personal-bookmarks",
          "wrapper-personal-bookmarks",
          "minMaxClose-button",
          "wrapper-minMaxClose-button",
          "back-button",
          "forward-button",
          "wrapper-back-button",
          "wrapper-forward-button",
        ]

        let removableElements = document.querySelectorAll('[removable="true"] , toolbarspring');
        for (const element of removableElements) {
          if (event.button == 0) { //left click
            if (doNotRemoveThese.indexOf(element.id) >= 0) {
              //do nothing for items in doNotRemoveThese array
              console.log("DoNothing: " + element.id);
            }
            else if (element.attributes["widget-id"]) {
              //this is an addon or an addon like firefox button, so put it into the Overflow Menu for convenience
              console.log("Overflow: " + element.id);
              gCustomizeMode.addToPanel(element);
            }
             else {
              //kick others out of toolbars, they can still be found in mode "Customize Toolbar"
              console.log("Removed: " + element.id);
              gCustomizeMode.removeFromArea(element);
            }
          }
          else if(event.button == 1){ //middle click
            //remove ALL removable items, except essential & buggy ones
            let doNotRemoveThese2 = [
          "downloads-button",
          
          "personal-bookmarks",
          "wrapper-personal-bookmarks",
          
          "back-button",
          "wrapper-back-button",
          
          "forward-button",
          "wrapper-forward-button",
        ]
        if (doNotRemoveThese2.indexOf(element.id) >= 0){
        }else{
			console.log("Middle click Removed: " + element.id);
			gCustomizeMode.removeFromArea(element);
        }

          }
        }
        
        
            
        gCustomizeMode.enter();


// set up the mutation observer
var observer = new MutationObserver(function (mutations, me) {
  // `mutations` is an array of mutations that occurred
  // `me` is the MutationObserver instance
  var urlbarcontainer = document.getElementById('wrapper-urlbar-container');
  var forwardbutton = document.getElementById('wrapper-forward-button');
  var backbutton = document.getElementById('wrapper-back-button');
  if (urlbarcontainer && forwardbutton && backbutton) {
    handleCanvas(urlbarcontainer, forwardbutton, backbutton);
    me.disconnect(); // stop observing
    return;
  }
});

// start observing
observer.observe(document, {
  childList: true,
  subtree: true
});
        // callback executed when canvas was found
function handleCanvas(urlbarcontainer, backbutton, forwardbutton) {

        urlbarcontainer.before(forwardbutton);
        urlbarcontainer.before(backbutton);
        
        gCustomizeMode.addToToolbar(forwardbutton);
        gCustomizeMode.addToToolbar(backbutton);
}


    }
});
})();

/* gCustomizeMode.removeFromArea */
/* gCustomizeMode.isCustomizableItem */
/* gCustomizeMode.isWrappedToolbarItem */ 

