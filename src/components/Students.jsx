import React from 'react';

const Students = () => {

  const extracurricular = "Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club";
  const clubs = "Literary Society, Environmental Club, Astronomy Club, Coding Club";
  const achievements = [
    {student:'John Smith', achieve:'National Level Math Olympiad Winner'},
    {student:'Sarah Lee', achieve:'Gold Medalist in State Swimming Championship'},
    {student:'Tech Innovators Club', achieve:'Winners of Inter-School Robotics Competition'}
  ];
  const council = [
    { title: "President", name: "Amy Parker", grade: 12, imageUrl: "https://via.placeholder.com/150" },
    { title: "Vice President", name: "Rajiv Mehta", grade: 11, imageUrl: "https://via.placeholder.com/150" },
    { title: "Secretary", name: "Lisa Wong", grade: 10 , imageUrl: "https://via.placeholder.com/150" }
  ];
  return (
    <section id="students" className="container mx-auto my-10 p-4">
      <h2 className="text-4xl text-center tracking-wider font-bold mb-10">Students</h2>
      <div className="min-h-screen bg-gray-100 py-8">
         <div className='space-y-10'>
           <div className='md:flex mx-4 gap-9 space-y-5 md:space-y-0 '>
              <div className='bg-white p-10 md:w-2/4 rounded shadow-xl'>
                 <h2 className='text-2xl text-blue-500 font-semibold tracking-wide mb-4'>Extracurricular Activities:</h2>
                 <p className='text-base tracking-wider font-semibold text-gray-600'>{extracurricular}</p>
              </div>
              <div className='bg-white p-10 md:w-2/4 rounded shadow-xl'>
                 <h2 className='text-2xl text-blue-500 font-semibold tracking-wide mb-4'>Clubs & Societies:</h2>
                 <p className='text-base tracking-wider font-semibold text-gray-600'>{clubs}</p>
              </div>
           </div>
           <div className='mx-4 bg-white rounded shadow-xl p-5'>
              <h2 className='text-3xl text-blue-500 font-semibold tracking-wide mb-4 text-center'>Our Achievements</h2>
              <div className='md:flex justify-evenly my-8 items-center space-y-4 md:space-y-0'>
                {
                  achievements.map((data , index)=>
                    <div key={index} className='flex p-3 items-center gap-5 bg-white rounded shadow-lg'>
                    <img src="https://via.placeholder.com/150" className="w-24 h-24 rounded-full" alt="" />
                    <div>
                      <h2 className='text-2xl font-bold tracking-wider capitalize'>{data.student}</h2>
                      <p className='text-sm tracking-wider capitalize'>{data.achieve}</p>
                    </div>
                    </div>
                  )
                }
              </div>
           </div>
           <h2 className='text-4xl text-blue-500 font-semibold tracking-wide text-center'>Our Councilers</h2>
           <div className='md:flex justify-evenly mx-4 gap-8'>
            {
              council.map((data, index)=>
              <div key={index} className="max-w-s mx-auto w-full cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden my-4">
              <div className="px-6 py-4">
                <div className="font-bold text-xl text-center">
                  {data.name}
                </div>
                <p className="text-gray-600 text-sm text-center mt-2">
                  <strong>({data.title})</strong>
                </p>
                <p className='text-center text-xs'>Grade: {data.grade}</p>
              </div>
              <div className="flex justify-center mt-4 mb-6">
                <img
                  className="w-24 h-24 rounded-full"
                  src={data.imageUrl}
                  alt="student"
                />
              </div>
            </div>)
            }
           </div>
         </div>
      </div>
    </section>
  );
};

export default Students;
