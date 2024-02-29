import { component$, useSignal, useOnWindow, $} from "@builder.io/qwik";
import { Form, routeAction$ } from '@builder.io/qwik-city';
import type { DocumentHead } from "@builder.io/qwik-city";
import { server$ } from '@builder.io/qwik-city';
import styles from './rewrite.module.css'
import { Header } from "~/components/starter/molecules/header/header";
import {Input} from "~/components/starter/atoms/input/input";
import {inputLang, outputLang, services, inputTextFieldData, outputTextFieldData, outputBtnProps, submitBtnProps, navItemList} from './data';
import { Button } from "~/components/starter/atoms/button/button";
import {SideNav} from "~/components/starter/atoms/sideNav/sideNav";
import {NavItems} from "~/components/starter/atoms/navItems/navItems";
import MaterialSymbolsDeleteOutline from '~/components/starter/icons/MaterialSymbolsDeleteOutline';
import MaterialSymbolsDownload2Rounded from '~/components/starter/icons/MaterialSymbolsDownload2Rounded';
import MaterialSymbolsContentCopySharp from '~/components/starter/icons/MaterialSymbolsContentCopySharp';
import TdesignLoad from '~/components/starter/icons/TdesignLoad';
import IcSharpRestartAlt from '~/components/starter/icons/IcSharpRestartAlt';
import { sendReq , showMsg} from './functionalities';


export const useRewriteSubmitAction = routeAction$(async (props: any) => {
    let isValidForDataFertch:boolean = true;
    let output:string = ""; 
    Object.keys(props).map((item:string)=>{
      if(props[item] === 'default'){
        isValidForDataFertch = false;
        output =  `${item} is not selected`
      }
      if(props.inputtext === ''){
        isValidForDataFertch = false;
        output = "Input text is empty"
      }
    })
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if(isValidForDataFertch){
      const data:any = await sendReq(props, 'http://localhost:5173/api/test/' )
      console.log("data is")
      const response = JSON.parse(data);
      return {
        success: true,
        output: response.outputText
      }
    }else{
      return {
        success: false,
        output: output
      }
    }
 });





export default component$(() => {
  const rewriteSubmitAction = useRewriteSubmitAction();
  
  
  
  const inputRef = useSignal<HTMLElement>();
  const outputRef = useSignal<HTMLElement>();
  const enableGenerateBtn = useSignal(1);
  

  // font size manage start
  const fontSizeModule = useSignal(5);
  const fontSizeCookieName = "fontSize";
  const getCookie = server$(function() {
    const cookieTheme = this.cookie.get(fontSizeCookieName);
    if(cookieTheme?.value && cookieTheme.value !== ''){
      const cookieVal = parseInt(cookieTheme.value);
      fontSizeModule.value = cookieVal;
    }
  })
  getCookie();

  const fontSize = `${10 + (fontSizeModule.value * 2)}px`;
  const onFontSizeChange = $((event:any)=>{
    fontSizeModule.value= event.target.value;
    const cookieName = fontSizeCookieName;
    const cookieValue = fontSizeModule.value;
    const daysToExpire = new Date(2147483647 * 1000).toUTCString();
    document.cookie = cookieName + '=' + cookieValue + '; expires=' + daysToExpire + '; path=/';
  })
  // font size manage end

  // handle history when browser closed.
  useOnWindow(
    'load',
    $(() => {
      const outputText = localStorage.getItem('output_text');
      const inputText = localStorage.getItem('input_text')
      if(outputText){
        (outputRef.value as HTMLTextAreaElement).value = outputText;
      }
      if(inputText){
        (inputRef.value as HTMLTextAreaElement).value = inputText;
      }
      addEventListener("beforeunload", () => {
        if (outputRef.value) {
          localStorage.setItem('output_text', (outputRef.value as HTMLTextAreaElement).value);
        }
        if (inputRef.value) {
          localStorage.setItem('input_text', (inputRef.value as HTMLTextAreaElement).value);
        }
      });
      addEventListener("disableGenerate", () => {
        console.log('enableGenerateBtn disabled')
        enableGenerateBtn.value = 0;
      });
    })
  )

  // generate output text
  if (rewriteSubmitAction.value?.success) {
    if (outputRef.value) {
      showMsg("Generated Successfully","success" );
      (outputRef.value as HTMLTextAreaElement).value = rewriteSubmitAction.value.output;
      enableGenerateBtn.value = 1;
    }
  } else {
    if(rewriteSubmitAction.value && rewriteSubmitAction.value.output){
      showMsg(rewriteSubmitAction.value.output,"error" );
      enableGenerateBtn.value = 1;
    }
  }

  const discard = $(()=>{
    showMsg("Discarded Successfully","success");
  })

  const copy = $(()=>{
    showMsg("Copied Successfully","success" );
  })

  const download = $(()=>{
    showMsg("Downloaded Successfully","success" );
  })

  const generate =  $(()=>{
    const disableGenerateEvent = new CustomEvent("disableGenerate", {
      detail: {component: 'generateBtn'}
    });
    window.dispatchEvent(disableGenerateEvent);
  })

  return (
    <>
      <div class={styles.rewrite}>
        <Header project={"Rewrite"} url={"/services/rewrite"}>
          <div class={[styles.headerslot]}>
            Font Size aA <input class={[styles.range_slider]} onInput$={onFontSizeChange} type="range" min="0" max="10" value={fontSizeModule.value} step="1"></input>
          </div>
        </Header>
        <div class={[styles.gridContainer, "d_grid_2"]}>
          <div class={[styles.leftContainer, "container"]}>
            <Form action={rewriteSubmitAction} class={"fullheight"}>
              <div class={["d_flex", "space-between", styles.controlls]}>
                <Input {...inputLang}/>
                <Input {...services}/>
                <Input {...outputLang}/>
              </div>
              <Input {...inputTextFieldData} ref={inputRef} styles={{fontSize: fontSize}}/>
              <div class={["d_flex", "mt-10"]} style={{height: "60px"}}>
                <Button {...submitBtnProps} onBtnClick={generate}>
                  <div class={["d_flex"]}>
                    {enableGenerateBtn.value ? 
                      <IcSharpRestartAlt/> : <TdesignLoad/>
                    }
                    <div class={"ml-7"}>Generate</div>
                  </div>
                </Button>
              </div>
            </Form>
          </div>
          <div class={[styles.rightContainer, "container", "border-left"]}>
            {/* <Form class={"fullheight"}> */}
              <div class={["d_flex", "space-end" , styles.controlls]}>
                <Button {...outputBtnProps} onBtnClick={copy}>
                  <div class={["d_flex"]}>
                    <MaterialSymbolsContentCopySharp/>
                    <div class={"ml-7"}>Copy</div>
                  </div>
                </Button>
                <Button {...outputBtnProps} onBtnClick={discard}>
                  <div class={["d_flex"]}>
                    <MaterialSymbolsDeleteOutline/>
                    <div class={"ml-7"}>Discard</div>
                  </div>
                </Button>
                <Button {...outputBtnProps} onBtnClick={download}>
                  <div class={["d_flex"]}>
                    <MaterialSymbolsDownload2Rounded/>
                    <div class={"ml-7"}>Download</div>
                  </div>
                </Button>
              </div>
              <Input {...outputTextFieldData} ref={outputRef} styles={{fontSize: fontSize}}/>
              {/* {msgVal.value && typeVal.value && */}
                 
              {/* } */}
          </div>
        </div>
      </div>
      {/* Overlay items */}
      <SideNav classPrefix="pos_right pageSideNav fullheight">
          <NavItems classPrefix="d_flex fullheight flex_column ml-12" activeNav="Services" activeClass="navActive" itemClass="navItem mt-30 font_25" itemList={navItemList}/>
      </SideNav>
    </>
  );
});


export const head: DocumentHead = {
  title: "Rewrite",
  meta: [
    {
      name: "description",
      content: "The AI Lab > Rewrite",
    },
  ],
};
