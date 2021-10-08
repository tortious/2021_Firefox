// ==UserScript==
// @name            About:Config Button
// @author          xiaoxiaoflood
// ==/UserScript==

// 'about:'-Button script for Firefox 60+ by Aris
//
// Need a different 'about' page button?
// - replace 'about:config' url with a different 'about:' url
// - replace button id
// - replace icon / icon url / icon color

(function() {

try {
  Components.utils.import("resource:///modules/CustomizableUI.jsm");
  var {Services} = Components.utils.import("resource://gre/modules/Services.jsm", {});
  var sss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);
  
  var button_label = "About Config Button";

  CustomizableUI.createWidget({
	id: "about-button", // button id
	defaultArea: CustomizableUI.AREA_NAVBAR,
	removable: true,
	label: button_label, // button title
	tooltiptext: button_label, // tooltip title
	onClick: function(event) {
	  if(event.button=='0') {
		try {
		  gBrowser.selectedTab = gBrowser.addTrustedTab('chrome://userchromejs/content/aboutconfig/config.xhtml');
		} catch (e) {}
	  } 

	},
	onCreated: function(button) {
	  return button;
	}
		
  });
  
  // style button icon
  var uri = Services.io.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
	\
	  #about-button .toolbarbutton-icon {\
		list-style-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAALHRFWHRDcmVhdGlvbiBUaW1lAFNhdCAyMSBBcHIgMjAxOCAxNzozMzozOSAtMDUwMB8fI8gAAAAHdElNRQfiBBUVITpVYbyOAAAACXBIWXMAAB7BAAAewQHDaVRTAAAABGdBTUEAALGPC/xhBQAAA3dJREFUeNptk+1vU3UUx7/319u729v1drvdQ+3dENhGh8pGWh8YNZlCZFlGgAQkGuQfQCXxIb7CMF/4QuNTjImJvMBEjRpRJHNs0xA2zNiUod3U4HCyB7q162h729v29vbe3usPDUbU8+rkl9/55pzz/RzGtm38OzRNc43OL+wxYIVYkJLfyZ0PtbWM4n+C+aeAZVnk5IXLR14j4pO/b2pq6a11Obu0FPS0Wixez07tkbiXI1vu/vo/AoW86pm9OLj/WNR9cCgv9R5ZXwYvA2/IHXhkbRHvy8fgrhcBO4dMEkOc+OYzgUBw9m+BqcFTB6rPvfhZvCoEnqtCc81pPEVO4ExHBDBMvLVyCk9HngVppBU8oNxoSBbssW5Zbv/V0d/fj4XxDw43zn354EbpJwSEKBiU4MxG0GrouMiKmMA6uGaaICXX4CIVeGTFvbq61Oyrf+wTElua3yD9/PFhoc4Ly+ChxQG2ci8OdNNO1OtAPIe6vIH3xB4Ep4/j7LntsBIcArWjD125Mh4h0YEvHuVWMn67UIaRs2EoLmiJKZy+NI2jyQ0IGiVUawWIJQ1wVEGUGBBnETzJiWpmpI8llskSOqdVqMByMFhLajgxeRDRpgCwKY9ZgUGbi4GWN7FPvYZIxwDgBogDDLFW/MQlehSGhVUp0QU5HMjHgB7/IrqQxru1E5hY9yl2pK7i6koWm5klCC5quw6YKrHKWiDGeoOhH9TPBZWDInGNTvi3iGjMRNEpf4cicycuXwjjRjEDFA2Ed81Q2ygvCpCNi1m31DNCQtu2Ta76wpfKmgUjXYYv7AH/QDuGV3fh0DtdePzHNiyWChjbO4C9wW9gLlMc5oFY4uHzneHI+F8cDA/16s/3na0POCAF3eBbBNgVFuk8dYWvoK75GiTKkWkQmDELqsWXMjvHutvvuf/7PzkItLbNzSyrHnVkfLuilKEmiyCMBmc5BZeZhkNnYVAH9N8slKhTC1vfPro1su/MbbdQqVQcw6+8dFw/+fpzyBQFiz57Gih4dLliDVC7mR7ZXXfE812vvnDfzic+vHUL7K3ENE22df+hj77lqvPW5Fe7pcLCeoujQjWMvVbrUX/xtM6lvH2DOxo6p1VV9dBQb+tA1/WqRCLhz+UoIPTDzVxRlBqGYWxJktI+ny/F83zJ6/VmZVleFgSheLPuD1GnjyW5j4EAAAAAAElFTkSuQmCC); /* icon / path to icon */ \
		fill: goldenrod; /* icon color name/code */\
	  }\
	\
  '), null, null);
  
  sss.loadAndRegisterSheet(uri, sss.AGENT_SHEET);
  
} catch (e) {
	Components.utils.reportError(e);
};

})();
