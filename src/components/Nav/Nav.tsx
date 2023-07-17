import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IonIcon } from '@ionic/react';
import { homeOutline, personAddOutline } from 'ionicons/icons';
import './Nav.css'

const Nav: React.FC = () => {
    const [activeItem, setActiveItem] = useState<string>('app/dashboard');
    const location = useLocation();

    useEffect(() => {
        // Obtener la parte de la URL después de la última barra '/'
        const currentPath = location.pathname.split('/').pop();
        setActiveItem(currentPath || '/app/dashboard');
    }, [location]);
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
                                <span className="icon"><IonIcon icon={homeOutline} /></span>
                                <span className="Permisos_List_Title">Dashboard</span>
                            </Link>
                        </div>
                    </li>
                    <h4 className="Sidebar_Menu_Titulo">Formularios</h4>
                    <li className='Permisos' onClick={() => handleClick('prueba')}>
                        <div className={`Permisos_List ${activeItem === 'prueba' ? 'active' : ''}`}>
                            <b></b>
                            <b></b>
                            <Link to='/app/dashboard/prueba'>
                                <span className="icon"><IonIcon icon={personAddOutline} /></span>
                                <span className="Permisos_List_Title">PRUEBA</span>
                            </Link>
                        </div>
                    </li>
                </div>
            </ul>
        </div>
    );
};

export default Nav;
