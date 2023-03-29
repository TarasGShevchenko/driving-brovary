import { FunctionComponent, SVGProps } from 'react'
import { ReactComponent as Calendar } from '../assets/icons/calendar.svg'
import { ReactComponent as Coin } from '../assets/icons/coin.svg'
import { ReactComponent as Time } from '../assets/icons/time.svg'
import { ReactComponent as Book } from '../assets/icons/book.svg'

export type Card = {
  name: string
  price: string
  description: string[]
}

export const cards: Card[] = [
  {
    name: 'Standard',
    price: '10 000 грн',
    description: [
      'Теоретичний курс навчання - 4000 грн',
      'Практичний курс навчання ( 10 занять з водіння ) - 6000 грн',
      'Паливо (ПММ)',
      'Література (ПДР)',
      'Внесок від 2000 грн.',
    ],
  },
  {
    name: 'Plus',
    price: '12 500 грн',
    description: [
      'Теоретичний курс навчання - 4000 грн',
      'Практичний курс навчання ( 15 занять з водіння ) - 7500 грн',
      'Паливо (ПММ)',
      'Література (ПДР)',
      'Внесок від 2500 грн.',
    ],
  },
]

export type AdvantagesItem = {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>
  position: string
  name: string
  content: string
}

export const advantages: AdvantagesItem[] = [
  {
    icon: Calendar,
    position: '1',
    name: 'Час',
    content:
      'Підбирайте для себе найбільш зручний графік навчання теорії у класі або онлайн, а також індивідуальний час для водіння.',
  },
  {
    icon: Coin,
    position: '2',
    name: 'Комфортна вартість',
    content:
      'Ви завжди можете вибрати тільки теорію, а потім по бажанню обрати найбільш оптимальний для вас пакет практичних занять.',
  },
  {
    icon: Time,
    position: '3',
    name: 'Графік оплати',
    content: 'Вам не потрібно оплачувати заздалегідь. Приходьте на першу лекцію безкоштовно.',
  },
  {
    icon: Book,
    position: '4',
    name: 'Література',
    content: 'Підручник для теоретичних лекцій входить у вартість будь якого з пакетів навчання.',
  },
]

export type IndividuallyType = {
  type: string
  price: string
  time: string
}

export const individuals: IndividuallyType[] = [
  {
    type: 'Механіка',
    price: '500 грн',
    time: 'за 60 хвилин',
  },
  {
    type: 'Автомат',
    price: '500 грн',
    time: 'за 60 хвилин',
  },
]
