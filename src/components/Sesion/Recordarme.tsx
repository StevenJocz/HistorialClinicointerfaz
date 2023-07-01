import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Sesion.css';
import { BotonSubmit } from '../BotonSubmit';

interface RecordarProps {
    mostrarIniciarSesion: () => void;
}

interface LoginFormValues {
    correoElectronico: string;
}

const Recordar: React.FC<RecordarProps> = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const Recordar = async (values: LoginFormValues) => {

        try {
            setIsLoading(true);
            const { correoElectronico } = values;
            setTimeout(() => {
                alert(JSON.stringify(correoElectronico, null, 2));
                setIsLoading(false);
            }, 3000);
        } catch (error) {
            setIsLoading(false);
        }
    };

    return (
        <div className='Formulario_Recording '>
            <h3>Olvidé mi contraseña</h3>
            <p>Se enviarán instrucciones al correo electrónico</p>
            <Formik
                initialValues={{
                    correoElectronico: ''
                }}
                validate={(valor_remember) => {
                    let errors: any = {};
                    if (!valor_remember.correoElectronico) {
                        errors.correoElectronico = 'Campo requerido';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valor_remember.correoElectronico)) {
                        errors.correoElectronico = 'Correo electrónico inválido';
                    }
                    return errors;
                }}
                onSubmit={Recordar}
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
                        <BotonSubmit texto={'Recordarme'} isLoading={isLoading} isSubmitting={isSubmitting} onClick={() => Recordar} />
                    </Form>
                )}
            </Formik>
            <div className='Formulario_Registrarse_Yacuenta'>
                <p onClick={props.mostrarIniciarSesion}>
                    <span>Volver a Iniciar sesión</span>
                </p>
            </div>
        </div>
    );
};

export default Recordar;
