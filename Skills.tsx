import React, { useState } from 'react';
import { Microscope, Computer, Brain, FileText, Wrench, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('laboratory_techniques');

  const skillCategories = {
    laboratory_techniques: {
      title: "Laboratory Techniques",
      icon: Microscope,
      color: "bg-blue-600",
      skills: ["Gel Electrophoresis", "DNA Electrophoresis", "PCR", "DNA Extraction", "RNA Isolation", "Microscopy", "Staining", "Gram Staining", "Antibody Sensitivity Test", "Antigen-Antibody Reactions", "Western Blotting", "Cell Culture", "Bacterial Culturing", "Drosophila Culture", "Blood Typing", "PRP Handling", "Phlebotomy", "Hematology", "Widal Test", "RPR", "Urine Analysis", "IVD", "Streak Plating", "Titration", "Enzyme Activity", "Enzyme Immobilization", "Laccase Assays", "Pectin Handling"]
    },
    computational_bioinformatics: {
      title: "Computational & Bioinformatics",
      icon: Computer,
      color: "bg-emerald-600",
      skills: ["Molecular Docking", "Autodock", "Structure Based Drug Design", "Bioinformatics", "Whole Genome Sequencing", "Genome Analysis", "Genome Editing", "Algorithms", "Dynamic Programming", "Statistical Data Analysis", "Data Management"]
    },
    ai_prompting: {
      title: "AI & Automation",
      icon: Brain,
      color: "bg-purple-600",
      skills: ["AI Prompting", "Prompt Engineering", "AI Automation", "AI Generalist", "Custom GPTs", "AI Agents", "Voice Agents", "AI in Science"]
    },
    analytical_instruments: {
      title: "Analytical Instruments",
      icon: Wrench,
      color: "bg-orange-600",
      skills: ["Spectrophotometry", "LC-MS", "Centrifugation", "Calorimeter", "Hot Air Oven", "Incubator", "Autoclave", "Laminar Airflow", "Micropipettes", "Paper Chromatography", "TLC", "Scanning Probe Microscopy"]
    },
    research_communication: {
      title: "Research & Communication",
      icon: FileText,
      color: "bg-red-600",
      skills: ["Research Methodologies", "Technical Writing", "Public Speaking", "Presentation Development", "Publication Writing"]
    },
    soft_skills: {
      title: "Leadership & Soft Skills",
      icon: Users,
      color: "bg-green-600",
      skills: ["Time Management", "Communication", "Leadership", "Teamwork", "Decision Making", "Critical Thinking", "Creativity", "Negotiation", "Intrapersonal Skills", "Public Relations"]
    }
  };

  const categoryKeys = Object.keys(skillCategories) as (keyof typeof skillCategories)[];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive skill set spanning laboratory techniques, computational biology, AI, and research methodologies
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Category Selector */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-3">
              {categoryKeys.map((key) => {
                const category = skillCategories[key];
                const IconComponent = category.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 text-left ${
                      activeCategory === key
                        ? `${category.color} text-white shadow-lg transform scale-105`
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <IconComponent size={24} />
                    <span className="font-medium">{category.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="lg:w-2/3">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-8">
                {React.createElement(skillCategories[activeCategory as keyof typeof skillCategories].icon, {
                  size: 32,
                  className: `text-white p-2 rounded-lg ${skillCategories[activeCategory as keyof typeof skillCategories].color}`
                })}
                <h3 className="text-2xl font-bold text-gray-900">
                  {skillCategories[activeCategory as keyof typeof skillCategories].title}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
                  >
                    <span className="text-sm font-medium text-gray-800">{skill}</span>
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

export default Skills;