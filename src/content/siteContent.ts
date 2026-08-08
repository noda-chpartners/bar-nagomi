export const siteContent = {
  store: {
    name: 'Barなごみ',
    englishName: 'BAR NAGOMI',
    phone: '03-4400-4550',
    phoneHref: '0344004550',
    address: '東京都江東区亀戸6-3-1',
    station: '亀戸駅 徒歩5分',
    weekdayHours: '22:00〜',
    holidayHours: '22:00〜',
    closed: '日曜日',
    seats: '15席',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B1%9F%E6%9D%B1%E5%8C%BA%E4%BA%80%E6%88%B86-3-1',
  },
  navigation: [
    { number: '01', label: 'なごみ', href: '#concept' },
    { number: '02', label: '空間', href: '#space' },
    { number: '03', label: 'メニュー', href: '#menu' },
    { number: '04', label: '店舗情報', href: '#information' },
  ],
  hero: {
    eyebrow: 'A QUIET PLACE IN KAMEIDO',
    titleLines: ['一日の終わりに、', 'ほどける時間を。'],
    lead: '亀戸の夜に、なごむひととき。',
  },
  concept: {
    eyebrow: 'NAGOMI / 01',
    titleLines: ['いつもの夜に、', '心ほどける居場所。'],
    textLines: [
      'おひとりでも、気心の知れた方とでも。',
      '亀戸駅から徒歩5分、15席の小さなバーです。',
    ],
  },
  space: {
    eyebrow: 'THE SPACE / 02',
    titleLines: ['灯りと会話が、', 'ゆるやかに交わる。'],
    textLines: [
      '長いカウンターに並ぶボトルと、やわらかな灯り。',
      'その日の気分で、思い思いの夜をお過ごしください。',
    ],
  },
  menu: {
    eyebrow: 'MENU / 03',
    titleLines: ['今夜の一杯を、', 'お好みのままに。'],
    note: 'メニューと価格は、店内の価格表をご覧ください。',
    taxNote: '価格表の記載内容は撮影時点のものです。',
  },
  information: {
    eyebrow: 'INFORMATION / 04',
    title: 'Barなごみ',
  },
} as const;

export type SiteContent = typeof siteContent;
