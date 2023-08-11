import banner from '../../assets/images/fundo_hogwarts.png'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

const Hero = () => {
  return (
    <Banner style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <div>
          <Tag> Rpg </Tag>
          <Tag> Pc </Tag>
        </div>

        <Infos>
          <h2>Hogwarts Legacy</h2>
          <p>
            <span>de R$ 250,00 </span>
            por R$ 199,00
          </p>
          <Button
            variant="primary"
            type="button"
            title="Clique aqui para adicionar o jogo ao carrinho"
          >
            adicionar ao carrinho
          </Button>
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
