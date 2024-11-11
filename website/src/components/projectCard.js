import React from 'react';

export default function ProjectCard({ title, description, tags, image, link }) {
  return (
    <div style={cardContainerStyle}>
      {/* Background Image */}
      <div
        style={{
          ...imageContainerStyle,
          backgroundImage: `url(${image || 'https://via.placeholder.com/300'})`,
        }}
      ></div>

      {/* Card Content */}
      <div style={contentStyle}>
        {/* Title */}
        <h3 style={cardTitleStyle}>{title}</h3>

        {/* Description */}
        <p style={descriptionStyle}>{description}</p>

        {/* Tags */}
        <div style={tagsContainerStyle}>
          {tags && tags.map((tag, idx) => (
            <span key={idx} style={tagStyle}>
              {tag.toUpperCase()}
            </span>
          ))}
        </div>

        {/* Separator line */}
        <div style={separatorStyle}></div>

        {/* DOWNLOAD Button */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={downloadButtonStyle}
          >
            DOWNLOAD
          </a>
        )}
      </div>
    </div>
  );
}

// Styles
const cardContainerStyle = {
  width: '300px',
  borderRadius: '8px',
  overflow: 'hidden',
  backgroundColor: '#1e1e1e',
  color: '#ffffff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  margin: '8px',
};

const imageContainerStyle = {
  height: '150px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
};

const contentStyle = {
  padding: '16px',
  textAlign: 'center', // Center the content of the card
};

const cardTitleStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#ffffff',
  margin: '0', // Remove default margin
  paddingBottom: '10px', // Add some space below the title
};

const descriptionStyle = {
  fontSize: '14px',
  color: '#b0b0b0',
  marginBottom: '10px',
};

const tagsContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginTop: '8px',
  justifyContent: 'center',
};

const tagStyle = {
  backgroundColor: '#007acc',
  color: '#ffffff',
  borderRadius: '4px',
  padding: '4px 8px',
  fontSize: '12px',
};

// Style for the separator line
const separatorStyle = {
  margin: '16px 0', // Space around the separator
  borderTop: '1px solid #444', // Thin grey line
};

// Style for the DOWNLOAD button
const downloadButtonStyle = {
  display: 'inline-block',
  backgroundColor: '#3498db',
  color: 'white',
  padding: '12px 24px',
  borderRadius: '5px',
  marginTop: '20px',
  textDecoration: 'none',
  fontWeight: 'bold',
  textAlign: 'center',
  width: '100%',
  cursor: 'pointer',
};
