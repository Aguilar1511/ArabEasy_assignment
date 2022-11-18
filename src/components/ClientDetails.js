import React from "react";
import "../../css/clientdetails.css";
import "../../css/dashboard.css";
import pdf from "../../images/pdf.jpg";
import { useState, useEffect } from "react";
import { ClientInfo } from "./ClientInfo";

export const ClientDetails = () => {
  const apilink =
    "https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed";

  const [list, setlist] = useState([]);

  useEffect(() => {
    async function FetchLink() {
      fetch(apilink)
        .then((res) => res.json())
        .then((res) => setlist(res))
        .catch((err) => console.log(err));
    }
    FetchLink();
  }, []);
  // console.log(list)
  return (
    <div className="container-flex">
      <img src={pdf} className="pdfpic" alt={"not found"}></img>
      <h3 className="comname">Lucas Films Private Limited</h3>
      <div className="code">Company code</div>
      <div className="showcode">{list.length && list[0].id}</div>
      <div className="logo1">Company logo</div>
      <div className="showlogo">Unavailable</div>
      <div className="domain">Domains</div>
      <div className="showdomain1">{list.length && list[0].slug}</div>
      <div className="showdomain2">{list.length && list[0].link}</div>
      <div className="showdomain3">{list.length && list[0].shortlink}</div>
      <ClientInfo FetchLink={list} />
    </div>
  );
};
