import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { BotonSubmit } from '../../../components/BotonSubmit';
import './Form.css'
import { UbicacionPagina } from '../../../components/UbicacionPagina'
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from '../../../components/Modal';
import { FileInput } from '../../../components/CargaFile';


const FormExample: React.FC = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [msg, setMsg] = useState('');

    const [isModalUno, setIsModalUno] = useState(false);
    const [isModalDos, setIsModalDos] = useState(false);

    const openModal = (accion: number) => {
        if (accion === 1) {
            setIsModalUno(true);
        } else if (accion === 2) {
            setIsModalDos(true);
        }
    };

    const closeModal = (accion: number) => {
        if (accion === 1) {
            setIsModalUno(false);
        } else if (accion === 2) {
            setIsModalDos(false);
        }
    };



    const handleRegistrarUser = async () => {
        try {
            setIsLoading(true)
            setMsg('true')
            msg
        } catch (error) {

        }
    };

    const options = [
        { value: 'option1', label: 'Rojo' },
        { value: 'option2', label: 'Negro' },
        { value: 'option3', label: 'Azul' },
        // Agrega más opciones según tus necesidades
    ];

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
                        <h2>Ejemplo básico uno</h2>
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
                        <h2>Ejemplo básico dos</h2>
                        <p>Un diseño básico de un formulario.</p>
                    </div>
                    <Formik
                        initialValues={{
                            select: '',
                        }}
                        validate={(valor_user) => {
                            let errors: any = {};
                            if (!valor_user.select) {
                                errors.select = 'Selecciona un color';
                            }

                            return errors;
                        }}
                        onSubmit={handleRegistrarUser}
                    >
                        {({ errors, isSubmitting, touched }) => (
                            <Form>
                                <div className='Formulario_Contendedor_Input '>
                                    <label htmlFor='color'>Selecciona un color</label>
                                    <Field
                                        name="color"
                                        className={errors.select && touched.select ? 'Input_Border_Red' : ''}
                                        component={Select}
                                        options={options}
                                        isClearable={true}
                                    />
                                    <ErrorMessage name='select' component={() => <div className='error'>{errors.select}</div>} />
                                </div>
                                <div className='Formulario_Contendedor_Input '>
                                    <label htmlFor="selectedOptions">Selecciona múltiples opciones</label>
                                    <Field
                                        name="colors"
                                        isMulti
                                        component={Select}
                                        options={options}
                                        lassName={errors.select && touched.select ? 'Input_Border_Red' : ''}
                                        classNamePrefix="select"
                                    />
                                </div>

                                <div className='Formulario_Contendedor_Input '>
                                    <label htmlFor="selectedOptions">Selecciona múltiples opciones y crea una opcion más</label>
                                    <Field
                                        name="colors"
                                        isMulti
                                        component={CreatableSelect}
                                        options={options}
                                        lassName={errors.select && touched.select ? 'Input_Border_Red' : ''}
                                        classNamePrefix="select"
                                        Id="Idcolors"
                                    />
                                </div>

                                <div className='Formulario_Contendedor_Input Formulario_Contendedor_Check'>

                                    <Field
                                        type="checkbox"
                                        name="toggle"
                                        className="Checkbox_Input"
                                    />
                                    <label> Acepto los términos y condiciones  </label>
                                </div>


                                <div className='Contenedor_Botones'>
                                    <div>
                                        <BotonSubmit texto={'Guardar'} isLoading={isLoading} isSubmitting={isSubmitting} onClick={() => handleRegistrarUser} color="enviar" />
                                    </div>
                                    <div>
                                        <BotonSubmit texto={'Cancelar'} isLoading={isLoading} isSubmitting={isSubmitting} onClick={() => handleRegistrarUser} color="eliminar" />
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>

                <div className='Formulario_Contendedor columna-12'>
                    <div className='Formulario_Contendedor_Titulo'>
                        <h2>Ejemplo de formulario GRID</h2>
                        <p>Un diseño básico de un formulario.</p>
                    </div>
                    <Formik
                        initialValues={{
                            ejemplo: '',
                            fecha: '',
                        }}
                        validate={(valor_user) => {
                            let errors: any = {};
                            if (!valor_user.ejemplo) {
                                errors.ejemplo = 'Campo requerido.';
                            }

                            return errors;
                        }}
                        onSubmit={handleRegistrarUser}
                    >
                        {({ errors, isSubmitting, touched, setFieldValue, values }) => (
                            <Form>
                                <div className='Formulario_Row'>
                                    <div className='col-4'>
                                        <div className='Formulario_Contendedor_Input'>
                                            <label htmlFor='correo_remember'>Label de ejemplo col-4</label>
                                            <Field
                                                type='text'
                                                name='ejemplo'
                                                placeholder='Ingrese un texto.'
                                                className={errors.ejemplo && touched.ejemplo ? 'Input_Border_Red' : ''}
                                            />
                                            <ErrorMessage name='ejemplo' component={() => <div className='error'>{errors.ejemplo}</div>} />
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className='Formulario_Contendedor_Input'>
                                            <label htmlFor='correo_remember'>Label de ejemplo col-4</label>
                                            <Field
                                                type='text'
                                                name='ejemplo'
                                                disabled={true}
                                                placeholder='Ingrese un texto.'
                                                className={errors.ejemplo && touched.ejemplo ? 'Input_Border_Red' : ''}
                                            />
                                            <ErrorMessage name='ejemplo' component={() => <div className='error'>{errors.ejemplo}</div>} />
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className='Formulario_Contendedor_Input'>
                                            <label htmlFor='correo_remember'>Label de ejemplo col-4</label>

                                            <DatePicker
                                                selected={values.fecha ? new Date(values.fecha) : null}
                                                name="fecha"
                                                onChange={(date) => setFieldValue('fecha', date)} // Actualiza el valor del campo fecha en Formik
                                                dateFormat="dd/MM/yyyy" // Opcional: formato de fecha a mostrar en el datepicker
                                                placeholderText="DD/MM/YYYY"



                                            />
                                            <ErrorMessage name='ejemplo' component={() => <div className='error'>{errors.ejemplo}</div>} />
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className='Formulario_Contendedor_Input'>
                                            <label htmlFor='correo_remember'>Label de ejemplo col-4</label>
                                            <Field
                                                type='text'
                                                name='ejemplo'
                                                placeholder='Ingrese un texto.'
                                                className={errors.ejemplo && touched.ejemplo ? 'Input_Border_Red' : ''}
                                            />
                                            <ErrorMessage name='ejemplo' component={() => <div className='error'>{errors.ejemplo}</div>} />
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='Formulario_Contendedor_Input'>
                                            <label htmlFor='correo_remember'>Label de ejemplo col-6</label>
                                            <Field
                                                type='text'
                                                name='ejemplo'
                                                placeholder='Ingrese un texto.'
                                                className={errors.ejemplo && touched.ejemplo ? 'Input_Border_Red' : ''}
                                            />
                                            <ErrorMessage name='ejemplo' component={() => <div className='error'>{errors.ejemplo}</div>} />
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='Formulario_Contendedor_Input'>
                                            <label htmlFor='correo_remember'>Label de ejemplo col-6</label>
                                            <Field
                                                type='text'
                                                name='ejemplo'
                                                placeholder='Ingrese un texto.'
                                                className={errors.ejemplo && touched.ejemplo ? 'Input_Border_Red' : ''}
                                            />
                                            <ErrorMessage name='ejemplo' component={() => <div className='error'>{errors.ejemplo}</div>} />
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='Formulario_Contendedor_Input'>
                                            <label htmlFor='correo_remember'>Label de ejemplo col-12</label>
                                            <Field
                                                as="textarea"
                                                name='ejemplo'
                                                placeholder='Ingrese un texto.'
                                                className={errors.ejemplo && touched.ejemplo ? 'Input_Border_Red' : ''}
                                            />
                                            <ErrorMessage name='ejemplo' component={() => <div className='error'>{errors.ejemplo}</div>} />
                                        </div>
                                    </div>
                                </div>

                                <BotonSubmit texto={'Guardar'} isLoading={isLoading} isSubmitting={isSubmitting} onClick={() => handleRegistrarUser} color="enviar" />
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className='Formulario_Contendedor columna-4'>
                    <div className='Formulario_Contendedor_Titulo'>
                        <h2>Formulario en modal 1</h2>
                        <p>Un diseño de grupo de formularios dentro de un panel modal.</p>
                    </div>
                    <BotonSubmit texto={'Abrir modal 1'} onClick={() => openModal(1)} color="modal" />
                </div>
                <div className='Formulario_Contendedor columna-4'>
                    <div className='Formulario_Contendedor_Titulo'>
                        <h2>Formulario en modal 2</h2>
                        <p>Un diseño de grupo de formularios dentro de un panel modal.</p>
                    </div>
                    <BotonSubmit texto={'Abrir modal 2'} onClick={() => openModal(2)} color="modal" />
                </div>
                <div className='Formulario_Contendedor columna-4'>
                    <h2>Selecciona un archivo</h2>
                    <FileInput accept=".png, .jpg, .pdf" />
                </div>
                <div className='Formulario_Contendedor columna-4'>

                </div>
            </div>

            <Modal abrir={isModalUno} cerrar={() => closeModal(1)}>
                <div className='Formulario_Contendedor_Titulo'>
                    <h2>Ejemplo de formulario GRID</h2>
                    <p>Un diseño básico de un formulario.</p>
                </div>
                <Formik
                    initialValues={{
                        ejemplo: '',
                    }}
                    validate={(valor_user) => {
                        let errors: any = {};
                        if (!valor_user.ejemplo) {
                            errors.ejemplo = 'Campo requerido.';
                        }

                        return errors;
                    }}
                    onSubmit={handleRegistrarUser}
                >
                    {({ errors, isSubmitting, touched }) => (
                        <Form>

                            <div className='Formulario_Contendedor_Input'>
                                <label htmlFor='correo_remember'>Label de ejemplo col-12</label>
                                <Field
                                    type='text'
                                    name='ejemplo'
                                    placeholder='Ingrese un texto.'
                                    className={errors.ejemplo && touched.ejemplo ? 'Input_Border_Red' : ''}
                                />
                                <ErrorMessage name='ejemplo' component={() => <div className='error'>{errors.ejemplo}</div>} />
                            </div>
                            <div className='Formulario_Contendedor_Input'>
                                <label htmlFor='correo_remember'>Label de ejemplo col-12</label>
                                <Field
                                    type='text'
                                    name='ejemplo'
                                    placeholder='Ingrese un texto.'
                                    className={errors.ejemplo && touched.ejemplo ? 'Input_Border_Red' : ''}
                                />
                                <ErrorMessage name='ejemplo' component={() => <div className='error'>{errors.ejemplo}</div>} />
                            </div>

                            <div className='Formulario_Contendedor_Input'>
                                <label htmlFor='correo_remember'>Label de ejemplo col-12</label>
                                <Field
                                    type='text'
                                    name='ejemplo'
                                    placeholder='Ingrese un texto.'
                                    className={errors.ejemplo && touched.ejemplo ? 'Input_Border_Red' : ''}
                                />
                                <ErrorMessage name='ejemplo' component={() => <div className='error'>{errors.ejemplo}</div>} />
                            </div>
                            <BotonSubmit texto={'Guardar'} isLoading={isLoading} isSubmitting={isSubmitting} onClick={() => handleRegistrarUser} color="enviar" />
                        </Form>
                    )}
                </Formik>
            </Modal>

            <Modal abrir={isModalDos} cerrar={() => closeModal(2)}>
                <h2>Modal ejmplo dos</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, totam quo odio quae optio numquam officiis. Incidunt maiores qui blanditiis neque! Repellat aspernatur accusamus numquam exercitationem ducimus officia sapiente voluptas?
                    Unde beatae laudantium, molestiae veritatis atque facilis explicabo sit, aliquid eius tempore eaque sint deserunt magni nam consequatur exercitationem perspiciatis neque voluptatibus officia tenetur esse adipisci. Optio facere quo aliquam!
                    Minus at corrupti itaque velit et est reiciendis, hic ea impedit enim, quis dolor rem dolorem? Nam iure facere magnam doloremque accusamus, aliquid deserunt illo molestias velit voluptas unde quae?
                    Ipsam omnis commodi esse. Omnis rerum at minus deleniti commodi, ipsum atque recusandae ex aliquam doloribus natus quibusdam, pariatur perferendis impedit praesentium, nulla consequuntur blanditiis cum adipisci vero ipsa assumenda.
                    Dolor sed enim incidunt architecto odit minus qui quasi temporibus! Voluptatum obcaecati dicta incidunt magni accusamus! Excepturi natus cum magnam ex in sit. Rerum id cumque tenetur, sint ratione quos?
                    Necessitatibus, tenetur. Reiciendis placeat at eos facere minus velit nam iste fuga itaque debitis animi voluptatum deleniti libero nisi ratione id voluptatem sapiente et ullam qui, accusantium quas. Exercitationem, similique?
                    Atque cum magnam deleniti possimus illum et fugit quam facere alias impedit. Sunt inventore accusantium earum praesentium, optio iusto assumenda necessitatibus asperiores itaque nemo nulla ut, nisi, ipsa cupiditate. Id.
                    Tenetur quas voluptatibus illo rerum unde eaque fugit nulla, voluptatum delectus, sit placeat eos dolor, nihil provident tempora. Nihil iure deserunt expedita vitae eos ut doloremque ducimus excepturi ullam porro!
                    Quidem officia delectus saepe possimus sapiente aliquid laborum, magnam quae quaerat aspernatur corrupti, odio consequuntur temporibus praesentium dicta in laudantium corporis recusandae minima omnis. Facilis commodi cupiditate tempora voluptatibus eos!
                    Tempore alias corporis adipisci quibusdam officia dolorem repellendus animi, laborum quod sint voluptas architecto possimus id amet fugit eveniet quaerat consectetur inventore rerum assumenda et provident modi harum error. Libero!</p>
            </Modal>



        </div>
    )
}

export default FormExample