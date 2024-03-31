import React, { useState } from 'react';

const AboutPage = () => {
  const developers = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
    { id: 3, name: 'Suresh', role: 'Frontend Developer' },
  ];

  // State to track the selected developer
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);

  // Function to handle click event and set the selected developer
  const handleDeveloperClick = (developer) => {
    setSelectedDeveloper(developer);
  };

  return (
    <div>
      <h1>The About us Page</h1>
      <ul>
        {developers.map((developer) => (
          <li key={developer.id}>
            {/* Clickable developer name with href */}
            <a
              onClick={() => handleDeveloperClick(developer)}
              style={{ cursor: 'pointer' }}
            >
              Name: {developer.name}
            </a>
          </li>
        ))}
      </ul>
      {/* Display selected developer's role */}
      {selectedDeveloper && (
        <div>
          <h2>Selected Developer</h2>
          <p>Name: {selectedDeveloper.name}</p>
          <p>Role: {selectedDeveloper.role}</p>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
