import { useEffect } from 'react';
import { ArrowRight, MessageCircle, Clock, Users, Sparkles, Star } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, [])
  return (
    <section id="hero" className="min-h-screen bg-[#0a0a1a] relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d0d1a] to-[#070714]" />

      {/* Floating decorative elements */}
      <div className="absolute top-32 right-20 text-[#ff6b35] animate-float">
        <Star className="w-6 h-6 fill-current" />
      </div>
      <div className="absolute top-1/2 right-1/4 text-[#00d4d4] animate-float" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-5 h-5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            {/* <div className="inline-flex items-center gap-2 bg-[#1a1a2e] border border-[#2a2a3e] rounded-full px-4 py-1.5">
              <span className="w-2 h-2 bg-[#ff6b35] rounded-full animate-pulse" />
              <span className="text-xs text-gray-400 uppercase tracking-wider">Dark Sedona Soul Edition</span>
            </div> */}

            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight">
                HACK &
              </h1>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight">
                <span className="text-white">CHILL</span>{' '}
                <span className="text-[#00d4d4]">3.0</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-[#00d4d4] font-medium">
              The desert pulse is calling.
            </p>

            {/* Description */}
            <p className="text-gray-400 text-base max-w-md leading-relaxed">
              A 36-hour nocturnal odyssey where the brightest minds build under the desert stars.
              No bugs, just pure neon vibes.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group flex items-center gap-2 bg-[#ff6b35] hover:bg-[#e85a2b] text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-[0_0_30px_rgba(255,107,53,0.4)]">
                Register Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <div
                className="apply-button"
                data-hackathon-slug="hackandchill--3"
                data-button-theme="light"
                style={{ height: '44px', width: '312px' }}
              ></div>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#1a1a2e] rounded-lg flex items-center justify-center border border-[#2a2a3e]">
                  <Clock className="w-5 h-5 text-[#a855f7]" />
                </div>
                <div>
                  <p className="text-white font-bold">36 Hours</p>
                  <p className="text-gray-500 text-xs">Duration</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#1a1a2e] rounded-lg flex items-center justify-center border border-[#2a2a3e]">
                  <Users className="w-5 h-5 text-[#00d4d4]" />
                </div>
                <div>
                  <p className="text-white font-bold">500+</p>
                  <p className="text-gray-500 text-xs">Hackers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Circular Graphic */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 animate-rotate-slow">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <circle
                    cx="200"
                    cy="200"
                    r="190"
                    fill="none"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    strokeDasharray="20 10"
                    opacity="0.6"
                  />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00d4d4" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Middle ring */}
              <div className="absolute inset-4">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <circle
                    cx="200"
                    cy="200"
                    r="170"
                    fill="none"
                    stroke="url(#gradient2)"
                    strokeWidth="3"
                    opacity="0.8"
                  />
                  <defs>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#00d4d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Inner ring */}
              <div className="absolute inset-8">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <circle
                    cx="200"
                    cy="200"
                    r="150"
                    fill="none"
                    stroke="#00d4d4"
                    strokeWidth="1"
                    opacity="0.4"
                  />
                </svg>
              </div>

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  {/* Eye shape */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-24 bg-gradient-to-r from-[#1a1a2e] to-[#0f0f1a] rounded-full border-2 border-[#00d4d4] flex items-center justify-center relative overflow-hidden">
                      {/* Inner eye gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#00d4d4]/20 via-[#ec4899]/20 to-[#a855f7]/20" />

                      {/* Pupil */}
                      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#00d4d4] to-[#a855f7] flex items-center justify-center">
                        <div className="w-6 h-6 bg-white rounded-full opacity-80" />
                        <div className="absolute w-2 h-2 bg-white rounded-full top-3 right-4" />
                      </div>
                    </div>
                  </div>

                  {/* Decorative dots */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#ff6b35] rounded-full" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#00d4d4] rounded-full" />
                </div>
              </div>

              {/* Floating elements around circle */}
              <div className="absolute -top-4 right-1/4 w-8 h-8 bg-[#ff6b35] rounded-lg flex items-center justify-center transform rotate-12 animate-float">
                <Star className="w-4 h-4 text-white fill-current" />
              </div>
              <div className="absolute -bottom-2 left-1/4 w-6 h-6 bg-[#00d4d4] rounded flex items-center justify-center transform -rotate-12 animate-float" style={{ animationDelay: '0.5s' }}>
                <Sparkles className="w-3 h-3 text-[#0a0a1a]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a1a] to-transparent" />
    </section>
  );
};

export default Hero;
