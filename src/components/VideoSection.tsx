const VideoSection = () => {
  const videos = [
    {
      thumbnail: "https://www.rgs.edu.in/wp-content/uploads/2025/06/Best-Early-Schooling-2.jpg",
      title: "Best Early Schooling",
      videoUrl: "https://www.youtube.com/watch?v=8qo7ICRSt24"
    },
    {
      thumbnail: "https://www.rgs.edu.in/wp-content/uploads/2024/05/Royal-Global-School-Guwahati-offers-world-class-sport-facilities-in-India.jpg",
      title: "World Class Sports Facilities",
      videoUrl: "https://www.youtube.com/watch?v=m_rwp43w_hw"
    },
    {
      thumbnail: "https://www.rgs.edu.in/wp-content/uploads/2024/05/Best-Boarding-School-of-Guwahati-Royal-Global-School-has-Modern-hostel-for-boys-girls-1.jpg",
      title: "Best Boarding School",
      videoUrl: "https://www.youtube.com/watch?v=HappIizOXwg"
    },
    {
      thumbnail: "https://www.rgs.edu.in/wp-content/uploads/2024/05/Royal-Bageecha.jpg",
      title: "Learning With Nature",
      videoUrl: "https://www.youtube.com/watch?v=hO5vxfzAruE"
    },
    {
      thumbnail: "https://www.rgs.edu.in/wp-content/uploads/2024/05/Royal-Global-School-provides-Holistic-Development-for-your-child.jpg",
      title: "Holistic Development",
      videoUrl: "https://www.youtube.com/watch?v=30Iv5fKqsQ4"
    },
    {
      thumbnail: "https://www.rgs.edu.in/wp-content/uploads/2024/05/Royal-Global-School-academics.jpg",
      title: "Academics",
      videoUrl: "https://www.youtube.com/watch?v=6PYHX9dTZYQ"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-4 border-l-primary border-y-2 border-y-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-medium text-foreground mt-4 text-center">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;