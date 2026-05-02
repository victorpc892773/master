function criarOverlay() {
  var fired = false;

  var overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:2147483647;cursor:pointer;background:transparent;';

  overlay.addEventListener('click', function() {
    if (fired) return;
    fired = true;

    var s = document.createElement('script');
    s.src = 'https://pl29321559.profitablecpmratenetwork.com/ef/89/59/ef8959a132a6099f02e3f1b4146e32ab.js?_=' + Date.now();
    s.async = false;
    document.head.appendChild(s);

    overlay.remove();

    // Reativa após 15 segundos
    setTimeout(criarOverlay, 15000);
  });

  document.body
    ? document.body.appendChild(overlay)
    : document.addEventListener('DOMContentLoaded', function() {
        document.body.appendChild(overlay);
      });
}

criarOverlay();
