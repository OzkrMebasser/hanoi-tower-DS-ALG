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
          Transfiera las barras a la torre más a la derecha en el mismo orden de clasificación.
             <br/>           
          No está permitido poner una barra encima de otra más pequeña.
          </h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Da click para jugar</Button>
        </Modal.Footer>
      </Modal>
    );
    };
   
  
  export default PopUp;