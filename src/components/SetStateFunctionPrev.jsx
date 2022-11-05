import React, {useState} from 'react'

export default function SetStateFunctionPrev(){

    const [state,setState] = useState({
        name: 'Cristina',
        age:27
    })

    return (
        <div>
            <button
                //realizando merge com estado anterior no componente de classe
                onClick={() => setState(
                    prevState => {
                        return {...prevState, name: 'Cristina Aparecida'}
                    }
                )}
            >
                Atualizar nome
            </button>
            {JSON.stringify(state)}
        </div>
    )
}