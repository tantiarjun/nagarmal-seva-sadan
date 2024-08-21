import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './Doctors.css';
import DoctorCard from '../Doctor Card/DoctorCard';
import Button from '../../Button/Button';
import axios from 'axios';
import dorpIcon from '../../../assets/Team/down.svg'

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [input, setInput] = useState('');
    const [filteredDoctors, setFilteredDoctors] = useState(doctors);

    // Fetch doctors from the server
    useEffect(() => {
        axios.get('http://localhost:3000/doctors')
            .then((response) => {
                setDoctors(response.data);
                setFilteredDoctors(response.data); // Initially set filtered doctors to all doctors
            })
            .catch((error) => {
                setError(error);
            });
    }, []);

    // Page for displaying doctors
    const filterBySpeciality = (speciality) => {
        if (speciality === 'Select Speciality') {
            setFilteredDoctors(doctors);
        } else {
            setFilteredDoctors(doctors.filter(doctor => doctor.speciality === speciality));
        }
    }

    const specialities = Array.from(
        new Set(doctors.map((doctor) => doctor.speciality))
    )


    return (
        <div className="doctors-page">
            <div className="doc-page-title">
                <p>DOCTORS</p>
                <h1>WE HAVE THE BEST DOCTOR IN RANCHI</h1>
            </div>

            <div className="doc-page-description">
                <div className="filter-speciality">
                    <div className="select-wrapper">
                        <select className="select-doc-speciality" onChange={e => filterBySpeciality(e.target.value)}>
                            <option value="Select Speciality">Select Speciality</option>
                            {specialities.map((department, index) => (
                                <option key={index} value={department}>
                                    {department}
                                </option>
                            ))}
                        </select>
                        <img src={dorpIcon} alt="drop" className="dropdown-icon" />
                    </div>

                    <div className="doc-search">
                        <div className="doc-search-bar">
                            <FaSearch id="doc-search-icon" />
                            <input
                                type="text"
                                placeholder="Type the doctor you want to search for"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                        </div>
                        <Button text="Search" type='tertiary' style={{ marginBottom: "35px" }} />
                    </div>
                </div>

                <div className="doc-cards-page">
                    {filteredDoctors.slice(0, 9).map((doc, index) => (
                        <DoctorCard
                            doctorImage={doc.image}
                            doctorName={doc.name}
                            doctorUnit={doc.unit}
                            doctorExperience={doc.profile.experience}
                            doctorDescription={doc.description}
                            docProfileID={doc._id}
                        />
                    ))}
                </div>

                <div className="doc-view-more-container">
                    <Button text="View More" type='secondary' />
                </div>
            </div>
        </div>
    );
};

export default Doctors;
