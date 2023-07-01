import './Header.css'

import React, { useEffect, useState } from "react";
import { Base64 } from "js-base64";

const Header: React.FC = () => {
    const [decodedValue, setDecodedValue] = useState<string>("");

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            const token = user.split(".")[1];
            const decodedValue = Base64.decode(token);
            const obj = JSON.parse(decodedValue);
            const userName = obj.userName;
            setDecodedValue(userName);
        }
    }, []);

    return (
        <div className="Contenido_Header">
            <h1>Bienvenido {decodedValue}</h1>
        </div>
    );
};

export default Header;
