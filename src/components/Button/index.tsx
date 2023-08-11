import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onCLick?: () => void
  children: string
  variant?: 'primary' | 'secondary'
}

const Button = ({
  type,
  title,
  to,
  children,
  onCLick,
  variant = 'primary'
}: Props) => {
  if (type === 'button') {
    ;<ButtonContainer variant={variant} type="button" title={title} onClick={onCLick}>
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
