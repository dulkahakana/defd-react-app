// import react
import { Outlet } from 'react-router-dom'

// import components
import Logo from './UI/Logo/Logo'
import NavBar from './UI/NavBar/NavBar'

const Layout = () => {   
    

    return (
        <div className='App'>

            <header>
                <Logo>DEFD</Logo>                
                <NavBar/>
            </header>

            <main className='main-page'>
                <Outlet />
            </main>
                            
        </div>
    )
}

export default Layout