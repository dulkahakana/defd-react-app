// import react
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

// import service
import DictionaryService from '../../API/DictionaryService'

// import user hooks
import { useFetching } from '../../hooks/useFetching'

// import components 
import Word from '../../components/UI/Word/Word'
import ModalConfirm from '../../components/UI/ModalConfirm/ModalConfirm'

// import context
import { QuantityWordsContext } from '../../context/QuantityWordsProvider'

// import styles
import classes from './SectionPage.module.scss'


const SectionPage = () => {
    const {sectionPage, loading} = classes

    const params = useParams()
    const [section, setSection] = useState([])

    const [fetchSection, isSectionLoading, sectionError] = useFetching(async (id) => {
        const response = await DictionaryService.getSection(id)
        setSection(response)
    })

    const [fetchDeleteWord, idDeleteWordLoading, deleteWordError] = useFetching(async (word) => {
        await DictionaryService.deleteWord(word)
    })
    
    const [activeModalConfirm, setActiveModalConfirm] = useState(false)
    const [trashWord, setTrashWord] = useState({english: '', russian: ''})
    const [quantityWors, setQuantityWords] = useContext(QuantityWordsContext)

    const deleteWord = () => {
        const word = {
            english: trashWord.english,
            russian: trashWord.russian
        }

        setSection(section.filter(item => item.english !== trashWord.english))

        fetchDeleteWord(word)
        setQuantityWords(quantityWors - 1)
        setActiveModalConfirm(false)
    }

    useEffect(() => {
        fetchSection(params.id)
    }, [params.id])

    return (
        <div className={sectionPage}>
                {isSectionLoading
                    ? <p className={loading}>загрузка секции....</p>
                    :
                    <ul> {section.map((item, index) =>
                            <Word
                                key={index}
                                english={item.english}
                                russian={item.russian}
                                setActiveModalConfirm={setActiveModalConfirm}
                                setTrashWord={setTrashWord}
                            />
                        )}
                    </ul>
                }

                <ModalConfirm
                    activeModalConfirm={activeModalConfirm}
                    setActiveModalConfirm={setActiveModalConfirm}
                    messageConfirm='Удалить:'
                    english={trashWord.english}
                    russian={trashWord.russian}
                    action={deleteWord}
                />
        </div>
    )
}

export default SectionPage