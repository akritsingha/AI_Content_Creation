import{w as i}from"./q-DHtzYj6M.js";const c=async(o,r)=>{console.log("from props"),console.log(o);const t=new Headers;t.append("Content-Type","application/json");const s=JSON.stringify({...o}),n={method:"POST",headers:t,body:s,redirect:"follow"};try{return await(await fetch(r,n)).text()}catch(e){return console.error(e),e}};export{i as _hW,c as s_fBdeWSg96Zg};