// Code to make the urlbar removable and with flex
// However, it will cause issues with Firefox if placed in overflow or removed from toolbars
let urlbarContainer = document.querySelector('#urlbar-container');

// making the urlbar removable
urlbarContainer.setAttribute('removable', 'true');

// Making the urlbar with flex
urlbarContainer.setAttribute('flex', '0');
