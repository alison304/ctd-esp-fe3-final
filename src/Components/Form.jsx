import React from 'react';

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [values, setValues] = React.useState({
    fullname: "",
    email: "",
    flagMessageSuccess: false,
    flagMessageError: false
  });

  function handleChange(event) {
    const newValues = {
      ...values,
      flagMessageSuccess: false,
      flagMessageError: false,
      [event.target.name]: event.target.value
    };
    setValues(newValues);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let newValues = {
      ...values
    };
    if (values.fullname.length >= 3) {
      newValues.flagMessageSuccess = true;
    } else {
      newValues.flagMessageError = true;
    }
    setValues(newValues);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="fullname"
          name="fullname"
          type="text"
          value={values.fullname}
          onChange={handleChange}
          placeholder='Full name'
        />
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder='Email'
        />
        <button type="submit">Send</button>
      </form>
      <label hidden={!values.flagMessageSuccess}>Gracias {values.fullname}, te contactaremos cuando antes vía mail</label>
      <label hidden={!values.flagMessageError}>Por favor, verifique su información nuevamente</label>
    </div >
  );
};

export default Form;
