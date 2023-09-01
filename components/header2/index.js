import React, { Component } from "react";
import { connect } from "react-redux";
import MobileMenu2 from "../../components/MobileMenu2";
import { removeFromCart } from "../../store/actions/action";
import { Link } from 'react-scroll'
import NavLink from 'next/link'


class Header2 extends Component {
  state = {
    isSearchShow: false,
    isCartShow: false,
  }

  searchHandler = () => {
    this.setState({
      isSearchShow: !this.state.isSearchShow
    })
  }
  cartHandler = () => {
    this.setState({
      isCartShow: !this.state.isCartShow
    })
  }

  render() {
    const { isSearchShow, isCartShow } = this.state;

    const SubmitHandler = (e) => {
      e.preventDefault()
    }

    const ClickHandler = () => {
      window.scrollTo(10, 0);
    }

    const { carts } = this.props;

    let totalPrice = 0;
    if (carts && carts.length > 0) {
      for (let i = 1; i <= carts.length; i++) {
        totalPrice += Number(carts[i - 1].price);
      }
    }

    return (
      <header id="header" className={this.props.topbarNone}>
        <div className={`wpo-site-header ${this.props.hclass}`}>
          <nav className="navigation navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                  <div className="mobail-menu">
                    <MobileMenu2 />
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6">
                  <div className="navbar-header">
                    <NavLink className="navbar-brand" href="/home">
                      <img src='/images/logo.png' alt="" />
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 col-md-1 col-1">
                  <div id="navbar" className="collapse navbar-collapse navigation-holder">
                    <button className="menu-close"><i className="ti-close"></i></button>
                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                      
                      <li><NavLink href="/admin">INICIO</NavLink></li>
                      <li><NavLink href="/agregar-novios" >AGREGAR NOVIOS</NavLink></li>
                      <li><NavLink href="/agregar-regalos" >AGREGAR REGALOS</NavLink></li>
                      <li><NavLink href="/agregar-ordenes" >AGREGAR ORDENES</NavLink></li>
                      <li><NavLink href="/ajustes" >AJUSTES</NavLink></li>
                      
                    </ul>

                  </div>
                </div>                
              </div>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};

export default connect(mapStateToProps, { removeFromCart })(Header2);
