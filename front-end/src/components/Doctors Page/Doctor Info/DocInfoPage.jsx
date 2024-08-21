import React, { useRef, useState, useEffect, useMemo } from 'react';
import PageSections from '../../DescriptionPage/PageSection';
import Menu from '../../DescriptionPage/Menu';
import DoctorProfile from './DocBrief';

function DocInfoPage({ title, subtitle, image, doctorProfile, sectionData }) {
    const [activeMenu, setActiveMenu] = useState(sectionData[0]?.id || '');
    const [specialMenu, setSpecialMenu] = useState(sectionData[0]?.id || '');

    const sectionRefs = sectionData.reduce((acc, item) => {
        acc[item.id] = useRef(null);
        console.log(acc);
        return acc;
    }, {});

    const sections = useMemo(() => sectionData.map(section => ({
        ...section,
        ref: sectionRefs[section.id]
    })), [sectionData, sectionRefs]);

    const sectionsWithData = useMemo(() => sectionData.map((section) => {
        const ref = sections.find(s => s.id === section.id)?.ref;
        return { ...section, ref };
    }), [sections]);

    const handleScrollTo = (ref, menuName) => {
        setActiveMenu(menuName);
        setSpecialMenu(menuName);
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveMenu(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => {
            if (section.ref.current) {
                observer.observe(section.ref.current);
            }
        });

        return () => sections.forEach((section) => {
            if (section.ref.current) {
                observer.unobserve(section.ref.current);
            }
        });
    }, [sections]);

   
    return (
        <div className="Page">
            <div className="PageHeader">
                <div className="PageHeadlines">
                    <p>{subtitle}</p>
                    <h1>{title}</h1>
                </div>

                <DoctorProfile
                    name={doctorProfile.name}
                    doctorImage={image}
                    doctorUnit={doctorProfile.unit}
                    specialty={doctorProfile.specialty}
                    qualifications={doctorProfile.qualifications}
                    experience={doctorProfile.experience}
                    languages={doctorProfile.languages}
                    contactNumber={doctorProfile.contactNumber}
                />


                <div className="PageInfos">
                    <div className="PageLeft">
                        <PageSections sections={sectionsWithData} />
                    </div>

                    <div className="PageRight">
                        <Menu
                            sections={sections}
                            activeMenu={activeMenu}
                            specialMenu={specialMenu}
                            onMenuClick={handleScrollTo}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default DocInfoPage;

