// import styles
import classes from './HomePage.module.scss'


const HomePage = () => {
    const {homePage, redText} = classes

    return (
        <div className={homePage}>
            <h2>Главная страница приложения D<span className={redText}>EFD</span></h2>
            <p>Приложения для составления своего англо-русского словаря.</p>
            <p>Нажмите <span className={redText}>словарь</span>, чтобы увидеть его содержимое или добавьте новое слово <span className={redText}>добавить слово.</span></p>
        </div>
    )
}

export default HomePage