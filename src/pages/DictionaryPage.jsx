// import react-api
import { useState, useEffect } from 'react'

// import user-hooks
import { useFetching } from '../hooks/useFetching'

// import services
import DictionaryService from '../API/DictionaryService'



// TODO разобраться с .eslintrc.json

    const DictionaryPage = () => {
        // словарь
    const [sectionsNames, setSectionsNames] = useState([])
    // запрос словаря
    const [fetchSectionsNames, isSectionsNamesLoading, sectionsNameError] = useFetching(async () => {
        const response = await DictionaryService.getSectionsNameList()
        setSectionsNames([...response])
    })

    useEffect(() => {
        fetchSectionsNames()
    }, [])

    return (
        <div>
            {sectionsNameError &&
                <div className="error-message">Произошла ошибка: {sectionsNameError}</div>
            }
            
            <div>Список:</div>
            {sectionsNames.map((section, index) => 
                <div key={index}>section: {section}</div>
            )}
        </div>
    )
}

export default DictionaryPage