import expressoTrad from '../assets/expresso.svg'
import expressoAmericano from '../assets/americano.svg'
import expressoCremoso from '../assets/expresso_cremoso.svg'
import cafeGelado from '../assets/cafe_gelado.svg'
import cafeComLeite from '../assets/cafe_com_leite.svg'
import latte from '../assets/latte.svg'
import capuccino from '../assets/capuccino.svg'
import macchiato from '../assets/macchiato.svg'
import mocaccino from '../assets/mocaccino.svg'
import chocolateQuente from '../assets/chocolate_quente.svg'
import cubano from '../assets/cubano.svg'
import havaiano from '../assets/havaiano.svg'
import arabe from '../assets/arabe.svg'
import irlandes from '../assets/irlandes.svg'

export interface Coffee {
  src: string
  types: string[]
  title: string
  description: string
  value: string
}

export const COFFEE_DATA: Coffee[] = [
  {
    src: expressoTrad,
    types: ['TRADICIONAL'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: '9.90',
  },
  {
    src: expressoAmericano,
    types: ['TRADICIONAL'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: '9.90',
  },
  {
    src: expressoCremoso,
    types: ['TRADICIONAL'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    value: '9.90',
  },
  {
    src: cafeGelado,
    types: ['TRADICIONAL', 'GELADO'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    value: '9.90',
  },
  {
    src: cafeComLeite,
    types: ['TRADICIONAL', 'COM LEITE'],
    title: 'Café com leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: '9.90',
  },
  {
    src: latte,
    types: ['TRADICIONAL', 'COM LEITE'],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: '9.90',
  },
  {
    src: capuccino,
    types: ['TRADICIONAL', 'COM LEITE'],
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: '9.90',
  },
  {
    src: macchiato,
    types: ['TRADICIONAL', 'COM LEITE'],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    value: '9.90',
  },
  {
    src: mocaccino,
    types: ['TRADICIONAL', 'COM LEITE'],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: '9.90',
  },
  {
    src: chocolateQuente,
    types: ['ESPECIAL', 'COM LEITE'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    value: '9.90',
  },
  {
    src: cubano,
    types: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: '9.90',
  },
  {
    src: havaiano,
    types: ['ESPECIAL'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    value: '9.90',
  },
  {
    src: arabe,
    types: ['ESPECIAL'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    value: '9.90',
  },
  {
    src: irlandes,
    types: ['ESPECIAL', 'ALCOÓLICO'],
    title: 'Irlândes',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    value: '9.90',
  },
]
