import Nav from "../../../components/Nav/Nav"
import Header from "../../../components/Header/Header"
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="Siderbar">
        <Nav />
      </div>
      <div className="Contenido">
        <Header/>
        <div className="Formularios">

        </div>
      </div>
    </div>
  )
}
export default Dashboard