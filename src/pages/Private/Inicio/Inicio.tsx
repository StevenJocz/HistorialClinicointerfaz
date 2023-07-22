import React, { useState } from 'react';
import './Inicio.css'
import Img from '../../../assets/svg/Medicine-bro.svg'
import { IonIcon } from '@ionic/react';
import { heartOutline, leafOutline, readerOutline } from 'ionicons/icons';
import { UbicacionPagina } from '../../../components/UbicacionPagina';

interface InicioProps {
  enviarJson: (json: string) => void; 
}

const Inicio: React.FC<InicioProps> = ({ enviarJson }) => {

  const [Json, setJson] = useState<string>('');

  const handleClickJson = (item: string) => {
    setJson(item);
    Json;
    enviarJson(item); 
  };

  return (
    <div className='Inicio'>
      <UbicacionPagina ubicacion='Inicio'/>
      <div className="Inicio_Contenedor">
        <div className='Inicio_Contenedor_div'>
          <div>
            <img src={Img} alt="" />
          </div>
          <div>
            <h4>¡Bienvenido/a, Hamilton!</h4>
            <p>¡Gracias por estar aquí! Por favor, indícanos qué deseas hacer hoy</p>
          </div>
          <button>Cómo funciona</button>
        </div>
        <div className='Inicio_Contenedor_opcion'>
          <div className="Inicio_Contenedor_opcion_Menu" onClick={() => handleClickJson('opcion1')}>
            <div className='opcion_Menu_Contenedor'>
              <span className="opcion_Menu_Icono"> <IonIcon icon={heartOutline} /></span>
            </div>
            <div>
              <h4>Programar una cita médica.</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.!</p>
            </div>
          </div>
          <div className="Inicio_Contenedor_opcion_Menu" onClick={() => handleClickJson('opcion2')}>
            <div className='opcion_Menu_Contenedor'>
              <span className="opcion_Menu_Icono"> <IonIcon icon={leafOutline} /></span>
            </div>
            <div>
              <h4>Acceder a tus resultados de exámenes anteriores.</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.!</p>
            </div>
          </div>
          <div className="Inicio_Contenedor_opcion_Menu" onClick={() => handleClickJson('opcion3')}>
            <div className='opcion_Menu_Contenedor'>
              <span className="opcion_Menu_Icono"> <IonIcon icon={readerOutline} /></span>
            </div>
            <div>
              <h4>Solicitar una receta médica o renovar una existente.</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.!</p>
            </div>
          </div>
          <div className="Inicio_Contenedor_opcion_Menu" onClick={() => handleClickJson('opcion4')}>
            <div className='opcion_Menu_Contenedor'>
              <span className="opcion_Menu_Icono"> <IonIcon icon={readerOutline} /></span>
            </div>
            <div>
              <h4>Solicitar una receta médica o renovar una existente.</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;