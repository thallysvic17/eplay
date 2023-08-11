import { Link } from 'react-router-dom'

import { HeaderBar, LinkCart, LinkItem, Links } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="EPLAY" />
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/categories">Novidades</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/categories">Promocoes</Link>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - produto(s)
      <img src={carrinho} alt="carrinho de compras " />
    </LinkCart>
  </HeaderBar>
)

export default Header
