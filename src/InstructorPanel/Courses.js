import React from 'react';

const courses = [
  {
    title: 'Master Web Design in Adobe XD: Complete UI/UX Masterclass',
    category: 'Design Development',
    classes: 35,
    students: 291,
    rating: 4.7,
    price: '$29.99',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'How to Write Great Web Content - Better Search Rankings!',
    category: 'Write Content',
    classes: 35,
    students: 291,
    rating: 4.7,
    price: '$29.99',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Dreamweaver - Coding your first website using Dreamweaver',
    category: 'Coding Development',
    classes: 35,
    students: 291,
    rating: 4.7,
    price: '$29.99',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'WordPress 2022: The Complete WordPress Website Course',
    category: 'Design Development',
    classes: 35,
    students: 291,
    rating: 4.7,
    price: '$29.99',
    image: 'https://via.placeholder.com/150'
  }
];

const Courses = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Courses</h3>
      <div className="grid grid-cols-2 gap-4">
        {courses.map((course, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h4 className="text-lg font-semibold mb-2">{course.title}</h4>
            <p className="text-gray-600 mb-2">{course.category}</p>
            <p className="text-gray-600 mb-2">{course.classes} Classes - {course.students} Students</p>
            <p className="text-gray-600 mb-2">Rating: {course.rating} ⭐</p>
            <p className="text-gray-600 mb-2">{course.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
