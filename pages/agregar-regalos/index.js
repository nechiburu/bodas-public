import Header2 from '../../components/header2'
import { toast } from "react-toastify";
import clienteAxios from '../../api/axios';
import SimpleReactValidator from "simple-react-validator";
import React, { Fragment, useState } from 'react';


const AddProductForm = () => {
  const [value, setValue] = useState({
    slug: '',
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
      const formData = new FormData();
      formData.append('proImg', e.target.proImg.files[0]);
      formData.append('slug', value.slug);
      formData.append('title', value.title);
      formData.append('price', value.price);
      formData.append('delPrice', value.delPrice);
      formData.append('brand', value.brand);
      formData.append('size', value.size);

      const respuesta = await clienteAxios.post('/products', formData);
      console.log(respuesta);
      toast.success('El producto se agregó correctamente');
      
    } catch (error) {
      console.log(error);
      toast.error('Hubo un error al agregar el producto');
    }
  };

  return (
    <Fragment>
      <Fragment>
        <Header2 />
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
                type="file"
                name="proImg"
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
      </Fragment>
    </Fragment>
  );
};

export default AddProductForm;
