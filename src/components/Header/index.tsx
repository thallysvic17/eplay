import { HeaderBar } from './styles'
import logo from '../../assets/images/logo.svg';

const Header = () => (

<HeaderBar>
  <img src={logo} alt="EPLAY" />
  <nav>
    <ul>
      <li>
        <a href='#'>Categoria</a>
      </li>
      <li>
        <a href='#'>Novidades</a>
      </li>
      <li>
        <a href='#'>Promocoes</a>
      </li>
    </ul>
  </nav>
</HeaderBar>

)

export default Header
