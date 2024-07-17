// // import React from 'react';

// // const Sidebar = () => {
// //   return (
// //     <div className="w-[10px] border-2 h-screen bg-gray-100 fixed left-0 top-0 overflow-y-auto shadow-lg">
// //       <div className="p-4 text-left flex">
// //         <img 
// //           src="https://www.shutterstock.com/image-vector/person-gray-photo-placeholder-woman-260nw-1286782435.jpg" 
// //           alt="Profile" 
// //           className="w-24 h-24 rounded-full mx-auto mb-4"
// //         />
// //         <h2 className="text-lg font-bold">Emilia Williamson</h2>
// //         <p className="text-xs text-gray-600">UX/UI Designer, Chemical Engineer,</p>
// //         <p className="text-xs text-gray-600 mb-2">Youtuber, Life Style Blogger</p>
        
// //         <div className="flex justify-between text-sm mb-2">
// //           <span>35,600 Followers</span>
// //           <span>135 Following</span>
// //         </div>
        
// //         <button className="w-full bg-red-500 text-white py-1 rounded text-sm">
// //           Follow +
// //         </button>
// //       </div>
      
// //       <div className="px-4">
// //         <InfoItem icon="📊" label="Job Title" value="Lead UX Engineer" />
// //         <InfoItem icon="📞" label="Phone" value="+00 365 9852 65" />
// //         <InfoItem icon="✉️" label="Email" value="epora@mail.com" />
// //         <InfoItem icon="🏢" label="Experiences" value="12+ Years" />
// //         <InfoItem icon="🎓" label="Skill Level" value="Pro Level" />
// //         <InfoItem icon="🌐" label="Language" value="English" />
// //       </div>
      
// //       <div className="px-4 mt-4">
// //         <h3 className="font-bold text-sm mb-2">Follow More:</h3>
// //         <div className="flex justify-between">
// //           <SocialIcon platform="facebook" />
// //           <SocialIcon platform="twitter" />
// //           <SocialIcon platform="instagram" />
// //           <SocialIcon platform="youtube" />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const InfoItem = ({ icon, label, value }) => (
// //   <div className="flex items-center mb-2 text-sm">
// //     <span className="mr-2">{icon}</span>
// //     <span className="font-bold mr-1">{label}:</span>
// //     <span className="text-gray-600">{value}</span>
// //   </div>
// // );

// // const SocialIcon = ({ platform }) => (
// //   <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
// //     {platform[0].toUpperCase()}
// //   </div>
// // );

// // export default Sidebar;


// import React from 'react';

// const Sidebar = () => {
//   return (
//     <div className="w-64 h-screen bg-gray-100 fixed left-0 top-0 overflow-y-auto shadow-lg">
//       <div className="p-4 text-center">
//         <img 
//           src="https://www.shutterstock.com/image-vector/person-gray-photo-placeholder-woman-260nw-1286782435.jpg" 
//           alt="Profile" 
//           className="w-24 h-24 rounded-full mx-auto mb-4"
//         />
//         <h2 className="text-lg font-bold">Emilia Williamson</h2>
//         <p className="text-xs text-gray-600 mb-2">UX/UI Designer, Chemical Engineer</p>
//         <p className="text-xs text-gray-600 mb-4">Youtuber, Life Style Blogger</p>
        
//         <div className="flex justify-around text-xs text-gray-600 mb-4">
//           <span>35,600 Followers</span>
//           <span>135 Following</span>
//         </div>
        
//         <button className="w-full bg-red-500 text-white py-1 rounded text-sm">
//           Follow +
//         </button>
//       </div>
      
//       <div className="border-t border-gray-300 mt-4 pt-4 px-4">
//         <InfoItem icon="📊" label="Job Title" value="Lead UX Engineer" />
//         <InfoItem icon="📞" label="Phone" value="+00 365 9852 65" />
//         <InfoItem icon="✉️" label="Email" value="epora@mail.com" />
//         <InfoItem icon="🏢" label="Experiences" value="12+ Years" />
//         <InfoItem icon="🎓" label="Skill Level" value="Pro Level" />
//         <InfoItem icon="🌐" label="Language" value="English" />
//       </div>
      
//       <div className="border-t border-gray-300 mt-4 pt-4 px-4">
//         <h3 className="font-bold text-sm mb-2">Follow More:</h3>
//         <div className="flex justify-around">
//           <SocialIcon platform="facebook" />
//           <SocialIcon platform="twitter" />
//           <SocialIcon platform="instagram" />
//           <SocialIcon platform="youtube" />
//         </div>
//       </div>
//     </div>
//   );
// };

// const InfoItem = ({ icon, label, value }) => (
//   <div className="flex items-center mb-2 text-sm">
//     <span className="mr-2">{icon}</span>
//     <span className="font-bold mr-1">{label}:</span>
//     <span className="text-gray-600">{value}</span>
//   </div>
// );

// const SocialIcon = ({ platform }) => (
//   <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
//     {platform[0].toUpperCase()}
//   </div>
// );

// export default Sidebar;


import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 fixed left-0 top-0 overflow-y-auto shadow-lg">
      <div className="p-4 flex items-center">
        <img 
          src="https://www.shutterstock.com/image-vector/person-gray-photo-placeholder-woman-260nw-1286782435.jpg" 
          alt="Profile" 
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h2 className="text-lg font-bold">Emilia Williamson</h2>
          <p className="text-xs text-gray-600">UX/UI Designer, Chemical Engineer</p>
          <p className="text-xs text-gray-600">Youtuber, Life Style Blogger</p>
        </div>
      </div>
      
      {/* <div className="border-t border-gray-300 mt-4 pt-4 px-4 flex justify-between">
        <InfoItem icon="📊" label="Job Title" value="Lead UX Engineer" />
        <InfoItem icon="📞" label="Phone" value="+00 365 9852 65" />
      </div>
      
      <div className="border-t border-gray-300 mt-4 pt-4 px-4 flex justify-between">
        <InfoItem icon="✉️" label="Email" value="epora@mail.com" />
        <InfoItem icon="🏢" label="Experiences" value="12+ Years" />
      </div>
      
      <div className="border-t border-gray-300 mt-4 pt-4 px-4 flex justify-between">
        <InfoItem icon="🎓" label="Skill Level" value="Pro Level" />
        <InfoItem icon="🌐" label="Language" value="English" />
      </div>
      
      <div className="border-t border-gray-300 mt-4 pt-4 px-4">
        <h3 className="font-bold text-sm mb-2">Follow More:</h3>
        <div className="flex justify-around">
          <SocialIcon platform="facebook" />
          <SocialIcon platform="twitter" />
          <SocialIcon platform="instagram" />
          <SocialIcon platform="youtube" />
        </div>
      </div> */}
    </div>
  );
};

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center">
    <span className="mr-2">{icon}</span>
    <span className="font-bold mr-1">{label}:</span>
    <span className="text-gray-600">{value}</span>
  </div>
);

const SocialIcon = ({ platform }) => (
  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
    {platform[0].toUpperCase()}
  </div>
);

export default Sidebar;
