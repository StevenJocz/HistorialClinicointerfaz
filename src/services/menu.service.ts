import { homeOutline, personAddOutline } from 'ionicons/icons';

export const Permiso = (Opcion: string) => {
    if (Opcion === 'gestion-del-cuidado') {
        const opcionUno = [
            {
                "id": 1,
                "Nombre": "Formulario de ejemplo",
                "Icono": personAddOutline,
                "Ruta": 'gestion-del-cuidado/formulariouno',
            },
            {
                "id": 2,
                "Nombre": "Formulario Dos",
                "Icono": personAddOutline,
                "Ruta": 'gestion-del-cuidado/formulariodos',
            },
            {
                "id": 3,
                "Nombre": "Formulario Tres",
                "Icono": personAddOutline,
                "Ruta": 'gestion-del-cuidado/formulariotres',
            },
        ];

        return opcionUno;
    } else if (Opcion === 'gestion-del-servicio') {
        const opcionDos = [
            
            {
                "id": 1,
                "Nombre": "Formulario Cuatro",
                "Icono": homeOutline,
                "Ruta": 'gestion-del-servicio/formulariocuatro',
            },
            {
                "id": 2,
                "Nombre": "Formulario Cinco",
                "Icono": homeOutline,
                "Ruta": 'gestion-del-servicio/formulariocinco',
            },
            {
                "id": 3,
                "Nombre": "Formulario Seis",
                "Icono": homeOutline,
                "Ruta": 'gestion-del-servicio/formularioseis',
            },
        ];

        return opcionDos;
    } else {
        
        return [];
    }
};
