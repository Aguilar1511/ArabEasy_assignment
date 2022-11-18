import React from "react";
import { useState, useEffect } from "react";
import "../../css/clientinfo.css";

export const ClientInfo = ({ FetchLink }) => {
  const handleMouseOver = (e) => {
    e.target.innerHTML = "DETAILS";
    e.target.style.color = "blue";
  };

  const handleMouseOut = (e) => {
    e.target.innerHTML = "INVOICE CODES";
    e.target.style.color = "black";
  };

  // const [list, setlist] = useState([]);

  // useEffect(() => {
  //   async function FetchLink() {
  //     fetch(apilink)
  //       .then((res) => res.json())
  //       .then((res) => setlist(res))
  //       .catch((err) => console.log(err));
  //     console.log(list);
  //   }
  //   FetchLink();
  // }, []);
  // var arr=[{1:'2'},{2:"2"},{3:"8"}]
  // console.log(arr[0]["1"])
  const b = FetchLink;
  console.log(b);

  return (
    <div>
      <div className="nav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              ENTITIES
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              INVOICE CODES
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              USERS
            </a>
          </li>
        </ul>
      </div>
      <section className="parent">
        <div className="child">
          <h5>4 Entities</h5>
          <span>
            <h2 class="symbol">+</h2>
          </span>
        </div>
        <container className="container">
          <table className="table">
            <tbody className="tbody">
              <tr className="first-row">
                <th>Billing Location</th>
                <th>Entity Name</th>
                <th>Entity Code</th>
                <th>MSLA Valid Through</th>
                <th>File Shared</th>
              </tr>
              <tr className="second-row">
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>{b.length && b[0].id}</td>
                <td>{b.length && b[0].date}</td>
              </tr>
            </tbody>
          </table>
          <table1 className="table1">
            <tbody1 className="">
              <tr className="">
                <th style={{ backgroundColor: "aliceblue" }}>Address</th>
                <th style={{ backgroundColor: "aliceblue" }}>
                  Company Registration Number
                </th>
                <th style={{ backgroundColor: "aliceblue" }}>
                  Tax Registration Number{" "}
                </th>
              </tr>
              <tr className="">
                <td style={{ backgroundColor: "aliceblue" }}>
                  {b.length && b[0].id}
                </td>
                <td style={{ backgroundColor: "aliceblue" }}>
                  {b.length && b[0].id}
                </td>
                <td style={{ backgroundColor: "aliceblue" }}>
                  {b.length && b[0].id}
                </td>
              </tr>
            </tbody1>
          </table1>
          <table1 className="table1">
            <tbody1 className="">
              <tr className="">
                <th style={{ backgroundColor: "aliceblue" }}>
                  Charge Code/PO number
                </th>
                <th style={{ backgroundColor: "aliceblue" }}>
                  Duration of File Storage
                </th>
                <th style={{ backgroundColor: "aliceblue" }}>Currency</th>
              </tr>
              <tr className="">
                <td style={{ backgroundColor: "aliceblue" }}>
                  {b.length && b[0].id}
                </td>
                <td style={{ backgroundColor: "aliceblue" }}>
                  {b.length && b[0].id}
                </td>
                <td style={{ backgroundColor: "aliceblue" }}>
                  {b.length && b[0].id}
                </td>
              </tr>
            </tbody1>
          </table1>
          <table1 className="table1">
            <tbody1 className="">
              <tr className="">
                <th style={{ backgroundColor: "aliceblue" }}>Msla</th>
                <th style={{ backgroundColor: "aliceblue" }}></th>
                <th style={{ backgroundColor: "aliceblue" }}>VAT</th>
              </tr>
              <tr className="">
                <td style={{ backgroundColor: "aliceblue" }}>
                  {b.length && b[0].id}
                </td>
                <td style={{ backgroundColor: "aliceblue" }}></td>
                <td style={{ backgroundColor: "aliceblue" }}>
                  {b.length && b[0].id}
                </td>
              </tr>
            </tbody1>
          </table1>
          <p>
            Coporate Price as per MSLA
            <br />
          </p>
          <table2>
            <tbody2 className="tableheading">
              <tr>
                <th classname="">Service</th>
                <th classname="">Units</th>
                <th classname="">List Price</th>
                <th classname="">Offer Price</th>
                <th classname="">Discount</th>
              </tr>
              <div className="cc">
                <tr>
                  <td>{b.length && b[0].id}</td>
                  <td>{b.length && b[0].id}</td>
                  <td>{b.length && b[0].id}</td>
                  <td>{b.length && b[0].id}</td>
                  <td>{b.length && b[0].id}</td>
                </tr>
                <tr>
                  <td>{b.length && b[0].id}</td>
                  <td>{b.length && b[0].id}</td>
                  <td>{b.length && b[0].id}</td>
                  <td>{b.length && b[0].id}</td>
                  <td>{b.length && b[0].id}</td>
                </tr>
                <tr>
                  <td>{b.length && b[0].id}</td>
                  <td>{b.length && b[0].id}</td>
                  <td>{b.length && b[0].id}</td>
                  <td>{b.length && b[0].id}</td>
                  <td>{b.length && b[0].id}</td>
                </tr>
                <tr>
                  <td>{b.length && b[0].id}</td>
                  <td>{b.length && b[0].id}</td>
                  <td>{b.length && b[0].id}</td>
                  <td>{b.length && b[0].id}</td>
                  <td>{b.length && b[0].id}</td>
                </tr>
                <tr>
                  <td>{b.length && b[0].id}</td>
                  <td>{b.length && b[0].id}</td>
                  <td>{b.length && b[0].id}</td>
                  <td>{b.length && b[0].id}</td>
                  <td>{b.length && b[0].id}</td>
                </tr>
                <tr>
                  <td>{b.length && b[0].id}</td>
                  <td>{b.length && b[0].id}</td>
                  <td>{b.length && b[0].id}</td>
                  <td>{b.length && b[0].id}</td>
                  <td>{b.length && b[0].id}</td>
                </tr>
              </div>
            </tbody2>
          </table2>
        </container>
      </section>
    </div>
  );
};
