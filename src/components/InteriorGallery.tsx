const InteriorGallery = () => {
  const images = [
    {
      src: "https://www.rgs.edu.in/wp-content/uploads/2024/06/RGSL-3-1.jpg",
      alt: "Where Dreams Take Shape and Emotions Emerge",
      caption: "Where Dreams Take Shape and Emotions Emerge"
    },
    {
      src: "https://www.rgs.edu.in/wp-content/uploads/2024/06/RGSL-20-1.jpg",
      alt: "Our Modern-Equipped Classroom",
      caption: "Our Modern-Equipped Classroom, Crafting Tomorrow's Leaders"
    },
    {
      src: "https://www.rgs.edu.in/wp-content/uploads/2024/06/RGSL-21-1.jpg",
      alt: "Our library",
      caption: "Our library: where pages turn into pathways of knowledge and imagination"
    },
    {
      src: "https://www.rgs.edu.in/wp-content/uploads/2024/06/RGSL-24-1.jpg",
      alt: "Biology Laboratory",
      caption: "From Microscopes to Molecules: Our Biology Laboratory, Where Discovery Knows No Bounds"
    },
    {
      src: "https://www.rgs.edu.in/wp-content/uploads/2024/06/RGSL-7-1.jpg",
      alt: "Music Room",
      caption: "Where Words Fail, Music Speaks"
    },
    {
      src: "https://www.rgs.edu.in/wp-content/uploads/2024/06/RGSL-13-1.jpg",
      alt: "Hostel Room",
      caption: "Embracing Minimalism: Our Hostel Room at Royal Global School, Guwahati"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-normal text-foreground text-center mb-16">
          Explore Life AT RGS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-lg shadow-md group ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              } ${
                index === 2 ? 'lg:col-span-2' : ''
              }`}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">
                    {image.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteriorGallery;