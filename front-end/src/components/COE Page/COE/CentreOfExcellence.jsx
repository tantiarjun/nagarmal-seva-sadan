import React from 'react';
import './CentreOfExcellence.css';
import Card from '../COE Card/CoeCard';

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
    Heart,
    Eye,
} from "../../../assets/COE/index";

const CentreOfExcellence = () => {
    const cards = [
        { id: 1, icon: Heart, subhead: "Cardiology", description: "The Cardiology department is dedicated to providing top-tier cardiovascular care, combining advanced technology with compassionate patient-centered approaches. Our team of highly skilled cardiologists is equipped to handle a wide range of cardiovascular conditions, from routine evaluations to complex procedures." },
        { id: 2, icon: Medicine, subhead: "Medicine", description: "Our Medicine department is dedicated to providing comprehensive and expert medical care for a wide range of health conditions. With a team of highly experienced doctors and specialists, we offer a patient-centered approach to diagnosis, treatment, and management of various medical conditions." },
        { id: 3, icon: Gastroenterology, subhead: "Gastroenterology", description: "The Gastroenterology department is committed to providing exceptional care for disorders of the digestive system. Our team of highly experienced gastroenterologists and specialists are equipped with advanced technology to diagnose, treat, and manage a wide range of gastrointestinal conditions." },
        { id: 4, icon: Urology, subhead: "Urology", description: "The Urology department is dedicated to providing expert care for disorders of the urinary tract and male reproductive system. Our team of highly experienced urologists utilizes the latest technology and techniques to deliver comprehensive treatment and management for a variety of urological conditions." },
        { id: 5, icon: Dental, subhead: "Dental", description: "The Dental department is dedicated to delivering top-quality dental care, combining advanced technology with expert techniques to address a wide range of oral health needs. Our team of highly skilled dentists and dental specialists is committed to providing comprehensive care in a comfortable and patient-centered environment." },
        { id: 6, icon: Gynaecology, subhead: "Gynaecology", description: "The Gynaecology department is dedicated to providing exceptional care for women’s health. Our team of highly experienced gynaecologists and specialists is committed to offering comprehensive services, from routine check-ups to advanced treatments, all tailored to meet the unique needs of each patient." },
        { id: 7, icon: Surgery, subhead: "Surgery", description: "The Surgery department is dedicated to providing expert surgical care across a broad range of specialties. Our team of highly skilled surgeons and surgical support staff are committed to delivering precise, effective, and compassionate care using the latest techniques and technology." },
        { id: 8, icon: ENT, subhead: "ENT", description: "The ENT department is dedicated to providing comprehensive and expert care for a wide range of ear, nose, and throat conditions. Our team of highly experienced ENT specialists employs advanced technology and techniques to diagnose, treat, and manage both common and complex issues." },
        { id: 9, icon: Skin, subhead: "Dermatology", description: "The Dermatology department is dedicated to providing expert care for a wide range of skin, hair, and nail conditions. Our team of highly skilled dermatologists utilizes advanced technology and techniques to offer comprehensive diagnosis, treatment, and management for all dermatological concerns." },
        { id: 10, icon: Paediatric, subhead: "Paediatrics", description: "The Paediatrics department is dedicated to providing comprehensive and compassionate care for children from infancy through adolescence. Our team of highly experienced paediatricians and specialists is committed to ensuring the health and well-being of every child through advanced medical treatments and personalized care." },
        { id: 11, icon: Nephrology, subhead: "Nephrology", description: "The Nephrology department is dedicated to providing expert care for patients with kidney-related conditions. Our team of highly experienced nephrologists and specialists utilizes the latest advancements in technology and treatment to manage and treat a wide range of renal diseases." },
        { id: 12, icon: Eye, subhead: "Ophthalmology", description: "The Ophthalmology department is dedicated to providing comprehensive and cutting-edge ophthalmic care. Our team of highly experienced ophthalmologists and eye care specialists is committed to diagnosing, treating, and managing a wide range of eye conditions to enhance and preserve vision." }
    ];

    return (
        <div className="coe-page">
            <h1>OUR CENTRE OF EXCELLENCE</h1>
            <div className="cards-container">
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        icon={card.icon}
                        subtitle={card.subhead}
                        description={card.description}
                        id={card.id} 
                    />
                ))}
            </div>
        </div>
    );
}

export default CentreOfExcellence;
