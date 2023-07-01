import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../../model';
import { createUser, resetUser, UserKey } from '../../redux/states/user';
import { getIniciar } from '../../services';
import { clearLocalStorage } from '../../utilities';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { BotonSubmit } from '../BotonSubmit';

interface LoginFormValues {
  correoElectronico: string;
  password: string;
}

interface IniciarProps {
  mostrarRecordar: () => void;
}

const IniciarSesion: React.FC<IniciarProps> = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(`/${PublicRoutes.HOME}`, { replace: true });
  }, []);

  const login = async (values: LoginFormValues) => {
    try {
      setIsLoading(true);
      const { correoElectronico, password } = values;

      const result = await getIniciar(correoElectronico, password);
      if (result.resultado === false) {
        setMsg(result.msg);
      } else {
        setMsg('');
        dispatch(createUser({ ...result }));
        navigate(`/private/Dashboard`, { replace: true });
      }
      setIsLoading(false);
    } catch (error) {
      setMsg('Estamos presentando inconvenientes. Por favor, vuelva a intentarlo más tarde.');
      setIsLoading(false);
    }
  };

  return (
    <div className='Formulario_Login'>
      <h3>Inicie sesión</h3>
      <p>Por favor ingrese sus credenciales para acceder</p>
      <Formik
        initialValues={{
          correoElectronico: '',
          password: '',
        }}
        validate={(valor) => {
          let errors: any = {};
          if (!valor.correoElectronico) {
            errors.correoElectronico = 'Campo requerido';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valor.correoElectronico)) {
            errors.correoElectronico = 'Correo electrónico inválido';
          }

          if (!valor.password) {
            errors.password = 'Campo requerido';
          }
          setMsg('');
          return errors;
        }}
        onSubmit={login}
      >
        {({ errors, isSubmitting }) => (
          <Form>
            <div className='Formulario_Registrarse_Input'>
              <label htmlFor='correoElectronico'>Correo Electrónico</label>
              <Field
                type='email'
                name='correoElectronico'
                placeholder='email@ejemplo.com'
                className={errors.correoElectronico ? 'Input_Border_Red' : ''}
              />
              <ErrorMessage name='correoElectronico' component={() => <div className='error'>{errors.correoElectronico}</div>} />
            </div>
            <div className='Formulario_Registrarse_Input'>
              <label htmlFor='password'>Contraseña</label>
              <Field
                type='password'
                name='password'
                placeholder='*******'
                className={errors.password ? 'Input_Border_Red' : ''}
              />
              <ErrorMessage name='password' component={() => <div className='error'>{errors.password}</div>} />
            </div>
            <div className='Formulario_Registrarse_p'>
              <p onClick={props.mostrarRecordar}>
                <span>¿Olvidó su contraseña?</span>
              </p>
            </div>
            <i className='mensaje'>{msg}</i>
            <BotonSubmit texto={'Inicia sesión'} isLoading={isLoading} isSubmitting={isSubmitting} onClick={() => login} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default IniciarSesion;
