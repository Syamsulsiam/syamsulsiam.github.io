
(function(){
 try{var q=new URLSearchParams(location.search).get('paket');var sel=document.getElementById('fp');if(q&&sel){[].forEach.call(sel.options,function(o){if(o.text===q)sel.value=o.text})}}catch(e){}
 function toast(m){var t=document.getElementById('t');t.innerHTML='<div class="toast" role="status"></div>';t.firstChild.textContent=m;clearTimeout(toast.x);toast.x=setTimeout(function(){t.innerHTML=''},2200)}
 function copy(v){try{navigator.clipboard.writeText(v).then(function(){toast('Disalin: '+v)},function(){toast(v)})}catch(e){toast(v)}}
 document.addEventListener('click',function(e){var b=e.target.closest('[data-copy]');if(b){copy(b.dataset.copy)}});
 var F=document.getElementById('f');if(F)F.addEventListener('submit',function(e){
  e.preventDefault();
  var n=document.getElementById('fn').value.trim(),c=document.getElementById('fc').value.trim(),p=document.getElementById('fp').value,m=document.getElementById('fm').value.trim();
  var msg='Halo Pak Syamsul, saya '+(n||'[nama]')+(c?' dari '+c:'')+'. Saya tertarik dengan: '+p+'.'+(m?' '+m:'')+' Bisa kita jadwalkan konsultasi 30 menit?';
  var o=document.getElementById('out');o.hidden=false;
  o.innerHTML='<div class="out"></div><div class="ctas" style="margin-top:10px"><a class="btn solid" target="_blank" rel="noopener" style="background:var(--stamp);border-color:var(--stamp);color:var(--stamp-ink)">Kirim via WhatsApp</a><button type="button" class="btn">Salin pesan</button></div><p class="small" style="margin-top:8px">Kalau WhatsApp tidak terbuka, salin pesan lalu kirim ke +62 878-8762-5841.</p>';
  o.querySelector('.out').textContent=msg;
  o.querySelector('a').href='https://wa.me/6287887625841?text='+encodeURIComponent(msg);
  o.querySelector('button').addEventListener('click',function(){copy(msg)});
 });
})();
