import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {

    const [num, setNum] = useState(0)

    function dec() {
        if (num > 0)
        setNum(num-1)
    }

    function add() {
        if (num >= 0)
        setNum(num+1)
    }
    
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Contador"></SectionTitle>
            <div className="flex-row">
                <button onClick={ _ => dec() } className="btn">-</button>
                <span className="text">{ num }</span>
                <button onClick={ _ => add() } className="btn">+</button>
            </div>
        </div>
    )
}

export default UseState
