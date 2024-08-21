import React from 'react';
import './DoctorCard.css';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';

const DoctorCard = ({ doctorImage, doctorName, doctorUnit, doctorExperience, doctorDescription, docProfileID}) => {
  return (
    <div className="DOCcard">
        <div className="doc-card-content">
            <img src={doctorImage} className="doc_image" alt="Doctor"></img>
            <div className="doc-information">
                <div className="text-container">
                    <p className="doc-name">{doctorName}</p>
                    <p className="unit">{doctorUnit}</p>
                </div>
                            
                <div className="doc-speciality">
                    Experience {doctorExperience}
                </div>
            </div>
                
            <p className="more">{doctorDescription}</p>
                
            <div className="doc-buttons">
                {/* <Button text='Book Now' type='tertiary'/>
                <Link to={`/doctors/${docProfileID}`}>
                    <Button text='View More' type='secondary'/>
                </Link> */}
                <button className="book-doctor">Book Now</button>
                <Link to={`/doctors/${docProfileID}`}>
                    <button className="view-more-doctor">View More</button>
                </Link>
            </div>
        </div>
    </div>
  );
}

export default DoctorCard;

