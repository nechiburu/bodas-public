import React, { useState } from 'react';
import clienteAxios from '../../api/axios';
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";

const AddProductForm = () => {
  const [value, setValue] = useState({
    slug: '',
    proImg: '',
    title: '',
    price: '',
    delPrice: '',
    brand: '',
    size: '',
  });

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    validator.showMessages();
  };

  const [validator] = useState(
    new SimpleReactValidator({
      className: 'errorMessage'
    })
  );


  const submitForm = async (e) => {
    e.preventDefault();
    try {
        const respuesta = await clienteAxios.post('/products',value)
        console.log(respuesta)
        toast.success('El producto se agrego correctamnte');
  
    } catch (error) {
        console.log(error)
        toast.error('Hubo un error!');
    }
  };

  return (
    <div>
      <h1>Agregar Producto</h1>
      <form onSubmit={submitForm}>
        <div>
          <label>Slug:</label>
          <input
            type="text"
            name="slug"
            value={value.slug}
            onChange={(e) => changeHandler(e)}
            required
          />
        </div>
        <div>
          <label>Imagen del Producto:</label>
          <input
            type="text"
            name="proImg"
            value={value.proImg}
            onChange={(e) => changeHandler(e)}
            required
          />
        </div>
        <div>
          <label>Título:</label>
          <input
            type="text"
            name="title"
            value={value.title}
            onChange={(e) => changeHandler(e)}
            required
          />
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="number"
            name="price"
            value={value.price}
            onChange={(e) => changeHandler(e)}
            required
          />
        </div>
        <div>
          <label>Precio de Descuento:</label>
          <input
            type="number"
            name="delPrice"
            value={value.delPrice}
            onChange={(e) => changeHandler(e)}
            required
          />
        </div>
        <div>
          <label>Marca:</label>
          <input
            type="text"
            name="brand"
            value={value.brand}
            onChange={(e) => changeHandler(e)}
            required
          />
        </div>
        <div>
          <label>Tamaño:</label>
          <input
            type="text"
            name="size"
            value={value.size}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default AddProductForm;
