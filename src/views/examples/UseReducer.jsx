import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    number: 0,
    multiplyBy: 0

}

const reducer = function (state, action){
    switch(action.type) {
        case 'set_multiply':
            return {...state, multiplyBy: action.payload }
        case 'set_number':
            return {...state, number: action.payload }
        case '*7':
            return {...state, number: state.number * 7 }
        case '/25':
            return { ...state, number: state.number / 25 }
        case 'round':
            return { ...state, number: Math.round(state.number) }
        case 'mBy':
            return { ...state, number: state.number * state.multiplyBy }
        default:
            return {state}
    }
}


const UseReducer = (props) => {
    
    const [state, dispatch] = useReducer(reducer, initialState)

    const changeNumber = (e) => {
        dispatch({ type: 'set_number', payload: e.target.value })
    }
    
    const changeMultiply = (e) => {
        dispatch({ type: 'set_multiply', payload: e.target.value })
    }

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <input type="number" className='input' value={ state.number } onChange={changeNumber}/>
            <button className="btn" onClick={() => {dispatch({type: '*7'})}}>*7</button>
            <button className="btn" onClick={() => {dispatch({type: '/25'})}}>/25</button>
            <button className="btn" onClick={() => {dispatch({type: 'round'})}}>ROUND</button>
            <button className="btn" onClick={() => {dispatch({type: 'mBy'})}}>Multiplicar por: { state.multiplyBy }</button>
            <input type="number" className="input" value={state.multiplyBy} onChange={changeMultiply}/>
        </div>
    )
}

export default UseReducer
