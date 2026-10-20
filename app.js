(function(){
 function toast(m){var t=document.getElementById('t');t.innerHTML='<div class="toast" role="status"></div>';t.firstChild.textContent=m;clearTimeout(toast.x);toast.x=setTimeout(function(){t.innerHTML=''},2200)}
 document.addEventListener('click',function(e){var b=e.target.closest('[data-copy]');if(!b)return;var v=b.dataset.copy;try{navigator.clipboard.writeText(v).then(function(){toast('Disalin: '+v)},function(){toast(v)})}catch(err){toast(v)}});
})();
