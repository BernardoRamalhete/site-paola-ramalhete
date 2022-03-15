import './App.css';
import { useState, useEffect } from 'react'
import PageTop from './components/PageTop'
import About from './components/About'
import Contact from './components/Contact'
import Testemonies from './components/Testemonies'
import Services from './components/Services'
import Modal from './components/Modal'


function App() {
  const [isAbout, setIsAbout] = useState(true)
  const [isContact, setIsContact] = useState(false)
  const [isTestemonies, setIsTestemonies] = useState(false)
  const [isServices, setIsServices] = useState(false)

  
  const [showArrow, setShowArrow] = useState(true)
  const [pageWidth, setPageWidth] = useState(window.innerWidth)

  const [modal, setModal] = useState(false)
  const [product, setProduct] = useState ({
    name: '',
    price: '',
    description: '',
    details: ''
  })
  
  

  const goToAbout = () => {
    setIsAbout(true);
    setIsContact(false);
    setIsTestemonies(false);
    setIsServices(false);
  }
  const goToContact = () => {
    setIsAbout(false);
    setIsContact(true);
    setIsTestemonies(false);
    setIsServices(false);
  }
  const goToTestemonies = () => {
    setIsAbout(false);
    setIsContact(false);
    setIsTestemonies(true);
    setIsServices(false);
  }
  const goToServices = () => {
    setIsAbout(false);
    setIsContact(false);
    setIsTestemonies(false);
    setIsServices(true);
  }

 

  const handleExternal = (where2go) => {
    switch(where2go) { 
      case 'instagram':
        window.open('https://www.instagram.com/paolaramalhete/', '_blank')
      break;
      case 'whatsapp':
        window.open('https://whatsa.me/5535984288998', '_blank')
      break;
      case 'email':
        window.open('mailto: paolaramalheteconsultoria@gmail.com')
      break;
      default: console.log(where2go);
    }
  }

  const updateWidth = () => {
    setPageWidth(window.innerWidth)
  }

  useEffect(() => {
    if(pageWidth > 2000) {
      setShowArrow(false)
    } else {
      setShowArrow(true)
    }
},[pageWidth])

    window.addEventListener('resize', updateWidth)

  return (
    <>
        <div className='white-bar'/>
       <PageTop pageWidth={pageWidth} handleExternal={handleExternal} isAbout={isAbout} isContact={isContact} isTestemonies={isTestemonies} goToAbout={goToAbout} goToContact={goToContact} goToTestemonies={goToTestemonies} goToServices={goToServices}/>

        <div className="tab-title-container">
          {isAbout ?
            <About />


            : ''}

          {isContact ?
            <Contact pageWidth={pageWidth} handleExternal={handleExternal}/>
            : ''}

          {isTestemonies ?
            <Testemonies/>
            : ''}

          {isServices ?
            <Services showArrow={showArrow} setProduct={setProduct} setModal={setModal} pageWidth={pageWidth} handleExternal={handleExternal}/>
            : ''}

            {modal && 
              <Modal product={product} setModal={setModal}/>
            }

        </div>


    </>
  );
}

export default App;
