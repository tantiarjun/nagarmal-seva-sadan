import React from 'react';
import './DocBrief.css';

const DoctorProfile = ({ name, doctorImage, doctorUnit, specialty, qualifications, experience, languages, contactNumber }) => {
    return (
        <section className="brief_profile">
            <img className="doctor_image" src={doctorImage} alt="doctor" />
            <div className="profile">
                <div className="main-part">
                    <div className="name-lines">
                        <h2 className="name">{name}</h2>
                        <p className="doc-brief-unit">{doctorUnit}</p>
                    </div>
                    <p className="field">{specialty}</p>
                </div>

                <div className="descript">
                    <div className="qualifications">
                        <p className="title">Qualification</p>
                        <p className="title_descript">{qualifications}</p>
                    </div>

                    <div className="others">
                        <p className="title">Experience</p>
                        <p className="title_descript">{experience} Years</p>

                        <p className="title">Language</p>
                        <p className="title_descript">{languages.join(", ")}</p>
                    </div>
                </div>

                <div className="buttons">
                    <button alt="call" className="call">Call {contactNumber}</button>
                    <button className="book_an_app">Book An Appointment</button>
                </div>
            </div>
        </section>
    );
}

export default DoctorProfile;