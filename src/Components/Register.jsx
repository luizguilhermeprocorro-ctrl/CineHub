import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../data/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth"

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
            setRegisterError(registerError.code)
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={handleRegister}>
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
            </form>
        </div>
    )
}

export default Register;