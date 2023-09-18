// Code to make the unified-extensions-button removable by wrapping it in a custom widget
// However, it will cause issues with Firefox if placed in overflow or removed from toolbars
(function() {
  // Check if current page location is 'chrome://browser/content/browser.xhtml'
  if (location != 'chrome://browser/content/browser.xhtml') return;

  // Get the extensions button element
  let extensionsButton = document.getElementById('unified-extensions-button');

  // Check if the wrapper-extensions-button widget exists
  if (!CustomizableUI.getPlacementOfWidget('wrapper-extensions-button')) {
    try {
      // Create wrapper-extensions-button widget
      CustomizableUI.createWidget({
        id: 'wrapper-extensions-button',
        type: 'custom',
        defaultArea: CustomizableUI.AREA_NAVBAR,
        onBuild: function(aDocument) {
          // Create the toolbaritem element and assign styles
          let toolbaritem = aDocument.createElement('toolbaritem');
          toolbaritem.id = 'wrapper-extensions-button';
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

  // Function to append extension button to the wrapper-extensions-button
  function appendExtensionsButton() {
    let wrapperExtensionsButton = document.getElementById('wrapper-extensions-button');
    if (!wrapperExtensionsButton) {
      // Wait for wrapper-extensions-button to be created
      setTimeout(appendExtensionsButton, 50);
      return;
    }
    wrapperExtensionsButton.appendChild(extensionsButton);
    extensionsButton.setAttribute('consumeanchor', 'wrapper-extensions-button');
  }

  // Call the appendExtensionsButton function
  appendExtensionsButton();

}());
