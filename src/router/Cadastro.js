import React from 'react';
import '../assets/css/Login.css';
import { Link } from 'react-router-dom';

function Cadastro() {
    return <div classNameName='container'>
        <section className="text-center text-lg-start">
            <div className="container py-4">
                <div className="row g-0 align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="card cascading-right">
                            <div className="card-body p-5 shadow-5 text-center">
                                <h2 className="fw-bold mb-5">Inscreva-se agora</h2>
                                <form action="/admin/email/formCadastro.php" method="POST">
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input type="text" id="nome" className="form-control" name="nome" />
                                                <label className="form-label" for="nome">Nome</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input type="text" id="sobrenome" className="form-control" name="sobrenome" />
                                                <label className="form-label" for="sobrenome">Sobrenome</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="email" id="email" className="form-control" name="email" />
                                        <label className="form-label" for="email">E-mail</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <div className="form-outline password-input-container">
                                            <input type="password" id="senha" className="form-control" name="senha" />
                                            <label className="form-label" for="senha">Senha</label>
                                            <div className="eye-icon-container" onclick="togglePasswordVisibility()">
                                                <i className="eye-icon fas fa-eye-slash"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" name="submit" className="btn btn-form btn-outline-primary mb-4"
                                        id="btn-formulario">Quero me
                                        cadastrar</button>
                                    <div className="text-center">
                                        <p>ou inscreva-se com:</p>
                                    </div>
                                </form>
                                <div>
                                    <h6 className="mb-0">Já tem uma conta?
                                        <Link to='/Login' className='btn me-3 py-2'>Faça Login</Link>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                            className="w-100 rounded-4 shadow-4" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>;
}

export default Cadastro;
