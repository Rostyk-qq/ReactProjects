import React from 'react';
import modalStyle from './modalForm.module.css'
const Modal = ({modalOpen, setModalOpened, children}) => {

    let body = document.body
    let massive = [modalStyle.modal__area]
    if (modalOpen){
        massive.push(modalStyle.active)
        body.classList.add('modal__active')
    }else{
        body.classList.remove('modal__active')
    }
    return (
        <div className={massive.join(' ')} onClick={() => setModalOpened(false)}>
            <div className={modalStyle.modal__form} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;