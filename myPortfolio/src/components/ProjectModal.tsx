import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaGlobe } from 'react-icons/fa';
import { FiX, FiAlertTriangle, FiCpu, FiCheckCircle } from 'react-icons/fi';

export interface ProjectData {
  title: string;
  subtitle: string;
  tag: string;
  category: 'fullstack' | 'mobile' | 'frontend';
  desc: string;
  challenge: string;
  image: string;
  link: string;
  githubLink?: string;
  isLive: boolean;
  stack: string[];
  features?: string[];
  role?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-[#0f172a] border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0b1329]/90 backdrop-blur-md border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                {project.tag}
              </span>
              <h3 className="text-lg font-bold text-white truncate max-w-[200px] sm:max-w-md">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 overflow-y-auto space-y-6 text-slate-300">
            {/* Image Preview */}
            <div className="relative rounded-xl overflow-hidden border border-slate-700/50 bg-slate-900 group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 sm:h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80" />
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4">
              {project.isLive && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02]"
                >
                  <FaGlobe size={16} />
                  <span>Visit Live Application</span>
                  <FaExternalLinkAlt size={14} />
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-xl border border-slate-700 transition-all"
                >
                  <FaGithub size={18} />
                  <span>View Source Code</span>
                </a>
              )}
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                <FiCpu size={16} /> Overview & Scope
              </h4>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                {project.desc}
              </p>
            </div>

            {/* Engineering Challenge */}
            <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200/90 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-base">
                <FiAlertTriangle size={20} className="flex-shrink-0" />
                <span>Technical & Architectural Challenge</span>
              </div>
              <p className="text-sm leading-relaxed text-amber-100/90 pl-7">
                {project.challenge}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-medium bg-slate-800/80 text-cyan-300 border border-slate-700 rounded-lg shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features list */}
            {project.features && project.features.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Key Capabilities
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-slate-800/40 p-2.5 rounded-lg border border-slate-800">
                      <FiCheckCircle size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-[#0b1329]/90 border-t border-slate-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
