<?xml version="1.0"?>
<!-- Copyright (c) 2017 Haggai Nuchi
Available for use under the MIT License:
https://opensource.org/licenses/MIT
 -->
<!-- modified by alice0775 2019/05/24
  69.0a1  Bug 1519577 Convert toolbarbutton to a custom element
 -->


<!-- Run userChrome.js -->
<bindings xmlns="http://www.mozilla.org/xbl">
  <binding id="js">
    <implementation>
      <constructor><![CDATA[

        if(window.userChromeJsMod) return;
        window.userChromeJsMod = true;

        const file = Services.dirsvc.get('UChrm', Components.interfaces.nsIFile);
        file.append('userChrome.js');

        const mFileURL = Services.io.getProtocolHandler('file')
        .QueryInterface(Components.interfaces.nsIFileProtocolHandler)
        .getURLSpecFromFile(file) + "?" + file.lastModifiedTime;


        try {
          Components.utils.import('resource://gre/modules/Services.jsm');

          let maybeneed = true
          let enumerator = Services.wm.getEnumerator("navigator:browser");
          while(enumerator.hasMoreElements()) {
            var win = enumerator.getNext();
            if(typeof win.userChrome_js == "object") {
              maybeneed = false;
              break;
            }
          }

          if (maybeneed) {
            new class {
              constructor() {
                Services.obs.addObserver(this, 'domwindowopened', false);
              }

              observe(aSubject, aTopic, aData) {
                switch (aTopic) {
                  case 'domwindowopened':
                    aSubject.addEventListener('load', this, true);
                    break;
                }
              }

              handleEvent(aEvent) {
                if (!Services.appinfo.inSafeMode) {
                  const document = aEvent.originalTarget;
                  if (document.location
                      && document.location.protocol === 'chrome:'
                      && !(document.location.href == "chrome://browser/content/browser.xhtml") ) {
                    try {
                        console.log("chrome window opened")
                        Services.scriptloader.loadSubScript(mFileURL, document.defaultView, 'UTF-8');
                    } catch (ex) {
                      Components.utils.reportError(ex);
                    }
                  }
                }
              }
            }();
          }
        } catch (exception) {
          displayError(exception);
        }

        if (!Services.appinfo.inSafeMode) {
          try {
              console.log("browser window opened")
              Services.scriptloader.loadSubScript(mFileURL, document.defaultView, 'UTF-8');
          } catch (ex) {
            Components.utils.reportError(ex);
          }
        }
      ]]></constructor>
    </implementation>
  </binding>
</bindings>
