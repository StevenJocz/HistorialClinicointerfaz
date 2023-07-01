import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Nav.css'

const Nav: React.FC = () => {
    const [activeItem, setActiveItem] = useState<string>('private/Dashboard');
    const location = useLocation();

    useEffect(() => {
        // Obtener la parte de la URL después de la última barra '/'
        const currentPath = location.pathname.split('/').pop();
        setActiveItem(currentPath || '/private/dashboard');
    }, [location]);

    const handleClick = (item: string) => {
        setActiveItem(item);
    };

    return (
        <div className="Sidebar">
            <div className='Sidebar_Logo'>
                <h1>Sistema Empleados</h1>
            </div>
            <ul className="Sidebar_Menu">
                <div>
                <h4 className="Sidebar_Menu_Titulo"></h4>
                <li className='Permisos' onClick={() => handleClick('Dashboard')}>
                        <div className={`Permisos_List active `}>
                            <b></b>
                            <b></b>
                            <Link to='/private/dashboard'>
                                <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                                <span className="Permisos_List_Title">Dashboard</span>
                            </Link>
                        </div>
                    </li>
                    <h4 className="Sidebar_Menu_Titulo">Formularios</h4>
                    <li className='Permisos' onClick={() => handleClick('registrarempleados')}>
                        <div className={`Permisos_List ${activeItem === 'registrarempleados' ? 'active' : ''}`}>
                            <b></b>
                            <b></b>
                            <Link to='/registrarempleados'>
                                <span className="icon"><ion-icon name="person-add-outline"></ion-icon></span>
                                <span className="Permisos_List_Title">Registrar Empleados</span>
                            </Link>
                        </div>
                    </li>
                    <li className='Permisos'>
                        <div className={`Permisos_List`}>
                            <b></b>
                            <b></b>
                            <Link to='/'>
                                <span className="icon"><ion-icon name="exit-outline"></ion-icon></span>
                                <span className="Permisos_List_Title">Cerrar Sesión</span>
                            </Link>
                        </div>
                    </li>
                </div>
            </ul>
        </div>
    );
};

export default Nav;
