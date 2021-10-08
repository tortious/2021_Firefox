//RestartFirefox.uc.js
//v. 0.4

/* File Menu */
(function() {
    var menuitem = document.createXULElement('menuitem');
    menuitem.id = 'uc_menu_Restart';
    menuitem.setAttribute('label' , 'Neustart');
    menuitem.setAttribute('oncommand' , "Services.appinfo.invalidateCachesOnRestart() || BrowserUtils.restartApplication();");
    var refItem = document.getElementById('menu_FileQuitItem');
    refItem.parentNode.insertBefore(menuitem, refItem);
})();

/* Hamburger Menu */
(function() {
    var menuitem = document.createXULElement('toolbarbutton');
    menuitem.id = 'uc_menu_Restart_H';
    menuitem.classList.add('subviewbutton', 'subviewbutton-iconic');
    menuitem.setAttribute('label' , 'Neustart');
    menuitem.setAttribute('tooltiptext' , 'Firefox neustarten');
    menuitem.style.listStyleImage= 'url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="context-fill" fill-opacity="context-fill-opacity" d="M15,1a1,1,0,0,0-1,1V4.418A6.995,6.995,0,1,0,8,15a6.954,6.954,0,0,0,4.95-2.05,1,1,0,0,0-1.414-1.414A5.019,5.019,0,1,1,12.549,6H10a1,1,0,0,0,0,2h5a1,1,0,0,0,1-1V2A1,1,0,0,0,15,1Z"/></svg>\')';
    menuitem.setAttribute('oncommand' , "Services.appinfo.invalidateCachesOnRestart() || BrowserUtils.restartApplication();");
    var refItem = document.getElementById('appMenu-quit-button');
    refItem.parentNode.insertBefore(menuitem, refItem);
})();

/* Button */
(function() {
    if (location != 'chrome://browser/content/browser.xhtml') return;
    try {
        CustomizableUI.createWidget({
            id: 'restart-button',
            type: 'custom',
            defaultArea: CustomizableUI.AREA_NAVBAR,
            onBuild: function(aDocument) {
                var toolbaritem = aDocument.createElementNS('http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul', 'toolbarbutton');
                var props = {
                    id: 'restart-button',
                    class: 'toolbarbutton-1 chromeclass-toolbar-additional',
                    label: 'Neustart',
                    tooltiptext: 'Linksklick: userChrome.js Cache löschen - Mittelklick: Normaler Neustart',
                    style: 'list-style-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAMAAACfBSJ0AAAACXBIWXMAAAsSAAALEgHS3X78AAACE1BMVEX///8AAAAAAQABAQECAgICAgECAgICAgICAgICAwIDAwIEBAQHBwcHBwcHBwcICAcICAgICAgICQgJCQgJCQkJCQkJCgkKCgoKCgoKCgoKCwoLCwoLCwsLCwsLDAsMDAwMDQwNDQ0NDg0ODg0ODw4PDw4PDw8QEA8REhESEhESExISExITExITFBMUFBMXFxYXGBcYGBcYGBcYGRcZGRgYGRcYGRgZGRgYGRgZGhkaGhkeHh0eHx0fHx4fIB4fIB8gIB8fIB8gIB8gIR8gISAhIiEiIiEiIyEjIyIiIyEmJyUkJSQlJSQlJiQlJiUlJiQlJiUmJiUmJyUnKCYoKCcoKScoKScpKigpKigqKykrLCosLSssLSstLiwuLy0uMC0vMC4vMC4vMC4wMS4wMS8xMjAxMjAyMzAyMzAzNDIzNTI0NTM1NjM1NjQ1NzQ2ODU3OTY5Ojg6Ozg6Ozg7PTo8PTo8PTs9Pjs9Pzw+Pzw/QT4/QT5AQT5BQj9BQj9CQ0BDRUJDRUJFR0RFR0RGR0RFR0RGSERGSEVHSEVHSEVHSUVHSUZISkZJSkdJS0hKS0hKS0hKTEhKTEhLTElLTUlLTUpMTktNT0tNT0xOUExOUExPUU1QUk5RU09RU09RU09RU09SVFBSVFFTVFFTVVFSVFBSVFFTVVFTVVFUVVJUVlJUVlJUVlJUVlJVV1NVV1NVV1NrwVteAAAAsHRSTlMAAQEDAwQEBQYGBgoREhMUFRYXFxgZGhobHBwdHR4gICIkJSYoKSosMDEzNDQ2OEFDQ0REREVFRUZHSVRWV1paWltbW11gYGBhYmhpaWtrbW1tbnFyc3R2eHt8gIGBhoeHiImLjI6QkJGUlZeampygoqepqq2vr7O1trq7vL6/wcXGy8zMzc7Q0NHR0tXX2dna2tvd39/j5Obn6Ozu7/Dx8vT09PT19fj5+fn6+/z9/hwHi+4AAAKXSURBVBgZxcH5X8thAAfwzxwLkUUx5Y4iEZEzRa5yExU5hoonR5GE3OSsaCLX5B4t+37+RE9P383as3o95QfvN/7V9kkYFtGShLAJy/dW1tbX11buX5mAwQm2ToGy8PhTi2HWs5OZGIQg29xA3JaH1DwpHoeBCJLe1PUvGdOrDQ7EJij94IBuzkZMghG6rh7Jz16UlZ1f0eijrSsPsQiG/Lq4Jg5hzpw6PxXrqAM6QdvlFERJPv2TSs0IaARtr+dCM/8OlSpoBEM606Bxeiz22o1ogmFv5kG3tYdSYAmiCP71Nh26DUFK3nj0JxjhXQZ0ZezlQX8ryiIVQedooOSfiaFyvad0DiGuxTCzg5I/EbaDwQsumIjroFQK233yw66RMFBCqRl93BbJ30kwMDFA0nJD2UjpNozcoFQIpZrSYRgpp1QNpYnSahhZSqkJSjul6TAyjVI7FB/JoBNGRgVJ+qB0k/wGQ59JdkPpJvkVhr6Q7IbiIxkcBSPOIEkflHZKKTCSSukFlCZKy2Akl9J1KNWUymHkEKVqKIWUbsDILUoFUNwWycBEGJjcQ9Kaij7NlEpgIP05yXuwlVLqiIOBsQc/8gBsiX5KO2Ek8awLIecpvXdhqGb5KTU4oCsqi7QK/XnYqwy6jHeMINBfvJdScBN06W/5l0CUJQFKPdugm/eGYQLRdrOX5RkNTVonQwQ0VVTuzodmzmvaBDQjaqj8OpOMKDOu0Cagcxy1qPjrljsRNm7tpQBDBGLJ66LtY2NFfnZWVvbGI9c+MYJATLNvckDfKQnE5ijoYEzedalekgIDGVP8mJoHm52Au40UGETmiWcWw4KPji2AMqWVAoNLyN1XWVtfX3tqT854hCW1CAzLpO34X/4AhAYMCzMKoBAAAAAASUVORK5CYII=)',
                    onclick: 'if (event.button == 0) { \
                        event.preventDefault(); \
                        Cc["@mozilla.org/xre/app-info;1"].getService(Ci.nsIXULRuntime). \
                            invalidateCachesOnRestart(); \
                            BrowserUtils.restartApplication(); \
                        } else { \
                           if (event.button == 1) { \
                              BrowserUtils.restartApplication(); \
                           } else { \
                              return; \
                           } \
                       };'
            };
            for (var p in props)
                toolbaritem.setAttribute(p, props[p]);
            return toolbaritem;
            }
        });
    } catch(e) { };
})();
