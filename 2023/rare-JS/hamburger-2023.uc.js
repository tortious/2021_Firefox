// Code to make the PanelUI-button removable by wrapping it in a custom widget
// However, it will cause issues with Firefox if placed in overflow or removed from toolbars
(function() {
  // Check if current page location is 'chrome://browser/content/browser.xhtml'
  if (location != 'chrome://browser/content/browser.xhtml') return;

  // Get the PanelUI button element
  let menuButton = document.getElementById('PanelUI-button');

  // Check if the wrapper-PanelUI-button widget exists
  if (!CustomizableUI.getPlacementOfWidget('wrapper-PanelUI-button')) {
    try {
      // Create wrapper-PanelUI-button widget
      CustomizableUI.createWidget({
        id: 'wrapper-PanelUI-button',
        type: 'custom',
        defaultArea: CustomizableUI.AREA_NAVBAR,
        onBuild: function(aDocument) {
          // Create the toolbaritem element and assign styles
          let toolbaritem = aDocument.createElement('toolbaritem');
          toolbaritem.id = 'wrapper-PanelUI-button';
          toolbaritem.className = 'chromeclass-toolbar-additional';
          toolbaritem.style.width = 'auto';
          toolbaritem.style.height = 'auto';
          toolbaritem.style.display = 'flex';
          toolbaritem.style.alignItems = 'center';
          return toolbaritem;
        }
      });
    } catch(e) {
      return;
    }
  }

  // Function to append menu button to the wrapper-PanelUI-button
  function appendMenuButton() {
    let wrapperMenuButton = document.getElementById('wrapper-PanelUI-button');
    if (!wrapperMenuButton) {
      // Wait for wrapper-PanelUI-button to be created
      setTimeout(appendMenuButton, 50);
      return;
    }
    wrapperMenuButton.appendChild(menuButton);
    menuButton.setAttribute('consumeanchor', 'wrapper-PanelUI-button');
  }

  // Call the appendMenuButton function
  appendMenuButton();

}());
