import { Row, Col } from 'react-bootstrap';
import React from "react";

const Ferramentas = (props) => {

    const { titulo, lista } = props

    return (
        <Row>
            {titulo}
            <Col className="iconsFerramentas">
                {lista.map((element) => (
                    <Row>
                        <element.icon />
                        <div className="descricaoIcon">
                            {element.description}
                        </div>
                    </Row>
                ))}
            </Col>
        </Row>
    )
};

export default Ferramentas;