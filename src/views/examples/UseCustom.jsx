import React from 'react'
import PageTitle from '../../components/layout/PageTitle';
import { UseCounter } from '../../hooks/UseCounter';

/**
 * Exemplo de hook criado para 
 * @param {*} props 
 * @returns 
 */
const UseRef = (props) => {

    // import do useCounter dentro das variáveis
    const [counter, add, subtract] = UseCounter()

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <div className="center">
                <button className="btn" onClick={()=>{add(1)}}>+</button>
                <p className='cyan'>{ counter }</p>
                <button className='btn' onClick={()=>{subtract(1)}}>-</button>
            </div>
        </div>
    )
}

export default UseRef
