import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const UseRef = (props) => {

    const [num, setNum] = useState(0)
    /**
     * O seu grande trunfo é não alterar o 'estado' da aplicação, o que permite fazer muitas coisas com esse recurso
     * sem re-renderizar a página
     * O useRef também é usado para "controlar/contabilizar" todas as renderizações do componente
     * Isso é feito alterando o valor do atributo 'current'
     * Se, por exemplo, eu deseje acompanhar as renderizações somente de um evento específico, posso usar juntamente
     * com o useEffect por exemplo.
     * Como no caso abaixo, que adicionamos +1 ao current toda vez que num é alterado
     */
    const counter = useRef(0);

    useEffect(function() {
        counter.current+=1
    }, [num])
    
    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Casos de useRef" />
            <div>
                <input type="number" className="input" value={ num } onChange={ e => setNum(e.target.value) }/>
            </div>
            <div>
                <span className="text">[ { counter.current } ]</span>
            </div>
        </div>
    )
}

export default UseRef
