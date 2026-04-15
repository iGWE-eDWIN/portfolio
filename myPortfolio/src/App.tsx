// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App



import { motion } from "framer-motion";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import {  ExternalLink, Code2, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";





const projects = [
  {
    title: "Truist Surge Bank",
    desc: "Full banking platform with authentication, transactions and dashboard",
    image: "/images/truist.png",
    link: "https://www.truistsurgebank.org",
    isLive: true,
  },
  {
    title: "Forkify Recipe App",
    desc: "Recipe search app built during learning (Jonas Schmedtmann course project)",
    image: "/images/forkify.png",
    link: "https://forkify-app-ed.netlify.app/#664c8f193e7aa067e94e868f",
    isLive: true,
  },
  {
    title: "Royal Trust Bank",
    desc: "Modern banking UI with responsive design and user dashboard",
    image: "/images/royal.png",
    link: "https://royal-trust-bank.vercel.app/",
    isLive: true,
  },
  {
    title: "Nexus Express Courier",
    desc: "Courier and logistics tracking system with admin updates",
    image: "/images/nexus.png",
    link: "https://nexus-express.vercel.app/",
    isLive: true,
  },
  {
    title: "Edukaster Mobile App",
    desc: "Education mobile app available on Google Play Store",
    image: "/images/E_icon.png",
    link: "#", // add playstore link later
    // isLive: true,
    
  },
];
const skills = [
  "React",
  "Next.js",
  "Node.js",
  "Django REST",
  "MongoDB",
  "MySQL",
  "React Native",
  "Socket.IO",
];

export default function Portfolio() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
            >
              Edwin Igwe
            </motion.h1>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection("projects")} className="hover:text-gray-600 transition-colors font-medium">
                Projects
              </button>
              <button onClick={() => scrollToSection("experience")} className="hover:text-gray-600 transition-colors font-medium">
                Experience
              </button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-gray-600 transition-colors font-medium">
                Contact
              </button>
            </div>
            <div className="md:hidden flex gap-2">
              <button onClick={() => scrollToSection("contact")} className="text-sm px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full blur-xl opacity-20"></div>
              <img
                src="/images/edwin.jpeg"
                alt="Edwin Igwe"
                className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-xl object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Full Stack Engineer
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              MERN Stack & Django REST Developer building scalable web & mobile applications
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            <a href="mailto:igweedwin15@gmail.com">
              <Button className="flex items-center gap-2">
                <Mail size={18} /> Contact
              </Button>
            </a>
            <a href="https://github.com/iGWE-eDWIN" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="flex items-center gap-2">
                <FaGithub size={18} /> GitHub
              </Button>
            </a>
            <a href="https://linkedin.com/in/edwin-igwe-ab83a2249" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="flex items-center gap-2">
                <FaLinkedin size={18} /> LinkedIn
              </Button>
            </a>
            
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Tech Stack</h2>
            <p className="text-gray-600">Technologies I work with</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {skills.map((skill, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-5 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all font-medium text-sm sm:text-base hover:-translate-y-1"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Featured Projects</h2>
            <p className="text-gray-600">Some of my works</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 hover:border-gray-300">
                    <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-200">
                     <img
  src={project.image}
  alt={project.title}
  className="w-full h-full object-contain bg-white p-2 group-hover:scale-105 transition-transform duration-500"
/>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.isLive ? (
                          <ExternalLink size={20} className="text-gray-900" />
                        ) : (
                          <Code2 size={20} className="text-gray-900" />
                        )}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-gray-700 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {project.desc}
                      </p>
                      <div className="flex items-center text-sm font-medium text-gray-900">
                        {project.isLive ? (
                          <>
                            <span>View Live Site</span>
                            <ExternalLink size={16} className="ml-2" />
                          </>
                        ) : ''}
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Experience</h2>
            <p className="text-gray-600">My professional journey</p>
          </motion.div>
          <div className="space-y-6">
            {[
              {
                title: "Full Stack Engineer",
                company: "Topswami",
                desc: "Django REST APIs, Next.js integration",
              },
              {
                title: "Lead Developer",
                company: "Ajatek",
                desc: "Led MERN & mobile app development",
              },
              {
                title: "React Native Developer",
                company: "DAP Tech",
                desc: "iOS app features & optimization",
              },
            ].map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-gray-900">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-1">{exp.title}</h3>
                    <p className="text-gray-700 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-600 text-sm">{exp.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              I'm always open to discussing new projects and opportunities
            </p>
            <a
              href="mailto:igweedwin15@gmail.com"
              className="text-lg sm:text-xl font-medium text-gray-900 hover:text-gray-700 transition-colors"
            >
              igweedwin15@gmail.com
            </a>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="mailto:igweedwin15@gmail.com">
                <Button size="lg" className="flex items-center gap-2">
                  <Mail size={20} /> Email Me
                </Button>
              </a>
              <a href="https://github.com/iGWE-eDWIN" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="flex items-center gap-2">
                  <FaGithub size={20} /> GitHub
                </Button>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="flex items-center gap-2">
                  <FaLinkedin size={20} /> LinkedIn
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-sm text-gray-500 border-t border-gray-200">
        <p>© {new Date().getFullYear()} Edwin Igwe. All rights reserved.</p>
      </footer>
    </div>
  );
}
