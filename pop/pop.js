const POPUP_ENABLED = true;
let popupLoaded = false;

function log(type, msg, extra = '') {
  const pageTitle = document.title || '(sem título)';
  const pageUrl = window.location.href;

  const styles = {
    success: 'background:#1a7a4a;color:#afffce;font-weight:bold;padding:2px 8px;border-radius:4px;',
    error:   'background:#7a1a1a;color:#ffafaf;font-weight:bold;padding:2px 8px;border-radius:4px;',
    warn:    'background:#7a5e1a;color:#fff3af;font-weight:bold;padding:2px 8px;border-radius:4px;',
    info:    'background:#1a3a7a;color:#afd4ff;font-weight:bold;padding:2px 8px;border-radius:4px;',
  };

  const emojis = {
    success: '✅',
    error:   '❌',
    warn:    '⚠️',
    info:    'ℹ️',
  };

  const label = `${emojis[type]} [Popup]`;
  const detail = `📄 Página: "${pageTitle}"\n🔗 URL: ${pageUrl}${extra ? '\n' + extra : ''}`;

  console.groupCollapsed(`%c${label}%c ${msg}`, styles[type], 'color:inherit;font-weight:normal;');
  console.log(detail);
  console.groupEnd();
}

function loadPopup() {
  if (!POPUP_ENABLED) {
    log('warn', 'Popup desativado via configuração.');
    return;
  }

  if (popupLoaded) return;

  const script = document.createElement('script');
  script.src = "https://pl29321559.profitablecpmratenetwork.com/ef/89/59/ef8959a132a6099f02e3f1b4146e32ab.js";

  script.onload = function () {
    popupLoaded = true;
    log('success', 'Script carregado com sucesso!', `📦 Src: ${script.src}`);
  };

  script.onerror = function () {
    log('error', 'Falha ao carregar o script.', `📦 Src: ${script.src}`);
  };

  log('info', 'Iniciando carregamento do popup...');
  document.head.appendChild(script);
}

loadPopup();
