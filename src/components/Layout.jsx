import { Outlet } from 'react-router-dom'
import NavBar from './UI/NavBar/NavBar'

const Layout = () => {   

    return (
        <div className='App'>
            <header>
                <div className="logo">
                    DEFD
                </div>
                <NavBar/>
            </header>

            <main>
                <Outlet />
            </main>       
        </div>
    )
}

export default Layout