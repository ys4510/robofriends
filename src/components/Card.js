import React from "react";
// import "./Card.css";

const Card = ({ name, email, id }) => {
  return (
    <div className="bg-light-green dib br3 ma2 grow bw2 shadow-5 tc">
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
