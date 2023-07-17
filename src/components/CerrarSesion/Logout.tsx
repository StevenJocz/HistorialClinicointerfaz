import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../../model';
import { resetUser, UserKey } from '../../redux/states/user';
import { clearLocalStorage } from '../../utilities';
import { IonIcon } from '@ionic/react';
import { exitOutline} from 'ionicons/icons';

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(PublicRoutes.HOME, { replace: true });
  };
  return (
    <div onClick={logOut}>
      <div className='MiPerfil_Contenido_text'>
        <IonIcon icon={exitOutline} />
        <h5>Cerrar sesión</h5>
      </div>
    </div>
  );
}
export default Logout;