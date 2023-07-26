import { Container, SectionTittle } from "./styled"
import * as S from './styled'

const Footer = () => (
  <S.Container>
    <div className="container">
        <S.FooterSection>
          <S.SectionTittle>Categorias</S.SectionTittle>
        </S.FooterSection>
        <S.FooterSection>
          <S.SectionTittle>Acesso rapido</S.SectionTittle>
        </S.FooterSection>
        <S.FooterSection>
          <p>
            2023 - &copy; todos os direitos reservados
          </p>
        </S.FooterSection>
    </div>
  </S.Container>
)

export default Footer
