import { Route, Routes } from 'react-router-dom'

// import layout
import Layout from './Layout'

// import pages
import HomePage from '../pages/HomePage'
import DictionaryPage from '../pages/DictionaryPage'
import SectionPage from '../pages/SectionPage'


const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<HomePage />} />
                <Route path='home' element={<HomePage />} />
                <Route path='dictionary' element={<DictionaryPage />} >
                    <Route index element={<SectionPage /> } />
                    <Route path=':id' element={<SectionPage />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default AppRouter