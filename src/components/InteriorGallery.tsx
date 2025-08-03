const InteriorGallery = () => {
  const images = [
    {
      src: "https://cdn.sanity.io/images/xem89js7/production/2d3089504fcd405cb8368287c01d709a69aea49f-6485x4944.jpg?w=800&q=75&auto=format",
      alt: "Modern interior living space"
    },
    {
      src: "https://cdn.sanity.io/images/xem89js7/production/fca3c6d1f99d4cb2fb86c2b36ed4d9c945f7ae27-8131x6059.jpg?w=800&q=75&auto=format",
      alt: "Contemporary kitchen"
    },
    {
      src: "https://cdn.sanity.io/images/xem89js7/production/683d91471183694bfb5879a7a1017648dfe73cf2-6544x4423.jpg?w=800&q=75&auto=format",
      alt: "Elegant bedroom"
    },
    {
      src: "https://cdn.sanity.io/images/xem89js7/production/1f9f8a72c1c6d6f250ea2ed21a4d4fabb8fb8766-6768x4512.jpg?w=800&q=75&auto=format",
      alt: "Luxury bathroom"
    },
    {
      src: "https://cdn.sanity.io/images/xem89js7/production/9e2b727866abcea049681f8cd6a82e595908bdc1-6324x4366.jpg?w=800&q=75&auto=format",
      alt: "Living room with city view"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`overflow-hidden rounded-lg shadow-md ${
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteriorGallery;