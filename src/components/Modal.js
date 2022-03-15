import {useEffect} from 'react'
import PixIcon from '@mui/icons-material/Pix';
import mercadopago from '../images/mercadopago.svg'
import CloseIcon from '@mui/icons-material/Close';

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
                    <button className="modal-close" onClick={()=> setModal(false)}><CloseIcon sx={{color: '#fff', backgroundColor: '#10106d', fontSize:'60px', borderRadius:'50%', padding: '15px'}}/></button>
                    <div className="modal-top">
                        <h2 className="modal-title">{product.name}</h2>
                        <div className="modal-price">
                            <img src={mercadopago} alt="mercado pago" className="modal-mercadopago"/>
                            <PixIcon sx={{fontSize: '25px', marginRight: '15px'}} alt="pix"/>
                            {product.price}
                        </div>
                    </div>
                    <div className="modal-description">{product.description}</div>
                    <div className="modal-steps">Etapas desse serviço:</div>
                    {product.details.map((detail, key)=> {
                        return <div className="modal-detail" key={key}>
                            {detail}
                        </div>
                    })}
                        <button className="modal-close" onClick={()=> setModal(false)}><CloseIcon sx={{color: '#fff', backgroundColor: '#10106d', fontSize:'60px', borderRadius:'50%', padding: '15px'}}/></button>
                </div>
            </div>
        </>
    )
}

export default Modal