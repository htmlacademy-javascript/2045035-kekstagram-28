(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))d(c);new MutationObserver(c=>{for(const p of c)if(p.type==="childList")for(const E of p.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&d(E)}).observe(document,{childList:!0,subtree:!0});function a(c){const p={};return c.integrity&&(p.integrity=c.integrity),c.referrerPolicy&&(p.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?p.credentials="include":c.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function d(c){if(c.ep)return;c.ep=!0;const p=a(c);fetch(c.href,p)}})();const b=(t,s)=>{const a=Math.ceil(Math.min(Math.abs(t),Math.abs(s))),d=Math.floor(Math.max(Math.abs(t),Math.abs(s))),c=Math.random()*(d-a+1)+a;return Math.floor(c)},ne=(t,s)=>{const a=[];return function(){let d=b(t,s);if(a.length>=s-t+1)return null;for(;a.includes(d);)d=b(t,s);return a.push(d),d}},R=t=>t[b(0,t.length-1)],B=t=>t.key==="Escape",G=t=>document.getElementById(t).content.firstElementChild,A=(t,s=!0)=>{t.classList.toggle("hidden",!s),document.body.classList.toggle("modal-open",s)},se=25,oe=["Поймала дзен.","Да, да! В это зеркало я буду фоткаться до тех пор, пока не состарюсь.","Любимая работа","Знали бы вы, что у меня на уме.","Моя жизнь меняется, потому что меняю ее я.","Ох, и достанется кому-то такая красота!","Я, снова я и опять я.","Я не одна на миллион, я одна из 8 миллиардов.","Оставлю за собой право не соответствовать вашим ожиданиям."],ie=["Всё отлично!","В целом всё неплохо. Но не всё.","Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.","Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.","Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.","Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"],ae=["Аристотель","Гамлет ","Ляля","Олимпия","Данте","Боян","Кекс"],ce=ne(1,1e5),le=()=>({id:ce(),avatar:`img/avatar-${b(1,6)}.svg`,message:Array.from({length:b(1,2)},()=>R(ie)).join(" "),name:R(ae)}),ue=(t,s)=>({id:++s,url:`photos/${s}.jpg`,description:R(oe),likes:b(15,200),comments:Array.from({length:b(4,15)},le)}),H=Array.from({length:se},ue),fe=t=>H.find(s=>s.id===t),me=5,D=document.querySelector(".comments-loader"),de=document.querySelector(".social__comment-count"),k=document.querySelector(".social__comments"),pe=G("usersComments");let x=[];const ge=({avatar:t,name:s,message:a})=>{const d=pe.cloneNode(!0),c=d.querySelector(".social__picture");return c.src=t,c.alt=s,d.querySelector(".social__text").textContent=a,d},he=new Intl.PluralRules("ru-RU"),ye=t=>{switch(t){case"one":return"комментария";default:return"комментариев"}},ve=(t,s)=>{const a=he.select(s),d=ye(a);de.textContent=`${t} из ${s} ${d}`},Ee=()=>{const t=k.children.length;let s=t+me;const a=s>=x.length;s=a?x.length:s;const d=x.slice(t,s),c=document.createDocumentFragment();for(const p of d)c.appendChild(ge(p));k.appendChild(c),ve(s,x.length),D.hidden=a};D.addEventListener("click",Ee);const Ce=t=>{x=t,D.click()},Te=()=>{k.innerHTML="",x=[]},L=document.querySelector(".big-picture"),_e=L.querySelector(".big-picture__img img"),be=L.querySelector(".social__caption"),xe=L.querySelector(".likes-count"),Le=L.querySelector(".big-picture__cancel"),K=t=>{B(t)&&(t.preventDefault(),j())},Se=t=>{_e.src=t.url,xe.textContent=t.likes,be.textContent=t.description,Ce(t.comments)},qe=t=>{t.preventDefault();const s=parseInt(t.currentTarget.dataset.id,10),a=fe(s);Se(a),A(L),document.addEventListener("keydown",K)};function j(){A(L,!1),document.removeEventListener("keydown",K),Te()}Le.addEventListener("click",j);const we=document.querySelector(".pictures"),Pe=G("picture"),U=document.createDocumentFragment(),Ae=({url:t,likes:s,comments:a,id:d,description:c},p)=>{const E=p.querySelector(".picture__img");E.src=t,E.alt=c,p.querySelector(".picture__likes").textContent=s,p.querySelector(".picture__comments").textContent=a.length,p.dataset.id=d};for(const t of H){const s=Pe.cloneNode(!0);Ae(t,s),s.addEventListener("click",qe),U.appendChild(s)}we.appendChild(U);var Me=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N={},Ie={get exports(){return N},set exports(t){N=t}};(function(t,s){(function(a,d){t.exports=d()})(Me,function(){var a={en:{required:"This field is required",email:"This field requires a valid e-mail address",number:"This field requires a number",integer:"This field requires an integer value",url:"This field requires a valid website URL",tel:"This field requires a valid telephone number",maxlength:"This fields length must be < ${1}",minlength:"This fields length must be > ${1}",min:"Minimum value for this field is ${1}",max:"Maximum value for this field is ${1}",pattern:"Please match the requested format",equals:"The two fields do not match"}};function d(l,n){for(;(l=l.parentElement)&&!l.classList.contains(n););return l}function c(l){var n=arguments;return this.replace(/\${([^{}]*)}/g,function(m,r){return n[r]})}function p(l){return l.pristine.self.form.querySelectorAll('input[name="'+l.getAttribute("name")+'"]:checked').length}function E(l,n){for(var m in n)m in l||(l[m]=n[m]);return l}var F={classTo:"form-group",errorClass:"has-danger",successClass:"has-success",errorTextParent:"form-group",errorTextTag:"div",errorTextClass:"text-help"},M="pristine-error",W="input:not([type^=hidden]):not([type^=submit]), select, textarea",J=["required","min","max","minlength","maxlength","pattern"],Q=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,Y=/-message(?:-([a-z]{2}(?:_[A-Z]{2})?))?/,v="en",$={},y=function(n,m){m.name=n,m.priority===void 0&&(m.priority=1),$[n]=m};y("text",{fn:function(n){return!0},priority:0}),y("required",{fn:function(n){return this.type==="radio"||this.type==="checkbox"?p(this):n!==void 0&&n!==""},priority:99,halt:!0}),y("email",{fn:function(n){return!n||Q.test(n)}}),y("number",{fn:function(n){return!n||!isNaN(parseFloat(n))},priority:2}),y("integer",{fn:function(n){return!n||/^\d+$/.test(n)}}),y("minlength",{fn:function(n,m){return!n||n.length>=parseInt(m)}}),y("maxlength",{fn:function(n,m){return!n||n.length<=parseInt(m)}}),y("min",{fn:function(n,m){return!n||(this.type==="checkbox"?p(this)>=parseInt(m):parseFloat(n)>=parseFloat(m))}}),y("max",{fn:function(n,m){return!n||(this.type==="checkbox"?p(this)<=parseInt(m):parseFloat(n)<=parseFloat(m))}}),y("pattern",{fn:function(n,m){var r=m.match(new RegExp("^/(.*?)/([gimy]*)$"));return!n||new RegExp(r[1],r[2]).test(n)}}),y("equals",{fn:function(n,m){var r=document.querySelector(m);return r&&(!n&&!r.value||r.value===n)}});function q(l,n,m){var r=this;w(l,n,m);function w(e,o,u){e.setAttribute("novalidate","true"),r.form=e,r.config=E(o||{},F),r.live=u!==!1,r.fields=Array.from(e.querySelectorAll(W)).map(function(i){var f=[],g={},C={};return[].forEach.call(i.attributes,function(h){if(/^data-pristine-/.test(h.name)){var T=h.name.substr(14),P=T.match(Y);if(P!==null){var O=P[1]===void 0?"en":P[1];C.hasOwnProperty(O)||(C[O]={}),C[O][T.slice(0,T.length-P[0].length)]=h.value;return}T==="type"&&(T=h.value),I(f,g,T,h.value)}else~J.indexOf(h.name)?I(f,g,h.name,h.value):h.name==="type"&&I(f,g,h.value)}),f.sort(function(h,T){return T.priority-h.priority}),r.live&&i.addEventListener(~["radio","checkbox"].indexOf(i.getAttribute("type"))?"change":"input",function(h){r.validate(h.target)}.bind(r)),i.pristine={input:i,validators:f,params:g,messages:C,self:r}}.bind(r))}function I(e,o,u,i){var f=$[u];if(f&&(e.push(f),i)){var g=u==="pattern"?[i]:i.split(",");g.unshift(null),o[u]=g}}r.validate=function(e,o){o=e&&o===!0||e===!0;var u=r.fields;e!==!0&&e!==!1&&(e instanceof HTMLElement?u=[e.pristine]:(e instanceof NodeList||e instanceof(window.$||Array)||e instanceof Array)&&(u=Array.from(e).map(function(C){return C.pristine})));for(var i=!0,f=0;u[f];f++){var g=u[f];ee(g)?!o&&re(g):(i=!1,!o&&z(g))}return i},r.getErrors=function(e){if(!e){for(var o=[],u=0;u<r.fields.length;u++){var i=r.fields[u];i.errors.length&&o.push({input:i.input,errors:i.errors})}return o}return e.tagName&&e.tagName.toLowerCase()==="select"?e.pristine.errors:e.length?e[0].pristine.errors:e.pristine.errors};function ee(e){for(var o=[],u=!0,i=0;e.validators[i];i++){var f=e.validators[i],g=e.params[f.name]?e.params[f.name]:[];if(g[0]=e.input.value,!f.fn.apply(e.input,g)&&(u=!1,typeof f.msg=="function"?o.push(f.msg(e.input.value,g)):typeof f.msg=="string"?o.push(c.apply(f.msg,g)):f.msg===Object(f.msg)&&f.msg[v]?o.push(c.apply(f.msg[v],g)):e.messages[v]&&e.messages[v][f.name]?o.push(c.apply(e.messages[v][f.name],g)):a[v]&&a[v][f.name]&&o.push(c.apply(a[v][f.name],g)),f.halt===!0))break}return e.errors=o,u}r.addValidator=function(e,o,u,i,f){e instanceof HTMLElement?(e.pristine.validators.push({fn:o,msg:u,priority:i,halt:f}),e.pristine.validators.sort(function(g,C){return C.priority-g.priority})):console.warn("The parameter elem must be a dom element")};function V(e){if(e.errorElements)return e.errorElements;var o=d(e.input,r.config.classTo),u=null,i=null;return r.config.classTo===r.config.errorTextParent?u=o:u=o.querySelector("."+r.config.errorTextParent),u&&(i=u.querySelector("."+M),i||(i=document.createElement(r.config.errorTextTag),i.className=M+" "+r.config.errorTextClass,u.appendChild(i),i.pristineDisplay=i.style.display)),e.errorElements=[o,i]}function z(e){var o=V(e),u=o[0],i=o[1];u&&(u.classList.remove(r.config.successClass),u.classList.add(r.config.errorClass)),i&&(i.innerHTML=e.errors.join("<br/>"),i.style.display=i.pristineDisplay||"")}r.addError=function(e,o){e=e.length?e[0]:e,e.pristine.errors.push(o),z(e.pristine)};function te(e){var o=V(e),u=o[0],i=o[1];return u&&(u.classList.remove(r.config.errorClass),u.classList.remove(r.config.successClass)),i&&(i.innerHTML="",i.style.display="none"),o}function re(e){var o=te(e)[0];o&&o.classList.add(r.config.successClass)}return r.reset=function(){for(var e=0;r.fields[e];e++)r.fields[e].errorElements=null;Array.from(r.form.querySelectorAll("."+M)).map(function(o){o.parentNode.removeChild(o)}),Array.from(r.form.querySelectorAll("."+r.config.classTo)).map(function(o){o.classList.remove(r.config.successClass),o.classList.remove(r.config.errorClass)})},r.destroy=function(){r.reset(),r.fields.forEach(function(e){delete e.input.pristine}),r.fields=[]},r.setGlobalConfig=function(e){F=e},r}return q.addValidator=function(l,n,m,r,w){y(l,{fn:n,msg:m,priority:r,halt:w})},q.addMessages=function(l,n){var m=a.hasOwnProperty(l)?a[l]:a[l]={};Object.keys(n).forEach(function(r,w){m[r]=n[r]})},q.setLocale=function(l){v=l},q})})(Ie);const Oe=N,Re={classTo:"text__hashtags__label",errorTextParent:"text__hashtags__label",errorTextClass:"hashtags__error"},ke=/^#[a-zа-яё0-9]*$/i;let _="Default error";const Ne=t=>{if(t==="")return!0;const s=t.trim().toLocaleLowerCase().split(" ");return s.every(a=>a[0]!=="#"?(_="Хэштег должен начинаться с #",!1):a.length>20?(_="Максимальная длина одного хэш-тега 20 символов, включая решётку",!1):a.length===1?(_="Хэштег не может состоять только из одной решётки",!1):ke.test(a)?s.length>5?(_="Нельзя указать больше пяти хэш-тегов",!1):s.length!==new Set(s).size?(_="Один и тот же хэш-тег не может быть использован дважды",!1):!0:(_="Хэштег должен состоять из букв и цифр; не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.",!1))},De=t=>{const{hashtags:s,description:a}=t.elements,d=()=>document.activeElement===s||document.activeElement===a,c=new Oe(t,Re);return c.addValidator(s,Ne,()=>_),{isTextFocused:d,validate(){c.validate()},resetValidation(){c.reset()}}},S=document.querySelector(".img-upload__form"),Z=S.querySelector(".img-upload__overlay"),Fe=S.filename,$e=()=>S.reset(),{isTextFocused:Ve,validate:ze,resetValidation:Be}=De(S),X=t=>{B(t)&&!Ve()&&(t.preventDefault(),$e())},Ge=()=>{A(Z),document.addEventListener("keydown",X)};Fe.addEventListener("change",Ge);S.addEventListener("reset",()=>{A(Z,!1),document.removeEventListener("keydown",X),Be()});S.addEventListener("submit",t=>{t.preventDefault(),ze()});
