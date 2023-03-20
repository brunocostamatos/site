import footerSVG from './assets/footer.svg';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill, BsFillEnvelopeAtFill, BsFileEarmarkFill, BsPersonFill, BsFolderFill } from 'react-icons/bs';
import { AiFillHtml5, AiFillGithub, AiFillGitlab } from 'react-icons/ai';
import { FaCss3Alt, FaFigma, FaReact } from 'react-icons/fa';
import { SiJavascript, SiNodered, SiPython } from 'react-icons/si';

function App() {
  const [darkMode, setDarkMode] = useState(Number(localStorage.getItem("darkMode")));

  const coisas = {
    listaFront: [
      { description: "Html", icon: AiFillHtml5 },
      { description: "Css", icon: FaCss3Alt },
      { description: "JavaScript", icon: SiJavascript },
      { description: "Python", icon: SiPython },
      { description: "React", icon: FaReact }
    ],
    listaFerramentas: [
      { description: "GitHub", icon: AiFillGithub },
      { description: "GitLab", icon: AiFillGitlab },
      { description: "Figma", icon: FaFigma },
      { description: "Node-Red", icon: SiNodered }
    ]
  }

  
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  function scrollElement(idDiv) {
    var element = document.getElementById(idDiv);
    element.scrollIntoView();
  }
  function calculateAge() {
    var d1 = 10;
    var m1 = 11;
    var y1 = 1997;

    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2) {
      d2 = d2 + month[m2 - 1];
      m2 = m2 - 1;
    }
    if (m1 > m2) {
      m2 = m2 + 12;
      y2 = y2 - 1;
    }

    var y = y2 - y1;

    return (y)
  }

  calculateAge()
  return (
    <div className={darkMode === 0 ? "App" : "AppDarkMode"}>
      <div className="App-header">
        <Container>
          <Row>
            <Col>{darkMode === 0 ?
              <BsFillMoonFill className="icons" onClick={() => darkMode === 0 ? setDarkMode(1) : setDarkMode(0)} />
              : <BsFillSunFill className="icons" onClick={() => darkMode === 0 ? setDarkMode(1) : setDarkMode(0)} />}
            </Col>
            <Col>
            </Col>
            <Col className="colIcons">
              <BsFillEnvelopeAtFill className="icons" />
              <text className="textIcons">
                brunocostamatos@gmail.com
              </text>
            </Col>
            <Col>
            </Col>
            <Col className="colIcons" onClick={() => scrollElement("Perfil")}>
              <BsPersonFill className="icons" />
              <text className="textIcons">
                Perfil
              </text>
            </Col>
            <Col className="colIcons" onClick={() => scrollElement("Curriculo")}>
              <BsFileEarmarkFill className="icons" />
              <text className="textIcons">
                Currículo
              </text>
            </Col>
            <Col className="colIcons" onClick={() => scrollElement("Projetos")}>
              <BsFolderFill className="icons" />
              <text className="textIcons">
                Projetos
              </text>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="App-body">
        <Container className={darkMode === 0 ? "texto" : "textoDarkMode"}>
          <Container id="Perfil">
            <Row>
              Perfil Branch Dev
            </Row>
            <Container>
              <Row>
                Bruno Costa de Matos
              </Row>
              <Row>
                Desenvolvedor, Carioca, {calculateAge()} anos
              </Row>
              <Row>
                Front-End
                <Col className="iconsFerramentas">
                  {coisas.listaFront.map((element) => (
                    <Row>
                      <element.icon />
                      <div className="descricaoIcon">
                        {element.description}
                      </div>
                    </Row>
                  ))}
                </Col>
              </Row>
              <Row>
                Ferramentas
                <Col className="iconsFerramentas">
                  {coisas.listaFerramentas.map((element) => (
                    <Row>
                      <element.icon />
                      <div className="descricaoIcon">
                        {element.description}
                      </div>
                    </Row>
                  ))}
                </Col>
                {}
              </Row>
            </Container>
          </Container>
          <hr className={darkMode === 0 ? "" : "lineDarkMode"}></hr>
          <Container id="Curriculo">
            <Row className={darkMode === 0 ? "texto" : "textoDarkMode"}>
              Currículo
            </Row>
            <Container>
              <Row className={darkMode === 0 ? "texto" : "textoDarkMode"}>
                Teste
              </Row>
            </Container>
          </Container>
          <hr className={darkMode === 0 ? "" : "lineDarkMode"}></hr>
          <Container id="Projetos">
            <Row className={darkMode === 0 ? "texto" : "textoDarkMode"}>
              Projetos
            </Row>
            <Container>

              <Row className={darkMode === 0 ? "texto" : "textoDarkMode"}>
                Teste
              </Row>
            </Container>
          </Container>
        </Container>
      </div>
      <div className="App-footer">
        <img src={footerSVG} className="footerSVG" alt="footerSVG" />
      </div>
    </div>
  );
}

export default App;


