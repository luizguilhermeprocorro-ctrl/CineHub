import React, { useState } from "react";
import '../App.css';
import { Link } from "react-router-dom";

function Header({ onSearch }) {

    const [inputValue, setInputValue] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        console.log("O usuario buscou por", inputValue)
        onSearch(inputValue)
    }

    return (
        <header className="header">
            <div className="logo">
                <h1>Cine<span>Hub</span></h1>
            </div>
            <form
                className="searchForm"
                onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Busque um filme"
                    className="searchInput"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}>
                </input>
                <button
                    type="submit"
                    className="searchButton"
                >Buscar
                </button>
                <Link to="./Login" className="btn-entrar">Entrar</Link>
            </form>
        </header>
    )
}

export default Header;