// import react
import { Outlet } from 'react-router-dom'

// import components
import AppHeader from './AppHeader/AppHeader'

const Layout = () => {   
    

    return (
        <div className='App'>

            <AppHeader />

            <main className='main-page'>
                <Outlet />
            </main>
            
        </div>
    )
}

export default Layout