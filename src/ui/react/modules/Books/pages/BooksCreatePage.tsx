import { Subheader } from '../../../shared/components/modules/subheader/Subheader'
import { BooksCreateContainer } from '../components/containers/BooksCreateContainer'

export const BooksCreatePage = () => {
  return (
    <>
      <Subheader title={'create'} />
      <BooksCreateContainer/>
    </>
  )
}
