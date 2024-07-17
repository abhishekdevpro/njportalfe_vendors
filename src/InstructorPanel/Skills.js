import React from 'react';

const Skills = () => {
  const user = {
    jobTitle: 'Lead UX Engineer',
    phone: '+00 365 9852 65',
    email: 'epora@mail.com',
    experience: '12+ Years',
    skillLevel: 'Pro Level',
    language: 'English',
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg mt-6">
      <div className="mb-4">
        <label className="block text-gray-700">Job Title</label>
        <p>{user.jobTitle}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone</label>
        <p>{user.phone}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <p>{user.email}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Experience</label>
        <p>{user.experience}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Skill Level</label>
        <p>{user.skillLevel}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Language</label>
        <p>{user.language}</p>
      </div>
      <div>
        <label className="block text-gray-700">Follow More:</label>
      </div>
    </div>
  );
};

export default Skills;
