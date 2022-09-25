var {Services} = Components.utils.import("resource://gre/modules/Services.jsm", {});

var OthersCustomizations = {
	init: async function() {
		
		await Services.search.wrappedJSObject.init();

		///
		/// Move Back and Forward button to personal toolbar
		///

		var perso_bar = document.getElementById('PersonalToolbar');
		var back_button = document.getElementById('back-button');
		var fwd_button = document.getElementById('forward-button');

		try {
			if(back_button != perso_bar.firstChild) {
				perso_bar.insertBefore(
					back_button,
					perso_bar.firstChild
				);
			}
		}
		catch(e) {}

		try {
			if(back_button.nextSibling != fwd_button) {
				perso_bar.insertBefore(
					fwd_button,
					back_button.nextSibling
				);
			}
		}
		catch(e) {}
		
		///
		/// Change sidebar button text to Bookmarks
		///		
		
		try {
			document.getElementById('sidebar-button').label = "Marque-pages";
		}
		catch(e) {}
		
		///
		/// Change NoScript button label to shorter one
		///
		
		function NoscriptButtonMutationObserver(mutations,local_observer) {
			
		  local_observer.disconnect();
		  
		  if(mutations.length > 0) {
				if(mutations[0].target.getAttribute('label') != "NoScript") {
					mutations[0].target.setAttribute('label', "NoScript");
				}			  
		  }
		  
		  local_observer.observe(mutations[0].target, { attributes : true, attributeFilter : [ "label" ] });
		  
		}
		
		try {
			initiateNoScriptButtonSearchAndProcessing(0);	
		}
		catch(e) { console.log(e);}
		
		function initiateNoScriptButtonSearchAndProcessing(attemptsCount = 0) {
			
			let noscript_button = Array.from(document.getElementsByTagName('toolbarbutton')).find(elem => elem.getAttribute('label').includes('NoScript'));
			
			if(noscript_button == undefined) {
				if(attemptsCount < 20) {
					setTimeout(initiateNoScriptButtonSearchAndProcessing, 1000, attemptsCount+1);
				}
			}
			else {
				
				let mutationObserver = new MutationObserver(NoscriptButtonMutationObserver);
				
				if(noscript_button.getAttribute('label') != "NoScript") {
					noscript_button.setAttribute('label', "NoScript"); 
				}
				
				mutationObserver.observe(noscript_button, { attributes : true, attributeFilter : [ "label" ] });
				
			}
		}
		
		///
		/// Update login popup height (mainly for NationStates to prevent scrollbars
		///
		
		function PopupAutocompleteObservation(mutations, this_observer) {
			
			const popup_autocomplete = document.getElementById("PopupAutoComplete");
		
			if(popup_autocomplete.hasChildNodes()) {
			  
				this_observer.disconnect();
				
				setTimeout(function() {
				  
					let new_height = 4;
					let i = 0;
				
					while(i < popup_autocomplete.firstChild.children.length) {
						
						let item = popup_autocomplete.firstChild.children[i];
						
						if(!(item.getAttribute("collapsed") === "true") && item.scrollHeight > 0)
							new_height += item.scrollHeight;
						
						i++;
						
					}

					new_height = new_height + "px";

					if(popup_autocomplete.getAttribute("height") != new_height)
						popup_autocomplete.setAttribute("height", new_height);
				
					this_observer.observe(popup_autocomplete, { childList: true, subtree: true, attributes: true, attributeFilter : [ "collapsed" ] });
					
				}, 0);
			
			}
			else {
				popup_autocomplete.removeAttribute("height");
			}
			
		}
		
		try {
			const popup_autocomplete_observer = new MutationObserver(PopupAutocompleteObservation);
			popup_autocomplete_observer.observe(document.getElementById("PopupAutoComplete"), { childList: true, subtree: true, attributes: true, attributeFilter : [ "collapsed" ] });
		}
		catch(e) {}
		
		///
		/// Change scale of login when zoomed
		///
		
		function ZoomObservation(mutations, this_observer) {
			
			const zoom_button = document.getElementById("PopupAutoComplete");
			let login_entries = document.querySelectorAll(".autocomplete-richlistitem[originaltype='loginWithOrigin']");
			let login_entries_images = document.querySelectorAll(".autocomplete-richlistitem[originaltype='loginWithOrigin'] > div > .ac-site-icon");
			let zoom_value = ZoomManager.getZoomForBrowser(gBrowser.selectedBrowser) * 100;
			
			if(zoom_button.getAttribute("hidden") == "true" || zoom_value <= 100) {
				
				for (let i = 0; i < login_entries.length; i++) {
					login_entries[i].style.setProperty("font-size", "100%");
					login_entries_images[i].style.removeProperty("align-self");
				}
				
			}
			else {
				
				for (let i = 0; i < login_entries.length; i++) {
					login_entries[i].style.setProperty("font-size", zoom_value + "%");
					login_entries_images[i].style.setProperty("align-self", "center");
				}			
			}
			
		}
		
		try {
			const zoom_observer = new MutationObserver(ZoomObservation);
			zoom_observer.observe(document.getElementById("urlbar-zoom-button"), { attributes: true, attributeFilter : [ "label", "hidden" ] });
		}
		catch(e) {}

	}
}

OthersCustomizations.init();
