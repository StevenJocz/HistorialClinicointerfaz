import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '../model';
import { AppStore } from '../redux/store';

interface Props {
    privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE} />;

export const AuthGuard = ({ privateValidation }: Props) => {
    const userState = useSelector((store: AppStore) => store.user);
    return userState.token ? (
        privateValidation ? (
            PrivateValidationFragment
        ) : (
            PublicValidationFragment
        )
    ) : (
        <Navigate replace to={PublicRoutes.HOME} />
    );
};

export default AuthGuard;