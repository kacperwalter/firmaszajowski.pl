type SwitchableMenuItem = {
  name: string
  heading: string
  caption: string
  phone: string
  email: string
}

export type SwitchableMenuProps = {
  content: {
    heading: string
    items: SwitchableMenuItem[]
  }
}