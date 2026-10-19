(()=>{var nx=Object.create;var ym=Object.defineProperty;var ix=Object.getOwnPropertyDescriptor;var ax=Object.getOwnPropertyNames;var ox=Object.getPrototypeOf,sx=Object.prototype.hasOwnProperty;var jn=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(r){throw t=0,r}};var lx=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of ax(t))!sx.call(e,i)&&i!==r&&ym(e,i,{get:()=>t[i],enumerable:!(n=ix(t,i))||n.enumerable});return e};var qt=(e,t,r)=>(r=e!=null?nx(ox(e)):{},lx(t||!e||!e.__esModule?ym(r,"default",{value:e,enumerable:!0}):r,e));var Nm=jn(ht=>{"use strict";var os=Symbol.for("react.element"),ux=Symbol.for("react.portal"),cx=Symbol.for("react.fragment"),dx=Symbol.for("react.strict_mode"),hx=Symbol.for("react.profiler"),px=Symbol.for("react.provider"),fx=Symbol.for("react.context"),mx=Symbol.for("react.forward_ref"),gx=Symbol.for("react.suspense"),vx=Symbol.for("react.memo"),_x=Symbol.for("react.lazy"),xm=Symbol.iterator;function yx(e){return e===null||typeof e!="object"?null:(e=xm&&e[xm]||e["@@iterator"],typeof e=="function"?e:null)}var wm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Em=Object.assign,Tm={};function Fa(e,t,r){this.props=e,this.context=t,this.refs=Tm,this.updater=r||wm}Fa.prototype.isReactComponent={};Fa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function bm(){}bm.prototype=Fa.prototype;function nd(e,t,r){this.props=e,this.context=t,this.refs=Tm,this.updater=r||wm}var id=nd.prototype=new bm;id.constructor=nd;Em(id,Fa.prototype);id.isPureReactComponent=!0;var Sm=Array.isArray,Am=Object.prototype.hasOwnProperty,ad={current:null},Cm={key:!0,ref:!0,__self:!0,__source:!0};function Rm(e,t,r){var n,i={},a=null,o=null;if(t!=null)for(n in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Am.call(t,n)&&!Cm.hasOwnProperty(n)&&(i[n]=t[n]);var s=arguments.length-2;if(s===1)i.children=r;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)i[n]===void 0&&(i[n]=s[n]);return{$$typeof:os,type:e,key:a,ref:o,props:i,_owner:ad.current}}function xx(e,t){return{$$typeof:os,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function od(e){return typeof e=="object"&&e!==null&&e.$$typeof===os}function Sx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Mm=/\/+/g;function rd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sx(""+e.key):t.toString(36)}function Cl(e,t,r,n,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case os:case ux:o=!0}}if(o)return o=e,i=i(o),e=n===""?"."+rd(o,0):n,Sm(i)?(r="",e!=null&&(r=e.replace(Mm,"$&/")+"/"),Cl(i,t,r,"",function(u){return u})):i!=null&&(od(i)&&(i=xx(i,r+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Mm,"$&/")+"/")+e)),t.push(i)),1;if(o=0,n=n===""?".":n+":",Sm(e))for(var s=0;s<e.length;s++){a=e[s];var l=n+rd(a,s);o+=Cl(a,t,r,l,i)}else if(l=yx(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=n+rd(a,s++),o+=Cl(a,t,r,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Al(e,t,r){if(e==null)return e;var n=[],i=0;return Cl(e,n,"","",function(a){return t.call(r,a,i++)}),n}function Mx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var br={current:null},Rl={transition:null},wx={ReactCurrentDispatcher:br,ReactCurrentBatchConfig:Rl,ReactCurrentOwner:ad};function Pm(){throw Error("act(...) is not supported in production builds of React.")}ht.Children={map:Al,forEach:function(e,t,r){Al(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Al(e,function(){t++}),t},toArray:function(e){return Al(e,function(t){return t})||[]},only:function(e){if(!od(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ht.Component=Fa;ht.Fragment=cx;ht.Profiler=hx;ht.PureComponent=nd;ht.StrictMode=dx;ht.Suspense=gx;ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wx;ht.act=Pm;ht.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Em({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=ad.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Am.call(t,l)&&!Cm.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];n.children=s}return{$$typeof:os,type:e.type,key:i,ref:a,props:n,_owner:o}};ht.createContext=function(e){return e={$$typeof:fx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:px,_context:e},e.Consumer=e};ht.createElement=Rm;ht.createFactory=function(e){var t=Rm.bind(null,e);return t.type=e,t};ht.createRef=function(){return{current:null}};ht.forwardRef=function(e){return{$$typeof:mx,render:e}};ht.isValidElement=od;ht.lazy=function(e){return{$$typeof:_x,_payload:{_status:-1,_result:e},_init:Mx}};ht.memo=function(e,t){return{$$typeof:vx,type:e,compare:t===void 0?null:t}};ht.startTransition=function(e){var t=Rl.transition;Rl.transition={};try{e()}finally{Rl.transition=t}};ht.unstable_act=Pm;ht.useCallback=function(e,t){return br.current.useCallback(e,t)};ht.useContext=function(e){return br.current.useContext(e)};ht.useDebugValue=function(){};ht.useDeferredValue=function(e){return br.current.useDeferredValue(e)};ht.useEffect=function(e,t){return br.current.useEffect(e,t)};ht.useId=function(){return br.current.useId()};ht.useImperativeHandle=function(e,t,r){return br.current.useImperativeHandle(e,t,r)};ht.useInsertionEffect=function(e,t){return br.current.useInsertionEffect(e,t)};ht.useLayoutEffect=function(e,t){return br.current.useLayoutEffect(e,t)};ht.useMemo=function(e,t){return br.current.useMemo(e,t)};ht.useReducer=function(e,t,r){return br.current.useReducer(e,t,r)};ht.useRef=function(e){return br.current.useRef(e)};ht.useState=function(e){return br.current.useState(e)};ht.useSyncExternalStore=function(e,t,r){return br.current.useSyncExternalStore(e,t,r)};ht.useTransition=function(){return br.current.useTransition()};ht.version="18.3.1"});var za=jn((sC,Lm)=>{"use strict";Lm.exports=Nm()});var Vm=jn(Tt=>{"use strict";function cd(e,t){var r=e.length;e.push(t);e:for(;0<r;){var n=r-1>>>1,i=e[n];if(0<Pl(i,t))e[n]=t,e[r]=i,r=n;else break e}}function vn(e){return e.length===0?null:e[0]}function Ll(e){if(e.length===0)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,i=e.length,a=i>>>1;n<a;){var o=2*(n+1)-1,s=e[o],l=o+1,u=e[l];if(0>Pl(s,r))l<i&&0>Pl(u,s)?(e[n]=u,e[l]=r,n=l):(e[n]=s,e[o]=r,n=o);else if(l<i&&0>Pl(u,r))e[n]=u,e[l]=r,n=l;else break e}}return t}function Pl(e,t){var r=e.sortIndex-t.sortIndex;return r!==0?r:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Im=performance,Tt.unstable_now=function(){return Im.now()}):(sd=Date,Um=sd.now(),Tt.unstable_now=function(){return sd.now()-Um});var Im,sd,Um,Ln=[],vi=[],Ex=1,en=null,gr=3,Il=!1,Ki=!1,ls=!1,km=typeof setTimeout=="function"?setTimeout:null,Fm=typeof clearTimeout=="function"?clearTimeout:null,Dm=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function dd(e){for(var t=vn(vi);t!==null;){if(t.callback===null)Ll(vi);else if(t.startTime<=e)Ll(vi),t.sortIndex=t.expirationTime,cd(Ln,t);else break;t=vn(vi)}}function hd(e){if(ls=!1,dd(e),!Ki)if(vn(Ln)!==null)Ki=!0,fd(pd);else{var t=vn(vi);t!==null&&md(hd,t.startTime-e)}}function pd(e,t){Ki=!1,ls&&(ls=!1,Fm(us),us=-1),Il=!0;var r=gr;try{for(dd(t),en=vn(Ln);en!==null&&(!(en.expirationTime>t)||e&&!Hm());){var n=en.callback;if(typeof n=="function"){en.callback=null,gr=en.priorityLevel;var i=n(en.expirationTime<=t);t=Tt.unstable_now(),typeof i=="function"?en.callback=i:en===vn(Ln)&&Ll(Ln),dd(t)}else Ll(Ln);en=vn(Ln)}if(en!==null)var a=!0;else{var o=vn(vi);o!==null&&md(hd,o.startTime-t),a=!1}return a}finally{en=null,gr=r,Il=!1}}var Ul=!1,Nl=null,us=-1,zm=5,Bm=-1;function Hm(){return!(Tt.unstable_now()-Bm<zm)}function ld(){if(Nl!==null){var e=Tt.unstable_now();Bm=e;var t=!0;try{t=Nl(!0,e)}finally{t?ss():(Ul=!1,Nl=null)}}else Ul=!1}var ss;typeof Dm=="function"?ss=function(){Dm(ld)}:typeof MessageChannel<"u"?(ud=new MessageChannel,Om=ud.port2,ud.port1.onmessage=ld,ss=function(){Om.postMessage(null)}):ss=function(){km(ld,0)};var ud,Om;function fd(e){Nl=e,Ul||(Ul=!0,ss())}function md(e,t){us=km(function(){e(Tt.unstable_now())},t)}Tt.unstable_IdlePriority=5;Tt.unstable_ImmediatePriority=1;Tt.unstable_LowPriority=4;Tt.unstable_NormalPriority=3;Tt.unstable_Profiling=null;Tt.unstable_UserBlockingPriority=2;Tt.unstable_cancelCallback=function(e){e.callback=null};Tt.unstable_continueExecution=function(){Ki||Il||(Ki=!0,fd(pd))};Tt.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):zm=0<e?Math.floor(1e3/e):5};Tt.unstable_getCurrentPriorityLevel=function(){return gr};Tt.unstable_getFirstCallbackNode=function(){return vn(Ln)};Tt.unstable_next=function(e){switch(gr){case 1:case 2:case 3:var t=3;break;default:t=gr}var r=gr;gr=t;try{return e()}finally{gr=r}};Tt.unstable_pauseExecution=function(){};Tt.unstable_requestPaint=function(){};Tt.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=gr;gr=e;try{return t()}finally{gr=r}};Tt.unstable_scheduleCallback=function(e,t,r){var n=Tt.unstable_now();switch(typeof r=="object"&&r!==null?(r=r.delay,r=typeof r=="number"&&0<r?n+r:n):r=n,e){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=r+i,e={id:Ex++,callback:t,priorityLevel:e,startTime:r,expirationTime:i,sortIndex:-1},r>n?(e.sortIndex=r,cd(vi,e),vn(Ln)===null&&e===vn(vi)&&(ls?(Fm(us),us=-1):ls=!0,md(hd,r-n))):(e.sortIndex=i,cd(Ln,e),Ki||Il||(Ki=!0,fd(pd))),e};Tt.unstable_shouldYield=Hm;Tt.unstable_wrapCallback=function(e){var t=gr;return function(){var r=gr;gr=t;try{return e.apply(this,arguments)}finally{gr=r}}}});var Wm=jn((uC,Gm)=>{"use strict";Gm.exports=Vm()});var Yv=jn(Yr=>{"use strict";var Tx=za(),jr=Wm();function de(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jg=new Set,Ns={};function ha(e,t){oo(e,t),oo(e+"Capture",t)}function oo(e,t){for(Ns[e]=t,e=0;e<t.length;e++)Jg.add(t[e])}var Qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fd=Object.prototype.hasOwnProperty,bx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xm={},jm={};function Ax(e){return Fd.call(jm,e)?!0:Fd.call(Xm,e)?!1:bx.test(e)?jm[e]=!0:(Xm[e]=!0,!1)}function Cx(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Rx(e,t,r,n){if(t===null||typeof t>"u"||Cx(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Rr(e,t,r,n,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var dr={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){dr[e]=new Rr(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];dr[t]=new Rr(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){dr[e]=new Rr(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){dr[e]=new Rr(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){dr[e]=new Rr(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){dr[e]=new Rr(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){dr[e]=new Rr(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){dr[e]=new Rr(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){dr[e]=new Rr(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ph=/[\-:]([a-z])/g;function Nh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ph,Nh);dr[t]=new Rr(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ph,Nh);dr[t]=new Rr(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ph,Nh);dr[t]=new Rr(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){dr[e]=new Rr(e,1,!1,e.toLowerCase(),null,!1,!1)});dr.xlinkHref=new Rr("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){dr[e]=new Rr(e,1,!1,e.toLowerCase(),null,!0,!0)});function Lh(e,t,r,n){var i=dr.hasOwnProperty(t)?dr[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Rx(t,r,i,n)&&(r=null),n||i===null?Ax(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var ri=Tx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Dl=Symbol.for("react.element"),Va=Symbol.for("react.portal"),Ga=Symbol.for("react.fragment"),Ih=Symbol.for("react.strict_mode"),zd=Symbol.for("react.profiler"),Qg=Symbol.for("react.provider"),Kg=Symbol.for("react.context"),Uh=Symbol.for("react.forward_ref"),Bd=Symbol.for("react.suspense"),Hd=Symbol.for("react.suspense_list"),Dh=Symbol.for("react.memo"),yi=Symbol.for("react.lazy"),e0=Symbol.for("react.offscreen"),$m=Symbol.iterator;function cs(e){return e===null||typeof e!="object"?null:(e=$m&&e[$m]||e["@@iterator"],typeof e=="function"?e:null)}var Vt=Object.assign,gd;function _s(e){if(gd===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);gd=t&&t[1]||""}return`
`+gd+e}var vd=!1;function _d(e,t){if(!e||vd)return"";vd=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=n.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{vd=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?_s(e):""}function Px(e){switch(e.tag){case 5:return _s(e.type);case 16:return _s("Lazy");case 13:return _s("Suspense");case 19:return _s("SuspenseList");case 0:case 2:case 15:return e=_d(e.type,!1),e;case 11:return e=_d(e.type.render,!1),e;case 1:return e=_d(e.type,!0),e;default:return""}}function Vd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ga:return"Fragment";case Va:return"Portal";case zd:return"Profiler";case Ih:return"StrictMode";case Bd:return"Suspense";case Hd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kg:return(e.displayName||"Context")+".Consumer";case Qg:return(e._context.displayName||"Context")+".Provider";case Uh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Dh:return t=e.displayName||null,t!==null?t:Vd(e.type)||"Memo";case yi:t=e._payload,e=e._init;try{return Vd(e(t))}catch{}}return null}function Nx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vd(t);case 8:return t===Ih?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ii(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function t0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Lx(e){var t=t0(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){n=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ol(e){e._valueTracker||(e._valueTracker=Lx(e))}function r0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=t0(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function cu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gd(e,t){var r=t.checked;return Vt({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ym(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Ii(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function n0(e,t){t=t.checked,t!=null&&Lh(e,"checked",t,!1)}function Wd(e,t){n0(e,t);var r=Ii(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xd(e,t.type,r):t.hasOwnProperty("defaultValue")&&Xd(e,t.type,Ii(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function qm(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Xd(e,t,r){(t!=="number"||cu(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ys=Array.isArray;function eo(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Ii(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function jd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(de(91));return Vt({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zm(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(de(92));if(ys(r)){if(1<r.length)throw Error(de(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Ii(r)}}function i0(e,t){var r=Ii(t.value),n=Ii(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Jm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function a0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $d(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?a0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var kl,o0=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(kl=kl||document.createElement("div"),kl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=kl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ls(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ms={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ix=["Webkit","ms","Moz","O"];Object.keys(Ms).forEach(function(e){Ix.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ms[t]=Ms[e]})});function s0(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ms.hasOwnProperty(e)&&Ms[e]?(""+t).trim():t+"px"}function l0(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=s0(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var Ux=Vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yd(e,t){if(t){if(Ux[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(de(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(de(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(de(61))}if(t.style!=null&&typeof t.style!="object")throw Error(de(62))}}function qd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zd=null;function Oh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jd=null,to=null,ro=null;function Qm(e){if(e=Zs(e)){if(typeof Jd!="function")throw Error(de(280));var t=e.stateNode;t&&(t=Fu(t),Jd(e.stateNode,e.type,t))}}function u0(e){to?ro?ro.push(e):ro=[e]:to=e}function c0(){if(to){var e=to,t=ro;if(ro=to=null,Qm(e),t)for(e=0;e<t.length;e++)Qm(t[e])}}function d0(e,t){return e(t)}function h0(){}var yd=!1;function p0(e,t,r){if(yd)return e(t,r);yd=!0;try{return d0(e,t,r)}finally{yd=!1,(to!==null||ro!==null)&&(h0(),c0())}}function Is(e,t){var r=e.stateNode;if(r===null)return null;var n=Fu(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(de(231,t,typeof r));return r}var Qd=!1;if(Qn)try{Ba={},Object.defineProperty(Ba,"passive",{get:function(){Qd=!0}}),window.addEventListener("test",Ba,Ba),window.removeEventListener("test",Ba,Ba)}catch{Qd=!1}var Ba;function Dx(e,t,r,n,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(c){this.onError(c)}}var ws=!1,du=null,hu=!1,Kd=null,Ox={onError:function(e){ws=!0,du=e}};function kx(e,t,r,n,i,a,o,s,l){ws=!1,du=null,Dx.apply(Ox,arguments)}function Fx(e,t,r,n,i,a,o,s,l){if(kx.apply(this,arguments),ws){if(ws){var u=du;ws=!1,du=null}else throw Error(de(198));hu||(hu=!0,Kd=u)}}function pa(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function f0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Km(e){if(pa(e)!==e)throw Error(de(188))}function zx(e){var t=e.alternate;if(!t){if(t=pa(e),t===null)throw Error(de(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return Km(i),e;if(a===n)return Km(i),t;a=a.sibling}throw Error(de(188))}if(r.return!==n.return)r=i,n=a;else{for(var o=!1,s=i.child;s;){if(s===r){o=!0,r=i,n=a;break}if(s===n){o=!0,n=i,r=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===r){o=!0,r=a,n=i;break}if(s===n){o=!0,n=a,r=i;break}s=s.sibling}if(!o)throw Error(de(189))}}if(r.alternate!==n)throw Error(de(190))}if(r.tag!==3)throw Error(de(188));return r.stateNode.current===r?e:t}function m0(e){return e=zx(e),e!==null?g0(e):null}function g0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=g0(e);if(t!==null)return t;e=e.sibling}return null}var v0=jr.unstable_scheduleCallback,eg=jr.unstable_cancelCallback,Bx=jr.unstable_shouldYield,Hx=jr.unstable_requestPaint,jt=jr.unstable_now,Vx=jr.unstable_getCurrentPriorityLevel,kh=jr.unstable_ImmediatePriority,_0=jr.unstable_UserBlockingPriority,pu=jr.unstable_NormalPriority,Gx=jr.unstable_LowPriority,y0=jr.unstable_IdlePriority,Uu=null,On=null;function Wx(e){if(On&&typeof On.onCommitFiberRoot=="function")try{On.onCommitFiberRoot(Uu,e,void 0,(e.current.flags&128)===128)}catch{}}var Mn=Math.clz32?Math.clz32:$x,Xx=Math.log,jx=Math.LN2;function $x(e){return e>>>=0,e===0?32:31-(Xx(e)/jx|0)|0}var Fl=64,zl=4194304;function xs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fu(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,a=e.pingedLanes,o=r&268435455;if(o!==0){var s=o&~i;s!==0?n=xs(s):(a&=o,a!==0&&(n=xs(a)))}else o=r&~i,o!==0?n=xs(o):a!==0&&(n=xs(a));if(n===0)return 0;if(t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if((n&4)!==0&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Mn(t),i=1<<r,n|=e[r],t&=~i;return n}function Yx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qx(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Mn(a),s=1<<o,l=i[o];l===-1?((s&r)===0||(s&n)!==0)&&(i[o]=Yx(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function eh(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function x0(){var e=Fl;return Fl<<=1,(Fl&4194240)===0&&(Fl=64),e}function xd(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ys(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Mn(t),e[t]=r}function Zx(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Mn(r),a=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~a}}function Fh(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Mn(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var xt=0;function S0(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var M0,zh,w0,E0,T0,th=!1,Bl=[],Ti=null,bi=null,Ai=null,Us=new Map,Ds=new Map,Si=[],Jx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tg(e,t){switch(e){case"focusin":case"focusout":Ti=null;break;case"dragenter":case"dragleave":bi=null;break;case"mouseover":case"mouseout":Ai=null;break;case"pointerover":case"pointerout":Us.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ds.delete(t.pointerId)}}function ds(e,t,r,n,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Zs(t),t!==null&&zh(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Qx(e,t,r,n,i){switch(t){case"focusin":return Ti=ds(Ti,e,t,r,n,i),!0;case"dragenter":return bi=ds(bi,e,t,r,n,i),!0;case"mouseover":return Ai=ds(Ai,e,t,r,n,i),!0;case"pointerover":var a=i.pointerId;return Us.set(a,ds(Us.get(a)||null,e,t,r,n,i)),!0;case"gotpointercapture":return a=i.pointerId,Ds.set(a,ds(Ds.get(a)||null,e,t,r,n,i)),!0}return!1}function b0(e){var t=ra(e.target);if(t!==null){var r=pa(t);if(r!==null){if(t=r.tag,t===13){if(t=f0(r),t!==null){e.blockedOn=t,T0(e.priority,function(){w0(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function eu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=rh(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Zd=n,r.target.dispatchEvent(n),Zd=null}else return t=Zs(r),t!==null&&zh(t),e.blockedOn=r,!1;t.shift()}return!0}function rg(e,t,r){eu(e)&&r.delete(t)}function Kx(){th=!1,Ti!==null&&eu(Ti)&&(Ti=null),bi!==null&&eu(bi)&&(bi=null),Ai!==null&&eu(Ai)&&(Ai=null),Us.forEach(rg),Ds.forEach(rg)}function hs(e,t){e.blockedOn===t&&(e.blockedOn=null,th||(th=!0,jr.unstable_scheduleCallback(jr.unstable_NormalPriority,Kx)))}function Os(e){function t(i){return hs(i,e)}if(0<Bl.length){hs(Bl[0],e);for(var r=1;r<Bl.length;r++){var n=Bl[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Ti!==null&&hs(Ti,e),bi!==null&&hs(bi,e),Ai!==null&&hs(Ai,e),Us.forEach(t),Ds.forEach(t),r=0;r<Si.length;r++)n=Si[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Si.length&&(r=Si[0],r.blockedOn===null);)b0(r),r.blockedOn===null&&Si.shift()}var no=ri.ReactCurrentBatchConfig,mu=!0;function eS(e,t,r,n){var i=xt,a=no.transition;no.transition=null;try{xt=1,Bh(e,t,r,n)}finally{xt=i,no.transition=a}}function tS(e,t,r,n){var i=xt,a=no.transition;no.transition=null;try{xt=4,Bh(e,t,r,n)}finally{xt=i,no.transition=a}}function Bh(e,t,r,n){if(mu){var i=rh(e,t,r,n);if(i===null)Ad(e,t,n,gu,r),tg(e,n);else if(Qx(i,e,t,r,n))n.stopPropagation();else if(tg(e,n),t&4&&-1<Jx.indexOf(e)){for(;i!==null;){var a=Zs(i);if(a!==null&&M0(a),a=rh(e,t,r,n),a===null&&Ad(e,t,n,gu,r),a===i)break;i=a}i!==null&&n.stopPropagation()}else Ad(e,t,n,null,r)}}var gu=null;function rh(e,t,r,n){if(gu=null,e=Oh(n),e=ra(e),e!==null)if(t=pa(e),t===null)e=null;else if(r=t.tag,r===13){if(e=f0(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return gu=e,null}function A0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vx()){case kh:return 1;case _0:return 4;case pu:case Gx:return 16;case y0:return 536870912;default:return 16}default:return 16}}var wi=null,Hh=null,tu=null;function C0(){if(tu)return tu;var e,t=Hh,r=t.length,n,i="value"in wi?wi.value:wi.textContent,a=i.length;for(e=0;e<r&&t[e]===i[e];e++);var o=r-e;for(n=1;n<=o&&t[r-n]===i[a-n];n++);return tu=i.slice(e,1<n?1-n:void 0)}function ru(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hl(){return!0}function ng(){return!1}function $r(e){function t(r,n,i,a,o){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Hl:ng,this.isPropagationStopped=ng,this}return Vt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Hl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Hl)},persist:function(){},isPersistent:Hl}),t}var fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vh=$r(fo),qs=Vt({},fo,{view:0,detail:0}),rS=$r(qs),Sd,Md,ps,Du=Vt({},qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ps&&(ps&&e.type==="mousemove"?(Sd=e.screenX-ps.screenX,Md=e.screenY-ps.screenY):Md=Sd=0,ps=e),Sd)},movementY:function(e){return"movementY"in e?e.movementY:Md}}),ig=$r(Du),nS=Vt({},Du,{dataTransfer:0}),iS=$r(nS),aS=Vt({},qs,{relatedTarget:0}),wd=$r(aS),oS=Vt({},fo,{animationName:0,elapsedTime:0,pseudoElement:0}),sS=$r(oS),lS=Vt({},fo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uS=$r(lS),cS=Vt({},fo,{data:0}),ag=$r(cS),dS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pS[e])?!!t[e]:!1}function Gh(){return fS}var mS=Vt({},qs,{key:function(e){if(e.key){var t=dS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ru(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gh,charCode:function(e){return e.type==="keypress"?ru(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ru(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gS=$r(mS),vS=Vt({},Du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),og=$r(vS),_S=Vt({},qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gh}),yS=$r(_S),xS=Vt({},fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),SS=$r(xS),MS=Vt({},Du,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wS=$r(MS),ES=[9,13,27,32],Wh=Qn&&"CompositionEvent"in window,Es=null;Qn&&"documentMode"in document&&(Es=document.documentMode);var TS=Qn&&"TextEvent"in window&&!Es,R0=Qn&&(!Wh||Es&&8<Es&&11>=Es),sg=" ",lg=!1;function P0(e,t){switch(e){case"keyup":return ES.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function N0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wa=!1;function bS(e,t){switch(e){case"compositionend":return N0(t);case"keypress":return t.which!==32?null:(lg=!0,sg);case"textInput":return e=t.data,e===sg&&lg?null:e;default:return null}}function AS(e,t){if(Wa)return e==="compositionend"||!Wh&&P0(e,t)?(e=C0(),tu=Hh=wi=null,Wa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return R0&&t.locale!=="ko"?null:t.data;default:return null}}var CS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ug(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!CS[e.type]:t==="textarea"}function L0(e,t,r,n){u0(n),t=vu(t,"onChange"),0<t.length&&(r=new Vh("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Ts=null,ks=null;function RS(e){G0(e,0)}function Ou(e){var t=$a(e);if(r0(t))return e}function PS(e,t){if(e==="change")return t}var I0=!1;Qn&&(Qn?(Gl="oninput"in document,Gl||(Ed=document.createElement("div"),Ed.setAttribute("oninput","return;"),Gl=typeof Ed.oninput=="function"),Vl=Gl):Vl=!1,I0=Vl&&(!document.documentMode||9<document.documentMode));var Vl,Gl,Ed;function cg(){Ts&&(Ts.detachEvent("onpropertychange",U0),ks=Ts=null)}function U0(e){if(e.propertyName==="value"&&Ou(ks)){var t=[];L0(t,ks,e,Oh(e)),p0(RS,t)}}function NS(e,t,r){e==="focusin"?(cg(),Ts=t,ks=r,Ts.attachEvent("onpropertychange",U0)):e==="focusout"&&cg()}function LS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ou(ks)}function IS(e,t){if(e==="click")return Ou(t)}function US(e,t){if(e==="input"||e==="change")return Ou(t)}function DS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var En=typeof Object.is=="function"?Object.is:DS;function Fs(e,t){if(En(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Fd.call(t,i)||!En(e[i],t[i]))return!1}return!0}function dg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hg(e,t){var r=dg(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=dg(r)}}function D0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?D0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function O0(){for(var e=window,t=cu();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=cu(e.document)}return t}function Xh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function OS(e){var t=O0(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&D0(r.ownerDocument.documentElement,r)){if(n!==null&&Xh(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(n.start,i);n=n.end===void 0?a:Math.min(n.end,i),!e.extend&&a>n&&(i=n,n=a,a=i),i=hg(r,a);var o=hg(r,n);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kS=Qn&&"documentMode"in document&&11>=document.documentMode,Xa=null,nh=null,bs=null,ih=!1;function pg(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ih||Xa==null||Xa!==cu(n)||(n=Xa,"selectionStart"in n&&Xh(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),bs&&Fs(bs,n)||(bs=n,n=vu(nh,"onSelect"),0<n.length&&(t=new Vh("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Xa)))}function Wl(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var ja={animationend:Wl("Animation","AnimationEnd"),animationiteration:Wl("Animation","AnimationIteration"),animationstart:Wl("Animation","AnimationStart"),transitionend:Wl("Transition","TransitionEnd")},Td={},k0={};Qn&&(k0=document.createElement("div").style,"AnimationEvent"in window||(delete ja.animationend.animation,delete ja.animationiteration.animation,delete ja.animationstart.animation),"TransitionEvent"in window||delete ja.transitionend.transition);function ku(e){if(Td[e])return Td[e];if(!ja[e])return e;var t=ja[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in k0)return Td[e]=t[r];return e}var F0=ku("animationend"),z0=ku("animationiteration"),B0=ku("animationstart"),H0=ku("transitionend"),V0=new Map,fg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Di(e,t){V0.set(e,t),ha(t,[e])}for(Xl=0;Xl<fg.length;Xl++)jl=fg[Xl],mg=jl.toLowerCase(),gg=jl[0].toUpperCase()+jl.slice(1),Di(mg,"on"+gg);var jl,mg,gg,Xl;Di(F0,"onAnimationEnd");Di(z0,"onAnimationIteration");Di(B0,"onAnimationStart");Di("dblclick","onDoubleClick");Di("focusin","onFocus");Di("focusout","onBlur");Di(H0,"onTransitionEnd");oo("onMouseEnter",["mouseout","mouseover"]);oo("onMouseLeave",["mouseout","mouseover"]);oo("onPointerEnter",["pointerout","pointerover"]);oo("onPointerLeave",["pointerout","pointerover"]);ha("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ha("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ha("onBeforeInput",["compositionend","keypress","textInput","paste"]);ha("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ha("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ha("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ss="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ss));function vg(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Fx(n,t,void 0,e),e.currentTarget=null}function G0(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var o=n.length-1;0<=o;o--){var s=n[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;vg(i,s,u),a=l}else for(o=0;o<n.length;o++){if(s=n[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;vg(i,s,u),a=l}}}if(hu)throw e=Kd,hu=!1,Kd=null,e}function Nt(e,t){var r=t[uh];r===void 0&&(r=t[uh]=new Set);var n=e+"__bubble";r.has(n)||(W0(t,e,2,!1),r.add(n))}function bd(e,t,r){var n=0;t&&(n|=4),W0(r,e,n,t)}var $l="_reactListening"+Math.random().toString(36).slice(2);function zs(e){if(!e[$l]){e[$l]=!0,Jg.forEach(function(r){r!=="selectionchange"&&(FS.has(r)||bd(r,!1,e),bd(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$l]||(t[$l]=!0,bd("selectionchange",!1,t))}}function W0(e,t,r,n){switch(A0(t)){case 1:var i=eS;break;case 4:i=tS;break;default:i=Bh}r=i.bind(null,t,r,e),i=void 0,!Qd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Ad(e,t,r,n,i){var a=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var s=n.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=n.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=ra(s),o===null)return;if(l=o.tag,l===5||l===6){n=a=o;continue e}s=s.parentNode}}n=n.return}p0(function(){var u=a,c=Oh(r),p=[];e:{var h=V0.get(e);if(h!==void 0){var f=Vh,y=e;switch(e){case"keypress":if(ru(r)===0)break e;case"keydown":case"keyup":f=gS;break;case"focusin":y="focus",f=wd;break;case"focusout":y="blur",f=wd;break;case"beforeblur":case"afterblur":f=wd;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=ig;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=iS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=yS;break;case F0:case z0:case B0:f=sS;break;case H0:f=SS;break;case"scroll":f=rS;break;case"wheel":f=wS;break;case"copy":case"cut":case"paste":f=uS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=og}var _=(t&4)!==0,v=!_&&e==="scroll",d=_?h!==null?h+"Capture":null:h;_=[];for(var m=u,g;m!==null;){g=m;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,d!==null&&(x=Is(m,d),x!=null&&_.push(Bs(m,x,g)))),v)break;m=m.return}0<_.length&&(h=new f(h,y,null,r,c),p.push({event:h,listeners:_}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",h&&r!==Zd&&(y=r.relatedTarget||r.fromElement)&&(ra(y)||y[Kn]))break e;if((f||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,f?(y=r.relatedTarget||r.toElement,f=u,y=y?ra(y):null,y!==null&&(v=pa(y),y!==v||y.tag!==5&&y.tag!==6)&&(y=null)):(f=null,y=u),f!==y)){if(_=ig,x="onMouseLeave",d="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(_=og,x="onPointerLeave",d="onPointerEnter",m="pointer"),v=f==null?h:$a(f),g=y==null?h:$a(y),h=new _(x,m+"leave",f,r,c),h.target=v,h.relatedTarget=g,x=null,ra(c)===u&&(_=new _(d,m+"enter",y,r,c),_.target=g,_.relatedTarget=v,x=_),v=x,f&&y)t:{for(_=f,d=y,m=0,g=_;g;g=Ha(g))m++;for(g=0,x=d;x;x=Ha(x))g++;for(;0<m-g;)_=Ha(_),m--;for(;0<g-m;)d=Ha(d),g--;for(;m--;){if(_===d||d!==null&&_===d.alternate)break t;_=Ha(_),d=Ha(d)}_=null}else _=null;f!==null&&_g(p,h,f,_,!1),y!==null&&v!==null&&_g(p,v,y,_,!0)}}e:{if(h=u?$a(u):window,f=h.nodeName&&h.nodeName.toLowerCase(),f==="select"||f==="input"&&h.type==="file")var N=PS;else if(ug(h))if(I0)N=US;else{N=LS;var T=NS}else(f=h.nodeName)&&f.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(N=IS);if(N&&(N=N(e,u))){L0(p,N,r,c);break e}T&&T(e,h,u),e==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Xd(h,"number",h.value)}switch(T=u?$a(u):window,e){case"focusin":(ug(T)||T.contentEditable==="true")&&(Xa=T,nh=u,bs=null);break;case"focusout":bs=nh=Xa=null;break;case"mousedown":ih=!0;break;case"contextmenu":case"mouseup":case"dragend":ih=!1,pg(p,r,c);break;case"selectionchange":if(kS)break;case"keydown":case"keyup":pg(p,r,c)}var b;if(Wh)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Wa?P0(e,r)&&(P="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(P="onCompositionStart");P&&(R0&&r.locale!=="ko"&&(Wa||P!=="onCompositionStart"?P==="onCompositionEnd"&&Wa&&(b=C0()):(wi=c,Hh="value"in wi?wi.value:wi.textContent,Wa=!0)),T=vu(u,P),0<T.length&&(P=new ag(P,e,null,r,c),p.push({event:P,listeners:T}),b?P.data=b:(b=N0(r),b!==null&&(P.data=b)))),(b=TS?bS(e,r):AS(e,r))&&(u=vu(u,"onBeforeInput"),0<u.length&&(c=new ag("onBeforeInput","beforeinput",null,r,c),p.push({event:c,listeners:u}),c.data=b))}G0(p,t)})}function Bs(e,t,r){return{instance:e,listener:t,currentTarget:r}}function vu(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Is(e,r),a!=null&&n.unshift(Bs(e,a,i)),a=Is(e,t),a!=null&&n.push(Bs(e,a,i))),e=e.return}return n}function Ha(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _g(e,t,r,n,i){for(var a=t._reactName,o=[];r!==null&&r!==n;){var s=r,l=s.alternate,u=s.stateNode;if(l!==null&&l===n)break;s.tag===5&&u!==null&&(s=u,i?(l=Is(r,a),l!=null&&o.unshift(Bs(r,l,s))):i||(l=Is(r,a),l!=null&&o.push(Bs(r,l,s)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var zS=/\r\n?/g,BS=/\u0000|\uFFFD/g;function yg(e){return(typeof e=="string"?e:""+e).replace(zS,`
`).replace(BS,"")}function Yl(e,t,r){if(t=yg(t),yg(e)!==t&&r)throw Error(de(425))}function _u(){}var ah=null,oh=null;function sh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var lh=typeof setTimeout=="function"?setTimeout:void 0,HS=typeof clearTimeout=="function"?clearTimeout:void 0,xg=typeof Promise=="function"?Promise:void 0,VS=typeof queueMicrotask=="function"?queueMicrotask:typeof xg<"u"?function(e){return xg.resolve(null).then(e).catch(GS)}:lh;function GS(e){setTimeout(function(){throw e})}function Cd(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),Os(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Os(t)}function Ci(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Sg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var mo=Math.random().toString(36).slice(2),Dn="__reactFiber$"+mo,Hs="__reactProps$"+mo,Kn="__reactContainer$"+mo,uh="__reactEvents$"+mo,WS="__reactListeners$"+mo,XS="__reactHandles$"+mo;function ra(e){var t=e[Dn];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Kn]||r[Dn]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Sg(e);e!==null;){if(r=e[Dn])return r;e=Sg(e)}return t}e=r,r=e.parentNode}return null}function Zs(e){return e=e[Dn]||e[Kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $a(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(de(33))}function Fu(e){return e[Hs]||null}var ch=[],Ya=-1;function Oi(e){return{current:e}}function Lt(e){0>Ya||(e.current=ch[Ya],ch[Ya]=null,Ya--)}function bt(e,t){Ya++,ch[Ya]=e.current,e.current=t}var Ui={},xr=Oi(Ui),Fr=Oi(!1),sa=Ui;function so(e,t){var r=e.type.contextTypes;if(!r)return Ui;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=t[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function zr(e){return e=e.childContextTypes,e!=null}function yu(){Lt(Fr),Lt(xr)}function Mg(e,t,r){if(xr.current!==Ui)throw Error(de(168));bt(xr,t),bt(Fr,r)}function X0(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(de(108,Nx(e)||"Unknown",i));return Vt({},r,n)}function xu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ui,sa=xr.current,bt(xr,e),bt(Fr,Fr.current),!0}function wg(e,t,r){var n=e.stateNode;if(!n)throw Error(de(169));r?(e=X0(e,t,sa),n.__reactInternalMemoizedMergedChildContext=e,Lt(Fr),Lt(xr),bt(xr,e)):Lt(Fr),bt(Fr,r)}var Yn=null,zu=!1,Rd=!1;function j0(e){Yn===null?Yn=[e]:Yn.push(e)}function jS(e){zu=!0,j0(e)}function ki(){if(!Rd&&Yn!==null){Rd=!0;var e=0,t=xt;try{var r=Yn;for(xt=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Yn=null,zu=!1}catch(i){throw Yn!==null&&(Yn=Yn.slice(e+1)),v0(kh,ki),i}finally{xt=t,Rd=!1}}return null}var qa=[],Za=0,Su=null,Mu=0,tn=[],rn=0,la=null,qn=1,Zn="";function ea(e,t){qa[Za++]=Mu,qa[Za++]=Su,Su=e,Mu=t}function $0(e,t,r){tn[rn++]=qn,tn[rn++]=Zn,tn[rn++]=la,la=e;var n=qn;e=Zn;var i=32-Mn(n)-1;n&=~(1<<i),r+=1;var a=32-Mn(t)+i;if(30<a){var o=i-i%5;a=(n&(1<<o)-1).toString(32),n>>=o,i-=o,qn=1<<32-Mn(t)+i|r<<i|n,Zn=a+e}else qn=1<<a|r<<i|n,Zn=e}function jh(e){e.return!==null&&(ea(e,1),$0(e,1,0))}function $h(e){for(;e===Su;)Su=qa[--Za],qa[Za]=null,Mu=qa[--Za],qa[Za]=null;for(;e===la;)la=tn[--rn],tn[rn]=null,Zn=tn[--rn],tn[rn]=null,qn=tn[--rn],tn[rn]=null}var Xr=null,Wr=null,Ft=!1,Sn=null;function Y0(e,t){var r=nn(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Eg(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xr=e,Wr=Ci(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xr=e,Wr=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=la!==null?{id:qn,overflow:Zn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=nn(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Xr=e,Wr=null,!0):!1;default:return!1}}function dh(e){return(e.mode&1)!==0&&(e.flags&128)===0}function hh(e){if(Ft){var t=Wr;if(t){var r=t;if(!Eg(e,t)){if(dh(e))throw Error(de(418));t=Ci(r.nextSibling);var n=Xr;t&&Eg(e,t)?Y0(n,r):(e.flags=e.flags&-4097|2,Ft=!1,Xr=e)}}else{if(dh(e))throw Error(de(418));e.flags=e.flags&-4097|2,Ft=!1,Xr=e}}}function Tg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xr=e}function ql(e){if(e!==Xr)return!1;if(!Ft)return Tg(e),Ft=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!sh(e.type,e.memoizedProps)),t&&(t=Wr)){if(dh(e))throw q0(),Error(de(418));for(;t;)Y0(e,t),t=Ci(t.nextSibling)}if(Tg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(de(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Wr=Ci(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Wr=null}}else Wr=Xr?Ci(e.stateNode.nextSibling):null;return!0}function q0(){for(var e=Wr;e;)e=Ci(e.nextSibling)}function lo(){Wr=Xr=null,Ft=!1}function Yh(e){Sn===null?Sn=[e]:Sn.push(e)}var $S=ri.ReactCurrentBatchConfig;function fs(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(de(309));var n=r.stateNode}if(!n)throw Error(de(147,e));var i=n,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(de(284));if(!r._owner)throw Error(de(290,e))}return e}function Zl(e,t){throw e=Object.prototype.toString.call(t),Error(de(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bg(e){var t=e._init;return t(e._payload)}function Z0(e){function t(d,m){if(e){var g=d.deletions;g===null?(d.deletions=[m],d.flags|=16):g.push(m)}}function r(d,m){if(!e)return null;for(;m!==null;)t(d,m),m=m.sibling;return null}function n(d,m){for(d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function i(d,m){return d=Li(d,m),d.index=0,d.sibling=null,d}function a(d,m,g){return d.index=g,e?(g=d.alternate,g!==null?(g=g.index,g<m?(d.flags|=2,m):g):(d.flags|=2,m)):(d.flags|=1048576,m)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,m,g,x){return m===null||m.tag!==6?(m=Od(g,d.mode,x),m.return=d,m):(m=i(m,g),m.return=d,m)}function l(d,m,g,x){var N=g.type;return N===Ga?c(d,m,g.props.children,x,g.key):m!==null&&(m.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===yi&&bg(N)===m.type)?(x=i(m,g.props),x.ref=fs(d,m,g),x.return=d,x):(x=uu(g.type,g.key,g.props,null,d.mode,x),x.ref=fs(d,m,g),x.return=d,x)}function u(d,m,g,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=kd(g,d.mode,x),m.return=d,m):(m=i(m,g.children||[]),m.return=d,m)}function c(d,m,g,x,N){return m===null||m.tag!==7?(m=oa(g,d.mode,x,N),m.return=d,m):(m=i(m,g),m.return=d,m)}function p(d,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Od(""+m,d.mode,g),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Dl:return g=uu(m.type,m.key,m.props,null,d.mode,g),g.ref=fs(d,null,m),g.return=d,g;case Va:return m=kd(m,d.mode,g),m.return=d,m;case yi:var x=m._init;return p(d,x(m._payload),g)}if(ys(m)||cs(m))return m=oa(m,d.mode,g,null),m.return=d,m;Zl(d,m)}return null}function h(d,m,g,x){var N=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return N!==null?null:s(d,m,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Dl:return g.key===N?l(d,m,g,x):null;case Va:return g.key===N?u(d,m,g,x):null;case yi:return N=g._init,h(d,m,N(g._payload),x)}if(ys(g)||cs(g))return N!==null?null:c(d,m,g,x,null);Zl(d,g)}return null}function f(d,m,g,x,N){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(g)||null,s(m,d,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Dl:return d=d.get(x.key===null?g:x.key)||null,l(m,d,x,N);case Va:return d=d.get(x.key===null?g:x.key)||null,u(m,d,x,N);case yi:var T=x._init;return f(d,m,g,T(x._payload),N)}if(ys(x)||cs(x))return d=d.get(g)||null,c(m,d,x,N,null);Zl(m,x)}return null}function y(d,m,g,x){for(var N=null,T=null,b=m,P=m=0,w=null;b!==null&&P<g.length;P++){b.index>P?(w=b,b=null):w=b.sibling;var S=h(d,b,g[P],x);if(S===null){b===null&&(b=w);break}e&&b&&S.alternate===null&&t(d,b),m=a(S,m,P),T===null?N=S:T.sibling=S,T=S,b=w}if(P===g.length)return r(d,b),Ft&&ea(d,P),N;if(b===null){for(;P<g.length;P++)b=p(d,g[P],x),b!==null&&(m=a(b,m,P),T===null?N=b:T.sibling=b,T=b);return Ft&&ea(d,P),N}for(b=n(d,b);P<g.length;P++)w=f(b,d,P,g[P],x),w!==null&&(e&&w.alternate!==null&&b.delete(w.key===null?P:w.key),m=a(w,m,P),T===null?N=w:T.sibling=w,T=w);return e&&b.forEach(function(C){return t(d,C)}),Ft&&ea(d,P),N}function _(d,m,g,x){var N=cs(g);if(typeof N!="function")throw Error(de(150));if(g=N.call(g),g==null)throw Error(de(151));for(var T=N=null,b=m,P=m=0,w=null,S=g.next();b!==null&&!S.done;P++,S=g.next()){b.index>P?(w=b,b=null):w=b.sibling;var C=h(d,b,S.value,x);if(C===null){b===null&&(b=w);break}e&&b&&C.alternate===null&&t(d,b),m=a(C,m,P),T===null?N=C:T.sibling=C,T=C,b=w}if(S.done)return r(d,b),Ft&&ea(d,P),N;if(b===null){for(;!S.done;P++,S=g.next())S=p(d,S.value,x),S!==null&&(m=a(S,m,P),T===null?N=S:T.sibling=S,T=S);return Ft&&ea(d,P),N}for(b=n(d,b);!S.done;P++,S=g.next())S=f(b,d,P,S.value,x),S!==null&&(e&&S.alternate!==null&&b.delete(S.key===null?P:S.key),m=a(S,m,P),T===null?N=S:T.sibling=S,T=S);return e&&b.forEach(function(k){return t(d,k)}),Ft&&ea(d,P),N}function v(d,m,g,x){if(typeof g=="object"&&g!==null&&g.type===Ga&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Dl:e:{for(var N=g.key,T=m;T!==null;){if(T.key===N){if(N=g.type,N===Ga){if(T.tag===7){r(d,T.sibling),m=i(T,g.props.children),m.return=d,d=m;break e}}else if(T.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===yi&&bg(N)===T.type){r(d,T.sibling),m=i(T,g.props),m.ref=fs(d,T,g),m.return=d,d=m;break e}r(d,T);break}else t(d,T);T=T.sibling}g.type===Ga?(m=oa(g.props.children,d.mode,x,g.key),m.return=d,d=m):(x=uu(g.type,g.key,g.props,null,d.mode,x),x.ref=fs(d,m,g),x.return=d,d=x)}return o(d);case Va:e:{for(T=g.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){r(d,m.sibling),m=i(m,g.children||[]),m.return=d,d=m;break e}else{r(d,m);break}else t(d,m);m=m.sibling}m=kd(g,d.mode,x),m.return=d,d=m}return o(d);case yi:return T=g._init,v(d,m,T(g._payload),x)}if(ys(g))return y(d,m,g,x);if(cs(g))return _(d,m,g,x);Zl(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(r(d,m.sibling),m=i(m,g),m.return=d,d=m):(r(d,m),m=Od(g,d.mode,x),m.return=d,d=m),o(d)):r(d,m)}return v}var uo=Z0(!0),J0=Z0(!1),wu=Oi(null),Eu=null,Ja=null,qh=null;function Zh(){qh=Ja=Eu=null}function Jh(e){var t=wu.current;Lt(wu),e._currentValue=t}function ph(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function io(e,t){Eu=e,qh=Ja=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(kr=!0),e.firstContext=null)}function on(e){var t=e._currentValue;if(qh!==e)if(e={context:e,memoizedValue:t,next:null},Ja===null){if(Eu===null)throw Error(de(308));Ja=e,Eu.dependencies={lanes:0,firstContext:e}}else Ja=Ja.next=e;return t}var na=null;function Qh(e){na===null?na=[e]:na.push(e)}function Q0(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Qh(t)):(r.next=i.next,i.next=r),t.interleaved=r,ei(e,n)}function ei(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var xi=!1;function Kh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function K0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ri(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(gt&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,ei(e,r)}return i=n.interleaved,i===null?(t.next=t,Qh(n)):(t.next=i.next,i.next=t),n.interleaved=t,ei(e,r)}function nu(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Fh(e,r)}}function Ag(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=o:a=a.next=o,r=r.next}while(r!==null);a===null?i=a=t:a=a.next=t}else i=a=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Tu(e,t,r,n){var i=e.updateQueue;xi=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==o&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var p=i.baseState;o=0,c=u=l=null,s=a;do{var h=s.lane,f=s.eventTime;if((n&h)===h){c!==null&&(c=c.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,_=s;switch(h=t,f=r,_.tag){case 1:if(y=_.payload,typeof y=="function"){p=y.call(f,p,h);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,h=typeof y=="function"?y.call(f,p,h):y,h==null)break e;p=Vt({},p,h);break e;case 2:xi=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else f={eventTime:f,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=f,l=p):c=c.next=f,o|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);ca|=o,e.lanes=o,e.memoizedState=p}}function Cg(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(de(191,i));i.call(n)}}}var Js={},kn=Oi(Js),Vs=Oi(Js),Gs=Oi(Js);function ia(e){if(e===Js)throw Error(de(174));return e}function ep(e,t){switch(bt(Gs,t),bt(Vs,e),bt(kn,Js),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$d(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$d(t,e)}Lt(kn),bt(kn,t)}function co(){Lt(kn),Lt(Vs),Lt(Gs)}function ev(e){ia(Gs.current);var t=ia(kn.current),r=$d(t,e.type);t!==r&&(bt(Vs,e),bt(kn,r))}function tp(e){Vs.current===e&&(Lt(kn),Lt(Vs))}var Bt=Oi(0);function bu(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pd=[];function rp(){for(var e=0;e<Pd.length;e++)Pd[e]._workInProgressVersionPrimary=null;Pd.length=0}var iu=ri.ReactCurrentDispatcher,Nd=ri.ReactCurrentBatchConfig,ua=0,Ht=null,Qt=null,ar=null,Au=!1,As=!1,Ws=0,YS=0;function vr(){throw Error(de(321))}function np(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!En(e[r],t[r]))return!1;return!0}function ip(e,t,r,n,i,a){if(ua=a,Ht=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,iu.current=e===null||e.memoizedState===null?QS:KS,e=r(n,i),As){a=0;do{if(As=!1,Ws=0,25<=a)throw Error(de(301));a+=1,ar=Qt=null,t.updateQueue=null,iu.current=eM,e=r(n,i)}while(As)}if(iu.current=Cu,t=Qt!==null&&Qt.next!==null,ua=0,ar=Qt=Ht=null,Au=!1,t)throw Error(de(300));return e}function ap(){var e=Ws!==0;return Ws=0,e}function Un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ar===null?Ht.memoizedState=ar=e:ar=ar.next=e,ar}function sn(){if(Qt===null){var e=Ht.alternate;e=e!==null?e.memoizedState:null}else e=Qt.next;var t=ar===null?Ht.memoizedState:ar.next;if(t!==null)ar=t,Qt=e;else{if(e===null)throw Error(de(310));Qt=e,e={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},ar===null?Ht.memoizedState=ar=e:ar=ar.next=e}return ar}function Xs(e,t){return typeof t=="function"?t(e):t}function Ld(e){var t=sn(),r=t.queue;if(r===null)throw Error(de(311));r.lastRenderedReducer=e;var n=Qt,i=n.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}n.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,n=n.baseState;var s=o=null,l=null,u=a;do{var c=u.lane;if((ua&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var p={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=p,o=n):l=l.next=p,Ht.lanes|=c,ca|=c}u=u.next}while(u!==null&&u!==a);l===null?o=n:l.next=s,En(n,t.memoizedState)||(kr=!0),t.memoizedState=n,t.baseState=o,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do a=i.lane,Ht.lanes|=a,ca|=a,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Id(e){var t=sn(),r=t.queue;if(r===null)throw Error(de(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,a=t.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);En(a,t.memoizedState)||(kr=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function tv(){}function rv(e,t){var r=Ht,n=sn(),i=t(),a=!En(n.memoizedState,i);if(a&&(n.memoizedState=i,kr=!0),n=n.queue,op(av.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||ar!==null&&ar.memoizedState.tag&1){if(r.flags|=2048,js(9,iv.bind(null,r,n,i,t),void 0,null),or===null)throw Error(de(349));(ua&30)!==0||nv(r,t,i)}return i}function nv(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ht.updateQueue,t===null?(t={lastEffect:null,stores:null},Ht.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function iv(e,t,r,n){t.value=r,t.getSnapshot=n,ov(t)&&sv(e)}function av(e,t,r){return r(function(){ov(t)&&sv(e)})}function ov(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!En(e,r)}catch{return!0}}function sv(e){var t=ei(e,1);t!==null&&wn(t,e,1,-1)}function Rg(e){var t=Un();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xs,lastRenderedState:e},t.queue=e,e=e.dispatch=JS.bind(null,Ht,e),[t.memoizedState,e]}function js(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Ht.updateQueue,t===null?(t={lastEffect:null,stores:null},Ht.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function lv(){return sn().memoizedState}function au(e,t,r,n){var i=Un();Ht.flags|=e,i.memoizedState=js(1|t,r,void 0,n===void 0?null:n)}function Bu(e,t,r,n){var i=sn();n=n===void 0?null:n;var a=void 0;if(Qt!==null){var o=Qt.memoizedState;if(a=o.destroy,n!==null&&np(n,o.deps)){i.memoizedState=js(t,r,a,n);return}}Ht.flags|=e,i.memoizedState=js(1|t,r,a,n)}function Pg(e,t){return au(8390656,8,e,t)}function op(e,t){return Bu(2048,8,e,t)}function uv(e,t){return Bu(4,2,e,t)}function cv(e,t){return Bu(4,4,e,t)}function dv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hv(e,t,r){return r=r!=null?r.concat([e]):null,Bu(4,4,dv.bind(null,t,e),r)}function sp(){}function pv(e,t){var r=sn();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&np(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function fv(e,t){var r=sn();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&np(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function mv(e,t,r){return(ua&21)===0?(e.baseState&&(e.baseState=!1,kr=!0),e.memoizedState=r):(En(r,t)||(r=x0(),Ht.lanes|=r,ca|=r,e.baseState=!0),t)}function qS(e,t){var r=xt;xt=r!==0&&4>r?r:4,e(!0);var n=Nd.transition;Nd.transition={};try{e(!1),t()}finally{xt=r,Nd.transition=n}}function gv(){return sn().memoizedState}function ZS(e,t,r){var n=Ni(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},vv(e))_v(t,r);else if(r=Q0(e,t,r,n),r!==null){var i=Cr();wn(r,e,n,i),yv(r,t,n)}}function JS(e,t,r){var n=Ni(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(vv(e))_v(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,r);if(i.hasEagerState=!0,i.eagerState=s,En(s,o)){var l=t.interleaved;l===null?(i.next=i,Qh(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}r=Q0(e,t,i,n),r!==null&&(i=Cr(),wn(r,e,n,i),yv(r,t,n))}}function vv(e){var t=e.alternate;return e===Ht||t!==null&&t===Ht}function _v(e,t){As=Au=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function yv(e,t,r){if((r&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Fh(e,r)}}var Cu={readContext:on,useCallback:vr,useContext:vr,useEffect:vr,useImperativeHandle:vr,useInsertionEffect:vr,useLayoutEffect:vr,useMemo:vr,useReducer:vr,useRef:vr,useState:vr,useDebugValue:vr,useDeferredValue:vr,useTransition:vr,useMutableSource:vr,useSyncExternalStore:vr,useId:vr,unstable_isNewReconciler:!1},QS={readContext:on,useCallback:function(e,t){return Un().memoizedState=[e,t===void 0?null:t],e},useContext:on,useEffect:Pg,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,au(4194308,4,dv.bind(null,t,e),r)},useLayoutEffect:function(e,t){return au(4194308,4,e,t)},useInsertionEffect:function(e,t){return au(4,2,e,t)},useMemo:function(e,t){var r=Un();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Un();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=ZS.bind(null,Ht,e),[n.memoizedState,e]},useRef:function(e){var t=Un();return e={current:e},t.memoizedState=e},useState:Rg,useDebugValue:sp,useDeferredValue:function(e){return Un().memoizedState=e},useTransition:function(){var e=Rg(!1),t=e[0];return e=qS.bind(null,e[1]),Un().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Ht,i=Un();if(Ft){if(r===void 0)throw Error(de(407));r=r()}else{if(r=t(),or===null)throw Error(de(349));(ua&30)!==0||nv(n,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,Pg(av.bind(null,n,a,e),[e]),n.flags|=2048,js(9,iv.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=Un(),t=or.identifierPrefix;if(Ft){var r=Zn,n=qn;r=(n&~(1<<32-Mn(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Ws++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=YS++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},KS={readContext:on,useCallback:pv,useContext:on,useEffect:op,useImperativeHandle:hv,useInsertionEffect:uv,useLayoutEffect:cv,useMemo:fv,useReducer:Ld,useRef:lv,useState:function(){return Ld(Xs)},useDebugValue:sp,useDeferredValue:function(e){var t=sn();return mv(t,Qt.memoizedState,e)},useTransition:function(){var e=Ld(Xs)[0],t=sn().memoizedState;return[e,t]},useMutableSource:tv,useSyncExternalStore:rv,useId:gv,unstable_isNewReconciler:!1},eM={readContext:on,useCallback:pv,useContext:on,useEffect:op,useImperativeHandle:hv,useInsertionEffect:uv,useLayoutEffect:cv,useMemo:fv,useReducer:Id,useRef:lv,useState:function(){return Id(Xs)},useDebugValue:sp,useDeferredValue:function(e){var t=sn();return Qt===null?t.memoizedState=e:mv(t,Qt.memoizedState,e)},useTransition:function(){var e=Id(Xs)[0],t=sn().memoizedState;return[e,t]},useMutableSource:tv,useSyncExternalStore:rv,useId:gv,unstable_isNewReconciler:!1};function yn(e,t){if(e&&e.defaultProps){t=Vt({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function fh(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:Vt({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Hu={isMounted:function(e){return(e=e._reactInternals)?pa(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Cr(),i=Ni(e),a=Jn(n,i);a.payload=t,r!=null&&(a.callback=r),t=Ri(e,a,i),t!==null&&(wn(t,e,i,n),nu(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Cr(),i=Ni(e),a=Jn(n,i);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=Ri(e,a,i),t!==null&&(wn(t,e,i,n),nu(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Cr(),n=Ni(e),i=Jn(r,n);i.tag=2,t!=null&&(i.callback=t),t=Ri(e,i,n),t!==null&&(wn(t,e,n,r),nu(t,e,n))}};function Ng(e,t,r,n,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,o):t.prototype&&t.prototype.isPureReactComponent?!Fs(r,n)||!Fs(i,a):!0}function xv(e,t,r){var n=!1,i=Ui,a=t.contextType;return typeof a=="object"&&a!==null?a=on(a):(i=zr(t)?sa:xr.current,n=t.contextTypes,a=(n=n!=null)?so(e,i):Ui),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Hu,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Lg(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Hu.enqueueReplaceState(t,t.state,null)}function mh(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Kh(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=on(a):(a=zr(t)?sa:xr.current,i.context=so(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(fh(e,t,a,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Hu.enqueueReplaceState(i,i.state,null),Tu(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ho(e,t){try{var r="",n=t;do r+=Px(n),n=n.return;while(n);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Ud(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function gh(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var tM=typeof WeakMap=="function"?WeakMap:Map;function Sv(e,t,r){r=Jn(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Pu||(Pu=!0,bh=n),gh(e,t)},r}function Mv(e,t,r){r=Jn(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){gh(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){gh(e,t),typeof n!="function"&&(Pi===null?Pi=new Set([this]):Pi.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function Ig(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new tM;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=mM.bind(null,e,t,r),t.then(e,e))}function Ug(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Dg(e,t,r,n,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Jn(-1,1),t.tag=2,Ri(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var rM=ri.ReactCurrentOwner,kr=!1;function Ar(e,t,r,n){t.child=e===null?J0(t,null,r,n):uo(t,e.child,r,n)}function Og(e,t,r,n,i){r=r.render;var a=t.ref;return io(t,i),n=ip(e,t,r,n,a,i),r=ap(),e!==null&&!kr?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ti(e,t,i)):(Ft&&r&&jh(t),t.flags|=1,Ar(e,t,n,i),t.child)}function kg(e,t,r,n,i){if(e===null){var a=r.type;return typeof a=="function"&&!mp(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,wv(e,t,a,n,i)):(e=uu(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(r=r.compare,r=r!==null?r:Fs,r(o,n)&&e.ref===t.ref)return ti(e,t,i)}return t.flags|=1,e=Li(a,n),e.ref=t.ref,e.return=t,t.child=e}function wv(e,t,r,n,i){if(e!==null){var a=e.memoizedProps;if(Fs(a,n)&&e.ref===t.ref)if(kr=!1,t.pendingProps=n=a,(e.lanes&i)!==0)(e.flags&131072)!==0&&(kr=!0);else return t.lanes=e.lanes,ti(e,t,i)}return vh(e,t,r,n,i)}function Ev(e,t,r){var n=t.pendingProps,i=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},bt(Ka,Gr),Gr|=r;else{if((r&1073741824)===0)return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,bt(Ka,Gr),Gr|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,bt(Ka,Gr),Gr|=n}else a!==null?(n=a.baseLanes|r,t.memoizedState=null):n=r,bt(Ka,Gr),Gr|=n;return Ar(e,t,i,r),t.child}function Tv(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function vh(e,t,r,n,i){var a=zr(r)?sa:xr.current;return a=so(t,a),io(t,i),r=ip(e,t,r,n,a,i),n=ap(),e!==null&&!kr?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ti(e,t,i)):(Ft&&n&&jh(t),t.flags|=1,Ar(e,t,r,i),t.child)}function Fg(e,t,r,n,i){if(zr(r)){var a=!0;xu(t)}else a=!1;if(io(t,i),t.stateNode===null)ou(e,t),xv(t,r,n),mh(t,r,n,i),n=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=r.contextType;typeof u=="object"&&u!==null?u=on(u):(u=zr(r)?sa:xr.current,u=so(t,u));var c=r.getDerivedStateFromProps,p=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==n||l!==u)&&Lg(t,o,n,u),xi=!1;var h=t.memoizedState;o.state=h,Tu(t,n,o,i),l=t.memoizedState,s!==n||h!==l||Fr.current||xi?(typeof c=="function"&&(fh(t,r,c,n),l=t.memoizedState),(s=xi||Ng(t,r,s,n,h,l,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),o.props=n,o.state=l,o.context=u,n=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,K0(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:yn(t.type,s),o.props=u,p=t.pendingProps,h=o.context,l=r.contextType,typeof l=="object"&&l!==null?l=on(l):(l=zr(r)?sa:xr.current,l=so(t,l));var f=r.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==p||h!==l)&&Lg(t,o,n,l),xi=!1,h=t.memoizedState,o.state=h,Tu(t,n,o,i);var y=t.memoizedState;s!==p||h!==y||Fr.current||xi?(typeof f=="function"&&(fh(t,r,f,n),y=t.memoizedState),(u=xi||Ng(t,r,u,n,h,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),o.props=n,o.state=y,o.context=l,n=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return _h(e,t,r,n,a,i)}function _h(e,t,r,n,i,a){Tv(e,t);var o=(t.flags&128)!==0;if(!n&&!o)return i&&wg(t,r,!1),ti(e,t,a);n=t.stateNode,rM.current=t;var s=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&o?(t.child=uo(t,e.child,null,a),t.child=uo(t,null,s,a)):Ar(e,t,s,a),t.memoizedState=n.state,i&&wg(t,r,!0),t.child}function bv(e){var t=e.stateNode;t.pendingContext?Mg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Mg(e,t.context,!1),ep(e,t.containerInfo)}function zg(e,t,r,n,i){return lo(),Yh(i),t.flags|=256,Ar(e,t,r,n),t.child}var yh={dehydrated:null,treeContext:null,retryLane:0};function xh(e){return{baseLanes:e,cachePool:null,transitions:null}}function Av(e,t,r){var n=t.pendingProps,i=Bt.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),bt(Bt,i&1),e===null)return hh(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=n.children,e=n.fallback,a?(n=t.mode,a=t.child,o={mode:"hidden",children:o},(n&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Wu(o,n,0,null),e=oa(e,n,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=xh(r),t.memoizedState=yh,e):lp(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return nM(e,t,o,n,s,i,r);if(a){a=n.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:n.children};return(o&1)===0&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=Li(i,l),n.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=Li(s,a):(a=oa(a,o,r,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,o=e.child.memoizedState,o=o===null?xh(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~r,t.memoizedState=yh,n}return a=e.child,e=a.sibling,n=Li(a,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function lp(e,t){return t=Wu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Jl(e,t,r,n){return n!==null&&Yh(n),uo(t,e.child,null,r),e=lp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nM(e,t,r,n,i,a,o){if(r)return t.flags&256?(t.flags&=-257,n=Ud(Error(de(422))),Jl(e,t,o,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=n.fallback,i=t.mode,n=Wu({mode:"visible",children:n.children},i,0,null),a=oa(a,i,o,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,(t.mode&1)!==0&&uo(t,e.child,null,o),t.child.memoizedState=xh(o),t.memoizedState=yh,a);if((t.mode&1)===0)return Jl(e,t,o,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var s=n.dgst;return n=s,a=Error(de(419)),n=Ud(a,n,void 0),Jl(e,t,o,n)}if(s=(o&e.childLanes)!==0,kr||s){if(n=or,n!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(n.suspendedLanes|o))!==0?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,ei(e,i),wn(n,e,i,-1))}return fp(),n=Ud(Error(de(421))),Jl(e,t,o,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=gM.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Wr=Ci(i.nextSibling),Xr=t,Ft=!0,Sn=null,e!==null&&(tn[rn++]=qn,tn[rn++]=Zn,tn[rn++]=la,qn=e.id,Zn=e.overflow,la=t),t=lp(t,n.children),t.flags|=4096,t)}function Bg(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ph(e.return,t,r)}function Dd(e,t,r,n,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=i)}function Cv(e,t,r){var n=t.pendingProps,i=n.revealOrder,a=n.tail;if(Ar(e,t,n.children,r),n=Bt.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bg(e,r,t);else if(e.tag===19)Bg(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(bt(Bt,n),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&bu(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Dd(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&bu(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Dd(t,!0,r,null,a);break;case"together":Dd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ou(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ti(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),ca|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(de(153));if(t.child!==null){for(e=t.child,r=Li(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Li(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function iM(e,t,r){switch(t.tag){case 3:bv(t),lo();break;case 5:ev(t);break;case 1:zr(t.type)&&xu(t);break;case 4:ep(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;bt(wu,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(bt(Bt,Bt.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Av(e,t,r):(bt(Bt,Bt.current&1),e=ti(e,t,r),e!==null?e.sibling:null);bt(Bt,Bt.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&128)!==0){if(n)return Cv(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),bt(Bt,Bt.current),n)break;return null;case 22:case 23:return t.lanes=0,Ev(e,t,r)}return ti(e,t,r)}var Rv,Sh,Pv,Nv;Rv=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Sh=function(){};Pv=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,ia(kn.current);var a=null;switch(r){case"input":i=Gd(e,i),n=Gd(e,n),a=[];break;case"select":i=Vt({},i,{value:void 0}),n=Vt({},n,{value:void 0}),a=[];break;case"textarea":i=jd(e,i),n=jd(e,n),a=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=_u)}Yd(r,n);var o;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ns.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in n){var l=n[u];if(s=i?.[u],n.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(r||(r={}),r[o]=l[o])}else r||(a||(a=[]),a.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ns.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Nt("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}r&&(a=a||[]).push("style",r);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Nv=function(e,t,r,n){r!==n&&(t.flags|=4)};function ms(e,t){if(!Ft)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function _r(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function aM(e,t,r){var n=t.pendingProps;switch($h(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _r(t),null;case 1:return zr(t.type)&&yu(),_r(t),null;case 3:return n=t.stateNode,co(),Lt(Fr),Lt(xr),rp(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ql(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Sn!==null&&(Rh(Sn),Sn=null))),Sh(e,t),_r(t),null;case 5:tp(t);var i=ia(Gs.current);if(r=t.type,e!==null&&t.stateNode!=null)Pv(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(de(166));return _r(t),null}if(e=ia(kn.current),ql(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[Dn]=t,n[Hs]=a,e=(t.mode&1)!==0,r){case"dialog":Nt("cancel",n),Nt("close",n);break;case"iframe":case"object":case"embed":Nt("load",n);break;case"video":case"audio":for(i=0;i<Ss.length;i++)Nt(Ss[i],n);break;case"source":Nt("error",n);break;case"img":case"image":case"link":Nt("error",n),Nt("load",n);break;case"details":Nt("toggle",n);break;case"input":Ym(n,a),Nt("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},Nt("invalid",n);break;case"textarea":Zm(n,a),Nt("invalid",n)}Yd(r,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?n.textContent!==s&&(a.suppressHydrationWarning!==!0&&Yl(n.textContent,s,e),i=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Yl(n.textContent,s,e),i=["children",""+s]):Ns.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&Nt("scroll",n)}switch(r){case"input":Ol(n),qm(n,a,!0);break;case"textarea":Ol(n),Jm(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=_u)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=a0(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=o.createElement(r,{is:n.is}):(e=o.createElement(r),r==="select"&&(o=e,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):e=o.createElementNS(e,r),e[Dn]=t,e[Hs]=n,Rv(e,t,!1,!1),t.stateNode=e;e:{switch(o=qd(r,n),r){case"dialog":Nt("cancel",e),Nt("close",e),i=n;break;case"iframe":case"object":case"embed":Nt("load",e),i=n;break;case"video":case"audio":for(i=0;i<Ss.length;i++)Nt(Ss[i],e);i=n;break;case"source":Nt("error",e),i=n;break;case"img":case"image":case"link":Nt("error",e),Nt("load",e),i=n;break;case"details":Nt("toggle",e),i=n;break;case"input":Ym(e,n),i=Gd(e,n),Nt("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=Vt({},n,{value:void 0}),Nt("invalid",e);break;case"textarea":Zm(e,n),i=jd(e,n),Nt("invalid",e);break;default:i=n}Yd(r,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?l0(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&o0(e,l)):a==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Ls(e,l):typeof l=="number"&&Ls(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ns.hasOwnProperty(a)?l!=null&&a==="onScroll"&&Nt("scroll",e):l!=null&&Lh(e,a,l,o))}switch(r){case"input":Ol(e),qm(e,n,!1);break;case"textarea":Ol(e),Jm(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Ii(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?eo(e,!!n.multiple,a,!1):n.defaultValue!=null&&eo(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=_u)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return _r(t),null;case 6:if(e&&t.stateNode!=null)Nv(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(de(166));if(r=ia(Gs.current),ia(kn.current),ql(t)){if(n=t.stateNode,r=t.memoizedProps,n[Dn]=t,(a=n.nodeValue!==r)&&(e=Xr,e!==null))switch(e.tag){case 3:Yl(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yl(n.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Dn]=t,t.stateNode=n}return _r(t),null;case 13:if(Lt(Bt),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ft&&Wr!==null&&(t.mode&1)!==0&&(t.flags&128)===0)q0(),lo(),t.flags|=98560,a=!1;else if(a=ql(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(de(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(de(317));a[Dn]=t}else lo(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_r(t),a=!1}else Sn!==null&&(Rh(Sn),Sn=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Bt.current&1)!==0?Kt===0&&(Kt=3):fp())),t.updateQueue!==null&&(t.flags|=4),_r(t),null);case 4:return co(),Sh(e,t),e===null&&zs(t.stateNode.containerInfo),_r(t),null;case 10:return Jh(t.type._context),_r(t),null;case 17:return zr(t.type)&&yu(),_r(t),null;case 19:if(Lt(Bt),a=t.memoizedState,a===null)return _r(t),null;if(n=(t.flags&128)!==0,o=a.rendering,o===null)if(n)ms(a,!1);else{if(Kt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=bu(e),o!==null){for(t.flags|=128,ms(a,!1),n=o.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)a=r,e=n,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return bt(Bt,Bt.current&1|2),t.child}e=e.sibling}a.tail!==null&&jt()>po&&(t.flags|=128,n=!0,ms(a,!1),t.lanes=4194304)}else{if(!n)if(e=bu(o),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ms(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Ft)return _r(t),null}else 2*jt()-a.renderingStartTime>po&&r!==1073741824&&(t.flags|=128,n=!0,ms(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(r=a.last,r!==null?r.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=jt(),t.sibling=null,r=Bt.current,bt(Bt,n?r&1|2:r&1),t):(_r(t),null);case 22:case 23:return pp(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(Gr&1073741824)!==0&&(_r(t),t.subtreeFlags&6&&(t.flags|=8192)):_r(t),null;case 24:return null;case 25:return null}throw Error(de(156,t.tag))}function oM(e,t){switch($h(t),t.tag){case 1:return zr(t.type)&&yu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return co(),Lt(Fr),Lt(xr),rp(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return tp(t),null;case 13:if(Lt(Bt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(de(340));lo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Lt(Bt),null;case 4:return co(),null;case 10:return Jh(t.type._context),null;case 22:case 23:return pp(),null;case 24:return null;default:return null}}var Ql=!1,yr=!1,sM=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function Qa(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Wt(e,t,n)}else r.current=null}function Mh(e,t,r){try{r()}catch(n){Wt(e,t,n)}}var Hg=!1;function lM(e,t){if(ah=mu,e=O0(),Xh(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var o=0,s=-1,l=-1,u=0,c=0,p=e,h=null;t:for(;;){for(var f;p!==r||i!==0&&p.nodeType!==3||(s=o+i),p!==a||n!==0&&p.nodeType!==3||(l=o+n),p.nodeType===3&&(o+=p.nodeValue.length),(f=p.firstChild)!==null;)h=p,p=f;for(;;){if(p===e)break t;if(h===r&&++u===i&&(s=o),h===a&&++c===n&&(l=o),(f=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=f}r=s===-1||l===-1?null:{start:s,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(oh={focusedElem:e,selectionRange:r},mu=!1,Ne=t;Ne!==null;)if(t=Ne,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ne=e;else for(;Ne!==null;){t=Ne;try{var y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,v=y.memoizedState,d=t.stateNode,m=d.getSnapshotBeforeUpdate(t.elementType===t.type?_:yn(t.type,_),v);d.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(de(163))}}catch(x){Wt(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,Ne=e;break}Ne=t.return}return y=Hg,Hg=!1,y}function Cs(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Mh(t,r,a)}i=i.next}while(i!==n)}}function Vu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function wh(e){var t=e.ref;if(t!==null){var r=e.stateNode;e.tag,e=r,typeof t=="function"?t(e):t.current=e}}function Lv(e){var t=e.alternate;t!==null&&(e.alternate=null,Lv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Dn],delete t[Hs],delete t[uh],delete t[WS],delete t[XS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Iv(e){return e.tag===5||e.tag===3||e.tag===4}function Vg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Iv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Eh(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=_u));else if(n!==4&&(e=e.child,e!==null))for(Eh(e,t,r),e=e.sibling;e!==null;)Eh(e,t,r),e=e.sibling}function Th(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Th(e,t,r),e=e.sibling;e!==null;)Th(e,t,r),e=e.sibling}var ur=null,xn=!1;function _i(e,t,r){for(r=r.child;r!==null;)Uv(e,t,r),r=r.sibling}function Uv(e,t,r){if(On&&typeof On.onCommitFiberUnmount=="function")try{On.onCommitFiberUnmount(Uu,r)}catch{}switch(r.tag){case 5:yr||Qa(r,t);case 6:var n=ur,i=xn;ur=null,_i(e,t,r),ur=n,xn=i,ur!==null&&(xn?(e=ur,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ur.removeChild(r.stateNode));break;case 18:ur!==null&&(xn?(e=ur,r=r.stateNode,e.nodeType===8?Cd(e.parentNode,r):e.nodeType===1&&Cd(e,r),Os(e)):Cd(ur,r.stateNode));break;case 4:n=ur,i=xn,ur=r.stateNode.containerInfo,xn=!0,_i(e,t,r),ur=n,xn=i;break;case 0:case 11:case 14:case 15:if(!yr&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&((a&2)!==0||(a&4)!==0)&&Mh(r,t,o),i=i.next}while(i!==n)}_i(e,t,r);break;case 1:if(!yr&&(Qa(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){Wt(r,t,s)}_i(e,t,r);break;case 21:_i(e,t,r);break;case 22:r.mode&1?(yr=(n=yr)||r.memoizedState!==null,_i(e,t,r),yr=n):_i(e,t,r);break;default:_i(e,t,r)}}function Gg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new sM),t.forEach(function(n){var i=vM.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function _n(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ur=s.stateNode,xn=!1;break e;case 3:ur=s.stateNode.containerInfo,xn=!0;break e;case 4:ur=s.stateNode.containerInfo,xn=!0;break e}s=s.return}if(ur===null)throw Error(de(160));Uv(a,o,i),ur=null,xn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Wt(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Dv(t,e),t=t.sibling}function Dv(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_n(t,e),In(e),n&4){try{Cs(3,e,e.return),Vu(3,e)}catch(_){Wt(e,e.return,_)}try{Cs(5,e,e.return)}catch(_){Wt(e,e.return,_)}}break;case 1:_n(t,e),In(e),n&512&&r!==null&&Qa(r,r.return);break;case 5:if(_n(t,e),In(e),n&512&&r!==null&&Qa(r,r.return),e.flags&32){var i=e.stateNode;try{Ls(i,"")}catch(_){Wt(e,e.return,_)}}if(n&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=r!==null?r.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&n0(i,a),qd(s,o);var u=qd(s,a);for(o=0;o<l.length;o+=2){var c=l[o],p=l[o+1];c==="style"?l0(i,p):c==="dangerouslySetInnerHTML"?o0(i,p):c==="children"?Ls(i,p):Lh(i,c,p,u)}switch(s){case"input":Wd(i,a);break;case"textarea":i0(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var f=a.value;f!=null?eo(i,!!a.multiple,f,!1):h!==!!a.multiple&&(a.defaultValue!=null?eo(i,!!a.multiple,a.defaultValue,!0):eo(i,!!a.multiple,a.multiple?[]:"",!1))}i[Hs]=a}catch(_){Wt(e,e.return,_)}}break;case 6:if(_n(t,e),In(e),n&4){if(e.stateNode===null)throw Error(de(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(_){Wt(e,e.return,_)}}break;case 3:if(_n(t,e),In(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Os(t.containerInfo)}catch(_){Wt(e,e.return,_)}break;case 4:_n(t,e),In(e);break;case 13:_n(t,e),In(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(dp=jt())),n&4&&Gg(e);break;case 22:if(c=r!==null&&r.memoizedState!==null,e.mode&1?(yr=(u=yr)||c,_n(t,e),yr=u):_n(t,e),In(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(Ne=e,c=e.child;c!==null;){for(p=Ne=c;Ne!==null;){switch(h=Ne,f=h.child,h.tag){case 0:case 11:case 14:case 15:Cs(4,h,h.return);break;case 1:Qa(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){n=h,r=h.return;try{t=n,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(_){Wt(n,r,_)}}break;case 5:Qa(h,h.return);break;case 22:if(h.memoizedState!==null){Xg(p);continue}}f!==null?(f.return=h,Ne=f):Xg(p)}c=c.sibling}e:for(c=null,p=e;;){if(p.tag===5){if(c===null){c=p;try{i=p.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=s0("display",o))}catch(_){Wt(e,e.return,_)}}}else if(p.tag===6){if(c===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(_){Wt(e,e.return,_)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;c===p&&(c=null),p=p.return}c===p&&(c=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:_n(t,e),In(e),n&4&&Gg(e);break;case 21:break;default:_n(t,e),In(e)}}function In(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Iv(r)){var n=r;break e}r=r.return}throw Error(de(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Ls(i,""),n.flags&=-33);var a=Vg(e);Th(e,a,i);break;case 3:case 4:var o=n.stateNode.containerInfo,s=Vg(e);Eh(e,s,o);break;default:throw Error(de(161))}}catch(l){Wt(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function uM(e,t,r){Ne=e,Ov(e,t,r)}function Ov(e,t,r){for(var n=(e.mode&1)!==0;Ne!==null;){var i=Ne,a=i.child;if(i.tag===22&&n){var o=i.memoizedState!==null||Ql;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||yr;s=Ql;var u=yr;if(Ql=o,(yr=l)&&!u)for(Ne=i;Ne!==null;)o=Ne,l=o.child,o.tag===22&&o.memoizedState!==null?jg(i):l!==null?(l.return=o,Ne=l):jg(i);for(;a!==null;)Ne=a,Ov(a,t,r),a=a.sibling;Ne=i,Ql=s,yr=u}Wg(e,t,r)}else(i.subtreeFlags&8772)!==0&&a!==null?(a.return=i,Ne=a):Wg(e,t,r)}}function Wg(e){for(;Ne!==null;){var t=Ne;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:yr||Vu(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!yr)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:yn(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Cg(t,a,n);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Cg(t,o,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var p=c.dehydrated;p!==null&&Os(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(de(163))}yr||t.flags&512&&wh(t)}catch(h){Wt(t,t.return,h)}}if(t===e){Ne=null;break}if(r=t.sibling,r!==null){r.return=t.return,Ne=r;break}Ne=t.return}}function Xg(e){for(;Ne!==null;){var t=Ne;if(t===e){Ne=null;break}var r=t.sibling;if(r!==null){r.return=t.return,Ne=r;break}Ne=t.return}}function jg(e){for(;Ne!==null;){var t=Ne;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Vu(4,t)}catch(l){Wt(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(l){Wt(t,i,l)}}var a=t.return;try{wh(t)}catch(l){Wt(t,a,l)}break;case 5:var o=t.return;try{wh(t)}catch(l){Wt(t,o,l)}}}catch(l){Wt(t,t.return,l)}if(t===e){Ne=null;break}var s=t.sibling;if(s!==null){s.return=t.return,Ne=s;break}Ne=t.return}}var cM=Math.ceil,Ru=ri.ReactCurrentDispatcher,up=ri.ReactCurrentOwner,an=ri.ReactCurrentBatchConfig,gt=0,or=null,Zt=null,cr=0,Gr=0,Ka=Oi(0),Kt=0,$s=null,ca=0,Gu=0,cp=0,Rs=null,Or=null,dp=0,po=1/0,$n=null,Pu=!1,bh=null,Pi=null,Kl=!1,Ei=null,Nu=0,Ps=0,Ah=null,su=-1,lu=0;function Cr(){return(gt&6)!==0?jt():su!==-1?su:su=jt()}function Ni(e){return(e.mode&1)===0?1:(gt&2)!==0&&cr!==0?cr&-cr:$S.transition!==null?(lu===0&&(lu=x0()),lu):(e=xt,e!==0||(e=window.event,e=e===void 0?16:A0(e.type)),e)}function wn(e,t,r,n){if(50<Ps)throw Ps=0,Ah=null,Error(de(185));Ys(e,r,n),((gt&2)===0||e!==or)&&(e===or&&((gt&2)===0&&(Gu|=r),Kt===4&&Mi(e,cr)),Br(e,n),r===1&&gt===0&&(t.mode&1)===0&&(po=jt()+500,zu&&ki()))}function Br(e,t){var r=e.callbackNode;qx(e,t);var n=fu(e,e===or?cr:0);if(n===0)r!==null&&eg(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&eg(r),t===1)e.tag===0?jS($g.bind(null,e)):j0($g.bind(null,e)),VS(function(){(gt&6)===0&&ki()}),r=null;else{switch(S0(n)){case 1:r=kh;break;case 4:r=_0;break;case 16:r=pu;break;case 536870912:r=y0;break;default:r=pu}r=Wv(r,kv.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function kv(e,t){if(su=-1,lu=0,(gt&6)!==0)throw Error(de(327));var r=e.callbackNode;if(ao()&&e.callbackNode!==r)return null;var n=fu(e,e===or?cr:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=Lu(e,n);else{t=n;var i=gt;gt|=2;var a=zv();(or!==e||cr!==t)&&($n=null,po=jt()+500,aa(e,t));do try{pM();break}catch(s){Fv(e,s)}while(!0);Zh(),Ru.current=a,gt=i,Zt!==null?t=0:(or=null,cr=0,t=Kt)}if(t!==0){if(t===2&&(i=eh(e),i!==0&&(n=i,t=Ch(e,i))),t===1)throw r=$s,aa(e,0),Mi(e,n),Br(e,jt()),r;if(t===6)Mi(e,n);else{if(i=e.current.alternate,(n&30)===0&&!dM(i)&&(t=Lu(e,n),t===2&&(a=eh(e),a!==0&&(n=a,t=Ch(e,a))),t===1))throw r=$s,aa(e,0),Mi(e,n),Br(e,jt()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(de(345));case 2:ta(e,Or,$n);break;case 3:if(Mi(e,n),(n&130023424)===n&&(t=dp+500-jt(),10<t)){if(fu(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Cr(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=lh(ta.bind(null,e,Or,$n),t);break}ta(e,Or,$n);break;case 4:if(Mi(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var o=31-Mn(n);a=1<<o,o=t[o],o>i&&(i=o),n&=~a}if(n=i,n=jt()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*cM(n/1960))-n,10<n){e.timeoutHandle=lh(ta.bind(null,e,Or,$n),n);break}ta(e,Or,$n);break;case 5:ta(e,Or,$n);break;default:throw Error(de(329))}}}return Br(e,jt()),e.callbackNode===r?kv.bind(null,e):null}function Ch(e,t){var r=Rs;return e.current.memoizedState.isDehydrated&&(aa(e,t).flags|=256),e=Lu(e,t),e!==2&&(t=Or,Or=r,t!==null&&Rh(t)),e}function Rh(e){Or===null?Or=e:Or.push.apply(Or,e)}function dM(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],a=i.getSnapshot;i=i.value;try{if(!En(a(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mi(e,t){for(t&=~cp,t&=~Gu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Mn(t),n=1<<r;e[r]=-1,t&=~n}}function $g(e){if((gt&6)!==0)throw Error(de(327));ao();var t=fu(e,0);if((t&1)===0)return Br(e,jt()),null;var r=Lu(e,t);if(e.tag!==0&&r===2){var n=eh(e);n!==0&&(t=n,r=Ch(e,n))}if(r===1)throw r=$s,aa(e,0),Mi(e,t),Br(e,jt()),r;if(r===6)throw Error(de(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ta(e,Or,$n),Br(e,jt()),null}function hp(e,t){var r=gt;gt|=1;try{return e(t)}finally{gt=r,gt===0&&(po=jt()+500,zu&&ki())}}function da(e){Ei!==null&&Ei.tag===0&&(gt&6)===0&&ao();var t=gt;gt|=1;var r=an.transition,n=xt;try{if(an.transition=null,xt=1,e)return e()}finally{xt=n,an.transition=r,gt=t,(gt&6)===0&&ki()}}function pp(){Gr=Ka.current,Lt(Ka)}function aa(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,HS(r)),Zt!==null)for(r=Zt.return;r!==null;){var n=r;switch($h(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&yu();break;case 3:co(),Lt(Fr),Lt(xr),rp();break;case 5:tp(n);break;case 4:co();break;case 13:Lt(Bt);break;case 19:Lt(Bt);break;case 10:Jh(n.type._context);break;case 22:case 23:pp()}r=r.return}if(or=e,Zt=e=Li(e.current,null),cr=Gr=t,Kt=0,$s=null,cp=Gu=ca=0,Or=Rs=null,na!==null){for(t=0;t<na.length;t++)if(r=na[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,a=r.pending;if(a!==null){var o=a.next;a.next=i,n.next=o}r.pending=n}na=null}return e}function Fv(e,t){do{var r=Zt;try{if(Zh(),iu.current=Cu,Au){for(var n=Ht.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Au=!1}if(ua=0,ar=Qt=Ht=null,As=!1,Ws=0,up.current=null,r===null||r.return===null){Kt=1,$s=t,Zt=null;break}e:{var a=e,o=r.return,s=r,l=t;if(t=cr,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,p=c.tag;if((c.mode&1)===0&&(p===0||p===11||p===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=Ug(o);if(f!==null){f.flags&=-257,Dg(f,o,s,a,t),f.mode&1&&Ig(a,u,t),t=f,l=u;var y=t.updateQueue;if(y===null){var _=new Set;_.add(l),t.updateQueue=_}else y.add(l);break e}else{if((t&1)===0){Ig(a,u,t),fp();break e}l=Error(de(426))}}else if(Ft&&s.mode&1){var v=Ug(o);if(v!==null){(v.flags&65536)===0&&(v.flags|=256),Dg(v,o,s,a,t),Yh(ho(l,s));break e}}a=l=ho(l,s),Kt!==4&&(Kt=2),Rs===null?Rs=[a]:Rs.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var d=Sv(a,l,t);Ag(a,d);break e;case 1:s=l;var m=a.type,g=a.stateNode;if((a.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Pi===null||!Pi.has(g)))){a.flags|=65536,t&=-t,a.lanes|=t;var x=Mv(a,s,t);Ag(a,x);break e}}a=a.return}while(a!==null)}Hv(r)}catch(N){t=N,Zt===r&&r!==null&&(Zt=r=r.return);continue}break}while(!0)}function zv(){var e=Ru.current;return Ru.current=Cu,e===null?Cu:e}function fp(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),or===null||(ca&268435455)===0&&(Gu&268435455)===0||Mi(or,cr)}function Lu(e,t){var r=gt;gt|=2;var n=zv();(or!==e||cr!==t)&&($n=null,aa(e,t));do try{hM();break}catch(i){Fv(e,i)}while(!0);if(Zh(),gt=r,Ru.current=n,Zt!==null)throw Error(de(261));return or=null,cr=0,Kt}function hM(){for(;Zt!==null;)Bv(Zt)}function pM(){for(;Zt!==null&&!Bx();)Bv(Zt)}function Bv(e){var t=Gv(e.alternate,e,Gr);e.memoizedProps=e.pendingProps,t===null?Hv(e):Zt=t,up.current=null}function Hv(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=aM(r,t,Gr),r!==null){Zt=r;return}}else{if(r=oM(r,t),r!==null){r.flags&=32767,Zt=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Kt=6,Zt=null;return}}if(t=t.sibling,t!==null){Zt=t;return}Zt=t=e}while(t!==null);Kt===0&&(Kt=5)}function ta(e,t,r){var n=xt,i=an.transition;try{an.transition=null,xt=1,fM(e,t,r,n)}finally{an.transition=i,xt=n}return null}function fM(e,t,r,n){do ao();while(Ei!==null);if((gt&6)!==0)throw Error(de(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(de(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(Zx(e,a),e===or&&(Zt=or=null,cr=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Kl||(Kl=!0,Wv(pu,function(){return ao(),null})),a=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||a){a=an.transition,an.transition=null;var o=xt;xt=1;var s=gt;gt|=4,up.current=null,lM(e,r),Dv(r,e),OS(oh),mu=!!ah,oh=ah=null,e.current=r,uM(r,e,i),Hx(),gt=s,xt=o,an.transition=a}else e.current=r;if(Kl&&(Kl=!1,Ei=e,Nu=i),a=e.pendingLanes,a===0&&(Pi=null),Wx(r.stateNode,n),Br(e,jt()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Pu)throw Pu=!1,e=bh,bh=null,e;return(Nu&1)!==0&&e.tag!==0&&ao(),a=e.pendingLanes,(a&1)!==0?e===Ah?Ps++:(Ps=0,Ah=e):Ps=0,ki(),null}function ao(){if(Ei!==null){var e=S0(Nu),t=an.transition,r=xt;try{if(an.transition=null,xt=16>e?16:e,Ei===null)var n=!1;else{if(e=Ei,Ei=null,Nu=0,(gt&6)!==0)throw Error(de(331));var i=gt;for(gt|=4,Ne=e.current;Ne!==null;){var a=Ne,o=a.child;if((Ne.flags&16)!==0){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(Ne=u;Ne!==null;){var c=Ne;switch(c.tag){case 0:case 11:case 15:Cs(8,c,a)}var p=c.child;if(p!==null)p.return=c,Ne=p;else for(;Ne!==null;){c=Ne;var h=c.sibling,f=c.return;if(Lv(c),c===u){Ne=null;break}if(h!==null){h.return=f,Ne=h;break}Ne=f}}}var y=a.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var v=_.sibling;_.sibling=null,_=v}while(_!==null)}}Ne=a}}if((a.subtreeFlags&2064)!==0&&o!==null)o.return=a,Ne=o;else e:for(;Ne!==null;){if(a=Ne,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:Cs(9,a,a.return)}var d=a.sibling;if(d!==null){d.return=a.return,Ne=d;break e}Ne=a.return}}var m=e.current;for(Ne=m;Ne!==null;){o=Ne;var g=o.child;if((o.subtreeFlags&2064)!==0&&g!==null)g.return=o,Ne=g;else e:for(o=m;Ne!==null;){if(s=Ne,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:Vu(9,s)}}catch(N){Wt(s,s.return,N)}if(s===o){Ne=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,Ne=x;break e}Ne=s.return}}if(gt=i,ki(),On&&typeof On.onPostCommitFiberRoot=="function")try{On.onPostCommitFiberRoot(Uu,e)}catch{}n=!0}return n}finally{xt=r,an.transition=t}}return!1}function Yg(e,t,r){t=ho(r,t),t=Sv(e,t,1),e=Ri(e,t,1),t=Cr(),e!==null&&(Ys(e,1,t),Br(e,t))}function Wt(e,t,r){if(e.tag===3)Yg(e,e,r);else for(;t!==null;){if(t.tag===3){Yg(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Pi===null||!Pi.has(n))){e=ho(r,e),e=Mv(t,e,1),t=Ri(t,e,1),e=Cr(),t!==null&&(Ys(t,1,e),Br(t,e));break}}t=t.return}}function mM(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Cr(),e.pingedLanes|=e.suspendedLanes&r,or===e&&(cr&r)===r&&(Kt===4||Kt===3&&(cr&130023424)===cr&&500>jt()-dp?aa(e,0):cp|=r),Br(e,t)}function Vv(e,t){t===0&&((e.mode&1)===0?t=1:(t=zl,zl<<=1,(zl&130023424)===0&&(zl=4194304)));var r=Cr();e=ei(e,t),e!==null&&(Ys(e,t,r),Br(e,r))}function gM(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Vv(e,r)}function vM(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(de(314))}n!==null&&n.delete(t),Vv(e,r)}var Gv;Gv=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fr.current)kr=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return kr=!1,iM(e,t,r);kr=(e.flags&131072)!==0}else kr=!1,Ft&&(t.flags&1048576)!==0&&$0(t,Mu,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;ou(e,t),e=t.pendingProps;var i=so(t,xr.current);io(t,r),i=ip(null,t,n,e,i,r);var a=ap();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,zr(n)?(a=!0,xu(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Kh(t),i.updater=Hu,t.stateNode=i,i._reactInternals=t,mh(t,n,e,r),t=_h(null,t,n,!0,a,r)):(t.tag=0,Ft&&a&&jh(t),Ar(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(ou(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=yM(n),e=yn(n,e),i){case 0:t=vh(null,t,n,e,r);break e;case 1:t=Fg(null,t,n,e,r);break e;case 11:t=Og(null,t,n,e,r);break e;case 14:t=kg(null,t,n,yn(n.type,e),r);break e}throw Error(de(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:yn(n,i),vh(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:yn(n,i),Fg(e,t,n,i,r);case 3:e:{if(bv(t),e===null)throw Error(de(387));n=t.pendingProps,a=t.memoizedState,i=a.element,K0(e,t),Tu(t,n,null,r);var o=t.memoizedState;if(n=o.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=ho(Error(de(423)),t),t=zg(e,t,n,r,i);break e}else if(n!==i){i=ho(Error(de(424)),t),t=zg(e,t,n,r,i);break e}else for(Wr=Ci(t.stateNode.containerInfo.firstChild),Xr=t,Ft=!0,Sn=null,r=J0(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(lo(),n===i){t=ti(e,t,r);break e}Ar(e,t,n,r)}t=t.child}return t;case 5:return ev(t),e===null&&hh(t),n=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,sh(n,i)?o=null:a!==null&&sh(n,a)&&(t.flags|=32),Tv(e,t),Ar(e,t,o,r),t.child;case 6:return e===null&&hh(t),null;case 13:return Av(e,t,r);case 4:return ep(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=uo(t,null,n,r):Ar(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:yn(n,i),Og(e,t,n,i,r);case 7:return Ar(e,t,t.pendingProps,r),t.child;case 8:return Ar(e,t,t.pendingProps.children,r),t.child;case 12:return Ar(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,bt(wu,n._currentValue),n._currentValue=o,a!==null)if(En(a.value,o)){if(a.children===i.children&&!Fr.current){t=ti(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===n){if(a.tag===1){l=Jn(-1,r&-r),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),ph(a.return,r,t),s.lanes|=r;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(de(341));o.lanes|=r,s=o.alternate,s!==null&&(s.lanes|=r),ph(o,r,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Ar(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,io(t,r),i=on(i),n=n(i),t.flags|=1,Ar(e,t,n,r),t.child;case 14:return n=t.type,i=yn(n,t.pendingProps),i=yn(n.type,i),kg(e,t,n,i,r);case 15:return wv(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:yn(n,i),ou(e,t),t.tag=1,zr(n)?(e=!0,xu(t)):e=!1,io(t,r),xv(t,n,i),mh(t,n,i,r),_h(null,t,n,!0,e,r);case 19:return Cv(e,t,r);case 22:return Ev(e,t,r)}throw Error(de(156,t.tag))};function Wv(e,t){return v0(e,t)}function _M(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(e,t,r,n){return new _M(e,t,r,n)}function mp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yM(e){if(typeof e=="function")return mp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Uh)return 11;if(e===Dh)return 14}return 2}function Li(e,t){var r=e.alternate;return r===null?(r=nn(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function uu(e,t,r,n,i,a){var o=2;if(n=e,typeof e=="function")mp(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ga:return oa(r.children,i,a,t);case Ih:o=8,i|=8;break;case zd:return e=nn(12,r,t,i|2),e.elementType=zd,e.lanes=a,e;case Bd:return e=nn(13,r,t,i),e.elementType=Bd,e.lanes=a,e;case Hd:return e=nn(19,r,t,i),e.elementType=Hd,e.lanes=a,e;case e0:return Wu(r,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qg:o=10;break e;case Kg:o=9;break e;case Uh:o=11;break e;case Dh:o=14;break e;case yi:o=16,n=null;break e}throw Error(de(130,e==null?e:typeof e,""))}return t=nn(o,r,t,i),t.elementType=e,t.type=n,t.lanes=a,t}function oa(e,t,r,n){return e=nn(7,e,n,t),e.lanes=r,e}function Wu(e,t,r,n){return e=nn(22,e,n,t),e.elementType=e0,e.lanes=r,e.stateNode={isHidden:!1},e}function Od(e,t,r){return e=nn(6,e,null,t),e.lanes=r,e}function kd(e,t,r){return t=nn(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function xM(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xd(0),this.expirationTimes=xd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xd(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gp(e,t,r,n,i,a,o,s,l){return e=new xM(e,t,r,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=nn(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kh(a),e}function SM(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Va,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Xv(e){if(!e)return Ui;e=e._reactInternals;e:{if(pa(e)!==e||e.tag!==1)throw Error(de(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(zr(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(de(171))}if(e.tag===1){var r=e.type;if(zr(r))return X0(e,r,t)}return t}function jv(e,t,r,n,i,a,o,s,l){return e=gp(r,n,!0,e,i,a,o,s,l),e.context=Xv(null),r=e.current,n=Cr(),i=Ni(r),a=Jn(n,i),a.callback=t??null,Ri(r,a,i),e.current.lanes=i,Ys(e,i,n),Br(e,n),e}function Xu(e,t,r,n){var i=t.current,a=Cr(),o=Ni(i);return r=Xv(r),t.context===null?t.context=r:t.pendingContext=r,t=Jn(a,o),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Ri(i,t,o),e!==null&&(wn(e,i,o,a),nu(e,i,o)),o}function Iu(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function qg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function vp(e,t){qg(e,t),(e=e.alternate)&&qg(e,t)}function MM(){return null}var $v=typeof reportError=="function"?reportError:function(e){console.error(e)};function _p(e){this._internalRoot=e}ju.prototype.render=_p.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(de(409));Xu(e,t,null,null)};ju.prototype.unmount=_p.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;da(function(){Xu(null,e,null,null)}),t[Kn]=null}};function ju(e){this._internalRoot=e}ju.prototype.unstable_scheduleHydration=function(e){if(e){var t=E0();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Si.length&&t!==0&&t<Si[r].priority;r++);Si.splice(r,0,e),r===0&&b0(e)}};function yp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zg(){}function wM(e,t,r,n,i){if(i){if(typeof n=="function"){var a=n;n=function(){var u=Iu(o);a.call(u)}}var o=jv(t,n,e,0,null,!1,!1,"",Zg);return e._reactRootContainer=o,e[Kn]=o.current,zs(e.nodeType===8?e.parentNode:e),da(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var s=n;n=function(){var u=Iu(l);s.call(u)}}var l=gp(e,0,!1,null,null,!1,!1,"",Zg);return e._reactRootContainer=l,e[Kn]=l.current,zs(e.nodeType===8?e.parentNode:e),da(function(){Xu(t,l,r,n)}),l}function Yu(e,t,r,n,i){var a=r._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=Iu(o);s.call(l)}}Xu(t,o,e,i)}else o=wM(r,t,e,i,n);return Iu(o)}M0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=xs(t.pendingLanes);r!==0&&(Fh(t,r|1),Br(t,jt()),(gt&6)===0&&(po=jt()+500,ki()))}break;case 13:da(function(){var n=ei(e,1);if(n!==null){var i=Cr();wn(n,e,1,i)}}),vp(e,1)}};zh=function(e){if(e.tag===13){var t=ei(e,134217728);if(t!==null){var r=Cr();wn(t,e,134217728,r)}vp(e,134217728)}};w0=function(e){if(e.tag===13){var t=Ni(e),r=ei(e,t);if(r!==null){var n=Cr();wn(r,e,t,n)}vp(e,t)}};E0=function(){return xt};T0=function(e,t){var r=xt;try{return xt=e,t()}finally{xt=r}};Jd=function(e,t,r){switch(t){case"input":if(Wd(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Fu(n);if(!i)throw Error(de(90));r0(n),Wd(n,i)}}}break;case"textarea":i0(e,r);break;case"select":t=r.value,t!=null&&eo(e,!!r.multiple,t,!1)}};d0=hp;h0=da;var EM={usingClientEntryPoint:!1,Events:[Zs,$a,Fu,u0,c0,hp]},gs={findFiberByHostInstance:ra,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},TM={bundleType:gs.bundleType,version:gs.version,rendererPackageName:gs.rendererPackageName,rendererConfig:gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ri.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=m0(e),e===null?null:e.stateNode},findFiberByHostInstance:gs.findFiberByHostInstance||MM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(vs=__REACT_DEVTOOLS_GLOBAL_HOOK__,!vs.isDisabled&&vs.supportsFiber))try{Uu=vs.inject(TM),On=vs}catch{}var vs;Yr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EM;Yr.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yp(t))throw Error(de(200));return SM(e,t,null,r)};Yr.createRoot=function(e,t){if(!yp(e))throw Error(de(299));var r=!1,n="",i=$v;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=gp(e,1,!1,null,null,r,!1,n,i),e[Kn]=t.current,zs(e.nodeType===8?e.parentNode:e),new _p(t)};Yr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(de(188)):(e=Object.keys(e).join(","),Error(de(268,e)));return e=m0(t),e=e===null?null:e.stateNode,e};Yr.flushSync=function(e){return da(e)};Yr.hydrate=function(e,t,r){if(!$u(t))throw Error(de(200));return Yu(null,e,t,!0,r)};Yr.hydrateRoot=function(e,t,r){if(!yp(e))throw Error(de(405));var n=r!=null&&r.hydratedSources||null,i=!1,a="",o=$v;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=jv(t,null,e,1,r??null,i,!1,a,o),e[Kn]=t.current,zs(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new ju(t)};Yr.render=function(e,t,r){if(!$u(t))throw Error(de(200));return Yu(null,e,t,!1,r)};Yr.unmountComponentAtNode=function(e){if(!$u(e))throw Error(de(40));return e._reactRootContainer?(da(function(){Yu(null,null,e,!1,function(){e._reactRootContainer=null,e[Kn]=null})}),!0):!1};Yr.unstable_batchedUpdates=hp;Yr.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!$u(r))throw Error(de(200));if(e==null||e._reactInternals===void 0)throw Error(de(38));return Yu(e,t,r,!1,n)};Yr.version="18.3.1-next-f1338f8080-20240426"});var Jv=jn((dC,Zv)=>{"use strict";function qv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qv)}catch(e){console.error(e)}}qv(),Zv.exports=Yv()});var Kv=jn(xp=>{"use strict";var Qv=Jv();xp.createRoot=Qv.createRoot,xp.hydrateRoot=Qv.hydrateRoot;var hC});var t1=jn(qu=>{"use strict";var bM=za(),AM=Symbol.for("react.element"),CM=Symbol.for("react.fragment"),RM=Object.prototype.hasOwnProperty,PM=bM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,NM={key:!0,ref:!0,__self:!0,__source:!0};function e1(e,t,r){var n,i={},a=null,o=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)RM.call(t,n)&&!NM.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:AM,type:e,key:a,ref:o,props:i,_owner:PM.current}}qu.Fragment=CM;qu.jsx=e1;qu.jsxs=e1});var hr=jn((mC,r1)=>{"use strict";r1.exports=t1()});var tx=qt(Kv());var Zu=qt(za()),Sp=qt(hr());var LM=()=>window.location.hash.slice(1).split("?")[0]||"/";function n1({children:e}){let[,t]=Zu.default.useState(0);Zu.default.useEffect(()=>{let i=()=>t(a=>a+1);return window.addEventListener("hashchange",i),()=>window.removeEventListener("hashchange",i)},[]);let r=Zu.default.Children.toArray(e);return(r.find(i=>i.props.path===LM())||r[0]).props.element}var Ju=()=>null,fa=({to:e,...t})=>(0,Sp.jsx)("a",{href:"#"+e,...t});var bl=qt(za());var $e={bride:"Aastha",groom:"Mayank",brideFull:"Aastha Agrawal",groomFull:"Mayank Singhal",brideHi:"\u0906\u0938\u094D\u0925\u093E",groomHi:"\u092E\u092F\u0902\u0915",brideSurnameHi:"\u0905\u0917\u094D\u0930\u0935\u093E\u0932",groomSurnameHi:"\u0938\u093F\u0902\u0918\u0932",weddingDate:"2026-11-22",venueName:"Agrasen Bhawan",venueNameHi:"\u0905\u0917\u094D\u0930\u0938\u0947\u0928 \u092D\u0935\u0928",venueCity:"Rourkela, Odisha",mapsQuery:"Agrasen Bhawan Rourkela",events:[{id:"sangeet",name:"Sangeet",hi:"\u0938\u0902\u0917\u0940\u0924",date:"2026-11-21",time:"7:30 PM",note:"An evening of songs, dance and family.",icon:"note",venue:"Maheswari Bhawan"},{id:"baraat",name:"Baraat & Jaimala",hi:"\u092C\u093E\u0930\u093E\u0924",date:"2026-11-22",time:"6:30 PM",note:"The groom arrives. The garlands are exchanged.",icon:"diya",venue:"Agrasen Bhawan"},{id:"pheras",name:"Pheras",hi:"\u092B\u0947\u0930\u0947",date:"2026-11-22",time:"9:00 PM",note:"Seven vows around the sacred fire.",icon:"flame",venue:"Agrasen Bhawan"}],countdownTo:"2026-11-22T18:30:00+05:30",family:"The Agrawal and Singhal families"};function Fi(e){let t=new Date(e+"T12:00:00+05:30"),r=n=>t.toLocaleDateString("en-IN",{timeZone:"Asia/Kolkata",...n});return{weekday:r({weekday:"long"}),day:r({day:"numeric"}),month:r({month:"long"}),monthShort:r({month:"short"}),year:r({year:"numeric"})}}function Qu(){return"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent($e.mapsQuery)}function Ku(){let e=$e.events[$e.events.length-2],r=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Wedding//EN","BEGIN:VEVENT","UID:aastha-mayank-wedding@invite","DTSTAMP:20261001T000000Z","DTSTART;TZID=Asia/Kolkata:"+"20261122T183000","DTEND;TZID=Asia/Kolkata:20261122T233000",`SUMMARY:${$e.brideFull.split(" ")[0]} weds ${$e.groom} (${e.name})`,`LOCATION:${$e.venueName}\\, ${$e.venueCity}`,"END:VEVENT","END:VCALENDAR"];return"data:text/calendar;charset=utf-8,"+encodeURIComponent(r.join(`\r
`))}var $t=qt(za());var ft=qt(hr());function Tn(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296}}function IM(){let[e,t]=(0,$t.useState)(()=>typeof window<"u"&&!!window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches);return(0,$t.useEffect)(()=>{if(!window.matchMedia)return;let r=window.matchMedia("(prefers-reduced-motion: reduce)"),n=()=>t(r.matches);return r.addEventListener?.("change",n),()=>r.removeEventListener?.("change",n)},[]),e}var o1=e=>Math.min(1,Math.max(0,e)),i1=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,UM=e=>e*e*(.6+.4*e),a1=e=>1-Math.pow(1-e,3),Qs=(e,t,r,n)=>n(o1((e-t)/(r-t)));function ec(){let e=()=>{let n=typeof window<"u"?new URLSearchParams(window.location.search).get("H"):null;if(n)return parseInt(n,10);if(typeof window<"u"&&window.top===window.self&&!n)return Math.max(520,window.innerHeight);let i=typeof window<"u"&&window.screen&&window.screen.height||800,a=typeof window<"u"&&window.innerWidth||390;return Math.round(Math.max(500,Math.min(i-250,a*2,840)))},[t,r]=(0,$t.useState)(e);return(0,$t.useEffect)(()=>{let n=()=>r(e());return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),t}function tc(e=6200){let t=typeof window<"u"?new URLSearchParams(window.location.search):new URLSearchParams,r=IM(),n=t.get("skip")!==null,i=t.get("p"),[a,o]=(0,$t.useState)(n?"done":"idle"),[s,l]=(0,$t.useState)(n),u=(0,$t.useRef)(null),c=(0,$t.useRef)(0),p=y=>{let _=u.current;if(!_)return;let v=_.style;v.setProperty("--p",String(y)),v.setProperty("--door",String(Qs(y,.06,.4,i1))),v.setProperty("--cam",String(Qs(y,.16,.98,UM))),v.setProperty("--glow",String(Qs(y,.3,.9,i1))),v.setProperty("--fade",String(Qs(y,.84,1,a1))),v.setProperty("--ui",String(1-Qs(y,0,.12,a1)))};return(0,$t.useEffect)(()=>{r&&a==="idle"&&(o("done"),l(!0))},[r,a]),(0,$t.useEffect)(()=>{a==="idle"&&i!==null&&p(parseFloat(i))},[a,i]),(0,$t.useEffect)(()=>()=>cancelAnimationFrame(c.current),[]),{state:a,ready:s,ref:u,start:()=>{if(a!=="idle")return;o("opening");let y=performance.now(),_=!1,v=d=>{let m=o1((d-y)/e);p(m),m>.86&&!_&&(_=!0,l(!0)),m<1?c.current=requestAnimationFrame(v):o("done")};c.current=requestAnimationFrame(v)},skip:()=>{cancelAnimationFrame(c.current),p(1),l(!0),o("done")}}}function DM(e){let[t,r]=(0,$t.useState)(()=>Date.now());(0,$t.useEffect)(()=>{let a=setInterval(()=>r(Date.now()),1e3);return()=>clearInterval(a)},[]);let n=Math.max(0,new Date(e).getTime()-t),i=Math.floor(n/1e3);return{days:Math.floor(i/86400),hours:Math.floor(i%86400/3600),minutes:Math.floor(i%3600/60),seconds:i%60,done:n===0}}function rc({cls:e}){let t=DM($e.countdownTo),r=[["Days",t.days],["Hours",t.hours],["Minutes",t.minutes],["Seconds",t.seconds]];return(0,ft.jsx)("div",{className:e,role:"timer","aria-label":`${t.days} days, ${t.hours} hours, ${t.minutes} minutes and ${t.seconds} seconds until the wedding`,children:r.map(([n,i])=>(0,ft.jsxs)("div",{className:"cd-cell",children:[(0,ft.jsx)("span",{className:"cd-num","aria-hidden":"true",children:String(i).padStart(2,"0")}),(0,ft.jsx)("span",{className:"cd-label","aria-hidden":"true",children:n})]},n))})}function pr({children:e,className:t="",delay:r=0,as:n="div"}){let i=(0,$t.useRef)(null),[a,o]=(0,$t.useState)(!1);return(0,$t.useEffect)(()=>{let s=i.current;if(!s)return;if(!("IntersectionObserver"in window)){o(!0);return}let l=new IntersectionObserver(u=>u.forEach(c=>{c.isIntersecting&&(o(!0),l.disconnect())}),{threshold:.12});return l.observe(s),()=>l.disconnect()},[]),(0,ft.jsx)(n,{ref:i,className:`reveal ${a?"in":""} ${t}`,style:{transitionDelay:`${r}ms`},children:e})}function nc({count:e=22,kind:t="petal",seed:r=7}){let n=(0,$t.useMemo)(()=>{let i=Tn(r);return Array.from({length:e},()=>({l:i()*100,d:i()*-20,t:12+i()*14,s:6+i()*10,x:(i()-.5)*120,rot:i()*360,o:.35+i()*.5}))},[e,r]);return(0,ft.jsx)("div",{className:`drift drift-${t}`,"aria-hidden":"true",children:n.map((i,a)=>(0,ft.jsx)("i",{style:{left:`${i.l}%`,animationDelay:`${i.d}s`,animationDuration:`${i.t}s`,width:i.s,height:i.s*(t==="petal"?1.4:1),"--dx":`${i.x}px`,"--r":`${i.rot}deg`,opacity:i.o}},a))})}function Ks({name:e}){let t={fill:"none",stroke:"currentColor",strokeWidth:1.4,strokeLinecap:"round",strokeLinejoin:"round"},r={leaf:(0,ft.jsxs)(ft.Fragment,{children:[(0,ft.jsx)("path",{d:"M6 26C6 14 14 7 26 6c0 12-7 20-20 20z",...t}),(0,ft.jsx)("path",{d:"M6 26L19 13",...t})]}),sun:(0,ft.jsxs)(ft.Fragment,{children:[(0,ft.jsx)("circle",{cx:"16",cy:"16",r:"5",...t}),Array.from({length:8},(n,i)=>{let a=i*Math.PI/4;return(0,ft.jsx)("path",{d:`M${16+Math.cos(a)*8.5} ${16+Math.sin(a)*8.5}L${16+Math.cos(a)*12} ${16+Math.sin(a)*12}`,...t},i)})]}),note:(0,ft.jsxs)(ft.Fragment,{children:[(0,ft.jsx)("path",{d:"M12 22V7l12-3v15",...t}),(0,ft.jsx)("circle",{cx:"9.5",cy:"22",r:"2.6",...t}),(0,ft.jsx)("circle",{cx:"21.5",cy:"19",r:"2.6",...t})]}),diya:(0,ft.jsxs)(ft.Fragment,{children:[(0,ft.jsx)("path",{d:"M5 17c0 5 5 8 11 8s11-3 11-8z",...t}),(0,ft.jsx)("path",{d:"M16 15c-3-3-2-6 0-9 2 3 3 6 0 9z",...t})]}),flame:(0,ft.jsxs)(ft.Fragment,{children:[(0,ft.jsx)("path",{d:"M16 28c-6 0-9-4-9-8 0-5 5-7 5-13 4 2 6 5 6 8 2-1 3-3 3-5 3 3 4 6 4 10 0 5-4 8-9 8z",...t}),(0,ft.jsx)("path",{d:"M16 28c-2.5 0-4-1.8-4-4 0-2.5 3-4 4-7 2 2 4 4 4 7 0 2.2-1.5 4-4 4z",...t})]}),pin:(0,ft.jsxs)(ft.Fragment,{children:[(0,ft.jsx)("path",{d:"M16 29s9-8.5 9-15a9 9 0 10-18 0c0 6.5 9 15 9 15z",...t}),(0,ft.jsx)("circle",{cx:"16",cy:"14",r:"3.4",...t})]})};return(0,ft.jsx)("svg",{viewBox:"0 0 32 32",width:"32",height:"32","aria-hidden":"true",children:r[e]})}var U=qt(hr()),At=730,ut=600;function sr(e,t,r,n,i,a=!0){let o=n-i;return`M${e-t} ${r}V${n}C${e-t} ${n-.55*o} ${e-t*.3} ${i+.3*o} ${e} ${i}C${e+t*.3} ${i+.3*o} ${e+t} ${n-.55*o} ${e+t} ${n}V${r}${a?"Z":""}`}var el=(e,t,r)=>`M${e-r} ${t}C${e-r} ${t-r*.95} ${e-r*.25} ${t-r*1.05} ${e} ${t-r*1.65}C${e+r*.25} ${t-r*1.05} ${e+r} ${t-r*.95} ${e+r} ${t}Z`;function l1({x:e,y:t,s:r=1}){return(0,U.jsxs)("g",{stroke:"#f4c75a",fill:"#f4c75a",children:[(0,U.jsx)("line",{x1:e,y1:t,x2:e,y2:t-20*r,strokeWidth:2*r}),(0,U.jsx)("circle",{cx:e,cy:t-24*r,r:4.5*r,stroke:"none"}),(0,U.jsx)("circle",{cx:e,cy:t-31*r,r:2.4*r,stroke:"none"})]})}function s1({x:e,y:t,s:r=1}){let n=34*r;return(0,U.jsxs)("g",{children:[(0,U.jsx)("path",{d:el(e,t-38*r,n*.62),fill:"url(#rDome)",stroke:"#f4c75a",strokeWidth:1.2}),(0,U.jsx)(l1,{x:e,y:t-38*r-n*.62*1.65,s:r*.7}),(0,U.jsx)("rect",{x:e-n*.7,y:t-40*r,width:n*1.4,height:4*r,fill:"#f4c75a"}),[-1,-.33,.33,1].map((i,a)=>(0,U.jsx)("rect",{x:e+i*n*.62-2*r,y:t-36*r,width:4*r,height:36*r,fill:"#8c2230",stroke:"#f4c75a",strokeWidth:.6},a)),(0,U.jsx)("rect",{x:e-n*.7,y:t-2,width:n*1.4,height:4*r,fill:"#f4c75a"})]})}function u1(){let e=Tn(11),t=Array.from({length:190},()=>({x:-500+e()*2200,y:-200+e()*720,s:.6+e()*1.6,d:e()*5,t:2+e()*4}));return(0,U.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,U.jsxs)("defs",{children:[(0,U.jsxs)("linearGradient",{id:"rSky",gradientUnits:"userSpaceOnUse",x1:"0",y1:"0",x2:"0",y2:"900",children:[(0,U.jsx)("stop",{offset:"0",stopColor:"#14020a"}),(0,U.jsx)("stop",{offset:"0.35",stopColor:"#3a0714"}),(0,U.jsx)("stop",{offset:"0.62",stopColor:"#7d1a1c"}),(0,U.jsx)("stop",{offset:"0.8",stopColor:"#c8561f"}),(0,U.jsx)("stop",{offset:"1",stopColor:"#f0a23a"})]}),(0,U.jsxs)("radialGradient",{id:"rMoon",children:[(0,U.jsx)("stop",{offset:"0",stopColor:"#ffe9a8",stopOpacity:"0.9"}),(0,U.jsx)("stop",{offset:"1",stopColor:"#ffe9a8",stopOpacity:"0"})]}),(0,U.jsxs)("mask",{id:"rCres",children:[(0,U.jsx)("rect",{width:"1200",height:"900",fill:"#000"}),(0,U.jsx)("circle",{cx:"930",cy:"170",r:"34",fill:"#fff"}),(0,U.jsx)("circle",{cx:"948",cy:"160",r:"30",fill:"#000"})]})]}),(0,U.jsx)("rect",{x:"-2000",y:"-2000",width:"5200",height:"5400",fill:"url(#rSky)"}),t.map((r,n)=>(0,U.jsx)("circle",{className:"twinkle",cx:r.x,cy:r.y,r:r.s,fill:"#ffe7a6",style:{animationDelay:`${r.d}s`,animationDuration:`${r.t}s`}},n)),(0,U.jsx)("circle",{cx:"930",cy:"170",r:"120",fill:"url(#rMoon)",opacity:"0.5"}),(0,U.jsx)("rect",{width:"1200",height:"900",fill:"#ffe9a8",mask:"url(#rCres)"})]})}function c1(){let e=Tn(5),t=[],r=-900,n=0;for(;r<2100;){let i=50+e()*90,a=120+e()*170,o=640-a,s=e();t.push((0,U.jsx)("rect",{x:r,y:o,width:i,height:a+100,fill:"#3a0a16"},"b"+n)),s<.45?t.push((0,U.jsx)("path",{d:el(r+i/2,o,i*.38),fill:"#3a0a16"},"d"+n)):s<.7&&t.push((0,U.jsxs)("g",{children:[(0,U.jsx)("rect",{x:r+i/2-4,y:o-70,width:"8",height:"70",fill:"#3a0a16"}),(0,U.jsx)("path",{d:el(r+i/2,o-70,9),fill:"#3a0a16"})]},"m"+n)),e()<.6&&t.push((0,U.jsx)("rect",{className:"flick",x:r+i*.3,y:o+24,width:"7",height:"12",rx:"3",fill:"#ffc45a",opacity:"0.8",style:{animationDelay:`${e()*4}s`}},"w"+n)),r+=i+2+e()*8,n++}return(0,U.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,U.jsx)("defs",{children:(0,U.jsxs)("linearGradient",{id:"rHaze",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,U.jsx)("stop",{offset:"0.5",stopColor:"#f0a23a",stopOpacity:"0"}),(0,U.jsx)("stop",{offset:"1",stopColor:"#f0a23a",stopOpacity:"0.45"})]})}),(0,U.jsx)("g",{opacity:"0.95",children:t}),(0,U.jsx)("rect",{x:"-1500",y:"420",width:"4200",height:"320",fill:"url(#rHaze)"})]})}function d1(){let n=i=>{let s=i===1?870:330,l=i===1?870:-660,u=990;return(0,U.jsxs)("g",{children:[(0,U.jsx)("rect",{x:l,y:"470",width:u,height:At-470,fill:"url(#rWall)"}),(0,U.jsx)("rect",{x:l,y:"470",width:u,height:"8",fill:"#f4c75a"}),Array.from({length:Math.floor(u/15)},(c,p)=>(0,U.jsx)("rect",{x:l+p*15+2,y:"458",width:"9",height:"12",fill:"#5a1220",stroke:"#f4c75a",strokeWidth:"0.6"},p)),Array.from({length:15},(c,p)=>{let h=i===1?s+66*p+33:s-66*p-33;return(0,U.jsxs)("g",{children:[(0,U.jsx)("path",{d:sr(h,22,690,590,540),fill:"#ffb347",opacity:"0.92"}),(0,U.jsx)("path",{d:sr(h,22,690,590,540),fill:"none",stroke:"#f4c75a",strokeWidth:"2.5"}),(0,U.jsx)("path",{d:sr(h,31,690,590,528,!1),fill:"none",stroke:"#f4c75a",strokeWidth:"1",opacity:"0.7"}),(0,U.jsx)("path",{d:sr(h,14,690,600,565),fill:"#7b1a10",opacity:"0.55"})]},p)}),(0,U.jsx)("rect",{x:l,y:At-36,width:u,height:"6",fill:"#f4c75a",opacity:"0.8"}),[60,270,560].map((c,p)=>(0,U.jsx)(s1,{x:i===1?870+c:330-c,y:"458",s:1.15},p))]})};return(0,U.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,U.jsxs)("defs",{children:[(0,U.jsxs)("linearGradient",{id:"rWall",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,U.jsx)("stop",{offset:"0",stopColor:"#7a1626"}),(0,U.jsx)("stop",{offset:"1",stopColor:"#4a0b18"})]}),(0,U.jsxs)("linearGradient",{id:"rDome",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,U.jsx)("stop",{offset:"0",stopColor:"#ffd77a"}),(0,U.jsx)("stop",{offset:"0.55",stopColor:"#d99a2b"}),(0,U.jsx)("stop",{offset:"1",stopColor:"#8b4c10"})]}),(0,U.jsxs)("radialGradient",{id:"rInner",cx:"0.5",cy:"0.62",r:"0.65",children:[(0,U.jsx)("stop",{offset:"0",stopColor:"#fff3c4"}),(0,U.jsx)("stop",{offset:"0.35",stopColor:"#ffc55a"}),(0,U.jsx)("stop",{offset:"0.75",stopColor:"#d9732a"}),(0,U.jsx)("stop",{offset:"1",stopColor:"#7a1c14"})]}),(0,U.jsxs)("linearGradient",{id:"rFloor",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,U.jsx)("stop",{offset:"0",stopColor:"#2a0710"}),(0,U.jsx)("stop",{offset:"1",stopColor:"#12030a"})]}),(0,U.jsxs)("linearGradient",{id:"rSpill",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,U.jsx)("stop",{offset:"0",stopColor:"#ffd77a",stopOpacity:"0.95"}),(0,U.jsx)("stop",{offset:"1",stopColor:"#ffb347",stopOpacity:"0"})]}),(0,U.jsxs)("radialGradient",{id:"rLamp",children:[(0,U.jsx)("stop",{offset:"0",stopColor:"#fff6cf"}),(0,U.jsx)("stop",{offset:"0.4",stopColor:"#ffd37a",stopOpacity:"0.8"}),(0,U.jsx)("stop",{offset:"1",stopColor:"#ffb347",stopOpacity:"0"})]}),(0,U.jsxs)("mask",{id:"rHole",maskUnits:"userSpaceOnUse",x:"-2000",y:"-1000",width:"5200",height:"3000",children:[(0,U.jsx)("rect",{x:"-2000",y:"-1000",width:"5200",height:"3000",fill:"#fff"}),(0,U.jsx)("path",{d:sr(ut,150,At,400,262),fill:"#000"})]}),(0,U.jsx)("clipPath",{id:"rClipHole",children:(0,U.jsx)("path",{d:sr(ut,150,At,400,262)})})]}),(0,U.jsx)("rect",{x:"-2000",y:At-4,width:"5200",height:"1400",fill:"url(#rFloor)"}),(0,U.jsxs)("g",{clipPath:"url(#rClipHole)",children:[(0,U.jsx)("rect",{x:"440",y:"240",width:"320",height:"500",fill:"url(#rInner)"}),[1,.78,.58,.42].map((i,a)=>(0,U.jsx)("path",{d:sr(ut,150*.82*i,At-40+a*6,410-a*4,306+(1-i)*140),fill:"none",stroke:"#7a1c14",strokeWidth:4-a*.7,opacity:.55-a*.06},a)),[-1,1].map(i=>[0,1,2].map(a=>(0,U.jsx)("rect",{x:ut+i*(118-a*26)-5+(i<0,0),y:420+a*22,width:"10",height:300-a*40,fill:"#5b1210",opacity:.5-a*.1},i+""+a))),(0,U.jsx)("circle",{className:"flick",cx:ut,cy:"355",r:"30",fill:"url(#rLamp)"}),(0,U.jsx)("circle",{cx:ut,cy:"355",r:"5",fill:"#fff6cf"}),(0,U.jsx)("path",{d:`M${ut-150} ${At} L${ut+150} ${At} L${ut+110} ${At-70} L${ut-110} ${At-70}Z`,fill:"#ffe08a",opacity:"0.35"})]}),(0,U.jsxs)("g",{mask:"url(#rHole)",children:[n(1),n(-1),[330,820].map(i=>(0,U.jsxs)("g",{children:[(0,U.jsx)("rect",{x:i,y:"130",width:"50",height:At-130,fill:"url(#rWall)"}),(0,U.jsx)("rect",{x:i,y:"130",width:"50",height:"6",fill:"#f4c75a"}),[0,1,2,3].map(a=>(0,U.jsx)("path",{d:sr(i+25,10,230+a*120,205+a*120,188+a*120),fill:"#ffb347",className:"flick",style:{animationDelay:`${a*.7}s`},opacity:"0.85"},a)),(0,U.jsx)(s1,{x:i+25,y:"130",s:1.1})]},i)),(0,U.jsx)("rect",{x:"380",y:"150",width:"440",height:At-150,fill:"url(#rWall)"}),(0,U.jsx)("rect",{x:"380",y:"150",width:"440",height:"8",fill:"#f4c75a"}),(0,U.jsx)("rect",{x:"380",y:"164",width:"440",height:"3",fill:"#f4c75a",opacity:"0.6"}),Array.from({length:27},(i,a)=>(0,U.jsx)("rect",{x:382+a*16.2,y:"138",width:"9",height:"12",fill:"#5a1220",stroke:"#f4c75a",strokeWidth:"0.6"},a)),(0,U.jsx)("path",{d:el(ut,138,56),fill:"url(#rDome)",stroke:"#f4c75a",strokeWidth:"1.4"}),(0,U.jsx)("path",{d:el(ut,138,56),fill:"none",stroke:"#8b4c10",strokeWidth:"1",opacity:"0.4",transform:"translate(0 6) scale(1 1)"}),(0,U.jsx)(l1,{x:ut,y:138-56*1.65+4,s:1.5}),[-4,-3,-2,-1,1,2,3,4].map(i=>(0,U.jsxs)("g",{children:[(0,U.jsx)("path",{d:sr(ut+i*46-(Math.abs(i)===1,0),15,250,218,190),fill:"#ffb347",className:"flick",style:{animationDelay:`${Math.abs(i)*.5}s`},opacity:"0.9"}),(0,U.jsx)("path",{d:sr(ut+i*46,20,250,218,182,!1),fill:"none",stroke:"#f4c75a",strokeWidth:"1.4"})]},i)),[-1,1].map(i=>(0,U.jsxs)("g",{children:[(0,U.jsx)("rect",{x:i<0?400:780,y:"330",width:"20",height:"360",fill:"none"}),[0,1,2].map(a=>(0,U.jsx)("path",{d:sr(ut+i*215,22,470+a*90,430+a*90,395+a*90),fill:"#3a0813",stroke:"#f4c75a",strokeWidth:"1.6"},a))]},i)),(0,U.jsx)("rect",{x:"380",y:"620",width:"440",height:"5",fill:"#f4c75a",opacity:"0.85"}),(0,U.jsx)("rect",{x:"380",y:At-28,width:"440",height:"28",fill:"#2f0911"}),(0,U.jsx)("rect",{x:"380",y:At-28,width:"440",height:"3",fill:"#f4c75a"})]}),(0,U.jsx)("path",{d:sr(ut,150,At,400,262),fill:"none",stroke:"#f4c75a",strokeWidth:"6"}),(0,U.jsx)("path",{d:sr(ut,164,At,392,232),fill:"none",stroke:"#f4c75a",strokeWidth:"2",opacity:"0.8"}),(0,U.jsx)("path",{d:sr(ut,176,At,386,206),fill:"none",stroke:"#c98a2b",strokeWidth:"1.2",opacity:"0.7"}),Array.from({length:26},(i,a)=>{let o=a/25,s=Math.PI*(.02+.96*o),l=ut-Math.cos(s)*164,u=392-Math.sin(s)*160*.98;return(0,U.jsx)("circle",{cx:l,cy:u,r:"2.4",fill:"#ffd77a",className:"twinkle",style:{animationDelay:`${a%7*.3}s`,animationDuration:"2.4s"}},a)}),(0,U.jsx)("path",{d:`M${ut-14} 232Q${ut} 200 ${ut+14} 232Q${ut} 218 ${ut-14} 232Z`,fill:"#f4c75a"}),[0,1,2].map(i=>(0,U.jsx)("path",{d:`M${ut-190-i*24} ${At+i*14}H${ut+190+i*24}V${At+14+i*14}H${ut-190-i*24}Z`,fill:i%2?"#2a0710":"#3a0b17",stroke:"#f4c75a",strokeWidth:"1",opacity:"0.95"},i))]})}function h1(){return(0,U.jsx)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:(0,U.jsx)("path",{d:`M${ut-150} ${At} L${ut+150} ${At} L${ut+420} 900 L${ut-420} 900Z`,fill:"url(#rSpill)",opacity:"0.85"})})}function p1(){let e=(t,r,n,i,a)=>Array.from({length:t},(o,s)=>(0,U.jsx)("path",{transform:`rotate(${360/t*s})`,d:`M0 ${-r}Q${i} ${(-r-n)/2} 0 ${-n}Q${-i} ${(-r-n)/2} 0 ${-r}Z`,fill:a},s));return(0,U.jsx)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:(0,U.jsxs)("g",{transform:`translate(${ut} ${At+62}) scale(1 0.17)`,opacity:"0.95",children:[(0,U.jsx)("circle",{r:"250",fill:"#2a0710",opacity:"0.6"}),e(24,130,245,22,"#e8590c"),e(24,110,190,16,"#ffb938"),e(16,70,140,20,"#b3122e"),e(12,30,90,14,"#ffe08a"),(0,U.jsx)("circle",{r:"26",fill:"#ffd77a"}),(0,U.jsx)("circle",{r:"12",fill:"#b3122e"})]})})}function f1({x:e,y:t,r,i:n}){let i=["#ff9d1c","#ffb938","#e8590c","#ffa726"][n%4];return(0,U.jsxs)("g",{children:[(0,U.jsx)("circle",{cx:e,cy:t,r,fill:i}),(0,U.jsx)("circle",{cx:e,cy:t,r:r*.62,fill:i,stroke:"#fff3c4",strokeOpacity:"0.45",strokeWidth:"0.8"}),(0,U.jsx)("circle",{cx:e,cy:t,r:r*.28,fill:"#ffe08a",opacity:"0.8"})]})}function OM({x:e,len:t,seed:r,delay:n}){let i=Tn(r),a=Math.floor(t/15);return(0,U.jsxs)("g",{className:"sway",style:{animationDelay:`${n}s`},children:[(0,U.jsx)("line",{x1:e,y1:"0",x2:e,y2:t,stroke:"#6b3b12",strokeWidth:"1"}),Array.from({length:a},(o,s)=>(0,U.jsx)(f1,{x:e+(i()-.5)*2,y:10+s*15,r:7+i()*2,i:s+r},s)),(0,U.jsx)("path",{d:`M${e-7} ${t+6}Q${e} ${t+26} ${e+7} ${t+6}Z`,fill:"#b3122e"})]})}function m1(){let e=Tn(3),t=(n,i,a,o,s,l)=>{let u=Tn(l),c=Math.floor((i-n)/15);return(0,U.jsxs)("g",{children:[(0,U.jsx)("path",{d:`M${n} ${a}Q${(n+i)/2} ${a+o*2} ${i} ${a}`,fill:"none",stroke:"#6b3b12",strokeWidth:"1.2"}),Array.from({length:c+1},(p,h)=>{let f=h/c,y=n+(i-n)*f,_=(1-f)*(1-f)*a+2*f*(1-f)*(a+o*2)+f*f*a;return(0,U.jsx)(f1,{x:y,y:_+3+u()*1.5,r:8+u()*2,i:h},h)})]},s)},r=(n,i,a,o)=>(0,U.jsxs)("g",{className:"swing",style:{animationDelay:`${a}s`},children:[(0,U.jsx)("line",{x1:n,y1:"0",x2:n,y2:i,stroke:"#c9952b",strokeWidth:"1.4"}),(0,U.jsx)("circle",{cx:n,cy:i+46,r:"64",fill:"url(#rLamp)",opacity:"0.6",className:"flick"}),(0,U.jsx)("path",{d:`M${n-6} ${i}h12l10 12h-32z`,fill:"#c9952b"}),(0,U.jsx)("path",{d:`M${n-22} ${i+12}Q${n-34} ${i+46} ${n-20} ${i+80}H${n+20}Q${n+34} ${i+46} ${n+22} ${i+12}Z`,fill:"#e0481e",stroke:"#ffd77a",strokeWidth:"1.6"}),(0,U.jsx)("path",{d:`M${n-8} ${i+12}Q${n-14} ${i+46} ${n-8} ${i+80}M${n+8} ${i+12}Q${n+14} ${i+46} ${n+8} ${i+80}`,stroke:"#ffd77a",strokeWidth:"1",fill:"none"}),(0,U.jsx)("rect",{x:n-20,y:i+80,width:"40",height:"5",fill:"#c9952b"}),(0,U.jsx)("path",{d:`M${n} ${i+85}v22`,stroke:"#c9952b",strokeWidth:"1.4"}),(0,U.jsx)("path",{d:`M${n-5} ${i+107}h10l-5 10z`,fill:"#ffd77a"})]},o);return(0,U.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,U.jsx)("defs",{children:(0,U.jsxs)("radialGradient",{id:"rLamp",children:[(0,U.jsx)("stop",{offset:"0",stopColor:"#fff6cf"}),(0,U.jsx)("stop",{offset:"0.4",stopColor:"#ffd37a",stopOpacity:"0.8"}),(0,U.jsx)("stop",{offset:"1",stopColor:"#ffb347",stopOpacity:"0"})]})}),t(330,870,-6,30,"a",21),t(330,600,20,26,"b",22),t(600,870,20,26,"c",23),[380,420,460,500,540,660,700,740,780,820].map((n,i)=>(0,U.jsx)(OM,{x:n,len:46+i*37%60,seed:i+40,delay:i%5*.4},n)),r(345,0,0,"l1"),r(855,0,.9,"l2")]})}function g1(){return(0,U.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,U.jsx)("defs",{children:(0,U.jsxs)("radialGradient",{id:"rGlow",children:[(0,U.jsx)("stop",{offset:"0",stopColor:"#ffd37a",stopOpacity:"0.9"}),(0,U.jsx)("stop",{offset:"1",stopColor:"#ffb347",stopOpacity:"0"})]})}),[440,500,560,640,700,760].map((t,r)=>{let n=838+r%2*8;return(0,U.jsxs)("g",{children:[(0,U.jsx)("circle",{className:"flick",cx:t,cy:n-8,r:"34",fill:"url(#rGlow)",style:{animationDelay:`${r*.3}s`}}),(0,U.jsx)("path",{d:`M${t-16} ${n}Q${t} ${n+16} ${t+16} ${n}Q${t+9} ${n+3} ${t} ${n+3}Q${t-9} ${n+3} ${t-16} ${n}Z`,fill:"#c25a1e",stroke:"#ffd77a",strokeWidth:"1"}),(0,U.jsx)("path",{className:"flame",d:`M${t} ${n-2}C${t-6} ${n-9} ${t-3} ${n-16} ${t} ${n-22}C${t+3} ${n-16} ${t+6} ${n-9} ${t} ${n-2}Z`,fill:"#fff1b8",style:{animationDelay:`${r*.25}s`}})]},t)})]})}function Mp({side:e}){let t="rd"+e,r=(n,i,a,o,s,l)=>Array.from({length:n},(u,c)=>(0,U.jsx)("path",{transform:`translate(${ut} 520) rotate(${360/n*c})`,d:`M0 ${-i}Q${o} ${(-i-a)/2} 0 ${-a}Q${-o} ${(-i-a)/2} 0 ${-i}Z`,fill:l,stroke:s,strokeWidth:"1.1"},c));return(0,U.jsxs)("svg",{viewBox:`${e==="l"?450:600} 250 150 480`,className:"doorsvg",preserveAspectRatio:"none","aria-hidden":"true",children:[(0,U.jsxs)("defs",{children:[(0,U.jsx)("clipPath",{id:t+"c",children:(0,U.jsx)("path",{d:sr(ut,150,At,400,262)})}),(0,U.jsxs)("linearGradient",{id:t+"g",x1:"0",y1:"0",x2:"1",y2:"0",children:[(0,U.jsx)("stop",{offset:"0",stopColor:"#5a0f1c"}),(0,U.jsx)("stop",{offset:"0.5",stopColor:"#7d1628"}),(0,U.jsx)("stop",{offset:"1",stopColor:"#4a0b16"})]}),(0,U.jsx)("pattern",{id:t+"p",width:"22",height:"22",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:(0,U.jsx)("path",{d:"M0 0H22M0 0V22",stroke:"#f4c75a",strokeWidth:"0.9",opacity:"0.38"})}),(0,U.jsxs)("radialGradient",{id:t+"b",children:[(0,U.jsx)("stop",{offset:"0",stopColor:"#fff0b0"}),(0,U.jsx)("stop",{offset:"0.6",stopColor:"#e0a53a"}),(0,U.jsx)("stop",{offset:"1",stopColor:"#8b4c10"})]})]}),(0,U.jsxs)("g",{clipPath:`url(#${t}c)`,children:[(0,U.jsx)("rect",{x:"440",y:"240",width:"320",height:"500",fill:`url(#${t}g)`}),(0,U.jsx)("path",{d:sr(ut,138,At-14,405,285),fill:`url(#${t}p)`}),(0,U.jsx)("path",{d:sr(ut,138,At-14,405,285),fill:"none",stroke:"#f4c75a",strokeWidth:"2"}),(0,U.jsx)("path",{d:sr(ut,120,At-30,410,310),fill:"none",stroke:"#f4c75a",strokeWidth:"0.9",opacity:"0.7"}),(0,U.jsx)("rect",{x:"440",y:"412",width:"320",height:"6",fill:"#f4c75a",opacity:"0.9"}),(0,U.jsx)("rect",{x:"440",y:"672",width:"320",height:"6",fill:"#f4c75a",opacity:"0.9"}),r(16,40,96,20,"#f4c75a","#8c1d2c"),r(16,24,64,11,"#f4c75a","#f4c75a"),r(8,12,36,9,"#7a1424","#ffe08a"),(0,U.jsx)("circle",{cx:ut,cy:"520",r:"100",fill:"none",stroke:"#f4c75a",strokeWidth:"1.6"}),(0,U.jsx)("circle",{cx:ut,cy:"520",r:"108",fill:"none",stroke:"#f4c75a",strokeWidth:"0.8",strokeDasharray:"2 5"}),(0,U.jsx)("circle",{cx:ut,cy:"520",r:"13",fill:`url(#${t}b)`}),[0,1,2,3].map(n=>Array.from({length:6},(i,a)=>(0,U.jsx)("circle",{cx:456+a*25,cy:430+n*0+(n<2?n*0:0)+0,r:"0"},n+"_"+a))),Array.from({length:7},(n,i)=>(0,U.jsx)("circle",{cx:462+i*22,cy:"436",r:"3",fill:"#ffd77a",opacity:.9},"s"+i)),Array.from({length:7},(n,i)=>(0,U.jsx)("circle",{cx:462+i*22,cy:"654",r:"3",fill:"#ffd77a",opacity:.9},"t"+i)),Array.from({length:7},(n,i)=>(0,U.jsx)("circle",{cx:462+i*22,cy:"696",r:"3",fill:"#ffd77a",opacity:.9},"u"+i)),[e==="l"?584:616].map(n=>(0,U.jsxs)("g",{children:[(0,U.jsx)("circle",{cx:n,cy:"560",r:"7",fill:`url(#${t}b)`}),(0,U.jsx)("circle",{cx:n,cy:"574",r:"10",fill:"none",stroke:"#f4c75a",strokeWidth:"3"})]},n)),(0,U.jsx)("rect",{x:e==="l"?592:598,y:"250",width:"10",height:"480",fill:"#2a0710",opacity:"0.5"}),(0,U.jsx)("rect",{x:"440",y:"240",width:"320",height:"500",fill:"#000",opacity:"0.12"})]})]})}var kM=0,v1=1,FM=2,I_=1,zM=2,ui=3,Yi=0,Ir=1,Bn=2,ji=0,Ho=1,Wc=2,_1=3,y1=4,BM=5,Ea=100,HM=101,VM=102,GM=103,WM=104,XM=200,jM=201,$M=202,YM=203,lf=204,uf=205,qM=206,ZM=207,JM=208,QM=209,KM=210,e2=211,t2=212,r2=213,n2=214,cf=0,df=1,hf=2,Xo=3,pf=4,ff=5,mf=6,gf=7,U_=0,i2=1,a2=2,$i=0,o2=1,s2=2,l2=3,D_=4,u2=5,c2=6,d2=7,O_=300,jo=301,$o=302,vf=303,_f=304,qc=306,Xc=1e3,Aa=1001,yf=1002,Kr=1003,h2=1004,ic=1005,Vn=1006,wp=1007,Ca=1008,fi=1009,k_=1010,F_=1011,_l=1012,nm=1013,Pa=1014,Gn=1015,Ml=1016,im=1017,am=1018,Yo=1020,z_=35902,B_=1021,H_=1022,Pn=1023,V_=1024,G_=1025,Vo=1026,qo=1027,om=1028,sm=1029,W_=1030,lm=1031,um=1033,Oc=33776,kc=33777,Fc=33778,zc=33779,xf=35840,Sf=35841,Mf=35842,wf=35843,Ef=36196,Tf=37492,bf=37496,Af=37808,Cf=37809,Rf=37810,Pf=37811,Nf=37812,Lf=37813,If=37814,Uf=37815,Df=37816,Of=37817,kf=37818,Ff=37819,zf=37820,Bf=37821,Bc=36492,Hf=36494,Vf=36495,X_=36283,Gf=36284,Wf=36285,Xf=36286,jc=2300,jf=2301,Ep=2302,x1=2400,S1=2401,M1=2402,p2=3200,f2=3201,j_=0,m2=1,Xi="",Jr="srgb",Jo="srgb-linear",Zc="linear",St="srgb",go=7680,w1=519,g2=512,v2=513,_2=514,$_=515,y2=516,x2=517,S2=518,M2=519,$f=35044,E1="300 es",ci=2e3,$c=2001,Qo=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let n=r.indexOf(t);n!==-1&&r.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let r=t.slice(0);for(let n=0,i=r.length;n<i;n++)r[n].call(this,e);e.target=null}}},Sr=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tp=Math.PI/180,Yf=180/Math.PI;function di(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sr[e&255]+Sr[e>>8&255]+Sr[e>>16&255]+Sr[e>>24&255]+"-"+Sr[t&255]+Sr[t>>8&255]+"-"+Sr[t>>16&15|64]+Sr[t>>24&255]+"-"+Sr[r&63|128]+Sr[r>>8&255]+"-"+Sr[r>>16&255]+Sr[r>>24&255]+Sr[n&255]+Sr[n>>8&255]+Sr[n>>16&255]+Sr[n>>24&255]).toLowerCase()}function fr(e,t,r){return Math.max(t,Math.min(r,e))}function w2(e,t){return(e%t+t)%t}function bp(e,t,r){return(1-r)*e+r*t}function Hn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Mt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var he=class Y_{constructor(t=0,r=0){Y_.prototype.isVector2=!0,this.x=t,this.y=r}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,r){return this.x=t,this.y=r,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let r=this.x,n=this.y,i=t.elements;return this.x=i[0]*r+i[3]*n+i[6],this.y=i[1]*r+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this}clampLength(t,r){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(r,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let r=Math.sqrt(this.lengthSq()*t.lengthSq());if(r===0)return Math.PI/2;let n=this.dot(t)/r;return Math.acos(fr(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let r=this.x-t.x,n=this.y-t.y;return r*r+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this}lerpVectors(t,r,n){return this.x=t.x+(r.x-t.x)*n,this.y=t.y+(r.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this}rotateAround(t,r){let n=Math.cos(r),i=Math.sin(r),a=this.x-t.x,o=this.y-t.y;return this.x=a*n-o*i+t.x,this.y=a*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dt=class q_{constructor(t,r,n,i,a,o,s,l,u){q_.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,r,n,i,a,o,s,l,u)}set(t,r,n,i,a,o,s,l,u){let c=this.elements;return c[0]=t,c[1]=i,c[2]=s,c[3]=r,c[4]=a,c[5]=l,c[6]=n,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let r=this.elements,n=t.elements;return r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[3],r[4]=n[4],r[5]=n[5],r[6]=n[6],r[7]=n[7],r[8]=n[8],this}extractBasis(t,r,n){return t.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let r=t.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,r){let n=t.elements,i=r.elements,a=this.elements,o=n[0],s=n[3],l=n[6],u=n[1],c=n[4],p=n[7],h=n[2],f=n[5],y=n[8],_=i[0],v=i[3],d=i[6],m=i[1],g=i[4],x=i[7],N=i[2],T=i[5],b=i[8];return a[0]=o*_+s*m+l*N,a[3]=o*v+s*g+l*T,a[6]=o*d+s*x+l*b,a[1]=u*_+c*m+p*N,a[4]=u*v+c*g+p*T,a[7]=u*d+c*x+p*b,a[2]=h*_+f*m+y*N,a[5]=h*v+f*g+y*T,a[8]=h*d+f*x+y*b,this}multiplyScalar(t){let r=this.elements;return r[0]*=t,r[3]*=t,r[6]*=t,r[1]*=t,r[4]*=t,r[7]*=t,r[2]*=t,r[5]*=t,r[8]*=t,this}determinant(){let t=this.elements,r=t[0],n=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],c=t[8];return r*o*c-r*s*u-n*a*c+n*s*l+i*a*u-i*o*l}invert(){let t=this.elements,r=t[0],n=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],c=t[8],p=c*o-s*u,h=s*l-c*a,f=u*a-o*l,y=r*p+n*h+i*f;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/y;return t[0]=p*_,t[1]=(i*u-c*n)*_,t[2]=(s*n-i*o)*_,t[3]=h*_,t[4]=(c*r-i*l)*_,t[5]=(i*a-s*r)*_,t[6]=f*_,t[7]=(n*l-u*r)*_,t[8]=(o*r-n*a)*_,this}transpose(){let t,r=this.elements;return t=r[1],r[1]=r[3],r[3]=t,t=r[2],r[2]=r[6],r[6]=t,t=r[5],r[5]=r[7],r[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let r=this.elements;return t[0]=r[0],t[1]=r[3],t[2]=r[6],t[3]=r[1],t[4]=r[4],t[5]=r[7],t[6]=r[2],t[7]=r[5],t[8]=r[8],this}setUvTransform(t,r,n,i,a,o,s){let l=Math.cos(a),u=Math.sin(a);return this.set(n*l,n*u,-n*(l*o+u*s)+o+t,-i*u,i*l,-i*(-u*o+l*s)+s+r,0,0,1),this}scale(t,r){return this.premultiply(Ap.makeScale(t,r)),this}rotate(t){return this.premultiply(Ap.makeRotation(-t)),this}translate(t,r){return this.premultiply(Ap.makeTranslation(t,r)),this}makeTranslation(t,r){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,r,0,0,1),this}makeRotation(t){let r=Math.cos(t),n=Math.sin(t);return this.set(r,-n,0,n,r,0,0,0,1),this}makeScale(t,r){return this.set(t,0,0,0,r,0,0,0,1),this}equals(t){let r=this.elements,n=t.elements;for(let i=0;i<9;i++)if(r[i]!==n[i])return!1;return!0}fromArray(t,r=0){for(let n=0;n<9;n++)this.elements[n]=t[n+r];return this}toArray(t=[],r=0){let n=this.elements;return t[r]=n[0],t[r+1]=n[1],t[r+2]=n[2],t[r+3]=n[3],t[r+4]=n[4],t[r+5]=n[5],t[r+6]=n[6],t[r+7]=n[7],t[r+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ap=new dt;function Z_(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Yc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function E2(){let e=Yc("canvas");return e.style.display="block",e}var T1={};function pl(e){e in T1||(T1[e]=!0,console.warn(e))}function T2(e,t,r){return new Promise(function(n,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,r);break;default:n()}}setTimeout(a,r)})}function b2(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function A2(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var vt={enabled:!0,workingColorSpace:Jo,spaces:{},convert:function(e,t,r){return this.enabled===!1||t===r||!t||!r||(this.spaces[t].transfer===St&&(e.r=hi(e.r),e.g=hi(e.g),e.b=hi(e.b)),this.spaces[t].primaries!==this.spaces[r].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===St&&(e.r=Go(e.r),e.g=Go(e.g),e.b=Go(e.b))),e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===Xi?Zc:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,r){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function hi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Go(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var b1=[.64,.33,.3,.6,.15,.06],A1=[.2126,.7152,.0722],C1=[.3127,.329],R1=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),P1=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);vt.define({[Jo]:{primaries:b1,whitePoint:C1,transfer:Zc,toXYZ:R1,fromXYZ:P1,luminanceCoefficients:A1,workingColorSpaceConfig:{unpackColorSpace:Jr},outputColorSpaceConfig:{drawingBufferColorSpace:Jr}},[Jr]:{primaries:b1,whitePoint:C1,transfer:St,toXYZ:R1,fromXYZ:P1,luminanceCoefficients:A1,outputColorSpaceConfig:{drawingBufferColorSpace:Jr}}});var vo,C2=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vo===void 0&&(vo=Yc("canvas")),vo.width=e.width,vo.height=e.height;let r=vo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=vo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Yc("canvas");t.width=e.width,t.height=e.height;let r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);let n=r.getImageData(0,0,e.width,e.height),i=n.data;for(let a=0;a<i.length;a++)i[a]=hi(i[a]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(hi(t[r]/255)*255):t[r]=hi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},R2=0,J_=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:R2++}),this.uuid=di(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let i;if(Array.isArray(n)){i=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?i.push(Cp(n[a].image)):i.push(Cp(n[a]))}else i=Cp(n);r.url=i}return t||(e.images[this.uuid]=r),r}};function Cp(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?C2.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var P2=0,hn=class Hc extends Qo{constructor(t=Hc.DEFAULT_IMAGE,r=Hc.DEFAULT_MAPPING,n=Aa,i=Aa,a=Vn,o=Ca,s=Pn,l=fi,u=Hc.DEFAULT_ANISOTROPY,c=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P2++}),this.uuid=di(),this.name="",this.source=new J_(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let r=t===void 0||typeof t=="string";if(!r&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),r||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==O_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xc:t.x=t.x-Math.floor(t.x);break;case Aa:t.x=t.x<0?0:1;break;case yf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xc:t.y=t.y-Math.floor(t.y);break;case Aa:t.y=t.y<0?0:1;break;case yf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=O_;hn.DEFAULT_ANISOTROPY=1;var Ct=class Q_{constructor(t=0,r=0,n=0,i=1){Q_.prototype.isVector4=!0,this.x=t,this.y=r,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,r,n,i){return this.x=t,this.y=r,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this.w=t.w+r.w,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this.z+=t.z*r,this.w+=t.w*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this.z=t.z-r.z,this.w=t.w-r.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let r=this.x,n=this.y,i=this.z,a=this.w,o=t.elements;return this.x=o[0]*r+o[4]*n+o[8]*i+o[12]*a,this.y=o[1]*r+o[5]*n+o[9]*i+o[13]*a,this.z=o[2]*r+o[6]*n+o[10]*i+o[14]*a,this.w=o[3]*r+o[7]*n+o[11]*i+o[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let r=Math.sqrt(1-t.w*t.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/r,this.y=t.y/r,this.z=t.z/r),this}setAxisAngleFromRotationMatrix(t){let r,n,i,a,o=t.elements,s=o[0],l=o[4],u=o[8],c=o[1],p=o[5],h=o[9],f=o[2],y=o[6],_=o[10];if(Math.abs(l-c)<.01&&Math.abs(u-f)<.01&&Math.abs(h-y)<.01){if(Math.abs(l+c)<.1&&Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(s+p+_-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;let d=(s+1)/2,m=(p+1)/2,g=(_+1)/2,x=(l+c)/4,N=(u+f)/4,T=(h+y)/4;return d>m&&d>g?d<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(d),i=x/n,a=N/n):m>g?m<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(m),n=x/i,a=T/i):g<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(g),n=N/a,i=T/a),this.set(n,i,a,r),this}let v=Math.sqrt((y-h)*(y-h)+(u-f)*(u-f)+(c-l)*(c-l));return Math.abs(v)<.001&&(v=1),this.x=(y-h)/v,this.y=(u-f)/v,this.z=(c-l)/v,this.w=Math.acos((s+p+_-1)/2),this}setFromMatrixPosition(t){let r=t.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this.w=r[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this.z=Math.max(t.z,Math.min(r.z,this.z)),this.w=Math.max(t.w,Math.min(r.w,this.w)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this.z=Math.max(t,Math.min(r,this.z)),this.w=Math.max(t,Math.min(r,this.w)),this}clampLength(t,r){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(r,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this.z+=(t.z-this.z)*r,this.w+=(t.w-this.w)*r,this}lerpVectors(t,r,n){return this.x=t.x+(r.x-t.x)*n,this.y=t.y+(r.y-t.y)*n,this.z=t.z+(r.z-t.z)*n,this.w=t.w+(r.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this.z=t[r+2],this.w=t[r+3],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t[r+2]=this.z,t[r+3]=this.w,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this.z=t.getZ(r),this.w=t.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},N2=class extends Qo{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);let n={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);let i=new hn(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);i.flipY=!1,i.generateMipmaps=r.generateMipmaps,i.internalFormat=r.internalFormat,this.textures=[];let a=r.count;for(let o=0;o<a;o++)this.textures[o]=i.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let n=0,i=this.textures.length;n<i;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,n=e.textures.length;r<n;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new J_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Na=class extends N2{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}},K_=class extends hn{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Kr,this.minFilter=Kr,this.wrapR=Aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},L2=class extends hn{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Kr,this.minFilter=Kr,this.wrapR=Aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ko=class{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,i,a,o){let s=r[n+0],l=r[n+1],u=r[n+2],c=r[n+3],p=i[a+0],h=i[a+1],f=i[a+2],y=i[a+3];if(o===0){e[t+0]=s,e[t+1]=l,e[t+2]=u,e[t+3]=c;return}if(o===1){e[t+0]=p,e[t+1]=h,e[t+2]=f,e[t+3]=y;return}if(c!==y||s!==p||l!==h||u!==f){let _=1-o,v=s*p+l*h+u*f+c*y,d=v>=0?1:-1,m=1-v*v;if(m>Number.EPSILON){let x=Math.sqrt(m),N=Math.atan2(x,v*d);_=Math.sin(_*N)/x,o=Math.sin(o*N)/x}let g=o*d;if(s=s*_+p*g,l=l*_+h*g,u=u*_+f*g,c=c*_+y*g,_===1-o){let x=1/Math.sqrt(s*s+l*l+u*u+c*c);s*=x,l*=x,u*=x,c*=x}}e[t]=s,e[t+1]=l,e[t+2]=u,e[t+3]=c}static multiplyQuaternionsFlat(e,t,r,n,i,a){let o=r[n],s=r[n+1],l=r[n+2],u=r[n+3],c=i[a],p=i[a+1],h=i[a+2],f=i[a+3];return e[t]=o*f+u*c+s*h-l*p,e[t+1]=s*f+u*p+l*c-o*h,e[t+2]=l*f+u*h+o*p-s*c,e[t+3]=u*f-o*c-s*p-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let r=e._x,n=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,l=o(r/2),u=o(n/2),c=o(i/2),p=s(r/2),h=s(n/2),f=s(i/2);switch(a){case"XYZ":this._x=p*u*c+l*h*f,this._y=l*h*c-p*u*f,this._z=l*u*f+p*h*c,this._w=l*u*c-p*h*f;break;case"YXZ":this._x=p*u*c+l*h*f,this._y=l*h*c-p*u*f,this._z=l*u*f-p*h*c,this._w=l*u*c+p*h*f;break;case"ZXY":this._x=p*u*c-l*h*f,this._y=l*h*c+p*u*f,this._z=l*u*f+p*h*c,this._w=l*u*c-p*h*f;break;case"ZYX":this._x=p*u*c-l*h*f,this._y=l*h*c+p*u*f,this._z=l*u*f-p*h*c,this._w=l*u*c+p*h*f;break;case"YZX":this._x=p*u*c+l*h*f,this._y=l*h*c+p*u*f,this._z=l*u*f-p*h*c,this._w=l*u*c-p*h*f;break;case"XZY":this._x=p*u*c-l*h*f,this._y=l*h*c-p*u*f,this._z=l*u*f+p*h*c,this._w=l*u*c+p*h*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,r=t[0],n=t[4],i=t[8],a=t[1],o=t[5],s=t[9],l=t[2],u=t[6],c=t[10],p=r+o+c;if(p>0){let h=.5/Math.sqrt(p+1);this._w=.25/h,this._x=(u-s)*h,this._y=(i-l)*h,this._z=(a-n)*h}else if(r>o&&r>c){let h=2*Math.sqrt(1+r-o-c);this._w=(u-s)/h,this._x=.25*h,this._y=(n+a)/h,this._z=(i+l)/h}else if(o>c){let h=2*Math.sqrt(1+o-r-c);this._w=(i-l)/h,this._x=(n+a)/h,this._y=.25*h,this._z=(s+u)/h}else{let h=2*Math.sqrt(1+c-r-o);this._w=(a-n)/h,this._x=(i+l)/h,this._y=(s+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(fr(this.dot(e),-1,1)))}rotateTowards(e,t){let r=this.angleTo(e);if(r===0)return this;let n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let r=e._x,n=e._y,i=e._z,a=e._w,o=t._x,s=t._y,l=t._z,u=t._w;return this._x=r*u+a*o+n*l-i*s,this._y=n*u+a*s+i*o-r*l,this._z=i*u+a*l+r*s-n*o,this._w=a*u-r*o-n*s-i*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let r=this._x,n=this._y,i=this._z,a=this._w,o=a*e._w+r*e._x+n*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=r,this._y=n,this._z=i,this;let s=1-o*o;if(s<=Number.EPSILON){let h=1-t;return this._w=h*a+t*this._w,this._x=h*r+t*this._x,this._y=h*n+t*this._y,this._z=h*i+t*this._z,this.normalize(),this}let l=Math.sqrt(s),u=Math.atan2(l,o),c=Math.sin((1-t)*u)/l,p=Math.sin(t*u)/l;return this._w=a*c+this._w*p,this._x=r*c+this._x*p,this._y=n*c+this._y*p,this._z=i*c+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),n=Math.sqrt(1-r),i=Math.sqrt(r);return this.set(n*Math.sin(e),n*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class ey{constructor(t=0,r=0,n=0){ey.prototype.isVector3=!0,this.x=t,this.y=r,this.z=n}set(t,r,n){return n===void 0&&(n=this.z),this.x=t,this.y=r,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this.z+=t.z*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this.z=t.z-r.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,r){return this.x=t.x*r.x,this.y=t.y*r.y,this.z=t.z*r.z,this}applyEuler(t){return this.applyQuaternion(N1.setFromEuler(t))}applyAxisAngle(t,r){return this.applyQuaternion(N1.setFromAxisAngle(t,r))}applyMatrix3(t){let r=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*r+a[3]*n+a[6]*i,this.y=a[1]*r+a[4]*n+a[7]*i,this.z=a[2]*r+a[5]*n+a[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let r=this.x,n=this.y,i=this.z,a=t.elements,o=1/(a[3]*r+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*r+a[4]*n+a[8]*i+a[12])*o,this.y=(a[1]*r+a[5]*n+a[9]*i+a[13])*o,this.z=(a[2]*r+a[6]*n+a[10]*i+a[14])*o,this}applyQuaternion(t){let r=this.x,n=this.y,i=this.z,a=t.x,o=t.y,s=t.z,l=t.w,u=2*(o*i-s*n),c=2*(s*r-a*i),p=2*(a*n-o*r);return this.x=r+l*u+o*p-s*c,this.y=n+l*c+s*u-a*p,this.z=i+l*p+a*c-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let r=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*r+a[4]*n+a[8]*i,this.y=a[1]*r+a[5]*n+a[9]*i,this.z=a[2]*r+a[6]*n+a[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this.z=Math.max(t.z,Math.min(r.z,this.z)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this.z=Math.max(t,Math.min(r,this.z)),this}clampLength(t,r){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(r,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this.z+=(t.z-this.z)*r,this}lerpVectors(t,r,n){return this.x=t.x+(r.x-t.x)*n,this.y=t.y+(r.y-t.y)*n,this.z=t.z+(r.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,r){let n=t.x,i=t.y,a=t.z,o=r.x,s=r.y,l=r.z;return this.x=i*l-a*s,this.y=a*o-n*l,this.z=n*s-i*o,this}projectOnVector(t){let r=t.lengthSq();if(r===0)return this.set(0,0,0);let n=t.dot(this)/r;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rp.copy(this).projectOnVector(t),this.sub(Rp)}reflect(t){return this.sub(Rp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let r=Math.sqrt(this.lengthSq()*t.lengthSq());if(r===0)return Math.PI/2;let n=this.dot(t)/r;return Math.acos(fr(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let r=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return r*r+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,r,n){let i=Math.sin(r)*t;return this.x=i*Math.sin(n),this.y=Math.cos(r)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,r,n){return this.x=t*Math.sin(r),this.y=n,this.z=t*Math.cos(r),this}setFromMatrixPosition(t){let r=t.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(t){let r=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=r,this.y=n,this.z=i,this}setFromMatrixColumn(t,r){return this.fromArray(t.elements,r*4)}setFromMatrix3Column(t,r){return this.fromArray(t.elements,r*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this.z=t[r+2],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t[r+2]=this.z,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this.z=t.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,r=Math.random()*2-1,n=Math.sqrt(1-r*r);return this.x=n*Math.cos(t),this.y=r,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rp=new I,N1=new Ko,Ia=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let r=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let r=e.geometry;if(r!==void 0){let i=r.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=i.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bn):bn.fromBufferAttribute(i,a),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ac.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ac.copy(r.boundingBox)),ac.applyMatrix4(e.matrixWorld),this.union(ac)}let n=e.children;for(let i=0,a=n.length;i<a;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tl),oc.subVectors(this.max,tl),_o.subVectors(e.a,tl),yo.subVectors(e.b,tl),xo.subVectors(e.c,tl),zi.subVectors(yo,_o),Bi.subVectors(xo,yo),ma.subVectors(_o,xo);let t=[0,-zi.z,zi.y,0,-Bi.z,Bi.y,0,-ma.z,ma.y,zi.z,0,-zi.x,Bi.z,0,-Bi.x,ma.z,0,-ma.x,-zi.y,zi.x,0,-Bi.y,Bi.x,0,-ma.y,ma.x,0];return!Pp(t,_o,yo,xo,oc)||(t=[1,0,0,0,1,0,0,0,1],!Pp(t,_o,yo,xo,oc))?!1:(sc.crossVectors(zi,Bi),t=[sc.x,sc.y,sc.z],Pp(t,_o,yo,xo,oc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ni=[new I,new I,new I,new I,new I,new I,new I,new I],bn=new I,ac=new Ia,_o=new I,yo=new I,xo=new I,zi=new I,Bi=new I,ma=new I,tl=new I,oc=new I,sc=new I,ga=new I;function Pp(e,t,r,n,i){for(let a=0,o=e.length-3;a<=o;a+=3){ga.fromArray(e,a);let s=i.x*Math.abs(ga.x)+i.y*Math.abs(ga.y)+i.z*Math.abs(ga.z),l=t.dot(ga),u=r.dot(ga),c=n.dot(ga);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>s)return!1}return!0}var I2=new Ia,rl=new I,Np=new I,es=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let r=this.center;t!==void 0?r.copy(t):I2.setFromPoints(e).getCenter(r);let n=0;for(let i=0,a=e.length;i<a;i++)n=Math.max(n,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rl.subVectors(e,this.center);let t=rl.lengthSq();if(t>this.radius*this.radius){let r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(rl,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Np.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rl.copy(e.center).add(Np)),this.expandByPoint(rl.copy(e.center).sub(Np))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ii=new I,Lp=new I,lc=new I,Hi=new I,Ip=new I,uc=new I,Up=new I,ty=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){Lp.copy(e).add(t).multiplyScalar(.5),lc.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(Lp);let i=e.distanceTo(t)*.5,a=-this.direction.dot(lc),o=Hi.dot(this.direction),s=-Hi.dot(lc),l=Hi.lengthSq(),u=Math.abs(1-a*a),c,p,h,f;if(u>0)if(c=a*s-o,p=a*o-s,f=i*u,c>=0)if(p>=-f)if(p<=f){let y=1/u;c*=y,p*=y,h=c*(c+a*p+2*o)+p*(a*c+p+2*s)+l}else p=i,c=Math.max(0,-(a*p+o)),h=-c*c+p*(p+2*s)+l;else p=-i,c=Math.max(0,-(a*p+o)),h=-c*c+p*(p+2*s)+l;else p<=-f?(c=Math.max(0,-(-a*i+o)),p=c>0?-i:Math.min(Math.max(-i,-s),i),h=-c*c+p*(p+2*s)+l):p<=f?(c=0,p=Math.min(Math.max(-i,-s),i),h=p*(p+2*s)+l):(c=Math.max(0,-(a*i+o)),p=c>0?i:Math.min(Math.max(-i,-s),i),h=-c*c+p*(p+2*s)+l);else p=a>0?-i:i,c=Math.max(0,-(a*p+o)),h=-c*c+p*(p+2*s)+l;return r&&r.copy(this.origin).addScaledVector(this.direction,c),n&&n.copy(Lp).addScaledVector(lc,p),h}intersectSphere(e,t){ii.subVectors(e.center,this.origin);let r=ii.dot(this.direction),n=ii.dot(ii)-r*r,i=e.radius*e.radius;if(n>i)return null;let a=Math.sqrt(i-n),o=r-a,s=r+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){let r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,i,a,o,s,l=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,p=this.origin;return l>=0?(r=(e.min.x-p.x)*l,n=(e.max.x-p.x)*l):(r=(e.max.x-p.x)*l,n=(e.min.x-p.x)*l),u>=0?(i=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(i=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),r>a||i>n||((i>r||isNaN(r))&&(r=i),(a<n||isNaN(n))&&(n=a),c>=0?(o=(e.min.z-p.z)*c,s=(e.max.z-p.z)*c):(o=(e.max.z-p.z)*c,s=(e.min.z-p.z)*c),r>s||o>n)||((o>r||r!==r)&&(r=o),(s<n||n!==n)&&(n=s),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,r,n,i){Ip.subVectors(t,e),uc.subVectors(r,e),Up.crossVectors(Ip,uc);let a=this.direction.dot(Up),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hi.subVectors(this.origin,e);let s=o*this.direction.dot(uc.crossVectors(Hi,uc));if(s<0)return null;let l=o*this.direction.dot(Ip.cross(Hi));if(l<0||s+l>a)return null;let u=-o*Hi.dot(Up);return u<0?null:this.at(u/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rt=class qf{constructor(t,r,n,i,a,o,s,l,u,c,p,h,f,y,_,v){qf.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,r,n,i,a,o,s,l,u,c,p,h,f,y,_,v)}set(t,r,n,i,a,o,s,l,u,c,p,h,f,y,_,v){let d=this.elements;return d[0]=t,d[4]=r,d[8]=n,d[12]=i,d[1]=a,d[5]=o,d[9]=s,d[13]=l,d[2]=u,d[6]=c,d[10]=p,d[14]=h,d[3]=f,d[7]=y,d[11]=_,d[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qf().fromArray(this.elements)}copy(t){let r=this.elements,n=t.elements;return r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[3],r[4]=n[4],r[5]=n[5],r[6]=n[6],r[7]=n[7],r[8]=n[8],r[9]=n[9],r[10]=n[10],r[11]=n[11],r[12]=n[12],r[13]=n[13],r[14]=n[14],r[15]=n[15],this}copyPosition(t){let r=this.elements,n=t.elements;return r[12]=n[12],r[13]=n[13],r[14]=n[14],this}setFromMatrix3(t){let r=t.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(t,r,n){return t.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,r,n){return this.set(t.x,r.x,n.x,0,t.y,r.y,n.y,0,t.z,r.z,n.z,0,0,0,0,1),this}extractRotation(t){let r=this.elements,n=t.elements,i=1/So.setFromMatrixColumn(t,0).length(),a=1/So.setFromMatrixColumn(t,1).length(),o=1/So.setFromMatrixColumn(t,2).length();return r[0]=n[0]*i,r[1]=n[1]*i,r[2]=n[2]*i,r[3]=0,r[4]=n[4]*a,r[5]=n[5]*a,r[6]=n[6]*a,r[7]=0,r[8]=n[8]*o,r[9]=n[9]*o,r[10]=n[10]*o,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(t){let r=this.elements,n=t.x,i=t.y,a=t.z,o=Math.cos(n),s=Math.sin(n),l=Math.cos(i),u=Math.sin(i),c=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let h=o*c,f=o*p,y=s*c,_=s*p;r[0]=l*c,r[4]=-l*p,r[8]=u,r[1]=f+y*u,r[5]=h-_*u,r[9]=-s*l,r[2]=_-h*u,r[6]=y+f*u,r[10]=o*l}else if(t.order==="YXZ"){let h=l*c,f=l*p,y=u*c,_=u*p;r[0]=h+_*s,r[4]=y*s-f,r[8]=o*u,r[1]=o*p,r[5]=o*c,r[9]=-s,r[2]=f*s-y,r[6]=_+h*s,r[10]=o*l}else if(t.order==="ZXY"){let h=l*c,f=l*p,y=u*c,_=u*p;r[0]=h-_*s,r[4]=-o*p,r[8]=y+f*s,r[1]=f+y*s,r[5]=o*c,r[9]=_-h*s,r[2]=-o*u,r[6]=s,r[10]=o*l}else if(t.order==="ZYX"){let h=o*c,f=o*p,y=s*c,_=s*p;r[0]=l*c,r[4]=y*u-f,r[8]=h*u+_,r[1]=l*p,r[5]=_*u+h,r[9]=f*u-y,r[2]=-u,r[6]=s*l,r[10]=o*l}else if(t.order==="YZX"){let h=o*l,f=o*u,y=s*l,_=s*u;r[0]=l*c,r[4]=_-h*p,r[8]=y*p+f,r[1]=p,r[5]=o*c,r[9]=-s*c,r[2]=-u*c,r[6]=f*p+y,r[10]=h-_*p}else if(t.order==="XZY"){let h=o*l,f=o*u,y=s*l,_=s*u;r[0]=l*c,r[4]=-p,r[8]=u*c,r[1]=h*p+_,r[5]=o*c,r[9]=f*p-y,r[2]=y*p-f,r[6]=s*c,r[10]=_*p+h}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(t){return this.compose(U2,t,D2)}lookAt(t,r,n){let i=this.elements;return qr.subVectors(t,r),qr.lengthSq()===0&&(qr.z=1),qr.normalize(),Vi.crossVectors(n,qr),Vi.lengthSq()===0&&(Math.abs(n.z)===1?qr.x+=1e-4:qr.z+=1e-4,qr.normalize(),Vi.crossVectors(n,qr)),Vi.normalize(),cc.crossVectors(qr,Vi),i[0]=Vi.x,i[4]=cc.x,i[8]=qr.x,i[1]=Vi.y,i[5]=cc.y,i[9]=qr.y,i[2]=Vi.z,i[6]=cc.z,i[10]=qr.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,r){let n=t.elements,i=r.elements,a=this.elements,o=n[0],s=n[4],l=n[8],u=n[12],c=n[1],p=n[5],h=n[9],f=n[13],y=n[2],_=n[6],v=n[10],d=n[14],m=n[3],g=n[7],x=n[11],N=n[15],T=i[0],b=i[4],P=i[8],w=i[12],S=i[1],C=i[5],k=i[9],W=i[13],V=i[2],Z=i[6],$=i[10],ae=i[14],Y=i[3],oe=i[7],ve=i[11],We=i[15];return a[0]=o*T+s*S+l*V+u*Y,a[4]=o*b+s*C+l*Z+u*oe,a[8]=o*P+s*k+l*$+u*ve,a[12]=o*w+s*W+l*ae+u*We,a[1]=c*T+p*S+h*V+f*Y,a[5]=c*b+p*C+h*Z+f*oe,a[9]=c*P+p*k+h*$+f*ve,a[13]=c*w+p*W+h*ae+f*We,a[2]=y*T+_*S+v*V+d*Y,a[6]=y*b+_*C+v*Z+d*oe,a[10]=y*P+_*k+v*$+d*ve,a[14]=y*w+_*W+v*ae+d*We,a[3]=m*T+g*S+x*V+N*Y,a[7]=m*b+g*C+x*Z+N*oe,a[11]=m*P+g*k+x*$+N*ve,a[15]=m*w+g*W+x*ae+N*We,this}multiplyScalar(t){let r=this.elements;return r[0]*=t,r[4]*=t,r[8]*=t,r[12]*=t,r[1]*=t,r[5]*=t,r[9]*=t,r[13]*=t,r[2]*=t,r[6]*=t,r[10]*=t,r[14]*=t,r[3]*=t,r[7]*=t,r[11]*=t,r[15]*=t,this}determinant(){let t=this.elements,r=t[0],n=t[4],i=t[8],a=t[12],o=t[1],s=t[5],l=t[9],u=t[13],c=t[2],p=t[6],h=t[10],f=t[14],y=t[3],_=t[7],v=t[11],d=t[15];return y*(+a*l*p-i*u*p-a*s*h+n*u*h+i*s*f-n*l*f)+_*(+r*l*f-r*u*h+a*o*h-i*o*f+i*u*c-a*l*c)+v*(+r*u*p-r*s*f-a*o*p+n*o*f+a*s*c-n*u*c)+d*(-i*s*c-r*l*p+r*s*h+i*o*p-n*o*h+n*l*c)}transpose(){let t=this.elements,r;return r=t[1],t[1]=t[4],t[4]=r,r=t[2],t[2]=t[8],t[8]=r,r=t[6],t[6]=t[9],t[9]=r,r=t[3],t[3]=t[12],t[12]=r,r=t[7],t[7]=t[13],t[13]=r,r=t[11],t[11]=t[14],t[14]=r,this}setPosition(t,r,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=r,i[14]=n),this}invert(){let t=this.elements,r=t[0],n=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],c=t[8],p=t[9],h=t[10],f=t[11],y=t[12],_=t[13],v=t[14],d=t[15],m=p*v*u-_*h*u+_*l*f-s*v*f-p*l*d+s*h*d,g=y*h*u-c*v*u-y*l*f+o*v*f+c*l*d-o*h*d,x=c*_*u-y*p*u+y*s*f-o*_*f-c*s*d+o*p*d,N=y*p*l-c*_*l-y*s*h+o*_*h+c*s*v-o*p*v,T=r*m+n*g+i*x+a*N;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/T;return t[0]=m*b,t[1]=(_*h*a-p*v*a-_*i*f+n*v*f+p*i*d-n*h*d)*b,t[2]=(s*v*a-_*l*a+_*i*u-n*v*u-s*i*d+n*l*d)*b,t[3]=(p*l*a-s*h*a-p*i*u+n*h*u+s*i*f-n*l*f)*b,t[4]=g*b,t[5]=(c*v*a-y*h*a+y*i*f-r*v*f-c*i*d+r*h*d)*b,t[6]=(y*l*a-o*v*a-y*i*u+r*v*u+o*i*d-r*l*d)*b,t[7]=(o*h*a-c*l*a+c*i*u-r*h*u-o*i*f+r*l*f)*b,t[8]=x*b,t[9]=(y*p*a-c*_*a-y*n*f+r*_*f+c*n*d-r*p*d)*b,t[10]=(o*_*a-y*s*a+y*n*u-r*_*u-o*n*d+r*s*d)*b,t[11]=(c*s*a-o*p*a-c*n*u+r*p*u+o*n*f-r*s*f)*b,t[12]=N*b,t[13]=(c*_*i-y*p*i+y*n*h-r*_*h-c*n*v+r*p*v)*b,t[14]=(y*s*i-o*_*i-y*n*l+r*_*l+o*n*v-r*s*v)*b,t[15]=(o*p*i-c*s*i+c*n*l-r*p*l-o*n*h+r*s*h)*b,this}scale(t){let r=this.elements,n=t.x,i=t.y,a=t.z;return r[0]*=n,r[4]*=i,r[8]*=a,r[1]*=n,r[5]*=i,r[9]*=a,r[2]*=n,r[6]*=i,r[10]*=a,r[3]*=n,r[7]*=i,r[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,r=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(r,n,i))}makeTranslation(t,r,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,r,0,0,1,n,0,0,0,1),this}makeRotationX(t){let r=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,r,-n,0,0,n,r,0,0,0,0,1),this}makeRotationY(t){let r=Math.cos(t),n=Math.sin(t);return this.set(r,0,n,0,0,1,0,0,-n,0,r,0,0,0,0,1),this}makeRotationZ(t){let r=Math.cos(t),n=Math.sin(t);return this.set(r,-n,0,0,n,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,r){let n=Math.cos(r),i=Math.sin(r),a=1-n,o=t.x,s=t.y,l=t.z,u=a*o,c=a*s;return this.set(u*o+n,u*s-i*l,u*l+i*s,0,u*s+i*l,c*s+n,c*l-i*o,0,u*l-i*s,c*l+i*o,a*l*l+n,0,0,0,0,1),this}makeScale(t,r,n){return this.set(t,0,0,0,0,r,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,r,n,i,a,o){return this.set(1,n,a,0,t,1,o,0,r,i,1,0,0,0,0,1),this}compose(t,r,n){let i=this.elements,a=r._x,o=r._y,s=r._z,l=r._w,u=a+a,c=o+o,p=s+s,h=a*u,f=a*c,y=a*p,_=o*c,v=o*p,d=s*p,m=l*u,g=l*c,x=l*p,N=n.x,T=n.y,b=n.z;return i[0]=(1-(_+d))*N,i[1]=(f+x)*N,i[2]=(y-g)*N,i[3]=0,i[4]=(f-x)*T,i[5]=(1-(h+d))*T,i[6]=(v+m)*T,i[7]=0,i[8]=(y+g)*b,i[9]=(v-m)*b,i[10]=(1-(h+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,r,n){let i=this.elements,a=So.set(i[0],i[1],i[2]).length(),o=So.set(i[4],i[5],i[6]).length(),s=So.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),t.x=i[12],t.y=i[13],t.z=i[14],An.copy(this);let l=1/a,u=1/o,c=1/s;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=c,An.elements[9]*=c,An.elements[10]*=c,r.setFromRotationMatrix(An),n.x=a,n.y=o,n.z=s,this}makePerspective(t,r,n,i,a,o,s=ci){let l=this.elements,u=2*a/(r-t),c=2*a/(n-i),p=(r+t)/(r-t),h=(n+i)/(n-i),f,y;if(s===ci)f=-(o+a)/(o-a),y=-2*o*a/(o-a);else if(s===$c)f=-o/(o-a),y=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,r,n,i,a,o,s=ci){let l=this.elements,u=1/(r-t),c=1/(n-i),p=1/(o-a),h=(r+t)*u,f=(n+i)*c,y,_;if(s===ci)y=(o+a)*p,_=-2*p;else if(s===$c)y=a*p,_=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let r=this.elements,n=t.elements;for(let i=0;i<16;i++)if(r[i]!==n[i])return!1;return!0}fromArray(t,r=0){for(let n=0;n<16;n++)this.elements[n]=t[n+r];return this}toArray(t=[],r=0){let n=this.elements;return t[r]=n[0],t[r+1]=n[1],t[r+2]=n[2],t[r+3]=n[3],t[r+4]=n[4],t[r+5]=n[5],t[r+6]=n[6],t[r+7]=n[7],t[r+8]=n[8],t[r+9]=n[9],t[r+10]=n[10],t[r+11]=n[11],t[r+12]=n[12],t[r+13]=n[13],t[r+14]=n[14],t[r+15]=n[15],t}},So=new I,An=new Rt,U2=new I(0,0,0),D2=new I(1,1,1),Vi=new I,cc=new I,qr=new I,L1=new Rt,I1=new Ko,qi=class ry{constructor(t=0,r=0,n=0,i=ry.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=r,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,r,n,i=this._order){return this._x=t,this._y=r,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,r=this._order,n=!0){let i=t.elements,a=i[0],o=i[4],s=i[8],l=i[1],u=i[5],c=i[9],p=i[2],h=i[6],f=i[10];switch(r){case"XYZ":this._y=Math.asin(fr(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-fr(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(s,f),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(fr(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-fr(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(fr(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(s,f));break;case"XZY":this._z=Math.asin(-fr(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,r,n){return L1.makeRotationFromQuaternion(t),this.setFromRotationMatrix(L1,r,n)}setFromVector3(t,r=this._order){return this.set(t.x,t.y,t.z,r)}reorder(t){return I1.setFromEuler(this),this.setFromQuaternion(I1,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],r=0){return t[r]=this._x,t[r+1]=this._y,t[r+2]=this._z,t[r+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qi.DEFAULT_ORDER="XYZ";var ny=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},O2=0,U1=new I,Mo=new Ko,ai=new Rt,dc=new I,nl=new I,k2=new I,F2=new Ko,D1=new I(1,0,0),O1=new I(0,1,0),k1=new I(0,0,1),F1={type:"added"},z2={type:"removed"},wo={type:"childadded",child:null},Dp={type:"childremoved",child:null},tr=class Vc extends Qo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:O2++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vc.DEFAULT_UP.clone();let t=new I,r=new qi,n=new Ko,i=new I(1,1,1);function a(){n.setFromEuler(r,!1)}function o(){r.setFromQuaternion(n,void 0,!1)}r._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Rt},normalMatrix:{value:new dt}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=Vc.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vc.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ny,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,r){this.quaternion.setFromAxisAngle(t,r)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,r){return Mo.setFromAxisAngle(t,r),this.quaternion.multiply(Mo),this}rotateOnWorldAxis(t,r){return Mo.setFromAxisAngle(t,r),this.quaternion.premultiply(Mo),this}rotateX(t){return this.rotateOnAxis(D1,t)}rotateY(t){return this.rotateOnAxis(O1,t)}rotateZ(t){return this.rotateOnAxis(k1,t)}translateOnAxis(t,r){return U1.copy(t).applyQuaternion(this.quaternion),this.position.add(U1.multiplyScalar(r)),this}translateX(t){return this.translateOnAxis(D1,t)}translateY(t){return this.translateOnAxis(O1,t)}translateZ(t){return this.translateOnAxis(k1,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(t,r,n){t.isVector3?dc.copy(t):dc.set(t,r,n);let i=this.parent;this.updateWorldMatrix(!0,!1),nl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(nl,dc,this.up):ai.lookAt(dc,nl,this.up),this.quaternion.setFromRotationMatrix(ai),i&&(ai.extractRotation(i.matrixWorld),Mo.setFromRotationMatrix(ai),this.quaternion.premultiply(Mo.invert()))}add(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(F1),wo.child=t,this.dispatchEvent(wo),wo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let r=this.children.indexOf(t);return r!==-1&&(t.parent=null,this.children.splice(r,1),t.dispatchEvent(z2),Dp.child=t,this.dispatchEvent(Dp),Dp.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(F1),wo.child=t,this.dispatchEvent(wo),wo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,r){if(this[t]===r)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,r);if(a!==void 0)return a}}getObjectsByProperty(t,r,n=[]){this[t]===r&&n.push(this);let i=this.children;for(let a=0,o=i.length;a<o;a++)i[a].getObjectsByProperty(t,r,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,t,k2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,F2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let r=this.matrixWorld.elements;return t.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(t){t(this);let r=this.children;for(let n=0,i=r.length;n<i;n++)r[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let r=this.children;for(let n=0,i=r.length;n<i;n++)r[n].traverseVisible(t)}traverseAncestors(t){let r=this.parent;r!==null&&(t(r),r.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let r=this.children;for(let n=0,i=r.length;n<i;n++)r[n].updateMatrixWorld(t)}updateWorldMatrix(t,r){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),r===!0){let i=this.children;for(let a=0,o=i.length;a<o;a++)i[a].updateWorldMatrix(!1,!0)}}toJSON(t){let r=t===void 0||typeof t=="string",n={};r&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(t.geometries,this.geometry);let s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){let l=s.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){let p=l[u];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let s=[];for(let l=0,u=this.material.length;l<u;l++)s.push(a(t.materials,this.material[l]));i.material=s}else i.material=a(t.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){let l=this.animations[s];i.animations.push(a(t.animations,l))}}if(r){let s=o(t.geometries),l=o(t.materials),u=o(t.textures),c=o(t.images),p=o(t.shapes),h=o(t.skeletons),f=o(t.animations),y=o(t.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),y.length>0&&(n.nodes=y)}return n.object=i,n;function o(s){let l=[];for(let u in s){let c=s[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,r=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),r===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};tr.DEFAULT_UP=new I(0,1,0);tr.DEFAULT_MATRIX_AUTO_UPDATE=!0;tr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Cn=new I,oi=new I,Op=new I,si=new I,Eo=new I,To=new I,z1=new I,kp=new I,Fp=new I,zp=new I,Bp=new Ct,Hp=new Ct,Vp=new Ct,Oo=class ko{constructor(t=new I,r=new I,n=new I){this.a=t,this.b=r,this.c=n}static getNormal(t,r,n,i){i.subVectors(n,r),Cn.subVectors(t,r),i.cross(Cn);let a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(t,r,n,i,a){Cn.subVectors(i,r),oi.subVectors(n,r),Op.subVectors(t,r);let o=Cn.dot(Cn),s=Cn.dot(oi),l=Cn.dot(Op),u=oi.dot(oi),c=oi.dot(Op),p=o*u-s*s;if(p===0)return a.set(0,0,0),null;let h=1/p,f=(u*l-s*c)*h,y=(o*c-s*l)*h;return a.set(1-f-y,y,f)}static containsPoint(t,r,n,i){return this.getBarycoord(t,r,n,i,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,r,n,i,a,o,s,l){return this.getBarycoord(t,r,n,i,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,si.x),l.addScaledVector(o,si.y),l.addScaledVector(s,si.z),l)}static getInterpolatedAttribute(t,r,n,i,a,o){return Bp.setScalar(0),Hp.setScalar(0),Vp.setScalar(0),Bp.fromBufferAttribute(t,r),Hp.fromBufferAttribute(t,n),Vp.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Bp,a.x),o.addScaledVector(Hp,a.y),o.addScaledVector(Vp,a.z),o}static isFrontFacing(t,r,n,i){return Cn.subVectors(n,r),oi.subVectors(t,r),Cn.cross(oi).dot(i)<0}set(t,r,n){return this.a.copy(t),this.b.copy(r),this.c.copy(n),this}setFromPointsAndIndices(t,r,n,i){return this.a.copy(t[r]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,r,n,i){return this.a.fromBufferAttribute(t,r),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Cn.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ko.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,r){return ko.getBarycoord(t,this.a,this.b,this.c,r)}getInterpolation(t,r,n,i,a){return ko.getInterpolation(t,this.a,this.b,this.c,r,n,i,a)}containsPoint(t){return ko.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ko.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,r){let n=this.a,i=this.b,a=this.c,o,s;Eo.subVectors(i,n),To.subVectors(a,n),kp.subVectors(t,n);let l=Eo.dot(kp),u=To.dot(kp);if(l<=0&&u<=0)return r.copy(n);Fp.subVectors(t,i);let c=Eo.dot(Fp),p=To.dot(Fp);if(c>=0&&p<=c)return r.copy(i);let h=l*p-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),r.copy(n).addScaledVector(Eo,o);zp.subVectors(t,a);let f=Eo.dot(zp),y=To.dot(zp);if(y>=0&&f<=y)return r.copy(a);let _=f*u-l*y;if(_<=0&&u>=0&&y<=0)return s=u/(u-y),r.copy(n).addScaledVector(To,s);let v=c*y-f*p;if(v<=0&&p-c>=0&&f-y>=0)return z1.subVectors(a,i),s=(p-c)/(p-c+(f-y)),r.copy(i).addScaledVector(z1,s);let d=1/(v+_+h);return o=_*d,s=h*d,r.copy(n).addScaledVector(Eo,o).addScaledVector(To,s)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},iy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},hc={h:0,s:0,l:0};function Gp(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*6*r:r<1/2?t:r<2/3?e+(t-e)*6*(2/3-r):e}var st=class{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,n=vt.workingColorSpace){return this.r=e,this.g=t,this.b=r,vt.toWorkingColorSpace(this,n),this}setHSL(e,t,r,n=vt.workingColorSpace){if(e=w2(e,1),t=fr(t,0,1),r=fr(r,0,1),t===0)this.r=this.g=this.b=r;else{let i=r<=.5?r*(1+t):r+t-r*t,a=2*r-i;this.r=Gp(a,i,e+1/3),this.g=Gp(a,i,e),this.b=Gp(a,i,e-1/3)}return vt.toWorkingColorSpace(this,n),this}setStyle(e,t=Jr){function r(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let i=n[1],a=i.length;if(a===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jr){let r=iy[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Go(e.r),this.g=Go(e.g),this.b=Go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jr){return vt.fromWorkingColorSpace(Mr.copy(this),e),Math.round(fr(Mr.r*255,0,255))*65536+Math.round(fr(Mr.g*255,0,255))*256+Math.round(fr(Mr.b*255,0,255))}getHexString(e=Jr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(Mr.copy(this),t);let r=Mr.r,n=Mr.g,i=Mr.b,a=Math.max(r,n,i),o=Math.min(r,n,i),s,l,u=(o+a)/2;if(o===a)s=0,l=0;else{let c=a-o;switch(l=u<=.5?c/(a+o):c/(2-a-o),a){case r:s=(n-i)/c+(n<i?6:0);break;case n:s=(i-r)/c+2;break;case i:s=(r-n)/c+4;break}s/=6}return e.h=s,e.s=l,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(Mr.copy(this),t),e.r=Mr.r,e.g=Mr.g,e.b=Mr.b,e}getStyle(e=Jr){vt.fromWorkingColorSpace(Mr.copy(this),e);let t=Mr.r,r=Mr.g,n=Mr.b;return e!==Jr?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(hc);let r=bp(Gi.h,hc.h,t),n=bp(Gi.s,hc.s,t),i=bp(Gi.l,hc.l,t);return this.setHSL(r,n,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,r=this.g,n=this.b,i=e.elements;return this.r=i[0]*t+i[3]*r+i[6]*n,this.g=i[1]*t+i[4]*r+i[7]*n,this.b=i[2]*t+i[5]*r+i[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mr=new st;st.NAMES=iy;var B2=0,Ua=class extends Qo{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B2++}),this.uuid=di(),this.name="",this.blending=Ho,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lf,this.blendDst=uf,this.blendEquation=Ea,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=w1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ho&&(r.blending=this.blending),this.side!==Yi&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==lf&&(r.blendSrc=this.blendSrc),this.blendDst!==uf&&(r.blendDst=this.blendDst),this.blendEquation!==Ea&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Xo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==w1&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==go&&(r.stencilFail=this.stencilFail),this.stencilZFail!==go&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==go&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(i){let a=[];for(let o in i){let s=i[o];delete s.metadata,a.push(s)}return a}if(t){let i=n(e.textures),a=n(e.images);i.length>0&&(r.textures=i),a.length>0&&(r.images=a)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,r=null;if(t!==null){let n=t.length;r=new Array(n);for(let i=0;i!==n;++i)r[i]=t[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Fn=class extends Ua{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=U_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jt=new I,pc=new he,Ur=class{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=$f,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,i=this.itemSize;n<i;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)pc.fromBufferAttribute(this,t),pc.applyMatrix3(e),this.setXY(t,pc.x,pc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Hn(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Mt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),r=Mt(r,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),r=Mt(r,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$f&&(e.usage=this.usage),e}},ay=class extends Ur{constructor(e,t,r){super(new Uint16Array(e),t,r)}},oy=class extends Ur{constructor(e,t,r){super(new Uint32Array(e),t,r)}},wt=class extends Ur{constructor(e,t,r){super(new Float32Array(e),t,r)}},H2=0,ln=new Rt,Wp=new tr,bo=new I,Zr=new Ia,il=new Ia,lr=new I,wr=class sy extends Qo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:H2++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Z_(t)?oy:ay)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,r){return this.attributes[t]=r,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,r,n=0){this.groups.push({start:t,count:r,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,r){this.drawRange.start=t,this.drawRange.count=r}applyMatrix4(t){let r=this.attributes.position;r!==void 0&&(r.applyMatrix4(t),r.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let a=new dt().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,r,n){return ln.makeTranslation(t,r,n),this.applyMatrix4(ln),this}scale(t,r,n){return ln.makeScale(t,r,n),this.applyMatrix4(ln),this}lookAt(t){return Wp.lookAt(t),Wp.updateMatrix(),this.applyMatrix4(Wp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bo).negate(),this.translate(bo.x,bo.y,bo.z),this}setFromPoints(t){let r=this.getAttribute("position");if(r===void 0){let n=[];for(let i=0,a=t.length;i<a;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new wt(n,3))}else{for(let n=0,i=r.count;n<i;n++){let a=t[n];r.setXYZ(n,a.x,a.y,a.z||0)}t.length>r.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),r.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ia);let t=this.attributes.position,r=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),r)for(let n=0,i=r.length;n<i;n++){let a=r[n];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(lr.addVectors(this.boundingBox.min,Zr.min),this.boundingBox.expandByPoint(lr),lr.addVectors(this.boundingBox.max,Zr.max),this.boundingBox.expandByPoint(lr)):(this.boundingBox.expandByPoint(Zr.min),this.boundingBox.expandByPoint(Zr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es);let t=this.attributes.position,r=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Zr.setFromBufferAttribute(t),r)for(let a=0,o=r.length;a<o;a++){let s=r[a];il.setFromBufferAttribute(s),this.morphTargetsRelative?(lr.addVectors(Zr.min,il.min),Zr.expandByPoint(lr),lr.addVectors(Zr.max,il.max),Zr.expandByPoint(lr)):(Zr.expandByPoint(il.min),Zr.expandByPoint(il.max))}Zr.getCenter(n);let i=0;for(let a=0,o=t.count;a<o;a++)lr.fromBufferAttribute(t,a),i=Math.max(i,n.distanceToSquared(lr));if(r)for(let a=0,o=r.length;a<o;a++){let s=r[a],l=this.morphTargetsRelative;for(let u=0,c=s.count;u<c;u++)lr.fromBufferAttribute(s,u),l&&(bo.fromBufferAttribute(t,u),lr.add(bo)),i=Math.max(i,n.distanceToSquared(lr))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,r=this.attributes;if(t===null||r.position===void 0||r.normal===void 0||r.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=r.position,i=r.normal,a=r.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ur(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),s=[],l=[];for(let P=0;P<n.count;P++)s[P]=new I,l[P]=new I;let u=new I,c=new I,p=new I,h=new he,f=new he,y=new he,_=new I,v=new I;function d(P,w,S){u.fromBufferAttribute(n,P),c.fromBufferAttribute(n,w),p.fromBufferAttribute(n,S),h.fromBufferAttribute(a,P),f.fromBufferAttribute(a,w),y.fromBufferAttribute(a,S),c.sub(u),p.sub(u),f.sub(h),y.sub(h);let C=1/(f.x*y.y-y.x*f.y);isFinite(C)&&(_.copy(c).multiplyScalar(y.y).addScaledVector(p,-f.y).multiplyScalar(C),v.copy(p).multiplyScalar(f.x).addScaledVector(c,-y.x).multiplyScalar(C),s[P].add(_),s[w].add(_),s[S].add(_),l[P].add(v),l[w].add(v),l[S].add(v))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let P=0,w=m.length;P<w;++P){let S=m[P],C=S.start,k=S.count;for(let W=C,V=C+k;W<V;W+=3)d(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let g=new I,x=new I,N=new I,T=new I;function b(P){N.fromBufferAttribute(i,P),T.copy(N);let w=s[P];g.copy(w),g.sub(N.multiplyScalar(N.dot(w))).normalize(),x.crossVectors(T,w);let S=x.dot(l[P])<0?-1:1;o.setXYZW(P,g.x,g.y,g.z,S)}for(let P=0,w=m.length;P<w;++P){let S=m[P],C=S.start,k=S.count;for(let W=C,V=C+k;W<V;W+=3)b(t.getX(W+0)),b(t.getX(W+1)),b(t.getX(W+2))}}computeVertexNormals(){let t=this.index,r=this.getAttribute("position");if(r!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ur(new Float32Array(r.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let i=new I,a=new I,o=new I,s=new I,l=new I,u=new I,c=new I,p=new I;if(t)for(let h=0,f=t.count;h<f;h+=3){let y=t.getX(h+0),_=t.getX(h+1),v=t.getX(h+2);i.fromBufferAttribute(r,y),a.fromBufferAttribute(r,_),o.fromBufferAttribute(r,v),c.subVectors(o,a),p.subVectors(i,a),c.cross(p),s.fromBufferAttribute(n,y),l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,v),s.add(c),l.add(c),u.add(c),n.setXYZ(y,s.x,s.y,s.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(v,u.x,u.y,u.z)}else for(let h=0,f=r.count;h<f;h+=3)i.fromBufferAttribute(r,h+0),a.fromBufferAttribute(r,h+1),o.fromBufferAttribute(r,h+2),c.subVectors(o,a),p.subVectors(i,a),c.cross(p),n.setXYZ(h+0,c.x,c.y,c.z),n.setXYZ(h+1,c.x,c.y,c.z),n.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let r=0,n=t.count;r<n;r++)lr.fromBufferAttribute(t,r),lr.normalize(),t.setXYZ(r,lr.x,lr.y,lr.z)}toNonIndexed(){function t(s,l){let u=s.array,c=s.itemSize,p=s.normalized,h=new u.constructor(l.length*c),f=0,y=0;for(let _=0,v=l.length;_<v;_++){s.isInterleavedBufferAttribute?f=l[_]*s.data.stride+s.offset:f=l[_]*c;for(let d=0;d<c;d++)h[y++]=u[f++]}return new Ur(h,c,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let r=new sy,n=this.index.array,i=this.attributes;for(let s in i){let l=i[s],u=t(l,n);r.setAttribute(s,u)}let a=this.morphAttributes;for(let s in a){let l=[],u=a[s];for(let c=0,p=u.length;c<p;c++){let h=u[c],f=t(h,n);l.push(f)}r.morphAttributes[s]=l}r.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let s=0,l=o.length;s<l;s++){let u=o[s];r.addGroup(u.start,u.count,u.materialIndex)}return r}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};let r=this.index;r!==null&&(t.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});let n=this.attributes;for(let l in n){let u=n[l];t.data.attributes[l]=u.toJSON(t.data)}let i={},a=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],c=[];for(let p=0,h=u.length;p<h;p++){let f=u[p];c.push(f.toJSON(t.data))}c.length>0&&(i[l]=c,a=!0)}a&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let s=this.boundingSphere;return s!==null&&(t.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let r={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(r));let i=t.attributes;for(let u in i){let c=i[u];this.setAttribute(u,c.clone(r))}let a=t.morphAttributes;for(let u in a){let c=[],p=a[u];for(let h=0,f=p.length;h<f;h++)c.push(p[h].clone(r));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let u=0,c=o.length;u<c;u++){let p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}let s=t.boundingBox;s!==null&&(this.boundingBox=s.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},B1=new Rt,va=new ty,fc=new es,H1=new I,mc=new I,gc=new I,vc=new I,Xp=new I,_c=new I,V1=new I,yc=new I,Ae=class extends tr{constructor(e=new wr,t=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,i=r.length;n<i;n++){let a=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let r=this.geometry,n=r.attributes.position,i=r.morphAttributes.position,a=r.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(i&&o){_c.set(0,0,0);for(let s=0,l=i.length;s<l;s++){let u=o[s],c=i[s];u!==0&&(Xp.fromBufferAttribute(c,e),a?_c.addScaledVector(Xp,u):_c.addScaledVector(Xp.sub(t),u))}t.add(_c)}return t}raycast(e,t){let r=this.geometry,n=this.material,i=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),fc.copy(r.boundingSphere),fc.applyMatrix4(i),va.copy(e.ray).recast(e.near),!(fc.containsPoint(va.origin)===!1&&(va.intersectSphere(fc,H1)===null||va.origin.distanceToSquared(H1)>(e.far-e.near)**2))&&(B1.copy(i).invert(),va.copy(e.ray).applyMatrix4(B1),!(r.boundingBox!==null&&va.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,va)))}_computeIntersections(e,t,r){let n,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,l=i.attributes.uv,u=i.attributes.uv1,c=i.attributes.normal,p=i.groups,h=i.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,y=p.length;f<y;f++){let _=p[f],v=a[_.materialIndex],d=Math.max(_.start,h.start),m=Math.min(o.count,Math.min(_.start+_.count,h.start+h.count));for(let g=d,x=m;g<x;g+=3){let N=o.getX(g),T=o.getX(g+1),b=o.getX(g+2);n=xc(this,v,e,r,l,u,c,N,T,b),n&&(n.faceIndex=Math.floor(g/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{let f=Math.max(0,h.start),y=Math.min(o.count,h.start+h.count);for(let _=f,v=y;_<v;_+=3){let d=o.getX(_),m=o.getX(_+1),g=o.getX(_+2);n=xc(this,a,e,r,l,u,c,d,m,g),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}else if(s!==void 0)if(Array.isArray(a))for(let f=0,y=p.length;f<y;f++){let _=p[f],v=a[_.materialIndex],d=Math.max(_.start,h.start),m=Math.min(s.count,Math.min(_.start+_.count,h.start+h.count));for(let g=d,x=m;g<x;g+=3){let N=g,T=g+1,b=g+2;n=xc(this,v,e,r,l,u,c,N,T,b),n&&(n.faceIndex=Math.floor(g/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{let f=Math.max(0,h.start),y=Math.min(s.count,h.start+h.count);for(let _=f,v=y;_<v;_+=3){let d=_,m=_+1,g=_+2;n=xc(this,a,e,r,l,u,c,d,m,g),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}}};function V2(e,t,r,n,i,a,o,s){let l;if(t.side===Ir?l=n.intersectTriangle(o,a,i,!0,s):l=n.intersectTriangle(i,a,o,t.side===Yi,s),l===null)return null;yc.copy(s),yc.applyMatrix4(e.matrixWorld);let u=r.ray.origin.distanceTo(yc);return u<r.near||u>r.far?null:{distance:u,point:yc.clone(),object:e}}function xc(e,t,r,n,i,a,o,s,l,u){e.getVertexPosition(s,mc),e.getVertexPosition(l,gc),e.getVertexPosition(u,vc);let c=V2(e,t,r,n,mc,gc,vc,V1);if(c){let p=new I;Oo.getBarycoord(V1,mc,gc,vc,p),i&&(c.uv=Oo.getInterpolatedAttribute(i,s,l,u,p,new he)),a&&(c.uv1=Oo.getInterpolatedAttribute(a,s,l,u,p,new he)),o&&(c.normal=Oo.getInterpolatedAttribute(o,s,l,u,p,new I),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));let h={a:s,b:l,c:u,normal:new I,materialIndex:0};Oo.getNormal(mc,gc,vc,h.normal),c.face=h,c.barycoord=p}return c}var er=class ly extends wr{constructor(t=1,r=1,n=1,i=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:r,depth:n,widthSegments:i,heightSegments:a,depthSegments:o};let s=this;i=Math.floor(i),a=Math.floor(a),o=Math.floor(o);let l=[],u=[],c=[],p=[],h=0,f=0;y("z","y","x",-1,-1,n,r,t,o,a,0),y("z","y","x",1,-1,n,r,-t,o,a,1),y("x","z","y",1,1,t,n,r,i,o,2),y("x","z","y",1,-1,t,n,-r,i,o,3),y("x","y","z",1,-1,t,r,n,i,a,4),y("x","y","z",-1,-1,t,r,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new wt(u,3)),this.setAttribute("normal",new wt(c,3)),this.setAttribute("uv",new wt(p,2));function y(_,v,d,m,g,x,N,T,b,P,w){let S=x/b,C=N/P,k=x/2,W=N/2,V=T/2,Z=b+1,$=P+1,ae=0,Y=0,oe=new I;for(let ve=0;ve<$;ve++){let We=ve*C-W;for(let nt=0;nt<Z;nt++){let J=nt*S-k;oe[_]=J*m,oe[v]=We*g,oe[d]=V,u.push(oe.x,oe.y,oe.z),oe[_]=0,oe[v]=0,oe[d]=T>0?1:-1,c.push(oe.x,oe.y,oe.z),p.push(nt/b),p.push(1-ve/P),ae+=1}}for(let ve=0;ve<P;ve++)for(let We=0;We<b;We++){let nt=h+We+Z*ve,J=h+We+Z*(ve+1),pe=h+(We+1)+Z*(ve+1),Ce=h+(We+1)+Z*ve;l.push(nt,J,Ce),l.push(J,pe,Ce),Y+=6}s.addGroup(f,Y,w),f+=Y,h+=ae}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ly(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Zo(e){let t={};for(let r in e){t[r]={};for(let n in e[r]){let i=e[r][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[r][n]=null):t[r][n]=i.clone():Array.isArray(i)?t[r][n]=i.slice():t[r][n]=i}}return t}function Lr(e){let t={};for(let r=0;r<e.length;r++){let n=Zo(e[r]);for(let i in n)t[i]=n[i]}return t}function G2(e){let t=[];for(let r=0;r<e.length;r++)t.push(e[r].clone());return t}function uy(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:vt.workingColorSpace}var W2={clone:Zo,merge:Lr},X2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,j2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wn=class extends Ua{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X2,this.fragmentShader=j2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zo(e.uniforms),this.uniformsGroups=G2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let i=this.uniforms[n].value;i&&i.isTexture?t.uniforms[n]={type:"t",value:i.toJSON(e).uuid}:i&&i.isColor?t.uniforms[n]={type:"c",value:i.getHex()}:i&&i.isVector2?t.uniforms[n]={type:"v2",value:i.toArray()}:i&&i.isVector3?t.uniforms[n]={type:"v3",value:i.toArray()}:i&&i.isVector4?t.uniforms[n]={type:"v4",value:i.toArray()}:i&&i.isMatrix3?t.uniforms[n]={type:"m3",value:i.toArray()}:i&&i.isMatrix4?t.uniforms[n]={type:"m4",value:i.toArray()}:t.uniforms[n]={value:i}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let r={};for(let n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}},cy=class extends tr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wi=new I,G1=new he,W1=new he,Qr=class extends cy{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Yf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Tp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yf*2*Math.atan(Math.tan(Tp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,G1,W1),t.subVectors(W1,G1)}setViewOffset(e,t,r,n,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Tp*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,i=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let s=a.fullWidth,l=a.fullHeight;i+=a.offsetX*n/s,t-=a.offsetY*r/l,n*=a.width/s,r*=a.height/l}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+n,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ao=-90,Co=1,$2=class extends tr{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Qr(Ao,Co,e,t);n.layers=this.layers,this.add(n);let i=new Qr(Ao,Co,e,t);i.layers=this.layers,this.add(i);let a=new Qr(Ao,Co,e,t);a.layers=this.layers,this.add(a);let o=new Qr(Ao,Co,e,t);o.layers=this.layers,this.add(o);let s=new Qr(Ao,Co,e,t);s.layers=this.layers,this.add(s);let l=new Qr(Ao,Co,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[r,n,i,a,o,s]=t;for(let l of t)this.remove(l);if(e===ci)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===$c)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,l,u]=this.children,c=e.getRenderTarget(),p=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let y=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,i),e.setRenderTarget(r,1,n),e.render(t,a),e.setRenderTarget(r,2,n),e.render(t,o),e.setRenderTarget(r,3,n),e.render(t,s),e.setRenderTarget(r,4,n),e.render(t,l),r.texture.generateMipmaps=y,e.setRenderTarget(r,5,n),e.render(t,u),e.setRenderTarget(c,p,h),e.xr.enabled=f,r.texture.needsPMREMUpdate=!0}},dy=class extends hn{constructor(e,t,r,n,i,a,o,s,l,u){e=e!==void 0?e:[],t=t!==void 0?t:jo,super(e,t,r,n,i,a,o,s,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Y2=class extends Na{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];this.texture=new dy(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new er(5,5,5),i=new Wn({name:"CubemapFromEquirect",uniforms:Zo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ir,blending:ji});i.uniforms.tEquirect.value=t;let a=new Ae(n,i),o=t.minFilter;return t.minFilter===Ca&&(t.minFilter=Vn),new $2(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,r,n){let i=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,r,n);e.setRenderTarget(i)}},jp=new I,q2=new I,Z2=new dt,Ma=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){let n=jp.subVectors(r,t).cross(q2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let r=e.delta(jp),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/n;return i<0||i>1?null:t.copy(e.start).addScaledVector(r,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let r=t||Z2.getNormalMatrix(e),n=this.coplanarPoint(jp).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},_a=new es,Sc=new I,cm=class{constructor(e=new Ma,t=new Ma,r=new Ma,n=new Ma,i=new Ma,a=new Ma){this.planes=[e,t,r,n,i,a]}set(e,t,r,n,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(n),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ci){let r=this.planes,n=e.elements,i=n[0],a=n[1],o=n[2],s=n[3],l=n[4],u=n[5],c=n[6],p=n[7],h=n[8],f=n[9],y=n[10],_=n[11],v=n[12],d=n[13],m=n[14],g=n[15];if(r[0].setComponents(s-i,p-l,_-h,g-v).normalize(),r[1].setComponents(s+i,p+l,_+h,g+v).normalize(),r[2].setComponents(s+a,p+u,_+f,g+d).normalize(),r[3].setComponents(s-a,p-u,_-f,g-d).normalize(),r[4].setComponents(s-o,p-c,_-y,g-m).normalize(),t===ci)r[5].setComponents(s+o,p+c,_+y,g+m).normalize();else if(t===$c)r[5].setComponents(o,c,y,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_a.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_a.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_a)}intersectsSprite(e){return _a.center.set(0,0,0),_a.radius=.7071067811865476,_a.applyMatrix4(e.matrixWorld),this.intersectsSphere(_a)}intersectsSphere(e){let t=this.planes,r=e.center,n=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let r=0;r<6;r++){let n=t[r];if(Sc.x=n.normal.x>0?e.max.x:e.min.x,Sc.y=n.normal.y>0?e.max.y:e.min.y,Sc.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Sc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function hy(){let e=null,t=!1,r=null,n=null;function i(a,o){r(a,o),n=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&r!==null&&(n=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){r=a},setContext:function(a){e=a}}}function J2(e){let t=new WeakMap;function r(s,l){let u=s.array,c=s.usage,p=u.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,u,c),s.onUploadCallback();let f;if(u instanceof Float32Array)f=e.FLOAT;else if(u instanceof Uint16Array)s.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=e.SHORT;else if(u instanceof Uint32Array)f=e.UNSIGNED_INT;else if(u instanceof Int32Array)f=e.INT;else if(u instanceof Int8Array)f=e.BYTE;else if(u instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:s.version,size:p}}function n(s,l,u){let c=l.array,p=l.updateRanges;if(e.bindBuffer(u,s),p.length===0)e.bufferSubData(u,0,c);else{p.sort((f,y)=>f.start-y.start);let h=0;for(let f=1;f<p.length;f++){let y=p[h],_=p[f];_.start<=y.start+y.count+1?y.count=Math.max(y.count,_.start+_.count-y.start):(++h,p[h]=_)}p.length=h+1;for(let f=0,y=p.length;f<y;f++){let _=p[f];e.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(s){return s.isInterleavedBufferAttribute&&(s=s.data),t.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);let l=t.get(s);l&&(e.deleteBuffer(l.buffer),t.delete(s))}function o(s,l){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){let c=t.get(s);(!c||c.version<s.version)&&t.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}let u=t.get(s);if(u===void 0)t.set(s,r(s,l));else if(u.version<s.version){if(u.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,s,l),u.version=s.version}}return{get:i,remove:a,update:o}}var Rn=class py extends wr{constructor(t=1,r=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:r,widthSegments:n,heightSegments:i};let a=t/2,o=r/2,s=Math.floor(n),l=Math.floor(i),u=s+1,c=l+1,p=t/s,h=r/l,f=[],y=[],_=[],v=[];for(let d=0;d<c;d++){let m=d*h-o;for(let g=0;g<u;g++){let x=g*p-a;y.push(x,-m,0),_.push(0,0,1),v.push(g/s),v.push(1-d/l)}}for(let d=0;d<l;d++)for(let m=0;m<s;m++){let g=m+u*d,x=m+u*(d+1),N=m+1+u*(d+1),T=m+1+u*d;f.push(g,x,T),f.push(x,N,T)}this.setIndex(f),this.setAttribute("position",new wt(y,3)),this.setAttribute("normal",new wt(_,3)),this.setAttribute("uv",new wt(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new py(t.width,t.height,t.widthSegments,t.heightSegments)}},Q2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,K2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ew=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ow=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_w=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ww=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ew=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Aw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Nw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Iw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ow=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ww=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$w=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,SE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ME=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,AE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,UE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,OE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,HE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,XE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ZE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,JE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,aT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,oT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_T=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ST=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,MT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ET=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,RT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:Q2,alphahash_pars_fragment:K2,alphamap_fragment:ew,alphamap_pars_fragment:tw,alphatest_fragment:rw,alphatest_pars_fragment:nw,aomap_fragment:iw,aomap_pars_fragment:aw,batching_pars_vertex:ow,batching_vertex:sw,begin_vertex:lw,beginnormal_vertex:uw,bsdfs:cw,iridescence_fragment:dw,bumpmap_pars_fragment:hw,clipping_planes_fragment:pw,clipping_planes_pars_fragment:fw,clipping_planes_pars_vertex:mw,clipping_planes_vertex:gw,color_fragment:vw,color_pars_fragment:_w,color_pars_vertex:yw,color_vertex:xw,common:Sw,cube_uv_reflection_fragment:Mw,defaultnormal_vertex:ww,displacementmap_pars_vertex:Ew,displacementmap_vertex:Tw,emissivemap_fragment:bw,emissivemap_pars_fragment:Aw,colorspace_fragment:Cw,colorspace_pars_fragment:Rw,envmap_fragment:Pw,envmap_common_pars_fragment:Nw,envmap_pars_fragment:Lw,envmap_pars_vertex:Iw,envmap_physical_pars_fragment:Ww,envmap_vertex:Uw,fog_vertex:Dw,fog_pars_vertex:Ow,fog_fragment:kw,fog_pars_fragment:Fw,gradientmap_pars_fragment:zw,lightmap_pars_fragment:Bw,lights_lambert_fragment:Hw,lights_lambert_pars_fragment:Vw,lights_pars_begin:Gw,lights_toon_fragment:Xw,lights_toon_pars_fragment:jw,lights_phong_fragment:$w,lights_phong_pars_fragment:Yw,lights_physical_fragment:qw,lights_physical_pars_fragment:Zw,lights_fragment_begin:Jw,lights_fragment_maps:Qw,lights_fragment_end:Kw,logdepthbuf_fragment:eE,logdepthbuf_pars_fragment:tE,logdepthbuf_pars_vertex:rE,logdepthbuf_vertex:nE,map_fragment:iE,map_pars_fragment:aE,map_particle_fragment:oE,map_particle_pars_fragment:sE,metalnessmap_fragment:lE,metalnessmap_pars_fragment:uE,morphinstance_vertex:cE,morphcolor_vertex:dE,morphnormal_vertex:hE,morphtarget_pars_vertex:pE,morphtarget_vertex:fE,normal_fragment_begin:mE,normal_fragment_maps:gE,normal_pars_fragment:vE,normal_pars_vertex:_E,normal_vertex:yE,normalmap_pars_fragment:xE,clearcoat_normal_fragment_begin:SE,clearcoat_normal_fragment_maps:ME,clearcoat_pars_fragment:wE,iridescence_pars_fragment:EE,opaque_fragment:TE,packing:bE,premultiplied_alpha_fragment:AE,project_vertex:CE,dithering_fragment:RE,dithering_pars_fragment:PE,roughnessmap_fragment:NE,roughnessmap_pars_fragment:LE,shadowmap_pars_fragment:IE,shadowmap_pars_vertex:UE,shadowmap_vertex:DE,shadowmask_pars_fragment:OE,skinbase_vertex:kE,skinning_pars_vertex:FE,skinning_vertex:zE,skinnormal_vertex:BE,specularmap_fragment:HE,specularmap_pars_fragment:VE,tonemapping_fragment:GE,tonemapping_pars_fragment:WE,transmission_fragment:XE,transmission_pars_fragment:jE,uv_pars_fragment:$E,uv_pars_vertex:YE,uv_vertex:qE,worldpos_vertex:ZE,background_vert:JE,background_frag:QE,backgroundCube_vert:KE,backgroundCube_frag:eT,cube_vert:tT,cube_frag:rT,depth_vert:nT,depth_frag:iT,distanceRGBA_vert:aT,distanceRGBA_frag:oT,equirect_vert:sT,equirect_frag:lT,linedashed_vert:uT,linedashed_frag:cT,meshbasic_vert:dT,meshbasic_frag:hT,meshlambert_vert:pT,meshlambert_frag:fT,meshmatcap_vert:mT,meshmatcap_frag:gT,meshnormal_vert:vT,meshnormal_frag:_T,meshphong_vert:yT,meshphong_frag:xT,meshphysical_vert:ST,meshphysical_frag:MT,meshtoon_vert:wT,meshtoon_frag:ET,points_vert:TT,points_frag:bT,shadow_vert:AT,shadow_frag:CT,sprite_vert:RT,sprite_frag:PT},Se={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},zn={basic:{uniforms:Lr([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Lr([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new st(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Lr([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Lr([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Lr([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new st(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Lr([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Lr([Se.points,Se.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Lr([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Lr([Se.common,Se.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Lr([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Lr([Se.sprite,Se.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Lr([Se.common,Se.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Lr([Se.lights,Se.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};zn.physical={uniforms:Lr([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var Mc={r:0,b:0,g:0},ya=new qi,NT=new Rt;function LT(e,t,r,n,i,a,o){let s=new st(0),l=a===!0?0:1,u,c,p=null,h=0,f=null;function y(m){let g=m.isScene===!0?m.background:null;return g&&g.isTexture&&(g=(m.backgroundBlurriness>0?r:t).get(g)),g}function _(m){let g=!1,x=y(m);x===null?d(s,l):x&&x.isColor&&(d(x,1),g=!0);let N=e.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(e.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function v(m,g){let x=y(g);x&&(x.isCubeTexture||x.mapping===qc)?(c===void 0&&(c=new Ae(new er(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:Zo(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(N,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),ya.copy(g.backgroundRotation),ya.x*=-1,ya.y*=-1,ya.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ya.y*=-1,ya.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(NT.makeRotationFromEuler(ya)),c.material.toneMapped=vt.getTransfer(x.colorSpace)!==St,(p!==x||h!==x.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,p=x,h=x.version,f=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Ae(new Rn(2,2),new Wn({name:"BackgroundMaterial",uniforms:Zo(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=vt.getTransfer(x.colorSpace)!==St,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(p!==x||h!==x.version||f!==e.toneMapping)&&(u.material.needsUpdate=!0,p=x,h=x.version,f=e.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function d(m,g){m.getRGB(Mc,uy(e)),n.buffers.color.setClear(Mc.r,Mc.g,Mc.b,g,o)}return{getClearColor:function(){return s},setClearColor:function(m,g=1){s.set(m),l=g,d(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,d(s,l)},render:_,addToRenderList:v}}function IT(e,t){let r=e.getParameter(e.MAX_VERTEX_ATTRIBS),n={},i=h(null),a=i,o=!1;function s(S,C,k,W,V){let Z=!1,$=p(W,k,C);a!==$&&(a=$,u(a.object)),Z=f(S,W,k,V),Z&&y(S,W,k,V),V!==null&&t.update(V,e.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,x(S,C,k,W),V!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return e.createVertexArray()}function u(S){return e.bindVertexArray(S)}function c(S){return e.deleteVertexArray(S)}function p(S,C,k){let W=k.wireframe===!0,V=n[S.id];V===void 0&&(V={},n[S.id]=V);let Z=V[C.id];Z===void 0&&(Z={},V[C.id]=Z);let $=Z[W];return $===void 0&&($=h(l()),Z[W]=$),$}function h(S){let C=[],k=[],W=[];for(let V=0;V<r;V++)C[V]=0,k[V]=0,W[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:k,attributeDivisors:W,object:S,attributes:{},index:null}}function f(S,C,k,W){let V=a.attributes,Z=C.attributes,$=0,ae=k.getAttributes();for(let Y in ae)if(ae[Y].location>=0){let oe=V[Y],ve=Z[Y];if(ve===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor)),oe===void 0||oe.attribute!==ve||ve&&oe.data!==ve.data)return!0;$++}return a.attributesNum!==$||a.index!==W}function y(S,C,k,W){let V={},Z=C.attributes,$=0,ae=k.getAttributes();for(let Y in ae)if(ae[Y].location>=0){let oe=Z[Y];oe===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor));let ve={};ve.attribute=oe,oe&&oe.data&&(ve.data=oe.data),V[Y]=ve,$++}a.attributes=V,a.attributesNum=$,a.index=W}function _(){let S=a.newAttributes;for(let C=0,k=S.length;C<k;C++)S[C]=0}function v(S){d(S,0)}function d(S,C){let k=a.newAttributes,W=a.enabledAttributes,V=a.attributeDivisors;k[S]=1,W[S]===0&&(e.enableVertexAttribArray(S),W[S]=1),V[S]!==C&&(e.vertexAttribDivisor(S,C),V[S]=C)}function m(){let S=a.newAttributes,C=a.enabledAttributes;for(let k=0,W=C.length;k<W;k++)C[k]!==S[k]&&(e.disableVertexAttribArray(k),C[k]=0)}function g(S,C,k,W,V,Z,$){$===!0?e.vertexAttribIPointer(S,C,k,V,Z):e.vertexAttribPointer(S,C,k,W,V,Z)}function x(S,C,k,W){_();let V=W.attributes,Z=k.getAttributes(),$=C.defaultAttributeValues;for(let ae in Z){let Y=Z[ae];if(Y.location>=0){let oe=V[ae];if(oe===void 0&&(ae==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),ae==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),oe!==void 0){let ve=oe.normalized,We=oe.itemSize,nt=t.get(oe);if(nt===void 0)continue;let J=nt.buffer,pe=nt.type,Ce=nt.bytesPerElement,Le=pe===e.INT||pe===e.UNSIGNED_INT||oe.gpuType===nm;if(oe.isInterleavedBufferAttribute){let _e=oe.data,Be=_e.stride,Ke=oe.offset;if(_e.isInstancedInterleavedBuffer){for(let Ye=0;Ye<Y.locationSize;Ye++)d(Y.location+Ye,_e.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ye=0;Ye<Y.locationSize;Ye++)v(Y.location+Ye);e.bindBuffer(e.ARRAY_BUFFER,J);for(let Ye=0;Ye<Y.locationSize;Ye++)g(Y.location+Ye,We/Y.locationSize,pe,ve,Be*Ce,(Ke+We/Y.locationSize*Ye)*Ce,Le)}else{if(oe.isInstancedBufferAttribute){for(let _e=0;_e<Y.locationSize;_e++)d(Y.location+_e,oe.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let _e=0;_e<Y.locationSize;_e++)v(Y.location+_e);e.bindBuffer(e.ARRAY_BUFFER,J);for(let _e=0;_e<Y.locationSize;_e++)g(Y.location+_e,We/Y.locationSize,pe,ve,We*Ce,We/Y.locationSize*_e*Ce,Le)}}else if($!==void 0){let ve=$[ae];if(ve!==void 0)switch(ve.length){case 2:e.vertexAttrib2fv(Y.location,ve);break;case 3:e.vertexAttrib3fv(Y.location,ve);break;case 4:e.vertexAttrib4fv(Y.location,ve);break;default:e.vertexAttrib1fv(Y.location,ve)}}}}m()}function N(){P();for(let S in n){let C=n[S];for(let k in C){let W=C[k];for(let V in W)c(W[V].object),delete W[V];delete C[k]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;let C=n[S.id];for(let k in C){let W=C[k];for(let V in W)c(W[V].object),delete W[V];delete C[k]}delete n[S.id]}function b(S){for(let C in n){let k=n[C];if(k[S.id]===void 0)continue;let W=k[S.id];for(let V in W)c(W[V].object),delete W[V];delete k[S.id]}}function P(){w(),o=!0,a!==i&&(a=i,u(a.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:P,resetDefaultState:w,dispose:N,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:v,disableUnusedAttributes:m}}function UT(e,t,r){let n;function i(u){n=u}function a(u,c){e.drawArrays(n,u,c),r.update(c,n,1)}function o(u,c,p){p!==0&&(e.drawArraysInstanced(n,u,c,p),r.update(c,n,p))}function s(u,c,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,c,0,p);let h=0;for(let f=0;f<p;f++)h+=c[f];r.update(h,n,1)}function l(u,c,p,h){if(p===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let y=0;y<u.length;y++)o(u[y],c[y],h[y]);else{f.multiDrawArraysInstancedWEBGL(n,u,0,c,0,h,0,p);let y=0;for(let _=0;_<p;_++)y+=c[_]*h[_];r.update(y,n,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function DT(e,t,r,n){let i;function a(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");i=e.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==Pn&&n.convert(b)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(b){let P=b===Ml&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==fi&&n.convert(b)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Gn&&!P)}function l(b){if(b==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=r.precision!==void 0?r.precision:"highp",c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);let p=r.logarithmicDepthBuffer===!0,h=r.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),v=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),g=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),N=y>0,T=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:s,precision:u,logarithmicDepthBuffer:p,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:y,maxTextureSize:_,maxCubemapSize:v,maxAttributes:d,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:x,vertexTextures:N,maxSamples:T}}function OT(e){let t=this,r=null,n=0,i=!1,a=!1,o=new Ma,s=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){let f=p.length!==0||h||n!==0||i;return i=h,n=p.length,f},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,h){r=c(p,h,0)},this.setState=function(p,h,f){let y=p.clippingPlanes,_=p.clipIntersection,v=p.clipShadows,d=e.get(p);if(!i||y===null||y.length===0||a&&!v)a?c(null):u();else{let m=a?0:n,g=m*4,x=d.clippingState||null;l.value=x,x=c(y,h,g,f);for(let N=0;N!==g;++N)x[N]=r[N];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==r&&(l.value=r,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(p,h,f,y){let _=p!==null?p.length:0,v=null;if(_!==0){if(v=l.value,y!==!0||v===null){let d=f+_*4,m=h.matrixWorldInverse;s.getNormalMatrix(m),(v===null||v.length<d)&&(v=new Float32Array(d));for(let g=0,x=f;g!==_;++g,x+=4)o.copy(p[g]).applyMatrix4(m,s),o.normal.toArray(v,x),v[x+3]=o.constant}l.value=v,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,v}}function kT(e){let t=new WeakMap;function r(o,s){return s===vf?o.mapping=jo:s===_f&&(o.mapping=$o),o}function n(o){if(o&&o.isTexture){let s=o.mapping;if(s===vf||s===_f)if(t.has(o)){let l=t.get(o).texture;return r(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let u=new Y2(l.height);return u.fromEquirectangularTexture(e,o),t.set(o,u),o.addEventListener("dispose",i),r(u.texture,o.mapping)}else return null}}return o}function i(o){let s=o.target;s.removeEventListener("dispose",i);let l=t.get(s);l!==void 0&&(t.delete(s),l.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}var fy=class extends cy{constructor(e=-1,t=1,r=1,n=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2,i=r-e,a=r+e,o=n+t,s=n-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=l*this.view.offsetX,a=i+l*this.view.width,o-=u*this.view.offsetY,s=o-u*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zo=4,X1=[.125,.215,.35,.446,.526,.582],Ta=20,$p=new fy,j1=new st,Yp=null,qp=0,Zp=0,Jp=!1,wa=(1+Math.sqrt(5))/2,Ro=1/wa,$1=[new I(-wa,Ro,0),new I(wa,Ro,0),new I(-Ro,0,wa),new I(Ro,0,wa),new I(0,wa,-Ro),new I(0,wa,Ro),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Zf=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){Yp=this._renderer.getRenderTarget(),qp=this._renderer.getActiveCubeFace(),Zp=this._renderer.getActiveMipmapLevel(),Jp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,r,n,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Z1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=q1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yp,qp,Zp),this._renderer.xr.enabled=Jp,e.scissorTest=!1,wc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jo||e.mapping===$o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yp=this._renderer.getRenderTarget(),qp=this._renderer.getActiveCubeFace(),Zp=this._renderer.getActiveMipmapLevel(),Jp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Ml,format:Pn,colorSpace:Jo,depthBuffer:!1},n=Y1(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Y1(e,t,r);let{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FT(i)),this._blurMaterial=zT(i,e,t)}return n}_compileMaterial(e){let t=new Ae(this._lodPlanes[0],e);this._renderer.compile(t,$p)}_sceneToCubeUV(e,t,r,n){let i=new Qr(90,1,t,r),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,l=s.autoClear,u=s.toneMapping;s.getClearColor(j1),s.toneMapping=$i,s.autoClear=!1;let c=new Fn({name:"PMREM.Background",side:Ir,depthWrite:!1,depthTest:!1}),p=new Ae(new er,c),h=!1,f=e.background;f?f.isColor&&(c.color.copy(f),e.background=null,h=!0):(c.color.copy(j1),h=!0);for(let y=0;y<6;y++){let _=y%3;_===0?(i.up.set(0,a[y],0),i.lookAt(o[y],0,0)):_===1?(i.up.set(0,0,a[y]),i.lookAt(0,o[y],0)):(i.up.set(0,a[y],0),i.lookAt(0,0,o[y]));let v=this._cubeSize;wc(n,_*v,y>2?v:0,v,v),s.setRenderTarget(n),h&&s.render(p,i),s.render(e,i)}p.geometry.dispose(),p.material.dispose(),s.toneMapping=u,s.autoClear=l,e.background=f}_textureToCubeUV(e,t){let r=this._renderer,n=e.mapping===jo||e.mapping===$o;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Z1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=q1());let i=n?this._cubemapMaterial:this._equirectMaterial,a=new Ae(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;wc(t,0,0,3*s,2*s),r.setRenderTarget(t),r.render(a,$p)}_applyPMREM(e){let t=this._renderer,r=t.autoClear;t.autoClear=!1;let n=this._lodPlanes.length;for(let i=1;i<n;i++){let a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=$1[(n-i-1)%$1.length];this._blur(e,i-1,i,a,o)}t.autoClear=r}_blur(e,t,r,n,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,r,n,"latitudinal",i),this._halfBlur(a,e,r,r,n,"longitudinal",i)}_halfBlur(e,t,r,n,i,a,o){let s=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,c=new Ae(this._lodPlanes[n],l),p=l.uniforms,h=this._sizeLods[r]-1,f=isFinite(i)?Math.PI/(2*h):2*Math.PI/(2*Ta-1),y=i/f,_=isFinite(i)?1+Math.floor(u*y):Ta;_>Ta&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ta}`);let v=[],d=0;for(let T=0;T<Ta;++T){let b=T/y,P=Math.exp(-b*b/2);v.push(P),T===0?d+=P:T<_&&(d+=2*P)}for(let T=0;T<v.length;T++)v[T]=v[T]/d;p.envMap.value=e.texture,p.samples.value=_,p.weights.value=v,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:m}=this;p.dTheta.value=f,p.mipInt.value=m-r;let g=this._sizeLods[n],x=3*g*(n>m-zo?n-m+zo:0),N=4*(this._cubeSize-g);wc(t,x,N,3*g,2*g),s.setRenderTarget(t),s.render(c,$p)}};function FT(e){let t=[],r=[],n=[],i=e,a=e-zo+1+X1.length;for(let o=0;o<a;o++){let s=Math.pow(2,i);r.push(s);let l=1/s;o>e-zo?l=X1[o-e+zo-1]:o===0&&(l=0),n.push(l);let u=1/(s-2),c=-u,p=1+u,h=[c,c,p,c,p,p,c,c,p,p,c,p],f=6,y=6,_=3,v=2,d=1,m=new Float32Array(_*y*f),g=new Float32Array(v*y*f),x=new Float32Array(d*y*f);for(let T=0;T<f;T++){let b=T%3*2/3-1,P=T>2?0:-1,w=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];m.set(w,_*y*T),g.set(h,v*y*T);let S=[T,T,T,T,T,T];x.set(S,d*y*T)}let N=new wr;N.setAttribute("position",new Ur(m,_)),N.setAttribute("uv",new Ur(g,v)),N.setAttribute("faceIndex",new Ur(x,d)),t.push(N),i>zo&&i--}return{lodPlanes:t,sizeLods:r,sigmas:n}}function Y1(e,t,r){let n=new Na(e,t,r);return n.texture.mapping=qc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wc(e,t,r,n,i){e.viewport.set(t,r,n,i),e.scissor.set(t,r,n,i)}function zT(e,t,r){let n=new Float32Array(Ta),i=new I(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:Ta,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:dm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function q1(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Z1(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function dm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function BT(e){let t=new WeakMap,r=null;function n(s){if(s&&s.isTexture){let l=s.mapping,u=l===vf||l===_f,c=l===jo||l===$o;if(u||c){let p=t.get(s),h=p!==void 0?p.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==h)return r===null&&(r=new Zf(e)),p=u?r.fromEquirectangular(s,p):r.fromCubemap(s,p),p.texture.pmremVersion=s.pmremVersion,t.set(s,p),p.texture;if(p!==void 0)return p.texture;{let f=s.image;return u&&f&&f.height>0||c&&f&&i(f)?(r===null&&(r=new Zf(e)),p=u?r.fromEquirectangular(s):r.fromCubemap(s),p.texture.pmremVersion=s.pmremVersion,t.set(s,p),s.addEventListener("dispose",a),p.texture):null}}}return s}function i(s){let l=0,u=6;for(let c=0;c<u;c++)s[c]!==void 0&&l++;return l===u}function a(s){let l=s.target;l.removeEventListener("dispose",a);let u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:n,dispose:o}}function HT(e){let t={};function r(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=e.getExtension(n)}return t[n]=i,i}return{has:function(n){return r(n)!==null},init:function(){r("EXT_color_buffer_float"),r("WEBGL_clip_cull_distance"),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture"),r("WEBGL_render_shared_exponent")},get:function(n){let i=r(n);return i===null&&pl("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function VT(e,t,r,n){let i={},a=new WeakMap;function o(p){let h=p.target;h.index!==null&&t.remove(h.index);for(let y in h.attributes)t.remove(h.attributes[y]);for(let y in h.morphAttributes){let _=h.morphAttributes[y];for(let v=0,d=_.length;v<d;v++)t.remove(_[v])}h.removeEventListener("dispose",o),delete i[h.id];let f=a.get(h);f&&(t.remove(f),a.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,r.memory.geometries--}function s(p,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,r.memory.geometries++),h}function l(p){let h=p.attributes;for(let y in h)t.update(h[y],e.ARRAY_BUFFER);let f=p.morphAttributes;for(let y in f){let _=f[y];for(let v=0,d=_.length;v<d;v++)t.update(_[v],e.ARRAY_BUFFER)}}function u(p){let h=[],f=p.index,y=p.attributes.position,_=0;if(f!==null){let m=f.array;_=f.version;for(let g=0,x=m.length;g<x;g+=3){let N=m[g+0],T=m[g+1],b=m[g+2];h.push(N,T,T,b,b,N)}}else if(y!==void 0){let m=y.array;_=y.version;for(let g=0,x=m.length/3-1;g<x;g+=3){let N=g+0,T=g+1,b=g+2;h.push(N,T,T,b,b,N)}}else return;let v=new(Z_(h)?oy:ay)(h,1);v.version=_;let d=a.get(p);d&&t.remove(d),a.set(p,v)}function c(p){let h=a.get(p);if(h){let f=p.index;f!==null&&h.version<f.version&&u(p)}else u(p);return a.get(p)}return{get:s,update:l,getWireframeAttribute:c}}function GT(e,t,r){let n;function i(h){n=h}let a,o;function s(h){a=h.type,o=h.bytesPerElement}function l(h,f){e.drawElements(n,f,a,h*o),r.update(f,n,1)}function u(h,f,y){y!==0&&(e.drawElementsInstanced(n,f,a,h*o,y),r.update(f,n,y))}function c(h,f,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,a,h,0,y);let _=0;for(let v=0;v<y;v++)_+=f[v];r.update(_,n,1)}function p(h,f,y,_){if(y===0)return;let v=t.get("WEBGL_multi_draw");if(v===null)for(let d=0;d<h.length;d++)u(h[d]/o,f[d],_[d]);else{v.multiDrawElementsInstancedWEBGL(n,f,0,a,h,0,_,0,y);let d=0;for(let m=0;m<y;m++)d+=f[m]*_[m];r.update(d,n,1)}}this.setMode=i,this.setIndex=s,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=p}function WT(e){let t={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,s){switch(r.calls++,o){case e.TRIANGLES:r.triangles+=s*(a/3);break;case e.LINES:r.lines+=s*(a/2);break;case e.LINE_STRIP:r.lines+=s*(a-1);break;case e.LINE_LOOP:r.lines+=s*a;break;case e.POINTS:r.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:t,render:r,programs:null,autoReset:!0,reset:i,update:n}}function XT(e,t,r){let n=new WeakMap,i=new Ct;function a(o,s,l){let u=o.morphTargetInfluences,c=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,p=c!==void 0?c.length:0,h=n.get(s);if(h===void 0||h.count!==p){let f=function(){P.dispose(),n.delete(s),s.removeEventListener("dispose",f)};h!==void 0&&h.texture.dispose();let y=s.morphAttributes.position!==void 0,_=s.morphAttributes.normal!==void 0,v=s.morphAttributes.color!==void 0,d=s.morphAttributes.position||[],m=s.morphAttributes.normal||[],g=s.morphAttributes.color||[],x=0;y===!0&&(x=1),_===!0&&(x=2),v===!0&&(x=3);let N=s.attributes.position.count*x,T=1;N>t.maxTextureSize&&(T=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);let b=new Float32Array(N*T*4*p),P=new K_(b,N,T,p);P.type=Gn,P.needsUpdate=!0;let w=x*4;for(let S=0;S<p;S++){let C=d[S],k=m[S],W=g[S],V=N*T*4*S;for(let Z=0;Z<C.count;Z++){let $=Z*w;y===!0&&(i.fromBufferAttribute(C,Z),b[V+$+0]=i.x,b[V+$+1]=i.y,b[V+$+2]=i.z,b[V+$+3]=0),_===!0&&(i.fromBufferAttribute(k,Z),b[V+$+4]=i.x,b[V+$+5]=i.y,b[V+$+6]=i.z,b[V+$+7]=0),v===!0&&(i.fromBufferAttribute(W,Z),b[V+$+8]=i.x,b[V+$+9]=i.y,b[V+$+10]=i.z,b[V+$+11]=W.itemSize===4?i.w:1)}}h={count:p,texture:P,size:new he(N,T)},n.set(s,h),s.addEventListener("dispose",f)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,r);else{let f=0;for(let _=0;_<u.length;_++)f+=u[_];let y=s.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",y),l.getUniforms().setValue(e,"morphTargetInfluences",u)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,r),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:a}}function jT(e,t,r,n){let i=new WeakMap;function a(l){let u=n.render.frame,c=l.geometry,p=t.get(l,c);if(i.get(p)!==u&&(t.update(p),i.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),i.get(l)!==u&&(r.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&r.update(l.instanceColor,e.ARRAY_BUFFER),i.set(l,u))),l.isSkinnedMesh){let h=l.skeleton;i.get(h)!==u&&(h.update(),i.set(h,u))}return p}function o(){i=new WeakMap}function s(l){let u=l.target;u.removeEventListener("dispose",s),r.remove(u.instanceMatrix),u.instanceColor!==null&&r.remove(u.instanceColor)}return{update:a,dispose:o}}var my=class extends hn{constructor(e,t,r,n,i,a,o,s,l,u=Vo){if(u!==Vo&&u!==qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===Vo&&(r=Pa),r===void 0&&u===qo&&(r=Yo),super(null,n,i,a,o,s,u,r,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Kr,this.minFilter=s!==void 0?s:Kr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},gy=new hn,J1=new my(1,1),vy=new K_,_y=new L2,yy=new dy,Q1=[],K1=[],e_=new Float32Array(16),t_=new Float32Array(9),r_=new Float32Array(4);function ts(e,t,r){let n=e[0];if(n<=0||n>0)return e;let i=t*r,a=Q1[i];if(a===void 0&&(a=new Float32Array(i),Q1[i]=a),t!==0){n.toArray(a,0);for(let o=1,s=0;o!==t;++o)s+=r,e[o].toArray(a,s)}return a}function rr(e,t){if(e.length!==t.length)return!1;for(let r=0,n=e.length;r<n;r++)if(e[r]!==t[r])return!1;return!0}function nr(e,t){for(let r=0,n=t.length;r<n;r++)e[r]=t[r]}function Jc(e,t){let r=K1[t];r===void 0&&(r=new Int32Array(t),K1[t]=r);for(let n=0;n!==t;++n)r[n]=e.allocateTextureUnit();return r}function $T(e,t){let r=this.cache;r[0]!==t&&(e.uniform1f(this.addr,t),r[0]=t)}function YT(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(rr(r,t))return;e.uniform2fv(this.addr,t),nr(r,t)}}function qT(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else if(t.r!==void 0)(r[0]!==t.r||r[1]!==t.g||r[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),r[0]=t.r,r[1]=t.g,r[2]=t.b);else{if(rr(r,t))return;e.uniform3fv(this.addr,t),nr(r,t)}}function ZT(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(rr(r,t))return;e.uniform4fv(this.addr,t),nr(r,t)}}function JT(e,t){let r=this.cache,n=t.elements;if(n===void 0){if(rr(r,t))return;e.uniformMatrix2fv(this.addr,!1,t),nr(r,t)}else{if(rr(r,n))return;r_.set(n),e.uniformMatrix2fv(this.addr,!1,r_),nr(r,n)}}function QT(e,t){let r=this.cache,n=t.elements;if(n===void 0){if(rr(r,t))return;e.uniformMatrix3fv(this.addr,!1,t),nr(r,t)}else{if(rr(r,n))return;t_.set(n),e.uniformMatrix3fv(this.addr,!1,t_),nr(r,n)}}function KT(e,t){let r=this.cache,n=t.elements;if(n===void 0){if(rr(r,t))return;e.uniformMatrix4fv(this.addr,!1,t),nr(r,t)}else{if(rr(r,n))return;e_.set(n),e.uniformMatrix4fv(this.addr,!1,e_),nr(r,n)}}function eb(e,t){let r=this.cache;r[0]!==t&&(e.uniform1i(this.addr,t),r[0]=t)}function tb(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(rr(r,t))return;e.uniform2iv(this.addr,t),nr(r,t)}}function rb(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else{if(rr(r,t))return;e.uniform3iv(this.addr,t),nr(r,t)}}function nb(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(rr(r,t))return;e.uniform4iv(this.addr,t),nr(r,t)}}function ib(e,t){let r=this.cache;r[0]!==t&&(e.uniform1ui(this.addr,t),r[0]=t)}function ab(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(rr(r,t))return;e.uniform2uiv(this.addr,t),nr(r,t)}}function ob(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else{if(rr(r,t))return;e.uniform3uiv(this.addr,t),nr(r,t)}}function sb(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(rr(r,t))return;e.uniform4uiv(this.addr,t),nr(r,t)}}function lb(e,t,r){let n=this.cache,i=r.allocateTextureUnit();n[0]!==i&&(e.uniform1i(this.addr,i),n[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(J1.compareFunction=$_,a=J1):a=gy,r.setTexture2D(t||a,i)}function ub(e,t,r){let n=this.cache,i=r.allocateTextureUnit();n[0]!==i&&(e.uniform1i(this.addr,i),n[0]=i),r.setTexture3D(t||_y,i)}function cb(e,t,r){let n=this.cache,i=r.allocateTextureUnit();n[0]!==i&&(e.uniform1i(this.addr,i),n[0]=i),r.setTextureCube(t||yy,i)}function db(e,t,r){let n=this.cache,i=r.allocateTextureUnit();n[0]!==i&&(e.uniform1i(this.addr,i),n[0]=i),r.setTexture2DArray(t||vy,i)}function hb(e){switch(e){case 5126:return $T;case 35664:return YT;case 35665:return qT;case 35666:return ZT;case 35674:return JT;case 35675:return QT;case 35676:return KT;case 5124:case 35670:return eb;case 35667:case 35671:return tb;case 35668:case 35672:return rb;case 35669:case 35673:return nb;case 5125:return ib;case 36294:return ab;case 36295:return ob;case 36296:return sb;case 35678:case 36198:case 36298:case 36306:case 35682:return lb;case 35679:case 36299:case 36307:return ub;case 35680:case 36300:case 36308:case 36293:return cb;case 36289:case 36303:case 36311:case 36292:return db}}function pb(e,t){e.uniform1fv(this.addr,t)}function fb(e,t){let r=ts(t,this.size,2);e.uniform2fv(this.addr,r)}function mb(e,t){let r=ts(t,this.size,3);e.uniform3fv(this.addr,r)}function gb(e,t){let r=ts(t,this.size,4);e.uniform4fv(this.addr,r)}function vb(e,t){let r=ts(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,r)}function _b(e,t){let r=ts(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,r)}function yb(e,t){let r=ts(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,r)}function xb(e,t){e.uniform1iv(this.addr,t)}function Sb(e,t){e.uniform2iv(this.addr,t)}function Mb(e,t){e.uniform3iv(this.addr,t)}function wb(e,t){e.uniform4iv(this.addr,t)}function Eb(e,t){e.uniform1uiv(this.addr,t)}function Tb(e,t){e.uniform2uiv(this.addr,t)}function bb(e,t){e.uniform3uiv(this.addr,t)}function Ab(e,t){e.uniform4uiv(this.addr,t)}function Cb(e,t,r){let n=this.cache,i=t.length,a=Jc(r,i);rr(n,a)||(e.uniform1iv(this.addr,a),nr(n,a));for(let o=0;o!==i;++o)r.setTexture2D(t[o]||gy,a[o])}function Rb(e,t,r){let n=this.cache,i=t.length,a=Jc(r,i);rr(n,a)||(e.uniform1iv(this.addr,a),nr(n,a));for(let o=0;o!==i;++o)r.setTexture3D(t[o]||_y,a[o])}function Pb(e,t,r){let n=this.cache,i=t.length,a=Jc(r,i);rr(n,a)||(e.uniform1iv(this.addr,a),nr(n,a));for(let o=0;o!==i;++o)r.setTextureCube(t[o]||yy,a[o])}function Nb(e,t,r){let n=this.cache,i=t.length,a=Jc(r,i);rr(n,a)||(e.uniform1iv(this.addr,a),nr(n,a));for(let o=0;o!==i;++o)r.setTexture2DArray(t[o]||vy,a[o])}function Lb(e){switch(e){case 5126:return pb;case 35664:return fb;case 35665:return mb;case 35666:return gb;case 35674:return vb;case 35675:return _b;case 35676:return yb;case 5124:case 35670:return xb;case 35667:case 35671:return Sb;case 35668:case 35672:return Mb;case 35669:case 35673:return wb;case 5125:return Eb;case 36294:return Tb;case 36295:return bb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return Cb;case 35679:case 36299:case 36307:return Rb;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return Nb}}var Ib=class{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=hb(t.type)}},Ub=class{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lb(t.type)}},Db=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){let n=this.seq;for(let i=0,a=n.length;i!==a;++i){let o=n[i];o.setValue(e,t[o.id],r)}}},Qp=/(\w+)(\])?(\[|\.)?/g;function n_(e,t){e.seq.push(t),e.map[t.id]=t}function Ob(e,t,r){let n=e.name,i=n.length;for(Qp.lastIndex=0;;){let a=Qp.exec(n),o=Qp.lastIndex,s=a[1],l=a[2]==="]",u=a[3];if(l&&(s=s|0),u===void 0||u==="["&&o+2===i){n_(r,u===void 0?new Ib(s,e,t):new Ub(s,e,t));break}else{let c=r.map[s];c===void 0&&(c=new Db(s),n_(r,c)),r=c}}}var Gc=class{constructor(e,t){this.seq=[],this.map={};let r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){let i=e.getActiveUniform(t,n),a=e.getUniformLocation(t,i.name);Ob(i,a,this)}}setValue(e,t,r,n){let i=this.map[t];i!==void 0&&i.setValue(e,r,n)}setOptional(e,t,r){let n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let i=0,a=t.length;i!==a;++i){let o=t[i],s=r[o.id];s.needsUpdate!==!1&&o.setValue(e,s.value,n)}}static seqWithValue(e,t){let r=[];for(let n=0,i=e.length;n!==i;++n){let a=e[n];a.id in t&&r.push(a)}return r}};function i_(e,t,r){let n=e.createShader(t);return e.shaderSource(n,r),e.compileShader(n),n}var kb=37297,Fb=0;function zb(e,t){let r=e.split(`
`),n=[],i=Math.max(t-6,0),a=Math.min(t+6,r.length);for(let o=i;o<a;o++){let s=o+1;n.push(`${s===t?">":" "} ${s}: ${r[o]}`)}return n.join(`
`)}var a_=new dt;function Bb(e){vt._getMatrix(a_,vt.workingColorSpace,e);let t=`mat3( ${a_.elements.map(r=>r.toFixed(4))} )`;switch(vt.getTransfer(e)){case Zc:return[t,"LinearTransferOETF"];case St:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function o_(e,t,r){let n=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(n&&i==="")return"";let a=/ERROR: 0:(\d+)/.exec(i);if(a){let o=parseInt(a[1]);return r.toUpperCase()+`

`+i+`

`+zb(e.getShaderSource(t),o)}else return i}function Hb(e,t){let r=Bb(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${r[1]}( vec4( value.rgb * ${r[0]}, value.a ) );`,"}"].join(`
`)}function Vb(e,t){let r;switch(t){case o2:r="Linear";break;case s2:r="Reinhard";break;case l2:r="Cineon";break;case D_:r="ACESFilmic";break;case c2:r="AgX";break;case d2:r="Neutral";break;case u2:r="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),r="Linear"}return"vec3 "+e+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}var Ec=new I;function Gb(){vt.getLuminanceCoefficients(Ec);let e=Ec.x.toFixed(4),t=Ec.y.toFixed(4),r=Ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${r} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wb(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fl).join(`
`)}function Xb(e){let t=[];for(let r in e){let n=e[r];n!==!1&&t.push("#define "+r+" "+n)}return t.join(`
`)}function jb(e,t){let r={},n=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let a=e.getActiveAttrib(t,i),o=a.name,s=1;a.type===e.FLOAT_MAT2&&(s=2),a.type===e.FLOAT_MAT3&&(s=3),a.type===e.FLOAT_MAT4&&(s=4),r[o]={type:a.type,location:e.getAttribLocation(t,o),locationSize:s}}return r}function fl(e){return e!==""}function s_(e,t){let r=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function l_(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $b=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jf(e){return e.replace($b,qb)}var Yb=new Map;function qb(e,t){let r=ct[t];if(r===void 0){let n=Yb.get(t);if(n!==void 0)r=ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jf(r)}var Zb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function u_(e){return e.replace(Zb,Jb)}function Jb(e,t,r,n){let i="";for(let a=parseInt(t);a<parseInt(r);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function c_(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Qb(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===I_?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===zM?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===ui&&(t="SHADOWMAP_TYPE_VSM"),t}function Kb(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case jo:case $o:t="ENVMAP_TYPE_CUBE";break;case qc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function eA(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===$o&&(t="ENVMAP_MODE_REFRACTION"),t}function tA(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case U_:t="ENVMAP_BLENDING_MULTIPLY";break;case i2:t="ENVMAP_BLENDING_MIX";break;case a2:t="ENVMAP_BLENDING_ADD";break}return t}function rA(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let r=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,r),112)),texelHeight:n,maxMip:r}}function nA(e,t,r,n){let i=e.getContext(),a=r.defines,o=r.vertexShader,s=r.fragmentShader,l=Qb(r),u=Kb(r),c=eA(r),p=tA(r),h=rA(r),f=Wb(r),y=Xb(a),_=i.createProgram(),v,d,m=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(v=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,y].filter(fl).join(`
`),v.length>0&&(v+=`
`),d=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,y].filter(fl).join(`
`),d.length>0&&(d+=`
`)):(v=[c_(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,y,r.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",r.batching?"#define USE_BATCHING":"",r.batchingColor?"#define USE_BATCHING_COLOR":"",r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.instancingMorph?"#define USE_INSTANCING_MORPH":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+c:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fl).join(`
`),d=[c_(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,y,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+u:"",r.envMap?"#define "+c:"",r.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.dispersion?"#define USE_DISPERSION":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor||r.batchingColor?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",r.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==$i?"#define TONE_MAPPING":"",r.toneMapping!==$i?ct.tonemapping_pars_fragment:"",r.toneMapping!==$i?Vb("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,Hb("linearToOutputTexel",r.outputColorSpace),Gb(),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(fl).join(`
`)),o=Jf(o),o=s_(o,r),o=l_(o,r),s=Jf(s),s=s_(s,r),s=l_(s,r),o=u_(o),s=u_(s),r.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,d=["#define varying in",r.glslVersion===E1?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===E1?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let g=m+v+o,x=m+d+s,N=i_(i,i.VERTEX_SHADER,g),T=i_(i,i.FRAGMENT_SHADER,x);i.attachShader(_,N),i.attachShader(_,T),r.index0AttributeName!==void 0?i.bindAttribLocation(_,0,r.index0AttributeName):r.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(C){if(e.debug.checkShaderErrors){let k=i.getProgramInfoLog(_).trim(),W=i.getShaderInfoLog(N).trim(),V=i.getShaderInfoLog(T).trim(),Z=!0,$=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Z=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(i,_,N,T);else{let ae=o_(i,N,"vertex"),Y=o_(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+ae+`
`+Y)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(W===""||V==="")&&($=!1);$&&(C.diagnostics={runnable:Z,programLog:k,vertexShader:{log:W,prefix:v},fragmentShader:{log:V,prefix:d}})}i.deleteShader(N),i.deleteShader(T),P=new Gc(i,_),w=jb(i,_)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let S=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,kb)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=Fb++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=T,this}var iA=0,aA=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),i=this._getShaderStage(r),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){let t=this.shaderCache,r=t.get(e);return r===void 0&&(r=new oA(e),t.set(e,r)),r}},oA=class{constructor(e){this.id=iA++,this.code=e,this.usedTimes=0}};function sA(e,t,r,n,i,a,o){let s=new ny,l=new aA,u=new Set,c=[],p=i.logarithmicDepthBuffer,h=i.vertexTextures,f=i.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return u.add(w),w===0?"uv":`uv${w}`}function v(w,S,C,k,W){let V=k.fog,Z=W.geometry,$=w.isMeshStandardMaterial?k.environment:null,ae=(w.isMeshStandardMaterial?r:t).get(w.envMap||$),Y=ae&&ae.mapping===qc?ae.image.height:null,oe=y[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let ve=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,We=ve!==void 0?ve.length:0,nt=0;Z.morphAttributes.position!==void 0&&(nt=1),Z.morphAttributes.normal!==void 0&&(nt=2),Z.morphAttributes.color!==void 0&&(nt=3);let J,pe,Ce,Le;if(oe){let mt=zn[oe];J=mt.vertexShader,pe=mt.fragmentShader}else J=w.vertexShader,pe=w.fragmentShader,l.update(w),Ce=l.getVertexShaderID(w),Le=l.getFragmentShaderID(w);let _e=e.getRenderTarget(),Be=e.state.buffers.depth.getReversed(),Ke=W.isInstancedMesh===!0,Ye=W.isBatchedMesh===!0,K=!!w.map,ge=!!w.matcap,R=!!ae,Ie=!!w.aoMap,fe=!!w.lightMap,Ue=!!w.bumpMap,se=!!w.normalMap,qe=!!w.displacementMap,we=!!w.emissiveMap,De=!!w.metalnessMap,A=!!w.roughnessMap,M=w.anisotropy>0,F=w.clearcoat>0,Q=w.dispersion>0,ne=w.iridescence>0,q=w.sheen>0,He=w.transmission>0,xe=M&&!!w.anisotropyMap,Te=F&&!!w.clearcoatMap,Ze=F&&!!w.clearcoatNormalMap,me=F&&!!w.clearcoatRoughnessMap,Ee=ne&&!!w.iridescenceMap,lt=ne&&!!w.iridescenceThicknessMap,je=q&&!!w.sheenColorMap,be=q&&!!w.sheenRoughnessMap,tt=!!w.specularMap,rt=!!w.specularColorMap,Et=!!w.specularIntensityMap,O=He&&!!w.transmissionMap,ce=He&&!!w.thicknessMap,j=!!w.gradientMap,te=!!w.alphaMap,Me=w.alphaTest>0,ye=!!w.alphaHash,pt=!!w.extensions,Ut=$i;w.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Ut=e.toneMapping);let ir={shaderID:oe,shaderType:w.type,shaderName:w.name,vertexShader:J,fragmentShader:pe,defines:w.defines,customVertexShaderID:Ce,customFragmentShaderID:Le,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Ye,batchingColor:Ye&&W._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&W.instanceColor!==null,instancingMorph:Ke&&W.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:_e===null?e.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Jo,alphaToCoverage:!!w.alphaToCoverage,map:K,matcap:ge,envMap:R,envMapMode:R&&ae.mapping,envMapCubeUVHeight:Y,aoMap:Ie,lightMap:fe,bumpMap:Ue,normalMap:se,displacementMap:h&&qe,emissiveMap:we,normalMapObjectSpace:se&&w.normalMapType===m2,normalMapTangentSpace:se&&w.normalMapType===j_,metalnessMap:De,roughnessMap:A,anisotropy:M,anisotropyMap:xe,clearcoat:F,clearcoatMap:Te,clearcoatNormalMap:Ze,clearcoatRoughnessMap:me,dispersion:Q,iridescence:ne,iridescenceMap:Ee,iridescenceThicknessMap:lt,sheen:q,sheenColorMap:je,sheenRoughnessMap:be,specularMap:tt,specularColorMap:rt,specularIntensityMap:Et,transmission:He,transmissionMap:O,thicknessMap:ce,gradientMap:j,opaque:w.transparent===!1&&w.blending===Ho&&w.alphaToCoverage===!1,alphaMap:te,alphaTest:Me,alphaHash:ye,combine:w.combine,mapUv:K&&_(w.map.channel),aoMapUv:Ie&&_(w.aoMap.channel),lightMapUv:fe&&_(w.lightMap.channel),bumpMapUv:Ue&&_(w.bumpMap.channel),normalMapUv:se&&_(w.normalMap.channel),displacementMapUv:qe&&_(w.displacementMap.channel),emissiveMapUv:we&&_(w.emissiveMap.channel),metalnessMapUv:De&&_(w.metalnessMap.channel),roughnessMapUv:A&&_(w.roughnessMap.channel),anisotropyMapUv:xe&&_(w.anisotropyMap.channel),clearcoatMapUv:Te&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:je&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:be&&_(w.sheenRoughnessMap.channel),specularMapUv:tt&&_(w.specularMap.channel),specularColorMapUv:rt&&_(w.specularColorMap.channel),specularIntensityMapUv:Et&&_(w.specularIntensityMap.channel),transmissionMapUv:O&&_(w.transmissionMap.channel),thicknessMapUv:ce&&_(w.thicknessMap.channel),alphaMapUv:te&&_(w.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(se||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Z.attributes.uv&&(K||te),fog:!!V,useFog:w.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:Be,skinning:W.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:We,morphTextureStride:nt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:e.shadowMap.enabled&&C.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ut,decodeVideoTexture:K&&w.map.isVideoTexture===!0&&vt.getTransfer(w.map.colorSpace)===St,decodeVideoTextureEmissive:we&&w.emissiveMap.isVideoTexture===!0&&vt.getTransfer(w.emissiveMap.colorSpace)===St,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Bn,flipSided:w.side===Ir,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:pt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&w.extensions.multiDraw===!0||Ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ir.vertexUv1s=u.has(1),ir.vertexUv2s=u.has(2),ir.vertexUv3s=u.has(3),u.clear(),ir}function d(w){let S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(let C in w.defines)S.push(C),S.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(m(S,w),g(S,w),S.push(e.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function m(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function g(w,S){s.disableAll(),S.supportsVertexTextures&&s.enable(0),S.instancing&&s.enable(1),S.instancingColor&&s.enable(2),S.instancingMorph&&s.enable(3),S.matcap&&s.enable(4),S.envMap&&s.enable(5),S.normalMapObjectSpace&&s.enable(6),S.normalMapTangentSpace&&s.enable(7),S.clearcoat&&s.enable(8),S.iridescence&&s.enable(9),S.alphaTest&&s.enable(10),S.vertexColors&&s.enable(11),S.vertexAlphas&&s.enable(12),S.vertexUv1s&&s.enable(13),S.vertexUv2s&&s.enable(14),S.vertexUv3s&&s.enable(15),S.vertexTangents&&s.enable(16),S.anisotropy&&s.enable(17),S.alphaHash&&s.enable(18),S.batching&&s.enable(19),S.dispersion&&s.enable(20),S.batchingColor&&s.enable(21),w.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.reverseDepthBuffer&&s.enable(4),S.skinning&&s.enable(5),S.morphTargets&&s.enable(6),S.morphNormals&&s.enable(7),S.morphColors&&s.enable(8),S.premultipliedAlpha&&s.enable(9),S.shadowMapEnabled&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.transmission&&s.enable(15),S.sheen&&s.enable(16),S.opaque&&s.enable(17),S.pointsUvs&&s.enable(18),S.decodeVideoTexture&&s.enable(19),S.decodeVideoTextureEmissive&&s.enable(20),S.alphaToCoverage&&s.enable(21),w.push(s.mask)}function x(w){let S=y[w.type],C;if(S){let k=zn[S];C=W2.clone(k.uniforms)}else C=w.uniforms;return C}function N(w,S){let C;for(let k=0,W=c.length;k<W;k++){let V=c[k];if(V.cacheKey===S){C=V,++C.usedTimes;break}}return C===void 0&&(C=new nA(e,S,w,a),c.push(C)),C}function T(w){if(--w.usedTimes===0){let S=c.indexOf(w);c[S]=c[c.length-1],c.pop(),w.destroy()}}function b(w){l.remove(w)}function P(){l.dispose()}return{getParameters:v,getProgramCacheKey:d,getUniforms:x,acquireProgram:N,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:P}}function lA(){let e=new WeakMap;function t(o){return e.has(o)}function r(o){let s=e.get(o);return s===void 0&&(s={},e.set(o,s)),s}function n(o){e.delete(o)}function i(o,s,l){e.get(o)[s]=l}function a(){e=new WeakMap}return{has:t,get:r,remove:n,update:i,dispose:a}}function uA(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function d_(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function h_(){let e=[],t=0,r=[],n=[],i=[];function a(){t=0,r.length=0,n.length=0,i.length=0}function o(p,h,f,y,_,v){let d=e[t];return d===void 0?(d={id:p.id,object:p,geometry:h,material:f,groupOrder:y,renderOrder:p.renderOrder,z:_,group:v},e[t]=d):(d.id=p.id,d.object=p,d.geometry=h,d.material=f,d.groupOrder=y,d.renderOrder=p.renderOrder,d.z=_,d.group=v),t++,d}function s(p,h,f,y,_,v){let d=o(p,h,f,y,_,v);f.transmission>0?n.push(d):f.transparent===!0?i.push(d):r.push(d)}function l(p,h,f,y,_,v){let d=o(p,h,f,y,_,v);f.transmission>0?n.unshift(d):f.transparent===!0?i.unshift(d):r.unshift(d)}function u(p,h){r.length>1&&r.sort(p||uA),n.length>1&&n.sort(h||d_),i.length>1&&i.sort(h||d_)}function c(){for(let p=t,h=e.length;p<h;p++){let f=e[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:r,transmissive:n,transparent:i,init:a,push:s,unshift:l,finish:c,sort:u}}function cA(){let e=new WeakMap;function t(n,i){let a=e.get(n),o;return a===void 0?(o=new h_,e.set(n,[o])):i>=a.length?(o=new h_,a.push(o)):o=a[i],o}function r(){e=new WeakMap}return{get:t,dispose:r}}function dA(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let r;switch(t.type){case"DirectionalLight":r={direction:new I,color:new st};break;case"SpotLight":r={position:new I,direction:new I,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new I,color:new st,distance:0,decay:0};break;case"HemisphereLight":r={direction:new I,skyColor:new st,groundColor:new st};break;case"RectAreaLight":r={color:new st,position:new I,halfWidth:new I,halfHeight:new I};break}return e[t.id]=r,r}}}function hA(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let r;switch(t.type){case"DirectionalLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=r,r}}}var pA=0;function fA(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function mA(e){let t=new dA,r=hA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new I);let i=new I,a=new Rt,o=new Rt;function s(u){let c=0,p=0,h=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,y=0,_=0,v=0,d=0,m=0,g=0,x=0,N=0,T=0,b=0;u.sort(fA);for(let w=0,S=u.length;w<S;w++){let C=u[w],k=C.color,W=C.intensity,V=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)c+=k.r*W,p+=k.g*W,h+=k.b*W;else if(C.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(C.sh.coefficients[$],W);b++}else if(C.isDirectionalLight){let $=t.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let ae=C.shadow,Y=r.get(C);Y.shadowIntensity=ae.intensity,Y.shadowBias=ae.bias,Y.shadowNormalBias=ae.normalBias,Y.shadowRadius=ae.radius,Y.shadowMapSize=ae.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=C.shadow.matrix,m++}n.directional[f]=$,f++}else if(C.isSpotLight){let $=t.get(C);$.position.setFromMatrixPosition(C.matrixWorld),$.color.copy(k).multiplyScalar(W),$.distance=V,$.coneCos=Math.cos(C.angle),$.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),$.decay=C.decay,n.spot[_]=$;let ae=C.shadow;if(C.map&&(n.spotLightMap[N]=C.map,N++,ae.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[_]=ae.matrix,C.castShadow){let Y=r.get(C);Y.shadowIntensity=ae.intensity,Y.shadowBias=ae.bias,Y.shadowNormalBias=ae.normalBias,Y.shadowRadius=ae.radius,Y.shadowMapSize=ae.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=Z,x++}_++}else if(C.isRectAreaLight){let $=t.get(C);$.color.copy(k).multiplyScalar(W),$.halfWidth.set(C.width*.5,0,0),$.halfHeight.set(0,C.height*.5,0),n.rectArea[v]=$,v++}else if(C.isPointLight){let $=t.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),$.distance=C.distance,$.decay=C.decay,C.castShadow){let ae=C.shadow,Y=r.get(C);Y.shadowIntensity=ae.intensity,Y.shadowBias=ae.bias,Y.shadowNormalBias=ae.normalBias,Y.shadowRadius=ae.radius,Y.shadowMapSize=ae.mapSize,Y.shadowCameraNear=ae.camera.near,Y.shadowCameraFar=ae.camera.far,n.pointShadow[y]=Y,n.pointShadowMap[y]=Z,n.pointShadowMatrix[y]=C.shadow.matrix,g++}n.point[y]=$,y++}else if(C.isHemisphereLight){let $=t.get(C);$.skyColor.copy(C.color).multiplyScalar(W),$.groundColor.copy(C.groundColor).multiplyScalar(W),n.hemi[d]=$,d++}}v>0&&(e.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=p,n.ambient[2]=h;let P=n.hash;(P.directionalLength!==f||P.pointLength!==y||P.spotLength!==_||P.rectAreaLength!==v||P.hemiLength!==d||P.numDirectionalShadows!==m||P.numPointShadows!==g||P.numSpotShadows!==x||P.numSpotMaps!==N||P.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=v,n.point.length=y,n.hemi.length=d,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=x+N-T,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=b,P.directionalLength=f,P.pointLength=y,P.spotLength=_,P.rectAreaLength=v,P.hemiLength=d,P.numDirectionalShadows=m,P.numPointShadows=g,P.numSpotShadows=x,P.numSpotMaps=N,P.numLightProbes=b,n.version=pA++)}function l(u,c){let p=0,h=0,f=0,y=0,_=0,v=c.matrixWorldInverse;for(let d=0,m=u.length;d<m;d++){let g=u[d];if(g.isDirectionalLight){let x=n.directional[p];x.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(v),p++}else if(g.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(v),x.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(v),f++}else if(g.isRectAreaLight){let x=n.rectArea[y];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(v),o.identity(),a.copy(g.matrixWorld),a.premultiply(v),o.extractRotation(a),x.halfWidth.set(g.width*.5,0,0),x.halfHeight.set(0,g.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),y++}else if(g.isPointLight){let x=n.point[h];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(v),h++}else if(g.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(g.matrixWorld),x.direction.transformDirection(v),_++}}}return{setup:s,setupView:l,state:n}}function p_(e){let t=new mA(e),r=[],n=[];function i(c){u.camera=c,r.length=0,n.length=0}function a(c){r.push(c)}function o(c){n.push(c)}function s(){t.setup(r)}function l(c){t.setupView(r,c)}let u={lightsArray:r,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:u,setupLights:s,setupLightsView:l,pushLight:a,pushShadow:o}}function gA(e){let t=new WeakMap;function r(i,a=0){let o=t.get(i),s;return o===void 0?(s=new p_(e),t.set(i,[s])):a>=o.length?(s=new p_(e),o.push(s)):s=o[a],s}function n(){t=new WeakMap}return{get:r,dispose:n}}var vA=class extends Ua{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=p2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_A=class extends Ua{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},yA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function SA(e,t,r){let n=new cm,i=new he,a=new he,o=new Ct,s=new vA({depthPacking:f2}),l=new _A,u={},c=r.maxTextureSize,p={[Yi]:Ir,[Ir]:Yi,[Bn]:Bn},h=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:yA,fragmentShader:xA}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let y=new wr;y.setAttribute("position",new Ur(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ae(y,h),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=I_;let d=this.type;this.render=function(T,b,P){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||T.length===0)return;let w=e.getRenderTarget(),S=e.getActiveCubeFace(),C=e.getActiveMipmapLevel(),k=e.state;k.setBlending(ji),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let W=d!==ui&&this.type===ui,V=d===ui&&this.type!==ui;for(let Z=0,$=T.length;Z<$;Z++){let ae=T[Z],Y=ae.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);let oe=Y.getFrameExtents();if(i.multiply(oe),a.copy(Y.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(a.x=Math.floor(c/oe.x),i.x=a.x*oe.x,Y.mapSize.x=a.x),i.y>c&&(a.y=Math.floor(c/oe.y),i.y=a.y*oe.y,Y.mapSize.y=a.y)),Y.map===null||W===!0||V===!0){let We=this.type!==ui?{minFilter:Kr,magFilter:Kr}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Na(i.x,i.y,We),Y.map.texture.name=ae.name+".shadowMap",Y.camera.updateProjectionMatrix()}e.setRenderTarget(Y.map),e.clear();let ve=Y.getViewportCount();for(let We=0;We<ve;We++){let nt=Y.getViewport(We);o.set(a.x*nt.x,a.y*nt.y,a.x*nt.z,a.y*nt.w),k.viewport(o),Y.updateMatrices(ae,We),n=Y.getFrustum(),x(b,P,Y.camera,ae,this.type)}Y.isPointLightShadow!==!0&&this.type===ui&&m(Y,P),Y.needsUpdate=!1}d=this.type,v.needsUpdate=!1,e.setRenderTarget(w,S,C)};function m(T,b){let P=t.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Na(i.x,i.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(b,null,P,h,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(b,null,P,f,_,null)}function g(T,b,P,w){let S=null,C=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)S=C;else if(S=P.isPointLight===!0?l:s,e.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let k=S.uuid,W=b.uuid,V=u[k];V===void 0&&(V={},u[k]=V);let Z=V[W];Z===void 0&&(Z=S.clone(),V[W]=Z,b.addEventListener("dispose",N)),S=Z}if(S.visible=b.visible,S.wireframe=b.wireframe,w===ui?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:p[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let k=e.properties.get(S);k.light=P}return S}function x(T,b,P,w,S){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===ui)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let k=t.update(T),W=T.material;if(Array.isArray(W)){let V=k.groups;for(let Z=0,$=V.length;Z<$;Z++){let ae=V[Z],Y=W[ae.materialIndex];if(Y&&Y.visible){let oe=g(T,Y,w,S);T.onBeforeShadow(e,T,b,P,k,oe,ae),e.renderBufferDirect(P,null,k,oe,T,ae),T.onAfterShadow(e,T,b,P,k,oe,ae)}}}else if(W.visible){let V=g(T,W,w,S);T.onBeforeShadow(e,T,b,P,k,V,null),e.renderBufferDirect(P,null,k,V,T,null),T.onAfterShadow(e,T,b,P,k,V,null)}}let C=T.children;for(let k=0,W=C.length;k<W;k++)x(C[k],b,P,w,S)}function N(T){T.target.removeEventListener("dispose",N);for(let b in u){let P=u[b],w=T.target.uuid;w in P&&(P[w].dispose(),delete P[w])}}}var MA={[cf]:df,[hf]:mf,[pf]:gf,[Xo]:ff,[df]:cf,[mf]:hf,[gf]:pf,[ff]:Xo};function wA(e,t){function r(){let O=!1,ce=new Ct,j=null,te=new Ct(0,0,0,0);return{setMask:function(Me){j!==Me&&!O&&(e.colorMask(Me,Me,Me,Me),j=Me)},setLocked:function(Me){O=Me},setClear:function(Me,ye,pt,Ut,ir){ir===!0&&(Me*=Ut,ye*=Ut,pt*=Ut),ce.set(Me,ye,pt,Ut),te.equals(ce)===!1&&(e.clearColor(Me,ye,pt,Ut),te.copy(ce))},reset:function(){O=!1,j=null,te.set(-1,0,0,0)}}}function n(){let O=!1,ce=!1,j=null,te=null,Me=null;return{setReversed:function(ye){if(ce!==ye){let pt=t.get("EXT_clip_control");ce?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT);let Ut=Me;Me=null,this.setClear(Ut)}ce=ye},getReversed:function(){return ce},setTest:function(ye){ye?_e(e.DEPTH_TEST):Be(e.DEPTH_TEST)},setMask:function(ye){j!==ye&&!O&&(e.depthMask(ye),j=ye)},setFunc:function(ye){if(ce&&(ye=MA[ye]),te!==ye){switch(ye){case cf:e.depthFunc(e.NEVER);break;case df:e.depthFunc(e.ALWAYS);break;case hf:e.depthFunc(e.LESS);break;case Xo:e.depthFunc(e.LEQUAL);break;case pf:e.depthFunc(e.EQUAL);break;case ff:e.depthFunc(e.GEQUAL);break;case mf:e.depthFunc(e.GREATER);break;case gf:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}te=ye}},setLocked:function(ye){O=ye},setClear:function(ye){Me!==ye&&(ce&&(ye=1-ye),e.clearDepth(ye),Me=ye)},reset:function(){O=!1,j=null,te=null,Me=null,ce=!1}}}function i(){let O=!1,ce=null,j=null,te=null,Me=null,ye=null,pt=null,Ut=null,ir=null;return{setTest:function(mt){O||(mt?_e(e.STENCIL_TEST):Be(e.STENCIL_TEST))},setMask:function(mt){ce!==mt&&!O&&(e.stencilMask(mt),ce=mt)},setFunc:function(mt,mn,Hr){(j!==mt||te!==mn||Me!==Hr)&&(e.stencilFunc(mt,mn,Hr),j=mt,te=mn,Me=Hr)},setOp:function(mt,mn,Hr){(ye!==mt||pt!==mn||Ut!==Hr)&&(e.stencilOp(mt,mn,Hr),ye=mt,pt=mn,Ut=Hr)},setLocked:function(mt){O=mt},setClear:function(mt){ir!==mt&&(e.clearStencil(mt),ir=mt)},reset:function(){O=!1,ce=null,j=null,te=null,Me=null,ye=null,pt=null,Ut=null,ir=null}}}let a=new r,o=new n,s=new i,l=new WeakMap,u=new WeakMap,c={},p={},h=new WeakMap,f=[],y=null,_=!1,v=null,d=null,m=null,g=null,x=null,N=null,T=null,b=new st(0,0,0),P=0,w=!1,S=null,C=null,k=null,W=null,V=null,Z=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,ae=0,Y=e.getParameter(e.VERSION);Y.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(Y)[1]),$=ae>=1):Y.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),$=ae>=2);let oe=null,ve={},We=e.getParameter(e.SCISSOR_BOX),nt=e.getParameter(e.VIEWPORT),J=new Ct().fromArray(We),pe=new Ct().fromArray(nt);function Ce(O,ce,j,te){let Me=new Uint8Array(4),ye=e.createTexture();e.bindTexture(O,ye),e.texParameteri(O,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(O,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let pt=0;pt<j;pt++)O===e.TEXTURE_3D||O===e.TEXTURE_2D_ARRAY?e.texImage3D(ce,0,e.RGBA,1,1,te,0,e.RGBA,e.UNSIGNED_BYTE,Me):e.texImage2D(ce+pt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Me);return ye}let Le={};Le[e.TEXTURE_2D]=Ce(e.TEXTURE_2D,e.TEXTURE_2D,1),Le[e.TEXTURE_CUBE_MAP]=Ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[e.TEXTURE_2D_ARRAY]=Ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Le[e.TEXTURE_3D]=Ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),_e(e.DEPTH_TEST),o.setFunc(Xo),Ue(!1),se(v1),_e(e.CULL_FACE),Ie(ji);function _e(O){c[O]!==!0&&(e.enable(O),c[O]=!0)}function Be(O){c[O]!==!1&&(e.disable(O),c[O]=!1)}function Ke(O,ce){return p[O]!==ce?(e.bindFramebuffer(O,ce),p[O]=ce,O===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=ce),O===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ye(O,ce){let j=f,te=!1;if(O){j=h.get(ce),j===void 0&&(j=[],h.set(ce,j));let Me=O.textures;if(j.length!==Me.length||j[0]!==e.COLOR_ATTACHMENT0){for(let ye=0,pt=Me.length;ye<pt;ye++)j[ye]=e.COLOR_ATTACHMENT0+ye;j.length=Me.length,te=!0}}else j[0]!==e.BACK&&(j[0]=e.BACK,te=!0);te&&e.drawBuffers(j)}function K(O){return y!==O?(e.useProgram(O),y=O,!0):!1}let ge={[Ea]:e.FUNC_ADD,[HM]:e.FUNC_SUBTRACT,[VM]:e.FUNC_REVERSE_SUBTRACT};ge[GM]=e.MIN,ge[WM]=e.MAX;let R={[XM]:e.ZERO,[jM]:e.ONE,[$M]:e.SRC_COLOR,[lf]:e.SRC_ALPHA,[KM]:e.SRC_ALPHA_SATURATE,[JM]:e.DST_COLOR,[qM]:e.DST_ALPHA,[YM]:e.ONE_MINUS_SRC_COLOR,[uf]:e.ONE_MINUS_SRC_ALPHA,[QM]:e.ONE_MINUS_DST_COLOR,[ZM]:e.ONE_MINUS_DST_ALPHA,[e2]:e.CONSTANT_COLOR,[t2]:e.ONE_MINUS_CONSTANT_COLOR,[r2]:e.CONSTANT_ALPHA,[n2]:e.ONE_MINUS_CONSTANT_ALPHA};function Ie(O,ce,j,te,Me,ye,pt,Ut,ir,mt){if(O===ji){_===!0&&(Be(e.BLEND),_=!1);return}if(_===!1&&(_e(e.BLEND),_=!0),O!==BM){if(O!==v||mt!==w){if((d!==Ea||x!==Ea)&&(e.blendEquation(e.FUNC_ADD),d=Ea,x=Ea),mt)switch(O){case Ho:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Wc:e.blendFunc(e.ONE,e.ONE);break;case _1:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case y1:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ho:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Wc:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case _1:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case y1:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}m=null,g=null,N=null,T=null,b.set(0,0,0),P=0,v=O,w=mt}return}Me=Me||ce,ye=ye||j,pt=pt||te,(ce!==d||Me!==x)&&(e.blendEquationSeparate(ge[ce],ge[Me]),d=ce,x=Me),(j!==m||te!==g||ye!==N||pt!==T)&&(e.blendFuncSeparate(R[j],R[te],R[ye],R[pt]),m=j,g=te,N=ye,T=pt),(Ut.equals(b)===!1||ir!==P)&&(e.blendColor(Ut.r,Ut.g,Ut.b,ir),b.copy(Ut),P=ir),v=O,w=!1}function fe(O,ce){O.side===Bn?Be(e.CULL_FACE):_e(e.CULL_FACE);let j=O.side===Ir;ce&&(j=!j),Ue(j),O.blending===Ho&&O.transparent===!1?Ie(ji):Ie(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),a.setMask(O.colorWrite);let te=O.stencilWrite;s.setTest(te),te&&(s.setMask(O.stencilWriteMask),s.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),s.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),we(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?_e(e.SAMPLE_ALPHA_TO_COVERAGE):Be(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(O){S!==O&&(O?e.frontFace(e.CW):e.frontFace(e.CCW),S=O)}function se(O){O!==kM?(_e(e.CULL_FACE),O!==C&&(O===v1?e.cullFace(e.BACK):O===FM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Be(e.CULL_FACE),C=O}function qe(O){O!==k&&($&&e.lineWidth(O),k=O)}function we(O,ce,j){O?(_e(e.POLYGON_OFFSET_FILL),(W!==ce||V!==j)&&(e.polygonOffset(ce,j),W=ce,V=j)):Be(e.POLYGON_OFFSET_FILL)}function De(O){O?_e(e.SCISSOR_TEST):Be(e.SCISSOR_TEST)}function A(O){O===void 0&&(O=e.TEXTURE0+Z-1),oe!==O&&(e.activeTexture(O),oe=O)}function M(O,ce,j){j===void 0&&(oe===null?j=e.TEXTURE0+Z-1:j=oe);let te=ve[j];te===void 0&&(te={type:void 0,texture:void 0},ve[j]=te),(te.type!==O||te.texture!==ce)&&(oe!==j&&(e.activeTexture(j),oe=j),e.bindTexture(O,ce||Le[O]),te.type=O,te.texture=ce)}function F(){let O=ve[oe];O!==void 0&&O.type!==void 0&&(e.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Q(){try{e.compressedTexImage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{e.compressedTexImage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{e.texSubImage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function He(){try{e.texSubImage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ze(){try{e.texStorage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{e.texStorage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{e.texImage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{e.texImage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function je(O){J.equals(O)===!1&&(e.scissor(O.x,O.y,O.z,O.w),J.copy(O))}function be(O){pe.equals(O)===!1&&(e.viewport(O.x,O.y,O.z,O.w),pe.copy(O))}function tt(O,ce){let j=u.get(ce);j===void 0&&(j=new WeakMap,u.set(ce,j));let te=j.get(O);te===void 0&&(te=e.getUniformBlockIndex(ce,O.name),j.set(O,te))}function rt(O,ce){let j=u.get(ce).get(O);l.get(ce)!==j&&(e.uniformBlockBinding(ce,j,O.__bindingPointIndex),l.set(ce,j))}function Et(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},oe=null,ve={},p={},h=new WeakMap,f=[],y=null,_=!1,v=null,d=null,m=null,g=null,x=null,N=null,T=null,b=new st(0,0,0),P=0,w=!1,S=null,C=null,k=null,W=null,V=null,J.set(0,0,e.canvas.width,e.canvas.height),pe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:_e,disable:Be,bindFramebuffer:Ke,drawBuffers:Ye,useProgram:K,setBlending:Ie,setMaterial:fe,setFlipSided:Ue,setCullFace:se,setLineWidth:qe,setPolygonOffset:we,setScissorTest:De,activeTexture:A,bindTexture:M,unbindTexture:F,compressedTexImage2D:Q,compressedTexImage3D:ne,texImage2D:Ee,texImage3D:lt,updateUBOMapping:tt,uniformBlockBinding:rt,texStorage2D:Ze,texStorage3D:me,texSubImage2D:q,texSubImage3D:He,compressedTexSubImage2D:xe,compressedTexSubImage3D:Te,scissor:je,viewport:be,reset:Et}}function f_(e,t,r,n){let i=EA(n);switch(r){case B_:return e*t;case V_:return e*t;case G_:return e*t*2;case om:return e*t/i.components*i.byteLength;case sm:return e*t/i.components*i.byteLength;case W_:return e*t*2/i.components*i.byteLength;case lm:return e*t*2/i.components*i.byteLength;case H_:return e*t*3/i.components*i.byteLength;case Pn:return e*t*4/i.components*i.byteLength;case um:return e*t*4/i.components*i.byteLength;case Oc:case kc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Fc:case zc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Sf:case wf:return Math.max(e,16)*Math.max(t,8)/4;case xf:case Mf:return Math.max(e,8)*Math.max(t,8)/2;case Ef:case Tf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case bf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Af:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Cf:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Rf:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Pf:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Nf:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Lf:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case If:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Uf:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Df:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Of:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case kf:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ff:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case zf:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Bf:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Bc:case Hf:case Vf:return Math.ceil(e/4)*Math.ceil(t/4)*16;case X_:case Gf:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Wf:case Xf:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${r} format.`)}function EA(e){switch(e){case fi:case k_:return{byteLength:1,components:1};case _l:case F_:case Ml:return{byteLength:2,components:1};case im:case am:return{byteLength:2,components:4};case Pa:case nm:case Gn:return{byteLength:4,components:1};case z_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function TA(e,t,r,n,i,a,o){let s=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new he,c=new WeakMap,p,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,M){return f?new OffscreenCanvas(A,M):Yc("canvas")}function _(A,M,F){let Q=1,ne=De(A);if((ne.width>F||ne.height>F)&&(Q=F/Math.max(ne.width,ne.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let q=Math.floor(Q*ne.width),He=Math.floor(Q*ne.height);p===void 0&&(p=y(q,He));let xe=M?y(q,He):p;return xe.width=q,xe.height=He,xe.getContext("2d").drawImage(A,0,0,q,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+q+"x"+He+")."),xe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function v(A){return A.generateMipmaps}function d(A){e.generateMipmap(A)}function m(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function g(A,M,F,Q,ne=!1){if(A!==null){if(e[A]!==void 0)return e[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=M;if(M===e.RED&&(F===e.FLOAT&&(q=e.R32F),F===e.HALF_FLOAT&&(q=e.R16F),F===e.UNSIGNED_BYTE&&(q=e.R8)),M===e.RED_INTEGER&&(F===e.UNSIGNED_BYTE&&(q=e.R8UI),F===e.UNSIGNED_SHORT&&(q=e.R16UI),F===e.UNSIGNED_INT&&(q=e.R32UI),F===e.BYTE&&(q=e.R8I),F===e.SHORT&&(q=e.R16I),F===e.INT&&(q=e.R32I)),M===e.RG&&(F===e.FLOAT&&(q=e.RG32F),F===e.HALF_FLOAT&&(q=e.RG16F),F===e.UNSIGNED_BYTE&&(q=e.RG8)),M===e.RG_INTEGER&&(F===e.UNSIGNED_BYTE&&(q=e.RG8UI),F===e.UNSIGNED_SHORT&&(q=e.RG16UI),F===e.UNSIGNED_INT&&(q=e.RG32UI),F===e.BYTE&&(q=e.RG8I),F===e.SHORT&&(q=e.RG16I),F===e.INT&&(q=e.RG32I)),M===e.RGB_INTEGER&&(F===e.UNSIGNED_BYTE&&(q=e.RGB8UI),F===e.UNSIGNED_SHORT&&(q=e.RGB16UI),F===e.UNSIGNED_INT&&(q=e.RGB32UI),F===e.BYTE&&(q=e.RGB8I),F===e.SHORT&&(q=e.RGB16I),F===e.INT&&(q=e.RGB32I)),M===e.RGBA_INTEGER&&(F===e.UNSIGNED_BYTE&&(q=e.RGBA8UI),F===e.UNSIGNED_SHORT&&(q=e.RGBA16UI),F===e.UNSIGNED_INT&&(q=e.RGBA32UI),F===e.BYTE&&(q=e.RGBA8I),F===e.SHORT&&(q=e.RGBA16I),F===e.INT&&(q=e.RGBA32I)),M===e.RGB&&F===e.UNSIGNED_INT_5_9_9_9_REV&&(q=e.RGB9_E5),M===e.RGBA){let He=ne?Zc:vt.getTransfer(Q);F===e.FLOAT&&(q=e.RGBA32F),F===e.HALF_FLOAT&&(q=e.RGBA16F),F===e.UNSIGNED_BYTE&&(q=He===St?e.SRGB8_ALPHA8:e.RGBA8),F===e.UNSIGNED_SHORT_4_4_4_4&&(q=e.RGBA4),F===e.UNSIGNED_SHORT_5_5_5_1&&(q=e.RGB5_A1)}return(q===e.R16F||q===e.R32F||q===e.RG16F||q===e.RG32F||q===e.RGBA16F||q===e.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(A,M){let F;return A?M===null||M===Pa||M===Yo?F=e.DEPTH24_STENCIL8:M===Gn?F=e.DEPTH32F_STENCIL8:M===_l&&(F=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Pa||M===Yo?F=e.DEPTH_COMPONENT24:M===Gn?F=e.DEPTH_COMPONENT32F:M===_l&&(F=e.DEPTH_COMPONENT16),F}function N(A,M){return v(A)===!0||A.isFramebufferTexture&&A.minFilter!==Kr&&A.minFilter!==Vn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function T(A){let M=A.target;M.removeEventListener("dispose",T),P(M),M.isVideoTexture&&c.delete(M)}function b(A){let M=A.target;M.removeEventListener("dispose",b),S(M)}function P(A){let M=n.get(A);if(M.__webglInit===void 0)return;let F=A.source,Q=h.get(F);if(Q){let ne=Q[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&w(A),Object.keys(Q).length===0&&h.delete(F)}n.remove(A)}function w(A){let M=n.get(A);e.deleteTexture(M.__webglTexture);let F=A.source,Q=h.get(F);delete Q[M.__cacheKey],o.memory.textures--}function S(A){let M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let ne=0;ne<M.__webglFramebuffer[Q].length;ne++)e.deleteFramebuffer(M.__webglFramebuffer[Q][ne]);else e.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)e.deleteFramebuffer(M.__webglFramebuffer[Q]);else e.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&e.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&e.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&e.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let F=A.textures;for(let Q=0,ne=F.length;Q<ne;Q++){let q=n.get(F[Q]);q.__webglTexture&&(e.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(F[Q])}n.remove(A)}let C=0;function k(){C=0}function W(){let A=C;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),C+=1,A}function V(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function Z(A,M){let F=n.get(A);if(A.isVideoTexture&&qe(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){let Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(F,A,M);return}}r.bindTexture(e.TEXTURE_2D,F.__webglTexture,e.TEXTURE0+M)}function $(A,M){let F=n.get(A);if(A.version>0&&F.__version!==A.version){pe(F,A,M);return}r.bindTexture(e.TEXTURE_2D_ARRAY,F.__webglTexture,e.TEXTURE0+M)}function ae(A,M){let F=n.get(A);if(A.version>0&&F.__version!==A.version){pe(F,A,M);return}r.bindTexture(e.TEXTURE_3D,F.__webglTexture,e.TEXTURE0+M)}function Y(A,M){let F=n.get(A);if(A.version>0&&F.__version!==A.version){Ce(F,A,M);return}r.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+M)}let oe={[Xc]:e.REPEAT,[Aa]:e.CLAMP_TO_EDGE,[yf]:e.MIRRORED_REPEAT},ve={[Kr]:e.NEAREST,[h2]:e.NEAREST_MIPMAP_NEAREST,[ic]:e.NEAREST_MIPMAP_LINEAR,[Vn]:e.LINEAR,[wp]:e.LINEAR_MIPMAP_NEAREST,[Ca]:e.LINEAR_MIPMAP_LINEAR},We={[g2]:e.NEVER,[M2]:e.ALWAYS,[v2]:e.LESS,[$_]:e.LEQUAL,[_2]:e.EQUAL,[S2]:e.GEQUAL,[y2]:e.GREATER,[x2]:e.NOTEQUAL};function nt(A,M){if(M.type===Gn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Vn||M.magFilter===wp||M.magFilter===ic||M.magFilter===Ca||M.minFilter===Vn||M.minFilter===wp||M.minFilter===ic||M.minFilter===Ca)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,oe[M.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,oe[M.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,oe[M.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,ve[M.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,ve[M.minFilter]),M.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,We[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Kr||M.minFilter!==ic&&M.minFilter!==Ca||M.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function J(A,M){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",T));let Q=M.source,ne=h.get(Q);ne===void 0&&(ne={},h.set(Q,ne));let q=V(M);if(q!==A.__cacheKey){ne[q]===void 0&&(ne[q]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ne[q].usedTimes++;let He=ne[A.__cacheKey];He!==void 0&&(ne[A.__cacheKey].usedTimes--,He.usedTimes===0&&w(M)),A.__cacheKey=q,A.__webglTexture=ne[q].texture}return F}function pe(A,M,F){let Q=e.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=e.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=e.TEXTURE_3D);let ne=J(A,M),q=M.source;r.bindTexture(Q,A.__webglTexture,e.TEXTURE0+F);let He=n.get(q);if(q.version!==He.__version||ne===!0){r.activeTexture(e.TEXTURE0+F);let xe=vt.getPrimaries(vt.workingColorSpace),Te=M.colorSpace===Xi?null:vt.getPrimaries(M.colorSpace),Ze=M.colorSpace===Xi||xe===Te?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let me=_(M.image,!1,i.maxTextureSize);me=we(M,me);let Ee=a.convert(M.format,M.colorSpace),lt=a.convert(M.type),je=g(M.internalFormat,Ee,lt,M.colorSpace,M.isVideoTexture);nt(Q,M);let be,tt=M.mipmaps,rt=M.isVideoTexture!==!0,Et=He.__version===void 0||ne===!0,O=q.dataReady,ce=N(M,me);if(M.isDepthTexture)je=x(M.format===qo,M.type),Et&&(rt?r.texStorage2D(e.TEXTURE_2D,1,je,me.width,me.height):r.texImage2D(e.TEXTURE_2D,0,je,me.width,me.height,0,Ee,lt,null));else if(M.isDataTexture)if(tt.length>0){rt&&Et&&r.texStorage2D(e.TEXTURE_2D,ce,je,tt[0].width,tt[0].height);for(let j=0,te=tt.length;j<te;j++)be=tt[j],rt?O&&r.texSubImage2D(e.TEXTURE_2D,j,0,0,be.width,be.height,Ee,lt,be.data):r.texImage2D(e.TEXTURE_2D,j,je,be.width,be.height,0,Ee,lt,be.data);M.generateMipmaps=!1}else rt?(Et&&r.texStorage2D(e.TEXTURE_2D,ce,je,me.width,me.height),O&&r.texSubImage2D(e.TEXTURE_2D,0,0,0,me.width,me.height,Ee,lt,me.data)):r.texImage2D(e.TEXTURE_2D,0,je,me.width,me.height,0,Ee,lt,me.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){rt&&Et&&r.texStorage3D(e.TEXTURE_2D_ARRAY,ce,je,tt[0].width,tt[0].height,me.depth);for(let j=0,te=tt.length;j<te;j++)if(be=tt[j],M.format!==Pn)if(Ee!==null)if(rt){if(O)if(M.layerUpdates.size>0){let Me=f_(be.width,be.height,M.format,M.type);for(let ye of M.layerUpdates){let pt=be.data.subarray(ye*Me/be.data.BYTES_PER_ELEMENT,(ye+1)*Me/be.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,ye,be.width,be.height,1,Ee,pt)}M.clearLayerUpdates()}else r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,be.width,be.height,me.depth,Ee,be.data)}else r.compressedTexImage3D(e.TEXTURE_2D_ARRAY,j,je,be.width,be.height,me.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?O&&r.texSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,be.width,be.height,me.depth,Ee,lt,be.data):r.texImage3D(e.TEXTURE_2D_ARRAY,j,je,be.width,be.height,me.depth,0,Ee,lt,be.data)}else{rt&&Et&&r.texStorage2D(e.TEXTURE_2D,ce,je,tt[0].width,tt[0].height);for(let j=0,te=tt.length;j<te;j++)be=tt[j],M.format!==Pn?Ee!==null?rt?O&&r.compressedTexSubImage2D(e.TEXTURE_2D,j,0,0,be.width,be.height,Ee,be.data):r.compressedTexImage2D(e.TEXTURE_2D,j,je,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?O&&r.texSubImage2D(e.TEXTURE_2D,j,0,0,be.width,be.height,Ee,lt,be.data):r.texImage2D(e.TEXTURE_2D,j,je,be.width,be.height,0,Ee,lt,be.data)}else if(M.isDataArrayTexture)if(rt){if(Et&&r.texStorage3D(e.TEXTURE_2D_ARRAY,ce,je,me.width,me.height,me.depth),O)if(M.layerUpdates.size>0){let j=f_(me.width,me.height,M.format,M.type);for(let te of M.layerUpdates){let Me=me.data.subarray(te*j/me.data.BYTES_PER_ELEMENT,(te+1)*j/me.data.BYTES_PER_ELEMENT);r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,te,me.width,me.height,1,Ee,lt,Me)}M.clearLayerUpdates()}else r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ee,lt,me.data)}else r.texImage3D(e.TEXTURE_2D_ARRAY,0,je,me.width,me.height,me.depth,0,Ee,lt,me.data);else if(M.isData3DTexture)rt?(Et&&r.texStorage3D(e.TEXTURE_3D,ce,je,me.width,me.height,me.depth),O&&r.texSubImage3D(e.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ee,lt,me.data)):r.texImage3D(e.TEXTURE_3D,0,je,me.width,me.height,me.depth,0,Ee,lt,me.data);else if(M.isFramebufferTexture){if(Et)if(rt)r.texStorage2D(e.TEXTURE_2D,ce,je,me.width,me.height);else{let j=me.width,te=me.height;for(let Me=0;Me<ce;Me++)r.texImage2D(e.TEXTURE_2D,Me,je,j,te,0,Ee,lt,null),j>>=1,te>>=1}}else if(tt.length>0){if(rt&&Et){let j=De(tt[0]);r.texStorage2D(e.TEXTURE_2D,ce,je,j.width,j.height)}for(let j=0,te=tt.length;j<te;j++)be=tt[j],rt?O&&r.texSubImage2D(e.TEXTURE_2D,j,0,0,Ee,lt,be):r.texImage2D(e.TEXTURE_2D,j,je,Ee,lt,be);M.generateMipmaps=!1}else if(rt){if(Et){let j=De(me);r.texStorage2D(e.TEXTURE_2D,ce,je,j.width,j.height)}O&&r.texSubImage2D(e.TEXTURE_2D,0,0,0,Ee,lt,me)}else r.texImage2D(e.TEXTURE_2D,0,je,Ee,lt,me);v(M)&&d(Q),He.__version=q.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Ce(A,M,F){if(M.image.length!==6)return;let Q=J(A,M),ne=M.source;r.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+F);let q=n.get(ne);if(ne.version!==q.__version||Q===!0){r.activeTexture(e.TEXTURE0+F);let He=vt.getPrimaries(vt.workingColorSpace),xe=M.colorSpace===Xi?null:vt.getPrimaries(M.colorSpace),Te=M.colorSpace===Xi||He===xe?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let Ze=M.isCompressedTexture||M.image[0].isCompressedTexture,me=M.image[0]&&M.image[0].isDataTexture,Ee=[];for(let te=0;te<6;te++)!Ze&&!me?Ee[te]=_(M.image[te],!0,i.maxCubemapSize):Ee[te]=me?M.image[te].image:M.image[te],Ee[te]=we(M,Ee[te]);let lt=Ee[0],je=a.convert(M.format,M.colorSpace),be=a.convert(M.type),tt=g(M.internalFormat,je,be,M.colorSpace),rt=M.isVideoTexture!==!0,Et=q.__version===void 0||Q===!0,O=ne.dataReady,ce=N(M,lt);nt(e.TEXTURE_CUBE_MAP,M);let j;if(Ze){rt&&Et&&r.texStorage2D(e.TEXTURE_CUBE_MAP,ce,tt,lt.width,lt.height);for(let te=0;te<6;te++){j=Ee[te].mipmaps;for(let Me=0;Me<j.length;Me++){let ye=j[Me];M.format!==Pn?je!==null?rt?O&&r.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,0,0,ye.width,ye.height,je,ye.data):r.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,tt,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?O&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,0,0,ye.width,ye.height,je,be,ye.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,tt,ye.width,ye.height,0,je,be,ye.data)}}}else{if(j=M.mipmaps,rt&&Et){j.length>0&&ce++;let te=De(Ee[0]);r.texStorage2D(e.TEXTURE_CUBE_MAP,ce,tt,te.width,te.height)}for(let te=0;te<6;te++)if(me){rt?O&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ee[te].width,Ee[te].height,je,be,Ee[te].data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,tt,Ee[te].width,Ee[te].height,0,je,be,Ee[te].data);for(let Me=0;Me<j.length;Me++){let ye=j[Me].image[te].image;rt?O&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,0,0,ye.width,ye.height,je,be,ye.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,tt,ye.width,ye.height,0,je,be,ye.data)}}else{rt?O&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,je,be,Ee[te]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,tt,je,be,Ee[te]);for(let Me=0;Me<j.length;Me++){let ye=j[Me];rt?O&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,0,0,je,be,ye.image[te]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,tt,je,be,ye.image[te])}}}v(M)&&d(e.TEXTURE_CUBE_MAP),q.__version=ne.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Le(A,M,F,Q,ne,q){let He=a.convert(F.format,F.colorSpace),xe=a.convert(F.type),Te=g(F.internalFormat,He,xe,F.colorSpace),Ze=n.get(M),me=n.get(F);if(me.__renderTarget=M,!Ze.__hasExternalTextures){let Ee=Math.max(1,M.width>>q),lt=Math.max(1,M.height>>q);ne===e.TEXTURE_3D||ne===e.TEXTURE_2D_ARRAY?r.texImage3D(ne,q,Te,Ee,lt,M.depth,0,He,xe,null):r.texImage2D(ne,q,Te,Ee,lt,0,He,xe,null)}r.bindFramebuffer(e.FRAMEBUFFER,A),se(M)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,ne,me.__webglTexture,0,Ue(M)):(ne===e.TEXTURE_2D||ne>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Q,ne,me.__webglTexture,q),r.bindFramebuffer(e.FRAMEBUFFER,null)}function _e(A,M,F){if(e.bindRenderbuffer(e.RENDERBUFFER,A),M.depthBuffer){let Q=M.depthTexture,ne=Q&&Q.isDepthTexture?Q.type:null,q=x(M.stencilBuffer,ne),He=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,xe=Ue(M);se(M)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xe,q,M.width,M.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,xe,q,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,q,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,He,e.RENDERBUFFER,A)}else{let Q=M.textures;for(let ne=0;ne<Q.length;ne++){let q=Q[ne],He=a.convert(q.format,q.colorSpace),xe=a.convert(q.type),Te=g(q.internalFormat,He,xe,q.colorSpace),Ze=Ue(M);F&&se(M)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ze,Te,M.width,M.height):se(M)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ze,Te,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,Te,M.width,M.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Be(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(r.bindFramebuffer(e.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let F=n.get(M.depthTexture);F.__renderTarget=M,(!F.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z(M.depthTexture,0);let Q=F.__webglTexture,ne=Ue(M);if(M.depthTexture.format===Vo)se(M)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0,ne):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0);else if(M.depthTexture.format===qo)se(M)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0,ne):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ke(A){let M=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let Q=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){let ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",ne)};Q.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=Q}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Be(M.__webglFramebuffer,A)}else if(F){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(r.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=e.createRenderbuffer(),_e(M.__webglDepthbuffer[Q],A,!1);else{let ne=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[Q];e.bindRenderbuffer(e.RENDERBUFFER,q),e.framebufferRenderbuffer(e.FRAMEBUFFER,ne,e.RENDERBUFFER,q)}}else if(r.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=e.createRenderbuffer(),_e(M.__webglDepthbuffer,A,!1);else{let Q=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ne),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,ne)}r.bindFramebuffer(e.FRAMEBUFFER,null)}function Ye(A,M,F){let Q=n.get(A);M!==void 0&&Le(Q.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),F!==void 0&&Ke(A)}function K(A){let M=A.texture,F=n.get(A),Q=n.get(M);A.addEventListener("dispose",b);let ne=A.textures,q=A.isWebGLCubeRenderTarget===!0,He=ne.length>1;if(He||(Q.__webglTexture===void 0&&(Q.__webglTexture=e.createTexture()),Q.__version=M.version,o.memory.textures++),q){F.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[xe]=[];for(let Te=0;Te<M.mipmaps.length;Te++)F.__webglFramebuffer[xe][Te]=e.createFramebuffer()}else F.__webglFramebuffer[xe]=e.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let xe=0;xe<M.mipmaps.length;xe++)F.__webglFramebuffer[xe]=e.createFramebuffer()}else F.__webglFramebuffer=e.createFramebuffer();if(He)for(let xe=0,Te=ne.length;xe<Te;xe++){let Ze=n.get(ne[xe]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=e.createTexture(),o.memory.textures++)}if(A.samples>0&&se(A)===!1){F.__webglMultisampledFramebuffer=e.createFramebuffer(),F.__webglColorRenderbuffer=[],r.bindFramebuffer(e.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let xe=0;xe<ne.length;xe++){let Te=ne[xe];F.__webglColorRenderbuffer[xe]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,F.__webglColorRenderbuffer[xe]);let Ze=a.convert(Te.format,Te.colorSpace),me=a.convert(Te.type),Ee=g(Te.internalFormat,Ze,me,Te.colorSpace,A.isXRRenderTarget===!0),lt=Ue(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,lt,Ee,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xe,e.RENDERBUFFER,F.__webglColorRenderbuffer[xe])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=e.createRenderbuffer(),_e(F.__webglDepthRenderbuffer,A,!0)),r.bindFramebuffer(e.FRAMEBUFFER,null)}}if(q){r.bindTexture(e.TEXTURE_CUBE_MAP,Q.__webglTexture),nt(e.TEXTURE_CUBE_MAP,M);for(let xe=0;xe<6;xe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Te=0;Te<M.mipmaps.length;Te++)Le(F.__webglFramebuffer[xe][Te],A,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Te);else Le(F.__webglFramebuffer[xe],A,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);v(M)&&d(e.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(He){for(let xe=0,Te=ne.length;xe<Te;xe++){let Ze=ne[xe],me=n.get(Ze);r.bindTexture(e.TEXTURE_2D,me.__webglTexture),nt(e.TEXTURE_2D,Ze),Le(F.__webglFramebuffer,A,Ze,e.COLOR_ATTACHMENT0+xe,e.TEXTURE_2D,0),v(Ze)&&d(e.TEXTURE_2D)}r.unbindTexture()}else{let xe=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(xe=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),r.bindTexture(xe,Q.__webglTexture),nt(xe,M),M.mipmaps&&M.mipmaps.length>0)for(let Te=0;Te<M.mipmaps.length;Te++)Le(F.__webglFramebuffer[Te],A,M,e.COLOR_ATTACHMENT0,xe,Te);else Le(F.__webglFramebuffer,A,M,e.COLOR_ATTACHMENT0,xe,0);v(M)&&d(xe),r.unbindTexture()}A.depthBuffer&&Ke(A)}function ge(A){let M=A.textures;for(let F=0,Q=M.length;F<Q;F++){let ne=M[F];if(v(ne)){let q=m(A),He=n.get(ne).__webglTexture;r.bindTexture(q,He),d(q),r.unbindTexture()}}}let R=[],Ie=[];function fe(A){if(A.samples>0){if(se(A)===!1){let M=A.textures,F=A.width,Q=A.height,ne=e.COLOR_BUFFER_BIT,q=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,He=n.get(A),xe=M.length>1;if(xe)for(let Te=0;Te<M.length;Te++)r.bindFramebuffer(e.FRAMEBUFFER,He.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Te,e.RENDERBUFFER,null),r.bindFramebuffer(e.FRAMEBUFFER,He.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Te,e.TEXTURE_2D,null,0);r.bindFramebuffer(e.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.bindFramebuffer(e.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Te=0;Te<M.length;Te++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ne|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ne|=e.STENCIL_BUFFER_BIT)),xe){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,He.__webglColorRenderbuffer[Te]);let Ze=n.get(M[Te]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ze,0)}e.blitFramebuffer(0,0,F,Q,0,0,F,Q,ne,e.NEAREST),l===!0&&(R.length=0,Ie.length=0,R.push(e.COLOR_ATTACHMENT0+Te),A.depthBuffer&&A.resolveDepthBuffer===!1&&(R.push(q),Ie.push(q),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ie)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,R))}if(r.bindFramebuffer(e.READ_FRAMEBUFFER,null),r.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),xe)for(let Te=0;Te<M.length;Te++){r.bindFramebuffer(e.FRAMEBUFFER,He.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Te,e.RENDERBUFFER,He.__webglColorRenderbuffer[Te]);let Ze=n.get(M[Te]).__webglTexture;r.bindFramebuffer(e.FRAMEBUFFER,He.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Te,e.TEXTURE_2D,Ze,0)}r.bindFramebuffer(e.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let M=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[M])}}}function Ue(A){return Math.min(i.maxSamples,A.samples)}function se(A){let M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function qe(A){let M=o.render.frame;c.get(A)!==M&&(c.set(A,M),A.update())}function we(A,M){let F=A.colorSpace,Q=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Jo&&F!==Xi&&(vt.getTransfer(F)===St?(Q!==Pn||ne!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function De(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=W,this.resetTextureUnits=k,this.setTexture2D=Z,this.setTexture2DArray=$,this.setTexture3D=ae,this.setTextureCube=Y,this.rebindTextures=Ye,this.setupRenderTarget=K,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=se}function bA(e,t){function r(n,i=Xi){let a,o=vt.getTransfer(i);if(n===fi)return e.UNSIGNED_BYTE;if(n===im)return e.UNSIGNED_SHORT_4_4_4_4;if(n===am)return e.UNSIGNED_SHORT_5_5_5_1;if(n===z_)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===k_)return e.BYTE;if(n===F_)return e.SHORT;if(n===_l)return e.UNSIGNED_SHORT;if(n===nm)return e.INT;if(n===Pa)return e.UNSIGNED_INT;if(n===Gn)return e.FLOAT;if(n===Ml)return e.HALF_FLOAT;if(n===B_)return e.ALPHA;if(n===H_)return e.RGB;if(n===Pn)return e.RGBA;if(n===V_)return e.LUMINANCE;if(n===G_)return e.LUMINANCE_ALPHA;if(n===Vo)return e.DEPTH_COMPONENT;if(n===qo)return e.DEPTH_STENCIL;if(n===om)return e.RED;if(n===sm)return e.RED_INTEGER;if(n===W_)return e.RG;if(n===lm)return e.RG_INTEGER;if(n===um)return e.RGBA_INTEGER;if(n===Oc||n===kc||n===Fc||n===zc)if(o===St)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Oc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===kc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Oc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===kc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xf||n===Sf||n===Mf||n===wf)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===xf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ef||n===Tf||n===bf)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Ef||n===Tf)return o===St?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===bf)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Af||n===Cf||n===Rf||n===Pf||n===Nf||n===Lf||n===If||n===Uf||n===Df||n===Of||n===kf||n===Ff||n===zf||n===Bf)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Af)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cf)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rf)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pf)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nf)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lf)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===If)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uf)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Df)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Of)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kf)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ff)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zf)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bf)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bc||n===Hf||n===Vf)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===Bc)return o===St?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===X_||n===Gf||n===Wf||n===Xf)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===Bc)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Gf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yo?e.UNSIGNED_INT_24_8:e[n]!==void 0?e[n]:null}return{convert:r}}var AA=class extends Qr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ra=class extends tr{constructor(){super(),this.isGroup=!0,this.type="Group"}},CA={type:"move"},Kp=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ra,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ra,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ra,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,i=null,a=null,o=this._targetRay,s=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let y of e.hand.values()){let _=t.getJointPose(y,r),v=this._getHandJoint(l,y);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}let u=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],p=u.position.distanceTo(c.position),h=.02,f=.005;l.inputState.pinching&&p>h+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=h-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&i!==null&&(n=i),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(CA)))}return o!==null&&(o.visible=n!==null),s!==null&&(s.visible=i!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let r=new Ra;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}},RA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,NA=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){let n=new hn,i=e.properties.get(n);i.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,r=new Wn({vertexShader:RA,fragmentShader:PA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ae(new Rn(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},LA=class extends Qo{constructor(e,t){super();let r=this,n=null,i=1,a=null,o="local-floor",s=1,l=null,u=null,c=null,p=null,h=null,f=null,y=new NA,_=t.getContextAttributes(),v=null,d=null,m=[],g=[],x=new he,N=null,T=new Qr;T.viewport=new Ct;let b=new Qr;b.viewport=new Ct;let P=[T,b],w=new AA,S=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let pe=m[J];return pe===void 0&&(pe=new Kp,m[J]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(J){let pe=m[J];return pe===void 0&&(pe=new Kp,m[J]=pe),pe.getGripSpace()},this.getHand=function(J){let pe=m[J];return pe===void 0&&(pe=new Kp,m[J]=pe),pe.getHandSpace()};function k(J){let pe=g.indexOf(J.inputSource);if(pe===-1)return;let Ce=m[pe];Ce!==void 0&&(Ce.update(J.inputSource,J.frame,l||a),Ce.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){n.removeEventListener("select",k),n.removeEventListener("selectstart",k),n.removeEventListener("selectend",k),n.removeEventListener("squeeze",k),n.removeEventListener("squeezestart",k),n.removeEventListener("squeezeend",k),n.removeEventListener("end",W),n.removeEventListener("inputsourceschange",V);for(let J=0;J<m.length;J++){let pe=g[J];pe!==null&&(g[J]=null,m[J].disconnect(pe))}S=null,C=null,y.reset(),e.setRenderTarget(v),h=null,p=null,c=null,n=null,d=null,nt.stop(),r.isPresenting=!1,e.setPixelRatio(N),e.setSize(x.width,x.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){i=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){return c},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(J){if(n=J,n!==null){if(v=e.getRenderTarget(),n.addEventListener("select",k),n.addEventListener("selectstart",k),n.addEventListener("selectend",k),n.addEventListener("squeeze",k),n.addEventListener("squeezestart",k),n.addEventListener("squeezeend",k),n.addEventListener("end",W),n.addEventListener("inputsourceschange",V),_.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(x),n.renderState.layers===void 0){let pe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};h=new XRWebGLLayer(n,t,pe),n.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),d=new Na(h.framebufferWidth,h.framebufferHeight,{format:Pn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let pe=null,Ce=null,Le=null;_.depth&&(Le=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=_.stencil?qo:Vo,Ce=_.stencil?Yo:Pa);let _e={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:i};c=new XRWebGLBinding(n,t),p=c.createProjectionLayer(_e),n.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),d=new Na(p.textureWidth,p.textureHeight,{format:Pn,type:fi,depthTexture:new my(p.textureWidth,p.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}d.isXRRenderTarget=!0,this.setFoveation(s),l=null,a=await n.requestReferenceSpace(o),nt.setContext(n),nt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function V(J){for(let pe=0;pe<J.removed.length;pe++){let Ce=J.removed[pe],Le=g.indexOf(Ce);Le>=0&&(g[Le]=null,m[Le].disconnect(Ce))}for(let pe=0;pe<J.added.length;pe++){let Ce=J.added[pe],Le=g.indexOf(Ce);if(Le===-1){for(let Be=0;Be<m.length;Be++)if(Be>=g.length){g.push(Ce),Le=Be;break}else if(g[Be]===null){g[Be]=Ce,Le=Be;break}if(Le===-1)break}let _e=m[Le];_e&&_e.connect(Ce)}}let Z=new I,$=new I;function ae(J,pe,Ce){Z.setFromMatrixPosition(pe.matrixWorld),$.setFromMatrixPosition(Ce.matrixWorld);let Le=Z.distanceTo($),_e=pe.projectionMatrix.elements,Be=Ce.projectionMatrix.elements,Ke=_e[14]/(_e[10]-1),Ye=_e[14]/(_e[10]+1),K=(_e[9]+1)/_e[5],ge=(_e[9]-1)/_e[5],R=(_e[8]-1)/_e[0],Ie=(Be[8]+1)/Be[0],fe=Ke*R,Ue=Ke*Ie,se=Le/(-R+Ie),qe=se*-R;if(pe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(qe),J.translateZ(se),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),_e[10]===-1)J.projectionMatrix.copy(pe.projectionMatrix),J.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{let we=Ke+se,De=Ye+se,A=fe-qe,M=Ue+(Le-qe),F=K*Ye/De*we,Q=ge*Ye/De*we;J.projectionMatrix.makePerspective(A,M,F,Q,we,De),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Y(J,pe){pe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(pe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(n===null)return;let pe=J.near,Ce=J.far;y.texture!==null&&(y.depthNear>0&&(pe=y.depthNear),y.depthFar>0&&(Ce=y.depthFar)),w.near=b.near=T.near=pe,w.far=b.far=T.far=Ce,(S!==w.near||C!==w.far)&&(n.updateRenderState({depthNear:w.near,depthFar:w.far}),S=w.near,C=w.far),T.layers.mask=J.layers.mask|2,b.layers.mask=J.layers.mask|4,w.layers.mask=T.layers.mask|b.layers.mask;let Le=J.parent,_e=w.cameras;Y(w,Le);for(let Be=0;Be<_e.length;Be++)Y(_e[Be],Le);_e.length===2?ae(w,T,b):w.projectionMatrix.copy(T.projectionMatrix),oe(J,w,Le)};function oe(J,pe,Ce){Ce===null?J.matrix.copy(pe.matrixWorld):(J.matrix.copy(Ce.matrixWorld),J.matrix.invert(),J.matrix.multiply(pe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(pe.projectionMatrix),J.projectionMatrixInverse.copy(pe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Yf*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(p===null&&h===null))return s},this.setFoveation=function(J){s=J,p!==null&&(p.fixedFoveation=J),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=J)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(w)};let ve=null;function We(J,pe){if(u=pe.getViewerPose(l||a),f=pe,u!==null){let Ce=u.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let Le=!1;Ce.length!==w.cameras.length&&(w.cameras.length=0,Le=!0);for(let Be=0;Be<Ce.length;Be++){let Ke=Ce[Be],Ye=null;if(h!==null)Ye=h.getViewport(Ke);else{let ge=c.getViewSubImage(p,Ke);Ye=ge.viewport,Be===0&&(e.setRenderTargetTextures(d,ge.colorTexture,p.ignoreDepthValues?void 0:ge.depthStencilTexture),e.setRenderTarget(d))}let K=P[Be];K===void 0&&(K=new Qr,K.layers.enable(Be),K.viewport=new Ct,P[Be]=K),K.matrix.fromArray(Ke.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Ke.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Be===0&&(w.matrix.copy(K.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Le===!0&&w.cameras.push(K)}let _e=n.enabledFeatures;if(_e&&_e.includes("depth-sensing")){let Be=c.getDepthInformation(Ce[0]);Be&&Be.isValid&&Be.texture&&y.init(e,Be,n.renderState)}}for(let Ce=0;Ce<m.length;Ce++){let Le=g[Ce],_e=m[Ce];Le!==null&&_e!==void 0&&_e.update(Le,pe,l||a)}ve&&ve(J,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),f=null}let nt=new hy;nt.setAnimationLoop(We),this.setAnimationLoop=function(J){ve=J},this.dispose=function(){}}},xa=new qi,IA=new Rt;function UA(e,t){function r(v,d){v.matrixAutoUpdate===!0&&v.updateMatrix(),d.value.copy(v.matrix)}function n(v,d){d.color.getRGB(v.fogColor.value,uy(e)),d.isFog?(v.fogNear.value=d.near,v.fogFar.value=d.far):d.isFogExp2&&(v.fogDensity.value=d.density)}function i(v,d,m,g,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(v,d):d.isMeshToonMaterial?(a(v,d),p(v,d)):d.isMeshPhongMaterial?(a(v,d),c(v,d)):d.isMeshStandardMaterial?(a(v,d),h(v,d),d.isMeshPhysicalMaterial&&f(v,d,x)):d.isMeshMatcapMaterial?(a(v,d),y(v,d)):d.isMeshDepthMaterial?a(v,d):d.isMeshDistanceMaterial?(a(v,d),_(v,d)):d.isMeshNormalMaterial?a(v,d):d.isLineBasicMaterial?(o(v,d),d.isLineDashedMaterial&&s(v,d)):d.isPointsMaterial?l(v,d,m,g):d.isSpriteMaterial?u(v,d):d.isShadowMaterial?(v.color.value.copy(d.color),v.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(v,d){v.opacity.value=d.opacity,d.color&&v.diffuse.value.copy(d.color),d.emissive&&v.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(v.map.value=d.map,r(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,r(d.alphaMap,v.alphaMapTransform)),d.bumpMap&&(v.bumpMap.value=d.bumpMap,r(d.bumpMap,v.bumpMapTransform),v.bumpScale.value=d.bumpScale,d.side===Ir&&(v.bumpScale.value*=-1)),d.normalMap&&(v.normalMap.value=d.normalMap,r(d.normalMap,v.normalMapTransform),v.normalScale.value.copy(d.normalScale),d.side===Ir&&v.normalScale.value.negate()),d.displacementMap&&(v.displacementMap.value=d.displacementMap,r(d.displacementMap,v.displacementMapTransform),v.displacementScale.value=d.displacementScale,v.displacementBias.value=d.displacementBias),d.emissiveMap&&(v.emissiveMap.value=d.emissiveMap,r(d.emissiveMap,v.emissiveMapTransform)),d.specularMap&&(v.specularMap.value=d.specularMap,r(d.specularMap,v.specularMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest);let m=t.get(d),g=m.envMap,x=m.envMapRotation;g&&(v.envMap.value=g,xa.copy(x),xa.x*=-1,xa.y*=-1,xa.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(xa.y*=-1,xa.z*=-1),v.envMapRotation.value.setFromMatrix4(IA.makeRotationFromEuler(xa)),v.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=d.reflectivity,v.ior.value=d.ior,v.refractionRatio.value=d.refractionRatio),d.lightMap&&(v.lightMap.value=d.lightMap,v.lightMapIntensity.value=d.lightMapIntensity,r(d.lightMap,v.lightMapTransform)),d.aoMap&&(v.aoMap.value=d.aoMap,v.aoMapIntensity.value=d.aoMapIntensity,r(d.aoMap,v.aoMapTransform))}function o(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,d.map&&(v.map.value=d.map,r(d.map,v.mapTransform))}function s(v,d){v.dashSize.value=d.dashSize,v.totalSize.value=d.dashSize+d.gapSize,v.scale.value=d.scale}function l(v,d,m,g){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.size.value=d.size*m,v.scale.value=g*.5,d.map&&(v.map.value=d.map,r(d.map,v.uvTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,r(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function u(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.rotation.value=d.rotation,d.map&&(v.map.value=d.map,r(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,r(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function c(v,d){v.specular.value.copy(d.specular),v.shininess.value=Math.max(d.shininess,1e-4)}function p(v,d){d.gradientMap&&(v.gradientMap.value=d.gradientMap)}function h(v,d){v.metalness.value=d.metalness,d.metalnessMap&&(v.metalnessMap.value=d.metalnessMap,r(d.metalnessMap,v.metalnessMapTransform)),v.roughness.value=d.roughness,d.roughnessMap&&(v.roughnessMap.value=d.roughnessMap,r(d.roughnessMap,v.roughnessMapTransform)),d.envMap&&(v.envMapIntensity.value=d.envMapIntensity)}function f(v,d,m){v.ior.value=d.ior,d.sheen>0&&(v.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),v.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(v.sheenColorMap.value=d.sheenColorMap,r(d.sheenColorMap,v.sheenColorMapTransform)),d.sheenRoughnessMap&&(v.sheenRoughnessMap.value=d.sheenRoughnessMap,r(d.sheenRoughnessMap,v.sheenRoughnessMapTransform))),d.clearcoat>0&&(v.clearcoat.value=d.clearcoat,v.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(v.clearcoatMap.value=d.clearcoatMap,r(d.clearcoatMap,v.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,r(d.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(v.clearcoatNormalMap.value=d.clearcoatNormalMap,r(d.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ir&&v.clearcoatNormalScale.value.negate())),d.dispersion>0&&(v.dispersion.value=d.dispersion),d.iridescence>0&&(v.iridescence.value=d.iridescence,v.iridescenceIOR.value=d.iridescenceIOR,v.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(v.iridescenceMap.value=d.iridescenceMap,r(d.iridescenceMap,v.iridescenceMapTransform)),d.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=d.iridescenceThicknessMap,r(d.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),d.transmission>0&&(v.transmission.value=d.transmission,v.transmissionSamplerMap.value=m.texture,v.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(v.transmissionMap.value=d.transmissionMap,r(d.transmissionMap,v.transmissionMapTransform)),v.thickness.value=d.thickness,d.thicknessMap&&(v.thicknessMap.value=d.thicknessMap,r(d.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=d.attenuationDistance,v.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(v.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(v.anisotropyMap.value=d.anisotropyMap,r(d.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=d.specularIntensity,v.specularColor.value.copy(d.specularColor),d.specularColorMap&&(v.specularColorMap.value=d.specularColorMap,r(d.specularColorMap,v.specularColorMapTransform)),d.specularIntensityMap&&(v.specularIntensityMap.value=d.specularIntensityMap,r(d.specularIntensityMap,v.specularIntensityMapTransform))}function y(v,d){d.matcap&&(v.matcap.value=d.matcap)}function _(v,d){let m=t.get(d).light;v.referencePosition.value.setFromMatrixPosition(m.matrixWorld),v.nearDistance.value=m.shadow.camera.near,v.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function DA(e,t,r,n){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,g){let x=g.program;n.uniformBlockBinding(m,x)}function u(m,g){let x=i[m.id];x===void 0&&(y(m),x=c(m),i[m.id]=x,m.addEventListener("dispose",v));let N=g.program;n.updateUBOMapping(m,N);let T=t.render.frame;a[m.id]!==T&&(h(m),a[m.id]=T)}function c(m){let g=p();m.__bindingPointIndex=g;let x=e.createBuffer(),N=m.__size,T=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,N,T),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,g,x),x}function p(){for(let m=0;m<s;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){let g=i[m.id],x=m.uniforms,N=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,g);for(let T=0,b=x.length;T<b;T++){let P=Array.isArray(x[T])?x[T]:[x[T]];for(let w=0,S=P.length;w<S;w++){let C=P[w];if(f(C,T,w,N)===!0){let k=C.__offset,W=Array.isArray(C.value)?C.value:[C.value],V=0;for(let Z=0;Z<W.length;Z++){let $=W[Z],ae=_($);typeof $=="number"||typeof $=="boolean"?(C.__data[0]=$,e.bufferSubData(e.UNIFORM_BUFFER,k+V,C.__data)):$.isMatrix3?(C.__data[0]=$.elements[0],C.__data[1]=$.elements[1],C.__data[2]=$.elements[2],C.__data[3]=0,C.__data[4]=$.elements[3],C.__data[5]=$.elements[4],C.__data[6]=$.elements[5],C.__data[7]=0,C.__data[8]=$.elements[6],C.__data[9]=$.elements[7],C.__data[10]=$.elements[8],C.__data[11]=0):($.toArray(C.__data,V),V+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,k,C.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(m,g,x,N){let T=m.value,b=g+"_"+x;if(N[b]===void 0)return typeof T=="number"||typeof T=="boolean"?N[b]=T:N[b]=T.clone(),!0;{let P=N[b];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return N[b]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function y(m){let g=m.uniforms,x=0,N=16;for(let b=0,P=g.length;b<P;b++){let w=Array.isArray(g[b])?g[b]:[g[b]];for(let S=0,C=w.length;S<C;S++){let k=w[S],W=Array.isArray(k.value)?k.value:[k.value];for(let V=0,Z=W.length;V<Z;V++){let $=W[V],ae=_($),Y=x%N,oe=Y%ae.boundary,ve=Y+oe;x+=oe,ve!==0&&N-ve<ae.storage&&(x+=N-ve),k.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=ae.storage}}}let T=x%N;return T>0&&(x+=N-T),m.__size=x,m.__cache={},this}function _(m){let g={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(g.boundary=4,g.storage=4):m.isVector2?(g.boundary=8,g.storage=8):m.isVector3||m.isColor?(g.boundary=16,g.storage=12):m.isVector4?(g.boundary=16,g.storage=16):m.isMatrix3?(g.boundary=48,g.storage=48):m.isMatrix4?(g.boundary=64,g.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),g}function v(m){let g=m.target;g.removeEventListener("dispose",v);let x=o.indexOf(g.__bindingPointIndex);o.splice(x,1),e.deleteBuffer(i[g.id]),delete i[g.id],delete a[g.id]}function d(){for(let m in i)e.deleteBuffer(i[m]);o=[],i={},a={}}return{bind:l,update:u,dispose:d}}var OA=class{constructor(e={}){let{canvas:t=E2(),context:r=null,depth:n=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let h;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=r.getContextAttributes().alpha}else h=a;let f=new Uint32Array(4),y=new Int32Array(4),_=null,v=null,d=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jr,this.toneMapping=$i,this.toneMappingExposure=1;let g=this,x=!1,N=0,T=0,b=null,P=-1,w=null,S=new Ct,C=new Ct,k=null,W=new st(0),V=0,Z=t.width,$=t.height,ae=1,Y=null,oe=null,ve=new Ct(0,0,Z,$),We=new Ct(0,0,Z,$),nt=!1,J=new cm,pe=!1,Ce=!1,Le=new Rt,_e=new Rt,Be=new I,Ke=new Ct,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},K=!1;function ge(){return b===null?ae:1}let R=r;function Ie(E,L){return t.getContext(E,L)}try{let E={alpha:!0,depth:n,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",Me,!1),R===null){let L="webgl2";if(R=Ie(L,E),R===null)throw Ie(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let fe,Ue,se,qe,we,De,A,M,F,Q,ne,q,He,xe,Te,Ze,me,Ee,lt,je,be,tt,rt,Et;function O(){fe=new HT(R),fe.init(),tt=new bA(R,fe),Ue=new DT(R,fe,e,tt),se=new wA(R,fe),Ue.reverseDepthBuffer&&p&&se.buffers.depth.setReversed(!0),qe=new WT(R),we=new lA,De=new TA(R,fe,se,we,Ue,tt,qe),A=new kT(g),M=new BT(g),F=new J2(R),rt=new IT(R,F),Q=new VT(R,F,qe,rt),ne=new jT(R,Q,F,qe),lt=new XT(R,Ue,De),Ze=new OT(we),q=new sA(g,A,M,fe,Ue,rt,Ze),He=new UA(g,we),xe=new cA,Te=new gA(fe),Ee=new LT(g,A,M,se,ne,h,s),me=new SA(g,ne,Ue),Et=new DA(R,qe,Ue,se),je=new UT(R,fe,qe),be=new GT(R,fe,qe),qe.programs=q.programs,g.capabilities=Ue,g.extensions=fe,g.properties=we,g.renderLists=xe,g.shadowMap=me,g.state=se,g.info=qe}O();let ce=new LA(g,R);this.xr=ce,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let E=fe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=fe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(E){E!==void 0&&(ae=E,this.setSize(Z,$,!1))},this.getSize=function(E){return E.set(Z,$)},this.setSize=function(E,L,z=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,$=L,t.width=Math.floor(E*ae),t.height=Math.floor(L*ae),z===!0&&(t.style.width=E+"px",t.style.height=L+"px"),this.setViewport(0,0,E,L)},this.getDrawingBufferSize=function(E){return E.set(Z*ae,$*ae).floor()},this.setDrawingBufferSize=function(E,L,z){Z=E,$=L,ae=z,t.width=Math.floor(E*z),t.height=Math.floor(L*z),this.setViewport(0,0,E,L)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(ve)},this.setViewport=function(E,L,z,B){E.isVector4?ve.set(E.x,E.y,E.z,E.w):ve.set(E,L,z,B),se.viewport(S.copy(ve).multiplyScalar(ae).round())},this.getScissor=function(E){return E.copy(We)},this.setScissor=function(E,L,z,B){E.isVector4?We.set(E.x,E.y,E.z,E.w):We.set(E,L,z,B),se.scissor(C.copy(We).multiplyScalar(ae).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(E){se.setScissorTest(nt=E)},this.setOpaqueSort=function(E){Y=E},this.setTransparentSort=function(E){oe=E},this.getClearColor=function(E){return E.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(E=!0,L=!0,z=!0){let B=0;if(E){let D=!1;if(b!==null){let le=b.texture.format;D=le===um||le===lm||le===sm}if(D){let le=b.texture.type,Pe=le===fi||le===Pa||le===_l||le===Yo||le===im||le===am,Fe=Ee.getClearColor(),Ve=Ee.getClearAlpha(),it=Fe.r,ot=Fe.g,Xe=Fe.b;Pe?(f[0]=it,f[1]=ot,f[2]=Xe,f[3]=Ve,R.clearBufferuiv(R.COLOR,0,f)):(y[0]=it,y[1]=ot,y[2]=Xe,y[3]=Ve,R.clearBufferiv(R.COLOR,0,y))}else B|=R.COLOR_BUFFER_BIT}L&&(B|=R.DEPTH_BUFFER_BIT),z&&(B|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),xe.dispose(),Te.dispose(),we.dispose(),A.dispose(),M.dispose(),ne.dispose(),rt.dispose(),Et.dispose(),q.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Hr),ce.removeEventListener("sessionend",H),G.stop()};function j(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let E=qe.autoReset,L=me.enabled,z=me.autoUpdate,B=me.needsUpdate,D=me.type;O(),qe.autoReset=E,me.enabled=L,me.autoUpdate=z,me.needsUpdate=B,me.type=D}function Me(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ye(E){let L=E.target;L.removeEventListener("dispose",ye),pt(L)}function pt(E){Ut(E),we.remove(E)}function Ut(E){let L=we.get(E).programs;L!==void 0&&(L.forEach(function(z){q.releaseProgram(z)}),E.isShaderMaterial&&q.releaseShaderCache(E))}this.renderBufferDirect=function(E,L,z,B,D,le){L===null&&(L=Ye);let Pe=D.isMesh&&D.matrixWorld.determinant()<0,Fe=ke(E,L,z,B,D);se.setMaterial(B,Pe);let Ve=z.index,it=1;if(B.wireframe===!0){if(Ve=Q.getWireframeAttribute(z),Ve===void 0)return;it=2}let ot=z.drawRange,Xe=z.attributes.position,yt=ot.start*it,Dt=(ot.start+ot.count)*it;le!==null&&(yt=Math.max(yt,le.start*it),Dt=Math.min(Dt,(le.start+le.count)*it)),Ve!==null?(yt=Math.max(yt,0),Dt=Math.min(Dt,Ve.count)):Xe!=null&&(yt=Math.max(yt,0),Dt=Math.min(Dt,Xe.count));let Ot=Dt-yt;if(Ot<0||Ot===1/0)return;rt.setup(D,B,Fe,z,Ve);let Yt,kt=je;if(Ve!==null&&(Yt=F.get(Ve),kt=be,kt.setIndex(Yt)),D.isMesh)B.wireframe===!0?(se.setLineWidth(B.wireframeLinewidth*ge()),kt.setMode(R.LINES)):kt.setMode(R.TRIANGLES);else if(D.isLine){let Ge=B.linewidth;Ge===void 0&&(Ge=1),se.setLineWidth(Ge*ge()),D.isLineSegments?kt.setMode(R.LINES):D.isLineLoop?kt.setMode(R.LINE_LOOP):kt.setMode(R.LINE_STRIP)}else D.isPoints?kt.setMode(R.POINTS):D.isSprite&&kt.setMode(R.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)kt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(fe.get("WEBGL_multi_draw"))kt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let Ge=D._multiDrawStarts,Ji=D._multiDrawCounts,Qi=D._multiDrawCount,gn=Ve?F.get(Ve).bytesPerElement:1,ka=we.get(B).currentProgram.getUniforms();for(let Vr=0;Vr<Qi;Vr++)ka.setValue(R,"_gl_DrawID",Vr),kt.render(Ge[Vr]/gn,Ji[Vr])}else if(D.isInstancedMesh)kt.renderInstances(yt,Ot,D.count);else if(z.isInstancedBufferGeometry){let Ge=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ji=Math.min(z.instanceCount,Ge);kt.renderInstances(yt,Ot,Ji)}else kt.render(yt,Ot)};function ir(E,L,z){E.transparent===!0&&E.side===Bn&&E.forceSinglePass===!1?(E.side=Ir,E.needsUpdate=!0,Oe(E,L,z),E.side=Yi,E.needsUpdate=!0,Oe(E,L,z),E.side=Bn):Oe(E,L,z)}this.compile=function(E,L,z=null){z===null&&(z=E),v=Te.get(z),v.init(L),m.push(v),z.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(v.pushLight(D),D.castShadow&&v.pushShadow(D))}),E!==z&&E.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(v.pushLight(D),D.castShadow&&v.pushShadow(D))}),v.setupLights();let B=new Set;return E.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let le=D.material;if(le)if(Array.isArray(le))for(let Pe=0;Pe<le.length;Pe++){let Fe=le[Pe];ir(Fe,z,D),B.add(Fe)}else ir(le,z,D),B.add(le)}),m.pop(),v=null,B},this.compileAsync=function(E,L,z=null){let B=this.compile(E,L,z);return new Promise(D=>{function le(){if(B.forEach(function(Pe){we.get(Pe).currentProgram.isReady()&&B.delete(Pe)}),B.size===0){D(E);return}setTimeout(le,10)}fe.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let mt=null;function mn(E){mt&&mt(E)}function Hr(){G.stop()}function H(){G.start()}let G=new hy;G.setAnimationLoop(mn),typeof self<"u"&&G.setContext(self),this.setAnimationLoop=function(E){mt=E,ce.setAnimationLoop(E),E===null?G.stop():G.start()},ce.addEventListener("sessionstart",Hr),ce.addEventListener("sessionend",H),this.render=function(E,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(L),L=ce.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,L,b),v=Te.get(E,m.length),v.init(L),m.push(v),_e.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),J.setFromProjectionMatrix(_e),Ce=this.localClippingEnabled,pe=Ze.init(this.clippingPlanes,Ce),_=xe.get(E,d.length),_.init(),d.push(_),ce.enabled===!0&&ce.isPresenting===!0){let le=g.xr.getDepthSensingMesh();le!==null&&re(le,L,-1/0,g.sortObjects)}re(E,L,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(Y,oe),K=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,K&&Ee.addToRenderList(_,E),this.info.render.frame++,pe===!0&&Ze.beginShadows();let z=v.state.shadowsArray;me.render(z,E,L),pe===!0&&Ze.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=_.opaque,D=_.transmissive;if(v.setupLights(),L.isArrayCamera){let le=L.cameras;if(D.length>0)for(let Pe=0,Fe=le.length;Pe<Fe;Pe++){let Ve=le[Pe];Re(B,D,E,Ve)}K&&Ee.render(E);for(let Pe=0,Fe=le.length;Pe<Fe;Pe++){let Ve=le[Pe];ee(_,E,Ve,Ve.viewport)}}else D.length>0&&Re(B,D,E,L),K&&Ee.render(E),ee(_,E,L);b!==null&&(De.updateMultisampleRenderTarget(b),De.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(g,E,L),rt.resetDefaultState(),P=-1,w=null,m.pop(),m.length>0?(v=m[m.length-1],pe===!0&&Ze.setGlobalState(g.clippingPlanes,v.state.camera)):v=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function re(E,L,z,B){if(E.visible===!1)return;if(E.layers.test(L.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(L);else if(E.isLight)v.pushLight(E),E.castShadow&&v.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||J.intersectsSprite(E)){B&&Ke.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_e);let le=ne.update(E),Pe=E.material;Pe.visible&&_.push(E,le,Pe,z,Ke.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||J.intersectsObject(E))){let le=ne.update(E),Pe=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ke.copy(E.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Ke.copy(le.boundingSphere.center)),Ke.applyMatrix4(E.matrixWorld).applyMatrix4(_e)),Array.isArray(Pe)){let Fe=le.groups;for(let Ve=0,it=Fe.length;Ve<it;Ve++){let ot=Fe[Ve],Xe=Pe[ot.materialIndex];Xe&&Xe.visible&&_.push(E,le,Xe,z,Ke.z,ot)}}else Pe.visible&&_.push(E,le,Pe,z,Ke.z,null)}}let D=E.children;for(let le=0,Pe=D.length;le<Pe;le++)re(D[le],L,z,B)}function ee(E,L,z,B){let D=E.opaque,le=E.transmissive,Pe=E.transparent;v.setupLightsView(z),pe===!0&&Ze.setGlobalState(g.clippingPlanes,z),B&&se.viewport(S.copy(B)),D.length>0&&ze(D,L,z),le.length>0&&ze(le,L,z),Pe.length>0&&ze(Pe,L,z),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Re(E,L,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[B.id]===void 0&&(v.state.transmissionRenderTarget[B.id]=new Na(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float")?Ml:fi,minFilter:Ca,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));let D=v.state.transmissionRenderTarget[B.id],le=B.viewport||S;D.setSize(le.z,le.w);let Pe=g.getRenderTarget();g.setRenderTarget(D),g.getClearColor(W),V=g.getClearAlpha(),V<1&&g.setClearColor(16777215,.5),g.clear(),K&&Ee.render(z);let Fe=g.toneMapping;g.toneMapping=$i;let Ve=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),v.setupLightsView(B),pe===!0&&Ze.setGlobalState(g.clippingPlanes,B),ze(E,z,B),De.updateMultisampleRenderTarget(D),De.updateRenderTargetMipmap(D),fe.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let ot=0,Xe=L.length;ot<Xe;ot++){let yt=L[ot],Dt=yt.object,Ot=yt.geometry,Yt=yt.material,kt=yt.group;if(Yt.side===Bn&&Dt.layers.test(B.layers)){let Ge=Yt.side;Yt.side=Ir,Yt.needsUpdate=!0,et(Dt,z,B,Ot,Yt,kt),Yt.side=Ge,Yt.needsUpdate=!0,it=!0}}it===!0&&(De.updateMultisampleRenderTarget(D),De.updateRenderTargetMipmap(D))}g.setRenderTarget(Pe),g.setClearColor(W,V),Ve!==void 0&&(B.viewport=Ve),g.toneMapping=Fe}function ze(E,L,z){let B=L.isScene===!0?L.overrideMaterial:null;for(let D=0,le=E.length;D<le;D++){let Pe=E[D],Fe=Pe.object,Ve=Pe.geometry,it=B===null?Pe.material:B,ot=Pe.group;Fe.layers.test(z.layers)&&et(Fe,L,z,Ve,it,ot)}}function et(E,L,z,B,D,le){E.onBeforeRender(g,L,z,B,D,le),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),D.onBeforeRender(g,L,z,B,E,le),D.transparent===!0&&D.side===Bn&&D.forceSinglePass===!1?(D.side=Ir,D.needsUpdate=!0,g.renderBufferDirect(z,L,B,D,E,le),D.side=Yi,D.needsUpdate=!0,g.renderBufferDirect(z,L,B,D,E,le),D.side=Bn):g.renderBufferDirect(z,L,B,D,E,le),E.onAfterRender(g,L,z,B,D,le)}function Oe(E,L,z){L.isScene!==!0&&(L=Ye);let B=we.get(E),D=v.state.lights,le=v.state.shadowsArray,Pe=D.state.version,Fe=q.getParameters(E,D.state,le,L,z),Ve=q.getProgramCacheKey(Fe),it=B.programs;B.environment=E.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(E.isMeshStandardMaterial?M:A).get(E.envMap||B.environment),B.envMapRotation=B.environment!==null&&E.envMap===null?L.environmentRotation:E.envMapRotation,it===void 0&&(E.addEventListener("dispose",ye),it=new Map,B.programs=it);let ot=it.get(Ve);if(ot!==void 0){if(B.currentProgram===ot&&B.lightsStateVersion===Pe)return Qe(E,Fe),ot}else Fe.uniforms=q.getUniforms(E),E.onBeforeCompile(Fe,g),ot=q.acquireProgram(Fe,Ve),it.set(Ve,ot),B.uniforms=Fe.uniforms;let Xe=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Xe.clippingPlanes=Ze.uniform),Qe(E,Fe),B.needsLights=_t(E),B.lightsStateVersion=Pe,B.needsLights&&(Xe.ambientLightColor.value=D.state.ambient,Xe.lightProbe.value=D.state.probe,Xe.directionalLights.value=D.state.directional,Xe.directionalLightShadows.value=D.state.directionalShadow,Xe.spotLights.value=D.state.spot,Xe.spotLightShadows.value=D.state.spotShadow,Xe.rectAreaLights.value=D.state.rectArea,Xe.ltc_1.value=D.state.rectAreaLTC1,Xe.ltc_2.value=D.state.rectAreaLTC2,Xe.pointLights.value=D.state.point,Xe.pointLightShadows.value=D.state.pointShadow,Xe.hemisphereLights.value=D.state.hemi,Xe.directionalShadowMap.value=D.state.directionalShadowMap,Xe.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Xe.spotShadowMap.value=D.state.spotShadowMap,Xe.spotLightMatrix.value=D.state.spotLightMatrix,Xe.spotLightMap.value=D.state.spotLightMap,Xe.pointShadowMap.value=D.state.pointShadowMap,Xe.pointShadowMatrix.value=D.state.pointShadowMatrix),B.currentProgram=ot,B.uniformsList=null,ot}function Je(E){if(E.uniformsList===null){let L=E.currentProgram.getUniforms();E.uniformsList=Gc.seqWithValue(L.seq,E.uniforms)}return E.uniformsList}function Qe(E,L){let z=we.get(E);z.outputColorSpace=L.outputColorSpace,z.batching=L.batching,z.batchingColor=L.batchingColor,z.instancing=L.instancing,z.instancingColor=L.instancingColor,z.instancingMorph=L.instancingMorph,z.skinning=L.skinning,z.morphTargets=L.morphTargets,z.morphNormals=L.morphNormals,z.morphColors=L.morphColors,z.morphTargetsCount=L.morphTargetsCount,z.numClippingPlanes=L.numClippingPlanes,z.numIntersection=L.numClipIntersection,z.vertexAlphas=L.vertexAlphas,z.vertexTangents=L.vertexTangents,z.toneMapping=L.toneMapping}function ke(E,L,z,B,D){L.isScene!==!0&&(L=Ye),De.resetTextureUnits();let le=L.fog,Pe=B.isMeshStandardMaterial?L.environment:null,Fe=b===null?g.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Jo,Ve=(B.isMeshStandardMaterial?M:A).get(B.envMap||Pe),it=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,ot=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Xe=!!z.morphAttributes.position,yt=!!z.morphAttributes.normal,Dt=!!z.morphAttributes.color,Ot=$i;B.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Ot=g.toneMapping);let Yt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,kt=Yt!==void 0?Yt.length:0,Ge=we.get(B),Ji=v.state.lights;if(pe===!0&&(Ce===!0||E!==w)){let Dr=E===w&&B.id===P;Ze.setState(B,E,Dr)}let Qi=!1;B.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Ji.state.version||Ge.outputColorSpace!==Fe||D.isBatchedMesh&&Ge.batching===!1||!D.isBatchedMesh&&Ge.batching===!0||D.isBatchedMesh&&Ge.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Ge.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Ge.instancing===!1||!D.isInstancedMesh&&Ge.instancing===!0||D.isSkinnedMesh&&Ge.skinning===!1||!D.isSkinnedMesh&&Ge.skinning===!0||D.isInstancedMesh&&Ge.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Ge.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Ge.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Ge.instancingMorph===!1&&D.morphTexture!==null||Ge.envMap!==Ve||B.fog===!0&&Ge.fog!==le||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Ze.numPlanes||Ge.numIntersection!==Ze.numIntersection)||Ge.vertexAlphas!==it||Ge.vertexTangents!==ot||Ge.morphTargets!==Xe||Ge.morphNormals!==yt||Ge.morphColors!==Dt||Ge.toneMapping!==Ot||Ge.morphTargetsCount!==kt)&&(Qi=!0):(Qi=!0,Ge.__version=B.version);let gn=Ge.currentProgram;Qi===!0&&(gn=Oe(B,L,D));let ka=!1,Vr=!1,ns=!1,Pt=gn.getUniforms(),Nn=Ge.uniforms;if(se.useProgram(gn.program)&&(ka=!0,Vr=!0,ns=!0),B.id!==P&&(P=B.id,Vr=!0),ka||w!==E){se.buffers.depth.getReversed()?(Le.copy(E.projectionMatrix),b2(Le),A2(Le),Pt.setValue(R,"projectionMatrix",Le)):Pt.setValue(R,"projectionMatrix",E.projectionMatrix),Pt.setValue(R,"viewMatrix",E.matrixWorldInverse);let Dr=Pt.map.cameraPosition;Dr!==void 0&&Dr.setValue(R,Be.setFromMatrixPosition(E.matrixWorld)),Ue.logarithmicDepthBuffer&&Pt.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Pt.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,Vr=!0,ns=!0)}if(D.isSkinnedMesh){Pt.setOptional(R,D,"bindMatrix"),Pt.setOptional(R,D,"bindMatrixInverse");let Dr=D.skeleton;Dr&&(Dr.boneTexture===null&&Dr.computeBoneTexture(),Pt.setValue(R,"boneTexture",Dr.boneTexture,De))}D.isBatchedMesh&&(Pt.setOptional(R,D,"batchingTexture"),Pt.setValue(R,"batchingTexture",D._matricesTexture,De),Pt.setOptional(R,D,"batchingIdTexture"),Pt.setValue(R,"batchingIdTexture",D._indirectTexture,De),Pt.setOptional(R,D,"batchingColorTexture"),D._colorsTexture!==null&&Pt.setValue(R,"batchingColorTexture",D._colorsTexture,De));let is=z.morphAttributes;if((is.position!==void 0||is.normal!==void 0||is.color!==void 0)&&lt.update(D,z,gn),(Vr||Ge.receiveShadow!==D.receiveShadow)&&(Ge.receiveShadow=D.receiveShadow,Pt.setValue(R,"receiveShadow",D.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Nn.envMap.value=Ve,Nn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&L.environment!==null&&(Nn.envMapIntensity.value=L.environmentIntensity),Vr&&(Pt.setValue(R,"toneMappingExposure",g.toneMappingExposure),Ge.needsLights&&at(Nn,ns),le&&B.fog===!0&&He.refreshFogUniforms(Nn,le),He.refreshMaterialUniforms(Nn,B,ae,$,v.state.transmissionRenderTarget[E.id]),Gc.upload(R,Je(Ge),Nn,De)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Gc.upload(R,Je(Ge),Nn,De),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Pt.setValue(R,"center",D.center),Pt.setValue(R,"modelViewMatrix",D.modelViewMatrix),Pt.setValue(R,"normalMatrix",D.normalMatrix),Pt.setValue(R,"modelMatrix",D.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let Dr=B.uniformsGroups;for(let as=0,gi=Dr.length;as<gi;as++){let _m=Dr[as];Et.update(_m,gn),Et.bind(_m,gn)}}return gn}function at(E,L){E.ambientLightColor.needsUpdate=L,E.lightProbe.needsUpdate=L,E.directionalLights.needsUpdate=L,E.directionalLightShadows.needsUpdate=L,E.pointLights.needsUpdate=L,E.pointLightShadows.needsUpdate=L,E.spotLights.needsUpdate=L,E.spotLightShadows.needsUpdate=L,E.rectAreaLights.needsUpdate=L,E.hemisphereLights.needsUpdate=L}function _t(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,L,z){we.get(E.texture).__webglTexture=L,we.get(E.depthTexture).__webglTexture=z;let B=we.get(E);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,L){let z=we.get(E);z.__webglFramebuffer=L,z.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(E,L=0,z=0){b=E,N=L,T=z;let B=!0,D=null,le=!1,Pe=!1;if(E){let Fe=we.get(E);if(Fe.__useDefaultFramebuffer!==void 0)se.bindFramebuffer(R.FRAMEBUFFER,null),B=!1;else if(Fe.__webglFramebuffer===void 0)De.setupRenderTarget(E);else if(Fe.__hasExternalTextures)De.rebindTextures(E,we.get(E.texture).__webglTexture,we.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ot=E.depthTexture;if(Fe.__boundDepthTexture!==ot){if(ot!==null&&we.has(ot)&&(E.width!==ot.image.width||E.height!==ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(E)}}let Ve=E.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Pe=!0);let it=we.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(it[L])?D=it[L][z]:D=it[L],le=!0):E.samples>0&&De.useMultisampledRTT(E)===!1?D=we.get(E).__webglMultisampledFramebuffer:Array.isArray(it)?D=it[z]:D=it,S.copy(E.viewport),C.copy(E.scissor),k=E.scissorTest}else S.copy(ve).multiplyScalar(ae).floor(),C.copy(We).multiplyScalar(ae).floor(),k=nt;if(se.bindFramebuffer(R.FRAMEBUFFER,D)&&B&&se.drawBuffers(E,D),se.viewport(S),se.scissor(C),se.setScissorTest(k),le){let Fe=we.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+L,Fe.__webglTexture,z)}else if(Pe){let Fe=we.get(E.texture),Ve=L||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Fe.__webglTexture,z||0,Ve)}P=-1},this.readRenderTargetPixels=function(E,L,z,B,D,le,Pe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=we.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe){se.bindFramebuffer(R.FRAMEBUFFER,Fe);try{let Ve=E.texture,it=Ve.format,ot=Ve.type;if(!Ue.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=E.width-B&&z>=0&&z<=E.height-D&&R.readPixels(L,z,B,D,tt.convert(it),tt.convert(ot),le)}finally{let Ve=b!==null?we.get(b).__webglFramebuffer:null;se.bindFramebuffer(R.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(E,L,z,B,D,le,Pe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=we.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe){let Ve=E.texture,it=Ve.format,ot=Ve.type;if(!Ue.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=E.width-B&&z>=0&&z<=E.height-D){se.bindFramebuffer(R.FRAMEBUFFER,Fe);let Xe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Xe),R.bufferData(R.PIXEL_PACK_BUFFER,le.byteLength,R.STREAM_READ),R.readPixels(L,z,B,D,tt.convert(it),tt.convert(ot),0);let yt=b!==null?we.get(b).__webglFramebuffer:null;se.bindFramebuffer(R.FRAMEBUFFER,yt);let Dt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await T2(R,Dt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Xe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,le),R.deleteBuffer(Xe),R.deleteSync(Dt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,L=null,z=0){E.isTexture!==!0&&(pl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,E=arguments[1]);let B=Math.pow(2,-z),D=Math.floor(E.image.width*B),le=Math.floor(E.image.height*B),Pe=L!==null?L.x:0,Fe=L!==null?L.y:0;De.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,Pe,Fe,D,le),se.unbindTexture()},this.copyTextureToTexture=function(E,L,z=null,B=null,D=0){E.isTexture!==!0&&(pl("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1],L=arguments[2],D=arguments[3]||0,z=null);let le,Pe,Fe,Ve,it,ot,Xe,yt,Dt,Ot=E.isCompressedTexture?E.mipmaps[D]:E.image;z!==null?(le=z.max.x-z.min.x,Pe=z.max.y-z.min.y,Fe=z.isBox3?z.max.z-z.min.z:1,Ve=z.min.x,it=z.min.y,ot=z.isBox3?z.min.z:0):(le=Ot.width,Pe=Ot.height,Fe=Ot.depth||1,Ve=0,it=0,ot=0),B!==null?(Xe=B.x,yt=B.y,Dt=B.z):(Xe=0,yt=0,Dt=0);let Yt=tt.convert(L.format),kt=tt.convert(L.type),Ge;L.isData3DTexture?(De.setTexture3D(L,0),Ge=R.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(De.setTexture2DArray(L,0),Ge=R.TEXTURE_2D_ARRAY):(De.setTexture2D(L,0),Ge=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,L.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,L.unpackAlignment);let Ji=R.getParameter(R.UNPACK_ROW_LENGTH),Qi=R.getParameter(R.UNPACK_IMAGE_HEIGHT),gn=R.getParameter(R.UNPACK_SKIP_PIXELS),ka=R.getParameter(R.UNPACK_SKIP_ROWS),Vr=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ot.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ot.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ve),R.pixelStorei(R.UNPACK_SKIP_ROWS,it),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ot);let ns=E.isDataArrayTexture||E.isData3DTexture,Pt=L.isDataArrayTexture||L.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let Nn=we.get(E),is=we.get(L),Dr=we.get(Nn.__renderTarget),as=we.get(is.__renderTarget);se.bindFramebuffer(R.READ_FRAMEBUFFER,Dr.__webglFramebuffer),se.bindFramebuffer(R.DRAW_FRAMEBUFFER,as.__webglFramebuffer);for(let gi=0;gi<Fe;gi++)ns&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,we.get(E).__webglTexture,D,ot+gi),E.isDepthTexture?(Pt&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,we.get(L).__webglTexture,D,Dt+gi),R.blitFramebuffer(Ve,it,le,Pe,Xe,yt,le,Pe,R.DEPTH_BUFFER_BIT,R.NEAREST)):Pt?R.copyTexSubImage3D(Ge,D,Xe,yt,Dt+gi,Ve,it,le,Pe):R.copyTexSubImage2D(Ge,D,Xe,yt,Dt+gi,Ve,it,le,Pe);se.bindFramebuffer(R.READ_FRAMEBUFFER,null),se.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Pt?E.isDataTexture||E.isData3DTexture?R.texSubImage3D(Ge,D,Xe,yt,Dt,le,Pe,Fe,Yt,kt,Ot.data):L.isCompressedArrayTexture?R.compressedTexSubImage3D(Ge,D,Xe,yt,Dt,le,Pe,Fe,Yt,Ot.data):R.texSubImage3D(Ge,D,Xe,yt,Dt,le,Pe,Fe,Yt,kt,Ot):E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,D,Xe,yt,le,Pe,Yt,kt,Ot.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,D,Xe,yt,Ot.width,Ot.height,Yt,Ot.data):R.texSubImage2D(R.TEXTURE_2D,D,Xe,yt,le,Pe,Yt,kt,Ot);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ji),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Qi),R.pixelStorei(R.UNPACK_SKIP_PIXELS,gn),R.pixelStorei(R.UNPACK_SKIP_ROWS,ka),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Vr),D===0&&L.generateMipmaps&&R.generateMipmap(Ge),se.unbindTexture()},this.copyTextureToTexture3D=function(E,L,z=null,B=null,D=0){return E.isTexture!==!0&&(pl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,B=arguments[1]||null,E=arguments[2],L=arguments[3],D=arguments[4]||0),pl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,L,z,B,D)},this.initRenderTarget=function(E){we.get(E).__webglFramebuffer===void 0&&De.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?De.setTextureCube(E,0):E.isData3DTexture?De.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?De.setTexture2DArray(E,0):De.setTexture2D(E,0),se.unbindTexture()},this.resetState=function(){N=0,T=0,b=null,se.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}},kA=class xy{constructor(t,r=25e-5){this.isFogExp2=!0,this.name="",this.color=new st(t),this.density=r}clone(){return new xy(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},m_=class extends tr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},FA=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$f,this.updateRanges=[],this.version=0,this.uuid=di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let n=0,i=this.stride;n<i;n++)this.array[e+n]=t.array[r+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Pr=new I,g_=class Sy{constructor(t,r,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=r,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let r=0,n=this.data.count;r<n;r++)Pr.fromBufferAttribute(this,r),Pr.applyMatrix4(t),this.setXYZ(r,Pr.x,Pr.y,Pr.z);return this}applyNormalMatrix(t){for(let r=0,n=this.count;r<n;r++)Pr.fromBufferAttribute(this,r),Pr.applyNormalMatrix(t),this.setXYZ(r,Pr.x,Pr.y,Pr.z);return this}transformDirection(t){for(let r=0,n=this.count;r<n;r++)Pr.fromBufferAttribute(this,r),Pr.transformDirection(t),this.setXYZ(r,Pr.x,Pr.y,Pr.z);return this}getComponent(t,r){let n=this.array[t*this.data.stride+this.offset+r];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(t,r,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[t*this.data.stride+this.offset+r]=n,this}setX(t,r){return this.normalized&&(r=Mt(r,this.array)),this.data.array[t*this.data.stride+this.offset]=r,this}setY(t,r){return this.normalized&&(r=Mt(r,this.array)),this.data.array[t*this.data.stride+this.offset+1]=r,this}setZ(t,r){return this.normalized&&(r=Mt(r,this.array)),this.data.array[t*this.data.stride+this.offset+2]=r,this}setW(t,r){return this.normalized&&(r=Mt(r,this.array)),this.data.array[t*this.data.stride+this.offset+3]=r,this}getX(t){let r=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(r=Hn(r,this.array)),r}getY(t){let r=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(r=Hn(r,this.array)),r}getZ(t){let r=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(r=Hn(r,this.array)),r}getW(t){let r=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(r=Hn(r,this.array)),r}setXY(t,r,n){return t=t*this.data.stride+this.offset,this.normalized&&(r=Mt(r,this.array),n=Mt(n,this.array)),this.data.array[t+0]=r,this.data.array[t+1]=n,this}setXYZ(t,r,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(r=Mt(r,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.data.array[t+0]=r,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,r,n,i,a){return t=t*this.data.stride+this.offset,this.normalized&&(r=Mt(r,this.array),n=Mt(n,this.array),i=Mt(i,this.array),a=Mt(a,this.array)),this.data.array[t+0]=r,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let r=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)r.push(this.data.array[i+a])}return new Ur(new this.array.constructor(r),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Sy(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let r=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)r.push(this.data.array[i+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:r,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},My=class extends Ua{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new st(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Po,al=new I,No=new I,Lo=new I,Io=new he,ol=new he,wy=new Rt,Tc=new I,sl=new I,bc=new I,v_=new he,ef=new he,__=new he,ll=class extends tr{constructor(e=new My){if(super(),this.isSprite=!0,this.type="Sprite",Po===void 0){Po=new wr;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new FA(t,5);Po.setIndex([0,1,2,0,2,3]),Po.setAttribute("position",new g_(r,3,0,!1)),Po.setAttribute("uv",new g_(r,2,3,!1))}this.geometry=Po,this.material=e,this.center=new he(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),No.setFromMatrixScale(this.matrixWorld),wy.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Lo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&No.multiplyScalar(-Lo.z);let r=this.material.rotation,n,i;r!==0&&(i=Math.cos(r),n=Math.sin(r));let a=this.center;Ac(Tc.set(-.5,-.5,0),Lo,a,No,n,i),Ac(sl.set(.5,-.5,0),Lo,a,No,n,i),Ac(bc.set(.5,.5,0),Lo,a,No,n,i),v_.set(0,0),ef.set(1,0),__.set(1,1);let o=e.ray.intersectTriangle(Tc,sl,bc,!1,al);if(o===null&&(Ac(sl.set(-.5,.5,0),Lo,a,No,n,i),ef.set(0,1),o=e.ray.intersectTriangle(Tc,bc,sl,!1,al),o===null))return;let s=e.ray.origin.distanceTo(al);s<e.near||s>e.far||t.push({distance:s,point:al.clone(),uv:Oo.getInterpolation(al,Tc,sl,bc,v_,ef,__,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ac(e,t,r,n,i,a){Io.subVectors(e,r).addScalar(.5).multiply(n),i!==void 0?(ol.x=a*Io.x-i*Io.y,ol.y=i*Io.x+a*Io.y):ol.copy(Io),e.copy(t),e.x+=ol.x,e.y+=ol.y,e.applyMatrix4(wy)}var zA=class extends hn{constructor(e=null,t=1,r=1,n,i,a,o,s,l=Kr,u=Kr,c,p){super(null,a,o,s,l,u,n,i,c,p),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},y_=class extends Ur{constructor(e,t,r,n=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Uo=new Rt,x_=new Rt,Cc=[],S_=new Ia,BA=new Rt,ul=new Ae,cl=new es,Sa=class extends Ae{constructor(e,t,r){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new y_(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<r;n++)this.setMatrixAt(n,BA)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ia),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,Uo),S_.copy(e.boundingBox).applyMatrix4(Uo),this.boundingBox.union(S_)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new es),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,Uo),cl.copy(e.boundingSphere).applyMatrix4(Uo),this.boundingSphere.union(cl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let r=t.morphTargetInfluences,n=this.morphTexture.source.data.data,i=r.length+1,a=e*i+1;for(let o=0;o<r.length;o++)r[o]=n[a+o]}raycast(e,t){let r=this.matrixWorld,n=this.count;if(ul.geometry=this.geometry,ul.material=this.material,ul.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cl.copy(this.boundingSphere),cl.applyMatrix4(r),e.ray.intersectsSphere(cl)!==!1))for(let i=0;i<n;i++){this.getMatrixAt(i,Uo),x_.multiplyMatrices(r,Uo),ul.matrixWorld=x_,ul.raycast(e,Cc);for(let a=0,o=Cc.length;a<o;a++){let s=Cc[a];s.instanceId=i,s.object=this,t.push(s)}Cc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new y_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let r=t.morphTargetInfluences,n=r.length+1;this.morphTexture===null&&(this.morphTexture=new zA(new Float32Array(n*this.count),n,this.count,om,Gn));let i=this.morphTexture.source.data.data,a=0;for(let l=0;l<r.length;l++)a+=r[l];let o=this.geometry.morphTargetsRelative?1:1-a,s=n*e;i[s]=o,i.set(r,s+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},Ey=class extends Ua{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},M_=new Rt,Qf=new ty,Rc=new es,Pc=new I,w_=class extends tr{constructor(e=new wr,t=new Ey){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let r=this.geometry,n=this.matrixWorld,i=e.params.Points.threshold,a=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Rc.copy(r.boundingSphere),Rc.applyMatrix4(n),Rc.radius+=i,e.ray.intersectsSphere(Rc)===!1)return;M_.copy(n).invert(),Qf.copy(e.ray).applyMatrix4(M_);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,l=r.index,u=r.attributes.position;if(l!==null){let c=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let h=c,f=p;h<f;h++){let y=l.getX(h);Pc.fromBufferAttribute(u,y),E_(Pc,y,s,n,e,t,this)}}else{let c=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let h=c,f=p;h<f;h++)Pc.fromBufferAttribute(u,h),E_(Pc,h,s,n,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,i=r.length;n<i;n++){let a=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}};function E_(e,t,r,n,i,a,o){let s=Qf.distanceSqToPoint(e);if(s<r){let l=new I;Qf.closestPointToPoint(e,l),l.applyMatrix4(n);let u=i.ray.origin.distanceTo(l);if(u<i.near||u>i.far)return;a.push({distance:u,distanceToRay:Math.sqrt(s),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var HA=class extends hn{constructor(e,t,r,n,i,a,o,s,l){super(e,t,r,n,i,a,o,s,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){let t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){let t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],r,n=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)r=this.getPoint(a/e),i+=r.distanceTo(n),t.push(i),n=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let r=this.getLengths(),n=0,i=r.length,a;t?a=t:a=e*r[i-1];let o=0,s=i-1,l;for(;o<=s;)if(n=Math.floor(o+(s-o)/2),l=r[n]-a,l<0)o=n+1;else if(l>0)s=n-1;else{s=n;break}if(n=s,r[n]===a)return n/(i-1);let u=r[n],c=r[n+1]-u,p=(a-u)/c;return(n+p)/(i-1)}getTangent(e,t){let r=e-1e-4,n=e+1e-4;r<0&&(r=0),n>1&&(n=1);let i=this.getPoint(r),a=this.getPoint(n),o=t||(i.isVector2?new he:new I);return o.copy(a).sub(i).normalize(),o}getTangentAt(e,t){let r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){let r=new I,n=[],i=[],a=[],o=new I,s=new Rt;for(let h=0;h<=e;h++){let f=h/e;n[h]=this.getTangentAt(f,new I)}i[0]=new I,a[0]=new I;let l=Number.MAX_VALUE,u=Math.abs(n[0].x),c=Math.abs(n[0].y),p=Math.abs(n[0].z);u<=l&&(l=u,r.set(1,0,0)),c<=l&&(l=c,r.set(0,1,0)),p<=l&&r.set(0,0,1),o.crossVectors(n[0],r).normalize(),i[0].crossVectors(n[0],o),a[0].crossVectors(n[0],i[0]);for(let h=1;h<=e;h++){if(i[h]=i[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(n[h-1],n[h]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(fr(n[h-1].dot(n[h]),-1,1));i[h].applyMatrix4(s.makeRotationAxis(o,f))}a[h].crossVectors(n[h],i[h])}if(t===!0){let h=Math.acos(fr(i[0].dot(i[e]),-1,1));h/=e,n[0].dot(o.crossVectors(i[0],i[e]))>0&&(h=-h);for(let f=1;f<=e;f++)i[f].applyMatrix4(s.makeRotationAxis(n[f],h*f)),a[f].crossVectors(n[f],i[f])}return{tangents:n,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},hm=class extends Xn{constructor(e=0,t=0,r=1,n=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=n,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new he){let r=t,n=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<Number.EPSILON;for(;i<0;)i+=n;for(;i>n;)i-=n;i<Number.EPSILON&&(a?i=0:i=n),this.aClockwise===!0&&!a&&(i===n?i=-n:i=i-n);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),c=Math.sin(this.aRotation),p=s-this.aX,h=l-this.aY;s=p*u-h*c+this.aX,l=p*c+h*u+this.aY}return r.set(s,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},VA=class extends hm{constructor(e,t,r,n,i,a){super(e,t,r,r,n,i,a),this.isArcCurve=!0,this.type="ArcCurve"}};function pm(){let e=0,t=0,r=0,n=0;function i(a,o,s,l){e=a,t=s,r=-3*a+3*o-2*s-l,n=2*a-2*o+s+l}return{initCatmullRom:function(a,o,s,l,u){i(o,s,u*(s-a),u*(l-o))},initNonuniformCatmullRom:function(a,o,s,l,u,c,p){let h=(o-a)/u-(s-a)/(u+c)+(s-o)/c,f=(s-o)/c-(l-o)/(c+p)+(l-s)/p;h*=c,f*=c,i(o,s,h,f)},calc:function(a){let o=a*a,s=o*a;return e+t*a+r*o+n*s}}}var Nc=new I,tf=new pm,rf=new pm,nf=new pm,GA=class extends Xn{constructor(e=[],t=!1,r="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=n}getPoint(e,t=new I){let r=t,n=this.points,i=n.length,a=(i-(this.closed?0:1))*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let l,u;this.closed||o>0?l=n[(o-1)%i]:(Nc.subVectors(n[0],n[1]).add(n[0]),l=Nc);let c=n[o%i],p=n[(o+1)%i];if(this.closed||o+2<i?u=n[(o+2)%i]:(Nc.subVectors(n[i-1],n[i-2]).add(n[i-1]),u=Nc),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(c),h),y=Math.pow(c.distanceToSquared(p),h),_=Math.pow(p.distanceToSquared(u),h);y<1e-4&&(y=1),f<1e-4&&(f=y),_<1e-4&&(_=y),tf.initNonuniformCatmullRom(l.x,c.x,p.x,u.x,f,y,_),rf.initNonuniformCatmullRom(l.y,c.y,p.y,u.y,f,y,_),nf.initNonuniformCatmullRom(l.z,c.z,p.z,u.z,f,y,_)}else this.curveType==="catmullrom"&&(tf.initCatmullRom(l.x,c.x,p.x,u.x,this.tension),rf.initCatmullRom(l.y,c.y,p.y,u.y,this.tension),nf.initCatmullRom(l.z,c.z,p.z,u.z,this.tension));return r.set(tf.calc(s),rf.calc(s),nf.calc(s)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let n=e.points[t];this.points.push(new I().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function T_(e,t,r,n,i){let a=(n-t)*.5,o=(i-r)*.5,s=e*e,l=e*s;return(2*r-2*n+a+o)*l+(-3*r+3*n-2*a-o)*s+a*e+r}function WA(e,t){let r=1-e;return r*r*t}function XA(e,t){return 2*(1-e)*e*t}function jA(e,t){return e*e*t}function gl(e,t,r,n){return WA(e,t)+XA(e,r)+jA(e,n)}function $A(e,t){let r=1-e;return r*r*r*t}function YA(e,t){let r=1-e;return 3*r*r*e*t}function qA(e,t){return 3*(1-e)*e*e*t}function ZA(e,t){return e*e*e*t}function vl(e,t,r,n,i){return $A(e,t)+YA(e,r)+qA(e,n)+ZA(e,i)}var Ty=class extends Xn{constructor(e=new he,t=new he,r=new he,n=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=n}getPoint(e,t=new he){let r=t,n=this.v0,i=this.v1,a=this.v2,o=this.v3;return r.set(vl(e,n.x,i.x,a.x,o.x),vl(e,n.y,i.y,a.y,o.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},JA=class extends Xn{constructor(e=new I,t=new I,r=new I,n=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=n}getPoint(e,t=new I){let r=t,n=this.v0,i=this.v1,a=this.v2,o=this.v3;return r.set(vl(e,n.x,i.x,a.x,o.x),vl(e,n.y,i.y,a.y,o.y),vl(e,n.z,i.z,a.z,o.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},by=class extends Xn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},QA=class extends Xn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ay=class extends Xn{constructor(e=new he,t=new he,r=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new he){let r=t,n=this.v0,i=this.v1,a=this.v2;return r.set(gl(e,n.x,i.x,a.x),gl(e,n.y,i.y,a.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cy=class extends Xn{constructor(e=new I,t=new I,r=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new I){let r=t,n=this.v0,i=this.v1,a=this.v2;return r.set(gl(e,n.x,i.x,a.x),gl(e,n.y,i.y,a.y),gl(e,n.z,i.z,a.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ry=class extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let r=t,n=this.points,i=(n.length-1)*e,a=Math.floor(i),o=i-a,s=n[a===0?a:a-1],l=n[a],u=n[a>n.length-2?n.length-1:a+1],c=n[a>n.length-3?n.length-1:a+2];return r.set(T_(o,s.x,l.x,u.x,c.x),T_(o,s.y,l.y,u.y,c.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let n=e.points[t];this.points.push(new he().fromArray(n))}return this}},Kf=Object.freeze({__proto__:null,ArcCurve:VA,CatmullRomCurve3:GA,CubicBezierCurve:Ty,CubicBezierCurve3:JA,EllipseCurve:hm,LineCurve:by,LineCurve3:QA,QuadraticBezierCurve:Ay,QuadraticBezierCurve3:Cy,SplineCurve:Ry}),KA=class extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kf[r](t,e))}return this}getPoint(e,t){let r=e*this.getLength(),n=this.getCurveLengths(),i=0;for(;i<n.length;){if(n[i]>=r){let a=n[i]-r,o=this.curves[i],s=o.getLength(),l=s===0?0:1-a/s;return o.getPointAt(l,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let r=0,n=this.curves.length;r<n;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],r;for(let n=0,i=this.curves;n<i.length;n++){let a=i[n],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let l=0;l<s.length;l++){let u=s[l];r&&r.equals(u)||(t.push(u),r=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){let n=e.curves[t];this.curves.push(new Kf[n.type]().fromJSON(n))}return this}},ba=class extends KA{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let r=new by(this.currentPoint.clone(),new he(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,n){let i=new Ay(this.currentPoint.clone(),new he(e,t),new he(r,n));return this.curves.push(i),this.currentPoint.set(r,n),this}bezierCurveTo(e,t,r,n,i,a){let o=new Ty(this.currentPoint.clone(),new he(e,t),new he(r,n),new he(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),r=new Ry(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,n,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,r,n,i,a),this}absarc(e,t,r,n,i,a){return this.absellipse(e,t,r,r,n,i,a),this}ellipse(e,t,r,n,i,a,o,s){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,r,n,i,a,o,s),this}absellipse(e,t,r,n,i,a,o,s){let l=new hm(e,t,r,n,i,a,o,s);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},e3=class Py extends wr{constructor(t=[new he(0,-.5),new he(.5,0),new he(0,.5)],r=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:r,phiStart:n,phiLength:i},r=Math.floor(r),i=fr(i,0,Math.PI*2);let a=[],o=[],s=[],l=[],u=[],c=1/r,p=new I,h=new he,f=new I,y=new I,_=new I,v=0,d=0;for(let m=0;m<=t.length-1;m++)switch(m){case 0:v=t[m+1].x-t[m].x,d=t[m+1].y-t[m].y,f.x=d*1,f.y=-v,f.z=d*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:v=t[m+1].x-t[m].x,d=t[m+1].y-t[m].y,f.x=d*1,f.y=-v,f.z=d*0,y.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(y)}for(let m=0;m<=r;m++){let g=n+m*c*i,x=Math.sin(g),N=Math.cos(g);for(let T=0;T<=t.length-1;T++){p.x=t[T].x*x,p.y=t[T].y,p.z=t[T].x*N,o.push(p.x,p.y,p.z),h.x=m/r,h.y=T/(t.length-1),s.push(h.x,h.y);let b=l[3*T+0]*x,P=l[3*T+1],w=l[3*T+0]*N;u.push(b,P,w)}}for(let m=0;m<r;m++)for(let g=0;g<t.length-1;g++){let x=g+m*t.length,N=x,T=x+t.length,b=x+t.length+1,P=x+1;a.push(N,T,P),a.push(b,P,T)}this.setIndex(a),this.setAttribute("position",new wt(o,3)),this.setAttribute("uv",new wt(s,2)),this.setAttribute("normal",new wt(u,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Py(t.points,t.segments,t.phiStart,t.phiLength)}},cn=class Ny extends wr{constructor(t=1,r=1,n=1,i=32,a=1,o=!1,s=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:r,height:n,radialSegments:i,heightSegments:a,openEnded:o,thetaStart:s,thetaLength:l};let u=this;i=Math.floor(i),a=Math.floor(a);let c=[],p=[],h=[],f=[],y=0,_=[],v=n/2,d=0;m(),o===!1&&(t>0&&g(!0),r>0&&g(!1)),this.setIndex(c),this.setAttribute("position",new wt(p,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(f,2));function m(){let x=new I,N=new I,T=0,b=(r-t)/n;for(let P=0;P<=a;P++){let w=[],S=P/a,C=S*(r-t)+t;for(let k=0;k<=i;k++){let W=k/i,V=W*l+s,Z=Math.sin(V),$=Math.cos(V);N.x=C*Z,N.y=-S*n+v,N.z=C*$,p.push(N.x,N.y,N.z),x.set(Z,b,$).normalize(),h.push(x.x,x.y,x.z),f.push(W,1-S),w.push(y++)}_.push(w)}for(let P=0;P<i;P++)for(let w=0;w<a;w++){let S=_[w][P],C=_[w+1][P],k=_[w+1][P+1],W=_[w][P+1];(t>0||w!==0)&&(c.push(S,C,W),T+=3),(r>0||w!==a-1)&&(c.push(C,k,W),T+=3)}u.addGroup(d,T,0),d+=T}function g(x){let N=y,T=new he,b=new I,P=0,w=x===!0?t:r,S=x===!0?1:-1;for(let k=1;k<=i;k++)p.push(0,v*S,0),h.push(0,S,0),f.push(.5,.5),y++;let C=y;for(let k=0;k<=i;k++){let W=k/i*l+s,V=Math.cos(W),Z=Math.sin(W);b.x=w*Z,b.y=v*S,b.z=w*V,p.push(b.x,b.y,b.z),h.push(0,S,0),T.x=V*.5+.5,T.y=Z*.5*S+.5,f.push(T.x,T.y),y++}for(let k=0;k<i;k++){let W=N+k,V=C+k;x===!0?c.push(V,V+1,W):c.push(V+1,V,W),P+=3}u.addGroup(d,P,x===!0?1:2),d+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ny(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},b_=class Ly extends cn{constructor(t=1,r=1,n=32,i=1,a=!1,o=0,s=Math.PI*2){super(0,t,r,n,i,a,o,s),this.type="ConeGeometry",this.parameters={radius:t,height:r,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s}}static fromJSON(t){return new Ly(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},t3=class Iy extends wr{constructor(t=[],r=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:r,radius:n,detail:i};let a=[],o=[];s(i),u(n),c(),this.setAttribute("position",new wt(a,3)),this.setAttribute("normal",new wt(a.slice(),3)),this.setAttribute("uv",new wt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function s(m){let g=new I,x=new I,N=new I;for(let T=0;T<r.length;T+=3)f(r[T+0],g),f(r[T+1],x),f(r[T+2],N),l(g,x,N,m)}function l(m,g,x,N){let T=N+1,b=[];for(let P=0;P<=T;P++){b[P]=[];let w=m.clone().lerp(x,P/T),S=g.clone().lerp(x,P/T),C=T-P;for(let k=0;k<=C;k++)k===0&&P===T?b[P][k]=w:b[P][k]=w.clone().lerp(S,k/C)}for(let P=0;P<T;P++)for(let w=0;w<2*(T-P)-1;w++){let S=Math.floor(w/2);w%2===0?(h(b[P][S+1]),h(b[P+1][S]),h(b[P][S])):(h(b[P][S+1]),h(b[P+1][S+1]),h(b[P+1][S]))}}function u(m){let g=new I;for(let x=0;x<a.length;x+=3)g.x=a[x+0],g.y=a[x+1],g.z=a[x+2],g.normalize().multiplyScalar(m),a[x+0]=g.x,a[x+1]=g.y,a[x+2]=g.z}function c(){let m=new I;for(let g=0;g<a.length;g+=3){m.x=a[g+0],m.y=a[g+1],m.z=a[g+2];let x=v(m)/2/Math.PI+.5,N=d(m)/Math.PI+.5;o.push(x,1-N)}y(),p()}function p(){for(let m=0;m<o.length;m+=6){let g=o[m+0],x=o[m+2],N=o[m+4],T=Math.max(g,x,N),b=Math.min(g,x,N);T>.9&&b<.1&&(g<.2&&(o[m+0]+=1),x<.2&&(o[m+2]+=1),N<.2&&(o[m+4]+=1))}}function h(m){a.push(m.x,m.y,m.z)}function f(m,g){let x=m*3;g.x=t[x+0],g.y=t[x+1],g.z=t[x+2]}function y(){let m=new I,g=new I,x=new I,N=new I,T=new he,b=new he,P=new he;for(let w=0,S=0;w<a.length;w+=9,S+=6){m.set(a[w+0],a[w+1],a[w+2]),g.set(a[w+3],a[w+4],a[w+5]),x.set(a[w+6],a[w+7],a[w+8]),T.set(o[S+0],o[S+1]),b.set(o[S+2],o[S+3]),P.set(o[S+4],o[S+5]),N.copy(m).add(g).add(x).divideScalar(3);let C=v(N);_(T,S+0,m,C),_(b,S+2,g,C),_(P,S+4,x,C)}}function _(m,g,x,N){N<0&&m.x===1&&(o[g]=m.x-1),x.x===0&&x.z===0&&(o[g]=N/2/Math.PI+.5)}function v(m){return Math.atan2(m.z,-m.x)}function d(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Iy(t.vertices,t.indices,t.radius,t.details)}},dn=class extends ba{constructor(e){super(e),this.uuid=di(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let r=0,n=this.holes.length;r<n;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){let n=e.holes[t];this.holes.push(new ba().fromJSON(n))}return this}},r3={triangulate:function(e,t,r=2){let n=t&&t.length,i=n?t[0]*r:e.length,a=Uy(e,0,i,r,!0),o=[];if(!a||a.next===a.prev)return o;let s,l,u,c,p,h,f;if(n&&(a=s3(e,t,a,r)),e.length>80*r){s=u=e[0],l=c=e[1];for(let y=r;y<i;y+=r)p=e[y],h=e[y+1],p<s&&(s=p),h<l&&(l=h),p>u&&(u=p),h>c&&(c=h);f=Math.max(u-s,c-l),f=f!==0?32767/f:0}return yl(a,o,r,s,l,f,0),o}};function Uy(e,t,r,n,i){let a,o;if(i===_3(e,t,r,n)>0)for(a=t;a<r;a+=n)o=A_(a,e[a],e[a+1],o);else for(a=r-n;a>=t;a-=n)o=A_(a,e[a],e[a+1],o);return o&&Qc(o,o.next)&&(Sl(o),o=o.next),o}function La(e,t){if(!e)return e;t||(t=e);let r=e,n;do if(n=!1,!r.steiner&&(Qc(r,r.next)||Gt(r.prev,r,r.next)===0)){if(Sl(r),r=t=r.prev,r===r.next)break;n=!0}else r=r.next;while(n||r!==t);return t}function yl(e,t,r,n,i,a,o){if(!e)return;!o&&a&&h3(e,n,i,a);let s=e,l,u;for(;e.prev!==e.next;){if(l=e.prev,u=e.next,a?i3(e,n,i,a):n3(e)){t.push(l.i/r|0),t.push(e.i/r|0),t.push(u.i/r|0),Sl(e),e=u.next,s=u.next;continue}if(e=u,e===s){o?o===1?(e=a3(La(e),t,r),yl(e,t,r,n,i,a,2)):o===2&&o3(e,t,r,n,i,a):yl(La(e),t,r,n,i,a,1);break}}}function n3(e){let t=e.prev,r=e,n=e.next;if(Gt(t,r,n)>=0)return!1;let i=t.x,a=r.x,o=n.x,s=t.y,l=r.y,u=n.y,c=i<a?i<o?i:o:a<o?a:o,p=s<l?s<u?s:u:l<u?l:u,h=i>a?i>o?i:o:a>o?a:o,f=s>l?s>u?s:u:l>u?l:u,y=n.next;for(;y!==t;){if(y.x>=c&&y.x<=h&&y.y>=p&&y.y<=f&&Bo(i,s,a,l,o,u,y.x,y.y)&&Gt(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function i3(e,t,r,n){let i=e.prev,a=e,o=e.next;if(Gt(i,a,o)>=0)return!1;let s=i.x,l=a.x,u=o.x,c=i.y,p=a.y,h=o.y,f=s<l?s<u?s:u:l<u?l:u,y=c<p?c<h?c:h:p<h?p:h,_=s>l?s>u?s:u:l>u?l:u,v=c>p?c>h?c:h:p>h?p:h,d=em(f,y,t,r,n),m=em(_,v,t,r,n),g=e.prevZ,x=e.nextZ;for(;g&&g.z>=d&&x&&x.z<=m;){if(g.x>=f&&g.x<=_&&g.y>=y&&g.y<=v&&g!==i&&g!==o&&Bo(s,c,l,p,u,h,g.x,g.y)&&Gt(g.prev,g,g.next)>=0||(g=g.prevZ,x.x>=f&&x.x<=_&&x.y>=y&&x.y<=v&&x!==i&&x!==o&&Bo(s,c,l,p,u,h,x.x,x.y)&&Gt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;g&&g.z>=d;){if(g.x>=f&&g.x<=_&&g.y>=y&&g.y<=v&&g!==i&&g!==o&&Bo(s,c,l,p,u,h,g.x,g.y)&&Gt(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;x&&x.z<=m;){if(x.x>=f&&x.x<=_&&x.y>=y&&x.y<=v&&x!==i&&x!==o&&Bo(s,c,l,p,u,h,x.x,x.y)&&Gt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function a3(e,t,r){let n=e;do{let i=n.prev,a=n.next.next;!Qc(i,a)&&Dy(i,n,n.next,a)&&xl(i,a)&&xl(a,i)&&(t.push(i.i/r|0),t.push(n.i/r|0),t.push(a.i/r|0),Sl(n),Sl(n.next),n=e=a),n=n.next}while(n!==e);return La(n)}function o3(e,t,r,n,i,a){let o=e;do{let s=o.next.next;for(;s!==o.prev;){if(o.i!==s.i&&m3(o,s)){let l=Oy(o,s);o=La(o,o.next),l=La(l,l.next),yl(o,t,r,n,i,a,0),yl(l,t,r,n,i,a,0);return}s=s.next}o=o.next}while(o!==e)}function s3(e,t,r,n){let i=[],a,o,s,l,u;for(a=0,o=t.length;a<o;a++)s=t[a]*n,l=a<o-1?t[a+1]*n:e.length,u=Uy(e,s,l,n,!1),u===u.next&&(u.steiner=!0),i.push(f3(u));for(i.sort(l3),a=0;a<i.length;a++)r=u3(i[a],r);return r}function l3(e,t){return e.x-t.x}function u3(e,t){let r=c3(e,t);if(!r)return t;let n=Oy(r,e);return La(n,n.next),La(r,r.next)}function c3(e,t){let r=t,n=-1/0,i,a=e.x,o=e.y;do{if(o<=r.y&&o>=r.next.y&&r.next.y!==r.y){let h=r.x+(o-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(h<=a&&h>n&&(n=h,i=r.x<r.next.x?r:r.next,h===a))return i}r=r.next}while(r!==t);if(!i)return null;let s=i,l=i.x,u=i.y,c=1/0,p;r=i;do a>=r.x&&r.x>=l&&a!==r.x&&Bo(o<u?a:n,o,l,u,o<u?n:a,o,r.x,r.y)&&(p=Math.abs(o-r.y)/(a-r.x),xl(r,e)&&(p<c||p===c&&(r.x>i.x||r.x===i.x&&d3(i,r)))&&(i=r,c=p)),r=r.next;while(r!==s);return i}function d3(e,t){return Gt(e.prev,e,t.prev)<0&&Gt(t.next,e,e.next)<0}function h3(e,t,r,n){let i=e;do i.z===0&&(i.z=em(i.x,i.y,t,r,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,p3(i)}function p3(e){let t,r,n,i,a,o,s,l,u=1;do{for(r=e,e=null,a=null,o=0;r;){for(o++,n=r,s=0,t=0;t<u&&(s++,n=n.nextZ,!!n);t++);for(l=u;s>0||l>0&&n;)s!==0&&(l===0||!n||r.z<=n.z)?(i=r,r=r.nextZ,s--):(i=n,n=n.nextZ,l--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=n}a.nextZ=null,u*=2}while(o>1);return e}function em(e,t,r,n,i){return e=(e-r)*i|0,t=(t-n)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function f3(e){let t=e,r=e;do(t.x<r.x||t.x===r.x&&t.y<r.y)&&(r=t),t=t.next;while(t!==e);return r}function Bo(e,t,r,n,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(n-s)>=(r-o)*(t-s)&&(r-o)*(a-s)>=(i-o)*(n-s)}function m3(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!g3(e,t)&&(xl(e,t)&&xl(t,e)&&v3(e,t)&&(Gt(e.prev,e,t.prev)||Gt(e,t.prev,t))||Qc(e,t)&&Gt(e.prev,e,e.next)>0&&Gt(t.prev,t,t.next)>0)}function Gt(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function Qc(e,t){return e.x===t.x&&e.y===t.y}function Dy(e,t,r,n){let i=Ic(Gt(e,t,r)),a=Ic(Gt(e,t,n)),o=Ic(Gt(r,n,e)),s=Ic(Gt(r,n,t));return!!(i!==a&&o!==s||i===0&&Lc(e,r,t)||a===0&&Lc(e,n,t)||o===0&&Lc(r,e,n)||s===0&&Lc(r,t,n))}function Lc(e,t,r){return t.x<=Math.max(e.x,r.x)&&t.x>=Math.min(e.x,r.x)&&t.y<=Math.max(e.y,r.y)&&t.y>=Math.min(e.y,r.y)}function Ic(e){return e>0?1:e<0?-1:0}function g3(e,t){let r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&Dy(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}function xl(e,t){return Gt(e.prev,e,e.next)<0?Gt(e,t,e.next)>=0&&Gt(e,e.prev,t)>=0:Gt(e,t,e.prev)<0||Gt(e,e.next,t)<0}function v3(e,t){let r=e,n=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do r.y>a!=r.next.y>a&&r.next.y!==r.y&&i<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next;while(r!==e);return n}function Oy(e,t){let r=new tm(e.i,e.x,e.y),n=new tm(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,r.next=i,i.prev=r,n.next=r,r.prev=n,a.next=n,n.prev=a,n}function A_(e,t,r,n){let i=new tm(e,t,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Sl(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function tm(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _3(e,t,r,n){let i=0;for(let a=t,o=r-n;a<r;a+=n)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Wo=class ky{static area(t){let r=t.length,n=0;for(let i=r-1,a=0;a<r;i=a++)n+=t[i].x*t[a].y-t[a].x*t[i].y;return n*.5}static isClockWise(t){return ky.area(t)<0}static triangulateShape(t,r){let n=[],i=[],a=[];C_(t),R_(n,t);let o=t.length;r.forEach(C_);for(let l=0;l<r.length;l++)i.push(o),o+=r[l].length,R_(n,r[l]);let s=r3.triangulate(n,i);for(let l=0;l<s.length;l+=3)a.push(s.slice(l,l+3));return a}};function C_(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function R_(e,t){for(let r=0;r<t.length;r++)e.push(t[r].x),e.push(t[r].y)}var dl=class Fy extends wr{constructor(t=new dn([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),r={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:r},t=Array.isArray(t)?t:[t];let n=this,i=[],a=[];for(let s=0,l=t.length;s<l;s++){let u=t[s];o(u)}this.setAttribute("position",new wt(i,3)),this.setAttribute("uv",new wt(a,2)),this.computeVertexNormals();function o(s){let l=[],u=r.curveSegments!==void 0?r.curveSegments:12,c=r.steps!==void 0?r.steps:1,p=r.depth!==void 0?r.depth:1,h=r.bevelEnabled!==void 0?r.bevelEnabled:!0,f=r.bevelThickness!==void 0?r.bevelThickness:.2,y=r.bevelSize!==void 0?r.bevelSize:f-.1,_=r.bevelOffset!==void 0?r.bevelOffset:0,v=r.bevelSegments!==void 0?r.bevelSegments:3,d=r.extrudePath,m=r.UVGenerator!==void 0?r.UVGenerator:y3,g,x=!1,N,T,b,P;d&&(g=d.getSpacedPoints(c),x=!0,h=!1,N=d.computeFrenetFrames(c,!1),T=new I,b=new I,P=new I),h||(v=0,f=0,y=0,_=0);let w=s.extractPoints(u),S=w.shape,C=w.holes;if(!Wo.isClockWise(S)){S=S.reverse();for(let K=0,ge=C.length;K<ge;K++){let R=C[K];Wo.isClockWise(R)&&(C[K]=R.reverse())}}let k=Wo.triangulateShape(S,C),W=S;for(let K=0,ge=C.length;K<ge;K++){let R=C[K];S=S.concat(R)}function V(K,ge,R){return ge||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(ge,R)}let Z=S.length,$=k.length;function ae(K,ge,R){let Ie,fe,Ue,se=K.x-ge.x,qe=K.y-ge.y,we=R.x-K.x,De=R.y-K.y,A=se*se+qe*qe,M=se*De-qe*we;if(Math.abs(M)>Number.EPSILON){let F=Math.sqrt(A),Q=Math.sqrt(we*we+De*De),ne=ge.x-qe/F,q=ge.y+se/F,He=R.x-De/Q,xe=R.y+we/Q,Te=((He-ne)*De-(xe-q)*we)/(se*De-qe*we);Ie=ne+se*Te-K.x,fe=q+qe*Te-K.y;let Ze=Ie*Ie+fe*fe;if(Ze<=2)return new he(Ie,fe);Ue=Math.sqrt(Ze/2)}else{let F=!1;se>Number.EPSILON?we>Number.EPSILON&&(F=!0):se<-Number.EPSILON?we<-Number.EPSILON&&(F=!0):Math.sign(qe)===Math.sign(De)&&(F=!0),F?(Ie=-qe,fe=se,Ue=Math.sqrt(A)):(Ie=se,fe=qe,Ue=Math.sqrt(A/2))}return new he(Ie/Ue,fe/Ue)}let Y=[];for(let K=0,ge=W.length,R=ge-1,Ie=K+1;K<ge;K++,R++,Ie++)R===ge&&(R=0),Ie===ge&&(Ie=0),Y[K]=ae(W[K],W[R],W[Ie]);let oe=[],ve,We=Y.concat();for(let K=0,ge=C.length;K<ge;K++){let R=C[K];ve=[];for(let Ie=0,fe=R.length,Ue=fe-1,se=Ie+1;Ie<fe;Ie++,Ue++,se++)Ue===fe&&(Ue=0),se===fe&&(se=0),ve[Ie]=ae(R[Ie],R[Ue],R[se]);oe.push(ve),We=We.concat(ve)}for(let K=0;K<v;K++){let ge=K/v,R=f*Math.cos(ge*Math.PI/2),Ie=y*Math.sin(ge*Math.PI/2)+_;for(let fe=0,Ue=W.length;fe<Ue;fe++){let se=V(W[fe],Y[fe],Ie);Le(se.x,se.y,-R)}for(let fe=0,Ue=C.length;fe<Ue;fe++){let se=C[fe];ve=oe[fe];for(let qe=0,we=se.length;qe<we;qe++){let De=V(se[qe],ve[qe],Ie);Le(De.x,De.y,-R)}}}let nt=y+_;for(let K=0;K<Z;K++){let ge=h?V(S[K],We[K],nt):S[K];x?(b.copy(N.normals[0]).multiplyScalar(ge.x),T.copy(N.binormals[0]).multiplyScalar(ge.y),P.copy(g[0]).add(b).add(T),Le(P.x,P.y,P.z)):Le(ge.x,ge.y,0)}for(let K=1;K<=c;K++)for(let ge=0;ge<Z;ge++){let R=h?V(S[ge],We[ge],nt):S[ge];x?(b.copy(N.normals[K]).multiplyScalar(R.x),T.copy(N.binormals[K]).multiplyScalar(R.y),P.copy(g[K]).add(b).add(T),Le(P.x,P.y,P.z)):Le(R.x,R.y,p/c*K)}for(let K=v-1;K>=0;K--){let ge=K/v,R=f*Math.cos(ge*Math.PI/2),Ie=y*Math.sin(ge*Math.PI/2)+_;for(let fe=0,Ue=W.length;fe<Ue;fe++){let se=V(W[fe],Y[fe],Ie);Le(se.x,se.y,p+R)}for(let fe=0,Ue=C.length;fe<Ue;fe++){let se=C[fe];ve=oe[fe];for(let qe=0,we=se.length;qe<we;qe++){let De=V(se[qe],ve[qe],Ie);x?Le(De.x,De.y+g[c-1].y,g[c-1].x+R):Le(De.x,De.y,p+R)}}}J(),pe();function J(){let K=i.length/3;if(h){let ge=0,R=Z*ge;for(let Ie=0;Ie<$;Ie++){let fe=k[Ie];_e(fe[2]+R,fe[1]+R,fe[0]+R)}ge=c+v*2,R=Z*ge;for(let Ie=0;Ie<$;Ie++){let fe=k[Ie];_e(fe[0]+R,fe[1]+R,fe[2]+R)}}else{for(let ge=0;ge<$;ge++){let R=k[ge];_e(R[2],R[1],R[0])}for(let ge=0;ge<$;ge++){let R=k[ge];_e(R[0]+Z*c,R[1]+Z*c,R[2]+Z*c)}}n.addGroup(K,i.length/3-K,0)}function pe(){let K=i.length/3,ge=0;Ce(W,ge),ge+=W.length;for(let R=0,Ie=C.length;R<Ie;R++){let fe=C[R];Ce(fe,ge),ge+=fe.length}n.addGroup(K,i.length/3-K,1)}function Ce(K,ge){let R=K.length;for(;--R>=0;){let Ie=R,fe=R-1;fe<0&&(fe=K.length-1);for(let Ue=0,se=c+v*2;Ue<se;Ue++){let qe=Z*Ue,we=Z*(Ue+1),De=ge+Ie+qe,A=ge+fe+qe,M=ge+fe+we,F=ge+Ie+we;Be(De,A,M,F)}}}function Le(K,ge,R){l.push(K),l.push(ge),l.push(R)}function _e(K,ge,R){Ke(K),Ke(ge),Ke(R);let Ie=i.length/3,fe=m.generateTopUV(n,i,Ie-3,Ie-2,Ie-1);Ye(fe[0]),Ye(fe[1]),Ye(fe[2])}function Be(K,ge,R,Ie){Ke(K),Ke(ge),Ke(Ie),Ke(ge),Ke(R),Ke(Ie);let fe=i.length/3,Ue=m.generateSideWallUV(n,i,fe-6,fe-3,fe-2,fe-1);Ye(Ue[0]),Ye(Ue[1]),Ye(Ue[3]),Ye(Ue[1]),Ye(Ue[2]),Ye(Ue[3])}function Ke(K){i.push(l[K*3+0]),i.push(l[K*3+1]),i.push(l[K*3+2])}function Ye(K){a.push(K.x),a.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),r=this.parameters.shapes,n=this.parameters.options;return x3(r,n,t)}static fromJSON(t,r){let n=[];for(let a=0,o=t.shapes.length;a<o;a++){let s=r[t.shapes[a]];n.push(s)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Kf[i.type]().fromJSON(i)),new Fy(n,t.options)}},y3={generateTopUV:function(e,t,r,n,i){let a=t[r*3],o=t[r*3+1],s=t[n*3],l=t[n*3+1],u=t[i*3],c=t[i*3+1];return[new he(a,o),new he(s,l),new he(u,c)]},generateSideWallUV:function(e,t,r,n,i,a){let o=t[r*3],s=t[r*3+1],l=t[r*3+2],u=t[n*3],c=t[n*3+1],p=t[n*3+2],h=t[i*3],f=t[i*3+1],y=t[i*3+2],_=t[a*3],v=t[a*3+1],d=t[a*3+2];return Math.abs(s-c)<Math.abs(o-u)?[new he(o,1-l),new he(u,1-p),new he(h,1-y),new he(_,1-d)]:[new he(s,1-l),new he(c,1-p),new he(f,1-y),new he(v,1-d)]}};function x3(e,t,r){if(r.shapes=[],Array.isArray(e))for(let n=0,i=e.length;n<i;n++){let a=e[n];r.shapes.push(a.uuid)}else r.shapes.push(e.uuid);return r.options=Object.assign({},t),t.extrudePath!==void 0&&(r.options.extrudePath=t.extrudePath.toJSON()),r}var S3=class zy extends t3{constructor(t=1,r=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,a,t,r),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:r}}static fromJSON(t){return new zy(t.radius,t.detail)}},af=class By extends wr{constructor(t=new dn([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),r=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:r};let n=[],i=[],a=[],o=[],s=0,l=0;if(Array.isArray(t)===!1)u(t);else for(let c=0;c<t.length;c++)u(t[c]),this.addGroup(s,l,c),s+=l,l=0;this.setIndex(n),this.setAttribute("position",new wt(i,3)),this.setAttribute("normal",new wt(a,3)),this.setAttribute("uv",new wt(o,2));function u(c){let p=i.length/3,h=c.extractPoints(r),f=h.shape,y=h.holes;Wo.isClockWise(f)===!1&&(f=f.reverse());for(let v=0,d=y.length;v<d;v++){let m=y[v];Wo.isClockWise(m)===!0&&(y[v]=m.reverse())}let _=Wo.triangulateShape(f,y);for(let v=0,d=y.length;v<d;v++){let m=y[v];f=f.concat(m)}for(let v=0,d=f.length;v<d;v++){let m=f[v];i.push(m.x,m.y,0),a.push(0,0,1),o.push(m.x,m.y)}for(let v=0,d=_.length;v<d;v++){let m=_[v],g=m[0]+p,x=m[1]+p,N=m[2]+p;n.push(g,x,N),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),r=this.parameters.shapes;return M3(r,t)}static fromJSON(t,r){let n=[];for(let i=0,a=t.shapes.length;i<a;i++){let o=r[t.shapes[i]];n.push(o)}return new By(n,t.curveSegments)}};function M3(e,t){if(t.shapes=[],Array.isArray(e))for(let r=0,n=e.length;r<n;r++){let i=e[r];t.shapes.push(i.uuid)}else t.shapes.push(e.uuid);return t}var li=class Hy extends wr{constructor(t=1,r=32,n=16,i=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:r,heightSegments:n,phiStart:i,phiLength:a,thetaStart:o,thetaLength:s},r=Math.max(3,Math.floor(r)),n=Math.max(2,Math.floor(n));let l=Math.min(o+s,Math.PI),u=0,c=[],p=new I,h=new I,f=[],y=[],_=[],v=[];for(let d=0;d<=n;d++){let m=[],g=d/n,x=0;d===0&&o===0?x=.5/r:d===n&&l===Math.PI&&(x=-.5/r);for(let N=0;N<=r;N++){let T=N/r;p.x=-t*Math.cos(i+T*a)*Math.sin(o+g*s),p.y=t*Math.cos(o+g*s),p.z=t*Math.sin(i+T*a)*Math.sin(o+g*s),y.push(p.x,p.y,p.z),h.copy(p).normalize(),_.push(h.x,h.y,h.z),v.push(T+x,1-g),m.push(u++)}c.push(m)}for(let d=0;d<n;d++)for(let m=0;m<r;m++){let g=c[d][m+1],x=c[d][m],N=c[d+1][m],T=c[d+1][m+1];(d!==0||o>0)&&f.push(g,x,T),(d!==n-1||l<Math.PI)&&f.push(x,N,T)}this.setIndex(f),this.setAttribute("position",new wt(y,3)),this.setAttribute("normal",new wt(_,3)),this.setAttribute("uv",new wt(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hy(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},w3=class Vy extends wr{constructor(t=1,r=.4,n=12,i=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:r,radialSegments:n,tubularSegments:i,arc:a},n=Math.floor(n),i=Math.floor(i);let o=[],s=[],l=[],u=[],c=new I,p=new I,h=new I;for(let f=0;f<=n;f++)for(let y=0;y<=i;y++){let _=y/i*a,v=f/n*Math.PI*2;p.x=(t+r*Math.cos(v))*Math.cos(_),p.y=(t+r*Math.cos(v))*Math.sin(_),p.z=r*Math.sin(v),s.push(p.x,p.y,p.z),c.x=t*Math.cos(_),c.y=t*Math.sin(_),h.subVectors(p,c).normalize(),l.push(h.x,h.y,h.z),u.push(y/i),u.push(f/n)}for(let f=1;f<=n;f++)for(let y=1;y<=i;y++){let _=(i+1)*f+y-1,v=(i+1)*(f-1)+y-1,d=(i+1)*(f-1)+y,m=(i+1)*f+y;o.push(_,v,m),o.push(v,d,m)}this.setIndex(o),this.setAttribute("position",new wt(s,3)),this.setAttribute("normal",new wt(l,3)),this.setAttribute("uv",new wt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vy(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},It=class extends Ua{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=j_,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Uc(e,t,r){return!e||!r&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function E3(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Kc=class{constructor(e,t,r,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(r),this.sampleValues=t,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,r=this._cachedIndex,n=t[r],i=t[r-1];e:{t:{let a;r:{n:if(!(e<n)){for(let o=r+2;;){if(n===void 0){if(e<i)break n;return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===o)break;if(i=n,n=t[++r],e<n)break t}a=t.length;break r}if(!(e>=i)){let o=t[1];e<o&&(r=2,i=o);for(let s=r-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===s)break;if(n=i,i=t[--r-1],e>=i)break t}a=r,r=0;break r}break e}for(;r<a;){let o=r+a>>>1;e<t[o]?a=o:r=o+1}if(n=t[r],i=t[r-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,i,n)}return this.interpolate_(r,i,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,r=this.sampleValues,n=this.valueSize,i=e*n;for(let a=0;a!==n;++a)t[a]=r[i+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},T3=class extends Kc{constructor(e,t,r,n){super(e,t,r,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:x1,endingEnd:x1}}intervalChanged_(e,t,r){let n=this.parameterPositions,i=e-2,a=e+1,o=n[i],s=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case S1:i=e,o=2*t-r;break;case M1:i=n.length-2,o=t+n[i]-n[i+1];break;default:i=e,o=r}if(s===void 0)switch(this.getSettings_().endingEnd){case S1:a=e,s=2*r-t;break;case M1:a=1,s=r+n[1]-n[0];break;default:a=e-1,s=t}let l=(r-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(s-r),this._offsetPrev=i*u,this._offsetNext=a*u}interpolate_(e,t,r,n){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,l=s-o,u=this._offsetPrev,c=this._offsetNext,p=this._weightPrev,h=this._weightNext,f=(r-t)/(n-t),y=f*f,_=y*f,v=-p*_+2*p*y-p*f,d=(1+p)*_+(-1.5-2*p)*y+(-.5+p)*f+1,m=(-1-h)*_+(1.5+h)*y+.5*f,g=h*_-h*y;for(let x=0;x!==o;++x)i[x]=v*a[u+x]+d*a[l+x]+m*a[s+x]+g*a[c+x];return i}},b3=class extends Kc{constructor(e,t,r,n){super(e,t,r,n)}interpolate_(e,t,r,n){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,l=s-o,u=(r-t)/(n-t),c=1-u;for(let p=0;p!==o;++p)i[p]=a[l+p]*c+a[s+p]*u;return i}},A3=class extends Kc{constructor(e,t,r,n){super(e,t,r,n)}interpolate_(e){return this.copySampleValue_(e-1)}},mi=class{constructor(e,t,r,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Uc(t,this.TimeBufferType),this.values=Uc(r,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,r;if(t.toJSON!==this.toJSON)r=t.toJSON(e);else{r={name:e.name,times:Uc(e.times,Array),values:Uc(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(r.interpolation=n)}return r.type=e.ValueTypeName,r}InterpolantFactoryMethodDiscrete(e){return new A3(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new b3(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new T3(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case jc:t=this.InterpolantFactoryMethodDiscrete;break;case jf:t=this.InterpolantFactoryMethodLinear;break;case Ep:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return console.warn("THREE.KeyframeTrack:",r),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jc;case this.InterpolantFactoryMethodLinear:return jf;case this.InterpolantFactoryMethodSmooth:return Ep}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let r=0,n=t.length;r!==n;++r)t[r]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let r=0,n=t.length;r!==n;++r)t[r]*=e}return this}trim(e,t){let r=this.times,n=r.length,i=0,a=n-1;for(;i!==n&&r[i]<e;)++i;for(;a!==-1&&r[a]>t;)--a;if(++a,i!==0||a!==n){i>=a&&(a=Math.max(a,1),i=a-1);let o=this.getValueSize();this.times=r.slice(i,a),this.values=this.values.slice(i*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let r=this.times,n=this.values,i=r.length;i===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==i;o++){let s=r[o];if(typeof s=="number"&&isNaN(s)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,s),e=!1;break}if(a!==null&&a>s){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,s,a),e=!1;break}a=s}if(n!==void 0&&E3(n))for(let o=0,s=n.length;o!==s;++o){let l=n[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),r=this.getValueSize(),n=this.getInterpolation()===Ep,i=e.length-1,a=1;for(let o=1;o<i;++o){let s=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(n)s=!0;else{let c=o*r,p=c-r,h=c+r;for(let f=0;f!==r;++f){let y=t[c+f];if(y!==t[p+f]||y!==t[h+f]){s=!0;break}}}if(s){if(o!==a){e[a]=e[o];let c=o*r,p=a*r;for(let h=0;h!==r;++h)t[p+h]=t[c+h]}++a}}if(i>0){e[a]=e[i];for(let o=i*r,s=a*r,l=0;l!==r;++l)t[s+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*r)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),r=this.constructor,n=new r(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=jf;var wl=class extends mi{constructor(e,t,r){super(e,t,r)}};wl.prototype.ValueTypeName="bool";wl.prototype.ValueBufferType=Array;wl.prototype.DefaultInterpolation=jc;wl.prototype.InterpolantFactoryMethodLinear=void 0;wl.prototype.InterpolantFactoryMethodSmooth=void 0;var C3=class extends mi{};C3.prototype.ValueTypeName="color";var R3=class extends mi{};R3.prototype.ValueTypeName="number";var P3=class extends Kc{constructor(e,t,r,n){super(e,t,r,n)}interpolate_(e,t,r,n){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(r-t)/(n-t),l=e*o;for(let u=l+o;l!==u;l+=4)Ko.slerpFlat(i,0,a,l-o,a,l,s);return i}},Gy=class extends mi{InterpolantFactoryMethodLinear(e){return new P3(this.times,this.values,this.getValueSize(),e)}};Gy.prototype.ValueTypeName="quaternion";Gy.prototype.InterpolantFactoryMethodSmooth=void 0;var El=class extends mi{constructor(e,t,r){super(e,t,r)}};El.prototype.ValueTypeName="string";El.prototype.ValueBufferType=Array;El.prototype.DefaultInterpolation=jc;El.prototype.InterpolantFactoryMethodLinear=void 0;El.prototype.InterpolantFactoryMethodSmooth=void 0;var N3=class extends mi{};N3.prototype.ValueTypeName="vector";var L3=class{constructor(e,t,r){let n=this,i=!1,a=0,o=0,s,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(u){o++,i===!1&&n.onStart!==void 0&&n.onStart(u,a,o),i=!0},this.itemEnd=function(u){a++,n.onProgress!==void 0&&n.onProgress(u,a,o),a===o&&(i=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return s?s(u):u},this.setURLModifier=function(u){return s=u,this},this.addHandler=function(u,c){return l.push(u,c),this},this.removeHandler=function(u){let c=l.indexOf(u);return c!==-1&&l.splice(c,2),this},this.getHandler=function(u){for(let c=0,p=l.length;c<p;c+=2){let h=l[c],f=l[c+1];if(h.global&&(h.lastIndex=0),h.test(u))return f}return null}}},I3=new L3,U3=class{constructor(e){this.manager=e!==void 0?e:I3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let r=this;return new Promise(function(n,i){r.load(e,n,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};U3.DEFAULT_MATERIAL_NAME="__DEFAULT";var fm=class extends tr{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},D3=class extends fm{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tr.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},of=new Rt,P_=new I,N_=new I,Wy=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cm,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,r=this.matrix;P_.setFromMatrixPosition(e.matrixWorld),t.position.copy(P_),N_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(N_),t.updateMatrixWorld(),of.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(of),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(of)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},L_=new Rt,hl=new I,sf=new I,O3=class extends Wy{constructor(){super(new Qr(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let r=this.camera,n=this.matrix,i=e.distance||r.far;i!==r.far&&(r.far=i,r.updateProjectionMatrix()),hl.setFromMatrixPosition(e.matrixWorld),r.position.copy(hl),sf.copy(r.position),sf.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(sf),r.updateMatrixWorld(),n.makeTranslation(-hl.x,-hl.y,-hl.z),L_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(L_)}},Do=class extends fm{constructor(e,t,r=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=n,this.shadow=new O3}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},k3=class extends Wy{constructor(){super(new fy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},F3=class extends fm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tr.DEFAULT_UP),this.updateMatrix(),this.target=new tr,this.shadow=new k3}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},mm="\\[\\]\\.:\\/",z3=new RegExp("["+mm+"]","g"),gm="[^"+mm+"]",B3="[^"+mm.replace("\\.","")+"]",H3=/((?:WC+[\/:])*)/.source.replace("WC",gm),V3=/(WCOD+)?/.source.replace("WCOD",B3),G3=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gm),W3=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gm),X3=new RegExp("^"+H3+V3+G3+W3+"$"),j3=["material","materials","bones","map"],$3=class{constructor(e,t,r){let n=r||Xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let r=this._targetGroup.nCachedObjects_,n=this._bindings[r];n!==void 0&&n.getValue(e,t)}setValue(e,t){let r=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=r.length;n!==i;++n)r[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].unbind()}},Xt=class Fo{constructor(t,r,n){this.path=r,this.parsedPath=n||Fo.parseTrackName(r),this.node=Fo.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,r,n){return t&&t.isAnimationObjectGroup?new Fo.Composite(t,r,n):new Fo(t,r,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(z3,"")}static parseTrackName(t){let r=X3.exec(t);if(r===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:r[2],objectName:r[3],objectIndex:r[4],propertyName:r[5],propertyIndex:r[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let a=n.nodeName.substring(i+1);j3.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,r){if(r===void 0||r===""||r==="."||r===-1||r===t.name||r===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(r);if(n!==void 0)return n}if(t.children){let n=function(a){for(let o=0;o<a.length;o++){let s=a[o];if(s.name===r||s.uuid===r)return s;let l=n(s.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,r){t[r]=this.targetObject[this.propertyName]}_getValue_array(t,r){let n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)t[r++]=n[i]}_getValue_arrayElement(t,r){t[r]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,r){this.resolvedProperty.toArray(t,r)}_setValue_direct(t,r){this.targetObject[this.propertyName]=t[r]}_setValue_direct_setNeedsUpdate(t,r){this.targetObject[this.propertyName]=t[r],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,r){this.targetObject[this.propertyName]=t[r],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,r){let n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=t[r++]}_setValue_array_setNeedsUpdate(t,r){let n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=t[r++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,r){let n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=t[r++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,r){this.resolvedProperty[this.propertyIndex]=t[r]}_setValue_arrayElement_setNeedsUpdate(t,r){this.resolvedProperty[this.propertyIndex]=t[r],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,r){this.resolvedProperty[this.propertyIndex]=t[r],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,r){this.resolvedProperty.fromArray(t,r)}_setValue_fromArray_setNeedsUpdate(t,r){this.resolvedProperty.fromArray(t,r),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,r){this.resolvedProperty.fromArray(t,r),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,r){this.bind(),this.getValue(t,r)}_setValue_unbound(t,r){this.bind(),this.setValue(t,r)}bind(){let t=this.node,r=this.parsedPath,n=r.objectName,i=r.propertyName,a=r.propertyIndex;if(t||(t=Fo.findNode(this.rootNode,r.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=r.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===u){u=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let o=t[i];if(o===void 0){let u=r.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?s=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xt.Composite=$3;Xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xt.prototype.GetterByBindingType=[Xt.prototype._getValue_direct,Xt.prototype._getValue_array,Xt.prototype._getValue_arrayElement,Xt.prototype._getValue_toArray];Xt.prototype.SetterByBindingTypeAndVersioning=[[Xt.prototype._setValue_direct,Xt.prototype._setValue_direct_setNeedsUpdate,Xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_array,Xt.prototype._setValue_array_setNeedsUpdate,Xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_arrayElement,Xt.prototype._setValue_arrayElement_setNeedsUpdate,Xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_fromArray,Xt.prototype._setValue_fromArray_setNeedsUpdate,Xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var TC=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Y3=14921803,ml=(e,t=0,r=1)=>Math.min(r,Math.max(t,e)),rm=e=>e*e*(3-2*e),Nr=(e,t,r)=>rm(ml((e-t)/(r-t)));function pi(e,t,r,n,i=!0){let a=document.createElement("canvas");a.width=e,a.height=t;let o=a.getContext("2d");r(o,e,t);let s=new HA(a);return i&&(s.colorSpace=Jr),s.wrapS=s.wrapT=Xc,n&&s.repeat.set(n[0],n[1]),s.anisotropy=4,s}function q3(e="rgba(255,240,190,1)",t="rgba(255,190,90,.45)"){return pi(128,128,r=>{let n=r.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,e),n.addColorStop(.25,t),n.addColorStop(1,"rgba(255,150,40,0)"),r.fillStyle=n,r.fillRect(0,0,128,128)})}function Z3(){return pi(256,256,(e,t,r)=>{e.fillStyle="#6a2434",e.fillRect(0,0,t,r);for(let n=0;n<1800;n++)e.fillStyle=`rgba(${Math.random()<.5?"255,200,150":"30,0,10"},${Math.random()*.07})`,e.fillRect(Math.random()*t,Math.random()*r,2+Math.random()*6,2+Math.random()*6);e.strokeStyle="rgba(20,0,8,.55)",e.lineWidth=3;for(let n=0;n<=r;n+=64)e.beginPath(),e.moveTo(0,n),e.lineTo(t,n),e.stroke();for(let n=0;n<4;n++)for(let i=n%2*64;i<=t;i+=128)e.beginPath(),e.moveTo(i,n*64),e.lineTo(i,n*64+64),e.stroke();e.strokeStyle="rgba(227,176,75,.22)",e.lineWidth=1.5;for(let n=0;n<4;n++)for(let i=0;i<2;i++)e.strokeRect(i*128+8+n%2*64%128*0,n*64+8,112,48)})}function J3(){return pi(256,256,(e,t,r)=>{e.fillStyle="#2a1018",e.fillRect(0,0,t,r);for(let n=0;n<2200;n++)e.fillStyle=`rgba(255,190,140,${Math.random()*.05})`,e.fillRect(Math.random()*t,Math.random()*r,3,3);e.strokeStyle="rgba(227,176,75,.45)",e.lineWidth=2,e.strokeRect(2,2,t-4,r-4),e.strokeStyle="rgba(227,176,75,.2)",e.lineWidth=1.5,e.beginPath(),e.moveTo(t/2,24),e.lineTo(t-24,r/2),e.lineTo(t/2,r-24),e.lineTo(24,r/2),e.closePath(),e.stroke(),e.beginPath(),e.arc(t/2,r/2,30,0,7),e.stroke()})}function Q3(){return pi(256,256,(e,t,r)=>{e.fillStyle="#7a0f22",e.fillRect(0,0,t,r),e.fillStyle="#e3b04b",e.fillRect(0,0,14,r),e.fillRect(t-14,0,14,r),e.fillStyle="#4a0612",e.fillRect(14,0,10,r),e.fillRect(t-24,0,10,r),e.strokeStyle="#e3b04b",e.lineWidth=2,e.save(),e.translate(t/2,r/2);for(let n=0;n<12;n++)e.rotate(Math.PI/6),e.beginPath(),e.ellipse(0,-44,14,34,0,0,7),e.stroke();e.beginPath(),e.arc(0,0,14,0,7),e.fillStyle="#f4c75a",e.fill(),e.restore()})}function K3(){return pi(256,512,(e,t,r)=>{let n=e.createLinearGradient(0,0,t,0);n.addColorStop(0,"#4a0a16"),n.addColorStop(.5,"#6d1424"),n.addColorStop(1,"#4a0a16"),e.fillStyle=n,e.fillRect(0,0,t,r),e.strokeStyle="#e3b04b",e.lineWidth=6,e.strokeRect(8,8,t-16,r-16),e.lineWidth=2,e.strokeRect(22,22,t-44,r-44);for(let i=0;i<4;i++)for(let a=0;a<2;a++){let o=34+a*100,s=40+i*118;e.strokeStyle="rgba(227,176,75,.9)",e.lineWidth=2,e.strokeRect(o,s,88,104),e.beginPath(),e.moveTo(o+44,s+12),e.lineTo(o+76,s+52),e.lineTo(o+44,s+92),e.lineTo(o+12,s+52),e.closePath(),e.stroke(),e.fillStyle="#f4c75a",e.beginPath(),e.arc(o+44,s+52,7,0,7),e.fill();for(let[l,u]of[[6,6],[82,6],[6,98],[82,98]])e.beginPath(),e.arc(o+l,s+u,3,0,7),e.fill()}})}function eC(){return pi(128,128,(e,t,r)=>{e.fillStyle="#1a0408",e.fillRect(0,0,t,r),e.strokeStyle="#ffd98a",e.lineWidth=5;for(let n=0;n<=t;n+=64)for(let i=0;i<=r;i+=64)e.beginPath(),e.arc(n,i,32,0,7),e.stroke(),e.beginPath(),e.arc(n+32,i+32,32,0,7),e.stroke()},[6,3])}function un(e,t,r,n=new dn,i=!1){let a=e/2;return n.moveTo(-a,0),n.lineTo(-a,t),n.quadraticCurveTo(-a,t+r*.78,0,t+r),n.quadraticCurveTo(a,t+r*.78,a,t),n.lineTo(a,0),n.lineTo(-a,0),n}function Dc(e,t=20){return new e3(e.map(([r,n])=>new he(r,n)),t)}function Xy(e,t,r={}){let n=Math.min(window.innerWidth,screen.width||999)<820,i=new OA({canvas:e,antialias:!n,alpha:!1,powerPreference:"high-performance"});i.setPixelRatio(Math.min(window.devicePixelRatio||1,n?1.5:2)),i.toneMapping=D_,i.toneMappingExposure=1.15;let a=new m_;a.background=new st(1180684),a.fog=new kA(1771283,.0105);let o=new Qr(55,1,.3,700),s=[],l=H=>(s.push(H),H),u=l(new Wn({side:Ir,depthWrite:!1,fog:!1,uniforms:{top:{value:new st(656416)},mid:{value:new st(4853808)},hor:{value:new st(15764026)}},vertexShader:"varying vec3 v; void main(){ v=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"varying vec3 v; uniform vec3 top,mid,hor; void main(){ float h=clamp(v.y,0.,1.); vec3 c=mix(hor,mid,smoothstep(0.,.22,h)); c=mix(c,top,smoothstep(.15,.7,h)); gl_FragColor=vec4(c,1.); }"})),c=new Ae(l(new li(400,24,16)),u);a.add(c);{let H=new Zf(i),G=new m_;G.add(new Ae(new li(50,16,12),u));let re=new Ae(new li(8,8,8),new Fn({color:16760944}));re.position.set(0,10,40),G.add(re);let ee=re.clone();ee.position.set(0,12,-40),G.add(ee),a.environment=H.fromScene(G,.04).texture,a.environmentIntensity=.55,H.dispose()}{let H=new Float32Array(1260);for(let re=0;re<420;re++){let ee=Math.random()*Math.PI*2,Re=Math.random()*1.2+.18,ze=380;H[re*3]=Math.cos(ee)*Math.cos(Re)*ze,H[re*3+1]=Math.sin(Re)*ze,H[re*3+2]=Math.sin(ee)*Math.cos(Re)*ze}let G=l(new wr);G.setAttribute("position",new Ur(H,3)),a.add(new w_(G,l(new Ey({color:16773583,size:1.7,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.85,depthWrite:!1}))))}let p=l(q3()),h=(H,G=1)=>l(new My({map:p,color:H,blending:Wc,depthWrite:!1,transparent:!0,opacity:G,fog:!1})),f=new ll(h(16771522,.9));f.scale.set(40,40,1),f.position.set(-75,78,-240),a.add(f);let y=new Ae(l(new li(7,20,14)),l(new Fn({color:16774366,fog:!1})));y.position.copy(f.position),a.add(y);let _=l(Z3()),v=l(new It({map:_,roughness:.82,metalness:.02,color:16766664})),d=l(new It({color:13146744,roughness:.75,metalness:.02})),m=l(new It({color:Y3,roughness:.32,metalness:.95})),g=l(new It({color:12158256,roughness:.5,metalness:.85})),x=l(new It({color:15851456,roughness:.6,metalness:.05})),N=l(new Fn({color:16761960,fog:!1})),T=l(new Fn({color:16762976,fog:!1}));l(J3()).repeat.set(36,36);let b=new Ae(l(new Rn(180,180)),l(new It({roughness:.7,metalness:.1,color:3420218})));b.rotation.x=-Math.PI/2,b.position.set(0,0,-20),a.add(b);let P=l(Q3());P.repeat.set(1,26);let w=new Ae(l(new Rn(4.6,80)),l(new It({map:P,roughness:.9})));w.rotation.x=-Math.PI/2,w.position.set(0,.02,2),a.add(w);let S=6.2,C=5,k=2.5,W=26,V=9.4,Z=2.6,$=l(pi(256,256,(H,G,re)=>{H.fillStyle="#d2c0a6",H.fillRect(0,0,G,re);for(let ee=0;ee<2600;ee++)H.fillStyle=`rgba(${Math.random()<.5?"255,240,210":"120,90,60"},${Math.random()*.08})`,H.fillRect(Math.random()*G,Math.random()*re,2+Math.random()*5,2+Math.random()*5);H.strokeStyle="rgba(90,65,45,.4)",H.lineWidth=3;for(let ee=0;ee<=re;ee+=32)H.beginPath(),H.moveTo(0,ee),H.lineTo(G,ee),H.stroke()})),ae=l(new It({map:$,roughness:.85,metalness:0,color:16777215})),Y=l(new It({color:11901558,roughness:.85})),oe=l(new It({color:15919833,roughness:.55,metalness:.02})),ve=l(new It({color:8825528,roughness:.15,metalness:.6,emissive:1716544,emissiveIntensity:.8})),We=l(new It({color:16767392,roughness:.3,metalness:.2,emissive:16754762,emissiveIntensity:.9})),nt=l(pi(128,256,(H,G,re)=>{H.fillStyle="#0d1b24",H.fillRect(0,0,G,re),H.strokeStyle="#d8e4ea",H.lineWidth=4;for(let ee=0;ee<re;ee+=64)H.strokeRect(2,ee+2,G-4,60),H.beginPath(),H.moveTo(2,ee+2),H.lineTo(G-2,ee+62),H.moveTo(G-2,ee+2),H.lineTo(2,ee+62),H.stroke()}));function J(H,G,re=22){let ee=new li(1,64,18,0,Math.PI*2,0,Math.PI/2),Re=ee.attributes.position;for(let ze=0;ze<Re.count;ze++){let et=Re.getX(ze),Oe=Re.getY(ze),Je=Re.getZ(ze),Qe=Math.atan2(Je,et),ke=1+.085*Math.pow(Math.abs(Math.cos(re*Qe/2)),.3)*(1-Oe*.6);Re.setXYZ(ze,et*H*ke,Oe*G*(1+.1*(1-Oe)),Je*H*ke)}return ee.computeVertexNormals(),l(ee)}let pe=l(Dc([[.01,0],[.16,.1],[.07,.4],[.13,.6],[.05,.9],[.01,1.4]],8));function Ce(H,G,re,ee,Re,ze=1.2,et=!0){let Oe=new Ra;if(Oe.position.set(H,G,re),et){let ke=new Ae(l(new cn(ee*.92,ee,ze,20)),ae);ke.position.y=ze/2,Oe.add(ke);let at=new Ae(l(new cn(ee*1.08,ee*1.08,.18,20)),oe);at.position.y=ze,Oe.add(at);for(let _t=-1;_t<=1;_t++){let E=_t*.55,L=new Ae(_e(ee*.5,ze*.5),We);L.position.set(Math.sin(E)*ee*.96,ze*.18,Math.cos(E)*ee*.96),L.rotation.y=E,Oe.add(L)}}let Je=new Ae(J(ee*1.02,Re),oe);Je.position.y=et?ze+.08:0,Oe.add(Je);let Qe=new Ae(pe,oe);return Qe.position.y=(et?ze:0)+Re*1.08,Qe.scale.setScalar(Math.max(.6,ee/2)),Oe.add(Qe),a.add(Oe),Oe}let Le={};function _e(H,G){let re=H.toFixed(2)+G.toFixed(2);return Le[re]||(Le[re]=l(new af(un(H,G*.72,G*.28,new dn),8))),Le[re]}function Be(H,G,re,ee,Re,ze=ve,et=0){let Oe=new Ae(_e(ee,Re),ze);Oe.position.set(H,G,re),Oe.rotation.y=et,a.add(Oe);let Je=un(ee+.45,Re+.2,0,new dn),Qe=new Ae(l(new dl((()=>{let ke=un(ee+.5,(Re+.2)*.72,(Re+.2)*.28,new dn);return ke.holes.push(un(ee,Re*.72,Re*.28,new ba)),ke})(),{depth:.18,bevelEnabled:!1,curveSegments:8})),oe);Qe.position.set(H,G-0,re-.02),Qe.rotation.y=et,a.add(Qe)}let Ke=new dn;Ke.moveTo(-12,0),Ke.lineTo(14,0),Ke.lineTo(14,V),Ke.lineTo(-12,V),Ke.lineTo(-12,0),Ke.holes.push(un(S,C,k,new ba));let Ye=l(new dl(Ke,{depth:Z,bevelEnabled:!1,curveSegments:14}));{let H=Ye.attributes.uv;for(let G=0;G<H.count;G++)H.setXY(G,H.getX(G)/5,H.getY(G)/5)}let K=new Ae(Ye,ae);K.position.z=-Z,a.add(K);for(let[H,G]of[[V,1],[4.6,.7]]){let re=new Ae(l(new er(26.6,.4*G,Z+.9)),oe);re.position.set(1,H,-Z/2+.2),a.add(re)}{let H=un(S+1.4,C,k+.7,new dn);H.holes.push(un(S,C,k,new ba));let G=new Ae(l(new dl(H,{depth:.7,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:2,curveSegments:14})),oe);G.position.z=.02,a.add(G);let re=un(S+3.2,C,k+1.6,new dn);re.holes.push(un(S+1.5,C,k+.75,new ba));let ee=new Ae(l(new dl(re,{depth:.35,bevelEnabled:!1,curveSegments:14})),Y);ee.position.z=.02,a.add(ee);let Re=new Sa(l(new li(.2,8,6)),oe,17),ze=new tr,et=0,Oe=S/2;for(let ke=0;ke<17;ke++){let at=ke/16,_t,E;if(at<.5){let L=at*2;_t=-Oe*(1-L)*(1-L)+0*L*L+-Oe*2*L*(1-L),E=C*(1-L)*(1-L)+(C+k)*L*L+(C+k*.78)*2*L*(1-L)}else{let L=(at-.5)*2;_t=Oe*2*L*(1-L)*1+Oe*L*L,E=(C+k)*(1-L)*(1-L)+C*L*L+(C+k*.78)*2*L*(1-L),_t=Oe*(L*L+2*L*(1-L))}ze.position.set(_t*.86,E-.02,.5),ze.scale.set(1,1,.5),ze.updateMatrix(),Re.setMatrixAt(et++,ze.matrix)}a.add(Re);let Je=pi(512,96,(ke,at,_t)=>{ke.fillStyle="#2a0f12",ke.fillRect(0,0,at,_t),ke.strokeStyle="#e3b04b",ke.lineWidth=4,ke.strokeRect(6,6,at-12,_t-12),ke.fillStyle="#f0c56a",ke.font='700 54px "Tiro Devanagari Hindi", serif',ke.textAlign="center",ke.textBaseline="middle",ke.fillText("\u0905\u0917\u094D\u0930\u0938\u0947\u0928 \u092D\u0935\u0928",at/2,_t/2+3)}),Qe=new Ae(l(new Rn(4.4,.83)),l(new Fn({map:Je,toneMapped:!1})));Qe.position.set(0,C+k+1.55,.05),a.add(Qe)}for(let H of[-1,1]){let G=new Ae(l(Dc([[.5,0],[.62,.3],[.4,.6],[.32,1],[.3,5.6],[.42,6],[.58,6.3]],14)),oe);G.position.set(H*(S/2+1.7),0,.8),a.add(G)}for(let H=0;H<3;H++){let G=new Ae(l(new er(S+3-H*.3,.2,1.2)),l(new It({color:9194040,roughness:.8})));G.position.set(0,.1+H*0+(2-H)*0,.6+(2-H)*.9),G.scale.y=1+(2-H)*0,a.add(G),G.position.y=.1+(2-H)*0}for(let H of[5.3,8.4,11.5])Be(H,1.6,.04,1.5,3.2,We),Be(H,5.7,.04,1.3,2.6,ve);for(let H of[-3.9,-2.6])Be(H,5.6,.04,1,2.6,ve);Be(-10.2,1.2,.04,1.2,2.4,We);{let H=new Ae(l(new cn(3.3,3.3,11,28)),ae);H.position.set(-9,5.5,.6),a.add(H);for(let re of[4.4,10.8]){let ee=new Ae(l(new cn(3.65,3.65,.4,28)),oe);ee.position.set(-9,re,.6),a.add(ee)}for(let re of[-.62,0,.62])Be(-9+Math.sin(re)*(3.3+.01),5.4,.6+Math.cos(re)*(3.3+.01),1.1,5.2,ve,re);Ce(-9,11,.6,3.3*1.02,3,.8,!1);let G=new Ae(l(new cn(3.3*1.02,3.3*1.05,.6,28)),oe);G.position.set(-9,11.1,.6),a.add(G)}{let H=new Ae(l(new er(2.3,13.4,2.3)),oe);H.position.set(-5.3,6.7,-.1),a.add(H);let G=new Ae(l(new Rn(1.5,11.2)),l(new It({map:nt,emissive:1454140,emissiveIntensity:.6,roughness:.3,metalness:.5})));G.position.set(-5.3,7.2,1.07),a.add(G);let re=new Ae(l(new er(2.7,.35,2.7)),Y);re.position.set(-5.3,13.5,-.1),a.add(re)}{let H=new Ae(l(new er(10,2.2,5)),ae);H.position.set(1.2,V+1.1,-2.4),a.add(H),Ce(1.2,V+2.2,-2.4,4,4.6,1,!0),Ce(-1.6,V,-.6,1.3,1.5,1.3,!0),Ce(6.4,V,-.8,1.5,1.7,1.3,!0),Ce(9.8,V,-1.2,1.2,1.4,1.2,!0),Ce(11.8,V,-4.5,1.5,1.7,1.6,!0)}{let H=new Ae(l(new er(5.2,4.2,5.2)),ae);H.position.set(15.5,4.2/2+.3,9),a.add(H);let G=new Ae(l(new er(5.2+.8,.3,5.2+.8)),oe);G.position.set(15.5,.15,9),a.add(G);let re=new Ae(l(new er(5.2+.8,.3,5.2+.8)),oe);re.position.set(15.5,4.2+.35,9),a.add(re);for(let ee of[-1.4,0,1.4])Be(15.5+ee,.9,9+5.2/2+.02,1,2.8,ee===0?We:ve);for(let ee of[-1.4,0,1.4])Be(15.5-5.2/2-.02,.9,9+ee,1,2.8,ee===0?We:ve,-Math.PI/2);Ce(15.5,4.2+.5,9,5.2*.5,2.1,0,!1)}{let H=new Sa(l(new li(.1,6,5)),l(new Fn({color:16766602,fog:!1})),150),G=new tr,re=0;for(let ee=-11.5;ee<14;ee+=.55)G.position.set(ee,V+.12,1),G.updateMatrix(),H.setMatrixAt(re++,G.matrix);for(let ee=-11.5;ee<14;ee+=.9)G.position.set(ee,4.45,1),G.updateMatrix(),H.setMatrixAt(re++,G.matrix);for(let ee=0;ee<40;ee++){let Re=ee/40*Math.PI*2;G.position.set(-9+Math.cos(Re)*3.7,4.4,.6+Math.sin(Re)*3.7),Math.sin(Re)>-.2&&(G.updateMatrix(),H.setMatrixAt(re++,G.matrix))}H.count=re,a.add(H)}{let H=new Ae(l(new Rn(40,46)),l(new It({color:1915426,roughness:.95})));H.rotation.x=-Math.PI/2,H.position.set(28,.015,24),a.add(H);let G=H.clone();G.scale.set(.5,1,1),G.position.set(-22,.015,24),a.add(G);let re=l(new It({color:2050598,roughness:.95}));for(let Qe of[-1,1]){let ke=new Ae(l(new er(1.1,1,34)),re);ke.position.set(Qe*8.4,.5,26),a.add(ke)}let ee=l((()=>{let Qe=new Rn(1,4.6,2,8),ke=Qe.attributes.position;for(let at=0;at<ke.count;at++){let _t=ke.getY(at)+2.3,E=ke.getX(at)*(1-_t/5.2);ke.setXYZ(at,E,_t,-Math.pow(_t/4.6,2)*1.6)}return Qe.computeVertexNormals(),Qe})()),Re=l(new It({color:2054700,roughness:.8,side:Bn,emissive:664592})),ze=l(new cn(.24,.36,7,8)),et=l(new It({color:9075304,roughness:.9})),Oe=l(new It({color:11545122,roughness:.8})),Je=l(new It({color:15262940,roughness:.8}));for(let[Qe,ke,at]of[[-13.5,5,1],[-6.6,11,.9],[4.2,6.5,1],[12.5,15,1.1],[-12,16,1],[19,6,.9],[14,24,1]]){let _t=new Ra;_t.position.set(Qe,0,ke),_t.scale.setScalar(at);let E=new Ae(ze,et);E.position.y=3.5,E.rotation.z=Qe%3*.03,_t.add(E);let L=new Ae(l(new cn(.38,.4,.5,8)),Oe);L.position.y=.45,_t.add(L);let z=new Ae(l(new cn(.36,.38,.5,8)),Je);z.position.y=.95,_t.add(z);for(let B=0;B<9;B++){let D=new Ae(ee,Re);D.position.y=6.9,D.rotation.set(1.15+B%3*.12,B/9*Math.PI*2+Qe,0,"YXZ"),_t.add(D)}a.add(_t)}}{let H=new Sa(l(new er(.28,.4,.4)),Y,200),G=new tr,re=0;for(let Je of[V-.35,4.25])for(let Qe=-11.6;Qe<14;Qe+=.9)G.position.set(Qe,Je,1.15),G.updateMatrix(),H.setMatrixAt(re++,G.matrix);H.count=re,a.add(H);let ee=l(new It({color:13617597,roughness:.6,metalness:.3})),Re=new Sa(l(new cn(.03,.03,1.5,5)),ee,120),ze=new Sa(l(new b_(.07,.25,4)),ee,120),et=0;for(let Je=-22;Je<=22;Je+=.5)Math.abs(Je)<3.4||(G.position.set(Je,.75,19),G.updateMatrix(),Re.setMatrixAt(et,G.matrix),G.position.y=1.62,G.updateMatrix(),ze.setMatrixAt(et++,G.matrix));Re.count=et,ze.count=et,a.add(Re),a.add(ze);let Oe=new Ae(l(new er(44,.06,.06)),ee);Oe.position.set(0,1.2,19),a.add(Oe);for(let Je of[-1,1]){let Qe=new Ae(l(new er(.9,2.4,.9)),ae);Qe.position.set(Je*3.7,1.2,19),a.add(Qe);let ke=new Ae(l(new er(1.1,.2,1.1)),oe);ke.position.set(Je*3.7,2.5,19),a.add(ke)}}let ge=new Do(16758886,420,34,2);ge.position.set(-6,4,9),a.add(ge);let R=new Do(16758886,420,34,2);R.position.set(9,4,9),a.add(R);let Ie=l(eC());{let H=new dn,G=S/2;H.moveTo(-G,C),H.quadraticCurveTo(-G,C+k*.78,0,C+k),H.quadraticCurveTo(G,C+k*.78,G,C),H.lineTo(-G,C);let re=l(new af(H,12));{let Re=re.attributes.uv,ze=re.attributes.position;for(let et=0;et<Re.count;et++)Re.setXY(et,ze.getX(et)/1.6,ze.getY(et)/1.6)}let ee=new Ae(re,l(new Fn({map:Ie,color:16760928,fog:!1})));ee.position.z=-.7,a.add(ee)}let fe=l(K3()),Ue=l(new It({map:fe,roughness:.5,metalness:.35,emissive:2753544,emissiveIntensity:.5})),se=S/2;function qe(H){let G=new Ra;G.position.set(H*S/2,0,-.9);let re=new Ae(l(new er(se,C,.3)),[d,d,d,d,Ue,Ue]);re.position.set(-H*se/2,C/2,0),G.add(re);for(let ze=0;ze<2;ze++){let et=new Ae(l(new w3(.28,.06,8,20)),m);et.position.set(-H*(se-.55),3.4+ze*0,.23),et.position.y=3.4,ze&&(et.position.z=-.23,et.rotation.y=Math.PI),G.add(et)}let ee=new Ae(l(new er(se,.25,.4)),m);ee.position.set(-H*se/2,C-.2,0),G.add(ee);let Re=ee.clone();return Re.position.y=.3,G.add(Re),a.add(G),G}let we=qe(-1),De=qe(1),A=34,M=8.5,F=8.6,Q=-Z;{let H=l(new It({map:_.clone(),roughness:.7,color:16764840}));H.map.needsUpdate=!0,H.map.repeat.set(7,3),l(H.map);for(let ke of[-1,1]){let at=new Ae(l(new Rn(A,F)),H);at.position.set(ke*M,F/2,Q-A/2),at.rotation.y=-ke*Math.PI/2,a.add(at)}let G=new Ae(l(new Rn(M*2,A)),l(new It({color:4853792,roughness:.8,emissive:2755080})));G.rotation.x=Math.PI/2,G.position.set(0,F,Q-A/2),a.add(G);let re=l(Dc([[.7,0],[.9,.3],[.55,.7],[.42,1.2],[.4,8.8],[.5,9.3],[.65,9.8],[.75,10.2]],14)),ee=l(new er(M*2,.5,.7));for(let ke=0;ke<6;ke++){let at=Q-4-ke*5;for(let D of[-1,1]){let le=new Ae(re,ke%2?g:m);le.scale.y=.78,le.position.set(D*5,0,at),a.add(le)}let _t=new Ae(ee,g);_t.position.set(0,F-.5,at),a.add(_t);let E=new Ae(l(new cn(.02,.02,2.2,4)),m);E.position.set(0,F-1.6,at),a.add(E);let L=new Ae(l(new li(.5,14,10)),T);L.position.set(0,F-3.2,at),a.add(L);let z=new ll(h(16758874,.9));z.scale.set(5,5,1),z.position.copy(L.position),a.add(z);let B=new Ae(l(new b_(.62,.5,14)),m);B.position.set(0,F-2.75,at),a.add(B)}let Re=un(5.6,5.5,3.2,new dn),ze=new Ae(l(new af(Re,10)),l(new Fn({color:16771504,fog:!1})));ze.position.set(0,0,Q-A+.05),a.add(ze);let et=new Ae(l(new Rn(M*2,F)),H);et.position.set(0,F/2,Q-A),a.add(et);let Oe=new ll(h(16770728,1));Oe.scale.set(26,26,1),Oe.position.set(0,5.2,Q-A+1),a.add(Oe),a.userData.endSun=Oe;let Je=un(6.4,5.6,3.3,new dn);Je.holes.push(un(5.6,5.5,3.2,new ba));let Qe=new Ae(l(new dl(Je,{depth:.4,bevelEnabled:!1,curveSegments:10})),m);Qe.position.set(0,0,Q-A+.1),a.add(Qe)}let ne=[],q=l(Dc([[.3,0],[.18,.4],[.1,1],[.08,3.4],[.2,3.8],[.45,4.2],[.5,4.5]],10)),He=l(new It({color:16747036,roughness:.6,emissive:5906432,emissiveIntensity:.6})),xe=l(new S3(.13,1)),Te=[];for(let H of[-1,1])for(let G=0;G<6;G++){let re=H*5.2,ee=7+G*6.5,Re=new Ae(q,m);Re.position.set(re,0,ee),a.add(Re);let ze=new Ae(l(new li(.22,10,8)),T);ze.scale.set(.8,1.5,.8),ze.position.set(re,4.85,ee),a.add(ze);let et=new ll(h(16753210,.95));et.scale.set(2.8,2.8,1),et.position.set(re,4.9,ee),a.add(et),ne.push({fl:ze,sp:et,ph:Math.random()*6}),Te.push([re,ee])}{let H=[],G=[];for(let Oe of[-1,1])for(let Je=0;Je<5;Je++){let Qe=new I(Oe*5.2,4.1,7+Je*6.5),ke=new I(Oe*5.2,4.1,7+(Je+1)*6.5),at=Qe.clone().lerp(ke,.5);at.y-=1.5,G.push(new Cy(Qe,at,ke))}let re=new Sa(xe,He,G.length*46),ee=new tr,Re=0,ze=[new st(16747036),new st(16757788),new st(16738832)];for(let Oe of G)for(let Je=0;Je<46;Je++){let Qe=Oe.getPoint(Je/45);ee.position.copy(Qe),ee.position.x+=(Math.random()-.5)*.1,ee.position.y+=(Math.random()-.5)*.12,ee.scale.setScalar(.85+Math.random()*.5),ee.rotation.set(Math.random()*3,Math.random()*3,0),ee.updateMatrix(),re.setMatrixAt(Re,ee.matrix),re.setColorAt(Re,ze[Re%3]),Re++}a.add(re);for(let Oe=0;Oe<9;Oe++){let Je=-4.2+Oe*1.05,Qe=1.2+Oe%2*1.3+Math.sin(Oe)*.3,ke=new Ae(l(new cn(.025,.025,Qe,4)),He);ke.position.set(Je,C+k-1-Qe/2+.3-Math.abs(Je)/4.2*1.5,.55),ke.visible=!1}let et=new Sa(xe,He,81);Re=0;for(let Oe=0;Oe<9;Oe++){let Je=-3.1+Oe*.775,Qe=C+.2+k*(1-Math.pow(Math.abs(Je)/(S/2),2.2))*.9-.55,ke=1.6+Oe%2*.9;for(let at=0;at<9;at++)ee.position.set(Je,Qe-at/8*ke,.7),ee.scale.setScalar(1+(at===8?.6:0)),ee.rotation.set(at,Oe,0),ee.updateMatrix(),et.setMatrixAt(Re,ee.matrix),et.setColorAt(Re,ze[(Oe+at)%3]),Re++}a.add(et)}let Ze=n?140:260,me=l(new Wn({transparent:!0,depthWrite:!1,blending:Wc,uniforms:{t:{value:0},pr:{value:i.getPixelRatio()},map:{value:p}},vertexShader:"attribute vec4 a; uniform float t; uniform float pr; varying float al; void main(){ vec3 p=position; float ph=a.w; p.y=mod(p.y+t*a.x*.6+ph*8.,14.); p.x+=sin(t*.5*a.y+ph*20.)*1.4; p.z+=cos(t*.4*a.y+ph*11.)*1.4; vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv; gl_PointSize=a.z*pr*(220./-mv.z); al=smoothstep(0.,2.,p.y)*(1.-smoothstep(10.,14.,p.y))*(.55+.45*sin(t*2.+ph*40.)); }",fragmentShader:"uniform sampler2D map; varying float al; void main(){ vec4 c=texture2D(map,gl_PointCoord); gl_FragColor=vec4(c.rgb*1.4,c.a*al); }"}));{let H=new Float32Array(Ze*3),G=new Float32Array(Ze*4);for(let Re=0;Re<Ze;Re++)H[Re*3]=(Math.random()-.5)*26,H[Re*3+1]=Math.random()*14,H[Re*3+2]=40-Math.random()*62,G[Re*4]=.5+Math.random(),G[Re*4+1]=.5+Math.random(),G[Re*4+2]=.35+Math.random()*.8,G[Re*4+3]=Math.random();let re=l(new wr);re.setAttribute("position",new Ur(H,3)),re.setAttribute("a",new Ur(G,4));let ee=new w_(re,me);ee.frustumCulled=!1,a.add(ee)}a.add(new D3(6970024,3805216,.55));let Ee=new F3(11122943,1.1);Ee.position.set(-30,40,30),a.add(Ee);let lt=new Do(16754768,900,55,2);lt.position.set(0,4.5,12),a.add(lt);let je=new Do(16754768,500,40,2);je.position.set(0,4.5,30),a.add(je);let be=new Do(16762996,0,40,2);be.position.set(0,8,-8),a.add(be);let tt=new Do(16767120,0,44,2);tt.position.set(0,7,-24),a.add(tt);let rt=new ll(h(16760928,0));rt.scale.set(16,12,1),rt.position.set(0,4.8,-.2),a.add(rt);let Et={w:1,h:1},O=()=>{let H=t.getBoundingClientRect(),G=Math.max(1,Math.round(H.width)),re=Math.max(1,Math.round(H.height));Et.w=G,Et.h=re,i.setSize(G,re,!1),o.aspect=G/re,o.updateProjectionMatrix()};O();let ce=typeof ResizeObserver<"u"?new ResizeObserver(O):null;ce&&ce.observe(t);let j={x:0,y:0,tx:0,ty:0},te=H=>{let G=t.getBoundingClientRect();j.tx=((H.clientX-G.left)/G.width-.5)*2,j.ty=((H.clientY-G.top)/G.height-.5)*2};t.addEventListener("pointermove",te);let Me=H=>{H.gamma!=null&&(j.tx=ml(H.gamma/25,-1,1),j.ty=ml(((H.beta||45)-45)/25,-1,1))};window.addEventListener("deviceorientation",Me);let ye=0,pt=!1,Ut=performance.now(),ir=-1,mt=new I,mn=()=>{let H=parseFloat(t.style.getPropertyValue("--p"));return isNaN(H)?0:H},Hr=H=>{if(pt)return;ye=requestAnimationFrame(Hr);let G=(H-Ut)/1e3,re=mn(),ee=Nr(re,.07,.36),Re=rm(rm(ml(re/1))),ze=re<.001?0:Math.pow(ml(re),1),et=40-70*(.6*Nr(ze,0,.55)*.75+0)-0,Oe=40-64*(.22*Nr(re,0,.35)+.78*Nr(re,.3,1)),Je=1-Nr(re,0,.05);j.x+=(j.tx-j.x)*.05,j.y+=(j.ty-j.y)*.05;let Qe=Math.sin(G*.5)*.25*Je;o.position.set(j.x*.9*(1-Nr(re,.55,.9))+Math.sin(G*.35)*.4*Je,1.9+Nr(re,.1,.6)*1.6+Nr(re,.6,1)*.6+Qe-j.y*.25,Oe-(1-Je)*0+Math.sin(G*.3)*.8*Je);let ke=Math.min(0,Oe-22),at=(ke+Oe-22-Math.sqrt((ke-(Oe-22))**2+16))/2*0+ke;mt.set(j.x*.8*.5,5-Nr(re,.35,1)*.6+j.y*-.3,at),o.lookAt(mt),o.rotateZ(Math.sin(G*.4)*.006*Je+Nr(re,.4,.8)*Math.sin(re*14)*.008);let _t=(o.aspect<1?66:40)+Nr(re,.55,1)*12-Nr(re,0,.3)*4;Math.abs(o.fov-_t)>.01&&(o.fov=_t,o.updateProjectionMatrix());let E=ee*1.78;we.rotation.y=E,De.rotation.y=-E;let L=.88+Math.sin(G*9.1)*.05+Math.sin(G*13.7+1)*.04;lt.intensity=900*L,je.intensity=500*(.92+Math.sin(G*7.3)*.06);let z=ee;be.intensity=30+380*z,tt.intensity=20+420*z,rt.material.opacity=.75*z*(1-Nr(re,.55,.75)),rt.scale.set(10+8*z,8+8*z,1),a.userData.endSun.material.opacity=.5+.5*z,a.userData.endSun.scale.setScalar(20+22*Nr(re,.5,1));for(let B of ne){let D=.85+Math.sin(G*8+B.ph)*.12+Math.sin(G*15+B.ph*2)*.06;B.sp.scale.setScalar(2.8*D),B.fl.scale.set(.8,1.4*D+.15,.8)}me.uniforms.t.value=G,i.toneMappingExposure=1+Nr(re,.8,1)*.6,i.render(a,o)};return ye=requestAnimationFrame(Hr),{dispose(){pt=!0,cancelAnimationFrame(ye),ce&&ce.disconnect(),t.removeEventListener("pointermove",te),window.removeEventListener("deviceorientation",Me),s.forEach(H=>H.dispose&&H.dispose()),a.traverse(H=>{H.geometry&&H.geometry.dispose()}),i.dispose()}}}function jy(){try{let e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl2")||e.getContext("webgl")))}catch{return!1}}var X=qt(hr());function tC(){let e=bl.default.useRef(null),t=bl.default.useRef(null);return bl.default.useEffect(()=>{if(!e.current||!t.current)return;let r=Xy(t.current,e.current.parentElement);return()=>r.dispose()},[]),(0,X.jsx)("div",{ref:e,className:"g3d","aria-hidden":"true",children:(0,X.jsx)("canvas",{ref:t})})}function Tl({k:e,cls:t="",children:r}){return(0,X.jsx)("div",{className:`layer ${t}`,style:{"--k":e},children:(0,X.jsx)("div",{className:"stage",children:r})})}function ed({cls:e}){return(0,X.jsxs)("svg",{className:`corner ${e}`,viewBox:"0 0 120 120","aria-hidden":"true",children:[(0,X.jsx)("path",{d:"M4 116V30C4 15 15 4 30 4h86",fill:"none",stroke:"#f4c75a",strokeWidth:"1.6"}),(0,X.jsx)("path",{d:"M14 116V36C14 24 24 14 36 14h80",fill:"none",stroke:"#f4c75a",strokeWidth:"0.7",opacity:"0.7"}),(0,X.jsxs)("g",{transform:"translate(34 34)",fill:"none",stroke:"#f4c75a",strokeWidth:"1.1",children:[Array.from({length:8},(t,r)=>(0,X.jsx)("path",{transform:`rotate(${r*45})`,d:"M0 -4Q5 -12 0 -22Q-5 -12 0 -4Z",fill:r%2?"none":"rgba(244,199,90,0.25)"},r)),(0,X.jsx)("circle",{r:"3",fill:"#f4c75a"})]})]})}function rC(){return(0,X.jsx)("svg",{className:"mandala",viewBox:"-200 -200 400 400","aria-hidden":"true",children:(0,X.jsxs)("g",{fill:"none",stroke:"#f4c75a",strokeWidth:"1",children:[[190,160,118,70].map((e,t)=>(0,X.jsx)("circle",{r:e,strokeDasharray:t===1?"2 6":void 0,opacity:.8-t*.1},e)),Array.from({length:24},(e,t)=>(0,X.jsx)("path",{transform:`rotate(${t*15})`,d:"M0 -120Q16 -150 0 -188Q-16 -150 0 -120Z"},t)),Array.from({length:12},(e,t)=>(0,X.jsx)("path",{transform:`rotate(${t*30+15})`,d:"M0 -72Q22 -96 0 -118Q-22 -96 0 -72Z"},"b"+t)),Array.from({length:8},(e,t)=>(0,X.jsx)("path",{transform:`rotate(${t*45})`,d:"M0 -20Q12 -44 0 -68Q-12 -44 0 -20Z"},"c"+t))]})})}function td(){return(0,X.jsxs)("div",{className:"rdiv","aria-hidden":"true",children:[(0,X.jsx)("span",{}),(0,X.jsxs)("svg",{viewBox:"0 0 60 20",width:"60",height:"20",children:[(0,X.jsx)("path",{d:"M2 10H20M40 10H58",stroke:"#f4c75a",strokeWidth:"1"}),(0,X.jsx)("path",{d:"M30 2l6 8-6 8-6-8z",fill:"none",stroke:"#f4c75a",strokeWidth:"1.2"}),(0,X.jsx)("circle",{cx:"30",cy:"10",r:"2",fill:"#f4c75a"})]}),(0,X.jsx)("span",{})]})}function $y(){let e=tc(6600),t=ec(),r=Fi($e.weddingDate),[n]=bl.default.useState(()=>jy()&&new URLSearchParams(window.location.search).get("flat")===null),i=e.state==="idle"?e.start:void 0,a=$e.events.map(o=>({...o,d:Fi(o.date)}));return(0,X.jsxs)("div",{className:`royal ${e.state!=="done"?"locked":""}`,style:{"--H":`${t}px`},children:[e.state!=="done"&&(0,X.jsxs)("div",{ref:e.ref,className:`gate rg is-${e.state}`,onClick:i,children:[n?(0,X.jsx)(tC,{}):(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(Tl,{k:.35,children:(0,X.jsx)(u1,{})}),(0,X.jsx)(Tl,{k:.9,children:(0,X.jsx)(c1,{})}),(0,X.jsxs)(Tl,{k:4.9,cls:"main",children:[(0,X.jsx)(d1,{}),(0,X.jsx)(p1,{}),(0,X.jsx)("div",{className:"spill",children:(0,X.jsx)(h1,{})}),(0,X.jsxs)("div",{className:"doors",children:[(0,X.jsx)("div",{className:"door dl",children:(0,X.jsx)(Mp,{side:"l"})}),(0,X.jsx)("div",{className:"door dr",children:(0,X.jsx)(Mp,{side:"r"})})]})]}),(0,X.jsx)(Tl,{k:2.8,children:(0,X.jsx)(m1,{})}),(0,X.jsx)(Tl,{k:2.3,children:(0,X.jsx)(g1,{})})]}),(0,X.jsx)("div",{className:"glow"}),(0,X.jsx)("div",{className:"vignette"}),(0,X.jsxs)("div",{className:"gate-ui",children:[(0,X.jsx)("span",{}),(0,X.jsxs)("div",{className:"gu-bottom",children:[(0,X.jsx)("p",{className:"gu-inv",children:"You are warmly invited to the wedding of"}),(0,X.jsxs)("h1",{className:"gu-names",children:[$e.bride," ",(0,X.jsx)("i",{children:"&"})," ",$e.groom]}),(0,X.jsx)("button",{className:"gu-open",onClick:o=>{o.stopPropagation(),e.start()},disabled:e.state!=="idle",children:(0,X.jsx)("span",{children:"Open the invitation"})})]})]}),(0,X.jsx)("button",{className:"gu-skip",onClick:o=>{o.stopPropagation(),e.skip()},children:"Skip intro"})]}),(0,X.jsxs)("main",{className:`rpage ${e.ready?"ready":""}`,children:[(0,X.jsx)(fa,{to:"/",className:"back",children:"All designs"}),(0,X.jsxs)("section",{className:"hero",children:[(0,X.jsx)(rC,{}),(0,X.jsx)(ed,{cls:"c1"}),(0,X.jsx)(ed,{cls:"c2"}),(0,X.jsx)(ed,{cls:"c3"}),(0,X.jsx)(ed,{cls:"c4"}),(0,X.jsx)(nc,{count:26,kind:"petal",seed:4}),(0,X.jsxs)("div",{className:"hero-in",children:[(0,X.jsx)("p",{className:"h-ganesh e1",lang:"hi",children:"\u0965 \u0936\u094D\u0930\u0940 \u0917\u0923\u0947\u0936\u093E\u092F \u0928\u092E\u0903 \u0965"}),(0,X.jsx)("p",{className:"h-kicker e2",children:"Together with their families"}),(0,X.jsxs)("h1",{className:"h-names",children:[(0,X.jsx)("span",{className:"nm e3",children:$e.bride}),(0,X.jsx)("span",{className:"amp e4",children:"&"}),(0,X.jsx)("span",{className:"nm e5",children:$e.groom})]}),(0,X.jsxs)("p",{className:"h-hi e6",lang:"hi",children:[$e.brideHi," ",(0,X.jsx)("small",{children:"weds"})," ",$e.groomHi]}),(0,X.jsxs)("p",{className:"h-fam e6",children:[$e.brideFull," \xA0\xB7\xA0 ",$e.groomFull]}),(0,X.jsx)(td,{}),(0,X.jsx)("p",{className:"h-ask e7",children:"request the honour of your presence at their wedding"}),(0,X.jsxs)("div",{className:"h-date e8","aria-label":`${r.weekday}, ${r.day} ${r.month} ${r.year}`,children:[(0,X.jsx)("span",{children:r.weekday}),(0,X.jsx)("b",{children:r.day}),(0,X.jsxs)("span",{children:[r.month," ",r.year]})]}),(0,X.jsxs)("p",{className:"h-venue e9",children:[$e.venueName,", ",$e.venueCity]})]}),(0,X.jsx)("div",{className:"scroll-cue","aria-hidden":"true",children:(0,X.jsx)("i",{})})]}),(0,X.jsxs)("section",{className:"sec",children:[(0,X.jsxs)(pr,{children:[(0,X.jsx)("p",{className:"eyebrow",children:"Every moment counts"}),(0,X.jsx)("h2",{children:"The countdown begins"}),(0,X.jsx)(td,{})]}),(0,X.jsx)(pr,{delay:120,children:(0,X.jsx)(rc,{cls:"rcd"})}),(0,X.jsx)(pr,{delay:200,children:(0,X.jsxs)("p",{className:"cd-note",children:["until the baraat arrives, ",Fi($e.weddingDate).day," ",Fi($e.weddingDate).month]})})]}),(0,X.jsxs)("section",{className:"sec",children:[(0,X.jsxs)(pr,{children:[(0,X.jsx)("p",{className:"eyebrow",children:"Two days of joy"}),(0,X.jsx)("h2",{children:"The celebrations"}),(0,X.jsx)(td,{})]}),(0,X.jsx)("ol",{className:"tl",children:a.map((o,s)=>(0,X.jsxs)(pr,{as:"li",className:"ev",delay:s*60,children:[(0,X.jsxs)("div",{className:"ev-date",children:[(0,X.jsx)("b",{children:o.d.day}),(0,X.jsx)("span",{children:o.d.monthShort})]}),(0,X.jsx)("i",{className:"ev-dot","aria-hidden":"true"}),(0,X.jsxs)("div",{className:"ev-card",children:[(0,X.jsx)("div",{className:"ev-ic",children:(0,X.jsx)(Ks,{name:o.icon})}),(0,X.jsxs)("p",{className:"ev-day",children:[o.d.weekday," \xB7 ",o.time]}),(0,X.jsxs)("h3",{children:[o.name," ",(0,X.jsx)("small",{lang:"hi",children:o.hi})]}),(0,X.jsx)("p",{className:"ev-note",children:o.note}),(0,X.jsxs)("p",{className:"ev-where",children:[o.venue,", Rourkela"]})]})]},o.id))})]}),(0,X.jsxs)("section",{className:"sec venue",children:[(0,X.jsxs)(pr,{children:[(0,X.jsx)("p",{className:"eyebrow",children:"Where to find us"}),(0,X.jsx)("h2",{children:"The venue"}),(0,X.jsx)(td,{})]}),(0,X.jsxs)(pr,{delay:100,className:"v-card",children:[(0,X.jsx)("div",{className:"ev-ic",children:(0,X.jsx)(Ks,{name:"pin"})}),(0,X.jsx)("h3",{children:$e.venueName}),(0,X.jsxs)("p",{lang:"hi",className:"v-hi",children:[$e.venueNameHi,", \u0930\u093E\u0909\u0930\u0915\u0947\u0932\u093E"]}),(0,X.jsx)("p",{children:$e.venueCity}),(0,X.jsxs)("div",{className:"btns",children:[(0,X.jsx)("a",{className:"rbtn",href:Qu(),target:"_blank",rel:"noopener noreferrer",children:"Get directions"}),(0,X.jsx)("a",{className:"rbtn ghost",href:Ku(),download:"aastha-mayank-wedding.ics",children:"Add to calendar"})]})]})]}),(0,X.jsx)("footer",{className:"rfoot",children:(0,X.jsxs)(pr,{children:[(0,X.jsx)("p",{lang:"hi",className:"h-ganesh",children:"\u0965 \u0936\u0941\u092D \u0935\u093F\u0935\u093E\u0939 \u0965"}),(0,X.jsxs)("p",{className:"f-names",children:[$e.bride," & ",$e.groom]}),(0,X.jsxs)("p",{className:"f-note",children:["With love and blessings from",(0,X.jsx)("br",{}),$e.family]}),(0,X.jsx)("p",{className:"f-sub",children:"Your presence will make our celebration complete."})]})})]})]})}var ie=qt(hr()),Er=600,mr=170,Tr=700,pn=440,Da=(e=mr,t=Tr,r=pn,n=Er)=>`M${n-e} ${t}V${r}A${e} ${e} 0 0 1 ${n+e} ${r}V${t}Z`,Zi="#b98f42",rs="#d4b068";function Oa({x:e,y:t,a:r,s:n=1,fill:i=!1}){return(0,ie.jsx)("path",{transform:`translate(${e} ${t}) rotate(${r}) scale(${n})`,d:"M0 0Q8 -9 0 -26Q-8 -9 0 0Z",fill:i?"rgba(154,168,138,.28)":"none",stroke:Zi,strokeWidth:"0.9"})}function fn({x:e,y:t,h:r,lean:n,seed:i,flip:a=1,n:o=9,cls:s=""}){let l=Tn(i),u=Array.from({length:o},(c,p)=>{let h=(p+1)/(o+1);return{x:e+n*h*h*a,y:t-r*h,t:h}});return(0,ie.jsxs)("g",{className:s,children:[(0,ie.jsx)("path",{d:`M${e} ${t}Q${e+n*.15*a} ${t-r*.55} ${e+n*a} ${t-r}`,fill:"none",stroke:Zi,strokeWidth:"1"}),u.map((c,p)=>{let h=(1.15-c.t*.5)*(.85+l()*.3);return(0,ie.jsxs)("g",{children:[(0,ie.jsx)(Oa,{x:c.x,y:c.y,a:-52+l()*10+n*.1,s:h,fill:p%2===0}),(0,ie.jsx)(Oa,{x:c.x,y:c.y,a:52+l()*10+n*.1,s:h,fill:p%2===1})]},p)}),(0,ie.jsx)(Oa,{x:e+n*a,y:t-r,a:n*.15*a,s:1.1,fill:!0})]})}function Yy({n:e,seed:t}){let r=Tn(t);return(0,ie.jsx)(ie.Fragment,{children:Array.from({length:e},(n,i)=>(0,ie.jsx)("circle",{className:"idust",cx:-300+r()*2100,cy:-100+r()*1e3,r:.8+r()*2.2,fill:rs,style:{animationDelay:`${r()*8}s`,animationDuration:`${6+r()*8}s`}},i))})}function qy(){return(0,ie.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,ie.jsxs)("defs",{children:[(0,ie.jsxs)("linearGradient",{id:"iSky",gradientUnits:"userSpaceOnUse",x1:"0",y1:"0",x2:"0",y2:"760",children:[(0,ie.jsx)("stop",{offset:"0",stopColor:"#f3e3d3"}),(0,ie.jsx)("stop",{offset:"0.45",stopColor:"#f8d9c0"}),(0,ie.jsx)("stop",{offset:"0.8",stopColor:"#fbe7c8"}),(0,ie.jsx)("stop",{offset:"1",stopColor:"#fdf3dc"})]}),(0,ie.jsxs)("radialGradient",{id:"iSun",children:[(0,ie.jsx)("stop",{offset:"0",stopColor:"#fffbe8",stopOpacity:"1"}),(0,ie.jsx)("stop",{offset:"0.35",stopColor:"#ffe9bd",stopOpacity:"0.85"}),(0,ie.jsx)("stop",{offset:"1",stopColor:"#ffe1b0",stopOpacity:"0"})]})]}),(0,ie.jsx)("rect",{x:"-2000",y:"-2000",width:"5200",height:"5000",fill:"url(#iSky)"}),(0,ie.jsx)("circle",{cx:"600",cy:"520",r:"360",fill:"url(#iSun)"}),(0,ie.jsx)("circle",{cx:"600",cy:"520",r:"46",fill:"#fffaf0",opacity:"0.95"}),[0,1,2].map(e=>(0,ie.jsx)("path",{d:`M-1500 ${560+e*55}C-900 ${500+e*50} -300 ${600+e*30} 250 ${545+e*52}S900 ${500+e*50} 1700 ${580+e*40}V1300H-1500Z`,fill:["#e7c9a4","#d9bf9a","#c9b48f"][e],opacity:.5+e*.12},e)),(0,ie.jsx)("g",{stroke:Zi,strokeWidth:"1",fill:"none",opacity:"0.55",children:[420,470,740,790].map((e,t)=>(0,ie.jsxs)("g",{children:[(0,ie.jsx)("path",{d:`M${e} 720V${620-t%2*20}`}),(0,ie.jsx)("path",{d:`M${e} ${660-t%2*14}q-12 -12 -22 -34M${e} ${676-t%2*14}q12 -12 22 -34M${e} ${640-t%2*14}q-9 -9 -16 -26M${e} ${650-t%2*14}q9 -9 16 -26`})]},e))}),(0,ie.jsxs)("g",{className:"birds",fill:"none",stroke:"#a88548",strokeWidth:"1.4",strokeLinecap:"round",children:[(0,ie.jsx)("path",{d:"M520 380q10 -10 20 0q10 -10 20 0"}),(0,ie.jsx)("path",{d:"M690 330q8 -8 16 0q8 -8 16 0"}),(0,ie.jsx)("path",{d:"M640 410q7 -7 14 0q7 -7 14 0"})]}),(0,ie.jsx)(Yy,{n:60,seed:9})]})}function Zy(){let e=Tn(2),t=[];for(let r=0;r<9;r++){let n=Tr-30-r*32;t.push((0,ie.jsxs)("g",{children:[(0,ie.jsx)(Oa,{x:Er-mr-24,y:n,a:-38+e()*20,s:1,fill:r%2===0}),(0,ie.jsx)(Oa,{x:Er-mr-24,y:n-10,a:40+e()*16,s:.9,fill:r%2===1})]},"l"+r))}for(let r=0;r<12;r++){let n=Math.PI*(.55+r*.045),i=Er+Math.cos(n)*(mr+24),a=pn-Math.sin(n)*(mr+24);t.push((0,ie.jsxs)("g",{children:[(0,ie.jsx)(Oa,{x:i,y:a,a:n*180/Math.PI-120+e()*14,s:.95,fill:r%2===0}),(0,ie.jsx)(Oa,{x:i,y:a,a:n*180/Math.PI-40+e()*14,s:.85,fill:r%2===1})]},"t"+r))}return(0,ie.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,ie.jsxs)("defs",{children:[(0,ie.jsxs)("mask",{id:"iHole",maskUnits:"userSpaceOnUse",x:"-2500",y:"-2000",width:"6200",height:"5000",children:[(0,ie.jsx)("rect",{x:"-2500",y:"-2000",width:"6200",height:"5000",fill:"#fff"}),(0,ie.jsx)("path",{d:Da(),fill:"#000"})]}),(0,ie.jsxs)("linearGradient",{id:"iWall",gradientUnits:"userSpaceOnUse",x1:"0",y1:"0",x2:"0",y2:"900",children:[(0,ie.jsx)("stop",{offset:"0",stopColor:"#f6efe1"}),(0,ie.jsx)("stop",{offset:"1",stopColor:"#efe4cf"})]}),(0,ie.jsxs)("radialGradient",{id:"iShade",gradientUnits:"userSpaceOnUse",cx:"600",cy:"520",r:"520",children:[(0,ie.jsx)("stop",{offset:"0.5",stopColor:"#c9a86a",stopOpacity:"0"}),(0,ie.jsx)("stop",{offset:"1",stopColor:"#c9a86a",stopOpacity:"0.18"})]}),(0,ie.jsx)("clipPath",{id:"iHalfl",children:(0,ie.jsx)("rect",{x:"400",y:"200",width:"200",height:"600"})}),(0,ie.jsx)("clipPath",{id:"iHalfr",children:(0,ie.jsx)("rect",{x:"600",y:"200",width:"200",height:"600"})}),(0,ie.jsx)("clipPath",{id:"iClip",children:(0,ie.jsx)("path",{d:Da()})}),(0,ie.jsxs)("linearGradient",{id:"iPanel",x1:"0",y1:"0",x2:"1",y2:"0",children:[(0,ie.jsx)("stop",{offset:"0",stopColor:"#f8f2e6"}),(0,ie.jsx)("stop",{offset:"1",stopColor:"#f1e7d2"})]}),(0,ie.jsxs)("linearGradient",{id:"iEdgel",x1:"0",y1:"0",x2:"1",y2:"0",children:[(0,ie.jsx)("stop",{offset:"0",stopColor:"#8a6a2a",stopOpacity:"0"}),(0,ie.jsx)("stop",{offset:"1",stopColor:"#8a6a2a",stopOpacity:"0.14"})]}),(0,ie.jsxs)("linearGradient",{id:"iEdger",x1:"0",y1:"0",x2:"1",y2:"0",children:[(0,ie.jsx)("stop",{offset:"0",stopColor:"#8a6a2a",stopOpacity:"0.14"}),(0,ie.jsx)("stop",{offset:"1",stopColor:"#8a6a2a",stopOpacity:"0"})]})]}),(0,ie.jsxs)("g",{mask:"url(#iHole)",children:[(0,ie.jsx)("rect",{x:"-2500",y:"-2000",width:"6200",height:"5000",fill:"url(#iWall)"}),(0,ie.jsx)("rect",{x:"-2500",y:"-2000",width:"6200",height:"5000",fill:"url(#iShade)"}),(0,ie.jsx)("rect",{x:"-2500",y:Tr,width:"6200",height:"1400",fill:"#e9dcc2"})]}),(0,ie.jsx)("path",{d:Da(mr+14,Tr,pn),fill:"none",stroke:Zi,strokeWidth:"1.6"}),(0,ie.jsx)("path",{d:Da(mr+24,Tr,pn),fill:"none",stroke:rs,strokeWidth:"0.8"}),(0,ie.jsx)("path",{d:Da(mr+36,Tr,pn),fill:"none",stroke:rs,strokeWidth:"0.5",opacity:"0.7"}),t,(0,ie.jsx)("rect",{x:"-2500",y:Tr,width:"6200",height:"1.5",fill:Zi,opacity:"0.8"}),(0,ie.jsx)("rect",{x:"-2500",y:Tr+16,width:"6200",height:"0.8",fill:rs,opacity:"0.6"}),(0,ie.jsx)("g",{clipPath:"url(#iClip)",children:["l","r"].map(r=>{let n=r==="l"?-1:1;return(0,ie.jsxs)("g",{className:`ipanel ip-${r}`,clipPath:`url(#iHalf${r})`,children:[(0,ie.jsx)("rect",{x:r==="l"?Er-mr-4:Er,y:pn-mr-4,width:mr+4,height:Tr-pn+mr+4,fill:"url(#iPanel)"}),(0,ie.jsx)("rect",{x:r==="l"?Er-30:Er,y:pn-mr,width:"30",height:Tr-pn+mr,fill:`url(#iEdge${r})`}),(0,ie.jsx)("path",{d:Da(mr-12,Tr-12,pn),fill:"none",stroke:Zi,strokeWidth:"0.9"}),(0,ie.jsx)("path",{d:Da(mr-20,Tr-20,pn),fill:"none",stroke:rs,strokeWidth:"0.5"}),(0,ie.jsx)(fn,{x:Er+n*98,y:Tr-14,h:250,lean:n*18,seed:r==="l"?31:32,flip:1}),(0,ie.jsx)(fn,{x:Er+n*60,y:Tr-14,h:150,lean:n*-10,seed:r==="l"?33:34,flip:1,n:6}),(0,ie.jsx)(fn,{x:Er+n*130,y:Tr-14,h:110,lean:n*8,seed:r==="l"?35:36,flip:1,n:5}),(0,ie.jsx)("line",{x1:Er,y1:pn-mr,x2:Er,y2:Tr,stroke:Zi,strokeWidth:"1"}),(0,ie.jsxs)("g",{clipPath:`url(#iHalf${r})`,children:[(0,ie.jsx)("circle",{cx:Er,cy:"500",r:"64",fill:"#f8f2e6",stroke:Zi,strokeWidth:"1.2"}),(0,ie.jsx)("circle",{cx:Er,cy:"500",r:"57",fill:"none",stroke:rs,strokeWidth:"0.6"}),(0,ie.jsx)("text",{x:Er,y:"513",textAnchor:"middle",fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:"42",fill:"#7a5a22",children:"A&M"})]})]},r)})})]})}function Jy(){return(0,ie.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,ie.jsx)(fn,{x:330,y:920,h:340,lean:-40,seed:71,n:11,cls:"isway"}),(0,ie.jsx)(fn,{x:270,y:930,h:260,lean:30,seed:72,n:9,cls:"isway b"}),(0,ie.jsx)(fn,{x:880,y:920,h:300,lean:44,seed:73,n:10,cls:"isway c"}),(0,ie.jsx)(fn,{x:940,y:930,h:210,lean:-24,seed:74,n:8,cls:"isway"}),(0,ie.jsx)("g",{transform:"translate(600 -40) rotate(180)",children:(0,ie.jsxs)("g",{transform:"translate(-600 -0)",children:[(0,ie.jsx)(fn,{x:420,y:0,h:170,lean:30,seed:75,n:7,cls:"isway b"}),(0,ie.jsx)(fn,{x:780,y:0,h:140,lean:-30,seed:76,n:6,cls:"isway c"})]})}),(0,ie.jsx)(Yy,{n:34,seed:12})]})}var ue=qt(hr());function vm({k:e,children:t}){return(0,ue.jsx)("div",{className:"layer",style:{"--k":e},children:(0,ue.jsx)("div",{className:"stage",children:t})})}function nC(){return(0,ue.jsxs)("svg",{className:"hills",viewBox:"0 0 400 160",preserveAspectRatio:"none","aria-hidden":"true",children:[(0,ue.jsx)("path",{d:"M0 110C60 80 120 100 200 84S340 70 400 96V160H0Z",fill:"#e9cfa9",opacity:".7"}),(0,ue.jsx)("path",{d:"M0 130C80 106 150 124 220 108S350 100 400 120V160H0Z",fill:"#dcc096",opacity:".85"}),(0,ue.jsx)("path",{d:"M0 148C90 130 160 144 240 134S360 130 400 142V160H0Z",fill:"#cdb48b"})]})}function Qy(){let e=tc(6600),t=ec(),r=Fi($e.weddingDate),n=$e.events.map(i=>({...i,d:Fi(i.date)}));return(0,ue.jsxs)("div",{className:`ivory ${e.state!=="done"?"locked":""}`,style:{"--H":`${t}px`},children:[e.state!=="done"&&(0,ue.jsxs)("div",{ref:e.ref,className:`gate ig is-${e.state}`,onClick:e.state==="idle"?e.start:void 0,children:[(0,ue.jsx)(vm,{k:.9,children:(0,ue.jsx)(qy,{})}),(0,ue.jsx)(vm,{k:4.4,children:(0,ue.jsx)(Zy,{})}),(0,ue.jsx)(vm,{k:2.6,children:(0,ue.jsx)(Jy,{})}),(0,ue.jsx)("div",{className:"glow"}),(0,ue.jsxs)("div",{className:"gate-ui",children:[(0,ue.jsx)("span",{}),(0,ue.jsxs)("div",{className:"gu-bottom",children:[(0,ue.jsx)("p",{className:"gu-inv",children:"The wedding of"}),(0,ue.jsxs)("h1",{className:"gu-names",children:[$e.bride," ",(0,ue.jsx)("i",{children:"&"})," ",$e.groom]}),(0,ue.jsxs)("p",{className:"gu-date",children:[r.day," ",r.month," ",r.year," \xB7 ",$e.venueCity.split(",")[0]]}),(0,ue.jsx)("button",{className:"gu-open",onClick:i=>{i.stopPropagation(),e.start()},disabled:e.state!=="idle",children:(0,ue.jsx)("span",{children:"Open"})})]})]}),(0,ue.jsx)("button",{className:"gu-skip",onClick:i=>{i.stopPropagation(),e.skip()},children:"Skip intro"})]}),(0,ue.jsxs)("main",{className:`ipage ${e.ready?"ready":""}`,children:[(0,ue.jsx)(fa,{to:"/",className:"iback",children:"All designs"}),(0,ue.jsxs)("section",{className:"ivhero",children:[(0,ue.jsx)(nc,{count:22,kind:"dust",seed:8}),(0,ue.jsx)("div",{className:"i-arch",children:(0,ue.jsxs)("div",{className:"i-arch-in",children:[(0,ue.jsx)("p",{className:"i-kick e1",children:"Together with their families"}),(0,ue.jsxs)("h1",{className:"i-names",children:[(0,ue.jsx)("span",{className:"e2",children:$e.bride}),(0,ue.jsx)("em",{className:"e3",children:"&"}),(0,ue.jsx)("span",{className:"e4",children:$e.groom})]}),(0,ue.jsxs)("p",{className:"i-hi e5",lang:"hi",children:[$e.brideHi," \xA0\xB7\xA0 ",$e.groomHi]}),(0,ue.jsx)(nC,{})]})}),(0,ue.jsxs)("div",{className:"i-meta",children:[(0,ue.jsx)("p",{className:"i-ask e6",children:"invite you to celebrate their wedding"}),(0,ue.jsxs)("p",{className:"i-date e7",children:[(0,ue.jsx)("span",{children:r.day}),(0,ue.jsx)("i",{}),(0,ue.jsx)("span",{children:$e.weddingDate.slice(5,7)}),(0,ue.jsx)("i",{}),(0,ue.jsx)("span",{children:r.year})]}),(0,ue.jsx)("p",{className:"i-wd e7",children:r.weekday}),(0,ue.jsxs)("p",{className:"i-venue e8",children:[$e.venueName," \xB7 ",$e.venueCity]})]}),(0,ue.jsx)("div",{className:"i-scroll","aria-hidden":"true",children:(0,ue.jsx)("i",{})})]}),(0,ue.jsxs)("section",{className:"isec",children:[(0,ue.jsxs)(pr,{children:[(0,ue.jsx)("p",{className:"i-eyebrow",children:"Until we celebrate"}),(0,ue.jsx)("h2",{children:"Counting down"})]}),(0,ue.jsx)(pr,{delay:100,children:(0,ue.jsx)(rc,{cls:"icd"})})]}),(0,ue.jsxs)("section",{className:"isec",children:[(0,ue.jsxs)(pr,{children:[(0,ue.jsx)("p",{className:"i-eyebrow",children:"Two days of joy"}),(0,ue.jsx)("h2",{children:"The celebrations"})]}),(0,ue.jsx)("ol",{className:"iev-list",children:n.map((i,a)=>(0,ue.jsxs)(pr,{as:"li",className:"iev",delay:a*60,children:[(0,ue.jsxs)("div",{className:"iev-date",children:[(0,ue.jsx)("b",{children:i.d.day}),(0,ue.jsx)("span",{children:i.d.monthShort})]}),(0,ue.jsxs)("div",{className:"iev-body",children:[(0,ue.jsxs)("p",{className:"iev-when",children:[i.d.weekday," \xB7 ",i.time]}),(0,ue.jsxs)("h3",{children:[i.name," ",(0,ue.jsx)("small",{lang:"hi",children:i.hi})]}),(0,ue.jsx)("p",{className:"iev-note",children:i.note}),(0,ue.jsxs)("p",{className:"iev-note",style:{fontStyle:"italic"},children:[i.venue,", Rourkela"]})]}),(0,ue.jsx)("div",{className:"iev-ic",children:(0,ue.jsx)(Ks,{name:i.icon})})]},i.id))})]}),(0,ue.jsxs)("section",{className:"isec ivenue",children:[(0,ue.jsxs)(pr,{children:[(0,ue.jsx)("p",{className:"i-eyebrow",children:"The venue"}),(0,ue.jsx)("h2",{children:$e.venueName})]}),(0,ue.jsxs)(pr,{delay:100,children:[(0,ue.jsxs)("p",{className:"ivn-hi",lang:"hi",children:[$e.venueNameHi,", \u0930\u093E\u0909\u0930\u0915\u0947\u0932\u093E"]}),(0,ue.jsx)("p",{className:"ivn-city",children:$e.venueCity}),(0,ue.jsxs)("div",{className:"ibtns",children:[(0,ue.jsx)("a",{className:"ibtn",href:Qu(),target:"_blank",rel:"noopener noreferrer",children:"Get directions"}),(0,ue.jsx)("a",{className:"ibtn ghost",href:Ku(),download:"aastha-mayank-wedding.ics",children:"Add to calendar"})]})]})]}),(0,ue.jsx)("footer",{className:"ifoot",children:(0,ue.jsxs)(pr,{children:[(0,ue.jsxs)("svg",{viewBox:"0 0 120 70",width:"120",height:"70","aria-hidden":"true",children:[(0,ue.jsx)(fn,{x:60,y:68,h:60,lean:-14,seed:91,n:5}),(0,ue.jsx)(fn,{x:60,y:68,h:46,lean:16,seed:92,n:4})]}),(0,ue.jsxs)("p",{className:"if-names",children:[$e.bride," ",(0,ue.jsx)("i",{children:"&"})," ",$e.groom]}),(0,ue.jsxs)("p",{className:"if-note",children:["With love, ",$e.family]}),(0,ue.jsx)("p",{className:"if-sub",children:"We can't wait to celebrate with you."})]})})]})]})}var zt=qt(hr());function iC(){return(0,zt.jsxs)("div",{className:"chooser",children:[(0,zt.jsx)("p",{className:"ch-eyebrow",children:"Wedding invitation \xB7 demo"}),(0,zt.jsxs)("h1",{children:["Aastha ",(0,zt.jsx)("i",{children:"&"})," Mayank"]}),(0,zt.jsx)("p",{className:"ch-sub",children:"Sunday, 22 November 2026 \xB7 Rourkela"}),(0,zt.jsxs)("div",{className:"ch-grid",children:[(0,zt.jsxs)(fa,{to:"/royal",className:"ch-card ch-royal",children:[(0,zt.jsx)("span",{className:"ch-tag",children:"Design one"}),(0,zt.jsx)("b",{children:"Royal"}),(0,zt.jsx)("span",{children:"Gold and maroon. A palace gate opens into the celebration."})]}),(0,zt.jsxs)(fa,{to:"/ivory",className:"ch-card ch-ivory",children:[(0,zt.jsx)("span",{className:"ch-tag",children:"Design two"}),(0,zt.jsx)("b",{children:"Ivory"}),(0,zt.jsx)("span",{children:"Quiet, airy and minimal. Gold line work on warm ivory."})]})]}),(0,zt.jsx)("p",{className:"ch-foot",children:"Tap a design to see the full entrance."})]})}function Ky(){return(0,zt.jsxs)(n1,{children:[(0,zt.jsx)(Ju,{path:"/",element:(0,zt.jsx)(iC,{})}),(0,zt.jsx)(Ju,{path:"/royal",element:(0,zt.jsx)($y,{})}),(0,zt.jsx)(Ju,{path:"/ivory",element:(0,zt.jsx)(Qy,{})})]})}var rx=qt(hr()),ex=new URLSearchParams(location.search).get("vh");if(ex){let e=document.createElement("style");e.textContent=`.hero,.ivhero{min-height:${ex}px!important}`,document.head.appendChild(e)}(0,tx.createRoot)(document.getElementById("root")).render((0,rx.jsx)(Ky,{}));})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
