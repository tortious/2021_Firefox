// Code to hide and make removable the button with id 'alltabs-button'
// However, it will cause issues with Firefox if placed in overflow or removed from toolbars
let alltabs = document.querySelector('#alltabs-button');

// making the button removable 
alltabs.setAttribute('removable', 'true');

// hiding the button
alltabs.setAttribute('hidden', 'true');
