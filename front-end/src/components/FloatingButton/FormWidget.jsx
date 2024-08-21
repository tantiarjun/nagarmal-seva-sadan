import React, { useState, forwardRef } from "react";
import axios from "axios";
import "./FormWidget.css";

async function postFile(data) {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("phoneNumber", data.phoneNumber);
  formData.append("file", data.file);
  formData.append("timeSlot", data.timeSlot);

  try {
    const result = await axios.post(
      "http://localhost:3000/opinions",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return result.data;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
}

const FormWidget = forwardRef(({ onSubmit, onClose }, ref) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [file, setFile] = useState(null);
  const [timeSlot, setTimeSlot] = useState("");
  const [error, setError] = useState(null);

  const submit = async (event) => {
    event.preventDefault();
    setError(null);
    const data = { name, phoneNumber, file, timeSlot };
    try {
      const result = await postFile(data);
      if (onSubmit) {
        onSubmit(result);
      }
    } catch (error) {
      setError("Failed to upload file. Please try again.");
    }
  };

  const fileSelected = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="form-widget" ref={ref}>
      <div className="flexb">
        <div>Contact for Enquiry</div>
        <div className="close2" onClick={onClose}>
          X
        </div>
      </div>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Full Name"
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Your Phone Number"
            required
          />
        </div>
        <div className="form-group">
          <label>Select Time Slot</label>
          <select
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="9AM-12PM">9AM-12PM</option>
            <option value="3PM-6PM">3PM-6PM</option>
            <option value="9PM-11PM">9PM-11PM</option>
          </select>
        </div>
        <div className="form-group">
          <label>File Upload</label>
          <div className="custom-file-upload">
            <input
              type="file"
              id="file-upload"
              onChange={fileSelected}
              accept=".jpg,.jpeg,.png,.pdf"
              required
            />
            <label htmlFor="file-upload">
              {file ? file.name : "Choose File"}
            </label>
          </div>
        </div>

        {error && <p className="error">{error}</p>}
        <button className="b-w" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
});

export default FormWidget;
