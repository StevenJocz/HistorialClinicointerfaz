import React from 'react';
import './BotonSubmit.css';

interface BotonSubmitProps {
    isLoading?: boolean;
    texto?: string;
    onClick?: () => void;
    isSubmitting?: boolean;
    color?: string;
}
type Colores = {
    [key: string]: string;
};

const BotonSubmit: React.FC<BotonSubmitProps> = ({ isLoading = false, texto = '', onClick, isSubmitting = false, color = 'guardar' }) => {

    const colores: Colores = {
        guardar: '#377dff',
        enviar: '#6259ca',
        editar: '#00ff00',
        eliminar: '#f1388b',
        modal: '#fd7e14',
        // Puedes agregar más colores si lo deseas
    };

    const hexadecimalColor = colores[color.toLowerCase()];

    return (
        <button type="submit" className="Iniciar_Boton" onClick={onClick} disabled={isSubmitting} style={{ backgroundColor: hexadecimalColor }}>
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
