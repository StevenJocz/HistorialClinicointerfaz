import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { BotonSubmit } from '../../../components/BotonSubmit';
import './Form.css'
import { UbicacionPagina } from '../../../components/UbicacionPagina'


const FormExample: React.FC = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [msg, setMsg] = useState('');
    const handleRegistrarUser = async () => {
        try {


        } catch (error) {

        }
    };
    return (
        <div>
            <div className="Formulario_Header">
                <div className='Formulario_Headero_Ubicacion'>
                    <h1>Formulario de ejemplo</h1>
                    <UbicacionPagina ubicacion='Formulario de ejemplo' />
                </div>
                <div>

                </div>
            </div>
            <div className='Formulario_Row'>
                <div className='Formulario_Contendedor columna-6'>
                    <div className='Formulario_Contendedor_Titulo'>
                        <h2>Ejemplo básico</h2>
                        <p>Un diseño básico de un formulario.</p>
                    </div>
                    <Formik
                        initialValues={{
                            nombre: '',
                            Edad: '',
                            ciudad: '1',
                            password: '',
                            correoElectronico: '',
                        }}
                        validate={(valor_user) => {
                            let errors: any = {};
                            if (!valor_user.nombre) {
                                errors.nombre = 'Ingrese su nombre(s) completo.';
                            }
                            if (!valor_user.Edad) {
                                errors.Edad = 'Introduce tu edad.';
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

                            return errors;
                        }}
                        onSubmit={handleRegistrarUser}
                    >
                        {({ errors, isSubmitting, touched }) => (
                            <Form>
                                <div className='Formulario_Contendedor_Input '>
                                    <label htmlFor='correo_remember'>Nombre(s)</label>
                                    <Field
                                        type='text'
                                        name='nombre'
                                        placeholder='Ingrese su nombre(s) completo.'
                                        className={errors.nombre && touched.nombre ? 'Input_Border_Red' : ''}
                                    />
                                    <ErrorMessage name='nombre' component={() => <div className='error'>{errors.nombre}</div>} />
                                </div>
                                <div className='Formulario_Contendedor_Input'>
                                    <label htmlFor='correo_remember'>Edad</label>
                                    <Field
                                        type='number'
                                        name='Edad'
                                        placeholder='Introduce tu edad'
                                        className={errors.Edad && touched.Edad ? 'Input_Border_Red' : ''}
                                    />
                                    <ErrorMessage name='Edad' component={() => <div className='error'>{errors.Edad}</div>} />
                                </div>
                                <div className='Formulario_Contendedor_Input'>
                                    <label htmlFor='correoElectronico'>Correo Electrónico</label>
                                    <Field
                                        type='email'
                                        name='correoElectronico'
                                        placeholder='email@ejemplo.com'
                                        className={errors.correoElectronico && touched.correoElectronico ? 'Input_Border_Red' : ''}
                                    />
                                    <ErrorMessage name='correoElectronico' component={() => <div className='error'>{errors.correoElectronico}</div>} />
                                </div>
                                <div className='Formulario_Contendedor_Input'>
                                    <label htmlFor='codigo'>Contraseña</label>
                                    <Field
                                        type='password'
                                        name='password'
                                        placeholder='******'
                                        className={errors.password && touched.password ? 'Input_Border_Red' : ''}
                                    />
                                    <ErrorMessage name='password' component={() => <div className='error'>{errors.password}</div>} />
                                </div>
                                <BotonSubmit texto={'Guardar'} isLoading={isLoading} isSubmitting={isSubmitting} onClick={() => handleRegistrarUser} color="enviar" />
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className='Formulario_Contendedor columna-6'>

                    <div className='Formulario_Contendedor_Titulo'>
                        <h2>Ejemplo básico</h2>
                        <p>Un diseño básico de un formulario.</p>
                    </div>
                    <Formik
                        initialValues={{
                            select: '',
                        }}
                        validate={(valor_user) => {
                            let errors: any = {};
                            if (!valor_user.select) {
                                errors.select = 'Ingrese su nombre(s) completo.';
                            }

                            return errors;
                        }}
                        onSubmit={handleRegistrarUser}
                    >
                        {({ errors, isSubmitting, touched }) => (
                            <Form>
                                <div className='Formulario_Contendedor_Input '>
                                    <label htmlFor='correo_remember'>Selecciona un color</label>
                                    <Field as="select" name="color"
                                        className={errors.select && touched.select ? 'Input_Border_Red' : ''}

                                    >
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>

                                    </Field>
                                    <ErrorMessage name='select' component={() => <div className='error'>{errors.select}</div>} />
                                </div>
                                <BotonSubmit texto={'Guardar'} isLoading={isLoading} isSubmitting={isSubmitting} onClick={() => handleRegistrarUser} color="enviar" />
                            </Form>
                        )}
                    </Formik>
                </div>
















                <div className='Formulario_Contendedor columna-12'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quos mollitia quae tempore corporis optio quas in quod placeat pariatur earum nesciunt culpa, consectetur ducimus ut exercitationem, deleniti dolores minus!
                </div>
                <div className='Formulario_Contendedor columna-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quos mollitia quae tempore corporis optio quas in quod placeat pariatur earum nesciunt culpa, consectetur ducimus ut exercitationem, deleniti dolores minus!
                </div>
                <div className='Formulario_Contendedor columna-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quos mollitia quae tempore corporis optio quas in quod placeat pariatur earum nesciunt culpa, consectetur ducimus ut exercitationem, deleniti dolores minus!
                </div>
                <div className='Formulario_Contendedor columna-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quos mollitia quae tempore corporis optio quas in quod placeat pariatur earum nesciunt culpa, consectetur ducimus ut exercitationem, deleniti dolores minus!
                </div>
                <div className='Formulario_Contendedor columna-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quos mollitia quae tempore corporis optio quas in quod placeat pariatur earum nesciunt culpa, consectetur ducimus ut exercitationem, deleniti dolores minus!
                </div>
            </div>
        </div>
    )
}

export default FormExample