import { homeOutline, personAddOutline } from 'ionicons/icons';

export const Permiso = (Opcion: string) => {
    if (Opcion === 'opcion1') {
        const opcionUno = [
            {
                "id": 1,
                "Nombre": "Formulario Cuatro",
                "Icono": homeOutline,
                "Ruta": 'formulariocuatro',
            },
            {
                "id": 2,
                "Nombre": "Formulario Cinco",
                "Icono": homeOutline,
                "Ruta": 'formulariocinco',
            },
            {
                "id": 3,
                "Nombre": "Formulario Seis",
                "Icono": homeOutline,
                "Ruta": 'formularioseis',
            },
        ];

        return opcionUno;
    } else if (Opcion === 'opcion2') {
        const opcionDos = [
            {
                "id": 1,
                "Nombre": "Formulario de ejemplo",
                "Icono": personAddOutline,
                "Ruta": 'formulariouno',
            },
            {
                "id": 2,
                "Nombre": "Formulario Dos",
                "Icono": personAddOutline,
                "Ruta": 'formulariodos',
            },
            {
                "id": 3,
                "Nombre": "Formulario Tres",
                "Icono": personAddOutline,
                "Ruta": 'formulariotres',
            },
        ];

        return opcionDos;
    } else {
        
        return [];
    }
};
