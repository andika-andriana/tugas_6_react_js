import React, { Component } from "react";
import "../Style/Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div id="head" style={{ width: "100%" }}>
        <center>
          <table>
            <tbody>
              <tr>
                <td>
                  <h2>
                    <Link to="/" className="link">
                      Home
                    </Link>
                    |
                  </h2>
                </td>
                <td>
                  <h2>
                    <Link to="/menu_makanan" className="link">
                      Makanan
                    </Link>
                    |
                  </h2>
                </td>
                <td>
                  <h2>
                    <Link to="/menu_minuman" className="link">
                      Minuman
                    </Link>
                    |
                  </h2>
                </td>
                <td>
                  <h2>
                    <Link to="/kontak" className="link">
                      Kontak
                    </Link>
                  </h2>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>
    );
  }
}

export default Header;
