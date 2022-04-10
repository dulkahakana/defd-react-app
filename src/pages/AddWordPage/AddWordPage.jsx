// import react
import { useState, useMemo } from 'react'
import DictionaryService from '../../API/DictionaryService'

// import user hooks
import { useFetching } from '../../hooks/useFetching'

// import styles
import classes from './AddWordPage.module.scss'


const AddWordPage = () => {
    const {addWordPage} = classes

    const [word, setWord] = useState({english: '', russian: ''})
    const [validWord, setValidWord] = useState(false)
    // console.log(word);
    const [fetchAddWord, isAddWordLoading, addWordError] = useFetching(async (newWord) => {
        await DictionaryService.postWord(newWord)
    })

    const addNewWord = (e) => {
        e.preventDefault()

        const newWord = {
            english: word.english.toLowerCase(),
            russian: word.russian.toLowerCase()
        }
        // console.log(newWord)

        fetchAddWord(newWord)
        setWord({english: '', russian: ''})
    }

    useMemo(() => {
        if (word.english.length > 1 && word.russian.length > 1) {
            setValidWord(true)
        } else {
            setValidWord(false)
        }
    }, [word])

    

    return (
        <div className={addWordPage}>
            <form>
                <input
                    value={word.english}
                    onChange={e => setWord({
                        ...word,
                        english: e.target.value
                    })}
                    type='text'
                    placeholder='новое слово'
                />
                <input
                    value={word.russian}
                    onChange={e => setWord({
                        ...word,
                        russian: e.target.value
                    })}
                    type='text'
                    placeholder='перевод'
                />
                <button disabled={!validWord} onClick={addNewWord}>добавить</button>
            </form>
        </div>
    )
}

export default AddWordPage