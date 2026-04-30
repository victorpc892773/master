(function () {
  var ENABLED = true;
  var URL_POP = "https://crn77.com/4/8868046";
  var pageTitle = document.title || window.location.href;

  var isIframe = window.self !== window.top;
  var isSameOrigin = false;
  if (isIframe) {
    try {
      var _ = window.parent.location.href;
      isSameOrigin = true;
    } catch (e) {
      isSameOrigin = false;
    }
  }

  if (ENABLED) {
    console.log(
      "%c[Pop] ✅ Ativado | Página: " + pageTitle + " | iframe: " + isIframe + " | mesmo site: " + isSameOrigin,
      "color: green; font-weight: bold;"
    );
  } else {
    console.log("%c[Pop] ❌ Desativado | Página: " + pageTitle, "color: red; font-weight: bold;");
  }

  var popupLoaded = false;
  var waitingForRoot = false;

  // Encontra o topo acessível (mesmo origin) da cadeia de iframes
  function getRoot() {
    var root = window;
    try {
      while (root.parent && root.parent !== root) {
        var _ = root.parent.location.href; // lança se cross-origin
        root = root.parent;
      }
    } catch (e) {
      // parou no limite cross-origin, root é o mais alto acessível
    }
    return root;
  }

  function openPop() {
    if (!ENABLED || popupLoaded) return;
    popupLoaded = true;

    if (isIframe && isSameOrigin) {
      // Envia para o topo acessível coordenar a sequência
      waitingForRoot = true;
      console.log("%c[Pop] ⏳ Aguardando root... | " + pageTitle, "color: orange; font-weight: bold;");
      var root = getRoot();
      root.postMessage({ type: 'pop_register', url: URL_POP, title: pageTitle }, '*');
    } else {
      // Cross-origin ou já é o topo: abre direto
      window.open(URL_POP, "_blank");
      console.log("%c[Pop] 🚀 Disparado direto | " + pageTitle, "color: cyan; font-weight: bold;");
    }

    setTimeout(() => {
      popupLoaded = false;
      waitingForRoot = false;
      document.addEventListener('mousedown', openPop, { once: true });
      document.addEventListener('touchstart', openPop, { once: true, passive: true });
    }, 15000);
  }

  // Coordenador: roda no topo da cadeia same-origin
  // Coleta registros e dispara em sequência com delay
  var popQueue = [];
  var queueRunning = false;

  function runQueue() {
    if (queueRunning || popQueue.length === 0) return;
    queueRunning = true;

    function next() {
      if (popQueue.length === 0) {
        queueRunning = false;
        return;
      }
      var item = popQueue.shift();
      item.source.postMessage({ type: 'pop_go', url: item.url }, '*');
      console.log("%c[Pop] 📨 Disparando: " + item.title, "color: purple; font-weight: bold;");
      setTimeout(next, 600); // 600ms entre cada pop
    }

    next();
  }

  window.addEventListener('message', function (e) {
    if (!e.data) return;

    // Topo recebe registros dos filhos e enfileira
    if (e.data.type === 'pop_register') {
      popQueue.push({ source: e.source, url: e.data.url, title: e.data.title });
      console.log("%c[Pop] 📥 Registrado: " + e.data.title, "color: yellow; font-weight: bold;");

      // Aguarda 100ms para coletar todos antes de disparar
      if (!queueRunning) {
        setTimeout(runQueue, 100);
      }
    }

    // Filho recebe sinal para disparar
    if (e.data.type === 'pop_go' && waitingForRoot) {
      waitingForRoot = false;
      window.open(e.data.url, "_blank");
      console.log("%c[Pop] 🚀 Disparado pela fila | " + pageTitle, "color: cyan; font-weight: bold;");
    }
  });

  document.addEventListener('mousedown', openPop, { once: true });
  document.addEventListener('touchstart', openPop, { once: true, passive: true });
})();
