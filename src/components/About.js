import paola from '../images/paolaBack.png'

function About() {
    return (
        <div>
            <div className="downpage-body">
                <div className="tab-title">
                    Sobre mim
                </div>

                <div className="about-container">
                    <img src={paola} alt='paola ramalhete' className="about-img"/>
                    <section className='about-text'>
                        <p className="about-paragraph">
                            Meu nome é Paola Ramalhete, tenho 26 anos, sou casada e mãe de dois filhos. Socióloga de formação e mestranda em Filosofia, encontrei na consultoria de imagem um meio de usar a minha formação acadêmica para servir, auxiliando mulheres a se encontrarem e criarem autonomia para transparecer sua beleza interior. Foi por meio de muito estudo e dedicação à área das Ciências Humanas e por meio do Método Humanizado desenvolvido pelo Casal Casagrande que desenvolvi o ferramental necessário para atuar como consultora.
                        </p>
                        <p className="about-paragraph">
                            Meu pricipal objetivo é gerar autoconhecimento, autonomia e beleza. Mais do que trazer harmonia, eu te auxiliarei a trazer sentido para a sua imagem conectando o seu exterior ao seu interior, traduzindo a sua personalidade na sua imagem de forma que você se sinta representada e bela!
                        </p>
                    </section>
                </div>
            </div>

        </div>
    )
}

export default About