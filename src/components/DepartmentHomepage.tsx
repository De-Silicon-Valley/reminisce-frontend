'use client';

import React from 'react';
import { 
  Building2, 
  Building
} from 'lucide-react';


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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900/30 dark:to-purple-900/30 relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        {/* Subtle floating orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-200/25 to-indigo-200/25 dark:from-blue-700/15 dark:to-indigo-700/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-indigo-200/25 to-purple-200/25 dark:from-indigo-600/15 dark:to-purple-600/15 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-200/20 to-blue-200/20 dark:from-purple-700/12 dark:to-blue-700/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-12">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08)_0%,transparent_50%)]"></div>
        </div>
      </div>
      
      {/* Hero Section */}
      <main className="relative z-10 overflow-hidden">
        {/* Subtle center focus */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-200/12 via-indigo-200/12 to-purple-200/12 dark:from-blue-700/8 dark:via-indigo-700/8 dark:to-purple-700/8 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
          <div className="max-w-5xl mx-auto animate-gentle-fade-in">
            {/* Subtle Welcome Illustration */}
            <div className="relative mb-12">
              <div className="w-44 h-44 rounded-full bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 dark:from-blue-700 dark:via-indigo-600 dark:to-purple-600 border-4 border-blue-300/40 dark:border-blue-600/40 flex items-center justify-center mx-auto shadow-lg hover:scale-110 transition-all duration-500 cursor-pointer group relative overflow-hidden">
                {/* Subtle rotating ring */}
                <div className="absolute inset-2 rounded-full border border-blue-300/50 dark:border-blue-500/50 animate-spin" style={{ animationDuration: '12s' }}></div>
                
                {/* Subtle center glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/25 via-indigo-200/25 to-purple-200/25 dark:from-blue-700/25 dark:via-indigo-600/25 dark:to-purple-600/25 rounded-full animate-pulse"></div>
                <span className="text-7xl group-hover:animate-bounce relative z-10 filter drop-shadow-md">🏛️</span>
              </div>
            </div>
            
            {/* Main Title */}
            <h1 className="text-7xl font-poppins font-bold mb-6 text-indigo-900 dark:text-indigo-100">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                {department.name}
              </span>
            </h1>
            
            {/* Tagline */}
            <p className="text-3xl font-poppins font-light mb-8 text-indigo-700 dark:text-indigo-300 max-w-3xl mx-auto">
              Discover • Connect • Celebrate
            </p>
            
            {/* Subtitle */}
            <p className="text-xl font-poppins text-indigo-600 dark:text-indigo-400 mb-16 max-w-4xl mx-auto leading-relaxed">
              Step into {department.name}'s exclusive digital space where memories come alive. 
              Experience our community, explore shared moments, and connect with your academic family 
              in a beautifully designed digital environment.
            </p>

            {/* Department Description */}
            {department.description && (
              <div className="mb-16 p-8 bg-transparent border-2 border-indigo-400/50 dark:border-indigo-500/50 rounded-3xl shadow-lg hover:shadow-indigo-500/15 transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/15 via-purple-100/15 to-pink-100/15 dark:from-indigo-800/15 dark:via-purple-800/15 dark:to-pink-800/15 rounded-3xl group-hover:from-indigo-100/20 group-hover:via-purple-100/20 group-hover:to-pink-100/20 dark:group-hover:from-indigo-800/20 dark:group-hover:via-purple-800/20 dark:group-hover:to-pink-800/20 transition-all duration-300"></div>
                <p className="text-indigo-800 dark:text-indigo-200 text-xl leading-relaxed relative z-10 font-light">
                  {department.description}
                </p>
              </div>
            )}

            {/* Department Info Cards */}
            <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Department Code Card */}
              <div className="p-8 bg-transparent border-2 border-purple-400/50 dark:border-purple-500/50 rounded-3xl shadow-lg hover:shadow-purple-500/15 transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/15 via-indigo-100/15 to-blue-100/15 dark:from-purple-800/15 dark:via-indigo-800/15 dark:to-blue-800/15 rounded-3xl group-hover:from-purple-100/20 group-hover:via-indigo-100/20 group-hover:to-blue-100/20 dark:group-hover:from-purple-800/20 dark:group-hover:via-indigo-800/20 dark:group-hover:to-blue-800/20 transition-all duration-300"></div>
                
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-300 via-indigo-300 to-blue-300 dark:from-purple-600 dark:via-indigo-500 dark:to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                    <Building className="h-10 w-10 text-purple-800 dark:text-purple-200 relative z-10" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-200 mb-4">Department Code</h3>
                  <div className="bg-purple-100/40 dark:bg-purple-800/40 backdrop-blur-sm border border-purple-300/40 dark:border-purple-600/40 rounded-xl p-4">
                    <p className="text-purple-900 dark:text-purple-100 font-mono text-xl font-semibold tracking-wider">{department.code}</p>
                  </div>
                </div>
              </div>

              {/* Department Slug Card */}
              <div className="p-8 bg-transparent border-2 border-pink-400/50 dark:border-pink-500/50 rounded-3xl shadow-lg hover:shadow-pink-500/15 transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100/15 via-purple-100/15 to-indigo-100/15 dark:from-pink-800/15 dark:via-purple-800/15 dark:to-indigo-800/15 rounded-3xl group-hover:from-pink-100/20 group-hover:via-purple-100/20 group-hover:to-indigo-100/20 dark:group-hover:from-pink-800/20 dark:group-hover:via-purple-800/20 dark:group-hover:to-indigo-800/20 transition-all duration-300"></div>
                
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300 dark:from-pink-600 dark:via-purple-500 dark:to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                    <span className="text-3xl relative z-10">🔗</span>
                  </div>
                  <h3 className="text-xl font-semibold text-pink-800 dark:text-pink-200 mb-4">Department Slug</h3>
                  <div className="bg-pink-100/40 dark:bg-pink-800/40 backdrop-blur-sm border border-pink-300/40 dark:border-pink-600/40 rounded-xl p-4">
                    <p className="text-pink-900 dark:text-pink-100 font-mono text-xl font-semibold tracking-wider">{department.slug}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </main>
    </div>
  );
};

export default DepartmentHomepage;
