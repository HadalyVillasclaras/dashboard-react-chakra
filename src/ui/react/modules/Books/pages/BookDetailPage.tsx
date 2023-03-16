import React from 'react'
import { Subheader } from '../../../common/components/modules/subheader/Subheader'
import { BookDetails } from '../components/BookDetails'

export const BookDetailPage = () => {
  return (
    <>
    <Subheader title='Book details' />
    <BookDetails/>
    </>
  )
}
