import {Modal, Button} from 'react-bootstrap';



const PopUp = (props) => {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            ¿Cómo jugar?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>
          El objetivo es tranferir los discos a la torre de la derecha en el mismo orden que estan al inicio, es decir, el disco mas grande abajo y el mas pequeño arriba.
             <br/> <br/>            
          No podras poner un disco mas grande encima de otro más pequeño.
             <br/>  <br/>  
          Agrega o quita discos para subir o bajar la complejidad del juego.         
          </h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Da click para jugar</Button>
        </Modal.Footer>
      </Modal>
    );
    };
   
  
  export default PopUp;