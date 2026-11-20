document.addEventListener('DOMContentLoaded',function(){
var h=document.querySelector('header.site');addEventListener('scroll',function(){h.classList.toggle('scrolled',scrollY>8)},{passive:true});
var b=document.querySelector('.burger'),n=document.querySelector('nav.main');
if(b){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)})}
document.querySelectorAll('form.lead').forEach(function(f){
f.addEventListener('submit',function(e){e.preventDefault();var ok=true;
f.querySelectorAll('[required]').forEach(function(inp){var er=inp.parentElement.querySelector('.err');var bad=!inp.value.trim()||(inp.type==='email'&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(inp.value))||(inp.type==='url'&&!/^https?:\/\//i.test(inp.value)&&inp.value.indexOf('.')<0);
if(er)er.textContent=bad?'Please enter a valid value.':'';if(bad)ok=false});
if(!ok)return;f.innerHTML='<div class="ok" role="status"><strong>Thanks — request received.</strong><br>Our team will review your website and reply with your free proposal.</div>'})});
var tb=document.querySelector('[data-tool]');if(!tb)return;var kind=tb.getAttribute('data-tool');
function num(id){var v=parseFloat(document.getElementById(id).value);return isNaN(v)?null:v}
function out(t){document.getElementById('tool-result').textContent=t}
var btn=document.getElementById('tool-go');if(!btn)return;
btn.addEventListener('click',function(){
try{
if(kind.indexOf('calc:')===0){var f=kind.slice(5),a=num('f1'),c=num('f2');if(a===null||c===null){out('Enter both numbers.');return}
var r={'cpm':(a/c*1000),'cpc':(a/c),'cpa':(a/c),'ctr':(a/c*100),'cr':(a/c*100),'roas':(a/c)}[f];
var lbl={'cpm':'CPM = $','cpc':'CPC = $','cpa':'CPA = $','ctr':'CTR = ','cr':'Conversion rate = ','roas':'ROAS = '}[f];
out(lbl+r.toFixed(2)+(f==='ctr'||f==='cr'?' %':f==='roas'?'x':''));}
else if(kind==='text:word'){var t=document.getElementById('f1').value;out('Words: '+(t.trim()?t.trim().split(/\s+/).length:0)+' · Characters: '+t.length)}
else if(kind==='text:density'){var tx=document.getElementById('f1').value.toLowerCase(),kw=document.getElementById('f2').value.toLowerCase().trim();if(!kw){out('Enter a keyword.');return}var w=tx.split(/[^a-z0-9]+/).filter(Boolean);var hits=w.filter(function(x){return x===kw}).length;out('Density: '+(w.length?(hits/w.length*100).toFixed(2):'0')+'% ('+hits+' of '+w.length+' words)')}
else if(kind==='text:age'){var d=new Date(document.getElementById('f1').value);if(isNaN(d)){out('Pick a date.');return}var yrs=(Date.now()-d.getTime())/31557600000;out('Age: '+yrs.toFixed(1)+' years')}
else if(kind==='schema'){var ty=tb.getAttribute('data-schema');var nm=document.getElementById('f1').value||'Example';var url=document.getElementById('f2').value||'https://example.com/';
var obj={'@context':'https://schema.org','@type':ty,'name':nm,'url':url};
if(ty==='FAQPage')obj={'@context':'https://schema.org','@type':'FAQPage','mainEntity':[{'@type':'Question','name':nm,'acceptedAnswer':{'@type':'Answer','text':url}}]};
document.getElementById('tool-pre').textContent=JSON.stringify(obj,null,2);out('Schema generated — copy it into your page <head> or body.')}
else if(kind==='keyword'){var seed=document.getElementById('f1').value.trim();if(!seed){out('Enter a seed keyword.');return}
var pre=['best','top','cheap','affordable','professional'],suf=['services','company','agency','near me','pricing','for small business'],res=[];
pre.forEach(function(p){res.push(p+' '+seed)});suf.forEach(function(s){res.push(seed+' '+s)});res.push(seed);document.getElementById('tool-pre').textContent=res.join('\n');out(res.length+' keyword ideas')}
else{out('Demo result: connect this tool to live data to return real-time results for the URL entered.')}
}catch(e){out('Please check your inputs.')}})});
