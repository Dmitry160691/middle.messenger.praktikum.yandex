interface DataParamValid {
  login: {
    REGEXP: RegExp;
    message: string;
  };
  first_name: {
    REGEXP: RegExp;
    message: string;
  };
  second_name: {
    REGEXP: RegExp;
    message: string;
  };
  email: {
    REGEXP: RegExp;
    message: string;
  };
  password: {
    REGEXP: RegExp;
    message: string;
  };
  phone: {
    REGEXP: RegExp;
    message: string;
  };
  chatTitle: {
    REGEXP: RegExp;
    message: string;
  };
}

const paramValid: DataParamValid = {
  login: {
    REGEXP: /^[a-zA-Z0-9_-]{3,20}$/,
    message: 'от 3 до 20 символов, латиница, может содержать цифры, без пробелов, без спецсимволов',
  },
  first_name: {
    REGEXP: /[А-Яа-яЁё][a-zA-Zа-яёЁ]$/,
    message:
      'латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)',
  },
  second_name: {
    REGEXP: /[А-Яа-яЁё][a-zA-Zа-яёЁ]$/,
    message:
      'латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)',
  },
  email: {
    REGEXP: /[a-zA-Z0-9_-]+@.+[a-zA-Z]+\./,
    message:
      'латиница, может включать цифры и спецсимволы вроде дефиса и подчёркивания, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы',
  },
  password: {
    REGEXP: /^(?=.*[A-Z])(?=.*\d)[a-zA-Zа-яА-Я0-9.,!?]{8,40}$/,
    message: 'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
  },
  phone: {
    REGEXP: /\+?[0-9]{10,15}/,
    message: 'от 10 до 15 символов, состоит из цифр, может начинается с плюса',
  },
  chatTitle: {
    REGEXP: /^[a-zA-Z0-9].*$/,
    message: 'от 1 символа',
  },
};

export function validation(key: string, value: string): string {
  if (!value) {
    return 'Не должно быть пустым';
  }
  if (key in paramValid) {
    const res = paramValid[key as keyof typeof paramValid].REGEXP.test(value);
    return !res ? paramValid[key as keyof typeof paramValid].message : '';
  } else {
    return '';
  }
}
