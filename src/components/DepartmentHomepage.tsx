'use client';

import React from 'react';
import { Building } from 'lucide-react';

interface DepartmentHomepageProps {
  department: {
    name: string;
    code: string;
    slug: string;
    description?: string;
  };
  onTabChange: (tab: string) => void;
}

const DepartmentHomepage: React.FC<DepartmentHomepageProps> = ({ department, onTabChange }) => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-pink-50/20 to-blue-50/30 dark:from-purple-900/20 dark:via-pink-900/10 dark:to-blue-900/20 animate-watercolor-float"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center py-8">
        <div className="max-w-4xl mx-auto animate-gentle-fade-in">
          
          {/* Tagline */}
          <p className="text-2xl font-poppins font-light mb-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Relive, Reflect, Remember
          </p>
          
          {/* Subtitle - Personalized */}
          <p className="text-lg font-poppins text-slate-500 dark:text-slate-400 mb-6 max-w-3xl mx-auto leading-relaxed">
            Step into {department.name}'s digital yearbook where memories come alive. Every photo, every event, 
            every moment captured and preserved for you to cherish forever.
          </p>

          {/* Department Description */}
          {department.description && (
            <div className="mb-6 p-4">
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                {department.description}
              </p>
            </div>
          )}

          {/* Department Info Card */}
          <div className="mb-6 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Department Code</h3>
                <p className="text-slate-600 dark:text-slate-300 font-mono text-lg">{department.code}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Department Slug</h3>
                <p className="text-slate-600 dark:text-slate-300 font-mono text-lg">{department.slug}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentHomepage;