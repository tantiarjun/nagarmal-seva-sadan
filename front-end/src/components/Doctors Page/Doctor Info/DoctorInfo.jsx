import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DocInfoPage from './DocInfoPage';
import axios from 'axios';

const DoctorInfo = () => {
  const { id } = useParams();
  const [doctorProfile, setDoctorProfile] = useState(null);
  const [sectionData, setSectionData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/doctors/${id}`)
      .then((response) => {
        setDoctorProfile(response.data.profile);
        setImage(response.data.image);
        setSectionData(response.data.sections);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <DocInfoPage
      subtitle="DOCTORS"
      title="ABOUT OUR DOCTORS"
      image={image}
      doctorProfile={doctorProfile}
      sectionData={sectionData}
    />
  );
}

export default DoctorInfo;