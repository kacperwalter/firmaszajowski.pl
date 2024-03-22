export type ActionButtonProps = {
  variant?: 'primary' | 'secondary'
  as?: 'link' | 'button'
  href?: string
  onClick?: () => void
}