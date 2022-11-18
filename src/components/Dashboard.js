import React from "react";
import { Clients } from "./Clients";
import { ClientDetails } from "./ClientDetails";
import "../../css/dashboard.css";
import logo from "../../images/logo.jpg";
import profilepic from "../../images/profilepic.png";

export const Dashboard = () => {
  return (
    <div>
      <section className="x">
        <h6 className="user">Hi Abhishek</h6>
        <img className="profilepic" src={profilepic} alt="noo"></img>
      </section>
      <section className="dash1">
        <img className="logo" src={logo} alt="bn"></img>
        <Clients />
      </section>
      <div>
        <ClientDetails />
      </div>
    </div>
  );
};
