
interface Education {
  institution: string;
  degree: string;
  duration: string;
  logo: string;
}

const Education = () => {
  const educationData: Education[] = [
    {
      institution: "Saveetha Engineering College",
      degree: "Bachelor of Technology - BTech, Artificial Intelligence & Machine Learning",
      duration: "Jul 2023 - May 2027",
      logo: "/lovable-uploads/2cdac731-55bb-4c43-83ed-e8888d2a0ed8.png"
    },
    {
      institution: "SBOA School & Junior College",
      degree: "Computer Science",
      duration: "2011 - 2023",
      logo: "/lovable-uploads/909352fe-594b-4137-9611-84e4fa206ec5.png"
    }
  ];

  return (
    <section id="education" className="relative py-20">
      <h2 className="text-4xl font-amaranth font-bold text-center mb-16 relative">
        <span className="relative inline-block">
          Education
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-highlight to-primary/50"></div>
        </span>
      </h2>

      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <div 
            key={index}
            className="bg-secondary/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-primary/5 hover:border-primary/10 transition-colors max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-6">
              <img 
                src={edu.logo} 
                alt={`${edu.institution} logo`}
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-accent mb-2">{edu.institution}</h3>
                <p className="text-primary">{edu.degree}</p>
                <p className="text-sm text-accent/60 mt-2">{edu.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
