import React from 'react';
import { Link } from 'react-router-dom';

function NavMobile() {
    return (
        <div classNameName=''>
            <div class="container justify-content-end align-content-end text-end bar-mobile">
                <a href="#" class="" data-bs-toggle="modal" data-bs-target="#menuMobile">
                    <i class="bi bi-three-dots-vertical"></i>
                </a>
            </div>
            <div class="modal fade" id="menuMobile" tabindex="-1" aria-labelledby="menuMobileLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="pacoteBasicLabel">Agência Octopus</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body list-group">
                            <Link to='/' className='btn me-0 py-2'>Inicio</Link>
                            <Link to='./Cadastro' className='btn me-0 py-2'>Cadastro</Link>
                            <Link to='./Login' className='btn me-0 py-2'>Login</Link>
                            <Link to='./Sobre' className='btn me-0 py-2'>Sobre</Link>
                            <Link to='./Suporte' className='btn me-0 py-2'>Suporte</Link>
                            <Link to='./Contato' className='btn me-0 py-2'>Contato</Link>
                            <Link to='./Pacotes' className='btn me-0 py-2'>Pacotes</Link>
                            <Link to='./Politica' className='btn me-0 py-2'>Política</Link>
                            <Link to='./Termos' className='btn me-0 py-2'>Termos</Link>
                            <Link to='./' class="btn me-0 py-2" id="mobileButton"><i class="bi bi-moon-stars-fill "></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavMobile;
