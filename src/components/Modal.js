import {useEffect} from 'react'

function Modal({product, setModal}) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="modal-overlay" onClick={() => setModal(false)}>
            </div>
            
            <div className="modal-align">
                <div className="modal-container">
                    <button className="modal-close" onClick={()=> setModal(false)}>X</button>
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
                        <button className="modal-close" onClick={()=> setModal(false)}>X</button>
                </div>
            </div>
        </>
    )
}

export default Modal