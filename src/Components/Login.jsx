import React, { useState } from "react";
import { auth } from "../data/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [error, setError] = useState("")

    async function handleSubmit(event) {
        event.preventDefault()
        setError("")
        try {
            await signInWithEmailAndPassword(auth, email, password)
            console.log("Login feito com sucesso")

            navigate("/")
        } catch (error) {
            console.log("Erro no login", error);

            if (
                error.code === "auth/invalid-credential" ||
                error.code === "auth/user-not-found" ||
                error.code === "auth/wrong-password"
            ) {
                setError("E-mail ou senha incorretos");
            } else {
                setError("Ocorreu um erro ao tentar entrar, tente novamente");
            }
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h2>CineHub</h2>
                <p>Faça login para acessar seus filmes favoritos</p>

                <div className="input-group">
                    <label>E-mail</label>
                    <input
                        placeholder="Digite seu email"
                        type="text"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}></input>
                </div>
                <div className="input-group">
                    <label>Senha</label>
                    <input
                        placeholder="Digite sua senha"
                        type="password"
                        value={password}
                        onChange={(event) => setpassword(event.target.value)}></input>
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="btn-enviar">Entrar</button>
            </form>
        </div>
    )
}

export default Login;