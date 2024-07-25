import React from 'react';

const Academics = () => {
  return (
    <section id="academics" className="container mx-auto lg:flex my-10 lg:py-20 lg:px-10 p-5">
      <div className='lg:mx-5'>
      <h2 className="text-3xl font-bold text-center md:text-left underline mb-4">Academics</h2>
      <h2 className="text-xl font-bold mb-2">Curriculum:</h2>
      <ul className='list-disc tracking-wider leading-6 list-inside'>
        <li><strong>Primary (Grades 1-5):</strong> English, Mathematics, Science, Social Studies, Art, Physical Education</li>
        <li><strong>Secondary (Grades 6-10):</strong> English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</li>
        <li><strong>Senior Secondary (Grades 11-12):</strong>
        <ul className='list-disc list-inside px-5 py-3'>
          <li><strong>Science Stream:</strong>  Physics, Chemistry, Biology, Mathematics, Computer Science, English</li>
          <li><strong>Commerce Stream:</strong>   Accountancy, Business Studies, Economics, Mathematics, English</li>
        </ul>
        </li>

      </ul>
      <h3 className="text-xl font-bold mt-4">Educational Resources: </h3>
      <p className='tracking-wide mb-2'>Digital classrooms, interactive learning modules, and access
      to online educational platforms</p>
      <h3 className="text-xl font-bold mt-4">Teaching Methodologies</h3>
      <p className='tracking-wide mb-2'>We use a blend of traditional and modern teaching
      techniques to cater to different learning styles.</p>
      </div>
      <img src="acadmics.jpg" className='lg:w-2/4 object-cover rounded-xl md:mt-0 mt-10' alt="" />
    </section>
  );
};

export default Academics;
