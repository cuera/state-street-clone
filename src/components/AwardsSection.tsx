const AwardsSection = () => {
  const awards = [
    {
      image: "https://www.rgs.edu.in/wp-content/uploads/2024/05/Indias-Greatest-Brands-Leaders-2018-19-150x100.jpg",
      alt: "India's Greatest Brands Leaders 2018-19"
    },
    {
      image: "https://www.rgs.edu.in/wp-content/uploads/2024/05/International-school-awards-150x100.jpg",
      alt: "International School Awards"
    },
    {
      image: "https://www.rgs.edu.in/wp-content/uploads/2024/05/round-square-150x100.jpg",
      alt: "Round Square"
    },
    {
      image: "https://www.rgs.edu.in/wp-content/uploads/2024/05/School-Awards-For-Excellence-2019-150x100.jpg",
      alt: "School Awards For Excellence 2019"
    },
    {
      image: "https://www.rgs.edu.in/wp-content/uploads/2024/05/The-International-Award-For-Young-People-150x100.jpg",
      alt: "The International Award For Young People"
    },
    {
      image: "https://www.rgs.edu.in/wp-content/uploads/2024/05/World-Education-Summit-2017-Delhi-150x100.jpg",
      alt: "World Education Summit 2017 Delhi"
    },
    {
      image: "https://www.rgs.edu.in/wp-content/uploads/2024/05/afs-150x100.jpg",
      alt: "AFS"
    },
    {
      image: "https://www.rgs.edu.in/wp-content/uploads/2024/05/Best-Education-Brands-2016-150x100.jpg",
      alt: "Best Education Brands 2016"
    },
    {
      image: "https://www.rgs.edu.in/wp-content/uploads/2024/05/EW-150x100.jpg",
      alt: "EW Award"
    },
    {
      image: "https://www.rgs.edu.in/wp-content/uploads/2024/05/Future-50-schools-shaping-success-150x100.jpg",
      alt: "Future 50 Schools Shaping Success"
    },
    {
      image: "https://www.rgs.edu.in/wp-content/uploads/2024/05/Indian-Green-Buliding-Council-150x100.jpg",
      alt: "Indian Green Building Council"
    },
    {
      image: "https://www.rgs.edu.in/wp-content/uploads/2024/05/India-School-Merit-Awards-150x100.jpg",
      alt: "India School Merit Awards"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-foreground mb-4">
            Awards & Accolades
          </h2>
          <h3 className="text-xl text-muted-foreground">
            Excellence Recognized
          </h3>
          <p className="text-muted-foreground mt-2">
            A testament to Royal Global School's unwavering dedication to fostering educational brilliance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {awards.map((award, index) => (
            <div key={index} className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <img 
                src={award.image}
                alt={award.alt}
                className="w-full h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;