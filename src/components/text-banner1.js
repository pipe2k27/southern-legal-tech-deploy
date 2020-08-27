import React from "react";
import { Link } from "react-router-dom";
import "./css/Banner.css";

export default function TextBanner1() {
  return (
    <div>
      <div className="text-banner1">
        <img
          src={process.env.PUBLIC_URL + "/images/banner1.png"}
          className="banner2"
        ></img>

        <div className="introduction">
          <h1 className="description">
            GENERÁ TUS DOCUMENTOS LEGALES, RÁPIDO Y FÁCIL
          </h1>
          <div className="select-box">
            <i class="fas fa-file-signature doc-icon"></i>

            <p className="selecciona">Seleccioná tu documento:</p>
            <form>
              <select className="dropdown" name="documento">
                <option value="" disabled selected>
                  Documentos
                </option>
                <option value="volvo">Alquiler</option>
                <option value="saab">Condominio</option>
                <option value="fiat">Contrato de obra</option>
                <option value="audi">Poder general amplio</option>
              </select>{" "}
            </form>
            <Link to="/create-document" className="button7">
              <i class="fas fa-pencil-alt"></i> Comenzar!
            </Link>
            <img
              src={process.env.PUBLIC_URL + "/images/logo-grey.png"}
              className="logo-banner"
            ></img>
          </div>
        </div>
      </div>
      <h1>Tu documento en minutos</h1>
      <p className="intro">
        Generá cualquier documento legal que necesites en minutos. Solo tenes
        que responder algunas preguntas y nosotros armamos tu archivo con el
        documento listo para imprimir. Todos nuestros documentos estan validados
        por el colegio de abogados de la Republica Argentina.
      </p>

      <img
        src={process.env.PUBLIC_URL + "/images/arg.png"}
        className="argentina"
      ></img>

      <Link to="/create-document" className="button7">
        Comenzar <i class="fas fa-pencil-alt"></i>
      </Link>
    </div>
  );
}
