import { createContext, useState } from "react"


export const QuantityWordsContext = createContext()

const QuantityWordsProvider = ({ children }) => {
    const [quantityWords, setQuantityWords] = useState(0)

    return (
        <QuantityWordsContext.Provider value={[quantityWords, setQuantityWords]}>
            {children}
        </QuantityWordsContext.Provider>
    )
}

export default QuantityWordsProvider