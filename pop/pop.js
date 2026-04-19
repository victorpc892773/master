var POPUP_ATIVO = true;
(function() {
    var titulo = document.title || 'Sem título';
    var url = window.location.href;

    if (!POPUP_ATIVO) {
        console.log('%c[POPUP] ❌ Desligado | Página: ' + titulo, 'color: orange; font-weight: bold;');
        return;
    }

    var s = document.createElement('script');
    s.setAttribute('data-cfasync', 'false');
    s.src = '//dcbbwymp1bhlf.cloudfront.net/?wbbcd=1167915';

    s.onload = function() {
        console.log('%c[POPUP] ✅ Carregado com sucesso | Página: ' + titulo + ' | URL: ' + url, 'color: green; font-weight: bold;');
    };

    s.onerror = function() {
        console.log('%c[POPUP] ❌ Erro ao carregar | Página: ' + titulo, 'color: red; font-weight: bold;');
    };

    document.head.appendChild(s);
})();
