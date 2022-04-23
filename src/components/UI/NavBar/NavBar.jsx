// import components
import NavButton from './NavButton/NavButton'

// import styles
import classes from './NavBar.module.scss'

const NavBar = () => {
    const { navBar } = classes
    
    return (
        <div className={navBar}>
            <NavButton to='home'>home</NavButton>
            <NavButton to='dictionary'>словарь</NavButton>
            <NavButton to='dictionary/addword'>добавить слово</NavButton>            
        </div>
    )
}

export default NavBar