import React from 'react';
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import './styles.css'

import logoImg from "../../assets/logo.svg";

export default function Profile(){
    return (
        <div className="profile-container">
            <header>
            <img src={logoImg} alt="Logo"/>
            <span>Bem Vinda, APAD</span>

            <Link className="button"to="/incidents/new">Cadastro de Caso</Link>
            <button type="button">
                <FiPower size={18} color="#E02041"/>
            </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>desc test</p>
                    <strong>valor</strong>
                    <p>teste</p>

                    <button type="button">
                        <FiTrash2 size={20} color="A8A8B3" />
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>desc test</p>
                    <strong>valor</strong>
                    <p>teste</p>

                    <button type="button">
                        <FiTrash2 size={20} color="A8A8B3" />
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>desc test</p>
                    <strong>valor</strong>
                    <p>teste</p>

                    <button type="button">
                        <FiTrash2 size={20} color="A8A8B3" />
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>desc test</p>
                    <strong>valor</strong>
                    <p>teste</p>

                    <button type="button">
                        <FiTrash2 size={20} color="A8A8B3" />
                    </button>
                </li>
                
            </ul>
        </div>
    )
}