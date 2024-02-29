import { component$, Slot } from '@builder.io/qwik';
import { DarkTheme } from './themes/darkTheme';
import {LightTheme} from './themes/lightTheme';

export const Theme = component$(({theme}: {theme: string}) => {
  return  (
    <>
      {theme === 'dark' && (
        <>
        <DarkTheme>
          <Slot/>
        </DarkTheme>
        </>
      )}
      {theme === 'light' && (
        <>
        <LightTheme>
          <Slot/>
        </LightTheme>
        </>
      )}
    </> 
  )
});
