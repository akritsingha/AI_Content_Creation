import { component$, $, Slot } from "@builder.io/qwik";
import s from './button.module.css';
import classNames from 'classnames';
 
export interface ButtonProps {
  layout: {
    classPrefix?: string,
    size?: string,
    outline?: boolean,
  },
  config: {
    active?: boolean,
    disabled?: boolean,
    loading?: boolean,
    attributes?:{},
    onBtnClick?: any
  },
  onBtnClick?: any
}
 

export const Button = component$<ButtonProps>(({layout, config, onBtnClick}) => {
  const {classPrefix, size} = layout;
  const {active, disabled, loading, attributes} = config;

  const handleClick = $(
   () =>{
    if(onBtnClick && typeof onBtnClick === 'function'){
      onBtnClick();
    }else if(config?.onBtnClick && typeof config.onBtnClick === 'function'){
      config.onBtnClick();
    }
  }
);
  const buttonClassList = classNames(s.button, classPrefix, {
    [s.size_md]: size === 'md',
    [s.size_small]: size === 'small',
    [s.size_xl]: size === 'xl',
    [s.disabled]: disabled === true,
    [s.loading]: loading === true,
    [s.active]: active === true,
  })

  return (
    <button class={buttonClassList} onClick$={handleClick} {...attributes}>
      <Slot/>
    </button>
  );
});