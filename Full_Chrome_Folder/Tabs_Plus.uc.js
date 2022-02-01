// ==UserScript==
// @name           TabPlus.uc.js
// @description    Enhance the Tabs.
// @charset        UTF-8
// @history        2020-12-30  Added support for Firefox 84.
// @homepageURL    https://github.com/nonoroazoro/firefox/tree/master/userchrome/quantum
// @include        chrome://browser/content/browser.xhtml
// @include        chrome://browser/content/browser.xul
// ==/UserScript==

const TabPlus = {
    activate()
    {
        // Double click to close the tab.
        gBrowser.tabContainer.addEventListener("dblclick", this._handleTabDoubleClick);

        // Open left tab after the current tab is closed.
        gBrowser.tabContainer.addEventListener("TabClose", this._handleTabClose);

        this.viewImageInNewTab();
    },

    deactivate()
    {
        gBrowser.tabContainer.removeEventListener("dblclick", this._handleTabDoubleClick);
        gBrowser.tabContainer.removeEventListener("TabClose", this._handleTabClose);
    },

    /*
     * View image in new tab.
     */
    viewImageInNewTab()
    {
        document.getElementById("context-viewimage")
            .setAttribute("oncommand", `openTrustedLinkIn(gContextMenu.imageURL, "tab")`);
    },

    _handleTabDoubleClick(e)
    {
        if (e.button == 0 & !e.ctrlKey)
        {
            const tab = e.target.closest(".tabbrowser-tab");
            if (tab)
            {
                gBrowser.removeTab(tab, { animate: true });
            }
        }
    },

    _handleTabClose(e)
    {
        const leftTab = e.target.previousSibling;
        if (leftTab)
        {
            gBrowser.selectedTab = leftTab;
        }
    }
};

Common.register(TabPlus);