import React from 'react'

function Products({serial,name}) {
  return (
    <div style={{border:"1px solid black",width:"fit-content",margin:"auto",padding:"10px",marginBlock:"6px"}}>
        <h1>Product Sr. Number: {serial}</h1>
        <h1>Product Title: {name}</h1>
    </div>
  )
}

export default Products