import React, { useState } from "react";
import { questionOrder } from "./data.js";
import "./css/Create.css";

export default function Create() {
  const [answer, answerUpdate] = useState({
    answers: [],
    currentAnswer: "",
    answerNum: 0,
    document: false,
  });

  const defaultState = {
    answers: [],
    currentAnswer: "",
    answerNum: 0,
    document: false,
  };

  const handleType = (e) => {
    answerUpdate({ ...answer, currentAnswer: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.answerNum === 4) {
      answerUpdate((state) => {
        let answers = state.answers.concat(state.currentAnswer);
        let answerNum = state.answerNum;
        return {
          answers,
          currentAnswer: "",
          answerNum,
          document: true,
        };
      });
    } else {
      answerUpdate((state) => {
        let answers = state.answers.concat(state.currentAnswer);
        let answerNum = state.answerNum + 1;
        return {
          answers,
          currentAnswer: "",
          answerNum,
          document: false,
        };
      });
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    answerUpdate(defaultState);
  };

  return (
    <div className="creator">
      <div className="create-box">
        <h2 className="name">Contrato de locación comercial</h2>
        <i className="fas fa-file-signature create-icon"></i>
        {!answer.document ? (
          <div>
            <p className="instructions">Responde a las siguientes preguntas:</p>
            <p className="question">
              {answer.answerNum + 1}. {questionOrder[answer.answerNum].question}
            </p>
            <i className="fas fa-arrow-down arrow"></i>
            <div className="question-box">
              <form>
                <input
                  placeholder="Respuesta"
                  name="answer"
                  className="answer"
                  onChange={handleType}
                  value={answer.currentAnswer}
                ></input>
                <input
                  type="submit"
                  onClick={handleSubmit}
                  value="Ok"
                  className="button8"
                ></input>
              </form>
            </div>
          </div>
        ) : (
          <>
            <p className="question">¡Tu documento está listo!</p>{" "}
            <i className="fas fa-arrow-right arrow"></i>
            <br />
            <a className="button9" onClick={handleReset}>
              ¡Generar otro documento!
            </a>
          </>
        )}
        <div className="picture">
          <img
            src={process.env.PUBLIC_URL + "/images/logo-grey.png"}
            className="create-logo"
            alt="zoita wood"
          />
        </div>
      </div>
      <div className="contract">
        {!answer.document ? (
          <img
            src={process.env.PUBLIC_URL + "/images/contrato.jpg"}
            className="contract-image"
            alt="zoita wood"
          />
        ) : (
          <div className="final-box">
            <p className="final-title">Contrato de locación comercial</p>
            <p className="final-content">
              Entre{" "}
              <em>
                <b>{answer.answers[0]}</b>
              </em>{" "}
              de aqui en adelante "Locador" y{" "}
              <em>
                <b>{answer.answers[1]}</b>
              </em>{" "}
              de aqui en adelante "Locatario" convienen celebrar el presente
              contrato de locación, el que se regirá por el Codigo Civil y
              Comercial de la Nación, leyes aplicables a la materia y las
              cláusulas de este contrato.
            </p>
            <p className="final-content">
              El locador cede al locatario el inmueble de la calle{" "}
              <em>
                <b>{answer.answers[2]}</b>
              </em>{" "}
              de la Ciudad autonoma de Buenos Aires. El inmueble tendrá por
              destino la vivienda familiar del locatario, no puediendo este
              modificarlo salvo expreso consentimiento del locador.
            </p>
            <p className="final-content">
              Las partes convienen que la presente locación se extenderá desde{" "}
              <em>
                <b>{answer.answers[3]}</b>
              </em>{" "}
              hasta{" "}
              <em>
                <b>{answer.answers[4]}</b>
              </em>{" "}
              inclusive, debiendo entonces el locatario devolver el inmueble en
              las mismas condiciones que lo recibió de parte del locador al
              momento de la celebración de este contrato.
            </p>
            <div className="firmas">
              <p>Firma Locador</p>
              <p>Firma Locatario</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
