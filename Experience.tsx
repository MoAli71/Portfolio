import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Volunteer Research Assistant",
      org: "Department of Genetics and Genomics at United Arab Emirates University",
      period: "Oct 2025 – Present",
      location: "Al Ain, Abu Dhabi, United Arab Emirates",
      tasks: ["Research Assistant", "Data Collection", "Lab Support", "PCR", "Cell Culture", "Genome", "LC-MS", "Writing", "GC-MS", "Research Methodology"]
    },
    {
      role: "Management Trainee",
      org: "Garden City University",
      period: "Aug 2023 – Mar 2025",
      location: "Bengaluru, India",
      tasks: ["Front office", "Admissions", "Data", "Events", "IT Help", "PR", "International Guest Relations Manager", "Counseling", "Event Organizer"]
    },
    {
      role: "Research Intern",
      org: "IHC, Hindustan Aeronautics Limited",
      period: "Jul 2024 – Oct 2024",
      location: "Bengaluru, India",
      tasks: ["Phlebotomy", "Blood Bank", "Biochemistry", "Microbiology", "Serology", "Histopathology"]
    },
    {
      role: "Freelance",
      org: "Self-employed",
      period: "Feb 2024 – Present",
      location: "Remote",
      tasks: ["Freelance research", "Analysis", "Lab support", "Logo Design", "AI Automation", "Technical Writing", "Prompt Engineer"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A diverse background spanning research, management, and freelance work across multiple domains
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                  <h4 className="text-xl font-semibold text-blue-600 mb-3">{exp.org}</h4>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm font-medium">{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold text-gray-800 mb-4">Key Responsibilities:</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {exp.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-center space-x-2 text-gray-700">
                      <ChevronRight size={16} className="text-blue-600 flex-shrink-0" />
                      <span className="text-sm">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;