import {component$} from "@builder.io/qwik";

export const NavItems = component$(({classPrefix, itemClass, activeClass,  activeNav, itemList}: 
  {classPrefix?: string ,itemClass?: string, activeClass?: string, activeNav?: string, itemList: any[]}) => {
  return (
    <>
      {Array.isArray(itemList) && itemList.length>0 &&
        <ul class={[classPrefix]}>
            {itemList.map((item, index)=>{
              return (
                <li class={[activeNav === item.name ? activeClass : "", itemClass]} key={`item_${index}`}>
                  <a href={item.link}>{item.name}</a>
                </li>
              )
            })}
        </ul>
      }
    </>
  );
});