import LetterButton from './LetterButton/LetterButton'
import classes from './LetterNavList.module.scss'

const LetterNavList = ({ sectionsNames }) => {
    const { letterNavList } = classes

    return (
        <div className={letterNavList}>
            {sectionsNames.map((sectionsName, index) =>
                <LetterButton
                    key={index}
                    to={sectionsName}
                >
                    {sectionsName}
                </LetterButton>
            )}
        </div>
    )
}

export default LetterNavList