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
import { Produto } from '../interfaces'

export const PRODUTOS_MOCK: Produto[] = [
  {
    imageUrl: expressoTrad,
    tipo: ['TRADICIONAL'],
    nome: 'Expresso Tradicional',
    descricao: 'O tradicional café feito com água quente e grãos moídos',
    preco: 9.9,
  },
  {
    imageUrl: expressoAmericano,
    tipo: ['TRADICIONAL'],
    nome: 'Expresso Americano',
    descricao: 'Expresso diluído, menos intenso que o tradicional',
    preco: 9.9,
  },
  {
    imageUrl: expressoCremoso,
    tipo: ['TRADICIONAL'],
    nome: 'Expresso Cremoso',
    descricao: 'Café expresso tradicional com espuma cremosa',
    preco: 9.9,
  },
  {
    imageUrl: cafeGelado,
    tipo: ['TRADICIONAL', 'GELADO'],
    nome: 'Expresso Gelado',
    descricao: 'Bebida preparada com café expresso e cubos de gelo',
    preco: 9.9,
  },
  {
    imageUrl: cafeComLeite,
    tipo: ['TRADICIONAL', 'COM LEITE'],
    nome: 'Café com leite',
    descricao: 'Meio a meio de expresso tradicional com leite vaporizado',
    preco: 9.9,
  },
  {
    imageUrl: latte,
    tipo: ['TRADICIONAL', 'COM LEITE'],
    nome: 'Latte',
    descricao:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    preco: 9.9,
  },
  {
    imageUrl: capuccino,
    tipo: ['TRADICIONAL', 'COM LEITE'],
    nome: 'Capuccino',
    descricao:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    preco: 9.9,
  },
  {
    imageUrl: macchiato,
    tipo: ['TRADICIONAL', 'COM LEITE'],
    nome: 'Macchiato',
    descricao: 'Café expresso misturado com um pouco de leite quente e espuma',
    preco: 9.9,
  },
  {
    imageUrl: mocaccino,
    tipo: ['TRADICIONAL', 'COM LEITE'],
    nome: 'Mocaccino',
    descricao: 'Café expresso com calda de chocolate, pouco leite e espuma',
    preco: 9.9,
  },
  {
    imageUrl: chocolateQuente,
    tipo: ['ESPECIAL', 'COM LEITE'],
    nome: 'Chocolate Quente',
    descricao: 'Bebida feita com chocolate dissolvido no leite quente e café',
    preco: 9.9,
  },
  {
    imageUrl: cubano,
    tipo: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    nome: 'Cubano',
    descricao:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    preco: 9.9,
  },
  {
    imageUrl: havaiano,
    tipo: ['ESPECIAL'],
    nome: 'Havaiano',
    descricao: 'Bebida adocicada preparada com café e leite de coco',
    preco: 9.9,
  },
  {
    imageUrl: arabe,
    tipo: ['ESPECIAL'],
    nome: 'Árabe',
    descricao: 'Bebida preparada com grãos de café árabe e especiarias',
    preco: 9.9,
  },
  {
    imageUrl: irlandes,
    tipo: ['ESPECIAL', 'ALCOÓLICO'],
    nome: 'Irlândes',
    descricao: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    preco: 9.9,
  },
]
