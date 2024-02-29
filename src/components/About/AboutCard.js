import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá, eu me chamo <span className="purple">Pedro Klaus </span>
            sou do <span className="purple"> Paraná, Brasil.</span>
            <br />
            Atualmente trabalho como desenvolvedor de software fullstack.
            <br />
            Concluindo em junho/2024 o curso de análise e desenvolvimento de sistemas na UniAmérica Centro Universitário.
            <br />
            <br />
            Além da codificação, algumas outras atividades que adoro fazer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
            <li className="about-activity">
              <ImPointRight /> Realizar atividades fisicas
            </li>
            <li className="about-activity">
              <ImPointRight /> Estudar
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
