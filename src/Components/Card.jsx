import React from "react";
import "../Stylesheets/index.css";

function Carta(props) {
  return (
    <div className="carta col-12 col-lg-4 gx-0">
      <main className="rounded-4 my-4 p-4">
        <img
          className="imagen-et rounded-4"
          src={require(`../Images/${props.nft}`)}
          alt=""
        />
        <h2 className="my-3">{props.nombre}</h2>
        <p>{props.descripcion}</p>
        <div className="d-flex justify-content-between mt-3">
          <div className="d-flex align-items-center">
            <img
              className="eth"
              src={require(`../Images/icon-ethereum.svg`)}
              alt=""
            />
            <p className="texto-eth">{props.precio} ETH</p>
          </div>
          <div className="d-flex align-items-center">
            <img
              className="relog"
              src={require(`../Images/icon-clock.svg`)}
              alt=""
            />
            <p>{props.tiempo}</p>
          </div>
        </div>
        <li className="my-3"></li>
        <div className="d-flex align-items-center ">
          <img
            className="avatar border border-white rounded-circle"
            src={require(`../Images/image-avatar.png`)}
            alt=""
          />
          <p>
            Creations of <p className="name"> {props.creador}</p>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Carta;
