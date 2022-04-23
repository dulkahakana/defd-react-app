import { useState, useEffect } from 'react'

// import service
import DictionaryService from '../../API/DictionaryService'

// import user hooks
import { useFetching } from '../../hooks/useFetching'

// import styles
import classes from './QuantityWords.module.scss'

const QuantityWords = () => {
    const {quantityWordsContainer} = classes

    const [quantityWords, setQuantityWords] = useState(0)

    const [fetchQuantityWords, isQuantityWordsLoading, quantityWordsError] = useFetching(async () => {
        const response = await DictionaryService.getQuantityWords()
        setQuantityWords(response)
    })

    useEffect(() => {
        fetchQuantityWords()
        // console.log('fetchQuantityWords')
    }, [])


    return (
        <div className={quantityWordsContainer}>
            <p>кол-во слов:</p>
            <p>{quantityWords}</p>            
        </div>
    )
}

export default QuantityWords