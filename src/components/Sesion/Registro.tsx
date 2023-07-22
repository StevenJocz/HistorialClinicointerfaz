import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { BotonSubmit } from '../BotonSubmit';
import { IonIcon } from '@ionic/react';
import { personAdd, chevronBack, checkmarkCircleOutline } from 'ionicons/icons';
import { PostRegistrarUser } from '../../services';
import './Sesion.css';

interface LoginFormValues {
    nombre: string;
    apellido: string;
    fechaNacimiento: string;
    sexo: string;
    telefono: string;
    ciudad: string;
    correoElectronico: string;
    password: string;
}

interface RegistroProps {
    mostrarIniciarSesion: () => void;
}

const Registro: React.FC<RegistroProps> = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [msg, setMsg] = useState('');
    const [userCreado, setuserCreadoo] = useState(false);

    const handleRegistrarUser = async (values: LoginFormValues) => {
        try {
            setIsLoading(true);
            const { nombre, apellido, fechaNacimiento, sexo, telefono, ciudad, correoElectronico, password } = values;
            const result = await PostRegistrarUser(nombre, apellido, fechaNacimiento, sexo, telefono, ciudad, correoElectronico, password);
            if (result.resultado === false) {
                setMsg(result.message);
            } else {
                setMsg(result.message);
                setuserCreadoo(true);
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
                <IonIcon icon={personAdd} />
            </div>
            {userCreado ? (
                <>
                    <h3>Registro completado</h3>
                    <div className=' color_IconoLogin'>
                        <IonIcon icon={checkmarkCircleOutline} />
                    </div>
                    <i className='mensajeCambio'>{msg}</i>
                </>

            ) : (
                <>
                    <h3>Únete</h3>
                    <p>¡Bienvenido/a! Comienza completando este sencillo formulario para registrarte. Es rápido y fácil.</p>
                    <Formik
                        initialValues={{
                            nombre: '',
                            apellido: '',
                            fechaNacimiento: '',
                            sexo: '',
                            telefono: '',
                            ciudad: '1',
                            password: '',
                            correoElectronico: '',
                            passwordCorregido: '',
                        }}
                        validate={(valor_user) => {
                            let errors: any = {};
                            if (!valor_user.nombre) {
                                errors.nombre = 'Ingrese su nombre(s) completo.';
                            }
                            if (!valor_user.apellido) {
                                errors.apellido = 'Ingrese su apellido(s) completo.';
                            }
                            if (!valor_user.fechaNacimiento) {
                                errors.fechaNacimiento = 'Ingrese su fecha de nacimiento.';
                            }
                            if (!valor_user.sexo) {
                                errors.sexo = 'Selecciona tu sexo.';
                            }
                            if (!valor_user.telefono) {
                                errors.telefono = 'Ingresa tu número de celular o teléfono.';
                            }

                            if (!valor_user.correoElectronico) {
                                errors.correoElectronico = 'Ingresa una dirección de correo electrónico válida.';
                            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valor_user.correoElectronico)) {
                                errors.correoElectronico = 'Ingresa una dirección de correo electrónico válida.';
                            }

                            if (!valor_user.password) {
                                errors.password = 'Ingresa una contraseña válida.';
                            } else {
                                if (!/(?=.*[A-Z])/.test(valor_user.password)) {
                                    errors.password = 'Debe contener al menos una mayúscula';
                                }
                                if (!/(?=.*\d)/.test(valor_user.password)) {
                                    errors.password = 'Debe contener al menos un número';
                                }
                                if (valor_user.password.length < 8) {
                                    errors.password = 'Debe tener una longitud mayor a 7 caracteres';
                                }

                                if (
                                    !/(?=.*[A-Z])(?=.*\d).{8,}/.test(valor_user.password) &&
                                    !errors.password // Verificar si no hay errores individuales ya establecidos
                                ) {
                                    errors.password = 'La contraseña debe contener al menos una mayúscula, un número y tener una longitud mayor a 7 caracteres';
                                }
                            }

                            if (valor_user.passwordCorregido !== valor_user.password) {
                                errors.passwordCorregido = 'Las contraseñas no coinciden';
                            } else if (!valor_user.passwordCorregido) {
                                errors.passwordCorregido = 'Ingresa nuevamente la contraseña.';
                            }
                            return errors;
                        }}
                        onSubmit={handleRegistrarUser}
                    >
                        {({ errors, isSubmitting, touched }) => (
                            <Form>
                                <div className='Formulario_Registrarse_Input'>
                                    <label htmlFor='correo_remember'>Nombre(s)</label>
                                    <Field
                                        type='text'
                                        name='nombre'
                                        placeholder='Ingrese su nombre(s) completo.'
                                        className={errors.nombre && touched.nombre ? 'Input_Border_Red' : ''}
                                    />
                                    <ErrorMessage name='nombre' component={() => <div className='error'>{errors.nombre}</div>} />
                                </div>
                                <div className='Formulario_Registrarse_Input'>
                                    <label htmlFor='correo_remember'>Apellido(s)</label>
                                    <Field
                                        type='text'
                                        name='apellido'
                                        placeholder='Ingrese su apellido(s) completo.'
                                        className={errors.apellido && touched.apellido ? 'Input_Border_Red' : ''}
                                    />
                                    <ErrorMessage name='apellido' component={() => <div className='error'>{errors.apellido}</div>} />
                                </div>
                                <div className='Formulario_Registrarse_Input'>
                                    <label htmlFor='correo_remember'>Fecha de nacimiento</label>
                                    <Field
                                        type='date'
                                        name='fechaNacimiento'
                                        placeholder='Ingrese su apellido(s) completo.'
                                        className={errors.fechaNacimiento && touched.fechaNacimiento ? 'Input_Border_Red' : ''}
                                    />
                                    <ErrorMessage name='fechaNacimiento' component={() => <div className='error'>{errors.fechaNacimiento}</div>} />
                                </div>
                                <div className='Formulario_Registrarse_Input'>
                                    <label htmlFor='correo_remember'>Selecciona tu sexo</label>
                                    <Field
                                        as="select"
                                        name="sexo"
                                        className={errors.sexo && touched.sexo ? 'Input_Border_Red' : ''}
                                    >
                                        <option value="">Selecciona</option>
                                        <option value="Femenino">Femenino</option>
                                        <option value="Masculino">Masculino</option>
                                    </Field>
                                    <ErrorMessage name='sexo' component={() => <div className='error'>{errors.sexo}</div>} />
                                </div>

                                <div className='Formulario_Registrarse_Input'>
                                    <label htmlFor='correo_remember'>Número de celular o teléfono</label>
                                    <Field
                                        type='text'
                                        name='telefono'
                                        placeholder='Ingresa tu número de celular o teléfono.'
                                        className={errors.telefono && touched.telefono ? 'Input_Border_Red' : ''}
                                    />
                                    <ErrorMessage name='telefono' component={() => <div className='error'>{errors.telefono}</div>} />
                                </div>
                                <div className='Formulario_Registrarse_Input'>
                                    <label htmlFor='correoElectronico'>Correo Electrónico</label>
                                    <Field
                                        type='email'
                                        name='correoElectronico'
                                        placeholder='email@ejemplo.com'
                                        className={errors.correoElectronico && touched.correoElectronico ? 'Input_Border_Red' : ''}
                                    />
                                    <ErrorMessage name='correoElectronico' component={() => <div className='error'>{errors.correoElectronico}</div>} />
                                </div>
                                <div className='Formulario_Registrarse_Input'>
                                    <label htmlFor='codigo'>Contraseña</label>
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

                                <i className='mensaje'>{msg}</i>
                                <BotonSubmit texto={'Registrarme'} isLoading={isLoading} isSubmitting={isSubmitting} onClick={() => handleRegistrarUser} color="guardar"/>
                            </Form>
                        )}
                    </Formik>
                </>
            )}
            <div className='Formulario_Registrarse_Yacuenta'>
                <p onClick={props.mostrarIniciarSesion}>
                    <IonIcon icon={chevronBack} /> <span>Volver a Iniciar sesión</span>
                </p>
            </div>

        </div>
    )
}

export default Registro