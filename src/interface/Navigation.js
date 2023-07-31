import React from 'react';
import logo from '../assets/img/polvo96.png';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div classNameName='header-mobile' id='header-mobile'>
            <div className='container d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom'>
                <img src={logo} className='img-fluid' alt='Logo' />
                <span className='fs-4'>&nbsp;AGÊNCIA&nbsp;OCTOPUS</span>

                <nav className='d-inline-flex mt-2 mt-md-0 ms-md-auto mx-auto'>
                    <Link to='/' className='btn me-0 py-2'>Inicio</Link>
                    <Link to='./Cadastro' className='btn me-0 py-2'>Cadastro</Link>
                    <Link to='./Login' className='btn me-0 py-2'>Login</Link>
                    <Link to='./Sobre' className='btn me-0 py-2'>Sobre</Link>
                    <Link to='./Suporte' className='btn me-0 py-2'>Suporte</Link>
                    <Link to='./Contato' className='btn me-0 py-2'>Contato</Link>
                    <Link to='./Pacotes' className='btn me-0 py-2'>Pacotes</Link>
                    <Link to='./Politica' className='btn me-0 py-2'>Política</Link>
                    <Link to='./Termos' className='btn me-0 py-2'>Termos</Link>
                    <a role="button" className='btn me-0 py-2' id='colorButton'><i className='bi bi-moon-stars-fill '></i></a>
                </nav>
            </div>
        </div>
    );
}

export default Navigation;
