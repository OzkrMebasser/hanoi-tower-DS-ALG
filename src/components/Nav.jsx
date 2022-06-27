import React  from "react";
import { Navbar, Container } from "react-bootstrap";

const Nav = () => {
    return (
      <>


  <Navbar href="#home" lassName=" text-center" bg="dark" variant="dark">
    <Container className=" text-center">
      <Navbar.Brand href="#home">
        
       <h3 className=" text-center">
       <img className="iconimg" src="https://play-lh.googleusercontent.com/-wsqpmMBJamI8QMI08q9YcK3jn4t7GxLq_PsrqJQzaiG-pyl0ip3fcou2XZMMzxByF0=w240-h480-rw" alt="" />
        <b className="titleH">H</b>
        <b className="titleA">a</b>
        <b className="titleN">n</b>
        <b className="titleO">o</b>
        <b className="titleI">i</b>
         
         Project</h3>
      </Navbar.Brand>
    </Container>
  </Navbar>
</>
  );
};

export default Nav;

// const Nav = () => {
//   return (
//     <>
//       <nav className=" text-center ">
//         <h3>
//           <b className="titleH">H</b>
//           <b className="titleA">a</b>
//           <b className="titleN">n</b>
//           <b className="titleO">o</b>
//           <b className="titleI">i</b>
//           <img className="iconimg" src="https://play-lh.googleusercontent.com/-wsqpmMBJamI8QMI08q9YcK3jn4t7GxLq_PsrqJQzaiG-pyl0ip3fcou2XZMMzxByF0=w240-h480-rw" alt="" />
//            Project</h3>
//       </nav>
//     </>
//   );
// };

// export default Nav;
