// import styles
import classes from './Logo.module.scss'


const Logo = ({children}) => {
    return (
        <h1 className={classes.logo}>{children}</h1>
    )
}

export default Logo