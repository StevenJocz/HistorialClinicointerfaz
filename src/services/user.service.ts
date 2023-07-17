const baseUrl = 'http://localhost:5214/api/';


export const PostRegistrarUser = (nombre: string, apellido: string, fechaNacimiento: string, sexo: string, telefono: string, ciudad: string, correoElectronico: string, password: string) => {
    const url = baseUrl + 'User/Create_User';
    const body = JSON.stringify(
        {
            id: 0,
            s_user_name: nombre,
            s_user_lastname: apellido,
            dt_user_birthdate: fechaNacimiento+'T17:55:18.171Z',
            s_user_gender: sexo,
            fk_user_address_city: ciudad,
            s_user_cellphone: telefono,
            s_user_email: correoElectronico,
            password: password
        }
    );

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body
    }).then(res => res.json());
};

