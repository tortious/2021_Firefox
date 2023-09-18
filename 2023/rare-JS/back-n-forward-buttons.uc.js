// Code to make the back and forward buttons removable
// However, it will cause issues with Firefox if placed in overflow or removed from toolbars
let backButton = document.querySelector('#back-button');
let forwardButton = document.querySelector('#forward-button');

// making the back button removable
backButton.setAttribute('removable', 'true');

// making the forward button removable
forwardButton.setAttribute('removable', 'true');
