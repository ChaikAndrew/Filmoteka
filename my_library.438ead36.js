!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,a.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a);var l,r,c=a("k5NPS"),o=a("g3P0C"),i=a("dTX3M"),d=a("cO1ZJ"),s=a("hFVfC");c=a("k5NPS"),o=a("g3P0C");function u(){var e=document.querySelector(".modal-backdrop");function t(t){if("BUTTON"!==t.target.nodeName){var n=Number(t.currentTarget.id),a=(0,c.default)().find((function(e){return e.id===n}));!function(t){var n=JSON.parse(localStorage.getItem("genresDataArray")),a=l();function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,a=e.id,l=e.poster_path,r=e.original_title,c=e.title,o=e.overview,i=e.genre_ids,d=(e.release_date,e.popularity),s=e.vote_average,u=e.vote_count,m=i.reduce((function(e,t){return n.forEach((function(n){t===n.id&&e.push([n.name])})),e}),[]);return'               \n<div class="film-card__modal" data-modal>\n   <button class="film-card__close modal-film__btn" data-modal-close>X</button>\n  <img\n    class="film-card__img"\n    src="https://image.tmdb.org/t/p/w400'.concat(l,'"\n    width="375px"\n    height="468px"\n    alt="film__img"\n  />\n      <div class="film-card__about">\n      <h3 class="film-card__title">').concat(c,'</h3>\n      <table class="about-film">\n        <tbody>\n          <tr class ="about-film__info">\n            <td class="about-film__description">Vote / Votes</td>\n            <td class="about-film__characteristics">\n              <span class="vote-average">').concat(s.toFixed(1),'</span><span class="separator">/</span\n              ><span class="votes-count">').concat(u,'</span>\n            </td>\n          </tr>\n          <tr class ="about-film__info">\n            <td class="about-film__description">Popularity</td>\n            <td class="about-film__characteristics">').concat(d.toFixed(1),'</td>\n          </tr>\n          <tr class ="about-film__info">\n            <td class="about-film__description">Original Title</td>\n            <td class="about-film__characteristics about-film__title">').concat(r,'</td>\n          </tr>\n          <tr class ="about-film__info">\n            <td class="about-film__description">Genre</td>\n            <td class="about-film__characteristics">').concat(m,' </td>\n          </tr>\n        </tbody>\n      </table>\n      <p class="film-card__description">about</p>\n      <p class="film-card__desc">\n       ').concat(o,'\n      </p>\n      <ul class="film-add__btn">\n        <li><button class="film-add__watched modal-film__btn" id=').concat(a,'>add to Watched</button></li>\n        <li><button class="film-add__queue modal-film__btn" id=').concat(a,">add to Queue</button></li>\n      </ul>\n    </div>\n  </div>\n  \n")}e.insertAdjacentHTML("beforeend",a);var r={closeModalBtn:document.querySelector("[data-modal-close]"),body:document.querySelector("body")};function i(){window.removeEventListener("keydown",s),r.body.style.overflow="",e.classList.remove("active"),r.closeModalBtn.removeEventListener("click",i),e.removeEventListener("click",d),e.innerHTML="",document.querySelector(".gallery").innerHTML="";var t=(0,c.default)();if((0,o.default)(t),u(),!t||0===t.length){var n='<h1 class="title-queue">Your queue is empty</h1>\n    <ul class="gallery gallery--library"></ul>',a=document.querySelector(".container");return document.querySelector(".gallery-section").classList.add("library-plug"),void(a.innerHTML=n)}var l=document.querySelector(".title-queue");null==l||l.remove();var m=document.querySelector(".gallery-section");null==m||m.classList.remove("library-plug")}function d(e){e.target===e.currentTarget&&i()}function s(e){var t="Escape";e.code===t&&i()}e.classList.toggle("active"),r.closeModalBtn.addEventListener("click",i),e.addEventListener("click",d),window.addEventListener("keydown",s),r.body.style.overflow="hidden"}(a),(0,i.default)(a),(0,d.default)(),(0,s.default)()}}document.querySelectorAll(".movie-card").forEach((function(e){return e.addEventListener("click",t)}))}l=document.querySelector(".btn-header__queue"),r=document.querySelector(".btn-header__watched"),l.addEventListener("click",(function(e){e.preventDefault(),r.classList.remove("btn-header--active"),l.classList.add("btn-header--active"),document.querySelector(".gallery").innerHTML="";var t=(0,c.default)();if(!t||0===t.length){var n=document.querySelector(".container");return document.querySelector(".gallery-section").classList.add("library-plug"),void(n.innerHTML='<h1 class="title-queue">Your queue is empty</h1>\n    <ul class="gallery gallery--library"></ul>')}var a=document.querySelector(".title-queue");null==a||a.remove();var i=document.querySelector(".gallery-section");null==i||i.classList.remove("library-plug"),(0,o.default)(t),u();var d=document.querySelector(".btn-add-to-queue");null==d||d.addEventListener("click",(function(e){e.preventDefault(),deletePhotoMarkup();var t=(0,c.default)();renderQueue(t)}))})),a("9VC5X"),a("aeSKP"),a("j1Fxp"),a("3ura4");o=a("g3P0C"),i=a("dTX3M"),d=a("cO1ZJ"),s=a("hFVfC");var m=document.querySelector(".navigation__btn--current").textContent,f=document.querySelector(".btn-header__watched");function _(){var e=document.querySelector(".modal-backdrop");function t(t){if("BUTTON"!==t.target.nodeName)try{var n,a=t.currentTarget.id;"my library"===m&&f.classList.contains("btn-header--active")&&(n=JSON.parse(localStorage.getItem("watched")).find((function(e){return e.id==a}))),function(t){var n=JSON.parse(localStorage.getItem("genresDataArray")),a=l(t);function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,a=e.id,l=e.poster_path,r=e.original_title,c=e.title,o=e.overview,i=e.genre_ids,d=(e.release_date,e.popularity),s=e.vote_average,u=e.vote_count,m=i.reduce((function(e,t){return n.forEach((function(n){t===n.id&&e.push([n.name])})),e}),[]);return'               \n<div class="film-card__modal" data-modal>\n   <button class="film-card__close modal-film__btn" data-modal-close>X</button>\n  <img\n    class="film-card__img"\n    src="https://image.tmdb.org/t/p/w400'.concat(l,'"\n    width="375px"\n    height="468px"\n    alt="film__img"\n  />\n      <div class="film-card__about">\n      <h3 class="film-card__title">').concat(c,'</h3>\n      <table class="about-film">\n        <tbody>\n          <tr class ="about-film__info">\n            <td class="about-film__description">Vote / Votes</td>\n            <td class="about-film__characteristics">\n              <span class="vote-average">').concat(s.toFixed(1),'</span><span class="separator">/</span\n              ><span class="votes-count">').concat(u,'</span>\n            </td>\n          </tr>\n          <tr class ="about-film__info">\n            <td class="about-film__description">Popularity</td>\n            <td class="about-film__characteristics">').concat(d.toFixed(1),'</td>\n          </tr>\n          <tr class ="about-film__info">\n            <td class="about-film__description">Original Title</td>\n            <td class="about-film__characteristics about-film__title">').concat(r,'</td>\n          </tr>\n          <tr class ="about-film__info">\n            <td class="about-film__description">Genre</td>\n            <td class="about-film__characteristics">').concat(m,' </td>\n          </tr>\n        </tbody>\n      </table>\n      <p class="film-card__description">about</p>\n      <p class="film-card__desc">\n       ').concat(o,'\n      </p>\n      <ul class="film-add__btn">\n        <li><button class="film-add__watched modal-film__btn" id=').concat(a,'>add to Watched</button></li>\n        <li><button class="film-add__queue modal-film__btn" id=').concat(a,">add to Queue</button></li>\n      </ul>\n    </div>\n  </div>\n  \n")}e.insertAdjacentHTML("beforeend",a);var r={closeModalBtn:document.querySelector("[data-modal-close]"),body:document.querySelector("body")};function c(){window.removeEventListener("keydown",i),r.body.style.overflow="",e.classList.remove("active"),r.closeModalBtn.removeEventListener("click",c),e.removeEventListener("click",o),e.innerHTML="",document.querySelector(".gallery").innerHTML="",b()}function o(e){e.target===e.currentTarget&&c()}function i(e){var t="Escape";e.code===t&&c()}e.classList.toggle("active"),r.closeModalBtn.addEventListener("click",c),e.addEventListener("click",o),window.addEventListener("keydown",i),r.body.style.overflow="hidden"}(n),(0,i.default)(n),(0,d.default)(),(0,s.default)()}catch(e){console.log(e)}}document.querySelectorAll(".movie-card").forEach((function(e){return e.addEventListener("click",t)}))}a("bktnR");var v={btnWatched:document.querySelector(".btn-header__watched"),btnQueue:document.querySelector(".btn-header__queue"),ul:document.querySelector(".gallery")};function b(){var e=localStorage.getItem("watched");if(v.btnQueue.classList.remove("btn-header--active"),v.btnWatched.classList.add("btn-header--active"),"[]"===e||null===e){v.ul.innerHTML=" ";var t=document.querySelector(".container");return document.querySelector(".gallery-section").classList.add("library-plug"),void(t.innerHTML='<h1 class="title-queue">Your list is empty</h1>\n    <ul class="gallery gallery--library"></ul>')}var n=document.querySelector(".title-queue");null==n||n.remove();var a=document.querySelector(".gallery-section");null==a||a.classList.remove("library-plug"),document.querySelector(".gallery").innerHTML="";var l=JSON.parse(e);l.reverse(),(0,o.default)(l),_()}v.btnWatched.addEventListener("click",b);c=a("k5NPS"),o=a("g3P0C");if("my library"===document.querySelector(".navigation__btn--current").textContent){document.querySelector(".btn-header__queue").classList.add("btn-header--active"),function(){document.querySelector(".gallery").innerHTML="";var e=(0,c.default)();if(!e||0===e.length){var t=document.querySelector(".container");return document.querySelector(".gallery-section").classList.add("library-plug"),void(t.innerHTML='<h1 class="title-queue">Your queue is empty</h1>\n    <ul class="gallery gallery--library"></ul>')}var n=document.querySelector(".title-queue");null==n||n.remove();var a=document.querySelector(".gallery-section");null==a||a.classList.remove("library-plug"),(0,o.default)(e),u();var l=document.querySelector(".btn-add-to-queue");null==l||l.addEventListener("click",(function(e){e.preventDefault(),deletePhotoMarkup();var t=(0,c.default)();renderQueue(t)}))}()}}();
//# sourceMappingURL=my_library.438ead36.js.map
