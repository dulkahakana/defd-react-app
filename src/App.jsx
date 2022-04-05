

// import react-api
import { useState, useEffect } from 'react'

// import user-hooks
import { useFetching } from './hooks/useFetching'

// import styles
import './styles/defd-normilize.scss'
import './styles/google-font.scss'
import './styles/App.scss'
import DictionaryService from './API/DictionaryService'

const App = () => {
    // словарь
    const [dictionary, setDictionary] = useState('')
    // запрос словаря
    const [fetchDictionary] = useFetching(async () => {
        const response = await DictionaryService.getAll()
        // console.log(response);
        setDictionary({...response})
    })

    useEffect(() => {
        fetchDictionary()
    }, [])
    
    // TODO разобраться с .eslintrc.json
    
    return (
        <div className="App">
            <header>
                <div className="logo">
                    DEFD
                </div>
            </header>
            <main>
                <div>Список:</div>
                {Object.keys(dictionary).map((section, index) => 
                    <div key={index}>section: {section}</div>
                )}
            </main>
        </div>
    )
}

export default App
