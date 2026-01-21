import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import Button from './Button';

const Marketplace: React.FC = () => {
  return (
    <section id="marketplace" className="py-16 md:py-32 px-6 relative bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6 md:gap-8">
            <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">Shop Assets</h2>
                <p className="text-gray-500 text-sm md:text-base">Curated resources for the modern workflow.</p>
            </div>
            <Button variant="outline" className="self-start md:self-auto w-full md:w-auto">View All Products</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-16">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketplace;