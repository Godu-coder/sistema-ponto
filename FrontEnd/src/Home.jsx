import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {

    const navigate = useNavigate();

    return (
        <div className="container-home" >
            <div className="cartao" >
                <h2 >Ponto Eletrônico </h2 >
                <p >Você entrou no sistema . </p >
                <button className="sair" onClick={sair}>
                    <Link to="/" >Sair </Link >
                </button>
            </div >
        </div >
    );
}

function sair() {
    localStorage.removeItem("logado");
    navigate("/");
}




export default Home;