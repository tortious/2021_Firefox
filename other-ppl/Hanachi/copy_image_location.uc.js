// Changes the label of the "Copy Image Link" context menu item back to "Copy Image Location"

var CopyImageLocation = {
  init: function() {
    try {
      let menuitem = document.getElementById("context-copyimage");
      menuitem.setAttribute("label", "Copy Image Location");
      //menuitem.setAttribute("accesskey", "o");
      let label = menuitem.querySelector(".menu-text");
      label.setAttribute("value", "Copy Image Location");
      //label.setAttribute("accesskey", "o");
    } catch(e) {}
  }
}

CopyImageLocation.init();
