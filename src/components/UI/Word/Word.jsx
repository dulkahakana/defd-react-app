import classes from './Word.module.scss'

const Word = ({english, russian}) => {
    const {wordBox, englishWord, russianWord, separatorWord} = classes

    return (
        <li className={wordBox}>
            <span className={englishWord}>{english}</span>
            <span className={separatorWord}>-</span>
            <span className={russianWord}>{russian}</span>
        </li>
    )
}

export default Word