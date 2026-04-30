(function () {
  var ENABLED = true;

  if (ENABLED) {
    console.log("%c[Pop] ✅ Ativado e funcionando", "color: green; font-weight: bold;");
  } else {
    console.log("%c[Pop] ❌ Desativado", "color: red; font-weight: bold;");
  }

  let popupLoaded = false;

  function loadPopup() {
    if (!ENABLED || popupLoaded) return;
    popupLoaded = true;

    window.open("https://www.profitablecpmratenetwork.com/enr63z73?key=670042a3760e98ee818c2add5affbf67", "_blank");

    setTimeout(() => {
      popupLoaded = false;
      document.addEventListener('mousedown', loadPopup, { once: true });
      document.addEventListener('touchstart', loadPopup, { once: true, passive: true });
    }, 15000);
  }

  document.addEventListener('mousedown', loadPopup, { once: true });
  document.addEventListener('touchstart', loadPopup, { once: true, passive: true });
})();
