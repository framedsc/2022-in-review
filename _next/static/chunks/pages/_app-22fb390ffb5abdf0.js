(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(3847)}])},5713:function(e,t,r){"use strict";r.d(t,{W2:function(){return u},$_:function(){return m},js:function(){return d},TK:function(){return p},u_:function(){return h},W_:function(){return c}});var n=r(5893),o=r(1664),a=r.n(o),l=r(1163),s=r(7294);let i={position:"relative",width:"15vh"},c=()=>((0,l.useRouter)(),(0,n.jsx)("nav",{className:"w-full fixed top-0 py-3 bg-black/30 backdrop-blur-lg border-b border-b-white/10 shadow-md text-white z-50",children:(0,n.jsx)("div",{style:{marginLeft:"5vw"},children:(0,n.jsxs)("ul",{className:"flex items-center",children:[(0,n.jsx)("li",{children:(0,n.jsx)(a(),{href:"https://framedsc.com/",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)("div",{className:"framed logo",style:{width:"4vh",marginRight:"1.5vh"},children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 2048 2048",fill:"#9A9A9A",children:[(0,n.jsx)("g",{children:(0,n.jsx)("g",{children:(0,n.jsx)("path",{d:"M892.3,688v242h539v247.2h-539v411.9H609.1v-1150h889.1V688H892.3z"})})}),(0,n.jsx)("path",{d:"M143.6,138.5v1760.9h1760.9V138.5H143.6z M1783.8,1778.7H264.2V259.2h1519.6V1778.7z"})]})})})}),(0,n.jsx)(a(),{href:"/",children:(0,n.jsx)("img",{src:"recap-nsub-logo.svg",style:i})})]})})})),u=e=>{let{children:t=(0,n.jsx)(n.Fragment,{}),className:r=""}=e;return(0,n.jsx)("div",{className:"container px-4 mx-auto ".concat(r),children:t})};var f=r(1141);let d=e=>{let{children:t}=e;return(0,s.useEffect)(()=>{(0,f.fs)("load")},[]),(0,n.jsx)(n.Fragment,{children:t})},p=()=>(0,n.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,n.jsx)("div",{className:"animate-spin rounded-full h-32 w-32 border-b-2 border-white"})}),h=e=>{let{children:t,open:r,onClose:o}=e;return(0,s.useEffect)(()=>{let e=e=>{"Escape"===e.key&&o()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[r]),(0,n.jsxs)("div",{className:"fixed transition-all duration-500 ".concat(r?"z-50 -translate-y-0 opacity-100":"-z-10 -translate-y-10 opacity-0","\n      top-0 left-0 w-full h-full bg-framed-black/50 backdrop-blur-lg flex justify-center items-center p-20\n      "),children:[(0,n.jsx)("div",{onClick:o,className:"absolute top-0 left-0 w-full h-full"}),(0,n.jsxs)("div",{className:"max-h-full max-w-full overflow-y-auto bg-framed-black rounded-lg shadow-2xl p-10",children:[(0,n.jsx)("button",{onClick:o,className:"absolute top-0 right-0 p-5 text-gray-100 hover:text-gray-200",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})}),t]})]})},m=()=>(0,n.jsxs)("footer",{className:"bg-framed-black text-white text-center text-xs py-10 w-full z-40",children:[(0,n.jsx)(a(),{href:"https://github.com/singularitypress",target:"_blank",rel:"noopener noreferrer",className:"text-white border-b border-b-white border-dotted hover:border-b-transparent",children:"Jay Pandya"})," ","and\xa0",(0,n.jsx)(a(),{href:"https://github.com/originalnicodr",target:"_blank",rel:"noopener noreferrer",className:"text-white border-b border-b-white border-dotted hover:border-b-transparent",children:"originalnicodr"})," ","\xa9\xa0",new Date().getFullYear()," All rights reserved."]})},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,o=r(7273).Z,a=n(r(7294)),l=r(1003),s=r(7795),i=r(4465),c=r(2692),u=r(8245),f=r(9246),d=r(227),p=r(3468);let h=new Set;function m(e,t,r,n){if(l.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,a=t+"%"+r+"%"+o;if(h.has(a))return;h.add(a)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function v(e){return"string"==typeof e?e:s.formatUrl(e)}let x=a.default.forwardRef(function(e,t){let r,n;let{href:s,as:h,children:x,prefetch:b,passHref:g,replace:y,shallow:j,scroll:w,locale:_,onClick:k,onMouseEnter:E,onTouchStart:M,legacyBehavior:N=!1}=e,C=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=x,N&&("string"==typeof r||"number"==typeof r)&&(r=a.default.createElement("a",null,r));let A=!1!==b,O=a.default.useContext(c.RouterContext),L=a.default.useContext(u.AppRouterContext),P=null!=O?O:L,R=!O,{href:T,as:D}=a.default.useMemo(()=>{if(!O){let e=v(s);return{href:e,as:h?v(h):e}}let[t,r]=l.resolveHref(O,s,!0);return{href:t,as:h?l.resolveHref(O,h):r||t}},[O,s,h]),I=a.default.useRef(T),S=a.default.useRef(D);N&&(n=a.default.Children.only(r));let z=N?n&&"object"==typeof n&&n.ref:t,[F,H,K]=f.useIntersection({rootMargin:"200px"}),U=a.default.useCallback(e=>{(S.current!==D||I.current!==T)&&(K(),S.current=D,I.current=T),F(e),z&&("function"==typeof z?z(e):"object"==typeof z&&(z.current=e))},[D,z,T,K,F]);a.default.useEffect(()=>{P&&H&&A&&m(P,T,D,{locale:_})},[D,T,H,_,A,null==O?void 0:O.locale,P]);let B={ref:U,onClick(e){N||"function"!=typeof k||k(e),N&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),P&&!e.defaultPrevented&&function(e,t,r,n,o,s,i,c,u,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!l.isLocalURL(r)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:s,locale:c,scroll:i}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};u?a.default.startTransition(h):h()}(e,P,T,D,y,j,w,_,R,A)},onMouseEnter(e){N||"function"!=typeof E||E(e),N&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),P&&(A||!R)&&m(P,T,D,{locale:_,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){N||"function"!=typeof M||M(e),N&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),P&&(A||!R)&&m(P,T,D,{locale:_,priority:!0,bypassPrefetchedCheck:!0})}};if(!N||g||"a"===n.type&&!("href"in n.props)){let V=void 0!==_?_:null==O?void 0:O.locale,W=(null==O?void 0:O.isLocaleDomain)&&d.getDomainLocale(D,V,null==O?void 0:O.locales,null==O?void 0:O.domainLocales);B.href=W||p.addBasePath(i.addLocale(D,V,null==O?void 0:O.defaultLocale))}return N?a.default.cloneElement(n,B):a.default.createElement("a",Object.assign({},C,B),r)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:i}=e,c=i||!a,[u,f]=n.useState(!1),[d,p]=n.useState(null);n.useEffect(()=>{if(a){if(!c&&!u&&d&&d.tagName){let e=function(e,t,r){let{id:n,observer:o,elements:a}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=s.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:a,elements:o},s.push(r),l.set(r,t),t}(r);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(n);let t=s.findIndex(e=>e.root===n.root&&e.margin===n.margin);t>-1&&s.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return e}}else if(!u){let n=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(n)}},[d,c,r,t,u]);let h=n.useCallback(()=>{f(!1)},[]);return[p,u,h]};var n=r(7294),o=r(4686);let a="function"==typeof IntersectionObserver,l=new Map,s=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3847:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(5893);r(6738);var o=r(5713),a=r(9008),l=r.n(a);function s(e){let{Component:t,pageProps:r}=e;return(0,n.jsxs)("div",{style:{overflow:"hidden",position:"relative",width:"100%"},children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("meta",{name:"theme-color",content:"#272727"}),(0,n.jsx)("meta",{name:"description",content:"A collection of each year's summary of FRAMED screenshots, guides, and activity."}),(0,n.jsx)("meta",{property:"og:title",content:"A year of FRAMED"}),(0,n.jsx)("meta",{property:"og:description",content:"A collection of each year's summary of FRAMED screenshots, guides, and activity."}),(0,n.jsx)("meta",{property:"og:image",content:"twitter-card.jpg"}),(0,n.jsx)("link",{rel:"apple-touch-icon",href:"logo512.jpg"}),(0,n.jsx)("meta",{name:"twitter:card",content:"twitter-card.jpg"}),(0,n.jsx)("meta",{name:"twitter:title",content:"A year of FRAMED"}),(0,n.jsx)("meta",{name:"twitter:description",content:"A collection of each year's summary of FRAMED screenshots, guides, and activity."}),(0,n.jsx)("meta",{name:"twitter:image",content:"twitter-card.jpg"})]}),(0,n.jsx)(o.W_,{}),(0,n.jsx)(t,{...r}),(0,n.jsx)("picture",{children:(0,n.jsx)("img",{className:"absolute top-0 left-0 object-cover",src:"wrapped-images/Topography.svg",alt:"",style:{zIndex:"-1",objectFit:"cover",minHeight:"200%"}})}),(0,n.jsx)(o.$_,{})]})}r(4466)},1141:function(e,t,r){"use strict";r.d(t,{Ud:function(){return n},fs:function(){return a},po:function(){return l},x4:function(){return o}});let n=e=>Object.values(e.reduce((e,t)=>{let r=t.date.replace(/T.*$/g,"");return e[r]?(e[r].value++,e[r].shots.push(t)):e[r]={value:1,day:r,shots:[t]},e},{})),o=(e,t)=>Object.values(e.reduce((e,t)=>(e[t.gameName]?e[t.gameName].value++:e[t.gameName]={id:t.gameName,label:t.gameName,value:1},e),{})).sort((e,t)=>t.value-e.value).reduce((e,r,n)=>n<t?[...e,r]:(e[t-1].id="Other",e[t-1].label="Other",e[t-1].value+=r.value,e),[]),a=e=>{Array.prototype.slice.call(document.querySelectorAll(".".concat(e))).forEach((e,t)=>{setTimeout(()=>{e.classList.remove("opacity-0"),e.classList.remove("-translate-y-10")},250*(t+1))})},l={HEAT_8:["#003f5c","#2f4b7c","#665191","#a05195","#d45087","#f95d6a","#ff7c43","#ffa600"].reverse(),PIE_11:["#6ab0de","#72bed6","#8ac8cc","#a8d0c8","#c5d7cb","#dbdfd8","#bcc0ba","#9fa19d","#828481","#666765","#4c4c4b"]}},4466:function(){},6738:function(){},9008:function(e,t,r){e.exports=r(3121)},1664:function(e,t,r){e.exports=r(1551)},1163:function(e,t,r){e.exports=r(880)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);