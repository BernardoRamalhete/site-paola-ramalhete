import cliente1 from '../images/cliente1.jpg'
import cliente2 from '../images/cliente2.jpg'

function Testemonies() {

    const clients = [
        {
            photo: cliente1,
            name: 'Maria da Silva',
            job: 'Cheff de cozinha',
            testemonie: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            photo: cliente2,
            name: 'Valentina Souza',
            job: 'Mãe de 5 filhos',
            testemonie: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            photo: cliente1,
            name: 'Maricota Neves',
            job: 'Aeromoça',
            testemonie: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            photo: cliente2,
            name: 'Joana das Neves',
            job: 'Empreendedora',
            testemonie: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            photo: cliente1,
            name: 'Mariana Silva',
            job: 'Professora Universitária',
            testemonie: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            photo: cliente2,
            name: 'Valentina Silveira',
            job: 'Empresária',
            testemonie: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
    ]

    const clientSlicer = (array, num1, num2) => {
        return array = array.slice(num1, num2)
    }
    return (
        <div className="downpage-body">

            <div className="tab-title testemonies">
                Depoimentos
            </div>

            <div className="client-list">
                {
                    clientSlicer(clients, 0, 3).map((client, key) => {
                        return <div className="client-item" key={key}>
                            <img src={client.photo} alt='cliente 1' className="client-picture" />
                            <h3 className="client-name">{client.name}</h3>
                            <h4 className="client-job">{client.job}</h4>
                            <p className="client-testemonie">{client.testemonie}</p>
                        </div>
                    })
                }
            </div>

            <div className="client-list">
                {
                    clientSlicer(clients, 3, 6).map((client, key) => {
                        return <div className="client-item" key={key}>
                            <img src={client.photo} alt='cliente 1' className="client-picture" />
                            <h3 className="client-name">{client.name}</h3>
                            <h4 className="client-job">{client.job}</h4>
                            <p className="client-testemonie">{client.testemonie}</p>
                        </div>
                    })
                }
            </div>

        </div>
    )
}

export default Testemonies