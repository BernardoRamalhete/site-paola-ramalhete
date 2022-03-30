function Contact({ pageWidth, handleExternal }) {
  return (
    <div className="downpage-body">
              
              <div className="tab-title">
                Contato
              </div>

              <div className="contact-body-container">
                
                <div className="contacts-container" >
                  <div className="contacts-insta" onClick={() => handleExternal('instagram')} style={pageWidth < 1500 ? {margin: '50px auto'} : {}}>
                    <span className="contacts-item-name">Instagram
                    <span className="contacts-item-info">@paolaramalhete</span>
                    </span>
                    
                  </div>

                  <div className="contacts-whats" onClick={() => handleExternal('whatsapp')} style={pageWidth < 1500 ? {margin: '50px auto'} : {}}>
                  <span className="contacts-item-name">WhatsApp
                  <span className="contacts-item-info up">(35) 9 99109-7277</span>
                  </span>
                  </div>

                  <div className="contacts-mail" onClick={() => handleExternal('email')} style={pageWidth < 1500 ? {margin: '50px auto'} : {}}>
                  <span className="contacts-item-name">Email
                  <span className="contacts-item-info down">paolaramalheteconsultoria@gmail.com</span>
                  </span>
                  </div>
                </div>

              </div>

    </div>
  )
}

export default Contact