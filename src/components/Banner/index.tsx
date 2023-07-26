import { Imagem, Precos, Titulo } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big"> Destaque do dia </Tag>
      <div>
        <Titulo>Marvel`s Spider-Man: Miles Morales PS4 & Ps5</Titulo>
        <Precos>
          de <span>R$ 250,00</span> <br />
          por apneas R$ 99,00
        </Precos>
      </div>
      <Button
        type="link"
        to="/produto"
        title="Clique aqui para aproveitar essa oferta"
      >
        Aproveitar
      </Button>
    </div>
  </Imagem>
)

export default Banner
