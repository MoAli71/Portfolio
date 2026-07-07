import React, { useState } from 'react';
import { ExternalLink, Calendar, Award, ChevronLeft, ChevronRight } from 'lucide-react';

const Certificates: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const certificates = [
    { title: "Generative AI Mastermind", issuer: "Outskill", issued: "Sep 2025" },
    { title: "Essentials of Sensory Science", issuer: "University of California, Davis", issued: "Apr 2025", credential_id: "GFH7U0478VZY", link: "https://www.coursera.org/account/accomplishments/specialization/GFH7UO478VZY" },
    { title: "Neuroscience and Neuroimaging", issuer: "Johns Hopkins University", issued: "Apr 2025", credential_id: "PZQG2NA5SEU8", link: "https://www.coursera.org/account/accomplishments/specialization/PZQG2NA5SEU8" },
    { title: "OM Excel Workshop", issuer: "United Latino Students Association", issued: "Apr 2025", credential_id: "32", link: "https://certx.in/certificate/27e0774f-467d-45de-9d54-33382f67ff0e298479" },
    { title: "Principles of fMRI 1", issuer: "Johns Hopkins University", issued: "Apr 2025", credential_id: "8VED9RFWC027", link: "https://www.coursera.org/account/accomplishments/verify/8VED9RFWC027" },
    { title: "AI Tools Workshop", issuer: "United Latino Students Association", issued: "Mar 2025", credential_id: "28", link: "https://certx.in/certificate/9318e7f9-0234-4ea4-9390-efad88624b8b241635" },
    { title: "Disease Clusters", issuer: "United Latino Students Association", issued: "Mar 2025", credential_id: "GTVTWJ5A6PlA", link: "https://www.coursera.org/account/accomplishments/records/GTVTWJ5A6PIA" },
    { title: "Fundamental Neuroscience for Neuroimaging", issuer: "Johns Hopkins University", issued: "Mar 2025", credential_id: "SEZQ029F9M76", link: "https://www.coursera.org/account/accomplishments/verify/SEZQO29F9M76" },
    { title: "Industrial Biotechnology", issuer: "University of Manchester", issued: "Mar 2025", credential_id: "FDSSILI MCPOT", link: "https://www.coursera.org/account/accomplishments/verify/FDSS1L1MCP0T" },
    { title: "Introduction to Sensory Science", issuer: "University of California, Davis", issued: "Mar 2025", credential_id: "SQZUQH4AT1N2", link: "https://www.coursera.org/account/accomplishments/verify/SQZUQH4AT1N2" },
    { title: "Introduction to Human Behavioral Genetics", issuer: "University of Minnesota", issued: "Sep 2024", credential_id: "V1N96O3YVIJI", link: "https://coursera.org/verify/V1N96O3YVIJI" },
    { title: "Understanding Plants - Part I: What a Plant Knows", issuer: "Tel Aviv University", issued: "Mar 2025", credential_id: "JYBZ7LG6JS4G", link: "https://www.coursera.org/account/accomplishments/verify/JYBZ7LG6JS4G" },
    { title: "Science Academies' Lecture Workshop on Recent Advances in Life Sciences", issuer: "Indian Institute of Science (IISc)", issued: "Feb 2025" },
    { title: "Special Lecture Series in Biological Sciences", issuer: "Karnataka State Council For Science & Technology", issued: "Jan 2025" },
    { title: "Digital Marketing", issuer: "IIDE - The Digital School", issued: "Dec 2024" },
    { title: "Metal Nanoparticle Synthesis, Characterization and its Application as Antiparasitic and Antimicrobial", issuer: "Heredity Biosciences", issued: "Dec 2024", credential_id: "HBS OW1842" },
    { title: "High Performance Collaboration: Leadership, Teamwork, and Negotiation", issuer: "Northwestern University", issued: "Sep 2024", credential_id: "IN8780ZMRRU8", link: "https://www.coursera.org/account/accomplishments/records/IN878OZMRRU8" },
    { title: "Introduction to Cybersecurity Essentials", issuer: "IBM", issued: "Sep 2024", credential_id: "977J4N4G4UC8", link: "https://www.coursera.org/account/accomplishments/records/977J4N4G4UC8" },
    { title: "Research Methodologies", issuer: "Queen Mary University of London", issued: "Sep 2024", credential_id: "A6XAAGBOYE21", link: "https://www.coursera.org/account/accomplishments/records/A6XAAGBOYE21" },
    { title: "Teamwork Skills: Communicating Effectively in Groups", issuer: "University of Colorado Boulder", issued: "Sep 2024", credential_id: "TTYB5B4X0936", link: "https://www.coursera.org/account/accomplishments/records/TTYB5B4XO936" },
    { title: "Business Intelligence using Power BI", issuer: "Skill Nation", issued: "Apr 2024" },
    { title: "GREEN Olympiad for Youth", issuer: "MINISTRY OF EDUCATION, GOVERNMENT OF INDIA", issued: "Apr 2024" },
    { title: "Enhancing Shelf Life of Millets & Millet-based Products through Chemical both Synthetic & Natural Preservatives", issuer: "Karnataka State Higher Education Council", issued: "Mar 2024" },
    { title: "Pectin-Chitosan Composite Haemostatic Bandage: An In-Silico Exploration of Biocompatibility through Docking Simulations", issuer: "Karnataka State Higher Education Council", issued: "Mar 2024" },
    { title: "Finding Hidden Messages in DNA (Bioinformatics I)", issuer: "UC San Diego", issued: "Feb 2024", credential_id: "WFQF3HUFFCH5", link: "https://coursera.org/verify/WFQF3HUFFCH5" },
    { title: "Genome Sequencing (Bioinformatics II)", issuer: "UC San Diego", issued: "Feb 2024", credential_id: "CL2TWQ9LCA9V", link: "https://coursera.org/verify/CL2TWQ9LCA9V" },
    { title: "Artificial Intelligence in Research & Science", issuer: "CliMed Academy (CliMed.Edu)", issued: "Nov 2023" },
    { title: "Certificate of Participation in Round 1 | Tata Brand Assessment of Tata Imagination Challenge 2023", issuer: "Unstop", issued: "Nov 2023", credential_id: "0a0a11b3-2c38-411b-beda-b0ff0b708a5b", link: "https://unstop.com/certificate-preview/0a0a11b3-2c38-411b-beda-b0ff0b708a5b" },
    { title: "AI For Everyone", issuer: "Coursera", issued: "Oct 2023", credential_id: "FE8CKYZ43RYC", link: "https://coursera.org/verify/FE8CKYZ43RYC" },
    { title: "The Art of Working with Fungi", issuer: "Nuvedo", issued: "Sep 2023" },
    { title: "WHAT DO GENES DO", issuer: "The Open University", issued: "Jul 2023", credential_id: "SK1953" },
    { title: "Computational Structure Based Drug Design", issuer: "Karnataka Science and Technology Academy - India", issued: "Dec 2022" },
    { title: "ONLINE SUMMER SCHOOL ON USEFULNESS OF REMOTE SENSING & GIS FOR ENVIRONMENTAL STUDIES", issuer: "Indian Institute of Remote Sensing (IIRS), ISRO", issued: "Aug 2021", credential_id: "IIRS202110182464" },
    { title: "Let's Break the Chain of COVID-19 Infection", issuer: "Mohammed Bin Rashid University of Medicine and Health Sciences (MBRU)", issued: "Jun 2020" }
  ];

  const totalPages = Math.ceil(certificates.length / itemsPerPage);
  const currentCertificates = certificates.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Learning</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning through prestigious institutions and specialized programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentCertificates.map((cert, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
              
              <h3 className="font-bold text-gray-900 mb-3 line-clamp-2">{cert.title}</h3>
              <p className="text-blue-600 font-medium text-sm mb-2">{cert.issuer}</p>
              
              <div className="flex items-center text-gray-600 text-sm mb-3">
                <Calendar size={14} className="mr-2" />
                <span>{cert.issued}</span>
              </div>

              {cert.credential_id && (
                <div className="text-xs text-gray-500 bg-gray-100 rounded px-2 py-1 inline-block">
                  ID: {cert.credential_id}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={prevPage}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            disabled={currentPage === 0}
          >
            <ChevronLeft size={20} />
            <span>Previous</span>
          </button>
          
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentPage === i ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextPage}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            disabled={currentPage === totalPages - 1}
          >
            <span>Next</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;