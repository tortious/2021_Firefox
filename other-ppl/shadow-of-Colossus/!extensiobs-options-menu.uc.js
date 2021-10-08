// ==UserScript==
// @name            Extension Options Menu
// @author          xiaoxiaoflood
// @include         main
// @shutdown        UC.extensionOptionsMenu.destroy();
// @onlyonce
// ==/UserScript==

// inspired by https://addons.mozilla.org/en-US/firefox/addon/extension-options-menu/

UC.extensionOptionsMenu = {
  // config
  showVersion:    true,
  showHidden:     false,
  showDisabled:   true,
  enabledFirst:   true,
  blackListArray: [
  
  		//  NORMALLY ENABLED //
	
		"add-search-engine-from-mycroft-project@qw.thucfb.com", // Add Search Engine from Mycroft Project
		"@autopagerizetweaked", //  AutoPagerize Advanced
		"{36bde3a5-9f17-4ad9-a587-d4a3c8e8d200}", //  Background Tab-It
		"baidu-code-update@mozillaonline.com", // Baidu Search Update
		"{c0e1baea-b4cb-4b62-97f0-278392ff8c37}", //  Behind the Overlay Revival
		"{54e2eb33-18eb-46ad-a4e4-1329c29f6e17}", // Block Site
		"bookmarksorganizer@agenedia.com", // Bookmarks Organizer
		"@breadcrumbus", // breadcrumbus
		"{d133e097-46d9-4ecc-9903-fa6a722a6e0e}", // Bypass Paywalls Clean
		"{ce9f4b1f-24b8-4e9a-9051-b9e472b1b2f2}", // Clear Browsing Data
		"tb-tab-close-history-single@codefisher.org", // Close Tab History Button
		"containerise@kinte.sh", // Containerise
		"cookieautodelete@kennydo.com", // Cookie AutoDelete
		"addon@darkreader.org", // Dark Reader	
		"{e90f5de4-8510-4515-9f67-3b6654e1e8c2}", // Dictionary Anywhere
		"{e85f814a-b0a1-4ce4-9a40-5325da7ba84b}", // Disable to Detach 2
		"{6b938c0c-fc53-4f27-805f-619778631082}", // Don't touch my tabs! (rel=noopener)
//		"s3download@statusbar", // Download Manager (S3)
		"{b9acf540-acba-11e1-8ccb-001fd0e08bd4}", // Easy Youtube Video Downloader Express
		"enhancerforyoutube@maximerf.addons.mozilla.org", // Enhancer for YouTube
		"crxviewer-firefox@robwu.nl", // Extension source viewer
		"{890a0705-1a67-47a4-8583-446ca3081ead}", // Find Next Page
		"@testpilot-containers", // Firefox Multi-Account Containers
		"{1018e4d6-728f-4b20-ad56-37578a4de76b}", // flagfox
		"{23cc126f-bd98-4a53-807a-cbc9af2cfe89}", // Google Search "View Image" Button
		"{c7812b2a-ab08-475a-806d-326718a58747}", // Google Search Keyboard Shortcuts
		"image_search_for_googl@image_search_for_googl.org", // Image Search for Google
		"jid0-XWJxt5VvCXkKzQK99PhZqAn7Xbg@jetpack", // Google search link fix
//		"{00000f2a-7cde-4f20-83ed-434fcb420d71}", // Imagus
		"{252ee273-8c8d-4609-b54d-62ae345be0a1}", // IndicateTLS
		"multitabx@j70.user.github.com", // Multi-Tab Close
//		"neaturl@hugsmile.eu", // Neat URL
		"newtaboverride@agenedia.com", // New Tab Override
		"nextpage@yuanle.song", //nextpage
		"jid1-YMBCq41qvDdqcA@jetpack", // No YouTube comments
		"bookmark-menu-container@robwu.nl", // Open bookmark in Container Tab menu item
		"openwith@darktrojan.net", // Open With
		"{c86567ab-c9be-4823-a1ea-af0f62f9fd49}", // Overlay Remover Auto
//		"switchyomega@feliscatus.addons.mozilla.org", // Proxy SwitchyOmega
		"{ea156e76-66fc-4ef0-8d82-b94c4256fd83}", // PunyCodeChecker
		"{e1ed7a80-7c11-4f7e-968b-79b551a0067f}", // Reload in address bar
		"{B5F5E8D3-AE31-49A1-AC42-78B7B1CC5CDC}", // Right Links WE
		"{2e5ff8c8-32fe-46d0-9fc8-6b8986621f3c}", // Search by Image
//		"skipredirect@sblask", // Skip Redirect
//		"smart-referer@meh.paranoid.pk", // Smart Referer
		"jid1-KdTtiCj6wxVAFA@jetpack", // Swift Selection Search
		"{d8d927ce-6f13-4bab-9f4d-16606428ac6c}", // Tab Manager
		"webext@tabmixplus.org", // Tab Mix Plus (experimental)
		"jid0-bnmfwWw2w2w4e4edvcdDbnMhdVg@jetpack", // Tab Reloader
		"Text-Link-WE@nekoziroo.org", // Text Link webext
		"{036a55b4-5e72-4d05-a06c-cba2dfcc134a}", // Translate Web Pages
		"{a6c4a591-f1b2-4f03-b3ff-767e5bedf4e7}", // User-Agent Switcher and Manager
		"jid0-DjsrWcAS3Wgq2xyyqqVL8Dqk1Lo@jetpack", // URL analyzing with VirusTotal
		"{287dcf75-bec6-4eec-b4f6-71948a2eea29}", // View Image
		"{aecec67f-0d10-4fa7-b7c7-609a2db280cf}", // Violentmonkey
//		"@windscribeff", // Windscribe - Free Proxy and Ad Blocker
		"zoompage-we@DW-dev", // Zoom Page WE
		"yetanothersmoothscrollingwe@kataho", // Yet Another Smooth Scrolling WE

		// NORMALLY DISABLED //
		
		"jid1-CKHySAadH4nL6Q@jetpack", // Privacy Settings

		
		// FIREFOX ADDONS //

		"fxmonitor@mozilla.org", // Firefox Addon by Mozilla
		"clicktoplay-rollout@mozilla.org",
		"firefox@getpocket.com",
		"screenshots@mozilla.org",
		"followonsearch@mozilla.com",
		"formautofill@mozilla.org",
		"onboarding@mozilla.org",
		"shield-recipe-client@mozilla.org",
		"webcompat@mozilla.org",
		"activity-stream@mozilla.org",
		"presentation@mozilla.org",
		"aushelper@mozilla.org",
		"webcompat-reporter@mozilla.org",
		"e10srollout@mozilla.org"
  
  ],

  init: function() {
    CustomizableUI.createWidget({
      id: 'eom-button',
      type: 'custom',
      defaultArea: CustomizableUI.AREA_NAVBAR,
      onBuild: function (doc) {
        let btn = _uc.createElement(doc, 'toolbarbutton', {
          id: 'eom-button',
          label: 'Extension Options Menu',
          tooltiptext: 'Extension Options Menu',
          type: 'menu',
          class: 'toolbarbutton-1 chromeclass-toolbar-additional',
          image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABaUlEQVQ4y6WTW0sCQRiG/SEpVBDUVVfphbAEhWAlqYhrLWUlER2IIgrqYkEp6SBmudWiFf0SiSCwpAI7bJnprq6H/sTbGhJiEyt28fAN7zfz8DHDaABo/oPqBpovX7j4T1gOS6dNCcYiZbhOSrCHi2hugqNCwskVYNmXbxoSuPkCN3NWhCdahLLGKCfDcSBjOJiHeTeHPr8EyifCwGb9RMF0RIaHl+E+zoMJ5+AM5WALSBjaEWHayqLXm4GR/YB+Iw2iYIKTMB6WwIRE0EER9r0s+r1pGNZT6F55ReeigPb5F7TOPpMFTDCDkUAGA753GFYFdC08QedJEvkR2DbfzuntFBz+1K2ZFdCz9Ii2qQfo3Pck2MoZpVI/AqtXQAXjchIdk3fQMok/Ib6CaS0Z1c8pdlc8pqXjUOF7AqVSxDvQOq7RKERBi/UKdbDVnK3vkQWWS9Si1vstGIyxCqiBquZUXc429BfU+AL9Tqy8Q2Za8AAAAABJRU5ErkJggg==',
          onclick: 'if (event.button == 1) BrowserOpenAddonsMgr("addons://list/extension")'
        });

        let mp = _uc.createElement(doc, 'menupopup', {
          id: 'eom-button-popup',
          onclick: 'event.preventDefault()',
        });
        btn.appendChild(mp);

        mp.addEventListener('popupshowing', UC.extensionOptionsMenu.evalPopulateMenu);

        return btn;
      }
    });

    this.setStyle();
    _uc.sss.loadAndRegisterSheet(this.STYLE.url, this.STYLE.type);
  },

  evalPopulateMenu: function (e) {
    let win = e.view;
    new win.Function('e', `
      AddonManager.getAddonsByTypes(['extension']).then(addons => UC.extensionOptionsMenu.populateMenu(e, addons));
    `).call(null, e);
  },

  populateMenu: function (e, addons) {
    let prevState;
    let popup = e.target;
    let doc = e.view.document;
    let enabledFirst = UC.extensionOptionsMenu.enabledFirst;
    let showVersion = UC.extensionOptionsMenu.showVersion;
    let showDisabled = UC.extensionOptionsMenu.showDisabled;
    let blackListArray = UC.extensionOptionsMenu.blackListArray;

    while (popup.hasChildNodes())
      popup.removeChild(popup.firstChild);

    addons.sort((a, b) => {
      let ka = (enabledFirst ? a.isActive ? '0' : '1' : '') + a.name.toLowerCase();
      let kb = (enabledFirst ? b.isActive ? '0' : '1' : '') + b.name.toLowerCase();
      return (ka < kb) ? -1 : 1;
    }).forEach(addon => {
      if (!blackListArray.includes(addon.id) &&
          (!addon.hidden || UC.extensionOptionsMenu.showHidden) &&
          (!addon.userDisabled || UC.extensionOptionsMenu.showDisabled)) {
        if (showDisabled && enabledFirst && prevState && addon.isActive != prevState)
          popup.appendChild(doc.createXULElement('menuseparator'));
        prevState = addon.isActive;

        let mi = _uc.createElement(doc, 'menuitem', {
          label: addon.name + (showVersion ? ' ' + addon.version : ''),
          class: 'menuitem-iconic',
          tooltiptext: addon.description + '\nID : ' + addon.id + '\n\nLeft-Click: Options\nMiddle-Click: Open Homepage\nRight-Click: Enable/Disable\nCtrl + Left-Click: View Source\nCtrl + Middle-Click: Copy ID\nCtrl + Right-Click: Uninstall',
          image: addon.iconURL || UC.extensionOptionsMenu.iconURL,
        });
        mi.addEventListener('click', UC.extensionOptionsMenu.handleClick);
        mi._Addon = addon;

        UC.extensionOptionsMenu.setDisable(mi, addon, 0);

        popup.appendChild(mi);
      }
    });
  },

  handleClick: function(e) {
    let win = e.view;
    let mi = e.target;
    if (!('_Addon' in mi)) {
      return;
    }

    let addon = mi._Addon;
    let hasMdf = e.ctrlKey || e.shiftKey || e.altKey || e.metaKey;

    switch (e.button) {
      case 0:
        if (addon.optionsURL && !hasMdf)
          UC.extensionOptionsMenu.openAddonOptions(addon, win);
        else if (e.ctrlKey)
          UC.extensionOptionsMenu.browseDir(addon);
        break;
      case 1:
        if (addon.homepageURL && !hasMdf) {
          openURL(addon.homepageURL);
          closeMenus(mi);
        } else if (e.ctrlKey) {
          Cc['@mozilla.org/widget/clipboardhelper;1'].getService(Ci.nsIClipboardHelper).copyString(addon.id);
          closeMenus(mi);
        }
        break;
      case 2:
        if (!hasMdf) {
          if (addon.userDisabled)
            addon.enable();
          else
            addon.disable();
          UC.extensionOptionsMenu.setDisable(mi, addon, 1);
        } else if (e.ctrlKey) {
          if (Services.prompt.confirm(null, null, 'Delete ' + addon.name + ' permanently?')) {
            if (addon.pendingOperations & AddonManager.PENDING_UNINSTALL)
              addon.cancelUninstall();
            else {
              addon.uninstall();
              return;
            }
            cls.remove('enabling');
            cls.remove('disabling');
            cls.add('uninstalling');
            cls.add('disabled');
          }
        }
    }
  },

  setDisable: function (mi, addon, toggling) {
    let cls = mi.classList;

    if (addon.operationsRequiringRestart) {
      if (toggling)
        if (addon.userDisabled)
          if (addon.isActive)
            cls.add('disabling');
          else
            cls.remove('enabling');
        else
          if (addon.isActive)
            cls.remove('disabling');
          else
            cls.add('enabling');
      else if (addon.userDisabled && addon.isActive)
        cls.add('disabling');
      else if (!addon.userDisabled && !addon.isActive)
        cls.add('enabling');
    } else {
      if (toggling) {
        if (addon.isActive) {
          if (addon.optionsURL)
            cls.remove('noOptions');
          cls.remove('disabled');
          cls.remove('disabling');
          cls.add('enabling');
        } else {
          cls.remove('enabling');
          cls.add('disabling');
        }
      }
    }

    if (!addon.isActive)
      cls.add('disabled');

    if (!addon.optionsURL)
      cls.add('noOptions');
  },

  openAddonOptions: function (addon, win) {
    if (!addon.isActive || !addon.optionsURL)
      return;

    switch (Number(addon.optionsType)) {
      case 5:
        win.BrowserOpenAddonsMgr('addons://detail/' + encodeURIComponent(addon.id) + '/preferences');
        break;
      case 3:
        win.switchToTabHavingURI(addon.optionsURL, true);
    }
  },

  browseDir: function (addon) {
    let dir = Services.dirsvc.get('ProfD', Ci.nsIFile);
    dir.append('extensions');
    dir.append(addon.id + '.xpi');
    dir.launch();
  },

  iconURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABaUlEQVQ4y6WTW0sCQRiG/SEpVBDUVVfphbAEhWAlqYhrLWUlER2IIgrqYkEp6SBmudWiFf0SiSCwpAI7bJnprq6H/sTbGhJiEyt28fAN7zfz8DHDaABo/oPqBpovX7j4T1gOS6dNCcYiZbhOSrCHi2hugqNCwskVYNmXbxoSuPkCN3NWhCdahLLGKCfDcSBjOJiHeTeHPr8EyifCwGb9RMF0RIaHl+E+zoMJ5+AM5WALSBjaEWHayqLXm4GR/YB+Iw2iYIKTMB6WwIRE0EER9r0s+r1pGNZT6F55ReeigPb5F7TOPpMFTDCDkUAGA753GFYFdC08QedJEvkR2DbfzuntFBz+1K2ZFdCz9Ii2qQfo3Pck2MoZpVI/AqtXQAXjchIdk3fQMok/Ib6CaS0Z1c8pdlc8pqXjUOF7AqVSxDvQOq7RKERBi/UKdbDVnK3vkQWWS9Si1vstGIyxCqiBquZUXc429BfU+AL9Tqy8Q2Za8AAAAABJRU5ErkJggg==',

  setStyle: function () {
    this.STYLE = {
      url: Services.io.newURI('data:text/css;charset=UTF-8,' + encodeURIComponent(`
        @-moz-document url('${_uc.BROWSERCHROME}') {
          .enabling label:after { content: "+" !important; }
          .disabling label:after { content: "-" !important; }
          .uninstalling label:after { content: '!' !important; }
          .noOptions { color: salmon; }
          .disabled { color: darkkhaki; }
        }
      `)),
      type: _uc.sss.USER_SHEET
    }
  },

  destroy: function () {
    CustomizableUI.destroyWidget('eom-button');
    _uc.sss.unregisterSheet(this.STYLE.url, this.STYLE.type);
    delete UC.extensionOptionsMenu;
  }
}

UC.extensionOptionsMenu.init();
