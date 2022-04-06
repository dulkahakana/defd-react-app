import { useParams } from 'react-router-dom'

const SectionPage = () => {
    const params = useParams()

    return (
        <div className="section-page">
            <div>Sections: {params.id}</div>
        </div>
    )
}

export default SectionPage