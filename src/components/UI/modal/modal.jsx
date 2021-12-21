import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Backdrop = ({ onClose }) => {
    const backdropReturn = onClose
    ? ( <BackdropContent onClick={onClose}></BackdropContent> )
    : null;

    return backdropReturn;
}

const ModalOverlay = ({ children }) => {
    const modalReturn = children
        ? children
        : null;

    return modalReturn;
}

const Modal = props => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('overlays'))}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
        </>
    )
}

const BackdropContent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.75);
`

export default Modal;