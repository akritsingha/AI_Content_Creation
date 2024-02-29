import { component$, Slot } from '@builder.io/qwik';
import styles from '../css/lightTheme.module.css'
export const LightTheme = component$(() => {
  return  (
    <>
      <div class={styles.theme}>
        <Slot/>
      </div>
    </> 
  )
});