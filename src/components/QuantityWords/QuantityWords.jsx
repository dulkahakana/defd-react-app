import { useContext, useState, useEffect } from 'react'

// import service
import DictionaryService from '../../API/DictionaryService'
import { QuantityWordsContext } from '../../context/QuantityWordsProvider'

// import user hooks
import { useFetching } from '../../hooks/useFetching'

// import styles
import classes from './QuantityWords.module.scss'

const QuantityWords = () => {
    const {quantityWordsContainer} = classes

    const [quantityWords, setQuantityWords] = useContext(QuantityWordsContext)

    const [fetchQuantityWords, isQuantityWordsLoading, quantityWordsError] = useFetching(async () => {
        const response = await DictionaryService.getQuantityWords()
        setQuantityWords(response)
    })

    useEffect(() => {
        fetchQuantityWords()
    }, [])


    return (
        <div className={quantityWordsContainer}>
            <p>кол-во слов:</p>
            <p>{quantityWords}</p>        
        </div>
    )
}

export default QuantityWords