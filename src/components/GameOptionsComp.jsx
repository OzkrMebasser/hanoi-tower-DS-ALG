import {Col, Button} from "react-bootstrap";
import React, { useState } from "react";
import WinMessageComp from "./WinMessageComp"; //pasar a GameOptionsComp 

import PopUp from "./PopUp.jsx";



const GameOptionsComp = ({ disks, setDisks, reset, solve, winCondition, moveCount }) => {
  const [modalShow, setModalShow] = useState(false);


  return (
    <>
   
<div class="container p-1 border-radius">
  <div class=" text-center row row-cols-2 row-cols-lg-3">
    <div className="col-sm-4"><Button ClassName="me-5" variant="primary" onClick={() => setModalShow(true)}>
Como Jugar
</Button>
<PopUp
show = {modalShow}
onHide = {() => setModalShow(false)}
    />      
    </div>
  
    <div class="col-4 col-lg-2"><h6>Total de discos: <Button className="warning">{disks}</Button></h6> </div>
    <div class="col-4 col-lg-2">
      
<Button
  // className="text-black"
  variant="success"
  text="dark"
  onClick={() => {
    setDisks((disks += 1));
  }}
>
  Agregar
</Button>

<Button
  className="text-black"
  variant="warning"
  onClick={() => {
    if (disks >= 2) {
      setDisks((disks -= 1));
    }
  }}
>
  Quitar
</Button></div>
    <div class="col-4 col-lg-2">
    
    {winCondition && <WinMessageComp moveCount={moveCount} />}
    <h6>Movimientos: <Button className="warning">{moveCount}</Button></h6>

  
    </div>
    <div class="col-4 col-lg-2">
    <div className="col-sm mx-auto">
    <Col>
<Button variant="btn btn-danger" onClick={() => reset()}>
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