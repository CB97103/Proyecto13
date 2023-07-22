import './App.css';
import Login from "./components/Login"
import ProtectedRoutes from "./components/ProtectedRoutes"
import Detail from './components/Detail';
import Principal from './paginas/Principal';
import {Routes, Route} from "react-router-dom";
import Listado from './components/Listado';


function App() {
  return (
    <Routes>
    <Route path="/" element={<Login />} />
    <Route element={<ProtectedRoutes />} >
    <Route path="/Principal" element={<Principal />} />
    <Route path="/Detail/:id" element={<Detail />} /> 
    </Route>
    </Routes>
  );
}

export default App;
