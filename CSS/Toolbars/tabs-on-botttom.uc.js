/* Source file https://github.com/MrOtherGuy/firefox-csshacks/tree/master/chrome/tabs_on_bottom.css made available under Mozilla Public License v. 2.0
See the above repository for updates as well as full license text. */

/* Modify to change window drag space width */
/*
Use tabs_on_bottom_menubar_on_top_patch.css if you
have menubar permanently enabled and want it on top
 */

/* IMPORTANT */
/*
Get window_control_placeholder_support.css
Window controls will be all wrong without it.
Additionally on Linux, you may need to get:
linux_gtk_window_control_patch.css
*/

:root{ --uc-titlebar-padding: 0px; }
@media  (-moz-platform: windows),
        (-moz-os-version: windows-win7),
        (-moz-os-version: windows-win10){
  :root[sizemode="maximized"][tabsintitlebar]{
    --uc-titlebar-padding: 8px;
  }
}
#toolbar-menubar[autohide="true"] > .titlebar-buttonbox-container,
#TabsToolbar > .titlebar-buttonbox-container{
  position: fixed;
  display: block;
  top: var(--uc-titlebar-padding,0px);
  right:0;
  height: 40px;
}
/* Mac specific. You should set that font-smoothing pref to true if you are on any platform where window controls are on left */
@supports -moz-bool-pref("layout.css.osx-font-smoothing.enabled"){
  :root{ --uc-titlebar-padding: 0px !important }
  .titlebar-buttonbox-container{ left:0; right: unset !important; }
}

:root[uidensity="compact"] #TabsToolbar > .titlebar-buttonbox-container{ height: 32px }

#toolbar-menubar[inactive] > .titlebar-buttonbox-container{ opacity: 0 }

#navigator-toolbox{ padding-top: var(--uc-titlebar-padding,0px) !important; }

.titlebar-buttonbox-container > .titlebar-buttonbox{ height: 100%; }

#titlebar{
  -moz-box-ordinal-group: 2;
  -moz-appearance: none !important;
  --tabs-navbar-shadow-size: 0px;
}
/* Re-order window and tab notification boxes */
#navigator-toolbox > div{ display: contents }
.global-notificationbox,
#tab-notification-deck{ -moz-box-ordinal-group: 2 }

#TabsToolbar .titlebar-spacer{ display: none; }
/* Also hide the toolbox bottom border which isn't at bottom with this setup */
#navigator-toolbox::after{ display: none !important; }

@media (-moz-gtk-csd-close-button){ .titlebar-button{ -moz-box-orient: vertical } }

/* At Activated Menubar */
:root:not([chromehidden~="menubar"], [sizemode="fullscreen"]) #toolbar-menubar:not([autohide="true"]) + #TabsToolbar > .titlebar-buttonbox-container {
  display: block !important;
}
#toolbar-menubar:not([autohide="true"]) > .titlebar-buttonbox-container {
  visibility: hidden;
}

/* These exist only for compatibility with autohide-tabstoolbar.css */
toolbox#navigator-toolbox > toolbar#nav-bar.browser-toolbar{ animation: none; }
#navigator-toolbox:hover #TabsToolbar{ animation: slidein ease-out 48ms 1 }
#TabsToolbar > .titlebar-buttonbox-container{ visibility: visible }
#navigator-toolbox:not(:-moz-lwtheme){ background-color: -moz-dialog }

/* Uncomment the following if you want bookmarks toolbar to be below tabs */
/*
#PersonalToolbar{ -moz-box-ordinal-group: 2 }
*/
