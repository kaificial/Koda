import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Check, ArrowRight, TrendingUp, DollarSign, Users, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate border and shadow opacity based on scroll position
  const borderOpacity = Math.min(scrollY / 200, 1); // Border appears over 200px of scroll
  const shadowOpacity = Math.min(scrollY / 200, 1); // Shadow appears over 200px of scroll
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 font-primary">
      {/* Floating Pill Navbar */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[95vw] px-8">
        <div 
          className="bg-white/90 backdrop-blur-md rounded-2xl px-16 py-4 transition-all duration-300"
          style={{
            border: `1px solid rgba(156, 163, 175, ${borderOpacity})`,
            boxShadow: `0 10px 15px -3px rgba(0, 0, 0, ${shadowOpacity * 0.1}), 0 4px 6px -2px rgba(0, 0, 0, ${shadowOpacity * 0.05})`
          }}
        >
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex items-center gap-1 mr-16">
              <div className="relative">
                {/* Abstract Logo */}
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-green-600">
                    <path d="M12 2L22 7L12 12L2 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 7L2 17L12 12L22 17L22 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="font-bold text-xl text-gray-900">Koda</div>
            </div>
            
            {/* Navigation Links - Closer to left */}
            <nav className="hidden md:flex gap-12 text-gray-700 mr-auto">
              <a href="#features" className="hover:text-green-600 transition-all duration-300 hover:scale-105 relative group">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#benefits" className="hover:text-green-600 transition-all duration-300 hover:scale-105 relative group">
                Benefits
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
            
            {/* Action Buttons */}
            <div className="flex gap-3">
              <Link to="/login" className="transition-all duration-300 hover:scale-105">
                <Button variant="ghost" className="rounded-full transition-all duration-300 hover:bg-green-50 hover:text-green-600 hover:shadow-md">
                  Sign in
                </Button>
              </Link>
              <Link to="/login" className="transition-all duration-300 hover:scale-105">
                <Button className="rounded-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  Get started free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative text-center pt-40 pb-32 px-6 max-w-6xl mx-auto overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-green-300/20 rounded-full blur-3xl animate-float-slow"></div>
          
          {/* Floating Particles */}
          <div className="absolute top-32 left-1/4 w-2 h-2 bg-green-400/60 rounded-full animate-particle-1"></div>
          <div className="absolute top-48 right-1/3 w-1 h-1 bg-emerald-400/80 rounded-full animate-particle-2"></div>
          <div className="absolute top-64 left-1/2 w-3 h-3 bg-green-300/40 rounded-full animate-particle-3"></div>
          <div className="absolute top-80 right-1/4 w-2 h-2 bg-emerald-500/50 rounded-full animate-particle-4"></div>
          <div className="absolute top-96 left-1/3 w-1 h-1 bg-green-400/70 rounded-full animate-particle-5"></div>
          
          {/* Geometric Shapes */}
          <div className="absolute top-24 right-16 w-8 h-8 border-2 border-green-300/30 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-32 left-16 w-6 h-6 bg-emerald-200/20 rounded-full animate-pulse"></div>
          <div className="absolute top-56 left-8 w-4 h-4 bg-green-300/40 transform rotate-12 animate-bounce-slow"></div>
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center justify-center mb-8 animate-fade-in-up">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full px-6 py-3 flex items-center gap-3 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer group">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse animate-subtle-glow"></div>
              <p className="uppercase text-xs font-semibold tracking-wider text-green-700 group-hover:text-green-800 transition-colors">Save your money now!</p>
              <svg className="w-3 h-3 text-green-600 transform rotate-[135deg] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.3] mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent animate-fade-in-up-delayed">
            Student finance <br /> management for <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent animate-gradient">smart students</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delayed-2">
            Take control of your finances easily. Track expenses, manage budgets, make goals and build better habits while you study!
          </p>
          
          <div className="flex justify-center mb-16 animate-fade-in-up-delayed-3">
            <Link to="/login" className="transition-all duration-500 hover:scale-105 hover:-translate-y-1 group">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 rounded-full relative overflow-hidden">
                <span className="relative z-10">Get started free</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </Link>
          </div>
          
          <div className="text-center animate-fade-in-up-delayed-4">
            <p className="text-sm text-gray-500">
              Made by{" "}
              <a 
                href="https://kaificial.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 transition-colors duration-300 font-medium hover:underline"
              >
                Kai
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section id="features" className="py-24 px-8 max-w-7xl mx-auto relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-transparent to-emerald-50/30 rounded-3xl"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-green-200/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-emerald-200/20 rounded-full blur-2xl animate-float-delayed"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-16">
            <div className="bg-white/60 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Quick setup, easy tracking
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Start managing your finances in just a few clicks. Connect your accounts, 
                set your budget, and start tracking instantly.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Check className="text-green-600" size={20}/>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">No setup required</h3>
                    <p className="text-gray-600">Get started immediately without complex configurations or lengthy onboarding processes.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Check className="text-green-600" size={20}/>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">Launch within minutes</h3>
                    <p className="text-gray-600">Set up your financial dashboard and start tracking your money in under 5 minutes.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Check className="text-green-600" size={20}/>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">Multi-account support</h3>
                    <p className="text-gray-600">Connect all your bank accounts, credit cards, and investment accounts in one place.</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Link to="/login" className="transition-all duration-500 hover:scale-105 hover:-translate-y-1 group">
                  <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 rounded-full relative overflow-hidden">
                    <span className="relative z-10">Start for free</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white/40 backdrop-blur-md border border-white/30 rounded-3xl h-80 flex items-center justify-center relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 group-hover:from-green-500/20 group-hover:to-emerald-500/20 transition-all duration-500"></div>
              
              {/* Animated Background Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-emerald-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-4 w-1 h-1 bg-green-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/3 right-8 w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              
              {/* Floating Icons */}
              <div className="absolute top-8 left-8 w-6 h-6 bg-green-100/50 rounded-full flex items-center justify-center animate-float">
                <DollarSign className="w-3 h-3 text-green-600" />
              </div>
              <div className="absolute bottom-8 right-8 w-6 h-6 bg-emerald-100/50 rounded-full flex items-center justify-center animate-float-delayed">
                <TrendingUp className="w-3 h-3 text-emerald-600" />
              </div>
              
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 relative">
                  <TrendingUp className="w-8 h-8 text-white" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                </div>
                <p className="text-gray-500 font-medium group-hover:text-gray-700 transition-colors">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Stats Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 via-emerald-600/5 to-green-600/5"></div>
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Trusted by students worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of students who are already building better financial habits
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/60 backdrop-blur-md border border-white/30 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group relative overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 relative">
                  <DollarSign className="w-8 h-8 text-green-600" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                </div>
                <h3 className="text-4xl font-bold mb-2 text-gray-900 group-hover:text-green-700 transition-colors">$2.5M+</h3>
                <p className="text-gray-600 mb-3">Saved by Students</p>
                
                {/* Animated progress bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full animate-progress-bar" style={{width: '85%'}}></div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm text-green-600 font-medium">Growing daily</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/60 backdrop-blur-md border border-white/30 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-gray-900 group-hover:text-green-700 transition-colors">50K+</h3>
              <p className="text-gray-600 mb-3">Active Students</p>
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm text-blue-600 font-medium">Across 100+ universities</span>
              </div>
            </div>
            
            <div className="bg-white/60 backdrop-blur-md border border-white/30 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-gray-900 group-hover:text-green-700 transition-colors">4.9/5</h3>
              <p className="text-gray-600 mb-3">Student Rating</p>
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm text-yellow-600 font-medium">Excellent reviews</span>
              </div>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="bg-white/50 backdrop-blur-md border border-white/30 rounded-3xl p-12 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl text-white">"</span>
              </div>
              <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-tight">
                "Koda has completely transformed how I manage my finances as a student. 
                It's so intuitive and has helped me save over $500 this semester alone!"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">SJ</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-gray-600">Computer Science Student, MIT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section id="benefits" className="py-24 px-8 max-w-7xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-green-50/30 rounded-3xl"></div>
        <div className="relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-white/40 backdrop-blur-md border border-white/30 rounded-3xl h-80 flex items-center justify-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-500 font-medium">Mobile App Preview</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-lg">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Student-focused features
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Built specifically for student life. Track tuition, manage meal plans, 
                  and budget for textbooks with ease.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-white/40 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="text-green-600" size={20}/>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Tuition tracking</h3>
                      <p className="text-gray-600">Monitor your tuition payments, deadlines, and financial aid status in one place.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/40 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="text-green-600" size={20}/>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Meal plan management</h3>
                      <p className="text-gray-600">Track your dining hall usage and meal plan balance to avoid overspending.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/40 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="text-green-600" size={20}/>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Textbook budgeting</h3>
                      <p className="text-gray-600">Plan and budget for expensive course materials and find the best deals.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Link to="/login" className="transition-all duration-500 hover:scale-105 hover:-translate-y-1">
                  <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-16 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white/90 to-gray-50/80"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="bg-white/60 backdrop-blur-md border border-white/30 rounded-3xl p-8 shadow-lg text-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              <div className="relative">
                {/* Abstract Logo */}
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-600">
                    <path d="M12 2L22 7L12 12L2 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 7L2 17L12 12L22 17L22 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <p className="font-bold text-lg">Koda</p>
            </div>
            <p className="text-gray-600 mb-6">Everything you need to manage your finances as a student.</p>
            <div className="text-xs text-gray-400">
              Koda 
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;