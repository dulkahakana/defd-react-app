// import react
import { useState, useMemo } from 'react'
import DictionaryService from '../../API/DictionaryService'

// import user hooks
import { useFetching } from '../../hooks/useFetching'
import { useInput } from '../../hooks/useInput'

// import styles
import classes from './FormAddWord.module.scss'

const FormAddWord = () => {
    const {formAddWord} = classes
    const [validWord, setValidWord] = useState(false)
    const [englishWordProps, resetEnglishWord] = useInput('')
    const [russianWordProps, resetRussianWord] = useInput('')
    // console.log(word);
    const [fetchAddWord, isAddWordLoading, addWordError] = useFetching(async (newWord) => {
        await DictionaryService.postWord(newWord)
    })

    const addNewWord = (e) => {
        e.preventDefault()

        const newWord = {
            english: englishWordProps.value.toLowerCase(),
            russian: russianWordProps.value.toLowerCase()
        }        

        console.log(newWord)
        
        // fetchAddWord(newWord)

        resetEnglishWord()
        resetRussianWord()
    }

    useMemo(() => {
        console.log('useMemo')
        if (englishWordProps.value.length > 1 && russianWordProps.value.length > 1) {
            setValidWord(true)
        } else {
            setValidWord(false)
        }
    }, [englishWordProps.value, russianWordProps.value])

    return (
        <form className={formAddWord}>
                <input                    
                    {...englishWordProps}
                    type='text'
                    placeholder='новое слово'
                />
                <input                    
                    {...russianWordProps}
                    type='text'
                    placeholder='перевод'
                />
                <button disabled={!validWord} onClick={addNewWord}>добавить</button>
        </form>
    )
}

export default FormAddWord