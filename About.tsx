import React from 'react';
import { Star, Award, BookOpen, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    "Strong hands-on genetic research skills — DNA/RNA extraction, PCR, gel electrophoresis, and cell culture",
    "Experience in molecular docking and phytochemical analyses",
    "Multiple certifications from Coursera, Johns Hopkins, UC Davis, ISRO",
    "Published book chapter on Ashwagandha cultivation (ISBN: 978-81-973753-9-2)",
    "Fluent in English and Urdu; professional experience in India and UAE"
  ];

  const stats = [
    { icon: Award, label: "Certifications", value: "40+" },
    { icon: BookOpen, label: "Publications", value: "3" },
    { icon: Users, label: "Experience", value: "2+ Years" },
    { icon: Star, label: "CGPA", value: "8.88/10" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="prose max-w-none text-gray-600 text-lg leading-relaxed">
              <p className="mb-6">
                As a highly motivated and results-oriented Research Intern with a Bachelor of Science in Life Sciences, 
                I bring a solid foundation in genetic research and laboratory work, combined with excellent time management, 
                communication, and leadership abilities developed through team projects and expert use of modern research tools.
              </p>
              
              <p className="mb-6">
                My passion for advancing genetic research is driven by my love of science, ethical conduct, and commitment 
                to inspiring the next generation. My technical expertise spans genetic research methodologies, proficiency 
                with various laboratory instruments, and laboratory procedures including gel electrophoresis and DNA extraction.
              </p>

              <p className="mb-8">
                I have broadened my knowledge through specialized courses from prestigious institutions like UC San Diego, 
                Johns Hopkins, and ISRO in environmental studies, artificial intelligence, and bioinformatics. My pursuit 
                of additional qualifications in AI, computational structure-based drug design, and specialized research 
                fields demonstrates my commitment to lifelong learning and innovation.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="flex justify-center mb-3">
                      <IconComponent className="text-blue-600" size={32} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Highlights</h3>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-gray-700 text-sm leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;