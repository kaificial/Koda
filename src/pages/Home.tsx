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
    <div className="min-h-screen w-full bg-white text-gray-900">
      {/* Floating Pill Navbar */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-8">
        <div 
          className="bg-white/90 backdrop-blur-md rounded-full px-16 py-4 transition-all duration-300"
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
              <div className="font-bold text-xl text-gray-900">Finance</div>
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
      <section className="text-center pt-40 pb-32 px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center justify-center mb-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full px-6 py-3 flex items-center gap-3 shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="uppercase text-xs font-semibold tracking-wider text-green-700">Save your money now!</p>
            <svg className="w-3 h-3 text-green-600 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
          Student finance <br /> management for <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">smart students</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Take control of your finances like a pro. Track expenses, manage budgets, 
          make goals and build better habits while you study.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link to="/login" className="transition-all duration-500 hover:scale-105 hover:-translate-y-1">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              Get started free
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-green-400 hover:bg-green-50 hover:text-green-600 px-8 py-4 text-lg font-semibold transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-lg">
            Watch demo
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="text-2xl font-bold text-gray-900 mb-1">$1,250</div>
            <p className="text-sm text-gray-600">Savings this month</p>
            <div className="flex items-center mt-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-xs text-green-600 font-medium">+12% from last month</span>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="text-2xl font-bold text-gray-900 mb-1">$348</div>
            <p className="text-sm text-gray-600">Budget remaining</p>
            <div className="flex items-center mt-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-xs text-blue-600 font-medium">On track</span>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="text-2xl font-bold text-gray-900 mb-1">4.9/5</div>
            <p className="text-sm text-gray-600">Student rating</p>
            <div className="flex items-center mt-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
              <span className="text-xs text-yellow-600 font-medium">Excellent</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section id="features" className="py-24 px-8 max-w-7xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-transparent to-emerald-50/30 rounded-3xl"></div>
        <div className="relative z-10">
          <div className="text-center mb-16">
            <div className="bg-white/60 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-8 shadow-lg">
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
              <div className="bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Check className="text-green-600" size={20}/>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No setup required</h3>
                    <p className="text-gray-600">Get started immediately without complex configurations or lengthy onboarding processes.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Check className="text-green-600" size={20}/>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Launch within minutes</h3>
                    <p className="text-gray-600">Set up your financial dashboard and start tracking your money in under 5 minutes.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Check className="text-green-600" size={20}/>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-account support</h3>
                    <p className="text-gray-600">Connect all your bank accounts, credit cards, and investment accounts in one place.</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Link to="/login" className="transition-all duration-500 hover:scale-105 hover:-translate-y-1">
                  <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    Start for free
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-white/40 backdrop-blur-md border border-white/30 rounded-3xl h-80 flex items-center justify-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-500 font-medium">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-24 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/40 via-white/60 to-emerald-50/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-100/20 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="bg-white/50 backdrop-blur-md border border-white/30 rounded-3xl p-8 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Trusted by students worldwide
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join thousands of students who are already building better financial habits
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-md border border-white/40 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-gray-900">$2.5M+</h3>
              <p className="text-gray-600 mb-3">Saved by Students</p>
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm text-green-600 font-medium">Growing daily</span>
              </div>
            </div>
            <div className="bg-white/60 backdrop-blur-md border border-white/40 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-gray-900">50K+</h3>
              <p className="text-gray-600 mb-3">Active Students</p>
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm text-blue-600 font-medium">Across 100+ universities</span>
              </div>
            </div>
            <div className="bg-white/60 backdrop-blur-md border border-white/40 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-gray-900">4.9/5</h3>
              <p className="text-gray-600 mb-3">Student Rating</p>
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm text-yellow-600 font-medium">Excellent reviews</span>
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

      {/* Call to action */}
      <section className="py-24 px-8 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/90 to-emerald-600/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Start managing your finances today
            </h2>
            <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of students who are already building better financial habits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login" className="transition-all duration-500 hover:scale-105 hover:-translate-y-1">
                <Button size="lg" className="bg-white/90 backdrop-blur-sm text-green-600 hover:bg-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-white/20">
                  Get started free
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-lg">
                Watch demo
              </Button>
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
              <p className="font-bold text-lg">Finance</p>
            </div>
            <p className="text-gray-600 mb-6">Everything you need to manage your finances as a student.</p>
            <div className="text-xs text-gray-400">
              Finance Dashboard
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;