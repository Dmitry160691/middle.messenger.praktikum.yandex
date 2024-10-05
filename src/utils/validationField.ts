import { paramValid } from '../types/const';

export function validation(key: string, value: string): string {
  if (!value) {
    return 'Не должно быть пустым';
  }
  if (key in paramValid) {
    const res = paramValid[key].REGEXP.test(value);
    return !res ? paramValid[key].message : '';
  } else {
    return '';
  }
}
