(function () {
  var ENABLED = true;
  var URL_POP = "https://www.profitablecpmratenetwork.com/enr63z73?key=670042a3760e98ee818c2add5affbf67";
  var pageTitle = document.title || window.location.href;

  // Verifica se está em iframe E se o pai é do mesmo site
  var isIframe = window.self !== window.top;
  var isSameOrigin = false;
  if (isIframe) {
    try {
      // Se conseguir acessar o parent.location, é mesmo domínio
      var _ = window.parent.location.href;
      isSameOrigin = true;
    } catch (e) {
      isSameOrigin = false;
    }
  }

  if (ENABLED) {
    console.log("%c[Pop] ✅ Ativado | Página: " + pageTitle + " | iframe: " + isIframe + " | mesmo site: " + isSameOrigin, "color: green; font-weight: bold;");
  } else {
    console.log("%c[Pop] ❌ Desativado | Página: " + pageTitle, "color: red; font-weight: bold;");
  }

  var popupLoaded = false;
  var waitingForParent = false;

  function openPop() {
    if (!ENABLED || popupLoaded) return;
    popupLoaded = true;

    if (isIframe && isSameOrigin) {
      // Mesmo site: espera o pai disparar primeiro, depois abre o seu
      waitingForParent = true;
      console.log("%c[Pop] ⏳ Aguardando pop pai... | " + pageTitle, "color: orange; font-weight: bold;");
      window.parent.postMessage({ type: 'pop_filho_aguardando', url: URL_POP }, '*');
    } else {
      // Iframe cross-origin ou página principal: abre normalmente
      window.open(URL_POP, "_blank");
      console.log("%c[Pop] 🚀 Disparado | " + pageTitle, "color: cyan; font-weight: bold;");
    }

    setTimeout(() => {
      popupLoaded = false;
      waitingForParent = false;
      document.addEventListener('mousedown', openPop, { once: true });
      document.addEventListener('touchstart', openPop, { once: true, passive: true });
    }, 15000);
  }

  // Página pai: escuta o filho e após abrir o próprio, libera o filho
  if (!isIframe) {
    window.addEventListener('message', function (e) {
      if (e.data && e.data.type === 'pop_filho_aguardando') {
        // Pai já abriu o seu, agora manda sinal para o filho abrir
        setTimeout(function () {
          e.source.postMessage({ type: 'pop_pai_disparado', url: e.data.url }, '*');
          console.log("%c[Pop] 📨 Sinal enviado ao filho", "color: purple; font-weight: bold;");
        }, 500); // 500ms de delay entre os dois pops
      }
    });
  }

  // Filho: recebe sinal do pai e abre o seu popup
  if (isIframe && isSameOrigin) {
    window.addEventListener('message', function (e) {
      if (e.data && e.data.type === 'pop_pai_disparado' && waitingForParent) {
        waitingForParent = false;
        window.open(e.data.url, "_blank");
        console.log("%c[Pop] 🚀 Filho disparado após pai | " + pageTitle, "color: cyan; font-weight: bold;");
      }
    });
  }

  document.addEventListener('mousedown', openPop, { once: true });
  document.addEventListener('touchstart', openPop, { once: true, passive: true });
})();
