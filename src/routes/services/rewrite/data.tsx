import styles from './rewrite.module.css';
export const inputLang = {
  data: {
    options: {
      "default": "Input language",
      "hi" : "Hindi",
      "en" : "English",
      "ben" : "Bengali"
    }
  },
  layout: {
    appearance: "col", // row | col
    classPrefix: '',
    size: "md",
    required: true
  },
  config: {
    inputType: "option",
    disabled: false,
     attributes: {
      name: "inputlang",
      required: true
    }
  }
}

export const services = {
  data: {
    options: {
      "default": "Services",
      "paraphase" : "Paraphase",
      "translate" : "Translate",
      "both" : "Both"
    }
  },
  layout: {
    appearance: "col", // row | col
    classPrefix: '',
    size: "md",
    required: true
  },
  config: {
    inputType: "option",
    disabled: false,
     attributes: {
      name: "services",
      required: true
    }
  }
}

export const outputLang = {
  data: {
    options: {
      "default": "Output language",
      "hi" : "Hindi",
      "en" : "English",
      "ben" : "Bengali"
    }
  },
  layout: {
    appearance: "col", // row | col
    classPrefix: '',
    size: "md",
    required: true
  },
  config: {
    inputType: "option",
    disabled: false,
     attributes: {
      name: "outputLang",
      required: true
    }
  }
}


export const inputTextFieldData = {
  data:{
    label: "Write Your Story Here:",
    placeholder: "Enter text to translate",
  },
  layout: {
    appearance: "col", // row | col
    classPrefix: styles.iuputContainer,
    size: "md",
    required: true
  },
  config: {
    inputType: "textarea",
    disabled: false,
    attributes: {
      name: "inputtext",
      required: true
    }
  }
}

export const outputTextFieldData = {
  data:{
    label: "Output Here:",
    placeholder: "Output text generate here",
  },
  layout: {
    appearance: "col", // row | col
    classPrefix: styles.iuputContainer,
    size: "md"
  },
  config: {
    inputType: "textarea",
    disabled: false,
    attributes:{
      name:"outputText"
    }
  }
}


export const outputBtnProps = {
    layout: {
      classPrefix: "br-20 ml-7 button_border",
      size: "md",
      outline: false,
    },
    config: {
      // onBtnClick: ()=>{},
      attributes: {
        name: "submit",
        value: "translate"
      }
    }
  }


export const submitBtnProps = {
    layout: {
      appearance: "primary",
      classPrefix: "br-7 button_border",
      size: "xl",
      outline: false,
    },
    config: {
      attributes: {
        name: "submit",
        value: "translate"
      }
    }
  }

export const navItemList = [
  {link: '/', name: "Home"},
  {link: '/blogs', name: "About"},
  {link: '/services', name: "Services"},
  {link: '/settings', name: "Settings"}
]
  