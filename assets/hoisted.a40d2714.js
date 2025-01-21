const b=document.getElementById("tilt"),T=25;function R(s,a){return s/a*2-1}function L(s,a,n,r){const h=Math.sqrt((n.left-r)**2+(n.top-r)**2);var u=Math.max(n.left-r-s,0,s-n.right-r),d=Math.max(n.top-r-a,0,a-n.bottom-r);return Math.sqrt(u*u+d*d)/h}function P(s,a,n,r,h){return s<h||a<h||s>n-h||a>r-h}let v=!0,y=!0;const B=32,F=-50;document.addEventListener("mouseout",s=>{v=!1,b.animate({transform:"perspective(63rem) rotateX(0deg) rotateY(0deg)"},{duration:500,fill:"forwards"})});function S(s){const{clientX:a,clientY:n}=s,r=window.innerHeight,h=window.innerWidth,u=b.getBoundingClientRect(),d=L(a,n,u,F);let l=R(a,h)*d*T,f=R(n,r)*d*T;y=P(a,n,h,r,B),v&&!y?b.animate({transform:`perspective(63rem) rotateX(${-f}deg) rotateY(${l}deg)`},{duration:10,fill:"forwards"}):v&&y?(v=!1,b.animate({transform:"perspective(63rem) rotateX(0deg) rotateY(0deg)"},{duration:500,fill:"forwards"})):!v&&!y&&(b.animate({transform:`perspective(63rem) rotateX(${-f}deg) rotateY(${l}deg)`},{duration:500,fill:"forwards"}),setTimeout(()=>{v=!0},1e3))}function O(s){s.matches?document.removeEventListener("mousemove",S):document.addEventListener("mousemove",S)}let W=window.matchMedia("(max-width: 40rem)");O(W);W.addEventListener("change",O);var I=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function V(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var A={exports:{}};(function(s,a){(function(n,r){s.exports=r()})(typeof self<"u"?self:I,()=>(()=>{var n={d:(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};n.r(r),n.d(r,{default:()=>H}),Number.prototype.clamp=function(e,t){return Math.min(Math.max(this,e),t)};function h(e){for(;e.children&&e.children.length>0;)h(e.children[0]),e.remove(e.children[0]);e.geometry&&e.geometry.dispose(),e.material&&(Object.keys(e.material).forEach(t=>{e.material[t]&&e.material[t]!==null&&typeof e.material[t].dispose=="function"&&e.material[t].dispose()}),e.material.dispose())}const u=typeof window=="object";let d=u&&window.THREE||{};u&&!window.VANTA&&(window.VANTA={});const l=u&&window.VANTA||{};l.register=(e,t)=>l[e]=o=>new t(o),l.version="0.5.24";const f=function(){return Array.prototype.unshift.call(arguments,"[VANTA]"),console.error.apply(this,arguments)};l.VantaBase=class{constructor(e={}){if(!u)return!1;l.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.windowGyroWrapper=this.windowGyroWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this);const t=typeof this.getDefaultOptions=="function"?this.getDefaultOptions():this.defaultOptions;if(this.options=Object.assign({mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1},t),(e instanceof HTMLElement||typeof e=="string")&&(e={el:e}),Object.assign(this.options,e),this.options.THREE&&(d=this.options.THREE),this.el=this.options.el,this.el==null)f('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){const g=this.el;if(this.el=(o=g,document.querySelector(o)),!this.el)return void f("Cannot find element",g)}var o,i;this.prepareEl(),this.initThree(),this.setSize();try{this.init()}catch(g){return f("Init error",g),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),void(this.options.backgroundColor&&(console.log("[VANTA] Falling back to backgroundColor"),this.el.style.background=(i=this.options.backgroundColor,typeof i=="number"?"#"+("00000"+i.toString(16)).slice(-6):i)))}this.initMouse(),this.resize(),this.animationLoop();const m=window.addEventListener;m("resize",this.resize),window.requestAnimationFrame(this.resize),this.options.mouseControls&&(m("scroll",this.windowMouseMoveWrapper),m("mousemove",this.windowMouseMoveWrapper)),this.options.touchControls&&(m("touchstart",this.windowTouchWrapper),m("touchmove",this.windowTouchWrapper)),this.options.gyroControls&&m("deviceorientation",this.windowGyroWrapper)}setOptions(e={}){Object.assign(this.options,e),this.triggerMouseMove()}prepareEl(){let e,t;if(typeof Node<"u"&&Node.TEXT_NODE)for(e=0;e<this.el.childNodes.length;e++){const o=this.el.childNodes[e];if(o.nodeType===Node.TEXT_NODE){const i=document.createElement("span");i.textContent=o.textContent,o.parentElement.insertBefore(i,o),o.remove()}}for(e=0;e<this.el.children.length;e++)t=this.el.children[e],getComputedStyle(t).position==="static"&&(t.style.position="relative"),getComputedStyle(t).zIndex==="auto"&&(t.style.zIndex=1);getComputedStyle(this.el).position==="static"&&(this.el.style.position="relative")}applyCanvasStyles(e,t={}){Object.assign(e.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object.assign(e.style,t),e.classList.add("vanta-canvas")}initThree(){d.WebGLRenderer?(this.renderer=new d.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new d.Scene):console.warn("[VANTA] No THREE defined on window")}getCanvasElement(){return this.renderer?this.renderer.domElement:this.p5renderer?this.p5renderer.canvas:void 0}getCanvasRect(){const e=this.getCanvasElement();return!!e&&e.getBoundingClientRect()}windowMouseMoveWrapper(e){const t=this.getCanvasRect();if(!t)return!1;const o=e.clientX-t.left,i=e.clientY-t.top;o>=0&&i>=0&&o<=t.width&&i<=t.height&&(this.mouseX=o,this.mouseY=i,this.options.mouseEase||this.triggerMouseMove(o,i))}windowTouchWrapper(e){const t=this.getCanvasRect();if(!t)return!1;if(e.touches.length===1){const o=e.touches[0].clientX-t.left,i=e.touches[0].clientY-t.top;o>=0&&i>=0&&o<=t.width&&i<=t.height&&(this.mouseX=o,this.mouseY=i,this.options.mouseEase||this.triggerMouseMove(o,i))}}windowGyroWrapper(e){const t=this.getCanvasRect();if(!t)return!1;const o=Math.round(2*e.alpha)-t.left,i=Math.round(2*e.beta)-t.top;o>=0&&i>=0&&o<=t.width&&i<=t.height&&(this.mouseX=o,this.mouseY=i,this.options.mouseEase||this.triggerMouseMove(o,i))}triggerMouseMove(e,t){e===void 0&&t===void 0&&(this.options.mouseEase?(e=this.mouseEaseX,t=this.mouseEaseY):(e=this.mouseX,t=this.mouseY)),this.uniforms&&(this.uniforms.iMouse.value.x=e/this.scale,this.uniforms.iMouse.value.y=t/this.scale);const o=e/this.width,i=t/this.height;typeof this.onMouseMove=="function"&&this.onMouseMove(o,i)}setSize(){this.scale||(this.scale=1),typeof navigator<"u"&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600)&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=Math.max(this.el.offsetWidth,this.options.minWidth),this.height=Math.max(this.el.offsetHeight,this.options.minHeight)}initMouse(){(!this.mouseX&&!this.mouseY||this.mouseX===this.options.minWidth/2&&this.mouseY===this.options.minHeight/2)&&(this.mouseX=this.width/2,this.mouseY=this.height/2,this.triggerMouseMove(this.mouseX,this.mouseY))}resize(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,typeof this.camera.updateProjectionMatrix=="function"&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),typeof this.onResize=="function"&&this.onResize()}isOnScreen(){const e=this.el.offsetHeight,t=this.el.getBoundingClientRect(),o=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,i=t.top+o;return i-window.innerHeight<=o&&o<=i+e}animationLoop(){this.t||(this.t=0),this.t2||(this.t2=0);const e=performance.now();if(this.prevNow){let t=(e-this.prevNow)/16.666666666666668;t=Math.max(.2,Math.min(t,5)),this.t+=t,this.t2+=(this.options.speed||1)*t,this.uniforms&&(this.uniforms.iTime.value=.016667*this.t2)}return this.prevNow=e,this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX+=.05*(this.mouseX-this.mouseEaseX),this.mouseEaseY+=.05*(this.mouseY-this.mouseEaseY),this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&(typeof this.onUpdate=="function"&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update(),typeof this.afterRender=="function"&&this.afterRender()),this.req=window.requestAnimationFrame(this.animationLoop)}restart(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);typeof this.onRestart=="function"&&this.onRestart(),this.init()}init(){typeof this.onInit=="function"&&this.onInit()}destroy(){typeof this.onDestroy=="function"&&this.onDestroy();const e=window.removeEventListener;e("touchstart",this.windowTouchWrapper),e("touchmove",this.windowTouchWrapper),e("scroll",this.windowMouseMoveWrapper),e("mousemove",this.windowMouseMoveWrapper),e("deviceorientation",this.windowGyroWrapper),e("resize",this.resize),window.cancelAnimationFrame(this.req);const t=this.scene;t&&t.children&&h(t),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null),l.current===this&&(l.current=null)}};const z=l.VantaBase;let c=typeof window=="object"&&window.THREE;class j extends z{constructor(t){c=t.THREE||c,c.Color.prototype.toVector=function(){return new c.Vector3(this.r,this.g,this.b)},super(t),this.updateUniforms=this.updateUniforms.bind(this)}init(){this.mode="shader",this.uniforms={iTime:{type:"f",value:1},iResolution:{type:"v2",value:new c.Vector2(1,1)},iDpr:{type:"f",value:window.devicePixelRatio||1},iMouse:{type:"v2",value:new c.Vector2(this.mouseX||0,this.mouseY||0)}},super.init(),this.fragmentShader&&this.initBasicShader()}setOptions(t){super.setOptions(t),this.updateUniforms()}initBasicShader(t=this.fragmentShader,o=this.vertexShader){o||(o=`uniform float uTime;
uniform vec2 uResolution;
void main() {
  gl_Position = vec4( position, 1.0 );
}`),this.updateUniforms(),typeof this.valuesChanger=="function"&&this.valuesChanger();const i=new c.ShaderMaterial({uniforms:this.uniforms,vertexShader:o,fragmentShader:t}),m=this.options.texturePath;m&&(this.uniforms.iTex={type:"t",value:new c.TextureLoader().load(m)});const g=new c.Mesh(new c.PlaneGeometry(2,2),i);this.scene.add(g),this.camera=new c.Camera,this.camera.position.z=1}updateUniforms(){const t={};let o,i;for(o in this.options)i=this.options[o],o.toLowerCase().indexOf("color")!==-1?t[o]={type:"v3",value:new c.Color(i).toVector()}:typeof i=="number"&&(t[o]={type:"f",value:i});return Object.assign(this.uniforms,t)}resize(){super.resize(),this.uniforms.iResolution.value.x=this.width/this.scale,this.uniforms.iResolution.value.y=this.height/this.scale}}class M extends j{}const H=l.register("FOG",M);return M.prototype.defaultOptions={highlightColor:16761600,midtoneColor:16719616,lowlightColor:2949375,baseColor:16772075,blurFactor:.6,speed:1,zoom:1,scale:2,scaleMobile:4},M.prototype.fragmentShader=`uniform vec2 iResolution;
uniform vec2 iMouse;
uniform float iTime;

uniform float blurFactor;
uniform vec3 baseColor;
uniform vec3 lowlightColor;
uniform vec3 midtoneColor;
uniform vec3 highlightColor;
uniform float zoom;

float random (in vec2 _st) {
  return fract(sin(dot(_st.xy,
                     vec2(0.129898,0.78233)))*
        437.585453123);
}

// Based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (in vec2 _st) {
  vec2 i = floor(_st);
  vec2 f = fract(_st);

  // Four corners in 2D of a tile
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  vec2 u = f * f * (3.0 - 2.0 * f);

  return mix(a, b, u.x) +
          (c - a)* u.y * (1.0 - u.x) +
          (d - b) * u.x * u.y;
}

#define NUM_OCTAVES 6

float fbm ( in vec2 _st) {
  float v = 0.0;
  float a = blurFactor;
  vec2 shift = vec2(100.0);
  // Rotate to reduce axial bias
  mat2 rot = mat2(cos(0.5), sin(0.5),
                  -sin(0.5), cos(0.50));
  for (int i = 0; i < NUM_OCTAVES; ++i) {
      v += a * noise(_st);
      _st = rot * _st * 2.0 + shift;
      a *= (1. - blurFactor);
  }
  return v;
}

void main() {
  vec2 st = gl_FragCoord.xy / iResolution.xy*3.;
  st.x *= 0.7 * iResolution.x / iResolution.y ; // Still keep it more landscape than square
  st *= zoom;

  // st += st * abs(sin(iTime*0.1)*3.0);
  vec3 color = vec3(0.0);

  vec2 q = vec2(0.);
  q.x = fbm( st + 0.00*iTime);
  q.y = fbm( st + vec2(1.0));

  vec2 dir = vec2(0.15,0.126);
  vec2 r = vec2(0.);
  r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ dir.x*iTime );
  r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ dir.y*iTime);

  float f = fbm(st+r);

  color = mix(baseColor,
              lowlightColor,
              clamp((f*f)*4.0,0.0,1.0));

  color = mix(color,
              midtoneColor,
              clamp(length(q),0.0,1.0));

  color = mix(color,
              highlightColor,
              clamp(length(r.x),0.0,1.0));

  vec3 finalColor = mix(baseColor, color, f*f*f+.6*f*f+.5*f);
  gl_FragColor = vec4(finalColor,1.0);
}
`,r})())})(A);var q=A.exports;const k=V(q),X="#000031",D="#7C8EAB",_="#d41978",G="#1AC483",N="#C4421A",U="#8B19D4",$=k({el:"#bg",mouseControls:!1,touchControls:!1,gyroControls:!1,minHeight:200,minWidth:200,highlightColor:C(X),midtoneColor:C(_),lowlightColor:C(N),baseColor:0,blurFactor:.9,speed:2,zoom:1});function C(s){return Number(s.replace("#","0x"))}function w(s){let a=parseInt(s.slice(1,3),16),n=parseInt(s.slice(3,5),16),r=parseInt(s.slice(5,7),16);return[a,n,r]}function J(s){return"#"+s.map(a=>{const n=a.toString(16);return n.length===1?"0"+n:n}).join("")}function E(s,a,n){if(n<0||n>1)throw new Error("Factor must be between 0 and 1");let r=s.map((h,u)=>Math.round(h+n*(a[u]-h)));return J(r)}const K=7500,Q=30,Y=1e3/Q;let x=Y/K,p=0;const Z=w(N),ee=w(U),te=w(_),oe=w(G),ie=w(X),se=w(D);setInterval(function(){const s=E(te,oe,p),a=E(Z,ee,p),n=E(ie,se,p);$.setOptions({highlightColor:n,midtoneColor:s,lowlightColor:a}),p=Number(p)+Number(x),p>=1?(x*=-1,p=1):p<=0&&(x*=-1,p=0)},Y);
