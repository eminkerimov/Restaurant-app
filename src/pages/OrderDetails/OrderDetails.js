import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import "./OrderDetails.scss";
import { connect } from "react-redux";

const OrderDetails = (props) => {
  const { id } = useParams();
  const order = props.orders?.find((o) => o.id == id);

  return (
    <div className="orderDetails">
    <div className="container">
      <div className="orderDetails__card">
          <h2>{id} nömrəli sifariş</h2>
          <h2>Masa : {order?.masa}</h2>
          <h2>Ofisiant : {order?.servant}</h2>
          <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Say</TableCell>
                    <TableCell align="right">Məhsulun Adı</TableCell>
                    <TableCell align="right">Miqdar</TableCell>
                    <TableCell align="right">Məbləğ</TableCell>
                    <TableCell align="right">Sifariş saatı</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {order.foods?.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell align="right">{row?.name}</TableCell>
                      <TableCell align="right">{row?.amount}</TableCell>
                      <TableCell align="right">
                        {row.amount * row.price}
                      </TableCell>
                      <TableCell align="right">{row?.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <p>Cəm Məbləğ : {order?.amount} AZN</p>
            </TableContainer>
        </div>
      </div>
      </div>
  );
};

function mapStateToProps(state) {
  return {
    orders: state.main.orders,
    ordersSum: state.main.ordersSum,
  };
}

export default connect(mapStateToProps, null)(OrderDetails);
