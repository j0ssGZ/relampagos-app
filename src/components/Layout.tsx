import {Outlet} from "react-router-dom"
import Navbar from "./NavBar.tsx"

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default Layout