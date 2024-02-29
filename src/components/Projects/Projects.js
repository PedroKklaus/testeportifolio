import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import git from "../../Assets/Projects/git.png";
import mgsis from "../../Assets/Projects/mgsis.png";
import afra from "../../Assets/Projects/afra.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Trabalhos </strong> recentes
        </h1>
        <p style={{ color: "white" }}>
        Aqui estão alguns projetos em que trabalhei recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mgsis}
              isBlog={false}
              title="MGsis"
              description="Site da empresa MGSIS Tecnologia, uma empresa onde o produto vendido é um sistema ERP. Além do produto, a empresa também oferece um sistema de suporte do sistema e informática."
              ghLink="https://github.com/PedroKklaus/MGsis"
              demoLink="https://mgsis.com/testmgsis/MGsis/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={afra}
              isBlog={false}
              title="CCIAR"
              description="Projeto realizado para a Prefeitura de Foz do Iguaçu, mais especificamente para o Centro de Convivência do Idoso Afra Roth. Trata-se de um sistema de cadastro, controle de clientes e atividades."
              ghLink="https://github.com/CCIAR-PI/Projeto-Integrador-CCIAR"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={git}
              isBlog={false}
              title="Github"
              description="Esses são alguns outros projetos realizados com PHP, Java, Typescript, angular e javascript"
              ghLink="https://github.com/PedroKklaus?tab=repositories"
              demoLink="https://github.com/PedroKklaus?tab=repositories"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
