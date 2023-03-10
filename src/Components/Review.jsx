import React from "react";
import "../Stylesheets/review.css";

function Review(props) {
  return (
    <div className="box-container">
      <div className="review">
        <p>
          {props.texto}
        </p>
        <div>
          <img className="imagen" src={require(`../Images/${props.imagen}.jfif`)} alt="imagen" />
          <h2>{props.nombre}</h2>
          <p>{props.cargo}</p>
        </div>
      </div>
    </div>
  );
}

export default Review;
