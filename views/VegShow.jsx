import React from 'react'

function VegShow(props) 
{
    const vegetables = props.vegetable;
return (
    <div>
        <h1>Show Page</h1>
        <h3>The {vegetables.name} is {vegetables.color}</h3>
        <h1>{vegetables.readyToEat ? "Its ready to eat" : "Its not ready yet"}</h1>
    </div>
)
}


export default VegShow