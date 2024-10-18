import React from 'react';

function Card({ title, description, image, buttonText, onButtonClick,children }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {children}
        {buttonText && <button onClick={onButtonClick}>{buttonText}</button>}
      </div>
    </div>
  );
}

export default Card;
