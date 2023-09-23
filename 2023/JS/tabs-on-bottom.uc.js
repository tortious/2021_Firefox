// ==UserScript==
// @name            Tabs on Bottom
// @author          Lummox JR
// @include         main
// @startup         UC.tabsOnBottom.exec(win);
// @shutdown        UC.tabsOnBottom.destroy();
// @onlyonce
// ==/UserScript==

/*
	Last tested with Firefox 111

	This file is released into the public domain.
 */

UC.tabsOnBottom = {
	PREF_ENABLED: 'userChromeJS.tabsOnBottom',
	PREF_TABSINTITLEBAR: 'browser.tabs.drawInTitlebar', // incompatible with this script

	get enabled() {
		return xPref.get(this.PREF_ENABLED) && !xPref.get(this.PREF_TABSINTITLEBAR);
	},

	init: function() {
		xPref.set(this.PREF_ENABLED, true, true);
		var mt = this.moveTabs.bind(this);
		this.enabledListener = xPref.addListener(this.PREF_ENABLED, (isEnabled) => {_uc.windows(mt);});
		this.titlebarListener = xPref.addListener(this.PREF_TABSINTITLEBAR, (isEnabled) => {_uc.windows(mt);});

		this.setStyle();
		_uc.sss.loadAndRegisterSheet(this.STYLE.url, this.STYLE.type);
	},

	exec: function(win) {
		console.log('tabsOnBottom exec',win.document,win);
		this.moveTabs(win.document,win);
	},

	moveTabs: function(doc,win) {
		let pnode;
		console.log('moveTabs', this.enabled);
		if(this.enabled) {
			pnode = doc.querySelector('#tabs-on-bottom');
			if(!pnode) win.gNavToolbox.appendChild(pnode = _uc.createElement(doc, 'toolbar', {id: 'tabs-on-bottom'}));
		}
		else pnode = doc.querySelector('#titlebar');
		let tabs = doc.querySelector('#TabsToolbar');
		let notify = doc.querySelector('#tab-notification-deck');
		let template = doc.querySelector('#tab-notification-deck-template');
		pnode.appendChild(tabs);
		if(notify) pnode.appendChild(notify);
		if(template) pnode.appendChild(template);
	},

	setStyle: function() {
		this.STYLE = {
			url: Services.io.newURI('data:text/css;charset=UTF-8,' + encodeURIComponent(`
@-moz-document url('${_uc.BROWSERCHROME}') {

#tabs-on-bottom {
	min-height: 0 !important;
	background-color: var(--toolbar-bgcolor) !important;
	display: -moz-box;
	-moz-box-orient: vertical;
}
#tabs-on-bottom #tab-notification-deck {
	margin: 0 0 -1px 0 !important;
}
#tabs-on-bottom notification-message {
	margin: 0 !important;
}
/*
	Dismissing notifications doesn't properly shrink the containing stack in
	this mode. It isn't clear why, so the easiest choice is to hide the
	notification.
 */
#tabs-on-bottom notification-message[style*="opacity"] {
	display: none !important;
}

/*
	The .container class inside a notification message's shadow DOM has a
	rounded border we can't get rid of, so give the whole notification a
	background.
 */
@media not (prefers-contrast) {
	#tabs-on-bottom #tab-notification-deck {
		background: var(--in-content-page-background);
	}
	@media (prefers-color-scheme: dark) {
		#tabs-on-bottom #tab-notification-deck {
		background: rgb(66,65,77);
		}
	}
}

}
			`)),
			type: _uc.sss.USER_SHEET
		}
	},
	
	destroy: function() {
		xPref.removeListener(this.enabledListener);
		xPref.removeListener(this.titlebarListener);
		_uc.sss.unregisterSheet(this.STYLE.url, this.STYLE.type);
		_uc.windows((doc, win) => {
			let pnode = doc.querySelector('#titlebar');
			let tabs = doc.querySelector('#TabsToolbar');
			let notify = doc.querySelector('#tab-notification-deck');
			let template = doc.querySelector('#tab-notification-deck-template');
			pnode.appendChild(tabs);
			if(notify) pnode.appendChild(notify);
			if(template) pnode.appendChild(template);

			pnode = doc.querySelector('#tabs-on-bottom');
			if(pnode) pnode.remove();
		});
		delete UC.tabsOnBottom;
	}
}

UC.tabsOnBottom.init();
