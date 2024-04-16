import React, { useState } from "react";


const Form = () => {
  const [user, setUser] = useState({
    fullName: '',
    telephone: '',
    email: '',
    question: ''
  })

  const [show, setShow] = useState(false)

  const [error, setError] = useState(false)

  const handleSumbit = (event) => {
    event.preventDefault()

    if (user.fullName.length > 5 && user.email && user.question) {
      setShow(true)
      console.log(user.fullName + ' con el email: ' + user.email + ' ha completado el formulario con éxito.');
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <div>
      {!show &&
        <form onSubmit={handleSumbit}>
          <label for="fullName">Full name</label>
          <input type="text" required value={user.fullName} onChange={(event) => setUser({ ...user, fullName: event.target.value.trim() })} />

          <label for="telephone">Telephone</label>
          <input type="tel" value={user.telephone} onChange={(event) => setUser({ ...user, telephone: event.target.value })} />

          <label for="email">Email</label>
          <input type="email" required value={user.email} onChange={(event) => setUser({ ...user, email: event.target.value })} />

          <label for="query" >Your query</label>
          <input type="text" required value={user.question} onChange={(event) => setUser({ ...user, question: event.target.value })} />

          <button>Sumbit</button>

        </form>
      }

      {show ? <h5>Gracias {user.fullName}, te contactaremos cuando antes vía mail. </h5> : null}

      {error && <h5>Por favor verifique su información nuevamente.</h5>}
    </div>
  );
};

export default Form;
