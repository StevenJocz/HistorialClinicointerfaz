import React from 'react';
import './Modal.css';

interface ModalProps {
    abrir: boolean;
    cerrar: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ abrir, cerrar, children }) => {
    if (!abrir) return null;

    return (
        <div className="Modal">
            <div className="Modal_Contenedor">
                <div className='Modal_Contenedor_Header'>
                    <div className='Modal_Cerrar' onClick={cerrar}>
                        <p>  &times;</p>
                    </div>
                </div>
                <div className="Modal_Contenedor_body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
