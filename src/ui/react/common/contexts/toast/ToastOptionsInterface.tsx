export interface ToastOptionsInterface{
  title: string,
  description: string,
  status: 'success'| 'error'| 'warning'| 'info',
  isClosable: boolean,
  duration: number,
  containerStyle?: {}, //any css syntax style
  position: 'top'|'top-right'|'top-left'|'bottom'|'bottom-right'|'bottom-left',
  variants: 'solid' | 'subtle' | 'left-accent' | 'top-accent',
  render?: any
}