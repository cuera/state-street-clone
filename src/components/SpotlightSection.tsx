import { Button } from "@/components/ui/button";

const SpotlightSection = () => {
  const spotlightItems = [
    {
      image: "https://www.rgs.edu.in/wp-content/uploads/2025/01/26th-january-celebration-1.jpg",
      title: "76th Republic Day Celebration",
      description: "Royal Global School Guwahati celebrated the 76th Republic Day with the theme 'Swarnim Bharat - Virasat aur Vikas' with a lot of patriotism.",
      link: "#"
    },
    {
      image: "https://www.rgs.edu.in/wp-content/uploads/2024/11/mr.-singh.jpg",
      title: "Early Childhood Education Workshop",
      description: "Ms. Singh, an Early Childhood Education Practitioner from Delhi with over two decades of experience working with Dr. Arup Mukhopadhyay globally, was the resource person for the workshop.",
      link: "#"
    },
    {
      image: "https://www.rgs.edu.in/wp-content/uploads/2025/02/annual-prize.jpg",
      title: "Annual Prize Distribution 2024-25",
      description: "The Annual Prize Distribution for the session 2024-25 was held on 14th January 2025. After a year of exciting sports and activities, the Best House was announced for the session.",
      link: "#"
    },
    {
      image: "https://www.rgs.edu.in/wp-content/uploads/2025/02/annual-sports-day-spotlight.jpg",
      title: "Annual Sports Day",
      description: "Winning and losing is a part of life. To us participating is important and each student who participates is a winner.",
      link: "#"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-normal text-foreground text-center mb-16">
          Spotlight
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {spotlightItems.map((item, index) => (
            <div key={index} className="bg-background rounded-lg overflow-hidden shadow-lg">
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Know More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;