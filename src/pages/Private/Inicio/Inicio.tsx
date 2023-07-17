import React from 'react';
import './Inicio.css'
import Img from '../../../assets/svg/Medicine-bro.svg'
import { IonIcon } from '@ionic/react';
import { heartOutline, leafOutline, readerOutline} from 'ionicons/icons';



const Inicio: React.FC = () => {
  return (
    <div className='Inicio'>
      <i>Dashboard <span>/</span> Inicio</i>
      <div className="Inicio_Contenedor">
        <div className='Inicio_Contenedor_div'>
          <h4>¡Bienvenido/a, Hamilton!</h4>
          <p>¡Gracias por estar aquí!. Por favor, selecciona una de las siguientes opciones para continuar</p>
          <img src={Img} alt="" />
        </div>

        <div className='Inicio_Contenedor_opcion'>
          <div className="Inicio_Contenedor_opcion_Menu">
            <span className="opcion_Menu_Icono"> <IonIcon icon={heartOutline} /></span>
            <div>
              <h4>Programar una cita médica.</h4>
              <p>Si eliges esta opción, podrás agendar una cita con uno de nuestros profesionales de la salud. Podremos atenderte de manera personalizada, realizar evaluaciones, diagnosticar y planificar tu tratamiento médico.</p>
            </div>

          </div>
          <div className="Inicio_Contenedor_opcion_Menu">
            <span className="opcion_Menu_Icono"> <IonIcon icon={leafOutline} /></span>
            <div>
              <h4>Acceder a tus resultados de exámenes anteriores.</h4>
              <p>Optando por esta opción, podrás revisar y obtener tus resultados de exámenes médicos previos. Esto te permitirá mantener un seguimiento de tu salud y compartir la información relevante con tu médico actual.</p>
            </div>
          </div>
          <div className="Inicio_Contenedor_opcion_Menu">
            <span className="opcion_Menu_Icono"> <IonIcon icon={readerOutline} /></span>
            <div>
              <h4>Solicitar una receta médica o renovar una existente.</h4>
              <p>Si eliges esta opción, podrás solicitar una nueva receta médica para cualquier medicamento que necesites o renovar una receta que ya tengas. Nuestro equipo médico revisará tu historial clínico y evaluará tu situación para brindarte la receta adecuada y asegurarse de que recibas los medicamentos necesarios para tu tratamiento.</p>
            </div>
          </div>
        </div>




      </div>




    </div>
  );
};

export default Inicio;