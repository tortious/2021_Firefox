Dblclick_pin_unpin_tab.uc.// ==UserScript==
// @name                dav_DoubleClickOnTab_PinUnpin
// @author          	dav
// @version             1.0
// @description         dav_DoubleClickOnTab_PinUnpin
// ==/UserScript==

(function() {
	try{
		var getTab = function(nodo){
			if(!nodo || nodo.nodeName == "tab")
			{
				return nodo;
			}

			return getTab(nodo.parentNode);
		}
		var pinUnpinTab = function(e) {
			var tab = getTab(e.target);
			if(tab)
			{
				if(tab.getAttribute("pinned") == "true")
				{
					gBrowser.unpinTab(tab);
				}
				else
				{
					gBrowser.pinTab(tab);
				}
			}
		}

		gBrowser.tabContainer.addEventListener('dblclick', pinUnpinTab, true);
		window.addEventListener('unload', function uninit() {
			gBrowser.tabContainer.removeEventListener('dblclick', pinUnpinTab, true);
			window.removeEventListener('unload', uninit, false);
		}, false);
	} catch(e){
		console.error("dav_DoubleClickOnTab_PinUnpin",e);
	}
})();
