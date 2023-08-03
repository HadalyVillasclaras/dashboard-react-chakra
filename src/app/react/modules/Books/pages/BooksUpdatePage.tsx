import { Subheader } from '../../../shared/components/header/Subheader'
import { BooksUpdateContainer } from '../components/containers/BooksUpdateContainer'

export const BooksUpdatePage = () => {
  return (
    <>
      <Subheader title={'edit'} />
      <BooksUpdateContainer/>
    </>
  )
}
