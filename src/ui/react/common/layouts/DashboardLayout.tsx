import { ReactElement } from 'react'
import { Box, Divider } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SideBar } from '../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'



export const DashboardLayout = () => {
  return (
    <>
 <Box as="section" height="100vh" display="flex">
          <SideBar />
          <Box as="main" overflowX="hidden" width="100%">
            <Header />
            <Outlet />
            <Footer />
          </Box>
        </Box>
    </>
  )
}
