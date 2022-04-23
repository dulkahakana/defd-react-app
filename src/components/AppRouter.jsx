// import react
import { Route, Routes, Navigate } from 'react-router-dom'

// import layout
import Layout from './Layout'

// import pages
// import HomePage from '../pages/HomePage/HomePage'
import DictionaryPage from '../pages/DictionaryPage'
import SectionPage from '../pages/SectionPage/SectionPage'
import AddWordPage from '../pages/AddWordPage/AddWordPage'


const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<Navigate to='/dictionary' />} />
                
                {/* <Route index element={<HomePage />} /> */}
                {/* <Route path='home' element={<HomePage />} /> */}
                <Route path='dictionary' element={<DictionaryPage />} >
                    <Route index element={<Navigate to='/dictionary/a' /> } />
                    <Route path=':id' element={<SectionPage />} />
                    <Route path='addword' element={<AddWordPage />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default AppRouter