import React, { Fragment, useState ,useEffect} from "react";
import { connect } from "react-redux";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import api from "../../api";
import { addToCart } from "../../store/actions/action";
import ShopProduct from '../../components/ShopProduct';
import ProductSidebar from "../../components/ShopProduct/sidebar";
import clienteAxios from "../../api/axios"

const ShopPage = (props) => {
  const productsArray = api();

  const addToCartProduct = (product, qty = 1) => {
    props.addToCart(product, qty);
  };
  const [products,setProductos] = useState([]);

  //useEffect para consultar la API
  useEffect(
    ()=>{
      //query a la api
      const consultarApi = async () => {
        const productosConsulta = await clienteAxios.get('/products')
        setProductos(productosConsulta.data)
      }

      consultarApi()
    },[])


  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={"Shop"} pagesub={"Shop"} />
      <section className="wpo-shop-page section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 order-lg-2">
              <ShopProduct
                addToCartProduct={addToCartProduct}
                products={products}
              />
            </div>
            <ProductSidebar addToCartProduct={addToCartProduct}
              products={products} />
          </div>
        </div>
      </section>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default connect(null, { addToCart })(ShopPage);
