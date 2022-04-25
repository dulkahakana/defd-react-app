import AppRouter from './components/AppRouter'
import QuantityWordsProvider from './context/QuantityWordsProvider'

// import styles
import './styles/defd-normilize.scss'
import './styles/google-font.scss'
import './styles/App.scss'



const App = () => {   
    
    return (
        <QuantityWordsProvider>
            <AppRouter />
        </QuantityWordsProvider>
    )
}

export default App
