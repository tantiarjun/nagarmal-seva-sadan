import React from "react";
import "./ContactUs.css";
import location from "../../assets/Contact Us/loc.png";
import email from "../../assets/Contact Us/email.png";
import call from "../../assets/Contact Us/call.png";

function ContactUs() {
  return (
    <div className="ContactUs_page">
      <div className="contact_left">
        <h1 className="get_in_touch">
          {" "}
          Get in <span className="touch"> Touch </span>
        </h1>
        <p className="contact_description">
          {" "}
          We're here to support you every step of the way. Contact us to start your journey toward better health.{" "}
        </p>

        <div className="contactus_section">
          <img className="contactus_icons" src={location} />
          <div className="sect_text">
            <p className="sect_name">Location</p>
            <p className="sect_description">
            Seva Sadan Path, Upper Bazar, Ranchi, Jharkhand 834001, India
            </p>
          </div>
        </div>
        <div className="contactus_section">
          <img className="contactus_icons" src={email} />
          <div className="sect_text">
            <p className="sect_name">Email</p>
            <p className="sect_description">sevasadan7@gmail.com</p>
          </div>
        </div>
        <div className="contactus_section">
          <img className="contactus_icons" src={call} />
          <div className="sect_text">
            <p className="sect_name">Phone</p>
            <p className="sect_description">+91 62047 52640</p>
          </div>
        </div>
      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d797661.712603078!2d83.90156463070957!3d22.932087589333698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4de0343d17d8d%3A0x71866731bf66a754!2sNagarmal%20Modi%20Seva%20Sadan!5e0!3m2!1sen!2sin!4v1718021748531!5m2!1sen!2sin"
        //   width="550"
        //   height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="responsive map"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;