import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cadastro from "./Cadastro";
import RotaPrivada from "./RotaPrivada";
import NaoEncontrada from "./NaoEncontrada"

function App() {
  return (<Routes >
    <Route path="/" element={<Login />} />
    <Route path="/cadastro" element={<Cadastro />} />
    <Route path="/home" element={
      <RotaPrivada><Home /></RotaPrivada>
      } />
<Route path ="*"
element ={ <NaoEncontrada /> } />


  </Routes >);
}

export default App;

