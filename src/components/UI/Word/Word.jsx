// import styles
import classes from './Word.module.scss'
// import trashIcon from '../../../svg/trash_bin_icon.svg'

const Word = ({english, russian, setActiveModalConfirm, setTrashWord}) => {
    const {wordBox, englishWord, russianWord, separatorWord, deleteBtn} = classes

    const setModalDeleteWord = () => {
        setTrashWord({english, russian})
        setActiveModalConfirm(true)
    }

    return (
        <>
            <li className={wordBox}>
                <span className={englishWord}>{english}</span>
                <span className={separatorWord}>-</span>
                <span className={russianWord}>{russian}</span>
                <button className={deleteBtn} onClick={setModalDeleteWord}>x</button>
            </li>
        </>        
    )
}

export default Word