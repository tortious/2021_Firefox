// ==UserScript==
// @name          Toggle FindBar (Ctrl+F)
// @description   Switch search bar display with Ctrl+F
// @version       1.1
// @name            Bookmarks Mebu Undo
// @author          xiaoxiaoflood
// ==/UserScript==
// @namespace     https://oflow.me/archives/256

var ucjsToggleFindBar = function() {
	if (gFindBar)
		gFindBar.hidden ? gFindBar.onFindCommand() : gFindBar.close();
	else
		gLazyFindCommand("onFindCommand");
};
var ucjsToggleFindBar_onClickAddonbar = function(event) {
  if (event.button != 2)
    return;
  let target = event.originalTarget;
  while(target) {

    if (target == XULBrowserWindow.statusTextField ||
      target == StatusPanel) {
      target.setAttribute("context", "");
      ucjsToggleFindBar();
      break;
    }
    target = target.parentNode;
  }
}

window.addEventListener("click", ucjsToggleFindBar_onClickAddonbar,false);

(function() {
	["key_find", "cmd_find"].forEach(id => {
		document.getElementById(id).setAttribute("oncommand", "ucjsToggleFindBar()");
	});
})();
