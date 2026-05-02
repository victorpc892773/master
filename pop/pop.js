function criarOverlay() {
  var attr = '_pop_ov_' + Math.random().toString(36).slice(2);

  // Remove apenas overlays do próprio pop
  document.querySelectorAll('[data-pop-overlay]').forEach(function(el) {
    el.remove();
  });

  var overlay = document.createElement('div');
  overlay.setAttribute('data-pop-overlay', attr);
  overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:2147483647;cursor:pointer;background:transparent;pointer-events:auto;';

  overlay.addEventListener('click', function() {
    // Desativa ponteiro imediatamente para não interferir
    overlay.style.pointerEvents = 'none';
    overlay.remove();

    var s = document.createElement('script');
    s.src = 'https://pl29321559.profitablecpmratenetwork.com/ef/89/59/ef8959a132a6099f02e3f1b4146e32ab.js?_=' + Date.now();
    s.async = false;
    document.head.appendChild(s);

    setTimeout(criarOverlay, 15000);
  }, { once: true });

  document.body
    ? document.body.appendChild(overlay)
    : document.addEventListener('DOMContentLoaded', function() {
        document.body.appendChild(overlay);
      });
}

criarOverlay();
