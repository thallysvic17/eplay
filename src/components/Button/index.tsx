import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onCLick?: () => void
  children: string
}

const Button = ({ type, title, to, children, onCLick }: Props) => {
  if (type === 'button') {
    ;<ButtonContainer type="button" title={title} onClick={onCLick}>
      {children}
    </ButtonContainer>
  }

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
