// import react


// import styles
import { useCallback, useMemo, useState } from 'react'
import classes from './HomePage.module.scss'


const HomePage = () => {
    const {homePage, redText, numberBox} = classes
    const [number, setNumber] = useState([])

    const getArr = (length) => {
        const arr = []
        for (let i = 0; i < length; i++) {
            arr.push(i + 1)
        }
        return arr
    } 

    useMemo(() => {
        setNumber(getArr(10))
    }, [])
    console.log(number);

    return (
        <div className={homePage}>
            <h2>Home page</h2>
            <div className={numberBox}>
                {number.map((num, key) => 
                    <p key={key}>{num}</p>
                )}

            </div>
        </div>
    )
}

export default HomePage