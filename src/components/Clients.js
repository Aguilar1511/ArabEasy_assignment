import React from "react";
import "../../css/clients.css";
import { useState, useEffect } from "react";

const clientapi = [
  {
    Company_Name: "Mc Kinsley",
    CODE: "MCK1",
    Entities: "8entities",
    USERS: 64
  },
  {
    Company_Name: "Mc Kinsley",
    CODE: "MCK1",
    Entities: "8entities",
    USERS: 64
  },
  {
    Company_Name: "Mc Kinsley",
    CODE: "MCK1",
    Entities: "8entities",
    USERS: 64
  },
  {
    Company_Name: "Mc Kinsley",
    CODE: "MCK1",
    Entities: "8entities",
    USERS: 64
  },
  {
    Company_Name: "Mc Kinsley",
    CODE: "MCK1",
    Entities: "8entities",
    USERS: 64
  },
  {
    Company_Name: "Mc Kinsley",
    CODE: "MCK1",
    Entities: "8entities",
    USERS: 64
  },
  {
    Company_Name: "Mc Kinsley",
    CODE: "MCK1",
    Entities: "8entities",
    USERS: 64
  },
  {
    Company_Name: "Mc Kinsley",
    CODE: "MCK1",
    Entities: "8entities",
    USERS: 64
  },
  {
    Company_Name: "Mc Kinsley",
    CODE: "MCK1",
    Entities: "8entities",
    USERS: 64
  },
  {
    Company_Name: "Mc Kinsley",
    CODE: "MCK1",
    Entities: "8entities",
    USERS: 64
  },
  { Company_Name: "Mc Kinsley", CODE: "MCK1", Entities: "8entities", USERS: 64 }
];

export const Clients = () => {
  var count = 0;
  const handleClick = (e) => {
    // e.preventDefault();
    count++;
    if (count === 1) {
      e.target.style.backgroundColor = "#1E2952";
      e.target.style.color = "white";
    } else {
      e.target.style.backgroundColor = "";
      e.target.style.color = "";
      count = 0;
    }
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  // const handleDoubleClick=(e)=>{
  //   e.target.style.backgroundColor = "";
  //   e.target.style.color = "black";
  // }
  // const[color,setColor]=useState(["red"]);

  // useEffect(()=>{
  //   setColor(click)
  //   }
  //   fetchAPI();

  // },[])

  // function Api(){
  //   setClient(clientapi)
  // }

  // Api();

  // console.log(client)

  return (
    <div>
      <section className="clientlist">
        <h2>Clients</h2>
        <input placeholder="Company,entity,user,domain,Service,Location" />
      </section>
      <div className="flex-container">
        {clientapi.map((item, index) => {
          return (
            <div className="flex-item" onClick={handleClick} disabled={true}>
              <div className="leftcol" disabled={true}>
                {item.Company_Name}
              </div>
              <div className="rightcol">{item.CODE}</div>
              <div className="downleftcol">{item.Entities}</div>
              <div className="downrightcol">{item.USERS}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
