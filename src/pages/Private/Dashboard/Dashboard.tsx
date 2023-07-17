import Nav from "../../../components/Nav/Nav"
import Header from "../../../components/Header/Header"
import { Route } from 'react-router-dom';
import { RoutesWithNotFound } from '../../../utilities';
import {Inicio} from "../Inicio";
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="Siderbar">
        <Nav />
      </div>
      <div className="Contenido">
        <Header />
        <div className="Formularios">
          <RoutesWithNotFound>
            <Route path="/" element={<Inicio/>} />
            <Route path="/prueba" element={<div>prueba</div>} />
          </RoutesWithNotFound>
        </div>
      </div>
    </div>
  )
}
export default Dashboard