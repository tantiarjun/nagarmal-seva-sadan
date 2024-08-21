// import React from 'react'
// import Page from '../../DescriptionPage/Page';
// import { sectionData } from './sectionData';
// import coverImage from '../../../assets/COE Page/cover.png';

// const CoeDescription = () => {
//     return (
//       <Page
//           subtitle="Center of Excellence"
//           title="Neurosciences"
//           imageUrl={coverImage}
//           sectionData={sectionData}
//       />
//     )
//   }
  
//   export default CoeDescription

import React from 'react';
import { useParams } from 'react-router-dom';
import Page from '../../DescriptionPage/Page';
import { sectionData } from './sectionData';
import coverImage from '../../../assets/COE Page/cover.png';

// Example mapping of IDs to titles and section data
const titles = {
    1: "Cardiology",
    2: "Medicine",
    3: "Gastroenterology",
    4: "Urology",
    5: "Dental",
    6: "Gynaecology",
    7: "Surgery",
    8: "ENT",
    9: "Dermatology",
    10: "Paediatrics",
    11: "Nephrology",
    12: "Ophthalmology",
};

const CoeDescription = () => {
    const { id } = useParams(); // Get the ID from the route parameters
    const title = titles[id] || "Center of Excellence"; // Default to "Center of Excellence" if ID is not found

    return (
        <Page
            subtitle="Center of Excellence"
            title={title} // Use the dynamically selected title
            imageUrl={coverImage}
            sectionData={sectionData[id]} // Pass the corresponding section data based on the ID
        />
    );
}

export default CoeDescription;
