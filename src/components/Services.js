import { useState } from 'react'
import acessorios from '../images/acessoriosEditado.jpg'
import guardaRoupa from '../images/guardaRoupaFuncionalEditado.jpg'
import harmonizacao from '../images/harmoziaCromaticaEditado.jpg'
import morfologia from '../images/morfologiaEditado.jpg'
import estilo from '../images/definicaoEstiloEditado.jpg'
import package1 from '../images/pacote1.jpg'
import package2 from '../images/pacote2.jpg'
import journey from '../images/jornada.jpg'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function Services({ showArrow, setProduct, setModal, pageWidth }) {
    const [servicesScroll, setServicesScroll] = useState(0);

    const handleLeftArrow = () => {
        let x = servicesScroll + Math.round(window.innerWidth / 1.5);

        if (x > 0) {
            x = 0;
        }

        setServicesScroll(x)
    }

    const handleRightArrow = () => {
        let x = servicesScroll - Math.round(window.innerWidth / 1.5);
        let servicesWidth = 5 * 400;

        if ((window.innerWidth - servicesWidth) > x) {
            x = (window.innerWidth - servicesWidth) - 100;
        }

        setServicesScroll(x)
    }

    const openModal = (service) => {
        setProduct(service)
        setModal(true)
    }

    const individualServices = [
        {
            name: 'Morfologia corporal',
            img: morfologia,
            price: 'R$250,00',
            description: 'Nessa sessão definiremos a sua morfologia corporal e te ensinarei a trazer mais harmonia e suavidade à sua imagem, amenizando aquilo que te incomoda e colocando em evidência o que você mais gosta no seu corpo e criando mais autonomia e autoconhecimento',
            details: ['1. Te encaminharei um email pedindo fotos da sua estrutura corporal para análise. ', '2.	Será feita a análise da sua morfologia a fim de defini-la e traçar estratégias para harmonizar a sua imagem.', '3. Agendaremos um encontro para apresentação do resultado da análise e para entendermos como ressaltar e/ou amenizar o que você gostaria de transmitir na sua imagem.']
        },
        {
            name: 'Acessórios',
            img: acessorios,
            price: 'R$250,00',
            description: 'Nessa sessão você descobrirá o poder dos acessórios na composição de um look. Te auxiliarei a usá-los a seu favor de forma prática trazendo mais autonomia e versatilidade ao seu guarda roupas.',
            details: ['1.	Te enviarei um questionário que deverá ser preenchido e encaminhado via e-mail.', '2.	Agendaremos uma entrevista a fim de esclarecer possíveis dúvidas em relação ao questionário e entendermos a sua relação com os acessórios. A partir disso traçaremos estratégias e você aprenderá a usar e trabalhar esses elementos a seu favor.']
        },
        {
            name: 'Harmonização Cromática',
            img: harmonizacao,
            price: 'R$250,00',
            description: 'As cores são uma linguagem e exercem grande influência na percepção e no imaginário das pessoas. Elas, inclusive, exercem influência no nosso humor. Assim, mais do que aprender a combinar as cores de forma harmônica, você irá entender o poder que as cores exercem sobre nós e criar autonomia para trabalhar com elas de acordo com a mensagem que queira passar.',
            details: ['1.	Te enviarei um questionário que deverá ser preenchido e encaminhado via e-mail.', '2.	Agendaremos uma entrevista para esclarecer possíveis dúvidas em relação ao questionário e entender melhor a sua relação com as cores. ', '3.	A partir disso te apresentarei as harmonias cromáticas, como trabalhá-las e usá-las de acordo com seu objetivo, trazendo sua personalidade à tona.']
        },
        {
            name: 'Guarda roupa funcional + montagem de looks',
            img: guardaRoupa,
            price: 'R$400,00',
            description: 'Nessa sessão te auxiliarei a ter uma “experiência de loja” ao abrir seu guarda roupas. Você terá dicas práticas de organização, a fim de remover do seu armário o que não faz mais sentido para o seu estilo e/ou situação de vida atual, além de trazer beleza e praticidade ao seu guarda roupas. Junto a isso, te ajudarei a ter um novo olhar para as suas peças, te auxiliando na montagem de looks com aquilo que você tem e eventualmente possa ter dificuldade em combinar e usar com outras peças, criando autonomia para lidar com seu guarda roupas e tornando a experiência de se vestir mais leve e prazerosa.',
            details: ['1.	Te encaminharei um questionário que deverá ser preenchido e encaminhado via e-mail.', '2.	Agendaremos a sessão para criar funcionalidade para seu guarda roupa por meio de dicas práticas para organização e remoção de peças que não fazem mais sentido para você.', '3.	Concluída a etapa do guarda-roupa funcional, agendaremos uma segunda sessão para montagem de looks com as peças do seu armário, de forma que você consiga autonomia e autoconhecimento, superando suas maiores dificuldades nesse processo e aprenda de uma vez por todas a harmonizar as peças do seu guarda-roupas.']
        },
        {
            name: 'Definição de estilo',
            img: estilo,
            price: 'R$250,00',
            description: 'Nessa sessão entenderemos, a partir de características intrínsecas à sua personalidade, qual é o seu estilo. Por meio da simbologia das formas e das cores, exteriorizaremos quem é você, de modo que você se conheça, crie autonomia para se vestir e trabalhar com a sua imagem e, além de tudo, sinta-se ainda mais bela e representada.',
            details: ['1.	Te enviarei um questionário que deve ser preenchido e encaminhado via e-mail.', '2.	Agendaremos uma entrevista inicial na qual esclareceremos possíveis dúvidas em relação ao questionário e faremos um estudo sobre a sua personalidade e gosto pessoal.', '3.	Será agendada a Definição de Estilo.']
        }
    ]

    const packageServices = [
        {
            name: 'Pacote 1: Definição de Estilo + Morfologia + Acessórios',
            img: package1,
            price: 'R$650,00',
            description: 'Nesse processo te auxiliarei a traduzir a sua personalidade de forma concreta e visível na sua imagem. Além disso, a partir da definição da sua morfologia corporal, você aprenderá a lidar com o seu próprio corpo, amenizando ou salientando o que você deseja. E ainda criará autonomia para usar seus acessórios a seu favor, transmitindo a sua personalidade na sua imagem, descobrindo todo o poder desses apetrechos!',
            details: ['1.	O  preenchimento do questionário (que deverá ser preenchido e encaminhado por e-mail) é a primeira parte do processo para que eu te conheça melhor, entenda quem você é e quais são os seus objetivos. Juntamente com o questionário, deverão ser encaminhadas fotos para a análise morfológica', '2.	Agendaremos, então, a entrevista inicial para esclarecer possíveis dúvidas em relação ao questionário.', '3.	A partir disso agendaremos a sessão de Definição de estilo.', '4.	Concluída a Definição de Estilo agendaremos a próxima sessão em que te apresentarei a análise da sua morfologia corporal a fim de, além de harmozinar sua imagem, ressaltar e/ou amenizar suas características desejadas.', '5.	Por fim, agendaremos a sessão de acessórios a fim de entender sua relação com esses apetrechos e traçar estratégias para que você tenha autonomia e aprenda a usá-los a seu favor.', '6.	Realizadas todas as etapas, agendaremos uma sessão final para sanar todas as possíveis dúvidas que possam ter ficado e verificarmos se o processo foi efetivo.']
        },
        {
            name: 'Pacote 2: Definição de Estilo + Morfologia + Guarda Roupa funcional + Montagem de looks',
            img: package2,
            price: 'R$850,00',
            description: 'Nesse processo te auxiliarei a traduzir a sua personalidade de forma concreta e visível na sua imagem. Além disso, a partir da definição da sua morfologia corporal, você aprenderá a lidar com o seu próprio corpo, amenizando ou salientando o que você deseja. E ainda te darei dicas práticas para dar funcionalidade ao seu guarda roupas e entender, criando autonomia, como casar as peças que você possui ou venha a adquirir na montagem de looks, superando suas maiores dificuldades nesse processo.',
            details: ['1.	O  preenchimento do questionário (que deverá ser preenchido e encaminhado por e-mail) é a primeira parte do processo para que eu te conheça melhor, entenda quem você é e quais são os seus objetivos. Juntamente com o questionário, deverão ser encaminhadas fotos para a análise morfológica.', '2.	Agendaremos, então, a entrevista inicial para esclarecer possíveis dúvidas em relação ao questionário.', '3.	A partir disso agendaremos a sessão de Definição de estilo.', '4.	Concluída a Definição de Estilo agendaremos a próxima sessão em que te apresentarei a análise da sua morfologia corporal a fim de, além de harmozinar sua imagem, ressaltar e/ou amenizar suas características desejadas.', '5.	A próxima etapa é te auxiliar, a partir de dicas práticas, a organizar o seu guarda-roupa de forma funcional a fim de trazer mais praticidade e beleza para o seu dia a dia.', '6.	Concluída a etapa do guarda-roupa funcional, agendaremos a sessão de montagem de looks com as peças do seu armário, de forma que você consiga autonomia e autoconhecimento, superando suas maiores dificuldades nesse processo e aprenda de uma vez por todas a harmonizar as peças do seu guarda-roupas. ', '7.	Realizadas todas as etapas, agendaremos uma sessão final para sanar todas as possíveis dúvidas que possam ter ficado e verificarmos se o processo foi efetivo.']
        },
        {
            name: 'Jornada Completa',
            img: journey,
            price: 'R$1.700,00',
            description: 'A jornada é uma experiência! Além de passarmos por todas as sessões disponibilizadas na consultoria, me coloco à disposição durante todo o processo para tirar dúvidas e te auxiliar no processo de autoconhecimento. Além disso, no final de toda a consultoria você ganha um Dossiê completo com todas as informações adquiridas no desenvolvimento da jornada!',
            details: ['1.	O  preenchimento do questionário (que deverá ser preenchido e encaminhado por e-mail) é a primeira parte do processo para que eu te conheça melhor, entenda quem você é e quais são os seus objetivos. Juntamente com o questionário, deverão ser encaminhadas fotos para a análise morfológica', '2.	Agendaremos, então, a entrevista inicial para esclarecer possíveis dúvidas em relação ao questionário.', '3.	A partir disso agendaremos a sessão de Definição de estilo.', '4.	Concluída a Definição de Estilo agendaremos a próxima sessão em que te apresentarei a análise da sua morfologia corporal a fim de, além de harmozinar sua imagem, ressaltar e/ou amenizar suas características desejadas.', '5.	Na próxima etapa você conhecerá as harmonias cromáticas, aprenderá como trabalhá-las e usá-las de acordo com seu objetivo, trazendo sua personalidade à tona por meio da psicologia das cores.', '6.	Agendaremos, então, a sessão de acessórios a fim de entender sua relação com esses apetrechos e traçar estratégias para que você tenha autonomia e aprenda a usá-los a seu favor.', '7.	A próxima etapa é te auxiliar, a partir de dicas práticas, a organizar o seu guarda-roupa de forma funcional a fim de trazer mais praticidade e beleza para o seu dia a dia. ', '8.	Concluída a etapa do guarda-roupa funcional, agendaremos uma a sessão de montagem de looks com as peças do seu armário, de forma que você consiga autonomia e autoconhecimento, superando suas maiores dificuldades nesse processo e aprenda de uma vez por todas a harmonizar as peças do seu guarda-roupas. ', '9.	Realizadas todas as etapas, agendaremos uma sessão final para sanar todas as possíveis dúvidas que possam ter ficado, verificaremos se o processo foi efetivo e te entregarei um dossiê peersonalizado feito especialmente para você.']
        },
    ]

    return (
        <div className="downpage-body">
            <div className="tab-title larger">
                Sessões avulsas
            </div>

            <div className='one-metting-services-body'>
                <div style={showArrow ? {} : { display: 'none' }}>
                    <div className="one-metting-services-left">
                        <ArrowCircleLeftIcon sx={{ fontSize: '50px', backgroundColor: 'transparent', color: 'white', '&:hover': { color: '#10106d' }, transition: 'all ease 0.2s' }} onClick={handleLeftArrow} />
                    </div>

                    <div className="one-metting-services-right">
                        <ArrowCircleRightIcon sx={{ fontSize: '50px', backgroundColor: 'transparent', color: 'white', '&:hover': { color: '#10106d' }, transition: 'all ease 0.2s' }} onClick={handleRightArrow} />
                    </div>
                </div>

                <div className='one-metting-services-area'>
                    <div className='one-metting-services-list' style={showArrow ? { marginLeft: servicesScroll, width: 2400 } : { display: 'flex', justifyContent: 'space-around' }}>

                        {individualServices.map((service) => {
                            return <div className='one-metting-services-item' onClick={() => openModal(service)}>
                                <img src={service.img} alt={service.name} className="one-metting-services-img" />
                                <button className="one-metting-services-title">{service.name}</button>
                            </div>
                        })}

                    </div>
                </div>
            </div>

            <div className="tab-title-package">
                Pacotes
            </div>

            <div className='one-metting-services-area-package'>
                <div className="packages-container" style={pageWidth > 1500 ? {justifyContent: 'space-around'} : {}} >
                    {packageServices.map((service) => {
                        return <div className='one-metting-services-packages-list'>
                            <div className='one-metting-services-item' onClick={() => openModal(service)}>
                            <img src={service.img} alt={service.name} className="one-metting-services-img" />
                            <button className="one-metting-services-title-package">{service.name.split(' ').slice(0, 2).join(' ').replaceAll(":", "")}</button>
                        </div>
                        </div>
                    })}
                </div>
            </div>

        </div>
    )
}

export default Services