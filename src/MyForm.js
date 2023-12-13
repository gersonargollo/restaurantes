import React, { useState } from 'react';

const MyForm = () => {
 const [formData, setFormData] = useState({ name: '', email: '' });

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aquí puedes enviar los datos del formulario a un servidor, si lo deseas
 };

 return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre :</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Entregrar</button>
    </form>
 );
};

export default MyForm;