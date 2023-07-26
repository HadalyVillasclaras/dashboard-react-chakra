import { Divider } from '@chakra-ui/react'
import { useRouteError } from 'react-router-dom';
import { Subheader } from '../components/header/Subheader';

export const NotFoundPage = () => {
  const error: any = useRouteError();

  return (
    <>
      <Subheader title={error.status}/>
      <Divider my='1rem' />
      <h4>Lo sentimos, no hemos encontrado la página que buscas.</h4>
    </>
  )
}
