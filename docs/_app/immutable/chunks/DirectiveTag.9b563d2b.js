import{S as N,i as j,s as k,e as v,b as p,g as _,d,h as m,y as w,z as A,A as b,B as y,k as O,l as U,m as B,n as $,q as g,r as h,u as E}from"./index.39b8345f.js";import{b as T}from"./paths.492687ad.js";import{s as V,q,u as D,K as I,L as o}from"./pages.4db37598.js";import{d as x}from"./PreviousNextPage.de69d4b3.js";import{c as C}from"./ArgsList.b3c2ac99.js";function J(s){let n,a;return n=new x({props:{type:"blue",$$slots:{default:[P]},$$scope:{ctx:s}}}),{c(){w(n.$$.fragment)},l(i){A(n.$$.fragment,i)},m(i,e){b(n,i,e),a=!0},p(i,e){const t={};e&67&&(t.$$scope={dirty:e,ctx:i}),n.$set(t)},i(i){a||(_(n.$$.fragment,i),a=!0)},o(i){d(n.$$.fragment,i),a=!1},d(i){y(n,i)}}}function K(s){let n,a=s[0].name.value+"",i;return{c(){n=g("@"),i=g(a)},l(e){n=h(e,"@"),i=h(e,a)},m(e,t){p(e,n,t),p(e,i,t)},p(e,t){t&1&&a!==(a=e[0].name.value+"")&&E(i,a)},d(e){e&&m(n),e&&m(i)}}}function P(s){let n,a,i,e;return a=new C({props:{tooltipText:s[1],direction:"top",align:"center",$$slots:{default:[K]},$$scope:{ctx:s}}}),{c(){n=O("a"),w(a.$$.fragment),this.h()},l(t){n=U(t,"A",{href:!0,class:!0});var r=B(n);A(a.$$.fragment,r),r.forEach(m),this.h()},h(){$(n,"href",i=D.joinUrlPaths(T,`/directives/${s[0].name.value}`)),$(n,"class","override-tooltip-width svelte-a6h330")},m(t,r){p(t,n,r),b(a,n,null),e=!0},p(t,r){const u={};r&2&&(u.tooltipText=t[1]),r&65&&(u.$$scope={dirty:r,ctx:t}),a.$set(u),(!e||r&1&&i!==(i=D.joinUrlPaths(T,`/directives/${t[0].name.value}`)))&&$(n,"href",i)},i(t){e||(_(a.$$.fragment,t),e=!0)},o(t){d(a.$$.fragment,t),e=!1},d(t){t&&m(n),y(a)}}}function z(s){let n=s[2](),a,i,e=n&&J(s);return{c(){e&&e.c(),a=v()},l(t){e&&e.l(t),a=v()},m(t,r){e&&e.m(t,r),p(t,a,r),i=!0},p(t,[r]){n&&e.p(t,r)},i(t){i||(_(e),i=!0)},o(t){d(e),i=!1},d(t){e&&e.d(t),t&&m(a)}}}function F(s,n,a){let{directive:i}=n,e,t;function r(l){switch(l.kind){case o.INT:case o.BOOLEAN:case o.FLOAT:return String(l.value);case o.STRING:case o.ENUM:return`"${l.value}"`;case o.NULL:return"null";case o.LIST:return`[${l.values.map(r).join(", ")}]`;case o.OBJECT:return`{${l.fields.map(c=>`${c.name.value}: ${r(c.value)}`).join(", ")}}`}}function u(){return!!e&&I(e)}function S(l,c){const f=c.find(L=>L.name.value===l.name);return f?r(f.value):JSON.stringify(l.defaultValue)}return s.$$set=l=>{"directive"in l&&a(0,i=l.directive)},s.$$.update=()=>{if(s.$$.dirty&1&&a(3,e=V.getDirective(i.name.value)),s.$$.dirty&9){let l=`@${i.name.value}`;const c=e?q(e):[];c.length>0&&(l+=`(${c.map(f=>`${f.name}: ${S(f,i.arguments||[])}`).join(", ")})`),a(1,t=l.trim())}},[i,t,u,e]}class W extends N{constructor(n){super(),j(this,n,F,z,k,{directive:0})}}export{W as D};
