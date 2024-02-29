import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEIXE  <span className="purple"> APRESENTAR-ME</span>
            </h1>
            <p className="home-about-body">
            Me apaixonei por programação e pelo menos aprendi alguma coisa, eu acho… 🤷‍♂️
              <br/>
              <br /> Sempre fui apaixonado por computadores e jogos online e, com influência dos meus tios, que são programadores,
              iniciei na área 
              da programação em 2022, onde comecei a fazer faculdade de análise e desenvolvimento de sistemas. Durante o tempo de Faculdade, 
              realizei também cursos de programação, como Lógica de Programação, Python, JavaScript e React. 
              <br/>
              Entrei 100% 
              na área em outubro de 2022, quando fiz meu primeiro estágio como desenvolvedor e desde então estou focado 100% na 
              programação. Atualmente tenho trabalhado como 

              <i>
                <b className="purple"> desenvolvedor fullstack. </b>
              </i>
              <br />   
              <br/>
              Minha área de interesse é a construção de novas&nbsp;
              <i>
                <b className="purple">tecnologias e produtos Web. </b>
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ borderRadius: "50%", marginTop: "20px", width: "350px", height: "350px" }}/>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ME ENCONTRE </h1>
            <p>
              sinta-se a vontade para se <span className="purple">conectar </span>comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/PedroKklaus"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Pedrocaklaus"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pedro-henrique-klaus-25920b1b5/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pedro.klaaus/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/+5545991061579"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <IoLogoWhatsapp />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
