const LeadershipSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h5 className="text-sm font-medium text-primary mb-4 uppercase tracking-wider">
            Leadership
          </h5>
          <p className="text-lg text-muted-foreground">
            True leadership is not about being in charge; it's about inspiring and empowering others to thrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* First Leader */}
          <div className="text-center">
            <img 
              src="https://www.rgs.edu.in/wp-content/uploads/2024/07/ak-pansari-2.png"
              alt="Dr. Ashok Kumar Pansari"
              className="w-48 h-48 mx-auto mb-6 rounded-full object-cover"
            />
            <h3 className="text-2xl font-medium text-foreground mb-4">
              Dr. Ashok Kumar Pansari
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Royal Global School with a proud tradition of serving the Northeast India region for over seven years has successfully paved a path towards a goal called perfection among the ever enthusiastic learners for posterity. I have always believed that education softens the hearts and breeds gentleness and charity which Royal Global School has incessantly been trying to thrive at. In a very short span of time it has developed a reputation as a centre of academic excellence in a safe, caring and positive environment alongside personality development.
            </p>
          </div>

          {/* Second Leader */}
          <div className="text-center">
            <img 
              src="https://www.rgs.edu.in/wp-content/uploads/2024/05/anil-modi.png"
              alt="Sri. Anil Kumar Modi"
              className="w-48 h-48 mx-auto mb-6 rounded-full object-cover"
            />
            <h3 className="text-2xl font-medium text-foreground mb-4">
              Sri. Anil Kumar Modi
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              It is my proud privilege to warmly welcome you to the learning community 'The Royal Global School' dedicated to develop skilled, outstanding students who can pursue their interests and strengths to the best of their ability. The Royal Global School community assiduously and confidently works to impart dynamic education to prepare a strong generation of think tanks for a better positive world tomorrow. The institution stands by its core values – Kindness, Respect and Gratitude to its hilt.
            </p>
            <a 
              href="#" 
              className="text-primary hover:text-primary/80 font-medium"
            >
              Know more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;