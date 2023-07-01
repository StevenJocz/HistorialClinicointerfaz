import { Route, Routes } from 'react-router-dom';
import Error404 from '../pages/Error404/Error404';

interface Props {
  children: JSX.Element[] | JSX.Element;
}
function RoutesWithNotFound({ children }: Props) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<Error404/>} />
    </Routes>
  );
}
export default RoutesWithNotFound;


