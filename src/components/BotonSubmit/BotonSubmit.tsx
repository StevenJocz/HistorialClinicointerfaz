import React from 'react';
import './BotonSubmit.css';

interface BotonSubmitProps {
    isLoading: boolean;
    texto: string;
    onClick: () => void;
    isSubmitting: boolean;
}

const BotonSubmit: React.FC<BotonSubmitProps> = ({ isLoading, texto, onClick, isSubmitting}) => {
    return (
        <button type="submit" className="Iniciar_Boton" onClick={onClick} disabled={isSubmitting} >
            {isLoading ? (
                <div className="Iniciar_spinner">
                    <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                </div>
            ) : (
                <span>{texto}</span>
            )}
        </button>
    );
};

export default BotonSubmit;
