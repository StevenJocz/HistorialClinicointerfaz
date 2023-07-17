import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { PrivateRoutes, Roles } from '../model';
import { AppStore } from '../redux/store';

interface Props {
  rol: Roles;
}

function RoleGuard({ rol }: Props) {
  const userState = useSelector((store: AppStore) => store.user);
  return userState.token === rol ? <Outlet /> : <Navigate replace to={PrivateRoutes.PRIVATE} />;
}
export default RoleGuard;