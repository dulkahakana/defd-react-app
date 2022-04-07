import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import DictionaryService from '../API/DictionaryService'
import Word from '../components/UI/Word/Word'
import { useFetching } from '../hooks/useFetching'


const SectionPage = () => {
    const params = useParams()
    const [section, setSection] = useState([])
    const [fetchSection, isSectionLoading, sectionError] = useFetching(async (id) => {
        const response = await DictionaryService.getSection(id)
        setSection(response)
    })

    useEffect(() => {
        // console.log(`Select sectionName: ${params.id}`)
        fetchSection(params.id)
    }, [params.id])

    return (
        <div className="section-page">
            {/* <div className='section-name'>{params.id.toLocaleUpperCase()}</div> */}
            <ul>
                {isSectionLoading
                    ? <p>загрузка секции....</p>
                    : section.map((item, index) =>
                        <Word key={index} english={item.english} russian={item.russian} />
                    )
                }
            </ul>
        </div>
    )
}

export default SectionPage