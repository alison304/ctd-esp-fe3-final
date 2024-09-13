import React from 'react';

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [values, setValues] = React.useState({
    fullname: "",
    email: "",
    flagValidation: false,
    isSubmit: false
  });

  function handleChange(event) {
    const newValues = {
      ...values,
      flagValidation: false,
      isSubmit: false,
      [event.target.name]: event.target.value
    };
    setValues(newValues);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let newValues = {
      ...values
    };
    // Apply Validations - Begin
    if (values.fullname.length >= 3) {
      newValues.flagValidation = true;
      if (emailRegex.test(newValues.email)) {
        newValues.flagValidation = true;
      } else {
        newValues.flagValidation = false;
      }
    } else {
      newValues.flagValidation = false;
    }
    // Apply Validations - End
    newValues.isSubmit = true;
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
          type="text"
          value={values.email}
          onChange={handleChange}
          placeholder='Email'
        />
        <button type="submit">Send</button>
      </form>
      {values.isSubmit ? (
        <>
          <label hidden={!values.flagValidation}>Gracias {values.fullname}, te contactaremos cuando antes vía mail</label>
          <label hidden={values.flagValidation}>Por favor, verifique su información nuevamente</label>
        </>
      ) : (
        <>
        </>
      )}
    </div >
  );
};

export default Form;
