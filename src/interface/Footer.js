import React from 'react';
import logo from '../assets/img/polvo96.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div classNameName=''>
            <div className='container py-3'>
                <footer className='pt-4 my-md-5 pt-md-5 border-top'>
                    <div className='row'>

                        <div className='col-6 col-md'>
                            <h5>Caracteristicas</h5>
                            <ul className='list-unstyled text-small'>
                                <li><a href='/' className='text-decoration-none mb-1'>Coisas legais</a></li>
                                <li><a href='/' className='text-decoration-none mb-1'>Recursos aleatórios</a></li>
                                <li><a href='/' className='text-decoration-none mb-1'>Recurso de equipe</a></li>
                                <li><a href='/' className='text-decoration-none mb-1'>Segurança</a></li>
                                <li><a href='/' className='text-decoration-none mb-1'>Outros</a></li>
                                <li><a href='/' className='text-decoration-none mb-1'>Atualizações</a></li>
                            </ul>
                        </div>
                        <div className='col-6 col-md'>
                            <h5>Recursos</h5>
                            <ul className='list-unstyled text-small'>
                                <li><a href='/' className='text-decoration-none mb-1'>Recusros</a></li>
                                <li><a href='/' className='text-decoration-none mb-1'>Recursos nome</a></li>
                                <li><a href='/' className='text-decoration-none mb-1'>Outros recursos</a></li>
                                <li><a href='/' className='text-decoration-none mb-1'>Recursos final</a></li>
                            </ul>
                        </div>
                        <div className='col-6 col-md'>
                            <h5>Sobre</h5>
                            <ul className='list-unstyled text-small'>
                                <li><a href='/' className='text-decoration-none mb-1'>Equipe</a></li>
                                <li><a href='/' className='text-decoration-none mb-1'>Local</a></li>
                                <li><a href='/' className='text-decoration-none mb-1'>Política de
                                    Privacidade</a></li>
                                <li><a href='/' className='text-decoration-none mb-1'>Termos de
                                    Serviço</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='container justify-content-center align-content-center mt-5 py-3'>
                        <div className='text-center'>
                            <h6>Visite &amp; Converse com a Octopus</h6>
                            <a href='/' className='mx-2 fs-1'><i className='bi bi-facebook'></i></a>
                            <a href='/' className='mx-2 fs-1'><i className='bi bi-messenger'></i></a>
                            <a href='/' className='mx-2 fs-1'><i className='bi bi-instagram'></i></a>
                            <a href='/' className='mx-2 fs-1'><i className='bi bi-whatsapp'></i></a>
                            <div className='py-3 mt-3'>
                                <h6> Desenvolvido com <span className='fs-4'>&hearts;</span> por<a to=''> &nbsp;Octopus</a></h6>
                            </div>
                        </div>
                    </div>
                </footer>

                <div className='container py-3 header-mobile'>
                    <div className='d-flex flex-column flex-md-row align-items-center pb-3 mb-3 border-bottom'>
                        <div className='col-12 col-md'>
                            <img src={logo} className='img-fluid' alt='Logo' />
                            <small className='d-block mb-3'>&copy; 2023 Octopus. Todos os direitos reservados</small>
                        </div>

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
                            <a className='btn me-0 py-2' id='footerButton'><i className='bi bi-moon-stars-fill '></i></a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
