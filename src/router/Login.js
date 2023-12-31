import React from 'react';
import '../assets/css/Login.css';
import { Link } from 'react-router-dom';

function Login() {
    return <div classNameName='container'>
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" >
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <h6 className="text-white-50 mb-5">Por favor, entre com o seu E-mail e Senha cadastrados.</h6>
                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                                        <label className="form-label" for="typeEmailX">E-mail</label>
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                        <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                                        <label className="form-label" for="typePasswordX">Senha</label>
                                    </div>
                                    <h6 className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Esqueceu sua senha?</a>
                                    </h6>
                                    <a className="btn btn-outline-primary btn-lg px-5" type="submit">Acessar</a>
                                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                        <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                        <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                        <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="mb-0">Não tem uma conta?
                                        <Link to='/Cadastro' className='btn me-3 py-2'>Cadastre-se</Link>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>;
}

export default Login;