import React from 'react';

const Menu = ({ sections, activeMenu, specialMenu, onMenuClick }) => {
    return (
        <div className="Menus">
            {sections.map((section) => (
                <div
                    key={section.id}
                    className={`rightMenu ${activeMenu === section.id ? 'active' : ''} ${specialMenu === section.id ? 'special' : ''}`}
                    onClick={() => onMenuClick(section.ref, section.id)}
                >
                    {section.id}
                </div>
            ))}
        </div>
    );
};

export default Menu;
