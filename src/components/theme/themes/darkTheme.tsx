import { component$, Slot } from '@builder.io/qwik';
import styles from '../css/darkTheme.module.css';
export const DarkTheme = component$(() => {
  return  (
    <>
      <div class={styles.theme}>
        <Slot/>
      </div>
    </> 
  )
});