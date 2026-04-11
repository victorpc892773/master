var ATIVO = false; // false or true

(function(){
  if(!ATIVO) return;
  var z=['5888865','7514922','7514919'],s=document.createElement('script');
  s.dataset.zone=z[Math.random()*3|0];
  s.src='https://llvpn.com/tag.min.js';
  console.log('[AdZone]',s.dataset.zone);
  (document.body||document.documentElement).appendChild(s);
})();
