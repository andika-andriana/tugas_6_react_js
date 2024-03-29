import React, { Component } from "react";
import DaftarMakanan from "../Lib/DaftarMakanan.js";
import Header from "./Header.js";

class MenuMakanan extends Component {
  render() {
    return (
      <div>
        <Header />
        <h3>Daftar Makanan Favorite</h3>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              {DaftarMakanan.map((data, index) => {
                return (
                  <td key={index}>
                    <center>
                      <img
                        src={data.img}
                        alt="Gambar Product"
                        width="150"
                        height="100"
                      />
                      <p>{data.NamaMakanan}</p>
                      <p>Harga : Rp. {data.Harga}</p>
                    </center>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MenuMakanan;
