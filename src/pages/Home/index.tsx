import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
import Game from '../../models/game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Acão',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4 : Remake',
    system: 'ps5',
    infos: ['10%', 'R$ 150,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Acão',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4 : Remake',
    system: 'windows',
    infos: ['10%', 'R$ 190,00'],
    image: resident
  },
  {
    id: 3,
    category: 'Acão',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4 : Remake',
    system: 'macOS',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 4,
    category: 'Acão',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4 : Remake',
    system: 'ps4',
    infos: ['10%', 'R$ 150,00'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Rpg',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo 4',
    system: 'macOS',
    infos: ['17/07'],
    image: diablo
  },
  {
    id: 6,
    category: 'aventura',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™..',
    title: 'zelda',
    system: 'macOS',
    infos: ['17/07'],
    image: zelda
  },
  {
    id: 7,
    category: 'aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    title: 'Diablo 4',
    system: 'macOS',
    infos: ['17/07'],
    image: starWars
  },
  {
    id: 8,
    category: 'aventura',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™..',
    title: 'Zelda',
    system: 'macOS',
    infos: ['17/07'],
    image: zelda
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductList games={promocoes} title="Promocoes" background="grey" />
    <ProductList games={emBreve} title="Em Breve!" background="black" />
  </>
)

export default Home
