(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=(c,o=20,s=!0)=>{let r;return function(){var e=this,t=arguments;const n=()=>{r=null,s||c.apply(e,t)},i=s&&!r;clearTimeout(r),r=setTimeout(n,o),i&&c.apply(e,t)}},u=document.querySelectorAll(".slide-in"),f=c=>{u.forEach(o=>{const s=window.scrollY+window.innerHeight-o.height/2,r=o.offsetTop+o.height,e=s>o.offsetTop,t=window.scrollY<r;e&&t?o.classList.add("active"):o.classList.remove("active")})};document.addEventListener("scroll",l(f));
