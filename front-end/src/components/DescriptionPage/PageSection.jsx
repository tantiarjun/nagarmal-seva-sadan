import React from 'react';
import './Page.css';

const ParaSection = ({ sectionRef, sectionId, sectionTitle, sectionContent, imgSrc, imgSrcs, className, imgClass }) => {
  return (
    <div ref={sectionRef} id={sectionId} className={className}>
      <div className="content">
        <span className="parentPageName"></span>
        <span className="sectionName">{sectionTitle}</span>
        {sectionContent && (
          <div className="textBox">
            {Array.isArray(sectionContent) ? (
              sectionContent.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <p>{sectionContent}</p>
            )}
          </div>
        )}
      </div>
      {imgSrc && <img src={imgSrc} className={imgClass} alt="" />}
      {imgSrcs && (
        <div className="PageImgx">
          {imgSrcs.map((src, index) => (
            <img key={index} src={src} alt="" className={imgClass} />
          ))}
        </div>
      )}
    </div>
  );
};
const ListSection = ({ sectionRef, sectionId, sectionTitle, sectionContent, imgSrc, imgSrcs, className, imgClass }) => {
  // Ensure sectionContent is parsed as an array if it's a string
  let parsedSectionContent = Array.isArray(sectionContent) ? sectionContent : JSON.parse(sectionContent || '[]');

  return (
    <div ref={sectionRef} id={sectionId} className={className}>
      <div className="content">
        <span className="parentPageName"></span>
        <span className="sectionName">{sectionTitle}</span>
        {parsedSectionContent.length > 0 && (
          <ul className="list">
            {parsedSectionContent.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      {imgSrc && <img src={imgSrc} className={imgClass} alt="" />}
      {imgSrcs && (
        <div className="PageImgx">
          {imgSrcs.map((src, index) => (
            <img key={index} src={src} alt="" className={imgClass} />
          ))}
        </div>
      )}
    </div>
  );
};


const Section = ({ sectionType, sectionRef, sectionId, sectionTitle, sectionContent, imgSrc, imgSrcs, className, imgClass }) => {
  if (sectionType === "List") {
    return (
      <ListSection
        sectionRef={sectionRef}
        sectionId={sectionId}
        sectionTitle={sectionTitle}
        sectionContent={sectionContent}
        imgSrc={imgSrc}
        imgSrcs={imgSrcs}
        className={className}
        imgClass={imgClass}
      />
    );
  }
  return (
    <ParaSection
      sectionRef={sectionRef}
      sectionId={sectionId}
      sectionTitle={sectionTitle}
      sectionContent={sectionContent}
      imgSrc={imgSrc}
      imgSrcs={imgSrcs}
      className={className}
      imgClass={imgClass}
    />
  );
};

const PageSections = ({ sections }) => {
  return (
    <div className="page-sections">
      {sections.map((section, index) => (
        <Section
          key={index}
          sectionType={section.type}
          sectionRef={section.ref}
          sectionId={section.id}
          sectionTitle={section.title}
          sectionContent={section.content}
          imgSrc={section.imgSrc}
          imgSrcs={section.imgSrcs}
          className={section.className}
          imgClass={section.imgClass}
        />
      ))}
    </div>
  );
};

export default PageSections;