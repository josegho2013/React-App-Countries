import React from 'react'
import "./Styles/Card.css";


const Card = ({flagImg,name,capital}) => {
    return (
        <div className="card" >
            <h2>{name}</h2>
            <img src={flagImg} alt=""   height="200px" width="200px" />
            <h4>{capital}</h4>
            
        </div>
    )
}

export default Card
