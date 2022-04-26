// import react
import { useContext, useState } from 'react'

// import service
import DictionaryService from '../../../API/DictionaryService'

// import context
import { QuantityWordsContext } from '../../../context/QuantityWordsProvider'

// import user hooks
import { useFetching } from '../../../hooks/useFetching'
import ModalConfirm from '../ModalConfirm/ModalConfirm'

// import styles
import classes from './Word.module.scss'
// import trashIcon from '../../../svg/trash_bin_icon.svg'

const Word = ({english, russian}) => {
    const {wordBox, englishWord, russianWord, separatorWord, deleteBtn} = classes

    const [activeModalConfirm, setActiveModalConfirm] = useState(false)
    const [fetchDeleteWord, idDeleteWordLoading, deleteWordError] = useFetching(async (word) => {
        await DictionaryService.deleteWord(word)
    })
    const [quantityWors, setQuantityWords] = useContext(QuantityWordsContext)

    const deleteWord = () => {
        const word = {
            english,
            russian
        }
        fetchDeleteWord(word)
        setQuantityWords(quantityWors - 1)
        setActiveModalConfirm(false)
    }

    return (
        <>

            <li className={wordBox}>
                <span className={englishWord}>{english}</span>
                <span className={separatorWord}>-</span>
                <span className={russianWord}>{russian}</span>
                <button className={deleteBtn} onClick={() => setActiveModalConfirm(true)}>x</button>
            </li>

            <ModalConfirm
                activeModalConfirm={activeModalConfirm}
                setActiveModalConfirm={setActiveModalConfirm}
                messageConfirm='Удалить:'
                english={english}
                russian={russian}
                action={deleteWord}            
            />

        </>        
    )
}

export default Word