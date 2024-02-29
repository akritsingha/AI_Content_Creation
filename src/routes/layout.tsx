import { component$, Slot, useSignal, useOnWindow, $, useStyles$} from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import { server$ } from '@builder.io/qwik-city';
import { Theme } from "~/components/theme/theme";
import {MsgToken} from  '~/components/starter/atoms/msgToken/msgToken';
import styles from "~/routes/styles.css?inline";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 50000,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);
  const theme = useSignal('dark');
  const themeCookieName = "theme";
  const getCookie = server$(function() {
      const cookieTheme = this.cookie.get(themeCookieName);
      if(cookieTheme?.value && cookieTheme.value !== ''){
        theme.value = cookieTheme.value
      }
  })
  getCookie();

  

  useOnWindow(
    'load',
    $(() => {
      window.addEventListener("themeChange", function (e:any) {
        const data = e.detail;
        if(data.component == 'layout' && data.theme && data.theme!= ''){
            theme.value = data.theme;
            const cookieName = themeCookieName;
            const cookieValue = data.theme;
            const daysToExpire = new Date(2147483647 * 1000).toUTCString();
            document.cookie = cookieName + '=' + cookieValue + '; expires=' + daysToExpire + '; path=/';
        }
      });
    })
  );


  return (
    <>
      <main>
        <Theme theme={theme.value}>
          <Slot/>
          <MsgToken/>
        </Theme>
      </main>
    </>
  );
});
