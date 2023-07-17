import React, { useState, useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { scanOutline } from 'ionicons/icons';

const FullscreenButton: React.FC = () => {
    // Define un estado booleano que indica si la página está en modo de pantalla completa o no
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Define una función que cambia el modo de pantalla completa según el estado actual
    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    };

    // Define un efecto que agrega y remueve un escucha de eventos para detectar cambios en el modo de pantalla completa
    useEffect(() => {
        // Define una función que establece el estado de isFullscreen según si la página está en modo de pantalla completa o no
        const fullscreenChangeHandler = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        // Agrega un escucha de eventos para detectar cambios en el modo de pantalla completa
        document.addEventListener('fullscreenchange', fullscreenChangeHandler);

        // Remueve el escucha de eventos cuando el componente es desmontado
        return () => {
            document.removeEventListener('fullscreenchange', fullscreenChangeHandler);
        };
    }, []);

    // Renderiza un icono que al hacer clic, alternará entre el modo de pantalla completa y el modo normal
    return (
        <IonIcon icon={scanOutline} onClick={toggleFullscreen} />
    );
};

export default FullscreenButton;
