
interface EducationProps {
  isAdmin?: boolean;
}

const Education = ({ isAdmin }: EducationProps) => {
  return (
    <section id="education" className="relative py-20">
      <h2 className="text-4xl font-amaranth font-bold text-center mb-16 relative">
        <span className="relative inline-block">
          Education
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-highlight to-primary/50"></div>
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-secondary/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-primary/5 hover:border-primary/10 transition-colors">
          <h3 className="text-xl font-bold text-accent mb-2">
            Bachelor of Technology in Computer Science and Engineering
          </h3>
          <p className="text-primary font-semibold">
            Sri Sairam Engineering College
          </p>
          <p className="text-sm text-accent/60">Chennai, Tamil Nadu</p>
          <p className="text-accent/80 mt-2">
            Currently pursuing my degree with a focus on computer science fundamentals,
            software engineering, and emerging technologies.
          </p>
          <p className="text-sm text-primary/80 mt-2">2021 - 2025</p>
        </div>

        <div className="bg-secondary/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-primary/5 hover:border-primary/10 transition-colors">
          <h3 className="text-xl font-bold text-accent mb-2">
            Higher Secondary Education
          </h3>
          <p className="text-primary font-semibold">
            Sri Sankara Senior Secondary School
          </p>
          <p className="text-sm text-accent/60">Chennai, Tamil Nadu</p>
          <p className="text-accent/80 mt-2">
            Completed higher secondary education with distinction in Computer Science
            and Mathematics.
          </p>
          <p className="text-sm text-primary/80 mt-2">2019 - 2021</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
