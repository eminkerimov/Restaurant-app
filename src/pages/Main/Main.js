import React from "react";
import "./Main.scss";
import { connect } from "react-redux";

const Main = (props) => {
  return (
    <div className="main">
      <div className="main__info">
      <h2>BÜTÜN SİFARİŞLƏR : {props.ordersCount}</h2>
      <h2>ÜMUMİ MƏBLƏĞ : {props.ordersSum}</h2>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    ordersSum: state.main.ordersSum,
    ordersCount: state.main.ordersCount,
  };
}

export default connect(mapStateToProps, null)(Main);
