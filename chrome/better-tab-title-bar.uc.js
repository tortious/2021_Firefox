//Create a new custom toolbaritem, that has titlebar text displayed on it.
//If you're still not sure what it does check out the below.
//https://imgur.com/sXZrBMb
//https://imgur.com/a/GHvgjzu

(function() {
    if (location != "chrome://browser/content/browser.xhtml") {
        return;
    }
    let the_target = document.getElementsByTagName('title')[0];
    let the_title = the_target.textContent;
    try {
        CustomizableUI.createWidget({
            id: "pagetitle-bar",
            type: "custom",
            defaultArea: CustomizableUI.AREA_NAVBAR,
            onBuild: function(aDocument) {
                const toolbaritem = aDocument.createXULElement("toolbaritem");
                const image = aDocument.createXULElement("image");
                image.setAttribute("src", "chrome://branding/content/icon16.png");
                image.id = "pagetitle-bar-image";
                const props = {
                    id: "pagetitle-bar",
                    class: "chromeclass-toolbar-additional",
                    titlepage: the_title,
                    tooltiptext: the_title,
                    pack: "center",
                    align: "center",
                    label: "Page Title Bar"
                };
                Object.entries(props).forEach(
                    ([key, value]) => toolbaritem.setAttribute(key, value)
                );
                toolbaritem.appendChild(image);
                return toolbaritem;
            }
        });
    } catch (e) {}

    function setPageTitle() {
        if (document.getElementById("pagetitle-bar") === null) {
            return;
        }
        const pageTitleBar = document.getElementById("pagetitle-bar");

        let pageTitle = document.title;
        // remove the - Mozilla Firefox *** at the end of the title, comment out the lines below if you don't want it
        const index = pageTitle.lastIndexOf(" - ");
        if (index !== -1) {
          pageTitle = pageTitle.substr(0, index);
        }
        
        pageTitleBar.setAttribute("titlepage", pageTitle);
        pageTitleBar.setAttribute("tooltiptext", pageTitle);
    };
    const observer = new MutationObserver(setPageTitle);
    observer.observe(the_target, {
        attributes: true, // attribute changes will be observed | on add/remove/change attributes
        attributeOldValue: true, // will show oldValue of attribute | on add/remove/change attributes | default: null
        characterData: true, // data changes will be observed | on add/remove/change characterData
        characterDataOldValue: true, // will show OldValue of characterData | on add/remove/change characterData | default: null
        childList: true, // target childs will be observed | on add/remove
        subtree: true, // target childs will be observed | on attributes/characterData changes if they observed on target
        /*
        attributeFilter: ['style'] // filter for attributes | array of attributes that should be observed, in this case only style
        */
    });

    const css = `
/* Movable titlebar */
:root {
--pagetitle-bar-width: 400px;
}
#main-window:not([customizing]) #pagetitle-bar {
-moz-window-dragging: drag;
background: transparent;
width: var(--pagetitle-bar-width);
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
margin: 0 10px;
}
#main-window:not([customizing]) #pagetitle-bar::after {
-moz-window-dragging: no-drag;
content: attr(titlepage);
}
#main-window:not([customizing]) #pagetitle-bar-image {
display:none;
}
toolbarpaletteitem[place="palette"] > #pagetitle-bar {
width: 7em;
min-width: 7em;
outline: 1px solid;
outline-offset: -8px;
opacity: .6;
height: 10px;
}
#main-window[customizing] #nav-bar #pagetitle-bar {
width: var(--pagetitle-bar-width);
margin: 0 10px;
}
#main-window[customizing] #nav-bar #pagetitle-bar-image {
display:none;
}
#main-window[customizing] #nav-bar #pagetitle-bar::after {
content: "Page Title Bar";
}`;

    const sss = Cc["@mozilla.org/content/style-sheet-service;1"].getService(Ci.nsIStyleSheetService);
    const uri = makeURI("data:text/css;charset=UTF=8," + encodeURIComponent(css));
    sss.loadAndRegisterSheet(uri, sss.AGENT_SHEET);
}());