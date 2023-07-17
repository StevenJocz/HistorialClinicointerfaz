import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { PostEnviarCodigo } from '../../services';
import { BotonSubmit } from '../BotonSubmit';
import { IonIcon } from '@ionic/react';
import { mailUnreadOutline} from 'ionicons/icons';
import CambioPassword  from './CambioPassword';
import './Sesion.css';

interface CodigoProps {
    correoElectronico: string;
}

interface CodigoFormValues {
    correoElectronico: string;
    codigo: string;
}

const Codigo: React.FC<CodigoProps> = ({ correoElectronico }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [msg, setMsg] = useState('');
    const [mostrarCambioPassword, setmostrarCambioPassword] = useState(false);

    const handleEnviarCodigo = async (values: CodigoFormValues) => {
        try {
            setIsLoading(true);
            const { correoElectronico, codigo } = values;

            const result = await PostEnviarCodigo(correoElectronico, codigo);
            if (result.resultado === false) {
                setMsg(result.message);
            } else {
                setMsg(result.message);
                setmostrarCambioPassword(true);
            }
            setIsLoading(false);
        } catch (error) {
            setMsg('Estamos presentando inconvenientes. Por favor, vuelva a intentarlo más tarde.');
            setIsLoading(false);
        }
    };

    return (
        <div className='Formulario_Recording'>
            {!mostrarCambioPassword ? (
                <>
                    <div className='iconoLogin'>
                    <IonIcon icon={mailUnreadOutline}/>
                    </div>
                    <h3>¡Correo electrónico enviado!</h3>
                    <p>Por favor, revisa tu bandeja de entrada y sigue las instrucciones proporcionadas en el correo electrónico para completar el proceso.</p>
                    <Formik
                        initialValues={{
                            correoElectronico: correoElectronico,
                            codigo: '',
                        }}
                        validate={(values) => {
                            let errors: any = {};
                            if (!values.codigo) {
                                errors.codigo = 'Campo requerido';
                            }
                            return errors;
                        }}
                        onSubmit={handleEnviarCodigo}
                    >
                        {({ errors, isSubmitting, touched }) => (
                            <Form>
                                <div className='Formulario_Registrarse_Input'>
                                    <label htmlFor='codigo'>Digite el código</label>
                                    <Field
                                        type='text'
                                        name='codigo'
                                        placeholder='123456'
                                        className={errors.codigo && touched.codigo ? 'Input_Border_Red' : ''}
                                    />
                                    <ErrorMessage name='codigo' component={() => <div className='error'>{errors.codigo}</div>} />
                                </div>
                                <i className='mensaje'>{msg}</i>
                                <BotonSubmit texto='Enviar Código' isLoading={isLoading} isSubmitting={isSubmitting} onClick={() => handleEnviarCodigo} />
                            </Form>
                        )}
                    </Formik>
                </>
            ) : (
                <CambioPassword correoElectronico={correoElectronico} />
            )}
        </div>
    );
}

export default Codigo;
