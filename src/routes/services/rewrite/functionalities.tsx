import { $ } from "@builder.io/qwik";

interface options {
    method: string
    headers: any
    body: any
    redirect: any
}

export  const sendReq = $(async (props:{}, apiUrl: string) => {
    console.log("from props");
    console.log(props);
    const apiHeaders = new Headers();
    apiHeaders.append('Content-Type', 'application/json');
    const raw = JSON.stringify({...props});
    const requestOptions:options = {
        method: 'POST',
        headers: apiHeaders,
        body: raw,
        redirect: 'follow'
    };
    try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.text();
        return data;
    } catch (err) {
       console.error(err);
       return err;
    }

})

export const showMsg = $((msg:string, type:string|undefined)=>{
    const msgEvent = new CustomEvent("showMsgToUser", {
      detail: {component: 'msgToken', data: {
        msg, type
      }}
    });
    window.dispatchEvent(msgEvent);
})