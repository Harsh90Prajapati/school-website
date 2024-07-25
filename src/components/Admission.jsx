import React from 'react';
import ContactUs from './ContactUs';

const Admission = () => {
  return (
    <section id="admissions" className="container bg-emerald-100 lg:flex justify-evenly gap-10 mx-auto lg:py-20 lg:px-10 p-4">
      <div className='space-y-6'><h2 className="text-2xl font-bold tracking-wider mb-4">Admissions</h2>
      <p className='tracking-wide'>Admission forms are available for download. Submit the completed form
      along with required documents at the school office.Admission is based on merit and availability of seats. Entrance tests may be
      conducted for certain grades.</p>
      <p><a href="admission-form.pdf" download className="text-blue-500 underline">Download Admission Form</a></p>
      <h2 className="text-2xl font-bold mb-4">Important dates and deadlines for admission.</h2>
      <ul className='list-inside list-disc space-y-3'>
        <li>Admission Form Availability: March 1st</li>
        <li>Last Date for Submission: March 31st</li>
        <li>Entrance Test: April 15th</li>
        <li>Announcement of Results: April 30th</li>
      </ul>
      </div>
      <ContactUs/>
    </section>
  );
};

export default Admission;
