// import react


// import styles
import classes from './HomePage.module.scss'


const HomePage = () => {
    const {homePage, redText} = classes

    

    return (
        <div className={homePage}>
            <h2>Главная страница приложения D<span className={redText}>EFD</span></h2>
        </div>
    )
}

export default HomePage