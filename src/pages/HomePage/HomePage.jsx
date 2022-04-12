// import react
import { useState, useEffect } from 'react'

// import service
import DictionaryService from '../../API/DictionaryService'

// import user hooks
import { useFetching } from '../../hooks/useFetching'

// import styles
import classes from './HomePage.module.scss'


const HomePage = () => {
    const {homePage, redText} = classes

    const [quantityWords, setQuantityWords] = useState(0)

    const [fetchQuantityWords, isQuantityWordsLoading, quantityWordsError] = useFetching(async (newWord) => {
        const response = await DictionaryService.getQuantityWords()
        setQuantityWords(response)
    })

    useEffect(() => {
        fetchQuantityWords()
    }, [])

    return (
        <div className={homePage}>
            <h2>Главная страница приложения D<span className={redText}>EFD</span></h2>
            <p>Кличество слов в словаре: <span className={redText}>{quantityWords}</span></p>
        </div>
    )
}

export default HomePage