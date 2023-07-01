import { useState } from 'react';
import IniciarSesion from './IniciarSesion';
import Recordar from './Recordarme';
import './Sesion.css';

enum ComponenteActual {
    IniciarSesion = 'IniciarSesion',
    Recordar = 'Recordar'
}

const Sesion = () => {
    const [componenteActual, setComponenteActual] = useState<ComponenteActual>(ComponenteActual.IniciarSesion);

    const mostrarRecordar = () => {
        setComponenteActual(ComponenteActual.Recordar);
    };

    const handleCerrar = () => {
        const Cerrar = document.querySelector('.Iniciar') as HTMLElement;
        const body = document.querySelector('body') as HTMLElement;
        const activeClass = 'active';
        Cerrar?.classList.remove(activeClass);
        body?.classList.remove(activeClass);
        setComponenteActual(ComponenteActual.IniciarSesion);
    };

    return (
        <div className='Iniciar'>
            <div className='Iniciar_Contenido'>
                <div className='Iniciar_bg' onClick={handleCerrar}></div>
                <div className='Iniciar_Login'>
                    <div className='Iniciar_Login_Cerrar' onClick={handleCerrar}>
                        <p>X</p>
                    </div>
                    <div>
                        {componenteActual === ComponenteActual.IniciarSesion && (
                            <IniciarSesion  mostrarRecordar={mostrarRecordar} />
                        )}
                        {componenteActual === ComponenteActual.Recordar && (
                            <Recordar mostrarIniciarSesion={() => setComponenteActual(ComponenteActual.IniciarSesion)} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sesion;
