import React from 'react'

function VegIndex(props) {
    const vegetables = props.allVegetables;
    return (
        <div>
        <nav>
            <a href="/vegetables/vegNew">Create a New Vegetable</a>
        </nav>
        {vegetables.map((vegetable, i) => {
            return (
            <div key={i}>
                <a href={`/vegetables/${vegetable._id}`}>
                <h2>{vegetable.name}</h2>
                </a>
            </div>
            );
        })}
        </div>
    );
    }


export default VegIndex