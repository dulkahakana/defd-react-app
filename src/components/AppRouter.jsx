import { Route, Routes } from 'react-router-dom'

// import layout
import Layout from './Layout'

// import pages
import DictionaryPage from '../pages/DictionaryPage'


const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<DictionaryPage />} />
            </Route>
        </Routes>
    )
}

export default AppRouter