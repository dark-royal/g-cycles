
import {Outlet} from 'react-router-dom'
import Footer from '../Footer'
import Navbar from '../Navbar'
const Layout = ()=>{

    return(

        <>
        <Navbar/>
        <Footer/>
        <Outlet/>
        </>

    )
}
export default Layout