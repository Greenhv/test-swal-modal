import React from "react";
import "./styles.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Wizard from "./Wizard";

const MySwal = withReactContent(Swal);

export default function App() {
  const openModal = () => {
    MySwal.fire({
      html: <Wizard />,
      showConfirmButton: false,
      allowEscapeKey: false,
      allowOutsideClick: false
    });
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={openModal}>cickme</button>
    </div>
  );
}
