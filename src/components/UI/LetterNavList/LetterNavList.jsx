import LetterButton from './LetterButton/LetterButton'
import classes from './LetterNavList.module.scss'

const LetterNavList = ({ sectionsNames }) => {
    const { letterNavList } = classes

    return (
        <div className={letterNavList}>
            {sectionsNames.map((sectionName) =>
                <LetterButton
                    key={sectionName}
                    to={sectionName}
                >
                    {sectionName}
                </LetterButton>
            )}
        </div>
    )
}

export default LetterNavList