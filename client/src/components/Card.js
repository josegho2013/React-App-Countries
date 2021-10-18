import React from 'react'
// import "./Styles/Card.css";


const Card = ({flag,name,capital}) => {
    return (
        <div >
            <h2>{name}</h2>
            <img src={flag} alt=""/>
            <h4>{capital}</h4>
            
        </div>
    )
}

export default Card
