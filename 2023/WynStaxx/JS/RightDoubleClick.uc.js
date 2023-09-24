(function()
{
  var bRightDoubleClick = false;
  
  gBrowser.addEventListener('contextmenu', function(event)
  {
    if( bRightDoubleClick ) {
      document.getElementById("contentAreaContextMenu").hidePopup();
      event.preventDefault();
      bRightDoubleClick = false;

      /* ここから以下に目的の処理を記述**************************** */
      if( gFindBar ) {
        if( gFindBar.hidden ) {
          gFindBar.onFindCommand();
          gFindBar._findField.value = '';
        } else {
          gFindBar.close();
        }
      } else {
        gLazyFindCommand("onFindCommand");
      }
      /* ここまで************************************************** */

    } else {
      bRightDoubleClick = true;
      setTimeout(function(){bRightDoubleClick = false;}, 400);
    }
  }, false);
})();
