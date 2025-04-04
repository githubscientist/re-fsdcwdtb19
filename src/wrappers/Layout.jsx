import { Outlet } from "react-router";

const Layout = () => {
    return (
        <div>
            <nav>
                <li><a href="/">Home</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/login">Login</a></li>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;