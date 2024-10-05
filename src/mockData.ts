import { DialogData, ProfileData } from './types/types';

export const contacts: DialogData [] = [
  {
    id: 1,
    name: 'Дима',
    dialog: [
      {
        text: 'Привет! Что новго?',
        isYou: false,
        time: '01:20',
      },
      {
        text: 'Добрый день! Я в своем познании настолько преисполнился, что я как будто бы уже сто триллионов миллиардов лет проживаю на триллионах и триллионах таких же планет, как эта Земля, мне этот мир абсолютно понятен, и я здесь ищу только одного - покоя, умиротворения и вот этой гармонии, от слияния с бесконечно вечным...',
        isYou: true,
        time: '01:30',
      },
      {
        text: 'Ок',
        isYou: false,
        time: '01:43',
      },
    ],
  },
  {
    id: 2,
    name: 'Катя',
    dialog: [
      {
        text: 'Как дела?',
        isYou: false,
        time: '02:00',
      },
      {
        text: 'Хорошо, а у тебя?',
        isYou: true,
        time: '02:10',
      },
      {
        text: 'Отлично, спасибо!',
        isYou: false,
        time: '02:20',
      },
    ],
  },
  {
    id: 3,
    name: 'Саша',
    dialog: [
      {
        text: 'Привет! Как настроение?',
        isYou: false,
        time: '03:00',
      },
      {
        text: 'Прекрасно, спасибо!',
        isYou: true,
        time: '03:10',
      },
      {
        text: 'Здорово! Чем занимаешься?',
        isYou: false,
        time: '03:20',
      },
    ],
  },
  {
    id: 4,
    name: 'Лена',
    dialog: [
      {
        text: 'Привет!',
        isYou: false,
        time: '04:00',
      },
      {
        text: 'Привет!',
        isYou: true,
        time: '04:10',
      },
      {
        text: 'Отлично, спасибо!',
        isYou: false,
        time: '04:20',
      },
    ],
  },
  {
    id: 5,
    name: 'Миша',
    dialog: [
      {
        text: 'Добрый день!',
        isYou: false,
        time: '05:00',
      },
      {
        text: 'Hi',
        isYou: true,
        time: '05:10',
      },
      {
        text: 'не понимаю(',
        isYou: false,
        time: '05:20',
      },
    ],
  },
];

export const profileData: ProfileData = {
  email: '@mail',
  login: 'login-test',
  first_name: 'dima',
  second_name: 'diman',
  phone: '001',
};

