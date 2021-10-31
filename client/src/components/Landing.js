import React from 'react'
import { Link } from "react-router-dom";
import "./Styles/Landing.css";
const Landing = () => {
    return (
        
              <div className="landing">
      <Link to="/home">
        <button className="button">Welcome</button>
      </Link>
        </div>
    )
}

export default Landing
