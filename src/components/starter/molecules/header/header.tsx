import { Slot, component$, $ } from '@builder.io/qwik';
// import {TheAiLabLogo} from '~/media/theailab.gif';
// import TheAiLabLogo from "~/media/theAiLab.svg?jsx";
// import TheAiLabLogo from "~/media/theailab.gif?jsx";
// import TheAiLabLogo from "/public.";
import TheAiLabLogo from "~/media/theAiLab.svg?jsx";
// import TheAiLabLogo from "";
import styles from './header.module.css';
// import { SolarSettingsOutline } from '~/components/starter/icons/settings'
import { Button} from '../../atoms/button/button';
import RiArrowRightSFill from '~/components/starter/icons/RiArrowRightSFill'
import MaterialSymbolsViewListSharp from '~/components/starter/icons/MaterialSymbolsViewListSharp'


export const Header = component$(({project, url}: {project?: string, url?: string}) => {
  
  const onMenuClick = $(()=>{
    const openSideNav= new CustomEvent("openSideNav", {
      detail: {component: 'sideNav'}
    });
    window.dispatchEvent(openSideNav);
  })

  const onThemeChange = $((theme:string)=>{
    const themeChange = new CustomEvent("themeChange", {
      detail: {component: 'layout', theme: theme }
    });
    window.dispatchEvent(themeChange);
  })

  const signUpBtnProps = {
    layout: {
      classPrefix: "br-20 button_border d_flex",
      size: "md",
      outline: false,
    },
    config: {
      onBtnClick: onMenuClick,
      attributes: {
        name: "submit",
        value: "translate"
      }
    }
  }

  return <>
    <div class={[styles.header, "d_flex","space-between", "text_nowrap"]}>
      <div class={[styles.logo_container, "d_flex", "space-between"]}>
          <a href="/" title="The Ai Lab" class={["d_flex" , "space-between", "logo"]}>
              <TheAiLabLogo width={50} height={50}/>
              <div class={styles.title} >
                <h1 style={{marginLeft:"10px"}}>The AI Lab</h1>
              </div>
          </a>
          {project && project!= '' && 
            <a href={url} class={["d_flex", "space-between", "align-end", "logo"]}>
              <RiArrowRightSFill height={50} width={20} style={{color: "#767676"}}/>
              <h2>{project}</h2>
            </a>
          }
      </div>
      <div class={[styles.leftContainer, "d_flex"]}>
          <div class={["d_flex", "align-end"]}>
            <p>Themes </p>
            <div class={styles.theme_manage}>
              <button name="darkThemeBtn" class={[styles.dark_circle_theme, "button_border"]}  onClick$={()=>onThemeChange('dark')}></button>
              <button name="lightThemeBtn" class={[styles.light_circle_theme, "button_border"]} onClick$={()=>onThemeChange('light')}></button>
            </div>
          </div>
          <Slot/>
          {/* Settings Button */}
          <Button {...signUpBtnProps}>
            <MaterialSymbolsViewListSharp/> 
            <div class={"ml-7"}>Menu</div>
          </Button>

          
      </div>
    </div>
  </>
});