import React from 'react'

function Modal({product, setModal}) {
    return (
        <>
            <div className="modal-overlay" onClick={() => setModal(false)}>
            </div>
            <div className="modal-align">
                <div className="modal-container">
                    <div className="modal-top">
                        <h2 className="modal-title">{product.name}</h2>
                        <div className="modal-price">{product.price}</div>
                    </div>
                    <div className="modal-description">{product.description}</div>
                    <div className="modal-steps">Etapas desse serviço:</div>
                    {product.details.map((detail)=> {
                        return <div className="modal-detail">
                            {detail}
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Modal