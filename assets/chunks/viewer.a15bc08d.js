/*!
 * Viewer.js v1.10.1
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-08-01T13:35:49.731Z
 */function Tt(n,t){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),i.push.apply(i,e)}return i}function bt(n){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?Tt(Object(i),!0).forEach(function(e){ie(n,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):Tt(Object(i)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))})}return n}function st(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?st=function(t){return typeof t}:st=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},st(n)}function te(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function Dt(n,t){for(var i=0;i<t.length;i++){var e=t[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function ee(n,t,i){return t&&Dt(n.prototype,t),i&&Dt(n,i),n}function ie(n,t,i){return t in n?Object.defineProperty(n,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[t]=i,n}var St={backdrop:!0,button:!0,navbar:!0,title:!0,toolbar:!0,className:"",container:"body",filter:null,fullscreen:!0,inheritedAttributes:["crossOrigin","decoding","isMap","loading","referrerPolicy","sizes","srcset","useMap"],initialViewIndex:0,inline:!1,interval:5e3,keyboard:!0,focus:!0,loading:!0,loop:!0,minWidth:200,minHeight:100,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,slideOnTouch:!0,toggleOnDblclick:!0,tooltip:!0,transition:!0,zIndex:2015,zIndexInline:0,zoomRatio:.1,minZoomRatio:.01,maxZoomRatio:100,url:"src",ready:null,show:null,shown:null,hide:null,hidden:null,view:null,viewed:null,move:null,moved:null,rotate:null,rotated:null,scale:null,scaled:null,zoom:null,zoomed:null,play:null,stop:null},ne='<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>',ft=typeof window<"u"&&typeof window.document<"u",F=ft?window:{},U=ft&&F.document.documentElement?"ontouchstart"in F.document.documentElement:!1,wt=ft?"PointerEvent"in F:!1,m="viewer",rt="move",$t="switch",Z="zoom",et="".concat(m,"-active"),ae="".concat(m,"-close"),ot="".concat(m,"-fade"),gt="".concat(m,"-fixed"),se="".concat(m,"-fullscreen"),It="".concat(m,"-fullscreen-exit"),M="".concat(m,"-hide"),re="".concat(m,"-hide-md-down"),oe="".concat(m,"-hide-sm-down"),le="".concat(m,"-hide-xs-down"),k="".concat(m,"-in"),ht="".concat(m,"-invisible"),ut="".concat(m,"-loading"),he="".concat(m,"-move"),xt="".concat(m,"-open"),W="".concat(m,"-show"),T="".concat(m,"-transition"),B="click",vt="dblclick",At="dragstart",Nt="focusin",Ot="keydown",V="load",ue=U?"touchend touchcancel":"mouseup",ce=U?"touchmove":"mousemove",fe=U?"touchstart":"mousedown",Ct=wt?"pointerdown":fe,_t=wt?"pointermove":ce,zt=wt?"pointerup pointercancel":ue,Lt="resize",C="transitionend",kt="wheel",Rt="ready",Vt="show",Ft="shown",Mt="hide",Pt="hidden",Yt="view",$="viewed",Wt="move",Xt="moved",Ht="rotate",qt="rotated",Ut="scale",Bt="scaled",jt="zoom",Kt="zoomed",Zt="play",Gt="stop",ct="".concat(m,"Action"),yt=/\s\s*/,it=["zoom-in","zoom-out","one-to-one","reset","prev","play","next","rotate-left","rotate-right","flip-horizontal","flip-vertical"];function J(n){return typeof n=="string"}var de=Number.isNaN||F.isNaN;function I(n){return typeof n=="number"&&!de(n)}function H(n){return typeof n>"u"}function j(n){return st(n)==="object"&&n!==null}var me=Object.prototype.hasOwnProperty;function G(n){if(!j(n))return!1;try{var t=n.constructor,i=t.prototype;return t&&i&&me.call(i,"isPrototypeOf")}catch{return!1}}function p(n){return typeof n=="function"}function w(n,t){if(n&&p(t))if(Array.isArray(n)||I(n.length)){var i=n.length,e;for(e=0;e<i&&t.call(n,n[e],e,n)!==!1;e+=1);}else j(n)&&Object.keys(n).forEach(function(a){t.call(n,n[a],a,n)});return n}var O=Object.assign||function(t){for(var i=arguments.length,e=new Array(i>1?i-1:0),a=1;a<i;a++)e[a-1]=arguments[a];return j(t)&&e.length>0&&e.forEach(function(s){j(s)&&Object.keys(s).forEach(function(r){t[r]=s[r]})}),t},ge=/^(?:width|height|left|top|marginLeft|marginTop)$/;function _(n,t){var i=n.style;w(t,function(e,a){ge.test(a)&&I(e)&&(e+="px"),i[a]=e})}function ve(n){return J(n)?n.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):n}function X(n,t){return!n||!t?!1:n.classList?n.classList.contains(t):n.className.indexOf(t)>-1}function f(n,t){if(!(!n||!t)){if(I(n.length)){w(n,function(e){f(e,t)});return}if(n.classList){n.classList.add(t);return}var i=n.className.trim();i?i.indexOf(t)<0&&(n.className="".concat(i," ").concat(t)):n.className=t}}function v(n,t){if(!(!n||!t)){if(I(n.length)){w(n,function(i){v(i,t)});return}if(n.classList){n.classList.remove(t);return}n.className.indexOf(t)>=0&&(n.className=n.className.replace(t,""))}}function Q(n,t,i){if(t){if(I(n.length)){w(n,function(e){Q(e,t,i)});return}i?f(n,t):v(n,t)}}var pe=/([a-z\d])([A-Z])/g;function Et(n){return n.replace(pe,"$1-$2").toLowerCase()}function q(n,t){return j(n[t])?n[t]:n.dataset?n.dataset[t]:n.getAttribute("data-".concat(Et(t)))}function pt(n,t,i){j(i)?n[t]=i:n.dataset?n.dataset[t]=i:n.setAttribute("data-".concat(Et(t)),i)}var Jt=function(){var n=!1;if(ft){var t=!1,i=function(){},e=Object.defineProperty({},"once",{get:function(){return n=!0,t},set:function(s){t=s}});F.addEventListener("test",i,e),F.removeEventListener("test",i,e)}return n}();function S(n,t,i){var e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=i;t.trim().split(yt).forEach(function(s){if(!Jt){var r=n.listeners;r&&r[s]&&r[s][i]&&(a=r[s][i],delete r[s][i],Object.keys(r[s]).length===0&&delete r[s],Object.keys(r).length===0&&delete n.listeners)}n.removeEventListener(s,a,e)})}function d(n,t,i){var e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=i;t.trim().split(yt).forEach(function(s){if(e.once&&!Jt){var r=n.listeners,l=r===void 0?{}:r;a=function(){delete l[s][i],n.removeEventListener(s,a,e);for(var o=arguments.length,c=new Array(o),u=0;u<o;u++)c[u]=arguments[u];i.apply(n,c)},l[s]||(l[s]={}),l[s][i]&&n.removeEventListener(s,l[s][i],e),l[s][i]=a,n.listeners=l}n.addEventListener(s,a,e)})}function D(n,t,i,e){var a;return p(Event)&&p(CustomEvent)?a=new CustomEvent(t,bt({bubbles:!0,cancelable:!0,detail:i},e)):(a=document.createEvent("CustomEvent"),a.initCustomEvent(t,!0,!0,i)),n.dispatchEvent(a)}function be(n){var t=n.getBoundingClientRect();return{left:t.left+(window.pageXOffset-document.documentElement.clientLeft),top:t.top+(window.pageYOffset-document.documentElement.clientTop)}}function lt(n){var t=n.rotate,i=n.scaleX,e=n.scaleY,a=n.translateX,s=n.translateY,r=[];I(a)&&a!==0&&r.push("translateX(".concat(a,"px)")),I(s)&&s!==0&&r.push("translateY(".concat(s,"px)")),I(t)&&t!==0&&r.push("rotate(".concat(t,"deg)")),I(i)&&i!==1&&r.push("scaleX(".concat(i,")")),I(e)&&e!==1&&r.push("scaleY(".concat(e,")"));var l=r.length?r.join(" "):"none";return{WebkitTransform:l,msTransform:l,transform:l}}function we(n){return J(n)?decodeURIComponent(n.replace(/^.*\//,"").replace(/[?&#].*$/,"")):""}var mt=F.navigator&&/(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(F.navigator.userAgent);function Qt(n,t,i){var e=document.createElement("img");if(n.naturalWidth&&!mt)return i(n.naturalWidth,n.naturalHeight),e;var a=document.body||document.documentElement;return e.onload=function(){i(e.width,e.height),mt||a.removeChild(e)},w(t.inheritedAttributes,function(s){var r=n.getAttribute(s);r!==null&&e.setAttribute(s,r)}),e.src=n.src,mt||(e.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",a.appendChild(e)),e}function nt(n){switch(n){case 2:return le;case 3:return oe;case 4:return re;default:return""}}function ye(n){var t=bt({},n),i=[];return w(n,function(e,a){delete t[a],w(t,function(s){var r=Math.abs(e.startX-s.startX),l=Math.abs(e.startY-s.startY),h=Math.abs(e.endX-s.endX),o=Math.abs(e.endY-s.endY),c=Math.sqrt(r*r+l*l),u=Math.sqrt(h*h+o*o),g=(u-c)/c;i.push(g)})}),i.sort(function(e,a){return Math.abs(e)<Math.abs(a)}),i[0]}function at(n,t){var i=n.pageX,e=n.pageY,a={endX:i,endY:e};return t?a:bt({timeStamp:Date.now(),startX:i,startY:e},a)}function Ee(n){var t=0,i=0,e=0;return w(n,function(a){var s=a.startX,r=a.startY;t+=s,i+=r,e+=1}),t/=e,i/=e,{pageX:t,pageY:i}}var Te={render:function(){this.initContainer(),this.initViewer(),this.initList(),this.renderViewer()},initBody:function(){var t=this.element.ownerDocument,i=t.body||t.documentElement;this.body=i,this.scrollbarWidth=window.innerWidth-t.documentElement.clientWidth,this.initialBodyPaddingRight=i.style.paddingRight,this.initialBodyComputedPaddingRight=window.getComputedStyle(i).paddingRight},initContainer:function(){this.containerData={width:window.innerWidth,height:window.innerHeight}},initViewer:function(){var t=this.options,i=this.parent,e;t.inline&&(e={width:Math.max(i.offsetWidth,t.minWidth),height:Math.max(i.offsetHeight,t.minHeight)},this.parentData=e),(this.fulled||!e)&&(e=this.containerData),this.viewerData=O({},e)},renderViewer:function(){this.options.inline&&!this.fulled&&_(this.viewer,this.viewerData)},initList:function(){var t=this,i=this.element,e=this.options,a=this.list,s=[];a.innerHTML="",w(this.images,function(r,l){var h=r.src,o=r.alt||we(h),c=t.getImageURL(r);if(h||c){var u=document.createElement("li"),g=document.createElement("img");w(e.inheritedAttributes,function(E){var b=r.getAttribute(E);b!==null&&g.setAttribute(E,b)}),g.src=h||c,g.alt=o,g.setAttribute("data-original-url",c||h),u.setAttribute("data-index",l),u.setAttribute("data-viewer-action","view"),u.setAttribute("role","button"),e.keyboard&&u.setAttribute("tabindex",0),u.appendChild(g),a.appendChild(u),s.push(u)}}),this.items=s,w(s,function(r){var l=r.firstElementChild;pt(l,"filled",!0),e.loading&&f(r,ut),d(l,V,function(h){e.loading&&v(r,ut),t.loadImage(h)},{once:!0})}),e.transition&&d(i,$,function(){f(a,T)},{once:!0})},renderList:function(){var t=this.index,i=this.items[t],e=i.nextElementSibling,a=parseInt(window.getComputedStyle(e||i).marginLeft,10),s=i.offsetWidth,r=s+a;_(this.list,O({width:r*this.length-a},lt({translateX:(this.viewerData.width-s)/2-r*t})))},resetList:function(){var t=this.list;t.innerHTML="",v(t,T),_(t,lt({translateX:0}))},initImage:function(t){var i=this,e=this.options,a=this.image,s=this.viewerData,r=this.footer.offsetHeight,l=s.width,h=Math.max(s.height-r,r),o=this.imageData||{},c;this.imageInitializing={abort:function(){c.onload=null}},c=Qt(a,e,function(u,g){var E=u/g,b=l,A=h;i.imageInitializing=!1,h*E>l?A=l/E:b=h*E,b=Math.min(b*.9,u),A=Math.min(A*.9,g);var N=(l-b)/2,z=(h-A)/2,x={left:N,top:z,x:N,y:z,width:b,height:A,oldRatio:1,ratio:b/u,aspectRatio:E,naturalWidth:u,naturalHeight:g},y=O({},x);e.rotatable&&(x.rotate=o.rotate||0,y.rotate=0),e.scalable&&(x.scaleX=o.scaleX||1,x.scaleY=o.scaleY||1,y.scaleX=1,y.scaleY=1),i.imageData=x,i.initialImageData=y,t&&t()})},renderImage:function(t){var i=this,e=this.image,a=this.imageData;if(_(e,O({width:a.width,height:a.height,marginLeft:a.x,marginTop:a.y},lt(a))),t)if((this.viewing||this.moving||this.rotating||this.scaling||this.zooming)&&this.options.transition&&X(e,T)){var s=function(){i.imageRendering=!1,t()};this.imageRendering={abort:function(){S(e,C,s)}},d(e,C,s,{once:!0})}else t()},resetImage:function(){if(this.viewing||this.viewed){var t=this.image;this.viewing&&this.viewing.abort(),t.parentNode.removeChild(t),this.image=null}}},De={bind:function(){var t=this.options,i=this.viewer,e=this.canvas,a=this.element.ownerDocument;d(i,B,this.onClick=this.click.bind(this)),d(i,At,this.onDragStart=this.dragstart.bind(this)),d(e,Ct,this.onPointerDown=this.pointerdown.bind(this)),d(a,_t,this.onPointerMove=this.pointermove.bind(this)),d(a,zt,this.onPointerUp=this.pointerup.bind(this)),d(a,Ot,this.onKeyDown=this.keydown.bind(this)),d(window,Lt,this.onResize=this.resize.bind(this)),t.zoomable&&t.zoomOnWheel&&d(i,kt,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),t.toggleOnDblclick&&d(e,vt,this.onDblclick=this.dblclick.bind(this))},unbind:function(){var t=this.options,i=this.viewer,e=this.canvas,a=this.element.ownerDocument;S(i,B,this.onClick),S(i,At,this.onDragStart),S(e,Ct,this.onPointerDown),S(a,_t,this.onPointerMove),S(a,zt,this.onPointerUp),S(a,Ot,this.onKeyDown),S(window,Lt,this.onResize),t.zoomable&&t.zoomOnWheel&&S(i,kt,this.onWheel,{passive:!1,capture:!0}),t.toggleOnDblclick&&S(e,vt,this.onDblclick)}},Se={click:function(t){var i=this.options,e=this.imageData,a=t.target,s=q(a,ct);switch(!s&&a.localName==="img"&&a.parentElement.localName==="li"&&(a=a.parentElement,s=q(a,ct)),U&&t.isTrusted&&a===this.canvas&&clearTimeout(this.clickCanvasTimeout),s){case"mix":this.played?this.stop():i.inline?this.fulled?this.exit():this.full():this.hide();break;case"hide":this.hide();break;case"view":this.view(q(a,"index"));break;case"zoom-in":this.zoom(.1,!0);break;case"zoom-out":this.zoom(-.1,!0);break;case"one-to-one":this.toggle();break;case"reset":this.reset();break;case"prev":this.prev(i.loop);break;case"play":this.play(i.fullscreen);break;case"next":this.next(i.loop);break;case"rotate-left":this.rotate(-90);break;case"rotate-right":this.rotate(90);break;case"flip-horizontal":this.scaleX(-e.scaleX||-1);break;case"flip-vertical":this.scaleY(-e.scaleY||-1);break;default:this.played&&this.stop()}},dblclick:function(t){t.preventDefault(),this.viewed&&t.target===this.image&&(U&&t.isTrusted&&clearTimeout(this.doubleClickImageTimeout),this.toggle(t))},load:function(){var t=this;this.timeout&&(clearTimeout(this.timeout),this.timeout=!1);var i=this.element,e=this.options,a=this.image,s=this.index,r=this.viewerData;v(a,ht),e.loading&&v(this.canvas,ut),a.style.cssText="height:0;"+"margin-left:".concat(r.width/2,"px;")+"margin-top:".concat(r.height/2,"px;")+"max-width:none!important;position:relative;width:0;",this.initImage(function(){Q(a,he,e.movable),Q(a,T,e.transition),t.renderImage(function(){t.viewed=!0,t.viewing=!1,p(e.viewed)&&d(i,$,e.viewed,{once:!0}),D(i,$,{originalImage:t.images[s],index:s,image:a},{cancelable:!1})})})},loadImage:function(t){var i=t.target,e=i.parentNode,a=e.offsetWidth||30,s=e.offsetHeight||50,r=!!q(i,"filled");Qt(i,this.options,function(l,h){var o=l/h,c=a,u=s;s*o>a?r?c=s*o:u=a/o:r?u=a/o:c=s*o,_(i,O({width:c,height:u},lt({translateX:(a-c)/2,translateY:(s-u)/2})))})},keydown:function(t){var i=this.options;if(i.keyboard){var e=t.keyCode||t.which||t.charCode;switch(e){case 13:this.viewer.contains(t.target)&&this.click(t);break}if(this.fulled)switch(e){case 27:this.played?this.stop():i.inline?this.fulled&&this.exit():this.hide();break;case 32:this.played&&this.stop();break;case 37:this.prev(i.loop);break;case 38:t.preventDefault(),this.zoom(i.zoomRatio,!0);break;case 39:this.next(i.loop);break;case 40:t.preventDefault(),this.zoom(-i.zoomRatio,!0);break;case 48:case 49:t.ctrlKey&&(t.preventDefault(),this.toggle());break}}},dragstart:function(t){t.target.localName==="img"&&t.preventDefault()},pointerdown:function(t){var i=this.options,e=this.pointers,a=t.buttons,s=t.button;if(!(!this.viewed||this.showing||this.viewing||this.hiding||(t.type==="mousedown"||t.type==="pointerdown"&&t.pointerType==="mouse")&&(I(a)&&a!==1||I(s)&&s!==0||t.ctrlKey))){t.preventDefault(),t.changedTouches?w(t.changedTouches,function(l){e[l.identifier]=at(l)}):e[t.pointerId||0]=at(t);var r=i.movable?rt:!1;i.zoomOnTouch&&i.zoomable&&Object.keys(e).length>1?r=Z:i.slideOnTouch&&(t.pointerType==="touch"||t.type==="touchstart")&&this.isSwitchable()&&(r=$t),i.transition&&(r===rt||r===Z)&&v(this.image,T),this.action=r}},pointermove:function(t){var i=this.pointers,e=this.action;!this.viewed||!e||(t.preventDefault(),t.changedTouches?w(t.changedTouches,function(a){O(i[a.identifier]||{},at(a,!0))}):O(i[t.pointerId||0]||{},at(t,!0)),this.change(t))},pointerup:function(t){var i=this,e=this.options,a=this.action,s=this.pointers,r;t.changedTouches?w(t.changedTouches,function(l){r=s[l.identifier],delete s[l.identifier]}):(r=s[t.pointerId||0],delete s[t.pointerId||0]),a&&(t.preventDefault(),e.transition&&(a===rt||a===Z)&&f(this.image,T),this.action=!1,U&&a!==Z&&r&&Date.now()-r.timeStamp<500&&(clearTimeout(this.clickCanvasTimeout),clearTimeout(this.doubleClickImageTimeout),e.toggleOnDblclick&&this.viewed&&t.target===this.image?this.imageClicked?(this.imageClicked=!1,this.doubleClickImageTimeout=setTimeout(function(){D(i.image,vt)},50)):(this.imageClicked=!0,this.doubleClickImageTimeout=setTimeout(function(){i.imageClicked=!1},500)):(this.imageClicked=!1,e.backdrop&&e.backdrop!=="static"&&t.target===this.canvas&&(this.clickCanvasTimeout=setTimeout(function(){D(i.canvas,B)},50)))))},resize:function(){var t=this;if(!(!this.isShown||this.hiding)&&(this.fulled&&(this.close(),this.initBody(),this.open()),this.initContainer(),this.initViewer(),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage()}),this.played)){if(this.options.fullscreen&&this.fulled&&!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)){this.stop();return}w(this.player.getElementsByTagName("img"),function(i){d(i,V,t.loadImage.bind(t),{once:!0}),D(i,V)})}},wheel:function(t){var i=this;if(this.viewed&&(t.preventDefault(),!this.wheeling)){this.wheeling=!0,setTimeout(function(){i.wheeling=!1},50);var e=Number(this.options.zoomRatio)||.1,a=1;t.deltaY?a=t.deltaY>0?1:-1:t.wheelDelta?a=-t.wheelDelta/120:t.detail&&(a=t.detail>0?1:-1),this.zoom(-a*e,!0,t)}}},Ie={show:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,i=this.element,e=this.options;if(e.inline||this.showing||this.isShown||this.showing)return this;if(!this.ready)return this.build(),this.ready&&this.show(t),this;if(p(e.show)&&d(i,Vt,e.show,{once:!0}),D(i,Vt)===!1||!this.ready)return this;this.hiding&&this.transitioning.abort(),this.showing=!0,this.open();var a=this.viewer;if(v(a,M),a.setAttribute("role","dialog"),a.setAttribute("aria-labelledby",this.title.id),a.setAttribute("aria-modal",!0),a.removeAttribute("aria-hidden"),e.transition&&!t){var s=this.shown.bind(this);this.transitioning={abort:function(){S(a,C,s),v(a,k)}},f(a,T),a.initialOffsetWidth=a.offsetWidth,d(a,C,s,{once:!0}),f(a,k)}else f(a,k),this.shown();return this},hide:function(){var t=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=this.element,a=this.options;if(a.inline||this.hiding||!(this.isShown||this.showing))return this;if(p(a.hide)&&d(e,Mt,a.hide,{once:!0}),D(e,Mt)===!1)return this;this.showing&&this.transitioning.abort(),this.hiding=!0,this.played?this.stop():this.viewing&&this.viewing.abort();var s=this.viewer,r=this.image,l=function(){v(s,k),t.hidden()};if(a.transition&&!i){var h=function c(u){u&&u.target===s&&(S(s,C,c),t.hidden())},o=function(){X(s,T)?(d(s,C,h),v(s,k)):l()};this.transitioning={abort:function(){t.viewed&&X(r,T)?S(r,C,o):X(s,T)&&S(s,C,h)}},this.viewed&&X(r,T)?(d(r,C,o,{once:!0}),this.zoomTo(0,!1,null,!0)):o()}else l();return this},view:function(){var t=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.initialViewIndex;if(i=Number(i)||0,this.hiding||this.played||i<0||i>=this.length||this.viewed&&i===this.index)return this;if(!this.isShown)return this.index=i,this.show();this.viewing&&this.viewing.abort();var e=this.element,a=this.options,s=this.title,r=this.canvas,l=this.items[i],h=l.querySelector("img"),o=q(h,"originalUrl"),c=h.getAttribute("alt"),u=document.createElement("img");if(w(a.inheritedAttributes,function(A){var N=h.getAttribute(A);N!==null&&u.setAttribute(A,N)}),u.src=o,u.alt=c,p(a.view)&&d(e,Yt,a.view,{once:!0}),D(e,Yt,{originalImage:this.images[i],index:i,image:u})===!1||!this.isShown||this.hiding||this.played)return this;var g=this.items[this.index];g&&(v(g,et),g.removeAttribute("aria-selected")),f(l,et),l.setAttribute("aria-selected",!0),a.focus&&l.focus(),this.image=u,this.viewed=!1,this.index=i,this.imageData={},f(u,ht),a.loading&&f(r,ut),r.innerHTML="",r.appendChild(u),this.renderList(),s.innerHTML="";var E=function(){var N=t.imageData,z=Array.isArray(a.title)?a.title[1]:a.title;s.innerHTML=ve(p(z)?z.call(t,u,N):"".concat(c," (").concat(N.naturalWidth," × ").concat(N.naturalHeight,")"))},b;return d(e,$,E,{once:!0}),this.viewing={abort:function(){S(e,$,E),u.complete?t.imageRendering?t.imageRendering.abort():t.imageInitializing&&t.imageInitializing.abort():(u.src="",S(u,V,b),t.timeout&&clearTimeout(t.timeout))}},u.complete?this.load():(d(u,V,b=this.load.bind(this),{once:!0}),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){v(u,ht),t.timeout=!1},1e3)),this},prev:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,i=this.index-1;return i<0&&(i=t?this.length-1:0),this.view(i),this},next:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,i=this.length-1,e=this.index+1;return e>i&&(e=t?0:i),this.view(e),this},move:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,e=this.imageData;return this.moveTo(H(t)?t:e.x+Number(t),H(i)?i:e.y+Number(i)),this},moveTo:function(t){var i=this,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,s=this.element,r=this.options,l=this.imageData;if(t=Number(t),e=Number(e),this.viewed&&!this.played&&r.movable){var h=l.x,o=l.y,c=!1;if(I(t)?c=!0:t=h,I(e)?c=!0:e=o,c){if(p(r.move)&&d(s,Wt,r.move,{once:!0}),D(s,Wt,{x:t,y:e,oldX:h,oldY:o,originalEvent:a})===!1)return this;l.x=t,l.y=e,l.left=t,l.top=e,this.moving=!0,this.renderImage(function(){i.moving=!1,p(r.moved)&&d(s,Xt,r.moved,{once:!0}),D(s,Xt,{x:t,y:e,oldX:h,oldY:o,originalEvent:a},{cancelable:!1})})}}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t)),this},rotateTo:function(t){var i=this,e=this.element,a=this.options,s=this.imageData;if(t=Number(t),I(t)&&this.viewed&&!this.played&&a.rotatable){var r=s.rotate;if(p(a.rotate)&&d(e,Ht,a.rotate,{once:!0}),D(e,Ht,{degree:t,oldDegree:r})===!1)return this;s.rotate=t,this.rotating=!0,this.renderImage(function(){i.rotating=!1,p(a.rotated)&&d(e,qt,a.rotated,{once:!0}),D(e,qt,{degree:t,oldDegree:r},{cancelable:!1})})}return this},scaleX:function(t){return this.scale(t,this.imageData.scaleY),this},scaleY:function(t){return this.scale(this.imageData.scaleX,t),this},scale:function(t){var i=this,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,a=this.element,s=this.options,r=this.imageData;if(t=Number(t),e=Number(e),this.viewed&&!this.played&&s.scalable){var l=r.scaleX,h=r.scaleY,o=!1;if(I(t)?o=!0:t=l,I(e)?o=!0:e=h,o){if(p(s.scale)&&d(a,Ut,s.scale,{once:!0}),D(a,Ut,{scaleX:t,scaleY:e,oldScaleX:l,oldScaleY:h})===!1)return this;r.scaleX=t,r.scaleY=e,this.scaling=!0,this.renderImage(function(){i.scaling=!1,p(s.scaled)&&d(a,Bt,s.scaled,{once:!0}),D(a,Bt,{scaleX:t,scaleY:e,oldScaleX:l,oldScaleY:h},{cancelable:!1})})}}return this},zoom:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,a=this.imageData;return t=Number(t),t<0?t=1/(1-t):t=1+t,this.zoomTo(a.width*t/a.naturalWidth,i,e),this},zoomTo:function(t){var i=this,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,r=this.element,l=this.options,h=this.pointers,o=this.imageData,c=o.x,u=o.y,g=o.width,E=o.height,b=o.naturalWidth,A=o.naturalHeight;if(t=Math.max(0,t),I(t)&&this.viewed&&!this.played&&(s||l.zoomable)){if(!s){var N=Math.max(.01,l.minZoomRatio),z=Math.min(100,l.maxZoomRatio);t=Math.min(Math.max(t,N),z)}a&&l.zoomRatio>=.055&&t>.95&&t<1.05&&(t=1);var x=b*t,y=A*t,tt=x-g,P=y-E,L=o.ratio;if(p(l.zoom)&&d(r,jt,l.zoom,{once:!0}),D(r,jt,{ratio:t,oldRatio:L,originalEvent:a})===!1)return this;if(this.zooming=!0,a){var Y=be(this.viewer),K=h&&Object.keys(h).length?Ee(h):{pageX:a.pageX,pageY:a.pageY};o.x-=tt*((K.pageX-Y.left-c)/g),o.y-=P*((K.pageY-Y.top-u)/E)}else o.x-=tt/2,o.y-=P/2;o.left=o.x,o.top=o.y,o.width=x,o.height=y,o.oldRatio=L,o.ratio=t,this.renderImage(function(){i.zooming=!1,p(l.zoomed)&&d(r,Kt,l.zoomed,{once:!0}),D(r,Kt,{ratio:t,oldRatio:L,originalEvent:a},{cancelable:!1})}),e&&this.tooltip()}return this},play:function(){var t=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(!this.isShown||this.played)return this;var e=this.element,a=this.options;if(p(a.play)&&d(e,Zt,a.play,{once:!0}),D(e,Zt)===!1)return this;var s=this.player,r=this.loadImage.bind(this),l=[],h=0,o=0;if(this.played=!0,this.onLoadWhenPlay=r,i&&this.requestFullscreen(i),f(s,W),w(this.items,function(u,g){var E=u.querySelector("img"),b=document.createElement("img");b.src=q(E,"originalUrl"),b.alt=E.getAttribute("alt"),b.referrerPolicy=E.referrerPolicy,h+=1,f(b,ot),Q(b,T,a.transition),X(u,et)&&(f(b,k),o=g),l.push(b),d(b,V,r,{once:!0}),s.appendChild(b)}),I(a.interval)&&a.interval>0){var c=function u(){t.playing=setTimeout(function(){v(l[o],k),o+=1,o=o<h?o:0,f(l[o],k),u()},a.interval)};h>1&&c()}return this},stop:function(){var t=this;if(!this.played)return this;var i=this.element,e=this.options;if(p(e.stop)&&d(i,Gt,e.stop,{once:!0}),D(i,Gt)===!1)return this;var a=this.player;return this.played=!1,clearTimeout(this.playing),w(a.getElementsByTagName("img"),function(s){S(s,V,t.onLoadWhenPlay)}),v(a,W),a.innerHTML="",this.exitFullscreen(),this},full:function(){var t=this,i=this.options,e=this.viewer,a=this.image,s=this.list;return!this.isShown||this.played||this.fulled||!i.inline?this:(this.fulled=!0,this.open(),f(this.button,It),i.transition&&(v(s,T),this.viewed&&v(a,T)),f(e,gt),e.setAttribute("role","dialog"),e.setAttribute("aria-labelledby",this.title.id),e.setAttribute("aria-modal",!0),e.removeAttribute("style"),_(e,{zIndex:i.zIndex}),i.focus&&this.enforceFocus(),this.initContainer(),this.viewerData=O({},this.containerData),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage(function(){i.transition&&setTimeout(function(){f(a,T),f(s,T)},0)})}),this)},exit:function(){var t=this,i=this.options,e=this.viewer,a=this.image,s=this.list;return!this.isShown||this.played||!this.fulled||!i.inline?this:(this.fulled=!1,this.close(),v(this.button,It),i.transition&&(v(s,T),this.viewed&&v(a,T)),i.focus&&this.clearEnforceFocus(),e.removeAttribute("role"),e.removeAttribute("aria-labelledby"),e.removeAttribute("aria-modal"),v(e,gt),_(e,{zIndex:i.zIndexInline}),this.viewerData=O({},this.parentData),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage(function(){i.transition&&setTimeout(function(){f(a,T),f(s,T)},0)})}),this)},tooltip:function(){var t=this,i=this.options,e=this.tooltipBox,a=this.imageData;return!this.viewed||this.played||!i.tooltip?this:(e.textContent="".concat(Math.round(a.ratio*100),"%"),this.tooltipping?clearTimeout(this.tooltipping):i.transition?(this.fading&&D(e,C),f(e,W),f(e,ot),f(e,T),e.removeAttribute("aria-hidden"),e.initialOffsetWidth=e.offsetWidth,f(e,k)):(f(e,W),e.removeAttribute("aria-hidden")),this.tooltipping=setTimeout(function(){i.transition?(d(e,C,function(){v(e,W),v(e,ot),v(e,T),e.setAttribute("aria-hidden",!0),t.fading=!1},{once:!0}),v(e,k),t.fading=!0):(v(e,W),e.setAttribute("aria-hidden",!0)),t.tooltipping=!1},1e3),this)},toggle:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return this.imageData.ratio===1?this.zoomTo(this.imageData.oldRatio,!0,t):this.zoomTo(1,!0,t),this},reset:function(){return this.viewed&&!this.played&&(this.imageData=O({},this.initialImageData),this.renderImage()),this},update:function(){var t=this,i=this.element,e=this.options,a=this.isImg;if(a&&!i.parentNode)return this.destroy();var s=[];if(w(a?[i]:i.querySelectorAll("img"),function(o){p(e.filter)?e.filter.call(t,o)&&s.push(o):t.getImageURL(o)&&s.push(o)}),!s.length)return this;if(this.images=s,this.length=s.length,this.ready){var r=[];if(w(this.items,function(o,c){var u=o.querySelector("img"),g=s[c];g&&u?(g.src!==u.src||g.alt!==u.alt)&&r.push(c):r.push(c)}),_(this.list,{width:"auto"}),this.initList(),this.isShown)if(this.length){if(this.viewed){var l=r.indexOf(this.index);if(l>=0)this.viewed=!1,this.view(Math.max(Math.min(this.index-l,this.length-1),0));else{var h=this.items[this.index];f(h,et),h.setAttribute("aria-selected",!0)}}}else this.image=null,this.viewed=!1,this.index=0,this.imageData={},this.canvas.innerHTML="",this.title.innerHTML=""}else this.build();return this},destroy:function(){var t=this.element,i=this.options;return t[m]?(this.destroyed=!0,this.ready?(this.played&&this.stop(),i.inline?(this.fulled&&this.exit(),this.unbind()):this.isShown?(this.viewing&&(this.imageRendering?this.imageRendering.abort():this.imageInitializing&&this.imageInitializing.abort()),this.hiding&&this.transitioning.abort(),this.hidden()):this.showing&&(this.transitioning.abort(),this.hidden()),this.ready=!1,this.viewer.parentNode.removeChild(this.viewer)):i.inline&&(this.delaying?this.delaying.abort():this.initializing&&this.initializing.abort()),i.inline||S(t,B,this.onStart),t[m]=void 0,this):this}},xe={getImageURL:function(t){var i=this.options.url;return J(i)?i=t.getAttribute(i):p(i)?i=i.call(this,t):i="",i},enforceFocus:function(){var t=this;this.clearEnforceFocus(),d(document,Nt,this.onFocusin=function(i){var e=t.viewer,a=i.target;a!==document&&a!==e&&!e.contains(a)&&(a.getAttribute("tabindex")===null||a.getAttribute("aria-modal")!=="true")&&e.focus()})},clearEnforceFocus:function(){this.onFocusin&&(S(document,Nt,this.onFocusin),this.onFocusin=null)},open:function(){var t=this.body;f(t,xt),t.style.paddingRight="".concat(this.scrollbarWidth+(parseFloat(this.initialBodyComputedPaddingRight)||0),"px")},close:function(){var t=this.body;v(t,xt),t.style.paddingRight=this.initialBodyPaddingRight},shown:function(){var t=this.element,i=this.options,e=this.viewer;this.fulled=!0,this.isShown=!0,this.render(),this.bind(),this.showing=!1,i.focus&&(e.focus(),this.enforceFocus()),p(i.shown)&&d(t,Ft,i.shown,{once:!0}),D(t,Ft)!==!1&&this.ready&&this.isShown&&!this.hiding&&this.view(this.index)},hidden:function(){var t=this.element,i=this.options,e=this.viewer;i.fucus&&this.clearEnforceFocus(),this.fulled=!1,this.viewed=!1,this.isShown=!1,this.close(),this.unbind(),f(e,M),e.removeAttribute("role"),e.removeAttribute("aria-labelledby"),e.removeAttribute("aria-modal"),e.setAttribute("aria-hidden",!0),this.resetList(),this.resetImage(),this.hiding=!1,this.destroyed||(p(i.hidden)&&d(t,Pt,i.hidden,{once:!0}),D(t,Pt,null,{cancelable:!1}))},requestFullscreen:function(t){var i=this.element.ownerDocument;if(this.fulled&&!(i.fullscreenElement||i.webkitFullscreenElement||i.mozFullScreenElement||i.msFullscreenElement)){var e=i.documentElement;e.requestFullscreen?G(t)?e.requestFullscreen(t):e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen()}},exitFullscreen:function(){var t=this.element.ownerDocument;this.fulled&&(t.fullscreenElement||t.webkitFullscreenElement||t.mozFullScreenElement||t.msFullscreenElement)&&(t.exitFullscreen?t.exitFullscreen():t.webkitExitFullscreen?t.webkitExitFullscreen():t.mozCancelFullScreen?t.mozCancelFullScreen():t.msExitFullscreen&&t.msExitFullscreen())},change:function(t){var i=this.options,e=this.pointers,a=e[Object.keys(e)[0]];if(a){var s=a.endX-a.startX,r=a.endY-a.startY;switch(this.action){case rt:this.move(s,r,t);break;case Z:this.zoom(ye(e),!1,t);break;case $t:{this.action="switched";var l=Math.abs(s);l>1&&l>Math.abs(r)&&(this.pointers={},s>1?this.prev(i.loop):s<-1&&this.next(i.loop));break}}w(e,function(h){h.startX=h.endX,h.startY=h.endY})}},isSwitchable:function(){var t=this.imageData,i=this.viewerData;return this.length>1&&t.x>=0&&t.y>=0&&t.width<=i.width&&t.height<=i.height}},Ae=F.Viewer,Ne=function(n){return function(){return n+=1,n}}(-1),Oe=function(){function n(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(te(this,n),!t||t.nodeType!==1)throw new Error("The first argument is required and must be an element.");this.element=t,this.options=O({},St,G(i)&&i),this.action=!1,this.fading=!1,this.fulled=!1,this.hiding=!1,this.imageClicked=!1,this.imageData={},this.index=this.options.initialViewIndex,this.isImg=!1,this.isShown=!1,this.length=0,this.moving=!1,this.played=!1,this.playing=!1,this.pointers={},this.ready=!1,this.rotating=!1,this.scaling=!1,this.showing=!1,this.timeout=!1,this.tooltipping=!1,this.viewed=!1,this.viewing=!1,this.wheeling=!1,this.zooming=!1,this.id=Ne(),this.init()}return ee(n,[{key:"init",value:function(){var i=this,e=this.element,a=this.options;if(!e[m]){e[m]=this,a.focus&&!a.keyboard&&(a.focus=!1);var s=e.localName==="img",r=[];if(w(s?[e]:e.querySelectorAll("img"),function(o){p(a.filter)?a.filter.call(i,o)&&r.push(o):i.getImageURL(o)&&r.push(o)}),this.isImg=s,this.length=r.length,this.images=r,this.initBody(),H(document.createElement(m).style.transition)&&(a.transition=!1),a.inline){var l=0,h=function(){if(l+=1,l===i.length){var c;i.initializing=!1,i.delaying={abort:function(){clearTimeout(c)}},c=setTimeout(function(){i.delaying=!1,i.build()},0)}};this.initializing={abort:function(){w(r,function(c){c.complete||S(c,V,h)})}},w(r,function(o){o.complete?h():d(o,V,h,{once:!0})})}else d(e,B,this.onStart=function(o){var c=o.target;c.localName==="img"&&(!p(a.filter)||a.filter.call(i,c))&&i.view(i.images.indexOf(c))})}}},{key:"build",value:function(){if(!this.ready){var i=this.element,e=this.options,a=i.parentNode,s=document.createElement("div");s.innerHTML=ne;var r=s.querySelector(".".concat(m,"-container")),l=r.querySelector(".".concat(m,"-title")),h=r.querySelector(".".concat(m,"-toolbar")),o=r.querySelector(".".concat(m,"-navbar")),c=r.querySelector(".".concat(m,"-button")),u=r.querySelector(".".concat(m,"-canvas"));if(this.parent=a,this.viewer=r,this.title=l,this.toolbar=h,this.navbar=o,this.button=c,this.canvas=u,this.footer=r.querySelector(".".concat(m,"-footer")),this.tooltipBox=r.querySelector(".".concat(m,"-tooltip")),this.player=r.querySelector(".".concat(m,"-player")),this.list=r.querySelector(".".concat(m,"-list")),r.id="".concat(m).concat(this.id),l.id="".concat(m,"Title").concat(this.id),f(l,e.title?nt(Array.isArray(e.title)?e.title[0]:e.title):M),f(o,e.navbar?nt(e.navbar):M),Q(c,M,!e.button),e.keyboard&&c.setAttribute("tabindex",0),e.backdrop&&(f(r,"".concat(m,"-backdrop")),!e.inline&&e.backdrop!=="static"&&pt(u,ct,"hide")),J(e.className)&&e.className&&e.className.split(yt).forEach(function(y){f(r,y)}),e.toolbar){var g=document.createElement("ul"),E=G(e.toolbar),b=it.slice(0,3),A=it.slice(7,9),N=it.slice(9);E||f(h,nt(e.toolbar)),w(E?e.toolbar:it,function(y,tt){var P=E&&G(y),L=E?Et(tt):y,Y=P&&!H(y.show)?y.show:y;if(!(!Y||!e.zoomable&&b.indexOf(L)!==-1||!e.rotatable&&A.indexOf(L)!==-1||!e.scalable&&N.indexOf(L)!==-1)){var K=P&&!H(y.size)?y.size:y,dt=P&&!H(y.click)?y.click:y,R=document.createElement("li");e.keyboard&&R.setAttribute("tabindex",0),R.setAttribute("role","button"),f(R,"".concat(m,"-").concat(L)),p(dt)||pt(R,ct,L),I(Y)&&f(R,nt(Y)),["small","large"].indexOf(K)!==-1?f(R,"".concat(m,"-").concat(K)):L==="play"&&f(R,"".concat(m,"-large")),p(dt)&&d(R,B,dt),g.appendChild(R)}}),h.appendChild(g)}else f(h,M);if(!e.rotatable){var z=h.querySelectorAll('li[class*="rotate"]');f(z,ht),w(z,function(y){h.appendChild(y)})}if(e.inline)f(c,se),_(r,{zIndex:e.zIndexInline}),window.getComputedStyle(a).position==="static"&&_(a,{position:"relative"}),a.insertBefore(r,i.nextSibling);else{f(c,ae),f(r,gt),f(r,ot),f(r,M),_(r,{zIndex:e.zIndex});var x=e.container;J(x)&&(x=i.ownerDocument.querySelector(x)),x||(x=this.body),x.appendChild(r)}if(e.inline&&(this.render(),this.bind(),this.isShown=!0),this.ready=!0,p(e.ready)&&d(i,Rt,e.ready,{once:!0}),D(i,Rt)===!1){this.ready=!1;return}this.ready&&e.inline&&this.view(this.index)}}}],[{key:"noConflict",value:function(){return window.Viewer=Ae,n}},{key:"setDefaults",value:function(i){O(St,G(i)&&i)}}]),n}();O(Oe.prototype,Te,De,Se,Ie,xe);export{Oe as default};
