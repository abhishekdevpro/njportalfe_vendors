import React from 'react';
import Sidebar from './Profile'; // Assuming you have this component
import Biography from './BioGraphy'; // Assuming you have this component
import Courses from './Courses'; // Assuming you have this component
import Navbar from './Profile';
// import ProfileImage from './Profile';

const Instructor = () => {
  return (
       <>
       <div className='flex gap-2'>
          <Sidebar />
        <div className="flex-1 justify-end"> 
        <Biography />
          <Courses />
      </div>
      </div>
      </>
  );
};

export default Instructor;
