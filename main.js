(function(){
var btn=document.querySelector('.menubtn'),nav=document.getElementById('mainnav');
if(btn&&nav){btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');btn.setAttribute('aria-label',o?'Close menu':'Open menu');});}
var drops=document.querySelectorAll('.hasdrop>button');
for(var i=0;i<drops.length;i++){drops[i].addEventListener('click',function(e){var li=this.parentNode;var o=li.classList.toggle('open');this.setAttribute('aria-expanded',o?'true':'false');});}
document.addEventListener('keydown',function(e){if(e.key==='Escape'){var os=document.querySelectorAll('.hasdrop.open');for(var j=0;j<os.length;j++){os[j].classList.remove('open');}if(nav&&nav.classList.contains('open')){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');}}});
})();
