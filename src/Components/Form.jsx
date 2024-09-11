import React from 'react';

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [values, setValues] = React.useState({
    fullname: "",
    email: "",
  });

  function handleChange(event) {
    const newValues = {
      ...values,
      [event.target.name]: event.target.value
    };

    setValues(newValues);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(values);
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
    </div>
  );
};

export default Form;
