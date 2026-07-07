import React from 'react';
import { Calendar, ExternalLink, BookOpen, Award } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    { title: "Phytochemical Analysis of Food Products", year: "2023", type: "research" },
    { title: "Laccase Enzyme Activity (Trichoderma virens)", year: "2025", type: "research" },
    { title: "Pectin-Chitosan Composite Bandage Docking", year: "2024", type: "computational" },
    { title: "Pectin as Clotting Agent", year: "2025", type: "research" }
  ];

  const publications = [
    {
      title: "Ashwagandha Cultivation Chapter",
      isbn: "978-81-973753-9-2",
      description: "Methods of Cultivating, Harvesting and Strategies for Optimal Growth and Environmental Considerations for High Yields of Ashwagandha in Agriculture",
      status: "Published",
      type: "book-chapter"
    },
    {
      title: "Bioleaching of Heavy Metals & ARGs in Chicken Manure",
      status: "Under Review",
      year: "2025",
      type: "journal"
    },
    {
      title: "Genetically Modified Crops Critical Analysis",
      status: "Review Article",
      year: "2024",
      type: "research"
    }
  ];

  const conferences = [
    "Millets: Genomic & Biotech Approaches — Mar 2024",
    "National Conference on Biological & Health Sciences — Dec 2024"
  ];

  const awards = [
    "Green Olympiad — 2024",
    "Gardenia 2.0 Coordinator — 2023",
    "Freshathon — 2023",
    "Therapeutic Tribal Tourism — 2023"
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research & Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcase of research projects, publications, and academic achievements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Research Projects */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <ExternalLink className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Research Projects</h3>
            </div>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div key={index} className="border-l-4 border-blue-200 pl-6 py-3">
                  <h4 className="font-semibold text-gray-800 mb-2">{project.title}</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{project.year}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.type === 'research' ? 'bg-blue-100 text-blue-800' : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {project.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                <BookOpen className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Publications</h3>
            </div>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">{pub.title}</h4>
                  {pub.description && (
                    <p className="text-sm text-gray-600 mb-3">{pub.description}</p>
                  )}
                  <div className="flex flex-wrap items-center gap-2">
                    {pub.isbn && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                        ISBN: {pub.isbn}
                      </span>
                    )}
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      pub.status === 'Published' ? 'bg-green-100 text-green-800' :
                      pub.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {pub.status}
                    </span>
                    {pub.year && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                        {pub.year}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Conferences */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Conference Presentations</h3>
            </div>
            <div className="space-y-4">
              {conferences.map((conference, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-800 font-medium">{conference}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Awards & Recognition</h3>
            </div>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-lg">
                  <Award className="text-yellow-600 flex-shrink-0" size={20} />
                  <span className="text-gray-800 font-medium">{award}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;