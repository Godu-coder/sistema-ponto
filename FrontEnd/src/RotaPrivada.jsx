import { Navigate } from "react-router-dom";


function RotaPrivada({ children }) {
    const logado =
        localStorage.getItem("logado") === "true";
    if (!logado) {
        return <Navigate to="/" replce />;
    }
    return children;
}
export default RotaPrivada;