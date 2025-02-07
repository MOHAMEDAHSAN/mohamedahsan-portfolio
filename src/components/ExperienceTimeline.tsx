
interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  side: "left" | "right";
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  return (
    <section id="experience" className="relative py-20">
      <h2 className="text-4xl font-amaranth font-bold text-center mb-32 relative">
        <span className="relative inline-block">
          Experiences
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-highlight to-primary/50"></div>
        </span>
      </h2>
      
      <div className="absolute left-1/2 top-32 bottom-0 w-1 bg-primary/20 transform -translate-x-1/2" />

      <div className="relative space-y-24">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
              exp.side === "right" ? "md:text-left" : "md:text-right"
            }`}
          >
            <div className="absolute left-1/2 top-1/2 w-5 h-5 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10" />

            <div
              className={`space-y-2 ${
                exp.side === "right" ? "md:col-start-2" : "md:col-start-1"
              }`}
            >
              <div className="bg-secondary/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-primary/5 hover:border-primary/10 transition-colors">
                <h3 className="text-xl font-bold text-accent">{exp.title}</h3>
                <p className="text-primary font-semibold">{exp.company}</p>
                <p className="text-sm text-accent/60">{exp.location}</p>
                <p className="text-accent/80 mt-2">{exp.description}</p>
              </div>
            </div>

            <div
              className={`text-lg font-medium text-primary ${
                exp.side === "right"
                  ? "md:col-start-1 md:text-right"
                  : "md:col-start-2 md:text-left"
              } flex items-center h-full`}
            >
              {exp.duration}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
