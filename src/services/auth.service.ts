const baseUrl = 'http://localhost:5214/api/';
const characterUrl = baseUrl + 'Login/login';

export const getIniciar = (userEmail: string, userPassword: string) => {
    const url = characterUrl;
    const body = JSON.stringify({ userEmail, userPassword });

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body
    }).then(res => res.json());
};

export const PostRecordarme = (userEmail: string) => {
    const url = baseUrl + 'Login/EmailRestablecimientoPassword';
    const body = JSON.stringify({
        para: userEmail,
        asunto: "Restablecimiento de contraseña",
        contenido: `<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Restablecimiento de contraseña</title>\n    <style>\n        body {\n            font-family: Arial, sans-serif;\n            background-color: #f4f4f4;\n            color: #333;\n        }\n\n        .container {\n            max-width: 600px;\n            margin: 0 auto;\n            padding: 20px;\n        }\n\n        h1 {\n            color: #555;\n        }\n\n        p {\n            margin-bottom: 10px;\n        }\n\n        .code {\n            background-color: #f9f9f9;\n            border: 1px solid #ddd;\n            padding: 10px;\n            font-size: 20px;\n        }\n\n        .footer {\n            margin-top: 30px;\n            font-size: 14px;\n            color: #777;\n        }\n    </style>\n</head>\n<body>\n    <div class=\"container\">\n        <h1>Código de seguridad para restablecer la contraseña</h1>\n        <p>Hola [Nombre],</p>\n        <p>Recibimos una solicitud para restablecer la contraseña de tu cuenta. Por favor, utiliza el siguiente código de seguridad:</p>\n        <div class=\"code\">[Código de seguridad]</div>\n        <p>Ingresa este código en la página de restablecimiento de contraseña para continuar con el proceso.</p>\n        <p>Si no solicitaste un restablecimiento de contraseña, puedes ignorar este correo electrónico.</p>\n        <p class=\"footer\">Atentamente,<br>El equipo de ejemplo</p>\n    </div>\n</body>\n</html>`
    });

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body
    }).then(res => res.json());
};

export const PostEnviarCodigo = (userEmail: string, codigo: string) => {
    const url = baseUrl + 'Login/VerificarCodigo';
    const body = JSON.stringify({
        s_correo: userEmail,
        s_codigo: codigo

    });

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body
    }).then(res => res.json());
};

export const PostActualizarPassword = (userEmail: string, nuevoPassword: string) => {
    const url = `${baseUrl}Login/ActualizarPassword?userEmail=${encodeURIComponent(userEmail)}&nuevoPassword=${encodeURIComponent(nuevoPassword)}`;

    return fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
};
