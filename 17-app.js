(()=>{var ix=Object.create;var _m=Object.defineProperty;var ax=Object.getOwnPropertyDescriptor;var ox=Object.getOwnPropertyNames;var sx=Object.getPrototypeOf,lx=Object.prototype.hasOwnProperty;var On=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(r){throw t=0,r}};var ux=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of ox(t))!lx.call(e,i)&&i!==r&&_m(e,i,{get:()=>t[i],enumerable:!(n=ax(t,i))||n.enumerable});return e};var Ht=(e,t,r)=>(r=e!=null?ix(sx(e)):{},ux(t||!e||!e.__esModule?_m(r,"default",{value:e,enumerable:!0}):r,e));var Pm=On(ot=>{"use strict";var rs=Symbol.for("react.element"),cx=Symbol.for("react.portal"),hx=Symbol.for("react.fragment"),dx=Symbol.for("react.strict_mode"),px=Symbol.for("react.profiler"),fx=Symbol.for("react.provider"),mx=Symbol.for("react.context"),gx=Symbol.for("react.forward_ref"),vx=Symbol.for("react.suspense"),_x=Symbol.for("react.memo"),yx=Symbol.for("react.lazy"),ym=Symbol.iterator;function xx(e){return e===null||typeof e!="object"?null:(e=ym&&e[ym]||e["@@iterator"],typeof e=="function"?e:null)}var Mm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wm=Object.assign,Em={};function La(e,t,r){this.props=e,this.context=t,this.refs=Em,this.updater=r||Mm}La.prototype.isReactComponent={};La.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};La.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tm(){}Tm.prototype=La.prototype;function eh(e,t,r){this.props=e,this.context=t,this.refs=Em,this.updater=r||Mm}var th=eh.prototype=new Tm;th.constructor=eh;wm(th,La.prototype);th.isPureReactComponent=!0;var xm=Array.isArray,bm=Object.prototype.hasOwnProperty,rh={current:null},Am={key:!0,ref:!0,__self:!0,__source:!0};function Cm(e,t,r){var n,i={},a=null,o=null;if(t!=null)for(n in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)bm.call(t,n)&&!Am.hasOwnProperty(n)&&(i[n]=t[n]);var s=arguments.length-2;if(s===1)i.children=r;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)i[n]===void 0&&(i[n]=s[n]);return{$$typeof:rs,type:e,key:a,ref:o,props:i,_owner:rh.current}}function Sx(e,t){return{$$typeof:rs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function nh(e){return typeof e=="object"&&e!==null&&e.$$typeof===rs}function Mx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Sm=/\/+/g;function Kc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Mx(""+e.key):t.toString(36)}function Tl(e,t,r,n,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case rs:case cx:o=!0}}if(o)return o=e,i=i(o),e=n===""?"."+Kc(o,0):n,xm(i)?(r="",e!=null&&(r=e.replace(Sm,"$&/")+"/"),Tl(i,t,r,"",function(u){return u})):i!=null&&(nh(i)&&(i=Sx(i,r+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sm,"$&/")+"/")+e)),t.push(i)),1;if(o=0,n=n===""?".":n+":",xm(e))for(var s=0;s<e.length;s++){a=e[s];var l=n+Kc(a,s);o+=Tl(a,t,r,l,i)}else if(l=xx(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=n+Kc(a,s++),o+=Tl(a,t,r,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function El(e,t,r){if(e==null)return e;var n=[],i=0;return Tl(e,n,"","",function(a){return t.call(r,a,i++)}),n}function wx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _r={current:null},bl={transition:null},Ex={ReactCurrentDispatcher:_r,ReactCurrentBatchConfig:bl,ReactCurrentOwner:rh};function Rm(){throw Error("act(...) is not supported in production builds of React.")}ot.Children={map:El,forEach:function(e,t,r){El(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return El(e,function(){t++}),t},toArray:function(e){return El(e,function(t){return t})||[]},only:function(e){if(!nh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ot.Component=La;ot.Fragment=hx;ot.Profiler=px;ot.PureComponent=eh;ot.StrictMode=dx;ot.Suspense=vx;ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ex;ot.act=Rm;ot.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=wm({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=rh.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)bm.call(t,l)&&!Am.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];n.children=s}return{$$typeof:rs,type:e.type,key:i,ref:a,props:n,_owner:o}};ot.createContext=function(e){return e={$$typeof:mx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fx,_context:e},e.Consumer=e};ot.createElement=Cm;ot.createFactory=function(e){var t=Cm.bind(null,e);return t.type=e,t};ot.createRef=function(){return{current:null}};ot.forwardRef=function(e){return{$$typeof:gx,render:e}};ot.isValidElement=nh;ot.lazy=function(e){return{$$typeof:yx,_payload:{_status:-1,_result:e},_init:wx}};ot.memo=function(e,t){return{$$typeof:_x,type:e,compare:t===void 0?null:t}};ot.startTransition=function(e){var t=bl.transition;bl.transition={};try{e()}finally{bl.transition=t}};ot.unstable_act=Rm;ot.useCallback=function(e,t){return _r.current.useCallback(e,t)};ot.useContext=function(e){return _r.current.useContext(e)};ot.useDebugValue=function(){};ot.useDeferredValue=function(e){return _r.current.useDeferredValue(e)};ot.useEffect=function(e,t){return _r.current.useEffect(e,t)};ot.useId=function(){return _r.current.useId()};ot.useImperativeHandle=function(e,t,r){return _r.current.useImperativeHandle(e,t,r)};ot.useInsertionEffect=function(e,t){return _r.current.useInsertionEffect(e,t)};ot.useLayoutEffect=function(e,t){return _r.current.useLayoutEffect(e,t)};ot.useMemo=function(e,t){return _r.current.useMemo(e,t)};ot.useReducer=function(e,t,r){return _r.current.useReducer(e,t,r)};ot.useRef=function(e){return _r.current.useRef(e)};ot.useState=function(e){return _r.current.useState(e)};ot.useSyncExternalStore=function(e,t,r){return _r.current.useSyncExternalStore(e,t,r)};ot.useTransition=function(){return _r.current.useTransition()};ot.version="18.3.1"});var Na=On((l3,Lm)=>{"use strict";Lm.exports=Pm()});var Vm=On(vt=>{"use strict";function sh(e,t){var r=e.length;e.push(t);e:for(;0<r;){var n=r-1>>>1,i=e[n];if(0<Al(i,t))e[n]=t,e[r]=i,r=n;else break e}}function an(e){return e.length===0?null:e[0]}function Rl(e){if(e.length===0)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,i=e.length,a=i>>>1;n<a;){var o=2*(n+1)-1,s=e[o],l=o+1,u=e[l];if(0>Al(s,r))l<i&&0>Al(u,s)?(e[n]=u,e[l]=r,n=l):(e[n]=s,e[o]=r,n=o);else if(l<i&&0>Al(u,r))e[n]=u,e[l]=r,n=l;else break e}}return t}function Al(e,t){var r=e.sortIndex-t.sortIndex;return r!==0?r:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Nm=performance,vt.unstable_now=function(){return Nm.now()}):(ih=Date,Im=ih.now(),vt.unstable_now=function(){return ih.now()-Im});var Nm,ih,Im,Tn=[],ui=[],Tx=1,Xr=null,sr=3,Pl=!1,Yi=!1,is=!1,km=typeof setTimeout=="function"?setTimeout:null,Om=typeof clearTimeout=="function"?clearTimeout:null,Dm=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function lh(e){for(var t=an(ui);t!==null;){if(t.callback===null)Rl(ui);else if(t.startTime<=e)Rl(ui),t.sortIndex=t.expirationTime,sh(Tn,t);else break;t=an(ui)}}function uh(e){if(is=!1,lh(e),!Yi)if(an(Tn)!==null)Yi=!0,hh(ch);else{var t=an(ui);t!==null&&dh(uh,t.startTime-e)}}function ch(e,t){Yi=!1,is&&(is=!1,Om(as),as=-1),Pl=!0;var r=sr;try{for(lh(t),Xr=an(Tn);Xr!==null&&(!(Xr.expirationTime>t)||e&&!Bm());){var n=Xr.callback;if(typeof n=="function"){Xr.callback=null,sr=Xr.priorityLevel;var i=n(Xr.expirationTime<=t);t=vt.unstable_now(),typeof i=="function"?Xr.callback=i:Xr===an(Tn)&&Rl(Tn),lh(t)}else Rl(Tn);Xr=an(Tn)}if(Xr!==null)var a=!0;else{var o=an(ui);o!==null&&dh(uh,o.startTime-t),a=!1}return a}finally{Xr=null,sr=r,Pl=!1}}var Ll=!1,Cl=null,as=-1,Fm=5,zm=-1;function Bm(){return!(vt.unstable_now()-zm<Fm)}function ah(){if(Cl!==null){var e=vt.unstable_now();zm=e;var t=!0;try{t=Cl(!0,e)}finally{t?ns():(Ll=!1,Cl=null)}}else Ll=!1}var ns;typeof Dm=="function"?ns=function(){Dm(ah)}:typeof MessageChannel<"u"?(oh=new MessageChannel,Um=oh.port2,oh.port1.onmessage=ah,ns=function(){Um.postMessage(null)}):ns=function(){km(ah,0)};var oh,Um;function hh(e){Cl=e,Ll||(Ll=!0,ns())}function dh(e,t){as=km(function(){e(vt.unstable_now())},t)}vt.unstable_IdlePriority=5;vt.unstable_ImmediatePriority=1;vt.unstable_LowPriority=4;vt.unstable_NormalPriority=3;vt.unstable_Profiling=null;vt.unstable_UserBlockingPriority=2;vt.unstable_cancelCallback=function(e){e.callback=null};vt.unstable_continueExecution=function(){Yi||Pl||(Yi=!0,hh(ch))};vt.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Fm=0<e?Math.floor(1e3/e):5};vt.unstable_getCurrentPriorityLevel=function(){return sr};vt.unstable_getFirstCallbackNode=function(){return an(Tn)};vt.unstable_next=function(e){switch(sr){case 1:case 2:case 3:var t=3;break;default:t=sr}var r=sr;sr=t;try{return e()}finally{sr=r}};vt.unstable_pauseExecution=function(){};vt.unstable_requestPaint=function(){};vt.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=sr;sr=e;try{return t()}finally{sr=r}};vt.unstable_scheduleCallback=function(e,t,r){var n=vt.unstable_now();switch(typeof r=="object"&&r!==null?(r=r.delay,r=typeof r=="number"&&0<r?n+r:n):r=n,e){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=r+i,e={id:Tx++,callback:t,priorityLevel:e,startTime:r,expirationTime:i,sortIndex:-1},r>n?(e.sortIndex=r,sh(ui,e),an(Tn)===null&&e===an(ui)&&(is?(Om(as),as=-1):is=!0,dh(uh,r-n))):(e.sortIndex=i,sh(Tn,e),Yi||Pl||(Yi=!0,hh(ch))),e};vt.unstable_shouldYield=Bm;vt.unstable_wrapCallback=function(e){var t=sr;return function(){var r=sr;sr=t;try{return e.apply(this,arguments)}finally{sr=r}}}});var Gm=On((c3,Hm)=>{"use strict";Hm.exports=Vm()});var $v=On(zr=>{"use strict";var bx=Na(),Or=Gm();function le(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zg=new Set,As={};function sa(e,t){Ka(e,t),Ka(e+"Capture",t)}function Ka(e,t){for(As[e]=t,e=0;e<t.length;e++)Zg.add(t[e])}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uh=Object.prototype.hasOwnProperty,Ax=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wm={},Xm={};function Cx(e){return Uh.call(Xm,e)?!0:Uh.call(Wm,e)?!1:Ax.test(e)?Xm[e]=!0:(Wm[e]=!0,!1)}function Rx(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Px(e,t,r,n){if(t===null||typeof t>"u"||Rx(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Sr(e,t,r,n,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var tr={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){tr[e]=new Sr(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];tr[t]=new Sr(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){tr[e]=new Sr(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){tr[e]=new Sr(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){tr[e]=new Sr(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){tr[e]=new Sr(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){tr[e]=new Sr(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){tr[e]=new Sr(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){tr[e]=new Sr(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ad=/[\-:]([a-z])/g;function Cd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ad,Cd);tr[t]=new Sr(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ad,Cd);tr[t]=new Sr(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ad,Cd);tr[t]=new Sr(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){tr[e]=new Sr(e,1,!1,e.toLowerCase(),null,!1,!1)});tr.xlinkHref=new Sr("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){tr[e]=new Sr(e,1,!1,e.toLowerCase(),null,!0,!0)});function Rd(e,t,r,n){var i=tr.hasOwnProperty(t)?tr[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Px(t,r,i,n)&&(r=null),n||i===null?Cx(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var $n=bx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Nl=Symbol.for("react.element"),Ua=Symbol.for("react.portal"),ka=Symbol.for("react.fragment"),Pd=Symbol.for("react.strict_mode"),kh=Symbol.for("react.profiler"),Jg=Symbol.for("react.provider"),Qg=Symbol.for("react.context"),Ld=Symbol.for("react.forward_ref"),Oh=Symbol.for("react.suspense"),Fh=Symbol.for("react.suspense_list"),Nd=Symbol.for("react.memo"),hi=Symbol.for("react.lazy"),Kg=Symbol.for("react.offscreen"),jm=Symbol.iterator;function os(e){return e===null||typeof e!="object"?null:(e=jm&&e[jm]||e["@@iterator"],typeof e=="function"?e:null)}var Ut=Object.assign,ph;function fs(e){if(ph===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);ph=t&&t[1]||""}return`
`+ph+e}var fh=!1;function mh(e,t){if(!e||fh)return"";fh=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=n.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{fh=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?fs(e):""}function Lx(e){switch(e.tag){case 5:return fs(e.type);case 16:return fs("Lazy");case 13:return fs("Suspense");case 19:return fs("SuspenseList");case 0:case 2:case 15:return e=mh(e.type,!1),e;case 11:return e=mh(e.type.render,!1),e;case 1:return e=mh(e.type,!0),e;default:return""}}function zh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ka:return"Fragment";case Ua:return"Portal";case kh:return"Profiler";case Pd:return"StrictMode";case Oh:return"Suspense";case Fh:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qg:return(e.displayName||"Context")+".Consumer";case Jg:return(e._context.displayName||"Context")+".Provider";case Ld:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Nd:return t=e.displayName||null,t!==null?t:zh(e.type)||"Memo";case hi:t=e._payload,e=e._init;try{return zh(e(t))}catch{}}return null}function Nx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zh(t);case 8:return t===Pd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ti(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function e0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ix(e){var t=e0(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){n=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Il(e){e._valueTracker||(e._valueTracker=Ix(e))}function t0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=e0(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function su(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bh(e,t){var r=t.checked;return Ut({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function $m(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Ti(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function r0(e,t){t=t.checked,t!=null&&Rd(e,"checked",t,!1)}function Vh(e,t){r0(e,t);var r=Ti(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Hh(e,t.type,r):t.hasOwnProperty("defaultValue")&&Hh(e,t.type,Ti(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ym(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Hh(e,t,r){(t!=="number"||su(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ms=Array.isArray;function $a(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Ti(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Gh(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(le(91));return Ut({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qm(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(le(92));if(ms(r)){if(1<r.length)throw Error(le(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Ti(r)}}function n0(e,t){var r=Ti(t.value),n=Ti(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Zm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function i0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wh(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?i0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Dl,a0=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Dl=Dl||document.createElement("div"),Dl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Dl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Cs(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var _s={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dx=["Webkit","ms","Moz","O"];Object.keys(_s).forEach(function(e){Dx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_s[t]=_s[e]})});function o0(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||_s.hasOwnProperty(e)&&_s[e]?(""+t).trim():t+"px"}function s0(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=o0(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var Ux=Ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xh(e,t){if(t){if(Ux[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(le(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(le(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(le(61))}if(t.style!=null&&typeof t.style!="object")throw Error(le(62))}}function jh(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $h=null;function Id(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yh=null,Ya=null,qa=null;function Jm(e){if(e=js(e)){if(typeof Yh!="function")throw Error(le(280));var t=e.stateNode;t&&(t=Uu(t),Yh(e.stateNode,e.type,t))}}function l0(e){Ya?qa?qa.push(e):qa=[e]:Ya=e}function u0(){if(Ya){var e=Ya,t=qa;if(qa=Ya=null,Jm(e),t)for(e=0;e<t.length;e++)Jm(t[e])}}function c0(e,t){return e(t)}function h0(){}var gh=!1;function d0(e,t,r){if(gh)return e(t,r);gh=!0;try{return c0(e,t,r)}finally{gh=!1,(Ya!==null||qa!==null)&&(h0(),u0())}}function Rs(e,t){var r=e.stateNode;if(r===null)return null;var n=Uu(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(le(231,t,typeof r));return r}var qh=!1;if(Gn)try{Ia={},Object.defineProperty(Ia,"passive",{get:function(){qh=!0}}),window.addEventListener("test",Ia,Ia),window.removeEventListener("test",Ia,Ia)}catch{qh=!1}var Ia;function kx(e,t,r,n,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(c){this.onError(c)}}var ys=!1,lu=null,uu=!1,Zh=null,Ox={onError:function(e){ys=!0,lu=e}};function Fx(e,t,r,n,i,a,o,s,l){ys=!1,lu=null,kx.apply(Ox,arguments)}function zx(e,t,r,n,i,a,o,s,l){if(Fx.apply(this,arguments),ys){if(ys){var u=lu;ys=!1,lu=null}else throw Error(le(198));uu||(uu=!0,Zh=u)}}function la(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function p0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qm(e){if(la(e)!==e)throw Error(le(188))}function Bx(e){var t=e.alternate;if(!t){if(t=la(e),t===null)throw Error(le(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return Qm(i),e;if(a===n)return Qm(i),t;a=a.sibling}throw Error(le(188))}if(r.return!==n.return)r=i,n=a;else{for(var o=!1,s=i.child;s;){if(s===r){o=!0,r=i,n=a;break}if(s===n){o=!0,n=i,r=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===r){o=!0,r=a,n=i;break}if(s===n){o=!0,n=a,r=i;break}s=s.sibling}if(!o)throw Error(le(189))}}if(r.alternate!==n)throw Error(le(190))}if(r.tag!==3)throw Error(le(188));return r.stateNode.current===r?e:t}function f0(e){return e=Bx(e),e!==null?m0(e):null}function m0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=m0(e);if(t!==null)return t;e=e.sibling}return null}var g0=Or.unstable_scheduleCallback,Km=Or.unstable_cancelCallback,Vx=Or.unstable_shouldYield,Hx=Or.unstable_requestPaint,zt=Or.unstable_now,Gx=Or.unstable_getCurrentPriorityLevel,Dd=Or.unstable_ImmediatePriority,v0=Or.unstable_UserBlockingPriority,cu=Or.unstable_NormalPriority,Wx=Or.unstable_LowPriority,_0=Or.unstable_IdlePriority,Lu=null,Rn=null;function Xx(e){if(Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(Lu,e,void 0,(e.current.flags&128)===128)}catch{}}var cn=Math.clz32?Math.clz32:Yx,jx=Math.log,$x=Math.LN2;function Yx(e){return e>>>=0,e===0?32:31-(jx(e)/$x|0)|0}var Ul=64,kl=4194304;function gs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function hu(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,a=e.pingedLanes,o=r&268435455;if(o!==0){var s=o&~i;s!==0?n=gs(s):(a&=o,a!==0&&(n=gs(a)))}else o=r&~i,o!==0?n=gs(o):a!==0&&(n=gs(a));if(n===0)return 0;if(t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if((n&4)!==0&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-cn(t),i=1<<r,n|=e[r],t&=~i;return n}function qx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zx(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-cn(a),s=1<<o,l=i[o];l===-1?((s&r)===0||(s&n)!==0)&&(i[o]=qx(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function Jh(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function y0(){var e=Ul;return Ul<<=1,(Ul&4194240)===0&&(Ul=64),e}function vh(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ws(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-cn(t),e[t]=r}function Jx(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-cn(r),a=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~a}}function Ud(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-cn(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var dt=0;function x0(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var S0,kd,M0,w0,E0,Qh=!1,Ol=[],vi=null,_i=null,yi=null,Ps=new Map,Ls=new Map,pi=[],Qx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eg(e,t){switch(e){case"focusin":case"focusout":vi=null;break;case"dragenter":case"dragleave":_i=null;break;case"mouseover":case"mouseout":yi=null;break;case"pointerover":case"pointerout":Ps.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ls.delete(t.pointerId)}}function ss(e,t,r,n,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[i]},t!==null&&(t=js(t),t!==null&&kd(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Kx(e,t,r,n,i){switch(t){case"focusin":return vi=ss(vi,e,t,r,n,i),!0;case"dragenter":return _i=ss(_i,e,t,r,n,i),!0;case"mouseover":return yi=ss(yi,e,t,r,n,i),!0;case"pointerover":var a=i.pointerId;return Ps.set(a,ss(Ps.get(a)||null,e,t,r,n,i)),!0;case"gotpointercapture":return a=i.pointerId,Ls.set(a,ss(Ls.get(a)||null,e,t,r,n,i)),!0}return!1}function T0(e){var t=Ji(e.target);if(t!==null){var r=la(t);if(r!==null){if(t=r.tag,t===13){if(t=p0(r),t!==null){e.blockedOn=t,E0(e.priority,function(){M0(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Kh(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);$h=n,r.target.dispatchEvent(n),$h=null}else return t=js(r),t!==null&&kd(t),e.blockedOn=r,!1;t.shift()}return!0}function tg(e,t,r){Jl(e)&&r.delete(t)}function eS(){Qh=!1,vi!==null&&Jl(vi)&&(vi=null),_i!==null&&Jl(_i)&&(_i=null),yi!==null&&Jl(yi)&&(yi=null),Ps.forEach(tg),Ls.forEach(tg)}function ls(e,t){e.blockedOn===t&&(e.blockedOn=null,Qh||(Qh=!0,Or.unstable_scheduleCallback(Or.unstable_NormalPriority,eS)))}function Ns(e){function t(i){return ls(i,e)}if(0<Ol.length){ls(Ol[0],e);for(var r=1;r<Ol.length;r++){var n=Ol[r];n.blockedOn===e&&(n.blockedOn=null)}}for(vi!==null&&ls(vi,e),_i!==null&&ls(_i,e),yi!==null&&ls(yi,e),Ps.forEach(t),Ls.forEach(t),r=0;r<pi.length;r++)n=pi[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<pi.length&&(r=pi[0],r.blockedOn===null);)T0(r),r.blockedOn===null&&pi.shift()}var Za=$n.ReactCurrentBatchConfig,du=!0;function tS(e,t,r,n){var i=dt,a=Za.transition;Za.transition=null;try{dt=1,Od(e,t,r,n)}finally{dt=i,Za.transition=a}}function rS(e,t,r,n){var i=dt,a=Za.transition;Za.transition=null;try{dt=4,Od(e,t,r,n)}finally{dt=i,Za.transition=a}}function Od(e,t,r,n){if(du){var i=Kh(e,t,r,n);if(i===null)Eh(e,t,n,pu,r),eg(e,n);else if(Kx(i,e,t,r,n))n.stopPropagation();else if(eg(e,n),t&4&&-1<Qx.indexOf(e)){for(;i!==null;){var a=js(i);if(a!==null&&S0(a),a=Kh(e,t,r,n),a===null&&Eh(e,t,n,pu,r),a===i)break;i=a}i!==null&&n.stopPropagation()}else Eh(e,t,n,null,r)}}var pu=null;function Kh(e,t,r,n){if(pu=null,e=Id(n),e=Ji(e),e!==null)if(t=la(e),t===null)e=null;else if(r=t.tag,r===13){if(e=p0(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return pu=e,null}function b0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gx()){case Dd:return 1;case v0:return 4;case cu:case Wx:return 16;case _0:return 536870912;default:return 16}default:return 16}}var mi=null,Fd=null,Ql=null;function A0(){if(Ql)return Ql;var e,t=Fd,r=t.length,n,i="value"in mi?mi.value:mi.textContent,a=i.length;for(e=0;e<r&&t[e]===i[e];e++);var o=r-e;for(n=1;n<=o&&t[r-n]===i[a-n];n++);return Ql=i.slice(e,1<n?1-n:void 0)}function Kl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fl(){return!0}function rg(){return!1}function Fr(e){function t(r,n,i,a,o){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Fl:rg,this.isPropagationStopped=rg,this}return Ut(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Fl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Fl)},persist:function(){},isPersistent:Fl}),t}var oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zd=Fr(oo),Xs=Ut({},oo,{view:0,detail:0}),nS=Fr(Xs),_h,yh,us,Nu=Ut({},Xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==us&&(us&&e.type==="mousemove"?(_h=e.screenX-us.screenX,yh=e.screenY-us.screenY):yh=_h=0,us=e),_h)},movementY:function(e){return"movementY"in e?e.movementY:yh}}),ng=Fr(Nu),iS=Ut({},Nu,{dataTransfer:0}),aS=Fr(iS),oS=Ut({},Xs,{relatedTarget:0}),xh=Fr(oS),sS=Ut({},oo,{animationName:0,elapsedTime:0,pseudoElement:0}),lS=Fr(sS),uS=Ut({},oo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cS=Fr(uS),hS=Ut({},oo,{data:0}),ig=Fr(hS),dS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fS[e])?!!t[e]:!1}function Bd(){return mS}var gS=Ut({},Xs,{key:function(e){if(e.key){var t=dS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Kl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bd,charCode:function(e){return e.type==="keypress"?Kl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vS=Fr(gS),_S=Ut({},Nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ag=Fr(_S),yS=Ut({},Xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bd}),xS=Fr(yS),SS=Ut({},oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),MS=Fr(SS),wS=Ut({},Nu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ES=Fr(wS),TS=[9,13,27,32],Vd=Gn&&"CompositionEvent"in window,xs=null;Gn&&"documentMode"in document&&(xs=document.documentMode);var bS=Gn&&"TextEvent"in window&&!xs,C0=Gn&&(!Vd||xs&&8<xs&&11>=xs),og=" ",sg=!1;function R0(e,t){switch(e){case"keyup":return TS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function P0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Oa=!1;function AS(e,t){switch(e){case"compositionend":return P0(t);case"keypress":return t.which!==32?null:(sg=!0,og);case"textInput":return e=t.data,e===og&&sg?null:e;default:return null}}function CS(e,t){if(Oa)return e==="compositionend"||!Vd&&R0(e,t)?(e=A0(),Ql=Fd=mi=null,Oa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return C0&&t.locale!=="ko"?null:t.data;default:return null}}var RS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!RS[e.type]:t==="textarea"}function L0(e,t,r,n){l0(n),t=fu(t,"onChange"),0<t.length&&(r=new zd("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Ss=null,Is=null;function PS(e){H0(e,0)}function Iu(e){var t=Ba(e);if(t0(t))return e}function LS(e,t){if(e==="change")return t}var N0=!1;Gn&&(Gn?(Bl="oninput"in document,Bl||(Sh=document.createElement("div"),Sh.setAttribute("oninput","return;"),Bl=typeof Sh.oninput=="function"),zl=Bl):zl=!1,N0=zl&&(!document.documentMode||9<document.documentMode));var zl,Bl,Sh;function ug(){Ss&&(Ss.detachEvent("onpropertychange",I0),Is=Ss=null)}function I0(e){if(e.propertyName==="value"&&Iu(Is)){var t=[];L0(t,Is,e,Id(e)),d0(PS,t)}}function NS(e,t,r){e==="focusin"?(ug(),Ss=t,Is=r,Ss.attachEvent("onpropertychange",I0)):e==="focusout"&&ug()}function IS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Iu(Is)}function DS(e,t){if(e==="click")return Iu(t)}function US(e,t){if(e==="input"||e==="change")return Iu(t)}function kS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dn=typeof Object.is=="function"?Object.is:kS;function Ds(e,t){if(dn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Uh.call(t,i)||!dn(e[i],t[i]))return!1}return!0}function cg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hg(e,t){var r=cg(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cg(r)}}function D0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?D0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function U0(){for(var e=window,t=su();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=su(e.document)}return t}function Hd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function OS(e){var t=U0(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&D0(r.ownerDocument.documentElement,r)){if(n!==null&&Hd(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(n.start,i);n=n.end===void 0?a:Math.min(n.end,i),!e.extend&&a>n&&(i=n,n=a,a=i),i=hg(r,a);var o=hg(r,n);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var FS=Gn&&"documentMode"in document&&11>=document.documentMode,Fa=null,ed=null,Ms=null,td=!1;function dg(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;td||Fa==null||Fa!==su(n)||(n=Fa,"selectionStart"in n&&Hd(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ms&&Ds(Ms,n)||(Ms=n,n=fu(ed,"onSelect"),0<n.length&&(t=new zd("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Fa)))}function Vl(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var za={animationend:Vl("Animation","AnimationEnd"),animationiteration:Vl("Animation","AnimationIteration"),animationstart:Vl("Animation","AnimationStart"),transitionend:Vl("Transition","TransitionEnd")},Mh={},k0={};Gn&&(k0=document.createElement("div").style,"AnimationEvent"in window||(delete za.animationend.animation,delete za.animationiteration.animation,delete za.animationstart.animation),"TransitionEvent"in window||delete za.transitionend.transition);function Du(e){if(Mh[e])return Mh[e];if(!za[e])return e;var t=za[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in k0)return Mh[e]=t[r];return e}var O0=Du("animationend"),F0=Du("animationiteration"),z0=Du("animationstart"),B0=Du("transitionend"),V0=new Map,pg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ai(e,t){V0.set(e,t),sa(t,[e])}for(Hl=0;Hl<pg.length;Hl++)Gl=pg[Hl],fg=Gl.toLowerCase(),mg=Gl[0].toUpperCase()+Gl.slice(1),Ai(fg,"on"+mg);var Gl,fg,mg,Hl;Ai(O0,"onAnimationEnd");Ai(F0,"onAnimationIteration");Ai(z0,"onAnimationStart");Ai("dblclick","onDoubleClick");Ai("focusin","onFocus");Ai("focusout","onBlur");Ai(B0,"onTransitionEnd");Ka("onMouseEnter",["mouseout","mouseover"]);Ka("onMouseLeave",["mouseout","mouseover"]);Ka("onPointerEnter",["pointerout","pointerover"]);Ka("onPointerLeave",["pointerout","pointerover"]);sa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sa("onBeforeInput",["compositionend","keypress","textInput","paste"]);sa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zS=new Set("cancel close invalid load scroll toggle".split(" ").concat(vs));function gg(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,zx(n,t,void 0,e),e.currentTarget=null}function H0(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var o=n.length-1;0<=o;o--){var s=n[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;gg(i,s,u),a=l}else for(o=0;o<n.length;o++){if(s=n[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;gg(i,s,u),a=l}}}if(uu)throw e=Zh,uu=!1,Zh=null,e}function bt(e,t){var r=t[od];r===void 0&&(r=t[od]=new Set);var n=e+"__bubble";r.has(n)||(G0(t,e,2,!1),r.add(n))}function wh(e,t,r){var n=0;t&&(n|=4),G0(r,e,n,t)}var Wl="_reactListening"+Math.random().toString(36).slice(2);function Us(e){if(!e[Wl]){e[Wl]=!0,Zg.forEach(function(r){r!=="selectionchange"&&(zS.has(r)||wh(r,!1,e),wh(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wl]||(t[Wl]=!0,wh("selectionchange",!1,t))}}function G0(e,t,r,n){switch(b0(t)){case 1:var i=tS;break;case 4:i=rS;break;default:i=Od}r=i.bind(null,t,r,e),i=void 0,!qh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Eh(e,t,r,n,i){var a=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var s=n.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=n.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Ji(s),o===null)return;if(l=o.tag,l===5||l===6){n=a=o;continue e}s=s.parentNode}}n=n.return}d0(function(){var u=a,c=Id(r),p=[];e:{var d=V0.get(e);if(d!==void 0){var f=zd,y=e;switch(e){case"keypress":if(Kl(r)===0)break e;case"keydown":case"keyup":f=vS;break;case"focusin":y="focus",f=xh;break;case"focusout":y="blur",f=xh;break;case"beforeblur":case"afterblur":f=xh;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=ng;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=aS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=xS;break;case O0:case F0:case z0:f=lS;break;case B0:f=MS;break;case"scroll":f=nS;break;case"wheel":f=ES;break;case"copy":case"cut":case"paste":f=cS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=ag}var _=(t&4)!==0,v=!_&&e==="scroll",h=_?d!==null?d+"Capture":null:d;_=[];for(var m=u,g;m!==null;){g=m;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,h!==null&&(x=Rs(m,h),x!=null&&_.push(ks(m,x,g)))),v)break;m=m.return}0<_.length&&(d=new f(d,y,null,r,c),p.push({event:d,listeners:_}))}}if((t&7)===0){e:{if(d=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",d&&r!==$h&&(y=r.relatedTarget||r.fromElement)&&(Ji(y)||y[Wn]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(y=r.relatedTarget||r.toElement,f=u,y=y?Ji(y):null,y!==null&&(v=la(y),y!==v||y.tag!==5&&y.tag!==6)&&(y=null)):(f=null,y=u),f!==y)){if(_=ng,x="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(_=ag,x="onPointerLeave",h="onPointerEnter",m="pointer"),v=f==null?d:Ba(f),g=y==null?d:Ba(y),d=new _(x,m+"leave",f,r,c),d.target=v,d.relatedTarget=g,x=null,Ji(c)===u&&(_=new _(h,m+"enter",y,r,c),_.target=g,_.relatedTarget=v,x=_),v=x,f&&y)t:{for(_=f,h=y,m=0,g=_;g;g=Da(g))m++;for(g=0,x=h;x;x=Da(x))g++;for(;0<m-g;)_=Da(_),m--;for(;0<g-m;)h=Da(h),g--;for(;m--;){if(_===h||h!==null&&_===h.alternate)break t;_=Da(_),h=Da(h)}_=null}else _=null;f!==null&&vg(p,d,f,_,!1),y!==null&&v!==null&&vg(p,v,y,_,!0)}}e:{if(d=u?Ba(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var L=LS;else if(lg(d))if(N0)L=US;else{L=IS;var T=NS}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(L=DS);if(L&&(L=L(e,u))){L0(p,L,r,c);break e}T&&T(e,d,u),e==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Hh(d,"number",d.value)}switch(T=u?Ba(u):window,e){case"focusin":(lg(T)||T.contentEditable==="true")&&(Fa=T,ed=u,Ms=null);break;case"focusout":Ms=ed=Fa=null;break;case"mousedown":td=!0;break;case"contextmenu":case"mouseup":case"dragend":td=!1,dg(p,r,c);break;case"selectionchange":if(FS)break;case"keydown":case"keyup":dg(p,r,c)}var b;if(Vd)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Oa?R0(e,r)&&(R="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(R="onCompositionStart");R&&(C0&&r.locale!=="ko"&&(Oa||R!=="onCompositionStart"?R==="onCompositionEnd"&&Oa&&(b=A0()):(mi=c,Fd="value"in mi?mi.value:mi.textContent,Oa=!0)),T=fu(u,R),0<T.length&&(R=new ig(R,e,null,r,c),p.push({event:R,listeners:T}),b?R.data=b:(b=P0(r),b!==null&&(R.data=b)))),(b=bS?AS(e,r):CS(e,r))&&(u=fu(u,"onBeforeInput"),0<u.length&&(c=new ig("onBeforeInput","beforeinput",null,r,c),p.push({event:c,listeners:u}),c.data=b))}H0(p,t)})}function ks(e,t,r){return{instance:e,listener:t,currentTarget:r}}function fu(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Rs(e,r),a!=null&&n.unshift(ks(e,a,i)),a=Rs(e,t),a!=null&&n.push(ks(e,a,i))),e=e.return}return n}function Da(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vg(e,t,r,n,i){for(var a=t._reactName,o=[];r!==null&&r!==n;){var s=r,l=s.alternate,u=s.stateNode;if(l!==null&&l===n)break;s.tag===5&&u!==null&&(s=u,i?(l=Rs(r,a),l!=null&&o.unshift(ks(r,l,s))):i||(l=Rs(r,a),l!=null&&o.push(ks(r,l,s)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var BS=/\r\n?/g,VS=/\u0000|\uFFFD/g;function _g(e){return(typeof e=="string"?e:""+e).replace(BS,`
`).replace(VS,"")}function Xl(e,t,r){if(t=_g(t),_g(e)!==t&&r)throw Error(le(425))}function mu(){}var rd=null,nd=null;function id(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ad=typeof setTimeout=="function"?setTimeout:void 0,HS=typeof clearTimeout=="function"?clearTimeout:void 0,yg=typeof Promise=="function"?Promise:void 0,GS=typeof queueMicrotask=="function"?queueMicrotask:typeof yg<"u"?function(e){return yg.resolve(null).then(e).catch(WS)}:ad;function WS(e){setTimeout(function(){throw e})}function Th(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),Ns(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Ns(t)}function xi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var so=Math.random().toString(36).slice(2),Cn="__reactFiber$"+so,Os="__reactProps$"+so,Wn="__reactContainer$"+so,od="__reactEvents$"+so,XS="__reactListeners$"+so,jS="__reactHandles$"+so;function Ji(e){var t=e[Cn];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Wn]||r[Cn]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=xg(e);e!==null;){if(r=e[Cn])return r;e=xg(e)}return t}e=r,r=e.parentNode}return null}function js(e){return e=e[Cn]||e[Wn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ba(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(le(33))}function Uu(e){return e[Os]||null}var sd=[],Va=-1;function Ci(e){return{current:e}}function At(e){0>Va||(e.current=sd[Va],sd[Va]=null,Va--)}function _t(e,t){Va++,sd[Va]=e.current,e.current=t}var bi={},hr=Ci(bi),Pr=Ci(!1),ra=bi;function eo(e,t){var r=e.type.contextTypes;if(!r)return bi;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=t[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Lr(e){return e=e.childContextTypes,e!=null}function gu(){At(Pr),At(hr)}function Sg(e,t,r){if(hr.current!==bi)throw Error(le(168));_t(hr,t),_t(Pr,r)}function W0(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(le(108,Nx(e)||"Unknown",i));return Ut({},r,n)}function vu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bi,ra=hr.current,_t(hr,e),_t(Pr,Pr.current),!0}function Mg(e,t,r){var n=e.stateNode;if(!n)throw Error(le(169));r?(e=W0(e,t,ra),n.__reactInternalMemoizedMergedChildContext=e,At(Pr),At(hr),_t(hr,e)):At(Pr),_t(Pr,r)}var zn=null,ku=!1,bh=!1;function X0(e){zn===null?zn=[e]:zn.push(e)}function $S(e){ku=!0,X0(e)}function Ri(){if(!bh&&zn!==null){bh=!0;var e=0,t=dt;try{var r=zn;for(dt=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}zn=null,ku=!1}catch(i){throw zn!==null&&(zn=zn.slice(e+1)),g0(Dd,Ri),i}finally{dt=t,bh=!1}}return null}var Ha=[],Ga=0,_u=null,yu=0,jr=[],$r=0,na=null,Bn=1,Vn="";function qi(e,t){Ha[Ga++]=yu,Ha[Ga++]=_u,_u=e,yu=t}function j0(e,t,r){jr[$r++]=Bn,jr[$r++]=Vn,jr[$r++]=na,na=e;var n=Bn;e=Vn;var i=32-cn(n)-1;n&=~(1<<i),r+=1;var a=32-cn(t)+i;if(30<a){var o=i-i%5;a=(n&(1<<o)-1).toString(32),n>>=o,i-=o,Bn=1<<32-cn(t)+i|r<<i|n,Vn=a+e}else Bn=1<<a|r<<i|n,Vn=e}function Gd(e){e.return!==null&&(qi(e,1),j0(e,1,0))}function Wd(e){for(;e===_u;)_u=Ha[--Ga],Ha[Ga]=null,yu=Ha[--Ga],Ha[Ga]=null;for(;e===na;)na=jr[--$r],jr[$r]=null,Vn=jr[--$r],jr[$r]=null,Bn=jr[--$r],jr[$r]=null}var kr=null,Ur=null,Lt=!1,un=null;function $0(e,t){var r=Yr(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function wg(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,kr=e,Ur=xi(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,kr=e,Ur=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=na!==null?{id:Bn,overflow:Vn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Yr(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,kr=e,Ur=null,!0):!1;default:return!1}}function ld(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ud(e){if(Lt){var t=Ur;if(t){var r=t;if(!wg(e,t)){if(ld(e))throw Error(le(418));t=xi(r.nextSibling);var n=kr;t&&wg(e,t)?$0(n,r):(e.flags=e.flags&-4097|2,Lt=!1,kr=e)}}else{if(ld(e))throw Error(le(418));e.flags=e.flags&-4097|2,Lt=!1,kr=e}}}function Eg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kr=e}function jl(e){if(e!==kr)return!1;if(!Lt)return Eg(e),Lt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!id(e.type,e.memoizedProps)),t&&(t=Ur)){if(ld(e))throw Y0(),Error(le(418));for(;t;)$0(e,t),t=xi(t.nextSibling)}if(Eg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(le(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ur=xi(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ur=null}}else Ur=kr?xi(e.stateNode.nextSibling):null;return!0}function Y0(){for(var e=Ur;e;)e=xi(e.nextSibling)}function to(){Ur=kr=null,Lt=!1}function Xd(e){un===null?un=[e]:un.push(e)}var YS=$n.ReactCurrentBatchConfig;function cs(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(le(309));var n=r.stateNode}if(!n)throw Error(le(147,e));var i=n,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(le(284));if(!r._owner)throw Error(le(290,e))}return e}function $l(e,t){throw e=Object.prototype.toString.call(t),Error(le(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Tg(e){var t=e._init;return t(e._payload)}function q0(e){function t(h,m){if(e){var g=h.deletions;g===null?(h.deletions=[m],h.flags|=16):g.push(m)}}function r(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function n(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function i(h,m){return h=Ei(h,m),h.index=0,h.sibling=null,h}function a(h,m,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<m?(h.flags|=2,m):g):(h.flags|=2,m)):(h.flags|=1048576,m)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,m,g,x){return m===null||m.tag!==6?(m=Ih(g,h.mode,x),m.return=h,m):(m=i(m,g),m.return=h,m)}function l(h,m,g,x){var L=g.type;return L===ka?c(h,m,g.props.children,x,g.key):m!==null&&(m.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===hi&&Tg(L)===m.type)?(x=i(m,g.props),x.ref=cs(h,m,g),x.return=h,x):(x=ou(g.type,g.key,g.props,null,h.mode,x),x.ref=cs(h,m,g),x.return=h,x)}function u(h,m,g,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=Dh(g,h.mode,x),m.return=h,m):(m=i(m,g.children||[]),m.return=h,m)}function c(h,m,g,x,L){return m===null||m.tag!==7?(m=ta(g,h.mode,x,L),m.return=h,m):(m=i(m,g),m.return=h,m)}function p(h,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ih(""+m,h.mode,g),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Nl:return g=ou(m.type,m.key,m.props,null,h.mode,g),g.ref=cs(h,null,m),g.return=h,g;case Ua:return m=Dh(m,h.mode,g),m.return=h,m;case hi:var x=m._init;return p(h,x(m._payload),g)}if(ms(m)||os(m))return m=ta(m,h.mode,g,null),m.return=h,m;$l(h,m)}return null}function d(h,m,g,x){var L=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return L!==null?null:s(h,m,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Nl:return g.key===L?l(h,m,g,x):null;case Ua:return g.key===L?u(h,m,g,x):null;case hi:return L=g._init,d(h,m,L(g._payload),x)}if(ms(g)||os(g))return L!==null?null:c(h,m,g,x,null);$l(h,g)}return null}function f(h,m,g,x,L){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(g)||null,s(m,h,""+x,L);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Nl:return h=h.get(x.key===null?g:x.key)||null,l(m,h,x,L);case Ua:return h=h.get(x.key===null?g:x.key)||null,u(m,h,x,L);case hi:var T=x._init;return f(h,m,g,T(x._payload),L)}if(ms(x)||os(x))return h=h.get(g)||null,c(m,h,x,L,null);$l(m,x)}return null}function y(h,m,g,x){for(var L=null,T=null,b=m,R=m=0,w=null;b!==null&&R<g.length;R++){b.index>R?(w=b,b=null):w=b.sibling;var S=d(h,b,g[R],x);if(S===null){b===null&&(b=w);break}e&&b&&S.alternate===null&&t(h,b),m=a(S,m,R),T===null?L=S:T.sibling=S,T=S,b=w}if(R===g.length)return r(h,b),Lt&&qi(h,R),L;if(b===null){for(;R<g.length;R++)b=p(h,g[R],x),b!==null&&(m=a(b,m,R),T===null?L=b:T.sibling=b,T=b);return Lt&&qi(h,R),L}for(b=n(h,b);R<g.length;R++)w=f(b,h,R,g[R],x),w!==null&&(e&&w.alternate!==null&&b.delete(w.key===null?R:w.key),m=a(w,m,R),T===null?L=w:T.sibling=w,T=w);return e&&b.forEach(function(P){return t(h,P)}),Lt&&qi(h,R),L}function _(h,m,g,x){var L=os(g);if(typeof L!="function")throw Error(le(150));if(g=L.call(g),g==null)throw Error(le(151));for(var T=L=null,b=m,R=m=0,w=null,S=g.next();b!==null&&!S.done;R++,S=g.next()){b.index>R?(w=b,b=null):w=b.sibling;var P=d(h,b,S.value,x);if(P===null){b===null&&(b=w);break}e&&b&&P.alternate===null&&t(h,b),m=a(P,m,R),T===null?L=P:T.sibling=P,T=P,b=w}if(S.done)return r(h,b),Lt&&qi(h,R),L;if(b===null){for(;!S.done;R++,S=g.next())S=p(h,S.value,x),S!==null&&(m=a(S,m,R),T===null?L=S:T.sibling=S,T=S);return Lt&&qi(h,R),L}for(b=n(h,b);!S.done;R++,S=g.next())S=f(b,h,R,S.value,x),S!==null&&(e&&S.alternate!==null&&b.delete(S.key===null?R:S.key),m=a(S,m,R),T===null?L=S:T.sibling=S,T=S);return e&&b.forEach(function(k){return t(h,k)}),Lt&&qi(h,R),L}function v(h,m,g,x){if(typeof g=="object"&&g!==null&&g.type===ka&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Nl:e:{for(var L=g.key,T=m;T!==null;){if(T.key===L){if(L=g.type,L===ka){if(T.tag===7){r(h,T.sibling),m=i(T,g.props.children),m.return=h,h=m;break e}}else if(T.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===hi&&Tg(L)===T.type){r(h,T.sibling),m=i(T,g.props),m.ref=cs(h,T,g),m.return=h,h=m;break e}r(h,T);break}else t(h,T);T=T.sibling}g.type===ka?(m=ta(g.props.children,h.mode,x,g.key),m.return=h,h=m):(x=ou(g.type,g.key,g.props,null,h.mode,x),x.ref=cs(h,m,g),x.return=h,h=x)}return o(h);case Ua:e:{for(T=g.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){r(h,m.sibling),m=i(m,g.children||[]),m.return=h,h=m;break e}else{r(h,m);break}else t(h,m);m=m.sibling}m=Dh(g,h.mode,x),m.return=h,h=m}return o(h);case hi:return T=g._init,v(h,m,T(g._payload),x)}if(ms(g))return y(h,m,g,x);if(os(g))return _(h,m,g,x);$l(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(r(h,m.sibling),m=i(m,g),m.return=h,h=m):(r(h,m),m=Ih(g,h.mode,x),m.return=h,h=m),o(h)):r(h,m)}return v}var ro=q0(!0),Z0=q0(!1),xu=Ci(null),Su=null,Wa=null,jd=null;function $d(){jd=Wa=Su=null}function Yd(e){var t=xu.current;At(xu),e._currentValue=t}function cd(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Ja(e,t){Su=e,jd=Wa=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Rr=!0),e.firstContext=null)}function Zr(e){var t=e._currentValue;if(jd!==e)if(e={context:e,memoizedValue:t,next:null},Wa===null){if(Su===null)throw Error(le(308));Wa=e,Su.dependencies={lanes:0,firstContext:e}}else Wa=Wa.next=e;return t}var Qi=null;function qd(e){Qi===null?Qi=[e]:Qi.push(e)}function J0(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,qd(t)):(r.next=i.next,i.next=r),t.interleaved=r,Xn(e,n)}function Xn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var di=!1;function Zd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Q0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Hn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Si(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ut&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Xn(e,r)}return i=n.interleaved,i===null?(t.next=t,qd(n)):(t.next=i.next,i.next=t),n.interleaved=t,Xn(e,r)}function eu(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Ud(e,r)}}function bg(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=o:a=a.next=o,r=r.next}while(r!==null);a===null?i=a=t:a=a.next=t}else i=a=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Mu(e,t,r,n){var i=e.updateQueue;di=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==o&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var p=i.baseState;o=0,c=u=l=null,s=a;do{var d=s.lane,f=s.eventTime;if((n&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,_=s;switch(d=t,f=r,_.tag){case 1:if(y=_.payload,typeof y=="function"){p=y.call(f,p,d);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,d=typeof y=="function"?y.call(f,p,d):y,d==null)break e;p=Ut({},p,d);break e;case 2:di=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[s]:d.push(s))}else f={eventTime:f,lane:d,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=f,l=p):c=c.next=f,o|=d;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;d=s,s=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);aa|=o,e.lanes=o,e.memoizedState=p}}function Ag(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(le(191,i));i.call(n)}}}var $s={},Pn=Ci($s),Fs=Ci($s),zs=Ci($s);function Ki(e){if(e===$s)throw Error(le(174));return e}function Jd(e,t){switch(_t(zs,t),_t(Fs,e),_t(Pn,$s),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wh(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wh(t,e)}At(Pn),_t(Pn,t)}function no(){At(Pn),At(Fs),At(zs)}function K0(e){Ki(zs.current);var t=Ki(Pn.current),r=Wh(t,e.type);t!==r&&(_t(Fs,e),_t(Pn,r))}function Qd(e){Fs.current===e&&(At(Pn),At(Fs))}var It=Ci(0);function wu(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ah=[];function Kd(){for(var e=0;e<Ah.length;e++)Ah[e]._workInProgressVersionPrimary=null;Ah.length=0}var tu=$n.ReactCurrentDispatcher,Ch=$n.ReactCurrentBatchConfig,ia=0,Dt=null,Xt=null,qt=null,Eu=!1,ws=!1,Bs=0,qS=0;function lr(){throw Error(le(321))}function ep(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!dn(e[r],t[r]))return!1;return!0}function tp(e,t,r,n,i,a){if(ia=a,Dt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,tu.current=e===null||e.memoizedState===null?KS:eM,e=r(n,i),ws){a=0;do{if(ws=!1,Bs=0,25<=a)throw Error(le(301));a+=1,qt=Xt=null,t.updateQueue=null,tu.current=tM,e=r(n,i)}while(ws)}if(tu.current=Tu,t=Xt!==null&&Xt.next!==null,ia=0,qt=Xt=Dt=null,Eu=!1,t)throw Error(le(300));return e}function rp(){var e=Bs!==0;return Bs=0,e}function An(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?Dt.memoizedState=qt=e:qt=qt.next=e,qt}function Jr(){if(Xt===null){var e=Dt.alternate;e=e!==null?e.memoizedState:null}else e=Xt.next;var t=qt===null?Dt.memoizedState:qt.next;if(t!==null)qt=t,Xt=e;else{if(e===null)throw Error(le(310));Xt=e,e={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},qt===null?Dt.memoizedState=qt=e:qt=qt.next=e}return qt}function Vs(e,t){return typeof t=="function"?t(e):t}function Rh(e){var t=Jr(),r=t.queue;if(r===null)throw Error(le(311));r.lastRenderedReducer=e;var n=Xt,i=n.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}n.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,n=n.baseState;var s=o=null,l=null,u=a;do{var c=u.lane;if((ia&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var p={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=p,o=n):l=l.next=p,Dt.lanes|=c,aa|=c}u=u.next}while(u!==null&&u!==a);l===null?o=n:l.next=s,dn(n,t.memoizedState)||(Rr=!0),t.memoizedState=n,t.baseState=o,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do a=i.lane,Dt.lanes|=a,aa|=a,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ph(e){var t=Jr(),r=t.queue;if(r===null)throw Error(le(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,a=t.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);dn(a,t.memoizedState)||(Rr=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function ev(){}function tv(e,t){var r=Dt,n=Jr(),i=t(),a=!dn(n.memoizedState,i);if(a&&(n.memoizedState=i,Rr=!0),n=n.queue,np(iv.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||qt!==null&&qt.memoizedState.tag&1){if(r.flags|=2048,Hs(9,nv.bind(null,r,n,i,t),void 0,null),Zt===null)throw Error(le(349));(ia&30)!==0||rv(r,t,i)}return i}function rv(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Dt.updateQueue,t===null?(t={lastEffect:null,stores:null},Dt.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function nv(e,t,r,n){t.value=r,t.getSnapshot=n,av(t)&&ov(e)}function iv(e,t,r){return r(function(){av(t)&&ov(e)})}function av(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!dn(e,r)}catch{return!0}}function ov(e){var t=Xn(e,1);t!==null&&hn(t,e,1,-1)}function Cg(e){var t=An();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vs,lastRenderedState:e},t.queue=e,e=e.dispatch=QS.bind(null,Dt,e),[t.memoizedState,e]}function Hs(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Dt.updateQueue,t===null?(t={lastEffect:null,stores:null},Dt.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function sv(){return Jr().memoizedState}function ru(e,t,r,n){var i=An();Dt.flags|=e,i.memoizedState=Hs(1|t,r,void 0,n===void 0?null:n)}function Ou(e,t,r,n){var i=Jr();n=n===void 0?null:n;var a=void 0;if(Xt!==null){var o=Xt.memoizedState;if(a=o.destroy,n!==null&&ep(n,o.deps)){i.memoizedState=Hs(t,r,a,n);return}}Dt.flags|=e,i.memoizedState=Hs(1|t,r,a,n)}function Rg(e,t){return ru(8390656,8,e,t)}function np(e,t){return Ou(2048,8,e,t)}function lv(e,t){return Ou(4,2,e,t)}function uv(e,t){return Ou(4,4,e,t)}function cv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hv(e,t,r){return r=r!=null?r.concat([e]):null,Ou(4,4,cv.bind(null,t,e),r)}function ip(){}function dv(e,t){var r=Jr();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ep(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function pv(e,t){var r=Jr();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ep(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function fv(e,t,r){return(ia&21)===0?(e.baseState&&(e.baseState=!1,Rr=!0),e.memoizedState=r):(dn(r,t)||(r=y0(),Dt.lanes|=r,aa|=r,e.baseState=!0),t)}function ZS(e,t){var r=dt;dt=r!==0&&4>r?r:4,e(!0);var n=Ch.transition;Ch.transition={};try{e(!1),t()}finally{dt=r,Ch.transition=n}}function mv(){return Jr().memoizedState}function JS(e,t,r){var n=wi(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},gv(e))vv(t,r);else if(r=J0(e,t,r,n),r!==null){var i=xr();hn(r,e,n,i),_v(r,t,n)}}function QS(e,t,r){var n=wi(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(gv(e))vv(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,r);if(i.hasEagerState=!0,i.eagerState=s,dn(s,o)){var l=t.interleaved;l===null?(i.next=i,qd(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}r=J0(e,t,i,n),r!==null&&(i=xr(),hn(r,e,n,i),_v(r,t,n))}}function gv(e){var t=e.alternate;return e===Dt||t!==null&&t===Dt}function vv(e,t){ws=Eu=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function _v(e,t,r){if((r&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Ud(e,r)}}var Tu={readContext:Zr,useCallback:lr,useContext:lr,useEffect:lr,useImperativeHandle:lr,useInsertionEffect:lr,useLayoutEffect:lr,useMemo:lr,useReducer:lr,useRef:lr,useState:lr,useDebugValue:lr,useDeferredValue:lr,useTransition:lr,useMutableSource:lr,useSyncExternalStore:lr,useId:lr,unstable_isNewReconciler:!1},KS={readContext:Zr,useCallback:function(e,t){return An().memoizedState=[e,t===void 0?null:t],e},useContext:Zr,useEffect:Rg,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ru(4194308,4,cv.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ru(4194308,4,e,t)},useInsertionEffect:function(e,t){return ru(4,2,e,t)},useMemo:function(e,t){var r=An();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=An();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=JS.bind(null,Dt,e),[n.memoizedState,e]},useRef:function(e){var t=An();return e={current:e},t.memoizedState=e},useState:Cg,useDebugValue:ip,useDeferredValue:function(e){return An().memoizedState=e},useTransition:function(){var e=Cg(!1),t=e[0];return e=ZS.bind(null,e[1]),An().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Dt,i=An();if(Lt){if(r===void 0)throw Error(le(407));r=r()}else{if(r=t(),Zt===null)throw Error(le(349));(ia&30)!==0||rv(n,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,Rg(iv.bind(null,n,a,e),[e]),n.flags|=2048,Hs(9,nv.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=An(),t=Zt.identifierPrefix;if(Lt){var r=Vn,n=Bn;r=(n&~(1<<32-cn(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Bs++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=qS++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},eM={readContext:Zr,useCallback:dv,useContext:Zr,useEffect:np,useImperativeHandle:hv,useInsertionEffect:lv,useLayoutEffect:uv,useMemo:pv,useReducer:Rh,useRef:sv,useState:function(){return Rh(Vs)},useDebugValue:ip,useDeferredValue:function(e){var t=Jr();return fv(t,Xt.memoizedState,e)},useTransition:function(){var e=Rh(Vs)[0],t=Jr().memoizedState;return[e,t]},useMutableSource:ev,useSyncExternalStore:tv,useId:mv,unstable_isNewReconciler:!1},tM={readContext:Zr,useCallback:dv,useContext:Zr,useEffect:np,useImperativeHandle:hv,useInsertionEffect:lv,useLayoutEffect:uv,useMemo:pv,useReducer:Ph,useRef:sv,useState:function(){return Ph(Vs)},useDebugValue:ip,useDeferredValue:function(e){var t=Jr();return Xt===null?t.memoizedState=e:fv(t,Xt.memoizedState,e)},useTransition:function(){var e=Ph(Vs)[0],t=Jr().memoizedState;return[e,t]},useMutableSource:ev,useSyncExternalStore:tv,useId:mv,unstable_isNewReconciler:!1};function sn(e,t){if(e&&e.defaultProps){t=Ut({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function hd(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:Ut({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Fu={isMounted:function(e){return(e=e._reactInternals)?la(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=xr(),i=wi(e),a=Hn(n,i);a.payload=t,r!=null&&(a.callback=r),t=Si(e,a,i),t!==null&&(hn(t,e,i,n),eu(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=xr(),i=wi(e),a=Hn(n,i);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=Si(e,a,i),t!==null&&(hn(t,e,i,n),eu(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=xr(),n=wi(e),i=Hn(r,n);i.tag=2,t!=null&&(i.callback=t),t=Si(e,i,n),t!==null&&(hn(t,e,n,r),eu(t,e,n))}};function Pg(e,t,r,n,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ds(r,n)||!Ds(i,a):!0}function yv(e,t,r){var n=!1,i=bi,a=t.contextType;return typeof a=="object"&&a!==null?a=Zr(a):(i=Lr(t)?ra:hr.current,n=t.contextTypes,a=(n=n!=null)?eo(e,i):bi),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fu,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Lg(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Fu.enqueueReplaceState(t,t.state,null)}function dd(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Zd(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Zr(a):(a=Lr(t)?ra:hr.current,i.context=eo(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(hd(e,t,a,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Fu.enqueueReplaceState(i,i.state,null),Mu(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function io(e,t){try{var r="",n=t;do r+=Lx(n),n=n.return;while(n);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Lh(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function pd(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var rM=typeof WeakMap=="function"?WeakMap:Map;function xv(e,t,r){r=Hn(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Au||(Au=!0,wd=n),pd(e,t)},r}function Sv(e,t,r){r=Hn(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){pd(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){pd(e,t),typeof n!="function"&&(Mi===null?Mi=new Set([this]):Mi.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function Ng(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new rM;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=gM.bind(null,e,t,r),t.then(e,e))}function Ig(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Dg(e,t,r,n,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Hn(-1,1),t.tag=2,Si(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var nM=$n.ReactCurrentOwner,Rr=!1;function yr(e,t,r,n){t.child=e===null?Z0(t,null,r,n):ro(t,e.child,r,n)}function Ug(e,t,r,n,i){r=r.render;var a=t.ref;return Ja(t,i),n=tp(e,t,r,n,a,i),r=rp(),e!==null&&!Rr?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jn(e,t,i)):(Lt&&r&&Gd(t),t.flags|=1,yr(e,t,n,i),t.child)}function kg(e,t,r,n,i){if(e===null){var a=r.type;return typeof a=="function"&&!dp(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,Mv(e,t,a,n,i)):(e=ou(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(r=r.compare,r=r!==null?r:Ds,r(o,n)&&e.ref===t.ref)return jn(e,t,i)}return t.flags|=1,e=Ei(a,n),e.ref=t.ref,e.return=t,t.child=e}function Mv(e,t,r,n,i){if(e!==null){var a=e.memoizedProps;if(Ds(a,n)&&e.ref===t.ref)if(Rr=!1,t.pendingProps=n=a,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Rr=!0);else return t.lanes=e.lanes,jn(e,t,i)}return fd(e,t,r,n,i)}function wv(e,t,r){var n=t.pendingProps,i=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_t(ja,Dr),Dr|=r;else{if((r&1073741824)===0)return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_t(ja,Dr),Dr|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,_t(ja,Dr),Dr|=n}else a!==null?(n=a.baseLanes|r,t.memoizedState=null):n=r,_t(ja,Dr),Dr|=n;return yr(e,t,i,r),t.child}function Ev(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function fd(e,t,r,n,i){var a=Lr(r)?ra:hr.current;return a=eo(t,a),Ja(t,i),r=tp(e,t,r,n,a,i),n=rp(),e!==null&&!Rr?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jn(e,t,i)):(Lt&&n&&Gd(t),t.flags|=1,yr(e,t,r,i),t.child)}function Og(e,t,r,n,i){if(Lr(r)){var a=!0;vu(t)}else a=!1;if(Ja(t,i),t.stateNode===null)nu(e,t),yv(t,r,n),dd(t,r,n,i),n=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=r.contextType;typeof u=="object"&&u!==null?u=Zr(u):(u=Lr(r)?ra:hr.current,u=eo(t,u));var c=r.getDerivedStateFromProps,p=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==n||l!==u)&&Lg(t,o,n,u),di=!1;var d=t.memoizedState;o.state=d,Mu(t,n,o,i),l=t.memoizedState,s!==n||d!==l||Pr.current||di?(typeof c=="function"&&(hd(t,r,c,n),l=t.memoizedState),(s=di||Pg(t,r,s,n,d,l,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),o.props=n,o.state=l,o.context=u,n=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,Q0(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:sn(t.type,s),o.props=u,p=t.pendingProps,d=o.context,l=r.contextType,typeof l=="object"&&l!==null?l=Zr(l):(l=Lr(r)?ra:hr.current,l=eo(t,l));var f=r.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==p||d!==l)&&Lg(t,o,n,l),di=!1,d=t.memoizedState,o.state=d,Mu(t,n,o,i);var y=t.memoizedState;s!==p||d!==y||Pr.current||di?(typeof f=="function"&&(hd(t,r,f,n),y=t.memoizedState),(u=di||Pg(t,r,u,n,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),o.props=n,o.state=y,o.context=l,n=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),n=!1)}return md(e,t,r,n,a,i)}function md(e,t,r,n,i,a){Ev(e,t);var o=(t.flags&128)!==0;if(!n&&!o)return i&&Mg(t,r,!1),jn(e,t,a);n=t.stateNode,nM.current=t;var s=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&o?(t.child=ro(t,e.child,null,a),t.child=ro(t,null,s,a)):yr(e,t,s,a),t.memoizedState=n.state,i&&Mg(t,r,!0),t.child}function Tv(e){var t=e.stateNode;t.pendingContext?Sg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Sg(e,t.context,!1),Jd(e,t.containerInfo)}function Fg(e,t,r,n,i){return to(),Xd(i),t.flags|=256,yr(e,t,r,n),t.child}var gd={dehydrated:null,treeContext:null,retryLane:0};function vd(e){return{baseLanes:e,cachePool:null,transitions:null}}function bv(e,t,r){var n=t.pendingProps,i=It.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),_t(It,i&1),e===null)return ud(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=n.children,e=n.fallback,a?(n=t.mode,a=t.child,o={mode:"hidden",children:o},(n&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Vu(o,n,0,null),e=ta(e,n,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=vd(r),t.memoizedState=gd,e):ap(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return iM(e,t,o,n,s,i,r);if(a){a=n.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:n.children};return(o&1)===0&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=Ei(i,l),n.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=Ei(s,a):(a=ta(a,o,r,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,o=e.child.memoizedState,o=o===null?vd(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~r,t.memoizedState=gd,n}return a=e.child,e=a.sibling,n=Ei(a,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function ap(e,t){return t=Vu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Yl(e,t,r,n){return n!==null&&Xd(n),ro(t,e.child,null,r),e=ap(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function iM(e,t,r,n,i,a,o){if(r)return t.flags&256?(t.flags&=-257,n=Lh(Error(le(422))),Yl(e,t,o,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=n.fallback,i=t.mode,n=Vu({mode:"visible",children:n.children},i,0,null),a=ta(a,i,o,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,(t.mode&1)!==0&&ro(t,e.child,null,o),t.child.memoizedState=vd(o),t.memoizedState=gd,a);if((t.mode&1)===0)return Yl(e,t,o,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var s=n.dgst;return n=s,a=Error(le(419)),n=Lh(a,n,void 0),Yl(e,t,o,n)}if(s=(o&e.childLanes)!==0,Rr||s){if(n=Zt,n!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(n.suspendedLanes|o))!==0?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Xn(e,i),hn(n,e,i,-1))}return hp(),n=Lh(Error(le(421))),Yl(e,t,o,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=vM.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Ur=xi(i.nextSibling),kr=t,Lt=!0,un=null,e!==null&&(jr[$r++]=Bn,jr[$r++]=Vn,jr[$r++]=na,Bn=e.id,Vn=e.overflow,na=t),t=ap(t,n.children),t.flags|=4096,t)}function zg(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),cd(e.return,t,r)}function Nh(e,t,r,n,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=i)}function Av(e,t,r){var n=t.pendingProps,i=n.revealOrder,a=n.tail;if(yr(e,t,n.children,r),n=It.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zg(e,r,t);else if(e.tag===19)zg(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(_t(It,n),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&wu(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Nh(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&wu(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Nh(t,!0,r,null,a);break;case"together":Nh(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function nu(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),aa|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(le(153));if(t.child!==null){for(e=t.child,r=Ei(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Ei(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function aM(e,t,r){switch(t.tag){case 3:Tv(t),to();break;case 5:K0(t);break;case 1:Lr(t.type)&&vu(t);break;case 4:Jd(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;_t(xu,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(_t(It,It.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?bv(e,t,r):(_t(It,It.current&1),e=jn(e,t,r),e!==null?e.sibling:null);_t(It,It.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&128)!==0){if(n)return Av(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_t(It,It.current),n)break;return null;case 22:case 23:return t.lanes=0,wv(e,t,r)}return jn(e,t,r)}var Cv,_d,Rv,Pv;Cv=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};_d=function(){};Rv=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Ki(Pn.current);var a=null;switch(r){case"input":i=Bh(e,i),n=Bh(e,n),a=[];break;case"select":i=Ut({},i,{value:void 0}),n=Ut({},n,{value:void 0}),a=[];break;case"textarea":i=Gh(e,i),n=Gh(e,n),a=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=mu)}Xh(r,n);var o;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(As.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in n){var l=n[u];if(s=i?.[u],n.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(r||(r={}),r[o]=l[o])}else r||(a||(a=[]),a.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(As.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&bt("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}r&&(a=a||[]).push("style",r);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Pv=function(e,t,r,n){r!==n&&(t.flags|=4)};function hs(e,t){if(!Lt)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ur(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function oM(e,t,r){var n=t.pendingProps;switch(Wd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ur(t),null;case 1:return Lr(t.type)&&gu(),ur(t),null;case 3:return n=t.stateNode,no(),At(Pr),At(hr),Kd(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(jl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,un!==null&&(bd(un),un=null))),_d(e,t),ur(t),null;case 5:Qd(t);var i=Ki(zs.current);if(r=t.type,e!==null&&t.stateNode!=null)Rv(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(le(166));return ur(t),null}if(e=Ki(Pn.current),jl(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[Cn]=t,n[Os]=a,e=(t.mode&1)!==0,r){case"dialog":bt("cancel",n),bt("close",n);break;case"iframe":case"object":case"embed":bt("load",n);break;case"video":case"audio":for(i=0;i<vs.length;i++)bt(vs[i],n);break;case"source":bt("error",n);break;case"img":case"image":case"link":bt("error",n),bt("load",n);break;case"details":bt("toggle",n);break;case"input":$m(n,a),bt("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},bt("invalid",n);break;case"textarea":qm(n,a),bt("invalid",n)}Xh(r,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?n.textContent!==s&&(a.suppressHydrationWarning!==!0&&Xl(n.textContent,s,e),i=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Xl(n.textContent,s,e),i=["children",""+s]):As.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&bt("scroll",n)}switch(r){case"input":Il(n),Ym(n,a,!0);break;case"textarea":Il(n),Zm(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=mu)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=i0(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=o.createElement(r,{is:n.is}):(e=o.createElement(r),r==="select"&&(o=e,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):e=o.createElementNS(e,r),e[Cn]=t,e[Os]=n,Cv(e,t,!1,!1),t.stateNode=e;e:{switch(o=jh(r,n),r){case"dialog":bt("cancel",e),bt("close",e),i=n;break;case"iframe":case"object":case"embed":bt("load",e),i=n;break;case"video":case"audio":for(i=0;i<vs.length;i++)bt(vs[i],e);i=n;break;case"source":bt("error",e),i=n;break;case"img":case"image":case"link":bt("error",e),bt("load",e),i=n;break;case"details":bt("toggle",e),i=n;break;case"input":$m(e,n),i=Bh(e,n),bt("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=Ut({},n,{value:void 0}),bt("invalid",e);break;case"textarea":qm(e,n),i=Gh(e,n),bt("invalid",e);break;default:i=n}Xh(r,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?s0(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&a0(e,l)):a==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Cs(e,l):typeof l=="number"&&Cs(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(As.hasOwnProperty(a)?l!=null&&a==="onScroll"&&bt("scroll",e):l!=null&&Rd(e,a,l,o))}switch(r){case"input":Il(e),Ym(e,n,!1);break;case"textarea":Il(e),Zm(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Ti(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?$a(e,!!n.multiple,a,!1):n.defaultValue!=null&&$a(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=mu)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ur(t),null;case 6:if(e&&t.stateNode!=null)Pv(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(le(166));if(r=Ki(zs.current),Ki(Pn.current),jl(t)){if(n=t.stateNode,r=t.memoizedProps,n[Cn]=t,(a=n.nodeValue!==r)&&(e=kr,e!==null))switch(e.tag){case 3:Xl(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xl(n.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Cn]=t,t.stateNode=n}return ur(t),null;case 13:if(At(It),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Lt&&Ur!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Y0(),to(),t.flags|=98560,a=!1;else if(a=jl(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(le(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(le(317));a[Cn]=t}else to(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ur(t),a=!1}else un!==null&&(bd(un),un=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(It.current&1)!==0?jt===0&&(jt=3):hp())),t.updateQueue!==null&&(t.flags|=4),ur(t),null);case 4:return no(),_d(e,t),e===null&&Us(t.stateNode.containerInfo),ur(t),null;case 10:return Yd(t.type._context),ur(t),null;case 17:return Lr(t.type)&&gu(),ur(t),null;case 19:if(At(It),a=t.memoizedState,a===null)return ur(t),null;if(n=(t.flags&128)!==0,o=a.rendering,o===null)if(n)hs(a,!1);else{if(jt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=wu(e),o!==null){for(t.flags|=128,hs(a,!1),n=o.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)a=r,e=n,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return _t(It,It.current&1|2),t.child}e=e.sibling}a.tail!==null&&zt()>ao&&(t.flags|=128,n=!0,hs(a,!1),t.lanes=4194304)}else{if(!n)if(e=wu(o),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),hs(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Lt)return ur(t),null}else 2*zt()-a.renderingStartTime>ao&&r!==1073741824&&(t.flags|=128,n=!0,hs(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(r=a.last,r!==null?r.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=zt(),t.sibling=null,r=It.current,_t(It,n?r&1|2:r&1),t):(ur(t),null);case 22:case 23:return cp(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(Dr&1073741824)!==0&&(ur(t),t.subtreeFlags&6&&(t.flags|=8192)):ur(t),null;case 24:return null;case 25:return null}throw Error(le(156,t.tag))}function sM(e,t){switch(Wd(t),t.tag){case 1:return Lr(t.type)&&gu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return no(),At(Pr),At(hr),Kd(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Qd(t),null;case 13:if(At(It),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(le(340));to()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return At(It),null;case 4:return no(),null;case 10:return Yd(t.type._context),null;case 22:case 23:return cp(),null;case 24:return null;default:return null}}var ql=!1,cr=!1,lM=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function Xa(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Ot(e,t,n)}else r.current=null}function yd(e,t,r){try{r()}catch(n){Ot(e,t,n)}}var Bg=!1;function uM(e,t){if(rd=du,e=U0(),Hd(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var o=0,s=-1,l=-1,u=0,c=0,p=e,d=null;t:for(;;){for(var f;p!==r||i!==0&&p.nodeType!==3||(s=o+i),p!==a||n!==0&&p.nodeType!==3||(l=o+n),p.nodeType===3&&(o+=p.nodeValue.length),(f=p.firstChild)!==null;)d=p,p=f;for(;;){if(p===e)break t;if(d===r&&++u===i&&(s=o),d===a&&++c===n&&(l=o),(f=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=f}r=s===-1||l===-1?null:{start:s,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(nd={focusedElem:e,selectionRange:r},du=!1,Pe=t;Pe!==null;)if(t=Pe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Pe=e;else for(;Pe!==null;){t=Pe;try{var y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,v=y.memoizedState,h=t.stateNode,m=h.getSnapshotBeforeUpdate(t.elementType===t.type?_:sn(t.type,_),v);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(le(163))}}catch(x){Ot(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,Pe=e;break}Pe=t.return}return y=Bg,Bg=!1,y}function Es(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&yd(t,r,a)}i=i.next}while(i!==n)}}function zu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function xd(e){var t=e.ref;if(t!==null){var r=e.stateNode;e.tag,e=r,typeof t=="function"?t(e):t.current=e}}function Lv(e){var t=e.alternate;t!==null&&(e.alternate=null,Lv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Cn],delete t[Os],delete t[od],delete t[XS],delete t[jS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nv(e){return e.tag===5||e.tag===3||e.tag===4}function Vg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sd(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=mu));else if(n!==4&&(e=e.child,e!==null))for(Sd(e,t,r),e=e.sibling;e!==null;)Sd(e,t,r),e=e.sibling}function Md(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Md(e,t,r),e=e.sibling;e!==null;)Md(e,t,r),e=e.sibling}var Kt=null,ln=!1;function ci(e,t,r){for(r=r.child;r!==null;)Iv(e,t,r),r=r.sibling}function Iv(e,t,r){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(Lu,r)}catch{}switch(r.tag){case 5:cr||Xa(r,t);case 6:var n=Kt,i=ln;Kt=null,ci(e,t,r),Kt=n,ln=i,Kt!==null&&(ln?(e=Kt,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Kt.removeChild(r.stateNode));break;case 18:Kt!==null&&(ln?(e=Kt,r=r.stateNode,e.nodeType===8?Th(e.parentNode,r):e.nodeType===1&&Th(e,r),Ns(e)):Th(Kt,r.stateNode));break;case 4:n=Kt,i=ln,Kt=r.stateNode.containerInfo,ln=!0,ci(e,t,r),Kt=n,ln=i;break;case 0:case 11:case 14:case 15:if(!cr&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&((a&2)!==0||(a&4)!==0)&&yd(r,t,o),i=i.next}while(i!==n)}ci(e,t,r);break;case 1:if(!cr&&(Xa(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){Ot(r,t,s)}ci(e,t,r);break;case 21:ci(e,t,r);break;case 22:r.mode&1?(cr=(n=cr)||r.memoizedState!==null,ci(e,t,r),cr=n):ci(e,t,r);break;default:ci(e,t,r)}}function Hg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new lM),t.forEach(function(n){var i=_M.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function on(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:Kt=s.stateNode,ln=!1;break e;case 3:Kt=s.stateNode.containerInfo,ln=!0;break e;case 4:Kt=s.stateNode.containerInfo,ln=!0;break e}s=s.return}if(Kt===null)throw Error(le(160));Iv(a,o,i),Kt=null,ln=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ot(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Dv(t,e),t=t.sibling}function Dv(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(on(t,e),bn(e),n&4){try{Es(3,e,e.return),zu(3,e)}catch(_){Ot(e,e.return,_)}try{Es(5,e,e.return)}catch(_){Ot(e,e.return,_)}}break;case 1:on(t,e),bn(e),n&512&&r!==null&&Xa(r,r.return);break;case 5:if(on(t,e),bn(e),n&512&&r!==null&&Xa(r,r.return),e.flags&32){var i=e.stateNode;try{Cs(i,"")}catch(_){Ot(e,e.return,_)}}if(n&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=r!==null?r.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&r0(i,a),jh(s,o);var u=jh(s,a);for(o=0;o<l.length;o+=2){var c=l[o],p=l[o+1];c==="style"?s0(i,p):c==="dangerouslySetInnerHTML"?a0(i,p):c==="children"?Cs(i,p):Rd(i,c,p,u)}switch(s){case"input":Vh(i,a);break;case"textarea":n0(i,a);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var f=a.value;f!=null?$a(i,!!a.multiple,f,!1):d!==!!a.multiple&&(a.defaultValue!=null?$a(i,!!a.multiple,a.defaultValue,!0):$a(i,!!a.multiple,a.multiple?[]:"",!1))}i[Os]=a}catch(_){Ot(e,e.return,_)}}break;case 6:if(on(t,e),bn(e),n&4){if(e.stateNode===null)throw Error(le(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(_){Ot(e,e.return,_)}}break;case 3:if(on(t,e),bn(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Ns(t.containerInfo)}catch(_){Ot(e,e.return,_)}break;case 4:on(t,e),bn(e);break;case 13:on(t,e),bn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(lp=zt())),n&4&&Hg(e);break;case 22:if(c=r!==null&&r.memoizedState!==null,e.mode&1?(cr=(u=cr)||c,on(t,e),cr=u):on(t,e),bn(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(Pe=e,c=e.child;c!==null;){for(p=Pe=c;Pe!==null;){switch(d=Pe,f=d.child,d.tag){case 0:case 11:case 14:case 15:Es(4,d,d.return);break;case 1:Xa(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){n=d,r=d.return;try{t=n,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(_){Ot(n,r,_)}}break;case 5:Xa(d,d.return);break;case 22:if(d.memoizedState!==null){Wg(p);continue}}f!==null?(f.return=d,Pe=f):Wg(p)}c=c.sibling}e:for(c=null,p=e;;){if(p.tag===5){if(c===null){c=p;try{i=p.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=o0("display",o))}catch(_){Ot(e,e.return,_)}}}else if(p.tag===6){if(c===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(_){Ot(e,e.return,_)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;c===p&&(c=null),p=p.return}c===p&&(c=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:on(t,e),bn(e),n&4&&Hg(e);break;case 21:break;default:on(t,e),bn(e)}}function bn(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Nv(r)){var n=r;break e}r=r.return}throw Error(le(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Cs(i,""),n.flags&=-33);var a=Vg(e);Md(e,a,i);break;case 3:case 4:var o=n.stateNode.containerInfo,s=Vg(e);Sd(e,s,o);break;default:throw Error(le(161))}}catch(l){Ot(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cM(e,t,r){Pe=e,Uv(e,t,r)}function Uv(e,t,r){for(var n=(e.mode&1)!==0;Pe!==null;){var i=Pe,a=i.child;if(i.tag===22&&n){var o=i.memoizedState!==null||ql;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||cr;s=ql;var u=cr;if(ql=o,(cr=l)&&!u)for(Pe=i;Pe!==null;)o=Pe,l=o.child,o.tag===22&&o.memoizedState!==null?Xg(i):l!==null?(l.return=o,Pe=l):Xg(i);for(;a!==null;)Pe=a,Uv(a,t,r),a=a.sibling;Pe=i,ql=s,cr=u}Gg(e,t,r)}else(i.subtreeFlags&8772)!==0&&a!==null?(a.return=i,Pe=a):Gg(e,t,r)}}function Gg(e){for(;Pe!==null;){var t=Pe;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:cr||zu(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!cr)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:sn(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Ag(t,a,n);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Ag(t,o,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var p=c.dehydrated;p!==null&&Ns(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(le(163))}cr||t.flags&512&&xd(t)}catch(d){Ot(t,t.return,d)}}if(t===e){Pe=null;break}if(r=t.sibling,r!==null){r.return=t.return,Pe=r;break}Pe=t.return}}function Wg(e){for(;Pe!==null;){var t=Pe;if(t===e){Pe=null;break}var r=t.sibling;if(r!==null){r.return=t.return,Pe=r;break}Pe=t.return}}function Xg(e){for(;Pe!==null;){var t=Pe;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{zu(4,t)}catch(l){Ot(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(l){Ot(t,i,l)}}var a=t.return;try{xd(t)}catch(l){Ot(t,a,l)}break;case 5:var o=t.return;try{xd(t)}catch(l){Ot(t,o,l)}}}catch(l){Ot(t,t.return,l)}if(t===e){Pe=null;break}var s=t.sibling;if(s!==null){s.return=t.return,Pe=s;break}Pe=t.return}}var hM=Math.ceil,bu=$n.ReactCurrentDispatcher,op=$n.ReactCurrentOwner,qr=$n.ReactCurrentBatchConfig,ut=0,Zt=null,Gt=null,er=0,Dr=0,ja=Ci(0),jt=0,Gs=null,aa=0,Bu=0,sp=0,Ts=null,Cr=null,lp=0,ao=1/0,Fn=null,Au=!1,wd=null,Mi=null,Zl=!1,gi=null,Cu=0,bs=0,Ed=null,iu=-1,au=0;function xr(){return(ut&6)!==0?zt():iu!==-1?iu:iu=zt()}function wi(e){return(e.mode&1)===0?1:(ut&2)!==0&&er!==0?er&-er:YS.transition!==null?(au===0&&(au=y0()),au):(e=dt,e!==0||(e=window.event,e=e===void 0?16:b0(e.type)),e)}function hn(e,t,r,n){if(50<bs)throw bs=0,Ed=null,Error(le(185));Ws(e,r,n),((ut&2)===0||e!==Zt)&&(e===Zt&&((ut&2)===0&&(Bu|=r),jt===4&&fi(e,er)),Nr(e,n),r===1&&ut===0&&(t.mode&1)===0&&(ao=zt()+500,ku&&Ri()))}function Nr(e,t){var r=e.callbackNode;Zx(e,t);var n=hu(e,e===Zt?er:0);if(n===0)r!==null&&Km(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Km(r),t===1)e.tag===0?$S(jg.bind(null,e)):X0(jg.bind(null,e)),GS(function(){(ut&6)===0&&Ri()}),r=null;else{switch(x0(n)){case 1:r=Dd;break;case 4:r=v0;break;case 16:r=cu;break;case 536870912:r=_0;break;default:r=cu}r=Gv(r,kv.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function kv(e,t){if(iu=-1,au=0,(ut&6)!==0)throw Error(le(327));var r=e.callbackNode;if(Qa()&&e.callbackNode!==r)return null;var n=hu(e,e===Zt?er:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=Ru(e,n);else{t=n;var i=ut;ut|=2;var a=Fv();(Zt!==e||er!==t)&&(Fn=null,ao=zt()+500,ea(e,t));do try{fM();break}catch(s){Ov(e,s)}while(!0);$d(),bu.current=a,ut=i,Gt!==null?t=0:(Zt=null,er=0,t=jt)}if(t!==0){if(t===2&&(i=Jh(e),i!==0&&(n=i,t=Td(e,i))),t===1)throw r=Gs,ea(e,0),fi(e,n),Nr(e,zt()),r;if(t===6)fi(e,n);else{if(i=e.current.alternate,(n&30)===0&&!dM(i)&&(t=Ru(e,n),t===2&&(a=Jh(e),a!==0&&(n=a,t=Td(e,a))),t===1))throw r=Gs,ea(e,0),fi(e,n),Nr(e,zt()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(le(345));case 2:Zi(e,Cr,Fn);break;case 3:if(fi(e,n),(n&130023424)===n&&(t=lp+500-zt(),10<t)){if(hu(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){xr(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ad(Zi.bind(null,e,Cr,Fn),t);break}Zi(e,Cr,Fn);break;case 4:if(fi(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var o=31-cn(n);a=1<<o,o=t[o],o>i&&(i=o),n&=~a}if(n=i,n=zt()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*hM(n/1960))-n,10<n){e.timeoutHandle=ad(Zi.bind(null,e,Cr,Fn),n);break}Zi(e,Cr,Fn);break;case 5:Zi(e,Cr,Fn);break;default:throw Error(le(329))}}}return Nr(e,zt()),e.callbackNode===r?kv.bind(null,e):null}function Td(e,t){var r=Ts;return e.current.memoizedState.isDehydrated&&(ea(e,t).flags|=256),e=Ru(e,t),e!==2&&(t=Cr,Cr=r,t!==null&&bd(t)),e}function bd(e){Cr===null?Cr=e:Cr.push.apply(Cr,e)}function dM(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],a=i.getSnapshot;i=i.value;try{if(!dn(a(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fi(e,t){for(t&=~sp,t&=~Bu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-cn(t),n=1<<r;e[r]=-1,t&=~n}}function jg(e){if((ut&6)!==0)throw Error(le(327));Qa();var t=hu(e,0);if((t&1)===0)return Nr(e,zt()),null;var r=Ru(e,t);if(e.tag!==0&&r===2){var n=Jh(e);n!==0&&(t=n,r=Td(e,n))}if(r===1)throw r=Gs,ea(e,0),fi(e,t),Nr(e,zt()),r;if(r===6)throw Error(le(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zi(e,Cr,Fn),Nr(e,zt()),null}function up(e,t){var r=ut;ut|=1;try{return e(t)}finally{ut=r,ut===0&&(ao=zt()+500,ku&&Ri())}}function oa(e){gi!==null&&gi.tag===0&&(ut&6)===0&&Qa();var t=ut;ut|=1;var r=qr.transition,n=dt;try{if(qr.transition=null,dt=1,e)return e()}finally{dt=n,qr.transition=r,ut=t,(ut&6)===0&&Ri()}}function cp(){Dr=ja.current,At(ja)}function ea(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,HS(r)),Gt!==null)for(r=Gt.return;r!==null;){var n=r;switch(Wd(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&gu();break;case 3:no(),At(Pr),At(hr),Kd();break;case 5:Qd(n);break;case 4:no();break;case 13:At(It);break;case 19:At(It);break;case 10:Yd(n.type._context);break;case 22:case 23:cp()}r=r.return}if(Zt=e,Gt=e=Ei(e.current,null),er=Dr=t,jt=0,Gs=null,sp=Bu=aa=0,Cr=Ts=null,Qi!==null){for(t=0;t<Qi.length;t++)if(r=Qi[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,a=r.pending;if(a!==null){var o=a.next;a.next=i,n.next=o}r.pending=n}Qi=null}return e}function Ov(e,t){do{var r=Gt;try{if($d(),tu.current=Tu,Eu){for(var n=Dt.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Eu=!1}if(ia=0,qt=Xt=Dt=null,ws=!1,Bs=0,op.current=null,r===null||r.return===null){jt=1,Gs=t,Gt=null;break}e:{var a=e,o=r.return,s=r,l=t;if(t=er,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,p=c.tag;if((c.mode&1)===0&&(p===0||p===11||p===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=Ig(o);if(f!==null){f.flags&=-257,Dg(f,o,s,a,t),f.mode&1&&Ng(a,u,t),t=f,l=u;var y=t.updateQueue;if(y===null){var _=new Set;_.add(l),t.updateQueue=_}else y.add(l);break e}else{if((t&1)===0){Ng(a,u,t),hp();break e}l=Error(le(426))}}else if(Lt&&s.mode&1){var v=Ig(o);if(v!==null){(v.flags&65536)===0&&(v.flags|=256),Dg(v,o,s,a,t),Xd(io(l,s));break e}}a=l=io(l,s),jt!==4&&(jt=2),Ts===null?Ts=[a]:Ts.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var h=xv(a,l,t);bg(a,h);break e;case 1:s=l;var m=a.type,g=a.stateNode;if((a.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Mi===null||!Mi.has(g)))){a.flags|=65536,t&=-t,a.lanes|=t;var x=Sv(a,s,t);bg(a,x);break e}}a=a.return}while(a!==null)}Bv(r)}catch(L){t=L,Gt===r&&r!==null&&(Gt=r=r.return);continue}break}while(!0)}function Fv(){var e=bu.current;return bu.current=Tu,e===null?Tu:e}function hp(){(jt===0||jt===3||jt===2)&&(jt=4),Zt===null||(aa&268435455)===0&&(Bu&268435455)===0||fi(Zt,er)}function Ru(e,t){var r=ut;ut|=2;var n=Fv();(Zt!==e||er!==t)&&(Fn=null,ea(e,t));do try{pM();break}catch(i){Ov(e,i)}while(!0);if($d(),ut=r,bu.current=n,Gt!==null)throw Error(le(261));return Zt=null,er=0,jt}function pM(){for(;Gt!==null;)zv(Gt)}function fM(){for(;Gt!==null&&!Vx();)zv(Gt)}function zv(e){var t=Hv(e.alternate,e,Dr);e.memoizedProps=e.pendingProps,t===null?Bv(e):Gt=t,op.current=null}function Bv(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=oM(r,t,Dr),r!==null){Gt=r;return}}else{if(r=sM(r,t),r!==null){r.flags&=32767,Gt=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{jt=6,Gt=null;return}}if(t=t.sibling,t!==null){Gt=t;return}Gt=t=e}while(t!==null);jt===0&&(jt=5)}function Zi(e,t,r){var n=dt,i=qr.transition;try{qr.transition=null,dt=1,mM(e,t,r,n)}finally{qr.transition=i,dt=n}return null}function mM(e,t,r,n){do Qa();while(gi!==null);if((ut&6)!==0)throw Error(le(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(le(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(Jx(e,a),e===Zt&&(Gt=Zt=null,er=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Zl||(Zl=!0,Gv(cu,function(){return Qa(),null})),a=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||a){a=qr.transition,qr.transition=null;var o=dt;dt=1;var s=ut;ut|=4,op.current=null,uM(e,r),Dv(r,e),OS(nd),du=!!rd,nd=rd=null,e.current=r,cM(r,e,i),Hx(),ut=s,dt=o,qr.transition=a}else e.current=r;if(Zl&&(Zl=!1,gi=e,Cu=i),a=e.pendingLanes,a===0&&(Mi=null),Xx(r.stateNode,n),Nr(e,zt()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Au)throw Au=!1,e=wd,wd=null,e;return(Cu&1)!==0&&e.tag!==0&&Qa(),a=e.pendingLanes,(a&1)!==0?e===Ed?bs++:(bs=0,Ed=e):bs=0,Ri(),null}function Qa(){if(gi!==null){var e=x0(Cu),t=qr.transition,r=dt;try{if(qr.transition=null,dt=16>e?16:e,gi===null)var n=!1;else{if(e=gi,gi=null,Cu=0,(ut&6)!==0)throw Error(le(331));var i=ut;for(ut|=4,Pe=e.current;Pe!==null;){var a=Pe,o=a.child;if((Pe.flags&16)!==0){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(Pe=u;Pe!==null;){var c=Pe;switch(c.tag){case 0:case 11:case 15:Es(8,c,a)}var p=c.child;if(p!==null)p.return=c,Pe=p;else for(;Pe!==null;){c=Pe;var d=c.sibling,f=c.return;if(Lv(c),c===u){Pe=null;break}if(d!==null){d.return=f,Pe=d;break}Pe=f}}}var y=a.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var v=_.sibling;_.sibling=null,_=v}while(_!==null)}}Pe=a}}if((a.subtreeFlags&2064)!==0&&o!==null)o.return=a,Pe=o;else e:for(;Pe!==null;){if(a=Pe,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:Es(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,Pe=h;break e}Pe=a.return}}var m=e.current;for(Pe=m;Pe!==null;){o=Pe;var g=o.child;if((o.subtreeFlags&2064)!==0&&g!==null)g.return=o,Pe=g;else e:for(o=m;Pe!==null;){if(s=Pe,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:zu(9,s)}}catch(L){Ot(s,s.return,L)}if(s===o){Pe=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,Pe=x;break e}Pe=s.return}}if(ut=i,Ri(),Rn&&typeof Rn.onPostCommitFiberRoot=="function")try{Rn.onPostCommitFiberRoot(Lu,e)}catch{}n=!0}return n}finally{dt=r,qr.transition=t}}return!1}function $g(e,t,r){t=io(r,t),t=xv(e,t,1),e=Si(e,t,1),t=xr(),e!==null&&(Ws(e,1,t),Nr(e,t))}function Ot(e,t,r){if(e.tag===3)$g(e,e,r);else for(;t!==null;){if(t.tag===3){$g(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Mi===null||!Mi.has(n))){e=io(r,e),e=Sv(t,e,1),t=Si(t,e,1),e=xr(),t!==null&&(Ws(t,1,e),Nr(t,e));break}}t=t.return}}function gM(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=xr(),e.pingedLanes|=e.suspendedLanes&r,Zt===e&&(er&r)===r&&(jt===4||jt===3&&(er&130023424)===er&&500>zt()-lp?ea(e,0):sp|=r),Nr(e,t)}function Vv(e,t){t===0&&((e.mode&1)===0?t=1:(t=kl,kl<<=1,(kl&130023424)===0&&(kl=4194304)));var r=xr();e=Xn(e,t),e!==null&&(Ws(e,t,r),Nr(e,r))}function vM(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Vv(e,r)}function _M(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(le(314))}n!==null&&n.delete(t),Vv(e,r)}var Hv;Hv=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pr.current)Rr=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return Rr=!1,aM(e,t,r);Rr=(e.flags&131072)!==0}else Rr=!1,Lt&&(t.flags&1048576)!==0&&j0(t,yu,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;nu(e,t),e=t.pendingProps;var i=eo(t,hr.current);Ja(t,r),i=tp(null,t,n,e,i,r);var a=rp();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Lr(n)?(a=!0,vu(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zd(t),i.updater=Fu,t.stateNode=i,i._reactInternals=t,dd(t,n,e,r),t=md(null,t,n,!0,a,r)):(t.tag=0,Lt&&a&&Gd(t),yr(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(nu(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=xM(n),e=sn(n,e),i){case 0:t=fd(null,t,n,e,r);break e;case 1:t=Og(null,t,n,e,r);break e;case 11:t=Ug(null,t,n,e,r);break e;case 14:t=kg(null,t,n,sn(n.type,e),r);break e}throw Error(le(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:sn(n,i),fd(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:sn(n,i),Og(e,t,n,i,r);case 3:e:{if(Tv(t),e===null)throw Error(le(387));n=t.pendingProps,a=t.memoizedState,i=a.element,Q0(e,t),Mu(t,n,null,r);var o=t.memoizedState;if(n=o.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=io(Error(le(423)),t),t=Fg(e,t,n,r,i);break e}else if(n!==i){i=io(Error(le(424)),t),t=Fg(e,t,n,r,i);break e}else for(Ur=xi(t.stateNode.containerInfo.firstChild),kr=t,Lt=!0,un=null,r=Z0(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(to(),n===i){t=jn(e,t,r);break e}yr(e,t,n,r)}t=t.child}return t;case 5:return K0(t),e===null&&ud(t),n=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,id(n,i)?o=null:a!==null&&id(n,a)&&(t.flags|=32),Ev(e,t),yr(e,t,o,r),t.child;case 6:return e===null&&ud(t),null;case 13:return bv(e,t,r);case 4:return Jd(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=ro(t,null,n,r):yr(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:sn(n,i),Ug(e,t,n,i,r);case 7:return yr(e,t,t.pendingProps,r),t.child;case 8:return yr(e,t,t.pendingProps.children,r),t.child;case 12:return yr(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,_t(xu,n._currentValue),n._currentValue=o,a!==null)if(dn(a.value,o)){if(a.children===i.children&&!Pr.current){t=jn(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===n){if(a.tag===1){l=Hn(-1,r&-r),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),cd(a.return,r,t),s.lanes|=r;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(le(341));o.lanes|=r,s=o.alternate,s!==null&&(s.lanes|=r),cd(o,r,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}yr(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Ja(t,r),i=Zr(i),n=n(i),t.flags|=1,yr(e,t,n,r),t.child;case 14:return n=t.type,i=sn(n,t.pendingProps),i=sn(n.type,i),kg(e,t,n,i,r);case 15:return Mv(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:sn(n,i),nu(e,t),t.tag=1,Lr(n)?(e=!0,vu(t)):e=!1,Ja(t,r),yv(t,n,i),dd(t,n,i,r),md(null,t,n,!0,e,r);case 19:return Av(e,t,r);case 22:return wv(e,t,r)}throw Error(le(156,t.tag))};function Gv(e,t){return g0(e,t)}function yM(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yr(e,t,r,n){return new yM(e,t,r,n)}function dp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xM(e){if(typeof e=="function")return dp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ld)return 11;if(e===Nd)return 14}return 2}function Ei(e,t){var r=e.alternate;return r===null?(r=Yr(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ou(e,t,r,n,i,a){var o=2;if(n=e,typeof e=="function")dp(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case ka:return ta(r.children,i,a,t);case Pd:o=8,i|=8;break;case kh:return e=Yr(12,r,t,i|2),e.elementType=kh,e.lanes=a,e;case Oh:return e=Yr(13,r,t,i),e.elementType=Oh,e.lanes=a,e;case Fh:return e=Yr(19,r,t,i),e.elementType=Fh,e.lanes=a,e;case Kg:return Vu(r,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Jg:o=10;break e;case Qg:o=9;break e;case Ld:o=11;break e;case Nd:o=14;break e;case hi:o=16,n=null;break e}throw Error(le(130,e==null?e:typeof e,""))}return t=Yr(o,r,t,i),t.elementType=e,t.type=n,t.lanes=a,t}function ta(e,t,r,n){return e=Yr(7,e,n,t),e.lanes=r,e}function Vu(e,t,r,n){return e=Yr(22,e,n,t),e.elementType=Kg,e.lanes=r,e.stateNode={isHidden:!1},e}function Ih(e,t,r){return e=Yr(6,e,null,t),e.lanes=r,e}function Dh(e,t,r){return t=Yr(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function SM(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vh(0),this.expirationTimes=vh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vh(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pp(e,t,r,n,i,a,o,s,l){return e=new SM(e,t,r,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Yr(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zd(a),e}function MM(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ua,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Wv(e){if(!e)return bi;e=e._reactInternals;e:{if(la(e)!==e||e.tag!==1)throw Error(le(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Lr(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(le(171))}if(e.tag===1){var r=e.type;if(Lr(r))return W0(e,r,t)}return t}function Xv(e,t,r,n,i,a,o,s,l){return e=pp(r,n,!0,e,i,a,o,s,l),e.context=Wv(null),r=e.current,n=xr(),i=wi(r),a=Hn(n,i),a.callback=t??null,Si(r,a,i),e.current.lanes=i,Ws(e,i,n),Nr(e,n),e}function Hu(e,t,r,n){var i=t.current,a=xr(),o=wi(i);return r=Wv(r),t.context===null?t.context=r:t.pendingContext=r,t=Hn(a,o),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Si(i,t,o),e!==null&&(hn(e,i,o,a),eu(e,i,o)),o}function Pu(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function Yg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function fp(e,t){Yg(e,t),(e=e.alternate)&&Yg(e,t)}function wM(){return null}var jv=typeof reportError=="function"?reportError:function(e){console.error(e)};function mp(e){this._internalRoot=e}Gu.prototype.render=mp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(le(409));Hu(e,t,null,null)};Gu.prototype.unmount=mp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;oa(function(){Hu(null,e,null,null)}),t[Wn]=null}};function Gu(e){this._internalRoot=e}Gu.prototype.unstable_scheduleHydration=function(e){if(e){var t=w0();e={blockedOn:null,target:e,priority:t};for(var r=0;r<pi.length&&t!==0&&t<pi[r].priority;r++);pi.splice(r,0,e),r===0&&T0(e)}};function gp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qg(){}function EM(e,t,r,n,i){if(i){if(typeof n=="function"){var a=n;n=function(){var u=Pu(o);a.call(u)}}var o=Xv(t,n,e,0,null,!1,!1,"",qg);return e._reactRootContainer=o,e[Wn]=o.current,Us(e.nodeType===8?e.parentNode:e),oa(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var s=n;n=function(){var u=Pu(l);s.call(u)}}var l=pp(e,0,!1,null,null,!1,!1,"",qg);return e._reactRootContainer=l,e[Wn]=l.current,Us(e.nodeType===8?e.parentNode:e),oa(function(){Hu(t,l,r,n)}),l}function Xu(e,t,r,n,i){var a=r._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=Pu(o);s.call(l)}}Hu(t,o,e,i)}else o=EM(r,t,e,i,n);return Pu(o)}S0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=gs(t.pendingLanes);r!==0&&(Ud(t,r|1),Nr(t,zt()),(ut&6)===0&&(ao=zt()+500,Ri()))}break;case 13:oa(function(){var n=Xn(e,1);if(n!==null){var i=xr();hn(n,e,1,i)}}),fp(e,1)}};kd=function(e){if(e.tag===13){var t=Xn(e,134217728);if(t!==null){var r=xr();hn(t,e,134217728,r)}fp(e,134217728)}};M0=function(e){if(e.tag===13){var t=wi(e),r=Xn(e,t);if(r!==null){var n=xr();hn(r,e,t,n)}fp(e,t)}};w0=function(){return dt};E0=function(e,t){var r=dt;try{return dt=e,t()}finally{dt=r}};Yh=function(e,t,r){switch(t){case"input":if(Vh(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Uu(n);if(!i)throw Error(le(90));t0(n),Vh(n,i)}}}break;case"textarea":n0(e,r);break;case"select":t=r.value,t!=null&&$a(e,!!r.multiple,t,!1)}};c0=up;h0=oa;var TM={usingClientEntryPoint:!1,Events:[js,Ba,Uu,l0,u0,up]},ds={findFiberByHostInstance:Ji,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bM={bundleType:ds.bundleType,version:ds.version,rendererPackageName:ds.rendererPackageName,rendererConfig:ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$n.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=f0(e),e===null?null:e.stateNode},findFiberByHostInstance:ds.findFiberByHostInstance||wM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ps=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ps.isDisabled&&ps.supportsFiber))try{Lu=ps.inject(bM),Rn=ps}catch{}var ps;zr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TM;zr.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gp(t))throw Error(le(200));return MM(e,t,null,r)};zr.createRoot=function(e,t){if(!gp(e))throw Error(le(299));var r=!1,n="",i=jv;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=pp(e,1,!1,null,null,r,!1,n,i),e[Wn]=t.current,Us(e.nodeType===8?e.parentNode:e),new mp(t)};zr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(le(188)):(e=Object.keys(e).join(","),Error(le(268,e)));return e=f0(t),e=e===null?null:e.stateNode,e};zr.flushSync=function(e){return oa(e)};zr.hydrate=function(e,t,r){if(!Wu(t))throw Error(le(200));return Xu(null,e,t,!0,r)};zr.hydrateRoot=function(e,t,r){if(!gp(e))throw Error(le(405));var n=r!=null&&r.hydratedSources||null,i=!1,a="",o=jv;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=Xv(t,null,e,1,r??null,i,!1,a,o),e[Wn]=t.current,Us(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Gu(t)};zr.render=function(e,t,r){if(!Wu(t))throw Error(le(200));return Xu(null,e,t,!1,r)};zr.unmountComponentAtNode=function(e){if(!Wu(e))throw Error(le(40));return e._reactRootContainer?(oa(function(){Xu(null,null,e,!1,function(){e._reactRootContainer=null,e[Wn]=null})}),!0):!1};zr.unstable_batchedUpdates=up;zr.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Wu(r))throw Error(le(200));if(e==null||e._reactInternals===void 0)throw Error(le(38));return Xu(e,t,r,!1,n)};zr.version="18.3.1-next-f1338f8080-20240426"});var Zv=On((d3,qv)=>{"use strict";function Yv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yv)}catch(e){console.error(e)}}Yv(),qv.exports=$v()});var Qv=On(vp=>{"use strict";var Jv=Zv();vp.createRoot=Jv.createRoot,vp.hydrateRoot=Jv.hydrateRoot;var p3});var e_=On(ju=>{"use strict";var AM=Na(),CM=Symbol.for("react.element"),RM=Symbol.for("react.fragment"),PM=Object.prototype.hasOwnProperty,LM=AM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,NM={key:!0,ref:!0,__self:!0,__source:!0};function Kv(e,t,r){var n,i={},a=null,o=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)PM.call(t,n)&&!NM.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:CM,type:e,key:a,ref:o,props:i,_owner:LM.current}}ju.Fragment=RM;ju.jsx=Kv;ju.jsxs=Kv});var rr=On((g3,t_)=>{"use strict";t_.exports=e_()});var ex=Ht(Qv());var $u=Ht(Na()),_p=Ht(rr());var IM=()=>window.location.hash.slice(1).split("?")[0]||"/";function r_({children:e}){let[,t]=$u.default.useState(0);$u.default.useEffect(()=>{let i=()=>t(a=>a+1);return window.addEventListener("hashchange",i),()=>window.removeEventListener("hashchange",i)},[]);let r=$u.default.Children.toArray(e);return(r.find(i=>i.props.path===IM())||r[0]).props.element}var Yu=()=>null,ua=({to:e,...t})=>(0,_p.jsx)("a",{href:"#"+e,...t});var Ml=Ht(Na());var He={bride:"Aastha",groom:"Mayank",brideFull:"Aastha Agrawal",groomFull:"Mayank Singhal",brideHi:"\u0906\u0938\u094D\u0925\u093E",groomHi:"\u092E\u092F\u0902\u0915",brideSurnameHi:"\u0905\u0917\u094D\u0930\u0935\u093E\u0932",groomSurnameHi:"\u0938\u093F\u0902\u0918\u0932",weddingDate:"2026-11-22",venueName:"Agrasen Bhawan",venueNameHi:"\u0905\u0917\u094D\u0930\u0938\u0947\u0928 \u092D\u0935\u0928",venueCity:"Rourkela, Odisha",mapsQuery:"Agrasen Bhawan Rourkela",events:[{id:"sangeet",name:"Sangeet",hi:"\u0938\u0902\u0917\u0940\u0924",date:"2026-11-21",time:"7:30 PM",note:"An evening of songs, dance and family.",icon:"note",venue:"Maheswari Bhawan"},{id:"baraat",name:"Baraat & Jaimala",hi:"\u092C\u093E\u0930\u093E\u0924",date:"2026-11-22",time:"6:30 PM",note:"The groom arrives. The garlands are exchanged.",icon:"diya",venue:"Agrasen Bhawan"},{id:"pheras",name:"Pheras",hi:"\u092B\u0947\u0930\u0947",date:"2026-11-22",time:"9:00 PM",note:"Seven vows around the sacred fire.",icon:"flame",venue:"Agrasen Bhawan"}],countdownTo:"2026-11-22T18:30:00+05:30",family:"The Agrawal and Singhal families"};function Pi(e){let t=new Date(e+"T12:00:00+05:30"),r=n=>t.toLocaleDateString("en-IN",{timeZone:"Asia/Kolkata",...n});return{weekday:r({weekday:"long"}),day:r({day:"numeric"}),month:r({month:"long"}),monthShort:r({month:"short"}),year:r({year:"numeric"})}}function qu(){return"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(He.mapsQuery)}function Zu(){let e=He.events[He.events.length-2],r=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Wedding//EN","BEGIN:VEVENT","UID:aastha-mayank-wedding@invite","DTSTAMP:20261001T000000Z","DTSTART;TZID=Asia/Kolkata:"+"20261122T183000","DTEND;TZID=Asia/Kolkata:20261122T233000",`SUMMARY:${He.brideFull.split(" ")[0]} weds ${He.groom} (${e.name})`,`LOCATION:${He.venueName}\\, ${He.venueCity}`,"END:VEVENT","END:VCALENDAR"];return"data:text/calendar;charset=utf-8,"+encodeURIComponent(r.join(`\r
`))}var Bt=Ht(Na());var st=Ht(rr());function pn(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296}}function DM(){let[e,t]=(0,Bt.useState)(()=>typeof window<"u"&&!!window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches);return(0,Bt.useEffect)(()=>{if(!window.matchMedia)return;let r=window.matchMedia("(prefers-reduced-motion: reduce)"),n=()=>t(r.matches);return r.addEventListener?.("change",n),()=>r.removeEventListener?.("change",n)},[]),e}var a_=e=>Math.min(1,Math.max(0,e)),n_=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,UM=e=>e*e*(.6+.4*e),i_=e=>1-Math.pow(1-e,3),Ys=(e,t,r,n)=>n(a_((e-t)/(r-t)));function Ju(){let e=()=>{let n=typeof window<"u"?new URLSearchParams(window.location.search).get("H"):null;if(n)return parseInt(n,10);if(typeof window<"u"&&window.top===window.self&&!n)return Math.max(520,window.innerHeight);let i=typeof window<"u"&&window.screen&&window.screen.height||800,a=typeof window<"u"&&window.innerWidth||390;return Math.round(Math.max(500,Math.min(i-250,a*2,840)))},[t,r]=(0,Bt.useState)(e);return(0,Bt.useEffect)(()=>{let n=()=>r(e());return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),t}function Qu(e=6200){let t=typeof window<"u"?new URLSearchParams(window.location.search):new URLSearchParams,r=DM(),n=t.get("skip")!==null,i=t.get("p"),[a,o]=(0,Bt.useState)(n?"done":"idle"),[s,l]=(0,Bt.useState)(n),u=(0,Bt.useRef)(null),c=(0,Bt.useRef)(0),p=y=>{let _=u.current;if(!_)return;let v=_.style;v.setProperty("--p",String(y)),v.setProperty("--door",String(Ys(y,.06,.4,n_))),v.setProperty("--cam",String(Ys(y,.16,.98,UM))),v.setProperty("--glow",String(Ys(y,.3,.9,n_))),v.setProperty("--fade",String(Ys(y,.84,1,i_))),v.setProperty("--ui",String(1-Ys(y,0,.12,i_)))};return(0,Bt.useEffect)(()=>{r&&a==="idle"&&(o("done"),l(!0))},[r,a]),(0,Bt.useEffect)(()=>{a==="idle"&&i!==null&&p(parseFloat(i))},[a,i]),(0,Bt.useEffect)(()=>()=>cancelAnimationFrame(c.current),[]),{state:a,ready:s,ref:u,start:()=>{if(a!=="idle")return;o("opening");let y=performance.now(),_=!1,v=h=>{let m=a_((h-y)/e);p(m),m>.86&&!_&&(_=!0,l(!0)),m<1?c.current=requestAnimationFrame(v):o("done")};c.current=requestAnimationFrame(v)},skip:()=>{cancelAnimationFrame(c.current),p(1),l(!0),o("done")}}}function kM(e){let[t,r]=(0,Bt.useState)(()=>Date.now());(0,Bt.useEffect)(()=>{let a=setInterval(()=>r(Date.now()),1e3);return()=>clearInterval(a)},[]);let n=Math.max(0,new Date(e).getTime()-t),i=Math.floor(n/1e3);return{days:Math.floor(i/86400),hours:Math.floor(i%86400/3600),minutes:Math.floor(i%3600/60),seconds:i%60,done:n===0}}function Ku({cls:e}){let t=kM(He.countdownTo),r=[["Days",t.days],["Hours",t.hours],["Minutes",t.minutes],["Seconds",t.seconds]];return(0,st.jsx)("div",{className:e,role:"timer","aria-label":`${t.days} days, ${t.hours} hours, ${t.minutes} minutes and ${t.seconds} seconds until the wedding`,children:r.map(([n,i])=>(0,st.jsxs)("div",{className:"cd-cell",children:[(0,st.jsx)("span",{className:"cd-num","aria-hidden":"true",children:String(i).padStart(2,"0")}),(0,st.jsx)("span",{className:"cd-label","aria-hidden":"true",children:n})]},n))})}function nr({children:e,className:t="",delay:r=0,as:n="div"}){let i=(0,Bt.useRef)(null),[a,o]=(0,Bt.useState)(!1);return(0,Bt.useEffect)(()=>{let s=i.current;if(!s)return;if(!("IntersectionObserver"in window)){o(!0);return}let l=new IntersectionObserver(u=>u.forEach(c=>{c.isIntersecting&&(o(!0),l.disconnect())}),{threshold:.12});return l.observe(s),()=>l.disconnect()},[]),(0,st.jsx)(n,{ref:i,className:`reveal ${a?"in":""} ${t}`,style:{transitionDelay:`${r}ms`},children:e})}function ec({count:e=22,kind:t="petal",seed:r=7}){let n=(0,Bt.useMemo)(()=>{let i=pn(r);return Array.from({length:e},()=>({l:i()*100,d:i()*-20,t:12+i()*14,s:6+i()*10,x:(i()-.5)*120,rot:i()*360,o:.35+i()*.5}))},[e,r]);return(0,st.jsx)("div",{className:`drift drift-${t}`,"aria-hidden":"true",children:n.map((i,a)=>(0,st.jsx)("i",{style:{left:`${i.l}%`,animationDelay:`${i.d}s`,animationDuration:`${i.t}s`,width:i.s,height:i.s*(t==="petal"?1.4:1),"--dx":`${i.x}px`,"--r":`${i.rot}deg`,opacity:i.o}},a))})}function qs({name:e}){let t={fill:"none",stroke:"currentColor",strokeWidth:1.4,strokeLinecap:"round",strokeLinejoin:"round"},r={leaf:(0,st.jsxs)(st.Fragment,{children:[(0,st.jsx)("path",{d:"M6 26C6 14 14 7 26 6c0 12-7 20-20 20z",...t}),(0,st.jsx)("path",{d:"M6 26L19 13",...t})]}),sun:(0,st.jsxs)(st.Fragment,{children:[(0,st.jsx)("circle",{cx:"16",cy:"16",r:"5",...t}),Array.from({length:8},(n,i)=>{let a=i*Math.PI/4;return(0,st.jsx)("path",{d:`M${16+Math.cos(a)*8.5} ${16+Math.sin(a)*8.5}L${16+Math.cos(a)*12} ${16+Math.sin(a)*12}`,...t},i)})]}),note:(0,st.jsxs)(st.Fragment,{children:[(0,st.jsx)("path",{d:"M12 22V7l12-3v15",...t}),(0,st.jsx)("circle",{cx:"9.5",cy:"22",r:"2.6",...t}),(0,st.jsx)("circle",{cx:"21.5",cy:"19",r:"2.6",...t})]}),diya:(0,st.jsxs)(st.Fragment,{children:[(0,st.jsx)("path",{d:"M5 17c0 5 5 8 11 8s11-3 11-8z",...t}),(0,st.jsx)("path",{d:"M16 15c-3-3-2-6 0-9 2 3 3 6 0 9z",...t})]}),flame:(0,st.jsxs)(st.Fragment,{children:[(0,st.jsx)("path",{d:"M16 28c-6 0-9-4-9-8 0-5 5-7 5-13 4 2 6 5 6 8 2-1 3-3 3-5 3 3 4 6 4 10 0 5-4 8-9 8z",...t}),(0,st.jsx)("path",{d:"M16 28c-2.5 0-4-1.8-4-4 0-2.5 3-4 4-7 2 2 4 4 4 7 0 2.2-1.5 4-4 4z",...t})]}),pin:(0,st.jsxs)(st.Fragment,{children:[(0,st.jsx)("path",{d:"M16 29s9-8.5 9-15a9 9 0 10-18 0c0 6.5 9 15 9 15z",...t}),(0,st.jsx)("circle",{cx:"16",cy:"14",r:"3.4",...t})]})};return(0,st.jsx)("svg",{viewBox:"0 0 32 32",width:"32",height:"32","aria-hidden":"true",children:r[e]})}var I=Ht(rr()),yt=730,rt=600;function Jt(e,t,r,n,i,a=!0){let o=n-i;return`M${e-t} ${r}V${n}C${e-t} ${n-.55*o} ${e-t*.3} ${i+.3*o} ${e} ${i}C${e+t*.3} ${i+.3*o} ${e+t} ${n-.55*o} ${e+t} ${n}V${r}${a?"Z":""}`}var Zs=(e,t,r)=>`M${e-r} ${t}C${e-r} ${t-r*.95} ${e-r*.25} ${t-r*1.05} ${e} ${t-r*1.65}C${e+r*.25} ${t-r*1.05} ${e+r} ${t-r*.95} ${e+r} ${t}Z`;function s_({x:e,y:t,s:r=1}){return(0,I.jsxs)("g",{stroke:"#f4c75a",fill:"#f4c75a",children:[(0,I.jsx)("line",{x1:e,y1:t,x2:e,y2:t-20*r,strokeWidth:2*r}),(0,I.jsx)("circle",{cx:e,cy:t-24*r,r:4.5*r,stroke:"none"}),(0,I.jsx)("circle",{cx:e,cy:t-31*r,r:2.4*r,stroke:"none"})]})}function o_({x:e,y:t,s:r=1}){let n=34*r;return(0,I.jsxs)("g",{children:[(0,I.jsx)("path",{d:Zs(e,t-38*r,n*.62),fill:"url(#rDome)",stroke:"#f4c75a",strokeWidth:1.2}),(0,I.jsx)(s_,{x:e,y:t-38*r-n*.62*1.65,s:r*.7}),(0,I.jsx)("rect",{x:e-n*.7,y:t-40*r,width:n*1.4,height:4*r,fill:"#f4c75a"}),[-1,-.33,.33,1].map((i,a)=>(0,I.jsx)("rect",{x:e+i*n*.62-2*r,y:t-36*r,width:4*r,height:36*r,fill:"#8c2230",stroke:"#f4c75a",strokeWidth:.6},a)),(0,I.jsx)("rect",{x:e-n*.7,y:t-2,width:n*1.4,height:4*r,fill:"#f4c75a"})]})}function l_(){let e=pn(11),t=Array.from({length:190},()=>({x:-500+e()*2200,y:-200+e()*720,s:.6+e()*1.6,d:e()*5,t:2+e()*4}));return(0,I.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,I.jsxs)("defs",{children:[(0,I.jsxs)("linearGradient",{id:"rSky",gradientUnits:"userSpaceOnUse",x1:"0",y1:"0",x2:"0",y2:"900",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#14020a"}),(0,I.jsx)("stop",{offset:"0.35",stopColor:"#3a0714"}),(0,I.jsx)("stop",{offset:"0.62",stopColor:"#7d1a1c"}),(0,I.jsx)("stop",{offset:"0.8",stopColor:"#c8561f"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#f0a23a"})]}),(0,I.jsxs)("radialGradient",{id:"rMoon",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#ffe9a8",stopOpacity:"0.9"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#ffe9a8",stopOpacity:"0"})]}),(0,I.jsxs)("mask",{id:"rCres",children:[(0,I.jsx)("rect",{width:"1200",height:"900",fill:"#000"}),(0,I.jsx)("circle",{cx:"930",cy:"170",r:"34",fill:"#fff"}),(0,I.jsx)("circle",{cx:"948",cy:"160",r:"30",fill:"#000"})]})]}),(0,I.jsx)("rect",{x:"-2000",y:"-2000",width:"5200",height:"5400",fill:"url(#rSky)"}),t.map((r,n)=>(0,I.jsx)("circle",{className:"twinkle",cx:r.x,cy:r.y,r:r.s,fill:"#ffe7a6",style:{animationDelay:`${r.d}s`,animationDuration:`${r.t}s`}},n)),(0,I.jsx)("circle",{cx:"930",cy:"170",r:"120",fill:"url(#rMoon)",opacity:"0.5"}),(0,I.jsx)("rect",{width:"1200",height:"900",fill:"#ffe9a8",mask:"url(#rCres)"})]})}function u_(){let e=pn(5),t=[],r=-900,n=0;for(;r<2100;){let i=50+e()*90,a=120+e()*170,o=640-a,s=e();t.push((0,I.jsx)("rect",{x:r,y:o,width:i,height:a+100,fill:"#3a0a16"},"b"+n)),s<.45?t.push((0,I.jsx)("path",{d:Zs(r+i/2,o,i*.38),fill:"#3a0a16"},"d"+n)):s<.7&&t.push((0,I.jsxs)("g",{children:[(0,I.jsx)("rect",{x:r+i/2-4,y:o-70,width:"8",height:"70",fill:"#3a0a16"}),(0,I.jsx)("path",{d:Zs(r+i/2,o-70,9),fill:"#3a0a16"})]},"m"+n)),e()<.6&&t.push((0,I.jsx)("rect",{className:"flick",x:r+i*.3,y:o+24,width:"7",height:"12",rx:"3",fill:"#ffc45a",opacity:"0.8",style:{animationDelay:`${e()*4}s`}},"w"+n)),r+=i+2+e()*8,n++}return(0,I.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,I.jsx)("defs",{children:(0,I.jsxs)("linearGradient",{id:"rHaze",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,I.jsx)("stop",{offset:"0.5",stopColor:"#f0a23a",stopOpacity:"0"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#f0a23a",stopOpacity:"0.45"})]})}),(0,I.jsx)("g",{opacity:"0.95",children:t}),(0,I.jsx)("rect",{x:"-1500",y:"420",width:"4200",height:"320",fill:"url(#rHaze)"})]})}function c_(){let n=i=>{let s=i===1?870:330,l=i===1?870:-660,u=990;return(0,I.jsxs)("g",{children:[(0,I.jsx)("rect",{x:l,y:"470",width:u,height:yt-470,fill:"url(#rWall)"}),(0,I.jsx)("rect",{x:l,y:"470",width:u,height:"8",fill:"#f4c75a"}),Array.from({length:Math.floor(u/15)},(c,p)=>(0,I.jsx)("rect",{x:l+p*15+2,y:"458",width:"9",height:"12",fill:"#5a1220",stroke:"#f4c75a",strokeWidth:"0.6"},p)),Array.from({length:15},(c,p)=>{let d=i===1?s+66*p+33:s-66*p-33;return(0,I.jsxs)("g",{children:[(0,I.jsx)("path",{d:Jt(d,22,690,590,540),fill:"#ffb347",opacity:"0.92"}),(0,I.jsx)("path",{d:Jt(d,22,690,590,540),fill:"none",stroke:"#f4c75a",strokeWidth:"2.5"}),(0,I.jsx)("path",{d:Jt(d,31,690,590,528,!1),fill:"none",stroke:"#f4c75a",strokeWidth:"1",opacity:"0.7"}),(0,I.jsx)("path",{d:Jt(d,14,690,600,565),fill:"#7b1a10",opacity:"0.55"})]},p)}),(0,I.jsx)("rect",{x:l,y:yt-36,width:u,height:"6",fill:"#f4c75a",opacity:"0.8"}),[60,270,560].map((c,p)=>(0,I.jsx)(o_,{x:i===1?870+c:330-c,y:"458",s:1.15},p))]})};return(0,I.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,I.jsxs)("defs",{children:[(0,I.jsxs)("linearGradient",{id:"rWall",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#7a1626"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#4a0b18"})]}),(0,I.jsxs)("linearGradient",{id:"rDome",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#ffd77a"}),(0,I.jsx)("stop",{offset:"0.55",stopColor:"#d99a2b"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#8b4c10"})]}),(0,I.jsxs)("radialGradient",{id:"rInner",cx:"0.5",cy:"0.62",r:"0.65",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#fff3c4"}),(0,I.jsx)("stop",{offset:"0.35",stopColor:"#ffc55a"}),(0,I.jsx)("stop",{offset:"0.75",stopColor:"#d9732a"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#7a1c14"})]}),(0,I.jsxs)("linearGradient",{id:"rFloor",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#2a0710"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#12030a"})]}),(0,I.jsxs)("linearGradient",{id:"rSpill",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#ffd77a",stopOpacity:"0.95"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#ffb347",stopOpacity:"0"})]}),(0,I.jsxs)("radialGradient",{id:"rLamp",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#fff6cf"}),(0,I.jsx)("stop",{offset:"0.4",stopColor:"#ffd37a",stopOpacity:"0.8"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#ffb347",stopOpacity:"0"})]}),(0,I.jsxs)("mask",{id:"rHole",maskUnits:"userSpaceOnUse",x:"-2000",y:"-1000",width:"5200",height:"3000",children:[(0,I.jsx)("rect",{x:"-2000",y:"-1000",width:"5200",height:"3000",fill:"#fff"}),(0,I.jsx)("path",{d:Jt(rt,150,yt,400,262),fill:"#000"})]}),(0,I.jsx)("clipPath",{id:"rClipHole",children:(0,I.jsx)("path",{d:Jt(rt,150,yt,400,262)})})]}),(0,I.jsx)("rect",{x:"-2000",y:yt-4,width:"5200",height:"1400",fill:"url(#rFloor)"}),(0,I.jsxs)("g",{clipPath:"url(#rClipHole)",children:[(0,I.jsx)("rect",{x:"440",y:"240",width:"320",height:"500",fill:"url(#rInner)"}),[1,.78,.58,.42].map((i,a)=>(0,I.jsx)("path",{d:Jt(rt,150*.82*i,yt-40+a*6,410-a*4,306+(1-i)*140),fill:"none",stroke:"#7a1c14",strokeWidth:4-a*.7,opacity:.55-a*.06},a)),[-1,1].map(i=>[0,1,2].map(a=>(0,I.jsx)("rect",{x:rt+i*(118-a*26)-5+(i<0,0),y:420+a*22,width:"10",height:300-a*40,fill:"#5b1210",opacity:.5-a*.1},i+""+a))),(0,I.jsx)("circle",{className:"flick",cx:rt,cy:"355",r:"30",fill:"url(#rLamp)"}),(0,I.jsx)("circle",{cx:rt,cy:"355",r:"5",fill:"#fff6cf"}),(0,I.jsx)("path",{d:`M${rt-150} ${yt} L${rt+150} ${yt} L${rt+110} ${yt-70} L${rt-110} ${yt-70}Z`,fill:"#ffe08a",opacity:"0.35"})]}),(0,I.jsxs)("g",{mask:"url(#rHole)",children:[n(1),n(-1),[330,820].map(i=>(0,I.jsxs)("g",{children:[(0,I.jsx)("rect",{x:i,y:"130",width:"50",height:yt-130,fill:"url(#rWall)"}),(0,I.jsx)("rect",{x:i,y:"130",width:"50",height:"6",fill:"#f4c75a"}),[0,1,2,3].map(a=>(0,I.jsx)("path",{d:Jt(i+25,10,230+a*120,205+a*120,188+a*120),fill:"#ffb347",className:"flick",style:{animationDelay:`${a*.7}s`},opacity:"0.85"},a)),(0,I.jsx)(o_,{x:i+25,y:"130",s:1.1})]},i)),(0,I.jsx)("rect",{x:"380",y:"150",width:"440",height:yt-150,fill:"url(#rWall)"}),(0,I.jsx)("rect",{x:"380",y:"150",width:"440",height:"8",fill:"#f4c75a"}),(0,I.jsx)("rect",{x:"380",y:"164",width:"440",height:"3",fill:"#f4c75a",opacity:"0.6"}),Array.from({length:27},(i,a)=>(0,I.jsx)("rect",{x:382+a*16.2,y:"138",width:"9",height:"12",fill:"#5a1220",stroke:"#f4c75a",strokeWidth:"0.6"},a)),(0,I.jsx)("path",{d:Zs(rt,138,56),fill:"url(#rDome)",stroke:"#f4c75a",strokeWidth:"1.4"}),(0,I.jsx)("path",{d:Zs(rt,138,56),fill:"none",stroke:"#8b4c10",strokeWidth:"1",opacity:"0.4",transform:"translate(0 6) scale(1 1)"}),(0,I.jsx)(s_,{x:rt,y:138-56*1.65+4,s:1.5}),[-4,-3,-2,-1,1,2,3,4].map(i=>(0,I.jsxs)("g",{children:[(0,I.jsx)("path",{d:Jt(rt+i*46-(Math.abs(i)===1,0),15,250,218,190),fill:"#ffb347",className:"flick",style:{animationDelay:`${Math.abs(i)*.5}s`},opacity:"0.9"}),(0,I.jsx)("path",{d:Jt(rt+i*46,20,250,218,182,!1),fill:"none",stroke:"#f4c75a",strokeWidth:"1.4"})]},i)),[-1,1].map(i=>(0,I.jsxs)("g",{children:[(0,I.jsx)("rect",{x:i<0?400:780,y:"330",width:"20",height:"360",fill:"none"}),[0,1,2].map(a=>(0,I.jsx)("path",{d:Jt(rt+i*215,22,470+a*90,430+a*90,395+a*90),fill:"#3a0813",stroke:"#f4c75a",strokeWidth:"1.6"},a))]},i)),(0,I.jsx)("rect",{x:"380",y:"620",width:"440",height:"5",fill:"#f4c75a",opacity:"0.85"}),(0,I.jsx)("rect",{x:"380",y:yt-28,width:"440",height:"28",fill:"#2f0911"}),(0,I.jsx)("rect",{x:"380",y:yt-28,width:"440",height:"3",fill:"#f4c75a"})]}),(0,I.jsx)("path",{d:Jt(rt,150,yt,400,262),fill:"none",stroke:"#f4c75a",strokeWidth:"6"}),(0,I.jsx)("path",{d:Jt(rt,164,yt,392,232),fill:"none",stroke:"#f4c75a",strokeWidth:"2",opacity:"0.8"}),(0,I.jsx)("path",{d:Jt(rt,176,yt,386,206),fill:"none",stroke:"#c98a2b",strokeWidth:"1.2",opacity:"0.7"}),Array.from({length:26},(i,a)=>{let o=a/25,s=Math.PI*(.02+.96*o),l=rt-Math.cos(s)*164,u=392-Math.sin(s)*160*.98;return(0,I.jsx)("circle",{cx:l,cy:u,r:"2.4",fill:"#ffd77a",className:"twinkle",style:{animationDelay:`${a%7*.3}s`,animationDuration:"2.4s"}},a)}),(0,I.jsx)("path",{d:`M${rt-14} 232Q${rt} 200 ${rt+14} 232Q${rt} 218 ${rt-14} 232Z`,fill:"#f4c75a"}),[0,1,2].map(i=>(0,I.jsx)("path",{d:`M${rt-190-i*24} ${yt+i*14}H${rt+190+i*24}V${yt+14+i*14}H${rt-190-i*24}Z`,fill:i%2?"#2a0710":"#3a0b17",stroke:"#f4c75a",strokeWidth:"1",opacity:"0.95"},i))]})}function h_(){return(0,I.jsx)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:(0,I.jsx)("path",{d:`M${rt-150} ${yt} L${rt+150} ${yt} L${rt+420} 900 L${rt-420} 900Z`,fill:"url(#rSpill)",opacity:"0.85"})})}function d_(){let e=(t,r,n,i,a)=>Array.from({length:t},(o,s)=>(0,I.jsx)("path",{transform:`rotate(${360/t*s})`,d:`M0 ${-r}Q${i} ${(-r-n)/2} 0 ${-n}Q${-i} ${(-r-n)/2} 0 ${-r}Z`,fill:a},s));return(0,I.jsx)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:(0,I.jsxs)("g",{transform:`translate(${rt} ${yt+62}) scale(1 0.17)`,opacity:"0.95",children:[(0,I.jsx)("circle",{r:"250",fill:"#2a0710",opacity:"0.6"}),e(24,130,245,22,"#e8590c"),e(24,110,190,16,"#ffb938"),e(16,70,140,20,"#b3122e"),e(12,30,90,14,"#ffe08a"),(0,I.jsx)("circle",{r:"26",fill:"#ffd77a"}),(0,I.jsx)("circle",{r:"12",fill:"#b3122e"})]})})}function p_({x:e,y:t,r,i:n}){let i=["#ff9d1c","#ffb938","#e8590c","#ffa726"][n%4];return(0,I.jsxs)("g",{children:[(0,I.jsx)("circle",{cx:e,cy:t,r,fill:i}),(0,I.jsx)("circle",{cx:e,cy:t,r:r*.62,fill:i,stroke:"#fff3c4",strokeOpacity:"0.45",strokeWidth:"0.8"}),(0,I.jsx)("circle",{cx:e,cy:t,r:r*.28,fill:"#ffe08a",opacity:"0.8"})]})}function OM({x:e,len:t,seed:r,delay:n}){let i=pn(r),a=Math.floor(t/15);return(0,I.jsxs)("g",{className:"sway",style:{animationDelay:`${n}s`},children:[(0,I.jsx)("line",{x1:e,y1:"0",x2:e,y2:t,stroke:"#6b3b12",strokeWidth:"1"}),Array.from({length:a},(o,s)=>(0,I.jsx)(p_,{x:e+(i()-.5)*2,y:10+s*15,r:7+i()*2,i:s+r},s)),(0,I.jsx)("path",{d:`M${e-7} ${t+6}Q${e} ${t+26} ${e+7} ${t+6}Z`,fill:"#b3122e"})]})}function f_(){let e=pn(3),t=(n,i,a,o,s,l)=>{let u=pn(l),c=Math.floor((i-n)/15);return(0,I.jsxs)("g",{children:[(0,I.jsx)("path",{d:`M${n} ${a}Q${(n+i)/2} ${a+o*2} ${i} ${a}`,fill:"none",stroke:"#6b3b12",strokeWidth:"1.2"}),Array.from({length:c+1},(p,d)=>{let f=d/c,y=n+(i-n)*f,_=(1-f)*(1-f)*a+2*f*(1-f)*(a+o*2)+f*f*a;return(0,I.jsx)(p_,{x:y,y:_+3+u()*1.5,r:8+u()*2,i:d},d)})]},s)},r=(n,i,a,o)=>(0,I.jsxs)("g",{className:"swing",style:{animationDelay:`${a}s`},children:[(0,I.jsx)("line",{x1:n,y1:"0",x2:n,y2:i,stroke:"#c9952b",strokeWidth:"1.4"}),(0,I.jsx)("circle",{cx:n,cy:i+46,r:"64",fill:"url(#rLamp)",opacity:"0.6",className:"flick"}),(0,I.jsx)("path",{d:`M${n-6} ${i}h12l10 12h-32z`,fill:"#c9952b"}),(0,I.jsx)("path",{d:`M${n-22} ${i+12}Q${n-34} ${i+46} ${n-20} ${i+80}H${n+20}Q${n+34} ${i+46} ${n+22} ${i+12}Z`,fill:"#e0481e",stroke:"#ffd77a",strokeWidth:"1.6"}),(0,I.jsx)("path",{d:`M${n-8} ${i+12}Q${n-14} ${i+46} ${n-8} ${i+80}M${n+8} ${i+12}Q${n+14} ${i+46} ${n+8} ${i+80}`,stroke:"#ffd77a",strokeWidth:"1",fill:"none"}),(0,I.jsx)("rect",{x:n-20,y:i+80,width:"40",height:"5",fill:"#c9952b"}),(0,I.jsx)("path",{d:`M${n} ${i+85}v22`,stroke:"#c9952b",strokeWidth:"1.4"}),(0,I.jsx)("path",{d:`M${n-5} ${i+107}h10l-5 10z`,fill:"#ffd77a"})]},o);return(0,I.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,I.jsx)("defs",{children:(0,I.jsxs)("radialGradient",{id:"rLamp",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#fff6cf"}),(0,I.jsx)("stop",{offset:"0.4",stopColor:"#ffd37a",stopOpacity:"0.8"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#ffb347",stopOpacity:"0"})]})}),t(330,870,-6,30,"a",21),t(330,600,20,26,"b",22),t(600,870,20,26,"c",23),[380,420,460,500,540,660,700,740,780,820].map((n,i)=>(0,I.jsx)(OM,{x:n,len:46+i*37%60,seed:i+40,delay:i%5*.4},n)),r(345,0,0,"l1"),r(855,0,.9,"l2")]})}function m_(){return(0,I.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,I.jsx)("defs",{children:(0,I.jsxs)("radialGradient",{id:"rGlow",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#ffd37a",stopOpacity:"0.9"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#ffb347",stopOpacity:"0"})]})}),[440,500,560,640,700,760].map((t,r)=>{let n=838+r%2*8;return(0,I.jsxs)("g",{children:[(0,I.jsx)("circle",{className:"flick",cx:t,cy:n-8,r:"34",fill:"url(#rGlow)",style:{animationDelay:`${r*.3}s`}}),(0,I.jsx)("path",{d:`M${t-16} ${n}Q${t} ${n+16} ${t+16} ${n}Q${t+9} ${n+3} ${t} ${n+3}Q${t-9} ${n+3} ${t-16} ${n}Z`,fill:"#c25a1e",stroke:"#ffd77a",strokeWidth:"1"}),(0,I.jsx)("path",{className:"flame",d:`M${t} ${n-2}C${t-6} ${n-9} ${t-3} ${n-16} ${t} ${n-22}C${t+3} ${n-16} ${t+6} ${n-9} ${t} ${n-2}Z`,fill:"#fff1b8",style:{animationDelay:`${r*.25}s`}})]},t)})]})}function yp({side:e}){let t="rd"+e,r=(n,i,a,o,s,l)=>Array.from({length:n},(u,c)=>(0,I.jsx)("path",{transform:`translate(${rt} 520) rotate(${360/n*c})`,d:`M0 ${-i}Q${o} ${(-i-a)/2} 0 ${-a}Q${-o} ${(-i-a)/2} 0 ${-i}Z`,fill:l,stroke:s,strokeWidth:"1.1"},c));return(0,I.jsxs)("svg",{viewBox:`${e==="l"?450:600} 250 150 480`,className:"doorsvg",preserveAspectRatio:"none","aria-hidden":"true",children:[(0,I.jsxs)("defs",{children:[(0,I.jsx)("clipPath",{id:t+"c",children:(0,I.jsx)("path",{d:Jt(rt,150,yt,400,262)})}),(0,I.jsxs)("linearGradient",{id:t+"g",x1:"0",y1:"0",x2:"1",y2:"0",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#5a0f1c"}),(0,I.jsx)("stop",{offset:"0.5",stopColor:"#7d1628"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#4a0b16"})]}),(0,I.jsx)("pattern",{id:t+"p",width:"22",height:"22",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:(0,I.jsx)("path",{d:"M0 0H22M0 0V22",stroke:"#f4c75a",strokeWidth:"0.9",opacity:"0.38"})}),(0,I.jsxs)("radialGradient",{id:t+"b",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#fff0b0"}),(0,I.jsx)("stop",{offset:"0.6",stopColor:"#e0a53a"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#8b4c10"})]})]}),(0,I.jsxs)("g",{clipPath:`url(#${t}c)`,children:[(0,I.jsx)("rect",{x:"440",y:"240",width:"320",height:"500",fill:`url(#${t}g)`}),(0,I.jsx)("path",{d:Jt(rt,138,yt-14,405,285),fill:`url(#${t}p)`}),(0,I.jsx)("path",{d:Jt(rt,138,yt-14,405,285),fill:"none",stroke:"#f4c75a",strokeWidth:"2"}),(0,I.jsx)("path",{d:Jt(rt,120,yt-30,410,310),fill:"none",stroke:"#f4c75a",strokeWidth:"0.9",opacity:"0.7"}),(0,I.jsx)("rect",{x:"440",y:"412",width:"320",height:"6",fill:"#f4c75a",opacity:"0.9"}),(0,I.jsx)("rect",{x:"440",y:"672",width:"320",height:"6",fill:"#f4c75a",opacity:"0.9"}),r(16,40,96,20,"#f4c75a","#8c1d2c"),r(16,24,64,11,"#f4c75a","#f4c75a"),r(8,12,36,9,"#7a1424","#ffe08a"),(0,I.jsx)("circle",{cx:rt,cy:"520",r:"100",fill:"none",stroke:"#f4c75a",strokeWidth:"1.6"}),(0,I.jsx)("circle",{cx:rt,cy:"520",r:"108",fill:"none",stroke:"#f4c75a",strokeWidth:"0.8",strokeDasharray:"2 5"}),(0,I.jsx)("circle",{cx:rt,cy:"520",r:"13",fill:`url(#${t}b)`}),[0,1,2,3].map(n=>Array.from({length:6},(i,a)=>(0,I.jsx)("circle",{cx:456+a*25,cy:430+n*0+(n<2?n*0:0)+0,r:"0"},n+"_"+a))),Array.from({length:7},(n,i)=>(0,I.jsx)("circle",{cx:462+i*22,cy:"436",r:"3",fill:"#ffd77a",opacity:.9},"s"+i)),Array.from({length:7},(n,i)=>(0,I.jsx)("circle",{cx:462+i*22,cy:"654",r:"3",fill:"#ffd77a",opacity:.9},"t"+i)),Array.from({length:7},(n,i)=>(0,I.jsx)("circle",{cx:462+i*22,cy:"696",r:"3",fill:"#ffd77a",opacity:.9},"u"+i)),[e==="l"?584:616].map(n=>(0,I.jsxs)("g",{children:[(0,I.jsx)("circle",{cx:n,cy:"560",r:"7",fill:`url(#${t}b)`}),(0,I.jsx)("circle",{cx:n,cy:"574",r:"10",fill:"none",stroke:"#f4c75a",strokeWidth:"3"})]},n)),(0,I.jsx)("rect",{x:e==="l"?592:598,y:"250",width:"10",height:"480",fill:"#2a0710",opacity:"0.5"}),(0,I.jsx)("rect",{x:"440",y:"240",width:"320",height:"500",fill:"#000",opacity:"0.12"})]})]})}var FM=0,g_=1,zM=2,N1=1,BM=2,Kn=3,Hi=0,Tr=1,ti=2,Bi=0,ko=1,Vc=2,v_=3,__=4,VM=5,_a=100,HM=101,GM=102,WM=103,XM=104,jM=200,$M=201,YM=202,qM=203,sf=204,lf=205,ZM=206,JM=207,QM=208,KM=209,ew=210,tw=211,rw=212,nw=213,iw=214,uf=0,cf=1,hf=2,Bo=3,df=4,pf=5,ff=6,mf=7,I1=0,aw=1,ow=2,Vi=0,sw=1,lw=2,uw=3,D1=4,cw=5,hw=6,dw=7,U1=300,Vo=301,Ho=302,gf=303,vf=304,jc=306,Hc=1e3,Sa=1001,_f=1002,Wr=1003,pw=1004,tc=1005,In=1006,xp=1007,Ma=1008,ai=1009,k1=1010,O1=1011,fl=1012,rm=1013,wa=1014,Dn=1015,_l=1016,nm=1017,im=1018,Go=1020,F1=35902,z1=1021,B1=1022,Sn=1023,V1=1024,H1=1025,Oo=1026,Wo=1027,am=1028,om=1029,G1=1030,sm=1031,lm=1033,Ic=33776,Dc=33777,Uc=33778,kc=33779,yf=35840,xf=35841,Sf=35842,Mf=35843,wf=36196,Ef=37492,Tf=37496,bf=37808,Af=37809,Cf=37810,Rf=37811,Pf=37812,Lf=37813,Nf=37814,If=37815,Df=37816,Uf=37817,kf=37818,Of=37819,Ff=37820,zf=37821,Oc=36492,Bf=36494,Vf=36495,W1=36283,Hf=36284,Gf=36285,Wf=36286,Gc=2300,Xf=2301,Sp=2302,y_=2400,x_=2401,S_=2402,fw=3200,mw=3201,X1=0,gw=1,zi="",Hr="srgb",jo="srgb-linear",$c="linear",pt="srgb",lo=7680,M_=519,vw=512,_w=513,yw=514,j1=515,xw=516,Sw=517,Mw=518,ww=519,jf=35044,w_="300 es",ri=2e3,Wc=2001,$o=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let n=r.indexOf(t);n!==-1&&r.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let r=t.slice(0);for(let n=0,i=r.length;n<i;n++)r[n].call(this,e);e.target=null}}},dr=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mp=Math.PI/180,$f=180/Math.PI;function ni(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dr[e&255]+dr[e>>8&255]+dr[e>>16&255]+dr[e>>24&255]+"-"+dr[t&255]+dr[t>>8&255]+"-"+dr[t>>16&15|64]+dr[t>>24&255]+"-"+dr[r&63|128]+dr[r>>8&255]+"-"+dr[r>>16&255]+dr[r>>24&255]+dr[n&255]+dr[n>>8&255]+dr[n>>16&255]+dr[n>>24&255]).toLowerCase()}function ir(e,t,r){return Math.max(t,Math.min(r,e))}function Ew(e,t){return(e%t+t)%t}function wp(e,t,r){return(1-r)*e+r*t}function Nn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function ft(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var he=class $1{constructor(t=0,r=0){$1.prototype.isVector2=!0,this.x=t,this.y=r}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,r){return this.x=t,this.y=r,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let r=this.x,n=this.y,i=t.elements;return this.x=i[0]*r+i[3]*n+i[6],this.y=i[1]*r+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this}clampLength(t,r){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(r,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let r=Math.sqrt(this.lengthSq()*t.lengthSq());if(r===0)return Math.PI/2;let n=this.dot(t)/r;return Math.acos(ir(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let r=this.x-t.x,n=this.y-t.y;return r*r+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this}lerpVectors(t,r,n){return this.x=t.x+(r.x-t.x)*n,this.y=t.y+(r.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this}rotateAround(t,r){let n=Math.cos(r),i=Math.sin(r),a=this.x-t.x,o=this.y-t.y;return this.x=a*n-o*i+t.x,this.y=a*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},at=class Y1{constructor(t,r,n,i,a,o,s,l,u){Y1.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,r,n,i,a,o,s,l,u)}set(t,r,n,i,a,o,s,l,u){let c=this.elements;return c[0]=t,c[1]=i,c[2]=s,c[3]=r,c[4]=a,c[5]=l,c[6]=n,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let r=this.elements,n=t.elements;return r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[3],r[4]=n[4],r[5]=n[5],r[6]=n[6],r[7]=n[7],r[8]=n[8],this}extractBasis(t,r,n){return t.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let r=t.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,r){let n=t.elements,i=r.elements,a=this.elements,o=n[0],s=n[3],l=n[6],u=n[1],c=n[4],p=n[7],d=n[2],f=n[5],y=n[8],_=i[0],v=i[3],h=i[6],m=i[1],g=i[4],x=i[7],L=i[2],T=i[5],b=i[8];return a[0]=o*_+s*m+l*L,a[3]=o*v+s*g+l*T,a[6]=o*h+s*x+l*b,a[1]=u*_+c*m+p*L,a[4]=u*v+c*g+p*T,a[7]=u*h+c*x+p*b,a[2]=d*_+f*m+y*L,a[5]=d*v+f*g+y*T,a[8]=d*h+f*x+y*b,this}multiplyScalar(t){let r=this.elements;return r[0]*=t,r[3]*=t,r[6]*=t,r[1]*=t,r[4]*=t,r[7]*=t,r[2]*=t,r[5]*=t,r[8]*=t,this}determinant(){let t=this.elements,r=t[0],n=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],c=t[8];return r*o*c-r*s*u-n*a*c+n*s*l+i*a*u-i*o*l}invert(){let t=this.elements,r=t[0],n=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],c=t[8],p=c*o-s*u,d=s*l-c*a,f=u*a-o*l,y=r*p+n*d+i*f;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/y;return t[0]=p*_,t[1]=(i*u-c*n)*_,t[2]=(s*n-i*o)*_,t[3]=d*_,t[4]=(c*r-i*l)*_,t[5]=(i*a-s*r)*_,t[6]=f*_,t[7]=(n*l-u*r)*_,t[8]=(o*r-n*a)*_,this}transpose(){let t,r=this.elements;return t=r[1],r[1]=r[3],r[3]=t,t=r[2],r[2]=r[6],r[6]=t,t=r[5],r[5]=r[7],r[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let r=this.elements;return t[0]=r[0],t[1]=r[3],t[2]=r[6],t[3]=r[1],t[4]=r[4],t[5]=r[7],t[6]=r[2],t[7]=r[5],t[8]=r[8],this}setUvTransform(t,r,n,i,a,o,s){let l=Math.cos(a),u=Math.sin(a);return this.set(n*l,n*u,-n*(l*o+u*s)+o+t,-i*u,i*l,-i*(-u*o+l*s)+s+r,0,0,1),this}scale(t,r){return this.premultiply(Ep.makeScale(t,r)),this}rotate(t){return this.premultiply(Ep.makeRotation(-t)),this}translate(t,r){return this.premultiply(Ep.makeTranslation(t,r)),this}makeTranslation(t,r){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,r,0,0,1),this}makeRotation(t){let r=Math.cos(t),n=Math.sin(t);return this.set(r,-n,0,n,r,0,0,0,1),this}makeScale(t,r){return this.set(t,0,0,0,r,0,0,0,1),this}equals(t){let r=this.elements,n=t.elements;for(let i=0;i<9;i++)if(r[i]!==n[i])return!1;return!0}fromArray(t,r=0){for(let n=0;n<9;n++)this.elements[n]=t[n+r];return this}toArray(t=[],r=0){let n=this.elements;return t[r]=n[0],t[r+1]=n[1],t[r+2]=n[2],t[r+3]=n[3],t[r+4]=n[4],t[r+5]=n[5],t[r+6]=n[6],t[r+7]=n[7],t[r+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ep=new at;function q1(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Xc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Tw(){let e=Xc("canvas");return e.style.display="block",e}var E_={};function ul(e){e in E_||(E_[e]=!0,console.warn(e))}function bw(e,t,r){return new Promise(function(n,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,r);break;default:n()}}setTimeout(a,r)})}function Aw(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Cw(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ct={enabled:!0,workingColorSpace:jo,spaces:{},convert:function(e,t,r){return this.enabled===!1||t===r||!t||!r||(this.spaces[t].transfer===pt&&(e.r=ii(e.r),e.g=ii(e.g),e.b=ii(e.b)),this.spaces[t].primaries!==this.spaces[r].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===pt&&(e.r=Fo(e.r),e.g=Fo(e.g),e.b=Fo(e.b))),e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===zi?$c:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,r){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function ii(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Fo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var T_=[.64,.33,.3,.6,.15,.06],b_=[.2126,.7152,.0722],A_=[.3127,.329],C_=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),R_=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ct.define({[jo]:{primaries:T_,whitePoint:A_,transfer:$c,toXYZ:C_,fromXYZ:R_,luminanceCoefficients:b_,workingColorSpaceConfig:{unpackColorSpace:Hr},outputColorSpaceConfig:{drawingBufferColorSpace:Hr}},[Hr]:{primaries:T_,whitePoint:A_,transfer:pt,toXYZ:C_,fromXYZ:R_,luminanceCoefficients:b_,outputColorSpaceConfig:{drawingBufferColorSpace:Hr}}});var uo,Rw=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{uo===void 0&&(uo=Xc("canvas")),uo.width=e.width,uo.height=e.height;let r=uo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=uo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xc("canvas");t.width=e.width,t.height=e.height;let r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);let n=r.getImageData(0,0,e.width,e.height),i=n.data;for(let a=0;a<i.length;a++)i[a]=ii(i[a]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ii(t[r]/255)*255):t[r]=ii(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Pw=0,Z1=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pw++}),this.uuid=ni(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let i;if(Array.isArray(n)){i=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?i.push(Tp(n[a].image)):i.push(Tp(n[a]))}else i=Tp(n);r.url=i}return t||(e.images[this.uuid]=r),r}};function Tp(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Rw.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lw=0,Kr=class Fc extends $o{constructor(t=Fc.DEFAULT_IMAGE,r=Fc.DEFAULT_MAPPING,n=Sa,i=Sa,a=In,o=Ma,s=Sn,l=ai,u=Fc.DEFAULT_ANISOTROPY,c=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lw++}),this.uuid=ni(),this.name="",this.source=new Z1(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let r=t===void 0||typeof t=="string";if(!r&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),r||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==U1)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hc:t.x=t.x-Math.floor(t.x);break;case Sa:t.x=t.x<0?0:1;break;case _f:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hc:t.y=t.y-Math.floor(t.y);break;case Sa:t.y=t.y<0?0:1;break;case _f:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Kr.DEFAULT_IMAGE=null;Kr.DEFAULT_MAPPING=U1;Kr.DEFAULT_ANISOTROPY=1;var xt=class J1{constructor(t=0,r=0,n=0,i=1){J1.prototype.isVector4=!0,this.x=t,this.y=r,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,r,n,i){return this.x=t,this.y=r,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this.w=t.w+r.w,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this.z+=t.z*r,this.w+=t.w*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this.z=t.z-r.z,this.w=t.w-r.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let r=this.x,n=this.y,i=this.z,a=this.w,o=t.elements;return this.x=o[0]*r+o[4]*n+o[8]*i+o[12]*a,this.y=o[1]*r+o[5]*n+o[9]*i+o[13]*a,this.z=o[2]*r+o[6]*n+o[10]*i+o[14]*a,this.w=o[3]*r+o[7]*n+o[11]*i+o[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let r=Math.sqrt(1-t.w*t.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/r,this.y=t.y/r,this.z=t.z/r),this}setAxisAngleFromRotationMatrix(t){let r,n,i,a,o=t.elements,s=o[0],l=o[4],u=o[8],c=o[1],p=o[5],d=o[9],f=o[2],y=o[6],_=o[10];if(Math.abs(l-c)<.01&&Math.abs(u-f)<.01&&Math.abs(d-y)<.01){if(Math.abs(l+c)<.1&&Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(s+p+_-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;let h=(s+1)/2,m=(p+1)/2,g=(_+1)/2,x=(l+c)/4,L=(u+f)/4,T=(d+y)/4;return h>m&&h>g?h<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(h),i=x/n,a=L/n):m>g?m<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(m),n=x/i,a=T/i):g<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(g),n=L/a,i=T/a),this.set(n,i,a,r),this}let v=Math.sqrt((y-d)*(y-d)+(u-f)*(u-f)+(c-l)*(c-l));return Math.abs(v)<.001&&(v=1),this.x=(y-d)/v,this.y=(u-f)/v,this.z=(c-l)/v,this.w=Math.acos((s+p+_-1)/2),this}setFromMatrixPosition(t){let r=t.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this.w=r[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this.z=Math.max(t.z,Math.min(r.z,this.z)),this.w=Math.max(t.w,Math.min(r.w,this.w)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this.z=Math.max(t,Math.min(r,this.z)),this.w=Math.max(t,Math.min(r,this.w)),this}clampLength(t,r){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(r,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this.z+=(t.z-this.z)*r,this.w+=(t.w-this.w)*r,this}lerpVectors(t,r,n){return this.x=t.x+(r.x-t.x)*n,this.y=t.y+(r.y-t.y)*n,this.z=t.z+(r.z-t.z)*n,this.w=t.w+(r.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this.z=t[r+2],this.w=t[r+3],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t[r+2]=this.z,t[r+3]=this.w,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this.z=t.getZ(r),this.w=t.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Nw=class extends $o{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);let n={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);let i=new Kr(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);i.flipY=!1,i.generateMipmaps=r.generateMipmaps,i.internalFormat=r.internalFormat,this.textures=[];let a=r.count;for(let o=0;o<a;o++)this.textures[o]=i.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let n=0,i=this.textures.length;n<i;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,n=e.textures.length;r<n;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Z1(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ea=class extends Nw{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}},Q1=class extends Kr{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Wr,this.minFilter=Wr,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Iw=class extends Kr{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Wr,this.minFilter=Wr,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Yo=class{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,i,a,o){let s=r[n+0],l=r[n+1],u=r[n+2],c=r[n+3],p=i[a+0],d=i[a+1],f=i[a+2],y=i[a+3];if(o===0){e[t+0]=s,e[t+1]=l,e[t+2]=u,e[t+3]=c;return}if(o===1){e[t+0]=p,e[t+1]=d,e[t+2]=f,e[t+3]=y;return}if(c!==y||s!==p||l!==d||u!==f){let _=1-o,v=s*p+l*d+u*f+c*y,h=v>=0?1:-1,m=1-v*v;if(m>Number.EPSILON){let x=Math.sqrt(m),L=Math.atan2(x,v*h);_=Math.sin(_*L)/x,o=Math.sin(o*L)/x}let g=o*h;if(s=s*_+p*g,l=l*_+d*g,u=u*_+f*g,c=c*_+y*g,_===1-o){let x=1/Math.sqrt(s*s+l*l+u*u+c*c);s*=x,l*=x,u*=x,c*=x}}e[t]=s,e[t+1]=l,e[t+2]=u,e[t+3]=c}static multiplyQuaternionsFlat(e,t,r,n,i,a){let o=r[n],s=r[n+1],l=r[n+2],u=r[n+3],c=i[a],p=i[a+1],d=i[a+2],f=i[a+3];return e[t]=o*f+u*c+s*d-l*p,e[t+1]=s*f+u*p+l*c-o*d,e[t+2]=l*f+u*d+o*p-s*c,e[t+3]=u*f-o*c-s*p-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let r=e._x,n=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,l=o(r/2),u=o(n/2),c=o(i/2),p=s(r/2),d=s(n/2),f=s(i/2);switch(a){case"XYZ":this._x=p*u*c+l*d*f,this._y=l*d*c-p*u*f,this._z=l*u*f+p*d*c,this._w=l*u*c-p*d*f;break;case"YXZ":this._x=p*u*c+l*d*f,this._y=l*d*c-p*u*f,this._z=l*u*f-p*d*c,this._w=l*u*c+p*d*f;break;case"ZXY":this._x=p*u*c-l*d*f,this._y=l*d*c+p*u*f,this._z=l*u*f+p*d*c,this._w=l*u*c-p*d*f;break;case"ZYX":this._x=p*u*c-l*d*f,this._y=l*d*c+p*u*f,this._z=l*u*f-p*d*c,this._w=l*u*c+p*d*f;break;case"YZX":this._x=p*u*c+l*d*f,this._y=l*d*c+p*u*f,this._z=l*u*f-p*d*c,this._w=l*u*c-p*d*f;break;case"XZY":this._x=p*u*c-l*d*f,this._y=l*d*c-p*u*f,this._z=l*u*f+p*d*c,this._w=l*u*c+p*d*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,r=t[0],n=t[4],i=t[8],a=t[1],o=t[5],s=t[9],l=t[2],u=t[6],c=t[10],p=r+o+c;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(u-s)*d,this._y=(i-l)*d,this._z=(a-n)*d}else if(r>o&&r>c){let d=2*Math.sqrt(1+r-o-c);this._w=(u-s)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(i+l)/d}else if(o>c){let d=2*Math.sqrt(1+o-r-c);this._w=(i-l)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(s+u)/d}else{let d=2*Math.sqrt(1+c-r-o);this._w=(a-n)/d,this._x=(i+l)/d,this._y=(s+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ir(this.dot(e),-1,1)))}rotateTowards(e,t){let r=this.angleTo(e);if(r===0)return this;let n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let r=e._x,n=e._y,i=e._z,a=e._w,o=t._x,s=t._y,l=t._z,u=t._w;return this._x=r*u+a*o+n*l-i*s,this._y=n*u+a*s+i*o-r*l,this._z=i*u+a*l+r*s-n*o,this._w=a*u-r*o-n*s-i*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let r=this._x,n=this._y,i=this._z,a=this._w,o=a*e._w+r*e._x+n*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=r,this._y=n,this._z=i,this;let s=1-o*o;if(s<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*r+t*this._x,this._y=d*n+t*this._y,this._z=d*i+t*this._z,this.normalize(),this}let l=Math.sqrt(s),u=Math.atan2(l,o),c=Math.sin((1-t)*u)/l,p=Math.sin(t*u)/l;return this._w=a*c+this._w*p,this._x=r*c+this._x*p,this._y=n*c+this._y*p,this._z=i*c+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),n=Math.sqrt(1-r),i=Math.sqrt(r);return this.set(n*Math.sin(e),n*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class K1{constructor(t=0,r=0,n=0){K1.prototype.isVector3=!0,this.x=t,this.y=r,this.z=n}set(t,r,n){return n===void 0&&(n=this.z),this.x=t,this.y=r,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this.z+=t.z*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this.z=t.z-r.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,r){return this.x=t.x*r.x,this.y=t.y*r.y,this.z=t.z*r.z,this}applyEuler(t){return this.applyQuaternion(P_.setFromEuler(t))}applyAxisAngle(t,r){return this.applyQuaternion(P_.setFromAxisAngle(t,r))}applyMatrix3(t){let r=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*r+a[3]*n+a[6]*i,this.y=a[1]*r+a[4]*n+a[7]*i,this.z=a[2]*r+a[5]*n+a[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let r=this.x,n=this.y,i=this.z,a=t.elements,o=1/(a[3]*r+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*r+a[4]*n+a[8]*i+a[12])*o,this.y=(a[1]*r+a[5]*n+a[9]*i+a[13])*o,this.z=(a[2]*r+a[6]*n+a[10]*i+a[14])*o,this}applyQuaternion(t){let r=this.x,n=this.y,i=this.z,a=t.x,o=t.y,s=t.z,l=t.w,u=2*(o*i-s*n),c=2*(s*r-a*i),p=2*(a*n-o*r);return this.x=r+l*u+o*p-s*c,this.y=n+l*c+s*u-a*p,this.z=i+l*p+a*c-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let r=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*r+a[4]*n+a[8]*i,this.y=a[1]*r+a[5]*n+a[9]*i,this.z=a[2]*r+a[6]*n+a[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this.z=Math.max(t.z,Math.min(r.z,this.z)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this.z=Math.max(t,Math.min(r,this.z)),this}clampLength(t,r){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(r,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this.z+=(t.z-this.z)*r,this}lerpVectors(t,r,n){return this.x=t.x+(r.x-t.x)*n,this.y=t.y+(r.y-t.y)*n,this.z=t.z+(r.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,r){let n=t.x,i=t.y,a=t.z,o=r.x,s=r.y,l=r.z;return this.x=i*l-a*s,this.y=a*o-n*l,this.z=n*s-i*o,this}projectOnVector(t){let r=t.lengthSq();if(r===0)return this.set(0,0,0);let n=t.dot(this)/r;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return bp.copy(this).projectOnVector(t),this.sub(bp)}reflect(t){return this.sub(bp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let r=Math.sqrt(this.lengthSq()*t.lengthSq());if(r===0)return Math.PI/2;let n=this.dot(t)/r;return Math.acos(ir(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let r=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return r*r+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,r,n){let i=Math.sin(r)*t;return this.x=i*Math.sin(n),this.y=Math.cos(r)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,r,n){return this.x=t*Math.sin(r),this.y=n,this.z=t*Math.cos(r),this}setFromMatrixPosition(t){let r=t.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(t){let r=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=r,this.y=n,this.z=i,this}setFromMatrixColumn(t,r){return this.fromArray(t.elements,r*4)}setFromMatrix3Column(t,r){return this.fromArray(t.elements,r*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this.z=t[r+2],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t[r+2]=this.z,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this.z=t.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,r=Math.random()*2-1,n=Math.sqrt(1-r*r);return this.x=n*Math.cos(t),this.y=r,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bp=new N,P_=new Yo,ba=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let r=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let r=e.geometry;if(r!==void 0){let i=r.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=i.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fn):fn.fromBufferAttribute(i,a),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),rc.copy(r.boundingBox)),rc.applyMatrix4(e.matrixWorld),this.union(rc)}let n=e.children;for(let i=0,a=n.length;i<a;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),nc.subVectors(this.max,Js),co.subVectors(e.a,Js),ho.subVectors(e.b,Js),po.subVectors(e.c,Js),Li.subVectors(ho,co),Ni.subVectors(po,ho),ca.subVectors(co,po);let t=[0,-Li.z,Li.y,0,-Ni.z,Ni.y,0,-ca.z,ca.y,Li.z,0,-Li.x,Ni.z,0,-Ni.x,ca.z,0,-ca.x,-Li.y,Li.x,0,-Ni.y,Ni.x,0,-ca.y,ca.x,0];return!Ap(t,co,ho,po,nc)||(t=[1,0,0,0,1,0,0,0,1],!Ap(t,co,ho,po,nc))?!1:(ic.crossVectors(Li,Ni),t=[ic.x,ic.y,ic.z],Ap(t,co,ho,po,nc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Yn=[new N,new N,new N,new N,new N,new N,new N,new N],fn=new N,rc=new ba,co=new N,ho=new N,po=new N,Li=new N,Ni=new N,ca=new N,Js=new N,nc=new N,ic=new N,ha=new N;function Ap(e,t,r,n,i){for(let a=0,o=e.length-3;a<=o;a+=3){ha.fromArray(e,a);let s=i.x*Math.abs(ha.x)+i.y*Math.abs(ha.y)+i.z*Math.abs(ha.z),l=t.dot(ha),u=r.dot(ha),c=n.dot(ha);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>s)return!1}return!0}var Dw=new ba,Qs=new N,Cp=new N,qo=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let r=this.center;t!==void 0?r.copy(t):Dw.setFromPoints(e).getCenter(r);let n=0;for(let i=0,a=e.length;i<a;i++)n=Math.max(n,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);let t=Qs.lengthSq();if(t>this.radius*this.radius){let r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(Qs,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(Cp)),this.expandByPoint(Qs.copy(e.center).sub(Cp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},qn=new N,Rp=new N,ac=new N,Ii=new N,Pp=new N,oc=new N,Lp=new N,ey=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){Rp.copy(e).add(t).multiplyScalar(.5),ac.copy(t).sub(e).normalize(),Ii.copy(this.origin).sub(Rp);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ac),o=Ii.dot(this.direction),s=-Ii.dot(ac),l=Ii.lengthSq(),u=Math.abs(1-a*a),c,p,d,f;if(u>0)if(c=a*s-o,p=a*o-s,f=i*u,c>=0)if(p>=-f)if(p<=f){let y=1/u;c*=y,p*=y,d=c*(c+a*p+2*o)+p*(a*c+p+2*s)+l}else p=i,c=Math.max(0,-(a*p+o)),d=-c*c+p*(p+2*s)+l;else p=-i,c=Math.max(0,-(a*p+o)),d=-c*c+p*(p+2*s)+l;else p<=-f?(c=Math.max(0,-(-a*i+o)),p=c>0?-i:Math.min(Math.max(-i,-s),i),d=-c*c+p*(p+2*s)+l):p<=f?(c=0,p=Math.min(Math.max(-i,-s),i),d=p*(p+2*s)+l):(c=Math.max(0,-(a*i+o)),p=c>0?i:Math.min(Math.max(-i,-s),i),d=-c*c+p*(p+2*s)+l);else p=a>0?-i:i,c=Math.max(0,-(a*p+o)),d=-c*c+p*(p+2*s)+l;return r&&r.copy(this.origin).addScaledVector(this.direction,c),n&&n.copy(Rp).addScaledVector(ac,p),d}intersectSphere(e,t){qn.subVectors(e.center,this.origin);let r=qn.dot(this.direction),n=qn.dot(qn)-r*r,i=e.radius*e.radius;if(n>i)return null;let a=Math.sqrt(i-n),o=r-a,s=r+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){let r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,i,a,o,s,l=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,p=this.origin;return l>=0?(r=(e.min.x-p.x)*l,n=(e.max.x-p.x)*l):(r=(e.max.x-p.x)*l,n=(e.min.x-p.x)*l),u>=0?(i=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(i=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),r>a||i>n||((i>r||isNaN(r))&&(r=i),(a<n||isNaN(n))&&(n=a),c>=0?(o=(e.min.z-p.z)*c,s=(e.max.z-p.z)*c):(o=(e.max.z-p.z)*c,s=(e.min.z-p.z)*c),r>s||o>n)||((o>r||r!==r)&&(r=o),(s<n||n!==n)&&(n=s),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,r,n,i){Pp.subVectors(t,e),oc.subVectors(r,e),Lp.crossVectors(Pp,oc);let a=this.direction.dot(Lp),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ii.subVectors(this.origin,e);let s=o*this.direction.dot(oc.crossVectors(Ii,oc));if(s<0)return null;let l=o*this.direction.dot(Pp.cross(Ii));if(l<0||s+l>a)return null;let u=-o*Ii.dot(Lp);return u<0?null:this.at(u/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},St=class Yf{constructor(t,r,n,i,a,o,s,l,u,c,p,d,f,y,_,v){Yf.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,r,n,i,a,o,s,l,u,c,p,d,f,y,_,v)}set(t,r,n,i,a,o,s,l,u,c,p,d,f,y,_,v){let h=this.elements;return h[0]=t,h[4]=r,h[8]=n,h[12]=i,h[1]=a,h[5]=o,h[9]=s,h[13]=l,h[2]=u,h[6]=c,h[10]=p,h[14]=d,h[3]=f,h[7]=y,h[11]=_,h[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yf().fromArray(this.elements)}copy(t){let r=this.elements,n=t.elements;return r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[3],r[4]=n[4],r[5]=n[5],r[6]=n[6],r[7]=n[7],r[8]=n[8],r[9]=n[9],r[10]=n[10],r[11]=n[11],r[12]=n[12],r[13]=n[13],r[14]=n[14],r[15]=n[15],this}copyPosition(t){let r=this.elements,n=t.elements;return r[12]=n[12],r[13]=n[13],r[14]=n[14],this}setFromMatrix3(t){let r=t.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(t,r,n){return t.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,r,n){return this.set(t.x,r.x,n.x,0,t.y,r.y,n.y,0,t.z,r.z,n.z,0,0,0,0,1),this}extractRotation(t){let r=this.elements,n=t.elements,i=1/fo.setFromMatrixColumn(t,0).length(),a=1/fo.setFromMatrixColumn(t,1).length(),o=1/fo.setFromMatrixColumn(t,2).length();return r[0]=n[0]*i,r[1]=n[1]*i,r[2]=n[2]*i,r[3]=0,r[4]=n[4]*a,r[5]=n[5]*a,r[6]=n[6]*a,r[7]=0,r[8]=n[8]*o,r[9]=n[9]*o,r[10]=n[10]*o,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(t){let r=this.elements,n=t.x,i=t.y,a=t.z,o=Math.cos(n),s=Math.sin(n),l=Math.cos(i),u=Math.sin(i),c=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let d=o*c,f=o*p,y=s*c,_=s*p;r[0]=l*c,r[4]=-l*p,r[8]=u,r[1]=f+y*u,r[5]=d-_*u,r[9]=-s*l,r[2]=_-d*u,r[6]=y+f*u,r[10]=o*l}else if(t.order==="YXZ"){let d=l*c,f=l*p,y=u*c,_=u*p;r[0]=d+_*s,r[4]=y*s-f,r[8]=o*u,r[1]=o*p,r[5]=o*c,r[9]=-s,r[2]=f*s-y,r[6]=_+d*s,r[10]=o*l}else if(t.order==="ZXY"){let d=l*c,f=l*p,y=u*c,_=u*p;r[0]=d-_*s,r[4]=-o*p,r[8]=y+f*s,r[1]=f+y*s,r[5]=o*c,r[9]=_-d*s,r[2]=-o*u,r[6]=s,r[10]=o*l}else if(t.order==="ZYX"){let d=o*c,f=o*p,y=s*c,_=s*p;r[0]=l*c,r[4]=y*u-f,r[8]=d*u+_,r[1]=l*p,r[5]=_*u+d,r[9]=f*u-y,r[2]=-u,r[6]=s*l,r[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*u,y=s*l,_=s*u;r[0]=l*c,r[4]=_-d*p,r[8]=y*p+f,r[1]=p,r[5]=o*c,r[9]=-s*c,r[2]=-u*c,r[6]=f*p+y,r[10]=d-_*p}else if(t.order==="XZY"){let d=o*l,f=o*u,y=s*l,_=s*u;r[0]=l*c,r[4]=-p,r[8]=u*c,r[1]=d*p+_,r[5]=o*c,r[9]=f*p-y,r[2]=y*p-f,r[6]=s*c,r[10]=_*p+d}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uw,t,kw)}lookAt(t,r,n){let i=this.elements;return Br.subVectors(t,r),Br.lengthSq()===0&&(Br.z=1),Br.normalize(),Di.crossVectors(n,Br),Di.lengthSq()===0&&(Math.abs(n.z)===1?Br.x+=1e-4:Br.z+=1e-4,Br.normalize(),Di.crossVectors(n,Br)),Di.normalize(),sc.crossVectors(Br,Di),i[0]=Di.x,i[4]=sc.x,i[8]=Br.x,i[1]=Di.y,i[5]=sc.y,i[9]=Br.y,i[2]=Di.z,i[6]=sc.z,i[10]=Br.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,r){let n=t.elements,i=r.elements,a=this.elements,o=n[0],s=n[4],l=n[8],u=n[12],c=n[1],p=n[5],d=n[9],f=n[13],y=n[2],_=n[6],v=n[10],h=n[14],m=n[3],g=n[7],x=n[11],L=n[15],T=i[0],b=i[4],R=i[8],w=i[12],S=i[1],P=i[5],k=i[9],V=i[13],W=i[2],Y=i[6],j=i[10],ie=i[14],$=i[3],fe=i[7],ye=i[11],Xe=i[15];return a[0]=o*T+s*S+l*W+u*$,a[4]=o*b+s*P+l*Y+u*fe,a[8]=o*R+s*k+l*j+u*ye,a[12]=o*w+s*V+l*ie+u*Xe,a[1]=c*T+p*S+d*W+f*$,a[5]=c*b+p*P+d*Y+f*fe,a[9]=c*R+p*k+d*j+f*ye,a[13]=c*w+p*V+d*ie+f*Xe,a[2]=y*T+_*S+v*W+h*$,a[6]=y*b+_*P+v*Y+h*fe,a[10]=y*R+_*k+v*j+h*ye,a[14]=y*w+_*V+v*ie+h*Xe,a[3]=m*T+g*S+x*W+L*$,a[7]=m*b+g*P+x*Y+L*fe,a[11]=m*R+g*k+x*j+L*ye,a[15]=m*w+g*V+x*ie+L*Xe,this}multiplyScalar(t){let r=this.elements;return r[0]*=t,r[4]*=t,r[8]*=t,r[12]*=t,r[1]*=t,r[5]*=t,r[9]*=t,r[13]*=t,r[2]*=t,r[6]*=t,r[10]*=t,r[14]*=t,r[3]*=t,r[7]*=t,r[11]*=t,r[15]*=t,this}determinant(){let t=this.elements,r=t[0],n=t[4],i=t[8],a=t[12],o=t[1],s=t[5],l=t[9],u=t[13],c=t[2],p=t[6],d=t[10],f=t[14],y=t[3],_=t[7],v=t[11],h=t[15];return y*(+a*l*p-i*u*p-a*s*d+n*u*d+i*s*f-n*l*f)+_*(+r*l*f-r*u*d+a*o*d-i*o*f+i*u*c-a*l*c)+v*(+r*u*p-r*s*f-a*o*p+n*o*f+a*s*c-n*u*c)+h*(-i*s*c-r*l*p+r*s*d+i*o*p-n*o*d+n*l*c)}transpose(){let t=this.elements,r;return r=t[1],t[1]=t[4],t[4]=r,r=t[2],t[2]=t[8],t[8]=r,r=t[6],t[6]=t[9],t[9]=r,r=t[3],t[3]=t[12],t[12]=r,r=t[7],t[7]=t[13],t[13]=r,r=t[11],t[11]=t[14],t[14]=r,this}setPosition(t,r,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=r,i[14]=n),this}invert(){let t=this.elements,r=t[0],n=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],c=t[8],p=t[9],d=t[10],f=t[11],y=t[12],_=t[13],v=t[14],h=t[15],m=p*v*u-_*d*u+_*l*f-s*v*f-p*l*h+s*d*h,g=y*d*u-c*v*u-y*l*f+o*v*f+c*l*h-o*d*h,x=c*_*u-y*p*u+y*s*f-o*_*f-c*s*h+o*p*h,L=y*p*l-c*_*l-y*s*d+o*_*d+c*s*v-o*p*v,T=r*m+n*g+i*x+a*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/T;return t[0]=m*b,t[1]=(_*d*a-p*v*a-_*i*f+n*v*f+p*i*h-n*d*h)*b,t[2]=(s*v*a-_*l*a+_*i*u-n*v*u-s*i*h+n*l*h)*b,t[3]=(p*l*a-s*d*a-p*i*u+n*d*u+s*i*f-n*l*f)*b,t[4]=g*b,t[5]=(c*v*a-y*d*a+y*i*f-r*v*f-c*i*h+r*d*h)*b,t[6]=(y*l*a-o*v*a-y*i*u+r*v*u+o*i*h-r*l*h)*b,t[7]=(o*d*a-c*l*a+c*i*u-r*d*u-o*i*f+r*l*f)*b,t[8]=x*b,t[9]=(y*p*a-c*_*a-y*n*f+r*_*f+c*n*h-r*p*h)*b,t[10]=(o*_*a-y*s*a+y*n*u-r*_*u-o*n*h+r*s*h)*b,t[11]=(c*s*a-o*p*a-c*n*u+r*p*u+o*n*f-r*s*f)*b,t[12]=L*b,t[13]=(c*_*i-y*p*i+y*n*d-r*_*d-c*n*v+r*p*v)*b,t[14]=(y*s*i-o*_*i-y*n*l+r*_*l+o*n*v-r*s*v)*b,t[15]=(o*p*i-c*s*i+c*n*l-r*p*l-o*n*d+r*s*d)*b,this}scale(t){let r=this.elements,n=t.x,i=t.y,a=t.z;return r[0]*=n,r[4]*=i,r[8]*=a,r[1]*=n,r[5]*=i,r[9]*=a,r[2]*=n,r[6]*=i,r[10]*=a,r[3]*=n,r[7]*=i,r[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,r=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(r,n,i))}makeTranslation(t,r,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,r,0,0,1,n,0,0,0,1),this}makeRotationX(t){let r=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,r,-n,0,0,n,r,0,0,0,0,1),this}makeRotationY(t){let r=Math.cos(t),n=Math.sin(t);return this.set(r,0,n,0,0,1,0,0,-n,0,r,0,0,0,0,1),this}makeRotationZ(t){let r=Math.cos(t),n=Math.sin(t);return this.set(r,-n,0,0,n,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,r){let n=Math.cos(r),i=Math.sin(r),a=1-n,o=t.x,s=t.y,l=t.z,u=a*o,c=a*s;return this.set(u*o+n,u*s-i*l,u*l+i*s,0,u*s+i*l,c*s+n,c*l-i*o,0,u*l-i*s,c*l+i*o,a*l*l+n,0,0,0,0,1),this}makeScale(t,r,n){return this.set(t,0,0,0,0,r,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,r,n,i,a,o){return this.set(1,n,a,0,t,1,o,0,r,i,1,0,0,0,0,1),this}compose(t,r,n){let i=this.elements,a=r._x,o=r._y,s=r._z,l=r._w,u=a+a,c=o+o,p=s+s,d=a*u,f=a*c,y=a*p,_=o*c,v=o*p,h=s*p,m=l*u,g=l*c,x=l*p,L=n.x,T=n.y,b=n.z;return i[0]=(1-(_+h))*L,i[1]=(f+x)*L,i[2]=(y-g)*L,i[3]=0,i[4]=(f-x)*T,i[5]=(1-(d+h))*T,i[6]=(v+m)*T,i[7]=0,i[8]=(y+g)*b,i[9]=(v-m)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,r,n){let i=this.elements,a=fo.set(i[0],i[1],i[2]).length(),o=fo.set(i[4],i[5],i[6]).length(),s=fo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),t.x=i[12],t.y=i[13],t.z=i[14],mn.copy(this);let l=1/a,u=1/o,c=1/s;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=c,mn.elements[9]*=c,mn.elements[10]*=c,r.setFromRotationMatrix(mn),n.x=a,n.y=o,n.z=s,this}makePerspective(t,r,n,i,a,o,s=ri){let l=this.elements,u=2*a/(r-t),c=2*a/(n-i),p=(r+t)/(r-t),d=(n+i)/(n-i),f,y;if(s===ri)f=-(o+a)/(o-a),y=-2*o*a/(o-a);else if(s===Wc)f=-o/(o-a),y=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,r,n,i,a,o,s=ri){let l=this.elements,u=1/(r-t),c=1/(n-i),p=1/(o-a),d=(r+t)*u,f=(n+i)*c,y,_;if(s===ri)y=(o+a)*p,_=-2*p;else if(s===Wc)y=a*p,_=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let r=this.elements,n=t.elements;for(let i=0;i<16;i++)if(r[i]!==n[i])return!1;return!0}fromArray(t,r=0){for(let n=0;n<16;n++)this.elements[n]=t[n+r];return this}toArray(t=[],r=0){let n=this.elements;return t[r]=n[0],t[r+1]=n[1],t[r+2]=n[2],t[r+3]=n[3],t[r+4]=n[4],t[r+5]=n[5],t[r+6]=n[6],t[r+7]=n[7],t[r+8]=n[8],t[r+9]=n[9],t[r+10]=n[10],t[r+11]=n[11],t[r+12]=n[12],t[r+13]=n[13],t[r+14]=n[14],t[r+15]=n[15],t}},fo=new N,mn=new St,Uw=new N(0,0,0),kw=new N(1,1,1),Di=new N,sc=new N,Br=new N,L_=new St,N_=new Yo,Gi=class ty{constructor(t=0,r=0,n=0,i=ty.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=r,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,r,n,i=this._order){return this._x=t,this._y=r,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,r=this._order,n=!0){let i=t.elements,a=i[0],o=i[4],s=i[8],l=i[1],u=i[5],c=i[9],p=i[2],d=i[6],f=i[10];switch(r){case"XYZ":this._y=Math.asin(ir(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ir(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(s,f),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(ir(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ir(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(ir(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(s,f));break;case"XZY":this._z=Math.asin(-ir(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,r,n){return L_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(L_,r,n)}setFromVector3(t,r=this._order){return this.set(t.x,t.y,t.z,r)}reorder(t){return N_.setFromEuler(this),this.setFromQuaternion(N_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],r=0){return t[r]=this._x,t[r+1]=this._y,t[r+2]=this._z,t[r+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gi.DEFAULT_ORDER="XYZ";var ry=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ow=0,I_=new N,mo=new Yo,Zn=new St,lc=new N,Ks=new N,Fw=new N,zw=new Yo,D_=new N(1,0,0),U_=new N(0,1,0),k_=new N(0,0,1),O_={type:"added"},Bw={type:"removed"},go={type:"childadded",child:null},Np={type:"childremoved",child:null},ar=class zc extends $o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ow++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zc.DEFAULT_UP.clone();let t=new N,r=new Gi,n=new Yo,i=new N(1,1,1);function a(){n.setFromEuler(r,!1)}function o(){r.setFromQuaternion(n,void 0,!1)}r._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new St},normalMatrix:{value:new at}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=zc.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zc.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ry,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,r){this.quaternion.setFromAxisAngle(t,r)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,r){return mo.setFromAxisAngle(t,r),this.quaternion.multiply(mo),this}rotateOnWorldAxis(t,r){return mo.setFromAxisAngle(t,r),this.quaternion.premultiply(mo),this}rotateX(t){return this.rotateOnAxis(D_,t)}rotateY(t){return this.rotateOnAxis(U_,t)}rotateZ(t){return this.rotateOnAxis(k_,t)}translateOnAxis(t,r){return I_.copy(t).applyQuaternion(this.quaternion),this.position.add(I_.multiplyScalar(r)),this}translateX(t){return this.translateOnAxis(D_,t)}translateY(t){return this.translateOnAxis(U_,t)}translateZ(t){return this.translateOnAxis(k_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,r,n){t.isVector3?lc.copy(t):lc.set(t,r,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Ks,lc,this.up):Zn.lookAt(lc,Ks,this.up),this.quaternion.setFromRotationMatrix(Zn),i&&(Zn.extractRotation(i.matrixWorld),mo.setFromRotationMatrix(Zn),this.quaternion.premultiply(mo.invert()))}add(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(O_),go.child=t,this.dispatchEvent(go),go.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let r=this.children.indexOf(t);return r!==-1&&(t.parent=null,this.children.splice(r,1),t.dispatchEvent(Bw),Np.child=t,this.dispatchEvent(Np),Np.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(O_),go.child=t,this.dispatchEvent(go),go.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,r){if(this[t]===r)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,r);if(a!==void 0)return a}}getObjectsByProperty(t,r,n=[]){this[t]===r&&n.push(this);let i=this.children;for(let a=0,o=i.length;a<o;a++)i[a].getObjectsByProperty(t,r,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,Fw),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,zw,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let r=this.matrixWorld.elements;return t.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(t){t(this);let r=this.children;for(let n=0,i=r.length;n<i;n++)r[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let r=this.children;for(let n=0,i=r.length;n<i;n++)r[n].traverseVisible(t)}traverseAncestors(t){let r=this.parent;r!==null&&(t(r),r.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let r=this.children;for(let n=0,i=r.length;n<i;n++)r[n].updateMatrixWorld(t)}updateWorldMatrix(t,r){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),r===!0){let i=this.children;for(let a=0,o=i.length;a<o;a++)i[a].updateWorldMatrix(!1,!0)}}toJSON(t){let r=t===void 0||typeof t=="string",n={};r&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(t.geometries,this.geometry);let s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){let l=s.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){let p=l[u];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let s=[];for(let l=0,u=this.material.length;l<u;l++)s.push(a(t.materials,this.material[l]));i.material=s}else i.material=a(t.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){let l=this.animations[s];i.animations.push(a(t.animations,l))}}if(r){let s=o(t.geometries),l=o(t.materials),u=o(t.textures),c=o(t.images),p=o(t.shapes),d=o(t.skeletons),f=o(t.animations),y=o(t.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),y.length>0&&(n.nodes=y)}return n.object=i,n;function o(s){let l=[];for(let u in s){let c=s[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,r=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),r===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};ar.DEFAULT_UP=new N(0,1,0);ar.DEFAULT_MATRIX_AUTO_UPDATE=!0;ar.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gn=new N,Jn=new N,Ip=new N,Qn=new N,vo=new N,_o=new N,F_=new N,Dp=new N,Up=new N,kp=new N,Op=new xt,Fp=new xt,zp=new xt,Ro=class Po{constructor(t=new N,r=new N,n=new N){this.a=t,this.b=r,this.c=n}static getNormal(t,r,n,i){i.subVectors(n,r),gn.subVectors(t,r),i.cross(gn);let a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(t,r,n,i,a){gn.subVectors(i,r),Jn.subVectors(n,r),Ip.subVectors(t,r);let o=gn.dot(gn),s=gn.dot(Jn),l=gn.dot(Ip),u=Jn.dot(Jn),c=Jn.dot(Ip),p=o*u-s*s;if(p===0)return a.set(0,0,0),null;let d=1/p,f=(u*l-s*c)*d,y=(o*c-s*l)*d;return a.set(1-f-y,y,f)}static containsPoint(t,r,n,i){return this.getBarycoord(t,r,n,i,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,r,n,i,a,o,s,l){return this.getBarycoord(t,r,n,i,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(s,Qn.z),l)}static getInterpolatedAttribute(t,r,n,i,a,o){return Op.setScalar(0),Fp.setScalar(0),zp.setScalar(0),Op.fromBufferAttribute(t,r),Fp.fromBufferAttribute(t,n),zp.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Op,a.x),o.addScaledVector(Fp,a.y),o.addScaledVector(zp,a.z),o}static isFrontFacing(t,r,n,i){return gn.subVectors(n,r),Jn.subVectors(t,r),gn.cross(Jn).dot(i)<0}set(t,r,n){return this.a.copy(t),this.b.copy(r),this.c.copy(n),this}setFromPointsAndIndices(t,r,n,i){return this.a.copy(t[r]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,r,n,i){return this.a.fromBufferAttribute(t,r),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),gn.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Po.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,r){return Po.getBarycoord(t,this.a,this.b,this.c,r)}getInterpolation(t,r,n,i,a){return Po.getInterpolation(t,this.a,this.b,this.c,r,n,i,a)}containsPoint(t){return Po.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Po.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,r){let n=this.a,i=this.b,a=this.c,o,s;vo.subVectors(i,n),_o.subVectors(a,n),Dp.subVectors(t,n);let l=vo.dot(Dp),u=_o.dot(Dp);if(l<=0&&u<=0)return r.copy(n);Up.subVectors(t,i);let c=vo.dot(Up),p=_o.dot(Up);if(c>=0&&p<=c)return r.copy(i);let d=l*p-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),r.copy(n).addScaledVector(vo,o);kp.subVectors(t,a);let f=vo.dot(kp),y=_o.dot(kp);if(y>=0&&f<=y)return r.copy(a);let _=f*u-l*y;if(_<=0&&u>=0&&y<=0)return s=u/(u-y),r.copy(n).addScaledVector(_o,s);let v=c*y-f*p;if(v<=0&&p-c>=0&&f-y>=0)return F_.subVectors(a,i),s=(p-c)/(p-c+(f-y)),r.copy(i).addScaledVector(F_,s);let h=1/(v+_+d);return o=_*h,s=d*h,r.copy(n).addScaledVector(vo,o).addScaledVector(_o,s)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ny={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},uc={h:0,s:0,l:0};function Bp(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*6*r:r<1/2?t:r<2/3?e+(t-e)*6*(2/3-r):e}var et=class{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Hr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,r,n=ct.workingColorSpace){return this.r=e,this.g=t,this.b=r,ct.toWorkingColorSpace(this,n),this}setHSL(e,t,r,n=ct.workingColorSpace){if(e=Ew(e,1),t=ir(t,0,1),r=ir(r,0,1),t===0)this.r=this.g=this.b=r;else{let i=r<=.5?r*(1+t):r+t-r*t,a=2*r-i;this.r=Bp(a,i,e+1/3),this.g=Bp(a,i,e),this.b=Bp(a,i,e-1/3)}return ct.toWorkingColorSpace(this,n),this}setStyle(e,t=Hr){function r(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let i=n[1],a=i.length;if(a===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Hr){let r=ny[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=Fo(e.r),this.g=Fo(e.g),this.b=Fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hr){return ct.fromWorkingColorSpace(pr.copy(this),e),Math.round(ir(pr.r*255,0,255))*65536+Math.round(ir(pr.g*255,0,255))*256+Math.round(ir(pr.b*255,0,255))}getHexString(e=Hr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(pr.copy(this),t);let r=pr.r,n=pr.g,i=pr.b,a=Math.max(r,n,i),o=Math.min(r,n,i),s,l,u=(o+a)/2;if(o===a)s=0,l=0;else{let c=a-o;switch(l=u<=.5?c/(a+o):c/(2-a-o),a){case r:s=(n-i)/c+(n<i?6:0);break;case n:s=(i-r)/c+2;break;case i:s=(r-n)/c+4;break}s/=6}return e.h=s,e.s=l,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(pr.copy(this),t),e.r=pr.r,e.g=pr.g,e.b=pr.b,e}getStyle(e=Hr){ct.fromWorkingColorSpace(pr.copy(this),e);let t=pr.r,r=pr.g,n=pr.b;return e!==Hr?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+t,Ui.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Ui),e.getHSL(uc);let r=wp(Ui.h,uc.h,t),n=wp(Ui.s,uc.s,t),i=wp(Ui.l,uc.l,t);return this.setHSL(r,n,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,r=this.g,n=this.b,i=e.elements;return this.r=i[0]*t+i[3]*r+i[6]*n,this.g=i[1]*t+i[4]*r+i[7]*n,this.b=i[2]*t+i[5]*r+i[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pr=new et;et.NAMES=ny;var Vw=0,Aa=class extends $o{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vw++}),this.uuid=ni(),this.name="",this.blending=ko,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sf,this.blendDst=lf,this.blendEquation=_a,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=M_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lo,this.stencilZFail=lo,this.stencilZPass=lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ko&&(r.blending=this.blending),this.side!==Hi&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==sf&&(r.blendSrc=this.blendSrc),this.blendDst!==lf&&(r.blendDst=this.blendDst),this.blendEquation!==_a&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Bo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==M_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==lo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==lo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(i){let a=[];for(let o in i){let s=i[o];delete s.metadata,a.push(s)}return a}if(t){let i=n(e.textures),a=n(e.images);i.length>0&&(r.textures=i),a.length>0&&(r.images=a)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,r=null;if(t!==null){let n=t.length;r=new Array(n);for(let i=0;i!==n;++i)r[i]=t[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ei=class extends Aa{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=I1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Wt=new N,cc=new he,br=class{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=jf,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,i=this.itemSize;n<i;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)cc.fromBufferAttribute(this,t),cc.applyMatrix3(e),this.setXY(t,cc.x,cc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Nn(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=ft(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),r=ft(r,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),r=ft(r,this.array),n=ft(n,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jf&&(e.usage=this.usage),e}},iy=class extends br{constructor(e,t,r){super(new Uint16Array(e),t,r)}},ay=class extends br{constructor(e,t,r){super(new Uint32Array(e),t,r)}},mt=class extends br{constructor(e,t,r){super(new Float32Array(e),t,r)}},Hw=0,Qr=new St,Vp=new ar,yo=new N,Vr=new ba,el=new ba,Qt=new N,fr=class oy extends $o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hw++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(q1(t)?ay:iy)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,r){return this.attributes[t]=r,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,r,n=0){this.groups.push({start:t,count:r,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,r){this.drawRange.start=t,this.drawRange.count=r}applyMatrix4(t){let r=this.attributes.position;r!==void 0&&(r.applyMatrix4(t),r.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let a=new at().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qr.makeRotationFromQuaternion(t),this.applyMatrix4(Qr),this}rotateX(t){return Qr.makeRotationX(t),this.applyMatrix4(Qr),this}rotateY(t){return Qr.makeRotationY(t),this.applyMatrix4(Qr),this}rotateZ(t){return Qr.makeRotationZ(t),this.applyMatrix4(Qr),this}translate(t,r,n){return Qr.makeTranslation(t,r,n),this.applyMatrix4(Qr),this}scale(t,r,n){return Qr.makeScale(t,r,n),this.applyMatrix4(Qr),this}lookAt(t){return Vp.lookAt(t),Vp.updateMatrix(),this.applyMatrix4(Vp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yo).negate(),this.translate(yo.x,yo.y,yo.z),this}setFromPoints(t){let r=this.getAttribute("position");if(r===void 0){let n=[];for(let i=0,a=t.length;i<a;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mt(n,3))}else{for(let n=0,i=r.count;n<i;n++){let a=t[n];r.setXYZ(n,a.x,a.y,a.z||0)}t.length>r.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),r.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ba);let t=this.attributes.position,r=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),r)for(let n=0,i=r.length;n<i;n++){let a=r[n];Vr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Vr.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Vr.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Vr.min),this.boundingBox.expandByPoint(Vr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qo);let t=this.attributes.position,r=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(Vr.setFromBufferAttribute(t),r)for(let a=0,o=r.length;a<o;a++){let s=r[a];el.setFromBufferAttribute(s),this.morphTargetsRelative?(Qt.addVectors(Vr.min,el.min),Vr.expandByPoint(Qt),Qt.addVectors(Vr.max,el.max),Vr.expandByPoint(Qt)):(Vr.expandByPoint(el.min),Vr.expandByPoint(el.max))}Vr.getCenter(n);let i=0;for(let a=0,o=t.count;a<o;a++)Qt.fromBufferAttribute(t,a),i=Math.max(i,n.distanceToSquared(Qt));if(r)for(let a=0,o=r.length;a<o;a++){let s=r[a],l=this.morphTargetsRelative;for(let u=0,c=s.count;u<c;u++)Qt.fromBufferAttribute(s,u),l&&(yo.fromBufferAttribute(t,u),Qt.add(yo)),i=Math.max(i,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,r=this.attributes;if(t===null||r.position===void 0||r.normal===void 0||r.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=r.position,i=r.normal,a=r.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new br(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),s=[],l=[];for(let R=0;R<n.count;R++)s[R]=new N,l[R]=new N;let u=new N,c=new N,p=new N,d=new he,f=new he,y=new he,_=new N,v=new N;function h(R,w,S){u.fromBufferAttribute(n,R),c.fromBufferAttribute(n,w),p.fromBufferAttribute(n,S),d.fromBufferAttribute(a,R),f.fromBufferAttribute(a,w),y.fromBufferAttribute(a,S),c.sub(u),p.sub(u),f.sub(d),y.sub(d);let P=1/(f.x*y.y-y.x*f.y);isFinite(P)&&(_.copy(c).multiplyScalar(y.y).addScaledVector(p,-f.y).multiplyScalar(P),v.copy(p).multiplyScalar(f.x).addScaledVector(c,-y.x).multiplyScalar(P),s[R].add(_),s[w].add(_),s[S].add(_),l[R].add(v),l[w].add(v),l[S].add(v))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let R=0,w=m.length;R<w;++R){let S=m[R],P=S.start,k=S.count;for(let V=P,W=P+k;V<W;V+=3)h(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let g=new N,x=new N,L=new N,T=new N;function b(R){L.fromBufferAttribute(i,R),T.copy(L);let w=s[R];g.copy(w),g.sub(L.multiplyScalar(L.dot(w))).normalize(),x.crossVectors(T,w);let S=x.dot(l[R])<0?-1:1;o.setXYZW(R,g.x,g.y,g.z,S)}for(let R=0,w=m.length;R<w;++R){let S=m[R],P=S.start,k=S.count;for(let V=P,W=P+k;V<W;V+=3)b(t.getX(V+0)),b(t.getX(V+1)),b(t.getX(V+2))}}computeVertexNormals(){let t=this.index,r=this.getAttribute("position");if(r!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new br(new Float32Array(r.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new N,a=new N,o=new N,s=new N,l=new N,u=new N,c=new N,p=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){let y=t.getX(d+0),_=t.getX(d+1),v=t.getX(d+2);i.fromBufferAttribute(r,y),a.fromBufferAttribute(r,_),o.fromBufferAttribute(r,v),c.subVectors(o,a),p.subVectors(i,a),c.cross(p),s.fromBufferAttribute(n,y),l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,v),s.add(c),l.add(c),u.add(c),n.setXYZ(y,s.x,s.y,s.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(v,u.x,u.y,u.z)}else for(let d=0,f=r.count;d<f;d+=3)i.fromBufferAttribute(r,d+0),a.fromBufferAttribute(r,d+1),o.fromBufferAttribute(r,d+2),c.subVectors(o,a),p.subVectors(i,a),c.cross(p),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let r=0,n=t.count;r<n;r++)Qt.fromBufferAttribute(t,r),Qt.normalize(),t.setXYZ(r,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function t(s,l){let u=s.array,c=s.itemSize,p=s.normalized,d=new u.constructor(l.length*c),f=0,y=0;for(let _=0,v=l.length;_<v;_++){s.isInterleavedBufferAttribute?f=l[_]*s.data.stride+s.offset:f=l[_]*c;for(let h=0;h<c;h++)d[y++]=u[f++]}return new br(d,c,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let r=new oy,n=this.index.array,i=this.attributes;for(let s in i){let l=i[s],u=t(l,n);r.setAttribute(s,u)}let a=this.morphAttributes;for(let s in a){let l=[],u=a[s];for(let c=0,p=u.length;c<p;c++){let d=u[c],f=t(d,n);l.push(f)}r.morphAttributes[s]=l}r.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let s=0,l=o.length;s<l;s++){let u=o[s];r.addGroup(u.start,u.count,u.materialIndex)}return r}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};let r=this.index;r!==null&&(t.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});let n=this.attributes;for(let l in n){let u=n[l];t.data.attributes[l]=u.toJSON(t.data)}let i={},a=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],c=[];for(let p=0,d=u.length;p<d;p++){let f=u[p];c.push(f.toJSON(t.data))}c.length>0&&(i[l]=c,a=!0)}a&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let s=this.boundingSphere;return s!==null&&(t.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let r={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(r));let i=t.attributes;for(let u in i){let c=i[u];this.setAttribute(u,c.clone(r))}let a=t.morphAttributes;for(let u in a){let c=[],p=a[u];for(let d=0,f=p.length;d<f;d++)c.push(p[d].clone(r));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let u=0,c=o.length;u<c;u++){let p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}let s=t.boundingBox;s!==null&&(this.boundingBox=s.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},z_=new St,da=new ey,hc=new qo,B_=new N,dc=new N,pc=new N,fc=new N,Hp=new N,mc=new N,V_=new N,gc=new N,Fe=class extends ar{constructor(e=new fr,t=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,i=r.length;n<i;n++){let a=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let r=this.geometry,n=r.attributes.position,i=r.morphAttributes.position,a=r.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(i&&o){mc.set(0,0,0);for(let s=0,l=i.length;s<l;s++){let u=o[s],c=i[s];u!==0&&(Hp.fromBufferAttribute(c,e),a?mc.addScaledVector(Hp,u):mc.addScaledVector(Hp.sub(t),u))}t.add(mc)}return t}raycast(e,t){let r=this.geometry,n=this.material,i=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),hc.copy(r.boundingSphere),hc.applyMatrix4(i),da.copy(e.ray).recast(e.near),!(hc.containsPoint(da.origin)===!1&&(da.intersectSphere(hc,B_)===null||da.origin.distanceToSquared(B_)>(e.far-e.near)**2))&&(z_.copy(i).invert(),da.copy(e.ray).applyMatrix4(z_),!(r.boundingBox!==null&&da.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,da)))}_computeIntersections(e,t,r){let n,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,l=i.attributes.uv,u=i.attributes.uv1,c=i.attributes.normal,p=i.groups,d=i.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,y=p.length;f<y;f++){let _=p[f],v=a[_.materialIndex],h=Math.max(_.start,d.start),m=Math.min(o.count,Math.min(_.start+_.count,d.start+d.count));for(let g=h,x=m;g<x;g+=3){let L=o.getX(g),T=o.getX(g+1),b=o.getX(g+2);n=vc(this,v,e,r,l,u,c,L,T,b),n&&(n.faceIndex=Math.floor(g/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{let f=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let _=f,v=y;_<v;_+=3){let h=o.getX(_),m=o.getX(_+1),g=o.getX(_+2);n=vc(this,a,e,r,l,u,c,h,m,g),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}else if(s!==void 0)if(Array.isArray(a))for(let f=0,y=p.length;f<y;f++){let _=p[f],v=a[_.materialIndex],h=Math.max(_.start,d.start),m=Math.min(s.count,Math.min(_.start+_.count,d.start+d.count));for(let g=h,x=m;g<x;g+=3){let L=g,T=g+1,b=g+2;n=vc(this,v,e,r,l,u,c,L,T,b),n&&(n.faceIndex=Math.floor(g/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{let f=Math.max(0,d.start),y=Math.min(s.count,d.start+d.count);for(let _=f,v=y;_<v;_+=3){let h=_,m=_+1,g=_+2;n=vc(this,a,e,r,l,u,c,h,m,g),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}}};function Gw(e,t,r,n,i,a,o,s){let l;if(t.side===Tr?l=n.intersectTriangle(o,a,i,!0,s):l=n.intersectTriangle(i,a,o,t.side===Hi,s),l===null)return null;gc.copy(s),gc.applyMatrix4(e.matrixWorld);let u=r.ray.origin.distanceTo(gc);return u<r.near||u>r.far?null:{distance:u,point:gc.clone(),object:e}}function vc(e,t,r,n,i,a,o,s,l,u){e.getVertexPosition(s,dc),e.getVertexPosition(l,pc),e.getVertexPosition(u,fc);let c=Gw(e,t,r,n,dc,pc,fc,V_);if(c){let p=new N;Ro.getBarycoord(V_,dc,pc,fc,p),i&&(c.uv=Ro.getInterpolatedAttribute(i,s,l,u,p,new he)),a&&(c.uv1=Ro.getInterpolatedAttribute(a,s,l,u,p,new he)),o&&(c.normal=Ro.getInterpolatedAttribute(o,s,l,u,p,new N),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));let d={a:s,b:l,c:u,normal:new N,materialIndex:0};Ro.getNormal(dc,pc,fc,d.normal),c.face=d,c.barycoord=p}return c}var yn=class sy extends fr{constructor(t=1,r=1,n=1,i=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:r,depth:n,widthSegments:i,heightSegments:a,depthSegments:o};let s=this;i=Math.floor(i),a=Math.floor(a),o=Math.floor(o);let l=[],u=[],c=[],p=[],d=0,f=0;y("z","y","x",-1,-1,n,r,t,o,a,0),y("z","y","x",1,-1,n,r,-t,o,a,1),y("x","z","y",1,1,t,n,r,i,o,2),y("x","z","y",1,-1,t,n,-r,i,o,3),y("x","y","z",1,-1,t,r,n,i,a,4),y("x","y","z",-1,-1,t,r,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(p,2));function y(_,v,h,m,g,x,L,T,b,R,w){let S=x/b,P=L/R,k=x/2,V=L/2,W=T/2,Y=b+1,j=R+1,ie=0,$=0,fe=new N;for(let ye=0;ye<j;ye++){let Xe=ye*P-V;for(let Je=0;Je<Y;Je++){let Z=Je*S-k;fe[_]=Z*m,fe[v]=Xe*g,fe[h]=W,u.push(fe.x,fe.y,fe.z),fe[_]=0,fe[v]=0,fe[h]=T>0?1:-1,c.push(fe.x,fe.y,fe.z),p.push(Je/b),p.push(1-ye/R),ie+=1}}for(let ye=0;ye<R;ye++)for(let Xe=0;Xe<b;Xe++){let Je=d+Xe+Y*ye,Z=d+Xe+Y*(ye+1),de=d+(Xe+1)+Y*(ye+1),Ie=d+(Xe+1)+Y*ye;l.push(Je,Z,Ie),l.push(Z,de,Ie),$+=6}s.addGroup(f,$,w),f+=$,d+=ie}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sy(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Xo(e){let t={};for(let r in e){t[r]={};for(let n in e[r]){let i=e[r][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[r][n]=null):t[r][n]=i.clone():Array.isArray(i)?t[r][n]=i.slice():t[r][n]=i}}return t}function Er(e){let t={};for(let r=0;r<e.length;r++){let n=Xo(e[r]);for(let i in n)t[i]=n[i]}return t}function Ww(e){let t=[];for(let r=0;r<e.length;r++)t.push(e[r].clone());return t}function ly(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ct.workingColorSpace}var Xw={clone:Xo,merge:Er},jw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$w=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends Aa{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jw,this.fragmentShader=$w,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xo(e.uniforms),this.uniformsGroups=Ww(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let i=this.uniforms[n].value;i&&i.isTexture?t.uniforms[n]={type:"t",value:i.toJSON(e).uuid}:i&&i.isColor?t.uniforms[n]={type:"c",value:i.getHex()}:i&&i.isVector2?t.uniforms[n]={type:"v2",value:i.toArray()}:i&&i.isVector3?t.uniforms[n]={type:"v3",value:i.toArray()}:i&&i.isVector4?t.uniforms[n]={type:"v4",value:i.toArray()}:i&&i.isMatrix3?t.uniforms[n]={type:"m3",value:i.toArray()}:i&&i.isMatrix4?t.uniforms[n]={type:"m4",value:i.toArray()}:t.uniforms[n]={value:i}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let r={};for(let n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}},uy=class extends ar{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ki=new N,H_=new he,G_=new he,Gr=class extends uy{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=$f*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Mp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $f*2*Math.atan(Math.tan(Mp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,H_,G_),t.subVectors(G_,H_)}setViewOffset(e,t,r,n,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Mp*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,i=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let s=a.fullWidth,l=a.fullHeight;i+=a.offsetX*n/s,t-=a.offsetY*r/l,n*=a.width/s,r*=a.height/l}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+n,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},xo=-90,So=1,Yw=class extends ar{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Gr(xo,So,e,t);n.layers=this.layers,this.add(n);let i=new Gr(xo,So,e,t);i.layers=this.layers,this.add(i);let a=new Gr(xo,So,e,t);a.layers=this.layers,this.add(a);let o=new Gr(xo,So,e,t);o.layers=this.layers,this.add(o);let s=new Gr(xo,So,e,t);s.layers=this.layers,this.add(s);let l=new Gr(xo,So,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[r,n,i,a,o,s]=t;for(let l of t)this.remove(l);if(e===ri)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===Wc)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,l,u]=this.children,c=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let y=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,i),e.setRenderTarget(r,1,n),e.render(t,a),e.setRenderTarget(r,2,n),e.render(t,o),e.setRenderTarget(r,3,n),e.render(t,s),e.setRenderTarget(r,4,n),e.render(t,l),r.texture.generateMipmaps=y,e.setRenderTarget(r,5,n),e.render(t,u),e.setRenderTarget(c,p,d),e.xr.enabled=f,r.texture.needsPMREMUpdate=!0}},cy=class extends Kr{constructor(e,t,r,n,i,a,o,s,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Vo,super(e,t,r,n,i,a,o,s,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qw=class extends Ea{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];this.texture=new cy(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:In}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new yn(5,5,5),i=new Un({name:"CubemapFromEquirect",uniforms:Xo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Tr,blending:Bi});i.uniforms.tEquirect.value=t;let a=new Fe(n,i),o=t.minFilter;return t.minFilter===Ma&&(t.minFilter=In),new Yw(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,r,n){let i=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,r,n);e.setRenderTarget(i)}},Gp=new N,Zw=new N,Jw=new at,ga=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){let n=Gp.subVectors(r,t).cross(Zw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let r=e.delta(Gp),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/n;return i<0||i>1?null:t.copy(e.start).addScaledVector(r,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let r=t||Jw.getNormalMatrix(e),n=this.coplanarPoint(Gp).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},pa=new qo,_c=new N,um=class{constructor(e=new ga,t=new ga,r=new ga,n=new ga,i=new ga,a=new ga){this.planes=[e,t,r,n,i,a]}set(e,t,r,n,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(n),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ri){let r=this.planes,n=e.elements,i=n[0],a=n[1],o=n[2],s=n[3],l=n[4],u=n[5],c=n[6],p=n[7],d=n[8],f=n[9],y=n[10],_=n[11],v=n[12],h=n[13],m=n[14],g=n[15];if(r[0].setComponents(s-i,p-l,_-d,g-v).normalize(),r[1].setComponents(s+i,p+l,_+d,g+v).normalize(),r[2].setComponents(s+a,p+u,_+f,g+h).normalize(),r[3].setComponents(s-a,p-u,_-f,g-h).normalize(),r[4].setComponents(s-o,p-c,_-y,g-m).normalize(),t===ri)r[5].setComponents(s+o,p+c,_+y,g+m).normalize();else if(t===Wc)r[5].setComponents(o,c,y,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pa)}intersectsSprite(e){return pa.center.set(0,0,0),pa.radius=.7071067811865476,pa.applyMatrix4(e.matrixWorld),this.intersectsSphere(pa)}intersectsSphere(e){let t=this.planes,r=e.center,n=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let r=0;r<6;r++){let n=t[r];if(_c.x=n.normal.x>0?e.max.x:e.min.x,_c.y=n.normal.y>0?e.max.y:e.min.y,_c.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(_c)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function hy(){let e=null,t=!1,r=null,n=null;function i(a,o){r(a,o),n=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&r!==null&&(n=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){r=a},setContext:function(a){e=a}}}function Qw(e){let t=new WeakMap;function r(s,l){let u=s.array,c=s.usage,p=u.byteLength,d=e.createBuffer();e.bindBuffer(l,d),e.bufferData(l,u,c),s.onUploadCallback();let f;if(u instanceof Float32Array)f=e.FLOAT;else if(u instanceof Uint16Array)s.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=e.SHORT;else if(u instanceof Uint32Array)f=e.UNSIGNED_INT;else if(u instanceof Int32Array)f=e.INT;else if(u instanceof Int8Array)f=e.BYTE;else if(u instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:s.version,size:p}}function n(s,l,u){let c=l.array,p=l.updateRanges;if(e.bindBuffer(u,s),p.length===0)e.bufferSubData(u,0,c);else{p.sort((f,y)=>f.start-y.start);let d=0;for(let f=1;f<p.length;f++){let y=p[d],_=p[f];_.start<=y.start+y.count+1?y.count=Math.max(y.count,_.start+_.count-y.start):(++d,p[d]=_)}p.length=d+1;for(let f=0,y=p.length;f<y;f++){let _=p[f];e.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(s){return s.isInterleavedBufferAttribute&&(s=s.data),t.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);let l=t.get(s);l&&(e.deleteBuffer(l.buffer),t.delete(s))}function o(s,l){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){let c=t.get(s);(!c||c.version<s.version)&&t.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}let u=t.get(s);if(u===void 0)t.set(s,r(s,l));else if(u.version<s.version){if(u.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,s,l),u.version=s.version}}return{get:i,remove:a,update:o}}var Fi=class dy extends fr{constructor(t=1,r=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:r,widthSegments:n,heightSegments:i};let a=t/2,o=r/2,s=Math.floor(n),l=Math.floor(i),u=s+1,c=l+1,p=t/s,d=r/l,f=[],y=[],_=[],v=[];for(let h=0;h<c;h++){let m=h*d-o;for(let g=0;g<u;g++){let x=g*p-a;y.push(x,-m,0),_.push(0,0,1),v.push(g/s),v.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<s;m++){let g=m+u*h,x=m+u*(h+1),L=m+1+u*(h+1),T=m+1+u*h;f.push(g,x,T),f.push(x,L,T)}this.setIndex(f),this.setAttribute("position",new mt(y,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dy(t.width,t.height,t.widthSegments,t.heightSegments)}},Kw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eE=`#ifdef USE_ALPHAHASH
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
#endif`,tE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aE=`#ifdef USE_AOMAP
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
#endif`,oE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sE=`#ifdef USE_BATCHING
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
#endif`,lE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dE=`#ifdef USE_IRIDESCENCE
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
#endif`,pE=`#ifdef USE_BUMPMAP
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
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_E=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,SE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ME=`#define PI 3.141592653589793
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
} // validated`,wE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,EE=`vec3 transformedNormal = objectNormal;
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
#endif`,TE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RE="gl_FragColor = linearToOutputTexel( gl_FragColor );",PE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LE=`#ifdef USE_ENVMAP
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
#endif`,NE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IE=`#ifdef USE_ENVMAP
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
#endif`,DE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UE=`#ifdef USE_ENVMAP
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
#endif`,kE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BE=`#ifdef USE_GRADIENTMAP
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
}`,VE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WE=`uniform bool receiveShadow;
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
#endif`,XE=`#ifdef USE_ENVMAP
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
#endif`,jE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$E=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZE=`PhysicalMaterial material;
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
#endif`,JE=`struct PhysicalMaterial {
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
}`,QE=`
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
#endif`,KE=`#if defined( RE_IndirectDiffuse )
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
#endif`,e2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,a2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,l2=`#if defined( USE_POINTS_UV )
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
#endif`,u2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f2=`#ifdef USE_MORPHTARGETS
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
#endif`,m2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,v2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S2=`#ifdef USE_NORMALMAP
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
#endif`,M2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,E2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,C2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,O2=`float getShadowMask() {
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
}`,F2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z2=`#ifdef USE_SKINNING
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
#endif`,B2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V2=`#ifdef USE_SKINNING
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
#endif`,H2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,j2=`#ifdef USE_TRANSMISSION
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
#endif`,$2=`#ifdef USE_TRANSMISSION
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
#endif`,Y2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Q2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K2=`uniform sampler2D t2D;
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
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iT=`#include <common>
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
}`,aT=`#if DEPTH_PACKING == 3200
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
}`,oT=`#define DISTANCE
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
}`,sT=`#define DISTANCE
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
}`,lT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cT=`uniform float scale;
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
}`,hT=`uniform vec3 diffuse;
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
}`,pT=`uniform vec3 diffuse;
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
}`,fT=`#define LAMBERT
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
}`,mT=`#define LAMBERT
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
}`,gT=`#define MATCAP
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
}`,vT=`#define MATCAP
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
}`,_T=`#define NORMAL
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
}`,yT=`#define NORMAL
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
}`,xT=`#define PHONG
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
}`,ST=`#define PHONG
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
}`,MT=`#define STANDARD
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
}`,wT=`#define STANDARD
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
}`,ET=`#define TOON
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
}`,TT=`#define TOON
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
}`,bT=`uniform float size;
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
}`,AT=`uniform vec3 diffuse;
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
}`,CT=`#include <common>
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
}`,RT=`uniform vec3 color;
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
}`,PT=`uniform float rotation;
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
}`,LT=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:Kw,alphahash_pars_fragment:eE,alphamap_fragment:tE,alphamap_pars_fragment:rE,alphatest_fragment:nE,alphatest_pars_fragment:iE,aomap_fragment:aE,aomap_pars_fragment:oE,batching_pars_vertex:sE,batching_vertex:lE,begin_vertex:uE,beginnormal_vertex:cE,bsdfs:hE,iridescence_fragment:dE,bumpmap_pars_fragment:pE,clipping_planes_fragment:fE,clipping_planes_pars_fragment:mE,clipping_planes_pars_vertex:gE,clipping_planes_vertex:vE,color_fragment:_E,color_pars_fragment:yE,color_pars_vertex:xE,color_vertex:SE,common:ME,cube_uv_reflection_fragment:wE,defaultnormal_vertex:EE,displacementmap_pars_vertex:TE,displacementmap_vertex:bE,emissivemap_fragment:AE,emissivemap_pars_fragment:CE,colorspace_fragment:RE,colorspace_pars_fragment:PE,envmap_fragment:LE,envmap_common_pars_fragment:NE,envmap_pars_fragment:IE,envmap_pars_vertex:DE,envmap_physical_pars_fragment:XE,envmap_vertex:UE,fog_vertex:kE,fog_pars_vertex:OE,fog_fragment:FE,fog_pars_fragment:zE,gradientmap_pars_fragment:BE,lightmap_pars_fragment:VE,lights_lambert_fragment:HE,lights_lambert_pars_fragment:GE,lights_pars_begin:WE,lights_toon_fragment:jE,lights_toon_pars_fragment:$E,lights_phong_fragment:YE,lights_phong_pars_fragment:qE,lights_physical_fragment:ZE,lights_physical_pars_fragment:JE,lights_fragment_begin:QE,lights_fragment_maps:KE,lights_fragment_end:e2,logdepthbuf_fragment:t2,logdepthbuf_pars_fragment:r2,logdepthbuf_pars_vertex:n2,logdepthbuf_vertex:i2,map_fragment:a2,map_pars_fragment:o2,map_particle_fragment:s2,map_particle_pars_fragment:l2,metalnessmap_fragment:u2,metalnessmap_pars_fragment:c2,morphinstance_vertex:h2,morphcolor_vertex:d2,morphnormal_vertex:p2,morphtarget_pars_vertex:f2,morphtarget_vertex:m2,normal_fragment_begin:g2,normal_fragment_maps:v2,normal_pars_fragment:_2,normal_pars_vertex:y2,normal_vertex:x2,normalmap_pars_fragment:S2,clearcoat_normal_fragment_begin:M2,clearcoat_normal_fragment_maps:w2,clearcoat_pars_fragment:E2,iridescence_pars_fragment:T2,opaque_fragment:b2,packing:A2,premultiplied_alpha_fragment:C2,project_vertex:R2,dithering_fragment:P2,dithering_pars_fragment:L2,roughnessmap_fragment:N2,roughnessmap_pars_fragment:I2,shadowmap_pars_fragment:D2,shadowmap_pars_vertex:U2,shadowmap_vertex:k2,shadowmask_pars_fragment:O2,skinbase_vertex:F2,skinning_pars_vertex:z2,skinning_vertex:B2,skinnormal_vertex:V2,specularmap_fragment:H2,specularmap_pars_fragment:G2,tonemapping_fragment:W2,tonemapping_pars_fragment:X2,transmission_fragment:j2,transmission_pars_fragment:$2,uv_pars_fragment:Y2,uv_pars_vertex:q2,uv_vertex:Z2,worldpos_vertex:J2,background_vert:Q2,background_frag:K2,backgroundCube_vert:eT,backgroundCube_frag:tT,cube_vert:rT,cube_frag:nT,depth_vert:iT,depth_frag:aT,distanceRGBA_vert:oT,distanceRGBA_frag:sT,equirect_vert:lT,equirect_frag:uT,linedashed_vert:cT,linedashed_frag:hT,meshbasic_vert:dT,meshbasic_frag:pT,meshlambert_vert:fT,meshlambert_frag:mT,meshmatcap_vert:gT,meshmatcap_frag:vT,meshnormal_vert:_T,meshnormal_frag:yT,meshphong_vert:xT,meshphong_frag:ST,meshphysical_vert:MT,meshphysical_frag:wT,meshtoon_vert:ET,meshtoon_frag:TT,points_vert:bT,points_frag:AT,shadow_vert:CT,shadow_frag:RT,sprite_vert:PT,sprite_frag:LT},xe={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Ln={basic:{uniforms:Er([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Er([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new et(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Er([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Er([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Er([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new et(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Er([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Er([xe.points,xe.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Er([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Er([xe.common,xe.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Er([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Er([xe.sprite,xe.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:Er([xe.common,xe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:Er([xe.lights,xe.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Ln.physical={uniforms:Er([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var yc={r:0,b:0,g:0},fa=new Gi,NT=new St;function IT(e,t,r,n,i,a,o){let s=new et(0),l=a===!0?0:1,u,c,p=null,d=0,f=null;function y(m){let g=m.isScene===!0?m.background:null;return g&&g.isTexture&&(g=(m.backgroundBlurriness>0?r:t).get(g)),g}function _(m){let g=!1,x=y(m);x===null?h(s,l):x&&x.isColor&&(h(x,1),g=!0);let L=e.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(e.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function v(m,g){let x=y(g);x&&(x.isCubeTexture||x.mapping===jc)?(c===void 0&&(c=new Fe(new yn(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Xo(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),fa.copy(g.backgroundRotation),fa.x*=-1,fa.y*=-1,fa.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(fa.y*=-1,fa.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(NT.makeRotationFromEuler(fa)),c.material.toneMapped=ct.getTransfer(x.colorSpace)!==pt,(p!==x||d!==x.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,p=x,d=x.version,f=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Fe(new Fi(2,2),new Un({name:"BackgroundMaterial",uniforms:Xo(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=ct.getTransfer(x.colorSpace)!==pt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(p!==x||d!==x.version||f!==e.toneMapping)&&(u.material.needsUpdate=!0,p=x,d=x.version,f=e.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function h(m,g){m.getRGB(yc,ly(e)),n.buffers.color.setClear(yc.r,yc.g,yc.b,g,o)}return{getClearColor:function(){return s},setClearColor:function(m,g=1){s.set(m),l=g,h(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,h(s,l)},render:_,addToRenderList:v}}function DT(e,t){let r=e.getParameter(e.MAX_VERTEX_ATTRIBS),n={},i=d(null),a=i,o=!1;function s(S,P,k,V,W){let Y=!1,j=p(V,k,P);a!==j&&(a=j,u(a.object)),Y=f(S,V,k,W),Y&&y(S,V,k,W),W!==null&&t.update(W,e.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,x(S,P,k,V),W!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return e.createVertexArray()}function u(S){return e.bindVertexArray(S)}function c(S){return e.deleteVertexArray(S)}function p(S,P,k){let V=k.wireframe===!0,W=n[S.id];W===void 0&&(W={},n[S.id]=W);let Y=W[P.id];Y===void 0&&(Y={},W[P.id]=Y);let j=Y[V];return j===void 0&&(j=d(l()),Y[V]=j),j}function d(S){let P=[],k=[],V=[];for(let W=0;W<r;W++)P[W]=0,k[W]=0,V[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:V,object:S,attributes:{},index:null}}function f(S,P,k,V){let W=a.attributes,Y=P.attributes,j=0,ie=k.getAttributes();for(let $ in ie)if(ie[$].location>=0){let fe=W[$],ye=Y[$];if(ye===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(ye=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(ye=S.instanceColor)),fe===void 0||fe.attribute!==ye||ye&&fe.data!==ye.data)return!0;j++}return a.attributesNum!==j||a.index!==V}function y(S,P,k,V){let W={},Y=P.attributes,j=0,ie=k.getAttributes();for(let $ in ie)if(ie[$].location>=0){let fe=Y[$];fe===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor));let ye={};ye.attribute=fe,fe&&fe.data&&(ye.data=fe.data),W[$]=ye,j++}a.attributes=W,a.attributesNum=j,a.index=V}function _(){let S=a.newAttributes;for(let P=0,k=S.length;P<k;P++)S[P]=0}function v(S){h(S,0)}function h(S,P){let k=a.newAttributes,V=a.enabledAttributes,W=a.attributeDivisors;k[S]=1,V[S]===0&&(e.enableVertexAttribArray(S),V[S]=1),W[S]!==P&&(e.vertexAttribDivisor(S,P),W[S]=P)}function m(){let S=a.newAttributes,P=a.enabledAttributes;for(let k=0,V=P.length;k<V;k++)P[k]!==S[k]&&(e.disableVertexAttribArray(k),P[k]=0)}function g(S,P,k,V,W,Y,j){j===!0?e.vertexAttribIPointer(S,P,k,W,Y):e.vertexAttribPointer(S,P,k,V,W,Y)}function x(S,P,k,V){_();let W=V.attributes,Y=k.getAttributes(),j=P.defaultAttributeValues;for(let ie in Y){let $=Y[ie];if($.location>=0){let fe=W[ie];if(fe===void 0&&(ie==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),ie==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor)),fe!==void 0){let ye=fe.normalized,Xe=fe.itemSize,Je=t.get(fe);if(Je===void 0)continue;let Z=Je.buffer,de=Je.type,Ie=Je.bytesPerElement,Le=de===e.INT||de===e.UNSIGNED_INT||fe.gpuType===rm;if(fe.isInterleavedBufferAttribute){let ve=fe.data,Be=ve.stride,Ze=fe.offset;if(ve.isInstancedInterleavedBuffer){for(let Ge=0;Ge<$.locationSize;Ge++)h($.location+Ge,ve.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ge=0;Ge<$.locationSize;Ge++)v($.location+Ge);e.bindBuffer(e.ARRAY_BUFFER,Z);for(let Ge=0;Ge<$.locationSize;Ge++)g($.location+Ge,Xe/$.locationSize,de,ye,Be*Ie,(Ze+Xe/$.locationSize*Ge)*Ie,Le)}else{if(fe.isInstancedBufferAttribute){for(let ve=0;ve<$.locationSize;ve++)h($.location+ve,fe.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ve=0;ve<$.locationSize;ve++)v($.location+ve);e.bindBuffer(e.ARRAY_BUFFER,Z);for(let ve=0;ve<$.locationSize;ve++)g($.location+ve,Xe/$.locationSize,de,ye,Xe*Ie,Xe/$.locationSize*ve*Ie,Le)}}else if(j!==void 0){let ye=j[ie];if(ye!==void 0)switch(ye.length){case 2:e.vertexAttrib2fv($.location,ye);break;case 3:e.vertexAttrib3fv($.location,ye);break;case 4:e.vertexAttrib4fv($.location,ye);break;default:e.vertexAttrib1fv($.location,ye)}}}}m()}function L(){R();for(let S in n){let P=n[S];for(let k in P){let V=P[k];for(let W in V)c(V[W].object),delete V[W];delete P[k]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;let P=n[S.id];for(let k in P){let V=P[k];for(let W in V)c(V[W].object),delete V[W];delete P[k]}delete n[S.id]}function b(S){for(let P in n){let k=n[P];if(k[S.id]===void 0)continue;let V=k[S.id];for(let W in V)c(V[W].object),delete V[W];delete k[S.id]}}function R(){w(),o=!0,a!==i&&(a=i,u(a.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:R,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:v,disableUnusedAttributes:m}}function UT(e,t,r){let n;function i(u){n=u}function a(u,c){e.drawArrays(n,u,c),r.update(c,n,1)}function o(u,c,p){p!==0&&(e.drawArraysInstanced(n,u,c,p),r.update(c,n,p))}function s(u,c,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,c,0,p);let d=0;for(let f=0;f<p;f++)d+=c[f];r.update(d,n,1)}function l(u,c,p,d){if(p===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let y=0;y<u.length;y++)o(u[y],c[y],d[y]);else{f.multiDrawArraysInstancedWEBGL(n,u,0,c,0,d,0,p);let y=0;for(let _=0;_<p;_++)y+=c[_]*d[_];r.update(y,n,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function kT(e,t,r,n){let i;function a(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");i=e.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==Sn&&n.convert(b)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(b){let R=b===_l&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==ai&&n.convert(b)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Dn&&!R)}function l(b){if(b==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=r.precision!==void 0?r.precision:"highp",c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);let p=r.logarithmicDepthBuffer===!0,d=r.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),v=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),g=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),L=y>0,T=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:s,precision:u,logarithmicDepthBuffer:p,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:y,maxTextureSize:_,maxCubemapSize:v,maxAttributes:h,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:x,vertexTextures:L,maxSamples:T}}function OT(e){let t=this,r=null,n=0,i=!1,a=!1,o=new ga,s=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let f=p.length!==0||d||n!==0||i;return i=d,n=p.length,f},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,d){r=c(p,d,0)},this.setState=function(p,d,f){let y=p.clippingPlanes,_=p.clipIntersection,v=p.clipShadows,h=e.get(p);if(!i||y===null||y.length===0||a&&!v)a?c(null):u();else{let m=a?0:n,g=m*4,x=h.clippingState||null;l.value=x,x=c(y,d,g,f);for(let L=0;L!==g;++L)x[L]=r[L];h.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==r&&(l.value=r,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(p,d,f,y){let _=p!==null?p.length:0,v=null;if(_!==0){if(v=l.value,y!==!0||v===null){let h=f+_*4,m=d.matrixWorldInverse;s.getNormalMatrix(m),(v===null||v.length<h)&&(v=new Float32Array(h));for(let g=0,x=f;g!==_;++g,x+=4)o.copy(p[g]).applyMatrix4(m,s),o.normal.toArray(v,x),v[x+3]=o.constant}l.value=v,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,v}}function FT(e){let t=new WeakMap;function r(o,s){return s===gf?o.mapping=Vo:s===vf&&(o.mapping=Ho),o}function n(o){if(o&&o.isTexture){let s=o.mapping;if(s===gf||s===vf)if(t.has(o)){let l=t.get(o).texture;return r(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let u=new qw(l.height);return u.fromEquirectangularTexture(e,o),t.set(o,u),o.addEventListener("dispose",i),r(u.texture,o.mapping)}else return null}}return o}function i(o){let s=o.target;s.removeEventListener("dispose",i);let l=t.get(s);l!==void 0&&(t.delete(s),l.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}var py=class extends uy{constructor(e=-1,t=1,r=1,n=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2,i=r-e,a=r+e,o=n+t,s=n-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=l*this.view.offsetX,a=i+l*this.view.width,o-=u*this.view.offsetY,s=o-u*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Io=4,W_=[.125,.215,.35,.446,.526,.582],ya=20,Wp=new py,X_=new et,Xp=null,jp=0,$p=0,Yp=!1,va=(1+Math.sqrt(5))/2,Mo=1/va,j_=[new N(-va,Mo,0),new N(va,Mo,0),new N(-Mo,0,va),new N(Mo,0,va),new N(0,va,-Mo),new N(0,va,Mo),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],qf=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){Xp=this._renderer.getRenderTarget(),jp=this._renderer.getActiveCubeFace(),$p=this._renderer.getActiveMipmapLevel(),Yp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,r,n,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=q_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Y_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xp,jp,$p),this._renderer.xr.enabled=Yp,e.scissorTest=!1,xc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vo||e.mapping===Ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xp=this._renderer.getRenderTarget(),jp=this._renderer.getActiveCubeFace(),$p=this._renderer.getActiveMipmapLevel(),Yp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:In,minFilter:In,generateMipmaps:!1,type:_l,format:Sn,colorSpace:jo,depthBuffer:!1},n=$_(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$_(e,t,r);let{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zT(i)),this._blurMaterial=BT(i,e,t)}return n}_compileMaterial(e){let t=new Fe(this._lodPlanes[0],e);this._renderer.compile(t,Wp)}_sceneToCubeUV(e,t,r,n){let i=new Gr(90,1,t,r),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,l=s.autoClear,u=s.toneMapping;s.getClearColor(X_),s.toneMapping=Vi,s.autoClear=!1;let c=new ei({name:"PMREM.Background",side:Tr,depthWrite:!1,depthTest:!1}),p=new Fe(new yn,c),d=!1,f=e.background;f?f.isColor&&(c.color.copy(f),e.background=null,d=!0):(c.color.copy(X_),d=!0);for(let y=0;y<6;y++){let _=y%3;_===0?(i.up.set(0,a[y],0),i.lookAt(o[y],0,0)):_===1?(i.up.set(0,0,a[y]),i.lookAt(0,o[y],0)):(i.up.set(0,a[y],0),i.lookAt(0,0,o[y]));let v=this._cubeSize;xc(n,_*v,y>2?v:0,v,v),s.setRenderTarget(n),d&&s.render(p,i),s.render(e,i)}p.geometry.dispose(),p.material.dispose(),s.toneMapping=u,s.autoClear=l,e.background=f}_textureToCubeUV(e,t){let r=this._renderer,n=e.mapping===Vo||e.mapping===Ho;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=q_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Y_());let i=n?this._cubemapMaterial:this._equirectMaterial,a=new Fe(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;xc(t,0,0,3*s,2*s),r.setRenderTarget(t),r.render(a,Wp)}_applyPMREM(e){let t=this._renderer,r=t.autoClear;t.autoClear=!1;let n=this._lodPlanes.length;for(let i=1;i<n;i++){let a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=j_[(n-i-1)%j_.length];this._blur(e,i-1,i,a,o)}t.autoClear=r}_blur(e,t,r,n,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,r,n,"latitudinal",i),this._halfBlur(a,e,r,r,n,"longitudinal",i)}_halfBlur(e,t,r,n,i,a,o){let s=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,c=new Fe(this._lodPlanes[n],l),p=l.uniforms,d=this._sizeLods[r]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*ya-1),y=i/f,_=isFinite(i)?1+Math.floor(u*y):ya;_>ya&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ya}`);let v=[],h=0;for(let T=0;T<ya;++T){let b=T/y,R=Math.exp(-b*b/2);v.push(R),T===0?h+=R:T<_&&(h+=2*R)}for(let T=0;T<v.length;T++)v[T]=v[T]/h;p.envMap.value=e.texture,p.samples.value=_,p.weights.value=v,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:m}=this;p.dTheta.value=f,p.mipInt.value=m-r;let g=this._sizeLods[n],x=3*g*(n>m-Io?n-m+Io:0),L=4*(this._cubeSize-g);xc(t,x,L,3*g,2*g),s.setRenderTarget(t),s.render(c,Wp)}};function zT(e){let t=[],r=[],n=[],i=e,a=e-Io+1+W_.length;for(let o=0;o<a;o++){let s=Math.pow(2,i);r.push(s);let l=1/s;o>e-Io?l=W_[o-e+Io-1]:o===0&&(l=0),n.push(l);let u=1/(s-2),c=-u,p=1+u,d=[c,c,p,c,p,p,c,c,p,p,c,p],f=6,y=6,_=3,v=2,h=1,m=new Float32Array(_*y*f),g=new Float32Array(v*y*f),x=new Float32Array(h*y*f);for(let T=0;T<f;T++){let b=T%3*2/3-1,R=T>2?0:-1,w=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];m.set(w,_*y*T),g.set(d,v*y*T);let S=[T,T,T,T,T,T];x.set(S,h*y*T)}let L=new fr;L.setAttribute("position",new br(m,_)),L.setAttribute("uv",new br(g,v)),L.setAttribute("faceIndex",new br(x,h)),t.push(L),i>Io&&i--}return{lodPlanes:t,sizeLods:r,sigmas:n}}function $_(e,t,r){let n=new Ea(e,t,r);return n.texture.mapping=jc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xc(e,t,r,n,i){e.viewport.set(t,r,n,i),e.scissor.set(t,r,n,i)}function BT(e,t,r){let n=new Float32Array(ya),i=new N(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:ya,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:cm(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Y_(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cm(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function q_(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function cm(){return`

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
	`}function VT(e){let t=new WeakMap,r=null;function n(s){if(s&&s.isTexture){let l=s.mapping,u=l===gf||l===vf,c=l===Vo||l===Ho;if(u||c){let p=t.get(s),d=p!==void 0?p.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==d)return r===null&&(r=new qf(e)),p=u?r.fromEquirectangular(s,p):r.fromCubemap(s,p),p.texture.pmremVersion=s.pmremVersion,t.set(s,p),p.texture;if(p!==void 0)return p.texture;{let f=s.image;return u&&f&&f.height>0||c&&f&&i(f)?(r===null&&(r=new qf(e)),p=u?r.fromEquirectangular(s):r.fromCubemap(s),p.texture.pmremVersion=s.pmremVersion,t.set(s,p),s.addEventListener("dispose",a),p.texture):null}}}return s}function i(s){let l=0,u=6;for(let c=0;c<u;c++)s[c]!==void 0&&l++;return l===u}function a(s){let l=s.target;l.removeEventListener("dispose",a);let u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:n,dispose:o}}function HT(e){let t={};function r(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=e.getExtension(n)}return t[n]=i,i}return{has:function(n){return r(n)!==null},init:function(){r("EXT_color_buffer_float"),r("WEBGL_clip_cull_distance"),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture"),r("WEBGL_render_shared_exponent")},get:function(n){let i=r(n);return i===null&&ul("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function GT(e,t,r,n){let i={},a=new WeakMap;function o(p){let d=p.target;d.index!==null&&t.remove(d.index);for(let y in d.attributes)t.remove(d.attributes[y]);for(let y in d.morphAttributes){let _=d.morphAttributes[y];for(let v=0,h=_.length;v<h;v++)t.remove(_[v])}d.removeEventListener("dispose",o),delete i[d.id];let f=a.get(d);f&&(t.remove(f),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,r.memory.geometries--}function s(p,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,r.memory.geometries++),d}function l(p){let d=p.attributes;for(let y in d)t.update(d[y],e.ARRAY_BUFFER);let f=p.morphAttributes;for(let y in f){let _=f[y];for(let v=0,h=_.length;v<h;v++)t.update(_[v],e.ARRAY_BUFFER)}}function u(p){let d=[],f=p.index,y=p.attributes.position,_=0;if(f!==null){let m=f.array;_=f.version;for(let g=0,x=m.length;g<x;g+=3){let L=m[g+0],T=m[g+1],b=m[g+2];d.push(L,T,T,b,b,L)}}else if(y!==void 0){let m=y.array;_=y.version;for(let g=0,x=m.length/3-1;g<x;g+=3){let L=g+0,T=g+1,b=g+2;d.push(L,T,T,b,b,L)}}else return;let v=new(q1(d)?ay:iy)(d,1);v.version=_;let h=a.get(p);h&&t.remove(h),a.set(p,v)}function c(p){let d=a.get(p);if(d){let f=p.index;f!==null&&d.version<f.version&&u(p)}else u(p);return a.get(p)}return{get:s,update:l,getWireframeAttribute:c}}function WT(e,t,r){let n;function i(d){n=d}let a,o;function s(d){a=d.type,o=d.bytesPerElement}function l(d,f){e.drawElements(n,f,a,d*o),r.update(f,n,1)}function u(d,f,y){y!==0&&(e.drawElementsInstanced(n,f,a,d*o,y),r.update(f,n,y))}function c(d,f,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,a,d,0,y);let _=0;for(let v=0;v<y;v++)_+=f[v];r.update(_,n,1)}function p(d,f,y,_){if(y===0)return;let v=t.get("WEBGL_multi_draw");if(v===null)for(let h=0;h<d.length;h++)u(d[h]/o,f[h],_[h]);else{v.multiDrawElementsInstancedWEBGL(n,f,0,a,d,0,_,0,y);let h=0;for(let m=0;m<y;m++)h+=f[m]*_[m];r.update(h,n,1)}}this.setMode=i,this.setIndex=s,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=p}function XT(e){let t={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,s){switch(r.calls++,o){case e.TRIANGLES:r.triangles+=s*(a/3);break;case e.LINES:r.lines+=s*(a/2);break;case e.LINE_STRIP:r.lines+=s*(a-1);break;case e.LINE_LOOP:r.lines+=s*a;break;case e.POINTS:r.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:t,render:r,programs:null,autoReset:!0,reset:i,update:n}}function jT(e,t,r){let n=new WeakMap,i=new xt;function a(o,s,l){let u=o.morphTargetInfluences,c=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,p=c!==void 0?c.length:0,d=n.get(s);if(d===void 0||d.count!==p){let f=function(){R.dispose(),n.delete(s),s.removeEventListener("dispose",f)};d!==void 0&&d.texture.dispose();let y=s.morphAttributes.position!==void 0,_=s.morphAttributes.normal!==void 0,v=s.morphAttributes.color!==void 0,h=s.morphAttributes.position||[],m=s.morphAttributes.normal||[],g=s.morphAttributes.color||[],x=0;y===!0&&(x=1),_===!0&&(x=2),v===!0&&(x=3);let L=s.attributes.position.count*x,T=1;L>t.maxTextureSize&&(T=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);let b=new Float32Array(L*T*4*p),R=new Q1(b,L,T,p);R.type=Dn,R.needsUpdate=!0;let w=x*4;for(let S=0;S<p;S++){let P=h[S],k=m[S],V=g[S],W=L*T*4*S;for(let Y=0;Y<P.count;Y++){let j=Y*w;y===!0&&(i.fromBufferAttribute(P,Y),b[W+j+0]=i.x,b[W+j+1]=i.y,b[W+j+2]=i.z,b[W+j+3]=0),_===!0&&(i.fromBufferAttribute(k,Y),b[W+j+4]=i.x,b[W+j+5]=i.y,b[W+j+6]=i.z,b[W+j+7]=0),v===!0&&(i.fromBufferAttribute(V,Y),b[W+j+8]=i.x,b[W+j+9]=i.y,b[W+j+10]=i.z,b[W+j+11]=V.itemSize===4?i.w:1)}}d={count:p,texture:R,size:new he(L,T)},n.set(s,d),s.addEventListener("dispose",f)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,r);else{let f=0;for(let _=0;_<u.length;_++)f+=u[_];let y=s.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",y),l.getUniforms().setValue(e,"morphTargetInfluences",u)}l.getUniforms().setValue(e,"morphTargetsTexture",d.texture,r),l.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:a}}function $T(e,t,r,n){let i=new WeakMap;function a(l){let u=n.render.frame,c=l.geometry,p=t.get(l,c);if(i.get(p)!==u&&(t.update(p),i.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),i.get(l)!==u&&(r.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&r.update(l.instanceColor,e.ARRAY_BUFFER),i.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==u&&(d.update(),i.set(d,u))}return p}function o(){i=new WeakMap}function s(l){let u=l.target;u.removeEventListener("dispose",s),r.remove(u.instanceMatrix),u.instanceColor!==null&&r.remove(u.instanceColor)}return{update:a,dispose:o}}var fy=class extends Kr{constructor(e,t,r,n,i,a,o,s,l,u=Oo){if(u!==Oo&&u!==Wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===Oo&&(r=wa),r===void 0&&u===Wo&&(r=Go),super(null,n,i,a,o,s,u,r,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Wr,this.minFilter=s!==void 0?s:Wr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},my=new Kr,Z_=new fy(1,1),gy=new Q1,vy=new Iw,_y=new cy,J_=[],Q_=[],K_=new Float32Array(16),e1=new Float32Array(9),t1=new Float32Array(4);function Zo(e,t,r){let n=e[0];if(n<=0||n>0)return e;let i=t*r,a=J_[i];if(a===void 0&&(a=new Float32Array(i),J_[i]=a),t!==0){n.toArray(a,0);for(let o=1,s=0;o!==t;++o)s+=r,e[o].toArray(a,s)}return a}function $t(e,t){if(e.length!==t.length)return!1;for(let r=0,n=e.length;r<n;r++)if(e[r]!==t[r])return!1;return!0}function Yt(e,t){for(let r=0,n=t.length;r<n;r++)e[r]=t[r]}function Yc(e,t){let r=Q_[t];r===void 0&&(r=new Int32Array(t),Q_[t]=r);for(let n=0;n!==t;++n)r[n]=e.allocateTextureUnit();return r}function YT(e,t){let r=this.cache;r[0]!==t&&(e.uniform1f(this.addr,t),r[0]=t)}function qT(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if($t(r,t))return;e.uniform2fv(this.addr,t),Yt(r,t)}}function ZT(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else if(t.r!==void 0)(r[0]!==t.r||r[1]!==t.g||r[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),r[0]=t.r,r[1]=t.g,r[2]=t.b);else{if($t(r,t))return;e.uniform3fv(this.addr,t),Yt(r,t)}}function JT(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if($t(r,t))return;e.uniform4fv(this.addr,t),Yt(r,t)}}function QT(e,t){let r=this.cache,n=t.elements;if(n===void 0){if($t(r,t))return;e.uniformMatrix2fv(this.addr,!1,t),Yt(r,t)}else{if($t(r,n))return;t1.set(n),e.uniformMatrix2fv(this.addr,!1,t1),Yt(r,n)}}function KT(e,t){let r=this.cache,n=t.elements;if(n===void 0){if($t(r,t))return;e.uniformMatrix3fv(this.addr,!1,t),Yt(r,t)}else{if($t(r,n))return;e1.set(n),e.uniformMatrix3fv(this.addr,!1,e1),Yt(r,n)}}function eb(e,t){let r=this.cache,n=t.elements;if(n===void 0){if($t(r,t))return;e.uniformMatrix4fv(this.addr,!1,t),Yt(r,t)}else{if($t(r,n))return;K_.set(n),e.uniformMatrix4fv(this.addr,!1,K_),Yt(r,n)}}function tb(e,t){let r=this.cache;r[0]!==t&&(e.uniform1i(this.addr,t),r[0]=t)}function rb(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if($t(r,t))return;e.uniform2iv(this.addr,t),Yt(r,t)}}function nb(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else{if($t(r,t))return;e.uniform3iv(this.addr,t),Yt(r,t)}}function ib(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if($t(r,t))return;e.uniform4iv(this.addr,t),Yt(r,t)}}function ab(e,t){let r=this.cache;r[0]!==t&&(e.uniform1ui(this.addr,t),r[0]=t)}function ob(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if($t(r,t))return;e.uniform2uiv(this.addr,t),Yt(r,t)}}function sb(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else{if($t(r,t))return;e.uniform3uiv(this.addr,t),Yt(r,t)}}function lb(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if($t(r,t))return;e.uniform4uiv(this.addr,t),Yt(r,t)}}function ub(e,t,r){let n=this.cache,i=r.allocateTextureUnit();n[0]!==i&&(e.uniform1i(this.addr,i),n[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Z_.compareFunction=j1,a=Z_):a=my,r.setTexture2D(t||a,i)}function cb(e,t,r){let n=this.cache,i=r.allocateTextureUnit();n[0]!==i&&(e.uniform1i(this.addr,i),n[0]=i),r.setTexture3D(t||vy,i)}function hb(e,t,r){let n=this.cache,i=r.allocateTextureUnit();n[0]!==i&&(e.uniform1i(this.addr,i),n[0]=i),r.setTextureCube(t||_y,i)}function db(e,t,r){let n=this.cache,i=r.allocateTextureUnit();n[0]!==i&&(e.uniform1i(this.addr,i),n[0]=i),r.setTexture2DArray(t||gy,i)}function pb(e){switch(e){case 5126:return YT;case 35664:return qT;case 35665:return ZT;case 35666:return JT;case 35674:return QT;case 35675:return KT;case 35676:return eb;case 5124:case 35670:return tb;case 35667:case 35671:return rb;case 35668:case 35672:return nb;case 35669:case 35673:return ib;case 5125:return ab;case 36294:return ob;case 36295:return sb;case 36296:return lb;case 35678:case 36198:case 36298:case 36306:case 35682:return ub;case 35679:case 36299:case 36307:return cb;case 35680:case 36300:case 36308:case 36293:return hb;case 36289:case 36303:case 36311:case 36292:return db}}function fb(e,t){e.uniform1fv(this.addr,t)}function mb(e,t){let r=Zo(t,this.size,2);e.uniform2fv(this.addr,r)}function gb(e,t){let r=Zo(t,this.size,3);e.uniform3fv(this.addr,r)}function vb(e,t){let r=Zo(t,this.size,4);e.uniform4fv(this.addr,r)}function _b(e,t){let r=Zo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,r)}function yb(e,t){let r=Zo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,r)}function xb(e,t){let r=Zo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,r)}function Sb(e,t){e.uniform1iv(this.addr,t)}function Mb(e,t){e.uniform2iv(this.addr,t)}function wb(e,t){e.uniform3iv(this.addr,t)}function Eb(e,t){e.uniform4iv(this.addr,t)}function Tb(e,t){e.uniform1uiv(this.addr,t)}function bb(e,t){e.uniform2uiv(this.addr,t)}function Ab(e,t){e.uniform3uiv(this.addr,t)}function Cb(e,t){e.uniform4uiv(this.addr,t)}function Rb(e,t,r){let n=this.cache,i=t.length,a=Yc(r,i);$t(n,a)||(e.uniform1iv(this.addr,a),Yt(n,a));for(let o=0;o!==i;++o)r.setTexture2D(t[o]||my,a[o])}function Pb(e,t,r){let n=this.cache,i=t.length,a=Yc(r,i);$t(n,a)||(e.uniform1iv(this.addr,a),Yt(n,a));for(let o=0;o!==i;++o)r.setTexture3D(t[o]||vy,a[o])}function Lb(e,t,r){let n=this.cache,i=t.length,a=Yc(r,i);$t(n,a)||(e.uniform1iv(this.addr,a),Yt(n,a));for(let o=0;o!==i;++o)r.setTextureCube(t[o]||_y,a[o])}function Nb(e,t,r){let n=this.cache,i=t.length,a=Yc(r,i);$t(n,a)||(e.uniform1iv(this.addr,a),Yt(n,a));for(let o=0;o!==i;++o)r.setTexture2DArray(t[o]||gy,a[o])}function Ib(e){switch(e){case 5126:return fb;case 35664:return mb;case 35665:return gb;case 35666:return vb;case 35674:return _b;case 35675:return yb;case 35676:return xb;case 5124:case 35670:return Sb;case 35667:case 35671:return Mb;case 35668:case 35672:return wb;case 35669:case 35673:return Eb;case 5125:return Tb;case 36294:return bb;case 36295:return Ab;case 36296:return Cb;case 35678:case 36198:case 36298:case 36306:case 35682:return Rb;case 35679:case 36299:case 36307:return Pb;case 35680:case 36300:case 36308:case 36293:return Lb;case 36289:case 36303:case 36311:case 36292:return Nb}}var Db=class{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=pb(t.type)}},Ub=class{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ib(t.type)}},kb=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){let n=this.seq;for(let i=0,a=n.length;i!==a;++i){let o=n[i];o.setValue(e,t[o.id],r)}}},qp=/(\w+)(\])?(\[|\.)?/g;function r1(e,t){e.seq.push(t),e.map[t.id]=t}function Ob(e,t,r){let n=e.name,i=n.length;for(qp.lastIndex=0;;){let a=qp.exec(n),o=qp.lastIndex,s=a[1],l=a[2]==="]",u=a[3];if(l&&(s=s|0),u===void 0||u==="["&&o+2===i){r1(r,u===void 0?new Db(s,e,t):new Ub(s,e,t));break}else{let c=r.map[s];c===void 0&&(c=new kb(s),r1(r,c)),r=c}}}var Bc=class{constructor(e,t){this.seq=[],this.map={};let r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){let i=e.getActiveUniform(t,n),a=e.getUniformLocation(t,i.name);Ob(i,a,this)}}setValue(e,t,r,n){let i=this.map[t];i!==void 0&&i.setValue(e,r,n)}setOptional(e,t,r){let n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let i=0,a=t.length;i!==a;++i){let o=t[i],s=r[o.id];s.needsUpdate!==!1&&o.setValue(e,s.value,n)}}static seqWithValue(e,t){let r=[];for(let n=0,i=e.length;n!==i;++n){let a=e[n];a.id in t&&r.push(a)}return r}};function n1(e,t,r){let n=e.createShader(t);return e.shaderSource(n,r),e.compileShader(n),n}var Fb=37297,zb=0;function Bb(e,t){let r=e.split(`
`),n=[],i=Math.max(t-6,0),a=Math.min(t+6,r.length);for(let o=i;o<a;o++){let s=o+1;n.push(`${s===t?">":" "} ${s}: ${r[o]}`)}return n.join(`
`)}var i1=new at;function Vb(e){ct._getMatrix(i1,ct.workingColorSpace,e);let t=`mat3( ${i1.elements.map(r=>r.toFixed(4))} )`;switch(ct.getTransfer(e)){case $c:return[t,"LinearTransferOETF"];case pt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function a1(e,t,r){let n=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(n&&i==="")return"";let a=/ERROR: 0:(\d+)/.exec(i);if(a){let o=parseInt(a[1]);return r.toUpperCase()+`

`+i+`

`+Bb(e.getShaderSource(t),o)}else return i}function Hb(e,t){let r=Vb(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${r[1]}( vec4( value.rgb * ${r[0]}, value.a ) );`,"}"].join(`
`)}function Gb(e,t){let r;switch(t){case sw:r="Linear";break;case lw:r="Reinhard";break;case uw:r="Cineon";break;case D1:r="ACESFilmic";break;case hw:r="AgX";break;case dw:r="Neutral";break;case cw:r="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),r="Linear"}return"vec3 "+e+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}var Sc=new N;function Wb(){ct.getLuminanceCoefficients(Sc);let e=Sc.x.toFixed(4),t=Sc.y.toFixed(4),r=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${r} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xb(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cl).join(`
`)}function jb(e){let t=[];for(let r in e){let n=e[r];n!==!1&&t.push("#define "+r+" "+n)}return t.join(`
`)}function $b(e,t){let r={},n=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let a=e.getActiveAttrib(t,i),o=a.name,s=1;a.type===e.FLOAT_MAT2&&(s=2),a.type===e.FLOAT_MAT3&&(s=3),a.type===e.FLOAT_MAT4&&(s=4),r[o]={type:a.type,location:e.getAttribLocation(t,o),locationSize:s}}return r}function cl(e){return e!==""}function o1(e,t){let r=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function s1(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Yb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zf(e){return e.replace(Yb,Zb)}var qb=new Map;function Zb(e,t){let r=nt[t];if(r===void 0){let n=qb.get(t);if(n!==void 0)r=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Zf(r)}var Jb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function l1(e){return e.replace(Jb,Qb)}function Qb(e,t,r,n){let i="";for(let a=parseInt(t);a<parseInt(r);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function u1(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function Kb(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===N1?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===BM?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Kn&&(t="SHADOWMAP_TYPE_VSM"),t}function eA(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Vo:case Ho:t="ENVMAP_TYPE_CUBE";break;case jc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tA(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Ho&&(t="ENVMAP_MODE_REFRACTION"),t}function rA(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case I1:t="ENVMAP_BLENDING_MULTIPLY";break;case aw:t="ENVMAP_BLENDING_MIX";break;case ow:t="ENVMAP_BLENDING_ADD";break}return t}function nA(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let r=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,r),112)),texelHeight:n,maxMip:r}}function iA(e,t,r,n){let i=e.getContext(),a=r.defines,o=r.vertexShader,s=r.fragmentShader,l=Kb(r),u=eA(r),c=tA(r),p=rA(r),d=nA(r),f=Xb(r),y=jb(a),_=i.createProgram(),v,h,m=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(v=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,y].filter(cl).join(`
`),v.length>0&&(v+=`
`),h=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,y].filter(cl).join(`
`),h.length>0&&(h+=`
`)):(v=[u1(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,y,r.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",r.batching?"#define USE_BATCHING":"",r.batchingColor?"#define USE_BATCHING_COLOR":"",r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.instancingMorph?"#define USE_INSTANCING_MORPH":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+c:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cl).join(`
`),h=[u1(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,y,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+u:"",r.envMap?"#define "+c:"",r.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.dispersion?"#define USE_DISPERSION":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor||r.batchingColor?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",r.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==Vi?"#define TONE_MAPPING":"",r.toneMapping!==Vi?nt.tonemapping_pars_fragment:"",r.toneMapping!==Vi?Gb("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Hb("linearToOutputTexel",r.outputColorSpace),Wb(),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(cl).join(`
`)),o=Zf(o),o=o1(o,r),o=s1(o,r),s=Zf(s),s=o1(s,r),s=s1(s,r),o=l1(o),s=l1(s),r.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,h=["#define varying in",r.glslVersion===w_?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===w_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let g=m+v+o,x=m+h+s,L=n1(i,i.VERTEX_SHADER,g),T=n1(i,i.FRAGMENT_SHADER,x);i.attachShader(_,L),i.attachShader(_,T),r.index0AttributeName!==void 0?i.bindAttribLocation(_,0,r.index0AttributeName):r.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(P){if(e.debug.checkShaderErrors){let k=i.getProgramInfoLog(_).trim(),V=i.getShaderInfoLog(L).trim(),W=i.getShaderInfoLog(T).trim(),Y=!0,j=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Y=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(i,_,L,T);else{let ie=a1(i,L,"vertex"),$=a1(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+ie+`
`+$)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(V===""||W==="")&&(j=!1);j&&(P.diagnostics={runnable:Y,programLog:k,vertexShader:{log:V,prefix:v},fragmentShader:{log:W,prefix:h}})}i.deleteShader(L),i.deleteShader(T),R=new Bc(i,_),w=$b(i,_)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let S=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,Fb)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=zb++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=T,this}var aA=0,oA=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),i=this._getShaderStage(r),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){let t=this.shaderCache,r=t.get(e);return r===void 0&&(r=new sA(e),t.set(e,r)),r}},sA=class{constructor(e){this.id=aA++,this.code=e,this.usedTimes=0}};function lA(e,t,r,n,i,a,o){let s=new ry,l=new oA,u=new Set,c=[],p=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return u.add(w),w===0?"uv":`uv${w}`}function v(w,S,P,k,V){let W=k.fog,Y=V.geometry,j=w.isMeshStandardMaterial?k.environment:null,ie=(w.isMeshStandardMaterial?r:t).get(w.envMap||j),$=ie&&ie.mapping===jc?ie.image.height:null,fe=y[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let ye=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Xe=ye!==void 0?ye.length:0,Je=0;Y.morphAttributes.position!==void 0&&(Je=1),Y.morphAttributes.normal!==void 0&&(Je=2),Y.morphAttributes.color!==void 0&&(Je=3);let Z,de,Ie,Le;if(fe){let Te=Ln[fe];Z=Te.vertexShader,de=Te.fragmentShader}else Z=w.vertexShader,de=w.fragmentShader,l.update(w),Ie=l.getVertexShaderID(w),Le=l.getFragmentShaderID(w);let ve=e.getRenderTarget(),Be=e.state.buffers.depth.getReversed(),Ze=V.isInstancedMesh===!0,Ge=V.isBatchedMesh===!0,ee=!!w.map,me=!!w.matcap,A=!!ie,be=!!w.aoMap,ae=!!w.lightMap,Ae=!!w.bumpMap,oe=!!w.normalMap,je=!!w.displacementMap,we=!!w.emissiveMap,Ne=!!w.metalnessMap,C=!!w.roughnessMap,M=w.anisotropy>0,z=w.clearcoat>0,K=w.dispersion>0,re=w.iridescence>0,q=w.sheen>0,Ue=w.transmission>0,_e=M&&!!w.anisotropyMap,Me=z&&!!w.clearcoatMap,$e=z&&!!w.clearcoatNormalMap,pe=z&&!!w.clearcoatRoughnessMap,Ee=re&&!!w.iridescenceMap,ze=re&&!!w.iridescenceThicknessMap,We=q&&!!w.sheenColorMap,Ce=q&&!!w.sheenRoughnessMap,Ye=!!w.specularMap,tt=!!w.specularColorMap,Mt=!!w.specularIntensityMap,U=Ue&&!!w.transmissionMap,ue=Ue&&!!w.thicknessMap,J=!!w.gradientMap,te=!!w.alphaMap,B=w.alphaTest>0,F=!!w.alphaHash,Q=!!w.extensions,ge=Vi;w.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(ge=e.toneMapping);let Se={shaderID:fe,shaderType:w.type,shaderName:w.name,vertexShader:Z,fragmentShader:de,defines:w.defines,customVertexShaderID:Ie,customFragmentShaderID:Le,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Ge,batchingColor:Ge&&V._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&V.instanceColor!==null,instancingMorph:Ze&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ve===null?e.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:jo,alphaToCoverage:!!w.alphaToCoverage,map:ee,matcap:me,envMap:A,envMapMode:A&&ie.mapping,envMapCubeUVHeight:$,aoMap:be,lightMap:ae,bumpMap:Ae,normalMap:oe,displacementMap:d&&je,emissiveMap:we,normalMapObjectSpace:oe&&w.normalMapType===gw,normalMapTangentSpace:oe&&w.normalMapType===X1,metalnessMap:Ne,roughnessMap:C,anisotropy:M,anisotropyMap:_e,clearcoat:z,clearcoatMap:Me,clearcoatNormalMap:$e,clearcoatRoughnessMap:pe,dispersion:K,iridescence:re,iridescenceMap:Ee,iridescenceThicknessMap:ze,sheen:q,sheenColorMap:We,sheenRoughnessMap:Ce,specularMap:Ye,specularColorMap:tt,specularIntensityMap:Mt,transmission:Ue,transmissionMap:U,thicknessMap:ue,gradientMap:J,opaque:w.transparent===!1&&w.blending===ko&&w.alphaToCoverage===!1,alphaMap:te,alphaTest:B,alphaHash:F,combine:w.combine,mapUv:ee&&_(w.map.channel),aoMapUv:be&&_(w.aoMap.channel),lightMapUv:ae&&_(w.lightMap.channel),bumpMapUv:Ae&&_(w.bumpMap.channel),normalMapUv:oe&&_(w.normalMap.channel),displacementMapUv:je&&_(w.displacementMap.channel),emissiveMapUv:we&&_(w.emissiveMap.channel),metalnessMapUv:Ne&&_(w.metalnessMap.channel),roughnessMapUv:C&&_(w.roughnessMap.channel),anisotropyMapUv:_e&&_(w.anisotropyMap.channel),clearcoatMapUv:Me&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:$e&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:We&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(w.sheenRoughnessMap.channel),specularMapUv:Ye&&_(w.specularMap.channel),specularColorMapUv:tt&&_(w.specularColorMap.channel),specularIntensityMapUv:Mt&&_(w.specularIntensityMap.channel),transmissionMapUv:U&&_(w.transmissionMap.channel),thicknessMapUv:ue&&_(w.thicknessMap.channel),alphaMapUv:te&&_(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(oe||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Y.attributes.uv&&(ee||te),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:Be,skinning:V.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Xe,morphTextureStride:Je,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:e.shadowMap.enabled&&P.length>0,shadowMapType:e.shadowMap.type,toneMapping:ge,decodeVideoTexture:ee&&w.map.isVideoTexture===!0&&ct.getTransfer(w.map.colorSpace)===pt,decodeVideoTextureEmissive:we&&w.emissiveMap.isVideoTexture===!0&&ct.getTransfer(w.emissiveMap.colorSpace)===pt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ti,flipSided:w.side===Tr,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Q&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Q&&w.extensions.multiDraw===!0||Ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Se.vertexUv1s=u.has(1),Se.vertexUv2s=u.has(2),Se.vertexUv3s=u.has(3),u.clear(),Se}function h(w){let S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(let P in w.defines)S.push(P),S.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(m(S,w),g(S,w),S.push(e.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function m(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function g(w,S){s.disableAll(),S.supportsVertexTextures&&s.enable(0),S.instancing&&s.enable(1),S.instancingColor&&s.enable(2),S.instancingMorph&&s.enable(3),S.matcap&&s.enable(4),S.envMap&&s.enable(5),S.normalMapObjectSpace&&s.enable(6),S.normalMapTangentSpace&&s.enable(7),S.clearcoat&&s.enable(8),S.iridescence&&s.enable(9),S.alphaTest&&s.enable(10),S.vertexColors&&s.enable(11),S.vertexAlphas&&s.enable(12),S.vertexUv1s&&s.enable(13),S.vertexUv2s&&s.enable(14),S.vertexUv3s&&s.enable(15),S.vertexTangents&&s.enable(16),S.anisotropy&&s.enable(17),S.alphaHash&&s.enable(18),S.batching&&s.enable(19),S.dispersion&&s.enable(20),S.batchingColor&&s.enable(21),w.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.reverseDepthBuffer&&s.enable(4),S.skinning&&s.enable(5),S.morphTargets&&s.enable(6),S.morphNormals&&s.enable(7),S.morphColors&&s.enable(8),S.premultipliedAlpha&&s.enable(9),S.shadowMapEnabled&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.transmission&&s.enable(15),S.sheen&&s.enable(16),S.opaque&&s.enable(17),S.pointsUvs&&s.enable(18),S.decodeVideoTexture&&s.enable(19),S.decodeVideoTextureEmissive&&s.enable(20),S.alphaToCoverage&&s.enable(21),w.push(s.mask)}function x(w){let S=y[w.type],P;if(S){let k=Ln[S];P=Xw.clone(k.uniforms)}else P=w.uniforms;return P}function L(w,S){let P;for(let k=0,V=c.length;k<V;k++){let W=c[k];if(W.cacheKey===S){P=W,++P.usedTimes;break}}return P===void 0&&(P=new iA(e,S,w,a),c.push(P)),P}function T(w){if(--w.usedTimes===0){let S=c.indexOf(w);c[S]=c[c.length-1],c.pop(),w.destroy()}}function b(w){l.remove(w)}function R(){l.dispose()}return{getParameters:v,getProgramCacheKey:h,getUniforms:x,acquireProgram:L,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:R}}function uA(){let e=new WeakMap;function t(o){return e.has(o)}function r(o){let s=e.get(o);return s===void 0&&(s={},e.set(o,s)),s}function n(o){e.delete(o)}function i(o,s,l){e.get(o)[s]=l}function a(){e=new WeakMap}return{has:t,get:r,remove:n,update:i,dispose:a}}function cA(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function c1(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function h1(){let e=[],t=0,r=[],n=[],i=[];function a(){t=0,r.length=0,n.length=0,i.length=0}function o(p,d,f,y,_,v){let h=e[t];return h===void 0?(h={id:p.id,object:p,geometry:d,material:f,groupOrder:y,renderOrder:p.renderOrder,z:_,group:v},e[t]=h):(h.id=p.id,h.object=p,h.geometry=d,h.material=f,h.groupOrder=y,h.renderOrder=p.renderOrder,h.z=_,h.group=v),t++,h}function s(p,d,f,y,_,v){let h=o(p,d,f,y,_,v);f.transmission>0?n.push(h):f.transparent===!0?i.push(h):r.push(h)}function l(p,d,f,y,_,v){let h=o(p,d,f,y,_,v);f.transmission>0?n.unshift(h):f.transparent===!0?i.unshift(h):r.unshift(h)}function u(p,d){r.length>1&&r.sort(p||cA),n.length>1&&n.sort(d||c1),i.length>1&&i.sort(d||c1)}function c(){for(let p=t,d=e.length;p<d;p++){let f=e[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:r,transmissive:n,transparent:i,init:a,push:s,unshift:l,finish:c,sort:u}}function hA(){let e=new WeakMap;function t(n,i){let a=e.get(n),o;return a===void 0?(o=new h1,e.set(n,[o])):i>=a.length?(o=new h1,a.push(o)):o=a[i],o}function r(){e=new WeakMap}return{get:t,dispose:r}}function dA(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let r;switch(t.type){case"DirectionalLight":r={direction:new N,color:new et};break;case"SpotLight":r={position:new N,direction:new N,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new N,color:new et,distance:0,decay:0};break;case"HemisphereLight":r={direction:new N,skyColor:new et,groundColor:new et};break;case"RectAreaLight":r={color:new et,position:new N,halfWidth:new N,halfHeight:new N};break}return e[t.id]=r,r}}}function pA(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let r;switch(t.type){case"DirectionalLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=r,r}}}var fA=0;function mA(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function gA(e){let t=new dA,r=pA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new N);let i=new N,a=new St,o=new St;function s(u){let c=0,p=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,y=0,_=0,v=0,h=0,m=0,g=0,x=0,L=0,T=0,b=0;u.sort(mA);for(let w=0,S=u.length;w<S;w++){let P=u[w],k=P.color,V=P.intensity,W=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=k.r*V,p+=k.g*V,d+=k.b*V;else if(P.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(P.sh.coefficients[j],V);b++}else if(P.isDirectionalLight){let j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ie=P.shadow,$=r.get(P);$.shadowIntensity=ie.intensity,$.shadowBias=ie.bias,$.shadowNormalBias=ie.normalBias,$.shadowRadius=ie.radius,$.shadowMapSize=ie.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=P.shadow.matrix,m++}n.directional[f]=j,f++}else if(P.isSpotLight){let j=t.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(k).multiplyScalar(V),j.distance=W,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,n.spot[_]=j;let ie=P.shadow;if(P.map&&(n.spotLightMap[L]=P.map,L++,ie.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[_]=ie.matrix,P.castShadow){let $=r.get(P);$.shadowIntensity=ie.intensity,$.shadowBias=ie.bias,$.shadowNormalBias=ie.normalBias,$.shadowRadius=ie.radius,$.shadowMapSize=ie.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=Y,x++}_++}else if(P.isRectAreaLight){let j=t.get(P);j.color.copy(k).multiplyScalar(V),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),n.rectArea[v]=j,v++}else if(P.isPointLight){let j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),j.distance=P.distance,j.decay=P.decay,P.castShadow){let ie=P.shadow,$=r.get(P);$.shadowIntensity=ie.intensity,$.shadowBias=ie.bias,$.shadowNormalBias=ie.normalBias,$.shadowRadius=ie.radius,$.shadowMapSize=ie.mapSize,$.shadowCameraNear=ie.camera.near,$.shadowCameraFar=ie.camera.far,n.pointShadow[y]=$,n.pointShadowMap[y]=Y,n.pointShadowMatrix[y]=P.shadow.matrix,g++}n.point[y]=j,y++}else if(P.isHemisphereLight){let j=t.get(P);j.skyColor.copy(P.color).multiplyScalar(V),j.groundColor.copy(P.groundColor).multiplyScalar(V),n.hemi[h]=j,h++}}v>0&&(e.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=p,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==f||R.pointLength!==y||R.spotLength!==_||R.rectAreaLength!==v||R.hemiLength!==h||R.numDirectionalShadows!==m||R.numPointShadows!==g||R.numSpotShadows!==x||R.numSpotMaps!==L||R.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=v,n.point.length=y,n.hemi.length=h,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=x+L-T,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=b,R.directionalLength=f,R.pointLength=y,R.spotLength=_,R.rectAreaLength=v,R.hemiLength=h,R.numDirectionalShadows=m,R.numPointShadows=g,R.numSpotShadows=x,R.numSpotMaps=L,R.numLightProbes=b,n.version=fA++)}function l(u,c){let p=0,d=0,f=0,y=0,_=0,v=c.matrixWorldInverse;for(let h=0,m=u.length;h<m;h++){let g=u[h];if(g.isDirectionalLight){let x=n.directional[p];x.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(v),p++}else if(g.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(v),x.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(v),f++}else if(g.isRectAreaLight){let x=n.rectArea[y];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(v),o.identity(),a.copy(g.matrixWorld),a.premultiply(v),o.extractRotation(a),x.halfWidth.set(g.width*.5,0,0),x.halfHeight.set(0,g.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),y++}else if(g.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(v),d++}else if(g.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(g.matrixWorld),x.direction.transformDirection(v),_++}}}return{setup:s,setupView:l,state:n}}function d1(e){let t=new gA(e),r=[],n=[];function i(c){u.camera=c,r.length=0,n.length=0}function a(c){r.push(c)}function o(c){n.push(c)}function s(){t.setup(r)}function l(c){t.setupView(r,c)}let u={lightsArray:r,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:u,setupLights:s,setupLightsView:l,pushLight:a,pushShadow:o}}function vA(e){let t=new WeakMap;function r(i,a=0){let o=t.get(i),s;return o===void 0?(s=new d1(e),t.set(i,[s])):a>=o.length?(s=new d1(e),o.push(s)):s=o[a],s}function n(){t=new WeakMap}return{get:r,dispose:n}}var _A=class extends Aa{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=fw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yA=class extends Aa{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},xA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SA=`uniform sampler2D shadow_pass;
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
}`;function MA(e,t,r){let n=new um,i=new he,a=new he,o=new xt,s=new _A({depthPacking:mw}),l=new yA,u={},c=r.maxTextureSize,p={[Hi]:Tr,[Tr]:Hi,[ti]:ti},d=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:xA,fragmentShader:SA}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let y=new fr;y.setAttribute("position",new br(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Fe(y,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=N1;let h=this.type;this.render=function(T,b,R){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||T.length===0)return;let w=e.getRenderTarget(),S=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),k=e.state;k.setBlending(Bi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let V=h!==Kn&&this.type===Kn,W=h===Kn&&this.type!==Kn;for(let Y=0,j=T.length;Y<j;Y++){let ie=T[Y],$=ie.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);let fe=$.getFrameExtents();if(i.multiply(fe),a.copy($.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(a.x=Math.floor(c/fe.x),i.x=a.x*fe.x,$.mapSize.x=a.x),i.y>c&&(a.y=Math.floor(c/fe.y),i.y=a.y*fe.y,$.mapSize.y=a.y)),$.map===null||V===!0||W===!0){let Xe=this.type!==Kn?{minFilter:Wr,magFilter:Wr}:{};$.map!==null&&$.map.dispose(),$.map=new Ea(i.x,i.y,Xe),$.map.texture.name=ie.name+".shadowMap",$.camera.updateProjectionMatrix()}e.setRenderTarget($.map),e.clear();let ye=$.getViewportCount();for(let Xe=0;Xe<ye;Xe++){let Je=$.getViewport(Xe);o.set(a.x*Je.x,a.y*Je.y,a.x*Je.z,a.y*Je.w),k.viewport(o),$.updateMatrices(ie,Xe),n=$.getFrustum(),x(b,R,$.camera,ie,this.type)}$.isPointLightShadow!==!0&&this.type===Kn&&m($,R),$.needsUpdate=!1}h=this.type,v.needsUpdate=!1,e.setRenderTarget(w,S,P)};function m(T,b){let R=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ea(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(b,null,R,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(b,null,R,f,_,null)}function g(T,b,R,w){let S=null,P=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)S=P;else if(S=R.isPointLight===!0?l:s,e.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let k=S.uuid,V=b.uuid,W=u[k];W===void 0&&(W={},u[k]=W);let Y=W[V];Y===void 0&&(Y=S.clone(),W[V]=Y,b.addEventListener("dispose",L)),S=Y}if(S.visible=b.visible,S.wireframe=b.wireframe,w===Kn?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:p[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let k=e.properties.get(S);k.light=R}return S}function x(T,b,R,w,S){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Kn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);let k=t.update(T),V=T.material;if(Array.isArray(V)){let W=k.groups;for(let Y=0,j=W.length;Y<j;Y++){let ie=W[Y],$=V[ie.materialIndex];if($&&$.visible){let fe=g(T,$,w,S);T.onBeforeShadow(e,T,b,R,k,fe,ie),e.renderBufferDirect(R,null,k,fe,T,ie),T.onAfterShadow(e,T,b,R,k,fe,ie)}}}else if(V.visible){let W=g(T,V,w,S);T.onBeforeShadow(e,T,b,R,k,W,null),e.renderBufferDirect(R,null,k,W,T,null),T.onAfterShadow(e,T,b,R,k,W,null)}}let P=T.children;for(let k=0,V=P.length;k<V;k++)x(P[k],b,R,w,S)}function L(T){T.target.removeEventListener("dispose",L);for(let b in u){let R=u[b],w=T.target.uuid;w in R&&(R[w].dispose(),delete R[w])}}}var wA={[uf]:cf,[hf]:ff,[df]:mf,[Bo]:pf,[cf]:uf,[ff]:hf,[mf]:df,[pf]:Bo};function EA(e,t){function r(){let U=!1,ue=new xt,J=null,te=new xt(0,0,0,0);return{setMask:function(B){J!==B&&!U&&(e.colorMask(B,B,B,B),J=B)},setLocked:function(B){U=B},setClear:function(B,F,Q,ge,Se){Se===!0&&(B*=ge,F*=ge,Q*=ge),ue.set(B,F,Q,ge),te.equals(ue)===!1&&(e.clearColor(B,F,Q,ge),te.copy(ue))},reset:function(){U=!1,J=null,te.set(-1,0,0,0)}}}function n(){let U=!1,ue=!1,J=null,te=null,B=null;return{setReversed:function(F){if(ue!==F){let Q=t.get("EXT_clip_control");ue?Q.clipControlEXT(Q.LOWER_LEFT_EXT,Q.ZERO_TO_ONE_EXT):Q.clipControlEXT(Q.LOWER_LEFT_EXT,Q.NEGATIVE_ONE_TO_ONE_EXT);let ge=B;B=null,this.setClear(ge)}ue=F},getReversed:function(){return ue},setTest:function(F){F?ve(e.DEPTH_TEST):Be(e.DEPTH_TEST)},setMask:function(F){J!==F&&!U&&(e.depthMask(F),J=F)},setFunc:function(F){if(ue&&(F=wA[F]),te!==F){switch(F){case uf:e.depthFunc(e.NEVER);break;case cf:e.depthFunc(e.ALWAYS);break;case hf:e.depthFunc(e.LESS);break;case Bo:e.depthFunc(e.LEQUAL);break;case df:e.depthFunc(e.EQUAL);break;case pf:e.depthFunc(e.GEQUAL);break;case ff:e.depthFunc(e.GREATER);break;case mf:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}te=F}},setLocked:function(F){U=F},setClear:function(F){B!==F&&(ue&&(F=1-F),e.clearDepth(F),B=F)},reset:function(){U=!1,J=null,te=null,B=null,ue=!1}}}function i(){let U=!1,ue=null,J=null,te=null,B=null,F=null,Q=null,ge=null,Se=null;return{setTest:function(Te){U||(Te?ve(e.STENCIL_TEST):Be(e.STENCIL_TEST))},setMask:function(Te){ue!==Te&&!U&&(e.stencilMask(Te),ue=Te)},setFunc:function(Te,it,qe){(J!==Te||te!==it||B!==qe)&&(e.stencilFunc(Te,it,qe),J=Te,te=it,B=qe)},setOp:function(Te,it,qe){(F!==Te||Q!==it||ge!==qe)&&(e.stencilOp(Te,it,qe),F=Te,Q=it,ge=qe)},setLocked:function(Te){U=Te},setClear:function(Te){Se!==Te&&(e.clearStencil(Te),Se=Te)},reset:function(){U=!1,ue=null,J=null,te=null,B=null,F=null,Q=null,ge=null,Se=null}}}let a=new r,o=new n,s=new i,l=new WeakMap,u=new WeakMap,c={},p={},d=new WeakMap,f=[],y=null,_=!1,v=null,h=null,m=null,g=null,x=null,L=null,T=null,b=new et(0,0,0),R=0,w=!1,S=null,P=null,k=null,V=null,W=null,Y=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ie=0,$=e.getParameter(e.VERSION);$.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec($)[1]),j=ie>=1):$.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),j=ie>=2);let fe=null,ye={},Xe=e.getParameter(e.SCISSOR_BOX),Je=e.getParameter(e.VIEWPORT),Z=new xt().fromArray(Xe),de=new xt().fromArray(Je);function Ie(U,ue,J,te){let B=new Uint8Array(4),F=e.createTexture();e.bindTexture(U,F),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Q=0;Q<J;Q++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(ue,0,e.RGBA,1,1,te,0,e.RGBA,e.UNSIGNED_BYTE,B):e.texImage2D(ue+Q,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,B);return F}let Le={};Le[e.TEXTURE_2D]=Ie(e.TEXTURE_2D,e.TEXTURE_2D,1),Le[e.TEXTURE_CUBE_MAP]=Ie(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[e.TEXTURE_2D_ARRAY]=Ie(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Le[e.TEXTURE_3D]=Ie(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ve(e.DEPTH_TEST),o.setFunc(Bo),Ae(!1),oe(g_),ve(e.CULL_FACE),be(Bi);function ve(U){c[U]!==!0&&(e.enable(U),c[U]=!0)}function Be(U){c[U]!==!1&&(e.disable(U),c[U]=!1)}function Ze(U,ue){return p[U]!==ue?(e.bindFramebuffer(U,ue),p[U]=ue,U===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=ue),U===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ge(U,ue){let J=f,te=!1;if(U){J=d.get(ue),J===void 0&&(J=[],d.set(ue,J));let B=U.textures;if(J.length!==B.length||J[0]!==e.COLOR_ATTACHMENT0){for(let F=0,Q=B.length;F<Q;F++)J[F]=e.COLOR_ATTACHMENT0+F;J.length=B.length,te=!0}}else J[0]!==e.BACK&&(J[0]=e.BACK,te=!0);te&&e.drawBuffers(J)}function ee(U){return y!==U?(e.useProgram(U),y=U,!0):!1}let me={[_a]:e.FUNC_ADD,[HM]:e.FUNC_SUBTRACT,[GM]:e.FUNC_REVERSE_SUBTRACT};me[WM]=e.MIN,me[XM]=e.MAX;let A={[jM]:e.ZERO,[$M]:e.ONE,[YM]:e.SRC_COLOR,[sf]:e.SRC_ALPHA,[ew]:e.SRC_ALPHA_SATURATE,[QM]:e.DST_COLOR,[ZM]:e.DST_ALPHA,[qM]:e.ONE_MINUS_SRC_COLOR,[lf]:e.ONE_MINUS_SRC_ALPHA,[KM]:e.ONE_MINUS_DST_COLOR,[JM]:e.ONE_MINUS_DST_ALPHA,[tw]:e.CONSTANT_COLOR,[rw]:e.ONE_MINUS_CONSTANT_COLOR,[nw]:e.CONSTANT_ALPHA,[iw]:e.ONE_MINUS_CONSTANT_ALPHA};function be(U,ue,J,te,B,F,Q,ge,Se,Te){if(U===Bi){_===!0&&(Be(e.BLEND),_=!1);return}if(_===!1&&(ve(e.BLEND),_=!0),U!==VM){if(U!==v||Te!==w){if((h!==_a||x!==_a)&&(e.blendEquation(e.FUNC_ADD),h=_a,x=_a),Te)switch(U){case ko:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Vc:e.blendFunc(e.ONE,e.ONE);break;case v_:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case __:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ko:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Vc:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case v_:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case __:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}m=null,g=null,L=null,T=null,b.set(0,0,0),R=0,v=U,w=Te}return}B=B||ue,F=F||J,Q=Q||te,(ue!==h||B!==x)&&(e.blendEquationSeparate(me[ue],me[B]),h=ue,x=B),(J!==m||te!==g||F!==L||Q!==T)&&(e.blendFuncSeparate(A[J],A[te],A[F],A[Q]),m=J,g=te,L=F,T=Q),(ge.equals(b)===!1||Se!==R)&&(e.blendColor(ge.r,ge.g,ge.b,Se),b.copy(ge),R=Se),v=U,w=!1}function ae(U,ue){U.side===ti?Be(e.CULL_FACE):ve(e.CULL_FACE);let J=U.side===Tr;ue&&(J=!J),Ae(J),U.blending===ko&&U.transparent===!1?be(Bi):be(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),a.setMask(U.colorWrite);let te=U.stencilWrite;s.setTest(te),te&&(s.setMask(U.stencilWriteMask),s.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),s.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),we(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ve(e.SAMPLE_ALPHA_TO_COVERAGE):Be(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(U){S!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),S=U)}function oe(U){U!==FM?(ve(e.CULL_FACE),U!==P&&(U===g_?e.cullFace(e.BACK):U===zM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Be(e.CULL_FACE),P=U}function je(U){U!==k&&(j&&e.lineWidth(U),k=U)}function we(U,ue,J){U?(ve(e.POLYGON_OFFSET_FILL),(V!==ue||W!==J)&&(e.polygonOffset(ue,J),V=ue,W=J)):Be(e.POLYGON_OFFSET_FILL)}function Ne(U){U?ve(e.SCISSOR_TEST):Be(e.SCISSOR_TEST)}function C(U){U===void 0&&(U=e.TEXTURE0+Y-1),fe!==U&&(e.activeTexture(U),fe=U)}function M(U,ue,J){J===void 0&&(fe===null?J=e.TEXTURE0+Y-1:J=fe);let te=ye[J];te===void 0&&(te={type:void 0,texture:void 0},ye[J]=te),(te.type!==U||te.texture!==ue)&&(fe!==J&&(e.activeTexture(J),fe=J),e.bindTexture(U,ue||Le[U]),te.type=U,te.texture=ue)}function z(){let U=ye[fe];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function K(){try{e.compressedTexImage2D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{e.compressedTexImage3D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{e.texSubImage2D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(){try{e.texSubImage3D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $e(){try{e.texStorage2D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{e.texStorage3D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{e.texImage2D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(){try{e.texImage3D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function We(U){Z.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),Z.copy(U))}function Ce(U){de.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),de.copy(U))}function Ye(U,ue){let J=u.get(ue);J===void 0&&(J=new WeakMap,u.set(ue,J));let te=J.get(U);te===void 0&&(te=e.getUniformBlockIndex(ue,U.name),J.set(U,te))}function tt(U,ue){let J=u.get(ue).get(U);l.get(ue)!==J&&(e.uniformBlockBinding(ue,J,U.__bindingPointIndex),l.set(ue,J))}function Mt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},fe=null,ye={},p={},d=new WeakMap,f=[],y=null,_=!1,v=null,h=null,m=null,g=null,x=null,L=null,T=null,b=new et(0,0,0),R=0,w=!1,S=null,P=null,k=null,V=null,W=null,Z.set(0,0,e.canvas.width,e.canvas.height),de.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ve,disable:Be,bindFramebuffer:Ze,drawBuffers:Ge,useProgram:ee,setBlending:be,setMaterial:ae,setFlipSided:Ae,setCullFace:oe,setLineWidth:je,setPolygonOffset:we,setScissorTest:Ne,activeTexture:C,bindTexture:M,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:re,texImage2D:Ee,texImage3D:ze,updateUBOMapping:Ye,uniformBlockBinding:tt,texStorage2D:$e,texStorage3D:pe,texSubImage2D:q,texSubImage3D:Ue,compressedTexSubImage2D:_e,compressedTexSubImage3D:Me,scissor:We,viewport:Ce,reset:Mt}}function p1(e,t,r,n){let i=TA(n);switch(r){case z1:return e*t;case V1:return e*t;case H1:return e*t*2;case am:return e*t/i.components*i.byteLength;case om:return e*t/i.components*i.byteLength;case G1:return e*t*2/i.components*i.byteLength;case sm:return e*t*2/i.components*i.byteLength;case B1:return e*t*3/i.components*i.byteLength;case Sn:return e*t*4/i.components*i.byteLength;case lm:return e*t*4/i.components*i.byteLength;case Ic:case Dc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Uc:case kc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xf:case Mf:return Math.max(e,16)*Math.max(t,8)/4;case yf:case Sf:return Math.max(e,8)*Math.max(t,8)/2;case wf:case Ef:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Tf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case bf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Af:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Cf:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Rf:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Pf:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Lf:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Nf:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case If:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Df:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Uf:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case kf:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Of:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ff:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case zf:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Oc:case Bf:case Vf:return Math.ceil(e/4)*Math.ceil(t/4)*16;case W1:case Hf:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Gf:case Wf:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${r} format.`)}function TA(e){switch(e){case ai:case k1:return{byteLength:1,components:1};case fl:case O1:case _l:return{byteLength:2,components:1};case nm:case im:return{byteLength:2,components:4};case wa:case rm:case Dn:return{byteLength:4,components:1};case F1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function bA(e,t,r,n,i,a,o){let s=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new he,c=new WeakMap,p,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,M){return f?new OffscreenCanvas(C,M):Xc("canvas")}function _(C,M,z){let K=1,re=Ne(C);if((re.width>z||re.height>z)&&(K=z/Math.max(re.width,re.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let q=Math.floor(K*re.width),Ue=Math.floor(K*re.height);p===void 0&&(p=y(q,Ue));let _e=M?y(q,Ue):p;return _e.width=q,_e.height=Ue,_e.getContext("2d").drawImage(C,0,0,q,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+q+"x"+Ue+")."),_e}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),C;return C}function v(C){return C.generateMipmaps}function h(C){e.generateMipmap(C)}function m(C){return C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?e.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function g(C,M,z,K,re=!1){if(C!==null){if(e[C]!==void 0)return e[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=M;if(M===e.RED&&(z===e.FLOAT&&(q=e.R32F),z===e.HALF_FLOAT&&(q=e.R16F),z===e.UNSIGNED_BYTE&&(q=e.R8)),M===e.RED_INTEGER&&(z===e.UNSIGNED_BYTE&&(q=e.R8UI),z===e.UNSIGNED_SHORT&&(q=e.R16UI),z===e.UNSIGNED_INT&&(q=e.R32UI),z===e.BYTE&&(q=e.R8I),z===e.SHORT&&(q=e.R16I),z===e.INT&&(q=e.R32I)),M===e.RG&&(z===e.FLOAT&&(q=e.RG32F),z===e.HALF_FLOAT&&(q=e.RG16F),z===e.UNSIGNED_BYTE&&(q=e.RG8)),M===e.RG_INTEGER&&(z===e.UNSIGNED_BYTE&&(q=e.RG8UI),z===e.UNSIGNED_SHORT&&(q=e.RG16UI),z===e.UNSIGNED_INT&&(q=e.RG32UI),z===e.BYTE&&(q=e.RG8I),z===e.SHORT&&(q=e.RG16I),z===e.INT&&(q=e.RG32I)),M===e.RGB_INTEGER&&(z===e.UNSIGNED_BYTE&&(q=e.RGB8UI),z===e.UNSIGNED_SHORT&&(q=e.RGB16UI),z===e.UNSIGNED_INT&&(q=e.RGB32UI),z===e.BYTE&&(q=e.RGB8I),z===e.SHORT&&(q=e.RGB16I),z===e.INT&&(q=e.RGB32I)),M===e.RGBA_INTEGER&&(z===e.UNSIGNED_BYTE&&(q=e.RGBA8UI),z===e.UNSIGNED_SHORT&&(q=e.RGBA16UI),z===e.UNSIGNED_INT&&(q=e.RGBA32UI),z===e.BYTE&&(q=e.RGBA8I),z===e.SHORT&&(q=e.RGBA16I),z===e.INT&&(q=e.RGBA32I)),M===e.RGB&&z===e.UNSIGNED_INT_5_9_9_9_REV&&(q=e.RGB9_E5),M===e.RGBA){let Ue=re?$c:ct.getTransfer(K);z===e.FLOAT&&(q=e.RGBA32F),z===e.HALF_FLOAT&&(q=e.RGBA16F),z===e.UNSIGNED_BYTE&&(q=Ue===pt?e.SRGB8_ALPHA8:e.RGBA8),z===e.UNSIGNED_SHORT_4_4_4_4&&(q=e.RGBA4),z===e.UNSIGNED_SHORT_5_5_5_1&&(q=e.RGB5_A1)}return(q===e.R16F||q===e.R32F||q===e.RG16F||q===e.RG32F||q===e.RGBA16F||q===e.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(C,M){let z;return C?M===null||M===wa||M===Go?z=e.DEPTH24_STENCIL8:M===Dn?z=e.DEPTH32F_STENCIL8:M===fl&&(z=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===wa||M===Go?z=e.DEPTH_COMPONENT24:M===Dn?z=e.DEPTH_COMPONENT32F:M===fl&&(z=e.DEPTH_COMPONENT16),z}function L(C,M){return v(C)===!0||C.isFramebufferTexture&&C.minFilter!==Wr&&C.minFilter!==In?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function T(C){let M=C.target;M.removeEventListener("dispose",T),R(M),M.isVideoTexture&&c.delete(M)}function b(C){let M=C.target;M.removeEventListener("dispose",b),S(M)}function R(C){let M=n.get(C);if(M.__webglInit===void 0)return;let z=C.source,K=d.get(z);if(K){let re=K[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&w(C),Object.keys(K).length===0&&d.delete(z)}n.remove(C)}function w(C){let M=n.get(C);e.deleteTexture(M.__webglTexture);let z=C.source,K=d.get(z);delete K[M.__cacheKey],o.memory.textures--}function S(C){let M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let re=0;re<M.__webglFramebuffer[K].length;re++)e.deleteFramebuffer(M.__webglFramebuffer[K][re]);else e.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)e.deleteFramebuffer(M.__webglFramebuffer[K]);else e.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&e.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&e.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&e.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=C.textures;for(let K=0,re=z.length;K<re;K++){let q=n.get(z[K]);q.__webglTexture&&(e.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(z[K])}n.remove(C)}let P=0;function k(){P=0}function V(){let C=P;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function W(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function Y(C,M){let z=n.get(C);if(C.isVideoTexture&&je(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){let K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(z,C,M);return}}r.bindTexture(e.TEXTURE_2D,z.__webglTexture,e.TEXTURE0+M)}function j(C,M){let z=n.get(C);if(C.version>0&&z.__version!==C.version){de(z,C,M);return}r.bindTexture(e.TEXTURE_2D_ARRAY,z.__webglTexture,e.TEXTURE0+M)}function ie(C,M){let z=n.get(C);if(C.version>0&&z.__version!==C.version){de(z,C,M);return}r.bindTexture(e.TEXTURE_3D,z.__webglTexture,e.TEXTURE0+M)}function $(C,M){let z=n.get(C);if(C.version>0&&z.__version!==C.version){Ie(z,C,M);return}r.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture,e.TEXTURE0+M)}let fe={[Hc]:e.REPEAT,[Sa]:e.CLAMP_TO_EDGE,[_f]:e.MIRRORED_REPEAT},ye={[Wr]:e.NEAREST,[pw]:e.NEAREST_MIPMAP_NEAREST,[tc]:e.NEAREST_MIPMAP_LINEAR,[In]:e.LINEAR,[xp]:e.LINEAR_MIPMAP_NEAREST,[Ma]:e.LINEAR_MIPMAP_LINEAR},Xe={[vw]:e.NEVER,[ww]:e.ALWAYS,[_w]:e.LESS,[j1]:e.LEQUAL,[yw]:e.EQUAL,[Mw]:e.GEQUAL,[xw]:e.GREATER,[Sw]:e.NOTEQUAL};function Je(C,M){if(M.type===Dn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===In||M.magFilter===xp||M.magFilter===tc||M.magFilter===Ma||M.minFilter===In||M.minFilter===xp||M.minFilter===tc||M.minFilter===Ma)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,fe[M.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,fe[M.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,fe[M.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,ye[M.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,ye[M.minFilter]),M.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,Xe[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Wr||M.minFilter!==tc&&M.minFilter!==Ma||M.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Z(C,M){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",T));let K=M.source,re=d.get(K);re===void 0&&(re={},d.set(K,re));let q=W(M);if(q!==C.__cacheKey){re[q]===void 0&&(re[q]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,z=!0),re[q].usedTimes++;let Ue=re[C.__cacheKey];Ue!==void 0&&(re[C.__cacheKey].usedTimes--,Ue.usedTimes===0&&w(M)),C.__cacheKey=q,C.__webglTexture=re[q].texture}return z}function de(C,M,z){let K=e.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=e.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=e.TEXTURE_3D);let re=Z(C,M),q=M.source;r.bindTexture(K,C.__webglTexture,e.TEXTURE0+z);let Ue=n.get(q);if(q.version!==Ue.__version||re===!0){r.activeTexture(e.TEXTURE0+z);let _e=ct.getPrimaries(ct.workingColorSpace),Me=M.colorSpace===zi?null:ct.getPrimaries(M.colorSpace),$e=M.colorSpace===zi||_e===Me?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let pe=_(M.image,!1,i.maxTextureSize);pe=we(M,pe);let Ee=a.convert(M.format,M.colorSpace),ze=a.convert(M.type),We=g(M.internalFormat,Ee,ze,M.colorSpace,M.isVideoTexture);Je(K,M);let Ce,Ye=M.mipmaps,tt=M.isVideoTexture!==!0,Mt=Ue.__version===void 0||re===!0,U=q.dataReady,ue=L(M,pe);if(M.isDepthTexture)We=x(M.format===Wo,M.type),Mt&&(tt?r.texStorage2D(e.TEXTURE_2D,1,We,pe.width,pe.height):r.texImage2D(e.TEXTURE_2D,0,We,pe.width,pe.height,0,Ee,ze,null));else if(M.isDataTexture)if(Ye.length>0){tt&&Mt&&r.texStorage2D(e.TEXTURE_2D,ue,We,Ye[0].width,Ye[0].height);for(let J=0,te=Ye.length;J<te;J++)Ce=Ye[J],tt?U&&r.texSubImage2D(e.TEXTURE_2D,J,0,0,Ce.width,Ce.height,Ee,ze,Ce.data):r.texImage2D(e.TEXTURE_2D,J,We,Ce.width,Ce.height,0,Ee,ze,Ce.data);M.generateMipmaps=!1}else tt?(Mt&&r.texStorage2D(e.TEXTURE_2D,ue,We,pe.width,pe.height),U&&r.texSubImage2D(e.TEXTURE_2D,0,0,0,pe.width,pe.height,Ee,ze,pe.data)):r.texImage2D(e.TEXTURE_2D,0,We,pe.width,pe.height,0,Ee,ze,pe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){tt&&Mt&&r.texStorage3D(e.TEXTURE_2D_ARRAY,ue,We,Ye[0].width,Ye[0].height,pe.depth);for(let J=0,te=Ye.length;J<te;J++)if(Ce=Ye[J],M.format!==Sn)if(Ee!==null)if(tt){if(U)if(M.layerUpdates.size>0){let B=p1(Ce.width,Ce.height,M.format,M.type);for(let F of M.layerUpdates){let Q=Ce.data.subarray(F*B/Ce.data.BYTES_PER_ELEMENT,(F+1)*B/Ce.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,F,Ce.width,Ce.height,1,Ee,Q)}M.clearLayerUpdates()}else r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,Ce.width,Ce.height,pe.depth,Ee,Ce.data)}else r.compressedTexImage3D(e.TEXTURE_2D_ARRAY,J,We,Ce.width,Ce.height,pe.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?U&&r.texSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,Ce.width,Ce.height,pe.depth,Ee,ze,Ce.data):r.texImage3D(e.TEXTURE_2D_ARRAY,J,We,Ce.width,Ce.height,pe.depth,0,Ee,ze,Ce.data)}else{tt&&Mt&&r.texStorage2D(e.TEXTURE_2D,ue,We,Ye[0].width,Ye[0].height);for(let J=0,te=Ye.length;J<te;J++)Ce=Ye[J],M.format!==Sn?Ee!==null?tt?U&&r.compressedTexSubImage2D(e.TEXTURE_2D,J,0,0,Ce.width,Ce.height,Ee,Ce.data):r.compressedTexImage2D(e.TEXTURE_2D,J,We,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?U&&r.texSubImage2D(e.TEXTURE_2D,J,0,0,Ce.width,Ce.height,Ee,ze,Ce.data):r.texImage2D(e.TEXTURE_2D,J,We,Ce.width,Ce.height,0,Ee,ze,Ce.data)}else if(M.isDataArrayTexture)if(tt){if(Mt&&r.texStorage3D(e.TEXTURE_2D_ARRAY,ue,We,pe.width,pe.height,pe.depth),U)if(M.layerUpdates.size>0){let J=p1(pe.width,pe.height,M.format,M.type);for(let te of M.layerUpdates){let B=pe.data.subarray(te*J/pe.data.BYTES_PER_ELEMENT,(te+1)*J/pe.data.BYTES_PER_ELEMENT);r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,te,pe.width,pe.height,1,Ee,ze,B)}M.clearLayerUpdates()}else r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ee,ze,pe.data)}else r.texImage3D(e.TEXTURE_2D_ARRAY,0,We,pe.width,pe.height,pe.depth,0,Ee,ze,pe.data);else if(M.isData3DTexture)tt?(Mt&&r.texStorage3D(e.TEXTURE_3D,ue,We,pe.width,pe.height,pe.depth),U&&r.texSubImage3D(e.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ee,ze,pe.data)):r.texImage3D(e.TEXTURE_3D,0,We,pe.width,pe.height,pe.depth,0,Ee,ze,pe.data);else if(M.isFramebufferTexture){if(Mt)if(tt)r.texStorage2D(e.TEXTURE_2D,ue,We,pe.width,pe.height);else{let J=pe.width,te=pe.height;for(let B=0;B<ue;B++)r.texImage2D(e.TEXTURE_2D,B,We,J,te,0,Ee,ze,null),J>>=1,te>>=1}}else if(Ye.length>0){if(tt&&Mt){let J=Ne(Ye[0]);r.texStorage2D(e.TEXTURE_2D,ue,We,J.width,J.height)}for(let J=0,te=Ye.length;J<te;J++)Ce=Ye[J],tt?U&&r.texSubImage2D(e.TEXTURE_2D,J,0,0,Ee,ze,Ce):r.texImage2D(e.TEXTURE_2D,J,We,Ee,ze,Ce);M.generateMipmaps=!1}else if(tt){if(Mt){let J=Ne(pe);r.texStorage2D(e.TEXTURE_2D,ue,We,J.width,J.height)}U&&r.texSubImage2D(e.TEXTURE_2D,0,0,0,Ee,ze,pe)}else r.texImage2D(e.TEXTURE_2D,0,We,Ee,ze,pe);v(M)&&h(K),Ue.__version=q.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Ie(C,M,z){if(M.image.length!==6)return;let K=Z(C,M),re=M.source;r.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+z);let q=n.get(re);if(re.version!==q.__version||K===!0){r.activeTexture(e.TEXTURE0+z);let Ue=ct.getPrimaries(ct.workingColorSpace),_e=M.colorSpace===zi?null:ct.getPrimaries(M.colorSpace),Me=M.colorSpace===zi||Ue===_e?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let $e=M.isCompressedTexture||M.image[0].isCompressedTexture,pe=M.image[0]&&M.image[0].isDataTexture,Ee=[];for(let te=0;te<6;te++)!$e&&!pe?Ee[te]=_(M.image[te],!0,i.maxCubemapSize):Ee[te]=pe?M.image[te].image:M.image[te],Ee[te]=we(M,Ee[te]);let ze=Ee[0],We=a.convert(M.format,M.colorSpace),Ce=a.convert(M.type),Ye=g(M.internalFormat,We,Ce,M.colorSpace),tt=M.isVideoTexture!==!0,Mt=q.__version===void 0||K===!0,U=re.dataReady,ue=L(M,ze);Je(e.TEXTURE_CUBE_MAP,M);let J;if($e){tt&&Mt&&r.texStorage2D(e.TEXTURE_CUBE_MAP,ue,Ye,ze.width,ze.height);for(let te=0;te<6;te++){J=Ee[te].mipmaps;for(let B=0;B<J.length;B++){let F=J[B];M.format!==Sn?We!==null?tt?U&&r.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,B,0,0,F.width,F.height,We,F.data):r.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,B,Ye,F.width,F.height,0,F.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?U&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,B,0,0,F.width,F.height,We,Ce,F.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,B,Ye,F.width,F.height,0,We,Ce,F.data)}}}else{if(J=M.mipmaps,tt&&Mt){J.length>0&&ue++;let te=Ne(Ee[0]);r.texStorage2D(e.TEXTURE_CUBE_MAP,ue,Ye,te.width,te.height)}for(let te=0;te<6;te++)if(pe){tt?U&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ee[te].width,Ee[te].height,We,Ce,Ee[te].data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ye,Ee[te].width,Ee[te].height,0,We,Ce,Ee[te].data);for(let B=0;B<J.length;B++){let F=J[B].image[te].image;tt?U&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,B+1,0,0,F.width,F.height,We,Ce,F.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,B+1,Ye,F.width,F.height,0,We,Ce,F.data)}}else{tt?U&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,We,Ce,Ee[te]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ye,We,Ce,Ee[te]);for(let B=0;B<J.length;B++){let F=J[B];tt?U&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,B+1,0,0,We,Ce,F.image[te]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,B+1,Ye,We,Ce,F.image[te])}}}v(M)&&h(e.TEXTURE_CUBE_MAP),q.__version=re.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Le(C,M,z,K,re,q){let Ue=a.convert(z.format,z.colorSpace),_e=a.convert(z.type),Me=g(z.internalFormat,Ue,_e,z.colorSpace),$e=n.get(M),pe=n.get(z);if(pe.__renderTarget=M,!$e.__hasExternalTextures){let Ee=Math.max(1,M.width>>q),ze=Math.max(1,M.height>>q);re===e.TEXTURE_3D||re===e.TEXTURE_2D_ARRAY?r.texImage3D(re,q,Me,Ee,ze,M.depth,0,Ue,_e,null):r.texImage2D(re,q,Me,Ee,ze,0,Ue,_e,null)}r.bindFramebuffer(e.FRAMEBUFFER,C),oe(M)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,re,pe.__webglTexture,0,Ae(M)):(re===e.TEXTURE_2D||re>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,K,re,pe.__webglTexture,q),r.bindFramebuffer(e.FRAMEBUFFER,null)}function ve(C,M,z){if(e.bindRenderbuffer(e.RENDERBUFFER,C),M.depthBuffer){let K=M.depthTexture,re=K&&K.isDepthTexture?K.type:null,q=x(M.stencilBuffer,re),Ue=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,_e=Ae(M);oe(M)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,_e,q,M.width,M.height):z?e.renderbufferStorageMultisample(e.RENDERBUFFER,_e,q,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,q,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Ue,e.RENDERBUFFER,C)}else{let K=M.textures;for(let re=0;re<K.length;re++){let q=K[re],Ue=a.convert(q.format,q.colorSpace),_e=a.convert(q.type),Me=g(q.internalFormat,Ue,_e,q.colorSpace),$e=Ae(M);z&&oe(M)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,$e,Me,M.width,M.height):oe(M)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,$e,Me,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,Me,M.width,M.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Be(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(r.bindFramebuffer(e.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let z=n.get(M.depthTexture);z.__renderTarget=M,(!z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);let K=z.__webglTexture,re=Ae(M);if(M.depthTexture.format===Oo)oe(M)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,K,0,re):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,K,0);else if(M.depthTexture.format===Wo)oe(M)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,K,0,re):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ze(C){let M=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let K=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){let re=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",re)};K.addEventListener("dispose",re),M.__depthDisposeCallback=re}M.__boundDepthTexture=K}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Be(M.__webglFramebuffer,C)}else if(z){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(r.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=e.createRenderbuffer(),ve(M.__webglDepthbuffer[K],C,!1);else{let re=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[K];e.bindRenderbuffer(e.RENDERBUFFER,q),e.framebufferRenderbuffer(e.FRAMEBUFFER,re,e.RENDERBUFFER,q)}}else if(r.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=e.createRenderbuffer(),ve(M.__webglDepthbuffer,C,!1);else{let K=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,re=M.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,re),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,re)}r.bindFramebuffer(e.FRAMEBUFFER,null)}function Ge(C,M,z){let K=n.get(C);M!==void 0&&Le(K.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),z!==void 0&&Ze(C)}function ee(C){let M=C.texture,z=n.get(C),K=n.get(M);C.addEventListener("dispose",b);let re=C.textures,q=C.isWebGLCubeRenderTarget===!0,Ue=re.length>1;if(Ue||(K.__webglTexture===void 0&&(K.__webglTexture=e.createTexture()),K.__version=M.version,o.memory.textures++),q){z.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[_e]=[];for(let Me=0;Me<M.mipmaps.length;Me++)z.__webglFramebuffer[_e][Me]=e.createFramebuffer()}else z.__webglFramebuffer[_e]=e.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let _e=0;_e<M.mipmaps.length;_e++)z.__webglFramebuffer[_e]=e.createFramebuffer()}else z.__webglFramebuffer=e.createFramebuffer();if(Ue)for(let _e=0,Me=re.length;_e<Me;_e++){let $e=n.get(re[_e]);$e.__webglTexture===void 0&&($e.__webglTexture=e.createTexture(),o.memory.textures++)}if(C.samples>0&&oe(C)===!1){z.__webglMultisampledFramebuffer=e.createFramebuffer(),z.__webglColorRenderbuffer=[],r.bindFramebuffer(e.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let _e=0;_e<re.length;_e++){let Me=re[_e];z.__webglColorRenderbuffer[_e]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,z.__webglColorRenderbuffer[_e]);let $e=a.convert(Me.format,Me.colorSpace),pe=a.convert(Me.type),Ee=g(Me.internalFormat,$e,pe,Me.colorSpace,C.isXRRenderTarget===!0),ze=Ae(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,ze,Ee,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,z.__webglColorRenderbuffer[_e])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=e.createRenderbuffer(),ve(z.__webglDepthRenderbuffer,C,!0)),r.bindFramebuffer(e.FRAMEBUFFER,null)}}if(q){r.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture),Je(e.TEXTURE_CUBE_MAP,M);for(let _e=0;_e<6;_e++)if(M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)Le(z.__webglFramebuffer[_e][Me],C,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Me);else Le(z.__webglFramebuffer[_e],C,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);v(M)&&h(e.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(Ue){for(let _e=0,Me=re.length;_e<Me;_e++){let $e=re[_e],pe=n.get($e);r.bindTexture(e.TEXTURE_2D,pe.__webglTexture),Je(e.TEXTURE_2D,$e),Le(z.__webglFramebuffer,C,$e,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,0),v($e)&&h(e.TEXTURE_2D)}r.unbindTexture()}else{let _e=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(_e=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),r.bindTexture(_e,K.__webglTexture),Je(_e,M),M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)Le(z.__webglFramebuffer[Me],C,M,e.COLOR_ATTACHMENT0,_e,Me);else Le(z.__webglFramebuffer,C,M,e.COLOR_ATTACHMENT0,_e,0);v(M)&&h(_e),r.unbindTexture()}C.depthBuffer&&Ze(C)}function me(C){let M=C.textures;for(let z=0,K=M.length;z<K;z++){let re=M[z];if(v(re)){let q=m(C),Ue=n.get(re).__webglTexture;r.bindTexture(q,Ue),h(q),r.unbindTexture()}}}let A=[],be=[];function ae(C){if(C.samples>0){if(oe(C)===!1){let M=C.textures,z=C.width,K=C.height,re=e.COLOR_BUFFER_BIT,q=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Ue=n.get(C),_e=M.length>1;if(_e)for(let Me=0;Me<M.length;Me++)r.bindFramebuffer(e.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.RENDERBUFFER,null),r.bindFramebuffer(e.FRAMEBUFFER,Ue.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.TEXTURE_2D,null,0);r.bindFramebuffer(e.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Me=0;Me<M.length;Me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(re|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(re|=e.STENCIL_BUFFER_BIT)),_e){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Ue.__webglColorRenderbuffer[Me]);let $e=n.get(M[Me]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,$e,0)}e.blitFramebuffer(0,0,z,K,0,0,z,K,re,e.NEAREST),l===!0&&(A.length=0,be.length=0,A.push(e.COLOR_ATTACHMENT0+Me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(A.push(q),be.push(q),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,be)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,A))}if(r.bindFramebuffer(e.READ_FRAMEBUFFER,null),r.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),_e)for(let Me=0;Me<M.length;Me++){r.bindFramebuffer(e.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.RENDERBUFFER,Ue.__webglColorRenderbuffer[Me]);let $e=n.get(M[Me]).__webglTexture;r.bindFramebuffer(e.FRAMEBUFFER,Ue.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.TEXTURE_2D,$e,0)}r.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let M=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[M])}}}function Ae(C){return Math.min(i.maxSamples,C.samples)}function oe(C){let M=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function je(C){let M=o.render.frame;c.get(C)!==M&&(c.set(C,M),C.update())}function we(C,M){let z=C.colorSpace,K=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==jo&&z!==zi&&(ct.getTransfer(z)===pt?(K!==Sn||re!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function Ne(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.setTexture2D=Y,this.setTexture2DArray=j,this.setTexture3D=ie,this.setTextureCube=$,this.rebindTextures=Ge,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=oe}function AA(e,t){function r(n,i=zi){let a,o=ct.getTransfer(i);if(n===ai)return e.UNSIGNED_BYTE;if(n===nm)return e.UNSIGNED_SHORT_4_4_4_4;if(n===im)return e.UNSIGNED_SHORT_5_5_5_1;if(n===F1)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===k1)return e.BYTE;if(n===O1)return e.SHORT;if(n===fl)return e.UNSIGNED_SHORT;if(n===rm)return e.INT;if(n===wa)return e.UNSIGNED_INT;if(n===Dn)return e.FLOAT;if(n===_l)return e.HALF_FLOAT;if(n===z1)return e.ALPHA;if(n===B1)return e.RGB;if(n===Sn)return e.RGBA;if(n===V1)return e.LUMINANCE;if(n===H1)return e.LUMINANCE_ALPHA;if(n===Oo)return e.DEPTH_COMPONENT;if(n===Wo)return e.DEPTH_STENCIL;if(n===am)return e.RED;if(n===om)return e.RED_INTEGER;if(n===G1)return e.RG;if(n===sm)return e.RG_INTEGER;if(n===lm)return e.RGBA_INTEGER;if(n===Ic||n===Dc||n===Uc||n===kc)if(o===pt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Ic)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Uc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Ic)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Uc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yf||n===xf||n===Sf||n===Mf)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===yf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wf||n===Ef||n===Tf)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===wf||n===Ef)return o===pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Tf)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bf||n===Af||n===Cf||n===Rf||n===Pf||n===Lf||n===Nf||n===If||n===Df||n===Uf||n===kf||n===Of||n===Ff||n===zf)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===bf)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Af)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cf)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rf)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pf)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lf)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nf)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===If)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Df)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uf)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kf)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Of)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ff)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zf)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oc||n===Bf||n===Vf)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===Oc)return o===pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===W1||n===Hf||n===Gf||n===Wf)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===Oc)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Hf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Go?e.UNSIGNED_INT_24_8:e[n]!==void 0?e[n]:null}return{convert:r}}var CA=class extends Gr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Do=class extends ar{constructor(){super(),this.isGroup=!0,this.type="Group"}},RA={type:"move"},Zp=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Do,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Do,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Do,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,i=null,a=null,o=this._targetRay,s=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let y of e.hand.values()){let _=t.getJointPose(y,r),v=this._getHandJoint(l,y);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}let u=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],p=u.position.distanceTo(c.position),d=.02,f=.005;l.inputState.pinching&&p>d+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=d-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&i!==null&&(n=i),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(RA)))}return o!==null&&(o.visible=n!==null),s!==null&&(s.visible=i!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let r=new Do;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}},PA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LA=`
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

}`,NA=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){let n=new Kr,i=e.properties.get(n);i.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,r=new Un({vertexShader:PA,fragmentShader:LA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fe(new Fi(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},IA=class extends $o{constructor(e,t){super();let r=this,n=null,i=1,a=null,o="local-floor",s=1,l=null,u=null,c=null,p=null,d=null,f=null,y=new NA,_=t.getContextAttributes(),v=null,h=null,m=[],g=[],x=new he,L=null,T=new Gr;T.viewport=new xt;let b=new Gr;b.viewport=new xt;let R=[T,b],w=new CA,S=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let de=m[Z];return de===void 0&&(de=new Zp,m[Z]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Z){let de=m[Z];return de===void 0&&(de=new Zp,m[Z]=de),de.getGripSpace()},this.getHand=function(Z){let de=m[Z];return de===void 0&&(de=new Zp,m[Z]=de),de.getHandSpace()};function k(Z){let de=g.indexOf(Z.inputSource);if(de===-1)return;let Ie=m[de];Ie!==void 0&&(Ie.update(Z.inputSource,Z.frame,l||a),Ie.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){n.removeEventListener("select",k),n.removeEventListener("selectstart",k),n.removeEventListener("selectend",k),n.removeEventListener("squeeze",k),n.removeEventListener("squeezestart",k),n.removeEventListener("squeezeend",k),n.removeEventListener("end",V),n.removeEventListener("inputsourceschange",W);for(let Z=0;Z<m.length;Z++){let de=g[Z];de!==null&&(g[Z]=null,m[Z].disconnect(de))}S=null,P=null,y.reset(),e.setRenderTarget(v),d=null,p=null,c=null,n=null,h=null,Je.stop(),r.isPresenting=!1,e.setPixelRatio(L),e.setSize(x.width,x.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){i=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return c},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(Z){if(n=Z,n!==null){if(v=e.getRenderTarget(),n.addEventListener("select",k),n.addEventListener("selectstart",k),n.addEventListener("selectend",k),n.addEventListener("squeeze",k),n.addEventListener("squeezestart",k),n.addEventListener("squeezeend",k),n.addEventListener("end",V),n.addEventListener("inputsourceschange",W),_.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(x),n.renderState.layers===void 0){let de={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};d=new XRWebGLLayer(n,t,de),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),h=new Ea(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let de=null,Ie=null,Le=null;_.depth&&(Le=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=_.stencil?Wo:Oo,Ie=_.stencil?Go:wa);let ve={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:i};c=new XRWebGLBinding(n,t),p=c.createProjectionLayer(ve),n.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),h=new Ea(p.textureWidth,p.textureHeight,{format:Sn,type:ai,depthTexture:new fy(p.textureWidth,p.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}h.isXRRenderTarget=!0,this.setFoveation(s),l=null,a=await n.requestReferenceSpace(o),Je.setContext(n),Je.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(Z){for(let de=0;de<Z.removed.length;de++){let Ie=Z.removed[de],Le=g.indexOf(Ie);Le>=0&&(g[Le]=null,m[Le].disconnect(Ie))}for(let de=0;de<Z.added.length;de++){let Ie=Z.added[de],Le=g.indexOf(Ie);if(Le===-1){for(let Be=0;Be<m.length;Be++)if(Be>=g.length){g.push(Ie),Le=Be;break}else if(g[Be]===null){g[Be]=Ie,Le=Be;break}if(Le===-1)break}let ve=m[Le];ve&&ve.connect(Ie)}}let Y=new N,j=new N;function ie(Z,de,Ie){Y.setFromMatrixPosition(de.matrixWorld),j.setFromMatrixPosition(Ie.matrixWorld);let Le=Y.distanceTo(j),ve=de.projectionMatrix.elements,Be=Ie.projectionMatrix.elements,Ze=ve[14]/(ve[10]-1),Ge=ve[14]/(ve[10]+1),ee=(ve[9]+1)/ve[5],me=(ve[9]-1)/ve[5],A=(ve[8]-1)/ve[0],be=(Be[8]+1)/Be[0],ae=Ze*A,Ae=Ze*be,oe=Le/(-A+be),je=oe*-A;if(de.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(je),Z.translateZ(oe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ve[10]===-1)Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{let we=Ze+oe,Ne=Ge+oe,C=ae-je,M=Ae+(Le-je),z=ee*Ge/Ne*we,K=me*Ge/Ne*we;Z.projectionMatrix.makePerspective(C,M,z,K,we,Ne),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function $(Z,de){de===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(de.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;let de=Z.near,Ie=Z.far;y.texture!==null&&(y.depthNear>0&&(de=y.depthNear),y.depthFar>0&&(Ie=y.depthFar)),w.near=b.near=T.near=de,w.far=b.far=T.far=Ie,(S!==w.near||P!==w.far)&&(n.updateRenderState({depthNear:w.near,depthFar:w.far}),S=w.near,P=w.far),T.layers.mask=Z.layers.mask|2,b.layers.mask=Z.layers.mask|4,w.layers.mask=T.layers.mask|b.layers.mask;let Le=Z.parent,ve=w.cameras;$(w,Le);for(let Be=0;Be<ve.length;Be++)$(ve[Be],Le);ve.length===2?ie(w,T,b):w.projectionMatrix.copy(T.projectionMatrix),fe(Z,w,Le)};function fe(Z,de,Ie){Ie===null?Z.matrix.copy(de.matrixWorld):(Z.matrix.copy(Ie.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(de.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=$f*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(p===null&&d===null))return s},this.setFoveation=function(Z){s=Z,p!==null&&(p.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(w)};let ye=null;function Xe(Z,de){if(u=de.getViewerPose(l||a),f=de,u!==null){let Ie=u.views;d!==null&&(e.setRenderTargetFramebuffer(h,d.framebuffer),e.setRenderTarget(h));let Le=!1;Ie.length!==w.cameras.length&&(w.cameras.length=0,Le=!0);for(let Be=0;Be<Ie.length;Be++){let Ze=Ie[Be],Ge=null;if(d!==null)Ge=d.getViewport(Ze);else{let me=c.getViewSubImage(p,Ze);Ge=me.viewport,Be===0&&(e.setRenderTargetTextures(h,me.colorTexture,p.ignoreDepthValues?void 0:me.depthStencilTexture),e.setRenderTarget(h))}let ee=R[Be];ee===void 0&&(ee=new Gr,ee.layers.enable(Be),ee.viewport=new xt,R[Be]=ee),ee.matrix.fromArray(Ze.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Ze.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Be===0&&(w.matrix.copy(ee.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Le===!0&&w.cameras.push(ee)}let ve=n.enabledFeatures;if(ve&&ve.includes("depth-sensing")){let Be=c.getDepthInformation(Ie[0]);Be&&Be.isValid&&Be.texture&&y.init(e,Be,n.renderState)}}for(let Ie=0;Ie<m.length;Ie++){let Le=g[Ie],ve=m[Ie];Le!==null&&ve!==void 0&&ve.update(Le,de,l||a)}ye&&ye(Z,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),f=null}let Je=new hy;Je.setAnimationLoop(Xe),this.setAnimationLoop=function(Z){ye=Z},this.dispose=function(){}}},ma=new Gi,DA=new St;function UA(e,t){function r(v,h){v.matrixAutoUpdate===!0&&v.updateMatrix(),h.value.copy(v.matrix)}function n(v,h){h.color.getRGB(v.fogColor.value,ly(e)),h.isFog?(v.fogNear.value=h.near,v.fogFar.value=h.far):h.isFogExp2&&(v.fogDensity.value=h.density)}function i(v,h,m,g,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(v,h):h.isMeshToonMaterial?(a(v,h),p(v,h)):h.isMeshPhongMaterial?(a(v,h),c(v,h)):h.isMeshStandardMaterial?(a(v,h),d(v,h),h.isMeshPhysicalMaterial&&f(v,h,x)):h.isMeshMatcapMaterial?(a(v,h),y(v,h)):h.isMeshDepthMaterial?a(v,h):h.isMeshDistanceMaterial?(a(v,h),_(v,h)):h.isMeshNormalMaterial?a(v,h):h.isLineBasicMaterial?(o(v,h),h.isLineDashedMaterial&&s(v,h)):h.isPointsMaterial?l(v,h,m,g):h.isSpriteMaterial?u(v,h):h.isShadowMaterial?(v.color.value.copy(h.color),v.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(v,h){v.opacity.value=h.opacity,h.color&&v.diffuse.value.copy(h.color),h.emissive&&v.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(v.map.value=h.map,r(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,r(h.alphaMap,v.alphaMapTransform)),h.bumpMap&&(v.bumpMap.value=h.bumpMap,r(h.bumpMap,v.bumpMapTransform),v.bumpScale.value=h.bumpScale,h.side===Tr&&(v.bumpScale.value*=-1)),h.normalMap&&(v.normalMap.value=h.normalMap,r(h.normalMap,v.normalMapTransform),v.normalScale.value.copy(h.normalScale),h.side===Tr&&v.normalScale.value.negate()),h.displacementMap&&(v.displacementMap.value=h.displacementMap,r(h.displacementMap,v.displacementMapTransform),v.displacementScale.value=h.displacementScale,v.displacementBias.value=h.displacementBias),h.emissiveMap&&(v.emissiveMap.value=h.emissiveMap,r(h.emissiveMap,v.emissiveMapTransform)),h.specularMap&&(v.specularMap.value=h.specularMap,r(h.specularMap,v.specularMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest);let m=t.get(h),g=m.envMap,x=m.envMapRotation;g&&(v.envMap.value=g,ma.copy(x),ma.x*=-1,ma.y*=-1,ma.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ma.y*=-1,ma.z*=-1),v.envMapRotation.value.setFromMatrix4(DA.makeRotationFromEuler(ma)),v.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=h.reflectivity,v.ior.value=h.ior,v.refractionRatio.value=h.refractionRatio),h.lightMap&&(v.lightMap.value=h.lightMap,v.lightMapIntensity.value=h.lightMapIntensity,r(h.lightMap,v.lightMapTransform)),h.aoMap&&(v.aoMap.value=h.aoMap,v.aoMapIntensity.value=h.aoMapIntensity,r(h.aoMap,v.aoMapTransform))}function o(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,h.map&&(v.map.value=h.map,r(h.map,v.mapTransform))}function s(v,h){v.dashSize.value=h.dashSize,v.totalSize.value=h.dashSize+h.gapSize,v.scale.value=h.scale}function l(v,h,m,g){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.size.value=h.size*m,v.scale.value=g*.5,h.map&&(v.map.value=h.map,r(h.map,v.uvTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,r(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function u(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.rotation.value=h.rotation,h.map&&(v.map.value=h.map,r(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,r(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function c(v,h){v.specular.value.copy(h.specular),v.shininess.value=Math.max(h.shininess,1e-4)}function p(v,h){h.gradientMap&&(v.gradientMap.value=h.gradientMap)}function d(v,h){v.metalness.value=h.metalness,h.metalnessMap&&(v.metalnessMap.value=h.metalnessMap,r(h.metalnessMap,v.metalnessMapTransform)),v.roughness.value=h.roughness,h.roughnessMap&&(v.roughnessMap.value=h.roughnessMap,r(h.roughnessMap,v.roughnessMapTransform)),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)}function f(v,h,m){v.ior.value=h.ior,h.sheen>0&&(v.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),v.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(v.sheenColorMap.value=h.sheenColorMap,r(h.sheenColorMap,v.sheenColorMapTransform)),h.sheenRoughnessMap&&(v.sheenRoughnessMap.value=h.sheenRoughnessMap,r(h.sheenRoughnessMap,v.sheenRoughnessMapTransform))),h.clearcoat>0&&(v.clearcoat.value=h.clearcoat,v.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(v.clearcoatMap.value=h.clearcoatMap,r(h.clearcoatMap,v.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,r(h.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(v.clearcoatNormalMap.value=h.clearcoatNormalMap,r(h.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Tr&&v.clearcoatNormalScale.value.negate())),h.dispersion>0&&(v.dispersion.value=h.dispersion),h.iridescence>0&&(v.iridescence.value=h.iridescence,v.iridescenceIOR.value=h.iridescenceIOR,v.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(v.iridescenceMap.value=h.iridescenceMap,r(h.iridescenceMap,v.iridescenceMapTransform)),h.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=h.iridescenceThicknessMap,r(h.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),h.transmission>0&&(v.transmission.value=h.transmission,v.transmissionSamplerMap.value=m.texture,v.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(v.transmissionMap.value=h.transmissionMap,r(h.transmissionMap,v.transmissionMapTransform)),v.thickness.value=h.thickness,h.thicknessMap&&(v.thicknessMap.value=h.thicknessMap,r(h.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=h.attenuationDistance,v.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(v.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(v.anisotropyMap.value=h.anisotropyMap,r(h.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=h.specularIntensity,v.specularColor.value.copy(h.specularColor),h.specularColorMap&&(v.specularColorMap.value=h.specularColorMap,r(h.specularColorMap,v.specularColorMapTransform)),h.specularIntensityMap&&(v.specularIntensityMap.value=h.specularIntensityMap,r(h.specularIntensityMap,v.specularIntensityMapTransform))}function y(v,h){h.matcap&&(v.matcap.value=h.matcap)}function _(v,h){let m=t.get(h).light;v.referencePosition.value.setFromMatrixPosition(m.matrixWorld),v.nearDistance.value=m.shadow.camera.near,v.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function kA(e,t,r,n){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,g){let x=g.program;n.uniformBlockBinding(m,x)}function u(m,g){let x=i[m.id];x===void 0&&(y(m),x=c(m),i[m.id]=x,m.addEventListener("dispose",v));let L=g.program;n.updateUBOMapping(m,L);let T=t.render.frame;a[m.id]!==T&&(d(m),a[m.id]=T)}function c(m){let g=p();m.__bindingPointIndex=g;let x=e.createBuffer(),L=m.__size,T=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,L,T),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,g,x),x}function p(){for(let m=0;m<s;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(m){let g=i[m.id],x=m.uniforms,L=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,g);for(let T=0,b=x.length;T<b;T++){let R=Array.isArray(x[T])?x[T]:[x[T]];for(let w=0,S=R.length;w<S;w++){let P=R[w];if(f(P,T,w,L)===!0){let k=P.__offset,V=Array.isArray(P.value)?P.value:[P.value],W=0;for(let Y=0;Y<V.length;Y++){let j=V[Y],ie=_(j);typeof j=="number"||typeof j=="boolean"?(P.__data[0]=j,e.bufferSubData(e.UNIFORM_BUFFER,k+W,P.__data)):j.isMatrix3?(P.__data[0]=j.elements[0],P.__data[1]=j.elements[1],P.__data[2]=j.elements[2],P.__data[3]=0,P.__data[4]=j.elements[3],P.__data[5]=j.elements[4],P.__data[6]=j.elements[5],P.__data[7]=0,P.__data[8]=j.elements[6],P.__data[9]=j.elements[7],P.__data[10]=j.elements[8],P.__data[11]=0):(j.toArray(P.__data,W),W+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,k,P.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(m,g,x,L){let T=m.value,b=g+"_"+x;if(L[b]===void 0)return typeof T=="number"||typeof T=="boolean"?L[b]=T:L[b]=T.clone(),!0;{let R=L[b];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return L[b]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function y(m){let g=m.uniforms,x=0,L=16;for(let b=0,R=g.length;b<R;b++){let w=Array.isArray(g[b])?g[b]:[g[b]];for(let S=0,P=w.length;S<P;S++){let k=w[S],V=Array.isArray(k.value)?k.value:[k.value];for(let W=0,Y=V.length;W<Y;W++){let j=V[W],ie=_(j),$=x%L,fe=$%ie.boundary,ye=$+fe;x+=fe,ye!==0&&L-ye<ie.storage&&(x+=L-ye),k.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=ie.storage}}}let T=x%L;return T>0&&(x+=L-T),m.__size=x,m.__cache={},this}function _(m){let g={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(g.boundary=4,g.storage=4):m.isVector2?(g.boundary=8,g.storage=8):m.isVector3||m.isColor?(g.boundary=16,g.storage=12):m.isVector4?(g.boundary=16,g.storage=16):m.isMatrix3?(g.boundary=48,g.storage=48):m.isMatrix4?(g.boundary=64,g.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),g}function v(m){let g=m.target;g.removeEventListener("dispose",v);let x=o.indexOf(g.__bindingPointIndex);o.splice(x,1),e.deleteBuffer(i[g.id]),delete i[g.id],delete a[g.id]}function h(){for(let m in i)e.deleteBuffer(i[m]);o=[],i={},a={}}return{bind:l,update:u,dispose:h}}var OA=class{constructor(e={}){let{canvas:t=Tw(),context:r=null,depth:n=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let d;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=r.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),y=new Int32Array(4),_=null,v=null,h=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hr,this.toneMapping=Vi,this.toneMappingExposure=1;let g=this,x=!1,L=0,T=0,b=null,R=-1,w=null,S=new xt,P=new xt,k=null,V=new et(0),W=0,Y=t.width,j=t.height,ie=1,$=null,fe=null,ye=new xt(0,0,Y,j),Xe=new xt(0,0,Y,j),Je=!1,Z=new um,de=!1,Ie=!1,Le=new St,ve=new St,Be=new N,Ze=new xt,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function me(){return b===null?ie:1}let A=r;function be(E,O){return t.getContext(E,O)}try{let E={alpha:!0,depth:n,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",B,!1),A===null){let O="webgl2";if(A=be(O,E),A===null)throw be(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ae,Ae,oe,je,we,Ne,C,M,z,K,re,q,Ue,_e,Me,$e,pe,Ee,ze,We,Ce,Ye,tt,Mt;function U(){ae=new HT(A),ae.init(),Ye=new AA(A,ae),Ae=new kT(A,ae,e,Ye),oe=new EA(A,ae),Ae.reverseDepthBuffer&&p&&oe.buffers.depth.setReversed(!0),je=new XT(A),we=new uA,Ne=new bA(A,ae,oe,we,Ae,Ye,je),C=new FT(g),M=new VT(g),z=new Qw(A),tt=new DT(A,z),K=new GT(A,z,je,tt),re=new $T(A,K,z,je),ze=new jT(A,Ae,Ne),$e=new OT(we),q=new lA(g,C,M,ae,Ae,tt,$e),Ue=new UA(g,we),_e=new hA,Me=new vA(ae),Ee=new IT(g,C,M,oe,re,d,s),pe=new MA(g,re,Ae),Mt=new kA(A,je,Ae,oe),We=new UT(A,ae,je),Ce=new WT(A,ae,je),je.programs=q.programs,g.capabilities=Ae,g.extensions=ae,g.properties=we,g.renderLists=_e,g.shadowMap=pe,g.state=oe,g.info=je}U();let ue=new IA(g,A);this.xr=ue,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let E=ae.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ae.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(E){E!==void 0&&(ie=E,this.setSize(Y,j,!1))},this.getSize=function(E){return E.set(Y,j)},this.setSize=function(E,O,H=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,j=O,t.width=Math.floor(E*ie),t.height=Math.floor(O*ie),H===!0&&(t.style.width=E+"px",t.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(Y*ie,j*ie).floor()},this.setDrawingBufferSize=function(E,O,H){Y=E,j=O,ie=H,t.width=Math.floor(E*H),t.height=Math.floor(O*H),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(ye)},this.setViewport=function(E,O,H,G){E.isVector4?ye.set(E.x,E.y,E.z,E.w):ye.set(E,O,H,G),oe.viewport(S.copy(ye).multiplyScalar(ie).round())},this.getScissor=function(E){return E.copy(Xe)},this.setScissor=function(E,O,H,G){E.isVector4?Xe.set(E.x,E.y,E.z,E.w):Xe.set(E,O,H,G),oe.scissor(P.copy(Xe).multiplyScalar(ie).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(E){oe.setScissorTest(Je=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){fe=E},this.getClearColor=function(E){return E.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(E=!0,O=!0,H=!0){let G=0;if(E){let D=!1;if(b!==null){let ce=b.texture.format;D=ce===lm||ce===sm||ce===om}if(D){let ce=b.texture.type,Re=ce===ai||ce===wa||ce===fl||ce===Go||ce===nm||ce===im,De=Ee.getClearColor(),ke=Ee.getClearAlpha(),Qe=De.r,Ke=De.g,Ve=De.b;Re?(f[0]=Qe,f[1]=Ke,f[2]=Ve,f[3]=ke,A.clearBufferuiv(A.COLOR,0,f)):(y[0]=Qe,y[1]=Ke,y[2]=Ve,y[3]=ke,A.clearBufferiv(A.COLOR,0,y))}else G|=A.COLOR_BUFFER_BIT}O&&(G|=A.DEPTH_BUFFER_BIT),H&&(G|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",B,!1),_e.dispose(),Me.dispose(),we.dispose(),C.dispose(),M.dispose(),re.dispose(),tt.dispose(),Mt.dispose(),q.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",qe),ue.removeEventListener("sessionend",lt),wt.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let E=je.autoReset,O=pe.enabled,H=pe.autoUpdate,G=pe.needsUpdate,D=pe.type;U(),je.autoReset=E,pe.enabled=O,pe.autoUpdate=H,pe.needsUpdate=G,pe.type=D}function B(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function F(E){let O=E.target;O.removeEventListener("dispose",F),Q(O)}function Q(E){ge(E),we.remove(E)}function ge(E){let O=we.get(E).programs;O!==void 0&&(O.forEach(function(H){q.releaseProgram(H)}),E.isShaderMaterial&&q.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,H,G,D,ce){O===null&&(O=Ge);let Re=D.isMesh&&D.matrixWorld.determinant()<0,De=wl(E,O,H,G,D);oe.setMaterial(G,Re);let ke=H.index,Qe=1;if(G.wireframe===!0){if(ke=K.getWireframeAttribute(H),ke===void 0)return;Qe=2}let Ke=H.drawRange,Ve=H.attributes.position,ht=Ke.start*Qe,Ct=(Ke.start+Ke.count)*Qe;ce!==null&&(ht=Math.max(ht,ce.start*Qe),Ct=Math.min(Ct,(ce.start+ce.count)*Qe)),ke!==null?(ht=Math.max(ht,0),Ct=Math.min(Ct,ke.count)):Ve!=null&&(ht=Math.max(ht,0),Ct=Math.min(Ct,Ve.count));let Rt=Ct-ht;if(Rt<0||Rt===1/0)return;tt.setup(D,G,De,H,ke);let Vt,Pt=We;if(ke!==null&&(Vt=z.get(ke),Pt=Ce,Pt.setIndex(Vt)),D.isMesh)G.wireframe===!0?(oe.setLineWidth(G.wireframeLinewidth*me()),Pt.setMode(A.LINES)):Pt.setMode(A.TRIANGLES);else if(D.isLine){let Oe=G.linewidth;Oe===void 0&&(Oe=1),oe.setLineWidth(Oe*me()),D.isLineSegments?Pt.setMode(A.LINES):D.isLineLoop?Pt.setMode(A.LINE_LOOP):Pt.setMode(A.LINE_STRIP)}else D.isPoints?Pt.setMode(A.POINTS):D.isSprite&&Pt.setMode(A.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Pt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))Pt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let Oe=D._multiDrawStarts,ji=D._multiDrawCounts,$i=D._multiDrawCount,nn=ke?z.get(ke).bytesPerElement:1,Pa=we.get(G).currentProgram.getUniforms();for(let Ir=0;Ir<$i;Ir++)Pa.setValue(A,"_gl_DrawID",Ir),Pt.render(Oe[Ir]/nn,ji[Ir])}else if(D.isInstancedMesh)Pt.renderInstances(ht,Rt,D.count);else if(H.isInstancedBufferGeometry){let Oe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ji=Math.min(H.instanceCount,Oe);Pt.renderInstances(ht,Rt,ji)}else Pt.render(ht,Rt)};function Se(E,O,H){E.transparent===!0&&E.side===ti&&E.forceSinglePass===!1?(E.side=Tr,E.needsUpdate=!0,vr(E,O,H),E.side=Hi,E.needsUpdate=!0,vr(E,O,H),E.side=ti):vr(E,O,H)}this.compile=function(E,O,H=null){H===null&&(H=E),v=Me.get(H),v.init(O),m.push(v),H.traverseVisible(function(D){D.isLight&&D.layers.test(O.layers)&&(v.pushLight(D),D.castShadow&&v.pushShadow(D))}),E!==H&&E.traverseVisible(function(D){D.isLight&&D.layers.test(O.layers)&&(v.pushLight(D),D.castShadow&&v.pushShadow(D))}),v.setupLights();let G=new Set;return E.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let ce=D.material;if(ce)if(Array.isArray(ce))for(let Re=0;Re<ce.length;Re++){let De=ce[Re];Se(De,H,D),G.add(De)}else Se(ce,H,D),G.add(ce)}),m.pop(),v=null,G},this.compileAsync=function(E,O,H=null){let G=this.compile(E,O,H);return new Promise(D=>{function ce(){if(G.forEach(function(Re){we.get(Re).currentProgram.isReady()&&G.delete(Re)}),G.size===0){D(E);return}setTimeout(ce,10)}ae.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Te=null;function it(E){Te&&Te(E)}function qe(){wt.stop()}function lt(){wt.start()}let wt=new hy;wt.setAnimationLoop(it),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(E){Te=E,ue.setAnimationLoop(E),E===null?wt.stop():wt.start()},ue.addEventListener("sessionstart",qe),ue.addEventListener("sessionend",lt),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(O),O=ue.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,O,b),v=Me.get(E,m.length),v.init(O),m.push(v),ve.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Z.setFromProjectionMatrix(ve),Ie=this.localClippingEnabled,de=$e.init(this.clippingPlanes,Ie),_=_e.get(E,h.length),_.init(),h.push(_),ue.enabled===!0&&ue.isPresenting===!0){let ce=g.xr.getDepthSensingMesh();ce!==null&&Et(ce,O,-1/0,g.sortObjects)}Et(E,O,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort($,fe),ee=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,ee&&Ee.addToRenderList(_,E),this.info.render.frame++,de===!0&&$e.beginShadows();let H=v.state.shadowsArray;pe.render(H,E,O),de===!0&&$e.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=_.opaque,D=_.transmissive;if(v.setupLights(),O.isArrayCamera){let ce=O.cameras;if(D.length>0)for(let Re=0,De=ce.length;Re<De;Re++){let ke=ce[Re];rn(G,D,E,ke)}ee&&Ee.render(E);for(let Re=0,De=ce.length;Re<De;Re++){let ke=ce[Re];gt(_,E,ke,ke.viewport)}}else D.length>0&&rn(G,D,E,O),ee&&Ee.render(E),gt(_,E,O);b!==null&&(Ne.updateMultisampleRenderTarget(b),Ne.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(g,E,O),tt.resetDefaultState(),R=-1,w=null,m.pop(),m.length>0?(v=m[m.length-1],de===!0&&$e.setGlobalState(g.clippingPlanes,v.state.camera)):v=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function Et(E,O,H,G){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)v.pushLight(E),E.castShadow&&v.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Z.intersectsSprite(E)){G&&Ze.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ve);let ce=re.update(E),Re=E.material;Re.visible&&_.push(E,ce,Re,H,Ze.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Z.intersectsObject(E))){let ce=re.update(E),Re=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ze.copy(E.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Ze.copy(ce.boundingSphere.center)),Ze.applyMatrix4(E.matrixWorld).applyMatrix4(ve)),Array.isArray(Re)){let De=ce.groups;for(let ke=0,Qe=De.length;ke<Qe;ke++){let Ke=De[ke],Ve=Re[Ke.materialIndex];Ve&&Ve.visible&&_.push(E,ce,Ve,H,Ze.z,Ke)}}else Re.visible&&_.push(E,ce,Re,H,Ze.z,null)}}let D=E.children;for(let ce=0,Re=D.length;ce<Re;ce++)Et(D[ce],O,H,G)}function gt(E,O,H,G){let D=E.opaque,ce=E.transmissive,Re=E.transparent;v.setupLightsView(H),de===!0&&$e.setGlobalState(g.clippingPlanes,H),G&&oe.viewport(S.copy(G)),D.length>0&&Mn(D,O,H),ce.length>0&&Mn(ce,O,H),Re.length>0&&Mn(Re,O,H),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function rn(E,O,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[G.id]===void 0&&(v.state.transmissionRenderTarget[G.id]=new Ea(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?_l:ai,minFilter:Ma,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));let D=v.state.transmissionRenderTarget[G.id],ce=G.viewport||S;D.setSize(ce.z,ce.w);let Re=g.getRenderTarget();g.setRenderTarget(D),g.getClearColor(V),W=g.getClearAlpha(),W<1&&g.setClearColor(16777215,.5),g.clear(),ee&&Ee.render(H);let De=g.toneMapping;g.toneMapping=Vi;let ke=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),v.setupLightsView(G),de===!0&&$e.setGlobalState(g.clippingPlanes,G),Mn(E,H,G),Ne.updateMultisampleRenderTarget(D),Ne.updateRenderTargetMipmap(D),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Ke=0,Ve=O.length;Ke<Ve;Ke++){let ht=O[Ke],Ct=ht.object,Rt=ht.geometry,Vt=ht.material,Pt=ht.group;if(Vt.side===ti&&Ct.layers.test(G.layers)){let Oe=Vt.side;Vt.side=Tr,Vt.needsUpdate=!0,si(Ct,H,G,Rt,Vt,Pt),Vt.side=Oe,Vt.needsUpdate=!0,Qe=!0}}Qe===!0&&(Ne.updateMultisampleRenderTarget(D),Ne.updateRenderTargetMipmap(D))}g.setRenderTarget(Re),g.setClearColor(V,W),ke!==void 0&&(G.viewport=ke),g.toneMapping=De}function Mn(E,O,H){let G=O.isScene===!0?O.overrideMaterial:null;for(let D=0,ce=E.length;D<ce;D++){let Re=E[D],De=Re.object,ke=Re.geometry,Qe=G===null?Re.material:G,Ke=Re.group;De.layers.test(H.layers)&&si(De,O,H,ke,Qe,Ke)}}function si(E,O,H,G,D,ce){E.onBeforeRender(g,O,H,G,D,ce),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),D.onBeforeRender(g,O,H,G,E,ce),D.transparent===!0&&D.side===ti&&D.forceSinglePass===!1?(D.side=Tr,D.needsUpdate=!0,g.renderBufferDirect(H,O,G,D,E,ce),D.side=Hi,D.needsUpdate=!0,g.renderBufferDirect(H,O,G,D,E,ce),D.side=ti):g.renderBufferDirect(H,O,G,D,E,ce),E.onAfterRender(g,O,H,G,D,ce)}function vr(E,O,H){O.isScene!==!0&&(O=Ge);let G=we.get(E),D=v.state.lights,ce=v.state.shadowsArray,Re=D.state.version,De=q.getParameters(E,D.state,ce,O,H),ke=q.getProgramCacheKey(De),Qe=G.programs;G.environment=E.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(E.isMeshStandardMaterial?M:C).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Qe===void 0&&(E.addEventListener("dispose",F),Qe=new Map,G.programs=Qe);let Ke=Qe.get(ke);if(Ke!==void 0){if(G.currentProgram===Ke&&G.lightsStateVersion===Re)return Xi(E,De),Ke}else De.uniforms=q.getUniforms(E),E.onBeforeCompile(De,g),Ke=q.acquireProgram(De,ke),Qe.set(ke,Ke),G.uniforms=De.uniforms;let Ve=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ve.clippingPlanes=$e.uniform),Xi(E,De),G.needsLights=nx(E),G.lightsStateVersion=Re,G.needsLights&&(Ve.ambientLightColor.value=D.state.ambient,Ve.lightProbe.value=D.state.probe,Ve.directionalLights.value=D.state.directional,Ve.directionalLightShadows.value=D.state.directionalShadow,Ve.spotLights.value=D.state.spot,Ve.spotLightShadows.value=D.state.spotShadow,Ve.rectAreaLights.value=D.state.rectArea,Ve.ltc_1.value=D.state.rectAreaLTC1,Ve.ltc_2.value=D.state.rectAreaLTC2,Ve.pointLights.value=D.state.point,Ve.pointLightShadows.value=D.state.pointShadow,Ve.hemisphereLights.value=D.state.hemi,Ve.directionalShadowMap.value=D.state.directionalShadowMap,Ve.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Ve.spotShadowMap.value=D.state.spotShadowMap,Ve.spotLightMatrix.value=D.state.spotLightMatrix,Ve.spotLightMap.value=D.state.spotLightMap,Ve.pointShadowMap.value=D.state.pointShadowMap,Ve.pointShadowMatrix.value=D.state.pointShadowMatrix),G.currentProgram=Ke,G.uniformsList=null,Ke}function wn(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=Bc.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Xi(E,O){let H=we.get(E);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function wl(E,O,H,G,D){O.isScene!==!0&&(O=Ge),Ne.resetTextureUnits();let ce=O.fog,Re=G.isMeshStandardMaterial?O.environment:null,De=b===null?g.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:jo,ke=(G.isMeshStandardMaterial?M:C).get(G.envMap||Re),Qe=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ke=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ve=!!H.morphAttributes.position,ht=!!H.morphAttributes.normal,Ct=!!H.morphAttributes.color,Rt=Vi;G.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Rt=g.toneMapping);let Vt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Pt=Vt!==void 0?Vt.length:0,Oe=we.get(G),ji=v.state.lights;if(de===!0&&(Ie===!0||E!==w)){let Ar=E===w&&G.id===R;$e.setState(G,E,Ar)}let $i=!1;G.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==ji.state.version||Oe.outputColorSpace!==De||D.isBatchedMesh&&Oe.batching===!1||!D.isBatchedMesh&&Oe.batching===!0||D.isBatchedMesh&&Oe.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Oe.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Oe.instancing===!1||!D.isInstancedMesh&&Oe.instancing===!0||D.isSkinnedMesh&&Oe.skinning===!1||!D.isSkinnedMesh&&Oe.skinning===!0||D.isInstancedMesh&&Oe.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Oe.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Oe.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Oe.instancingMorph===!1&&D.morphTexture!==null||Oe.envMap!==ke||G.fog===!0&&Oe.fog!==ce||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==$e.numPlanes||Oe.numIntersection!==$e.numIntersection)||Oe.vertexAlphas!==Qe||Oe.vertexTangents!==Ke||Oe.morphTargets!==Ve||Oe.morphNormals!==ht||Oe.morphColors!==Ct||Oe.toneMapping!==Rt||Oe.morphTargetsCount!==Pt)&&($i=!0):($i=!0,Oe.__version=G.version);let nn=Oe.currentProgram;$i===!0&&(nn=vr(G,O,D));let Pa=!1,Ir=!1,Ko=!1,Tt=nn.getUniforms(),En=Oe.uniforms;if(oe.useProgram(nn.program)&&(Pa=!0,Ir=!0,Ko=!0),G.id!==R&&(R=G.id,Ir=!0),Pa||w!==E){oe.buffers.depth.getReversed()?(Le.copy(E.projectionMatrix),Aw(Le),Cw(Le),Tt.setValue(A,"projectionMatrix",Le)):Tt.setValue(A,"projectionMatrix",E.projectionMatrix),Tt.setValue(A,"viewMatrix",E.matrixWorldInverse);let Ar=Tt.map.cameraPosition;Ar!==void 0&&Ar.setValue(A,Be.setFromMatrixPosition(E.matrixWorld)),Ae.logarithmicDepthBuffer&&Tt.setValue(A,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Tt.setValue(A,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,Ir=!0,Ko=!0)}if(D.isSkinnedMesh){Tt.setOptional(A,D,"bindMatrix"),Tt.setOptional(A,D,"bindMatrixInverse");let Ar=D.skeleton;Ar&&(Ar.boneTexture===null&&Ar.computeBoneTexture(),Tt.setValue(A,"boneTexture",Ar.boneTexture,Ne))}D.isBatchedMesh&&(Tt.setOptional(A,D,"batchingTexture"),Tt.setValue(A,"batchingTexture",D._matricesTexture,Ne),Tt.setOptional(A,D,"batchingIdTexture"),Tt.setValue(A,"batchingIdTexture",D._indirectTexture,Ne),Tt.setOptional(A,D,"batchingColorTexture"),D._colorsTexture!==null&&Tt.setValue(A,"batchingColorTexture",D._colorsTexture,Ne));let es=H.morphAttributes;if((es.position!==void 0||es.normal!==void 0||es.color!==void 0)&&ze.update(D,H,nn),(Ir||Oe.receiveShadow!==D.receiveShadow)&&(Oe.receiveShadow=D.receiveShadow,Tt.setValue(A,"receiveShadow",D.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(En.envMap.value=ke,En.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(En.envMapIntensity.value=O.environmentIntensity),Ir&&(Tt.setValue(A,"toneMappingExposure",g.toneMappingExposure),Oe.needsLights&&rx(En,Ko),ce&&G.fog===!0&&Ue.refreshFogUniforms(En,ce),Ue.refreshMaterialUniforms(En,G,ie,j,v.state.transmissionRenderTarget[E.id]),Bc.upload(A,wn(Oe),En,Ne)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Bc.upload(A,wn(Oe),En,Ne),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Tt.setValue(A,"center",D.center),Tt.setValue(A,"modelViewMatrix",D.modelViewMatrix),Tt.setValue(A,"normalMatrix",D.normalMatrix),Tt.setValue(A,"modelMatrix",D.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Ar=G.uniformsGroups;for(let ts=0,li=Ar.length;ts<li;ts++){let vm=Ar[ts];Mt.update(vm,nn),Mt.bind(vm,nn)}}return nn}function rx(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function nx(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,O,H){we.get(E.texture).__webglTexture=O,we.get(E.depthTexture).__webglTexture=H;let G=we.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){let H=we.get(E);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,H=0){b=E,L=O,T=H;let G=!0,D=null,ce=!1,Re=!1;if(E){let De=we.get(E);if(De.__useDefaultFramebuffer!==void 0)oe.bindFramebuffer(A.FRAMEBUFFER,null),G=!1;else if(De.__webglFramebuffer===void 0)Ne.setupRenderTarget(E);else if(De.__hasExternalTextures)Ne.rebindTextures(E,we.get(E.texture).__webglTexture,we.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ke=E.depthTexture;if(De.__boundDepthTexture!==Ke){if(Ke!==null&&we.has(Ke)&&(E.width!==Ke.image.width||E.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(E)}}let ke=E.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Re=!0);let Qe=we.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Qe[O])?D=Qe[O][H]:D=Qe[O],ce=!0):E.samples>0&&Ne.useMultisampledRTT(E)===!1?D=we.get(E).__webglMultisampledFramebuffer:Array.isArray(Qe)?D=Qe[H]:D=Qe,S.copy(E.viewport),P.copy(E.scissor),k=E.scissorTest}else S.copy(ye).multiplyScalar(ie).floor(),P.copy(Xe).multiplyScalar(ie).floor(),k=Je;if(oe.bindFramebuffer(A.FRAMEBUFFER,D)&&G&&oe.drawBuffers(E,D),oe.viewport(S),oe.scissor(P),oe.setScissorTest(k),ce){let De=we.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+O,De.__webglTexture,H)}else if(Re){let De=we.get(E.texture),ke=O||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,De.__webglTexture,H||0,ke)}R=-1},this.readRenderTargetPixels=function(E,O,H,G,D,ce,Re){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=we.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){oe.bindFramebuffer(A.FRAMEBUFFER,De);try{let ke=E.texture,Qe=ke.format,Ke=ke.type;if(!Ae.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-G&&H>=0&&H<=E.height-D&&A.readPixels(O,H,G,D,Ye.convert(Qe),Ye.convert(Ke),ce)}finally{let ke=b!==null?we.get(b).__webglFramebuffer:null;oe.bindFramebuffer(A.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(E,O,H,G,D,ce,Re){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=we.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){let ke=E.texture,Qe=ke.format,Ke=ke.type;if(!Ae.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=E.width-G&&H>=0&&H<=E.height-D){oe.bindFramebuffer(A.FRAMEBUFFER,De);let Ve=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ve),A.bufferData(A.PIXEL_PACK_BUFFER,ce.byteLength,A.STREAM_READ),A.readPixels(O,H,G,D,Ye.convert(Qe),Ye.convert(Ke),0);let ht=b!==null?we.get(b).__webglFramebuffer:null;oe.bindFramebuffer(A.FRAMEBUFFER,ht);let Ct=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await bw(A,Ct,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ve),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ce),A.deleteBuffer(Ve),A.deleteSync(Ct),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,O=null,H=0){E.isTexture!==!0&&(ul("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1]);let G=Math.pow(2,-H),D=Math.floor(E.image.width*G),ce=Math.floor(E.image.height*G),Re=O!==null?O.x:0,De=O!==null?O.y:0;Ne.setTexture2D(E,0),A.copyTexSubImage2D(A.TEXTURE_2D,H,0,0,Re,De,D,ce),oe.unbindTexture()},this.copyTextureToTexture=function(E,O,H=null,G=null,D=0){E.isTexture!==!0&&(ul("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],O=arguments[2],D=arguments[3]||0,H=null);let ce,Re,De,ke,Qe,Ke,Ve,ht,Ct,Rt=E.isCompressedTexture?E.mipmaps[D]:E.image;H!==null?(ce=H.max.x-H.min.x,Re=H.max.y-H.min.y,De=H.isBox3?H.max.z-H.min.z:1,ke=H.min.x,Qe=H.min.y,Ke=H.isBox3?H.min.z:0):(ce=Rt.width,Re=Rt.height,De=Rt.depth||1,ke=0,Qe=0,Ke=0),G!==null?(Ve=G.x,ht=G.y,Ct=G.z):(Ve=0,ht=0,Ct=0);let Vt=Ye.convert(O.format),Pt=Ye.convert(O.type),Oe;O.isData3DTexture?(Ne.setTexture3D(O,0),Oe=A.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ne.setTexture2DArray(O,0),Oe=A.TEXTURE_2D_ARRAY):(Ne.setTexture2D(O,0),Oe=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,O.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,O.unpackAlignment);let ji=A.getParameter(A.UNPACK_ROW_LENGTH),$i=A.getParameter(A.UNPACK_IMAGE_HEIGHT),nn=A.getParameter(A.UNPACK_SKIP_PIXELS),Pa=A.getParameter(A.UNPACK_SKIP_ROWS),Ir=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Rt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Rt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,ke),A.pixelStorei(A.UNPACK_SKIP_ROWS,Qe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ke);let Ko=E.isDataArrayTexture||E.isData3DTexture,Tt=O.isDataArrayTexture||O.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let En=we.get(E),es=we.get(O),Ar=we.get(En.__renderTarget),ts=we.get(es.__renderTarget);oe.bindFramebuffer(A.READ_FRAMEBUFFER,Ar.__webglFramebuffer),oe.bindFramebuffer(A.DRAW_FRAMEBUFFER,ts.__webglFramebuffer);for(let li=0;li<De;li++)Ko&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,we.get(E).__webglTexture,D,Ke+li),E.isDepthTexture?(Tt&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,we.get(O).__webglTexture,D,Ct+li),A.blitFramebuffer(ke,Qe,ce,Re,Ve,ht,ce,Re,A.DEPTH_BUFFER_BIT,A.NEAREST)):Tt?A.copyTexSubImage3D(Oe,D,Ve,ht,Ct+li,ke,Qe,ce,Re):A.copyTexSubImage2D(Oe,D,Ve,ht,Ct+li,ke,Qe,ce,Re);oe.bindFramebuffer(A.READ_FRAMEBUFFER,null),oe.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Tt?E.isDataTexture||E.isData3DTexture?A.texSubImage3D(Oe,D,Ve,ht,Ct,ce,Re,De,Vt,Pt,Rt.data):O.isCompressedArrayTexture?A.compressedTexSubImage3D(Oe,D,Ve,ht,Ct,ce,Re,De,Vt,Rt.data):A.texSubImage3D(Oe,D,Ve,ht,Ct,ce,Re,De,Vt,Pt,Rt):E.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,D,Ve,ht,ce,Re,Vt,Pt,Rt.data):E.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,D,Ve,ht,Rt.width,Rt.height,Vt,Rt.data):A.texSubImage2D(A.TEXTURE_2D,D,Ve,ht,ce,Re,Vt,Pt,Rt);A.pixelStorei(A.UNPACK_ROW_LENGTH,ji),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,$i),A.pixelStorei(A.UNPACK_SKIP_PIXELS,nn),A.pixelStorei(A.UNPACK_SKIP_ROWS,Pa),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ir),D===0&&O.generateMipmaps&&A.generateMipmap(Oe),oe.unbindTexture()},this.copyTextureToTexture3D=function(E,O,H=null,G=null,D=0){return E.isTexture!==!0&&(ul("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,E=arguments[2],O=arguments[3],D=arguments[4]||0),ul('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,O,H,G,D)},this.initRenderTarget=function(E){we.get(E).__webglFramebuffer===void 0&&Ne.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ne.setTextureCube(E,0):E.isData3DTexture?Ne.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ne.setTexture2DArray(E,0):Ne.setTexture2D(E,0),oe.unbindTexture()},this.resetState=function(){L=0,T=0,b=null,oe.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}},FA=class yy{constructor(t,r=25e-5){this.isFogExp2=!0,this.name="",this.color=new et(t),this.density=r}clone(){return new yy(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},f1=class extends ar{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},zA=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jf,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let n=0,i=this.stride;n<i;n++)this.array[e+n]=t.array[r+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Mr=new N,m1=class xy{constructor(t,r,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=r,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let r=0,n=this.data.count;r<n;r++)Mr.fromBufferAttribute(this,r),Mr.applyMatrix4(t),this.setXYZ(r,Mr.x,Mr.y,Mr.z);return this}applyNormalMatrix(t){for(let r=0,n=this.count;r<n;r++)Mr.fromBufferAttribute(this,r),Mr.applyNormalMatrix(t),this.setXYZ(r,Mr.x,Mr.y,Mr.z);return this}transformDirection(t){for(let r=0,n=this.count;r<n;r++)Mr.fromBufferAttribute(this,r),Mr.transformDirection(t),this.setXYZ(r,Mr.x,Mr.y,Mr.z);return this}getComponent(t,r){let n=this.array[t*this.data.stride+this.offset+r];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,r,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[t*this.data.stride+this.offset+r]=n,this}setX(t,r){return this.normalized&&(r=ft(r,this.array)),this.data.array[t*this.data.stride+this.offset]=r,this}setY(t,r){return this.normalized&&(r=ft(r,this.array)),this.data.array[t*this.data.stride+this.offset+1]=r,this}setZ(t,r){return this.normalized&&(r=ft(r,this.array)),this.data.array[t*this.data.stride+this.offset+2]=r,this}setW(t,r){return this.normalized&&(r=ft(r,this.array)),this.data.array[t*this.data.stride+this.offset+3]=r,this}getX(t){let r=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(r=Nn(r,this.array)),r}getY(t){let r=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(r=Nn(r,this.array)),r}getZ(t){let r=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(r=Nn(r,this.array)),r}getW(t){let r=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(r=Nn(r,this.array)),r}setXY(t,r,n){return t=t*this.data.stride+this.offset,this.normalized&&(r=ft(r,this.array),n=ft(n,this.array)),this.data.array[t+0]=r,this.data.array[t+1]=n,this}setXYZ(t,r,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(r=ft(r,this.array),n=ft(n,this.array),i=ft(i,this.array)),this.data.array[t+0]=r,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,r,n,i,a){return t=t*this.data.stride+this.offset,this.normalized&&(r=ft(r,this.array),n=ft(n,this.array),i=ft(i,this.array),a=ft(a,this.array)),this.data.array[t+0]=r,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let r=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)r.push(this.data.array[i+a])}return new br(new this.array.constructor(r),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new xy(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let r=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)r.push(this.data.array[i+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:r,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Sy=class extends Aa{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wo,tl=new N,Eo=new N,To=new N,bo=new he,rl=new he,My=new St,Mc=new N,nl=new N,wc=new N,g1=new he,Jp=new he,v1=new he,il=class extends ar{constructor(e=new Sy){if(super(),this.isSprite=!0,this.type="Sprite",wo===void 0){wo=new fr;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new zA(t,5);wo.setIndex([0,1,2,0,2,3]),wo.setAttribute("position",new m1(r,3,0,!1)),wo.setAttribute("uv",new m1(r,2,3,!1))}this.geometry=wo,this.material=e,this.center=new he(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Eo.setFromMatrixScale(this.matrixWorld),My.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),To.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Eo.multiplyScalar(-To.z);let r=this.material.rotation,n,i;r!==0&&(i=Math.cos(r),n=Math.sin(r));let a=this.center;Ec(Mc.set(-.5,-.5,0),To,a,Eo,n,i),Ec(nl.set(.5,-.5,0),To,a,Eo,n,i),Ec(wc.set(.5,.5,0),To,a,Eo,n,i),g1.set(0,0),Jp.set(1,0),v1.set(1,1);let o=e.ray.intersectTriangle(Mc,nl,wc,!1,tl);if(o===null&&(Ec(nl.set(-.5,.5,0),To,a,Eo,n,i),Jp.set(0,1),o=e.ray.intersectTriangle(Mc,wc,nl,!1,tl),o===null))return;let s=e.ray.origin.distanceTo(tl);s<e.near||s>e.far||t.push({distance:s,point:tl.clone(),uv:Ro.getInterpolation(tl,Mc,nl,wc,g1,Jp,v1,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ec(e,t,r,n,i,a){bo.subVectors(e,r).addScalar(.5).multiply(n),i!==void 0?(rl.x=a*bo.x-i*bo.y,rl.y=i*bo.x+a*bo.y):rl.copy(bo),e.copy(t),e.x+=rl.x,e.y+=rl.y,e.applyMatrix4(My)}var BA=class extends Kr{constructor(e=null,t=1,r=1,n,i,a,o,s,l=Wr,u=Wr,c,p){super(null,a,o,s,l,u,n,i,c,p),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_1=class extends br{constructor(e,t,r,n=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ao=new St,y1=new St,Tc=[],x1=new ba,VA=new St,al=new Fe,ol=new qo,Qp=class extends Fe{constructor(e,t,r){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _1(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<r;n++)this.setMatrixAt(n,VA)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ba),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,Ao),x1.copy(e.boundingBox).applyMatrix4(Ao),this.boundingBox.union(x1)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,Ao),ol.copy(e.boundingSphere).applyMatrix4(Ao),this.boundingSphere.union(ol)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let r=t.morphTargetInfluences,n=this.morphTexture.source.data.data,i=r.length+1,a=e*i+1;for(let o=0;o<r.length;o++)r[o]=n[a+o]}raycast(e,t){let r=this.matrixWorld,n=this.count;if(al.geometry=this.geometry,al.material=this.material,al.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ol.copy(this.boundingSphere),ol.applyMatrix4(r),e.ray.intersectsSphere(ol)!==!1))for(let i=0;i<n;i++){this.getMatrixAt(i,Ao),y1.multiplyMatrices(r,Ao),al.matrixWorld=y1,al.raycast(e,Tc);for(let a=0,o=Tc.length;a<o;a++){let s=Tc[a];s.instanceId=i,s.object=this,t.push(s)}Tc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _1(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let r=t.morphTargetInfluences,n=r.length+1;this.morphTexture===null&&(this.morphTexture=new BA(new Float32Array(n*this.count),n,this.count,am,Dn));let i=this.morphTexture.source.data.data,a=0;for(let l=0;l<r.length;l++)a+=r[l];let o=this.geometry.morphTargetsRelative?1:1-a,s=n*e;i[s]=o,i.set(r,s+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},wy=class extends Aa{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},S1=new St,Jf=new ey,bc=new qo,Ac=new N,M1=class extends ar{constructor(e=new fr,t=new wy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let r=this.geometry,n=this.matrixWorld,i=e.params.Points.threshold,a=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),bc.copy(r.boundingSphere),bc.applyMatrix4(n),bc.radius+=i,e.ray.intersectsSphere(bc)===!1)return;S1.copy(n).invert(),Jf.copy(e.ray).applyMatrix4(S1);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,l=r.index,u=r.attributes.position;if(l!==null){let c=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let d=c,f=p;d<f;d++){let y=l.getX(d);Ac.fromBufferAttribute(u,y),w1(Ac,y,s,n,e,t,this)}}else{let c=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let d=c,f=p;d<f;d++)Ac.fromBufferAttribute(u,d),w1(Ac,d,s,n,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,i=r.length;n<i;n++){let a=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}};function w1(e,t,r,n,i,a,o){let s=Jf.distanceSqToPoint(e);if(s<r){let l=new N;Jf.closestPointToPoint(e,l),l.applyMatrix4(n);let u=i.ray.origin.distanceTo(l);if(u<i.near||u>i.far)return;a.push({distance:u,distanceToRay:Math.sqrt(s),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var HA=class extends Kr{constructor(e,t,r,n,i,a,o,s,l){super(e,t,r,n,i,a,o,s,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){let t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){let t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],r,n=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)r=this.getPoint(a/e),i+=r.distanceTo(n),t.push(i),n=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let r=this.getLengths(),n=0,i=r.length,a;t?a=t:a=e*r[i-1];let o=0,s=i-1,l;for(;o<=s;)if(n=Math.floor(o+(s-o)/2),l=r[n]-a,l<0)o=n+1;else if(l>0)s=n-1;else{s=n;break}if(n=s,r[n]===a)return n/(i-1);let u=r[n],c=r[n+1]-u,p=(a-u)/c;return(n+p)/(i-1)}getTangent(e,t){let r=e-1e-4,n=e+1e-4;r<0&&(r=0),n>1&&(n=1);let i=this.getPoint(r),a=this.getPoint(n),o=t||(i.isVector2?new he:new N);return o.copy(a).sub(i).normalize(),o}getTangentAt(e,t){let r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){let r=new N,n=[],i=[],a=[],o=new N,s=new St;for(let d=0;d<=e;d++){let f=d/e;n[d]=this.getTangentAt(f,new N)}i[0]=new N,a[0]=new N;let l=Number.MAX_VALUE,u=Math.abs(n[0].x),c=Math.abs(n[0].y),p=Math.abs(n[0].z);u<=l&&(l=u,r.set(1,0,0)),c<=l&&(l=c,r.set(0,1,0)),p<=l&&r.set(0,0,1),o.crossVectors(n[0],r).normalize(),i[0].crossVectors(n[0],o),a[0].crossVectors(n[0],i[0]);for(let d=1;d<=e;d++){if(i[d]=i[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(n[d-1],n[d]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(ir(n[d-1].dot(n[d]),-1,1));i[d].applyMatrix4(s.makeRotationAxis(o,f))}a[d].crossVectors(n[d],i[d])}if(t===!0){let d=Math.acos(ir(i[0].dot(i[e]),-1,1));d/=e,n[0].dot(o.crossVectors(i[0],i[e]))>0&&(d=-d);for(let f=1;f<=e;f++)i[f].applyMatrix4(s.makeRotationAxis(n[f],d*f)),a[f].crossVectors(n[f],i[f])}return{tangents:n,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},hm=class extends kn{constructor(e=0,t=0,r=1,n=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=n,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new he){let r=t,n=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<Number.EPSILON;for(;i<0;)i+=n;for(;i>n;)i-=n;i<Number.EPSILON&&(a?i=0:i=n),this.aClockwise===!0&&!a&&(i===n?i=-n:i=i-n);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),c=Math.sin(this.aRotation),p=s-this.aX,d=l-this.aY;s=p*u-d*c+this.aX,l=p*c+d*u+this.aY}return r.set(s,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},GA=class extends hm{constructor(e,t,r,n,i,a){super(e,t,r,r,n,i,a),this.isArcCurve=!0,this.type="ArcCurve"}};function dm(){let e=0,t=0,r=0,n=0;function i(a,o,s,l){e=a,t=s,r=-3*a+3*o-2*s-l,n=2*a-2*o+s+l}return{initCatmullRom:function(a,o,s,l,u){i(o,s,u*(s-a),u*(l-o))},initNonuniformCatmullRom:function(a,o,s,l,u,c,p){let d=(o-a)/u-(s-a)/(u+c)+(s-o)/c,f=(s-o)/c-(l-o)/(c+p)+(l-s)/p;d*=c,f*=c,i(o,s,d,f)},calc:function(a){let o=a*a,s=o*a;return e+t*a+r*o+n*s}}}var Cc=new N,Kp=new dm,ef=new dm,tf=new dm,WA=class extends kn{constructor(e=[],t=!1,r="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=n}getPoint(e,t=new N){let r=t,n=this.points,i=n.length,a=(i-(this.closed?0:1))*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let l,u;this.closed||o>0?l=n[(o-1)%i]:(Cc.subVectors(n[0],n[1]).add(n[0]),l=Cc);let c=n[o%i],p=n[(o+1)%i];if(this.closed||o+2<i?u=n[(o+2)%i]:(Cc.subVectors(n[i-1],n[i-2]).add(n[i-1]),u=Cc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(c),d),y=Math.pow(c.distanceToSquared(p),d),_=Math.pow(p.distanceToSquared(u),d);y<1e-4&&(y=1),f<1e-4&&(f=y),_<1e-4&&(_=y),Kp.initNonuniformCatmullRom(l.x,c.x,p.x,u.x,f,y,_),ef.initNonuniformCatmullRom(l.y,c.y,p.y,u.y,f,y,_),tf.initNonuniformCatmullRom(l.z,c.z,p.z,u.z,f,y,_)}else this.curveType==="catmullrom"&&(Kp.initCatmullRom(l.x,c.x,p.x,u.x,this.tension),ef.initCatmullRom(l.y,c.y,p.y,u.y,this.tension),tf.initCatmullRom(l.z,c.z,p.z,u.z,this.tension));return r.set(Kp.calc(s),ef.calc(s),tf.calc(s)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let n=e.points[t];this.points.push(new N().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function E1(e,t,r,n,i){let a=(n-t)*.5,o=(i-r)*.5,s=e*e,l=e*s;return(2*r-2*n+a+o)*l+(-3*r+3*n-2*a-o)*s+a*e+r}function XA(e,t){let r=1-e;return r*r*t}function jA(e,t){return 2*(1-e)*e*t}function $A(e,t){return e*e*t}function dl(e,t,r,n){return XA(e,t)+jA(e,r)+$A(e,n)}function YA(e,t){let r=1-e;return r*r*r*t}function qA(e,t){let r=1-e;return 3*r*r*e*t}function ZA(e,t){return 3*(1-e)*e*e*t}function JA(e,t){return e*e*e*t}function pl(e,t,r,n,i){return YA(e,t)+qA(e,r)+ZA(e,n)+JA(e,i)}var Ey=class extends kn{constructor(e=new he,t=new he,r=new he,n=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=n}getPoint(e,t=new he){let r=t,n=this.v0,i=this.v1,a=this.v2,o=this.v3;return r.set(pl(e,n.x,i.x,a.x,o.x),pl(e,n.y,i.y,a.y,o.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},QA=class extends kn{constructor(e=new N,t=new N,r=new N,n=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=n}getPoint(e,t=new N){let r=t,n=this.v0,i=this.v1,a=this.v2,o=this.v3;return r.set(pl(e,n.x,i.x,a.x,o.x),pl(e,n.y,i.y,a.y,o.y),pl(e,n.z,i.z,a.z,o.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ty=class extends kn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},KA=class extends kn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},by=class extends kn{constructor(e=new he,t=new he,r=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new he){let r=t,n=this.v0,i=this.v1,a=this.v2;return r.set(dl(e,n.x,i.x,a.x),dl(e,n.y,i.y,a.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ay=class extends kn{constructor(e=new N,t=new N,r=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new N){let r=t,n=this.v0,i=this.v1,a=this.v2;return r.set(dl(e,n.x,i.x,a.x),dl(e,n.y,i.y,a.y),dl(e,n.z,i.z,a.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cy=class extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let r=t,n=this.points,i=(n.length-1)*e,a=Math.floor(i),o=i-a,s=n[a===0?a:a-1],l=n[a],u=n[a>n.length-2?n.length-1:a+1],c=n[a>n.length-3?n.length-1:a+2];return r.set(E1(o,s.x,l.x,u.x,c.x),E1(o,s.y,l.y,u.y,c.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let n=e.points[t];this.points.push(new he().fromArray(n))}return this}},Qf=Object.freeze({__proto__:null,ArcCurve:GA,CatmullRomCurve3:WA,CubicBezierCurve:Ey,CubicBezierCurve3:QA,EllipseCurve:hm,LineCurve:Ty,LineCurve3:KA,QuadraticBezierCurve:by,QuadraticBezierCurve3:Ay,SplineCurve:Cy}),eC=class extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qf[r](t,e))}return this}getPoint(e,t){let r=e*this.getLength(),n=this.getCurveLengths(),i=0;for(;i<n.length;){if(n[i]>=r){let a=n[i]-r,o=this.curves[i],s=o.getLength(),l=s===0?0:1-a/s;return o.getPointAt(l,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let r=0,n=this.curves.length;r<n;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],r;for(let n=0,i=this.curves;n<i.length;n++){let a=i[n],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let l=0;l<s.length;l++){let u=s[l];r&&r.equals(u)||(t.push(u),r=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){let n=e.curves[t];this.curves.push(new Qf[n.type]().fromJSON(n))}return this}},xa=class extends eC{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let r=new Ty(this.currentPoint.clone(),new he(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,n){let i=new by(this.currentPoint.clone(),new he(e,t),new he(r,n));return this.curves.push(i),this.currentPoint.set(r,n),this}bezierCurveTo(e,t,r,n,i,a){let o=new Ey(this.currentPoint.clone(),new he(e,t),new he(r,n),new he(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),r=new Cy(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,n,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,r,n,i,a),this}absarc(e,t,r,n,i,a){return this.absellipse(e,t,r,r,n,i,a),this}ellipse(e,t,r,n,i,a,o,s){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,r,n,i,a,o,s),this}absellipse(e,t,r,n,i,a,o,s){let l=new hm(e,t,r,n,i,a,o,s);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},tC=class Ry extends fr{constructor(t=[new he(0,-.5),new he(.5,0),new he(0,.5)],r=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:r,phiStart:n,phiLength:i},r=Math.floor(r),i=ir(i,0,Math.PI*2);let a=[],o=[],s=[],l=[],u=[],c=1/r,p=new N,d=new he,f=new N,y=new N,_=new N,v=0,h=0;for(let m=0;m<=t.length-1;m++)switch(m){case 0:v=t[m+1].x-t[m].x,h=t[m+1].y-t[m].y,f.x=h*1,f.y=-v,f.z=h*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:v=t[m+1].x-t[m].x,h=t[m+1].y-t[m].y,f.x=h*1,f.y=-v,f.z=h*0,y.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(y)}for(let m=0;m<=r;m++){let g=n+m*c*i,x=Math.sin(g),L=Math.cos(g);for(let T=0;T<=t.length-1;T++){p.x=t[T].x*x,p.y=t[T].y,p.z=t[T].x*L,o.push(p.x,p.y,p.z),d.x=m/r,d.y=T/(t.length-1),s.push(d.x,d.y);let b=l[3*T+0]*x,R=l[3*T+1],w=l[3*T+0]*L;u.push(b,R,w)}}for(let m=0;m<r;m++)for(let g=0;g<t.length-1;g++){let x=g+m*t.length,L=x,T=x+t.length,b=x+t.length+1,R=x+1;a.push(L,T,R),a.push(b,R,T)}this.setIndex(a),this.setAttribute("position",new mt(o,3)),this.setAttribute("uv",new mt(s,2)),this.setAttribute("normal",new mt(u,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ry(t.points,t.segments,t.phiStart,t.phiLength)}},Lo=class Py extends fr{constructor(t=1,r=1,n=1,i=32,a=1,o=!1,s=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:r,height:n,radialSegments:i,heightSegments:a,openEnded:o,thetaStart:s,thetaLength:l};let u=this;i=Math.floor(i),a=Math.floor(a);let c=[],p=[],d=[],f=[],y=0,_=[],v=n/2,h=0;m(),o===!1&&(t>0&&g(!0),r>0&&g(!1)),this.setIndex(c),this.setAttribute("position",new mt(p,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(f,2));function m(){let x=new N,L=new N,T=0,b=(r-t)/n;for(let R=0;R<=a;R++){let w=[],S=R/a,P=S*(r-t)+t;for(let k=0;k<=i;k++){let V=k/i,W=V*l+s,Y=Math.sin(W),j=Math.cos(W);L.x=P*Y,L.y=-S*n+v,L.z=P*j,p.push(L.x,L.y,L.z),x.set(Y,b,j).normalize(),d.push(x.x,x.y,x.z),f.push(V,1-S),w.push(y++)}_.push(w)}for(let R=0;R<i;R++)for(let w=0;w<a;w++){let S=_[w][R],P=_[w+1][R],k=_[w+1][R+1],V=_[w][R+1];(t>0||w!==0)&&(c.push(S,P,V),T+=3),(r>0||w!==a-1)&&(c.push(P,k,V),T+=3)}u.addGroup(h,T,0),h+=T}function g(x){let L=y,T=new he,b=new N,R=0,w=x===!0?t:r,S=x===!0?1:-1;for(let k=1;k<=i;k++)p.push(0,v*S,0),d.push(0,S,0),f.push(.5,.5),y++;let P=y;for(let k=0;k<=i;k++){let V=k/i*l+s,W=Math.cos(V),Y=Math.sin(V);b.x=w*Y,b.y=v*S,b.z=w*W,p.push(b.x,b.y,b.z),d.push(0,S,0),T.x=W*.5+.5,T.y=Y*.5*S+.5,f.push(T.x,T.y),y++}for(let k=0;k<i;k++){let V=L+k,W=P+k;x===!0?c.push(W,W+1,V):c.push(W+1,W,V),R+=3}u.addGroup(h,R,x===!0?1:2),h+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Py(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},T1=class Ly extends Lo{constructor(t=1,r=1,n=32,i=1,a=!1,o=0,s=Math.PI*2){super(0,t,r,n,i,a,o,s),this.type="ConeGeometry",this.parameters={radius:t,height:r,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s}}static fromJSON(t){return new Ly(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},rC=class Ny extends fr{constructor(t=[],r=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:r,radius:n,detail:i};let a=[],o=[];s(i),u(n),c(),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(a.slice(),3)),this.setAttribute("uv",new mt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function s(m){let g=new N,x=new N,L=new N;for(let T=0;T<r.length;T+=3)f(r[T+0],g),f(r[T+1],x),f(r[T+2],L),l(g,x,L,m)}function l(m,g,x,L){let T=L+1,b=[];for(let R=0;R<=T;R++){b[R]=[];let w=m.clone().lerp(x,R/T),S=g.clone().lerp(x,R/T),P=T-R;for(let k=0;k<=P;k++)k===0&&R===T?b[R][k]=w:b[R][k]=w.clone().lerp(S,k/P)}for(let R=0;R<T;R++)for(let w=0;w<2*(T-R)-1;w++){let S=Math.floor(w/2);w%2===0?(d(b[R][S+1]),d(b[R+1][S]),d(b[R][S])):(d(b[R][S+1]),d(b[R+1][S+1]),d(b[R+1][S]))}}function u(m){let g=new N;for(let x=0;x<a.length;x+=3)g.x=a[x+0],g.y=a[x+1],g.z=a[x+2],g.normalize().multiplyScalar(m),a[x+0]=g.x,a[x+1]=g.y,a[x+2]=g.z}function c(){let m=new N;for(let g=0;g<a.length;g+=3){m.x=a[g+0],m.y=a[g+1],m.z=a[g+2];let x=v(m)/2/Math.PI+.5,L=h(m)/Math.PI+.5;o.push(x,1-L)}y(),p()}function p(){for(let m=0;m<o.length;m+=6){let g=o[m+0],x=o[m+2],L=o[m+4],T=Math.max(g,x,L),b=Math.min(g,x,L);T>.9&&b<.1&&(g<.2&&(o[m+0]+=1),x<.2&&(o[m+2]+=1),L<.2&&(o[m+4]+=1))}}function d(m){a.push(m.x,m.y,m.z)}function f(m,g){let x=m*3;g.x=t[x+0],g.y=t[x+1],g.z=t[x+2]}function y(){let m=new N,g=new N,x=new N,L=new N,T=new he,b=new he,R=new he;for(let w=0,S=0;w<a.length;w+=9,S+=6){m.set(a[w+0],a[w+1],a[w+2]),g.set(a[w+3],a[w+4],a[w+5]),x.set(a[w+6],a[w+7],a[w+8]),T.set(o[S+0],o[S+1]),b.set(o[S+2],o[S+3]),R.set(o[S+4],o[S+5]),L.copy(m).add(g).add(x).divideScalar(3);let P=v(L);_(T,S+0,m,P),_(b,S+2,g,P),_(R,S+4,x,P)}}function _(m,g,x,L){L<0&&m.x===1&&(o[g]=m.x-1),x.x===0&&x.z===0&&(o[g]=L/2/Math.PI+.5)}function v(m){return Math.atan2(m.z,-m.x)}function h(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ny(t.vertices,t.indices,t.radius,t.details)}},xn=class extends xa{constructor(e){super(e),this.uuid=ni(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let r=0,n=this.holes.length;r<n;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){let n=e.holes[t];this.holes.push(new xa().fromJSON(n))}return this}},nC={triangulate:function(e,t,r=2){let n=t&&t.length,i=n?t[0]*r:e.length,a=Iy(e,0,i,r,!0),o=[];if(!a||a.next===a.prev)return o;let s,l,u,c,p,d,f;if(n&&(a=lC(e,t,a,r)),e.length>80*r){s=u=e[0],l=c=e[1];for(let y=r;y<i;y+=r)p=e[y],d=e[y+1],p<s&&(s=p),d<l&&(l=d),p>u&&(u=p),d>c&&(c=d);f=Math.max(u-s,c-l),f=f!==0?32767/f:0}return ml(a,o,r,s,l,f,0),o}};function Iy(e,t,r,n,i){let a,o;if(i===yC(e,t,r,n)>0)for(a=t;a<r;a+=n)o=b1(a,e[a],e[a+1],o);else for(a=r-n;a>=t;a-=n)o=b1(a,e[a],e[a+1],o);return o&&qc(o,o.next)&&(vl(o),o=o.next),o}function Ta(e,t){if(!e)return e;t||(t=e);let r=e,n;do if(n=!1,!r.steiner&&(qc(r,r.next)||kt(r.prev,r,r.next)===0)){if(vl(r),r=t=r.prev,r===r.next)break;n=!0}else r=r.next;while(n||r!==t);return t}function ml(e,t,r,n,i,a,o){if(!e)return;!o&&a&&pC(e,n,i,a);let s=e,l,u;for(;e.prev!==e.next;){if(l=e.prev,u=e.next,a?aC(e,n,i,a):iC(e)){t.push(l.i/r|0),t.push(e.i/r|0),t.push(u.i/r|0),vl(e),e=u.next,s=u.next;continue}if(e=u,e===s){o?o===1?(e=oC(Ta(e),t,r),ml(e,t,r,n,i,a,2)):o===2&&sC(e,t,r,n,i,a):ml(Ta(e),t,r,n,i,a,1);break}}}function iC(e){let t=e.prev,r=e,n=e.next;if(kt(t,r,n)>=0)return!1;let i=t.x,a=r.x,o=n.x,s=t.y,l=r.y,u=n.y,c=i<a?i<o?i:o:a<o?a:o,p=s<l?s<u?s:u:l<u?l:u,d=i>a?i>o?i:o:a>o?a:o,f=s>l?s>u?s:u:l>u?l:u,y=n.next;for(;y!==t;){if(y.x>=c&&y.x<=d&&y.y>=p&&y.y<=f&&Uo(i,s,a,l,o,u,y.x,y.y)&&kt(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function aC(e,t,r,n){let i=e.prev,a=e,o=e.next;if(kt(i,a,o)>=0)return!1;let s=i.x,l=a.x,u=o.x,c=i.y,p=a.y,d=o.y,f=s<l?s<u?s:u:l<u?l:u,y=c<p?c<d?c:d:p<d?p:d,_=s>l?s>u?s:u:l>u?l:u,v=c>p?c>d?c:d:p>d?p:d,h=Kf(f,y,t,r,n),m=Kf(_,v,t,r,n),g=e.prevZ,x=e.nextZ;for(;g&&g.z>=h&&x&&x.z<=m;){if(g.x>=f&&g.x<=_&&g.y>=y&&g.y<=v&&g!==i&&g!==o&&Uo(s,c,l,p,u,d,g.x,g.y)&&kt(g.prev,g,g.next)>=0||(g=g.prevZ,x.x>=f&&x.x<=_&&x.y>=y&&x.y<=v&&x!==i&&x!==o&&Uo(s,c,l,p,u,d,x.x,x.y)&&kt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;g&&g.z>=h;){if(g.x>=f&&g.x<=_&&g.y>=y&&g.y<=v&&g!==i&&g!==o&&Uo(s,c,l,p,u,d,g.x,g.y)&&kt(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;x&&x.z<=m;){if(x.x>=f&&x.x<=_&&x.y>=y&&x.y<=v&&x!==i&&x!==o&&Uo(s,c,l,p,u,d,x.x,x.y)&&kt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function oC(e,t,r){let n=e;do{let i=n.prev,a=n.next.next;!qc(i,a)&&Dy(i,n,n.next,a)&&gl(i,a)&&gl(a,i)&&(t.push(i.i/r|0),t.push(n.i/r|0),t.push(a.i/r|0),vl(n),vl(n.next),n=e=a),n=n.next}while(n!==e);return Ta(n)}function sC(e,t,r,n,i,a){let o=e;do{let s=o.next.next;for(;s!==o.prev;){if(o.i!==s.i&&gC(o,s)){let l=Uy(o,s);o=Ta(o,o.next),l=Ta(l,l.next),ml(o,t,r,n,i,a,0),ml(l,t,r,n,i,a,0);return}s=s.next}o=o.next}while(o!==e)}function lC(e,t,r,n){let i=[],a,o,s,l,u;for(a=0,o=t.length;a<o;a++)s=t[a]*n,l=a<o-1?t[a+1]*n:e.length,u=Iy(e,s,l,n,!1),u===u.next&&(u.steiner=!0),i.push(mC(u));for(i.sort(uC),a=0;a<i.length;a++)r=cC(i[a],r);return r}function uC(e,t){return e.x-t.x}function cC(e,t){let r=hC(e,t);if(!r)return t;let n=Uy(r,e);return Ta(n,n.next),Ta(r,r.next)}function hC(e,t){let r=t,n=-1/0,i,a=e.x,o=e.y;do{if(o<=r.y&&o>=r.next.y&&r.next.y!==r.y){let d=r.x+(o-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(d<=a&&d>n&&(n=d,i=r.x<r.next.x?r:r.next,d===a))return i}r=r.next}while(r!==t);if(!i)return null;let s=i,l=i.x,u=i.y,c=1/0,p;r=i;do a>=r.x&&r.x>=l&&a!==r.x&&Uo(o<u?a:n,o,l,u,o<u?n:a,o,r.x,r.y)&&(p=Math.abs(o-r.y)/(a-r.x),gl(r,e)&&(p<c||p===c&&(r.x>i.x||r.x===i.x&&dC(i,r)))&&(i=r,c=p)),r=r.next;while(r!==s);return i}function dC(e,t){return kt(e.prev,e,t.prev)<0&&kt(t.next,e,e.next)<0}function pC(e,t,r,n){let i=e;do i.z===0&&(i.z=Kf(i.x,i.y,t,r,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,fC(i)}function fC(e){let t,r,n,i,a,o,s,l,u=1;do{for(r=e,e=null,a=null,o=0;r;){for(o++,n=r,s=0,t=0;t<u&&(s++,n=n.nextZ,!!n);t++);for(l=u;s>0||l>0&&n;)s!==0&&(l===0||!n||r.z<=n.z)?(i=r,r=r.nextZ,s--):(i=n,n=n.nextZ,l--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=n}a.nextZ=null,u*=2}while(o>1);return e}function Kf(e,t,r,n,i){return e=(e-r)*i|0,t=(t-n)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function mC(e){let t=e,r=e;do(t.x<r.x||t.x===r.x&&t.y<r.y)&&(r=t),t=t.next;while(t!==e);return r}function Uo(e,t,r,n,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(n-s)>=(r-o)*(t-s)&&(r-o)*(a-s)>=(i-o)*(n-s)}function gC(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!vC(e,t)&&(gl(e,t)&&gl(t,e)&&_C(e,t)&&(kt(e.prev,e,t.prev)||kt(e,t.prev,t))||qc(e,t)&&kt(e.prev,e,e.next)>0&&kt(t.prev,t,t.next)>0)}function kt(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function qc(e,t){return e.x===t.x&&e.y===t.y}function Dy(e,t,r,n){let i=Pc(kt(e,t,r)),a=Pc(kt(e,t,n)),o=Pc(kt(r,n,e)),s=Pc(kt(r,n,t));return!!(i!==a&&o!==s||i===0&&Rc(e,r,t)||a===0&&Rc(e,n,t)||o===0&&Rc(r,e,n)||s===0&&Rc(r,t,n))}function Rc(e,t,r){return t.x<=Math.max(e.x,r.x)&&t.x>=Math.min(e.x,r.x)&&t.y<=Math.max(e.y,r.y)&&t.y>=Math.min(e.y,r.y)}function Pc(e){return e>0?1:e<0?-1:0}function vC(e,t){let r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&Dy(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}function gl(e,t){return kt(e.prev,e,e.next)<0?kt(e,t,e.next)>=0&&kt(e,e.prev,t)>=0:kt(e,t,e.prev)<0||kt(e,e.next,t)<0}function _C(e,t){let r=e,n=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do r.y>a!=r.next.y>a&&r.next.y!==r.y&&i<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next;while(r!==e);return n}function Uy(e,t){let r=new em(e.i,e.x,e.y),n=new em(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,r.next=i,i.prev=r,n.next=r,r.prev=n,a.next=n,n.prev=a,n}function b1(e,t,r,n){let i=new em(e,t,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function vl(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function em(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function yC(e,t,r,n){let i=0;for(let a=t,o=r-n;a<r;a+=n)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var zo=class ky{static area(t){let r=t.length,n=0;for(let i=r-1,a=0;a<r;i=a++)n+=t[i].x*t[a].y-t[a].x*t[i].y;return n*.5}static isClockWise(t){return ky.area(t)<0}static triangulateShape(t,r){let n=[],i=[],a=[];A1(t),C1(n,t);let o=t.length;r.forEach(A1);for(let l=0;l<r.length;l++)i.push(o),o+=r[l].length,C1(n,r[l]);let s=nC.triangulate(n,i);for(let l=0;l<s.length;l+=3)a.push(s.slice(l,l+3));return a}};function A1(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function C1(e,t){for(let r=0;r<t.length;r++)e.push(t[r].x),e.push(t[r].y)}var sl=class Oy extends fr{constructor(t=new xn([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),r={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:r},t=Array.isArray(t)?t:[t];let n=this,i=[],a=[];for(let s=0,l=t.length;s<l;s++){let u=t[s];o(u)}this.setAttribute("position",new mt(i,3)),this.setAttribute("uv",new mt(a,2)),this.computeVertexNormals();function o(s){let l=[],u=r.curveSegments!==void 0?r.curveSegments:12,c=r.steps!==void 0?r.steps:1,p=r.depth!==void 0?r.depth:1,d=r.bevelEnabled!==void 0?r.bevelEnabled:!0,f=r.bevelThickness!==void 0?r.bevelThickness:.2,y=r.bevelSize!==void 0?r.bevelSize:f-.1,_=r.bevelOffset!==void 0?r.bevelOffset:0,v=r.bevelSegments!==void 0?r.bevelSegments:3,h=r.extrudePath,m=r.UVGenerator!==void 0?r.UVGenerator:xC,g,x=!1,L,T,b,R;h&&(g=h.getSpacedPoints(c),x=!0,d=!1,L=h.computeFrenetFrames(c,!1),T=new N,b=new N,R=new N),d||(v=0,f=0,y=0,_=0);let w=s.extractPoints(u),S=w.shape,P=w.holes;if(!zo.isClockWise(S)){S=S.reverse();for(let ee=0,me=P.length;ee<me;ee++){let A=P[ee];zo.isClockWise(A)&&(P[ee]=A.reverse())}}let k=zo.triangulateShape(S,P),V=S;for(let ee=0,me=P.length;ee<me;ee++){let A=P[ee];S=S.concat(A)}function W(ee,me,A){return me||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(me,A)}let Y=S.length,j=k.length;function ie(ee,me,A){let be,ae,Ae,oe=ee.x-me.x,je=ee.y-me.y,we=A.x-ee.x,Ne=A.y-ee.y,C=oe*oe+je*je,M=oe*Ne-je*we;if(Math.abs(M)>Number.EPSILON){let z=Math.sqrt(C),K=Math.sqrt(we*we+Ne*Ne),re=me.x-je/z,q=me.y+oe/z,Ue=A.x-Ne/K,_e=A.y+we/K,Me=((Ue-re)*Ne-(_e-q)*we)/(oe*Ne-je*we);be=re+oe*Me-ee.x,ae=q+je*Me-ee.y;let $e=be*be+ae*ae;if($e<=2)return new he(be,ae);Ae=Math.sqrt($e/2)}else{let z=!1;oe>Number.EPSILON?we>Number.EPSILON&&(z=!0):oe<-Number.EPSILON?we<-Number.EPSILON&&(z=!0):Math.sign(je)===Math.sign(Ne)&&(z=!0),z?(be=-je,ae=oe,Ae=Math.sqrt(C)):(be=oe,ae=je,Ae=Math.sqrt(C/2))}return new he(be/Ae,ae/Ae)}let $=[];for(let ee=0,me=V.length,A=me-1,be=ee+1;ee<me;ee++,A++,be++)A===me&&(A=0),be===me&&(be=0),$[ee]=ie(V[ee],V[A],V[be]);let fe=[],ye,Xe=$.concat();for(let ee=0,me=P.length;ee<me;ee++){let A=P[ee];ye=[];for(let be=0,ae=A.length,Ae=ae-1,oe=be+1;be<ae;be++,Ae++,oe++)Ae===ae&&(Ae=0),oe===ae&&(oe=0),ye[be]=ie(A[be],A[Ae],A[oe]);fe.push(ye),Xe=Xe.concat(ye)}for(let ee=0;ee<v;ee++){let me=ee/v,A=f*Math.cos(me*Math.PI/2),be=y*Math.sin(me*Math.PI/2)+_;for(let ae=0,Ae=V.length;ae<Ae;ae++){let oe=W(V[ae],$[ae],be);Le(oe.x,oe.y,-A)}for(let ae=0,Ae=P.length;ae<Ae;ae++){let oe=P[ae];ye=fe[ae];for(let je=0,we=oe.length;je<we;je++){let Ne=W(oe[je],ye[je],be);Le(Ne.x,Ne.y,-A)}}}let Je=y+_;for(let ee=0;ee<Y;ee++){let me=d?W(S[ee],Xe[ee],Je):S[ee];x?(b.copy(L.normals[0]).multiplyScalar(me.x),T.copy(L.binormals[0]).multiplyScalar(me.y),R.copy(g[0]).add(b).add(T),Le(R.x,R.y,R.z)):Le(me.x,me.y,0)}for(let ee=1;ee<=c;ee++)for(let me=0;me<Y;me++){let A=d?W(S[me],Xe[me],Je):S[me];x?(b.copy(L.normals[ee]).multiplyScalar(A.x),T.copy(L.binormals[ee]).multiplyScalar(A.y),R.copy(g[ee]).add(b).add(T),Le(R.x,R.y,R.z)):Le(A.x,A.y,p/c*ee)}for(let ee=v-1;ee>=0;ee--){let me=ee/v,A=f*Math.cos(me*Math.PI/2),be=y*Math.sin(me*Math.PI/2)+_;for(let ae=0,Ae=V.length;ae<Ae;ae++){let oe=W(V[ae],$[ae],be);Le(oe.x,oe.y,p+A)}for(let ae=0,Ae=P.length;ae<Ae;ae++){let oe=P[ae];ye=fe[ae];for(let je=0,we=oe.length;je<we;je++){let Ne=W(oe[je],ye[je],be);x?Le(Ne.x,Ne.y+g[c-1].y,g[c-1].x+A):Le(Ne.x,Ne.y,p+A)}}}Z(),de();function Z(){let ee=i.length/3;if(d){let me=0,A=Y*me;for(let be=0;be<j;be++){let ae=k[be];ve(ae[2]+A,ae[1]+A,ae[0]+A)}me=c+v*2,A=Y*me;for(let be=0;be<j;be++){let ae=k[be];ve(ae[0]+A,ae[1]+A,ae[2]+A)}}else{for(let me=0;me<j;me++){let A=k[me];ve(A[2],A[1],A[0])}for(let me=0;me<j;me++){let A=k[me];ve(A[0]+Y*c,A[1]+Y*c,A[2]+Y*c)}}n.addGroup(ee,i.length/3-ee,0)}function de(){let ee=i.length/3,me=0;Ie(V,me),me+=V.length;for(let A=0,be=P.length;A<be;A++){let ae=P[A];Ie(ae,me),me+=ae.length}n.addGroup(ee,i.length/3-ee,1)}function Ie(ee,me){let A=ee.length;for(;--A>=0;){let be=A,ae=A-1;ae<0&&(ae=ee.length-1);for(let Ae=0,oe=c+v*2;Ae<oe;Ae++){let je=Y*Ae,we=Y*(Ae+1),Ne=me+be+je,C=me+ae+je,M=me+ae+we,z=me+be+we;Be(Ne,C,M,z)}}}function Le(ee,me,A){l.push(ee),l.push(me),l.push(A)}function ve(ee,me,A){Ze(ee),Ze(me),Ze(A);let be=i.length/3,ae=m.generateTopUV(n,i,be-3,be-2,be-1);Ge(ae[0]),Ge(ae[1]),Ge(ae[2])}function Be(ee,me,A,be){Ze(ee),Ze(me),Ze(be),Ze(me),Ze(A),Ze(be);let ae=i.length/3,Ae=m.generateSideWallUV(n,i,ae-6,ae-3,ae-2,ae-1);Ge(Ae[0]),Ge(Ae[1]),Ge(Ae[3]),Ge(Ae[1]),Ge(Ae[2]),Ge(Ae[3])}function Ze(ee){i.push(l[ee*3+0]),i.push(l[ee*3+1]),i.push(l[ee*3+2])}function Ge(ee){a.push(ee.x),a.push(ee.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),r=this.parameters.shapes,n=this.parameters.options;return SC(r,n,t)}static fromJSON(t,r){let n=[];for(let a=0,o=t.shapes.length;a<o;a++){let s=r[t.shapes[a]];n.push(s)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Qf[i.type]().fromJSON(i)),new Oy(n,t.options)}},xC={generateTopUV:function(e,t,r,n,i){let a=t[r*3],o=t[r*3+1],s=t[n*3],l=t[n*3+1],u=t[i*3],c=t[i*3+1];return[new he(a,o),new he(s,l),new he(u,c)]},generateSideWallUV:function(e,t,r,n,i,a){let o=t[r*3],s=t[r*3+1],l=t[r*3+2],u=t[n*3],c=t[n*3+1],p=t[n*3+2],d=t[i*3],f=t[i*3+1],y=t[i*3+2],_=t[a*3],v=t[a*3+1],h=t[a*3+2];return Math.abs(s-c)<Math.abs(o-u)?[new he(o,1-l),new he(u,1-p),new he(d,1-y),new he(_,1-h)]:[new he(s,1-l),new he(c,1-p),new he(f,1-y),new he(v,1-h)]}};function SC(e,t,r){if(r.shapes=[],Array.isArray(e))for(let n=0,i=e.length;n<i;n++){let a=e[n];r.shapes.push(a.uuid)}else r.shapes.push(e.uuid);return r.options=Object.assign({},t),t.extrudePath!==void 0&&(r.options.extrudePath=t.extrudePath.toJSON()),r}var MC=class Fy extends rC{constructor(t=1,r=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,a,t,r),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:r}}static fromJSON(t){return new Fy(t.radius,t.detail)}},rf=class zy extends fr{constructor(t=new xn([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),r=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:r};let n=[],i=[],a=[],o=[],s=0,l=0;if(Array.isArray(t)===!1)u(t);else for(let c=0;c<t.length;c++)u(t[c]),this.addGroup(s,l,c),s+=l,l=0;this.setIndex(n),this.setAttribute("position",new mt(i,3)),this.setAttribute("normal",new mt(a,3)),this.setAttribute("uv",new mt(o,2));function u(c){let p=i.length/3,d=c.extractPoints(r),f=d.shape,y=d.holes;zo.isClockWise(f)===!1&&(f=f.reverse());for(let v=0,h=y.length;v<h;v++){let m=y[v];zo.isClockWise(m)===!0&&(y[v]=m.reverse())}let _=zo.triangulateShape(f,y);for(let v=0,h=y.length;v<h;v++){let m=y[v];f=f.concat(m)}for(let v=0,h=f.length;v<h;v++){let m=f[v];i.push(m.x,m.y,0),a.push(0,0,1),o.push(m.x,m.y)}for(let v=0,h=_.length;v<h;v++){let m=_[v],g=m[0]+p,x=m[1]+p,L=m[2]+p;n.push(g,x,L),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),r=this.parameters.shapes;return wC(r,t)}static fromJSON(t,r){let n=[];for(let i=0,a=t.shapes.length;i<a;i++){let o=r[t.shapes[i]];n.push(o)}return new zy(n,t.curveSegments)}};function wC(e,t){if(t.shapes=[],Array.isArray(e))for(let r=0,n=e.length;r<n;r++){let i=e[r];t.shapes.push(i.uuid)}else t.shapes.push(e.uuid);return t}var Co=class By extends fr{constructor(t=1,r=32,n=16,i=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:r,heightSegments:n,phiStart:i,phiLength:a,thetaStart:o,thetaLength:s},r=Math.max(3,Math.floor(r)),n=Math.max(2,Math.floor(n));let l=Math.min(o+s,Math.PI),u=0,c=[],p=new N,d=new N,f=[],y=[],_=[],v=[];for(let h=0;h<=n;h++){let m=[],g=h/n,x=0;h===0&&o===0?x=.5/r:h===n&&l===Math.PI&&(x=-.5/r);for(let L=0;L<=r;L++){let T=L/r;p.x=-t*Math.cos(i+T*a)*Math.sin(o+g*s),p.y=t*Math.cos(o+g*s),p.z=t*Math.sin(i+T*a)*Math.sin(o+g*s),y.push(p.x,p.y,p.z),d.copy(p).normalize(),_.push(d.x,d.y,d.z),v.push(T+x,1-g),m.push(u++)}c.push(m)}for(let h=0;h<n;h++)for(let m=0;m<r;m++){let g=c[h][m+1],x=c[h][m],L=c[h+1][m],T=c[h+1][m+1];(h!==0||o>0)&&f.push(g,x,T),(h!==n-1||l<Math.PI)&&f.push(x,L,T)}this.setIndex(f),this.setAttribute("position",new mt(y,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new By(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},EC=class Vy extends fr{constructor(t=1,r=.4,n=12,i=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:r,radialSegments:n,tubularSegments:i,arc:a},n=Math.floor(n),i=Math.floor(i);let o=[],s=[],l=[],u=[],c=new N,p=new N,d=new N;for(let f=0;f<=n;f++)for(let y=0;y<=i;y++){let _=y/i*a,v=f/n*Math.PI*2;p.x=(t+r*Math.cos(v))*Math.cos(_),p.y=(t+r*Math.cos(v))*Math.sin(_),p.z=r*Math.sin(v),s.push(p.x,p.y,p.z),c.x=t*Math.cos(_),c.y=t*Math.sin(_),d.subVectors(p,c).normalize(),l.push(d.x,d.y,d.z),u.push(y/i),u.push(f/n)}for(let f=1;f<=n;f++)for(let y=1;y<=i;y++){let _=(i+1)*f+y-1,v=(i+1)*(f-1)+y-1,h=(i+1)*(f-1)+y,m=(i+1)*f+y;o.push(_,v,m),o.push(v,h,m)}this.setIndex(o),this.setAttribute("position",new mt(s,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vy(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},vn=class extends Aa{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=X1,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Lc(e,t,r){return!e||!r&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function TC(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Zc=class{constructor(e,t,r,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(r),this.sampleValues=t,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,r=this._cachedIndex,n=t[r],i=t[r-1];e:{t:{let a;r:{n:if(!(e<n)){for(let o=r+2;;){if(n===void 0){if(e<i)break n;return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===o)break;if(i=n,n=t[++r],e<n)break t}a=t.length;break r}if(!(e>=i)){let o=t[1];e<o&&(r=2,i=o);for(let s=r-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===s)break;if(n=i,i=t[--r-1],e>=i)break t}a=r,r=0;break r}break e}for(;r<a;){let o=r+a>>>1;e<t[o]?a=o:r=o+1}if(n=t[r],i=t[r-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,i,n)}return this.interpolate_(r,i,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,r=this.sampleValues,n=this.valueSize,i=e*n;for(let a=0;a!==n;++a)t[a]=r[i+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},bC=class extends Zc{constructor(e,t,r,n){super(e,t,r,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:y_,endingEnd:y_}}intervalChanged_(e,t,r){let n=this.parameterPositions,i=e-2,a=e+1,o=n[i],s=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case x_:i=e,o=2*t-r;break;case S_:i=n.length-2,o=t+n[i]-n[i+1];break;default:i=e,o=r}if(s===void 0)switch(this.getSettings_().endingEnd){case x_:a=e,s=2*r-t;break;case S_:a=1,s=r+n[1]-n[0];break;default:a=e-1,s=t}let l=(r-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(s-r),this._offsetPrev=i*u,this._offsetNext=a*u}interpolate_(e,t,r,n){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,l=s-o,u=this._offsetPrev,c=this._offsetNext,p=this._weightPrev,d=this._weightNext,f=(r-t)/(n-t),y=f*f,_=y*f,v=-p*_+2*p*y-p*f,h=(1+p)*_+(-1.5-2*p)*y+(-.5+p)*f+1,m=(-1-d)*_+(1.5+d)*y+.5*f,g=d*_-d*y;for(let x=0;x!==o;++x)i[x]=v*a[u+x]+h*a[l+x]+m*a[s+x]+g*a[c+x];return i}},AC=class extends Zc{constructor(e,t,r,n){super(e,t,r,n)}interpolate_(e,t,r,n){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,l=s-o,u=(r-t)/(n-t),c=1-u;for(let p=0;p!==o;++p)i[p]=a[l+p]*c+a[s+p]*u;return i}},CC=class extends Zc{constructor(e,t,r,n){super(e,t,r,n)}interpolate_(e){return this.copySampleValue_(e-1)}},oi=class{constructor(e,t,r,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lc(t,this.TimeBufferType),this.values=Lc(r,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,r;if(t.toJSON!==this.toJSON)r=t.toJSON(e);else{r={name:e.name,times:Lc(e.times,Array),values:Lc(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(r.interpolation=n)}return r.type=e.ValueTypeName,r}InterpolantFactoryMethodDiscrete(e){return new CC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new AC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bC(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Gc:t=this.InterpolantFactoryMethodDiscrete;break;case Xf:t=this.InterpolantFactoryMethodLinear;break;case Sp:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return console.warn("THREE.KeyframeTrack:",r),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gc;case this.InterpolantFactoryMethodLinear:return Xf;case this.InterpolantFactoryMethodSmooth:return Sp}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let r=0,n=t.length;r!==n;++r)t[r]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let r=0,n=t.length;r!==n;++r)t[r]*=e}return this}trim(e,t){let r=this.times,n=r.length,i=0,a=n-1;for(;i!==n&&r[i]<e;)++i;for(;a!==-1&&r[a]>t;)--a;if(++a,i!==0||a!==n){i>=a&&(a=Math.max(a,1),i=a-1);let o=this.getValueSize();this.times=r.slice(i,a),this.values=this.values.slice(i*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let r=this.times,n=this.values,i=r.length;i===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==i;o++){let s=r[o];if(typeof s=="number"&&isNaN(s)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,s),e=!1;break}if(a!==null&&a>s){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,s,a),e=!1;break}a=s}if(n!==void 0&&TC(n))for(let o=0,s=n.length;o!==s;++o){let l=n[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),r=this.getValueSize(),n=this.getInterpolation()===Sp,i=e.length-1,a=1;for(let o=1;o<i;++o){let s=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(n)s=!0;else{let c=o*r,p=c-r,d=c+r;for(let f=0;f!==r;++f){let y=t[c+f];if(y!==t[p+f]||y!==t[d+f]){s=!0;break}}}if(s){if(o!==a){e[a]=e[o];let c=o*r,p=a*r;for(let d=0;d!==r;++d)t[p+d]=t[c+d]}++a}}if(i>0){e[a]=e[i];for(let o=i*r,s=a*r,l=0;l!==r;++l)t[s+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*r)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),r=this.constructor,n=new r(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=Xf;var yl=class extends oi{constructor(e,t,r){super(e,t,r)}};yl.prototype.ValueTypeName="bool";yl.prototype.ValueBufferType=Array;yl.prototype.DefaultInterpolation=Gc;yl.prototype.InterpolantFactoryMethodLinear=void 0;yl.prototype.InterpolantFactoryMethodSmooth=void 0;var RC=class extends oi{};RC.prototype.ValueTypeName="color";var PC=class extends oi{};PC.prototype.ValueTypeName="number";var LC=class extends Zc{constructor(e,t,r,n){super(e,t,r,n)}interpolate_(e,t,r,n){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(r-t)/(n-t),l=e*o;for(let u=l+o;l!==u;l+=4)Yo.slerpFlat(i,0,a,l-o,a,l,s);return i}},Hy=class extends oi{InterpolantFactoryMethodLinear(e){return new LC(this.times,this.values,this.getValueSize(),e)}};Hy.prototype.ValueTypeName="quaternion";Hy.prototype.InterpolantFactoryMethodSmooth=void 0;var xl=class extends oi{constructor(e,t,r){super(e,t,r)}};xl.prototype.ValueTypeName="string";xl.prototype.ValueBufferType=Array;xl.prototype.DefaultInterpolation=Gc;xl.prototype.InterpolantFactoryMethodLinear=void 0;xl.prototype.InterpolantFactoryMethodSmooth=void 0;var NC=class extends oi{};NC.prototype.ValueTypeName="vector";var IC=class{constructor(e,t,r){let n=this,i=!1,a=0,o=0,s,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(u){o++,i===!1&&n.onStart!==void 0&&n.onStart(u,a,o),i=!0},this.itemEnd=function(u){a++,n.onProgress!==void 0&&n.onProgress(u,a,o),a===o&&(i=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return s?s(u):u},this.setURLModifier=function(u){return s=u,this},this.addHandler=function(u,c){return l.push(u,c),this},this.removeHandler=function(u){let c=l.indexOf(u);return c!==-1&&l.splice(c,2),this},this.getHandler=function(u){for(let c=0,p=l.length;c<p;c+=2){let d=l[c],f=l[c+1];if(d.global&&(d.lastIndex=0),d.test(u))return f}return null}}},DC=new IC,UC=class{constructor(e){this.manager=e!==void 0?e:DC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let r=this;return new Promise(function(n,i){r.load(e,n,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};UC.DEFAULT_MATERIAL_NAME="__DEFAULT";var pm=class extends ar{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},kC=class extends pm{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ar.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},nf=new St,R1=new N,P1=new N,Gy=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new um,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,r=this.matrix;R1.setFromMatrixPosition(e.matrixWorld),t.position.copy(R1),P1.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(P1),t.updateMatrixWorld(),nf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(nf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},L1=new St,ll=new N,af=new N,OC=class extends Gy{constructor(){super(new Gr(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){let r=this.camera,n=this.matrix,i=e.distance||r.far;i!==r.far&&(r.far=i,r.updateProjectionMatrix()),ll.setFromMatrixPosition(e.matrixWorld),r.position.copy(ll),af.copy(r.position),af.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(af),r.updateMatrixWorld(),n.makeTranslation(-ll.x,-ll.y,-ll.z),L1.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(L1)}},Nc=class extends pm{constructor(e,t,r=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=n,this.shadow=new OC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},FC=class extends Gy{constructor(){super(new py(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zC=class extends pm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ar.DEFAULT_UP),this.updateMatrix(),this.target=new ar,this.shadow=new FC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},fm="\\[\\]\\.:\\/",BC=new RegExp("["+fm+"]","g"),mm="[^"+fm+"]",VC="[^"+fm.replace("\\.","")+"]",HC=/((?:WC+[\/:])*)/.source.replace("WC",mm),GC=/(WCOD+)?/.source.replace("WCOD",VC),WC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mm),XC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mm),jC=new RegExp("^"+HC+GC+WC+XC+"$"),$C=["material","materials","bones","map"],YC=class{constructor(e,t,r){let n=r||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let r=this._targetGroup.nCachedObjects_,n=this._bindings[r];n!==void 0&&n.getValue(e,t)}setValue(e,t){let r=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=r.length;n!==i;++n)r[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].unbind()}},Ft=class No{constructor(t,r,n){this.path=r,this.parsedPath=n||No.parseTrackName(r),this.node=No.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,r,n){return t&&t.isAnimationObjectGroup?new No.Composite(t,r,n):new No(t,r,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(BC,"")}static parseTrackName(t){let r=jC.exec(t);if(r===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:r[2],objectName:r[3],objectIndex:r[4],propertyName:r[5],propertyIndex:r[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let a=n.nodeName.substring(i+1);$C.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,r){if(r===void 0||r===""||r==="."||r===-1||r===t.name||r===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(r);if(n!==void 0)return n}if(t.children){let n=function(a){for(let o=0;o<a.length;o++){let s=a[o];if(s.name===r||s.uuid===r)return s;let l=n(s.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,r){t[r]=this.targetObject[this.propertyName]}_getValue_array(t,r){let n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)t[r++]=n[i]}_getValue_arrayElement(t,r){t[r]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,r){this.resolvedProperty.toArray(t,r)}_setValue_direct(t,r){this.targetObject[this.propertyName]=t[r]}_setValue_direct_setNeedsUpdate(t,r){this.targetObject[this.propertyName]=t[r],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,r){this.targetObject[this.propertyName]=t[r],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,r){let n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=t[r++]}_setValue_array_setNeedsUpdate(t,r){let n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=t[r++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,r){let n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=t[r++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,r){this.resolvedProperty[this.propertyIndex]=t[r]}_setValue_arrayElement_setNeedsUpdate(t,r){this.resolvedProperty[this.propertyIndex]=t[r],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,r){this.resolvedProperty[this.propertyIndex]=t[r],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,r){this.resolvedProperty.fromArray(t,r)}_setValue_fromArray_setNeedsUpdate(t,r){this.resolvedProperty.fromArray(t,r),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,r){this.resolvedProperty.fromArray(t,r),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,r){this.bind(),this.getValue(t,r)}_setValue_unbound(t,r){this.bind(),this.setValue(t,r)}bind(){let t=this.node,r=this.parsedPath,n=r.objectName,i=r.propertyName,a=r.propertyIndex;if(t||(t=No.findNode(this.rootNode,r.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=r.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===u){u=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let o=t[i];if(o===void 0){let u=r.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?s=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=YC;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var b3=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var qC=14921803,hl=(e,t=0,r=1)=>Math.min(r,Math.max(t,e)),tm=e=>e*e*(3-2*e),wr=(e,t,r)=>tm(hl((e-t)/(r-t)));function Jo(e,t,r,n,i=!0){let a=document.createElement("canvas");a.width=e,a.height=t;let o=a.getContext("2d");r(o,e,t);let s=new HA(a);return i&&(s.colorSpace=Hr),s.wrapS=s.wrapT=Hc,n&&s.repeat.set(n[0],n[1]),s.anisotropy=4,s}function ZC(e="rgba(255,240,190,1)",t="rgba(255,190,90,.45)"){return Jo(128,128,r=>{let n=r.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,e),n.addColorStop(.25,t),n.addColorStop(1,"rgba(255,150,40,0)"),r.fillStyle=n,r.fillRect(0,0,128,128)})}function JC(){return Jo(256,256,(e,t,r)=>{e.fillStyle="#6a2434",e.fillRect(0,0,t,r);for(let n=0;n<1800;n++)e.fillStyle=`rgba(${Math.random()<.5?"255,200,150":"30,0,10"},${Math.random()*.07})`,e.fillRect(Math.random()*t,Math.random()*r,2+Math.random()*6,2+Math.random()*6);e.strokeStyle="rgba(20,0,8,.55)",e.lineWidth=3;for(let n=0;n<=r;n+=64)e.beginPath(),e.moveTo(0,n),e.lineTo(t,n),e.stroke();for(let n=0;n<4;n++)for(let i=n%2*64;i<=t;i+=128)e.beginPath(),e.moveTo(i,n*64),e.lineTo(i,n*64+64),e.stroke();e.strokeStyle="rgba(227,176,75,.22)",e.lineWidth=1.5;for(let n=0;n<4;n++)for(let i=0;i<2;i++)e.strokeRect(i*128+8+n%2*64%128*0,n*64+8,112,48)})}function QC(){return Jo(256,256,(e,t,r)=>{e.fillStyle="#2a1018",e.fillRect(0,0,t,r);for(let n=0;n<2200;n++)e.fillStyle=`rgba(255,190,140,${Math.random()*.05})`,e.fillRect(Math.random()*t,Math.random()*r,3,3);e.strokeStyle="rgba(227,176,75,.45)",e.lineWidth=2,e.strokeRect(2,2,t-4,r-4),e.strokeStyle="rgba(227,176,75,.2)",e.lineWidth=1.5,e.beginPath(),e.moveTo(t/2,24),e.lineTo(t-24,r/2),e.lineTo(t/2,r-24),e.lineTo(24,r/2),e.closePath(),e.stroke(),e.beginPath(),e.arc(t/2,r/2,30,0,7),e.stroke()})}function KC(){return Jo(256,256,(e,t,r)=>{e.fillStyle="#7a0f22",e.fillRect(0,0,t,r),e.fillStyle="#e3b04b",e.fillRect(0,0,14,r),e.fillRect(t-14,0,14,r),e.fillStyle="#4a0612",e.fillRect(14,0,10,r),e.fillRect(t-24,0,10,r),e.strokeStyle="#e3b04b",e.lineWidth=2,e.save(),e.translate(t/2,r/2);for(let n=0;n<12;n++)e.rotate(Math.PI/6),e.beginPath(),e.ellipse(0,-44,14,34,0,0,7),e.stroke();e.beginPath(),e.arc(0,0,14,0,7),e.fillStyle="#f4c75a",e.fill(),e.restore()})}function e3(){return Jo(256,512,(e,t,r)=>{let n=e.createLinearGradient(0,0,t,0);n.addColorStop(0,"#4a0a16"),n.addColorStop(.5,"#6d1424"),n.addColorStop(1,"#4a0a16"),e.fillStyle=n,e.fillRect(0,0,t,r),e.strokeStyle="#e3b04b",e.lineWidth=6,e.strokeRect(8,8,t-16,r-16),e.lineWidth=2,e.strokeRect(22,22,t-44,r-44);for(let i=0;i<4;i++)for(let a=0;a<2;a++){let o=34+a*100,s=40+i*118;e.strokeStyle="rgba(227,176,75,.9)",e.lineWidth=2,e.strokeRect(o,s,88,104),e.beginPath(),e.moveTo(o+44,s+12),e.lineTo(o+76,s+52),e.lineTo(o+44,s+92),e.lineTo(o+12,s+52),e.closePath(),e.stroke(),e.fillStyle="#f4c75a",e.beginPath(),e.arc(o+44,s+52,7,0,7),e.fill();for(let[l,u]of[[6,6],[82,6],[6,98],[82,98]])e.beginPath(),e.arc(o+l,s+u,3,0,7),e.fill()}})}function t3(){return Jo(128,128,(e,t,r)=>{e.fillStyle="#1a0408",e.fillRect(0,0,t,r),e.strokeStyle="#ffd98a",e.lineWidth=5;for(let n=0;n<=t;n+=64)for(let i=0;i<=r;i+=64)e.beginPath(),e.arc(n,i,32,0,7),e.stroke(),e.beginPath(),e.arc(n+32,i+32,32,0,7),e.stroke()},[6,3])}function _n(e,t,r,n=new xn,i=!1){let a=e/2;return n.moveTo(-a,0),n.lineTo(-a,t),n.quadraticCurveTo(-a,t+r*.78,0,t+r),n.quadraticCurveTo(a,t+r*.78,a,t),n.lineTo(a,0),n.lineTo(-a,0),n}function Oi(e,t=20){return new tC(e.map(([r,n])=>new he(r,n)),t)}function of(e,t,r=24){let n=[];for(let i=0;i<=14;i++){let a=i/14*Math.PI/2,o=Math.sin(a);n.push([e*Math.cos(a)*(1+.12*Math.sin(a*2)),t*o])}return n.push([e*.12,t*1.05]),Oi(n.reverse(),r)}function Wy(e,t,r={}){let n=Math.min(window.innerWidth,screen.width||999)<820,i=new OA({canvas:e,antialias:!n,alpha:!1,powerPreference:"high-performance"});i.setPixelRatio(Math.min(window.devicePixelRatio||1,n?1.5:2)),i.toneMapping=D1,i.toneMappingExposure=1.15;let a=new f1;a.background=new et(1180684),a.fog=new FA(1771283,.0105);let o=new Gr(55,1,.3,700),s=[],l=B=>(s.push(B),B),u=l(new Un({side:Tr,depthWrite:!1,fog:!1,uniforms:{top:{value:new et(656416)},mid:{value:new et(4853808)},hor:{value:new et(15764026)}},vertexShader:"varying vec3 v; void main(){ v=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"varying vec3 v; uniform vec3 top,mid,hor; void main(){ float h=clamp(v.y,0.,1.); vec3 c=mix(hor,mid,smoothstep(0.,.22,h)); c=mix(c,top,smoothstep(.15,.7,h)); gl_FragColor=vec4(c,1.); }"})),c=new Fe(l(new Co(400,24,16)),u);a.add(c);{let B=new qf(i),F=new f1;F.add(new Fe(new Co(50,16,12),u));let Q=new Fe(new Co(8,8,8),new ei({color:16760944}));Q.position.set(0,10,40),F.add(Q);let ge=Q.clone();ge.position.set(0,12,-40),F.add(ge),a.environment=B.fromScene(F,.04).texture,a.environmentIntensity=.55,B.dispose()}{let B=new Float32Array(1260);for(let Q=0;Q<420;Q++){let ge=Math.random()*Math.PI*2,Se=Math.random()*1.2+.18,Te=380;B[Q*3]=Math.cos(ge)*Math.cos(Se)*Te,B[Q*3+1]=Math.sin(Se)*Te,B[Q*3+2]=Math.sin(ge)*Math.cos(Se)*Te}let F=l(new fr);F.setAttribute("position",new br(B,3)),a.add(new M1(F,l(new wy({color:16773583,size:1.7,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.85,depthWrite:!1}))))}let p=l(ZC()),d=(B,F=1)=>l(new Sy({map:p,color:B,blending:Vc,depthWrite:!1,transparent:!0,opacity:F,fog:!1})),f=new il(d(16771522,.9));f.scale.set(40,40,1),f.position.set(-75,78,-240),a.add(f);let y=new Fe(l(new Co(7,20,14)),l(new ei({color:16774366,fog:!1})));y.position.copy(f.position),a.add(y);let _=l(JC()),v=l(new vn({map:_,roughness:.82,metalness:.02,color:16766664})),h=l(new vn({color:13146744,roughness:.75,metalness:.02})),m=l(new vn({color:qC,roughness:.32,metalness:.95})),g=l(new vn({color:12158256,roughness:.5,metalness:.85})),x=l(new vn({color:15851456,roughness:.6,metalness:.05})),L=l(new ei({color:16761960,fog:!1})),T=l(new ei({color:16762976,fog:!1})),b=l(QC());b.repeat.set(36,36);let R=new Fe(l(new Fi(180,180)),l(new vn({map:b,roughness:.42,metalness:.25,color:16777215})));R.rotation.x=-Math.PI/2,R.position.set(0,0,-20),a.add(R);let w=l(KC());w.repeat.set(1,26);let S=new Fe(l(new Fi(4.6,80)),l(new vn({map:w,roughness:.9})));S.rotation.x=-Math.PI/2,S.position.set(0,.02,2),a.add(S);let P=6.4,k=7.2,V=2.8,W=26,Y=13.5,j=2.6,ie=new xn;ie.moveTo(-W/2,0),ie.lineTo(W/2,0),ie.lineTo(W/2,Y),ie.lineTo(-W/2,Y),ie.lineTo(-W/2,0);let $=_n(P,k,V,new xa);ie.holes.push($);let fe=l(new sl(ie,{depth:j,bevelEnabled:!1,curveSegments:14}));{let B=fe.attributes.uv;for(let F=0;F<B.count;F++)B.setXY(F,B.getX(F)/5,B.getY(F)/5)}let ye=new Fe(fe,v);ye.position.z=-j,a.add(ye);{let B=_n(P+1.1,k,V+.55,new xn);B.holes.push(_n(P,k,V,new xa));let F=l(new sl(B,{depth:.5,bevelEnabled:!0,bevelSize:.06,bevelThickness:.06,bevelSegments:2,curveSegments:14})),Q=new Fe(F,m);Q.position.z=.02,a.add(Q);let ge=_n(P+3.2,k-.2,V+1.3,new xn);ge.holes.push(_n(P+2.5,k-.2,V+1.1,new xa));let Se=l(new sl(ge,{depth:.35,bevelEnabled:!1,curveSegments:14})),Te=new Fe(Se,g);Te.position.z=.02,a.add(Te)}let Xe=l((()=>{let B=_n(1.7,2.4,1,new xn);return new rf(B,10)})()),Je=l((()=>{let B=_n(2.1,2.5,1.1,new xn);return B.holes.push(_n(1.7,2.4,1,new xa)),new sl(B,{depth:.3,bevelEnabled:!1,curveSegments:8})})()),Z=l(t3()),de=l(new ei({map:Z,color:16756810,fog:!1}));for(let B of[-1,1])for(let[F,Q]of[[6.2,1.8],[9.4,1.8],[11.4-0,8.2],[7,8.2]]){if(Q>5&&F>11)continue;let ge=new Fe(Xe,de);ge.position.set(B*F,Q,.03),a.add(ge);let Se=new Fe(Je,g);Se.position.set(B*F,Q-0,.02),a.add(Se)}{let B=l(new T1(.55,1.1,4)),F=new Qp(B,h,26),Q=new ar;for(let Te=0;Te<26;Te++)Q.position.set(-W/2+.5+Te*(W-1)/25,Y+.5,-.6),Q.rotation.y=Math.PI/4,Q.updateMatrix(),F.setMatrixAt(Te,Q.matrix);a.add(F);let ge=new Fe(l(new yn(W+.6,.35,j+.6)),m);ge.position.set(0,Y,-j/2),a.add(ge);let Se=ge.clone();Se.position.y=Y-2.2,Se.scale.set(1,.55,1),a.add(Se)}let Ie=l(of(1.35,1.6));function Le(B,F,Q,ge=1){let Se=new Do;Se.position.set(B,F,Q),Se.scale.setScalar(ge);let Te=new Fe(l(new yn(3.4,.35,3.4)),h);Se.add(Te);let it=l(Oi([[.22,0],[.14,.15],[.12,1.5],[.2,1.7],[.2,1.8]],10));for(let Et of[-1.3,1.3])for(let gt of[-1.3,1.3]){let rn=new Fe(it,x);rn.position.set(Et,.2,gt),Se.add(rn)}let qe=new Fe(l(new yn(3.5,.25,3.5)),m);qe.position.y=2.05,Se.add(qe);let lt=new Fe(Ie,m);lt.position.y=2.15,lt.scale.set(1.25,1.15,1.25),Se.add(lt);let wt=new Fe(l(Oi([[.01,0],[.12,.1],[.05,.35],[.1,.5],[.01,.9]],8)),m);return wt.position.y=4.1,Se.add(wt),a.add(Se),Se}for(let B of[-1,1])Le(B*11,Y+.2,-1.3,1.1),Le(B*4.6,Y+.2,-1.3,.9);Le(0,Y+.2,-1.3,1.25);for(let B of[-1,1]){let F=B*(W/2+1.2),Q=new Fe(l(new Lo(2.3,2.6,19,10)),v);Q.position.set(F,9.5,-2),a.add(Q);let ge=new Fe(l(new Lo(2.7,2.7,.4,10)),m);ge.position.set(F,14.5,-2),a.add(ge);let Se=ge.clone();Se.position.y=3,a.add(Se);let Te=new Fe(l(of(2.7,3.8)),m);Te.position.set(F,19,-2),a.add(Te);let it=new Fe(l(Oi([[.01,0],[.2,.15],[.07,.6],[.14,.9],[.01,1.6]],8)),m);it.position.set(F,22.7,-2),a.add(it);for(let qe=0;qe<3;qe++){let lt=new Fe(l(new Fi(.9,1.7)),L);lt.position.set(F+B*0,5.5+qe*3.1,-2+2.3+.02*0),lt.position.z=-2+2.55,a.add(lt)}}{let B=new Fe(l(of(6.5,7.5,32)),m);B.position.set(0,15.5,-10),a.add(B);let F=new Fe(l(new Lo(6.4,6.6,3.2,20)),v);F.position.set(0,13.9,-10),a.add(F);let Q=new Fe(l(Oi([[.01,0],[.4,.3],[.15,1.2],[.3,1.9],[.01,3.2]],10)),m);Q.position.set(0,23.2,-10),a.add(Q)}for(let B of[-1,1]){let F=new Fe(l(Oi([[.55,0],[.75,.25],[.5,.55],[.38,1],[.34,7.4],[.5,7.9],[.8,8.3],[.9,8.7]],18)),m);F.position.set(B*(P/2+1.55),0,1),a.add(F);let Q=new Fe(l(new yn(1.8,.4,1.8)),h);Q.position.set(B*(P/2+1.55),.2,1),a.add(Q);let ge=new Fe(l(new yn(2,.5,2)),m);ge.position.set(B*(P/2+1.55),8.9,1),a.add(ge)}{let B=new xn,F=P/2;B.moveTo(-F,k),B.quadraticCurveTo(-F,k+V*.78,0,k+V),B.quadraticCurveTo(F,k+V*.78,F,k),B.lineTo(-F,k);let Q=l(new rf(B,12));{let Se=Q.attributes.uv,Te=Q.attributes.position;for(let it=0;it<Se.count;it++)Se.setXY(it,Te.getX(it)/1.6,Te.getY(it)/1.6)}let ge=new Fe(Q,l(new ei({map:Z,color:16760928,fog:!1})));ge.position.z=-.7,a.add(ge)}let ve=l(e3()),Be=l(new vn({map:ve,roughness:.5,metalness:.35,emissive:2753544,emissiveIntensity:.5})),Ze=P/2;function Ge(B){let F=new Do;F.position.set(B*P/2,0,-.9);let Q=new Fe(l(new yn(Ze,k,.3)),[h,h,h,h,Be,Be]);Q.position.set(-B*Ze/2,k/2,0),F.add(Q);for(let Te=0;Te<2;Te++){let it=new Fe(l(new EC(.28,.06,8,20)),m);it.position.set(-B*(Ze-.55),3.4+Te*0,.23),it.position.y=3.4,Te&&(it.position.z=-.23,it.rotation.y=Math.PI),F.add(it)}let ge=new Fe(l(new yn(Ze,.25,.4)),m);ge.position.set(-B*Ze/2,k-.2,0),F.add(ge);let Se=ge.clone();return Se.position.y=.3,F.add(Se),a.add(F),F}let ee=Ge(-1),me=Ge(1),A=34,be=8.5,ae=11.5,Ae=-j;{let B=l(new vn({map:_.clone(),roughness:.7,color:16764840}));B.map.needsUpdate=!0,B.map.repeat.set(7,3),l(B.map);for(let Et of[-1,1]){let gt=new Fe(l(new Fi(A,ae)),B);gt.position.set(Et*be,ae/2,Ae-A/2),gt.rotation.y=-Et*Math.PI/2,a.add(gt)}let F=new Fe(l(new Fi(be*2,A)),l(new vn({color:4853792,roughness:.8,emissive:2755080})));F.rotation.x=Math.PI/2,F.position.set(0,ae,Ae-A/2),a.add(F);let Q=l(Oi([[.7,0],[.9,.3],[.55,.7],[.42,1.2],[.4,8.8],[.5,9.3],[.65,9.8],[.75,10.2]],14)),ge=l(new yn(be*2,.5,.7));for(let Et=0;Et<6;Et++){let gt=Ae-4-Et*5;for(let Xi of[-1,1]){let wl=new Fe(Q,Et%2?g:m);wl.position.set(Xi*5,0,gt),a.add(wl)}let rn=new Fe(ge,g);rn.position.set(0,ae-.5,gt),a.add(rn);let Mn=new Fe(l(new Lo(.02,.02,2.2,4)),m);Mn.position.set(0,ae-1.6,gt),a.add(Mn);let si=new Fe(l(new Co(.5,14,10)),T);si.position.set(0,ae-3.2,gt),a.add(si);let vr=new il(d(16758874,.9));vr.scale.set(5,5,1),vr.position.copy(si.position),a.add(vr);let wn=new Fe(l(new T1(.62,.5,14)),m);wn.position.set(0,ae-2.75,gt),a.add(wn)}let Se=_n(5.6,5.5,3.2,new xn),Te=new Fe(l(new rf(Se,10)),l(new ei({color:16771504,fog:!1})));Te.position.set(0,0,Ae-A+.05),a.add(Te);let it=new Fe(l(new Fi(be*2,ae)),B);it.position.set(0,ae/2,Ae-A),a.add(it);let qe=new il(d(16770728,1));qe.scale.set(26,26,1),qe.position.set(0,5.2,Ae-A+1),a.add(qe),a.userData.endSun=qe;let lt=_n(6.4,5.6,3.3,new xn);lt.holes.push(_n(5.6,5.5,3.2,new xa));let wt=new Fe(l(new sl(lt,{depth:.4,bevelEnabled:!1,curveSegments:10})),m);wt.position.set(0,0,Ae-A+.1),a.add(wt)}let oe=[],je=l(Oi([[.3,0],[.18,.4],[.1,1],[.08,3.4],[.2,3.8],[.45,4.2],[.5,4.5]],10)),we=l(new vn({color:16747036,roughness:.6,emissive:5906432,emissiveIntensity:.6})),Ne=l(new MC(.13,1)),C=[];for(let B of[-1,1])for(let F=0;F<6;F++){let Q=B*5.2,ge=7+F*6.5,Se=new Fe(je,m);Se.position.set(Q,0,ge),a.add(Se);let Te=new Fe(l(new Co(.22,10,8)),T);Te.scale.set(.8,1.5,.8),Te.position.set(Q,4.85,ge),a.add(Te);let it=new il(d(16753210,.95));it.scale.set(2.8,2.8,1),it.position.set(Q,4.9,ge),a.add(it),oe.push({fl:Te,sp:it,ph:Math.random()*6}),C.push([Q,ge])}{let B=[],F=[];for(let qe of[-1,1])for(let lt=0;lt<5;lt++){let wt=new N(qe*5.2,4.1,7+lt*6.5),Et=new N(qe*5.2,4.1,7+(lt+1)*6.5),gt=wt.clone().lerp(Et,.5);gt.y-=1.5,F.push(new Ay(wt,gt,Et))}let Q=new Qp(Ne,we,F.length*46),ge=new ar,Se=0,Te=[new et(16747036),new et(16757788),new et(16738832)];for(let qe of F)for(let lt=0;lt<46;lt++){let wt=qe.getPoint(lt/45);ge.position.copy(wt),ge.position.x+=(Math.random()-.5)*.1,ge.position.y+=(Math.random()-.5)*.12,ge.scale.setScalar(.85+Math.random()*.5),ge.rotation.set(Math.random()*3,Math.random()*3,0),ge.updateMatrix(),Q.setMatrixAt(Se,ge.matrix),Q.setColorAt(Se,Te[Se%3]),Se++}a.add(Q);for(let qe=0;qe<9;qe++){let lt=-4.2+qe*1.05,wt=1.2+qe%2*1.3+Math.sin(qe)*.3,Et=new Fe(l(new Lo(.025,.025,wt,4)),we);Et.position.set(lt,k+V-1-wt/2+.3-Math.abs(lt)/4.2*1.5,.55),Et.visible=!1}let it=new Qp(Ne,we,81);Se=0;for(let qe=0;qe<9;qe++){let lt=-3.1+qe*.775,wt=k+.2+V*(1-Math.pow(Math.abs(lt)/(P/2),2.2))*.9-.55,Et=1.6+qe%2*.9;for(let gt=0;gt<9;gt++)ge.position.set(lt,wt-gt/8*Et,.7),ge.scale.setScalar(1+(gt===8?.6:0)),ge.rotation.set(gt,qe,0),ge.updateMatrix(),it.setMatrixAt(Se,ge.matrix),it.setColorAt(Se,Te[(qe+gt)%3]),Se++}a.add(it)}let M=n?140:260,z=l(new Un({transparent:!0,depthWrite:!1,blending:Vc,uniforms:{t:{value:0},pr:{value:i.getPixelRatio()},map:{value:p}},vertexShader:"attribute vec4 a; uniform float t; uniform float pr; varying float al; void main(){ vec3 p=position; float ph=a.w; p.y=mod(p.y+t*a.x*.6+ph*8.,14.); p.x+=sin(t*.5*a.y+ph*20.)*1.4; p.z+=cos(t*.4*a.y+ph*11.)*1.4; vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv; gl_PointSize=a.z*pr*(220./-mv.z); al=smoothstep(0.,2.,p.y)*(1.-smoothstep(10.,14.,p.y))*(.55+.45*sin(t*2.+ph*40.)); }",fragmentShader:"uniform sampler2D map; varying float al; void main(){ vec4 c=texture2D(map,gl_PointCoord); gl_FragColor=vec4(c.rgb*1.4,c.a*al); }"}));{let B=new Float32Array(M*3),F=new Float32Array(M*4);for(let Se=0;Se<M;Se++)B[Se*3]=(Math.random()-.5)*26,B[Se*3+1]=Math.random()*14,B[Se*3+2]=40-Math.random()*62,F[Se*4]=.5+Math.random(),F[Se*4+1]=.5+Math.random(),F[Se*4+2]=.35+Math.random()*.8,F[Se*4+3]=Math.random();let Q=l(new fr);Q.setAttribute("position",new br(B,3)),Q.setAttribute("a",new br(F,4));let ge=new M1(Q,z);ge.frustumCulled=!1,a.add(ge)}a.add(new kC(6970024,3805216,.55));let K=new zC(11122943,1.1);K.position.set(-30,40,30),a.add(K);let re=new Nc(16754768,900,55,2);re.position.set(0,4.5,12),a.add(re);let q=new Nc(16754768,500,40,2);q.position.set(0,4.5,30),a.add(q);let Ue=new Nc(16762996,0,40,2);Ue.position.set(0,8,-8),a.add(Ue);let _e=new Nc(16767120,0,44,2);_e.position.set(0,7,-24),a.add(_e);let Me=new il(d(16760928,0));Me.scale.set(16,12,1),Me.position.set(0,4.8,-.2),a.add(Me);let $e={w:1,h:1},pe=()=>{let B=t.getBoundingClientRect(),F=Math.max(1,Math.round(B.width)),Q=Math.max(1,Math.round(B.height));$e.w=F,$e.h=Q,i.setSize(F,Q,!1),o.aspect=F/Q,o.updateProjectionMatrix()};pe();let Ee=typeof ResizeObserver<"u"?new ResizeObserver(pe):null;Ee&&Ee.observe(t);let ze={x:0,y:0,tx:0,ty:0},We=B=>{let F=t.getBoundingClientRect();ze.tx=((B.clientX-F.left)/F.width-.5)*2,ze.ty=((B.clientY-F.top)/F.height-.5)*2};t.addEventListener("pointermove",We);let Ce=B=>{B.gamma!=null&&(ze.tx=hl(B.gamma/25,-1,1),ze.ty=hl(((B.beta||45)-45)/25,-1,1))};window.addEventListener("deviceorientation",Ce);let Ye=0,tt=!1,Mt=performance.now(),U=-1,ue=new N,J=()=>{let B=parseFloat(t.style.getPropertyValue("--p"));return isNaN(B)?0:B},te=B=>{if(tt)return;Ye=requestAnimationFrame(te);let F=(B-Mt)/1e3,Q=J(),ge=wr(Q,.07,.36),Se=tm(tm(hl(Q/1))),Te=Q<.001?0:Math.pow(hl(Q),1),it=40-70*(.6*wr(Te,0,.55)*.75+0)-0,qe=40-64*(.22*wr(Q,0,.35)+.78*wr(Q,.3,1)),lt=1-wr(Q,0,.05);ze.x+=(ze.tx-ze.x)*.05,ze.y+=(ze.ty-ze.y)*.05;let wt=Math.sin(F*.5)*.25*lt;o.position.set(ze.x*.9*(1-wr(Q,.55,.9))+Math.sin(F*.35)*.4*lt,1.9+wr(Q,.1,.6)*1.6+wr(Q,.6,1)*.6+wt-ze.y*.25,qe-(1-lt)*0+Math.sin(F*.3)*.8*lt);let Et=Math.min(0,qe-22),gt=(Et+qe-22-Math.sqrt((Et-(qe-22))**2+16))/2*0+Et;ue.set(ze.x*.8*.5,6.4-wr(Q,.35,1)*1.1+ze.y*-.3,gt),o.lookAt(ue),o.rotateZ(Math.sin(F*.4)*.006*lt+wr(Q,.4,.8)*Math.sin(Q*14)*.008);let rn=(o.aspect<1?66:40)+wr(Q,.55,1)*12-wr(Q,0,.3)*4;Math.abs(o.fov-rn)>.01&&(o.fov=rn,o.updateProjectionMatrix());let Mn=ge*1.78;ee.rotation.y=Mn,me.rotation.y=-Mn;let si=.88+Math.sin(F*9.1)*.05+Math.sin(F*13.7+1)*.04;re.intensity=900*si,q.intensity=500*(.92+Math.sin(F*7.3)*.06);let vr=ge;Ue.intensity=30+380*vr,_e.intensity=20+420*vr,Me.material.opacity=.75*vr*(1-wr(Q,.55,.75)),Me.scale.set(10+8*vr,8+8*vr,1),a.userData.endSun.material.opacity=.5+.5*vr,a.userData.endSun.scale.setScalar(20+22*wr(Q,.5,1));for(let wn of oe){let Xi=.85+Math.sin(F*8+wn.ph)*.12+Math.sin(F*15+wn.ph*2)*.06;wn.sp.scale.setScalar(2.8*Xi),wn.fl.scale.set(.8,1.4*Xi+.15,.8)}z.uniforms.t.value=F,i.toneMappingExposure=1+wr(Q,.8,1)*.6,i.render(a,o)};return Ye=requestAnimationFrame(te),{dispose(){tt=!0,cancelAnimationFrame(Ye),Ee&&Ee.disconnect(),t.removeEventListener("pointermove",We),window.removeEventListener("deviceorientation",Ce),s.forEach(B=>B.dispose&&B.dispose()),a.traverse(B=>{B.geometry&&B.geometry.dispose()}),i.dispose()}}}function Xy(){try{let e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl2")||e.getContext("webgl")))}catch{return!1}}var X=Ht(rr());function r3(){let e=Ml.default.useRef(null),t=Ml.default.useRef(null);return Ml.default.useEffect(()=>{if(!e.current||!t.current)return;let r=Wy(t.current,e.current.parentElement);return()=>r.dispose()},[]),(0,X.jsx)("div",{ref:e,className:"g3d","aria-hidden":"true",children:(0,X.jsx)("canvas",{ref:t})})}function Sl({k:e,cls:t="",children:r}){return(0,X.jsx)("div",{className:`layer ${t}`,style:{"--k":e},children:(0,X.jsx)("div",{className:"stage",children:r})})}function Jc({cls:e}){return(0,X.jsxs)("svg",{className:`corner ${e}`,viewBox:"0 0 120 120","aria-hidden":"true",children:[(0,X.jsx)("path",{d:"M4 116V30C4 15 15 4 30 4h86",fill:"none",stroke:"#f4c75a",strokeWidth:"1.6"}),(0,X.jsx)("path",{d:"M14 116V36C14 24 24 14 36 14h80",fill:"none",stroke:"#f4c75a",strokeWidth:"0.7",opacity:"0.7"}),(0,X.jsxs)("g",{transform:"translate(34 34)",fill:"none",stroke:"#f4c75a",strokeWidth:"1.1",children:[Array.from({length:8},(t,r)=>(0,X.jsx)("path",{transform:`rotate(${r*45})`,d:"M0 -4Q5 -12 0 -22Q-5 -12 0 -4Z",fill:r%2?"none":"rgba(244,199,90,0.25)"},r)),(0,X.jsx)("circle",{r:"3",fill:"#f4c75a"})]})]})}function n3(){return(0,X.jsx)("svg",{className:"mandala",viewBox:"-200 -200 400 400","aria-hidden":"true",children:(0,X.jsxs)("g",{fill:"none",stroke:"#f4c75a",strokeWidth:"1",children:[[190,160,118,70].map((e,t)=>(0,X.jsx)("circle",{r:e,strokeDasharray:t===1?"2 6":void 0,opacity:.8-t*.1},e)),Array.from({length:24},(e,t)=>(0,X.jsx)("path",{transform:`rotate(${t*15})`,d:"M0 -120Q16 -150 0 -188Q-16 -150 0 -120Z"},t)),Array.from({length:12},(e,t)=>(0,X.jsx)("path",{transform:`rotate(${t*30+15})`,d:"M0 -72Q22 -96 0 -118Q-22 -96 0 -72Z"},"b"+t)),Array.from({length:8},(e,t)=>(0,X.jsx)("path",{transform:`rotate(${t*45})`,d:"M0 -20Q12 -44 0 -68Q-12 -44 0 -20Z"},"c"+t))]})})}function Qc(){return(0,X.jsxs)("div",{className:"rdiv","aria-hidden":"true",children:[(0,X.jsx)("span",{}),(0,X.jsxs)("svg",{viewBox:"0 0 60 20",width:"60",height:"20",children:[(0,X.jsx)("path",{d:"M2 10H20M40 10H58",stroke:"#f4c75a",strokeWidth:"1"}),(0,X.jsx)("path",{d:"M30 2l6 8-6 8-6-8z",fill:"none",stroke:"#f4c75a",strokeWidth:"1.2"}),(0,X.jsx)("circle",{cx:"30",cy:"10",r:"2",fill:"#f4c75a"})]}),(0,X.jsx)("span",{})]})}function jy(){let e=Qu(6600),t=Ju(),r=Pi(He.weddingDate),[n]=Ml.default.useState(()=>Xy()&&new URLSearchParams(window.location.search).get("flat")===null),i=e.state==="idle"?e.start:void 0,a=He.events.map(o=>({...o,d:Pi(o.date)}));return(0,X.jsxs)("div",{className:`royal ${e.state!=="done"?"locked":""}`,style:{"--H":`${t}px`},children:[e.state!=="done"&&(0,X.jsxs)("div",{ref:e.ref,className:`gate rg is-${e.state}`,onClick:i,children:[n?(0,X.jsx)(r3,{}):(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(Sl,{k:.35,children:(0,X.jsx)(l_,{})}),(0,X.jsx)(Sl,{k:.9,children:(0,X.jsx)(u_,{})}),(0,X.jsxs)(Sl,{k:4.9,cls:"main",children:[(0,X.jsx)(c_,{}),(0,X.jsx)(d_,{}),(0,X.jsx)("div",{className:"spill",children:(0,X.jsx)(h_,{})}),(0,X.jsxs)("div",{className:"doors",children:[(0,X.jsx)("div",{className:"door dl",children:(0,X.jsx)(yp,{side:"l"})}),(0,X.jsx)("div",{className:"door dr",children:(0,X.jsx)(yp,{side:"r"})})]})]}),(0,X.jsx)(Sl,{k:2.8,children:(0,X.jsx)(f_,{})}),(0,X.jsx)(Sl,{k:2.3,children:(0,X.jsx)(m_,{})})]}),(0,X.jsx)("div",{className:"glow"}),(0,X.jsx)("div",{className:"vignette"}),(0,X.jsxs)("div",{className:"gate-ui",children:[(0,X.jsx)("span",{}),(0,X.jsxs)("div",{className:"gu-bottom",children:[(0,X.jsx)("p",{className:"gu-inv",children:"You are warmly invited to the wedding of"}),(0,X.jsxs)("h1",{className:"gu-names",children:[He.bride," ",(0,X.jsx)("i",{children:"&"})," ",He.groom]}),(0,X.jsx)("button",{className:"gu-open",onClick:o=>{o.stopPropagation(),e.start()},disabled:e.state!=="idle",children:(0,X.jsx)("span",{children:"Open the invitation"})})]})]}),(0,X.jsx)("button",{className:"gu-skip",onClick:o=>{o.stopPropagation(),e.skip()},children:"Skip intro"})]}),(0,X.jsxs)("main",{className:`rpage ${e.ready?"ready":""}`,children:[(0,X.jsx)(ua,{to:"/",className:"back",children:"All designs"}),(0,X.jsxs)("section",{className:"hero",children:[(0,X.jsx)(n3,{}),(0,X.jsx)(Jc,{cls:"c1"}),(0,X.jsx)(Jc,{cls:"c2"}),(0,X.jsx)(Jc,{cls:"c3"}),(0,X.jsx)(Jc,{cls:"c4"}),(0,X.jsx)(ec,{count:26,kind:"petal",seed:4}),(0,X.jsxs)("div",{className:"hero-in",children:[(0,X.jsx)("p",{className:"h-ganesh e1",lang:"hi",children:"\u0965 \u0936\u094D\u0930\u0940 \u0917\u0923\u0947\u0936\u093E\u092F \u0928\u092E\u0903 \u0965"}),(0,X.jsx)("p",{className:"h-kicker e2",children:"Together with their families"}),(0,X.jsxs)("h1",{className:"h-names",children:[(0,X.jsx)("span",{className:"nm e3",children:He.bride}),(0,X.jsx)("span",{className:"amp e4",children:"&"}),(0,X.jsx)("span",{className:"nm e5",children:He.groom})]}),(0,X.jsxs)("p",{className:"h-hi e6",lang:"hi",children:[He.brideHi," ",(0,X.jsx)("small",{children:"weds"})," ",He.groomHi]}),(0,X.jsxs)("p",{className:"h-fam e6",children:[He.brideFull," \xA0\xB7\xA0 ",He.groomFull]}),(0,X.jsx)(Qc,{}),(0,X.jsx)("p",{className:"h-ask e7",children:"request the honour of your presence at their wedding"}),(0,X.jsxs)("div",{className:"h-date e8","aria-label":`${r.weekday}, ${r.day} ${r.month} ${r.year}`,children:[(0,X.jsx)("span",{children:r.weekday}),(0,X.jsx)("b",{children:r.day}),(0,X.jsxs)("span",{children:[r.month," ",r.year]})]}),(0,X.jsxs)("p",{className:"h-venue e9",children:[He.venueName,", ",He.venueCity]})]}),(0,X.jsx)("div",{className:"scroll-cue","aria-hidden":"true",children:(0,X.jsx)("i",{})})]}),(0,X.jsxs)("section",{className:"sec",children:[(0,X.jsxs)(nr,{children:[(0,X.jsx)("p",{className:"eyebrow",children:"Every moment counts"}),(0,X.jsx)("h2",{children:"The countdown begins"}),(0,X.jsx)(Qc,{})]}),(0,X.jsx)(nr,{delay:120,children:(0,X.jsx)(Ku,{cls:"rcd"})}),(0,X.jsx)(nr,{delay:200,children:(0,X.jsxs)("p",{className:"cd-note",children:["until the baraat arrives, ",Pi(He.weddingDate).day," ",Pi(He.weddingDate).month]})})]}),(0,X.jsxs)("section",{className:"sec",children:[(0,X.jsxs)(nr,{children:[(0,X.jsx)("p",{className:"eyebrow",children:"Two days of joy"}),(0,X.jsx)("h2",{children:"The celebrations"}),(0,X.jsx)(Qc,{})]}),(0,X.jsx)("ol",{className:"tl",children:a.map((o,s)=>(0,X.jsxs)(nr,{as:"li",className:"ev",delay:s*60,children:[(0,X.jsxs)("div",{className:"ev-date",children:[(0,X.jsx)("b",{children:o.d.day}),(0,X.jsx)("span",{children:o.d.monthShort})]}),(0,X.jsx)("i",{className:"ev-dot","aria-hidden":"true"}),(0,X.jsxs)("div",{className:"ev-card",children:[(0,X.jsx)("div",{className:"ev-ic",children:(0,X.jsx)(qs,{name:o.icon})}),(0,X.jsxs)("p",{className:"ev-day",children:[o.d.weekday," \xB7 ",o.time]}),(0,X.jsxs)("h3",{children:[o.name," ",(0,X.jsx)("small",{lang:"hi",children:o.hi})]}),(0,X.jsx)("p",{className:"ev-note",children:o.note}),(0,X.jsxs)("p",{className:"ev-where",children:[o.venue,", Rourkela"]})]})]},o.id))})]}),(0,X.jsxs)("section",{className:"sec venue",children:[(0,X.jsxs)(nr,{children:[(0,X.jsx)("p",{className:"eyebrow",children:"Where to find us"}),(0,X.jsx)("h2",{children:"The venue"}),(0,X.jsx)(Qc,{})]}),(0,X.jsxs)(nr,{delay:100,className:"v-card",children:[(0,X.jsx)("div",{className:"ev-ic",children:(0,X.jsx)(qs,{name:"pin"})}),(0,X.jsx)("h3",{children:He.venueName}),(0,X.jsxs)("p",{lang:"hi",className:"v-hi",children:[He.venueNameHi,", \u0930\u093E\u0909\u0930\u0915\u0947\u0932\u093E"]}),(0,X.jsx)("p",{children:He.venueCity}),(0,X.jsxs)("div",{className:"btns",children:[(0,X.jsx)("a",{className:"rbtn",href:qu(),target:"_blank",rel:"noopener noreferrer",children:"Get directions"}),(0,X.jsx)("a",{className:"rbtn ghost",href:Zu(),download:"aastha-mayank-wedding.ics",children:"Add to calendar"})]})]})]}),(0,X.jsx)("footer",{className:"rfoot",children:(0,X.jsxs)(nr,{children:[(0,X.jsx)("p",{lang:"hi",className:"h-ganesh",children:"\u0965 \u0936\u0941\u092D \u0935\u093F\u0935\u093E\u0939 \u0965"}),(0,X.jsxs)("p",{className:"f-names",children:[He.bride," & ",He.groom]}),(0,X.jsxs)("p",{className:"f-note",children:["With love and blessings from",(0,X.jsx)("br",{}),He.family]}),(0,X.jsx)("p",{className:"f-sub",children:"Your presence will make our celebration complete."})]})})]})]})}var ne=Ht(rr()),mr=600,or=170,gr=700,en=440,Ca=(e=or,t=gr,r=en,n=mr)=>`M${n-e} ${t}V${r}A${e} ${e} 0 0 1 ${n+e} ${r}V${t}Z`,Wi="#b98f42",Qo="#d4b068";function Ra({x:e,y:t,a:r,s:n=1,fill:i=!1}){return(0,ne.jsx)("path",{transform:`translate(${e} ${t}) rotate(${r}) scale(${n})`,d:"M0 0Q8 -9 0 -26Q-8 -9 0 0Z",fill:i?"rgba(154,168,138,.28)":"none",stroke:Wi,strokeWidth:"0.9"})}function tn({x:e,y:t,h:r,lean:n,seed:i,flip:a=1,n:o=9,cls:s=""}){let l=pn(i),u=Array.from({length:o},(c,p)=>{let d=(p+1)/(o+1);return{x:e+n*d*d*a,y:t-r*d,t:d}});return(0,ne.jsxs)("g",{className:s,children:[(0,ne.jsx)("path",{d:`M${e} ${t}Q${e+n*.15*a} ${t-r*.55} ${e+n*a} ${t-r}`,fill:"none",stroke:Wi,strokeWidth:"1"}),u.map((c,p)=>{let d=(1.15-c.t*.5)*(.85+l()*.3);return(0,ne.jsxs)("g",{children:[(0,ne.jsx)(Ra,{x:c.x,y:c.y,a:-52+l()*10+n*.1,s:d,fill:p%2===0}),(0,ne.jsx)(Ra,{x:c.x,y:c.y,a:52+l()*10+n*.1,s:d,fill:p%2===1})]},p)}),(0,ne.jsx)(Ra,{x:e+n*a,y:t-r,a:n*.15*a,s:1.1,fill:!0})]})}function $y({n:e,seed:t}){let r=pn(t);return(0,ne.jsx)(ne.Fragment,{children:Array.from({length:e},(n,i)=>(0,ne.jsx)("circle",{className:"idust",cx:-300+r()*2100,cy:-100+r()*1e3,r:.8+r()*2.2,fill:Qo,style:{animationDelay:`${r()*8}s`,animationDuration:`${6+r()*8}s`}},i))})}function Yy(){return(0,ne.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,ne.jsxs)("defs",{children:[(0,ne.jsxs)("linearGradient",{id:"iSky",gradientUnits:"userSpaceOnUse",x1:"0",y1:"0",x2:"0",y2:"760",children:[(0,ne.jsx)("stop",{offset:"0",stopColor:"#f3e3d3"}),(0,ne.jsx)("stop",{offset:"0.45",stopColor:"#f8d9c0"}),(0,ne.jsx)("stop",{offset:"0.8",stopColor:"#fbe7c8"}),(0,ne.jsx)("stop",{offset:"1",stopColor:"#fdf3dc"})]}),(0,ne.jsxs)("radialGradient",{id:"iSun",children:[(0,ne.jsx)("stop",{offset:"0",stopColor:"#fffbe8",stopOpacity:"1"}),(0,ne.jsx)("stop",{offset:"0.35",stopColor:"#ffe9bd",stopOpacity:"0.85"}),(0,ne.jsx)("stop",{offset:"1",stopColor:"#ffe1b0",stopOpacity:"0"})]})]}),(0,ne.jsx)("rect",{x:"-2000",y:"-2000",width:"5200",height:"5000",fill:"url(#iSky)"}),(0,ne.jsx)("circle",{cx:"600",cy:"520",r:"360",fill:"url(#iSun)"}),(0,ne.jsx)("circle",{cx:"600",cy:"520",r:"46",fill:"#fffaf0",opacity:"0.95"}),[0,1,2].map(e=>(0,ne.jsx)("path",{d:`M-1500 ${560+e*55}C-900 ${500+e*50} -300 ${600+e*30} 250 ${545+e*52}S900 ${500+e*50} 1700 ${580+e*40}V1300H-1500Z`,fill:["#e7c9a4","#d9bf9a","#c9b48f"][e],opacity:.5+e*.12},e)),(0,ne.jsx)("g",{stroke:Wi,strokeWidth:"1",fill:"none",opacity:"0.55",children:[420,470,740,790].map((e,t)=>(0,ne.jsxs)("g",{children:[(0,ne.jsx)("path",{d:`M${e} 720V${620-t%2*20}`}),(0,ne.jsx)("path",{d:`M${e} ${660-t%2*14}q-12 -12 -22 -34M${e} ${676-t%2*14}q12 -12 22 -34M${e} ${640-t%2*14}q-9 -9 -16 -26M${e} ${650-t%2*14}q9 -9 16 -26`})]},e))}),(0,ne.jsxs)("g",{className:"birds",fill:"none",stroke:"#a88548",strokeWidth:"1.4",strokeLinecap:"round",children:[(0,ne.jsx)("path",{d:"M520 380q10 -10 20 0q10 -10 20 0"}),(0,ne.jsx)("path",{d:"M690 330q8 -8 16 0q8 -8 16 0"}),(0,ne.jsx)("path",{d:"M640 410q7 -7 14 0q7 -7 14 0"})]}),(0,ne.jsx)($y,{n:60,seed:9})]})}function qy(){let e=pn(2),t=[];for(let r=0;r<9;r++){let n=gr-30-r*32;t.push((0,ne.jsxs)("g",{children:[(0,ne.jsx)(Ra,{x:mr-or-24,y:n,a:-38+e()*20,s:1,fill:r%2===0}),(0,ne.jsx)(Ra,{x:mr-or-24,y:n-10,a:40+e()*16,s:.9,fill:r%2===1})]},"l"+r))}for(let r=0;r<12;r++){let n=Math.PI*(.55+r*.045),i=mr+Math.cos(n)*(or+24),a=en-Math.sin(n)*(or+24);t.push((0,ne.jsxs)("g",{children:[(0,ne.jsx)(Ra,{x:i,y:a,a:n*180/Math.PI-120+e()*14,s:.95,fill:r%2===0}),(0,ne.jsx)(Ra,{x:i,y:a,a:n*180/Math.PI-40+e()*14,s:.85,fill:r%2===1})]},"t"+r))}return(0,ne.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,ne.jsxs)("defs",{children:[(0,ne.jsxs)("mask",{id:"iHole",maskUnits:"userSpaceOnUse",x:"-2500",y:"-2000",width:"6200",height:"5000",children:[(0,ne.jsx)("rect",{x:"-2500",y:"-2000",width:"6200",height:"5000",fill:"#fff"}),(0,ne.jsx)("path",{d:Ca(),fill:"#000"})]}),(0,ne.jsxs)("linearGradient",{id:"iWall",gradientUnits:"userSpaceOnUse",x1:"0",y1:"0",x2:"0",y2:"900",children:[(0,ne.jsx)("stop",{offset:"0",stopColor:"#f6efe1"}),(0,ne.jsx)("stop",{offset:"1",stopColor:"#efe4cf"})]}),(0,ne.jsxs)("radialGradient",{id:"iShade",gradientUnits:"userSpaceOnUse",cx:"600",cy:"520",r:"520",children:[(0,ne.jsx)("stop",{offset:"0.5",stopColor:"#c9a86a",stopOpacity:"0"}),(0,ne.jsx)("stop",{offset:"1",stopColor:"#c9a86a",stopOpacity:"0.18"})]}),(0,ne.jsx)("clipPath",{id:"iHalfl",children:(0,ne.jsx)("rect",{x:"400",y:"200",width:"200",height:"600"})}),(0,ne.jsx)("clipPath",{id:"iHalfr",children:(0,ne.jsx)("rect",{x:"600",y:"200",width:"200",height:"600"})}),(0,ne.jsx)("clipPath",{id:"iClip",children:(0,ne.jsx)("path",{d:Ca()})}),(0,ne.jsxs)("linearGradient",{id:"iPanel",x1:"0",y1:"0",x2:"1",y2:"0",children:[(0,ne.jsx)("stop",{offset:"0",stopColor:"#f8f2e6"}),(0,ne.jsx)("stop",{offset:"1",stopColor:"#f1e7d2"})]}),(0,ne.jsxs)("linearGradient",{id:"iEdgel",x1:"0",y1:"0",x2:"1",y2:"0",children:[(0,ne.jsx)("stop",{offset:"0",stopColor:"#8a6a2a",stopOpacity:"0"}),(0,ne.jsx)("stop",{offset:"1",stopColor:"#8a6a2a",stopOpacity:"0.14"})]}),(0,ne.jsxs)("linearGradient",{id:"iEdger",x1:"0",y1:"0",x2:"1",y2:"0",children:[(0,ne.jsx)("stop",{offset:"0",stopColor:"#8a6a2a",stopOpacity:"0.14"}),(0,ne.jsx)("stop",{offset:"1",stopColor:"#8a6a2a",stopOpacity:"0"})]})]}),(0,ne.jsxs)("g",{mask:"url(#iHole)",children:[(0,ne.jsx)("rect",{x:"-2500",y:"-2000",width:"6200",height:"5000",fill:"url(#iWall)"}),(0,ne.jsx)("rect",{x:"-2500",y:"-2000",width:"6200",height:"5000",fill:"url(#iShade)"}),(0,ne.jsx)("rect",{x:"-2500",y:gr,width:"6200",height:"1400",fill:"#e9dcc2"})]}),(0,ne.jsx)("path",{d:Ca(or+14,gr,en),fill:"none",stroke:Wi,strokeWidth:"1.6"}),(0,ne.jsx)("path",{d:Ca(or+24,gr,en),fill:"none",stroke:Qo,strokeWidth:"0.8"}),(0,ne.jsx)("path",{d:Ca(or+36,gr,en),fill:"none",stroke:Qo,strokeWidth:"0.5",opacity:"0.7"}),t,(0,ne.jsx)("rect",{x:"-2500",y:gr,width:"6200",height:"1.5",fill:Wi,opacity:"0.8"}),(0,ne.jsx)("rect",{x:"-2500",y:gr+16,width:"6200",height:"0.8",fill:Qo,opacity:"0.6"}),(0,ne.jsx)("g",{clipPath:"url(#iClip)",children:["l","r"].map(r=>{let n=r==="l"?-1:1;return(0,ne.jsxs)("g",{className:`ipanel ip-${r}`,clipPath:`url(#iHalf${r})`,children:[(0,ne.jsx)("rect",{x:r==="l"?mr-or-4:mr,y:en-or-4,width:or+4,height:gr-en+or+4,fill:"url(#iPanel)"}),(0,ne.jsx)("rect",{x:r==="l"?mr-30:mr,y:en-or,width:"30",height:gr-en+or,fill:`url(#iEdge${r})`}),(0,ne.jsx)("path",{d:Ca(or-12,gr-12,en),fill:"none",stroke:Wi,strokeWidth:"0.9"}),(0,ne.jsx)("path",{d:Ca(or-20,gr-20,en),fill:"none",stroke:Qo,strokeWidth:"0.5"}),(0,ne.jsx)(tn,{x:mr+n*98,y:gr-14,h:250,lean:n*18,seed:r==="l"?31:32,flip:1}),(0,ne.jsx)(tn,{x:mr+n*60,y:gr-14,h:150,lean:n*-10,seed:r==="l"?33:34,flip:1,n:6}),(0,ne.jsx)(tn,{x:mr+n*130,y:gr-14,h:110,lean:n*8,seed:r==="l"?35:36,flip:1,n:5}),(0,ne.jsx)("line",{x1:mr,y1:en-or,x2:mr,y2:gr,stroke:Wi,strokeWidth:"1"}),(0,ne.jsxs)("g",{clipPath:`url(#iHalf${r})`,children:[(0,ne.jsx)("circle",{cx:mr,cy:"500",r:"64",fill:"#f8f2e6",stroke:Wi,strokeWidth:"1.2"}),(0,ne.jsx)("circle",{cx:mr,cy:"500",r:"57",fill:"none",stroke:Qo,strokeWidth:"0.6"}),(0,ne.jsx)("text",{x:mr,y:"513",textAnchor:"middle",fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:"42",fill:"#7a5a22",children:"A&M"})]})]},r)})})]})}function Zy(){return(0,ne.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,ne.jsx)(tn,{x:330,y:920,h:340,lean:-40,seed:71,n:11,cls:"isway"}),(0,ne.jsx)(tn,{x:270,y:930,h:260,lean:30,seed:72,n:9,cls:"isway b"}),(0,ne.jsx)(tn,{x:880,y:920,h:300,lean:44,seed:73,n:10,cls:"isway c"}),(0,ne.jsx)(tn,{x:940,y:930,h:210,lean:-24,seed:74,n:8,cls:"isway"}),(0,ne.jsx)("g",{transform:"translate(600 -40) rotate(180)",children:(0,ne.jsxs)("g",{transform:"translate(-600 -0)",children:[(0,ne.jsx)(tn,{x:420,y:0,h:170,lean:30,seed:75,n:7,cls:"isway b"}),(0,ne.jsx)(tn,{x:780,y:0,h:140,lean:-30,seed:76,n:6,cls:"isway c"})]})}),(0,ne.jsx)($y,{n:34,seed:12})]})}var se=Ht(rr());function gm({k:e,children:t}){return(0,se.jsx)("div",{className:"layer",style:{"--k":e},children:(0,se.jsx)("div",{className:"stage",children:t})})}function i3(){return(0,se.jsxs)("svg",{className:"hills",viewBox:"0 0 400 160",preserveAspectRatio:"none","aria-hidden":"true",children:[(0,se.jsx)("path",{d:"M0 110C60 80 120 100 200 84S340 70 400 96V160H0Z",fill:"#e9cfa9",opacity:".7"}),(0,se.jsx)("path",{d:"M0 130C80 106 150 124 220 108S350 100 400 120V160H0Z",fill:"#dcc096",opacity:".85"}),(0,se.jsx)("path",{d:"M0 148C90 130 160 144 240 134S360 130 400 142V160H0Z",fill:"#cdb48b"})]})}function Jy(){let e=Qu(6600),t=Ju(),r=Pi(He.weddingDate),n=He.events.map(i=>({...i,d:Pi(i.date)}));return(0,se.jsxs)("div",{className:`ivory ${e.state!=="done"?"locked":""}`,style:{"--H":`${t}px`},children:[e.state!=="done"&&(0,se.jsxs)("div",{ref:e.ref,className:`gate ig is-${e.state}`,onClick:e.state==="idle"?e.start:void 0,children:[(0,se.jsx)(gm,{k:.9,children:(0,se.jsx)(Yy,{})}),(0,se.jsx)(gm,{k:4.4,children:(0,se.jsx)(qy,{})}),(0,se.jsx)(gm,{k:2.6,children:(0,se.jsx)(Zy,{})}),(0,se.jsx)("div",{className:"glow"}),(0,se.jsxs)("div",{className:"gate-ui",children:[(0,se.jsx)("span",{}),(0,se.jsxs)("div",{className:"gu-bottom",children:[(0,se.jsx)("p",{className:"gu-inv",children:"The wedding of"}),(0,se.jsxs)("h1",{className:"gu-names",children:[He.bride," ",(0,se.jsx)("i",{children:"&"})," ",He.groom]}),(0,se.jsxs)("p",{className:"gu-date",children:[r.day," ",r.month," ",r.year," \xB7 ",He.venueCity.split(",")[0]]}),(0,se.jsx)("button",{className:"gu-open",onClick:i=>{i.stopPropagation(),e.start()},disabled:e.state!=="idle",children:(0,se.jsx)("span",{children:"Open"})})]})]}),(0,se.jsx)("button",{className:"gu-skip",onClick:i=>{i.stopPropagation(),e.skip()},children:"Skip intro"})]}),(0,se.jsxs)("main",{className:`ipage ${e.ready?"ready":""}`,children:[(0,se.jsx)(ua,{to:"/",className:"iback",children:"All designs"}),(0,se.jsxs)("section",{className:"ivhero",children:[(0,se.jsx)(ec,{count:22,kind:"dust",seed:8}),(0,se.jsx)("div",{className:"i-arch",children:(0,se.jsxs)("div",{className:"i-arch-in",children:[(0,se.jsx)("p",{className:"i-kick e1",children:"Together with their families"}),(0,se.jsxs)("h1",{className:"i-names",children:[(0,se.jsx)("span",{className:"e2",children:He.bride}),(0,se.jsx)("em",{className:"e3",children:"&"}),(0,se.jsx)("span",{className:"e4",children:He.groom})]}),(0,se.jsxs)("p",{className:"i-hi e5",lang:"hi",children:[He.brideHi," \xA0\xB7\xA0 ",He.groomHi]}),(0,se.jsx)(i3,{})]})}),(0,se.jsxs)("div",{className:"i-meta",children:[(0,se.jsx)("p",{className:"i-ask e6",children:"invite you to celebrate their wedding"}),(0,se.jsxs)("p",{className:"i-date e7",children:[(0,se.jsx)("span",{children:r.day}),(0,se.jsx)("i",{}),(0,se.jsx)("span",{children:He.weddingDate.slice(5,7)}),(0,se.jsx)("i",{}),(0,se.jsx)("span",{children:r.year})]}),(0,se.jsx)("p",{className:"i-wd e7",children:r.weekday}),(0,se.jsxs)("p",{className:"i-venue e8",children:[He.venueName," \xB7 ",He.venueCity]})]}),(0,se.jsx)("div",{className:"i-scroll","aria-hidden":"true",children:(0,se.jsx)("i",{})})]}),(0,se.jsxs)("section",{className:"isec",children:[(0,se.jsxs)(nr,{children:[(0,se.jsx)("p",{className:"i-eyebrow",children:"Until we celebrate"}),(0,se.jsx)("h2",{children:"Counting down"})]}),(0,se.jsx)(nr,{delay:100,children:(0,se.jsx)(Ku,{cls:"icd"})})]}),(0,se.jsxs)("section",{className:"isec",children:[(0,se.jsxs)(nr,{children:[(0,se.jsx)("p",{className:"i-eyebrow",children:"Two days of joy"}),(0,se.jsx)("h2",{children:"The celebrations"})]}),(0,se.jsx)("ol",{className:"iev-list",children:n.map((i,a)=>(0,se.jsxs)(nr,{as:"li",className:"iev",delay:a*60,children:[(0,se.jsxs)("div",{className:"iev-date",children:[(0,se.jsx)("b",{children:i.d.day}),(0,se.jsx)("span",{children:i.d.monthShort})]}),(0,se.jsxs)("div",{className:"iev-body",children:[(0,se.jsxs)("p",{className:"iev-when",children:[i.d.weekday," \xB7 ",i.time]}),(0,se.jsxs)("h3",{children:[i.name," ",(0,se.jsx)("small",{lang:"hi",children:i.hi})]}),(0,se.jsx)("p",{className:"iev-note",children:i.note}),(0,se.jsxs)("p",{className:"iev-note",style:{fontStyle:"italic"},children:[i.venue,", Rourkela"]})]}),(0,se.jsx)("div",{className:"iev-ic",children:(0,se.jsx)(qs,{name:i.icon})})]},i.id))})]}),(0,se.jsxs)("section",{className:"isec ivenue",children:[(0,se.jsxs)(nr,{children:[(0,se.jsx)("p",{className:"i-eyebrow",children:"The venue"}),(0,se.jsx)("h2",{children:He.venueName})]}),(0,se.jsxs)(nr,{delay:100,children:[(0,se.jsxs)("p",{className:"ivn-hi",lang:"hi",children:[He.venueNameHi,", \u0930\u093E\u0909\u0930\u0915\u0947\u0932\u093E"]}),(0,se.jsx)("p",{className:"ivn-city",children:He.venueCity}),(0,se.jsxs)("div",{className:"ibtns",children:[(0,se.jsx)("a",{className:"ibtn",href:qu(),target:"_blank",rel:"noopener noreferrer",children:"Get directions"}),(0,se.jsx)("a",{className:"ibtn ghost",href:Zu(),download:"aastha-mayank-wedding.ics",children:"Add to calendar"})]})]})]}),(0,se.jsx)("footer",{className:"ifoot",children:(0,se.jsxs)(nr,{children:[(0,se.jsxs)("svg",{viewBox:"0 0 120 70",width:"120",height:"70","aria-hidden":"true",children:[(0,se.jsx)(tn,{x:60,y:68,h:60,lean:-14,seed:91,n:5}),(0,se.jsx)(tn,{x:60,y:68,h:46,lean:16,seed:92,n:4})]}),(0,se.jsxs)("p",{className:"if-names",children:[He.bride," ",(0,se.jsx)("i",{children:"&"})," ",He.groom]}),(0,se.jsxs)("p",{className:"if-note",children:["With love, ",He.family]}),(0,se.jsx)("p",{className:"if-sub",children:"We can't wait to celebrate with you."})]})})]})]})}var Nt=Ht(rr());function a3(){return(0,Nt.jsxs)("div",{className:"chooser",children:[(0,Nt.jsx)("p",{className:"ch-eyebrow",children:"Wedding invitation \xB7 demo"}),(0,Nt.jsxs)("h1",{children:["Aastha ",(0,Nt.jsx)("i",{children:"&"})," Mayank"]}),(0,Nt.jsx)("p",{className:"ch-sub",children:"Sunday, 22 November 2026 \xB7 Rourkela"}),(0,Nt.jsxs)("div",{className:"ch-grid",children:[(0,Nt.jsxs)(ua,{to:"/royal",className:"ch-card ch-royal",children:[(0,Nt.jsx)("span",{className:"ch-tag",children:"Design one"}),(0,Nt.jsx)("b",{children:"Royal"}),(0,Nt.jsx)("span",{children:"Gold and maroon. A palace gate opens into the celebration."})]}),(0,Nt.jsxs)(ua,{to:"/ivory",className:"ch-card ch-ivory",children:[(0,Nt.jsx)("span",{className:"ch-tag",children:"Design two"}),(0,Nt.jsx)("b",{children:"Ivory"}),(0,Nt.jsx)("span",{children:"Quiet, airy and minimal. Gold line work on warm ivory."})]})]}),(0,Nt.jsx)("p",{className:"ch-foot",children:"Tap a design to see the full entrance."})]})}function Qy(){return(0,Nt.jsxs)(r_,{children:[(0,Nt.jsx)(Yu,{path:"/",element:(0,Nt.jsx)(a3,{})}),(0,Nt.jsx)(Yu,{path:"/royal",element:(0,Nt.jsx)(jy,{})}),(0,Nt.jsx)(Yu,{path:"/ivory",element:(0,Nt.jsx)(Jy,{})})]})}var tx=Ht(rr()),Ky=new URLSearchParams(location.search).get("vh");if(Ky){let e=document.createElement("style");e.textContent=`.hero,.ivhero{min-height:${Ky}px!important}`,document.head.appendChild(e)}(0,ex.createRoot)(document.getElementById("root")).render((0,tx.jsx)(Qy,{}));})();
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
