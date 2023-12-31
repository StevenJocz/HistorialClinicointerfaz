import { useState } from 'react';
import IniciarSesion from './IniciarSesion';
import Recordar from './Recordarme';
import Registro from './Registro';
import './Sesion.css';


enum ComponenteActual {
    IniciarSesion = 'IniciarSesion',
    Recordar = 'Recordar',
    Registro = 'Registro',

}

const Sesion = () => {
    const [componenteActual, setComponenteActual] = useState<ComponenteActual>(ComponenteActual.IniciarSesion);

    const mostrarRecordar = () => {
        setComponenteActual(ComponenteActual.Recordar);
    };

    const mostrarRegistro = () => {
        setComponenteActual(ComponenteActual.Registro);
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
                <div className='Iniciar_bg'></div>
                <div className='Iniciar_Login'>
                    <div className='Iniciar_Login_Cerrar' onClick={handleCerrar}>
                        <p>X</p>
                    </div>
                    <div>
                        {componenteActual === ComponenteActual.IniciarSesion && (
                            <IniciarSesion mostrarRecordar={mostrarRecordar} mostrarRegistro={mostrarRegistro}/>
                        )}
                        {componenteActual === ComponenteActual.Recordar && (
                            <Recordar mostrarIniciarSesion={() => setComponenteActual(ComponenteActual.IniciarSesion)} />
                        )}
                        {componenteActual === ComponenteActual.Registro && (
                            <Registro mostrarIniciarSesion={() => setComponenteActual(ComponenteActual.IniciarSesion)} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sesion;
