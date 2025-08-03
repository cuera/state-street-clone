const NewsEventsSection = () => {
  const newsItems = [
    {
      date: "30th May 2025",
      title: "A Pause for Pages: DEAR Program Unites RGS in 20 Minutes of Reading",
      subtitle: "Weekly Report on DEAR Program",
      description: '"Reading is to the mind what exercise is to the body." – Joseph Addison',
      link: "#"
    },
    {
      date: "23rd May 2025", 
      title: "Turning Pages, Shaping Minds: RGS Embraces the DEAR Initiative",
      description: '"Books are mirrors: you only see in them what you already have inside you." – Carlos Ruiz Zafón',
      link: "#"
    },
    {
      date: "16th May 2025",
      title: "Drop Everything And Read: RGS Guwahati Celebrates the Power of Books",
      description: '"Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers."',
      link: "#"
    },
    {
      date: "25th April 2025",
      title: "Drop Everything and Read (DEAR) Program",
      description: "Drop Everything and Read (DEAR) session was a truly special moment for our entire school community. Seeing the students, teachers, and staff press pause for 20 peaceful minutes and being deeply engrossed in their reading is always a heart warming sight.",
      link: "#"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-normal text-foreground text-center mb-16">
          News & Events
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="border-l-4 border-primary pl-6">
              <div className="text-sm text-primary font-medium mb-2">
                {item.date}
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">
                {item.title}
              </h3>
              {item.subtitle && (
                <h4 className="text-lg text-muted-foreground mb-2">
                  {item.subtitle}
                </h4>
              )}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {item.description}
              </p>
              <a 
                href={item.link}
                className="text-primary hover:text-primary/80 font-medium text-sm"
              >
                Know more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;