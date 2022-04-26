// import components
import Modal from '../Modal/Modal'

// import styles
import classes from './ModalConfirm.module.scss'

const ModalConfirm = ({activeModalConfirm, setActiveModalConfirm, messageConfirm, english, russian, action}) => {
    const {okBtn, cancelBtn, modalContent, modalBtnBox, englishWord, russianWord, separatorWord} = classes

    return (
        <Modal
            active={activeModalConfirm}
            setActive={setActiveModalConfirm}
        >   
            <div className={modalContent}>                
                <div > 
                    <h3>{messageConfirm}</h3>
                    <span className={englishWord}>{english}</span>
                    <span className={separatorWord}>-</span>
                    <span className={russianWord}>{russian}</span>
                </div>
                <div className={modalBtnBox}>
                    <button className={cancelBtn} onClick={() => setActiveModalConfirm(false)}>отмена</button>
                    <button className={okBtn} onClick={action}>ок</button>
                </div>
            </div>
        </Modal>
    )
}

export default ModalConfirm