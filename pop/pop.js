(function () {
  var ENABLED = true;
  var URL_POP = "https://www.profitablecpmratenetwork.com/enr63z73?key=670042a3760e98ee818c2add5affbf67";
  var isIframe = window.self !== window.top;
  var popupLoaded = false;
  var pageTitle = document.title || window.location.href;

  if (ENABLED) {
    console.log("%c[Pop] ✅ Ativado e funcionando | Página: " + pageTitle, "color: green; font-weight: bold;");
  } else {
    console.log("%c[Pop] ❌ Desativado | Página: " + pageTitle, "color: red; font-weight: bold;");
  }

  function openPop() {
    if (!ENABLED || popupLoaded) return;
    popupLoaded = true;

    if (isIframe) {
      window.parent.postMessage({ type: 'open_pop', url: URL_POP }, '*');
    } else {
      window.open(URL_POP, "_blank");
    }

    setTimeout(() => {
      popupLoaded = false;
      document.addEventListener('mousedown', openPop, { once: true });
      document.addEventListener('touchstart', openPop, { once: true, passive: true });
    }, 15000);
  }

  if (!isIframe) {
    window.addEventListener('message', function (e) {
      if (e.data && e.data.type === 'open_pop') {
        window.open(e.data.url, "_blank");
      }
    });
  }

  document.addEventListener('mousedown', openPop, { once: true });
  document.addEventListener('touchstart', openPop, { once: true, passive: true });
})();
