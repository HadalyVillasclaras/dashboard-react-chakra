import { Subheader } from '../../../shared/components/header/Subheader'
import { BooksCreateContainer } from '../components/containers/BooksCreateContainer'

export const BooksCreatePage = () => {
  return (
    <>
      <Subheader title={'create'} />
      <BooksCreateContainer/>
    </>
  )
}
