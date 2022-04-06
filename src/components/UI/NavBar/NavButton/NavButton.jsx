import { NavLink } from 'react-router-dom'

import classes from './NavButton.module.scss'

// TODO сделать один navButton для всех меню, передовать два класа default, active
const NavButton = ({children, ...props}) => {
    const { navButton, navButtonActive } = classes

    const rootClasses = ({isActive}) => isActive
        ? `${navButton} ${navButtonActive}`
        : navButton   
    

    return (
        <NavLink {...props} className={rootClasses}>
            {children}
        </NavLink>
    )
}

export default NavButton