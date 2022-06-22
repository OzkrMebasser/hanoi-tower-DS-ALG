import {Col, Button } from "react-bootstrap";
import React, { useState } from "react";
import PopUp from "./PopUp.jsx";
import Nav from "./Nav.jsx";


const GameOptionsComp = ({ disks, setDisks, reset, solve }) => {
  const [modalShow, setModalShow] = useState(false);


  return (
    <>
    <Nav/>
<div class="container p-1 border-radius">
  <div class="row row-cols-2 row-cols-lg-3">
    <div class="col-4 col-lg-2"><Button ClassName="me-5" variant="primary" onClick={() => setModalShow(true)}>
Como Jugar
</Button>
<PopUp
show = {modalShow}
onHide = {() => setModalShow(false)}
    />      </div>
    <div class="col-4 col-lg-2">Elige los discos: </div>
    <div class="col-4 col-lg-2"><p> {disks}  </p> </div>
    <div class="col-4 col-lg-2">
      
      <Button
  variant="outline-secondary"
  onClick={() => {
    setDisks((disks += 1));
  }}
>
  +
</Button>
<Button
  variant="outline-secondary"
  onClick={() => {
    if (disks >= 2) {
      setDisks((disks -= 1));
    }
  }}
>
  -
</Button></div>
    <div class="col-4 col-lg-2">
 
 
  
    </div>
    <div class="col-4 col-lg-2">
    <div className="col-sm mx-auto">
    <Col>
<Button variant="outline-secondary" onClick={() => reset()}>
  Reiniciar
</Button>
</Col>
    </div>
    </div>
  </div>
</div>
</>
  );
};

export default GameOptionsComp;