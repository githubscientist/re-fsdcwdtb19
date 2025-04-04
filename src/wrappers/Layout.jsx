import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const Layout = () => {
    return (
        <div>
            <NavBar />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;