import { useRouter } from 'next/router';
import React from 'react';

const DeveloperName = () => {
  const router = useRouter();

  const { developer } = router.query;

  const developers = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
    { id: 3, name: 'Suresh', role: 'Frontend Developer' },
  ];

  const selectedDevelopers = developers.find(
    (dev) => dev.id === parseInt(developer),
  );

  return (
    <div>
      {selectedDevelopers ? (
        <div>
          <h1>Developers</h1>
          <h2>Name {selectedDevelopers.name}</h2>
          <p>Role: {selectedDevelopers.role}</p>
        </div>
      ) : (
        <h1>Developer Doesn't exist</h1>
      )}
    </div>
  );
};

export default DeveloperName;
