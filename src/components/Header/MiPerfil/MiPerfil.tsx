import React, { useEffect, useState } from 'react';
import { IonIcon } from '@ionic/react';
import { personOutline, helpCircleOutline } from 'ionicons/icons';
import { Base64 } from "js-base64";
import { Logout } from '../../CerrarSesion';

import './MiPerfil.css'

const MiPerfil: React.FC = () => {
    const [decodedValue, setDecodedValue] = useState<any[]>([]);
    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            const token = user.split(".")[1];
            const decodedValue = Base64.decode(token);
            const obj = JSON.parse(decodedValue);
            setDecodedValue(Object.entries(obj));
        }
    }, []);

    return (
        <div className='MiPerfil_Contenido'>
            <div className='MiPerfil_Contenido_Info'>
                <div>
                    <h3>{decodedValue.find(([key]) => key === "userName")?.[1]}</h3>
                    <h4>{decodedValue.find(([key]) => key === "userEmail")?.[1]}</h4>
                </div>
            </div>
            <div className='MiPerfil_Contenido_Controles'>
                <div className='MiPerfil_Contenido_text'>
                    <IonIcon icon={personOutline} />
                    <h5> Mi cuenta</h5>
                </div>
                <div className='MiPerfil_Contenido_text'>
                    <IonIcon icon={helpCircleOutline} />
                    <h5>Ayuda</h5>
                </div>
                <Logout/>
            </div>
        </div>
    )
};

export default MiPerfil;