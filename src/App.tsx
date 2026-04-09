import { useEffect, useState, useRef, useCallback } from 'react';
import { 
  Menu, X, Diamond, Sparkles, Eye, Star, Zap, Briefcase, MessageSquare, Camera, Twitter,
  Users, Award, Box, CheckCircle, Brain, Bot, 
  Utensils, FileEdit, Globe, Sun,
  Heart, Asterisk, Pin, Flag, BookOpen, HelpCircle,
  LayoutGrid, Code2, Terminal
} from 'lucide-react';

import Photo1 from './assets/HC1/Photo1.webp';
import Photo2 from './assets/HC1/Photo2.webp';
import Photo3 from './assets/HC1/Photo3.webp';
import Photo4 from './assets/HC1/Photo4.webp';
import Photo5 from './assets/HC1/Photo5.webp';
import Photo6 from './assets/HC1/Photo6.webp';
import Photo7 from './assets/HC1/Photo7.webp';
import Photo8 from './assets/HC1/Photo8.webp';
import Photo9 from './assets/HC1/Photo9.webp';
import Photo10 from './assets/HC1/Photo10.webp';

import HC1 from './assets/HC2/Photo1.webp';
import HC2 from './assets/HC2/Photo2.webp';
import HC3 from './assets/HC2/Photo3.webp';
import HC4 from './assets/HC2/Photo4.webp';
import HC5 from './assets/HC2/Photo5.webp';
import HC6 from './assets/HC2/Photo6.webp';
import HC7 from './assets/HC2/Photo7.webp';
import HC8 from './assets/HC2/Photo8.webp';
import HC9 from './assets/HC2/Photo9.webp';
import HC10 from './assets/HC2/Photo10.webp';

interface CarouselSlide {
  src?: string;           // swap in real image URLs here
  placeholder?: string;   // label shown until real photos drop
}

interface EditionConfig {
  id: string;
  label: string;
  accent: string;         // CSS color value
  accentClass: string;    // Tailwind text color
  borderClass: string;    // Tailwind border color
  slides: CarouselSlide[];
}

// Navigation Component
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'SCHEDULE', href: '#schedule' },
    { name: 'VENUE', href: '#about' },
    { name: 'TEAM', href: '#team' },
    { name: 'REGISTER', href: '#register' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="w-full px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-xl font-display tracking-wider">
          <span className="bg-gradient-to-r from-peach via-lavender to-teal bg-clip-text text-transparent">
            HACK&CHILL 3.0
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-teal transition-colors tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy/95 backdrop-blur-md border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-teal transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen bg-navy overflow-hidden flex items-center justify-center">
      {/* Decorative Elements */}
      <div className="absolute left-8 top-1/3 flex flex-col gap-4">
        <Diamond className="w-6 h-6 text-teal fill-teal animate-float" />
        <Diamond className="w-5 h-5 text-teal fill-teal animate-float-slow" style={{ animationDelay: '0.5s' }} />
        <Diamond className="w-4 h-4 text-teal fill-teal animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Peach Star Top Right */}
      <div className="absolute top-20 right-0">
        <svg width="200" height="200" viewBox="0 0 200 200" className="animate-float-slow">
          <polygon
            points="100,10 120,70 180,70 130,110 150,170 100,130 50,170 70,110 20,70 80,70"
            fill="#F4A07A"
          />
        </svg>
      </div>

      {/* Teal Asterisk Right */}
      <div className="absolute right-12 top-1/2">
        <Asterisk className="w-12 h-12 text-teal animate-spin-slow" />
      </div>

      {/* Dark Star Bottom Right */}
      <div className="absolute bottom-20 right-20">
        <Star className="w-16 h-16 text-white/10 fill-white/10" />
      </div>

      {/* Eye Icon Left */}
      <div className="absolute left-4 bottom-1/3">
        <Eye className="w-8 h-8 text-lavender/30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        {/* Mascot Illustration */}
        <div className="flex justify-center mb-8">
          <div className="relative flex items-center">
            {/* Pink Blob */}
            <div className="w-16 h-24 bg-gradient-to-b from-pink-400 to-pink-500 rounded-full transform -rotate-12" />
            {/* Sun */}
            <div className="mx-2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
              <Sun className="w-8 h-8 text-yellow-600" />
            </div>
            {/* Yellow Blob */}
            <div className="w-16 h-24 bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-full transform rotate-12" />
          </div>
        </div>

        {/* Giant Text */}
        <div className="relative inline-block">
          <h1 className="font-display text-[12vw] md:text-[10vw] lg:text-[8vw] leading-none text-white tracking-wider">
            HACK
          </h1>
          {/* 3.0 Badge */}
          <div className="absolute -right-4 md:-right-12 top-0">
            <div className="relative">
              <svg width="80" height="80" viewBox="0 0 80 80" className="animate-pulse-glow">
                <polygon
                  points="40,5 50,25 75,25 55,40 65,65 40,50 15,65 25,40 5,25 30,25"
                  fill="#F4A07A"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center font-display text-2xl text-navy">
                3.0
              </span>
            </div>
          </div>
        </div>

        <h1 className="font-display text-[12vw] md:text-[10vw] lg:text-[8vw] leading-none text-white tracking-wider">
          &CHILL
        </h1>

        {/* Tagline */}
        <p className="mt-6 text-teal font-mono text-lg md:text-xl tracking-[0.3em]">
          BUILD. CHILL. REPEAT.
        </p>

        {/* Date */}
        <p className="mt-4 text-white font-medium text-lg md:text-xl tracking-wider">
          23–25 APRIL · ADGIPS, DELHI
        </p>

        {/* Sub Info */}
        <p className="mt-2 text-white/50 text-sm tracking-widest">
          3RD EDITION · GDGC ADGIPS · FREE ENTRY
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#register"
            className="px-8 py-4 bg-peach text-navy font-bold text-lg hover:bg-peach/90 transition-colors"
          >
            REGISTER NOW
          </a>
          <a
            href="#about"
            className="px-8 py-4 border-2 border-teal text-teal font-bold text-lg hover:bg-teal/10 transition-colors"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Dark Navy */}
      <div className="w-full md:w-1/2 bg-navy p-8 md:p-16 flex flex-col justify-center relative">
        <span className="text-teal font-mono text-sm tracking-[0.3em] mb-4">ABOUT</span>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-none">
          WHAT IS
          <br />
          HACK&C
          <br />
          HILL?
        </h2>
        <p className="mt-8 text-white/70 text-lg max-w-md leading-relaxed">
          A 36-hour AI-heavy hackathon organized by GDGC ADGIPS, Delhi. Build real projects. 
          Connect with real people. Win real prizes. Free entry. Open to all students.
        </p>

        {/* Peach Star Bottom Left */}
        <div className="absolute bottom-8 left-8">
          <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-80">
            <polygon
              points="60,10 70,45 110,45 78,68 90,105 60,82 30,105 42,68 10,45 50,45"
              fill="none"
              stroke="#F4A07A"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>

      {/* Right Side - Teal */}
      <div className="w-full md:w-1/2 bg-teal p-8 md:p-16 flex items-center justify-center relative">
        {/* Event Details Card */}
        <div className="bg-dark-card border-4 border-peach p-8 w-full max-w-md relative">
          {/* Eye Icon */}
          <div className="absolute -top-6 -right-6">
            <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center">
              <Eye className="w-6 h-6 text-navy" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-white/20 pb-4">
              <span className="text-white/70 font-mono">EDITION:</span>
              <span className="text-peach font-display text-2xl">3.0</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/20 pb-4">
              <span className="text-white/70 font-mono">DATE:</span>
              <span className="text-white font-display text-xl">23–25 APRIL</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/20 pb-4">
              <span className="text-white/70 font-mono">VENUE:</span>
              <span className="text-white font-display text-xl">ADGIPS, DELHI</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/20 pb-4">
              <span className="text-white/70 font-mono">TEAM SIZE:</span>
              <span className="text-white font-display text-xl">2–4</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-white/70 font-mono">ENTRY:</span>
              <span className="text-teal font-display text-2xl font-bold">FREE</span>
            </div>
          </div>
        </div>

        {/* Lavender Triangle */}
        <div className="absolute bottom-8 right-8">
          <svg width="60" height="60" viewBox="0 0 60 60">
            <polygon points="30,5 55,55 5,55" fill="#C9A0F5" />
          </svg>
        </div>
      </div>
    </section>
  );
}

// Live Stats Bar
function StatsBar() {
  const stats = [
    { number: '500+', label: 'REGISTRATIONS', bg: 'bg-peach', text: 'text-navy' },
    { number: '₹1.0L+', label: 'PRIZE POOL', bg: 'bg-navy', text: 'text-white', hasDiamonds: true },
    { number: '36', label: 'HRS OF HACKING', bg: 'bg-navy', text: 'text-white', subNumber: 'HRS' },
    { number: '4', label: 'TRACKS TO COMPETE', bg: 'bg-teal', text: 'text-navy', subNumber: 'TRACKS' },
  ];

  return (
    <section className="bg-navy py-0 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...stats, ...stats, ...stats, ...stats].map((stat, idx) => (
          <div
            key={idx}
            className={`${stat.bg} ${stat.text} px-8 md:px-16 py-6 md:py-8 flex items-center gap-4 md:gap-8 shrink-0`}
          >
            {stat.hasDiamonds && (
              <>
                <Sparkles className="w-6 h-6 text-peach" />
                <Diamond className="w-4 h-4 text-teal fill-teal" />
              </>
            )}
            <div className="text-center">
              <div className="font-display text-4xl md:text-6xl lg:text-7xl">
                {stat.number}
              </div>
              <div className="font-mono text-xs md:text-sm tracking-[0.2em]">
                {stat.label}
              </div>
            </div>
            {stat.hasDiamonds && (
              <>
                <Diamond className="w-4 h-4 text-peach fill-peach" />
                <Sparkles className="w-6 h-6 text-teal" />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// Tracks Section
function TracksSection() {
  const tracks = [
    {
      title: 'OPEN INNOVATION',
      label: 'GENERAL TRACK',
      bg: 'bg-peach',
      text: 'text-navy',
      icon: <Star className="w-6 h-6" />,
      description: 'Build anything that breaks the sound barrier of conventional digital architecture.',
    },
    {
      title: 'AI TRACK 01',
      label: 'AI-FOCUSED',
      bg: 'bg-dark-card',
      text: 'text-white',
      border: 'border-b-4 border-teal',
      icon: <Eye className="w-6 h-6 text-teal" />,
      description: 'Generative rhythm synthesis and automated melody composition engines.',
    },
    {
      title: 'AI TRACK 02',
      label: 'AI-FOCUSED',
      bg: 'bg-dark-card',
      text: 'text-white',
      border: 'border-b-4 border-teal',
      icon: <Eye className="w-6 h-6 text-teal" />,
      description: 'Neural network architectures for real-time acoustic spatial mapping.',
    },
    {
      title: 'AI TRACK 03',
      label: 'AI-FOCUSED',
      bg: 'bg-dark-card',
      text: 'text-white',
      border: 'border-b-4 border-teal',
      icon: <Eye className="w-6 h-6 text-teal" />,
      description: 'Large Language Models optimized for festival crowd flow and logistics.',
    },
  ];

  return (
    <section id="tracks" className="bg-navy py-20 px-6 md:px-12 lg:px-20 relative">
      {/* Decorative Gear */}
      <div className="absolute top-8 right-8 md:right-20">
        <svg width="80" height="80" viewBox="0 0 80 80" className="text-teal animate-spin-slow">
          <path
            d="M40 5 L45 15 L55 10 L60 20 L70 18 L72 28 L80 32 L75 40 L80 48 L72 52 L70 62 L60 60 L55 70 L45 65 L40 75 L35 65 L25 70 L20 60 L10 62 L8 52 L0 48 L5 40 L0 32 L8 28 L10 18 L20 20 L25 10 L35 15 Z"
            fill="currentColor"
          />
          <circle cx="40" cy="40" r="15" fill="#0D1117" />
        </svg>
      </div>

      {/* Header */}
      <div className="mb-12">
        <span className="text-teal font-mono text-sm tracking-[0.3em]">THE</span>
        <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-white">TRACKS</h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tracks.map((track, idx) => (
          <div
            key={idx}
            className={`${track.bg} ${track.text} ${track.border || ''} p-8 hover-lift cursor-pointer group relative overflow-hidden`}
          >
            <div className="flex justify-between items-start mb-4">
              <span className="font-mono text-xs tracking-wider opacity-70">{track.label}</span>
              <span className="group-hover:scale-110 transition-transform">{track.icon}</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl mb-4">{track.title}</h3>
            <p className={`text-sm ${track.bg === 'bg-peach' ? 'text-navy/70' : 'text-white/60'} leading-relaxed`}>
              {track.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Timeline Section
function TimelineSection() {
  const days = [
    {
      day: 'DAY 01',
      date: 'APR 23',
      bg: 'bg-peach',
      text: 'text-navy',
      events: ['OPENING CEREMONY', 'TEAM ONBOARDING', 'HACKING BEGINS'],
    },
    {
      day: 'DAY 02',
      date: 'APR 24',
      bg: 'bg-teal',
      text: 'text-navy',
      events: ['DEVELOPMENT PHASE', 'MENTOR CHECK-INS', 'MID EVALUATIONS'],
    },
    {
      day: 'DAY 03',
      date: 'APR 25',
      bg: 'bg-lavender',
      text: 'text-navy',
      events: ['FINAL SUBMISSIONS', 'TEAMS SHORTLISTED', 'PRESENTATIONS & JUDGING', 'CLOSING CEREMONY'],
    },
  ];

  return (
    <section id="schedule" className="bg-navy py-20 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-white">
          SCHED<span className="text-peach">ULE</span>
        </h2>
        <p className="font-mono text-sm tracking-[0.3em] text-white/60 mt-4">
          HACK&CHILL 3.0 / BEYOND THE GRID
        </p>
      </div>

      {/* Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {days.map((day, idx) => (
          <div
            key={idx}
            className={`${day.bg} ${day.text} p-8 min-h-[500px] flex flex-col relative`}
          >
            <div className="mb-8">
              <h3 className="font-display text-4xl md:text-5xl">{day.day}</h3>
              <p className="font-mono text-sm tracking-wider opacity-70 mt-2">{day.date}</p>
            </div>

            <div className="space-y-6 flex-1">
              {day.events.map((event, eidx) => (
                <div key={eidx} className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 shrink-0 mt-1" />
                  <span className="font-medium text-lg leading-tight">{event}</span>
                </div>
              ))}
            </div>

            {/* Eye Icon at Bottom */}
            <div className="mt-auto pt-8 flex justify-center">
              <Eye className="w-8 h-8 opacity-50" />
            </div>
          </div>
        ))}
      </div>

      {/* Build the Unbuildable Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="font-display text-4xl md:text-5xl text-white mb-2">
            BUILD THE
          </h3>
          <h3 className="font-display text-4xl md:text-5xl text-peach mb-6">
            UNBUILDABLE.
          </h3>
          <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
            Hack&Chill isn't just a competition. It's an architecture of sonic possibility. 
            Join 500+ developers, designers, and musical mad scientists as we redefine what 
            it means to build in 48 hours. No limits. No rules. Just pure creation.
          </p>
          <a
            href="https://hackandchill--3.devfolio.co/overview"
            className="inline-block px-8 py-4 bg-peach text-navy font-bold text-lg hover:bg-peach/90 transition-colors"
          >
            REGISTER NOW
          </a>
        </div>
        <div className="relative flex justify-center">
          {/* Lavender Lightning Bolt Icon */}
          <div className="w-16 h-16 bg-lavender flex items-center justify-center">
            <Zap className="w-8 h-8 text-navy" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Prizes Section
function PrizesSection() {
  const generalPrizes = [
    { place: '1ST', label: 'WINNER CASH', amount: 'Revealing Soon' },
    { place: '2ND', label: 'RUNNER UP', amount: 'Revealing Soon' },
    { place: '3RD', label: 'SECOND RUNNER', amount: 'Revealing Soon' },
  ];

  const aiTracks = [
    { track: 'AI TRACK 01', winners: '3 WINNERS', prize: 'NVIDIA H100 CREDITS + API ACCESS', icon: <Bot className="w-8 h-8" /> },
    { track: 'AI TRACK 02', winners: '3 WINNERS', prize: 'PREMIUM MODEL SUBSCRIPTIONS', icon: <Zap className="w-8 h-8" /> },
    { track: 'AI TRACK 03', winners: '3 WINNERS', prize: 'ACCELERATOR INTERVIEW SLOTS', icon: <Globe className="w-8 h-8" /> },
  ];

  return (
    <section id="prizes" className="bg-navy py-20 px-6 md:px-12 lg:px-20 relative">
      {/* Peach Star */}
      <div className="absolute top-8 right-8 md:right-20">
        <svg width="80" height="80" viewBox="0 0 80 80" className="text-peach fill-peach">
          <polygon points="40,5 50,25 75,25 55,40 65,65 40,50 15,65 25,40 5,25 30,25" />
        </svg>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h2 className="font-display text-6xl md:text-8xl text-white">
          PRIZES
        </h2>
        <h2 className="font-display text-6xl md:text-8xl text-peach">
          & PERKS
        </h2>
      </div>

      {/* Prize Pool Banner */}
      <div className="bg-orange py-4 px-8 mb-12 flex items-center justify-center gap-4">
        <Star className="w-6 h-6 text-navy fill-navy" />
        <span className="font-display text-2xl md:text-4xl text-navy">₹1 LAKH+ PRIZE POOL</span>
        <Star className="w-6 h-6 text-navy fill-navy" />
      </div>

      {/* General Track */}
      <div className="mb-4">
        <span className="text-teal font-mono text-sm tracking-[0.3em] border-b-2 border-teal pb-1">GENERAL TRACK</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {generalPrizes.map((prize, idx) => (
          <div
            key={idx}
            className="bg-dark-card border-4 border-peach p-8 text-center hover-lift"
          >
            <h3 className="font-display text-5xl text-peach mb-2">{prize.place}</h3>
            <p className="text-white/60 text-sm mb-4">{prize.label}</p>
            <p className="font-display text-4xl text-white">{prize.amount}</p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t-2 border-teal mb-12" />

      {/* AI Tracks */}
      <div className="mb-4">
        <span className="text-peach font-mono text-sm tracking-[0.3em] border-b-2 border-peach pb-1">AI TRACKS</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {aiTracks.map((track, idx) => (
          <div
            key={idx}
            className="bg-dark-card border-4 border-teal p-8 text-center hover-lift"
          >
            <div className="text-teal mb-4 flex justify-center">{track.icon}</div>
            <h3 className="font-display text-2xl text-teal mb-2">{track.track}</h3>
            <p className="text-white font-medium mb-2">{track.winners}</p>
            <p className="text-white/60 text-sm">{track.prize}</p>
          </div>
        ))}
      </div>

      {/* Perks Bar */}
      <div className="bg-lavender py-6 px-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <div className="flex items-center gap-3">
          <Box className="w-6 h-6 text-navy" />
          <span className="font-display text-xl text-navy">SWAG KITS</span>
        </div>
        <div className="flex items-center gap-3">
          <Award className="w-6 h-6 text-navy" />
          <span className="font-display text-xl text-navy">CERTIFICATES</span>
        </div>
        <div className="flex items-center gap-3">
          <Users className="w-6 h-6 text-navy" />
          <span className="font-display text-xl text-navy">NETWORKING</span>
        </div>
      </div>
    </section>
  );
}

// Sponsors Section
function SponsorsSection() {
  const sponsors = [
    { name: 'RED BULL', icon: <Zap className="w-10 h-10" />, bg: 'bg-peach', text: 'text-navy' },
    { name: "McDONALD'S", icon: <Utensils className="w-10 h-10" />, bg: 'bg-teal', text: 'text-navy' },
    { name: 'NOTION', icon: <FileEdit className="w-10 h-10" />, bg: 'bg-lavender', text: 'text-navy' },
    { name: 'ROBO', icon: <Bot className="w-10 h-10" />, bg: 'bg-peach', text: 'text-navy' },
    { name: 'CERTIFIX', icon: <CheckCircle className="w-10 h-10" />, bg: 'bg-teal', text: 'text-navy' },
    { name: 'CYRENE AI', icon: <Brain className="w-10 h-10" />, bg: 'bg-lavender', text: 'text-navy' },
  ];

  const partners = [
    { name: 'LOCAL_DEV', icon: <Users className="w-5 h-5" />, border: 'border-peach' },
    { name: 'OPEN_SRC', icon: <Code2 className="w-5 h-5" />, border: 'border-teal' },
    { name: 'SHELL_CLUB', icon: <Terminal className="w-5 h-5" />, border: 'border-lavender' },
  ];

  return (
    <section id="sponsors" className="bg-navy py-20 px-6 md:px-12 lg:px-20 relative">
      {/* Eye Icon */}
      <div className="absolute top-8 right-8 md:right-20">
        <div className="w-16 h-16 bg-peach rounded-full flex items-center justify-center">
          <Eye className="w-8 h-8 text-navy" />
        </div>
      </div>

      {/* Header */}
      <div className="mb-12">
        <span className="text-teal font-mono text-sm tracking-[0.3em]">OUR</span>
        <h2 className="font-display text-6xl md:text-8xl text-white">SPONSORS</h2>
      </div>

      {/* Sponsors Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
        {sponsors.map((sponsor, idx) => (
          <div
            key={idx}
            className={`${sponsor.bg} ${sponsor.text} p-8 flex flex-col items-center justify-center gap-4 hover-lift cursor-pointer aspect-video`}
          >
            {sponsor.icon}
            <span className="font-display text-xl">{sponsor.name}</span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t-2 border-white/20 mb-12" />

      {/* Community Partners */}
      <div className="text-center mb-8">
        <span className="text-white/60 font-mono text-sm tracking-[0.3em]">COMMUNITY PARTNERS</span>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {partners.map((partner, idx) => (
          <div
            key={idx}
            className={`bg-transparent border-2 ${partner.border} px-8 py-4 flex items-center gap-3`}
          >
            <span className="text-white/60">{partner.icon}</span>
            <span className="font-mono text-white text-sm">{partner.name}</span>
          </div>
        ))}
      </div>

      {/* Dark Star */}
      <div className="absolute bottom-8 right-8">
        <Star className="w-20 h-20 text-white/5 fill-white/5" />
      </div>
    </section>
  );
}

// Mentors & Judges Section
function MentorsSection() {
  return (
    <section id="mentors" className="bg-navy py-20 px-6 md:px-12 lg:px-20 relative">
      {/* Purple Star */}
      <div className="absolute top-8 right-8 md:right-20">
        <svg width="80" height="80" viewBox="0 0 80 80" className="text-lavender fill-lavender">
          <polygon points="40,5 50,25 75,25 55,40 65,65 40,50 15,65 25,40 5,25 30,25" />
        </svg>
      </div>

      {/* Left Sidebar Icons */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6">
        <LayoutGrid className="w-5 h-5 text-teal" />
        <Pin className="w-5 h-5 text-peach" />
        <Flag className="w-5 h-5 text-lavender" />
        <BookOpen className="w-5 h-5 text-teal" />
        <HelpCircle className="w-5 h-5 text-peach" />
      </div>

      {/* Header */}
      <div className="mb-12 lg:ml-12">
        <h2 className="font-display text-6xl md:text-8xl text-white">
          MENTORS
        </h2>
        <h2 className="font-display text-6xl md:text-8xl text-teal">
          & JUDGES
        </h2>
      </div>

      {/* Revealing Soon Card */}
      <div className="bg-dark-card border-4 border-peach p-12 md:p-16 text-center max-w-4xl mx-auto lg:ml-12 relative">
        {/* Small Stars */}
        <Star className="absolute top-4 left-4 w-4 h-4 text-lavender fill-lavender" />
        <Star className="absolute bottom-4 right-4 w-4 h-4 text-teal fill-teal" />

        <div className="flex justify-center mb-6">
          <Eye className="w-16 h-16 text-white" />
        </div>
        <h3 className="font-display text-4xl md:text-6xl text-teal mb-4">REVEALING SOON</h3>
        <p className="text-white/60 text-lg max-w-md mx-auto">
          OUR MENTOR AND JUDGE LINEUP WILL BE ANNOUNCED SHORTLY. STAY TUNED.
        </p>
      </div>

      {/* Placeholder Avatars */}
      <div className="flex justify-center gap-4 md:gap-8 mt-12 lg:ml-12">
        {[
          { color: 'bg-amber-800' },
          { color: 'bg-teal' },
          { color: 'bg-lavender' },
          { color: 'bg-amber-700' },
          { color: 'bg-teal' },
        ].map((avatar, idx) => (
          <div
            key={idx}
            className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${avatar.color} flex items-center justify-center border-4 border-white/20`}
          >
            <span className="font-display text-2xl text-white">?</span>
          </div>
        ))}
      </div>

      <p className="text-center text-white/40 font-mono text-sm tracking-[0.3em] mt-6 lg:ml-12">
        STAY TUNED
      </p>
    </section>
  );
}

// Data 
const EDITIONS: EditionConfig[] = [
  {
    id: "hnc1",
    label: "HNC 1.0",
    accent: "#00E5BE",
    accentClass: "text-teal",
    borderClass: "border-teal",
    slides: [
      { src: Photo1, placeholder: "PHOTO 01" },
      { src: Photo2, placeholder: "PHOTO 02" },
      { src: Photo3, placeholder: "PHOTO 03" },
      { src: Photo4, placeholder: "PHOTO 04" },
      { src: Photo5, placeholder: "PHOTO 05" },
      { src: Photo6, placeholder: "PHOTO 06" },
      { src: Photo7, placeholder: "PHOTO 07" },
      { src: Photo8, placeholder: "PHOTO 08" },
      { src: Photo9, placeholder: "PHOTO 09" },
      { src: Photo10, placeholder: "PHOTO 10" },

    ],
  },
  {
    id: "hnc2",
    label: "HNC 2.0",
    accent: "#F4A07A",
    accentClass: "text-peach",
    borderClass: "border-peach",
    slides: [
      { src: HC1, placeholder: "PHOTO 01" },
      { src: HC2, placeholder: "PHOTO 02" },
      { src: HC3, placeholder: "PHOTO 03" },
      { src: HC4, placeholder: "PHOTO 04" },
      { src: HC5, placeholder: "PHOTO 05" },
      { src: HC6, placeholder: "PHOTO 06" },
      { src: HC7, placeholder: "PHOTO 07" },
      { src: HC8, placeholder: "PHOTO 08" },
      { src: HC9, placeholder: "PHOTO 09" },
      { src: HC10, placeholder: "PHOTO 10" },
    ],
  },
];

const AUTOPLAY_MS = 2000;

// ─── Single Edition Carousel ──────────────────────────────────────────────────
function EditionCarousel({ edition }: { edition: EditionConfig }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const total = edition.slides.length;

//   useEffect(() => {
//   const nextIndex = (current + 1) % total;

//   const nextImg = new Image();
//   nextImg.src = edition.slides[nextIndex].src!;
// }, [current, total, edition.slides]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    // Reset + re-trigger progress bar CSS animation
    if (progressRef.current) {
      progressRef.current.style.transition = "none";
      progressRef.current.style.width = "0%";
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          if (progressRef.current) {
            progressRef.current.style.transition = `width ${AUTOPLAY_MS}ms linear`;
            progressRef.current.style.width = "100%";
          }
        })
      );
    }

    timerRef.current = setInterval(() => {
      if (!paused) setCurrent((c) => (c + 1) % total);
    }, AUTOPLAY_MS);
  }, [paused, total]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [current, paused, resetTimer]);

  const go = (index: number) => {
    setCurrent((index + total) % total);
  };

  return (
    <div
      className={`relative aspect-square overflow-hidden border-2 ${edition.borderClass} group`}
      style={{ background: "#0D1117" }}
      onMouseEnter={() => {
        setPaused(true);
        if (timerRef.current) clearInterval(timerRef.current);
        if (progressRef.current) {
          const w = progressRef.current.getBoundingClientRect().width;
          const parent = progressRef.current.parentElement!.getBoundingClientRect().width;
          progressRef.current.style.transition = "none";
          progressRef.current.style.width = `${(w / parent) * 100}%`;
        }
      }}
      onMouseLeave={() => setPaused(false)}
    >

      {/* ── Slides ── */}
      <div
        className="flex w-full h-full transition-transform duration-500"
        style={{
          transform: `translateX(-${current * 100}%)`,
          transitionTimingFunction: "cubic-bezier(0.77,0,0.18,1)",
        }}
      >
        {edition.slides.map((slide, i) => (
          <div key={i} className="relative min-w-full h-full flex items-center justify-center shrink-0">
            {slide.src ? (
              <img
                src={slide.src}
                loading="lazy"
                decoding="async"
                alt={`${edition.label} – ${slide.placeholder ?? i + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              /* placeholder until real photos drop */
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-30"
                style={{
                  background:
                    edition.id === "hnc1"
                      ? "linear-gradient(135deg,#0a2e28,#00E5BE18)"
                      : "linear-gradient(135deg,#2e1a0a,#F4A07A18)",
                }}
              >
                {/* camera icon */}
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="7" width="20" height="14" rx="1" />
                  <circle cx="12" cy="14" r="3" />
                  <path d="M9 7l1.5-3h3L15 7" />
                </svg>
                <span className="font-mono text-xs tracking-[0.2em] text-white">
                  {slide.placeholder}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── Dark gradient overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top,rgba(13,17,23,.92) 0%,rgba(13,17,23,.25) 45%,transparent 100%)" }}
      />

      {/* ── Slide counter top-left ── */}
      <span className="absolute top-4 left-4 z-20 font-mono text-[10px] tracking-[0.15em] text-white/50">
        {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>

      {/* ── Edition badge top-right ── */}
      <span className="absolute top-4 right-4 z-20 font-mono text-[9px] tracking-[0.2em] px-3 py-1 rounded-full bg-navy/80 border border-white/15 backdrop-blur-sm">
        {edition.label}
      </span>

      {/* ── Prev / Next arrows ── */}
      <button
        onClick={() => go(current - 1)}
        className="arrow-btn absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center bg-navy/70 border border-white/15 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white/15 rounded-full"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15,18 9,12 15,6" />
        </svg>
      </button>
      <button
        onClick={() => go(current + 1)}
        className="arrow-btn absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center bg-navy/70 border border-white/15 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white/15 rounded-full"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9,18 15,12 9,6" />
        </svg>
      </button>

      {/* ── Bottom label + dots ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between px-6 pb-6">
        <h3
          className="font-display text-[40px] leading-none tracking-wide"
          style={{ color: edition.accent }}
        >
          {edition.label}
        </h3>

        {/* Dot indicators */}
        <div className="flex items-center gap-1.5">
          {edition.slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className="h-1.5 rounded-sm transition-all duration-300"
              style={{
                width: i === current ? "18px" : "6px",
                background: i === current ? edition.accent : "rgba(255,255,255,0.3)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Progress bar (bottom edge) ── */}
      <div
        ref={progressRef}
        className="absolute bottom-0 left-0 h-0.5 z-30"
        style={{ width: "0%", background: edition.accent }}
      />
    </div>
  );
}

// Past Editions Section
function PastEditionsSection() {
  return (
    <section
      id="editions"
      className="bg-navy py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden"
    >
      {/* Teal star */}
      <div className="absolute top-8 right-8 md:right-20">
        <svg width="60" height="60" viewBox="0 0 60 60" className="fill-teal">
          <polygon points="30,5 37,20 55,20 40,30 47,47 30,37 13,47 20,30 5,20 23,20" />
        </svg>
      </div>

      {/* Peach diamond */}
      <div className="absolute top-20 left-8">
        <Diamond className="w-6 h-6 text-peach fill-peach" />
      </div>

      {/* Header */}
      <div className="mb-12">
        <span className="text-white/40 font-mono text-sm tracking-[0.3em]">PAST</span>
        <h2 className="font-display text-6xl md:text-8xl text-white">EDITIONS</h2>
      </div>

      {/* Carousels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl">
        {EDITIONS.map((ed) => (
          <EditionCarousel key={ed.id} edition={ed} />
        ))}
      </div>

      {/* Bottom decorations */}
      <div className="absolute bottom-8 left-8">
        <Star className="w-24 h-24 text-white/5 fill-white/5" />
      </div>
      <div className="absolute bottom-20 right-1/4">
        <Diamond className="w-4 h-4 text-lavender/30" />
      </div>
    </section>
  );
}


// Team Section
function TeamSection() {
  const teamMembers = [
    {
      name: 'MEHAK AGARWAL',
      role: 'PRESIDENT',
      photo: '/team_member_1.jpeg',
      accent: 'border-peach',
      accentText: 'text-peach',
      accentBg: 'bg-peach',
      socials: 'https://www.linkedin.com/in/mehak-agarwal-605b75284/',
    },
    {
      name: 'ROHIT CHOUDHARY',
      role: 'VICE PRESIDENT',
      photo: '/team_member_2.jpeg',
      accent: 'border-teal',
      accentText: 'text-teal',
      accentBg: 'bg-teal',
      socials: 'https://www.linkedin.com/in/rohit-choudhary786/',
    },
    {
      name: 'AMAN SHARMA',
      role: 'GENERAL SECRETARY',
      photo: '/team_member_3.jpg',
      accent: 'border-lavender',
      accentText: 'text-lavender',
      accentBg: 'bg-lavender',
      socials: 'https://www.linkedin.com/in/aman-sharma-4a3166284/',
    },
    {
      name: 'ARNAV SINGLA',
      role: 'MANAGEMENT LEAD',
      photo: '/team_member_4.jpeg',
      accent: 'border-peach',
      accentText: 'text-peach',
      accentBg: 'bg-peach',
      socials: 'https://www.linkedin.com/in/arnav-singla-5683432a3/',
    },
    {
      name: 'SOMIL CHOUDHARY',
      role: 'TECH LEAD',
      photo: '/team_member_5.jpeg',
      accent: 'border-teal',
      accentText: 'text-teal',
      accentBg: 'bg-teal',
      socials: 'https://www.linkedin.com/in/somil-choudhary',
    },
    {
      name: 'MRIDUL CHOUDHARY',
      role: 'AIML LEAD',
      photo: '/team_member_6.jpeg',
      accent: 'border-lavender',
      accentText: 'text-lavender',
      accentBg: 'bg-lavender',
      socials: 'https://www.linkedin.com/in/mridulchdry/',
    },
    {
      name: 'GAUTAM SHARMA',
      role: 'CYBERSECURITY LEAD',
      photo: '/team_member_7.jpeg',
      accent: 'border-peach',
      accentText: 'text-peach',
      accentBg: 'bg-peach',
      socials: 'https://www.linkedin.com/in/gautam-s-3a81b0266/',
    },
    {
      name: 'ABHITHA',
      role: 'CONTENT LEAD',
      photo: '/team_member_8.jpeg',
      accent: 'border-teal',
      accentText: 'text-teal',
      accentBg: 'bg-teal',
      socials: 'https://www.linkedin.com/in/abhitha-nandy-9066a02b7/',
    },
  ];

  return (
    <section id="team" className="bg-navy py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Decorative Teal Star */}
      <div className="absolute top-8 right-8 md:right-20">
        <svg width="80" height="80" viewBox="0 0 80 80" className="fill-teal opacity-80">
          <polygon points="40,5 50,25 75,25 55,40 65,65 40,50 15,65 25,40 5,25 30,25" />
        </svg>
      </div>

      {/* Decorative Peach Diamond Left */}
      <div className="absolute top-16 left-8">
        <Diamond className="w-6 h-6 text-peach fill-peach animate-float" />
      </div>

      {/* Left Sidebar Icons */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6">
        <Sparkles className="w-5 h-5 text-teal" />
        <Diamond className="w-5 h-5 text-lavender fill-lavender" />
        <Star className="w-5 h-5 text-peach fill-peach" />
      </div>

      {/* Header */}
      <div className="mb-4 lg:ml-12">
        <span className="text-teal font-mono text-sm tracking-[0.3em]">GDGC ADGIPS</span>
        <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-white leading-none">
          MEET THE
        </h2>
        <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-peach leading-none">
          TEAM
        </h2>
      </div>

      {/* Subtitle */}
      <p className="text-white/50 font-mono text-sm tracking-[0.2em] mb-16 lg:ml-12">
        THE MINDS BEHIND HACK&amp;CHILL 3.0
      </p>

      {/* Team Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:ml-12">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className={`bg-dark-card border-2 ${member.accent} group hover-lift relative overflow-hidden cursor-pointer`}
          >
            {/* Number badge */}
            <div className="absolute top-3 left-3 z-10">
              <span className={`font-mono text-[10px] tracking-[0.15em] ${member.accentText} opacity-70`}>
                {String(idx + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Social Link Badge */}
            <a
              href={member.socials}
              target="_blank"
              rel="noopener noreferrer"
              className={`absolute top-3 right-3 z-10 w-7 h-7 ${member.accentBg} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110`}
              onClick={e => e.stopPropagation()}
            >
              <svg className="w-3.5 h-3.5 text-navy" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>

            {/* Profile Photo */}
            <div className="relative overflow-hidden aspect-square">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to top, rgba(13,17,23,0.85) 0%, transparent 60%)' }}
              />
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className={`font-display text-xl md:text-2xl ${member.accentText} leading-none tracking-wide`}>
                {member.name}
              </h3>
              <p className="font-mono text-white/50 text-[10px] tracking-[0.2em] mt-1">
                {member.role}
              </p>
              {/* Bottom accent bar */}
              <div className={`mt-3 h-0.5 w-0 group-hover:w-full transition-all duration-500 ${member.accentBg}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom decorative row */}
      <div className="mt-16 lg:ml-12 flex items-center gap-4">
        <div className="h-px flex-1 bg-white/10" />
        <span className="font-mono text-white/30 text-xs tracking-[0.3em]">GDGC ADGIPS · ORGANIZED WITH ♥</span>
        <div className="h-px flex-1 bg-white/10" />
      </div>

      {/* Bottom Stars */}
      <div className="absolute bottom-8 left-8">
        <Star className="w-20 h-20 text-white/5 fill-white/5" />
      </div>
      <div className="absolute bottom-16 right-1/4">
        <Diamond className="w-4 h-4 text-lavender/20 fill-lavender/20" />
      </div>
    </section>
  );
}

// Register CTA Section
function RegisterSection() {
  return (
    <section id="register" className="bg-orange py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden min-h-[600px] flex items-center justify-center">
      {/* Teal Star Top Left */}
      <div className="absolute top-8 left-8">
        <svg width="80" height="80" viewBox="0 0 80 80" className="text-teal fill-teal animate-float">
          <polygon points="40,5 50,25 75,25 55,40 65,65 40,50 15,65 25,40 5,25 30,25" />
        </svg>
      </div>

      {/* Peach Star */}
      <div className="absolute top-1/4 right-8">
        <Star className="w-12 h-12 text-peach fill-peach animate-float-slow" />
      </div>

      {/* Lavender Star Bottom Right */}
      <div className="absolute bottom-8 right-8">
        <svg width="100" height="100" viewBox="0 0 100 100" className="text-lavender fill-lavender animate-float">
          <polygon points="50,10 60,35 90,35 65,55 75,85 50,65 25,85 35,55 10,35 40,35" />
        </svg>
      </div>

      {/* Small White Star */}
      <div className="absolute bottom-1/3 left-8">
        <Star className="w-8 h-8 text-white fill-white" />
      </div>

      {/* Main Content */}
      <div className="text-center relative z-10">
        {/* Heart Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-20 h-16 bg-lavender rounded-lg transform -rotate-6 absolute -left-4" />
            <div className="w-20 h-16 bg-peach rounded-lg transform rotate-6 absolute -right-4" />
            <div className="relative w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center border-4 border-navy">
              <Heart className="w-8 h-8 text-navy fill-navy" />
            </div>
          </div>
        </div>

        <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-navy leading-none">
          READY TO
        </h2>
        <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-white leading-none">
          HACK?
        </h2>

        <p className="mt-8 text-navy font-mono text-lg tracking-[0.3em]">
          FREE ENTRY. 36 HOURS. REAL PRIZES.
        </p>

        <a
          href="https://hackandchill--3.devfolio.co/overview"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-navy text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-navy/80 transition-colors border-2 border-teal"
        >
          REGISTER ON DEVFOLIO
        </a>

        <p className="mt-4 text-navy/70 font-mono text-sm tracking-wider">
          LIMITED SEATS AVAILABLE
        </p>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const socialLinks = [
    { icon: <Camera className="w-6 h-6" />, bg: 'bg-orange', href: 'https://www.instagram.com/hacknchill_3.0/' },
    { icon: <Briefcase className="w-6 h-6" />, bg: 'bg-teal', href: 'https://www.linkedin.com/company/gdgadgips/' },
    { icon: <Twitter className="w-6 h-6" />, bg: 'bg-lavender', href: 'https://x.com/GdscAdgips' },
    { icon: <MessageSquare className="w-6 h-6" />, bg: 'bg-pink-400', href: 'mailto:info@hacknchill.com' },
  ];

  const quickLinks = [
    'HOME', 'ABOUT', 'TRACKS', 'SCHEDULE', 'PRIZES', 'SPONSORS', 'REGISTER'
  ];

  return (
    <footer className="relative bg-navy overflow-hidden">
      {/* Top Section with Diagonal */}
      <div className="relative py-32 overflow-hidden">
        {/* Dark Star */}
        <div className="absolute top-8 left-8">
          <Star className="w-16 h-16 text-white/10 fill-white/10" />
        </div>

        {/* Teal Asterisk */}
        <div className="absolute bottom-8 right-8">
          <Asterisk className="w-20 h-20 text-teal/30 animate-spin-slow" />
        </div>

        <div className="text-center relative z-10">
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-white">
            SCROLL DOWN
          </h2>
          <p className="mt-4 text-teal font-mono text-sm tracking-[0.3em]">
            TO WITNESS THE SONIC ARCHITECTURE
          </p>
        </div>

        {/* Animated Diagonal Orange Stripe */}
        <div className="absolute -bottom-16 left-0 right-0 h-48 bg-orange transform -skew-y-6 origin-left animate-pulse-glow" />
        <div className="absolute -bottom-20 left-0 right-0 h-48 bg-orange/50 transform -skew-y-3 origin-left" />
      </div>

      {/* Main Footer Content */}
      <div className="bg-navy pt-8 pb-16 px-6 md:px-12 lg:px-20 relative">
        {/* Animated Background Text */}
        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
          <div className="animate-scroll-text whitespace-nowrap flex">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="font-display text-[20vw] text-white mx-8">
                HACK&CHILL
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo Block */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌟</span>
              <span className="text-2xl">👋</span>
            </div>
            <h3 className="font-display text-2xl text-orange mb-2">HACK&CHILL 3.0</h3>
            <p className="text-teal font-mono text-sm tracking-wider mb-2">
              BUILD. CHILL. REPEAT.
            </p>
            <p className="text-white/40 text-sm">
              BY GDGC ADGIPS
            </p>
            <Star className="w-6 h-6 text-orange fill-orange mt-4" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-orange font-mono text-sm tracking-[0.3em] mb-6">QUICK LINKS</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/70 hover:text-teal transition-colors flex items-center gap-2"
                  >
                    <Sparkles className="w-3 h-3 text-teal" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-orange font-mono text-sm tracking-[0.3em] mb-6">FOLLOW US</h4>
            <div className="grid grid-cols-2 gap-4 max-w-[140px]">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className={`${social.bg} w-14 h-14 flex items-center justify-center text-navy hover:scale-110 transition-transform`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 font-mono text-sm tracking-wider">
            HACK&CHILL 3.0. BUILD. CHILL. REPEAT. © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main App
function App() {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsBar />
        <TracksSection />
        <TimelineSection />
        <PrizesSection />
        <SponsorsSection />
        <MentorsSection />
        <PastEditionsSection />
        <TeamSection />
        <RegisterSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
