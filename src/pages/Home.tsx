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
    <div className="min-h-screen w-full bg-white text-gray-900 font-body">
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
              <div className="font-bold text-xl text-gray-900 font-display">Koda</div>
            </div>
            
            {/* Navigation Links - Closer to left */}
            <nav className="hidden md:flex gap-12 text-gray-700 mr-auto font-body">
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
              <Button asChild variant="ghost" className="rounded-full transition-all duration-300 hover:bg-green-50 hover:text-green-600 hover:shadow-md">
                <Link to="/login" className="transition-all duration-300 hover:scale-105">
                  Sign in
                </Link>
              </Button>
              <Button asChild className="rounded-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <Link to="/login" className="transition-all duration-300 hover:scale-105">
                  Get started free
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative text-center pt-40 pb-32 px-6 max-w-6xl mx-auto">
         {/* Animated Background Elements - Full Viewport */}
         <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none" style={{zIndex: -1}}>
           {/* Hand-drawn style elements */}
           <div className="absolute top-[15vh] left-[8vw] w-16 h-16 opacity-20">
             <svg viewBox="0 0 100 100" className="w-full h-full text-green-400">
               <path d="M20,20 Q30,10 40,20 T60,20 T80,20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" className="animate-pulse" />
               <circle cx="25" cy="25" r="3" fill="currentColor" className="animate-bounce" />
               <circle cx="45" cy="15" r="2" fill="currentColor" className="animate-bounce" style={{animationDelay: '0.5s'}} />
               <circle cx="65" cy="25" r="2.5" fill="currentColor" className="animate-bounce" style={{animationDelay: '1s'}} />
             </svg>
           </div>
           
           <div className="absolute top-[25vh] right-[12vw] w-12 h-12 opacity-15">
             <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-400">
               <path d="M15,15 Q25,5 35,15 Q45,25 35,35 Q25,45 15,35 Q5,25 15,15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
               <path d="M20,20 L30,30 M30,20 L20,30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
             </svg>
           </div>
           
           <div className="absolute bottom-[20vh] left-[15vw] w-20 h-20 opacity-25">
             <svg viewBox="0 0 100 100" className="w-full h-full text-teal-400">
               <path d="M50,10 L60,30 L80,30 L65,45 L70,65 L50,55 L30,65 L35,45 L20,30 L40,30 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
               <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.3" />
             </svg>
           </div>
           
           <div className="absolute top-[40vh] left-[70vw] w-14 h-14 opacity-20">
             <svg viewBox="0 0 100 100" className="w-full h-full text-green-500">
               <path d="M20,20 Q30,10 40,20 Q50,30 40,40 Q30,50 20,40 Q10,30 20,20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
               <path d="M25,25 L35,35 M35,25 L25,35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
               <circle cx="30" cy="30" r="2" fill="currentColor" />
             </svg>
           </div>
           
           <div className="absolute bottom-[35vh] right-[25vw] w-18 h-18 opacity-18">
             <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-500">
               <path d="M30,20 Q40,10 50,20 Q60,30 50,40 Q40,50 30,40 Q20,30 30,20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
               <path d="M35,25 L45,35 M45,25 L35,35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
               <circle cx="40" cy="30" r="1.5" fill="currentColor" />
               <circle cx="40" cy="35" r="1" fill="currentColor" />
             </svg>
           </div>
           
           <div className="absolute top-[60vh] left-[25vw] w-16 h-16 opacity-22">
             <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-400">
               <path d="M25,15 Q35,5 45,15 Q55,25 45,35 Q35,45 25,35 Q15,25 25,15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
               <path d="M30,20 L40,30 M40,20 L30,30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
               <circle cx="35" cy="25" r="2" fill="currentColor" />
             </svg>
           </div>
           
           <div className="absolute bottom-[15vh] right-[8vw] w-22 h-22 opacity-16">
             <svg viewBox="0 0 100 100" className="w-full h-full text-green-400">
               <path d="M50,10 L60,30 L80,30 L65,45 L70,65 L50,55 L30,65 L35,45 L20,30 L40,30 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
               <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.4" />
               <path d="M45,45 L55,55 M55,45 L45,55" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
             </svg>
           </div>
           
           <div className="absolute top-[75vh] right-[40vw] w-10 h-10 opacity-20">
             <svg viewBox="0 0 100 100" className="w-full h-full text-teal-500">
               <path d="M20,20 Q30,10 40,20 T60,20 T80,20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
               <circle cx="25" cy="25" r="2" fill="currentColor" />
               <circle cx="45" cy="15" r="1.5" fill="currentColor" />
               <circle cx="65" cy="25" r="1.5" fill="currentColor" />
             </svg>
           </div>
           
           <div className="absolute top-[10vh] left-[60vw] w-24 h-24 opacity-14">
             <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-400">
               <path d="M15,15 Q25,5 35,15 Q45,25 35,35 Q25,45 15,35 Q5,25 15,15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
               <path d="M20,20 L30,30 M30,20 L20,30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
               <circle cx="25" cy="25" r="3" fill="currentColor" />
             </svg>
           </div>
           
           <div className="absolute bottom-[45vh] left-[5vw] w-12 h-12 opacity-19">
             <svg viewBox="0 0 100 100" className="w-full h-full text-green-500">
               <path d="M30,20 Q40,10 50,20 Q60,30 50,40 Q40,50 30,40 Q20,30 30,20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
               <path d="M35,25 L45,35 M45,25 L35,35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
               <circle cx="40" cy="30" r="1.5" fill="currentColor" />
             </svg>
           </div>
           
           <div className="absolute top-[35vh] right-[60vw] w-20 h-20 opacity-17">
             <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-500">
               <path d="M25,15 Q35,5 45,15 Q55,25 45,35 Q35,45 25,35 Q15,25 25,15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
               <path d="M30,20 L40,30 M40,20 L30,30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
               <circle cx="35" cy="25" r="2" fill="currentColor" />
               <circle cx="35" cy="30" r="1" fill="currentColor" />
             </svg>
           </div>
           {/* Large floating cubes - full viewport coverage */}
           <div className="absolute top-[10vh] left-[5vw] w-32 h-32 bg-gradient-to-br from-green-400/25 to-emerald-500/20 rotate-12 rounded-lg blur-2xl animate-float-cube-1"></div>
           <div className="absolute top-[20vh] right-[8vw] w-24 h-24 bg-gradient-to-br from-emerald-400/30 to-teal-500/25 -rotate-12 rounded-lg blur-2xl animate-float-cube-2"></div>
           <div className="absolute bottom-[15vh] left-[10vw] w-28 h-28 bg-gradient-to-br from-teal-400/20 to-cyan-500/25 rotate-45 rounded-lg blur-2xl animate-float-cube-3"></div>
           <div className="absolute top-[50vh] right-[20vw] w-20 h-20 bg-gradient-to-br from-green-500/25 to-emerald-400/20 -rotate-45 rounded-lg blur-2xl animate-float-cube-4"></div>
           <div className="absolute bottom-[10vh] right-[5vw] w-36 h-36 bg-gradient-to-br from-emerald-500/20 to-green-400/25 rotate-24 rounded-lg blur-2xl animate-float-cube-5"></div>
           
           {/* Medium floating cubes - full viewport coverage */}
           <div className="absolute top-[15vh] left-[30vw] w-16 h-16 bg-gradient-to-br from-cyan-400/30 to-teal-500/25 rotate-60 rounded-lg blur-xl animate-float-cube-6"></div>
           <div className="absolute top-[35vh] right-[25vw] w-18 h-18 bg-gradient-to-br from-green-500/25 to-emerald-400/30 -rotate-30 rounded-lg blur-xl animate-float-cube-7"></div>
           <div className="absolute bottom-[25vh] left-[20vw] w-14 h-14 bg-gradient-to-br from-teal-500/25 to-cyan-400/20 rotate-75 rounded-lg blur-xl animate-float-cube-8"></div>
           <div className="absolute top-[65vh] right-[15vw] w-22 h-22 bg-gradient-to-br from-emerald-400/20 to-green-500/25 -rotate-60 rounded-lg blur-xl animate-float-cube-9"></div>
           
           {/* Small floating cubes - full viewport coverage */}
           <div className="absolute top-[12vh] left-[50vw] w-12 h-12 bg-gradient-to-br from-green-400/35 to-emerald-500/30 rotate-15 rounded-lg blur-lg animate-float-cube-10"></div>
           <div className="absolute top-[25vh] right-[10vw] w-10 h-10 bg-gradient-to-br from-teal-400/30 to-cyan-500/25 -rotate-45 rounded-lg blur-lg animate-float-cube-11"></div>
           <div className="absolute bottom-[20vh] left-[12vw] w-8 h-8 bg-gradient-to-br from-emerald-500/35 to-green-400/30 rotate-30 rounded-lg blur-lg animate-float-cube-12"></div>
           <div className="absolute top-[75vh] right-[30vw] w-14 h-14 bg-gradient-to-br from-cyan-500/25 to-teal-400/30 -rotate-15 rounded-lg blur-lg animate-float-cube-13"></div>
           
           {/* Additional cubes for full coverage */}
           <div className="absolute top-[40vh] left-[70vw] w-20 h-20 bg-gradient-to-br from-green-400/25 to-emerald-500/20 rotate-30 rounded-lg blur-xl animate-float-cube-14"></div>
           <div className="absolute bottom-[30vh] right-[40vw] w-16 h-16 bg-gradient-to-br from-teal-500/25 to-cyan-400/20 -rotate-20 rounded-lg blur-xl animate-float-cube-15"></div>
           <div className="absolute top-[60vh] left-[80vw] w-12 h-12 bg-gradient-to-br from-emerald-400/30 to-green-500/25 rotate-50 rounded-lg blur-lg animate-float-cube-16"></div>
           
           {/* Subtle gradient orbs for depth - full viewport */}
           <div className="absolute top-[5vh] left-[15vw] w-48 h-48 bg-gradient-to-br from-green-300/15 to-emerald-400/10 rounded-full blur-3xl animate-float-slow"></div>
           <div className="absolute bottom-[5vh] right-[15vw] w-56 h-56 bg-gradient-to-br from-emerald-300/12 to-teal-400/8 rounded-full blur-3xl animate-float-delayed"></div>
           <div className="absolute top-[30vh] right-[60vw] w-40 h-40 bg-gradient-to-br from-teal-300/10 to-cyan-400/8 rounded-full blur-3xl animate-float-slow"></div>
         </div>

        <div className="relative z-10">
          <div className="inline-flex items-center justify-center mb-8 animate-fade-in-up">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full px-6 py-3 flex items-center gap-3 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer group">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse animate-subtle-glow"></div>
              <p className="uppercase text-xs font-semibold tracking-wider text-green-700 group-hover:text-green-800 transition-colors font-primary">Save your money now!</p>
              <svg className="w-3 h-3 text-green-600 transform rotate-[135deg] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>
          
           <h1 className="text-5xl md:text-7xl font-bold leading-[1.3] mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent animate-fade-in-up-delayed font-display">
             Track your spending, <br /> save your <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent animate-gradient">money</span>
           </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delayed-2 font-body">
            Take control of your finances easily. Track expenses, manage budgets, make goals and build better habits while you study!
          </p>
          
          <div className="flex justify-center mb-16 animate-fade-in-up-delayed-3">
            <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 rounded-full relative overflow-hidden group">
              <Link to="/login" className="transition-all duration-500 hover:scale-105 hover:-translate-y-1">
                <span className="relative z-10">Get started free</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </Button>
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
                
                {/* Features Overview Section */}
                <div className="mt-20 animate-fade-in-up-delayed-5">
                  <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                      <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">Everything you need to manage your money</h2>
                      <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
                        Built specifically for students, Koda makes financial management simple and intuitive
                      </p>
                    </div>

                    {/* Core Features Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                      {/* User Accounts & Authentication */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 font-display">User Accounts & Authentication</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Simple signup/login with email & password
                          </li>
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Social login options
                          </li>
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Student profile with course & budget
                          </li>
                        </ul>
                      </div>

                      {/* Income & Expense Tracking */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Income & Expense Tracking</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Add income (allowance, jobs, loans)
                          </li>
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Categorized expenses (food, rent, books)
                          </li>
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Quick add for daily expenses
                          </li>
                        </ul>
                      </div>

                      {/* Budgeting Tool */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Budgeting</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Set monthly/weekly budgets
                          </li>
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Compare spending vs budget
                          </li>
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Smart spending warnings
                          </li>
                        </ul>
                      </div>

                      {/* Dashboard & Overview */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                          <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Dashboard & Overview</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Monthly balance overview
                          </li>
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Spending breakdown charts
                          </li>
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Recent transactions list
                          </li>
                        </ul>
                      </div>

                      {/* Basic Analytics */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                          <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic Analytics</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Income vs expenses comparison
                          </li>
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Top spending categories
                          </li>
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Spending trends over time
                          </li>
                        </ul>
                      </div>

                      {/* Future Features */}
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
                        <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center mb-6">
                          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Coming Soon</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            Bank account integration
                          </li>
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            Savings goals & tracking
                          </li>
                          <li className="flex items-center">
                            <svg className="w-4 h-4 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            AI-powered insights
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
              <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-emerald-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-500 font-medium group-hover:text-gray-700 transition-colors">Dashboard Preview</p>
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