import React from 'react'

export default class SetStateClass extends React.Component {

    //Atualizando objeto em componente de classe (merge)
    constructor(props){
        super(props)
        this.state = {
            name: 'Cristina',
            age:27
        }
    }

    render() {
        return (
            <div>
                <button
                    onClick={
                        () => this.setState({ name: 'Cristina Aparecida'})
                    }
                >
                    Atualizar nome
                </button>
                {JSON.stringify(this.state)}
            </div>
        )
    }

}