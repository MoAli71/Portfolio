import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = {
    emails: ["mohdali81268@gmail.com", "suddu150903@gmail.com"],
    phones: ["+971566792240", "+919936190366"],
    location: "Al Ain, Abu Dhabi, UAE"
  };

  const socialLinks = [
    { type: "linkedin", url: "https://www.linkedin.com/in/moali81268", icon: Linkedin, color: "bg-blue-600" },
    { type: "github", url: "https://github.com/MoAli71", icon: Github, color: "bg-gray-800" },
    { type: "instagram", url: "https://www.instagram.com/iam.mohdali_?utm_source=qr&igsh=cnA3b2lmYXIweGIx", icon: Instagram, color: "bg-pink-600" },
    { type: "facebook", url: "https://www.facebook.com/profile.php?id=100084468577413&mibextid=ZbWKwL", icon: Facebook, color: "bg-blue-500" }
  ];

  const languages = [
    "English (Professional)",
    "Urdu (Professional)",
    "Hindi (Native)",
    "German (Elementary)",
    "Kannada (Limited)"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate on exciting research projects or discuss opportunities in genetics and biotechnology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                  {contactInfo.emails.map((email, index) => (
                    <a
                      key={index}
                      href={`mailto:${email}`}
                      className="block text-blue-600 hover:text-blue-800 transition-colors mb-1"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Phone</h4>
                  {contactInfo.phones.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone}`}
                      className="block text-emerald-600 hover:text-emerald-800 transition-colors mb-1"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Location</h4>
                  <p className="text-gray-600">{contactInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-6">Connect on Social Media</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 ${social.color} rounded-lg flex items-center justify-center text-white hover:opacity-80 transition-opacity transform hover:scale-110 duration-200`}
                    >
                      <IconComponent size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Languages & Availability */}
          <div className="space-y-8">
            {/* Languages */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Languages</h3>
              <div className="space-y-3">
                {languages.map((language, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{language}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Collaborate</h3>
              <p className="text-blue-100 mb-6">
                Open to research collaborations, freelance projects, and full-time opportunities in genetics, biotechnology, and AI applications.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for new opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;