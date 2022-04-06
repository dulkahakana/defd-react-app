import classes from './LetterButton.module.scss'

const LetterButton = ({children, ...props}) => {
    let rootClasses = [classes.letterBtn]
    
    if (props.className) {
        const propsClasses = props.className.split(', ')
        rootClasses = [...rootClasses, ...propsClasses]
    }

    return (
        <button {...props} className={rootClasses.join(' ')}>
            {children}
        </button>
    )
}

export default LetterButton