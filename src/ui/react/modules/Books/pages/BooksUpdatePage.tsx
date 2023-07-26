import { Subheader } from '../../../shared/components/modules/subheader/Subheader'
import { BooksUpdateContainer } from '../components/containers/BooksUpdateContainer'

export const BooksUpdatePage = () => {
  return (
    <>
      <Subheader title={'edit'} />
      <BooksUpdateContainer/>
    </>
  )
}
