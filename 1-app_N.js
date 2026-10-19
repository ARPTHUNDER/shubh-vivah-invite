(()=>{var ix=Object.create;var dm=Object.defineProperty;var nx=Object.getOwnPropertyDescriptor;var ax=Object.getOwnPropertyNames;var sx=Object.getPrototypeOf,ox=Object.prototype.hasOwnProperty;var Ni=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(r){throw t=0,r}};var lx=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of ax(t))!ox.call(e,n)&&n!==r&&dm(e,n,{get:()=>t[n],enumerable:!(i=nx(t,n))||i.enumerable});return e};var or=(e,t,r)=>(r=e!=null?ix(sx(e)):{},lx(t||!e||!e.__esModule?dm(r,"default",{value:e,enumerable:!0}):r,e));var wm=Ni(ut=>{"use strict";var qs=Symbol.for("react.element"),ux=Symbol.for("react.portal"),cx=Symbol.for("react.fragment"),hx=Symbol.for("react.strict_mode"),dx=Symbol.for("react.profiler"),px=Symbol.for("react.provider"),fx=Symbol.for("react.context"),mx=Symbol.for("react.forward_ref"),gx=Symbol.for("react.suspense"),vx=Symbol.for("react.memo"),_x=Symbol.for("react.lazy"),pm=Symbol.iterator;function yx(e){return e===null||typeof e!="object"?null:(e=pm&&e[pm]||e["@@iterator"],typeof e=="function"?e:null)}var gm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vm=Object.assign,_m={};function Ea(e,t,r){this.props=e,this.context=t,this.refs=_m,this.updater=r||gm}Ea.prototype.isReactComponent={};Ea.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ea.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ym(){}ym.prototype=Ea.prototype;function Gc(e,t,r){this.props=e,this.context=t,this.refs=_m,this.updater=r||gm}var Wc=Gc.prototype=new ym;Wc.constructor=Gc;vm(Wc,Ea.prototype);Wc.isPureReactComponent=!0;var fm=Array.isArray,xm=Object.prototype.hasOwnProperty,Xc={current:null},Sm={key:!0,ref:!0,__self:!0,__source:!0};function Mm(e,t,r){var i,n={},a=null,s=null;if(t!=null)for(i in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)xm.call(t,i)&&!Sm.hasOwnProperty(i)&&(n[i]=t[i]);var o=arguments.length-2;if(o===1)n.children=r;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];n.children=l}if(e&&e.defaultProps)for(i in o=e.defaultProps,o)n[i]===void 0&&(n[i]=o[i]);return{$$typeof:qs,type:e,key:a,ref:s,props:n,_owner:Xc.current}}function xx(e,t){return{$$typeof:qs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function jc(e){return typeof e=="object"&&e!==null&&e.$$typeof===qs}function Sx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var mm=/\/+/g;function Hc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sx(""+e.key):t.toString(36)}function _l(e,t,r,i,n){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case qs:case ux:s=!0}}if(s)return s=e,n=n(s),e=i===""?"."+Hc(s,0):i,fm(n)?(r="",e!=null&&(r=e.replace(mm,"$&/")+"/"),_l(n,t,r,"",function(u){return u})):n!=null&&(jc(n)&&(n=xx(n,r+(!n.key||s&&s.key===n.key?"":(""+n.key).replace(mm,"$&/")+"/")+e)),t.push(n)),1;if(s=0,i=i===""?".":i+":",fm(e))for(var o=0;o<e.length;o++){a=e[o];var l=i+Hc(a,o);s+=_l(a,t,r,l,n)}else if(l=yx(e),typeof l=="function")for(e=l.call(e),o=0;!(a=e.next()).done;)a=a.value,l=i+Hc(a,o++),s+=_l(a,t,r,l,n);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function vl(e,t,r){if(e==null)return e;var i=[],n=0;return _l(e,i,"","",function(a){return t.call(r,a,n++)}),i}function Mx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _r={current:null},yl={transition:null},Ex={ReactCurrentDispatcher:_r,ReactCurrentBatchConfig:yl,ReactCurrentOwner:Xc};function Em(){throw Error("act(...) is not supported in production builds of React.")}ut.Children={map:vl,forEach:function(e,t,r){vl(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return vl(e,function(){t++}),t},toArray:function(e){return vl(e,function(t){return t})||[]},only:function(e){if(!jc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ut.Component=Ea;ut.Fragment=cx;ut.Profiler=dx;ut.PureComponent=Gc;ut.StrictMode=hx;ut.Suspense=gx;ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ex;ut.act=Em;ut.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=vm({},e.props),n=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=Xc.current),t.key!==void 0&&(n=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(l in t)xm.call(t,l)&&!Sm.hasOwnProperty(l)&&(i[l]=t[l]===void 0&&o!==void 0?o[l]:t[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:qs,type:e.type,key:n,ref:a,props:i,_owner:s}};ut.createContext=function(e){return e={$$typeof:fx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:px,_context:e},e.Consumer=e};ut.createElement=Mm;ut.createFactory=function(e){var t=Mm.bind(null,e);return t.type=e,t};ut.createRef=function(){return{current:null}};ut.forwardRef=function(e){return{$$typeof:mx,render:e}};ut.isValidElement=jc;ut.lazy=function(e){return{$$typeof:_x,_payload:{_status:-1,_result:e},_init:Mx}};ut.memo=function(e,t){return{$$typeof:vx,type:e,compare:t===void 0?null:t}};ut.startTransition=function(e){var t=yl.transition;yl.transition={};try{e()}finally{yl.transition=t}};ut.unstable_act=Em;ut.useCallback=function(e,t){return _r.current.useCallback(e,t)};ut.useContext=function(e){return _r.current.useContext(e)};ut.useDebugValue=function(){};ut.useDeferredValue=function(e){return _r.current.useDeferredValue(e)};ut.useEffect=function(e,t){return _r.current.useEffect(e,t)};ut.useId=function(){return _r.current.useId()};ut.useImperativeHandle=function(e,t,r){return _r.current.useImperativeHandle(e,t,r)};ut.useInsertionEffect=function(e,t){return _r.current.useInsertionEffect(e,t)};ut.useLayoutEffect=function(e,t){return _r.current.useLayoutEffect(e,t)};ut.useMemo=function(e,t){return _r.current.useMemo(e,t)};ut.useReducer=function(e,t,r){return _r.current.useReducer(e,t,r)};ut.useRef=function(e){return _r.current.useRef(e)};ut.useState=function(e){return _r.current.useState(e)};ut.useSyncExternalStore=function(e,t,r){return _r.current.useSyncExternalStore(e,t,r)};ut.useTransition=function(){return _r.current.useTransition()};ut.version="18.3.1"});var wa=Ni((uR,Tm)=>{"use strict";Tm.exports=wm()});var Im=Ni(Mt=>{"use strict";function Kc(e,t){var r=e.length;e.push(t);e:for(;0<r;){var i=r-1>>>1,n=e[i];if(0<xl(n,t))e[i]=t,e[r]=n,r=i;else break e}}function ii(e){return e.length===0?null:e[0]}function Ml(e){if(e.length===0)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;e:for(var i=0,n=e.length,a=n>>>1;i<a;){var s=2*(i+1)-1,o=e[s],l=s+1,u=e[l];if(0>xl(o,r))l<n&&0>xl(u,o)?(e[i]=u,e[l]=r,i=l):(e[i]=o,e[s]=r,i=s);else if(l<n&&0>xl(u,r))e[i]=u,e[l]=r,i=l;else break e}}return t}function xl(e,t){var r=e.sortIndex-t.sortIndex;return r!==0?r:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(bm=performance,Mt.unstable_now=function(){return bm.now()}):($c=Date,Am=$c.now(),Mt.unstable_now=function(){return $c.now()-Am});var bm,$c,Am,yi=[],ln=[],wx=1,$r=null,lr=3,El=!1,Gn=!1,Ks=!1,Pm=typeof setTimeout=="function"?setTimeout:null,Nm=typeof clearTimeout=="function"?clearTimeout:null,Cm=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Jc(e){for(var t=ii(ln);t!==null;){if(t.callback===null)Ml(ln);else if(t.startTime<=e)Ml(ln),t.sortIndex=t.expirationTime,Kc(yi,t);else break;t=ii(ln)}}function Zc(e){if(Ks=!1,Jc(e),!Gn)if(ii(yi)!==null)Gn=!0,eh(Qc);else{var t=ii(ln);t!==null&&th(Zc,t.startTime-e)}}function Qc(e,t){Gn=!1,Ks&&(Ks=!1,Nm(Js),Js=-1),El=!0;var r=lr;try{for(Jc(t),$r=ii(yi);$r!==null&&(!($r.expirationTime>t)||e&&!Um());){var i=$r.callback;if(typeof i=="function"){$r.callback=null,lr=$r.priorityLevel;var n=i($r.expirationTime<=t);t=Mt.unstable_now(),typeof n=="function"?$r.callback=n:$r===ii(yi)&&Ml(yi),Jc(t)}else Ml(yi);$r=ii(yi)}if($r!==null)var a=!0;else{var s=ii(ln);s!==null&&th(Zc,s.startTime-t),a=!1}return a}finally{$r=null,lr=r,El=!1}}var wl=!1,Sl=null,Js=-1,Lm=5,Dm=-1;function Um(){return!(Mt.unstable_now()-Dm<Lm)}function qc(){if(Sl!==null){var e=Mt.unstable_now();Dm=e;var t=!0;try{t=Sl(!0,e)}finally{t?Ys():(wl=!1,Sl=null)}}else wl=!1}var Ys;typeof Cm=="function"?Ys=function(){Cm(qc)}:typeof MessageChannel<"u"?(Yc=new MessageChannel,Rm=Yc.port2,Yc.port1.onmessage=qc,Ys=function(){Rm.postMessage(null)}):Ys=function(){Pm(qc,0)};var Yc,Rm;function eh(e){Sl=e,wl||(wl=!0,Ys())}function th(e,t){Js=Pm(function(){e(Mt.unstable_now())},t)}Mt.unstable_IdlePriority=5;Mt.unstable_ImmediatePriority=1;Mt.unstable_LowPriority=4;Mt.unstable_NormalPriority=3;Mt.unstable_Profiling=null;Mt.unstable_UserBlockingPriority=2;Mt.unstable_cancelCallback=function(e){e.callback=null};Mt.unstable_continueExecution=function(){Gn||El||(Gn=!0,eh(Qc))};Mt.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Lm=0<e?Math.floor(1e3/e):5};Mt.unstable_getCurrentPriorityLevel=function(){return lr};Mt.unstable_getFirstCallbackNode=function(){return ii(yi)};Mt.unstable_next=function(e){switch(lr){case 1:case 2:case 3:var t=3;break;default:t=lr}var r=lr;lr=t;try{return e()}finally{lr=r}};Mt.unstable_pauseExecution=function(){};Mt.unstable_requestPaint=function(){};Mt.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=lr;lr=e;try{return t()}finally{lr=r}};Mt.unstable_scheduleCallback=function(e,t,r){var i=Mt.unstable_now();switch(typeof r=="object"&&r!==null?(r=r.delay,r=typeof r=="number"&&0<r?i+r:i):r=i,e){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=r+n,e={id:wx++,callback:t,priorityLevel:e,startTime:r,expirationTime:n,sortIndex:-1},r>i?(e.sortIndex=r,Kc(ln,e),ii(yi)===null&&e===ii(ln)&&(Ks?(Nm(Js),Js=-1):Ks=!0,th(Zc,r-i))):(e.sortIndex=n,Kc(yi,e),Gn||El||(Gn=!0,eh(Qc))),e};Mt.unstable_shouldYield=Um;Mt.unstable_wrapCallback=function(e){var t=lr;return function(){var r=lr;lr=t;try{return e.apply(this,arguments)}finally{lr=r}}}});var km=Ni((hR,Om)=>{"use strict";Om.exports=Im()});var Vv=Ni(zr=>{"use strict";var Tx=wa(),kr=km();function oe(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wg=new Set,xo={};function ra(e,t){Xa(e,t),Xa(e+"Capture",t)}function Xa(e,t){for(xo[e]=t,e=0;e<t.length;e++)Wg.add(t[e])}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wh=Object.prototype.hasOwnProperty,bx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fm={},zm={};function Ax(e){return wh.call(zm,e)?!0:wh.call(Fm,e)?!1:bx.test(e)?zm[e]=!0:(Fm[e]=!0,!1)}function Cx(e,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Rx(e,t,r,i){if(t===null||typeof t>"u"||Cx(e,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Sr(e,t,r,i,n,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=n,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var ar={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ar[e]=new Sr(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ar[t]=new Sr(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ar[e]=new Sr(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ar[e]=new Sr(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ar[e]=new Sr(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ar[e]=new Sr(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ar[e]=new Sr(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ar[e]=new Sr(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ar[e]=new Sr(e,5,!1,e.toLowerCase(),null,!1,!1)});var gd=/[\-:]([a-z])/g;function vd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gd,vd);ar[t]=new Sr(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gd,vd);ar[t]=new Sr(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gd,vd);ar[t]=new Sr(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ar[e]=new Sr(e,1,!1,e.toLowerCase(),null,!1,!1)});ar.xlinkHref=new Sr("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ar[e]=new Sr(e,1,!1,e.toLowerCase(),null,!0,!0)});function _d(e,t,r,i){var n=ar.hasOwnProperty(t)?ar[t]:null;(n!==null?n.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Rx(t,r,n,i)&&(r=null),i||n===null?Ax(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):n.mustUseProperty?e[n.propertyName]=r===null?n.type===3?!1:"":r:(t=n.attributeName,i=n.attributeNamespace,r===null?e.removeAttribute(t):(n=n.type,r=n===3||n===4&&r===!0?"":""+r,i?e.setAttributeNS(i,t,r):e.setAttribute(t,r))))}var Vi=Tx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tl=Symbol.for("react.element"),Aa=Symbol.for("react.portal"),Ca=Symbol.for("react.fragment"),yd=Symbol.for("react.strict_mode"),Th=Symbol.for("react.profiler"),Xg=Symbol.for("react.provider"),jg=Symbol.for("react.context"),xd=Symbol.for("react.forward_ref"),bh=Symbol.for("react.suspense"),Ah=Symbol.for("react.suspense_list"),Sd=Symbol.for("react.memo"),cn=Symbol.for("react.lazy"),$g=Symbol.for("react.offscreen"),Bm=Symbol.iterator;function Zs(e){return e===null||typeof e!="object"?null:(e=Bm&&e[Bm]||e["@@iterator"],typeof e=="function"?e:null)}var Ot=Object.assign,rh;function so(e){if(rh===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);rh=t&&t[1]||""}return`
`+rh+e}var ih=!1;function nh(e,t){if(!e||ih)return"";ih=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var i=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){i=u}e.call(t.prototype)}else{try{throw Error()}catch(u){i=u}e()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var n=u.stack.split(`
`),a=i.stack.split(`
`),s=n.length-1,o=a.length-1;1<=s&&0<=o&&n[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(n[s]!==a[o]){if(s!==1||o!==1)do if(s--,o--,0>o||n[s]!==a[o]){var l=`
`+n[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=o);break}}}finally{ih=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?so(e):""}function Px(e){switch(e.tag){case 5:return so(e.type);case 16:return so("Lazy");case 13:return so("Suspense");case 19:return so("SuspenseList");case 0:case 2:case 15:return e=nh(e.type,!1),e;case 11:return e=nh(e.type.render,!1),e;case 1:return e=nh(e.type,!0),e;default:return""}}function Ch(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ca:return"Fragment";case Aa:return"Portal";case Th:return"Profiler";case yd:return"StrictMode";case bh:return"Suspense";case Ah:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case jg:return(e.displayName||"Context")+".Consumer";case Xg:return(e._context.displayName||"Context")+".Provider";case xd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Sd:return t=e.displayName||null,t!==null?t:Ch(e.type)||"Memo";case cn:t=e._payload,e=e._init;try{return Ch(e(t))}catch{}}return null}function Nx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ch(t);case 8:return t===yd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Lx(e){var t=qg(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var n=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(s){i=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bl(e){e._valueTracker||(e._valueTracker=Lx(e))}function Yg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=qg(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function eu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rh(e,t){var r=t.checked;return Ot({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Vm(e,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=wn(t.value!=null?t.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Kg(e,t){t=t.checked,t!=null&&_d(e,"checked",t,!1)}function Ph(e,t){Kg(e,t);var r=wn(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Nh(e,t.type,r):t.hasOwnProperty("defaultValue")&&Nh(e,t.type,wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Hm(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Nh(e,t,r){(t!=="number"||eu(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var oo=Array.isArray;function za(e,t,r,i){if(e=e.options,t){t={};for(var n=0;n<r.length;n++)t["$"+r[n]]=!0;for(r=0;r<e.length;r++)n=t.hasOwnProperty("$"+e[r].value),e[r].selected!==n&&(e[r].selected=n),n&&i&&(e[r].defaultSelected=!0)}else{for(r=""+wn(r),t=null,n=0;n<e.length;n++){if(e[n].value===r){e[n].selected=!0,i&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Lh(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(oe(91));return Ot({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gm(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(oe(92));if(oo(r)){if(1<r.length)throw Error(oe(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:wn(r)}}function Jg(e,t){var r=wn(t.value),i=wn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function Wm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dh(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Al,Qg=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,n){MSApp.execUnsafeLocalFunction(function(){return e(t,r,i,n)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Al=Al||document.createElement("div"),Al.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Al.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function So(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dx=["Webkit","ms","Moz","O"];Object.keys(co).forEach(function(e){Dx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),co[t]=co[e]})});function e0(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||co.hasOwnProperty(e)&&co[e]?(""+t).trim():t+"px"}function t0(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,n=e0(r,t[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,n):e[r]=n}}var Ux=Ot({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uh(e,t){if(t){if(Ux[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(oe(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(oe(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(oe(61))}if(t.style!=null&&typeof t.style!="object")throw Error(oe(62))}}function Ih(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oh=null;function Md(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var kh=null,Ba=null,Va=null;function Xm(e){if(e=zo(e)){if(typeof kh!="function")throw Error(oe(280));var t=e.stateNode;t&&(t=Cu(t),kh(e.stateNode,e.type,t))}}function r0(e){Ba?Va?Va.push(e):Va=[e]:Ba=e}function i0(){if(Ba){var e=Ba,t=Va;if(Va=Ba=null,Xm(e),t)for(e=0;e<t.length;e++)Xm(t[e])}}function n0(e,t){return e(t)}function a0(){}var ah=!1;function s0(e,t,r){if(ah)return e(t,r);ah=!0;try{return n0(e,t,r)}finally{ah=!1,(Ba!==null||Va!==null)&&(a0(),i0())}}function Mo(e,t){var r=e.stateNode;if(r===null)return null;var i=Cu(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(oe(231,t,typeof r));return r}var Fh=!1;if(ki)try{Ta={},Object.defineProperty(Ta,"passive",{get:function(){Fh=!0}}),window.addEventListener("test",Ta,Ta),window.removeEventListener("test",Ta,Ta)}catch{Fh=!1}var Ta;function Ix(e,t,r,i,n,a,s,o,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(c){this.onError(c)}}var ho=!1,tu=null,ru=!1,zh=null,Ox={onError:function(e){ho=!0,tu=e}};function kx(e,t,r,i,n,a,s,o,l){ho=!1,tu=null,Ix.apply(Ox,arguments)}function Fx(e,t,r,i,n,a,s,o,l){if(kx.apply(this,arguments),ho){if(ho){var u=tu;ho=!1,tu=null}else throw Error(oe(198));ru||(ru=!0,zh=u)}}function ia(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function o0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function jm(e){if(ia(e)!==e)throw Error(oe(188))}function zx(e){var t=e.alternate;if(!t){if(t=ia(e),t===null)throw Error(oe(188));return t!==e?null:e}for(var r=e,i=t;;){var n=r.return;if(n===null)break;var a=n.alternate;if(a===null){if(i=n.return,i!==null){r=i;continue}break}if(n.child===a.child){for(a=n.child;a;){if(a===r)return jm(n),e;if(a===i)return jm(n),t;a=a.sibling}throw Error(oe(188))}if(r.return!==i.return)r=n,i=a;else{for(var s=!1,o=n.child;o;){if(o===r){s=!0,r=n,i=a;break}if(o===i){s=!0,i=n,r=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===r){s=!0,r=a,i=n;break}if(o===i){s=!0,i=a,r=n;break}o=o.sibling}if(!s)throw Error(oe(189))}}if(r.alternate!==i)throw Error(oe(190))}if(r.tag!==3)throw Error(oe(188));return r.stateNode.current===r?e:t}function l0(e){return e=zx(e),e!==null?u0(e):null}function u0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=u0(e);if(t!==null)return t;e=e.sibling}return null}var c0=kr.unstable_scheduleCallback,$m=kr.unstable_cancelCallback,Bx=kr.unstable_shouldYield,Vx=kr.unstable_requestPaint,Bt=kr.unstable_now,Hx=kr.unstable_getCurrentPriorityLevel,Ed=kr.unstable_ImmediatePriority,h0=kr.unstable_UserBlockingPriority,iu=kr.unstable_NormalPriority,Gx=kr.unstable_LowPriority,d0=kr.unstable_IdlePriority,wu=null,Ei=null;function Wx(e){if(Ei&&typeof Ei.onCommitFiberRoot=="function")try{Ei.onCommitFiberRoot(wu,e,void 0,(e.current.flags&128)===128)}catch{}}var li=Math.clz32?Math.clz32:$x,Xx=Math.log,jx=Math.LN2;function $x(e){return e>>>=0,e===0?32:31-(Xx(e)/jx|0)|0}var Cl=64,Rl=4194304;function lo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function nu(e,t){var r=e.pendingLanes;if(r===0)return 0;var i=0,n=e.suspendedLanes,a=e.pingedLanes,s=r&268435455;if(s!==0){var o=s&~n;o!==0?i=lo(o):(a&=s,a!==0&&(i=lo(a)))}else s=r&~n,s!==0?i=lo(s):a!==0&&(i=lo(a));if(i===0)return 0;if(t!==0&&t!==i&&(t&n)===0&&(n=i&-i,a=t&-t,n>=a||n===16&&(a&4194240)!==0))return t;if((i&4)!==0&&(i|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)r=31-li(t),n=1<<r,i|=e[r],t&=~n;return i}function qx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yx(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,n=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-li(a),o=1<<s,l=n[s];l===-1?((o&r)===0||(o&i)!==0)&&(n[s]=qx(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}}function Bh(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function p0(){var e=Cl;return Cl<<=1,(Cl&4194240)===0&&(Cl=64),e}function sh(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ko(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-li(t),e[t]=r}function Kx(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var n=31-li(r),a=1<<n;t[n]=0,i[n]=-1,e[n]=-1,r&=~a}}function wd(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-li(r),n=1<<i;n&t|e[i]&t&&(e[i]|=t),r&=~n}}var mt=0;function f0(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var m0,Td,g0,v0,_0,Vh=!1,Pl=[],gn=null,vn=null,_n=null,Eo=new Map,wo=new Map,dn=[],Jx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qm(e,t){switch(e){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":Eo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(t.pointerId)}}function Qs(e,t,r,i,n,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:a,targetContainers:[n]},t!==null&&(t=zo(t),t!==null&&Td(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Zx(e,t,r,i,n){switch(t){case"focusin":return gn=Qs(gn,e,t,r,i,n),!0;case"dragenter":return vn=Qs(vn,e,t,r,i,n),!0;case"mouseover":return _n=Qs(_n,e,t,r,i,n),!0;case"pointerover":var a=n.pointerId;return Eo.set(a,Qs(Eo.get(a)||null,e,t,r,i,n)),!0;case"gotpointercapture":return a=n.pointerId,wo.set(a,Qs(wo.get(a)||null,e,t,r,i,n)),!0}return!1}function y0(e){var t=jn(e.target);if(t!==null){var r=ia(t);if(r!==null){if(t=r.tag,t===13){if(t=o0(r),t!==null){e.blockedOn=t,_0(e.priority,function(){g0(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Hh(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);Oh=i,r.target.dispatchEvent(i),Oh=null}else return t=zo(r),t!==null&&Td(t),e.blockedOn=r,!1;t.shift()}return!0}function Ym(e,t,r){Wl(e)&&r.delete(t)}function Qx(){Vh=!1,gn!==null&&Wl(gn)&&(gn=null),vn!==null&&Wl(vn)&&(vn=null),_n!==null&&Wl(_n)&&(_n=null),Eo.forEach(Ym),wo.forEach(Ym)}function eo(e,t){e.blockedOn===t&&(e.blockedOn=null,Vh||(Vh=!0,kr.unstable_scheduleCallback(kr.unstable_NormalPriority,Qx)))}function To(e){function t(n){return eo(n,e)}if(0<Pl.length){eo(Pl[0],e);for(var r=1;r<Pl.length;r++){var i=Pl[r];i.blockedOn===e&&(i.blockedOn=null)}}for(gn!==null&&eo(gn,e),vn!==null&&eo(vn,e),_n!==null&&eo(_n,e),Eo.forEach(t),wo.forEach(t),r=0;r<dn.length;r++)i=dn[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<dn.length&&(r=dn[0],r.blockedOn===null);)y0(r),r.blockedOn===null&&dn.shift()}var Ha=Vi.ReactCurrentBatchConfig,au=!0;function eS(e,t,r,i){var n=mt,a=Ha.transition;Ha.transition=null;try{mt=1,bd(e,t,r,i)}finally{mt=n,Ha.transition=a}}function tS(e,t,r,i){var n=mt,a=Ha.transition;Ha.transition=null;try{mt=4,bd(e,t,r,i)}finally{mt=n,Ha.transition=a}}function bd(e,t,r,i){if(au){var n=Hh(e,t,r,i);if(n===null)ph(e,t,i,su,r),qm(e,i);else if(Zx(n,e,t,r,i))i.stopPropagation();else if(qm(e,i),t&4&&-1<Jx.indexOf(e)){for(;n!==null;){var a=zo(n);if(a!==null&&m0(a),a=Hh(e,t,r,i),a===null&&ph(e,t,i,su,r),a===n)break;n=a}n!==null&&i.stopPropagation()}else ph(e,t,i,null,r)}}var su=null;function Hh(e,t,r,i){if(su=null,e=Md(i),e=jn(e),e!==null)if(t=ia(e),t===null)e=null;else if(r=t.tag,r===13){if(e=o0(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return su=e,null}function x0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hx()){case Ed:return 1;case h0:return 4;case iu:case Gx:return 16;case d0:return 536870912;default:return 16}default:return 16}}var fn=null,Ad=null,Xl=null;function S0(){if(Xl)return Xl;var e,t=Ad,r=t.length,i,n="value"in fn?fn.value:fn.textContent,a=n.length;for(e=0;e<r&&t[e]===n[e];e++);var s=r-e;for(i=1;i<=s&&t[r-i]===n[a-i];i++);return Xl=n.slice(e,1<i?1-i:void 0)}function jl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nl(){return!0}function Km(){return!1}function Fr(e){function t(r,i,n,a,s){this._reactName=r,this._targetInst=n,this.type=i,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Nl:Km,this.isPropagationStopped=Km,this}return Ot(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Nl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Nl)},persist:function(){},isPersistent:Nl}),t}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cd=Fr(Za),Fo=Ot({},Za,{view:0,detail:0}),rS=Fr(Fo),oh,lh,to,Tu=Ot({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==to&&(to&&e.type==="mousemove"?(oh=e.screenX-to.screenX,lh=e.screenY-to.screenY):lh=oh=0,to=e),oh)},movementY:function(e){return"movementY"in e?e.movementY:lh}}),Jm=Fr(Tu),iS=Ot({},Tu,{dataTransfer:0}),nS=Fr(iS),aS=Ot({},Fo,{relatedTarget:0}),uh=Fr(aS),sS=Ot({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),oS=Fr(sS),lS=Ot({},Za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uS=Fr(lS),cS=Ot({},Za,{data:0}),Zm=Fr(cS),hS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pS[e])?!!t[e]:!1}function Rd(){return fS}var mS=Ot({},Fo,{key:function(e){if(e.key){var t=hS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rd,charCode:function(e){return e.type==="keypress"?jl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gS=Fr(mS),vS=Ot({},Tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qm=Fr(vS),_S=Ot({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rd}),yS=Fr(_S),xS=Ot({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),SS=Fr(xS),MS=Ot({},Tu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ES=Fr(MS),wS=[9,13,27,32],Pd=ki&&"CompositionEvent"in window,po=null;ki&&"documentMode"in document&&(po=document.documentMode);var TS=ki&&"TextEvent"in window&&!po,M0=ki&&(!Pd||po&&8<po&&11>=po),eg=" ",tg=!1;function E0(e,t){switch(e){case"keyup":return wS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function w0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ra=!1;function bS(e,t){switch(e){case"compositionend":return w0(t);case"keypress":return t.which!==32?null:(tg=!0,eg);case"textInput":return e=t.data,e===eg&&tg?null:e;default:return null}}function AS(e,t){if(Ra)return e==="compositionend"||!Pd&&E0(e,t)?(e=S0(),Xl=Ad=fn=null,Ra=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return M0&&t.locale!=="ko"?null:t.data;default:return null}}var CS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!CS[e.type]:t==="textarea"}function T0(e,t,r,i){r0(i),t=ou(t,"onChange"),0<t.length&&(r=new Cd("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var fo=null,bo=null;function RS(e){O0(e,0)}function bu(e){var t=La(e);if(Yg(t))return e}function PS(e,t){if(e==="change")return t}var b0=!1;ki&&(ki?(Dl="oninput"in document,Dl||(ch=document.createElement("div"),ch.setAttribute("oninput","return;"),Dl=typeof ch.oninput=="function"),Ll=Dl):Ll=!1,b0=Ll&&(!document.documentMode||9<document.documentMode));var Ll,Dl,ch;function ig(){fo&&(fo.detachEvent("onpropertychange",A0),bo=fo=null)}function A0(e){if(e.propertyName==="value"&&bu(bo)){var t=[];T0(t,bo,e,Md(e)),s0(RS,t)}}function NS(e,t,r){e==="focusin"?(ig(),fo=t,bo=r,fo.attachEvent("onpropertychange",A0)):e==="focusout"&&ig()}function LS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bu(bo)}function DS(e,t){if(e==="click")return bu(t)}function US(e,t){if(e==="input"||e==="change")return bu(t)}function IS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ci=typeof Object.is=="function"?Object.is:IS;function Ao(e,t){if(ci(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var n=r[i];if(!wh.call(t,n)||!ci(e[n],t[n]))return!1}return!0}function ng(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ag(e,t){var r=ng(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ng(r)}}function C0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?C0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function R0(){for(var e=window,t=eu();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=eu(e.document)}return t}function Nd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function OS(e){var t=R0(),r=e.focusedElem,i=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&C0(r.ownerDocument.documentElement,r)){if(i!==null&&Nd(r)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var n=r.textContent.length,a=Math.min(i.start,n);i=i.end===void 0?a:Math.min(i.end,n),!e.extend&&a>i&&(n=i,i=a,a=n),n=ag(r,a);var s=ag(r,i);n&&s&&(e.rangeCount!==1||e.anchorNode!==n.node||e.anchorOffset!==n.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(n.node,n.offset),e.removeAllRanges(),a>i?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kS=ki&&"documentMode"in document&&11>=document.documentMode,Pa=null,Gh=null,mo=null,Wh=!1;function sg(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Wh||Pa==null||Pa!==eu(i)||(i=Pa,"selectionStart"in i&&Nd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),mo&&Ao(mo,i)||(mo=i,i=ou(Gh,"onSelect"),0<i.length&&(t=new Cd("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=Pa)))}function Ul(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Na={animationend:Ul("Animation","AnimationEnd"),animationiteration:Ul("Animation","AnimationIteration"),animationstart:Ul("Animation","AnimationStart"),transitionend:Ul("Transition","TransitionEnd")},hh={},P0={};ki&&(P0=document.createElement("div").style,"AnimationEvent"in window||(delete Na.animationend.animation,delete Na.animationiteration.animation,delete Na.animationstart.animation),"TransitionEvent"in window||delete Na.transitionend.transition);function Au(e){if(hh[e])return hh[e];if(!Na[e])return e;var t=Na[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in P0)return hh[e]=t[r];return e}var N0=Au("animationend"),L0=Au("animationiteration"),D0=Au("animationstart"),U0=Au("transitionend"),I0=new Map,og="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bn(e,t){I0.set(e,t),ra(t,[e])}for(Il=0;Il<og.length;Il++)Ol=og[Il],lg=Ol.toLowerCase(),ug=Ol[0].toUpperCase()+Ol.slice(1),bn(lg,"on"+ug);var Ol,lg,ug,Il;bn(N0,"onAnimationEnd");bn(L0,"onAnimationIteration");bn(D0,"onAnimationStart");bn("dblclick","onDoubleClick");bn("focusin","onFocus");bn("focusout","onBlur");bn(U0,"onTransitionEnd");Xa("onMouseEnter",["mouseout","mouseover"]);Xa("onMouseLeave",["mouseout","mouseover"]);Xa("onPointerEnter",["pointerout","pointerover"]);Xa("onPointerLeave",["pointerout","pointerover"]);ra("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ra("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ra("onBeforeInput",["compositionend","keypress","textInput","paste"]);ra("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ra("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ra("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FS=new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));function cg(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,Fx(i,t,void 0,e),e.currentTarget=null}function O0(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],n=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==a&&n.isPropagationStopped())break e;cg(n,o,u),a=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,u=o.currentTarget,o=o.listener,l!==a&&n.isPropagationStopped())break e;cg(n,o,u),a=l}}}if(ru)throw e=zh,ru=!1,zh=null,e}function Ct(e,t){var r=t[Yh];r===void 0&&(r=t[Yh]=new Set);var i=e+"__bubble";r.has(i)||(k0(t,e,2,!1),r.add(i))}function dh(e,t,r){var i=0;t&&(i|=4),k0(r,e,i,t)}var kl="_reactListening"+Math.random().toString(36).slice(2);function Co(e){if(!e[kl]){e[kl]=!0,Wg.forEach(function(r){r!=="selectionchange"&&(FS.has(r)||dh(r,!1,e),dh(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[kl]||(t[kl]=!0,dh("selectionchange",!1,t))}}function k0(e,t,r,i){switch(x0(t)){case 1:var n=eS;break;case 4:n=tS;break;default:n=bd}r=n.bind(null,t,r,e),n=void 0,!Fh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),i?n!==void 0?e.addEventListener(t,r,{capture:!0,passive:n}):e.addEventListener(t,r,!0):n!==void 0?e.addEventListener(t,r,{passive:n}):e.addEventListener(t,r,!1)}function ph(e,t,r,i,n){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===n||o.nodeType===8&&o.parentNode===n)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===n||l.nodeType===8&&l.parentNode===n))return;s=s.return}for(;o!==null;){if(s=jn(o),s===null)return;if(l=s.tag,l===5||l===6){i=a=s;continue e}o=o.parentNode}}i=i.return}s0(function(){var u=a,c=Md(r),h=[];e:{var p=I0.get(e);if(p!==void 0){var f=Cd,y=e;switch(e){case"keypress":if(jl(r)===0)break e;case"keydown":case"keyup":f=gS;break;case"focusin":y="focus",f=uh;break;case"focusout":y="blur",f=uh;break;case"beforeblur":case"afterblur":f=uh;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Jm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=nS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=yS;break;case N0:case L0:case D0:f=oS;break;case U0:f=SS;break;case"scroll":f=rS;break;case"wheel":f=ES;break;case"copy":case"cut":case"paste":f=uS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Qm}var _=(t&4)!==0,v=!_&&e==="scroll",d=_?p!==null?p+"Capture":null:p;_=[];for(var g=u,m;g!==null;){m=g;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,d!==null&&(x=Mo(g,d),x!=null&&_.push(Ro(g,x,m)))),v)break;g=g.return}0<_.length&&(p=new f(p,y,null,r,c),h.push({event:p,listeners:_}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",p&&r!==Oh&&(y=r.relatedTarget||r.fromElement)&&(jn(y)||y[Fi]))break e;if((f||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,f?(y=r.relatedTarget||r.toElement,f=u,y=y?jn(y):null,y!==null&&(v=ia(y),y!==v||y.tag!==5&&y.tag!==6)&&(y=null)):(f=null,y=u),f!==y)){if(_=Jm,x="onMouseLeave",d="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(_=Qm,x="onPointerLeave",d="onPointerEnter",g="pointer"),v=f==null?p:La(f),m=y==null?p:La(y),p=new _(x,g+"leave",f,r,c),p.target=v,p.relatedTarget=m,x=null,jn(c)===u&&(_=new _(d,g+"enter",y,r,c),_.target=m,_.relatedTarget=v,x=_),v=x,f&&y)t:{for(_=f,d=y,g=0,m=_;m;m=ba(m))g++;for(m=0,x=d;x;x=ba(x))m++;for(;0<g-m;)_=ba(_),g--;for(;0<m-g;)d=ba(d),m--;for(;g--;){if(_===d||d!==null&&_===d.alternate)break t;_=ba(_),d=ba(d)}_=null}else _=null;f!==null&&hg(h,p,f,_,!1),y!==null&&v!==null&&hg(h,v,y,_,!0)}}e:{if(p=u?La(u):window,f=p.nodeName&&p.nodeName.toLowerCase(),f==="select"||f==="input"&&p.type==="file")var P=PS;else if(rg(p))if(b0)P=US;else{P=LS;var T=NS}else(f=p.nodeName)&&f.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(P=DS);if(P&&(P=P(e,u))){T0(h,P,r,c);break e}T&&T(e,p,u),e==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&Nh(p,"number",p.value)}switch(T=u?La(u):window,e){case"focusin":(rg(T)||T.contentEditable==="true")&&(Pa=T,Gh=u,mo=null);break;case"focusout":mo=Gh=Pa=null;break;case"mousedown":Wh=!0;break;case"contextmenu":case"mouseup":case"dragend":Wh=!1,sg(h,r,c);break;case"selectionchange":if(kS)break;case"keydown":case"keyup":sg(h,r,c)}var b;if(Pd)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Ra?E0(e,r)&&(R="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(R="onCompositionStart");R&&(M0&&r.locale!=="ko"&&(Ra||R!=="onCompositionStart"?R==="onCompositionEnd"&&Ra&&(b=S0()):(fn=c,Ad="value"in fn?fn.value:fn.textContent,Ra=!0)),T=ou(u,R),0<T.length&&(R=new Zm(R,e,null,r,c),h.push({event:R,listeners:T}),b?R.data=b:(b=w0(r),b!==null&&(R.data=b)))),(b=TS?bS(e,r):AS(e,r))&&(u=ou(u,"onBeforeInput"),0<u.length&&(c=new Zm("onBeforeInput","beforeinput",null,r,c),h.push({event:c,listeners:u}),c.data=b))}O0(h,t)})}function Ro(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ou(e,t){for(var r=t+"Capture",i=[];e!==null;){var n=e,a=n.stateNode;n.tag===5&&a!==null&&(n=a,a=Mo(e,r),a!=null&&i.unshift(Ro(e,a,n)),a=Mo(e,t),a!=null&&i.push(Ro(e,a,n))),e=e.return}return i}function ba(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hg(e,t,r,i,n){for(var a=t._reactName,s=[];r!==null&&r!==i;){var o=r,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,n?(l=Mo(r,a),l!=null&&s.unshift(Ro(r,l,o))):n||(l=Mo(r,a),l!=null&&s.push(Ro(r,l,o)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var zS=/\r\n?/g,BS=/\u0000|\uFFFD/g;function dg(e){return(typeof e=="string"?e:""+e).replace(zS,`
`).replace(BS,"")}function Fl(e,t,r){if(t=dg(t),dg(e)!==t&&r)throw Error(oe(425))}function lu(){}var Xh=null,jh=null;function $h(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qh=typeof setTimeout=="function"?setTimeout:void 0,VS=typeof clearTimeout=="function"?clearTimeout:void 0,pg=typeof Promise=="function"?Promise:void 0,HS=typeof queueMicrotask=="function"?queueMicrotask:typeof pg<"u"?function(e){return pg.resolve(null).then(e).catch(GS)}:qh;function GS(e){setTimeout(function(){throw e})}function fh(e,t){var r=t,i=0;do{var n=r.nextSibling;if(e.removeChild(r),n&&n.nodeType===8)if(r=n.data,r==="/$"){if(i===0){e.removeChild(n),To(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=n}while(r);To(t)}function yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Qa=Math.random().toString(36).slice(2),Mi="__reactFiber$"+Qa,Po="__reactProps$"+Qa,Fi="__reactContainer$"+Qa,Yh="__reactEvents$"+Qa,WS="__reactListeners$"+Qa,XS="__reactHandles$"+Qa;function jn(e){var t=e[Mi];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Fi]||r[Mi]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=fg(e);e!==null;){if(r=e[Mi])return r;e=fg(e)}return t}e=r,r=e.parentNode}return null}function zo(e){return e=e[Mi]||e[Fi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function La(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(oe(33))}function Cu(e){return e[Po]||null}var Kh=[],Da=-1;function An(e){return{current:e}}function Rt(e){0>Da||(e.current=Kh[Da],Kh[Da]=null,Da--)}function Et(e,t){Da++,Kh[Da]=e.current,e.current=t}var Tn={},dr=An(Tn),Rr=An(!1),Jn=Tn;function ja(e,t){var r=e.type.contextTypes;if(!r)return Tn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var n={},a;for(a in r)n[a]=t[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=n),n}function Pr(e){return e=e.childContextTypes,e!=null}function uu(){Rt(Rr),Rt(dr)}function mg(e,t,r){if(dr.current!==Tn)throw Error(oe(168));Et(dr,t),Et(Rr,r)}function F0(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var n in i)if(!(n in t))throw Error(oe(108,Nx(e)||"Unknown",n));return Ot({},r,i)}function cu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tn,Jn=dr.current,Et(dr,e),Et(Rr,Rr.current),!0}function gg(e,t,r){var i=e.stateNode;if(!i)throw Error(oe(169));r?(e=F0(e,t,Jn),i.__reactInternalMemoizedMergedChildContext=e,Rt(Rr),Rt(dr),Et(dr,e)):Rt(Rr),Et(Rr,r)}var Di=null,Ru=!1,mh=!1;function z0(e){Di===null?Di=[e]:Di.push(e)}function jS(e){Ru=!0,z0(e)}function Cn(){if(!mh&&Di!==null){mh=!0;var e=0,t=mt;try{var r=Di;for(mt=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}Di=null,Ru=!1}catch(n){throw Di!==null&&(Di=Di.slice(e+1)),c0(Ed,Cn),n}finally{mt=t,mh=!1}}return null}var Ua=[],Ia=0,hu=null,du=0,qr=[],Yr=0,Zn=null,Ui=1,Ii="";function Wn(e,t){Ua[Ia++]=du,Ua[Ia++]=hu,hu=e,du=t}function B0(e,t,r){qr[Yr++]=Ui,qr[Yr++]=Ii,qr[Yr++]=Zn,Zn=e;var i=Ui;e=Ii;var n=32-li(i)-1;i&=~(1<<n),r+=1;var a=32-li(t)+n;if(30<a){var s=n-n%5;a=(i&(1<<s)-1).toString(32),i>>=s,n-=s,Ui=1<<32-li(t)+n|r<<n|i,Ii=a+e}else Ui=1<<a|r<<n|i,Ii=e}function Ld(e){e.return!==null&&(Wn(e,1),B0(e,1,0))}function Dd(e){for(;e===hu;)hu=Ua[--Ia],Ua[Ia]=null,du=Ua[--Ia],Ua[Ia]=null;for(;e===Zn;)Zn=qr[--Yr],qr[Yr]=null,Ii=qr[--Yr],qr[Yr]=null,Ui=qr[--Yr],qr[Yr]=null}var Or=null,Ir=null,Lt=!1,oi=null;function V0(e,t){var r=Kr(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function vg(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Or=e,Ir=yn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Or=e,Ir=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Zn!==null?{id:Ui,overflow:Ii}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Kr(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Or=e,Ir=null,!0):!1;default:return!1}}function Jh(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Zh(e){if(Lt){var t=Ir;if(t){var r=t;if(!vg(e,t)){if(Jh(e))throw Error(oe(418));t=yn(r.nextSibling);var i=Or;t&&vg(e,t)?V0(i,r):(e.flags=e.flags&-4097|2,Lt=!1,Or=e)}}else{if(Jh(e))throw Error(oe(418));e.flags=e.flags&-4097|2,Lt=!1,Or=e}}}function _g(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Or=e}function zl(e){if(e!==Or)return!1;if(!Lt)return _g(e),Lt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$h(e.type,e.memoizedProps)),t&&(t=Ir)){if(Jh(e))throw H0(),Error(oe(418));for(;t;)V0(e,t),t=yn(t.nextSibling)}if(_g(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(oe(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ir=yn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ir=null}}else Ir=Or?yn(e.stateNode.nextSibling):null;return!0}function H0(){for(var e=Ir;e;)e=yn(e.nextSibling)}function $a(){Ir=Or=null,Lt=!1}function Ud(e){oi===null?oi=[e]:oi.push(e)}var $S=Vi.ReactCurrentBatchConfig;function ro(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(oe(309));var i=r.stateNode}if(!i)throw Error(oe(147,e));var n=i,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var o=n.refs;s===null?delete o[a]:o[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(oe(284));if(!r._owner)throw Error(oe(290,e))}return e}function Bl(e,t){throw e=Object.prototype.toString.call(t),Error(oe(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yg(e){var t=e._init;return t(e._payload)}function G0(e){function t(d,g){if(e){var m=d.deletions;m===null?(d.deletions=[g],d.flags|=16):m.push(g)}}function r(d,g){if(!e)return null;for(;g!==null;)t(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function n(d,g){return d=En(d,g),d.index=0,d.sibling=null,d}function a(d,g,m){return d.index=m,e?(m=d.alternate,m!==null?(m=m.index,m<g?(d.flags|=2,g):m):(d.flags|=2,g)):(d.flags|=1048576,g)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function o(d,g,m,x){return g===null||g.tag!==6?(g=Mh(m,d.mode,x),g.return=d,g):(g=n(g,m),g.return=d,g)}function l(d,g,m,x){var P=m.type;return P===Ca?c(d,g,m.props.children,x,m.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===cn&&yg(P)===g.type)?(x=n(g,m.props),x.ref=ro(d,g,m),x.return=d,x):(x=Ql(m.type,m.key,m.props,null,d.mode,x),x.ref=ro(d,g,m),x.return=d,x)}function u(d,g,m,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==m.containerInfo||g.stateNode.implementation!==m.implementation?(g=Eh(m,d.mode,x),g.return=d,g):(g=n(g,m.children||[]),g.return=d,g)}function c(d,g,m,x,P){return g===null||g.tag!==7?(g=Kn(m,d.mode,x,P),g.return=d,g):(g=n(g,m),g.return=d,g)}function h(d,g,m){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Mh(""+g,d.mode,m),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Tl:return m=Ql(g.type,g.key,g.props,null,d.mode,m),m.ref=ro(d,null,g),m.return=d,m;case Aa:return g=Eh(g,d.mode,m),g.return=d,g;case cn:var x=g._init;return h(d,x(g._payload),m)}if(oo(g)||Zs(g))return g=Kn(g,d.mode,m,null),g.return=d,g;Bl(d,g)}return null}function p(d,g,m,x){var P=g!==null?g.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return P!==null?null:o(d,g,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Tl:return m.key===P?l(d,g,m,x):null;case Aa:return m.key===P?u(d,g,m,x):null;case cn:return P=m._init,p(d,g,P(m._payload),x)}if(oo(m)||Zs(m))return P!==null?null:c(d,g,m,x,null);Bl(d,m)}return null}function f(d,g,m,x,P){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(m)||null,o(g,d,""+x,P);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Tl:return d=d.get(x.key===null?m:x.key)||null,l(g,d,x,P);case Aa:return d=d.get(x.key===null?m:x.key)||null,u(g,d,x,P);case cn:var T=x._init;return f(d,g,m,T(x._payload),P)}if(oo(x)||Zs(x))return d=d.get(m)||null,c(g,d,x,P,null);Bl(g,x)}return null}function y(d,g,m,x){for(var P=null,T=null,b=g,R=g=0,w=null;b!==null&&R<m.length;R++){b.index>R?(w=b,b=null):w=b.sibling;var S=p(d,b,m[R],x);if(S===null){b===null&&(b=w);break}e&&b&&S.alternate===null&&t(d,b),g=a(S,g,R),T===null?P=S:T.sibling=S,T=S,b=w}if(R===m.length)return r(d,b),Lt&&Wn(d,R),P;if(b===null){for(;R<m.length;R++)b=h(d,m[R],x),b!==null&&(g=a(b,g,R),T===null?P=b:T.sibling=b,T=b);return Lt&&Wn(d,R),P}for(b=i(d,b);R<m.length;R++)w=f(b,d,R,m[R],x),w!==null&&(e&&w.alternate!==null&&b.delete(w.key===null?R:w.key),g=a(w,g,R),T===null?P=w:T.sibling=w,T=w);return e&&b.forEach(function(N){return t(d,N)}),Lt&&Wn(d,R),P}function _(d,g,m,x){var P=Zs(m);if(typeof P!="function")throw Error(oe(150));if(m=P.call(m),m==null)throw Error(oe(151));for(var T=P=null,b=g,R=g=0,w=null,S=m.next();b!==null&&!S.done;R++,S=m.next()){b.index>R?(w=b,b=null):w=b.sibling;var N=p(d,b,S.value,x);if(N===null){b===null&&(b=w);break}e&&b&&N.alternate===null&&t(d,b),g=a(N,g,R),T===null?P=N:T.sibling=N,T=N,b=w}if(S.done)return r(d,b),Lt&&Wn(d,R),P;if(b===null){for(;!S.done;R++,S=m.next())S=h(d,S.value,x),S!==null&&(g=a(S,g,R),T===null?P=S:T.sibling=S,T=S);return Lt&&Wn(d,R),P}for(b=i(d,b);!S.done;R++,S=m.next())S=f(b,d,R,S.value,x),S!==null&&(e&&S.alternate!==null&&b.delete(S.key===null?R:S.key),g=a(S,g,R),T===null?P=S:T.sibling=S,T=S);return e&&b.forEach(function(k){return t(d,k)}),Lt&&Wn(d,R),P}function v(d,g,m,x){if(typeof m=="object"&&m!==null&&m.type===Ca&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Tl:e:{for(var P=m.key,T=g;T!==null;){if(T.key===P){if(P=m.type,P===Ca){if(T.tag===7){r(d,T.sibling),g=n(T,m.props.children),g.return=d,d=g;break e}}else if(T.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===cn&&yg(P)===T.type){r(d,T.sibling),g=n(T,m.props),g.ref=ro(d,T,m),g.return=d,d=g;break e}r(d,T);break}else t(d,T);T=T.sibling}m.type===Ca?(g=Kn(m.props.children,d.mode,x,m.key),g.return=d,d=g):(x=Ql(m.type,m.key,m.props,null,d.mode,x),x.ref=ro(d,g,m),x.return=d,d=x)}return s(d);case Aa:e:{for(T=m.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===m.containerInfo&&g.stateNode.implementation===m.implementation){r(d,g.sibling),g=n(g,m.children||[]),g.return=d,d=g;break e}else{r(d,g);break}else t(d,g);g=g.sibling}g=Eh(m,d.mode,x),g.return=d,d=g}return s(d);case cn:return T=m._init,v(d,g,T(m._payload),x)}if(oo(m))return y(d,g,m,x);if(Zs(m))return _(d,g,m,x);Bl(d,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,g!==null&&g.tag===6?(r(d,g.sibling),g=n(g,m),g.return=d,d=g):(r(d,g),g=Mh(m,d.mode,x),g.return=d,d=g),s(d)):r(d,g)}return v}var qa=G0(!0),W0=G0(!1),pu=An(null),fu=null,Oa=null,Id=null;function Od(){Id=Oa=fu=null}function kd(e){var t=pu.current;Rt(pu),e._currentValue=t}function Qh(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function Ga(e,t){fu=e,Id=Oa=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Cr=!0),e.firstContext=null)}function Zr(e){var t=e._currentValue;if(Id!==e)if(e={context:e,memoizedValue:t,next:null},Oa===null){if(fu===null)throw Error(oe(308));Oa=e,fu.dependencies={lanes:0,firstContext:e}}else Oa=Oa.next=e;return t}var $n=null;function Fd(e){$n===null?$n=[e]:$n.push(e)}function X0(e,t,r,i){var n=t.interleaved;return n===null?(r.next=r,Fd(t)):(r.next=n.next,n.next=r),t.interleaved=r,zi(e,i)}function zi(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var hn=!1;function zd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function j0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Oi(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xn(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ft&2)!==0){var n=i.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),i.pending=t,zi(e,r)}return n=i.interleaved,n===null?(t.next=t,Fd(i)):(t.next=n.next,n.next=t),i.interleaved=t,zi(e,r)}function $l(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,wd(e,r)}}function xg(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var n=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?n=a=s:a=a.next=s,r=r.next}while(r!==null);a===null?n=a=t:a=a.next=t}else n=a=t;r={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function mu(e,t,r,i){var n=e.updateQueue;hn=!1;var a=n.firstBaseUpdate,s=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var l=o,u=l.next;l.next=null,s===null?a=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==s&&(o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(a!==null){var h=n.baseState;s=0,c=u=l=null,o=a;do{var p=o.lane,f=o.eventTime;if((i&p)===p){c!==null&&(c=c.next={eventTime:f,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=e,_=o;switch(p=t,f=r,_.tag){case 1:if(y=_.payload,typeof y=="function"){h=y.call(f,h,p);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,p=typeof y=="function"?y.call(f,h,p):y,p==null)break e;h=Ot({},h,p);break e;case 2:hn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,p=n.effects,p===null?n.effects=[o]:p.push(o))}else f={eventTime:f,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,s|=p;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;p=o,o=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);if(c===null&&(l=h),n.baseState=l,n.firstBaseUpdate=u,n.lastBaseUpdate=c,t=n.shared.interleaved,t!==null){n=t;do s|=n.lane,n=n.next;while(n!==t)}else a===null&&(n.shared.lanes=0);ea|=s,e.lanes=s,e.memoizedState=h}}function Sg(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],n=i.callback;if(n!==null){if(i.callback=null,i=r,typeof n!="function")throw Error(oe(191,n));n.call(i)}}}var Bo={},wi=An(Bo),No=An(Bo),Lo=An(Bo);function qn(e){if(e===Bo)throw Error(oe(174));return e}function Bd(e,t){switch(Et(Lo,t),Et(No,e),Et(wi,Bo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Dh(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Dh(t,e)}Rt(wi),Et(wi,t)}function Ya(){Rt(wi),Rt(No),Rt(Lo)}function $0(e){qn(Lo.current);var t=qn(wi.current),r=Dh(t,e.type);t!==r&&(Et(No,e),Et(wi,r))}function Vd(e){No.current===e&&(Rt(wi),Rt(No))}var Ut=An(0);function gu(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gh=[];function Hd(){for(var e=0;e<gh.length;e++)gh[e]._workInProgressVersionPrimary=null;gh.length=0}var ql=Vi.ReactCurrentDispatcher,vh=Vi.ReactCurrentBatchConfig,Qn=0,It=null,jt=null,Kt=null,vu=!1,go=!1,Do=0,qS=0;function ur(){throw Error(oe(321))}function Gd(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!ci(e[r],t[r]))return!1;return!0}function Wd(e,t,r,i,n,a){if(Qn=a,It=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ql.current=e===null||e.memoizedState===null?ZS:QS,e=r(i,n),go){a=0;do{if(go=!1,Do=0,25<=a)throw Error(oe(301));a+=1,Kt=jt=null,t.updateQueue=null,ql.current=eM,e=r(i,n)}while(go)}if(ql.current=_u,t=jt!==null&&jt.next!==null,Qn=0,Kt=jt=It=null,vu=!1,t)throw Error(oe(300));return e}function Xd(){var e=Do!==0;return Do=0,e}function Si(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?It.memoizedState=Kt=e:Kt=Kt.next=e,Kt}function Qr(){if(jt===null){var e=It.alternate;e=e!==null?e.memoizedState:null}else e=jt.next;var t=Kt===null?It.memoizedState:Kt.next;if(t!==null)Kt=t,jt=e;else{if(e===null)throw Error(oe(310));jt=e,e={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Kt===null?It.memoizedState=Kt=e:Kt=Kt.next=e}return Kt}function Uo(e,t){return typeof t=="function"?t(e):t}function _h(e){var t=Qr(),r=t.queue;if(r===null)throw Error(oe(311));r.lastRenderedReducer=e;var i=jt,n=i.baseQueue,a=r.pending;if(a!==null){if(n!==null){var s=n.next;n.next=a.next,a.next=s}i.baseQueue=n=a,r.pending=null}if(n!==null){a=n.next,i=i.baseState;var o=s=null,l=null,u=a;do{var c=u.lane;if((Qn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=h,s=i):l=l.next=h,It.lanes|=c,ea|=c}u=u.next}while(u!==null&&u!==a);l===null?s=i:l.next=o,ci(i,t.memoizedState)||(Cr=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,r.lastRenderedState=i}if(e=r.interleaved,e!==null){n=e;do a=n.lane,It.lanes|=a,ea|=a,n=n.next;while(n!==e)}else n===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function yh(e){var t=Qr(),r=t.queue;if(r===null)throw Error(oe(311));r.lastRenderedReducer=e;var i=r.dispatch,n=r.pending,a=t.memoizedState;if(n!==null){r.pending=null;var s=n=n.next;do a=e(a,s.action),s=s.next;while(s!==n);ci(a,t.memoizedState)||(Cr=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,i]}function q0(){}function Y0(e,t){var r=It,i=Qr(),n=t(),a=!ci(i.memoizedState,n);if(a&&(i.memoizedState=n,Cr=!0),i=i.queue,jd(Z0.bind(null,r,i,e),[e]),i.getSnapshot!==t||a||Kt!==null&&Kt.memoizedState.tag&1){if(r.flags|=2048,Io(9,J0.bind(null,r,i,n,t),void 0,null),Jt===null)throw Error(oe(349));(Qn&30)!==0||K0(r,t,n)}return n}function K0(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=It.updateQueue,t===null?(t={lastEffect:null,stores:null},It.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function J0(e,t,r,i){t.value=r,t.getSnapshot=i,Q0(t)&&ev(e)}function Z0(e,t,r){return r(function(){Q0(t)&&ev(e)})}function Q0(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!ci(e,r)}catch{return!0}}function ev(e){var t=zi(e,1);t!==null&&ui(t,e,1,-1)}function Mg(e){var t=Si();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:e},t.queue=e,e=e.dispatch=JS.bind(null,It,e),[t.memoizedState,e]}function Io(e,t,r,i){return e={tag:e,create:t,destroy:r,deps:i,next:null},t=It.updateQueue,t===null?(t={lastEffect:null,stores:null},It.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e)),e}function tv(){return Qr().memoizedState}function Yl(e,t,r,i){var n=Si();It.flags|=e,n.memoizedState=Io(1|t,r,void 0,i===void 0?null:i)}function Pu(e,t,r,i){var n=Qr();i=i===void 0?null:i;var a=void 0;if(jt!==null){var s=jt.memoizedState;if(a=s.destroy,i!==null&&Gd(i,s.deps)){n.memoizedState=Io(t,r,a,i);return}}It.flags|=e,n.memoizedState=Io(1|t,r,a,i)}function Eg(e,t){return Yl(8390656,8,e,t)}function jd(e,t){return Pu(2048,8,e,t)}function rv(e,t){return Pu(4,2,e,t)}function iv(e,t){return Pu(4,4,e,t)}function nv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function av(e,t,r){return r=r!=null?r.concat([e]):null,Pu(4,4,nv.bind(null,t,e),r)}function $d(){}function sv(e,t){var r=Qr();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&Gd(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function ov(e,t){var r=Qr();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&Gd(t,i[1])?i[0]:(e=e(),r.memoizedState=[e,t],e)}function lv(e,t,r){return(Qn&21)===0?(e.baseState&&(e.baseState=!1,Cr=!0),e.memoizedState=r):(ci(r,t)||(r=p0(),It.lanes|=r,ea|=r,e.baseState=!0),t)}function YS(e,t){var r=mt;mt=r!==0&&4>r?r:4,e(!0);var i=vh.transition;vh.transition={};try{e(!1),t()}finally{mt=r,vh.transition=i}}function uv(){return Qr().memoizedState}function KS(e,t,r){var i=Mn(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},cv(e))hv(t,r);else if(r=X0(e,t,r,i),r!==null){var n=xr();ui(r,e,i,n),dv(r,t,i)}}function JS(e,t,r){var i=Mn(e),n={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(cv(e))hv(t,n);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,o=a(s,r);if(n.hasEagerState=!0,n.eagerState=o,ci(o,s)){var l=t.interleaved;l===null?(n.next=n,Fd(t)):(n.next=l.next,l.next=n),t.interleaved=n;return}}catch{}r=X0(e,t,n,i),r!==null&&(n=xr(),ui(r,e,i,n),dv(r,t,i))}}function cv(e){var t=e.alternate;return e===It||t!==null&&t===It}function hv(e,t){go=vu=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function dv(e,t,r){if((r&4194240)!==0){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,wd(e,r)}}var _u={readContext:Zr,useCallback:ur,useContext:ur,useEffect:ur,useImperativeHandle:ur,useInsertionEffect:ur,useLayoutEffect:ur,useMemo:ur,useReducer:ur,useRef:ur,useState:ur,useDebugValue:ur,useDeferredValue:ur,useTransition:ur,useMutableSource:ur,useSyncExternalStore:ur,useId:ur,unstable_isNewReconciler:!1},ZS={readContext:Zr,useCallback:function(e,t){return Si().memoizedState=[e,t===void 0?null:t],e},useContext:Zr,useEffect:Eg,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Yl(4194308,4,nv.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Yl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Yl(4,2,e,t)},useMemo:function(e,t){var r=Si();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var i=Si();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=KS.bind(null,It,e),[i.memoizedState,e]},useRef:function(e){var t=Si();return e={current:e},t.memoizedState=e},useState:Mg,useDebugValue:$d,useDeferredValue:function(e){return Si().memoizedState=e},useTransition:function(){var e=Mg(!1),t=e[0];return e=YS.bind(null,e[1]),Si().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=It,n=Si();if(Lt){if(r===void 0)throw Error(oe(407));r=r()}else{if(r=t(),Jt===null)throw Error(oe(349));(Qn&30)!==0||K0(i,t,r)}n.memoizedState=r;var a={value:r,getSnapshot:t};return n.queue=a,Eg(Z0.bind(null,i,a,e),[e]),i.flags|=2048,Io(9,J0.bind(null,i,a,r,t),void 0,null),r},useId:function(){var e=Si(),t=Jt.identifierPrefix;if(Lt){var r=Ii,i=Ui;r=(i&~(1<<32-li(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=Do++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=qS++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},QS={readContext:Zr,useCallback:sv,useContext:Zr,useEffect:jd,useImperativeHandle:av,useInsertionEffect:rv,useLayoutEffect:iv,useMemo:ov,useReducer:_h,useRef:tv,useState:function(){return _h(Uo)},useDebugValue:$d,useDeferredValue:function(e){var t=Qr();return lv(t,jt.memoizedState,e)},useTransition:function(){var e=_h(Uo)[0],t=Qr().memoizedState;return[e,t]},useMutableSource:q0,useSyncExternalStore:Y0,useId:uv,unstable_isNewReconciler:!1},eM={readContext:Zr,useCallback:sv,useContext:Zr,useEffect:jd,useImperativeHandle:av,useInsertionEffect:rv,useLayoutEffect:iv,useMemo:ov,useReducer:yh,useRef:tv,useState:function(){return yh(Uo)},useDebugValue:$d,useDeferredValue:function(e){var t=Qr();return jt===null?t.memoizedState=e:lv(t,jt.memoizedState,e)},useTransition:function(){var e=yh(Uo)[0],t=Qr().memoizedState;return[e,t]},useMutableSource:q0,useSyncExternalStore:Y0,useId:uv,unstable_isNewReconciler:!1};function ai(e,t){if(e&&e.defaultProps){t=Ot({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ed(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:Ot({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Nu={isMounted:function(e){return(e=e._reactInternals)?ia(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var i=xr(),n=Mn(e),a=Oi(i,n);a.payload=t,r!=null&&(a.callback=r),t=xn(e,a,n),t!==null&&(ui(t,e,n,i),$l(t,e,n))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=xr(),n=Mn(e),a=Oi(i,n);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=xn(e,a,n),t!==null&&(ui(t,e,n,i),$l(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=xr(),i=Mn(e),n=Oi(r,i);n.tag=2,t!=null&&(n.callback=t),t=xn(e,n,i),t!==null&&(ui(t,e,i,r),$l(t,e,i))}};function wg(e,t,r,i,n,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,s):t.prototype&&t.prototype.isPureReactComponent?!Ao(r,i)||!Ao(n,a):!0}function pv(e,t,r){var i=!1,n=Tn,a=t.contextType;return typeof a=="object"&&a!==null?a=Zr(a):(n=Pr(t)?Jn:dr.current,i=t.contextTypes,a=(i=i!=null)?ja(e,n):Tn),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Nu,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),t}function Tg(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&Nu.enqueueReplaceState(t,t.state,null)}function td(e,t,r,i){var n=e.stateNode;n.props=r,n.state=e.memoizedState,n.refs={},zd(e);var a=t.contextType;typeof a=="object"&&a!==null?n.context=Zr(a):(a=Pr(t)?Jn:dr.current,n.context=ja(e,a)),n.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ed(e,t,a,r),n.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(t=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),t!==n.state&&Nu.enqueueReplaceState(n,n.state,null),mu(e,r,n,i),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308)}function Ka(e,t){try{var r="",i=t;do r+=Px(i),i=i.return;while(i);var n=r}catch(a){n=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:n,digest:null}}function xh(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function rd(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var tM=typeof WeakMap=="function"?WeakMap:Map;function fv(e,t,r){r=Oi(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){xu||(xu=!0,dd=i),rd(e,t)},r}function mv(e,t,r){r=Oi(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var n=t.value;r.payload=function(){return i(n)},r.callback=function(){rd(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){rd(e,t),typeof i!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function bg(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new tM;var n=new Set;i.set(t,n)}else n=i.get(t),n===void 0&&(n=new Set,i.set(t,n));n.has(r)||(n.add(r),e=mM.bind(null,e,t,r),t.then(e,e))}function Ag(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cg(e,t,r,i,n){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Oi(-1,1),t.tag=2,xn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=n,e)}var rM=Vi.ReactCurrentOwner,Cr=!1;function yr(e,t,r,i){t.child=e===null?W0(t,null,r,i):qa(t,e.child,r,i)}function Rg(e,t,r,i,n){r=r.render;var a=t.ref;return Ga(t,n),i=Wd(e,t,r,i,a,n),r=Xd(),e!==null&&!Cr?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n,Bi(e,t,n)):(Lt&&r&&Ld(t),t.flags|=1,yr(e,t,i,n),t.child)}function Pg(e,t,r,i,n){if(e===null){var a=r.type;return typeof a=="function"&&!tp(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,gv(e,t,a,i,n)):(e=Ql(r.type,null,i,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&n)===0){var s=a.memoizedProps;if(r=r.compare,r=r!==null?r:Ao,r(s,i)&&e.ref===t.ref)return Bi(e,t,n)}return t.flags|=1,e=En(a,i),e.ref=t.ref,e.return=t,t.child=e}function gv(e,t,r,i,n){if(e!==null){var a=e.memoizedProps;if(Ao(a,i)&&e.ref===t.ref)if(Cr=!1,t.pendingProps=i=a,(e.lanes&n)!==0)(e.flags&131072)!==0&&(Cr=!0);else return t.lanes=e.lanes,Bi(e,t,n)}return id(e,t,r,i,n)}function vv(e,t,r){var i=t.pendingProps,n=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Et(Fa,Ur),Ur|=r;else{if((r&1073741824)===0)return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Et(Fa,Ur),Ur|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:r,Et(Fa,Ur),Ur|=i}else a!==null?(i=a.baseLanes|r,t.memoizedState=null):i=r,Et(Fa,Ur),Ur|=i;return yr(e,t,n,r),t.child}function _v(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function id(e,t,r,i,n){var a=Pr(r)?Jn:dr.current;return a=ja(t,a),Ga(t,n),r=Wd(e,t,r,i,a,n),i=Xd(),e!==null&&!Cr?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n,Bi(e,t,n)):(Lt&&i&&Ld(t),t.flags|=1,yr(e,t,r,n),t.child)}function Ng(e,t,r,i,n){if(Pr(r)){var a=!0;cu(t)}else a=!1;if(Ga(t,n),t.stateNode===null)Kl(e,t),pv(t,r,i),td(t,r,i,n),i=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var l=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=Zr(u):(u=Pr(r)?Jn:dr.current,u=ja(t,u));var c=r.getDerivedStateFromProps,h=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==i||l!==u)&&Tg(t,s,i,u),hn=!1;var p=t.memoizedState;s.state=p,mu(t,i,s,n),l=t.memoizedState,o!==i||p!==l||Rr.current||hn?(typeof c=="function"&&(ed(t,r,c,i),l=t.memoizedState),(o=hn||wg(t,r,o,i,p,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=l),s.props=i,s.state=l,s.context=u,i=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,j0(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:ai(t.type,o),s.props=u,h=t.pendingProps,p=s.context,l=r.contextType,typeof l=="object"&&l!==null?l=Zr(l):(l=Pr(r)?Jn:dr.current,l=ja(t,l));var f=r.getDerivedStateFromProps;(c=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==h||p!==l)&&Tg(t,s,i,l),hn=!1,p=t.memoizedState,s.state=p,mu(t,i,s,n);var y=t.memoizedState;o!==h||p!==y||Rr.current||hn?(typeof f=="function"&&(ed(t,r,f,i),y=t.memoizedState),(u=hn||wg(t,r,u,i,p,y,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=y),s.props=i,s.state=y,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),i=!1)}return nd(e,t,r,i,a,n)}function nd(e,t,r,i,n,a){_v(e,t);var s=(t.flags&128)!==0;if(!i&&!s)return n&&gg(t,r,!1),Bi(e,t,a);i=t.stateNode,rM.current=t;var o=s&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&s?(t.child=qa(t,e.child,null,a),t.child=qa(t,null,o,a)):yr(e,t,o,a),t.memoizedState=i.state,n&&gg(t,r,!0),t.child}function yv(e){var t=e.stateNode;t.pendingContext?mg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&mg(e,t.context,!1),Bd(e,t.containerInfo)}function Lg(e,t,r,i,n){return $a(),Ud(n),t.flags|=256,yr(e,t,r,i),t.child}var ad={dehydrated:null,treeContext:null,retryLane:0};function sd(e){return{baseLanes:e,cachePool:null,transitions:null}}function xv(e,t,r){var i=t.pendingProps,n=Ut.current,a=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(n&2)!==0),o?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(n|=1),Et(Ut,n&1),e===null)return Zh(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=i.children,e=i.fallback,a?(i=t.mode,a=t.child,s={mode:"hidden",children:s},(i&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=s):a=Uu(s,i,0,null),e=Kn(e,i,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=sd(r),t.memoizedState=ad,e):qd(t,s));if(n=e.memoizedState,n!==null&&(o=n.dehydrated,o!==null))return iM(e,t,s,i,o,n,r);if(a){a=i.fallback,s=t.mode,n=e.child,o=n.sibling;var l={mode:"hidden",children:i.children};return(s&1)===0&&t.child!==n?(i=t.child,i.childLanes=0,i.pendingProps=l,t.deletions=null):(i=En(n,l),i.subtreeFlags=n.subtreeFlags&14680064),o!==null?a=En(o,a):(a=Kn(a,s,r,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,s=e.child.memoizedState,s=s===null?sd(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~r,t.memoizedState=ad,i}return a=e.child,e=a.sibling,i=En(a,{mode:"visible",children:i.children}),(t.mode&1)===0&&(i.lanes=r),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function qd(e,t){return t=Uu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Vl(e,t,r,i){return i!==null&&Ud(i),qa(t,e.child,null,r),e=qd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function iM(e,t,r,i,n,a,s){if(r)return t.flags&256?(t.flags&=-257,i=xh(Error(oe(422))),Vl(e,t,s,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=i.fallback,n=t.mode,i=Uu({mode:"visible",children:i.children},n,0,null),a=Kn(a,n,s,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,(t.mode&1)!==0&&qa(t,e.child,null,s),t.child.memoizedState=sd(s),t.memoizedState=ad,a);if((t.mode&1)===0)return Vl(e,t,s,null);if(n.data==="$!"){if(i=n.nextSibling&&n.nextSibling.dataset,i)var o=i.dgst;return i=o,a=Error(oe(419)),i=xh(a,i,void 0),Vl(e,t,s,i)}if(o=(s&e.childLanes)!==0,Cr||o){if(i=Jt,i!==null){switch(s&-s){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=(n&(i.suspendedLanes|s))!==0?0:n,n!==0&&n!==a.retryLane&&(a.retryLane=n,zi(e,n),ui(i,e,n,-1))}return ep(),i=xh(Error(oe(421))),Vl(e,t,s,i)}return n.data==="$?"?(t.flags|=128,t.child=e.child,t=gM.bind(null,e),n._reactRetry=t,null):(e=a.treeContext,Ir=yn(n.nextSibling),Or=t,Lt=!0,oi=null,e!==null&&(qr[Yr++]=Ui,qr[Yr++]=Ii,qr[Yr++]=Zn,Ui=e.id,Ii=e.overflow,Zn=t),t=qd(t,i.children),t.flags|=4096,t)}function Dg(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Qh(e.return,t,r)}function Sh(e,t,r,i,n){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:n}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=r,a.tailMode=n)}function Sv(e,t,r){var i=t.pendingProps,n=i.revealOrder,a=i.tail;if(yr(e,t,i.children,r),i=Ut.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dg(e,r,t);else if(e.tag===19)Dg(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(Et(Ut,i),(t.mode&1)===0)t.memoizedState=null;else switch(n){case"forwards":for(r=t.child,n=null;r!==null;)e=r.alternate,e!==null&&gu(e)===null&&(n=r),r=r.sibling;r=n,r===null?(n=t.child,t.child=null):(n=r.sibling,r.sibling=null),Sh(t,!1,n,r,a);break;case"backwards":for(r=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&gu(e)===null){t.child=n;break}e=n.sibling,n.sibling=r,r=n,n=e}Sh(t,!0,r,null,a);break;case"together":Sh(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Kl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bi(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),ea|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(oe(153));if(t.child!==null){for(e=t.child,r=En(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=En(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function nM(e,t,r){switch(t.tag){case 3:yv(t),$a();break;case 5:$0(t);break;case 1:Pr(t.type)&&cu(t);break;case 4:Bd(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,n=t.memoizedProps.value;Et(pu,i._currentValue),i._currentValue=n;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(Et(Ut,Ut.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?xv(e,t,r):(Et(Ut,Ut.current&1),e=Bi(e,t,r),e!==null?e.sibling:null);Et(Ut,Ut.current&1);break;case 19:if(i=(r&t.childLanes)!==0,(e.flags&128)!==0){if(i)return Sv(e,t,r);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Et(Ut,Ut.current),i)break;return null;case 22:case 23:return t.lanes=0,vv(e,t,r)}return Bi(e,t,r)}var Mv,od,Ev,wv;Mv=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};od=function(){};Ev=function(e,t,r,i){var n=e.memoizedProps;if(n!==i){e=t.stateNode,qn(wi.current);var a=null;switch(r){case"input":n=Rh(e,n),i=Rh(e,i),a=[];break;case"select":n=Ot({},n,{value:void 0}),i=Ot({},i,{value:void 0}),a=[];break;case"textarea":n=Lh(e,n),i=Lh(e,i),a=[];break;default:typeof n.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=lu)}Uh(r,i);var s;r=null;for(u in n)if(!i.hasOwnProperty(u)&&n.hasOwnProperty(u)&&n[u]!=null)if(u==="style"){var o=n[u];for(s in o)o.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xo.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in i){var l=i[u];if(o=n?.[u],i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(r||(r={}),r[s]=l[s])}else r||(a||(a=[]),a.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ct("scroll",e),a||o===l||(a=[])):(a=a||[]).push(u,l))}r&&(a=a||[]).push("style",r);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};wv=function(e,t,r,i){r!==i&&(t.flags|=4)};function io(e,t){if(!Lt)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function cr(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var n=e.child;n!==null;)r|=n.lanes|n.childLanes,i|=n.subtreeFlags&14680064,i|=n.flags&14680064,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)r|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function aM(e,t,r){var i=t.pendingProps;switch(Dd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cr(t),null;case 1:return Pr(t.type)&&uu(),cr(t),null;case 3:return i=t.stateNode,Ya(),Rt(Rr),Rt(dr),Hd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(zl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,oi!==null&&(md(oi),oi=null))),od(e,t),cr(t),null;case 5:Vd(t);var n=qn(Lo.current);if(r=t.type,e!==null&&t.stateNode!=null)Ev(e,t,r,i,n),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(oe(166));return cr(t),null}if(e=qn(wi.current),zl(t)){i=t.stateNode,r=t.type;var a=t.memoizedProps;switch(i[Mi]=t,i[Po]=a,e=(t.mode&1)!==0,r){case"dialog":Ct("cancel",i),Ct("close",i);break;case"iframe":case"object":case"embed":Ct("load",i);break;case"video":case"audio":for(n=0;n<uo.length;n++)Ct(uo[n],i);break;case"source":Ct("error",i);break;case"img":case"image":case"link":Ct("error",i),Ct("load",i);break;case"details":Ct("toggle",i);break;case"input":Vm(i,a),Ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},Ct("invalid",i);break;case"textarea":Gm(i,a),Ct("invalid",i)}Uh(r,a),n=null;for(var s in a)if(a.hasOwnProperty(s)){var o=a[s];s==="children"?typeof o=="string"?i.textContent!==o&&(a.suppressHydrationWarning!==!0&&Fl(i.textContent,o,e),n=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&Fl(i.textContent,o,e),n=["children",""+o]):xo.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&Ct("scroll",i)}switch(r){case"input":bl(i),Hm(i,a,!0);break;case"textarea":bl(i),Wm(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=lu)}i=n,t.updateQueue=i,i!==null&&(t.flags|=4)}else{s=n.nodeType===9?n:n.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zg(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=s.createElement(r,{is:i.is}):(e=s.createElement(r),r==="select"&&(s=e,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):e=s.createElementNS(e,r),e[Mi]=t,e[Po]=i,Mv(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ih(r,i),r){case"dialog":Ct("cancel",e),Ct("close",e),n=i;break;case"iframe":case"object":case"embed":Ct("load",e),n=i;break;case"video":case"audio":for(n=0;n<uo.length;n++)Ct(uo[n],e);n=i;break;case"source":Ct("error",e),n=i;break;case"img":case"image":case"link":Ct("error",e),Ct("load",e),n=i;break;case"details":Ct("toggle",e),n=i;break;case"input":Vm(e,i),n=Rh(e,i),Ct("invalid",e);break;case"option":n=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},n=Ot({},i,{value:void 0}),Ct("invalid",e);break;case"textarea":Gm(e,i),n=Lh(e,i),Ct("invalid",e);break;default:n=i}Uh(r,n),o=n;for(a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="style"?t0(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qg(e,l)):a==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&So(e,l):typeof l=="number"&&So(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(xo.hasOwnProperty(a)?l!=null&&a==="onScroll"&&Ct("scroll",e):l!=null&&_d(e,a,l,s))}switch(r){case"input":bl(e),Hm(e,i,!1);break;case"textarea":bl(e),Wm(e);break;case"option":i.value!=null&&e.setAttribute("value",""+wn(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?za(e,!!i.multiple,a,!1):i.defaultValue!=null&&za(e,!!i.multiple,i.defaultValue,!0);break;default:typeof n.onClick=="function"&&(e.onclick=lu)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return cr(t),null;case 6:if(e&&t.stateNode!=null)wv(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(oe(166));if(r=qn(Lo.current),qn(wi.current),zl(t)){if(i=t.stateNode,r=t.memoizedProps,i[Mi]=t,(a=i.nodeValue!==r)&&(e=Or,e!==null))switch(e.tag){case 3:Fl(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fl(i.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[Mi]=t,t.stateNode=i}return cr(t),null;case 13:if(Rt(Ut),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Lt&&Ir!==null&&(t.mode&1)!==0&&(t.flags&128)===0)H0(),$a(),t.flags|=98560,a=!1;else if(a=zl(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(oe(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(oe(317));a[Mi]=t}else $a(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;cr(t),a=!1}else oi!==null&&(md(oi),oi=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ut.current&1)!==0?$t===0&&($t=3):ep())),t.updateQueue!==null&&(t.flags|=4),cr(t),null);case 4:return Ya(),od(e,t),e===null&&Co(t.stateNode.containerInfo),cr(t),null;case 10:return kd(t.type._context),cr(t),null;case 17:return Pr(t.type)&&uu(),cr(t),null;case 19:if(Rt(Ut),a=t.memoizedState,a===null)return cr(t),null;if(i=(t.flags&128)!==0,s=a.rendering,s===null)if(i)io(a,!1);else{if($t!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=gu(e),s!==null){for(t.flags|=128,io(a,!1),i=s.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)a=r,e=i,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Et(Ut,Ut.current&1|2),t.child}e=e.sibling}a.tail!==null&&Bt()>Ja&&(t.flags|=128,i=!0,io(a,!1),t.lanes=4194304)}else{if(!i)if(e=gu(s),e!==null){if(t.flags|=128,i=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),io(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!Lt)return cr(t),null}else 2*Bt()-a.renderingStartTime>Ja&&r!==1073741824&&(t.flags|=128,i=!0,io(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(r=a.last,r!==null?r.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Bt(),t.sibling=null,r=Ut.current,Et(Ut,i?r&1|2:r&1),t):(cr(t),null);case 22:case 23:return Qd(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&(t.mode&1)!==0?(Ur&1073741824)!==0&&(cr(t),t.subtreeFlags&6&&(t.flags|=8192)):cr(t),null;case 24:return null;case 25:return null}throw Error(oe(156,t.tag))}function sM(e,t){switch(Dd(t),t.tag){case 1:return Pr(t.type)&&uu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ya(),Rt(Rr),Rt(dr),Hd(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Vd(t),null;case 13:if(Rt(Ut),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(oe(340));$a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Rt(Ut),null;case 4:return Ya(),null;case 10:return kd(t.type._context),null;case 22:case 23:return Qd(),null;case 24:return null;default:return null}}var Hl=!1,hr=!1,oM=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function ka(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){Ft(e,t,i)}else r.current=null}function ld(e,t,r){try{r()}catch(i){Ft(e,t,i)}}var Ug=!1;function lM(e,t){if(Xh=au,e=R0(),Nd(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var n=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var s=0,o=-1,l=-1,u=0,c=0,h=e,p=null;t:for(;;){for(var f;h!==r||n!==0&&h.nodeType!==3||(o=s+n),h!==a||i!==0&&h.nodeType!==3||(l=s+i),h.nodeType===3&&(s+=h.nodeValue.length),(f=h.firstChild)!==null;)p=h,h=f;for(;;){if(h===e)break t;if(p===r&&++u===n&&(o=s),p===a&&++c===i&&(l=s),(f=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=f}r=o===-1||l===-1?null:{start:o,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(jh={focusedElem:e,selectionRange:r},au=!1,Ne=t;Ne!==null;)if(t=Ne,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ne=e;else for(;Ne!==null;){t=Ne;try{var y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,v=y.memoizedState,d=t.stateNode,g=d.getSnapshotBeforeUpdate(t.elementType===t.type?_:ai(t.type,_),v);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(x){Ft(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,Ne=e;break}Ne=t.return}return y=Ug,Ug=!1,y}function vo(e,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var n=i=i.next;do{if((n.tag&e)===e){var a=n.destroy;n.destroy=void 0,a!==void 0&&ld(t,r,a)}n=n.next}while(n!==i)}}function Lu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function ud(e){var t=e.ref;if(t!==null){var r=e.stateNode;e.tag,e=r,typeof t=="function"?t(e):t.current=e}}function Tv(e){var t=e.alternate;t!==null&&(e.alternate=null,Tv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mi],delete t[Po],delete t[Yh],delete t[WS],delete t[XS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bv(e){return e.tag===5||e.tag===3||e.tag===4}function Ig(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cd(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=lu));else if(i!==4&&(e=e.child,e!==null))for(cd(e,t,r),e=e.sibling;e!==null;)cd(e,t,r),e=e.sibling}function hd(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(hd(e,t,r),e=e.sibling;e!==null;)hd(e,t,r),e=e.sibling}var ir=null,si=!1;function un(e,t,r){for(r=r.child;r!==null;)Av(e,t,r),r=r.sibling}function Av(e,t,r){if(Ei&&typeof Ei.onCommitFiberUnmount=="function")try{Ei.onCommitFiberUnmount(wu,r)}catch{}switch(r.tag){case 5:hr||ka(r,t);case 6:var i=ir,n=si;ir=null,un(e,t,r),ir=i,si=n,ir!==null&&(si?(e=ir,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ir.removeChild(r.stateNode));break;case 18:ir!==null&&(si?(e=ir,r=r.stateNode,e.nodeType===8?fh(e.parentNode,r):e.nodeType===1&&fh(e,r),To(e)):fh(ir,r.stateNode));break;case 4:i=ir,n=si,ir=r.stateNode.containerInfo,si=!0,un(e,t,r),ir=i,si=n;break;case 0:case 11:case 14:case 15:if(!hr&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){n=i=i.next;do{var a=n,s=a.destroy;a=a.tag,s!==void 0&&((a&2)!==0||(a&4)!==0)&&ld(r,t,s),n=n.next}while(n!==i)}un(e,t,r);break;case 1:if(!hr&&(ka(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(o){Ft(r,t,o)}un(e,t,r);break;case 21:un(e,t,r);break;case 22:r.mode&1?(hr=(i=hr)||r.memoizedState!==null,un(e,t,r),hr=i):un(e,t,r);break;default:un(e,t,r)}}function Og(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new oM),t.forEach(function(i){var n=vM.bind(null,e,i);r.has(i)||(r.add(i),i.then(n,n))})}}function ni(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var n=r[i];try{var a=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 5:ir=o.stateNode,si=!1;break e;case 3:ir=o.stateNode.containerInfo,si=!0;break e;case 4:ir=o.stateNode.containerInfo,si=!0;break e}o=o.return}if(ir===null)throw Error(oe(160));Av(a,s,n),ir=null,si=!1;var l=n.alternate;l!==null&&(l.return=null),n.return=null}catch(u){Ft(n,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cv(t,e),t=t.sibling}function Cv(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ni(t,e),xi(e),i&4){try{vo(3,e,e.return),Lu(3,e)}catch(_){Ft(e,e.return,_)}try{vo(5,e,e.return)}catch(_){Ft(e,e.return,_)}}break;case 1:ni(t,e),xi(e),i&512&&r!==null&&ka(r,r.return);break;case 5:if(ni(t,e),xi(e),i&512&&r!==null&&ka(r,r.return),e.flags&32){var n=e.stateNode;try{So(n,"")}catch(_){Ft(e,e.return,_)}}if(i&4&&(n=e.stateNode,n!=null)){var a=e.memoizedProps,s=r!==null?r.memoizedProps:a,o=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&Kg(n,a),Ih(o,s);var u=Ih(o,a);for(s=0;s<l.length;s+=2){var c=l[s],h=l[s+1];c==="style"?t0(n,h):c==="dangerouslySetInnerHTML"?Qg(n,h):c==="children"?So(n,h):_d(n,c,h,u)}switch(o){case"input":Ph(n,a);break;case"textarea":Jg(n,a);break;case"select":var p=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!a.multiple;var f=a.value;f!=null?za(n,!!a.multiple,f,!1):p!==!!a.multiple&&(a.defaultValue!=null?za(n,!!a.multiple,a.defaultValue,!0):za(n,!!a.multiple,a.multiple?[]:"",!1))}n[Po]=a}catch(_){Ft(e,e.return,_)}}break;case 6:if(ni(t,e),xi(e),i&4){if(e.stateNode===null)throw Error(oe(162));n=e.stateNode,a=e.memoizedProps;try{n.nodeValue=a}catch(_){Ft(e,e.return,_)}}break;case 3:if(ni(t,e),xi(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{To(t.containerInfo)}catch(_){Ft(e,e.return,_)}break;case 4:ni(t,e),xi(e);break;case 13:ni(t,e),xi(e),n=e.child,n.flags&8192&&(a=n.memoizedState!==null,n.stateNode.isHidden=a,!a||n.alternate!==null&&n.alternate.memoizedState!==null||(Jd=Bt())),i&4&&Og(e);break;case 22:if(c=r!==null&&r.memoizedState!==null,e.mode&1?(hr=(u=hr)||c,ni(t,e),hr=u):ni(t,e),xi(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(Ne=e,c=e.child;c!==null;){for(h=Ne=c;Ne!==null;){switch(p=Ne,f=p.child,p.tag){case 0:case 11:case 14:case 15:vo(4,p,p.return);break;case 1:ka(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){i=p,r=p.return;try{t=i,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(_){Ft(i,r,_)}}break;case 5:ka(p,p.return);break;case 22:if(p.memoizedState!==null){Fg(h);continue}}f!==null?(f.return=p,Ne=f):Fg(h)}c=c.sibling}e:for(c=null,h=e;;){if(h.tag===5){if(c===null){c=h;try{n=h.stateNode,u?(a=n.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=e0("display",s))}catch(_){Ft(e,e.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){Ft(e,e.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ni(t,e),xi(e),i&4&&Og(e);break;case 21:break;default:ni(t,e),xi(e)}}function xi(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(bv(r)){var i=r;break e}r=r.return}throw Error(oe(160))}switch(i.tag){case 5:var n=i.stateNode;i.flags&32&&(So(n,""),i.flags&=-33);var a=Ig(e);hd(e,a,n);break;case 3:case 4:var s=i.stateNode.containerInfo,o=Ig(e);cd(e,o,s);break;default:throw Error(oe(161))}}catch(l){Ft(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function uM(e,t,r){Ne=e,Rv(e,t,r)}function Rv(e,t,r){for(var i=(e.mode&1)!==0;Ne!==null;){var n=Ne,a=n.child;if(n.tag===22&&i){var s=n.memoizedState!==null||Hl;if(!s){var o=n.alternate,l=o!==null&&o.memoizedState!==null||hr;o=Hl;var u=hr;if(Hl=s,(hr=l)&&!u)for(Ne=n;Ne!==null;)s=Ne,l=s.child,s.tag===22&&s.memoizedState!==null?zg(n):l!==null?(l.return=s,Ne=l):zg(n);for(;a!==null;)Ne=a,Rv(a,t,r),a=a.sibling;Ne=n,Hl=o,hr=u}kg(e,t,r)}else(n.subtreeFlags&8772)!==0&&a!==null?(a.return=n,Ne=a):kg(e,t,r)}}function kg(e){for(;Ne!==null;){var t=Ne;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:hr||Lu(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!hr)if(r===null)i.componentDidMount();else{var n=t.elementType===t.type?r.memoizedProps:ai(t.type,r.memoizedProps);i.componentDidUpdate(n,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Sg(t,a,i);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Sg(t,s,r)}break;case 5:var o=t.stateNode;if(r===null&&t.flags&4){r=o;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&To(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}hr||t.flags&512&&ud(t)}catch(p){Ft(t,t.return,p)}}if(t===e){Ne=null;break}if(r=t.sibling,r!==null){r.return=t.return,Ne=r;break}Ne=t.return}}function Fg(e){for(;Ne!==null;){var t=Ne;if(t===e){Ne=null;break}var r=t.sibling;if(r!==null){r.return=t.return,Ne=r;break}Ne=t.return}}function zg(e){for(;Ne!==null;){var t=Ne;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Lu(4,t)}catch(l){Ft(t,r,l)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var n=t.return;try{i.componentDidMount()}catch(l){Ft(t,n,l)}}var a=t.return;try{ud(t)}catch(l){Ft(t,a,l)}break;case 5:var s=t.return;try{ud(t)}catch(l){Ft(t,s,l)}}}catch(l){Ft(t,t.return,l)}if(t===e){Ne=null;break}var o=t.sibling;if(o!==null){o.return=t.return,Ne=o;break}Ne=t.return}}var cM=Math.ceil,yu=Vi.ReactCurrentDispatcher,Yd=Vi.ReactCurrentOwner,Jr=Vi.ReactCurrentBatchConfig,ft=0,Jt=null,Wt=null,nr=0,Ur=0,Fa=An(0),$t=0,Oo=null,ea=0,Du=0,Kd=0,_o=null,Ar=null,Jd=0,Ja=1/0,Li=null,xu=!1,dd=null,Sn=null,Gl=!1,mn=null,Su=0,yo=0,pd=null,Jl=-1,Zl=0;function xr(){return(ft&6)!==0?Bt():Jl!==-1?Jl:Jl=Bt()}function Mn(e){return(e.mode&1)===0?1:(ft&2)!==0&&nr!==0?nr&-nr:$S.transition!==null?(Zl===0&&(Zl=p0()),Zl):(e=mt,e!==0||(e=window.event,e=e===void 0?16:x0(e.type)),e)}function ui(e,t,r,i){if(50<yo)throw yo=0,pd=null,Error(oe(185));ko(e,r,i),((ft&2)===0||e!==Jt)&&(e===Jt&&((ft&2)===0&&(Du|=r),$t===4&&pn(e,nr)),Nr(e,i),r===1&&ft===0&&(t.mode&1)===0&&(Ja=Bt()+500,Ru&&Cn()))}function Nr(e,t){var r=e.callbackNode;Yx(e,t);var i=nu(e,e===Jt?nr:0);if(i===0)r!==null&&$m(r),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(r!=null&&$m(r),t===1)e.tag===0?jS(Bg.bind(null,e)):z0(Bg.bind(null,e)),HS(function(){(ft&6)===0&&Cn()}),r=null;else{switch(f0(i)){case 1:r=Ed;break;case 4:r=h0;break;case 16:r=iu;break;case 536870912:r=d0;break;default:r=iu}r=kv(r,Pv.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Pv(e,t){if(Jl=-1,Zl=0,(ft&6)!==0)throw Error(oe(327));var r=e.callbackNode;if(Wa()&&e.callbackNode!==r)return null;var i=nu(e,e===Jt?nr:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||t)t=Mu(e,i);else{t=i;var n=ft;ft|=2;var a=Lv();(Jt!==e||nr!==t)&&(Li=null,Ja=Bt()+500,Yn(e,t));do try{pM();break}catch(o){Nv(e,o)}while(!0);Od(),yu.current=a,ft=n,Wt!==null?t=0:(Jt=null,nr=0,t=$t)}if(t!==0){if(t===2&&(n=Bh(e),n!==0&&(i=n,t=fd(e,n))),t===1)throw r=Oo,Yn(e,0),pn(e,i),Nr(e,Bt()),r;if(t===6)pn(e,i);else{if(n=e.current.alternate,(i&30)===0&&!hM(n)&&(t=Mu(e,i),t===2&&(a=Bh(e),a!==0&&(i=a,t=fd(e,a))),t===1))throw r=Oo,Yn(e,0),pn(e,i),Nr(e,Bt()),r;switch(e.finishedWork=n,e.finishedLanes=i,t){case 0:case 1:throw Error(oe(345));case 2:Xn(e,Ar,Li);break;case 3:if(pn(e,i),(i&130023424)===i&&(t=Jd+500-Bt(),10<t)){if(nu(e,0)!==0)break;if(n=e.suspendedLanes,(n&i)!==i){xr(),e.pingedLanes|=e.suspendedLanes&n;break}e.timeoutHandle=qh(Xn.bind(null,e,Ar,Li),t);break}Xn(e,Ar,Li);break;case 4:if(pn(e,i),(i&4194240)===i)break;for(t=e.eventTimes,n=-1;0<i;){var s=31-li(i);a=1<<s,s=t[s],s>n&&(n=s),i&=~a}if(i=n,i=Bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*cM(i/1960))-i,10<i){e.timeoutHandle=qh(Xn.bind(null,e,Ar,Li),i);break}Xn(e,Ar,Li);break;case 5:Xn(e,Ar,Li);break;default:throw Error(oe(329))}}}return Nr(e,Bt()),e.callbackNode===r?Pv.bind(null,e):null}function fd(e,t){var r=_o;return e.current.memoizedState.isDehydrated&&(Yn(e,t).flags|=256),e=Mu(e,t),e!==2&&(t=Ar,Ar=r,t!==null&&md(t)),e}function md(e){Ar===null?Ar=e:Ar.push.apply(Ar,e)}function hM(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var n=r[i],a=n.getSnapshot;n=n.value;try{if(!ci(a(),n))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pn(e,t){for(t&=~Kd,t&=~Du,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-li(t),i=1<<r;e[r]=-1,t&=~i}}function Bg(e){if((ft&6)!==0)throw Error(oe(327));Wa();var t=nu(e,0);if((t&1)===0)return Nr(e,Bt()),null;var r=Mu(e,t);if(e.tag!==0&&r===2){var i=Bh(e);i!==0&&(t=i,r=fd(e,i))}if(r===1)throw r=Oo,Yn(e,0),pn(e,t),Nr(e,Bt()),r;if(r===6)throw Error(oe(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xn(e,Ar,Li),Nr(e,Bt()),null}function Zd(e,t){var r=ft;ft|=1;try{return e(t)}finally{ft=r,ft===0&&(Ja=Bt()+500,Ru&&Cn())}}function ta(e){mn!==null&&mn.tag===0&&(ft&6)===0&&Wa();var t=ft;ft|=1;var r=Jr.transition,i=mt;try{if(Jr.transition=null,mt=1,e)return e()}finally{mt=i,Jr.transition=r,ft=t,(ft&6)===0&&Cn()}}function Qd(){Ur=Fa.current,Rt(Fa)}function Yn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,VS(r)),Wt!==null)for(r=Wt.return;r!==null;){var i=r;switch(Dd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&uu();break;case 3:Ya(),Rt(Rr),Rt(dr),Hd();break;case 5:Vd(i);break;case 4:Ya();break;case 13:Rt(Ut);break;case 19:Rt(Ut);break;case 10:kd(i.type._context);break;case 22:case 23:Qd()}r=r.return}if(Jt=e,Wt=e=En(e.current,null),nr=Ur=t,$t=0,Oo=null,Kd=Du=ea=0,Ar=_o=null,$n!==null){for(t=0;t<$n.length;t++)if(r=$n[t],i=r.interleaved,i!==null){r.interleaved=null;var n=i.next,a=r.pending;if(a!==null){var s=a.next;a.next=n,i.next=s}r.pending=i}$n=null}return e}function Nv(e,t){do{var r=Wt;try{if(Od(),ql.current=_u,vu){for(var i=It.memoizedState;i!==null;){var n=i.queue;n!==null&&(n.pending=null),i=i.next}vu=!1}if(Qn=0,Kt=jt=It=null,go=!1,Do=0,Yd.current=null,r===null||r.return===null){$t=1,Oo=t,Wt=null;break}e:{var a=e,s=r.return,o=r,l=t;if(t=nr,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=o,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=Ag(s);if(f!==null){f.flags&=-257,Cg(f,s,o,a,t),f.mode&1&&bg(a,u,t),t=f,l=u;var y=t.updateQueue;if(y===null){var _=new Set;_.add(l),t.updateQueue=_}else y.add(l);break e}else{if((t&1)===0){bg(a,u,t),ep();break e}l=Error(oe(426))}}else if(Lt&&o.mode&1){var v=Ag(s);if(v!==null){(v.flags&65536)===0&&(v.flags|=256),Cg(v,s,o,a,t),Ud(Ka(l,o));break e}}a=l=Ka(l,o),$t!==4&&($t=2),_o===null?_o=[a]:_o.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var d=fv(a,l,t);xg(a,d);break e;case 1:o=l;var g=a.type,m=a.stateNode;if((a.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Sn===null||!Sn.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var x=mv(a,o,t);xg(a,x);break e}}a=a.return}while(a!==null)}Uv(r)}catch(P){t=P,Wt===r&&r!==null&&(Wt=r=r.return);continue}break}while(!0)}function Lv(){var e=yu.current;return yu.current=_u,e===null?_u:e}function ep(){($t===0||$t===3||$t===2)&&($t=4),Jt===null||(ea&268435455)===0&&(Du&268435455)===0||pn(Jt,nr)}function Mu(e,t){var r=ft;ft|=2;var i=Lv();(Jt!==e||nr!==t)&&(Li=null,Yn(e,t));do try{dM();break}catch(n){Nv(e,n)}while(!0);if(Od(),ft=r,yu.current=i,Wt!==null)throw Error(oe(261));return Jt=null,nr=0,$t}function dM(){for(;Wt!==null;)Dv(Wt)}function pM(){for(;Wt!==null&&!Bx();)Dv(Wt)}function Dv(e){var t=Ov(e.alternate,e,Ur);e.memoizedProps=e.pendingProps,t===null?Uv(e):Wt=t,Yd.current=null}function Uv(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=aM(r,t,Ur),r!==null){Wt=r;return}}else{if(r=sM(r,t),r!==null){r.flags&=32767,Wt=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$t=6,Wt=null;return}}if(t=t.sibling,t!==null){Wt=t;return}Wt=t=e}while(t!==null);$t===0&&($t=5)}function Xn(e,t,r){var i=mt,n=Jr.transition;try{Jr.transition=null,mt=1,fM(e,t,r,i)}finally{Jr.transition=n,mt=i}return null}function fM(e,t,r,i){do Wa();while(mn!==null);if((ft&6)!==0)throw Error(oe(327));r=e.finishedWork;var n=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(oe(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(Kx(e,a),e===Jt&&(Wt=Jt=null,nr=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Gl||(Gl=!0,kv(iu,function(){return Wa(),null})),a=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||a){a=Jr.transition,Jr.transition=null;var s=mt;mt=1;var o=ft;ft|=4,Yd.current=null,lM(e,r),Cv(r,e),OS(jh),au=!!Xh,jh=Xh=null,e.current=r,uM(r,e,n),Vx(),ft=o,mt=s,Jr.transition=a}else e.current=r;if(Gl&&(Gl=!1,mn=e,Su=n),a=e.pendingLanes,a===0&&(Sn=null),Wx(r.stateNode,i),Nr(e,Bt()),t!==null)for(i=e.onRecoverableError,r=0;r<t.length;r++)n=t[r],i(n.value,{componentStack:n.stack,digest:n.digest});if(xu)throw xu=!1,e=dd,dd=null,e;return(Su&1)!==0&&e.tag!==0&&Wa(),a=e.pendingLanes,(a&1)!==0?e===pd?yo++:(yo=0,pd=e):yo=0,Cn(),null}function Wa(){if(mn!==null){var e=f0(Su),t=Jr.transition,r=mt;try{if(Jr.transition=null,mt=16>e?16:e,mn===null)var i=!1;else{if(e=mn,mn=null,Su=0,(ft&6)!==0)throw Error(oe(331));var n=ft;for(ft|=4,Ne=e.current;Ne!==null;){var a=Ne,s=a.child;if((Ne.flags&16)!==0){var o=a.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Ne=u;Ne!==null;){var c=Ne;switch(c.tag){case 0:case 11:case 15:vo(8,c,a)}var h=c.child;if(h!==null)h.return=c,Ne=h;else for(;Ne!==null;){c=Ne;var p=c.sibling,f=c.return;if(Tv(c),c===u){Ne=null;break}if(p!==null){p.return=f,Ne=p;break}Ne=f}}}var y=a.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var v=_.sibling;_.sibling=null,_=v}while(_!==null)}}Ne=a}}if((a.subtreeFlags&2064)!==0&&s!==null)s.return=a,Ne=s;else e:for(;Ne!==null;){if(a=Ne,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:vo(9,a,a.return)}var d=a.sibling;if(d!==null){d.return=a.return,Ne=d;break e}Ne=a.return}}var g=e.current;for(Ne=g;Ne!==null;){s=Ne;var m=s.child;if((s.subtreeFlags&2064)!==0&&m!==null)m.return=s,Ne=m;else e:for(s=g;Ne!==null;){if(o=Ne,(o.flags&2048)!==0)try{switch(o.tag){case 0:case 11:case 15:Lu(9,o)}}catch(P){Ft(o,o.return,P)}if(o===s){Ne=null;break e}var x=o.sibling;if(x!==null){x.return=o.return,Ne=x;break e}Ne=o.return}}if(ft=n,Cn(),Ei&&typeof Ei.onPostCommitFiberRoot=="function")try{Ei.onPostCommitFiberRoot(wu,e)}catch{}i=!0}return i}finally{mt=r,Jr.transition=t}}return!1}function Vg(e,t,r){t=Ka(r,t),t=fv(e,t,1),e=xn(e,t,1),t=xr(),e!==null&&(ko(e,1,t),Nr(e,t))}function Ft(e,t,r){if(e.tag===3)Vg(e,e,r);else for(;t!==null;){if(t.tag===3){Vg(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Sn===null||!Sn.has(i))){e=Ka(r,e),e=mv(t,e,1),t=xn(t,e,1),e=xr(),t!==null&&(ko(t,1,e),Nr(t,e));break}}t=t.return}}function mM(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),t=xr(),e.pingedLanes|=e.suspendedLanes&r,Jt===e&&(nr&r)===r&&($t===4||$t===3&&(nr&130023424)===nr&&500>Bt()-Jd?Yn(e,0):Kd|=r),Nr(e,t)}function Iv(e,t){t===0&&((e.mode&1)===0?t=1:(t=Rl,Rl<<=1,(Rl&130023424)===0&&(Rl=4194304)));var r=xr();e=zi(e,t),e!==null&&(ko(e,t,r),Nr(e,r))}function gM(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Iv(e,r)}function vM(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,n=e.memoizedState;n!==null&&(r=n.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(t),Iv(e,r)}var Ov;Ov=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Rr.current)Cr=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return Cr=!1,nM(e,t,r);Cr=(e.flags&131072)!==0}else Cr=!1,Lt&&(t.flags&1048576)!==0&&B0(t,du,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Kl(e,t),e=t.pendingProps;var n=ja(t,dr.current);Ga(t,r),n=Wd(null,t,i,e,n,r);var a=Xd();return t.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pr(i)?(a=!0,cu(t)):a=!1,t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,zd(t),n.updater=Nu,t.stateNode=n,n._reactInternals=t,td(t,i,e,r),t=nd(null,t,i,!0,a,r)):(t.tag=0,Lt&&a&&Ld(t),yr(null,t,n,r),t=t.child),t;case 16:i=t.elementType;e:{switch(Kl(e,t),e=t.pendingProps,n=i._init,i=n(i._payload),t.type=i,n=t.tag=yM(i),e=ai(i,e),n){case 0:t=id(null,t,i,e,r);break e;case 1:t=Ng(null,t,i,e,r);break e;case 11:t=Rg(null,t,i,e,r);break e;case 14:t=Pg(null,t,i,ai(i.type,e),r);break e}throw Error(oe(306,i,""))}return t;case 0:return i=t.type,n=t.pendingProps,n=t.elementType===i?n:ai(i,n),id(e,t,i,n,r);case 1:return i=t.type,n=t.pendingProps,n=t.elementType===i?n:ai(i,n),Ng(e,t,i,n,r);case 3:e:{if(yv(t),e===null)throw Error(oe(387));i=t.pendingProps,a=t.memoizedState,n=a.element,j0(e,t),mu(t,i,null,r);var s=t.memoizedState;if(i=s.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){n=Ka(Error(oe(423)),t),t=Lg(e,t,i,r,n);break e}else if(i!==n){n=Ka(Error(oe(424)),t),t=Lg(e,t,i,r,n);break e}else for(Ir=yn(t.stateNode.containerInfo.firstChild),Or=t,Lt=!0,oi=null,r=W0(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if($a(),i===n){t=Bi(e,t,r);break e}yr(e,t,i,r)}t=t.child}return t;case 5:return $0(t),e===null&&Zh(t),i=t.type,n=t.pendingProps,a=e!==null?e.memoizedProps:null,s=n.children,$h(i,n)?s=null:a!==null&&$h(i,a)&&(t.flags|=32),_v(e,t),yr(e,t,s,r),t.child;case 6:return e===null&&Zh(t),null;case 13:return xv(e,t,r);case 4:return Bd(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=qa(t,null,i,r):yr(e,t,i,r),t.child;case 11:return i=t.type,n=t.pendingProps,n=t.elementType===i?n:ai(i,n),Rg(e,t,i,n,r);case 7:return yr(e,t,t.pendingProps,r),t.child;case 8:return yr(e,t,t.pendingProps.children,r),t.child;case 12:return yr(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,n=t.pendingProps,a=t.memoizedProps,s=n.value,Et(pu,i._currentValue),i._currentValue=s,a!==null)if(ci(a.value,s)){if(a.children===n.children&&!Rr.current){t=Bi(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var o=a.dependencies;if(o!==null){s=a.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(a.tag===1){l=Oi(-1,r&-r),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),Qh(a.return,r,t),o.lanes|=r;break}l=l.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(oe(341));s.lanes|=r,o=s.alternate,o!==null&&(o.lanes|=r),Qh(s,r,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}yr(e,t,n.children,r),t=t.child}return t;case 9:return n=t.type,i=t.pendingProps.children,Ga(t,r),n=Zr(n),i=i(n),t.flags|=1,yr(e,t,i,r),t.child;case 14:return i=t.type,n=ai(i,t.pendingProps),n=ai(i.type,n),Pg(e,t,i,n,r);case 15:return gv(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,n=t.pendingProps,n=t.elementType===i?n:ai(i,n),Kl(e,t),t.tag=1,Pr(i)?(e=!0,cu(t)):e=!1,Ga(t,r),pv(t,i,n),td(t,i,n,r),nd(null,t,i,!0,e,r);case 19:return Sv(e,t,r);case 22:return vv(e,t,r)}throw Error(oe(156,t.tag))};function kv(e,t){return c0(e,t)}function _M(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kr(e,t,r,i){return new _M(e,t,r,i)}function tp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yM(e){if(typeof e=="function")return tp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xd)return 11;if(e===Sd)return 14}return 2}function En(e,t){var r=e.alternate;return r===null?(r=Kr(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ql(e,t,r,i,n,a){var s=2;if(i=e,typeof e=="function")tp(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ca:return Kn(r.children,n,a,t);case yd:s=8,n|=8;break;case Th:return e=Kr(12,r,t,n|2),e.elementType=Th,e.lanes=a,e;case bh:return e=Kr(13,r,t,n),e.elementType=bh,e.lanes=a,e;case Ah:return e=Kr(19,r,t,n),e.elementType=Ah,e.lanes=a,e;case $g:return Uu(r,n,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xg:s=10;break e;case jg:s=9;break e;case xd:s=11;break e;case Sd:s=14;break e;case cn:s=16,i=null;break e}throw Error(oe(130,e==null?e:typeof e,""))}return t=Kr(s,r,t,n),t.elementType=e,t.type=i,t.lanes=a,t}function Kn(e,t,r,i){return e=Kr(7,e,i,t),e.lanes=r,e}function Uu(e,t,r,i){return e=Kr(22,e,i,t),e.elementType=$g,e.lanes=r,e.stateNode={isHidden:!1},e}function Mh(e,t,r){return e=Kr(6,e,null,t),e.lanes=r,e}function Eh(e,t,r){return t=Kr(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function xM(e,t,r,i,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sh(0),this.expirationTimes=sh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sh(0),this.identifierPrefix=i,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function rp(e,t,r,i,n,a,s,o,l){return e=new xM(e,t,r,o,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Kr(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},zd(a),e}function SM(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Aa,key:i==null?null:""+i,children:e,containerInfo:t,implementation:r}}function Fv(e){if(!e)return Tn;e=e._reactInternals;e:{if(ia(e)!==e||e.tag!==1)throw Error(oe(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pr(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(oe(171))}if(e.tag===1){var r=e.type;if(Pr(r))return F0(e,r,t)}return t}function zv(e,t,r,i,n,a,s,o,l){return e=rp(r,i,!0,e,n,a,s,o,l),e.context=Fv(null),r=e.current,i=xr(),n=Mn(r),a=Oi(i,n),a.callback=t??null,xn(r,a,n),e.current.lanes=n,ko(e,n,i),Nr(e,i),e}function Iu(e,t,r,i){var n=t.current,a=xr(),s=Mn(n);return r=Fv(r),t.context===null?t.context=r:t.pendingContext=r,t=Oi(a,s),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=xn(n,t,s),e!==null&&(ui(e,n,s,a),$l(e,n,s)),s}function Eu(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function Hg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ip(e,t){Hg(e,t),(e=e.alternate)&&Hg(e,t)}function MM(){return null}var Bv=typeof reportError=="function"?reportError:function(e){console.error(e)};function np(e){this._internalRoot=e}Ou.prototype.render=np.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(oe(409));Iu(e,t,null,null)};Ou.prototype.unmount=np.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ta(function(){Iu(null,e,null,null)}),t[Fi]=null}};function Ou(e){this._internalRoot=e}Ou.prototype.unstable_scheduleHydration=function(e){if(e){var t=v0();e={blockedOn:null,target:e,priority:t};for(var r=0;r<dn.length&&t!==0&&t<dn[r].priority;r++);dn.splice(r,0,e),r===0&&y0(e)}};function ap(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ku(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gg(){}function EM(e,t,r,i,n){if(n){if(typeof i=="function"){var a=i;i=function(){var u=Eu(s);a.call(u)}}var s=zv(t,i,e,0,null,!1,!1,"",Gg);return e._reactRootContainer=s,e[Fi]=s.current,Co(e.nodeType===8?e.parentNode:e),ta(),s}for(;n=e.lastChild;)e.removeChild(n);if(typeof i=="function"){var o=i;i=function(){var u=Eu(l);o.call(u)}}var l=rp(e,0,!1,null,null,!1,!1,"",Gg);return e._reactRootContainer=l,e[Fi]=l.current,Co(e.nodeType===8?e.parentNode:e),ta(function(){Iu(t,l,r,i)}),l}function Fu(e,t,r,i,n){var a=r._reactRootContainer;if(a){var s=a;if(typeof n=="function"){var o=n;n=function(){var l=Eu(s);o.call(l)}}Iu(t,s,e,n)}else s=EM(r,t,e,n,i);return Eu(s)}m0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=lo(t.pendingLanes);r!==0&&(wd(t,r|1),Nr(t,Bt()),(ft&6)===0&&(Ja=Bt()+500,Cn()))}break;case 13:ta(function(){var i=zi(e,1);if(i!==null){var n=xr();ui(i,e,1,n)}}),ip(e,1)}};Td=function(e){if(e.tag===13){var t=zi(e,134217728);if(t!==null){var r=xr();ui(t,e,134217728,r)}ip(e,134217728)}};g0=function(e){if(e.tag===13){var t=Mn(e),r=zi(e,t);if(r!==null){var i=xr();ui(r,e,t,i)}ip(e,t)}};v0=function(){return mt};_0=function(e,t){var r=mt;try{return mt=e,t()}finally{mt=r}};kh=function(e,t,r){switch(t){case"input":if(Ph(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var n=Cu(i);if(!n)throw Error(oe(90));Yg(i),Ph(i,n)}}}break;case"textarea":Jg(e,r);break;case"select":t=r.value,t!=null&&za(e,!!r.multiple,t,!1)}};n0=Zd;a0=ta;var wM={usingClientEntryPoint:!1,Events:[zo,La,Cu,r0,i0,Zd]},no={findFiberByHostInstance:jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},TM={bundleType:no.bundleType,version:no.version,rendererPackageName:no.rendererPackageName,rendererConfig:no.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vi.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=l0(e),e===null?null:e.stateNode},findFiberByHostInstance:no.findFiberByHostInstance||MM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ao=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ao.isDisabled&&ao.supportsFiber))try{wu=ao.inject(TM),Ei=ao}catch{}var ao;zr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wM;zr.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ap(t))throw Error(oe(200));return SM(e,t,null,r)};zr.createRoot=function(e,t){if(!ap(e))throw Error(oe(299));var r=!1,i="",n=Bv;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(n=t.onRecoverableError)),t=rp(e,1,!1,null,null,r,!1,i,n),e[Fi]=t.current,Co(e.nodeType===8?e.parentNode:e),new np(t)};zr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(oe(188)):(e=Object.keys(e).join(","),Error(oe(268,e)));return e=l0(t),e=e===null?null:e.stateNode,e};zr.flushSync=function(e){return ta(e)};zr.hydrate=function(e,t,r){if(!ku(t))throw Error(oe(200));return Fu(null,e,t,!0,r)};zr.hydrateRoot=function(e,t,r){if(!ap(e))throw Error(oe(405));var i=r!=null&&r.hydratedSources||null,n=!1,a="",s=Bv;if(r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=zv(t,null,e,1,r??null,n,!1,a,s),e[Fi]=t.current,Co(e),i)for(e=0;e<i.length;e++)r=i[e],n=r._getVersion,n=n(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,n]:t.mutableSourceEagerHydrationData.push(r,n);return new Ou(t)};zr.render=function(e,t,r){if(!ku(t))throw Error(oe(200));return Fu(null,e,t,!1,r)};zr.unmountComponentAtNode=function(e){if(!ku(e))throw Error(oe(40));return e._reactRootContainer?(ta(function(){Fu(null,null,e,!1,function(){e._reactRootContainer=null,e[Fi]=null})}),!0):!1};zr.unstable_batchedUpdates=Zd;zr.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!ku(r))throw Error(oe(200));if(e==null||e._reactInternals===void 0)throw Error(oe(38));return Fu(e,t,r,!1,i)};zr.version="18.3.1-next-f1338f8080-20240426"});var Wv=Ni((pR,Gv)=>{"use strict";function Hv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hv)}catch(e){console.error(e)}}Hv(),Gv.exports=Vv()});var jv=Ni(sp=>{"use strict";var Xv=Wv();sp.createRoot=Xv.createRoot,sp.hydrateRoot=Xv.hydrateRoot;var fR});var qv=Ni(zu=>{"use strict";var bM=wa(),AM=Symbol.for("react.element"),CM=Symbol.for("react.fragment"),RM=Object.prototype.hasOwnProperty,PM=bM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,NM={key:!0,ref:!0,__self:!0,__source:!0};function $v(e,t,r){var i,n={},a=null,s=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(i in t)RM.call(t,i)&&!NM.hasOwnProperty(i)&&(n[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)n[i]===void 0&&(n[i]=t[i]);return{$$typeof:AM,type:e,key:a,ref:s,props:n,_owner:PM.current}}zu.Fragment=CM;zu.jsx=$v;zu.jsxs=$v});var Br=Ni((vR,Yv)=>{"use strict";Yv.exports=qv()});var tx=or(jv());var Bu=or(wa()),Jv=or(Br());var LM=()=>window.location.hash.slice(1).split("?")[0]||"/";function Kv({children:e}){let[,t]=Bu.default.useState(0);Bu.default.useEffect(()=>{let n=()=>t(a=>a+1);return window.addEventListener("hashchange",n),()=>window.removeEventListener("hashchange",n)},[]);let r=Bu.default.Children.toArray(e);return(r.find(n=>n.props.path===LM())||r[0]).props.element}var Vu=()=>null;var ml=or(wa());var _t={bride:"Aastha",groom:"Mayank",brideFull:"Aastha Agrawal",groomFull:"Mayank Singhal",brideHi:"\u0906\u0938\u094D\u0925\u093E",groomHi:"\u092E\u092F\u0902\u0915",brideSurnameHi:"\u0905\u0917\u094D\u0930\u0935\u093E\u0932",groomSurnameHi:"\u0938\u093F\u0902\u0918\u0932",weddingDate:"2026-11-22",venueName:"Agrasen Bhawan",venueNameHi:"\u0905\u0917\u094D\u0930\u0938\u0947\u0928 \u092D\u0935\u0928",venueCity:"Rourkela, Odisha",mapsQuery:"Agrasen Bhawan Rourkela",events:[{id:"sangeet",name:"Sangeet",hi:"\u0938\u0902\u0917\u0940\u0924",date:"2026-11-21",time:"7:30 PM",note:"An evening of songs, dance and family.",icon:"note",venue:"Maheswari Bhawan"},{id:"baraat",name:"Baraat & Jaimala",hi:"\u092C\u093E\u0930\u093E\u0924",date:"2026-11-22",time:"6:30 PM",note:"The groom arrives. The garlands are exchanged.",icon:"diya",venue:"Agrasen Bhawan"},{id:"pheras",name:"Pheras",hi:"\u092B\u0947\u0930\u0947",date:"2026-11-22",time:"9:00 PM",note:"Seven vows around the sacred fire.",icon:"flame",venue:"Agrasen Bhawan"}],countdownTo:"2026-11-22T18:30:00+05:30",family:"The Agrawal and Singhal families"};function Vo(e){let t=new Date(e+"T12:00:00+05:30"),r=i=>t.toLocaleDateString("en-IN",{timeZone:"Asia/Kolkata",...i});return{weekday:r({weekday:"long"}),day:r({day:"numeric"}),month:r({month:"long"}),monthShort:r({month:"short"}),year:r({year:"numeric"})}}function Zv(){return"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(_t.mapsQuery)}function Qv(){let e=_t.events[_t.events.length-2],r=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Wedding//EN","BEGIN:VEVENT","UID:aastha-mayank-wedding@invite","DTSTAMP:20261001T000000Z","DTSTART;TZID=Asia/Kolkata:"+"20261122T183000","DTEND;TZID=Asia/Kolkata:20261122T233000",`SUMMARY:${_t.brideFull.split(" ")[0]} weds ${_t.groom} (${e.name})`,`LOCATION:${_t.venueName}\\, ${_t.venueCity}`,"END:VEVENT","END:VCALENDAR"];return"data:text/calendar;charset=utf-8,"+encodeURIComponent(r.join(`\r
`))}var Vt=or(wa());var ct=or(Br());function na(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296}}function DM(){let[e,t]=(0,Vt.useState)(()=>typeof window<"u"&&!!window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches);return(0,Vt.useEffect)(()=>{if(!window.matchMedia)return;let r=window.matchMedia("(prefers-reduced-motion: reduce)"),i=()=>t(r.matches);return r.addEventListener?.("change",i),()=>r.removeEventListener?.("change",i)},[]),e}var r_=e=>Math.min(1,Math.max(0,e)),e_=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,UM=e=>e*e*(.6+.4*e),t_=e=>1-Math.pow(1-e,3),Ho=(e,t,r,i)=>i(r_((e-t)/(r-t)));function i_(){let e=()=>{let i=typeof window<"u"?new URLSearchParams(window.location.search).get("H"):null;if(i)return parseInt(i,10);if(typeof window<"u"&&window.top===window.self&&!i)return Math.max(520,window.innerHeight);let n=typeof window<"u"&&window.screen&&window.screen.height||800,a=typeof window<"u"&&window.innerWidth||390;return Math.round(Math.max(500,Math.min(n-250,a*2,840)))},[t,r]=(0,Vt.useState)(e);return(0,Vt.useEffect)(()=>{let i=()=>r(e());return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),t}function n_(e=6200){let t=typeof window<"u"?new URLSearchParams(window.location.search):new URLSearchParams,r=DM(),i=t.get("skip")!==null,n=t.get("p"),[a,s]=(0,Vt.useState)(i?"done":"idle"),[o,l]=(0,Vt.useState)(i),u=(0,Vt.useRef)(null),c=(0,Vt.useRef)(0),h=y=>{let _=u.current;if(!_)return;let v=_.style;v.setProperty("--p",String(y)),v.setProperty("--door",String(Ho(y,.06,.4,e_))),v.setProperty("--cam",String(Ho(y,.16,.98,UM))),v.setProperty("--glow",String(Ho(y,.3,.9,e_))),v.setProperty("--fade",String(Ho(y,.84,1,t_))),v.setProperty("--ui",String(1-Ho(y,0,.12,t_)))};return(0,Vt.useEffect)(()=>{r&&a==="idle"&&(s("done"),l(!0))},[r,a]),(0,Vt.useEffect)(()=>{a==="idle"&&n!==null&&h(parseFloat(n))},[a,n]),(0,Vt.useEffect)(()=>()=>cancelAnimationFrame(c.current),[]),{state:a,ready:o,ref:u,start:()=>{if(a!=="idle")return;s("opening");let y=performance.now(),_=!1,v=d=>{let g=r_((d-y)/e);h(g),g>.86&&!_&&(_=!0,l(!0)),g<1?c.current=requestAnimationFrame(v):s("done")};c.current=requestAnimationFrame(v)},skip:()=>{cancelAnimationFrame(c.current),h(1),l(!0),s("done")}}}function IM(e){let[t,r]=(0,Vt.useState)(()=>Date.now());(0,Vt.useEffect)(()=>{let a=setInterval(()=>r(Date.now()),1e3);return()=>clearInterval(a)},[]);let i=Math.max(0,new Date(e).getTime()-t),n=Math.floor(i/1e3);return{days:Math.floor(n/86400),hours:Math.floor(n%86400/3600),minutes:Math.floor(n%3600/60),seconds:n%60,done:i===0}}function a_({cls:e}){let t=IM(_t.countdownTo),r=[["Days",t.days],["Hours",t.hours],["Minutes",t.minutes],["Seconds",t.seconds]];return(0,ct.jsx)("div",{className:e,role:"timer","aria-label":`${t.days} days, ${t.hours} hours, ${t.minutes} minutes and ${t.seconds} seconds until the wedding`,children:r.map(([i,n])=>(0,ct.jsxs)("div",{className:"cd-cell",children:[(0,ct.jsx)("span",{className:"cd-num","aria-hidden":"true",children:String(n).padStart(2,"0")}),(0,ct.jsx)("span",{className:"cd-label","aria-hidden":"true",children:i})]},i))})}function Hi({children:e,className:t="",delay:r=0,as:i="div"}){let n=(0,Vt.useRef)(null),[a,s]=(0,Vt.useState)(!1);return(0,Vt.useEffect)(()=>{let o=n.current;if(!o)return;if(!("IntersectionObserver"in window)){s(!0);return}let l=new IntersectionObserver(u=>u.forEach(c=>{c.isIntersecting&&(s(!0),l.disconnect())}),{threshold:.12});return l.observe(o),()=>l.disconnect()},[]),(0,ct.jsx)(i,{ref:n,className:`reveal ${a?"in":""} ${t}`,style:{transitionDelay:`${r}ms`},children:e})}function s_({count:e=22,kind:t="petal",seed:r=7}){let i=(0,Vt.useMemo)(()=>{let n=na(r);return Array.from({length:e},()=>({l:n()*100,d:n()*-20,t:12+n()*14,s:6+n()*10,x:(n()-.5)*120,rot:n()*360,o:.35+n()*.5}))},[e,r]);return(0,ct.jsx)("div",{className:`drift drift-${t}`,"aria-hidden":"true",children:i.map((n,a)=>(0,ct.jsx)("i",{style:{left:`${n.l}%`,animationDelay:`${n.d}s`,animationDuration:`${n.t}s`,width:n.s,height:n.s*(t==="petal"?1.4:1),"--dx":`${n.x}px`,"--r":`${n.rot}deg`,opacity:n.o}},a))})}function op({name:e}){let t={fill:"none",stroke:"currentColor",strokeWidth:1.4,strokeLinecap:"round",strokeLinejoin:"round"},r={leaf:(0,ct.jsxs)(ct.Fragment,{children:[(0,ct.jsx)("path",{d:"M6 26C6 14 14 7 26 6c0 12-7 20-20 20z",...t}),(0,ct.jsx)("path",{d:"M6 26L19 13",...t})]}),sun:(0,ct.jsxs)(ct.Fragment,{children:[(0,ct.jsx)("circle",{cx:"16",cy:"16",r:"5",...t}),Array.from({length:8},(i,n)=>{let a=n*Math.PI/4;return(0,ct.jsx)("path",{d:`M${16+Math.cos(a)*8.5} ${16+Math.sin(a)*8.5}L${16+Math.cos(a)*12} ${16+Math.sin(a)*12}`,...t},n)})]}),note:(0,ct.jsxs)(ct.Fragment,{children:[(0,ct.jsx)("path",{d:"M12 22V7l12-3v15",...t}),(0,ct.jsx)("circle",{cx:"9.5",cy:"22",r:"2.6",...t}),(0,ct.jsx)("circle",{cx:"21.5",cy:"19",r:"2.6",...t})]}),diya:(0,ct.jsxs)(ct.Fragment,{children:[(0,ct.jsx)("path",{d:"M5 17c0 5 5 8 11 8s11-3 11-8z",...t}),(0,ct.jsx)("path",{d:"M16 15c-3-3-2-6 0-9 2 3 3 6 0 9z",...t})]}),flame:(0,ct.jsxs)(ct.Fragment,{children:[(0,ct.jsx)("path",{d:"M16 28c-6 0-9-4-9-8 0-5 5-7 5-13 4 2 6 5 6 8 2-1 3-3 3-5 3 3 4 6 4 10 0 5-4 8-9 8z",...t}),(0,ct.jsx)("path",{d:"M16 28c-2.5 0-4-1.8-4-4 0-2.5 3-4 4-7 2 2 4 4 4 7 0 2.2-1.5 4-4 4z",...t})]}),pin:(0,ct.jsxs)(ct.Fragment,{children:[(0,ct.jsx)("path",{d:"M16 29s9-8.5 9-15a9 9 0 10-18 0c0 6.5 9 15 9 15z",...t}),(0,ct.jsx)("circle",{cx:"16",cy:"14",r:"3.4",...t})]})};return(0,ct.jsx)("svg",{viewBox:"0 0 32 32",width:"32",height:"32","aria-hidden":"true",children:r[e]})}var U=or(Br()),wt=730,st=600;function Zt(e,t,r,i,n,a=!0){let s=i-n;return`M${e-t} ${r}V${i}C${e-t} ${i-.55*s} ${e-t*.3} ${n+.3*s} ${e} ${n}C${e+t*.3} ${n+.3*s} ${e+t} ${i-.55*s} ${e+t} ${i}V${r}${a?"Z":""}`}var Go=(e,t,r)=>`M${e-r} ${t}C${e-r} ${t-r*.95} ${e-r*.25} ${t-r*1.05} ${e} ${t-r*1.65}C${e+r*.25} ${t-r*1.05} ${e+r} ${t-r*.95} ${e+r} ${t}Z`;function l_({x:e,y:t,s:r=1}){return(0,U.jsxs)("g",{stroke:"#f4c75a",fill:"#f4c75a",children:[(0,U.jsx)("line",{x1:e,y1:t,x2:e,y2:t-20*r,strokeWidth:2*r}),(0,U.jsx)("circle",{cx:e,cy:t-24*r,r:4.5*r,stroke:"none"}),(0,U.jsx)("circle",{cx:e,cy:t-31*r,r:2.4*r,stroke:"none"})]})}function o_({x:e,y:t,s:r=1}){let i=34*r;return(0,U.jsxs)("g",{children:[(0,U.jsx)("path",{d:Go(e,t-38*r,i*.62),fill:"url(#rDome)",stroke:"#f4c75a",strokeWidth:1.2}),(0,U.jsx)(l_,{x:e,y:t-38*r-i*.62*1.65,s:r*.7}),(0,U.jsx)("rect",{x:e-i*.7,y:t-40*r,width:i*1.4,height:4*r,fill:"#f4c75a"}),[-1,-.33,.33,1].map((n,a)=>(0,U.jsx)("rect",{x:e+n*i*.62-2*r,y:t-36*r,width:4*r,height:36*r,fill:"#8c2230",stroke:"#f4c75a",strokeWidth:.6},a)),(0,U.jsx)("rect",{x:e-i*.7,y:t-2,width:i*1.4,height:4*r,fill:"#f4c75a"})]})}function u_(){let e=na(11),t=Array.from({length:190},()=>({x:-500+e()*2200,y:-200+e()*720,s:.6+e()*1.6,d:e()*5,t:2+e()*4}));return(0,U.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,U.jsxs)("defs",{children:[(0,U.jsxs)("linearGradient",{id:"rSky",gradientUnits:"userSpaceOnUse",x1:"0",y1:"0",x2:"0",y2:"900",children:[(0,U.jsx)("stop",{offset:"0",stopColor:"#14020a"}),(0,U.jsx)("stop",{offset:"0.35",stopColor:"#3a0714"}),(0,U.jsx)("stop",{offset:"0.62",stopColor:"#7d1a1c"}),(0,U.jsx)("stop",{offset:"0.8",stopColor:"#c8561f"}),(0,U.jsx)("stop",{offset:"1",stopColor:"#f0a23a"})]}),(0,U.jsxs)("radialGradient",{id:"rMoon",children:[(0,U.jsx)("stop",{offset:"0",stopColor:"#ffe9a8",stopOpacity:"0.9"}),(0,U.jsx)("stop",{offset:"1",stopColor:"#ffe9a8",stopOpacity:"0"})]}),(0,U.jsxs)("mask",{id:"rCres",children:[(0,U.jsx)("rect",{width:"1200",height:"900",fill:"#000"}),(0,U.jsx)("circle",{cx:"930",cy:"170",r:"34",fill:"#fff"}),(0,U.jsx)("circle",{cx:"948",cy:"160",r:"30",fill:"#000"})]})]}),(0,U.jsx)("rect",{x:"-2000",y:"-2000",width:"5200",height:"5400",fill:"url(#rSky)"}),t.map((r,i)=>(0,U.jsx)("circle",{className:"twinkle",cx:r.x,cy:r.y,r:r.s,fill:"#ffe7a6",style:{animationDelay:`${r.d}s`,animationDuration:`${r.t}s`}},i)),(0,U.jsx)("circle",{cx:"930",cy:"170",r:"120",fill:"url(#rMoon)",opacity:"0.5"}),(0,U.jsx)("rect",{width:"1200",height:"900",fill:"#ffe9a8",mask:"url(#rCres)"})]})}function c_(){let e=na(5),t=[],r=-900,i=0;for(;r<2100;){let n=50+e()*90,a=120+e()*170,s=640-a,o=e();t.push((0,U.jsx)("rect",{x:r,y:s,width:n,height:a+100,fill:"#3a0a16"},"b"+i)),o<.45?t.push((0,U.jsx)("path",{d:Go(r+n/2,s,n*.38),fill:"#3a0a16"},"d"+i)):o<.7&&t.push((0,U.jsxs)("g",{children:[(0,U.jsx)("rect",{x:r+n/2-4,y:s-70,width:"8",height:"70",fill:"#3a0a16"}),(0,U.jsx)("path",{d:Go(r+n/2,s-70,9),fill:"#3a0a16"})]},"m"+i)),e()<.6&&t.push((0,U.jsx)("rect",{className:"flick",x:r+n*.3,y:s+24,width:"7",height:"12",rx:"3",fill:"#ffc45a",opacity:"0.8",style:{animationDelay:`${e()*4}s`}},"w"+i)),r+=n+2+e()*8,i++}return(0,U.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,U.jsx)("defs",{children:(0,U.jsxs)("linearGradient",{id:"rHaze",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,U.jsx)("stop",{offset:"0.5",stopColor:"#f0a23a",stopOpacity:"0"}),(0,U.jsx)("stop",{offset:"1",stopColor:"#f0a23a",stopOpacity:"0.45"})]})}),(0,U.jsx)("g",{opacity:"0.95",children:t}),(0,U.jsx)("rect",{x:"-1500",y:"420",width:"4200",height:"320",fill:"url(#rHaze)"})]})}function h_(){let i=n=>{let o=n===1?870:330,l=n===1?870:-660,u=990;return(0,U.jsxs)("g",{children:[(0,U.jsx)("rect",{x:l,y:"470",width:u,height:wt-470,fill:"url(#rWall)"}),(0,U.jsx)("rect",{x:l,y:"470",width:u,height:"8",fill:"#f4c75a"}),Array.from({length:Math.floor(u/15)},(c,h)=>(0,U.jsx)("rect",{x:l+h*15+2,y:"458",width:"9",height:"12",fill:"#5a1220",stroke:"#f4c75a",strokeWidth:"0.6"},h)),Array.from({length:15},(c,h)=>{let p=n===1?o+66*h+33:o-66*h-33;return(0,U.jsxs)("g",{children:[(0,U.jsx)("path",{d:Zt(p,22,690,590,540),fill:"#ffb347",opacity:"0.92"}),(0,U.jsx)("path",{d:Zt(p,22,690,590,540),fill:"none",stroke:"#f4c75a",strokeWidth:"2.5"}),(0,U.jsx)("path",{d:Zt(p,31,690,590,528,!1),fill:"none",stroke:"#f4c75a",strokeWidth:"1",opacity:"0.7"}),(0,U.jsx)("path",{d:Zt(p,14,690,600,565),fill:"#7b1a10",opacity:"0.55"})]},h)}),(0,U.jsx)("rect",{x:l,y:wt-36,width:u,height:"6",fill:"#f4c75a",opacity:"0.8"}),[60,270,560].map((c,h)=>(0,U.jsx)(o_,{x:n===1?870+c:330-c,y:"458",s:1.15},h))]})};return(0,U.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,U.jsxs)("defs",{children:[(0,U.jsxs)("linearGradient",{id:"rWall",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,U.jsx)("stop",{offset:"0",stopColor:"#7a1626"}),(0,U.jsx)("stop",{offset:"1",stopColor:"#4a0b18"})]}),(0,U.jsxs)("linearGradient",{id:"rDome",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,U.jsx)("stop",{offset:"0",stopColor:"#ffd77a"}),(0,U.jsx)("stop",{offset:"0.55",stopColor:"#d99a2b"}),(0,U.jsx)("stop",{offset:"1",stopColor:"#8b4c10"})]}),(0,U.jsxs)("radialGradient",{id:"rInner",cx:"0.5",cy:"0.62",r:"0.65",children:[(0,U.jsx)("stop",{offset:"0",stopColor:"#fff3c4"}),(0,U.jsx)("stop",{offset:"0.35",stopColor:"#ffc55a"}),(0,U.jsx)("stop",{offset:"0.75",stopColor:"#d9732a"}),(0,U.jsx)("stop",{offset:"1",stopColor:"#7a1c14"})]}),(0,U.jsxs)("linearGradient",{id:"rFloor",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,U.jsx)("stop",{offset:"0",stopColor:"#2a0710"}),(0,U.jsx)("stop",{offset:"1",stopColor:"#12030a"})]}),(0,U.jsxs)("linearGradient",{id:"rSpill",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,U.jsx)("stop",{offset:"0",stopColor:"#ffd77a",stopOpacity:"0.95"}),(0,U.jsx)("stop",{offset:"1",stopColor:"#ffb347",stopOpacity:"0"})]}),(0,U.jsxs)("radialGradient",{id:"rLamp",children:[(0,U.jsx)("stop",{offset:"0",stopColor:"#fff6cf"}),(0,U.jsx)("stop",{offset:"0.4",stopColor:"#ffd37a",stopOpacity:"0.8"}),(0,U.jsx)("stop",{offset:"1",stopColor:"#ffb347",stopOpacity:"0"})]}),(0,U.jsxs)("mask",{id:"rHole",maskUnits:"userSpaceOnUse",x:"-2000",y:"-1000",width:"5200",height:"3000",children:[(0,U.jsx)("rect",{x:"-2000",y:"-1000",width:"5200",height:"3000",fill:"#fff"}),(0,U.jsx)("path",{d:Zt(st,150,wt,400,262),fill:"#000"})]}),(0,U.jsx)("clipPath",{id:"rClipHole",children:(0,U.jsx)("path",{d:Zt(st,150,wt,400,262)})})]}),(0,U.jsx)("rect",{x:"-2000",y:wt-4,width:"5200",height:"1400",fill:"url(#rFloor)"}),(0,U.jsxs)("g",{clipPath:"url(#rClipHole)",children:[(0,U.jsx)("rect",{x:"440",y:"240",width:"320",height:"500",fill:"url(#rInner)"}),[1,.78,.58,.42].map((n,a)=>(0,U.jsx)("path",{d:Zt(st,150*.82*n,wt-40+a*6,410-a*4,306+(1-n)*140),fill:"none",stroke:"#7a1c14",strokeWidth:4-a*.7,opacity:.55-a*.06},a)),[-1,1].map(n=>[0,1,2].map(a=>(0,U.jsx)("rect",{x:st+n*(118-a*26)-5+(n<0,0),y:420+a*22,width:"10",height:300-a*40,fill:"#5b1210",opacity:.5-a*.1},n+""+a))),(0,U.jsx)("circle",{className:"flick",cx:st,cy:"355",r:"30",fill:"url(#rLamp)"}),(0,U.jsx)("circle",{cx:st,cy:"355",r:"5",fill:"#fff6cf"}),(0,U.jsx)("path",{d:`M${st-150} ${wt} L${st+150} ${wt} L${st+110} ${wt-70} L${st-110} ${wt-70}Z`,fill:"#ffe08a",opacity:"0.35"})]}),(0,U.jsxs)("g",{mask:"url(#rHole)",children:[i(1),i(-1),[330,820].map(n=>(0,U.jsxs)("g",{children:[(0,U.jsx)("rect",{x:n,y:"130",width:"50",height:wt-130,fill:"url(#rWall)"}),(0,U.jsx)("rect",{x:n,y:"130",width:"50",height:"6",fill:"#f4c75a"}),[0,1,2,3].map(a=>(0,U.jsx)("path",{d:Zt(n+25,10,230+a*120,205+a*120,188+a*120),fill:"#ffb347",className:"flick",style:{animationDelay:`${a*.7}s`},opacity:"0.85"},a)),(0,U.jsx)(o_,{x:n+25,y:"130",s:1.1})]},n)),(0,U.jsx)("rect",{x:"380",y:"150",width:"440",height:wt-150,fill:"url(#rWall)"}),(0,U.jsx)("rect",{x:"380",y:"150",width:"440",height:"8",fill:"#f4c75a"}),(0,U.jsx)("rect",{x:"380",y:"164",width:"440",height:"3",fill:"#f4c75a",opacity:"0.6"}),Array.from({length:27},(n,a)=>(0,U.jsx)("rect",{x:382+a*16.2,y:"138",width:"9",height:"12",fill:"#5a1220",stroke:"#f4c75a",strokeWidth:"0.6"},a)),(0,U.jsx)("path",{d:Go(st,138,56),fill:"url(#rDome)",stroke:"#f4c75a",strokeWidth:"1.4"}),(0,U.jsx)("path",{d:Go(st,138,56),fill:"none",stroke:"#8b4c10",strokeWidth:"1",opacity:"0.4",transform:"translate(0 6) scale(1 1)"}),(0,U.jsx)(l_,{x:st,y:138-56*1.65+4,s:1.5}),[-4,-3,-2,-1,1,2,3,4].map(n=>(0,U.jsxs)("g",{children:[(0,U.jsx)("path",{d:Zt(st+n*46-(Math.abs(n)===1,0),15,250,218,190),fill:"#ffb347",className:"flick",style:{animationDelay:`${Math.abs(n)*.5}s`},opacity:"0.9"}),(0,U.jsx)("path",{d:Zt(st+n*46,20,250,218,182,!1),fill:"none",stroke:"#f4c75a",strokeWidth:"1.4"})]},n)),[-1,1].map(n=>(0,U.jsxs)("g",{children:[(0,U.jsx)("rect",{x:n<0?400:780,y:"330",width:"20",height:"360",fill:"none"}),[0,1,2].map(a=>(0,U.jsx)("path",{d:Zt(st+n*215,22,470+a*90,430+a*90,395+a*90),fill:"#3a0813",stroke:"#f4c75a",strokeWidth:"1.6"},a))]},n)),(0,U.jsx)("rect",{x:"380",y:"620",width:"440",height:"5",fill:"#f4c75a",opacity:"0.85"}),(0,U.jsx)("rect",{x:"380",y:wt-28,width:"440",height:"28",fill:"#2f0911"}),(0,U.jsx)("rect",{x:"380",y:wt-28,width:"440",height:"3",fill:"#f4c75a"})]}),(0,U.jsx)("path",{d:Zt(st,150,wt,400,262),fill:"none",stroke:"#f4c75a",strokeWidth:"6"}),(0,U.jsx)("path",{d:Zt(st,164,wt,392,232),fill:"none",stroke:"#f4c75a",strokeWidth:"2",opacity:"0.8"}),(0,U.jsx)("path",{d:Zt(st,176,wt,386,206),fill:"none",stroke:"#c98a2b",strokeWidth:"1.2",opacity:"0.7"}),Array.from({length:26},(n,a)=>{let s=a/25,o=Math.PI*(.02+.96*s),l=st-Math.cos(o)*164,u=392-Math.sin(o)*160*.98;return(0,U.jsx)("circle",{cx:l,cy:u,r:"2.4",fill:"#ffd77a",className:"twinkle",style:{animationDelay:`${a%7*.3}s`,animationDuration:"2.4s"}},a)}),(0,U.jsx)("path",{d:`M${st-14} 232Q${st} 200 ${st+14} 232Q${st} 218 ${st-14} 232Z`,fill:"#f4c75a"}),[0,1,2].map(n=>(0,U.jsx)("path",{d:`M${st-190-n*24} ${wt+n*14}H${st+190+n*24}V${wt+14+n*14}H${st-190-n*24}Z`,fill:n%2?"#2a0710":"#3a0b17",stroke:"#f4c75a",strokeWidth:"1",opacity:"0.95"},n))]})}function d_(){return(0,U.jsx)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:(0,U.jsx)("path",{d:`M${st-150} ${wt} L${st+150} ${wt} L${st+420} 900 L${st-420} 900Z`,fill:"url(#rSpill)",opacity:"0.85"})})}function p_(){let e=(t,r,i,n,a)=>Array.from({length:t},(s,o)=>(0,U.jsx)("path",{transform:`rotate(${360/t*o})`,d:`M0 ${-r}Q${n} ${(-r-i)/2} 0 ${-i}Q${-n} ${(-r-i)/2} 0 ${-r}Z`,fill:a},o));return(0,U.jsx)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:(0,U.jsxs)("g",{transform:`translate(${st} ${wt+62}) scale(1 0.17)`,opacity:"0.95",children:[(0,U.jsx)("circle",{r:"250",fill:"#2a0710",opacity:"0.6"}),e(24,130,245,22,"#e8590c"),e(24,110,190,16,"#ffb938"),e(16,70,140,20,"#b3122e"),e(12,30,90,14,"#ffe08a"),(0,U.jsx)("circle",{r:"26",fill:"#ffd77a"}),(0,U.jsx)("circle",{r:"12",fill:"#b3122e"})]})})}function f_({x:e,y:t,r,i}){let n=["#ff9d1c","#ffb938","#e8590c","#ffa726"][i%4];return(0,U.jsxs)("g",{children:[(0,U.jsx)("circle",{cx:e,cy:t,r,fill:n}),(0,U.jsx)("circle",{cx:e,cy:t,r:r*.62,fill:n,stroke:"#fff3c4",strokeOpacity:"0.45",strokeWidth:"0.8"}),(0,U.jsx)("circle",{cx:e,cy:t,r:r*.28,fill:"#ffe08a",opacity:"0.8"})]})}function OM({x:e,len:t,seed:r,delay:i}){let n=na(r),a=Math.floor(t/15);return(0,U.jsxs)("g",{className:"sway",style:{animationDelay:`${i}s`},children:[(0,U.jsx)("line",{x1:e,y1:"0",x2:e,y2:t,stroke:"#6b3b12",strokeWidth:"1"}),Array.from({length:a},(s,o)=>(0,U.jsx)(f_,{x:e+(n()-.5)*2,y:10+o*15,r:7+n()*2,i:o+r},o)),(0,U.jsx)("path",{d:`M${e-7} ${t+6}Q${e} ${t+26} ${e+7} ${t+6}Z`,fill:"#b3122e"})]})}function m_(){let e=na(3),t=(i,n,a,s,o,l)=>{let u=na(l),c=Math.floor((n-i)/15);return(0,U.jsxs)("g",{children:[(0,U.jsx)("path",{d:`M${i} ${a}Q${(i+n)/2} ${a+s*2} ${n} ${a}`,fill:"none",stroke:"#6b3b12",strokeWidth:"1.2"}),Array.from({length:c+1},(h,p)=>{let f=p/c,y=i+(n-i)*f,_=(1-f)*(1-f)*a+2*f*(1-f)*(a+s*2)+f*f*a;return(0,U.jsx)(f_,{x:y,y:_+3+u()*1.5,r:8+u()*2,i:p},p)})]},o)},r=(i,n,a,s)=>(0,U.jsxs)("g",{className:"swing",style:{animationDelay:`${a}s`},children:[(0,U.jsx)("line",{x1:i,y1:"0",x2:i,y2:n,stroke:"#c9952b",strokeWidth:"1.4"}),(0,U.jsx)("circle",{cx:i,cy:n+46,r:"64",fill:"url(#rLamp)",opacity:"0.6",className:"flick"}),(0,U.jsx)("path",{d:`M${i-6} ${n}h12l10 12h-32z`,fill:"#c9952b"}),(0,U.jsx)("path",{d:`M${i-22} ${n+12}Q${i-34} ${n+46} ${i-20} ${n+80}H${i+20}Q${i+34} ${n+46} ${i+22} ${n+12}Z`,fill:"#e0481e",stroke:"#ffd77a",strokeWidth:"1.6"}),(0,U.jsx)("path",{d:`M${i-8} ${n+12}Q${i-14} ${n+46} ${i-8} ${n+80}M${i+8} ${n+12}Q${i+14} ${n+46} ${i+8} ${n+80}`,stroke:"#ffd77a",strokeWidth:"1",fill:"none"}),(0,U.jsx)("rect",{x:i-20,y:n+80,width:"40",height:"5",fill:"#c9952b"}),(0,U.jsx)("path",{d:`M${i} ${n+85}v22`,stroke:"#c9952b",strokeWidth:"1.4"}),(0,U.jsx)("path",{d:`M${i-5} ${n+107}h10l-5 10z`,fill:"#ffd77a"})]},s);return(0,U.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,U.jsx)("defs",{children:(0,U.jsxs)("radialGradient",{id:"rLamp",children:[(0,U.jsx)("stop",{offset:"0",stopColor:"#fff6cf"}),(0,U.jsx)("stop",{offset:"0.4",stopColor:"#ffd37a",stopOpacity:"0.8"}),(0,U.jsx)("stop",{offset:"1",stopColor:"#ffb347",stopOpacity:"0"})]})}),t(330,870,-6,30,"a",21),t(330,600,20,26,"b",22),t(600,870,20,26,"c",23),[380,420,460,500,540,660,700,740,780,820].map((i,n)=>(0,U.jsx)(OM,{x:i,len:46+n*37%60,seed:n+40,delay:n%5*.4},i)),r(345,0,0,"l1"),r(855,0,.9,"l2")]})}function g_(){return(0,U.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,U.jsx)("defs",{children:(0,U.jsxs)("radialGradient",{id:"rGlow",children:[(0,U.jsx)("stop",{offset:"0",stopColor:"#ffd37a",stopOpacity:"0.9"}),(0,U.jsx)("stop",{offset:"1",stopColor:"#ffb347",stopOpacity:"0"})]})}),[440,500,560,640,700,760].map((t,r)=>{let i=838+r%2*8;return(0,U.jsxs)("g",{children:[(0,U.jsx)("circle",{className:"flick",cx:t,cy:i-8,r:"34",fill:"url(#rGlow)",style:{animationDelay:`${r*.3}s`}}),(0,U.jsx)("path",{d:`M${t-16} ${i}Q${t} ${i+16} ${t+16} ${i}Q${t+9} ${i+3} ${t} ${i+3}Q${t-9} ${i+3} ${t-16} ${i}Z`,fill:"#c25a1e",stroke:"#ffd77a",strokeWidth:"1"}),(0,U.jsx)("path",{className:"flame",d:`M${t} ${i-2}C${t-6} ${i-9} ${t-3} ${i-16} ${t} ${i-22}C${t+3} ${i-16} ${t+6} ${i-9} ${t} ${i-2}Z`,fill:"#fff1b8",style:{animationDelay:`${r*.25}s`}})]},t)})]})}function lp({side:e}){let t="rd"+e,r=(i,n,a,s,o,l)=>Array.from({length:i},(u,c)=>(0,U.jsx)("path",{transform:`translate(${st} 520) rotate(${360/i*c})`,d:`M0 ${-n}Q${s} ${(-n-a)/2} 0 ${-a}Q${-s} ${(-n-a)/2} 0 ${-n}Z`,fill:l,stroke:o,strokeWidth:"1.1"},c));return(0,U.jsxs)("svg",{viewBox:`${e==="l"?450:600} 250 150 480`,className:"doorsvg",preserveAspectRatio:"none","aria-hidden":"true",children:[(0,U.jsxs)("defs",{children:[(0,U.jsx)("clipPath",{id:t+"c",children:(0,U.jsx)("path",{d:Zt(st,150,wt,400,262)})}),(0,U.jsxs)("linearGradient",{id:t+"g",x1:"0",y1:"0",x2:"1",y2:"0",children:[(0,U.jsx)("stop",{offset:"0",stopColor:"#5a0f1c"}),(0,U.jsx)("stop",{offset:"0.5",stopColor:"#7d1628"}),(0,U.jsx)("stop",{offset:"1",stopColor:"#4a0b16"})]}),(0,U.jsx)("pattern",{id:t+"p",width:"22",height:"22",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:(0,U.jsx)("path",{d:"M0 0H22M0 0V22",stroke:"#f4c75a",strokeWidth:"0.9",opacity:"0.38"})}),(0,U.jsxs)("radialGradient",{id:t+"b",children:[(0,U.jsx)("stop",{offset:"0",stopColor:"#fff0b0"}),(0,U.jsx)("stop",{offset:"0.6",stopColor:"#e0a53a"}),(0,U.jsx)("stop",{offset:"1",stopColor:"#8b4c10"})]})]}),(0,U.jsxs)("g",{clipPath:`url(#${t}c)`,children:[(0,U.jsx)("rect",{x:"440",y:"240",width:"320",height:"500",fill:`url(#${t}g)`}),(0,U.jsx)("path",{d:Zt(st,138,wt-14,405,285),fill:`url(#${t}p)`}),(0,U.jsx)("path",{d:Zt(st,138,wt-14,405,285),fill:"none",stroke:"#f4c75a",strokeWidth:"2"}),(0,U.jsx)("path",{d:Zt(st,120,wt-30,410,310),fill:"none",stroke:"#f4c75a",strokeWidth:"0.9",opacity:"0.7"}),(0,U.jsx)("rect",{x:"440",y:"412",width:"320",height:"6",fill:"#f4c75a",opacity:"0.9"}),(0,U.jsx)("rect",{x:"440",y:"672",width:"320",height:"6",fill:"#f4c75a",opacity:"0.9"}),r(16,40,96,20,"#f4c75a","#8c1d2c"),r(16,24,64,11,"#f4c75a","#f4c75a"),r(8,12,36,9,"#7a1424","#ffe08a"),(0,U.jsx)("circle",{cx:st,cy:"520",r:"100",fill:"none",stroke:"#f4c75a",strokeWidth:"1.6"}),(0,U.jsx)("circle",{cx:st,cy:"520",r:"108",fill:"none",stroke:"#f4c75a",strokeWidth:"0.8",strokeDasharray:"2 5"}),(0,U.jsx)("circle",{cx:st,cy:"520",r:"13",fill:`url(#${t}b)`}),[0,1,2,3].map(i=>Array.from({length:6},(n,a)=>(0,U.jsx)("circle",{cx:456+a*25,cy:430+i*0+(i<2?i*0:0)+0,r:"0"},i+"_"+a))),Array.from({length:7},(i,n)=>(0,U.jsx)("circle",{cx:462+n*22,cy:"436",r:"3",fill:"#ffd77a",opacity:.9},"s"+n)),Array.from({length:7},(i,n)=>(0,U.jsx)("circle",{cx:462+n*22,cy:"654",r:"3",fill:"#ffd77a",opacity:.9},"t"+n)),Array.from({length:7},(i,n)=>(0,U.jsx)("circle",{cx:462+n*22,cy:"696",r:"3",fill:"#ffd77a",opacity:.9},"u"+n)),[e==="l"?584:616].map(i=>(0,U.jsxs)("g",{children:[(0,U.jsx)("circle",{cx:i,cy:"560",r:"7",fill:`url(#${t}b)`}),(0,U.jsx)("circle",{cx:i,cy:"574",r:"10",fill:"none",stroke:"#f4c75a",strokeWidth:"3"})]},i)),(0,U.jsx)("rect",{x:e==="l"?592:598,y:"250",width:"10",height:"480",fill:"#2a0710",opacity:"0.5"}),(0,U.jsx)("rect",{x:"440",y:"240",width:"320",height:"500",fill:"#000",opacity:"0.12"})]})]})}var kM=0,v_=1,FM=2,Iy=1,Oy=2,Yi=3,zn=0,Tr=1,bi=2,Zi=0,Cs=1,Rs=2,__=3,y_=4,zM=5,fa=100,BM=101,VM=102,HM=103,GM=104,WM=200,XM=201,jM=202,$M=203,$p=204,qp=205,qM=206,YM=207,KM=208,JM=209,ZM=210,QM=211,eE=212,tE=213,rE=214,Yp=0,Kp=1,Jp=2,Ds=3,Zp=4,Qp=5,ef=6,tf=7,ky=0,iE=1,nE=2,Fn=0,Fy=1,zy=2,By=3,$f=4,aE=5,Vy=6,Hy=7,Gy=300,Us=301,Is=302,rf=303,nf=304,Uc=306,Pc=1e3,ga=1001,af=1002,Xr=1003,sE=1004,Hu=1005,Ci=1006,up=1007,va=1008,nn=1009,Wy=1010,Xy=1011,ol=1012,qf=1013,_a=1014,Ri=1015,Qi=1016,Yf=1017,Kf=1018,Os=1020,jy=35902,$y=1021,qy=1022,mi=1023,Yy=1024,Ky=1025,Ps=1026,ks=1027,Jf=1028,Zf=1029,Jy=1030,Qf=1031,em=1033,Mc=33776,Ec=33777,wc=33778,Tc=33779,sf=35840,of=35841,lf=35842,uf=35843,cf=36196,hf=37492,df=37496,pf=37808,ff=37809,mf=37810,gf=37811,vf=37812,_f=37813,yf=37814,xf=37815,Sf=37816,Mf=37817,Ef=37818,wf=37819,Tf=37820,bf=37821,bc=36492,Af=36494,Cf=36495,Zy=36283,Rf=36284,Pf=36285,Nf=36286,Nc=2300,Lf=2301,cp=2302,x_=2400,S_=2401,M_=2402,oE=3200,lE=3201,Qy=0,uE=1,kn="",Gr="srgb",zs="srgb-linear",Ic="linear",gt="srgb",es=7680,E_=519,cE=512,hE=513,dE=514,e1=515,pE=516,fE=517,mE=518,gE=519,Df=35044,w_="300 es",Ji=2e3,Lc=2001,Bs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let i=r.indexOf(t);i!==-1&&r.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let r=t.slice(0);for(let i=0,n=r.length;i<n;i++)r[i].call(this,e);e.target=null}}},pr=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hp=Math.PI/180,Uf=180/Math.PI;function en(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pr[e&255]+pr[e>>8&255]+pr[e>>16&255]+pr[e>>24&255]+"-"+pr[t&255]+pr[t>>8&255]+"-"+pr[t>>16&15|64]+pr[t>>24&255]+"-"+pr[r&63|128]+pr[r>>8&255]+"-"+pr[r>>16&255]+pr[r>>24&255]+pr[i&255]+pr[i>>8&255]+pr[i>>16&255]+pr[i>>24&255]).toLowerCase()}function er(e,t,r){return Math.max(t,Math.min(r,e))}function vE(e,t){return(e%t+t)%t}function dp(e,t,r){return(1-r)*e+r*t}function Ai(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function yt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var ne=class t1{constructor(t=0,r=0){t1.prototype.isVector2=!0,this.x=t,this.y=r}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,r){return this.x=t,this.y=r,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let r=this.x,i=this.y,n=t.elements;return this.x=n[0]*r+n[3]*i+n[6],this.y=n[1]*r+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this}clampLength(t,r){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let r=Math.sqrt(this.lengthSq()*t.lengthSq());if(r===0)return Math.PI/2;let i=this.dot(t)/r;return Math.acos(er(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let r=this.x-t.x,i=this.y-t.y;return r*r+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this}lerpVectors(t,r,i){return this.x=t.x+(r.x-t.x)*i,this.y=t.y+(r.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this}rotateAround(t,r){let i=Math.cos(r),n=Math.sin(r),a=this.x-t.x,s=this.y-t.y;return this.x=a*i-s*n+t.x,this.y=a*n+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},lt=class r1{constructor(t,r,i,n,a,s,o,l,u){r1.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,r,i,n,a,s,o,l,u)}set(t,r,i,n,a,s,o,l,u){let c=this.elements;return c[0]=t,c[1]=n,c[2]=o,c[3]=r,c[4]=a,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let r=this.elements,i=t.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],this}extractBasis(t,r,i){return t.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let r=t.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,r){let i=t.elements,n=r.elements,a=this.elements,s=i[0],o=i[3],l=i[6],u=i[1],c=i[4],h=i[7],p=i[2],f=i[5],y=i[8],_=n[0],v=n[3],d=n[6],g=n[1],m=n[4],x=n[7],P=n[2],T=n[5],b=n[8];return a[0]=s*_+o*g+l*P,a[3]=s*v+o*m+l*T,a[6]=s*d+o*x+l*b,a[1]=u*_+c*g+h*P,a[4]=u*v+c*m+h*T,a[7]=u*d+c*x+h*b,a[2]=p*_+f*g+y*P,a[5]=p*v+f*m+y*T,a[8]=p*d+f*x+y*b,this}multiplyScalar(t){let r=this.elements;return r[0]*=t,r[3]*=t,r[6]*=t,r[1]*=t,r[4]*=t,r[7]*=t,r[2]*=t,r[5]*=t,r[8]*=t,this}determinant(){let t=this.elements,r=t[0],i=t[1],n=t[2],a=t[3],s=t[4],o=t[5],l=t[6],u=t[7],c=t[8];return r*s*c-r*o*u-i*a*c+i*o*l+n*a*u-n*s*l}invert(){let t=this.elements,r=t[0],i=t[1],n=t[2],a=t[3],s=t[4],o=t[5],l=t[6],u=t[7],c=t[8],h=c*s-o*u,p=o*l-c*a,f=u*a-s*l,y=r*h+i*p+n*f;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/y;return t[0]=h*_,t[1]=(n*u-c*i)*_,t[2]=(o*i-n*s)*_,t[3]=p*_,t[4]=(c*r-n*l)*_,t[5]=(n*a-o*r)*_,t[6]=f*_,t[7]=(i*l-u*r)*_,t[8]=(s*r-i*a)*_,this}transpose(){let t,r=this.elements;return t=r[1],r[1]=r[3],r[3]=t,t=r[2],r[2]=r[6],r[6]=t,t=r[5],r[5]=r[7],r[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let r=this.elements;return t[0]=r[0],t[1]=r[3],t[2]=r[6],t[3]=r[1],t[4]=r[4],t[5]=r[7],t[6]=r[2],t[7]=r[5],t[8]=r[8],this}setUvTransform(t,r,i,n,a,s,o){let l=Math.cos(a),u=Math.sin(a);return this.set(i*l,i*u,-i*(l*s+u*o)+s+t,-n*u,n*l,-n*(-u*s+l*o)+o+r,0,0,1),this}scale(t,r){return this.premultiply(pp.makeScale(t,r)),this}rotate(t){return this.premultiply(pp.makeRotation(-t)),this}translate(t,r){return this.premultiply(pp.makeTranslation(t,r)),this}makeTranslation(t,r){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,r,0,0,1),this}makeRotation(t){let r=Math.cos(t),i=Math.sin(t);return this.set(r,-i,0,i,r,0,0,0,1),this}makeScale(t,r){return this.set(t,0,0,0,r,0,0,0,1),this}equals(t){let r=this.elements,i=t.elements;for(let n=0;n<9;n++)if(r[n]!==i[n])return!1;return!0}fromArray(t,r=0){for(let i=0;i<9;i++)this.elements[i]=t[i+r];return this}toArray(t=[],r=0){let i=this.elements;return t[r]=i[0],t[r+1]=i[1],t[r+2]=i[2],t[r+3]=i[3],t[r+4]=i[4],t[r+5]=i[5],t[r+6]=i[6],t[r+7]=i[7],t[r+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},pp=new lt;function i1(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Dc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function _E(){let e=Dc("canvas");return e.style.display="block",e}var T_={};function tl(e){e in T_||(T_[e]=!0,console.warn(e))}function yE(e,t,r){return new Promise(function(i,n){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:n();break;case e.TIMEOUT_EXPIRED:setTimeout(a,r);break;default:i()}}setTimeout(a,r)})}function xE(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function SE(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var pt={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(e,t,r){return this.enabled===!1||t===r||!t||!r||(this.spaces[t].transfer===gt&&(e.r=tn(e.r),e.g=tn(e.g),e.b=tn(e.b)),this.spaces[t].primaries!==this.spaces[r].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===gt&&(e.r=Ns(e.r),e.g=Ns(e.g),e.b=Ns(e.b))),e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===kn?Ic:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,r){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function tn(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Ns(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var b_=[.64,.33,.3,.6,.15,.06],A_=[.2126,.7152,.0722],C_=[.3127,.329],R_=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),P_=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);pt.define({[zs]:{primaries:b_,whitePoint:C_,transfer:Ic,toXYZ:R_,fromXYZ:P_,luminanceCoefficients:A_,workingColorSpaceConfig:{unpackColorSpace:Gr},outputColorSpaceConfig:{drawingBufferColorSpace:Gr}},[Gr]:{primaries:b_,whitePoint:C_,transfer:gt,toXYZ:R_,fromXYZ:P_,luminanceCoefficients:A_,outputColorSpaceConfig:{drawingBufferColorSpace:Gr}}});var ts,ME=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ts===void 0&&(ts=Dc("canvas")),ts.width=e.width,ts.height=e.height;let r=ts.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Dc("canvas");t.width=e.width,t.height=e.height;let r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);let i=r.getImageData(0,0,e.width,e.height),n=i.data;for(let a=0;a<n.length;a++)n[a]=tn(n[a]/255)*255;return r.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(tn(t[r]/255)*255):t[r]=tn(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},EE=0,n1=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=en(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let n;if(Array.isArray(i)){n=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?n.push(fp(i[a].image)):n.push(fp(i[a]))}else n=fp(i);r.url=n}return t||(e.images[this.uuid]=r),r}};function fp(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?ME.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var wE=0,ti=class Ac extends Bs{constructor(t=Ac.DEFAULT_IMAGE,r=Ac.DEFAULT_MAPPING,i=ga,n=ga,a=Ci,s=va,o=mi,l=nn,u=Ac.DEFAULT_ANISOTROPY,c=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=en(),this.name="",this.source=new n1(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let r=t===void 0||typeof t=="string";if(!r&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),r||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pc:t.x=t.x-Math.floor(t.x);break;case ga:t.x=t.x<0?0:1;break;case af:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pc:t.y=t.y-Math.floor(t.y);break;case ga:t.y=t.y<0?0:1;break;case af:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=Gy;ti.DEFAULT_ANISOTROPY=1;var Tt=class a1{constructor(t=0,r=0,i=0,n=1){a1.prototype.isVector4=!0,this.x=t,this.y=r,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,r,i,n){return this.x=t,this.y=r,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this.w=t.w+r.w,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this.z+=t.z*r,this.w+=t.w*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this.z=t.z-r.z,this.w=t.w-r.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let r=this.x,i=this.y,n=this.z,a=this.w,s=t.elements;return this.x=s[0]*r+s[4]*i+s[8]*n+s[12]*a,this.y=s[1]*r+s[5]*i+s[9]*n+s[13]*a,this.z=s[2]*r+s[6]*i+s[10]*n+s[14]*a,this.w=s[3]*r+s[7]*i+s[11]*n+s[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let r=Math.sqrt(1-t.w*t.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/r,this.y=t.y/r,this.z=t.z/r),this}setAxisAngleFromRotationMatrix(t){let r,i,n,a,s=t.elements,o=s[0],l=s[4],u=s[8],c=s[1],h=s[5],p=s[9],f=s[2],y=s[6],_=s[10];if(Math.abs(l-c)<.01&&Math.abs(u-f)<.01&&Math.abs(p-y)<.01){if(Math.abs(l+c)<.1&&Math.abs(u+f)<.1&&Math.abs(p+y)<.1&&Math.abs(o+h+_-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;let d=(o+1)/2,g=(h+1)/2,m=(_+1)/2,x=(l+c)/4,P=(u+f)/4,T=(p+y)/4;return d>g&&d>m?d<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(d),n=x/i,a=P/i):g>m?g<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(g),i=x/n,a=T/n):m<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(m),i=P/a,n=T/a),this.set(i,n,a,r),this}let v=Math.sqrt((y-p)*(y-p)+(u-f)*(u-f)+(c-l)*(c-l));return Math.abs(v)<.001&&(v=1),this.x=(y-p)/v,this.y=(u-f)/v,this.z=(c-l)/v,this.w=Math.acos((o+h+_-1)/2),this}setFromMatrixPosition(t){let r=t.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this.w=r[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this.z=Math.max(t.z,Math.min(r.z,this.z)),this.w=Math.max(t.w,Math.min(r.w,this.w)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this.z=Math.max(t,Math.min(r,this.z)),this.w=Math.max(t,Math.min(r,this.w)),this}clampLength(t,r){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this.z+=(t.z-this.z)*r,this.w+=(t.w-this.w)*r,this}lerpVectors(t,r,i){return this.x=t.x+(r.x-t.x)*i,this.y=t.y+(r.y-t.y)*i,this.z=t.z+(r.z-t.z)*i,this.w=t.w+(r.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this.z=t[r+2],this.w=t[r+3],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t[r+2]=this.z,t[r+3]=this.w,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this.z=t.getZ(r),this.w=t.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},TE=class extends Bs{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);let i={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);let n=new ti(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);n.flipY=!1,n.generateMipmaps=r.generateMipmaps,n.internalFormat=r.internalFormat,this.textures=[];let a=r.count;for(let s=0;s<a;s++)this.textures[s]=n.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let i=0,n=this.textures.length;i<n;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,i=e.textures.length;r<i;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new n1(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},gi=class extends TE{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}},s1=class extends ti{constructor(e=null,t=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=Xr,this.minFilter=Xr,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},bE=class extends ti{constructor(e=null,t=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=Xr,this.minFilter=Xr,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Vs=class{constructor(e=0,t=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=i}static slerpFlat(e,t,r,i,n,a,s){let o=r[i+0],l=r[i+1],u=r[i+2],c=r[i+3],h=n[a+0],p=n[a+1],f=n[a+2],y=n[a+3];if(s===0){e[t+0]=o,e[t+1]=l,e[t+2]=u,e[t+3]=c;return}if(s===1){e[t+0]=h,e[t+1]=p,e[t+2]=f,e[t+3]=y;return}if(c!==y||o!==h||l!==p||u!==f){let _=1-s,v=o*h+l*p+u*f+c*y,d=v>=0?1:-1,g=1-v*v;if(g>Number.EPSILON){let x=Math.sqrt(g),P=Math.atan2(x,v*d);_=Math.sin(_*P)/x,s=Math.sin(s*P)/x}let m=s*d;if(o=o*_+h*m,l=l*_+p*m,u=u*_+f*m,c=c*_+y*m,_===1-s){let x=1/Math.sqrt(o*o+l*l+u*u+c*c);o*=x,l*=x,u*=x,c*=x}}e[t]=o,e[t+1]=l,e[t+2]=u,e[t+3]=c}static multiplyQuaternionsFlat(e,t,r,i,n,a){let s=r[i],o=r[i+1],l=r[i+2],u=r[i+3],c=n[a],h=n[a+1],p=n[a+2],f=n[a+3];return e[t]=s*f+u*c+o*p-l*h,e[t+1]=o*f+u*h+l*c-s*p,e[t+2]=l*f+u*p+s*h-o*c,e[t+3]=u*f-s*c-o*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let r=e._x,i=e._y,n=e._z,a=e._order,s=Math.cos,o=Math.sin,l=s(r/2),u=s(i/2),c=s(n/2),h=o(r/2),p=o(i/2),f=o(n/2);switch(a){case"XYZ":this._x=h*u*c+l*p*f,this._y=l*p*c-h*u*f,this._z=l*u*f+h*p*c,this._w=l*u*c-h*p*f;break;case"YXZ":this._x=h*u*c+l*p*f,this._y=l*p*c-h*u*f,this._z=l*u*f-h*p*c,this._w=l*u*c+h*p*f;break;case"ZXY":this._x=h*u*c-l*p*f,this._y=l*p*c+h*u*f,this._z=l*u*f+h*p*c,this._w=l*u*c-h*p*f;break;case"ZYX":this._x=h*u*c-l*p*f,this._y=l*p*c+h*u*f,this._z=l*u*f-h*p*c,this._w=l*u*c+h*p*f;break;case"YZX":this._x=h*u*c+l*p*f,this._y=l*p*c+h*u*f,this._z=l*u*f-h*p*c,this._w=l*u*c-h*p*f;break;case"XZY":this._x=h*u*c-l*p*f,this._y=l*p*c-h*u*f,this._z=l*u*f+h*p*c,this._w=l*u*c+h*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let r=t/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,r=t[0],i=t[4],n=t[8],a=t[1],s=t[5],o=t[9],l=t[2],u=t[6],c=t[10],h=r+s+c;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-o)*p,this._y=(n-l)*p,this._z=(a-i)*p}else if(r>s&&r>c){let p=2*Math.sqrt(1+r-s-c);this._w=(u-o)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(n+l)/p}else if(s>c){let p=2*Math.sqrt(1+s-r-c);this._w=(n-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(o+u)/p}else{let p=2*Math.sqrt(1+c-r-s);this._w=(a-i)/p,this._x=(n+l)/p,this._y=(o+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(er(this.dot(e),-1,1)))}rotateTowards(e,t){let r=this.angleTo(e);if(r===0)return this;let i=Math.min(1,t/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let r=e._x,i=e._y,n=e._z,a=e._w,s=t._x,o=t._y,l=t._z,u=t._w;return this._x=r*u+a*s+i*l-n*o,this._y=i*u+a*o+n*s-r*l,this._z=n*u+a*l+r*o-i*s,this._w=a*u-r*s-i*o-n*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let r=this._x,i=this._y,n=this._z,a=this._w,s=a*e._w+r*e._x+i*e._y+n*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=r,this._y=i,this._z=n,this;let o=1-s*s;if(o<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*r+t*this._x,this._y=p*i+t*this._y,this._z=p*n+t*this._z,this.normalize(),this}let l=Math.sqrt(o),u=Math.atan2(l,s),c=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=a*c+this._w*h,this._x=r*c+this._x*h,this._y=i*c+this._y*h,this._z=n*c+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),n=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class o1{constructor(t=0,r=0,i=0){o1.prototype.isVector3=!0,this.x=t,this.y=r,this.z=i}set(t,r,i){return i===void 0&&(i=this.z),this.x=t,this.y=r,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this.z+=t.z*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this.z=t.z-r.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,r){return this.x=t.x*r.x,this.y=t.y*r.y,this.z=t.z*r.z,this}applyEuler(t){return this.applyQuaternion(N_.setFromEuler(t))}applyAxisAngle(t,r){return this.applyQuaternion(N_.setFromAxisAngle(t,r))}applyMatrix3(t){let r=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*r+a[3]*i+a[6]*n,this.y=a[1]*r+a[4]*i+a[7]*n,this.z=a[2]*r+a[5]*i+a[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let r=this.x,i=this.y,n=this.z,a=t.elements,s=1/(a[3]*r+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*r+a[4]*i+a[8]*n+a[12])*s,this.y=(a[1]*r+a[5]*i+a[9]*n+a[13])*s,this.z=(a[2]*r+a[6]*i+a[10]*n+a[14])*s,this}applyQuaternion(t){let r=this.x,i=this.y,n=this.z,a=t.x,s=t.y,o=t.z,l=t.w,u=2*(s*n-o*i),c=2*(o*r-a*n),h=2*(a*i-s*r);return this.x=r+l*u+s*h-o*c,this.y=i+l*c+o*u-a*h,this.z=n+l*h+a*c-s*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let r=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*r+a[4]*i+a[8]*n,this.y=a[1]*r+a[5]*i+a[9]*n,this.z=a[2]*r+a[6]*i+a[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this.z=Math.max(t.z,Math.min(r.z,this.z)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this.z=Math.max(t,Math.min(r,this.z)),this}clampLength(t,r){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this.z+=(t.z-this.z)*r,this}lerpVectors(t,r,i){return this.x=t.x+(r.x-t.x)*i,this.y=t.y+(r.y-t.y)*i,this.z=t.z+(r.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,r){let i=t.x,n=t.y,a=t.z,s=r.x,o=r.y,l=r.z;return this.x=n*l-a*o,this.y=a*s-i*l,this.z=i*o-n*s,this}projectOnVector(t){let r=t.lengthSq();if(r===0)return this.set(0,0,0);let i=t.dot(this)/r;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return mp.copy(this).projectOnVector(t),this.sub(mp)}reflect(t){return this.sub(mp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let r=Math.sqrt(this.lengthSq()*t.lengthSq());if(r===0)return Math.PI/2;let i=this.dot(t)/r;return Math.acos(er(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let r=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return r*r+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,r,i){let n=Math.sin(r)*t;return this.x=n*Math.sin(i),this.y=Math.cos(r)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,r,i){return this.x=t*Math.sin(r),this.y=i,this.z=t*Math.cos(r),this}setFromMatrixPosition(t){let r=t.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(t){let r=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=r,this.y=i,this.z=n,this}setFromMatrixColumn(t,r){return this.fromArray(t.elements,r*4)}setFromMatrix3Column(t,r){return this.fromArray(t.elements,r*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this.z=t[r+2],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t[r+2]=this.z,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this.z=t.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,r=Math.random()*2-1,i=Math.sqrt(1-r*r);return this.x=i*Math.cos(t),this.y=r,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mp=new L,N_=new Vs,xa=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let r=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let r=e.geometry;if(r!==void 0){let n=r.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let a=0,s=n.count;a<s;a++)e.isMesh===!0?e.getVertexPosition(a,hi):hi.fromBufferAttribute(n,a),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Gu.copy(r.boundingBox)),Gu.applyMatrix4(e.matrixWorld),this.union(Gu)}let i=e.children;for(let n=0,a=i.length;n<a;n++)this.expandByObject(i[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wo),Wu.subVectors(this.max,Wo),rs.subVectors(e.a,Wo),is.subVectors(e.b,Wo),ns.subVectors(e.c,Wo),Rn.subVectors(is,rs),Pn.subVectors(ns,is),aa.subVectors(rs,ns);let t=[0,-Rn.z,Rn.y,0,-Pn.z,Pn.y,0,-aa.z,aa.y,Rn.z,0,-Rn.x,Pn.z,0,-Pn.x,aa.z,0,-aa.x,-Rn.y,Rn.x,0,-Pn.y,Pn.x,0,-aa.y,aa.x,0];return!gp(t,rs,is,ns,Wu)||(t=[1,0,0,0,1,0,0,0,1],!gp(t,rs,is,ns,Wu))?!1:(Xu.crossVectors(Rn,Pn),t=[Xu.x,Xu.y,Xu.z],gp(t,rs,is,ns,Wu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Gi=[new L,new L,new L,new L,new L,new L,new L,new L],hi=new L,Gu=new xa,rs=new L,is=new L,ns=new L,Rn=new L,Pn=new L,aa=new L,Wo=new L,Wu=new L,Xu=new L,sa=new L;function gp(e,t,r,i,n){for(let a=0,s=e.length-3;a<=s;a+=3){sa.fromArray(e,a);let o=n.x*Math.abs(sa.x)+n.y*Math.abs(sa.y)+n.z*Math.abs(sa.z),l=t.dot(sa),u=r.dot(sa),c=i.dot(sa);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}var AE=new xa,Xo=new L,vp=new L,Hs=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let r=this.center;t!==void 0?r.copy(t):AE.setFromPoints(e).getCenter(r);let i=0;for(let n=0,a=e.length;n<a;n++)i=Math.max(i,r.distanceToSquared(e[n]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);let t=Xo.lengthSq();if(t>this.radius*this.radius){let r=Math.sqrt(t),i=(r-this.radius)*.5;this.center.addScaledVector(Xo,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(vp)),this.expandByPoint(Xo.copy(e.center).sub(vp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Wi=new L,_p=new L,ju=new L,Nn=new L,yp=new L,$u=new L,xp=new L,l1=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,t),Wi.distanceToSquared(e))}distanceSqToSegment(e,t,r,i){_p.copy(e).add(t).multiplyScalar(.5),ju.copy(t).sub(e).normalize(),Nn.copy(this.origin).sub(_p);let n=e.distanceTo(t)*.5,a=-this.direction.dot(ju),s=Nn.dot(this.direction),o=-Nn.dot(ju),l=Nn.lengthSq(),u=Math.abs(1-a*a),c,h,p,f;if(u>0)if(c=a*o-s,h=a*s-o,f=n*u,c>=0)if(h>=-f)if(h<=f){let y=1/u;c*=y,h*=y,p=c*(c+a*h+2*s)+h*(a*c+h+2*o)+l}else h=n,c=Math.max(0,-(a*h+s)),p=-c*c+h*(h+2*o)+l;else h=-n,c=Math.max(0,-(a*h+s)),p=-c*c+h*(h+2*o)+l;else h<=-f?(c=Math.max(0,-(-a*n+s)),h=c>0?-n:Math.min(Math.max(-n,-o),n),p=-c*c+h*(h+2*o)+l):h<=f?(c=0,h=Math.min(Math.max(-n,-o),n),p=h*(h+2*o)+l):(c=Math.max(0,-(a*n+s)),h=c>0?n:Math.min(Math.max(-n,-o),n),p=-c*c+h*(h+2*o)+l);else h=a>0?-n:n,c=Math.max(0,-(a*h+s)),p=-c*c+h*(h+2*o)+l;return r&&r.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(_p).addScaledVector(ju,h),p}intersectSphere(e,t){Wi.subVectors(e.center,this.origin);let r=Wi.dot(this.direction),i=Wi.dot(Wi)-r*r,n=e.radius*e.radius;if(i>n)return null;let a=Math.sqrt(n-i),s=r-a,o=r+a;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){let r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,i,n,a,s,o,l=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,h=this.origin;return l>=0?(r=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(r=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),u>=0?(n=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(n=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),r>a||n>i||((n>r||isNaN(r))&&(r=n),(a<i||isNaN(i))&&(i=a),c>=0?(s=(e.min.z-h.z)*c,o=(e.max.z-h.z)*c):(s=(e.max.z-h.z)*c,o=(e.min.z-h.z)*c),r>o||s>i)||((s>r||r!==r)&&(r=s),(o<i||i!==i)&&(i=o),i<0)?null:this.at(r>=0?r:i,t)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,t,r,i,n){yp.subVectors(t,e),$u.subVectors(r,e),xp.crossVectors(yp,$u);let a=this.direction.dot(xp),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Nn.subVectors(this.origin,e);let o=s*this.direction.dot($u.crossVectors(Nn,$u));if(o<0)return null;let l=s*this.direction.dot(yp.cross(Nn));if(l<0||o+l>a)return null;let u=-s*Nn.dot(xp);return u<0?null:this.at(u/a,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bt=class If{constructor(t,r,i,n,a,s,o,l,u,c,h,p,f,y,_,v){If.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,r,i,n,a,s,o,l,u,c,h,p,f,y,_,v)}set(t,r,i,n,a,s,o,l,u,c,h,p,f,y,_,v){let d=this.elements;return d[0]=t,d[4]=r,d[8]=i,d[12]=n,d[1]=a,d[5]=s,d[9]=o,d[13]=l,d[2]=u,d[6]=c,d[10]=h,d[14]=p,d[3]=f,d[7]=y,d[11]=_,d[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new If().fromArray(this.elements)}copy(t){let r=this.elements,i=t.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],r[9]=i[9],r[10]=i[10],r[11]=i[11],r[12]=i[12],r[13]=i[13],r[14]=i[14],r[15]=i[15],this}copyPosition(t){let r=this.elements,i=t.elements;return r[12]=i[12],r[13]=i[13],r[14]=i[14],this}setFromMatrix3(t){let r=t.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(t,r,i){return t.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,r,i){return this.set(t.x,r.x,i.x,0,t.y,r.y,i.y,0,t.z,r.z,i.z,0,0,0,0,1),this}extractRotation(t){let r=this.elements,i=t.elements,n=1/as.setFromMatrixColumn(t,0).length(),a=1/as.setFromMatrixColumn(t,1).length(),s=1/as.setFromMatrixColumn(t,2).length();return r[0]=i[0]*n,r[1]=i[1]*n,r[2]=i[2]*n,r[3]=0,r[4]=i[4]*a,r[5]=i[5]*a,r[6]=i[6]*a,r[7]=0,r[8]=i[8]*s,r[9]=i[9]*s,r[10]=i[10]*s,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(t){let r=this.elements,i=t.x,n=t.y,a=t.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(n),u=Math.sin(n),c=Math.cos(a),h=Math.sin(a);if(t.order==="XYZ"){let p=s*c,f=s*h,y=o*c,_=o*h;r[0]=l*c,r[4]=-l*h,r[8]=u,r[1]=f+y*u,r[5]=p-_*u,r[9]=-o*l,r[2]=_-p*u,r[6]=y+f*u,r[10]=s*l}else if(t.order==="YXZ"){let p=l*c,f=l*h,y=u*c,_=u*h;r[0]=p+_*o,r[4]=y*o-f,r[8]=s*u,r[1]=s*h,r[5]=s*c,r[9]=-o,r[2]=f*o-y,r[6]=_+p*o,r[10]=s*l}else if(t.order==="ZXY"){let p=l*c,f=l*h,y=u*c,_=u*h;r[0]=p-_*o,r[4]=-s*h,r[8]=y+f*o,r[1]=f+y*o,r[5]=s*c,r[9]=_-p*o,r[2]=-s*u,r[6]=o,r[10]=s*l}else if(t.order==="ZYX"){let p=s*c,f=s*h,y=o*c,_=o*h;r[0]=l*c,r[4]=y*u-f,r[8]=p*u+_,r[1]=l*h,r[5]=_*u+p,r[9]=f*u-y,r[2]=-u,r[6]=o*l,r[10]=s*l}else if(t.order==="YZX"){let p=s*l,f=s*u,y=o*l,_=o*u;r[0]=l*c,r[4]=_-p*h,r[8]=y*h+f,r[1]=h,r[5]=s*c,r[9]=-o*c,r[2]=-u*c,r[6]=f*h+y,r[10]=p-_*h}else if(t.order==="XZY"){let p=s*l,f=s*u,y=o*l,_=o*u;r[0]=l*c,r[4]=-h,r[8]=u*c,r[1]=p*h+_,r[5]=s*c,r[9]=f*h-y,r[2]=y*h-f,r[6]=o*c,r[10]=_*h+p}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(t){return this.compose(CE,t,RE)}lookAt(t,r,i){let n=this.elements;return Vr.subVectors(t,r),Vr.lengthSq()===0&&(Vr.z=1),Vr.normalize(),Ln.crossVectors(i,Vr),Ln.lengthSq()===0&&(Math.abs(i.z)===1?Vr.x+=1e-4:Vr.z+=1e-4,Vr.normalize(),Ln.crossVectors(i,Vr)),Ln.normalize(),qu.crossVectors(Vr,Ln),n[0]=Ln.x,n[4]=qu.x,n[8]=Vr.x,n[1]=Ln.y,n[5]=qu.y,n[9]=Vr.y,n[2]=Ln.z,n[6]=qu.z,n[10]=Vr.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,r){let i=t.elements,n=r.elements,a=this.elements,s=i[0],o=i[4],l=i[8],u=i[12],c=i[1],h=i[5],p=i[9],f=i[13],y=i[2],_=i[6],v=i[10],d=i[14],g=i[3],m=i[7],x=i[11],P=i[15],T=n[0],b=n[4],R=n[8],w=n[12],S=n[1],N=n[5],k=n[9],V=n[13],W=n[2],j=n[6],X=n[10],ae=n[14],$=n[3],de=n[7],Me=n[11],Ze=n[15];return a[0]=s*T+o*S+l*W+u*$,a[4]=s*b+o*N+l*j+u*de,a[8]=s*R+o*k+l*X+u*Me,a[12]=s*w+o*V+l*ae+u*Ze,a[1]=c*T+h*S+p*W+f*$,a[5]=c*b+h*N+p*j+f*de,a[9]=c*R+h*k+p*X+f*Me,a[13]=c*w+h*V+p*ae+f*Ze,a[2]=y*T+_*S+v*W+d*$,a[6]=y*b+_*N+v*j+d*de,a[10]=y*R+_*k+v*X+d*Me,a[14]=y*w+_*V+v*ae+d*Ze,a[3]=g*T+m*S+x*W+P*$,a[7]=g*b+m*N+x*j+P*de,a[11]=g*R+m*k+x*X+P*Me,a[15]=g*w+m*V+x*ae+P*Ze,this}multiplyScalar(t){let r=this.elements;return r[0]*=t,r[4]*=t,r[8]*=t,r[12]*=t,r[1]*=t,r[5]*=t,r[9]*=t,r[13]*=t,r[2]*=t,r[6]*=t,r[10]*=t,r[14]*=t,r[3]*=t,r[7]*=t,r[11]*=t,r[15]*=t,this}determinant(){let t=this.elements,r=t[0],i=t[4],n=t[8],a=t[12],s=t[1],o=t[5],l=t[9],u=t[13],c=t[2],h=t[6],p=t[10],f=t[14],y=t[3],_=t[7],v=t[11],d=t[15];return y*(+a*l*h-n*u*h-a*o*p+i*u*p+n*o*f-i*l*f)+_*(+r*l*f-r*u*p+a*s*p-n*s*f+n*u*c-a*l*c)+v*(+r*u*h-r*o*f-a*s*h+i*s*f+a*o*c-i*u*c)+d*(-n*o*c-r*l*h+r*o*p+n*s*h-i*s*p+i*l*c)}transpose(){let t=this.elements,r;return r=t[1],t[1]=t[4],t[4]=r,r=t[2],t[2]=t[8],t[8]=r,r=t[6],t[6]=t[9],t[9]=r,r=t[3],t[3]=t[12],t[12]=r,r=t[7],t[7]=t[13],t[13]=r,r=t[11],t[11]=t[14],t[14]=r,this}setPosition(t,r,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=r,n[14]=i),this}invert(){let t=this.elements,r=t[0],i=t[1],n=t[2],a=t[3],s=t[4],o=t[5],l=t[6],u=t[7],c=t[8],h=t[9],p=t[10],f=t[11],y=t[12],_=t[13],v=t[14],d=t[15],g=h*v*u-_*p*u+_*l*f-o*v*f-h*l*d+o*p*d,m=y*p*u-c*v*u-y*l*f+s*v*f+c*l*d-s*p*d,x=c*_*u-y*h*u+y*o*f-s*_*f-c*o*d+s*h*d,P=y*h*l-c*_*l-y*o*p+s*_*p+c*o*v-s*h*v,T=r*g+i*m+n*x+a*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/T;return t[0]=g*b,t[1]=(_*p*a-h*v*a-_*n*f+i*v*f+h*n*d-i*p*d)*b,t[2]=(o*v*a-_*l*a+_*n*u-i*v*u-o*n*d+i*l*d)*b,t[3]=(h*l*a-o*p*a-h*n*u+i*p*u+o*n*f-i*l*f)*b,t[4]=m*b,t[5]=(c*v*a-y*p*a+y*n*f-r*v*f-c*n*d+r*p*d)*b,t[6]=(y*l*a-s*v*a-y*n*u+r*v*u+s*n*d-r*l*d)*b,t[7]=(s*p*a-c*l*a+c*n*u-r*p*u-s*n*f+r*l*f)*b,t[8]=x*b,t[9]=(y*h*a-c*_*a-y*i*f+r*_*f+c*i*d-r*h*d)*b,t[10]=(s*_*a-y*o*a+y*i*u-r*_*u-s*i*d+r*o*d)*b,t[11]=(c*o*a-s*h*a-c*i*u+r*h*u+s*i*f-r*o*f)*b,t[12]=P*b,t[13]=(c*_*n-y*h*n+y*i*p-r*_*p-c*i*v+r*h*v)*b,t[14]=(y*o*n-s*_*n-y*i*l+r*_*l+s*i*v-r*o*v)*b,t[15]=(s*h*n-c*o*n+c*i*l-r*h*l-s*i*p+r*o*p)*b,this}scale(t){let r=this.elements,i=t.x,n=t.y,a=t.z;return r[0]*=i,r[4]*=n,r[8]*=a,r[1]*=i,r[5]*=n,r[9]*=a,r[2]*=i,r[6]*=n,r[10]*=a,r[3]*=i,r[7]*=n,r[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,r=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(r,i,n))}makeTranslation(t,r,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,r,0,0,1,i,0,0,0,1),this}makeRotationX(t){let r=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,r,-i,0,0,i,r,0,0,0,0,1),this}makeRotationY(t){let r=Math.cos(t),i=Math.sin(t);return this.set(r,0,i,0,0,1,0,0,-i,0,r,0,0,0,0,1),this}makeRotationZ(t){let r=Math.cos(t),i=Math.sin(t);return this.set(r,-i,0,0,i,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,r){let i=Math.cos(r),n=Math.sin(r),a=1-i,s=t.x,o=t.y,l=t.z,u=a*s,c=a*o;return this.set(u*s+i,u*o-n*l,u*l+n*o,0,u*o+n*l,c*o+i,c*l-n*s,0,u*l-n*o,c*l+n*s,a*l*l+i,0,0,0,0,1),this}makeScale(t,r,i){return this.set(t,0,0,0,0,r,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,r,i,n,a,s){return this.set(1,i,a,0,t,1,s,0,r,n,1,0,0,0,0,1),this}compose(t,r,i){let n=this.elements,a=r._x,s=r._y,o=r._z,l=r._w,u=a+a,c=s+s,h=o+o,p=a*u,f=a*c,y=a*h,_=s*c,v=s*h,d=o*h,g=l*u,m=l*c,x=l*h,P=i.x,T=i.y,b=i.z;return n[0]=(1-(_+d))*P,n[1]=(f+x)*P,n[2]=(y-m)*P,n[3]=0,n[4]=(f-x)*T,n[5]=(1-(p+d))*T,n[6]=(v+g)*T,n[7]=0,n[8]=(y+m)*b,n[9]=(v-g)*b,n[10]=(1-(p+_))*b,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,r,i){let n=this.elements,a=as.set(n[0],n[1],n[2]).length(),s=as.set(n[4],n[5],n[6]).length(),o=as.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),t.x=n[12],t.y=n[13],t.z=n[14],di.copy(this);let l=1/a,u=1/s,c=1/o;return di.elements[0]*=l,di.elements[1]*=l,di.elements[2]*=l,di.elements[4]*=u,di.elements[5]*=u,di.elements[6]*=u,di.elements[8]*=c,di.elements[9]*=c,di.elements[10]*=c,r.setFromRotationMatrix(di),i.x=a,i.y=s,i.z=o,this}makePerspective(t,r,i,n,a,s,o=Ji){let l=this.elements,u=2*a/(r-t),c=2*a/(i-n),h=(r+t)/(r-t),p=(i+n)/(i-n),f,y;if(o===Ji)f=-(s+a)/(s-a),y=-2*s*a/(s-a);else if(o===Lc)f=-s/(s-a),y=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,r,i,n,a,s,o=Ji){let l=this.elements,u=1/(r-t),c=1/(i-n),h=1/(s-a),p=(r+t)*u,f=(i+n)*c,y,_;if(o===Ji)y=(s+a)*h,_=-2*h;else if(o===Lc)y=a*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let r=this.elements,i=t.elements;for(let n=0;n<16;n++)if(r[n]!==i[n])return!1;return!0}fromArray(t,r=0){for(let i=0;i<16;i++)this.elements[i]=t[i+r];return this}toArray(t=[],r=0){let i=this.elements;return t[r]=i[0],t[r+1]=i[1],t[r+2]=i[2],t[r+3]=i[3],t[r+4]=i[4],t[r+5]=i[5],t[r+6]=i[6],t[r+7]=i[7],t[r+8]=i[8],t[r+9]=i[9],t[r+10]=i[10],t[r+11]=i[11],t[r+12]=i[12],t[r+13]=i[13],t[r+14]=i[14],t[r+15]=i[15],t}},as=new L,di=new bt,CE=new L(0,0,0),RE=new L(1,1,1),Ln=new L,qu=new L,Vr=new L,L_=new bt,D_=new Vs,Bn=class u1{constructor(t=0,r=0,i=0,n=u1.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=r,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,r,i,n=this._order){return this._x=t,this._y=r,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,r=this._order,i=!0){let n=t.elements,a=n[0],s=n[4],o=n[8],l=n[1],u=n[5],c=n[9],h=n[2],p=n[6],f=n[10];switch(r){case"XYZ":this._y=Math.asin(er(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-er(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(er(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-er(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(er(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-er(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,r,i){return L_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(L_,r,i)}setFromVector3(t,r=this._order){return this.set(t.x,t.y,t.z,r)}reorder(t){return D_.setFromEuler(this),this.setFromQuaternion(D_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],r=0){return t[r]=this._x,t[r+1]=this._y,t[r+2]=this._z,t[r+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.DEFAULT_ORDER="XYZ";var c1=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},PE=0,U_=new L,ss=new Vs,Xi=new bt,Yu=new L,jo=new L,NE=new L,LE=new Vs,I_=new L(1,0,0),O_=new L(0,1,0),k_=new L(0,0,1),F_={type:"added"},DE={type:"removed"},os={type:"childadded",child:null},Sp={type:"childremoved",child:null},tr=class Cc extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=en(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cc.DEFAULT_UP.clone();let t=new L,r=new Bn,i=new Vs,n=new L(1,1,1);function a(){i.setFromEuler(r,!1)}function s(){r.setFromQuaternion(i,void 0,!1)}r._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new bt},normalMatrix:{value:new lt}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Cc.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cc.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new c1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,r){this.quaternion.setFromAxisAngle(t,r)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,r){return ss.setFromAxisAngle(t,r),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,r){return ss.setFromAxisAngle(t,r),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(I_,t)}rotateY(t){return this.rotateOnAxis(O_,t)}rotateZ(t){return this.rotateOnAxis(k_,t)}translateOnAxis(t,r){return U_.copy(t).applyQuaternion(this.quaternion),this.position.add(U_.multiplyScalar(r)),this}translateX(t){return this.translateOnAxis(I_,t)}translateY(t){return this.translateOnAxis(O_,t)}translateZ(t){return this.translateOnAxis(k_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(t,r,i){t.isVector3?Yu.copy(t):Yu.set(t,r,i);let n=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(jo,Yu,this.up):Xi.lookAt(Yu,jo,this.up),this.quaternion.setFromRotationMatrix(Xi),n&&(Xi.extractRotation(n.matrixWorld),ss.setFromRotationMatrix(Xi),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(F_),os.child=t,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let r=this.children.indexOf(t);return r!==-1&&(t.parent=null,this.children.splice(r,1),t.dispatchEvent(DE),Sp.child=t,this.dispatchEvent(Sp),Sp.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(F_),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,r){if(this[t]===r)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,r);if(a!==void 0)return a}}getObjectsByProperty(t,r,i=[]){this[t]===r&&i.push(this);let n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].getObjectsByProperty(t,r,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,t,NE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,LE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let r=this.matrixWorld.elements;return t.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(t){t(this);let r=this.children;for(let i=0,n=r.length;i<n;i++)r[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let r=this.children;for(let i=0,n=r.length;i<n;i++)r[i].traverseVisible(t)}traverseAncestors(t){let r=this.parent;r!==null&&(t(r),r.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let r=this.children;for(let i=0,n=r.length;i<n;i++)r[i].updateMatrixWorld(t)}updateWorldMatrix(t,r){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),r===!0){let n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateWorldMatrix(!1,!0)}}toJSON(t){let r=t===void 0||typeof t=="string",i={};r&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){let h=l[u];a(t.shapes,h)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(a(t.materials,this.material[l]));n.material=o}else n.material=a(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(a(t.animations,l))}}if(r){let o=s(t.geometries),l=s(t.materials),u=s(t.textures),c=s(t.images),h=s(t.shapes),p=s(t.skeletons),f=s(t.animations),y=s(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),f.length>0&&(i.animations=f),y.length>0&&(i.nodes=y)}return i.object=n,i;function s(o){let l=[];for(let u in o){let c=o[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,r=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),r===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};tr.DEFAULT_UP=new L(0,1,0);tr.DEFAULT_MATRIX_AUTO_UPDATE=!0;tr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pi=new L,ji=new L,Mp=new L,$i=new L,ls=new L,us=new L,z_=new L,Ep=new L,wp=new L,Tp=new L,bp=new Tt,Ap=new Tt,Cp=new Tt,Ms=class Es{constructor(t=new L,r=new L,i=new L){this.a=t,this.b=r,this.c=i}static getNormal(t,r,i,n){n.subVectors(i,r),pi.subVectors(t,r),n.cross(pi);let a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(t,r,i,n,a){pi.subVectors(n,r),ji.subVectors(i,r),Mp.subVectors(t,r);let s=pi.dot(pi),o=pi.dot(ji),l=pi.dot(Mp),u=ji.dot(ji),c=ji.dot(Mp),h=s*u-o*o;if(h===0)return a.set(0,0,0),null;let p=1/h,f=(u*l-o*c)*p,y=(s*c-o*l)*p;return a.set(1-f-y,y,f)}static containsPoint(t,r,i,n){return this.getBarycoord(t,r,i,n,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(t,r,i,n,a,s,o,l){return this.getBarycoord(t,r,i,n,$i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,$i.x),l.addScaledVector(s,$i.y),l.addScaledVector(o,$i.z),l)}static getInterpolatedAttribute(t,r,i,n,a,s){return bp.setScalar(0),Ap.setScalar(0),Cp.setScalar(0),bp.fromBufferAttribute(t,r),Ap.fromBufferAttribute(t,i),Cp.fromBufferAttribute(t,n),s.setScalar(0),s.addScaledVector(bp,a.x),s.addScaledVector(Ap,a.y),s.addScaledVector(Cp,a.z),s}static isFrontFacing(t,r,i,n){return pi.subVectors(i,r),ji.subVectors(t,r),pi.cross(ji).dot(n)<0}set(t,r,i){return this.a.copy(t),this.b.copy(r),this.c.copy(i),this}setFromPointsAndIndices(t,r,i,n){return this.a.copy(t[r]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,r,i,n){return this.a.fromBufferAttribute(t,r),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),pi.cross(ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Es.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,r){return Es.getBarycoord(t,this.a,this.b,this.c,r)}getInterpolation(t,r,i,n,a){return Es.getInterpolation(t,this.a,this.b,this.c,r,i,n,a)}containsPoint(t){return Es.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Es.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,r){let i=this.a,n=this.b,a=this.c,s,o;ls.subVectors(n,i),us.subVectors(a,i),Ep.subVectors(t,i);let l=ls.dot(Ep),u=us.dot(Ep);if(l<=0&&u<=0)return r.copy(i);wp.subVectors(t,n);let c=ls.dot(wp),h=us.dot(wp);if(c>=0&&h<=c)return r.copy(n);let p=l*h-c*u;if(p<=0&&l>=0&&c<=0)return s=l/(l-c),r.copy(i).addScaledVector(ls,s);Tp.subVectors(t,a);let f=ls.dot(Tp),y=us.dot(Tp);if(y>=0&&f<=y)return r.copy(a);let _=f*u-l*y;if(_<=0&&u>=0&&y<=0)return o=u/(u-y),r.copy(i).addScaledVector(us,o);let v=c*y-f*h;if(v<=0&&h-c>=0&&f-y>=0)return z_.subVectors(a,n),o=(h-c)/(h-c+(f-y)),r.copy(n).addScaledVector(z_,o);let d=1/(v+_+p);return s=_*d,o=p*d,r.copy(i).addScaledVector(ls,s).addScaledVector(us,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},h1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Ku={h:0,s:0,l:0};function Rp(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*6*r:r<1/2?t:r<2/3?e+(t-e)*6*(2/3-r):e}var $e=class{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=r,pt.toWorkingColorSpace(this,i),this}setHSL(e,t,r,i=pt.workingColorSpace){if(e=vE(e,1),t=er(t,0,1),r=er(r,0,1),t===0)this.r=this.g=this.b=r;else{let n=r<=.5?r*(1+t):r+t-r*t,a=2*r-n;this.r=Rp(a,n,e+1/3),this.g=Rp(a,n,e),this.b=Rp(a,n,e-1/3)}return pt.toWorkingColorSpace(this,i),this}setStyle(e,t=Gr){function r(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let n,a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=i[1],a=n.length;if(a===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(n,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gr){let r=h1[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tn(e.r),this.g=tn(e.g),this.b=tn(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gr){return pt.fromWorkingColorSpace(fr.copy(this),e),Math.round(er(fr.r*255,0,255))*65536+Math.round(er(fr.g*255,0,255))*256+Math.round(er(fr.b*255,0,255))}getHexString(e=Gr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(fr.copy(this),t);let r=fr.r,i=fr.g,n=fr.b,a=Math.max(r,i,n),s=Math.min(r,i,n),o,l,u=(s+a)/2;if(s===a)o=0,l=0;else{let c=a-s;switch(l=u<=.5?c/(a+s):c/(2-a-s),a){case r:o=(i-n)/c+(i<n?6:0);break;case i:o=(n-r)/c+2;break;case n:o=(r-i)/c+4;break}o/=6}return e.h=o,e.s=l,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(fr.copy(this),t),e.r=fr.r,e.g=fr.g,e.b=fr.b,e}getStyle(e=Gr){pt.fromWorkingColorSpace(fr.copy(this),e);let t=fr.r,r=fr.g,i=fr.b;return e!==Gr?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,t,r){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(Ku);let r=dp(Dn.h,Ku.h,t),i=dp(Dn.s,Ku.s,t),n=dp(Dn.l,Ku.l,t);return this.setHSL(r,i,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,r=this.g,i=this.b,n=e.elements;return this.r=n[0]*t+n[3]*r+n[6]*i,this.g=n[1]*t+n[4]*r+n[7]*i,this.b=n[2]*t+n[5]*r+n[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fr=new $e;$e.NAMES=h1;var UE=0,Sa=class extends Bs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=en(),this.name="",this.blending=Cs,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$p,this.blendDst=qp,this.blendEquation=fa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=E_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[t]=r}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(r.blending=this.blending),this.side!==zn&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==$p&&(r.blendSrc=this.blendSrc),this.blendDst!==qp&&(r.blendDst=this.blendDst),this.blendEquation!==fa&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==E_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(r.stencilFail=this.stencilFail),this.stencilZFail!==es&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(n){let a=[];for(let s in n){let o=n[s];delete o.metadata,a.push(o)}return a}if(t){let n=i(e.textures),a=i(e.images);n.length>0&&(r.textures=n),a.length>0&&(r.images=a)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,r=null;if(t!==null){let i=t.length;r=new Array(i);for(let n=0;n!==i;++n)r[n]=t[n].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ki=class extends Sa{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=ky,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Xt=new L,Ju=new ne,vr=class{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Df,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let i=0,n=this.itemSize;i<n;i++)this.array[e+i]=t.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ju.fromBufferAttribute(this,t),Ju.applyMatrix3(e),this.setXY(t,Ju.x,Ju.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ai(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=yt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),r=yt(r,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,t,r,i,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),r=yt(r,this.array),i=yt(i,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Df&&(e.usage=this.usage),e}},d1=class extends vr{constructor(e,t,r){super(new Uint16Array(e),t,r)}},p1=class extends vr{constructor(e,t,r){super(new Uint32Array(e),t,r)}},vt=class extends vr{constructor(e,t,r){super(new Float32Array(e),t,r)}},IE=0,ei=new bt,Pp=new tr,cs=new L,Hr=new xa,$o=new xa,Qt=new L,rr=class f1 extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=en(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(i1(t)?p1:d1)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,r){return this.attributes[t]=r,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,r,i=0){this.groups.push({start:t,count:r,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,r){this.drawRange.start=t,this.drawRange.count=r}applyMatrix4(t){let r=this.attributes.position;r!==void 0&&(r.applyMatrix4(t),r.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new lt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,r,i){return ei.makeTranslation(t,r,i),this.applyMatrix4(ei),this}scale(t,r,i){return ei.makeScale(t,r,i),this.applyMatrix4(ei),this}lookAt(t){return Pp.lookAt(t),Pp.updateMatrix(),this.applyMatrix4(Pp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){let r=this.getAttribute("position");if(r===void 0){let i=[];for(let n=0,a=t.length;n<a;n++){let s=t[n];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new vt(i,3))}else{for(let i=0,n=r.count;i<n;i++){let a=t[i];r.setXYZ(i,a.x,a.y,a.z||0)}t.length>r.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),r.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xa);let t=this.attributes.position,r=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),r)for(let i=0,n=r.length;i<n;i++){let a=r[i];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Hr.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Hr.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Hr.min),this.boundingBox.expandByPoint(Hr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hs);let t=this.attributes.position,r=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let i=this.boundingSphere.center;if(Hr.setFromBufferAttribute(t),r)for(let a=0,s=r.length;a<s;a++){let o=r[a];$o.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(Hr.min,$o.min),Hr.expandByPoint(Qt),Qt.addVectors(Hr.max,$o.max),Hr.expandByPoint(Qt)):(Hr.expandByPoint($o.min),Hr.expandByPoint($o.max))}Hr.getCenter(i);let n=0;for(let a=0,s=t.count;a<s;a++)Qt.fromBufferAttribute(t,a),n=Math.max(n,i.distanceToSquared(Qt));if(r)for(let a=0,s=r.length;a<s;a++){let o=r[a],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)Qt.fromBufferAttribute(o,u),l&&(cs.fromBufferAttribute(t,u),Qt.add(cs)),n=Math.max(n,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,r=this.attributes;if(t===null||r.position===void 0||r.normal===void 0||r.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=r.position,n=r.normal,a=r.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vr(new Float32Array(4*i.count),4));let s=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new L,l[R]=new L;let u=new L,c=new L,h=new L,p=new ne,f=new ne,y=new ne,_=new L,v=new L;function d(R,w,S){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,S),p.fromBufferAttribute(a,R),f.fromBufferAttribute(a,w),y.fromBufferAttribute(a,S),c.sub(u),h.sub(u),f.sub(p),y.sub(p);let N=1/(f.x*y.y-y.x*f.y);isFinite(N)&&(_.copy(c).multiplyScalar(y.y).addScaledVector(h,-f.y).multiplyScalar(N),v.copy(h).multiplyScalar(f.x).addScaledVector(c,-y.x).multiplyScalar(N),o[R].add(_),o[w].add(_),o[S].add(_),l[R].add(v),l[w].add(v),l[S].add(v))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let R=0,w=g.length;R<w;++R){let S=g[R],N=S.start,k=S.count;for(let V=N,W=N+k;V<W;V+=3)d(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let m=new L,x=new L,P=new L,T=new L;function b(R){P.fromBufferAttribute(n,R),T.copy(P);let w=o[R];m.copy(w),m.sub(P.multiplyScalar(P.dot(w))).normalize(),x.crossVectors(T,w);let S=x.dot(l[R])<0?-1:1;s.setXYZW(R,m.x,m.y,m.z,S)}for(let R=0,w=g.length;R<w;++R){let S=g[R],N=S.start,k=S.count;for(let V=N,W=N+k;V<W;V+=3)b(t.getX(V+0)),b(t.getX(V+1)),b(t.getX(V+2))}}computeVertexNormals(){let t=this.index,r=this.getAttribute("position");if(r!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vr(new Float32Array(r.count*3),3),this.setAttribute("normal",i);else for(let p=0,f=i.count;p<f;p++)i.setXYZ(p,0,0,0);let n=new L,a=new L,s=new L,o=new L,l=new L,u=new L,c=new L,h=new L;if(t)for(let p=0,f=t.count;p<f;p+=3){let y=t.getX(p+0),_=t.getX(p+1),v=t.getX(p+2);n.fromBufferAttribute(r,y),a.fromBufferAttribute(r,_),s.fromBufferAttribute(r,v),c.subVectors(s,a),h.subVectors(n,a),c.cross(h),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,v),o.add(c),l.add(c),u.add(c),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(v,u.x,u.y,u.z)}else for(let p=0,f=r.count;p<f;p+=3)n.fromBufferAttribute(r,p+0),a.fromBufferAttribute(r,p+1),s.fromBufferAttribute(r,p+2),c.subVectors(s,a),h.subVectors(n,a),c.cross(h),i.setXYZ(p+0,c.x,c.y,c.z),i.setXYZ(p+1,c.x,c.y,c.z),i.setXYZ(p+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let r=0,i=t.count;r<i;r++)Qt.fromBufferAttribute(t,r),Qt.normalize(),t.setXYZ(r,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function t(o,l){let u=o.array,c=o.itemSize,h=o.normalized,p=new u.constructor(l.length*c),f=0,y=0;for(let _=0,v=l.length;_<v;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*c;for(let d=0;d<c;d++)p[y++]=u[f++]}return new vr(p,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let r=new f1,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],u=t(l,i);r.setAttribute(o,u)}let a=this.morphAttributes;for(let o in a){let l=[],u=a[o];for(let c=0,h=u.length;c<h;c++){let p=u[c],f=t(p,i);l.push(f)}r.morphAttributes[o]=l}r.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let u=s[o];r.addGroup(u.start,u.count,u.materialIndex)}return r}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};let r=this.index;r!==null&&(t.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});let i=this.attributes;for(let l in i){let u=i[l];t.data.attributes[l]=u.toJSON(t.data)}let n={},a=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],c=[];for(let h=0,p=u.length;h<p;h++){let f=u[h];c.push(f.toJSON(t.data))}c.length>0&&(n[l]=c,a=!0)}a&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let r={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(r));let n=t.attributes;for(let u in n){let c=n[u];this.setAttribute(u,c.clone(r))}let a=t.morphAttributes;for(let u in a){let c=[],h=a[u];for(let p=0,f=h.length;p<f;p++)c.push(h[p].clone(r));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let u=0,c=s.length;u<c;u++){let h=s[u];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},B_=new bt,oa=new l1,Zu=new Hs,V_=new L,Qu=new L,ec=new L,tc=new L,Np=new L,rc=new L,H_=new L,ic=new L,Ge=class extends tr{constructor(e=new rr,t=new Ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,n=r.length;i<n;i++){let a=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let r=this.geometry,i=r.attributes.position,n=r.morphAttributes.position,a=r.morphTargetsRelative;t.fromBufferAttribute(i,e);let s=this.morphTargetInfluences;if(n&&s){rc.set(0,0,0);for(let o=0,l=n.length;o<l;o++){let u=s[o],c=n[o];u!==0&&(Np.fromBufferAttribute(c,e),a?rc.addScaledVector(Np,u):rc.addScaledVector(Np.sub(t),u))}t.add(rc)}return t}raycast(e,t){let r=this.geometry,i=this.material,n=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Zu.copy(r.boundingSphere),Zu.applyMatrix4(n),oa.copy(e.ray).recast(e.near),!(Zu.containsPoint(oa.origin)===!1&&(oa.intersectSphere(Zu,V_)===null||oa.origin.distanceToSquared(V_)>(e.far-e.near)**2))&&(B_.copy(n).invert(),oa.copy(e.ray).applyMatrix4(B_),!(r.boundingBox!==null&&oa.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,oa)))}_computeIntersections(e,t,r){let i,n=this.geometry,a=this.material,s=n.index,o=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv1,c=n.attributes.normal,h=n.groups,p=n.drawRange;if(s!==null)if(Array.isArray(a))for(let f=0,y=h.length;f<y;f++){let _=h[f],v=a[_.materialIndex],d=Math.max(_.start,p.start),g=Math.min(s.count,Math.min(_.start+_.count,p.start+p.count));for(let m=d,x=g;m<x;m+=3){let P=s.getX(m),T=s.getX(m+1),b=s.getX(m+2);i=nc(this,v,e,r,l,u,c,P,T,b),i&&(i.faceIndex=Math.floor(m/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{let f=Math.max(0,p.start),y=Math.min(s.count,p.start+p.count);for(let _=f,v=y;_<v;_+=3){let d=s.getX(_),g=s.getX(_+1),m=s.getX(_+2);i=nc(this,a,e,r,l,u,c,d,g,m),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}else if(o!==void 0)if(Array.isArray(a))for(let f=0,y=h.length;f<y;f++){let _=h[f],v=a[_.materialIndex],d=Math.max(_.start,p.start),g=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let m=d,x=g;m<x;m+=3){let P=m,T=m+1,b=m+2;i=nc(this,v,e,r,l,u,c,P,T,b),i&&(i.faceIndex=Math.floor(m/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{let f=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let _=f,v=y;_<v;_+=3){let d=_,g=_+1,m=_+2;i=nc(this,a,e,r,l,u,c,d,g,m),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}}};function OE(e,t,r,i,n,a,s,o){let l;if(t.side===Tr?l=i.intersectTriangle(s,a,n,!0,o):l=i.intersectTriangle(n,a,s,t.side===zn,o),l===null)return null;ic.copy(o),ic.applyMatrix4(e.matrixWorld);let u=r.ray.origin.distanceTo(ic);return u<r.near||u>r.far?null:{distance:u,point:ic.clone(),object:e}}function nc(e,t,r,i,n,a,s,o,l,u){e.getVertexPosition(o,Qu),e.getVertexPosition(l,ec),e.getVertexPosition(u,tc);let c=OE(e,t,r,i,Qu,ec,tc,H_);if(c){let h=new L;Ms.getBarycoord(H_,Qu,ec,tc,h),n&&(c.uv=Ms.getInterpolatedAttribute(n,o,l,u,h,new ne)),a&&(c.uv1=Ms.getInterpolatedAttribute(a,o,l,u,h,new ne)),s&&(c.normal=Ms.getInterpolatedAttribute(s,o,l,u,h,new L),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let p={a:o,b:l,c:u,normal:new L,materialIndex:0};Ms.getNormal(Qu,ec,tc,p.normal),c.face=p,c.barycoord=h}return c}var gr=class m1 extends rr{constructor(t=1,r=1,i=1,n=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:r,depth:i,widthSegments:n,heightSegments:a,depthSegments:s};let o=this;n=Math.floor(n),a=Math.floor(a),s=Math.floor(s);let l=[],u=[],c=[],h=[],p=0,f=0;y("z","y","x",-1,-1,i,r,t,s,a,0),y("z","y","x",1,-1,i,r,-t,s,a,1),y("x","z","y",1,1,t,i,r,n,s,2),y("x","z","y",1,-1,t,i,-r,n,s,3),y("x","y","z",1,-1,t,r,i,n,a,4),y("x","y","z",-1,-1,t,r,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new vt(u,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(h,2));function y(_,v,d,g,m,x,P,T,b,R,w){let S=x/b,N=P/R,k=x/2,V=P/2,W=T/2,j=b+1,X=R+1,ae=0,$=0,de=new L;for(let Me=0;Me<X;Me++){let Ze=Me*N-V;for(let tt=0;tt<j;tt++){let K=tt*S-k;de[_]=K*g,de[v]=Ze*m,de[d]=W,u.push(de.x,de.y,de.z),de[_]=0,de[v]=0,de[d]=T>0?1:-1,c.push(de.x,de.y,de.z),h.push(tt/b),h.push(1-Me/R),ae+=1}}for(let Me=0;Me<R;Me++)for(let Ze=0;Ze<b;Ze++){let tt=p+Ze+j*Me,K=p+Ze+j*(Me+1),ce=p+(Ze+1)+j*(Me+1),ke=p+(Ze+1)+j*Me;l.push(tt,K,ke),l.push(K,ce,ke),$+=6}o.addGroup(f,$,w),f+=$,p+=ae}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new m1(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Fs(e){let t={};for(let r in e){t[r]={};for(let i in e[r]){let n=e[r][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[r][i]=null):t[r][i]=n.clone():Array.isArray(n)?t[r][i]=n.slice():t[r][i]=n}}return t}function wr(e){let t={};for(let r=0;r<e.length;r++){let i=Fs(e[r]);for(let n in i)t[n]=i[n]}return t}function kE(e){let t=[];for(let r=0;r<e.length;r++)t.push(e[r].clone());return t}function g1(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pt.workingColorSpace}var ll={clone:Fs,merge:wr},FE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sr=class extends Sa{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FE,this.fragmentShader=zE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=kE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let n=this.uniforms[i].value;n&&n.isTexture?t.uniforms[i]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[i]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[i]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[i]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[i]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[i]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[i]={type:"m4",value:n.toArray()}:t.uniforms[i]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let r={};for(let i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}},v1=class extends tr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Un=new L,G_=new ne,W_=new ne,Wr=class extends v1{constructor(e=50,t=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Uf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(hp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uf*2*Math.atan(Math.tan(hp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Un.x,Un.y).multiplyScalar(-e/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Un.x,Un.y).multiplyScalar(-e/Un.z)}getViewSize(e,t){return this.getViewBounds(e,G_,W_),t.subVectors(W_,G_)}setViewOffset(e,t,r,i,n,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(hp*.5*this.fov)/this.zoom,r=2*t,i=this.aspect*r,n=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let o=a.fullWidth,l=a.fullHeight;n+=a.offsetX*i/o,t-=a.offsetY*r/l,i*=a.width/o,r*=a.height/l}let s=this.filmOffset;s!==0&&(n+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+i,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},hs=-90,ds=1,BE=class extends tr{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Wr(hs,ds,e,t);i.layers=this.layers,this.add(i);let n=new Wr(hs,ds,e,t);n.layers=this.layers,this.add(n);let a=new Wr(hs,ds,e,t);a.layers=this.layers,this.add(a);let s=new Wr(hs,ds,e,t);s.layers=this.layers,this.add(s);let o=new Wr(hs,ds,e,t);o.layers=this.layers,this.add(o);let l=new Wr(hs,ds,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[r,i,n,a,s,o]=t;for(let l of t)this.remove(l);if(e===Ji)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Lc)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[n,a,s,o,l,u]=this.children,c=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let y=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(t,n),e.setRenderTarget(r,1,i),e.render(t,a),e.setRenderTarget(r,2,i),e.render(t,s),e.setRenderTarget(r,3,i),e.render(t,o),e.setRenderTarget(r,4,i),e.render(t,l),r.texture.generateMipmaps=y,e.setRenderTarget(r,5,i),e.render(t,u),e.setRenderTarget(c,h,p),e.xr.enabled=f,r.texture.needsPMREMUpdate=!0}},_1=class extends ti{constructor(e,t,r,i,n,a,s,o,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Us,super(e,t,r,i,n,a,s,o,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},VE=class extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new _1(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ci}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new gr(5,5,5),n=new sr({name:"CubemapFromEquirect",uniforms:Fs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Tr,blending:Zi});n.uniforms.tEquirect.value=t;let a=new Ge(i,n),s=t.minFilter;return t.minFilter===va&&(t.minFilter=Ci),new BE(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,r,i){let n=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,r,i);e.setRenderTarget(n)}},Lp=new L,HE=new L,GE=new lt,da=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){let i=Lp.subVectors(r,t).cross(HE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let r=e.delta(Lp),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/i;return n<0||n>1?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let r=t||GE.getNormalMatrix(e),i=this.coplanarPoint(Lp).applyMatrix4(e),n=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},la=new Hs,ac=new L,tm=class{constructor(e=new da,t=new da,r=new da,i=new da,n=new da,a=new da){this.planes=[e,t,r,i,n,a]}set(e,t,r,i,n,a){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(r),s[3].copy(i),s[4].copy(n),s[5].copy(a),this}copy(e){let t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ji){let r=this.planes,i=e.elements,n=i[0],a=i[1],s=i[2],o=i[3],l=i[4],u=i[5],c=i[6],h=i[7],p=i[8],f=i[9],y=i[10],_=i[11],v=i[12],d=i[13],g=i[14],m=i[15];if(r[0].setComponents(o-n,h-l,_-p,m-v).normalize(),r[1].setComponents(o+n,h+l,_+p,m+v).normalize(),r[2].setComponents(o+a,h+u,_+f,m+d).normalize(),r[3].setComponents(o-a,h-u,_-f,m-d).normalize(),r[4].setComponents(o-s,h-c,_-y,m-g).normalize(),t===Ji)r[5].setComponents(o+s,h+c,_+y,m+g).normalize();else if(t===Lc)r[5].setComponents(s,c,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),la.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),la.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(la)}intersectsSprite(e){return la.center.set(0,0,0),la.radius=.7071067811865476,la.applyMatrix4(e.matrixWorld),this.intersectsSphere(la)}intersectsSphere(e){let t=this.planes,r=e.center,i=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let r=0;r<6;r++){let i=t[r];if(ac.x=i.normal.x>0?e.max.x:e.min.x,ac.y=i.normal.y>0?e.max.y:e.min.y,ac.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ac)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function y1(){let e=null,t=!1,r=null,i=null;function n(a,s){r(a,s),i=e.requestAnimationFrame(n)}return{start:function(){t!==!0&&r!==null&&(i=e.requestAnimationFrame(n),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){r=a},setContext:function(a){e=a}}}function WE(e){let t=new WeakMap;function r(o,l){let u=o.array,c=o.usage,h=u.byteLength,p=e.createBuffer();e.bindBuffer(l,p),e.bufferData(l,u,c),o.onUploadCallback();let f;if(u instanceof Float32Array)f=e.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=e.SHORT;else if(u instanceof Uint32Array)f=e.UNSIGNED_INT;else if(u instanceof Int32Array)f=e.INT;else if(u instanceof Int8Array)f=e.BYTE;else if(u instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,u){let c=l.array,h=l.updateRanges;if(e.bindBuffer(u,o),h.length===0)e.bufferSubData(u,0,c);else{h.sort((f,y)=>f.start-y.start);let p=0;for(let f=1;f<h.length;f++){let y=h[p],_=h[f];_.start<=y.start+y.count+1?y.count=Math.max(y.count,_.start+_.count-y.start):(++p,h[p]=_)}h.length=p+1;for(let f=0,y=h.length;f<y;f++){let _=h[f];e.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=t.get(o);if(u===void 0)t.set(o,r(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:n,remove:a,update:s}}var On=class x1 extends rr{constructor(t=1,r=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:r,widthSegments:i,heightSegments:n};let a=t/2,s=r/2,o=Math.floor(i),l=Math.floor(n),u=o+1,c=l+1,h=t/o,p=r/l,f=[],y=[],_=[],v=[];for(let d=0;d<c;d++){let g=d*p-s;for(let m=0;m<u;m++){let x=m*h-a;y.push(x,-g,0),_.push(0,0,1),v.push(m/o),v.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<o;g++){let m=g+u*d,x=g+u*(d+1),P=g+1+u*(d+1),T=g+1+u*d;f.push(m,x,T),f.push(x,P,T)}this.setIndex(f),this.setAttribute("position",new vt(y,3)),this.setAttribute("normal",new vt(_,3)),this.setAttribute("uv",new vt(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new x1(t.width,t.height,t.widthSegments,t.heightSegments)}},XE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jE=`#ifdef USE_ALPHAHASH
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
#endif`,$E=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JE=`#ifdef USE_AOMAP
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
#endif`,ZE=`#ifdef USE_AOMAP
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
#endif`,ew=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nw=`#ifdef USE_IRIDESCENCE
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
#endif`,aw=`#ifdef USE_BUMPMAP
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
#endif`,sw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ow=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fw=`#define PI 3.141592653589793
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
} // validated`,mw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gw=`vec3 transformedNormal = objectNormal;
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
#endif`,vw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_w=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ew=`#ifdef USE_ENVMAP
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
#endif`,ww=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tw=`#ifdef USE_ENVMAP
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
#endif`,bw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Aw=`#ifdef USE_ENVMAP
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
#endif`,Cw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lw=`#ifdef USE_GRADIENTMAP
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
}`,Dw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Iw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ow=`uniform bool receiveShadow;
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
#endif`,kw=`#ifdef USE_ENVMAP
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
#endif`,Fw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hw=`PhysicalMaterial material;
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
#endif`,Gw=`struct PhysicalMaterial {
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
}`,Ww=`
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
#endif`,Xw=`#if defined( RE_IndirectDiffuse )
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
#endif`,jw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$w=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zw=`#ifdef USE_MAP
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
#endif`,e2=`#if defined( USE_POINTS_UV )
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
#endif`,t2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s2=`#ifdef USE_MORPHTARGETS
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
#endif`,o2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,u2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,c2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p2=`#ifdef USE_NORMALMAP
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
#endif`,f2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,x2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,R2=`float getShadowMask() {
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
}`,P2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N2=`#ifdef USE_SKINNING
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
#endif`,L2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D2=`#ifdef USE_SKINNING
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
#endif`,U2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,F2=`#ifdef USE_TRANSMISSION
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
#endif`,z2=`#ifdef USE_TRANSMISSION
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
#endif`,B2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,W2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X2=`uniform sampler2D t2D;
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
}`,j2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,q2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K2=`#include <common>
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
}`,J2=`#if DEPTH_PACKING == 3200
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
}`,Z2=`#define DISTANCE
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
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`uniform float scale;
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
}`,iT=`uniform vec3 diffuse;
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
}`,nT=`#include <common>
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
}`,aT=`uniform vec3 diffuse;
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
}`,sT=`#define LAMBERT
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
}`,oT=`#define LAMBERT
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
}`,lT=`#define MATCAP
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
}`,uT=`#define MATCAP
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
}`,cT=`#define NORMAL
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
}`,hT=`#define NORMAL
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
}`,dT=`#define PHONG
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
}`,pT=`#define PHONG
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
}`,fT=`#define STANDARD
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
}`,mT=`#define STANDARD
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
}`,gT=`#define TOON
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
}`,vT=`#define TOON
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
}`,_T=`uniform float size;
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
}`,yT=`uniform vec3 diffuse;
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
}`,xT=`#include <common>
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
}`,ST=`uniform vec3 color;
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
}`,ET=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:XE,alphahash_pars_fragment:jE,alphamap_fragment:$E,alphamap_pars_fragment:qE,alphatest_fragment:YE,alphatest_pars_fragment:KE,aomap_fragment:JE,aomap_pars_fragment:ZE,batching_pars_vertex:QE,batching_vertex:ew,begin_vertex:tw,beginnormal_vertex:rw,bsdfs:iw,iridescence_fragment:nw,bumpmap_pars_fragment:aw,clipping_planes_fragment:sw,clipping_planes_pars_fragment:ow,clipping_planes_pars_vertex:lw,clipping_planes_vertex:uw,color_fragment:cw,color_pars_fragment:hw,color_pars_vertex:dw,color_vertex:pw,common:fw,cube_uv_reflection_fragment:mw,defaultnormal_vertex:gw,displacementmap_pars_vertex:vw,displacementmap_vertex:_w,emissivemap_fragment:yw,emissivemap_pars_fragment:xw,colorspace_fragment:Sw,colorspace_pars_fragment:Mw,envmap_fragment:Ew,envmap_common_pars_fragment:ww,envmap_pars_fragment:Tw,envmap_pars_vertex:bw,envmap_physical_pars_fragment:kw,envmap_vertex:Aw,fog_vertex:Cw,fog_pars_vertex:Rw,fog_fragment:Pw,fog_pars_fragment:Nw,gradientmap_pars_fragment:Lw,lightmap_pars_fragment:Dw,lights_lambert_fragment:Uw,lights_lambert_pars_fragment:Iw,lights_pars_begin:Ow,lights_toon_fragment:Fw,lights_toon_pars_fragment:zw,lights_phong_fragment:Bw,lights_phong_pars_fragment:Vw,lights_physical_fragment:Hw,lights_physical_pars_fragment:Gw,lights_fragment_begin:Ww,lights_fragment_maps:Xw,lights_fragment_end:jw,logdepthbuf_fragment:$w,logdepthbuf_pars_fragment:qw,logdepthbuf_pars_vertex:Yw,logdepthbuf_vertex:Kw,map_fragment:Jw,map_pars_fragment:Zw,map_particle_fragment:Qw,map_particle_pars_fragment:e2,metalnessmap_fragment:t2,metalnessmap_pars_fragment:r2,morphinstance_vertex:i2,morphcolor_vertex:n2,morphnormal_vertex:a2,morphtarget_pars_vertex:s2,morphtarget_vertex:o2,normal_fragment_begin:l2,normal_fragment_maps:u2,normal_pars_fragment:c2,normal_pars_vertex:h2,normal_vertex:d2,normalmap_pars_fragment:p2,clearcoat_normal_fragment_begin:f2,clearcoat_normal_fragment_maps:m2,clearcoat_pars_fragment:g2,iridescence_pars_fragment:v2,opaque_fragment:_2,packing:y2,premultiplied_alpha_fragment:x2,project_vertex:S2,dithering_fragment:M2,dithering_pars_fragment:E2,roughnessmap_fragment:w2,roughnessmap_pars_fragment:T2,shadowmap_pars_fragment:b2,shadowmap_pars_vertex:A2,shadowmap_vertex:C2,shadowmask_pars_fragment:R2,skinbase_vertex:P2,skinning_pars_vertex:N2,skinning_vertex:L2,skinnormal_vertex:D2,specularmap_fragment:U2,specularmap_pars_fragment:I2,tonemapping_fragment:O2,tonemapping_pars_fragment:k2,transmission_fragment:F2,transmission_pars_fragment:z2,uv_pars_fragment:B2,uv_pars_vertex:V2,uv_vertex:H2,worldpos_vertex:G2,background_vert:W2,background_frag:X2,backgroundCube_vert:j2,backgroundCube_frag:$2,cube_vert:q2,cube_frag:Y2,depth_vert:K2,depth_frag:J2,distanceRGBA_vert:Z2,distanceRGBA_frag:Q2,equirect_vert:eT,equirect_frag:tT,linedashed_vert:rT,linedashed_frag:iT,meshbasic_vert:nT,meshbasic_frag:aT,meshlambert_vert:sT,meshlambert_frag:oT,meshmatcap_vert:lT,meshmatcap_frag:uT,meshnormal_vert:cT,meshnormal_frag:hT,meshphong_vert:dT,meshphong_frag:pT,meshphysical_vert:fT,meshphysical_frag:mT,meshtoon_vert:gT,meshtoon_frag:vT,points_vert:_T,points_frag:yT,shadow_vert:xT,shadow_frag:ST,sprite_vert:MT,sprite_frag:ET},Ee={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Ti={basic:{uniforms:wr([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:wr([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new $e(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:wr([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:wr([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:wr([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new $e(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:wr([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:wr([Ee.points,Ee.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:wr([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:wr([Ee.common,Ee.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:wr([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:wr([Ee.sprite,Ee.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:wr([Ee.common,Ee.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:wr([Ee.lights,Ee.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Ti.physical={uniforms:wr([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var sc={r:0,b:0,g:0},ua=new Bn,wT=new bt;function TT(e,t,r,i,n,a,s){let o=new $e(0),l=a===!0?0:1,u,c,h=null,p=0,f=null;function y(g){let m=g.isScene===!0?g.background:null;return m&&m.isTexture&&(m=(g.backgroundBlurriness>0?r:t).get(m)),m}function _(g){let m=!1,x=y(g);x===null?d(o,l):x&&x.isColor&&(d(x,1),m=!0);let P=e.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||m)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function v(g,m){let x=y(m);x&&(x.isCubeTexture||x.mapping===Uc)?(c===void 0&&(c=new Ge(new gr(1,1,1),new sr({name:"BackgroundCubeMaterial",uniforms:Fs(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),ua.copy(m.backgroundRotation),ua.x*=-1,ua.y*=-1,ua.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ua.y*=-1,ua.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(wT.makeRotationFromEuler(ua)),c.material.toneMapped=pt.getTransfer(x.colorSpace)!==gt,(h!==x||p!==x.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,h=x,p=x.version,f=e.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Ge(new On(2,2),new sr({name:"BackgroundMaterial",uniforms:Fs(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=pt.getTransfer(x.colorSpace)!==gt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||p!==x.version||f!==e.toneMapping)&&(u.material.needsUpdate=!0,h=x,p=x.version,f=e.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function d(g,m){g.getRGB(sc,g1(e)),i.buffers.color.setClear(sc.r,sc.g,sc.b,m,s)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),l=m,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,d(o,l)},render:_,addToRenderList:v}}function bT(e,t){let r=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},n=p(null),a=n,s=!1;function o(S,N,k,V,W){let j=!1,X=h(V,k,N);a!==X&&(a=X,u(a.object)),j=f(S,V,k,W),j&&y(S,V,k,W),W!==null&&t.update(W,e.ELEMENT_ARRAY_BUFFER),(j||s)&&(s=!1,x(S,N,k,V),W!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return e.createVertexArray()}function u(S){return e.bindVertexArray(S)}function c(S){return e.deleteVertexArray(S)}function h(S,N,k){let V=k.wireframe===!0,W=i[S.id];W===void 0&&(W={},i[S.id]=W);let j=W[N.id];j===void 0&&(j={},W[N.id]=j);let X=j[V];return X===void 0&&(X=p(l()),j[V]=X),X}function p(S){let N=[],k=[],V=[];for(let W=0;W<r;W++)N[W]=0,k[W]=0,V[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:V,object:S,attributes:{},index:null}}function f(S,N,k,V){let W=a.attributes,j=N.attributes,X=0,ae=k.getAttributes();for(let $ in ae)if(ae[$].location>=0){let de=W[$],Me=j[$];if(Me===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(Me=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(Me=S.instanceColor)),de===void 0||de.attribute!==Me||Me&&de.data!==Me.data)return!0;X++}return a.attributesNum!==X||a.index!==V}function y(S,N,k,V){let W={},j=N.attributes,X=0,ae=k.getAttributes();for(let $ in ae)if(ae[$].location>=0){let de=j[$];de===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(de=S.instanceColor));let Me={};Me.attribute=de,de&&de.data&&(Me.data=de.data),W[$]=Me,X++}a.attributes=W,a.attributesNum=X,a.index=V}function _(){let S=a.newAttributes;for(let N=0,k=S.length;N<k;N++)S[N]=0}function v(S){d(S,0)}function d(S,N){let k=a.newAttributes,V=a.enabledAttributes,W=a.attributeDivisors;k[S]=1,V[S]===0&&(e.enableVertexAttribArray(S),V[S]=1),W[S]!==N&&(e.vertexAttribDivisor(S,N),W[S]=N)}function g(){let S=a.newAttributes,N=a.enabledAttributes;for(let k=0,V=N.length;k<V;k++)N[k]!==S[k]&&(e.disableVertexAttribArray(k),N[k]=0)}function m(S,N,k,V,W,j,X){X===!0?e.vertexAttribIPointer(S,N,k,W,j):e.vertexAttribPointer(S,N,k,V,W,j)}function x(S,N,k,V){_();let W=V.attributes,j=k.getAttributes(),X=N.defaultAttributeValues;for(let ae in j){let $=j[ae];if($.location>=0){let de=W[ae];if(de===void 0&&(ae==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),ae==="instanceColor"&&S.instanceColor&&(de=S.instanceColor)),de!==void 0){let Me=de.normalized,Ze=de.itemSize,tt=t.get(de);if(tt===void 0)continue;let K=tt.buffer,ce=tt.type,ke=tt.bytesPerElement,Le=ce===e.INT||ce===e.UNSIGNED_INT||de.gpuType===qf;if(de.isInterleavedBufferAttribute){let ge=de.data,Ye=ge.stride,it=de.offset;if(ge.isInstancedInterleavedBuffer){for(let Je=0;Je<$.locationSize;Je++)d($.location+Je,ge.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Je=0;Je<$.locationSize;Je++)v($.location+Je);e.bindBuffer(e.ARRAY_BUFFER,K);for(let Je=0;Je<$.locationSize;Je++)m($.location+Je,Ze/$.locationSize,ce,Me,Ye*ke,(it+Ze/$.locationSize*Je)*ke,Le)}else{if(de.isInstancedBufferAttribute){for(let ge=0;ge<$.locationSize;ge++)d($.location+ge,de.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ge=0;ge<$.locationSize;ge++)v($.location+ge);e.bindBuffer(e.ARRAY_BUFFER,K);for(let ge=0;ge<$.locationSize;ge++)m($.location+ge,Ze/$.locationSize,ce,Me,Ze*ke,Ze/$.locationSize*ge*ke,Le)}}else if(X!==void 0){let Me=X[ae];if(Me!==void 0)switch(Me.length){case 2:e.vertexAttrib2fv($.location,Me);break;case 3:e.vertexAttrib3fv($.location,Me);break;case 4:e.vertexAttrib4fv($.location,Me);break;default:e.vertexAttrib1fv($.location,Me)}}}}g()}function P(){R();for(let S in i){let N=i[S];for(let k in N){let V=N[k];for(let W in V)c(V[W].object),delete V[W];delete N[k]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;let N=i[S.id];for(let k in N){let V=N[k];for(let W in V)c(V[W].object),delete V[W];delete N[k]}delete i[S.id]}function b(S){for(let N in i){let k=i[N];if(k[S.id]===void 0)continue;let V=k[S.id];for(let W in V)c(V[W].object),delete V[W];delete k[S.id]}}function R(){w(),s=!0,a!==n&&(a=n,u(a.object))}function w(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:R,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:v,disableUnusedAttributes:g}}function AT(e,t,r){let i;function n(u){i=u}function a(u,c){e.drawArrays(i,u,c),r.update(c,i,1)}function s(u,c,h){h!==0&&(e.drawArraysInstanced(i,u,c,h),r.update(c,i,h))}function o(u,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,h);let p=0;for(let f=0;f<h;f++)p+=c[f];r.update(p,i,1)}function l(u,c,h,p){if(h===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let y=0;y<u.length;y++)s(u[y],c[y],p[y]);else{f.multiDrawArraysInstancedWEBGL(i,u,0,c,0,p,0,h);let y=0;for(let _=0;_<h;_++)y+=c[_]*p[_];r.update(y,i,1)}}this.setMode=n,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function CT(e,t,r,i){let n;function a(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");n=e.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){return!(b!==mi&&i.convert(b)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){let R=b===Qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==nn&&i.convert(b)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Ri&&!R)}function l(b){if(b==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=r.precision!==void 0?r.precision:"highp",c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);let h=r.logarithmicDepthBuffer===!0,p=r.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),v=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),m=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),P=y>0,T=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:y,maxTextureSize:_,maxCubemapSize:v,maxAttributes:d,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:x,vertexTextures:P,maxSamples:T}}function RT(e){let t=this,r=null,i=0,n=!1,a=!1,s=new da,o=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){let f=h.length!==0||p||i!==0||n;return n=p,i=h.length,f},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,p){r=c(h,p,0)},this.setState=function(h,p,f){let y=h.clippingPlanes,_=h.clipIntersection,v=h.clipShadows,d=e.get(h);if(!n||y===null||y.length===0||a&&!v)a?c(null):u();else{let g=a?0:i,m=g*4,x=d.clippingState||null;l.value=x,x=c(y,p,m,f);for(let P=0;P!==m;++P)x[P]=r[P];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==r&&(l.value=r,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(h,p,f,y){let _=h!==null?h.length:0,v=null;if(_!==0){if(v=l.value,y!==!0||v===null){let d=f+_*4,g=p.matrixWorldInverse;o.getNormalMatrix(g),(v===null||v.length<d)&&(v=new Float32Array(d));for(let m=0,x=f;m!==_;++m,x+=4)s.copy(h[m]).applyMatrix4(g,o),s.normal.toArray(v,x),v[x+3]=s.constant}l.value=v,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,v}}function PT(e){let t=new WeakMap;function r(s,o){return o===rf?s.mapping=Us:o===nf&&(s.mapping=Is),s}function i(s){if(s&&s.isTexture){let o=s.mapping;if(o===rf||o===nf)if(t.has(s)){let l=t.get(s).texture;return r(l,s.mapping)}else{let l=s.image;if(l&&l.height>0){let u=new VE(l.height);return u.fromEquirectangularTexture(e,s),t.set(s,u),s.addEventListener("dispose",n),r(u.texture,s.mapping)}else return null}}return s}function n(s){let o=s.target;o.removeEventListener("dispose",n);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var rm=class extends v1{constructor(e=-1,t=1,r=1,i=-1,n=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=i,this.near=n,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,i,n,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2,n=r-e,a=r+e,s=i+t,o=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=l*this.view.offsetX,a=n+l*this.view.width,s-=u*this.view.offsetY,o=s-u*this.view.height}this.projectionMatrix.makeOrthographic(n,a,s,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ts=4,X_=[.125,.215,.35,.446,.526,.582],ma=20,Dp=new rm,j_=new $e,Up=null,Ip=0,Op=0,kp=!1,pa=(1+Math.sqrt(5))/2,ps=1/pa,$_=[new L(-pa,ps,0),new L(pa,ps,0),new L(-ps,0,pa),new L(ps,0,pa),new L(0,pa,-ps),new L(0,pa,ps),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Of=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,i=100){Up=this._renderer.getRenderTarget(),Ip=this._renderer.getActiveCubeFace(),Op=this._renderer.getActiveMipmapLevel(),kp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,r,i,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=K_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Y_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Up,Ip,Op),this._renderer.xr.enabled=kp,e.scissorTest=!1,oc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Us||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Up=this._renderer.getRenderTarget(),Ip=this._renderer.getActiveCubeFace(),Op=this._renderer.getActiveMipmapLevel(),kp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:Qi,format:mi,colorSpace:zs,depthBuffer:!1},i=q_(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=q_(e,t,r);let{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NT(n)),this._blurMaterial=LT(n,e,t)}return i}_compileMaterial(e){let t=new Ge(this._lodPlanes[0],e);this._renderer.compile(t,Dp)}_sceneToCubeUV(e,t,r,i){let n=new Wr(90,1,t,r),a=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],o=this._renderer,l=o.autoClear,u=o.toneMapping;o.getClearColor(j_),o.toneMapping=Fn,o.autoClear=!1;let c=new Ki({name:"PMREM.Background",side:Tr,depthWrite:!1,depthTest:!1}),h=new Ge(new gr,c),p=!1,f=e.background;f?f.isColor&&(c.color.copy(f),e.background=null,p=!0):(c.color.copy(j_),p=!0);for(let y=0;y<6;y++){let _=y%3;_===0?(n.up.set(0,a[y],0),n.lookAt(s[y],0,0)):_===1?(n.up.set(0,0,a[y]),n.lookAt(0,s[y],0)):(n.up.set(0,a[y],0),n.lookAt(0,0,s[y]));let v=this._cubeSize;oc(i,_*v,y>2?v:0,v,v),o.setRenderTarget(i),p&&o.render(h,n),o.render(e,n)}h.geometry.dispose(),h.material.dispose(),o.toneMapping=u,o.autoClear=l,e.background=f}_textureToCubeUV(e,t){let r=this._renderer,i=e.mapping===Us||e.mapping===Is;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=K_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Y_());let n=i?this._cubemapMaterial:this._equirectMaterial,a=new Ge(this._lodPlanes[0],n),s=n.uniforms;s.envMap.value=e;let o=this._cubeSize;oc(t,0,0,3*o,2*o),r.setRenderTarget(t),r.render(a,Dp)}_applyPMREM(e){let t=this._renderer,r=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let n=1;n<i;n++){let a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),s=$_[(i-n-1)%$_.length];this._blur(e,n-1,n,a,s)}t.autoClear=r}_blur(e,t,r,i,n){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,r,i,"latitudinal",n),this._halfBlur(a,e,r,r,i,"longitudinal",n)}_halfBlur(e,t,r,i,n,a,s){let o=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,c=new Ge(this._lodPlanes[i],l),h=l.uniforms,p=this._sizeLods[r]-1,f=isFinite(n)?Math.PI/(2*p):2*Math.PI/(2*ma-1),y=n/f,_=isFinite(n)?1+Math.floor(u*y):ma;_>ma&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ma}`);let v=[],d=0;for(let T=0;T<ma;++T){let b=T/y,R=Math.exp(-b*b/2);v.push(R),T===0?d+=R:T<_&&(d+=2*R)}for(let T=0;T<v.length;T++)v[T]=v[T]/d;h.envMap.value=e.texture,h.samples.value=_,h.weights.value=v,h.latitudinal.value=a==="latitudinal",s&&(h.poleAxis.value=s);let{_lodMax:g}=this;h.dTheta.value=f,h.mipInt.value=g-r;let m=this._sizeLods[i],x=3*m*(i>g-Ts?i-g+Ts:0),P=4*(this._cubeSize-m);oc(t,x,P,3*m,2*m),o.setRenderTarget(t),o.render(c,Dp)}};function NT(e){let t=[],r=[],i=[],n=e,a=e-Ts+1+X_.length;for(let s=0;s<a;s++){let o=Math.pow(2,n);r.push(o);let l=1/o;s>e-Ts?l=X_[s-e+Ts-1]:s===0&&(l=0),i.push(l);let u=1/(o-2),c=-u,h=1+u,p=[c,c,h,c,h,h,c,c,h,h,c,h],f=6,y=6,_=3,v=2,d=1,g=new Float32Array(_*y*f),m=new Float32Array(v*y*f),x=new Float32Array(d*y*f);for(let T=0;T<f;T++){let b=T%3*2/3-1,R=T>2?0:-1,w=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];g.set(w,_*y*T),m.set(p,v*y*T);let S=[T,T,T,T,T,T];x.set(S,d*y*T)}let P=new rr;P.setAttribute("position",new vr(g,_)),P.setAttribute("uv",new vr(m,v)),P.setAttribute("faceIndex",new vr(x,d)),t.push(P),n>Ts&&n--}return{lodPlanes:t,sizeLods:r,sigmas:i}}function q_(e,t,r){let i=new gi(e,t,r);return i.texture.mapping=Uc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oc(e,t,r,i,n){e.viewport.set(t,r,i,n),e.scissor.set(t,r,i,n)}function LT(e,t,r){let i=new Float32Array(ma),n=new L(0,1,0);return new sr({name:"SphericalGaussianBlur",defines:{n:ma,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:im(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Y_(){return new sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:im(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function K_(){return new sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:im(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function im(){return`

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
	`}function DT(e){let t=new WeakMap,r=null;function i(o){if(o&&o.isTexture){let l=o.mapping,u=l===rf||l===nf,c=l===Us||l===Is;if(u||c){let h=t.get(o),p=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return r===null&&(r=new Of(e)),h=u?r.fromEquirectangular(o,h):r.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{let f=o.image;return u&&f&&f.height>0||c&&f&&n(f)?(r===null&&(r=new Of(e)),h=u?r.fromEquirectangular(o):r.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",a),h.texture):null}}}return o}function n(o){let l=0,u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function a(o){let l=o.target;l.removeEventListener("dispose",a);let u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function s(){t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:s}}function UT(e){let t={};function r(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=e.getExtension(i)}return t[i]=n,n}return{has:function(i){return r(i)!==null},init:function(){r("EXT_color_buffer_float"),r("WEBGL_clip_cull_distance"),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture"),r("WEBGL_render_shared_exponent")},get:function(i){let n=r(i);return n===null&&tl("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function IT(e,t,r,i){let n={},a=new WeakMap;function s(h){let p=h.target;p.index!==null&&t.remove(p.index);for(let y in p.attributes)t.remove(p.attributes[y]);for(let y in p.morphAttributes){let _=p.morphAttributes[y];for(let v=0,d=_.length;v<d;v++)t.remove(_[v])}p.removeEventListener("dispose",s),delete n[p.id];let f=a.get(p);f&&(t.remove(f),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,r.memory.geometries--}function o(h,p){return n[p.id]===!0||(p.addEventListener("dispose",s),n[p.id]=!0,r.memory.geometries++),p}function l(h){let p=h.attributes;for(let y in p)t.update(p[y],e.ARRAY_BUFFER);let f=h.morphAttributes;for(let y in f){let _=f[y];for(let v=0,d=_.length;v<d;v++)t.update(_[v],e.ARRAY_BUFFER)}}function u(h){let p=[],f=h.index,y=h.attributes.position,_=0;if(f!==null){let g=f.array;_=f.version;for(let m=0,x=g.length;m<x;m+=3){let P=g[m+0],T=g[m+1],b=g[m+2];p.push(P,T,T,b,b,P)}}else if(y!==void 0){let g=y.array;_=y.version;for(let m=0,x=g.length/3-1;m<x;m+=3){let P=m+0,T=m+1,b=m+2;p.push(P,T,T,b,b,P)}}else return;let v=new(i1(p)?p1:d1)(p,1);v.version=_;let d=a.get(h);d&&t.remove(d),a.set(h,v)}function c(h){let p=a.get(h);if(p){let f=h.index;f!==null&&p.version<f.version&&u(h)}else u(h);return a.get(h)}return{get:o,update:l,getWireframeAttribute:c}}function OT(e,t,r){let i;function n(p){i=p}let a,s;function o(p){a=p.type,s=p.bytesPerElement}function l(p,f){e.drawElements(i,f,a,p*s),r.update(f,i,1)}function u(p,f,y){y!==0&&(e.drawElementsInstanced(i,f,a,p*s,y),r.update(f,i,y))}function c(p,f,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,a,p,0,y);let _=0;for(let v=0;v<y;v++)_+=f[v];r.update(_,i,1)}function h(p,f,y,_){if(y===0)return;let v=t.get("WEBGL_multi_draw");if(v===null)for(let d=0;d<p.length;d++)u(p[d]/s,f[d],_[d]);else{v.multiDrawElementsInstancedWEBGL(i,f,0,a,p,0,_,0,y);let d=0;for(let g=0;g<y;g++)d+=f[g]*_[g];r.update(d,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function kT(e){let t={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(r.calls++,s){case e.TRIANGLES:r.triangles+=o*(a/3);break;case e.LINES:r.lines+=o*(a/2);break;case e.LINE_STRIP:r.lines+=o*(a-1);break;case e.LINE_LOOP:r.lines+=o*a;break;case e.POINTS:r.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:t,render:r,programs:null,autoReset:!0,reset:n,update:i}}function FT(e,t,r){let i=new WeakMap,n=new Tt;function a(s,o,l){let u=s.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=c!==void 0?c.length:0,p=i.get(o);if(p===void 0||p.count!==h){let f=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",f)};p!==void 0&&p.texture.dispose();let y=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],x=0;y===!0&&(x=1),_===!0&&(x=2),v===!0&&(x=3);let P=o.attributes.position.count*x,T=1;P>t.maxTextureSize&&(T=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);let b=new Float32Array(P*T*4*h),R=new s1(b,P,T,h);R.type=Ri,R.needsUpdate=!0;let w=x*4;for(let S=0;S<h;S++){let N=d[S],k=g[S],V=m[S],W=P*T*4*S;for(let j=0;j<N.count;j++){let X=j*w;y===!0&&(n.fromBufferAttribute(N,j),b[W+X+0]=n.x,b[W+X+1]=n.y,b[W+X+2]=n.z,b[W+X+3]=0),_===!0&&(n.fromBufferAttribute(k,j),b[W+X+4]=n.x,b[W+X+5]=n.y,b[W+X+6]=n.z,b[W+X+7]=0),v===!0&&(n.fromBufferAttribute(V,j),b[W+X+8]=n.x,b[W+X+9]=n.y,b[W+X+10]=n.z,b[W+X+11]=V.itemSize===4?n.w:1)}}p={count:h,texture:R,size:new ne(P,T)},i.set(o,p),o.addEventListener("dispose",f)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,r);else{let f=0;for(let _=0;_<u.length;_++)f+=u[_];let y=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",y),l.getUniforms().setValue(e,"morphTargetInfluences",u)}l.getUniforms().setValue(e,"morphTargetsTexture",p.texture,r),l.getUniforms().setValue(e,"morphTargetsTextureSize",p.size)}return{update:a}}function zT(e,t,r,i){let n=new WeakMap;function a(l){let u=i.render.frame,c=l.geometry,h=t.get(l,c);if(n.get(h)!==u&&(t.update(h),n.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==u&&(r.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&r.update(l.instanceColor,e.ARRAY_BUFFER),n.set(l,u))),l.isSkinnedMesh){let p=l.skeleton;n.get(p)!==u&&(p.update(),n.set(p,u))}return h}function s(){n=new WeakMap}function o(l){let u=l.target;u.removeEventListener("dispose",o),r.remove(u.instanceMatrix),u.instanceColor!==null&&r.remove(u.instanceColor)}return{update:a,dispose:s}}var S1=class extends ti{constructor(e,t,r,i,n,a,s,o,l,u=Ps){if(u!==Ps&&u!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===Ps&&(r=_a),r===void 0&&u===ks&&(r=Os),super(null,i,n,a,s,o,u,r,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Xr,this.minFilter=o!==void 0?o:Xr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},M1=new ti,J_=new S1(1,1),E1=new s1,w1=new bE,T1=new _1,Z_=[],Q_=[],ey=new Float32Array(16),ty=new Float32Array(9),ry=new Float32Array(4);function Gs(e,t,r){let i=e[0];if(i<=0||i>0)return e;let n=t*r,a=Z_[n];if(a===void 0&&(a=new Float32Array(n),Z_[n]=a),t!==0){i.toArray(a,0);for(let s=1,o=0;s!==t;++s)o+=r,e[s].toArray(a,o)}return a}function qt(e,t){if(e.length!==t.length)return!1;for(let r=0,i=e.length;r<i;r++)if(e[r]!==t[r])return!1;return!0}function Yt(e,t){for(let r=0,i=t.length;r<i;r++)e[r]=t[r]}function Oc(e,t){let r=Q_[t];r===void 0&&(r=new Int32Array(t),Q_[t]=r);for(let i=0;i!==t;++i)r[i]=e.allocateTextureUnit();return r}function BT(e,t){let r=this.cache;r[0]!==t&&(e.uniform1f(this.addr,t),r[0]=t)}function VT(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(qt(r,t))return;e.uniform2fv(this.addr,t),Yt(r,t)}}function HT(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else if(t.r!==void 0)(r[0]!==t.r||r[1]!==t.g||r[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),r[0]=t.r,r[1]=t.g,r[2]=t.b);else{if(qt(r,t))return;e.uniform3fv(this.addr,t),Yt(r,t)}}function GT(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(qt(r,t))return;e.uniform4fv(this.addr,t),Yt(r,t)}}function WT(e,t){let r=this.cache,i=t.elements;if(i===void 0){if(qt(r,t))return;e.uniformMatrix2fv(this.addr,!1,t),Yt(r,t)}else{if(qt(r,i))return;ry.set(i),e.uniformMatrix2fv(this.addr,!1,ry),Yt(r,i)}}function XT(e,t){let r=this.cache,i=t.elements;if(i===void 0){if(qt(r,t))return;e.uniformMatrix3fv(this.addr,!1,t),Yt(r,t)}else{if(qt(r,i))return;ty.set(i),e.uniformMatrix3fv(this.addr,!1,ty),Yt(r,i)}}function jT(e,t){let r=this.cache,i=t.elements;if(i===void 0){if(qt(r,t))return;e.uniformMatrix4fv(this.addr,!1,t),Yt(r,t)}else{if(qt(r,i))return;ey.set(i),e.uniformMatrix4fv(this.addr,!1,ey),Yt(r,i)}}function $T(e,t){let r=this.cache;r[0]!==t&&(e.uniform1i(this.addr,t),r[0]=t)}function qT(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(qt(r,t))return;e.uniform2iv(this.addr,t),Yt(r,t)}}function YT(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else{if(qt(r,t))return;e.uniform3iv(this.addr,t),Yt(r,t)}}function KT(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(qt(r,t))return;e.uniform4iv(this.addr,t),Yt(r,t)}}function JT(e,t){let r=this.cache;r[0]!==t&&(e.uniform1ui(this.addr,t),r[0]=t)}function ZT(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(qt(r,t))return;e.uniform2uiv(this.addr,t),Yt(r,t)}}function QT(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else{if(qt(r,t))return;e.uniform3uiv(this.addr,t),Yt(r,t)}}function eb(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(qt(r,t))return;e.uniform4uiv(this.addr,t),Yt(r,t)}}function tb(e,t,r){let i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(e.uniform1i(this.addr,n),i[0]=n);let a;this.type===e.SAMPLER_2D_SHADOW?(J_.compareFunction=e1,a=J_):a=M1,r.setTexture2D(t||a,n)}function rb(e,t,r){let i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(e.uniform1i(this.addr,n),i[0]=n),r.setTexture3D(t||w1,n)}function ib(e,t,r){let i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(e.uniform1i(this.addr,n),i[0]=n),r.setTextureCube(t||T1,n)}function nb(e,t,r){let i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(e.uniform1i(this.addr,n),i[0]=n),r.setTexture2DArray(t||E1,n)}function ab(e){switch(e){case 5126:return BT;case 35664:return VT;case 35665:return HT;case 35666:return GT;case 35674:return WT;case 35675:return XT;case 35676:return jT;case 5124:case 35670:return $T;case 35667:case 35671:return qT;case 35668:case 35672:return YT;case 35669:case 35673:return KT;case 5125:return JT;case 36294:return ZT;case 36295:return QT;case 36296:return eb;case 35678:case 36198:case 36298:case 36306:case 35682:return tb;case 35679:case 36299:case 36307:return rb;case 35680:case 36300:case 36308:case 36293:return ib;case 36289:case 36303:case 36311:case 36292:return nb}}function sb(e,t){e.uniform1fv(this.addr,t)}function ob(e,t){let r=Gs(t,this.size,2);e.uniform2fv(this.addr,r)}function lb(e,t){let r=Gs(t,this.size,3);e.uniform3fv(this.addr,r)}function ub(e,t){let r=Gs(t,this.size,4);e.uniform4fv(this.addr,r)}function cb(e,t){let r=Gs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,r)}function hb(e,t){let r=Gs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,r)}function db(e,t){let r=Gs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,r)}function pb(e,t){e.uniform1iv(this.addr,t)}function fb(e,t){e.uniform2iv(this.addr,t)}function mb(e,t){e.uniform3iv(this.addr,t)}function gb(e,t){e.uniform4iv(this.addr,t)}function vb(e,t){e.uniform1uiv(this.addr,t)}function _b(e,t){e.uniform2uiv(this.addr,t)}function yb(e,t){e.uniform3uiv(this.addr,t)}function xb(e,t){e.uniform4uiv(this.addr,t)}function Sb(e,t,r){let i=this.cache,n=t.length,a=Oc(r,n);qt(i,a)||(e.uniform1iv(this.addr,a),Yt(i,a));for(let s=0;s!==n;++s)r.setTexture2D(t[s]||M1,a[s])}function Mb(e,t,r){let i=this.cache,n=t.length,a=Oc(r,n);qt(i,a)||(e.uniform1iv(this.addr,a),Yt(i,a));for(let s=0;s!==n;++s)r.setTexture3D(t[s]||w1,a[s])}function Eb(e,t,r){let i=this.cache,n=t.length,a=Oc(r,n);qt(i,a)||(e.uniform1iv(this.addr,a),Yt(i,a));for(let s=0;s!==n;++s)r.setTextureCube(t[s]||T1,a[s])}function wb(e,t,r){let i=this.cache,n=t.length,a=Oc(r,n);qt(i,a)||(e.uniform1iv(this.addr,a),Yt(i,a));for(let s=0;s!==n;++s)r.setTexture2DArray(t[s]||E1,a[s])}function Tb(e){switch(e){case 5126:return sb;case 35664:return ob;case 35665:return lb;case 35666:return ub;case 35674:return cb;case 35675:return hb;case 35676:return db;case 5124:case 35670:return pb;case 35667:case 35671:return fb;case 35668:case 35672:return mb;case 35669:case 35673:return gb;case 5125:return vb;case 36294:return _b;case 36295:return yb;case 36296:return xb;case 35678:case 36198:case 36298:case 36306:case 35682:return Sb;case 35679:case 36299:case 36307:return Mb;case 35680:case 36300:case 36308:case 36293:return Eb;case 36289:case 36303:case 36311:case 36292:return wb}}var bb=class{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=ab(t.type)}},Ab=class{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tb(t.type)}},Cb=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){let i=this.seq;for(let n=0,a=i.length;n!==a;++n){let s=i[n];s.setValue(e,t[s.id],r)}}},Fp=/(\w+)(\])?(\[|\.)?/g;function iy(e,t){e.seq.push(t),e.map[t.id]=t}function Rb(e,t,r){let i=e.name,n=i.length;for(Fp.lastIndex=0;;){let a=Fp.exec(i),s=Fp.lastIndex,o=a[1],l=a[2]==="]",u=a[3];if(l&&(o=o|0),u===void 0||u==="["&&s+2===n){iy(r,u===void 0?new bb(o,e,t):new Ab(o,e,t));break}else{let c=r.map[o];c===void 0&&(c=new Cb(o),iy(r,c)),r=c}}}var Rc=class{constructor(e,t){this.seq=[],this.map={};let r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){let n=e.getActiveUniform(t,i),a=e.getUniformLocation(t,n.name);Rb(n,a,this)}}setValue(e,t,r,i){let n=this.map[t];n!==void 0&&n.setValue(e,r,i)}setOptional(e,t,r){let i=t[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,t,r,i){for(let n=0,a=t.length;n!==a;++n){let s=t[n],o=r[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,i)}}static seqWithValue(e,t){let r=[];for(let i=0,n=e.length;i!==n;++i){let a=e[i];a.id in t&&r.push(a)}return r}};function ny(e,t,r){let i=e.createShader(t);return e.shaderSource(i,r),e.compileShader(i),i}var Pb=37297,Nb=0;function Lb(e,t){let r=e.split(`
`),i=[],n=Math.max(t-6,0),a=Math.min(t+6,r.length);for(let s=n;s<a;s++){let o=s+1;i.push(`${o===t?">":" "} ${o}: ${r[s]}`)}return i.join(`
`)}var ay=new lt;function Db(e){pt._getMatrix(ay,pt.workingColorSpace,e);let t=`mat3( ${ay.elements.map(r=>r.toFixed(4))} )`;switch(pt.getTransfer(e)){case Ic:return[t,"LinearTransferOETF"];case gt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function sy(e,t,r){let i=e.getShaderParameter(t,e.COMPILE_STATUS),n=e.getShaderInfoLog(t).trim();if(i&&n==="")return"";let a=/ERROR: 0:(\d+)/.exec(n);if(a){let s=parseInt(a[1]);return r.toUpperCase()+`

`+n+`

`+Lb(e.getShaderSource(t),s)}else return n}function Ub(e,t){let r=Db(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${r[1]}( vec4( value.rgb * ${r[0]}, value.a ) );`,"}"].join(`
`)}function Ib(e,t){let r;switch(t){case Fy:r="Linear";break;case zy:r="Reinhard";break;case By:r="Cineon";break;case $f:r="ACESFilmic";break;case Vy:r="AgX";break;case Hy:r="Neutral";break;case aE:r="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),r="Linear"}return"vec3 "+e+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}var lc=new L;function Ob(){pt.getLuminanceCoefficients(lc);let e=lc.x.toFixed(4),t=lc.y.toFixed(4),r=lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${r} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kb(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function Fb(e){let t=[];for(let r in e){let i=e[r];i!==!1&&t.push("#define "+r+" "+i)}return t.join(`
`)}function zb(e,t){let r={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let a=e.getActiveAttrib(t,n),s=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),r[s]={type:a.type,location:e.getAttribLocation(t,s),locationSize:o}}return r}function rl(e){return e!==""}function oy(e,t){let r=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ly(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Bb=/^[ \t]*#include +<([\w\d./]+)>/gm;function kf(e){return e.replace(Bb,Hb)}var Vb=new Map;function Hb(e,t){let r=ot[t];if(r===void 0){let i=Vb.get(t);if(i!==void 0)r=ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return kf(r)}var Gb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uy(e){return e.replace(Gb,Wb)}function Wb(e,t,r,i){let n="";for(let a=parseInt(t);a<parseInt(r);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function cy(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function Xb(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Iy?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Oy?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Yi&&(t="SHADOWMAP_TYPE_VSM"),t}function jb(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Us:case Is:t="ENVMAP_TYPE_CUBE";break;case Uc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $b(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Is&&(t="ENVMAP_MODE_REFRACTION"),t}function qb(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case ky:t="ENVMAP_BLENDING_MULTIPLY";break;case iE:t="ENVMAP_BLENDING_MIX";break;case nE:t="ENVMAP_BLENDING_ADD";break}return t}function Yb(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let r=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,r),112)),texelHeight:i,maxMip:r}}function Kb(e,t,r,i){let n=e.getContext(),a=r.defines,s=r.vertexShader,o=r.fragmentShader,l=Xb(r),u=jb(r),c=$b(r),h=qb(r),p=Yb(r),f=kb(r),y=Fb(a),_=n.createProgram(),v,d,g=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(v=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,y].filter(rl).join(`
`),v.length>0&&(v+=`
`),d=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,y].filter(rl).join(`
`),d.length>0&&(d+=`
`)):(v=[cy(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,y,r.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",r.batching?"#define USE_BATCHING":"",r.batchingColor?"#define USE_BATCHING_COLOR":"",r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.instancingMorph?"#define USE_INSTANCING_MORPH":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+c:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),d=[cy(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,y,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+u:"",r.envMap?"#define "+c:"",r.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.dispersion?"#define USE_DISPERSION":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor||r.batchingColor?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",r.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==Fn?"#define TONE_MAPPING":"",r.toneMapping!==Fn?ot.tonemapping_pars_fragment:"",r.toneMapping!==Fn?Ib("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,Ub("linearToOutputTexel",r.outputColorSpace),Ob(),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(rl).join(`
`)),s=kf(s),s=oy(s,r),s=ly(s,r),o=kf(o),o=oy(o,r),o=ly(o,r),s=uy(s),o=uy(o),r.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,d=["#define varying in",r.glslVersion===w_?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===w_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let m=g+v+s,x=g+d+o,P=ny(n,n.VERTEX_SHADER,m),T=ny(n,n.FRAGMENT_SHADER,x);n.attachShader(_,P),n.attachShader(_,T),r.index0AttributeName!==void 0?n.bindAttribLocation(_,0,r.index0AttributeName):r.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function b(N){if(e.debug.checkShaderErrors){let k=n.getProgramInfoLog(_).trim(),V=n.getShaderInfoLog(P).trim(),W=n.getShaderInfoLog(T).trim(),j=!0,X=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(j=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(n,_,P,T);else{let ae=sy(n,P,"vertex"),$=sy(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+k+`
`+ae+`
`+$)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(V===""||W==="")&&(X=!1);X&&(N.diagnostics={runnable:j,programLog:k,vertexShader:{log:V,prefix:v},fragmentShader:{log:W,prefix:d}})}n.deleteShader(P),n.deleteShader(T),R=new Rc(n,_),w=zb(n,_)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let S=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=n.getProgramParameter(_,Pb)),S},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=Nb++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=T,this}var Jb=0,Zb=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(t),n=this._getShaderStage(r),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){let t=this.shaderCache,r=t.get(e);return r===void 0&&(r=new Qb(e),t.set(e,r)),r}},Qb=class{constructor(e){this.id=Jb++,this.code=e,this.usedTimes=0}};function eA(e,t,r,i,n,a,s){let o=new c1,l=new Zb,u=new Set,c=[],h=n.logarithmicDepthBuffer,p=n.vertexTextures,f=n.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return u.add(w),w===0?"uv":`uv${w}`}function v(w,S,N,k,V){let W=k.fog,j=V.geometry,X=w.isMeshStandardMaterial?k.environment:null,ae=(w.isMeshStandardMaterial?r:t).get(w.envMap||X),$=ae&&ae.mapping===Uc?ae.image.height:null,de=y[w.type];w.precision!==null&&(f=n.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let Me=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ze=Me!==void 0?Me.length:0,tt=0;j.morphAttributes.position!==void 0&&(tt=1),j.morphAttributes.normal!==void 0&&(tt=2),j.morphAttributes.color!==void 0&&(tt=3);let K,ce,ke,Le;if(de){let dt=Ti[de];K=dt.vertexShader,ce=dt.fragmentShader}else K=w.vertexShader,ce=w.fragmentShader,l.update(w),ke=l.getVertexShaderID(w),Le=l.getFragmentShaderID(w);let ge=e.getRenderTarget(),Ye=e.state.buffers.depth.getReversed(),it=V.isInstancedMesh===!0,Je=V.isBatchedMesh===!0,Z=!!w.map,pe=!!w.matcap,C=!!ae,Ce=!!w.aoMap,le=!!w.lightMap,Ie=!!w.bumpMap,se=!!w.normalMap,We=!!w.displacementMap,Te=!!w.emissiveMap,be=!!w.metalnessMap,A=!!w.roughnessMap,E=w.anisotropy>0,F=w.clearcoat>0,J=w.dispersion>0,te=w.iridescence>0,q=w.sheen>0,Ve=w.transmission>0,ye=E&&!!w.anisotropyMap,xe=F&&!!w.clearcoatMap,qe=F&&!!w.clearcoatNormalMap,he=F&&!!w.clearcoatRoughnessMap,Ae=te&&!!w.iridescenceMap,nt=te&&!!w.iridescenceThicknessMap,Ke=q&&!!w.sheenColorMap,Re=q&&!!w.sheenRoughnessMap,Qe=!!w.specularMap,at=!!w.specularColorMap,St=!!w.specularIntensityMap,O=Ve&&!!w.transmissionMap,re=Ve&&!!w.thicknessMap,Y=!!w.gradientMap,Q=!!w.alphaMap,we=w.alphaTest>0,_e=!!w.alphaHash,ht=!!w.extensions,Dt=Fn;w.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Dt=e.toneMapping);let Ht={shaderID:de,shaderType:w.type,shaderName:w.name,vertexShader:K,fragmentShader:ce,defines:w.defines,customVertexShaderID:ke,customFragmentShaderID:Le,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Je,batchingColor:Je&&V._colorsTexture!==null,instancing:it,instancingColor:it&&V.instanceColor!==null,instancingMorph:it&&V.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ge===null?e.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:zs,alphaToCoverage:!!w.alphaToCoverage,map:Z,matcap:pe,envMap:C,envMapMode:C&&ae.mapping,envMapCubeUVHeight:$,aoMap:Ce,lightMap:le,bumpMap:Ie,normalMap:se,displacementMap:p&&We,emissiveMap:Te,normalMapObjectSpace:se&&w.normalMapType===uE,normalMapTangentSpace:se&&w.normalMapType===Qy,metalnessMap:be,roughnessMap:A,anisotropy:E,anisotropyMap:ye,clearcoat:F,clearcoatMap:xe,clearcoatNormalMap:qe,clearcoatRoughnessMap:he,dispersion:J,iridescence:te,iridescenceMap:Ae,iridescenceThicknessMap:nt,sheen:q,sheenColorMap:Ke,sheenRoughnessMap:Re,specularMap:Qe,specularColorMap:at,specularIntensityMap:St,transmission:Ve,transmissionMap:O,thicknessMap:re,gradientMap:Y,opaque:w.transparent===!1&&w.blending===Cs&&w.alphaToCoverage===!1,alphaMap:Q,alphaTest:we,alphaHash:_e,combine:w.combine,mapUv:Z&&_(w.map.channel),aoMapUv:Ce&&_(w.aoMap.channel),lightMapUv:le&&_(w.lightMap.channel),bumpMapUv:Ie&&_(w.bumpMap.channel),normalMapUv:se&&_(w.normalMap.channel),displacementMapUv:We&&_(w.displacementMap.channel),emissiveMapUv:Te&&_(w.emissiveMap.channel),metalnessMapUv:be&&_(w.metalnessMap.channel),roughnessMapUv:A&&_(w.roughnessMap.channel),anisotropyMapUv:ye&&_(w.anisotropyMap.channel),clearcoatMapUv:xe&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:qe&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(w.sheenRoughnessMap.channel),specularMapUv:Qe&&_(w.specularMap.channel),specularColorMapUv:at&&_(w.specularColorMap.channel),specularIntensityMapUv:St&&_(w.specularIntensityMap.channel),transmissionMapUv:O&&_(w.transmissionMap.channel),thicknessMapUv:re&&_(w.thicknessMap.channel),alphaMapUv:Q&&_(w.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(se||E),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!j.attributes.uv&&(Z||Q),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ye,skinning:V.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Ze,morphTextureStride:tt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:e.shadowMap.enabled&&N.length>0,shadowMapType:e.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Z&&w.map.isVideoTexture===!0&&pt.getTransfer(w.map.colorSpace)===gt,decodeVideoTextureEmissive:Te&&w.emissiveMap.isVideoTexture===!0&&pt.getTransfer(w.emissiveMap.colorSpace)===gt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===bi,flipSided:w.side===Tr,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ht&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&w.extensions.multiDraw===!0||Je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ht.vertexUv1s=u.has(1),Ht.vertexUv2s=u.has(2),Ht.vertexUv3s=u.has(3),u.clear(),Ht}function d(w){let S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(let N in w.defines)S.push(N),S.push(w.defines[N]);return w.isRawShaderMaterial===!1&&(g(S,w),m(S,w),S.push(e.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function g(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function m(w,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),w.push(o.mask)}function x(w){let S=y[w.type],N;if(S){let k=Ti[S];N=ll.clone(k.uniforms)}else N=w.uniforms;return N}function P(w,S){let N;for(let k=0,V=c.length;k<V;k++){let W=c[k];if(W.cacheKey===S){N=W,++N.usedTimes;break}}return N===void 0&&(N=new Kb(e,S,w,a),c.push(N)),N}function T(w){if(--w.usedTimes===0){let S=c.indexOf(w);c[S]=c[c.length-1],c.pop(),w.destroy()}}function b(w){l.remove(w)}function R(){l.dispose()}return{getParameters:v,getProgramCacheKey:d,getUniforms:x,acquireProgram:P,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:R}}function tA(){let e=new WeakMap;function t(s){return e.has(s)}function r(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function n(s,o,l){e.get(s)[o]=l}function a(){e=new WeakMap}return{has:t,get:r,remove:i,update:n,dispose:a}}function rA(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function hy(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function dy(){let e=[],t=0,r=[],i=[],n=[];function a(){t=0,r.length=0,i.length=0,n.length=0}function s(h,p,f,y,_,v){let d=e[t];return d===void 0?(d={id:h.id,object:h,geometry:p,material:f,groupOrder:y,renderOrder:h.renderOrder,z:_,group:v},e[t]=d):(d.id=h.id,d.object=h,d.geometry=p,d.material=f,d.groupOrder=y,d.renderOrder=h.renderOrder,d.z=_,d.group=v),t++,d}function o(h,p,f,y,_,v){let d=s(h,p,f,y,_,v);f.transmission>0?i.push(d):f.transparent===!0?n.push(d):r.push(d)}function l(h,p,f,y,_,v){let d=s(h,p,f,y,_,v);f.transmission>0?i.unshift(d):f.transparent===!0?n.unshift(d):r.unshift(d)}function u(h,p){r.length>1&&r.sort(h||rA),i.length>1&&i.sort(p||hy),n.length>1&&n.sort(p||hy)}function c(){for(let h=t,p=e.length;h<p;h++){let f=e[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:r,transmissive:i,transparent:n,init:a,push:o,unshift:l,finish:c,sort:u}}function iA(){let e=new WeakMap;function t(i,n){let a=e.get(i),s;return a===void 0?(s=new dy,e.set(i,[s])):n>=a.length?(s=new dy,a.push(s)):s=a[n],s}function r(){e=new WeakMap}return{get:t,dispose:r}}function nA(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let r;switch(t.type){case"DirectionalLight":r={direction:new L,color:new $e};break;case"SpotLight":r={position:new L,direction:new L,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new L,color:new $e,distance:0,decay:0};break;case"HemisphereLight":r={direction:new L,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":r={color:new $e,position:new L,halfWidth:new L,halfHeight:new L};break}return e[t.id]=r,r}}}function aA(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let r;switch(t.type){case"DirectionalLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=r,r}}}var sA=0;function oA(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function lA(e){let t=new nA,r=aA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new L);let n=new L,a=new bt,s=new bt;function o(u){let c=0,h=0,p=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,y=0,_=0,v=0,d=0,g=0,m=0,x=0,P=0,T=0,b=0;u.sort(oA);for(let w=0,S=u.length;w<S;w++){let N=u[w],k=N.color,V=N.intensity,W=N.distance,j=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)c+=k.r*V,h+=k.g*V,p+=k.b*V;else if(N.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(N.sh.coefficients[X],V);b++}else if(N.isDirectionalLight){let X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ae=N.shadow,$=r.get(N);$.shadowIntensity=ae.intensity,$.shadowBias=ae.bias,$.shadowNormalBias=ae.normalBias,$.shadowRadius=ae.radius,$.shadowMapSize=ae.mapSize,i.directionalShadow[f]=$,i.directionalShadowMap[f]=j,i.directionalShadowMatrix[f]=N.shadow.matrix,g++}i.directional[f]=X,f++}else if(N.isSpotLight){let X=t.get(N);X.position.setFromMatrixPosition(N.matrixWorld),X.color.copy(k).multiplyScalar(V),X.distance=W,X.coneCos=Math.cos(N.angle),X.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),X.decay=N.decay,i.spot[_]=X;let ae=N.shadow;if(N.map&&(i.spotLightMap[P]=N.map,P++,ae.updateMatrices(N),N.castShadow&&T++),i.spotLightMatrix[_]=ae.matrix,N.castShadow){let $=r.get(N);$.shadowIntensity=ae.intensity,$.shadowBias=ae.bias,$.shadowNormalBias=ae.normalBias,$.shadowRadius=ae.radius,$.shadowMapSize=ae.mapSize,i.spotShadow[_]=$,i.spotShadowMap[_]=j,x++}_++}else if(N.isRectAreaLight){let X=t.get(N);X.color.copy(k).multiplyScalar(V),X.halfWidth.set(N.width*.5,0,0),X.halfHeight.set(0,N.height*.5,0),i.rectArea[v]=X,v++}else if(N.isPointLight){let X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),X.distance=N.distance,X.decay=N.decay,N.castShadow){let ae=N.shadow,$=r.get(N);$.shadowIntensity=ae.intensity,$.shadowBias=ae.bias,$.shadowNormalBias=ae.normalBias,$.shadowRadius=ae.radius,$.shadowMapSize=ae.mapSize,$.shadowCameraNear=ae.camera.near,$.shadowCameraFar=ae.camera.far,i.pointShadow[y]=$,i.pointShadowMap[y]=j,i.pointShadowMatrix[y]=N.shadow.matrix,m++}i.point[y]=X,y++}else if(N.isHemisphereLight){let X=t.get(N);X.skyColor.copy(N.color).multiplyScalar(V),X.groundColor.copy(N.groundColor).multiplyScalar(V),i.hemi[d]=X,d++}}v>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=p;let R=i.hash;(R.directionalLength!==f||R.pointLength!==y||R.spotLength!==_||R.rectAreaLength!==v||R.hemiLength!==d||R.numDirectionalShadows!==g||R.numPointShadows!==m||R.numSpotShadows!==x||R.numSpotMaps!==P||R.numLightProbes!==b)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=v,i.point.length=y,i.hemi.length=d,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=m,i.pointShadowMap.length=m,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=m,i.spotLightMatrix.length=x+P-T,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=b,R.directionalLength=f,R.pointLength=y,R.spotLength=_,R.rectAreaLength=v,R.hemiLength=d,R.numDirectionalShadows=g,R.numPointShadows=m,R.numSpotShadows=x,R.numSpotMaps=P,R.numLightProbes=b,i.version=sA++)}function l(u,c){let h=0,p=0,f=0,y=0,_=0,v=c.matrixWorldInverse;for(let d=0,g=u.length;d<g;d++){let m=u[d];if(m.isDirectionalLight){let x=i.directional[h];x.direction.setFromMatrixPosition(m.matrixWorld),n.setFromMatrixPosition(m.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(v),h++}else if(m.isSpotLight){let x=i.spot[f];x.position.setFromMatrixPosition(m.matrixWorld),x.position.applyMatrix4(v),x.direction.setFromMatrixPosition(m.matrixWorld),n.setFromMatrixPosition(m.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(v),f++}else if(m.isRectAreaLight){let x=i.rectArea[y];x.position.setFromMatrixPosition(m.matrixWorld),x.position.applyMatrix4(v),s.identity(),a.copy(m.matrixWorld),a.premultiply(v),s.extractRotation(a),x.halfWidth.set(m.width*.5,0,0),x.halfHeight.set(0,m.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),y++}else if(m.isPointLight){let x=i.point[p];x.position.setFromMatrixPosition(m.matrixWorld),x.position.applyMatrix4(v),p++}else if(m.isHemisphereLight){let x=i.hemi[_];x.direction.setFromMatrixPosition(m.matrixWorld),x.direction.transformDirection(v),_++}}}return{setup:o,setupView:l,state:i}}function py(e){let t=new lA(e),r=[],i=[];function n(c){u.camera=c,r.length=0,i.length=0}function a(c){r.push(c)}function s(c){i.push(c)}function o(){t.setup(r)}function l(c){t.setupView(r,c)}let u={lightsArray:r,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:u,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function uA(e){let t=new WeakMap;function r(n,a=0){let s=t.get(n),o;return s===void 0?(o=new py(e),t.set(n,[o])):a>=s.length?(o=new py(e),s.push(o)):o=s[a],o}function i(){t=new WeakMap}return{get:r,dispose:i}}var cA=class extends Sa{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=oE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},hA=class extends Sa{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},dA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pA=`uniform sampler2D shadow_pass;
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
}`;function fA(e,t,r){let i=new tm,n=new ne,a=new ne,s=new Tt,o=new cA({depthPacking:lE}),l=new hA,u={},c=r.maxTextureSize,h={[zn]:Tr,[Tr]:zn,[bi]:bi},p=new sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:dA,fragmentShader:pA}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let y=new rr;y.setAttribute("position",new vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ge(y,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Iy;let d=this.type;this.render=function(T,b,R){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||T.length===0)return;let w=e.getRenderTarget(),S=e.getActiveCubeFace(),N=e.getActiveMipmapLevel(),k=e.state;k.setBlending(Zi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let V=d!==Yi&&this.type===Yi,W=d===Yi&&this.type!==Yi;for(let j=0,X=T.length;j<X;j++){let ae=T[j],$=ae.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;n.copy($.mapSize);let de=$.getFrameExtents();if(n.multiply(de),a.copy($.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(a.x=Math.floor(c/de.x),n.x=a.x*de.x,$.mapSize.x=a.x),n.y>c&&(a.y=Math.floor(c/de.y),n.y=a.y*de.y,$.mapSize.y=a.y)),$.map===null||V===!0||W===!0){let Ze=this.type!==Yi?{minFilter:Xr,magFilter:Xr}:{};$.map!==null&&$.map.dispose(),$.map=new gi(n.x,n.y,Ze),$.map.texture.name=ae.name+".shadowMap",$.camera.updateProjectionMatrix()}e.setRenderTarget($.map),e.clear();let Me=$.getViewportCount();for(let Ze=0;Ze<Me;Ze++){let tt=$.getViewport(Ze);s.set(a.x*tt.x,a.y*tt.y,a.x*tt.z,a.y*tt.w),k.viewport(s),$.updateMatrices(ae,Ze),i=$.getFrustum(),x(b,R,$.camera,ae,this.type)}$.isPointLightShadow!==!0&&this.type===Yi&&g($,R),$.needsUpdate=!1}d=this.type,v.needsUpdate=!1,e.setRenderTarget(w,S,N)};function g(T,b){let R=t.update(_);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new gi(n.x,n.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(b,null,R,p,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(b,null,R,f,_,null)}function m(T,b,R,w){let S=null,N=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)S=N;else if(S=R.isPointLight===!0?l:o,e.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let k=S.uuid,V=b.uuid,W=u[k];W===void 0&&(W={},u[k]=W);let j=W[V];j===void 0&&(j=S.clone(),W[V]=j,b.addEventListener("dispose",P)),S=j}if(S.visible=b.visible,S.wireframe=b.wireframe,w===Yi?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:h[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let k=e.properties.get(S);k.light=R}return S}function x(T,b,R,w,S){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Yi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);let k=t.update(T),V=T.material;if(Array.isArray(V)){let W=k.groups;for(let j=0,X=W.length;j<X;j++){let ae=W[j],$=V[ae.materialIndex];if($&&$.visible){let de=m(T,$,w,S);T.onBeforeShadow(e,T,b,R,k,de,ae),e.renderBufferDirect(R,null,k,de,T,ae),T.onAfterShadow(e,T,b,R,k,de,ae)}}}else if(V.visible){let W=m(T,V,w,S);T.onBeforeShadow(e,T,b,R,k,W,null),e.renderBufferDirect(R,null,k,W,T,null),T.onAfterShadow(e,T,b,R,k,W,null)}}let N=T.children;for(let k=0,V=N.length;k<V;k++)x(N[k],b,R,w,S)}function P(T){T.target.removeEventListener("dispose",P);for(let b in u){let R=u[b],w=T.target.uuid;w in R&&(R[w].dispose(),delete R[w])}}}var mA={[Yp]:Kp,[Jp]:ef,[Zp]:tf,[Ds]:Qp,[Kp]:Yp,[ef]:Jp,[tf]:Zp,[Qp]:Ds};function gA(e,t){function r(){let O=!1,re=new Tt,Y=null,Q=new Tt(0,0,0,0);return{setMask:function(we){Y!==we&&!O&&(e.colorMask(we,we,we,we),Y=we)},setLocked:function(we){O=we},setClear:function(we,_e,ht,Dt,Ht){Ht===!0&&(we*=Dt,_e*=Dt,ht*=Dt),re.set(we,_e,ht,Dt),Q.equals(re)===!1&&(e.clearColor(we,_e,ht,Dt),Q.copy(re))},reset:function(){O=!1,Y=null,Q.set(-1,0,0,0)}}}function i(){let O=!1,re=!1,Y=null,Q=null,we=null;return{setReversed:function(_e){if(re!==_e){let ht=t.get("EXT_clip_control");re?ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.ZERO_TO_ONE_EXT):ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.NEGATIVE_ONE_TO_ONE_EXT);let Dt=we;we=null,this.setClear(Dt)}re=_e},getReversed:function(){return re},setTest:function(_e){_e?ge(e.DEPTH_TEST):Ye(e.DEPTH_TEST)},setMask:function(_e){Y!==_e&&!O&&(e.depthMask(_e),Y=_e)},setFunc:function(_e){if(re&&(_e=mA[_e]),Q!==_e){switch(_e){case Yp:e.depthFunc(e.NEVER);break;case Kp:e.depthFunc(e.ALWAYS);break;case Jp:e.depthFunc(e.LESS);break;case Ds:e.depthFunc(e.LEQUAL);break;case Zp:e.depthFunc(e.EQUAL);break;case Qp:e.depthFunc(e.GEQUAL);break;case ef:e.depthFunc(e.GREATER);break;case tf:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Q=_e}},setLocked:function(_e){O=_e},setClear:function(_e){we!==_e&&(re&&(_e=1-_e),e.clearDepth(_e),we=_e)},reset:function(){O=!1,Y=null,Q=null,we=null,re=!1}}}function n(){let O=!1,re=null,Y=null,Q=null,we=null,_e=null,ht=null,Dt=null,Ht=null;return{setTest:function(dt){O||(dt?ge(e.STENCIL_TEST):Ye(e.STENCIL_TEST))},setMask:function(dt){re!==dt&&!O&&(e.stencilMask(dt),re=dt)},setFunc:function(dt,jr,Lr){(Y!==dt||Q!==jr||we!==Lr)&&(e.stencilFunc(dt,jr,Lr),Y=dt,Q=jr,we=Lr)},setOp:function(dt,jr,Lr){(_e!==dt||ht!==jr||Dt!==Lr)&&(e.stencilOp(dt,jr,Lr),_e=dt,ht=jr,Dt=Lr)},setLocked:function(dt){O=dt},setClear:function(dt){Ht!==dt&&(e.clearStencil(dt),Ht=dt)},reset:function(){O=!1,re=null,Y=null,Q=null,we=null,_e=null,ht=null,Dt=null,Ht=null}}}let a=new r,s=new i,o=new n,l=new WeakMap,u=new WeakMap,c={},h={},p=new WeakMap,f=[],y=null,_=!1,v=null,d=null,g=null,m=null,x=null,P=null,T=null,b=new $e(0,0,0),R=0,w=!1,S=null,N=null,k=null,V=null,W=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ae=0,$=e.getParameter(e.VERSION);$.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec($)[1]),X=ae>=1):$.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=ae>=2);let de=null,Me={},Ze=e.getParameter(e.SCISSOR_BOX),tt=e.getParameter(e.VIEWPORT),K=new Tt().fromArray(Ze),ce=new Tt().fromArray(tt);function ke(O,re,Y,Q){let we=new Uint8Array(4),_e=e.createTexture();e.bindTexture(O,_e),e.texParameteri(O,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(O,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ht=0;ht<Y;ht++)O===e.TEXTURE_3D||O===e.TEXTURE_2D_ARRAY?e.texImage3D(re,0,e.RGBA,1,1,Q,0,e.RGBA,e.UNSIGNED_BYTE,we):e.texImage2D(re+ht,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,we);return _e}let Le={};Le[e.TEXTURE_2D]=ke(e.TEXTURE_2D,e.TEXTURE_2D,1),Le[e.TEXTURE_CUBE_MAP]=ke(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[e.TEXTURE_2D_ARRAY]=ke(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Le[e.TEXTURE_3D]=ke(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ge(e.DEPTH_TEST),s.setFunc(Ds),Ie(!1),se(v_),ge(e.CULL_FACE),Ce(Zi);function ge(O){c[O]!==!0&&(e.enable(O),c[O]=!0)}function Ye(O){c[O]!==!1&&(e.disable(O),c[O]=!1)}function it(O,re){return h[O]!==re?(e.bindFramebuffer(O,re),h[O]=re,O===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=re),O===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=re),!0):!1}function Je(O,re){let Y=f,Q=!1;if(O){Y=p.get(re),Y===void 0&&(Y=[],p.set(re,Y));let we=O.textures;if(Y.length!==we.length||Y[0]!==e.COLOR_ATTACHMENT0){for(let _e=0,ht=we.length;_e<ht;_e++)Y[_e]=e.COLOR_ATTACHMENT0+_e;Y.length=we.length,Q=!0}}else Y[0]!==e.BACK&&(Y[0]=e.BACK,Q=!0);Q&&e.drawBuffers(Y)}function Z(O){return y!==O?(e.useProgram(O),y=O,!0):!1}let pe={[fa]:e.FUNC_ADD,[BM]:e.FUNC_SUBTRACT,[VM]:e.FUNC_REVERSE_SUBTRACT};pe[HM]=e.MIN,pe[GM]=e.MAX;let C={[WM]:e.ZERO,[XM]:e.ONE,[jM]:e.SRC_COLOR,[$p]:e.SRC_ALPHA,[ZM]:e.SRC_ALPHA_SATURATE,[KM]:e.DST_COLOR,[qM]:e.DST_ALPHA,[$M]:e.ONE_MINUS_SRC_COLOR,[qp]:e.ONE_MINUS_SRC_ALPHA,[JM]:e.ONE_MINUS_DST_COLOR,[YM]:e.ONE_MINUS_DST_ALPHA,[QM]:e.CONSTANT_COLOR,[eE]:e.ONE_MINUS_CONSTANT_COLOR,[tE]:e.CONSTANT_ALPHA,[rE]:e.ONE_MINUS_CONSTANT_ALPHA};function Ce(O,re,Y,Q,we,_e,ht,Dt,Ht,dt){if(O===Zi){_===!0&&(Ye(e.BLEND),_=!1);return}if(_===!1&&(ge(e.BLEND),_=!0),O!==zM){if(O!==v||dt!==w){if((d!==fa||x!==fa)&&(e.blendEquation(e.FUNC_ADD),d=fa,x=fa),dt)switch(O){case Cs:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Rs:e.blendFunc(e.ONE,e.ONE);break;case __:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case y_:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Cs:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Rs:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case __:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case y_:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}g=null,m=null,P=null,T=null,b.set(0,0,0),R=0,v=O,w=dt}return}we=we||re,_e=_e||Y,ht=ht||Q,(re!==d||we!==x)&&(e.blendEquationSeparate(pe[re],pe[we]),d=re,x=we),(Y!==g||Q!==m||_e!==P||ht!==T)&&(e.blendFuncSeparate(C[Y],C[Q],C[_e],C[ht]),g=Y,m=Q,P=_e,T=ht),(Dt.equals(b)===!1||Ht!==R)&&(e.blendColor(Dt.r,Dt.g,Dt.b,Ht),b.copy(Dt),R=Ht),v=O,w=!1}function le(O,re){O.side===bi?Ye(e.CULL_FACE):ge(e.CULL_FACE);let Y=O.side===Tr;re&&(Y=!Y),Ie(Y),O.blending===Cs&&O.transparent===!1?Ce(Zi):Ce(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),a.setMask(O.colorWrite);let Q=O.stencilWrite;o.setTest(Q),Q&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Te(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ge(e.SAMPLE_ALPHA_TO_COVERAGE):Ye(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(O){S!==O&&(O?e.frontFace(e.CW):e.frontFace(e.CCW),S=O)}function se(O){O!==kM?(ge(e.CULL_FACE),O!==N&&(O===v_?e.cullFace(e.BACK):O===FM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ye(e.CULL_FACE),N=O}function We(O){O!==k&&(X&&e.lineWidth(O),k=O)}function Te(O,re,Y){O?(ge(e.POLYGON_OFFSET_FILL),(V!==re||W!==Y)&&(e.polygonOffset(re,Y),V=re,W=Y)):Ye(e.POLYGON_OFFSET_FILL)}function be(O){O?ge(e.SCISSOR_TEST):Ye(e.SCISSOR_TEST)}function A(O){O===void 0&&(O=e.TEXTURE0+j-1),de!==O&&(e.activeTexture(O),de=O)}function E(O,re,Y){Y===void 0&&(de===null?Y=e.TEXTURE0+j-1:Y=de);let Q=Me[Y];Q===void 0&&(Q={type:void 0,texture:void 0},Me[Y]=Q),(Q.type!==O||Q.texture!==re)&&(de!==Y&&(e.activeTexture(Y),de=Y),e.bindTexture(O,re||Le[O]),Q.type=O,Q.texture=re)}function F(){let O=Me[de];O!==void 0&&O.type!==void 0&&(e.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function J(){try{e.compressedTexImage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{e.compressedTexImage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{e.texSubImage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ve(){try{e.texSubImage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function qe(){try{e.texStorage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{e.texStorage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{e.texImage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{e.texImage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ke(O){K.equals(O)===!1&&(e.scissor(O.x,O.y,O.z,O.w),K.copy(O))}function Re(O){ce.equals(O)===!1&&(e.viewport(O.x,O.y,O.z,O.w),ce.copy(O))}function Qe(O,re){let Y=u.get(re);Y===void 0&&(Y=new WeakMap,u.set(re,Y));let Q=Y.get(O);Q===void 0&&(Q=e.getUniformBlockIndex(re,O.name),Y.set(O,Q))}function at(O,re){let Y=u.get(re).get(O);l.get(re)!==Y&&(e.uniformBlockBinding(re,Y,O.__bindingPointIndex),l.set(re,Y))}function St(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},de=null,Me={},h={},p=new WeakMap,f=[],y=null,_=!1,v=null,d=null,g=null,m=null,x=null,P=null,T=null,b=new $e(0,0,0),R=0,w=!1,S=null,N=null,k=null,V=null,W=null,K.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:ge,disable:Ye,bindFramebuffer:it,drawBuffers:Je,useProgram:Z,setBlending:Ce,setMaterial:le,setFlipSided:Ie,setCullFace:se,setLineWidth:We,setPolygonOffset:Te,setScissorTest:be,activeTexture:A,bindTexture:E,unbindTexture:F,compressedTexImage2D:J,compressedTexImage3D:te,texImage2D:Ae,texImage3D:nt,updateUBOMapping:Qe,uniformBlockBinding:at,texStorage2D:qe,texStorage3D:he,texSubImage2D:q,texSubImage3D:Ve,compressedTexSubImage2D:ye,compressedTexSubImage3D:xe,scissor:Ke,viewport:Re,reset:St}}function fy(e,t,r,i){let n=vA(i);switch(r){case $y:return e*t;case Yy:return e*t;case Ky:return e*t*2;case Jf:return e*t/n.components*n.byteLength;case Zf:return e*t/n.components*n.byteLength;case Jy:return e*t*2/n.components*n.byteLength;case Qf:return e*t*2/n.components*n.byteLength;case qy:return e*t*3/n.components*n.byteLength;case mi:return e*t*4/n.components*n.byteLength;case em:return e*t*4/n.components*n.byteLength;case Mc:case Ec:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case wc:case Tc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case of:case uf:return Math.max(e,16)*Math.max(t,8)/4;case sf:case lf:return Math.max(e,8)*Math.max(t,8)/2;case cf:case hf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case df:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ff:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case mf:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case gf:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case vf:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case _f:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case yf:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case xf:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Sf:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Mf:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ef:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case wf:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Tf:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case bf:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case bc:case Af:case Cf:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Zy:case Rf:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Pf:case Nf:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${r} format.`)}function vA(e){switch(e){case nn:case Wy:return{byteLength:1,components:1};case ol:case Xy:case Qi:return{byteLength:2,components:1};case Yf:case Kf:return{byteLength:2,components:4};case _a:case qf:case Ri:return{byteLength:4,components:1};case jy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function _A(e,t,r,i,n,a,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ne,c=new WeakMap,h,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,E){return f?new OffscreenCanvas(A,E):Dc("canvas")}function _(A,E,F){let J=1,te=be(A);if((te.width>F||te.height>F)&&(J=F/Math.max(te.width,te.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let q=Math.floor(J*te.width),Ve=Math.floor(J*te.height);h===void 0&&(h=y(q,Ve));let ye=E?y(q,Ve):h;return ye.width=q,ye.height=Ve,ye.getContext("2d").drawImage(A,0,0,q,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+q+"x"+Ve+")."),ye}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function v(A){return A.generateMipmaps}function d(A){e.generateMipmap(A)}function g(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function m(A,E,F,J,te=!1){if(A!==null){if(e[A]!==void 0)return e[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=E;if(E===e.RED&&(F===e.FLOAT&&(q=e.R32F),F===e.HALF_FLOAT&&(q=e.R16F),F===e.UNSIGNED_BYTE&&(q=e.R8)),E===e.RED_INTEGER&&(F===e.UNSIGNED_BYTE&&(q=e.R8UI),F===e.UNSIGNED_SHORT&&(q=e.R16UI),F===e.UNSIGNED_INT&&(q=e.R32UI),F===e.BYTE&&(q=e.R8I),F===e.SHORT&&(q=e.R16I),F===e.INT&&(q=e.R32I)),E===e.RG&&(F===e.FLOAT&&(q=e.RG32F),F===e.HALF_FLOAT&&(q=e.RG16F),F===e.UNSIGNED_BYTE&&(q=e.RG8)),E===e.RG_INTEGER&&(F===e.UNSIGNED_BYTE&&(q=e.RG8UI),F===e.UNSIGNED_SHORT&&(q=e.RG16UI),F===e.UNSIGNED_INT&&(q=e.RG32UI),F===e.BYTE&&(q=e.RG8I),F===e.SHORT&&(q=e.RG16I),F===e.INT&&(q=e.RG32I)),E===e.RGB_INTEGER&&(F===e.UNSIGNED_BYTE&&(q=e.RGB8UI),F===e.UNSIGNED_SHORT&&(q=e.RGB16UI),F===e.UNSIGNED_INT&&(q=e.RGB32UI),F===e.BYTE&&(q=e.RGB8I),F===e.SHORT&&(q=e.RGB16I),F===e.INT&&(q=e.RGB32I)),E===e.RGBA_INTEGER&&(F===e.UNSIGNED_BYTE&&(q=e.RGBA8UI),F===e.UNSIGNED_SHORT&&(q=e.RGBA16UI),F===e.UNSIGNED_INT&&(q=e.RGBA32UI),F===e.BYTE&&(q=e.RGBA8I),F===e.SHORT&&(q=e.RGBA16I),F===e.INT&&(q=e.RGBA32I)),E===e.RGB&&F===e.UNSIGNED_INT_5_9_9_9_REV&&(q=e.RGB9_E5),E===e.RGBA){let Ve=te?Ic:pt.getTransfer(J);F===e.FLOAT&&(q=e.RGBA32F),F===e.HALF_FLOAT&&(q=e.RGBA16F),F===e.UNSIGNED_BYTE&&(q=Ve===gt?e.SRGB8_ALPHA8:e.RGBA8),F===e.UNSIGNED_SHORT_4_4_4_4&&(q=e.RGBA4),F===e.UNSIGNED_SHORT_5_5_5_1&&(q=e.RGB5_A1)}return(q===e.R16F||q===e.R32F||q===e.RG16F||q===e.RG32F||q===e.RGBA16F||q===e.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(A,E){let F;return A?E===null||E===_a||E===Os?F=e.DEPTH24_STENCIL8:E===Ri?F=e.DEPTH32F_STENCIL8:E===ol&&(F=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===_a||E===Os?F=e.DEPTH_COMPONENT24:E===Ri?F=e.DEPTH_COMPONENT32F:E===ol&&(F=e.DEPTH_COMPONENT16),F}function P(A,E){return v(A)===!0||A.isFramebufferTexture&&A.minFilter!==Xr&&A.minFilter!==Ci?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function T(A){let E=A.target;E.removeEventListener("dispose",T),R(E),E.isVideoTexture&&c.delete(E)}function b(A){let E=A.target;E.removeEventListener("dispose",b),S(E)}function R(A){let E=i.get(A);if(E.__webglInit===void 0)return;let F=A.source,J=p.get(F);if(J){let te=J[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(A),Object.keys(J).length===0&&p.delete(F)}i.remove(A)}function w(A){let E=i.get(A);e.deleteTexture(E.__webglTexture);let F=A.source,J=p.get(F);delete J[E.__cacheKey],s.memory.textures--}function S(A){let E=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let te=0;te<E.__webglFramebuffer[J].length;te++)e.deleteFramebuffer(E.__webglFramebuffer[J][te]);else e.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&e.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)e.deleteFramebuffer(E.__webglFramebuffer[J]);else e.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&e.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&e.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&e.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&e.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let F=A.textures;for(let J=0,te=F.length;J<te;J++){let q=i.get(F[J]);q.__webglTexture&&(e.deleteTexture(q.__webglTexture),s.memory.textures--),i.remove(F[J])}i.remove(A)}let N=0;function k(){N=0}function V(){let A=N;return A>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+n.maxTextures),N+=1,A}function W(A){let E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function j(A,E){let F=i.get(A);if(A.isVideoTexture&&We(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){let J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(F,A,E);return}}r.bindTexture(e.TEXTURE_2D,F.__webglTexture,e.TEXTURE0+E)}function X(A,E){let F=i.get(A);if(A.version>0&&F.__version!==A.version){ce(F,A,E);return}r.bindTexture(e.TEXTURE_2D_ARRAY,F.__webglTexture,e.TEXTURE0+E)}function ae(A,E){let F=i.get(A);if(A.version>0&&F.__version!==A.version){ce(F,A,E);return}r.bindTexture(e.TEXTURE_3D,F.__webglTexture,e.TEXTURE0+E)}function $(A,E){let F=i.get(A);if(A.version>0&&F.__version!==A.version){ke(F,A,E);return}r.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+E)}let de={[Pc]:e.REPEAT,[ga]:e.CLAMP_TO_EDGE,[af]:e.MIRRORED_REPEAT},Me={[Xr]:e.NEAREST,[sE]:e.NEAREST_MIPMAP_NEAREST,[Hu]:e.NEAREST_MIPMAP_LINEAR,[Ci]:e.LINEAR,[up]:e.LINEAR_MIPMAP_NEAREST,[va]:e.LINEAR_MIPMAP_LINEAR},Ze={[cE]:e.NEVER,[gE]:e.ALWAYS,[hE]:e.LESS,[e1]:e.LEQUAL,[dE]:e.EQUAL,[mE]:e.GEQUAL,[pE]:e.GREATER,[fE]:e.NOTEQUAL};function tt(A,E){if(E.type===Ri&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ci||E.magFilter===up||E.magFilter===Hu||E.magFilter===va||E.minFilter===Ci||E.minFilter===up||E.minFilter===Hu||E.minFilter===va)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,de[E.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,de[E.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,de[E.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,Me[E.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,Me[E.minFilter]),E.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,Ze[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Xr||E.minFilter!==Hu&&E.minFilter!==va||E.type===Ri&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,n.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function K(A,E){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",T));let J=E.source,te=p.get(J);te===void 0&&(te={},p.set(J,te));let q=W(E);if(q!==A.__cacheKey){te[q]===void 0&&(te[q]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,F=!0),te[q].usedTimes++;let Ve=te[A.__cacheKey];Ve!==void 0&&(te[A.__cacheKey].usedTimes--,Ve.usedTimes===0&&w(E)),A.__cacheKey=q,A.__webglTexture=te[q].texture}return F}function ce(A,E,F){let J=e.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=e.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=e.TEXTURE_3D);let te=K(A,E),q=E.source;r.bindTexture(J,A.__webglTexture,e.TEXTURE0+F);let Ve=i.get(q);if(q.version!==Ve.__version||te===!0){r.activeTexture(e.TEXTURE0+F);let ye=pt.getPrimaries(pt.workingColorSpace),xe=E.colorSpace===kn?null:pt.getPrimaries(E.colorSpace),qe=E.colorSpace===kn||ye===xe?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let he=_(E.image,!1,n.maxTextureSize);he=Te(E,he);let Ae=a.convert(E.format,E.colorSpace),nt=a.convert(E.type),Ke=m(E.internalFormat,Ae,nt,E.colorSpace,E.isVideoTexture);tt(J,E);let Re,Qe=E.mipmaps,at=E.isVideoTexture!==!0,St=Ve.__version===void 0||te===!0,O=q.dataReady,re=P(E,he);if(E.isDepthTexture)Ke=x(E.format===ks,E.type),St&&(at?r.texStorage2D(e.TEXTURE_2D,1,Ke,he.width,he.height):r.texImage2D(e.TEXTURE_2D,0,Ke,he.width,he.height,0,Ae,nt,null));else if(E.isDataTexture)if(Qe.length>0){at&&St&&r.texStorage2D(e.TEXTURE_2D,re,Ke,Qe[0].width,Qe[0].height);for(let Y=0,Q=Qe.length;Y<Q;Y++)Re=Qe[Y],at?O&&r.texSubImage2D(e.TEXTURE_2D,Y,0,0,Re.width,Re.height,Ae,nt,Re.data):r.texImage2D(e.TEXTURE_2D,Y,Ke,Re.width,Re.height,0,Ae,nt,Re.data);E.generateMipmaps=!1}else at?(St&&r.texStorage2D(e.TEXTURE_2D,re,Ke,he.width,he.height),O&&r.texSubImage2D(e.TEXTURE_2D,0,0,0,he.width,he.height,Ae,nt,he.data)):r.texImage2D(e.TEXTURE_2D,0,Ke,he.width,he.height,0,Ae,nt,he.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){at&&St&&r.texStorage3D(e.TEXTURE_2D_ARRAY,re,Ke,Qe[0].width,Qe[0].height,he.depth);for(let Y=0,Q=Qe.length;Y<Q;Y++)if(Re=Qe[Y],E.format!==mi)if(Ae!==null)if(at){if(O)if(E.layerUpdates.size>0){let we=fy(Re.width,Re.height,E.format,E.type);for(let _e of E.layerUpdates){let ht=Re.data.subarray(_e*we/Re.data.BYTES_PER_ELEMENT,(_e+1)*we/Re.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Y,0,0,_e,Re.width,Re.height,1,Ae,ht)}E.clearLayerUpdates()}else r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Y,0,0,0,Re.width,Re.height,he.depth,Ae,Re.data)}else r.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Y,Ke,Re.width,Re.height,he.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?O&&r.texSubImage3D(e.TEXTURE_2D_ARRAY,Y,0,0,0,Re.width,Re.height,he.depth,Ae,nt,Re.data):r.texImage3D(e.TEXTURE_2D_ARRAY,Y,Ke,Re.width,Re.height,he.depth,0,Ae,nt,Re.data)}else{at&&St&&r.texStorage2D(e.TEXTURE_2D,re,Ke,Qe[0].width,Qe[0].height);for(let Y=0,Q=Qe.length;Y<Q;Y++)Re=Qe[Y],E.format!==mi?Ae!==null?at?O&&r.compressedTexSubImage2D(e.TEXTURE_2D,Y,0,0,Re.width,Re.height,Ae,Re.data):r.compressedTexImage2D(e.TEXTURE_2D,Y,Ke,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?O&&r.texSubImage2D(e.TEXTURE_2D,Y,0,0,Re.width,Re.height,Ae,nt,Re.data):r.texImage2D(e.TEXTURE_2D,Y,Ke,Re.width,Re.height,0,Ae,nt,Re.data)}else if(E.isDataArrayTexture)if(at){if(St&&r.texStorage3D(e.TEXTURE_2D_ARRAY,re,Ke,he.width,he.height,he.depth),O)if(E.layerUpdates.size>0){let Y=fy(he.width,he.height,E.format,E.type);for(let Q of E.layerUpdates){let we=he.data.subarray(Q*Y/he.data.BYTES_PER_ELEMENT,(Q+1)*Y/he.data.BYTES_PER_ELEMENT);r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Q,he.width,he.height,1,Ae,nt,we)}E.clearLayerUpdates()}else r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Ae,nt,he.data)}else r.texImage3D(e.TEXTURE_2D_ARRAY,0,Ke,he.width,he.height,he.depth,0,Ae,nt,he.data);else if(E.isData3DTexture)at?(St&&r.texStorage3D(e.TEXTURE_3D,re,Ke,he.width,he.height,he.depth),O&&r.texSubImage3D(e.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Ae,nt,he.data)):r.texImage3D(e.TEXTURE_3D,0,Ke,he.width,he.height,he.depth,0,Ae,nt,he.data);else if(E.isFramebufferTexture){if(St)if(at)r.texStorage2D(e.TEXTURE_2D,re,Ke,he.width,he.height);else{let Y=he.width,Q=he.height;for(let we=0;we<re;we++)r.texImage2D(e.TEXTURE_2D,we,Ke,Y,Q,0,Ae,nt,null),Y>>=1,Q>>=1}}else if(Qe.length>0){if(at&&St){let Y=be(Qe[0]);r.texStorage2D(e.TEXTURE_2D,re,Ke,Y.width,Y.height)}for(let Y=0,Q=Qe.length;Y<Q;Y++)Re=Qe[Y],at?O&&r.texSubImage2D(e.TEXTURE_2D,Y,0,0,Ae,nt,Re):r.texImage2D(e.TEXTURE_2D,Y,Ke,Ae,nt,Re);E.generateMipmaps=!1}else if(at){if(St){let Y=be(he);r.texStorage2D(e.TEXTURE_2D,re,Ke,Y.width,Y.height)}O&&r.texSubImage2D(e.TEXTURE_2D,0,0,0,Ae,nt,he)}else r.texImage2D(e.TEXTURE_2D,0,Ke,Ae,nt,he);v(E)&&d(J),Ve.__version=q.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function ke(A,E,F){if(E.image.length!==6)return;let J=K(A,E),te=E.source;r.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+F);let q=i.get(te);if(te.version!==q.__version||J===!0){r.activeTexture(e.TEXTURE0+F);let Ve=pt.getPrimaries(pt.workingColorSpace),ye=E.colorSpace===kn?null:pt.getPrimaries(E.colorSpace),xe=E.colorSpace===kn||Ve===ye?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let qe=E.isCompressedTexture||E.image[0].isCompressedTexture,he=E.image[0]&&E.image[0].isDataTexture,Ae=[];for(let Q=0;Q<6;Q++)!qe&&!he?Ae[Q]=_(E.image[Q],!0,n.maxCubemapSize):Ae[Q]=he?E.image[Q].image:E.image[Q],Ae[Q]=Te(E,Ae[Q]);let nt=Ae[0],Ke=a.convert(E.format,E.colorSpace),Re=a.convert(E.type),Qe=m(E.internalFormat,Ke,Re,E.colorSpace),at=E.isVideoTexture!==!0,St=q.__version===void 0||J===!0,O=te.dataReady,re=P(E,nt);tt(e.TEXTURE_CUBE_MAP,E);let Y;if(qe){at&&St&&r.texStorage2D(e.TEXTURE_CUBE_MAP,re,Qe,nt.width,nt.height);for(let Q=0;Q<6;Q++){Y=Ae[Q].mipmaps;for(let we=0;we<Y.length;we++){let _e=Y[we];E.format!==mi?Ke!==null?at?O&&r.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,0,0,_e.width,_e.height,Ke,_e.data):r.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,Qe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?O&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,0,0,_e.width,_e.height,Ke,Re,_e.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,Qe,_e.width,_e.height,0,Ke,Re,_e.data)}}}else{if(Y=E.mipmaps,at&&St){Y.length>0&&re++;let Q=be(Ae[0]);r.texStorage2D(e.TEXTURE_CUBE_MAP,re,Qe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(he){at?O&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ae[Q].width,Ae[Q].height,Ke,Re,Ae[Q].data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Qe,Ae[Q].width,Ae[Q].height,0,Ke,Re,Ae[Q].data);for(let we=0;we<Y.length;we++){let _e=Y[we].image[Q].image;at?O&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,0,0,_e.width,_e.height,Ke,Re,_e.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,Qe,_e.width,_e.height,0,Ke,Re,_e.data)}}else{at?O&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ke,Re,Ae[Q]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Qe,Ke,Re,Ae[Q]);for(let we=0;we<Y.length;we++){let _e=Y[we];at?O&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,0,0,Ke,Re,_e.image[Q]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,Qe,Ke,Re,_e.image[Q])}}}v(E)&&d(e.TEXTURE_CUBE_MAP),q.__version=te.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Le(A,E,F,J,te,q){let Ve=a.convert(F.format,F.colorSpace),ye=a.convert(F.type),xe=m(F.internalFormat,Ve,ye,F.colorSpace),qe=i.get(E),he=i.get(F);if(he.__renderTarget=E,!qe.__hasExternalTextures){let Ae=Math.max(1,E.width>>q),nt=Math.max(1,E.height>>q);te===e.TEXTURE_3D||te===e.TEXTURE_2D_ARRAY?r.texImage3D(te,q,xe,Ae,nt,E.depth,0,Ve,ye,null):r.texImage2D(te,q,xe,Ae,nt,0,Ve,ye,null)}r.bindFramebuffer(e.FRAMEBUFFER,A),se(E)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,J,te,he.__webglTexture,0,Ie(E)):(te===e.TEXTURE_2D||te>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,J,te,he.__webglTexture,q),r.bindFramebuffer(e.FRAMEBUFFER,null)}function ge(A,E,F){if(e.bindRenderbuffer(e.RENDERBUFFER,A),E.depthBuffer){let J=E.depthTexture,te=J&&J.isDepthTexture?J.type:null,q=x(E.stencilBuffer,te),Ve=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ye=Ie(E);se(E)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ye,q,E.width,E.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,ye,q,E.width,E.height):e.renderbufferStorage(e.RENDERBUFFER,q,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Ve,e.RENDERBUFFER,A)}else{let J=E.textures;for(let te=0;te<J.length;te++){let q=J[te],Ve=a.convert(q.format,q.colorSpace),ye=a.convert(q.type),xe=m(q.internalFormat,Ve,ye,q.colorSpace),qe=Ie(E);F&&se(E)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,qe,xe,E.width,E.height):se(E)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,qe,xe,E.width,E.height):e.renderbufferStorage(e.RENDERBUFFER,xe,E.width,E.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ye(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(r.bindFramebuffer(e.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let F=i.get(E.depthTexture);F.__renderTarget=E,(!F.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),j(E.depthTexture,0);let J=F.__webglTexture,te=Ie(E);if(E.depthTexture.format===Ps)se(E)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,J,0,te):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,J,0);else if(E.depthTexture.format===ks)se(E)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,J,0,te):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function it(A){let E=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){let J=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){let te=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",te)};J.addEventListener("dispose",te),E.__depthDisposeCallback=te}E.__boundDepthTexture=J}if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ye(E.__webglFramebuffer,A)}else if(F){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(r.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=e.createRenderbuffer(),ge(E.__webglDepthbuffer[J],A,!1);else{let te=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer[J];e.bindRenderbuffer(e.RENDERBUFFER,q),e.framebufferRenderbuffer(e.FRAMEBUFFER,te,e.RENDERBUFFER,q)}}else if(r.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=e.createRenderbuffer(),ge(E.__webglDepthbuffer,A,!1);else{let J=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,te),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,te)}r.bindFramebuffer(e.FRAMEBUFFER,null)}function Je(A,E,F){let J=i.get(A);E!==void 0&&Le(J.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),F!==void 0&&it(A)}function Z(A){let E=A.texture,F=i.get(A),J=i.get(E);A.addEventListener("dispose",b);let te=A.textures,q=A.isWebGLCubeRenderTarget===!0,Ve=te.length>1;if(Ve||(J.__webglTexture===void 0&&(J.__webglTexture=e.createTexture()),J.__version=E.version,s.memory.textures++),q){F.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer[ye]=[];for(let xe=0;xe<E.mipmaps.length;xe++)F.__webglFramebuffer[ye][xe]=e.createFramebuffer()}else F.__webglFramebuffer[ye]=e.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer=[];for(let ye=0;ye<E.mipmaps.length;ye++)F.__webglFramebuffer[ye]=e.createFramebuffer()}else F.__webglFramebuffer=e.createFramebuffer();if(Ve)for(let ye=0,xe=te.length;ye<xe;ye++){let qe=i.get(te[ye]);qe.__webglTexture===void 0&&(qe.__webglTexture=e.createTexture(),s.memory.textures++)}if(A.samples>0&&se(A)===!1){F.__webglMultisampledFramebuffer=e.createFramebuffer(),F.__webglColorRenderbuffer=[],r.bindFramebuffer(e.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ye=0;ye<te.length;ye++){let xe=te[ye];F.__webglColorRenderbuffer[ye]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,F.__webglColorRenderbuffer[ye]);let qe=a.convert(xe.format,xe.colorSpace),he=a.convert(xe.type),Ae=m(xe.internalFormat,qe,he,xe.colorSpace,A.isXRRenderTarget===!0),nt=Ie(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,nt,Ae,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ye,e.RENDERBUFFER,F.__webglColorRenderbuffer[ye])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=e.createRenderbuffer(),ge(F.__webglDepthRenderbuffer,A,!0)),r.bindFramebuffer(e.FRAMEBUFFER,null)}}if(q){r.bindTexture(e.TEXTURE_CUBE_MAP,J.__webglTexture),tt(e.TEXTURE_CUBE_MAP,E);for(let ye=0;ye<6;ye++)if(E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)Le(F.__webglFramebuffer[ye][xe],A,E,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ye,xe);else Le(F.__webglFramebuffer[ye],A,E,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);v(E)&&d(e.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(Ve){for(let ye=0,xe=te.length;ye<xe;ye++){let qe=te[ye],he=i.get(qe);r.bindTexture(e.TEXTURE_2D,he.__webglTexture),tt(e.TEXTURE_2D,qe),Le(F.__webglFramebuffer,A,qe,e.COLOR_ATTACHMENT0+ye,e.TEXTURE_2D,0),v(qe)&&d(e.TEXTURE_2D)}r.unbindTexture()}else{let ye=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ye=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),r.bindTexture(ye,J.__webglTexture),tt(ye,E),E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)Le(F.__webglFramebuffer[xe],A,E,e.COLOR_ATTACHMENT0,ye,xe);else Le(F.__webglFramebuffer,A,E,e.COLOR_ATTACHMENT0,ye,0);v(E)&&d(ye),r.unbindTexture()}A.depthBuffer&&it(A)}function pe(A){let E=A.textures;for(let F=0,J=E.length;F<J;F++){let te=E[F];if(v(te)){let q=g(A),Ve=i.get(te).__webglTexture;r.bindTexture(q,Ve),d(q),r.unbindTexture()}}}let C=[],Ce=[];function le(A){if(A.samples>0){if(se(A)===!1){let E=A.textures,F=A.width,J=A.height,te=e.COLOR_BUFFER_BIT,q=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Ve=i.get(A),ye=E.length>1;if(ye)for(let xe=0;xe<E.length;xe++)r.bindFramebuffer(e.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xe,e.RENDERBUFFER,null),r.bindFramebuffer(e.FRAMEBUFFER,Ve.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xe,e.TEXTURE_2D,null,0);r.bindFramebuffer(e.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),r.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let xe=0;xe<E.length;xe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=e.STENCIL_BUFFER_BIT)),ye){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Ve.__webglColorRenderbuffer[xe]);let qe=i.get(E[xe]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,qe,0)}e.blitFramebuffer(0,0,F,J,0,0,F,J,te,e.NEAREST),l===!0&&(C.length=0,Ce.length=0,C.push(e.COLOR_ATTACHMENT0+xe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(C.push(q),Ce.push(q),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ce)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,C))}if(r.bindFramebuffer(e.READ_FRAMEBUFFER,null),r.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ye)for(let xe=0;xe<E.length;xe++){r.bindFramebuffer(e.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xe,e.RENDERBUFFER,Ve.__webglColorRenderbuffer[xe]);let qe=i.get(E[xe]).__webglTexture;r.bindFramebuffer(e.FRAMEBUFFER,Ve.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xe,e.TEXTURE_2D,qe,0)}r.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let E=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[E])}}}function Ie(A){return Math.min(n.maxSamples,A.samples)}function se(A){let E=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function We(A){let E=s.render.frame;c.get(A)!==E&&(c.set(A,E),A.update())}function Te(A,E){let F=A.colorSpace,J=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==zs&&F!==kn&&(pt.getTransfer(F)===gt?(J!==mi||te!==nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),E}function be(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=ae,this.setTextureCube=$,this.rebindTextures=Je,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=se}function yA(e,t){function r(i,n=kn){let a,s=pt.getTransfer(n);if(i===nn)return e.UNSIGNED_BYTE;if(i===Yf)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Kf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===jy)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Wy)return e.BYTE;if(i===Xy)return e.SHORT;if(i===ol)return e.UNSIGNED_SHORT;if(i===qf)return e.INT;if(i===_a)return e.UNSIGNED_INT;if(i===Ri)return e.FLOAT;if(i===Qi)return e.HALF_FLOAT;if(i===$y)return e.ALPHA;if(i===qy)return e.RGB;if(i===mi)return e.RGBA;if(i===Yy)return e.LUMINANCE;if(i===Ky)return e.LUMINANCE_ALPHA;if(i===Ps)return e.DEPTH_COMPONENT;if(i===ks)return e.DEPTH_STENCIL;if(i===Jf)return e.RED;if(i===Zf)return e.RED_INTEGER;if(i===Jy)return e.RG;if(i===Qf)return e.RG_INTEGER;if(i===em)return e.RGBA_INTEGER;if(i===Mc||i===Ec||i===wc||i===Tc)if(s===gt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Mc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ec)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Tc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Mc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ec)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Tc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sf||i===of||i===lf||i===uf)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===sf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===of)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===uf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cf||i===hf||i===df)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===cf||i===hf)return s===gt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===df)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===pf||i===ff||i===mf||i===gf||i===vf||i===_f||i===yf||i===xf||i===Sf||i===Mf||i===Ef||i===wf||i===Tf||i===bf)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===pf)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ff)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mf)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gf)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vf)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_f)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yf)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xf)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sf)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mf)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ef)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wf)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tf)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bf)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bc||i===Af||i===Cf)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===bc)return s===gt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Af)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Cf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zy||i===Rf||i===Pf||i===Nf)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===bc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Rf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Os?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:r}}var xA=class extends Wr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},bs=class extends tr{constructor(){super(),this.isGroup=!0,this.type="Group"}},SA={type:"move"},zp=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let i=null,n=null,a=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let y of e.hand.values()){let _=t.getJointPose(y,r),v=this._getHandJoint(l,y);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}let u=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],h=u.position.distanceTo(c.position),p=.02,f=.005;l.inputState.pinching&&h>p+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,r),i===null&&n!==null&&(i=n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(SA)))}return s!==null&&(s.visible=i!==null),o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let r=new bs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}},MA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EA=`
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

}`,wA=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){let i=new ti,n=e.properties.get(i);n.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,r=new sr({vertexShader:MA,fragmentShader:EA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ge(new On(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},TA=class extends Bs{constructor(e,t){super();let r=this,i=null,n=1,a=null,s="local-floor",o=1,l=null,u=null,c=null,h=null,p=null,f=null,y=new wA,_=t.getContextAttributes(),v=null,d=null,g=[],m=[],x=new ne,P=null,T=new Wr;T.viewport=new Tt;let b=new Wr;b.viewport=new Tt;let R=[T,b],w=new xA,S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ce=g[K];return ce===void 0&&(ce=new zp,g[K]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(K){let ce=g[K];return ce===void 0&&(ce=new zp,g[K]=ce),ce.getGripSpace()},this.getHand=function(K){let ce=g[K];return ce===void 0&&(ce=new zp,g[K]=ce),ce.getHandSpace()};function k(K){let ce=m.indexOf(K.inputSource);if(ce===-1)return;let ke=g[ce];ke!==void 0&&(ke.update(K.inputSource,K.frame,l||a),ke.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",W);for(let K=0;K<g.length;K++){let ce=m[K];ce!==null&&(m[K]=null,g[K].disconnect(ce))}S=null,N=null,y.reset(),e.setRenderTarget(v),p=null,h=null,c=null,i=null,d=null,tt.stop(),r.isPresenting=!1,e.setPixelRatio(P),e.setSize(x.width,x.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){n=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){s=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return c},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",V),i.addEventListener("inputsourceschange",W),_.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(x),i.renderState.layers===void 0){let ce={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:n};p=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new gi(p.framebufferWidth,p.framebufferHeight,{format:mi,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ce=null,ke=null,Le=null;_.depth&&(Le=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=_.stencil?ks:Ps,ke=_.stencil?Os:_a);let ge={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:n};c=new XRWebGLBinding(i,t),h=c.createProjectionLayer(ge),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),d=new gi(h.textureWidth,h.textureHeight,{format:mi,type:nn,depthTexture:new S1(h.textureWidth,h.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}d.isXRRenderTarget=!0,this.setFoveation(o),l=null,a=await i.requestReferenceSpace(s),tt.setContext(i),tt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(K){for(let ce=0;ce<K.removed.length;ce++){let ke=K.removed[ce],Le=m.indexOf(ke);Le>=0&&(m[Le]=null,g[Le].disconnect(ke))}for(let ce=0;ce<K.added.length;ce++){let ke=K.added[ce],Le=m.indexOf(ke);if(Le===-1){for(let Ye=0;Ye<g.length;Ye++)if(Ye>=m.length){m.push(ke),Le=Ye;break}else if(m[Ye]===null){m[Ye]=ke,Le=Ye;break}if(Le===-1)break}let ge=g[Le];ge&&ge.connect(ke)}}let j=new L,X=new L;function ae(K,ce,ke){j.setFromMatrixPosition(ce.matrixWorld),X.setFromMatrixPosition(ke.matrixWorld);let Le=j.distanceTo(X),ge=ce.projectionMatrix.elements,Ye=ke.projectionMatrix.elements,it=ge[14]/(ge[10]-1),Je=ge[14]/(ge[10]+1),Z=(ge[9]+1)/ge[5],pe=(ge[9]-1)/ge[5],C=(ge[8]-1)/ge[0],Ce=(Ye[8]+1)/Ye[0],le=it*C,Ie=it*Ce,se=Le/(-C+Ce),We=se*-C;if(ce.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(We),K.translateZ(se),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ge[10]===-1)K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{let Te=it+se,be=Je+se,A=le-We,E=Ie+(Le-We),F=Z*Je/be*Te,J=pe*Je/be*Te;K.projectionMatrix.makePerspective(A,E,F,J,Te,be),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function $(K,ce){ce===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ce.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let ce=K.near,ke=K.far;y.texture!==null&&(y.depthNear>0&&(ce=y.depthNear),y.depthFar>0&&(ke=y.depthFar)),w.near=b.near=T.near=ce,w.far=b.far=T.far=ke,(S!==w.near||N!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),S=w.near,N=w.far),T.layers.mask=K.layers.mask|2,b.layers.mask=K.layers.mask|4,w.layers.mask=T.layers.mask|b.layers.mask;let Le=K.parent,ge=w.cameras;$(w,Le);for(let Ye=0;Ye<ge.length;Ye++)$(ge[Ye],Le);ge.length===2?ae(w,T,b):w.projectionMatrix.copy(T.projectionMatrix),de(K,w,Le)};function de(K,ce,ke){ke===null?K.matrix.copy(ce.matrixWorld):(K.matrix.copy(ke.matrixWorld),K.matrix.invert(),K.matrix.multiply(ce.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Uf*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&p===null))return o},this.setFoveation=function(K){o=K,h!==null&&(h.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(w)};let Me=null;function Ze(K,ce){if(u=ce.getViewerPose(l||a),f=ce,u!==null){let ke=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let Le=!1;ke.length!==w.cameras.length&&(w.cameras.length=0,Le=!0);for(let Ye=0;Ye<ke.length;Ye++){let it=ke[Ye],Je=null;if(p!==null)Je=p.getViewport(it);else{let pe=c.getViewSubImage(h,it);Je=pe.viewport,Ye===0&&(e.setRenderTargetTextures(d,pe.colorTexture,h.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(d))}let Z=R[Ye];Z===void 0&&(Z=new Wr,Z.layers.enable(Ye),Z.viewport=new Tt,R[Ye]=Z),Z.matrix.fromArray(it.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(it.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(Je.x,Je.y,Je.width,Je.height),Ye===0&&(w.matrix.copy(Z.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Le===!0&&w.cameras.push(Z)}let ge=i.enabledFeatures;if(ge&&ge.includes("depth-sensing")){let Ye=c.getDepthInformation(ke[0]);Ye&&Ye.isValid&&Ye.texture&&y.init(e,Ye,i.renderState)}}for(let ke=0;ke<g.length;ke++){let Le=m[ke],ge=g[ke];Le!==null&&ge!==void 0&&ge.update(Le,ce,l||a)}Me&&Me(K,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),f=null}let tt=new y1;tt.setAnimationLoop(Ze),this.setAnimationLoop=function(K){Me=K},this.dispose=function(){}}},ca=new Bn,bA=new bt;function AA(e,t){function r(v,d){v.matrixAutoUpdate===!0&&v.updateMatrix(),d.value.copy(v.matrix)}function i(v,d){d.color.getRGB(v.fogColor.value,g1(e)),d.isFog?(v.fogNear.value=d.near,v.fogFar.value=d.far):d.isFogExp2&&(v.fogDensity.value=d.density)}function n(v,d,g,m,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(v,d):d.isMeshToonMaterial?(a(v,d),h(v,d)):d.isMeshPhongMaterial?(a(v,d),c(v,d)):d.isMeshStandardMaterial?(a(v,d),p(v,d),d.isMeshPhysicalMaterial&&f(v,d,x)):d.isMeshMatcapMaterial?(a(v,d),y(v,d)):d.isMeshDepthMaterial?a(v,d):d.isMeshDistanceMaterial?(a(v,d),_(v,d)):d.isMeshNormalMaterial?a(v,d):d.isLineBasicMaterial?(s(v,d),d.isLineDashedMaterial&&o(v,d)):d.isPointsMaterial?l(v,d,g,m):d.isSpriteMaterial?u(v,d):d.isShadowMaterial?(v.color.value.copy(d.color),v.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(v,d){v.opacity.value=d.opacity,d.color&&v.diffuse.value.copy(d.color),d.emissive&&v.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(v.map.value=d.map,r(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,r(d.alphaMap,v.alphaMapTransform)),d.bumpMap&&(v.bumpMap.value=d.bumpMap,r(d.bumpMap,v.bumpMapTransform),v.bumpScale.value=d.bumpScale,d.side===Tr&&(v.bumpScale.value*=-1)),d.normalMap&&(v.normalMap.value=d.normalMap,r(d.normalMap,v.normalMapTransform),v.normalScale.value.copy(d.normalScale),d.side===Tr&&v.normalScale.value.negate()),d.displacementMap&&(v.displacementMap.value=d.displacementMap,r(d.displacementMap,v.displacementMapTransform),v.displacementScale.value=d.displacementScale,v.displacementBias.value=d.displacementBias),d.emissiveMap&&(v.emissiveMap.value=d.emissiveMap,r(d.emissiveMap,v.emissiveMapTransform)),d.specularMap&&(v.specularMap.value=d.specularMap,r(d.specularMap,v.specularMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest);let g=t.get(d),m=g.envMap,x=g.envMapRotation;m&&(v.envMap.value=m,ca.copy(x),ca.x*=-1,ca.y*=-1,ca.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&(ca.y*=-1,ca.z*=-1),v.envMapRotation.value.setFromMatrix4(bA.makeRotationFromEuler(ca)),v.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=d.reflectivity,v.ior.value=d.ior,v.refractionRatio.value=d.refractionRatio),d.lightMap&&(v.lightMap.value=d.lightMap,v.lightMapIntensity.value=d.lightMapIntensity,r(d.lightMap,v.lightMapTransform)),d.aoMap&&(v.aoMap.value=d.aoMap,v.aoMapIntensity.value=d.aoMapIntensity,r(d.aoMap,v.aoMapTransform))}function s(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,d.map&&(v.map.value=d.map,r(d.map,v.mapTransform))}function o(v,d){v.dashSize.value=d.dashSize,v.totalSize.value=d.dashSize+d.gapSize,v.scale.value=d.scale}function l(v,d,g,m){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.size.value=d.size*g,v.scale.value=m*.5,d.map&&(v.map.value=d.map,r(d.map,v.uvTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,r(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function u(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.rotation.value=d.rotation,d.map&&(v.map.value=d.map,r(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,r(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function c(v,d){v.specular.value.copy(d.specular),v.shininess.value=Math.max(d.shininess,1e-4)}function h(v,d){d.gradientMap&&(v.gradientMap.value=d.gradientMap)}function p(v,d){v.metalness.value=d.metalness,d.metalnessMap&&(v.metalnessMap.value=d.metalnessMap,r(d.metalnessMap,v.metalnessMapTransform)),v.roughness.value=d.roughness,d.roughnessMap&&(v.roughnessMap.value=d.roughnessMap,r(d.roughnessMap,v.roughnessMapTransform)),d.envMap&&(v.envMapIntensity.value=d.envMapIntensity)}function f(v,d,g){v.ior.value=d.ior,d.sheen>0&&(v.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),v.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(v.sheenColorMap.value=d.sheenColorMap,r(d.sheenColorMap,v.sheenColorMapTransform)),d.sheenRoughnessMap&&(v.sheenRoughnessMap.value=d.sheenRoughnessMap,r(d.sheenRoughnessMap,v.sheenRoughnessMapTransform))),d.clearcoat>0&&(v.clearcoat.value=d.clearcoat,v.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(v.clearcoatMap.value=d.clearcoatMap,r(d.clearcoatMap,v.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,r(d.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(v.clearcoatNormalMap.value=d.clearcoatNormalMap,r(d.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Tr&&v.clearcoatNormalScale.value.negate())),d.dispersion>0&&(v.dispersion.value=d.dispersion),d.iridescence>0&&(v.iridescence.value=d.iridescence,v.iridescenceIOR.value=d.iridescenceIOR,v.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(v.iridescenceMap.value=d.iridescenceMap,r(d.iridescenceMap,v.iridescenceMapTransform)),d.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=d.iridescenceThicknessMap,r(d.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),d.transmission>0&&(v.transmission.value=d.transmission,v.transmissionSamplerMap.value=g.texture,v.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(v.transmissionMap.value=d.transmissionMap,r(d.transmissionMap,v.transmissionMapTransform)),v.thickness.value=d.thickness,d.thicknessMap&&(v.thicknessMap.value=d.thicknessMap,r(d.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=d.attenuationDistance,v.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(v.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(v.anisotropyMap.value=d.anisotropyMap,r(d.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=d.specularIntensity,v.specularColor.value.copy(d.specularColor),d.specularColorMap&&(v.specularColorMap.value=d.specularColorMap,r(d.specularColorMap,v.specularColorMapTransform)),d.specularIntensityMap&&(v.specularIntensityMap.value=d.specularIntensityMap,r(d.specularIntensityMap,v.specularIntensityMapTransform))}function y(v,d){d.matcap&&(v.matcap.value=d.matcap)}function _(v,d){let g=t.get(d).light;v.referencePosition.value.setFromMatrixPosition(g.matrixWorld),v.nearDistance.value=g.shadow.camera.near,v.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function CA(e,t,r,i){let n={},a={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,m){let x=m.program;i.uniformBlockBinding(g,x)}function u(g,m){let x=n[g.id];x===void 0&&(y(g),x=c(g),n[g.id]=x,g.addEventListener("dispose",v));let P=m.program;i.updateUBOMapping(g,P);let T=t.render.frame;a[g.id]!==T&&(p(g),a[g.id]=T)}function c(g){let m=h();g.__bindingPointIndex=m;let x=e.createBuffer(),P=g.__size,T=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,P,T),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,m,x),x}function h(){for(let g=0;g<o;g++)if(s.indexOf(g)===-1)return s.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(g){let m=n[g.id],x=g.uniforms,P=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,m);for(let T=0,b=x.length;T<b;T++){let R=Array.isArray(x[T])?x[T]:[x[T]];for(let w=0,S=R.length;w<S;w++){let N=R[w];if(f(N,T,w,P)===!0){let k=N.__offset,V=Array.isArray(N.value)?N.value:[N.value],W=0;for(let j=0;j<V.length;j++){let X=V[j],ae=_(X);typeof X=="number"||typeof X=="boolean"?(N.__data[0]=X,e.bufferSubData(e.UNIFORM_BUFFER,k+W,N.__data)):X.isMatrix3?(N.__data[0]=X.elements[0],N.__data[1]=X.elements[1],N.__data[2]=X.elements[2],N.__data[3]=0,N.__data[4]=X.elements[3],N.__data[5]=X.elements[4],N.__data[6]=X.elements[5],N.__data[7]=0,N.__data[8]=X.elements[6],N.__data[9]=X.elements[7],N.__data[10]=X.elements[8],N.__data[11]=0):(X.toArray(N.__data,W),W+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,k,N.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(g,m,x,P){let T=g.value,b=m+"_"+x;if(P[b]===void 0)return typeof T=="number"||typeof T=="boolean"?P[b]=T:P[b]=T.clone(),!0;{let R=P[b];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return P[b]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function y(g){let m=g.uniforms,x=0,P=16;for(let b=0,R=m.length;b<R;b++){let w=Array.isArray(m[b])?m[b]:[m[b]];for(let S=0,N=w.length;S<N;S++){let k=w[S],V=Array.isArray(k.value)?k.value:[k.value];for(let W=0,j=V.length;W<j;W++){let X=V[W],ae=_(X),$=x%P,de=$%ae.boundary,Me=$+de;x+=de,Me!==0&&P-Me<ae.storage&&(x+=P-Me),k.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=ae.storage}}}let T=x%P;return T>0&&(x+=P-T),g.__size=x,g.__cache={},this}function _(g){let m={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(m.boundary=4,m.storage=4):g.isVector2?(m.boundary=8,m.storage=8):g.isVector3||g.isColor?(m.boundary=16,m.storage=12):g.isVector4?(m.boundary=16,m.storage=16):g.isMatrix3?(m.boundary=48,m.storage=48):g.isMatrix4?(m.boundary=64,m.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),m}function v(g){let m=g.target;m.removeEventListener("dispose",v);let x=s.indexOf(m.__bindingPointIndex);s.splice(x,1),e.deleteBuffer(n[m.id]),delete n[m.id],delete a[m.id]}function d(){for(let g in n)e.deleteBuffer(n[g]);s=[],n={},a={}}return{bind:l,update:u,dispose:d}}var RA=class{constructor(e={}){let{canvas:t=_E(),context:r=null,depth:i=!0,stencil:n=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=r.getContextAttributes().alpha}else p=a;let f=new Uint32Array(4),y=new Int32Array(4),_=null,v=null,d=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gr,this.toneMapping=Fn,this.toneMappingExposure=1;let m=this,x=!1,P=0,T=0,b=null,R=-1,w=null,S=new Tt,N=new Tt,k=null,V=new $e(0),W=0,j=t.width,X=t.height,ae=1,$=null,de=null,Me=new Tt(0,0,j,X),Ze=new Tt(0,0,j,X),tt=!1,K=new tm,ce=!1,ke=!1,Le=new bt,ge=new bt,Ye=new L,it=new Tt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Z=!1;function pe(){return b===null?ae:1}let C=r;function Ce(M,I){return t.getContext(M,I)}try{let M={alpha:!0,depth:i,stencil:n,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",we,!1),C===null){let I="webgl2";if(C=Ce(I,M),C===null)throw Ce(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let le,Ie,se,We,Te,be,A,E,F,J,te,q,Ve,ye,xe,qe,he,Ae,nt,Ke,Re,Qe,at,St;function O(){le=new UT(C),le.init(),Qe=new yA(C,le),Ie=new CT(C,le,e,Qe),se=new gA(C,le),Ie.reverseDepthBuffer&&h&&se.buffers.depth.setReversed(!0),We=new kT(C),Te=new tA,be=new _A(C,le,se,Te,Ie,Qe,We),A=new PT(m),E=new DT(m),F=new WE(C),at=new bT(C,F),J=new IT(C,F,We,at),te=new zT(C,J,F,We),nt=new FT(C,Ie,be),qe=new RT(Te),q=new eA(m,A,E,le,Ie,at,qe),Ve=new AA(m,Te),ye=new iA,xe=new uA(le),Ae=new TT(m,A,E,se,te,p,o),he=new fA(m,te,Ie),St=new CA(C,We,Ie,se),Ke=new AT(C,le,We),Re=new OT(C,le,We),We.programs=q.programs,m.capabilities=Ie,m.extensions=le,m.properties=Te,m.renderLists=ye,m.shadowMap=he,m.state=se,m.info=We}O();let re=new TA(m,C);this.xr=re,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let M=le.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=le.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(M){M!==void 0&&(ae=M,this.setSize(j,X,!1))},this.getSize=function(M){return M.set(j,X)},this.setSize=function(M,I,z=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,X=I,t.width=Math.floor(M*ae),t.height=Math.floor(I*ae),z===!0&&(t.style.width=M+"px",t.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(j*ae,X*ae).floor()},this.setDrawingBufferSize=function(M,I,z){j=M,X=I,ae=z,t.width=Math.floor(M*z),t.height=Math.floor(I*z),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(S)},this.getViewport=function(M){return M.copy(Me)},this.setViewport=function(M,I,z,B){M.isVector4?Me.set(M.x,M.y,M.z,M.w):Me.set(M,I,z,B),se.viewport(S.copy(Me).multiplyScalar(ae).round())},this.getScissor=function(M){return M.copy(Ze)},this.setScissor=function(M,I,z,B){M.isVector4?Ze.set(M.x,M.y,M.z,M.w):Ze.set(M,I,z,B),se.scissor(N.copy(Ze).multiplyScalar(ae).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(M){se.setScissorTest(tt=M)},this.setOpaqueSort=function(M){$=M},this.setTransparentSort=function(M){de=M},this.getClearColor=function(M){return M.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(M=!0,I=!0,z=!0){let B=0;if(M){let D=!1;if(b!==null){let ee=b.texture.format;D=ee===em||ee===Qf||ee===Zf}if(D){let ee=b.texture.type,Se=ee===nn||ee===_a||ee===ol||ee===Os||ee===Yf||ee===Kf,Pe=Ae.getClearColor(),ze=Ae.getClearAlpha(),ve=Pe.r,De=Pe.g,Ue=Pe.b;Se?(f[0]=ve,f[1]=De,f[2]=Ue,f[3]=ze,C.clearBufferuiv(C.COLOR,0,f)):(y[0]=ve,y[1]=De,y[2]=Ue,y[3]=ze,C.clearBufferiv(C.COLOR,0,y))}else B|=C.COLOR_BUFFER_BIT}I&&(B|=C.DEPTH_BUFFER_BIT),z&&(B|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",we,!1),ye.dispose(),xe.dispose(),Te.dispose(),A.dispose(),E.dispose(),te.dispose(),at.dispose(),St.dispose(),q.dispose(),re.dispose(),re.removeEventListener("sessionstart",Lr),re.removeEventListener("sessionend",gl),vi.stop()};function Y(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let M=We.autoReset,I=he.enabled,z=he.autoUpdate,B=he.needsUpdate,D=he.type;O(),We.autoReset=M,he.enabled=I,he.autoUpdate=z,he.needsUpdate=B,he.type=D}function we(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function _e(M){let I=M.target;I.removeEventListener("dispose",_e),ht(I)}function ht(M){Dt(M),Te.remove(M)}function Dt(M){let I=Te.get(M).programs;I!==void 0&&(I.forEach(function(z){q.releaseProgram(z)}),M.isShaderMaterial&&q.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,z,B,D,ee){I===null&&(I=Je);let Se=D.isMesh&&D.matrixWorld.determinant()<0,Pe=Oe(M,I,z,B,D);se.setMaterial(B,Se);let ze=z.index,ve=1;if(B.wireframe===!0){if(ze=J.getWireframeAttribute(z),ze===void 0)return;ve=2}let De=z.drawRange,Ue=z.attributes.position,rt=De.start*ve,xt=(De.start+De.count)*ve;ee!==null&&(rt=Math.max(rt,ee.start*ve),xt=Math.min(xt,(ee.start+ee.count)*ve)),ze!==null?(rt=Math.max(rt,0),xt=Math.min(xt,ze.count)):Ue!=null&&(rt=Math.max(rt,0),xt=Math.min(xt,Ue.count));let Pt=xt-rt;if(Pt<0||Pt===1/0)return;at.setup(D,B,Pe,z,ze);let Gt,Nt=Ke;if(ze!==null&&(Gt=F.get(ze),Nt=Re,Nt.setIndex(Gt)),D.isMesh)B.wireframe===!0?(se.setLineWidth(B.wireframeLinewidth*pe()),Nt.setMode(C.LINES)):Nt.setMode(C.TRIANGLES);else if(D.isLine){let He=B.linewidth;He===void 0&&(He=1),se.setLineWidth(He*pe()),D.isLineSegments?Nt.setMode(C.LINES):D.isLineLoop?Nt.setMode(C.LINE_LOOP):Nt.setMode(C.LINE_STRIP)}else D.isPoints?Nt.setMode(C.POINTS):D.isSprite&&Nt.setMode(C.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Nt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))Nt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let He=D._multiDrawStarts,Vn=D._multiDrawCounts,Hn=D._multiDrawCount,ri=ze?F.get(ze).bytesPerElement:1,Ma=Te.get(B).currentProgram.getUniforms();for(let Dr=0;Dr<Hn;Dr++)Ma.setValue(C,"_gl_DrawID",Dr),Nt.render(He[Dr]/ri,Vn[Dr])}else if(D.isInstancedMesh)Nt.renderInstances(rt,Pt,D.count);else if(z.isInstancedBufferGeometry){let He=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Vn=Math.min(z.instanceCount,He);Nt.renderInstances(rt,Pt,Vn)}else Nt.render(rt,Pt)};function Ht(M,I,z){M.transparent===!0&&M.side===bi&&M.forceSinglePass===!1?(M.side=Tr,M.needsUpdate=!0,Fe(M,I,z),M.side=zn,M.needsUpdate=!0,Fe(M,I,z),M.side=bi):Fe(M,I,z)}this.compile=function(M,I,z=null){z===null&&(z=M),v=xe.get(z),v.init(I),g.push(v),z.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(v.pushLight(D),D.castShadow&&v.pushShadow(D))}),M!==z&&M.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(v.pushLight(D),D.castShadow&&v.pushShadow(D))}),v.setupLights();let B=new Set;return M.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let ee=D.material;if(ee)if(Array.isArray(ee))for(let Se=0;Se<ee.length;Se++){let Pe=ee[Se];Ht(Pe,z,D),B.add(Pe)}else Ht(ee,z,D),B.add(ee)}),g.pop(),v=null,B},this.compileAsync=function(M,I,z=null){let B=this.compile(M,I,z);return new Promise(D=>{function ee(){if(B.forEach(function(Se){Te.get(Se).currentProgram.isReady()&&B.delete(Se)}),B.size===0){D(M);return}setTimeout(ee,10)}le.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let dt=null;function jr(M){dt&&dt(M)}function Lr(){vi.stop()}function gl(){vi.start()}let vi=new y1;vi.setAnimationLoop(jr),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(M){dt=M,re.setAnimationLoop(M),M===null?vi.stop():vi.start()},re.addEventListener("sessionstart",Lr),re.addEventListener("sessionend",gl),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(I),I=re.getCamera()),M.isScene===!0&&M.onBeforeRender(m,M,I,b),v=xe.get(M,g.length),v.init(I),g.push(v),ge.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),K.setFromProjectionMatrix(ge),ke=this.localClippingEnabled,ce=qe.init(this.clippingPlanes,ke),_=ye.get(M,d.length),_.init(),d.push(_),re.enabled===!0&&re.isPresenting===!0){let ee=m.xr.getDepthSensingMesh();ee!==null&&H(ee,I,-1/0,m.sortObjects)}H(M,I,0,m.sortObjects),_.finish(),m.sortObjects===!0&&_.sort($,de),Z=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Z&&Ae.addToRenderList(_,M),this.info.render.frame++,ce===!0&&qe.beginShadows();let z=v.state.shadowsArray;he.render(z,M,I),ce===!0&&qe.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=_.opaque,D=_.transmissive;if(v.setupLights(),I.isArrayCamera){let ee=I.cameras;if(D.length>0)for(let Se=0,Pe=ee.length;Se<Pe;Se++){let ze=ee[Se];ue(B,D,M,ze)}Z&&Ae.render(M);for(let Se=0,Pe=ee.length;Se<Pe;Se++){let ze=ee[Se];ie(_,M,ze,ze.viewport)}}else D.length>0&&ue(B,D,M,I),Z&&Ae.render(M),ie(_,M,I);b!==null&&(be.updateMultisampleRenderTarget(b),be.updateRenderTargetMipmap(b)),M.isScene===!0&&M.onAfterRender(m,M,I),at.resetDefaultState(),R=-1,w=null,g.pop(),g.length>0?(v=g[g.length-1],ce===!0&&qe.setGlobalState(m.clippingPlanes,v.state.camera)):v=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function H(M,I,z,B){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)v.pushLight(M),M.castShadow&&v.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||K.intersectsSprite(M)){B&&it.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ge);let ee=te.update(M),Se=M.material;Se.visible&&_.push(M,ee,Se,z,it.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||K.intersectsObject(M))){let ee=te.update(M),Se=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),it.copy(M.boundingSphere.center)):(ee.boundingSphere===null&&ee.computeBoundingSphere(),it.copy(ee.boundingSphere.center)),it.applyMatrix4(M.matrixWorld).applyMatrix4(ge)),Array.isArray(Se)){let Pe=ee.groups;for(let ze=0,ve=Pe.length;ze<ve;ze++){let De=Pe[ze],Ue=Se[De.materialIndex];Ue&&Ue.visible&&_.push(M,ee,Ue,z,it.z,De)}}else Se.visible&&_.push(M,ee,Se,z,it.z,null)}}let D=M.children;for(let ee=0,Se=D.length;ee<Se;ee++)H(D[ee],I,z,B)}function ie(M,I,z,B){let D=M.opaque,ee=M.transmissive,Se=M.transparent;v.setupLightsView(z),ce===!0&&qe.setGlobalState(m.clippingPlanes,z),B&&se.viewport(S.copy(B)),D.length>0&&fe(D,I,z),ee.length>0&&fe(ee,I,z),Se.length>0&&fe(Se,I,z),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function ue(M,I,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[B.id]===void 0&&(v.state.transmissionRenderTarget[B.id]=new gi(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?Qi:nn,minFilter:va,samples:4,stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));let D=v.state.transmissionRenderTarget[B.id],ee=B.viewport||S;D.setSize(ee.z,ee.w);let Se=m.getRenderTarget();m.setRenderTarget(D),m.getClearColor(V),W=m.getClearAlpha(),W<1&&m.setClearColor(16777215,.5),m.clear(),Z&&Ae.render(z);let Pe=m.toneMapping;m.toneMapping=Fn;let ze=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),v.setupLightsView(B),ce===!0&&qe.setGlobalState(m.clippingPlanes,B),fe(M,z,B),be.updateMultisampleRenderTarget(D),be.updateRenderTargetMipmap(D),le.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let De=0,Ue=I.length;De<Ue;De++){let rt=I[De],xt=rt.object,Pt=rt.geometry,Gt=rt.material,Nt=rt.group;if(Gt.side===bi&&xt.layers.test(B.layers)){let He=Gt.side;Gt.side=Tr,Gt.needsUpdate=!0,me(xt,z,B,Pt,Gt,Nt),Gt.side=He,Gt.needsUpdate=!0,ve=!0}}ve===!0&&(be.updateMultisampleRenderTarget(D),be.updateRenderTargetMipmap(D))}m.setRenderTarget(Se),m.setClearColor(V,W),ze!==void 0&&(B.viewport=ze),m.toneMapping=Pe}function fe(M,I,z){let B=I.isScene===!0?I.overrideMaterial:null;for(let D=0,ee=M.length;D<ee;D++){let Se=M[D],Pe=Se.object,ze=Se.geometry,ve=B===null?Se.material:B,De=Se.group;Pe.layers.test(z.layers)&&me(Pe,I,z,ze,ve,De)}}function me(M,I,z,B,D,ee){M.onBeforeRender(m,I,z,B,D,ee),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),D.onBeforeRender(m,I,z,B,M,ee),D.transparent===!0&&D.side===bi&&D.forceSinglePass===!1?(D.side=Tr,D.needsUpdate=!0,m.renderBufferDirect(z,I,B,D,M,ee),D.side=zn,D.needsUpdate=!0,m.renderBufferDirect(z,I,B,D,M,ee),D.side=bi):m.renderBufferDirect(z,I,B,D,M,ee),M.onAfterRender(m,I,z,B,D,ee)}function Fe(M,I,z){I.isScene!==!0&&(I=Je);let B=Te.get(M),D=v.state.lights,ee=v.state.shadowsArray,Se=D.state.version,Pe=q.getParameters(M,D.state,ee,I,z),ze=q.getProgramCacheKey(Pe),ve=B.programs;B.environment=M.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(M.isMeshStandardMaterial?E:A).get(M.envMap||B.environment),B.envMapRotation=B.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,ve===void 0&&(M.addEventListener("dispose",_e),ve=new Map,B.programs=ve);let De=ve.get(ze);if(De!==void 0){if(B.currentProgram===De&&B.lightsStateVersion===Se)return je(M,Pe),De}else Pe.uniforms=q.getUniforms(M),M.onBeforeCompile(Pe,m),De=q.acquireProgram(Pe,ze),ve.set(ze,De),B.uniforms=Pe.uniforms;let Ue=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ue.clippingPlanes=qe.uniform),je(M,Pe),B.needsLights=et(M),B.lightsStateVersion=Se,B.needsLights&&(Ue.ambientLightColor.value=D.state.ambient,Ue.lightProbe.value=D.state.probe,Ue.directionalLights.value=D.state.directional,Ue.directionalLightShadows.value=D.state.directionalShadow,Ue.spotLights.value=D.state.spot,Ue.spotLightShadows.value=D.state.spotShadow,Ue.rectAreaLights.value=D.state.rectArea,Ue.ltc_1.value=D.state.rectAreaLTC1,Ue.ltc_2.value=D.state.rectAreaLTC2,Ue.pointLights.value=D.state.point,Ue.pointLightShadows.value=D.state.pointShadow,Ue.hemisphereLights.value=D.state.hemi,Ue.directionalShadowMap.value=D.state.directionalShadowMap,Ue.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Ue.spotShadowMap.value=D.state.spotShadowMap,Ue.spotLightMatrix.value=D.state.spotLightMatrix,Ue.spotLightMap.value=D.state.spotLightMap,Ue.pointShadowMap.value=D.state.pointShadowMap,Ue.pointShadowMatrix.value=D.state.pointShadowMatrix),B.currentProgram=De,B.uniformsList=null,De}function Be(M){if(M.uniformsList===null){let I=M.currentProgram.getUniforms();M.uniformsList=Rc.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function je(M,I){let z=Te.get(M);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function Oe(M,I,z,B,D){I.isScene!==!0&&(I=Je),be.resetTextureUnits();let ee=I.fog,Se=B.isMeshStandardMaterial?I.environment:null,Pe=b===null?m.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:zs,ze=(B.isMeshStandardMaterial?E:A).get(B.envMap||Se),ve=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,De=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ue=!!z.morphAttributes.position,rt=!!z.morphAttributes.normal,xt=!!z.morphAttributes.color,Pt=Fn;B.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Pt=m.toneMapping);let Gt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Nt=Gt!==void 0?Gt.length:0,He=Te.get(B),Vn=v.state.lights;if(ce===!0&&(ke===!0||M!==w)){let br=M===w&&B.id===R;qe.setState(B,M,br)}let Hn=!1;B.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Vn.state.version||He.outputColorSpace!==Pe||D.isBatchedMesh&&He.batching===!1||!D.isBatchedMesh&&He.batching===!0||D.isBatchedMesh&&He.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&He.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&He.instancing===!1||!D.isInstancedMesh&&He.instancing===!0||D.isSkinnedMesh&&He.skinning===!1||!D.isSkinnedMesh&&He.skinning===!0||D.isInstancedMesh&&He.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&He.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&He.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&He.instancingMorph===!1&&D.morphTexture!==null||He.envMap!==ze||B.fog===!0&&He.fog!==ee||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==qe.numPlanes||He.numIntersection!==qe.numIntersection)||He.vertexAlphas!==ve||He.vertexTangents!==De||He.morphTargets!==Ue||He.morphNormals!==rt||He.morphColors!==xt||He.toneMapping!==Pt||He.morphTargetsCount!==Nt)&&(Hn=!0):(Hn=!0,He.__version=B.version);let ri=He.currentProgram;Hn===!0&&(ri=Fe(B,I,D));let Ma=!1,Dr=!1,Xs=!1,At=ri.getUniforms(),_i=He.uniforms;if(se.useProgram(ri.program)&&(Ma=!0,Dr=!0,Xs=!0),B.id!==R&&(R=B.id,Dr=!0),Ma||w!==M){se.buffers.depth.getReversed()?(Le.copy(M.projectionMatrix),xE(Le),SE(Le),At.setValue(C,"projectionMatrix",Le)):At.setValue(C,"projectionMatrix",M.projectionMatrix),At.setValue(C,"viewMatrix",M.matrixWorldInverse);let br=At.map.cameraPosition;br!==void 0&&br.setValue(C,Ye.setFromMatrixPosition(M.matrixWorld)),Ie.logarithmicDepthBuffer&&At.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&At.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),w!==M&&(w=M,Dr=!0,Xs=!0)}if(D.isSkinnedMesh){At.setOptional(C,D,"bindMatrix"),At.setOptional(C,D,"bindMatrixInverse");let br=D.skeleton;br&&(br.boneTexture===null&&br.computeBoneTexture(),At.setValue(C,"boneTexture",br.boneTexture,be))}D.isBatchedMesh&&(At.setOptional(C,D,"batchingTexture"),At.setValue(C,"batchingTexture",D._matricesTexture,be),At.setOptional(C,D,"batchingIdTexture"),At.setValue(C,"batchingIdTexture",D._indirectTexture,be),At.setOptional(C,D,"batchingColorTexture"),D._colorsTexture!==null&&At.setValue(C,"batchingColorTexture",D._colorsTexture,be));let js=z.morphAttributes;if((js.position!==void 0||js.normal!==void 0||js.color!==void 0)&&nt.update(D,z,ri),(Dr||He.receiveShadow!==D.receiveShadow)&&(He.receiveShadow=D.receiveShadow,At.setValue(C,"receiveShadow",D.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(_i.envMap.value=ze,_i.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&(_i.envMapIntensity.value=I.environmentIntensity),Dr&&(At.setValue(C,"toneMappingExposure",m.toneMappingExposure),He.needsLights&&Xe(_i,Xs),ee&&B.fog===!0&&Ve.refreshFogUniforms(_i,ee),Ve.refreshMaterialUniforms(_i,B,ae,X,v.state.transmissionRenderTarget[M.id]),Rc.upload(C,Be(He),_i,be)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Rc.upload(C,Be(He),_i,be),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&At.setValue(C,"center",D.center),At.setValue(C,"modelViewMatrix",D.modelViewMatrix),At.setValue(C,"normalMatrix",D.normalMatrix),At.setValue(C,"modelMatrix",D.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let br=B.uniformsGroups;for(let $s=0,on=br.length;$s<on;$s++){let hm=br[$s];St.update(hm,ri),St.bind(hm,ri)}}return ri}function Xe(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function et(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(M,I,z){Te.get(M.texture).__webglTexture=I,Te.get(M.depthTexture).__webglTexture=z;let B=Te.get(M);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){let z=Te.get(M);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,z=0){b=M,P=I,T=z;let B=!0,D=null,ee=!1,Se=!1;if(M){let Pe=Te.get(M);if(Pe.__useDefaultFramebuffer!==void 0)se.bindFramebuffer(C.FRAMEBUFFER,null),B=!1;else if(Pe.__webglFramebuffer===void 0)be.setupRenderTarget(M);else if(Pe.__hasExternalTextures)be.rebindTextures(M,Te.get(M.texture).__webglTexture,Te.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let De=M.depthTexture;if(Pe.__boundDepthTexture!==De){if(De!==null&&Te.has(De)&&(M.width!==De.image.width||M.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");be.setupDepthRenderbuffer(M)}}let ze=M.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Se=!0);let ve=Te.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ve[I])?D=ve[I][z]:D=ve[I],ee=!0):M.samples>0&&be.useMultisampledRTT(M)===!1?D=Te.get(M).__webglMultisampledFramebuffer:Array.isArray(ve)?D=ve[z]:D=ve,S.copy(M.viewport),N.copy(M.scissor),k=M.scissorTest}else S.copy(Me).multiplyScalar(ae).floor(),N.copy(Ze).multiplyScalar(ae).floor(),k=tt;if(se.bindFramebuffer(C.FRAMEBUFFER,D)&&B&&se.drawBuffers(M,D),se.viewport(S),se.scissor(N),se.setScissorTest(k),ee){let Pe=Te.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+I,Pe.__webglTexture,z)}else if(Se){let Pe=Te.get(M.texture),ze=I||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Pe.__webglTexture,z||0,ze)}R=-1},this.readRenderTargetPixels=function(M,I,z,B,D,ee,Se){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Te.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Se!==void 0&&(Pe=Pe[Se]),Pe){se.bindFramebuffer(C.FRAMEBUFFER,Pe);try{let ze=M.texture,ve=ze.format,De=ze.type;if(!Ie.textureFormatReadable(ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-B&&z>=0&&z<=M.height-D&&C.readPixels(I,z,B,D,Qe.convert(ve),Qe.convert(De),ee)}finally{let ze=b!==null?Te.get(b).__webglFramebuffer:null;se.bindFramebuffer(C.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(M,I,z,B,D,ee,Se){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Te.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Se!==void 0&&(Pe=Pe[Se]),Pe){let ze=M.texture,ve=ze.format,De=ze.type;if(!Ie.textureFormatReadable(ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=M.width-B&&z>=0&&z<=M.height-D){se.bindFramebuffer(C.FRAMEBUFFER,Pe);let Ue=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ue),C.bufferData(C.PIXEL_PACK_BUFFER,ee.byteLength,C.STREAM_READ),C.readPixels(I,z,B,D,Qe.convert(ve),Qe.convert(De),0);let rt=b!==null?Te.get(b).__webglFramebuffer:null;se.bindFramebuffer(C.FRAMEBUFFER,rt);let xt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await yE(C,xt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ue),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ee),C.deleteBuffer(Ue),C.deleteSync(xt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,I=null,z=0){M.isTexture!==!0&&(tl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,M=arguments[1]);let B=Math.pow(2,-z),D=Math.floor(M.image.width*B),ee=Math.floor(M.image.height*B),Se=I!==null?I.x:0,Pe=I!==null?I.y:0;be.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,z,0,0,Se,Pe,D,ee),se.unbindTexture()},this.copyTextureToTexture=function(M,I,z=null,B=null,D=0){M.isTexture!==!0&&(tl("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,M=arguments[1],I=arguments[2],D=arguments[3]||0,z=null);let ee,Se,Pe,ze,ve,De,Ue,rt,xt,Pt=M.isCompressedTexture?M.mipmaps[D]:M.image;z!==null?(ee=z.max.x-z.min.x,Se=z.max.y-z.min.y,Pe=z.isBox3?z.max.z-z.min.z:1,ze=z.min.x,ve=z.min.y,De=z.isBox3?z.min.z:0):(ee=Pt.width,Se=Pt.height,Pe=Pt.depth||1,ze=0,ve=0,De=0),B!==null?(Ue=B.x,rt=B.y,xt=B.z):(Ue=0,rt=0,xt=0);let Gt=Qe.convert(I.format),Nt=Qe.convert(I.type),He;I.isData3DTexture?(be.setTexture3D(I,0),He=C.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(be.setTexture2DArray(I,0),He=C.TEXTURE_2D_ARRAY):(be.setTexture2D(I,0),He=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);let Vn=C.getParameter(C.UNPACK_ROW_LENGTH),Hn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ri=C.getParameter(C.UNPACK_SKIP_PIXELS),Ma=C.getParameter(C.UNPACK_SKIP_ROWS),Dr=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Pt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Pt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ze),C.pixelStorei(C.UNPACK_SKIP_ROWS,ve),C.pixelStorei(C.UNPACK_SKIP_IMAGES,De);let Xs=M.isDataArrayTexture||M.isData3DTexture,At=I.isDataArrayTexture||I.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){let _i=Te.get(M),js=Te.get(I),br=Te.get(_i.__renderTarget),$s=Te.get(js.__renderTarget);se.bindFramebuffer(C.READ_FRAMEBUFFER,br.__webglFramebuffer),se.bindFramebuffer(C.DRAW_FRAMEBUFFER,$s.__webglFramebuffer);for(let on=0;on<Pe;on++)Xs&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Te.get(M).__webglTexture,D,De+on),M.isDepthTexture?(At&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Te.get(I).__webglTexture,D,xt+on),C.blitFramebuffer(ze,ve,ee,Se,Ue,rt,ee,Se,C.DEPTH_BUFFER_BIT,C.NEAREST)):At?C.copyTexSubImage3D(He,D,Ue,rt,xt+on,ze,ve,ee,Se):C.copyTexSubImage2D(He,D,Ue,rt,xt+on,ze,ve,ee,Se);se.bindFramebuffer(C.READ_FRAMEBUFFER,null),se.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else At?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(He,D,Ue,rt,xt,ee,Se,Pe,Gt,Nt,Pt.data):I.isCompressedArrayTexture?C.compressedTexSubImage3D(He,D,Ue,rt,xt,ee,Se,Pe,Gt,Pt.data):C.texSubImage3D(He,D,Ue,rt,xt,ee,Se,Pe,Gt,Nt,Pt):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,D,Ue,rt,ee,Se,Gt,Nt,Pt.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,D,Ue,rt,Pt.width,Pt.height,Gt,Pt.data):C.texSubImage2D(C.TEXTURE_2D,D,Ue,rt,ee,Se,Gt,Nt,Pt);C.pixelStorei(C.UNPACK_ROW_LENGTH,Vn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Hn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ri),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ma),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Dr),D===0&&I.generateMipmaps&&C.generateMipmap(He),se.unbindTexture()},this.copyTextureToTexture3D=function(M,I,z=null,B=null,D=0){return M.isTexture!==!0&&(tl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,B=arguments[1]||null,M=arguments[2],I=arguments[3],D=arguments[4]||0),tl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,I,z,B,D)},this.initRenderTarget=function(M){Te.get(M).__webglFramebuffer===void 0&&be.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?be.setTextureCube(M,0):M.isData3DTexture?be.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?be.setTexture2DArray(M,0):be.setTexture2D(M,0),se.unbindTexture()},this.resetState=function(){P=0,T=0,b=null,se.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}},PA=class b1{constructor(t,r=25e-5){this.isFogExp2=!0,this.name="",this.color=new $e(t),this.density=r}clone(){return new b1(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},my=class extends tr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},NA=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Df,this.updateRanges=[],this.version=0,this.uuid=en()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let i=0,n=this.stride;i<n;i++)this.array[e+i]=t.array[r+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=en()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=en()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Mr=new L,gy=class A1{constructor(t,r,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=r,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let r=0,i=this.data.count;r<i;r++)Mr.fromBufferAttribute(this,r),Mr.applyMatrix4(t),this.setXYZ(r,Mr.x,Mr.y,Mr.z);return this}applyNormalMatrix(t){for(let r=0,i=this.count;r<i;r++)Mr.fromBufferAttribute(this,r),Mr.applyNormalMatrix(t),this.setXYZ(r,Mr.x,Mr.y,Mr.z);return this}transformDirection(t){for(let r=0,i=this.count;r<i;r++)Mr.fromBufferAttribute(this,r),Mr.transformDirection(t),this.setXYZ(r,Mr.x,Mr.y,Mr.z);return this}getComponent(t,r){let i=this.array[t*this.data.stride+this.offset+r];return this.normalized&&(i=Ai(i,this.array)),i}setComponent(t,r,i){return this.normalized&&(i=yt(i,this.array)),this.data.array[t*this.data.stride+this.offset+r]=i,this}setX(t,r){return this.normalized&&(r=yt(r,this.array)),this.data.array[t*this.data.stride+this.offset]=r,this}setY(t,r){return this.normalized&&(r=yt(r,this.array)),this.data.array[t*this.data.stride+this.offset+1]=r,this}setZ(t,r){return this.normalized&&(r=yt(r,this.array)),this.data.array[t*this.data.stride+this.offset+2]=r,this}setW(t,r){return this.normalized&&(r=yt(r,this.array)),this.data.array[t*this.data.stride+this.offset+3]=r,this}getX(t){let r=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(r=Ai(r,this.array)),r}getY(t){let r=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(r=Ai(r,this.array)),r}getZ(t){let r=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(r=Ai(r,this.array)),r}getW(t){let r=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(r=Ai(r,this.array)),r}setXY(t,r,i){return t=t*this.data.stride+this.offset,this.normalized&&(r=yt(r,this.array),i=yt(i,this.array)),this.data.array[t+0]=r,this.data.array[t+1]=i,this}setXYZ(t,r,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(r=yt(r,this.array),i=yt(i,this.array),n=yt(n,this.array)),this.data.array[t+0]=r,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,r,i,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(r=yt(r,this.array),i=yt(i,this.array),n=yt(n,this.array),a=yt(a,this.array)),this.data.array[t+0]=r,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let r=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)r.push(this.data.array[n+a])}return new vr(new this.array.constructor(r),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new A1(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let r=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)r.push(this.data.array[n+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:r,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},C1=class extends Sa{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},fs,qo=new L,ms=new L,gs=new L,vs=new ne,Yo=new ne,R1=new bt,uc=new L,Ko=new L,cc=new L,vy=new ne,Bp=new ne,_y=new ne,_s=class extends tr{constructor(e=new C1){if(super(),this.isSprite=!0,this.type="Sprite",fs===void 0){fs=new rr;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new NA(t,5);fs.setIndex([0,1,2,0,2,3]),fs.setAttribute("position",new gy(r,3,0,!1)),fs.setAttribute("uv",new gy(r,2,3,!1))}this.geometry=fs,this.material=e,this.center=new ne(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ms.setFromMatrixScale(this.matrixWorld),R1.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ms.multiplyScalar(-gs.z);let r=this.material.rotation,i,n;r!==0&&(n=Math.cos(r),i=Math.sin(r));let a=this.center;hc(uc.set(-.5,-.5,0),gs,a,ms,i,n),hc(Ko.set(.5,-.5,0),gs,a,ms,i,n),hc(cc.set(.5,.5,0),gs,a,ms,i,n),vy.set(0,0),Bp.set(1,0),_y.set(1,1);let s=e.ray.intersectTriangle(uc,Ko,cc,!1,qo);if(s===null&&(hc(Ko.set(-.5,.5,0),gs,a,ms,i,n),Bp.set(0,1),s=e.ray.intersectTriangle(uc,cc,Ko,!1,qo),s===null))return;let o=e.ray.origin.distanceTo(qo);o<e.near||o>e.far||t.push({distance:o,point:qo.clone(),uv:Ms.getInterpolation(qo,uc,Ko,cc,vy,Bp,_y,new ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function hc(e,t,r,i,n,a){vs.subVectors(e,r).addScalar(.5).multiply(i),n!==void 0?(Yo.x=a*vs.x-n*vs.y,Yo.y=n*vs.x+a*vs.y):Yo.copy(vs),e.copy(t),e.x+=Yo.x,e.y+=Yo.y,e.applyMatrix4(R1)}var LA=class extends ti{constructor(e=null,t=1,r=1,i,n,a,s,o,l=Xr,u=Xr,c,h){super(null,a,s,o,l,u,i,n,c,h),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},yy=class extends vr{constructor(e,t,r,i=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ys=new bt,xy=new bt,dc=[],Sy=new xa,DA=new bt,Jo=new Ge,Zo=new Hs,ha=class extends Ge{constructor(e,t,r){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yy(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<r;i++)this.setMatrixAt(i,DA)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xa),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,ys),Sy.copy(e.boundingBox).applyMatrix4(ys),this.boundingBox.union(Sy)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,ys),Zo.copy(e.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(Zo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let r=t.morphTargetInfluences,i=this.morphTexture.source.data.data,n=r.length+1,a=e*n+1;for(let s=0;s<r.length;s++)r[s]=i[a+s]}raycast(e,t){let r=this.matrixWorld,i=this.count;if(Jo.geometry=this.geometry,Jo.material=this.material,Jo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zo.copy(this.boundingSphere),Zo.applyMatrix4(r),e.ray.intersectsSphere(Zo)!==!1))for(let n=0;n<i;n++){this.getMatrixAt(n,ys),xy.multiplyMatrices(r,ys),Jo.matrixWorld=xy,Jo.raycast(e,dc);for(let a=0,s=dc.length;a<s;a++){let o=dc[a];o.instanceId=n,o.object=this,t.push(o)}dc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new yy(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let r=t.morphTargetInfluences,i=r.length+1;this.morphTexture===null&&(this.morphTexture=new LA(new Float32Array(i*this.count),i,this.count,Jf,Ri));let n=this.morphTexture.source.data.data,a=0;for(let l=0;l<r.length;l++)a+=r[l];let s=this.geometry.morphTargetsRelative?1:1-a,o=i*e;n[o]=s,n.set(r,o+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},Ff=class extends Sa{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},My=new bt,zf=new l1,pc=new Hs,fc=new L,Vp=class extends tr{constructor(e=new rr,t=new Ff){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let r=this.geometry,i=this.matrixWorld,n=e.params.Points.threshold,a=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),pc.copy(r.boundingSphere),pc.applyMatrix4(i),pc.radius+=n,e.ray.intersectsSphere(pc)===!1)return;My.copy(i).invert(),zf.copy(e.ray).applyMatrix4(My);let s=n/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=r.index,u=r.attributes.position;if(l!==null){let c=Math.max(0,a.start),h=Math.min(l.count,a.start+a.count);for(let p=c,f=h;p<f;p++){let y=l.getX(p);fc.fromBufferAttribute(u,y),Ey(fc,y,o,i,e,t,this)}}else{let c=Math.max(0,a.start),h=Math.min(u.count,a.start+a.count);for(let p=c,f=h;p<f;p++)fc.fromBufferAttribute(u,p),Ey(fc,p,o,i,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,n=r.length;i<n;i++){let a=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}};function Ey(e,t,r,i,n,a,s){let o=zf.distanceSqToPoint(e);if(o<r){let l=new L;zf.closestPointToPoint(e,l),l.applyMatrix4(i);let u=n.ray.origin.distanceTo(l);if(u<n.near||u>n.far)return;a.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var UA=class extends ti{constructor(e,t,r,i,n,a,s,o,l){super(e,t,r,i,n,a,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Pi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){let t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){let t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],r,i=this.getPoint(0),n=0;t.push(0);for(let a=1;a<=e;a++)r=this.getPoint(a/e),n+=r.distanceTo(i),t.push(n),i=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let r=this.getLengths(),i=0,n=r.length,a;t?a=t:a=e*r[n-1];let s=0,o=n-1,l;for(;s<=o;)if(i=Math.floor(s+(o-s)/2),l=r[i]-a,l<0)s=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,r[i]===a)return i/(n-1);let u=r[i],c=r[i+1]-u,h=(a-u)/c;return(i+h)/(n-1)}getTangent(e,t){let r=e-1e-4,i=e+1e-4;r<0&&(r=0),i>1&&(i=1);let n=this.getPoint(r),a=this.getPoint(i),s=t||(n.isVector2?new ne:new L);return s.copy(a).sub(n).normalize(),s}getTangentAt(e,t){let r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){let r=new L,i=[],n=[],a=[],s=new L,o=new bt;for(let p=0;p<=e;p++){let f=p/e;i[p]=this.getTangentAt(f,new L)}n[0]=new L,a[0]=new L;let l=Number.MAX_VALUE,u=Math.abs(i[0].x),c=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=l&&(l=u,r.set(1,0,0)),c<=l&&(l=c,r.set(0,1,0)),h<=l&&r.set(0,0,1),s.crossVectors(i[0],r).normalize(),n[0].crossVectors(i[0],s),a[0].crossVectors(i[0],n[0]);for(let p=1;p<=e;p++){if(n[p]=n[p-1].clone(),a[p]=a[p-1].clone(),s.crossVectors(i[p-1],i[p]),s.length()>Number.EPSILON){s.normalize();let f=Math.acos(er(i[p-1].dot(i[p]),-1,1));n[p].applyMatrix4(o.makeRotationAxis(s,f))}a[p].crossVectors(i[p],n[p])}if(t===!0){let p=Math.acos(er(n[0].dot(n[e]),-1,1));p/=e,i[0].dot(s.crossVectors(n[0],n[e]))>0&&(p=-p);for(let f=1;f<=e;f++)n[f].applyMatrix4(o.makeRotationAxis(i[f],p*f)),a[f].crossVectors(i[f],n[f])}return{tangents:i,normals:n,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},nm=class extends Pi{constructor(e=0,t=0,r=1,i=1,n=0,a=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=i,this.aStartAngle=n,this.aEndAngle=a,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new ne){let r=t,i=Math.PI*2,n=this.aEndAngle-this.aStartAngle,a=Math.abs(n)<Number.EPSILON;for(;n<0;)n+=i;for(;n>i;)n-=i;n<Number.EPSILON&&(a?n=0:n=i),this.aClockwise===!0&&!a&&(n===i?n=-i:n=n-i);let s=this.aStartAngle+e*n,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let u=Math.cos(this.aRotation),c=Math.sin(this.aRotation),h=o-this.aX,p=l-this.aY;o=h*u-p*c+this.aX,l=h*c+p*u+this.aY}return r.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},IA=class extends nm{constructor(e,t,r,i,n,a){super(e,t,r,r,i,n,a),this.isArcCurve=!0,this.type="ArcCurve"}};function am(){let e=0,t=0,r=0,i=0;function n(a,s,o,l){e=a,t=o,r=-3*a+3*s-2*o-l,i=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,u){n(s,o,u*(o-a),u*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,u,c,h){let p=(s-a)/u-(o-a)/(u+c)+(o-s)/c,f=(o-s)/c-(l-s)/(c+h)+(l-o)/h;p*=c,f*=c,n(s,o,p,f)},calc:function(a){let s=a*a,o=s*a;return e+t*a+r*s+i*o}}}var mc=new L,Hp=new am,Gp=new am,Wp=new am,OA=class extends Pi{constructor(e=[],t=!1,r="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=i}getPoint(e,t=new L){let r=t,i=this.points,n=i.length,a=(n-(this.closed?0:1))*e,s=Math.floor(a),o=a-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/n)+1)*n:o===0&&s===n-1&&(s=n-2,o=1);let l,u;this.closed||s>0?l=i[(s-1)%n]:(mc.subVectors(i[0],i[1]).add(i[0]),l=mc);let c=i[s%n],h=i[(s+1)%n];if(this.closed||s+2<n?u=i[(s+2)%n]:(mc.subVectors(i[n-1],i[n-2]).add(i[n-1]),u=mc),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(c),p),y=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(u),p);y<1e-4&&(y=1),f<1e-4&&(f=y),_<1e-4&&(_=y),Hp.initNonuniformCatmullRom(l.x,c.x,h.x,u.x,f,y,_),Gp.initNonuniformCatmullRom(l.y,c.y,h.y,u.y,f,y,_),Wp.initNonuniformCatmullRom(l.z,c.z,h.z,u.z,f,y,_)}else this.curveType==="catmullrom"&&(Hp.initCatmullRom(l.x,c.x,h.x,u.x,this.tension),Gp.initCatmullRom(l.y,c.y,h.y,u.y,this.tension),Wp.initCatmullRom(l.z,c.z,h.z,u.z,this.tension));return r.set(Hp.calc(o),Gp.calc(o),Wp.calc(o)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function wy(e,t,r,i,n){let a=(i-t)*.5,s=(n-r)*.5,o=e*e,l=e*o;return(2*r-2*i+a+s)*l+(-3*r+3*i-2*a-s)*o+a*e+r}function kA(e,t){let r=1-e;return r*r*t}function FA(e,t){return 2*(1-e)*e*t}function zA(e,t){return e*e*t}function nl(e,t,r,i){return kA(e,t)+FA(e,r)+zA(e,i)}function BA(e,t){let r=1-e;return r*r*r*t}function VA(e,t){let r=1-e;return 3*r*r*e*t}function HA(e,t){return 3*(1-e)*e*e*t}function GA(e,t){return e*e*e*t}function al(e,t,r,i,n){return BA(e,t)+VA(e,r)+HA(e,i)+GA(e,n)}var P1=class extends Pi{constructor(e=new ne,t=new ne,r=new ne,i=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=i}getPoint(e,t=new ne){let r=t,i=this.v0,n=this.v1,a=this.v2,s=this.v3;return r.set(al(e,i.x,n.x,a.x,s.x),al(e,i.y,n.y,a.y,s.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},WA=class extends Pi{constructor(e=new L,t=new L,r=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=i}getPoint(e,t=new L){let r=t,i=this.v0,n=this.v1,a=this.v2,s=this.v3;return r.set(al(e,i.x,n.x,a.x,s.x),al(e,i.y,n.y,a.y,s.y),al(e,i.z,n.z,a.z,s.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},N1=class extends Pi{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},XA=class extends Pi{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},L1=class extends Pi{constructor(e=new ne,t=new ne,r=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new ne){let r=t,i=this.v0,n=this.v1,a=this.v2;return r.set(nl(e,i.x,n.x,a.x),nl(e,i.y,n.y,a.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},D1=class extends Pi{constructor(e=new L,t=new L,r=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new L){let r=t,i=this.v0,n=this.v1,a=this.v2;return r.set(nl(e,i.x,n.x,a.x),nl(e,i.y,n.y,a.y),nl(e,i.z,n.z,a.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},U1=class extends Pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let r=t,i=this.points,n=(i.length-1)*e,a=Math.floor(n),s=n-a,o=i[a===0?a:a-1],l=i[a],u=i[a>i.length-2?i.length-1:a+1],c=i[a>i.length-3?i.length-1:a+2];return r.set(wy(s,o.x,l.x,u.x,c.x),wy(s,o.y,l.y,u.y,c.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(new ne().fromArray(i))}return this}},Bf=Object.freeze({__proto__:null,ArcCurve:IA,CatmullRomCurve3:OA,CubicBezierCurve:P1,CubicBezierCurve3:WA,EllipseCurve:nm,LineCurve:N1,LineCurve3:XA,QuadraticBezierCurve:L1,QuadraticBezierCurve3:D1,SplineCurve:U1}),jA=class extends Pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bf[r](t,e))}return this}getPoint(e,t){let r=e*this.getLength(),i=this.getCurveLengths(),n=0;for(;n<i.length;){if(i[n]>=r){let a=i[n]-r,s=this.curves[n],o=s.getLength(),l=o===0?0:1-a/o;return s.getPointAt(l,t)}n++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let r=0,i=this.curves.length;r<i;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],r;for(let i=0,n=this.curves;i<n.length;i++){let a=n[i],s=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,o=a.getPoints(s);for(let l=0;l<o.length;l++){let u=o[l];r&&r.equals(u)||(t.push(u),r=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){let i=e.curves[t];this.curves.push(new Bf[i.type]().fromJSON(i))}return this}},sl=class extends jA{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let r=new N1(this.currentPoint.clone(),new ne(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,i){let n=new L1(this.currentPoint.clone(),new ne(e,t),new ne(r,i));return this.curves.push(n),this.currentPoint.set(r,i),this}bezierCurveTo(e,t,r,i,n,a){let s=new P1(this.currentPoint.clone(),new ne(e,t),new ne(r,i),new ne(n,a));return this.curves.push(s),this.currentPoint.set(n,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),r=new U1(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,i,n,a){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,r,i,n,a),this}absarc(e,t,r,i,n,a){return this.absellipse(e,t,r,r,i,n,a),this}ellipse(e,t,r,i,n,a,s,o){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,r,i,n,a,s,o),this}absellipse(e,t,r,i,n,a,s,o){let l=new nm(e,t,r,i,n,a,s,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},$A=class I1 extends rr{constructor(t=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],r=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:r,phiStart:i,phiLength:n},r=Math.floor(r),n=er(n,0,Math.PI*2);let a=[],s=[],o=[],l=[],u=[],c=1/r,h=new L,p=new ne,f=new L,y=new L,_=new L,v=0,d=0;for(let g=0;g<=t.length-1;g++)switch(g){case 0:v=t[g+1].x-t[g].x,d=t[g+1].y-t[g].y,f.x=d*1,f.y=-v,f.z=d*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:v=t[g+1].x-t[g].x,d=t[g+1].y-t[g].y,f.x=d*1,f.y=-v,f.z=d*0,y.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(y)}for(let g=0;g<=r;g++){let m=i+g*c*n,x=Math.sin(m),P=Math.cos(m);for(let T=0;T<=t.length-1;T++){h.x=t[T].x*x,h.y=t[T].y,h.z=t[T].x*P,s.push(h.x,h.y,h.z),p.x=g/r,p.y=T/(t.length-1),o.push(p.x,p.y);let b=l[3*T+0]*x,R=l[3*T+1],w=l[3*T+0]*P;u.push(b,R,w)}}for(let g=0;g<r;g++)for(let m=0;m<t.length-1;m++){let x=m+g*t.length,P=x,T=x+t.length,b=x+t.length+1,R=x+1;a.push(P,T,R),a.push(b,R,T)}this.setIndex(a),this.setAttribute("position",new vt(s,3)),this.setAttribute("uv",new vt(o,2)),this.setAttribute("normal",new vt(u,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new I1(t.points,t.segments,t.phiStart,t.phiLength)}},Vf=class O1 extends rr{constructor(t=1,r=1,i=1,n=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:r,height:i,radialSegments:n,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};let u=this;n=Math.floor(n),a=Math.floor(a);let c=[],h=[],p=[],f=[],y=0,_=[],v=i/2,d=0;g(),s===!1&&(t>0&&m(!0),r>0&&m(!1)),this.setIndex(c),this.setAttribute("position",new vt(h,3)),this.setAttribute("normal",new vt(p,3)),this.setAttribute("uv",new vt(f,2));function g(){let x=new L,P=new L,T=0,b=(r-t)/i;for(let R=0;R<=a;R++){let w=[],S=R/a,N=S*(r-t)+t;for(let k=0;k<=n;k++){let V=k/n,W=V*l+o,j=Math.sin(W),X=Math.cos(W);P.x=N*j,P.y=-S*i+v,P.z=N*X,h.push(P.x,P.y,P.z),x.set(j,b,X).normalize(),p.push(x.x,x.y,x.z),f.push(V,1-S),w.push(y++)}_.push(w)}for(let R=0;R<n;R++)for(let w=0;w<a;w++){let S=_[w][R],N=_[w+1][R],k=_[w+1][R+1],V=_[w][R+1];(t>0||w!==0)&&(c.push(S,N,V),T+=3),(r>0||w!==a-1)&&(c.push(N,k,V),T+=3)}u.addGroup(d,T,0),d+=T}function m(x){let P=y,T=new ne,b=new L,R=0,w=x===!0?t:r,S=x===!0?1:-1;for(let k=1;k<=n;k++)h.push(0,v*S,0),p.push(0,S,0),f.push(.5,.5),y++;let N=y;for(let k=0;k<=n;k++){let V=k/n*l+o,W=Math.cos(V),j=Math.sin(V);b.x=w*j,b.y=v*S,b.z=w*W,h.push(b.x,b.y,b.z),p.push(0,S,0),T.x=W*.5+.5,T.y=j*.5*S+.5,f.push(T.x,T.y),y++}for(let k=0;k<n;k++){let V=P+k,W=N+k;x===!0?c.push(W,W+1,V):c.push(W+1,W,V),R+=3}u.addGroup(d,R,x===!0?1:2),d+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new O1(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Qo=class k1 extends Vf{constructor(t=1,r=1,i=32,n=1,a=!1,s=0,o=Math.PI*2){super(0,t,r,i,n,a,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:r,radialSegments:i,heightSegments:n,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(t){return new k1(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qA=class F1 extends rr{constructor(t=[],r=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:r,radius:i,detail:n};let a=[],s=[];o(n),u(i),c(),this.setAttribute("position",new vt(a,3)),this.setAttribute("normal",new vt(a.slice(),3)),this.setAttribute("uv",new vt(s,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(g){let m=new L,x=new L,P=new L;for(let T=0;T<r.length;T+=3)f(r[T+0],m),f(r[T+1],x),f(r[T+2],P),l(m,x,P,g)}function l(g,m,x,P){let T=P+1,b=[];for(let R=0;R<=T;R++){b[R]=[];let w=g.clone().lerp(x,R/T),S=m.clone().lerp(x,R/T),N=T-R;for(let k=0;k<=N;k++)k===0&&R===T?b[R][k]=w:b[R][k]=w.clone().lerp(S,k/N)}for(let R=0;R<T;R++)for(let w=0;w<2*(T-R)-1;w++){let S=Math.floor(w/2);w%2===0?(p(b[R][S+1]),p(b[R+1][S]),p(b[R][S])):(p(b[R][S+1]),p(b[R+1][S+1]),p(b[R+1][S]))}}function u(g){let m=new L;for(let x=0;x<a.length;x+=3)m.x=a[x+0],m.y=a[x+1],m.z=a[x+2],m.normalize().multiplyScalar(g),a[x+0]=m.x,a[x+1]=m.y,a[x+2]=m.z}function c(){let g=new L;for(let m=0;m<a.length;m+=3){g.x=a[m+0],g.y=a[m+1],g.z=a[m+2];let x=v(g)/2/Math.PI+.5,P=d(g)/Math.PI+.5;s.push(x,1-P)}y(),h()}function h(){for(let g=0;g<s.length;g+=6){let m=s[g+0],x=s[g+2],P=s[g+4],T=Math.max(m,x,P),b=Math.min(m,x,P);T>.9&&b<.1&&(m<.2&&(s[g+0]+=1),x<.2&&(s[g+2]+=1),P<.2&&(s[g+4]+=1))}}function p(g){a.push(g.x,g.y,g.z)}function f(g,m){let x=g*3;m.x=t[x+0],m.y=t[x+1],m.z=t[x+2]}function y(){let g=new L,m=new L,x=new L,P=new L,T=new ne,b=new ne,R=new ne;for(let w=0,S=0;w<a.length;w+=9,S+=6){g.set(a[w+0],a[w+1],a[w+2]),m.set(a[w+3],a[w+4],a[w+5]),x.set(a[w+6],a[w+7],a[w+8]),T.set(s[S+0],s[S+1]),b.set(s[S+2],s[S+3]),R.set(s[S+4],s[S+5]),P.copy(g).add(m).add(x).divideScalar(3);let N=v(P);_(T,S+0,g,N),_(b,S+2,m,N),_(R,S+4,x,N)}}function _(g,m,x,P){P<0&&g.x===1&&(s[m]=g.x-1),x.x===0&&x.z===0&&(s[m]=P/2/Math.PI+.5)}function v(g){return Math.atan2(g.z,-g.x)}function d(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new F1(t.vertices,t.indices,t.radius,t.details)}},fi=class extends sl{constructor(e){super(e),this.uuid=en(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let r=0,i=this.holes.length;r<i;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){let i=e.holes[t];this.holes.push(new sl().fromJSON(i))}return this}},YA={triangulate:function(e,t,r=2){let i=t&&t.length,n=i?t[0]*r:e.length,a=z1(e,0,n,r,!0),s=[];if(!a||a.next===a.prev)return s;let o,l,u,c,h,p,f;if(i&&(a=eC(e,t,a,r)),e.length>80*r){o=u=e[0],l=c=e[1];for(let y=r;y<n;y+=r)h=e[y],p=e[y+1],h<o&&(o=h),p<l&&(l=p),h>u&&(u=h),p>c&&(c=p);f=Math.max(u-o,c-l),f=f!==0?32767/f:0}return ul(a,s,r,o,l,f,0),s}};function z1(e,t,r,i,n){let a,s;if(n===hC(e,t,r,i)>0)for(a=t;a<r;a+=i)s=Ty(a,e[a],e[a+1],s);else for(a=r-i;a>=t;a-=i)s=Ty(a,e[a],e[a+1],s);return s&&kc(s,s.next)&&(hl(s),s=s.next),s}function ya(e,t){if(!e)return e;t||(t=e);let r=e,i;do if(i=!1,!r.steiner&&(kc(r,r.next)||kt(r.prev,r,r.next)===0)){if(hl(r),r=t=r.prev,r===r.next)break;i=!0}else r=r.next;while(i||r!==t);return t}function ul(e,t,r,i,n,a,s){if(!e)return;!s&&a&&aC(e,i,n,a);let o=e,l,u;for(;e.prev!==e.next;){if(l=e.prev,u=e.next,a?JA(e,i,n,a):KA(e)){t.push(l.i/r|0),t.push(e.i/r|0),t.push(u.i/r|0),hl(e),e=u.next,o=u.next;continue}if(e=u,e===o){s?s===1?(e=ZA(ya(e),t,r),ul(e,t,r,i,n,a,2)):s===2&&QA(e,t,r,i,n,a):ul(ya(e),t,r,i,n,a,1);break}}}function KA(e){let t=e.prev,r=e,i=e.next;if(kt(t,r,i)>=0)return!1;let n=t.x,a=r.x,s=i.x,o=t.y,l=r.y,u=i.y,c=n<a?n<s?n:s:a<s?a:s,h=o<l?o<u?o:u:l<u?l:u,p=n>a?n>s?n:s:a>s?a:s,f=o>l?o>u?o:u:l>u?l:u,y=i.next;for(;y!==t;){if(y.x>=c&&y.x<=p&&y.y>=h&&y.y<=f&&As(n,o,a,l,s,u,y.x,y.y)&&kt(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function JA(e,t,r,i){let n=e.prev,a=e,s=e.next;if(kt(n,a,s)>=0)return!1;let o=n.x,l=a.x,u=s.x,c=n.y,h=a.y,p=s.y,f=o<l?o<u?o:u:l<u?l:u,y=c<h?c<p?c:p:h<p?h:p,_=o>l?o>u?o:u:l>u?l:u,v=c>h?c>p?c:p:h>p?h:p,d=Hf(f,y,t,r,i),g=Hf(_,v,t,r,i),m=e.prevZ,x=e.nextZ;for(;m&&m.z>=d&&x&&x.z<=g;){if(m.x>=f&&m.x<=_&&m.y>=y&&m.y<=v&&m!==n&&m!==s&&As(o,c,l,h,u,p,m.x,m.y)&&kt(m.prev,m,m.next)>=0||(m=m.prevZ,x.x>=f&&x.x<=_&&x.y>=y&&x.y<=v&&x!==n&&x!==s&&As(o,c,l,h,u,p,x.x,x.y)&&kt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;m&&m.z>=d;){if(m.x>=f&&m.x<=_&&m.y>=y&&m.y<=v&&m!==n&&m!==s&&As(o,c,l,h,u,p,m.x,m.y)&&kt(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;x&&x.z<=g;){if(x.x>=f&&x.x<=_&&x.y>=y&&x.y<=v&&x!==n&&x!==s&&As(o,c,l,h,u,p,x.x,x.y)&&kt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function ZA(e,t,r){let i=e;do{let n=i.prev,a=i.next.next;!kc(n,a)&&B1(n,i,i.next,a)&&cl(n,a)&&cl(a,n)&&(t.push(n.i/r|0),t.push(i.i/r|0),t.push(a.i/r|0),hl(i),hl(i.next),i=e=a),i=i.next}while(i!==e);return ya(i)}function QA(e,t,r,i,n,a){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&lC(s,o)){let l=V1(s,o);s=ya(s,s.next),l=ya(l,l.next),ul(s,t,r,i,n,a,0),ul(l,t,r,i,n,a,0);return}o=o.next}s=s.next}while(s!==e)}function eC(e,t,r,i){let n=[],a,s,o,l,u;for(a=0,s=t.length;a<s;a++)o=t[a]*i,l=a<s-1?t[a+1]*i:e.length,u=z1(e,o,l,i,!1),u===u.next&&(u.steiner=!0),n.push(oC(u));for(n.sort(tC),a=0;a<n.length;a++)r=rC(n[a],r);return r}function tC(e,t){return e.x-t.x}function rC(e,t){let r=iC(e,t);if(!r)return t;let i=V1(r,e);return ya(i,i.next),ya(r,r.next)}function iC(e,t){let r=t,i=-1/0,n,a=e.x,s=e.y;do{if(s<=r.y&&s>=r.next.y&&r.next.y!==r.y){let p=r.x+(s-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(p<=a&&p>i&&(i=p,n=r.x<r.next.x?r:r.next,p===a))return n}r=r.next}while(r!==t);if(!n)return null;let o=n,l=n.x,u=n.y,c=1/0,h;r=n;do a>=r.x&&r.x>=l&&a!==r.x&&As(s<u?a:i,s,l,u,s<u?i:a,s,r.x,r.y)&&(h=Math.abs(s-r.y)/(a-r.x),cl(r,e)&&(h<c||h===c&&(r.x>n.x||r.x===n.x&&nC(n,r)))&&(n=r,c=h)),r=r.next;while(r!==o);return n}function nC(e,t){return kt(e.prev,e,t.prev)<0&&kt(t.next,e,e.next)<0}function aC(e,t,r,i){let n=e;do n.z===0&&(n.z=Hf(n.x,n.y,t,r,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==e);n.prevZ.nextZ=null,n.prevZ=null,sC(n)}function sC(e){let t,r,i,n,a,s,o,l,u=1;do{for(r=e,e=null,a=null,s=0;r;){for(s++,i=r,o=0,t=0;t<u&&(o++,i=i.nextZ,!!i);t++);for(l=u;o>0||l>0&&i;)o!==0&&(l===0||!i||r.z<=i.z)?(n=r,r=r.nextZ,o--):(n=i,i=i.nextZ,l--),a?a.nextZ=n:e=n,n.prevZ=a,a=n;r=i}a.nextZ=null,u*=2}while(s>1);return e}function Hf(e,t,r,i,n){return e=(e-r)*n|0,t=(t-i)*n|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function oC(e){let t=e,r=e;do(t.x<r.x||t.x===r.x&&t.y<r.y)&&(r=t),t=t.next;while(t!==e);return r}function As(e,t,r,i,n,a,s,o){return(n-s)*(t-o)>=(e-s)*(a-o)&&(e-s)*(i-o)>=(r-s)*(t-o)&&(r-s)*(a-o)>=(n-s)*(i-o)}function lC(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!uC(e,t)&&(cl(e,t)&&cl(t,e)&&cC(e,t)&&(kt(e.prev,e,t.prev)||kt(e,t.prev,t))||kc(e,t)&&kt(e.prev,e,e.next)>0&&kt(t.prev,t,t.next)>0)}function kt(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function kc(e,t){return e.x===t.x&&e.y===t.y}function B1(e,t,r,i){let n=vc(kt(e,t,r)),a=vc(kt(e,t,i)),s=vc(kt(r,i,e)),o=vc(kt(r,i,t));return!!(n!==a&&s!==o||n===0&&gc(e,r,t)||a===0&&gc(e,i,t)||s===0&&gc(r,e,i)||o===0&&gc(r,t,i))}function gc(e,t,r){return t.x<=Math.max(e.x,r.x)&&t.x>=Math.min(e.x,r.x)&&t.y<=Math.max(e.y,r.y)&&t.y>=Math.min(e.y,r.y)}function vc(e){return e>0?1:e<0?-1:0}function uC(e,t){let r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&B1(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}function cl(e,t){return kt(e.prev,e,e.next)<0?kt(e,t,e.next)>=0&&kt(e,e.prev,t)>=0:kt(e,t,e.prev)<0||kt(e,e.next,t)<0}function cC(e,t){let r=e,i=!1,n=(e.x+t.x)/2,a=(e.y+t.y)/2;do r.y>a!=r.next.y>a&&r.next.y!==r.y&&n<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next;while(r!==e);return i}function V1(e,t){let r=new Gf(e.i,e.x,e.y),i=new Gf(t.i,t.x,t.y),n=e.next,a=t.prev;return e.next=t,t.prev=e,r.next=n,n.prev=r,i.next=r,r.prev=i,a.next=i,i.prev=a,i}function Ty(e,t,r,i){let n=new Gf(e,t,r);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function hl(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Gf(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function hC(e,t,r,i){let n=0;for(let a=t,s=r-i;a<r;a+=i)n+=(e[s]-e[a])*(e[a+1]+e[s+1]),s=a;return n}var Ls=class H1{static area(t){let r=t.length,i=0;for(let n=r-1,a=0;a<r;n=a++)i+=t[n].x*t[a].y-t[a].x*t[n].y;return i*.5}static isClockWise(t){return H1.area(t)<0}static triangulateShape(t,r){let i=[],n=[],a=[];by(t),Ay(i,t);let s=t.length;r.forEach(by);for(let l=0;l<r.length;l++)n.push(s),s+=r[l].length,Ay(i,r[l]);let o=YA.triangulate(i,n);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}};function by(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Ay(e,t){for(let r=0;r<t.length;r++)e.push(t[r].x),e.push(t[r].y)}var _c=class G1 extends rr{constructor(t=new fi([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),r={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:r},t=Array.isArray(t)?t:[t];let i=this,n=[],a=[];for(let o=0,l=t.length;o<l;o++){let u=t[o];s(u)}this.setAttribute("position",new vt(n,3)),this.setAttribute("uv",new vt(a,2)),this.computeVertexNormals();function s(o){let l=[],u=r.curveSegments!==void 0?r.curveSegments:12,c=r.steps!==void 0?r.steps:1,h=r.depth!==void 0?r.depth:1,p=r.bevelEnabled!==void 0?r.bevelEnabled:!0,f=r.bevelThickness!==void 0?r.bevelThickness:.2,y=r.bevelSize!==void 0?r.bevelSize:f-.1,_=r.bevelOffset!==void 0?r.bevelOffset:0,v=r.bevelSegments!==void 0?r.bevelSegments:3,d=r.extrudePath,g=r.UVGenerator!==void 0?r.UVGenerator:dC,m,x=!1,P,T,b,R;d&&(m=d.getSpacedPoints(c),x=!0,p=!1,P=d.computeFrenetFrames(c,!1),T=new L,b=new L,R=new L),p||(v=0,f=0,y=0,_=0);let w=o.extractPoints(u),S=w.shape,N=w.holes;if(!Ls.isClockWise(S)){S=S.reverse();for(let Z=0,pe=N.length;Z<pe;Z++){let C=N[Z];Ls.isClockWise(C)&&(N[Z]=C.reverse())}}let k=Ls.triangulateShape(S,N),V=S;for(let Z=0,pe=N.length;Z<pe;Z++){let C=N[Z];S=S.concat(C)}function W(Z,pe,C){return pe||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(pe,C)}let j=S.length,X=k.length;function ae(Z,pe,C){let Ce,le,Ie,se=Z.x-pe.x,We=Z.y-pe.y,Te=C.x-Z.x,be=C.y-Z.y,A=se*se+We*We,E=se*be-We*Te;if(Math.abs(E)>Number.EPSILON){let F=Math.sqrt(A),J=Math.sqrt(Te*Te+be*be),te=pe.x-We/F,q=pe.y+se/F,Ve=C.x-be/J,ye=C.y+Te/J,xe=((Ve-te)*be-(ye-q)*Te)/(se*be-We*Te);Ce=te+se*xe-Z.x,le=q+We*xe-Z.y;let qe=Ce*Ce+le*le;if(qe<=2)return new ne(Ce,le);Ie=Math.sqrt(qe/2)}else{let F=!1;se>Number.EPSILON?Te>Number.EPSILON&&(F=!0):se<-Number.EPSILON?Te<-Number.EPSILON&&(F=!0):Math.sign(We)===Math.sign(be)&&(F=!0),F?(Ce=-We,le=se,Ie=Math.sqrt(A)):(Ce=se,le=We,Ie=Math.sqrt(A/2))}return new ne(Ce/Ie,le/Ie)}let $=[];for(let Z=0,pe=V.length,C=pe-1,Ce=Z+1;Z<pe;Z++,C++,Ce++)C===pe&&(C=0),Ce===pe&&(Ce=0),$[Z]=ae(V[Z],V[C],V[Ce]);let de=[],Me,Ze=$.concat();for(let Z=0,pe=N.length;Z<pe;Z++){let C=N[Z];Me=[];for(let Ce=0,le=C.length,Ie=le-1,se=Ce+1;Ce<le;Ce++,Ie++,se++)Ie===le&&(Ie=0),se===le&&(se=0),Me[Ce]=ae(C[Ce],C[Ie],C[se]);de.push(Me),Ze=Ze.concat(Me)}for(let Z=0;Z<v;Z++){let pe=Z/v,C=f*Math.cos(pe*Math.PI/2),Ce=y*Math.sin(pe*Math.PI/2)+_;for(let le=0,Ie=V.length;le<Ie;le++){let se=W(V[le],$[le],Ce);Le(se.x,se.y,-C)}for(let le=0,Ie=N.length;le<Ie;le++){let se=N[le];Me=de[le];for(let We=0,Te=se.length;We<Te;We++){let be=W(se[We],Me[We],Ce);Le(be.x,be.y,-C)}}}let tt=y+_;for(let Z=0;Z<j;Z++){let pe=p?W(S[Z],Ze[Z],tt):S[Z];x?(b.copy(P.normals[0]).multiplyScalar(pe.x),T.copy(P.binormals[0]).multiplyScalar(pe.y),R.copy(m[0]).add(b).add(T),Le(R.x,R.y,R.z)):Le(pe.x,pe.y,0)}for(let Z=1;Z<=c;Z++)for(let pe=0;pe<j;pe++){let C=p?W(S[pe],Ze[pe],tt):S[pe];x?(b.copy(P.normals[Z]).multiplyScalar(C.x),T.copy(P.binormals[Z]).multiplyScalar(C.y),R.copy(m[Z]).add(b).add(T),Le(R.x,R.y,R.z)):Le(C.x,C.y,h/c*Z)}for(let Z=v-1;Z>=0;Z--){let pe=Z/v,C=f*Math.cos(pe*Math.PI/2),Ce=y*Math.sin(pe*Math.PI/2)+_;for(let le=0,Ie=V.length;le<Ie;le++){let se=W(V[le],$[le],Ce);Le(se.x,se.y,h+C)}for(let le=0,Ie=N.length;le<Ie;le++){let se=N[le];Me=de[le];for(let We=0,Te=se.length;We<Te;We++){let be=W(se[We],Me[We],Ce);x?Le(be.x,be.y+m[c-1].y,m[c-1].x+C):Le(be.x,be.y,h+C)}}}K(),ce();function K(){let Z=n.length/3;if(p){let pe=0,C=j*pe;for(let Ce=0;Ce<X;Ce++){let le=k[Ce];ge(le[2]+C,le[1]+C,le[0]+C)}pe=c+v*2,C=j*pe;for(let Ce=0;Ce<X;Ce++){let le=k[Ce];ge(le[0]+C,le[1]+C,le[2]+C)}}else{for(let pe=0;pe<X;pe++){let C=k[pe];ge(C[2],C[1],C[0])}for(let pe=0;pe<X;pe++){let C=k[pe];ge(C[0]+j*c,C[1]+j*c,C[2]+j*c)}}i.addGroup(Z,n.length/3-Z,0)}function ce(){let Z=n.length/3,pe=0;ke(V,pe),pe+=V.length;for(let C=0,Ce=N.length;C<Ce;C++){let le=N[C];ke(le,pe),pe+=le.length}i.addGroup(Z,n.length/3-Z,1)}function ke(Z,pe){let C=Z.length;for(;--C>=0;){let Ce=C,le=C-1;le<0&&(le=Z.length-1);for(let Ie=0,se=c+v*2;Ie<se;Ie++){let We=j*Ie,Te=j*(Ie+1),be=pe+Ce+We,A=pe+le+We,E=pe+le+Te,F=pe+Ce+Te;Ye(be,A,E,F)}}}function Le(Z,pe,C){l.push(Z),l.push(pe),l.push(C)}function ge(Z,pe,C){it(Z),it(pe),it(C);let Ce=n.length/3,le=g.generateTopUV(i,n,Ce-3,Ce-2,Ce-1);Je(le[0]),Je(le[1]),Je(le[2])}function Ye(Z,pe,C,Ce){it(Z),it(pe),it(Ce),it(pe),it(C),it(Ce);let le=n.length/3,Ie=g.generateSideWallUV(i,n,le-6,le-3,le-2,le-1);Je(Ie[0]),Je(Ie[1]),Je(Ie[3]),Je(Ie[1]),Je(Ie[2]),Je(Ie[3])}function it(Z){n.push(l[Z*3+0]),n.push(l[Z*3+1]),n.push(l[Z*3+2])}function Je(Z){a.push(Z.x),a.push(Z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),r=this.parameters.shapes,i=this.parameters.options;return pC(r,i,t)}static fromJSON(t,r){let i=[];for(let a=0,s=t.shapes.length;a<s;a++){let o=r[t.shapes[a]];i.push(o)}let n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new Bf[n.type]().fromJSON(n)),new G1(i,t.options)}},dC={generateTopUV:function(e,t,r,i,n){let a=t[r*3],s=t[r*3+1],o=t[i*3],l=t[i*3+1],u=t[n*3],c=t[n*3+1];return[new ne(a,s),new ne(o,l),new ne(u,c)]},generateSideWallUV:function(e,t,r,i,n,a){let s=t[r*3],o=t[r*3+1],l=t[r*3+2],u=t[i*3],c=t[i*3+1],h=t[i*3+2],p=t[n*3],f=t[n*3+1],y=t[n*3+2],_=t[a*3],v=t[a*3+1],d=t[a*3+2];return Math.abs(o-c)<Math.abs(s-u)?[new ne(s,1-l),new ne(u,1-h),new ne(p,1-y),new ne(_,1-d)]:[new ne(o,1-l),new ne(c,1-h),new ne(f,1-y),new ne(v,1-d)]}};function pC(e,t,r){if(r.shapes=[],Array.isArray(e))for(let i=0,n=e.length;i<n;i++){let a=e[i];r.shapes.push(a.uuid)}else r.shapes.push(e.uuid);return r.options=Object.assign({},t),t.extrudePath!==void 0&&(r.options.extrudePath=t.extrudePath.toJSON()),r}var Cy=class W1 extends qA{constructor(t=1,r=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,a,t,r),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:r}}static fromJSON(t){return new W1(t.radius,t.detail)}},yc=class X1 extends rr{constructor(t=new fi([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),r=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:r};let i=[],n=[],a=[],s=[],o=0,l=0;if(Array.isArray(t)===!1)u(t);else for(let c=0;c<t.length;c++)u(t[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new vt(n,3)),this.setAttribute("normal",new vt(a,3)),this.setAttribute("uv",new vt(s,2));function u(c){let h=n.length/3,p=c.extractPoints(r),f=p.shape,y=p.holes;Ls.isClockWise(f)===!1&&(f=f.reverse());for(let v=0,d=y.length;v<d;v++){let g=y[v];Ls.isClockWise(g)===!0&&(y[v]=g.reverse())}let _=Ls.triangulateShape(f,y);for(let v=0,d=y.length;v<d;v++){let g=y[v];f=f.concat(g)}for(let v=0,d=f.length;v<d;v++){let g=f[v];n.push(g.x,g.y,0),a.push(0,0,1),s.push(g.x,g.y)}for(let v=0,d=_.length;v<d;v++){let g=_[v],m=g[0]+h,x=g[1]+h,P=g[2]+h;i.push(m,x,P),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),r=this.parameters.shapes;return fC(r,t)}static fromJSON(t,r){let i=[];for(let n=0,a=t.shapes.length;n<a;n++){let s=r[t.shapes[n]];i.push(s)}return new X1(i,t.curveSegments)}};function fC(e,t){if(t.shapes=[],Array.isArray(e))for(let r=0,i=e.length;r<i;r++){let n=e[r];t.shapes.push(n.uuid)}else t.shapes.push(e.uuid);return t}var In=class j1 extends rr{constructor(t=1,r=32,i=16,n=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:r,heightSegments:i,phiStart:n,phiLength:a,thetaStart:s,thetaLength:o},r=Math.max(3,Math.floor(r)),i=Math.max(2,Math.floor(i));let l=Math.min(s+o,Math.PI),u=0,c=[],h=new L,p=new L,f=[],y=[],_=[],v=[];for(let d=0;d<=i;d++){let g=[],m=d/i,x=0;d===0&&s===0?x=.5/r:d===i&&l===Math.PI&&(x=-.5/r);for(let P=0;P<=r;P++){let T=P/r;h.x=-t*Math.cos(n+T*a)*Math.sin(s+m*o),h.y=t*Math.cos(s+m*o),h.z=t*Math.sin(n+T*a)*Math.sin(s+m*o),y.push(h.x,h.y,h.z),p.copy(h).normalize(),_.push(p.x,p.y,p.z),v.push(T+x,1-m),g.push(u++)}c.push(g)}for(let d=0;d<i;d++)for(let g=0;g<r;g++){let m=c[d][g+1],x=c[d][g],P=c[d+1][g],T=c[d+1][g+1];(d!==0||s>0)&&f.push(m,x,T),(d!==i-1||l<Math.PI)&&f.push(x,P,T)}this.setIndex(f),this.setAttribute("position",new vt(y,3)),this.setAttribute("normal",new vt(_,3)),this.setAttribute("uv",new vt(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new j1(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Ry=class $1 extends rr{constructor(t=1,r=.4,i=12,n=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:r,radialSegments:i,tubularSegments:n,arc:a},i=Math.floor(i),n=Math.floor(n);let s=[],o=[],l=[],u=[],c=new L,h=new L,p=new L;for(let f=0;f<=i;f++)for(let y=0;y<=n;y++){let _=y/n*a,v=f/i*Math.PI*2;h.x=(t+r*Math.cos(v))*Math.cos(_),h.y=(t+r*Math.cos(v))*Math.sin(_),h.z=r*Math.sin(v),o.push(h.x,h.y,h.z),c.x=t*Math.cos(_),c.y=t*Math.sin(_),p.subVectors(h,c).normalize(),l.push(p.x,p.y,p.z),u.push(y/n),u.push(f/i)}for(let f=1;f<=i;f++)for(let y=1;y<=n;y++){let _=(n+1)*f+y-1,v=(n+1)*(f-1)+y-1,d=(n+1)*(f-1)+y,g=(n+1)*f+y;s.push(_,v,g),s.push(v,d,g)}this.setIndex(s),this.setAttribute("position",new vt(o,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $1(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},mC=class extends sr{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},mr=class extends Sa{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qy,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},gC=class extends mr{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return er(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function xc(e,t,r){return!e||!r&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function vC(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Fc=class{constructor(e,t,r,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(r),this.sampleValues=t,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,r=this._cachedIndex,i=t[r],n=t[r-1];e:{t:{let a;r:{i:if(!(e<i)){for(let s=r+2;;){if(i===void 0){if(e<n)break i;return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===s)break;if(n=i,i=t[++r],e<i)break t}a=t.length;break r}if(!(e>=n)){let s=t[1];e<s&&(r=2,n=s);for(let o=r-2;;){if(n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===o)break;if(i=n,n=t[--r-1],e>=n)break t}a=r,r=0;break r}break e}for(;r<a;){let s=r+a>>>1;e<t[s]?a=s:r=s+1}if(i=t[r],n=t[r-1],n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,n,i)}return this.interpolate_(r,n,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,r=this.sampleValues,i=this.valueSize,n=e*i;for(let a=0;a!==i;++a)t[a]=r[n+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_C=class extends Fc{constructor(e,t,r,i){super(e,t,r,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:x_,endingEnd:x_}}intervalChanged_(e,t,r){let i=this.parameterPositions,n=e-2,a=e+1,s=i[n],o=i[a];if(s===void 0)switch(this.getSettings_().endingStart){case S_:n=e,s=2*t-r;break;case M_:n=i.length-2,s=t+i[n]-i[n+1];break;default:n=e,s=r}if(o===void 0)switch(this.getSettings_().endingEnd){case S_:a=e,o=2*r-t;break;case M_:a=1,o=r+i[1]-i[0];break;default:a=e-1,o=t}let l=(r-t)*.5,u=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-r),this._offsetPrev=n*u,this._offsetNext=a*u}interpolate_(e,t,r,i){let n=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,u=this._offsetPrev,c=this._offsetNext,h=this._weightPrev,p=this._weightNext,f=(r-t)/(i-t),y=f*f,_=y*f,v=-h*_+2*h*y-h*f,d=(1+h)*_+(-1.5-2*h)*y+(-.5+h)*f+1,g=(-1-p)*_+(1.5+p)*y+.5*f,m=p*_-p*y;for(let x=0;x!==s;++x)n[x]=v*a[u+x]+d*a[l+x]+g*a[o+x]+m*a[c+x];return n}},yC=class extends Fc{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e,t,r,i){let n=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,u=(r-t)/(i-t),c=1-u;for(let h=0;h!==s;++h)n[h]=a[l+h]*c+a[o+h]*u;return n}},xC=class extends Fc{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e){return this.copySampleValue_(e-1)}},an=class{constructor(e,t,r,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xc(t,this.TimeBufferType),this.values=xc(r,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,r;if(t.toJSON!==this.toJSON)r=t.toJSON(e);else{r={name:e.name,times:xc(e.times,Array),values:xc(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(r.interpolation=i)}return r.type=e.ValueTypeName,r}InterpolantFactoryMethodDiscrete(e){return new xC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _C(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Nc:t=this.InterpolantFactoryMethodDiscrete;break;case Lf:t=this.InterpolantFactoryMethodLinear;break;case cp:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return console.warn("THREE.KeyframeTrack:",r),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nc;case this.InterpolantFactoryMethodLinear:return Lf;case this.InterpolantFactoryMethodSmooth:return cp}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let r=0,i=t.length;r!==i;++r)t[r]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let r=0,i=t.length;r!==i;++r)t[r]*=e}return this}trim(e,t){let r=this.times,i=r.length,n=0,a=i-1;for(;n!==i&&r[n]<e;)++n;for(;a!==-1&&r[a]>t;)--a;if(++a,n!==0||a!==i){n>=a&&(a=Math.max(a,1),n=a-1);let s=this.getValueSize();this.times=r.slice(n,a),this.values=this.values.slice(n*s,a*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let r=this.times,i=this.values,n=r.length;n===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let s=0;s!==n;s++){let o=r[s];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(a!==null&&a>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,o,a),e=!1;break}a=o}if(i!==void 0&&vC(i))for(let s=0,o=i.length;s!==o;++s){let l=i[s];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),r=this.getValueSize(),i=this.getInterpolation()===cp,n=e.length-1,a=1;for(let s=1;s<n;++s){let o=!1,l=e[s],u=e[s+1];if(l!==u&&(s!==1||l!==e[0]))if(i)o=!0;else{let c=s*r,h=c-r,p=c+r;for(let f=0;f!==r;++f){let y=t[c+f];if(y!==t[h+f]||y!==t[p+f]){o=!0;break}}}if(o){if(s!==a){e[a]=e[s];let c=s*r,h=a*r;for(let p=0;p!==r;++p)t[h+p]=t[c+p]}++a}}if(n>0){e[a]=e[n];for(let s=n*r,o=a*r,l=0;l!==r;++l)t[o+l]=t[s+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*r)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),r=this.constructor,i=new r(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=Lf;var dl=class extends an{constructor(e,t,r){super(e,t,r)}};dl.prototype.ValueTypeName="bool";dl.prototype.ValueBufferType=Array;dl.prototype.DefaultInterpolation=Nc;dl.prototype.InterpolantFactoryMethodLinear=void 0;dl.prototype.InterpolantFactoryMethodSmooth=void 0;var SC=class extends an{};SC.prototype.ValueTypeName="color";var MC=class extends an{};MC.prototype.ValueTypeName="number";var EC=class extends Fc{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e,t,r,i){let n=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=(r-t)/(i-t),l=e*s;for(let u=l+s;l!==u;l+=4)Vs.slerpFlat(n,0,a,l-s,a,l,o);return n}},q1=class extends an{InterpolantFactoryMethodLinear(e){return new EC(this.times,this.values,this.getValueSize(),e)}};q1.prototype.ValueTypeName="quaternion";q1.prototype.InterpolantFactoryMethodSmooth=void 0;var pl=class extends an{constructor(e,t,r){super(e,t,r)}};pl.prototype.ValueTypeName="string";pl.prototype.ValueBufferType=Array;pl.prototype.DefaultInterpolation=Nc;pl.prototype.InterpolantFactoryMethodLinear=void 0;pl.prototype.InterpolantFactoryMethodSmooth=void 0;var wC=class extends an{};wC.prototype.ValueTypeName="vector";var TC=class{constructor(e,t,r){let i=this,n=!1,a=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(u){s++,n===!1&&i.onStart!==void 0&&i.onStart(u,a,s),n=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,s),a===s&&(n=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return o?o(u):u},this.setURLModifier=function(u){return o=u,this},this.addHandler=function(u,c){return l.push(u,c),this},this.removeHandler=function(u){let c=l.indexOf(u);return c!==-1&&l.splice(c,2),this},this.getHandler=function(u){for(let c=0,h=l.length;c<h;c+=2){let p=l[c],f=l[c+1];if(p.global&&(p.lastIndex=0),p.test(u))return f}return null}}},bC=new TC,AC=class{constructor(e){this.manager=e!==void 0?e:bC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let r=this;return new Promise(function(i,n){r.load(e,i,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};AC.DEFAULT_MATERIAL_NAME="__DEFAULT";var sm=class extends tr{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},CC=class extends sm{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tr.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Xp=new bt,Py=new L,Ny=new L,Y1=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tm,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,r=this.matrix;Py.setFromMatrixPosition(e.matrixWorld),t.position.copy(Py),Ny.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ny),t.updateMatrixWorld(),Xp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xp),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Xp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ly=new bt,el=new L,jp=new L,RC=class extends Y1{constructor(){super(new Wr(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new Tt(2,1,1,1),new Tt(0,1,1,1),new Tt(3,1,1,1),new Tt(1,1,1,1),new Tt(3,0,1,1),new Tt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let r=this.camera,i=this.matrix,n=e.distance||r.far;n!==r.far&&(r.far=n,r.updateProjectionMatrix()),el.setFromMatrixPosition(e.matrixWorld),r.position.copy(el),jp.copy(r.position),jp.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(jp),r.updateMatrixWorld(),i.makeTranslation(-el.x,-el.y,-el.z),Ly.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ly)}},xs=class extends sm{constructor(e,t,r=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=i,this.shadow=new RC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},PC=class extends Y1{constructor(){super(new rm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},NC=class extends sm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tr.DEFAULT_UP),this.updateMatrix(),this.target=new tr,this.shadow=new PC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},LC=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dy(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Dy();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Dy(){return performance.now()}var om="\\[\\]\\.:\\/",DC=new RegExp("["+om+"]","g"),lm="[^"+om+"]",UC="[^"+om.replace("\\.","")+"]",IC=/((?:WC+[\/:])*)/.source.replace("WC",lm),OC=/(WCOD+)?/.source.replace("WCOD",UC),kC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lm),FC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lm),zC=new RegExp("^"+IC+OC+kC+FC+"$"),BC=["material","materials","bones","map"],VC=class{constructor(e,t,r){let i=r||zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let r=this._targetGroup.nCachedObjects_,i=this._bindings[r];i!==void 0&&i.getValue(e,t)}setValue(e,t){let r=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=r.length;i!==n;++i)r[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].unbind()}},zt=class ws{constructor(t,r,i){this.path=r,this.parsedPath=i||ws.parseTrackName(r),this.node=ws.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,r,i){return t&&t.isAnimationObjectGroup?new ws.Composite(t,r,i):new ws(t,r,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(DC,"")}static parseTrackName(t){let r=zC.exec(t);if(r===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:r[2],objectName:r[3],objectIndex:r[4],propertyName:r[5],propertyIndex:r[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let a=i.nodeName.substring(n+1);BC.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,r){if(r===void 0||r===""||r==="."||r===-1||r===t.name||r===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(r);if(i!==void 0)return i}if(t.children){let i=function(a){for(let s=0;s<a.length;s++){let o=a[s];if(o.name===r||o.uuid===r)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,r){t[r]=this.targetObject[this.propertyName]}_getValue_array(t,r){let i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)t[r++]=i[n]}_getValue_arrayElement(t,r){t[r]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,r){this.resolvedProperty.toArray(t,r)}_setValue_direct(t,r){this.targetObject[this.propertyName]=t[r]}_setValue_direct_setNeedsUpdate(t,r){this.targetObject[this.propertyName]=t[r],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,r){this.targetObject[this.propertyName]=t[r],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,r){let i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)i[n]=t[r++]}_setValue_array_setNeedsUpdate(t,r){let i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)i[n]=t[r++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,r){let i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)i[n]=t[r++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,r){this.resolvedProperty[this.propertyIndex]=t[r]}_setValue_arrayElement_setNeedsUpdate(t,r){this.resolvedProperty[this.propertyIndex]=t[r],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,r){this.resolvedProperty[this.propertyIndex]=t[r],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,r){this.resolvedProperty.fromArray(t,r)}_setValue_fromArray_setNeedsUpdate(t,r){this.resolvedProperty.fromArray(t,r),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,r){this.resolvedProperty.fromArray(t,r),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,r){this.bind(),this.getValue(t,r)}_setValue_unbound(t,r){this.bind(),this.setValue(t,r)}bind(){let t=this.node,r=this.parsedPath,i=r.objectName,n=r.propertyName,a=r.propertyIndex;if(t||(t=ws.findNode(this.rootNode,r.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=r.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===u){u=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let s=t[n];if(s===void 0){let u=r.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};zt.Composite=VC;zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray];zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var AR=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var K1={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`},Ws=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},HC=new rm(-1,1,1,-1,0,1),GC=class extends rr{constructor(){super(),this.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new vt([0,2,0,0,2,0],2))}},WC=new GC,um=class{constructor(e){this._mesh=new Ge(WC,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,HC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},XC=class extends Ws{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof sr?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ll.clone(e.uniforms),this.material=new sr({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new um(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}},Uy=class extends Ws{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){let i=e.getContext(),n=e.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0);let a,s;this.inverse?(a=0,s=1):(a=1,s=0),n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),n.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),n.buffers.stencil.setClear(s),n.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.color.setMask(!0),n.buffers.depth.setMask(!0),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(i.EQUAL,1,4294967295),n.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),n.buffers.stencil.setLocked(!0)}},jC=class extends Ws{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},$C=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let r=e.getSize(new ne);this._width=r.width,this._height=r.height,t=new gi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new XC(K1),this.copyPass.material.blending=Zi,this.clock=new LC}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),r=!1;for(let i=0,n=this.passes.length;i<n;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),a.needsSwap){if(r){let s=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),o.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}Uy!==void 0&&(a instanceof Uy?r=!0:a instanceof jC&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let r=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(r,i),this.renderTarget2.setSize(r,i);for(let n=0;n<this.passes.length;n++)this.passes[n].setSize(r,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},qC=class extends Ws{constructor(e,t,r=null,i=null,n=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=i,this.clearAlpha=n,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new $e}render(e,t,r){let i=e.autoClear;e.autoClear=!1;let n,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(n=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(n),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}},YC={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new $e(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`},cm=class Wf extends Ws{constructor(t,r,i,n){super(),this.strength=r!==void 0?r:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new ne(t.x,t.y):new ne(256,256),this.clearColor=new $e(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new gi(a,s,{type:Qi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let p=new gi(a,s,{type:Qi});p.texture.name="UnrealBloomPass.h"+h,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let f=new gi(a,s,{type:Qi});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),a=Math.round(a/2),s=Math.round(s/2)}let o=YC;this.highPassUniforms=ll.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new sr({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];a=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ne(1/a,1/s),a=Math.round(a/2),s=Math.round(s/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=r,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let c=K1;this.copyUniforms=ll.clone(c.uniforms),this.blendMaterial=new sr({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Rs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new $e,this.oldClearAlpha=1,this.basic=new Ki,this.fsQuad=new um(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,r){let i=Math.round(t/2),n=Math.round(r/2);this.renderTargetBright.setSize(i,n);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,n),this.renderTargetsVertical[a].setSize(i,n),this.separableBlurMaterials[a].uniforms.invSize.value=new ne(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,r,i,n,a){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let s=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Wf.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Wf.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=s}getSeperableBlurMaterial(t){let r=[];for(let i=0;i<t;i++)r.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new sr({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},gaussianCoefficients:{value:r}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new sr({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};cm.BlurDirectionX=new ne(1,0);cm.BlurDirectionY=new ne(0,1);var KC={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`},JC=class extends Ws{constructor(){super();let e=KC;this.uniforms=ll.clone(e.uniforms),this.material=new mC({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new um(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},pt.getTransfer(this._outputColorSpace)===gt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fy?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===zy?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===By?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===$f?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Vy?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Hy&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}},ZC=14921803,Xf=new URLSearchParams(location.search),Ss=!Xf.has("lite")&&(Xf.has("fid")||(navigator.hardwareConcurrency||4)>=6&&(navigator.deviceMemory||4)>=4),il=(e,t=0,r=1)=>Math.min(r,Math.max(t,e)),jf=e=>e*e*(3-2*e),Er=(e,t,r)=>jf(il((e-t)/(r-t)));function rn(e,t,r,i,n=!0){let a=document.createElement("canvas");a.width=e,a.height=t;let s=a.getContext("2d");r(s,e,t);let o=new UA(a);return n&&(o.colorSpace=Gr),o.wrapS=o.wrapT=Pc,i&&o.repeat.set(i[0],i[1]),o.anisotropy=4,o}function QC(e="rgba(255,240,190,1)",t="rgba(255,190,90,.45)"){return rn(128,128,r=>{let i=r.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,e),i.addColorStop(.25,t),i.addColorStop(1,"rgba(255,150,40,0)"),r.fillStyle=i,r.fillRect(0,0,128,128)})}function eR(){return rn(256,256,(e,t,r)=>{e.fillStyle="#6a2434",e.fillRect(0,0,t,r);for(let i=0;i<1800;i++)e.fillStyle=`rgba(${Math.random()<.5?"255,200,150":"30,0,10"},${Math.random()*.07})`,e.fillRect(Math.random()*t,Math.random()*r,2+Math.random()*6,2+Math.random()*6);e.strokeStyle="rgba(20,0,8,.55)",e.lineWidth=3;for(let i=0;i<=r;i+=64)e.beginPath(),e.moveTo(0,i),e.lineTo(t,i),e.stroke();for(let i=0;i<4;i++)for(let n=i%2*64;n<=t;n+=128)e.beginPath(),e.moveTo(n,i*64),e.lineTo(n,i*64+64),e.stroke();e.strokeStyle="rgba(227,176,75,.22)",e.lineWidth=1.5;for(let i=0;i<4;i++)for(let n=0;n<2;n++)e.strokeRect(n*128+8+i%2*64%128*0,i*64+8,112,48)})}function tR(){return rn(256,256,(e,t,r)=>{e.fillStyle="#2a1018",e.fillRect(0,0,t,r);for(let i=0;i<2200;i++)e.fillStyle=`rgba(255,190,140,${Math.random()*.05})`,e.fillRect(Math.random()*t,Math.random()*r,3,3);e.strokeStyle="rgba(227,176,75,.45)",e.lineWidth=2,e.strokeRect(2,2,t-4,r-4),e.strokeStyle="rgba(227,176,75,.2)",e.lineWidth=1.5,e.beginPath(),e.moveTo(t/2,24),e.lineTo(t-24,r/2),e.lineTo(t/2,r-24),e.lineTo(24,r/2),e.closePath(),e.stroke(),e.beginPath(),e.arc(t/2,r/2,30,0,7),e.stroke()})}function rR(){return rn(256,256,(e,t,r)=>{e.fillStyle="#7a0f22",e.fillRect(0,0,t,r),e.fillStyle="#e3b04b",e.fillRect(0,0,14,r),e.fillRect(t-14,0,14,r),e.fillStyle="#4a0612",e.fillRect(14,0,10,r),e.fillRect(t-24,0,10,r),e.strokeStyle="#e3b04b",e.lineWidth=2,e.save(),e.translate(t/2,r/2);for(let i=0;i<12;i++)e.rotate(Math.PI/6),e.beginPath(),e.ellipse(0,-44,14,34,0,0,7),e.stroke();e.beginPath(),e.arc(0,0,14,0,7),e.fillStyle="#f4c75a",e.fill(),e.restore()})}function iR(){return rn(256,512,(e,t,r)=>{let i=e.createLinearGradient(0,0,t,0);i.addColorStop(0,"#4a0a16"),i.addColorStop(.5,"#6d1424"),i.addColorStop(1,"#4a0a16"),e.fillStyle=i,e.fillRect(0,0,t,r),e.strokeStyle="#e3b04b",e.lineWidth=6,e.strokeRect(8,8,t-16,r-16),e.lineWidth=2,e.strokeRect(22,22,t-44,r-44);for(let n=0;n<4;n++)for(let a=0;a<2;a++){let s=34+a*100,o=40+n*118;e.strokeStyle="rgba(227,176,75,.9)",e.lineWidth=2,e.strokeRect(s,o,88,104),e.beginPath(),e.moveTo(s+44,o+12),e.lineTo(s+76,o+52),e.lineTo(s+44,o+92),e.lineTo(s+12,o+52),e.closePath(),e.stroke(),e.fillStyle="#f4c75a",e.beginPath(),e.arc(s+44,o+52,7,0,7),e.fill();for(let[l,u]of[[6,6],[82,6],[6,98],[82,98]])e.beginPath(),e.arc(s+l,o+u,3,0,7),e.fill()}})}function nR(){return rn(128,128,(e,t,r)=>{e.fillStyle="#1a0408",e.fillRect(0,0,t,r),e.strokeStyle="#ffd98a",e.lineWidth=5;for(let i=0;i<=t;i+=64)for(let n=0;n<=r;n+=64)e.beginPath(),e.arc(i,n,32,0,7),e.stroke(),e.beginPath(),e.arc(i+32,n+32,32,0,7),e.stroke()},[6,3])}function qi(e,t,r,i=new fi,n=!1){let a=e/2;return i.moveTo(-a,0),i.lineTo(-a,t),i.quadraticCurveTo(-a,t+r*.78,0,t+r),i.quadraticCurveTo(a,t+r*.78,a,t),i.lineTo(a,0),i.lineTo(-a,0),i}function Sc(e,t=20){return new $A(e.map(([r,i])=>new ne(r,i)),t)}function J1(e,t,r={}){let i=Math.min(window.innerWidth,screen.width||999)<820,n=new RA({canvas:e,antialias:!i,alpha:!1,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio||1,i?1.5:2)),n.toneMapping=$f,n.toneMappingExposure=1.15;let a=new my;a.background=new $e(1180684),a.fog=new PA(1771283,.0105);let s=new Wr(55,1,.3,700),o=[],l=H=>(o.push(H),H),u=l(new sr({side:Tr,depthWrite:!1,fog:!1,uniforms:{top:{value:new $e(656416)},mid:{value:new $e(4853808)},hor:{value:new $e(15764026)}},vertexShader:"varying vec3 v; void main(){ v=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"varying vec3 v; uniform vec3 top,mid,hor; void main(){ float h=clamp(v.y,0.,1.); vec3 c=mix(hor,mid,smoothstep(0.,.22,h)); c=mix(c,top,smoothstep(.15,.7,h)); gl_FragColor=vec4(c,1.); }"})),c=new Ge(l(new In(400,24,16)),u);a.add(c);{let H=new Of(n),ie=new my;ie.add(new Ge(new In(50,16,12),u));let ue=new Ge(new In(8,8,8),new Ki({color:16760944}));ue.position.set(0,10,40),ie.add(ue);let fe=ue.clone();fe.position.set(0,12,-40),ie.add(fe),a.environment=H.fromScene(ie,.04).texture,a.environmentIntensity=.55,H.dispose()}{let H=new Float32Array(1260);for(let ue=0;ue<420;ue++){let fe=Math.random()*Math.PI*2,me=Math.random()*1.2+.18,Fe=380;H[ue*3]=Math.cos(fe)*Math.cos(me)*Fe,H[ue*3+1]=Math.sin(me)*Fe,H[ue*3+2]=Math.sin(fe)*Math.cos(me)*Fe}let ie=l(new rr);ie.setAttribute("position",new vr(H,3)),a.add(new Vp(ie,l(new Ff({color:16773583,size:1.7,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.85,depthWrite:!1}))))}let h=l(QC()),p=(H,ie=1)=>l(new C1({map:h,color:H,blending:Rs,depthWrite:!1,transparent:!0,opacity:ie,fog:!1})),f=new _s(p(16771522,.9));f.scale.set(40,40,1),f.position.set(-75,78,-240),a.add(f);let y=new Ge(l(new In(7,20,14)),l(new Ki({color:16774366,fog:!1})));y.position.copy(f.position),a.add(y);let _=l(eR()),v=l(new mr({map:_,roughness:.82,metalness:.02,color:16766664})),d=l(new mr({color:13146744,roughness:.75,metalness:.02})),g=l(rn(128,128,(H,ie,ue)=>{H.fillStyle="#777",H.fillRect(0,0,ie,ue);for(let fe=0;fe<1400;fe++){let me=90+Math.random()*110;H.fillStyle=`rgba(${me},${me},${me},.5)`,H.fillRect(Math.random()*ie,Math.random()*ue,1+Math.random()*3,1+Math.random()*3)}},[4,4],!1)),m=l(new mr({color:ZC,roughness:.55,roughnessMap:g,bumpMap:g,bumpScale:.6,metalness:.95,envMapIntensity:1.3})),x=l(new mr({color:12158256,roughness:.7,roughnessMap:g,metalness:.85})),P=l(new mr({color:15851456,roughness:.6,metalness:.05})),T=l(new Ki({color:16761960,fog:!1})),b=l(new Ki({color:16762976,fog:!1}));l(tR()).repeat.set(36,36);let R=new Ge(l(new On(180,180)),l(new mr({roughness:.7,metalness:.1,color:3420218})));R.rotation.x=-Math.PI/2,R.position.set(0,0,-20),a.add(R);let w=l(rR());w.repeat.set(1,26);let S=new Ge(l(new On(4.6,80)),l(new gC({map:w,roughness:.92,sheen:1,sheenColor:new $e(16747104),sheenRoughness:.45})));S.rotation.x=-Math.PI/2,S.position.set(0,.02,2),a.add(S);let N=6.2,k=5,V=2.5,W=2.6,j=9.6,X=l(rn(256,256,(H,ie,ue)=>{H.fillStyle="#7a1620",H.fillRect(0,0,ie,ue);let fe=32,me=64;for(let Fe=0;Fe<ue/fe;Fe++)for(let Be=-1;Be<ie/me+1;Be++){let je=Be*me+(Fe%2?me/2:0),Oe=.8+Math.random()*.4;H.fillStyle=`rgb(${Math.round(150*Oe)},${Math.round(34*Oe)},${Math.round(40*Oe)})`,H.fillRect(je+2,Fe*fe+2,me-4,fe-4)}for(let Fe=0;Fe<1800;Fe++)H.fillStyle=`rgba(${Math.random()<.5?"255,200,170":"40,0,0"},${Math.random()*.1})`,H.fillRect(Math.random()*ie,Math.random()*ue,1+Math.random()*4,1+Math.random()*4)}));X.repeat.set(1/8,1/8);let ae=l(rn(256,256,(H,ie,ue)=>{H.fillStyle="#222",H.fillRect(0,0,ie,ue);for(let fe=0;fe<8;fe++)for(let me=-1;me<5;me++){let Fe=me*64+(fe%2?32:0),Be=150+Math.random()*90;H.fillStyle=`rgb(${Be},${Be},${Be})`,H.fillRect(Fe+3,fe*32+3,58,26)}for(let fe=0;fe<2500;fe++){let me=Math.random()*255;H.fillStyle=`rgba(${me},${me},${me},.18)`,H.fillRect(Math.random()*ie,Math.random()*ue,2,2)}},null,!1));ae.repeat.set(1/8,1/8);let $=l(new mr({map:X,bumpMap:ae,bumpScale:2.2,roughness:.82,metalness:.02})),de=l(new mr({color:3115564,roughness:.6,emissive:666120,emissiveIntensity:.5,side:bi})),Me=l(new mr({color:16751124,roughness:.6,emissive:6957568,emissiveIntensity:.7})),Ze=l(new mr({color:11817758,roughness:.8})),tt=l(Sc([[.01,0],[.16,.04],[.28,.26],[.31,.5],[.22,.74],[.16,.84],[.26,.92],[.28,.98]],14)),K=l(new In(.2,12,9)),ce=l(new Qo(.1,.55,4)),ke=l(new Qo(.05,.3,6));function Le(H,ie,ue,fe=1){let me=new bs;me.position.set(H,ie,ue),me.scale.setScalar(fe),me.add(new Ge(tt,m));for(let je=0;je<7;je++){let Oe=je/7*Math.PI*2,Xe=new Ge(ce,de);Xe.position.set(Math.cos(Oe)*.2,1.15,Math.sin(Oe)*.2),Xe.rotation.set(Math.sin(Oe)*.5,0,-Math.cos(Oe)*.5),me.add(Xe)}let Fe=new Ge(K,x);Fe.position.y=1.08,Fe.scale.y=1.2,me.add(Fe);let Be=new Ge(ke,m);return Be.position.y=1.5,me.add(Be),a.add(me),me}function ge(H,ie,ue,fe,me,Fe,Be=.55,je=.78){let Oe=fe,Xe=me,et=ie;for(let M=0;M<Fe;M++){let I=new Ge(l(new gr(Oe,Be,Xe)),M%2?m:$);I.position.set(H,et+Be/2,ue),a.add(I);let z=new Ge(l(new gr(Oe+.25,.1,Xe+.25)),x);z.position.set(H,et+.05,ue),a.add(z),et+=Be,Oe*=je,Xe*=je}return et}function Ye(H,ie,ue,fe,me){let Fe=new Ge(l(new _c(qi(fe+.5,me,me*.4,new fi),{depth:.2,bevelEnabled:!1,curveSegments:8})),m);Fe.position.set(H,ie,ue),a.add(Fe);let Be=new Ge(l(new yc(qi(fe,me-.15,me*.34,new fi),8)),T);Be.position.set(H,ie+.02,ue+.22),a.add(Be);let je=new Ge(l(new gr(fe+.9,.18,.7)),m);je.position.set(H,ie-.05,ue+.3),a.add(je)}{let H=new fi;H.moveTo(-64/2,0),H.lineTo(64/2,0),H.lineTo(64/2,j),H.lineTo(-64/2,j),H.lineTo(-64/2,0),H.holes.push(qi(N,k,V,new sl));let ie=new Ge(l(new _c(H,{depth:W,bevelEnabled:!1,curveSegments:12})),$);ie.position.z=-W,a.add(ie);let ue=qi(N+1.5,k+.1,V+.55,new fi);ue.holes.push(qi(N,k,V,new sl));let fe=new Ge(l(new _c(ue,{depth:.35,bevelEnabled:!1,curveSegments:12})),m);fe.position.z=.02,a.add(fe);for(let[Oe,Xe]of[[j-.1,.5],[j-1.1,.18]]){let et=new Ge(l(new gr(64,Xe,.55)),m);et.position.set(0,Oe,.12),a.add(et)}{let Oe=N/2+1,Xe=64/2-Oe;for(let et of[-1,1]){let M=new Ge(l(new gr(Xe,.2,.55)),m);M.position.set(et*(Oe+Xe/2),1.2,.12),a.add(M)}}let me=new ha(l(new gr(.34,.42,.4)),x,60),Fe=new tr,Be=0;for(let Oe=-28;Oe<=28;Oe+=1)Math.abs(Oe)<4.2||(Fe.position.set(Oe,j-.55,.3),Fe.updateMatrix(),me.setMatrixAt(Be++,Fe.matrix));me.count=Be,a.add(me);let je=new ha(l(new Qo(.34,.85,4)),m,70);Be=0;for(let Oe=-30;Oe<=30;Oe+=.9)Fe.position.set(Oe,j+.6,.12),Fe.rotation.y=Math.PI/4,Fe.updateMatrix(),je.setMatrixAt(Be++,Fe.matrix);je.count=Be,a.add(je);for(let Oe of[-1,1])for(let Xe of[7.5,11.5,16,21])Ye(Oe*Xe,3.2,0,1.5,2.6);for(let Oe of[-1,1])for(let Xe of[7.5,11.5,16,21]){let et=new Ge(l(new yc(qi(1,1.2,.5,new fi),6)),T);et.position.set(Oe*Xe,6.7,.02),a.add(et)}}for(let H of[-1,1]){let ie=H*13.5,ue=new Ge(l(new gr(4.2,5.2,4.6)),$);ue.position.set(ie,j+2.6,-.3),a.add(ue);let fe=new Ge(l(new gr(4.6,.3,5)),m);fe.position.set(ie,j+.3,-.3),a.add(fe),Ye(ie,j+1.6,2,1.2,2.2);let me=ge(ie,j+5.2,-.3,4.8,5.2,4,.5,.74);Le(ie,me,-.3,1.5);for(let Fe of[-1,1])for(let Be of[-1,1])Le(ie+Fe*2.1,j+5.2,-.3+Be*2.3,.5)}{let H=[.7,3.6],ie=l(Sc([[.42,0],[.5,.2],[.3,.6],[.26,.9],[.24,6],[.3,7-.7],[.5,7-.4],[.55,7]],14));for(let ve of[-1,1])for(let De of H){let Ue=new Ge(ie,m);Ue.position.set(ve*3.95,0,De),a.add(Ue);let rt=new Ge(l(new Ry(.3,.05,6,14)),x);rt.rotation.x=Math.PI/2,rt.position.set(ve*3.95,2.2,De),a.add(rt);let xt=rt.clone();xt.position.y=4.4,a.add(xt)}let ue=new Ge(l(new gr(3.95*2+1.4,.5,.6)),m);for(let ve of H){let De=ue.clone();De.position.set(0,7+.2,ve),a.add(De)}for(let ve of[-1,1]){let De=new Ge(l(new gr(.6,.5,H[1]-H[0]+1.2)),m);De.position.set(ve*3.95,7+.2,(H[0]+H[1])/2),a.add(De)}let fe=(H[0]+H[1])/2,me=H[1]-H[0]+1.6,Fe=ge(0,7+.45,fe,3.95*2+1.8,me,4,.5,.7);Le(0,Fe,fe,1.7);for(let ve of[-1,1])for(let De of H)Le(ve*3.95,7+.45,De,.6);let Be=l(new Qo(.11,.52,4));Be.translate(0,-.26,0),Be.scale(1,1,.35);let je=70,Oe=new ha(Be,de,je*2),Xe=new tr,et=0,M=H[1]+.34;for(let ve=0;ve<je;ve++){let De=-4.45+ve/(je-1)*8.9,Ue=.28*Math.sin(ve/(je-1)*Math.PI*6)*0;Xe.position.set(De,7-.05+Ue,M),Xe.rotation.set(0,0,ve%2?.1:-.1),Xe.scale.set(1,1+ve%3*.18,1),Xe.updateMatrix(),Oe.setMatrixAt(et++,Xe.matrix)}for(let ve=0;ve<je;ve++){let De=-4.45+ve/(je-1)*8.9;Xe.position.set(De,7-.05,H[0]-.34),Xe.rotation.set(0,0,ve%2?.1:-.1),Xe.scale.set(1,1+ve%3*.18,1),Xe.updateMatrix(),Oe.setMatrixAt(et++,Xe.matrix)}Oe.count=et,a.add(Oe);let I=l(new Cy(.12,1)),z=13,B=8,D=new ha(I,Me,z*B);et=0;let ee=[new $e(16747036),new $e(16757788),new $e(16738832)];for(let ve=0;ve<z;ve++){let De=-4.25+ve/(z-1)*8.5,Ue=1.3+ve%2*.9+Math.sin(ve*1.7)*.25;for(let rt=0;rt<B;rt++)Xe.position.set(De,7-.35-rt/(B-1)*Ue,M+.06),Xe.rotation.set(rt,ve,0),Xe.scale.setScalar(rt===B-1?1.5:.95),Xe.updateMatrix(),D.setMatrixAt(et,Xe.matrix),D.setColorAt(et,ee[(ve+rt)%3]),et++}a.add(D);let Se=l(new In(.17,12,6,0,Math.PI*2,Math.PI/2,Math.PI/2));Se.scale(1.3,.8,1.3);let Pe=[];for(let ve=4.6;ve<36;ve+=2.4)Pe.push(ve);let ze=new ha(Se,Ze,Pe.length*2);et=0,a.userData.diyaSprites=[];for(let ve of[-1,1])for(let De of Pe){Xe.position.set(ve*2.75,.04,De),Xe.rotation.set(Math.PI,0,0),Xe.scale.setScalar(1),Xe.updateMatrix(),ze.setMatrixAt(et++,Xe.matrix);let Ue=new _s(p(16754236,.9));Ue.scale.set(.9,.9,1),Ue.position.set(ve*2.75,.2,De),a.add(Ue),a.userData.diyaSprites.push(Ue)}a.add(ze)}{let H=new Ge(l(new On(60,60)),l(new mr({color:1782560,roughness:1})));H.rotation.x=-Math.PI/2,H.position.set(0,.005,30),a.add(H)}{let H=i?70:120,ie=new Float32Array(H*3);for(let fe=0;fe<H;fe++){let me=-30+fe/(H-1)*60;ie[fe*3]=me,ie[fe*3+1]=j-1.45-Math.abs(Math.sin(me*.9))*.3,ie[fe*3+2]=.55}let ue=l(new rr);ue.setAttribute("position",new vr(ie,3)),a.add(new Vp(ue,l(new Ff({color:16766090,size:7,sizeAttenuation:!1,map:h,transparent:!0,depthWrite:!1,blending:Rs,fog:!1}))))}let it=new xs(16758886,420,34,2);it.position.set(-6,4,9),a.add(it);let Je=new xs(16758886,420,34,2);Je.position.set(9,4,9),a.add(Je);let Z=l(nR());{let H=new fi,ie=N/2;H.moveTo(-ie,k),H.quadraticCurveTo(-ie,k+V*.78,0,k+V),H.quadraticCurveTo(ie,k+V*.78,ie,k),H.lineTo(-ie,k);let ue=l(new yc(H,12));{let me=ue.attributes.uv,Fe=ue.attributes.position;for(let Be=0;Be<me.count;Be++)me.setXY(Be,Fe.getX(Be)/1.6,Fe.getY(Be)/1.6)}let fe=new Ge(ue,l(new Ki({map:Z,color:16760928,fog:!1})));fe.position.z=-.7,a.add(fe)}let pe=l(iR()),C=l(new mr({map:pe,roughness:.5,metalness:.35,emissive:2753544,emissiveIntensity:.5})),Ce=N/2;function le(H){let ie=new bs;ie.position.set(H*N/2,0,-.9);let ue=new Ge(l(new gr(Ce,k,.3)),[d,d,d,d,C,C]);ue.position.set(-H*Ce/2,k/2,0),ie.add(ue);for(let Fe=0;Fe<2;Fe++){let Be=new Ge(l(new Ry(.28,.06,8,20)),m);Be.position.set(-H*(Ce-.55),3.4+Fe*0,.23),Be.position.y=3.4,Fe&&(Be.position.z=-.23,Be.rotation.y=Math.PI),ie.add(Be)}let fe=new Ge(l(new gr(Ce,.25,.4)),m);fe.position.set(-H*Ce/2,k-.2,0),ie.add(fe);let me=fe.clone();return me.position.y=.3,ie.add(me),a.add(ie),ie}let Ie=le(-1),se=le(1),We=34,Te=8.5,be=8.6,A=-W;{let H=l(new mr({map:_.clone(),roughness:.7,color:16764840}));H.map.needsUpdate=!0,H.map.repeat.set(7,3),l(H.map);for(let et of[-1,1]){let M=new Ge(l(new On(We,be)),H);M.position.set(et*Te,be/2,A-We/2),M.rotation.y=-et*Math.PI/2,a.add(M)}let ie=new Ge(l(new On(Te*2,We)),l(new mr({color:4853792,roughness:.8,emissive:2755080})));ie.rotation.x=Math.PI/2,ie.position.set(0,be,A-We/2),a.add(ie);let ue=l(Sc([[.7,0],[.9,.3],[.55,.7],[.42,1.2],[.4,8.8],[.5,9.3],[.65,9.8],[.75,10.2]],14)),fe=l(new gr(Te*2,.5,.7));for(let et=0;et<6;et++){let M=A-4-et*5;for(let Se of[-1,1]){let Pe=new Ge(ue,et%2?x:m);Pe.scale.y=.78,Pe.position.set(Se*5,0,M),a.add(Pe)}let I=new Ge(fe,x);I.position.set(0,be-.5,M),a.add(I);let z=new Ge(l(new Vf(.02,.02,2.2,4)),m);z.position.set(0,be-1.6,M),a.add(z);let B=new Ge(l(new In(.5,14,10)),b);B.position.set(0,be-3.2,M),a.add(B);let D=new _s(p(16758874,.9));D.scale.set(5,5,1),D.position.copy(B.position),a.add(D);let ee=new Ge(l(new Qo(.62,.5,14)),m);ee.position.set(0,be-2.75,M),a.add(ee)}let me=qi(5.6,5.5,3.2,new fi),Fe=new Ge(l(new yc(me,10)),l(new Ki({color:16767392,fog:!1})));Fe.position.set(0,0,A-We+.05),a.add(Fe);let Be=new Ge(l(new On(Te*2,be)),H);Be.position.set(0,be/2,A-We),a.add(Be);let je=new _s(p(16770728,1));je.scale.set(26,26,1),je.position.set(0,5.2,A-We+1),a.add(je),a.userData.endSun=je;let Oe=qi(6.4,5.6,3.3,new fi);Oe.holes.push(qi(5.6,5.5,3.2,new sl));let Xe=new Ge(l(new _c(Oe,{depth:.4,bevelEnabled:!1,curveSegments:10})),m);Xe.position.set(0,0,A-We+.1),a.add(Xe)}let E=[],F=l(Sc([[.3,0],[.18,.4],[.1,1],[.08,3.4],[.2,3.8],[.45,4.2],[.5,4.5]],10)),J=l(new mr({color:16747036,roughness:.6,emissive:5906432,emissiveIntensity:.6})),te=l(new Cy(.13,1)),q=[];for(let H of[-1,1])for(let ie=0;ie<6;ie++){let ue=H*5.2,fe=7+ie*6.5,me=new Ge(F,m);me.position.set(ue,0,fe),a.add(me);let Fe=new Ge(l(new In(.22,10,8)),b);Fe.scale.set(.8,1.5,.8),Fe.position.set(ue,4.85,fe),a.add(Fe);let Be=new _s(p(16753210,.95));Be.scale.set(2.8,2.8,1),Be.position.set(ue,4.9,fe),a.add(Be),E.push({fl:Fe,sp:Be,ph:Math.random()*6}),q.push([ue,fe])}{let H=[],ie=[];for(let je of[-1,1])for(let Oe=0;Oe<5;Oe++){let Xe=new L(je*5.2,4.1,7+Oe*6.5),et=new L(je*5.2,4.1,7+(Oe+1)*6.5),M=Xe.clone().lerp(et,.5);M.y-=1.5,ie.push(new D1(Xe,M,et))}let ue=new ha(te,J,ie.length*46),fe=new tr,me=0,Fe=[new $e(16747036),new $e(16757788),new $e(16738832)];for(let je of ie)for(let Oe=0;Oe<46;Oe++){let Xe=je.getPoint(Oe/45);fe.position.copy(Xe),fe.position.x+=(Math.random()-.5)*.1,fe.position.y+=(Math.random()-.5)*.12,fe.scale.setScalar(.85+Math.random()*.5),fe.rotation.set(Math.random()*3,Math.random()*3,0),fe.updateMatrix(),ue.setMatrixAt(me,fe.matrix),ue.setColorAt(me,Fe[me%3]),me++}a.add(ue);for(let je=0;je<9;je++){let Oe=-4.2+je*1.05,Xe=1.2+je%2*1.3+Math.sin(je)*.3,et=new Ge(l(new Vf(.025,.025,Xe,4)),J);et.position.set(Oe,k+V-1-Xe/2+.3-Math.abs(Oe)/4.2*1.5,.55),et.visible=!1}let Be=new ha(te,J,81);me=0;for(let je=0;je<9;je++){let Oe=-3.1+je*.775,Xe=k+.2+V*(1-Math.pow(Math.abs(Oe)/(N/2),2.2))*.9-.55,et=1.6+je%2*.9;for(let M=0;M<9;M++)fe.position.set(Oe,Xe-M/8*et,.7),fe.scale.setScalar(1+(M===8?.6:0)),fe.rotation.set(M,je,0),fe.updateMatrix(),Be.setMatrixAt(me,fe.matrix),Be.setColorAt(me,Fe[(je+M)%3]),me++}a.add(Be)}let Ve=i?140:260,ye=l(new sr({transparent:!0,depthWrite:!1,blending:Rs,uniforms:{t:{value:0},pr:{value:n.getPixelRatio()},map:{value:h}},vertexShader:"attribute vec4 a; uniform float t; uniform float pr; varying float al; void main(){ vec3 p=position; float ph=a.w; p.y=mod(p.y+t*a.x*.6+ph*8.,14.); p.x+=sin(t*.5*a.y+ph*20.)*1.4; p.z+=cos(t*.4*a.y+ph*11.)*1.4; vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv; gl_PointSize=a.z*pr*(220./-mv.z); al=smoothstep(0.,2.,p.y)*(1.-smoothstep(10.,14.,p.y))*(.55+.45*sin(t*2.+ph*40.)); }",fragmentShader:"uniform sampler2D map; varying float al; void main(){ vec4 c=texture2D(map,gl_PointCoord); gl_FragColor=vec4(c.rgb*1.4,c.a*al); }"}));{let H=new Float32Array(Ve*3),ie=new Float32Array(Ve*4);for(let me=0;me<Ve;me++)H[me*3]=(Math.random()-.5)*26,H[me*3+1]=Math.random()*14,H[me*3+2]=40-Math.random()*62,ie[me*4]=.5+Math.random(),ie[me*4+1]=.5+Math.random(),ie[me*4+2]=.35+Math.random()*.8,ie[me*4+3]=Math.random();let ue=l(new rr);ue.setAttribute("position",new vr(H,3)),ue.setAttribute("a",new vr(ie,4));let fe=new Vp(ue,ye);fe.frustumCulled=!1,a.add(fe)}a.add(new CC(6970024,3805216,.55));let xe=new NC(11122943,1.1);xe.position.set(-30,40,30),a.add(xe),n.shadowMap.enabled=Ss,n.shadowMap.type=Oy,xe.castShadow=Ss,xe.shadow.mapSize.set(i?1024:2048,i?1024:2048);{let H=xe.shadow.camera;H.left=-22,H.right=22,H.top=18,H.bottom=-18,H.near=10,H.far=110,xe.target.position.set(0,0,8),a.add(xe.target),xe.shadow.radius=4,xe.shadow.bias=-6e-4,xe.shadow.normalBias=.04}a.traverse(H=>{H.isMesh&&!(H.material&&H.material.isShaderMaterial)&&H!==R&&H!==S&&(H.castShadow=!0,H.receiveShadow=!0)}),R.receiveShadow=!0,S.receiveShadow=!0;let qe=new $C(n);qe.setPixelRatio(n.getPixelRatio()),qe.addPass(new qC(a,s));let he=new cm(new ne(256,256),i?.28:.35,.45,1.05);qe.addPass(he),qe.addPass(new JC);let Ae=new xs(16754768,900,55,2);Ae.position.set(0,4.5,12),a.add(Ae);let nt=new xs(16754768,500,40,2);nt.position.set(0,4.5,30),a.add(nt);let Ke=new xs(16762996,0,40,2);Ke.position.set(0,8,-8),a.add(Ke);let Re=new xs(16767120,0,44,2);Re.position.set(0,7,-24),a.add(Re);let Qe=new _s(p(16760928,0));Qe.scale.set(16,12,1),Qe.position.set(0,4.8,-.2),a.add(Qe);let at={w:1,h:1},St=()=>{let H=t.getBoundingClientRect(),ie=Math.max(1,Math.round(H.width)),ue=Math.max(1,Math.round(H.height));at.w=ie,at.h=ue,n.setSize(ie,ue,!1),typeof qe<"u"&&(qe.setSize(ie,ue),he.setSize(Math.round(ie*(i?.5:.75)),Math.round(ue*(i?.5:.75)))),s.aspect=ie/ue,s.updateProjectionMatrix()};St();let O=typeof ResizeObserver<"u"?new ResizeObserver(St):null;O&&O.observe(t);let re={x:0,y:0,tx:0,ty:0},Y=H=>{let ie=t.getBoundingClientRect();re.tx=((H.clientX-ie.left)/ie.width-.5)*2,re.ty=((H.clientY-ie.top)/ie.height-.5)*2};t.addEventListener("pointermove",Y);let Q=H=>{H.gamma!=null&&(re.tx=il(H.gamma/25,-1,1),re.ty=il(((H.beta||45)-45)/25,-1,1))};window.addEventListener("deviceorientation",Q);let we=0,_e=!1,ht=performance.now(),Dt=-1,Ht=new L,dt=0,jr=0,Lr=0,gl=()=>{let H=parseFloat(t.style.getPropertyValue("--p"));return isNaN(H)?0:H},vi=H=>{if(_e)return;we=requestAnimationFrame(vi);let ie=(H-ht)/1e3,ue=gl(),fe=Er(ue,.07,.36),me=jf(jf(il(ue/1))),Fe=ue<.001?0:Math.pow(il(ue),1),Be=40-70*(.6*Er(Fe,0,.55)*.75+0)-0,je=40-64*(.22*Er(ue,0,.35)+.78*Er(ue,.3,1)),Oe=1-Er(ue,0,.05);re.x+=(re.tx-re.x)*.05,re.y+=(re.ty-re.y)*.05;let Xe=Math.sin(ie*.5)*.25*Oe;s.position.set(re.x*.9*(1-Er(ue,.55,.9))+Math.sin(ie*.35)*.4*Oe,1.9+Er(ue,.1,.6)*1.6+Er(ue,.6,1)*.6+Xe-re.y*.25,je-(1-Oe)*0+Math.sin(ie*.3)*.8*Oe);let et=Math.min(0,je-22),M=(et+je-22-Math.sqrt((et-(je-22))**2+16))/2*0+et;Ht.set(re.x*.8*.5,5-Er(ue,.35,1)*.6+re.y*-.3,M),s.lookAt(Ht),s.rotateZ(Math.sin(ie*.4)*.006*Oe+Er(ue,.4,.8)*Math.sin(ue*14)*.008);let I=(s.aspect<1?66:40)+Er(ue,.55,1)*12-Er(ue,0,.3)*4;Math.abs(s.fov-I)>.01&&(s.fov=I,s.updateProjectionMatrix());let z=fe*1.78;Ie.rotation.y=z,se.rotation.y=-z;let B=.88+Math.sin(ie*9.1)*.05+Math.sin(ie*13.7+1)*.04;Ae.intensity=900*B,nt.intensity=500*(.92+Math.sin(ie*7.3)*.06);let D=fe;Ke.intensity=30+380*D,Re.intensity=20+420*D,Qe.material.opacity=.5*D*(1-Er(ue,.55,.75)),Qe.scale.set(10+8*D,8+8*D,1),a.userData.endSun.material.opacity=.3+.4*D,a.userData.endSun.scale.setScalar(20+22*Er(ue,.5,1));for(let ee of E){let Se=.85+Math.sin(ie*8+ee.ph)*.12+Math.sin(ie*15+ee.ph*2)*.06;ee.sp.scale.setScalar(2.8*Se),ee.fl.scale.set(.8,1.4*Se+.15,.8)}if(a.userData.diyaSprites&&a.userData.diyaSprites.forEach((ee,Se)=>ee.scale.setScalar(.85+Math.sin(ie*9+Se*1.7)*.12)),ye.uniforms.t.value=ie,n.toneMappingExposure=(Ss?.62:1)+Er(ue,.8,1)*(Ss?.35:.6),Ss){if(dt++>20&&dt<100){let ee=H-Lr;jr+=ee>40?1:0,dt===99&&jr>40&&!Xf.has("fid")&&(Ss=!1,xe.castShadow=!1)}Lr=H,qe.render()}else n.render(a,s)};return we=requestAnimationFrame(vi),{dispose(){_e=!0,cancelAnimationFrame(we),O&&O.disconnect(),t.removeEventListener("pointermove",Y),window.removeEventListener("deviceorientation",Q),o.forEach(H=>H.dispose&&H.dispose()),a.traverse(H=>{H.geometry&&H.geometry.dispose()}),n.dispose()}}}function Z1(){try{let e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl2")||e.getContext("webgl")))}catch{return!1}}var G=or(Br());function aR(){let e=ml.default.useRef(null),t=ml.default.useRef(null);return ml.default.useEffect(()=>{if(!e.current||!t.current)return;let r=J1(t.current,e.current.parentElement);return()=>r.dispose()},[]),(0,G.jsx)("div",{ref:e,className:"g3d","aria-hidden":"true",children:(0,G.jsx)("canvas",{ref:t})})}function fl({k:e,cls:t="",children:r}){return(0,G.jsx)("div",{className:`layer ${t}`,style:{"--k":e},children:(0,G.jsx)("div",{className:"stage",children:r})})}function zc({cls:e}){return(0,G.jsxs)("svg",{className:`corner ${e}`,viewBox:"0 0 120 120","aria-hidden":"true",children:[(0,G.jsx)("path",{d:"M4 116V30C4 15 15 4 30 4h86",fill:"none",stroke:"#f4c75a",strokeWidth:"1.6"}),(0,G.jsx)("path",{d:"M14 116V36C14 24 24 14 36 14h80",fill:"none",stroke:"#f4c75a",strokeWidth:"0.7",opacity:"0.7"}),(0,G.jsxs)("g",{transform:"translate(34 34)",fill:"none",stroke:"#f4c75a",strokeWidth:"1.1",children:[Array.from({length:8},(t,r)=>(0,G.jsx)("path",{transform:`rotate(${r*45})`,d:"M0 -4Q5 -12 0 -22Q-5 -12 0 -4Z",fill:r%2?"none":"rgba(244,199,90,0.25)"},r)),(0,G.jsx)("circle",{r:"3",fill:"#f4c75a"})]})]})}function sR(){return(0,G.jsx)("svg",{className:"mandala",viewBox:"-200 -200 400 400","aria-hidden":"true",children:(0,G.jsxs)("g",{fill:"none",stroke:"#f4c75a",strokeWidth:"1",children:[[190,160,118,70].map((e,t)=>(0,G.jsx)("circle",{r:e,strokeDasharray:t===1?"2 6":void 0,opacity:.8-t*.1},e)),Array.from({length:24},(e,t)=>(0,G.jsx)("path",{transform:`rotate(${t*15})`,d:"M0 -120Q16 -150 0 -188Q-16 -150 0 -120Z"},t)),Array.from({length:12},(e,t)=>(0,G.jsx)("path",{transform:`rotate(${t*30+15})`,d:"M0 -72Q22 -96 0 -118Q-22 -96 0 -72Z"},"b"+t)),Array.from({length:8},(e,t)=>(0,G.jsx)("path",{transform:`rotate(${t*45})`,d:"M0 -20Q12 -44 0 -68Q-12 -44 0 -20Z"},"c"+t))]})})}function Bc(){return(0,G.jsxs)("div",{className:"rdiv","aria-hidden":"true",children:[(0,G.jsx)("span",{}),(0,G.jsxs)("svg",{viewBox:"0 0 60 20",width:"60",height:"20",children:[(0,G.jsx)("path",{d:"M2 10H20M40 10H58",stroke:"#f4c75a",strokeWidth:"1"}),(0,G.jsx)("path",{d:"M30 2l6 8-6 8-6-8z",fill:"none",stroke:"#f4c75a",strokeWidth:"1.2"}),(0,G.jsx)("circle",{cx:"30",cy:"10",r:"2",fill:"#f4c75a"})]}),(0,G.jsx)("span",{})]})}function Vc(){let e=n_(6600),t=i_(),r=Vo(_t.weddingDate),[i]=ml.default.useState(()=>Z1()&&new URLSearchParams(window.location.search).get("flat")===null),n=e.state==="idle"?e.start:void 0,a=_t.events.map(s=>({...s,d:Vo(s.date)}));return(0,G.jsxs)("div",{className:`royal ${e.state!=="done"?"locked":""}`,style:{"--H":`${t}px`},children:[e.state!=="done"&&(0,G.jsxs)("div",{ref:e.ref,className:`gate rg is-${e.state}`,onClick:n,children:[i?(0,G.jsx)(aR,{}):(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(fl,{k:.35,children:(0,G.jsx)(u_,{})}),(0,G.jsx)(fl,{k:.9,children:(0,G.jsx)(c_,{})}),(0,G.jsxs)(fl,{k:4.9,cls:"main",children:[(0,G.jsx)(h_,{}),(0,G.jsx)(p_,{}),(0,G.jsx)("div",{className:"spill",children:(0,G.jsx)(d_,{})}),(0,G.jsxs)("div",{className:"doors",children:[(0,G.jsx)("div",{className:"door dl",children:(0,G.jsx)(lp,{side:"l"})}),(0,G.jsx)("div",{className:"door dr",children:(0,G.jsx)(lp,{side:"r"})})]})]}),(0,G.jsx)(fl,{k:2.8,children:(0,G.jsx)(m_,{})}),(0,G.jsx)(fl,{k:2.3,children:(0,G.jsx)(g_,{})})]}),(0,G.jsx)("div",{className:"glow"}),(0,G.jsx)("div",{className:"vignette"}),(0,G.jsxs)("div",{className:"gate-ui",children:[(0,G.jsx)("span",{}),(0,G.jsxs)("div",{className:"gu-bottom",children:[(0,G.jsx)("p",{className:"gu-inv",children:"You are warmly invited to the wedding of"}),(0,G.jsxs)("h1",{className:"gu-names",children:[_t.bride," ",(0,G.jsx)("i",{children:"&"})," ",_t.groom]}),(0,G.jsx)("button",{className:"gu-open",onClick:s=>{s.stopPropagation(),e.start()},disabled:e.state!=="idle",children:(0,G.jsx)("span",{children:"Open the invitation"})})]})]}),(0,G.jsx)("button",{className:"gu-skip",onClick:s=>{s.stopPropagation(),e.skip()},children:"Skip intro"})]}),(0,G.jsxs)("main",{className:`rpage ${e.ready?"ready":""}`,children:[(0,G.jsxs)("section",{className:"hero",children:[(0,G.jsx)(sR,{}),(0,G.jsx)(zc,{cls:"c1"}),(0,G.jsx)(zc,{cls:"c2"}),(0,G.jsx)(zc,{cls:"c3"}),(0,G.jsx)(zc,{cls:"c4"}),(0,G.jsx)(s_,{count:26,kind:"petal",seed:4}),(0,G.jsxs)("div",{className:"hero-in",children:[(0,G.jsx)("p",{className:"h-ganesh e1",lang:"hi",children:"\u0965 \u0936\u094D\u0930\u0940 \u0917\u0923\u0947\u0936\u093E\u092F \u0928\u092E\u0903 \u0965"}),(0,G.jsx)("p",{className:"h-kicker e2",children:"Together with their families"}),(0,G.jsxs)("h1",{className:"h-names",children:[(0,G.jsx)("span",{className:"nm e3",children:_t.bride}),(0,G.jsx)("span",{className:"amp e4",children:"&"}),(0,G.jsx)("span",{className:"nm e5",children:_t.groom})]}),(0,G.jsxs)("p",{className:"h-hi e6",lang:"hi",children:[_t.brideHi," ",(0,G.jsx)("small",{children:"weds"})," ",_t.groomHi]}),(0,G.jsx)(Bc,{}),(0,G.jsx)("p",{className:"h-ask e7",children:"request the honour of your presence at their wedding"}),(0,G.jsxs)("div",{className:"h-date e8","aria-label":`${r.weekday}, ${r.day} ${r.month} ${r.year}`,children:[(0,G.jsx)("span",{children:r.weekday}),(0,G.jsx)("b",{children:r.day}),(0,G.jsxs)("span",{children:[r.month," ",r.year]})]}),(0,G.jsxs)("p",{className:"h-venue e9",children:[_t.venueName,", ",_t.venueCity]})]}),(0,G.jsx)("div",{className:"scroll-cue","aria-hidden":"true",children:(0,G.jsx)("i",{})})]}),(0,G.jsxs)("section",{className:"sec",children:[(0,G.jsxs)(Hi,{children:[(0,G.jsx)("p",{className:"eyebrow",children:"Every moment counts"}),(0,G.jsx)("h2",{children:"The countdown begins"}),(0,G.jsx)(Bc,{})]}),(0,G.jsx)(Hi,{delay:120,children:(0,G.jsx)(a_,{cls:"rcd"})}),(0,G.jsx)(Hi,{delay:200,children:(0,G.jsxs)("p",{className:"cd-note",children:["until the baraat arrives, ",Vo(_t.weddingDate).day," ",Vo(_t.weddingDate).month]})})]}),(0,G.jsxs)("section",{className:"sec",children:[(0,G.jsxs)(Hi,{children:[(0,G.jsx)("p",{className:"eyebrow",children:"Two days of joy"}),(0,G.jsx)("h2",{children:"The celebrations"}),(0,G.jsx)(Bc,{})]}),(0,G.jsx)("ol",{className:"tl",children:a.map((s,o)=>(0,G.jsxs)(Hi,{as:"li",className:"ev",delay:o*60,children:[(0,G.jsxs)("div",{className:"ev-date",children:[(0,G.jsx)("b",{children:s.d.day}),(0,G.jsx)("span",{children:s.d.monthShort})]}),(0,G.jsx)("i",{className:"ev-dot","aria-hidden":"true"}),(0,G.jsxs)("div",{className:"ev-card",children:[(0,G.jsx)("div",{className:"ev-ic",children:(0,G.jsx)(op,{name:s.icon})}),(0,G.jsxs)("p",{className:"ev-day",children:[s.d.weekday," \xB7 ",s.time]}),(0,G.jsxs)("h3",{children:[s.name," ",(0,G.jsx)("small",{lang:"hi",children:s.hi})]}),(0,G.jsx)("p",{className:"ev-note",children:s.note}),(0,G.jsxs)("p",{className:"ev-where",children:[s.venue,", Rourkela"]})]})]},s.id))})]}),(0,G.jsxs)("section",{className:"sec venue",children:[(0,G.jsxs)(Hi,{children:[(0,G.jsx)("p",{className:"eyebrow",children:"Where to find us"}),(0,G.jsx)("h2",{children:"The venue"}),(0,G.jsx)(Bc,{})]}),(0,G.jsxs)(Hi,{delay:100,className:"v-card",children:[(0,G.jsx)("div",{className:"ev-ic",children:(0,G.jsx)(op,{name:"pin"})}),(0,G.jsx)("h3",{children:_t.venueName}),(0,G.jsxs)("p",{lang:"hi",className:"v-hi",children:[_t.venueNameHi,", \u0930\u093E\u0909\u0930\u0915\u0947\u0932\u093E"]}),(0,G.jsx)("p",{children:_t.venueCity}),(0,G.jsxs)("div",{className:"btns",children:[(0,G.jsx)("a",{className:"rbtn",href:Zv(),target:"_blank",rel:"noopener noreferrer",children:"Get directions"}),(0,G.jsx)("a",{className:"rbtn ghost",href:Qv(),download:"aastha-mayank-wedding.ics",children:"Add to calendar"})]})]})]}),(0,G.jsx)("footer",{className:"rfoot",children:(0,G.jsxs)(Hi,{children:[(0,G.jsx)("p",{lang:"hi",className:"h-ganesh",children:"\u0965 \u0936\u0941\u092D \u0935\u093F\u0935\u093E\u0939 \u0965"}),(0,G.jsxs)("p",{className:"f-names",children:[_t.bride," & ",_t.groom]}),(0,G.jsxs)("p",{className:"f-note",children:["With love and blessings from",(0,G.jsx)("br",{}),_t.family]}),(0,G.jsx)("p",{className:"f-sub",children:"Your presence will make our celebration complete."})]})})]})]})}var sn=or(Br());function Q1(){return(0,sn.jsxs)(Kv,{children:[(0,sn.jsx)(Vu,{path:"/",element:(0,sn.jsx)(Vc,{})}),(0,sn.jsx)(Vu,{path:"/royal",element:(0,sn.jsx)(Vc,{})}),(0,sn.jsx)(Vu,{path:"*",element:(0,sn.jsx)(Vc,{})})]})}var rx=or(Br()),ex=new URLSearchParams(location.search).get("vh");if(ex){let e=document.createElement("style");e.textContent=`.hero,.ivhero{min-height:${ex}px!important}`,document.head.appendChild(e)}(0,tx.createRoot)(document.getElementById("root")).render((0,rx.jsx)(Q1,{}));})();
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
