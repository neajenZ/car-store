import { Outlet } from "react-router-dom"
import { Header } from "../../widjets/Header"
import { Global } from "@emotion/react"
import { GLOBAL_STYLES } from "../../styles/global.styles"





const Layout = () => {

    return (
        <>
            <Header />
            <Outlet />
            <Global styles={GLOBAL_STYLES} />
        </>
    )
}

export default Layout