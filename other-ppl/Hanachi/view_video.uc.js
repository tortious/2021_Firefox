// Changes the "Open Video in New Tab" context menu item back to "View Video"

var ViewVideo = {
  init: function() {
    try {
      let menuitem = document.getElementById("context-viewvideo");
      menuitem.setAttribute("label", "View Video");
      menuitem.setAttribute("accesskey", "i");
      menuitem.setAttribute("oncommand", "ViewVideo.viewMedia(gContextMenu, event);");
      let label = menuitem.querySelector(".menu-text");
      label.setAttribute("value", "View Video");
      label.setAttribute("accesskey", "i");
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

ViewVideo.init();
