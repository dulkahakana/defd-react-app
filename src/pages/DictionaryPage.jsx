// import react-api
import { useState, useEffect } from 'react'

// import user-hooks
import { useFetching } from '../hooks/useFetching'

// import services
import DictionaryService from '../API/DictionaryService'
import LetterNavList from '../components/UI/LetterNavList/LetterNavList'
import { Outlet } from 'react-router-dom'

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
        <>
            <div>
                <LetterNavList sectionsNames={sectionsNames} />                
            </div>
            <div>
                <Outlet />
            </div>
        </>
        
    )
}

export default DictionaryPage