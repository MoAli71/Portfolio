import React from 'react';
import { GraduationCap, Calendar, Award, ExternalLink, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "Bachelor of Science (B.Sc.) in Biotechnology, Biochemitry, and Genetics (Life Sciences)",
      institution: "Garden City University",
      location: "Bengaluru, India",
      period: "2022 - 2025",
      cgpa: "8.88/10",
      status: "Completed",
      certificateLink: "https://drive.google.com/file/d/1UeWKLde0UKpKIbu1oBaxp7QPwwubiMFO/view?usp=sharing",
      transcriptLink: "https://drive.google.com/file/d/1JhogFRCV0LfqNZRypj9cOp2j34M5IuiB/view?usp=sharing",
      description: "Comprehensive study in biological sciences with focus on genetics, biochemistry, and biotechnology"
    },
    {
      degree: "Class XII (Senior Secondary)",
      institution: "Indian School Al Ain",
      location: "Al Ain, Abu Dhabi, UAE",
      period: "2020 - 2022",
      percentage: "68.2%",
      status: "Completed",
      stream: "Science (PCBM - Physics, Chemistry, Biology and Mathematics)",
      description: "Science (PCBM- Physics, Chemistry, Biology and Mathematics)"
    },
    {
      degree: "Class X (Secondary)",
      institution: "Indian School Al Ain",
      location: "Al Ain, Abu Dhabi, UAE",
      period: "2019 - 2020",
      percentage: "78.2%",
      status: "Completed",
      description: "Secondary education with strong foundation in science and mathematics"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic journey through life sciences with strong foundation in biological research
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0 flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <GraduationCap className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                      {edu.stream && (
                        <p className="text-sm text-blue-600 font-medium">{edu.stream}</p>
                      )}
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-blue-600 mb-2">{edu.institution}</h4>
                  <p className="text-gray-600 mb-4">{edu.description}</p>
                </div>

                <div className="flex flex-col space-y-3 lg:text-right">
                  <div className="flex items-center lg:justify-end space-x-2">
                    <Calendar size={16} className="text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">{edu.period}</span>
                  </div>

                  <div className="flex items-center lg:justify-end space-x-2">
                    <MapPin size={16} className="text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">{edu.location}</span>
                  </div>

                  <div className="flex items-center lg:justify-end space-x-2">
                    <Award size={16} className="text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">
                      {edu.cgpa || edu.percentage}
                    </span>
                  </div>

                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      edu.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {edu.status}
                  </span>

                  {edu.certificateLink && (
                    <a
                      href={edu.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>View Certificate</span>
                    </a>
                  )}

                  {edu.transcriptLink && (
                    <a
                      href={edu.transcriptLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>View Transcript</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
