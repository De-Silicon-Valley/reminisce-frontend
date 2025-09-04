'use client';

import React from 'react';
import { 
  Camera, 
  Calendar, 
  Users, 
  Building2, 
  Sparkles,
  ArrowRight,
  Heart,
  Star,
  Crown,
  Building
} from 'lucide-react';

// Helper function to get icon color from gradient
const getIconColor = (gradient: string) => {
  if (gradient.includes('violet')) return '#8b5cf6';
  if (gradient.includes('cyan')) return '#06b6d4';
  if (gradient.includes('emerald')) return '#10b981';
  if (gradient.includes('amber')) return '#f59e0b';
  return '#6b7280'; // fallback
};

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

  const actionCards = [
    {
      title: 'View Albums',
      description: `Browse through ${department.name}'s collection of memories and moments captured throughout the year.`,
      href: '#albums',
      icon: Camera,
      gradient: 'from-violet-400 via-purple-400 to-fuchsia-400',
      hoverGradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
      accentColor: 'text-violet-100',
      borderColor: 'border-violet-500/60',
      glowColor: 'shadow-violet-400/20',
      badge: 'Memories',
      badgeIcon: Heart
    },
    {
      title: 'Explore Events',
      description: `Relive the key moments and celebrations that made ${department.name} special this year.`,
      href: '#events',
      icon: Calendar,
      gradient: 'from-cyan-400 via-blue-400 to-indigo-400',
      hoverGradient: 'from-cyan-500 via-blue-500 to-indigo-500',
      accentColor: 'text-cyan-100',
      borderColor: 'border-cyan-500/60',
      glowColor: 'shadow-cyan-400/20',
      badge: 'Celebrations',
      badgeIcon: Sparkles
    },
    {
      title: 'Meet Our Class',
      description: `Connect with your ${department.name} classmates and discover the amazing people in our community.`,
      href: '#students',
      icon: Users,
      gradient: 'from-emerald-400 via-teal-400 to-cyan-400',
      hoverGradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      accentColor: 'text-emerald-100',
      borderColor: 'border-emerald-500/60',
      glowColor: 'shadow-emerald-400/20',
      badge: 'Community',
      badgeIcon: Star
    },
    {
      title: 'About the Department',
      description: `Learn about ${department.name}, our faculty, and the academic journey we shared together.`,
      href: '#about',
      icon: Building2,
      gradient: 'from-amber-400 via-orange-400 to-red-400',
      hoverGradient: 'from-amber-500 via-orange-500 to-red-500',
      accentColor: 'text-amber-100',
      borderColor: 'border-amber-500/60',
      glowColor: 'shadow-amber-400/20',
      badge: 'Excellence',
      badgeIcon: Crown
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section with Subtle Background */}
      <main className="relative overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-pink-50/20 to-blue-50/30 dark:from-purple-900/20 dark:via-pink-900/10 dark:to-blue-900/20 animate-watercolor-float"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
          <div className="max-w-4xl mx-auto animate-gentle-fade-in">
            {/* Welcome Illustration */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-800 dark:to-pink-800 border-4 border-white/50 dark:border-slate-700/50 flex items-center justify-center mb-8 mx-auto soft-shadow hover:scale-110 transition-transform duration-300 cursor-pointer group">
              <span className="text-6xl group-hover:animate-bounce">📖</span>
            </div>
            
            {/* Main Title - Personalized */}
            <h1 className="text-6xl font-poppins font-bold mb-4 text-slate-800 dark:text-white">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                {department.name}
              </span>
            </h1>
            
            {/* Tagline */}
            <p className="text-2xl font-poppins font-light mb-8 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Relive, Reflect, Remember
            </p>
            
            {/* Subtitle - Personalized */}
            <p className="text-lg font-poppins text-slate-500 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Step into {department.name}'s digital yearbook where memories come alive. Every photo, every event, 
              every moment captured and preserved for you to cherish forever.
            </p>

            {/* Department Description */}
            {department.description && (
              <div className="mb-12 p-6 bg-transparent border-2 border-blue-500/60 rounded-2xl soft-shadow">
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                  {department.description}
                </p>
              </div>
            )}

            {/* Department Info Card */}
            <div className="mb-12 p-8 bg-transparent border-2 border-purple-500/60 rounded-3xl soft-shadow hover:soft-shadow-hover transition-all duration-300 hover:scale-105">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Building className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">Department Code</h3>
                  <p className="text-slate-600 dark:text-slate-300 font-mono text-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-lg inline-block">{department.code}</p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/40 dark:to-purple-800/40 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-3xl">🔗</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">Department Slug</h3>
                  <p className="text-slate-600 dark:text-slate-300 font-mono text-xl bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-lg inline-block">{department.slug}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Action Cards */}
        <section className="relative z-10 px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-poppins font-semibold text-center text-slate-800 dark:text-white mb-12">
              Quick Actions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {actionCards.map((card, index) => {
                const Icon = card.icon;
                const BadgeIcon = card.badgeIcon;
                return (
                  <button
                    key={card.title}
                    onClick={() => {
                      if (card.title === 'About the Department') {
                        onTabChange('about');
                      } else if (card.title === 'View Albums') {
                        onTabChange('albums');
                      } else if (card.title === 'Explore Events') {
                        onTabChange('events');
                      } else if (card.title === 'Meet Our Class') {
                        onTabChange('students');
                      }
                    }}
                    className={`group cursor-pointer rounded-2xl p-6 bg-transparent border-2 ${card.borderColor} hover:border-opacity-80 soft-shadow transform transition-all duration-500 hover:scale-105 hover:soft-shadow-hover flex flex-col items-center justify-center min-h-[200px] animate-soft-scale relative overflow-hidden`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Badge */}
                    <div className="absolute top-3 left-3 flex items-center space-x-1 px-2 py-1 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-xs font-poppins font-medium">
                      <BadgeIcon className="w-3 h-3" />
                      <span>{card.badge}</span>
                    </div>
                    
                    {/* Main Icon */}
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-all duration-300 relative z-10">
                      <Icon className="w-12 h-12" style={{ color: getIconColor(card.gradient) }} />
                    </div>
                    
                    {/* Content */}
                    <div className="text-center relative z-10">
                      <h3 className="text-lg font-poppins font-semibold mb-2 text-center text-slate-800 dark:text-white">
                        {card.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 text-center leading-relaxed mb-3">
                        {card.description}
                      </p>
                      
                      {/* Arrow indicator */}
                      <div className="flex items-center justify-center space-x-2 text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                        <span className="text-xs font-poppins font-medium">Explore</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                    
                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 rounded-2xl ${card.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DepartmentHomepage;
