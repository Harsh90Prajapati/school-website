import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="container mx-auto lg:flex lg:py-20 lg:px-10 p-4 my-10">
       <img src="about.jpg" className='lg:w-2/4 rounded-xl' alt="" />
      <div className='lg:ml-10'>
      <h2 className="text-3xl tracking-wide text-center md:text-left font-bold lg:mb-4 my-4">About Us</h2>
      <p className='tracking-wide mb-2' >Founded in 1985, Springdale Public School has been dedicated to providing
          quality education and holistic development to students. Our vision is to create a learning environment that fosters academic excellence, critical
          thinking, and ethical values and our mission is to empower students with the knowledge, skills, and values needed to thrive
          in a dynamic world.</p>
      <h3 className="text-xl font-bold tracking-wide mb-2 mt-4">Message from the Principal :-</h3>
      <p className='tracking-wide mb-2' >"At Springdale, we believe in nurturing the potential of every
          student and guiding them towards a successful future."</p>
      <h3 className="text-xl font-bold tracking-wide my-4">Infrastructure and Facilities</h3>
      <ul role='list' className='list-disc list-inside space-y-4'>
        <li className=''>State-of-the-art science and computer labs</li>
        <li className=''>Spacious and well-equipped classrooms</li>
        <li className=''>Library with a vast collection of books and digital resources</li>
        <li className=''>Sports facilities including a playground, gymnasium, and swimming pool</li>
      </ul>
      </div>
    </section>
  );
};

export default AboutUs;
