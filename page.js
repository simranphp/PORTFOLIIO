import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Interactive Learning Platform",
      description: "A comprehensive e-learning platform with interactive quizzes and progress tracking",
      image: "https://placeholder-image-service.onrender.com/image/400x300?prompt=Interactive%20learning%20platform%20dashboard%20with%20charts%20and%20analytics&id=project-1"
    },
    {
      id: 2,
      title: "Educational Game Development",
      description: "Gamified learning experience for children with engaging animations",
      image: "https://placeholder-image-service.onrender.com/image/400x300?prompt=Colorful%20educational%20game%20interface%20with%20cartoon%20characters&id=project-2"
    },
    {
      id: 3,
      title: "Course Management System",
      description: "Full-stack solution for course creation and student management",
      image: "https://placeholder-image-service.onrender.com/image/400x300?prompt=Modern%20course%20management%20system%20with%20clean%20UI&id=project-3"
    }
  ];

  // Sample skills data
  const skills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 88 },
    { name: "Node.js", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Animation", level: 92 },
    { name: "UI/UX Design", level: 87 },
    { name: "Video Editing", level: 75 }
  ];

  useEffect(() => {
    // Auto-play music
    if (audioRef.current && isMusicPlaying) {
      audioRef.current.play().catch(err => {
        console.log("Autoplay prevented:", err);
      });
    }
  }, [isMusicPlaying]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 font-sans">
      {/* Background Music */}
      <audio 
        ref={audioRef} 
        loop 
        src="/assets/audio/background-music.mp3" 
        onEnded={() => setIsMusicPlaying(false)}
      />
      
      {/* Music Control */}
      <button
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-50 p-2 bg-white rounded-full shadow-lg hover:bg-pink-100 transition-colors"
        aria-label={isMusicPlaying ? "Pause music" : "Play music"}
      >
        {isMusicPlaying ? (
          <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        )}
      </button>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold text-pink-600"
            >
              E-Learning Dev
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'resume', 'work', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors hover:text-pink-600 ${
                    activeSection === item ? 'text-pink-600 font-semibold' : 'text-gray-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                Creative E-Learning
                <span className="text-pink-600 block">Developer</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Transforming education through innovative digital solutions and engaging learning experiences.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('work')}
                className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
              >
                View My Work
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 flex justify-center"
            >
              <img
                src="/assets/images/animated-character.gif"
                alt="Animated character of e-learning developer with friendly and creative expression"
                className="w-80 h-80 object-contain rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Resume</h2>
            <p className="text-gray-600">Skills and experience in e-learning development</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-pink-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-pink-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Experience</h3>
              <div className="space-y-6">
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800">Senior E-Learning Developer</h4>
                  <p className="text-pink-600 mb-2">TechEdu Solutions • 2020 - Present</p>
                  <p className="text-gray-600">Leading development of interactive learning platforms and educational games.</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800">Instructional Designer</h4>
                  <p className="text-pink-600 mb-2">LearnFast Inc. • 2018 - 2020</p>
                  <p className="text-gray-600">Created engaging course content and developed learning management systems.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Work</h2>
            <p className="text-gray-600">Explore my latest e-learning projects and creations</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title} e-learning project`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <button className="text-pink-600 hover:text-pink-700 font-semibold">
                    View Project →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-gray-600">Let's create amazing e-learning experiences together</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-pink-50 rounded-xl p-8 md:p-12"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-pink-600 text-white py-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-6 mt-12"
          >
            <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 E-Learning Developer Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;
