import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const UseEffect = (props) => {

    const [num, setNum] = useState(1)
    const [raizQuadrada, setRaizQuadrada] = useState(1)
    const [parOuImpar, setParOuImpar] = useState("Ímpar")

    function calculaRaizQuadrada(number) {
        const n = parseInt(number)
        if (n < 0 || isNaN(n)  ){
            return 0
        }

        const res = n ** 2
        return res;
    }

    function calculaParOuImpar(number) {
        const n = parseInt(number)
        if (n < 0 ){
            return "-"
        }

        const res = n%2 === 0 ? "Par" : "Ímpar";
        return res;
    }

    /**
     * Neste caso de uso, o useEffect está sendo usado 
     * para reagir a qualquer alteração da variável num
     * Ou seja, useEffect é usado para reagir com algum evento qualquer alteração em um dado qualquer
     */
    useEffect(function() {
        const valor = calculaRaizQuadrada(num)
        setRaizQuadrada(valor)
    }, [num])

    /**
     * Este useEffect foi criado para reagir à alteração de num
     * e retornar o valor "Par" ou "Ímpar" dependendo do valor de num
     */
    useEffect(function() {
        const res = calculaParOuImpar(num)
        setParOuImpar(res)
    }, [num])
    
    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
                complement="Útil para reagir a alterações em variáveis quando se passa a variável como segundo argumento em um array.
                Quando se passa o array vazio, ele comporta-se executando após o carregamento do componente."
            />
            <SectionTitle title="Raiz Quadrada:" />
            <div>
                <div>
                    <span className='text'>Resultado:</span>
                    <span className='text cyan'>{ raizQuadrada }</span>
                </div>
                <input type="number" className='input' value={num} onChange={e => setNum(e.target.value)} />
            </div>
            <SectionTitle title="Par ou Ímpar:" />
            <div>
                <span className='text'>{ parOuImpar }</span>
            </div>

        </div>
    )
}

export default UseEffect;
