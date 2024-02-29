import {component$, useSignal, $, useOnWindow } from "@builder.io/qwik";
import styles from './msgToken.module.css';
import classNames from 'classnames';

export const MsgToken = component$(() => {
   const msgText = useSignal('');
   const msgType = useSignal('');
   const hideMsg = useSignal(1);
   
  useOnWindow(
    'load',
    $(() => {
     addEventListener("showMsgToUser", function (e:any) {
        const eventData = e.detail;
        const {msg, type} = eventData?.data || {}
        msgText.value = msg;
        msgType.value = type;
        hideMsg.value = 0;

        setTimeout(()=>{
          hideMsg.value = 1;
        }, 4000)
      });
    })
  );

  const msgClass = classNames(styles.msg, {
    [styles.error]: msgType.value === 'error',
    [styles.success]: msgType.value === 'success',
    [styles.warning]: msgType.value === 'warning',
    [styles.info]: msgType.value === 'info',
    [styles.hide]: hideMsg.value,
  })
  console.log('called')

  return (
    <>
      {
        <p class={[msgClass]}>{msgText}</p>
      }  
    </>
    
  );
});
