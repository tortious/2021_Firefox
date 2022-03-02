// Changes the "Open Image in New Tab" context menu item back to "View Image"

var ViewImage = {
  init: function() {
    try {
      let menuitem = document.getElementById("context-viewimage");
      menuitem.setAttribute("label", "View Image");
      menuitem.setAttribute("accesskey", "I");
      menuitem.setAttribute("oncommand", "ViewImage.viewMedia(gContextMenu, event);");
      let label = menuitem.querySelector(".menu-text");
      label.setAttribute("value", "View Image");
      label.setAttribute("accesskey", "I");
    } catch(e) {}
  },
  viewMedia: function(gContextMenu, e) {
    gContextMenu.viewMedia = function(e) {
      let referrerInfo = this.contentData.referrerInfo;
      let systemPrincipal = Services.scriptSecurityManager.getSystemPrincipal();
      if (this.onCanvas) {
        this._canvasToBlobURL(this.targetIdentifier).then(function(blobURL) {
          openUILink(blobURL, e, {
            referrerInfo,
            triggeringPrincipal: systemPrincipal,
          });
        }, Cu.reportError);
      } else {
        urlSecurityCheck(
          this.mediaURL,
          this.principal,
          Ci.nsIScriptSecurityManager.DISALLOW_SCRIPT
        );
        openUILink(this.mediaURL, e, {
          referrerInfo,
          forceAllowDataURI: true,
          triggeringPrincipal: this.principal,
          csp: this.csp,
        });
      }
    }
    gContextMenu.viewMedia(e);
  }
}

ViewImage.init();
