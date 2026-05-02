(function () {
  var ENABLED = true;
  var URL_POP = "https://www.profitablecpmratenetwork.com/enr63z73?key=670042a3760e98ee818c2add5affbf67";
  var pageTitle = document.title || window.location.href;

  if (ENABLED) {
    console.log("%c[Pop] âœ… Ativado | PÃ¡gina: " + pageTitle, "color: green; font-weight: bold;");
  } else {
    console.log("%c[Pop] âŒ Desativado | PÃ¡gina: " + pageTitle, "color: red; font-weight: bold;");
  }

  if (!ENABLED) return;

  function init() {
    var popupLoaded = false;

    var overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999;';
    document.body.appendChild(overlay);

    function onTouch() {
      if (popupLoaded) return;
      popupLoaded = true;

      overlay.style.pointerEvents = 'none';
      window.open(URL_POP, "_blank");
      console.log("%c[Pop] ðŸš€ Disparado | " + pageTitle, "color: cyan; font-weight: bold;");

      setTimeout(() => {
        popupLoaded = false;
        overlay.style.pointerEvents = 'auto';
        console.log("%c[Pop] ðŸ”„ Reativado | " + pageTitle, "color: green; font-weight: bold;");
      }, 15000);
    }

    overlay.addEventListener('mousedown', onTouch);
    overlay.addEventListener('touchend', onTouch, { passive: true });
  }

  if (document.body) {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }

})();
