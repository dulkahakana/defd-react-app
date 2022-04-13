import QuantityWords from "../QuantityWords/QuantityWords"
import Logo from "../UI/Logo/Logo"
import NavBar from "../UI/NavBar/NavBar"
// import LetterNavList from '../UI/LetterNavList/LetterNavList'


const AppHeader = () => {
    return (
        <header>
            <Logo>DEFD</Logo>
            <QuantityWords/>
            <NavBar />
            {/* <LetterNavList /> */}
        </header>
    )
}

export default AppHeader