import React from 'react'
import './skillcard.css'

const skillzcard = ({title, iconURL, isActive, onClick}) =>{
  return (
    <div
      className={'skillz-card ${isActive ? "active" : ""}'}
      onClick={() =>onClick ()}
      >
        <div className="skill-icon">
          <img src={iconURL} alt ={title} />
        </div>

        <span> {title} </span>
    </div>
  )
}

export default skillzcard
