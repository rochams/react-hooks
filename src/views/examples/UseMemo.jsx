import React, { useMemo, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

/**
 * UseMemo é um hook de otimização que você usa para memorizar valores derivados de cálculos pesados 
 * ou que você não quer recalcular em toda renderização, somente quando suas dependências mudarem.
 * No exemplo abaixo, queremos que o cálculo seja feito somente quando as varáveis n1 ou n2 forem alteradas
 * @param {*} props 
 * @returns 
 */
const UseMemo = (props) => {

    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)

    const soma = (num1, num2) => {
        const futureTime = Date.now() + 1000
        while (futureTime > Date.now()){}
        return parseInt(num1)+parseInt(num2)
    }
    // Usando useMemo, só recalcula a soma quando se alterar n1 ou n2
    const result = useMemo(()=>soma(n1, n2), [n1, n2])

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <SectionTitle title="3 números, mas quero que apenas 2 sejam afetados com a soma:"></SectionTitle>
            <input className='input' type="number" value={n1} onChange={e => setN1(e.target.value)} />
            <input className='input' type="number" value={n2} onChange={e => setN2(e.target.value)} />
            <input className='input' type="number" value={n3} onChange={e => setN3(e.target.value)} />
            <span className='text'>{result}</span>
        </div>
    )
}

export default UseMemo
