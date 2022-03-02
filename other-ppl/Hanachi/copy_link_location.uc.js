// Changes the label of the "Copy Link" context menu item back to "Copy Link Location", and the access key from "L" back to "A".

var CopyLinkLocation = {
  init: function() {
    try {
      let menuitem = document.getElementById("context-copylink");
      menuitem.setAttribute("label", "Copy Link Location");
      menuitem.setAttribute("accesskey", "A");
      let label = menuitem.querySelector(".menu-text");
      label.setAttribute("value", "Copy Link Location");
      label.setAttribute("accesskey", "A");
    } catch(e) {}
  }
}

CopyLinkLocation.init();
