import React from 'react';
import { Project } from '../types';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { addToCart } = useCart();

  return (
    <div className="group cursor-pointer flex flex-col h-full" onClick={() => addToCart(project)}>
      {/* Image Area */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-900 mb-6 border border-white/5">
        <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 transition-colors z-10 duration-500" />
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
        
        {/* Floating Add to Cart Button */}
        <button 
            onClick={(e) => {
                e.stopPropagation();
                addToCart(project);
            }}
            className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 w-10 h-10 bg-white hover:bg-indigo-600 hover:text-white rounded-full flex items-center justify-center text-black shadow-lg transition-colors"
            title="Add to Cart"
        >
            <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-grow">
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="text-xl font-medium text-white group-hover:text-indigo-300 transition-colors">{project.title}</h3>
          <span className="text-white font-medium bg-gray-900 px-3 py-1 rounded-full text-sm border border-gray-800">
              ${project.price}
          </span>
        </div>
        <p className="text-gray-500 text-sm line-clamp-2 mb-4">{project.description}</p>
        
        {/* Tags */}
        <div className="flex gap-2 mb-6">
          {project.tags.slice(0, 2).map(tag => (
              <span key={tag} className="text-[10px] text-gray-600 font-medium uppercase tracking-wider border border-gray-800 px-2 py-0.5 rounded">
                  {tag}
              </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;