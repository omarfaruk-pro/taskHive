
import { Outlet } from 'react-router'
import Header from '../default/Header'
import Footer from '../default/Footer'

export default function MainLayout() {
  return (
    <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}
