import React from "react";

const Faculty = () => {

  
  const teachers = [
    {
      quote: "Teaching is not just a profession, it's a passion to shape the future.",
      description: "Every day, my students inspire me with their curiosity and dedication to learning. I couldn't wish for better students.",
      name: "Jane Smith, Teacher",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      quote: "Education is the most powerful weapon you can use to change the world.",
      description: "I strive to empower my students with knowledge and critical thinking skills.",
      name: "John Doe, Teacher",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      quote: "Learning never exhausts the mind.",
      description: "Seeing my students grow intellectually every day is my greatest joy.",
      name: "Emily Johnson, Teacher",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      quote: "The beautiful thing about learning is that no one can take it away from you.",
      description: "My mission is to make learning engaging and accessible for all my students.",
      name: "Michael Brown, Teacher",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      quote: "The purpose of education is to replace an empty mind with an open one.",
      description: "I encourage my students to think critically and question the world around them.",
      name: "Sarah Davis, Teacher",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      quote: "Education is not preparation for life; education is life itself.",
      description: "I aim to make my classroom a place where students feel inspired and valued.",
      name: "David Wilson, Teacher",
      imageUrl: "https://via.placeholder.com/150"
    }
  ];

  return (
    <section id="faculty" className="container mx-auto lg:py-20 lg:px-10 p-4 select-none">
      <h2 className="text-4xl text-center tracking-wider font-bold mb-10"> Our Faculties</h2>
      <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teachers.map((teacher, index) => (
              <div key={index} className="max-w-sm mx-auto cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden my-4">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">
                  {teacher.quote}
                </div>
                <p className="text-gray-700 text-base text-center mt-4">
                  {teacher.description}
                </p>
                <p className="text-gray-900 font-semibold text-center mt-6">
                  <strong>{teacher.name}</strong>
                </p>
              </div>
              <div className="flex justify-center mt-4 mb-6">
                <img
                  className="w-24 h-24 rounded-full"
                  src={teacher.imageUrl}
                  alt="Teacher"
                />
              </div>
            </div>
        
        ))}
      </div>
    </div>
    </section>
  );
};

export default Faculty;
