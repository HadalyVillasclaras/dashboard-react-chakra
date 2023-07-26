import React from 'react'
import { BooksUpdateCreateForm } from '../BooksUpdateCreateForm'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CenteredSpinner } from '../../../../shared/components/loaders/CenteredSpinner';
import { Section } from '../../../../shared/components/sections/Section';
import { useGetBookById } from '../../hooks/useGetBookById';

export const BooksCreateContainer = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  return (
    <Section>
      {
        !isLoading
        ? <BooksUpdateCreateForm
            isEdit={false}
          />
        : <CenteredSpinner/>
      }
    </Section>
  )
}