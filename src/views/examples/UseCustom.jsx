import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle';
import { UseCounter } from '../../hooks/useCounter';
import { UseRequest } from '../../hooks/useRequest';

/**
 * Exemplo de hook personalizado criado para executar requisiçoes
 * @param {*} props 
 * @returns 
 */
const UseRef = (props) => {

    // import do hook personalizado useCounter dentro das variáveis
    const list = []
    const [counter, add, subtract] = UseCounter()
    // uso do hook personalizado de requisições
    const [myUrl, setMyUrl ] = useState('http://files.cod3r.com.br/curso-react/estados.json')
    const [myMethod, setMyMethod ] = useState('GET')
    const response = UseRequest(myUrl, myMethod)

    const plotData = function(data) {
        return data.map(d => <li className='cyan'>{ d.nome }</li>)
    }

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
            <PageTitle
                title="Hook de requisições"
                subtitle="Criação de hook de requisições http!"/>

                <input className='input' type="text" onChange={(e) => {setMyUrl(e.target.value)}}/>
                <button onClick={() => {plotData(response.data)}}>Requisitr dados</button>
                <div className="">
                    <ul>
                        { response.data  ? plotData(response.data) : <li>No data to display</li>}
                    </ul>
                </div>
        </div>
    )
}

export default UseRef
