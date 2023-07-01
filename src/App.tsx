import { lazy, Suspense, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import { AuthGuard} from './guards';
import { PrivateRoutes, PublicRoutes} from './model';
import { Dashboard } from './pages/Private';
import store from './redux/store';
import { RoutesWithNotFound } from './utilities';
import { PropagateLoader } from 'react-spinners';
import './App.css';

const Home = lazy(() => import('./pages/Home/Home'));
const Private = lazy(() => import('./pages/Private/Private'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Establecer un temporizador para 3 segundos
    const timer = setTimeout(() => {
      // Actualizar el estado para indicar que se ha completado el tiempo de espera
      setIsLoading(false);
    }, 2000);

    // Limpiar el temporizador cuando el componente se desmonte
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Suspense>
        {isLoading ? (
          // Renderizar un componente de carga mientras isLoading sea true
          <div className='PropagateLoader'>
            <PropagateLoader color="#377dff" speedMultiplier={1} size={30} />
          </div>
        ) : (
          // Renderizar el contenido principal una vez que isLoading sea false
          <Provider store={store}>
            <BrowserRouter>
              <RoutesWithNotFound>
                <Route path="/dashboard" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
                <Route path={PublicRoutes.HOME} element={<Home />} />
                <Route element={<AuthGuard privateValidation={true} />}>
                  <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
                  <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
                </Route>
              </RoutesWithNotFound>
            </BrowserRouter>
          </Provider>
        )}
      </Suspense>
    </div>
  );
}

export default App;
