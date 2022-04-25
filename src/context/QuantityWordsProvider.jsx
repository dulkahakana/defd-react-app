import { createContext, useState } from "react"


export const QuantityWordsContext = createContext()

const QuantityWordsProvider = ({ children }) => {
    const [quantityWords, setQuantityWords] = useState(0)

    const incrementWords = () => setQuantityWords(quantityWords + 1)

    const decrementWords = () => setQuantityWords(quantityWords - 1)

    return (
        <QuantityWordsContext.Provider value={[quantityWords, setQuantityWords,incrementWords, decrementWords, setQuantityWords]}>
            {children}
        </QuantityWordsContext.Provider>
    )
}

export default QuantityWordsProvider