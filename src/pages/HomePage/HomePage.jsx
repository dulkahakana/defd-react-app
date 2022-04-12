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
            <p>Кол-во слов в словаре: {quantityWords}</p>
            <p>Приложения для составления своего англо-русского словаря.</p>
            <p>Нажмите <span className={redText}>словарь</span>, чтобы увидеть его содержимое или добавьте новое слово <span className={redText}>добавить слово.</span></p>
        </div>
    )
}

export default HomePage