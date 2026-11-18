(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,822093,e=>{"use strict";var t=e.i(899339),r=e.i(805680),n=e.i(954830),o=e.i(34420),a=e.i(644346),i=e.i(350807),s=e.i(118088);e.i(966128);var l=e.i(990314);function c({size:e="var(--cb-icon-size, 70%)",style:t,...r}){return(0,l.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...t,width:e,height:e},...r,children:(0,l.jsx)("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}c.displayName="@mantine/core/CloseIcon";var u={root:"m_86a44da5","root--subtle":"m_220c80f2"};let f={variant:"subtle"},h=(0,n.f)((e,{size:n,radius:o,iconSize:a})=>({root:{"--cb-size":(0,r.K)(n,"cb-size"),"--cb-radius":void 0===o?void 0:(0,r.V)(o),"--cb-icon-size":(0,t.t)(a)}})),d=(0,i.f)(e=>{let t=(0,o.f)("CloseButton",f,e),{iconSize:r,children:n,vars:i,radius:d,className:m,classNames:p,style:v,styles:w,unstyled:b,"data-disabled":g,disabled:E,variant:$,icon:y,mod:S,attributes:x,__staticSelector:_,...R}=t,k=(0,a.f)({name:_||"CloseButton",props:t,className:m,style:v,classes:u,classNames:p,styles:w,unstyled:b,attributes:x,vars:i,varsResolver:h});return(0,l.jsxs)(s.UnstyledButton,{...R,unstyled:b,variant:$,disabled:E,mod:[{disabled:E||g},S],...k("root",{variant:$,active:!E&&!g}),children:[y||(0,l.jsx)(c,{}),n]})});d.classes=u,d.varsResolver=h,d.displayName="@mantine/core/CloseButton",e.s(["f",0,d],822093)},101651,e=>{"use strict";var t=e.i(805680),r=e.i(954830),n=e.i(34420),o=e.i(644346),a=e.i(350807),i=e.i(34551),s={root:"m_1b7284a3"},l=e.i(990314);let c=(0,r.f)((e,{radius:r,shadow:n})=>({root:{"--paper-radius":void 0===r?void 0:(0,t.V)(r),"--paper-shadow":(0,t.J)(n)}})),u=(0,a.f)(e=>{let t=(0,n.f)("Paper",null,e),{classNames:r,className:a,style:u,styles:f,unstyled:h,withBorder:d,vars:m,radius:p,shadow:v,variant:w,mod:b,attributes:g,...E}=t,$=(0,o.f)({name:"Paper",props:t,classes:s,className:a,style:u,classNames:r,styles:f,unstyled:h,attributes:g,vars:m,varsResolver:c});return(0,l.jsx)(i.Box,{mod:[{withBorder:d},b],...$("root"),variant:w,...E})});u.classes=s,u.varsResolver=c,u.displayName="@mantine/core/Paper",e.s(["Paper",0,u],101651)},617094,477700,e=>{"use strict";e.s(["f",0,function(e){return e?parseInt(e,10):0}],617094);var t=e.i(966128);e.s(["f",0,function(e){let r=(0,t.useRef)(e);return(0,t.useEffect)(()=>{r.current=e}),(0,t.useMemo)(()=>(...e)=>r.current?.(...e),[])}],477700)},694086,e=>{"use strict";var t=e.i(805680),r=e.i(954830),n=e.i(34420),o=e.i(644346),a=e.i(700215),i=e.i(34551),s={root:"m_6d731127"},l=e.i(990314);let c={gap:"md",align:"stretch",justify:"flex-start"},u=(0,r.f)((e,{gap:r,align:n,justify:o})=>({root:{"--stack-gap":(0,t.m)(r),"--stack-align":n,"--stack-justify":o}})),f=(0,a.$)(e=>{let t=(0,n.f)("Stack",c,e),{classNames:r,className:a,style:f,styles:h,unstyled:d,vars:m,align:p,justify:v,gap:w,variant:b,attributes:g,...E}=t,$=(0,o.f)({name:"Stack",props:t,classes:s,className:a,style:f,classNames:r,styles:h,unstyled:d,attributes:g,vars:m,varsResolver:u});return(0,l.jsx)(i.Box,{...$("root"),variant:b,...E})});f.classes=s,f.varsResolver=u,f.displayName="@mantine/core/Stack",e.s(["Stack",0,f],694086)},880346,e=>{"use strict";function t(e){return"auto"===e||"dark"===e||"light"===e}var r=e.i(450715),n=e.i(966128),o=e.i(802103);function a(e,t){let r="u">typeof window&&"matchMedia"in window&&window.matchMedia("(prefers-color-scheme: dark)")?.matches;t()?.setAttribute("data-mantine-color-scheme","auto"!==e?e:r?"dark":"light")}var i=e.i(679615),s=e.i(953461),l=e.i(139031),c=e.i(899339),u=e.i(990314);function f(){let e=(0,i.i)(),t=(0,r.H)(),n=(0,s.f)(e.breakpoints).reduce((t,r)=>{let n=e.breakpoints[r].includes("px"),o=(0,l.f)(e.breakpoints[r]);return`${t}@media (max-width: ${n?`${o-.1}px`:(0,c.s)(o-.1)}) {.mantine-visible-from-${r} {display: none !important;}}@media (min-width: ${n?`${o}px`:(0,c.s)(o)}) {.mantine-hidden-from-${r} {display: none !important;}}`},"");return(0,u.jsx)("style",{"data-mantine-styles":"classes",nonce:t?.(),dangerouslySetInnerHTML:{__html:n}})}function h(e){return Object.entries(e).map(([e,t])=>`${e}: ${t};`).join("")}function d(e,t){let r=t?[t]:[":root",":host"],n=h(e.variables),o=n?`${r.join(", ")}{${n}}`:"",a=h(e.dark),i=h(e.light),s=e=>r.map(t=>":host"===t?`${t}([data-mantine-color-scheme="${e}"])`:`${t}[data-mantine-color-scheme="${e}"]`).join(", ");return`${o}

${a?`${s("dark")}{${a}}`:""}

${i?`${s("light")}{${i}}`:""}`}var m=e.i(213838),p=e.i(299292),v=e.i(771197),w=e.i(580352),b=e.i(763969),g=e.i(593421);function E({theme:e,color:t,colorScheme:r,name:n=t,withColorValues:o=!0}){if(!e.colors[t])return{};if("light"===r){let r=(0,p.f)(e,"light"),a={[`--mantine-color-${n}-text`]:`var(--mantine-color-${n}-filled)`,[`--mantine-color-${n}-filled`]:`var(--mantine-color-${n}-${r})`,[`--mantine-color-${n}-filled-hover`]:`var(--mantine-color-${n}-${9===r?8:r+1})`,[`--mantine-color-${n}-light`]:`var(--mantine-color-${n}-1)`,[`--mantine-color-${n}-light-hover`]:`var(--mantine-color-${n}-2)`,[`--mantine-color-${n}-light-color`]:`var(--mantine-color-${n}-9)`,[`--mantine-color-${n}-outline`]:`var(--mantine-color-${n}-${r})`,[`--mantine-color-${n}-outline-hover`]:(0,g._)(e.colors[t][r],.05)};return o?{[`--mantine-color-${n}-0`]:e.colors[t][0],[`--mantine-color-${n}-1`]:e.colors[t][1],[`--mantine-color-${n}-2`]:e.colors[t][2],[`--mantine-color-${n}-3`]:e.colors[t][3],[`--mantine-color-${n}-4`]:e.colors[t][4],[`--mantine-color-${n}-5`]:e.colors[t][5],[`--mantine-color-${n}-6`]:e.colors[t][6],[`--mantine-color-${n}-7`]:e.colors[t][7],[`--mantine-color-${n}-8`]:e.colors[t][8],[`--mantine-color-${n}-9`]:e.colors[t][9],...a}:a}let a=(0,p.f)(e,"dark"),i={[`--mantine-color-${n}-text`]:`var(--mantine-color-${n}-4)`,[`--mantine-color-${n}-filled`]:`var(--mantine-color-${n}-${a})`,[`--mantine-color-${n}-filled-hover`]:`var(--mantine-color-${n}-${9===a?8:a+1})`,[`--mantine-color-${n}-light`]:(0,b.f)(e.colors[t][9],.5),[`--mantine-color-${n}-light-hover`]:(0,b.f)(e.colors[t][9],.3),[`--mantine-color-${n}-light-color`]:`var(--mantine-color-${n}-0)`,[`--mantine-color-${n}-outline`]:`var(--mantine-color-${n}-${Math.max(a-4,0)})`,[`--mantine-color-${n}-outline-hover`]:(0,g._)(e.colors[t][Math.max(a-4,0)],.05)};return o?{[`--mantine-color-${n}-0`]:e.colors[t][0],[`--mantine-color-${n}-1`]:e.colors[t][1],[`--mantine-color-${n}-2`]:e.colors[t][2],[`--mantine-color-${n}-3`]:e.colors[t][3],[`--mantine-color-${n}-4`]:e.colors[t][4],[`--mantine-color-${n}-5`]:e.colors[t][5],[`--mantine-color-${n}-6`]:e.colors[t][6],[`--mantine-color-${n}-7`]:e.colors[t][7],[`--mantine-color-${n}-8`]:e.colors[t][8],[`--mantine-color-${n}-9`]:e.colors[t][9],...i}:i}function $(e,t,r){(0,s.f)(t).forEach(n=>Object.assign(e,{[`--mantine-${r}-${n}`]:t[n]}))}let y=e=>{let t=(0,p.f)(e,"light"),r=e.defaultRadius in e.radius?e.radius[e.defaultRadius]:(0,c.t)(e.defaultRadius),n={variables:{"--mantine-z-index-app":"100","--mantine-z-index-modal":"200","--mantine-z-index-popover":"300","--mantine-z-index-overlay":"400","--mantine-z-index-max":"9999","--mantine-scale":e.scale.toString(),"--mantine-cursor-type":e.cursorType,"--mantine-webkit-font-smoothing":e.fontSmoothing?"antialiased":"unset","--mantine-moz-font-smoothing":e.fontSmoothing?"grayscale":"unset","--mantine-color-white":e.white,"--mantine-color-black":e.black,"--mantine-line-height":e.lineHeights.md,"--mantine-font-family":e.fontFamily,"--mantine-font-family-monospace":e.fontFamilyMonospace,"--mantine-font-family-headings":e.headings.fontFamily,"--mantine-heading-font-weight":e.headings.fontWeight,"--mantine-heading-text-wrap":e.headings.textWrap,"--mantine-radius-default":r,"--mantine-primary-color-filled":`var(--mantine-color-${e.primaryColor}-filled)`,"--mantine-primary-color-filled-hover":`var(--mantine-color-${e.primaryColor}-filled-hover)`,"--mantine-primary-color-light":`var(--mantine-color-${e.primaryColor}-light)`,"--mantine-primary-color-light-hover":`var(--mantine-color-${e.primaryColor}-light-hover)`,"--mantine-primary-color-light-color":`var(--mantine-color-${e.primaryColor}-light-color)`},light:{"--mantine-color-scheme":"light","--mantine-primary-color-contrast":(0,w.w)(e,"light"),"--mantine-color-bright":"var(--mantine-color-black)","--mantine-color-text":e.black,"--mantine-color-body":e.white,"--mantine-color-error":"var(--mantine-color-red-6)","--mantine-color-success":"var(--mantine-color-teal-8)","--mantine-color-placeholder":"var(--mantine-color-gray-5)","--mantine-color-anchor":`var(--mantine-color-${e.primaryColor}-${t})`,"--mantine-color-default":"var(--mantine-color-white)","--mantine-color-default-hover":"var(--mantine-color-gray-0)","--mantine-color-default-color":"var(--mantine-color-black)","--mantine-color-default-border":"var(--mantine-color-gray-4)","--mantine-color-dimmed":"var(--mantine-color-gray-6)","--mantine-color-disabled":"var(--mantine-color-gray-2)","--mantine-color-disabled-color":"var(--mantine-color-gray-5)","--mantine-color-disabled-border":"var(--mantine-color-gray-3)"},dark:{"--mantine-color-scheme":"dark","--mantine-primary-color-contrast":(0,w.w)(e,"dark"),"--mantine-color-bright":"var(--mantine-color-white)","--mantine-color-text":"var(--mantine-color-dark-0)","--mantine-color-body":"var(--mantine-color-dark-7)","--mantine-color-error":"var(--mantine-color-red-8)","--mantine-color-success":"var(--mantine-color-teal-8)","--mantine-color-placeholder":"var(--mantine-color-dark-3)","--mantine-color-anchor":`var(--mantine-color-${e.primaryColor}-4)`,"--mantine-color-default":"var(--mantine-color-dark-6)","--mantine-color-default-hover":"var(--mantine-color-dark-5)","--mantine-color-default-color":"var(--mantine-color-white)","--mantine-color-default-border":"var(--mantine-color-dark-4)","--mantine-color-dimmed":"var(--mantine-color-dark-2)","--mantine-color-disabled":"var(--mantine-color-dark-6)","--mantine-color-disabled-color":"var(--mantine-color-dark-3)","--mantine-color-disabled-border":"var(--mantine-color-dark-4)"}};$(n.variables,e.breakpoints,"breakpoint"),$(n.variables,e.spacing,"spacing"),$(n.variables,e.fontSizes,"font-size"),$(n.variables,e.lineHeights,"line-height"),$(n.variables,e.shadows,"shadow"),$(n.variables,e.radius,"radius"),$(n.variables,e.fontWeights,"font-weight"),e.colors[e.primaryColor].forEach((t,r)=>{n.variables[`--mantine-primary-color-${r}`]=`var(--mantine-color-${e.primaryColor}-${r})`}),(0,s.f)(e.colors).forEach(t=>{let r=e.colors[t];if((0,v.f)(r)){Object.assign(n.light,E({theme:e,name:r.name,color:r.light,colorScheme:"light",withColorValues:!0})),Object.assign(n.dark,E({theme:e,name:r.name,color:r.dark,colorScheme:"dark",withColorValues:!0})),n.light[`--mantine-color-${r.name}-contrast`]=(0,w.F)(r,e,"light"),n.dark[`--mantine-color-${r.name}-contrast`]=(0,w.F)(r,e,"dark");return}r.forEach((e,r)=>{n.variables[`--mantine-color-${t}-${r}`]=e}),Object.assign(n.light,E({theme:e,color:t,colorScheme:"light",withColorValues:!1})),Object.assign(n.dark,E({theme:e,color:t,colorScheme:"dark",withColorValues:!1}))});let o=e.headings.sizes;return(0,s.f)(o).forEach(t=>{n.variables[`--mantine-${t}-font-size`]=o[t].fontSize,n.variables[`--mantine-${t}-line-height`]=o[t].lineHeight,n.variables[`--mantine-${t}-font-weight`]=o[t].fontWeight||e.headings.fontWeight}),n},S=y(e.i(821217).f);function x({cssVariablesSelector:e,deduplicateCssVariables:t}){let n,o=(0,i.i)(),a=(0,r.H)(),l=function({theme:e,generator:t}){let r=y(e),n=t?.(e);return n?(0,m.f)(r,n):r}({theme:o,generator:(0,r.Z)()}),c=(void 0===e||":root"===e||":host"===e)&&t,f=d(c?(n={variables:{},light:{},dark:{}},(0,s.f)(l.variables).forEach(e=>{S.variables[e]!==l.variables[e]&&(n.variables[e]=l.variables[e])}),(0,s.f)(l.light).forEach(e=>{S.light[e]!==l.light[e]&&(n.light[e]=l.light[e])}),(0,s.f)(l.dark).forEach(e=>{S.dark[e]!==l.dark[e]&&(n.dark[e]=l.dark[e])}),n):l,e);return f?(0,u.jsx)("style",{"data-mantine-styles":!0,nonce:a?.(),dangerouslySetInnerHTML:{__html:`${f}${c?"":d({variables:{},dark:{"--mantine-color-scheme":"dark"},light:{"--mantine-color-scheme":"light"}},e)}`}}):null}function _({theme:e,children:s,getStyleNonce:l,withStaticClasses:c=!0,withGlobalClasses:h=!0,deduplicateCssVariables:d=!0,withCssVariables:m=!0,cssVariablesSelector:p,classNamesPrefix:v="mantine",colorSchemeManager:w=function({key:e="mantine-color-scheme-value"}={}){let r;return{get:r=>{if("u"<typeof window)return r;try{let n=window.localStorage.getItem(e);return t(n)?n:r}catch{return r}},set:t=>{try{window.localStorage.setItem(e,t)}catch(e){console.warn("[@mantine/core] Local storage color scheme manager was unable to save color scheme.",e)}},subscribe:n=>{r=r=>{r.storageArea===window.localStorage&&r.key===e&&t(r.newValue)&&n(r.newValue)},window.addEventListener("storage",r)},unsubscribe:()=>{window.removeEventListener("storage",r)},clear:()=>{window.localStorage.removeItem(e)}}}(),defaultColorScheme:b="light",getRootElement:g=()=>document.documentElement,cssVariablesResolver:E,forceColorScheme:$,stylesTransform:y,env:S,deduplicateInlineStyles:R=!1}){let{colorScheme:k,setColorScheme:A,clearColorScheme:O}=function({manager:e,defaultColorScheme:t,getRootElement:r,forceColorScheme:i}){let s=(0,n.useRef)(null),[l,c]=(0,n.useState)(()=>e.get(t)),u=i||l,f=(0,n.useCallback)(t=>{i||(a(t,r),c(t),e.set(t))},[e.set,u,i]),h=(0,n.useCallback)(()=>{c(t),a(t,r),e.clear()},[e.clear,t]);return(0,n.useEffect)(()=>(e.subscribe(f),e.unsubscribe),[e.subscribe,e.unsubscribe]),(0,o.f)(()=>{a(e.get(t),r)},[]),(0,n.useEffect)(()=>{if(i)return a(i,r),()=>{};void 0===i&&a(l,r),"u">typeof window&&"matchMedia"in window&&(s.current=window.matchMedia("(prefers-color-scheme: dark)"));let e=e=>{"auto"===l&&a(e.matches?"dark":"light",r)};return s.current?.addEventListener("change",e),()=>s.current?.removeEventListener("change",e)},[l,i]),{colorScheme:u,setColorScheme:f,clearColorScheme:h}}({defaultColorScheme:b,forceColorScheme:$,manager:w,getRootElement:g});return!function({respectReducedMotion:e,getRootElement:t}){(0,o.f)(()=>{e&&t()?.setAttribute("data-respect-reduced-motion","true")},[e])}({respectReducedMotion:e?.respectReducedMotion||!1,getRootElement:g}),(0,u.jsx)(r.A,{value:{colorScheme:k,setColorScheme:A,clearColorScheme:O,getRootElement:g,classNamesPrefix:v,getStyleNonce:l,cssVariablesResolver:E,cssVariablesSelector:p??":root",withStaticClasses:c,stylesTransform:y,env:S,deduplicateInlineStyles:R},children:(0,u.jsxs)(i.k,{theme:e,children:[m&&(0,u.jsx)(x,{cssVariablesSelector:p,deduplicateCssVariables:d}),h&&(0,u.jsx)(f,{}),s]})})}x.displayName="@mantine/CssVariables",_.displayName="@mantine/core/MantineProvider",e.s(["f",0,_],880346)},580352,e=>{"use strict";var t=e.i(299292),r=e.i(396467),n=e.i(771197);function o({color:e,theme:t,autoContrast:n,colorScheme:a}){return("boolean"==typeof n?n:t.autoContrast)&&(0,r.f)({color:e||t.primaryColor,theme:t,colorScheme:a}).isLight?"var(--mantine-color-black)":"var(--mantine-color-white)"}function a(e,t,r){return o({color:"dark"===r?e.dark:e.light,theme:t,colorScheme:r,autoContrast:!0})}e.s(["p",0,o,"w",0,function(e,r){let i=e.colors[e.primaryColor];return(0,n.f)(i)?e.autoContrast?a(i,e,r):"var(--mantine-color-white)":o({color:i[(0,t.f)(e,r)],theme:e,autoContrast:null})},"F",0,a])},139031,e=>{"use strict";e.s(["f",0,function(e){let t="string"==typeof e&&e.includes("var(--mantine-scale)")?e.match(/^calc\((.*?)\)$/)?.[1].split("*")[0].trim():e;return"number"==typeof t?t:"string"==typeof t?t.includes("calc")||t.includes("var")?t:t.includes("px")?Number(t.replace("px","")):t.includes("rem")?16*Number(t.replace("rem","")):t.includes("em")?16*Number(t.replace("em","")):Number(t):0/0}])},991733,(__turbopack_context__,module,exports)=>{!function(){var __webpack_modules__={285:function(__unused_webpack_module,exports){var indexOf=function(e,t){if(e.indexOf)return e.indexOf(t);for(var r=0;r<e.length;r++)if(e[r]===t)return r;return -1},Object_keys=function(e){if(Object.keys)return Object.keys(e);var t=[];for(var r in e)t.push(r);return t},forEach=function(e,t){if(e.forEach)return e.forEach(t);for(var r=0;r<e.length;r++)t(e[r],r,e)},defineProp=function(){try{return Object.defineProperty({},"_",{}),function(e,t,r){Object.defineProperty(e,t,{writable:!0,enumerable:!1,configurable:!0,value:r})}}catch(e){return function(e,t,r){e[t]=r}}}(),globals=["Array","Boolean","Date","Error","EvalError","Function","Infinity","JSON","Math","NaN","Number","Object","RangeError","ReferenceError","RegExp","String","SyntaxError","TypeError","URIError","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","eval","isFinite","isNaN","parseFloat","parseInt","undefined","unescape"];function Context(){}Context.prototype={};var Script=exports.Script=function(e){if(!(this instanceof Script))return new Script(e);this.code=e};Script.prototype.runInContext=function(e){if(!(e instanceof Context))throw TypeError("needs a 'context' argument.");var t=document.createElement("iframe");t.style||(t.style={}),t.style.display="none",document.body.appendChild(t);var r=t.contentWindow,n=r.eval,o=r.execScript;!n&&o&&(o.call(r,"null"),n=r.eval),forEach(Object_keys(e),function(t){r[t]=e[t]}),forEach(globals,function(t){e[t]&&(r[t]=e[t])});var a=Object_keys(r),i=n.call(r,this.code);return forEach(Object_keys(r),function(t){(t in e||-1===indexOf(a,t))&&(e[t]=r[t])}),forEach(globals,function(t){t in e||defineProp(e,t,r[t])}),document.body.removeChild(t),i},Script.prototype.runInThisContext=function(){return eval(this.code)},Script.prototype.runInNewContext=function(e){var t=Script.createContext(e),r=this.runInContext(t);return e&&forEach(Object_keys(t),function(r){e[r]=t[r]}),r},forEach(Object_keys(Script.prototype),function(e){exports[e]=Script[e]=function(t){var r=Script(t);return r[e].apply(r,[].slice.call(arguments,1))}}),exports.isContext=function(e){return e instanceof Context},exports.createScript=function(e){return exports.Script(e)},exports.createContext=Script.createContext=function(e){var t=new Context;return"object"==typeof e&&forEach(Object_keys(e),function(r){t[r]=e[r]}),t}}};"u">typeof __nccwpck_require__&&(__nccwpck_require__.ab="/ROOT/node_modules/.pnpm/next@16.4.5_@babel+core@7.28.5_@types+node@20.19.25_react-dom@19.2.0_react@19.2.0__react@19.2.0_sass@1.103.1/node_modules/next/dist/compiled/vm-browserify/");var __webpack_exports__={};__webpack_modules__[285](0,__webpack_exports__),module.exports=__webpack_exports__}()},415809,e=>{"use strict";var t=e.i(599565);e.s(["z",0,t])},801236,e=>{"use strict";var t=e.i(599565);e.s(["z",0,t])},369963,e=>{"use strict";var t=e.i(599565);e.s(["z",0,t])},514287,e=>{"use strict";var t=e.i(599565);e.s(["z",0,t])},820984,e=>{"use strict";var t=e.i(599565);e.s(["z",0,t])},789137,393592,e=>{"use strict";let t=[0x9747b28c,0x5bd1e995],r=(e,t)=>e<<t|e>>>32-t,n=e=>Math.imul(r(Math.imul(e,0xcc9e2d51),15),0x1b873593),o=(e,t)=>Math.imul(r(e^n(t),13),5)+0xe6546b64>>>0;function a(e,t,r,a){let i,s=e=>r[e]??0,l=-4&a,c=e;for(let e=0;e<l;e+=4)c=o(c,s(e)|s(e+1)<<8|s(e+2)<<16|s(e+3)<<24);let u=0;for(let e=a-1;e>=l;e-=1)u=u<<8|s(e);return a>l&&(c^=n(u)),i=c^t+a,i^=i>>>16,i=Math.imul(i,0x85ebca6b),i^=i>>>13,i=Math.imul(i,0xc2b2ae35),(i^=i>>>16)>>>0}let i=/^(?:0|[1-9]\d*)$/,s=e=>i.test(e);function l(e){if(!s(e))throw Error(`Not a world number: ${JSON.stringify(e)}`)}e.s(["f",0,l,"_",0,s,"D",0,function(e){l(e);let r=function(e){let r=Uint8Array.from(e,e=>e.codePointAt(0)??0),[n,i]=t.map(e=>a(e>>>0,0,r,r.length));return o(o(0,n??0),i??0)}(e),n=new TextEncoder,i=new Uint8Array(64);return e=>{3*e.length>i.length&&(i=new Uint8Array(3*e.length));let{written:t}=n.encodeInto(e,i);return a(r,8,i,t)}}],789137);let c=(e,t)=>e.reduceRight((e,r)=>e*t+r,0),u=[3.3871328727963665,133.14166789178438,1971.5909503065513,13731.69376550946,45921.95393154987,67265.7709270087,33430.57558358813,2509.0809287301227],f=[1,42.31333070160091,687.1870074920579,5394.196021424751,21213.794301586597,39307.89580009271,28729.085735721943,5226.495278852854],h=[1.4234371107496835,4.630337846156546,5.769497221460691,3.6478483247632045,1.2704582524523684,.2417807251774506,.022723844989269184,7745450142783414e-19],d=[1,2.053191626637759,1.6763848301838038,.6897673349851,.14810397642748008,.015198666563616457,5475938084995345e-19,10507500716444169e-25],m=[6.657904643501103,5.463784911164114,1.7848265399172913,.29656057182850487,.026532189526576124,.0012426609473880784,27115555687434876e-21,20103343992922881e-23],p=[1,.599832206555888,.1369298809227358,.014875361290850615,7868691311456133e-19,18463183175100548e-21,1421511758316446e-22,20442631033899397e-31],v=e=>(function(e){let t,r=e-.5;if(.425>=Math.abs(r)){let e=.180625-r*r;return r*c(u,e)/c(f,e)}let n=Math.sqrt(-Math.log(Math.min(e,1-e)));return n<=5?(n-=1.6,t=c(h,n)/c(d,n)):(n-=5,t=c(m,n)/c(p,n)),r<0?-t:t})((e+.5)/0x100000000),w=e=>({kind:"leaf",decode:e}),b=(e,t)=>""===e?t:`${e}/${t}`;e.s(["F",0,{struct:e=>({kind:"struct",fields:e}),uniform:(e,t)=>w(r=>{let n,o;return n=r,(o=e)+(n+.5)/0x100000000*(t-o)}),normal:()=>w(v),word:()=>w(e=>e),table:({slots:e,slotOf:t,segmentsAt:r},n)=>({kind:"table",leaf:n,slots:e,segmentsAt:r,lookup:e=>({values:e,at:r=>e[t(r)]??0/0})}),pick:e=>{if(!Number.isInteger(e)||e<1||e>2097152)throw Error(`Cannot pick among ${e}`);return w(t=>Math.floor(t*e/0x100000000))},wide:()=>({kind:"wide"}),over:(e,t)=>({kind:"over",key:e,of:t}),key:function(e){if(Array.isArray(e))return{segments:t=>{if(!e.includes(t))throw Error(`Not a key of [${e.join(", ")}]: ${t}`);return t}};let t=Object.entries(e);return{segments:e=>t.map(([t,r])=>r(e[t])).join("/")}},int:e=>{if("number"!=typeof e||!Number.isSafeInteger(e))throw TypeError(`Not a safe integer: ${String(e)}`);return String(e)},big:e=>{if("bigint"!=typeof e)throw TypeError(`Not a bigint: ${String(e)}`);return e.toString()}},"P",0,function(e,t){return function e(t,r,n){if("leaf"===t.kind)return t.decode(n(r));if("wide"===t.kind)return BigInt(n(b(r,"0")))<<32n|BigInt(n(b(r,"1")));if("over"===t.kind){let{key:o,of:a}=t;return{at:t=>e(a,b(r,o.segments(t)),n)}}if("table"===t.kind){let{slots:e,segmentsAt:o,leaf:a,lookup:i}=t,s=new Float64Array(e);for(let t=0;t<e;t+=1)s[t]=a.decode(n(b(r,o(t))));return i(s)}return Object.fromEntries(Object.entries(t.fields).map(([t,o])=>[t,e(o,b(r,t),n)]))}(e,"",t)}],393592)},530434,555249,942815,334461,e=>{"use strict";let t=(e,t,...r)=>({id:e,listing:t,needs:r}),r=e=>Number.isInteger(e)?e.toFixed(1):String(e);e.s(["a",0,function(e){let t=new Map,r=e=>{let n=t.get(e.id);if(void 0!==n){if(n!==e)throw Error(`Two WGSL pieces are both named ${e.id}`);return}for(let t of e.needs)r(t);t.set(e.id,e)};for(let t of e)r(t);return[...t.values()].map(({listing:e})=>e.trim()).join("\n\n")},"W",0,r,"E",0,e=>`vec${String(e.length)}f(${e.map(e=>r(e)).join(", ")})`,"K",0,t],555249);let n=t("gpu/shared/shader/hash",`
fn mix32(x: u32) -> u32 {
  var h = x;
  h ^= h >> 16u;
  h *= 0x7feb352du;
  h ^= h >> 15u;
  h *= 0x846ca68bu;
  h ^= h >> 16u;
  return h;
}

/// \`a\` and \`b\` hashed into one word.
fn hashOf(a: u32, b: u32) -> u32 {
  return mix32(a ^ mix32(b + 0x9e3779b9u));
}

/// A word as a number in [0, 1).
fn unitOf(h: u32) -> f32 {
  return f32(h >> 8u) / 16777216.0;
}

/// The word of lattice cell \`cell\` under \`salt\`.
fn cellHash(cell: vec2i, salt: u32) -> u32 {
  return hashOf(hashOf(bitcast<u32>(cell.x), bitcast<u32>(cell.y)), salt);
}

/// The word of lattice point \`point\` under \`salt\` in one round of the
/// mixer: for a lattice read many times a pixel, where \`cellHash\`'s four
/// rounds a point are the whole cost.
fn pointHash(point: vec3i, salt: u32) -> u32 {
  let spread =
    bitcast<vec3u>(point) * vec3u(0x9e3779b1u, 0x85ebca77u, 0xc2b2ae3du);
  return mix32(spread.x + spread.y + spread.z + salt);
}

/// Smooth noise in [0, 1), one lattice cell per unit of \`p\`.
fn valueNoise(p: vec2f, salt: u32) -> f32 {
  let cell = vec2i(floor(p));
  let f = fract(p);
  let u = f * f * (3.0 - 2.0 * f);
  let a = unitOf(cellHash(cell, salt));
  let b = unitOf(cellHash(cell + vec2i(1, 0), salt));
  let c = unitOf(cellHash(cell + vec2i(0, 1), salt));
  let d = unitOf(cellHash(cell + vec2i(1, 1), salt));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

/// \`octaves\` of valueNoise, each twice as fine and half as strong, in [0, 1).
fn fbm(p: vec2f, salt: u32, octaves: i32) -> f32 {
  var sum = 0.0;
  var weight = 0.5;
  var at = p;
  for (var octave = 0; octave < octaves; octave++) {
    sum += weight * valueNoise(at, salt + u32(octave));
    at *= 2.0;
    weight *= 0.5;
  }
  return sum / (1.0 - 2.0 * weight);
}

/// The point lattice cell \`cell\` holds, \`word\` being its \`cellHash\`.
fn cellPoint(cell: vec2i, word: u32) -> vec2f {
  return vec2f(cell) + vec2f(unitOf(word), unitOf(mix32(word)));
}

/// Cells of a unit lattice, one point in each: x is the distance to the
/// nearest point, y that point's own random number in [0, 1).
fn worley(p: vec2f, salt: u32) -> vec2f {
  let cell = vec2i(floor(p));
  var nearest = vec2f(8.0, 0.0);
  for (var dy = -1; dy <= 1; dy++) {
    for (var dx = -1; dx <= 1; dx++) {
      let other = cell + vec2i(dx, dy);
      let word = cellHash(other, salt);
      let distance = length(cellPoint(other, word) - p);
      if (distance < nearest.x) {
        nearest = vec2f(distance, unitOf(mix32(word ^ 0xa5a5a5a5u)));
      }
    }
  }
  return nearest;
}

/// How far \`p\` stands from the nearest wall between \`worley\`'s cells: 0 on
/// the web of walls, rising into each cell.
fn cellWalls(p: vec2f, salt: u32) -> f32 {
  let cell = vec2i(floor(p));
  var first = 8.0;
  var second = 8.0;
  for (var dy = -1; dy <= 1; dy++) {
    for (var dx = -1; dx <= 1; dx++) {
      let other = cell + vec2i(dx, dy);
      let distance = length(cellPoint(other, cellHash(other, salt)) - p);
      if (distance < first) {
        second = first;
        first = distance;
      } else if (distance < second) {
        second = distance;
      }
    }
  }
  return second - first;
}
`);e.s(["f",0,n],942815),e.i(991733);let{sin:o,cos:a,sqrt:i,exp:s,log:l,pow:c,abs:u,floor:f,min:h,max:d,tanh:m,atan2:p}=Math;e.s([],530434);var v=e.i(789137),w=e.i(393592);let b=2*Math.PI,g=3600/420,E=3600/420*9.81/b,$=[Math.SQRT1_2,-Math.SQRT1_2],y=[[31,13,1],[53,17,1],[89,17,1]],S=[[19,9,.22],[37,9,.16],[61,13,.1]],x=e=>w.F.struct({cycles:w.F.pick(e),weight:w.F.uniform(.75,1.25),start:w.F.uniform(0,1)}),_=e=>w.F.struct({slow:x(e[0]?.[1]??1),middle:x(e[1]?.[1]??1),quick:x(e[2]?.[1]??1)}),R=(0,v.D)("0"),k=(0,w.P)(w.F.struct({drift:_(y),sets:_(S)}),e=>R(`island/sea/swell/${e}`));function A({slow:e,middle:t,quick:r},n,o,a){let i=[e,t,r].map(({cycles:e,weight:t,start:r},o)=>{let[a=1,,i=1]=n[o]??[];return{cycles:a+e,share:i*t,start:r}}),s=i.reduce((e,{share:t})=>e+t,0);return i.map(({cycles:e,share:t,start:r})=>[e,o*t/s*a(e),r])}let O=A(k.drift,y,.165,e=>420/(b*e)),H=A(k.sets,S,.47,()=>1),W=(e,t)=>e.reduce((e,[r,n,o])=>e+n*Math.sin(b*(r*t/3600+o)),0),C=e=>e.map(([e,t,n])=>`${r(t)} * sin(${r(b)} * fract(${r(e)} * tau / ${r(3600)} + ${r(n)}))`).join("\n    + "),M=(1-Math.exp(-3))/3,L=t("outside/swell",`
fn swellDrift(tau: f32) -> f32 {
  return ${C(O)};
}

fn setsAt(tau: f32) -> f32 {
  return 1.0
    + ${C(H)};
}
`);e.s(["n",0,.955,"j",0,3,"M",0,M,"O",0,E,"Y",0,3600,"B",0,g,"o",0,b,"w",0,9.81,"y",0,"0","$",0,.4,"p",0,$,"R",0,L,"a",0,420,"H",0,function(e){let t=Math.min(Math.max((e-.955)/(1-.955),0),1),r=Math.exp(-3*e);return 2.1*(r+t*t*(3-2*t)*(1-r)-M)},"Z",0,function(e){let t=e*g;for(let r=0;r<5;r+=1)t=(e-W(O,t))*g;return t},"e",0,function(e,t){let r=Math.sqrt(1-t*t),n=Math.cos(b*e);return r*(n-t/(1+r))/(1-t*n)},"x",0,e=>1+W(H,e),"N",0,e=>420*e/3600+W(O,e)],334461)},377160,e=>{"use strict";e.s(["f",0,function(e,t,r){let n=e.get(t);if(void 0!==n)return n;let o=r(t);return e.set(t,o),o}])},144054,756492,423270,e=>{"use strict";var t=e.i(754118);let r=["en","ru"],n=(0,t.x)(r);e.s(["L",0,"en","H",0,r,"f",0,function(e){let t=e.split("/").findLast(Boolean)??"";return n(t)?t:"en"},"Y",0,n],756492);var o=e.i(990314);let a=function(e){var t,r;if(null==e)return s;if("function"==typeof e)return i(e);if("object"==typeof e){return Array.isArray(e)?function(e){let t=[],r=-1;for(;++r<e.length;)t[r]=a(e[r]);return i(function(...e){let r=-1;for(;++r<t.length;)if(t[r].apply(this,e))return!0;return!1})}(e):(t=e,i(function(e){let r;for(r in t)if(e[r]!==t[r])return!1;return!0}))}if("string"==typeof e){return r=e,i(function(e){return e&&e.type===r})}throw Error("Expected function, string, or object as test")};function i(e){return function(t,r,n){return!!(function(e){return null!==e&&"object"==typeof e&&"type"in e}(t)&&e.call(this,t,"number"==typeof r?r:void 0,n||void 0))}}function s(){return!0}var l=e.i(966128);e.s(["f",0,function(e,t){let r=e.split(/{(\w+)}/),n=new Set,a=r.map((r,a)=>{if(a%2==0)return r;if(!(r in t))throw Error(`“${e}” has a {${r}} no slot fills.`);return n.add(r),(0,o.jsx)(l.Fragment,{children:t[r]},a)}),i=Object.keys(t).filter(e=>!n.has(e));if(i.length>0)throw Error(`“${e}” has no place for {${i.join("}, {")}}.`);return a}],423270),e.s([],144054)},754118,e=>{"use strict";let t=e=>t=>"string"==typeof t&&e.includes(t);e.s(["x",0,t,"I",0,function(e,r){if(!t(e)(r))throw Error(`Expected one of ${e.join(", ")}, not ${String(r)}`);return r},"O",0,function(e,...t){let r={};for(let n of t)r[n]=e[n];return r}])},241860,e=>{"use strict";function t(e){return class extends Error{constructor(t,r){super(t,r),this.name=e}}}let r=t("NonErrorThrown");function n(e){return e instanceof Error?e:new r(String(e),{cause:e})}e.s(["a",0,n,"M",0,t,"t",0,function(e){return{cause:n(e)}}])},650727,748618,570029,e=>{"use strict";e.i(317683),e.i(675131),e.i(702239);var t=e.i(555249),r=e.i(334461),n=e.i(386004),o=e.i(687944),a=e.i(969716),i=e.i(257349);let s=(0,t.K)("nature/shared/shore/shore-level",`
/// The greater of two levels, rounded where they cross.
fn shoreOver(a: f32, b: f32) -> f32 {
  return 0.5 * (a + b + sqrt((a - b) * (a - b) + SHORE_ROUND * SHORE_ROUND));
}

/// The depth a wave is timed over where the bed stands at \`bed\`.
fn shoreDepth(bed: f32) -> f32 {
  return max(-bed, 0.0) + SHORE_SHALLOWEST;
}

/// Seconds water \`depth\` deep has held a wave back since deep water.
fn shoreDelay(depth: f32) -> f32 {
  let q = sqrt(min(depth / SWELL_FEELS, 1.0));
  return SHORE_LAG * (1.0 - q) * (1.0 - q);
}

/// How fast that delay grows as the water shallows, seconds per metre.
fn shoreSlowing(depth: f32) -> f32 {
  let q = sqrt(min(depth / SWELL_FEELS, 1.0));
  return SHORE_LAG * (1.0 - q) / sqrt(depth * SWELL_FEELS);
}

/// How squarely the waves at a point still run with the open swell: 1 on the
/// beach that faces it, −1 in the island's lee.
fn shoreFacing(along: f32, steep: f32, bed: f32) -> f32 {
  let slow = shoreSlowing(shoreDepth(bed));
  let pace = SWELL_PACE;
  let ahead = pace + slow * along;
  return
    ahead / sqrt(
      pace * pace + 2.0 * pace * slow * along + slow * slow * steep * steep,
    );
}

/// What a shore facing the swell by \`facing\` keeps of a wave's height.
fn sheltered(facing: f32) -> f32 {
  return mix(SHORE_LEE, 1.0, smoothstep(-0.6, 0.7, facing));
}

/// The open swell's amplitude, metres, on a shore keeping \`shelter\` of it.
fn swellAmplitude(tau: f32, shelter: f32) -> f32 {
  return 0.5 * SWELL_HEIGHT * shelter * setsAt(tau);
}

/// A wave of amplitude \`open\` as the shallowing bed has stood it up.
fn shoaled(open: f32, bed: f32) -> f32 {
  return open * max(1.0, pow(SHOALS_FROM / shoreDepth(bed), 0.25));
}

/// How far a wave of amplitude \`open\` has gone toward breaking, 0 to 1 and past.
fn steepness(open: f32, bed: f32) -> f32 {
  return shoaled(open, bed) / max(0.5 * SURF_SHARE * -bed, 1e-4);
}

/// How broken a wave \`steep\` toward breaking is: 0 unbroken, 1 a bore.
fn breaking(steep: f32) -> f32 {
  return smoothstep(BREAKS_FROM, BREAKS_TO, steep);
}

/// How high up the sand, metres, the wave that landed at \`landed\` runs.
fn swashReach(landed: f32, shelter: f32) -> f32 {
  return RUNUP_SHARE * SWELL_HEIGHT * shelter * setsAt(landed);
}

/// How broken the waves are over a bed at \`bed\` in a point's own time \`tau\`.
fn brokenAt(tau: f32, bed: f32, shelter: f32) -> f32 {
  return breaking(steepness(swellAmplitude(tau, shelter), bed));
}

/// The waves' surface over a bed below the still sea, metres about it.
fn surfLevel(tau: f32, bed: f32, shelter: f32) -> f32 {
  let open = swellAmplitude(tau, shelter);
  let steep = steepness(open, bed);
  let limit = 0.5 * SURF_SHARE * max(-bed, 0.0);
  let tall = min(shoaled(open, bed), limit);
  let turns = turnsAt(tau);
  let phase = turns - floor(turns);
  let shape =
    mix(peaked(phase, 0.75 * min(steep, 1.0)), bore(phase), breaking(steep));
  return tall * shape;
}

/// How deep wave \`n\`'s sheet lies on sand at \`bed\`, in a point's own time
/// \`tau\`: nothing before the wave lands or past its tongue's tip.
fn sheetDepth(n: f32, tau: f32, bed: f32, shelter: f32) -> f32 {
  let landed = crestOf(n);
  let since = tau - landed;
  let launch = sqrt(2.0 * SEA_GRAVITY * swashReach(landed, shelter));
  let up = max(bed, 0.0) / BEACH_SLOPE;
  let thin =
    launch - 0.5 * SEA_GRAVITY * BEACH_SLOPE * since - up / max(since, 1e-3);
  if (since <= 0.0 || thin <= 0.0) {
    return 0.0;
  }
  return
    SHEET_THICK
      / (9.0 * SEA_GRAVITY)
      * thin
      * thin
      * smoothstep(0.0, SHEET_GATHERS, since)
      * exp(min(bed, 0.0) / 0.25);
}

/// The sea's slow surface where the bed stands at \`bed\`, a point's \`run\`
/// metres along the swell's heading, keeping \`shelter\` of a wave and \`tongue\`
/// of that again in its swash, at \`seconds\`.
fn swellLevel(
  run: f32,
  bed: f32,
  shelter: f32,
  tongue: f32,
  seconds: f32,
) -> f32 {
  let tau = seconds - run * SWELL_PACE - shoreDelay(shoreDepth(bed));
  let thrown = shelter * tongue;
  let n = floor(turnsAt(tau));
  let sheet =
    max(sheetDepth(n, tau, bed, thrown), sheetDepth(n - 1.0, tau, bed, thrown));
  var low = bed - DRY_UNDER * smoothstep(0.0, 0.05, bed);
  if (bed < 0.0) {
    low = surfLevel(tau, bed, shelter);
  }
  if (sheet <= 0.0) {
    return low;
  }
  var top = max(bed, 0.0) + sheet;
  if (bed < 0.0) {
    top -= SHEET_SINKS * (1.0 - smoothstep(0.0, SHEET_SINKS_UNDER, sheet));
  }
  return mix(low, shoreOver(low, top), smoothstep(-SHEET_REACHES, -0.1, bed));
}
`,r.R,a.f,n.f,o.f,i.U);e.s(["f",0,s],748618),e.i(530434);let l=(0,t.K)("outside/shore-wetness-numbers",`
const WAVES_BACK = ${(0,t.W)(6)};
const NEVER_WET = ${(0,t.W)(1e3)};
const DRY_SECONDS = ${(0,t.W)(28)};
const FILM_FROM = ${(0,t.W)(.4)};
const FILM_TO = ${(0,t.W)(5)};
`),c=(0,t.K)("nature/shared/shore/wetness",`
/// Seconds since a swash sheet last lay on sand \`bed\` metres over the still
/// sea, at a point whose own time is \`tau\` and whose shore keeps \`shelter\` of
/// a wave: 0 while one lies there, \`NEVER_WET\` where none of the last waves
/// reached.
fn drySince(tau: f32, bed: f32, shelter: f32) -> f32 {
  if (bed <= 0.0) {
    return 0.0;
  }
  let n = floor(turnsAt(tau));
  var dry = NEVER_WET;
  for (var back = 0.0; back < WAVES_BACK; back += 1.0) {
    let landed = crestOf(n - back);
    let since = tau - landed;
    let reach = swashReach(landed, shelter);
    // The sheet's tip passes the point going up and again coming down.
    let span = 2.0 * SEA_GRAVITY * (reach - bed);
    if (span > 0.0) {
      let launch = sqrt(2.0 * SEA_GRAVITY * reach);
      let comes = (launch - sqrt(span)) / (SEA_GRAVITY * BEACH_SLOPE);
      let leaves = (launch + sqrt(span)) / (SEA_GRAVITY * BEACH_SLOPE);
      if (since >= comes) {
        dry = min(dry, max(since - leaves, 0.0));
      }
    }
  }
  return dry;
}

/// How damp sand is \`dry\` seconds after the water left it, 1 soaked.
fn dampAfter(dry: f32) -> f32 {
  return exp(-dry / DRY_SECONDS);
}

/// How much of a film of water still stands on it, 1 a mirror.
fn filmAfter(dry: f32) -> f32 {
  return 1.0 - smoothstep(FILM_FROM, FILM_TO, dry);
}
`,l,a.f,o.f,s,i.U);e.s(["f",0,c],570029),e.s([],650727)},317683,675131,e=>{"use strict";e.i(530434);var t=e.i(555249),r=e.i(334461),n=e.i(789137),o=e.i(393592);let a=[[4.5,3,.07],[10,6,.1],[21,12,.12]],i=o.F.struct({longer:o.F.uniform(0,1),start:o.F.uniform(0,1)}),s=(0,n.D)(r.y),l=(0,o.P)(o.F.struct({short:i,middle:i,long:i}),e=>s(`island/sea/cusps/${e}`)),c=[l.short,l.middle,l.long].map(({longer:e,start:t},r)=>{let[n=1,o=0,i=0]=a[r]??[];return[1/(n+o*e),i,t]});e.s(["$",0,c,"O",0,e=>c.reduce((t,[n,o,a])=>t+o*Math.sin(r.o*(n*e+a)),1)],675131);let u=(0,t.K)("outside/shore-cusped",`
fn cusped(across: f32) -> f32 {
  return 1.0
    + ${c.map(([e,n,o])=>`${(0,t.W)(n)} * sin(${(0,t.W)(r.o)} * (${(0,t.W)(e)} * across + ${(0,t.W)(o)}))`).join("\n    + ")};
}
`);e.s(["f",0,u],317683)},702239,257349,e=>{"use strict";var t=e.i(10012),r=e.i(334461);e.i(530434);var n=e.i(555249);let o=1/12,a=Math.sqrt(30/r.w)/o,i=[.8,1.15],s=(0,n.K)("outside/water-level-numbers",`
const SWELL_FEELS = ${(0,n.W)(30)};
const BEACH_SLOPE = ${(0,n.W)(o)};
const SHORE_SHALLOWEST = ${(0,n.W)(.3)};
const SHORE_LAG = ${(0,n.W)(a)};
const SHORE_FACING_REACH = ${(0,n.W)(4)};
const SHORE_LEE = ${(0,n.W)(.3)};
const SHOALS_FROM = ${(0,n.W)(4.55)};
const SURF_SHARE = ${(0,n.W)(.62)};
const BREAKS_FROM = ${(0,n.W)(i[0])};
const BREAKS_TO = ${(0,n.W)(i[1])};
const RUNUP_SHARE = ${(0,n.W)(.55)};
const SHEET_THICK = ${(0,n.W)(1.5)};
const SHEET_GATHERS = ${(0,n.W)(.5)};
const SHEET_REACHES = ${(0,n.W)(.6)};
const SHEET_SINKS = ${(0,n.W)(.1)};
const SHEET_SINKS_UNDER = ${(0,n.W)(.01)};
const DRY_UNDER = ${(0,n.W)(.03)};
const SHORE_ROUND = ${(0,n.W)(.012)};
`);e.s(["$",0,o,"f",0,i,"x",0,.03,"W",0,.55,"c",0,.5,"Y",0,.6,"P",0,.1,"Q",0,.01,"E",0,1.5,"Z",0,4.55,"w",0,4,"u",0,a,"L",0,.3,"U",0,s,"m",0,.012,"n",0,.3,"H",0,.62,"a",0,30],257349);let l=e=>Math.max(-e,0)+.3;function c(e){let t=Math.sqrt(Math.min(e/30,1));return a*(1-t)*(1-t)}let u=(e,t)=>e*Math.max(1,(4.55/l(t))**.25);function f(e,n,a,i){let s=(0,r.Z)(e),l=n-s,c=Math.sqrt(2*r.w*(.55*r.$*i*(0,r.x)(s))),u=Math.max(a,0)/o,f=c-.5*r.w*o*l-u/Math.max(l,.001);return l<=0||f<=0?0:1.5*f*f/(9*r.w)*(0,t.j)(0,.5,l)*Math.exp(Math.min(a,0)/.25)}e.s(["V",0,e=>(0,t.h)(.3,1,(0,t.j)(-.6,.7,e)),"k",0,c,"W",0,l,"m",0,function(e,t,n){var o;let i=a*(1-Math.sqrt(Math.min((o=l(n))/30,1)))/Math.sqrt(30*o),s=1/r.O;return(s+i*e)/Math.sqrt(s*s+2*s*i*e+i*i*t*t)},"i",0,function(e,n,o,a,s){let h,d,m,p,v,w,b=s-e/r.O-c(l(n)),g=o*a,E=Math.floor((0,r.N)(b)),$=Math.max(f(E,b,n,g),f(E-1,b,n,g)),y=n<0?(d=u(h=.5*r.$*o*(0,r.x)(b),n)/Math.max(-(.31*n),1e-4),m=.31*Math.max(-n,0),p=Math.min(u(h,n),m),w=(v=(0,r.N)(b))-Math.floor(v),p*(0,t.h)((0,r.e)(w,.75*Math.min(d,1)),(0,r.H)(w),(0,t.j)(i[0],i[1],d))):n-.03*(0,t.j)(0,.05,n);if($<=0)return y;let S=Math.max(n,0)+$-(n<0?.1*(1-(0,t.j)(0,.01,$)):0);return(0,t.h)(y,.5*(y+S+Math.sqrt((y-S)*(y-S)+144e-6)),(0,t.j)(-.6,-.1,n))}],702239)},464455,e=>{"use strict";e.i(334461),e.i(386004),e.i(969716),e.s([])},386004,687944,969716,e=>{"use strict";e.i(530434);var t=e.i(555249),r=e.i(334461);let n=(0,t.K)("outside/swell-course",`
const SWELL_RUNS = ${(0,t.E)(r.p)};
const SWELL_RUNS_X = ${(0,t.W)(r.p[0])};
const SWELL_RUNS_Z = ${(0,t.W)(r.p[1])};
/// Seconds the open swell takes over a metre.
const SWELL_PACE = ${(0,t.W)(1/r.O)};
`);e.s(["f",0,n],386004);let o=(0,t.K)("outside/swell-numbers",`
const SEA_GRAVITY = ${(0,t.W)(r.w)};
const SWELL_HEIGHT = ${(0,t.W)(r.$)};
const HOUR_SECONDS = ${(0,t.W)(r.Y)};
const RADIANS_A_TURN = ${(0,t.W)(r.o)};
const WAVES = ${(0,t.W)(r.a)};
const PERIOD = ${(0,t.W)(r.B)};
const BORE_FACE = ${(0,t.W)(r.n)};
const BORE_FACE_SPAN = ${(0,t.W)(1-r.n)};
const BORE_FALL = ${(0,t.W)(r.j)};
const BORE_MEAN = ${(0,t.W)(r.M)};
`);e.s(["f",0,o],687944);let a=(0,t.K)("nature/shared/swell/swell-train",`
/// How many crests have passed a point whose own time is \`tau\` seconds.
fn turnsAt(tau: f32) -> f32 {
  return WAVES * tau / HOUR_SECONDS + swellDrift(tau);
}

/// The moment, in a point's own time, that crest \`n\` passes it.
fn crestOf(n: f32) -> f32 {
  var tau = n * PERIOD;
  for (var i = 0; i < 5; i++) {
    tau = (n - swellDrift(tau)) * PERIOD;
  }
  return tau;
}

/// A wave that has felt the bottom, at \`phase\` turns after its crest: crests
/// sharpened and troughs flattened by \`sharp\` in [0, 1), the height from crest
/// to trough staying 2 (Abreu et al. 2010, skewed with no asymmetry).
fn peaked(phase: f32, sharp: f32) -> f32 {
  let blunt = sqrt(1.0 - sharp * sharp);
  let swing = cos(RADIANS_A_TURN * phase);
  return blunt * (swing - sharp / (1.0 + blunt)) / (1.0 - sharp * swing);
}

/// A broken wave at \`phase\` turns after its front passed: highest just behind
/// the front, falling away, then the next front's steep face.
fn bore(phase: f32) -> f32 {
  let face = clamp((phase - BORE_FACE) / BORE_FACE_SPAN, 0.0, 1.0);
  let rise = face * face * (3.0 - 2.0 * face);
  let fall = exp(-BORE_FALL * phase);
  return 2.1 * (fall + (1.0 - fall) * rise - BORE_MEAN);
}
`,r.R,o);e.s(["f",0,a],969716)},7705,56269,981761,e=>{"use strict";var t=e.i(555249);e.i(530434);let r=[.42,.063,.022],n=[.0035,.0048,.0062],o=r.map((e,t)=>e+(n[t]??0)/.0183),a=(0,t.K)("sea/water-optics",`
const ABSORB = ${(0,t.E)(r)};
const BACKSCATTER = ${(0,t.E)(n)};
const ATTENUATE = ${(0,t.E)(o)};
`);e.s(["f",0,a],56269);let i=(0,t.K)("nature/shared/water/water-light",`
/// What water returns of light meeting it head on.
const HEAD_ON = 0.0204;
/// What the water's body shows an eye inside it, of the light falling on it.
const DROWNED = vec3f(0.035, 0.13, 0.15);

/// What water reflects of light meeting it at \`cosine\`.
fn fresnel(cosine: f32) -> f32 {
  let away = 1.0 - clamp(cosine, 0.0, 1.0);
  let fifth = away * away * away * away * away;
  return HEAD_ON + (1.0 - HEAD_ON) * fifth;
}

/// What water \`depth\` metres deep keeps of light crossing it, per channel,
/// scattered light that goes on the same way counted in.
fn kept(depth: f32) -> vec3f {
  return exp(-ABSORB * max(depth, 0.0));
}
`,a);e.s(["f",0,i],981761),e.s([],7705)},10012,e=>{"use strict";let t=e=>Math.min(1,Math.max(0,e)),r=(e,r,n)=>t((e-r)/(n-r)),n=e=>{let r=t(e);return r*r*(3-2*r)};e.s(["Y",0,t,"h",0,(e,t,r)=>e+(t-e)*r,"C",0,r,"k",0,n,"j",0,(e,t,o)=>n(r(o,e,t))])}]);