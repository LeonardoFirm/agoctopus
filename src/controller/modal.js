import React from 'react';
import { Link } from 'react-router-dom';

function Modal() {
    return <div className=''>
        <div class="modal fade" id="pacoteBasic" tabindex="-1" aria-labelledby="pacoteBasicLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="pacoteBasicLabel">Pacote Basic</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <ul class="list-unstyled text-small">
                            <li class="mb-1"><i class="bi bi-chevron-double-right"></i> 12 posts para feed/stories.</li>
                            <li class="mb-1"><i class="bi bi-chevron-double-right"></i> Até 6 carrosséis com até 10 páginas cada.</li>
                            <li class="mb-1"><i class="bi bi-chevron-double-right"></i> 6 posts únicos.</li>
                            <li class="mb-1"><i class="bi bi-chevron-double-right"></i> Desenvolvimento de site personalizado.</li>
                            <li class="mb-1"><i class="bi bi-chevron-double-right"></i> Site de até 2 páginas.</li>
                            <li class="mb-1"><i class="bi bi-chevron-double-right"></i> Hospedagem + domínio incluso.</li>
                            <div class="container py-3">
                                <h6>Pagamento via PIX, cartão de Débito e Crédito e Boleto.</h6>
                            </div>
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <a type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Fechar</a>
                        <Link to="./" class="btn btn-primary">Contratar</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Modal;