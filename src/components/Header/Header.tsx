
import React, {useState, useRef } from 'react';
import { IonIcon } from '@ionic/react';
import { menuOutline, notificationsOutline} from 'ionicons/icons';
import MiPerfil from './MiPerfil/MiPerfil';
import { FullPantalla } from '../../utilities';
import './Header.css'
const Header: React.FC = () => {
    const [miPerfil, setMiPerfil] = useState(false);
    

    const handleMiPerfil = () => {

        setMiPerfil(!miPerfil);
    };

    const divMiPerfil = useRef<HTMLDivElement>(null);

    const closeOpenMenus = (event: MouseEvent) => {
        if (divMiPerfil.current && miPerfil && !((divMiPerfil.current as HTMLDivElement).contains(event.target as Node))) {
            setMiPerfil(false);
        }
    };
    document.addEventListener('mousedown', closeOpenMenus)

    return (
        <div className="Contenido_Header">
            <div className='nav_perfil'>
                <IonIcon icon={menuOutline} />
            </div>
            
            <div className='nav_perfil'>
                <FullPantalla />
                <IonIcon icon={notificationsOutline} />
                <img className='ImgPerfil' onClick={handleMiPerfil} src="https://htmlstream.com/preview/front-v4.3.1/assets/img/160x160/img9.jpg" alt="" />
                <div className={`MiPerfil ${miPerfil ? "active" : ""}`} ref={divMiPerfil} >
                    {miPerfil && <MiPerfil />}
                </div>
            </div>
        </div>
    );
};

export default Header;
