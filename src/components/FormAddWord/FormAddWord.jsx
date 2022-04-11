// import react
import { useState, useMemo } from 'react'
import DictionaryService from '../../API/DictionaryService'

// import user hooks
import { useFetching } from '../../hooks/useFetching'
import { useInput } from '../../hooks/useInput'

// import components
import Modal from '../UI/Modal/Modal'

// import styles
import classes from './FormAddWord.module.scss'

const FormAddWord = () => {
    const {formAddWord} = classes
    const [validWord, setValidWord] = useState(false)
    const [englishWordProps, resetEnglishWord] = useInput('')
    const [russianWordProps, resetRussianWord] = useInput('')
    const [activeModalConfirm, setActiveModalConfirm] = useState(false)
    const [fetchAddWord, isAddWordLoading, addWordError] = useFetching(async (newWord) => {
        await DictionaryService.postWord(newWord)
    })

    const submit = (e) => {
        e.preventDefault()
        setActiveModalConfirm(true)
    }

    const addNewWord = () => {
        const newWord = {
            english: englishWordProps.value.toLowerCase(),
            russian: russianWordProps.value.toLowerCase()
        }

        console.log(newWord)

        // fetchAddWord(newWord)

        resetEnglishWord()
        resetRussianWord()
        setActiveModalConfirm(false)
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
                    <button disabled={!validWord} onClick={submit}>добавить</button>
            </form>
            <Modal
                active={activeModalConfirm}
                setActive={setActiveModalConfirm}
            >   

                <button onClick={() => setActiveModalConfirm(false)}>отмена</button>
                <button onClick={addNewWord}>подтвердить</button>
            </Modal>
        </div>
    )
}

export default FormAddWord