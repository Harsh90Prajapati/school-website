import React from 'react';

const Gallery = () => {
  return (
    <section id="gallery" className="container mx-auto lg:py-20 lg:px-10 p-4 select-none">
      <h2 className="text-4xl text-center tracking-wider font-bold mb-10">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img src="books.jpg" className="w-full h-auto" alt="Gallery Image 1" />
        <img src="acadmics.jpg" className="w-full h-auto" alt="Gallery Image 2" />
        <img src="sports.jpg" className="w-full h-auto" alt="Gallery Image 3" />
      </div>
    </section>
  );
};

export default Gallery;
