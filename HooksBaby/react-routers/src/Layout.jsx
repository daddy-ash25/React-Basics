import { Outlet } from 'react-router'
import Header from './components/headers/Header'
import Footer from './components/footers/footer'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
