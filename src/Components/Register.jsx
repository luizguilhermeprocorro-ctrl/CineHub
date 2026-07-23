import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../data/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { Link } from "react-router-dom";

function Register() {
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [registerError, setRegisterError] = useState("")
    const navigate = useNavigate()

    async function handleRegister(event) {
        event.preventDefault()
        setRegisterError("")
        if (registerPassword !== confirmPassword) {
            setRegisterError("As senhas não são iguais")
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            console.log("Cadastro feito com sucesso")
            navigate("/")
        } catch (registerError) {
            if (registerError.code === "auth/email-already-in-use") {
                setRegisterError("Este e-mail já está cadastrado")
            }
            else if (registerError.code === "auth/weak-password") {
                setRegisterError("A senha deve ter pelo menos 6 caracteres")
            }
            else if (registerError.code === "auth/invalid-email") {
                setRegisterError("Por favor insira um e-mail válido")
            }
            else if (registerError.code === "auth/missing-password") {
                setRegisterError("A senha não pode estar em branco")
            } else {
                setRegisterError("Ocorreu um erro ao tentar cadastrar, por favor tente novamente")
            }
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={handleRegister} className="login-form">
                <h2>CineHub</h2>
                <p>Faça seu cadastro para acessar nosso catálogo dos melhores filmes</p>
                <div className="input-group">
                    <label>E-mail</label>
                    <input
                        placeholder="Digite seu e-mail"
                        type="text" value={registerEmail}
                        onChange={(event) => { setRegisterEmail(event.target.value) }}>
                    </input>
                </div>
                <div className="input-group">
                    <label>Senha</label>
                    <input
                        placeholder="Digite sua senha"
                        type="password" value={registerPassword}
                        onChange={(event) => { setRegisterPassword(event.target.value) }}>
                    </input>
                </div>
                <div className="input-group">
                    <label>Confirme sua senhas</label>
                    <input
                        placeholder="Confirme sua senha"
                        type="password" value={confirmPassword}
                        onChange={(event) => { setConfirmPassword(event.target.value) }}>
                    </input>
                </div>
                {registerError && <p className="error-message">{registerError}</p>}
                <button type="submit" className="btn-enviar">Cadastre-se</button>
                <p>já tem uma conta? <Link to="/login">login</Link></p>
            </form>
        </div>
    )
}

export default Register;