// import styles
import classes from './Word.module.scss'
// import trashIcon from '../../../svg/trash_bin_icon.svg'


import DictionaryService from '../../../API/DictionaryService'
import { useFetching } from '../../../hooks/useFetching'

const Word = ({english, russian}) => {
    const {wordBox, englishWord, russianWord, separatorWord, deleteBtn} = classes

    const [fetchDeleteWord, idDeleteWordLoading, deleteWordError] = useFetching(async (word) => {
        await DictionaryService.deleteWord(word)
    })

    const deleteWord = (word) => {
        console.log(word)
        // fetchDeleteWord(word)
        // TODO не работает
    }



    return (
        <li className={wordBox}>
            <span className={englishWord}>{english}</span>
            <span className={separatorWord}>-</span>
            <span className={russianWord}>{russian}</span>
            <button className={deleteBtn} onClick={() => deleteWord(english) }>x</button>
        </li>
    )
}

export default Word