import { ReactElement } from 'react'
import { Box, Divider } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SideBar } from '../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { ToastProvider } from '../contexts/toast/ToastProvider'



export const DashboardLayout = () => {
  return (
    <>
        <Box as="div" height="100vh" display="flex">
          <SideBar />
          <Box as="div" className='app-wrapper' overflowX="hidden" width="100%">
            <Header />
            <Box as='main'>
              <Outlet />
            </Box>
            <Footer />
          </Box>
        </Box>
    </>
  )
}
