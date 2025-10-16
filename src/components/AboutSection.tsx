const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900">
              Built with good design, thoughtful amenities, and sustainable principles that offer a more impactful way of living.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              505 State Street represents the future of sustainable urban living. As New York's first all-electric skyscraper, 
              we're setting new standards for environmental responsibility without compromising on luxury or comfort.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">100%</h3>
                <p className="text-gray-600">Carbon Neutral</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">45</h3>
                <p className="text-gray-600">Stories</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-300 aspect-[4/3] rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Building Image</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;