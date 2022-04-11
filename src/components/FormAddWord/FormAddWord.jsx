// import react
import { useState, useMemo } from 'react'
import DictionaryService from '../../API/DictionaryService'

// import user hooks
import { useFetching } from '../../hooks/useFetching'
import { useInput } from '../../hooks/useInput'

const FormAddWord = () => {
    const [word, setWord] = useState({english: '', russian: ''})
    const [englishWord, setEnglishWord] = useState('')
    const [russianWord, setRussianWord] = useState('')
    const [validWord, setValidWord] = useState(false)
    const [englishWordProps, resetEnglishWord] = useInput(englishWord)
    const [russianWordProps, resetRussianWord] = useInput(russianWord)
    // console.log(word);
    const [fetchAddWord, isAddWordLoading, addWordError] = useFetching(async (newWord) => {
        await DictionaryService.postWord(newWord)
    })

    // const addNewWord = (e) => {
    //     e.preventDefault()

    //     const newWord = {
    //         english: word.english.toLowerCase(),
    //         russian: word.russian.toLowerCase()
    //     }        

    //     console.log(newWord)

    //     // fetchAddWord(newWord)
    //     setWord({english: '', russian: ''})
    // }

    const addNewWord = (e) => {
        e.preventDefault()

        const newWord = {
            english: englishWordProps.value.toLowerCase(),
            russian: russianWordProps.value.toLowerCase()
        }        

        console.log(newWord)

        resetEnglishWord()
        resetRussianWord()
    }

    // useMemo(() => {
    //     if (word.english.length > 1 && word.russian.length > 1) {
    //         setValidWord(true)
    //     } else {
    //         setValidWord(false)
    //     }
    // }, [word])

    return (
        <form>
                <input
                    // value={word.english}
                    // onChange={e => setWord({
                    //     ...word,
                    //     english: e.target.value
                    // })}
                    {...englishWordProps}
                    type='text'
                    placeholder='новое слово'
                />
                <input
                    // value={word.russian}
                    // onChange={e => setWord({
                    //     ...word,
                    //     russian: e.target.value
                    // })}
                    {...russianWordProps}
                    type='text'
                    placeholder='перевод'
                />
                <button disabled={false} onClick={addNewWord}>добавить</button>
        </form>
    )
}

export default FormAddWord