import React, { useState } from "react";
import Modal from "react-modal";
import "./SecondConsultModal.css";

const SecondConsultModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [timeToCall, setTimeToCall] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [file, setFile] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const allowedTypes = ["application/pdf", "image/jpeg", "image/jpg"];
    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
    } else {
      alert("Please upload a PDF, JPEG, or JPG file.");
      setFile(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && mobile && selectedOption && preferredDate && file) {
      // Handle form submission
      onClose();
    } else {
      alert("Please fill all the required fields and upload a valid file.");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-header">
        <h2>Get Free Second Opinion from our Specialists</h2>
        <div onClick={onClose} className="close">
          X
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Enter Name *</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Enter Mobile Number *</label>
        <input
          type="tel"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />

        <label>Select a Preferred Date *</label>
        <input
          type="date"
          value={preferredDate}
          onChange={(e) => setPreferredDate(e.target.value)}
          required
        />

        <label>Select a Preferred Time to Call *</label>
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="dropdown"
          required
        >
          <option value="" disabled>
            Select a Preferred Time to Call
          </option>
          <option value="morning">MORNING</option>
          <option value="afternoon">AFTERNOON</option>
          <option value="evening">EVENING</option>
        </select>

        <label>
          Choose past prescription or references (pdf or jpeg or jpg) *
        </label>
        <div className="file-input-container">
          <input
            type="file"
            onChange={handleFileChange}
            id="file-input"
            required
          />
          <label htmlFor="file-input" className="file-input-label">
            Choose File
          </label>
          {file && <span className="file-name">{file.name}</span>}
        </div>

        <button className="b-w" type="submit">
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default SecondConsultModal;
