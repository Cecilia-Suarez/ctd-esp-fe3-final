import React from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form>
        <input type="text" placeholder="Full name"/>

        <input type="text" placeholder="Telephone" />

        <input type="email" placeholder="Email"/>

        <input type="text" placeholder="Your questions" />

        <button>Sumbit</button>

      </form>
    </div>
  );
};

export default Form;
