import React from 'react';
import { Link } from 'react-router-dom';

import construction from '../images/responses/construction.png';
import maintenance from '../images/responses/maintenance.png';


function UnderConstruction () {
    return(
        <main id="response">
            <div className="container">
                <img src={construction} alt="Icone" />
                <h1>Página em construção!</h1>
                <Link to="/">Voltar</Link>
            </div>
        </main>
    );
}

function Maintenance () {
    return(
        <main id="response">
            <div className="container">
                <img src={maintenance} alt="Icone" />
                <h1>Página em manutenção!</h1>
                <Link to="/">Voltar</Link>
            </div>
        </main>
    );
}

function Error400 () {
    return(
        <main id="response">
            <div className="container">
                <div className="error-box">
                    <span className="text-color-1">4</span>
                    <span className="text-color-2">0</span>
                    <span className="text-color-1">0</span>
                </div>

                <h1>Requisição inválida!</h1>
                <Link to="/">Voltar</Link>
            </div>
        </main>
    );
}

function Error403 () {
    return(
        <main id="response">
            <div className="container">
                <div className="error-box">
                    <span className="text-color-1">4</span>
                    <span className="text-color-2">0</span>
                    <span className="text-color-1">3</span>
                </div>

                <h1>Acesso proibido!</h1>
                <Link to="/">Voltar</Link>
            </div>
        </main>
    );
}

function Error404 () {
    return(
        <main id="response">
            <div className="container">
                <div className="error-box">
                    <span className="text-color-1">4</span>
                    <span className="text-color-2">0</span>
                    <span className="text-color-1">4</span>
                </div>

                <h1>Página não encontrada!</h1>
                <Link to="/">Voltar</Link>
            </div>
        </main>
    );
}

function Error500 () {
    return(
        <main id="response">
            <div className="container">
                <div className="error-box">
                    <span className="text-color-1">5</span>
                    <span className="text-color-2">0</span>
                    <span className="text-color-1">0</span>
                </div>

                <h1>Erro interno do servidor!</h1>
                <Link to="/">Voltar</Link>
            </div>
        </main>
    );
}

function Error503 () {
    return(
        <main id="response">
            <div className="container">
                <div className="error-box">
                    <span className="text-color-1">5</span>
                    <span className="text-color-2">0</span>
                    <span className="text-color-1">3</span>
                </div>

                <h1>Serviço indisponível!</h1>
                <Link to="/">Voltar</Link>
            </div>
        </main>
    );
}

export {
    UnderConstruction,
    Maintenance,
    Error400,
    Error403,
    Error404,
    Error500,
    Error503
}