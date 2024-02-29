import { Slot, component$, $, useSignal, useOnWindow} from "@builder.io/qwik";
import styles from './sideNav.module.css';
import classNames from 'classnames';
import { Button } from "~/components/starter/atoms/button/button";
import MaterialSymbolsCancelOutline from '~/components/starter/icons/MaterialSymbolsCancelOutline';
export const SideNav = component$(({classPrefix}: {classPrefix: string}) => {
  const navStatus = useSignal('close');
  useOnWindow(
    'load',
    $(() => {
      window.addEventListener("openSideNav", (e:any) => {
        const data = e.detail;
        if(data.component == 'sideNav'){
            navStatus.value = "open";
        }
      });
    })
  );
  const closeBtnProps = {
    layout: {
      classPrefix: `br-20 ml-7 button_border ${styles.closeBtn}`,
      size: "md",
      outline: false,
    },
    config: {
      onBtnClick: $(()=>{
        navStatus.value = 'close';
      }),
      attributes: {
        name: "submit",
        value: "translate"
      }
    }
  }
  const navContainerClassList = classNames(styles.navOverlay, {
    [styles.active]: navStatus.value === 'open',
  })
  const navClassList = classNames(styles.sideNav, "sidePageNav",  classPrefix, {
    [styles.active]: navStatus.value === 'open',
  })
  return (
    <>
      <div class={navContainerClassList}></div>
      <div class={navClassList}>
        <Button {...closeBtnProps}>
          <div class={["d_flex"]}>
            <MaterialSymbolsCancelOutline/>
            <div class={"ml-7"}>Close</div>
          </div>
        </Button>
        <Slot/>
      </div>
    </>
  );
});