// import components
import FormAddWord from '../../components/FormAddWord/FormAddWord'

// import styles
import classes from './AddWordPage.module.scss'


const AddWordPage = () => {
    const {addWordPage} = classes 

    return (
        <div className={addWordPage}>
            <FormAddWord />
        </div>
    )
}

export default AddWordPage