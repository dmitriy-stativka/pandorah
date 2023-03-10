/*
* Floatbox 8.5.2 - 2021-05-04
* Copyright (c) 2021 Byron McGregor
* License: MIT (see LICENSE.txt for details)
* Website: https://floatboxjs.com/
*/
!function(){var l=window,p=l.document,a=l.parent!=l&&K(l.parent)||{},h=l.fb||{},m=h.data||{},g=[],s=Array.isArray,c=Date.now,d=void 0,v=function(){var e,t=a.fb&&a.fb.smallScreen,n=window.matchMedia;!!t===t?e=t:n&&window.innerWidth&&(e=!n("(min-width:512px)").matches||!n("(min-height:512px)").matches);return!!e}(),e=l.fbOptions||{},b={},n=[],t=[],r=s(e.ready)?e.ready:[],u={},y={},o={},i=F(l.location.href),f=F(e.scriptPath||(D('script[src*="floatbox.js"]')[0]||D("script",0,-1)).src),x=f.$,w=/\s+/g,$="floatbox",E=!1;function L(e){if(t.push(e),E=E||"loading"!=p.readyState)for(;t.length;)X(t.shift())}function O(e,t){if((t?n:r).push(e),m.Z&&E)for(r=n.concat(r),n.length=0;r.length;)X(r.shift())}function N(){var e,t,n,r=[].slice.call(arguments),o=1<r.length&&r.shift()||{};for(n=0;n<r.length;n++)for(t in e=r[n])e[t]!==d&&(o[t]=e[t]);return o}function j(e,t){var n,r,o=typeof e;try{!!e===e||+e===e||""+e===e?n=o:e?e==e.window?n="window":(r=K(e))&&(n=e==r.document?"document":"node"):n=""+e}catch(e){}return n=n||/\s(\w+)/.exec({}.toString.call(e))[1].toLowerCase(),t&&(n=-1<(s(t)?t:[t]).indexOf(n)),n}function C(e,t){var n,r,o=e,i=[];if(e&&"string"==typeof e){if(e=re(e,"#",""),o=null,t)i.push(t);else for(i.push(p),a.document&&i.push(a.document),n=D("iframe"),r=0;r<n.length;r++)(t=n[r].contentDocument)&&i.push(t);for(r=0;r<i.length&&!o;r++)o=i[r].getElementById(e)}return o}function D(e,t,n){e=s(e)?e.join(","):""+e;var r,o,i,a,f=(K(t=C(t))||l).document;ne(t)&&(a=(i=H(t,"id"))||"fb"+c(),e=(o="#"+(t.id=a)+" ")+re(e,/,/g,","+o));try{r=[].slice.call(f.querySelectorAll(e))}catch(e){r=[]}return o&&H(t,"id",i),+n===n&&(r=r[n<0?n+r.length:n]),r}function M(e,t,n){var r,o,i,a,f;if(s(e)){for(f=0;f<e.length;f++)M(e[f],d,n);M(d,t)}else(r=C("fb"+e,p))?(te(r),X(u[e]),le(u,e)):!e||+e===e||!n&&y[e]?t&&(""+t===t?o="text":X(t)):(o="src",y[e]=!0);o&&(i=c(),(r=ee("script")).id="fb"+i,"src"==o?(r.async=!1,a=T(r,["load","error"],function(){S(a),M(i)}),u[i]=t):e=t+";fb.require("+i+")",r[o]=e,te(r,p.head))}function T(e,t,n,r,o){var i;if(e=C(e)||D(e))if(o=o||[e,t,n,r],s(e))for(i=e.length;i--;)T(e[i],t,n,r,o);else if(s(t))for(i=t.length;i--;)T(e,t[i],n,r,o);else e.addEventListener&&!/^on/.test(t)?e.addEventListener(t,n,r):e[t]=n;return o}function S(e,t,n,r){var o;if(e=C(e)||D(e))if(n)if(s(e))for(o=e.length;o--;)S(e[o],t,n,r);else if(s(t))for(o=t.length;o--;)S(e,t[o],n,r);else e.removeEventListener&&!/^on/.test(t)?e.removeEventListener(t,n,r):e[t]=d;else if(s(e))if(!e[2]||s(e[2]))for(o=e.length;e.length;)S(e.pop());else S.apply(l,e)}function _(e,t,n){e&&(t&&e.stopPropagation&&e.stopPropagation(),!1!==n&&e.preventDefault&&e.preventDefault())}function z(e){var t=[];return(e=C(e))&&(e.classList?t=[].slice.call(e.classList):e.className&&(t=e.className.split(w))),t}function R(e,t){return!!t&&-1<z(e).indexOf(t)}function q(e,t,n){var r,o;if((e=C(e)||D(e))&&t&&(t.split&&(t=t.split(w)),s(t)))if(s(e))for(o=e.length;o--;)q(e[o],t,n);else for(o=0;o<t.length;o++)(r=t[o])&&(e.classList?e.classList[n?"add":"remove"](r):n?R(e,r)||(e.className=se((e.className||"")+" "+r)):e.className&&(e.className=se(re(e.className,w,"  ",RegExp("(^| )("+r+")( |$)","g"),"$1$3"))))}function P(e,t){q(e,t,!0)}function A(e,t){q(e,t,!1)}function H(e,t,n){var r,o;if(e=C(e)||D(e),s(e))for(o=0;o<e.length;o++)r=H(e[o],t,n);else if(j(t,"object"))for(o in t)H(e,o,t[o]);else t&&(r=e[(null===n?"remove":n===d?"get":"set")+"Attribute"](t,n));return r}function k(e,t){e=C(e);var n,r,o,i,a,f,l,s,c,u=[];function d(e){_(e),h.start(this)}if(i=b._){for(ne(e)||(e=p.body,g.length=0),!R(e,$)&&!1===i.activateMedia||(u=[e]),u=u.concat(D("."+$,e)),s=0;s<u.length;s++)if(!ne(n=u[s],["a","area"])){for(P(f=J(n),H(n,"class")),A(f,$),f.className||le(f,"className"),a=z(f),c=0;c<a.length;c++)f=N({},b.$[a[c]],f);for(r=D(["a","area"],n),c=0;c<r.length;c++)l=H(o=r[c],"href")||H(o,"xlink:href"),R(o,"nofloatbox")||/^mailto:/.test(l)||!R(n,$)&&!F(l).Y||(H(o,"data-fb-inherit",Q(N(J(H(o,"data-fb-inherit")),f))||null),P(o,$))}for(r=D("a."+$+",area."+$,e),s=0;s<r.length;s++)o=r[s],g[o.fbx]||(m.$(o,t),o.onclick||T(o,"onclick",d))}}function B(e,t){var n,r=e+"",o=["&","&amp;",'"',"&quot;",">","&gt;","<","&lt;"];for(t&&o.reverse(),n=0;n<o.length;n+=2)r=re(r,RegExp(o[n],"g"),o[n+1]);return r}function I(e){return B(e,!0)}function V(e,t){return e=B(I(e)),t&&(e=B(e)),e}function Y(e){var t,n,r,o=[];if(ne(e=p.forms[e]||C(e),"form")&&(e=m.Z?h.getFormValues(e):{}),j(e,"object"))for(t in e)for(n=e[t],s(n)||(n=[n]),r=0;r<n.length;r++)o.push(ae(t)+"="+ae(n[r]!==d?re(""+n[r],/\r?\n/g,"\r\n"):""));return re(o.join("&"),/%20/g,"+")}function Z(e){var t,n,r={},o=re(I(e=""+e===e?e:""),/^\?/,"",/\+/g,"%20",/%25/g,"%").split("&");for(n=0;n<o.length;n++)oe(r,fe((t=/([^=]*)=?(.*)/.exec(o[n]))[1]),fe(t[2]));return r}function G(e,t){try{C(e).innerHTML=t||""}catch(e){}}function U(e,t,n,r){W(n,r=r||o),r[n]=setTimeout(function(){W(n,r),X(e)},t||13)}function W(e,t){e&&(t=t||o,clearTimeout(t[e]),le(t,e))}function X(e,t){var n,r=j(e=l[e]||e);return e&&(n="function"==r?e.apply(l,s(t)?t:[t]):s(e)?X(e.shift(),e):"string"==r&&M(d,e)),n}function F(e,t){e=ee("div",'<a href="'+V(e)+'"></a>').firstChild.href,t=t||{};var n,r,o=/([^?#]*)(\??[^#]*)(#?.*)/.exec(e),i=o[1],a=o[2],f=o[3],l=i.split("/"),s=l[l.length-1].split("."),c=(1<s.length&&s.pop()||"").toLowerCase(),u=/\/\/\//.test(e)?2:1,d=l[1+u]||"",p=Z(a),h={Z:l.slice(0,2+u).join("/"),$:l.slice(0,-1).join("/")+"/",y:s.join("."),z:f,w:i};for(n in p)le(t,n);return(r=Y(t))&&(a+=(a.length?"&":"?")+r),N(h,{X:i+=a,_:i+f,x:Z(a),Y:/jpe?g|png|gif|webp/.test(c)?"image":"mp4"==c||/\b(youtu\.?be|vimeo)\b/i.test(d)?"video":"pdf"==c?"pdf":""}),h}function J(e){var t,n,r,o,i,a={},f=j(e),l=[],s=/(`|~)([\s\S]*?)\1/g,c={true:!0,false:!1,null:null,default:d,auto:d,yes:!0,no:!1,max:"100%"};function u(e){var t=+re(e,/px$/,"");return e in c?c[e]:t!=t?e:t}if("string"==f){for(e=I(e);r=s.exec(e);)l.push(r[2]);for(i=(t=(e=se(re(e,s,"```",/\s*[:=]\s*/g,":",/[;&,]/g," "))).split(w)).length;i--;)(n=t[i].split(":"))[0]&&n[1]&&(a[n[0]]="```"==n[1]?l.pop()||"":u(re(n[1],/^(['"])(.+)\1$/,"$2")))}else if("object"==f)for(o in e)a[o]=u(e[o]);else"node"==f&&N(a,J(H(e,"data-fb-inherit")),J(H(e,"rev")),J(H(e,"data-fb-options")));return(t=v&&a.mobile)&&N(a,J(t)),le(a,"mobile"),a}function Q(e){var t,n,r,o="";for(t in e)j(n=e[t],"object")&&(n=Q(n)),/[:=&;,\s]/.test(n)&&(n=(r=/`/.test(n)?"~":"`")+n+r),o+=t+":"+n+";";return V(o)}function K(e){try{return(e=e.document||(e.documentElement||e).ownerDocument).defaultView}catch(e){}}function ee(e,t){var n=p.createElement(e);return"a"==e&&P(n,"nofloatbox"),t&&G(n,t),n}function te(e,t,n){if(e)if(t)try{return e.ownerDocument!=t.ownerDocument&&t.ownerDocument.adoptNode(e),t.insertBefore(e,n||null)}catch(e){}else e.parentElement&&e.parentElement.removeChild(e)}function ne(e,t){var n=(e&&e.tagName||"").toLowerCase();return t&&(s(t)?t:[t]).indexOf(n)<0&&(n=""),n}function re(){var e=[].slice.call(arguments),t=e.shift(),n=0;if(""+t===t)for(;n<e.length;n+=2)t=t.replace(e[n],e[n+1]);return t}function oe(e,t,n){t in e?(s(e[t])||(e[t]=[e[t]]),e[t].push(n)):t&&(e[t]=n)}function ie(e,t){try{e=l[(t?"en":"de")+"codeURIComponent"](e)}catch(e){}return e}function ae(e){return ie(e,!0)}function fe(e){return ie(e,!1)}function le(e,t){delete(e||{})[t]}function se(e){return re(e.trim(),w," ")}function ce(r,o){return function(e,t,n){O(function(){(o||h)[r](e,t,n)},!0)}}function ue(){var e=h.fbOptions||{},t=l.fbOptions||{},n=N(J(e.global),J(l.fbPageOptions),J(t.global),v&&J(e.mobile),v&&J(t.mobile)),r=i(N(J(e.type),J(l.fbTypeOptions),J(t.type))),o=i(N(J(e.className),J(l.fbClassOptions),J(t.className)));function i(e){var t,n={};for(t in e)n[t]=J(e[t]);return n}!1!==n.autoGallery&&(r.image=N({},r.image,{group:"autoGallery"})),N(b,{_:n,z:r,$:o}),A(p.documentElement,$),$=n.floatboxClass||$,k(),M(!m.z&&re(f._,f.$+f.y,f.$+"core"),function(){m.z()})}P(p.documentElement,$),l.fb=N(h,{data:m,version:"8.5.2",build:"2021-05-04",path:x,docReady:L,ready:O,$:C,select:D,require:M,extend:N,addEvent:T,removeEvent:S,stopEvent:_,serialize:Y,deserialize:Z,getClass:z,hasClass:R,addClass:P,removeClass:A,attr:H,typeOf:j,encodeHTML:V,decodeHTML:I,smallScreen:v,start:ce("start"),ajax:ce("ajax"),animate:ce("animate"),preload:ce("preload"),setInnerHTML:G,DOMReady:L,executeJS:M,getByTag:D}),N(m,{$:ce("$",m),t:k,T:U,s:W,S:X,r:F,R:J,q:Q,Q:K,p:ee,P:te,o:ne,O:re,n:oe,N:le,w:[],W:g,v:[],V:{},u:{},U:{},Y:b,m:o,X:i,M:f._,_:a}),L([S,T(p,"DOMContentLoaded",L)]),U(function(){M(!h.fbOptions&&re(f._,f.$+f.y,f.$+"fbOptions"),[L,ue])})}();