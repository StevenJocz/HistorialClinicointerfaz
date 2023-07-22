import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { PostRecordarme } from '../../services';
import { BotonSubmit } from '../BotonSubmit';
import Codigo from './Codigo';
import { IonIcon } from '@ionic/react';
import { mailOutline, chevronBack} from 'ionicons/icons';
import './Sesion.css';

interface RecordarProps {
    mostrarIniciarSesion: () => void;
}

interface LoginFormValues {
    correoElectronico: string;
}

const Recordar: React.FC<RecordarProps> = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [msg, setMsg] = useState('');
    const [mostrarCodigo, setMostrarCodigo] = useState(false);
    const [correoElectronico, setCorreoElectronico] = useState('');

    const handleRecordar = async (values: LoginFormValues) => {
        try {
            setIsLoading(true);
            const { correoElectronico } = values;

            const result = await PostRecordarme(correoElectronico);
            if (result.resultado === false) {
                setMsg(result.message);
            } else {
                setMsg(result.message);
                setCorreoElectronico(correoElectronico);
                setMostrarCodigo(true);
            }
            setIsLoading(false);
        } catch (error) {
            setMsg('Estamos presentando inconvenientes. Por favor, vuelva a intentarlo más tarde.');
            setIsLoading(false);
        }
    };

    return (
        <div className='Formulario_Recording'>
            {!mostrarCodigo ? (
                <>
                    <div className='iconoLogin'>
                        <IonIcon icon={mailOutline}/>
                    </div>

                    <h3>Olvidé mi contraseña</h3>
                    <p>Se enviarán instrucciones al correo electrónico</p>
                    <Formik
                        initialValues={{
                            correoElectronico: ''
                        }}
                        validate={(valor_remember) => {
                            let errors: any = {};
                            if (!valor_remember.correoElectronico) {
                                errors.correoElectronico = 'Introduce una dirección de correo electrónico válida.';
                            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valor_remember.correoElectronico)) {
                                errors.correoElectronico = 'Introduce una dirección de correo electrónico válida.';
                            }
                            return errors;
                        }}
                        onSubmit={handleRecordar}
                    >
                        {({ errors, isSubmitting }) => (
                            <Form>
                                <div className='Formulario_Registrarse_Input'>
                                    <label htmlFor='correo_remember'>Su correo electrónico</label>
                                    <Field
                                        type='email'
                                        name='correoElectronico'
                                        id='correoElectronico'
                                        placeholder='email@ejemplo.com'
                                        className={errors.correoElectronico ? 'Input_Border_Red' : ''}
                                    />
                                    <ErrorMessage name='correoElectronico' component={() => <div className='error'>{errors.correoElectronico}</div>} />
                                </div>

                                <i className='mensaje'>{msg}</i>
                                <BotonSubmit texto={'Recordarme'} isLoading={isLoading} isSubmitting={isSubmitting} onClick={() => handleRecordar} color="guardar"/>
                            </Form>
                        )}
                    </Formik>
                </>
            ) : (
                <Codigo correoElectronico={correoElectronico} />
            )}
            <div className='Formulario_Registrarse_Yacuenta'>
                <p onClick={props.mostrarIniciarSesion}>
                <IonIcon icon={chevronBack}/> <span>Volver a Iniciar sesión</span>
                </p>
            </div>
        </div>
    );
};

export default Recordar;
