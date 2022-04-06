import { NavLink } from 'react-router-dom'

import classes from './LetterButton.module.scss'

// TODO сделать один navButton для всех меню, передовать два класа default, active
const LetterButton = ({children, ...props}) => {
    const { letterButton, letterButtonActive } = classes

    const rootClasses = ({isActive}) => isActive
        ? `${letterButton} ${letterButtonActive}`
        : letterButton   
    

    return (
        <NavLink {...props} className={rootClasses}>
            {children}
        </NavLink>
    )
}

export default LetterButton