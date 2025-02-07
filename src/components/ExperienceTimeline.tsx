
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
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform -translate-x-1/2" />

      {/* Experiences */}
      <div className="relative space-y-24">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
              exp.side === "right" ? "md:text-left" : "md:text-right"
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-1/2 top-0 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2" />

            {/* Content */}
            <div
              className={`space-y-2 ${
                exp.side === "right" ? "md:col-start-2" : "md:col-start-1"
              }`}
            >
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-accent">{exp.title}</h3>
                <p className="text-[#0FA0CE] font-medium">{exp.company}</p>
                <p className="text-sm text-[#8E9196]">{exp.location}</p>
                <p className="text-[#222222] mt-2">{exp.description}</p>
              </div>
            </div>

            {/* Date */}
            <div
              className={`text-lg font-medium text-[#33C3F0] ${
                exp.side === "right"
                  ? "md:col-start-1 md:text-right"
                  : "md:col-start-2 md:text-left"
              }`}
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
