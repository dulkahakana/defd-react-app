// import react
import { useState, useMemo, useContext } from 'react'

// import service
import DictionaryService from '../../API/DictionaryService'

// import context
import { QuantityWordsContext } from '../../context/QuantityWordsProvider'

// import user hooks
import { useFetching } from '../../hooks/useFetching'
import { useInput } from '../../hooks/useInput'

// import components
import ModalConfirm from '../UI/ModalConfirm/ModalConfirm'

// import styles
import classes from './FormAddWord.module.scss'

const FormAddWord = () => {
    const {formAddWord, okBtn} = classes

    const [validWord, setValidWord] = useState(false)
    const [englishWordProps, resetEnglishWord] = useInput('')
    const [russianWordProps, resetRussianWord] = useInput('')
    const [activeModalConfirm, setActiveModalConfirm] = useState(false)
    const [fetchAddWord, isAddWordLoading, addWordError] = useFetching(async (newWord) => {
        await DictionaryService.postWord(newWord)
    })
    const [quantityWords, setQuantityWords] = useContext(QuantityWordsContext)

    const submit = (e) => {
        e.preventDefault()
        setActiveModalConfirm(true)
    }

    const addNewWord = () => {
        const newWord = {
            english: englishWordProps.value.toLowerCase(),
            russian: russianWordProps.value.toLowerCase()
        }

        // console.log(newWord)

        fetchAddWord(newWord)
        setQuantityWords(quantityWords + 1)
        resetEnglishWord()
        resetRussianWord()
        setActiveModalConfirm(false)
    }

    const wordLengthValid = (wordEng, wordRus, validLength) => {
        if (wordEng.length > validLength && wordRus.length > validLength) {
            setValidWord(true)
        } else {
            setValidWord(false)
        }
    }    

    useMemo(() => {
        wordLengthValid(englishWordProps.value, russianWordProps.value, 1)
    }, [englishWordProps.value, russianWordProps.value])

    return (
        <div className={formAddWord}>

            <form>
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
                    <button className={okBtn} disabled={!validWord} onClick={submit}>добавить</button>
            </form>

            <ModalConfirm
                activeModalConfirm={activeModalConfirm}
                setActiveModalConfirm={setActiveModalConfirm}
                messageConfirm='Добавить:'
                english={englishWordProps.value.toLowerCase()}
                russian={russianWordProps.value.toLowerCase()}
                action={addNewWord}
            />

        </div>
    )
}

export default FormAddWord