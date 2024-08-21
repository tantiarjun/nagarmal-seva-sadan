import React, { useState } from 'react';
import axios from 'axios';
import './Doctors.css';

const Doctors = () => {
  const [doctorData, setDoctorData] = useState({
    image: null,
    name: '',
    unit: '',
    speciality: '',
    description: '',
    profile: {
      name: '',
      doctorUnit: '',
      specialty: '',
      qualifications: '',
      experience: '',
      languages: [''],
      contactNumber: '',
    },
    sections: [
      {
        id: '',
        type: '',
        title: '',
        content: '',
        className: '',
      },
    ],
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setDoctorData((prevState) => ({
      ...prevState,
      profile: {
        ...prevState.profile,
        [name]: value,
      },
    }));
  };

  const handleSectionChange = (index, e) => {
    const { name, value } = e.target;
    const sections = [...doctorData.sections];
    sections[index][name] = value;
    setDoctorData({ ...doctorData, sections });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDoctorData((prevState) => ({
        ...prevState,
        image: file,
      }));
    }
  };

  const handleLanguagesChange = (e) => {
    const languagesArray = e.target.value.split(',').map((lang) => lang.trim());
    setDoctorData((prevState) => ({
      ...prevState,
      profile: {
        ...prevState.profile,
        languages: languagesArray,
      },
    }));
  };

  const addSection = () => {
    setDoctorData((prevState) => ({
      ...prevState,
      sections: [
        ...prevState.sections,
        { id: '', type: '', title: '', content: '', className: '' },
      ],
    }));
  };

  const postFile = async (data) => {
    const formData = new FormData();
    formData.append('image', data.image);
    formData.append('name', data.name);
    formData.append('unit', data.unit);
    formData.append('speciality', data.speciality);
    formData.append('description', data.description);

    formData.append('profile[name]', data.profile.name);
    formData.append('profile[doctorUnit]', data.profile.doctorUnit);
    formData.append('profile[specialty]', data.profile.specialty);
    formData.append('profile[qualifications]', data.profile.qualifications);
    formData.append('profile[experience]', data.profile.experience);
    formData.append('profile[languages]', data.profile.languages.join(', '));
    formData.append('profile[contactNumber]', data.profile.contactNumber);

    data.sections.forEach((section, index) => {
      formData.append(`sections[${index}][id]`, section.id);
      formData.append(`sections[${index}][type]`, section.type);
      formData.append(`sections[${index}][title]`, section.title);
      formData.append(`sections[${index}][content]`, section.content);
      formData.append(`sections[${index}][className]`, section.className);
    });

    try {
      const result = await axios.post('http://localhost:3000/doctors', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return result.data;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');
    try {
      const response = await postFile(doctorData);
      console.log('Form submitted successfully:', response);
      setSuccessMessage('Doctor profile submitted successfully!');
      setDoctorData({
        image: null,
        name: '',
        unit: '',
        speciality: '',
        description: '',
        profile: {
          name: '',
          doctorUnit: '',
          specialty: '',
          qualifications: '',
          experience: '',
          languages: [''],
          contactNumber: '',
        },
        sections: [
          { id: '', type: '', title: '', content: '', className: '' },
        ],
      });
    } catch (error) {
      setErrorMessage('Failed to submit doctor profile. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1> Doctors Profile </h1>
        <label>Upload Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} required />
        {doctorData.image && (
          <div>
            <img
              src={URL.createObjectURL(doctorData.image)}
              alt="Doctor Preview"
              style={{ width: '100px', height: '100px', objectFit: 'cover', marginTop: '10px' }}
            />
          </div>
        )}
      </div>

      <div>
        <label>Name:</label>
        <input type="text" name="name" value={doctorData.name} onChange={handleChange} required />
      </div>

      <div>
        <label>Unit:</label>
        <input type="text" name="unit" value={doctorData.unit} onChange={handleChange} required />
      </div>

      <div>
        <label>Speciality:</label>
        <input type="text" name="speciality" value={doctorData.speciality} onChange={handleChange} required />
      </div>

      <div>
        <label>Description:</label>
        <textarea name="description" value={doctorData.description} onChange={handleChange} required />
      </div>

      <h2>Profile Details</h2>
      <div>
        <label>Profile Name:</label>
        <input type="text" name="name" value={doctorData.profile.name} onChange={handleProfileChange} required />
      </div>

      <div>
        <label>Doctor Unit:</label>
        <input type="text" name="doctorUnit" value={doctorData.profile.doctorUnit} onChange={handleProfileChange} required />
      </div>

      <div>
        <label>Specialty:</label>
        <input type="text" name="specialty" value={doctorData.profile.specialty} onChange={handleProfileChange} required />
      </div>

      <div>
        <label>Qualifications:</label>
        <input
          type="text"
          name="qualifications"
          value={doctorData.profile.qualifications}
          onChange={handleProfileChange}
          required
        />
      </div>

      <div>
        <label>Experience:</label>
        <input type="text" name="experience" value={doctorData.profile.experience} onChange={handleProfileChange} required />
      </div>

      <div>
        <label>Languages:</label>
        <input
          type="text"
          name="languages"
          value={doctorData.profile.languages.join(', ')}
          onChange={handleLanguagesChange}
          required
        />
      </div>

      <div>
        <label>Contact Number:</label>
        <input
          type="text"
          name="contactNumber"
          value={doctorData.profile.contactNumber}
          onChange={handleProfileChange}
          required
        />
      </div>

      <h2>Sections</h2>
      {doctorData.sections.map((section, index) => (
        <div key={index}>
          <label>Section ID:</label>
          <input type="text" name="id" value={section.id} onChange={(e) => handleSectionChange(index, e)} required />

          <label>Section Type:</label>
          <input type="text" name="type" value={section.type} onChange={(e) => handleSectionChange(index, e)} required />

          <label>Section Title:</label>
          <input type="text" name="title" value={section.title} onChange={(e) => handleSectionChange(index, e)} required />

          <label>Section Content:</label>
          <textarea name="content" value={section.content} onChange={(e) => handleSectionChange(index, e)} />

          <label>Class Name:</label>
          <input type="text" name="className" value={section.className} onChange={(e) => handleSectionChange(index, e)} />
        </div>
      ))}
      <button type="button" onClick={addSection}>Add Section</button>

      {successMessage && <p style={{ color: 'green', marginTop: '10px' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Doctors;

