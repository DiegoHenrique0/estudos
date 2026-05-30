import React from 'react'

const Box = (props) => {

    const nome = 'diego henrique bezerra'

    return (
        // <>
        <div className="border border-danger mb-4">
            <h2 className="text-white bg-danger text-center">hello,  { props.titulo }!</h2>
            <p className='text-primary'>OLA TUDO BEM</p>
            <p className='text-success'>este texto sempre será fixo pois esta em uma function</p>
            {props.children}
        </div>
        //</>
    )
}

export default Box

