
import Typewriter from "typewriter-effect";
import myImage from '../../assets/svg/IconoSalud.svg';
import { Sesion } from '../../components/Sesion';
import './Home.css'

function Login() {

  const handleIniciar = () => {
    const Iniciar = document.querySelector('.Iniciar') as HTMLElement;
    const body = document.querySelector('body') as HTMLElement;
    const activeClass = 'active';
    Iniciar.classList.toggle(activeClass);
    body.classList.toggle(activeClass);
  };

  

  return (
    <div className='Header'>
      <div className='Header_Img'>
        <img src={myImage} alt="Mi imagen" />
      </div>
      <div className='Header_Contenido'>
        <h1>Sistema de Historial Clínico</h1>
        <Typewriter
          options={{
            strings: ['Registro y...', 'Gestión eficiente de... ', ' Información Médica.'],
            autoStart: true,
            loop: true,
          }}
        />
        <p>Nuestro sistema de historial clínico permite registrar, visualizar y actualizar la información de sus pacientes de forma segura y eficiente. Mantenga un registro completo de antecedentes médicos, diagnósticos y tratamientos.</p>
        <div className='Empezar'>
          <button onClick={handleIniciar}>Iniciar</button>
        </div>
      </div>
      <Sesion />
    </div>
  );
}

export default Login;