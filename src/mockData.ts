type Dialog = {
  id: number;
  name: string;
  dialog: {
    text: string;
    isYou: boolean;
    time: string;
  }[];
};

export const contacts: Dialog [] = [
  {
    id: 1,
    name: 'Дима',
    dialog: [
      {
        text:'Привет! Что новго?',
        isYou:false,
        time: '01:20',
      },
      {
        text:'Добрый день! Я в своем познании настолько преисполнился, что я как будто бы уже сто триллионов миллиардов лет проживаю на триллионах и триллионах таких же планет, как эта Земля, мне этот мир абсолютно понятен, и я здесь ищу только одного - покоя, умиротворения и вот этой гармонии, от слияния с бесконечно вечным...',
        isYou:true,
        time: '01:30',
      },
      {
        text:'Ок',
        isYou:false,
        time: '01:43',
      },
    ],
  },
  {
    id: 2,
    name: 'Дима2',
    dialog: [
      {
        text:'Привет! Что новго?',
        isYou:false,
        time: '01:20',
      },
      {
        text:'Добрый день! Я в своем познании настолько преисполнился, что я как будто бы уже сто триллионов миллиардов лет проживаю на триллионах и триллионах таких же планет, как эта Земля, мне этот мир абсолютно понятен, и я здесь ищу только одного - покоя, умиротворения и вот этой гармонии, от слияния с бесконечно вечным...',
        isYou:true,
        time: '01:30',
      },
      {
        text:'Ок',
        isYou:false,
        time: '01:46',
      },
    ],
  },
  {
    id: 3,
    name: 'Дима3',
    dialog: [
      {
        text:'Привет! Что новго?',
        isYou:false,
        time: '01:20',
      },
      {
        text:'Добрый день! Я в своем познании настолько преисполнился, что я как будто бы уже сто триллионов миллиардов лет проживаю на триллионах и триллионах таких же планет, как эта Земля, мне этот мир абсолютно понятен, и я здесь ищу только одного - покоя, умиротворения и вот этой гармонии, от слияния с бесконечно вечным...',
        isYou:true,
        time: '01:30',
      },
      {
        text:'Ок',
        isYou:false,
        time: '01:48',
      },
    ],
  },
  {
    id: 4,
    name: 'Дима4',
    dialog: [
      {
        text:'Привет! Что новго?',
        isYou:false,
        time: '01:20',
      },
      {
        text:'Добрый день! Я в своем познании настолько преисполнился, что я как будто бы уже сто триллионов миллиардов лет проживаю на триллионах и триллионах таких же планет, как эта Земля, мне этот мир абсолютно понятен, и я здесь ищу только одного - покоя, умиротворения и вот этой гармонии, от слияния с бесконечно вечным...',
        isYou:true,
        time: '01:30',
      },
      {
        text:'Ок',
        isYou:true,
        time: '01:42',
      },
    ],
  },
  {
    id: 4,
    name: 'Дима0',
    dialog: [
    ],
  }
];

export const profileData = {
  email: '@mail',
  login: 'login-test',
  first_name: 'dima',
  second_name: 'diman',
  phone: '001',
};
