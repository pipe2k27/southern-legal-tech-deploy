import React from "react";
import "./css/Steps.css";
import { Link } from "react-router-dom";

export default function Steps() {
  return (
    <div>
      <h1>Tu documento en 3 Simples Pasos</h1>
      <div className="steps">
        <div className="step">
          <div className="step-box">
            <h4 className="step-title">1. Seleccioná</h4>
            <i class="fas fa-file-signature step-icon"></i>
            <p className="step-desc">
              Elegí el tipo de documento de una lista de mas de 150 documentos
              confeccionados por abogados.{" "}
            </p>
          </div>
        </div>
        <div className="step">
          <div className="step-box">
            <h4 className="step-title">2. Contestá</h4>
            <i class="far fa-question-circle step-icon"></i>
            <p className="step-desc">
              Contestá una serie de preguntas. A partir de tus respuestas vamos
              a desarrollar y generar el documento que hayas seleccionado.
            </p>
          </div>
        </div>
        <div className="step">
          <div className="step-box">
            <h4 className="step-title">3. Imprimí</h4>
            <i class="fas fa-print step-icon"></i>
            <p className="step-desc">
              imprimí tu documento 100% terminado y aprobado por el colegio de
              abogados de la República Argentina.{" "}
            </p>
          </div>
        </div>
      </div>
      <Link to="/create-document" className="button7 long">
        <i class="fas fa-file-signature"></i> ¡Seleccioná tu documento!
      </Link>

      <img
        src={process.env.PUBLIC_URL + "/images/folders.jpg"}
        className="folders"
      ></img>

      <h1>Aprovado por entidades</h1>

      <div className="aproval">
        <img
          src={process.env.PUBLIC_URL + "/images/colegio.png"}
          className="logo-banner colegio"
        ></img>
        <img
          src={process.env.PUBLIC_URL + "/images/uca.png"}
          className="logo-banner uca"
        ></img>
        <img
          src={process.env.PUBLIC_URL + "/images/bogas.png"}
          className="logo-banner bogas"
        ></img>
      </div>
    </div>
  );
}
