import{r as n}from"./index.LFf77hJu.js";/* empty css                       */var g={exports:{}},w={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=n,p=Symbol.for("react.element"),u=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,a=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function l(s,e,r){var h,d={},$=null,t=null;r!==void 0&&($=""+r),e.key!==void 0&&($=""+e.key),e.ref!==void 0&&(t=e.ref);for(h in e)x.call(e,h)&&!_.hasOwnProperty(h)&&(d[h]=e[h]);if(s&&s.defaultProps)for(h in e=s.defaultProps,e)d[h]===void 0&&(d[h]=e[h]);return{$$typeof:p,type:s,key:$,ref:t,props:d,_owner:a.current}}w.Fragment=u;w.jsx=l;w.jsxs=l;g.exports=w;var i=g.exports;function j(s){const{radius:e=20,fill:r,stroke:h,variant:d="card"}=s,$=n.useRef(null),[t,c]=n.useState({width:0,height:0}),o=()=>{$.current&&c({width:$.current.offsetWidth,height:$.current.offsetHeight})};return n.useEffect(()=>(window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}),[]),n.useEffect(()=>{o()},[]),i.jsx("div",{className:"rounded_slide-tile__wrapper",ref:$,children:d==="card"?i.jsx("div",{className:"rounded-tile__wrapper",ref:$,children:i.jsx("svg",{width:t.width,height:t.height,viewBox:`0 0 ${t.width} ${t.height}`,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{d:`M0 ${e}
                C0 9 9 0 ${e} 0
                L${t.width-e} 0
                C${t.width-e/2} 0 ${t.width} 9 ${t.width} ${e}
                V${t.height-e*4}
                C${t.width} ${t.height-e*3-e/2} ${t.width-e/2} ${t.height-e*3} ${t.width-e} ${t.height-e*3}
                L${t.width-e*2} ${t.height-e*3}
                C${t.width-e*2-e/2} ${t.height-e*3} ${t.width-e*3} ${t.height-e*2-e/2} ${t.width-e*3} ${t.height-e*2}
                V${t.height-e}
                C${t.width-e*3} ${t.height-e/2} ${t.width-e*3-e/2} ${t.height} ${t.width-e*4} ${t.height}
                H${e}
                C9 ${t.height} 0 ${t.height-e/2} 0 ${t.height-e}
                V${e}
                Z`,fill:r,stroke:h})})}):d==="slideshow"?i.jsx("svg",{width:t.width,height:t.height,viewBox:`0 0 ${t.width} ${t.height}`,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("defs",{children:i.jsxs("clipPath",{id:"shape-slideshow",children:[i.jsx("path",{d:`M${e*5} ${e*3}
                    C${e*5+e/2} ${e*3} ${e*6} ${e*2+e/2} ${e*6} ${e*2}
                    V${e}
                    C${e*6} ${e/2} ${e*6+e/2} 0 ${e*7} 0
                    L${t.width-e} 0
                    C${t.width-e/2} 0 ${t.width} 9 ${t.width} ${e}
                    V${t.height-e*4}
                    C${t.width} ${t.height-e*3-e/2} ${t.width-e/2} ${t.height-e*3} ${t.width-e} ${t.height-e*3}
                    L${t.width-e*2} ${t.height-e*3}
                    C${t.width-e*2-e/2} ${t.height-e*3} ${t.width-e*3} ${t.height-e*2-e/2} ${t.width-e*3} ${t.height-e*2}
                    V${t.height-e}
                    C${t.width-e*3} ${t.height-e/2} ${t.width-e*3-e/2} ${t.height} ${t.width-e*4} ${t.height}
                    H${e}
                    C${e/2} ${t.height} 0 ${t.height-e/2} 0 ${t.height-e}
                    V${e*4}
                    C0 ${e*3+e/2} ${e/2} ${e*3} ${e} ${e*3}
                    H${e*5}
                    Z`,fill:r,stroke:h}),i.jsx("circle",{cx:e+e/2,cy:e+e/2,r:"24",fill:r}),i.jsx("circle",{cx:e*4+e/2,cy:e+e/2,r:"24",fill:r}),i.jsx("circle",{cx:t.width-e-e/2,cy:t.height-e-e/2,r:"24",fill:r})]})})}):null})}export{j as RoundedTile};
