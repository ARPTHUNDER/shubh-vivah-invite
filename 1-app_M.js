(()=>{var rx=Object.create;var hm=Object.defineProperty;var ix=Object.getOwnPropertyDescriptor;var nx=Object.getOwnPropertyNames;var ax=Object.getPrototypeOf,sx=Object.prototype.hasOwnProperty;var Li=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(r){throw t=0,r}};var ox=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of nx(t))!sx.call(e,n)&&n!==r&&hm(e,n,{get:()=>t[n],enumerable:!(i=ix(t,n))||i.enumerable});return e};var lr=(e,t,r)=>(r=e!=null?rx(ax(e)):{},ox(t||!e||!e.__esModule?hm(r,"default",{value:e,enumerable:!0}):r,e));var Em=Li(lt=>{"use strict";var qs=Symbol.for("react.element"),lx=Symbol.for("react.portal"),ux=Symbol.for("react.fragment"),cx=Symbol.for("react.strict_mode"),hx=Symbol.for("react.profiler"),dx=Symbol.for("react.provider"),px=Symbol.for("react.context"),fx=Symbol.for("react.forward_ref"),mx=Symbol.for("react.suspense"),gx=Symbol.for("react.memo"),vx=Symbol.for("react.lazy"),dm=Symbol.iterator;function _x(e){return e===null||typeof e!="object"?null:(e=dm&&e[dm]||e["@@iterator"],typeof e=="function"?e:null)}var mm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gm=Object.assign,vm={};function wa(e,t,r){this.props=e,this.context=t,this.refs=vm,this.updater=r||mm}wa.prototype.isReactComponent={};wa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _m(){}_m.prototype=wa.prototype;function Hc(e,t,r){this.props=e,this.context=t,this.refs=vm,this.updater=r||mm}var Gc=Hc.prototype=new _m;Gc.constructor=Hc;gm(Gc,wa.prototype);Gc.isPureReactComponent=!0;var pm=Array.isArray,ym=Object.prototype.hasOwnProperty,Wc={current:null},xm={key:!0,ref:!0,__self:!0,__source:!0};function Mm(e,t,r){var i,n={},a=null,s=null;if(t!=null)for(i in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)ym.call(t,i)&&!xm.hasOwnProperty(i)&&(n[i]=t[i]);var o=arguments.length-2;if(o===1)n.children=r;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];n.children=l}if(e&&e.defaultProps)for(i in o=e.defaultProps,o)n[i]===void 0&&(n[i]=o[i]);return{$$typeof:qs,type:e,key:a,ref:s,props:n,_owner:Wc.current}}function yx(e,t){return{$$typeof:qs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xc(e){return typeof e=="object"&&e!==null&&e.$$typeof===qs}function xx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var fm=/\/+/g;function Vc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xx(""+e.key):t.toString(36)}function vl(e,t,r,i,n){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case qs:case lx:s=!0}}if(s)return s=e,n=n(s),e=i===""?"."+Vc(s,0):i,pm(n)?(r="",e!=null&&(r=e.replace(fm,"$&/")+"/"),vl(n,t,r,"",function(u){return u})):n!=null&&(Xc(n)&&(n=yx(n,r+(!n.key||s&&s.key===n.key?"":(""+n.key).replace(fm,"$&/")+"/")+e)),t.push(n)),1;if(s=0,i=i===""?".":i+":",pm(e))for(var o=0;o<e.length;o++){a=e[o];var l=i+Vc(a,o);s+=vl(a,t,r,l,n)}else if(l=_x(e),typeof l=="function")for(e=l.call(e),o=0;!(a=e.next()).done;)a=a.value,l=i+Vc(a,o++),s+=vl(a,t,r,l,n);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function gl(e,t,r){if(e==null)return e;var i=[],n=0;return vl(e,i,"","",function(a){return t.call(r,a,n++)}),i}function Mx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _r={current:null},_l={transition:null},Sx={ReactCurrentDispatcher:_r,ReactCurrentBatchConfig:_l,ReactCurrentOwner:Wc};function Sm(){throw Error("act(...) is not supported in production builds of React.")}lt.Children={map:gl,forEach:function(e,t,r){gl(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return gl(e,function(){t++}),t},toArray:function(e){return gl(e,function(t){return t})||[]},only:function(e){if(!Xc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};lt.Component=wa;lt.Fragment=ux;lt.Profiler=hx;lt.PureComponent=Hc;lt.StrictMode=cx;lt.Suspense=mx;lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sx;lt.act=Sm;lt.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=gm({},e.props),n=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=Wc.current),t.key!==void 0&&(n=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(l in t)ym.call(t,l)&&!xm.hasOwnProperty(l)&&(i[l]=t[l]===void 0&&o!==void 0?o[l]:t[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:qs,type:e.type,key:n,ref:a,props:i,_owner:s}};lt.createContext=function(e){return e={$$typeof:px,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:dx,_context:e},e.Consumer=e};lt.createElement=Mm;lt.createFactory=function(e){var t=Mm.bind(null,e);return t.type=e,t};lt.createRef=function(){return{current:null}};lt.forwardRef=function(e){return{$$typeof:fx,render:e}};lt.isValidElement=Xc;lt.lazy=function(e){return{$$typeof:vx,_payload:{_status:-1,_result:e},_init:Mx}};lt.memo=function(e,t){return{$$typeof:gx,type:e,compare:t===void 0?null:t}};lt.startTransition=function(e){var t=_l.transition;_l.transition={};try{e()}finally{_l.transition=t}};lt.unstable_act=Sm;lt.useCallback=function(e,t){return _r.current.useCallback(e,t)};lt.useContext=function(e){return _r.current.useContext(e)};lt.useDebugValue=function(){};lt.useDeferredValue=function(e){return _r.current.useDeferredValue(e)};lt.useEffect=function(e,t){return _r.current.useEffect(e,t)};lt.useId=function(){return _r.current.useId()};lt.useImperativeHandle=function(e,t,r){return _r.current.useImperativeHandle(e,t,r)};lt.useInsertionEffect=function(e,t){return _r.current.useInsertionEffect(e,t)};lt.useLayoutEffect=function(e,t){return _r.current.useLayoutEffect(e,t)};lt.useMemo=function(e,t){return _r.current.useMemo(e,t)};lt.useReducer=function(e,t,r){return _r.current.useReducer(e,t,r)};lt.useRef=function(e){return _r.current.useRef(e)};lt.useState=function(e){return _r.current.useState(e)};lt.useSyncExternalStore=function(e,t,r){return _r.current.useSyncExternalStore(e,t,r)};lt.useTransition=function(){return _r.current.useTransition()};lt.version="18.3.1"});var Ta=Li((lR,wm)=>{"use strict";wm.exports=Em()});var Dm=Li(St=>{"use strict";function Yc(e,t){var r=e.length;e.push(t);e:for(;0<r;){var i=r-1>>>1,n=e[i];if(0<yl(n,t))e[i]=t,e[r]=n,r=i;else break e}}function ai(e){return e.length===0?null:e[0]}function Ml(e){if(e.length===0)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;e:for(var i=0,n=e.length,a=n>>>1;i<a;){var s=2*(i+1)-1,o=e[s],l=s+1,u=e[l];if(0>yl(o,r))l<n&&0>yl(u,o)?(e[i]=u,e[l]=r,i=l):(e[i]=o,e[s]=r,i=s);else if(l<n&&0>yl(u,r))e[i]=u,e[l]=r,i=l;else break e}}return t}function yl(e,t){var r=e.sortIndex-t.sortIndex;return r!==0?r:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Tm=performance,St.unstable_now=function(){return Tm.now()}):(jc=Date,bm=jc.now(),St.unstable_now=function(){return jc.now()-bm});var Tm,jc,bm,xi=[],un=[],Ex=1,Yr=null,ur=3,Sl=!1,Wn=!1,Ks=!1,Rm=typeof setTimeout=="function"?setTimeout:null,Pm=typeof clearTimeout=="function"?clearTimeout:null,Am=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Kc(e){for(var t=ai(un);t!==null;){if(t.callback===null)Ml(un);else if(t.startTime<=e)Ml(un),t.sortIndex=t.expirationTime,Yc(xi,t);else break;t=ai(un)}}function Jc(e){if(Ks=!1,Kc(e),!Wn)if(ai(xi)!==null)Wn=!0,Zc(Qc);else{var t=ai(un);t!==null&&eh(Jc,t.startTime-e)}}function Qc(e,t){Wn=!1,Ks&&(Ks=!1,Pm(Js),Js=-1),Sl=!0;var r=ur;try{for(Kc(t),Yr=ai(xi);Yr!==null&&(!(Yr.expirationTime>t)||e&&!Im());){var i=Yr.callback;if(typeof i=="function"){Yr.callback=null,ur=Yr.priorityLevel;var n=i(Yr.expirationTime<=t);t=St.unstable_now(),typeof n=="function"?Yr.callback=n:Yr===ai(xi)&&Ml(xi),Kc(t)}else Ml(xi);Yr=ai(xi)}if(Yr!==null)var a=!0;else{var s=ai(un);s!==null&&eh(Jc,s.startTime-t),a=!1}return a}finally{Yr=null,ur=r,Sl=!1}}var El=!1,xl=null,Js=-1,Nm=5,Lm=-1;function Im(){return!(St.unstable_now()-Lm<Nm)}function $c(){if(xl!==null){var e=St.unstable_now();Lm=e;var t=!0;try{t=xl(!0,e)}finally{t?Ys():(El=!1,xl=null)}}else El=!1}var Ys;typeof Am=="function"?Ys=function(){Am($c)}:typeof MessageChannel<"u"?(qc=new MessageChannel,Cm=qc.port2,qc.port1.onmessage=$c,Ys=function(){Cm.postMessage(null)}):Ys=function(){Rm($c,0)};var qc,Cm;function Zc(e){xl=e,El||(El=!0,Ys())}function eh(e,t){Js=Rm(function(){e(St.unstable_now())},t)}St.unstable_IdlePriority=5;St.unstable_ImmediatePriority=1;St.unstable_LowPriority=4;St.unstable_NormalPriority=3;St.unstable_Profiling=null;St.unstable_UserBlockingPriority=2;St.unstable_cancelCallback=function(e){e.callback=null};St.unstable_continueExecution=function(){Wn||Sl||(Wn=!0,Zc(Qc))};St.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Nm=0<e?Math.floor(1e3/e):5};St.unstable_getCurrentPriorityLevel=function(){return ur};St.unstable_getFirstCallbackNode=function(){return ai(xi)};St.unstable_next=function(e){switch(ur){case 1:case 2:case 3:var t=3;break;default:t=ur}var r=ur;ur=t;try{return e()}finally{ur=r}};St.unstable_pauseExecution=function(){};St.unstable_requestPaint=function(){};St.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=ur;ur=e;try{return t()}finally{ur=r}};St.unstable_scheduleCallback=function(e,t,r){var i=St.unstable_now();switch(typeof r=="object"&&r!==null?(r=r.delay,r=typeof r=="number"&&0<r?i+r:i):r=i,e){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=r+n,e={id:Ex++,callback:t,priorityLevel:e,startTime:r,expirationTime:n,sortIndex:-1},r>i?(e.sortIndex=r,Yc(un,e),ai(xi)===null&&e===ai(un)&&(Ks?(Pm(Js),Js=-1):Ks=!0,eh(Jc,r-i))):(e.sortIndex=n,Yc(xi,e),Wn||Sl||(Wn=!0,Zc(Qc))),e};St.unstable_shouldYield=Im;St.unstable_wrapCallback=function(e){var t=ur;return function(){var r=ur;ur=t;try{return e.apply(this,arguments)}finally{ur=r}}}});var Om=Li((cR,Um)=>{"use strict";Um.exports=Dm()});var Bv=Li(Br=>{"use strict";var wx=Ta(),Fr=Om();function ue(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gg=new Set,xo={};function ia(e,t){ja(e,t),ja(e+"Capture",t)}function ja(e,t){for(xo[e]=t,e=0;e<t.length;e++)Gg.add(t[e])}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eh=Object.prototype.hasOwnProperty,Tx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,km={},Fm={};function bx(e){return Eh.call(Fm,e)?!0:Eh.call(km,e)?!1:Tx.test(e)?Fm[e]=!0:(km[e]=!0,!1)}function Ax(e,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cx(e,t,r,i){if(t===null||typeof t>"u"||Ax(e,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Mr(e,t,r,i,n,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=n,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var sr={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){sr[e]=new Mr(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];sr[t]=new Mr(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){sr[e]=new Mr(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){sr[e]=new Mr(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){sr[e]=new Mr(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){sr[e]=new Mr(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){sr[e]=new Mr(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){sr[e]=new Mr(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){sr[e]=new Mr(e,5,!1,e.toLowerCase(),null,!1,!1)});var md=/[\-:]([a-z])/g;function gd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(md,gd);sr[t]=new Mr(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(md,gd);sr[t]=new Mr(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(md,gd);sr[t]=new Mr(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){sr[e]=new Mr(e,1,!1,e.toLowerCase(),null,!1,!1)});sr.xlinkHref=new Mr("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){sr[e]=new Mr(e,1,!1,e.toLowerCase(),null,!0,!0)});function vd(e,t,r,i){var n=sr.hasOwnProperty(t)?sr[t]:null;(n!==null?n.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Cx(t,r,n,i)&&(r=null),i||n===null?bx(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):n.mustUseProperty?e[n.propertyName]=r===null?n.type===3?!1:"":r:(t=n.attributeName,i=n.attributeNamespace,r===null?e.removeAttribute(t):(n=n.type,r=n===3||n===4&&r===!0?"":""+r,i?e.setAttributeNS(i,t,r):e.setAttribute(t,r))))}var Hi=wx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wl=Symbol.for("react.element"),Ca=Symbol.for("react.portal"),Ra=Symbol.for("react.fragment"),_d=Symbol.for("react.strict_mode"),wh=Symbol.for("react.profiler"),Wg=Symbol.for("react.provider"),Xg=Symbol.for("react.context"),yd=Symbol.for("react.forward_ref"),Th=Symbol.for("react.suspense"),bh=Symbol.for("react.suspense_list"),xd=Symbol.for("react.memo"),hn=Symbol.for("react.lazy"),jg=Symbol.for("react.offscreen"),zm=Symbol.iterator;function Qs(e){return e===null||typeof e!="object"?null:(e=zm&&e[zm]||e["@@iterator"],typeof e=="function"?e:null)}var kt=Object.assign,th;function so(e){if(th===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);th=t&&t[1]||""}return`
`+th+e}var rh=!1;function ih(e,t){if(!e||rh)return"";rh=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var i=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){i=u}e.call(t.prototype)}else{try{throw Error()}catch(u){i=u}e()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var n=u.stack.split(`
`),a=i.stack.split(`
`),s=n.length-1,o=a.length-1;1<=s&&0<=o&&n[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(n[s]!==a[o]){if(s!==1||o!==1)do if(s--,o--,0>o||n[s]!==a[o]){var l=`
`+n[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=o);break}}}finally{rh=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?so(e):""}function Rx(e){switch(e.tag){case 5:return so(e.type);case 16:return so("Lazy");case 13:return so("Suspense");case 19:return so("SuspenseList");case 0:case 2:case 15:return e=ih(e.type,!1),e;case 11:return e=ih(e.type.render,!1),e;case 1:return e=ih(e.type,!0),e;default:return""}}function Ah(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ra:return"Fragment";case Ca:return"Portal";case wh:return"Profiler";case _d:return"StrictMode";case Th:return"Suspense";case bh:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xg:return(e.displayName||"Context")+".Consumer";case Wg:return(e._context.displayName||"Context")+".Provider";case yd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xd:return t=e.displayName||null,t!==null?t:Ah(e.type)||"Memo";case hn:t=e._payload,e=e._init;try{return Ah(e(t))}catch{}}return null}function Px(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ah(t);case 8:return t===_d?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $g(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Nx(e){var t=$g(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var n=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(s){i=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Tl(e){e._valueTracker||(e._valueTracker=Nx(e))}function qg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=$g(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function Zl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ch(e,t){var r=t.checked;return kt({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Bm(e,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=Tn(t.value!=null?t.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Yg(e,t){t=t.checked,t!=null&&vd(e,"checked",t,!1)}function Rh(e,t){Yg(e,t);var r=Tn(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ph(e,t.type,r):t.hasOwnProperty("defaultValue")&&Ph(e,t.type,Tn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vm(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Ph(e,t,r){(t!=="number"||Zl(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var oo=Array.isArray;function Ba(e,t,r,i){if(e=e.options,t){t={};for(var n=0;n<r.length;n++)t["$"+r[n]]=!0;for(r=0;r<e.length;r++)n=t.hasOwnProperty("$"+e[r].value),e[r].selected!==n&&(e[r].selected=n),n&&i&&(e[r].defaultSelected=!0)}else{for(r=""+Tn(r),t=null,n=0;n<e.length;n++){if(e[n].value===r){e[n].selected=!0,i&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Nh(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(ue(91));return kt({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hm(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(ue(92));if(oo(r)){if(1<r.length)throw Error(ue(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Tn(r)}}function Kg(e,t){var r=Tn(t.value),i=Tn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function Gm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lh(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bl,Qg=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,n){MSApp.execUnsafeLocalFunction(function(){return e(t,r,i,n)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(bl=bl||document.createElement("div"),bl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=bl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mo(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lx=["Webkit","ms","Moz","O"];Object.keys(co).forEach(function(e){Lx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),co[t]=co[e]})});function Zg(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||co.hasOwnProperty(e)&&co[e]?(""+t).trim():t+"px"}function e0(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,n=Zg(r,t[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,n):e[r]=n}}var Ix=kt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ih(e,t){if(t){if(Ix[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(ue(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(ue(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(ue(61))}if(t.style!=null&&typeof t.style!="object")throw Error(ue(62))}}function Dh(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uh=null;function Md(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Oh=null,Va=null,Ha=null;function Wm(e){if(e=zo(e)){if(typeof Oh!="function")throw Error(ue(280));var t=e.stateNode;t&&(t=Au(t),Oh(e.stateNode,e.type,t))}}function t0(e){Va?Ha?Ha.push(e):Ha=[e]:Va=e}function r0(){if(Va){var e=Va,t=Ha;if(Ha=Va=null,Wm(e),t)for(e=0;e<t.length;e++)Wm(t[e])}}function i0(e,t){return e(t)}function n0(){}var nh=!1;function a0(e,t,r){if(nh)return e(t,r);nh=!0;try{return i0(e,t,r)}finally{nh=!1,(Va!==null||Ha!==null)&&(n0(),r0())}}function So(e,t){var r=e.stateNode;if(r===null)return null;var i=Au(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(ue(231,t,typeof r));return r}var kh=!1;if(Fi)try{ba={},Object.defineProperty(ba,"passive",{get:function(){kh=!0}}),window.addEventListener("test",ba,ba),window.removeEventListener("test",ba,ba)}catch{kh=!1}var ba;function Dx(e,t,r,i,n,a,s,o,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(c){this.onError(c)}}var ho=!1,eu=null,tu=!1,Fh=null,Ux={onError:function(e){ho=!0,eu=e}};function Ox(e,t,r,i,n,a,s,o,l){ho=!1,eu=null,Dx.apply(Ux,arguments)}function kx(e,t,r,i,n,a,s,o,l){if(Ox.apply(this,arguments),ho){if(ho){var u=eu;ho=!1,eu=null}else throw Error(ue(198));tu||(tu=!0,Fh=u)}}function na(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function s0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xm(e){if(na(e)!==e)throw Error(ue(188))}function Fx(e){var t=e.alternate;if(!t){if(t=na(e),t===null)throw Error(ue(188));return t!==e?null:e}for(var r=e,i=t;;){var n=r.return;if(n===null)break;var a=n.alternate;if(a===null){if(i=n.return,i!==null){r=i;continue}break}if(n.child===a.child){for(a=n.child;a;){if(a===r)return Xm(n),e;if(a===i)return Xm(n),t;a=a.sibling}throw Error(ue(188))}if(r.return!==i.return)r=n,i=a;else{for(var s=!1,o=n.child;o;){if(o===r){s=!0,r=n,i=a;break}if(o===i){s=!0,i=n,r=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===r){s=!0,r=a,i=n;break}if(o===i){s=!0,i=a,r=n;break}o=o.sibling}if(!s)throw Error(ue(189))}}if(r.alternate!==i)throw Error(ue(190))}if(r.tag!==3)throw Error(ue(188));return r.stateNode.current===r?e:t}function o0(e){return e=Fx(e),e!==null?l0(e):null}function l0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=l0(e);if(t!==null)return t;e=e.sibling}return null}var u0=Fr.unstable_scheduleCallback,jm=Fr.unstable_cancelCallback,zx=Fr.unstable_shouldYield,Bx=Fr.unstable_requestPaint,Vt=Fr.unstable_now,Vx=Fr.unstable_getCurrentPriorityLevel,Sd=Fr.unstable_ImmediatePriority,c0=Fr.unstable_UserBlockingPriority,ru=Fr.unstable_NormalPriority,Hx=Fr.unstable_LowPriority,h0=Fr.unstable_IdlePriority,Eu=null,wi=null;function Gx(e){if(wi&&typeof wi.onCommitFiberRoot=="function")try{wi.onCommitFiberRoot(Eu,e,void 0,(e.current.flags&128)===128)}catch{}}var ci=Math.clz32?Math.clz32:jx,Wx=Math.log,Xx=Math.LN2;function jx(e){return e>>>=0,e===0?32:31-(Wx(e)/Xx|0)|0}var Al=64,Cl=4194304;function lo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function iu(e,t){var r=e.pendingLanes;if(r===0)return 0;var i=0,n=e.suspendedLanes,a=e.pingedLanes,s=r&268435455;if(s!==0){var o=s&~n;o!==0?i=lo(o):(a&=s,a!==0&&(i=lo(a)))}else s=r&~n,s!==0?i=lo(s):a!==0&&(i=lo(a));if(i===0)return 0;if(t!==0&&t!==i&&(t&n)===0&&(n=i&-i,a=t&-t,n>=a||n===16&&(a&4194240)!==0))return t;if((i&4)!==0&&(i|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)r=31-ci(t),n=1<<r,i|=e[r],t&=~n;return i}function $x(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qx(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,n=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-ci(a),o=1<<s,l=n[s];l===-1?((o&r)===0||(o&i)!==0)&&(n[s]=$x(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}}function zh(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function d0(){var e=Al;return Al<<=1,(Al&4194240)===0&&(Al=64),e}function ah(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ko(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ci(t),e[t]=r}function Yx(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var n=31-ci(r),a=1<<n;t[n]=0,i[n]=-1,e[n]=-1,r&=~a}}function Ed(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-ci(r),n=1<<i;n&t|e[i]&t&&(e[i]|=t),r&=~n}}var gt=0;function p0(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var f0,wd,m0,g0,v0,Bh=!1,Rl=[],vn=null,_n=null,yn=null,Eo=new Map,wo=new Map,pn=[],Kx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $m(e,t){switch(e){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":_n=null;break;case"mouseover":case"mouseout":yn=null;break;case"pointerover":case"pointerout":Eo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(t.pointerId)}}function Zs(e,t,r,i,n,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:a,targetContainers:[n]},t!==null&&(t=zo(t),t!==null&&wd(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Jx(e,t,r,i,n){switch(t){case"focusin":return vn=Zs(vn,e,t,r,i,n),!0;case"dragenter":return _n=Zs(_n,e,t,r,i,n),!0;case"mouseover":return yn=Zs(yn,e,t,r,i,n),!0;case"pointerover":var a=n.pointerId;return Eo.set(a,Zs(Eo.get(a)||null,e,t,r,i,n)),!0;case"gotpointercapture":return a=n.pointerId,wo.set(a,Zs(wo.get(a)||null,e,t,r,i,n)),!0}return!1}function _0(e){var t=$n(e.target);if(t!==null){var r=na(t);if(r!==null){if(t=r.tag,t===13){if(t=s0(r),t!==null){e.blockedOn=t,v0(e.priority,function(){m0(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Vh(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);Uh=i,r.target.dispatchEvent(i),Uh=null}else return t=zo(r),t!==null&&wd(t),e.blockedOn=r,!1;t.shift()}return!0}function qm(e,t,r){Gl(e)&&r.delete(t)}function Qx(){Bh=!1,vn!==null&&Gl(vn)&&(vn=null),_n!==null&&Gl(_n)&&(_n=null),yn!==null&&Gl(yn)&&(yn=null),Eo.forEach(qm),wo.forEach(qm)}function eo(e,t){e.blockedOn===t&&(e.blockedOn=null,Bh||(Bh=!0,Fr.unstable_scheduleCallback(Fr.unstable_NormalPriority,Qx)))}function To(e){function t(n){return eo(n,e)}if(0<Rl.length){eo(Rl[0],e);for(var r=1;r<Rl.length;r++){var i=Rl[r];i.blockedOn===e&&(i.blockedOn=null)}}for(vn!==null&&eo(vn,e),_n!==null&&eo(_n,e),yn!==null&&eo(yn,e),Eo.forEach(t),wo.forEach(t),r=0;r<pn.length;r++)i=pn[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<pn.length&&(r=pn[0],r.blockedOn===null);)_0(r),r.blockedOn===null&&pn.shift()}var Ga=Hi.ReactCurrentBatchConfig,nu=!0;function Zx(e,t,r,i){var n=gt,a=Ga.transition;Ga.transition=null;try{gt=1,Td(e,t,r,i)}finally{gt=n,Ga.transition=a}}function eM(e,t,r,i){var n=gt,a=Ga.transition;Ga.transition=null;try{gt=4,Td(e,t,r,i)}finally{gt=n,Ga.transition=a}}function Td(e,t,r,i){if(nu){var n=Vh(e,t,r,i);if(n===null)dh(e,t,i,au,r),$m(e,i);else if(Jx(n,e,t,r,i))i.stopPropagation();else if($m(e,i),t&4&&-1<Kx.indexOf(e)){for(;n!==null;){var a=zo(n);if(a!==null&&f0(a),a=Vh(e,t,r,i),a===null&&dh(e,t,i,au,r),a===n)break;n=a}n!==null&&i.stopPropagation()}else dh(e,t,i,null,r)}}var au=null;function Vh(e,t,r,i){if(au=null,e=Md(i),e=$n(e),e!==null)if(t=na(e),t===null)e=null;else if(r=t.tag,r===13){if(e=s0(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return au=e,null}function y0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vx()){case Sd:return 1;case c0:return 4;case ru:case Hx:return 16;case h0:return 536870912;default:return 16}default:return 16}}var mn=null,bd=null,Wl=null;function x0(){if(Wl)return Wl;var e,t=bd,r=t.length,i,n="value"in mn?mn.value:mn.textContent,a=n.length;for(e=0;e<r&&t[e]===n[e];e++);var s=r-e;for(i=1;i<=s&&t[r-i]===n[a-i];i++);return Wl=n.slice(e,1<i?1-i:void 0)}function Xl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pl(){return!0}function Ym(){return!1}function zr(e){function t(r,i,n,a,s){this._reactName=r,this._targetInst=n,this.type=i,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Pl:Ym,this.isPropagationStopped=Ym,this}return kt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Pl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Pl)},persist:function(){},isPersistent:Pl}),t}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ad=zr(Za),Fo=kt({},Za,{view:0,detail:0}),tM=zr(Fo),sh,oh,to,wu=kt({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==to&&(to&&e.type==="mousemove"?(sh=e.screenX-to.screenX,oh=e.screenY-to.screenY):oh=sh=0,to=e),sh)},movementY:function(e){return"movementY"in e?e.movementY:oh}}),Km=zr(wu),rM=kt({},wu,{dataTransfer:0}),iM=zr(rM),nM=kt({},Fo,{relatedTarget:0}),lh=zr(nM),aM=kt({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),sM=zr(aM),oM=kt({},Za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lM=zr(oM),uM=kt({},Za,{data:0}),Jm=zr(uM),cM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pM(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dM[e])?!!t[e]:!1}function Cd(){return pM}var fM=kt({},Fo,{key:function(e){if(e.key){var t=cM[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cd,charCode:function(e){return e.type==="keypress"?Xl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mM=zr(fM),gM=kt({},wu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qm=zr(gM),vM=kt({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cd}),_M=zr(vM),yM=kt({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),xM=zr(yM),MM=kt({},wu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),SM=zr(MM),EM=[9,13,27,32],Rd=Fi&&"CompositionEvent"in window,po=null;Fi&&"documentMode"in document&&(po=document.documentMode);var wM=Fi&&"TextEvent"in window&&!po,M0=Fi&&(!Rd||po&&8<po&&11>=po),Zm=" ",eg=!1;function S0(e,t){switch(e){case"keyup":return EM.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function E0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pa=!1;function TM(e,t){switch(e){case"compositionend":return E0(t);case"keypress":return t.which!==32?null:(eg=!0,Zm);case"textInput":return e=t.data,e===Zm&&eg?null:e;default:return null}}function bM(e,t){if(Pa)return e==="compositionend"||!Rd&&S0(e,t)?(e=x0(),Wl=bd=mn=null,Pa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return M0&&t.locale!=="ko"?null:t.data;default:return null}}var AM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!AM[e.type]:t==="textarea"}function w0(e,t,r,i){t0(i),t=su(t,"onChange"),0<t.length&&(r=new Ad("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var fo=null,bo=null;function CM(e){U0(e,0)}function Tu(e){var t=Ia(e);if(qg(t))return e}function RM(e,t){if(e==="change")return t}var T0=!1;Fi&&(Fi?(Ll="oninput"in document,Ll||(uh=document.createElement("div"),uh.setAttribute("oninput","return;"),Ll=typeof uh.oninput=="function"),Nl=Ll):Nl=!1,T0=Nl&&(!document.documentMode||9<document.documentMode));var Nl,Ll,uh;function rg(){fo&&(fo.detachEvent("onpropertychange",b0),bo=fo=null)}function b0(e){if(e.propertyName==="value"&&Tu(bo)){var t=[];w0(t,bo,e,Md(e)),a0(CM,t)}}function PM(e,t,r){e==="focusin"?(rg(),fo=t,bo=r,fo.attachEvent("onpropertychange",b0)):e==="focusout"&&rg()}function NM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tu(bo)}function LM(e,t){if(e==="click")return Tu(t)}function IM(e,t){if(e==="input"||e==="change")return Tu(t)}function DM(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var di=typeof Object.is=="function"?Object.is:DM;function Ao(e,t){if(di(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var n=r[i];if(!Eh.call(t,n)||!di(e[n],t[n]))return!1}return!0}function ig(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ng(e,t){var r=ig(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ig(r)}}function A0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?A0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function C0(){for(var e=window,t=Zl();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Zl(e.document)}return t}function Pd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function UM(e){var t=C0(),r=e.focusedElem,i=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&A0(r.ownerDocument.documentElement,r)){if(i!==null&&Pd(r)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var n=r.textContent.length,a=Math.min(i.start,n);i=i.end===void 0?a:Math.min(i.end,n),!e.extend&&a>i&&(n=i,i=a,a=n),n=ng(r,a);var s=ng(r,i);n&&s&&(e.rangeCount!==1||e.anchorNode!==n.node||e.anchorOffset!==n.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(n.node,n.offset),e.removeAllRanges(),a>i?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var OM=Fi&&"documentMode"in document&&11>=document.documentMode,Na=null,Hh=null,mo=null,Gh=!1;function ag(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Gh||Na==null||Na!==Zl(i)||(i=Na,"selectionStart"in i&&Pd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),mo&&Ao(mo,i)||(mo=i,i=su(Hh,"onSelect"),0<i.length&&(t=new Ad("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=Na)))}function Il(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var La={animationend:Il("Animation","AnimationEnd"),animationiteration:Il("Animation","AnimationIteration"),animationstart:Il("Animation","AnimationStart"),transitionend:Il("Transition","TransitionEnd")},ch={},R0={};Fi&&(R0=document.createElement("div").style,"AnimationEvent"in window||(delete La.animationend.animation,delete La.animationiteration.animation,delete La.animationstart.animation),"TransitionEvent"in window||delete La.transitionend.transition);function bu(e){if(ch[e])return ch[e];if(!La[e])return e;var t=La[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in R0)return ch[e]=t[r];return e}var P0=bu("animationend"),N0=bu("animationiteration"),L0=bu("animationstart"),I0=bu("transitionend"),D0=new Map,sg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(e,t){D0.set(e,t),ia(t,[e])}for(Dl=0;Dl<sg.length;Dl++)Ul=sg[Dl],og=Ul.toLowerCase(),lg=Ul[0].toUpperCase()+Ul.slice(1),An(og,"on"+lg);var Ul,og,lg,Dl;An(P0,"onAnimationEnd");An(N0,"onAnimationIteration");An(L0,"onAnimationStart");An("dblclick","onDoubleClick");An("focusin","onFocus");An("focusout","onBlur");An(I0,"onTransitionEnd");ja("onMouseEnter",["mouseout","mouseover"]);ja("onMouseLeave",["mouseout","mouseover"]);ja("onPointerEnter",["pointerout","pointerover"]);ja("onPointerLeave",["pointerout","pointerover"]);ia("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ia("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ia("onBeforeInput",["compositionend","keypress","textInput","paste"]);ia("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ia("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ia("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kM=new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));function ug(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,kx(i,t,void 0,e),e.currentTarget=null}function U0(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],n=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==a&&n.isPropagationStopped())break e;ug(n,o,u),a=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,u=o.currentTarget,o=o.listener,l!==a&&n.isPropagationStopped())break e;ug(n,o,u),a=l}}}if(tu)throw e=Fh,tu=!1,Fh=null,e}function Ct(e,t){var r=t[qh];r===void 0&&(r=t[qh]=new Set);var i=e+"__bubble";r.has(i)||(O0(t,e,2,!1),r.add(i))}function hh(e,t,r){var i=0;t&&(i|=4),O0(r,e,i,t)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function Co(e){if(!e[Ol]){e[Ol]=!0,Gg.forEach(function(r){r!=="selectionchange"&&(kM.has(r)||hh(r,!1,e),hh(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ol]||(t[Ol]=!0,hh("selectionchange",!1,t))}}function O0(e,t,r,i){switch(y0(t)){case 1:var n=Zx;break;case 4:n=eM;break;default:n=Td}r=n.bind(null,t,r,e),n=void 0,!kh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),i?n!==void 0?e.addEventListener(t,r,{capture:!0,passive:n}):e.addEventListener(t,r,!0):n!==void 0?e.addEventListener(t,r,{passive:n}):e.addEventListener(t,r,!1)}function dh(e,t,r,i,n){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===n||o.nodeType===8&&o.parentNode===n)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===n||l.nodeType===8&&l.parentNode===n))return;s=s.return}for(;o!==null;){if(s=$n(o),s===null)return;if(l=s.tag,l===5||l===6){i=a=s;continue e}o=o.parentNode}}i=i.return}a0(function(){var u=a,c=Md(r),h=[];e:{var p=D0.get(e);if(p!==void 0){var f=Ad,y=e;switch(e){case"keypress":if(Xl(r)===0)break e;case"keydown":case"keyup":f=mM;break;case"focusin":y="focus",f=lh;break;case"focusout":y="blur",f=lh;break;case"beforeblur":case"afterblur":f=lh;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Km;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=iM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=_M;break;case P0:case N0:case L0:f=sM;break;case I0:f=xM;break;case"scroll":f=tM;break;case"wheel":f=SM;break;case"copy":case"cut":case"paste":f=lM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Qm}var _=(t&4)!==0,v=!_&&e==="scroll",d=_?p!==null?p+"Capture":null:p;_=[];for(var g=u,m;g!==null;){m=g;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,d!==null&&(x=So(g,d),x!=null&&_.push(Ro(g,x,m)))),v)break;g=g.return}0<_.length&&(p=new f(p,y,null,r,c),h.push({event:p,listeners:_}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",p&&r!==Uh&&(y=r.relatedTarget||r.fromElement)&&($n(y)||y[zi]))break e;if((f||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,f?(y=r.relatedTarget||r.toElement,f=u,y=y?$n(y):null,y!==null&&(v=na(y),y!==v||y.tag!==5&&y.tag!==6)&&(y=null)):(f=null,y=u),f!==y)){if(_=Km,x="onMouseLeave",d="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(_=Qm,x="onPointerLeave",d="onPointerEnter",g="pointer"),v=f==null?p:Ia(f),m=y==null?p:Ia(y),p=new _(x,g+"leave",f,r,c),p.target=v,p.relatedTarget=m,x=null,$n(c)===u&&(_=new _(d,g+"enter",y,r,c),_.target=m,_.relatedTarget=v,x=_),v=x,f&&y)t:{for(_=f,d=y,g=0,m=_;m;m=Aa(m))g++;for(m=0,x=d;x;x=Aa(x))m++;for(;0<g-m;)_=Aa(_),g--;for(;0<m-g;)d=Aa(d),m--;for(;g--;){if(_===d||d!==null&&_===d.alternate)break t;_=Aa(_),d=Aa(d)}_=null}else _=null;f!==null&&cg(h,p,f,_,!1),y!==null&&v!==null&&cg(h,v,y,_,!0)}}e:{if(p=u?Ia(u):window,f=p.nodeName&&p.nodeName.toLowerCase(),f==="select"||f==="input"&&p.type==="file")var P=RM;else if(tg(p))if(T0)P=IM;else{P=NM;var T=PM}else(f=p.nodeName)&&f.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(P=LM);if(P&&(P=P(e,u))){w0(h,P,r,c);break e}T&&T(e,p,u),e==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&Ph(p,"number",p.value)}switch(T=u?Ia(u):window,e){case"focusin":(tg(T)||T.contentEditable==="true")&&(Na=T,Hh=u,mo=null);break;case"focusout":mo=Hh=Na=null;break;case"mousedown":Gh=!0;break;case"contextmenu":case"mouseup":case"dragend":Gh=!1,ag(h,r,c);break;case"selectionchange":if(OM)break;case"keydown":case"keyup":ag(h,r,c)}var b;if(Rd)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Pa?S0(e,r)&&(R="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(R="onCompositionStart");R&&(M0&&r.locale!=="ko"&&(Pa||R!=="onCompositionStart"?R==="onCompositionEnd"&&Pa&&(b=x0()):(mn=c,bd="value"in mn?mn.value:mn.textContent,Pa=!0)),T=su(u,R),0<T.length&&(R=new Jm(R,e,null,r,c),h.push({event:R,listeners:T}),b?R.data=b:(b=E0(r),b!==null&&(R.data=b)))),(b=wM?TM(e,r):bM(e,r))&&(u=su(u,"onBeforeInput"),0<u.length&&(c=new Jm("onBeforeInput","beforeinput",null,r,c),h.push({event:c,listeners:u}),c.data=b))}U0(h,t)})}function Ro(e,t,r){return{instance:e,listener:t,currentTarget:r}}function su(e,t){for(var r=t+"Capture",i=[];e!==null;){var n=e,a=n.stateNode;n.tag===5&&a!==null&&(n=a,a=So(e,r),a!=null&&i.unshift(Ro(e,a,n)),a=So(e,t),a!=null&&i.push(Ro(e,a,n))),e=e.return}return i}function Aa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cg(e,t,r,i,n){for(var a=t._reactName,s=[];r!==null&&r!==i;){var o=r,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,n?(l=So(r,a),l!=null&&s.unshift(Ro(r,l,o))):n||(l=So(r,a),l!=null&&s.push(Ro(r,l,o)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var FM=/\r\n?/g,zM=/\u0000|\uFFFD/g;function hg(e){return(typeof e=="string"?e:""+e).replace(FM,`
`).replace(zM,"")}function kl(e,t,r){if(t=hg(t),hg(e)!==t&&r)throw Error(ue(425))}function ou(){}var Wh=null,Xh=null;function jh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $h=typeof setTimeout=="function"?setTimeout:void 0,BM=typeof clearTimeout=="function"?clearTimeout:void 0,dg=typeof Promise=="function"?Promise:void 0,VM=typeof queueMicrotask=="function"?queueMicrotask:typeof dg<"u"?function(e){return dg.resolve(null).then(e).catch(HM)}:$h;function HM(e){setTimeout(function(){throw e})}function ph(e,t){var r=t,i=0;do{var n=r.nextSibling;if(e.removeChild(r),n&&n.nodeType===8)if(r=n.data,r==="/$"){if(i===0){e.removeChild(n),To(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=n}while(r);To(t)}function xn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var es=Math.random().toString(36).slice(2),Ei="__reactFiber$"+es,Po="__reactProps$"+es,zi="__reactContainer$"+es,qh="__reactEvents$"+es,GM="__reactListeners$"+es,WM="__reactHandles$"+es;function $n(e){var t=e[Ei];if(t)return t;for(var r=e.parentNode;r;){if(t=r[zi]||r[Ei]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=pg(e);e!==null;){if(r=e[Ei])return r;e=pg(e)}return t}e=r,r=e.parentNode}return null}function zo(e){return e=e[Ei]||e[zi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ia(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(ue(33))}function Au(e){return e[Po]||null}var Yh=[],Da=-1;function Cn(e){return{current:e}}function Rt(e){0>Da||(e.current=Yh[Da],Yh[Da]=null,Da--)}function Et(e,t){Da++,Yh[Da]=e.current,e.current=t}var bn={},pr=Cn(bn),Nr=Cn(!1),Qn=bn;function $a(e,t){var r=e.type.contextTypes;if(!r)return bn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var n={},a;for(a in r)n[a]=t[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=n),n}function Lr(e){return e=e.childContextTypes,e!=null}function lu(){Rt(Nr),Rt(pr)}function fg(e,t,r){if(pr.current!==bn)throw Error(ue(168));Et(pr,t),Et(Nr,r)}function k0(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var n in i)if(!(n in t))throw Error(ue(108,Px(e)||"Unknown",n));return kt({},r,i)}function uu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bn,Qn=pr.current,Et(pr,e),Et(Nr,Nr.current),!0}function mg(e,t,r){var i=e.stateNode;if(!i)throw Error(ue(169));r?(e=k0(e,t,Qn),i.__reactInternalMemoizedMergedChildContext=e,Rt(Nr),Rt(pr),Et(pr,e)):Rt(Nr),Et(Nr,r)}var Di=null,Cu=!1,fh=!1;function F0(e){Di===null?Di=[e]:Di.push(e)}function XM(e){Cu=!0,F0(e)}function Rn(){if(!fh&&Di!==null){fh=!0;var e=0,t=gt;try{var r=Di;for(gt=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}Di=null,Cu=!1}catch(n){throw Di!==null&&(Di=Di.slice(e+1)),u0(Sd,Rn),n}finally{gt=t,fh=!1}}return null}var Ua=[],Oa=0,cu=null,hu=0,Kr=[],Jr=0,Zn=null,Ui=1,Oi="";function Xn(e,t){Ua[Oa++]=hu,Ua[Oa++]=cu,cu=e,hu=t}function z0(e,t,r){Kr[Jr++]=Ui,Kr[Jr++]=Oi,Kr[Jr++]=Zn,Zn=e;var i=Ui;e=Oi;var n=32-ci(i)-1;i&=~(1<<n),r+=1;var a=32-ci(t)+n;if(30<a){var s=n-n%5;a=(i&(1<<s)-1).toString(32),i>>=s,n-=s,Ui=1<<32-ci(t)+n|r<<n|i,Oi=a+e}else Ui=1<<a|r<<n|i,Oi=e}function Nd(e){e.return!==null&&(Xn(e,1),z0(e,1,0))}function Ld(e){for(;e===cu;)cu=Ua[--Oa],Ua[Oa]=null,hu=Ua[--Oa],Ua[Oa]=null;for(;e===Zn;)Zn=Kr[--Jr],Kr[Jr]=null,Oi=Kr[--Jr],Kr[Jr]=null,Ui=Kr[--Jr],Kr[Jr]=null}var kr=null,Or=null,It=!1,ui=null;function B0(e,t){var r=Qr(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function gg(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,kr=e,Or=xn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,kr=e,Or=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Zn!==null?{id:Ui,overflow:Oi}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Qr(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,kr=e,Or=null,!0):!1;default:return!1}}function Kh(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Jh(e){if(It){var t=Or;if(t){var r=t;if(!gg(e,t)){if(Kh(e))throw Error(ue(418));t=xn(r.nextSibling);var i=kr;t&&gg(e,t)?B0(i,r):(e.flags=e.flags&-4097|2,It=!1,kr=e)}}else{if(Kh(e))throw Error(ue(418));e.flags=e.flags&-4097|2,It=!1,kr=e}}}function vg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kr=e}function Fl(e){if(e!==kr)return!1;if(!It)return vg(e),It=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!jh(e.type,e.memoizedProps)),t&&(t=Or)){if(Kh(e))throw V0(),Error(ue(418));for(;t;)B0(e,t),t=xn(t.nextSibling)}if(vg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(ue(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Or=xn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Or=null}}else Or=kr?xn(e.stateNode.nextSibling):null;return!0}function V0(){for(var e=Or;e;)e=xn(e.nextSibling)}function qa(){Or=kr=null,It=!1}function Id(e){ui===null?ui=[e]:ui.push(e)}var jM=Hi.ReactCurrentBatchConfig;function ro(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(ue(309));var i=r.stateNode}if(!i)throw Error(ue(147,e));var n=i,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var o=n.refs;s===null?delete o[a]:o[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(ue(284));if(!r._owner)throw Error(ue(290,e))}return e}function zl(e,t){throw e=Object.prototype.toString.call(t),Error(ue(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _g(e){var t=e._init;return t(e._payload)}function H0(e){function t(d,g){if(e){var m=d.deletions;m===null?(d.deletions=[g],d.flags|=16):m.push(g)}}function r(d,g){if(!e)return null;for(;g!==null;)t(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function n(d,g){return d=wn(d,g),d.index=0,d.sibling=null,d}function a(d,g,m){return d.index=m,e?(m=d.alternate,m!==null?(m=m.index,m<g?(d.flags|=2,g):m):(d.flags|=2,g)):(d.flags|=1048576,g)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function o(d,g,m,x){return g===null||g.tag!==6?(g=Mh(m,d.mode,x),g.return=d,g):(g=n(g,m),g.return=d,g)}function l(d,g,m,x){var P=m.type;return P===Ra?c(d,g,m.props.children,x,m.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===hn&&_g(P)===g.type)?(x=n(g,m.props),x.ref=ro(d,g,m),x.return=d,x):(x=Ql(m.type,m.key,m.props,null,d.mode,x),x.ref=ro(d,g,m),x.return=d,x)}function u(d,g,m,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==m.containerInfo||g.stateNode.implementation!==m.implementation?(g=Sh(m,d.mode,x),g.return=d,g):(g=n(g,m.children||[]),g.return=d,g)}function c(d,g,m,x,P){return g===null||g.tag!==7?(g=Jn(m,d.mode,x,P),g.return=d,g):(g=n(g,m),g.return=d,g)}function h(d,g,m){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Mh(""+g,d.mode,m),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case wl:return m=Ql(g.type,g.key,g.props,null,d.mode,m),m.ref=ro(d,null,g),m.return=d,m;case Ca:return g=Sh(g,d.mode,m),g.return=d,g;case hn:var x=g._init;return h(d,x(g._payload),m)}if(oo(g)||Qs(g))return g=Jn(g,d.mode,m,null),g.return=d,g;zl(d,g)}return null}function p(d,g,m,x){var P=g!==null?g.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return P!==null?null:o(d,g,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case wl:return m.key===P?l(d,g,m,x):null;case Ca:return m.key===P?u(d,g,m,x):null;case hn:return P=m._init,p(d,g,P(m._payload),x)}if(oo(m)||Qs(m))return P!==null?null:c(d,g,m,x,null);zl(d,m)}return null}function f(d,g,m,x,P){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(m)||null,o(g,d,""+x,P);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case wl:return d=d.get(x.key===null?m:x.key)||null,l(g,d,x,P);case Ca:return d=d.get(x.key===null?m:x.key)||null,u(g,d,x,P);case hn:var T=x._init;return f(d,g,m,T(x._payload),P)}if(oo(x)||Qs(x))return d=d.get(m)||null,c(g,d,x,P,null);zl(g,x)}return null}function y(d,g,m,x){for(var P=null,T=null,b=g,R=g=0,E=null;b!==null&&R<m.length;R++){b.index>R?(E=b,b=null):E=b.sibling;var M=p(d,b,m[R],x);if(M===null){b===null&&(b=E);break}e&&b&&M.alternate===null&&t(d,b),g=a(M,g,R),T===null?P=M:T.sibling=M,T=M,b=E}if(R===m.length)return r(d,b),It&&Xn(d,R),P;if(b===null){for(;R<m.length;R++)b=h(d,m[R],x),b!==null&&(g=a(b,g,R),T===null?P=b:T.sibling=b,T=b);return It&&Xn(d,R),P}for(b=i(d,b);R<m.length;R++)E=f(b,d,R,m[R],x),E!==null&&(e&&E.alternate!==null&&b.delete(E.key===null?R:E.key),g=a(E,g,R),T===null?P=E:T.sibling=E,T=E);return e&&b.forEach(function(N){return t(d,N)}),It&&Xn(d,R),P}function _(d,g,m,x){var P=Qs(m);if(typeof P!="function")throw Error(ue(150));if(m=P.call(m),m==null)throw Error(ue(151));for(var T=P=null,b=g,R=g=0,E=null,M=m.next();b!==null&&!M.done;R++,M=m.next()){b.index>R?(E=b,b=null):E=b.sibling;var N=p(d,b,M.value,x);if(N===null){b===null&&(b=E);break}e&&b&&N.alternate===null&&t(d,b),g=a(N,g,R),T===null?P=N:T.sibling=N,T=N,b=E}if(M.done)return r(d,b),It&&Xn(d,R),P;if(b===null){for(;!M.done;R++,M=m.next())M=h(d,M.value,x),M!==null&&(g=a(M,g,R),T===null?P=M:T.sibling=M,T=M);return It&&Xn(d,R),P}for(b=i(d,b);!M.done;R++,M=m.next())M=f(b,d,R,M.value,x),M!==null&&(e&&M.alternate!==null&&b.delete(M.key===null?R:M.key),g=a(M,g,R),T===null?P=M:T.sibling=M,T=M);return e&&b.forEach(function(k){return t(d,k)}),It&&Xn(d,R),P}function v(d,g,m,x){if(typeof m=="object"&&m!==null&&m.type===Ra&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case wl:e:{for(var P=m.key,T=g;T!==null;){if(T.key===P){if(P=m.type,P===Ra){if(T.tag===7){r(d,T.sibling),g=n(T,m.props.children),g.return=d,d=g;break e}}else if(T.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===hn&&_g(P)===T.type){r(d,T.sibling),g=n(T,m.props),g.ref=ro(d,T,m),g.return=d,d=g;break e}r(d,T);break}else t(d,T);T=T.sibling}m.type===Ra?(g=Jn(m.props.children,d.mode,x,m.key),g.return=d,d=g):(x=Ql(m.type,m.key,m.props,null,d.mode,x),x.ref=ro(d,g,m),x.return=d,d=x)}return s(d);case Ca:e:{for(T=m.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===m.containerInfo&&g.stateNode.implementation===m.implementation){r(d,g.sibling),g=n(g,m.children||[]),g.return=d,d=g;break e}else{r(d,g);break}else t(d,g);g=g.sibling}g=Sh(m,d.mode,x),g.return=d,d=g}return s(d);case hn:return T=m._init,v(d,g,T(m._payload),x)}if(oo(m))return y(d,g,m,x);if(Qs(m))return _(d,g,m,x);zl(d,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,g!==null&&g.tag===6?(r(d,g.sibling),g=n(g,m),g.return=d,d=g):(r(d,g),g=Mh(m,d.mode,x),g.return=d,d=g),s(d)):r(d,g)}return v}var Ya=H0(!0),G0=H0(!1),du=Cn(null),pu=null,ka=null,Dd=null;function Ud(){Dd=ka=pu=null}function Od(e){var t=du.current;Rt(du),e._currentValue=t}function Qh(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function Wa(e,t){pu=e,Dd=ka=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Pr=!0),e.firstContext=null)}function ei(e){var t=e._currentValue;if(Dd!==e)if(e={context:e,memoizedValue:t,next:null},ka===null){if(pu===null)throw Error(ue(308));ka=e,pu.dependencies={lanes:0,firstContext:e}}else ka=ka.next=e;return t}var qn=null;function kd(e){qn===null?qn=[e]:qn.push(e)}function W0(e,t,r,i){var n=t.interleaved;return n===null?(r.next=r,kd(t)):(r.next=n.next,n.next=r),t.interleaved=r,Bi(e,i)}function Bi(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var dn=!1;function Fd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function X0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ki(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mn(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(dt&2)!==0){var n=i.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),i.pending=t,Bi(e,r)}return n=i.interleaved,n===null?(t.next=t,kd(i)):(t.next=n.next,n.next=t),i.interleaved=t,Bi(e,r)}function jl(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Ed(e,r)}}function yg(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var n=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?n=a=s:a=a.next=s,r=r.next}while(r!==null);a===null?n=a=t:a=a.next=t}else n=a=t;r={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function fu(e,t,r,i){var n=e.updateQueue;dn=!1;var a=n.firstBaseUpdate,s=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var l=o,u=l.next;l.next=null,s===null?a=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==s&&(o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(a!==null){var h=n.baseState;s=0,c=u=l=null,o=a;do{var p=o.lane,f=o.eventTime;if((i&p)===p){c!==null&&(c=c.next={eventTime:f,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=e,_=o;switch(p=t,f=r,_.tag){case 1:if(y=_.payload,typeof y=="function"){h=y.call(f,h,p);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,p=typeof y=="function"?y.call(f,h,p):y,p==null)break e;h=kt({},h,p);break e;case 2:dn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,p=n.effects,p===null?n.effects=[o]:p.push(o))}else f={eventTime:f,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,s|=p;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;p=o,o=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);if(c===null&&(l=h),n.baseState=l,n.firstBaseUpdate=u,n.lastBaseUpdate=c,t=n.shared.interleaved,t!==null){n=t;do s|=n.lane,n=n.next;while(n!==t)}else a===null&&(n.shared.lanes=0);ta|=s,e.lanes=s,e.memoizedState=h}}function xg(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],n=i.callback;if(n!==null){if(i.callback=null,i=r,typeof n!="function")throw Error(ue(191,n));n.call(i)}}}var Bo={},Ti=Cn(Bo),No=Cn(Bo),Lo=Cn(Bo);function Yn(e){if(e===Bo)throw Error(ue(174));return e}function zd(e,t){switch(Et(Lo,t),Et(No,e),Et(Ti,Bo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Lh(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Lh(t,e)}Rt(Ti),Et(Ti,t)}function Ka(){Rt(Ti),Rt(No),Rt(Lo)}function j0(e){Yn(Lo.current);var t=Yn(Ti.current),r=Lh(t,e.type);t!==r&&(Et(No,e),Et(Ti,r))}function Bd(e){No.current===e&&(Rt(Ti),Rt(No))}var Ut=Cn(0);function mu(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mh=[];function Vd(){for(var e=0;e<mh.length;e++)mh[e]._workInProgressVersionPrimary=null;mh.length=0}var $l=Hi.ReactCurrentDispatcher,gh=Hi.ReactCurrentBatchConfig,ea=0,Ot=null,$t=null,Jt=null,gu=!1,go=!1,Io=0,$M=0;function cr(){throw Error(ue(321))}function Hd(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!di(e[r],t[r]))return!1;return!0}function Gd(e,t,r,i,n,a){if(ea=a,Ot=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$l.current=e===null||e.memoizedState===null?JM:QM,e=r(i,n),go){a=0;do{if(go=!1,Io=0,25<=a)throw Error(ue(301));a+=1,Jt=$t=null,t.updateQueue=null,$l.current=ZM,e=r(i,n)}while(go)}if($l.current=vu,t=$t!==null&&$t.next!==null,ea=0,Jt=$t=Ot=null,gu=!1,t)throw Error(ue(300));return e}function Wd(){var e=Io!==0;return Io=0,e}function Si(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?Ot.memoizedState=Jt=e:Jt=Jt.next=e,Jt}function ti(){if($t===null){var e=Ot.alternate;e=e!==null?e.memoizedState:null}else e=$t.next;var t=Jt===null?Ot.memoizedState:Jt.next;if(t!==null)Jt=t,$t=e;else{if(e===null)throw Error(ue(310));$t=e,e={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},Jt===null?Ot.memoizedState=Jt=e:Jt=Jt.next=e}return Jt}function Do(e,t){return typeof t=="function"?t(e):t}function vh(e){var t=ti(),r=t.queue;if(r===null)throw Error(ue(311));r.lastRenderedReducer=e;var i=$t,n=i.baseQueue,a=r.pending;if(a!==null){if(n!==null){var s=n.next;n.next=a.next,a.next=s}i.baseQueue=n=a,r.pending=null}if(n!==null){a=n.next,i=i.baseState;var o=s=null,l=null,u=a;do{var c=u.lane;if((ea&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=h,s=i):l=l.next=h,Ot.lanes|=c,ta|=c}u=u.next}while(u!==null&&u!==a);l===null?s=i:l.next=o,di(i,t.memoizedState)||(Pr=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,r.lastRenderedState=i}if(e=r.interleaved,e!==null){n=e;do a=n.lane,Ot.lanes|=a,ta|=a,n=n.next;while(n!==e)}else n===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function _h(e){var t=ti(),r=t.queue;if(r===null)throw Error(ue(311));r.lastRenderedReducer=e;var i=r.dispatch,n=r.pending,a=t.memoizedState;if(n!==null){r.pending=null;var s=n=n.next;do a=e(a,s.action),s=s.next;while(s!==n);di(a,t.memoizedState)||(Pr=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,i]}function $0(){}function q0(e,t){var r=Ot,i=ti(),n=t(),a=!di(i.memoizedState,n);if(a&&(i.memoizedState=n,Pr=!0),i=i.queue,Xd(J0.bind(null,r,i,e),[e]),i.getSnapshot!==t||a||Jt!==null&&Jt.memoizedState.tag&1){if(r.flags|=2048,Uo(9,K0.bind(null,r,i,n,t),void 0,null),Qt===null)throw Error(ue(349));(ea&30)!==0||Y0(r,t,n)}return n}function Y0(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ot.updateQueue,t===null?(t={lastEffect:null,stores:null},Ot.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function K0(e,t,r,i){t.value=r,t.getSnapshot=i,Q0(t)&&Z0(e)}function J0(e,t,r){return r(function(){Q0(t)&&Z0(e)})}function Q0(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!di(e,r)}catch{return!0}}function Z0(e){var t=Bi(e,1);t!==null&&hi(t,e,1,-1)}function Mg(e){var t=Si();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:e},t.queue=e,e=e.dispatch=KM.bind(null,Ot,e),[t.memoizedState,e]}function Uo(e,t,r,i){return e={tag:e,create:t,destroy:r,deps:i,next:null},t=Ot.updateQueue,t===null?(t={lastEffect:null,stores:null},Ot.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e)),e}function ev(){return ti().memoizedState}function ql(e,t,r,i){var n=Si();Ot.flags|=e,n.memoizedState=Uo(1|t,r,void 0,i===void 0?null:i)}function Ru(e,t,r,i){var n=ti();i=i===void 0?null:i;var a=void 0;if($t!==null){var s=$t.memoizedState;if(a=s.destroy,i!==null&&Hd(i,s.deps)){n.memoizedState=Uo(t,r,a,i);return}}Ot.flags|=e,n.memoizedState=Uo(1|t,r,a,i)}function Sg(e,t){return ql(8390656,8,e,t)}function Xd(e,t){return Ru(2048,8,e,t)}function tv(e,t){return Ru(4,2,e,t)}function rv(e,t){return Ru(4,4,e,t)}function iv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nv(e,t,r){return r=r!=null?r.concat([e]):null,Ru(4,4,iv.bind(null,t,e),r)}function jd(){}function av(e,t){var r=ti();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&Hd(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function sv(e,t){var r=ti();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&Hd(t,i[1])?i[0]:(e=e(),r.memoizedState=[e,t],e)}function ov(e,t,r){return(ea&21)===0?(e.baseState&&(e.baseState=!1,Pr=!0),e.memoizedState=r):(di(r,t)||(r=d0(),Ot.lanes|=r,ta|=r,e.baseState=!0),t)}function qM(e,t){var r=gt;gt=r!==0&&4>r?r:4,e(!0);var i=gh.transition;gh.transition={};try{e(!1),t()}finally{gt=r,gh.transition=i}}function lv(){return ti().memoizedState}function YM(e,t,r){var i=En(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},uv(e))cv(t,r);else if(r=W0(e,t,r,i),r!==null){var n=xr();hi(r,e,i,n),hv(r,t,i)}}function KM(e,t,r){var i=En(e),n={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(uv(e))cv(t,n);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,o=a(s,r);if(n.hasEagerState=!0,n.eagerState=o,di(o,s)){var l=t.interleaved;l===null?(n.next=n,kd(t)):(n.next=l.next,l.next=n),t.interleaved=n;return}}catch{}r=W0(e,t,n,i),r!==null&&(n=xr(),hi(r,e,i,n),hv(r,t,i))}}function uv(e){var t=e.alternate;return e===Ot||t!==null&&t===Ot}function cv(e,t){go=gu=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function hv(e,t,r){if((r&4194240)!==0){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Ed(e,r)}}var vu={readContext:ei,useCallback:cr,useContext:cr,useEffect:cr,useImperativeHandle:cr,useInsertionEffect:cr,useLayoutEffect:cr,useMemo:cr,useReducer:cr,useRef:cr,useState:cr,useDebugValue:cr,useDeferredValue:cr,useTransition:cr,useMutableSource:cr,useSyncExternalStore:cr,useId:cr,unstable_isNewReconciler:!1},JM={readContext:ei,useCallback:function(e,t){return Si().memoizedState=[e,t===void 0?null:t],e},useContext:ei,useEffect:Sg,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ql(4194308,4,iv.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ql(4194308,4,e,t)},useInsertionEffect:function(e,t){return ql(4,2,e,t)},useMemo:function(e,t){var r=Si();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var i=Si();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=YM.bind(null,Ot,e),[i.memoizedState,e]},useRef:function(e){var t=Si();return e={current:e},t.memoizedState=e},useState:Mg,useDebugValue:jd,useDeferredValue:function(e){return Si().memoizedState=e},useTransition:function(){var e=Mg(!1),t=e[0];return e=qM.bind(null,e[1]),Si().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=Ot,n=Si();if(It){if(r===void 0)throw Error(ue(407));r=r()}else{if(r=t(),Qt===null)throw Error(ue(349));(ea&30)!==0||Y0(i,t,r)}n.memoizedState=r;var a={value:r,getSnapshot:t};return n.queue=a,Sg(J0.bind(null,i,a,e),[e]),i.flags|=2048,Uo(9,K0.bind(null,i,a,r,t),void 0,null),r},useId:function(){var e=Si(),t=Qt.identifierPrefix;if(It){var r=Oi,i=Ui;r=(i&~(1<<32-ci(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=Io++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=$M++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},QM={readContext:ei,useCallback:av,useContext:ei,useEffect:Xd,useImperativeHandle:nv,useInsertionEffect:tv,useLayoutEffect:rv,useMemo:sv,useReducer:vh,useRef:ev,useState:function(){return vh(Do)},useDebugValue:jd,useDeferredValue:function(e){var t=ti();return ov(t,$t.memoizedState,e)},useTransition:function(){var e=vh(Do)[0],t=ti().memoizedState;return[e,t]},useMutableSource:$0,useSyncExternalStore:q0,useId:lv,unstable_isNewReconciler:!1},ZM={readContext:ei,useCallback:av,useContext:ei,useEffect:Xd,useImperativeHandle:nv,useInsertionEffect:tv,useLayoutEffect:rv,useMemo:sv,useReducer:_h,useRef:ev,useState:function(){return _h(Do)},useDebugValue:jd,useDeferredValue:function(e){var t=ti();return $t===null?t.memoizedState=e:ov(t,$t.memoizedState,e)},useTransition:function(){var e=_h(Do)[0],t=ti().memoizedState;return[e,t]},useMutableSource:$0,useSyncExternalStore:q0,useId:lv,unstable_isNewReconciler:!1};function oi(e,t){if(e&&e.defaultProps){t=kt({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Zh(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:kt({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Pu={isMounted:function(e){return(e=e._reactInternals)?na(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var i=xr(),n=En(e),a=ki(i,n);a.payload=t,r!=null&&(a.callback=r),t=Mn(e,a,n),t!==null&&(hi(t,e,n,i),jl(t,e,n))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=xr(),n=En(e),a=ki(i,n);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=Mn(e,a,n),t!==null&&(hi(t,e,n,i),jl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=xr(),i=En(e),n=ki(r,i);n.tag=2,t!=null&&(n.callback=t),t=Mn(e,n,i),t!==null&&(hi(t,e,i,r),jl(t,e,i))}};function Eg(e,t,r,i,n,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,s):t.prototype&&t.prototype.isPureReactComponent?!Ao(r,i)||!Ao(n,a):!0}function dv(e,t,r){var i=!1,n=bn,a=t.contextType;return typeof a=="object"&&a!==null?a=ei(a):(n=Lr(t)?Qn:pr.current,i=t.contextTypes,a=(i=i!=null)?$a(e,n):bn),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pu,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),t}function wg(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&Pu.enqueueReplaceState(t,t.state,null)}function ed(e,t,r,i){var n=e.stateNode;n.props=r,n.state=e.memoizedState,n.refs={},Fd(e);var a=t.contextType;typeof a=="object"&&a!==null?n.context=ei(a):(a=Lr(t)?Qn:pr.current,n.context=$a(e,a)),n.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Zh(e,t,a,r),n.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(t=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),t!==n.state&&Pu.enqueueReplaceState(n,n.state,null),fu(e,r,n,i),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308)}function Ja(e,t){try{var r="",i=t;do r+=Rx(i),i=i.return;while(i);var n=r}catch(a){n=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:n,digest:null}}function yh(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function td(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var eS=typeof WeakMap=="function"?WeakMap:Map;function pv(e,t,r){r=ki(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){yu||(yu=!0,hd=i),td(e,t)},r}function fv(e,t,r){r=ki(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var n=t.value;r.payload=function(){return i(n)},r.callback=function(){td(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){td(e,t),typeof i!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function Tg(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new eS;var n=new Set;i.set(t,n)}else n=i.get(t),n===void 0&&(n=new Set,i.set(t,n));n.has(r)||(n.add(r),e=fS.bind(null,e,t,r),t.then(e,e))}function bg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ag(e,t,r,i,n){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=ki(-1,1),t.tag=2,Mn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=n,e)}var tS=Hi.ReactCurrentOwner,Pr=!1;function yr(e,t,r,i){t.child=e===null?G0(t,null,r,i):Ya(t,e.child,r,i)}function Cg(e,t,r,i,n){r=r.render;var a=t.ref;return Wa(t,n),i=Gd(e,t,r,i,a,n),r=Wd(),e!==null&&!Pr?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n,Vi(e,t,n)):(It&&r&&Nd(t),t.flags|=1,yr(e,t,i,n),t.child)}function Rg(e,t,r,i,n){if(e===null){var a=r.type;return typeof a=="function"&&!ep(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,mv(e,t,a,i,n)):(e=Ql(r.type,null,i,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&n)===0){var s=a.memoizedProps;if(r=r.compare,r=r!==null?r:Ao,r(s,i)&&e.ref===t.ref)return Vi(e,t,n)}return t.flags|=1,e=wn(a,i),e.ref=t.ref,e.return=t,t.child=e}function mv(e,t,r,i,n){if(e!==null){var a=e.memoizedProps;if(Ao(a,i)&&e.ref===t.ref)if(Pr=!1,t.pendingProps=i=a,(e.lanes&n)!==0)(e.flags&131072)!==0&&(Pr=!0);else return t.lanes=e.lanes,Vi(e,t,n)}return rd(e,t,r,i,n)}function gv(e,t,r){var i=t.pendingProps,n=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Et(za,Ur),Ur|=r;else{if((r&1073741824)===0)return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Et(za,Ur),Ur|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:r,Et(za,Ur),Ur|=i}else a!==null?(i=a.baseLanes|r,t.memoizedState=null):i=r,Et(za,Ur),Ur|=i;return yr(e,t,n,r),t.child}function vv(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function rd(e,t,r,i,n){var a=Lr(r)?Qn:pr.current;return a=$a(t,a),Wa(t,n),r=Gd(e,t,r,i,a,n),i=Wd(),e!==null&&!Pr?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n,Vi(e,t,n)):(It&&i&&Nd(t),t.flags|=1,yr(e,t,r,n),t.child)}function Pg(e,t,r,i,n){if(Lr(r)){var a=!0;uu(t)}else a=!1;if(Wa(t,n),t.stateNode===null)Yl(e,t),dv(t,r,i),ed(t,r,i,n),i=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var l=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=ei(u):(u=Lr(r)?Qn:pr.current,u=$a(t,u));var c=r.getDerivedStateFromProps,h=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==i||l!==u)&&wg(t,s,i,u),dn=!1;var p=t.memoizedState;s.state=p,fu(t,i,s,n),l=t.memoizedState,o!==i||p!==l||Nr.current||dn?(typeof c=="function"&&(Zh(t,r,c,i),l=t.memoizedState),(o=dn||Eg(t,r,o,i,p,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=l),s.props=i,s.state=l,s.context=u,i=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,X0(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:oi(t.type,o),s.props=u,h=t.pendingProps,p=s.context,l=r.contextType,typeof l=="object"&&l!==null?l=ei(l):(l=Lr(r)?Qn:pr.current,l=$a(t,l));var f=r.getDerivedStateFromProps;(c=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==h||p!==l)&&wg(t,s,i,l),dn=!1,p=t.memoizedState,s.state=p,fu(t,i,s,n);var y=t.memoizedState;o!==h||p!==y||Nr.current||dn?(typeof f=="function"&&(Zh(t,r,f,i),y=t.memoizedState),(u=dn||Eg(t,r,u,i,p,y,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=y),s.props=i,s.state=y,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),i=!1)}return id(e,t,r,i,a,n)}function id(e,t,r,i,n,a){vv(e,t);var s=(t.flags&128)!==0;if(!i&&!s)return n&&mg(t,r,!1),Vi(e,t,a);i=t.stateNode,tS.current=t;var o=s&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&s?(t.child=Ya(t,e.child,null,a),t.child=Ya(t,null,o,a)):yr(e,t,o,a),t.memoizedState=i.state,n&&mg(t,r,!0),t.child}function _v(e){var t=e.stateNode;t.pendingContext?fg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fg(e,t.context,!1),zd(e,t.containerInfo)}function Ng(e,t,r,i,n){return qa(),Id(n),t.flags|=256,yr(e,t,r,i),t.child}var nd={dehydrated:null,treeContext:null,retryLane:0};function ad(e){return{baseLanes:e,cachePool:null,transitions:null}}function yv(e,t,r){var i=t.pendingProps,n=Ut.current,a=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(n&2)!==0),o?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(n|=1),Et(Ut,n&1),e===null)return Jh(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=i.children,e=i.fallback,a?(i=t.mode,a=t.child,s={mode:"hidden",children:s},(i&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=s):a=Iu(s,i,0,null),e=Jn(e,i,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ad(r),t.memoizedState=nd,e):$d(t,s));if(n=e.memoizedState,n!==null&&(o=n.dehydrated,o!==null))return rS(e,t,s,i,o,n,r);if(a){a=i.fallback,s=t.mode,n=e.child,o=n.sibling;var l={mode:"hidden",children:i.children};return(s&1)===0&&t.child!==n?(i=t.child,i.childLanes=0,i.pendingProps=l,t.deletions=null):(i=wn(n,l),i.subtreeFlags=n.subtreeFlags&14680064),o!==null?a=wn(o,a):(a=Jn(a,s,r,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,s=e.child.memoizedState,s=s===null?ad(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~r,t.memoizedState=nd,i}return a=e.child,e=a.sibling,i=wn(a,{mode:"visible",children:i.children}),(t.mode&1)===0&&(i.lanes=r),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function $d(e,t){return t=Iu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Bl(e,t,r,i){return i!==null&&Id(i),Ya(t,e.child,null,r),e=$d(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rS(e,t,r,i,n,a,s){if(r)return t.flags&256?(t.flags&=-257,i=yh(Error(ue(422))),Bl(e,t,s,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=i.fallback,n=t.mode,i=Iu({mode:"visible",children:i.children},n,0,null),a=Jn(a,n,s,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,(t.mode&1)!==0&&Ya(t,e.child,null,s),t.child.memoizedState=ad(s),t.memoizedState=nd,a);if((t.mode&1)===0)return Bl(e,t,s,null);if(n.data==="$!"){if(i=n.nextSibling&&n.nextSibling.dataset,i)var o=i.dgst;return i=o,a=Error(ue(419)),i=yh(a,i,void 0),Bl(e,t,s,i)}if(o=(s&e.childLanes)!==0,Pr||o){if(i=Qt,i!==null){switch(s&-s){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=(n&(i.suspendedLanes|s))!==0?0:n,n!==0&&n!==a.retryLane&&(a.retryLane=n,Bi(e,n),hi(i,e,n,-1))}return Zd(),i=yh(Error(ue(421))),Bl(e,t,s,i)}return n.data==="$?"?(t.flags|=128,t.child=e.child,t=mS.bind(null,e),n._reactRetry=t,null):(e=a.treeContext,Or=xn(n.nextSibling),kr=t,It=!0,ui=null,e!==null&&(Kr[Jr++]=Ui,Kr[Jr++]=Oi,Kr[Jr++]=Zn,Ui=e.id,Oi=e.overflow,Zn=t),t=$d(t,i.children),t.flags|=4096,t)}function Lg(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Qh(e.return,t,r)}function xh(e,t,r,i,n){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:n}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=r,a.tailMode=n)}function xv(e,t,r){var i=t.pendingProps,n=i.revealOrder,a=i.tail;if(yr(e,t,i.children,r),i=Ut.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lg(e,r,t);else if(e.tag===19)Lg(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(Et(Ut,i),(t.mode&1)===0)t.memoizedState=null;else switch(n){case"forwards":for(r=t.child,n=null;r!==null;)e=r.alternate,e!==null&&mu(e)===null&&(n=r),r=r.sibling;r=n,r===null?(n=t.child,t.child=null):(n=r.sibling,r.sibling=null),xh(t,!1,n,r,a);break;case"backwards":for(r=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&mu(e)===null){t.child=n;break}e=n.sibling,n.sibling=r,r=n,n=e}xh(t,!0,r,null,a);break;case"together":xh(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Yl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vi(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),ta|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(ue(153));if(t.child!==null){for(e=t.child,r=wn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=wn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function iS(e,t,r){switch(t.tag){case 3:_v(t),qa();break;case 5:j0(t);break;case 1:Lr(t.type)&&uu(t);break;case 4:zd(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,n=t.memoizedProps.value;Et(du,i._currentValue),i._currentValue=n;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(Et(Ut,Ut.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?yv(e,t,r):(Et(Ut,Ut.current&1),e=Vi(e,t,r),e!==null?e.sibling:null);Et(Ut,Ut.current&1);break;case 19:if(i=(r&t.childLanes)!==0,(e.flags&128)!==0){if(i)return xv(e,t,r);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Et(Ut,Ut.current),i)break;return null;case 22:case 23:return t.lanes=0,gv(e,t,r)}return Vi(e,t,r)}var Mv,sd,Sv,Ev;Mv=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};sd=function(){};Sv=function(e,t,r,i){var n=e.memoizedProps;if(n!==i){e=t.stateNode,Yn(Ti.current);var a=null;switch(r){case"input":n=Ch(e,n),i=Ch(e,i),a=[];break;case"select":n=kt({},n,{value:void 0}),i=kt({},i,{value:void 0}),a=[];break;case"textarea":n=Nh(e,n),i=Nh(e,i),a=[];break;default:typeof n.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=ou)}Ih(r,i);var s;r=null;for(u in n)if(!i.hasOwnProperty(u)&&n.hasOwnProperty(u)&&n[u]!=null)if(u==="style"){var o=n[u];for(s in o)o.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xo.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in i){var l=i[u];if(o=n?.[u],i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(r||(r={}),r[s]=l[s])}else r||(a||(a=[]),a.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ct("scroll",e),a||o===l||(a=[])):(a=a||[]).push(u,l))}r&&(a=a||[]).push("style",r);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Ev=function(e,t,r,i){r!==i&&(t.flags|=4)};function io(e,t){if(!It)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function hr(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var n=e.child;n!==null;)r|=n.lanes|n.childLanes,i|=n.subtreeFlags&14680064,i|=n.flags&14680064,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)r|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function nS(e,t,r){var i=t.pendingProps;switch(Ld(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hr(t),null;case 1:return Lr(t.type)&&lu(),hr(t),null;case 3:return i=t.stateNode,Ka(),Rt(Nr),Rt(pr),Vd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Fl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ui!==null&&(fd(ui),ui=null))),sd(e,t),hr(t),null;case 5:Bd(t);var n=Yn(Lo.current);if(r=t.type,e!==null&&t.stateNode!=null)Sv(e,t,r,i,n),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(ue(166));return hr(t),null}if(e=Yn(Ti.current),Fl(t)){i=t.stateNode,r=t.type;var a=t.memoizedProps;switch(i[Ei]=t,i[Po]=a,e=(t.mode&1)!==0,r){case"dialog":Ct("cancel",i),Ct("close",i);break;case"iframe":case"object":case"embed":Ct("load",i);break;case"video":case"audio":for(n=0;n<uo.length;n++)Ct(uo[n],i);break;case"source":Ct("error",i);break;case"img":case"image":case"link":Ct("error",i),Ct("load",i);break;case"details":Ct("toggle",i);break;case"input":Bm(i,a),Ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},Ct("invalid",i);break;case"textarea":Hm(i,a),Ct("invalid",i)}Ih(r,a),n=null;for(var s in a)if(a.hasOwnProperty(s)){var o=a[s];s==="children"?typeof o=="string"?i.textContent!==o&&(a.suppressHydrationWarning!==!0&&kl(i.textContent,o,e),n=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&kl(i.textContent,o,e),n=["children",""+o]):xo.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&Ct("scroll",i)}switch(r){case"input":Tl(i),Vm(i,a,!0);break;case"textarea":Tl(i),Gm(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=ou)}i=n,t.updateQueue=i,i!==null&&(t.flags|=4)}else{s=n.nodeType===9?n:n.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jg(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=s.createElement(r,{is:i.is}):(e=s.createElement(r),r==="select"&&(s=e,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):e=s.createElementNS(e,r),e[Ei]=t,e[Po]=i,Mv(e,t,!1,!1),t.stateNode=e;e:{switch(s=Dh(r,i),r){case"dialog":Ct("cancel",e),Ct("close",e),n=i;break;case"iframe":case"object":case"embed":Ct("load",e),n=i;break;case"video":case"audio":for(n=0;n<uo.length;n++)Ct(uo[n],e);n=i;break;case"source":Ct("error",e),n=i;break;case"img":case"image":case"link":Ct("error",e),Ct("load",e),n=i;break;case"details":Ct("toggle",e),n=i;break;case"input":Bm(e,i),n=Ch(e,i),Ct("invalid",e);break;case"option":n=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},n=kt({},i,{value:void 0}),Ct("invalid",e);break;case"textarea":Hm(e,i),n=Nh(e,i),Ct("invalid",e);break;default:n=i}Ih(r,n),o=n;for(a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="style"?e0(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qg(e,l)):a==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Mo(e,l):typeof l=="number"&&Mo(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(xo.hasOwnProperty(a)?l!=null&&a==="onScroll"&&Ct("scroll",e):l!=null&&vd(e,a,l,s))}switch(r){case"input":Tl(e),Vm(e,i,!1);break;case"textarea":Tl(e),Gm(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Tn(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?Ba(e,!!i.multiple,a,!1):i.defaultValue!=null&&Ba(e,!!i.multiple,i.defaultValue,!0);break;default:typeof n.onClick=="function"&&(e.onclick=ou)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return hr(t),null;case 6:if(e&&t.stateNode!=null)Ev(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(ue(166));if(r=Yn(Lo.current),Yn(Ti.current),Fl(t)){if(i=t.stateNode,r=t.memoizedProps,i[Ei]=t,(a=i.nodeValue!==r)&&(e=kr,e!==null))switch(e.tag){case 3:kl(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&kl(i.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[Ei]=t,t.stateNode=i}return hr(t),null;case 13:if(Rt(Ut),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(It&&Or!==null&&(t.mode&1)!==0&&(t.flags&128)===0)V0(),qa(),t.flags|=98560,a=!1;else if(a=Fl(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(ue(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(ue(317));a[Ei]=t}else qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;hr(t),a=!1}else ui!==null&&(fd(ui),ui=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ut.current&1)!==0?qt===0&&(qt=3):Zd())),t.updateQueue!==null&&(t.flags|=4),hr(t),null);case 4:return Ka(),sd(e,t),e===null&&Co(t.stateNode.containerInfo),hr(t),null;case 10:return Od(t.type._context),hr(t),null;case 17:return Lr(t.type)&&lu(),hr(t),null;case 19:if(Rt(Ut),a=t.memoizedState,a===null)return hr(t),null;if(i=(t.flags&128)!==0,s=a.rendering,s===null)if(i)io(a,!1);else{if(qt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=mu(e),s!==null){for(t.flags|=128,io(a,!1),i=s.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)a=r,e=i,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Et(Ut,Ut.current&1|2),t.child}e=e.sibling}a.tail!==null&&Vt()>Qa&&(t.flags|=128,i=!0,io(a,!1),t.lanes=4194304)}else{if(!i)if(e=mu(s),e!==null){if(t.flags|=128,i=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),io(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!It)return hr(t),null}else 2*Vt()-a.renderingStartTime>Qa&&r!==1073741824&&(t.flags|=128,i=!0,io(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(r=a.last,r!==null?r.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Vt(),t.sibling=null,r=Ut.current,Et(Ut,i?r&1|2:r&1),t):(hr(t),null);case 22:case 23:return Qd(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&(t.mode&1)!==0?(Ur&1073741824)!==0&&(hr(t),t.subtreeFlags&6&&(t.flags|=8192)):hr(t),null;case 24:return null;case 25:return null}throw Error(ue(156,t.tag))}function aS(e,t){switch(Ld(t),t.tag){case 1:return Lr(t.type)&&lu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ka(),Rt(Nr),Rt(pr),Vd(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Bd(t),null;case 13:if(Rt(Ut),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(ue(340));qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Rt(Ut),null;case 4:return Ka(),null;case 10:return Od(t.type._context),null;case 22:case 23:return Qd(),null;case 24:return null;default:return null}}var Vl=!1,dr=!1,sS=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function Fa(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){zt(e,t,i)}else r.current=null}function od(e,t,r){try{r()}catch(i){zt(e,t,i)}}var Ig=!1;function oS(e,t){if(Wh=nu,e=C0(),Pd(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var n=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var s=0,o=-1,l=-1,u=0,c=0,h=e,p=null;t:for(;;){for(var f;h!==r||n!==0&&h.nodeType!==3||(o=s+n),h!==a||i!==0&&h.nodeType!==3||(l=s+i),h.nodeType===3&&(s+=h.nodeValue.length),(f=h.firstChild)!==null;)p=h,h=f;for(;;){if(h===e)break t;if(p===r&&++u===n&&(o=s),p===a&&++c===i&&(l=s),(f=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=f}r=o===-1||l===-1?null:{start:o,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(Xh={focusedElem:e,selectionRange:r},nu=!1,Ne=t;Ne!==null;)if(t=Ne,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ne=e;else for(;Ne!==null;){t=Ne;try{var y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,v=y.memoizedState,d=t.stateNode,g=d.getSnapshotBeforeUpdate(t.elementType===t.type?_:oi(t.type,_),v);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(x){zt(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,Ne=e;break}Ne=t.return}return y=Ig,Ig=!1,y}function vo(e,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var n=i=i.next;do{if((n.tag&e)===e){var a=n.destroy;n.destroy=void 0,a!==void 0&&od(t,r,a)}n=n.next}while(n!==i)}}function Nu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function ld(e){var t=e.ref;if(t!==null){var r=e.stateNode;e.tag,e=r,typeof t=="function"?t(e):t.current=e}}function wv(e){var t=e.alternate;t!==null&&(e.alternate=null,wv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ei],delete t[Po],delete t[qh],delete t[GM],delete t[WM])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tv(e){return e.tag===5||e.tag===3||e.tag===4}function Dg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ud(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ou));else if(i!==4&&(e=e.child,e!==null))for(ud(e,t,r),e=e.sibling;e!==null;)ud(e,t,r),e=e.sibling}function cd(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(cd(e,t,r),e=e.sibling;e!==null;)cd(e,t,r),e=e.sibling}var nr=null,li=!1;function cn(e,t,r){for(r=r.child;r!==null;)bv(e,t,r),r=r.sibling}function bv(e,t,r){if(wi&&typeof wi.onCommitFiberUnmount=="function")try{wi.onCommitFiberUnmount(Eu,r)}catch{}switch(r.tag){case 5:dr||Fa(r,t);case 6:var i=nr,n=li;nr=null,cn(e,t,r),nr=i,li=n,nr!==null&&(li?(e=nr,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):nr.removeChild(r.stateNode));break;case 18:nr!==null&&(li?(e=nr,r=r.stateNode,e.nodeType===8?ph(e.parentNode,r):e.nodeType===1&&ph(e,r),To(e)):ph(nr,r.stateNode));break;case 4:i=nr,n=li,nr=r.stateNode.containerInfo,li=!0,cn(e,t,r),nr=i,li=n;break;case 0:case 11:case 14:case 15:if(!dr&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){n=i=i.next;do{var a=n,s=a.destroy;a=a.tag,s!==void 0&&((a&2)!==0||(a&4)!==0)&&od(r,t,s),n=n.next}while(n!==i)}cn(e,t,r);break;case 1:if(!dr&&(Fa(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(o){zt(r,t,o)}cn(e,t,r);break;case 21:cn(e,t,r);break;case 22:r.mode&1?(dr=(i=dr)||r.memoizedState!==null,cn(e,t,r),dr=i):cn(e,t,r);break;default:cn(e,t,r)}}function Ug(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new sS),t.forEach(function(i){var n=gS.bind(null,e,i);r.has(i)||(r.add(i),i.then(n,n))})}}function si(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var n=r[i];try{var a=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 5:nr=o.stateNode,li=!1;break e;case 3:nr=o.stateNode.containerInfo,li=!0;break e;case 4:nr=o.stateNode.containerInfo,li=!0;break e}o=o.return}if(nr===null)throw Error(ue(160));bv(a,s,n),nr=null,li=!1;var l=n.alternate;l!==null&&(l.return=null),n.return=null}catch(u){zt(n,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Av(t,e),t=t.sibling}function Av(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(si(t,e),Mi(e),i&4){try{vo(3,e,e.return),Nu(3,e)}catch(_){zt(e,e.return,_)}try{vo(5,e,e.return)}catch(_){zt(e,e.return,_)}}break;case 1:si(t,e),Mi(e),i&512&&r!==null&&Fa(r,r.return);break;case 5:if(si(t,e),Mi(e),i&512&&r!==null&&Fa(r,r.return),e.flags&32){var n=e.stateNode;try{Mo(n,"")}catch(_){zt(e,e.return,_)}}if(i&4&&(n=e.stateNode,n!=null)){var a=e.memoizedProps,s=r!==null?r.memoizedProps:a,o=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&Yg(n,a),Dh(o,s);var u=Dh(o,a);for(s=0;s<l.length;s+=2){var c=l[s],h=l[s+1];c==="style"?e0(n,h):c==="dangerouslySetInnerHTML"?Qg(n,h):c==="children"?Mo(n,h):vd(n,c,h,u)}switch(o){case"input":Rh(n,a);break;case"textarea":Kg(n,a);break;case"select":var p=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!a.multiple;var f=a.value;f!=null?Ba(n,!!a.multiple,f,!1):p!==!!a.multiple&&(a.defaultValue!=null?Ba(n,!!a.multiple,a.defaultValue,!0):Ba(n,!!a.multiple,a.multiple?[]:"",!1))}n[Po]=a}catch(_){zt(e,e.return,_)}}break;case 6:if(si(t,e),Mi(e),i&4){if(e.stateNode===null)throw Error(ue(162));n=e.stateNode,a=e.memoizedProps;try{n.nodeValue=a}catch(_){zt(e,e.return,_)}}break;case 3:if(si(t,e),Mi(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{To(t.containerInfo)}catch(_){zt(e,e.return,_)}break;case 4:si(t,e),Mi(e);break;case 13:si(t,e),Mi(e),n=e.child,n.flags&8192&&(a=n.memoizedState!==null,n.stateNode.isHidden=a,!a||n.alternate!==null&&n.alternate.memoizedState!==null||(Kd=Vt())),i&4&&Ug(e);break;case 22:if(c=r!==null&&r.memoizedState!==null,e.mode&1?(dr=(u=dr)||c,si(t,e),dr=u):si(t,e),Mi(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(Ne=e,c=e.child;c!==null;){for(h=Ne=c;Ne!==null;){switch(p=Ne,f=p.child,p.tag){case 0:case 11:case 14:case 15:vo(4,p,p.return);break;case 1:Fa(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){i=p,r=p.return;try{t=i,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(_){zt(i,r,_)}}break;case 5:Fa(p,p.return);break;case 22:if(p.memoizedState!==null){kg(h);continue}}f!==null?(f.return=p,Ne=f):kg(h)}c=c.sibling}e:for(c=null,h=e;;){if(h.tag===5){if(c===null){c=h;try{n=h.stateNode,u?(a=n.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Zg("display",s))}catch(_){zt(e,e.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){zt(e,e.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:si(t,e),Mi(e),i&4&&Ug(e);break;case 21:break;default:si(t,e),Mi(e)}}function Mi(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Tv(r)){var i=r;break e}r=r.return}throw Error(ue(160))}switch(i.tag){case 5:var n=i.stateNode;i.flags&32&&(Mo(n,""),i.flags&=-33);var a=Dg(e);cd(e,a,n);break;case 3:case 4:var s=i.stateNode.containerInfo,o=Dg(e);ud(e,o,s);break;default:throw Error(ue(161))}}catch(l){zt(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lS(e,t,r){Ne=e,Cv(e,t,r)}function Cv(e,t,r){for(var i=(e.mode&1)!==0;Ne!==null;){var n=Ne,a=n.child;if(n.tag===22&&i){var s=n.memoizedState!==null||Vl;if(!s){var o=n.alternate,l=o!==null&&o.memoizedState!==null||dr;o=Vl;var u=dr;if(Vl=s,(dr=l)&&!u)for(Ne=n;Ne!==null;)s=Ne,l=s.child,s.tag===22&&s.memoizedState!==null?Fg(n):l!==null?(l.return=s,Ne=l):Fg(n);for(;a!==null;)Ne=a,Cv(a,t,r),a=a.sibling;Ne=n,Vl=o,dr=u}Og(e,t,r)}else(n.subtreeFlags&8772)!==0&&a!==null?(a.return=n,Ne=a):Og(e,t,r)}}function Og(e){for(;Ne!==null;){var t=Ne;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:dr||Nu(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!dr)if(r===null)i.componentDidMount();else{var n=t.elementType===t.type?r.memoizedProps:oi(t.type,r.memoizedProps);i.componentDidUpdate(n,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&xg(t,a,i);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}xg(t,s,r)}break;case 5:var o=t.stateNode;if(r===null&&t.flags&4){r=o;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&To(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}dr||t.flags&512&&ld(t)}catch(p){zt(t,t.return,p)}}if(t===e){Ne=null;break}if(r=t.sibling,r!==null){r.return=t.return,Ne=r;break}Ne=t.return}}function kg(e){for(;Ne!==null;){var t=Ne;if(t===e){Ne=null;break}var r=t.sibling;if(r!==null){r.return=t.return,Ne=r;break}Ne=t.return}}function Fg(e){for(;Ne!==null;){var t=Ne;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Nu(4,t)}catch(l){zt(t,r,l)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var n=t.return;try{i.componentDidMount()}catch(l){zt(t,n,l)}}var a=t.return;try{ld(t)}catch(l){zt(t,a,l)}break;case 5:var s=t.return;try{ld(t)}catch(l){zt(t,s,l)}}}catch(l){zt(t,t.return,l)}if(t===e){Ne=null;break}var o=t.sibling;if(o!==null){o.return=t.return,Ne=o;break}Ne=t.return}}var uS=Math.ceil,_u=Hi.ReactCurrentDispatcher,qd=Hi.ReactCurrentOwner,Zr=Hi.ReactCurrentBatchConfig,dt=0,Qt=null,Xt=null,ar=0,Ur=0,za=Cn(0),qt=0,Oo=null,ta=0,Lu=0,Yd=0,_o=null,Rr=null,Kd=0,Qa=1/0,Ii=null,yu=!1,hd=null,Sn=null,Hl=!1,gn=null,xu=0,yo=0,dd=null,Kl=-1,Jl=0;function xr(){return(dt&6)!==0?Vt():Kl!==-1?Kl:Kl=Vt()}function En(e){return(e.mode&1)===0?1:(dt&2)!==0&&ar!==0?ar&-ar:jM.transition!==null?(Jl===0&&(Jl=d0()),Jl):(e=gt,e!==0||(e=window.event,e=e===void 0?16:y0(e.type)),e)}function hi(e,t,r,i){if(50<yo)throw yo=0,dd=null,Error(ue(185));ko(e,r,i),((dt&2)===0||e!==Qt)&&(e===Qt&&((dt&2)===0&&(Lu|=r),qt===4&&fn(e,ar)),Ir(e,i),r===1&&dt===0&&(t.mode&1)===0&&(Qa=Vt()+500,Cu&&Rn()))}function Ir(e,t){var r=e.callbackNode;qx(e,t);var i=iu(e,e===Qt?ar:0);if(i===0)r!==null&&jm(r),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(r!=null&&jm(r),t===1)e.tag===0?XM(zg.bind(null,e)):F0(zg.bind(null,e)),VM(function(){(dt&6)===0&&Rn()}),r=null;else{switch(p0(i)){case 1:r=Sd;break;case 4:r=c0;break;case 16:r=ru;break;case 536870912:r=h0;break;default:r=ru}r=Ov(r,Rv.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Rv(e,t){if(Kl=-1,Jl=0,(dt&6)!==0)throw Error(ue(327));var r=e.callbackNode;if(Xa()&&e.callbackNode!==r)return null;var i=iu(e,e===Qt?ar:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||t)t=Mu(e,i);else{t=i;var n=dt;dt|=2;var a=Nv();(Qt!==e||ar!==t)&&(Ii=null,Qa=Vt()+500,Kn(e,t));do try{dS();break}catch(o){Pv(e,o)}while(!0);Ud(),_u.current=a,dt=n,Xt!==null?t=0:(Qt=null,ar=0,t=qt)}if(t!==0){if(t===2&&(n=zh(e),n!==0&&(i=n,t=pd(e,n))),t===1)throw r=Oo,Kn(e,0),fn(e,i),Ir(e,Vt()),r;if(t===6)fn(e,i);else{if(n=e.current.alternate,(i&30)===0&&!cS(n)&&(t=Mu(e,i),t===2&&(a=zh(e),a!==0&&(i=a,t=pd(e,a))),t===1))throw r=Oo,Kn(e,0),fn(e,i),Ir(e,Vt()),r;switch(e.finishedWork=n,e.finishedLanes=i,t){case 0:case 1:throw Error(ue(345));case 2:jn(e,Rr,Ii);break;case 3:if(fn(e,i),(i&130023424)===i&&(t=Kd+500-Vt(),10<t)){if(iu(e,0)!==0)break;if(n=e.suspendedLanes,(n&i)!==i){xr(),e.pingedLanes|=e.suspendedLanes&n;break}e.timeoutHandle=$h(jn.bind(null,e,Rr,Ii),t);break}jn(e,Rr,Ii);break;case 4:if(fn(e,i),(i&4194240)===i)break;for(t=e.eventTimes,n=-1;0<i;){var s=31-ci(i);a=1<<s,s=t[s],s>n&&(n=s),i&=~a}if(i=n,i=Vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*uS(i/1960))-i,10<i){e.timeoutHandle=$h(jn.bind(null,e,Rr,Ii),i);break}jn(e,Rr,Ii);break;case 5:jn(e,Rr,Ii);break;default:throw Error(ue(329))}}}return Ir(e,Vt()),e.callbackNode===r?Rv.bind(null,e):null}function pd(e,t){var r=_o;return e.current.memoizedState.isDehydrated&&(Kn(e,t).flags|=256),e=Mu(e,t),e!==2&&(t=Rr,Rr=r,t!==null&&fd(t)),e}function fd(e){Rr===null?Rr=e:Rr.push.apply(Rr,e)}function cS(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var n=r[i],a=n.getSnapshot;n=n.value;try{if(!di(a(),n))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fn(e,t){for(t&=~Yd,t&=~Lu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-ci(t),i=1<<r;e[r]=-1,t&=~i}}function zg(e){if((dt&6)!==0)throw Error(ue(327));Xa();var t=iu(e,0);if((t&1)===0)return Ir(e,Vt()),null;var r=Mu(e,t);if(e.tag!==0&&r===2){var i=zh(e);i!==0&&(t=i,r=pd(e,i))}if(r===1)throw r=Oo,Kn(e,0),fn(e,t),Ir(e,Vt()),r;if(r===6)throw Error(ue(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jn(e,Rr,Ii),Ir(e,Vt()),null}function Jd(e,t){var r=dt;dt|=1;try{return e(t)}finally{dt=r,dt===0&&(Qa=Vt()+500,Cu&&Rn())}}function ra(e){gn!==null&&gn.tag===0&&(dt&6)===0&&Xa();var t=dt;dt|=1;var r=Zr.transition,i=gt;try{if(Zr.transition=null,gt=1,e)return e()}finally{gt=i,Zr.transition=r,dt=t,(dt&6)===0&&Rn()}}function Qd(){Ur=za.current,Rt(za)}function Kn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,BM(r)),Xt!==null)for(r=Xt.return;r!==null;){var i=r;switch(Ld(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&lu();break;case 3:Ka(),Rt(Nr),Rt(pr),Vd();break;case 5:Bd(i);break;case 4:Ka();break;case 13:Rt(Ut);break;case 19:Rt(Ut);break;case 10:Od(i.type._context);break;case 22:case 23:Qd()}r=r.return}if(Qt=e,Xt=e=wn(e.current,null),ar=Ur=t,qt=0,Oo=null,Yd=Lu=ta=0,Rr=_o=null,qn!==null){for(t=0;t<qn.length;t++)if(r=qn[t],i=r.interleaved,i!==null){r.interleaved=null;var n=i.next,a=r.pending;if(a!==null){var s=a.next;a.next=n,i.next=s}r.pending=i}qn=null}return e}function Pv(e,t){do{var r=Xt;try{if(Ud(),$l.current=vu,gu){for(var i=Ot.memoizedState;i!==null;){var n=i.queue;n!==null&&(n.pending=null),i=i.next}gu=!1}if(ea=0,Jt=$t=Ot=null,go=!1,Io=0,qd.current=null,r===null||r.return===null){qt=1,Oo=t,Xt=null;break}e:{var a=e,s=r.return,o=r,l=t;if(t=ar,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=o,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=bg(s);if(f!==null){f.flags&=-257,Ag(f,s,o,a,t),f.mode&1&&Tg(a,u,t),t=f,l=u;var y=t.updateQueue;if(y===null){var _=new Set;_.add(l),t.updateQueue=_}else y.add(l);break e}else{if((t&1)===0){Tg(a,u,t),Zd();break e}l=Error(ue(426))}}else if(It&&o.mode&1){var v=bg(s);if(v!==null){(v.flags&65536)===0&&(v.flags|=256),Ag(v,s,o,a,t),Id(Ja(l,o));break e}}a=l=Ja(l,o),qt!==4&&(qt=2),_o===null?_o=[a]:_o.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var d=pv(a,l,t);yg(a,d);break e;case 1:o=l;var g=a.type,m=a.stateNode;if((a.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Sn===null||!Sn.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var x=fv(a,o,t);yg(a,x);break e}}a=a.return}while(a!==null)}Iv(r)}catch(P){t=P,Xt===r&&r!==null&&(Xt=r=r.return);continue}break}while(!0)}function Nv(){var e=_u.current;return _u.current=vu,e===null?vu:e}function Zd(){(qt===0||qt===3||qt===2)&&(qt=4),Qt===null||(ta&268435455)===0&&(Lu&268435455)===0||fn(Qt,ar)}function Mu(e,t){var r=dt;dt|=2;var i=Nv();(Qt!==e||ar!==t)&&(Ii=null,Kn(e,t));do try{hS();break}catch(n){Pv(e,n)}while(!0);if(Ud(),dt=r,_u.current=i,Xt!==null)throw Error(ue(261));return Qt=null,ar=0,qt}function hS(){for(;Xt!==null;)Lv(Xt)}function dS(){for(;Xt!==null&&!zx();)Lv(Xt)}function Lv(e){var t=Uv(e.alternate,e,Ur);e.memoizedProps=e.pendingProps,t===null?Iv(e):Xt=t,qd.current=null}function Iv(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=nS(r,t,Ur),r!==null){Xt=r;return}}else{if(r=aS(r,t),r!==null){r.flags&=32767,Xt=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{qt=6,Xt=null;return}}if(t=t.sibling,t!==null){Xt=t;return}Xt=t=e}while(t!==null);qt===0&&(qt=5)}function jn(e,t,r){var i=gt,n=Zr.transition;try{Zr.transition=null,gt=1,pS(e,t,r,i)}finally{Zr.transition=n,gt=i}return null}function pS(e,t,r,i){do Xa();while(gn!==null);if((dt&6)!==0)throw Error(ue(327));r=e.finishedWork;var n=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(ue(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(Yx(e,a),e===Qt&&(Xt=Qt=null,ar=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Hl||(Hl=!0,Ov(ru,function(){return Xa(),null})),a=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||a){a=Zr.transition,Zr.transition=null;var s=gt;gt=1;var o=dt;dt|=4,qd.current=null,oS(e,r),Av(r,e),UM(Xh),nu=!!Wh,Xh=Wh=null,e.current=r,lS(r,e,n),Bx(),dt=o,gt=s,Zr.transition=a}else e.current=r;if(Hl&&(Hl=!1,gn=e,xu=n),a=e.pendingLanes,a===0&&(Sn=null),Gx(r.stateNode,i),Ir(e,Vt()),t!==null)for(i=e.onRecoverableError,r=0;r<t.length;r++)n=t[r],i(n.value,{componentStack:n.stack,digest:n.digest});if(yu)throw yu=!1,e=hd,hd=null,e;return(xu&1)!==0&&e.tag!==0&&Xa(),a=e.pendingLanes,(a&1)!==0?e===dd?yo++:(yo=0,dd=e):yo=0,Rn(),null}function Xa(){if(gn!==null){var e=p0(xu),t=Zr.transition,r=gt;try{if(Zr.transition=null,gt=16>e?16:e,gn===null)var i=!1;else{if(e=gn,gn=null,xu=0,(dt&6)!==0)throw Error(ue(331));var n=dt;for(dt|=4,Ne=e.current;Ne!==null;){var a=Ne,s=a.child;if((Ne.flags&16)!==0){var o=a.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Ne=u;Ne!==null;){var c=Ne;switch(c.tag){case 0:case 11:case 15:vo(8,c,a)}var h=c.child;if(h!==null)h.return=c,Ne=h;else for(;Ne!==null;){c=Ne;var p=c.sibling,f=c.return;if(wv(c),c===u){Ne=null;break}if(p!==null){p.return=f,Ne=p;break}Ne=f}}}var y=a.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var v=_.sibling;_.sibling=null,_=v}while(_!==null)}}Ne=a}}if((a.subtreeFlags&2064)!==0&&s!==null)s.return=a,Ne=s;else e:for(;Ne!==null;){if(a=Ne,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:vo(9,a,a.return)}var d=a.sibling;if(d!==null){d.return=a.return,Ne=d;break e}Ne=a.return}}var g=e.current;for(Ne=g;Ne!==null;){s=Ne;var m=s.child;if((s.subtreeFlags&2064)!==0&&m!==null)m.return=s,Ne=m;else e:for(s=g;Ne!==null;){if(o=Ne,(o.flags&2048)!==0)try{switch(o.tag){case 0:case 11:case 15:Nu(9,o)}}catch(P){zt(o,o.return,P)}if(o===s){Ne=null;break e}var x=o.sibling;if(x!==null){x.return=o.return,Ne=x;break e}Ne=o.return}}if(dt=n,Rn(),wi&&typeof wi.onPostCommitFiberRoot=="function")try{wi.onPostCommitFiberRoot(Eu,e)}catch{}i=!0}return i}finally{gt=r,Zr.transition=t}}return!1}function Bg(e,t,r){t=Ja(r,t),t=pv(e,t,1),e=Mn(e,t,1),t=xr(),e!==null&&(ko(e,1,t),Ir(e,t))}function zt(e,t,r){if(e.tag===3)Bg(e,e,r);else for(;t!==null;){if(t.tag===3){Bg(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Sn===null||!Sn.has(i))){e=Ja(r,e),e=fv(t,e,1),t=Mn(t,e,1),e=xr(),t!==null&&(ko(t,1,e),Ir(t,e));break}}t=t.return}}function fS(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),t=xr(),e.pingedLanes|=e.suspendedLanes&r,Qt===e&&(ar&r)===r&&(qt===4||qt===3&&(ar&130023424)===ar&&500>Vt()-Kd?Kn(e,0):Yd|=r),Ir(e,t)}function Dv(e,t){t===0&&((e.mode&1)===0?t=1:(t=Cl,Cl<<=1,(Cl&130023424)===0&&(Cl=4194304)));var r=xr();e=Bi(e,t),e!==null&&(ko(e,t,r),Ir(e,r))}function mS(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Dv(e,r)}function gS(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,n=e.memoizedState;n!==null&&(r=n.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(ue(314))}i!==null&&i.delete(t),Dv(e,r)}var Uv;Uv=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Nr.current)Pr=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return Pr=!1,iS(e,t,r);Pr=(e.flags&131072)!==0}else Pr=!1,It&&(t.flags&1048576)!==0&&z0(t,hu,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Yl(e,t),e=t.pendingProps;var n=$a(t,pr.current);Wa(t,r),n=Gd(null,t,i,e,n,r);var a=Wd();return t.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Lr(i)?(a=!0,uu(t)):a=!1,t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,Fd(t),n.updater=Pu,t.stateNode=n,n._reactInternals=t,ed(t,i,e,r),t=id(null,t,i,!0,a,r)):(t.tag=0,It&&a&&Nd(t),yr(null,t,n,r),t=t.child),t;case 16:i=t.elementType;e:{switch(Yl(e,t),e=t.pendingProps,n=i._init,i=n(i._payload),t.type=i,n=t.tag=_S(i),e=oi(i,e),n){case 0:t=rd(null,t,i,e,r);break e;case 1:t=Pg(null,t,i,e,r);break e;case 11:t=Cg(null,t,i,e,r);break e;case 14:t=Rg(null,t,i,oi(i.type,e),r);break e}throw Error(ue(306,i,""))}return t;case 0:return i=t.type,n=t.pendingProps,n=t.elementType===i?n:oi(i,n),rd(e,t,i,n,r);case 1:return i=t.type,n=t.pendingProps,n=t.elementType===i?n:oi(i,n),Pg(e,t,i,n,r);case 3:e:{if(_v(t),e===null)throw Error(ue(387));i=t.pendingProps,a=t.memoizedState,n=a.element,X0(e,t),fu(t,i,null,r);var s=t.memoizedState;if(i=s.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){n=Ja(Error(ue(423)),t),t=Ng(e,t,i,r,n);break e}else if(i!==n){n=Ja(Error(ue(424)),t),t=Ng(e,t,i,r,n);break e}else for(Or=xn(t.stateNode.containerInfo.firstChild),kr=t,It=!0,ui=null,r=G0(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(qa(),i===n){t=Vi(e,t,r);break e}yr(e,t,i,r)}t=t.child}return t;case 5:return j0(t),e===null&&Jh(t),i=t.type,n=t.pendingProps,a=e!==null?e.memoizedProps:null,s=n.children,jh(i,n)?s=null:a!==null&&jh(i,a)&&(t.flags|=32),vv(e,t),yr(e,t,s,r),t.child;case 6:return e===null&&Jh(t),null;case 13:return yv(e,t,r);case 4:return zd(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ya(t,null,i,r):yr(e,t,i,r),t.child;case 11:return i=t.type,n=t.pendingProps,n=t.elementType===i?n:oi(i,n),Cg(e,t,i,n,r);case 7:return yr(e,t,t.pendingProps,r),t.child;case 8:return yr(e,t,t.pendingProps.children,r),t.child;case 12:return yr(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,n=t.pendingProps,a=t.memoizedProps,s=n.value,Et(du,i._currentValue),i._currentValue=s,a!==null)if(di(a.value,s)){if(a.children===n.children&&!Nr.current){t=Vi(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var o=a.dependencies;if(o!==null){s=a.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(a.tag===1){l=ki(-1,r&-r),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),Qh(a.return,r,t),o.lanes|=r;break}l=l.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(ue(341));s.lanes|=r,o=s.alternate,o!==null&&(o.lanes|=r),Qh(s,r,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}yr(e,t,n.children,r),t=t.child}return t;case 9:return n=t.type,i=t.pendingProps.children,Wa(t,r),n=ei(n),i=i(n),t.flags|=1,yr(e,t,i,r),t.child;case 14:return i=t.type,n=oi(i,t.pendingProps),n=oi(i.type,n),Rg(e,t,i,n,r);case 15:return mv(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,n=t.pendingProps,n=t.elementType===i?n:oi(i,n),Yl(e,t),t.tag=1,Lr(i)?(e=!0,uu(t)):e=!1,Wa(t,r),dv(t,i,n),ed(t,i,n,r),id(null,t,i,!0,e,r);case 19:return xv(e,t,r);case 22:return gv(e,t,r)}throw Error(ue(156,t.tag))};function Ov(e,t){return u0(e,t)}function vS(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qr(e,t,r,i){return new vS(e,t,r,i)}function ep(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _S(e){if(typeof e=="function")return ep(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yd)return 11;if(e===xd)return 14}return 2}function wn(e,t){var r=e.alternate;return r===null?(r=Qr(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ql(e,t,r,i,n,a){var s=2;if(i=e,typeof e=="function")ep(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ra:return Jn(r.children,n,a,t);case _d:s=8,n|=8;break;case wh:return e=Qr(12,r,t,n|2),e.elementType=wh,e.lanes=a,e;case Th:return e=Qr(13,r,t,n),e.elementType=Th,e.lanes=a,e;case bh:return e=Qr(19,r,t,n),e.elementType=bh,e.lanes=a,e;case jg:return Iu(r,n,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wg:s=10;break e;case Xg:s=9;break e;case yd:s=11;break e;case xd:s=14;break e;case hn:s=16,i=null;break e}throw Error(ue(130,e==null?e:typeof e,""))}return t=Qr(s,r,t,n),t.elementType=e,t.type=i,t.lanes=a,t}function Jn(e,t,r,i){return e=Qr(7,e,i,t),e.lanes=r,e}function Iu(e,t,r,i){return e=Qr(22,e,i,t),e.elementType=jg,e.lanes=r,e.stateNode={isHidden:!1},e}function Mh(e,t,r){return e=Qr(6,e,null,t),e.lanes=r,e}function Sh(e,t,r){return t=Qr(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function yS(e,t,r,i,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ah(0),this.expirationTimes=ah(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ah(0),this.identifierPrefix=i,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function tp(e,t,r,i,n,a,s,o,l){return e=new yS(e,t,r,o,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Qr(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fd(a),e}function xS(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ca,key:i==null?null:""+i,children:e,containerInfo:t,implementation:r}}function kv(e){if(!e)return bn;e=e._reactInternals;e:{if(na(e)!==e||e.tag!==1)throw Error(ue(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Lr(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(ue(171))}if(e.tag===1){var r=e.type;if(Lr(r))return k0(e,r,t)}return t}function Fv(e,t,r,i,n,a,s,o,l){return e=tp(r,i,!0,e,n,a,s,o,l),e.context=kv(null),r=e.current,i=xr(),n=En(r),a=ki(i,n),a.callback=t??null,Mn(r,a,n),e.current.lanes=n,ko(e,n,i),Ir(e,i),e}function Du(e,t,r,i){var n=t.current,a=xr(),s=En(n);return r=kv(r),t.context===null?t.context=r:t.pendingContext=r,t=ki(a,s),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=Mn(n,t,s),e!==null&&(hi(e,n,s,a),jl(e,n,s)),s}function Su(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function Vg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function rp(e,t){Vg(e,t),(e=e.alternate)&&Vg(e,t)}function MS(){return null}var zv=typeof reportError=="function"?reportError:function(e){console.error(e)};function ip(e){this._internalRoot=e}Uu.prototype.render=ip.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(ue(409));Du(e,t,null,null)};Uu.prototype.unmount=ip.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ra(function(){Du(null,e,null,null)}),t[zi]=null}};function Uu(e){this._internalRoot=e}Uu.prototype.unstable_scheduleHydration=function(e){if(e){var t=g0();e={blockedOn:null,target:e,priority:t};for(var r=0;r<pn.length&&t!==0&&t<pn[r].priority;r++);pn.splice(r,0,e),r===0&&_0(e)}};function np(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ou(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hg(){}function SS(e,t,r,i,n){if(n){if(typeof i=="function"){var a=i;i=function(){var u=Su(s);a.call(u)}}var s=Fv(t,i,e,0,null,!1,!1,"",Hg);return e._reactRootContainer=s,e[zi]=s.current,Co(e.nodeType===8?e.parentNode:e),ra(),s}for(;n=e.lastChild;)e.removeChild(n);if(typeof i=="function"){var o=i;i=function(){var u=Su(l);o.call(u)}}var l=tp(e,0,!1,null,null,!1,!1,"",Hg);return e._reactRootContainer=l,e[zi]=l.current,Co(e.nodeType===8?e.parentNode:e),ra(function(){Du(t,l,r,i)}),l}function ku(e,t,r,i,n){var a=r._reactRootContainer;if(a){var s=a;if(typeof n=="function"){var o=n;n=function(){var l=Su(s);o.call(l)}}Du(t,s,e,n)}else s=SS(r,t,e,n,i);return Su(s)}f0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=lo(t.pendingLanes);r!==0&&(Ed(t,r|1),Ir(t,Vt()),(dt&6)===0&&(Qa=Vt()+500,Rn()))}break;case 13:ra(function(){var i=Bi(e,1);if(i!==null){var n=xr();hi(i,e,1,n)}}),rp(e,1)}};wd=function(e){if(e.tag===13){var t=Bi(e,134217728);if(t!==null){var r=xr();hi(t,e,134217728,r)}rp(e,134217728)}};m0=function(e){if(e.tag===13){var t=En(e),r=Bi(e,t);if(r!==null){var i=xr();hi(r,e,t,i)}rp(e,t)}};g0=function(){return gt};v0=function(e,t){var r=gt;try{return gt=e,t()}finally{gt=r}};Oh=function(e,t,r){switch(t){case"input":if(Rh(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var n=Au(i);if(!n)throw Error(ue(90));qg(i),Rh(i,n)}}}break;case"textarea":Kg(e,r);break;case"select":t=r.value,t!=null&&Ba(e,!!r.multiple,t,!1)}};i0=Jd;n0=ra;var ES={usingClientEntryPoint:!1,Events:[zo,Ia,Au,t0,r0,Jd]},no={findFiberByHostInstance:$n,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wS={bundleType:no.bundleType,version:no.version,rendererPackageName:no.rendererPackageName,rendererConfig:no.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hi.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=o0(e),e===null?null:e.stateNode},findFiberByHostInstance:no.findFiberByHostInstance||MS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ao=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ao.isDisabled&&ao.supportsFiber))try{Eu=ao.inject(wS),wi=ao}catch{}var ao;Br.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ES;Br.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!np(t))throw Error(ue(200));return xS(e,t,null,r)};Br.createRoot=function(e,t){if(!np(e))throw Error(ue(299));var r=!1,i="",n=zv;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(n=t.onRecoverableError)),t=tp(e,1,!1,null,null,r,!1,i,n),e[zi]=t.current,Co(e.nodeType===8?e.parentNode:e),new ip(t)};Br.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(ue(188)):(e=Object.keys(e).join(","),Error(ue(268,e)));return e=o0(t),e=e===null?null:e.stateNode,e};Br.flushSync=function(e){return ra(e)};Br.hydrate=function(e,t,r){if(!Ou(t))throw Error(ue(200));return ku(null,e,t,!0,r)};Br.hydrateRoot=function(e,t,r){if(!np(e))throw Error(ue(405));var i=r!=null&&r.hydratedSources||null,n=!1,a="",s=zv;if(r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=Fv(t,null,e,1,r??null,n,!1,a,s),e[zi]=t.current,Co(e),i)for(e=0;e<i.length;e++)r=i[e],n=r._getVersion,n=n(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,n]:t.mutableSourceEagerHydrationData.push(r,n);return new Uu(t)};Br.render=function(e,t,r){if(!Ou(t))throw Error(ue(200));return ku(null,e,t,!1,r)};Br.unmountComponentAtNode=function(e){if(!Ou(e))throw Error(ue(40));return e._reactRootContainer?(ra(function(){ku(null,null,e,!1,function(){e._reactRootContainer=null,e[zi]=null})}),!0):!1};Br.unstable_batchedUpdates=Jd;Br.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!Ou(r))throw Error(ue(200));if(e==null||e._reactInternals===void 0)throw Error(ue(38));return ku(e,t,r,!1,i)};Br.version="18.3.1-next-f1338f8080-20240426"});var Gv=Li((dR,Hv)=>{"use strict";function Vv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vv)}catch(e){console.error(e)}}Vv(),Hv.exports=Bv()});var Xv=Li(ap=>{"use strict";var Wv=Gv();ap.createRoot=Wv.createRoot,ap.hydrateRoot=Wv.hydrateRoot;var pR});var $v=Li(Fu=>{"use strict";var TS=Ta(),bS=Symbol.for("react.element"),AS=Symbol.for("react.fragment"),CS=Object.prototype.hasOwnProperty,RS=TS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,PS={key:!0,ref:!0,__self:!0,__source:!0};function jv(e,t,r){var i,n={},a=null,s=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(i in t)CS.call(t,i)&&!PS.hasOwnProperty(i)&&(n[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)n[i]===void 0&&(n[i]=t[i]);return{$$typeof:bS,type:e,key:a,ref:s,props:n,_owner:RS.current}}Fu.Fragment=AS;Fu.jsx=jv;Fu.jsxs=jv});var Vr=Li((gR,qv)=>{"use strict";qv.exports=$v()});var ex=lr(Xv());var zu=lr(Ta()),Kv=lr(Vr());var NS=()=>window.location.hash.slice(1).split("?")[0]||"/";function Yv({children:e}){let[,t]=zu.default.useState(0);zu.default.useEffect(()=>{let n=()=>t(a=>a+1);return window.addEventListener("hashchange",n),()=>window.removeEventListener("hashchange",n)},[]);let r=zu.default.Children.toArray(e);return(r.find(n=>n.props.path===NS())||r[0]).props.element}var Bu=()=>null;var ml=lr(Ta());var yt={bride:"Aastha",groom:"Mayank",brideFull:"Aastha Agrawal",groomFull:"Mayank Singhal",brideHi:"\u0906\u0938\u094D\u0925\u093E",groomHi:"\u092E\u092F\u0902\u0915",brideSurnameHi:"\u0905\u0917\u094D\u0930\u0935\u093E\u0932",groomSurnameHi:"\u0938\u093F\u0902\u0918\u0932",weddingDate:"2026-11-22",venueName:"Agrasen Bhawan",venueNameHi:"\u0905\u0917\u094D\u0930\u0938\u0947\u0928 \u092D\u0935\u0928",venueCity:"Rourkela, Odisha",mapsQuery:"Agrasen Bhawan Rourkela",events:[{id:"sangeet",name:"Sangeet",hi:"\u0938\u0902\u0917\u0940\u0924",date:"2026-11-21",time:"7:30 PM",note:"An evening of songs, dance and family.",icon:"note",venue:"Maheswari Bhawan"},{id:"baraat",name:"Baraat & Jaimala",hi:"\u092C\u093E\u0930\u093E\u0924",date:"2026-11-22",time:"6:30 PM",note:"The groom arrives. The garlands are exchanged.",icon:"diya",venue:"Agrasen Bhawan"},{id:"pheras",name:"Pheras",hi:"\u092B\u0947\u0930\u0947",date:"2026-11-22",time:"9:00 PM",note:"Seven vows around the sacred fire.",icon:"flame",venue:"Agrasen Bhawan"}],countdownTo:"2026-11-22T18:30:00+05:30",family:"The Agrawal and Singhal families"};function Vo(e){let t=new Date(e+"T12:00:00+05:30"),r=i=>t.toLocaleDateString("en-IN",{timeZone:"Asia/Kolkata",...i});return{weekday:r({weekday:"long"}),day:r({day:"numeric"}),month:r({month:"long"}),monthShort:r({month:"short"}),year:r({year:"numeric"})}}function Jv(){return"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(yt.mapsQuery)}function Qv(){let e=yt.events[yt.events.length-2],r=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Wedding//EN","BEGIN:VEVENT","UID:aastha-mayank-wedding@invite","DTSTAMP:20261001T000000Z","DTSTART;TZID=Asia/Kolkata:"+"20261122T183000","DTEND;TZID=Asia/Kolkata:20261122T233000",`SUMMARY:${yt.brideFull.split(" ")[0]} weds ${yt.groom} (${e.name})`,`LOCATION:${yt.venueName}\\, ${yt.venueCity}`,"END:VEVENT","END:VCALENDAR"];return"data:text/calendar;charset=utf-8,"+encodeURIComponent(r.join(`\r
`))}var Ht=lr(Ta());var ut=lr(Vr());function aa(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296}}function LS(){let[e,t]=(0,Ht.useState)(()=>typeof window<"u"&&!!window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches);return(0,Ht.useEffect)(()=>{if(!window.matchMedia)return;let r=window.matchMedia("(prefers-reduced-motion: reduce)"),i=()=>t(r.matches);return r.addEventListener?.("change",i),()=>r.removeEventListener?.("change",i)},[]),e}var t_=e=>Math.min(1,Math.max(0,e)),Zv=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,IS=e=>e*e*(.6+.4*e),e_=e=>1-Math.pow(1-e,3),Ho=(e,t,r,i)=>i(t_((e-t)/(r-t)));function r_(){let e=()=>{let i=typeof window<"u"?new URLSearchParams(window.location.search).get("H"):null;if(i)return parseInt(i,10);if(typeof window<"u"&&window.top===window.self&&!i)return Math.max(520,window.innerHeight);let n=typeof window<"u"&&window.screen&&window.screen.height||800,a=typeof window<"u"&&window.innerWidth||390;return Math.round(Math.max(500,Math.min(n-250,a*2,840)))},[t,r]=(0,Ht.useState)(e);return(0,Ht.useEffect)(()=>{let i=()=>r(e());return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),t}function i_(e=6200){let t=typeof window<"u"?new URLSearchParams(window.location.search):new URLSearchParams,r=LS(),i=t.get("skip")!==null,n=t.get("p"),[a,s]=(0,Ht.useState)(i?"done":"idle"),[o,l]=(0,Ht.useState)(i),u=(0,Ht.useRef)(null),c=(0,Ht.useRef)(0),h=y=>{let _=u.current;if(!_)return;let v=_.style;v.setProperty("--p",String(y)),v.setProperty("--door",String(Ho(y,.06,.4,Zv))),v.setProperty("--cam",String(Ho(y,.16,.98,IS))),v.setProperty("--glow",String(Ho(y,.3,.9,Zv))),v.setProperty("--fade",String(Ho(y,.84,1,e_))),v.setProperty("--ui",String(1-Ho(y,0,.12,e_)))};return(0,Ht.useEffect)(()=>{r&&a==="idle"&&(s("done"),l(!0))},[r,a]),(0,Ht.useEffect)(()=>{a==="idle"&&n!==null&&h(parseFloat(n))},[a,n]),(0,Ht.useEffect)(()=>()=>cancelAnimationFrame(c.current),[]),{state:a,ready:o,ref:u,start:()=>{if(a!=="idle")return;s("opening");let y=performance.now(),_=!1,v=d=>{let g=t_((d-y)/e);h(g),g>.86&&!_&&(_=!0,l(!0)),g<1?c.current=requestAnimationFrame(v):s("done")};c.current=requestAnimationFrame(v)},skip:()=>{cancelAnimationFrame(c.current),h(1),l(!0),s("done")}}}function DS(e){let[t,r]=(0,Ht.useState)(()=>Date.now());(0,Ht.useEffect)(()=>{let a=setInterval(()=>r(Date.now()),1e3);return()=>clearInterval(a)},[]);let i=Math.max(0,new Date(e).getTime()-t),n=Math.floor(i/1e3);return{days:Math.floor(n/86400),hours:Math.floor(n%86400/3600),minutes:Math.floor(n%3600/60),seconds:n%60,done:i===0}}function n_({cls:e}){let t=DS(yt.countdownTo),r=[["Days",t.days],["Hours",t.hours],["Minutes",t.minutes],["Seconds",t.seconds]];return(0,ut.jsx)("div",{className:e,role:"timer","aria-label":`${t.days} days, ${t.hours} hours, ${t.minutes} minutes and ${t.seconds} seconds until the wedding`,children:r.map(([i,n])=>(0,ut.jsxs)("div",{className:"cd-cell",children:[(0,ut.jsx)("span",{className:"cd-num","aria-hidden":"true",children:String(n).padStart(2,"0")}),(0,ut.jsx)("span",{className:"cd-label","aria-hidden":"true",children:i})]},i))})}function Gi({children:e,className:t="",delay:r=0,as:i="div"}){let n=(0,Ht.useRef)(null),[a,s]=(0,Ht.useState)(!1);return(0,Ht.useEffect)(()=>{let o=n.current;if(!o)return;if(!("IntersectionObserver"in window)){s(!0);return}let l=new IntersectionObserver(u=>u.forEach(c=>{c.isIntersecting&&(s(!0),l.disconnect())}),{threshold:.12});return l.observe(o),()=>l.disconnect()},[]),(0,ut.jsx)(i,{ref:n,className:`reveal ${a?"in":""} ${t}`,style:{transitionDelay:`${r}ms`},children:e})}function a_({count:e=22,kind:t="petal",seed:r=7}){let i=(0,Ht.useMemo)(()=>{let n=aa(r);return Array.from({length:e},()=>({l:n()*100,d:n()*-20,t:12+n()*14,s:6+n()*10,x:(n()-.5)*120,rot:n()*360,o:.35+n()*.5}))},[e,r]);return(0,ut.jsx)("div",{className:`drift drift-${t}`,"aria-hidden":"true",children:i.map((n,a)=>(0,ut.jsx)("i",{style:{left:`${n.l}%`,animationDelay:`${n.d}s`,animationDuration:`${n.t}s`,width:n.s,height:n.s*(t==="petal"?1.4:1),"--dx":`${n.x}px`,"--r":`${n.rot}deg`,opacity:n.o}},a))})}function sp({name:e}){let t={fill:"none",stroke:"currentColor",strokeWidth:1.4,strokeLinecap:"round",strokeLinejoin:"round"},r={leaf:(0,ut.jsxs)(ut.Fragment,{children:[(0,ut.jsx)("path",{d:"M6 26C6 14 14 7 26 6c0 12-7 20-20 20z",...t}),(0,ut.jsx)("path",{d:"M6 26L19 13",...t})]}),sun:(0,ut.jsxs)(ut.Fragment,{children:[(0,ut.jsx)("circle",{cx:"16",cy:"16",r:"5",...t}),Array.from({length:8},(i,n)=>{let a=n*Math.PI/4;return(0,ut.jsx)("path",{d:`M${16+Math.cos(a)*8.5} ${16+Math.sin(a)*8.5}L${16+Math.cos(a)*12} ${16+Math.sin(a)*12}`,...t},n)})]}),note:(0,ut.jsxs)(ut.Fragment,{children:[(0,ut.jsx)("path",{d:"M12 22V7l12-3v15",...t}),(0,ut.jsx)("circle",{cx:"9.5",cy:"22",r:"2.6",...t}),(0,ut.jsx)("circle",{cx:"21.5",cy:"19",r:"2.6",...t})]}),diya:(0,ut.jsxs)(ut.Fragment,{children:[(0,ut.jsx)("path",{d:"M5 17c0 5 5 8 11 8s11-3 11-8z",...t}),(0,ut.jsx)("path",{d:"M16 15c-3-3-2-6 0-9 2 3 3 6 0 9z",...t})]}),flame:(0,ut.jsxs)(ut.Fragment,{children:[(0,ut.jsx)("path",{d:"M16 28c-6 0-9-4-9-8 0-5 5-7 5-13 4 2 6 5 6 8 2-1 3-3 3-5 3 3 4 6 4 10 0 5-4 8-9 8z",...t}),(0,ut.jsx)("path",{d:"M16 28c-2.5 0-4-1.8-4-4 0-2.5 3-4 4-7 2 2 4 4 4 7 0 2.2-1.5 4-4 4z",...t})]}),pin:(0,ut.jsxs)(ut.Fragment,{children:[(0,ut.jsx)("path",{d:"M16 29s9-8.5 9-15a9 9 0 10-18 0c0 6.5 9 15 9 15z",...t}),(0,ut.jsx)("circle",{cx:"16",cy:"14",r:"3.4",...t})]})};return(0,ut.jsx)("svg",{viewBox:"0 0 32 32",width:"32",height:"32","aria-hidden":"true",children:r[e]})}var I=lr(Vr()),wt=730,at=600;function Zt(e,t,r,i,n,a=!0){let s=i-n;return`M${e-t} ${r}V${i}C${e-t} ${i-.55*s} ${e-t*.3} ${n+.3*s} ${e} ${n}C${e+t*.3} ${n+.3*s} ${e+t} ${i-.55*s} ${e+t} ${i}V${r}${a?"Z":""}`}var Go=(e,t,r)=>`M${e-r} ${t}C${e-r} ${t-r*.95} ${e-r*.25} ${t-r*1.05} ${e} ${t-r*1.65}C${e+r*.25} ${t-r*1.05} ${e+r} ${t-r*.95} ${e+r} ${t}Z`;function o_({x:e,y:t,s:r=1}){return(0,I.jsxs)("g",{stroke:"#f4c75a",fill:"#f4c75a",children:[(0,I.jsx)("line",{x1:e,y1:t,x2:e,y2:t-20*r,strokeWidth:2*r}),(0,I.jsx)("circle",{cx:e,cy:t-24*r,r:4.5*r,stroke:"none"}),(0,I.jsx)("circle",{cx:e,cy:t-31*r,r:2.4*r,stroke:"none"})]})}function s_({x:e,y:t,s:r=1}){let i=34*r;return(0,I.jsxs)("g",{children:[(0,I.jsx)("path",{d:Go(e,t-38*r,i*.62),fill:"url(#rDome)",stroke:"#f4c75a",strokeWidth:1.2}),(0,I.jsx)(o_,{x:e,y:t-38*r-i*.62*1.65,s:r*.7}),(0,I.jsx)("rect",{x:e-i*.7,y:t-40*r,width:i*1.4,height:4*r,fill:"#f4c75a"}),[-1,-.33,.33,1].map((n,a)=>(0,I.jsx)("rect",{x:e+n*i*.62-2*r,y:t-36*r,width:4*r,height:36*r,fill:"#8c2230",stroke:"#f4c75a",strokeWidth:.6},a)),(0,I.jsx)("rect",{x:e-i*.7,y:t-2,width:i*1.4,height:4*r,fill:"#f4c75a"})]})}function l_(){let e=aa(11),t=Array.from({length:190},()=>({x:-500+e()*2200,y:-200+e()*720,s:.6+e()*1.6,d:e()*5,t:2+e()*4}));return(0,I.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,I.jsxs)("defs",{children:[(0,I.jsxs)("linearGradient",{id:"rSky",gradientUnits:"userSpaceOnUse",x1:"0",y1:"0",x2:"0",y2:"900",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#14020a"}),(0,I.jsx)("stop",{offset:"0.35",stopColor:"#3a0714"}),(0,I.jsx)("stop",{offset:"0.62",stopColor:"#7d1a1c"}),(0,I.jsx)("stop",{offset:"0.8",stopColor:"#c8561f"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#f0a23a"})]}),(0,I.jsxs)("radialGradient",{id:"rMoon",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#ffe9a8",stopOpacity:"0.9"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#ffe9a8",stopOpacity:"0"})]}),(0,I.jsxs)("mask",{id:"rCres",children:[(0,I.jsx)("rect",{width:"1200",height:"900",fill:"#000"}),(0,I.jsx)("circle",{cx:"930",cy:"170",r:"34",fill:"#fff"}),(0,I.jsx)("circle",{cx:"948",cy:"160",r:"30",fill:"#000"})]})]}),(0,I.jsx)("rect",{x:"-2000",y:"-2000",width:"5200",height:"5400",fill:"url(#rSky)"}),t.map((r,i)=>(0,I.jsx)("circle",{className:"twinkle",cx:r.x,cy:r.y,r:r.s,fill:"#ffe7a6",style:{animationDelay:`${r.d}s`,animationDuration:`${r.t}s`}},i)),(0,I.jsx)("circle",{cx:"930",cy:"170",r:"120",fill:"url(#rMoon)",opacity:"0.5"}),(0,I.jsx)("rect",{width:"1200",height:"900",fill:"#ffe9a8",mask:"url(#rCres)"})]})}function u_(){let e=aa(5),t=[],r=-900,i=0;for(;r<2100;){let n=50+e()*90,a=120+e()*170,s=640-a,o=e();t.push((0,I.jsx)("rect",{x:r,y:s,width:n,height:a+100,fill:"#3a0a16"},"b"+i)),o<.45?t.push((0,I.jsx)("path",{d:Go(r+n/2,s,n*.38),fill:"#3a0a16"},"d"+i)):o<.7&&t.push((0,I.jsxs)("g",{children:[(0,I.jsx)("rect",{x:r+n/2-4,y:s-70,width:"8",height:"70",fill:"#3a0a16"}),(0,I.jsx)("path",{d:Go(r+n/2,s-70,9),fill:"#3a0a16"})]},"m"+i)),e()<.6&&t.push((0,I.jsx)("rect",{className:"flick",x:r+n*.3,y:s+24,width:"7",height:"12",rx:"3",fill:"#ffc45a",opacity:"0.8",style:{animationDelay:`${e()*4}s`}},"w"+i)),r+=n+2+e()*8,i++}return(0,I.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,I.jsx)("defs",{children:(0,I.jsxs)("linearGradient",{id:"rHaze",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,I.jsx)("stop",{offset:"0.5",stopColor:"#f0a23a",stopOpacity:"0"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#f0a23a",stopOpacity:"0.45"})]})}),(0,I.jsx)("g",{opacity:"0.95",children:t}),(0,I.jsx)("rect",{x:"-1500",y:"420",width:"4200",height:"320",fill:"url(#rHaze)"})]})}function c_(){let i=n=>{let o=n===1?870:330,l=n===1?870:-660,u=990;return(0,I.jsxs)("g",{children:[(0,I.jsx)("rect",{x:l,y:"470",width:u,height:wt-470,fill:"url(#rWall)"}),(0,I.jsx)("rect",{x:l,y:"470",width:u,height:"8",fill:"#f4c75a"}),Array.from({length:Math.floor(u/15)},(c,h)=>(0,I.jsx)("rect",{x:l+h*15+2,y:"458",width:"9",height:"12",fill:"#5a1220",stroke:"#f4c75a",strokeWidth:"0.6"},h)),Array.from({length:15},(c,h)=>{let p=n===1?o+66*h+33:o-66*h-33;return(0,I.jsxs)("g",{children:[(0,I.jsx)("path",{d:Zt(p,22,690,590,540),fill:"#ffb347",opacity:"0.92"}),(0,I.jsx)("path",{d:Zt(p,22,690,590,540),fill:"none",stroke:"#f4c75a",strokeWidth:"2.5"}),(0,I.jsx)("path",{d:Zt(p,31,690,590,528,!1),fill:"none",stroke:"#f4c75a",strokeWidth:"1",opacity:"0.7"}),(0,I.jsx)("path",{d:Zt(p,14,690,600,565),fill:"#7b1a10",opacity:"0.55"})]},h)}),(0,I.jsx)("rect",{x:l,y:wt-36,width:u,height:"6",fill:"#f4c75a",opacity:"0.8"}),[60,270,560].map((c,h)=>(0,I.jsx)(s_,{x:n===1?870+c:330-c,y:"458",s:1.15},h))]})};return(0,I.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,I.jsxs)("defs",{children:[(0,I.jsxs)("linearGradient",{id:"rWall",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#7a1626"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#4a0b18"})]}),(0,I.jsxs)("linearGradient",{id:"rDome",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#ffd77a"}),(0,I.jsx)("stop",{offset:"0.55",stopColor:"#d99a2b"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#8b4c10"})]}),(0,I.jsxs)("radialGradient",{id:"rInner",cx:"0.5",cy:"0.62",r:"0.65",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#fff3c4"}),(0,I.jsx)("stop",{offset:"0.35",stopColor:"#ffc55a"}),(0,I.jsx)("stop",{offset:"0.75",stopColor:"#d9732a"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#7a1c14"})]}),(0,I.jsxs)("linearGradient",{id:"rFloor",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#2a0710"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#12030a"})]}),(0,I.jsxs)("linearGradient",{id:"rSpill",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#ffd77a",stopOpacity:"0.95"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#ffb347",stopOpacity:"0"})]}),(0,I.jsxs)("radialGradient",{id:"rLamp",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#fff6cf"}),(0,I.jsx)("stop",{offset:"0.4",stopColor:"#ffd37a",stopOpacity:"0.8"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#ffb347",stopOpacity:"0"})]}),(0,I.jsxs)("mask",{id:"rHole",maskUnits:"userSpaceOnUse",x:"-2000",y:"-1000",width:"5200",height:"3000",children:[(0,I.jsx)("rect",{x:"-2000",y:"-1000",width:"5200",height:"3000",fill:"#fff"}),(0,I.jsx)("path",{d:Zt(at,150,wt,400,262),fill:"#000"})]}),(0,I.jsx)("clipPath",{id:"rClipHole",children:(0,I.jsx)("path",{d:Zt(at,150,wt,400,262)})})]}),(0,I.jsx)("rect",{x:"-2000",y:wt-4,width:"5200",height:"1400",fill:"url(#rFloor)"}),(0,I.jsxs)("g",{clipPath:"url(#rClipHole)",children:[(0,I.jsx)("rect",{x:"440",y:"240",width:"320",height:"500",fill:"url(#rInner)"}),[1,.78,.58,.42].map((n,a)=>(0,I.jsx)("path",{d:Zt(at,150*.82*n,wt-40+a*6,410-a*4,306+(1-n)*140),fill:"none",stroke:"#7a1c14",strokeWidth:4-a*.7,opacity:.55-a*.06},a)),[-1,1].map(n=>[0,1,2].map(a=>(0,I.jsx)("rect",{x:at+n*(118-a*26)-5+(n<0,0),y:420+a*22,width:"10",height:300-a*40,fill:"#5b1210",opacity:.5-a*.1},n+""+a))),(0,I.jsx)("circle",{className:"flick",cx:at,cy:"355",r:"30",fill:"url(#rLamp)"}),(0,I.jsx)("circle",{cx:at,cy:"355",r:"5",fill:"#fff6cf"}),(0,I.jsx)("path",{d:`M${at-150} ${wt} L${at+150} ${wt} L${at+110} ${wt-70} L${at-110} ${wt-70}Z`,fill:"#ffe08a",opacity:"0.35"})]}),(0,I.jsxs)("g",{mask:"url(#rHole)",children:[i(1),i(-1),[330,820].map(n=>(0,I.jsxs)("g",{children:[(0,I.jsx)("rect",{x:n,y:"130",width:"50",height:wt-130,fill:"url(#rWall)"}),(0,I.jsx)("rect",{x:n,y:"130",width:"50",height:"6",fill:"#f4c75a"}),[0,1,2,3].map(a=>(0,I.jsx)("path",{d:Zt(n+25,10,230+a*120,205+a*120,188+a*120),fill:"#ffb347",className:"flick",style:{animationDelay:`${a*.7}s`},opacity:"0.85"},a)),(0,I.jsx)(s_,{x:n+25,y:"130",s:1.1})]},n)),(0,I.jsx)("rect",{x:"380",y:"150",width:"440",height:wt-150,fill:"url(#rWall)"}),(0,I.jsx)("rect",{x:"380",y:"150",width:"440",height:"8",fill:"#f4c75a"}),(0,I.jsx)("rect",{x:"380",y:"164",width:"440",height:"3",fill:"#f4c75a",opacity:"0.6"}),Array.from({length:27},(n,a)=>(0,I.jsx)("rect",{x:382+a*16.2,y:"138",width:"9",height:"12",fill:"#5a1220",stroke:"#f4c75a",strokeWidth:"0.6"},a)),(0,I.jsx)("path",{d:Go(at,138,56),fill:"url(#rDome)",stroke:"#f4c75a",strokeWidth:"1.4"}),(0,I.jsx)("path",{d:Go(at,138,56),fill:"none",stroke:"#8b4c10",strokeWidth:"1",opacity:"0.4",transform:"translate(0 6) scale(1 1)"}),(0,I.jsx)(o_,{x:at,y:138-56*1.65+4,s:1.5}),[-4,-3,-2,-1,1,2,3,4].map(n=>(0,I.jsxs)("g",{children:[(0,I.jsx)("path",{d:Zt(at+n*46-(Math.abs(n)===1,0),15,250,218,190),fill:"#ffb347",className:"flick",style:{animationDelay:`${Math.abs(n)*.5}s`},opacity:"0.9"}),(0,I.jsx)("path",{d:Zt(at+n*46,20,250,218,182,!1),fill:"none",stroke:"#f4c75a",strokeWidth:"1.4"})]},n)),[-1,1].map(n=>(0,I.jsxs)("g",{children:[(0,I.jsx)("rect",{x:n<0?400:780,y:"330",width:"20",height:"360",fill:"none"}),[0,1,2].map(a=>(0,I.jsx)("path",{d:Zt(at+n*215,22,470+a*90,430+a*90,395+a*90),fill:"#3a0813",stroke:"#f4c75a",strokeWidth:"1.6"},a))]},n)),(0,I.jsx)("rect",{x:"380",y:"620",width:"440",height:"5",fill:"#f4c75a",opacity:"0.85"}),(0,I.jsx)("rect",{x:"380",y:wt-28,width:"440",height:"28",fill:"#2f0911"}),(0,I.jsx)("rect",{x:"380",y:wt-28,width:"440",height:"3",fill:"#f4c75a"})]}),(0,I.jsx)("path",{d:Zt(at,150,wt,400,262),fill:"none",stroke:"#f4c75a",strokeWidth:"6"}),(0,I.jsx)("path",{d:Zt(at,164,wt,392,232),fill:"none",stroke:"#f4c75a",strokeWidth:"2",opacity:"0.8"}),(0,I.jsx)("path",{d:Zt(at,176,wt,386,206),fill:"none",stroke:"#c98a2b",strokeWidth:"1.2",opacity:"0.7"}),Array.from({length:26},(n,a)=>{let s=a/25,o=Math.PI*(.02+.96*s),l=at-Math.cos(o)*164,u=392-Math.sin(o)*160*.98;return(0,I.jsx)("circle",{cx:l,cy:u,r:"2.4",fill:"#ffd77a",className:"twinkle",style:{animationDelay:`${a%7*.3}s`,animationDuration:"2.4s"}},a)}),(0,I.jsx)("path",{d:`M${at-14} 232Q${at} 200 ${at+14} 232Q${at} 218 ${at-14} 232Z`,fill:"#f4c75a"}),[0,1,2].map(n=>(0,I.jsx)("path",{d:`M${at-190-n*24} ${wt+n*14}H${at+190+n*24}V${wt+14+n*14}H${at-190-n*24}Z`,fill:n%2?"#2a0710":"#3a0b17",stroke:"#f4c75a",strokeWidth:"1",opacity:"0.95"},n))]})}function h_(){return(0,I.jsx)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:(0,I.jsx)("path",{d:`M${at-150} ${wt} L${at+150} ${wt} L${at+420} 900 L${at-420} 900Z`,fill:"url(#rSpill)",opacity:"0.85"})})}function d_(){let e=(t,r,i,n,a)=>Array.from({length:t},(s,o)=>(0,I.jsx)("path",{transform:`rotate(${360/t*o})`,d:`M0 ${-r}Q${n} ${(-r-i)/2} 0 ${-i}Q${-n} ${(-r-i)/2} 0 ${-r}Z`,fill:a},o));return(0,I.jsx)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:(0,I.jsxs)("g",{transform:`translate(${at} ${wt+62}) scale(1 0.17)`,opacity:"0.95",children:[(0,I.jsx)("circle",{r:"250",fill:"#2a0710",opacity:"0.6"}),e(24,130,245,22,"#e8590c"),e(24,110,190,16,"#ffb938"),e(16,70,140,20,"#b3122e"),e(12,30,90,14,"#ffe08a"),(0,I.jsx)("circle",{r:"26",fill:"#ffd77a"}),(0,I.jsx)("circle",{r:"12",fill:"#b3122e"})]})})}function p_({x:e,y:t,r,i}){let n=["#ff9d1c","#ffb938","#e8590c","#ffa726"][i%4];return(0,I.jsxs)("g",{children:[(0,I.jsx)("circle",{cx:e,cy:t,r,fill:n}),(0,I.jsx)("circle",{cx:e,cy:t,r:r*.62,fill:n,stroke:"#fff3c4",strokeOpacity:"0.45",strokeWidth:"0.8"}),(0,I.jsx)("circle",{cx:e,cy:t,r:r*.28,fill:"#ffe08a",opacity:"0.8"})]})}function US({x:e,len:t,seed:r,delay:i}){let n=aa(r),a=Math.floor(t/15);return(0,I.jsxs)("g",{className:"sway",style:{animationDelay:`${i}s`},children:[(0,I.jsx)("line",{x1:e,y1:"0",x2:e,y2:t,stroke:"#6b3b12",strokeWidth:"1"}),Array.from({length:a},(s,o)=>(0,I.jsx)(p_,{x:e+(n()-.5)*2,y:10+o*15,r:7+n()*2,i:o+r},o)),(0,I.jsx)("path",{d:`M${e-7} ${t+6}Q${e} ${t+26} ${e+7} ${t+6}Z`,fill:"#b3122e"})]})}function f_(){let e=aa(3),t=(i,n,a,s,o,l)=>{let u=aa(l),c=Math.floor((n-i)/15);return(0,I.jsxs)("g",{children:[(0,I.jsx)("path",{d:`M${i} ${a}Q${(i+n)/2} ${a+s*2} ${n} ${a}`,fill:"none",stroke:"#6b3b12",strokeWidth:"1.2"}),Array.from({length:c+1},(h,p)=>{let f=p/c,y=i+(n-i)*f,_=(1-f)*(1-f)*a+2*f*(1-f)*(a+s*2)+f*f*a;return(0,I.jsx)(p_,{x:y,y:_+3+u()*1.5,r:8+u()*2,i:p},p)})]},o)},r=(i,n,a,s)=>(0,I.jsxs)("g",{className:"swing",style:{animationDelay:`${a}s`},children:[(0,I.jsx)("line",{x1:i,y1:"0",x2:i,y2:n,stroke:"#c9952b",strokeWidth:"1.4"}),(0,I.jsx)("circle",{cx:i,cy:n+46,r:"64",fill:"url(#rLamp)",opacity:"0.6",className:"flick"}),(0,I.jsx)("path",{d:`M${i-6} ${n}h12l10 12h-32z`,fill:"#c9952b"}),(0,I.jsx)("path",{d:`M${i-22} ${n+12}Q${i-34} ${n+46} ${i-20} ${n+80}H${i+20}Q${i+34} ${n+46} ${i+22} ${n+12}Z`,fill:"#e0481e",stroke:"#ffd77a",strokeWidth:"1.6"}),(0,I.jsx)("path",{d:`M${i-8} ${n+12}Q${i-14} ${n+46} ${i-8} ${n+80}M${i+8} ${n+12}Q${i+14} ${n+46} ${i+8} ${n+80}`,stroke:"#ffd77a",strokeWidth:"1",fill:"none"}),(0,I.jsx)("rect",{x:i-20,y:n+80,width:"40",height:"5",fill:"#c9952b"}),(0,I.jsx)("path",{d:`M${i} ${n+85}v22`,stroke:"#c9952b",strokeWidth:"1.4"}),(0,I.jsx)("path",{d:`M${i-5} ${n+107}h10l-5 10z`,fill:"#ffd77a"})]},s);return(0,I.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,I.jsx)("defs",{children:(0,I.jsxs)("radialGradient",{id:"rLamp",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#fff6cf"}),(0,I.jsx)("stop",{offset:"0.4",stopColor:"#ffd37a",stopOpacity:"0.8"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#ffb347",stopOpacity:"0"})]})}),t(330,870,-6,30,"a",21),t(330,600,20,26,"b",22),t(600,870,20,26,"c",23),[380,420,460,500,540,660,700,740,780,820].map((i,n)=>(0,I.jsx)(US,{x:i,len:46+n*37%60,seed:n+40,delay:n%5*.4},i)),r(345,0,0,"l1"),r(855,0,.9,"l2")]})}function m_(){return(0,I.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,I.jsx)("defs",{children:(0,I.jsxs)("radialGradient",{id:"rGlow",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#ffd37a",stopOpacity:"0.9"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#ffb347",stopOpacity:"0"})]})}),[440,500,560,640,700,760].map((t,r)=>{let i=838+r%2*8;return(0,I.jsxs)("g",{children:[(0,I.jsx)("circle",{className:"flick",cx:t,cy:i-8,r:"34",fill:"url(#rGlow)",style:{animationDelay:`${r*.3}s`}}),(0,I.jsx)("path",{d:`M${t-16} ${i}Q${t} ${i+16} ${t+16} ${i}Q${t+9} ${i+3} ${t} ${i+3}Q${t-9} ${i+3} ${t-16} ${i}Z`,fill:"#c25a1e",stroke:"#ffd77a",strokeWidth:"1"}),(0,I.jsx)("path",{className:"flame",d:`M${t} ${i-2}C${t-6} ${i-9} ${t-3} ${i-16} ${t} ${i-22}C${t+3} ${i-16} ${t+6} ${i-9} ${t} ${i-2}Z`,fill:"#fff1b8",style:{animationDelay:`${r*.25}s`}})]},t)})]})}function op({side:e}){let t="rd"+e,r=(i,n,a,s,o,l)=>Array.from({length:i},(u,c)=>(0,I.jsx)("path",{transform:`translate(${at} 520) rotate(${360/i*c})`,d:`M0 ${-n}Q${s} ${(-n-a)/2} 0 ${-a}Q${-s} ${(-n-a)/2} 0 ${-n}Z`,fill:l,stroke:o,strokeWidth:"1.1"},c));return(0,I.jsxs)("svg",{viewBox:`${e==="l"?450:600} 250 150 480`,className:"doorsvg",preserveAspectRatio:"none","aria-hidden":"true",children:[(0,I.jsxs)("defs",{children:[(0,I.jsx)("clipPath",{id:t+"c",children:(0,I.jsx)("path",{d:Zt(at,150,wt,400,262)})}),(0,I.jsxs)("linearGradient",{id:t+"g",x1:"0",y1:"0",x2:"1",y2:"0",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#5a0f1c"}),(0,I.jsx)("stop",{offset:"0.5",stopColor:"#7d1628"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#4a0b16"})]}),(0,I.jsx)("pattern",{id:t+"p",width:"22",height:"22",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:(0,I.jsx)("path",{d:"M0 0H22M0 0V22",stroke:"#f4c75a",strokeWidth:"0.9",opacity:"0.38"})}),(0,I.jsxs)("radialGradient",{id:t+"b",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#fff0b0"}),(0,I.jsx)("stop",{offset:"0.6",stopColor:"#e0a53a"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#8b4c10"})]})]}),(0,I.jsxs)("g",{clipPath:`url(#${t}c)`,children:[(0,I.jsx)("rect",{x:"440",y:"240",width:"320",height:"500",fill:`url(#${t}g)`}),(0,I.jsx)("path",{d:Zt(at,138,wt-14,405,285),fill:`url(#${t}p)`}),(0,I.jsx)("path",{d:Zt(at,138,wt-14,405,285),fill:"none",stroke:"#f4c75a",strokeWidth:"2"}),(0,I.jsx)("path",{d:Zt(at,120,wt-30,410,310),fill:"none",stroke:"#f4c75a",strokeWidth:"0.9",opacity:"0.7"}),(0,I.jsx)("rect",{x:"440",y:"412",width:"320",height:"6",fill:"#f4c75a",opacity:"0.9"}),(0,I.jsx)("rect",{x:"440",y:"672",width:"320",height:"6",fill:"#f4c75a",opacity:"0.9"}),r(16,40,96,20,"#f4c75a","#8c1d2c"),r(16,24,64,11,"#f4c75a","#f4c75a"),r(8,12,36,9,"#7a1424","#ffe08a"),(0,I.jsx)("circle",{cx:at,cy:"520",r:"100",fill:"none",stroke:"#f4c75a",strokeWidth:"1.6"}),(0,I.jsx)("circle",{cx:at,cy:"520",r:"108",fill:"none",stroke:"#f4c75a",strokeWidth:"0.8",strokeDasharray:"2 5"}),(0,I.jsx)("circle",{cx:at,cy:"520",r:"13",fill:`url(#${t}b)`}),[0,1,2,3].map(i=>Array.from({length:6},(n,a)=>(0,I.jsx)("circle",{cx:456+a*25,cy:430+i*0+(i<2?i*0:0)+0,r:"0"},i+"_"+a))),Array.from({length:7},(i,n)=>(0,I.jsx)("circle",{cx:462+n*22,cy:"436",r:"3",fill:"#ffd77a",opacity:.9},"s"+n)),Array.from({length:7},(i,n)=>(0,I.jsx)("circle",{cx:462+n*22,cy:"654",r:"3",fill:"#ffd77a",opacity:.9},"t"+n)),Array.from({length:7},(i,n)=>(0,I.jsx)("circle",{cx:462+n*22,cy:"696",r:"3",fill:"#ffd77a",opacity:.9},"u"+n)),[e==="l"?584:616].map(i=>(0,I.jsxs)("g",{children:[(0,I.jsx)("circle",{cx:i,cy:"560",r:"7",fill:`url(#${t}b)`}),(0,I.jsx)("circle",{cx:i,cy:"574",r:"10",fill:"none",stroke:"#f4c75a",strokeWidth:"3"})]},i)),(0,I.jsx)("rect",{x:e==="l"?592:598,y:"250",width:"10",height:"480",fill:"#2a0710",opacity:"0.5"}),(0,I.jsx)("rect",{x:"440",y:"240",width:"320",height:"500",fill:"#000",opacity:"0.12"})]})]})}var OS=0,g_=1,kS=2,D1=1,U1=2,Ki=3,Bn=0,br=1,Ai=2,Zi=0,Cs=1,Rs=2,v_=3,__=4,FS=5,ma=100,zS=101,BS=102,VS=103,HS=104,GS=200,WS=201,XS=202,jS=203,$p=204,qp=205,$S=206,qS=207,YS=208,KS=209,JS=210,QS=211,ZS=212,eE=213,tE=214,Yp=0,Kp=1,Jp=2,Is=3,Qp=4,Zp=5,ef=6,tf=7,O1=0,rE=1,iE=2,zn=0,k1=1,F1=2,z1=3,jf=4,nE=5,B1=6,V1=7,H1=300,Ds=301,Us=302,rf=303,nf=304,Ic=306,Rc=1e3,va=1001,af=1002,jr=1003,aE=1004,Vu=1005,Ri=1006,lp=1007,_a=1008,an=1009,G1=1010,W1=1011,ol=1012,$f=1013,ya=1014,Pi=1015,en=1016,qf=1017,Yf=1018,Os=1020,X1=35902,j1=1021,$1=1022,vi=1023,q1=1024,Y1=1025,Ps=1026,ks=1027,Kf=1028,Jf=1029,K1=1030,Qf=1031,Zf=1033,Mc=33776,Sc=33777,Ec=33778,wc=33779,sf=35840,of=35841,lf=35842,uf=35843,cf=36196,hf=37492,df=37496,pf=37808,ff=37809,mf=37810,gf=37811,vf=37812,_f=37813,yf=37814,xf=37815,Mf=37816,Sf=37817,Ef=37818,wf=37819,Tf=37820,bf=37821,Tc=36492,Af=36494,Cf=36495,J1=36283,Rf=36284,Pf=36285,Nf=36286,Pc=2300,Lf=2301,up=2302,y_=2400,x_=2401,M_=2402,sE=3200,oE=3201,Q1=0,lE=1,Fn="",Wr="srgb",zs="srgb-linear",Dc="linear",vt="srgb",ts=7680,S_=519,uE=512,cE=513,hE=514,Z1=515,dE=516,pE=517,fE=518,mE=519,If=35044,E_="300 es",Qi=2e3,Nc=2001,Bs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let i=r.indexOf(t);i!==-1&&r.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let r=t.slice(0);for(let i=0,n=r.length;i<n;i++)r[i].call(this,e);e.target=null}}},fr=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cp=Math.PI/180,Df=180/Math.PI;function tn(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fr[e&255]+fr[e>>8&255]+fr[e>>16&255]+fr[e>>24&255]+"-"+fr[t&255]+fr[t>>8&255]+"-"+fr[t>>16&15|64]+fr[t>>24&255]+"-"+fr[r&63|128]+fr[r>>8&255]+"-"+fr[r>>16&255]+fr[r>>24&255]+fr[i&255]+fr[i>>8&255]+fr[i>>16&255]+fr[i>>24&255]).toLowerCase()}function tr(e,t,r){return Math.max(t,Math.min(r,e))}function gE(e,t){return(e%t+t)%t}function hp(e,t,r){return(1-r)*e+r*t}function Ci(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function xt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var ne=class ey{constructor(t=0,r=0){ey.prototype.isVector2=!0,this.x=t,this.y=r}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,r){return this.x=t,this.y=r,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let r=this.x,i=this.y,n=t.elements;return this.x=n[0]*r+n[3]*i+n[6],this.y=n[1]*r+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this}clampLength(t,r){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let r=Math.sqrt(this.lengthSq()*t.lengthSq());if(r===0)return Math.PI/2;let i=this.dot(t)/r;return Math.acos(tr(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let r=this.x-t.x,i=this.y-t.y;return r*r+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this}lerpVectors(t,r,i){return this.x=t.x+(r.x-t.x)*i,this.y=t.y+(r.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this}rotateAround(t,r){let i=Math.cos(r),n=Math.sin(r),a=this.x-t.x,s=this.y-t.y;return this.x=a*i-s*n+t.x,this.y=a*n+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ot=class ty{constructor(t,r,i,n,a,s,o,l,u){ty.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,r,i,n,a,s,o,l,u)}set(t,r,i,n,a,s,o,l,u){let c=this.elements;return c[0]=t,c[1]=n,c[2]=o,c[3]=r,c[4]=a,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let r=this.elements,i=t.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],this}extractBasis(t,r,i){return t.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let r=t.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,r){let i=t.elements,n=r.elements,a=this.elements,s=i[0],o=i[3],l=i[6],u=i[1],c=i[4],h=i[7],p=i[2],f=i[5],y=i[8],_=n[0],v=n[3],d=n[6],g=n[1],m=n[4],x=n[7],P=n[2],T=n[5],b=n[8];return a[0]=s*_+o*g+l*P,a[3]=s*v+o*m+l*T,a[6]=s*d+o*x+l*b,a[1]=u*_+c*g+h*P,a[4]=u*v+c*m+h*T,a[7]=u*d+c*x+h*b,a[2]=p*_+f*g+y*P,a[5]=p*v+f*m+y*T,a[8]=p*d+f*x+y*b,this}multiplyScalar(t){let r=this.elements;return r[0]*=t,r[3]*=t,r[6]*=t,r[1]*=t,r[4]*=t,r[7]*=t,r[2]*=t,r[5]*=t,r[8]*=t,this}determinant(){let t=this.elements,r=t[0],i=t[1],n=t[2],a=t[3],s=t[4],o=t[5],l=t[6],u=t[7],c=t[8];return r*s*c-r*o*u-i*a*c+i*o*l+n*a*u-n*s*l}invert(){let t=this.elements,r=t[0],i=t[1],n=t[2],a=t[3],s=t[4],o=t[5],l=t[6],u=t[7],c=t[8],h=c*s-o*u,p=o*l-c*a,f=u*a-s*l,y=r*h+i*p+n*f;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/y;return t[0]=h*_,t[1]=(n*u-c*i)*_,t[2]=(o*i-n*s)*_,t[3]=p*_,t[4]=(c*r-n*l)*_,t[5]=(n*a-o*r)*_,t[6]=f*_,t[7]=(i*l-u*r)*_,t[8]=(s*r-i*a)*_,this}transpose(){let t,r=this.elements;return t=r[1],r[1]=r[3],r[3]=t,t=r[2],r[2]=r[6],r[6]=t,t=r[5],r[5]=r[7],r[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let r=this.elements;return t[0]=r[0],t[1]=r[3],t[2]=r[6],t[3]=r[1],t[4]=r[4],t[5]=r[7],t[6]=r[2],t[7]=r[5],t[8]=r[8],this}setUvTransform(t,r,i,n,a,s,o){let l=Math.cos(a),u=Math.sin(a);return this.set(i*l,i*u,-i*(l*s+u*o)+s+t,-n*u,n*l,-n*(-u*s+l*o)+o+r,0,0,1),this}scale(t,r){return this.premultiply(dp.makeScale(t,r)),this}rotate(t){return this.premultiply(dp.makeRotation(-t)),this}translate(t,r){return this.premultiply(dp.makeTranslation(t,r)),this}makeTranslation(t,r){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,r,0,0,1),this}makeRotation(t){let r=Math.cos(t),i=Math.sin(t);return this.set(r,-i,0,i,r,0,0,0,1),this}makeScale(t,r){return this.set(t,0,0,0,r,0,0,0,1),this}equals(t){let r=this.elements,i=t.elements;for(let n=0;n<9;n++)if(r[n]!==i[n])return!1;return!0}fromArray(t,r=0){for(let i=0;i<9;i++)this.elements[i]=t[i+r];return this}toArray(t=[],r=0){let i=this.elements;return t[r]=i[0],t[r+1]=i[1],t[r+2]=i[2],t[r+3]=i[3],t[r+4]=i[4],t[r+5]=i[5],t[r+6]=i[6],t[r+7]=i[7],t[r+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},dp=new ot;function ry(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Lc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function vE(){let e=Lc("canvas");return e.style.display="block",e}var w_={};function tl(e){e in w_||(w_[e]=!0,console.warn(e))}function _E(e,t,r){return new Promise(function(i,n){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:n();break;case e.TIMEOUT_EXPIRED:setTimeout(a,r);break;default:i()}}setTimeout(a,r)})}function yE(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function xE(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ht={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(e,t,r){return this.enabled===!1||t===r||!t||!r||(this.spaces[t].transfer===vt&&(e.r=rn(e.r),e.g=rn(e.g),e.b=rn(e.b)),this.spaces[t].primaries!==this.spaces[r].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===vt&&(e.r=Ns(e.r),e.g=Ns(e.g),e.b=Ns(e.b))),e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===Fn?Dc:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,r){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function rn(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Ns(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var T_=[.64,.33,.3,.6,.15,.06],b_=[.2126,.7152,.0722],A_=[.3127,.329],C_=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),R_=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ht.define({[zs]:{primaries:T_,whitePoint:A_,transfer:Dc,toXYZ:C_,fromXYZ:R_,luminanceCoefficients:b_,workingColorSpaceConfig:{unpackColorSpace:Wr},outputColorSpaceConfig:{drawingBufferColorSpace:Wr}},[Wr]:{primaries:T_,whitePoint:A_,transfer:vt,toXYZ:C_,fromXYZ:R_,luminanceCoefficients:b_,outputColorSpaceConfig:{drawingBufferColorSpace:Wr}}});var rs,ME=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rs===void 0&&(rs=Lc("canvas")),rs.width=e.width,rs.height=e.height;let r=rs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Lc("canvas");t.width=e.width,t.height=e.height;let r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);let i=r.getImageData(0,0,e.width,e.height),n=i.data;for(let a=0;a<n.length;a++)n[a]=rn(n[a]/255)*255;return r.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(rn(t[r]/255)*255):t[r]=rn(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},SE=0,iy=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=tn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let n;if(Array.isArray(i)){n=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?n.push(pp(i[a].image)):n.push(pp(i[a]))}else n=pp(i);r.url=n}return t||(e.images[this.uuid]=r),r}};function pp(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?ME.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var EE=0,ii=class bc extends Bs{constructor(t=bc.DEFAULT_IMAGE,r=bc.DEFAULT_MAPPING,i=va,n=va,a=Ri,s=_a,o=vi,l=an,u=bc.DEFAULT_ANISOTROPY,c=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=tn(),this.name="",this.source=new iy(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let r=t===void 0||typeof t=="string";if(!r&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),r||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==H1)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rc:t.x=t.x-Math.floor(t.x);break;case va:t.x=t.x<0?0:1;break;case af:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rc:t.y=t.y-Math.floor(t.y);break;case va:t.y=t.y<0?0:1;break;case af:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=H1;ii.DEFAULT_ANISOTROPY=1;var Tt=class ny{constructor(t=0,r=0,i=0,n=1){ny.prototype.isVector4=!0,this.x=t,this.y=r,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,r,i,n){return this.x=t,this.y=r,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this.w=t.w+r.w,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this.z+=t.z*r,this.w+=t.w*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this.z=t.z-r.z,this.w=t.w-r.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let r=this.x,i=this.y,n=this.z,a=this.w,s=t.elements;return this.x=s[0]*r+s[4]*i+s[8]*n+s[12]*a,this.y=s[1]*r+s[5]*i+s[9]*n+s[13]*a,this.z=s[2]*r+s[6]*i+s[10]*n+s[14]*a,this.w=s[3]*r+s[7]*i+s[11]*n+s[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let r=Math.sqrt(1-t.w*t.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/r,this.y=t.y/r,this.z=t.z/r),this}setAxisAngleFromRotationMatrix(t){let r,i,n,a,s=t.elements,o=s[0],l=s[4],u=s[8],c=s[1],h=s[5],p=s[9],f=s[2],y=s[6],_=s[10];if(Math.abs(l-c)<.01&&Math.abs(u-f)<.01&&Math.abs(p-y)<.01){if(Math.abs(l+c)<.1&&Math.abs(u+f)<.1&&Math.abs(p+y)<.1&&Math.abs(o+h+_-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;let d=(o+1)/2,g=(h+1)/2,m=(_+1)/2,x=(l+c)/4,P=(u+f)/4,T=(p+y)/4;return d>g&&d>m?d<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(d),n=x/i,a=P/i):g>m?g<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(g),i=x/n,a=T/n):m<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(m),i=P/a,n=T/a),this.set(i,n,a,r),this}let v=Math.sqrt((y-p)*(y-p)+(u-f)*(u-f)+(c-l)*(c-l));return Math.abs(v)<.001&&(v=1),this.x=(y-p)/v,this.y=(u-f)/v,this.z=(c-l)/v,this.w=Math.acos((o+h+_-1)/2),this}setFromMatrixPosition(t){let r=t.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this.w=r[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this.z=Math.max(t.z,Math.min(r.z,this.z)),this.w=Math.max(t.w,Math.min(r.w,this.w)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this.z=Math.max(t,Math.min(r,this.z)),this.w=Math.max(t,Math.min(r,this.w)),this}clampLength(t,r){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this.z+=(t.z-this.z)*r,this.w+=(t.w-this.w)*r,this}lerpVectors(t,r,i){return this.x=t.x+(r.x-t.x)*i,this.y=t.y+(r.y-t.y)*i,this.z=t.z+(r.z-t.z)*i,this.w=t.w+(r.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this.z=t[r+2],this.w=t[r+3],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t[r+2]=this.z,t[r+3]=this.w,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this.z=t.getZ(r),this.w=t.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wE=class extends Bs{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);let i={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);let n=new ii(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);n.flipY=!1,n.generateMipmaps=r.generateMipmaps,n.internalFormat=r.internalFormat,this.textures=[];let a=r.count;for(let s=0;s<a;s++)this.textures[s]=n.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let i=0,n=this.textures.length;i<n;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,i=e.textures.length;r<i;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new iy(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},_i=class extends wE{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}},ay=class extends ii{constructor(e=null,t=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=jr,this.minFilter=jr,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},TE=class extends ii{constructor(e=null,t=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=jr,this.minFilter=jr,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Vs=class{constructor(e=0,t=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=i}static slerpFlat(e,t,r,i,n,a,s){let o=r[i+0],l=r[i+1],u=r[i+2],c=r[i+3],h=n[a+0],p=n[a+1],f=n[a+2],y=n[a+3];if(s===0){e[t+0]=o,e[t+1]=l,e[t+2]=u,e[t+3]=c;return}if(s===1){e[t+0]=h,e[t+1]=p,e[t+2]=f,e[t+3]=y;return}if(c!==y||o!==h||l!==p||u!==f){let _=1-s,v=o*h+l*p+u*f+c*y,d=v>=0?1:-1,g=1-v*v;if(g>Number.EPSILON){let x=Math.sqrt(g),P=Math.atan2(x,v*d);_=Math.sin(_*P)/x,s=Math.sin(s*P)/x}let m=s*d;if(o=o*_+h*m,l=l*_+p*m,u=u*_+f*m,c=c*_+y*m,_===1-s){let x=1/Math.sqrt(o*o+l*l+u*u+c*c);o*=x,l*=x,u*=x,c*=x}}e[t]=o,e[t+1]=l,e[t+2]=u,e[t+3]=c}static multiplyQuaternionsFlat(e,t,r,i,n,a){let s=r[i],o=r[i+1],l=r[i+2],u=r[i+3],c=n[a],h=n[a+1],p=n[a+2],f=n[a+3];return e[t]=s*f+u*c+o*p-l*h,e[t+1]=o*f+u*h+l*c-s*p,e[t+2]=l*f+u*p+s*h-o*c,e[t+3]=u*f-s*c-o*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let r=e._x,i=e._y,n=e._z,a=e._order,s=Math.cos,o=Math.sin,l=s(r/2),u=s(i/2),c=s(n/2),h=o(r/2),p=o(i/2),f=o(n/2);switch(a){case"XYZ":this._x=h*u*c+l*p*f,this._y=l*p*c-h*u*f,this._z=l*u*f+h*p*c,this._w=l*u*c-h*p*f;break;case"YXZ":this._x=h*u*c+l*p*f,this._y=l*p*c-h*u*f,this._z=l*u*f-h*p*c,this._w=l*u*c+h*p*f;break;case"ZXY":this._x=h*u*c-l*p*f,this._y=l*p*c+h*u*f,this._z=l*u*f+h*p*c,this._w=l*u*c-h*p*f;break;case"ZYX":this._x=h*u*c-l*p*f,this._y=l*p*c+h*u*f,this._z=l*u*f-h*p*c,this._w=l*u*c+h*p*f;break;case"YZX":this._x=h*u*c+l*p*f,this._y=l*p*c+h*u*f,this._z=l*u*f-h*p*c,this._w=l*u*c-h*p*f;break;case"XZY":this._x=h*u*c-l*p*f,this._y=l*p*c-h*u*f,this._z=l*u*f+h*p*c,this._w=l*u*c+h*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let r=t/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,r=t[0],i=t[4],n=t[8],a=t[1],s=t[5],o=t[9],l=t[2],u=t[6],c=t[10],h=r+s+c;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-o)*p,this._y=(n-l)*p,this._z=(a-i)*p}else if(r>s&&r>c){let p=2*Math.sqrt(1+r-s-c);this._w=(u-o)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(n+l)/p}else if(s>c){let p=2*Math.sqrt(1+s-r-c);this._w=(n-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(o+u)/p}else{let p=2*Math.sqrt(1+c-r-s);this._w=(a-i)/p,this._x=(n+l)/p,this._y=(o+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tr(this.dot(e),-1,1)))}rotateTowards(e,t){let r=this.angleTo(e);if(r===0)return this;let i=Math.min(1,t/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let r=e._x,i=e._y,n=e._z,a=e._w,s=t._x,o=t._y,l=t._z,u=t._w;return this._x=r*u+a*s+i*l-n*o,this._y=i*u+a*o+n*s-r*l,this._z=n*u+a*l+r*o-i*s,this._w=a*u-r*s-i*o-n*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let r=this._x,i=this._y,n=this._z,a=this._w,s=a*e._w+r*e._x+i*e._y+n*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=r,this._y=i,this._z=n,this;let o=1-s*s;if(o<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*r+t*this._x,this._y=p*i+t*this._y,this._z=p*n+t*this._z,this.normalize(),this}let l=Math.sqrt(o),u=Math.atan2(l,s),c=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=a*c+this._w*h,this._x=r*c+this._x*h,this._y=i*c+this._y*h,this._z=n*c+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),n=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class sy{constructor(t=0,r=0,i=0){sy.prototype.isVector3=!0,this.x=t,this.y=r,this.z=i}set(t,r,i){return i===void 0&&(i=this.z),this.x=t,this.y=r,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this.z+=t.z*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this.z=t.z-r.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,r){return this.x=t.x*r.x,this.y=t.y*r.y,this.z=t.z*r.z,this}applyEuler(t){return this.applyQuaternion(P_.setFromEuler(t))}applyAxisAngle(t,r){return this.applyQuaternion(P_.setFromAxisAngle(t,r))}applyMatrix3(t){let r=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*r+a[3]*i+a[6]*n,this.y=a[1]*r+a[4]*i+a[7]*n,this.z=a[2]*r+a[5]*i+a[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let r=this.x,i=this.y,n=this.z,a=t.elements,s=1/(a[3]*r+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*r+a[4]*i+a[8]*n+a[12])*s,this.y=(a[1]*r+a[5]*i+a[9]*n+a[13])*s,this.z=(a[2]*r+a[6]*i+a[10]*n+a[14])*s,this}applyQuaternion(t){let r=this.x,i=this.y,n=this.z,a=t.x,s=t.y,o=t.z,l=t.w,u=2*(s*n-o*i),c=2*(o*r-a*n),h=2*(a*i-s*r);return this.x=r+l*u+s*h-o*c,this.y=i+l*c+o*u-a*h,this.z=n+l*h+a*c-s*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let r=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*r+a[4]*i+a[8]*n,this.y=a[1]*r+a[5]*i+a[9]*n,this.z=a[2]*r+a[6]*i+a[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this.z=Math.max(t.z,Math.min(r.z,this.z)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this.z=Math.max(t,Math.min(r,this.z)),this}clampLength(t,r){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this.z+=(t.z-this.z)*r,this}lerpVectors(t,r,i){return this.x=t.x+(r.x-t.x)*i,this.y=t.y+(r.y-t.y)*i,this.z=t.z+(r.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,r){let i=t.x,n=t.y,a=t.z,s=r.x,o=r.y,l=r.z;return this.x=n*l-a*o,this.y=a*s-i*l,this.z=i*o-n*s,this}projectOnVector(t){let r=t.lengthSq();if(r===0)return this.set(0,0,0);let i=t.dot(this)/r;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return fp.copy(this).projectOnVector(t),this.sub(fp)}reflect(t){return this.sub(fp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let r=Math.sqrt(this.lengthSq()*t.lengthSq());if(r===0)return Math.PI/2;let i=this.dot(t)/r;return Math.acos(tr(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let r=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return r*r+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,r,i){let n=Math.sin(r)*t;return this.x=n*Math.sin(i),this.y=Math.cos(r)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,r,i){return this.x=t*Math.sin(r),this.y=i,this.z=t*Math.cos(r),this}setFromMatrixPosition(t){let r=t.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(t){let r=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=r,this.y=i,this.z=n,this}setFromMatrixColumn(t,r){return this.fromArray(t.elements,r*4)}setFromMatrix3Column(t,r){return this.fromArray(t.elements,r*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this.z=t[r+2],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t[r+2]=this.z,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this.z=t.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,r=Math.random()*2-1,i=Math.sqrt(1-r*r);return this.x=i*Math.cos(t),this.y=r,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fp=new L,P_=new Vs,Ma=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let r=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let r=e.geometry;if(r!==void 0){let n=r.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let a=0,s=n.count;a<s;a++)e.isMesh===!0?e.getVertexPosition(a,pi):pi.fromBufferAttribute(n,a),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Hu.copy(r.boundingBox)),Hu.applyMatrix4(e.matrixWorld),this.union(Hu)}let i=e.children;for(let n=0,a=i.length;n<a;n++)this.expandByObject(i[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wo),Gu.subVectors(this.max,Wo),is.subVectors(e.a,Wo),ns.subVectors(e.b,Wo),as.subVectors(e.c,Wo),Pn.subVectors(ns,is),Nn.subVectors(as,ns),sa.subVectors(is,as);let t=[0,-Pn.z,Pn.y,0,-Nn.z,Nn.y,0,-sa.z,sa.y,Pn.z,0,-Pn.x,Nn.z,0,-Nn.x,sa.z,0,-sa.x,-Pn.y,Pn.x,0,-Nn.y,Nn.x,0,-sa.y,sa.x,0];return!mp(t,is,ns,as,Gu)||(t=[1,0,0,0,1,0,0,0,1],!mp(t,is,ns,as,Gu))?!1:(Wu.crossVectors(Pn,Nn),t=[Wu.x,Wu.y,Wu.z],mp(t,is,ns,as,Gu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Wi=[new L,new L,new L,new L,new L,new L,new L,new L],pi=new L,Hu=new Ma,is=new L,ns=new L,as=new L,Pn=new L,Nn=new L,sa=new L,Wo=new L,Gu=new L,Wu=new L,oa=new L;function mp(e,t,r,i,n){for(let a=0,s=e.length-3;a<=s;a+=3){oa.fromArray(e,a);let o=n.x*Math.abs(oa.x)+n.y*Math.abs(oa.y)+n.z*Math.abs(oa.z),l=t.dot(oa),u=r.dot(oa),c=i.dot(oa);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}var bE=new Ma,Xo=new L,gp=new L,Hs=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let r=this.center;t!==void 0?r.copy(t):bE.setFromPoints(e).getCenter(r);let i=0;for(let n=0,a=e.length;n<a;n++)i=Math.max(i,r.distanceToSquared(e[n]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);let t=Xo.lengthSq();if(t>this.radius*this.radius){let r=Math.sqrt(t),i=(r-this.radius)*.5;this.center.addScaledVector(Xo,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(gp)),this.expandByPoint(Xo.copy(e.center).sub(gp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xi=new L,vp=new L,Xu=new L,Ln=new L,_p=new L,ju=new L,yp=new L,oy=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,t),Xi.distanceToSquared(e))}distanceSqToSegment(e,t,r,i){vp.copy(e).add(t).multiplyScalar(.5),Xu.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(vp);let n=e.distanceTo(t)*.5,a=-this.direction.dot(Xu),s=Ln.dot(this.direction),o=-Ln.dot(Xu),l=Ln.lengthSq(),u=Math.abs(1-a*a),c,h,p,f;if(u>0)if(c=a*o-s,h=a*s-o,f=n*u,c>=0)if(h>=-f)if(h<=f){let y=1/u;c*=y,h*=y,p=c*(c+a*h+2*s)+h*(a*c+h+2*o)+l}else h=n,c=Math.max(0,-(a*h+s)),p=-c*c+h*(h+2*o)+l;else h=-n,c=Math.max(0,-(a*h+s)),p=-c*c+h*(h+2*o)+l;else h<=-f?(c=Math.max(0,-(-a*n+s)),h=c>0?-n:Math.min(Math.max(-n,-o),n),p=-c*c+h*(h+2*o)+l):h<=f?(c=0,h=Math.min(Math.max(-n,-o),n),p=h*(h+2*o)+l):(c=Math.max(0,-(a*n+s)),h=c>0?n:Math.min(Math.max(-n,-o),n),p=-c*c+h*(h+2*o)+l);else h=a>0?-n:n,c=Math.max(0,-(a*h+s)),p=-c*c+h*(h+2*o)+l;return r&&r.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(vp).addScaledVector(Xu,h),p}intersectSphere(e,t){Xi.subVectors(e.center,this.origin);let r=Xi.dot(this.direction),i=Xi.dot(Xi)-r*r,n=e.radius*e.radius;if(i>n)return null;let a=Math.sqrt(n-i),s=r-a,o=r+a;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){let r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,i,n,a,s,o,l=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,h=this.origin;return l>=0?(r=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(r=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),u>=0?(n=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(n=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),r>a||n>i||((n>r||isNaN(r))&&(r=n),(a<i||isNaN(i))&&(i=a),c>=0?(s=(e.min.z-h.z)*c,o=(e.max.z-h.z)*c):(s=(e.max.z-h.z)*c,o=(e.min.z-h.z)*c),r>o||s>i)||((s>r||r!==r)&&(r=s),(o<i||i!==i)&&(i=o),i<0)?null:this.at(r>=0?r:i,t)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,r,i,n){_p.subVectors(t,e),ju.subVectors(r,e),yp.crossVectors(_p,ju);let a=this.direction.dot(yp),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Ln.subVectors(this.origin,e);let o=s*this.direction.dot(ju.crossVectors(Ln,ju));if(o<0)return null;let l=s*this.direction.dot(_p.cross(Ln));if(l<0||o+l>a)return null;let u=-s*Ln.dot(yp);return u<0?null:this.at(u/a,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bt=class Uf{constructor(t,r,i,n,a,s,o,l,u,c,h,p,f,y,_,v){Uf.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,r,i,n,a,s,o,l,u,c,h,p,f,y,_,v)}set(t,r,i,n,a,s,o,l,u,c,h,p,f,y,_,v){let d=this.elements;return d[0]=t,d[4]=r,d[8]=i,d[12]=n,d[1]=a,d[5]=s,d[9]=o,d[13]=l,d[2]=u,d[6]=c,d[10]=h,d[14]=p,d[3]=f,d[7]=y,d[11]=_,d[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Uf().fromArray(this.elements)}copy(t){let r=this.elements,i=t.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],r[9]=i[9],r[10]=i[10],r[11]=i[11],r[12]=i[12],r[13]=i[13],r[14]=i[14],r[15]=i[15],this}copyPosition(t){let r=this.elements,i=t.elements;return r[12]=i[12],r[13]=i[13],r[14]=i[14],this}setFromMatrix3(t){let r=t.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(t,r,i){return t.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,r,i){return this.set(t.x,r.x,i.x,0,t.y,r.y,i.y,0,t.z,r.z,i.z,0,0,0,0,1),this}extractRotation(t){let r=this.elements,i=t.elements,n=1/ss.setFromMatrixColumn(t,0).length(),a=1/ss.setFromMatrixColumn(t,1).length(),s=1/ss.setFromMatrixColumn(t,2).length();return r[0]=i[0]*n,r[1]=i[1]*n,r[2]=i[2]*n,r[3]=0,r[4]=i[4]*a,r[5]=i[5]*a,r[6]=i[6]*a,r[7]=0,r[8]=i[8]*s,r[9]=i[9]*s,r[10]=i[10]*s,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(t){let r=this.elements,i=t.x,n=t.y,a=t.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(n),u=Math.sin(n),c=Math.cos(a),h=Math.sin(a);if(t.order==="XYZ"){let p=s*c,f=s*h,y=o*c,_=o*h;r[0]=l*c,r[4]=-l*h,r[8]=u,r[1]=f+y*u,r[5]=p-_*u,r[9]=-o*l,r[2]=_-p*u,r[6]=y+f*u,r[10]=s*l}else if(t.order==="YXZ"){let p=l*c,f=l*h,y=u*c,_=u*h;r[0]=p+_*o,r[4]=y*o-f,r[8]=s*u,r[1]=s*h,r[5]=s*c,r[9]=-o,r[2]=f*o-y,r[6]=_+p*o,r[10]=s*l}else if(t.order==="ZXY"){let p=l*c,f=l*h,y=u*c,_=u*h;r[0]=p-_*o,r[4]=-s*h,r[8]=y+f*o,r[1]=f+y*o,r[5]=s*c,r[9]=_-p*o,r[2]=-s*u,r[6]=o,r[10]=s*l}else if(t.order==="ZYX"){let p=s*c,f=s*h,y=o*c,_=o*h;r[0]=l*c,r[4]=y*u-f,r[8]=p*u+_,r[1]=l*h,r[5]=_*u+p,r[9]=f*u-y,r[2]=-u,r[6]=o*l,r[10]=s*l}else if(t.order==="YZX"){let p=s*l,f=s*u,y=o*l,_=o*u;r[0]=l*c,r[4]=_-p*h,r[8]=y*h+f,r[1]=h,r[5]=s*c,r[9]=-o*c,r[2]=-u*c,r[6]=f*h+y,r[10]=p-_*h}else if(t.order==="XZY"){let p=s*l,f=s*u,y=o*l,_=o*u;r[0]=l*c,r[4]=-h,r[8]=u*c,r[1]=p*h+_,r[5]=s*c,r[9]=f*h-y,r[2]=y*h-f,r[6]=o*c,r[10]=_*h+p}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(t){return this.compose(AE,t,CE)}lookAt(t,r,i){let n=this.elements;return Hr.subVectors(t,r),Hr.lengthSq()===0&&(Hr.z=1),Hr.normalize(),In.crossVectors(i,Hr),In.lengthSq()===0&&(Math.abs(i.z)===1?Hr.x+=1e-4:Hr.z+=1e-4,Hr.normalize(),In.crossVectors(i,Hr)),In.normalize(),$u.crossVectors(Hr,In),n[0]=In.x,n[4]=$u.x,n[8]=Hr.x,n[1]=In.y,n[5]=$u.y,n[9]=Hr.y,n[2]=In.z,n[6]=$u.z,n[10]=Hr.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,r){let i=t.elements,n=r.elements,a=this.elements,s=i[0],o=i[4],l=i[8],u=i[12],c=i[1],h=i[5],p=i[9],f=i[13],y=i[2],_=i[6],v=i[10],d=i[14],g=i[3],m=i[7],x=i[11],P=i[15],T=n[0],b=n[4],R=n[8],E=n[12],M=n[1],N=n[5],k=n[9],V=n[13],W=n[2],j=n[6],X=n[10],ae=n[14],$=n[3],pe=n[7],Se=n[11],Je=n[15];return a[0]=s*T+o*M+l*W+u*$,a[4]=s*b+o*N+l*j+u*pe,a[8]=s*R+o*k+l*X+u*Se,a[12]=s*E+o*V+l*ae+u*Je,a[1]=c*T+h*M+p*W+f*$,a[5]=c*b+h*N+p*j+f*pe,a[9]=c*R+h*k+p*X+f*Se,a[13]=c*E+h*V+p*ae+f*Je,a[2]=y*T+_*M+v*W+d*$,a[6]=y*b+_*N+v*j+d*pe,a[10]=y*R+_*k+v*X+d*Se,a[14]=y*E+_*V+v*ae+d*Je,a[3]=g*T+m*M+x*W+P*$,a[7]=g*b+m*N+x*j+P*pe,a[11]=g*R+m*k+x*X+P*Se,a[15]=g*E+m*V+x*ae+P*Je,this}multiplyScalar(t){let r=this.elements;return r[0]*=t,r[4]*=t,r[8]*=t,r[12]*=t,r[1]*=t,r[5]*=t,r[9]*=t,r[13]*=t,r[2]*=t,r[6]*=t,r[10]*=t,r[14]*=t,r[3]*=t,r[7]*=t,r[11]*=t,r[15]*=t,this}determinant(){let t=this.elements,r=t[0],i=t[4],n=t[8],a=t[12],s=t[1],o=t[5],l=t[9],u=t[13],c=t[2],h=t[6],p=t[10],f=t[14],y=t[3],_=t[7],v=t[11],d=t[15];return y*(+a*l*h-n*u*h-a*o*p+i*u*p+n*o*f-i*l*f)+_*(+r*l*f-r*u*p+a*s*p-n*s*f+n*u*c-a*l*c)+v*(+r*u*h-r*o*f-a*s*h+i*s*f+a*o*c-i*u*c)+d*(-n*o*c-r*l*h+r*o*p+n*s*h-i*s*p+i*l*c)}transpose(){let t=this.elements,r;return r=t[1],t[1]=t[4],t[4]=r,r=t[2],t[2]=t[8],t[8]=r,r=t[6],t[6]=t[9],t[9]=r,r=t[3],t[3]=t[12],t[12]=r,r=t[7],t[7]=t[13],t[13]=r,r=t[11],t[11]=t[14],t[14]=r,this}setPosition(t,r,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=r,n[14]=i),this}invert(){let t=this.elements,r=t[0],i=t[1],n=t[2],a=t[3],s=t[4],o=t[5],l=t[6],u=t[7],c=t[8],h=t[9],p=t[10],f=t[11],y=t[12],_=t[13],v=t[14],d=t[15],g=h*v*u-_*p*u+_*l*f-o*v*f-h*l*d+o*p*d,m=y*p*u-c*v*u-y*l*f+s*v*f+c*l*d-s*p*d,x=c*_*u-y*h*u+y*o*f-s*_*f-c*o*d+s*h*d,P=y*h*l-c*_*l-y*o*p+s*_*p+c*o*v-s*h*v,T=r*g+i*m+n*x+a*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/T;return t[0]=g*b,t[1]=(_*p*a-h*v*a-_*n*f+i*v*f+h*n*d-i*p*d)*b,t[2]=(o*v*a-_*l*a+_*n*u-i*v*u-o*n*d+i*l*d)*b,t[3]=(h*l*a-o*p*a-h*n*u+i*p*u+o*n*f-i*l*f)*b,t[4]=m*b,t[5]=(c*v*a-y*p*a+y*n*f-r*v*f-c*n*d+r*p*d)*b,t[6]=(y*l*a-s*v*a-y*n*u+r*v*u+s*n*d-r*l*d)*b,t[7]=(s*p*a-c*l*a+c*n*u-r*p*u-s*n*f+r*l*f)*b,t[8]=x*b,t[9]=(y*h*a-c*_*a-y*i*f+r*_*f+c*i*d-r*h*d)*b,t[10]=(s*_*a-y*o*a+y*i*u-r*_*u-s*i*d+r*o*d)*b,t[11]=(c*o*a-s*h*a-c*i*u+r*h*u+s*i*f-r*o*f)*b,t[12]=P*b,t[13]=(c*_*n-y*h*n+y*i*p-r*_*p-c*i*v+r*h*v)*b,t[14]=(y*o*n-s*_*n-y*i*l+r*_*l+s*i*v-r*o*v)*b,t[15]=(s*h*n-c*o*n+c*i*l-r*h*l-s*i*p+r*o*p)*b,this}scale(t){let r=this.elements,i=t.x,n=t.y,a=t.z;return r[0]*=i,r[4]*=n,r[8]*=a,r[1]*=i,r[5]*=n,r[9]*=a,r[2]*=i,r[6]*=n,r[10]*=a,r[3]*=i,r[7]*=n,r[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,r=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(r,i,n))}makeTranslation(t,r,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,r,0,0,1,i,0,0,0,1),this}makeRotationX(t){let r=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,r,-i,0,0,i,r,0,0,0,0,1),this}makeRotationY(t){let r=Math.cos(t),i=Math.sin(t);return this.set(r,0,i,0,0,1,0,0,-i,0,r,0,0,0,0,1),this}makeRotationZ(t){let r=Math.cos(t),i=Math.sin(t);return this.set(r,-i,0,0,i,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,r){let i=Math.cos(r),n=Math.sin(r),a=1-i,s=t.x,o=t.y,l=t.z,u=a*s,c=a*o;return this.set(u*s+i,u*o-n*l,u*l+n*o,0,u*o+n*l,c*o+i,c*l-n*s,0,u*l-n*o,c*l+n*s,a*l*l+i,0,0,0,0,1),this}makeScale(t,r,i){return this.set(t,0,0,0,0,r,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,r,i,n,a,s){return this.set(1,i,a,0,t,1,s,0,r,n,1,0,0,0,0,1),this}compose(t,r,i){let n=this.elements,a=r._x,s=r._y,o=r._z,l=r._w,u=a+a,c=s+s,h=o+o,p=a*u,f=a*c,y=a*h,_=s*c,v=s*h,d=o*h,g=l*u,m=l*c,x=l*h,P=i.x,T=i.y,b=i.z;return n[0]=(1-(_+d))*P,n[1]=(f+x)*P,n[2]=(y-m)*P,n[3]=0,n[4]=(f-x)*T,n[5]=(1-(p+d))*T,n[6]=(v+g)*T,n[7]=0,n[8]=(y+m)*b,n[9]=(v-g)*b,n[10]=(1-(p+_))*b,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,r,i){let n=this.elements,a=ss.set(n[0],n[1],n[2]).length(),s=ss.set(n[4],n[5],n[6]).length(),o=ss.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),t.x=n[12],t.y=n[13],t.z=n[14],fi.copy(this);let l=1/a,u=1/s,c=1/o;return fi.elements[0]*=l,fi.elements[1]*=l,fi.elements[2]*=l,fi.elements[4]*=u,fi.elements[5]*=u,fi.elements[6]*=u,fi.elements[8]*=c,fi.elements[9]*=c,fi.elements[10]*=c,r.setFromRotationMatrix(fi),i.x=a,i.y=s,i.z=o,this}makePerspective(t,r,i,n,a,s,o=Qi){let l=this.elements,u=2*a/(r-t),c=2*a/(i-n),h=(r+t)/(r-t),p=(i+n)/(i-n),f,y;if(o===Qi)f=-(s+a)/(s-a),y=-2*s*a/(s-a);else if(o===Nc)f=-s/(s-a),y=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,r,i,n,a,s,o=Qi){let l=this.elements,u=1/(r-t),c=1/(i-n),h=1/(s-a),p=(r+t)*u,f=(i+n)*c,y,_;if(o===Qi)y=(s+a)*h,_=-2*h;else if(o===Nc)y=a*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let r=this.elements,i=t.elements;for(let n=0;n<16;n++)if(r[n]!==i[n])return!1;return!0}fromArray(t,r=0){for(let i=0;i<16;i++)this.elements[i]=t[i+r];return this}toArray(t=[],r=0){let i=this.elements;return t[r]=i[0],t[r+1]=i[1],t[r+2]=i[2],t[r+3]=i[3],t[r+4]=i[4],t[r+5]=i[5],t[r+6]=i[6],t[r+7]=i[7],t[r+8]=i[8],t[r+9]=i[9],t[r+10]=i[10],t[r+11]=i[11],t[r+12]=i[12],t[r+13]=i[13],t[r+14]=i[14],t[r+15]=i[15],t}},ss=new L,fi=new bt,AE=new L(0,0,0),CE=new L(1,1,1),In=new L,$u=new L,Hr=new L,N_=new bt,L_=new Vs,Vn=class ly{constructor(t=0,r=0,i=0,n=ly.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=r,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,r,i,n=this._order){return this._x=t,this._y=r,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,r=this._order,i=!0){let n=t.elements,a=n[0],s=n[4],o=n[8],l=n[1],u=n[5],c=n[9],h=n[2],p=n[6],f=n[10];switch(r){case"XYZ":this._y=Math.asin(tr(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-tr(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(tr(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-tr(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(tr(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-tr(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,r,i){return N_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(N_,r,i)}setFromVector3(t,r=this._order){return this.set(t.x,t.y,t.z,r)}reorder(t){return L_.setFromEuler(this),this.setFromQuaternion(L_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],r=0){return t[r]=this._x,t[r+1]=this._y,t[r+2]=this._z,t[r+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var uy=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},RE=0,I_=new L,os=new Vs,ji=new bt,qu=new L,jo=new L,PE=new L,NE=new Vs,D_=new L(1,0,0),U_=new L(0,1,0),O_=new L(0,0,1),k_={type:"added"},LE={type:"removed"},ls={type:"childadded",child:null},xp={type:"childremoved",child:null},rr=class Ac extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ac.DEFAULT_UP.clone();let t=new L,r=new Vn,i=new Vs,n=new L(1,1,1);function a(){i.setFromEuler(r,!1)}function s(){r.setFromQuaternion(i,void 0,!1)}r._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new bt},normalMatrix:{value:new ot}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Ac.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ac.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,r){this.quaternion.setFromAxisAngle(t,r)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,r){return os.setFromAxisAngle(t,r),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,r){return os.setFromAxisAngle(t,r),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(D_,t)}rotateY(t){return this.rotateOnAxis(U_,t)}rotateZ(t){return this.rotateOnAxis(O_,t)}translateOnAxis(t,r){return I_.copy(t).applyQuaternion(this.quaternion),this.position.add(I_.multiplyScalar(r)),this}translateX(t){return this.translateOnAxis(D_,t)}translateY(t){return this.translateOnAxis(U_,t)}translateZ(t){return this.translateOnAxis(O_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(t,r,i){t.isVector3?qu.copy(t):qu.set(t,r,i);let n=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(jo,qu,this.up):ji.lookAt(qu,jo,this.up),this.quaternion.setFromRotationMatrix(ji),n&&(ji.extractRotation(n.matrixWorld),os.setFromRotationMatrix(ji),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(k_),ls.child=t,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let r=this.children.indexOf(t);return r!==-1&&(t.parent=null,this.children.splice(r,1),t.dispatchEvent(LE),xp.child=t,this.dispatchEvent(xp),xp.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(k_),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,r){if(this[t]===r)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,r);if(a!==void 0)return a}}getObjectsByProperty(t,r,i=[]){this[t]===r&&i.push(this);let n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].getObjectsByProperty(t,r,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,t,PE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,NE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let r=this.matrixWorld.elements;return t.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(t){t(this);let r=this.children;for(let i=0,n=r.length;i<n;i++)r[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let r=this.children;for(let i=0,n=r.length;i<n;i++)r[i].traverseVisible(t)}traverseAncestors(t){let r=this.parent;r!==null&&(t(r),r.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let r=this.children;for(let i=0,n=r.length;i<n;i++)r[i].updateMatrixWorld(t)}updateWorldMatrix(t,r){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),r===!0){let n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateWorldMatrix(!1,!0)}}toJSON(t){let r=t===void 0||typeof t=="string",i={};r&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){let h=l[u];a(t.shapes,h)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(a(t.materials,this.material[l]));n.material=o}else n.material=a(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(a(t.animations,l))}}if(r){let o=s(t.geometries),l=s(t.materials),u=s(t.textures),c=s(t.images),h=s(t.shapes),p=s(t.skeletons),f=s(t.animations),y=s(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),f.length>0&&(i.animations=f),y.length>0&&(i.nodes=y)}return i.object=n,i;function s(o){let l=[];for(let u in o){let c=o[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,r=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),r===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};rr.DEFAULT_UP=new L(0,1,0);rr.DEFAULT_MATRIX_AUTO_UPDATE=!0;rr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mi=new L,$i=new L,Mp=new L,qi=new L,us=new L,cs=new L,F_=new L,Sp=new L,Ep=new L,wp=new L,Tp=new Tt,bp=new Tt,Ap=new Tt,Ss=class Es{constructor(t=new L,r=new L,i=new L){this.a=t,this.b=r,this.c=i}static getNormal(t,r,i,n){n.subVectors(i,r),mi.subVectors(t,r),n.cross(mi);let a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(t,r,i,n,a){mi.subVectors(n,r),$i.subVectors(i,r),Mp.subVectors(t,r);let s=mi.dot(mi),o=mi.dot($i),l=mi.dot(Mp),u=$i.dot($i),c=$i.dot(Mp),h=s*u-o*o;if(h===0)return a.set(0,0,0),null;let p=1/h,f=(u*l-o*c)*p,y=(s*c-o*l)*p;return a.set(1-f-y,y,f)}static containsPoint(t,r,i,n){return this.getBarycoord(t,r,i,n,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(t,r,i,n,a,s,o,l){return this.getBarycoord(t,r,i,n,qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,qi.x),l.addScaledVector(s,qi.y),l.addScaledVector(o,qi.z),l)}static getInterpolatedAttribute(t,r,i,n,a,s){return Tp.setScalar(0),bp.setScalar(0),Ap.setScalar(0),Tp.fromBufferAttribute(t,r),bp.fromBufferAttribute(t,i),Ap.fromBufferAttribute(t,n),s.setScalar(0),s.addScaledVector(Tp,a.x),s.addScaledVector(bp,a.y),s.addScaledVector(Ap,a.z),s}static isFrontFacing(t,r,i,n){return mi.subVectors(i,r),$i.subVectors(t,r),mi.cross($i).dot(n)<0}set(t,r,i){return this.a.copy(t),this.b.copy(r),this.c.copy(i),this}setFromPointsAndIndices(t,r,i,n){return this.a.copy(t[r]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,r,i,n){return this.a.fromBufferAttribute(t,r),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),mi.cross($i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Es.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,r){return Es.getBarycoord(t,this.a,this.b,this.c,r)}getInterpolation(t,r,i,n,a){return Es.getInterpolation(t,this.a,this.b,this.c,r,i,n,a)}containsPoint(t){return Es.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Es.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,r){let i=this.a,n=this.b,a=this.c,s,o;us.subVectors(n,i),cs.subVectors(a,i),Sp.subVectors(t,i);let l=us.dot(Sp),u=cs.dot(Sp);if(l<=0&&u<=0)return r.copy(i);Ep.subVectors(t,n);let c=us.dot(Ep),h=cs.dot(Ep);if(c>=0&&h<=c)return r.copy(n);let p=l*h-c*u;if(p<=0&&l>=0&&c<=0)return s=l/(l-c),r.copy(i).addScaledVector(us,s);wp.subVectors(t,a);let f=us.dot(wp),y=cs.dot(wp);if(y>=0&&f<=y)return r.copy(a);let _=f*u-l*y;if(_<=0&&u>=0&&y<=0)return o=u/(u-y),r.copy(i).addScaledVector(cs,o);let v=c*y-f*h;if(v<=0&&h-c>=0&&f-y>=0)return F_.subVectors(a,n),o=(h-c)/(h-c+(f-y)),r.copy(n).addScaledVector(F_,o);let d=1/(v+_+p);return s=_*d,o=p*d,r.copy(i).addScaledVector(us,s).addScaledVector(cs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},cy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Yu={h:0,s:0,l:0};function Cp(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*6*r:r<1/2?t:r<2/3?e+(t-e)*6*(2/3-r):e}var We=class{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,r,i=ht.workingColorSpace){return this.r=e,this.g=t,this.b=r,ht.toWorkingColorSpace(this,i),this}setHSL(e,t,r,i=ht.workingColorSpace){if(e=gE(e,1),t=tr(t,0,1),r=tr(r,0,1),t===0)this.r=this.g=this.b=r;else{let n=r<=.5?r*(1+t):r+t-r*t,a=2*r-n;this.r=Cp(a,n,e+1/3),this.g=Cp(a,n,e),this.b=Cp(a,n,e-1/3)}return ht.toWorkingColorSpace(this,i),this}setStyle(e,t=Wr){function r(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let n,a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=i[1],a=n.length;if(a===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(n,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wr){let r=cy[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rn(e.r),this.g=rn(e.g),this.b=rn(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wr){return ht.fromWorkingColorSpace(mr.copy(this),e),Math.round(tr(mr.r*255,0,255))*65536+Math.round(tr(mr.g*255,0,255))*256+Math.round(tr(mr.b*255,0,255))}getHexString(e=Wr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(mr.copy(this),t);let r=mr.r,i=mr.g,n=mr.b,a=Math.max(r,i,n),s=Math.min(r,i,n),o,l,u=(s+a)/2;if(s===a)o=0,l=0;else{let c=a-s;switch(l=u<=.5?c/(a+s):c/(2-a-s),a){case r:o=(i-n)/c+(i<n?6:0);break;case i:o=(n-r)/c+2;break;case n:o=(r-i)/c+4;break}o/=6}return e.h=o,e.s=l,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(mr.copy(this),t),e.r=mr.r,e.g=mr.g,e.b=mr.b,e}getStyle(e=Wr){ht.fromWorkingColorSpace(mr.copy(this),e);let t=mr.r,r=mr.g,i=mr.b;return e!==Wr?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,t,r){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(Yu);let r=hp(Dn.h,Yu.h,t),i=hp(Dn.s,Yu.s,t),n=hp(Dn.l,Yu.l,t);return this.setHSL(r,i,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,r=this.g,i=this.b,n=e.elements;return this.r=n[0]*t+n[3]*r+n[6]*i,this.g=n[1]*t+n[4]*r+n[7]*i,this.b=n[2]*t+n[5]*r+n[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mr=new We;We.NAMES=cy;var IE=0,Sa=class extends Bs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=tn(),this.name="",this.blending=Cs,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$p,this.blendDst=qp,this.blendEquation=ma,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=S_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[t]=r}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(r.blending=this.blending),this.side!==Bn&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==$p&&(r.blendSrc=this.blendSrc),this.blendDst!==qp&&(r.blendDst=this.blendDst),this.blendEquation!==ma&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==S_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(n){let a=[];for(let s in n){let o=n[s];delete o.metadata,a.push(o)}return a}if(t){let n=i(e.textures),a=i(e.images);n.length>0&&(r.textures=n),a.length>0&&(r.images=a)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,r=null;if(t!==null){let i=t.length;r=new Array(i);for(let n=0;n!==i;++n)r[n]=t[n].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ji=class extends Sa{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=O1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},jt=new L,Ku=new ne,vr=class{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=If,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let i=0,n=this.itemSize;i<n;i++)this.array[e+i]=t.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ku.fromBufferAttribute(this,t),Ku.applyMatrix3(e),this.setXY(t,Ku.x,Ku.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ci(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=xt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),r=xt(r,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,t,r,i,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),r=xt(r,this.array),i=xt(i,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==If&&(e.usage=this.usage),e}},hy=class extends vr{constructor(e,t,r){super(new Uint16Array(e),t,r)}},dy=class extends vr{constructor(e,t,r){super(new Uint32Array(e),t,r)}},_t=class extends vr{constructor(e,t,r){super(new Float32Array(e),t,r)}},DE=0,ri=new bt,Rp=new rr,hs=new L,Gr=new Ma,$o=new Ma,er=new L,ir=class py extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=tn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ry(t)?dy:hy)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,r){return this.attributes[t]=r,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,r,i=0){this.groups.push({start:t,count:r,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,r){this.drawRange.start=t,this.drawRange.count=r}applyMatrix4(t){let r=this.attributes.position;r!==void 0&&(r.applyMatrix4(t),r.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new ot().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ri.makeRotationFromQuaternion(t),this.applyMatrix4(ri),this}rotateX(t){return ri.makeRotationX(t),this.applyMatrix4(ri),this}rotateY(t){return ri.makeRotationY(t),this.applyMatrix4(ri),this}rotateZ(t){return ri.makeRotationZ(t),this.applyMatrix4(ri),this}translate(t,r,i){return ri.makeTranslation(t,r,i),this.applyMatrix4(ri),this}scale(t,r,i){return ri.makeScale(t,r,i),this.applyMatrix4(ri),this}lookAt(t){return Rp.lookAt(t),Rp.updateMatrix(),this.applyMatrix4(Rp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){let r=this.getAttribute("position");if(r===void 0){let i=[];for(let n=0,a=t.length;n<a;n++){let s=t[n];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new _t(i,3))}else{for(let i=0,n=r.count;i<n;i++){let a=t[i];r.setXYZ(i,a.x,a.y,a.z||0)}t.length>r.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),r.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ma);let t=this.attributes.position,r=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),r)for(let i=0,n=r.length;i<n;i++){let a=r[i];Gr.setFromBufferAttribute(a),this.morphTargetsRelative?(er.addVectors(this.boundingBox.min,Gr.min),this.boundingBox.expandByPoint(er),er.addVectors(this.boundingBox.max,Gr.max),this.boundingBox.expandByPoint(er)):(this.boundingBox.expandByPoint(Gr.min),this.boundingBox.expandByPoint(Gr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hs);let t=this.attributes.position,r=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let i=this.boundingSphere.center;if(Gr.setFromBufferAttribute(t),r)for(let a=0,s=r.length;a<s;a++){let o=r[a];$o.setFromBufferAttribute(o),this.morphTargetsRelative?(er.addVectors(Gr.min,$o.min),Gr.expandByPoint(er),er.addVectors(Gr.max,$o.max),Gr.expandByPoint(er)):(Gr.expandByPoint($o.min),Gr.expandByPoint($o.max))}Gr.getCenter(i);let n=0;for(let a=0,s=t.count;a<s;a++)er.fromBufferAttribute(t,a),n=Math.max(n,i.distanceToSquared(er));if(r)for(let a=0,s=r.length;a<s;a++){let o=r[a],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)er.fromBufferAttribute(o,u),l&&(hs.fromBufferAttribute(t,u),er.add(hs)),n=Math.max(n,i.distanceToSquared(er))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,r=this.attributes;if(t===null||r.position===void 0||r.normal===void 0||r.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=r.position,n=r.normal,a=r.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vr(new Float32Array(4*i.count),4));let s=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new L,l[R]=new L;let u=new L,c=new L,h=new L,p=new ne,f=new ne,y=new ne,_=new L,v=new L;function d(R,E,M){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,E),h.fromBufferAttribute(i,M),p.fromBufferAttribute(a,R),f.fromBufferAttribute(a,E),y.fromBufferAttribute(a,M),c.sub(u),h.sub(u),f.sub(p),y.sub(p);let N=1/(f.x*y.y-y.x*f.y);isFinite(N)&&(_.copy(c).multiplyScalar(y.y).addScaledVector(h,-f.y).multiplyScalar(N),v.copy(h).multiplyScalar(f.x).addScaledVector(c,-y.x).multiplyScalar(N),o[R].add(_),o[E].add(_),o[M].add(_),l[R].add(v),l[E].add(v),l[M].add(v))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let R=0,E=g.length;R<E;++R){let M=g[R],N=M.start,k=M.count;for(let V=N,W=N+k;V<W;V+=3)d(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let m=new L,x=new L,P=new L,T=new L;function b(R){P.fromBufferAttribute(n,R),T.copy(P);let E=o[R];m.copy(E),m.sub(P.multiplyScalar(P.dot(E))).normalize(),x.crossVectors(T,E);let M=x.dot(l[R])<0?-1:1;s.setXYZW(R,m.x,m.y,m.z,M)}for(let R=0,E=g.length;R<E;++R){let M=g[R],N=M.start,k=M.count;for(let V=N,W=N+k;V<W;V+=3)b(t.getX(V+0)),b(t.getX(V+1)),b(t.getX(V+2))}}computeVertexNormals(){let t=this.index,r=this.getAttribute("position");if(r!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vr(new Float32Array(r.count*3),3),this.setAttribute("normal",i);else for(let p=0,f=i.count;p<f;p++)i.setXYZ(p,0,0,0);let n=new L,a=new L,s=new L,o=new L,l=new L,u=new L,c=new L,h=new L;if(t)for(let p=0,f=t.count;p<f;p+=3){let y=t.getX(p+0),_=t.getX(p+1),v=t.getX(p+2);n.fromBufferAttribute(r,y),a.fromBufferAttribute(r,_),s.fromBufferAttribute(r,v),c.subVectors(s,a),h.subVectors(n,a),c.cross(h),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,v),o.add(c),l.add(c),u.add(c),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(v,u.x,u.y,u.z)}else for(let p=0,f=r.count;p<f;p+=3)n.fromBufferAttribute(r,p+0),a.fromBufferAttribute(r,p+1),s.fromBufferAttribute(r,p+2),c.subVectors(s,a),h.subVectors(n,a),c.cross(h),i.setXYZ(p+0,c.x,c.y,c.z),i.setXYZ(p+1,c.x,c.y,c.z),i.setXYZ(p+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let r=0,i=t.count;r<i;r++)er.fromBufferAttribute(t,r),er.normalize(),t.setXYZ(r,er.x,er.y,er.z)}toNonIndexed(){function t(o,l){let u=o.array,c=o.itemSize,h=o.normalized,p=new u.constructor(l.length*c),f=0,y=0;for(let _=0,v=l.length;_<v;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*c;for(let d=0;d<c;d++)p[y++]=u[f++]}return new vr(p,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let r=new py,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],u=t(l,i);r.setAttribute(o,u)}let a=this.morphAttributes;for(let o in a){let l=[],u=a[o];for(let c=0,h=u.length;c<h;c++){let p=u[c],f=t(p,i);l.push(f)}r.morphAttributes[o]=l}r.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let u=s[o];r.addGroup(u.start,u.count,u.materialIndex)}return r}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};let r=this.index;r!==null&&(t.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});let i=this.attributes;for(let l in i){let u=i[l];t.data.attributes[l]=u.toJSON(t.data)}let n={},a=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],c=[];for(let h=0,p=u.length;h<p;h++){let f=u[h];c.push(f.toJSON(t.data))}c.length>0&&(n[l]=c,a=!0)}a&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let r={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(r));let n=t.attributes;for(let u in n){let c=n[u];this.setAttribute(u,c.clone(r))}let a=t.morphAttributes;for(let u in a){let c=[],h=a[u];for(let p=0,f=h.length;p<f;p++)c.push(h[p].clone(r));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let u=0,c=s.length;u<c;u++){let h=s[u];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},z_=new bt,la=new oy,Ju=new Hs,B_=new L,Qu=new L,Zu=new L,ec=new L,Pp=new L,tc=new L,V_=new L,rc=new L,Ve=class extends rr{constructor(e=new ir,t=new Ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,n=r.length;i<n;i++){let a=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let r=this.geometry,i=r.attributes.position,n=r.morphAttributes.position,a=r.morphTargetsRelative;t.fromBufferAttribute(i,e);let s=this.morphTargetInfluences;if(n&&s){tc.set(0,0,0);for(let o=0,l=n.length;o<l;o++){let u=s[o],c=n[o];u!==0&&(Pp.fromBufferAttribute(c,e),a?tc.addScaledVector(Pp,u):tc.addScaledVector(Pp.sub(t),u))}t.add(tc)}return t}raycast(e,t){let r=this.geometry,i=this.material,n=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ju.copy(r.boundingSphere),Ju.applyMatrix4(n),la.copy(e.ray).recast(e.near),!(Ju.containsPoint(la.origin)===!1&&(la.intersectSphere(Ju,B_)===null||la.origin.distanceToSquared(B_)>(e.far-e.near)**2))&&(z_.copy(n).invert(),la.copy(e.ray).applyMatrix4(z_),!(r.boundingBox!==null&&la.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,la)))}_computeIntersections(e,t,r){let i,n=this.geometry,a=this.material,s=n.index,o=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv1,c=n.attributes.normal,h=n.groups,p=n.drawRange;if(s!==null)if(Array.isArray(a))for(let f=0,y=h.length;f<y;f++){let _=h[f],v=a[_.materialIndex],d=Math.max(_.start,p.start),g=Math.min(s.count,Math.min(_.start+_.count,p.start+p.count));for(let m=d,x=g;m<x;m+=3){let P=s.getX(m),T=s.getX(m+1),b=s.getX(m+2);i=ic(this,v,e,r,l,u,c,P,T,b),i&&(i.faceIndex=Math.floor(m/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{let f=Math.max(0,p.start),y=Math.min(s.count,p.start+p.count);for(let _=f,v=y;_<v;_+=3){let d=s.getX(_),g=s.getX(_+1),m=s.getX(_+2);i=ic(this,a,e,r,l,u,c,d,g,m),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}else if(o!==void 0)if(Array.isArray(a))for(let f=0,y=h.length;f<y;f++){let _=h[f],v=a[_.materialIndex],d=Math.max(_.start,p.start),g=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let m=d,x=g;m<x;m+=3){let P=m,T=m+1,b=m+2;i=ic(this,v,e,r,l,u,c,P,T,b),i&&(i.faceIndex=Math.floor(m/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{let f=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let _=f,v=y;_<v;_+=3){let d=_,g=_+1,m=_+2;i=ic(this,a,e,r,l,u,c,d,g,m),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}}};function UE(e,t,r,i,n,a,s,o){let l;if(t.side===br?l=i.intersectTriangle(s,a,n,!0,o):l=i.intersectTriangle(n,a,s,t.side===Bn,o),l===null)return null;rc.copy(o),rc.applyMatrix4(e.matrixWorld);let u=r.ray.origin.distanceTo(rc);return u<r.near||u>r.far?null:{distance:u,point:rc.clone(),object:e}}function ic(e,t,r,i,n,a,s,o,l,u){e.getVertexPosition(o,Qu),e.getVertexPosition(l,Zu),e.getVertexPosition(u,ec);let c=UE(e,t,r,i,Qu,Zu,ec,V_);if(c){let h=new L;Ss.getBarycoord(V_,Qu,Zu,ec,h),n&&(c.uv=Ss.getInterpolatedAttribute(n,o,l,u,h,new ne)),a&&(c.uv1=Ss.getInterpolatedAttribute(a,o,l,u,h,new ne)),s&&(c.normal=Ss.getInterpolatedAttribute(s,o,l,u,h,new L),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let p={a:o,b:l,c:u,normal:new L,materialIndex:0};Ss.getNormal(Qu,Zu,ec,p.normal),c.face=p,c.barycoord=h}return c}var Tr=class fy extends ir{constructor(t=1,r=1,i=1,n=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:r,depth:i,widthSegments:n,heightSegments:a,depthSegments:s};let o=this;n=Math.floor(n),a=Math.floor(a),s=Math.floor(s);let l=[],u=[],c=[],h=[],p=0,f=0;y("z","y","x",-1,-1,i,r,t,s,a,0),y("z","y","x",1,-1,i,r,-t,s,a,1),y("x","z","y",1,1,t,i,r,n,s,2),y("x","z","y",1,-1,t,i,-r,n,s,3),y("x","y","z",1,-1,t,r,i,n,a,4),y("x","y","z",-1,-1,t,r,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new _t(u,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(h,2));function y(_,v,d,g,m,x,P,T,b,R,E){let M=x/b,N=P/R,k=x/2,V=P/2,W=T/2,j=b+1,X=R+1,ae=0,$=0,pe=new L;for(let Se=0;Se<X;Se++){let Je=Se*N-V;for(let et=0;et<j;et++){let K=et*M-k;pe[_]=K*g,pe[v]=Je*m,pe[d]=W,u.push(pe.x,pe.y,pe.z),pe[_]=0,pe[v]=0,pe[d]=T>0?1:-1,c.push(pe.x,pe.y,pe.z),h.push(et/b),h.push(1-Se/R),ae+=1}}for(let Se=0;Se<R;Se++)for(let Je=0;Je<b;Je++){let et=p+Je+j*Se,K=p+Je+j*(Se+1),he=p+(Je+1)+j*(Se+1),Ue=p+(Je+1)+j*Se;l.push(et,K,Ue),l.push(K,he,Ue),$+=6}o.addGroup(f,$,E),f+=$,p+=ae}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fy(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Fs(e){let t={};for(let r in e){t[r]={};for(let i in e[r]){let n=e[r][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[r][i]=null):t[r][i]=n.clone():Array.isArray(n)?t[r][i]=n.slice():t[r][i]=n}}return t}function wr(e){let t={};for(let r=0;r<e.length;r++){let i=Fs(e[r]);for(let n in i)t[n]=i[n]}return t}function OE(e){let t=[];for(let r=0;r<e.length;r++)t.push(e[r].clone());return t}function my(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ht.workingColorSpace}var ll={clone:Fs,merge:wr},kE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,or=class extends Sa{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kE,this.fragmentShader=FE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=OE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let n=this.uniforms[i].value;n&&n.isTexture?t.uniforms[i]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[i]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[i]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[i]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[i]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[i]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[i]={type:"m4",value:n.toArray()}:t.uniforms[i]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let r={};for(let i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}},gy=class extends rr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Un=new L,H_=new ne,G_=new ne,Xr=class extends gy{constructor(e=50,t=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Df*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(cp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Df*2*Math.atan(Math.tan(cp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Un.x,Un.y).multiplyScalar(-e/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Un.x,Un.y).multiplyScalar(-e/Un.z)}getViewSize(e,t){return this.getViewBounds(e,H_,G_),t.subVectors(G_,H_)}setViewOffset(e,t,r,i,n,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(cp*.5*this.fov)/this.zoom,r=2*t,i=this.aspect*r,n=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let o=a.fullWidth,l=a.fullHeight;n+=a.offsetX*i/o,t-=a.offsetY*r/l,i*=a.width/o,r*=a.height/l}let s=this.filmOffset;s!==0&&(n+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+i,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ds=-90,ps=1,zE=class extends rr{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Xr(ds,ps,e,t);i.layers=this.layers,this.add(i);let n=new Xr(ds,ps,e,t);n.layers=this.layers,this.add(n);let a=new Xr(ds,ps,e,t);a.layers=this.layers,this.add(a);let s=new Xr(ds,ps,e,t);s.layers=this.layers,this.add(s);let o=new Xr(ds,ps,e,t);o.layers=this.layers,this.add(o);let l=new Xr(ds,ps,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[r,i,n,a,s,o]=t;for(let l of t)this.remove(l);if(e===Qi)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Nc)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[n,a,s,o,l,u]=this.children,c=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let y=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(t,n),e.setRenderTarget(r,1,i),e.render(t,a),e.setRenderTarget(r,2,i),e.render(t,s),e.setRenderTarget(r,3,i),e.render(t,o),e.setRenderTarget(r,4,i),e.render(t,l),r.texture.generateMipmaps=y,e.setRenderTarget(r,5,i),e.render(t,u),e.setRenderTarget(c,h,p),e.xr.enabled=f,r.texture.needsPMREMUpdate=!0}},vy=class extends ii{constructor(e,t,r,i,n,a,s,o,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ds,super(e,t,r,i,n,a,s,o,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},BE=class extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new vy(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ri}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Tr(5,5,5),n=new or({name:"CubemapFromEquirect",uniforms:Fs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:br,blending:Zi});n.uniforms.tEquirect.value=t;let a=new Ve(i,n),s=t.minFilter;return t.minFilter===_a&&(t.minFilter=Ri),new zE(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,r,i){let n=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,r,i);e.setRenderTarget(n)}},Np=new L,VE=new L,HE=new ot,pa=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){let i=Np.subVectors(r,t).cross(VE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let r=e.delta(Np),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/i;return n<0||n>1?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let r=t||HE.getNormalMatrix(e),i=this.coplanarPoint(Np).applyMatrix4(e),n=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ua=new Hs,nc=new L,em=class{constructor(e=new pa,t=new pa,r=new pa,i=new pa,n=new pa,a=new pa){this.planes=[e,t,r,i,n,a]}set(e,t,r,i,n,a){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(r),s[3].copy(i),s[4].copy(n),s[5].copy(a),this}copy(e){let t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Qi){let r=this.planes,i=e.elements,n=i[0],a=i[1],s=i[2],o=i[3],l=i[4],u=i[5],c=i[6],h=i[7],p=i[8],f=i[9],y=i[10],_=i[11],v=i[12],d=i[13],g=i[14],m=i[15];if(r[0].setComponents(o-n,h-l,_-p,m-v).normalize(),r[1].setComponents(o+n,h+l,_+p,m+v).normalize(),r[2].setComponents(o+a,h+u,_+f,m+d).normalize(),r[3].setComponents(o-a,h-u,_-f,m-d).normalize(),r[4].setComponents(o-s,h-c,_-y,m-g).normalize(),t===Qi)r[5].setComponents(o+s,h+c,_+y,m+g).normalize();else if(t===Nc)r[5].setComponents(s,c,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ua.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ua.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ua)}intersectsSprite(e){return ua.center.set(0,0,0),ua.radius=.7071067811865476,ua.applyMatrix4(e.matrixWorld),this.intersectsSphere(ua)}intersectsSphere(e){let t=this.planes,r=e.center,i=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let r=0;r<6;r++){let i=t[r];if(nc.x=i.normal.x>0?e.max.x:e.min.x,nc.y=i.normal.y>0?e.max.y:e.min.y,nc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(nc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function _y(){let e=null,t=!1,r=null,i=null;function n(a,s){r(a,s),i=e.requestAnimationFrame(n)}return{start:function(){t!==!0&&r!==null&&(i=e.requestAnimationFrame(n),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){r=a},setContext:function(a){e=a}}}function GE(e){let t=new WeakMap;function r(o,l){let u=o.array,c=o.usage,h=u.byteLength,p=e.createBuffer();e.bindBuffer(l,p),e.bufferData(l,u,c),o.onUploadCallback();let f;if(u instanceof Float32Array)f=e.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=e.SHORT;else if(u instanceof Uint32Array)f=e.UNSIGNED_INT;else if(u instanceof Int32Array)f=e.INT;else if(u instanceof Int8Array)f=e.BYTE;else if(u instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,u){let c=l.array,h=l.updateRanges;if(e.bindBuffer(u,o),h.length===0)e.bufferSubData(u,0,c);else{h.sort((f,y)=>f.start-y.start);let p=0;for(let f=1;f<h.length;f++){let y=h[p],_=h[f];_.start<=y.start+y.count+1?y.count=Math.max(y.count,_.start+_.count-y.start):(++p,h[p]=_)}h.length=p+1;for(let f=0,y=h.length;f<y;f++){let _=h[f];e.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=t.get(o);if(u===void 0)t.set(o,r(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:n,remove:a,update:s}}var kn=class yy extends ir{constructor(t=1,r=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:r,widthSegments:i,heightSegments:n};let a=t/2,s=r/2,o=Math.floor(i),l=Math.floor(n),u=o+1,c=l+1,h=t/o,p=r/l,f=[],y=[],_=[],v=[];for(let d=0;d<c;d++){let g=d*p-s;for(let m=0;m<u;m++){let x=m*h-a;y.push(x,-g,0),_.push(0,0,1),v.push(m/o),v.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<o;g++){let m=g+u*d,x=g+u*(d+1),P=g+1+u*(d+1),T=g+1+u*d;f.push(m,x,T),f.push(x,P,T)}this.setIndex(f),this.setAttribute("position",new _t(y,3)),this.setAttribute("normal",new _t(_,3)),this.setAttribute("uv",new _t(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yy(t.width,t.height,t.widthSegments,t.heightSegments)}},WE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XE=`#ifdef USE_ALPHAHASH
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
#endif`,jE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$E=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KE=`#ifdef USE_AOMAP
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
#endif`,JE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QE=`#ifdef USE_BATCHING
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
#endif`,ZE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ew=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iw=`#ifdef USE_IRIDESCENCE
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
#endif`,nw=`#ifdef USE_BUMPMAP
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
#endif`,aw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ow=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pw=`#define PI 3.141592653589793
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
} // validated`,fw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mw=`vec3 transformedNormal = objectNormal;
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
#endif`,gw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_w=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sw=`#ifdef USE_ENVMAP
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
#endif`,Ew=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ww=`#ifdef USE_ENVMAP
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
#endif`,Tw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bw=`#ifdef USE_ENVMAP
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
#endif`,Aw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nw=`#ifdef USE_GRADIENTMAP
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
}`,Lw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uw=`uniform bool receiveShadow;
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
#endif`,Ow=`#ifdef USE_ENVMAP
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
#endif`,kw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vw=`PhysicalMaterial material;
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
#endif`,Hw=`struct PhysicalMaterial {
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
}`,Gw=`
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
#endif`,Ww=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$w=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zw=`#if defined( USE_POINTS_UV )
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
#endif`,e2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a2=`#ifdef USE_MORPHTARGETS
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
#endif`,s2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,l2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,u2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d2=`#ifdef USE_NORMALMAP
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
#endif`,p2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,y2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C2=`float getShadowMask() {
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
}`,R2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P2=`#ifdef USE_SKINNING
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
#endif`,N2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L2=`#ifdef USE_SKINNING
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
#endif`,I2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,k2=`#ifdef USE_TRANSMISSION
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
#endif`,F2=`#ifdef USE_TRANSMISSION
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
#endif`,z2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,G2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W2=`uniform sampler2D t2D;
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
}`,X2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y2=`#include <common>
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
}`,K2=`#if DEPTH_PACKING == 3200
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
}`,J2=`#define DISTANCE
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
}`,Q2=`#define DISTANCE
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
}`,Z2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tT=`uniform float scale;
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
}`,rT=`uniform vec3 diffuse;
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
}`,iT=`#include <common>
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
}`,nT=`uniform vec3 diffuse;
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
}`,aT=`#define LAMBERT
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
}`,sT=`#define LAMBERT
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
}`,oT=`#define MATCAP
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
}`,lT=`#define MATCAP
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
}`,uT=`#define NORMAL
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
}`,cT=`#define NORMAL
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
}`,hT=`#define PHONG
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
}`,dT=`#define PHONG
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
}`,pT=`#define STANDARD
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
}`,fT=`#define STANDARD
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
}`,mT=`#define TOON
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
}`,gT=`#define TOON
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
}`,vT=`uniform float size;
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
}`,_T=`uniform vec3 diffuse;
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
}`,yT=`#include <common>
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
}`,xT=`uniform vec3 color;
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
}`,MT=`uniform float rotation;
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
}`,ST=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:WE,alphahash_pars_fragment:XE,alphamap_fragment:jE,alphamap_pars_fragment:$E,alphatest_fragment:qE,alphatest_pars_fragment:YE,aomap_fragment:KE,aomap_pars_fragment:JE,batching_pars_vertex:QE,batching_vertex:ZE,begin_vertex:ew,beginnormal_vertex:tw,bsdfs:rw,iridescence_fragment:iw,bumpmap_pars_fragment:nw,clipping_planes_fragment:aw,clipping_planes_pars_fragment:sw,clipping_planes_pars_vertex:ow,clipping_planes_vertex:lw,color_fragment:uw,color_pars_fragment:cw,color_pars_vertex:hw,color_vertex:dw,common:pw,cube_uv_reflection_fragment:fw,defaultnormal_vertex:mw,displacementmap_pars_vertex:gw,displacementmap_vertex:vw,emissivemap_fragment:_w,emissivemap_pars_fragment:yw,colorspace_fragment:xw,colorspace_pars_fragment:Mw,envmap_fragment:Sw,envmap_common_pars_fragment:Ew,envmap_pars_fragment:ww,envmap_pars_vertex:Tw,envmap_physical_pars_fragment:Ow,envmap_vertex:bw,fog_vertex:Aw,fog_pars_vertex:Cw,fog_fragment:Rw,fog_pars_fragment:Pw,gradientmap_pars_fragment:Nw,lightmap_pars_fragment:Lw,lights_lambert_fragment:Iw,lights_lambert_pars_fragment:Dw,lights_pars_begin:Uw,lights_toon_fragment:kw,lights_toon_pars_fragment:Fw,lights_phong_fragment:zw,lights_phong_pars_fragment:Bw,lights_physical_fragment:Vw,lights_physical_pars_fragment:Hw,lights_fragment_begin:Gw,lights_fragment_maps:Ww,lights_fragment_end:Xw,logdepthbuf_fragment:jw,logdepthbuf_pars_fragment:$w,logdepthbuf_pars_vertex:qw,logdepthbuf_vertex:Yw,map_fragment:Kw,map_pars_fragment:Jw,map_particle_fragment:Qw,map_particle_pars_fragment:Zw,metalnessmap_fragment:e2,metalnessmap_pars_fragment:t2,morphinstance_vertex:r2,morphcolor_vertex:i2,morphnormal_vertex:n2,morphtarget_pars_vertex:a2,morphtarget_vertex:s2,normal_fragment_begin:o2,normal_fragment_maps:l2,normal_pars_fragment:u2,normal_pars_vertex:c2,normal_vertex:h2,normalmap_pars_fragment:d2,clearcoat_normal_fragment_begin:p2,clearcoat_normal_fragment_maps:f2,clearcoat_pars_fragment:m2,iridescence_pars_fragment:g2,opaque_fragment:v2,packing:_2,premultiplied_alpha_fragment:y2,project_vertex:x2,dithering_fragment:M2,dithering_pars_fragment:S2,roughnessmap_fragment:E2,roughnessmap_pars_fragment:w2,shadowmap_pars_fragment:T2,shadowmap_pars_vertex:b2,shadowmap_vertex:A2,shadowmask_pars_fragment:C2,skinbase_vertex:R2,skinning_pars_vertex:P2,skinning_vertex:N2,skinnormal_vertex:L2,specularmap_fragment:I2,specularmap_pars_fragment:D2,tonemapping_fragment:U2,tonemapping_pars_fragment:O2,transmission_fragment:k2,transmission_pars_fragment:F2,uv_pars_fragment:z2,uv_pars_vertex:B2,uv_vertex:V2,worldpos_vertex:H2,background_vert:G2,background_frag:W2,backgroundCube_vert:X2,backgroundCube_frag:j2,cube_vert:$2,cube_frag:q2,depth_vert:Y2,depth_frag:K2,distanceRGBA_vert:J2,distanceRGBA_frag:Q2,equirect_vert:Z2,equirect_frag:eT,linedashed_vert:tT,linedashed_frag:rT,meshbasic_vert:iT,meshbasic_frag:nT,meshlambert_vert:aT,meshlambert_frag:sT,meshmatcap_vert:oT,meshmatcap_frag:lT,meshnormal_vert:uT,meshnormal_frag:cT,meshphong_vert:hT,meshphong_frag:dT,meshphysical_vert:pT,meshphysical_frag:fT,meshtoon_vert:mT,meshtoon_frag:gT,points_vert:vT,points_frag:_T,shadow_vert:yT,shadow_frag:xT,sprite_vert:MT,sprite_frag:ST},Ee={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},bi={basic:{uniforms:wr([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:wr([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new We(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:wr([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:wr([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:wr([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new We(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:wr([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:wr([Ee.points,Ee.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:wr([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:wr([Ee.common,Ee.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:wr([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:wr([Ee.sprite,Ee.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:wr([Ee.common,Ee.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:wr([Ee.lights,Ee.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};bi.physical={uniforms:wr([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var ac={r:0,b:0,g:0},ca=new Vn,ET=new bt;function wT(e,t,r,i,n,a,s){let o=new We(0),l=a===!0?0:1,u,c,h=null,p=0,f=null;function y(g){let m=g.isScene===!0?g.background:null;return m&&m.isTexture&&(m=(g.backgroundBlurriness>0?r:t).get(m)),m}function _(g){let m=!1,x=y(g);x===null?d(o,l):x&&x.isColor&&(d(x,1),m=!0);let P=e.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||m)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function v(g,m){let x=y(m);x&&(x.isCubeTexture||x.mapping===Ic)?(c===void 0&&(c=new Ve(new Tr(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:Fs(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),ca.copy(m.backgroundRotation),ca.x*=-1,ca.y*=-1,ca.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ca.y*=-1,ca.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ET.makeRotationFromEuler(ca)),c.material.toneMapped=ht.getTransfer(x.colorSpace)!==vt,(h!==x||p!==x.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,h=x,p=x.version,f=e.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Ve(new kn(2,2),new or({name:"BackgroundMaterial",uniforms:Fs(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=ht.getTransfer(x.colorSpace)!==vt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||p!==x.version||f!==e.toneMapping)&&(u.material.needsUpdate=!0,h=x,p=x.version,f=e.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function d(g,m){g.getRGB(ac,my(e)),i.buffers.color.setClear(ac.r,ac.g,ac.b,m,s)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),l=m,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,d(o,l)},render:_,addToRenderList:v}}function TT(e,t){let r=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},n=p(null),a=n,s=!1;function o(M,N,k,V,W){let j=!1,X=h(V,k,N);a!==X&&(a=X,u(a.object)),j=f(M,V,k,W),j&&y(M,V,k,W),W!==null&&t.update(W,e.ELEMENT_ARRAY_BUFFER),(j||s)&&(s=!1,x(M,N,k,V),W!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return e.createVertexArray()}function u(M){return e.bindVertexArray(M)}function c(M){return e.deleteVertexArray(M)}function h(M,N,k){let V=k.wireframe===!0,W=i[M.id];W===void 0&&(W={},i[M.id]=W);let j=W[N.id];j===void 0&&(j={},W[N.id]=j);let X=j[V];return X===void 0&&(X=p(l()),j[V]=X),X}function p(M){let N=[],k=[],V=[];for(let W=0;W<r;W++)N[W]=0,k[W]=0,V[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:V,object:M,attributes:{},index:null}}function f(M,N,k,V){let W=a.attributes,j=N.attributes,X=0,ae=k.getAttributes();for(let $ in ae)if(ae[$].location>=0){let pe=W[$],Se=j[$];if(Se===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor)),pe===void 0||pe.attribute!==Se||Se&&pe.data!==Se.data)return!0;X++}return a.attributesNum!==X||a.index!==V}function y(M,N,k,V){let W={},j=N.attributes,X=0,ae=k.getAttributes();for(let $ in ae)if(ae[$].location>=0){let pe=j[$];pe===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor));let Se={};Se.attribute=pe,pe&&pe.data&&(Se.data=pe.data),W[$]=Se,X++}a.attributes=W,a.attributesNum=X,a.index=V}function _(){let M=a.newAttributes;for(let N=0,k=M.length;N<k;N++)M[N]=0}function v(M){d(M,0)}function d(M,N){let k=a.newAttributes,V=a.enabledAttributes,W=a.attributeDivisors;k[M]=1,V[M]===0&&(e.enableVertexAttribArray(M),V[M]=1),W[M]!==N&&(e.vertexAttribDivisor(M,N),W[M]=N)}function g(){let M=a.newAttributes,N=a.enabledAttributes;for(let k=0,V=N.length;k<V;k++)N[k]!==M[k]&&(e.disableVertexAttribArray(k),N[k]=0)}function m(M,N,k,V,W,j,X){X===!0?e.vertexAttribIPointer(M,N,k,W,j):e.vertexAttribPointer(M,N,k,V,W,j)}function x(M,N,k,V){_();let W=V.attributes,j=k.getAttributes(),X=N.defaultAttributeValues;for(let ae in j){let $=j[ae];if($.location>=0){let pe=W[ae];if(pe===void 0&&(ae==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),ae==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor)),pe!==void 0){let Se=pe.normalized,Je=pe.itemSize,et=t.get(pe);if(et===void 0)continue;let K=et.buffer,he=et.type,Ue=et.bytesPerElement,Le=he===e.INT||he===e.UNSIGNED_INT||pe.gpuType===$f;if(pe.isInterleavedBufferAttribute){let ve=pe.data,$e=ve.stride,rt=pe.offset;if(ve.isInstancedInterleavedBuffer){for(let Ke=0;Ke<$.locationSize;Ke++)d($.location+Ke,ve.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ke=0;Ke<$.locationSize;Ke++)v($.location+Ke);e.bindBuffer(e.ARRAY_BUFFER,K);for(let Ke=0;Ke<$.locationSize;Ke++)m($.location+Ke,Je/$.locationSize,he,Se,$e*Ue,(rt+Je/$.locationSize*Ke)*Ue,Le)}else{if(pe.isInstancedBufferAttribute){for(let ve=0;ve<$.locationSize;ve++)d($.location+ve,pe.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ve=0;ve<$.locationSize;ve++)v($.location+ve);e.bindBuffer(e.ARRAY_BUFFER,K);for(let ve=0;ve<$.locationSize;ve++)m($.location+ve,Je/$.locationSize,he,Se,Je*Ue,Je/$.locationSize*ve*Ue,Le)}}else if(X!==void 0){let Se=X[ae];if(Se!==void 0)switch(Se.length){case 2:e.vertexAttrib2fv($.location,Se);break;case 3:e.vertexAttrib3fv($.location,Se);break;case 4:e.vertexAttrib4fv($.location,Se);break;default:e.vertexAttrib1fv($.location,Se)}}}}g()}function P(){R();for(let M in i){let N=i[M];for(let k in N){let V=N[k];for(let W in V)c(V[W].object),delete V[W];delete N[k]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;let N=i[M.id];for(let k in N){let V=N[k];for(let W in V)c(V[W].object),delete V[W];delete N[k]}delete i[M.id]}function b(M){for(let N in i){let k=i[N];if(k[M.id]===void 0)continue;let V=k[M.id];for(let W in V)c(V[W].object),delete V[W];delete k[M.id]}}function R(){E(),s=!0,a!==n&&(a=n,u(a.object))}function E(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:R,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:v,disableUnusedAttributes:g}}function bT(e,t,r){let i;function n(u){i=u}function a(u,c){e.drawArrays(i,u,c),r.update(c,i,1)}function s(u,c,h){h!==0&&(e.drawArraysInstanced(i,u,c,h),r.update(c,i,h))}function o(u,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,h);let p=0;for(let f=0;f<h;f++)p+=c[f];r.update(p,i,1)}function l(u,c,h,p){if(h===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let y=0;y<u.length;y++)s(u[y],c[y],p[y]);else{f.multiDrawArraysInstancedWEBGL(i,u,0,c,0,p,0,h);let y=0;for(let _=0;_<h;_++)y+=c[_]*p[_];r.update(y,i,1)}}this.setMode=n,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function AT(e,t,r,i){let n;function a(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");n=e.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){return!(b!==vi&&i.convert(b)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){let R=b===en&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==an&&i.convert(b)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Pi&&!R)}function l(b){if(b==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=r.precision!==void 0?r.precision:"highp",c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);let h=r.logarithmicDepthBuffer===!0,p=r.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),v=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),m=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),P=y>0,T=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:y,maxTextureSize:_,maxCubemapSize:v,maxAttributes:d,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:x,vertexTextures:P,maxSamples:T}}function CT(e){let t=this,r=null,i=0,n=!1,a=!1,s=new pa,o=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){let f=h.length!==0||p||i!==0||n;return n=p,i=h.length,f},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,p){r=c(h,p,0)},this.setState=function(h,p,f){let y=h.clippingPlanes,_=h.clipIntersection,v=h.clipShadows,d=e.get(h);if(!n||y===null||y.length===0||a&&!v)a?c(null):u();else{let g=a?0:i,m=g*4,x=d.clippingState||null;l.value=x,x=c(y,p,m,f);for(let P=0;P!==m;++P)x[P]=r[P];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==r&&(l.value=r,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(h,p,f,y){let _=h!==null?h.length:0,v=null;if(_!==0){if(v=l.value,y!==!0||v===null){let d=f+_*4,g=p.matrixWorldInverse;o.getNormalMatrix(g),(v===null||v.length<d)&&(v=new Float32Array(d));for(let m=0,x=f;m!==_;++m,x+=4)s.copy(h[m]).applyMatrix4(g,o),s.normal.toArray(v,x),v[x+3]=s.constant}l.value=v,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,v}}function RT(e){let t=new WeakMap;function r(s,o){return o===rf?s.mapping=Ds:o===nf&&(s.mapping=Us),s}function i(s){if(s&&s.isTexture){let o=s.mapping;if(o===rf||o===nf)if(t.has(s)){let l=t.get(s).texture;return r(l,s.mapping)}else{let l=s.image;if(l&&l.height>0){let u=new BE(l.height);return u.fromEquirectangularTexture(e,s),t.set(s,u),s.addEventListener("dispose",n),r(u.texture,s.mapping)}else return null}}return s}function n(s){let o=s.target;o.removeEventListener("dispose",n);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var tm=class extends gy{constructor(e=-1,t=1,r=1,i=-1,n=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=i,this.near=n,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,i,n,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2,n=r-e,a=r+e,s=i+t,o=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=l*this.view.offsetX,a=n+l*this.view.width,s-=u*this.view.offsetY,o=s-u*this.view.height}this.projectionMatrix.makeOrthographic(n,a,s,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ts=4,W_=[.125,.215,.35,.446,.526,.582],ga=20,Lp=new tm,X_=new We,Ip=null,Dp=0,Up=0,Op=!1,fa=(1+Math.sqrt(5))/2,fs=1/fa,j_=[new L(-fa,fs,0),new L(fa,fs,0),new L(-fs,0,fa),new L(fs,0,fa),new L(0,fa,-fs),new L(0,fa,fs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Of=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,i=100){Ip=this._renderer.getRenderTarget(),Dp=this._renderer.getActiveCubeFace(),Up=this._renderer.getActiveMipmapLevel(),Op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,r,i,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Y_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=q_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ip,Dp,Up),this._renderer.xr.enabled=Op,e.scissorTest=!1,sc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ip=this._renderer.getRenderTarget(),Dp=this._renderer.getActiveCubeFace(),Up=this._renderer.getActiveMipmapLevel(),Op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:en,format:vi,colorSpace:zs,depthBuffer:!1},i=$_(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$_(e,t,r);let{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PT(n)),this._blurMaterial=NT(n,e,t)}return i}_compileMaterial(e){let t=new Ve(this._lodPlanes[0],e);this._renderer.compile(t,Lp)}_sceneToCubeUV(e,t,r,i){let n=new Xr(90,1,t,r),a=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],o=this._renderer,l=o.autoClear,u=o.toneMapping;o.getClearColor(X_),o.toneMapping=zn,o.autoClear=!1;let c=new Ji({name:"PMREM.Background",side:br,depthWrite:!1,depthTest:!1}),h=new Ve(new Tr,c),p=!1,f=e.background;f?f.isColor&&(c.color.copy(f),e.background=null,p=!0):(c.color.copy(X_),p=!0);for(let y=0;y<6;y++){let _=y%3;_===0?(n.up.set(0,a[y],0),n.lookAt(s[y],0,0)):_===1?(n.up.set(0,0,a[y]),n.lookAt(0,s[y],0)):(n.up.set(0,a[y],0),n.lookAt(0,0,s[y]));let v=this._cubeSize;sc(i,_*v,y>2?v:0,v,v),o.setRenderTarget(i),p&&o.render(h,n),o.render(e,n)}h.geometry.dispose(),h.material.dispose(),o.toneMapping=u,o.autoClear=l,e.background=f}_textureToCubeUV(e,t){let r=this._renderer,i=e.mapping===Ds||e.mapping===Us;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Y_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=q_());let n=i?this._cubemapMaterial:this._equirectMaterial,a=new Ve(this._lodPlanes[0],n),s=n.uniforms;s.envMap.value=e;let o=this._cubeSize;sc(t,0,0,3*o,2*o),r.setRenderTarget(t),r.render(a,Lp)}_applyPMREM(e){let t=this._renderer,r=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let n=1;n<i;n++){let a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),s=j_[(i-n-1)%j_.length];this._blur(e,n-1,n,a,s)}t.autoClear=r}_blur(e,t,r,i,n){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,r,i,"latitudinal",n),this._halfBlur(a,e,r,r,i,"longitudinal",n)}_halfBlur(e,t,r,i,n,a,s){let o=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,c=new Ve(this._lodPlanes[i],l),h=l.uniforms,p=this._sizeLods[r]-1,f=isFinite(n)?Math.PI/(2*p):2*Math.PI/(2*ga-1),y=n/f,_=isFinite(n)?1+Math.floor(u*y):ga;_>ga&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ga}`);let v=[],d=0;for(let T=0;T<ga;++T){let b=T/y,R=Math.exp(-b*b/2);v.push(R),T===0?d+=R:T<_&&(d+=2*R)}for(let T=0;T<v.length;T++)v[T]=v[T]/d;h.envMap.value=e.texture,h.samples.value=_,h.weights.value=v,h.latitudinal.value=a==="latitudinal",s&&(h.poleAxis.value=s);let{_lodMax:g}=this;h.dTheta.value=f,h.mipInt.value=g-r;let m=this._sizeLods[i],x=3*m*(i>g-Ts?i-g+Ts:0),P=4*(this._cubeSize-m);sc(t,x,P,3*m,2*m),o.setRenderTarget(t),o.render(c,Lp)}};function PT(e){let t=[],r=[],i=[],n=e,a=e-Ts+1+W_.length;for(let s=0;s<a;s++){let o=Math.pow(2,n);r.push(o);let l=1/o;s>e-Ts?l=W_[s-e+Ts-1]:s===0&&(l=0),i.push(l);let u=1/(o-2),c=-u,h=1+u,p=[c,c,h,c,h,h,c,c,h,h,c,h],f=6,y=6,_=3,v=2,d=1,g=new Float32Array(_*y*f),m=new Float32Array(v*y*f),x=new Float32Array(d*y*f);for(let T=0;T<f;T++){let b=T%3*2/3-1,R=T>2?0:-1,E=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];g.set(E,_*y*T),m.set(p,v*y*T);let M=[T,T,T,T,T,T];x.set(M,d*y*T)}let P=new ir;P.setAttribute("position",new vr(g,_)),P.setAttribute("uv",new vr(m,v)),P.setAttribute("faceIndex",new vr(x,d)),t.push(P),n>Ts&&n--}return{lodPlanes:t,sizeLods:r,sigmas:i}}function $_(e,t,r){let i=new _i(e,t,r);return i.texture.mapping=Ic,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sc(e,t,r,i,n){e.viewport.set(t,r,i,n),e.scissor.set(t,r,i,n)}function NT(e,t,r){let i=new Float32Array(ga),n=new L(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:ga,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:rm(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function q_(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rm(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Y_(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function rm(){return`

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
	`}function LT(e){let t=new WeakMap,r=null;function i(o){if(o&&o.isTexture){let l=o.mapping,u=l===rf||l===nf,c=l===Ds||l===Us;if(u||c){let h=t.get(o),p=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return r===null&&(r=new Of(e)),h=u?r.fromEquirectangular(o,h):r.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{let f=o.image;return u&&f&&f.height>0||c&&f&&n(f)?(r===null&&(r=new Of(e)),h=u?r.fromEquirectangular(o):r.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",a),h.texture):null}}}return o}function n(o){let l=0,u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function a(o){let l=o.target;l.removeEventListener("dispose",a);let u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function s(){t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:s}}function IT(e){let t={};function r(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=e.getExtension(i)}return t[i]=n,n}return{has:function(i){return r(i)!==null},init:function(){r("EXT_color_buffer_float"),r("WEBGL_clip_cull_distance"),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture"),r("WEBGL_render_shared_exponent")},get:function(i){let n=r(i);return n===null&&tl("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function DT(e,t,r,i){let n={},a=new WeakMap;function s(h){let p=h.target;p.index!==null&&t.remove(p.index);for(let y in p.attributes)t.remove(p.attributes[y]);for(let y in p.morphAttributes){let _=p.morphAttributes[y];for(let v=0,d=_.length;v<d;v++)t.remove(_[v])}p.removeEventListener("dispose",s),delete n[p.id];let f=a.get(p);f&&(t.remove(f),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,r.memory.geometries--}function o(h,p){return n[p.id]===!0||(p.addEventListener("dispose",s),n[p.id]=!0,r.memory.geometries++),p}function l(h){let p=h.attributes;for(let y in p)t.update(p[y],e.ARRAY_BUFFER);let f=h.morphAttributes;for(let y in f){let _=f[y];for(let v=0,d=_.length;v<d;v++)t.update(_[v],e.ARRAY_BUFFER)}}function u(h){let p=[],f=h.index,y=h.attributes.position,_=0;if(f!==null){let g=f.array;_=f.version;for(let m=0,x=g.length;m<x;m+=3){let P=g[m+0],T=g[m+1],b=g[m+2];p.push(P,T,T,b,b,P)}}else if(y!==void 0){let g=y.array;_=y.version;for(let m=0,x=g.length/3-1;m<x;m+=3){let P=m+0,T=m+1,b=m+2;p.push(P,T,T,b,b,P)}}else return;let v=new(ry(p)?dy:hy)(p,1);v.version=_;let d=a.get(h);d&&t.remove(d),a.set(h,v)}function c(h){let p=a.get(h);if(p){let f=h.index;f!==null&&p.version<f.version&&u(h)}else u(h);return a.get(h)}return{get:o,update:l,getWireframeAttribute:c}}function UT(e,t,r){let i;function n(p){i=p}let a,s;function o(p){a=p.type,s=p.bytesPerElement}function l(p,f){e.drawElements(i,f,a,p*s),r.update(f,i,1)}function u(p,f,y){y!==0&&(e.drawElementsInstanced(i,f,a,p*s,y),r.update(f,i,y))}function c(p,f,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,a,p,0,y);let _=0;for(let v=0;v<y;v++)_+=f[v];r.update(_,i,1)}function h(p,f,y,_){if(y===0)return;let v=t.get("WEBGL_multi_draw");if(v===null)for(let d=0;d<p.length;d++)u(p[d]/s,f[d],_[d]);else{v.multiDrawElementsInstancedWEBGL(i,f,0,a,p,0,_,0,y);let d=0;for(let g=0;g<y;g++)d+=f[g]*_[g];r.update(d,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function OT(e){let t={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(r.calls++,s){case e.TRIANGLES:r.triangles+=o*(a/3);break;case e.LINES:r.lines+=o*(a/2);break;case e.LINE_STRIP:r.lines+=o*(a-1);break;case e.LINE_LOOP:r.lines+=o*a;break;case e.POINTS:r.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:t,render:r,programs:null,autoReset:!0,reset:n,update:i}}function kT(e,t,r){let i=new WeakMap,n=new Tt;function a(s,o,l){let u=s.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=c!==void 0?c.length:0,p=i.get(o);if(p===void 0||p.count!==h){let f=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",f)};p!==void 0&&p.texture.dispose();let y=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],x=0;y===!0&&(x=1),_===!0&&(x=2),v===!0&&(x=3);let P=o.attributes.position.count*x,T=1;P>t.maxTextureSize&&(T=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);let b=new Float32Array(P*T*4*h),R=new ay(b,P,T,h);R.type=Pi,R.needsUpdate=!0;let E=x*4;for(let M=0;M<h;M++){let N=d[M],k=g[M],V=m[M],W=P*T*4*M;for(let j=0;j<N.count;j++){let X=j*E;y===!0&&(n.fromBufferAttribute(N,j),b[W+X+0]=n.x,b[W+X+1]=n.y,b[W+X+2]=n.z,b[W+X+3]=0),_===!0&&(n.fromBufferAttribute(k,j),b[W+X+4]=n.x,b[W+X+5]=n.y,b[W+X+6]=n.z,b[W+X+7]=0),v===!0&&(n.fromBufferAttribute(V,j),b[W+X+8]=n.x,b[W+X+9]=n.y,b[W+X+10]=n.z,b[W+X+11]=V.itemSize===4?n.w:1)}}p={count:h,texture:R,size:new ne(P,T)},i.set(o,p),o.addEventListener("dispose",f)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,r);else{let f=0;for(let _=0;_<u.length;_++)f+=u[_];let y=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",y),l.getUniforms().setValue(e,"morphTargetInfluences",u)}l.getUniforms().setValue(e,"morphTargetsTexture",p.texture,r),l.getUniforms().setValue(e,"morphTargetsTextureSize",p.size)}return{update:a}}function FT(e,t,r,i){let n=new WeakMap;function a(l){let u=i.render.frame,c=l.geometry,h=t.get(l,c);if(n.get(h)!==u&&(t.update(h),n.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==u&&(r.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&r.update(l.instanceColor,e.ARRAY_BUFFER),n.set(l,u))),l.isSkinnedMesh){let p=l.skeleton;n.get(p)!==u&&(p.update(),n.set(p,u))}return h}function s(){n=new WeakMap}function o(l){let u=l.target;u.removeEventListener("dispose",o),r.remove(u.instanceMatrix),u.instanceColor!==null&&r.remove(u.instanceColor)}return{update:a,dispose:s}}var xy=class extends ii{constructor(e,t,r,i,n,a,s,o,l,u=Ps){if(u!==Ps&&u!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===Ps&&(r=ya),r===void 0&&u===ks&&(r=Os),super(null,i,n,a,s,o,u,r,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:jr,this.minFilter=o!==void 0?o:jr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},My=new ii,K_=new xy(1,1),Sy=new ay,Ey=new TE,wy=new vy,J_=[],Q_=[],Z_=new Float32Array(16),e1=new Float32Array(9),t1=new Float32Array(4);function Gs(e,t,r){let i=e[0];if(i<=0||i>0)return e;let n=t*r,a=J_[n];if(a===void 0&&(a=new Float32Array(n),J_[n]=a),t!==0){i.toArray(a,0);for(let s=1,o=0;s!==t;++s)o+=r,e[s].toArray(a,o)}return a}function Yt(e,t){if(e.length!==t.length)return!1;for(let r=0,i=e.length;r<i;r++)if(e[r]!==t[r])return!1;return!0}function Kt(e,t){for(let r=0,i=t.length;r<i;r++)e[r]=t[r]}function Uc(e,t){let r=Q_[t];r===void 0&&(r=new Int32Array(t),Q_[t]=r);for(let i=0;i!==t;++i)r[i]=e.allocateTextureUnit();return r}function zT(e,t){let r=this.cache;r[0]!==t&&(e.uniform1f(this.addr,t),r[0]=t)}function BT(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(Yt(r,t))return;e.uniform2fv(this.addr,t),Kt(r,t)}}function VT(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else if(t.r!==void 0)(r[0]!==t.r||r[1]!==t.g||r[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),r[0]=t.r,r[1]=t.g,r[2]=t.b);else{if(Yt(r,t))return;e.uniform3fv(this.addr,t),Kt(r,t)}}function HT(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(Yt(r,t))return;e.uniform4fv(this.addr,t),Kt(r,t)}}function GT(e,t){let r=this.cache,i=t.elements;if(i===void 0){if(Yt(r,t))return;e.uniformMatrix2fv(this.addr,!1,t),Kt(r,t)}else{if(Yt(r,i))return;t1.set(i),e.uniformMatrix2fv(this.addr,!1,t1),Kt(r,i)}}function WT(e,t){let r=this.cache,i=t.elements;if(i===void 0){if(Yt(r,t))return;e.uniformMatrix3fv(this.addr,!1,t),Kt(r,t)}else{if(Yt(r,i))return;e1.set(i),e.uniformMatrix3fv(this.addr,!1,e1),Kt(r,i)}}function XT(e,t){let r=this.cache,i=t.elements;if(i===void 0){if(Yt(r,t))return;e.uniformMatrix4fv(this.addr,!1,t),Kt(r,t)}else{if(Yt(r,i))return;Z_.set(i),e.uniformMatrix4fv(this.addr,!1,Z_),Kt(r,i)}}function jT(e,t){let r=this.cache;r[0]!==t&&(e.uniform1i(this.addr,t),r[0]=t)}function $T(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(Yt(r,t))return;e.uniform2iv(this.addr,t),Kt(r,t)}}function qT(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else{if(Yt(r,t))return;e.uniform3iv(this.addr,t),Kt(r,t)}}function YT(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(Yt(r,t))return;e.uniform4iv(this.addr,t),Kt(r,t)}}function KT(e,t){let r=this.cache;r[0]!==t&&(e.uniform1ui(this.addr,t),r[0]=t)}function JT(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(Yt(r,t))return;e.uniform2uiv(this.addr,t),Kt(r,t)}}function QT(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else{if(Yt(r,t))return;e.uniform3uiv(this.addr,t),Kt(r,t)}}function ZT(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(Yt(r,t))return;e.uniform4uiv(this.addr,t),Kt(r,t)}}function eb(e,t,r){let i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(e.uniform1i(this.addr,n),i[0]=n);let a;this.type===e.SAMPLER_2D_SHADOW?(K_.compareFunction=Z1,a=K_):a=My,r.setTexture2D(t||a,n)}function tb(e,t,r){let i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(e.uniform1i(this.addr,n),i[0]=n),r.setTexture3D(t||Ey,n)}function rb(e,t,r){let i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(e.uniform1i(this.addr,n),i[0]=n),r.setTextureCube(t||wy,n)}function ib(e,t,r){let i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(e.uniform1i(this.addr,n),i[0]=n),r.setTexture2DArray(t||Sy,n)}function nb(e){switch(e){case 5126:return zT;case 35664:return BT;case 35665:return VT;case 35666:return HT;case 35674:return GT;case 35675:return WT;case 35676:return XT;case 5124:case 35670:return jT;case 35667:case 35671:return $T;case 35668:case 35672:return qT;case 35669:case 35673:return YT;case 5125:return KT;case 36294:return JT;case 36295:return QT;case 36296:return ZT;case 35678:case 36198:case 36298:case 36306:case 35682:return eb;case 35679:case 36299:case 36307:return tb;case 35680:case 36300:case 36308:case 36293:return rb;case 36289:case 36303:case 36311:case 36292:return ib}}function ab(e,t){e.uniform1fv(this.addr,t)}function sb(e,t){let r=Gs(t,this.size,2);e.uniform2fv(this.addr,r)}function ob(e,t){let r=Gs(t,this.size,3);e.uniform3fv(this.addr,r)}function lb(e,t){let r=Gs(t,this.size,4);e.uniform4fv(this.addr,r)}function ub(e,t){let r=Gs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,r)}function cb(e,t){let r=Gs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,r)}function hb(e,t){let r=Gs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,r)}function db(e,t){e.uniform1iv(this.addr,t)}function pb(e,t){e.uniform2iv(this.addr,t)}function fb(e,t){e.uniform3iv(this.addr,t)}function mb(e,t){e.uniform4iv(this.addr,t)}function gb(e,t){e.uniform1uiv(this.addr,t)}function vb(e,t){e.uniform2uiv(this.addr,t)}function _b(e,t){e.uniform3uiv(this.addr,t)}function yb(e,t){e.uniform4uiv(this.addr,t)}function xb(e,t,r){let i=this.cache,n=t.length,a=Uc(r,n);Yt(i,a)||(e.uniform1iv(this.addr,a),Kt(i,a));for(let s=0;s!==n;++s)r.setTexture2D(t[s]||My,a[s])}function Mb(e,t,r){let i=this.cache,n=t.length,a=Uc(r,n);Yt(i,a)||(e.uniform1iv(this.addr,a),Kt(i,a));for(let s=0;s!==n;++s)r.setTexture3D(t[s]||Ey,a[s])}function Sb(e,t,r){let i=this.cache,n=t.length,a=Uc(r,n);Yt(i,a)||(e.uniform1iv(this.addr,a),Kt(i,a));for(let s=0;s!==n;++s)r.setTextureCube(t[s]||wy,a[s])}function Eb(e,t,r){let i=this.cache,n=t.length,a=Uc(r,n);Yt(i,a)||(e.uniform1iv(this.addr,a),Kt(i,a));for(let s=0;s!==n;++s)r.setTexture2DArray(t[s]||Sy,a[s])}function wb(e){switch(e){case 5126:return ab;case 35664:return sb;case 35665:return ob;case 35666:return lb;case 35674:return ub;case 35675:return cb;case 35676:return hb;case 5124:case 35670:return db;case 35667:case 35671:return pb;case 35668:case 35672:return fb;case 35669:case 35673:return mb;case 5125:return gb;case 36294:return vb;case 36295:return _b;case 36296:return yb;case 35678:case 36198:case 36298:case 36306:case 35682:return xb;case 35679:case 36299:case 36307:return Mb;case 35680:case 36300:case 36308:case 36293:return Sb;case 36289:case 36303:case 36311:case 36292:return Eb}}var Tb=class{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=nb(t.type)}},bb=class{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wb(t.type)}},Ab=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){let i=this.seq;for(let n=0,a=i.length;n!==a;++n){let s=i[n];s.setValue(e,t[s.id],r)}}},kp=/(\w+)(\])?(\[|\.)?/g;function r1(e,t){e.seq.push(t),e.map[t.id]=t}function Cb(e,t,r){let i=e.name,n=i.length;for(kp.lastIndex=0;;){let a=kp.exec(i),s=kp.lastIndex,o=a[1],l=a[2]==="]",u=a[3];if(l&&(o=o|0),u===void 0||u==="["&&s+2===n){r1(r,u===void 0?new Tb(o,e,t):new bb(o,e,t));break}else{let c=r.map[o];c===void 0&&(c=new Ab(o),r1(r,c)),r=c}}}var Cc=class{constructor(e,t){this.seq=[],this.map={};let r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){let n=e.getActiveUniform(t,i),a=e.getUniformLocation(t,n.name);Cb(n,a,this)}}setValue(e,t,r,i){let n=this.map[t];n!==void 0&&n.setValue(e,r,i)}setOptional(e,t,r){let i=t[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,t,r,i){for(let n=0,a=t.length;n!==a;++n){let s=t[n],o=r[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,i)}}static seqWithValue(e,t){let r=[];for(let i=0,n=e.length;i!==n;++i){let a=e[i];a.id in t&&r.push(a)}return r}};function i1(e,t,r){let i=e.createShader(t);return e.shaderSource(i,r),e.compileShader(i),i}var Rb=37297,Pb=0;function Nb(e,t){let r=e.split(`
`),i=[],n=Math.max(t-6,0),a=Math.min(t+6,r.length);for(let s=n;s<a;s++){let o=s+1;i.push(`${o===t?">":" "} ${o}: ${r[s]}`)}return i.join(`
`)}var n1=new ot;function Lb(e){ht._getMatrix(n1,ht.workingColorSpace,e);let t=`mat3( ${n1.elements.map(r=>r.toFixed(4))} )`;switch(ht.getTransfer(e)){case Dc:return[t,"LinearTransferOETF"];case vt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function a1(e,t,r){let i=e.getShaderParameter(t,e.COMPILE_STATUS),n=e.getShaderInfoLog(t).trim();if(i&&n==="")return"";let a=/ERROR: 0:(\d+)/.exec(n);if(a){let s=parseInt(a[1]);return r.toUpperCase()+`

`+n+`

`+Nb(e.getShaderSource(t),s)}else return n}function Ib(e,t){let r=Lb(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${r[1]}( vec4( value.rgb * ${r[0]}, value.a ) );`,"}"].join(`
`)}function Db(e,t){let r;switch(t){case k1:r="Linear";break;case F1:r="Reinhard";break;case z1:r="Cineon";break;case jf:r="ACESFilmic";break;case B1:r="AgX";break;case V1:r="Neutral";break;case nE:r="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),r="Linear"}return"vec3 "+e+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}var oc=new L;function Ub(){ht.getLuminanceCoefficients(oc);let e=oc.x.toFixed(4),t=oc.y.toFixed(4),r=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${r} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ob(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function kb(e){let t=[];for(let r in e){let i=e[r];i!==!1&&t.push("#define "+r+" "+i)}return t.join(`
`)}function Fb(e,t){let r={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let a=e.getActiveAttrib(t,n),s=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),r[s]={type:a.type,location:e.getAttribLocation(t,s),locationSize:o}}return r}function rl(e){return e!==""}function s1(e,t){let r=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function o1(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var zb=/^[ \t]*#include +<([\w\d./]+)>/gm;function kf(e){return e.replace(zb,Vb)}var Bb=new Map;function Vb(e,t){let r=st[t];if(r===void 0){let i=Bb.get(t);if(i!==void 0)r=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return kf(r)}var Hb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function l1(e){return e.replace(Hb,Gb)}function Gb(e,t,r,i){let n="";for(let a=parseInt(t);a<parseInt(r);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function u1(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function Wb(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===D1?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===U1?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Ki&&(t="SHADOWMAP_TYPE_VSM"),t}function Xb(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Ds:case Us:t="ENVMAP_TYPE_CUBE";break;case Ic:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jb(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Us&&(t="ENVMAP_MODE_REFRACTION"),t}function $b(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case O1:t="ENVMAP_BLENDING_MULTIPLY";break;case rE:t="ENVMAP_BLENDING_MIX";break;case iE:t="ENVMAP_BLENDING_ADD";break}return t}function qb(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let r=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,r),112)),texelHeight:i,maxMip:r}}function Yb(e,t,r,i){let n=e.getContext(),a=r.defines,s=r.vertexShader,o=r.fragmentShader,l=Wb(r),u=Xb(r),c=jb(r),h=$b(r),p=qb(r),f=Ob(r),y=kb(a),_=n.createProgram(),v,d,g=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(v=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,y].filter(rl).join(`
`),v.length>0&&(v+=`
`),d=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,y].filter(rl).join(`
`),d.length>0&&(d+=`
`)):(v=[u1(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,y,r.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",r.batching?"#define USE_BATCHING":"",r.batchingColor?"#define USE_BATCHING_COLOR":"",r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.instancingMorph?"#define USE_INSTANCING_MORPH":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+c:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),d=[u1(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,y,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+u:"",r.envMap?"#define "+c:"",r.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.dispersion?"#define USE_DISPERSION":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor||r.batchingColor?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",r.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==zn?"#define TONE_MAPPING":"",r.toneMapping!==zn?st.tonemapping_pars_fragment:"",r.toneMapping!==zn?Db("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,Ib("linearToOutputTexel",r.outputColorSpace),Ub(),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(rl).join(`
`)),s=kf(s),s=s1(s,r),s=o1(s,r),o=kf(o),o=s1(o,r),o=o1(o,r),s=l1(s),o=l1(o),r.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,d=["#define varying in",r.glslVersion===E_?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===E_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let m=g+v+s,x=g+d+o,P=i1(n,n.VERTEX_SHADER,m),T=i1(n,n.FRAGMENT_SHADER,x);n.attachShader(_,P),n.attachShader(_,T),r.index0AttributeName!==void 0?n.bindAttribLocation(_,0,r.index0AttributeName):r.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function b(N){if(e.debug.checkShaderErrors){let k=n.getProgramInfoLog(_).trim(),V=n.getShaderInfoLog(P).trim(),W=n.getShaderInfoLog(T).trim(),j=!0,X=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(j=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(n,_,P,T);else{let ae=a1(n,P,"vertex"),$=a1(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+k+`
`+ae+`
`+$)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(V===""||W==="")&&(X=!1);X&&(N.diagnostics={runnable:j,programLog:k,vertexShader:{log:V,prefix:v},fragmentShader:{log:W,prefix:d}})}n.deleteShader(P),n.deleteShader(T),R=new Cc(n,_),E=Fb(n,_)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let M=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=n.getProgramParameter(_,Rb)),M},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=Pb++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=T,this}var Kb=0,Jb=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(t),n=this._getShaderStage(r),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){let t=this.shaderCache,r=t.get(e);return r===void 0&&(r=new Qb(e),t.set(e,r)),r}},Qb=class{constructor(e){this.id=Kb++,this.code=e,this.usedTimes=0}};function Zb(e,t,r,i,n,a,s){let o=new uy,l=new Jb,u=new Set,c=[],h=n.logarithmicDepthBuffer,p=n.vertexTextures,f=n.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return u.add(E),E===0?"uv":`uv${E}`}function v(E,M,N,k,V){let W=k.fog,j=V.geometry,X=E.isMeshStandardMaterial?k.environment:null,ae=(E.isMeshStandardMaterial?r:t).get(E.envMap||X),$=ae&&ae.mapping===Ic?ae.image.height:null,pe=y[E.type];E.precision!==null&&(f=n.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let Se=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Je=Se!==void 0?Se.length:0,et=0;j.morphAttributes.position!==void 0&&(et=1),j.morphAttributes.normal!==void 0&&(et=2),j.morphAttributes.color!==void 0&&(et=3);let K,he,Ue,Le;if(pe){let pt=bi[pe];K=pt.vertexShader,he=pt.fragmentShader}else K=E.vertexShader,he=E.fragmentShader,l.update(E),Ue=l.getVertexShaderID(E),Le=l.getFragmentShaderID(E);let ve=e.getRenderTarget(),$e=e.state.buffers.depth.getReversed(),rt=V.isInstancedMesh===!0,Ke=V.isBatchedMesh===!0,Q=!!E.map,fe=!!E.matcap,C=!!ae,Ce=!!E.aoMap,ce=!!E.lightMap,Ie=!!E.bumpMap,le=!!E.normalMap,He=!!E.displacementMap,Te=!!E.emissiveMap,be=!!E.metalnessMap,A=!!E.roughnessMap,S=E.anisotropy>0,F=E.clearcoat>0,J=E.dispersion>0,ee=E.iridescence>0,q=E.sheen>0,Fe=E.transmission>0,xe=S&&!!E.anisotropyMap,Me=F&&!!E.clearcoatMap,Xe=F&&!!E.clearcoatNormalMap,de=F&&!!E.clearcoatRoughnessMap,Ae=ee&&!!E.iridescenceMap,it=ee&&!!E.iridescenceThicknessMap,Ye=q&&!!E.sheenColorMap,Pe=q&&!!E.sheenRoughnessMap,Qe=!!E.specularMap,nt=!!E.specularColorMap,Mt=!!E.specularIntensityMap,O=Fe&&!!E.transmissionMap,te=Fe&&!!E.thicknessMap,Y=!!E.gradientMap,Z=!!E.alphaMap,we=E.alphaTest>0,_e=!!E.alphaHash,ct=!!E.extensions,Dt=zn;E.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Dt=e.toneMapping);let Gt={shaderID:pe,shaderType:E.type,shaderName:E.name,vertexShader:K,fragmentShader:he,defines:E.defines,customVertexShaderID:Ue,customFragmentShaderID:Le,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ke,batchingColor:Ke&&V._colorsTexture!==null,instancing:rt,instancingColor:rt&&V.instanceColor!==null,instancingMorph:rt&&V.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ve===null?e.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:zs,alphaToCoverage:!!E.alphaToCoverage,map:Q,matcap:fe,envMap:C,envMapMode:C&&ae.mapping,envMapCubeUVHeight:$,aoMap:Ce,lightMap:ce,bumpMap:Ie,normalMap:le,displacementMap:p&&He,emissiveMap:Te,normalMapObjectSpace:le&&E.normalMapType===lE,normalMapTangentSpace:le&&E.normalMapType===Q1,metalnessMap:be,roughnessMap:A,anisotropy:S,anisotropyMap:xe,clearcoat:F,clearcoatMap:Me,clearcoatNormalMap:Xe,clearcoatRoughnessMap:de,dispersion:J,iridescence:ee,iridescenceMap:Ae,iridescenceThicknessMap:it,sheen:q,sheenColorMap:Ye,sheenRoughnessMap:Pe,specularMap:Qe,specularColorMap:nt,specularIntensityMap:Mt,transmission:Fe,transmissionMap:O,thicknessMap:te,gradientMap:Y,opaque:E.transparent===!1&&E.blending===Cs&&E.alphaToCoverage===!1,alphaMap:Z,alphaTest:we,alphaHash:_e,combine:E.combine,mapUv:Q&&_(E.map.channel),aoMapUv:Ce&&_(E.aoMap.channel),lightMapUv:ce&&_(E.lightMap.channel),bumpMapUv:Ie&&_(E.bumpMap.channel),normalMapUv:le&&_(E.normalMap.channel),displacementMapUv:He&&_(E.displacementMap.channel),emissiveMapUv:Te&&_(E.emissiveMap.channel),metalnessMapUv:be&&_(E.metalnessMap.channel),roughnessMapUv:A&&_(E.roughnessMap.channel),anisotropyMapUv:xe&&_(E.anisotropyMap.channel),clearcoatMapUv:Me&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:it&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(E.sheenRoughnessMap.channel),specularMapUv:Qe&&_(E.specularMap.channel),specularColorMapUv:nt&&_(E.specularColorMap.channel),specularIntensityMapUv:Mt&&_(E.specularIntensityMap.channel),transmissionMapUv:O&&_(E.transmissionMap.channel),thicknessMapUv:te&&_(E.thicknessMap.channel),alphaMapUv:Z&&_(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(le||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!j.attributes.uv&&(Q||Z),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:$e,skinning:V.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Je,morphTextureStride:et,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&N.length>0,shadowMapType:e.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Q&&E.map.isVideoTexture===!0&&ht.getTransfer(E.map.colorSpace)===vt,decodeVideoTextureEmissive:Te&&E.emissiveMap.isVideoTexture===!0&&ht.getTransfer(E.emissiveMap.colorSpace)===vt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ai,flipSided:E.side===br,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ct&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&E.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Gt.vertexUv1s=u.has(1),Gt.vertexUv2s=u.has(2),Gt.vertexUv3s=u.has(3),u.clear(),Gt}function d(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let N in E.defines)M.push(N),M.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(g(M,E),m(M,E),M.push(e.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function g(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function m(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function x(E){let M=y[E.type],N;if(M){let k=bi[M];N=ll.clone(k.uniforms)}else N=E.uniforms;return N}function P(E,M){let N;for(let k=0,V=c.length;k<V;k++){let W=c[k];if(W.cacheKey===M){N=W,++N.usedTimes;break}}return N===void 0&&(N=new Yb(e,M,E,a),c.push(N)),N}function T(E){if(--E.usedTimes===0){let M=c.indexOf(E);c[M]=c[c.length-1],c.pop(),E.destroy()}}function b(E){l.remove(E)}function R(){l.dispose()}return{getParameters:v,getProgramCacheKey:d,getUniforms:x,acquireProgram:P,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:R}}function eA(){let e=new WeakMap;function t(s){return e.has(s)}function r(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function n(s,o,l){e.get(s)[o]=l}function a(){e=new WeakMap}return{has:t,get:r,remove:i,update:n,dispose:a}}function tA(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function c1(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function h1(){let e=[],t=0,r=[],i=[],n=[];function a(){t=0,r.length=0,i.length=0,n.length=0}function s(h,p,f,y,_,v){let d=e[t];return d===void 0?(d={id:h.id,object:h,geometry:p,material:f,groupOrder:y,renderOrder:h.renderOrder,z:_,group:v},e[t]=d):(d.id=h.id,d.object=h,d.geometry=p,d.material=f,d.groupOrder=y,d.renderOrder=h.renderOrder,d.z=_,d.group=v),t++,d}function o(h,p,f,y,_,v){let d=s(h,p,f,y,_,v);f.transmission>0?i.push(d):f.transparent===!0?n.push(d):r.push(d)}function l(h,p,f,y,_,v){let d=s(h,p,f,y,_,v);f.transmission>0?i.unshift(d):f.transparent===!0?n.unshift(d):r.unshift(d)}function u(h,p){r.length>1&&r.sort(h||tA),i.length>1&&i.sort(p||c1),n.length>1&&n.sort(p||c1)}function c(){for(let h=t,p=e.length;h<p;h++){let f=e[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:r,transmissive:i,transparent:n,init:a,push:o,unshift:l,finish:c,sort:u}}function rA(){let e=new WeakMap;function t(i,n){let a=e.get(i),s;return a===void 0?(s=new h1,e.set(i,[s])):n>=a.length?(s=new h1,a.push(s)):s=a[n],s}function r(){e=new WeakMap}return{get:t,dispose:r}}function iA(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let r;switch(t.type){case"DirectionalLight":r={direction:new L,color:new We};break;case"SpotLight":r={position:new L,direction:new L,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new L,color:new We,distance:0,decay:0};break;case"HemisphereLight":r={direction:new L,skyColor:new We,groundColor:new We};break;case"RectAreaLight":r={color:new We,position:new L,halfWidth:new L,halfHeight:new L};break}return e[t.id]=r,r}}}function nA(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let r;switch(t.type){case"DirectionalLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=r,r}}}var aA=0;function sA(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function oA(e){let t=new iA,r=nA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new L);let n=new L,a=new bt,s=new bt;function o(u){let c=0,h=0,p=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,y=0,_=0,v=0,d=0,g=0,m=0,x=0,P=0,T=0,b=0;u.sort(sA);for(let E=0,M=u.length;E<M;E++){let N=u[E],k=N.color,V=N.intensity,W=N.distance,j=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)c+=k.r*V,h+=k.g*V,p+=k.b*V;else if(N.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(N.sh.coefficients[X],V);b++}else if(N.isDirectionalLight){let X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ae=N.shadow,$=r.get(N);$.shadowIntensity=ae.intensity,$.shadowBias=ae.bias,$.shadowNormalBias=ae.normalBias,$.shadowRadius=ae.radius,$.shadowMapSize=ae.mapSize,i.directionalShadow[f]=$,i.directionalShadowMap[f]=j,i.directionalShadowMatrix[f]=N.shadow.matrix,g++}i.directional[f]=X,f++}else if(N.isSpotLight){let X=t.get(N);X.position.setFromMatrixPosition(N.matrixWorld),X.color.copy(k).multiplyScalar(V),X.distance=W,X.coneCos=Math.cos(N.angle),X.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),X.decay=N.decay,i.spot[_]=X;let ae=N.shadow;if(N.map&&(i.spotLightMap[P]=N.map,P++,ae.updateMatrices(N),N.castShadow&&T++),i.spotLightMatrix[_]=ae.matrix,N.castShadow){let $=r.get(N);$.shadowIntensity=ae.intensity,$.shadowBias=ae.bias,$.shadowNormalBias=ae.normalBias,$.shadowRadius=ae.radius,$.shadowMapSize=ae.mapSize,i.spotShadow[_]=$,i.spotShadowMap[_]=j,x++}_++}else if(N.isRectAreaLight){let X=t.get(N);X.color.copy(k).multiplyScalar(V),X.halfWidth.set(N.width*.5,0,0),X.halfHeight.set(0,N.height*.5,0),i.rectArea[v]=X,v++}else if(N.isPointLight){let X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),X.distance=N.distance,X.decay=N.decay,N.castShadow){let ae=N.shadow,$=r.get(N);$.shadowIntensity=ae.intensity,$.shadowBias=ae.bias,$.shadowNormalBias=ae.normalBias,$.shadowRadius=ae.radius,$.shadowMapSize=ae.mapSize,$.shadowCameraNear=ae.camera.near,$.shadowCameraFar=ae.camera.far,i.pointShadow[y]=$,i.pointShadowMap[y]=j,i.pointShadowMatrix[y]=N.shadow.matrix,m++}i.point[y]=X,y++}else if(N.isHemisphereLight){let X=t.get(N);X.skyColor.copy(N.color).multiplyScalar(V),X.groundColor.copy(N.groundColor).multiplyScalar(V),i.hemi[d]=X,d++}}v>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=p;let R=i.hash;(R.directionalLength!==f||R.pointLength!==y||R.spotLength!==_||R.rectAreaLength!==v||R.hemiLength!==d||R.numDirectionalShadows!==g||R.numPointShadows!==m||R.numSpotShadows!==x||R.numSpotMaps!==P||R.numLightProbes!==b)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=v,i.point.length=y,i.hemi.length=d,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=m,i.pointShadowMap.length=m,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=m,i.spotLightMatrix.length=x+P-T,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=b,R.directionalLength=f,R.pointLength=y,R.spotLength=_,R.rectAreaLength=v,R.hemiLength=d,R.numDirectionalShadows=g,R.numPointShadows=m,R.numSpotShadows=x,R.numSpotMaps=P,R.numLightProbes=b,i.version=aA++)}function l(u,c){let h=0,p=0,f=0,y=0,_=0,v=c.matrixWorldInverse;for(let d=0,g=u.length;d<g;d++){let m=u[d];if(m.isDirectionalLight){let x=i.directional[h];x.direction.setFromMatrixPosition(m.matrixWorld),n.setFromMatrixPosition(m.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(v),h++}else if(m.isSpotLight){let x=i.spot[f];x.position.setFromMatrixPosition(m.matrixWorld),x.position.applyMatrix4(v),x.direction.setFromMatrixPosition(m.matrixWorld),n.setFromMatrixPosition(m.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(v),f++}else if(m.isRectAreaLight){let x=i.rectArea[y];x.position.setFromMatrixPosition(m.matrixWorld),x.position.applyMatrix4(v),s.identity(),a.copy(m.matrixWorld),a.premultiply(v),s.extractRotation(a),x.halfWidth.set(m.width*.5,0,0),x.halfHeight.set(0,m.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),y++}else if(m.isPointLight){let x=i.point[p];x.position.setFromMatrixPosition(m.matrixWorld),x.position.applyMatrix4(v),p++}else if(m.isHemisphereLight){let x=i.hemi[_];x.direction.setFromMatrixPosition(m.matrixWorld),x.direction.transformDirection(v),_++}}}return{setup:o,setupView:l,state:i}}function d1(e){let t=new oA(e),r=[],i=[];function n(c){u.camera=c,r.length=0,i.length=0}function a(c){r.push(c)}function s(c){i.push(c)}function o(){t.setup(r)}function l(c){t.setupView(r,c)}let u={lightsArray:r,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:u,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function lA(e){let t=new WeakMap;function r(n,a=0){let s=t.get(n),o;return s===void 0?(o=new d1(e),t.set(n,[o])):a>=s.length?(o=new d1(e),s.push(o)):o=s[a],o}function i(){t=new WeakMap}return{get:r,dispose:i}}var uA=class extends Sa{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=sE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},cA=class extends Sa{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},hA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dA=`uniform sampler2D shadow_pass;
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
}`;function pA(e,t,r){let i=new em,n=new ne,a=new ne,s=new Tt,o=new uA({depthPacking:oE}),l=new cA,u={},c=r.maxTextureSize,h={[Bn]:br,[br]:Bn,[Ai]:Ai},p=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:hA,fragmentShader:dA}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let y=new ir;y.setAttribute("position",new vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ve(y,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=D1;let d=this.type;this.render=function(T,b,R){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||T.length===0)return;let E=e.getRenderTarget(),M=e.getActiveCubeFace(),N=e.getActiveMipmapLevel(),k=e.state;k.setBlending(Zi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let V=d!==Ki&&this.type===Ki,W=d===Ki&&this.type!==Ki;for(let j=0,X=T.length;j<X;j++){let ae=T[j],$=ae.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;n.copy($.mapSize);let pe=$.getFrameExtents();if(n.multiply(pe),a.copy($.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(a.x=Math.floor(c/pe.x),n.x=a.x*pe.x,$.mapSize.x=a.x),n.y>c&&(a.y=Math.floor(c/pe.y),n.y=a.y*pe.y,$.mapSize.y=a.y)),$.map===null||V===!0||W===!0){let Je=this.type!==Ki?{minFilter:jr,magFilter:jr}:{};$.map!==null&&$.map.dispose(),$.map=new _i(n.x,n.y,Je),$.map.texture.name=ae.name+".shadowMap",$.camera.updateProjectionMatrix()}e.setRenderTarget($.map),e.clear();let Se=$.getViewportCount();for(let Je=0;Je<Se;Je++){let et=$.getViewport(Je);s.set(a.x*et.x,a.y*et.y,a.x*et.z,a.y*et.w),k.viewport(s),$.updateMatrices(ae,Je),i=$.getFrustum(),x(b,R,$.camera,ae,this.type)}$.isPointLightShadow!==!0&&this.type===Ki&&g($,R),$.needsUpdate=!1}d=this.type,v.needsUpdate=!1,e.setRenderTarget(E,M,N)};function g(T,b){let R=t.update(_);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new _i(n.x,n.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(b,null,R,p,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(b,null,R,f,_,null)}function m(T,b,R,E){let M=null,N=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)M=N;else if(M=R.isPointLight===!0?l:o,e.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let k=M.uuid,V=b.uuid,W=u[k];W===void 0&&(W={},u[k]=W);let j=W[V];j===void 0&&(j=M.clone(),W[V]=j,b.addEventListener("dispose",P)),M=j}if(M.visible=b.visible,M.wireframe=b.wireframe,E===Ki?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:h[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let k=e.properties.get(M);k.light=R}return M}function x(T,b,R,E,M){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Ki)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);let k=t.update(T),V=T.material;if(Array.isArray(V)){let W=k.groups;for(let j=0,X=W.length;j<X;j++){let ae=W[j],$=V[ae.materialIndex];if($&&$.visible){let pe=m(T,$,E,M);T.onBeforeShadow(e,T,b,R,k,pe,ae),e.renderBufferDirect(R,null,k,pe,T,ae),T.onAfterShadow(e,T,b,R,k,pe,ae)}}}else if(V.visible){let W=m(T,V,E,M);T.onBeforeShadow(e,T,b,R,k,W,null),e.renderBufferDirect(R,null,k,W,T,null),T.onAfterShadow(e,T,b,R,k,W,null)}}let N=T.children;for(let k=0,V=N.length;k<V;k++)x(N[k],b,R,E,M)}function P(T){T.target.removeEventListener("dispose",P);for(let b in u){let R=u[b],E=T.target.uuid;E in R&&(R[E].dispose(),delete R[E])}}}var fA={[Yp]:Kp,[Jp]:ef,[Qp]:tf,[Is]:Zp,[Kp]:Yp,[ef]:Jp,[tf]:Qp,[Zp]:Is};function mA(e,t){function r(){let O=!1,te=new Tt,Y=null,Z=new Tt(0,0,0,0);return{setMask:function(we){Y!==we&&!O&&(e.colorMask(we,we,we,we),Y=we)},setLocked:function(we){O=we},setClear:function(we,_e,ct,Dt,Gt){Gt===!0&&(we*=Dt,_e*=Dt,ct*=Dt),te.set(we,_e,ct,Dt),Z.equals(te)===!1&&(e.clearColor(we,_e,ct,Dt),Z.copy(te))},reset:function(){O=!1,Y=null,Z.set(-1,0,0,0)}}}function i(){let O=!1,te=!1,Y=null,Z=null,we=null;return{setReversed:function(_e){if(te!==_e){let ct=t.get("EXT_clip_control");te?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT);let Dt=we;we=null,this.setClear(Dt)}te=_e},getReversed:function(){return te},setTest:function(_e){_e?ve(e.DEPTH_TEST):$e(e.DEPTH_TEST)},setMask:function(_e){Y!==_e&&!O&&(e.depthMask(_e),Y=_e)},setFunc:function(_e){if(te&&(_e=fA[_e]),Z!==_e){switch(_e){case Yp:e.depthFunc(e.NEVER);break;case Kp:e.depthFunc(e.ALWAYS);break;case Jp:e.depthFunc(e.LESS);break;case Is:e.depthFunc(e.LEQUAL);break;case Qp:e.depthFunc(e.EQUAL);break;case Zp:e.depthFunc(e.GEQUAL);break;case ef:e.depthFunc(e.GREATER);break;case tf:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Z=_e}},setLocked:function(_e){O=_e},setClear:function(_e){we!==_e&&(te&&(_e=1-_e),e.clearDepth(_e),we=_e)},reset:function(){O=!1,Y=null,Z=null,we=null,te=!1}}}function n(){let O=!1,te=null,Y=null,Z=null,we=null,_e=null,ct=null,Dt=null,Gt=null;return{setTest:function(pt){O||(pt?ve(e.STENCIL_TEST):$e(e.STENCIL_TEST))},setMask:function(pt){te!==pt&&!O&&(e.stencilMask(pt),te=pt)},setFunc:function(pt,$r,H){(Y!==pt||Z!==$r||we!==H)&&(e.stencilFunc(pt,$r,H),Y=pt,Z=$r,we=H)},setOp:function(pt,$r,H){(_e!==pt||ct!==$r||Dt!==H)&&(e.stencilOp(pt,$r,H),_e=pt,ct=$r,Dt=H)},setLocked:function(pt){O=pt},setClear:function(pt){Gt!==pt&&(e.clearStencil(pt),Gt=pt)},reset:function(){O=!1,te=null,Y=null,Z=null,we=null,_e=null,ct=null,Dt=null,Gt=null}}}let a=new r,s=new i,o=new n,l=new WeakMap,u=new WeakMap,c={},h={},p=new WeakMap,f=[],y=null,_=!1,v=null,d=null,g=null,m=null,x=null,P=null,T=null,b=new We(0,0,0),R=0,E=!1,M=null,N=null,k=null,V=null,W=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ae=0,$=e.getParameter(e.VERSION);$.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec($)[1]),X=ae>=1):$.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=ae>=2);let pe=null,Se={},Je=e.getParameter(e.SCISSOR_BOX),et=e.getParameter(e.VIEWPORT),K=new Tt().fromArray(Je),he=new Tt().fromArray(et);function Ue(O,te,Y,Z){let we=new Uint8Array(4),_e=e.createTexture();e.bindTexture(O,_e),e.texParameteri(O,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(O,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ct=0;ct<Y;ct++)O===e.TEXTURE_3D||O===e.TEXTURE_2D_ARRAY?e.texImage3D(te,0,e.RGBA,1,1,Z,0,e.RGBA,e.UNSIGNED_BYTE,we):e.texImage2D(te+ct,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,we);return _e}let Le={};Le[e.TEXTURE_2D]=Ue(e.TEXTURE_2D,e.TEXTURE_2D,1),Le[e.TEXTURE_CUBE_MAP]=Ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[e.TEXTURE_2D_ARRAY]=Ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Le[e.TEXTURE_3D]=Ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ve(e.DEPTH_TEST),s.setFunc(Is),Ie(!1),le(g_),ve(e.CULL_FACE),Ce(Zi);function ve(O){c[O]!==!0&&(e.enable(O),c[O]=!0)}function $e(O){c[O]!==!1&&(e.disable(O),c[O]=!1)}function rt(O,te){return h[O]!==te?(e.bindFramebuffer(O,te),h[O]=te,O===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=te),O===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=te),!0):!1}function Ke(O,te){let Y=f,Z=!1;if(O){Y=p.get(te),Y===void 0&&(Y=[],p.set(te,Y));let we=O.textures;if(Y.length!==we.length||Y[0]!==e.COLOR_ATTACHMENT0){for(let _e=0,ct=we.length;_e<ct;_e++)Y[_e]=e.COLOR_ATTACHMENT0+_e;Y.length=we.length,Z=!0}}else Y[0]!==e.BACK&&(Y[0]=e.BACK,Z=!0);Z&&e.drawBuffers(Y)}function Q(O){return y!==O?(e.useProgram(O),y=O,!0):!1}let fe={[ma]:e.FUNC_ADD,[zS]:e.FUNC_SUBTRACT,[BS]:e.FUNC_REVERSE_SUBTRACT};fe[VS]=e.MIN,fe[HS]=e.MAX;let C={[GS]:e.ZERO,[WS]:e.ONE,[XS]:e.SRC_COLOR,[$p]:e.SRC_ALPHA,[JS]:e.SRC_ALPHA_SATURATE,[YS]:e.DST_COLOR,[$S]:e.DST_ALPHA,[jS]:e.ONE_MINUS_SRC_COLOR,[qp]:e.ONE_MINUS_SRC_ALPHA,[KS]:e.ONE_MINUS_DST_COLOR,[qS]:e.ONE_MINUS_DST_ALPHA,[QS]:e.CONSTANT_COLOR,[ZS]:e.ONE_MINUS_CONSTANT_COLOR,[eE]:e.CONSTANT_ALPHA,[tE]:e.ONE_MINUS_CONSTANT_ALPHA};function Ce(O,te,Y,Z,we,_e,ct,Dt,Gt,pt){if(O===Zi){_===!0&&($e(e.BLEND),_=!1);return}if(_===!1&&(ve(e.BLEND),_=!0),O!==FS){if(O!==v||pt!==E){if((d!==ma||x!==ma)&&(e.blendEquation(e.FUNC_ADD),d=ma,x=ma),pt)switch(O){case Cs:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Rs:e.blendFunc(e.ONE,e.ONE);break;case v_:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case __:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Cs:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Rs:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case v_:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case __:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}g=null,m=null,P=null,T=null,b.set(0,0,0),R=0,v=O,E=pt}return}we=we||te,_e=_e||Y,ct=ct||Z,(te!==d||we!==x)&&(e.blendEquationSeparate(fe[te],fe[we]),d=te,x=we),(Y!==g||Z!==m||_e!==P||ct!==T)&&(e.blendFuncSeparate(C[Y],C[Z],C[_e],C[ct]),g=Y,m=Z,P=_e,T=ct),(Dt.equals(b)===!1||Gt!==R)&&(e.blendColor(Dt.r,Dt.g,Dt.b,Gt),b.copy(Dt),R=Gt),v=O,E=!1}function ce(O,te){O.side===Ai?$e(e.CULL_FACE):ve(e.CULL_FACE);let Y=O.side===br;te&&(Y=!Y),Ie(Y),O.blending===Cs&&O.transparent===!1?Ce(Zi):Ce(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),a.setMask(O.colorWrite);let Z=O.stencilWrite;o.setTest(Z),Z&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Te(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ve(e.SAMPLE_ALPHA_TO_COVERAGE):$e(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(O){M!==O&&(O?e.frontFace(e.CW):e.frontFace(e.CCW),M=O)}function le(O){O!==OS?(ve(e.CULL_FACE),O!==N&&(O===g_?e.cullFace(e.BACK):O===kS?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):$e(e.CULL_FACE),N=O}function He(O){O!==k&&(X&&e.lineWidth(O),k=O)}function Te(O,te,Y){O?(ve(e.POLYGON_OFFSET_FILL),(V!==te||W!==Y)&&(e.polygonOffset(te,Y),V=te,W=Y)):$e(e.POLYGON_OFFSET_FILL)}function be(O){O?ve(e.SCISSOR_TEST):$e(e.SCISSOR_TEST)}function A(O){O===void 0&&(O=e.TEXTURE0+j-1),pe!==O&&(e.activeTexture(O),pe=O)}function S(O,te,Y){Y===void 0&&(pe===null?Y=e.TEXTURE0+j-1:Y=pe);let Z=Se[Y];Z===void 0&&(Z={type:void 0,texture:void 0},Se[Y]=Z),(Z.type!==O||Z.texture!==te)&&(pe!==Y&&(e.activeTexture(Y),pe=Y),e.bindTexture(O,te||Le[O]),Z.type=O,Z.texture=te)}function F(){let O=Se[pe];O!==void 0&&O.type!==void 0&&(e.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function J(){try{e.compressedTexImage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{e.compressedTexImage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{e.texSubImage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Fe(){try{e.texSubImage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Xe(){try{e.texStorage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{e.texStorage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{e.texImage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{e.texImage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ye(O){K.equals(O)===!1&&(e.scissor(O.x,O.y,O.z,O.w),K.copy(O))}function Pe(O){he.equals(O)===!1&&(e.viewport(O.x,O.y,O.z,O.w),he.copy(O))}function Qe(O,te){let Y=u.get(te);Y===void 0&&(Y=new WeakMap,u.set(te,Y));let Z=Y.get(O);Z===void 0&&(Z=e.getUniformBlockIndex(te,O.name),Y.set(O,Z))}function nt(O,te){let Y=u.get(te).get(O);l.get(te)!==Y&&(e.uniformBlockBinding(te,Y,O.__bindingPointIndex),l.set(te,Y))}function Mt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},pe=null,Se={},h={},p=new WeakMap,f=[],y=null,_=!1,v=null,d=null,g=null,m=null,x=null,P=null,T=null,b=new We(0,0,0),R=0,E=!1,M=null,N=null,k=null,V=null,W=null,K.set(0,0,e.canvas.width,e.canvas.height),he.set(0,0,e.canvas.width,e.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:ve,disable:$e,bindFramebuffer:rt,drawBuffers:Ke,useProgram:Q,setBlending:Ce,setMaterial:ce,setFlipSided:Ie,setCullFace:le,setLineWidth:He,setPolygonOffset:Te,setScissorTest:be,activeTexture:A,bindTexture:S,unbindTexture:F,compressedTexImage2D:J,compressedTexImage3D:ee,texImage2D:Ae,texImage3D:it,updateUBOMapping:Qe,uniformBlockBinding:nt,texStorage2D:Xe,texStorage3D:de,texSubImage2D:q,texSubImage3D:Fe,compressedTexSubImage2D:xe,compressedTexSubImage3D:Me,scissor:Ye,viewport:Pe,reset:Mt}}function p1(e,t,r,i){let n=gA(i);switch(r){case j1:return e*t;case q1:return e*t;case Y1:return e*t*2;case Kf:return e*t/n.components*n.byteLength;case Jf:return e*t/n.components*n.byteLength;case K1:return e*t*2/n.components*n.byteLength;case Qf:return e*t*2/n.components*n.byteLength;case $1:return e*t*3/n.components*n.byteLength;case vi:return e*t*4/n.components*n.byteLength;case Zf:return e*t*4/n.components*n.byteLength;case Mc:case Sc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ec:case wc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case of:case uf:return Math.max(e,16)*Math.max(t,8)/4;case sf:case lf:return Math.max(e,8)*Math.max(t,8)/2;case cf:case hf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case df:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ff:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case mf:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case gf:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case vf:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case _f:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case yf:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case xf:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Mf:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Sf:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ef:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case wf:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Tf:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case bf:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Tc:case Af:case Cf:return Math.ceil(e/4)*Math.ceil(t/4)*16;case J1:case Rf:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Pf:case Nf:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${r} format.`)}function gA(e){switch(e){case an:case G1:return{byteLength:1,components:1};case ol:case W1:case en:return{byteLength:2,components:1};case qf:case Yf:return{byteLength:2,components:4};case ya:case $f:case Pi:return{byteLength:4,components:1};case X1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function vA(e,t,r,i,n,a,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ne,c=new WeakMap,h,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,S){return f?new OffscreenCanvas(A,S):Lc("canvas")}function _(A,S,F){let J=1,ee=be(A);if((ee.width>F||ee.height>F)&&(J=F/Math.max(ee.width,ee.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let q=Math.floor(J*ee.width),Fe=Math.floor(J*ee.height);h===void 0&&(h=y(q,Fe));let xe=S?y(q,Fe):h;return xe.width=q,xe.height=Fe,xe.getContext("2d").drawImage(A,0,0,q,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+q+"x"+Fe+")."),xe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function v(A){return A.generateMipmaps}function d(A){e.generateMipmap(A)}function g(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function m(A,S,F,J,ee=!1){if(A!==null){if(e[A]!==void 0)return e[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=S;if(S===e.RED&&(F===e.FLOAT&&(q=e.R32F),F===e.HALF_FLOAT&&(q=e.R16F),F===e.UNSIGNED_BYTE&&(q=e.R8)),S===e.RED_INTEGER&&(F===e.UNSIGNED_BYTE&&(q=e.R8UI),F===e.UNSIGNED_SHORT&&(q=e.R16UI),F===e.UNSIGNED_INT&&(q=e.R32UI),F===e.BYTE&&(q=e.R8I),F===e.SHORT&&(q=e.R16I),F===e.INT&&(q=e.R32I)),S===e.RG&&(F===e.FLOAT&&(q=e.RG32F),F===e.HALF_FLOAT&&(q=e.RG16F),F===e.UNSIGNED_BYTE&&(q=e.RG8)),S===e.RG_INTEGER&&(F===e.UNSIGNED_BYTE&&(q=e.RG8UI),F===e.UNSIGNED_SHORT&&(q=e.RG16UI),F===e.UNSIGNED_INT&&(q=e.RG32UI),F===e.BYTE&&(q=e.RG8I),F===e.SHORT&&(q=e.RG16I),F===e.INT&&(q=e.RG32I)),S===e.RGB_INTEGER&&(F===e.UNSIGNED_BYTE&&(q=e.RGB8UI),F===e.UNSIGNED_SHORT&&(q=e.RGB16UI),F===e.UNSIGNED_INT&&(q=e.RGB32UI),F===e.BYTE&&(q=e.RGB8I),F===e.SHORT&&(q=e.RGB16I),F===e.INT&&(q=e.RGB32I)),S===e.RGBA_INTEGER&&(F===e.UNSIGNED_BYTE&&(q=e.RGBA8UI),F===e.UNSIGNED_SHORT&&(q=e.RGBA16UI),F===e.UNSIGNED_INT&&(q=e.RGBA32UI),F===e.BYTE&&(q=e.RGBA8I),F===e.SHORT&&(q=e.RGBA16I),F===e.INT&&(q=e.RGBA32I)),S===e.RGB&&F===e.UNSIGNED_INT_5_9_9_9_REV&&(q=e.RGB9_E5),S===e.RGBA){let Fe=ee?Dc:ht.getTransfer(J);F===e.FLOAT&&(q=e.RGBA32F),F===e.HALF_FLOAT&&(q=e.RGBA16F),F===e.UNSIGNED_BYTE&&(q=Fe===vt?e.SRGB8_ALPHA8:e.RGBA8),F===e.UNSIGNED_SHORT_4_4_4_4&&(q=e.RGBA4),F===e.UNSIGNED_SHORT_5_5_5_1&&(q=e.RGB5_A1)}return(q===e.R16F||q===e.R32F||q===e.RG16F||q===e.RG32F||q===e.RGBA16F||q===e.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(A,S){let F;return A?S===null||S===ya||S===Os?F=e.DEPTH24_STENCIL8:S===Pi?F=e.DEPTH32F_STENCIL8:S===ol&&(F=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ya||S===Os?F=e.DEPTH_COMPONENT24:S===Pi?F=e.DEPTH_COMPONENT32F:S===ol&&(F=e.DEPTH_COMPONENT16),F}function P(A,S){return v(A)===!0||A.isFramebufferTexture&&A.minFilter!==jr&&A.minFilter!==Ri?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function T(A){let S=A.target;S.removeEventListener("dispose",T),R(S),S.isVideoTexture&&c.delete(S)}function b(A){let S=A.target;S.removeEventListener("dispose",b),M(S)}function R(A){let S=i.get(A);if(S.__webglInit===void 0)return;let F=A.source,J=p.get(F);if(J){let ee=J[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&E(A),Object.keys(J).length===0&&p.delete(F)}i.remove(A)}function E(A){let S=i.get(A);e.deleteTexture(S.__webglTexture);let F=A.source,J=p.get(F);delete J[S.__cacheKey],s.memory.textures--}function M(A){let S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let ee=0;ee<S.__webglFramebuffer[J].length;ee++)e.deleteFramebuffer(S.__webglFramebuffer[J][ee]);else e.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)e.deleteFramebuffer(S.__webglFramebuffer[J]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let F=A.textures;for(let J=0,ee=F.length;J<ee;J++){let q=i.get(F[J]);q.__webglTexture&&(e.deleteTexture(q.__webglTexture),s.memory.textures--),i.remove(F[J])}i.remove(A)}let N=0;function k(){N=0}function V(){let A=N;return A>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+n.maxTextures),N+=1,A}function W(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function j(A,S){let F=i.get(A);if(A.isVideoTexture&&He(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){let J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(F,A,S);return}}r.bindTexture(e.TEXTURE_2D,F.__webglTexture,e.TEXTURE0+S)}function X(A,S){let F=i.get(A);if(A.version>0&&F.__version!==A.version){he(F,A,S);return}r.bindTexture(e.TEXTURE_2D_ARRAY,F.__webglTexture,e.TEXTURE0+S)}function ae(A,S){let F=i.get(A);if(A.version>0&&F.__version!==A.version){he(F,A,S);return}r.bindTexture(e.TEXTURE_3D,F.__webglTexture,e.TEXTURE0+S)}function $(A,S){let F=i.get(A);if(A.version>0&&F.__version!==A.version){Ue(F,A,S);return}r.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+S)}let pe={[Rc]:e.REPEAT,[va]:e.CLAMP_TO_EDGE,[af]:e.MIRRORED_REPEAT},Se={[jr]:e.NEAREST,[aE]:e.NEAREST_MIPMAP_NEAREST,[Vu]:e.NEAREST_MIPMAP_LINEAR,[Ri]:e.LINEAR,[lp]:e.LINEAR_MIPMAP_NEAREST,[_a]:e.LINEAR_MIPMAP_LINEAR},Je={[uE]:e.NEVER,[mE]:e.ALWAYS,[cE]:e.LESS,[Z1]:e.LEQUAL,[hE]:e.EQUAL,[fE]:e.GEQUAL,[dE]:e.GREATER,[pE]:e.NOTEQUAL};function et(A,S){if(S.type===Pi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ri||S.magFilter===lp||S.magFilter===Vu||S.magFilter===_a||S.minFilter===Ri||S.minFilter===lp||S.minFilter===Vu||S.minFilter===_a)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,pe[S.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,pe[S.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,pe[S.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,Se[S.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,Se[S.minFilter]),S.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,Je[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===jr||S.minFilter!==Vu&&S.minFilter!==_a||S.type===Pi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function K(A,S){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",T));let J=S.source,ee=p.get(J);ee===void 0&&(ee={},p.set(J,ee));let q=W(S);if(q!==A.__cacheKey){ee[q]===void 0&&(ee[q]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,F=!0),ee[q].usedTimes++;let Fe=ee[A.__cacheKey];Fe!==void 0&&(ee[A.__cacheKey].usedTimes--,Fe.usedTimes===0&&E(S)),A.__cacheKey=q,A.__webglTexture=ee[q].texture}return F}function he(A,S,F){let J=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=e.TEXTURE_3D);let ee=K(A,S),q=S.source;r.bindTexture(J,A.__webglTexture,e.TEXTURE0+F);let Fe=i.get(q);if(q.version!==Fe.__version||ee===!0){r.activeTexture(e.TEXTURE0+F);let xe=ht.getPrimaries(ht.workingColorSpace),Me=S.colorSpace===Fn?null:ht.getPrimaries(S.colorSpace),Xe=S.colorSpace===Fn||xe===Me?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let de=_(S.image,!1,n.maxTextureSize);de=Te(S,de);let Ae=a.convert(S.format,S.colorSpace),it=a.convert(S.type),Ye=m(S.internalFormat,Ae,it,S.colorSpace,S.isVideoTexture);et(J,S);let Pe,Qe=S.mipmaps,nt=S.isVideoTexture!==!0,Mt=Fe.__version===void 0||ee===!0,O=q.dataReady,te=P(S,de);if(S.isDepthTexture)Ye=x(S.format===ks,S.type),Mt&&(nt?r.texStorage2D(e.TEXTURE_2D,1,Ye,de.width,de.height):r.texImage2D(e.TEXTURE_2D,0,Ye,de.width,de.height,0,Ae,it,null));else if(S.isDataTexture)if(Qe.length>0){nt&&Mt&&r.texStorage2D(e.TEXTURE_2D,te,Ye,Qe[0].width,Qe[0].height);for(let Y=0,Z=Qe.length;Y<Z;Y++)Pe=Qe[Y],nt?O&&r.texSubImage2D(e.TEXTURE_2D,Y,0,0,Pe.width,Pe.height,Ae,it,Pe.data):r.texImage2D(e.TEXTURE_2D,Y,Ye,Pe.width,Pe.height,0,Ae,it,Pe.data);S.generateMipmaps=!1}else nt?(Mt&&r.texStorage2D(e.TEXTURE_2D,te,Ye,de.width,de.height),O&&r.texSubImage2D(e.TEXTURE_2D,0,0,0,de.width,de.height,Ae,it,de.data)):r.texImage2D(e.TEXTURE_2D,0,Ye,de.width,de.height,0,Ae,it,de.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){nt&&Mt&&r.texStorage3D(e.TEXTURE_2D_ARRAY,te,Ye,Qe[0].width,Qe[0].height,de.depth);for(let Y=0,Z=Qe.length;Y<Z;Y++)if(Pe=Qe[Y],S.format!==vi)if(Ae!==null)if(nt){if(O)if(S.layerUpdates.size>0){let we=p1(Pe.width,Pe.height,S.format,S.type);for(let _e of S.layerUpdates){let ct=Pe.data.subarray(_e*we/Pe.data.BYTES_PER_ELEMENT,(_e+1)*we/Pe.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Y,0,0,_e,Pe.width,Pe.height,1,Ae,ct)}S.clearLayerUpdates()}else r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Y,0,0,0,Pe.width,Pe.height,de.depth,Ae,Pe.data)}else r.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Y,Ye,Pe.width,Pe.height,de.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?O&&r.texSubImage3D(e.TEXTURE_2D_ARRAY,Y,0,0,0,Pe.width,Pe.height,de.depth,Ae,it,Pe.data):r.texImage3D(e.TEXTURE_2D_ARRAY,Y,Ye,Pe.width,Pe.height,de.depth,0,Ae,it,Pe.data)}else{nt&&Mt&&r.texStorage2D(e.TEXTURE_2D,te,Ye,Qe[0].width,Qe[0].height);for(let Y=0,Z=Qe.length;Y<Z;Y++)Pe=Qe[Y],S.format!==vi?Ae!==null?nt?O&&r.compressedTexSubImage2D(e.TEXTURE_2D,Y,0,0,Pe.width,Pe.height,Ae,Pe.data):r.compressedTexImage2D(e.TEXTURE_2D,Y,Ye,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?O&&r.texSubImage2D(e.TEXTURE_2D,Y,0,0,Pe.width,Pe.height,Ae,it,Pe.data):r.texImage2D(e.TEXTURE_2D,Y,Ye,Pe.width,Pe.height,0,Ae,it,Pe.data)}else if(S.isDataArrayTexture)if(nt){if(Mt&&r.texStorage3D(e.TEXTURE_2D_ARRAY,te,Ye,de.width,de.height,de.depth),O)if(S.layerUpdates.size>0){let Y=p1(de.width,de.height,S.format,S.type);for(let Z of S.layerUpdates){let we=de.data.subarray(Z*Y/de.data.BYTES_PER_ELEMENT,(Z+1)*Y/de.data.BYTES_PER_ELEMENT);r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Z,de.width,de.height,1,Ae,it,we)}S.clearLayerUpdates()}else r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ae,it,de.data)}else r.texImage3D(e.TEXTURE_2D_ARRAY,0,Ye,de.width,de.height,de.depth,0,Ae,it,de.data);else if(S.isData3DTexture)nt?(Mt&&r.texStorage3D(e.TEXTURE_3D,te,Ye,de.width,de.height,de.depth),O&&r.texSubImage3D(e.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ae,it,de.data)):r.texImage3D(e.TEXTURE_3D,0,Ye,de.width,de.height,de.depth,0,Ae,it,de.data);else if(S.isFramebufferTexture){if(Mt)if(nt)r.texStorage2D(e.TEXTURE_2D,te,Ye,de.width,de.height);else{let Y=de.width,Z=de.height;for(let we=0;we<te;we++)r.texImage2D(e.TEXTURE_2D,we,Ye,Y,Z,0,Ae,it,null),Y>>=1,Z>>=1}}else if(Qe.length>0){if(nt&&Mt){let Y=be(Qe[0]);r.texStorage2D(e.TEXTURE_2D,te,Ye,Y.width,Y.height)}for(let Y=0,Z=Qe.length;Y<Z;Y++)Pe=Qe[Y],nt?O&&r.texSubImage2D(e.TEXTURE_2D,Y,0,0,Ae,it,Pe):r.texImage2D(e.TEXTURE_2D,Y,Ye,Ae,it,Pe);S.generateMipmaps=!1}else if(nt){if(Mt){let Y=be(de);r.texStorage2D(e.TEXTURE_2D,te,Ye,Y.width,Y.height)}O&&r.texSubImage2D(e.TEXTURE_2D,0,0,0,Ae,it,de)}else r.texImage2D(e.TEXTURE_2D,0,Ye,Ae,it,de);v(S)&&d(J),Fe.__version=q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Ue(A,S,F){if(S.image.length!==6)return;let J=K(A,S),ee=S.source;r.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+F);let q=i.get(ee);if(ee.version!==q.__version||J===!0){r.activeTexture(e.TEXTURE0+F);let Fe=ht.getPrimaries(ht.workingColorSpace),xe=S.colorSpace===Fn?null:ht.getPrimaries(S.colorSpace),Me=S.colorSpace===Fn||Fe===xe?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Xe=S.isCompressedTexture||S.image[0].isCompressedTexture,de=S.image[0]&&S.image[0].isDataTexture,Ae=[];for(let Z=0;Z<6;Z++)!Xe&&!de?Ae[Z]=_(S.image[Z],!0,n.maxCubemapSize):Ae[Z]=de?S.image[Z].image:S.image[Z],Ae[Z]=Te(S,Ae[Z]);let it=Ae[0],Ye=a.convert(S.format,S.colorSpace),Pe=a.convert(S.type),Qe=m(S.internalFormat,Ye,Pe,S.colorSpace),nt=S.isVideoTexture!==!0,Mt=q.__version===void 0||J===!0,O=ee.dataReady,te=P(S,it);et(e.TEXTURE_CUBE_MAP,S);let Y;if(Xe){nt&&Mt&&r.texStorage2D(e.TEXTURE_CUBE_MAP,te,Qe,it.width,it.height);for(let Z=0;Z<6;Z++){Y=Ae[Z].mipmaps;for(let we=0;we<Y.length;we++){let _e=Y[we];S.format!==vi?Ye!==null?nt?O&&r.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we,0,0,_e.width,_e.height,Ye,_e.data):r.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we,Qe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?O&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we,0,0,_e.width,_e.height,Ye,Pe,_e.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we,Qe,_e.width,_e.height,0,Ye,Pe,_e.data)}}}else{if(Y=S.mipmaps,nt&&Mt){Y.length>0&&te++;let Z=be(Ae[0]);r.texStorage2D(e.TEXTURE_CUBE_MAP,te,Qe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(de){nt?O&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ae[Z].width,Ae[Z].height,Ye,Pe,Ae[Z].data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Qe,Ae[Z].width,Ae[Z].height,0,Ye,Pe,Ae[Z].data);for(let we=0;we<Y.length;we++){let _e=Y[we].image[Z].image;nt?O&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we+1,0,0,_e.width,_e.height,Ye,Pe,_e.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we+1,Qe,_e.width,_e.height,0,Ye,Pe,_e.data)}}else{nt?O&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ye,Pe,Ae[Z]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Qe,Ye,Pe,Ae[Z]);for(let we=0;we<Y.length;we++){let _e=Y[we];nt?O&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we+1,0,0,Ye,Pe,_e.image[Z]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we+1,Qe,Ye,Pe,_e.image[Z])}}}v(S)&&d(e.TEXTURE_CUBE_MAP),q.__version=ee.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Le(A,S,F,J,ee,q){let Fe=a.convert(F.format,F.colorSpace),xe=a.convert(F.type),Me=m(F.internalFormat,Fe,xe,F.colorSpace),Xe=i.get(S),de=i.get(F);if(de.__renderTarget=S,!Xe.__hasExternalTextures){let Ae=Math.max(1,S.width>>q),it=Math.max(1,S.height>>q);ee===e.TEXTURE_3D||ee===e.TEXTURE_2D_ARRAY?r.texImage3D(ee,q,Me,Ae,it,S.depth,0,Fe,xe,null):r.texImage2D(ee,q,Me,Ae,it,0,Fe,xe,null)}r.bindFramebuffer(e.FRAMEBUFFER,A),le(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,J,ee,de.__webglTexture,0,Ie(S)):(ee===e.TEXTURE_2D||ee>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,J,ee,de.__webglTexture,q),r.bindFramebuffer(e.FRAMEBUFFER,null)}function ve(A,S,F){if(e.bindRenderbuffer(e.RENDERBUFFER,A),S.depthBuffer){let J=S.depthTexture,ee=J&&J.isDepthTexture?J.type:null,q=x(S.stencilBuffer,ee),Fe=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,xe=Ie(S);le(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xe,q,S.width,S.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,xe,q,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,q,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Fe,e.RENDERBUFFER,A)}else{let J=S.textures;for(let ee=0;ee<J.length;ee++){let q=J[ee],Fe=a.convert(q.format,q.colorSpace),xe=a.convert(q.type),Me=m(q.internalFormat,Fe,xe,q.colorSpace),Xe=Ie(S);F&&le(S)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Xe,Me,S.width,S.height):le(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Xe,Me,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,Me,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function $e(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(r.bindFramebuffer(e.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let F=i.get(S.depthTexture);F.__renderTarget=S,(!F.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);let J=F.__webglTexture,ee=Ie(S);if(S.depthTexture.format===Ps)le(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,J,0,ee):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,J,0);else if(S.depthTexture.format===ks)le(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,J,0,ee):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function rt(A){let S=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let J=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){let ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",ee)};J.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=J}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");$e(S.__webglFramebuffer,A)}else if(F){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(r.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=e.createRenderbuffer(),ve(S.__webglDepthbuffer[J],A,!1);else{let ee=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[J];e.bindRenderbuffer(e.RENDERBUFFER,q),e.framebufferRenderbuffer(e.FRAMEBUFFER,ee,e.RENDERBUFFER,q)}}else if(r.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),ve(S.__webglDepthbuffer,A,!1);else{let J=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ee),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,ee)}r.bindFramebuffer(e.FRAMEBUFFER,null)}function Ke(A,S,F){let J=i.get(A);S!==void 0&&Le(J.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),F!==void 0&&rt(A)}function Q(A){let S=A.texture,F=i.get(A),J=i.get(S);A.addEventListener("dispose",b);let ee=A.textures,q=A.isWebGLCubeRenderTarget===!0,Fe=ee.length>1;if(Fe||(J.__webglTexture===void 0&&(J.__webglTexture=e.createTexture()),J.__version=S.version,s.memory.textures++),q){F.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[xe]=[];for(let Me=0;Me<S.mipmaps.length;Me++)F.__webglFramebuffer[xe][Me]=e.createFramebuffer()}else F.__webglFramebuffer[xe]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let xe=0;xe<S.mipmaps.length;xe++)F.__webglFramebuffer[xe]=e.createFramebuffer()}else F.__webglFramebuffer=e.createFramebuffer();if(Fe)for(let xe=0,Me=ee.length;xe<Me;xe++){let Xe=i.get(ee[xe]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=e.createTexture(),s.memory.textures++)}if(A.samples>0&&le(A)===!1){F.__webglMultisampledFramebuffer=e.createFramebuffer(),F.__webglColorRenderbuffer=[],r.bindFramebuffer(e.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let xe=0;xe<ee.length;xe++){let Me=ee[xe];F.__webglColorRenderbuffer[xe]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,F.__webglColorRenderbuffer[xe]);let Xe=a.convert(Me.format,Me.colorSpace),de=a.convert(Me.type),Ae=m(Me.internalFormat,Xe,de,Me.colorSpace,A.isXRRenderTarget===!0),it=Ie(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,it,Ae,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xe,e.RENDERBUFFER,F.__webglColorRenderbuffer[xe])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=e.createRenderbuffer(),ve(F.__webglDepthRenderbuffer,A,!0)),r.bindFramebuffer(e.FRAMEBUFFER,null)}}if(q){r.bindTexture(e.TEXTURE_CUBE_MAP,J.__webglTexture),et(e.TEXTURE_CUBE_MAP,S);for(let xe=0;xe<6;xe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)Le(F.__webglFramebuffer[xe][Me],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Me);else Le(F.__webglFramebuffer[xe],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);v(S)&&d(e.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(Fe){for(let xe=0,Me=ee.length;xe<Me;xe++){let Xe=ee[xe],de=i.get(Xe);r.bindTexture(e.TEXTURE_2D,de.__webglTexture),et(e.TEXTURE_2D,Xe),Le(F.__webglFramebuffer,A,Xe,e.COLOR_ATTACHMENT0+xe,e.TEXTURE_2D,0),v(Xe)&&d(e.TEXTURE_2D)}r.unbindTexture()}else{let xe=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(xe=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),r.bindTexture(xe,J.__webglTexture),et(xe,S),S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)Le(F.__webglFramebuffer[Me],A,S,e.COLOR_ATTACHMENT0,xe,Me);else Le(F.__webglFramebuffer,A,S,e.COLOR_ATTACHMENT0,xe,0);v(S)&&d(xe),r.unbindTexture()}A.depthBuffer&&rt(A)}function fe(A){let S=A.textures;for(let F=0,J=S.length;F<J;F++){let ee=S[F];if(v(ee)){let q=g(A),Fe=i.get(ee).__webglTexture;r.bindTexture(q,Fe),d(q),r.unbindTexture()}}}let C=[],Ce=[];function ce(A){if(A.samples>0){if(le(A)===!1){let S=A.textures,F=A.width,J=A.height,ee=e.COLOR_BUFFER_BIT,q=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Fe=i.get(A),xe=S.length>1;if(xe)for(let Me=0;Me<S.length;Me++)r.bindFramebuffer(e.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.RENDERBUFFER,null),r.bindFramebuffer(e.FRAMEBUFFER,Fe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.TEXTURE_2D,null,0);r.bindFramebuffer(e.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),r.bindFramebuffer(e.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Me=0;Me<S.length;Me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=e.STENCIL_BUFFER_BIT)),xe){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Fe.__webglColorRenderbuffer[Me]);let Xe=i.get(S[Me]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Xe,0)}e.blitFramebuffer(0,0,F,J,0,0,F,J,ee,e.NEAREST),l===!0&&(C.length=0,Ce.length=0,C.push(e.COLOR_ATTACHMENT0+Me),A.depthBuffer&&A.resolveDepthBuffer===!1&&(C.push(q),Ce.push(q),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ce)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,C))}if(r.bindFramebuffer(e.READ_FRAMEBUFFER,null),r.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),xe)for(let Me=0;Me<S.length;Me++){r.bindFramebuffer(e.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.RENDERBUFFER,Fe.__webglColorRenderbuffer[Me]);let Xe=i.get(S[Me]).__webglTexture;r.bindFramebuffer(e.FRAMEBUFFER,Fe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Me,e.TEXTURE_2D,Xe,0)}r.bindFramebuffer(e.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let S=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function Ie(A){return Math.min(n.maxSamples,A.samples)}function le(A){let S=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function He(A){let S=s.render.frame;c.get(A)!==S&&(c.set(A,S),A.update())}function Te(A,S){let F=A.colorSpace,J=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==zs&&F!==Fn&&(ht.getTransfer(F)===vt?(J!==vi||ee!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}function be(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=ae,this.setTextureCube=$,this.rebindTextures=Ke,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=le}function _A(e,t){function r(i,n=Fn){let a,s=ht.getTransfer(n);if(i===an)return e.UNSIGNED_BYTE;if(i===qf)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Yf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===X1)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===G1)return e.BYTE;if(i===W1)return e.SHORT;if(i===ol)return e.UNSIGNED_SHORT;if(i===$f)return e.INT;if(i===ya)return e.UNSIGNED_INT;if(i===Pi)return e.FLOAT;if(i===en)return e.HALF_FLOAT;if(i===j1)return e.ALPHA;if(i===$1)return e.RGB;if(i===vi)return e.RGBA;if(i===q1)return e.LUMINANCE;if(i===Y1)return e.LUMINANCE_ALPHA;if(i===Ps)return e.DEPTH_COMPONENT;if(i===ks)return e.DEPTH_STENCIL;if(i===Kf)return e.RED;if(i===Jf)return e.RED_INTEGER;if(i===K1)return e.RG;if(i===Qf)return e.RG_INTEGER;if(i===Zf)return e.RGBA_INTEGER;if(i===Mc||i===Sc||i===Ec||i===wc)if(s===vt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Mc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ec)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Mc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ec)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sf||i===of||i===lf||i===uf)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===sf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===of)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===uf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cf||i===hf||i===df)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===cf||i===hf)return s===vt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===df)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===pf||i===ff||i===mf||i===gf||i===vf||i===_f||i===yf||i===xf||i===Mf||i===Sf||i===Ef||i===wf||i===Tf||i===bf)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===pf)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ff)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mf)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gf)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vf)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_f)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yf)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xf)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Mf)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sf)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ef)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wf)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tf)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bf)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tc||i===Af||i===Cf)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Tc)return s===vt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Af)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Cf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===J1||i===Rf||i===Pf||i===Nf)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Tc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Rf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Os?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:r}}var yA=class extends Xr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},bs=class extends rr{constructor(){super(),this.isGroup=!0,this.type="Group"}},xA={type:"move"},Fp=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let i=null,n=null,a=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let y of e.hand.values()){let _=t.getJointPose(y,r),v=this._getHandJoint(l,y);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}let u=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],h=u.position.distanceTo(c.position),p=.02,f=.005;l.inputState.pinching&&h>p+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,r),i===null&&n!==null&&(i=n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(xA)))}return s!==null&&(s.visible=i!==null),o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let r=new bs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}},MA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SA=`
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

}`,EA=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){let i=new ii,n=e.properties.get(i);n.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,r=new or({vertexShader:MA,fragmentShader:SA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ve(new kn(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wA=class extends Bs{constructor(e,t){super();let r=this,i=null,n=1,a=null,s="local-floor",o=1,l=null,u=null,c=null,h=null,p=null,f=null,y=new EA,_=t.getContextAttributes(),v=null,d=null,g=[],m=[],x=new ne,P=null,T=new Xr;T.viewport=new Tt;let b=new Xr;b.viewport=new Tt;let R=[T,b],E=new yA,M=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let he=g[K];return he===void 0&&(he=new Fp,g[K]=he),he.getTargetRaySpace()},this.getControllerGrip=function(K){let he=g[K];return he===void 0&&(he=new Fp,g[K]=he),he.getGripSpace()},this.getHand=function(K){let he=g[K];return he===void 0&&(he=new Fp,g[K]=he),he.getHandSpace()};function k(K){let he=m.indexOf(K.inputSource);if(he===-1)return;let Ue=g[he];Ue!==void 0&&(Ue.update(K.inputSource,K.frame,l||a),Ue.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",W);for(let K=0;K<g.length;K++){let he=m[K];he!==null&&(m[K]=null,g[K].disconnect(he))}M=null,N=null,y.reset(),e.setRenderTarget(v),p=null,h=null,c=null,i=null,d=null,et.stop(),r.isPresenting=!1,e.setPixelRatio(P),e.setSize(x.width,x.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){n=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){s=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return c},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",V),i.addEventListener("inputsourceschange",W),_.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(x),i.renderState.layers===void 0){let he={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:n};p=new XRWebGLLayer(i,t,he),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new _i(p.framebufferWidth,p.framebufferHeight,{format:vi,type:an,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let he=null,Ue=null,Le=null;_.depth&&(Le=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=_.stencil?ks:Ps,Ue=_.stencil?Os:ya);let ve={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:n};c=new XRWebGLBinding(i,t),h=c.createProjectionLayer(ve),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),d=new _i(h.textureWidth,h.textureHeight,{format:vi,type:an,depthTexture:new xy(h.textureWidth,h.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}d.isXRRenderTarget=!0,this.setFoveation(o),l=null,a=await i.requestReferenceSpace(s),et.setContext(i),et.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(K){for(let he=0;he<K.removed.length;he++){let Ue=K.removed[he],Le=m.indexOf(Ue);Le>=0&&(m[Le]=null,g[Le].disconnect(Ue))}for(let he=0;he<K.added.length;he++){let Ue=K.added[he],Le=m.indexOf(Ue);if(Le===-1){for(let $e=0;$e<g.length;$e++)if($e>=m.length){m.push(Ue),Le=$e;break}else if(m[$e]===null){m[$e]=Ue,Le=$e;break}if(Le===-1)break}let ve=g[Le];ve&&ve.connect(Ue)}}let j=new L,X=new L;function ae(K,he,Ue){j.setFromMatrixPosition(he.matrixWorld),X.setFromMatrixPosition(Ue.matrixWorld);let Le=j.distanceTo(X),ve=he.projectionMatrix.elements,$e=Ue.projectionMatrix.elements,rt=ve[14]/(ve[10]-1),Ke=ve[14]/(ve[10]+1),Q=(ve[9]+1)/ve[5],fe=(ve[9]-1)/ve[5],C=(ve[8]-1)/ve[0],Ce=($e[8]+1)/$e[0],ce=rt*C,Ie=rt*Ce,le=Le/(-C+Ce),He=le*-C;if(he.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(He),K.translateZ(le),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ve[10]===-1)K.projectionMatrix.copy(he.projectionMatrix),K.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{let Te=rt+le,be=Ke+le,A=ce-He,S=Ie+(Le-He),F=Q*Ke/be*Te,J=fe*Ke/be*Te;K.projectionMatrix.makePerspective(A,S,F,J,Te,be),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function $(K,he){he===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(he.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let he=K.near,Ue=K.far;y.texture!==null&&(y.depthNear>0&&(he=y.depthNear),y.depthFar>0&&(Ue=y.depthFar)),E.near=b.near=T.near=he,E.far=b.far=T.far=Ue,(M!==E.near||N!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),M=E.near,N=E.far),T.layers.mask=K.layers.mask|2,b.layers.mask=K.layers.mask|4,E.layers.mask=T.layers.mask|b.layers.mask;let Le=K.parent,ve=E.cameras;$(E,Le);for(let $e=0;$e<ve.length;$e++)$(ve[$e],Le);ve.length===2?ae(E,T,b):E.projectionMatrix.copy(T.projectionMatrix),pe(K,E,Le)};function pe(K,he,Ue){Ue===null?K.matrix.copy(he.matrixWorld):(K.matrix.copy(Ue.matrixWorld),K.matrix.invert(),K.matrix.multiply(he.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(he.projectionMatrix),K.projectionMatrixInverse.copy(he.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Df*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&p===null))return o},this.setFoveation=function(K){o=K,h!==null&&(h.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(E)};let Se=null;function Je(K,he){if(u=he.getViewerPose(l||a),f=he,u!==null){let Ue=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let Le=!1;Ue.length!==E.cameras.length&&(E.cameras.length=0,Le=!0);for(let $e=0;$e<Ue.length;$e++){let rt=Ue[$e],Ke=null;if(p!==null)Ke=p.getViewport(rt);else{let fe=c.getViewSubImage(h,rt);Ke=fe.viewport,$e===0&&(e.setRenderTargetTextures(d,fe.colorTexture,h.ignoreDepthValues?void 0:fe.depthStencilTexture),e.setRenderTarget(d))}let Q=R[$e];Q===void 0&&(Q=new Xr,Q.layers.enable($e),Q.viewport=new Tt,R[$e]=Q),Q.matrix.fromArray(rt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(rt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),$e===0&&(E.matrix.copy(Q.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Le===!0&&E.cameras.push(Q)}let ve=i.enabledFeatures;if(ve&&ve.includes("depth-sensing")){let $e=c.getDepthInformation(Ue[0]);$e&&$e.isValid&&$e.texture&&y.init(e,$e,i.renderState)}}for(let Ue=0;Ue<g.length;Ue++){let Le=m[Ue],ve=g[Ue];Le!==null&&ve!==void 0&&ve.update(Le,he,l||a)}Se&&Se(K,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),f=null}let et=new _y;et.setAnimationLoop(Je),this.setAnimationLoop=function(K){Se=K},this.dispose=function(){}}},ha=new Vn,TA=new bt;function bA(e,t){function r(v,d){v.matrixAutoUpdate===!0&&v.updateMatrix(),d.value.copy(v.matrix)}function i(v,d){d.color.getRGB(v.fogColor.value,my(e)),d.isFog?(v.fogNear.value=d.near,v.fogFar.value=d.far):d.isFogExp2&&(v.fogDensity.value=d.density)}function n(v,d,g,m,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(v,d):d.isMeshToonMaterial?(a(v,d),h(v,d)):d.isMeshPhongMaterial?(a(v,d),c(v,d)):d.isMeshStandardMaterial?(a(v,d),p(v,d),d.isMeshPhysicalMaterial&&f(v,d,x)):d.isMeshMatcapMaterial?(a(v,d),y(v,d)):d.isMeshDepthMaterial?a(v,d):d.isMeshDistanceMaterial?(a(v,d),_(v,d)):d.isMeshNormalMaterial?a(v,d):d.isLineBasicMaterial?(s(v,d),d.isLineDashedMaterial&&o(v,d)):d.isPointsMaterial?l(v,d,g,m):d.isSpriteMaterial?u(v,d):d.isShadowMaterial?(v.color.value.copy(d.color),v.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(v,d){v.opacity.value=d.opacity,d.color&&v.diffuse.value.copy(d.color),d.emissive&&v.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(v.map.value=d.map,r(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,r(d.alphaMap,v.alphaMapTransform)),d.bumpMap&&(v.bumpMap.value=d.bumpMap,r(d.bumpMap,v.bumpMapTransform),v.bumpScale.value=d.bumpScale,d.side===br&&(v.bumpScale.value*=-1)),d.normalMap&&(v.normalMap.value=d.normalMap,r(d.normalMap,v.normalMapTransform),v.normalScale.value.copy(d.normalScale),d.side===br&&v.normalScale.value.negate()),d.displacementMap&&(v.displacementMap.value=d.displacementMap,r(d.displacementMap,v.displacementMapTransform),v.displacementScale.value=d.displacementScale,v.displacementBias.value=d.displacementBias),d.emissiveMap&&(v.emissiveMap.value=d.emissiveMap,r(d.emissiveMap,v.emissiveMapTransform)),d.specularMap&&(v.specularMap.value=d.specularMap,r(d.specularMap,v.specularMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest);let g=t.get(d),m=g.envMap,x=g.envMapRotation;m&&(v.envMap.value=m,ha.copy(x),ha.x*=-1,ha.y*=-1,ha.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&(ha.y*=-1,ha.z*=-1),v.envMapRotation.value.setFromMatrix4(TA.makeRotationFromEuler(ha)),v.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=d.reflectivity,v.ior.value=d.ior,v.refractionRatio.value=d.refractionRatio),d.lightMap&&(v.lightMap.value=d.lightMap,v.lightMapIntensity.value=d.lightMapIntensity,r(d.lightMap,v.lightMapTransform)),d.aoMap&&(v.aoMap.value=d.aoMap,v.aoMapIntensity.value=d.aoMapIntensity,r(d.aoMap,v.aoMapTransform))}function s(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,d.map&&(v.map.value=d.map,r(d.map,v.mapTransform))}function o(v,d){v.dashSize.value=d.dashSize,v.totalSize.value=d.dashSize+d.gapSize,v.scale.value=d.scale}function l(v,d,g,m){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.size.value=d.size*g,v.scale.value=m*.5,d.map&&(v.map.value=d.map,r(d.map,v.uvTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,r(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function u(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.rotation.value=d.rotation,d.map&&(v.map.value=d.map,r(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,r(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function c(v,d){v.specular.value.copy(d.specular),v.shininess.value=Math.max(d.shininess,1e-4)}function h(v,d){d.gradientMap&&(v.gradientMap.value=d.gradientMap)}function p(v,d){v.metalness.value=d.metalness,d.metalnessMap&&(v.metalnessMap.value=d.metalnessMap,r(d.metalnessMap,v.metalnessMapTransform)),v.roughness.value=d.roughness,d.roughnessMap&&(v.roughnessMap.value=d.roughnessMap,r(d.roughnessMap,v.roughnessMapTransform)),d.envMap&&(v.envMapIntensity.value=d.envMapIntensity)}function f(v,d,g){v.ior.value=d.ior,d.sheen>0&&(v.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),v.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(v.sheenColorMap.value=d.sheenColorMap,r(d.sheenColorMap,v.sheenColorMapTransform)),d.sheenRoughnessMap&&(v.sheenRoughnessMap.value=d.sheenRoughnessMap,r(d.sheenRoughnessMap,v.sheenRoughnessMapTransform))),d.clearcoat>0&&(v.clearcoat.value=d.clearcoat,v.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(v.clearcoatMap.value=d.clearcoatMap,r(d.clearcoatMap,v.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,r(d.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(v.clearcoatNormalMap.value=d.clearcoatNormalMap,r(d.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===br&&v.clearcoatNormalScale.value.negate())),d.dispersion>0&&(v.dispersion.value=d.dispersion),d.iridescence>0&&(v.iridescence.value=d.iridescence,v.iridescenceIOR.value=d.iridescenceIOR,v.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(v.iridescenceMap.value=d.iridescenceMap,r(d.iridescenceMap,v.iridescenceMapTransform)),d.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=d.iridescenceThicknessMap,r(d.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),d.transmission>0&&(v.transmission.value=d.transmission,v.transmissionSamplerMap.value=g.texture,v.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(v.transmissionMap.value=d.transmissionMap,r(d.transmissionMap,v.transmissionMapTransform)),v.thickness.value=d.thickness,d.thicknessMap&&(v.thicknessMap.value=d.thicknessMap,r(d.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=d.attenuationDistance,v.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(v.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(v.anisotropyMap.value=d.anisotropyMap,r(d.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=d.specularIntensity,v.specularColor.value.copy(d.specularColor),d.specularColorMap&&(v.specularColorMap.value=d.specularColorMap,r(d.specularColorMap,v.specularColorMapTransform)),d.specularIntensityMap&&(v.specularIntensityMap.value=d.specularIntensityMap,r(d.specularIntensityMap,v.specularIntensityMapTransform))}function y(v,d){d.matcap&&(v.matcap.value=d.matcap)}function _(v,d){let g=t.get(d).light;v.referencePosition.value.setFromMatrixPosition(g.matrixWorld),v.nearDistance.value=g.shadow.camera.near,v.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function AA(e,t,r,i){let n={},a={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,m){let x=m.program;i.uniformBlockBinding(g,x)}function u(g,m){let x=n[g.id];x===void 0&&(y(g),x=c(g),n[g.id]=x,g.addEventListener("dispose",v));let P=m.program;i.updateUBOMapping(g,P);let T=t.render.frame;a[g.id]!==T&&(p(g),a[g.id]=T)}function c(g){let m=h();g.__bindingPointIndex=m;let x=e.createBuffer(),P=g.__size,T=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,P,T),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,m,x),x}function h(){for(let g=0;g<o;g++)if(s.indexOf(g)===-1)return s.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(g){let m=n[g.id],x=g.uniforms,P=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,m);for(let T=0,b=x.length;T<b;T++){let R=Array.isArray(x[T])?x[T]:[x[T]];for(let E=0,M=R.length;E<M;E++){let N=R[E];if(f(N,T,E,P)===!0){let k=N.__offset,V=Array.isArray(N.value)?N.value:[N.value],W=0;for(let j=0;j<V.length;j++){let X=V[j],ae=_(X);typeof X=="number"||typeof X=="boolean"?(N.__data[0]=X,e.bufferSubData(e.UNIFORM_BUFFER,k+W,N.__data)):X.isMatrix3?(N.__data[0]=X.elements[0],N.__data[1]=X.elements[1],N.__data[2]=X.elements[2],N.__data[3]=0,N.__data[4]=X.elements[3],N.__data[5]=X.elements[4],N.__data[6]=X.elements[5],N.__data[7]=0,N.__data[8]=X.elements[6],N.__data[9]=X.elements[7],N.__data[10]=X.elements[8],N.__data[11]=0):(X.toArray(N.__data,W),W+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,k,N.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(g,m,x,P){let T=g.value,b=m+"_"+x;if(P[b]===void 0)return typeof T=="number"||typeof T=="boolean"?P[b]=T:P[b]=T.clone(),!0;{let R=P[b];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return P[b]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function y(g){let m=g.uniforms,x=0,P=16;for(let b=0,R=m.length;b<R;b++){let E=Array.isArray(m[b])?m[b]:[m[b]];for(let M=0,N=E.length;M<N;M++){let k=E[M],V=Array.isArray(k.value)?k.value:[k.value];for(let W=0,j=V.length;W<j;W++){let X=V[W],ae=_(X),$=x%P,pe=$%ae.boundary,Se=$+pe;x+=pe,Se!==0&&P-Se<ae.storage&&(x+=P-Se),k.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=ae.storage}}}let T=x%P;return T>0&&(x+=P-T),g.__size=x,g.__cache={},this}function _(g){let m={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(m.boundary=4,m.storage=4):g.isVector2?(m.boundary=8,m.storage=8):g.isVector3||g.isColor?(m.boundary=16,m.storage=12):g.isVector4?(m.boundary=16,m.storage=16):g.isMatrix3?(m.boundary=48,m.storage=48):g.isMatrix4?(m.boundary=64,m.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),m}function v(g){let m=g.target;m.removeEventListener("dispose",v);let x=s.indexOf(m.__bindingPointIndex);s.splice(x,1),e.deleteBuffer(n[m.id]),delete n[m.id],delete a[m.id]}function d(){for(let g in n)e.deleteBuffer(n[g]);s=[],n={},a={}}return{bind:l,update:u,dispose:d}}var CA=class{constructor(e={}){let{canvas:t=vE(),context:r=null,depth:i=!0,stencil:n=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=r.getContextAttributes().alpha}else p=a;let f=new Uint32Array(4),y=new Int32Array(4),_=null,v=null,d=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wr,this.toneMapping=zn,this.toneMappingExposure=1;let m=this,x=!1,P=0,T=0,b=null,R=-1,E=null,M=new Tt,N=new Tt,k=null,V=new We(0),W=0,j=t.width,X=t.height,ae=1,$=null,pe=null,Se=new Tt(0,0,j,X),Je=new Tt(0,0,j,X),et=!1,K=new em,he=!1,Ue=!1,Le=new bt,ve=new bt,$e=new L,rt=new Tt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function fe(){return b===null?ae:1}let C=r;function Ce(w,D){return t.getContext(w,D)}try{let w={alpha:!0,depth:i,stencil:n,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",we,!1),C===null){let D="webgl2";if(C=Ce(D,w),C===null)throw Ce(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ce,Ie,le,He,Te,be,A,S,F,J,ee,q,Fe,xe,Me,Xe,de,Ae,it,Ye,Pe,Qe,nt,Mt;function O(){ce=new IT(C),ce.init(),Qe=new _A(C,ce),Ie=new AT(C,ce,e,Qe),le=new mA(C,ce),Ie.reverseDepthBuffer&&h&&le.buffers.depth.setReversed(!0),He=new OT(C),Te=new eA,be=new vA(C,ce,le,Te,Ie,Qe,He),A=new RT(m),S=new LT(m),F=new GE(C),nt=new TT(C,F),J=new DT(C,F,He,nt),ee=new FT(C,J,F,He),it=new kT(C,Ie,be),Xe=new CT(Te),q=new Zb(m,A,S,ce,Ie,nt,Xe),Fe=new bA(m,Te),xe=new rA,Me=new lA(ce),Ae=new wT(m,A,S,le,ee,p,o),de=new pA(m,ee,Ie),Mt=new AA(C,He,Ie,le),Ye=new bT(C,ce,He),Pe=new UT(C,ce,He),He.programs=q.programs,m.capabilities=Ie,m.extensions=ce,m.properties=Te,m.renderLists=xe,m.shadowMap=de,m.state=le,m.info=He}O();let te=new wA(m,C);this.xr=te,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let w=ce.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ce.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(w){w!==void 0&&(ae=w,this.setSize(j,X,!1))},this.getSize=function(w){return w.set(j,X)},this.setSize=function(w,D,z=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=w,X=D,t.width=Math.floor(w*ae),t.height=Math.floor(D*ae),z===!0&&(t.style.width=w+"px",t.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(j*ae,X*ae).floor()},this.setDrawingBufferSize=function(w,D,z){j=w,X=D,ae=z,t.width=Math.floor(w*z),t.height=Math.floor(D*z),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(M)},this.getViewport=function(w){return w.copy(Se)},this.setViewport=function(w,D,z,B){w.isVector4?Se.set(w.x,w.y,w.z,w.w):Se.set(w,D,z,B),le.viewport(M.copy(Se).multiplyScalar(ae).round())},this.getScissor=function(w){return w.copy(Je)},this.setScissor=function(w,D,z,B){w.isVector4?Je.set(w.x,w.y,w.z,w.w):Je.set(w,D,z,B),le.scissor(N.copy(Je).multiplyScalar(ae).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(w){le.setScissorTest(et=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){pe=w},this.getClearColor=function(w){return w.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(w=!0,D=!0,z=!0){let B=0;if(w){let U=!1;if(b!==null){let oe=b.texture.format;U=oe===Zf||oe===Qf||oe===Jf}if(U){let oe=b.texture.type,re=oe===an||oe===ya||oe===ol||oe===Os||oe===qf||oe===Yf,ye=Ae.getClearColor(),Re=Ae.getClearAlpha(),Be=ye.r,Ze=ye.g,qe=ye.b;re?(f[0]=Be,f[1]=Ze,f[2]=qe,f[3]=Re,C.clearBufferuiv(C.COLOR,0,f)):(y[0]=Be,y[1]=Ze,y[2]=qe,y[3]=Re,C.clearBufferiv(C.COLOR,0,y))}else B|=C.COLOR_BUFFER_BIT}D&&(B|=C.DEPTH_BUFFER_BIT),z&&(B|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",we,!1),xe.dispose(),Me.dispose(),Te.dispose(),A.dispose(),S.dispose(),ee.dispose(),nt.dispose(),Mt.dispose(),q.dispose(),te.dispose(),te.removeEventListener("sessionstart",H),te.removeEventListener("sessionend",ie),se.stop()};function Y(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let w=He.autoReset,D=de.enabled,z=de.autoUpdate,B=de.needsUpdate,U=de.type;O(),He.autoReset=w,de.enabled=D,de.autoUpdate=z,de.needsUpdate=B,de.type=U}function we(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function _e(w){let D=w.target;D.removeEventListener("dispose",_e),ct(D)}function ct(w){Dt(w),Te.remove(w)}function Dt(w){let D=Te.get(w).programs;D!==void 0&&(D.forEach(function(z){q.releaseProgram(z)}),w.isShaderMaterial&&q.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,z,B,U,oe){D===null&&(D=Ke);let re=U.isMesh&&U.matrixWorld.determinant()<0,ye=mt(w,D,z,B,U);le.setMaterial(B,re);let Re=z.index,Be=1;if(B.wireframe===!0){if(Re=J.getWireframeAttribute(z),Re===void 0)return;Be=2}let Ze=z.drawRange,qe=z.attributes.position,ft=Ze.start*Be,Pt=(Ze.start+Ze.count)*Be;oe!==null&&(ft=Math.max(ft,oe.start*Be),Pt=Math.min(Pt,(oe.start+oe.count)*Be)),Re!==null?(ft=Math.max(ft,0),Pt=Math.min(Pt,Re.count)):qe!=null&&(ft=Math.max(ft,0),Pt=Math.min(Pt,qe.count));let Nt=Pt-ft;if(Nt<0||Nt===1/0)return;nt.setup(U,B,ye,z,Re);let Wt,Lt=Ye;if(Re!==null&&(Wt=F.get(Re),Lt=Pe,Lt.setIndex(Wt)),U.isMesh)B.wireframe===!0?(le.setLineWidth(B.wireframeLinewidth*fe()),Lt.setMode(C.LINES)):Lt.setMode(C.TRIANGLES);else if(U.isLine){let ze=B.linewidth;ze===void 0&&(ze=1),le.setLineWidth(ze*fe()),U.isLineSegments?Lt.setMode(C.LINES):U.isLineLoop?Lt.setMode(C.LINE_LOOP):Lt.setMode(C.LINE_STRIP)}else U.isPoints?Lt.setMode(C.POINTS):U.isSprite&&Lt.setMode(C.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Lt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))Lt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let ze=U._multiDrawStarts,Hn=U._multiDrawCounts,Gn=U._multiDrawCount,ni=Re?F.get(Re).bytesPerElement:1,Ea=Te.get(B).currentProgram.getUniforms();for(let Dr=0;Dr<Gn;Dr++)Ea.setValue(C,"_gl_DrawID",Dr),Lt.render(ze[Dr]/ni,Hn[Dr])}else if(U.isInstancedMesh)Lt.renderInstances(ft,Nt,U.count);else if(z.isInstancedBufferGeometry){let ze=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Hn=Math.min(z.instanceCount,ze);Lt.renderInstances(ft,Nt,Hn)}else Lt.render(ft,Nt)};function Gt(w,D,z){w.transparent===!0&&w.side===Ai&&w.forceSinglePass===!1?(w.side=br,w.needsUpdate=!0,De(w,D,z),w.side=Bn,w.needsUpdate=!0,De(w,D,z),w.side=Ai):De(w,D,z)}this.compile=function(w,D,z=null){z===null&&(z=w),v=Me.get(z),v.init(D),g.push(v),z.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(v.pushLight(U),U.castShadow&&v.pushShadow(U))}),w!==z&&w.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(v.pushLight(U),U.castShadow&&v.pushShadow(U))}),v.setupLights();let B=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let oe=U.material;if(oe)if(Array.isArray(oe))for(let re=0;re<oe.length;re++){let ye=oe[re];Gt(ye,z,U),B.add(ye)}else Gt(oe,z,U),B.add(oe)}),g.pop(),v=null,B},this.compileAsync=function(w,D,z=null){let B=this.compile(w,D,z);return new Promise(U=>{function oe(){if(B.forEach(function(re){Te.get(re).currentProgram.isReady()&&B.delete(re)}),B.size===0){U(w);return}setTimeout(oe,10)}ce.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let pt=null;function $r(w){pt&&pt(w)}function H(){se.stop()}function ie(){se.start()}let se=new _y;se.setAnimationLoop($r),typeof self<"u"&&se.setContext(self),this.setAnimationLoop=function(w){pt=w,te.setAnimationLoop(w),w===null?se.stop():se.start()},te.addEventListener("sessionstart",H),te.addEventListener("sessionend",ie),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(D),D=te.getCamera()),w.isScene===!0&&w.onBeforeRender(m,w,D,b),v=Me.get(w,g.length),v.init(D),g.push(v),ve.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),K.setFromProjectionMatrix(ve),Ue=this.localClippingEnabled,he=Xe.init(this.clippingPlanes,Ue),_=xe.get(w,d.length),_.init(),d.push(_),te.enabled===!0&&te.isPresenting===!0){let oe=m.xr.getDepthSensingMesh();oe!==null&&me(oe,D,-1/0,m.sortObjects)}me(w,D,0,m.sortObjects),_.finish(),m.sortObjects===!0&&_.sort($,pe),Q=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Q&&Ae.addToRenderList(_,w),this.info.render.frame++,he===!0&&Xe.beginShadows();let z=v.state.shadowsArray;de.render(z,w,D),he===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=_.opaque,U=_.transmissive;if(v.setupLights(),D.isArrayCamera){let oe=D.cameras;if(U.length>0)for(let re=0,ye=oe.length;re<ye;re++){let Re=oe[re];ke(B,U,w,Re)}Q&&Ae.render(w);for(let re=0,ye=oe.length;re<ye;re++){let Re=oe[re];ge(_,w,Re,Re.viewport)}}else U.length>0&&ke(B,U,w,D),Q&&Ae.render(w),ge(_,w,D);b!==null&&(be.updateMultisampleRenderTarget(b),be.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(m,w,D),nt.resetDefaultState(),R=-1,E=null,g.pop(),g.length>0?(v=g[g.length-1],he===!0&&Xe.setGlobalState(m.clippingPlanes,v.state.camera)):v=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function me(w,D,z,B){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)v.pushLight(w),w.castShadow&&v.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){B&&rt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ve);let oe=ee.update(w),re=w.material;re.visible&&_.push(w,oe,re,z,rt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){let oe=ee.update(w),re=w.material;if(B&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),rt.copy(w.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),rt.copy(oe.boundingSphere.center)),rt.applyMatrix4(w.matrixWorld).applyMatrix4(ve)),Array.isArray(re)){let ye=oe.groups;for(let Re=0,Be=ye.length;Re<Be;Re++){let Ze=ye[Re],qe=re[Ze.materialIndex];qe&&qe.visible&&_.push(w,oe,qe,z,rt.z,Ze)}}else re.visible&&_.push(w,oe,re,z,rt.z,null)}}let U=w.children;for(let oe=0,re=U.length;oe<re;oe++)me(U[oe],D,z,B)}function ge(w,D,z,B){let U=w.opaque,oe=w.transmissive,re=w.transparent;v.setupLightsView(z),he===!0&&Xe.setGlobalState(m.clippingPlanes,z),B&&le.viewport(M.copy(B)),U.length>0&&Oe(U,D,z),oe.length>0&&Oe(oe,D,z),re.length>0&&Oe(re,D,z),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function ke(w,D,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[B.id]===void 0&&(v.state.transmissionRenderTarget[B.id]=new _i(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?en:an,minFilter:_a,samples:4,stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));let U=v.state.transmissionRenderTarget[B.id],oe=B.viewport||M;U.setSize(oe.z,oe.w);let re=m.getRenderTarget();m.setRenderTarget(U),m.getClearColor(V),W=m.getClearAlpha(),W<1&&m.setClearColor(16777215,.5),m.clear(),Q&&Ae.render(z);let ye=m.toneMapping;m.toneMapping=zn;let Re=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),v.setupLightsView(B),he===!0&&Xe.setGlobalState(m.clippingPlanes,B),Oe(w,z,B),be.updateMultisampleRenderTarget(U),be.updateRenderTargetMipmap(U),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Ze=0,qe=D.length;Ze<qe;Ze++){let ft=D[Ze],Pt=ft.object,Nt=ft.geometry,Wt=ft.material,Lt=ft.group;if(Wt.side===Ai&&Pt.layers.test(B.layers)){let ze=Wt.side;Wt.side=br,Wt.needsUpdate=!0,Ge(Pt,z,B,Nt,Wt,Lt),Wt.side=ze,Wt.needsUpdate=!0,Be=!0}}Be===!0&&(be.updateMultisampleRenderTarget(U),be.updateRenderTargetMipmap(U))}m.setRenderTarget(re),m.setClearColor(V,W),Re!==void 0&&(B.viewport=Re),m.toneMapping=ye}function Oe(w,D,z){let B=D.isScene===!0?D.overrideMaterial:null;for(let U=0,oe=w.length;U<oe;U++){let re=w[U],ye=re.object,Re=re.geometry,Be=B===null?re.material:B,Ze=re.group;ye.layers.test(z.layers)&&Ge(ye,D,z,Re,Be,Ze)}}function Ge(w,D,z,B,U,oe){w.onBeforeRender(m,D,z,B,U,oe),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(m,D,z,B,w,oe),U.transparent===!0&&U.side===Ai&&U.forceSinglePass===!1?(U.side=br,U.needsUpdate=!0,m.renderBufferDirect(z,D,B,U,w,oe),U.side=Bn,U.needsUpdate=!0,m.renderBufferDirect(z,D,B,U,w,oe),U.side=Ai):m.renderBufferDirect(z,D,B,U,w,oe),w.onAfterRender(m,D,z,B,U,oe)}function De(w,D,z){D.isScene!==!0&&(D=Ke);let B=Te.get(w),U=v.state.lights,oe=v.state.shadowsArray,re=U.state.version,ye=q.getParameters(w,U.state,oe,D,z),Re=q.getProgramCacheKey(ye),Be=B.programs;B.environment=w.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(w.isMeshStandardMaterial?S:A).get(w.envMap||B.environment),B.envMapRotation=B.environment!==null&&w.envMap===null?D.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",_e),Be=new Map,B.programs=Be);let Ze=Be.get(Re);if(Ze!==void 0){if(B.currentProgram===Ze&&B.lightsStateVersion===re)return tt(w,ye),Ze}else ye.uniforms=q.getUniforms(w),w.onBeforeCompile(ye,m),Ze=q.acquireProgram(ye,Re),Be.set(Re,Ze),B.uniforms=ye.uniforms;let qe=B.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(qe.clippingPlanes=Xe.uniform),tt(w,ye),B.needsLights=Ar(w),B.lightsStateVersion=re,B.needsLights&&(qe.ambientLightColor.value=U.state.ambient,qe.lightProbe.value=U.state.probe,qe.directionalLights.value=U.state.directional,qe.directionalLightShadows.value=U.state.directionalShadow,qe.spotLights.value=U.state.spot,qe.spotLightShadows.value=U.state.spotShadow,qe.rectAreaLights.value=U.state.rectArea,qe.ltc_1.value=U.state.rectAreaLTC1,qe.ltc_2.value=U.state.rectAreaLTC2,qe.pointLights.value=U.state.point,qe.pointLightShadows.value=U.state.pointShadow,qe.hemisphereLights.value=U.state.hemi,qe.directionalShadowMap.value=U.state.directionalShadowMap,qe.directionalShadowMatrix.value=U.state.directionalShadowMatrix,qe.spotShadowMap.value=U.state.spotShadowMap,qe.spotLightMatrix.value=U.state.spotLightMatrix,qe.spotLightMap.value=U.state.spotLightMap,qe.pointShadowMap.value=U.state.pointShadowMap,qe.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Ze,B.uniformsList=null,Ze}function je(w){if(w.uniformsList===null){let D=w.currentProgram.getUniforms();w.uniformsList=Cc.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function tt(w,D){let z=Te.get(w);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function mt(w,D,z,B,U){D.isScene!==!0&&(D=Ke),be.resetTextureUnits();let oe=D.fog,re=B.isMeshStandardMaterial?D.environment:null,ye=b===null?m.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:zs,Re=(B.isMeshStandardMaterial?S:A).get(B.envMap||re),Be=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ze=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),qe=!!z.morphAttributes.position,ft=!!z.morphAttributes.normal,Pt=!!z.morphAttributes.color,Nt=zn;B.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Nt=m.toneMapping);let Wt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Lt=Wt!==void 0?Wt.length:0,ze=Te.get(B),Hn=v.state.lights;if(he===!0&&(Ue===!0||w!==E)){let Cr=w===E&&B.id===R;Xe.setState(B,w,Cr)}let Gn=!1;B.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Hn.state.version||ze.outputColorSpace!==ye||U.isBatchedMesh&&ze.batching===!1||!U.isBatchedMesh&&ze.batching===!0||U.isBatchedMesh&&ze.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ze.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ze.instancing===!1||!U.isInstancedMesh&&ze.instancing===!0||U.isSkinnedMesh&&ze.skinning===!1||!U.isSkinnedMesh&&ze.skinning===!0||U.isInstancedMesh&&ze.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ze.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ze.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ze.instancingMorph===!1&&U.morphTexture!==null||ze.envMap!==Re||B.fog===!0&&ze.fog!==oe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Xe.numPlanes||ze.numIntersection!==Xe.numIntersection)||ze.vertexAlphas!==Be||ze.vertexTangents!==Ze||ze.morphTargets!==qe||ze.morphNormals!==ft||ze.morphColors!==Pt||ze.toneMapping!==Nt||ze.morphTargetsCount!==Lt)&&(Gn=!0):(Gn=!0,ze.__version=B.version);let ni=ze.currentProgram;Gn===!0&&(ni=De(B,D,U));let Ea=!1,Dr=!1,Xs=!1,At=ni.getUniforms(),yi=ze.uniforms;if(le.useProgram(ni.program)&&(Ea=!0,Dr=!0,Xs=!0),B.id!==R&&(R=B.id,Dr=!0),Ea||E!==w){le.buffers.depth.getReversed()?(Le.copy(w.projectionMatrix),yE(Le),xE(Le),At.setValue(C,"projectionMatrix",Le)):At.setValue(C,"projectionMatrix",w.projectionMatrix),At.setValue(C,"viewMatrix",w.matrixWorldInverse);let Cr=At.map.cameraPosition;Cr!==void 0&&Cr.setValue(C,$e.setFromMatrixPosition(w.matrixWorld)),Ie.logarithmicDepthBuffer&&At.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&At.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,Dr=!0,Xs=!0)}if(U.isSkinnedMesh){At.setOptional(C,U,"bindMatrix"),At.setOptional(C,U,"bindMatrixInverse");let Cr=U.skeleton;Cr&&(Cr.boneTexture===null&&Cr.computeBoneTexture(),At.setValue(C,"boneTexture",Cr.boneTexture,be))}U.isBatchedMesh&&(At.setOptional(C,U,"batchingTexture"),At.setValue(C,"batchingTexture",U._matricesTexture,be),At.setOptional(C,U,"batchingIdTexture"),At.setValue(C,"batchingIdTexture",U._indirectTexture,be),At.setOptional(C,U,"batchingColorTexture"),U._colorsTexture!==null&&At.setValue(C,"batchingColorTexture",U._colorsTexture,be));let js=z.morphAttributes;if((js.position!==void 0||js.normal!==void 0||js.color!==void 0)&&it.update(U,z,ni),(Dr||ze.receiveShadow!==U.receiveShadow)&&(ze.receiveShadow=U.receiveShadow,At.setValue(C,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(yi.envMap.value=Re,yi.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(yi.envMapIntensity.value=D.environmentIntensity),Dr&&(At.setValue(C,"toneMappingExposure",m.toneMappingExposure),ze.needsLights&&qr(yi,Xs),oe&&B.fog===!0&&Fe.refreshFogUniforms(yi,oe),Fe.refreshMaterialUniforms(yi,B,ae,X,v.state.transmissionRenderTarget[w.id]),Cc.upload(C,je(ze),yi,be)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Cc.upload(C,je(ze),yi,be),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&At.setValue(C,"center",U.center),At.setValue(C,"modelViewMatrix",U.modelViewMatrix),At.setValue(C,"normalMatrix",U.normalMatrix),At.setValue(C,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let Cr=B.uniformsGroups;for(let $s=0,ln=Cr.length;$s<ln;$s++){let cm=Cr[$s];Mt.update(cm,ni),Mt.bind(cm,ni)}}return ni}function qr(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function Ar(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,D,z){Te.get(w.texture).__webglTexture=D,Te.get(w.depthTexture).__webglTexture=z;let B=Te.get(w);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,D){let z=Te.get(w);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,z=0){b=w,P=D,T=z;let B=!0,U=null,oe=!1,re=!1;if(w){let ye=Te.get(w);if(ye.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(C.FRAMEBUFFER,null),B=!1;else if(ye.__webglFramebuffer===void 0)be.setupRenderTarget(w);else if(ye.__hasExternalTextures)be.rebindTextures(w,Te.get(w.texture).__webglTexture,Te.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ze=w.depthTexture;if(ye.__boundDepthTexture!==Ze){if(Ze!==null&&Te.has(Ze)&&(w.width!==Ze.image.width||w.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");be.setupDepthRenderbuffer(w)}}let Re=w.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(re=!0);let Be=Te.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Be[D])?U=Be[D][z]:U=Be[D],oe=!0):w.samples>0&&be.useMultisampledRTT(w)===!1?U=Te.get(w).__webglMultisampledFramebuffer:Array.isArray(Be)?U=Be[z]:U=Be,M.copy(w.viewport),N.copy(w.scissor),k=w.scissorTest}else M.copy(Se).multiplyScalar(ae).floor(),N.copy(Je).multiplyScalar(ae).floor(),k=et;if(le.bindFramebuffer(C.FRAMEBUFFER,U)&&B&&le.drawBuffers(w,U),le.viewport(M),le.scissor(N),le.setScissorTest(k),oe){let ye=Te.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+D,ye.__webglTexture,z)}else if(re){let ye=Te.get(w.texture),Re=D||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,ye.__webglTexture,z||0,Re)}R=-1},this.readRenderTargetPixels=function(w,D,z,B,U,oe,re){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Te.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&re!==void 0&&(ye=ye[re]),ye){le.bindFramebuffer(C.FRAMEBUFFER,ye);try{let Re=w.texture,Be=Re.format,Ze=Re.type;if(!Ie.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-B&&z>=0&&z<=w.height-U&&C.readPixels(D,z,B,U,Qe.convert(Be),Qe.convert(Ze),oe)}finally{let Re=b!==null?Te.get(b).__webglFramebuffer:null;le.bindFramebuffer(C.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(w,D,z,B,U,oe,re){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Te.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&re!==void 0&&(ye=ye[re]),ye){let Re=w.texture,Be=Re.format,Ze=Re.type;if(!Ie.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=w.width-B&&z>=0&&z<=w.height-U){le.bindFramebuffer(C.FRAMEBUFFER,ye);let qe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,qe),C.bufferData(C.PIXEL_PACK_BUFFER,oe.byteLength,C.STREAM_READ),C.readPixels(D,z,B,U,Qe.convert(Be),Qe.convert(Ze),0);let ft=b!==null?Te.get(b).__webglFramebuffer:null;le.bindFramebuffer(C.FRAMEBUFFER,ft);let Pt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await _E(C,Pt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,qe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,oe),C.deleteBuffer(qe),C.deleteSync(Pt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,D=null,z=0){w.isTexture!==!0&&(tl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,w=arguments[1]);let B=Math.pow(2,-z),U=Math.floor(w.image.width*B),oe=Math.floor(w.image.height*B),re=D!==null?D.x:0,ye=D!==null?D.y:0;be.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,z,0,0,re,ye,U,oe),le.unbindTexture()},this.copyTextureToTexture=function(w,D,z=null,B=null,U=0){w.isTexture!==!0&&(tl("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,w=arguments[1],D=arguments[2],U=arguments[3]||0,z=null);let oe,re,ye,Re,Be,Ze,qe,ft,Pt,Nt=w.isCompressedTexture?w.mipmaps[U]:w.image;z!==null?(oe=z.max.x-z.min.x,re=z.max.y-z.min.y,ye=z.isBox3?z.max.z-z.min.z:1,Re=z.min.x,Be=z.min.y,Ze=z.isBox3?z.min.z:0):(oe=Nt.width,re=Nt.height,ye=Nt.depth||1,Re=0,Be=0,Ze=0),B!==null?(qe=B.x,ft=B.y,Pt=B.z):(qe=0,ft=0,Pt=0);let Wt=Qe.convert(D.format),Lt=Qe.convert(D.type),ze;D.isData3DTexture?(be.setTexture3D(D,0),ze=C.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(be.setTexture2DArray(D,0),ze=C.TEXTURE_2D_ARRAY):(be.setTexture2D(D,0),ze=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);let Hn=C.getParameter(C.UNPACK_ROW_LENGTH),Gn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ni=C.getParameter(C.UNPACK_SKIP_PIXELS),Ea=C.getParameter(C.UNPACK_SKIP_ROWS),Dr=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Nt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Nt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Re),C.pixelStorei(C.UNPACK_SKIP_ROWS,Be),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ze);let Xs=w.isDataArrayTexture||w.isData3DTexture,At=D.isDataArrayTexture||D.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let yi=Te.get(w),js=Te.get(D),Cr=Te.get(yi.__renderTarget),$s=Te.get(js.__renderTarget);le.bindFramebuffer(C.READ_FRAMEBUFFER,Cr.__webglFramebuffer),le.bindFramebuffer(C.DRAW_FRAMEBUFFER,$s.__webglFramebuffer);for(let ln=0;ln<ye;ln++)Xs&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Te.get(w).__webglTexture,U,Ze+ln),w.isDepthTexture?(At&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Te.get(D).__webglTexture,U,Pt+ln),C.blitFramebuffer(Re,Be,oe,re,qe,ft,oe,re,C.DEPTH_BUFFER_BIT,C.NEAREST)):At?C.copyTexSubImage3D(ze,U,qe,ft,Pt+ln,Re,Be,oe,re):C.copyTexSubImage2D(ze,U,qe,ft,Pt+ln,Re,Be,oe,re);le.bindFramebuffer(C.READ_FRAMEBUFFER,null),le.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else At?w.isDataTexture||w.isData3DTexture?C.texSubImage3D(ze,U,qe,ft,Pt,oe,re,ye,Wt,Lt,Nt.data):D.isCompressedArrayTexture?C.compressedTexSubImage3D(ze,U,qe,ft,Pt,oe,re,ye,Wt,Nt.data):C.texSubImage3D(ze,U,qe,ft,Pt,oe,re,ye,Wt,Lt,Nt):w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,U,qe,ft,oe,re,Wt,Lt,Nt.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,U,qe,ft,Nt.width,Nt.height,Wt,Nt.data):C.texSubImage2D(C.TEXTURE_2D,U,qe,ft,oe,re,Wt,Lt,Nt);C.pixelStorei(C.UNPACK_ROW_LENGTH,Hn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Gn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ni),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ea),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Dr),U===0&&D.generateMipmaps&&C.generateMipmap(ze),le.unbindTexture()},this.copyTextureToTexture3D=function(w,D,z=null,B=null,U=0){return w.isTexture!==!0&&(tl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,B=arguments[1]||null,w=arguments[2],D=arguments[3],U=arguments[4]||0),tl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,D,z,B,U)},this.initRenderTarget=function(w){Te.get(w).__webglFramebuffer===void 0&&be.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?be.setTextureCube(w,0):w.isData3DTexture?be.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?be.setTexture2DArray(w,0):be.setTexture2D(w,0),le.unbindTexture()},this.resetState=function(){P=0,T=0,b=null,le.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}},RA=class Ty{constructor(t,r=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(t),this.density=r}clone(){return new Ty(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},f1=class extends rr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},PA=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=If,this.updateRanges=[],this.version=0,this.uuid=tn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let i=0,n=this.stride;i<n;i++)this.array[e+i]=t.array[r+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Sr=new L,m1=class by{constructor(t,r,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=r,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let r=0,i=this.data.count;r<i;r++)Sr.fromBufferAttribute(this,r),Sr.applyMatrix4(t),this.setXYZ(r,Sr.x,Sr.y,Sr.z);return this}applyNormalMatrix(t){for(let r=0,i=this.count;r<i;r++)Sr.fromBufferAttribute(this,r),Sr.applyNormalMatrix(t),this.setXYZ(r,Sr.x,Sr.y,Sr.z);return this}transformDirection(t){for(let r=0,i=this.count;r<i;r++)Sr.fromBufferAttribute(this,r),Sr.transformDirection(t),this.setXYZ(r,Sr.x,Sr.y,Sr.z);return this}getComponent(t,r){let i=this.array[t*this.data.stride+this.offset+r];return this.normalized&&(i=Ci(i,this.array)),i}setComponent(t,r,i){return this.normalized&&(i=xt(i,this.array)),this.data.array[t*this.data.stride+this.offset+r]=i,this}setX(t,r){return this.normalized&&(r=xt(r,this.array)),this.data.array[t*this.data.stride+this.offset]=r,this}setY(t,r){return this.normalized&&(r=xt(r,this.array)),this.data.array[t*this.data.stride+this.offset+1]=r,this}setZ(t,r){return this.normalized&&(r=xt(r,this.array)),this.data.array[t*this.data.stride+this.offset+2]=r,this}setW(t,r){return this.normalized&&(r=xt(r,this.array)),this.data.array[t*this.data.stride+this.offset+3]=r,this}getX(t){let r=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(r=Ci(r,this.array)),r}getY(t){let r=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(r=Ci(r,this.array)),r}getZ(t){let r=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(r=Ci(r,this.array)),r}getW(t){let r=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(r=Ci(r,this.array)),r}setXY(t,r,i){return t=t*this.data.stride+this.offset,this.normalized&&(r=xt(r,this.array),i=xt(i,this.array)),this.data.array[t+0]=r,this.data.array[t+1]=i,this}setXYZ(t,r,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(r=xt(r,this.array),i=xt(i,this.array),n=xt(n,this.array)),this.data.array[t+0]=r,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,r,i,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(r=xt(r,this.array),i=xt(i,this.array),n=xt(n,this.array),a=xt(a,this.array)),this.data.array[t+0]=r,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let r=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)r.push(this.data.array[n+a])}return new vr(new this.array.constructor(r),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new by(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let r=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)r.push(this.data.array[n+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:r,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ay=class extends Sa{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ms,qo=new L,gs=new L,vs=new L,_s=new ne,Yo=new ne,Cy=new bt,lc=new L,Ko=new L,uc=new L,g1=new ne,zp=new ne,v1=new ne,ys=class extends rr{constructor(e=new Ay){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new ir;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new PA(t,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new m1(r,3,0,!1)),ms.setAttribute("uv",new m1(r,2,3,!1))}this.geometry=ms,this.material=e,this.center=new ne(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),Cy.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-vs.z);let r=this.material.rotation,i,n;r!==0&&(n=Math.cos(r),i=Math.sin(r));let a=this.center;cc(lc.set(-.5,-.5,0),vs,a,gs,i,n),cc(Ko.set(.5,-.5,0),vs,a,gs,i,n),cc(uc.set(.5,.5,0),vs,a,gs,i,n),g1.set(0,0),zp.set(1,0),v1.set(1,1);let s=e.ray.intersectTriangle(lc,Ko,uc,!1,qo);if(s===null&&(cc(Ko.set(-.5,.5,0),vs,a,gs,i,n),zp.set(0,1),s=e.ray.intersectTriangle(lc,uc,Ko,!1,qo),s===null))return;let o=e.ray.origin.distanceTo(qo);o<e.near||o>e.far||t.push({distance:o,point:qo.clone(),uv:Ss.getInterpolation(qo,lc,Ko,uc,g1,zp,v1,new ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function cc(e,t,r,i,n,a){_s.subVectors(e,r).addScalar(.5).multiply(i),n!==void 0?(Yo.x=a*_s.x-n*_s.y,Yo.y=n*_s.x+a*_s.y):Yo.copy(_s),e.copy(t),e.x+=Yo.x,e.y+=Yo.y,e.applyMatrix4(Cy)}var NA=class extends ii{constructor(e=null,t=1,r=1,i,n,a,s,o,l=jr,u=jr,c,h){super(null,a,s,o,l,u,i,n,c,h),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_1=class extends vr{constructor(e,t,r,i=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},xs=new bt,y1=new bt,hc=[],x1=new Ma,LA=new bt,Jo=new Ve,Qo=new Hs,da=class extends Ve{constructor(e,t,r){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _1(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<r;i++)this.setMatrixAt(i,LA)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ma),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,xs),x1.copy(e.boundingBox).applyMatrix4(xs),this.boundingBox.union(x1)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,xs),Qo.copy(e.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(Qo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let r=t.morphTargetInfluences,i=this.morphTexture.source.data.data,n=r.length+1,a=e*n+1;for(let s=0;s<r.length;s++)r[s]=i[a+s]}raycast(e,t){let r=this.matrixWorld,i=this.count;if(Jo.geometry=this.geometry,Jo.material=this.material,Jo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qo.copy(this.boundingSphere),Qo.applyMatrix4(r),e.ray.intersectsSphere(Qo)!==!1))for(let n=0;n<i;n++){this.getMatrixAt(n,xs),y1.multiplyMatrices(r,xs),Jo.matrixWorld=y1,Jo.raycast(e,hc);for(let a=0,s=hc.length;a<s;a++){let o=hc[a];o.instanceId=n,o.object=this,t.push(o)}hc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _1(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let r=t.morphTargetInfluences,i=r.length+1;this.morphTexture===null&&(this.morphTexture=new NA(new Float32Array(i*this.count),i,this.count,Kf,Pi));let n=this.morphTexture.source.data.data,a=0;for(let l=0;l<r.length;l++)a+=r[l];let s=this.geometry.morphTargetsRelative?1:1-a,o=i*e;n[o]=s,n.set(r,o+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},Ff=class extends Sa{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},M1=new bt,zf=new oy,dc=new Hs,pc=new L,Bp=class extends rr{constructor(e=new ir,t=new Ff){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let r=this.geometry,i=this.matrixWorld,n=e.params.Points.threshold,a=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),dc.copy(r.boundingSphere),dc.applyMatrix4(i),dc.radius+=n,e.ray.intersectsSphere(dc)===!1)return;M1.copy(i).invert(),zf.copy(e.ray).applyMatrix4(M1);let s=n/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=r.index,u=r.attributes.position;if(l!==null){let c=Math.max(0,a.start),h=Math.min(l.count,a.start+a.count);for(let p=c,f=h;p<f;p++){let y=l.getX(p);pc.fromBufferAttribute(u,y),S1(pc,y,o,i,e,t,this)}}else{let c=Math.max(0,a.start),h=Math.min(u.count,a.start+a.count);for(let p=c,f=h;p<f;p++)pc.fromBufferAttribute(u,p),S1(pc,p,o,i,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,n=r.length;i<n;i++){let a=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}};function S1(e,t,r,i,n,a,s){let o=zf.distanceSqToPoint(e);if(o<r){let l=new L;zf.closestPointToPoint(e,l),l.applyMatrix4(i);let u=n.ray.origin.distanceTo(l);if(u<n.near||u>n.far)return;a.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var IA=class extends ii{constructor(e,t,r,i,n,a,s,o,l){super(e,t,r,i,n,a,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ni=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){let t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){let t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],r,i=this.getPoint(0),n=0;t.push(0);for(let a=1;a<=e;a++)r=this.getPoint(a/e),n+=r.distanceTo(i),t.push(n),i=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let r=this.getLengths(),i=0,n=r.length,a;t?a=t:a=e*r[n-1];let s=0,o=n-1,l;for(;s<=o;)if(i=Math.floor(s+(o-s)/2),l=r[i]-a,l<0)s=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,r[i]===a)return i/(n-1);let u=r[i],c=r[i+1]-u,h=(a-u)/c;return(i+h)/(n-1)}getTangent(e,t){let r=e-1e-4,i=e+1e-4;r<0&&(r=0),i>1&&(i=1);let n=this.getPoint(r),a=this.getPoint(i),s=t||(n.isVector2?new ne:new L);return s.copy(a).sub(n).normalize(),s}getTangentAt(e,t){let r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){let r=new L,i=[],n=[],a=[],s=new L,o=new bt;for(let p=0;p<=e;p++){let f=p/e;i[p]=this.getTangentAt(f,new L)}n[0]=new L,a[0]=new L;let l=Number.MAX_VALUE,u=Math.abs(i[0].x),c=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=l&&(l=u,r.set(1,0,0)),c<=l&&(l=c,r.set(0,1,0)),h<=l&&r.set(0,0,1),s.crossVectors(i[0],r).normalize(),n[0].crossVectors(i[0],s),a[0].crossVectors(i[0],n[0]);for(let p=1;p<=e;p++){if(n[p]=n[p-1].clone(),a[p]=a[p-1].clone(),s.crossVectors(i[p-1],i[p]),s.length()>Number.EPSILON){s.normalize();let f=Math.acos(tr(i[p-1].dot(i[p]),-1,1));n[p].applyMatrix4(o.makeRotationAxis(s,f))}a[p].crossVectors(i[p],n[p])}if(t===!0){let p=Math.acos(tr(n[0].dot(n[e]),-1,1));p/=e,i[0].dot(s.crossVectors(n[0],n[e]))>0&&(p=-p);for(let f=1;f<=e;f++)n[f].applyMatrix4(o.makeRotationAxis(i[f],p*f)),a[f].crossVectors(i[f],n[f])}return{tangents:i,normals:n,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},im=class extends Ni{constructor(e=0,t=0,r=1,i=1,n=0,a=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=i,this.aStartAngle=n,this.aEndAngle=a,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new ne){let r=t,i=Math.PI*2,n=this.aEndAngle-this.aStartAngle,a=Math.abs(n)<Number.EPSILON;for(;n<0;)n+=i;for(;n>i;)n-=i;n<Number.EPSILON&&(a?n=0:n=i),this.aClockwise===!0&&!a&&(n===i?n=-i:n=n-i);let s=this.aStartAngle+e*n,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let u=Math.cos(this.aRotation),c=Math.sin(this.aRotation),h=o-this.aX,p=l-this.aY;o=h*u-p*c+this.aX,l=h*c+p*u+this.aY}return r.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},DA=class extends im{constructor(e,t,r,i,n,a){super(e,t,r,r,i,n,a),this.isArcCurve=!0,this.type="ArcCurve"}};function nm(){let e=0,t=0,r=0,i=0;function n(a,s,o,l){e=a,t=o,r=-3*a+3*s-2*o-l,i=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,u){n(s,o,u*(o-a),u*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,u,c,h){let p=(s-a)/u-(o-a)/(u+c)+(o-s)/c,f=(o-s)/c-(l-s)/(c+h)+(l-o)/h;p*=c,f*=c,n(s,o,p,f)},calc:function(a){let s=a*a,o=s*a;return e+t*a+r*s+i*o}}}var fc=new L,Vp=new nm,Hp=new nm,Gp=new nm,UA=class extends Ni{constructor(e=[],t=!1,r="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=i}getPoint(e,t=new L){let r=t,i=this.points,n=i.length,a=(n-(this.closed?0:1))*e,s=Math.floor(a),o=a-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/n)+1)*n:o===0&&s===n-1&&(s=n-2,o=1);let l,u;this.closed||s>0?l=i[(s-1)%n]:(fc.subVectors(i[0],i[1]).add(i[0]),l=fc);let c=i[s%n],h=i[(s+1)%n];if(this.closed||s+2<n?u=i[(s+2)%n]:(fc.subVectors(i[n-1],i[n-2]).add(i[n-1]),u=fc),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(c),p),y=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(u),p);y<1e-4&&(y=1),f<1e-4&&(f=y),_<1e-4&&(_=y),Vp.initNonuniformCatmullRom(l.x,c.x,h.x,u.x,f,y,_),Hp.initNonuniformCatmullRom(l.y,c.y,h.y,u.y,f,y,_),Gp.initNonuniformCatmullRom(l.z,c.z,h.z,u.z,f,y,_)}else this.curveType==="catmullrom"&&(Vp.initCatmullRom(l.x,c.x,h.x,u.x,this.tension),Hp.initCatmullRom(l.y,c.y,h.y,u.y,this.tension),Gp.initCatmullRom(l.z,c.z,h.z,u.z,this.tension));return r.set(Vp.calc(o),Hp.calc(o),Gp.calc(o)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function E1(e,t,r,i,n){let a=(i-t)*.5,s=(n-r)*.5,o=e*e,l=e*o;return(2*r-2*i+a+s)*l+(-3*r+3*i-2*a-s)*o+a*e+r}function OA(e,t){let r=1-e;return r*r*t}function kA(e,t){return 2*(1-e)*e*t}function FA(e,t){return e*e*t}function nl(e,t,r,i){return OA(e,t)+kA(e,r)+FA(e,i)}function zA(e,t){let r=1-e;return r*r*r*t}function BA(e,t){let r=1-e;return 3*r*r*e*t}function VA(e,t){return 3*(1-e)*e*e*t}function HA(e,t){return e*e*e*t}function al(e,t,r,i,n){return zA(e,t)+BA(e,r)+VA(e,i)+HA(e,n)}var Ry=class extends Ni{constructor(e=new ne,t=new ne,r=new ne,i=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=i}getPoint(e,t=new ne){let r=t,i=this.v0,n=this.v1,a=this.v2,s=this.v3;return r.set(al(e,i.x,n.x,a.x,s.x),al(e,i.y,n.y,a.y,s.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},GA=class extends Ni{constructor(e=new L,t=new L,r=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=i}getPoint(e,t=new L){let r=t,i=this.v0,n=this.v1,a=this.v2,s=this.v3;return r.set(al(e,i.x,n.x,a.x,s.x),al(e,i.y,n.y,a.y,s.y),al(e,i.z,n.z,a.z,s.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Py=class extends Ni{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},WA=class extends Ni{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ny=class extends Ni{constructor(e=new ne,t=new ne,r=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new ne){let r=t,i=this.v0,n=this.v1,a=this.v2;return r.set(nl(e,i.x,n.x,a.x),nl(e,i.y,n.y,a.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ly=class extends Ni{constructor(e=new L,t=new L,r=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new L){let r=t,i=this.v0,n=this.v1,a=this.v2;return r.set(nl(e,i.x,n.x,a.x),nl(e,i.y,n.y,a.y),nl(e,i.z,n.z,a.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Iy=class extends Ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let r=t,i=this.points,n=(i.length-1)*e,a=Math.floor(n),s=n-a,o=i[a===0?a:a-1],l=i[a],u=i[a>i.length-2?i.length-1:a+1],c=i[a>i.length-3?i.length-1:a+2];return r.set(E1(s,o.x,l.x,u.x,c.x),E1(s,o.y,l.y,u.y,c.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(new ne().fromArray(i))}return this}},Bf=Object.freeze({__proto__:null,ArcCurve:DA,CatmullRomCurve3:UA,CubicBezierCurve:Ry,CubicBezierCurve3:GA,EllipseCurve:im,LineCurve:Py,LineCurve3:WA,QuadraticBezierCurve:Ny,QuadraticBezierCurve3:Ly,SplineCurve:Iy}),XA=class extends Ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bf[r](t,e))}return this}getPoint(e,t){let r=e*this.getLength(),i=this.getCurveLengths(),n=0;for(;n<i.length;){if(i[n]>=r){let a=i[n]-r,s=this.curves[n],o=s.getLength(),l=o===0?0:1-a/o;return s.getPointAt(l,t)}n++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let r=0,i=this.curves.length;r<i;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],r;for(let i=0,n=this.curves;i<n.length;i++){let a=n[i],s=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,o=a.getPoints(s);for(let l=0;l<o.length;l++){let u=o[l];r&&r.equals(u)||(t.push(u),r=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){let i=e.curves[t];this.curves.push(new Bf[i.type]().fromJSON(i))}return this}},sl=class extends XA{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let r=new Py(this.currentPoint.clone(),new ne(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,i){let n=new Ny(this.currentPoint.clone(),new ne(e,t),new ne(r,i));return this.curves.push(n),this.currentPoint.set(r,i),this}bezierCurveTo(e,t,r,i,n,a){let s=new Ry(this.currentPoint.clone(),new ne(e,t),new ne(r,i),new ne(n,a));return this.curves.push(s),this.currentPoint.set(n,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),r=new Iy(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,i,n,a){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,r,i,n,a),this}absarc(e,t,r,i,n,a){return this.absellipse(e,t,r,r,i,n,a),this}ellipse(e,t,r,i,n,a,s,o){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,r,i,n,a,s,o),this}absellipse(e,t,r,i,n,a,s,o){let l=new im(e,t,r,i,n,a,s,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},jA=class Dy extends ir{constructor(t=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],r=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:r,phiStart:i,phiLength:n},r=Math.floor(r),n=tr(n,0,Math.PI*2);let a=[],s=[],o=[],l=[],u=[],c=1/r,h=new L,p=new ne,f=new L,y=new L,_=new L,v=0,d=0;for(let g=0;g<=t.length-1;g++)switch(g){case 0:v=t[g+1].x-t[g].x,d=t[g+1].y-t[g].y,f.x=d*1,f.y=-v,f.z=d*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:v=t[g+1].x-t[g].x,d=t[g+1].y-t[g].y,f.x=d*1,f.y=-v,f.z=d*0,y.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(y)}for(let g=0;g<=r;g++){let m=i+g*c*n,x=Math.sin(m),P=Math.cos(m);for(let T=0;T<=t.length-1;T++){h.x=t[T].x*x,h.y=t[T].y,h.z=t[T].x*P,s.push(h.x,h.y,h.z),p.x=g/r,p.y=T/(t.length-1),o.push(p.x,p.y);let b=l[3*T+0]*x,R=l[3*T+1],E=l[3*T+0]*P;u.push(b,R,E)}}for(let g=0;g<r;g++)for(let m=0;m<t.length-1;m++){let x=m+g*t.length,P=x,T=x+t.length,b=x+t.length+1,R=x+1;a.push(P,T,R),a.push(b,R,T)}this.setIndex(a),this.setAttribute("position",new _t(s,3)),this.setAttribute("uv",new _t(o,2)),this.setAttribute("normal",new _t(u,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dy(t.points,t.segments,t.phiStart,t.phiLength)}},Vf=class Uy extends ir{constructor(t=1,r=1,i=1,n=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:r,height:i,radialSegments:n,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};let u=this;n=Math.floor(n),a=Math.floor(a);let c=[],h=[],p=[],f=[],y=0,_=[],v=i/2,d=0;g(),s===!1&&(t>0&&m(!0),r>0&&m(!1)),this.setIndex(c),this.setAttribute("position",new _t(h,3)),this.setAttribute("normal",new _t(p,3)),this.setAttribute("uv",new _t(f,2));function g(){let x=new L,P=new L,T=0,b=(r-t)/i;for(let R=0;R<=a;R++){let E=[],M=R/a,N=M*(r-t)+t;for(let k=0;k<=n;k++){let V=k/n,W=V*l+o,j=Math.sin(W),X=Math.cos(W);P.x=N*j,P.y=-M*i+v,P.z=N*X,h.push(P.x,P.y,P.z),x.set(j,b,X).normalize(),p.push(x.x,x.y,x.z),f.push(V,1-M),E.push(y++)}_.push(E)}for(let R=0;R<n;R++)for(let E=0;E<a;E++){let M=_[E][R],N=_[E+1][R],k=_[E+1][R+1],V=_[E][R+1];(t>0||E!==0)&&(c.push(M,N,V),T+=3),(r>0||E!==a-1)&&(c.push(N,k,V),T+=3)}u.addGroup(d,T,0),d+=T}function m(x){let P=y,T=new ne,b=new L,R=0,E=x===!0?t:r,M=x===!0?1:-1;for(let k=1;k<=n;k++)h.push(0,v*M,0),p.push(0,M,0),f.push(.5,.5),y++;let N=y;for(let k=0;k<=n;k++){let V=k/n*l+o,W=Math.cos(V),j=Math.sin(V);b.x=E*j,b.y=v*M,b.z=E*W,h.push(b.x,b.y,b.z),p.push(0,M,0),T.x=W*.5+.5,T.y=j*.5*M+.5,f.push(T.x,T.y),y++}for(let k=0;k<n;k++){let V=P+k,W=N+k;x===!0?c.push(W,W+1,V):c.push(W+1,W,V),R+=3}u.addGroup(d,R,x===!0?1:2),d+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uy(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Zo=class Oy extends Vf{constructor(t=1,r=1,i=32,n=1,a=!1,s=0,o=Math.PI*2){super(0,t,r,i,n,a,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:r,radialSegments:i,heightSegments:n,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(t){return new Oy(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},$A=class ky extends ir{constructor(t=[],r=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:r,radius:i,detail:n};let a=[],s=[];o(n),u(i),c(),this.setAttribute("position",new _t(a,3)),this.setAttribute("normal",new _t(a.slice(),3)),this.setAttribute("uv",new _t(s,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(g){let m=new L,x=new L,P=new L;for(let T=0;T<r.length;T+=3)f(r[T+0],m),f(r[T+1],x),f(r[T+2],P),l(m,x,P,g)}function l(g,m,x,P){let T=P+1,b=[];for(let R=0;R<=T;R++){b[R]=[];let E=g.clone().lerp(x,R/T),M=m.clone().lerp(x,R/T),N=T-R;for(let k=0;k<=N;k++)k===0&&R===T?b[R][k]=E:b[R][k]=E.clone().lerp(M,k/N)}for(let R=0;R<T;R++)for(let E=0;E<2*(T-R)-1;E++){let M=Math.floor(E/2);E%2===0?(p(b[R][M+1]),p(b[R+1][M]),p(b[R][M])):(p(b[R][M+1]),p(b[R+1][M+1]),p(b[R+1][M]))}}function u(g){let m=new L;for(let x=0;x<a.length;x+=3)m.x=a[x+0],m.y=a[x+1],m.z=a[x+2],m.normalize().multiplyScalar(g),a[x+0]=m.x,a[x+1]=m.y,a[x+2]=m.z}function c(){let g=new L;for(let m=0;m<a.length;m+=3){g.x=a[m+0],g.y=a[m+1],g.z=a[m+2];let x=v(g)/2/Math.PI+.5,P=d(g)/Math.PI+.5;s.push(x,1-P)}y(),h()}function h(){for(let g=0;g<s.length;g+=6){let m=s[g+0],x=s[g+2],P=s[g+4],T=Math.max(m,x,P),b=Math.min(m,x,P);T>.9&&b<.1&&(m<.2&&(s[g+0]+=1),x<.2&&(s[g+2]+=1),P<.2&&(s[g+4]+=1))}}function p(g){a.push(g.x,g.y,g.z)}function f(g,m){let x=g*3;m.x=t[x+0],m.y=t[x+1],m.z=t[x+2]}function y(){let g=new L,m=new L,x=new L,P=new L,T=new ne,b=new ne,R=new ne;for(let E=0,M=0;E<a.length;E+=9,M+=6){g.set(a[E+0],a[E+1],a[E+2]),m.set(a[E+3],a[E+4],a[E+5]),x.set(a[E+6],a[E+7],a[E+8]),T.set(s[M+0],s[M+1]),b.set(s[M+2],s[M+3]),R.set(s[M+4],s[M+5]),P.copy(g).add(m).add(x).divideScalar(3);let N=v(P);_(T,M+0,g,N),_(b,M+2,m,N),_(R,M+4,x,N)}}function _(g,m,x,P){P<0&&g.x===1&&(s[m]=g.x-1),x.x===0&&x.z===0&&(s[m]=P/2/Math.PI+.5)}function v(g){return Math.atan2(g.z,-g.x)}function d(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ky(t.vertices,t.indices,t.radius,t.details)}},gi=class extends sl{constructor(e){super(e),this.uuid=tn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let r=0,i=this.holes.length;r<i;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){let i=e.holes[t];this.holes.push(new sl().fromJSON(i))}return this}},qA={triangulate:function(e,t,r=2){let i=t&&t.length,n=i?t[0]*r:e.length,a=Fy(e,0,n,r,!0),s=[];if(!a||a.next===a.prev)return s;let o,l,u,c,h,p,f;if(i&&(a=ZA(e,t,a,r)),e.length>80*r){o=u=e[0],l=c=e[1];for(let y=r;y<n;y+=r)h=e[y],p=e[y+1],h<o&&(o=h),p<l&&(l=p),h>u&&(u=h),p>c&&(c=p);f=Math.max(u-o,c-l),f=f!==0?32767/f:0}return ul(a,s,r,o,l,f,0),s}};function Fy(e,t,r,i,n){let a,s;if(n===cC(e,t,r,i)>0)for(a=t;a<r;a+=i)s=w1(a,e[a],e[a+1],s);else for(a=r-i;a>=t;a-=i)s=w1(a,e[a],e[a+1],s);return s&&Oc(s,s.next)&&(hl(s),s=s.next),s}function xa(e,t){if(!e)return e;t||(t=e);let r=e,i;do if(i=!1,!r.steiner&&(Oc(r,r.next)||Ft(r.prev,r,r.next)===0)){if(hl(r),r=t=r.prev,r===r.next)break;i=!0}else r=r.next;while(i||r!==t);return t}function ul(e,t,r,i,n,a,s){if(!e)return;!s&&a&&nC(e,i,n,a);let o=e,l,u;for(;e.prev!==e.next;){if(l=e.prev,u=e.next,a?KA(e,i,n,a):YA(e)){t.push(l.i/r|0),t.push(e.i/r|0),t.push(u.i/r|0),hl(e),e=u.next,o=u.next;continue}if(e=u,e===o){s?s===1?(e=JA(xa(e),t,r),ul(e,t,r,i,n,a,2)):s===2&&QA(e,t,r,i,n,a):ul(xa(e),t,r,i,n,a,1);break}}}function YA(e){let t=e.prev,r=e,i=e.next;if(Ft(t,r,i)>=0)return!1;let n=t.x,a=r.x,s=i.x,o=t.y,l=r.y,u=i.y,c=n<a?n<s?n:s:a<s?a:s,h=o<l?o<u?o:u:l<u?l:u,p=n>a?n>s?n:s:a>s?a:s,f=o>l?o>u?o:u:l>u?l:u,y=i.next;for(;y!==t;){if(y.x>=c&&y.x<=p&&y.y>=h&&y.y<=f&&As(n,o,a,l,s,u,y.x,y.y)&&Ft(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function KA(e,t,r,i){let n=e.prev,a=e,s=e.next;if(Ft(n,a,s)>=0)return!1;let o=n.x,l=a.x,u=s.x,c=n.y,h=a.y,p=s.y,f=o<l?o<u?o:u:l<u?l:u,y=c<h?c<p?c:p:h<p?h:p,_=o>l?o>u?o:u:l>u?l:u,v=c>h?c>p?c:p:h>p?h:p,d=Hf(f,y,t,r,i),g=Hf(_,v,t,r,i),m=e.prevZ,x=e.nextZ;for(;m&&m.z>=d&&x&&x.z<=g;){if(m.x>=f&&m.x<=_&&m.y>=y&&m.y<=v&&m!==n&&m!==s&&As(o,c,l,h,u,p,m.x,m.y)&&Ft(m.prev,m,m.next)>=0||(m=m.prevZ,x.x>=f&&x.x<=_&&x.y>=y&&x.y<=v&&x!==n&&x!==s&&As(o,c,l,h,u,p,x.x,x.y)&&Ft(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;m&&m.z>=d;){if(m.x>=f&&m.x<=_&&m.y>=y&&m.y<=v&&m!==n&&m!==s&&As(o,c,l,h,u,p,m.x,m.y)&&Ft(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;x&&x.z<=g;){if(x.x>=f&&x.x<=_&&x.y>=y&&x.y<=v&&x!==n&&x!==s&&As(o,c,l,h,u,p,x.x,x.y)&&Ft(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function JA(e,t,r){let i=e;do{let n=i.prev,a=i.next.next;!Oc(n,a)&&zy(n,i,i.next,a)&&cl(n,a)&&cl(a,n)&&(t.push(n.i/r|0),t.push(i.i/r|0),t.push(a.i/r|0),hl(i),hl(i.next),i=e=a),i=i.next}while(i!==e);return xa(i)}function QA(e,t,r,i,n,a){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&oC(s,o)){let l=By(s,o);s=xa(s,s.next),l=xa(l,l.next),ul(s,t,r,i,n,a,0),ul(l,t,r,i,n,a,0);return}o=o.next}s=s.next}while(s!==e)}function ZA(e,t,r,i){let n=[],a,s,o,l,u;for(a=0,s=t.length;a<s;a++)o=t[a]*i,l=a<s-1?t[a+1]*i:e.length,u=Fy(e,o,l,i,!1),u===u.next&&(u.steiner=!0),n.push(sC(u));for(n.sort(eC),a=0;a<n.length;a++)r=tC(n[a],r);return r}function eC(e,t){return e.x-t.x}function tC(e,t){let r=rC(e,t);if(!r)return t;let i=By(r,e);return xa(i,i.next),xa(r,r.next)}function rC(e,t){let r=t,i=-1/0,n,a=e.x,s=e.y;do{if(s<=r.y&&s>=r.next.y&&r.next.y!==r.y){let p=r.x+(s-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(p<=a&&p>i&&(i=p,n=r.x<r.next.x?r:r.next,p===a))return n}r=r.next}while(r!==t);if(!n)return null;let o=n,l=n.x,u=n.y,c=1/0,h;r=n;do a>=r.x&&r.x>=l&&a!==r.x&&As(s<u?a:i,s,l,u,s<u?i:a,s,r.x,r.y)&&(h=Math.abs(s-r.y)/(a-r.x),cl(r,e)&&(h<c||h===c&&(r.x>n.x||r.x===n.x&&iC(n,r)))&&(n=r,c=h)),r=r.next;while(r!==o);return n}function iC(e,t){return Ft(e.prev,e,t.prev)<0&&Ft(t.next,e,e.next)<0}function nC(e,t,r,i){let n=e;do n.z===0&&(n.z=Hf(n.x,n.y,t,r,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==e);n.prevZ.nextZ=null,n.prevZ=null,aC(n)}function aC(e){let t,r,i,n,a,s,o,l,u=1;do{for(r=e,e=null,a=null,s=0;r;){for(s++,i=r,o=0,t=0;t<u&&(o++,i=i.nextZ,!!i);t++);for(l=u;o>0||l>0&&i;)o!==0&&(l===0||!i||r.z<=i.z)?(n=r,r=r.nextZ,o--):(n=i,i=i.nextZ,l--),a?a.nextZ=n:e=n,n.prevZ=a,a=n;r=i}a.nextZ=null,u*=2}while(s>1);return e}function Hf(e,t,r,i,n){return e=(e-r)*n|0,t=(t-i)*n|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function sC(e){let t=e,r=e;do(t.x<r.x||t.x===r.x&&t.y<r.y)&&(r=t),t=t.next;while(t!==e);return r}function As(e,t,r,i,n,a,s,o){return(n-s)*(t-o)>=(e-s)*(a-o)&&(e-s)*(i-o)>=(r-s)*(t-o)&&(r-s)*(a-o)>=(n-s)*(i-o)}function oC(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!lC(e,t)&&(cl(e,t)&&cl(t,e)&&uC(e,t)&&(Ft(e.prev,e,t.prev)||Ft(e,t.prev,t))||Oc(e,t)&&Ft(e.prev,e,e.next)>0&&Ft(t.prev,t,t.next)>0)}function Ft(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function Oc(e,t){return e.x===t.x&&e.y===t.y}function zy(e,t,r,i){let n=gc(Ft(e,t,r)),a=gc(Ft(e,t,i)),s=gc(Ft(r,i,e)),o=gc(Ft(r,i,t));return!!(n!==a&&s!==o||n===0&&mc(e,r,t)||a===0&&mc(e,i,t)||s===0&&mc(r,e,i)||o===0&&mc(r,t,i))}function mc(e,t,r){return t.x<=Math.max(e.x,r.x)&&t.x>=Math.min(e.x,r.x)&&t.y<=Math.max(e.y,r.y)&&t.y>=Math.min(e.y,r.y)}function gc(e){return e>0?1:e<0?-1:0}function lC(e,t){let r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&zy(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}function cl(e,t){return Ft(e.prev,e,e.next)<0?Ft(e,t,e.next)>=0&&Ft(e,e.prev,t)>=0:Ft(e,t,e.prev)<0||Ft(e,e.next,t)<0}function uC(e,t){let r=e,i=!1,n=(e.x+t.x)/2,a=(e.y+t.y)/2;do r.y>a!=r.next.y>a&&r.next.y!==r.y&&n<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next;while(r!==e);return i}function By(e,t){let r=new Gf(e.i,e.x,e.y),i=new Gf(t.i,t.x,t.y),n=e.next,a=t.prev;return e.next=t,t.prev=e,r.next=n,n.prev=r,i.next=r,r.prev=i,a.next=i,i.prev=a,i}function w1(e,t,r,i){let n=new Gf(e,t,r);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function hl(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Gf(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function cC(e,t,r,i){let n=0;for(let a=t,s=r-i;a<r;a+=i)n+=(e[s]-e[a])*(e[a+1]+e[s+1]),s=a;return n}var Ls=class Vy{static area(t){let r=t.length,i=0;for(let n=r-1,a=0;a<r;n=a++)i+=t[n].x*t[a].y-t[a].x*t[n].y;return i*.5}static isClockWise(t){return Vy.area(t)<0}static triangulateShape(t,r){let i=[],n=[],a=[];T1(t),b1(i,t);let s=t.length;r.forEach(T1);for(let l=0;l<r.length;l++)n.push(s),s+=r[l].length,b1(i,r[l]);let o=qA.triangulate(i,n);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}};function T1(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function b1(e,t){for(let r=0;r<t.length;r++)e.push(t[r].x),e.push(t[r].y)}var vc=class Hy extends ir{constructor(t=new gi([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),r={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:r},t=Array.isArray(t)?t:[t];let i=this,n=[],a=[];for(let o=0,l=t.length;o<l;o++){let u=t[o];s(u)}this.setAttribute("position",new _t(n,3)),this.setAttribute("uv",new _t(a,2)),this.computeVertexNormals();function s(o){let l=[],u=r.curveSegments!==void 0?r.curveSegments:12,c=r.steps!==void 0?r.steps:1,h=r.depth!==void 0?r.depth:1,p=r.bevelEnabled!==void 0?r.bevelEnabled:!0,f=r.bevelThickness!==void 0?r.bevelThickness:.2,y=r.bevelSize!==void 0?r.bevelSize:f-.1,_=r.bevelOffset!==void 0?r.bevelOffset:0,v=r.bevelSegments!==void 0?r.bevelSegments:3,d=r.extrudePath,g=r.UVGenerator!==void 0?r.UVGenerator:hC,m,x=!1,P,T,b,R;d&&(m=d.getSpacedPoints(c),x=!0,p=!1,P=d.computeFrenetFrames(c,!1),T=new L,b=new L,R=new L),p||(v=0,f=0,y=0,_=0);let E=o.extractPoints(u),M=E.shape,N=E.holes;if(!Ls.isClockWise(M)){M=M.reverse();for(let Q=0,fe=N.length;Q<fe;Q++){let C=N[Q];Ls.isClockWise(C)&&(N[Q]=C.reverse())}}let k=Ls.triangulateShape(M,N),V=M;for(let Q=0,fe=N.length;Q<fe;Q++){let C=N[Q];M=M.concat(C)}function W(Q,fe,C){return fe||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(fe,C)}let j=M.length,X=k.length;function ae(Q,fe,C){let Ce,ce,Ie,le=Q.x-fe.x,He=Q.y-fe.y,Te=C.x-Q.x,be=C.y-Q.y,A=le*le+He*He,S=le*be-He*Te;if(Math.abs(S)>Number.EPSILON){let F=Math.sqrt(A),J=Math.sqrt(Te*Te+be*be),ee=fe.x-He/F,q=fe.y+le/F,Fe=C.x-be/J,xe=C.y+Te/J,Me=((Fe-ee)*be-(xe-q)*Te)/(le*be-He*Te);Ce=ee+le*Me-Q.x,ce=q+He*Me-Q.y;let Xe=Ce*Ce+ce*ce;if(Xe<=2)return new ne(Ce,ce);Ie=Math.sqrt(Xe/2)}else{let F=!1;le>Number.EPSILON?Te>Number.EPSILON&&(F=!0):le<-Number.EPSILON?Te<-Number.EPSILON&&(F=!0):Math.sign(He)===Math.sign(be)&&(F=!0),F?(Ce=-He,ce=le,Ie=Math.sqrt(A)):(Ce=le,ce=He,Ie=Math.sqrt(A/2))}return new ne(Ce/Ie,ce/Ie)}let $=[];for(let Q=0,fe=V.length,C=fe-1,Ce=Q+1;Q<fe;Q++,C++,Ce++)C===fe&&(C=0),Ce===fe&&(Ce=0),$[Q]=ae(V[Q],V[C],V[Ce]);let pe=[],Se,Je=$.concat();for(let Q=0,fe=N.length;Q<fe;Q++){let C=N[Q];Se=[];for(let Ce=0,ce=C.length,Ie=ce-1,le=Ce+1;Ce<ce;Ce++,Ie++,le++)Ie===ce&&(Ie=0),le===ce&&(le=0),Se[Ce]=ae(C[Ce],C[Ie],C[le]);pe.push(Se),Je=Je.concat(Se)}for(let Q=0;Q<v;Q++){let fe=Q/v,C=f*Math.cos(fe*Math.PI/2),Ce=y*Math.sin(fe*Math.PI/2)+_;for(let ce=0,Ie=V.length;ce<Ie;ce++){let le=W(V[ce],$[ce],Ce);Le(le.x,le.y,-C)}for(let ce=0,Ie=N.length;ce<Ie;ce++){let le=N[ce];Se=pe[ce];for(let He=0,Te=le.length;He<Te;He++){let be=W(le[He],Se[He],Ce);Le(be.x,be.y,-C)}}}let et=y+_;for(let Q=0;Q<j;Q++){let fe=p?W(M[Q],Je[Q],et):M[Q];x?(b.copy(P.normals[0]).multiplyScalar(fe.x),T.copy(P.binormals[0]).multiplyScalar(fe.y),R.copy(m[0]).add(b).add(T),Le(R.x,R.y,R.z)):Le(fe.x,fe.y,0)}for(let Q=1;Q<=c;Q++)for(let fe=0;fe<j;fe++){let C=p?W(M[fe],Je[fe],et):M[fe];x?(b.copy(P.normals[Q]).multiplyScalar(C.x),T.copy(P.binormals[Q]).multiplyScalar(C.y),R.copy(m[Q]).add(b).add(T),Le(R.x,R.y,R.z)):Le(C.x,C.y,h/c*Q)}for(let Q=v-1;Q>=0;Q--){let fe=Q/v,C=f*Math.cos(fe*Math.PI/2),Ce=y*Math.sin(fe*Math.PI/2)+_;for(let ce=0,Ie=V.length;ce<Ie;ce++){let le=W(V[ce],$[ce],Ce);Le(le.x,le.y,h+C)}for(let ce=0,Ie=N.length;ce<Ie;ce++){let le=N[ce];Se=pe[ce];for(let He=0,Te=le.length;He<Te;He++){let be=W(le[He],Se[He],Ce);x?Le(be.x,be.y+m[c-1].y,m[c-1].x+C):Le(be.x,be.y,h+C)}}}K(),he();function K(){let Q=n.length/3;if(p){let fe=0,C=j*fe;for(let Ce=0;Ce<X;Ce++){let ce=k[Ce];ve(ce[2]+C,ce[1]+C,ce[0]+C)}fe=c+v*2,C=j*fe;for(let Ce=0;Ce<X;Ce++){let ce=k[Ce];ve(ce[0]+C,ce[1]+C,ce[2]+C)}}else{for(let fe=0;fe<X;fe++){let C=k[fe];ve(C[2],C[1],C[0])}for(let fe=0;fe<X;fe++){let C=k[fe];ve(C[0]+j*c,C[1]+j*c,C[2]+j*c)}}i.addGroup(Q,n.length/3-Q,0)}function he(){let Q=n.length/3,fe=0;Ue(V,fe),fe+=V.length;for(let C=0,Ce=N.length;C<Ce;C++){let ce=N[C];Ue(ce,fe),fe+=ce.length}i.addGroup(Q,n.length/3-Q,1)}function Ue(Q,fe){let C=Q.length;for(;--C>=0;){let Ce=C,ce=C-1;ce<0&&(ce=Q.length-1);for(let Ie=0,le=c+v*2;Ie<le;Ie++){let He=j*Ie,Te=j*(Ie+1),be=fe+Ce+He,A=fe+ce+He,S=fe+ce+Te,F=fe+Ce+Te;$e(be,A,S,F)}}}function Le(Q,fe,C){l.push(Q),l.push(fe),l.push(C)}function ve(Q,fe,C){rt(Q),rt(fe),rt(C);let Ce=n.length/3,ce=g.generateTopUV(i,n,Ce-3,Ce-2,Ce-1);Ke(ce[0]),Ke(ce[1]),Ke(ce[2])}function $e(Q,fe,C,Ce){rt(Q),rt(fe),rt(Ce),rt(fe),rt(C),rt(Ce);let ce=n.length/3,Ie=g.generateSideWallUV(i,n,ce-6,ce-3,ce-2,ce-1);Ke(Ie[0]),Ke(Ie[1]),Ke(Ie[3]),Ke(Ie[1]),Ke(Ie[2]),Ke(Ie[3])}function rt(Q){n.push(l[Q*3+0]),n.push(l[Q*3+1]),n.push(l[Q*3+2])}function Ke(Q){a.push(Q.x),a.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),r=this.parameters.shapes,i=this.parameters.options;return dC(r,i,t)}static fromJSON(t,r){let i=[];for(let a=0,s=t.shapes.length;a<s;a++){let o=r[t.shapes[a]];i.push(o)}let n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new Bf[n.type]().fromJSON(n)),new Hy(i,t.options)}},hC={generateTopUV:function(e,t,r,i,n){let a=t[r*3],s=t[r*3+1],o=t[i*3],l=t[i*3+1],u=t[n*3],c=t[n*3+1];return[new ne(a,s),new ne(o,l),new ne(u,c)]},generateSideWallUV:function(e,t,r,i,n,a){let s=t[r*3],o=t[r*3+1],l=t[r*3+2],u=t[i*3],c=t[i*3+1],h=t[i*3+2],p=t[n*3],f=t[n*3+1],y=t[n*3+2],_=t[a*3],v=t[a*3+1],d=t[a*3+2];return Math.abs(o-c)<Math.abs(s-u)?[new ne(s,1-l),new ne(u,1-h),new ne(p,1-y),new ne(_,1-d)]:[new ne(o,1-l),new ne(c,1-h),new ne(f,1-y),new ne(v,1-d)]}};function dC(e,t,r){if(r.shapes=[],Array.isArray(e))for(let i=0,n=e.length;i<n;i++){let a=e[i];r.shapes.push(a.uuid)}else r.shapes.push(e.uuid);return r.options=Object.assign({},t),t.extrudePath!==void 0&&(r.options.extrudePath=t.extrudePath.toJSON()),r}var A1=class Gy extends $A{constructor(t=1,r=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,a,t,r),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:r}}static fromJSON(t){return new Gy(t.radius,t.detail)}},_c=class Wy extends ir{constructor(t=new gi([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),r=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:r};let i=[],n=[],a=[],s=[],o=0,l=0;if(Array.isArray(t)===!1)u(t);else for(let c=0;c<t.length;c++)u(t[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new _t(n,3)),this.setAttribute("normal",new _t(a,3)),this.setAttribute("uv",new _t(s,2));function u(c){let h=n.length/3,p=c.extractPoints(r),f=p.shape,y=p.holes;Ls.isClockWise(f)===!1&&(f=f.reverse());for(let v=0,d=y.length;v<d;v++){let g=y[v];Ls.isClockWise(g)===!0&&(y[v]=g.reverse())}let _=Ls.triangulateShape(f,y);for(let v=0,d=y.length;v<d;v++){let g=y[v];f=f.concat(g)}for(let v=0,d=f.length;v<d;v++){let g=f[v];n.push(g.x,g.y,0),a.push(0,0,1),s.push(g.x,g.y)}for(let v=0,d=_.length;v<d;v++){let g=_[v],m=g[0]+h,x=g[1]+h,P=g[2]+h;i.push(m,x,P),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),r=this.parameters.shapes;return pC(r,t)}static fromJSON(t,r){let i=[];for(let n=0,a=t.shapes.length;n<a;n++){let s=r[t.shapes[n]];i.push(s)}return new Wy(i,t.curveSegments)}};function pC(e,t){if(t.shapes=[],Array.isArray(e))for(let r=0,i=e.length;r<i;r++){let n=e[r];t.shapes.push(n.uuid)}else t.shapes.push(e.uuid);return t}var On=class Xy extends ir{constructor(t=1,r=32,i=16,n=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:r,heightSegments:i,phiStart:n,phiLength:a,thetaStart:s,thetaLength:o},r=Math.max(3,Math.floor(r)),i=Math.max(2,Math.floor(i));let l=Math.min(s+o,Math.PI),u=0,c=[],h=new L,p=new L,f=[],y=[],_=[],v=[];for(let d=0;d<=i;d++){let g=[],m=d/i,x=0;d===0&&s===0?x=.5/r:d===i&&l===Math.PI&&(x=-.5/r);for(let P=0;P<=r;P++){let T=P/r;h.x=-t*Math.cos(n+T*a)*Math.sin(s+m*o),h.y=t*Math.cos(s+m*o),h.z=t*Math.sin(n+T*a)*Math.sin(s+m*o),y.push(h.x,h.y,h.z),p.copy(h).normalize(),_.push(p.x,p.y,p.z),v.push(T+x,1-m),g.push(u++)}c.push(g)}for(let d=0;d<i;d++)for(let g=0;g<r;g++){let m=c[d][g+1],x=c[d][g],P=c[d+1][g],T=c[d+1][g+1];(d!==0||s>0)&&f.push(m,x,T),(d!==i-1||l<Math.PI)&&f.push(x,P,T)}this.setIndex(f),this.setAttribute("position",new _t(y,3)),this.setAttribute("normal",new _t(_,3)),this.setAttribute("uv",new _t(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xy(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},C1=class jy extends ir{constructor(t=1,r=.4,i=12,n=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:r,radialSegments:i,tubularSegments:n,arc:a},i=Math.floor(i),n=Math.floor(n);let s=[],o=[],l=[],u=[],c=new L,h=new L,p=new L;for(let f=0;f<=i;f++)for(let y=0;y<=n;y++){let _=y/n*a,v=f/i*Math.PI*2;h.x=(t+r*Math.cos(v))*Math.cos(_),h.y=(t+r*Math.cos(v))*Math.sin(_),h.z=r*Math.sin(v),o.push(h.x,h.y,h.z),c.x=t*Math.cos(_),c.y=t*Math.sin(_),p.subVectors(h,c).normalize(),l.push(p.x,p.y,p.z),u.push(y/n),u.push(f/i)}for(let f=1;f<=i;f++)for(let y=1;y<=n;y++){let _=(n+1)*f+y-1,v=(n+1)*(f-1)+y-1,d=(n+1)*(f-1)+y,g=(n+1)*f+y;s.push(_,v,g),s.push(v,d,g)}this.setIndex(s),this.setAttribute("position",new _t(o,3)),this.setAttribute("normal",new _t(l,3)),this.setAttribute("uv",new _t(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jy(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},fC=class extends or{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},gr=class extends Sa{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Q1,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},mC=class extends gr{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tr(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function yc(e,t,r){return!e||!r&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function gC(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var kc=class{constructor(e,t,r,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(r),this.sampleValues=t,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,r=this._cachedIndex,i=t[r],n=t[r-1];e:{t:{let a;r:{i:if(!(e<i)){for(let s=r+2;;){if(i===void 0){if(e<n)break i;return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===s)break;if(n=i,i=t[++r],e<i)break t}a=t.length;break r}if(!(e>=n)){let s=t[1];e<s&&(r=2,n=s);for(let o=r-2;;){if(n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===o)break;if(i=n,n=t[--r-1],e>=n)break t}a=r,r=0;break r}break e}for(;r<a;){let s=r+a>>>1;e<t[s]?a=s:r=s+1}if(i=t[r],n=t[r-1],n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,n,i)}return this.interpolate_(r,n,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,r=this.sampleValues,i=this.valueSize,n=e*i;for(let a=0;a!==i;++a)t[a]=r[n+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vC=class extends kc{constructor(e,t,r,i){super(e,t,r,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:y_,endingEnd:y_}}intervalChanged_(e,t,r){let i=this.parameterPositions,n=e-2,a=e+1,s=i[n],o=i[a];if(s===void 0)switch(this.getSettings_().endingStart){case x_:n=e,s=2*t-r;break;case M_:n=i.length-2,s=t+i[n]-i[n+1];break;default:n=e,s=r}if(o===void 0)switch(this.getSettings_().endingEnd){case x_:a=e,o=2*r-t;break;case M_:a=1,o=r+i[1]-i[0];break;default:a=e-1,o=t}let l=(r-t)*.5,u=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-r),this._offsetPrev=n*u,this._offsetNext=a*u}interpolate_(e,t,r,i){let n=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,u=this._offsetPrev,c=this._offsetNext,h=this._weightPrev,p=this._weightNext,f=(r-t)/(i-t),y=f*f,_=y*f,v=-h*_+2*h*y-h*f,d=(1+h)*_+(-1.5-2*h)*y+(-.5+h)*f+1,g=(-1-p)*_+(1.5+p)*y+.5*f,m=p*_-p*y;for(let x=0;x!==s;++x)n[x]=v*a[u+x]+d*a[l+x]+g*a[o+x]+m*a[c+x];return n}},_C=class extends kc{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e,t,r,i){let n=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,u=(r-t)/(i-t),c=1-u;for(let h=0;h!==s;++h)n[h]=a[l+h]*c+a[o+h]*u;return n}},yC=class extends kc{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e){return this.copySampleValue_(e-1)}},sn=class{constructor(e,t,r,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yc(t,this.TimeBufferType),this.values=yc(r,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,r;if(t.toJSON!==this.toJSON)r=t.toJSON(e);else{r={name:e.name,times:yc(e.times,Array),values:yc(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(r.interpolation=i)}return r.type=e.ValueTypeName,r}InterpolantFactoryMethodDiscrete(e){return new yC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _C(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vC(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Pc:t=this.InterpolantFactoryMethodDiscrete;break;case Lf:t=this.InterpolantFactoryMethodLinear;break;case up:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return console.warn("THREE.KeyframeTrack:",r),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pc;case this.InterpolantFactoryMethodLinear:return Lf;case this.InterpolantFactoryMethodSmooth:return up}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let r=0,i=t.length;r!==i;++r)t[r]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let r=0,i=t.length;r!==i;++r)t[r]*=e}return this}trim(e,t){let r=this.times,i=r.length,n=0,a=i-1;for(;n!==i&&r[n]<e;)++n;for(;a!==-1&&r[a]>t;)--a;if(++a,n!==0||a!==i){n>=a&&(a=Math.max(a,1),n=a-1);let s=this.getValueSize();this.times=r.slice(n,a),this.values=this.values.slice(n*s,a*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let r=this.times,i=this.values,n=r.length;n===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let s=0;s!==n;s++){let o=r[s];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(a!==null&&a>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,o,a),e=!1;break}a=o}if(i!==void 0&&gC(i))for(let s=0,o=i.length;s!==o;++s){let l=i[s];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),r=this.getValueSize(),i=this.getInterpolation()===up,n=e.length-1,a=1;for(let s=1;s<n;++s){let o=!1,l=e[s],u=e[s+1];if(l!==u&&(s!==1||l!==e[0]))if(i)o=!0;else{let c=s*r,h=c-r,p=c+r;for(let f=0;f!==r;++f){let y=t[c+f];if(y!==t[h+f]||y!==t[p+f]){o=!0;break}}}if(o){if(s!==a){e[a]=e[s];let c=s*r,h=a*r;for(let p=0;p!==r;++p)t[h+p]=t[c+p]}++a}}if(n>0){e[a]=e[n];for(let s=n*r,o=a*r,l=0;l!==r;++l)t[o+l]=t[s+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*r)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),r=this.constructor,i=new r(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=Lf;var dl=class extends sn{constructor(e,t,r){super(e,t,r)}};dl.prototype.ValueTypeName="bool";dl.prototype.ValueBufferType=Array;dl.prototype.DefaultInterpolation=Pc;dl.prototype.InterpolantFactoryMethodLinear=void 0;dl.prototype.InterpolantFactoryMethodSmooth=void 0;var xC=class extends sn{};xC.prototype.ValueTypeName="color";var MC=class extends sn{};MC.prototype.ValueTypeName="number";var SC=class extends kc{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e,t,r,i){let n=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=(r-t)/(i-t),l=e*s;for(let u=l+s;l!==u;l+=4)Vs.slerpFlat(n,0,a,l-s,a,l,o);return n}},$y=class extends sn{InterpolantFactoryMethodLinear(e){return new SC(this.times,this.values,this.getValueSize(),e)}};$y.prototype.ValueTypeName="quaternion";$y.prototype.InterpolantFactoryMethodSmooth=void 0;var pl=class extends sn{constructor(e,t,r){super(e,t,r)}};pl.prototype.ValueTypeName="string";pl.prototype.ValueBufferType=Array;pl.prototype.DefaultInterpolation=Pc;pl.prototype.InterpolantFactoryMethodLinear=void 0;pl.prototype.InterpolantFactoryMethodSmooth=void 0;var EC=class extends sn{};EC.prototype.ValueTypeName="vector";var wC=class{constructor(e,t,r){let i=this,n=!1,a=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(u){s++,n===!1&&i.onStart!==void 0&&i.onStart(u,a,s),n=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,s),a===s&&(n=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return o?o(u):u},this.setURLModifier=function(u){return o=u,this},this.addHandler=function(u,c){return l.push(u,c),this},this.removeHandler=function(u){let c=l.indexOf(u);return c!==-1&&l.splice(c,2),this},this.getHandler=function(u){for(let c=0,h=l.length;c<h;c+=2){let p=l[c],f=l[c+1];if(p.global&&(p.lastIndex=0),p.test(u))return f}return null}}},TC=new wC,bC=class{constructor(e){this.manager=e!==void 0?e:TC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let r=this;return new Promise(function(i,n){r.load(e,i,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};bC.DEFAULT_MATERIAL_NAME="__DEFAULT";var am=class extends rr{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},AC=class extends am{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rr.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Wp=new bt,R1=new L,P1=new L,qy=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new em,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,r=this.matrix;R1.setFromMatrixPosition(e.matrixWorld),t.position.copy(R1),P1.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(P1),t.updateMatrixWorld(),Wp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wp),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Wp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},N1=new bt,el=new L,Xp=new L,CC=class extends qy{constructor(){super(new Xr(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new Tt(2,1,1,1),new Tt(0,1,1,1),new Tt(3,1,1,1),new Tt(1,1,1,1),new Tt(3,0,1,1),new Tt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let r=this.camera,i=this.matrix,n=e.distance||r.far;n!==r.far&&(r.far=n,r.updateProjectionMatrix()),el.setFromMatrixPosition(e.matrixWorld),r.position.copy(el),Xp.copy(r.position),Xp.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Xp),r.updateMatrixWorld(),i.makeTranslation(-el.x,-el.y,-el.z),N1.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(N1)}},Ms=class extends am{constructor(e,t,r=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=i,this.shadow=new CC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},RC=class extends qy{constructor(){super(new tm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},PC=class extends am{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rr.DEFAULT_UP),this.updateMatrix(),this.target=new rr,this.shadow=new RC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},NC=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=L1(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=L1();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function L1(){return performance.now()}var sm="\\[\\]\\.:\\/",LC=new RegExp("["+sm+"]","g"),om="[^"+sm+"]",IC="[^"+sm.replace("\\.","")+"]",DC=/((?:WC+[\/:])*)/.source.replace("WC",om),UC=/(WCOD+)?/.source.replace("WCOD",IC),OC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",om),kC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",om),FC=new RegExp("^"+DC+UC+OC+kC+"$"),zC=["material","materials","bones","map"],BC=class{constructor(e,t,r){let i=r||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let r=this._targetGroup.nCachedObjects_,i=this._bindings[r];i!==void 0&&i.getValue(e,t)}setValue(e,t){let r=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=r.length;i!==n;++i)r[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].unbind()}},Bt=class ws{constructor(t,r,i){this.path=r,this.parsedPath=i||ws.parseTrackName(r),this.node=ws.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,r,i){return t&&t.isAnimationObjectGroup?new ws.Composite(t,r,i):new ws(t,r,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(LC,"")}static parseTrackName(t){let r=FC.exec(t);if(r===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:r[2],objectName:r[3],objectIndex:r[4],propertyName:r[5],propertyIndex:r[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let a=i.nodeName.substring(n+1);zC.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,r){if(r===void 0||r===""||r==="."||r===-1||r===t.name||r===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(r);if(i!==void 0)return i}if(t.children){let i=function(a){for(let s=0;s<a.length;s++){let o=a[s];if(o.name===r||o.uuid===r)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,r){t[r]=this.targetObject[this.propertyName]}_getValue_array(t,r){let i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)t[r++]=i[n]}_getValue_arrayElement(t,r){t[r]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,r){this.resolvedProperty.toArray(t,r)}_setValue_direct(t,r){this.targetObject[this.propertyName]=t[r]}_setValue_direct_setNeedsUpdate(t,r){this.targetObject[this.propertyName]=t[r],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,r){this.targetObject[this.propertyName]=t[r],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,r){let i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)i[n]=t[r++]}_setValue_array_setNeedsUpdate(t,r){let i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)i[n]=t[r++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,r){let i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)i[n]=t[r++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,r){this.resolvedProperty[this.propertyIndex]=t[r]}_setValue_arrayElement_setNeedsUpdate(t,r){this.resolvedProperty[this.propertyIndex]=t[r],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,r){this.resolvedProperty[this.propertyIndex]=t[r],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,r){this.resolvedProperty.fromArray(t,r)}_setValue_fromArray_setNeedsUpdate(t,r){this.resolvedProperty.fromArray(t,r),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,r){this.resolvedProperty.fromArray(t,r),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,r){this.bind(),this.getValue(t,r)}_setValue_unbound(t,r){this.bind(),this.setValue(t,r)}bind(){let t=this.node,r=this.parsedPath,i=r.objectName,n=r.propertyName,a=r.propertyIndex;if(t||(t=ws.findNode(this.rootNode,r.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=r.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===u){u=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let s=t[n];if(s===void 0){let u=r.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=BC;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bR=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Yy={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},Ws=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},VC=new tm(-1,1,1,-1,0,1),HC=class extends ir{constructor(){super(),this.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new _t([0,2,0,0,2,0],2))}},GC=new HC,lm=class{constructor(e){this._mesh=new Ve(GC,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,VC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},WC=class extends Ws{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof or?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ll.clone(e.uniforms),this.material=new or({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new lm(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}},I1=class extends Ws{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){let i=e.getContext(),n=e.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0);let a,s;this.inverse?(a=0,s=1):(a=1,s=0),n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),n.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),n.buffers.stencil.setClear(s),n.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.color.setMask(!0),n.buffers.depth.setMask(!0),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(i.EQUAL,1,4294967295),n.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),n.buffers.stencil.setLocked(!0)}},XC=class extends Ws{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},jC=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let r=e.getSize(new ne);this._width=r.width,this._height=r.height,t=new _i(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:en}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new WC(Yy),this.copyPass.material.blending=Zi,this.clock=new NC}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),r=!1;for(let i=0,n=this.passes.length;i<n;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),a.needsSwap){if(r){let s=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),o.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}I1!==void 0&&(a instanceof I1?r=!0:a instanceof XC&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let r=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(r,i),this.renderTarget2.setSize(r,i);for(let n=0;n<this.passes.length;n++)this.passes[n].setSize(r,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},$C=class extends Ws{constructor(e,t,r=null,i=null,n=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=i,this.clearAlpha=n,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new We}render(e,t,r){let i=e.autoClear;e.autoClear=!1;let n,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(n=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(n),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}},qC={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new We(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},um=class Wf extends Ws{constructor(t,r,i,n){super(),this.strength=r!==void 0?r:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new ne(t.x,t.y):new ne(256,256),this.clearColor=new We(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new _i(a,s,{type:en}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let p=new _i(a,s,{type:en});p.texture.name="UnrealBloomPass.h"+h,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let f=new _i(a,s,{type:en});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),a=Math.round(a/2),s=Math.round(s/2)}let o=qC;this.highPassUniforms=ll.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new or({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];a=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ne(1/a,1/s),a=Math.round(a/2),s=Math.round(s/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=r,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let c=Yy;this.copyUniforms=ll.clone(c.uniforms),this.blendMaterial=new or({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Rs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new We,this.oldClearAlpha=1,this.basic=new Ji,this.fsQuad=new lm(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,r){let i=Math.round(t/2),n=Math.round(r/2);this.renderTargetBright.setSize(i,n);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,n),this.renderTargetsVertical[a].setSize(i,n),this.separableBlurMaterials[a].uniforms.invSize.value=new ne(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,r,i,n,a){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let s=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Wf.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Wf.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=s}getSeperableBlurMaterial(t){let r=[];for(let i=0;i<t;i++)r.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new or({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},gaussianCoefficients:{value:r}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new or({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};um.BlurDirectionX=new ne(1,0);um.BlurDirectionY=new ne(0,1);var YC={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},KC=class extends Ws{constructor(){super();let e=YC;this.uniforms=ll.clone(e.uniforms),this.material=new fC({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new lm(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ht.getTransfer(this._outputColorSpace)===vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===k1?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===F1?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===z1?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===jf?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===B1?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===V1&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}},JC=14921803,jp=new URLSearchParams(location.search).has("fid"),il=(e,t=0,r=1)=>Math.min(r,Math.max(t,e)),Xf=e=>e*e*(3-2*e),Er=(e,t,r)=>Xf(il((e-t)/(r-t)));function nn(e,t,r,i,n=!0){let a=document.createElement("canvas");a.width=e,a.height=t;let s=a.getContext("2d");r(s,e,t);let o=new IA(a);return n&&(o.colorSpace=Wr),o.wrapS=o.wrapT=Rc,i&&o.repeat.set(i[0],i[1]),o.anisotropy=4,o}function QC(e="rgba(255,240,190,1)",t="rgba(255,190,90,.45)"){return nn(128,128,r=>{let i=r.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,e),i.addColorStop(.25,t),i.addColorStop(1,"rgba(255,150,40,0)"),r.fillStyle=i,r.fillRect(0,0,128,128)})}function ZC(){return nn(256,256,(e,t,r)=>{e.fillStyle="#6a2434",e.fillRect(0,0,t,r);for(let i=0;i<1800;i++)e.fillStyle=`rgba(${Math.random()<.5?"255,200,150":"30,0,10"},${Math.random()*.07})`,e.fillRect(Math.random()*t,Math.random()*r,2+Math.random()*6,2+Math.random()*6);e.strokeStyle="rgba(20,0,8,.55)",e.lineWidth=3;for(let i=0;i<=r;i+=64)e.beginPath(),e.moveTo(0,i),e.lineTo(t,i),e.stroke();for(let i=0;i<4;i++)for(let n=i%2*64;n<=t;n+=128)e.beginPath(),e.moveTo(n,i*64),e.lineTo(n,i*64+64),e.stroke();e.strokeStyle="rgba(227,176,75,.22)",e.lineWidth=1.5;for(let i=0;i<4;i++)for(let n=0;n<2;n++)e.strokeRect(n*128+8+i%2*64%128*0,i*64+8,112,48)})}function eR(){return nn(256,256,(e,t,r)=>{e.fillStyle="#2a1018",e.fillRect(0,0,t,r);for(let i=0;i<2200;i++)e.fillStyle=`rgba(255,190,140,${Math.random()*.05})`,e.fillRect(Math.random()*t,Math.random()*r,3,3);e.strokeStyle="rgba(227,176,75,.45)",e.lineWidth=2,e.strokeRect(2,2,t-4,r-4),e.strokeStyle="rgba(227,176,75,.2)",e.lineWidth=1.5,e.beginPath(),e.moveTo(t/2,24),e.lineTo(t-24,r/2),e.lineTo(t/2,r-24),e.lineTo(24,r/2),e.closePath(),e.stroke(),e.beginPath(),e.arc(t/2,r/2,30,0,7),e.stroke()})}function tR(){return nn(256,256,(e,t,r)=>{e.fillStyle="#7a0f22",e.fillRect(0,0,t,r),e.fillStyle="#e3b04b",e.fillRect(0,0,14,r),e.fillRect(t-14,0,14,r),e.fillStyle="#4a0612",e.fillRect(14,0,10,r),e.fillRect(t-24,0,10,r),e.strokeStyle="#e3b04b",e.lineWidth=2,e.save(),e.translate(t/2,r/2);for(let i=0;i<12;i++)e.rotate(Math.PI/6),e.beginPath(),e.ellipse(0,-44,14,34,0,0,7),e.stroke();e.beginPath(),e.arc(0,0,14,0,7),e.fillStyle="#f4c75a",e.fill(),e.restore()})}function rR(){return nn(256,512,(e,t,r)=>{let i=e.createLinearGradient(0,0,t,0);i.addColorStop(0,"#4a0a16"),i.addColorStop(.5,"#6d1424"),i.addColorStop(1,"#4a0a16"),e.fillStyle=i,e.fillRect(0,0,t,r),e.strokeStyle="#e3b04b",e.lineWidth=6,e.strokeRect(8,8,t-16,r-16),e.lineWidth=2,e.strokeRect(22,22,t-44,r-44);for(let n=0;n<4;n++)for(let a=0;a<2;a++){let s=34+a*100,o=40+n*118;e.strokeStyle="rgba(227,176,75,.9)",e.lineWidth=2,e.strokeRect(s,o,88,104),e.beginPath(),e.moveTo(s+44,o+12),e.lineTo(s+76,o+52),e.lineTo(s+44,o+92),e.lineTo(s+12,o+52),e.closePath(),e.stroke(),e.fillStyle="#f4c75a",e.beginPath(),e.arc(s+44,o+52,7,0,7),e.fill();for(let[l,u]of[[6,6],[82,6],[6,98],[82,98]])e.beginPath(),e.arc(s+l,o+u,3,0,7),e.fill()}})}function iR(){return nn(128,128,(e,t,r)=>{e.fillStyle="#1a0408",e.fillRect(0,0,t,r),e.strokeStyle="#ffd98a",e.lineWidth=5;for(let i=0;i<=t;i+=64)for(let n=0;n<=r;n+=64)e.beginPath(),e.arc(i,n,32,0,7),e.stroke(),e.beginPath(),e.arc(i+32,n+32,32,0,7),e.stroke()},[6,3])}function Yi(e,t,r,i=new gi,n=!1){let a=e/2;return i.moveTo(-a,0),i.lineTo(-a,t),i.quadraticCurveTo(-a,t+r*.78,0,t+r),i.quadraticCurveTo(a,t+r*.78,a,t),i.lineTo(a,0),i.lineTo(-a,0),i}function xc(e,t=20){return new jA(e.map(([r,i])=>new ne(r,i)),t)}function Ky(e,t,r={}){let i=Math.min(window.innerWidth,screen.width||999)<820,n=new CA({canvas:e,antialias:!i,alpha:!1,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio||1,i?1.5:2)),n.toneMapping=jf,n.toneMappingExposure=1.15;let a=new f1;a.background=new We(1180684),a.fog=new RA(1771283,.0105);let s=new Xr(55,1,.3,700),o=[],l=H=>(o.push(H),H),u=l(new or({side:br,depthWrite:!1,fog:!1,uniforms:{top:{value:new We(656416)},mid:{value:new We(4853808)},hor:{value:new We(15764026)}},vertexShader:"varying vec3 v; void main(){ v=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"varying vec3 v; uniform vec3 top,mid,hor; void main(){ float h=clamp(v.y,0.,1.); vec3 c=mix(hor,mid,smoothstep(0.,.22,h)); c=mix(c,top,smoothstep(.15,.7,h)); gl_FragColor=vec4(c,1.); }"})),c=new Ve(l(new On(400,24,16)),u);a.add(c);{let H=new Of(n),ie=new f1;ie.add(new Ve(new On(50,16,12),u));let se=new Ve(new On(8,8,8),new Ji({color:16760944}));se.position.set(0,10,40),ie.add(se);let me=se.clone();me.position.set(0,12,-40),ie.add(me),a.environment=H.fromScene(ie,.04).texture,a.environmentIntensity=.55,H.dispose()}{let H=new Float32Array(1260);for(let se=0;se<420;se++){let me=Math.random()*Math.PI*2,ge=Math.random()*1.2+.18,ke=380;H[se*3]=Math.cos(me)*Math.cos(ge)*ke,H[se*3+1]=Math.sin(ge)*ke,H[se*3+2]=Math.sin(me)*Math.cos(ge)*ke}let ie=l(new ir);ie.setAttribute("position",new vr(H,3)),a.add(new Bp(ie,l(new Ff({color:16773583,size:1.7,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.85,depthWrite:!1}))))}let h=l(QC()),p=(H,ie=1)=>l(new Ay({map:h,color:H,blending:Rs,depthWrite:!1,transparent:!0,opacity:ie,fog:!1})),f=new ys(p(16771522,.9));f.scale.set(40,40,1),f.position.set(-75,78,-240),a.add(f);let y=new Ve(l(new On(7,20,14)),l(new Ji({color:16774366,fog:!1})));y.position.copy(f.position),a.add(y);let _=l(ZC()),v=l(new gr({map:_,roughness:.82,metalness:.02,color:16766664})),d=l(new gr({color:13146744,roughness:.75,metalness:.02})),g=l(nn(128,128,(H,ie,se)=>{H.fillStyle="#777",H.fillRect(0,0,ie,se);for(let me=0;me<1400;me++){let ge=90+Math.random()*110;H.fillStyle=`rgba(${ge},${ge},${ge},.5)`,H.fillRect(Math.random()*ie,Math.random()*se,1+Math.random()*3,1+Math.random()*3)}},[4,4],!1)),m=l(new gr({color:JC,roughness:.55,roughnessMap:g,bumpMap:g,bumpScale:.6,metalness:.95,envMapIntensity:1.3})),x=l(new gr({color:12158256,roughness:.7,roughnessMap:g,metalness:.85})),P=l(new gr({color:15851456,roughness:.6,metalness:.05})),T=l(new Ji({color:16761960,fog:!1})),b=l(new Ji({color:16762976,fog:!1}));l(eR()).repeat.set(36,36);let R=new Ve(l(new kn(180,180)),l(new gr({roughness:.7,metalness:.1,color:3420218})));R.rotation.x=-Math.PI/2,R.position.set(0,0,-20),a.add(R);let E=l(tR());E.repeat.set(1,26);let M=new Ve(l(new kn(4.6,80)),l(new mC({map:E,roughness:.92,sheen:1,sheenColor:new We(16747104),sheenRoughness:.45})));M.rotation.x=-Math.PI/2,M.position.set(0,.02,2),a.add(M);let N=6.2,k=5,V=2.5,W=2.6,j=9.6,X=l(nn(256,256,(H,ie,se)=>{H.fillStyle="#7a1620",H.fillRect(0,0,ie,se);let me=32,ge=64;for(let ke=0;ke<se/me;ke++)for(let Oe=-1;Oe<ie/ge+1;Oe++){let Ge=Oe*ge+(ke%2?ge/2:0),De=.8+Math.random()*.4;H.fillStyle=`rgb(${Math.round(150*De)},${Math.round(34*De)},${Math.round(40*De)})`,H.fillRect(Ge+2,ke*me+2,ge-4,me-4)}for(let ke=0;ke<1800;ke++)H.fillStyle=`rgba(${Math.random()<.5?"255,200,170":"40,0,0"},${Math.random()*.1})`,H.fillRect(Math.random()*ie,Math.random()*se,1+Math.random()*4,1+Math.random()*4)}));X.repeat.set(1/8,1/8);let ae=l(nn(256,256,(H,ie,se)=>{H.fillStyle="#222",H.fillRect(0,0,ie,se);for(let me=0;me<8;me++)for(let ge=-1;ge<5;ge++){let ke=ge*64+(me%2?32:0),Oe=150+Math.random()*90;H.fillStyle=`rgb(${Oe},${Oe},${Oe})`,H.fillRect(ke+3,me*32+3,58,26)}for(let me=0;me<2500;me++){let ge=Math.random()*255;H.fillStyle=`rgba(${ge},${ge},${ge},.18)`,H.fillRect(Math.random()*ie,Math.random()*se,2,2)}},null,!1));ae.repeat.set(1/8,1/8);let $=l(new gr({map:X,bumpMap:ae,bumpScale:2.2,roughness:.82,metalness:.02})),pe=l(new gr({color:3115564,roughness:.6,emissive:666120,emissiveIntensity:.5,side:Ai})),Se=l(new gr({color:16751124,roughness:.6,emissive:6957568,emissiveIntensity:.7})),Je=l(new gr({color:11817758,roughness:.8})),et=l(xc([[.01,0],[.16,.04],[.28,.26],[.31,.5],[.22,.74],[.16,.84],[.26,.92],[.28,.98]],14)),K=l(new On(.2,12,9)),he=l(new Zo(.1,.55,4)),Ue=l(new Zo(.05,.3,6));function Le(H,ie,se,me=1){let ge=new bs;ge.position.set(H,ie,se),ge.scale.setScalar(me),ge.add(new Ve(et,m));for(let Ge=0;Ge<7;Ge++){let De=Ge/7*Math.PI*2,je=new Ve(he,pe);je.position.set(Math.cos(De)*.2,1.15,Math.sin(De)*.2),je.rotation.set(Math.sin(De)*.5,0,-Math.cos(De)*.5),ge.add(je)}let ke=new Ve(K,x);ke.position.y=1.08,ke.scale.y=1.2,ge.add(ke);let Oe=new Ve(Ue,m);return Oe.position.y=1.5,ge.add(Oe),a.add(ge),ge}function ve(H,ie,se,me,ge,ke,Oe=.55,Ge=.78){let De=me,je=ge,tt=ie;for(let mt=0;mt<ke;mt++){let qr=new Ve(l(new Tr(De,Oe,je)),mt%2?m:$);qr.position.set(H,tt+Oe/2,se),a.add(qr);let Ar=new Ve(l(new Tr(De+.25,.1,je+.25)),x);Ar.position.set(H,tt+.05,se),a.add(Ar),tt+=Oe,De*=Ge,je*=Ge}return tt}function $e(H,ie,se,me,ge){let ke=new Ve(l(new vc(Yi(me+.5,ge,ge*.4,new gi),{depth:.2,bevelEnabled:!1,curveSegments:8})),m);ke.position.set(H,ie,se),a.add(ke);let Oe=new Ve(l(new _c(Yi(me,ge-.15,ge*.34,new gi),8)),T);Oe.position.set(H,ie+.02,se+.22),a.add(Oe);let Ge=new Ve(l(new Tr(me+.9,.18,.7)),m);Ge.position.set(H,ie-.05,se+.3),a.add(Ge)}{let H=new gi;H.moveTo(-64/2,0),H.lineTo(64/2,0),H.lineTo(64/2,j),H.lineTo(-64/2,j),H.lineTo(-64/2,0),H.holes.push(Yi(N,k,V,new sl));let ie=new Ve(l(new vc(H,{depth:W,bevelEnabled:!1,curveSegments:12})),$);ie.position.z=-W,a.add(ie);let se=Yi(N+1.5,k+.1,V+.55,new gi);se.holes.push(Yi(N,k,V,new sl));let me=new Ve(l(new vc(se,{depth:.35,bevelEnabled:!1,curveSegments:12})),m);me.position.z=.02,a.add(me);for(let[De,je]of[[j-.1,.5],[j-1.1,.18],[1.2,.2]]){let tt=new Ve(l(new Tr(64,je,.55)),m);tt.position.set(0,De,.12),a.add(tt)}let ge=new da(l(new Tr(.34,.42,.4)),x,60),ke=new rr,Oe=0;for(let De=-28;De<=28;De+=1)Math.abs(De)<4.2||(ke.position.set(De,j-.55,.3),ke.updateMatrix(),ge.setMatrixAt(Oe++,ke.matrix));ge.count=Oe,a.add(ge);let Ge=new da(l(new Zo(.34,.85,4)),m,70);Oe=0;for(let De=-30;De<=30;De+=.9)ke.position.set(De,j+.6,.12),ke.rotation.y=Math.PI/4,ke.updateMatrix(),Ge.setMatrixAt(Oe++,ke.matrix);Ge.count=Oe,a.add(Ge);for(let De of[-1,1])for(let je of[7.5,11.5,16,21])$e(De*je,3.2,0,1.5,2.6);for(let De of[-1,1])for(let je of[7.5,11.5,16,21]){let tt=new Ve(l(new _c(Yi(1,1.2,.5,new gi),6)),T);tt.position.set(De*je,6.7,.02),a.add(tt)}}for(let H of[-1,1]){let ie=H*13.5,se=new Ve(l(new Tr(4.2,5.2,4.6)),$);se.position.set(ie,j+2.6,-.3),a.add(se);let me=new Ve(l(new Tr(4.6,.3,5)),m);me.position.set(ie,j+.3,-.3),a.add(me),$e(ie,j+1.6,2,1.2,2.2);let ge=ve(ie,j+5.2,-.3,4.8,5.2,4,.5,.74);Le(ie,ge,-.3,1.5);for(let ke of[-1,1])for(let Oe of[-1,1])Le(ie+ke*2.1,j+5.2,-.3+Oe*2.3,.5)}{let H=[.7,3.6],ie=l(xc([[.42,0],[.5,.2],[.3,.6],[.26,.9],[.24,6],[.3,7-.7],[.5,7-.4],[.55,7]],14));for(let re of[-1,1])for(let ye of H){let Re=new Ve(ie,m);Re.position.set(re*3.95,0,ye),a.add(Re);let Be=new Ve(l(new C1(.3,.05,6,14)),x);Be.rotation.x=Math.PI/2,Be.position.set(re*3.95,2.2,ye),a.add(Be);let Ze=Be.clone();Ze.position.y=4.4,a.add(Ze)}let se=new Ve(l(new Tr(3.95*2+1.4,.5,.6)),m);for(let re of H){let ye=se.clone();ye.position.set(0,7+.2,re),a.add(ye)}for(let re of[-1,1]){let ye=new Ve(l(new Tr(.6,.5,H[1]-H[0]+1.2)),m);ye.position.set(re*3.95,7+.2,(H[0]+H[1])/2),a.add(ye)}let me=(H[0]+H[1])/2,ge=H[1]-H[0]+1.6,ke=ve(0,7+.45,me,3.95*2+1.8,ge,4,.5,.7);Le(0,ke,me,1.7);for(let re of[-1,1])for(let ye of H)Le(re*3.95,7+.45,ye,.6);let Oe=l(new Zo(.11,.52,4));Oe.translate(0,-.26,0),Oe.scale(1,1,.35);let Ge=70,De=new da(Oe,pe,Ge*2),je=new rr,tt=0,mt=H[1]+.34;for(let re=0;re<Ge;re++){let ye=-4.45+re/(Ge-1)*8.9,Re=.28*Math.sin(re/(Ge-1)*Math.PI*6)*0;je.position.set(ye,7-.05+Re,mt),je.rotation.set(0,0,re%2?.1:-.1),je.scale.set(1,1+re%3*.18,1),je.updateMatrix(),De.setMatrixAt(tt++,je.matrix)}for(let re=0;re<Ge;re++){let ye=-4.45+re/(Ge-1)*8.9;je.position.set(ye,7-.05,H[0]-.34),je.rotation.set(0,0,re%2?.1:-.1),je.scale.set(1,1+re%3*.18,1),je.updateMatrix(),De.setMatrixAt(tt++,je.matrix)}De.count=tt,a.add(De);let qr=l(new A1(.12,1)),Ar=13,w=8,D=new da(qr,Se,Ar*w);tt=0;let z=[new We(16747036),new We(16757788),new We(16738832)];for(let re=0;re<Ar;re++){let ye=-4.25+re/(Ar-1)*8.5,Re=1.3+re%2*.9+Math.sin(re*1.7)*.25;for(let Be=0;Be<w;Be++)je.position.set(ye,7-.35-Be/(w-1)*Re,mt+.06),je.rotation.set(Be,re,0),je.scale.setScalar(Be===w-1?1.5:.95),je.updateMatrix(),D.setMatrixAt(tt,je.matrix),D.setColorAt(tt,z[(re+Be)%3]),tt++}a.add(D);let B=l(new On(.17,12,6,0,Math.PI*2,Math.PI/2,Math.PI/2));B.scale(1.3,.8,1.3);let U=[];for(let re=4.6;re<36;re+=2.4)U.push(re);let oe=new da(B,Je,U.length*2);tt=0,a.userData.diyaSprites=[];for(let re of[-1,1])for(let ye of U){je.position.set(re*2.75,.04,ye),je.rotation.set(Math.PI,0,0),je.scale.setScalar(1),je.updateMatrix(),oe.setMatrixAt(tt++,je.matrix);let Re=new ys(p(16754236,.9));Re.scale.set(.9,.9,1),Re.position.set(re*2.75,.2,ye),a.add(Re),a.userData.diyaSprites.push(Re)}a.add(oe)}{let H=new Ve(l(new kn(60,60)),l(new gr({color:1782560,roughness:1})));H.rotation.x=-Math.PI/2,H.position.set(0,.005,30),a.add(H)}{let H=i?70:120,ie=new Float32Array(H*3);for(let me=0;me<H;me++){let ge=-30+me/(H-1)*60;ie[me*3]=ge,ie[me*3+1]=j-1.45-Math.abs(Math.sin(ge*.9))*.3,ie[me*3+2]=.55}let se=l(new ir);se.setAttribute("position",new vr(ie,3)),a.add(new Bp(se,l(new Ff({color:16766090,size:7,sizeAttenuation:!1,map:h,transparent:!0,depthWrite:!1,blending:Rs,fog:!1}))))}let rt=new Ms(16758886,420,34,2);rt.position.set(-6,4,9),a.add(rt);let Ke=new Ms(16758886,420,34,2);Ke.position.set(9,4,9),a.add(Ke);let Q=l(iR());{let H=new gi,ie=N/2;H.moveTo(-ie,k),H.quadraticCurveTo(-ie,k+V*.78,0,k+V),H.quadraticCurveTo(ie,k+V*.78,ie,k),H.lineTo(-ie,k);let se=l(new _c(H,12));{let ge=se.attributes.uv,ke=se.attributes.position;for(let Oe=0;Oe<ge.count;Oe++)ge.setXY(Oe,ke.getX(Oe)/1.6,ke.getY(Oe)/1.6)}let me=new Ve(se,l(new Ji({map:Q,color:16760928,fog:!1})));me.position.z=-.7,a.add(me)}let fe=l(rR()),C=l(new gr({map:fe,roughness:.5,metalness:.35,emissive:2753544,emissiveIntensity:.5})),Ce=N/2;function ce(H){let ie=new bs;ie.position.set(H*N/2,0,-.9);let se=new Ve(l(new Tr(Ce,k,.3)),[d,d,d,d,C,C]);se.position.set(-H*Ce/2,k/2,0),ie.add(se);for(let ke=0;ke<2;ke++){let Oe=new Ve(l(new C1(.28,.06,8,20)),m);Oe.position.set(-H*(Ce-.55),3.4+ke*0,.23),Oe.position.y=3.4,ke&&(Oe.position.z=-.23,Oe.rotation.y=Math.PI),ie.add(Oe)}let me=new Ve(l(new Tr(Ce,.25,.4)),m);me.position.set(-H*Ce/2,k-.2,0),ie.add(me);let ge=me.clone();return ge.position.y=.3,ie.add(ge),a.add(ie),ie}let Ie=ce(-1),le=ce(1),He=34,Te=8.5,be=8.6,A=-W;{let H=l(new gr({map:_.clone(),roughness:.7,color:16764840}));H.map.needsUpdate=!0,H.map.repeat.set(7,3),l(H.map);for(let tt of[-1,1]){let mt=new Ve(l(new kn(He,be)),H);mt.position.set(tt*Te,be/2,A-He/2),mt.rotation.y=-tt*Math.PI/2,a.add(mt)}let ie=new Ve(l(new kn(Te*2,He)),l(new gr({color:4853792,roughness:.8,emissive:2755080})));ie.rotation.x=Math.PI/2,ie.position.set(0,be,A-He/2),a.add(ie);let se=l(xc([[.7,0],[.9,.3],[.55,.7],[.42,1.2],[.4,8.8],[.5,9.3],[.65,9.8],[.75,10.2]],14)),me=l(new Tr(Te*2,.5,.7));for(let tt=0;tt<6;tt++){let mt=A-4-tt*5;for(let B of[-1,1]){let U=new Ve(se,tt%2?x:m);U.scale.y=.78,U.position.set(B*5,0,mt),a.add(U)}let qr=new Ve(me,x);qr.position.set(0,be-.5,mt),a.add(qr);let Ar=new Ve(l(new Vf(.02,.02,2.2,4)),m);Ar.position.set(0,be-1.6,mt),a.add(Ar);let w=new Ve(l(new On(.5,14,10)),b);w.position.set(0,be-3.2,mt),a.add(w);let D=new ys(p(16758874,.9));D.scale.set(5,5,1),D.position.copy(w.position),a.add(D);let z=new Ve(l(new Zo(.62,.5,14)),m);z.position.set(0,be-2.75,mt),a.add(z)}let ge=Yi(5.6,5.5,3.2,new gi),ke=new Ve(l(new _c(ge,10)),l(new Ji({color:16771504,fog:!1})));ke.position.set(0,0,A-He+.05),a.add(ke);let Oe=new Ve(l(new kn(Te*2,be)),H);Oe.position.set(0,be/2,A-He),a.add(Oe);let Ge=new ys(p(16770728,1));Ge.scale.set(26,26,1),Ge.position.set(0,5.2,A-He+1),a.add(Ge),a.userData.endSun=Ge;let De=Yi(6.4,5.6,3.3,new gi);De.holes.push(Yi(5.6,5.5,3.2,new sl));let je=new Ve(l(new vc(De,{depth:.4,bevelEnabled:!1,curveSegments:10})),m);je.position.set(0,0,A-He+.1),a.add(je)}let S=[],F=l(xc([[.3,0],[.18,.4],[.1,1],[.08,3.4],[.2,3.8],[.45,4.2],[.5,4.5]],10)),J=l(new gr({color:16747036,roughness:.6,emissive:5906432,emissiveIntensity:.6})),ee=l(new A1(.13,1)),q=[];for(let H of[-1,1])for(let ie=0;ie<6;ie++){let se=H*5.2,me=7+ie*6.5,ge=new Ve(F,m);ge.position.set(se,0,me),a.add(ge);let ke=new Ve(l(new On(.22,10,8)),b);ke.scale.set(.8,1.5,.8),ke.position.set(se,4.85,me),a.add(ke);let Oe=new ys(p(16753210,.95));Oe.scale.set(2.8,2.8,1),Oe.position.set(se,4.9,me),a.add(Oe),S.push({fl:ke,sp:Oe,ph:Math.random()*6}),q.push([se,me])}{let H=[],ie=[];for(let Ge of[-1,1])for(let De=0;De<5;De++){let je=new L(Ge*5.2,4.1,7+De*6.5),tt=new L(Ge*5.2,4.1,7+(De+1)*6.5),mt=je.clone().lerp(tt,.5);mt.y-=1.5,ie.push(new Ly(je,mt,tt))}let se=new da(ee,J,ie.length*46),me=new rr,ge=0,ke=[new We(16747036),new We(16757788),new We(16738832)];for(let Ge of ie)for(let De=0;De<46;De++){let je=Ge.getPoint(De/45);me.position.copy(je),me.position.x+=(Math.random()-.5)*.1,me.position.y+=(Math.random()-.5)*.12,me.scale.setScalar(.85+Math.random()*.5),me.rotation.set(Math.random()*3,Math.random()*3,0),me.updateMatrix(),se.setMatrixAt(ge,me.matrix),se.setColorAt(ge,ke[ge%3]),ge++}a.add(se);for(let Ge=0;Ge<9;Ge++){let De=-4.2+Ge*1.05,je=1.2+Ge%2*1.3+Math.sin(Ge)*.3,tt=new Ve(l(new Vf(.025,.025,je,4)),J);tt.position.set(De,k+V-1-je/2+.3-Math.abs(De)/4.2*1.5,.55),tt.visible=!1}let Oe=new da(ee,J,81);ge=0;for(let Ge=0;Ge<9;Ge++){let De=-3.1+Ge*.775,je=k+.2+V*(1-Math.pow(Math.abs(De)/(N/2),2.2))*.9-.55,tt=1.6+Ge%2*.9;for(let mt=0;mt<9;mt++)me.position.set(De,je-mt/8*tt,.7),me.scale.setScalar(1+(mt===8?.6:0)),me.rotation.set(mt,Ge,0),me.updateMatrix(),Oe.setMatrixAt(ge,me.matrix),Oe.setColorAt(ge,ke[(Ge+mt)%3]),ge++}a.add(Oe)}let Fe=i?140:260,xe=l(new or({transparent:!0,depthWrite:!1,blending:Rs,uniforms:{t:{value:0},pr:{value:n.getPixelRatio()},map:{value:h}},vertexShader:"attribute vec4 a; uniform float t; uniform float pr; varying float al; void main(){ vec3 p=position; float ph=a.w; p.y=mod(p.y+t*a.x*.6+ph*8.,14.); p.x+=sin(t*.5*a.y+ph*20.)*1.4; p.z+=cos(t*.4*a.y+ph*11.)*1.4; vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv; gl_PointSize=a.z*pr*(220./-mv.z); al=smoothstep(0.,2.,p.y)*(1.-smoothstep(10.,14.,p.y))*(.55+.45*sin(t*2.+ph*40.)); }",fragmentShader:"uniform sampler2D map; varying float al; void main(){ vec4 c=texture2D(map,gl_PointCoord); gl_FragColor=vec4(c.rgb*1.4,c.a*al); }"}));{let H=new Float32Array(Fe*3),ie=new Float32Array(Fe*4);for(let ge=0;ge<Fe;ge++)H[ge*3]=(Math.random()-.5)*26,H[ge*3+1]=Math.random()*14,H[ge*3+2]=40-Math.random()*62,ie[ge*4]=.5+Math.random(),ie[ge*4+1]=.5+Math.random(),ie[ge*4+2]=.35+Math.random()*.8,ie[ge*4+3]=Math.random();let se=l(new ir);se.setAttribute("position",new vr(H,3)),se.setAttribute("a",new vr(ie,4));let me=new Bp(se,xe);me.frustumCulled=!1,a.add(me)}a.add(new AC(6970024,3805216,.55));let Me=new PC(11122943,1.1);Me.position.set(-30,40,30),a.add(Me),n.shadowMap.enabled=jp,n.shadowMap.type=U1,Me.castShadow=jp,Me.shadow.mapSize.set(i?1024:2048,i?1024:2048);{let H=Me.shadow.camera;H.left=-22,H.right=22,H.top=18,H.bottom=-18,H.near=10,H.far=110,Me.target.position.set(0,0,8),a.add(Me.target),Me.shadow.radius=4,Me.shadow.bias=-6e-4,Me.shadow.normalBias=.04}a.traverse(H=>{H.isMesh&&!(H.material&&H.material.isShaderMaterial)&&H!==R&&H!==M&&(H.castShadow=!0,H.receiveShadow=!0)}),R.receiveShadow=!0,M.receiveShadow=!0;let Xe=new jC(n);Xe.setPixelRatio(n.getPixelRatio()),Xe.addPass(new $C(a,s));let de=new um(new ne(256,256),i?.55:.7,.7,.82);Xe.addPass(de),Xe.addPass(new KC);let Ae=new Ms(16754768,900,55,2);Ae.position.set(0,4.5,12),a.add(Ae);let it=new Ms(16754768,500,40,2);it.position.set(0,4.5,30),a.add(it);let Ye=new Ms(16762996,0,40,2);Ye.position.set(0,8,-8),a.add(Ye);let Pe=new Ms(16767120,0,44,2);Pe.position.set(0,7,-24),a.add(Pe);let Qe=new ys(p(16760928,0));Qe.scale.set(16,12,1),Qe.position.set(0,4.8,-.2),a.add(Qe);let nt={w:1,h:1},Mt=()=>{let H=t.getBoundingClientRect(),ie=Math.max(1,Math.round(H.width)),se=Math.max(1,Math.round(H.height));nt.w=ie,nt.h=se,n.setSize(ie,se,!1),typeof Xe<"u"&&(Xe.setSize(ie,se),de.setSize(Math.round(ie*(i?.5:.75)),Math.round(se*(i?.5:.75)))),s.aspect=ie/se,s.updateProjectionMatrix()};Mt();let O=typeof ResizeObserver<"u"?new ResizeObserver(Mt):null;O&&O.observe(t);let te={x:0,y:0,tx:0,ty:0},Y=H=>{let ie=t.getBoundingClientRect();te.tx=((H.clientX-ie.left)/ie.width-.5)*2,te.ty=((H.clientY-ie.top)/ie.height-.5)*2};t.addEventListener("pointermove",Y);let Z=H=>{H.gamma!=null&&(te.tx=il(H.gamma/25,-1,1),te.ty=il(((H.beta||45)-45)/25,-1,1))};window.addEventListener("deviceorientation",Z);let we=0,_e=!1,ct=performance.now(),Dt=-1,Gt=new L,pt=()=>{let H=parseFloat(t.style.getPropertyValue("--p"));return isNaN(H)?0:H},$r=H=>{if(_e)return;we=requestAnimationFrame($r);let ie=(H-ct)/1e3,se=pt(),me=Er(se,.07,.36),ge=Xf(Xf(il(se/1))),ke=se<.001?0:Math.pow(il(se),1),Oe=40-70*(.6*Er(ke,0,.55)*.75+0)-0,Ge=40-64*(.22*Er(se,0,.35)+.78*Er(se,.3,1)),De=1-Er(se,0,.05);te.x+=(te.tx-te.x)*.05,te.y+=(te.ty-te.y)*.05;let je=Math.sin(ie*.5)*.25*De;s.position.set(te.x*.9*(1-Er(se,.55,.9))+Math.sin(ie*.35)*.4*De,1.9+Er(se,.1,.6)*1.6+Er(se,.6,1)*.6+je-te.y*.25,Ge-(1-De)*0+Math.sin(ie*.3)*.8*De);let tt=Math.min(0,Ge-22),mt=(tt+Ge-22-Math.sqrt((tt-(Ge-22))**2+16))/2*0+tt;Gt.set(te.x*.8*.5,5-Er(se,.35,1)*.6+te.y*-.3,mt),s.lookAt(Gt),s.rotateZ(Math.sin(ie*.4)*.006*De+Er(se,.4,.8)*Math.sin(se*14)*.008);let qr=(s.aspect<1?66:40)+Er(se,.55,1)*12-Er(se,0,.3)*4;Math.abs(s.fov-qr)>.01&&(s.fov=qr,s.updateProjectionMatrix());let Ar=me*1.78;Ie.rotation.y=Ar,le.rotation.y=-Ar;let w=.88+Math.sin(ie*9.1)*.05+Math.sin(ie*13.7+1)*.04;Ae.intensity=900*w,it.intensity=500*(.92+Math.sin(ie*7.3)*.06);let D=me;Ye.intensity=30+380*D,Pe.intensity=20+420*D,Qe.material.opacity=.75*D*(1-Er(se,.55,.75)),Qe.scale.set(10+8*D,8+8*D,1),a.userData.endSun.material.opacity=.5+.5*D,a.userData.endSun.scale.setScalar(20+22*Er(se,.5,1));for(let z of S){let B=.85+Math.sin(ie*8+z.ph)*.12+Math.sin(ie*15+z.ph*2)*.06;z.sp.scale.setScalar(2.8*B),z.fl.scale.set(.8,1.4*B+.15,.8)}a.userData.diyaSprites&&a.userData.diyaSprites.forEach((z,B)=>z.scale.setScalar(.85+Math.sin(ie*9+B*1.7)*.12)),xe.uniforms.t.value=ie,n.toneMappingExposure=1+Er(se,.8,1)*.6,jp?Xe.render():n.render(a,s)};return we=requestAnimationFrame($r),{dispose(){_e=!0,cancelAnimationFrame(we),O&&O.disconnect(),t.removeEventListener("pointermove",Y),window.removeEventListener("deviceorientation",Z),o.forEach(H=>H.dispose&&H.dispose()),a.traverse(H=>{H.geometry&&H.geometry.dispose()}),n.dispose()}}}function Jy(){try{let e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl2")||e.getContext("webgl")))}catch{return!1}}var G=lr(Vr());function nR(){let e=ml.default.useRef(null),t=ml.default.useRef(null);return ml.default.useEffect(()=>{if(!e.current||!t.current)return;let r=Ky(t.current,e.current.parentElement);return()=>r.dispose()},[]),(0,G.jsx)("div",{ref:e,className:"g3d","aria-hidden":"true",children:(0,G.jsx)("canvas",{ref:t})})}function fl({k:e,cls:t="",children:r}){return(0,G.jsx)("div",{className:`layer ${t}`,style:{"--k":e},children:(0,G.jsx)("div",{className:"stage",children:r})})}function Fc({cls:e}){return(0,G.jsxs)("svg",{className:`corner ${e}`,viewBox:"0 0 120 120","aria-hidden":"true",children:[(0,G.jsx)("path",{d:"M4 116V30C4 15 15 4 30 4h86",fill:"none",stroke:"#f4c75a",strokeWidth:"1.6"}),(0,G.jsx)("path",{d:"M14 116V36C14 24 24 14 36 14h80",fill:"none",stroke:"#f4c75a",strokeWidth:"0.7",opacity:"0.7"}),(0,G.jsxs)("g",{transform:"translate(34 34)",fill:"none",stroke:"#f4c75a",strokeWidth:"1.1",children:[Array.from({length:8},(t,r)=>(0,G.jsx)("path",{transform:`rotate(${r*45})`,d:"M0 -4Q5 -12 0 -22Q-5 -12 0 -4Z",fill:r%2?"none":"rgba(244,199,90,0.25)"},r)),(0,G.jsx)("circle",{r:"3",fill:"#f4c75a"})]})]})}function aR(){return(0,G.jsx)("svg",{className:"mandala",viewBox:"-200 -200 400 400","aria-hidden":"true",children:(0,G.jsxs)("g",{fill:"none",stroke:"#f4c75a",strokeWidth:"1",children:[[190,160,118,70].map((e,t)=>(0,G.jsx)("circle",{r:e,strokeDasharray:t===1?"2 6":void 0,opacity:.8-t*.1},e)),Array.from({length:24},(e,t)=>(0,G.jsx)("path",{transform:`rotate(${t*15})`,d:"M0 -120Q16 -150 0 -188Q-16 -150 0 -120Z"},t)),Array.from({length:12},(e,t)=>(0,G.jsx)("path",{transform:`rotate(${t*30+15})`,d:"M0 -72Q22 -96 0 -118Q-22 -96 0 -72Z"},"b"+t)),Array.from({length:8},(e,t)=>(0,G.jsx)("path",{transform:`rotate(${t*45})`,d:"M0 -20Q12 -44 0 -68Q-12 -44 0 -20Z"},"c"+t))]})})}function zc(){return(0,G.jsxs)("div",{className:"rdiv","aria-hidden":"true",children:[(0,G.jsx)("span",{}),(0,G.jsxs)("svg",{viewBox:"0 0 60 20",width:"60",height:"20",children:[(0,G.jsx)("path",{d:"M2 10H20M40 10H58",stroke:"#f4c75a",strokeWidth:"1"}),(0,G.jsx)("path",{d:"M30 2l6 8-6 8-6-8z",fill:"none",stroke:"#f4c75a",strokeWidth:"1.2"}),(0,G.jsx)("circle",{cx:"30",cy:"10",r:"2",fill:"#f4c75a"})]}),(0,G.jsx)("span",{})]})}function Bc(){let e=i_(6600),t=r_(),r=Vo(yt.weddingDate),[i]=ml.default.useState(()=>Jy()&&new URLSearchParams(window.location.search).get("flat")===null),n=e.state==="idle"?e.start:void 0,a=yt.events.map(s=>({...s,d:Vo(s.date)}));return(0,G.jsxs)("div",{className:`royal ${e.state!=="done"?"locked":""}`,style:{"--H":`${t}px`},children:[e.state!=="done"&&(0,G.jsxs)("div",{ref:e.ref,className:`gate rg is-${e.state}`,onClick:n,children:[i?(0,G.jsx)(nR,{}):(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(fl,{k:.35,children:(0,G.jsx)(l_,{})}),(0,G.jsx)(fl,{k:.9,children:(0,G.jsx)(u_,{})}),(0,G.jsxs)(fl,{k:4.9,cls:"main",children:[(0,G.jsx)(c_,{}),(0,G.jsx)(d_,{}),(0,G.jsx)("div",{className:"spill",children:(0,G.jsx)(h_,{})}),(0,G.jsxs)("div",{className:"doors",children:[(0,G.jsx)("div",{className:"door dl",children:(0,G.jsx)(op,{side:"l"})}),(0,G.jsx)("div",{className:"door dr",children:(0,G.jsx)(op,{side:"r"})})]})]}),(0,G.jsx)(fl,{k:2.8,children:(0,G.jsx)(f_,{})}),(0,G.jsx)(fl,{k:2.3,children:(0,G.jsx)(m_,{})})]}),(0,G.jsx)("div",{className:"glow"}),(0,G.jsx)("div",{className:"vignette"}),(0,G.jsxs)("div",{className:"gate-ui",children:[(0,G.jsx)("span",{}),(0,G.jsxs)("div",{className:"gu-bottom",children:[(0,G.jsx)("p",{className:"gu-inv",children:"You are warmly invited to the wedding of"}),(0,G.jsxs)("h1",{className:"gu-names",children:[yt.bride," ",(0,G.jsx)("i",{children:"&"})," ",yt.groom]}),(0,G.jsx)("button",{className:"gu-open",onClick:s=>{s.stopPropagation(),e.start()},disabled:e.state!=="idle",children:(0,G.jsx)("span",{children:"Open the invitation"})})]})]}),(0,G.jsx)("button",{className:"gu-skip",onClick:s=>{s.stopPropagation(),e.skip()},children:"Skip intro"})]}),(0,G.jsxs)("main",{className:`rpage ${e.ready?"ready":""}`,children:[(0,G.jsxs)("section",{className:"hero",children:[(0,G.jsx)(aR,{}),(0,G.jsx)(Fc,{cls:"c1"}),(0,G.jsx)(Fc,{cls:"c2"}),(0,G.jsx)(Fc,{cls:"c3"}),(0,G.jsx)(Fc,{cls:"c4"}),(0,G.jsx)(a_,{count:26,kind:"petal",seed:4}),(0,G.jsxs)("div",{className:"hero-in",children:[(0,G.jsx)("p",{className:"h-ganesh e1",lang:"hi",children:"\u0965 \u0936\u094D\u0930\u0940 \u0917\u0923\u0947\u0936\u093E\u092F \u0928\u092E\u0903 \u0965"}),(0,G.jsx)("p",{className:"h-kicker e2",children:"Together with their families"}),(0,G.jsxs)("h1",{className:"h-names",children:[(0,G.jsx)("span",{className:"nm e3",children:yt.bride}),(0,G.jsx)("span",{className:"amp e4",children:"&"}),(0,G.jsx)("span",{className:"nm e5",children:yt.groom})]}),(0,G.jsxs)("p",{className:"h-hi e6",lang:"hi",children:[yt.brideHi," ",(0,G.jsx)("small",{children:"weds"})," ",yt.groomHi]}),(0,G.jsx)(zc,{}),(0,G.jsx)("p",{className:"h-ask e7",children:"request the honour of your presence at their wedding"}),(0,G.jsxs)("div",{className:"h-date e8","aria-label":`${r.weekday}, ${r.day} ${r.month} ${r.year}`,children:[(0,G.jsx)("span",{children:r.weekday}),(0,G.jsx)("b",{children:r.day}),(0,G.jsxs)("span",{children:[r.month," ",r.year]})]}),(0,G.jsxs)("p",{className:"h-venue e9",children:[yt.venueName,", ",yt.venueCity]})]}),(0,G.jsx)("div",{className:"scroll-cue","aria-hidden":"true",children:(0,G.jsx)("i",{})})]}),(0,G.jsxs)("section",{className:"sec",children:[(0,G.jsxs)(Gi,{children:[(0,G.jsx)("p",{className:"eyebrow",children:"Every moment counts"}),(0,G.jsx)("h2",{children:"The countdown begins"}),(0,G.jsx)(zc,{})]}),(0,G.jsx)(Gi,{delay:120,children:(0,G.jsx)(n_,{cls:"rcd"})}),(0,G.jsx)(Gi,{delay:200,children:(0,G.jsxs)("p",{className:"cd-note",children:["until the baraat arrives, ",Vo(yt.weddingDate).day," ",Vo(yt.weddingDate).month]})})]}),(0,G.jsxs)("section",{className:"sec",children:[(0,G.jsxs)(Gi,{children:[(0,G.jsx)("p",{className:"eyebrow",children:"Two days of joy"}),(0,G.jsx)("h2",{children:"The celebrations"}),(0,G.jsx)(zc,{})]}),(0,G.jsx)("ol",{className:"tl",children:a.map((s,o)=>(0,G.jsxs)(Gi,{as:"li",className:"ev",delay:o*60,children:[(0,G.jsxs)("div",{className:"ev-date",children:[(0,G.jsx)("b",{children:s.d.day}),(0,G.jsx)("span",{children:s.d.monthShort})]}),(0,G.jsx)("i",{className:"ev-dot","aria-hidden":"true"}),(0,G.jsxs)("div",{className:"ev-card",children:[(0,G.jsx)("div",{className:"ev-ic",children:(0,G.jsx)(sp,{name:s.icon})}),(0,G.jsxs)("p",{className:"ev-day",children:[s.d.weekday," \xB7 ",s.time]}),(0,G.jsxs)("h3",{children:[s.name," ",(0,G.jsx)("small",{lang:"hi",children:s.hi})]}),(0,G.jsx)("p",{className:"ev-note",children:s.note}),(0,G.jsxs)("p",{className:"ev-where",children:[s.venue,", Rourkela"]})]})]},s.id))})]}),(0,G.jsxs)("section",{className:"sec venue",children:[(0,G.jsxs)(Gi,{children:[(0,G.jsx)("p",{className:"eyebrow",children:"Where to find us"}),(0,G.jsx)("h2",{children:"The venue"}),(0,G.jsx)(zc,{})]}),(0,G.jsxs)(Gi,{delay:100,className:"v-card",children:[(0,G.jsx)("div",{className:"ev-ic",children:(0,G.jsx)(sp,{name:"pin"})}),(0,G.jsx)("h3",{children:yt.venueName}),(0,G.jsxs)("p",{lang:"hi",className:"v-hi",children:[yt.venueNameHi,", \u0930\u093E\u0909\u0930\u0915\u0947\u0932\u093E"]}),(0,G.jsx)("p",{children:yt.venueCity}),(0,G.jsxs)("div",{className:"btns",children:[(0,G.jsx)("a",{className:"rbtn",href:Jv(),target:"_blank",rel:"noopener noreferrer",children:"Get directions"}),(0,G.jsx)("a",{className:"rbtn ghost",href:Qv(),download:"aastha-mayank-wedding.ics",children:"Add to calendar"})]})]})]}),(0,G.jsx)("footer",{className:"rfoot",children:(0,G.jsxs)(Gi,{children:[(0,G.jsx)("p",{lang:"hi",className:"h-ganesh",children:"\u0965 \u0936\u0941\u092D \u0935\u093F\u0935\u093E\u0939 \u0965"}),(0,G.jsxs)("p",{className:"f-names",children:[yt.bride," & ",yt.groom]}),(0,G.jsxs)("p",{className:"f-note",children:["With love and blessings from",(0,G.jsx)("br",{}),yt.family]}),(0,G.jsx)("p",{className:"f-sub",children:"Your presence will make our celebration complete."})]})})]})]})}var on=lr(Vr());function Qy(){return(0,on.jsxs)(Yv,{children:[(0,on.jsx)(Bu,{path:"/",element:(0,on.jsx)(Bc,{})}),(0,on.jsx)(Bu,{path:"/royal",element:(0,on.jsx)(Bc,{})}),(0,on.jsx)(Bu,{path:"*",element:(0,on.jsx)(Bc,{})})]})}var tx=lr(Vr()),Zy=new URLSearchParams(location.search).get("vh");if(Zy){let e=document.createElement("style");e.textContent=`.hero,.ivhero{min-height:${Zy}px!important}`,document.head.appendChild(e)}(0,ex.createRoot)(document.getElementById("root")).render((0,tx.jsx)(Qy,{}));})();
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
