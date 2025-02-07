
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Award } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: "AWS Cloud Certifications",
    organization: "Amazon Web Services & Coursera",
    description: "Successfully completed AWS Cloud Practitioner Essentials, AWS Cloud Technical Essentials, and Exam Prep: AWS Certified Cloud Practitioner Foundations courses.",
    image: "/lovable-uploads/e7f2f379-c6f8-4394-aa31-4711d5297b13.png",
    images: [
      "/lovable-uploads/c5f01d9f-0ddd-4fcf-8810-9f7983d3f58b.png",
      "/lovable-uploads/b0a46e45-2000-4e84-a56c-47c328db758a.png",
      "/lovable-uploads/b2a38967-0187-468a-bba7-98353e46c387.png"
    ]
  },
  {
    id: 2,
    title: "Natural Language Processing",
    organization: "DeepLearning.AI",
    description: "Acquired expertise in NLP, Machine Learning, PyTorch, NLTK, BERT, and Data Preparation through comprehensive coursework.",
    image: "/lovable-uploads/89da934b-65b7-4cd0-8319-5321c8167d55.png",
    images: ["/lovable-uploads/7081b4c3-0335-4e9e-a083-08eace11fcec.png"]
  },
  {
    id: 3,
    title: "Introduction to Internet of Things",
    organization: "NPTEL",
    description: "Completed the IoT certification with a outstanding score of 90/100, demonstrating proficiency in IoT fundamentals and applications.",
    image: "/lovable-uploads/25e3f57a-9e1b-4b7d-b6f2-8d9d436330f1.png",
    images: ["/lovable-uploads/25e3f57a-9e1b-4b7d-b6f2-8d9d436330f1.png"]
  }
];

const CertificationCard = ({ certification, onClick }: { certification: typeof certifications[0], onClick: () => void }) => (
  <div 
    onClick={onClick}
    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
  >
    <div className="p-6 space-y-4">
      <div className="flex items-center gap-3">
        <Award className="w-6 h-6 text-primary" />
        <h3 className="text-xl font-amaranth font-semibold text-accent group-hover:text-primary transition-colors">
          {certification.title}
        </h3>
      </div>
      <p className="text-accent/80 text-sm">{certification.organization}</p>
      <p className="text-accent/70 text-sm line-clamp-2">{certification.description}</p>
    </div>
  </div>
);

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-amaranth font-bold text-center mb-16 relative">
          <span className="relative inline-block">
            Certifications
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-highlight to-primary/50"></div>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <CertificationCard 
              key={cert.id} 
              certification={cert} 
              onClick={() => setSelectedCert(cert)}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedCert && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-amaranth">{selectedCert.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-accent/80">{selectedCert.organization}</p>
                <p className="text-accent/70">{selectedCert.description}</p>
                <div className="grid gap-4">
                  {selectedCert.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${selectedCert.title} Certificate ${index + 1}`}
                      className="rounded-lg shadow-md w-full object-contain"
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Certifications;

