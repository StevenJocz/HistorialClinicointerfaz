import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../../model';
import { resetUser, UserKey } from '../../redux/states/user';
import { clearLocalStorage } from '../../utilities';

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(PublicRoutes.HOME, { replace: true });
  };
  return <button onClick={logOut}>Log Out</button>;
}
export default Logout;