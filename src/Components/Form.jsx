import React from 'react';

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [values, setValues] = React.useState({
    fullname: "",
    email: "",
    hidden: true,
  });

  function handleChange(event) {
    const newValues = {
      ...values,
      hidden: true,
      [event.target.name]: event.target.value
    };
    setValues(newValues);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newValues = {
      ...values,
      hidden: false
    };
    setValues(newValues);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="fullname"
          name="fullname"
          type="fullname"
          value={values.fullname}
          onChange={handleChange}
          placeholder='Fullname'
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
      <label hidden={values.hidden}>Gracias {values.fullname}, te contactaremos cuando antes vía mail</label>
    </div >
  );
};

export default Form;
