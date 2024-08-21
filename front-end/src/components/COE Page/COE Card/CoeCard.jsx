import React from 'react';
import "./CoeCard.css";
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';

const CoeCard = ({ icon, subtitle, description, id }) => {
  return (
    <div className="Card">
        <img className="icon" alt="icon" src={icon}></img>
        <p className="subhead">{subtitle}</p>
        <p className="description">{description}</p>
        <Link to={`/coedescription/${id}`}>
          <Button text="Read More" type="fifth" />
        </Link>
    </div>
  )
}

export default CoeCard;
