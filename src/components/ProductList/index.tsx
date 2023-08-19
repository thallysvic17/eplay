import Game from '../../models/game'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'grey' | 'black'
  games: Game[]
}

const ProductList = ({ title, background, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            system={game.system}
            description={game.description}
            image={game.image}
            infos={game.infos}
            title={game.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList