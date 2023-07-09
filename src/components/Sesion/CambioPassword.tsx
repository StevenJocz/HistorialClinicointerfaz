import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { PostActualizarPassword } from '../../services';
import { BotonSubmit } from '../BotonSubmit';
import { IonIcon } from '@ionic/react';
import './Sesion.css';

interface CodigoProps {
    correoElectronico: string;
}

interface CodigoFormValues {
    correoElectronico: string;
    password: string;
}

const CambioPassword: React.FC<CodigoProps> = ({ correoElectronico }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [msg, setMsg] = useState('');
    const [cambioCorrecto, setcambioCorrecto] = useState(false);

    const handleCambiarPassword = async (values: CodigoFormValues) => {
        try {
            setIsLoading(true);
            const { correoElectronico, password } = values;

            const result = await PostActualizarPassword(correoElectronico, password);
            if (result.resultado === false) {
                setMsg(result.message);
            } else {
                setMsg(result.message);
                setcambioCorrecto(true);
            }
            setIsLoading(false);
        } catch (error) {
            setMsg('Estamos presentando inconvenientes. Por favor, vuelva a intentarlo más tarde.');
            setIsLoading(false);
        }
    };

    return (
        <div className='Formulario_Recording'>
            <div className='iconoLogin'>
                <IonIcon name="lock-closed-outline" />
            </div>
            <h3>Cambio de contraseña</h3>
            {cambioCorrecto ? (
                <>
                    <div className=' color_IconoLogin'>
                        <IonIcon name="checkmark-circle-outline" />
                    </div>
                    <i className='mensajeCambio'>{msg}</i>
                </>

            ) : (
                <>
                    <p>Por favor, ingresa tu nueva contraseña a continuación y confírmala para completar el cambio.</p>
                    <Formik
                        initialValues={{
                            correoElectronico: correoElectronico,
                            password: '',
                            passwordCorregido: '',
                        }}
                        validate={(values) => {
                            let errors: any = {};
                            if (!values.password) {
                                errors.password = 'Campo requerido';
                            } else {
                                if (!/(?=.*[A-Z])/.test(values.password)) {
                                    errors.password = 'Debe contener al menos una mayúscula';
                                }
                                if (!/(?=.*\d)/.test(values.password)) {
                                    errors.password = 'Debe contener al menos un número';
                                }
                                if (values.password.length < 8) {
                                    errors.password = 'Debe tener una longitud mayor a 7 caracteres';
                                }

                                if (
                                    !/(?=.*[A-Z])(?=.*\d).{8,}/.test(values.password) &&
                                    !errors.password // Verificar si no hay errores individuales ya establecidos
                                ) {
                                    errors.password = 'La contraseña debe contener al menos una mayúscula, un número y tener una longitud mayor a 7 caracteres';
                                }
                            }

                            if (values.passwordCorregido !== values.password) {
                                errors.passwordCorregido = 'Las contraseñas no coinciden';
                            } else if (!values.passwordCorregido) {
                                errors.passwordCorregido = 'Campo requerido';
                            }
                            return errors;
                        }}
                        onSubmit={handleCambiarPassword}
                    >
                        {({ errors, isSubmitting, touched }) => (
                            <Form>
                                <div className='Formulario_Registrarse_Input'>
                                    <label htmlFor='codigo'>Nueva contraseña</label>
                                    <Field
                                        type='password'
                                        name='password'
                                        placeholder='******'
                                        className={errors.password && touched.password ? 'Input_Border_Red' : ''}
                                    />
                                    <ErrorMessage name='password' component={() => <div className='error'>{errors.password}</div>} />
                                </div>
                                <div className='Formulario_Registrarse_Input'>
                                    <label htmlFor='codigo'>Confirmar contraseña</label>
                                    <Field
                                        type='password'
                                        name='passwordCorregido'
                                        placeholder='******'
                                        className={errors.passwordCorregido && touched.passwordCorregido ? 'Input_Border_Red' : ''}
                                    />
                                    <ErrorMessage name='passwordCorregido' component={() => <div className='error'>{errors.passwordCorregido}</div>} />
                                </div>
                                <BotonSubmit texto='Cambiar contraseña' isLoading={isLoading} isSubmitting={isSubmitting} onClick={() => handleCambiarPassword} />
                            </Form>
                        )}
                    </Formik>
                </>
            )}

        </div>
    );
}

export default CambioPassword;


