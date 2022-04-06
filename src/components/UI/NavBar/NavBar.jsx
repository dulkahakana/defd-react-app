import NavButton from './NavButton/NavButton'

import classes from './NavBar.module.scss'

const NavBar = () => {
    const { navBar } = classes

    return (
        <div className={navBar}>
            <NavButton to='/'>главная</NavButton>
            <NavButton to='dictionary'>словарь</NavButton>
        </div>
    )
}

export default NavBar