import React from 'react'

const Scroll = (params)=>
{
    return (<div style={{overflowY:'scroll',height:'700px'}}>
        {params.children}
    </div>)
}

export default Scroll;