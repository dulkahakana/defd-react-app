

// import styles
import FormAddWord from '../../components/FormAddWord/FormAddWord'
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