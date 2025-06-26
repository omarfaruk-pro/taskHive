
import { Outlet } from 'react-router'
import Header from '../default/Header'
import Footer from '../default/Footer'
import ThemeToggle from '../component/ThemeToggle'

export default function MainLayout() {
  return (
    <>
        <Header></Header>
        <Outlet></Outlet>
        <ThemeToggle></ThemeToggle>
        <Footer></Footer>
    </>
  )
}
