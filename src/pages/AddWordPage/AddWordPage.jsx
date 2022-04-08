// import react
import { useState } from 'react'
import DictionaryService from '../../API/DictionaryService'

// import user hooks
import { useFetching } from '../../hooks/useFetching'

// import styles
import classes from './AddWordPage.module.scss'


const AddWordPage = () => {
    const {addWordPage} = classes

    const [word, setWord] = useState({english: '', russian: ''})
    // console.log(word);
    const [fetchAddWord, isAddWordLoading, addWordError] = useFetching(async (newWord) => {
        await DictionaryService.postWord(newWord)
    })

    const addNewWord = (e) => {
        e.preventDefault()

        const newWord = {...word}
        console.log(newWord);

        fetchAddWord(newWord)
    }

    return (
        <div className={addWordPage}>
            <form>
                <input
                    value={word.english}
                    onChange={e => setWord({...word, english: e.target.value})}
                    type='text'
                    placeholder='новое слово'
                />
                <input
                    value={word.russian}
                    onChange={e => setWord({...word, russian: e.target.value})}
                    type='text'
                    placeholder='перевод'
                />
                <button onClick={addNewWord}>добавить</button>
            </form>
        </div>
    )
}

export default AddWordPage