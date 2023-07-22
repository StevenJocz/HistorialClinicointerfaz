import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IonIcon } from '@ionic/react';
import { homeOutline} from 'ionicons/icons';
import { Permiso } from '../../services';
import ImgSelet from '../../assets/svg/Choose-rafiki.svg'
import './Nav.css'

interface NavProps {
    jsonProp: string;
}

const Nav: React.FC<NavProps> = ({ jsonProp }) => {
    const [activeItem, setActiveItem] = useState<string>('app/dashboard');
    const [resultJson, setResultJson] = useState<any[]>([]);
    const location = useLocation();

    useEffect(() => {
        // Obtener la parte de la URL después de la última barra '/'
        const currentPath = location.pathname.split('/').pop();
        setActiveItem(currentPath || '/app/dashboard');
    }, [location]);

    useEffect(() => {
        setResultJson(Permiso(jsonProp));
    }, [jsonProp]);

    const handleClick = (item: string) => {
        setActiveItem(item);
    };

    return (
        <div className="Sidebar">
            <div className='Sidebar_Logo'>
                <h1>Sistema de Historial Clínico</h1>
            </div>
            <ul className="Sidebar_Menu">
                <div>
                    <h4 className="Sidebar_Menu_Titulo"></h4>
                    <li className='Permisos' onClick={() => handleClick('dashboard')}>
                        <div className={`Permisos_List ${activeItem === 'dashboard' ? 'active' : ''}`}>
                            <b></b>
                            <b></b>
                            <Link to='/app/dashboard'>
                                <span className={`icon ${activeItem === 'dashboard' ? 'icon_active' : 'icon_inActive'}`}><IonIcon icon={homeOutline} /></span>
                                <span className="Permisos_List_Title">Dashboard</span>
                            </Link>
                        </div>
                    </li>
                    <h4 className="Sidebar_Menu_Titulo">Formularios {jsonProp}</h4>
                    {resultJson.length === 0 ? (
                        <div>
                            <p className="Opcion_Advertencia">Por favor, selecciona una opción para visualizar los formularios.</p>
                            <img src={ImgSelet} alt="" />
                        </div>
                    ) : (
                        <>
                            {resultJson.map((modulo) => (
                                <li className='Permisos' onClick={() => handleClick(modulo.Ruta)} key={modulo.id}>
                                    <div className={`Permisos_List ${activeItem === `${modulo.Ruta}` ? 'active' : ''}`}>
                                        <b></b>
                                        <b></b>
                                        <Link to={`/app/dashboard/${modulo.Ruta}`}>
                                            <span className={`icon ${activeItem === `${modulo.Ruta}` ? 'icon_active' : 'icon_inActive'}`}>
                                                <IonIcon icon={modulo.Icono} />
                                            </span>
                                            <span className="Permisos_List_Title">{modulo.Nombre}</span>
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </>
                    )}
                </div>
            </ul>
        </div>
    );
};

export default Nav;
