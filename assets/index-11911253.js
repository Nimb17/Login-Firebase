function _mergeNamespaces(o,i){for(var a=0;a<i.length;a++){const s=i[a];if(typeof s!="string"&&!Array.isArray(s)){for(const et in s)if(et!=="default"&&!(et in o)){const tt=Object.getOwnPropertyDescriptor(s,et);tt&&Object.defineProperty(o,et,tt.get?tt:{enumerable:!0,get:()=>s[et]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const et of document.querySelectorAll('link[rel="modulepreload"]'))s(et);new MutationObserver(et=>{for(const tt of et)if(tt.type==="childList")for(const nt of tt.addedNodes)nt.tagName==="LINK"&&nt.rel==="modulepreload"&&s(nt)}).observe(document,{childList:!0,subtree:!0});function a(et){const tt={};return et.integrity&&(tt.integrity=et.integrity),et.referrerpolicy&&(tt.referrerPolicy=et.referrerpolicy),et.crossorigin==="use-credentials"?tt.credentials="include":et.crossorigin==="anonymous"?tt.credentials="omit":tt.credentials="same-origin",tt}function s(et){if(et.ep)return;et.ep=!0;const tt=a(et);fetch(et.href,tt)}})();function getDefaultExportFromCjs(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var jsxRuntimeExports={},jsxRuntime={get exports(){return jsxRuntimeExports},set exports(o){jsxRuntimeExports=o}},reactJsxRuntime_production_min={},reactExports={},react={get exports(){return reactExports},set exports(o){reactExports=o}},react_production_min={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l$3=Symbol.for("react.element"),n$3=Symbol.for("react.portal"),p$4=Symbol.for("react.fragment"),q$4=Symbol.for("react.strict_mode"),r$1=Symbol.for("react.profiler"),t$2=Symbol.for("react.provider"),u$1=Symbol.for("react.context"),v$4=Symbol.for("react.forward_ref"),w$2=Symbol.for("react.suspense"),x$2=Symbol.for("react.memo"),y$1=Symbol.for("react.lazy"),z$3=Symbol.iterator;function A$3(o){return o===null||typeof o!="object"?null:(o=z$3&&o[z$3]||o["@@iterator"],typeof o=="function"?o:null)}var B$2={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C$1=Object.assign,D$1={};function E$2(o,i,a){this.props=o,this.context=i,this.refs=D$1,this.updater=a||B$2}E$2.prototype.isReactComponent={};E$2.prototype.setState=function(o,i){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,i,"setState")};E$2.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function F$1(){}F$1.prototype=E$2.prototype;function G$2(o,i,a){this.props=o,this.context=i,this.refs=D$1,this.updater=a||B$2}var H$2=G$2.prototype=new F$1;H$2.constructor=G$2;C$1(H$2,E$2.prototype);H$2.isPureReactComponent=!0;var I$2=Array.isArray,J$1=Object.prototype.hasOwnProperty,K$2={current:null},L$2={key:!0,ref:!0,__self:!0,__source:!0};function M$2(o,i,a){var s,et={},tt=null,nt=null;if(i!=null)for(s in i.ref!==void 0&&(nt=i.ref),i.key!==void 0&&(tt=""+i.key),i)J$1.call(i,s)&&!L$2.hasOwnProperty(s)&&(et[s]=i[s]);var rt=arguments.length-2;if(rt===1)et.children=a;else if(1<rt){for(var ot=Array(rt),it=0;it<rt;it++)ot[it]=arguments[it+2];et.children=ot}if(o&&o.defaultProps)for(s in rt=o.defaultProps,rt)et[s]===void 0&&(et[s]=rt[s]);return{$$typeof:l$3,type:o,key:tt,ref:nt,props:et,_owner:K$2.current}}function N$2(o,i){return{$$typeof:l$3,type:o.type,key:i,ref:o.ref,props:o.props,_owner:o._owner}}function O$2(o){return typeof o=="object"&&o!==null&&o.$$typeof===l$3}function escape(o){var i={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(a){return i[a]})}var P$2=/\/+/g;function Q$2(o,i){return typeof o=="object"&&o!==null&&o.key!=null?escape(""+o.key):i.toString(36)}function R$1(o,i,a,s,et){var tt=typeof o;(tt==="undefined"||tt==="boolean")&&(o=null);var nt=!1;if(o===null)nt=!0;else switch(tt){case"string":case"number":nt=!0;break;case"object":switch(o.$$typeof){case l$3:case n$3:nt=!0}}if(nt)return nt=o,et=et(nt),o=s===""?"."+Q$2(nt,0):s,I$2(et)?(a="",o!=null&&(a=o.replace(P$2,"$&/")+"/"),R$1(et,i,a,"",function(it){return it})):et!=null&&(O$2(et)&&(et=N$2(et,a+(!et.key||nt&&nt.key===et.key?"":(""+et.key).replace(P$2,"$&/")+"/")+o)),i.push(et)),1;if(nt=0,s=s===""?".":s+":",I$2(o))for(var rt=0;rt<o.length;rt++){tt=o[rt];var ot=s+Q$2(tt,rt);nt+=R$1(tt,i,a,ot,et)}else if(ot=A$3(o),typeof ot=="function")for(o=ot.call(o),rt=0;!(tt=o.next()).done;)tt=tt.value,ot=s+Q$2(tt,rt++),nt+=R$1(tt,i,a,ot,et);else if(tt==="object")throw i=String(o),Error("Objects are not valid as a React child (found: "+(i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i)+"). If you meant to render a collection of children, use an array instead.");return nt}function S$2(o,i,a){if(o==null)return o;var s=[],et=0;return R$1(o,s,"","",function(tt){return i.call(a,tt,et++)}),s}function T$2(o){if(o._status===-1){var i=o._result;i=i(),i.then(function(a){(o._status===0||o._status===-1)&&(o._status=1,o._result=a)},function(a){(o._status===0||o._status===-1)&&(o._status=2,o._result=a)}),o._status===-1&&(o._status=0,o._result=i)}if(o._status===1)return o._result.default;throw o._result}var U$2={current:null},V$2={transition:null},W$2={ReactCurrentDispatcher:U$2,ReactCurrentBatchConfig:V$2,ReactCurrentOwner:K$2};react_production_min.Children={map:S$2,forEach:function(o,i,a){S$2(o,function(){i.apply(this,arguments)},a)},count:function(o){var i=0;return S$2(o,function(){i++}),i},toArray:function(o){return S$2(o,function(i){return i})||[]},only:function(o){if(!O$2(o))throw Error("React.Children.only expected to receive a single React element child.");return o}};react_production_min.Component=E$2;react_production_min.Fragment=p$4;react_production_min.Profiler=r$1;react_production_min.PureComponent=G$2;react_production_min.StrictMode=q$4;react_production_min.Suspense=w$2;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W$2;react_production_min.cloneElement=function(o,i,a){if(o==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+o+".");var s=C$1({},o.props),et=o.key,tt=o.ref,nt=o._owner;if(i!=null){if(i.ref!==void 0&&(tt=i.ref,nt=K$2.current),i.key!==void 0&&(et=""+i.key),o.type&&o.type.defaultProps)var rt=o.type.defaultProps;for(ot in i)J$1.call(i,ot)&&!L$2.hasOwnProperty(ot)&&(s[ot]=i[ot]===void 0&&rt!==void 0?rt[ot]:i[ot])}var ot=arguments.length-2;if(ot===1)s.children=a;else if(1<ot){rt=Array(ot);for(var it=0;it<ot;it++)rt[it]=arguments[it+2];s.children=rt}return{$$typeof:l$3,type:o.type,key:et,ref:tt,props:s,_owner:nt}};react_production_min.createContext=function(o){return o={$$typeof:u$1,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},o.Provider={$$typeof:t$2,_context:o},o.Consumer=o};react_production_min.createElement=M$2;react_production_min.createFactory=function(o){var i=M$2.bind(null,o);return i.type=o,i};react_production_min.createRef=function(){return{current:null}};react_production_min.forwardRef=function(o){return{$$typeof:v$4,render:o}};react_production_min.isValidElement=O$2;react_production_min.lazy=function(o){return{$$typeof:y$1,_payload:{_status:-1,_result:o},_init:T$2}};react_production_min.memo=function(o,i){return{$$typeof:x$2,type:o,compare:i===void 0?null:i}};react_production_min.startTransition=function(o){var i=V$2.transition;V$2.transition={};try{o()}finally{V$2.transition=i}};react_production_min.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};react_production_min.useCallback=function(o,i){return U$2.current.useCallback(o,i)};react_production_min.useContext=function(o){return U$2.current.useContext(o)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(o){return U$2.current.useDeferredValue(o)};react_production_min.useEffect=function(o,i){return U$2.current.useEffect(o,i)};react_production_min.useId=function(){return U$2.current.useId()};react_production_min.useImperativeHandle=function(o,i,a){return U$2.current.useImperativeHandle(o,i,a)};react_production_min.useInsertionEffect=function(o,i){return U$2.current.useInsertionEffect(o,i)};react_production_min.useLayoutEffect=function(o,i){return U$2.current.useLayoutEffect(o,i)};react_production_min.useMemo=function(o,i){return U$2.current.useMemo(o,i)};react_production_min.useReducer=function(o,i,a){return U$2.current.useReducer(o,i,a)};react_production_min.useRef=function(o){return U$2.current.useRef(o)};react_production_min.useState=function(o){return U$2.current.useState(o)};react_production_min.useSyncExternalStore=function(o,i,a){return U$2.current.useSyncExternalStore(o,i,a)};react_production_min.useTransition=function(){return U$2.current.useTransition()};react_production_min.version="18.2.0";(function(o){o.exports=react_production_min})(react);const React=getDefaultExportFromCjs(reactExports),React$1=_mergeNamespaces({__proto__:null,default:React},[reactExports]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f$2=reactExports,k$3=Symbol.for("react.element"),l$2=Symbol.for("react.fragment"),m$3=Object.prototype.hasOwnProperty,n$2=f$2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p$3={key:!0,ref:!0,__self:!0,__source:!0};function q$3(o,i,a){var s,et={},tt=null,nt=null;a!==void 0&&(tt=""+a),i.key!==void 0&&(tt=""+i.key),i.ref!==void 0&&(nt=i.ref);for(s in i)m$3.call(i,s)&&!p$3.hasOwnProperty(s)&&(et[s]=i[s]);if(o&&o.defaultProps)for(s in i=o.defaultProps,i)et[s]===void 0&&(et[s]=i[s]);return{$$typeof:k$3,type:o,key:tt,ref:nt,props:et,_owner:n$2.current}}reactJsxRuntime_production_min.Fragment=l$2;reactJsxRuntime_production_min.jsx=q$3;reactJsxRuntime_production_min.jsxs=q$3;(function(o){o.exports=reactJsxRuntime_production_min})(jsxRuntime);const jsx=jsxRuntimeExports.jsx,jsxs=jsxRuntimeExports.jsxs;var client={},reactDomExports={},reactDom={get exports(){return reactDomExports},set exports(o){reactDomExports=o}},reactDom_production_min={},schedulerExports={},scheduler={get exports(){return schedulerExports},set exports(o){schedulerExports=o}},scheduler_production_min={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(o){function i(_t,Ct){var Lt=_t.length;_t.push(Ct);e:for(;0<Lt;){var Vt=Lt-1>>>1,St=_t[Vt];if(0<et(St,Ct))_t[Vt]=Ct,_t[Lt]=St,Lt=Vt;else break e}}function a(_t){return _t.length===0?null:_t[0]}function s(_t){if(_t.length===0)return null;var Ct=_t[0],Lt=_t.pop();if(Lt!==Ct){_t[0]=Lt;e:for(var Vt=0,St=_t.length,Et=St>>>1;Vt<Et;){var bt=2*(Vt+1)-1,At=_t[bt],ft=bt+1,Rt=_t[ft];if(0>et(At,Lt))ft<St&&0>et(Rt,At)?(_t[Vt]=Rt,_t[ft]=Lt,Vt=ft):(_t[Vt]=At,_t[bt]=Lt,Vt=bt);else if(ft<St&&0>et(Rt,Lt))_t[Vt]=Rt,_t[ft]=Lt,Vt=ft;else break e}}return Ct}function et(_t,Ct){var Lt=_t.sortIndex-Ct.sortIndex;return Lt!==0?Lt:_t.id-Ct.id}if(typeof performance=="object"&&typeof performance.now=="function"){var tt=performance;o.unstable_now=function(){return tt.now()}}else{var nt=Date,rt=nt.now();o.unstable_now=function(){return nt.now()-rt}}var ot=[],it=[],lt=1,st=null,dt=3,ht=!1,pt=!1,mt=!1,yt=typeof setTimeout=="function"?setTimeout:null,ct=typeof clearTimeout=="function"?clearTimeout:null,at=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ut(_t){for(var Ct=a(it);Ct!==null;){if(Ct.callback===null)s(it);else if(Ct.startTime<=_t)s(it),Ct.sortIndex=Ct.expirationTime,i(ot,Ct);else break;Ct=a(it)}}function gt(_t){if(mt=!1,ut(_t),!pt)if(a(ot)!==null)pt=!0,Xt(vt);else{var Ct=a(it);Ct!==null&&Qt(gt,Ct.startTime-_t)}}function vt(_t,Ct){pt=!1,mt&&(mt=!1,ct(It),It=-1),ht=!0;var Lt=dt;try{for(ut(Ct),st=a(ot);st!==null&&(!(st.expirationTime>Ct)||_t&&!Wt());){var Vt=st.callback;if(typeof Vt=="function"){st.callback=null,dt=st.priorityLevel;var St=Vt(st.expirationTime<=Ct);Ct=o.unstable_now(),typeof St=="function"?st.callback=St:st===a(ot)&&s(ot),ut(Ct)}else s(ot);st=a(ot)}if(st!==null)var Et=!0;else{var bt=a(it);bt!==null&&Qt(gt,bt.startTime-Ct),Et=!1}return Et}finally{st=null,dt=Lt,ht=!1}}var wt=!1,kt=null,It=-1,Mt=5,Dt=-1;function Wt(){return!(o.unstable_now()-Dt<Mt)}function Ft(){if(kt!==null){var _t=o.unstable_now();Dt=_t;var Ct=!0;try{Ct=kt(!0,_t)}finally{Ct?Ht():(wt=!1,kt=null)}}else wt=!1}var Ht;if(typeof at=="function")Ht=function(){at(Ft)};else if(typeof MessageChannel<"u"){var Kt=new MessageChannel,zt=Kt.port2;Kt.port1.onmessage=Ft,Ht=function(){zt.postMessage(null)}}else Ht=function(){yt(Ft,0)};function Xt(_t){kt=_t,wt||(wt=!0,Ht())}function Qt(_t,Ct){It=yt(function(){_t(o.unstable_now())},Ct)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(_t){_t.callback=null},o.unstable_continueExecution=function(){pt||ht||(pt=!0,Xt(vt))},o.unstable_forceFrameRate=function(_t){0>_t||125<_t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Mt=0<_t?Math.floor(1e3/_t):5},o.unstable_getCurrentPriorityLevel=function(){return dt},o.unstable_getFirstCallbackNode=function(){return a(ot)},o.unstable_next=function(_t){switch(dt){case 1:case 2:case 3:var Ct=3;break;default:Ct=dt}var Lt=dt;dt=Ct;try{return _t()}finally{dt=Lt}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(_t,Ct){switch(_t){case 1:case 2:case 3:case 4:case 5:break;default:_t=3}var Lt=dt;dt=_t;try{return Ct()}finally{dt=Lt}},o.unstable_scheduleCallback=function(_t,Ct,Lt){var Vt=o.unstable_now();switch(typeof Lt=="object"&&Lt!==null?(Lt=Lt.delay,Lt=typeof Lt=="number"&&0<Lt?Vt+Lt:Vt):Lt=Vt,_t){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=Lt+St,_t={id:lt++,callback:Ct,priorityLevel:_t,startTime:Lt,expirationTime:St,sortIndex:-1},Lt>Vt?(_t.sortIndex=Lt,i(it,_t),a(ot)===null&&_t===a(it)&&(mt?(ct(It),It=-1):mt=!0,Qt(gt,Lt-Vt))):(_t.sortIndex=St,i(ot,_t),pt||ht||(pt=!0,Xt(vt))),_t},o.unstable_shouldYield=Wt,o.unstable_wrapCallback=function(_t){var Ct=dt;return function(){var Lt=dt;dt=Ct;try{return _t.apply(this,arguments)}finally{dt=Lt}}}})(scheduler_production_min);(function(o){o.exports=scheduler_production_min})(scheduler);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=reactExports,ca=schedulerExports;function p$2(o){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+o,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+o+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(o,i){ha(o,i),ha(o+"Capture",i)}function ha(o,i){for(ea[o]=i,o=0;o<i.length;o++)da.add(i[o])}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la={},ma={};function oa(o){return ja.call(ma,o)?!0:ja.call(la,o)?!1:ka.test(o)?ma[o]=!0:(la[o]=!0,!1)}function pa(o,i,a,s){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return s?!1:a!==null?!a.acceptsBooleans:(o=o.toLowerCase().slice(0,5),o!=="data-"&&o!=="aria-");default:return!1}}function qa(o,i,a,s){if(i===null||typeof i>"u"||pa(o,i,a,s))return!0;if(s)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function v$3(o,i,a,s,et,tt,nt){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=s,this.attributeNamespace=et,this.mustUseProperty=a,this.propertyName=o,this.type=i,this.sanitizeURL=tt,this.removeEmptyString=nt}var z$2={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o){z$2[o]=new v$3(o,0,!1,o,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(o){var i=o[0];z$2[i]=new v$3(i,1,!1,o[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(o){z$2[o]=new v$3(o,2,!1,o.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(o){z$2[o]=new v$3(o,2,!1,o,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o){z$2[o]=new v$3(o,3,!1,o.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(o){z$2[o]=new v$3(o,3,!0,o,null,!1,!1)});["capture","download"].forEach(function(o){z$2[o]=new v$3(o,4,!1,o,null,!1,!1)});["cols","rows","size","span"].forEach(function(o){z$2[o]=new v$3(o,6,!1,o,null,!1,!1)});["rowSpan","start"].forEach(function(o){z$2[o]=new v$3(o,5,!1,o.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(o){return o[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o){var i=o.replace(ra,sa);z$2[i]=new v$3(i,1,!1,o,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o){var i=o.replace(ra,sa);z$2[i]=new v$3(i,1,!1,o,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(o){var i=o.replace(ra,sa);z$2[i]=new v$3(i,1,!1,o,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(o){z$2[o]=new v$3(o,1,!1,o.toLowerCase(),null,!1,!1)});z$2.xlinkHref=new v$3("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(o){z$2[o]=new v$3(o,1,!1,o.toLowerCase(),null,!0,!0)});function ta(o,i,a,s){var et=z$2.hasOwnProperty(i)?z$2[i]:null;(et!==null?et.type!==0:s||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(qa(i,a,et,s)&&(a=null),s||et===null?oa(i)&&(a===null?o.removeAttribute(i):o.setAttribute(i,""+a)):et.mustUseProperty?o[et.propertyName]=a===null?et.type===3?!1:"":a:(i=et.attributeName,s=et.attributeNamespace,a===null?o.removeAttribute(i):(et=et.type,a=et===3||et===4&&a===!0?"":""+a,s?o.setAttributeNS(s,i,a):o.setAttribute(i,a))))}var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy"),Ia=Symbol.for("react.offscreen"),Ja=Symbol.iterator;function Ka(o){return o===null||typeof o!="object"?null:(o=Ja&&o[Ja]||o["@@iterator"],typeof o=="function"?o:null)}var A$2=Object.assign,La;function Ma(o){if(La===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);La=i&&i[1]||""}return`
`+La+o}var Na=!1;function Oa(o,i){if(!o||Na)return"";Na=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(it){var s=it}Reflect.construct(o,[],i)}else{try{i.call()}catch(it){s=it}o.call(i.prototype)}else{try{throw Error()}catch(it){s=it}o()}}catch(it){if(it&&s&&typeof it.stack=="string"){for(var et=it.stack.split(`
`),tt=s.stack.split(`
`),nt=et.length-1,rt=tt.length-1;1<=nt&&0<=rt&&et[nt]!==tt[rt];)rt--;for(;1<=nt&&0<=rt;nt--,rt--)if(et[nt]!==tt[rt]){if(nt!==1||rt!==1)do if(nt--,rt--,0>rt||et[nt]!==tt[rt]){var ot=`
`+et[nt].replace(" at new "," at ");return o.displayName&&ot.includes("<anonymous>")&&(ot=ot.replace("<anonymous>",o.displayName)),ot}while(1<=nt&&0<=rt);break}}}finally{Na=!1,Error.prepareStackTrace=a}return(o=o?o.displayName||o.name:"")?Ma(o):""}function Pa(o){switch(o.tag){case 5:return Ma(o.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return o=Oa(o.type,!1),o;case 11:return o=Oa(o.type.render,!1),o;case 1:return o=Oa(o.type,!0),o;default:return""}}function Qa(o){if(o==null)return null;if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case Ca:return(o.displayName||"Context")+".Consumer";case Ba:return(o._context.displayName||"Context")+".Provider";case Da:var i=o.render;return o=o.displayName,o||(o=i.displayName||i.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case Ga:return i=o.displayName||null,i!==null?i:Qa(o.type)||"Memo";case Ha:i=o._payload,o=o._init;try{return Qa(o(i))}catch{}}return null}function Ra(o){var i=o.type;switch(o.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return o=i.render,o=o.displayName||o.name||"",i.displayName||(o!==""?"ForwardRef("+o+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(i);case 8:return i===za?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Sa(o){switch(typeof o){case"boolean":case"number":case"string":case"undefined":return o;case"object":return o;default:return""}}function Ta(o){var i=o.type;return(o=o.nodeName)&&o.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ua(o){var i=Ta(o)?"checked":"value",a=Object.getOwnPropertyDescriptor(o.constructor.prototype,i),s=""+o[i];if(!o.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var et=a.get,tt=a.set;return Object.defineProperty(o,i,{configurable:!0,get:function(){return et.call(this)},set:function(nt){s=""+nt,tt.call(this,nt)}}),Object.defineProperty(o,i,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(nt){s=""+nt},stopTracking:function(){o._valueTracker=null,delete o[i]}}}}function Va(o){o._valueTracker||(o._valueTracker=Ua(o))}function Wa(o){if(!o)return!1;var i=o._valueTracker;if(!i)return!0;var a=i.getValue(),s="";return o&&(s=Ta(o)?o.checked?"true":"false":o.value),o=s,o!==a?(i.setValue(o),!0):!1}function Xa(o){if(o=o||(typeof document<"u"?document:void 0),typeof o>"u")return null;try{return o.activeElement||o.body}catch{return o.body}}function Ya(o,i){var a=i.checked;return A$2({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??o._wrapperState.initialChecked})}function Za(o,i){var a=i.defaultValue==null?"":i.defaultValue,s=i.checked!=null?i.checked:i.defaultChecked;a=Sa(i.value!=null?i.value:a),o._wrapperState={initialChecked:s,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ab(o,i){i=i.checked,i!=null&&ta(o,"checked",i,!1)}function bb(o,i){ab(o,i);var a=Sa(i.value),s=i.type;if(a!=null)s==="number"?(a===0&&o.value===""||o.value!=a)&&(o.value=""+a):o.value!==""+a&&(o.value=""+a);else if(s==="submit"||s==="reset"){o.removeAttribute("value");return}i.hasOwnProperty("value")?cb(o,i.type,a):i.hasOwnProperty("defaultValue")&&cb(o,i.type,Sa(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(o.defaultChecked=!!i.defaultChecked)}function db(o,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var s=i.type;if(!(s!=="submit"&&s!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+o._wrapperState.initialValue,a||i===o.value||(o.value=i),o.defaultValue=i}a=o.name,a!==""&&(o.name=""),o.defaultChecked=!!o._wrapperState.initialChecked,a!==""&&(o.name=a)}function cb(o,i,a){(i!=="number"||Xa(o.ownerDocument)!==o)&&(a==null?o.defaultValue=""+o._wrapperState.initialValue:o.defaultValue!==""+a&&(o.defaultValue=""+a))}var eb=Array.isArray;function fb(o,i,a,s){if(o=o.options,i){i={};for(var et=0;et<a.length;et++)i["$"+a[et]]=!0;for(a=0;a<o.length;a++)et=i.hasOwnProperty("$"+o[a].value),o[a].selected!==et&&(o[a].selected=et),et&&s&&(o[a].defaultSelected=!0)}else{for(a=""+Sa(a),i=null,et=0;et<o.length;et++){if(o[et].value===a){o[et].selected=!0,s&&(o[et].defaultSelected=!0);return}i!==null||o[et].disabled||(i=o[et])}i!==null&&(i.selected=!0)}}function gb(o,i){if(i.dangerouslySetInnerHTML!=null)throw Error(p$2(91));return A$2({},i,{value:void 0,defaultValue:void 0,children:""+o._wrapperState.initialValue})}function hb(o,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(p$2(92));if(eb(a)){if(1<a.length)throw Error(p$2(93));a=a[0]}i=a}i==null&&(i=""),a=i}o._wrapperState={initialValue:Sa(a)}}function ib(o,i){var a=Sa(i.value),s=Sa(i.defaultValue);a!=null&&(a=""+a,a!==o.value&&(o.value=a),i.defaultValue==null&&o.defaultValue!==a&&(o.defaultValue=a)),s!=null&&(o.defaultValue=""+s)}function jb(o){var i=o.textContent;i===o._wrapperState.initialValue&&i!==""&&i!==null&&(o.value=i)}function kb(o){switch(o){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lb(o,i){return o==null||o==="http://www.w3.org/1999/xhtml"?kb(i):o==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":o}var mb,nb=function(o){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,s,et){MSApp.execUnsafeLocalFunction(function(){return o(i,a,s,et)})}:o}(function(o,i){if(o.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in o)o.innerHTML=i;else{for(mb=mb||document.createElement("div"),mb.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=mb.firstChild;o.firstChild;)o.removeChild(o.firstChild);for(;i.firstChild;)o.appendChild(i.firstChild)}});function ob(o,i){if(i){var a=o.firstChild;if(a&&a===o.lastChild&&a.nodeType===3){a.nodeValue=i;return}}o.textContent=i}var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(o){qb.forEach(function(i){i=i+o.charAt(0).toUpperCase()+o.substring(1),pb[i]=pb[o]})});function rb(o,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||pb.hasOwnProperty(o)&&pb[o]?(""+i).trim():i+"px"}function sb(o,i){o=o.style;for(var a in i)if(i.hasOwnProperty(a)){var s=a.indexOf("--")===0,et=rb(a,i[a],s);a==="float"&&(a="cssFloat"),s?o.setProperty(a,et):o[a]=et}}var tb=A$2({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ub(o,i){if(i){if(tb[o]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(p$2(137,o));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(p$2(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(p$2(61))}if(i.style!=null&&typeof i.style!="object")throw Error(p$2(62))}}function vb(o,i){if(o.indexOf("-")===-1)return typeof i.is=="string";switch(o){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wb=null;function xb(o){return o=o.target||o.srcElement||window,o.correspondingUseElement&&(o=o.correspondingUseElement),o.nodeType===3?o.parentNode:o}var yb=null,zb=null,Ab=null;function Bb(o){if(o=Cb(o)){if(typeof yb!="function")throw Error(p$2(280));var i=o.stateNode;i&&(i=Db(i),yb(o.stateNode,o.type,i))}}function Eb(o){zb?Ab?Ab.push(o):Ab=[o]:zb=o}function Fb(){if(zb){var o=zb,i=Ab;if(Ab=zb=null,Bb(o),i)for(o=0;o<i.length;o++)Bb(i[o])}}function Gb(o,i){return o(i)}function Hb(){}var Ib=!1;function Jb(o,i,a){if(Ib)return o(i,a);Ib=!0;try{return Gb(o,i,a)}finally{Ib=!1,(zb!==null||Ab!==null)&&(Hb(),Fb())}}function Kb(o,i){var a=o.stateNode;if(a===null)return null;var s=Db(a);if(s===null)return null;a=s[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(o=o.type,s=!(o==="button"||o==="input"||o==="select"||o==="textarea")),o=!s;break e;default:o=!1}if(o)return null;if(a&&typeof a!="function")throw Error(p$2(231,i,typeof a));return a}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}}),window.addEventListener("test",Mb,Mb),window.removeEventListener("test",Mb,Mb)}catch{Lb=!1}function Nb(o,i,a,s,et,tt,nt,rt,ot){var it=Array.prototype.slice.call(arguments,3);try{i.apply(a,it)}catch(lt){this.onError(lt)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(o){Ob=!0,Pb=o}};function Tb(o,i,a,s,et,tt,nt,rt,ot){Ob=!1,Pb=null,Nb.apply(Sb,arguments)}function Ub(o,i,a,s,et,tt,nt,rt,ot){if(Tb.apply(this,arguments),Ob){if(Ob){var it=Pb;Ob=!1,Pb=null}else throw Error(p$2(198));Qb||(Qb=!0,Rb=it)}}function Vb(o){var i=o,a=o;if(o.alternate)for(;i.return;)i=i.return;else{o=i;do i=o,i.flags&4098&&(a=i.return),o=i.return;while(o)}return i.tag===3?a:null}function Wb(o){if(o.tag===13){var i=o.memoizedState;if(i===null&&(o=o.alternate,o!==null&&(i=o.memoizedState)),i!==null)return i.dehydrated}return null}function Xb(o){if(Vb(o)!==o)throw Error(p$2(188))}function Yb(o){var i=o.alternate;if(!i){if(i=Vb(o),i===null)throw Error(p$2(188));return i!==o?null:o}for(var a=o,s=i;;){var et=a.return;if(et===null)break;var tt=et.alternate;if(tt===null){if(s=et.return,s!==null){a=s;continue}break}if(et.child===tt.child){for(tt=et.child;tt;){if(tt===a)return Xb(et),o;if(tt===s)return Xb(et),i;tt=tt.sibling}throw Error(p$2(188))}if(a.return!==s.return)a=et,s=tt;else{for(var nt=!1,rt=et.child;rt;){if(rt===a){nt=!0,a=et,s=tt;break}if(rt===s){nt=!0,s=et,a=tt;break}rt=rt.sibling}if(!nt){for(rt=tt.child;rt;){if(rt===a){nt=!0,a=tt,s=et;break}if(rt===s){nt=!0,s=tt,a=et;break}rt=rt.sibling}if(!nt)throw Error(p$2(189))}}if(a.alternate!==s)throw Error(p$2(190))}if(a.tag!==3)throw Error(p$2(188));return a.stateNode.current===a?o:i}function Zb(o){return o=Yb(o),o!==null?$b(o):null}function $b(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){var i=$b(o);if(i!==null)return i;o=o.sibling}return null}var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B$1=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(o){if(lc&&typeof lc.onCommitFiberRoot=="function")try{lc.onCommitFiberRoot(kc,o,void 0,(o.current.flags&128)===128)}catch{}}var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(o){return o>>>=0,o===0?32:31-(pc(o)/qc|0)|0}var rc=64,sc=4194304;function tc(o){switch(o&-o){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return o&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return o}}function uc(o,i){var a=o.pendingLanes;if(a===0)return 0;var s=0,et=o.suspendedLanes,tt=o.pingedLanes,nt=a&268435455;if(nt!==0){var rt=nt&~et;rt!==0?s=tc(rt):(tt&=nt,tt!==0&&(s=tc(tt)))}else nt=a&~et,nt!==0?s=tc(nt):tt!==0&&(s=tc(tt));if(s===0)return 0;if(i!==0&&i!==s&&!(i&et)&&(et=s&-s,tt=i&-i,et>=tt||et===16&&(tt&4194240)!==0))return i;if(s&4&&(s|=a&16),i=o.entangledLanes,i!==0)for(o=o.entanglements,i&=s;0<i;)a=31-oc(i),et=1<<a,s|=o[a],i&=~et;return s}function vc(o,i){switch(o){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wc(o,i){for(var a=o.suspendedLanes,s=o.pingedLanes,et=o.expirationTimes,tt=o.pendingLanes;0<tt;){var nt=31-oc(tt),rt=1<<nt,ot=et[nt];ot===-1?(!(rt&a)||rt&s)&&(et[nt]=vc(rt,i)):ot<=i&&(o.expiredLanes|=rt),tt&=~rt}}function xc(o){return o=o.pendingLanes&-1073741825,o!==0?o:o&1073741824?1073741824:0}function yc(){var o=rc;return rc<<=1,!(rc&4194240)&&(rc=64),o}function zc(o){for(var i=[],a=0;31>a;a++)i.push(o);return i}function Ac(o,i,a){o.pendingLanes|=i,i!==536870912&&(o.suspendedLanes=0,o.pingedLanes=0),o=o.eventTimes,i=31-oc(i),o[i]=a}function Bc(o,i){var a=o.pendingLanes&~i;o.pendingLanes=i,o.suspendedLanes=0,o.pingedLanes=0,o.expiredLanes&=i,o.mutableReadLanes&=i,o.entangledLanes&=i,i=o.entanglements;var s=o.eventTimes;for(o=o.expirationTimes;0<a;){var et=31-oc(a),tt=1<<et;i[et]=0,s[et]=-1,o[et]=-1,a&=~tt}}function Cc(o,i){var a=o.entangledLanes|=i;for(o=o.entanglements;a;){var s=31-oc(a),et=1<<s;et&i|o[s]&i&&(o[s]|=i),a&=~et}}var C=0;function Dc(o){return o&=-o,1<o?4<o?o&268435455?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sc(o,i){switch(o){case"focusin":case"focusout":Lc=null;break;case"dragenter":case"dragleave":Mc=null;break;case"mouseover":case"mouseout":Nc=null;break;case"pointerover":case"pointerout":Oc.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pc.delete(i.pointerId)}}function Tc(o,i,a,s,et,tt){return o===null||o.nativeEvent!==tt?(o={blockedOn:i,domEventName:a,eventSystemFlags:s,nativeEvent:tt,targetContainers:[et]},i!==null&&(i=Cb(i),i!==null&&Fc(i)),o):(o.eventSystemFlags|=s,i=o.targetContainers,et!==null&&i.indexOf(et)===-1&&i.push(et),o)}function Uc(o,i,a,s,et){switch(i){case"focusin":return Lc=Tc(Lc,o,i,a,s,et),!0;case"dragenter":return Mc=Tc(Mc,o,i,a,s,et),!0;case"mouseover":return Nc=Tc(Nc,o,i,a,s,et),!0;case"pointerover":var tt=et.pointerId;return Oc.set(tt,Tc(Oc.get(tt)||null,o,i,a,s,et)),!0;case"gotpointercapture":return tt=et.pointerId,Pc.set(tt,Tc(Pc.get(tt)||null,o,i,a,s,et)),!0}return!1}function Vc(o){var i=Wc(o.target);if(i!==null){var a=Vb(i);if(a!==null){if(i=a.tag,i===13){if(i=Wb(a),i!==null){o.blockedOn=i,Ic(o.priority,function(){Gc(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){o.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}o.blockedOn=null}function Xc(o){if(o.blockedOn!==null)return!1;for(var i=o.targetContainers;0<i.length;){var a=Yc(o.domEventName,o.eventSystemFlags,i[0],o.nativeEvent);if(a===null){a=o.nativeEvent;var s=new a.constructor(a.type,a);wb=s,a.target.dispatchEvent(s),wb=null}else return i=Cb(a),i!==null&&Fc(i),o.blockedOn=a,!1;i.shift()}return!0}function Zc(o,i,a){Xc(o)&&a.delete(i)}function $c(){Jc=!1,Lc!==null&&Xc(Lc)&&(Lc=null),Mc!==null&&Xc(Mc)&&(Mc=null),Nc!==null&&Xc(Nc)&&(Nc=null),Oc.forEach(Zc),Pc.forEach(Zc)}function ad(o,i){o.blockedOn===i&&(o.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}function bd(o){function i(et){return ad(et,o)}if(0<Kc.length){ad(Kc[0],o);for(var a=1;a<Kc.length;a++){var s=Kc[a];s.blockedOn===o&&(s.blockedOn=null)}}for(Lc!==null&&ad(Lc,o),Mc!==null&&ad(Mc,o),Nc!==null&&ad(Nc,o),Oc.forEach(i),Pc.forEach(i),a=0;a<Qc.length;a++)s=Qc[a],s.blockedOn===o&&(s.blockedOn=null);for(;0<Qc.length&&(a=Qc[0],a.blockedOn===null);)Vc(a),a.blockedOn===null&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;function ed(o,i,a,s){var et=C,tt=cd.transition;cd.transition=null;try{C=1,fd(o,i,a,s)}finally{C=et,cd.transition=tt}}function gd(o,i,a,s){var et=C,tt=cd.transition;cd.transition=null;try{C=4,fd(o,i,a,s)}finally{C=et,cd.transition=tt}}function fd(o,i,a,s){if(dd){var et=Yc(o,i,a,s);if(et===null)hd(o,i,s,id,a),Sc(o,s);else if(Uc(et,o,i,a,s))s.stopPropagation();else if(Sc(o,s),i&4&&-1<Rc.indexOf(o)){for(;et!==null;){var tt=Cb(et);if(tt!==null&&Ec(tt),tt=Yc(o,i,a,s),tt===null&&hd(o,i,s,id,a),tt===et)break;et=tt}et!==null&&s.stopPropagation()}else hd(o,i,s,null,a)}}var id=null;function Yc(o,i,a,s){if(id=null,o=xb(s),o=Wc(o),o!==null)if(i=Vb(o),i===null)o=null;else if(a=i.tag,a===13){if(o=Wb(i),o!==null)return o;o=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;o=null}else i!==o&&(o=null);return id=o,null}function jd(o){switch(o){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var o,i=ld,a=i.length,s,et="value"in kd?kd.value:kd.textContent,tt=et.length;for(o=0;o<a&&i[o]===et[o];o++);var nt=a-o;for(s=1;s<=nt&&i[a-s]===et[tt-s];s++);return md=et.slice(o,1<s?1-s:void 0)}function od(o){var i=o.keyCode;return"charCode"in o?(o=o.charCode,o===0&&i===13&&(o=13)):o=i,o===10&&(o=13),32<=o||o===13?o:0}function pd(){return!0}function qd(){return!1}function rd(o){function i(a,s,et,tt,nt){this._reactName=a,this._targetInst=et,this.type=s,this.nativeEvent=tt,this.target=nt,this.currentTarget=null;for(var rt in o)o.hasOwnProperty(rt)&&(a=o[rt],this[rt]=a?a(tt):tt[rt]);return this.isDefaultPrevented=(tt.defaultPrevented!=null?tt.defaultPrevented:tt.returnValue===!1)?pd:qd,this.isPropagationStopped=qd,this}return A$2(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd}),i}var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(o){return o.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A$2({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A$2({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(o){return o.relatedTarget===void 0?o.fromElement===o.srcElement?o.toElement:o.fromElement:o.relatedTarget},movementX:function(o){return"movementX"in o?o.movementX:(o!==yd&&(yd&&o.type==="mousemove"?(wd=o.screenX-yd.screenX,xd=o.screenY-yd.screenY):xd=wd=0,yd=o),wd)},movementY:function(o){return"movementY"in o?o.movementY:xd}}),Bd=rd(Ad),Cd=A$2({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A$2({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A$2({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A$2({},sd,{clipboardData:function(o){return"clipboardData"in o?o.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A$2({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(o){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(o):(o=Od[o])?!!i[o]:!1}function zd(){return Pd}var Qd=A$2({},ud,{key:function(o){if(o.key){var i=Md[o.key]||o.key;if(i!=="Unidentified")return i}return o.type==="keypress"?(o=od(o),o===13?"Enter":String.fromCharCode(o)):o.type==="keydown"||o.type==="keyup"?Nd[o.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(o){return o.type==="keypress"?od(o):0},keyCode:function(o){return o.type==="keydown"||o.type==="keyup"?o.keyCode:0},which:function(o){return o.type==="keypress"?od(o):o.type==="keydown"||o.type==="keyup"?o.keyCode:0}}),Rd=rd(Qd),Sd=A$2({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A$2({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A$2({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A$2({},Ad,{deltaX:function(o){return"deltaX"in o?o.deltaX:"wheelDeltaX"in o?-o.wheelDeltaX:0},deltaY:function(o){return"deltaY"in o?o.deltaY:"wheelDeltaY"in o?-o.wheelDeltaY:"wheelDelta"in o?-o.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae$1=ia&&"CompositionEvent"in window,be$1=null;ia&&"documentMode"in document&&(be$1=document.documentMode);var ce$1=ia&&"TextEvent"in window&&!be$1,de$1=ia&&(!ae$1||be$1&&8<be$1&&11>=be$1),ee$1=String.fromCharCode(32),fe$1=!1;function ge$1(o,i){switch(o){case"keyup":return $d.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function he$1(o){return o=o.detail,typeof o=="object"&&"data"in o?o.data:null}var ie$1=!1;function je$1(o,i){switch(o){case"compositionend":return he$1(i);case"keypress":return i.which!==32?null:(fe$1=!0,ee$1);case"textInput":return o=i.data,o===ee$1&&fe$1?null:o;default:return null}}function ke$1(o,i){if(ie$1)return o==="compositionend"||!ae$1&&ge$1(o,i)?(o=nd(),md=ld=kd=null,ie$1=!1,o):null;switch(o){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return de$1&&i.locale!=="ko"?null:i.data;default:return null}}var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me$1(o){var i=o&&o.nodeName&&o.nodeName.toLowerCase();return i==="input"?!!le[o.type]:i==="textarea"}function ne$1(o,i,a,s){Eb(s),i=oe$1(i,"onChange"),0<i.length&&(a=new td("onChange","change",null,a,s),o.push({event:a,listeners:i}))}var pe$1=null,qe$1=null;function re$1(o){se$1(o,0)}function te$1(o){var i=ue$1(o);if(Wa(i))return o}function ve$1(o,i){if(o==="change")return i}var we$1=!1;if(ia){var xe$1;if(ia){var ye="oninput"in document;if(!ye){var ze$1=document.createElement("div");ze$1.setAttribute("oninput","return;"),ye=typeof ze$1.oninput=="function"}xe$1=ye}else xe$1=!1;we$1=xe$1&&(!document.documentMode||9<document.documentMode)}function Ae$1(){pe$1&&(pe$1.detachEvent("onpropertychange",Be$1),qe$1=pe$1=null)}function Be$1(o){if(o.propertyName==="value"&&te$1(qe$1)){var i=[];ne$1(i,qe$1,o,xb(o)),Jb(re$1,i)}}function Ce$1(o,i,a){o==="focusin"?(Ae$1(),pe$1=i,qe$1=a,pe$1.attachEvent("onpropertychange",Be$1)):o==="focusout"&&Ae$1()}function De$1(o){if(o==="selectionchange"||o==="keyup"||o==="keydown")return te$1(qe$1)}function Ee$1(o,i){if(o==="click")return te$1(i)}function Fe$1(o,i){if(o==="input"||o==="change")return te$1(i)}function Ge$1(o,i){return o===i&&(o!==0||1/o===1/i)||o!==o&&i!==i}var He$1=typeof Object.is=="function"?Object.is:Ge$1;function Ie(o,i){if(He$1(o,i))return!0;if(typeof o!="object"||o===null||typeof i!="object"||i===null)return!1;var a=Object.keys(o),s=Object.keys(i);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var et=a[s];if(!ja.call(i,et)||!He$1(o[et],i[et]))return!1}return!0}function Je(o){for(;o&&o.firstChild;)o=o.firstChild;return o}function Ke(o,i){var a=Je(o);o=0;for(var s;a;){if(a.nodeType===3){if(s=o+a.textContent.length,o<=i&&s>=i)return{node:a,offset:i-o};o=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Je(a)}}function Le(o,i){return o&&i?o===i?!0:o&&o.nodeType===3?!1:i&&i.nodeType===3?Le(o,i.parentNode):"contains"in o?o.contains(i):o.compareDocumentPosition?!!(o.compareDocumentPosition(i)&16):!1:!1}function Me$1(){for(var o=window,i=Xa();i instanceof o.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)o=i.contentWindow;else break;i=Xa(o.document)}return i}function Ne$1(o){var i=o&&o.nodeName&&o.nodeName.toLowerCase();return i&&(i==="input"&&(o.type==="text"||o.type==="search"||o.type==="tel"||o.type==="url"||o.type==="password")||i==="textarea"||o.contentEditable==="true")}function Oe(o){var i=Me$1(),a=o.focusedElem,s=o.selectionRange;if(i!==a&&a&&a.ownerDocument&&Le(a.ownerDocument.documentElement,a)){if(s!==null&&Ne$1(a)){if(i=s.start,o=s.end,o===void 0&&(o=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(o,a.value.length);else if(o=(i=a.ownerDocument||document)&&i.defaultView||window,o.getSelection){o=o.getSelection();var et=a.textContent.length,tt=Math.min(s.start,et);s=s.end===void 0?tt:Math.min(s.end,et),!o.extend&&tt>s&&(et=s,s=tt,tt=et),et=Ke(a,tt);var nt=Ke(a,s);et&&nt&&(o.rangeCount!==1||o.anchorNode!==et.node||o.anchorOffset!==et.offset||o.focusNode!==nt.node||o.focusOffset!==nt.offset)&&(i=i.createRange(),i.setStart(et.node,et.offset),o.removeAllRanges(),tt>s?(o.addRange(i),o.extend(nt.node,nt.offset)):(i.setEnd(nt.node,nt.offset),o.addRange(i)))}}for(i=[],o=a;o=o.parentNode;)o.nodeType===1&&i.push({element:o,left:o.scrollLeft,top:o.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)o=i[a],o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re$1=null,Se$1=null,Te$1=!1;function Ue(o,i,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Te$1||Qe==null||Qe!==Xa(s)||(s=Qe,"selectionStart"in s&&Ne$1(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Se$1&&Ie(Se$1,s)||(Se$1=s,s=oe$1(Re$1,"onSelect"),0<s.length&&(i=new td("onSelect","select",null,i,a),o.push({event:i,listeners:s}),i.target=Qe)))}function Ve$1(o,i){var a={};return a[o.toLowerCase()]=i.toLowerCase(),a["Webkit"+o]="webkit"+i,a["Moz"+o]="moz"+i,a}var We$1={animationend:Ve$1("Animation","AnimationEnd"),animationiteration:Ve$1("Animation","AnimationIteration"),animationstart:Ve$1("Animation","AnimationStart"),transitionend:Ve$1("Transition","TransitionEnd")},Xe={},Ye$1={};ia&&(Ye$1=document.createElement("div").style,"AnimationEvent"in window||(delete We$1.animationend.animation,delete We$1.animationiteration.animation,delete We$1.animationstart.animation),"TransitionEvent"in window||delete We$1.transitionend.transition);function Ze(o){if(Xe[o])return Xe[o];if(!We$1[o])return o;var i=We$1[o],a;for(a in i)if(i.hasOwnProperty(a)&&a in Ye$1)return Xe[o]=i[a];return o}var $e$1=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ff(o,i){df.set(o,i),fa(i,[o])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e$1,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));function nf(o,i,a){var s=o.type||"unknown-event";o.currentTarget=a,Ub(s,i,void 0,o),o.currentTarget=null}function se$1(o,i){i=(i&4)!==0;for(var a=0;a<o.length;a++){var s=o[a],et=s.event;s=s.listeners;e:{var tt=void 0;if(i)for(var nt=s.length-1;0<=nt;nt--){var rt=s[nt],ot=rt.instance,it=rt.currentTarget;if(rt=rt.listener,ot!==tt&&et.isPropagationStopped())break e;nf(et,rt,it),tt=ot}else for(nt=0;nt<s.length;nt++){if(rt=s[nt],ot=rt.instance,it=rt.currentTarget,rt=rt.listener,ot!==tt&&et.isPropagationStopped())break e;nf(et,rt,it),tt=ot}}}if(Qb)throw o=Rb,Qb=!1,Rb=null,o}function D(o,i){var a=i[of];a===void 0&&(a=i[of]=new Set);var s=o+"__bubble";a.has(s)||(pf(i,o,2,!1),a.add(s))}function qf(o,i,a){var s=0;i&&(s|=4),pf(a,o,s,i)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(o){if(!o[rf]){o[rf]=!0,da.forEach(function(a){a!=="selectionchange"&&(mf.has(a)||qf(a,!1,o),qf(a,!0,o))});var i=o.nodeType===9?o:o.ownerDocument;i===null||i[rf]||(i[rf]=!0,qf("selectionchange",!1,i))}}function pf(o,i,a,s){switch(jd(i)){case 1:var et=ed;break;case 4:et=gd;break;default:et=fd}a=et.bind(null,i,a,o),et=void 0,!Lb||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(et=!0),s?et!==void 0?o.addEventListener(i,a,{capture:!0,passive:et}):o.addEventListener(i,a,!0):et!==void 0?o.addEventListener(i,a,{passive:et}):o.addEventListener(i,a,!1)}function hd(o,i,a,s,et){var tt=s;if(!(i&1)&&!(i&2)&&s!==null)e:for(;;){if(s===null)return;var nt=s.tag;if(nt===3||nt===4){var rt=s.stateNode.containerInfo;if(rt===et||rt.nodeType===8&&rt.parentNode===et)break;if(nt===4)for(nt=s.return;nt!==null;){var ot=nt.tag;if((ot===3||ot===4)&&(ot=nt.stateNode.containerInfo,ot===et||ot.nodeType===8&&ot.parentNode===et))return;nt=nt.return}for(;rt!==null;){if(nt=Wc(rt),nt===null)return;if(ot=nt.tag,ot===5||ot===6){s=tt=nt;continue e}rt=rt.parentNode}}s=s.return}Jb(function(){var it=tt,lt=xb(a),st=[];e:{var dt=df.get(o);if(dt!==void 0){var ht=td,pt=o;switch(o){case"keypress":if(od(a)===0)break e;case"keydown":case"keyup":ht=Rd;break;case"focusin":pt="focus",ht=Fd;break;case"focusout":pt="blur",ht=Fd;break;case"beforeblur":case"afterblur":ht=Fd;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ht=Bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ht=Dd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ht=Vd;break;case $e$1:case af:case bf:ht=Hd;break;case cf:ht=Xd;break;case"scroll":ht=vd;break;case"wheel":ht=Zd;break;case"copy":case"cut":case"paste":ht=Jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ht=Td}var mt=(i&4)!==0,yt=!mt&&o==="scroll",ct=mt?dt!==null?dt+"Capture":null:dt;mt=[];for(var at=it,ut;at!==null;){ut=at;var gt=ut.stateNode;if(ut.tag===5&&gt!==null&&(ut=gt,ct!==null&&(gt=Kb(at,ct),gt!=null&&mt.push(tf(at,gt,ut)))),yt)break;at=at.return}0<mt.length&&(dt=new ht(dt,pt,null,a,lt),st.push({event:dt,listeners:mt}))}}if(!(i&7)){e:{if(dt=o==="mouseover"||o==="pointerover",ht=o==="mouseout"||o==="pointerout",dt&&a!==wb&&(pt=a.relatedTarget||a.fromElement)&&(Wc(pt)||pt[uf]))break e;if((ht||dt)&&(dt=lt.window===lt?lt:(dt=lt.ownerDocument)?dt.defaultView||dt.parentWindow:window,ht?(pt=a.relatedTarget||a.toElement,ht=it,pt=pt?Wc(pt):null,pt!==null&&(yt=Vb(pt),pt!==yt||pt.tag!==5&&pt.tag!==6)&&(pt=null)):(ht=null,pt=it),ht!==pt)){if(mt=Bd,gt="onMouseLeave",ct="onMouseEnter",at="mouse",(o==="pointerout"||o==="pointerover")&&(mt=Td,gt="onPointerLeave",ct="onPointerEnter",at="pointer"),yt=ht==null?dt:ue$1(ht),ut=pt==null?dt:ue$1(pt),dt=new mt(gt,at+"leave",ht,a,lt),dt.target=yt,dt.relatedTarget=ut,gt=null,Wc(lt)===it&&(mt=new mt(ct,at+"enter",pt,a,lt),mt.target=ut,mt.relatedTarget=yt,gt=mt),yt=gt,ht&&pt)t:{for(mt=ht,ct=pt,at=0,ut=mt;ut;ut=vf(ut))at++;for(ut=0,gt=ct;gt;gt=vf(gt))ut++;for(;0<at-ut;)mt=vf(mt),at--;for(;0<ut-at;)ct=vf(ct),ut--;for(;at--;){if(mt===ct||ct!==null&&mt===ct.alternate)break t;mt=vf(mt),ct=vf(ct)}mt=null}else mt=null;ht!==null&&wf(st,dt,ht,mt,!1),pt!==null&&yt!==null&&wf(st,yt,pt,mt,!0)}}e:{if(dt=it?ue$1(it):window,ht=dt.nodeName&&dt.nodeName.toLowerCase(),ht==="select"||ht==="input"&&dt.type==="file")var vt=ve$1;else if(me$1(dt))if(we$1)vt=Fe$1;else{vt=De$1;var wt=Ce$1}else(ht=dt.nodeName)&&ht.toLowerCase()==="input"&&(dt.type==="checkbox"||dt.type==="radio")&&(vt=Ee$1);if(vt&&(vt=vt(o,it))){ne$1(st,vt,a,lt);break e}wt&&wt(o,dt,it),o==="focusout"&&(wt=dt._wrapperState)&&wt.controlled&&dt.type==="number"&&cb(dt,"number",dt.value)}switch(wt=it?ue$1(it):window,o){case"focusin":(me$1(wt)||wt.contentEditable==="true")&&(Qe=wt,Re$1=it,Se$1=null);break;case"focusout":Se$1=Re$1=Qe=null;break;case"mousedown":Te$1=!0;break;case"contextmenu":case"mouseup":case"dragend":Te$1=!1,Ue(st,a,lt);break;case"selectionchange":if(Pe)break;case"keydown":case"keyup":Ue(st,a,lt)}var kt;if(ae$1)e:{switch(o){case"compositionstart":var It="onCompositionStart";break e;case"compositionend":It="onCompositionEnd";break e;case"compositionupdate":It="onCompositionUpdate";break e}It=void 0}else ie$1?ge$1(o,a)&&(It="onCompositionEnd"):o==="keydown"&&a.keyCode===229&&(It="onCompositionStart");It&&(de$1&&a.locale!=="ko"&&(ie$1||It!=="onCompositionStart"?It==="onCompositionEnd"&&ie$1&&(kt=nd()):(kd=lt,ld="value"in kd?kd.value:kd.textContent,ie$1=!0)),wt=oe$1(it,It),0<wt.length&&(It=new Ld(It,o,null,a,lt),st.push({event:It,listeners:wt}),kt?It.data=kt:(kt=he$1(a),kt!==null&&(It.data=kt)))),(kt=ce$1?je$1(o,a):ke$1(o,a))&&(it=oe$1(it,"onBeforeInput"),0<it.length&&(lt=new Ld("onBeforeInput","beforeinput",null,a,lt),st.push({event:lt,listeners:it}),lt.data=kt))}se$1(st,i)})}function tf(o,i,a){return{instance:o,listener:i,currentTarget:a}}function oe$1(o,i){for(var a=i+"Capture",s=[];o!==null;){var et=o,tt=et.stateNode;et.tag===5&&tt!==null&&(et=tt,tt=Kb(o,a),tt!=null&&s.unshift(tf(o,tt,et)),tt=Kb(o,i),tt!=null&&s.push(tf(o,tt,et))),o=o.return}return s}function vf(o){if(o===null)return null;do o=o.return;while(o&&o.tag!==5);return o||null}function wf(o,i,a,s,et){for(var tt=i._reactName,nt=[];a!==null&&a!==s;){var rt=a,ot=rt.alternate,it=rt.stateNode;if(ot!==null&&ot===s)break;rt.tag===5&&it!==null&&(rt=it,et?(ot=Kb(a,tt),ot!=null&&nt.unshift(tf(a,ot,rt))):et||(ot=Kb(a,tt),ot!=null&&nt.push(tf(a,ot,rt)))),a=a.return}nt.length!==0&&o.push({event:i,listeners:nt})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(o){return(typeof o=="string"?o:""+o).replace(xf,`
`).replace(yf,"")}function Af(o,i,a){if(i=zf(i),zf(o)!==i&&a)throw Error(p$2(425))}function Bf(){}var Cf=null,Df=null;function Ef(o,i){return o==="textarea"||o==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ff=typeof setTimeout=="function"?setTimeout:void 0,Gf=typeof clearTimeout=="function"?clearTimeout:void 0,Hf=typeof Promise=="function"?Promise:void 0,Jf=typeof queueMicrotask=="function"?queueMicrotask:typeof Hf<"u"?function(o){return Hf.resolve(null).then(o).catch(If)}:Ff;function If(o){setTimeout(function(){throw o})}function Kf(o,i){var a=i,s=0;do{var et=a.nextSibling;if(o.removeChild(a),et&&et.nodeType===8)if(a=et.data,a==="/$"){if(s===0){o.removeChild(et),bd(i);return}s--}else a!=="$"&&a!=="$?"&&a!=="$!"||s++;a=et}while(a);bd(i)}function Lf(o){for(;o!=null;o=o.nextSibling){var i=o.nodeType;if(i===1||i===3)break;if(i===8){if(i=o.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return o}function Mf(o){o=o.previousSibling;for(var i=0;o;){if(o.nodeType===8){var a=o.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return o;i--}else a==="/$"&&i++}o=o.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;function Wc(o){var i=o[Of];if(i)return i;for(var a=o.parentNode;a;){if(i=a[uf]||a[Of]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(o=Mf(o);o!==null;){if(a=o[Of])return a;o=Mf(o)}return i}o=a,a=o.parentNode}return null}function Cb(o){return o=o[Of]||o[uf],!o||o.tag!==5&&o.tag!==6&&o.tag!==13&&o.tag!==3?null:o}function ue$1(o){if(o.tag===5||o.tag===6)return o.stateNode;throw Error(p$2(33))}function Db(o){return o[Pf]||null}var Sf=[],Tf=-1;function Uf(o){return{current:o}}function E$1(o){0>Tf||(o.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G$1(o,i){Tf++,Sf[Tf]=o.current,o.current=i}var Vf={},H$1=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(o,i){var a=o.type.contextTypes;if(!a)return Vf;var s=o.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===i)return s.__reactInternalMemoizedMaskedChildContext;var et={},tt;for(tt in a)et[tt]=i[tt];return s&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=i,o.__reactInternalMemoizedMaskedChildContext=et),et}function Zf(o){return o=o.childContextTypes,o!=null}function $f(){E$1(Wf),E$1(H$1)}function ag(o,i,a){if(H$1.current!==Vf)throw Error(p$2(168));G$1(H$1,i),G$1(Wf,a)}function bg(o,i,a){var s=o.stateNode;if(i=i.childContextTypes,typeof s.getChildContext!="function")return a;s=s.getChildContext();for(var et in s)if(!(et in i))throw Error(p$2(108,Ra(o)||"Unknown",et));return A$2({},a,s)}function cg(o){return o=(o=o.stateNode)&&o.__reactInternalMemoizedMergedChildContext||Vf,Xf=H$1.current,G$1(H$1,o),G$1(Wf,Wf.current),!0}function dg(o,i,a){var s=o.stateNode;if(!s)throw Error(p$2(169));a?(o=bg(o,i,Xf),s.__reactInternalMemoizedMergedChildContext=o,E$1(Wf),E$1(H$1),G$1(H$1,o)):E$1(Wf),G$1(Wf,a)}var eg=null,fg=!1,gg=!1;function hg(o){eg===null?eg=[o]:eg.push(o)}function ig(o){fg=!0,hg(o)}function jg(){if(!gg&&eg!==null){gg=!0;var o=0,i=C;try{var a=eg;for(C=1;o<a.length;o++){var s=a[o];do s=s(!0);while(s!==null)}eg=null,fg=!1}catch(et){throw eg!==null&&(eg=eg.slice(o+1)),ac(fc,jg),et}finally{C=i,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(o,i){kg[lg++]=ng,kg[lg++]=mg,mg=o,ng=i}function ug(o,i,a){og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,qg=o;var s=rg;o=sg;var et=32-oc(s)-1;s&=~(1<<et),a+=1;var tt=32-oc(i)+et;if(30<tt){var nt=et-et%5;tt=(s&(1<<nt)-1).toString(32),s>>=nt,et-=nt,rg=1<<32-oc(i)+et|a<<et|s,sg=tt+o}else rg=1<<tt|a<<et|s,sg=o}function vg(o){o.return!==null&&(tg(o,1),ug(o,1,0))}function wg(o){for(;o===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;o===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I$1=!1,zg=null;function Ag(o,i){var a=Bg(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=o,i=o.deletions,i===null?(o.deletions=[a],o.flags|=16):i.push(a)}function Cg(o,i){switch(o.tag){case 5:var a=o.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(o.stateNode=i,xg=o,yg=Lf(i.firstChild),!0):!1;case 6:return i=o.pendingProps===""||i.nodeType!==3?null:i,i!==null?(o.stateNode=i,xg=o,yg=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=qg!==null?{id:rg,overflow:sg}:null,o.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Bg(18,null,null,0),a.stateNode=i,a.return=o,o.child=a,xg=o,yg=null,!0):!1;default:return!1}}function Dg(o){return(o.mode&1)!==0&&(o.flags&128)===0}function Eg(o){if(I$1){var i=yg;if(i){var a=i;if(!Cg(o,i)){if(Dg(o))throw Error(p$2(418));i=Lf(a.nextSibling);var s=xg;i&&Cg(o,i)?Ag(s,a):(o.flags=o.flags&-4097|2,I$1=!1,xg=o)}}else{if(Dg(o))throw Error(p$2(418));o.flags=o.flags&-4097|2,I$1=!1,xg=o}}}function Fg(o){for(o=o.return;o!==null&&o.tag!==5&&o.tag!==3&&o.tag!==13;)o=o.return;xg=o}function Gg(o){if(o!==xg)return!1;if(!I$1)return Fg(o),I$1=!0,!1;var i;if((i=o.tag!==3)&&!(i=o.tag!==5)&&(i=o.type,i=i!=="head"&&i!=="body"&&!Ef(o.type,o.memoizedProps)),i&&(i=yg)){if(Dg(o))throw Hg(),Error(p$2(418));for(;i;)Ag(o,i),i=Lf(i.nextSibling)}if(Fg(o),o.tag===13){if(o=o.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(p$2(317));e:{for(o=o.nextSibling,i=0;o;){if(o.nodeType===8){var a=o.data;if(a==="/$"){if(i===0){yg=Lf(o.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}o=o.nextSibling}yg=null}}else yg=xg?Lf(o.stateNode.nextSibling):null;return!0}function Hg(){for(var o=yg;o;)o=Lf(o.nextSibling)}function Ig(){yg=xg=null,I$1=!1}function Jg(o){zg===null?zg=[o]:zg.push(o)}var Kg=ua.ReactCurrentBatchConfig;function Lg(o,i){if(o&&o.defaultProps){i=A$2({},i),o=o.defaultProps;for(var a in o)i[a]===void 0&&(i[a]=o[a]);return i}return i}var Mg=Uf(null),Ng=null,Og=null,Pg=null;function Qg(){Pg=Og=Ng=null}function Rg(o){var i=Mg.current;E$1(Mg),o._currentValue=i}function Sg(o,i,a){for(;o!==null;){var s=o.alternate;if((o.childLanes&i)!==i?(o.childLanes|=i,s!==null&&(s.childLanes|=i)):s!==null&&(s.childLanes&i)!==i&&(s.childLanes|=i),o===a)break;o=o.return}}function Tg(o,i){Ng=o,Pg=Og=null,o=o.dependencies,o!==null&&o.firstContext!==null&&(o.lanes&i&&(Ug=!0),o.firstContext=null)}function Vg(o){var i=o._currentValue;if(Pg!==o)if(o={context:o,memoizedValue:i,next:null},Og===null){if(Ng===null)throw Error(p$2(308));Og=o,Ng.dependencies={lanes:0,firstContext:o}}else Og=Og.next=o;return i}var Wg=null;function Xg(o){Wg===null?Wg=[o]:Wg.push(o)}function Yg(o,i,a,s){var et=i.interleaved;return et===null?(a.next=a,Xg(i)):(a.next=et.next,et.next=a),i.interleaved=a,Zg(o,s)}function Zg(o,i){o.lanes|=i;var a=o.alternate;for(a!==null&&(a.lanes|=i),a=o,o=o.return;o!==null;)o.childLanes|=i,a=o.alternate,a!==null&&(a.childLanes|=i),a=o,o=o.return;return a.tag===3?a.stateNode:null}var $g=!1;function ah(o){o.updateQueue={baseState:o.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bh(o,i){o=o.updateQueue,i.updateQueue===o&&(i.updateQueue={baseState:o.baseState,firstBaseUpdate:o.firstBaseUpdate,lastBaseUpdate:o.lastBaseUpdate,shared:o.shared,effects:o.effects})}function ch(o,i){return{eventTime:o,lane:i,tag:0,payload:null,callback:null,next:null}}function dh(o,i,a){var s=o.updateQueue;if(s===null)return null;if(s=s.shared,K$1&2){var et=s.pending;return et===null?i.next=i:(i.next=et.next,et.next=i),s.pending=i,Zg(o,a)}return et=s.interleaved,et===null?(i.next=i,Xg(s)):(i.next=et.next,et.next=i),s.interleaved=i,Zg(o,a)}function eh(o,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var s=i.lanes;s&=o.pendingLanes,a|=s,i.lanes=a,Cc(o,a)}}function fh(o,i){var a=o.updateQueue,s=o.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var et=null,tt=null;if(a=a.firstBaseUpdate,a!==null){do{var nt={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};tt===null?et=tt=nt:tt=tt.next=nt,a=a.next}while(a!==null);tt===null?et=tt=i:tt=tt.next=i}else et=tt=i;a={baseState:s.baseState,firstBaseUpdate:et,lastBaseUpdate:tt,shared:s.shared,effects:s.effects},o.updateQueue=a;return}o=a.lastBaseUpdate,o===null?a.firstBaseUpdate=i:o.next=i,a.lastBaseUpdate=i}function gh(o,i,a,s){var et=o.updateQueue;$g=!1;var tt=et.firstBaseUpdate,nt=et.lastBaseUpdate,rt=et.shared.pending;if(rt!==null){et.shared.pending=null;var ot=rt,it=ot.next;ot.next=null,nt===null?tt=it:nt.next=it,nt=ot;var lt=o.alternate;lt!==null&&(lt=lt.updateQueue,rt=lt.lastBaseUpdate,rt!==nt&&(rt===null?lt.firstBaseUpdate=it:rt.next=it,lt.lastBaseUpdate=ot))}if(tt!==null){var st=et.baseState;nt=0,lt=it=ot=null,rt=tt;do{var dt=rt.lane,ht=rt.eventTime;if((s&dt)===dt){lt!==null&&(lt=lt.next={eventTime:ht,lane:0,tag:rt.tag,payload:rt.payload,callback:rt.callback,next:null});e:{var pt=o,mt=rt;switch(dt=i,ht=a,mt.tag){case 1:if(pt=mt.payload,typeof pt=="function"){st=pt.call(ht,st,dt);break e}st=pt;break e;case 3:pt.flags=pt.flags&-65537|128;case 0:if(pt=mt.payload,dt=typeof pt=="function"?pt.call(ht,st,dt):pt,dt==null)break e;st=A$2({},st,dt);break e;case 2:$g=!0}}rt.callback!==null&&rt.lane!==0&&(o.flags|=64,dt=et.effects,dt===null?et.effects=[rt]:dt.push(rt))}else ht={eventTime:ht,lane:dt,tag:rt.tag,payload:rt.payload,callback:rt.callback,next:null},lt===null?(it=lt=ht,ot=st):lt=lt.next=ht,nt|=dt;if(rt=rt.next,rt===null){if(rt=et.shared.pending,rt===null)break;dt=rt,rt=dt.next,dt.next=null,et.lastBaseUpdate=dt,et.shared.pending=null}}while(1);if(lt===null&&(ot=st),et.baseState=ot,et.firstBaseUpdate=it,et.lastBaseUpdate=lt,i=et.shared.interleaved,i!==null){et=i;do nt|=et.lane,et=et.next;while(et!==i)}else tt===null&&(et.shared.lanes=0);hh|=nt,o.lanes=nt,o.memoizedState=st}}function ih(o,i,a){if(o=i.effects,i.effects=null,o!==null)for(i=0;i<o.length;i++){var s=o[i],et=s.callback;if(et!==null){if(s.callback=null,s=a,typeof et!="function")throw Error(p$2(191,et));et.call(s)}}}var jh=new aa.Component().refs;function kh(o,i,a,s){i=o.memoizedState,a=a(s,i),a=a==null?i:A$2({},i,a),o.memoizedState=a,o.lanes===0&&(o.updateQueue.baseState=a)}var nh={isMounted:function(o){return(o=o._reactInternals)?Vb(o)===o:!1},enqueueSetState:function(o,i,a){o=o._reactInternals;var s=L$1(),et=lh(o),tt=ch(s,et);tt.payload=i,a!=null&&(tt.callback=a),i=dh(o,tt,et),i!==null&&(mh(i,o,et,s),eh(i,o,et))},enqueueReplaceState:function(o,i,a){o=o._reactInternals;var s=L$1(),et=lh(o),tt=ch(s,et);tt.tag=1,tt.payload=i,a!=null&&(tt.callback=a),i=dh(o,tt,et),i!==null&&(mh(i,o,et,s),eh(i,o,et))},enqueueForceUpdate:function(o,i){o=o._reactInternals;var a=L$1(),s=lh(o),et=ch(a,s);et.tag=2,i!=null&&(et.callback=i),i=dh(o,et,s),i!==null&&(mh(i,o,s,a),eh(i,o,s))}};function oh(o,i,a,s,et,tt,nt){return o=o.stateNode,typeof o.shouldComponentUpdate=="function"?o.shouldComponentUpdate(s,tt,nt):i.prototype&&i.prototype.isPureReactComponent?!Ie(a,s)||!Ie(et,tt):!0}function ph(o,i,a){var s=!1,et=Vf,tt=i.contextType;return typeof tt=="object"&&tt!==null?tt=Vg(tt):(et=Zf(i)?Xf:H$1.current,s=i.contextTypes,tt=(s=s!=null)?Yf(o,et):Vf),i=new i(a,tt),o.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=nh,o.stateNode=i,i._reactInternals=o,s&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=et,o.__reactInternalMemoizedMaskedChildContext=tt),i}function qh(o,i,a,s){o=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,s),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,s),i.state!==o&&nh.enqueueReplaceState(i,i.state,null)}function rh(o,i,a,s){var et=o.stateNode;et.props=a,et.state=o.memoizedState,et.refs=jh,ah(o);var tt=i.contextType;typeof tt=="object"&&tt!==null?et.context=Vg(tt):(tt=Zf(i)?Xf:H$1.current,et.context=Yf(o,tt)),et.state=o.memoizedState,tt=i.getDerivedStateFromProps,typeof tt=="function"&&(kh(o,i,tt,a),et.state=o.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof et.getSnapshotBeforeUpdate=="function"||typeof et.UNSAFE_componentWillMount!="function"&&typeof et.componentWillMount!="function"||(i=et.state,typeof et.componentWillMount=="function"&&et.componentWillMount(),typeof et.UNSAFE_componentWillMount=="function"&&et.UNSAFE_componentWillMount(),i!==et.state&&nh.enqueueReplaceState(et,et.state,null),gh(o,a,et,s),et.state=o.memoizedState),typeof et.componentDidMount=="function"&&(o.flags|=4194308)}function sh(o,i,a){if(o=a.ref,o!==null&&typeof o!="function"&&typeof o!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(p$2(309));var s=a.stateNode}if(!s)throw Error(p$2(147,o));var et=s,tt=""+o;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===tt?i.ref:(i=function(nt){var rt=et.refs;rt===jh&&(rt=et.refs={}),nt===null?delete rt[tt]:rt[tt]=nt},i._stringRef=tt,i)}if(typeof o!="string")throw Error(p$2(284));if(!a._owner)throw Error(p$2(290,o))}return o}function th(o,i){throw o=Object.prototype.toString.call(i),Error(p$2(31,o==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":o))}function uh(o){var i=o._init;return i(o._payload)}function vh(o){function i(ct,at){if(o){var ut=ct.deletions;ut===null?(ct.deletions=[at],ct.flags|=16):ut.push(at)}}function a(ct,at){if(!o)return null;for(;at!==null;)i(ct,at),at=at.sibling;return null}function s(ct,at){for(ct=new Map;at!==null;)at.key!==null?ct.set(at.key,at):ct.set(at.index,at),at=at.sibling;return ct}function et(ct,at){return ct=wh(ct,at),ct.index=0,ct.sibling=null,ct}function tt(ct,at,ut){return ct.index=ut,o?(ut=ct.alternate,ut!==null?(ut=ut.index,ut<at?(ct.flags|=2,at):ut):(ct.flags|=2,at)):(ct.flags|=1048576,at)}function nt(ct){return o&&ct.alternate===null&&(ct.flags|=2),ct}function rt(ct,at,ut,gt){return at===null||at.tag!==6?(at=xh(ut,ct.mode,gt),at.return=ct,at):(at=et(at,ut),at.return=ct,at)}function ot(ct,at,ut,gt){var vt=ut.type;return vt===ya?lt(ct,at,ut.props.children,gt,ut.key):at!==null&&(at.elementType===vt||typeof vt=="object"&&vt!==null&&vt.$$typeof===Ha&&uh(vt)===at.type)?(gt=et(at,ut.props),gt.ref=sh(ct,at,ut),gt.return=ct,gt):(gt=yh(ut.type,ut.key,ut.props,null,ct.mode,gt),gt.ref=sh(ct,at,ut),gt.return=ct,gt)}function it(ct,at,ut,gt){return at===null||at.tag!==4||at.stateNode.containerInfo!==ut.containerInfo||at.stateNode.implementation!==ut.implementation?(at=zh(ut,ct.mode,gt),at.return=ct,at):(at=et(at,ut.children||[]),at.return=ct,at)}function lt(ct,at,ut,gt,vt){return at===null||at.tag!==7?(at=Ah(ut,ct.mode,gt,vt),at.return=ct,at):(at=et(at,ut),at.return=ct,at)}function st(ct,at,ut){if(typeof at=="string"&&at!==""||typeof at=="number")return at=xh(""+at,ct.mode,ut),at.return=ct,at;if(typeof at=="object"&&at!==null){switch(at.$$typeof){case va:return ut=yh(at.type,at.key,at.props,null,ct.mode,ut),ut.ref=sh(ct,null,at),ut.return=ct,ut;case wa:return at=zh(at,ct.mode,ut),at.return=ct,at;case Ha:var gt=at._init;return st(ct,gt(at._payload),ut)}if(eb(at)||Ka(at))return at=Ah(at,ct.mode,ut,null),at.return=ct,at;th(ct,at)}return null}function dt(ct,at,ut,gt){var vt=at!==null?at.key:null;if(typeof ut=="string"&&ut!==""||typeof ut=="number")return vt!==null?null:rt(ct,at,""+ut,gt);if(typeof ut=="object"&&ut!==null){switch(ut.$$typeof){case va:return ut.key===vt?ot(ct,at,ut,gt):null;case wa:return ut.key===vt?it(ct,at,ut,gt):null;case Ha:return vt=ut._init,dt(ct,at,vt(ut._payload),gt)}if(eb(ut)||Ka(ut))return vt!==null?null:lt(ct,at,ut,gt,null);th(ct,ut)}return null}function ht(ct,at,ut,gt,vt){if(typeof gt=="string"&&gt!==""||typeof gt=="number")return ct=ct.get(ut)||null,rt(at,ct,""+gt,vt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case va:return ct=ct.get(gt.key===null?ut:gt.key)||null,ot(at,ct,gt,vt);case wa:return ct=ct.get(gt.key===null?ut:gt.key)||null,it(at,ct,gt,vt);case Ha:var wt=gt._init;return ht(ct,at,ut,wt(gt._payload),vt)}if(eb(gt)||Ka(gt))return ct=ct.get(ut)||null,lt(at,ct,gt,vt,null);th(at,gt)}return null}function pt(ct,at,ut,gt){for(var vt=null,wt=null,kt=at,It=at=0,Mt=null;kt!==null&&It<ut.length;It++){kt.index>It?(Mt=kt,kt=null):Mt=kt.sibling;var Dt=dt(ct,kt,ut[It],gt);if(Dt===null){kt===null&&(kt=Mt);break}o&&kt&&Dt.alternate===null&&i(ct,kt),at=tt(Dt,at,It),wt===null?vt=Dt:wt.sibling=Dt,wt=Dt,kt=Mt}if(It===ut.length)return a(ct,kt),I$1&&tg(ct,It),vt;if(kt===null){for(;It<ut.length;It++)kt=st(ct,ut[It],gt),kt!==null&&(at=tt(kt,at,It),wt===null?vt=kt:wt.sibling=kt,wt=kt);return I$1&&tg(ct,It),vt}for(kt=s(ct,kt);It<ut.length;It++)Mt=ht(kt,ct,It,ut[It],gt),Mt!==null&&(o&&Mt.alternate!==null&&kt.delete(Mt.key===null?It:Mt.key),at=tt(Mt,at,It),wt===null?vt=Mt:wt.sibling=Mt,wt=Mt);return o&&kt.forEach(function(Wt){return i(ct,Wt)}),I$1&&tg(ct,It),vt}function mt(ct,at,ut,gt){var vt=Ka(ut);if(typeof vt!="function")throw Error(p$2(150));if(ut=vt.call(ut),ut==null)throw Error(p$2(151));for(var wt=vt=null,kt=at,It=at=0,Mt=null,Dt=ut.next();kt!==null&&!Dt.done;It++,Dt=ut.next()){kt.index>It?(Mt=kt,kt=null):Mt=kt.sibling;var Wt=dt(ct,kt,Dt.value,gt);if(Wt===null){kt===null&&(kt=Mt);break}o&&kt&&Wt.alternate===null&&i(ct,kt),at=tt(Wt,at,It),wt===null?vt=Wt:wt.sibling=Wt,wt=Wt,kt=Mt}if(Dt.done)return a(ct,kt),I$1&&tg(ct,It),vt;if(kt===null){for(;!Dt.done;It++,Dt=ut.next())Dt=st(ct,Dt.value,gt),Dt!==null&&(at=tt(Dt,at,It),wt===null?vt=Dt:wt.sibling=Dt,wt=Dt);return I$1&&tg(ct,It),vt}for(kt=s(ct,kt);!Dt.done;It++,Dt=ut.next())Dt=ht(kt,ct,It,Dt.value,gt),Dt!==null&&(o&&Dt.alternate!==null&&kt.delete(Dt.key===null?It:Dt.key),at=tt(Dt,at,It),wt===null?vt=Dt:wt.sibling=Dt,wt=Dt);return o&&kt.forEach(function(Ft){return i(ct,Ft)}),I$1&&tg(ct,It),vt}function yt(ct,at,ut,gt){if(typeof ut=="object"&&ut!==null&&ut.type===ya&&ut.key===null&&(ut=ut.props.children),typeof ut=="object"&&ut!==null){switch(ut.$$typeof){case va:e:{for(var vt=ut.key,wt=at;wt!==null;){if(wt.key===vt){if(vt=ut.type,vt===ya){if(wt.tag===7){a(ct,wt.sibling),at=et(wt,ut.props.children),at.return=ct,ct=at;break e}}else if(wt.elementType===vt||typeof vt=="object"&&vt!==null&&vt.$$typeof===Ha&&uh(vt)===wt.type){a(ct,wt.sibling),at=et(wt,ut.props),at.ref=sh(ct,wt,ut),at.return=ct,ct=at;break e}a(ct,wt);break}else i(ct,wt);wt=wt.sibling}ut.type===ya?(at=Ah(ut.props.children,ct.mode,gt,ut.key),at.return=ct,ct=at):(gt=yh(ut.type,ut.key,ut.props,null,ct.mode,gt),gt.ref=sh(ct,at,ut),gt.return=ct,ct=gt)}return nt(ct);case wa:e:{for(wt=ut.key;at!==null;){if(at.key===wt)if(at.tag===4&&at.stateNode.containerInfo===ut.containerInfo&&at.stateNode.implementation===ut.implementation){a(ct,at.sibling),at=et(at,ut.children||[]),at.return=ct,ct=at;break e}else{a(ct,at);break}else i(ct,at);at=at.sibling}at=zh(ut,ct.mode,gt),at.return=ct,ct=at}return nt(ct);case Ha:return wt=ut._init,yt(ct,at,wt(ut._payload),gt)}if(eb(ut))return pt(ct,at,ut,gt);if(Ka(ut))return mt(ct,at,ut,gt);th(ct,ut)}return typeof ut=="string"&&ut!==""||typeof ut=="number"?(ut=""+ut,at!==null&&at.tag===6?(a(ct,at.sibling),at=et(at,ut),at.return=ct,ct=at):(a(ct,at),at=xh(ut,ct.mode,gt),at.return=ct,ct=at),nt(ct)):a(ct,at)}return yt}var Bh=vh(!0),Ch=vh(!1),Dh={},Eh=Uf(Dh),Fh=Uf(Dh),Gh=Uf(Dh);function Hh(o){if(o===Dh)throw Error(p$2(174));return o}function Ih(o,i){switch(G$1(Gh,i),G$1(Fh,o),G$1(Eh,Dh),o=i.nodeType,o){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:lb(null,"");break;default:o=o===8?i.parentNode:i,i=o.namespaceURI||null,o=o.tagName,i=lb(i,o)}E$1(Eh),G$1(Eh,i)}function Jh(){E$1(Eh),E$1(Fh),E$1(Gh)}function Kh(o){Hh(Gh.current);var i=Hh(Eh.current),a=lb(i,o.type);i!==a&&(G$1(Fh,o),G$1(Eh,a))}function Lh(o){Fh.current===o&&(E$1(Eh),E$1(Fh))}var M$1=Uf(0);function Mh(o){for(var i=o;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break;for(;i.sibling===null;){if(i.return===null||i.return===o)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Nh=[];function Oh(){for(var o=0;o<Nh.length;o++)Nh[o]._workInProgressVersionPrimary=null;Nh.length=0}var Ph=ua.ReactCurrentDispatcher,Qh=ua.ReactCurrentBatchConfig,Rh=0,N$1=null,O$1=null,P$1=null,Sh=!1,Th=!1,Uh=0,Vh=0;function Q$1(){throw Error(p$2(321))}function Wh(o,i){if(i===null)return!1;for(var a=0;a<i.length&&a<o.length;a++)if(!He$1(o[a],i[a]))return!1;return!0}function Xh(o,i,a,s,et,tt){if(Rh=tt,N$1=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ph.current=o===null||o.memoizedState===null?Yh:Zh,o=a(s,et),Th){tt=0;do{if(Th=!1,Uh=0,25<=tt)throw Error(p$2(301));tt+=1,P$1=O$1=null,i.updateQueue=null,Ph.current=$h,o=a(s,et)}while(Th)}if(Ph.current=ai,i=O$1!==null&&O$1.next!==null,Rh=0,P$1=O$1=N$1=null,Sh=!1,i)throw Error(p$2(300));return o}function bi(){var o=Uh!==0;return Uh=0,o}function ci(){var o={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return P$1===null?N$1.memoizedState=P$1=o:P$1=P$1.next=o,P$1}function di(){if(O$1===null){var o=N$1.alternate;o=o!==null?o.memoizedState:null}else o=O$1.next;var i=P$1===null?N$1.memoizedState:P$1.next;if(i!==null)P$1=i,O$1=o;else{if(o===null)throw Error(p$2(310));O$1=o,o={memoizedState:O$1.memoizedState,baseState:O$1.baseState,baseQueue:O$1.baseQueue,queue:O$1.queue,next:null},P$1===null?N$1.memoizedState=P$1=o:P$1=P$1.next=o}return P$1}function ei(o,i){return typeof i=="function"?i(o):i}function fi(o){var i=di(),a=i.queue;if(a===null)throw Error(p$2(311));a.lastRenderedReducer=o;var s=O$1,et=s.baseQueue,tt=a.pending;if(tt!==null){if(et!==null){var nt=et.next;et.next=tt.next,tt.next=nt}s.baseQueue=et=tt,a.pending=null}if(et!==null){tt=et.next,s=s.baseState;var rt=nt=null,ot=null,it=tt;do{var lt=it.lane;if((Rh&lt)===lt)ot!==null&&(ot=ot.next={lane:0,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),s=it.hasEagerState?it.eagerState:o(s,it.action);else{var st={lane:lt,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null};ot===null?(rt=ot=st,nt=s):ot=ot.next=st,N$1.lanes|=lt,hh|=lt}it=it.next}while(it!==null&&it!==tt);ot===null?nt=s:ot.next=rt,He$1(s,i.memoizedState)||(Ug=!0),i.memoizedState=s,i.baseState=nt,i.baseQueue=ot,a.lastRenderedState=s}if(o=a.interleaved,o!==null){et=o;do tt=et.lane,N$1.lanes|=tt,hh|=tt,et=et.next;while(et!==o)}else et===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function gi(o){var i=di(),a=i.queue;if(a===null)throw Error(p$2(311));a.lastRenderedReducer=o;var s=a.dispatch,et=a.pending,tt=i.memoizedState;if(et!==null){a.pending=null;var nt=et=et.next;do tt=o(tt,nt.action),nt=nt.next;while(nt!==et);He$1(tt,i.memoizedState)||(Ug=!0),i.memoizedState=tt,i.baseQueue===null&&(i.baseState=tt),a.lastRenderedState=tt}return[tt,s]}function hi(){}function ii(o,i){var a=N$1,s=di(),et=i(),tt=!He$1(s.memoizedState,et);if(tt&&(s.memoizedState=et,Ug=!0),s=s.queue,ji(ki.bind(null,a,s,o),[o]),s.getSnapshot!==i||tt||P$1!==null&&P$1.memoizedState.tag&1){if(a.flags|=2048,li(9,mi.bind(null,a,s,et,i),void 0,null),R===null)throw Error(p$2(349));Rh&30||ni(a,i,et)}return et}function ni(o,i,a){o.flags|=16384,o={getSnapshot:i,value:a},i=N$1.updateQueue,i===null?(i={lastEffect:null,stores:null},N$1.updateQueue=i,i.stores=[o]):(a=i.stores,a===null?i.stores=[o]:a.push(o))}function mi(o,i,a,s){i.value=a,i.getSnapshot=s,oi(i)&&pi(o)}function ki(o,i,a){return a(function(){oi(i)&&pi(o)})}function oi(o){var i=o.getSnapshot;o=o.value;try{var a=i();return!He$1(o,a)}catch{return!0}}function pi(o){var i=Zg(o,1);i!==null&&mh(i,o,1,-1)}function qi(o){var i=ci();return typeof o=="function"&&(o=o()),i.memoizedState=i.baseState=o,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:o},i.queue=o,o=o.dispatch=ri.bind(null,N$1,o),[i.memoizedState,o]}function li(o,i,a,s){return o={tag:o,create:i,destroy:a,deps:s,next:null},i=N$1.updateQueue,i===null?(i={lastEffect:null,stores:null},N$1.updateQueue=i,i.lastEffect=o.next=o):(a=i.lastEffect,a===null?i.lastEffect=o.next=o:(s=a.next,a.next=o,o.next=s,i.lastEffect=o)),o}function si(){return di().memoizedState}function ti(o,i,a,s){var et=ci();N$1.flags|=o,et.memoizedState=li(1|i,a,void 0,s===void 0?null:s)}function ui(o,i,a,s){var et=di();s=s===void 0?null:s;var tt=void 0;if(O$1!==null){var nt=O$1.memoizedState;if(tt=nt.destroy,s!==null&&Wh(s,nt.deps)){et.memoizedState=li(i,a,tt,s);return}}N$1.flags|=o,et.memoizedState=li(1|i,a,tt,s)}function vi(o,i){return ti(8390656,8,o,i)}function ji(o,i){return ui(2048,8,o,i)}function wi(o,i){return ui(4,2,o,i)}function xi(o,i){return ui(4,4,o,i)}function yi(o,i){if(typeof i=="function")return o=o(),i(o),function(){i(null)};if(i!=null)return o=o(),i.current=o,function(){i.current=null}}function zi(o,i,a){return a=a!=null?a.concat([o]):null,ui(4,4,yi.bind(null,i,o),a)}function Ai(){}function Bi(o,i){var a=di();i=i===void 0?null:i;var s=a.memoizedState;return s!==null&&i!==null&&Wh(i,s[1])?s[0]:(a.memoizedState=[o,i],o)}function Ci(o,i){var a=di();i=i===void 0?null:i;var s=a.memoizedState;return s!==null&&i!==null&&Wh(i,s[1])?s[0]:(o=o(),a.memoizedState=[o,i],o)}function Di(o,i,a){return Rh&21?(He$1(a,i)||(a=yc(),N$1.lanes|=a,hh|=a,o.baseState=!0),i):(o.baseState&&(o.baseState=!1,Ug=!0),o.memoizedState=a)}function Ei(o,i){var a=C;C=a!==0&&4>a?a:4,o(!0);var s=Qh.transition;Qh.transition={};try{o(!1),i()}finally{C=a,Qh.transition=s}}function Fi(){return di().memoizedState}function Gi(o,i,a){var s=lh(o);if(a={lane:s,action:a,hasEagerState:!1,eagerState:null,next:null},Hi(o))Ii(i,a);else if(a=Yg(o,i,a,s),a!==null){var et=L$1();mh(a,o,s,et),Ji(a,i,s)}}function ri(o,i,a){var s=lh(o),et={lane:s,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hi(o))Ii(i,et);else{var tt=o.alternate;if(o.lanes===0&&(tt===null||tt.lanes===0)&&(tt=i.lastRenderedReducer,tt!==null))try{var nt=i.lastRenderedState,rt=tt(nt,a);if(et.hasEagerState=!0,et.eagerState=rt,He$1(rt,nt)){var ot=i.interleaved;ot===null?(et.next=et,Xg(i)):(et.next=ot.next,ot.next=et),i.interleaved=et;return}}catch{}finally{}a=Yg(o,i,et,s),a!==null&&(et=L$1(),mh(a,o,s,et),Ji(a,i,s))}}function Hi(o){var i=o.alternate;return o===N$1||i!==null&&i===N$1}function Ii(o,i){Th=Sh=!0;var a=o.pending;a===null?i.next=i:(i.next=a.next,a.next=i),o.pending=i}function Ji(o,i,a){if(a&4194240){var s=i.lanes;s&=o.pendingLanes,a|=s,i.lanes=a,Cc(o,a)}}var ai={readContext:Vg,useCallback:Q$1,useContext:Q$1,useEffect:Q$1,useImperativeHandle:Q$1,useInsertionEffect:Q$1,useLayoutEffect:Q$1,useMemo:Q$1,useReducer:Q$1,useRef:Q$1,useState:Q$1,useDebugValue:Q$1,useDeferredValue:Q$1,useTransition:Q$1,useMutableSource:Q$1,useSyncExternalStore:Q$1,useId:Q$1,unstable_isNewReconciler:!1},Yh={readContext:Vg,useCallback:function(o,i){return ci().memoizedState=[o,i===void 0?null:i],o},useContext:Vg,useEffect:vi,useImperativeHandle:function(o,i,a){return a=a!=null?a.concat([o]):null,ti(4194308,4,yi.bind(null,i,o),a)},useLayoutEffect:function(o,i){return ti(4194308,4,o,i)},useInsertionEffect:function(o,i){return ti(4,2,o,i)},useMemo:function(o,i){var a=ci();return i=i===void 0?null:i,o=o(),a.memoizedState=[o,i],o},useReducer:function(o,i,a){var s=ci();return i=a!==void 0?a(i):i,s.memoizedState=s.baseState=i,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o,lastRenderedState:i},s.queue=o,o=o.dispatch=Gi.bind(null,N$1,o),[s.memoizedState,o]},useRef:function(o){var i=ci();return o={current:o},i.memoizedState=o},useState:qi,useDebugValue:Ai,useDeferredValue:function(o){return ci().memoizedState=o},useTransition:function(){var o=qi(!1),i=o[0];return o=Ei.bind(null,o[1]),ci().memoizedState=o,[i,o]},useMutableSource:function(){},useSyncExternalStore:function(o,i,a){var s=N$1,et=ci();if(I$1){if(a===void 0)throw Error(p$2(407));a=a()}else{if(a=i(),R===null)throw Error(p$2(349));Rh&30||ni(s,i,a)}et.memoizedState=a;var tt={value:a,getSnapshot:i};return et.queue=tt,vi(ki.bind(null,s,tt,o),[o]),s.flags|=2048,li(9,mi.bind(null,s,tt,a,i),void 0,null),a},useId:function(){var o=ci(),i=R.identifierPrefix;if(I$1){var a=sg,s=rg;a=(s&~(1<<32-oc(s)-1)).toString(32)+a,i=":"+i+"R"+a,a=Uh++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Vh++,i=":"+i+"r"+a.toString(32)+":";return o.memoizedState=i},unstable_isNewReconciler:!1},Zh={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:fi,useRef:si,useState:function(){return fi(ei)},useDebugValue:Ai,useDeferredValue:function(o){var i=di();return Di(i,O$1.memoizedState,o)},useTransition:function(){var o=fi(ei)[0],i=di().memoizedState;return[o,i]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1},$h={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:gi,useRef:si,useState:function(){return gi(ei)},useDebugValue:Ai,useDeferredValue:function(o){var i=di();return O$1===null?i.memoizedState=o:Di(i,O$1.memoizedState,o)},useTransition:function(){var o=gi(ei)[0],i=di().memoizedState;return[o,i]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1};function Ki(o,i){try{var a="",s=i;do a+=Pa(s),s=s.return;while(s);var et=a}catch(tt){et=`
Error generating stack: `+tt.message+`
`+tt.stack}return{value:o,source:i,stack:et,digest:null}}function Li(o,i,a){return{value:o,source:null,stack:a??null,digest:i??null}}function Mi(o,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Ni=typeof WeakMap=="function"?WeakMap:Map;function Oi(o,i,a){a=ch(-1,a),a.tag=3,a.payload={element:null};var s=i.value;return a.callback=function(){Pi||(Pi=!0,Qi=s),Mi(o,i)},a}function Ri(o,i,a){a=ch(-1,a),a.tag=3;var s=o.type.getDerivedStateFromError;if(typeof s=="function"){var et=i.value;a.payload=function(){return s(et)},a.callback=function(){Mi(o,i)}}var tt=o.stateNode;return tt!==null&&typeof tt.componentDidCatch=="function"&&(a.callback=function(){Mi(o,i),typeof s!="function"&&(Si===null?Si=new Set([this]):Si.add(this));var nt=i.stack;this.componentDidCatch(i.value,{componentStack:nt!==null?nt:""})}),a}function Ti(o,i,a){var s=o.pingCache;if(s===null){s=o.pingCache=new Ni;var et=new Set;s.set(i,et)}else et=s.get(i),et===void 0&&(et=new Set,s.set(i,et));et.has(a)||(et.add(a),o=Ui.bind(null,o,i,a),i.then(o,o))}function Vi(o){do{var i;if((i=o.tag===13)&&(i=o.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return o;o=o.return}while(o!==null);return null}function Wi(o,i,a,s,et){return o.mode&1?(o.flags|=65536,o.lanes=et,o):(o===i?o.flags|=65536:(o.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=ch(-1,1),i.tag=2,dh(a,i,1))),a.lanes|=1),o)}var Xi=ua.ReactCurrentOwner,Ug=!1;function Yi(o,i,a,s){i.child=o===null?Ch(i,null,a,s):Bh(i,o.child,a,s)}function Zi(o,i,a,s,et){a=a.render;var tt=i.ref;return Tg(i,et),s=Xh(o,i,a,s,tt,et),a=bi(),o!==null&&!Ug?(i.updateQueue=o.updateQueue,i.flags&=-2053,o.lanes&=~et,$i(o,i,et)):(I$1&&a&&vg(i),i.flags|=1,Yi(o,i,s,et),i.child)}function aj(o,i,a,s,et){if(o===null){var tt=a.type;return typeof tt=="function"&&!bj(tt)&&tt.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=tt,cj(o,i,tt,s,et)):(o=yh(a.type,null,s,i,i.mode,et),o.ref=i.ref,o.return=i,i.child=o)}if(tt=o.child,!(o.lanes&et)){var nt=tt.memoizedProps;if(a=a.compare,a=a!==null?a:Ie,a(nt,s)&&o.ref===i.ref)return $i(o,i,et)}return i.flags|=1,o=wh(tt,s),o.ref=i.ref,o.return=i,i.child=o}function cj(o,i,a,s,et){if(o!==null){var tt=o.memoizedProps;if(Ie(tt,s)&&o.ref===i.ref)if(Ug=!1,i.pendingProps=s=tt,(o.lanes&et)!==0)o.flags&131072&&(Ug=!0);else return i.lanes=o.lanes,$i(o,i,et)}return dj(o,i,a,s,et)}function ej(o,i,a){var s=i.pendingProps,et=s.children,tt=o!==null?o.memoizedState:null;if(s.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},G$1(fj,gj),gj|=a;else{if(!(a&1073741824))return o=tt!==null?tt.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:o,cachePool:null,transitions:null},i.updateQueue=null,G$1(fj,gj),gj|=o,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=tt!==null?tt.baseLanes:a,G$1(fj,gj),gj|=s}else tt!==null?(s=tt.baseLanes|a,i.memoizedState=null):s=a,G$1(fj,gj),gj|=s;return Yi(o,i,et,a),i.child}function hj(o,i){var a=i.ref;(o===null&&a!==null||o!==null&&o.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function dj(o,i,a,s,et){var tt=Zf(a)?Xf:H$1.current;return tt=Yf(i,tt),Tg(i,et),a=Xh(o,i,a,s,tt,et),s=bi(),o!==null&&!Ug?(i.updateQueue=o.updateQueue,i.flags&=-2053,o.lanes&=~et,$i(o,i,et)):(I$1&&s&&vg(i),i.flags|=1,Yi(o,i,a,et),i.child)}function ij(o,i,a,s,et){if(Zf(a)){var tt=!0;cg(i)}else tt=!1;if(Tg(i,et),i.stateNode===null)jj(o,i),ph(i,a,s),rh(i,a,s,et),s=!0;else if(o===null){var nt=i.stateNode,rt=i.memoizedProps;nt.props=rt;var ot=nt.context,it=a.contextType;typeof it=="object"&&it!==null?it=Vg(it):(it=Zf(a)?Xf:H$1.current,it=Yf(i,it));var lt=a.getDerivedStateFromProps,st=typeof lt=="function"||typeof nt.getSnapshotBeforeUpdate=="function";st||typeof nt.UNSAFE_componentWillReceiveProps!="function"&&typeof nt.componentWillReceiveProps!="function"||(rt!==s||ot!==it)&&qh(i,nt,s,it),$g=!1;var dt=i.memoizedState;nt.state=dt,gh(i,s,nt,et),ot=i.memoizedState,rt!==s||dt!==ot||Wf.current||$g?(typeof lt=="function"&&(kh(i,a,lt,s),ot=i.memoizedState),(rt=$g||oh(i,a,rt,s,dt,ot,it))?(st||typeof nt.UNSAFE_componentWillMount!="function"&&typeof nt.componentWillMount!="function"||(typeof nt.componentWillMount=="function"&&nt.componentWillMount(),typeof nt.UNSAFE_componentWillMount=="function"&&nt.UNSAFE_componentWillMount()),typeof nt.componentDidMount=="function"&&(i.flags|=4194308)):(typeof nt.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=s,i.memoizedState=ot),nt.props=s,nt.state=ot,nt.context=it,s=rt):(typeof nt.componentDidMount=="function"&&(i.flags|=4194308),s=!1)}else{nt=i.stateNode,bh(o,i),rt=i.memoizedProps,it=i.type===i.elementType?rt:Lg(i.type,rt),nt.props=it,st=i.pendingProps,dt=nt.context,ot=a.contextType,typeof ot=="object"&&ot!==null?ot=Vg(ot):(ot=Zf(a)?Xf:H$1.current,ot=Yf(i,ot));var ht=a.getDerivedStateFromProps;(lt=typeof ht=="function"||typeof nt.getSnapshotBeforeUpdate=="function")||typeof nt.UNSAFE_componentWillReceiveProps!="function"&&typeof nt.componentWillReceiveProps!="function"||(rt!==st||dt!==ot)&&qh(i,nt,s,ot),$g=!1,dt=i.memoizedState,nt.state=dt,gh(i,s,nt,et);var pt=i.memoizedState;rt!==st||dt!==pt||Wf.current||$g?(typeof ht=="function"&&(kh(i,a,ht,s),pt=i.memoizedState),(it=$g||oh(i,a,it,s,dt,pt,ot)||!1)?(lt||typeof nt.UNSAFE_componentWillUpdate!="function"&&typeof nt.componentWillUpdate!="function"||(typeof nt.componentWillUpdate=="function"&&nt.componentWillUpdate(s,pt,ot),typeof nt.UNSAFE_componentWillUpdate=="function"&&nt.UNSAFE_componentWillUpdate(s,pt,ot)),typeof nt.componentDidUpdate=="function"&&(i.flags|=4),typeof nt.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof nt.componentDidUpdate!="function"||rt===o.memoizedProps&&dt===o.memoizedState||(i.flags|=4),typeof nt.getSnapshotBeforeUpdate!="function"||rt===o.memoizedProps&&dt===o.memoizedState||(i.flags|=1024),i.memoizedProps=s,i.memoizedState=pt),nt.props=s,nt.state=pt,nt.context=ot,s=it):(typeof nt.componentDidUpdate!="function"||rt===o.memoizedProps&&dt===o.memoizedState||(i.flags|=4),typeof nt.getSnapshotBeforeUpdate!="function"||rt===o.memoizedProps&&dt===o.memoizedState||(i.flags|=1024),s=!1)}return kj(o,i,a,s,tt,et)}function kj(o,i,a,s,et,tt){hj(o,i);var nt=(i.flags&128)!==0;if(!s&&!nt)return et&&dg(i,a,!1),$i(o,i,tt);s=i.stateNode,Xi.current=i;var rt=nt&&typeof a.getDerivedStateFromError!="function"?null:s.render();return i.flags|=1,o!==null&&nt?(i.child=Bh(i,o.child,null,tt),i.child=Bh(i,null,rt,tt)):Yi(o,i,rt,tt),i.memoizedState=s.state,et&&dg(i,a,!0),i.child}function lj(o){var i=o.stateNode;i.pendingContext?ag(o,i.pendingContext,i.pendingContext!==i.context):i.context&&ag(o,i.context,!1),Ih(o,i.containerInfo)}function mj(o,i,a,s,et){return Ig(),Jg(et),i.flags|=256,Yi(o,i,a,s),i.child}var nj={dehydrated:null,treeContext:null,retryLane:0};function oj(o){return{baseLanes:o,cachePool:null,transitions:null}}function pj(o,i,a){var s=i.pendingProps,et=M$1.current,tt=!1,nt=(i.flags&128)!==0,rt;if((rt=nt)||(rt=o!==null&&o.memoizedState===null?!1:(et&2)!==0),rt?(tt=!0,i.flags&=-129):(o===null||o.memoizedState!==null)&&(et|=1),G$1(M$1,et&1),o===null)return Eg(i),o=i.memoizedState,o!==null&&(o=o.dehydrated,o!==null)?(i.mode&1?o.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(nt=s.children,o=s.fallback,tt?(s=i.mode,tt=i.child,nt={mode:"hidden",children:nt},!(s&1)&&tt!==null?(tt.childLanes=0,tt.pendingProps=nt):tt=qj(nt,s,0,null),o=Ah(o,s,a,null),tt.return=i,o.return=i,tt.sibling=o,i.child=tt,i.child.memoizedState=oj(a),i.memoizedState=nj,o):rj(i,nt));if(et=o.memoizedState,et!==null&&(rt=et.dehydrated,rt!==null))return sj(o,i,nt,s,rt,et,a);if(tt){tt=s.fallback,nt=i.mode,et=o.child,rt=et.sibling;var ot={mode:"hidden",children:s.children};return!(nt&1)&&i.child!==et?(s=i.child,s.childLanes=0,s.pendingProps=ot,i.deletions=null):(s=wh(et,ot),s.subtreeFlags=et.subtreeFlags&14680064),rt!==null?tt=wh(rt,tt):(tt=Ah(tt,nt,a,null),tt.flags|=2),tt.return=i,s.return=i,s.sibling=tt,i.child=s,s=tt,tt=i.child,nt=o.child.memoizedState,nt=nt===null?oj(a):{baseLanes:nt.baseLanes|a,cachePool:null,transitions:nt.transitions},tt.memoizedState=nt,tt.childLanes=o.childLanes&~a,i.memoizedState=nj,s}return tt=o.child,o=tt.sibling,s=wh(tt,{mode:"visible",children:s.children}),!(i.mode&1)&&(s.lanes=a),s.return=i,s.sibling=null,o!==null&&(a=i.deletions,a===null?(i.deletions=[o],i.flags|=16):a.push(o)),i.child=s,i.memoizedState=null,s}function rj(o,i){return i=qj({mode:"visible",children:i},o.mode,0,null),i.return=o,o.child=i}function tj(o,i,a,s){return s!==null&&Jg(s),Bh(i,o.child,null,a),o=rj(i,i.pendingProps.children),o.flags|=2,i.memoizedState=null,o}function sj(o,i,a,s,et,tt,nt){if(a)return i.flags&256?(i.flags&=-257,s=Li(Error(p$2(422))),tj(o,i,nt,s)):i.memoizedState!==null?(i.child=o.child,i.flags|=128,null):(tt=s.fallback,et=i.mode,s=qj({mode:"visible",children:s.children},et,0,null),tt=Ah(tt,et,nt,null),tt.flags|=2,s.return=i,tt.return=i,s.sibling=tt,i.child=s,i.mode&1&&Bh(i,o.child,null,nt),i.child.memoizedState=oj(nt),i.memoizedState=nj,tt);if(!(i.mode&1))return tj(o,i,nt,null);if(et.data==="$!"){if(s=et.nextSibling&&et.nextSibling.dataset,s)var rt=s.dgst;return s=rt,tt=Error(p$2(419)),s=Li(tt,s,void 0),tj(o,i,nt,s)}if(rt=(nt&o.childLanes)!==0,Ug||rt){if(s=R,s!==null){switch(nt&-nt){case 4:et=2;break;case 16:et=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:et=32;break;case 536870912:et=268435456;break;default:et=0}et=et&(s.suspendedLanes|nt)?0:et,et!==0&&et!==tt.retryLane&&(tt.retryLane=et,Zg(o,et),mh(s,o,et,-1))}return uj(),s=Li(Error(p$2(421))),tj(o,i,nt,s)}return et.data==="$?"?(i.flags|=128,i.child=o.child,i=vj.bind(null,o),et._reactRetry=i,null):(o=tt.treeContext,yg=Lf(et.nextSibling),xg=i,I$1=!0,zg=null,o!==null&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=o.id,sg=o.overflow,qg=i),i=rj(i,s.children),i.flags|=4096,i)}function wj(o,i,a){o.lanes|=i;var s=o.alternate;s!==null&&(s.lanes|=i),Sg(o.return,i,a)}function xj(o,i,a,s,et){var tt=o.memoizedState;tt===null?o.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:et}:(tt.isBackwards=i,tt.rendering=null,tt.renderingStartTime=0,tt.last=s,tt.tail=a,tt.tailMode=et)}function yj(o,i,a){var s=i.pendingProps,et=s.revealOrder,tt=s.tail;if(Yi(o,i,s.children,a),s=M$1.current,s&2)s=s&1|2,i.flags|=128;else{if(o!==null&&o.flags&128)e:for(o=i.child;o!==null;){if(o.tag===13)o.memoizedState!==null&&wj(o,a,i);else if(o.tag===19)wj(o,a,i);else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break e;for(;o.sibling===null;){if(o.return===null||o.return===i)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}s&=1}if(G$1(M$1,s),!(i.mode&1))i.memoizedState=null;else switch(et){case"forwards":for(a=i.child,et=null;a!==null;)o=a.alternate,o!==null&&Mh(o)===null&&(et=a),a=a.sibling;a=et,a===null?(et=i.child,i.child=null):(et=a.sibling,a.sibling=null),xj(i,!1,et,a,tt);break;case"backwards":for(a=null,et=i.child,i.child=null;et!==null;){if(o=et.alternate,o!==null&&Mh(o)===null){i.child=et;break}o=et.sibling,et.sibling=a,a=et,et=o}xj(i,!0,a,null,tt);break;case"together":xj(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function jj(o,i){!(i.mode&1)&&o!==null&&(o.alternate=null,i.alternate=null,i.flags|=2)}function $i(o,i,a){if(o!==null&&(i.dependencies=o.dependencies),hh|=i.lanes,!(a&i.childLanes))return null;if(o!==null&&i.child!==o.child)throw Error(p$2(153));if(i.child!==null){for(o=i.child,a=wh(o,o.pendingProps),i.child=a,a.return=i;o.sibling!==null;)o=o.sibling,a=a.sibling=wh(o,o.pendingProps),a.return=i;a.sibling=null}return i.child}function zj(o,i,a){switch(i.tag){case 3:lj(i),Ig();break;case 5:Kh(i);break;case 1:Zf(i.type)&&cg(i);break;case 4:Ih(i,i.stateNode.containerInfo);break;case 10:var s=i.type._context,et=i.memoizedProps.value;G$1(Mg,s._currentValue),s._currentValue=et;break;case 13:if(s=i.memoizedState,s!==null)return s.dehydrated!==null?(G$1(M$1,M$1.current&1),i.flags|=128,null):a&i.child.childLanes?pj(o,i,a):(G$1(M$1,M$1.current&1),o=$i(o,i,a),o!==null?o.sibling:null);G$1(M$1,M$1.current&1);break;case 19:if(s=(a&i.childLanes)!==0,o.flags&128){if(s)return yj(o,i,a);i.flags|=128}if(et=i.memoizedState,et!==null&&(et.rendering=null,et.tail=null,et.lastEffect=null),G$1(M$1,M$1.current),s)break;return null;case 22:case 23:return i.lanes=0,ej(o,i,a)}return $i(o,i,a)}var Aj,Bj,Cj,Dj;Aj=function(o,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)o.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};Bj=function(){};Cj=function(o,i,a,s){var et=o.memoizedProps;if(et!==s){o=i.stateNode,Hh(Eh.current);var tt=null;switch(a){case"input":et=Ya(o,et),s=Ya(o,s),tt=[];break;case"select":et=A$2({},et,{value:void 0}),s=A$2({},s,{value:void 0}),tt=[];break;case"textarea":et=gb(o,et),s=gb(o,s),tt=[];break;default:typeof et.onClick!="function"&&typeof s.onClick=="function"&&(o.onclick=Bf)}ub(a,s);var nt;a=null;for(it in et)if(!s.hasOwnProperty(it)&&et.hasOwnProperty(it)&&et[it]!=null)if(it==="style"){var rt=et[it];for(nt in rt)rt.hasOwnProperty(nt)&&(a||(a={}),a[nt]="")}else it!=="dangerouslySetInnerHTML"&&it!=="children"&&it!=="suppressContentEditableWarning"&&it!=="suppressHydrationWarning"&&it!=="autoFocus"&&(ea.hasOwnProperty(it)?tt||(tt=[]):(tt=tt||[]).push(it,null));for(it in s){var ot=s[it];if(rt=et!=null?et[it]:void 0,s.hasOwnProperty(it)&&ot!==rt&&(ot!=null||rt!=null))if(it==="style")if(rt){for(nt in rt)!rt.hasOwnProperty(nt)||ot&&ot.hasOwnProperty(nt)||(a||(a={}),a[nt]="");for(nt in ot)ot.hasOwnProperty(nt)&&rt[nt]!==ot[nt]&&(a||(a={}),a[nt]=ot[nt])}else a||(tt||(tt=[]),tt.push(it,a)),a=ot;else it==="dangerouslySetInnerHTML"?(ot=ot?ot.__html:void 0,rt=rt?rt.__html:void 0,ot!=null&&rt!==ot&&(tt=tt||[]).push(it,ot)):it==="children"?typeof ot!="string"&&typeof ot!="number"||(tt=tt||[]).push(it,""+ot):it!=="suppressContentEditableWarning"&&it!=="suppressHydrationWarning"&&(ea.hasOwnProperty(it)?(ot!=null&&it==="onScroll"&&D("scroll",o),tt||rt===ot||(tt=[])):(tt=tt||[]).push(it,ot))}a&&(tt=tt||[]).push("style",a);var it=tt;(i.updateQueue=it)&&(i.flags|=4)}};Dj=function(o,i,a,s){a!==s&&(i.flags|=4)};function Ej(o,i){if(!I$1)switch(o.tailMode){case"hidden":i=o.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?o.tail=null:a.sibling=null;break;case"collapsed":a=o.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?i||o.tail===null?o.tail=null:o.tail.sibling=null:s.sibling=null}}function S$1(o){var i=o.alternate!==null&&o.alternate.child===o.child,a=0,s=0;if(i)for(var et=o.child;et!==null;)a|=et.lanes|et.childLanes,s|=et.subtreeFlags&14680064,s|=et.flags&14680064,et.return=o,et=et.sibling;else for(et=o.child;et!==null;)a|=et.lanes|et.childLanes,s|=et.subtreeFlags,s|=et.flags,et.return=o,et=et.sibling;return o.subtreeFlags|=s,o.childLanes=a,i}function Fj(o,i,a){var s=i.pendingProps;switch(wg(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S$1(i),null;case 1:return Zf(i.type)&&$f(),S$1(i),null;case 3:return s=i.stateNode,Jh(),E$1(Wf),E$1(H$1),Oh(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(o===null||o.child===null)&&(Gg(i)?i.flags|=4:o===null||o.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,zg!==null&&(Gj(zg),zg=null))),Bj(o,i),S$1(i),null;case 5:Lh(i);var et=Hh(Gh.current);if(a=i.type,o!==null&&i.stateNode!=null)Cj(o,i,a,s,et),o.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!s){if(i.stateNode===null)throw Error(p$2(166));return S$1(i),null}if(o=Hh(Eh.current),Gg(i)){s=i.stateNode,a=i.type;var tt=i.memoizedProps;switch(s[Of]=i,s[Pf]=tt,o=(i.mode&1)!==0,a){case"dialog":D("cancel",s),D("close",s);break;case"iframe":case"object":case"embed":D("load",s);break;case"video":case"audio":for(et=0;et<lf.length;et++)D(lf[et],s);break;case"source":D("error",s);break;case"img":case"image":case"link":D("error",s),D("load",s);break;case"details":D("toggle",s);break;case"input":Za(s,tt),D("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!tt.multiple},D("invalid",s);break;case"textarea":hb(s,tt),D("invalid",s)}ub(a,tt),et=null;for(var nt in tt)if(tt.hasOwnProperty(nt)){var rt=tt[nt];nt==="children"?typeof rt=="string"?s.textContent!==rt&&(tt.suppressHydrationWarning!==!0&&Af(s.textContent,rt,o),et=["children",rt]):typeof rt=="number"&&s.textContent!==""+rt&&(tt.suppressHydrationWarning!==!0&&Af(s.textContent,rt,o),et=["children",""+rt]):ea.hasOwnProperty(nt)&&rt!=null&&nt==="onScroll"&&D("scroll",s)}switch(a){case"input":Va(s),db(s,tt,!0);break;case"textarea":Va(s),jb(s);break;case"select":case"option":break;default:typeof tt.onClick=="function"&&(s.onclick=Bf)}s=et,i.updateQueue=s,s!==null&&(i.flags|=4)}else{nt=et.nodeType===9?et:et.ownerDocument,o==="http://www.w3.org/1999/xhtml"&&(o=kb(a)),o==="http://www.w3.org/1999/xhtml"?a==="script"?(o=nt.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild)):typeof s.is=="string"?o=nt.createElement(a,{is:s.is}):(o=nt.createElement(a),a==="select"&&(nt=o,s.multiple?nt.multiple=!0:s.size&&(nt.size=s.size))):o=nt.createElementNS(o,a),o[Of]=i,o[Pf]=s,Aj(o,i,!1,!1),i.stateNode=o;e:{switch(nt=vb(a,s),a){case"dialog":D("cancel",o),D("close",o),et=s;break;case"iframe":case"object":case"embed":D("load",o),et=s;break;case"video":case"audio":for(et=0;et<lf.length;et++)D(lf[et],o);et=s;break;case"source":D("error",o),et=s;break;case"img":case"image":case"link":D("error",o),D("load",o),et=s;break;case"details":D("toggle",o),et=s;break;case"input":Za(o,s),et=Ya(o,s),D("invalid",o);break;case"option":et=s;break;case"select":o._wrapperState={wasMultiple:!!s.multiple},et=A$2({},s,{value:void 0}),D("invalid",o);break;case"textarea":hb(o,s),et=gb(o,s),D("invalid",o);break;default:et=s}ub(a,et),rt=et;for(tt in rt)if(rt.hasOwnProperty(tt)){var ot=rt[tt];tt==="style"?sb(o,ot):tt==="dangerouslySetInnerHTML"?(ot=ot?ot.__html:void 0,ot!=null&&nb(o,ot)):tt==="children"?typeof ot=="string"?(a!=="textarea"||ot!=="")&&ob(o,ot):typeof ot=="number"&&ob(o,""+ot):tt!=="suppressContentEditableWarning"&&tt!=="suppressHydrationWarning"&&tt!=="autoFocus"&&(ea.hasOwnProperty(tt)?ot!=null&&tt==="onScroll"&&D("scroll",o):ot!=null&&ta(o,tt,ot,nt))}switch(a){case"input":Va(o),db(o,s,!1);break;case"textarea":Va(o),jb(o);break;case"option":s.value!=null&&o.setAttribute("value",""+Sa(s.value));break;case"select":o.multiple=!!s.multiple,tt=s.value,tt!=null?fb(o,!!s.multiple,tt,!1):s.defaultValue!=null&&fb(o,!!s.multiple,s.defaultValue,!0);break;default:typeof et.onClick=="function"&&(o.onclick=Bf)}switch(a){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return S$1(i),null;case 6:if(o&&i.stateNode!=null)Dj(o,i,o.memoizedProps,s);else{if(typeof s!="string"&&i.stateNode===null)throw Error(p$2(166));if(a=Hh(Gh.current),Hh(Eh.current),Gg(i)){if(s=i.stateNode,a=i.memoizedProps,s[Of]=i,(tt=s.nodeValue!==a)&&(o=xg,o!==null))switch(o.tag){case 3:Af(s.nodeValue,a,(o.mode&1)!==0);break;case 5:o.memoizedProps.suppressHydrationWarning!==!0&&Af(s.nodeValue,a,(o.mode&1)!==0)}tt&&(i.flags|=4)}else s=(a.nodeType===9?a:a.ownerDocument).createTextNode(s),s[Of]=i,i.stateNode=s}return S$1(i),null;case 13:if(E$1(M$1),s=i.memoizedState,o===null||o.memoizedState!==null&&o.memoizedState.dehydrated!==null){if(I$1&&yg!==null&&i.mode&1&&!(i.flags&128))Hg(),Ig(),i.flags|=98560,tt=!1;else if(tt=Gg(i),s!==null&&s.dehydrated!==null){if(o===null){if(!tt)throw Error(p$2(318));if(tt=i.memoizedState,tt=tt!==null?tt.dehydrated:null,!tt)throw Error(p$2(317));tt[Of]=i}else Ig(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;S$1(i),tt=!1}else zg!==null&&(Gj(zg),zg=null),tt=!0;if(!tt)return i.flags&65536?i:null}return i.flags&128?(i.lanes=a,i):(s=s!==null,s!==(o!==null&&o.memoizedState!==null)&&s&&(i.child.flags|=8192,i.mode&1&&(o===null||M$1.current&1?T$1===0&&(T$1=3):uj())),i.updateQueue!==null&&(i.flags|=4),S$1(i),null);case 4:return Jh(),Bj(o,i),o===null&&sf(i.stateNode.containerInfo),S$1(i),null;case 10:return Rg(i.type._context),S$1(i),null;case 17:return Zf(i.type)&&$f(),S$1(i),null;case 19:if(E$1(M$1),tt=i.memoizedState,tt===null)return S$1(i),null;if(s=(i.flags&128)!==0,nt=tt.rendering,nt===null)if(s)Ej(tt,!1);else{if(T$1!==0||o!==null&&o.flags&128)for(o=i.child;o!==null;){if(nt=Mh(o),nt!==null){for(i.flags|=128,Ej(tt,!1),s=nt.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),i.subtreeFlags=0,s=a,a=i.child;a!==null;)tt=a,o=s,tt.flags&=14680066,nt=tt.alternate,nt===null?(tt.childLanes=0,tt.lanes=o,tt.child=null,tt.subtreeFlags=0,tt.memoizedProps=null,tt.memoizedState=null,tt.updateQueue=null,tt.dependencies=null,tt.stateNode=null):(tt.childLanes=nt.childLanes,tt.lanes=nt.lanes,tt.child=nt.child,tt.subtreeFlags=0,tt.deletions=null,tt.memoizedProps=nt.memoizedProps,tt.memoizedState=nt.memoizedState,tt.updateQueue=nt.updateQueue,tt.type=nt.type,o=nt.dependencies,tt.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext}),a=a.sibling;return G$1(M$1,M$1.current&1|2),i.child}o=o.sibling}tt.tail!==null&&B$1()>Hj&&(i.flags|=128,s=!0,Ej(tt,!1),i.lanes=4194304)}else{if(!s)if(o=Mh(nt),o!==null){if(i.flags|=128,s=!0,a=o.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ej(tt,!0),tt.tail===null&&tt.tailMode==="hidden"&&!nt.alternate&&!I$1)return S$1(i),null}else 2*B$1()-tt.renderingStartTime>Hj&&a!==1073741824&&(i.flags|=128,s=!0,Ej(tt,!1),i.lanes=4194304);tt.isBackwards?(nt.sibling=i.child,i.child=nt):(a=tt.last,a!==null?a.sibling=nt:i.child=nt,tt.last=nt)}return tt.tail!==null?(i=tt.tail,tt.rendering=i,tt.tail=i.sibling,tt.renderingStartTime=B$1(),i.sibling=null,a=M$1.current,G$1(M$1,s?a&1|2:a&1),i):(S$1(i),null);case 22:case 23:return Ij(),s=i.memoizedState!==null,o!==null&&o.memoizedState!==null!==s&&(i.flags|=8192),s&&i.mode&1?gj&1073741824&&(S$1(i),i.subtreeFlags&6&&(i.flags|=8192)):S$1(i),null;case 24:return null;case 25:return null}throw Error(p$2(156,i.tag))}function Jj(o,i){switch(wg(i),i.tag){case 1:return Zf(i.type)&&$f(),o=i.flags,o&65536?(i.flags=o&-65537|128,i):null;case 3:return Jh(),E$1(Wf),E$1(H$1),Oh(),o=i.flags,o&65536&&!(o&128)?(i.flags=o&-65537|128,i):null;case 5:return Lh(i),null;case 13:if(E$1(M$1),o=i.memoizedState,o!==null&&o.dehydrated!==null){if(i.alternate===null)throw Error(p$2(340));Ig()}return o=i.flags,o&65536?(i.flags=o&-65537|128,i):null;case 19:return E$1(M$1),null;case 4:return Jh(),null;case 10:return Rg(i.type._context),null;case 22:case 23:return Ij(),null;case 24:return null;default:return null}}var Kj=!1,U$1=!1,Lj=typeof WeakSet=="function"?WeakSet:Set,V$1=null;function Mj(o,i){var a=o.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(s){W$1(o,i,s)}else a.current=null}function Nj(o,i,a){try{a()}catch(s){W$1(o,i,s)}}var Oj=!1;function Pj(o,i){if(Cf=dd,o=Me$1(),Ne$1(o)){if("selectionStart"in o)var a={start:o.selectionStart,end:o.selectionEnd};else e:{a=(a=o.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var et=s.anchorOffset,tt=s.focusNode;s=s.focusOffset;try{a.nodeType,tt.nodeType}catch{a=null;break e}var nt=0,rt=-1,ot=-1,it=0,lt=0,st=o,dt=null;t:for(;;){for(var ht;st!==a||et!==0&&st.nodeType!==3||(rt=nt+et),st!==tt||s!==0&&st.nodeType!==3||(ot=nt+s),st.nodeType===3&&(nt+=st.nodeValue.length),(ht=st.firstChild)!==null;)dt=st,st=ht;for(;;){if(st===o)break t;if(dt===a&&++it===et&&(rt=nt),dt===tt&&++lt===s&&(ot=nt),(ht=st.nextSibling)!==null)break;st=dt,dt=st.parentNode}st=ht}a=rt===-1||ot===-1?null:{start:rt,end:ot}}else a=null}a=a||{start:0,end:0}}else a=null;for(Df={focusedElem:o,selectionRange:a},dd=!1,V$1=i;V$1!==null;)if(i=V$1,o=i.child,(i.subtreeFlags&1028)!==0&&o!==null)o.return=i,V$1=o;else for(;V$1!==null;){i=V$1;try{var pt=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(pt!==null){var mt=pt.memoizedProps,yt=pt.memoizedState,ct=i.stateNode,at=ct.getSnapshotBeforeUpdate(i.elementType===i.type?mt:Lg(i.type,mt),yt);ct.__reactInternalSnapshotBeforeUpdate=at}break;case 3:var ut=i.stateNode.containerInfo;ut.nodeType===1?ut.textContent="":ut.nodeType===9&&ut.documentElement&&ut.removeChild(ut.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p$2(163))}}catch(gt){W$1(i,i.return,gt)}if(o=i.sibling,o!==null){o.return=i.return,V$1=o;break}V$1=i.return}return pt=Oj,Oj=!1,pt}function Qj(o,i,a){var s=i.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var et=s=s.next;do{if((et.tag&o)===o){var tt=et.destroy;et.destroy=void 0,tt!==void 0&&Nj(i,a,tt)}et=et.next}while(et!==s)}}function Rj(o,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&o)===o){var s=a.create;a.destroy=s()}a=a.next}while(a!==i)}}function Sj(o){var i=o.ref;if(i!==null){var a=o.stateNode;switch(o.tag){case 5:o=a;break;default:o=a}typeof i=="function"?i(o):i.current=o}}function Tj(o){var i=o.alternate;i!==null&&(o.alternate=null,Tj(i)),o.child=null,o.deletions=null,o.sibling=null,o.tag===5&&(i=o.stateNode,i!==null&&(delete i[Of],delete i[Pf],delete i[of],delete i[Qf],delete i[Rf])),o.stateNode=null,o.return=null,o.dependencies=null,o.memoizedProps=null,o.memoizedState=null,o.pendingProps=null,o.stateNode=null,o.updateQueue=null}function Uj(o){return o.tag===5||o.tag===3||o.tag===4}function Vj(o){e:for(;;){for(;o.sibling===null;){if(o.return===null||Uj(o.return))return null;o=o.return}for(o.sibling.return=o.return,o=o.sibling;o.tag!==5&&o.tag!==6&&o.tag!==18;){if(o.flags&2||o.child===null||o.tag===4)continue e;o.child.return=o,o=o.child}if(!(o.flags&2))return o.stateNode}}function Wj(o,i,a){var s=o.tag;if(s===5||s===6)o=o.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(o,i):a.insertBefore(o,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(o,a)):(i=a,i.appendChild(o)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Bf));else if(s!==4&&(o=o.child,o!==null))for(Wj(o,i,a),o=o.sibling;o!==null;)Wj(o,i,a),o=o.sibling}function Xj(o,i,a){var s=o.tag;if(s===5||s===6)o=o.stateNode,i?a.insertBefore(o,i):a.appendChild(o);else if(s!==4&&(o=o.child,o!==null))for(Xj(o,i,a),o=o.sibling;o!==null;)Xj(o,i,a),o=o.sibling}var X$1=null,Yj=!1;function Zj(o,i,a){for(a=a.child;a!==null;)ak(o,i,a),a=a.sibling}function ak(o,i,a){if(lc&&typeof lc.onCommitFiberUnmount=="function")try{lc.onCommitFiberUnmount(kc,a)}catch{}switch(a.tag){case 5:U$1||Mj(a,i);case 6:var s=X$1,et=Yj;X$1=null,Zj(o,i,a),X$1=s,Yj=et,X$1!==null&&(Yj?(o=X$1,a=a.stateNode,o.nodeType===8?o.parentNode.removeChild(a):o.removeChild(a)):X$1.removeChild(a.stateNode));break;case 18:X$1!==null&&(Yj?(o=X$1,a=a.stateNode,o.nodeType===8?Kf(o.parentNode,a):o.nodeType===1&&Kf(o,a),bd(o)):Kf(X$1,a.stateNode));break;case 4:s=X$1,et=Yj,X$1=a.stateNode.containerInfo,Yj=!0,Zj(o,i,a),X$1=s,Yj=et;break;case 0:case 11:case 14:case 15:if(!U$1&&(s=a.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){et=s=s.next;do{var tt=et,nt=tt.destroy;tt=tt.tag,nt!==void 0&&(tt&2||tt&4)&&Nj(a,i,nt),et=et.next}while(et!==s)}Zj(o,i,a);break;case 1:if(!U$1&&(Mj(a,i),s=a.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=a.memoizedProps,s.state=a.memoizedState,s.componentWillUnmount()}catch(rt){W$1(a,i,rt)}Zj(o,i,a);break;case 21:Zj(o,i,a);break;case 22:a.mode&1?(U$1=(s=U$1)||a.memoizedState!==null,Zj(o,i,a),U$1=s):Zj(o,i,a);break;default:Zj(o,i,a)}}function bk(o){var i=o.updateQueue;if(i!==null){o.updateQueue=null;var a=o.stateNode;a===null&&(a=o.stateNode=new Lj),i.forEach(function(s){var et=ck.bind(null,o,s);a.has(s)||(a.add(s),s.then(et,et))})}}function dk(o,i){var a=i.deletions;if(a!==null)for(var s=0;s<a.length;s++){var et=a[s];try{var tt=o,nt=i,rt=nt;e:for(;rt!==null;){switch(rt.tag){case 5:X$1=rt.stateNode,Yj=!1;break e;case 3:X$1=rt.stateNode.containerInfo,Yj=!0;break e;case 4:X$1=rt.stateNode.containerInfo,Yj=!0;break e}rt=rt.return}if(X$1===null)throw Error(p$2(160));ak(tt,nt,et),X$1=null,Yj=!1;var ot=et.alternate;ot!==null&&(ot.return=null),et.return=null}catch(it){W$1(et,i,it)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ek(i,o),i=i.sibling}function ek(o,i){var a=o.alternate,s=o.flags;switch(o.tag){case 0:case 11:case 14:case 15:if(dk(i,o),fk(o),s&4){try{Qj(3,o,o.return),Rj(3,o)}catch(mt){W$1(o,o.return,mt)}try{Qj(5,o,o.return)}catch(mt){W$1(o,o.return,mt)}}break;case 1:dk(i,o),fk(o),s&512&&a!==null&&Mj(a,a.return);break;case 5:if(dk(i,o),fk(o),s&512&&a!==null&&Mj(a,a.return),o.flags&32){var et=o.stateNode;try{ob(et,"")}catch(mt){W$1(o,o.return,mt)}}if(s&4&&(et=o.stateNode,et!=null)){var tt=o.memoizedProps,nt=a!==null?a.memoizedProps:tt,rt=o.type,ot=o.updateQueue;if(o.updateQueue=null,ot!==null)try{rt==="input"&&tt.type==="radio"&&tt.name!=null&&ab(et,tt),vb(rt,nt);var it=vb(rt,tt);for(nt=0;nt<ot.length;nt+=2){var lt=ot[nt],st=ot[nt+1];lt==="style"?sb(et,st):lt==="dangerouslySetInnerHTML"?nb(et,st):lt==="children"?ob(et,st):ta(et,lt,st,it)}switch(rt){case"input":bb(et,tt);break;case"textarea":ib(et,tt);break;case"select":var dt=et._wrapperState.wasMultiple;et._wrapperState.wasMultiple=!!tt.multiple;var ht=tt.value;ht!=null?fb(et,!!tt.multiple,ht,!1):dt!==!!tt.multiple&&(tt.defaultValue!=null?fb(et,!!tt.multiple,tt.defaultValue,!0):fb(et,!!tt.multiple,tt.multiple?[]:"",!1))}et[Pf]=tt}catch(mt){W$1(o,o.return,mt)}}break;case 6:if(dk(i,o),fk(o),s&4){if(o.stateNode===null)throw Error(p$2(162));et=o.stateNode,tt=o.memoizedProps;try{et.nodeValue=tt}catch(mt){W$1(o,o.return,mt)}}break;case 3:if(dk(i,o),fk(o),s&4&&a!==null&&a.memoizedState.isDehydrated)try{bd(i.containerInfo)}catch(mt){W$1(o,o.return,mt)}break;case 4:dk(i,o),fk(o);break;case 13:dk(i,o),fk(o),et=o.child,et.flags&8192&&(tt=et.memoizedState!==null,et.stateNode.isHidden=tt,!tt||et.alternate!==null&&et.alternate.memoizedState!==null||(gk=B$1())),s&4&&bk(o);break;case 22:if(lt=a!==null&&a.memoizedState!==null,o.mode&1?(U$1=(it=U$1)||lt,dk(i,o),U$1=it):dk(i,o),fk(o),s&8192){if(it=o.memoizedState!==null,(o.stateNode.isHidden=it)&&!lt&&o.mode&1)for(V$1=o,lt=o.child;lt!==null;){for(st=V$1=lt;V$1!==null;){switch(dt=V$1,ht=dt.child,dt.tag){case 0:case 11:case 14:case 15:Qj(4,dt,dt.return);break;case 1:Mj(dt,dt.return);var pt=dt.stateNode;if(typeof pt.componentWillUnmount=="function"){s=dt,a=dt.return;try{i=s,pt.props=i.memoizedProps,pt.state=i.memoizedState,pt.componentWillUnmount()}catch(mt){W$1(s,a,mt)}}break;case 5:Mj(dt,dt.return);break;case 22:if(dt.memoizedState!==null){hk(st);continue}}ht!==null?(ht.return=dt,V$1=ht):hk(st)}lt=lt.sibling}e:for(lt=null,st=o;;){if(st.tag===5){if(lt===null){lt=st;try{et=st.stateNode,it?(tt=et.style,typeof tt.setProperty=="function"?tt.setProperty("display","none","important"):tt.display="none"):(rt=st.stateNode,ot=st.memoizedProps.style,nt=ot!=null&&ot.hasOwnProperty("display")?ot.display:null,rt.style.display=rb("display",nt))}catch(mt){W$1(o,o.return,mt)}}}else if(st.tag===6){if(lt===null)try{st.stateNode.nodeValue=it?"":st.memoizedProps}catch(mt){W$1(o,o.return,mt)}}else if((st.tag!==22&&st.tag!==23||st.memoizedState===null||st===o)&&st.child!==null){st.child.return=st,st=st.child;continue}if(st===o)break e;for(;st.sibling===null;){if(st.return===null||st.return===o)break e;lt===st&&(lt=null),st=st.return}lt===st&&(lt=null),st.sibling.return=st.return,st=st.sibling}}break;case 19:dk(i,o),fk(o),s&4&&bk(o);break;case 21:break;default:dk(i,o),fk(o)}}function fk(o){var i=o.flags;if(i&2){try{e:{for(var a=o.return;a!==null;){if(Uj(a)){var s=a;break e}a=a.return}throw Error(p$2(160))}switch(s.tag){case 5:var et=s.stateNode;s.flags&32&&(ob(et,""),s.flags&=-33);var tt=Vj(o);Xj(o,tt,et);break;case 3:case 4:var nt=s.stateNode.containerInfo,rt=Vj(o);Wj(o,rt,nt);break;default:throw Error(p$2(161))}}catch(ot){W$1(o,o.return,ot)}o.flags&=-3}i&4096&&(o.flags&=-4097)}function ik(o,i,a){V$1=o,jk(o)}function jk(o,i,a){for(var s=(o.mode&1)!==0;V$1!==null;){var et=V$1,tt=et.child;if(et.tag===22&&s){var nt=et.memoizedState!==null||Kj;if(!nt){var rt=et.alternate,ot=rt!==null&&rt.memoizedState!==null||U$1;rt=Kj;var it=U$1;if(Kj=nt,(U$1=ot)&&!it)for(V$1=et;V$1!==null;)nt=V$1,ot=nt.child,nt.tag===22&&nt.memoizedState!==null?kk(et):ot!==null?(ot.return=nt,V$1=ot):kk(et);for(;tt!==null;)V$1=tt,jk(tt),tt=tt.sibling;V$1=et,Kj=rt,U$1=it}lk(o)}else et.subtreeFlags&8772&&tt!==null?(tt.return=et,V$1=tt):lk(o)}}function lk(o){for(;V$1!==null;){var i=V$1;if(i.flags&8772){var a=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:U$1||Rj(5,i);break;case 1:var s=i.stateNode;if(i.flags&4&&!U$1)if(a===null)s.componentDidMount();else{var et=i.elementType===i.type?a.memoizedProps:Lg(i.type,a.memoizedProps);s.componentDidUpdate(et,a.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var tt=i.updateQueue;tt!==null&&ih(i,tt,s);break;case 3:var nt=i.updateQueue;if(nt!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}ih(i,nt,a)}break;case 5:var rt=i.stateNode;if(a===null&&i.flags&4){a=rt;var ot=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":ot.autoFocus&&a.focus();break;case"img":ot.src&&(a.src=ot.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var it=i.alternate;if(it!==null){var lt=it.memoizedState;if(lt!==null){var st=lt.dehydrated;st!==null&&bd(st)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p$2(163))}U$1||i.flags&512&&Sj(i)}catch(dt){W$1(i,i.return,dt)}}if(i===o){V$1=null;break}if(a=i.sibling,a!==null){a.return=i.return,V$1=a;break}V$1=i.return}}function hk(o){for(;V$1!==null;){var i=V$1;if(i===o){V$1=null;break}var a=i.sibling;if(a!==null){a.return=i.return,V$1=a;break}V$1=i.return}}function kk(o){for(;V$1!==null;){var i=V$1;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Rj(4,i)}catch(ot){W$1(i,a,ot)}break;case 1:var s=i.stateNode;if(typeof s.componentDidMount=="function"){var et=i.return;try{s.componentDidMount()}catch(ot){W$1(i,et,ot)}}var tt=i.return;try{Sj(i)}catch(ot){W$1(i,tt,ot)}break;case 5:var nt=i.return;try{Sj(i)}catch(ot){W$1(i,nt,ot)}}}catch(ot){W$1(i,i.return,ot)}if(i===o){V$1=null;break}var rt=i.sibling;if(rt!==null){rt.return=i.return,V$1=rt;break}V$1=i.return}}var mk=Math.ceil,nk=ua.ReactCurrentDispatcher,ok=ua.ReactCurrentOwner,pk=ua.ReactCurrentBatchConfig,K$1=0,R=null,Y$1=null,Z$1=0,gj=0,fj=Uf(0),T$1=0,qk=null,hh=0,rk=0,sk=0,tk=null,uk=null,gk=0,Hj=1/0,vk=null,Pi=!1,Qi=null,Si=null,wk=!1,xk=null,yk=0,zk=0,Ak=null,Bk=-1,Ck=0;function L$1(){return K$1&6?B$1():Bk!==-1?Bk:Bk=B$1()}function lh(o){return o.mode&1?K$1&2&&Z$1!==0?Z$1&-Z$1:Kg.transition!==null?(Ck===0&&(Ck=yc()),Ck):(o=C,o!==0||(o=window.event,o=o===void 0?16:jd(o.type)),o):1}function mh(o,i,a,s){if(50<zk)throw zk=0,Ak=null,Error(p$2(185));Ac(o,a,s),(!(K$1&2)||o!==R)&&(o===R&&(!(K$1&2)&&(rk|=a),T$1===4&&Dk(o,Z$1)),Ek(o,s),a===1&&K$1===0&&!(i.mode&1)&&(Hj=B$1()+500,fg&&jg()))}function Ek(o,i){var a=o.callbackNode;wc(o,i);var s=uc(o,o===R?Z$1:0);if(s===0)a!==null&&bc(a),o.callbackNode=null,o.callbackPriority=0;else if(i=s&-s,o.callbackPriority!==i){if(a!=null&&bc(a),i===1)o.tag===0?ig(Fk.bind(null,o)):hg(Fk.bind(null,o)),Jf(function(){!(K$1&6)&&jg()}),a=null;else{switch(Dc(s)){case 1:a=fc;break;case 4:a=gc;break;case 16:a=hc;break;case 536870912:a=jc;break;default:a=hc}a=Gk(a,Hk.bind(null,o))}o.callbackPriority=i,o.callbackNode=a}}function Hk(o,i){if(Bk=-1,Ck=0,K$1&6)throw Error(p$2(327));var a=o.callbackNode;if(Ik()&&o.callbackNode!==a)return null;var s=uc(o,o===R?Z$1:0);if(s===0)return null;if(s&30||s&o.expiredLanes||i)i=Jk(o,s);else{i=s;var et=K$1;K$1|=2;var tt=Kk();(R!==o||Z$1!==i)&&(vk=null,Hj=B$1()+500,Lk(o,i));do try{Mk();break}catch(rt){Nk(o,rt)}while(1);Qg(),nk.current=tt,K$1=et,Y$1!==null?i=0:(R=null,Z$1=0,i=T$1)}if(i!==0){if(i===2&&(et=xc(o),et!==0&&(s=et,i=Ok(o,et))),i===1)throw a=qk,Lk(o,0),Dk(o,s),Ek(o,B$1()),a;if(i===6)Dk(o,s);else{if(et=o.current.alternate,!(s&30)&&!Pk(et)&&(i=Jk(o,s),i===2&&(tt=xc(o),tt!==0&&(s=tt,i=Ok(o,tt))),i===1))throw a=qk,Lk(o,0),Dk(o,s),Ek(o,B$1()),a;switch(o.finishedWork=et,o.finishedLanes=s,i){case 0:case 1:throw Error(p$2(345));case 2:Qk(o,uk,vk);break;case 3:if(Dk(o,s),(s&130023424)===s&&(i=gk+500-B$1(),10<i)){if(uc(o,0)!==0)break;if(et=o.suspendedLanes,(et&s)!==s){L$1(),o.pingedLanes|=o.suspendedLanes&et;break}o.timeoutHandle=Ff(Qk.bind(null,o,uk,vk),i);break}Qk(o,uk,vk);break;case 4:if(Dk(o,s),(s&4194240)===s)break;for(i=o.eventTimes,et=-1;0<s;){var nt=31-oc(s);tt=1<<nt,nt=i[nt],nt>et&&(et=nt),s&=~tt}if(s=et,s=B$1()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*mk(s/1960))-s,10<s){o.timeoutHandle=Ff(Qk.bind(null,o,uk,vk),s);break}Qk(o,uk,vk);break;case 5:Qk(o,uk,vk);break;default:throw Error(p$2(329))}}}return Ek(o,B$1()),o.callbackNode===a?Hk.bind(null,o):null}function Ok(o,i){var a=tk;return o.current.memoizedState.isDehydrated&&(Lk(o,i).flags|=256),o=Jk(o,i),o!==2&&(i=uk,uk=a,i!==null&&Gj(i)),o}function Gj(o){uk===null?uk=o:uk.push.apply(uk,o)}function Pk(o){for(var i=o;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var s=0;s<a.length;s++){var et=a[s],tt=et.getSnapshot;et=et.value;try{if(!He$1(tt(),et))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===o)break;for(;i.sibling===null;){if(i.return===null||i.return===o)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Dk(o,i){for(i&=~sk,i&=~rk,o.suspendedLanes|=i,o.pingedLanes&=~i,o=o.expirationTimes;0<i;){var a=31-oc(i),s=1<<a;o[a]=-1,i&=~s}}function Fk(o){if(K$1&6)throw Error(p$2(327));Ik();var i=uc(o,0);if(!(i&1))return Ek(o,B$1()),null;var a=Jk(o,i);if(o.tag!==0&&a===2){var s=xc(o);s!==0&&(i=s,a=Ok(o,s))}if(a===1)throw a=qk,Lk(o,0),Dk(o,i),Ek(o,B$1()),a;if(a===6)throw Error(p$2(345));return o.finishedWork=o.current.alternate,o.finishedLanes=i,Qk(o,uk,vk),Ek(o,B$1()),null}function Rk(o,i){var a=K$1;K$1|=1;try{return o(i)}finally{K$1=a,K$1===0&&(Hj=B$1()+500,fg&&jg())}}function Sk(o){xk!==null&&xk.tag===0&&!(K$1&6)&&Ik();var i=K$1;K$1|=1;var a=pk.transition,s=C;try{if(pk.transition=null,C=1,o)return o()}finally{C=s,pk.transition=a,K$1=i,!(K$1&6)&&jg()}}function Ij(){gj=fj.current,E$1(fj)}function Lk(o,i){o.finishedWork=null,o.finishedLanes=0;var a=o.timeoutHandle;if(a!==-1&&(o.timeoutHandle=-1,Gf(a)),Y$1!==null)for(a=Y$1.return;a!==null;){var s=a;switch(wg(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&$f();break;case 3:Jh(),E$1(Wf),E$1(H$1),Oh();break;case 5:Lh(s);break;case 4:Jh();break;case 13:E$1(M$1);break;case 19:E$1(M$1);break;case 10:Rg(s.type._context);break;case 22:case 23:Ij()}a=a.return}if(R=o,Y$1=o=wh(o.current,null),Z$1=gj=i,T$1=0,qk=null,sk=rk=hh=0,uk=tk=null,Wg!==null){for(i=0;i<Wg.length;i++)if(a=Wg[i],s=a.interleaved,s!==null){a.interleaved=null;var et=s.next,tt=a.pending;if(tt!==null){var nt=tt.next;tt.next=et,s.next=nt}a.pending=s}Wg=null}return o}function Nk(o,i){do{var a=Y$1;try{if(Qg(),Ph.current=ai,Sh){for(var s=N$1.memoizedState;s!==null;){var et=s.queue;et!==null&&(et.pending=null),s=s.next}Sh=!1}if(Rh=0,P$1=O$1=N$1=null,Th=!1,Uh=0,ok.current=null,a===null||a.return===null){T$1=1,qk=i,Y$1=null;break}e:{var tt=o,nt=a.return,rt=a,ot=i;if(i=Z$1,rt.flags|=32768,ot!==null&&typeof ot=="object"&&typeof ot.then=="function"){var it=ot,lt=rt,st=lt.tag;if(!(lt.mode&1)&&(st===0||st===11||st===15)){var dt=lt.alternate;dt?(lt.updateQueue=dt.updateQueue,lt.memoizedState=dt.memoizedState,lt.lanes=dt.lanes):(lt.updateQueue=null,lt.memoizedState=null)}var ht=Vi(nt);if(ht!==null){ht.flags&=-257,Wi(ht,nt,rt,tt,i),ht.mode&1&&Ti(tt,it,i),i=ht,ot=it;var pt=i.updateQueue;if(pt===null){var mt=new Set;mt.add(ot),i.updateQueue=mt}else pt.add(ot);break e}else{if(!(i&1)){Ti(tt,it,i),uj();break e}ot=Error(p$2(426))}}else if(I$1&&rt.mode&1){var yt=Vi(nt);if(yt!==null){!(yt.flags&65536)&&(yt.flags|=256),Wi(yt,nt,rt,tt,i),Jg(Ki(ot,rt));break e}}tt=ot=Ki(ot,rt),T$1!==4&&(T$1=2),tk===null?tk=[tt]:tk.push(tt),tt=nt;do{switch(tt.tag){case 3:tt.flags|=65536,i&=-i,tt.lanes|=i;var ct=Oi(tt,ot,i);fh(tt,ct);break e;case 1:rt=ot;var at=tt.type,ut=tt.stateNode;if(!(tt.flags&128)&&(typeof at.getDerivedStateFromError=="function"||ut!==null&&typeof ut.componentDidCatch=="function"&&(Si===null||!Si.has(ut)))){tt.flags|=65536,i&=-i,tt.lanes|=i;var gt=Ri(tt,rt,i);fh(tt,gt);break e}}tt=tt.return}while(tt!==null)}Tk(a)}catch(vt){i=vt,Y$1===a&&a!==null&&(Y$1=a=a.return);continue}break}while(1)}function Kk(){var o=nk.current;return nk.current=ai,o===null?ai:o}function uj(){(T$1===0||T$1===3||T$1===2)&&(T$1=4),R===null||!(hh&268435455)&&!(rk&268435455)||Dk(R,Z$1)}function Jk(o,i){var a=K$1;K$1|=2;var s=Kk();(R!==o||Z$1!==i)&&(vk=null,Lk(o,i));do try{Uk();break}catch(et){Nk(o,et)}while(1);if(Qg(),K$1=a,nk.current=s,Y$1!==null)throw Error(p$2(261));return R=null,Z$1=0,T$1}function Uk(){for(;Y$1!==null;)Vk(Y$1)}function Mk(){for(;Y$1!==null&&!cc();)Vk(Y$1)}function Vk(o){var i=Wk(o.alternate,o,gj);o.memoizedProps=o.pendingProps,i===null?Tk(o):Y$1=i,ok.current=null}function Tk(o){var i=o;do{var a=i.alternate;if(o=i.return,i.flags&32768){if(a=Jj(a,i),a!==null){a.flags&=32767,Y$1=a;return}if(o!==null)o.flags|=32768,o.subtreeFlags=0,o.deletions=null;else{T$1=6,Y$1=null;return}}else if(a=Fj(a,i,gj),a!==null){Y$1=a;return}if(i=i.sibling,i!==null){Y$1=i;return}Y$1=i=o}while(i!==null);T$1===0&&(T$1=5)}function Qk(o,i,a){var s=C,et=pk.transition;try{pk.transition=null,C=1,Xk(o,i,a,s)}finally{pk.transition=et,C=s}return null}function Xk(o,i,a,s){do Ik();while(xk!==null);if(K$1&6)throw Error(p$2(327));a=o.finishedWork;var et=o.finishedLanes;if(a===null)return null;if(o.finishedWork=null,o.finishedLanes=0,a===o.current)throw Error(p$2(177));o.callbackNode=null,o.callbackPriority=0;var tt=a.lanes|a.childLanes;if(Bc(o,tt),o===R&&(Y$1=R=null,Z$1=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||wk||(wk=!0,Gk(hc,function(){return Ik(),null})),tt=(a.flags&15990)!==0,a.subtreeFlags&15990||tt){tt=pk.transition,pk.transition=null;var nt=C;C=1;var rt=K$1;K$1|=4,ok.current=null,Pj(o,a),ek(a,o),Oe(Df),dd=!!Cf,Df=Cf=null,o.current=a,ik(a),dc(),K$1=rt,C=nt,pk.transition=tt}else o.current=a;if(wk&&(wk=!1,xk=o,yk=et),tt=o.pendingLanes,tt===0&&(Si=null),mc(a.stateNode),Ek(o,B$1()),i!==null)for(s=o.onRecoverableError,a=0;a<i.length;a++)et=i[a],s(et.value,{componentStack:et.stack,digest:et.digest});if(Pi)throw Pi=!1,o=Qi,Qi=null,o;return yk&1&&o.tag!==0&&Ik(),tt=o.pendingLanes,tt&1?o===Ak?zk++:(zk=0,Ak=o):zk=0,jg(),null}function Ik(){if(xk!==null){var o=Dc(yk),i=pk.transition,a=C;try{if(pk.transition=null,C=16>o?16:o,xk===null)var s=!1;else{if(o=xk,xk=null,yk=0,K$1&6)throw Error(p$2(331));var et=K$1;for(K$1|=4,V$1=o.current;V$1!==null;){var tt=V$1,nt=tt.child;if(V$1.flags&16){var rt=tt.deletions;if(rt!==null){for(var ot=0;ot<rt.length;ot++){var it=rt[ot];for(V$1=it;V$1!==null;){var lt=V$1;switch(lt.tag){case 0:case 11:case 15:Qj(8,lt,tt)}var st=lt.child;if(st!==null)st.return=lt,V$1=st;else for(;V$1!==null;){lt=V$1;var dt=lt.sibling,ht=lt.return;if(Tj(lt),lt===it){V$1=null;break}if(dt!==null){dt.return=ht,V$1=dt;break}V$1=ht}}}var pt=tt.alternate;if(pt!==null){var mt=pt.child;if(mt!==null){pt.child=null;do{var yt=mt.sibling;mt.sibling=null,mt=yt}while(mt!==null)}}V$1=tt}}if(tt.subtreeFlags&2064&&nt!==null)nt.return=tt,V$1=nt;else e:for(;V$1!==null;){if(tt=V$1,tt.flags&2048)switch(tt.tag){case 0:case 11:case 15:Qj(9,tt,tt.return)}var ct=tt.sibling;if(ct!==null){ct.return=tt.return,V$1=ct;break e}V$1=tt.return}}var at=o.current;for(V$1=at;V$1!==null;){nt=V$1;var ut=nt.child;if(nt.subtreeFlags&2064&&ut!==null)ut.return=nt,V$1=ut;else e:for(nt=at;V$1!==null;){if(rt=V$1,rt.flags&2048)try{switch(rt.tag){case 0:case 11:case 15:Rj(9,rt)}}catch(vt){W$1(rt,rt.return,vt)}if(rt===nt){V$1=null;break e}var gt=rt.sibling;if(gt!==null){gt.return=rt.return,V$1=gt;break e}V$1=rt.return}}if(K$1=et,jg(),lc&&typeof lc.onPostCommitFiberRoot=="function")try{lc.onPostCommitFiberRoot(kc,o)}catch{}s=!0}return s}finally{C=a,pk.transition=i}}return!1}function Yk(o,i,a){i=Ki(a,i),i=Oi(o,i,1),o=dh(o,i,1),i=L$1(),o!==null&&(Ac(o,1,i),Ek(o,i))}function W$1(o,i,a){if(o.tag===3)Yk(o,o,a);else for(;i!==null;){if(i.tag===3){Yk(i,o,a);break}else if(i.tag===1){var s=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Si===null||!Si.has(s))){o=Ki(a,o),o=Ri(i,o,1),i=dh(i,o,1),o=L$1(),i!==null&&(Ac(i,1,o),Ek(i,o));break}}i=i.return}}function Ui(o,i,a){var s=o.pingCache;s!==null&&s.delete(i),i=L$1(),o.pingedLanes|=o.suspendedLanes&a,R===o&&(Z$1&a)===a&&(T$1===4||T$1===3&&(Z$1&130023424)===Z$1&&500>B$1()-gk?Lk(o,0):sk|=a),Ek(o,i)}function Zk(o,i){i===0&&(o.mode&1?(i=sc,sc<<=1,!(sc&130023424)&&(sc=4194304)):i=1);var a=L$1();o=Zg(o,i),o!==null&&(Ac(o,i,a),Ek(o,a))}function vj(o){var i=o.memoizedState,a=0;i!==null&&(a=i.retryLane),Zk(o,a)}function ck(o,i){var a=0;switch(o.tag){case 13:var s=o.stateNode,et=o.memoizedState;et!==null&&(a=et.retryLane);break;case 19:s=o.stateNode;break;default:throw Error(p$2(314))}s!==null&&s.delete(i),Zk(o,a)}var Wk;Wk=function(o,i,a){if(o!==null)if(o.memoizedProps!==i.pendingProps||Wf.current)Ug=!0;else{if(!(o.lanes&a)&&!(i.flags&128))return Ug=!1,zj(o,i,a);Ug=!!(o.flags&131072)}else Ug=!1,I$1&&i.flags&1048576&&ug(i,ng,i.index);switch(i.lanes=0,i.tag){case 2:var s=i.type;jj(o,i),o=i.pendingProps;var et=Yf(i,H$1.current);Tg(i,a),et=Xh(null,i,s,o,et,a);var tt=bi();return i.flags|=1,typeof et=="object"&&et!==null&&typeof et.render=="function"&&et.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Zf(s)?(tt=!0,cg(i)):tt=!1,i.memoizedState=et.state!==null&&et.state!==void 0?et.state:null,ah(i),et.updater=nh,i.stateNode=et,et._reactInternals=i,rh(i,s,o,a),i=kj(null,i,s,!0,tt,a)):(i.tag=0,I$1&&tt&&vg(i),Yi(null,i,et,a),i=i.child),i;case 16:s=i.elementType;e:{switch(jj(o,i),o=i.pendingProps,et=s._init,s=et(s._payload),i.type=s,et=i.tag=$k(s),o=Lg(s,o),et){case 0:i=dj(null,i,s,o,a);break e;case 1:i=ij(null,i,s,o,a);break e;case 11:i=Zi(null,i,s,o,a);break e;case 14:i=aj(null,i,s,Lg(s.type,o),a);break e}throw Error(p$2(306,s,""))}return i;case 0:return s=i.type,et=i.pendingProps,et=i.elementType===s?et:Lg(s,et),dj(o,i,s,et,a);case 1:return s=i.type,et=i.pendingProps,et=i.elementType===s?et:Lg(s,et),ij(o,i,s,et,a);case 3:e:{if(lj(i),o===null)throw Error(p$2(387));s=i.pendingProps,tt=i.memoizedState,et=tt.element,bh(o,i),gh(i,s,null,a);var nt=i.memoizedState;if(s=nt.element,tt.isDehydrated)if(tt={element:s,isDehydrated:!1,cache:nt.cache,pendingSuspenseBoundaries:nt.pendingSuspenseBoundaries,transitions:nt.transitions},i.updateQueue.baseState=tt,i.memoizedState=tt,i.flags&256){et=Ki(Error(p$2(423)),i),i=mj(o,i,s,a,et);break e}else if(s!==et){et=Ki(Error(p$2(424)),i),i=mj(o,i,s,a,et);break e}else for(yg=Lf(i.stateNode.containerInfo.firstChild),xg=i,I$1=!0,zg=null,a=Ch(i,null,s,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ig(),s===et){i=$i(o,i,a);break e}Yi(o,i,s,a)}i=i.child}return i;case 5:return Kh(i),o===null&&Eg(i),s=i.type,et=i.pendingProps,tt=o!==null?o.memoizedProps:null,nt=et.children,Ef(s,et)?nt=null:tt!==null&&Ef(s,tt)&&(i.flags|=32),hj(o,i),Yi(o,i,nt,a),i.child;case 6:return o===null&&Eg(i),null;case 13:return pj(o,i,a);case 4:return Ih(i,i.stateNode.containerInfo),s=i.pendingProps,o===null?i.child=Bh(i,null,s,a):Yi(o,i,s,a),i.child;case 11:return s=i.type,et=i.pendingProps,et=i.elementType===s?et:Lg(s,et),Zi(o,i,s,et,a);case 7:return Yi(o,i,i.pendingProps,a),i.child;case 8:return Yi(o,i,i.pendingProps.children,a),i.child;case 12:return Yi(o,i,i.pendingProps.children,a),i.child;case 10:e:{if(s=i.type._context,et=i.pendingProps,tt=i.memoizedProps,nt=et.value,G$1(Mg,s._currentValue),s._currentValue=nt,tt!==null)if(He$1(tt.value,nt)){if(tt.children===et.children&&!Wf.current){i=$i(o,i,a);break e}}else for(tt=i.child,tt!==null&&(tt.return=i);tt!==null;){var rt=tt.dependencies;if(rt!==null){nt=tt.child;for(var ot=rt.firstContext;ot!==null;){if(ot.context===s){if(tt.tag===1){ot=ch(-1,a&-a),ot.tag=2;var it=tt.updateQueue;if(it!==null){it=it.shared;var lt=it.pending;lt===null?ot.next=ot:(ot.next=lt.next,lt.next=ot),it.pending=ot}}tt.lanes|=a,ot=tt.alternate,ot!==null&&(ot.lanes|=a),Sg(tt.return,a,i),rt.lanes|=a;break}ot=ot.next}}else if(tt.tag===10)nt=tt.type===i.type?null:tt.child;else if(tt.tag===18){if(nt=tt.return,nt===null)throw Error(p$2(341));nt.lanes|=a,rt=nt.alternate,rt!==null&&(rt.lanes|=a),Sg(nt,a,i),nt=tt.sibling}else nt=tt.child;if(nt!==null)nt.return=tt;else for(nt=tt;nt!==null;){if(nt===i){nt=null;break}if(tt=nt.sibling,tt!==null){tt.return=nt.return,nt=tt;break}nt=nt.return}tt=nt}Yi(o,i,et.children,a),i=i.child}return i;case 9:return et=i.type,s=i.pendingProps.children,Tg(i,a),et=Vg(et),s=s(et),i.flags|=1,Yi(o,i,s,a),i.child;case 14:return s=i.type,et=Lg(s,i.pendingProps),et=Lg(s.type,et),aj(o,i,s,et,a);case 15:return cj(o,i,i.type,i.pendingProps,a);case 17:return s=i.type,et=i.pendingProps,et=i.elementType===s?et:Lg(s,et),jj(o,i),i.tag=1,Zf(s)?(o=!0,cg(i)):o=!1,Tg(i,a),ph(i,s,et),rh(i,s,et,a),kj(null,i,s,!0,o,a);case 19:return yj(o,i,a);case 22:return ej(o,i,a)}throw Error(p$2(156,i.tag))};function Gk(o,i){return ac(o,i)}function al(o,i,a,s){this.tag=o,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bg(o,i,a,s){return new al(o,i,a,s)}function bj(o){return o=o.prototype,!(!o||!o.isReactComponent)}function $k(o){if(typeof o=="function")return bj(o)?1:0;if(o!=null){if(o=o.$$typeof,o===Da)return 11;if(o===Ga)return 14}return 2}function wh(o,i){var a=o.alternate;return a===null?(a=Bg(o.tag,i,o.key,o.mode),a.elementType=o.elementType,a.type=o.type,a.stateNode=o.stateNode,a.alternate=o,o.alternate=a):(a.pendingProps=i,a.type=o.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=o.flags&14680064,a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,i=o.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=o.sibling,a.index=o.index,a.ref=o.ref,a}function yh(o,i,a,s,et,tt){var nt=2;if(s=o,typeof o=="function")bj(o)&&(nt=1);else if(typeof o=="string")nt=5;else e:switch(o){case ya:return Ah(a.children,et,tt,i);case za:nt=8,et|=8;break;case Aa:return o=Bg(12,a,i,et|2),o.elementType=Aa,o.lanes=tt,o;case Ea:return o=Bg(13,a,i,et),o.elementType=Ea,o.lanes=tt,o;case Fa:return o=Bg(19,a,i,et),o.elementType=Fa,o.lanes=tt,o;case Ia:return qj(a,et,tt,i);default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case Ba:nt=10;break e;case Ca:nt=9;break e;case Da:nt=11;break e;case Ga:nt=14;break e;case Ha:nt=16,s=null;break e}throw Error(p$2(130,o==null?o:typeof o,""))}return i=Bg(nt,a,i,et),i.elementType=o,i.type=s,i.lanes=tt,i}function Ah(o,i,a,s){return o=Bg(7,o,s,i),o.lanes=a,o}function qj(o,i,a,s){return o=Bg(22,o,s,i),o.elementType=Ia,o.lanes=a,o.stateNode={isHidden:!1},o}function xh(o,i,a){return o=Bg(6,o,null,i),o.lanes=a,o}function zh(o,i,a){return i=Bg(4,o.children!==null?o.children:[],o.key,i),i.lanes=a,i.stateNode={containerInfo:o.containerInfo,pendingChildren:null,implementation:o.implementation},i}function bl(o,i,a,s,et){this.tag=i,this.containerInfo=o,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zc(0),this.expirationTimes=zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zc(0),this.identifierPrefix=s,this.onRecoverableError=et,this.mutableSourceEagerHydrationData=null}function cl(o,i,a,s,et,tt,nt,rt,ot){return o=new bl(o,i,a,rt,ot),i===1?(i=1,tt===!0&&(i|=8)):i=0,tt=Bg(3,null,null,i),o.current=tt,tt.stateNode=o,tt.memoizedState={element:s,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ah(tt),o}function dl(o,i,a){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wa,key:s==null?null:""+s,children:o,containerInfo:i,implementation:a}}function el(o){if(!o)return Vf;o=o._reactInternals;e:{if(Vb(o)!==o||o.tag!==1)throw Error(p$2(170));var i=o;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Zf(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(p$2(171))}if(o.tag===1){var a=o.type;if(Zf(a))return bg(o,a,i)}return i}function fl(o,i,a,s,et,tt,nt,rt,ot){return o=cl(a,s,!0,o,et,tt,nt,rt,ot),o.context=el(null),a=o.current,s=L$1(),et=lh(a),tt=ch(s,et),tt.callback=i??null,dh(a,tt,et),o.current.lanes=et,Ac(o,et,s),Ek(o,s),o}function gl(o,i,a,s){var et=i.current,tt=L$1(),nt=lh(et);return a=el(a),i.context===null?i.context=a:i.pendingContext=a,i=ch(tt,nt),i.payload={element:o},s=s===void 0?null:s,s!==null&&(i.callback=s),o=dh(et,i,nt),o!==null&&(mh(o,et,nt,tt),eh(o,et,nt)),nt}function hl(o){if(o=o.current,!o.child)return null;switch(o.child.tag){case 5:return o.child.stateNode;default:return o.child.stateNode}}function il(o,i){if(o=o.memoizedState,o!==null&&o.dehydrated!==null){var a=o.retryLane;o.retryLane=a!==0&&a<i?a:i}}function jl(o,i){il(o,i),(o=o.alternate)&&il(o,i)}function kl(){return null}var ll=typeof reportError=="function"?reportError:function(o){console.error(o)};function ml(o){this._internalRoot=o}nl.prototype.render=ml.prototype.render=function(o){var i=this._internalRoot;if(i===null)throw Error(p$2(409));gl(o,i,null,null)};nl.prototype.unmount=ml.prototype.unmount=function(){var o=this._internalRoot;if(o!==null){this._internalRoot=null;var i=o.containerInfo;Sk(function(){gl(null,o,null,null)}),i[uf]=null}};function nl(o){this._internalRoot=o}nl.prototype.unstable_scheduleHydration=function(o){if(o){var i=Hc();o={blockedOn:null,target:o,priority:i};for(var a=0;a<Qc.length&&i!==0&&i<Qc[a].priority;a++);Qc.splice(a,0,o),a===0&&Vc(o)}};function ol(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11)}function pl(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11&&(o.nodeType!==8||o.nodeValue!==" react-mount-point-unstable "))}function ql(){}function rl(o,i,a,s,et){if(et){if(typeof s=="function"){var tt=s;s=function(){var it=hl(nt);tt.call(it)}}var nt=fl(i,s,o,0,null,!1,!1,"",ql);return o._reactRootContainer=nt,o[uf]=nt.current,sf(o.nodeType===8?o.parentNode:o),Sk(),nt}for(;et=o.lastChild;)o.removeChild(et);if(typeof s=="function"){var rt=s;s=function(){var it=hl(ot);rt.call(it)}}var ot=cl(o,0,!1,null,null,!1,!1,"",ql);return o._reactRootContainer=ot,o[uf]=ot.current,sf(o.nodeType===8?o.parentNode:o),Sk(function(){gl(i,ot,a,s)}),ot}function sl(o,i,a,s,et){var tt=a._reactRootContainer;if(tt){var nt=tt;if(typeof et=="function"){var rt=et;et=function(){var ot=hl(nt);rt.call(ot)}}gl(i,nt,o,et)}else nt=rl(a,i,o,et,s);return hl(nt)}Ec=function(o){switch(o.tag){case 3:var i=o.stateNode;if(i.current.memoizedState.isDehydrated){var a=tc(i.pendingLanes);a!==0&&(Cc(i,a|1),Ek(i,B$1()),!(K$1&6)&&(Hj=B$1()+500,jg()))}break;case 13:Sk(function(){var s=Zg(o,1);if(s!==null){var et=L$1();mh(s,o,1,et)}}),jl(o,1)}};Fc=function(o){if(o.tag===13){var i=Zg(o,134217728);if(i!==null){var a=L$1();mh(i,o,134217728,a)}jl(o,134217728)}};Gc=function(o){if(o.tag===13){var i=lh(o),a=Zg(o,i);if(a!==null){var s=L$1();mh(a,o,i,s)}jl(o,i)}};Hc=function(){return C};Ic=function(o,i){var a=C;try{return C=o,i()}finally{C=a}};yb=function(o,i,a){switch(i){case"input":if(bb(o,a),i=a.name,a.type==="radio"&&i!=null){for(a=o;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var s=a[i];if(s!==o&&s.form===o.form){var et=Db(s);if(!et)throw Error(p$2(90));Wa(s),bb(s,et)}}}break;case"textarea":ib(o,a);break;case"select":i=a.value,i!=null&&fb(o,!!a.multiple,i,!1)}};Gb=Rk;Hb=Sk;var tl={usingClientEntryPoint:!1,Events:[Cb,ue$1,Db,Eb,Fb,Rk]},ul={findFiberByHostInstance:Wc,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},vl={bundleType:ul.bundleType,version:ul.version,rendererPackageName:ul.rendererPackageName,rendererConfig:ul.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(o){return o=Zb(o),o===null?null:o.stateNode},findFiberByHostInstance:ul.findFiberByHostInstance||kl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{kc=wl.inject(vl),lc=wl}catch{}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tl;reactDom_production_min.createPortal=function(o,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ol(i))throw Error(p$2(200));return dl(o,i,null,a)};reactDom_production_min.createRoot=function(o,i){if(!ol(o))throw Error(p$2(299));var a=!1,s="",et=ll;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(s=i.identifierPrefix),i.onRecoverableError!==void 0&&(et=i.onRecoverableError)),i=cl(o,1,!1,null,null,a,!1,s,et),o[uf]=i.current,sf(o.nodeType===8?o.parentNode:o),new ml(i)};reactDom_production_min.findDOMNode=function(o){if(o==null)return null;if(o.nodeType===1)return o;var i=o._reactInternals;if(i===void 0)throw typeof o.render=="function"?Error(p$2(188)):(o=Object.keys(o).join(","),Error(p$2(268,o)));return o=Zb(i),o=o===null?null:o.stateNode,o};reactDom_production_min.flushSync=function(o){return Sk(o)};reactDom_production_min.hydrate=function(o,i,a){if(!pl(i))throw Error(p$2(200));return sl(null,o,i,!0,a)};reactDom_production_min.hydrateRoot=function(o,i,a){if(!ol(o))throw Error(p$2(405));var s=a!=null&&a.hydratedSources||null,et=!1,tt="",nt=ll;if(a!=null&&(a.unstable_strictMode===!0&&(et=!0),a.identifierPrefix!==void 0&&(tt=a.identifierPrefix),a.onRecoverableError!==void 0&&(nt=a.onRecoverableError)),i=fl(i,null,o,1,a??null,et,!1,tt,nt),o[uf]=i.current,sf(o),s)for(o=0;o<s.length;o++)a=s[o],et=a._getVersion,et=et(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,et]:i.mutableSourceEagerHydrationData.push(a,et);return new nl(i)};reactDom_production_min.render=function(o,i,a){if(!pl(i))throw Error(p$2(200));return sl(null,o,i,!1,a)};reactDom_production_min.unmountComponentAtNode=function(o){if(!pl(o))throw Error(p$2(40));return o._reactRootContainer?(Sk(function(){sl(null,null,o,!1,function(){o._reactRootContainer=null,o[uf]=null})}),!0):!1};reactDom_production_min.unstable_batchedUpdates=Rk;reactDom_production_min.unstable_renderSubtreeIntoContainer=function(o,i,a,s){if(!pl(a))throw Error(p$2(200));if(o==null||o._reactInternals===void 0)throw Error(p$2(38));return sl(o,i,a,!1,s)};reactDom_production_min.version="18.2.0-next-9e3b772b8-20220608";(function(o){function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(a){console.error(a)}}i(),o.exports=reactDom_production_min})(reactDom);var m$2=reactDomExports;client.createRoot=m$2.createRoot,client.hydrateRoot=m$2.hydrateRoot;const App$1="";/**
 * @remix-run/router v1.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _extends$2(){return _extends$2=Object.assign?Object.assign.bind():function(o){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(o[s]=a[s])}return o},_extends$2.apply(this,arguments)}var Action;(function(o){o.Pop="POP",o.Push="PUSH",o.Replace="REPLACE"})(Action||(Action={}));const PopStateEventType="popstate";function createBrowserHistory(o){o===void 0&&(o={});function i(s,et){let{pathname:tt,search:nt,hash:rt}=s.location;return createLocation("",{pathname:tt,search:nt,hash:rt},et.state&&et.state.usr||null,et.state&&et.state.key||"default")}function a(s,et){return typeof et=="string"?et:createPath(et)}return getUrlBasedHistory(i,a,null,o)}function invariant(o,i){if(o===!1||o===null||typeof o>"u")throw new Error(i)}function warning$1(o,i){if(!o){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function createKey(){return Math.random().toString(36).substr(2,8)}function getHistoryState(o,i){return{usr:o.state,key:o.key,idx:i}}function createLocation(o,i,a,s){return a===void 0&&(a=null),_extends$2({pathname:typeof o=="string"?o:o.pathname,search:"",hash:""},typeof i=="string"?parsePath(i):i,{state:a,key:i&&i.key||s||createKey()})}function createPath(o){let{pathname:i="/",search:a="",hash:s=""}=o;return a&&a!=="?"&&(i+=a.charAt(0)==="?"?a:"?"+a),s&&s!=="#"&&(i+=s.charAt(0)==="#"?s:"#"+s),i}function parsePath(o){let i={};if(o){let a=o.indexOf("#");a>=0&&(i.hash=o.substr(a),o=o.substr(0,a));let s=o.indexOf("?");s>=0&&(i.search=o.substr(s),o=o.substr(0,s)),o&&(i.pathname=o)}return i}function getUrlBasedHistory(o,i,a,s){s===void 0&&(s={});let{window:et=document.defaultView,v5Compat:tt=!1}=s,nt=et.history,rt=Action.Pop,ot=null,it=lt();it==null&&(it=0,nt.replaceState(_extends$2({},nt.state,{idx:it}),""));function lt(){return(nt.state||{idx:null}).idx}function st(){let yt=Action.Pop,ct=lt();if(ct!=null){let at=ct-it;rt=yt,it=ct,ot&&ot({action:rt,location:mt.location,delta:at})}else warning$1(!1,"You are trying to block a POP navigation to a location that was not created by @remix-run/router. The block will fail silently in production, but in general you should do all navigation with the router (instead of using window.history.pushState directly) to avoid this situation.")}function dt(yt,ct){rt=Action.Push;let at=createLocation(mt.location,yt,ct);a&&a(at,yt),it=lt()+1;let ut=getHistoryState(at,it),gt=mt.createHref(at);try{nt.pushState(ut,"",gt)}catch{et.location.assign(gt)}tt&&ot&&ot({action:rt,location:mt.location,delta:1})}function ht(yt,ct){rt=Action.Replace;let at=createLocation(mt.location,yt,ct);a&&a(at,yt),it=lt();let ut=getHistoryState(at,it),gt=mt.createHref(at);nt.replaceState(ut,"",gt),tt&&ot&&ot({action:rt,location:mt.location,delta:0})}function pt(yt){let ct=et.location.origin!=="null"?et.location.origin:et.location.href,at=typeof yt=="string"?yt:createPath(yt);return invariant(ct,"No window.location.(origin|href) available to create URL for href: "+at),new URL(at,ct)}let mt={get action(){return rt},get location(){return o(et,nt)},listen(yt){if(ot)throw new Error("A history only accepts one active listener");return et.addEventListener(PopStateEventType,st),ot=yt,()=>{et.removeEventListener(PopStateEventType,st),ot=null}},createHref(yt){return i(et,yt)},createURL:pt,encodeLocation(yt){let ct=pt(yt);return{pathname:ct.pathname,search:ct.search,hash:ct.hash}},push:dt,replace:ht,go(yt){return nt.go(yt)}};return mt}var ResultType;(function(o){o.data="data",o.deferred="deferred",o.redirect="redirect",o.error="error"})(ResultType||(ResultType={}));function matchRoutes(o,i,a){a===void 0&&(a="/");let s=typeof i=="string"?parsePath(i):i,et=stripBasename(s.pathname||"/",a);if(et==null)return null;let tt=flattenRoutes(o);rankRouteBranches(tt);let nt=null;for(let rt=0;nt==null&&rt<tt.length;++rt)nt=matchRouteBranch(tt[rt],safelyDecodeURI(et));return nt}function flattenRoutes(o,i,a,s){i===void 0&&(i=[]),a===void 0&&(a=[]),s===void 0&&(s="");let et=(tt,nt,rt)=>{let ot={relativePath:rt===void 0?tt.path||"":rt,caseSensitive:tt.caseSensitive===!0,childrenIndex:nt,route:tt};ot.relativePath.startsWith("/")&&(invariant(ot.relativePath.startsWith(s),'Absolute route path "'+ot.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),ot.relativePath=ot.relativePath.slice(s.length));let it=joinPaths([s,ot.relativePath]),lt=a.concat(ot);tt.children&&tt.children.length>0&&(invariant(tt.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+it+'".')),flattenRoutes(tt.children,i,lt,it)),!(tt.path==null&&!tt.index)&&i.push({path:it,score:computeScore(it,tt.index),routesMeta:lt})};return o.forEach((tt,nt)=>{var rt;if(tt.path===""||!((rt=tt.path)!=null&&rt.includes("?")))et(tt,nt);else for(let ot of explodeOptionalSegments(tt.path))et(tt,nt,ot)}),i}function explodeOptionalSegments(o){let i=o.split("/");if(i.length===0)return[];let[a,...s]=i,et=a.endsWith("?"),tt=a.replace(/\?$/,"");if(s.length===0)return et?[tt,""]:[tt];let nt=explodeOptionalSegments(s.join("/")),rt=[];return rt.push(...nt.map(ot=>ot===""?tt:[tt,ot].join("/"))),et&&rt.push(...nt),rt.map(ot=>o.startsWith("/")&&ot===""?"/":ot)}function rankRouteBranches(o){o.sort((i,a)=>i.score!==a.score?a.score-i.score:compareIndexes(i.routesMeta.map(s=>s.childrenIndex),a.routesMeta.map(s=>s.childrenIndex)))}const paramRe=/^:\w+$/,dynamicSegmentValue=3,indexRouteValue=2,emptySegmentValue=1,staticSegmentValue=10,splatPenalty=-2,isSplat=o=>o==="*";function computeScore(o,i){let a=o.split("/"),s=a.length;return a.some(isSplat)&&(s+=splatPenalty),i&&(s+=indexRouteValue),a.filter(et=>!isSplat(et)).reduce((et,tt)=>et+(paramRe.test(tt)?dynamicSegmentValue:tt===""?emptySegmentValue:staticSegmentValue),s)}function compareIndexes(o,i){return o.length===i.length&&o.slice(0,-1).every((s,et)=>s===i[et])?o[o.length-1]-i[i.length-1]:0}function matchRouteBranch(o,i){let{routesMeta:a}=o,s={},et="/",tt=[];for(let nt=0;nt<a.length;++nt){let rt=a[nt],ot=nt===a.length-1,it=et==="/"?i:i.slice(et.length)||"/",lt=matchPath({path:rt.relativePath,caseSensitive:rt.caseSensitive,end:ot},it);if(!lt)return null;Object.assign(s,lt.params);let st=rt.route;tt.push({params:s,pathname:joinPaths([et,lt.pathname]),pathnameBase:normalizePathname(joinPaths([et,lt.pathnameBase])),route:st}),lt.pathnameBase!=="/"&&(et=joinPaths([et,lt.pathnameBase]))}return tt}function matchPath(o,i){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[a,s]=compilePath(o.path,o.caseSensitive,o.end),et=i.match(a);if(!et)return null;let tt=et[0],nt=tt.replace(/(.)\/+$/,"$1"),rt=et.slice(1);return{params:s.reduce((it,lt,st)=>{if(lt==="*"){let dt=rt[st]||"";nt=tt.slice(0,tt.length-dt.length).replace(/(.)\/+$/,"$1")}return it[lt]=safelyDecodeURIComponent(rt[st]||"",lt),it},{}),pathname:tt,pathnameBase:nt,pattern:o}}function compilePath(o,i,a){i===void 0&&(i=!1),a===void 0&&(a=!0),warning(o==="*"||!o.endsWith("*")||o.endsWith("/*"),'Route path "'+o+'" will be treated as if it were '+('"'+o.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+o.replace(/\*$/,"/*")+'".'));let s=[],et="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(nt,rt)=>(s.push(rt),"/([^\\/]+)"));return o.endsWith("*")?(s.push("*"),et+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?et+="\\/*$":o!==""&&o!=="/"&&(et+="(?:(?=\\/|$))"),[new RegExp(et,i?void 0:"i"),s]}function safelyDecodeURI(o){try{return decodeURI(o)}catch(i){return warning(!1,'The URL path "'+o+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+i+").")),o}}function safelyDecodeURIComponent(o,i){try{return decodeURIComponent(o)}catch(a){return warning(!1,'The value for the URL param "'+i+'" will not be decoded because'+(' the string "'+o+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+a+").")),o}}function stripBasename(o,i){if(i==="/")return o;if(!o.toLowerCase().startsWith(i.toLowerCase()))return null;let a=i.endsWith("/")?i.length-1:i.length,s=o.charAt(a);return s&&s!=="/"?null:o.slice(a)||"/"}function warning(o,i){if(!o){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function resolvePath(o,i){i===void 0&&(i="/");let{pathname:a,search:s="",hash:et=""}=typeof o=="string"?parsePath(o):o;return{pathname:a?a.startsWith("/")?a:resolvePathname(a,i):i,search:normalizeSearch(s),hash:normalizeHash(et)}}function resolvePathname(o,i){let a=i.replace(/\/+$/,"").split("/");return o.split("/").forEach(et=>{et===".."?a.length>1&&a.pop():et!=="."&&a.push(et)}),a.length>1?a.join("/"):"/"}function getInvalidPathError(o,i,a,s){return"Cannot include a '"+o+"' character in a manually specified "+("`to."+i+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function getPathContributingMatches(o){return o.filter((i,a)=>a===0||i.route.path&&i.route.path.length>0)}function resolveTo(o,i,a,s){s===void 0&&(s=!1);let et;typeof o=="string"?et=parsePath(o):(et=_extends$2({},o),invariant(!et.pathname||!et.pathname.includes("?"),getInvalidPathError("?","pathname","search",et)),invariant(!et.pathname||!et.pathname.includes("#"),getInvalidPathError("#","pathname","hash",et)),invariant(!et.search||!et.search.includes("#"),getInvalidPathError("#","search","hash",et)));let tt=o===""||et.pathname==="",nt=tt?"/":et.pathname,rt;if(s||nt==null)rt=a;else{let st=i.length-1;if(nt.startsWith("..")){let dt=nt.split("/");for(;dt[0]==="..";)dt.shift(),st-=1;et.pathname=dt.join("/")}rt=st>=0?i[st]:"/"}let ot=resolvePath(et,rt),it=nt&&nt!=="/"&&nt.endsWith("/"),lt=(tt||nt===".")&&a.endsWith("/");return!ot.pathname.endsWith("/")&&(it||lt)&&(ot.pathname+="/"),ot}const joinPaths=o=>o.join("/").replace(/\/\/+/g,"/"),normalizePathname=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),normalizeSearch=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,normalizeHash=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;class ErrorResponse{constructor(i,a,s,et){et===void 0&&(et=!1),this.status=i,this.statusText=a||"",this.internal=et,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}}function isRouteErrorResponse(o){return o instanceof ErrorResponse}const validMutationMethodsArr=["post","put","patch","delete"];[...validMutationMethodsArr];/**
 * React Router v6.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _extends$1(){return _extends$1=Object.assign?Object.assign.bind():function(o){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(o[s]=a[s])}return o},_extends$1.apply(this,arguments)}function isPolyfill(o,i){return o===i&&(o!==0||1/o===1/i)||o!==o&&i!==i}const is=typeof Object.is=="function"?Object.is:isPolyfill,{useState,useEffect,useLayoutEffect,useDebugValue}=React$1;function useSyncExternalStore$2(o,i,a){const s=i(),[{inst:et},tt]=useState({inst:{value:s,getSnapshot:i}});return useLayoutEffect(()=>{et.value=s,et.getSnapshot=i,checkIfSnapshotChanged(et)&&tt({inst:et})},[o,s,i]),useEffect(()=>(checkIfSnapshotChanged(et)&&tt({inst:et}),o(()=>{checkIfSnapshotChanged(et)&&tt({inst:et})})),[o]),useDebugValue(s),s}function checkIfSnapshotChanged(o){const i=o.getSnapshot,a=o.value;try{const s=i();return!is(a,s)}catch{return!0}}function useSyncExternalStore$1(o,i,a){return i()}const canUseDOM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",isServerEnvironment=!canUseDOM,shim=isServerEnvironment?useSyncExternalStore$1:useSyncExternalStore$2;"useSyncExternalStore"in React$1&&(o=>o.useSyncExternalStore)(React$1);const DataRouterContext=reactExports.createContext(null),DataRouterStateContext=reactExports.createContext(null),NavigationContext=reactExports.createContext(null),LocationContext=reactExports.createContext(null),RouteContext=reactExports.createContext({outlet:null,matches:[]}),RouteErrorContext=reactExports.createContext(null);function useHref(o,i){let{relative:a}=i===void 0?{}:i;useInRouterContext()||invariant(!1);let{basename:s,navigator:et}=reactExports.useContext(NavigationContext),{hash:tt,pathname:nt,search:rt}=useResolvedPath(o,{relative:a}),ot=nt;return s!=="/"&&(ot=nt==="/"?s:joinPaths([s,nt])),et.createHref({pathname:ot,search:rt,hash:tt})}function useInRouterContext(){return reactExports.useContext(LocationContext)!=null}function useLocation(){return useInRouterContext()||invariant(!1),reactExports.useContext(LocationContext).location}function useNavigate(){useInRouterContext()||invariant(!1);let{basename:o,navigator:i}=reactExports.useContext(NavigationContext),{matches:a}=reactExports.useContext(RouteContext),{pathname:s}=useLocation(),et=JSON.stringify(getPathContributingMatches(a).map(rt=>rt.pathnameBase)),tt=reactExports.useRef(!1);return reactExports.useEffect(()=>{tt.current=!0}),reactExports.useCallback(function(rt,ot){if(ot===void 0&&(ot={}),!tt.current)return;if(typeof rt=="number"){i.go(rt);return}let it=resolveTo(rt,JSON.parse(et),s,ot.relative==="path");o!=="/"&&(it.pathname=it.pathname==="/"?o:joinPaths([o,it.pathname])),(ot.replace?i.replace:i.push)(it,ot.state,ot)},[o,i,et,s])}function useResolvedPath(o,i){let{relative:a}=i===void 0?{}:i,{matches:s}=reactExports.useContext(RouteContext),{pathname:et}=useLocation(),tt=JSON.stringify(getPathContributingMatches(s).map(nt=>nt.pathnameBase));return reactExports.useMemo(()=>resolveTo(o,JSON.parse(tt),et,a==="path"),[o,tt,et,a])}function useRoutes(o,i){useInRouterContext()||invariant(!1);let{navigator:a}=reactExports.useContext(NavigationContext),s=reactExports.useContext(DataRouterStateContext),{matches:et}=reactExports.useContext(RouteContext),tt=et[et.length-1],nt=tt?tt.params:{};tt&&tt.pathname;let rt=tt?tt.pathnameBase:"/";tt&&tt.route;let ot=useLocation(),it;if(i){var lt;let mt=typeof i=="string"?parsePath(i):i;rt==="/"||(lt=mt.pathname)!=null&&lt.startsWith(rt)||invariant(!1),it=mt}else it=ot;let st=it.pathname||"/",dt=rt==="/"?st:st.slice(rt.length)||"/",ht=matchRoutes(o,{pathname:dt}),pt=_renderMatches(ht&&ht.map(mt=>Object.assign({},mt,{params:Object.assign({},nt,mt.params),pathname:joinPaths([rt,a.encodeLocation?a.encodeLocation(mt.pathname).pathname:mt.pathname]),pathnameBase:mt.pathnameBase==="/"?rt:joinPaths([rt,a.encodeLocation?a.encodeLocation(mt.pathnameBase).pathname:mt.pathnameBase])})),et,s||void 0);return i&&pt?reactExports.createElement(LocationContext.Provider,{value:{location:_extends$1({pathname:"/",search:"",hash:"",state:null,key:"default"},it),navigationType:Action.Pop}},pt):pt}function DefaultErrorElement(){let o=useRouteError(),i=isRouteErrorResponse(o)?o.status+" "+o.statusText:o instanceof Error?o.message:JSON.stringify(o),a=o instanceof Error?o.stack:null,s="rgba(200,200,200, 0.5)",et={padding:"0.5rem",backgroundColor:s},tt={padding:"2px 4px",backgroundColor:s};return reactExports.createElement(reactExports.Fragment,null,reactExports.createElement("h2",null,"Unhandled Thrown Error!"),reactExports.createElement("h3",{style:{fontStyle:"italic"}},i),a?reactExports.createElement("pre",{style:et},a):null,reactExports.createElement("p",null,"💿 Hey developer 👋"),reactExports.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",reactExports.createElement("code",{style:tt},"errorElement")," props on ",reactExports.createElement("code",{style:tt},"<Route>")))}class RenderErrorBoundary extends reactExports.Component{constructor(i){super(i),this.state={location:i.location,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,a){return a.location!==i.location?{error:i.error,location:i.location}:{error:i.error||a.error,location:a.location}}componentDidCatch(i,a){console.error("React Router caught the following error during render",i,a)}render(){return this.state.error?reactExports.createElement(RouteContext.Provider,{value:this.props.routeContext},reactExports.createElement(RouteErrorContext.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function RenderedRoute(o){let{routeContext:i,match:a,children:s}=o,et=reactExports.useContext(DataRouterContext);return et&&et.static&&et.staticContext&&a.route.errorElement&&(et.staticContext._deepestRenderedBoundaryId=a.route.id),reactExports.createElement(RouteContext.Provider,{value:i},s)}function _renderMatches(o,i,a){if(i===void 0&&(i=[]),o==null)if(a!=null&&a.errors)o=a.matches;else return null;let s=o,et=a==null?void 0:a.errors;if(et!=null){let tt=s.findIndex(nt=>nt.route.id&&(et==null?void 0:et[nt.route.id]));tt>=0||invariant(!1),s=s.slice(0,Math.min(s.length,tt+1))}return s.reduceRight((tt,nt,rt)=>{let ot=nt.route.id?et==null?void 0:et[nt.route.id]:null,it=a?nt.route.errorElement||reactExports.createElement(DefaultErrorElement,null):null,lt=i.concat(s.slice(0,rt+1)),st=()=>reactExports.createElement(RenderedRoute,{match:nt,routeContext:{outlet:tt,matches:lt}},ot?it:nt.route.element!==void 0?nt.route.element:tt);return a&&(nt.route.errorElement||rt===0)?reactExports.createElement(RenderErrorBoundary,{location:a.location,component:it,error:ot,children:st(),routeContext:{outlet:null,matches:lt}}):st()},null)}var DataRouterHook$1;(function(o){o.UseBlocker="useBlocker",o.UseRevalidator="useRevalidator"})(DataRouterHook$1||(DataRouterHook$1={}));var DataRouterStateHook$1;(function(o){o.UseLoaderData="useLoaderData",o.UseActionData="useActionData",o.UseRouteError="useRouteError",o.UseNavigation="useNavigation",o.UseRouteLoaderData="useRouteLoaderData",o.UseMatches="useMatches",o.UseRevalidator="useRevalidator"})(DataRouterStateHook$1||(DataRouterStateHook$1={}));function useDataRouterState(o){let i=reactExports.useContext(DataRouterStateContext);return i||invariant(!1),i}function useRouteContext(o){let i=reactExports.useContext(RouteContext);return i||invariant(!1),i}function useCurrentRouteId(o){let i=useRouteContext(),a=i.matches[i.matches.length-1];return a.route.id||invariant(!1),a.route.id}function useRouteError(){var o;let i=reactExports.useContext(RouteErrorContext),a=useDataRouterState(DataRouterStateHook$1.UseRouteError),s=useCurrentRouteId(DataRouterStateHook$1.UseRouteError);return i||((o=a.errors)==null?void 0:o[s])}function Route(o){invariant(!1)}function Router(o){let{basename:i="/",children:a=null,location:s,navigationType:et=Action.Pop,navigator:tt,static:nt=!1}=o;useInRouterContext()&&invariant(!1);let rt=i.replace(/^\/*/,"/"),ot=reactExports.useMemo(()=>({basename:rt,navigator:tt,static:nt}),[rt,tt,nt]);typeof s=="string"&&(s=parsePath(s));let{pathname:it="/",search:lt="",hash:st="",state:dt=null,key:ht="default"}=s,pt=reactExports.useMemo(()=>{let mt=stripBasename(it,rt);return mt==null?null:{pathname:mt,search:lt,hash:st,state:dt,key:ht}},[rt,it,lt,st,dt,ht]);return pt==null?null:reactExports.createElement(NavigationContext.Provider,{value:ot},reactExports.createElement(LocationContext.Provider,{children:a,value:{location:pt,navigationType:et}}))}function Routes(o){let{children:i,location:a}=o,s=reactExports.useContext(DataRouterContext),et=s&&!i?s.router.routes:createRoutesFromChildren(i);return useRoutes(et,a)}var AwaitRenderStatus;(function(o){o[o.pending=0]="pending",o[o.success=1]="success",o[o.error=2]="error"})(AwaitRenderStatus||(AwaitRenderStatus={}));new Promise(()=>{});function createRoutesFromChildren(o,i){i===void 0&&(i=[]);let a=[];return reactExports.Children.forEach(o,(s,et)=>{if(!reactExports.isValidElement(s))return;if(s.type===reactExports.Fragment){a.push.apply(a,createRoutesFromChildren(s.props.children,i));return}s.type!==Route&&invariant(!1),!s.props.index||!s.props.children||invariant(!1);let tt=[...i,et],nt={id:s.props.id||tt.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,hasErrorBoundary:s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle};s.props.children&&(nt.children=createRoutesFromChildren(s.props.children,tt)),a.push(nt)}),a}/**
 * React Router DOM v6.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _extends(){return _extends=Object.assign?Object.assign.bind():function(o){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(o[s]=a[s])}return o},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(o,i){if(o==null)return{};var a={},s=Object.keys(o),et,tt;for(tt=0;tt<s.length;tt++)et=s[tt],!(i.indexOf(et)>=0)&&(a[et]=o[et]);return a}function isModifiedEvent(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function shouldProcessLinkClick(o,i){return o.button===0&&(!i||i==="_self")&&!isModifiedEvent(o)}const _excluded=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function BrowserRouter(o){let{basename:i,children:a,window:s}=o,et=reactExports.useRef();et.current==null&&(et.current=createBrowserHistory({window:s,v5Compat:!0}));let tt=et.current,[nt,rt]=reactExports.useState({action:tt.action,location:tt.location});return reactExports.useLayoutEffect(()=>tt.listen(rt),[tt]),reactExports.createElement(Router,{basename:i,children:a,location:nt.location,navigationType:nt.action,navigator:tt})}const Link=reactExports.forwardRef(function(i,a){let{onClick:s,relative:et,reloadDocument:tt,replace:nt,state:rt,target:ot,to:it,preventScrollReset:lt}=i,st=_objectWithoutPropertiesLoose(i,_excluded),dt=useHref(it,{relative:et}),ht=useLinkClickHandler(it,{replace:nt,state:rt,target:ot,preventScrollReset:lt,relative:et});function pt(mt){s&&s(mt),mt.defaultPrevented||ht(mt)}return reactExports.createElement("a",_extends({},st,{href:dt,onClick:tt?s:pt,ref:a,target:ot}))});var DataRouterHook;(function(o){o.UseScrollRestoration="useScrollRestoration",o.UseSubmitImpl="useSubmitImpl",o.UseFetcher="useFetcher"})(DataRouterHook||(DataRouterHook={}));var DataRouterStateHook;(function(o){o.UseFetchers="useFetchers",o.UseScrollRestoration="useScrollRestoration"})(DataRouterStateHook||(DataRouterStateHook={}));function useLinkClickHandler(o,i){let{target:a,replace:s,state:et,preventScrollReset:tt,relative:nt}=i===void 0?{}:i,rt=useNavigate(),ot=useLocation(),it=useResolvedPath(o,{relative:nt});return reactExports.useCallback(lt=>{if(shouldProcessLinkClick(lt,a)){lt.preventDefault();let st=s!==void 0?s:createPath(ot)===createPath(it);rt(o,{replace:st,state:et,preventScrollReset:tt,relative:nt})}},[ot,rt,it,s,et,a,o,tt,nt])}const heading$1="_heading_1vq7o_1",innerBox$1="_innerBox_1vq7o_11",innerBoxBtn$1="_innerBoxBtn_1vq7o_23",footerTitle$1="_footerTitle_1vq7o_37",error$1="_error_1vq7o_53",loginSpan$1="_loginSpan_1vq7o_61",styles$3={heading:heading$1,innerBox:innerBox$1,innerBoxBtn:innerBoxBtn$1,footerTitle:footerTitle$1,error:error$1,loginSpan:loginSpan$1},styles$2={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const stringToByteArray$1=function(o){const i=[];let a=0;for(let s=0;s<o.length;s++){let et=o.charCodeAt(s);et<128?i[a++]=et:et<2048?(i[a++]=et>>6|192,i[a++]=et&63|128):(et&64512)===55296&&s+1<o.length&&(o.charCodeAt(s+1)&64512)===56320?(et=65536+((et&1023)<<10)+(o.charCodeAt(++s)&1023),i[a++]=et>>18|240,i[a++]=et>>12&63|128,i[a++]=et>>6&63|128,i[a++]=et&63|128):(i[a++]=et>>12|224,i[a++]=et>>6&63|128,i[a++]=et&63|128)}return i},byteArrayToString=function(o){const i=[];let a=0,s=0;for(;a<o.length;){const et=o[a++];if(et<128)i[s++]=String.fromCharCode(et);else if(et>191&&et<224){const tt=o[a++];i[s++]=String.fromCharCode((et&31)<<6|tt&63)}else if(et>239&&et<365){const tt=o[a++],nt=o[a++],rt=o[a++],ot=((et&7)<<18|(tt&63)<<12|(nt&63)<<6|rt&63)-65536;i[s++]=String.fromCharCode(55296+(ot>>10)),i[s++]=String.fromCharCode(56320+(ot&1023))}else{const tt=o[a++],nt=o[a++];i[s++]=String.fromCharCode((et&15)<<12|(tt&63)<<6|nt&63)}}return i.join("")},base64={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(o,i){if(!Array.isArray(o))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=i?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let et=0;et<o.length;et+=3){const tt=o[et],nt=et+1<o.length,rt=nt?o[et+1]:0,ot=et+2<o.length,it=ot?o[et+2]:0,lt=tt>>2,st=(tt&3)<<4|rt>>4;let dt=(rt&15)<<2|it>>6,ht=it&63;ot||(ht=64,nt||(dt=64)),s.push(a[lt],a[st],a[dt],a[ht])}return s.join("")},encodeString(o,i){return this.HAS_NATIVE_SUPPORT&&!i?btoa(o):this.encodeByteArray(stringToByteArray$1(o),i)},decodeString(o,i){return this.HAS_NATIVE_SUPPORT&&!i?atob(o):byteArrayToString(this.decodeStringToByteArray(o,i))},decodeStringToByteArray(o,i){this.init_();const a=i?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let et=0;et<o.length;){const tt=a[o.charAt(et++)],rt=et<o.length?a[o.charAt(et)]:0;++et;const it=et<o.length?a[o.charAt(et)]:64;++et;const st=et<o.length?a[o.charAt(et)]:64;if(++et,tt==null||rt==null||it==null||st==null)throw Error();const dt=tt<<2|rt>>4;if(s.push(dt),it!==64){const ht=rt<<4&240|it>>2;if(s.push(ht),st!==64){const pt=it<<6&192|st;s.push(pt)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let o=0;o<this.ENCODED_VALS.length;o++)this.byteToCharMap_[o]=this.ENCODED_VALS.charAt(o),this.charToByteMap_[this.byteToCharMap_[o]]=o,this.byteToCharMapWebSafe_[o]=this.ENCODED_VALS_WEBSAFE.charAt(o),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[o]]=o,o>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(o)]=o,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(o)]=o)}}},base64Encode=function(o){const i=stringToByteArray$1(o);return base64.encodeByteArray(i,!0)},base64urlEncodeWithoutPadding=function(o){return base64Encode(o).replace(/\./g,"")},base64Decode=function(o){try{return base64.decodeString(o,!0)}catch(i){console.error("base64Decode failed: ",i)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getGlobal(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const getDefaultsFromGlobal=()=>getGlobal().__FIREBASE_DEFAULTS__,getDefaultsFromEnvVariable=()=>{if(typeof process>"u"||typeof process.env>"u")return;const o={}.__FIREBASE_DEFAULTS__;if(o)return JSON.parse(o)},getDefaultsFromCookie=()=>{if(typeof document>"u")return;let o;try{o=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const i=o&&base64Decode(o[1]);return i&&JSON.parse(i)},getDefaults=()=>{try{return getDefaultsFromGlobal()||getDefaultsFromEnvVariable()||getDefaultsFromCookie()}catch(o){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${o}`);return}},getDefaultEmulatorHost=o=>{var i,a;return(a=(i=getDefaults())===null||i===void 0?void 0:i.emulatorHosts)===null||a===void 0?void 0:a[o]},getDefaultAppConfig=()=>{var o;return(o=getDefaults())===null||o===void 0?void 0:o.config},getExperimentalSetting=o=>{var i;return(i=getDefaults())===null||i===void 0?void 0:i[`_${o}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Deferred{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((i,a)=>{this.resolve=i,this.reject=a})}wrapCallback(i){return(a,s)=>{a?this.reject(a):this.resolve(s),typeof i=="function"&&(this.promise.catch(()=>{}),i.length===1?i(a):i(a,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getUA(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function isMobileCordova(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA())}function isBrowserExtension(){const o=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof o=="object"&&o.id!==void 0}function isReactNative(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function isIE(){const o=getUA();return o.indexOf("MSIE ")>=0||o.indexOf("Trident/")>=0}function isIndexedDBAvailable(){try{return typeof indexedDB=="object"}catch{return!1}}function validateIndexedDBOpenable(){return new Promise((o,i)=>{try{let a=!0;const s="validate-browser-context-for-indexeddb-analytics-module",et=self.indexedDB.open(s);et.onsuccess=()=>{et.result.close(),a||self.indexedDB.deleteDatabase(s),o(!0)},et.onupgradeneeded=()=>{a=!1},et.onerror=()=>{var tt;i(((tt=et.error)===null||tt===void 0?void 0:tt.message)||"")}}catch(a){i(a)}})}function areCookiesEnabled(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ERROR_NAME="FirebaseError";class FirebaseError extends Error{constructor(i,a,s){super(a),this.code=i,this.customData=s,this.name=ERROR_NAME,Object.setPrototypeOf(this,FirebaseError.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ErrorFactory.prototype.create)}}class ErrorFactory{constructor(i,a,s){this.service=i,this.serviceName=a,this.errors=s}create(i,...a){const s=a[0]||{},et=`${this.service}/${i}`,tt=this.errors[i],nt=tt?replaceTemplate(tt,s):"Error",rt=`${this.serviceName}: ${nt} (${et}).`;return new FirebaseError(et,rt,s)}}function replaceTemplate(o,i){return o.replace(PATTERN,(a,s)=>{const et=i[s];return et!=null?String(et):`<${s}?>`})}const PATTERN=/\{\$([^}]+)}/g;function isEmpty(o){for(const i in o)if(Object.prototype.hasOwnProperty.call(o,i))return!1;return!0}function deepEqual(o,i){if(o===i)return!0;const a=Object.keys(o),s=Object.keys(i);for(const et of a){if(!s.includes(et))return!1;const tt=o[et],nt=i[et];if(isObject(tt)&&isObject(nt)){if(!deepEqual(tt,nt))return!1}else if(tt!==nt)return!1}for(const et of s)if(!a.includes(et))return!1;return!0}function isObject(o){return o!==null&&typeof o=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function querystring(o){const i=[];for(const[a,s]of Object.entries(o))Array.isArray(s)?s.forEach(et=>{i.push(encodeURIComponent(a)+"="+encodeURIComponent(et))}):i.push(encodeURIComponent(a)+"="+encodeURIComponent(s));return i.length?"&"+i.join("&"):""}function querystringDecode(o){const i={};return o.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[et,tt]=s.split("=");i[decodeURIComponent(et)]=decodeURIComponent(tt)}}),i}function extractQuerystring(o){const i=o.indexOf("?");if(!i)return"";const a=o.indexOf("#",i);return o.substring(i,a>0?a:void 0)}function createSubscribe(o,i){const a=new ObserverProxy(o,i);return a.subscribe.bind(a)}class ObserverProxy{constructor(i,a){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=a,this.task.then(()=>{i(this)}).catch(s=>{this.error(s)})}next(i){this.forEachObserver(a=>{a.next(i)})}error(i){this.forEachObserver(a=>{a.error(i)}),this.close(i)}complete(){this.forEachObserver(i=>{i.complete()}),this.close()}subscribe(i,a,s){let et;if(i===void 0&&a===void 0&&s===void 0)throw new Error("Missing Observer.");implementsAnyMethods(i,["next","error","complete"])?et=i:et={next:i,error:a,complete:s},et.next===void 0&&(et.next=noop),et.error===void 0&&(et.error=noop),et.complete===void 0&&(et.complete=noop);const tt=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?et.error(this.finalError):et.complete()}catch{}}),this.observers.push(et),tt}unsubscribeOne(i){this.observers===void 0||this.observers[i]===void 0||(delete this.observers[i],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(i){if(!this.finalized)for(let a=0;a<this.observers.length;a++)this.sendOne(a,i)}sendOne(i,a){this.task.then(()=>{if(this.observers!==void 0&&this.observers[i]!==void 0)try{a(this.observers[i])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(i){this.finalized||(this.finalized=!0,i!==void 0&&(this.finalError=i),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function implementsAnyMethods(o,i){if(typeof o!="object"||o===null)return!1;for(const a of i)if(a in o&&typeof o[a]=="function")return!0;return!1}function noop(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DEFAULT_INTERVAL_MILLIS=1e3,DEFAULT_BACKOFF_FACTOR=2,MAX_VALUE_MILLIS=4*60*60*1e3,RANDOM_FACTOR=.5;function calculateBackoffMillis(o,i=DEFAULT_INTERVAL_MILLIS,a=DEFAULT_BACKOFF_FACTOR){const s=i*Math.pow(a,o),et=Math.round(RANDOM_FACTOR*s*(Math.random()-.5)*2);return Math.min(MAX_VALUE_MILLIS,s+et)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getModularInstance(o){return o&&o._delegate?o._delegate:o}class Component{constructor(i,a,s){this.name=i,this.instanceFactory=a,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(i){return this.instantiationMode=i,this}setMultipleInstances(i){return this.multipleInstances=i,this}setServiceProps(i){return this.serviceProps=i,this}setInstanceCreatedCallback(i){return this.onInstanceCreated=i,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DEFAULT_ENTRY_NAME$1="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Provider{constructor(i,a){this.name=i,this.container=a,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(i){const a=this.normalizeInstanceIdentifier(i);if(!this.instancesDeferred.has(a)){const s=new Deferred;if(this.instancesDeferred.set(a,s),this.isInitialized(a)||this.shouldAutoInitialize())try{const et=this.getOrInitializeService({instanceIdentifier:a});et&&s.resolve(et)}catch{}}return this.instancesDeferred.get(a).promise}getImmediate(i){var a;const s=this.normalizeInstanceIdentifier(i==null?void 0:i.identifier),et=(a=i==null?void 0:i.optional)!==null&&a!==void 0?a:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(tt){if(et)return null;throw tt}else{if(et)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(i){if(i.name!==this.name)throw Error(`Mismatching Component ${i.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=i,!!this.shouldAutoInitialize()){if(isComponentEager(i))try{this.getOrInitializeService({instanceIdentifier:DEFAULT_ENTRY_NAME$1})}catch{}for(const[a,s]of this.instancesDeferred.entries()){const et=this.normalizeInstanceIdentifier(a);try{const tt=this.getOrInitializeService({instanceIdentifier:et});s.resolve(tt)}catch{}}}}clearInstance(i=DEFAULT_ENTRY_NAME$1){this.instancesDeferred.delete(i),this.instancesOptions.delete(i),this.instances.delete(i)}async delete(){const i=Array.from(this.instances.values());await Promise.all([...i.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...i.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return this.component!=null}isInitialized(i=DEFAULT_ENTRY_NAME$1){return this.instances.has(i)}getOptions(i=DEFAULT_ENTRY_NAME$1){return this.instancesOptions.get(i)||{}}initialize(i={}){const{options:a={}}=i,s=this.normalizeInstanceIdentifier(i.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const et=this.getOrInitializeService({instanceIdentifier:s,options:a});for(const[tt,nt]of this.instancesDeferred.entries()){const rt=this.normalizeInstanceIdentifier(tt);s===rt&&nt.resolve(et)}return et}onInit(i,a){var s;const et=this.normalizeInstanceIdentifier(a),tt=(s=this.onInitCallbacks.get(et))!==null&&s!==void 0?s:new Set;tt.add(i),this.onInitCallbacks.set(et,tt);const nt=this.instances.get(et);return nt&&i(nt,et),()=>{tt.delete(i)}}invokeOnInitCallbacks(i,a){const s=this.onInitCallbacks.get(a);if(s)for(const et of s)try{et(i,a)}catch{}}getOrInitializeService({instanceIdentifier:i,options:a={}}){let s=this.instances.get(i);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:normalizeIdentifierForFactory(i),options:a}),this.instances.set(i,s),this.instancesOptions.set(i,a),this.invokeOnInitCallbacks(s,i),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,i,s)}catch{}return s||null}normalizeInstanceIdentifier(i=DEFAULT_ENTRY_NAME$1){return this.component?this.component.multipleInstances?i:DEFAULT_ENTRY_NAME$1:i}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function normalizeIdentifierForFactory(o){return o===DEFAULT_ENTRY_NAME$1?void 0:o}function isComponentEager(o){return o.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ComponentContainer{constructor(i){this.name=i,this.providers=new Map}addComponent(i){const a=this.getProvider(i.name);if(a.isComponentSet())throw new Error(`Component ${i.name} has already been registered with ${this.name}`);a.setComponent(i)}addOrOverwriteComponent(i){this.getProvider(i.name).isComponentSet()&&this.providers.delete(i.name),this.addComponent(i)}getProvider(i){if(this.providers.has(i))return this.providers.get(i);const a=new Provider(i,this);return this.providers.set(i,a),a}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var LogLevel;(function(o){o[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT"})(LogLevel||(LogLevel={}));const levelStringToEnum={debug:LogLevel.DEBUG,verbose:LogLevel.VERBOSE,info:LogLevel.INFO,warn:LogLevel.WARN,error:LogLevel.ERROR,silent:LogLevel.SILENT},defaultLogLevel=LogLevel.INFO,ConsoleMethod={[LogLevel.DEBUG]:"log",[LogLevel.VERBOSE]:"log",[LogLevel.INFO]:"info",[LogLevel.WARN]:"warn",[LogLevel.ERROR]:"error"},defaultLogHandler=(o,i,...a)=>{if(i<o.logLevel)return;const s=new Date().toISOString(),et=ConsoleMethod[i];if(et)console[et](`[${s}]  ${o.name}:`,...a);else throw new Error(`Attempted to log a message with an invalid logType (value: ${i})`)};class Logger{constructor(i){this.name=i,this._logLevel=defaultLogLevel,this._logHandler=defaultLogHandler,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(i){if(!(i in LogLevel))throw new TypeError(`Invalid value "${i}" assigned to \`logLevel\``);this._logLevel=i}setLogLevel(i){this._logLevel=typeof i=="string"?levelStringToEnum[i]:i}get logHandler(){return this._logHandler}set logHandler(i){if(typeof i!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=i}get userLogHandler(){return this._userLogHandler}set userLogHandler(i){this._userLogHandler=i}debug(...i){this._userLogHandler&&this._userLogHandler(this,LogLevel.DEBUG,...i),this._logHandler(this,LogLevel.DEBUG,...i)}log(...i){this._userLogHandler&&this._userLogHandler(this,LogLevel.VERBOSE,...i),this._logHandler(this,LogLevel.VERBOSE,...i)}info(...i){this._userLogHandler&&this._userLogHandler(this,LogLevel.INFO,...i),this._logHandler(this,LogLevel.INFO,...i)}warn(...i){this._userLogHandler&&this._userLogHandler(this,LogLevel.WARN,...i),this._logHandler(this,LogLevel.WARN,...i)}error(...i){this._userLogHandler&&this._userLogHandler(this,LogLevel.ERROR,...i),this._logHandler(this,LogLevel.ERROR,...i)}}const instanceOfAny=(o,i)=>i.some(a=>o instanceof a);let idbProxyableTypes,cursorAdvanceMethods;function getIdbProxyableTypes(){return idbProxyableTypes||(idbProxyableTypes=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function getCursorAdvanceMethods(){return cursorAdvanceMethods||(cursorAdvanceMethods=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cursorRequestMap=new WeakMap,transactionDoneMap=new WeakMap,transactionStoreNamesMap=new WeakMap,transformCache=new WeakMap,reverseTransformCache=new WeakMap;function promisifyRequest(o){const i=new Promise((a,s)=>{const et=()=>{o.removeEventListener("success",tt),o.removeEventListener("error",nt)},tt=()=>{a(wrap(o.result)),et()},nt=()=>{s(o.error),et()};o.addEventListener("success",tt),o.addEventListener("error",nt)});return i.then(a=>{a instanceof IDBCursor&&cursorRequestMap.set(a,o)}).catch(()=>{}),reverseTransformCache.set(i,o),i}function cacheDonePromiseForTransaction(o){if(transactionDoneMap.has(o))return;const i=new Promise((a,s)=>{const et=()=>{o.removeEventListener("complete",tt),o.removeEventListener("error",nt),o.removeEventListener("abort",nt)},tt=()=>{a(),et()},nt=()=>{s(o.error||new DOMException("AbortError","AbortError")),et()};o.addEventListener("complete",tt),o.addEventListener("error",nt),o.addEventListener("abort",nt)});transactionDoneMap.set(o,i)}let idbProxyTraps={get(o,i,a){if(o instanceof IDBTransaction){if(i==="done")return transactionDoneMap.get(o);if(i==="objectStoreNames")return o.objectStoreNames||transactionStoreNamesMap.get(o);if(i==="store")return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return wrap(o[i])},set(o,i,a){return o[i]=a,!0},has(o,i){return o instanceof IDBTransaction&&(i==="done"||i==="store")?!0:i in o}};function replaceTraps(o){idbProxyTraps=o(idbProxyTraps)}function wrapFunction(o){return o===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(i,...a){const s=o.call(unwrap(this),i,...a);return transactionStoreNamesMap.set(s,i.sort?i.sort():[i]),wrap(s)}:getCursorAdvanceMethods().includes(o)?function(...i){return o.apply(unwrap(this),i),wrap(cursorRequestMap.get(this))}:function(...i){return wrap(o.apply(unwrap(this),i))}}function transformCachableValue(o){return typeof o=="function"?wrapFunction(o):(o instanceof IDBTransaction&&cacheDonePromiseForTransaction(o),instanceOfAny(o,getIdbProxyableTypes())?new Proxy(o,idbProxyTraps):o)}function wrap(o){if(o instanceof IDBRequest)return promisifyRequest(o);if(transformCache.has(o))return transformCache.get(o);const i=transformCachableValue(o);return i!==o&&(transformCache.set(o,i),reverseTransformCache.set(i,o)),i}const unwrap=o=>reverseTransformCache.get(o);function openDB(o,i,{blocked:a,upgrade:s,blocking:et,terminated:tt}={}){const nt=indexedDB.open(o,i),rt=wrap(nt);return s&&nt.addEventListener("upgradeneeded",ot=>{s(wrap(nt.result),ot.oldVersion,ot.newVersion,wrap(nt.transaction))}),a&&nt.addEventListener("blocked",()=>a()),rt.then(ot=>{tt&&ot.addEventListener("close",()=>tt()),et&&ot.addEventListener("versionchange",()=>et())}).catch(()=>{}),rt}const readMethods=["get","getKey","getAll","getAllKeys","count"],writeMethods=["put","add","delete","clear"],cachedMethods=new Map;function getMethod(o,i){if(!(o instanceof IDBDatabase&&!(i in o)&&typeof i=="string"))return;if(cachedMethods.get(i))return cachedMethods.get(i);const a=i.replace(/FromIndex$/,""),s=i!==a,et=writeMethods.includes(a);if(!(a in(s?IDBIndex:IDBObjectStore).prototype)||!(et||readMethods.includes(a)))return;const tt=async function(nt,...rt){const ot=this.transaction(nt,et?"readwrite":"readonly");let it=ot.store;return s&&(it=it.index(rt.shift())),(await Promise.all([it[a](...rt),et&&ot.done]))[0]};return cachedMethods.set(i,tt),tt}replaceTraps(o=>({...o,get:(i,a,s)=>getMethod(i,a)||o.get(i,a,s),has:(i,a)=>!!getMethod(i,a)||o.has(i,a)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PlatformLoggerServiceImpl{constructor(i){this.container=i}getPlatformInfoString(){return this.container.getProviders().map(a=>{if(isVersionServiceProvider(a)){const s=a.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(a=>a).join(" ")}}function isVersionServiceProvider(o){const i=o.getComponent();return(i==null?void 0:i.type)==="VERSION"}const name$o="@firebase/app",version$1$1="0.9.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const logger$1=new Logger("@firebase/app"),name$n="@firebase/app-compat",name$m="@firebase/analytics-compat",name$l="@firebase/analytics",name$k="@firebase/app-check-compat",name$j="@firebase/app-check",name$i="@firebase/auth",name$h="@firebase/auth-compat",name$g="@firebase/database",name$f="@firebase/database-compat",name$e="@firebase/functions",name$d="@firebase/functions-compat",name$c="@firebase/installations",name$b="@firebase/installations-compat",name$a="@firebase/messaging",name$9="@firebase/messaging-compat",name$8="@firebase/performance",name$7="@firebase/performance-compat",name$6="@firebase/remote-config",name$5="@firebase/remote-config-compat",name$4="@firebase/storage",name$3$1="@firebase/storage-compat",name$2$1="@firebase/firestore",name$1$1="@firebase/firestore-compat",name$p="firebase",version$4="9.16.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DEFAULT_ENTRY_NAME="[DEFAULT]",PLATFORM_LOG_STRING={[name$o]:"fire-core",[name$n]:"fire-core-compat",[name$l]:"fire-analytics",[name$m]:"fire-analytics-compat",[name$j]:"fire-app-check",[name$k]:"fire-app-check-compat",[name$i]:"fire-auth",[name$h]:"fire-auth-compat",[name$g]:"fire-rtdb",[name$f]:"fire-rtdb-compat",[name$e]:"fire-fn",[name$d]:"fire-fn-compat",[name$c]:"fire-iid",[name$b]:"fire-iid-compat",[name$a]:"fire-fcm",[name$9]:"fire-fcm-compat",[name$8]:"fire-perf",[name$7]:"fire-perf-compat",[name$6]:"fire-rc",[name$5]:"fire-rc-compat",[name$4]:"fire-gcs",[name$3$1]:"fire-gcs-compat",[name$2$1]:"fire-fst",[name$1$1]:"fire-fst-compat","fire-js":"fire-js",[name$p]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _apps=new Map,_components=new Map;function _addComponent(o,i){try{o.container.addComponent(i)}catch(a){logger$1.debug(`Component ${i.name} failed to register with FirebaseApp ${o.name}`,a)}}function _registerComponent(o){const i=o.name;if(_components.has(i))return logger$1.debug(`There were multiple attempts to register component ${i}.`),!1;_components.set(i,o);for(const a of _apps.values())_addComponent(a,o);return!0}function _getProvider(o,i){const a=o.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),o.container.getProvider(i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ERRORS$1={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ERROR_FACTORY$2=new ErrorFactory("app","Firebase",ERRORS$1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FirebaseAppImpl{constructor(i,a,s){this._isDeleted=!1,this._options=Object.assign({},i),this._config=Object.assign({},a),this._name=a.name,this._automaticDataCollectionEnabled=a.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Component("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(i){this.checkDestroyed(),this._automaticDataCollectionEnabled=i}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(i){this._isDeleted=i}checkDestroyed(){if(this.isDeleted)throw ERROR_FACTORY$2.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SDK_VERSION=version$4;function initializeApp(o,i={}){let a=o;typeof i!="object"&&(i={name:i});const s=Object.assign({name:DEFAULT_ENTRY_NAME,automaticDataCollectionEnabled:!1},i),et=s.name;if(typeof et!="string"||!et)throw ERROR_FACTORY$2.create("bad-app-name",{appName:String(et)});if(a||(a=getDefaultAppConfig()),!a)throw ERROR_FACTORY$2.create("no-options");const tt=_apps.get(et);if(tt){if(deepEqual(a,tt.options)&&deepEqual(s,tt.config))return tt;throw ERROR_FACTORY$2.create("duplicate-app",{appName:et})}const nt=new ComponentContainer(et);for(const ot of _components.values())nt.addComponent(ot);const rt=new FirebaseAppImpl(a,s,nt);return _apps.set(et,rt),rt}function getApp(o=DEFAULT_ENTRY_NAME){const i=_apps.get(o);if(!i&&o===DEFAULT_ENTRY_NAME)return initializeApp();if(!i)throw ERROR_FACTORY$2.create("no-app",{appName:o});return i}function registerVersion(o,i,a){var s;let et=(s=PLATFORM_LOG_STRING[o])!==null&&s!==void 0?s:o;a&&(et+=`-${a}`);const tt=et.match(/\s|\//),nt=i.match(/\s|\//);if(tt||nt){const rt=[`Unable to register library "${et}" with version "${i}":`];tt&&rt.push(`library name "${et}" contains illegal characters (whitespace or "/")`),tt&&nt&&rt.push("and"),nt&&rt.push(`version name "${i}" contains illegal characters (whitespace or "/")`),logger$1.warn(rt.join(" "));return}_registerComponent(new Component(`${et}-version`,()=>({library:et,version:i}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DB_NAME$1="firebase-heartbeat-database",DB_VERSION$1=1,STORE_NAME="firebase-heartbeat-store";let dbPromise$1=null;function getDbPromise$1(){return dbPromise$1||(dbPromise$1=openDB(DB_NAME$1,DB_VERSION$1,{upgrade:(o,i)=>{switch(i){case 0:o.createObjectStore(STORE_NAME)}}}).catch(o=>{throw ERROR_FACTORY$2.create("idb-open",{originalErrorMessage:o.message})})),dbPromise$1}async function readHeartbeatsFromIndexedDB(o){try{return(await getDbPromise$1()).transaction(STORE_NAME).objectStore(STORE_NAME).get(computeKey(o))}catch(i){if(i instanceof FirebaseError)logger$1.warn(i.message);else{const a=ERROR_FACTORY$2.create("idb-get",{originalErrorMessage:i==null?void 0:i.message});logger$1.warn(a.message)}}}async function writeHeartbeatsToIndexedDB(o,i){try{const s=(await getDbPromise$1()).transaction(STORE_NAME,"readwrite");return await s.objectStore(STORE_NAME).put(i,computeKey(o)),s.done}catch(a){if(a instanceof FirebaseError)logger$1.warn(a.message);else{const s=ERROR_FACTORY$2.create("idb-set",{originalErrorMessage:a==null?void 0:a.message});logger$1.warn(s.message)}}}function computeKey(o){return`${o.name}!${o.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MAX_HEADER_BYTES=1024,STORED_HEARTBEAT_RETENTION_MAX_MILLIS=30*24*60*60*1e3;class HeartbeatServiceImpl{constructor(i){this.container=i,this._heartbeatsCache=null;const a=this.container.getProvider("app").getImmediate();this._storage=new HeartbeatStorageImpl(a),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=getUTCDateString();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(et=>et.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(et=>{const tt=new Date(et.date).valueOf();return Date.now()-tt<=STORED_HEARTBEAT_RETENTION_MAX_MILLIS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const i=getUTCDateString(),{heartbeatsToSend:a,unsentEntries:s}=extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats),et=base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=i,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),et}}function getUTCDateString(){return new Date().toISOString().substring(0,10)}function extractHeartbeatsForHeader(o,i=MAX_HEADER_BYTES){const a=[];let s=o.slice();for(const et of o){const tt=a.find(nt=>nt.agent===et.agent);if(tt){if(tt.dates.push(et.date),countBytes(a)>i){tt.dates.pop();break}}else if(a.push({agent:et.agent,dates:[et.date]}),countBytes(a)>i){a.pop();break}s=s.slice(1)}return{heartbeatsToSend:a,unsentEntries:s}}class HeartbeatStorageImpl{constructor(i){this.app=i,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return isIndexedDBAvailable()?validateIndexedDBOpenable().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await readHeartbeatsFromIndexedDB(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(i){var a;if(await this._canUseIndexedDBPromise){const et=await this.read();return writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:(a=i.lastSentHeartbeatDate)!==null&&a!==void 0?a:et.lastSentHeartbeatDate,heartbeats:i.heartbeats})}else return}async add(i){var a;if(await this._canUseIndexedDBPromise){const et=await this.read();return writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:(a=i.lastSentHeartbeatDate)!==null&&a!==void 0?a:et.lastSentHeartbeatDate,heartbeats:[...et.heartbeats,...i.heartbeats]})}else return}}function countBytes(o){return base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:o})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function registerCoreComponents(o){_registerComponent(new Component("platform-logger",i=>new PlatformLoggerServiceImpl(i),"PRIVATE")),_registerComponent(new Component("heartbeat",i=>new HeartbeatServiceImpl(i),"PRIVATE")),registerVersion(name$o,version$1$1,o),registerVersion(name$o,version$1$1,"esm2017"),registerVersion("fire-js","")}registerCoreComponents("");var name$3="firebase",version$3="9.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */registerVersion(name$3,version$3,"app");const name$2="@firebase/installations",version$2="0.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PENDING_TIMEOUT_MS=1e4,PACKAGE_VERSION=`w:${version$2}`,INTERNAL_AUTH_VERSION="FIS_v2",INSTALLATIONS_API_URL="https://firebaseinstallations.googleapis.com/v1",TOKEN_EXPIRATION_BUFFER=60*60*1e3,SERVICE="installations",SERVICE_NAME="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ERROR_DESCRIPTION_MAP={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ERROR_FACTORY$1=new ErrorFactory(SERVICE,SERVICE_NAME,ERROR_DESCRIPTION_MAP);function isServerError(o){return o instanceof FirebaseError&&o.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getInstallationsEndpoint({projectId:o}){return`${INSTALLATIONS_API_URL}/projects/${o}/installations`}function extractAuthTokenInfoFromResponse(o){return{token:o.token,requestStatus:2,expiresIn:getExpiresInFromResponseExpiresIn(o.expiresIn),creationTime:Date.now()}}async function getErrorFromResponse(o,i){const s=(await i.json()).error;return ERROR_FACTORY$1.create("request-failed",{requestName:o,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function getHeaders$1({apiKey:o}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":o})}function getHeadersWithAuth(o,{refreshToken:i}){const a=getHeaders$1(o);return a.append("Authorization",getAuthorizationHeader(i)),a}async function retryIfServerError(o){const i=await o();return i.status>=500&&i.status<600?o():i}function getExpiresInFromResponseExpiresIn(o){return Number(o.replace("s","000"))}function getAuthorizationHeader(o){return`${INTERNAL_AUTH_VERSION} ${o}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function createInstallationRequest({appConfig:o,heartbeatServiceProvider:i},{fid:a}){const s=getInstallationsEndpoint(o),et=getHeaders$1(o),tt=i.getImmediate({optional:!0});if(tt){const it=await tt.getHeartbeatsHeader();it&&et.append("x-firebase-client",it)}const nt={fid:a,authVersion:INTERNAL_AUTH_VERSION,appId:o.appId,sdkVersion:PACKAGE_VERSION},rt={method:"POST",headers:et,body:JSON.stringify(nt)},ot=await retryIfServerError(()=>fetch(s,rt));if(ot.ok){const it=await ot.json();return{fid:it.fid||a,registrationStatus:2,refreshToken:it.refreshToken,authToken:extractAuthTokenInfoFromResponse(it.authToken)}}else throw await getErrorFromResponse("Create Installation",ot)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sleep(o){return new Promise(i=>{setTimeout(i,o)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bufferToBase64UrlSafe(o){return btoa(String.fromCharCode(...o)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VALID_FID_PATTERN=/^[cdef][\w-]{21}$/,INVALID_FID="";function generateFid(){try{const o=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(o),o[0]=112+o[0]%16;const a=encode(o);return VALID_FID_PATTERN.test(a)?a:INVALID_FID}catch{return INVALID_FID}}function encode(o){return bufferToBase64UrlSafe(o).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getKey(o){return`${o.appName}!${o.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fidChangeCallbacks=new Map;function fidChanged(o,i){const a=getKey(o);callFidChangeCallbacks(a,i),broadcastFidChange(a,i)}function callFidChangeCallbacks(o,i){const a=fidChangeCallbacks.get(o);if(a)for(const s of a)s(i)}function broadcastFidChange(o,i){const a=getBroadcastChannel();a&&a.postMessage({key:o,fid:i}),closeBroadcastChannel()}let broadcastChannel=null;function getBroadcastChannel(){return!broadcastChannel&&"BroadcastChannel"in self&&(broadcastChannel=new BroadcastChannel("[Firebase] FID Change"),broadcastChannel.onmessage=o=>{callFidChangeCallbacks(o.data.key,o.data.fid)}),broadcastChannel}function closeBroadcastChannel(){fidChangeCallbacks.size===0&&broadcastChannel&&(broadcastChannel.close(),broadcastChannel=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DATABASE_NAME="firebase-installations-database",DATABASE_VERSION=1,OBJECT_STORE_NAME="firebase-installations-store";let dbPromise=null;function getDbPromise(){return dbPromise||(dbPromise=openDB(DATABASE_NAME,DATABASE_VERSION,{upgrade:(o,i)=>{switch(i){case 0:o.createObjectStore(OBJECT_STORE_NAME)}}})),dbPromise}async function set(o,i){const a=getKey(o),et=(await getDbPromise()).transaction(OBJECT_STORE_NAME,"readwrite"),tt=et.objectStore(OBJECT_STORE_NAME),nt=await tt.get(a);return await tt.put(i,a),await et.done,(!nt||nt.fid!==i.fid)&&fidChanged(o,i.fid),i}async function remove(o){const i=getKey(o),s=(await getDbPromise()).transaction(OBJECT_STORE_NAME,"readwrite");await s.objectStore(OBJECT_STORE_NAME).delete(i),await s.done}async function update(o,i){const a=getKey(o),et=(await getDbPromise()).transaction(OBJECT_STORE_NAME,"readwrite"),tt=et.objectStore(OBJECT_STORE_NAME),nt=await tt.get(a),rt=i(nt);return rt===void 0?await tt.delete(a):await tt.put(rt,a),await et.done,rt&&(!nt||nt.fid!==rt.fid)&&fidChanged(o,rt.fid),rt}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function getInstallationEntry(o){let i;const a=await update(o.appConfig,s=>{const et=updateOrCreateInstallationEntry(s),tt=triggerRegistrationIfNecessary(o,et);return i=tt.registrationPromise,tt.installationEntry});return a.fid===INVALID_FID?{installationEntry:await i}:{installationEntry:a,registrationPromise:i}}function updateOrCreateInstallationEntry(o){const i=o||{fid:generateFid(),registrationStatus:0};return clearTimedOutRequest(i)}function triggerRegistrationIfNecessary(o,i){if(i.registrationStatus===0){if(!navigator.onLine){const et=Promise.reject(ERROR_FACTORY$1.create("app-offline"));return{installationEntry:i,registrationPromise:et}}const a={fid:i.fid,registrationStatus:1,registrationTime:Date.now()},s=registerInstallation(o,a);return{installationEntry:a,registrationPromise:s}}else return i.registrationStatus===1?{installationEntry:i,registrationPromise:waitUntilFidRegistration(o)}:{installationEntry:i}}async function registerInstallation(o,i){try{const a=await createInstallationRequest(o,i);return set(o.appConfig,a)}catch(a){throw isServerError(a)&&a.customData.serverCode===409?await remove(o.appConfig):await set(o.appConfig,{fid:i.fid,registrationStatus:0}),a}}async function waitUntilFidRegistration(o){let i=await updateInstallationRequest(o.appConfig);for(;i.registrationStatus===1;)await sleep(100),i=await updateInstallationRequest(o.appConfig);if(i.registrationStatus===0){const{installationEntry:a,registrationPromise:s}=await getInstallationEntry(o);return s||a}return i}function updateInstallationRequest(o){return update(o,i=>{if(!i)throw ERROR_FACTORY$1.create("installation-not-found");return clearTimedOutRequest(i)})}function clearTimedOutRequest(o){return hasInstallationRequestTimedOut(o)?{fid:o.fid,registrationStatus:0}:o}function hasInstallationRequestTimedOut(o){return o.registrationStatus===1&&o.registrationTime+PENDING_TIMEOUT_MS<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function generateAuthTokenRequest({appConfig:o,heartbeatServiceProvider:i},a){const s=getGenerateAuthTokenEndpoint(o,a),et=getHeadersWithAuth(o,a),tt=i.getImmediate({optional:!0});if(tt){const it=await tt.getHeartbeatsHeader();it&&et.append("x-firebase-client",it)}const nt={installation:{sdkVersion:PACKAGE_VERSION,appId:o.appId}},rt={method:"POST",headers:et,body:JSON.stringify(nt)},ot=await retryIfServerError(()=>fetch(s,rt));if(ot.ok){const it=await ot.json();return extractAuthTokenInfoFromResponse(it)}else throw await getErrorFromResponse("Generate Auth Token",ot)}function getGenerateAuthTokenEndpoint(o,{fid:i}){return`${getInstallationsEndpoint(o)}/${i}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function refreshAuthToken(o,i=!1){let a;const s=await update(o.appConfig,tt=>{if(!isEntryRegistered(tt))throw ERROR_FACTORY$1.create("not-registered");const nt=tt.authToken;if(!i&&isAuthTokenValid(nt))return tt;if(nt.requestStatus===1)return a=waitUntilAuthTokenRequest(o,i),tt;{if(!navigator.onLine)throw ERROR_FACTORY$1.create("app-offline");const rt=makeAuthTokenRequestInProgressEntry(tt);return a=fetchAuthTokenFromServer(o,rt),rt}});return a?await a:s.authToken}async function waitUntilAuthTokenRequest(o,i){let a=await updateAuthTokenRequest(o.appConfig);for(;a.authToken.requestStatus===1;)await sleep(100),a=await updateAuthTokenRequest(o.appConfig);const s=a.authToken;return s.requestStatus===0?refreshAuthToken(o,i):s}function updateAuthTokenRequest(o){return update(o,i=>{if(!isEntryRegistered(i))throw ERROR_FACTORY$1.create("not-registered");const a=i.authToken;return hasAuthTokenRequestTimedOut(a)?Object.assign(Object.assign({},i),{authToken:{requestStatus:0}}):i})}async function fetchAuthTokenFromServer(o,i){try{const a=await generateAuthTokenRequest(o,i),s=Object.assign(Object.assign({},i),{authToken:a});return await set(o.appConfig,s),a}catch(a){if(isServerError(a)&&(a.customData.serverCode===401||a.customData.serverCode===404))await remove(o.appConfig);else{const s=Object.assign(Object.assign({},i),{authToken:{requestStatus:0}});await set(o.appConfig,s)}throw a}}function isEntryRegistered(o){return o!==void 0&&o.registrationStatus===2}function isAuthTokenValid(o){return o.requestStatus===2&&!isAuthTokenExpired(o)}function isAuthTokenExpired(o){const i=Date.now();return i<o.creationTime||o.creationTime+o.expiresIn<i+TOKEN_EXPIRATION_BUFFER}function makeAuthTokenRequestInProgressEntry(o){const i={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},o),{authToken:i})}function hasAuthTokenRequestTimedOut(o){return o.requestStatus===1&&o.requestTime+PENDING_TIMEOUT_MS<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function getId(o){const i=o,{installationEntry:a,registrationPromise:s}=await getInstallationEntry(i);return s?s.catch(console.error):refreshAuthToken(i).catch(console.error),a.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function getToken(o,i=!1){const a=o;return await completeInstallationRegistration(a),(await refreshAuthToken(a,i)).token}async function completeInstallationRegistration(o){const{registrationPromise:i}=await getInstallationEntry(o);i&&await i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function extractAppConfig(o){if(!o||!o.options)throw getMissingValueError("App Configuration");if(!o.name)throw getMissingValueError("App Name");const i=["projectId","apiKey","appId"];for(const a of i)if(!o.options[a])throw getMissingValueError(a);return{appName:o.name,projectId:o.options.projectId,apiKey:o.options.apiKey,appId:o.options.appId}}function getMissingValueError(o){return ERROR_FACTORY$1.create("missing-app-config-values",{valueName:o})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const INSTALLATIONS_NAME="installations",INSTALLATIONS_NAME_INTERNAL="installations-internal",publicFactory=o=>{const i=o.getProvider("app").getImmediate(),a=extractAppConfig(i),s=_getProvider(i,"heartbeat");return{app:i,appConfig:a,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},internalFactory=o=>{const i=o.getProvider("app").getImmediate(),a=_getProvider(i,INSTALLATIONS_NAME).getImmediate();return{getId:()=>getId(a),getToken:et=>getToken(a,et)}};function registerInstallations(){_registerComponent(new Component(INSTALLATIONS_NAME,publicFactory,"PUBLIC")),_registerComponent(new Component(INSTALLATIONS_NAME_INTERNAL,internalFactory,"PRIVATE"))}registerInstallations();registerVersion(name$2,version$2);registerVersion(name$2,version$2,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ANALYTICS_TYPE="analytics",GA_FID_KEY="firebase_id",ORIGIN_KEY="origin",FETCH_TIMEOUT_MILLIS=60*1e3,DYNAMIC_CONFIG_URL="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",GTAG_URL="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const logger=new Logger("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function promiseAllSettled(o){return Promise.all(o.map(i=>i.catch(a=>a)))}function insertScriptTag(o,i){const a=document.createElement("script");a.src=`${GTAG_URL}?l=${o}&id=${i}`,a.async=!0,document.head.appendChild(a)}function getOrCreateDataLayer(o){let i=[];return Array.isArray(window[o])?i=window[o]:window[o]=i,i}async function gtagOnConfig(o,i,a,s,et,tt){const nt=s[et];try{if(nt)await i[nt];else{const ot=(await promiseAllSettled(a)).find(it=>it.measurementId===et);ot&&await i[ot.appId]}}catch(rt){logger.error(rt)}o("config",et,tt)}async function gtagOnEvent(o,i,a,s,et){try{let tt=[];if(et&&et.send_to){let nt=et.send_to;Array.isArray(nt)||(nt=[nt]);const rt=await promiseAllSettled(a);for(const ot of nt){const it=rt.find(st=>st.measurementId===ot),lt=it&&i[it.appId];if(lt)tt.push(lt);else{tt=[];break}}}tt.length===0&&(tt=Object.values(i)),await Promise.all(tt),o("event",s,et||{})}catch(tt){logger.error(tt)}}function wrapGtag(o,i,a,s){async function et(tt,nt,rt){try{tt==="event"?await gtagOnEvent(o,i,a,nt,rt):tt==="config"?await gtagOnConfig(o,i,a,s,nt,rt):tt==="consent"?o("consent","update",rt):o("set",nt)}catch(ot){logger.error(ot)}}return et}function wrapOrCreateGtag(o,i,a,s,et){let tt=function(...nt){window[s].push(arguments)};return window[et]&&typeof window[et]=="function"&&(tt=window[et]),window[et]=wrapGtag(tt,o,i,a),{gtagCore:tt,wrappedGtag:window[et]}}function findGtagScriptOnPage(o){const i=window.document.getElementsByTagName("script");for(const a of Object.values(i))if(a.src&&a.src.includes(GTAG_URL)&&a.src.includes(o))return a;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ERRORS={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},ERROR_FACTORY=new ErrorFactory("analytics","Analytics",ERRORS);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LONG_RETRY_FACTOR=30,BASE_INTERVAL_MILLIS=1e3;class RetryData{constructor(i={},a=BASE_INTERVAL_MILLIS){this.throttleMetadata=i,this.intervalMillis=a}getThrottleMetadata(i){return this.throttleMetadata[i]}setThrottleMetadata(i,a){this.throttleMetadata[i]=a}deleteThrottleMetadata(i){delete this.throttleMetadata[i]}}const defaultRetryData=new RetryData;function getHeaders(o){return new Headers({Accept:"application/json","x-goog-api-key":o})}async function fetchDynamicConfig(o){var i;const{appId:a,apiKey:s}=o,et={method:"GET",headers:getHeaders(s)},tt=DYNAMIC_CONFIG_URL.replace("{app-id}",a),nt=await fetch(tt,et);if(nt.status!==200&&nt.status!==304){let rt="";try{const ot=await nt.json();!((i=ot.error)===null||i===void 0)&&i.message&&(rt=ot.error.message)}catch{}throw ERROR_FACTORY.create("config-fetch-failed",{httpStatus:nt.status,responseMessage:rt})}return nt.json()}async function fetchDynamicConfigWithRetry(o,i=defaultRetryData,a){const{appId:s,apiKey:et,measurementId:tt}=o.options;if(!s)throw ERROR_FACTORY.create("no-app-id");if(!et){if(tt)return{measurementId:tt,appId:s};throw ERROR_FACTORY.create("no-api-key")}const nt=i.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},rt=new AnalyticsAbortSignal;return setTimeout(async()=>{rt.abort()},a!==void 0?a:FETCH_TIMEOUT_MILLIS),attemptFetchDynamicConfigWithRetry({appId:s,apiKey:et,measurementId:tt},nt,rt,i)}async function attemptFetchDynamicConfigWithRetry(o,{throttleEndTimeMillis:i,backoffCount:a},s,et=defaultRetryData){var tt;const{appId:nt,measurementId:rt}=o;try{await setAbortableTimeout(s,i)}catch(ot){if(rt)return logger.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${rt} provided in the "measurementId" field in the local Firebase config. [${ot==null?void 0:ot.message}]`),{appId:nt,measurementId:rt};throw ot}try{const ot=await fetchDynamicConfig(o);return et.deleteThrottleMetadata(nt),ot}catch(ot){const it=ot;if(!isRetriableError(it)){if(et.deleteThrottleMetadata(nt),rt)return logger.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${rt} provided in the "measurementId" field in the local Firebase config. [${it==null?void 0:it.message}]`),{appId:nt,measurementId:rt};throw ot}const lt=Number((tt=it==null?void 0:it.customData)===null||tt===void 0?void 0:tt.httpStatus)===503?calculateBackoffMillis(a,et.intervalMillis,LONG_RETRY_FACTOR):calculateBackoffMillis(a,et.intervalMillis),st={throttleEndTimeMillis:Date.now()+lt,backoffCount:a+1};return et.setThrottleMetadata(nt,st),logger.debug(`Calling attemptFetch again in ${lt} millis`),attemptFetchDynamicConfigWithRetry(o,st,s,et)}}function setAbortableTimeout(o,i){return new Promise((a,s)=>{const et=Math.max(i-Date.now(),0),tt=setTimeout(a,et);o.addEventListener(()=>{clearTimeout(tt),s(ERROR_FACTORY.create("fetch-throttle",{throttleEndTimeMillis:i}))})})}function isRetriableError(o){if(!(o instanceof FirebaseError)||!o.customData)return!1;const i=Number(o.customData.httpStatus);return i===429||i===500||i===503||i===504}class AnalyticsAbortSignal{constructor(){this.listeners=[]}addEventListener(i){this.listeners.push(i)}abort(){this.listeners.forEach(i=>i())}}async function logEvent$1(o,i,a,s,et){if(et&&et.global){o("event",a,s);return}else{const tt=await i,nt=Object.assign(Object.assign({},s),{send_to:tt});o("event",a,nt)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function validateIndexedDB(){if(isIndexedDBAvailable())try{await validateIndexedDBOpenable()}catch(o){return logger.warn(ERROR_FACTORY.create("indexeddb-unavailable",{errorInfo:o==null?void 0:o.toString()}).message),!1}else return logger.warn(ERROR_FACTORY.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function _initializeAnalytics(o,i,a,s,et,tt,nt){var rt;const ot=fetchDynamicConfigWithRetry(o);ot.then(ht=>{a[ht.measurementId]=ht.appId,o.options.measurementId&&ht.measurementId!==o.options.measurementId&&logger.warn(`The measurement ID in the local Firebase config (${o.options.measurementId}) does not match the measurement ID fetched from the server (${ht.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(ht=>logger.error(ht)),i.push(ot);const it=validateIndexedDB().then(ht=>{if(ht)return s.getId()}),[lt,st]=await Promise.all([ot,it]);findGtagScriptOnPage(tt)||insertScriptTag(tt,lt.measurementId),et("js",new Date);const dt=(rt=nt==null?void 0:nt.config)!==null&&rt!==void 0?rt:{};return dt[ORIGIN_KEY]="firebase",dt.update=!0,st!=null&&(dt[GA_FID_KEY]=st),et("config",lt.measurementId,dt),lt.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AnalyticsService{constructor(i){this.app=i}_delete(){return delete initializationPromisesMap[this.app.options.appId],Promise.resolve()}}let initializationPromisesMap={},dynamicConfigPromisesList=[];const measurementIdToAppId={};let dataLayerName="dataLayer",gtagName="gtag",gtagCoreFunction,wrappedGtagFunction,globalInitDone=!1;function warnOnBrowserContextMismatch(){const o=[];if(isBrowserExtension()&&o.push("This is a browser extension environment."),areCookiesEnabled()||o.push("Cookies are not available."),o.length>0){const i=o.map((s,et)=>`(${et+1}) ${s}`).join(" "),a=ERROR_FACTORY.create("invalid-analytics-context",{errorInfo:i});logger.warn(a.message)}}function factory(o,i,a){warnOnBrowserContextMismatch();const s=o.options.appId;if(!s)throw ERROR_FACTORY.create("no-app-id");if(!o.options.apiKey)if(o.options.measurementId)logger.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${o.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ERROR_FACTORY.create("no-api-key");if(initializationPromisesMap[s]!=null)throw ERROR_FACTORY.create("already-exists",{id:s});if(!globalInitDone){getOrCreateDataLayer(dataLayerName);const{wrappedGtag:tt,gtagCore:nt}=wrapOrCreateGtag(initializationPromisesMap,dynamicConfigPromisesList,measurementIdToAppId,dataLayerName,gtagName);wrappedGtagFunction=tt,gtagCoreFunction=nt,globalInitDone=!0}return initializationPromisesMap[s]=_initializeAnalytics(o,dynamicConfigPromisesList,measurementIdToAppId,i,gtagCoreFunction,dataLayerName,a),new AnalyticsService(o)}function getAnalytics(o=getApp()){o=getModularInstance(o);const i=_getProvider(o,ANALYTICS_TYPE);return i.isInitialized()?i.getImmediate():initializeAnalytics(o)}function initializeAnalytics(o,i={}){const a=_getProvider(o,ANALYTICS_TYPE);if(a.isInitialized()){const et=a.getImmediate();if(deepEqual(i,a.getOptions()))return et;throw ERROR_FACTORY.create("already-initialized")}return a.initialize({options:i})}function logEvent(o,i,a,s){o=getModularInstance(o),logEvent$1(wrappedGtagFunction,initializationPromisesMap[o.app.options.appId],i,a,s).catch(et=>logger.error(et))}const name$1="@firebase/analytics",version$1="0.9.1";function registerAnalytics(){_registerComponent(new Component(ANALYTICS_TYPE,(i,{options:a})=>{const s=i.getProvider("app").getImmediate(),et=i.getProvider("installations-internal").getImmediate();return factory(s,et,a)},"PUBLIC")),_registerComponent(new Component("analytics-internal",o,"PRIVATE")),registerVersion(name$1,version$1),registerVersion(name$1,version$1,"esm2017");function o(i){try{const a=i.getProvider(ANALYTICS_TYPE).getImmediate();return{logEvent:(s,et,tt)=>logEvent(a,s,et,tt)}}catch(a){throw ERROR_FACTORY.create("interop-component-reg-failed",{reason:a})}}}registerAnalytics();function __rest(o,i){var a={};for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&i.indexOf(s)<0&&(a[s]=o[s]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var et=0,s=Object.getOwnPropertySymbols(o);et<s.length;et++)i.indexOf(s[et])<0&&Object.prototype.propertyIsEnumerable.call(o,s[et])&&(a[s[et]]=o[s[et]]);return a}function _prodErrorMap(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const prodErrorMap=_prodErrorMap,_DEFAULT_AUTH_ERROR_FACTORY=new ErrorFactory("auth","Firebase",_prodErrorMap());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const logClient=new Logger("@firebase/auth");function _logError(o,...i){logClient.logLevel<=LogLevel.ERROR&&logClient.error(`Auth (${SDK_VERSION}): ${o}`,...i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _fail(o,...i){throw createErrorInternal(o,...i)}function _createError(o,...i){return createErrorInternal(o,...i)}function _errorWithCustomMessage(o,i,a){const s=Object.assign(Object.assign({},prodErrorMap()),{[i]:a});return new ErrorFactory("auth","Firebase",s).create(i,{appName:o.name})}function createErrorInternal(o,...i){if(typeof o!="string"){const a=i[0],s=[...i.slice(1)];return s[0]&&(s[0].appName=o.name),o._errorFactory.create(a,...s)}return _DEFAULT_AUTH_ERROR_FACTORY.create(o,...i)}function _assert(o,i,...a){if(!o)throw createErrorInternal(i,...a)}function debugFail(o){const i="INTERNAL ASSERTION FAILED: "+o;throw _logError(i),new Error(i)}function debugAssert(o,i){o||debugFail(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const instanceCache=new Map;function _getInstance(o){debugAssert(o instanceof Function,"Expected a class definition");let i=instanceCache.get(o);return i?(debugAssert(i instanceof o,"Instance stored in cache mismatched with class"),i):(i=new o,instanceCache.set(o,i),i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function initializeAuth(o,i){const a=_getProvider(o,"auth");if(a.isInitialized()){const et=a.getImmediate(),tt=a.getOptions();if(deepEqual(tt,i??{}))return et;_fail(et,"already-initialized")}return a.initialize({options:i})}function _initializeAuthInstance(o,i){const a=(i==null?void 0:i.persistence)||[],s=(Array.isArray(a)?a:[a]).map(_getInstance);i!=null&&i.errorMap&&o._updateErrorMap(i.errorMap),o._initializeWithPersistence(s,i==null?void 0:i.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _getCurrentUrl(){var o;return typeof self<"u"&&((o=self.location)===null||o===void 0?void 0:o.href)||""}function _isHttpOrHttps(){return _getCurrentScheme()==="http:"||_getCurrentScheme()==="https:"}function _getCurrentScheme(){var o;return typeof self<"u"&&((o=self.location)===null||o===void 0?void 0:o.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _isOnline(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_isHttpOrHttps()||isBrowserExtension()||"connection"in navigator)?navigator.onLine:!0}function _getUserLanguage(){if(typeof navigator>"u")return null;const o=navigator;return o.languages&&o.languages[0]||o.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Delay{constructor(i,a){this.shortDelay=i,this.longDelay=a,debugAssert(a>i,"Short delay should be less than long delay!"),this.isMobile=isMobileCordova()||isReactNative()}get(){return _isOnline()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _emulatorUrl(o,i){debugAssert(o.emulator,"Emulator should always be set here");const{url:a}=o.emulator;return i?`${a}${i.startsWith("/")?i.slice(1):i}`:a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FetchProvider{static initialize(i,a,s){this.fetchImpl=i,a&&(this.headersImpl=a),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SERVER_ERROR_MAP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DEFAULT_API_TIMEOUT_MS=new Delay(3e4,6e4);function _addTidIfNecessary(o,i){return o.tenantId&&!i.tenantId?Object.assign(Object.assign({},i),{tenantId:o.tenantId}):i}async function _performApiRequest(o,i,a,s,et={}){return _performFetchWithErrorHandling(o,et,async()=>{let tt={},nt={};s&&(i==="GET"?nt=s:tt={body:JSON.stringify(s)});const rt=querystring(Object.assign({key:o.config.apiKey},nt)).slice(1),ot=await o._getAdditionalHeaders();return ot["Content-Type"]="application/json",o.languageCode&&(ot["X-Firebase-Locale"]=o.languageCode),FetchProvider.fetch()(_getFinalTarget(o,o.config.apiHost,a,rt),Object.assign({method:i,headers:ot,referrerPolicy:"no-referrer"},tt))})}async function _performFetchWithErrorHandling(o,i,a){o._canInitEmulator=!1;const s=Object.assign(Object.assign({},SERVER_ERROR_MAP),i);try{const et=new NetworkTimeout(o),tt=await Promise.race([a(),et.promise]);et.clearNetworkTimeout();const nt=await tt.json();if("needConfirmation"in nt)throw _makeTaggedError(o,"account-exists-with-different-credential",nt);if(tt.ok&&!("errorMessage"in nt))return nt;{const rt=tt.ok?nt.errorMessage:nt.error.message,[ot,it]=rt.split(" : ");if(ot==="FEDERATED_USER_ID_ALREADY_LINKED")throw _makeTaggedError(o,"credential-already-in-use",nt);if(ot==="EMAIL_EXISTS")throw _makeTaggedError(o,"email-already-in-use",nt);if(ot==="USER_DISABLED")throw _makeTaggedError(o,"user-disabled",nt);const lt=s[ot]||ot.toLowerCase().replace(/[_\s]+/g,"-");if(it)throw _errorWithCustomMessage(o,lt,it);_fail(o,lt)}}catch(et){if(et instanceof FirebaseError)throw et;_fail(o,"network-request-failed")}}async function _performSignInRequest(o,i,a,s,et={}){const tt=await _performApiRequest(o,i,a,s,et);return"mfaPendingCredential"in tt&&_fail(o,"multi-factor-auth-required",{_serverResponse:tt}),tt}function _getFinalTarget(o,i,a,s){const et=`${i}${a}?${s}`;return o.config.emulator?_emulatorUrl(o.config,et):`${o.config.apiScheme}://${et}`}class NetworkTimeout{constructor(i){this.auth=i,this.timer=null,this.promise=new Promise((a,s)=>{this.timer=setTimeout(()=>s(_createError(this.auth,"network-request-failed")),DEFAULT_API_TIMEOUT_MS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _makeTaggedError(o,i,a){const s={appName:o.name};a.email&&(s.email=a.email),a.phoneNumber&&(s.phoneNumber=a.phoneNumber);const et=_createError(o,i,s);return et.customData._tokenResponse=a,et}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function deleteAccount(o,i){return _performApiRequest(o,"POST","/v1/accounts:delete",i)}async function getAccountInfo(o,i){return _performApiRequest(o,"POST","/v1/accounts:lookup",i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function utcTimestampToDateString(o){if(o)try{const i=new Date(Number(o));if(!isNaN(i.getTime()))return i.toUTCString()}catch{}}async function getIdTokenResult(o,i=!1){const a=getModularInstance(o),s=await a.getIdToken(i),et=_parseToken(s);_assert(et&&et.exp&&et.auth_time&&et.iat,a.auth,"internal-error");const tt=typeof et.firebase=="object"?et.firebase:void 0,nt=tt==null?void 0:tt.sign_in_provider;return{claims:et,token:s,authTime:utcTimestampToDateString(secondsStringToMilliseconds(et.auth_time)),issuedAtTime:utcTimestampToDateString(secondsStringToMilliseconds(et.iat)),expirationTime:utcTimestampToDateString(secondsStringToMilliseconds(et.exp)),signInProvider:nt||null,signInSecondFactor:(tt==null?void 0:tt.sign_in_second_factor)||null}}function secondsStringToMilliseconds(o){return Number(o)*1e3}function _parseToken(o){const[i,a,s]=o.split(".");if(i===void 0||a===void 0||s===void 0)return _logError("JWT malformed, contained fewer than 3 sections"),null;try{const et=base64Decode(a);return et?JSON.parse(et):(_logError("Failed to decode base64 JWT payload"),null)}catch(et){return _logError("Caught error parsing JWT payload as JSON",et==null?void 0:et.toString()),null}}function _tokenExpiresIn(o){const i=_parseToken(o);return _assert(i,"internal-error"),_assert(typeof i.exp<"u","internal-error"),_assert(typeof i.iat<"u","internal-error"),Number(i.exp)-Number(i.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _logoutIfInvalidated(o,i,a=!1){if(a)return i;try{return await i}catch(s){throw s instanceof FirebaseError&&isUserInvalidated(s)&&o.auth.currentUser===o&&await o.auth.signOut(),s}}function isUserInvalidated({code:o}){return o==="auth/user-disabled"||o==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ProactiveRefresh{constructor(i){this.user=i,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(i){var a;if(i){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const et=((a=this.user.stsTokenManager.expirationTime)!==null&&a!==void 0?a:0)-Date.now()-3e5;return Math.max(0,et)}}schedule(i=!1){if(!this.isRunning)return;const a=this.getInterval(i);this.timerId=setTimeout(async()=>{await this.iteration()},a)}async iteration(){try{await this.user.getIdToken(!0)}catch(i){(i==null?void 0:i.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UserMetadata{constructor(i,a){this.createdAt=i,this.lastLoginAt=a,this._initializeTime()}_initializeTime(){this.lastSignInTime=utcTimestampToDateString(this.lastLoginAt),this.creationTime=utcTimestampToDateString(this.createdAt)}_copy(i){this.createdAt=i.createdAt,this.lastLoginAt=i.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _reloadWithoutSaving(o){var i;const a=o.auth,s=await o.getIdToken(),et=await _logoutIfInvalidated(o,getAccountInfo(a,{idToken:s}));_assert(et==null?void 0:et.users.length,a,"internal-error");const tt=et.users[0];o._notifyReloadListener(tt);const nt=!((i=tt.providerUserInfo)===null||i===void 0)&&i.length?extractProviderData(tt.providerUserInfo):[],rt=mergeProviderData(o.providerData,nt),ot=o.isAnonymous,it=!(o.email&&tt.passwordHash)&&!(rt!=null&&rt.length),lt=ot?it:!1,st={uid:tt.localId,displayName:tt.displayName||null,photoURL:tt.photoUrl||null,email:tt.email||null,emailVerified:tt.emailVerified||!1,phoneNumber:tt.phoneNumber||null,tenantId:tt.tenantId||null,providerData:rt,metadata:new UserMetadata(tt.createdAt,tt.lastLoginAt),isAnonymous:lt};Object.assign(o,st)}async function reload(o){const i=getModularInstance(o);await _reloadWithoutSaving(i),await i.auth._persistUserIfCurrent(i),i.auth._notifyListenersIfCurrent(i)}function mergeProviderData(o,i){return[...o.filter(s=>!i.some(et=>et.providerId===s.providerId)),...i]}function extractProviderData(o){return o.map(i=>{var{providerId:a}=i,s=__rest(i,["providerId"]);return{providerId:a,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function requestStsToken(o,i){const a=await _performFetchWithErrorHandling(o,{},async()=>{const s=querystring({grant_type:"refresh_token",refresh_token:i}).slice(1),{tokenApiHost:et,apiKey:tt}=o.config,nt=_getFinalTarget(o,et,"/v1/token",`key=${tt}`),rt=await o._getAdditionalHeaders();return rt["Content-Type"]="application/x-www-form-urlencoded",FetchProvider.fetch()(nt,{method:"POST",headers:rt,body:s})});return{accessToken:a.access_token,expiresIn:a.expires_in,refreshToken:a.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class StsTokenManager{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(i){_assert(i.idToken,"internal-error"),_assert(typeof i.idToken<"u","internal-error"),_assert(typeof i.refreshToken<"u","internal-error");const a="expiresIn"in i&&typeof i.expiresIn<"u"?Number(i.expiresIn):_tokenExpiresIn(i.idToken);this.updateTokensAndExpiration(i.idToken,i.refreshToken,a)}async getToken(i,a=!1){return _assert(!this.accessToken||this.refreshToken,i,"user-token-expired"),!a&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(i,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(i,a){const{accessToken:s,refreshToken:et,expiresIn:tt}=await requestStsToken(i,a);this.updateTokensAndExpiration(s,et,Number(tt))}updateTokensAndExpiration(i,a,s){this.refreshToken=a||null,this.accessToken=i||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(i,a){const{refreshToken:s,accessToken:et,expirationTime:tt}=a,nt=new StsTokenManager;return s&&(_assert(typeof s=="string","internal-error",{appName:i}),nt.refreshToken=s),et&&(_assert(typeof et=="string","internal-error",{appName:i}),nt.accessToken=et),tt&&(_assert(typeof tt=="number","internal-error",{appName:i}),nt.expirationTime=tt),nt}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(i){this.accessToken=i.accessToken,this.refreshToken=i.refreshToken,this.expirationTime=i.expirationTime}_clone(){return Object.assign(new StsTokenManager,this.toJSON())}_performRefresh(){return debugFail("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function assertStringOrUndefined(o,i){_assert(typeof o=="string"||typeof o>"u","internal-error",{appName:i})}class UserImpl{constructor(i){var{uid:a,auth:s,stsTokenManager:et}=i,tt=__rest(i,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ProactiveRefresh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=a,this.auth=s,this.stsTokenManager=et,this.accessToken=et.accessToken,this.displayName=tt.displayName||null,this.email=tt.email||null,this.emailVerified=tt.emailVerified||!1,this.phoneNumber=tt.phoneNumber||null,this.photoURL=tt.photoURL||null,this.isAnonymous=tt.isAnonymous||!1,this.tenantId=tt.tenantId||null,this.providerData=tt.providerData?[...tt.providerData]:[],this.metadata=new UserMetadata(tt.createdAt||void 0,tt.lastLoginAt||void 0)}async getIdToken(i){const a=await _logoutIfInvalidated(this,this.stsTokenManager.getToken(this.auth,i));return _assert(a,this.auth,"internal-error"),this.accessToken!==a&&(this.accessToken=a,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),a}getIdTokenResult(i){return getIdTokenResult(this,i)}reload(){return reload(this)}_assign(i){this!==i&&(_assert(this.uid===i.uid,this.auth,"internal-error"),this.displayName=i.displayName,this.photoURL=i.photoURL,this.email=i.email,this.emailVerified=i.emailVerified,this.phoneNumber=i.phoneNumber,this.isAnonymous=i.isAnonymous,this.tenantId=i.tenantId,this.providerData=i.providerData.map(a=>Object.assign({},a)),this.metadata._copy(i.metadata),this.stsTokenManager._assign(i.stsTokenManager))}_clone(i){return new UserImpl(Object.assign(Object.assign({},this),{auth:i,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(i){_assert(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=i,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(i){this.reloadListener?this.reloadListener(i):this.reloadUserInfo=i}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(i,a=!1){let s=!1;i.idToken&&i.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(i),s=!0),a&&await _reloadWithoutSaving(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const i=await this.getIdToken();return await _logoutIfInvalidated(this,deleteAccount(this.auth,{idToken:i})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(i=>Object.assign({},i)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(i,a){var s,et,tt,nt,rt,ot,it,lt;const st=(s=a.displayName)!==null&&s!==void 0?s:void 0,dt=(et=a.email)!==null&&et!==void 0?et:void 0,ht=(tt=a.phoneNumber)!==null&&tt!==void 0?tt:void 0,pt=(nt=a.photoURL)!==null&&nt!==void 0?nt:void 0,mt=(rt=a.tenantId)!==null&&rt!==void 0?rt:void 0,yt=(ot=a._redirectEventId)!==null&&ot!==void 0?ot:void 0,ct=(it=a.createdAt)!==null&&it!==void 0?it:void 0,at=(lt=a.lastLoginAt)!==null&&lt!==void 0?lt:void 0,{uid:ut,emailVerified:gt,isAnonymous:vt,providerData:wt,stsTokenManager:kt}=a;_assert(ut&&kt,i,"internal-error");const It=StsTokenManager.fromJSON(this.name,kt);_assert(typeof ut=="string",i,"internal-error"),assertStringOrUndefined(st,i.name),assertStringOrUndefined(dt,i.name),_assert(typeof gt=="boolean",i,"internal-error"),_assert(typeof vt=="boolean",i,"internal-error"),assertStringOrUndefined(ht,i.name),assertStringOrUndefined(pt,i.name),assertStringOrUndefined(mt,i.name),assertStringOrUndefined(yt,i.name),assertStringOrUndefined(ct,i.name),assertStringOrUndefined(at,i.name);const Mt=new UserImpl({uid:ut,auth:i,email:dt,emailVerified:gt,displayName:st,isAnonymous:vt,photoURL:pt,phoneNumber:ht,tenantId:mt,stsTokenManager:It,createdAt:ct,lastLoginAt:at});return wt&&Array.isArray(wt)&&(Mt.providerData=wt.map(Dt=>Object.assign({},Dt))),yt&&(Mt._redirectEventId=yt),Mt}static async _fromIdTokenResponse(i,a,s=!1){const et=new StsTokenManager;et.updateFromServerResponse(a);const tt=new UserImpl({uid:a.localId,auth:i,stsTokenManager:et,isAnonymous:s});return await _reloadWithoutSaving(tt),tt}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class InMemoryPersistence{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(i,a){this.storage[i]=a}async _get(i){const a=this.storage[i];return a===void 0?null:a}async _remove(i){delete this.storage[i]}_addListener(i,a){}_removeListener(i,a){}}InMemoryPersistence.type="NONE";const inMemoryPersistence=InMemoryPersistence;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _persistenceKeyName(o,i,a){return`firebase:${o}:${i}:${a}`}class PersistenceUserManager{constructor(i,a,s){this.persistence=i,this.auth=a,this.userKey=s;const{config:et,name:tt}=this.auth;this.fullUserKey=_persistenceKeyName(this.userKey,et.apiKey,tt),this.fullPersistenceKey=_persistenceKeyName("persistence",et.apiKey,tt),this.boundEventHandler=a._onStorageEvent.bind(a),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(i){return this.persistence._set(this.fullUserKey,i.toJSON())}async getCurrentUser(){const i=await this.persistence._get(this.fullUserKey);return i?UserImpl._fromJSON(this.auth,i):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(i){if(this.persistence===i)return;const a=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=i,a)return this.setCurrentUser(a)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(i,a,s="authUser"){if(!a.length)return new PersistenceUserManager(_getInstance(inMemoryPersistence),i,s);const et=(await Promise.all(a.map(async it=>{if(await it._isAvailable())return it}))).filter(it=>it);let tt=et[0]||_getInstance(inMemoryPersistence);const nt=_persistenceKeyName(s,i.config.apiKey,i.name);let rt=null;for(const it of a)try{const lt=await it._get(nt);if(lt){const st=UserImpl._fromJSON(i,lt);it!==tt&&(rt=st),tt=it;break}}catch{}const ot=et.filter(it=>it._shouldAllowMigration);return!tt._shouldAllowMigration||!ot.length?new PersistenceUserManager(tt,i,s):(tt=ot[0],rt&&await tt._set(nt,rt.toJSON()),await Promise.all(a.map(async it=>{if(it!==tt)try{await it._remove(nt)}catch{}})),new PersistenceUserManager(tt,i,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _getBrowserName(o){const i=o.toLowerCase();if(i.includes("opera/")||i.includes("opr/")||i.includes("opios/"))return"Opera";if(_isIEMobile(i))return"IEMobile";if(i.includes("msie")||i.includes("trident/"))return"IE";if(i.includes("edge/"))return"Edge";if(_isFirefox(i))return"Firefox";if(i.includes("silk/"))return"Silk";if(_isBlackBerry(i))return"Blackberry";if(_isWebOS(i))return"Webos";if(_isSafari(i))return"Safari";if((i.includes("chrome/")||_isChromeIOS(i))&&!i.includes("edge/"))return"Chrome";if(_isAndroid(i))return"Android";{const a=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=o.match(a);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function _isFirefox(o=getUA()){return/firefox\//i.test(o)}function _isSafari(o=getUA()){const i=o.toLowerCase();return i.includes("safari/")&&!i.includes("chrome/")&&!i.includes("crios/")&&!i.includes("android")}function _isChromeIOS(o=getUA()){return/crios\//i.test(o)}function _isIEMobile(o=getUA()){return/iemobile/i.test(o)}function _isAndroid(o=getUA()){return/android/i.test(o)}function _isBlackBerry(o=getUA()){return/blackberry/i.test(o)}function _isWebOS(o=getUA()){return/webos/i.test(o)}function _isIOS(o=getUA()){return/iphone|ipad|ipod/i.test(o)||/macintosh/i.test(o)&&/mobile/i.test(o)}function _isIOSStandalone(o=getUA()){var i;return _isIOS(o)&&!!(!((i=window.navigator)===null||i===void 0)&&i.standalone)}function _isIE10(){return isIE()&&document.documentMode===10}function _isMobileBrowser(o=getUA()){return _isIOS(o)||_isAndroid(o)||_isWebOS(o)||_isBlackBerry(o)||/windows phone/i.test(o)||_isIEMobile(o)}function _isIframe(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _getClientVersion(o,i=[]){let a;switch(o){case"Browser":a=_getBrowserName(getUA());break;case"Worker":a=`${_getBrowserName(getUA())}-${o}`;break;default:a=o}const s=i.length?i.join(","):"FirebaseCore-web";return`${a}/JsCore/${SDK_VERSION}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AuthMiddlewareQueue{constructor(i){this.auth=i,this.queue=[]}pushCallback(i,a){const s=tt=>new Promise((nt,rt)=>{try{const ot=i(tt);nt(ot)}catch(ot){rt(ot)}});s.onAbort=a,this.queue.push(s);const et=this.queue.length-1;return()=>{this.queue[et]=()=>Promise.resolve()}}async runMiddleware(i){if(this.auth.currentUser===i)return;const a=[];try{for(const s of this.queue)await s(i),s.onAbort&&a.push(s.onAbort)}catch(s){a.reverse();for(const et of a)try{et()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AuthImpl{constructor(i,a,s){this.app=i,this.heartbeatServiceProvider=a,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Subscription(this),this.idTokenSubscription=new Subscription(this),this.beforeStateQueue=new AuthMiddlewareQueue(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_DEFAULT_AUTH_ERROR_FACTORY,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=i.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(i,a){return a&&(this._popupRedirectResolver=_getInstance(a)),this._initializationPromise=this.queue(async()=>{var s,et;if(!this._deleted&&(this.persistenceManager=await PersistenceUserManager.create(this,i),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(a),this.lastNotifiedUid=((et=this.currentUser)===null||et===void 0?void 0:et.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const i=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!i)){if(this.currentUser&&i&&this.currentUser.uid===i.uid){this._currentUser._assign(i),await this.currentUser.getIdToken();return}await this._updateCurrentUser(i,!0)}}async initializeCurrentUser(i){var a;const s=await this.assertedPersistence.getCurrentUser();let et=s,tt=!1;if(i&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const nt=(a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId,rt=et==null?void 0:et._redirectEventId,ot=await this.tryRedirectSignIn(i);(!nt||nt===rt)&&(ot!=null&&ot.user)&&(et=ot.user,tt=!0)}if(!et)return this.directlySetCurrentUser(null);if(!et._redirectEventId){if(tt)try{await this.beforeStateQueue.runMiddleware(et)}catch(nt){et=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(nt))}return et?this.reloadAndSetCurrentUserOrClear(et):this.directlySetCurrentUser(null)}return _assert(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===et._redirectEventId?this.directlySetCurrentUser(et):this.reloadAndSetCurrentUserOrClear(et)}async tryRedirectSignIn(i){let a=null;try{a=await this._popupRedirectResolver._completeRedirectFn(this,i,!0)}catch{await this._setRedirectUser(null)}return a}async reloadAndSetCurrentUserOrClear(i){try{await _reloadWithoutSaving(i)}catch(a){if((a==null?void 0:a.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(i)}useDeviceLanguage(){this.languageCode=_getUserLanguage()}async _delete(){this._deleted=!0}async updateCurrentUser(i){const a=i?getModularInstance(i):null;return a&&_assert(a.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(a&&a._clone(this))}async _updateCurrentUser(i,a=!1){if(!this._deleted)return i&&_assert(this.tenantId===i.tenantId,this,"tenant-id-mismatch"),a||await this.beforeStateQueue.runMiddleware(i),this.queue(async()=>{await this.directlySetCurrentUser(i),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(i){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_getInstance(i))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(i){this._errorFactory=new ErrorFactory("auth","Firebase",i())}onAuthStateChanged(i,a,s){return this.registerStateListener(this.authStateSubscription,i,a,s)}beforeAuthStateChanged(i,a){return this.beforeStateQueue.pushCallback(i,a)}onIdTokenChanged(i,a,s){return this.registerStateListener(this.idTokenSubscription,i,a,s)}toJSON(){var i;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(i=this._currentUser)===null||i===void 0?void 0:i.toJSON()}}async _setRedirectUser(i,a){const s=await this.getOrInitRedirectPersistenceManager(a);return i===null?s.removeCurrentUser():s.setCurrentUser(i)}async getOrInitRedirectPersistenceManager(i){if(!this.redirectPersistenceManager){const a=i&&_getInstance(i)||this._popupRedirectResolver;_assert(a,this,"argument-error"),this.redirectPersistenceManager=await PersistenceUserManager.create(this,[_getInstance(a._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(i){var a,s;return this._isInitialized&&await this.queue(async()=>{}),((a=this._currentUser)===null||a===void 0?void 0:a._redirectEventId)===i?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===i?this.redirectUser:null}async _persistUserIfCurrent(i){if(i===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(i))}_notifyListenersIfCurrent(i){i===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var i,a;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(a=(i=this.currentUser)===null||i===void 0?void 0:i.uid)!==null&&a!==void 0?a:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(i,a,s,et){if(this._deleted)return()=>{};const tt=typeof a=="function"?a:a.next.bind(a),nt=this._isInitialized?Promise.resolve():this._initializationPromise;return _assert(nt,this,"internal-error"),nt.then(()=>tt(this.currentUser)),typeof a=="function"?i.addObserver(a,s,et):i.addObserver(a)}async directlySetCurrentUser(i){this.currentUser&&this.currentUser!==i&&this._currentUser._stopProactiveRefresh(),i&&this.isProactiveRefreshEnabled&&i._startProactiveRefresh(),this.currentUser=i,i?await this.assertedPersistence.setCurrentUser(i):await this.assertedPersistence.removeCurrentUser()}queue(i){return this.operations=this.operations.then(i,i),this.operations}get assertedPersistence(){return _assert(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(i){!i||this.frameworks.includes(i)||(this.frameworks.push(i),this.frameworks.sort(),this.clientVersion=_getClientVersion(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const a={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(a["X-Firebase-gmpid"]=this.app.options.appId);const s=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||i===void 0?void 0:i.getHeartbeatsHeader());return s&&(a["X-Firebase-Client"]=s),a}}function _castAuth(o){return getModularInstance(o)}class Subscription{constructor(i){this.auth=i,this.observer=null,this.addObserver=createSubscribe(a=>this.observer=a)}get next(){return _assert(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function connectAuthEmulator(o,i,a){const s=_castAuth(o);_assert(s._canInitEmulator,s,"emulator-config-failed"),_assert(/^https?:\/\//.test(i),s,"invalid-emulator-scheme");const et=!!(a!=null&&a.disableWarnings),tt=extractProtocol(i),{host:nt,port:rt}=extractHostAndPort(i),ot=rt===null?"":`:${rt}`;s.config.emulator={url:`${tt}//${nt}${ot}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:nt,port:rt,protocol:tt.replace(":",""),options:Object.freeze({disableWarnings:et})}),et||emitEmulatorWarning()}function extractProtocol(o){const i=o.indexOf(":");return i<0?"":o.substr(0,i+1)}function extractHostAndPort(o){const i=extractProtocol(o),a=/(\/\/)?([^?#/]+)/.exec(o.substr(i.length));if(!a)return{host:"",port:null};const s=a[2].split("@").pop()||"",et=/^(\[[^\]]+\])(:|$)/.exec(s);if(et){const tt=et[1];return{host:tt,port:parsePort(s.substr(tt.length+1))}}else{const[tt,nt]=s.split(":");return{host:tt,port:parsePort(nt)}}}function parsePort(o){if(!o)return null;const i=Number(o);return isNaN(i)?null:i}function emitEmulatorWarning(){function o(){const i=document.createElement("p"),a=i.style;i.innerText="Running in emulator mode. Do not use with production credentials.",a.position="fixed",a.width="100%",a.backgroundColor="#ffffff",a.border=".1em solid #000000",a.color="#b50000",a.bottom="0px",a.left="0px",a.margin="0px",a.zIndex="10000",a.textAlign="center",i.classList.add("firebase-emulator-warning"),document.body.appendChild(i)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",o):o())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AuthCredential{constructor(i,a){this.providerId=i,this.signInMethod=a}toJSON(){return debugFail("not implemented")}_getIdTokenResponse(i){return debugFail("not implemented")}_linkToIdToken(i,a){return debugFail("not implemented")}_getReauthenticationResolver(i){return debugFail("not implemented")}}async function updateEmailPassword(o,i){return _performApiRequest(o,"POST","/v1/accounts:update",i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function signInWithPassword(o,i){return _performSignInRequest(o,"POST","/v1/accounts:signInWithPassword",_addTidIfNecessary(o,i))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function signInWithEmailLink$1(o,i){return _performSignInRequest(o,"POST","/v1/accounts:signInWithEmailLink",_addTidIfNecessary(o,i))}async function signInWithEmailLinkForLinking(o,i){return _performSignInRequest(o,"POST","/v1/accounts:signInWithEmailLink",_addTidIfNecessary(o,i))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EmailAuthCredential extends AuthCredential{constructor(i,a,s,et=null){super("password",s),this._email=i,this._password=a,this._tenantId=et}static _fromEmailAndPassword(i,a){return new EmailAuthCredential(i,a,"password")}static _fromEmailAndCode(i,a,s=null){return new EmailAuthCredential(i,a,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(i){const a=typeof i=="string"?JSON.parse(i):i;if(a!=null&&a.email&&(a!=null&&a.password)){if(a.signInMethod==="password")return this._fromEmailAndPassword(a.email,a.password);if(a.signInMethod==="emailLink")return this._fromEmailAndCode(a.email,a.password,a.tenantId)}return null}async _getIdTokenResponse(i){switch(this.signInMethod){case"password":return signInWithPassword(i,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return signInWithEmailLink$1(i,{email:this._email,oobCode:this._password});default:_fail(i,"internal-error")}}async _linkToIdToken(i,a){switch(this.signInMethod){case"password":return updateEmailPassword(i,{idToken:a,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return signInWithEmailLinkForLinking(i,{idToken:a,email:this._email,oobCode:this._password});default:_fail(i,"internal-error")}}_getReauthenticationResolver(i){return this._getIdTokenResponse(i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function signInWithIdp(o,i){return _performSignInRequest(o,"POST","/v1/accounts:signInWithIdp",_addTidIfNecessary(o,i))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IDP_REQUEST_URI$1="http://localhost";class OAuthCredential extends AuthCredential{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(i){const a=new OAuthCredential(i.providerId,i.signInMethod);return i.idToken||i.accessToken?(i.idToken&&(a.idToken=i.idToken),i.accessToken&&(a.accessToken=i.accessToken),i.nonce&&!i.pendingToken&&(a.nonce=i.nonce),i.pendingToken&&(a.pendingToken=i.pendingToken)):i.oauthToken&&i.oauthTokenSecret?(a.accessToken=i.oauthToken,a.secret=i.oauthTokenSecret):_fail("argument-error"),a}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(i){const a=typeof i=="string"?JSON.parse(i):i,{providerId:s,signInMethod:et}=a,tt=__rest(a,["providerId","signInMethod"]);if(!s||!et)return null;const nt=new OAuthCredential(s,et);return nt.idToken=tt.idToken||void 0,nt.accessToken=tt.accessToken||void 0,nt.secret=tt.secret,nt.nonce=tt.nonce,nt.pendingToken=tt.pendingToken||null,nt}_getIdTokenResponse(i){const a=this.buildRequest();return signInWithIdp(i,a)}_linkToIdToken(i,a){const s=this.buildRequest();return s.idToken=a,signInWithIdp(i,s)}_getReauthenticationResolver(i){const a=this.buildRequest();return a.autoCreate=!1,signInWithIdp(i,a)}buildRequest(){const i={requestUri:IDP_REQUEST_URI$1,returnSecureToken:!0};if(this.pendingToken)i.pendingToken=this.pendingToken;else{const a={};this.idToken&&(a.id_token=this.idToken),this.accessToken&&(a.access_token=this.accessToken),this.secret&&(a.oauth_token_secret=this.secret),a.providerId=this.providerId,this.nonce&&!this.pendingToken&&(a.nonce=this.nonce),i.postBody=querystring(a)}return i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function parseMode(o){switch(o){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function parseDeepLink(o){const i=querystringDecode(extractQuerystring(o)).link,a=i?querystringDecode(extractQuerystring(i)).deep_link_id:null,s=querystringDecode(extractQuerystring(o)).deep_link_id;return(s?querystringDecode(extractQuerystring(s)).link:null)||s||a||i||o}class ActionCodeURL{constructor(i){var a,s,et,tt,nt,rt;const ot=querystringDecode(extractQuerystring(i)),it=(a=ot.apiKey)!==null&&a!==void 0?a:null,lt=(s=ot.oobCode)!==null&&s!==void 0?s:null,st=parseMode((et=ot.mode)!==null&&et!==void 0?et:null);_assert(it&&lt&&st,"argument-error"),this.apiKey=it,this.operation=st,this.code=lt,this.continueUrl=(tt=ot.continueUrl)!==null&&tt!==void 0?tt:null,this.languageCode=(nt=ot.languageCode)!==null&&nt!==void 0?nt:null,this.tenantId=(rt=ot.tenantId)!==null&&rt!==void 0?rt:null}static parseLink(i){const a=parseDeepLink(i);try{return new ActionCodeURL(a)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EmailAuthProvider{constructor(){this.providerId=EmailAuthProvider.PROVIDER_ID}static credential(i,a){return EmailAuthCredential._fromEmailAndPassword(i,a)}static credentialWithLink(i,a){const s=ActionCodeURL.parseLink(a);return _assert(s,"argument-error"),EmailAuthCredential._fromEmailAndCode(i,s.code,s.tenantId)}}EmailAuthProvider.PROVIDER_ID="password";EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD="password";EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FederatedAuthProvider{constructor(i){this.providerId=i,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(i){this.defaultLanguageCode=i}setCustomParameters(i){return this.customParameters=i,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BaseOAuthProvider extends FederatedAuthProvider{constructor(){super(...arguments),this.scopes=[]}addScope(i){return this.scopes.includes(i)||this.scopes.push(i),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FacebookAuthProvider extends BaseOAuthProvider{constructor(){super("facebook.com")}static credential(i){return OAuthCredential._fromParams({providerId:FacebookAuthProvider.PROVIDER_ID,signInMethod:FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,accessToken:i})}static credentialFromResult(i){return FacebookAuthProvider.credentialFromTaggedObject(i)}static credentialFromError(i){return FacebookAuthProvider.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i||!("oauthAccessToken"in i)||!i.oauthAccessToken)return null;try{return FacebookAuthProvider.credential(i.oauthAccessToken)}catch{return null}}}FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD="facebook.com";FacebookAuthProvider.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GoogleAuthProvider extends BaseOAuthProvider{constructor(){super("google.com"),this.addScope("profile")}static credential(i,a){return OAuthCredential._fromParams({providerId:GoogleAuthProvider.PROVIDER_ID,signInMethod:GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,idToken:i,accessToken:a})}static credentialFromResult(i){return GoogleAuthProvider.credentialFromTaggedObject(i)}static credentialFromError(i){return GoogleAuthProvider.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i)return null;const{oauthIdToken:a,oauthAccessToken:s}=i;if(!a&&!s)return null;try{return GoogleAuthProvider.credential(a,s)}catch{return null}}}GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD="google.com";GoogleAuthProvider.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GithubAuthProvider extends BaseOAuthProvider{constructor(){super("github.com")}static credential(i){return OAuthCredential._fromParams({providerId:GithubAuthProvider.PROVIDER_ID,signInMethod:GithubAuthProvider.GITHUB_SIGN_IN_METHOD,accessToken:i})}static credentialFromResult(i){return GithubAuthProvider.credentialFromTaggedObject(i)}static credentialFromError(i){return GithubAuthProvider.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i||!("oauthAccessToken"in i)||!i.oauthAccessToken)return null;try{return GithubAuthProvider.credential(i.oauthAccessToken)}catch{return null}}}GithubAuthProvider.GITHUB_SIGN_IN_METHOD="github.com";GithubAuthProvider.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TwitterAuthProvider extends BaseOAuthProvider{constructor(){super("twitter.com")}static credential(i,a){return OAuthCredential._fromParams({providerId:TwitterAuthProvider.PROVIDER_ID,signInMethod:TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,oauthToken:i,oauthTokenSecret:a})}static credentialFromResult(i){return TwitterAuthProvider.credentialFromTaggedObject(i)}static credentialFromError(i){return TwitterAuthProvider.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i)return null;const{oauthAccessToken:a,oauthTokenSecret:s}=i;if(!a||!s)return null;try{return TwitterAuthProvider.credential(a,s)}catch{return null}}}TwitterAuthProvider.TWITTER_SIGN_IN_METHOD="twitter.com";TwitterAuthProvider.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function signUp(o,i){return _performSignInRequest(o,"POST","/v1/accounts:signUp",_addTidIfNecessary(o,i))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UserCredentialImpl{constructor(i){this.user=i.user,this.providerId=i.providerId,this._tokenResponse=i._tokenResponse,this.operationType=i.operationType}static async _fromIdTokenResponse(i,a,s,et=!1){const tt=await UserImpl._fromIdTokenResponse(i,s,et),nt=providerIdForResponse(s);return new UserCredentialImpl({user:tt,providerId:nt,_tokenResponse:s,operationType:a})}static async _forOperation(i,a,s){await i._updateTokensIfNecessary(s,!0);const et=providerIdForResponse(s);return new UserCredentialImpl({user:i,providerId:et,_tokenResponse:s,operationType:a})}}function providerIdForResponse(o){return o.providerId?o.providerId:"phoneNumber"in o?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MultiFactorError extends FirebaseError{constructor(i,a,s,et){var tt;super(a.code,a.message),this.operationType=s,this.user=et,Object.setPrototypeOf(this,MultiFactorError.prototype),this.customData={appName:i.name,tenantId:(tt=i.tenantId)!==null&&tt!==void 0?tt:void 0,_serverResponse:a.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(i,a,s,et){return new MultiFactorError(i,a,s,et)}}function _processCredentialSavingMfaContextIfNecessary(o,i,a,s){return(i==="reauthenticate"?a._getReauthenticationResolver(o):a._getIdTokenResponse(o)).catch(tt=>{throw tt.code==="auth/multi-factor-auth-required"?MultiFactorError._fromErrorAndOperation(o,tt,i,s):tt})}async function _link$1(o,i,a=!1){const s=await _logoutIfInvalidated(o,i._linkToIdToken(o.auth,await o.getIdToken()),a);return UserCredentialImpl._forOperation(o,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _reauthenticate(o,i,a=!1){const{auth:s}=o,et="reauthenticate";try{const tt=await _logoutIfInvalidated(o,_processCredentialSavingMfaContextIfNecessary(s,et,i,o),a);_assert(tt.idToken,s,"internal-error");const nt=_parseToken(tt.idToken);_assert(nt,s,"internal-error");const{sub:rt}=nt;return _assert(o.uid===rt,s,"user-mismatch"),UserCredentialImpl._forOperation(o,et,tt)}catch(tt){throw(tt==null?void 0:tt.code)==="auth/user-not-found"&&_fail(s,"user-mismatch"),tt}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _signInWithCredential(o,i,a=!1){const s="signIn",et=await _processCredentialSavingMfaContextIfNecessary(o,s,i),tt=await UserCredentialImpl._fromIdTokenResponse(o,s,et);return a||await o._updateCurrentUser(tt.user),tt}async function signInWithCredential(o,i){return _signInWithCredential(_castAuth(o),i)}async function createUserWithEmailAndPassword(o,i,a){const s=_castAuth(o),et=await signUp(s,{returnSecureToken:!0,email:i,password:a}),tt=await UserCredentialImpl._fromIdTokenResponse(s,"signIn",et);return await s._updateCurrentUser(tt.user),tt}function signInWithEmailAndPassword(o,i,a){return signInWithCredential(getModularInstance(o),EmailAuthProvider.credential(i,a))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function updateProfile$1(o,i){return _performApiRequest(o,"POST","/v1/accounts:update",i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function updateProfile(o,{displayName:i,photoURL:a}){if(i===void 0&&a===void 0)return;const s=getModularInstance(o),tt={idToken:await s.getIdToken(),displayName:i,photoUrl:a,returnSecureToken:!0},nt=await _logoutIfInvalidated(s,updateProfile$1(s.auth,tt));s.displayName=nt.displayName||null,s.photoURL=nt.photoUrl||null;const rt=s.providerData.find(({providerId:ot})=>ot==="password");rt&&(rt.displayName=s.displayName,rt.photoURL=s.photoURL),await s._updateTokensIfNecessary(nt)}function onIdTokenChanged(o,i,a,s){return getModularInstance(o).onIdTokenChanged(i,a,s)}function beforeAuthStateChanged(o,i,a){return getModularInstance(o).beforeAuthStateChanged(i,a)}const STORAGE_AVAILABLE_KEY="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BrowserPersistenceClass{constructor(i,a){this.storageRetriever=i,this.type=a}_isAvailable(){try{return this.storage?(this.storage.setItem(STORAGE_AVAILABLE_KEY,"1"),this.storage.removeItem(STORAGE_AVAILABLE_KEY),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(i,a){return this.storage.setItem(i,JSON.stringify(a)),Promise.resolve()}_get(i){const a=this.storage.getItem(i);return Promise.resolve(a?JSON.parse(a):null)}_remove(i){return this.storage.removeItem(i),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _iframeCannotSyncWebStorage(){const o=getUA();return _isSafari(o)||_isIOS(o)}const _POLLING_INTERVAL_MS$1=1e3,IE10_LOCAL_STORAGE_SYNC_DELAY=10;class BrowserLocalPersistence extends BrowserPersistenceClass{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(i,a)=>this.onStorageEvent(i,a),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_iframeCannotSyncWebStorage()&&_isIframe(),this.fallbackToPolling=_isMobileBrowser(),this._shouldAllowMigration=!0}forAllChangedKeys(i){for(const a of Object.keys(this.listeners)){const s=this.storage.getItem(a),et=this.localCache[a];s!==et&&i(a,et,s)}}onStorageEvent(i,a=!1){if(!i.key){this.forAllChangedKeys((nt,rt,ot)=>{this.notifyListeners(nt,ot)});return}const s=i.key;if(a?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const nt=this.storage.getItem(s);if(i.newValue!==nt)i.newValue!==null?this.storage.setItem(s,i.newValue):this.storage.removeItem(s);else if(this.localCache[s]===i.newValue&&!a)return}const et=()=>{const nt=this.storage.getItem(s);!a&&this.localCache[s]===nt||this.notifyListeners(s,nt)},tt=this.storage.getItem(s);_isIE10()&&tt!==i.newValue&&i.newValue!==i.oldValue?setTimeout(et,IE10_LOCAL_STORAGE_SYNC_DELAY):et()}notifyListeners(i,a){this.localCache[i]=a;const s=this.listeners[i];if(s)for(const et of Array.from(s))et(a&&JSON.parse(a))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((i,a,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:i,oldValue:a,newValue:s}),!0)})},_POLLING_INTERVAL_MS$1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(i,a){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[i]||(this.listeners[i]=new Set,this.localCache[i]=this.storage.getItem(i)),this.listeners[i].add(a)}_removeListener(i,a){this.listeners[i]&&(this.listeners[i].delete(a),this.listeners[i].size===0&&delete this.listeners[i]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(i,a){await super._set(i,a),this.localCache[i]=JSON.stringify(a)}async _get(i){const a=await super._get(i);return this.localCache[i]=JSON.stringify(a),a}async _remove(i){await super._remove(i),delete this.localCache[i]}}BrowserLocalPersistence.type="LOCAL";const browserLocalPersistence=BrowserLocalPersistence;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BrowserSessionPersistence extends BrowserPersistenceClass{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(i,a){}_removeListener(i,a){}}BrowserSessionPersistence.type="SESSION";const browserSessionPersistence=BrowserSessionPersistence;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _allSettled(o){return Promise.all(o.map(async i=>{try{return{fulfilled:!0,value:await i}}catch(a){return{fulfilled:!1,reason:a}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Receiver{constructor(i){this.eventTarget=i,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(i){const a=this.receivers.find(et=>et.isListeningto(i));if(a)return a;const s=new Receiver(i);return this.receivers.push(s),s}isListeningto(i){return this.eventTarget===i}async handleEvent(i){const a=i,{eventId:s,eventType:et,data:tt}=a.data,nt=this.handlersMap[et];if(!(nt!=null&&nt.size))return;a.ports[0].postMessage({status:"ack",eventId:s,eventType:et});const rt=Array.from(nt).map(async it=>it(a.origin,tt)),ot=await _allSettled(rt);a.ports[0].postMessage({status:"done",eventId:s,eventType:et,response:ot})}_subscribe(i,a){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[i]||(this.handlersMap[i]=new Set),this.handlersMap[i].add(a)}_unsubscribe(i,a){this.handlersMap[i]&&a&&this.handlersMap[i].delete(a),(!a||this.handlersMap[i].size===0)&&delete this.handlersMap[i],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Receiver.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _generateEventId(o="",i=10){let a="";for(let s=0;s<i;s++)a+=Math.floor(Math.random()*10);return o+a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sender{constructor(i){this.target=i,this.handlers=new Set}removeMessageHandler(i){i.messageChannel&&(i.messageChannel.port1.removeEventListener("message",i.onMessage),i.messageChannel.port1.close()),this.handlers.delete(i)}async _send(i,a,s=50){const et=typeof MessageChannel<"u"?new MessageChannel:null;if(!et)throw new Error("connection_unavailable");let tt,nt;return new Promise((rt,ot)=>{const it=_generateEventId("",20);et.port1.start();const lt=setTimeout(()=>{ot(new Error("unsupported_event"))},s);nt={messageChannel:et,onMessage(st){const dt=st;if(dt.data.eventId===it)switch(dt.data.status){case"ack":clearTimeout(lt),tt=setTimeout(()=>{ot(new Error("timeout"))},3e3);break;case"done":clearTimeout(tt),rt(dt.data.response);break;default:clearTimeout(lt),clearTimeout(tt),ot(new Error("invalid_response"));break}}},this.handlers.add(nt),et.port1.addEventListener("message",nt.onMessage),this.target.postMessage({eventType:i,eventId:it,data:a},[et.port2])}).finally(()=>{nt&&this.removeMessageHandler(nt)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _window(){return window}function _setWindowLocation(o){_window().location.href=o}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _isWorker(){return typeof _window().WorkerGlobalScope<"u"&&typeof _window().importScripts=="function"}async function _getActiveServiceWorker(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _getServiceWorkerController(){var o;return((o=navigator==null?void 0:navigator.serviceWorker)===null||o===void 0?void 0:o.controller)||null}function _getWorkerGlobalScope(){return _isWorker()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DB_NAME="firebaseLocalStorageDb",DB_VERSION=1,DB_OBJECTSTORE_NAME="firebaseLocalStorage",DB_DATA_KEYPATH="fbase_key";class DBPromise{constructor(i){this.request=i}toPromise(){return new Promise((i,a)=>{this.request.addEventListener("success",()=>{i(this.request.result)}),this.request.addEventListener("error",()=>{a(this.request.error)})})}}function getObjectStore(o,i){return o.transaction([DB_OBJECTSTORE_NAME],i?"readwrite":"readonly").objectStore(DB_OBJECTSTORE_NAME)}function _deleteDatabase(){const o=indexedDB.deleteDatabase(DB_NAME);return new DBPromise(o).toPromise()}function _openDatabase(){const o=indexedDB.open(DB_NAME,DB_VERSION);return new Promise((i,a)=>{o.addEventListener("error",()=>{a(o.error)}),o.addEventListener("upgradeneeded",()=>{const s=o.result;try{s.createObjectStore(DB_OBJECTSTORE_NAME,{keyPath:DB_DATA_KEYPATH})}catch(et){a(et)}}),o.addEventListener("success",async()=>{const s=o.result;s.objectStoreNames.contains(DB_OBJECTSTORE_NAME)?i(s):(s.close(),await _deleteDatabase(),i(await _openDatabase()))})})}async function _putObject(o,i,a){const s=getObjectStore(o,!0).put({[DB_DATA_KEYPATH]:i,value:a});return new DBPromise(s).toPromise()}async function getObject(o,i){const a=getObjectStore(o,!1).get(i),s=await new DBPromise(a).toPromise();return s===void 0?null:s.value}function _deleteObject(o,i){const a=getObjectStore(o,!0).delete(i);return new DBPromise(a).toPromise()}const _POLLING_INTERVAL_MS=800,_TRANSACTION_RETRY_COUNT=3;class IndexedDBLocalPersistence{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _openDatabase(),this.db)}async _withRetries(i){let a=0;for(;;)try{const s=await this._openDb();return await i(s)}catch(s){if(a++>_TRANSACTION_RETRY_COUNT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _isWorker()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Receiver._getInstance(_getWorkerGlobalScope()),this.receiver._subscribe("keyChanged",async(i,a)=>({keyProcessed:(await this._poll()).includes(a.key)})),this.receiver._subscribe("ping",async(i,a)=>["keyChanged"])}async initializeSender(){var i,a;if(this.activeServiceWorker=await _getActiveServiceWorker(),!this.activeServiceWorker)return;this.sender=new Sender(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((i=s[0])===null||i===void 0)&&i.fulfilled&&!((a=s[0])===null||a===void 0)&&a.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(i){if(!(!this.sender||!this.activeServiceWorker||_getServiceWorkerController()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:i},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const i=await _openDatabase();return await _putObject(i,STORAGE_AVAILABLE_KEY,"1"),await _deleteObject(i,STORAGE_AVAILABLE_KEY),!0}catch{}return!1}async _withPendingWrite(i){this.pendingWrites++;try{await i()}finally{this.pendingWrites--}}async _set(i,a){return this._withPendingWrite(async()=>(await this._withRetries(s=>_putObject(s,i,a)),this.localCache[i]=a,this.notifyServiceWorker(i)))}async _get(i){const a=await this._withRetries(s=>getObject(s,i));return this.localCache[i]=a,a}async _remove(i){return this._withPendingWrite(async()=>(await this._withRetries(a=>_deleteObject(a,i)),delete this.localCache[i],this.notifyServiceWorker(i)))}async _poll(){const i=await this._withRetries(et=>{const tt=getObjectStore(et,!1).getAll();return new DBPromise(tt).toPromise()});if(!i)return[];if(this.pendingWrites!==0)return[];const a=[],s=new Set;for(const{fbase_key:et,value:tt}of i)s.add(et),JSON.stringify(this.localCache[et])!==JSON.stringify(tt)&&(this.notifyListeners(et,tt),a.push(et));for(const et of Object.keys(this.localCache))this.localCache[et]&&!s.has(et)&&(this.notifyListeners(et,null),a.push(et));return a}notifyListeners(i,a){this.localCache[i]=a;const s=this.listeners[i];if(s)for(const et of Array.from(s))et(a)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_POLLING_INTERVAL_MS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(i,a){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[i]||(this.listeners[i]=new Set,this._get(i)),this.listeners[i].add(a)}_removeListener(i,a){this.listeners[i]&&(this.listeners[i].delete(a),this.listeners[i].size===0&&delete this.listeners[i]),Object.keys(this.listeners).length===0&&this.stopPolling()}}IndexedDBLocalPersistence.type="LOCAL";const indexedDBLocalPersistence=IndexedDBLocalPersistence;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getScriptParentElement(){var o,i;return(i=(o=document.getElementsByTagName("head"))===null||o===void 0?void 0:o[0])!==null&&i!==void 0?i:document}function _loadJS(o){return new Promise((i,a)=>{const s=document.createElement("script");s.setAttribute("src",o),s.onload=i,s.onerror=et=>{const tt=_createError("internal-error");tt.customData=et,a(tt)},s.type="text/javascript",s.charset="UTF-8",getScriptParentElement().appendChild(s)})}function _generateCallbackName(o){return`__${o}${Math.floor(Math.random()*1e6)}`}new Delay(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _withDefaultResolver(o,i){return i?_getInstance(i):(_assert(o._popupRedirectResolver,o,"argument-error"),o._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IdpCredential extends AuthCredential{constructor(i){super("custom","custom"),this.params=i}_getIdTokenResponse(i){return signInWithIdp(i,this._buildIdpRequest())}_linkToIdToken(i,a){return signInWithIdp(i,this._buildIdpRequest(a))}_getReauthenticationResolver(i){return signInWithIdp(i,this._buildIdpRequest())}_buildIdpRequest(i){const a={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return i&&(a.idToken=i),a}}function _signIn(o){return _signInWithCredential(o.auth,new IdpCredential(o),o.bypassAuthState)}function _reauth(o){const{auth:i,user:a}=o;return _assert(a,i,"internal-error"),_reauthenticate(a,new IdpCredential(o),o.bypassAuthState)}async function _link(o){const{auth:i,user:a}=o;return _assert(a,i,"internal-error"),_link$1(a,new IdpCredential(o),o.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AbstractPopupRedirectOperation{constructor(i,a,s,et,tt=!1){this.auth=i,this.resolver=s,this.user=et,this.bypassAuthState=tt,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(a)?a:[a]}execute(){return new Promise(async(i,a)=>{this.pendingPromise={resolve:i,reject:a};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(i){const{urlResponse:a,sessionId:s,postBody:et,tenantId:tt,error:nt,type:rt}=i;if(nt){this.reject(nt);return}const ot={auth:this.auth,requestUri:a,sessionId:s,tenantId:tt||void 0,postBody:et||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(rt)(ot))}catch(it){this.reject(it)}}onError(i){this.reject(i)}getIdpTask(i){switch(i){case"signInViaPopup":case"signInViaRedirect":return _signIn;case"linkViaPopup":case"linkViaRedirect":return _link;case"reauthViaPopup":case"reauthViaRedirect":return _reauth;default:_fail(this.auth,"internal-error")}}resolve(i){debugAssert(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(i),this.unregisterAndCleanUp()}reject(i){debugAssert(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(i),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _POLL_WINDOW_CLOSE_TIMEOUT=new Delay(2e3,1e4);class PopupOperation extends AbstractPopupRedirectOperation{constructor(i,a,s,et,tt){super(i,a,et,tt),this.provider=s,this.authWindow=null,this.pollId=null,PopupOperation.currentPopupAction&&PopupOperation.currentPopupAction.cancel(),PopupOperation.currentPopupAction=this}async executeNotNull(){const i=await this.execute();return _assert(i,this.auth,"internal-error"),i}async onExecution(){debugAssert(this.filter.length===1,"Popup operations only handle one event");const i=_generateEventId();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],i),this.authWindow.associatedEvent=i,this.resolver._originValidation(this.auth).catch(a=>{this.reject(a)}),this.resolver._isIframeWebStorageSupported(this.auth,a=>{a||this.reject(_createError(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var i;return((i=this.authWindow)===null||i===void 0?void 0:i.associatedEvent)||null}cancel(){this.reject(_createError(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,PopupOperation.currentPopupAction=null}pollUserCancellation(){const i=()=>{var a,s;if(!((s=(a=this.authWindow)===null||a===void 0?void 0:a.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_createError(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(i,_POLL_WINDOW_CLOSE_TIMEOUT.get())};i()}}PopupOperation.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PENDING_REDIRECT_KEY="pendingRedirect",redirectOutcomeMap=new Map;class RedirectAction extends AbstractPopupRedirectOperation{constructor(i,a,s=!1){super(i,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],a,void 0,s),this.eventId=null}async execute(){let i=redirectOutcomeMap.get(this.auth._key());if(!i){try{const s=await _getAndClearPendingRedirectStatus(this.resolver,this.auth)?await super.execute():null;i=()=>Promise.resolve(s)}catch(a){i=()=>Promise.reject(a)}redirectOutcomeMap.set(this.auth._key(),i)}return this.bypassAuthState||redirectOutcomeMap.set(this.auth._key(),()=>Promise.resolve(null)),i()}async onAuthEvent(i){if(i.type==="signInViaRedirect")return super.onAuthEvent(i);if(i.type==="unknown"){this.resolve(null);return}if(i.eventId){const a=await this.auth._redirectUserForId(i.eventId);if(a)return this.user=a,super.onAuthEvent(i);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _getAndClearPendingRedirectStatus(o,i){const a=pendingRedirectKey(i),s=resolverPersistence(o);if(!await s._isAvailable())return!1;const et=await s._get(a)==="true";return await s._remove(a),et}function _overrideRedirectResult(o,i){redirectOutcomeMap.set(o._key(),i)}function resolverPersistence(o){return _getInstance(o._redirectPersistence)}function pendingRedirectKey(o){return _persistenceKeyName(PENDING_REDIRECT_KEY,o.config.apiKey,o.name)}async function _getRedirectResult(o,i,a=!1){const s=_castAuth(o),et=_withDefaultResolver(s,i),nt=await new RedirectAction(s,et,a).execute();return nt&&!a&&(delete nt.user._redirectEventId,await s._persistUserIfCurrent(nt.user),await s._setRedirectUser(null,i)),nt}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EVENT_DUPLICATION_CACHE_DURATION_MS=10*60*1e3;class AuthEventManager{constructor(i){this.auth=i,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(i){this.consumers.add(i),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,i)&&(this.sendToConsumer(this.queuedRedirectEvent,i),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(i){this.consumers.delete(i)}onEvent(i){if(this.hasEventBeenHandled(i))return!1;let a=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(i,s)&&(a=!0,this.sendToConsumer(i,s),this.saveEventToCache(i))}),this.hasHandledPotentialRedirect||!isRedirectEvent(i)||(this.hasHandledPotentialRedirect=!0,a||(this.queuedRedirectEvent=i,a=!0)),a}sendToConsumer(i,a){var s;if(i.error&&!isNullRedirectEvent(i)){const et=((s=i.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";a.onError(_createError(this.auth,et))}else a.onAuthEvent(i)}isEventForConsumer(i,a){const s=a.eventId===null||!!i.eventId&&i.eventId===a.eventId;return a.filter.includes(i.type)&&s}hasEventBeenHandled(i){return Date.now()-this.lastProcessedEventTime>=EVENT_DUPLICATION_CACHE_DURATION_MS&&this.cachedEventUids.clear(),this.cachedEventUids.has(eventUid(i))}saveEventToCache(i){this.cachedEventUids.add(eventUid(i)),this.lastProcessedEventTime=Date.now()}}function eventUid(o){return[o.type,o.eventId,o.sessionId,o.tenantId].filter(i=>i).join("-")}function isNullRedirectEvent({type:o,error:i}){return o==="unknown"&&(i==null?void 0:i.code)==="auth/no-auth-event"}function isRedirectEvent(o){switch(o.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return isNullRedirectEvent(o);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _getProjectConfig(o,i={}){return _performApiRequest(o,"GET","/v1/projects",i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP_ADDRESS_REGEX=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HTTP_REGEX=/^https?/;async function _validateOrigin(o){if(o.config.emulator)return;const{authorizedDomains:i}=await _getProjectConfig(o);for(const a of i)try{if(matchDomain(a))return}catch{}_fail(o,"unauthorized-domain")}function matchDomain(o){const i=_getCurrentUrl(),{protocol:a,hostname:s}=new URL(i);if(o.startsWith("chrome-extension://")){const nt=new URL(o);return nt.hostname===""&&s===""?a==="chrome-extension:"&&o.replace("chrome-extension://","")===i.replace("chrome-extension://",""):a==="chrome-extension:"&&nt.hostname===s}if(!HTTP_REGEX.test(a))return!1;if(IP_ADDRESS_REGEX.test(o))return s===o;const et=o.replace(/\./g,"\\.");return new RegExp("^(.+\\."+et+"|"+et+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NETWORK_TIMEOUT=new Delay(3e4,6e4);function resetUnloadedGapiModules(){const o=_window().___jsl;if(o!=null&&o.H){for(const i of Object.keys(o.H))if(o.H[i].r=o.H[i].r||[],o.H[i].L=o.H[i].L||[],o.H[i].r=[...o.H[i].L],o.CP)for(let a=0;a<o.CP.length;a++)o.CP[a]=null}}function loadGapi(o){return new Promise((i,a)=>{var s,et,tt;function nt(){resetUnloadedGapiModules(),gapi.load("gapi.iframes",{callback:()=>{i(gapi.iframes.getContext())},ontimeout:()=>{resetUnloadedGapiModules(),a(_createError(o,"network-request-failed"))},timeout:NETWORK_TIMEOUT.get()})}if(!((et=(s=_window().gapi)===null||s===void 0?void 0:s.iframes)===null||et===void 0)&&et.Iframe)i(gapi.iframes.getContext());else if(!((tt=_window().gapi)===null||tt===void 0)&&tt.load)nt();else{const rt=_generateCallbackName("iframefcb");return _window()[rt]=()=>{gapi.load?nt():a(_createError(o,"network-request-failed"))},_loadJS(`https://apis.google.com/js/api.js?onload=${rt}`).catch(ot=>a(ot))}}).catch(i=>{throw cachedGApiLoader=null,i})}let cachedGApiLoader=null;function _loadGapi(o){return cachedGApiLoader=cachedGApiLoader||loadGapi(o),cachedGApiLoader}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PING_TIMEOUT=new Delay(5e3,15e3),IFRAME_PATH="__/auth/iframe",EMULATED_IFRAME_PATH="emulator/auth/iframe",IFRAME_ATTRIBUTES={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},EID_FROM_APIHOST=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function getIframeUrl(o){const i=o.config;_assert(i.authDomain,o,"auth-domain-config-required");const a=i.emulator?_emulatorUrl(i,EMULATED_IFRAME_PATH):`https://${o.config.authDomain}/${IFRAME_PATH}`,s={apiKey:i.apiKey,appName:o.name,v:SDK_VERSION},et=EID_FROM_APIHOST.get(o.config.apiHost);et&&(s.eid=et);const tt=o._getFrameworks();return tt.length&&(s.fw=tt.join(",")),`${a}?${querystring(s).slice(1)}`}async function _openIframe(o){const i=await _loadGapi(o),a=_window().gapi;return _assert(a,o,"internal-error"),i.open({where:document.body,url:getIframeUrl(o),messageHandlersFilter:a.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IFRAME_ATTRIBUTES,dontclear:!0},s=>new Promise(async(et,tt)=>{await s.restyle({setHideOnLeave:!1});const nt=_createError(o,"network-request-failed"),rt=_window().setTimeout(()=>{tt(nt)},PING_TIMEOUT.get());function ot(){_window().clearTimeout(rt),et(s)}s.ping(ot).then(ot,()=>{tt(nt)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BASE_POPUP_OPTIONS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DEFAULT_WIDTH=500,DEFAULT_HEIGHT=600,TARGET_BLANK="_blank",FIREFOX_EMPTY_URL="http://localhost";class AuthPopup{constructor(i){this.window=i,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _open(o,i,a,s=DEFAULT_WIDTH,et=DEFAULT_HEIGHT){const tt=Math.max((window.screen.availHeight-et)/2,0).toString(),nt=Math.max((window.screen.availWidth-s)/2,0).toString();let rt="";const ot=Object.assign(Object.assign({},BASE_POPUP_OPTIONS),{width:s.toString(),height:et.toString(),top:tt,left:nt}),it=getUA().toLowerCase();a&&(rt=_isChromeIOS(it)?TARGET_BLANK:a),_isFirefox(it)&&(i=i||FIREFOX_EMPTY_URL,ot.scrollbars="yes");const lt=Object.entries(ot).reduce((dt,[ht,pt])=>`${dt}${ht}=${pt},`,"");if(_isIOSStandalone(it)&&rt!=="_self")return openAsNewWindowIOS(i||"",rt),new AuthPopup(null);const st=window.open(i||"",rt,lt);_assert(st,o,"popup-blocked");try{st.focus()}catch{}return new AuthPopup(st)}function openAsNewWindowIOS(o,i){const a=document.createElement("a");a.href=o,a.target=i;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),a.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WIDGET_PATH="__/auth/handler",EMULATOR_WIDGET_PATH="emulator/auth/handler";function _getRedirectUrl(o,i,a,s,et,tt){_assert(o.config.authDomain,o,"auth-domain-config-required"),_assert(o.config.apiKey,o,"invalid-api-key");const nt={apiKey:o.config.apiKey,appName:o.name,authType:a,redirectUrl:s,v:SDK_VERSION,eventId:et};if(i instanceof FederatedAuthProvider){i.setDefaultLanguage(o.languageCode),nt.providerId=i.providerId||"",isEmpty(i.getCustomParameters())||(nt.customParameters=JSON.stringify(i.getCustomParameters()));for(const[ot,it]of Object.entries(tt||{}))nt[ot]=it}if(i instanceof BaseOAuthProvider){const ot=i.getScopes().filter(it=>it!=="");ot.length>0&&(nt.scopes=ot.join(","))}o.tenantId&&(nt.tid=o.tenantId);const rt=nt;for(const ot of Object.keys(rt))rt[ot]===void 0&&delete rt[ot];return`${getHandlerBase(o)}?${querystring(rt).slice(1)}`}function getHandlerBase({config:o}){return o.emulator?_emulatorUrl(o,EMULATOR_WIDGET_PATH):`https://${o.authDomain}/${WIDGET_PATH}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WEB_STORAGE_SUPPORT_KEY="webStorageSupport";class BrowserPopupRedirectResolver{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=browserSessionPersistence,this._completeRedirectFn=_getRedirectResult,this._overrideRedirectResult=_overrideRedirectResult}async _openPopup(i,a,s,et){var tt;debugAssert((tt=this.eventManagers[i._key()])===null||tt===void 0?void 0:tt.manager,"_initialize() not called before _openPopup()");const nt=_getRedirectUrl(i,a,s,_getCurrentUrl(),et);return _open(i,nt,_generateEventId())}async _openRedirect(i,a,s,et){return await this._originValidation(i),_setWindowLocation(_getRedirectUrl(i,a,s,_getCurrentUrl(),et)),new Promise(()=>{})}_initialize(i){const a=i._key();if(this.eventManagers[a]){const{manager:et,promise:tt}=this.eventManagers[a];return et?Promise.resolve(et):(debugAssert(tt,"If manager is not set, promise should be"),tt)}const s=this.initAndGetManager(i);return this.eventManagers[a]={promise:s},s.catch(()=>{delete this.eventManagers[a]}),s}async initAndGetManager(i){const a=await _openIframe(i),s=new AuthEventManager(i);return a.register("authEvent",et=>(_assert(et==null?void 0:et.authEvent,i,"invalid-auth-event"),{status:s.onEvent(et.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[i._key()]={manager:s},this.iframes[i._key()]=a,s}_isIframeWebStorageSupported(i,a){this.iframes[i._key()].send(WEB_STORAGE_SUPPORT_KEY,{type:WEB_STORAGE_SUPPORT_KEY},et=>{var tt;const nt=(tt=et==null?void 0:et[0])===null||tt===void 0?void 0:tt[WEB_STORAGE_SUPPORT_KEY];nt!==void 0&&a(!!nt),_fail(i,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(i){const a=i._key();return this.originValidationPromises[a]||(this.originValidationPromises[a]=_validateOrigin(i)),this.originValidationPromises[a]}get _shouldInitProactively(){return _isMobileBrowser()||_isSafari()||_isIOS()}}const browserPopupRedirectResolver=BrowserPopupRedirectResolver;var name="@firebase/auth",version="0.21.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AuthInterop{constructor(i){this.auth=i,this.internalListeners=new Map}getUid(){var i;return this.assertAuthConfigured(),((i=this.auth.currentUser)===null||i===void 0?void 0:i.uid)||null}async getToken(i){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(i)}:null}addAuthTokenListener(i){if(this.assertAuthConfigured(),this.internalListeners.has(i))return;const a=this.auth.onIdTokenChanged(s=>{i((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(i,a),this.updateProactiveRefresh()}removeAuthTokenListener(i){this.assertAuthConfigured();const a=this.internalListeners.get(i);a&&(this.internalListeners.delete(i),a(),this.updateProactiveRefresh())}assertAuthConfigured(){_assert(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getVersionForPlatform(o){switch(o){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function registerAuth(o){_registerComponent(new Component("auth",(i,{options:a})=>{const s=i.getProvider("app").getImmediate(),et=i.getProvider("heartbeat"),{apiKey:tt,authDomain:nt}=s.options;return((rt,ot)=>{_assert(tt&&!tt.includes(":"),"invalid-api-key",{appName:rt.name}),_assert(!(nt!=null&&nt.includes(":")),"argument-error",{appName:rt.name});const it={apiKey:tt,authDomain:nt,clientPlatform:o,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_getClientVersion(o)},lt=new AuthImpl(rt,ot,it);return _initializeAuthInstance(lt,a),lt})(s,et)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((i,a,s)=>{i.getProvider("auth-internal").initialize()})),_registerComponent(new Component("auth-internal",i=>{const a=_castAuth(i.getProvider("auth").getImmediate());return(s=>new AuthInterop(s))(a)},"PRIVATE").setInstantiationMode("EXPLICIT")),registerVersion(name,version,getVersionForPlatform(o)),registerVersion(name,version,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DEFAULT_ID_TOKEN_MAX_AGE=5*60,authIdTokenMaxAge=getExperimentalSetting("authIdTokenMaxAge")||DEFAULT_ID_TOKEN_MAX_AGE;let lastPostedIdToken=null;const mintCookieFactory=o=>async i=>{const a=i&&await i.getIdTokenResult(),s=a&&(new Date().getTime()-Date.parse(a.issuedAtTime))/1e3;if(s&&s>authIdTokenMaxAge)return;const et=a==null?void 0:a.token;lastPostedIdToken!==et&&(lastPostedIdToken=et,await fetch(o,{method:et?"POST":"DELETE",headers:et?{Authorization:`Bearer ${et}`}:{}}))};function getAuth(o=getApp()){const i=_getProvider(o,"auth");if(i.isInitialized())return i.getImmediate();const a=initializeAuth(o,{popupRedirectResolver:browserPopupRedirectResolver,persistence:[indexedDBLocalPersistence,browserLocalPersistence,browserSessionPersistence]}),s=getExperimentalSetting("authTokenSyncURL");if(s){const tt=mintCookieFactory(s);beforeAuthStateChanged(a,tt,()=>tt(a.currentUser)),onIdTokenChanged(a,nt=>tt(nt))}const et=getDefaultEmulatorHost("auth");return et&&connectAuthEmulator(a,`http://${et}`),a}registerAuth("Browser");const firebaseConfig={apiKey:"AIzaSyDTRgh5JezWPhUptC1uRb-q-FHlXFPOI-4",authDomain:"fir-login-24406.firebaseapp.com",projectId:"fir-login-24406",storageBucket:"fir-login-24406.appspot.com",messagingSenderId:"136995530531",appId:"1:136995530531:web:2fd58f8cdcd91974e28e96",measurementId:"G-9JHJYLKEFM"},app=initializeApp(firebaseConfig);getAnalytics(app);const auth=getAuth();var reactIsExports$1={},reactIs$2={get exports(){return reactIsExports$1},set exports(o){reactIsExports$1=o}},reactIs_production_min$1={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b$2=Symbol.for("react.element"),c$1=Symbol.for("react.portal"),d$1=Symbol.for("react.fragment"),e$1=Symbol.for("react.strict_mode"),f$1=Symbol.for("react.profiler"),g$2=Symbol.for("react.provider"),h$1=Symbol.for("react.context"),k$2=Symbol.for("react.server_context"),l$1=Symbol.for("react.forward_ref"),m$1=Symbol.for("react.suspense"),n$1=Symbol.for("react.suspense_list"),p$1=Symbol.for("react.memo"),q$2=Symbol.for("react.lazy"),t$1=Symbol.for("react.offscreen"),u;u=Symbol.for("react.module.reference");function v$2(o){if(typeof o=="object"&&o!==null){var i=o.$$typeof;switch(i){case b$2:switch(o=o.type,o){case d$1:case f$1:case e$1:case m$1:case n$1:return o;default:switch(o=o&&o.$$typeof,o){case k$2:case h$1:case l$1:case q$2:case p$1:case g$2:return o;default:return i}}case c$1:return i}}}reactIs_production_min$1.ContextConsumer=h$1;reactIs_production_min$1.ContextProvider=g$2;reactIs_production_min$1.Element=b$2;reactIs_production_min$1.ForwardRef=l$1;reactIs_production_min$1.Fragment=d$1;reactIs_production_min$1.Lazy=q$2;reactIs_production_min$1.Memo=p$1;reactIs_production_min$1.Portal=c$1;reactIs_production_min$1.Profiler=f$1;reactIs_production_min$1.StrictMode=e$1;reactIs_production_min$1.Suspense=m$1;reactIs_production_min$1.SuspenseList=n$1;reactIs_production_min$1.isAsyncMode=function(){return!1};reactIs_production_min$1.isConcurrentMode=function(){return!1};reactIs_production_min$1.isContextConsumer=function(o){return v$2(o)===h$1};reactIs_production_min$1.isContextProvider=function(o){return v$2(o)===g$2};reactIs_production_min$1.isElement=function(o){return typeof o=="object"&&o!==null&&o.$$typeof===b$2};reactIs_production_min$1.isForwardRef=function(o){return v$2(o)===l$1};reactIs_production_min$1.isFragment=function(o){return v$2(o)===d$1};reactIs_production_min$1.isLazy=function(o){return v$2(o)===q$2};reactIs_production_min$1.isMemo=function(o){return v$2(o)===p$1};reactIs_production_min$1.isPortal=function(o){return v$2(o)===c$1};reactIs_production_min$1.isProfiler=function(o){return v$2(o)===f$1};reactIs_production_min$1.isStrictMode=function(o){return v$2(o)===e$1};reactIs_production_min$1.isSuspense=function(o){return v$2(o)===m$1};reactIs_production_min$1.isSuspenseList=function(o){return v$2(o)===n$1};reactIs_production_min$1.isValidElementType=function(o){return typeof o=="string"||typeof o=="function"||o===d$1||o===f$1||o===e$1||o===m$1||o===n$1||o===t$1||typeof o=="object"&&o!==null&&(o.$$typeof===q$2||o.$$typeof===p$1||o.$$typeof===g$2||o.$$typeof===h$1||o.$$typeof===l$1||o.$$typeof===u||o.getModuleId!==void 0)};reactIs_production_min$1.typeOf=v$2;(function(o){o.exports=reactIs_production_min$1})(reactIs$2);function stylis_min(o){function i(St,Et,bt,At,ft){for(var Rt=0,xt=0,$t=0,Tt=0,Ot,Pt,jt=0,Gt=0,Nt,Yt=Nt=Ot=0,Ut=0,qt=0,en=0,Jt=0,rn=bt.length,nn=rn-1,tn,Bt="",Zt="",an="",sn="",on;Ut<rn;){if(Pt=bt.charCodeAt(Ut),Ut===nn&&xt+Tt+$t+Rt!==0&&(xt!==0&&(Pt=xt===47?10:47),Tt=$t=Rt=0,rn++,nn++),xt+Tt+$t+Rt===0){if(Ut===nn&&(0<qt&&(Bt=Bt.replace(dt,"")),0<Bt.trim().length)){switch(Pt){case 32:case 9:case 59:case 13:case 10:break;default:Bt+=bt.charAt(Ut)}Pt=59}switch(Pt){case 123:for(Bt=Bt.trim(),Ot=Bt.charCodeAt(0),Nt=1,Jt=++Ut;Ut<rn;){switch(Pt=bt.charCodeAt(Ut)){case 123:Nt++;break;case 125:Nt--;break;case 47:switch(Pt=bt.charCodeAt(Ut+1)){case 42:case 47:e:{for(Yt=Ut+1;Yt<nn;++Yt)switch(bt.charCodeAt(Yt)){case 47:if(Pt===42&&bt.charCodeAt(Yt-1)===42&&Ut+2!==Yt){Ut=Yt+1;break e}break;case 10:if(Pt===47){Ut=Yt+1;break e}}Ut=Yt}}break;case 91:Pt++;case 40:Pt++;case 34:case 39:for(;Ut++<nn&&bt.charCodeAt(Ut)!==Pt;);}if(Nt===0)break;Ut++}switch(Nt=bt.substring(Jt,Ut),Ot===0&&(Ot=(Bt=Bt.replace(st,"").trim()).charCodeAt(0)),Ot){case 64:switch(0<qt&&(Bt=Bt.replace(dt,"")),Pt=Bt.charCodeAt(1),Pt){case 100:case 109:case 115:case 45:qt=Et;break;default:qt=Xt}if(Nt=i(Et,qt,Nt,Pt,ft+1),Jt=Nt.length,0<_t&&(qt=a(Xt,Bt,en),on=rt(3,Nt,qt,Et,Ht,Ft,Jt,Pt,ft,At),Bt=qt.join(""),on!==void 0&&(Jt=(Nt=on.trim()).length)===0&&(Pt=0,Nt="")),0<Jt)switch(Pt){case 115:Bt=Bt.replace(wt,nt);case 100:case 109:case 45:Nt=Bt+"{"+Nt+"}";break;case 107:Bt=Bt.replace(at,"$1 $2"),Nt=Bt+"{"+Nt+"}",Nt=zt===1||zt===2&&tt("@"+Nt,3)?"@-webkit-"+Nt+"@"+Nt:"@"+Nt;break;default:Nt=Bt+Nt,At===112&&(Nt=(Zt+=Nt,""))}else Nt="";break;default:Nt=i(Et,a(Et,Bt,en),Nt,At,ft+1)}an+=Nt,Nt=en=qt=Yt=Ot=0,Bt="",Pt=bt.charCodeAt(++Ut);break;case 125:case 59:if(Bt=(0<qt?Bt.replace(dt,""):Bt).trim(),1<(Jt=Bt.length))switch(Yt===0&&(Ot=Bt.charCodeAt(0),Ot===45||96<Ot&&123>Ot)&&(Jt=(Bt=Bt.replace(" ",":")).length),0<_t&&(on=rt(1,Bt,Et,St,Ht,Ft,Zt.length,At,ft,At))!==void 0&&(Jt=(Bt=on.trim()).length)===0&&(Bt="\0\0"),Ot=Bt.charCodeAt(0),Pt=Bt.charCodeAt(1),Ot){case 0:break;case 64:if(Pt===105||Pt===99){sn+=Bt+bt.charAt(Ut);break}default:Bt.charCodeAt(Jt-1)!==58&&(Zt+=et(Bt,Ot,Pt,Bt.charCodeAt(2)))}en=qt=Yt=Ot=0,Bt="",Pt=bt.charCodeAt(++Ut)}}switch(Pt){case 13:case 10:xt===47?xt=0:1+Ot===0&&At!==107&&0<Bt.length&&(qt=1,Bt+="\0"),0<_t*Lt&&rt(0,Bt,Et,St,Ht,Ft,Zt.length,At,ft,At),Ft=1,Ht++;break;case 59:case 125:if(xt+Tt+$t+Rt===0){Ft++;break}default:switch(Ft++,tn=bt.charAt(Ut),Pt){case 9:case 32:if(Tt+Rt+xt===0)switch(jt){case 44:case 58:case 9:case 32:tn="";break;default:Pt!==32&&(tn=" ")}break;case 0:tn="\\0";break;case 12:tn="\\f";break;case 11:tn="\\v";break;case 38:Tt+xt+Rt===0&&(qt=en=1,tn="\f"+tn);break;case 108:if(Tt+xt+Rt+Kt===0&&0<Yt)switch(Ut-Yt){case 2:jt===112&&bt.charCodeAt(Ut-3)===58&&(Kt=jt);case 8:Gt===111&&(Kt=Gt)}break;case 58:Tt+xt+Rt===0&&(Yt=Ut);break;case 44:xt+$t+Tt+Rt===0&&(qt=1,tn+="\r");break;case 34:case 39:xt===0&&(Tt=Tt===Pt?0:Tt===0?Pt:Tt);break;case 91:Tt+xt+$t===0&&Rt++;break;case 93:Tt+xt+$t===0&&Rt--;break;case 41:Tt+xt+Rt===0&&$t--;break;case 40:if(Tt+xt+Rt===0){if(Ot===0)switch(2*jt+3*Gt){case 533:break;default:Ot=1}$t++}break;case 64:xt+$t+Tt+Rt+Yt+Nt===0&&(Nt=1);break;case 42:case 47:if(!(0<Tt+Rt+$t))switch(xt){case 0:switch(2*Pt+3*bt.charCodeAt(Ut+1)){case 235:xt=47;break;case 220:Jt=Ut,xt=42}break;case 42:Pt===47&&jt===42&&Jt+2!==Ut&&(bt.charCodeAt(Jt+2)===33&&(Zt+=bt.substring(Jt,Ut+1)),tn="",xt=0)}}xt===0&&(Bt+=tn)}Gt=jt,jt=Pt,Ut++}if(Jt=Zt.length,0<Jt){if(qt=Et,0<_t&&(on=rt(2,Zt,qt,St,Ht,Ft,Jt,At,ft,At),on!==void 0&&(Zt=on).length===0))return sn+Zt+an;if(Zt=qt.join(",")+"{"+Zt+"}",zt*Kt!==0){switch(zt!==2||tt(Zt,2)||(Kt=0),Kt){case 111:Zt=Zt.replace(gt,":-moz-$1")+Zt;break;case 112:Zt=Zt.replace(ut,"::-webkit-input-$1")+Zt.replace(ut,"::-moz-$1")+Zt.replace(ut,":-ms-input-$1")+Zt}Kt=0}}return sn+Zt+an}function a(St,Et,bt){var At=Et.trim().split(yt);Et=At;var ft=At.length,Rt=St.length;switch(Rt){case 0:case 1:var xt=0;for(St=Rt===0?"":St[0]+" ";xt<ft;++xt)Et[xt]=s(St,Et[xt],bt).trim();break;default:var $t=xt=0;for(Et=[];xt<ft;++xt)for(var Tt=0;Tt<Rt;++Tt)Et[$t++]=s(St[Tt]+" ",At[xt],bt).trim()}return Et}function s(St,Et,bt){var At=Et.charCodeAt(0);switch(33>At&&(At=(Et=Et.trim()).charCodeAt(0)),At){case 38:return Et.replace(ct,"$1"+St.trim());case 58:return St.trim()+Et.replace(ct,"$1"+St.trim());default:if(0<1*bt&&0<Et.indexOf("\f"))return Et.replace(ct,(St.charCodeAt(0)===58?"":"$1")+St.trim())}return St+Et}function et(St,Et,bt,At){var ft=St+";",Rt=2*Et+3*bt+4*At;if(Rt===944){St=ft.indexOf(":",9)+1;var xt=ft.substring(St,ft.length-1).trim();return xt=ft.substring(0,St).trim()+xt+";",zt===1||zt===2&&tt(xt,1)?"-webkit-"+xt+xt:xt}if(zt===0||zt===2&&!tt(ft,1))return ft;switch(Rt){case 1015:return ft.charCodeAt(10)===97?"-webkit-"+ft+ft:ft;case 951:return ft.charCodeAt(3)===116?"-webkit-"+ft+ft:ft;case 963:return ft.charCodeAt(5)===110?"-webkit-"+ft+ft:ft;case 1009:if(ft.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+ft+ft;case 978:return"-webkit-"+ft+"-moz-"+ft+ft;case 1019:case 983:return"-webkit-"+ft+"-moz-"+ft+"-ms-"+ft+ft;case 883:if(ft.charCodeAt(8)===45)return"-webkit-"+ft+ft;if(0<ft.indexOf("image-set(",11))return ft.replace(Wt,"$1-webkit-$2")+ft;break;case 932:if(ft.charCodeAt(4)===45)switch(ft.charCodeAt(5)){case 103:return"-webkit-box-"+ft.replace("-grow","")+"-webkit-"+ft+"-ms-"+ft.replace("grow","positive")+ft;case 115:return"-webkit-"+ft+"-ms-"+ft.replace("shrink","negative")+ft;case 98:return"-webkit-"+ft+"-ms-"+ft.replace("basis","preferred-size")+ft}return"-webkit-"+ft+"-ms-"+ft+ft;case 964:return"-webkit-"+ft+"-ms-flex-"+ft+ft;case 1023:if(ft.charCodeAt(8)!==99)break;return xt=ft.substring(ft.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+xt+"-webkit-"+ft+"-ms-flex-pack"+xt+ft;case 1005:return pt.test(ft)?ft.replace(ht,":-webkit-")+ft.replace(ht,":-moz-")+ft:ft;case 1e3:switch(xt=ft.substring(13).trim(),Et=xt.indexOf("-")+1,xt.charCodeAt(0)+xt.charCodeAt(Et)){case 226:xt=ft.replace(vt,"tb");break;case 232:xt=ft.replace(vt,"tb-rl");break;case 220:xt=ft.replace(vt,"lr");break;default:return ft}return"-webkit-"+ft+"-ms-"+xt+ft;case 1017:if(ft.indexOf("sticky",9)===-1)break;case 975:switch(Et=(ft=St).length-10,xt=(ft.charCodeAt(Et)===33?ft.substring(0,Et):ft).substring(St.indexOf(":",7)+1).trim(),Rt=xt.charCodeAt(0)+(xt.charCodeAt(7)|0)){case 203:if(111>xt.charCodeAt(8))break;case 115:ft=ft.replace(xt,"-webkit-"+xt)+";"+ft;break;case 207:case 102:ft=ft.replace(xt,"-webkit-"+(102<Rt?"inline-":"")+"box")+";"+ft.replace(xt,"-webkit-"+xt)+";"+ft.replace(xt,"-ms-"+xt+"box")+";"+ft}return ft+";";case 938:if(ft.charCodeAt(5)===45)switch(ft.charCodeAt(6)){case 105:return xt=ft.replace("-items",""),"-webkit-"+ft+"-webkit-box-"+xt+"-ms-flex-"+xt+ft;case 115:return"-webkit-"+ft+"-ms-flex-item-"+ft.replace(It,"")+ft;default:return"-webkit-"+ft+"-ms-flex-line-pack"+ft.replace("align-content","").replace(It,"")+ft}break;case 973:case 989:if(ft.charCodeAt(3)!==45||ft.charCodeAt(4)===122)break;case 931:case 953:if(Dt.test(St)===!0)return(xt=St.substring(St.indexOf(":")+1)).charCodeAt(0)===115?et(St.replace("stretch","fill-available"),Et,bt,At).replace(":fill-available",":stretch"):ft.replace(xt,"-webkit-"+xt)+ft.replace(xt,"-moz-"+xt.replace("fill-",""))+ft;break;case 962:if(ft="-webkit-"+ft+(ft.charCodeAt(5)===102?"-ms-"+ft:"")+ft,bt+At===211&&ft.charCodeAt(13)===105&&0<ft.indexOf("transform",10))return ft.substring(0,ft.indexOf(";",27)+1).replace(mt,"$1-webkit-$2")+ft}return ft}function tt(St,Et){var bt=St.indexOf(Et===1?":":"{"),At=St.substring(0,Et!==3?bt:10);return bt=St.substring(bt+1,St.length-1),Ct(Et!==2?At:At.replace(Mt,"$1"),bt,Et)}function nt(St,Et){var bt=et(Et,Et.charCodeAt(0),Et.charCodeAt(1),Et.charCodeAt(2));return bt!==Et+";"?bt.replace(kt," or ($1)").substring(4):"("+Et+")"}function rt(St,Et,bt,At,ft,Rt,xt,$t,Tt,Ot){for(var Pt=0,jt=Et,Gt;Pt<_t;++Pt)switch(Gt=Qt[Pt].call(lt,St,jt,bt,At,ft,Rt,xt,$t,Tt,Ot)){case void 0:case!1:case!0:case null:break;default:jt=Gt}if(jt!==Et)return jt}function ot(St){switch(St){case void 0:case null:_t=Qt.length=0;break;default:if(typeof St=="function")Qt[_t++]=St;else if(typeof St=="object")for(var Et=0,bt=St.length;Et<bt;++Et)ot(St[Et]);else Lt=!!St|0}return ot}function it(St){return St=St.prefix,St!==void 0&&(Ct=null,St?typeof St!="function"?zt=1:(zt=2,Ct=St):zt=0),it}function lt(St,Et){var bt=St;if(33>bt.charCodeAt(0)&&(bt=bt.trim()),Vt=bt,bt=[Vt],0<_t){var At=rt(-1,Et,bt,bt,Ht,Ft,0,0,0,0);At!==void 0&&typeof At=="string"&&(Et=At)}var ft=i(Xt,bt,Et,0,0);return 0<_t&&(At=rt(-2,ft,bt,bt,Ht,Ft,ft.length,0,0,0),At!==void 0&&(ft=At)),Vt="",Kt=0,Ft=Ht=1,ft}var st=/^\0+/g,dt=/[\0\r\f]/g,ht=/: */g,pt=/zoo|gra/,mt=/([,: ])(transform)/g,yt=/,\r+?/g,ct=/([\t\r\n ])*\f?&/g,at=/@(k\w+)\s*(\S*)\s*/,ut=/::(place)/g,gt=/:(read-only)/g,vt=/[svh]\w+-[tblr]{2}/,wt=/\(\s*(.*)\s*\)/g,kt=/([\s\S]*?);/g,It=/-self|flex-/g,Mt=/[^]*?(:[rp][el]a[\w-]+)[^]*/,Dt=/stretch|:\s*\w+\-(?:conte|avail)/,Wt=/([^-])(image-set\()/,Ft=1,Ht=1,Kt=0,zt=1,Xt=[],Qt=[],_t=0,Ct=null,Lt=0,Vt="";return lt.use=ot,lt.set=it,o!==void 0&&it(o),lt}var unitlessKeys={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function memoize(o){var i=Object.create(null);return function(a){return i[a]===void 0&&(i[a]=o(a)),i[a]}}var reactPropsRegex=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,isPropValid=memoize(function(o){return reactPropsRegex.test(o)||o.charCodeAt(0)===111&&o.charCodeAt(1)===110&&o.charCodeAt(2)<91}),reactIsExports={},reactIs$1={get exports(){return reactIsExports},set exports(o){reactIsExports=o}},reactIs_production_min={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b$1=typeof Symbol=="function"&&Symbol.for,c=b$1?Symbol.for("react.element"):60103,d=b$1?Symbol.for("react.portal"):60106,e=b$1?Symbol.for("react.fragment"):60107,f=b$1?Symbol.for("react.strict_mode"):60108,g$1=b$1?Symbol.for("react.profiler"):60114,h=b$1?Symbol.for("react.provider"):60109,k$1=b$1?Symbol.for("react.context"):60110,l=b$1?Symbol.for("react.async_mode"):60111,m=b$1?Symbol.for("react.concurrent_mode"):60111,n=b$1?Symbol.for("react.forward_ref"):60112,p=b$1?Symbol.for("react.suspense"):60113,q$1=b$1?Symbol.for("react.suspense_list"):60120,r=b$1?Symbol.for("react.memo"):60115,t=b$1?Symbol.for("react.lazy"):60116,v$1=b$1?Symbol.for("react.block"):60121,w$1=b$1?Symbol.for("react.fundamental"):60117,x$1=b$1?Symbol.for("react.responder"):60118,y=b$1?Symbol.for("react.scope"):60119;function z$1(o){if(typeof o=="object"&&o!==null){var i=o.$$typeof;switch(i){case c:switch(o=o.type,o){case l:case m:case e:case g$1:case f:case p:return o;default:switch(o=o&&o.$$typeof,o){case k$1:case n:case t:case r:case h:return o;default:return i}}case d:return i}}}function A$1(o){return z$1(o)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k$1;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;reactIs_production_min.Profiler=g$1;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(o){return A$1(o)||z$1(o)===l};reactIs_production_min.isConcurrentMode=A$1;reactIs_production_min.isContextConsumer=function(o){return z$1(o)===k$1};reactIs_production_min.isContextProvider=function(o){return z$1(o)===h};reactIs_production_min.isElement=function(o){return typeof o=="object"&&o!==null&&o.$$typeof===c};reactIs_production_min.isForwardRef=function(o){return z$1(o)===n};reactIs_production_min.isFragment=function(o){return z$1(o)===e};reactIs_production_min.isLazy=function(o){return z$1(o)===t};reactIs_production_min.isMemo=function(o){return z$1(o)===r};reactIs_production_min.isPortal=function(o){return z$1(o)===d};reactIs_production_min.isProfiler=function(o){return z$1(o)===g$1};reactIs_production_min.isStrictMode=function(o){return z$1(o)===f};reactIs_production_min.isSuspense=function(o){return z$1(o)===p};reactIs_production_min.isValidElementType=function(o){return typeof o=="string"||typeof o=="function"||o===e||o===m||o===g$1||o===f||o===p||o===q$1||typeof o=="object"&&o!==null&&(o.$$typeof===t||o.$$typeof===r||o.$$typeof===h||o.$$typeof===k$1||o.$$typeof===n||o.$$typeof===w$1||o.$$typeof===x$1||o.$$typeof===y||o.$$typeof===v$1)};reactIs_production_min.typeOf=z$1;(function(o){o.exports=reactIs_production_min})(reactIs$1);var reactIs=reactIsExports,REACT_STATICS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},KNOWN_STATICS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},FORWARD_REF_STATICS={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},MEMO_STATICS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},TYPE_STATICS={};TYPE_STATICS[reactIs.ForwardRef]=FORWARD_REF_STATICS;TYPE_STATICS[reactIs.Memo]=MEMO_STATICS;function getStatics(o){return reactIs.isMemo(o)?MEMO_STATICS:TYPE_STATICS[o.$$typeof]||REACT_STATICS}var defineProperty=Object.defineProperty,getOwnPropertyNames=Object.getOwnPropertyNames,getOwnPropertySymbols=Object.getOwnPropertySymbols,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,getPrototypeOf=Object.getPrototypeOf,objectPrototype=Object.prototype;function hoistNonReactStatics(o,i,a){if(typeof i!="string"){if(objectPrototype){var s=getPrototypeOf(i);s&&s!==objectPrototype&&hoistNonReactStatics(o,s,a)}var et=getOwnPropertyNames(i);getOwnPropertySymbols&&(et=et.concat(getOwnPropertySymbols(i)));for(var tt=getStatics(o),nt=getStatics(i),rt=0;rt<et.length;++rt){var ot=et[rt];if(!KNOWN_STATICS[ot]&&!(a&&a[ot])&&!(nt&&nt[ot])&&!(tt&&tt[ot])){var it=getOwnPropertyDescriptor(i,ot);try{defineProperty(o,ot,it)}catch{}}}}return o}var hoistNonReactStatics_cjs=hoistNonReactStatics;function v(){return(v=Object.assign||function(o){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(o[s]=a[s])}return o}).apply(this,arguments)}var g=function(o,i){for(var a=[o[0]],s=0,et=i.length;s<et;s+=1)a.push(i[s],o[s+1]);return a},S=function(o){return o!==null&&typeof o=="object"&&(o.toString?o.toString():Object.prototype.toString.call(o))==="[object Object]"&&!reactIsExports$1.typeOf(o)},w=Object.freeze([]),E=Object.freeze({});function b(o){return typeof o=="function"}function _(o){return o.displayName||o.name||"Component"}function N(o){return o&&typeof o.styledComponentId=="string"}var A=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",I=typeof window<"u"&&"HTMLElement"in window,P=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),O={};function j(o){for(var i=arguments.length,a=new Array(i>1?i-1:0),s=1;s<i;s++)a[s-1]=arguments[s];throw new Error("An error occurred. See https://git.io/JUIaE#"+o+" for more information."+(a.length>0?" Args: "+a.join(", "):""))}var T=function(){function o(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}var i=o.prototype;return i.indexOfGroup=function(a){for(var s=0,et=0;et<a;et++)s+=this.groupSizes[et];return s},i.insertRules=function(a,s){if(a>=this.groupSizes.length){for(var et=this.groupSizes,tt=et.length,nt=tt;a>=nt;)(nt<<=1)<0&&j(16,""+a);this.groupSizes=new Uint32Array(nt),this.groupSizes.set(et),this.length=nt;for(var rt=tt;rt<nt;rt++)this.groupSizes[rt]=0}for(var ot=this.indexOfGroup(a+1),it=0,lt=s.length;it<lt;it++)this.tag.insertRule(ot,s[it])&&(this.groupSizes[a]++,ot++)},i.clearGroup=function(a){if(a<this.length){var s=this.groupSizes[a],et=this.indexOfGroup(a),tt=et+s;this.groupSizes[a]=0;for(var nt=et;nt<tt;nt++)this.tag.deleteRule(et)}},i.getGroup=function(a){var s="";if(a>=this.length||this.groupSizes[a]===0)return s;for(var et=this.groupSizes[a],tt=this.indexOfGroup(a),nt=tt+et,rt=tt;rt<nt;rt++)s+=this.tag.getRule(rt)+`/*!sc*/
`;return s},o}(),x=new Map,k=new Map,V=1,B=function(o){if(x.has(o))return x.get(o);for(;k.has(V);)V++;var i=V++;return x.set(o,i),k.set(i,o),i},z=function(o){return k.get(o)},M=function(o,i){i>=V&&(V=i+1),x.set(o,i),k.set(i,o)},G="style["+A+'][data-styled-version="5.3.6"]',L=new RegExp("^"+A+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F=function(o,i,a){for(var s,et=a.split(","),tt=0,nt=et.length;tt<nt;tt++)(s=et[tt])&&o.registerName(i,s)},Y=function(o,i){for(var a=(i.textContent||"").split(`/*!sc*/
`),s=[],et=0,tt=a.length;et<tt;et++){var nt=a[et].trim();if(nt){var rt=nt.match(L);if(rt){var ot=0|parseInt(rt[1],10),it=rt[2];ot!==0&&(M(it,ot),F(o,it,rt[3]),o.getTag().insertRules(ot,s)),s.length=0}else s.push(nt)}}},q=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},H=function(o){var i=document.head,a=o||i,s=document.createElement("style"),et=function(rt){for(var ot=rt.childNodes,it=ot.length;it>=0;it--){var lt=ot[it];if(lt&&lt.nodeType===1&&lt.hasAttribute(A))return lt}}(a),tt=et!==void 0?et.nextSibling:null;s.setAttribute(A,"active"),s.setAttribute("data-styled-version","5.3.6");var nt=q();return nt&&s.setAttribute("nonce",nt),a.insertBefore(s,tt),s},$=function(){function o(a){var s=this.element=H(a);s.appendChild(document.createTextNode("")),this.sheet=function(et){if(et.sheet)return et.sheet;for(var tt=document.styleSheets,nt=0,rt=tt.length;nt<rt;nt++){var ot=tt[nt];if(ot.ownerNode===et)return ot}j(17)}(s),this.length=0}var i=o.prototype;return i.insertRule=function(a,s){try{return this.sheet.insertRule(s,a),this.length++,!0}catch{return!1}},i.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},i.getRule=function(a){var s=this.sheet.cssRules[a];return s!==void 0&&typeof s.cssText=="string"?s.cssText:""},o}(),W=function(){function o(a){var s=this.element=H(a);this.nodes=s.childNodes,this.length=0}var i=o.prototype;return i.insertRule=function(a,s){if(a<=this.length&&a>=0){var et=document.createTextNode(s),tt=this.nodes[a];return this.element.insertBefore(et,tt||null),this.length++,!0}return!1},i.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},i.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},o}(),U=function(){function o(a){this.rules=[],this.length=0}var i=o.prototype;return i.insertRule=function(a,s){return a<=this.length&&(this.rules.splice(a,0,s),this.length++,!0)},i.deleteRule=function(a){this.rules.splice(a,1),this.length--},i.getRule=function(a){return a<this.length?this.rules[a]:""},o}(),J=I,X={isServer:!I,useCSSOMInjection:!P},Z=function(){function o(a,s,et){a===void 0&&(a=E),s===void 0&&(s={}),this.options=v({},X,{},a),this.gs=s,this.names=new Map(et),this.server=!!a.isServer,!this.server&&I&&J&&(J=!1,function(tt){for(var nt=document.querySelectorAll(G),rt=0,ot=nt.length;rt<ot;rt++){var it=nt[rt];it&&it.getAttribute(A)!=="active"&&(Y(tt,it),it.parentNode&&it.parentNode.removeChild(it))}}(this))}o.registerId=function(a){return B(a)};var i=o.prototype;return i.reconstructWithOptions=function(a,s){return s===void 0&&(s=!0),new o(v({},this.options,{},a),this.gs,s&&this.names||void 0)},i.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},i.getTag=function(){return this.tag||(this.tag=(et=(s=this.options).isServer,tt=s.useCSSOMInjection,nt=s.target,a=et?new U(nt):tt?new $(nt):new W(nt),new T(a)));var a,s,et,tt,nt},i.hasNameForId=function(a,s){return this.names.has(a)&&this.names.get(a).has(s)},i.registerName=function(a,s){if(B(a),this.names.has(a))this.names.get(a).add(s);else{var et=new Set;et.add(s),this.names.set(a,et)}},i.insertRules=function(a,s,et){this.registerName(a,s),this.getTag().insertRules(B(a),et)},i.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},i.clearRules=function(a){this.getTag().clearGroup(B(a)),this.clearNames(a)},i.clearTag=function(){this.tag=void 0},i.toString=function(){return function(a){for(var s=a.getTag(),et=s.length,tt="",nt=0;nt<et;nt++){var rt=z(nt);if(rt!==void 0){var ot=a.names.get(rt),it=s.getGroup(nt);if(ot&&it&&ot.size){var lt=A+".g"+nt+'[id="'+rt+'"]',st="";ot!==void 0&&ot.forEach(function(dt){dt.length>0&&(st+=dt+",")}),tt+=""+it+lt+'{content:"'+st+`"}/*!sc*/
`}}}return tt}(this)},o}(),K=/(a)(d)/gi,Q=function(o){return String.fromCharCode(o+(o>25?39:97))};function ee(o){var i,a="";for(i=Math.abs(o);i>52;i=i/52|0)a=Q(i%52)+a;return(Q(i%52)+a).replace(K,"$1-$2")}var te=function(o,i){for(var a=i.length;a;)o=33*o^i.charCodeAt(--a);return o},ne=function(o){return te(5381,o)};function re(o){for(var i=0;i<o.length;i+=1){var a=o[i];if(b(a)&&!N(a))return!1}return!0}var oe=ne("5.3.6"),se=function(){function o(i,a,s){this.rules=i,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&re(i),this.componentId=a,this.baseHash=te(oe,a),this.baseStyle=s,Z.registerId(a)}return o.prototype.generateAndInjectStyles=function(i,a,s){var et=this.componentId,tt=[];if(this.baseStyle&&tt.push(this.baseStyle.generateAndInjectStyles(i,a,s)),this.isStatic&&!s.hash)if(this.staticRulesId&&a.hasNameForId(et,this.staticRulesId))tt.push(this.staticRulesId);else{var nt=Ne(this.rules,i,a,s).join(""),rt=ee(te(this.baseHash,nt)>>>0);if(!a.hasNameForId(et,rt)){var ot=s(nt,"."+rt,void 0,et);a.insertRules(et,rt,ot)}tt.push(rt),this.staticRulesId=rt}else{for(var it=this.rules.length,lt=te(this.baseHash,s.hash),st="",dt=0;dt<it;dt++){var ht=this.rules[dt];if(typeof ht=="string")st+=ht;else if(ht){var pt=Ne(ht,i,a,s),mt=Array.isArray(pt)?pt.join(""):pt;lt=te(lt,mt+dt),st+=mt}}if(st){var yt=ee(lt>>>0);if(!a.hasNameForId(et,yt)){var ct=s(st,"."+yt,void 0,et);a.insertRules(et,yt,ct)}tt.push(yt)}}return tt.join(" ")},o}(),ie=/^\s*\/\/.*$/gm,ae=[":","[",".","#"];function ce(o){var i,a,s,et,tt=o===void 0?E:o,nt=tt.options,rt=nt===void 0?E:nt,ot=tt.plugins,it=ot===void 0?w:ot,lt=new stylis_min(rt),st=[],dt=function(mt){function yt(ct){if(ct)try{mt(ct+"}")}catch{}}return function(ct,at,ut,gt,vt,wt,kt,It,Mt,Dt){switch(ct){case 1:if(Mt===0&&at.charCodeAt(0)===64)return mt(at+";"),"";break;case 2:if(It===0)return at+"/*|*/";break;case 3:switch(It){case 102:case 112:return mt(ut[0]+at),"";default:return at+(Dt===0?"/*|*/":"")}case-2:at.split("/*|*/}").forEach(yt)}}}(function(mt){st.push(mt)}),ht=function(mt,yt,ct){return yt===0&&ae.indexOf(ct[a.length])!==-1||ct.match(et)?mt:"."+i};function pt(mt,yt,ct,at){at===void 0&&(at="&");var ut=mt.replace(ie,""),gt=yt&&ct?ct+" "+yt+" { "+ut+" }":ut;return i=at,a=yt,s=new RegExp("\\"+a+"\\b","g"),et=new RegExp("(\\"+a+"\\b){2,}"),lt(ct||!yt?"":yt,gt)}return lt.use([].concat(it,[function(mt,yt,ct){mt===2&&ct.length&&ct[0].lastIndexOf(a)>0&&(ct[0]=ct[0].replace(s,ht))},dt,function(mt){if(mt===-2){var yt=st;return st=[],yt}}])),pt.hash=it.length?it.reduce(function(mt,yt){return yt.name||j(15),te(mt,yt.name)},5381).toString():"",pt}var ue=React.createContext();ue.Consumer;var de=React.createContext(),he=(de.Consumer,new Z),pe=ce();function fe(){return reactExports.useContext(ue)||he}function me(){return reactExports.useContext(de)||pe}var ve=function(){function o(i,a){var s=this;this.inject=function(et,tt){tt===void 0&&(tt=pe);var nt=s.name+tt.hash;et.hasNameForId(s.id,nt)||et.insertRules(s.id,nt,tt(s.rules,nt,"@keyframes"))},this.toString=function(){return j(12,String(s.name))},this.name=i,this.id="sc-keyframes-"+i,this.rules=a}return o.prototype.getName=function(i){return i===void 0&&(i=pe),this.name+i.hash},o}(),ge=/([A-Z])/,Se=/([A-Z])/g,we=/^ms-/,Ee=function(o){return"-"+o.toLowerCase()};function be(o){return ge.test(o)?o.replace(Se,Ee).replace(we,"-ms-"):o}var _e=function(o){return o==null||o===!1||o===""};function Ne(o,i,a,s){if(Array.isArray(o)){for(var et,tt=[],nt=0,rt=o.length;nt<rt;nt+=1)(et=Ne(o[nt],i,a,s))!==""&&(Array.isArray(et)?tt.push.apply(tt,et):tt.push(et));return tt}if(_e(o))return"";if(N(o))return"."+o.styledComponentId;if(b(o)){if(typeof(it=o)!="function"||it.prototype&&it.prototype.isReactComponent||!i)return o;var ot=o(i);return Ne(ot,i,a,s)}var it;return o instanceof ve?a?(o.inject(a,s),o.getName(s)):o:S(o)?function lt(st,dt){var ht,pt,mt=[];for(var yt in st)st.hasOwnProperty(yt)&&!_e(st[yt])&&(Array.isArray(st[yt])&&st[yt].isCss||b(st[yt])?mt.push(be(yt)+":",st[yt],";"):S(st[yt])?mt.push.apply(mt,lt(st[yt],yt)):mt.push(be(yt)+": "+(ht=yt,(pt=st[yt])==null||typeof pt=="boolean"||pt===""?"":typeof pt!="number"||pt===0||ht in unitlessKeys?String(pt).trim():pt+"px")+";"));return dt?[dt+" {"].concat(mt,["}"]):mt}(o):o.toString()}var Ae=function(o){return Array.isArray(o)&&(o.isCss=!0),o};function Ce(o){for(var i=arguments.length,a=new Array(i>1?i-1:0),s=1;s<i;s++)a[s-1]=arguments[s];return b(o)||S(o)?Ae(Ne(g(w,[o].concat(a)))):a.length===0&&o.length===1&&typeof o[0]=="string"?o:Ae(Ne(g(o,a)))}var Re=function(o,i,a){return a===void 0&&(a=E),o.theme!==a.theme&&o.theme||i||a.theme},De=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,je=/(^-|-$)/g;function Te(o){return o.replace(De,"-").replace(je,"")}var xe=function(o){return ee(ne(o)>>>0)};function ke(o){return typeof o=="string"&&!0}var Ve=function(o){return typeof o=="function"||typeof o=="object"&&o!==null&&!Array.isArray(o)},Be=function(o){return o!=="__proto__"&&o!=="constructor"&&o!=="prototype"};function ze(o,i,a){var s=o[a];Ve(i)&&Ve(s)?Me(s,i):o[a]=i}function Me(o){for(var i=arguments.length,a=new Array(i>1?i-1:0),s=1;s<i;s++)a[s-1]=arguments[s];for(var et=0,tt=a;et<tt.length;et++){var nt=tt[et];if(Ve(nt))for(var rt in nt)Be(rt)&&ze(o,nt[rt],rt)}return o}var Ge=React.createContext();Ge.Consumer;function Fe(o){var i=reactExports.useContext(Ge),a=reactExports.useMemo(function(){return function(s,et){if(!s)return j(14);if(b(s)){var tt=s(et);return tt}return Array.isArray(s)||typeof s!="object"?j(8):et?v({},et,{},s):s}(o.theme,i)},[o.theme,i]);return o.children?React.createElement(Ge.Provider,{value:a},o.children):null}var Ye={};function qe(o,i,a){var s=N(o),et=!ke(o),tt=i.attrs,nt=tt===void 0?w:tt,rt=i.componentId,ot=rt===void 0?function(at,ut){var gt=typeof at!="string"?"sc":Te(at);Ye[gt]=(Ye[gt]||0)+1;var vt=gt+"-"+xe("5.3.6"+gt+Ye[gt]);return ut?ut+"-"+vt:vt}(i.displayName,i.parentComponentId):rt,it=i.displayName,lt=it===void 0?function(at){return ke(at)?"styled."+at:"Styled("+_(at)+")"}(o):it,st=i.displayName&&i.componentId?Te(i.displayName)+"-"+i.componentId:i.componentId||ot,dt=s&&o.attrs?Array.prototype.concat(o.attrs,nt).filter(Boolean):nt,ht=i.shouldForwardProp;s&&o.shouldForwardProp&&(ht=i.shouldForwardProp?function(at,ut,gt){return o.shouldForwardProp(at,ut,gt)&&i.shouldForwardProp(at,ut,gt)}:o.shouldForwardProp);var pt,mt=new se(a,st,s?o.componentStyle:void 0),yt=mt.isStatic&&nt.length===0,ct=function(at,ut){return function(gt,vt,wt,kt){var It=gt.attrs,Mt=gt.componentStyle,Dt=gt.defaultProps,Wt=gt.foldedComponentIds,Ft=gt.shouldForwardProp,Ht=gt.styledComponentId,Kt=gt.target,zt=function(At,ft,Rt){At===void 0&&(At=E);var xt=v({},ft,{theme:At}),$t={};return Rt.forEach(function(Tt){var Ot,Pt,jt,Gt=Tt;for(Ot in b(Gt)&&(Gt=Gt(xt)),Gt)xt[Ot]=$t[Ot]=Ot==="className"?(Pt=$t[Ot],jt=Gt[Ot],Pt&&jt?Pt+" "+jt:Pt||jt):Gt[Ot]}),[xt,$t]}(Re(vt,reactExports.useContext(Ge),Dt)||E,vt,It),Xt=zt[0],Qt=zt[1],_t=function(At,ft,Rt,xt){var $t=fe(),Tt=me(),Ot=ft?At.generateAndInjectStyles(E,$t,Tt):At.generateAndInjectStyles(Rt,$t,Tt);return Ot}(Mt,kt,Xt),Ct=wt,Lt=Qt.$as||vt.$as||Qt.as||vt.as||Kt,Vt=ke(Lt),St=Qt!==vt?v({},vt,{},Qt):vt,Et={};for(var bt in St)bt[0]!=="$"&&bt!=="as"&&(bt==="forwardedAs"?Et.as=St[bt]:(Ft?Ft(bt,isPropValid,Lt):!Vt||isPropValid(bt))&&(Et[bt]=St[bt]));return vt.style&&Qt.style!==vt.style&&(Et.style=v({},vt.style,{},Qt.style)),Et.className=Array.prototype.concat(Wt,Ht,_t!==Ht?_t:null,vt.className,Qt.className).filter(Boolean).join(" "),Et.ref=Ct,reactExports.createElement(Lt,Et)}(pt,at,ut,yt)};return ct.displayName=lt,(pt=React.forwardRef(ct)).attrs=dt,pt.componentStyle=mt,pt.displayName=lt,pt.shouldForwardProp=ht,pt.foldedComponentIds=s?Array.prototype.concat(o.foldedComponentIds,o.styledComponentId):w,pt.styledComponentId=st,pt.target=s?o.target:o,pt.withComponent=function(at){var ut=i.componentId,gt=function(wt,kt){if(wt==null)return{};var It,Mt,Dt={},Wt=Object.keys(wt);for(Mt=0;Mt<Wt.length;Mt++)It=Wt[Mt],kt.indexOf(It)>=0||(Dt[It]=wt[It]);return Dt}(i,["componentId"]),vt=ut&&ut+"-"+(ke(at)?at:Te(_(at)));return qe(at,v({},gt,{attrs:dt,componentId:vt}),a)},Object.defineProperty(pt,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(at){this._foldedDefaultProps=s?Me({},o.defaultProps,at):at}}),pt.toString=function(){return"."+pt.styledComponentId},et&&hoistNonReactStatics_cjs(pt,o,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),pt}var He=function(o){return function i(a,s,et){if(et===void 0&&(et=E),!reactIsExports$1.isValidElementType(s))return j(1,String(s));var tt=function(){return a(s,et,Ce.apply(void 0,arguments))};return tt.withConfig=function(nt){return i(a,s,v({},et,{},nt))},tt.attrs=function(nt){return i(a,s,v({},et,{attrs:Array.prototype.concat(et.attrs,nt).filter(Boolean)}))},tt}(qe,o)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(o){He[o]=He(o)});var $e=function(){function o(a,s){this.rules=a,this.componentId=s,this.isStatic=re(a),Z.registerId(this.componentId+1)}var i=o.prototype;return i.createStyles=function(a,s,et,tt){var nt=tt(Ne(this.rules,s,et,tt).join(""),""),rt=this.componentId+a;et.insertRules(rt,rt,nt)},i.removeStyles=function(a,s){s.clearRules(this.componentId+a)},i.renderStyles=function(a,s,et,tt){a>2&&Z.registerId(this.componentId+a),this.removeStyles(a,et),this.createStyles(a,s,et,tt)},o}();function We(o){for(var i=arguments.length,a=new Array(i>1?i-1:0),s=1;s<i;s++)a[s-1]=arguments[s];var et=Ce.apply(void 0,[o].concat(a)),tt="sc-global-"+xe(JSON.stringify(et)),nt=new $e(et,tt);function rt(it){var lt=fe(),st=me(),dt=reactExports.useContext(Ge),ht=reactExports.useRef(lt.allocateGSInstance(tt)).current;return lt.server&&ot(ht,it,lt,dt,st),reactExports.useLayoutEffect(function(){if(!lt.server)return ot(ht,it,lt,dt,st),function(){return nt.removeStyles(ht,lt)}},[ht,it,lt,dt,st]),null}function ot(it,lt,st,dt,ht){if(nt.isStatic)nt.renderStyles(it,O,st,ht);else{var pt=v({},lt,{theme:Re(lt,dt,rt.defaultProps)});nt.renderStyles(it,pt,st,ht)}}return React.memo(rt)}const styled=He;var styleReset=`
  html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1.5;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
ul,
li {
  list-style-type: none;
}
button {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: black;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

`;const shadow="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",insetShadow="inset 2px 2px 3px rgba(0,0,0,0.2)",createDisabledTextStyles=()=>Ce`
  -webkit-text-fill-color: ${({theme:o})=>o.materialTextDisabled};
  color: ${({theme:o})=>o.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:o})=>o.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,createBoxStyles=({background:o="material",color:i="materialText"}={})=>Ce`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:a})=>a[o]};
  color: ${({theme:a})=>a[i]};
`,createHatchedBackground=({mainColor:o="black",secondaryColor:i="transparent",pixelSize:a=2})=>Ce`
  background-image: ${[`linear-gradient(
      45deg,
      ${o} 25%,
      transparent 25%,
      transparent 75%,
      ${o} 75%
    )`,`linear-gradient(
      45deg,
      ${o} 25%,
      transparent 25%,
      transparent 75%,
      ${o} 75%
    )`].join(",")};
  background-color: ${i};
  background-size: ${`${a*2}px ${a*2}px`};
  background-position: 0 0, ${`${a}px ${a}px`};
`,createFlatBoxStyles=()=>Ce`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:o})=>o.materialText};
  background: ${({$disabled:o,theme:i})=>o?i.flatLight:i.canvas};
  border: 2px solid ${({theme:o})=>o.canvas};
  outline: 2px solid ${({theme:o})=>o.flatDark};
  outline-offset: -4px;
`,borderStyles={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},createInnerBorderWithShadow=({theme:o,topLeftInner:i,bottomRightInner:a,hasShadow:s=!1,hasInsetShadow:et=!1})=>[s?shadow:!1,et?insetShadow:!1,i!==null?`inset 1px 1px 0px 1px ${o[i]}`:!1,a!==null?`inset -1px -1px 0 1px ${o[a]}`:!1].filter(Boolean).join(", "),createBorderStyles=({invert:o=!1,style:i="button"}={})=>{const a={topLeftOuter:o?"bottomRightOuter":"topLeftOuter",topLeftInner:o?"bottomRightInner":"topLeftInner",bottomRightInner:o?"topLeftInner":"bottomRightInner",bottomRightOuter:o?"topLeftOuter":"bottomRightOuter"};return Ce`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:s})=>s[borderStyles[i][a.topLeftOuter]]};
    border-top-color: ${({theme:s})=>s[borderStyles[i][a.topLeftOuter]]};
    border-right-color: ${({theme:s})=>s[borderStyles[i][a.bottomRightOuter]]};
    border-bottom-color: ${({theme:s})=>s[borderStyles[i][a.bottomRightOuter]]};
    box-shadow: ${({theme:s,shadow:et})=>createInnerBorderWithShadow({theme:s,topLeftInner:borderStyles[i][a.topLeftInner],bottomRightInner:borderStyles[i][a.bottomRightInner],hasShadow:et})};
  `},focusOutline=()=>Ce`
  outline: 2px dotted ${({theme:o})=>o.materialText};
`,nodeBtoa=o=>Buffer.from(o).toString("base64"),base64encode=typeof btoa<"u"?btoa:nodeBtoa,createTriangleSVG=(o,i=0)=>{const a=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${i} 13 13)">
      <polygon fill="${o}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${base64encode(a)})`},createScrollbars=(o="default")=>Ce`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:i})=>createHatchedBackground({mainColor:o==="flat"?i.flatLight:i.material,secondaryColor:o==="flat"?i.canvas:i.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${createBoxStyles()}
    ${o==="flat"?createFlatBoxStyles():createBorderStyles({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:i})=>i.material};
  }
  ::-webkit-scrollbar-button {
    ${createBoxStyles()}
    ${o==="flat"?createFlatBoxStyles():createBorderStyles({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${o==="default"?createBorderStyles({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:i})=>createTriangleSVG(i.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:i})=>createTriangleSVG(i.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:i})=>createTriangleSVG(i.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:i})=>createTriangleSVG(i.materialText,0)};
  }
`,StyledAnchor=styled.a`
  color: ${({theme:o})=>o.anchor};
  font-size: inherit;
  text-decoration: ${({underline:o})=>o?"underline":"none"};
  &:visited {
    color: ${({theme:o})=>o.anchorVisited};
  }
`,Anchor=reactExports.forwardRef(({children:o,underline:i=!0,...a},s)=>React.createElement(StyledAnchor,{ref:s,underline:i,...a},o));Anchor.displayName="Anchor";const StyledAppBar=styled.header`
  ${createBorderStyles()};
  ${createBoxStyles()};

  position: ${o=>{var i;return(i=o.position)!==null&&i!==void 0?i:o.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,AppBar=reactExports.forwardRef(({children:o,fixed:i=!0,position:a="fixed",...s},et)=>React.createElement(StyledAppBar,{fixed:i,position:i!==!1?a:void 0,ref:et,...s},o));AppBar.displayName="AppBar";const noOp=()=>{};function clamp(o,i,a){return a!==null&&o>a?a:i!==null&&o<i?i:o}function getDecimalPrecision(o){if(Math.abs(o)<1){const a=o.toExponential().split("e-"),s=a[0].split(".")[1];return(s?s.length:0)+parseInt(a[1],10)}const i=o.toString().split(".")[1];return i?i.length:0}function roundValueToStep(o,i,a){const s=Math.round((o-a)/i)*i+a;return Number(s.toFixed(getDecimalPrecision(i)))}function getSize(o){return typeof o=="number"?`${o}px`:o}const StyledAvatar=styled.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:o})=>`
    height: ${o};
    width: ${o};
    `}
  border-radius: ${({square:o})=>o?0:"50%"};
  overflow: hidden;
  ${({noBorder:o,theme:i})=>!o&&`
    border-top: 2px solid ${i.borderDark};
    border-left: 2px solid ${i.borderDark};
    border-bottom: 2px solid ${i.borderLightest};
    border-right: 2px solid ${i.borderLightest};
    background: ${i.material};
  `}
  ${({src:o})=>!o&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,StyledAvatarImg=styled.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,Avatar=reactExports.forwardRef(({alt:o="",children:i,noBorder:a=!1,size:s=35,square:et=!1,src:tt,...nt},rt)=>React.createElement(StyledAvatar,{noBorder:a,ref:rt,size:getSize(s),square:et,src:tt,...nt},tt?React.createElement(StyledAvatarImg,{src:tt,alt:o}):i));Avatar.displayName="Avatar";const blockSizes={sm:"28px",md:"36px",lg:"44px"},commonButtonStyles=Ce`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:o="md"})=>blockSizes[o]};
  width: ${({fullWidth:o,size:i="md",square:a})=>o?"100%":a?blockSizes[i]:"auto"};
  padding: ${({square:o})=>o?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:o})=>!o&&"2px"};
  }
  padding-top: ${({active:o,disabled:i})=>o&&!i&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,StyledButton$1=styled.button`
  ${({active:o,disabled:i,primary:a,theme:s,variant:et})=>et==="flat"?Ce`
          ${createFlatBoxStyles()}
          ${a?`
          border: 2px solid ${s.checkmark};
            outline: 2px solid ${s.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${s.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!o&&!i&&focusOutline}
            outline-offset: -4px;
          }
        `:et==="menu"||et==="thin"?Ce`
          ${createBoxStyles()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!i&&!o&&createBorderStyles({style:"buttonThin"})}
          }
          &:active {
            ${!i&&createBorderStyles({style:"buttonThinPressed"})}
          }
          ${o&&createBorderStyles({style:"buttonThinPressed"})}
          ${i&&createDisabledTextStyles()}
        `:Ce`
          ${createBoxStyles()};
          border: none;
          ${i&&createDisabledTextStyles()}
          ${o?createHatchedBackground({mainColor:s.material,secondaryColor:s.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${a?Ce`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${s.borderDarkest};
                `:Ce`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${createBorderStyles(o?{style:et==="raised"?"window":"button",invert:!0}:{style:et==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!i&&createBorderStyles({style:et==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!o&&!i&&focusOutline}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${o?"0":"1px"};
          }
        `}
  ${commonButtonStyles}
`,Button=reactExports.forwardRef(({onClick:o,disabled:i=!1,children:a,type:s="button",fullWidth:et=!1,size:tt="md",square:nt=!1,active:rt=!1,onTouchStart:ot=noOp,primary:it=!1,variant:lt="default",...st},dt)=>React.createElement(StyledButton$1,{active:rt,disabled:i,$disabled:i,fullWidth:et,onClick:i?void 0:o,onTouchStart:ot,primary:it,ref:dt,size:tt,square:nt,type:s,variant:lt,...st},a));Button.displayName="Button";function useControlledOrUncontrolled({defaultValue:o,onChange:i,onChangePropName:a="onChange",readOnly:s,value:et,valuePropName:tt="value"}){const nt=et!==void 0,[rt,ot]=reactExports.useState(o),it=reactExports.useCallback(lt=>{nt||ot(lt)},[nt]);if(nt&&typeof i!="function"&&!s){const lt=`Warning: You provided a \`${tt}\` prop to a component without an \`${a}\` handler.${tt==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${a}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${a}\` function that updates \`${tt}\`.`}`;console.warn(lt)}return[nt?et:rt,it]}const StyledMenuListItem=styled.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${o=>blockSizes[o.size]};
  width: ${o=>o.square?blockSizes[o.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${o=>o.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${o=>blockSizes[o.size]};
  color: ${({theme:o})=>o.materialText};
  pointer-events: ${({$disabled:o})=>o?"none":"auto"};
  font-weight: ${({primary:o})=>o?"bold":"normal"};
  &:hover {
    ${({theme:o,$disabled:i})=>!i&&`
        color: ${o.materialTextInvert};
        background: ${o.hoverBackground};
      `}

    cursor: default;
  }
  ${o=>o.$disabled&&createDisabledTextStyles()}
`,MenuListItem=reactExports.forwardRef(({size:o="lg",disabled:i,square:a,children:s,onClick:et,primary:tt,...nt},rt)=>React.createElement(StyledMenuListItem,{$disabled:i,size:o,square:a,onClick:i?void 0:et,primary:tt,role:"menuitem",ref:rt,"aria-disabled":i,...nt},s));MenuListItem.displayName="MenuListItem";const MenuList=styled.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${o=>o.fullWidth?"100%":"auto"};
  padding: 4px;
  ${createBorderStyles({style:"window"})}
  ${createBoxStyles()}
  ${o=>o.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;MenuList.displayName="MenuList";const size=20,StyledInput=styled.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${size}px;
  height: ${size}px;
  opacity: 0;
  z-index: -1;
`,StyledLabel=styled.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:o})=>o?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:o})=>o.materialText};
  ${o=>o.$disabled&&createDisabledTextStyles()}

  ${StyledMenuListItem} & {
    margin: 0;
    height: 100%;
  }
  ${StyledMenuListItem}:hover & {
    ${({$disabled:o,theme:i})=>!o&&Ce`
        color: ${i.materialTextInvert};
      `};
  }
`,LabelText=styled.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${StyledInput}:focus ~ & {
    ${focusOutline}
  }
  ${StyledInput}:not(:disabled) ~ &:active {
    ${focusOutline}
  }
`,StyledScrollView=styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:o})=>o.borderDark};
  border-top-color: ${({theme:o})=>o.borderDark};
  border-right-color: ${({theme:o})=>o.borderLightest};
  border-bottom-color: ${({theme:o})=>o.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:o})=>o.borderDarkest};
    border-top-color: ${({theme:o})=>o.borderDarkest};
    border-right-color: ${({theme:o})=>o.borderLight};
    border-bottom-color: ${({theme:o})=>o.borderLight};

    pointer-events: none;
    ${o=>o.shadow&&`box-shadow:${insetShadow};`}
  }
`,Content=styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${createScrollbars()}
`,ScrollView=reactExports.forwardRef(({children:o,shadow:i=!0,...a},s)=>React.createElement(StyledScrollView,{ref:s,shadow:i,...a},React.createElement(Content,null,o)));ScrollView.displayName="ScrollView";const sharedCheckboxStyles$1=Ce`
  width: ${size}px;
  height: ${size}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,StyledCheckbox$1=styled(StyledScrollView)`
  ${sharedCheckboxStyles$1}
  width: ${size}px;
  height: ${size}px;
  background: ${({$disabled:o,theme:i})=>o?i.material:i.canvas};
  &:before {
    box-shadow: none;
  }
`,StyledFlatCheckbox$1=styled.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:o,theme:i})=>o?i.flatLight:i.canvas};
  ${sharedCheckboxStyles$1}
  width: ${size-4}px;
  height: ${size-4}px;
  outline: none;
  border: 2px solid ${({theme:o})=>o.flatDark};
  background: ${({$disabled:o,theme:i})=>o?i.flatLight:i.canvas};
`,CheckmarkIcon=styled.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:o,theme:i})=>o?i.checkmarkDisabled:i.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${o=>o.$disabled?o.theme.checkmarkDisabled:o.theme.checkmark};
  }
`,IndeterminateIcon=styled.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:o,theme:i})=>createHatchedBackground({mainColor:o?i.checkmarkDisabled:i.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,CheckboxComponents$1={flat:StyledFlatCheckbox$1,default:StyledCheckbox$1},Checkbox=reactExports.forwardRef(({checked:o,className:i="",defaultChecked:a=!1,disabled:s=!1,indeterminate:et=!1,label:tt="",onChange:nt=noOp,style:rt={},value:ot,variant:it="default",...lt},st)=>{var dt;const[ht,pt]=useControlledOrUncontrolled({defaultValue:a,onChange:nt,readOnly:(dt=lt.readOnly)!==null&&dt!==void 0?dt:s,value:o}),mt=reactExports.useCallback(at=>{const ut=at.target.checked;pt(ut),nt(at)},[nt,pt]),yt=CheckboxComponents$1[it];let ct=null;return et?ct=IndeterminateIcon:ht&&(ct=CheckmarkIcon),React.createElement(StyledLabel,{$disabled:s,className:i,style:rt},React.createElement(StyledInput,{disabled:s,onChange:s?void 0:mt,readOnly:s,type:"checkbox",value:ot,checked:ht,"data-indeterminate":et,ref:st,...lt}),React.createElement(yt,{$disabled:s,role:"presentation"},ct&&React.createElement(ct,{$disabled:s,variant:it})),tt&&React.createElement(LabelText,null,tt))});Checkbox.displayName="Checkbox";const Separator=styled.div`
  ${({orientation:o,theme:i,size:a="100%"})=>o==="vertical"?`
    height: ${getSize(a)};
    border-left: 2px solid ${i.borderDark};
    border-right: 2px solid ${i.borderLightest};
    margin: 0;
    `:`
    width: ${getSize(a)};
    border-bottom: 2px solid ${i.borderLightest};
    border-top: 2px solid ${i.borderDark};
    margin: 0;
    `}
`;Separator.displayName="Separator";const Trigger=styled(StyledButton$1)`
  padding-left: 8px;
`,StyledSeparator=styled(Separator)`
  height: 21px;
  position: relative;
  top: 0;
`,StyledColorInput=styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,ColorPreview=styled.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:o})=>o};

  ${({$disabled:o})=>o?Ce`
          border: 2px solid ${({theme:i})=>i.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:i})=>i.materialTextDisabledShadow}
          );
        `:Ce`
          border: 2px solid ${({theme:i})=>i.materialText};
        `}
  ${StyledColorInput}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${focusOutline}
    outline-offset: -8px;
  }
`,ChevronIcon=styled.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:o})=>o?Ce`
          border-top: 6px solid ${({theme:i})=>i.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:i})=>i.materialTextDisabledShadow}
          );
        `:Ce`
          border-top: 6px solid ${({theme:i})=>i.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:o})=>o==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,ColorInput=reactExports.forwardRef(({value:o,defaultValue:i,onChange:a=noOp,disabled:s=!1,variant:et="default",...tt},nt)=>{var rt;const[ot,it]=useControlledOrUncontrolled({defaultValue:i,onChange:a,readOnly:(rt=tt.readOnly)!==null&&rt!==void 0?rt:s,value:o}),lt=st=>{const dt=st.target.value;it(dt),a(st)};return React.createElement(Trigger,{disabled:s,as:"div",variant:et,size:"md"},React.createElement(StyledColorInput,{onChange:lt,readOnly:s,disabled:s,value:ot??"#008080",type:"color",ref:nt,...tt}),React.createElement(ColorPreview,{$disabled:s,color:ot??"#008080",role:"presentation"}),et==="default"&&React.createElement(StyledSeparator,{orientation:"vertical"}),React.createElement(ChevronIcon,{$disabled:s,variant:et}))});ColorInput.displayName="ColorInput";const DigitWrapper=styled.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:o})=>Ce`
    width: ${11*o}px;
    height: ${21*o}px;
    margin: ${o}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${createHatchedBackground({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:o})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${o}px;
      border-left: ${o}px solid var(--react95-digit-bg-color);
      border-right: ${o}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${o}px;
      border-left: ${o}px solid var(--react95-digit-primary-color);
      border-right: ${o}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${o}px;
      width: ${9*o}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${o}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${o*2}px);
      top: ${2*o}px;
      left: ${o}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${o}px;
      border-left: ${o}px solid var(--react95-digit-bg-color);
      border-right: ${o}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${o}px solid var(--react95-digit-primary-color);
      border-right: ${o}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${o}px;
      width: ${9*o}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${o}px;
    }
    span.center:after {
      bottom: ${o}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${o}px;
      border-top: ${o}px solid var(--react95-digit-bg-color);
      border-bottom: ${o}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*o}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${o}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${o*2}px);
      top: ${o}px;
      left: ${o*2}px;
    }
  `}
`,segments=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],digitActiveSegments=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Digit({digit:o=0,pixelSize:i=2,...a}){const s=digitActiveSegments[Number(o)].map((et,tt)=>et?`${segments[tt]} active`:segments[tt]);return React.createElement(DigitWrapper,{pixelSize:i,...a},s.map((et,tt)=>React.createElement("span",{className:et,key:tt})))}const CounterWrapper=styled.div`
  ${createBorderStyles({style:"status"})}
  display: inline-flex;
  background: #000000;
`,pixelSizes={sm:1,md:2,lg:3,xl:4},Counter=reactExports.forwardRef(({value:o=0,minLength:i=3,size:a="md",...s},et)=>{const tt=reactExports.useMemo(()=>o.toString().padStart(i,"0").split(""),[i,o]);return React.createElement(CounterWrapper,{ref:et,...s},tt.map((nt,rt)=>React.createElement(Digit,{digit:nt,pixelSize:pixelSizes[a],key:rt})))});Counter.displayName="Counter";const sharedWrapperStyles$1=Ce`
  display: flex;
  align-items: center;
  width: ${({fullWidth:o})=>o?"100%":"auto"};
  min-height: ${blockSizes.md};
`,Wrapper$5=styled(StyledScrollView).attrs({"data-testid":"variant-default"})`
  ${sharedWrapperStyles$1}
  background: ${({$disabled:o,theme:i})=>o?i.material:i.canvas};
`,FlatWrapper=styled.div.attrs({"data-testid":"variant-flat"})`
  ${createFlatBoxStyles()}
  ${sharedWrapperStyles$1}
  position: relative;
`,sharedInputStyles=Ce`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:o})=>o.canvasText};
  ${({disabled:o,variant:i})=>i!=="flat"&&o&&createDisabledTextStyles()}
`,StyledTextInput=styled.input`
  ${sharedInputStyles}
  padding: 0 8px;
`,StyledTextArea=styled.textarea`
  ${sharedInputStyles}
  padding: 8px;
  resize: none;
  ${({variant:o})=>createScrollbars(o)}
`,TextInput=reactExports.forwardRef(({className:o,disabled:i=!1,fullWidth:a,onChange:s=noOp,shadow:et=!0,style:tt,variant:nt="default",...rt},ot)=>{const it=nt==="flat"?FlatWrapper:Wrapper$5,lt=reactExports.useMemo(()=>{var st;return rt.multiline?React.createElement(StyledTextArea,{disabled:i,onChange:i?void 0:s,readOnly:i,ref:ot,variant:nt,...rt}):React.createElement(StyledTextInput,{disabled:i,onChange:i?void 0:s,readOnly:i,ref:ot,type:(st=rt.type)!==null&&st!==void 0?st:"text",variant:nt,...rt})},[i,s,rt,ot,nt]);return React.createElement(it,{className:o,fullWidth:a,$disabled:i,shadow:et,style:tt},lt)});TextInput.displayName="TextInput";const StyledNumberInputWrapper=styled.div`
  display: inline-flex;
  align-items: center;
`,StyledButton=styled(Button)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:o})=>o==="flat"?Ce`
          height: calc(50% - 1px);
        `:Ce`
          height: 50%;
        `}
`,StyledButtonWrapper=styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:o})=>o==="flat"?Ce`
          height: calc(${blockSizes.md} - 4px);
        `:Ce`
          height: ${blockSizes.md};
          margin-left: 2px;
        `}
`,StyledButtonIcon=styled.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:o})=>o?Ce`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:i})=>i.materialText};
        `:Ce`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:i})=>i.materialText};
        `}
  ${StyledButton}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:o})=>o.materialTextDisabledShadow}
    );
    ${({invert:o})=>o?Ce`
            border-bottom-color: ${({theme:i})=>i.materialTextDisabled};
          `:Ce`
            border-top-color: ${({theme:i})=>i.materialTextDisabled};
          `}
  }
`,NumberInput=reactExports.forwardRef(({className:o,defaultValue:i,disabled:a=!1,max:s,min:et,onChange:tt,readOnly:nt,step:rt=1,style:ot,value:it,variant:lt="default",width:st,...dt},ht)=>{const[pt,mt]=useControlledOrUncontrolled({defaultValue:i,onChange:tt,readOnly:nt,value:it}),yt=reactExports.useCallback(wt=>{const kt=parseFloat(wt.target.value);mt(kt)},[mt]),ct=reactExports.useCallback(wt=>{const kt=clamp(parseFloat(((pt??0)+wt).toFixed(2)),et??null,s??null);mt(kt),tt==null||tt(kt)},[s,et,tt,mt,pt]),at=reactExports.useCallback(()=>{pt!==void 0&&(tt==null||tt(pt))},[tt,pt]),ut=reactExports.useCallback(()=>{ct(rt)},[ct,rt]),gt=reactExports.useCallback(()=>{ct(-rt)},[ct,rt]),vt=lt==="flat"?"flat":"raised";return React.createElement(StyledNumberInputWrapper,{className:o,style:{...ot,width:st!==void 0?getSize(st):"auto"},...dt},React.createElement(TextInput,{value:pt,variant:lt,onChange:yt,disabled:a,type:"number",readOnly:nt,ref:ht,fullWidth:!0,onBlur:at}),React.createElement(StyledButtonWrapper,{variant:lt},React.createElement(StyledButton,{"data-testid":"increment",variant:vt,disabled:a||nt,onClick:ut},React.createElement(StyledButtonIcon,{invert:!0})),React.createElement(StyledButton,{"data-testid":"decrement",variant:vt,disabled:a||nt,onClick:gt},React.createElement(StyledButtonIcon,null))))});NumberInput.displayName="NumberInput";function makeId(){const o="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let i="";for(let a=0;a<10;a+=1)i+=o[Math.floor(Math.random()*o.length)];return i}const useId=o=>reactExports.useMemo(()=>o??makeId(),[o]),sharedInputContentStyles=Ce`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,sharedHoverStyles=Ce`
  background: ${({theme:o})=>o.hoverBackground};
  color: ${({theme:o})=>o.canvasTextInvert};
`,StyledInner=styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,StyledSelectContent=styled.div`
  ${sharedInputContentStyles}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${StyledInner}:focus & {
    ${sharedHoverStyles}
    border: 2px dotted ${({theme:o})=>o.focusSecondary};
  }
`,sharedWrapperStyles=Ce`
  height: ${blockSizes.md};
  display: inline-block;
  color: ${({$disabled:o=!1,theme:i})=>o?createDisabledTextStyles():i.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:o})=>o?"default":"pointer"};
`,StyledSelectWrapper=styled(StyledScrollView)`
  ${sharedWrapperStyles}
  background: ${({$disabled:o=!1,theme:i})=>o?i.material:i.canvas};
  &:focus {
    outline: 0;
  }
`,StyledFlatSelectWrapper=styled.div`
  ${createFlatBoxStyles()}
  ${sharedWrapperStyles}
  background: ${({$disabled:o=!1,theme:i})=>o?i.flatLight:i.canvas};
`,StyledNativeSelect=styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${sharedInputContentStyles}
  cursor: pointer;
  &:disabled {
    ${createDisabledTextStyles()};
    background: ${({theme:o})=>o.material};
    cursor: default;
  }
`,StyledDropdownButton=styled(StyledButton$1).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:o="default"})=>o==="flat"?Ce`
          height: 100%;
          margin-right: 0;
        `:Ce`
          height: 100%;
        `}
  ${({native:o=!1,variant:i="default"})=>o&&(i==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:o=!1,native:i=!1})=>o||i?"none":"auto"}
`,StyledDropdownIcon=styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:o=!1,theme:i})=>o?i.materialTextDisabled:i.materialText};
  ${({$disabled:o=!1,theme:i})=>o&&`
    filter: drop-shadow(1px 1px 0px ${i.materialTextDisabledShadow});
    border-top-color: ${i.materialTextDisabled};
    `}
  ${StyledDropdownButton}:active & {
    margin-top: 2px;
  }
`,StyledDropdownMenu=styled.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:o})=>o.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${shadow};
  ${({variant:o="default"})=>o==="flat"?Ce`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:i})=>i.flatDark};
        `:Ce`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:i})=>i.borderDarkest};
        `}
  ${({variant:o="default"})=>createScrollbars(o)}
`,StyledDropdownMenuItem=styled.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${blockSizes.md} - 4px);
  line-height: calc(${blockSizes.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:o})=>o.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:o})=>o?sharedHoverStyles:""}
  user-select: none;
`,emptyArray=[],useSelectCommon=({className:o,defaultValue:i,disabled:a,native:s,onChange:et,options:tt=emptyArray,readOnly:nt,style:rt,value:ot,variant:it,width:lt})=>{var st;const dt=reactExports.useMemo(()=>tt.filter(Boolean),[tt]),[ht,pt]=useControlledOrUncontrolled({defaultValue:i??((st=dt==null?void 0:dt[0])===null||st===void 0?void 0:st.value),onChange:et,readOnly:nt,value:ot}),mt=!(a||nt),yt=reactExports.useMemo(()=>({className:o,style:{...rt,width:lt}}),[o,rt,lt]),ct=reactExports.useMemo(()=>React.createElement(StyledDropdownButton,{as:"div","data-testid":"select-button",$disabled:a,native:s,tabIndex:-1,variant:it==="flat"?"flat":"raised"},React.createElement(StyledDropdownIcon,{"data-testid":"select-icon",$disabled:a})),[a,s,it]),at=reactExports.useMemo(()=>it==="flat"?StyledFlatSelectWrapper:StyledSelectWrapper,[it]);return reactExports.useMemo(()=>({isEnabled:mt,options:dt,value:ht,setValue:pt,wrapperProps:yt,DropdownButton:ct,Wrapper:at}),[ct,at,mt,dt,pt,ht,yt])},KEYBOARD_KEY_CODES={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},TYPING_RESET_DELAY=1e3,useSelectState=({onBlur:o,onChange:i,onClose:a,onFocus:s,onKeyDown:et,onMouseDown:tt,onOpen:nt,open:rt,options:ot,readOnly:it,value:lt,selectRef:st,setValue:dt,wrapperRef:ht})=>{const pt=reactExports.useRef(null),mt=reactExports.useRef([]),yt=reactExports.useRef(0),ct=reactExports.useRef(0),at=reactExports.useRef(),ut=reactExports.useRef("search"),gt=reactExports.useRef(""),vt=reactExports.useRef(),[wt,kt]=useControlledOrUncontrolled({defaultValue:!1,onChange:nt,onChangePropName:"onOpen",readOnly:it,value:rt,valuePropName:"open"}),It=reactExports.useMemo(()=>{const $t=ot.findIndex(Tt=>Tt.value===lt);return yt.current=clamp($t,0,null),ot[$t]},[ot,lt]),[Mt,Dt]=reactExports.useState(ot[0]),Wt=reactExports.useCallback($t=>{const Tt=pt.current,Ot=mt.current[$t];if(!Ot||!Tt){at.current=$t;return}at.current=void 0;const Pt=Tt.clientHeight,jt=Tt.scrollTop,Gt=Tt.scrollTop+Pt,Nt=Ot.offsetTop,Yt=Ot.offsetHeight,Ut=Ot.offsetTop+Ot.offsetHeight;Nt<jt&&Tt.scrollTo(0,Nt),Ut>Gt&&Tt.scrollTo(0,Nt-Pt+Yt),Ot.focus({preventScroll:!0})},[pt]),Ft=reactExports.useCallback(($t,{scroll:Tt}={})=>{var Ot;const Pt=ot.length-1;let jt;switch($t){case"first":{jt=0;break}case"last":{jt=Pt;break}case"next":{jt=clamp(ct.current+1,0,Pt);break}case"previous":{jt=clamp(ct.current-1,0,Pt);break}case"selected":{jt=clamp((Ot=yt.current)!==null&&Ot!==void 0?Ot:0,0,Pt);break}default:jt=$t}ct.current=jt,Dt(ot[jt]),Tt&&Wt(jt)},[ct,ot,Wt]),Ht=reactExports.useCallback(({fromEvent:$t})=>{kt(!0),Ft("selected",{scroll:!0}),nt==null||nt({fromEvent:$t})},[Ft,nt,kt]),Kt=reactExports.useCallback(()=>{ut.current="search",gt.current="",clearTimeout(vt.current)},[]),zt=reactExports.useCallback(({focusSelect:$t,fromEvent:Tt})=>{var Ot;a==null||a({fromEvent:Tt}),kt(!1),Dt(ot[0]),Kt(),at.current=void 0,$t&&((Ot=st.current)===null||Ot===void 0||Ot.focus())},[Kt,a,ot,st,kt]),Xt=reactExports.useCallback(({fromEvent:$t})=>{wt?zt({focusSelect:!1,fromEvent:$t}):Ht({fromEvent:$t})},[zt,Ht,wt]),Qt=reactExports.useCallback(($t,{fromEvent:Tt})=>{yt.current!==$t&&(yt.current=$t,dt(ot[$t].value),i==null||i(ot[$t],{fromEvent:Tt}))},[i,ot,dt]),_t=reactExports.useCallback(({focusSelect:$t,fromEvent:Tt})=>{Qt(ct.current,{fromEvent:Tt}),zt({focusSelect:$t,fromEvent:Tt})},[zt,Qt]),Ct=reactExports.useCallback(($t,{fromEvent:Tt,select:Ot})=>{var Pt;switch(ut.current==="cycleFirstLetter"&&$t!==gt.current&&(ut.current="search"),$t===gt.current?ut.current="cycleFirstLetter":gt.current+=$t,ut.current){case"search":{let jt=ot.findIndex(Gt=>{var Nt;return((Nt=Gt.label)===null||Nt===void 0?void 0:Nt.toLocaleUpperCase().indexOf(gt.current))===0});jt<0&&(jt=ot.findIndex(Gt=>{var Nt;return((Nt=Gt.label)===null||Nt===void 0?void 0:Nt.toLocaleUpperCase().indexOf($t))===0}),gt.current=$t),jt>=0&&(Ot?Qt(jt,{fromEvent:Tt}):Ft(jt,{scroll:!0}));break}case"cycleFirstLetter":{const jt=Ot?(Pt=yt.current)!==null&&Pt!==void 0?Pt:-1:ct.current;let Gt=ot.findIndex((Nt,Yt)=>{var Ut;return Yt>jt&&((Ut=Nt.label)===null||Ut===void 0?void 0:Ut.toLocaleUpperCase().indexOf($t))===0});Gt<0&&(Gt=ot.findIndex(Nt=>{var Yt;return((Yt=Nt.label)===null||Yt===void 0?void 0:Yt.toLocaleUpperCase().indexOf($t))===0})),Gt>=0&&(Ot?Qt(Gt,{fromEvent:Tt}):Ft(Gt,{scroll:!0}));break}}clearTimeout(vt.current),vt.current=setTimeout(()=>{ut.current==="search"&&(gt.current="")},TYPING_RESET_DELAY)},[Ft,ot,Qt]),Lt=reactExports.useCallback($t=>{var Tt;$t.button===0&&($t.preventDefault(),(Tt=st.current)===null||Tt===void 0||Tt.focus(),Xt({fromEvent:$t}),tt==null||tt($t))},[tt,st,Xt]),Vt=reactExports.useCallback($t=>{_t({focusSelect:!0,fromEvent:$t})},[_t]),St=reactExports.useCallback($t=>{const{altKey:Tt,code:Ot,ctrlKey:Pt,metaKey:jt,shiftKey:Gt}=$t,{ARROW_DOWN:Nt,ARROW_UP:Yt,END:Ut,ENTER:qt,ESC:en,HOME:Jt,SPACE:rn,TAB:nn}=KEYBOARD_KEY_CODES,tn=Tt||Pt||jt||Gt;if(!(Ot===nn&&(Tt||Pt||jt)||Ot!==nn&&tn))switch(Ot){case Nt:{if($t.preventDefault(),!wt){Ht({fromEvent:$t});return}Ft("next",{scroll:!0});break}case Yt:{if($t.preventDefault(),!wt){Ht({fromEvent:$t});return}Ft("previous",{scroll:!0});break}case Ut:{if($t.preventDefault(),!wt){Ht({fromEvent:$t});return}Ft("last",{scroll:!0});break}case qt:{if(!wt)return;$t.preventDefault(),_t({focusSelect:!0,fromEvent:$t});break}case en:{if(!wt)return;$t.preventDefault(),zt({focusSelect:!0,fromEvent:$t});break}case Jt:{if($t.preventDefault(),!wt){Ht({fromEvent:$t});return}Ft("first",{scroll:!0});break}case rn:{$t.preventDefault(),wt?_t({focusSelect:!0,fromEvent:$t}):Ht({fromEvent:$t});break}case nn:{if(!wt)return;Gt||$t.preventDefault(),_t({focusSelect:!Gt,fromEvent:$t});break}default:!tn&&Ot.match(/^Key/)&&($t.preventDefault(),$t.stopPropagation(),Ct(Ot.replace(/^Key/,""),{select:!wt,fromEvent:$t}))}},[Ft,zt,wt,Ht,Ct,_t]),Et=reactExports.useCallback($t=>{St($t),et==null||et($t)},[St,et]),bt=reactExports.useCallback($t=>{Ft($t)},[Ft]),At=reactExports.useCallback($t=>{wt||(Kt(),o==null||o($t))},[Kt,o,wt]),ft=reactExports.useCallback($t=>{Kt(),s==null||s($t)},[Kt,s]),Rt=reactExports.useCallback($t=>{pt.current=$t,at.current!==void 0&&Wt(at.current)},[Wt]),xt=reactExports.useCallback(($t,Tt)=>{mt.current[Tt]=$t,at.current===Tt&&Wt(at.current)},[Wt]);return reactExports.useEffect(()=>{if(!wt)return()=>{};const $t=Tt=>{var Ot;const Pt=Tt.target;!((Ot=ht.current)===null||Ot===void 0)&&Ot.contains(Pt)||(Tt.preventDefault(),zt({focusSelect:!1,fromEvent:Tt}))};return document.addEventListener("mousedown",$t),()=>{document.removeEventListener("mousedown",$t)}},[zt,wt,ht]),reactExports.useMemo(()=>({activeOption:Mt,handleActivateOptionIndex:bt,handleBlur:At,handleButtonKeyDown:Et,handleDropdownKeyDown:St,handleFocus:ft,handleMouseDown:Lt,handleOptionClick:Vt,handleSetDropdownRef:Rt,handleSetOptionRef:xt,open:wt,selectedOption:It}),[Mt,bt,At,Et,ft,St,Lt,Vt,Rt,xt,wt,It])},SelectNative=reactExports.forwardRef(({className:o,defaultValue:i,disabled:a,onChange:s,options:et,readOnly:tt,style:nt,value:rt,variant:ot,width:it,...lt},st)=>{const{isEnabled:dt,options:ht,setValue:pt,value:mt,DropdownButton:yt,Wrapper:ct}=useSelectCommon({defaultValue:i,disabled:a,native:!0,onChange:s,options:et,readOnly:tt,value:rt,variant:ot}),at=reactExports.useCallback(ut=>{const gt=ht.find(vt=>vt.value===ut.target.value);gt&&(pt(gt.value),s==null||s(gt,{fromEvent:ut}))},[s,ht,pt]);return React.createElement(ct,{className:o,style:{...nt,width:it}},React.createElement(StyledInner,null,React.createElement(StyledNativeSelect,{...lt,disabled:a,onChange:dt?at:noOp,ref:st,value:mt},ht.map((ut,gt)=>{var vt;return React.createElement("option",{key:`${ut.value}-${gt}`,value:ut.value},(vt=ut.label)!==null&&vt!==void 0?vt:ut.value)})),yt))});SelectNative.displayName="SelectNative";function SelectInnerOption({activateOptionIndex:o,active:i,index:a,onClick:s,option:et,selected:tt,setRef:nt}){const rt=reactExports.useCallback(()=>{o(a)},[o,a]),ot=reactExports.useCallback(lt=>{nt(lt,a)},[a,nt]),it=useId();return React.createElement(StyledDropdownMenuItem,{active:i,"aria-selected":tt?"true":void 0,"data-value":et.value,id:it,onClick:s,onMouseEnter:rt,ref:ot,role:"option",tabIndex:0},et.label)}function SelectInner({"aria-label":o,"aria-labelledby":i,className:a,defaultValue:s,disabled:et=!1,formatDisplay:tt,inputProps:nt,labelId:rt,menuMaxHeight:ot,name:it,onBlur:lt,onChange:st,onClose:dt,onFocus:ht,onKeyDown:pt,onMouseDown:mt,onOpen:yt,open:ct,options:at,readOnly:ut,shadow:gt=!0,style:vt,variant:wt="default",value:kt,width:It="auto",...Mt},Dt){const{isEnabled:Wt,options:Ft,setValue:Ht,value:Kt,wrapperProps:zt,DropdownButton:Xt,Wrapper:Qt}=useSelectCommon({className:a,defaultValue:s,disabled:et,native:!1,onChange:st,options:at,style:vt,readOnly:ut,value:kt,variant:wt,width:It}),_t=reactExports.useRef(null),Ct=reactExports.useRef(null),Lt=reactExports.useRef(null),{activeOption:Vt,handleActivateOptionIndex:St,handleBlur:Et,handleButtonKeyDown:bt,handleDropdownKeyDown:At,handleFocus:ft,handleMouseDown:Rt,handleOptionClick:xt,handleSetDropdownRef:$t,handleSetOptionRef:Tt,open:Ot,selectedOption:Pt}=useSelectState({onBlur:lt,onChange:st,onClose:dt,onFocus:ht,onKeyDown:pt,onMouseDown:mt,onOpen:yt,open:ct,options:Ft,value:Kt,selectRef:Ct,setValue:Ht,wrapperRef:Lt});reactExports.useImperativeHandle(Dt,()=>({focus:qt=>{var en;(en=Ct.current)===null||en===void 0||en.focus(qt)},node:_t.current,value:String(Kt)}),[Kt]);const jt=reactExports.useMemo(()=>Pt?typeof tt=="function"?tt(Pt):Pt.label:"",[tt,Pt]),Gt=Wt?1:void 0,Nt=reactExports.useMemo(()=>ot?{overflow:"auto",maxHeight:ot}:void 0,[ot]),Yt=useId(),Ut=reactExports.useMemo(()=>Ft.map((qt,en)=>{const Jt=`${Kt}-${en}`,rn=qt===Vt,nn=qt===Pt;return React.createElement(SelectInnerOption,{activateOptionIndex:St,active:rn,index:en,key:Jt,onClick:xt,option:qt,selected:nn,setRef:Tt})}),[Vt,St,xt,Tt,Ft,Pt,Kt]);return React.createElement(Qt,{...zt,$disabled:et,ref:Lt,shadow:gt,style:{...vt,width:It}},React.createElement("input",{name:it,ref:_t,type:"hidden",value:String(Kt),...nt}),React.createElement(StyledInner,{"aria-disabled":et,"aria-expanded":Ot,"aria-haspopup":"listbox","aria-label":o,"aria-labelledby":i??rt,"aria-owns":Wt&&Ot?Yt:void 0,onBlur:Et,onFocus:ft,onKeyDown:bt,onMouseDown:Wt?Rt:mt,ref:Ct,role:"button",tabIndex:Gt,...Mt},React.createElement(StyledSelectContent,null,jt),Xt),Wt&&Ot&&React.createElement(StyledDropdownMenu,{id:Yt,onKeyDown:At,ref:$t,role:"listbox",style:Nt,tabIndex:0,variant:wt},Ut))}const Select=reactExports.forwardRef(SelectInner);Select.displayName="Select";const StyledToolbar=styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${o=>o.noPadding?"0":"4px"};
`,Toolbar=reactExports.forwardRef(function({children:i,noPadding:a=!1,...s},et){return React.createElement(StyledToolbar,{noPadding:a,ref:et,...s},i)});Toolbar.displayName="Toolbar";const StyledWindowContent=styled.div`
  padding: 16px;
`,WindowContent=reactExports.forwardRef(function({children:i,...a},s){return React.createElement(StyledWindowContent,{ref:s,...a},i)});WindowContent.displayName="WindowContent";const StyledWindowHeader=styled.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:o})=>o.material};
  ${({active:o})=>o===!1?Ce`
          background: ${({theme:i})=>i.headerNotActiveBackground};
          color: ${({theme:i})=>i.headerNotActiveText};
        `:Ce`
          background: ${({theme:i})=>i.headerBackground};
          color: ${({theme:i})=>i.headerText};
        `}

  ${StyledButton$1} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,WindowHeader=reactExports.forwardRef(function({active:i=!0,children:a,...s},et){return React.createElement(StyledWindowHeader,{active:i,ref:et,...s},a)});WindowHeader.displayName="WindowHeader";const StyledWindow=styled.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${createBorderStyles({style:"window"})}
  ${createBoxStyles()}
`,ResizeHandle=styled.span`
  ${({theme:o})=>Ce`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${o.borderLightest} 16.67%,
      ${o.material} 16.67%,
      ${o.material} 33.33%,
      ${o.borderDark} 33.33%,
      ${o.borderDark} 50%,
      ${o.borderLightest} 50%,
      ${o.borderLightest} 66.67%,
      ${o.material} 66.67%,
      ${o.material} 83.33%,
      ${o.borderDark} 83.33%,
      ${o.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,Window=reactExports.forwardRef(({children:o,resizable:i=!1,resizeRef:a,shadow:s=!0,...et},tt)=>React.createElement(StyledWindow,{ref:tt,shadow:s,...et},o,i&&React.createElement(ResizeHandle,{"data-testid":"resizeHandle",ref:a})));Window.displayName="Window";const Calendar=styled(ScrollView)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:o})=>o.canvas};
`,WeekDays=styled.div`
  display: flex;
  background: ${({theme:o})=>o.materialDark};
  color: #dfe0e3;
`,Dates=styled.div`
  display: flex;
  flex-wrap: wrap;
`,DateItem=styled.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,DateItemContent=styled.span`
  cursor: pointer;

  background: ${({active:o,theme:i})=>o?i.hoverBackground:"transparent"};
  color: ${({active:o,theme:i})=>o?i.canvasTextInvert:i.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:o,active:i})=>i?"none":o.materialDark};
  }
`,months=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function daysInMonth(o,i){return new Date(o,i+1,0).getDate()}function dayIndex(o,i,a){return new Date(o,i,a).getDay()}function convertDateToState(o){const i=new Date(Date.parse(o)),a=i.getUTCDate(),s=i.getUTCMonth(),et=i.getUTCFullYear();return{day:a,month:s,year:et}}const DatePicker=reactExports.forwardRef(({className:o,date:i=new Date().toISOString(),onAccept:a,onCancel:s,shadow:et=!0},tt)=>{const[nt,rt]=reactExports.useState(()=>convertDateToState(i)),{year:ot,month:it,day:lt}=nt,st=reactExports.useCallback(({value:yt})=>{rt(ct=>({...ct,month:yt}))},[]),dt=reactExports.useCallback(yt=>{rt(ct=>({...ct,year:yt}))},[]),ht=reactExports.useCallback(yt=>{rt(ct=>({...ct,day:yt}))},[]),pt=reactExports.useCallback(()=>{const yt=[nt.year,nt.month+1,nt.day].map(ct=>String(ct).padStart(2,"0")).join("-");a==null||a(yt)},[nt.day,nt.month,nt.year,a]),mt=reactExports.useMemo(()=>{const yt=Array.from({length:42}),ct=dayIndex(ot,it,1);let at=lt;const ut=daysInMonth(ot,it);return at=at<ut?at:ut,yt.forEach((gt,vt)=>{if(vt>=ct&&vt<ut+ct){const wt=vt-ct+1;yt[vt]=React.createElement(DateItem,{key:vt,onClick:()=>{ht(wt)}},React.createElement(DateItemContent,{active:wt===at},wt))}else yt[vt]=React.createElement(DateItem,{key:vt})}),yt},[lt,ht,it,ot]);return React.createElement(Window,{className:o,ref:tt,shadow:et,style:{margin:20}},React.createElement(WindowHeader,null,React.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),React.createElement(WindowContent,null,React.createElement(Toolbar,{noPadding:!0,style:{justifyContent:"space-between"}},React.createElement(Select,{options:months,value:it,onChange:st,width:128,menuMaxHeight:200}),React.createElement(NumberInput,{value:ot,onChange:dt,width:100})),React.createElement(Calendar,null,React.createElement(WeekDays,null,React.createElement(DateItem,null,"S"),React.createElement(DateItem,null,"M"),React.createElement(DateItem,null,"T"),React.createElement(DateItem,null,"W"),React.createElement(DateItem,null,"T"),React.createElement(DateItem,null,"F"),React.createElement(DateItem,null,"S")),React.createElement(Dates,null,mt)),React.createElement(Toolbar,{noPadding:!0,style:{justifyContent:"space-between"}},React.createElement(Button,{fullWidth:!0,onClick:s,disabled:!s},"Cancel"),React.createElement(Button,{fullWidth:!0,onClick:a?pt:void 0,disabled:!a},"OK"))))});DatePicker.displayName="DatePicker";const createFrameStyles=o=>{switch(o){case"status":case"well":return Ce`
        ${createBorderStyles({style:"status"})}
      `;case"window":case"outside":return Ce`
        ${createBorderStyles({style:"window"})}
      `;case"field":return Ce`
        ${createBorderStyles({style:"field"})}
      `;default:return Ce`
        ${createBorderStyles()}
      `}},StyledFrame=styled.div`
  position: relative;
  font-size: 1rem;
  ${({variant:o})=>createFrameStyles(o)}
  ${({variant:o})=>createBoxStyles(o==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Frame=reactExports.forwardRef(({children:o,shadow:i=!1,variant:a="window",...s},et)=>React.createElement(StyledFrame,{ref:et,shadow:i,variant:a,...s},o));Frame.displayName="Frame";const StyledFieldset=styled.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:o,variant:i})=>i==="flat"?o.flatDark:o.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:o})=>o.materialText};
  ${({variant:o})=>o!=="flat"&&Ce`
      box-shadow: -1px -1px 0 1px ${({theme:i})=>i.borderDark},
        inset -1px -1px 0 1px ${({theme:i})=>i.borderDark};
    `}
  ${o=>o.$disabled&&createDisabledTextStyles()}
`,StyledLegend=styled.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:o,variant:i})=>i==="flat"?o.canvas:o.material};
`,GroupBox=reactExports.forwardRef(({label:o,disabled:i=!1,variant:a="default",children:s,...et},tt)=>React.createElement(StyledFieldset,{"aria-disabled":i,$disabled:i,variant:a,ref:tt,...et},o&&React.createElement(StyledLegend,{variant:a},o),s));GroupBox.displayName="GroupBox";const Handle=styled.div`
  ${({theme:o,size:i="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${getSize(i)};
  width: 5px;
  border-top: 2px solid ${o.borderLightest};
  border-left: 2px solid ${o.borderLightest};
  border-bottom: 2px solid ${o.borderDark};
  border-right: 2px solid ${o.borderDark};
  background: ${o.material};
`}
`;Handle.displayName="Handle";const base64hourglass="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",StyledContainer=styled.div`
  display: inline-block;
  height: ${({size:o})=>getSize(o)};
  width: ${({size:o})=>getSize(o)};
`,StyledHourglass=styled.span`
  display: block;
  background: ${base64hourglass};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Hourglass=reactExports.forwardRef(({size:o=30,...i},a)=>React.createElement(StyledContainer,{size:o,ref:a,...i},React.createElement(StyledHourglass,null)));Hourglass.displayName="Hourglass";const Wrapper$4=styled.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Inner=styled.div`
  position: relative;
`,MonitorBody=styled.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:o})=>o.material};
  border-top: 4px solid ${({theme:o})=>o.borderLightest};
  border-left: 4px solid ${({theme:o})=>o.borderLightest};
  border-bottom: 4px solid ${({theme:o})=>o.borderDark};
  border-right: 4px solid ${({theme:o})=>o.borderDark};

  outline: 1px dotted ${({theme:o})=>o.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:o})=>o.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:o})=>o.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,Background=styled(StyledScrollView).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Stand=styled.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:o})=>o.material};
  border-left: 2px solid ${({theme:o})=>o.borderLightest};
  border-bottom: 2px solid ${({theme:o})=>o.borderDarkest};
  border-right: 2px solid ${({theme:o})=>o.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:o})=>o.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:o})=>o.material};
    border-left: 2px solid ${({theme:o})=>o.borderLightest};
    border-right: 2px solid ${({theme:o})=>o.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:o})=>o.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:o})=>o.material};
    border: 2px solid ${({theme:o})=>o.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:o})=>o.borderLightest},
      1px 1px 0 1px ${({theme:o})=>o.borderDarkest};
  }
`,Monitor=reactExports.forwardRef(({backgroundStyles:o,children:i,...a},s)=>React.createElement(Wrapper$4,{ref:s,...a},React.createElement(Inner,null,React.createElement(MonitorBody,null,React.createElement(Background,{style:o},i)),React.createElement(Stand,null))));Monitor.displayName="Monitor";const Wrapper$3=styled.div`
  display: inline-block;
  height: ${blockSizes.md};
  width: 100%;
`,ProgressCutout=styled(StyledScrollView)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,commonBarStyles=Ce`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,WhiteBar=styled.div`
  position: relative;
  top: 4px;
  ${commonBarStyles}
  background: ${({theme:o})=>o.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:o})=>o.materialText};
`,BlueBar=styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${commonBarStyles}
  color: ${({theme:o})=>o.materialTextInvert};
  background: ${({theme:o})=>o.progress};
  clip-path: polygon(
    0 0,
    ${({value:o=0})=>o}% 0,
    ${({value:o=0})=>o}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,TilesWrapper=styled.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,tileWidth=17,Tile=styled.span`
  display: inline-block;
  width: ${tileWidth}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:o})=>o.progress};
  border-color: ${({theme:o})=>o.material};
  border-width: 0px 1px;
  border-style: solid;
`,ProgressBar=reactExports.forwardRef(({hideValue:o=!1,shadow:i=!0,value:a,variant:s="default",...et},tt)=>{const nt=o?null:`${a}%`,rt=reactExports.useRef(null),[ot,it]=reactExports.useState([]),lt=reactExports.useCallback(()=>{if(!rt.current||a===void 0)return;const st=rt.current.getBoundingClientRect().width,dt=Math.round(a/100*st/tileWidth);it(Array.from({length:dt}))},[a]);return reactExports.useEffect(()=>(lt(),window.addEventListener("resize",lt),()=>window.removeEventListener("resize",lt)),[lt]),React.createElement(Wrapper$3,{"aria-valuenow":a!==void 0?Math.round(a):void 0,ref:tt,role:"progressbar",variant:s,...et},React.createElement(ProgressCutout,{variant:s,shadow:i},s==="default"?React.createElement(React.Fragment,null,React.createElement(WhiteBar,{"data-testid":"defaultProgress1"},nt),React.createElement(BlueBar,{"data-testid":"defaultProgress2",value:a},nt)):React.createElement(TilesWrapper,{ref:rt,"data-testid":"tileProgress"},ot.map((st,dt)=>React.createElement(Tile,{key:dt})))))});ProgressBar.displayName="ProgressBar";const sharedCheckboxStyles=Ce`
  width: ${size}px;
  height: ${size}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,StyledCheckbox=styled(StyledScrollView)`
  ${sharedCheckboxStyles}
  background: ${({$disabled:o,theme:i})=>o?i.material:i.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,StyledFlatCheckbox=styled.div`
  ${createFlatBoxStyles()}
  ${sharedCheckboxStyles}
  outline: none;
  background: ${({$disabled:o,theme:i})=>o?i.flatLight:i.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:o})=>o.flatDark};
    border-radius: 50%;
  }
`,Icon$1=styled.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${o=>o.$disabled?o.theme.checkmarkDisabled:o.theme.checkmark};
`,CheckboxComponents={flat:StyledFlatCheckbox,default:StyledCheckbox},Radio=reactExports.forwardRef(({checked:o,className:i="",disabled:a=!1,label:s="",onChange:et,style:tt={},variant:nt="default",...rt},ot)=>{const it=CheckboxComponents[nt];return React.createElement(StyledLabel,{$disabled:a,className:i,style:tt},React.createElement(it,{$disabled:a,role:"presentation"},o&&React.createElement(Icon$1,{$disabled:a,variant:nt})),React.createElement(StyledInput,{disabled:a,onChange:a?void 0:et,readOnly:a,type:"radio",checked:o,ref:ot,...rt}),s&&React.createElement(LabelText,null,s))});Radio.displayName="Radio";const useEnhancedEffect=typeof window<"u"?reactExports.useLayoutEffect:reactExports.useEffect;function useEventCallback(o){const i=reactExports.useRef(o);return useEnhancedEffect(()=>{i.current=o}),reactExports.useCallback((...a)=>(0,i.current)(...a),[])}function setRef(o,i){typeof o=="function"?o(i):o&&(o.current=i)}function useForkRef(o,i){return reactExports.useMemo(()=>o==null&&i==null?null:a=>{setRef(o,a),setRef(i,a)},[o,i])}let hadKeyboardEvent=!0,hadFocusVisibleRecently=!1,hadFocusVisibleRecentlyTimeout;const inputTypesWhitelist={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function focusTriggersKeyboardModality(o){if("type"in o){const{type:i,tagName:a}=o;if(a==="INPUT"&&inputTypesWhitelist[i]&&!o.readOnly||a==="TEXTAREA"&&!o.readOnly)return!0}return!!("isContentEditable"in o&&o.isContentEditable)}function handleKeyDown(o){o.metaKey||o.altKey||o.ctrlKey||(hadKeyboardEvent=!0)}function handlePointerDown(){hadKeyboardEvent=!1}function handleVisibilityChange(){this.visibilityState==="hidden"&&hadFocusVisibleRecently&&(hadKeyboardEvent=!0)}function prepare(o){o.addEventListener("keydown",handleKeyDown,!0),o.addEventListener("mousedown",handlePointerDown,!0),o.addEventListener("pointerdown",handlePointerDown,!0),o.addEventListener("touchstart",handlePointerDown,!0),o.addEventListener("visibilitychange",handleVisibilityChange,!0)}function isFocusVisible(o){const{target:i}=o;try{return i.matches(":focus-visible")}catch{}return hadKeyboardEvent||focusTriggersKeyboardModality(i)}function handleBlurVisible(){hadFocusVisibleRecently=!0,window.clearTimeout(hadFocusVisibleRecentlyTimeout),hadFocusVisibleRecentlyTimeout=window.setTimeout(()=>{hadFocusVisibleRecently=!1},100)}function useIsFocusVisible(){const o=reactExports.useCallback(i=>{const a=reactDomExports.findDOMNode(i);a!=null&&prepare(a.ownerDocument)},[]);return{isFocusVisible,onBlurVisible:handleBlurVisible,ref:o}}function percentToValue(o,i,a){return(a-i)*o+i}function trackFinger(o,i){if(i!==void 0&&"changedTouches"in o){for(let a=0;a<o.changedTouches.length;a+=1){const s=o.changedTouches[a];if(s.identifier===i)return{x:s.clientX,y:s.clientY}}return!1}return"clientX"in o?{x:o.clientX,y:o.clientY}:!1}function ownerDocument(o){return o&&o.ownerDocument||document}function findClosest(o,i){var a;const{index:s}=(a=o.reduce((et,tt,nt)=>{const rt=Math.abs(i-tt);return et===null||rt<et.distance||rt===et.distance?{distance:rt,index:nt}:et},null))!==null&&a!==void 0?a:{};return s??-1}const Wrapper$2=styled.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:o})=>o?"41px":"39px"};
    ${({isFocused:o,theme:i})=>o&&`
        outline: 2px dotted ${i.materialText};
        `}
  }

  ${({orientation:o,size:i})=>o==="vertical"?Ce`
          height: ${i};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:a})=>a?"41px":"39px"};
          }
        `:Ce`
          width: ${i};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:a})=>a?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:o})=>o?"none":"auto"};
`,sharedGrooveStyles=()=>Ce`
  position: absolute;
  ${({orientation:o})=>o==="vertical"?Ce`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:Ce`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,StyledGroove=styled(StyledScrollView)`
  ${sharedGrooveStyles()}
`,StyledFlatGroove=styled(StyledScrollView)`
  ${sharedGrooveStyles()}

  border-left-color: ${({theme:o})=>o.flatLight};
  border-top-color: ${({theme:o})=>o.flatLight};
  border-right-color: ${({theme:o})=>o.canvas};
  border-bottom-color: ${({theme:o})=>o.canvas};
  &:before {
    border-left-color: ${({theme:o})=>o.flatDark};
    border-top-color: ${({theme:o})=>o.flatDark};
    border-right-color: ${({theme:o})=>o.flatLight};
    border-bottom-color: ${({theme:o})=>o.flatLight};
  }
`,Thumb=styled.span`
  position: relative;
  ${({orientation:o})=>o==="vertical"?Ce`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:Ce`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:o})=>o==="flat"?Ce`
          ${createFlatBoxStyles()}
          outline: 2px solid ${({theme:i})=>i.flatDark};
          background: ${({theme:i})=>i.flatLight};
        `:Ce`
          ${createBoxStyles()}
          ${createBorderStyles()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:o,theme:i})=>o&&createHatchedBackground({mainColor:i.material,secondaryColor:i.borderLightest})}
`,tickHeight=6,Tick=styled.span`
  display: inline-block;
  position: absolute;

  ${({orientation:o})=>o==="vertical"?Ce`
          right: ${-tickHeight-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${tickHeight}px;
          border-bottom: 2px solid ${({theme:i})=>i.materialText};
        `:Ce`
          bottom: ${-tickHeight}px;
          height: ${tickHeight}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:i})=>i.materialText};
          border-right: 1px solid ${({theme:i})=>i.materialText};
        `}

  color:  ${({theme:o})=>o.materialText};
  ${({$disabled:o,theme:i})=>o&&Ce`
      ${createDisabledTextStyles()}
      box-shadow: 1px 1px 0px ${i.materialTextDisabledShadow};
      border-color: ${i.materialTextDisabled};
    `}
`,Mark=styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:o})=>o==="vertical"?Ce`
          transform: translate(${tickHeight+2}px, ${tickHeight+1}px);
        `:Ce`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,Slider=reactExports.forwardRef(({defaultValue:o,disabled:i=!1,marks:a=!1,max:s=100,min:et=0,name:tt,onChange:nt,onChangeCommitted:rt,onMouseDown:ot,orientation:it="horizontal",size:lt="100%",step:st=1,value:dt,variant:ht="default",...pt},mt)=>{const yt=ht==="flat"?StyledFlatGroove:StyledGroove,ct=it==="vertical",[at=et,ut]=useControlledOrUncontrolled({defaultValue:o,onChange:nt??rt,value:dt}),{isFocusVisible:gt,onBlurVisible:vt,ref:wt}=useIsFocusVisible(),[kt,It]=reactExports.useState(!1),Mt=reactExports.useRef(),Dt=reactExports.useRef(null),Wt=useForkRef(wt,Mt),Ft=useForkRef(mt,Wt),Ht=useEventCallback(Et=>{gt(Et)&&It(!0)}),Kt=useEventCallback(()=>{kt!==!1&&(It(!1),vt())}),zt=reactExports.useRef(),Xt=reactExports.useMemo(()=>a===!0&&Number.isFinite(st)?[...Array(Math.round((s-et)/st)+1)].map((Et,bt)=>({label:void 0,value:et+st*bt})):Array.isArray(a)?a:[],[a,s,et,st]),Qt=useEventCallback(Et=>{const bt=(s-et)/10,At=Xt.map(xt=>xt.value),ft=At.indexOf(at);let Rt=0;switch(Et.key){case"Home":Rt=et;break;case"End":Rt=s;break;case"PageUp":st&&(Rt=at+bt);break;case"PageDown":st&&(Rt=at-bt);break;case"ArrowRight":case"ArrowUp":st?Rt=at+st:Rt=At[ft+1]||At[At.length-1];break;case"ArrowLeft":case"ArrowDown":st?Rt=at-st:Rt=At[ft-1]||At[0];break;default:return}Et.preventDefault(),st&&(Rt=roundValueToStep(Rt,st,et)),Rt=clamp(Rt,et,s),ut(Rt),It(!0),nt==null||nt(Rt),rt==null||rt(Rt)}),_t=reactExports.useCallback(Et=>{if(!Mt.current)return 0;const bt=Mt.current.getBoundingClientRect();let At;ct?At=(bt.bottom-Et.y)/bt.height:At=(Et.x-bt.left)/bt.width;let ft;if(ft=percentToValue(At,et,s),st)ft=roundValueToStep(ft,st,et);else{const Rt=Xt.map($t=>$t.value),xt=findClosest(Rt,ft);ft=Rt[xt]}return ft=clamp(ft,et,s),ft},[Xt,s,et,st,ct]),Ct=useEventCallback(Et=>{var bt;const At=trackFinger(Et,zt.current);if(!At)return;const ft=_t(At);(bt=Dt.current)===null||bt===void 0||bt.focus(),ut(ft),It(!0),nt==null||nt(ft)}),Lt=useEventCallback(Et=>{const bt=trackFinger(Et,zt.current);if(!bt)return;const At=_t(bt);rt==null||rt(At),zt.current=void 0;const ft=ownerDocument(Mt.current);ft.removeEventListener("mousemove",Ct),ft.removeEventListener("mouseup",Lt),ft.removeEventListener("touchmove",Ct),ft.removeEventListener("touchend",Lt)}),Vt=useEventCallback(Et=>{var bt;ot==null||ot(Et),Et.preventDefault(),(bt=Dt.current)===null||bt===void 0||bt.focus(),It(!0);const At=trackFinger(Et,zt.current);if(At){const Rt=_t(At);ut(Rt),nt==null||nt(Rt)}const ft=ownerDocument(Mt.current);ft.addEventListener("mousemove",Ct),ft.addEventListener("mouseup",Lt)}),St=useEventCallback(Et=>{var bt;Et.preventDefault();const At=Et.changedTouches[0];At!=null&&(zt.current=At.identifier),(bt=Dt.current)===null||bt===void 0||bt.focus(),It(!0);const ft=trackFinger(Et,zt.current);if(ft){const xt=_t(ft);ut(xt),nt==null||nt(xt)}const Rt=ownerDocument(Mt.current);Rt.addEventListener("touchmove",Ct),Rt.addEventListener("touchend",Lt)});return reactExports.useEffect(()=>{const{current:Et}=Mt;Et==null||Et.addEventListener("touchstart",St);const bt=ownerDocument(Et);return()=>{Et==null||Et.removeEventListener("touchstart",St),bt.removeEventListener("mousemove",Ct),bt.removeEventListener("mouseup",Lt),bt.removeEventListener("touchmove",Ct),bt.removeEventListener("touchend",Lt)}},[Lt,Ct,St]),React.createElement(Wrapper$2,{$disabled:i,hasMarks:Boolean(Xt.length),isFocused:kt,onMouseDown:Vt,orientation:it,ref:Ft,size:getSize(lt),...pt},React.createElement("input",{disabled:i,name:tt,type:"hidden",value:at??0}),Xt&&Xt.map(Et=>React.createElement(Tick,{$disabled:i,"data-testid":"tick",key:Et.value/(s-et)*100,orientation:it,style:{[ct?"bottom":"left"]:`${(Et.value-et)/(s-et)*100}%`}},Et.label&&React.createElement(Mark,{"aria-hidden":!0,"data-testid":"mark",orientation:it},Et.label))),React.createElement(yt,{orientation:it,variant:ht}),React.createElement(Thumb,{$disabled:i,"aria-disabled":i?!0:void 0,"aria-orientation":it,"aria-valuemax":s,"aria-valuemin":et,"aria-valuenow":at,onBlur:Kt,onFocus:Ht,onKeyDown:Qt,orientation:it,ref:Dt,role:"slider",style:{[ct?"bottom":"left"]:`${(ct?-100:0)+100*(at-et)/(s-et)}%`},tabIndex:i?void 0:0,variant:ht}))});Slider.displayName="Slider";const StyledTableBody=styled.tbody`
  background: ${({theme:o})=>o.canvas};
  display: table-row-group;
  box-shadow: ${insetShadow};
  overflow-y: auto;
`,TableBody=reactExports.forwardRef(function({children:i,...a},s){return React.createElement(StyledTableBody,{ref:s,...a},i)});TableBody.displayName="TableBody";const StyledTd=styled.td`
  padding: 0 8px;
`,TableDataCell=reactExports.forwardRef(function({children:i,...a},s){return React.createElement(StyledTd,{ref:s,...a},i)});TableDataCell.displayName="TableDataCell";const StyledTableHead=styled.thead`
  display: table-header-group;
`,TableHead=reactExports.forwardRef(function({children:i,...a},s){return React.createElement(StyledTableHead,{ref:s,...a},i)});TableHead.displayName="TableHead";const StyledHeadCell=styled.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:o})=>o.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${createBorderStyles()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:o})=>!o&&Ce`
      &:active {
        &:before {
          ${createBorderStyles({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:o})=>o.materialText};
  ${({$disabled:o})=>o&&createDisabledTextStyles()}
  &:hover {
    color: ${({theme:o})=>o.materialText};
    ${({$disabled:o})=>o&&createDisabledTextStyles()}
  }
`,TableHeadCell=reactExports.forwardRef(function({disabled:i=!1,children:a,onClick:s,onTouchStart:et=noOp,sort:tt,...nt},rt){const ot=tt==="asc"?"ascending":tt==="desc"?"descending":void 0;return React.createElement(StyledHeadCell,{$disabled:i,"aria-disabled":i,"aria-sort":ot,onClick:i?void 0:s,onTouchStart:i?void 0:et,ref:rt,...nt},React.createElement("div",null,a))});TableHeadCell.displayName="TableHeadCell";const StyledTr=styled.tr`
  color: inherit;
  display: table-row;
  height: calc(${blockSizes.md} - 2px);
  line-height: calc(${blockSizes.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:o})=>o.canvasText};
  &:hover {
    background: ${({theme:o})=>o.hoverBackground};
    color: ${({theme:o})=>o.canvasTextInvert};
  }
`,TableRow=reactExports.forwardRef(function({children:i,...a},s){return React.createElement(StyledTr,{ref:s,...a},i)});TableRow.displayName="TableRow";const StyledTable=styled.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,Wrapper$1=styled(StyledScrollView)`
  &:before {
    box-shadow: none;
  }
`,Table=reactExports.forwardRef(({children:o,...i},a)=>React.createElement(Wrapper$1,null,React.createElement(StyledTable,{ref:a,...i},o)));Table.displayName="Table";const StyledTab=styled.button`
  ${createBoxStyles()}
  ${createBorderStyles()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${blockSizes.md};
  line-height: ${blockSizes.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:o})=>o.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${focusOutline}
    outline-offset: -6px;
  }
  ${o=>o.selected&&`
    z-index: 1;
    height: calc(${blockSizes.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:o})=>o.material};
    bottom: -4px;
    left: 2px;
  }
`,Tab=reactExports.forwardRef(({value:o,onClick:i,selected:a=!1,children:s,...et},tt)=>React.createElement(StyledTab,{"aria-selected":a,selected:a,onClick:nt=>i==null?void 0:i(o,nt),ref:tt,role:"tab",...et},s));Tab.displayName="Tab";const StyledTabBody=styled.div`
  ${createBoxStyles()}
  ${createBorderStyles()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,TabBody=reactExports.forwardRef(({children:o,...i},a)=>React.createElement(StyledTabBody,{ref:a,...i},o));TabBody.displayName="TabBody";const StyledTabs=styled.div`
  position: relative;
  ${({isMultiRow:o,theme:i})=>o&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${i.borderDark};
  }
  `}
`,Row=styled.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:o})=>o.borderDarkest};
    border-left: 2px solid ${({theme:o})=>o.borderLightest};
  }
`;function splitToChunks(o,i){const a=[];for(let s=i;s>0;s-=1)a.push(o.splice(0,Math.ceil(o.length/s)));return a}const Tabs=reactExports.forwardRef(({value:o,onChange:i=noOp,children:a,rows:s=1,...et},tt)=>{const nt=reactExports.useMemo(()=>{var rt;const ot=(rt=React.Children.map(a,st=>{if(!React.isValidElement(st))return null;const dt={selected:st.props.value===o,onClick:i};return React.cloneElement(st,dt)}))!==null&&rt!==void 0?rt:[],it=splitToChunks(ot,s).map((st,dt)=>({key:dt,tabs:st})),lt=it.findIndex(st=>st.tabs.some(dt=>dt.props.selected));return it.push(it.splice(lt,1)[0]),it},[a,i,s,o]);return React.createElement(StyledTabs,{...et,isMultiRow:s>1,role:"tablist",ref:tt},nt.map(rt=>React.createElement(Row,{key:rt.key},rt.tabs)))});Tabs.displayName="Tabs";const focusEventTypes=["blur","focus"],mouseEventTypes=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function isReactFocusEvent(o){return"nativeEvent"in o&&focusEventTypes.includes(o.type)}function isReactMouseEvent(o){return"nativeEvent"in o&&mouseEventTypes.includes(o.type)}const positioningStyles={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},Tip=styled.span`
  position: absolute;

  z-index: 1;
  display: ${o=>o.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:o})=>o.borderDarkest};
  background: ${({theme:o})=>o.tooltip};
  box-shadow: ${shadow};
  text-align: center;
  font-size: 1rem;
  ${o=>positioningStyles[o.position]}
`,Wrapper=styled.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,Tooltip=reactExports.forwardRef(({className:o,children:i,disableFocusListener:a=!1,disableMouseListener:s=!1,enterDelay:et=1e3,leaveDelay:tt=0,onBlur:nt,onClose:rt,onFocus:ot,onMouseEnter:it,onMouseLeave:lt,onOpen:st,style:dt,text:ht,position:pt="top",...mt},yt)=>{const[ct,at]=reactExports.useState(!1),[ut,gt]=reactExports.useState(),[vt,wt]=reactExports.useState(),kt=!a,It=!s,Mt=_t=>{window.clearTimeout(ut),window.clearTimeout(vt);const Ct=window.setTimeout(()=>{at(!0),st==null||st(_t)},et);gt(Ct)},Dt=_t=>{_t.persist(),isReactFocusEvent(_t)?ot==null||ot(_t):isReactMouseEvent(_t)&&(it==null||it(_t)),Mt(_t)},Wt=_t=>{window.clearTimeout(ut),window.clearTimeout(vt);const Ct=window.setTimeout(()=>{at(!1),rt==null||rt(_t)},tt);wt(Ct)},Ft=_t=>{_t.persist(),isReactFocusEvent(_t)?nt==null||nt(_t):isReactMouseEvent(_t)&&(lt==null||lt(_t)),Wt(_t)},Ht=kt?Ft:void 0,Kt=kt?Dt:void 0,zt=It?Dt:void 0,Xt=It?Ft:void 0,Qt=kt?0:void 0;return React.createElement(Wrapper,{"data-testid":"tooltip-wrapper",onBlur:Ht,onFocus:Kt,onMouseEnter:zt,onMouseLeave:Xt,tabIndex:Qt},React.createElement(Tip,{className:o,"data-testid":"tooltip",position:pt,ref:yt,show:ct,style:dt,...mt},ht),i)});Tooltip.displayName="Tooltip";const Text=styled(LabelText)`
  white-space: nowrap;
`,focusedElementStyles=Ce`
  :focus {
    outline: none;
  }

  ${({$disabled:o})=>o?"cursor: default;":Ce`
          cursor: pointer;

          :focus {
            ${Text} {
              background: ${({theme:i})=>i.hoverBackground};
              color: ${({theme:i})=>i.materialTextInvert};
              outline: 2px dotted ${({theme:i})=>i.focusSecondary};
            }
          }
        `}
`,TreeWrapper=styled.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:o})=>o&&Ce`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:i})=>i.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:o})=>o.borderDark};
      font-size: 12px;
    }
  }
`,TreeItem=styled.li`
  position: relative;
  padding-left: ${({hasItems:o})=>o?"0":"13px"};

  ${({isRootLevel:o})=>o?Ce`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:i})=>i.material};
            }
          }
        `:Ce`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:i})=>i.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:o})=>o.borderDark};
    }
  }
`,Details=styled.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,Summary=styled.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:o})=>o.materialText};
  user-select: none;
  padding-left: 18px;
  ${focusedElementStyles};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,TitleWithIcon=styled(StyledLabel)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${focusedElementStyles};
`,Icon=styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function toggleItem(o,i){return o.includes(i)?o.filter(a=>a!==i):[...o,i]}function preventDefault(o){o.preventDefault()}function TreeBranch({className:o,disabled:i,expanded:a,innerRef:s,level:et,select:tt,selected:nt,style:rt,tree:ot=[]}){const it=et===0,lt=reactExports.useCallback(st=>{var dt,ht;const pt=Boolean(st.items&&st.items.length>0),mt=a.includes(st.id),yt=(dt=i||st.disabled)!==null&&dt!==void 0?dt:!1,ct=yt?preventDefault:vt=>tt(vt,st),at=yt?preventDefault:vt=>tt(vt,st),ut=nt===st.id,gt=React.createElement(Icon,{"aria-hidden":!0},st.icon);return React.createElement(TreeItem,{key:st.label,isRootLevel:it,role:"treeitem","aria-expanded":mt,"aria-selected":ut,hasItems:pt},pt?React.createElement(Details,{open:mt},React.createElement(Summary,{onClick:ct,$disabled:yt},React.createElement(TitleWithIcon,{$disabled:yt},gt,React.createElement(Text,null,st.label))),mt&&React.createElement(TreeBranch,{className:o,disabled:yt,expanded:a,level:et+1,select:tt,selected:nt,style:rt,tree:(ht=st.items)!==null&&ht!==void 0?ht:[]})):React.createElement(TitleWithIcon,{as:"button",$disabled:yt,onClick:at},gt,React.createElement(Text,null,st.label)))},[o,i,a,it,et,tt,nt,rt]);return React.createElement(TreeWrapper,{className:it?o:void 0,style:it?rt:void 0,ref:it?s:void 0,role:it?"tree":"group",isRootLevel:it},ot.map(lt))}function TreeInner({className:o,defaultExpanded:i=[],defaultSelected:a,disabled:s=!1,expanded:et,onNodeSelect:tt,onNodeToggle:nt,selected:rt,style:ot,tree:it=[]},lt){const[st,dt]=useControlledOrUncontrolled({defaultValue:i,onChange:nt,onChangePropName:"onNodeToggle",value:et,valuePropName:"expanded"}),[ht,pt]=useControlledOrUncontrolled({defaultValue:a,onChange:tt,onChangePropName:"onNodeSelect",value:rt,valuePropName:"selected"}),mt=reactExports.useCallback((at,ut)=>{if(nt){const gt=toggleItem(st,ut);nt(at,gt)}dt(gt=>toggleItem(gt,ut))},[st,nt,dt]),yt=reactExports.useCallback((at,ut)=>{pt(ut),tt&&tt(at,ut)},[tt,pt]),ct=reactExports.useCallback((at,ut)=>{at.preventDefault(),yt(at,ut.id),ut.items&&ut.items.length&&mt(at,ut.id)},[yt,mt]);return React.createElement(TreeBranch,{className:o,disabled:s,expanded:st,level:0,innerRef:lt,select:ct,selected:ht,style:ot,tree:it})}const TreeView=reactExports.forwardRef(TreeInner);TreeView.displayName="TreeView";const Home$1=`.container{display:grid;grid-template-columns:1fr 1fr}.containerMain{display:flex;justify-content:center;align-items:center;margin:0 auto;width:800px;height:100vh}.containerImg{background-color:#2b1165;grid-area:1/1}.contentBtn{display:flex;gap:30px;margin-bottom:15px;width:400px;padding:20px;justify-content:center;align-items:center;justify-items:center;justify-self:center}.contentBtn__titulo{font-size:16px}.contentBtn__Btn{pointer-events:none;width:100%;text-align:center;border-style:solid;border-width:2px;border-color:rgb(254,254,254) rgb(10,10,10) rgb(10,10,10) rgb(254,254,254);box-shadow:#dfdfdf 1px 1px 0 1px inset,#848584 -1px -1px 0 1px inset;padding:10px}.contentBtn__Btn:hover{pointer-events:none;cursor:pointer;background-color:#0ff}.welcomeBar{text-align:center}.titulo{display:flex;justify-content:center;gap:20px;font-size:17px}*{box-sizing:border-box}body{display:flex;align-items:center;justify-content:center;height:100vh;position:relative;overflow:hidden}.overlay{z-index:0;display:block;position:absolute;top:0;left:0;width:100vw;height:100vh;background-color:transparent;background-size:5px 5px,5px 5px;background-position:-1px -1px,-1px -1px;background-image:linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);mix-blend-mode:difference}.glitch{z-index:1;clip-path:polygon(0 0,100% 0,100% .5em,0 .5em);animation:glitch 10s linear infinite;transform:translate(.1rem)}@keyframes glitch{to{clip-path:polygon(0 calc(100% - .5em),100% calc(100% - .5em),0 100%,0 100%)}}.scene{max-width:100%;position:relative;height:100%;background:#daacae;display:flex;flex-direction:row;justify-content:center;align-items:center;perspective:500px}#mirror{width:280px;height:580px;position:relative;box-shadow:16px 2px 10px #0006;perspective:500px;border-top-left-radius:300px;border-top-right-radius:300px;transform-origin:top center;transform:rotateX(deg);cursor:pointer}#mirror-content{position:absolute;content:"";width:100%;height:100%;background-image:url(https://data.whicdn.com/images/251238216/original.gif);background-position:center center;background-size:auto 100%;background-repeat:no-repeat;box-shadow:inset 6px 3px 10px #0006;border-top-left-radius:inherit;border-top-right-radius:inherit;border:6px solid #e7e4df;z-index:0;display:flex;justify-content:center}#mirror-content:before{position:absolute;font-family:sans-serif;text-transform:uppercase;color:#e7e4df;font-weight:700;letter-spacing:4px;font-size:10px;text-shadow:2px 2px 3px rgba(0,0,0,.5);text-align:center;bottom:0;z-index:100;opacity:.6;transition:all .5s ease;padding:18px 0}#mirror:hover #mirror-content:before{opacity:.4;transform:translateY(4px)}@media (max-width: 1200px){.container{display:grid;grid-template-columns:1fr}.containerMain{max-width:800px;width:0;height:auto}.scene{grid-area:1/1;padding:50px;background:none}#mirror{width:300px;height:300px;position:relative;box-shadow:16px 2px 10px #0006;perspective:500px;border-top-left-radius:300px;border-top-right-radius:300px;transform-origin:top center;transform:rotateX(deg);cursor:pointer}}
`,WindowsBox=`.window{z-index:2;min-width:350px;height:150px;text-align:start}.window2{z-index:2;max-width:500px;height:100%;text-align:start}.window:nth-child(2){margin:2rem}.footer{width:100%;display:block;height:31px;line-height:31px}.window-title{display:flex;align-items:center;justify-content:space-between}.close-icon{display:inline-block;width:16px;height:16px;margin-left:-1px;margin-top:-1px;transform:rotate(45deg);position:relative}.close-icon:before{content:"";position:absolute;background:black;height:100%;width:3px;left:50%;transform:translate(-50%)}.close-icon:after{content:"";position:absolute;background:black;height:3px;width:100%;left:0px;top:50%;transform:translateY(-50%)}
`;var peggysPastels={name:"peggysPastels",anchor:"rgb(0, 128, 128)",anchorVisited:"rgb(0, 128, 128)",borderDark:"rgb(222, 69, 96)",borderDarkest:"rgb(64, 64, 64)",borderLight:"rgb(247, 219, 215)",borderLightest:"rgb(250, 224, 228)",canvas:"rgb(244, 255, 255)",canvasText:"rgb(0, 0, 0)",canvasTextDisabled:"rgb(222, 69, 96)",canvasTextDisabledShadow:"rgb(250, 224, 228)",canvasTextInvert:"rgb(0, 0, 0)",checkmark:"rgb(0, 0, 0)",checkmarkDisabled:"rgb(222, 69, 96)",desktopBackground:"rgb(162, 219, 210)",flatDark:"rgb(222, 69, 96)",flatLight:"rgb(247, 219, 215)",focusSecondary:"rgb(250, 224, 228)",headerBackground:"linear-gradient(to right, rgb(0, 191, 188), rgb(202, 156, 185))",headerNotActiveBackground:"linear-gradient(to right, rgb(0, 187, 169), rgb(236, 145, 162))",headerNotActiveText:"rgb(0, 85, 77)",headerText:"rgb(255, 255, 255)",hoverBackground:"rgb(162, 219, 210)",material:"rgb(244, 193, 202)",materialDark:"rgb(0, 187, 169)",materialText:"rgb(0, 0, 0)",materialTextDisabled:"rgb(222, 69, 96)",materialTextDisabledShadow:"rgb(250, 224, 228)",materialTextInvert:"rgb(0, 0, 0)",progress:"rgb(162, 219, 210)",tooltip:"rgb(204, 255, 255)"},peggysPastels_1=peggysPastels;const ms_sans_serif="/assets/ms_sans_serif-11b5a68a.woff2",ms_sans_serif_bold="/assets/ms_sans_serif_bold-5f3fbc57.woff2",Footer=`.mainFooter{z-index:6;position:absolute;bottom:0;left:0;background-color:#ffb1b7;padding:5px;width:100%;display:flex;justify-content:center;align-items:center;font-size:14px}
`;var propTypesExports={},propTypes={get exports(){return propTypesExports},set exports(o){propTypesExports=o}},ReactPropTypesSecret_1,hasRequiredReactPropTypesSecret;function requireReactPropTypesSecret(){if(hasRequiredReactPropTypesSecret)return ReactPropTypesSecret_1;hasRequiredReactPropTypesSecret=1;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ReactPropTypesSecret_1=o,ReactPropTypesSecret_1}var factoryWithThrowingShims,hasRequiredFactoryWithThrowingShims;function requireFactoryWithThrowingShims(){if(hasRequiredFactoryWithThrowingShims)return factoryWithThrowingShims;hasRequiredFactoryWithThrowingShims=1;var o=requireReactPropTypesSecret();function i(){}function a(){}return a.resetWarningCache=i,factoryWithThrowingShims=function(){function s(nt,rt,ot,it,lt,st){if(st!==o){var dt=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw dt.name="Invariant Violation",dt}}s.isRequired=s;function et(){return s}var tt={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:et,element:s,elementType:s,instanceOf:et,node:s,objectOf:et,oneOf:et,oneOfType:et,shape:et,exact:et,checkPropTypes:a,resetWarningCache:i};return tt.PropTypes=tt,tt},factoryWithThrowingShims}var hasRequiredPropTypes;function requirePropTypes(){return hasRequiredPropTypes||(hasRequiredPropTypes=1,propTypes.exports=requireFactoryWithThrowingShims()()),propTypesExports}(function(o){var i={};function a(s){if(i[s])return i[s].exports;var et=i[s]={i:s,l:!1,exports:{}};return o[s].call(et.exports,et,et.exports,a),et.l=!0,et.exports}return a.m=o,a.c=i,a.d=function(s,et,tt){a.o(s,et)||Object.defineProperty(s,et,{enumerable:!0,get:tt})},a.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},a.t=function(s,et){if(1&et&&(s=a(s)),8&et||4&et&&typeof s=="object"&&s&&s.__esModule)return s;var tt=Object.create(null);if(a.r(tt),Object.defineProperty(tt,"default",{enumerable:!0,value:s}),2&et&&typeof s!="string")for(var nt in s)a.d(tt,nt,function(rt){return s[rt]}.bind(null,nt));return tt},a.n=function(s){var et=s&&s.__esModule?function(){return s.default}:function(){return s};return a.d(et,"a",et),et},a.o=function(s,et){return Object.prototype.hasOwnProperty.call(s,et)},a.p="",a(a.s=2)})([function(o,i){o.exports=requirePropTypes()},function(o,i){o.exports=reactExports},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),enterModule;function _typeof(o){return(_typeof=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i})(o)}function _extends(){return(_extends=Object.assign||function(o){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(o[s]=a[s])}return o}).apply(this,arguments)}function _classCallCheck(o,i){if(!(o instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(o,i){for(var a=0;a<i.length;a++){var s=i[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(o,s.key,s)}}function _createClass(o,i,a){return i&&_defineProperties(o.prototype,i),a&&_defineProperties(o,a),o}function _inherits(o,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(i&&i.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),i&&_setPrototypeOf(o,i)}function _setPrototypeOf(o,i){return(_setPrototypeOf=Object.setPrototypeOf||function(a,s){return a.__proto__=s,a})(o,i)}function _createSuper(o){return function(){var i,a=_getPrototypeOf(o);if(_isNativeReflectConstruct()){var s=_getPrototypeOf(this).constructor;i=Reflect.construct(a,arguments,s)}else i=a.apply(this,arguments);return _possibleConstructorReturn(this,i)}}function _possibleConstructorReturn(o,i){return!i||_typeof(i)!=="object"&&typeof i!="function"?_assertThisInitialized(o):i}function _assertThisInitialized(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function _isNativeReflectConstruct(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)})(o)}function _defineProperty(o,i,a){return i in o?Object.defineProperty(o,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[i]=a,o}enterModule=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module),typeof reactHotLoaderGlobal<"u"&&reactHotLoaderGlobal.default.signature;var ReactAudioPlayer=function(_Component){_inherits(ReactAudioPlayer,_Component);var _super=_createSuper(ReactAudioPlayer);function ReactAudioPlayer(){var o;_classCallCheck(this,ReactAudioPlayer);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return _defineProperty(_assertThisInitialized(o=_super.call.apply(_super,[this].concat(a))),"audioEl",react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef()),_defineProperty(_assertThisInitialized(o),"listenTracker",void 0),_defineProperty(_assertThisInitialized(o),"onError",function(et){var tt,nt;return(tt=(nt=o.props).onError)===null||tt===void 0?void 0:tt.call(nt,et)}),_defineProperty(_assertThisInitialized(o),"onCanPlay",function(et){var tt,nt;return(tt=(nt=o.props).onCanPlay)===null||tt===void 0?void 0:tt.call(nt,et)}),_defineProperty(_assertThisInitialized(o),"onCanPlayThrough",function(et){var tt,nt;return(tt=(nt=o.props).onCanPlayThrough)===null||tt===void 0?void 0:tt.call(nt,et)}),_defineProperty(_assertThisInitialized(o),"onPlay",function(et){var tt,nt;o.setListenTrack(),(tt=(nt=o.props).onPlay)===null||tt===void 0||tt.call(nt,et)}),_defineProperty(_assertThisInitialized(o),"onAbort",function(et){var tt,nt;o.clearListenTrack(),(tt=(nt=o.props).onAbort)===null||tt===void 0||tt.call(nt,et)}),_defineProperty(_assertThisInitialized(o),"onEnded",function(et){var tt,nt;o.clearListenTrack(),(tt=(nt=o.props).onEnded)===null||tt===void 0||tt.call(nt,et)}),_defineProperty(_assertThisInitialized(o),"onPause",function(et){var tt,nt;o.clearListenTrack(),(tt=(nt=o.props).onPause)===null||tt===void 0||tt.call(nt,et)}),_defineProperty(_assertThisInitialized(o),"onSeeked",function(et){var tt,nt;(tt=(nt=o.props).onSeeked)===null||tt===void 0||tt.call(nt,et)}),_defineProperty(_assertThisInitialized(o),"onLoadedMetadata",function(et){var tt,nt;(tt=(nt=o.props).onLoadedMetadata)===null||tt===void 0||tt.call(nt,et)}),_defineProperty(_assertThisInitialized(o),"onVolumeChanged",function(et){var tt,nt;(tt=(nt=o.props).onVolumeChanged)===null||tt===void 0||tt.call(nt,et)}),o}return _createClass(ReactAudioPlayer,[{key:"componentDidMount",value:function(){var o=this.audioEl.current;o&&(this.updateVolume(this.props.volume),o.addEventListener("error",this.onError),o.addEventListener("canplay",this.onCanPlay),o.addEventListener("canplaythrough",this.onCanPlayThrough),o.addEventListener("play",this.onPlay),o.addEventListener("abort",this.onAbort),o.addEventListener("ended",this.onEnded),o.addEventListener("pause",this.onPause),o.addEventListener("seeked",this.onSeeked),o.addEventListener("loadedmetadata",this.onLoadedMetadata),o.addEventListener("volumechange",this.onVolumeChanged))}},{key:"componentWillUnmount",value:function(){var o=this.audioEl.current;o&&(o.removeEventListener("error",this.onError),o.removeEventListener("canplay",this.onCanPlay),o.removeEventListener("canplaythrough",this.onCanPlayThrough),o.removeEventListener("play",this.onPlay),o.removeEventListener("abort",this.onAbort),o.removeEventListener("ended",this.onEnded),o.removeEventListener("pause",this.onPause),o.removeEventListener("seeked",this.onSeeked),o.removeEventListener("loadedmetadata",this.onLoadedMetadata),o.removeEventListener("volumechange",this.onVolumeChanged))}},{key:"componentDidUpdate",value:function(o){this.updateVolume(this.props.volume)}},{key:"setListenTrack",value:function(){var o=this;if(!this.listenTracker){var i=this.props.listenInterval;this.listenTracker=window.setInterval(function(){var a,s;o.audioEl.current&&((a=(s=o.props).onListen)===null||a===void 0||a.call(s,o.audioEl.current.currentTime))},i)}}},{key:"updateVolume",value:function(o){var i=this.audioEl.current;i!==null&&typeof o=="number"&&o!==(i==null?void 0:i.volume)&&(i.volume=o)}},{key:"clearListenTrack",value:function(){this.listenTracker&&(clearInterval(this.listenTracker),delete this.listenTracker)}},{key:"render",value:function(){var o=this.props.children||react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Your browser does not support the ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,"audio")," element."),i=this.props.controls!==!1,a=this.props.title?this.props.title:this.props.src,s={};return this.props.controlsList&&(s.controlsList=this.props.controlsList),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("audio",_extends({autoPlay:this.props.autoPlay,className:"react-audio-player ".concat(this.props.className),controls:i,crossOrigin:this.props.crossOrigin,id:this.props.id,loop:this.props.loop,muted:this.props.muted,preload:this.props.preload,ref:this.audioEl,src:this.props.src,style:this.props.style,title:a},s),o)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),ReactAudioPlayer}(react__WEBPACK_IMPORTED_MODULE_0__.Component);_defineProperty(ReactAudioPlayer,"propTypes",void 0),_defineProperty(ReactAudioPlayer,"defaultProps",void 0),ReactAudioPlayer.defaultProps={autoPlay:!1,children:null,className:"",controls:!1,controlsList:"",id:"",listenInterval:1e4,loop:!1,muted:!1,onAbort:function(){},onCanPlay:function(){},onCanPlayThrough:function(){},onEnded:function(){},onError:function(){},onListen:function(){},onPause:function(){},onPlay:function(){},onSeeked:function(){},onVolumeChanged:function(){},onLoadedMetadata:function(){},preload:"metadata",style:{},title:"",volume:1},ReactAudioPlayer.propTypes={autoPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,controls:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,controlsList:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,crossOrigin:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,id:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,listenInterval:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,loop:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,muted:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,onAbort:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onCanPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onCanPlayThrough:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onEnded:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onError:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onListen:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onLoadedMetadata:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onPause:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onSeeked:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onVolumeChanged:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,preload:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["","none","metadata","auto"]),src:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,style:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),title:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,volume:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number};var _default=ReactAudioPlayer,reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(ReactAudioPlayer,"ReactAudioPlayer","/home/justin/Projects/react-audio-player/src/index.tsx"),reactHotLoader.register(_default,"default","/home/justin/Projects/react-audio-player/src/index.tsx")),leaveModule=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(3)(module))},function(o,i){o.exports=function(a){if(!a.webpackPolyfill){var s=Object.create(a);s.children||(s.children=[]),Object.defineProperty(s,"loaded",{enumerable:!0,get:function(){return s.l}}),Object.defineProperty(s,"id",{enumerable:!0,get:function(){return s.i}}),Object.defineProperty(s,"exports",{enumerable:!0}),s.webpackPolyfill=1}return s}}]);const MainFooter=()=>jsxs("div",{className:"mainFooter",children:[jsx("h1",{children:"Proyecto siZod__Login | Nimb 2023"}),jsx("div",{})]}),GlobalStyles$3=We`

  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`,Login=()=>{const o=useNavigate(),[i,a]=reactExports.useState({email:"",pass:""}),[s,et]=reactExports.useState([]),[tt,nt]=reactExports.useState(!1),rt=()=>{if(!i.email||!i.pass){et("Datos incompletos");return}et(""),nt(!0),signInWithEmailAndPassword(auth,i.email,i.pass).then(async ot=>{nt(!1),o("/dashboard")}).catch(ot=>{nt(!1),et(ot.message)})};return jsxs("div",{className:styles$3.container,children:[jsx(GlobalStyles$3,{}),jsx(Fe,{theme:peggysPastels_1,children:jsxs(Window,{className:"window2",children:[jsxs(WindowHeader,{active:!1,className:"window-title",children:[jsx("span",{children:"login.module.css"}),jsx(Link,{to:"/",children:jsx(Button,{children:jsx("span",{className:"close-icon"})})})]}),jsx(WindowContent,{children:jsxs("div",{className:styles$3.innerBox,children:[jsxs("div",{className:styles$3.innerBoxInputs,children:[jsx("h1",{className:styles$3.heading,children:"Login"}),jsx(TextInput,{style:{marginBottom:"0.5rem",lineHeight:"1.5"},autoComplete:"email",type:"email",label:"Email",onChange:ot=>a(it=>({...it,email:ot.target.value})),placeholder:"Ingrese su correo",fullWidth:!0}),jsx(TextInput,{autoComplete:"password",type:"password",label:"Contraseña",onChange:ot=>a(it=>({...it,pass:ot.target.value})),placeholder:"Ingrese su contraseña",fullWidth:!0})]}),jsxs("div",{className:styles$3.innerBoxBtn,children:[jsx(Avatar,{style:{marginTop:"1rem"},square:!0,size:70,src:"https://picsum.photos/200"}),jsx(Button,{size:"lg",onClick:rt,disabled:tt,children:"Guardar"})]})]})}),jsx("div",{className:styles$3.footer,children:jsxs("p",{className:styles$3.footerTitle,children:["¿No tienes cuenta?",jsx("span",{className:styles$3.loginSpan,children:jsx(Link,{to:"/signup",children:" Crear Cuenta"})}),jsx("b",{className:styles$3.error,children:s})]})})]})}),jsx(MainFooter,{})]})},heading="_heading_4q3z9_1",innerBox="_innerBox_4q3z9_11",innerBoxBtn="_innerBoxBtn_4q3z9_23",footerTitle="_footerTitle_4q3z9_37",error="_error_4q3z9_53",loginSpan="_loginSpan_4q3z9_61",styles$1={heading,innerBox,innerBoxBtn,footerTitle,error,loginSpan},GlobalStyles$2=We`

  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`,SignUp=()=>{const o=useNavigate(),[i,a]=reactExports.useState({name:"",email:"",pass:""}),[s,et]=reactExports.useState([]),[tt,nt]=reactExports.useState(!1),rt=()=>{if(!i.name||!i.email||!i.pass){et("Llene todos los campos");return}et(""),nt(!0),createUserWithEmailAndPassword(auth,i.email,i.pass).then(async ot=>{nt(!1);const it=ot.user;await updateProfile(it,{displayName:i.name}),o("/")}).catch(ot=>{nt(!1),et(ot.message)})};return jsxs("div",{className:styles$1.container,children:[jsx(GlobalStyles$2,{}),jsx(Fe,{theme:peggysPastels_1,children:jsxs(Window,{className:"window2",children:[jsxs(WindowHeader,{active:!1,className:"window-title",children:[jsx("span",{children:"SignUp.jsx"}),jsx(Link,{to:"/",children:jsx(Button,{children:jsx("span",{className:"close-icon"})})})]}),jsx(WindowContent,{children:jsxs("div",{className:styles$1.innerBox,children:[jsxs("div",{className:styles$1.innerBoxInputs,children:[jsx("h1",{className:styles$1.heading,children:"SignUp"}),jsx(TextInput,{style:{marginBottom:"0.5rem",lineHeight:"1.5"},autoComplete:"name",type:"text",label:"Nombre",placeholder:"Ingrese un nombre",onChange:ot=>a(it=>({...it,name:ot.target.value})),fullWidth:!0}),jsx(TextInput,{style:{marginBottom:"0.5rem",lineHeight:"1.5"},autoComplete:"email",type:"email",label:"Email",placeholder:"Ingrese un correo",onChange:ot=>a(it=>({...it,email:ot.target.value})),fullWidth:!0}),jsx(TextInput,{type:"password",label:"Contraseña",placeholder:"Ingrese una contraseña",onChange:ot=>a(it=>({...it,pass:ot.target.value})),fullWidth:!0})]}),jsxs("div",{className:styles$1.innerBoxBtn,children:[jsx(Avatar,{style:{marginTop:"1rem"},square:!0,size:70,src:"https://picsum.photos/200"}),jsx(Button,{size:"lg",onClick:rt,disabled:tt,children:"Guardar"})]})]})}),jsx("div",{className:styles$1.footer,children:jsxs("p",{className:styles$1.footerTitle,children:["Si tienes una cuenta ir a",jsx("span",{className:styles$1.loginSpan,children:jsx(Link,{to:"/login",children:" Login"})}),jsx("b",{className:styles$1.error,children:s})]})})]})}),jsx("div",{className:"overlay"}),jsx("div",{className:"overlay glitch"}),jsx(MainFooter,{})]})},GlobalStyles$1=We`

  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;function Home(o){return jsxs("div",{className:"container",children:[jsx("div",{className:"overlay"}),jsx("div",{className:"overlay glitch"}),jsx(GlobalStyles$1,{}),jsxs(Fe,{theme:peggysPastels_1,children:[jsx("div",{className:"containerMain",children:jsxs(Window,{className:"window",children:[jsxs(WindowHeader,{className:"window-title",children:[jsx("span",{children:"siZod.exe"}),jsx(Button,{children:jsx("span",{className:"close-icon"})})]}),jsxs(WindowContent,{className:"titulo",children:[jsx(Link,{to:"/login",children:jsx(Button,{primary:!0,style:{padding:"1.3rem",lineHeight:"1.5"},children:jsx("div",{children:jsx("h1",{className:"titulo",children:"Login"})})})}),jsx(Link,{to:"/signup",children:jsx(Button,{style:{padding:"1.3rem",lineHeight:"1.5"},children:jsx("div",{children:jsx("h1",{className:"titulo",children:"SignUp"})})})})]}),jsx(Frame,{variant:"well",className:"footer",children:jsx("h2",{className:"welcomeBar",children:o.name?`Bienvenido - ${o.name}`:"Inicie sesión"})})]})}),jsxs("div",{className:"scene",children:[jsx("div",{id:"plant",className:"item"}),jsx("div",{id:"mirror",children:jsx("div",{id:"mirror-content"})}),jsx("div",{id:"plant-2",className:"item"}),jsx("div",{id:"books",className:"item",children:jsx("div",{id:"apple",className:"item"})}),jsx("div",{id:"plant-3",className:"item"}),jsx("div",{id:"clock",className:"item"})]})]}),jsx(MainFooter,{})]})}const container="_container_nkak8_1",centerImg="_centerImg_nkak8_11",styles={container,centerImg},logoIMG="/assets/logoIMG-bd1068c8.png";function AppBars(o){const[i,a]=reactExports.useState(!1),s=useNavigate();function et(){auth.signOut().then(()=>{s("/")})}return jsx(AppBar,{children:jsxs(Toolbar,{style:{justifyContent:"space-between"},children:[jsxs("div",{style:{position:"relative",display:"inline-block"},children:[jsxs(Button,{onClick:()=>a(!i),active:i,style:{fontWeight:"bold"},children:[jsx("img",{src:logoIMG,alt:"react95 logo",style:{height:"20px",marginRight:4}}),"Start"]}),i&&jsxs(MenuList,{style:{position:"absolute",left:"0",top:"100%"},onClick:()=>a(!1),children:[jsxs(MenuListItem,{disabled:!0,children:[jsx("span",{role:"img","aria-label":"👨‍💻",children:"👨‍💻"}),"Profile"]}),jsxs(MenuListItem,{disabled:!0,children:[jsx("span",{role:"img","aria-label":"📁",children:"📁"}),"My account"]}),jsx(Separator,{}),jsxs(MenuListItem,{onClick:et,children:[jsx("span",{role:"img","aria-label":"🔙",children:"🔙"}),"Logout"]})]})]}),jsx(TextInput,{placeholder:"Search...",width:150})]})})}const sizod="/assets/siZod-daaea4cf.jpg",GlobalStyles=We`

  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`,DashBoard=()=>jsxs("div",{className:styles.container,children:[jsx("div",{className:"overlay"}),jsx("div",{className:"overlay glitch"}),jsx(GlobalStyles,{}),jsx(Fe,{theme:peggysPastels_1,children:jsxs("div",{className:"containerMain",children:[jsx(AppBars,{})," ",jsx("img",{className:styles.centerImg,src:sizod,alt:"SIII ZOOOD"})]})}),jsx(MainFooter,{})]});function MyRoutes(){const[o,i]=reactExports.useState([]);return reactExports.useEffect(()=>{auth.onAuthStateChanged(a=>{i(a?a.displayName:"")})},[]),jsx(BrowserRouter,{children:jsxs(Routes,{children:[jsx(Route,{exact:!0,path:"/",element:jsx(Home,{name:o})}),jsx(Route,{exact:!0,path:"/login",element:jsx(Login,{})}),jsx(Route,{exact:!0,path:"/signup",element:jsx(SignUp,{})}),jsx(Route,{exact:!0,path:"/dashboard",element:jsx(DashBoard,{})})]})})}function App(){return jsx("div",{children:jsx(MyRoutes,{})})}const index="";client.createRoot(document.getElementById("root")).render(jsx(React.StrictMode,{children:jsx(App,{})}));
