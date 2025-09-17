import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Check, ArrowRight, TrendingUp, DollarSign, Users, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const borderOpacity = Math.max(0.3, Math.min(scrollY / 200, 1));
  const shadowOpacity = Math.max(0.4, Math.min(scrollY / 200, 1));
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 font-primary relative">
      <div className="fixed inset-0 opacity-[0.12] pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 0, 0, 0.2) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        backgroundPosition: '0 0'
      }}></div>
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[95vw] px-8">
        <div 
          className="bg-white/90 backdrop-blur-md rounded-2xl px-16 py-4 transition-all duration-300"
          style={{
            border: `1px solid rgba(156, 163, 175, ${borderOpacity})`,
            boxShadow: `
              0 20px 25px -5px rgba(0, 0, 0, ${shadowOpacity * 0.15}), 
              0 10px 10px -5px rgba(0, 0, 0, ${shadowOpacity * 0.1}), 
              0 4px 6px -2px rgba(0, 0, 0, ${shadowOpacity * 0.08}),
              0 0 0 1px rgba(0, 0, 0, ${shadowOpacity * 0.02})
            `
          }}
        >
          <div className="flex items-center">
 Logo             <div className="flex items-center gap-1 mr-16">
              <div className="relative">
 Abstract Logo                 <div className="w-10 h-10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-green-600">
                    <path d="M12 2L22 7L12 12L2 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 7L2 17L12 12L22 17L22 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="font-bold text-xl text-gray-900 font-display">Koda</div>
            </div>
            
             <nav className="hidden md:flex gap-12 text-gray-700 mr-auto font-primary">
              <a href="#features" className="hover:text-green-600 transition-all duration-300 hover:scale-105 relative group">
                 Learn More
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
            
            <div className="flex gap-3">
              <Button asChild variant="ghost" className="rounded-full transition-all duration-300 hover:bg-green-50 hover:text-green-600 hover:shadow-md">
                <Link to="/login" className="transition-all duration-300 hover:scale-105">
                  Sign in
                </Link>
              </Button>
              <Button asChild className="rounded-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <Link to="/login" className="transition-all duration-300 hover:scale-105">
                  Get started 4 free
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

       <section className="relative text-left pt-32 pb-24 pl-20 pr-6 max-w-7xl mx-auto">
          <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none" style={{zIndex: -1}}>
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
            <div className="absolute top-[10vh] left-[5vw] w-32 h-32 bg-gradient-to-br from-green-400/25 to-emerald-500/20 rotate-12 rounded-lg blur-2xl animate-float-cube-1"></div>
           <div className="absolute top-[20vh] right-[8vw] w-24 h-24 bg-gradient-to-br from-emerald-400/30 to-teal-500/25 -rotate-12 rounded-lg blur-2xl animate-float-cube-2"></div>
           <div className="absolute bottom-[15vh] left-[10vw] w-28 h-28 bg-gradient-to-br from-teal-400/20 to-cyan-500/25 rotate-45 rounded-lg blur-2xl animate-float-cube-3"></div>
           <div className="absolute top-[50vh] right-[20vw] w-20 h-20 bg-gradient-to-br from-green-500/25 to-emerald-400/20 -rotate-45 rounded-lg blur-2xl animate-float-cube-4"></div>
           <div className="absolute bottom-[10vh] right-[5vw] w-36 h-36 bg-gradient-to-br from-emerald-500/20 to-green-400/25 rotate-24 rounded-lg blur-2xl animate-float-cube-5"></div>
            
            <div className="absolute top-[15vh] left-[30vw] w-16 h-16 bg-gradient-to-br from-cyan-400/30 to-teal-500/25 rotate-60 rounded-lg blur-xl animate-float-cube-6"></div>
           <div className="absolute top-[35vh] right-[25vw] w-18 h-18 bg-gradient-to-br from-green-500/25 to-emerald-400/30 -rotate-30 rounded-lg blur-xl animate-float-cube-7"></div>
           <div className="absolute bottom-[25vh] left-[20vw] w-14 h-14 bg-gradient-to-br from-teal-500/25 to-cyan-400/20 rotate-75 rounded-lg blur-xl animate-float-cube-8"></div>
           <div className="absolute top-[65vh] right-[15vw] w-22 h-22 bg-gradient-to-br from-emerald-400/20 to-green-500/25 -rotate-60 rounded-lg blur-xl animate-float-cube-9"></div>
           
           <div className="absolute top-[12vh] left-[50vw] w-12 h-12 bg-gradient-to-br from-green-400/35 to-emerald-500/30 rotate-15 rounded-lg blur-lg animate-float-cube-10"></div>
           <div className="absolute top-[25vh] right-[10vw] w-10 h-10 bg-gradient-to-br from-teal-400/30 to-cyan-500/25 -rotate-45 rounded-lg blur-lg animate-float-cube-11"></div>
           <div className="absolute bottom-[20vh] left-[12vw] w-8 h-8 bg-gradient-to-br from-emerald-500/35 to-green-400/30 rotate-30 rounded-lg blur-lg animate-float-cube-12"></div>
           <div className="absolute top-[75vh] right-[30vw] w-14 h-14 bg-gradient-to-br from-cyan-500/25 to-teal-400/30 -rotate-15 rounded-lg blur-lg animate-float-cube-13"></div>
           
           <div className="absolute top-[40vh] left-[70vw] w-20 h-20 bg-gradient-to-br from-green-400/25 to-emerald-500/20 rotate-30 rounded-lg blur-xl animate-float-cube-14"></div>
           <div className="absolute bottom-[30vh] right-[40vw] w-16 h-16 bg-gradient-to-br from-teal-500/25 to-cyan-400/20 -rotate-20 rounded-lg blur-xl animate-float-cube-15"></div>
           <div className="absolute top-[60vh] left-[80vw] w-12 h-12 bg-gradient-to-br from-emerald-400/30 to-green-500/25 rotate-50 rounded-lg blur-lg animate-float-cube-16"></div>
           
           <div className="absolute top-[5vh] left-[15vw] w-48 h-48 bg-gradient-to-br from-green-300/15 to-emerald-400/10 rounded-full blur-3xl animate-float-slow"></div>
           <div className="absolute bottom-[5vh] right-[15vw] w-56 h-56 bg-gradient-to-br from-emerald-300/12 to-teal-400/8 rounded-full blur-3xl animate-float-delayed"></div>
           <div className="absolute top-[30vh] right-[60vw] w-40 h-40 bg-gradient-to-br from-teal-300/10 to-cyan-400/8 rounded-full blur-3xl animate-float-slow"></div>
         </div>

        <div className="relative z-10 ml-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-start mb-8 animate-fade-in-up">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full px-6 py-3 flex items-center gap-3 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p className="uppercase text-xs font-semibold tracking-wider text-green-700 group-hover:text-green-800 transition-colors font-primary">Save your money now!</p>
              <svg className="w-3 h-3 text-green-600 transform rotate-[135deg] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>
          
               <h1 className="text-4xl md:text-6xl font-bold leading-[1.3] mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent animate-fade-in-up-delayed font-display">
                 Start building smart money <br /> habits <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent animate-gradient animate-subtle-glow">today</span>
           </h1>
          
               <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed animate-fade-in-up-delayed-2 font-primary">
            Take control of your finances easily. Track expenses, manage budgets, make goals and build better habits while you study!
          </p>
          
               <div className="flex justify-start mb-16 animate-fade-in-up-delayed-3">
            <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 rounded-full relative overflow-hidden group">
              <Link to="/login" className="transition-all duration-500 hover:scale-105 hover:-translate-y-1">
                     <span className="relative z-10 font-display">Get started 4 free</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                     <div className="absolute inset-0 bg-gradient-to-r from-green-400/15 to-emerald-400/15 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
              </Link>
            </Button>
          </div>
          
                     <div className="text-left animate-fade-in-up-delayed-4">
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
 
              <div className="relative animate-fade-in-up-delayed-2">
               <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 overflow-hidden hover:shadow-3xl transition-all duration-500 group hover:scale-[1.02] p-6">
                 <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-3 flex items-center gap-3 border-b border-gray-200/50 mb-6">
                   <div className="flex gap-2">
                     <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                     <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                     <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                   </div>
                   <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center gap-2 shadow-sm">
                     <div className="w-3 h-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                       <svg className="w-1.5 h-1.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                       </svg>
                     </div>
                     <span className="text-xs text-gray-700 font-mono">kodafinance.com</span>
                   </div>
                 </div>
 
                 <div className="space-y-6">
                   <div className="flex gap-4">
                     <div className="bg-white border border-gray-200 rounded-2xl p-4 flex-1 shadow-sm">
                       <div className="flex items-center gap-3 mb-3">
                         <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                           <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        </div>
                         <div>
                           <h3 className="font-semibold text-gray-900 text-sm">Rent</h3>
                           <p className="text-xs text-gray-500">$1000/month</p>
                         </div>
                         <div className="ml-auto">
                           <div className="w-8 h-4 bg-green-500 rounded-full flex items-center justify-end px-1">
                             <div className="w-3 h-3 bg-white rounded-full"></div>
                           </div>
                         </div>
                       </div>
                      </div>

                     <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 flex-1 shadow-lg transform rotate-1">
                       <div className="flex items-center gap-3 mb-3">
                         <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                           <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                             <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                          </svg>
                        </div>
                         <div>
                           <h3 className="font-semibold text-white text-sm">Spotify</h3>
                           <p className="text-xs text-blue-100">$13/month</p>
                         </div>
                         <div className="ml-auto">
                           <div className="w-8 h-4 bg-white/30 rounded-full flex items-center justify-end px-1">
                             <div className="w-3 h-3 bg-white rounded-full"></div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
 
                   <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6">
                     <h3 className="text-sm font-medium text-gray-600 mb-2">My Balance</h3>
                     <p className="text-3xl font-bold text-gray-900 mb-2">$10,234</p>
                     <p className="text-sm text-green-600">You SAVED an extra $2,832.19 this month</p>
                   </div>
 
                   <div className="flex gap-3">
                     <button className="flex-1 bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-gray-50 transition-colors">
                       <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                         <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                          </svg>
                        </div>
                       <span className="text-xs font-medium text-gray-700">Send</span>
                     </button>
                     <button className="flex-1 bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-gray-50 transition-colors">
                       <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                         <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                            </svg>
                       </div>
                       <span className="text-xs font-medium text-gray-700">Receive</span>
                     </button>
                     <button className="flex-1 bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-gray-50 transition-colors">
                       <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                         <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                       </div>
                       <span className="text-xs font-medium text-gray-700">Convert</span>
                     </button>
                   </div>
 
                   <div className="bg-white border border-gray-200 rounded-2xl p-4">
                     <h3 className="text-sm font-medium text-gray-600 mb-4">Monthly Overview</h3>
                     <div className="flex items-end gap-2 h-20">
                       <div className="flex-1 bg-gray-200 rounded-t h-8"></div>
                       <div className="flex-1 bg-gray-200 rounded-t h-12"></div>
                       <div className="flex-1 bg-gray-200 rounded-t h-6"></div>
                       <div className="flex-1 bg-gray-200 rounded-t h-10"></div>
                       <div className="flex-1 bg-green-500 rounded-t h-16 relative">
                         <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                           $4,239.12
                         </div>
                       </div>
                       <div className="flex-1 bg-gray-200 rounded-t h-8"></div>
                     </div>
                     <div className="flex justify-between text-xs text-gray-500 mt-2">
                       <span>January</span>
                       <span>June</span>
                       <span>December</span>
                     </div>
                   </div>
                 </div>
                 </div>
                 
                 <div className="mt-6 text-center">
                 <a href="#demo-video" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                   </svg>
                   View Demo
                 </a>
               </div>
             </div>
           </div>
         </div>
       </section>
 
       <section id="demo-video" className="pt-8 pb-20 px-8 max-w-7xl mx-auto">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-2xl animate-float"></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-float-delayed"></div>
          
          <div className="relative bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 overflow-hidden hover:shadow-3xl transition-all duration-500 group hover:scale-[1.02]">
 Enhanced Browser Bar             <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 flex items-center gap-4 border-b border-gray-200/50">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
              <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-3 shadow-sm">
                <div className="w-4 h-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                <span className="text-sm text-gray-700 font-mono font-medium">kodafinance.com</span>
                <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
                      </div>

 Enhanced Video Container             <div className="aspect-[16/9] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-transparent to-emerald-50/30"></div>
              <div className="w-full h-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center relative z-10">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Demo</h3>
                  <p className="text-gray-600">Experience Koda's features in action</p>
                </div>
              </div>
            </div>
            
 Enhanced Card Content             <div className="p-10 bg-gradient-to-br from-white/90 to-gray-50/90">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                  Interactive Demo
                      </div>

                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4 font-display">
                  See Koda in Action
                </h3>
                <p className="text-gray-600 text-lg mb-8 font-primary max-w-2xl mx-auto leading-relaxed">
                  Experience how easy it is to track your expenses, set budgets, and manage your money as a student. 
                  Get started in minutes and take control of your finances today.
                </p>
                
 Enhanced CTA Button                 <Link to="/login" className="inline-block group">
                  <button className="relative px-10 py-4 bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 text-white font-semibold rounded-2xl hover:from-green-700 hover:via-emerald-700 hover:to-green-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <svg className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                    <span className="relative z-10 font-display">Try for yourself</span>
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                </Link>
                
 Trust Indicators                 <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Free to start</span>
                        </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                    <span>No credit card</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                    <span>2-minute setup</span>
                  </div>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
      </section>

 Features section       <section id="features" className="py-20 px-8 max-w-7xl mx-auto">
 Simple Header           <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
            Everything you need to manage your money
              </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-primary">
            Built specifically for students, Koda makes financial management simple and intuitive
              </p>
            </div>
 Interactive Grid Layout         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
 User Accounts           <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-green-300 hover:shadow-2xl transition-all duration-500 group shadow-md hover:scale-105 cursor-pointer relative overflow-hidden">
 Animated background gradient             <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 via-emerald-50/0 to-green-50/0 group-hover:from-green-50/30 group-hover:via-emerald-50/20 group-hover:to-green-50/30 transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-100 group-hover:scale-110 transition-all duration-300 group-hover:rotate-3">
                <svg className="w-6 h-6 text-green-600 group-hover:text-green-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                  </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-display group-hover:text-green-700 transition-colors duration-300">User Accounts</h3>
              <p className="text-green-600 text-sm font-medium mb-4 group-hover:text-green-700 transition-colors duration-300">Authentication</p>
              <ul className="space-y-2 text-gray-600 text-sm font-primary">
                <li className="group-hover:text-gray-700 transition-colors duration-300 hover:translate-x-1 transform transition-transform">• Simple signup/login with email & password</li>
                <li className="group-hover:text-gray-700 transition-colors duration-300 hover:translate-x-1 transform transition-transform">• Social login options</li>
                <li className="group-hover:text-gray-700 transition-colors duration-300 hover:translate-x-1 transform transition-transform">• Student profile with course & budget</li>
              </ul>
                </div>
              </div>
              
 Income & Expense           <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-green-300 hover:shadow-2xl transition-all duration-500 group shadow-md hover:scale-105 cursor-pointer relative overflow-hidden">
 Animated background gradient             <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-cyan-50/0 to-blue-50/0 group-hover:from-blue-50/30 group-hover:via-cyan-50/20 group-hover:to-blue-50/30 transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-100 group-hover:scale-110 transition-all duration-300 group-hover:rotate-3">
                <svg className="w-6 h-6 text-green-600 group-hover:text-green-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                  </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-display group-hover:text-green-700 transition-colors duration-300">Income & Expense</h3>
              <p className="text-green-600 text-sm font-medium mb-4 group-hover:text-green-700 transition-colors duration-300">Tracking</p>
              <ul className="space-y-2 text-gray-600 text-sm font-primary">
                <li className="group-hover:text-gray-700 transition-colors duration-300 hover:translate-x-1 transform transition-transform">• Add income (allowance, jobs, loans)</li>
                <li className="group-hover:text-gray-700 transition-colors duration-300 hover:translate-x-1 transform transition-transform">• Categorized expenses (food, rent, books)</li>
                <li className="group-hover:text-gray-700 transition-colors duration-300 hover:translate-x-1 transform transition-transform">• Quick add for daily expenses</li>
              </ul>
                </div>
              </div>
              
 Smart Budgeting           <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-green-300 hover:shadow-2xl transition-all duration-500 group shadow-md hover:scale-105 cursor-pointer relative overflow-hidden">
 Animated background gradient             <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 via-violet-50/0 to-purple-50/0 group-hover:from-purple-50/30 group-hover:via-violet-50/20 group-hover:to-purple-50/30 transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-100 group-hover:scale-110 transition-all duration-300 group-hover:rotate-3">
                <svg className="w-6 h-6 text-green-600 group-hover:text-green-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                  </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-display group-hover:text-green-700 transition-colors duration-300">Smart Budgeting</h3>
              <p className="text-green-600 text-sm font-medium mb-4 group-hover:text-green-700 transition-colors duration-300">Budget Management</p>
              <ul className="space-y-2 text-gray-600 text-sm font-primary">
                <li className="group-hover:text-gray-700 transition-colors duration-300 hover:translate-x-1 transform transition-transform">• Set monthly/weekly budgets</li>
                <li className="group-hover:text-gray-700 transition-colors duration-300 hover:translate-x-1 transform transition-transform">• Compare spending vs budget</li>
                <li className="group-hover:text-gray-700 transition-colors duration-300 hover:translate-x-1 transform transition-transform">• Smart spending warnings</li>
              </ul>
                </div>
              </div>
              
 Dashboard           <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-green-300 hover:shadow-2xl transition-all duration-500 group shadow-md hover:scale-105 cursor-pointer relative overflow-hidden">
 Animated background gradient             <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 via-amber-50/0 to-orange-50/0 group-hover:from-orange-50/30 group-hover:via-amber-50/20 group-hover:to-orange-50/30 transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-100 group-hover:scale-110 transition-all duration-300 group-hover:rotate-3">
                <svg className="w-6 h-6 text-green-600 group-hover:text-green-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-display group-hover:text-green-700 transition-colors duration-300">Dashboard</h3>
              <p className="text-green-600 text-sm font-medium mb-4 group-hover:text-green-700 transition-colors duration-300">Overview</p>
              <ul className="space-y-2 text-gray-600 text-sm font-primary">
                <li className="group-hover:text-gray-700 transition-colors duration-300 hover:translate-x-1 transform transition-transform">• Monthly balance overview</li>
                <li className="group-hover:text-gray-700 transition-colors duration-300 hover:translate-x-1 transform transition-transform">• Spending breakdown charts</li>
                <li className="group-hover:text-gray-700 transition-colors duration-300 hover:translate-x-1 transform transition-transform">• Recent transactions list</li>
              </ul>
              </div>
            </div>
            
 Analytics           <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-green-300 hover:shadow-2xl transition-all duration-500 group shadow-md hover:scale-105 cursor-pointer relative overflow-hidden">
 Animated background gradient             <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 via-blue-50/0 to-indigo-50/0 group-hover:from-indigo-50/30 group-hover:via-blue-50/20 group-hover:to-indigo-50/30 transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-100 group-hover:scale-110 transition-all duration-300 group-hover:rotate-3">
                <svg className="w-6 h-6 text-green-600 group-hover:text-green-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-display group-hover:text-green-700 transition-colors duration-300">Analytics</h3>
              <p className="text-green-600 text-sm font-medium mb-4 group-hover:text-green-700 transition-colors duration-300">Insights</p>
              <ul className="space-y-2 text-gray-600 text-sm font-primary">
                <li className="group-hover:text-gray-700 transition-colors duration-300 hover:translate-x-1 transform transition-transform">• Income vs expenses comparison</li>
                <li className="group-hover:text-gray-700 transition-colors duration-300 hover:translate-x-1 transform transition-transform">• Top spending categories</li>
                <li className="group-hover:text-gray-700 transition-colors duration-300 hover:translate-x-1 transform transition-transform">• Spending trends over time</li>
              </ul>
          </div>
        </div>

 Coming Soon           <div className="bg-gray-50/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-500 group shadow-md hover:scale-105 cursor-pointer relative overflow-hidden">
 Animated background gradient             <div className="absolute inset-0 bg-gradient-to-br from-gray-50/0 via-slate-50/0 to-gray-50/0 group-hover:from-gray-50/30 group-hover:via-slate-50/20 group-hover:to-gray-50/30 transition-all duration-500"></div>

        <div className="relative z-10">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gray-200 group-hover:scale-110 transition-all duration-300 group-hover:rotate-3">
                <svg className="w-6 h-6 text-gray-500 group-hover:text-gray-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-display group-hover:text-gray-700 transition-colors duration-300">Coming Soon</h3>
              <p className="text-gray-500 text-sm font-medium mb-4 group-hover:text-gray-600 transition-colors duration-300">Future Features</p>
              <ul className="space-y-2 text-gray-500 text-sm font-primary">
                <li className="group-hover:text-gray-600 transition-colors duration-300 hover:translate-x-1 transform transition-transform">• Bank account integration</li>
                <li className="group-hover:text-gray-600 transition-colors duration-300 hover:translate-x-1 transform transition-transform">• Savings goals & tracking</li>
                <li className="group-hover:text-gray-600 transition-colors duration-300 hover:translate-x-1 transform transition-transform">• AI-powered insights</li>
              </ul>
                    </div>
                  </div>
                </div>

 Simple CTA         <div className="text-center">
          <Link to="/login" className="inline-block">
            <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 font-display relative overflow-hidden group shadow-lg hover:shadow-2xl hover:-translate-y-1">
              <span className="relative z-10">Get started 4 free</span>
              
 Animated background gradient               <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
 Glowing effect               <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              
 Animated background particles               <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-white/20 rounded-full animate-ping"></div>
                <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-white/30 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/2 -left-1 w-2 h-2 bg-white/25 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                    </div>
              
 Pulsing ring effect               <div className="absolute inset-0 rounded-xl border-2 border-white/20 animate-pulse"></div>
              
 Shimmer effect               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button>
                </Link>
        </div>
      </section>





 Footer       <footer className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
 Brand             <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-600">
                    <path d="M12 2L22 7L12 12L2 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 7L2 17L12 12L22 17L22 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-bold text-xl text-gray-900 font-display">Koda</span>
              </div>
              <p className="text-gray-600 text-sm font-primary max-w-md">
                Everything you need to manage your finances as a student. Simple, intuitive, and designed for your success.
              </p>
            </div>

 Product             <div>
              <h3 className="font-semibold text-gray-900 mb-4 font-display">Product</h3>
              <ul className="space-y-2 text-sm text-gray-600 font-primary">
                <li><a href="#" className="hover:text-green-600 transition-colors duration-200">Learn More</a></li>
                <li><a href="#demo-video" className="hover:text-green-600 transition-colors duration-200">Demo</a></li>
              </ul>
            </div>

 Support             <div>
              <h3 className="font-semibold text-gray-900 mb-4 font-display">Support</h3>
              <ul className="space-y-2 text-sm text-gray-600 font-primary">
                <li><a href="#" className="hover:text-green-600 transition-colors duration-200">Contact Us</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors duration-200">Privacy Policy</a></li>
              </ul>
                </div>
              </div>

 Bottom Bar           <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-500 font-primary">
              © 2025 Koda. Kai Kim
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-green-600 transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;