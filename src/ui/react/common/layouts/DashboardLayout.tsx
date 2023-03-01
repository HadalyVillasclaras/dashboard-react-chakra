import { ReactElement } from 'react'
import { Box, Divider } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SideBar } from '../components/Sidebar'

interface Props {
  children: ReactElement | ReactElement[]
}

export const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <Header/>
      <Divider/>
      <Box as='section' display='flex'>
        <SideBar/>
        <Box as='main' p='3rem' overflow='hidden' minHeight='90vh' width='100%'>
            {children}
        </Box>
      </Box>
      <Divider/>
      <Footer/>
    </>
  )
}
