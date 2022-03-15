import logoPaola from '../images/logoPaola.png'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

function PageTop({pageWidth, handleExternal, isAbout, isContact, isTestemonies, goToAbout, goToContact, goToTestemonies, goToServices}) {
    
    return (
        <div className="top-container">

            <div>

                <div className="top-menu-container" style={pageWidth < 761 ? { position: 'relative', bottom: '-120px', left: '-50px' } : {}}>
                    <div className="top-icons" style={pageWidth < 761 ? { display: 'block', position: 'relative', bottom: '-25vh', left: '40px' } : {}}>
                        <div className='top-icon-item' onClick={() => handleExternal('instagram')}>
                            <InstagramIcon sx={pageWidth < 761 ? { fontSize: '45px', padding: "3px", backgroundColor: '#a6beed', borderRadius: '50%', width: 'auto' } : { fontSize: '40px', padding: "3px", backgroundColor: '#a6beed', borderRadius: '50%', width: 'auto', '&:hover': { color: '#fff', backgroundColor: '#10106d' }, transition: 'all ease 0.2s' }} />

                        </div>

                        <div className='top-icon-item' onClick={() => handleExternal('whatsapp')}>
                            <WhatsAppIcon sx={pageWidth < 761 ? { fontSize: '45px', padding: "3px", backgroundColor: '#a6beed', borderRadius: '50%', width: 'auto' } : { fontSize: '40px', padding: "3px", backgroundColor: '#a6beed', borderRadius: '50%', '&:hover': { color: '#fff', backgroundColor: '#10106d' }, transition: 'all ease 0.2s' }} />
                        </div>

                        <div className='top-icon-item' onClick={() => handleExternal('email')}>
                            <EmailOutlinedIcon sx={pageWidth < 761 ? { fontSize: '45px', padding: "3px", backgroundColor: '#a6beed', borderRadius: '50%', width: 'auto' } : { fontSize: '40px', padding: "3px", backgroundColor: '#a6beed', borderRadius: '50%', '&:hover': { color: '#fff', backgroundColor: '#10106d' }, transition: 'all ease 0.2s' }} />
                        </div>
                    </div>

                    <div className="navigation-menu">
                        <div className="navigation-menu-item" onClick={goToAbout} style={isAbout ? { 'borderBottom': '2px solid #10106d' } : { 'borderBottom': 'none' }}>
                            Sobre mim
                        </div>

                        <div className="navigation-menu-item" onClick={goToContact} style={isContact ? { 'borderBottom': '2px solid #10106d' } : { 'borderBottom': 'none' }}>
                            Contato
                        </div>

                        <div className="navigation-menu-item" onClick={goToTestemonies} style={isTestemonies ? { 'borderBottom': '2px solid #10106d' } : { 'borderBottom': 'none' }}>
                            Depoimentos
                        </div>

                        <button className="navigation-menu-item navigation-menu-button" onClick={goToServices}>
                            Serviços
                        </button>
                    </div>
                </div>

            </div>

            <img src={logoPaola} className="top-logo-image" alt="logo Paola Ramalhete consultora de imagem e estilo" />

        </div>
    )
}

export default PageTop