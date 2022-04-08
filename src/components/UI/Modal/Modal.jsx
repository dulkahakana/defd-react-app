// import styles
import classes from './Modal.module.scss'


const Modal = ({active, setActive}) => {
    const {modal, modalActive, modalContent} = classes
    console.log(modalActive);

    return (
        <div className={`${modal} ${active ? modalActive : ''}`} onClick={() => setActive(false)}>
            <div className={modalContent} onClick={e => e.stopPropagation()}>

            </div>
        </div>
    )
}

export default Modal