import { Subheader } from '../../../common/components/modules/subheader/Subheader'
import { BookForm } from '../components/BookForm'

export const AddBookPage = ({title}: any) => {
  return (
    <>
      <Subheader title={title} />
      <BookForm/>
    </>
  )
}
