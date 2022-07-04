import { Modal, Button } from "react-bootstrap";

const PopUp = (props) => {
  return (
    <Modal
    
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton >
        <Modal.Title id="contained-modal-title-vcenter">
          ¿Cómo jugar?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>
          El objetivo es tranferir los discos a la torre de la derecha en el
          mismo orden que estan al inicio, es decir, el disco mas grande abajo y
          el mas pequeño arriba.
          <br /> <br />
          No podras poner un disco mas grande encima de otro más pequeño.
          <br /> <br />
          Empieza con 3 discos primero, despues agrega o quita discos para subir o bajar la complejidad del juego.
          </strong>
        </p>
        
        <div className="text-center" ><img style={{ height: "200px", width: "300px", marginBottom: "35px"}}src="https://i.stack.imgur.com/ka3El.gif" alt="img"/><br/><Button className="btn btn-success" onClick={props.onHide}>Da click para jugar</Button></div>
    
      </Modal.Body>
      
    </Modal>
  );
};

export default PopUp;
