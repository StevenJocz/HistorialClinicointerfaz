import React, { useState } from 'react';
import Nav from "../../../components/Nav/Nav"
import Header from "../../../components/Header/Header"
import { Route } from 'react-router-dom';
import { RoutesWithNotFound } from '../../../utilities';
import {Inicio} from "../Inicio";
import { FormExample } from '../Forms';
import './Dashboard.css'


const Dashboard: React.FC = () => {

  const [JsonActual, setJsonActual] = useState<string>('');

  const enviarJson = (json: string) => {
    setJsonActual(json);
  };

  return (
    <div className="Dashboard">
      <div className="Sidebar">
      <Nav jsonProp={JsonActual} />
      </div>
      <div className="Contenido">
        <Header />
        <div className="Formularios">
          <RoutesWithNotFound>
          <Route path="/" element={<Inicio enviarJson={enviarJson} />} />
            <Route path="/formulariouno" element={<FormExample />} />
            <Route path="/formulariodos" element={<div>Formulario Dos</div>} />
            <Route path="/formulariotres" element={<div>Formulario tres</div>} />
            <Route path="/formulariocuatro" element={<div>Formulario Cuatro</div>} />
            <Route path="/formulariocinco" element={<div>Formulario Cinco</div>} />
            <Route path="/formularioseis" element={<div>Formulario Seis</div>} />
          </RoutesWithNotFound>
        </div>
      </div>
    </div>
  )
}
export default Dashboard