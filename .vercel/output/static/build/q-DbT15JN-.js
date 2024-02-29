import{c as r,p as l,E as i,P as u,a as g,q as d,_ as m,$ as p,w as v}from"./q-DHtzYj6M.js";import{c as h}from"./q-D4A56oZs.js";const T="_msg_827qi_1",f="_error_827qi_13",y="_success_827qi_17",q="_info_827qi_21",P="_hide_827qi_25",e={msg:T,error:f,success:y,info:q,hide:P},E=()=>{const o=r(""),s=r(""),n=r(1);l("load",d(()=>m(()=>Promise.resolve().then(()=>M),void 0),"s_zNNTpZ06gds",[n,o,s]));const t=h(e.msg,{[e.error]:s.value==="error",[e.success]:s.value==="success",[e.warning]:s.value==="warning",[e.info]:s.value==="info",[e.hide]:n.value});return console.log("called"),i(g,{children:u("p",{class:[t]},null,o,3,null)},1,"P5_0")},w=()=>{const[o,s,n]=p();addEventListener("showMsgToUser",function(t){const c=t.detail,{msg:_,type:a}=(c==null?void 0:c.data)||{};s.value=_,n.value=a,o.value=0,setTimeout(()=>{o.value=1},4e3)})},M=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_RtEj6ylQIJo:E,s_zNNTpZ06gds:w},Symbol.toStringTag,{value:"Module"}));export{v as _hW,E as s_RtEj6ylQIJo,w as s_zNNTpZ06gds};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
