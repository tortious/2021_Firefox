/* Firefox userChrome script
 * Open URL in clipboard by right-clicking new-tab-button then use context menu
 * Tested on Firefox 91
 * Author: garywill (https://garywill.github.io)
 */

console.log("newtab_btn_menu.js");

const new_tab_url_label = 'New tab open: ';
var btn_newtab_w_url_clipboard_str = "";

function btn_newtab_w_url_click()
{
    gBrowser.loadOneTab(btn_newtab_w_url_clipboard_str, {
        inBackground: false,
        relatedToCurrent: false,
        triggeringPrincipal: Services.scriptSecurityManager.createNullPrincipal({}) //FF63
    });
}
function newtabbtnContextMenu_onpopupshowing(event)
{
    btn_newtab_w_url_clipboard_str = readFromClipboard();
    if (document.getElementById("btn_newtab_w_url"))
    {
        document.getElementById("btn_newtab_w_url").setAttribute("label", new_tab_url_label + btn_newtab_w_url_clipboard_str);
        document.getElementById("btn_newtab_w_url").setAttribute("tooltiptext", new_tab_url_label + btn_newtab_w_url_clipboard_str);
    }
    if (document.getElementById("btn_newtab_w_url_2"))
    {
        document.getElementById("btn_newtab_w_url_2").setAttribute("label", new_tab_url_label + btn_newtab_w_url_clipboard_str);
        document.getElementById("btn_newtab_w_url_2").setAttribute("tooltiptext", new_tab_url_label + btn_newtab_w_url_clipboard_str);
    }

}

(() => {
    
    var newtabbtnContextMenu = document.createXULElement("menupopup");
    newtabbtnContextMenu.id = "newtabbtnContextMenu";
    newtabbtnContextMenu.setAttribute("onpopupshowing","newtabbtnContextMenu_onpopupshowing(event)");


    var btn_newtab = document.createXULElement("menuitem");
    btn_newtab.setAttribute("label", 'New tab');
    btn_newtab.setAttribute("oncommand", "BrowserOpenTab()");

    newtabbtnContextMenu.appendChild(btn_newtab);


    var btn_newtab_w_url = document.createXULElement("menuitem");
    btn_newtab_w_url.id = "btn_newtab_w_url";
    btn_newtab_w_url.setAttribute("label", new_tab_url_label);
    btn_newtab_w_url.setAttribute("oncommand", "btn_newtab_w_url_click()");

    newtabbtnContextMenu.appendChild(btn_newtab_w_url);


    document.getElementById("mainPopupSet").appendChild(newtabbtnContextMenu);

    
    const tabs_newtab_button = document.getElementById("tabs-newtab-button");
    var observer1 = new MutationObserver(function(){
        observer1.disconnect();
        tabs_newtab_button.setAttribute("context","newtabbtnContextMenu");
    });
    observer1.observe(tabs_newtab_button,{attributes:true});
    
    
    const new_tab_button = document.getElementById("new-tab-button");
    var observer2 = new MutationObserver(function(){
        observer2.disconnect();
        new_tab_button.setAttribute("context","newtabbtnContextMenu");
    });
    observer2.observe(new_tab_button,{attributes:true});
    

    const default_new_tab_button_popup = document.getElementById("new-tab-button-popup");
    
    function shift_default_menu(){
        if (default_new_tab_button_popup.getAttribute("onpopupshowing") == "return CreateContainerTabMenu(event);" )
        {
            default_new_tab_button_popup.setAttribute("onpopupshowing", "CreateContainerTabMenu_mod(event);" )
        }   
    }
    shift_default_menu();
    
    
    var observer_dealwith_default = new MutationObserver(function(){
        observer_dealwith_default.disconnect();

        shift_default_menu();
        
        observer_dealwith_default.observe(default_new_tab_button_popup, {attributes:true} );
    });
    observer_dealwith_default.observe(default_new_tab_button_popup, {attributes:true} );
    
    
})();




function CreateContainerTabMenu_mod(event) {
    CreateContainerTabMenu(event);
    
    event.target.appendChild(document.createXULElement("menuseparator"));
    
    var btn_newtab = document.createXULElement("menuitem");
    btn_newtab.setAttribute("label", 'New tab');
    btn_newtab.setAttribute("oncommand", "BrowserOpenTab()");

    event.target.appendChild(btn_newtab);
    
    var btn_newtab_w_url_2 = document.createXULElement("menuitem");
    btn_newtab_w_url_2.id = "btn_newtab_w_url_2";
    btn_newtab_w_url_2.setAttribute("label", new_tab_url_label);
    btn_newtab_w_url_2.setAttribute("oncommand", "btn_newtab_w_url_click()");
    
    
    event.target.appendChild(btn_newtab_w_url_2);
    
    newtabbtnContextMenu_onpopupshowing();
    
}
