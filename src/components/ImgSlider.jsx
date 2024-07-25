import React, { useState , useEffect } from 'react';

const ImgSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      image: 'books.jpg',
      title: 'Welcome to Springdale Public School',
      description: 'where we nurture young minds for brighter future.',
      button: "Our Academics"
    },
    {
      image: 'sports.jpg',
      title: 'Annual Sports Day',
      description: 'Celebrating Excellence in Sports .',
      button: "See Our Gallery"
    },
    {
      image: 'science.jpg',
      title: 'Science Exhibition',
      description: 'Showcasing Student Innovations.',
      button: "See Our Gallery"
    },
    {
      image: 'cultural.jpg',
      title: 'Cultural Fest',
      description: 'Embracing Diversity and Creativity.',
      button: "See Our Gallery"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };
  
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [activeIndex]);



  return (
    <div id='home' className="relative w-full overflow-hidden">
      <div className="relative md:h-[650px] h-96">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={slide.image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
              <h5 className="lg:text-5xl tracking-wider font-semibold text-2xl">{slide.title}</h5>
              <p className="lg:text-base tracking-wider md:mt-3 text-xs">{slide.description}</p>
              <button className='px-5 py-2 border rounded-lg tracking-wider mt-5 bg-blue-500'>{slide.button}</button>
            </div>  
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`mx-1 w-3 h-3 rounded-full ${
              index === activeIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImgSlider;
