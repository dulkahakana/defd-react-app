import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <header>
                <div className="logo">
                    DEFD
                </div>
            </header>

            <main>
                <Outlet />
            </main>       
        </>
    )
}

export default Layout