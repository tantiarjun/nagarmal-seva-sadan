import React, { useRef, useState, useEffect, useMemo } from 'react';
import PageSections from './PageSection';
import Menu from './Menu'; 
import './Page.css';

function Page({ title, subtitle, imageUrl, sectionData }) {
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

                <div className="PageCoverImg">
                    <img src={imageUrl} alt="" className='CoverImg' />
                </div>

                <div className="PageInfos">
                    <PageSections subtitle="About" sections={sectionsWithData} />

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

export default Page;

