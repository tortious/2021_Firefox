// ==UserScript==
// @name            Master Password+
// @author          xiaoxiaoflood
// @include         *
// @startup         masterPasswordPlus
// @shutdown        UC.masterPasswordPlus.destroy();
// @onlyonce
// ==/UserScript==
 
_ucUtils.sharedGlobal.masterPasswordPlus = {
  _startup: function (win) {
    if (!win.isChromeWindow || win != win.top)
      return;
 
    let document = win.document;
    if (document.getElementsByTagName('keyset').length) {
      let key = document.getElementById('mpPk');
      if (key) {
        this.atalho(key);
      } else {
        let k = _ucUtils.createElement(document, 'key', {id: 'mpPk'});
        this.atalho(k);
        document.getElementsByTagName('keyset')[0].appendChild(k);
      }
    }
    let ovl = _ucUtils.createElement(document, 'div', {
      id: 'mpPlus',
      style: 'position: fixed; display: none; width: 100%; height: 100%; top: 0; background-color: gray; z-index: 2; cursor: pointer;'
    },true);
    document.documentElement.appendChild(ovl);
 
    let input = _ucUtils.createElement(document, 'input', {
      id: 'mpPinput',
      type: 'password',
      style: 'border: 1px solid black; text-align: center; position: absolute; top:0; bottom: 0; left: 0; right: 0; margin: auto;'
    }, true);
    ovl.appendChild(input);
 
    input.addEventListener('blur', function () {
      setTimeout(() => {
        input.focus();
      });
    });
    win.addEventListener('activate', function () {
      input.focus();
    });
 
    if (this.mp.hasPassword && this.locked) {
      this.lock(document, win);
    }
  },
 
  mp: Cc['@mozilla.org/security/pk11tokendb;1'].getService(Ci.nsIPK11TokenDB).getInternalKeyToken(),
 
  keydownFunc: function (e) {
    let input = this.document.getElementById('mpPinput');
    if (e.key == 'Enter') {
      if (_ucUtils.sharedGlobal.masterPasswordPlus.mp.checkPassword(input.value)) {
        _ucUtils.windows.forEach((doc, win) => {
          doc.getElementById('mpPinput').value = '';
          doc.getElementById('mpPlus').style.display = 'none';
          win.titObs.disconnect();
          doc.title = win.titulo;
          win.removeEventListener('keydown', _ucUtils.sharedGlobal.masterPasswordPlus.keydownFunc, true);
          win.addEventListener('AppCommand', HandleAppCommandEvent, true);
        }, false);
        _ucUtils.sharedGlobal.masterPasswordPlus.locked = false;
      } else {
        input.value = '';
      }
    } else if ((e.key.length > 2 && // teclas digitáveis quase sempre =1, exceto acento seguido de char não acentuável, aí =2.
                e.code.length == 2 && // F1 a F9 possuem key.length =2, mas são as únicas com code.length = 2, demais são > (como KeyA).
                e.key != 'Dead' && // teclas de acento, que aguardam a tecla seguinte
                e.key != 'Backspace' && e.key != 'Delete' && e.key != 'ArrowLeft' && e.key != 'ArrowRight' && e.key != 'Home' && e.key != 'End') || e.altKey || (e.ctrlKey && e.code != 'KeyA')) {
      e.preventDefault();
    }
  },
 
  atalho: function (el) {
      el.setAttribute('oncommand', '_ucUtils.sharedGlobal.masterPasswordPlus.lockAll();');
      el.setAttribute('modifiers', 'accel alt shift');
      el.setAttribute('key', 'W');
  },
 
  onTitleChanged: function (win) {
    let document = win.document;
    let observer = new MutationObserver(mutationsList => {
      if (mutationsList[0].oldValue !== document.title && document.title != '🞻🞻🞻🞻🞻🞻') {
        win.titulo = document.title;
        document.title = '🞻🞻🞻🞻🞻🞻';
      }
    });
 
    if (document.getElementsByTagName('title').length)
      observer.observe(document.getElementsByTagName('title')[0], { childList: true, characterData: true });
    else
      observer.observe(document.documentElement, { attributeFilter: ['title'], attributeOldValue: true });
 
    return observer;
  },
 
  lock: function (doc, win) {
    win.addEventListener('keydown', _ucUtils.sharedGlobal.masterPasswordPlus.keydownFunc, true);
    let input = doc.getElementById('mpPinput');
    input.value = '';
    doc.getElementById('mpPlus').style.display = 'block';
    win.titulo = doc.title;
    doc.title = '🞻🞻🞻🞻🞻🞻';
    win.titObs = this.onTitleChanged(win);
    win.removeEventListener('AppCommand', HandleAppCommandEvent, true);
    input.focus();
  },
 
  lockAll: function () {
    if (!_ucUtils.sharedGlobal.masterPasswordPlus.mp.hasPassword)
      return;
 
    this.locked = true;
    _ucUtils.windows.forEach((doc, win) => {
      this.lock(doc, win);
    }, false);
  },
 
  locked: true,
 
  destroy: function () {
    _ucUtils.windows.forEach((doc) => {
      let mpPlus = doc.getElementById('mpPlus');
      if (mpPlus) {
        doc.getElementById('mpPlus').remove();
      }
      let mpPk = doc.getElementById('mpPk');
      if (mpPk) {
        mpPk.setAttribute('modifiers', '');
        mpPk.setAttribute('oncommand', '');
        mpPk.setAttribute('key', '');
      }
    }, false);
    delete _ucUtils.sharedGlobal.masterPasswordPlus;
  }
}
