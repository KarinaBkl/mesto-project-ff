(()=>{"use strict";var e={866:(e,t,n)=>{n.d(t,{F7:()=>l,HL:()=>s,eg:()=>u,gH:()=>i,h_:()=>a,ug:()=>c,vp:()=>p,xG:()=>d});var r={baseUrl:"https://mesto.nomoreparties.co/v1/wff-cohort-17",headers:{authorization:"f2641971-248b-49a3-b277-1116f601bafa","Content-Type":"application/json"}},o=function(e){if(!e.ok)throw new Error("Ошибка ".concat(e.status));return e.json()},c=function(){return fetch("".concat(r.baseUrl,"/users/me"),{headers:r.headers}).then(o)},a=function(){return fetch("".concat(r.baseUrl,"/cards"),{headers:r.headers}).then(o)};function u(e,t){return fetch("".concat(r.baseUrl,"/users/me"),{method:"PATCH",headers:r.headers,body:JSON.stringify({name:e,about:t})}).then(o)}function i(e,t){return fetch("".concat(r.baseUrl,"/cards"),{method:"POST",headers:r.headers,body:JSON.stringify({name:e,link:t})}).then(o)}function l(e){return fetch("".concat(r.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:r.headers}).then(o)}function s(e){return fetch("".concat(r.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:r.headers}).then(o)}function p(e){return fetch("".concat(r.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:r.headers}).then(o)}function d(e){return fetch("".concat(r.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:r.headers,body:JSON.stringify({avatar:e})}).then(o)}},694:(e,t,n)=>{n.d(t,{ZM:()=>c,io:()=>a,zY:()=>o});var r=n(866);function o(e,t,n,r,o,c,a,u,i){var l=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),s=l.querySelector(".card__image"),p=l.querySelector(".card__delete-button"),d=l.querySelector(".meter__likes"),f=l.querySelector(".card__like-button");return d.textContent=n.length,s.src=t,l.querySelector(".card__title").textContent=e,s.alt=e,r===c?(p.style.display="block",p.addEventListener("click",(function(){return u(l,c,r,o)}))):p.style.display="none",n.some((function(e){return e._id===c}))&&f.classList.add("card__like-button_is-active"),f.addEventListener("click",(function(){return a(f,o,d)})),s.addEventListener("click",(function(){i({name:e,link:t})})),l}function c(e,t,n,o){n===t?(0,r.F7)(o).then((function(){e.remove()})).catch((function(e){console.error("Произошла ошибка:",e)})):console.error("Можно удалять только собственные посты")}function a(e,t,n){(e.classList.contains("card__like-button_is-active")?r.vp:r.HL)(t).then((function(t){n.textContent=t.likes.length,e.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)}))}},365:(e,t,n)=>{},850:(e,t,n)=>{var r=n(694),o=n(947),c=n(547),a=n(866);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i,l=document.querySelector(".profile__title"),s=document.querySelector(".profile__description"),p=document.querySelector(".popup__input_type_name"),d=document.querySelector(".popup__input_type_description"),f=document.querySelector(".profile__add-button"),_=document.querySelector(".profile__edit-button"),y=document.querySelector(".popup_type_edit"),m=document.querySelector(".popup__input_type_card-name"),v=document.querySelector(".popup__input_type_url"),h=document.querySelector(".places__list"),S=document.querySelector('.popup__form[name="new-place"]'),b=y.querySelector(".popup__form"),q=document.querySelector(".popup_type_image"),C=q.querySelector(".popup__image"),E=q.querySelector(".popup__caption"),L=document.querySelector(".popup_type_new-card"),g=document.querySelector(".profile__image"),k=document.querySelector(".profile__image-button"),x=document.querySelector(".popup_type_edit-avatar"),A=x.querySelector(".popup__avatar"),w=document.querySelector(".popup_type_edit-avatar-url");function P(e){C.src=e.link,C.alt=e.name,E.textContent=e.name,(0,o.PB)(q)}Promise.all([(0,a.ug)(),(0,a.h_)()]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[0],a=o[1];s.textContent=c.about,l.textContent=c.name,g.src=c.avatar,i=c._id,a.forEach((function(e){h.append((0,r.zY)(e.name,e.link,e.likes,e.owner._id,e._id,i,r.io,r.ZM,P))}))})).catch((function(e){console.error("Произошла ошибка:",e)})),b.addEventListener("submit",(function(e){e.preventDefault();var t=p.value,n=d.value;l.textContent=t,s.textContent=n;var r=document.querySelector(".popup_is-opened").querySelector(".popup__button");r.textContent="Сохранение...",(0,a.eg)(t,n).then((function(){(0,o.fs)(y)})).catch((function(e){console.error("Ошибка при обновлении профиля:",e)})).finally((function(){r.textContent="Сохранить"}))})),_.addEventListener("click",(function(){(0,o.PB)(y),(0,c.RC)(b,c.$W),p.value=l.textContent,d.value=s.textContent})),f.addEventListener("click",(function(){(0,o.PB)(L),(0,c.RC)(S,c.$W)})),k.addEventListener("click",(function(){(0,o.PB)(x),w.value="",(0,c.RC)(A,c.$W)})),A.addEventListener("submit",(function(e){e.preventDefault();var t=w.value,n=document.querySelector(".popup_is-opened").querySelector(".popup__button");n.textContent="Сохранение...",(0,a.xG)(t).then((function(e){g.src=e.avatar,(0,o.fs)(x)})).catch((function(e){console.error("Ошибка при обновлении аватара:",e)})).finally((function(){n.textContent="Сохранить"}))})),S.addEventListener("submit",(function(e){e.preventDefault();var t=document.querySelector(".popup_is-opened").querySelector(".popup__button");t.textContent="Сохранение...",(0,a.gH)(m.value,v.value).then((function(e){var t=(0,r.zY)(e.name,e.link,e.likes,e.owner._id,e._id,i,r.io,r.ZM,P);h.prepend(t)})).catch((function(e){console.error("Ошибка при добавлении карточки:",e)})).finally((function(){S.reset(),(0,o.fs)(L),t.textContent="Сохранить"}))})),document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("click",(function(t){t.target===e&&(0,o.fs)(e)}))})),document.querySelectorAll(".popup__close").forEach((function(e){e.addEventListener("click",(function(t){t.stopPropagation();var n=e.closest(".popup");(0,o.fs)(n)}))})),(0,c.F8)(c.$W)},947:(e,t,n)=>{function r(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",c)}function o(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",c)}function c(e){"Escape"===e.key&&o(document.querySelector(".popup_is-opened"))}n.d(t,{PB:()=>r,fs:()=>o})},547:(e,t,n)=>{n.d(t,{$W:()=>r,F8:()=>u,RC:()=>i});var r={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function o(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}function c(e,t){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(r.inputErrorClass),n.textContent="",n.classList.remove(r.errorClass)}function a(e){var t=e.querySelectorAll(r.inputSelector),n=e.querySelector(r.submitButtonSelector);e.addEventListener("submit",(function(e){e.preventDefault()})),t.forEach((function(t){t.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?c(e,t):o(e,t,t.validationMessage)}(e,t),function(e,t){e.checkValidity()?(t.removeAttribute("disabled"),t.classList.remove(r.inactiveButtonClass)):(t.setAttribute("disabled",!0),t.classList.add(r.inactiveButtonClass))}(e,n)}))}))}function u(e){document.querySelectorAll(e.formSelector).forEach((function(e){a(e)}))}function i(e,t){var n=e.querySelectorAll(t.inputSelector),r=e.querySelectorAll(".".concat(t.errorClass));n.forEach((function(e){e.checkValidity()||(e.value=""),e.classList.remove(t.inputErrorClass),e.setCustomValidity("")})),r.forEach((function(e){e.textContent="",e.classList.remove(t.errorClass)}));var o=e.querySelector(t.submitButtonSelector);o.classList.add(t.inactiveButtonClass),o.disabled=!0}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(365),n(850),n(947),n(694),n(547)})();