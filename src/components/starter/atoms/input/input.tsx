import { component$, $ } from "@builder.io/qwik";
import s from './input.module.css';
import classNames from 'classnames';
 
export interface InputProps {
  data:{
    label?: string,
    placeholder?: string,
    msg?: string,
    options?: any
  },
  layout: {
    appearance?: string,
    classPrefix?: string,
    size?: string,
    required?:boolean
  },
  config: {
    inputType?:string,
    disabled?: boolean,
    onInputChange?: any,
    attributes?:{}
  }
  ref?: any,
  styles?: {}
}


export const Input = component$<InputProps>(({data, layout, config, ref, styles}) => {
  const {
    label='', 
    placeholder= '', 
    msg= '',
    options = {}
  } = data;
  const {
    appearance='',
    classPrefix='',
    size='',
    required=false
  } = layout;
  const {
    inputType = 'text', 
    disabled=false, 
    onInputChange = ()=>{}, 
    attributes
  } = config;

  const InputClassList = classNames(s.input, classPrefix, {
    [s.option]: inputType === 'option',
    [s.row]: appearance === 'row',
    [s.col]: appearance === 'col',
    [s.size_md]: size === 'md',
    [s.size_small]: size === 'small',
    [s.size_xl]: size === 'xl',
    [s.disabled]: disabled === true,
    [s.required]: required === true,
  })

  const handleEvent = $((ev: Event) => {
    //Do something
    if(onInputChange && typeof onInputChange === 'function') {
      onInputChange(ev);
    }
  });

  let inputComp:any;

  switch(inputType){
    case 'option':
      inputComp = (
      <select  {...attributes} >
        {
          Object.keys(options).map((item, index)=>(
            <option value={item} key={`option_${index}`}>{options[item] || ""}</option>
          )) 
        }
      </select>)
      break;
    case 'textarea':
      inputComp = <textarea ref={ref} style={styles} {...attributes} placeholder={placeholder}></textarea>
      break;
    default:
      inputComp = <input ref={ref} style={styles} type={inputType} placeholder={placeholder} onInput$={handleEvent} {...attributes} />
      break;
  }
  

  return (
    <div class={InputClassList}>
      {
        label &&
        <label>{label}</label>
      }
      <div class={s.inputWrapper}>
        {/* <input type={inputType} placeholder={placeholder} onInput$={handleEvent} {...attributes} /> */}
        {inputComp}
        {
          msg &&
          <p class={s.inputMsg}>{msg}</p>
        }
      </div>
      
    </div>
  );
});