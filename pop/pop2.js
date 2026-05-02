const POPUP_ENABLED = true;
let popupLoaded = false;

function loadPopup() {
  const pageTitle = document.title || '(sem título)';
  const pageUrl = window.location.href;

  if (!POPUP_ENABLED) {
    console.log(`[Popup] Desativado via configuração. | Página: "${pageTitle}" | URL: ${pageUrl}`);
    return;
  }

  if (popupLoaded) return;

  const script = document.createElement('script');
  script.src = "https://pl29321559.profitablecpmratenetwork.com/ef/89/59/ef8959a132a6099f02e3f1b4146e32ab.js";

  script.onload = function () {
    console.log(`[Popup] Carregado com sucesso. | Página: "${pageTitle}" | URL: ${pageUrl}`);
    popupLoaded = true;
  };

  script.onerror = function () {
    console.error(`[Popup] Erro ao carregar o script. | Página: "${pageTitle}" | URL: ${pageUrl}`);
  };

  document.head.appendChild(script);
}

loadPopup();
