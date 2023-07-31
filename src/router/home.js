import React from 'react';

function Home() {
    return <div className='container justify-content-center aligm-items-center text-center py-3'>
        <div className='row'>
            <div className='col-md mx-auto mx-auto my-1'>
                <h2 className='text-uppercase'>Seja Bem-Vindo</h2>
            </div>
            <div className='col-md mx-auto mx-auto my-1'>
                <div className='bg-card card shadow'>
                    <div className='card-header'>
                        <h5>Título</h5>
                    </div>
                    <div className='card-body'>
                        <h5>Conteúdo</h5>
                    </div>
                    <div className='card-footer'>
                        <h6>Rodapé</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Home;
