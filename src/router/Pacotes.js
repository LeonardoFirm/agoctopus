import React from 'react';

function Pacotes() {
    return <div className='container' id='container-pacote'>
        <div class="pricing-header p-3 pb-md-4 mx-auto text-center mt-5" id="pacotes">
            <h1 class="display-4 fw-normal">Pacotes</h1>
            <p class="fs-5 ">
                Conheça um pouco do diferencial de nossos pacotes
            </p>
        </div>

        <div class="row row-cols-1 row-cols-md-4 mb-3 text-center">
            <div class="col">
                <div class="bg-card card mb-4 rounded-3 shadow-sm">
                    <div class="card-header py-3">
                        <h4 class=" fw-normal">Basic</h4>
                    </div>
                    <div class="card-body">
                        <h1 class=" card-title pricing-card-title price"><sup class="currency">R$ </sup>880<small
                            class="fw-light fs-5">/mês</small>
                        </h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <a type="button" class="w-100 btn btn-pacote btn-lg btn-outline-secondary shadow-sm" data-bs-toggle="modal"
                            data-bs-target="#pacoteBasic">Saiba mais</a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="bg-card card mb-4 rounded-3 shadow-sm">
                    <div class="card-header py-3">
                        <h4 class=" fw-normal">Medium</h4>
                    </div>
                    <div class="card-body">
                        <h1 class=" card-title pricing-card-title price"><sup class="currency">R$ </sup>1.350<small
                            class="fw-light fs-5">/mês</small>
                        </h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <a type="button" class="w-100 btn btn-pacote btn-lg btn-outline-secondary shadow-sm">Saiba mais</a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="bg-card card mb-4 rounded-3 shadow-sm border-secondary">
                    <div class="card-header py-3 bg-octopus border-secondary">
                        <h4 class=" fw-normal">Premium</h4>
                    </div>
                    <div class="card-body">
                        <h1 class=" text-ard-title pricing-card-title price"><sup class="currency">R$ </sup>1.950<small
                            class="fw-light fs-5">/mês</small>
                        </h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <aa type="button" class="w-100 btn btn-pacote btn-lg btn-primary shadow-sm">Saiba mais</aa>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="bg-card card mb-4 rounded-3 shadow-sm">
                    <div class="card-header py-3">
                        <h4 class=" fw-normal">Diamante</h4>
                    </div>
                    <div class="card-body">
                        <h1 class=" card-title pricing-card-title price"><sup class="currency">R$ </sup>****<small
                            class="fw-light fs-5">/mês</small>
                        </h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <a type="button" class="w-100 btn btn-pacote btn-lg btn-outline-secondary shadow-sm">Consulte</a>
                    </div>
                </div>
            </div>
        </div>

        <h2 class="display-6 text-center mb-4">Compare os planos</h2>

        <div class="text-center mt-5">
            <h6>Consulte outros planos corporativos adicionais.</h6>
            <a href="#" type="button" class="btn btn-sm btn-outline-secondary shadow-sm ">Veja mais</a>
        </div>
    </div>;
}

export default Pacotes;
