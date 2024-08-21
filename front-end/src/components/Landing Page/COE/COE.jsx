// import React from "react";
// import "./COE.css";
// // import CoeCard from "../../COE Page/COE Card/CoeCard"; // Adjust the path as necessary
// // import Icon from "../../../assets/COE/Icon.png";
// // import Button from "../../Button/Button";
// import {
//   Medicine,
//   Gastroenterology,
//   Urology,
//   Dental,
//   Gynaecology,
//   Surgery,
//   ENT,
//   Skin,
//   Paediatric,
//   Nephrology,
// } from "../../../assets/COE/index";

// import { FaHeart, FaEye } from "react-icons/fa";

// function Excellence() {
//   const specialties = [
//     { name: "Cardiology", icon: <FaHeart /> },
//     {
//       name: "Medicine",
//       icon: <img className="icon_img" src={Medicine} alt="Medicine" />,
//     },
//     {
//       name: "Gastroenterology",
//       icon: (
//         <img
//           className="icon_img"
//           src={Gastroenterology}
//           alt="Gastroenterology"
//         />
//       ),
//     },
//     {
//       name: "Urology",
//       icon: <img className="icon_img" src={Urology} alt="Urology" />,
//     },
//     {
//       name: "Dental",
//       icon: <img className="icon_img" src={Dental} alt="Dental" />,
//     },
//     { name: "Eye", icon: <FaEye /> },
//     {
//       name: "Gynaecology",
//       icon: <img className="icon_img" src={Gynaecology} alt="Gynaecology" />,
//     },
//     {
//       name: "Surgery",
//       icon: <img className="icon_img" src={Surgery} alt="Surgery" />,
//     },
//     { name: "ENT", icon: <img className="icon_img" src={ENT} alt="ENT" /> },
//     { name: "Skin", icon: <img className="icon_img" src={Skin} alt="Skin" /> },
//     {
//       name: "Paediatric",
//       icon: <img className="icon_img" src={Paediatric} alt="Paediatric" />,
//     },
//     {
//       name: "Nephrology",
//       icon: <img className="icon_img" src={Nephrology} alt="Nephrology" />,
//     },
//   ];

//   return (
//     <div className="coe-div">
//       <div className="center">
//         <h1 className="cof">COE</h1>
//         <h1 className="heading"> Centre Of Excellence </h1>
//       </div>
//       <p className="text">
//         {" "}
//         Our prestigious Centre of Excellence offers advanced, state-of-the-art
//         treatments for a wide array of medical conditions. We pride ourselves on
//         providing exceptional expertise and utilizing the latest technology to
//         deliver the highest quality of care.
//       </p>

//       <div className="specialties-container">
//         {specialties.map((specialty, index) => (
//           <div className="specialty-item" key={index}>
//             <div className="specialty-icon">{specialty.icon}</div>
//             <div className="specialty-name">{specialty.name}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Excellence;

import React from "react";
import { Link } from "react-router-dom";
import "./COE.css";
import {
  Medicine,
  Gastroenterology,
  Urology,
  Dental,
  Gynaecology,
  Surgery,
  ENT,
  Skin,
  Paediatric,
  Nephrology,
} from "../../../assets/COE/index";

import { FaHeart, FaEye } from "react-icons/fa";

function Excellence() {
  const specialties = [
    { id: 1, name: "Cardiology", icon: <FaHeart /> },
    {
      id: 2,
      name: "Medicine",
      icon: <img className="icon_img" src={Medicine} alt="Medicine" />,
    },
    {
      id: 3,
      name: "Gastroenterology",
      icon: (
        <img
          className="icon_img"
          src={Gastroenterology}
          alt="Gastroenterology"
        />
      ),
    },
    {
      id: 4,
      name: "Urology",
      icon: <img className="icon_img" src={Urology} alt="Urology" />,
    },
    {
      id: 5,
      name: "Dental",
      icon: <img className="icon_img" src={Dental} alt="Dental" />,
    },
    { id: 12, name: "Eye", icon: <FaEye /> },
    {
      id: 6,
      name: "Gynaecology",
      icon: <img className="icon_img" src={Gynaecology} alt="Gynaecology" />,
    },
    {
      id: 7,
      name: "Surgery",
      icon: <img className="icon_img" src={Surgery} alt="Surgery" />,
    },
    { id: 8, name: "ENT", icon: <img className="icon_img" src={ENT} alt="ENT" /> },
    { id: 9, name: "Skin", icon: <img className="icon_img" src={Skin} alt="Skin" /> },
    {
      id: 10,
      name: "Paediatric",
      icon: <img className="icon_img" src={Paediatric} alt="Paediatric" />,
    },
    {
      id: 11,
      name: "Nephrology",
      icon: <img className="icon_img" src={Nephrology} alt="Nephrology" />,
    },
  ];

  return (
    <div className="coe-div">
      <div className="center">
        <h1 className="cof">COE</h1>
        <h1 className="heading"> Centre Of Excellence </h1>
      </div>
      <p className="text">
        Our prestigious Centre of Excellence offers advanced, state-of-the-art
        treatments for a wide array of medical conditions. We pride ourselves on
        providing exceptional expertise and utilizing the latest technology to
        deliver the highest quality of care.
      </p>

      <div className="specialties-container">
        {specialties.map((specialty) => (
          <Link
            to={`/coedescription/${specialty.id}`}
            className="specialty-item"
            key={specialty.id}
          >
            <div className="specialty-icon">{specialty.icon}</div>
            <div className="specialty-name">{specialty.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Excellence;

