// import styles
import classes from './Modal.module.scss'


const Modal = ({children, active, setActive}) => {
    const {modal, modalActive, modalContent} = classes

    return (
        <div className={`${modal} ${active ? modalActive : ''}`} onClick={() => setActive(false)}>
            <div className={modalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal