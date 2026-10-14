import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const [verSenha, setVerSenha] = useState(false);
   
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();
        if (!nome || !email || !senha) {
            setErro("Preencha todos os campos.");
            return;
        }
        try {
            
            const resposta = await fetch("http://127.0.0.1:8000/usuarios", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nome, email, senha }),
            });
            const dados = await resposta.json();
            if (resposta.ok) {
                
                alert("Conta criada! Agora é só entrar.");
                navigate("/");
            } else if (resposta.status === 409) {
                // 409: o e-mail ja existe; a mensagem vem da API
                setErro(dados.detail);
            } else {
                setErro("Algo deu errado. Tente de novo.");
            }
        } catch {
            // a API esta desligada ou o CORS bloqueou
            setErro("Não foi possível falar com o servidor.");
        }
    }
    return (
    <div className="container">
    <form onSubmit={handleSubmit}>
    <h2>Criar conta</h2>
    <input
    type="text"
    placeholder="Nome"
    value={nome}
    maxLength={50}
    onChange={(e) => setNome(e.target.value)}
    />
    <input
    type="email"
    placeholder="Email"
    value={email}
    maxLength={35}
    onChange={(e) => setEmail(e.target.value)}
    />
    <div className="campo-senha">
    <input
    type={verSenha ? "text" : "password"}
    placeholder="Senha"
    value={senha}
    maxLength={15}
    onChange={(e) => setSenha(e.target.value)}
    />
    <button
    
        type="button"
        className="ver-senha"
        onClick={() => setVerSenha(!verSenha)}
    >
        {verSenha ? "Ocultar" : "Mostrar"}
        </button >
    </div>
    {erro && <p className="erro">{erro}</p>}
    <button type="submit">Cadastrar</button>
    {/* volta para o login sem recarregar a pagina */}
    <Link to="/" className="troca">Já tenho conta</Link>
    </form>
    </div>
    );
}

export default Cadastro;
