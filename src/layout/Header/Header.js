import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { connect } from "react-redux";
import { SET_INITIAL } from "../../store/actions/actionTypes";
const Header = (props) => {
  return (
    <div className="header">
      <div className="header__up"></div>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__button">
            <Link to="/" onClick={props.setInitialState}>
              <i className="fa-solid fa-house"></i>
              <h3>Əsas Səhifə</h3>
            </Link>
          </div>
          <div className="header__button">
            <Link to="/all-orders">
                <i className="fas fa-utensils"></i>
                <h3>Bütün Sifarişlər</h3>
            </Link>
          </div>
          <div className="header__button">
            <Link to="/create-order">
                <i className="fa-solid fa-clipboard-list"></i>
                <h3>Sifariş Yarat</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    setInitialState: () => dispatch({ type: SET_INITIAL }),
  };
}

export default connect(null, mapDispatchToProps)(Header);
