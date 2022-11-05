import React, {useState} from 'react'

export default function SetStateFunction(){

    const [state,setState] = useState({
        name: 'Cristina',
        age:27
    })

    return (
        <div>
            //Atualizando uma propriedade do objeto e perdendo a outra
            <button
                onClick={() => setState({name:'Cristina Aparecida'})}
            >
                Atualizar nome
            </button>
            {JSON.stringify(state)}
        </div>
    )
}