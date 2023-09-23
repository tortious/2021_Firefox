// ==UserScript==
// @name            Remove Urlbar Search One-Offs
// @author          Lummox JR
// @include         main
// @shutdown        UC.removeUrlbarSearchOneOffs.destroy();
// @onlyonce
// ==/UserScript==

/*
	Restores the old browser.urlbar.oneOffSearches preference so it will work
	again. This not only disables them visually but also kills the keyboard
	navigation. You would think visually hiding the box ought to be enough
	for the built-in scripts to get the hint, but nope.

	Since the preference has been removed by Mozilla, and anyone installing
	this script wants the altered behavior, browser.urlbar.oneOffSearches
	defaults to false instead of true once this script is installed.

	Last tested with Firefox 111

	This file is released into the public domain.
 */

UC.removeUrlbarSearchOneOffs = {
	PREF_SHOW: 'browser.urlbar.oneOffSearches',

	get showOneOffs() {
		return xPref.get(this.PREF_SHOW);
	},

	init: function() {
		xPref.set(this.PREF_SHOW, false, true);
		let {UrlbarSearchOneOffs} = ChromeUtils.import("resource:///modules/UrlbarSearchOneOffs.jsm");
		let oldfn = UrlbarSearchOneOffs.prototype.enable;
		let noop = function(){};

		this.setStyle();

		this.onShow = function(show) {
			UrlbarSearchOneOffs.prototype.enable = show ? oldfn : noop;
			if(show) _uc.sss.unregisterSheet(this.STYLE.url, this.STYLE.type);
			else _uc.sss.loadAndRegisterSheet(this.STYLE.url, this.STYLE.type);
		}

		this.showListener = xPref.addListener(this.PREF_SHOW, this.onShow.bind(this));
		if(!this.showOneOffs) this.onShow(false);
	},

	setStyle: function() {
		this.STYLE = {
			url: Services.io.newURI('data:text/css;charset=UTF-8,' + encodeURIComponent(`
				@-moz-document url('${_uc.BROWSERCHROME}') {
					#urlbar .search-one-offs, #urlbar .search-panel-one-offs-container, .urlbarView-row[type=search] {display: none !important;}
				}
			`)),
			type: _uc.sss.USER_SHEET
		}
	},
	
	destroy: function() {
		xPref.removeListener(this.showListener);
		this.onShow(true);
		delete UC.removeUrlbarSearchOneOffs;
	}
}

UC.removeUrlbarSearchOneOffs.init();
