import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { 
  User, 
  DollarSign, 
  Target, 
  TrendingUp, 
  TrendingDown, 
  Plus, 
  Minus,
  CreditCard,
  PieChart,
  BarChart3,
  Calendar,
  Bell,
  Settings,
  LogOut,
  Home,
  Wallet,
  PiggyBank,
  Receipt,
  AlertCircle
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [transactions, setTransactions] = useState([
    { id: 1, type: "expense", category: "Food", description: "Lunch at campus", amount: 12.50, date: "2024-01-15" },
    { id: 2, type: "income", category: "Part-time Job", description: "Weekly paycheck", amount: 200, date: "2024-01-14" },
    { id: 3, type: "expense", category: "Books", description: "Textbook purchase", amount: 85.99, date: "2024-01-13" },
    { id: 4, type: "expense", category: "Transportation", description: "Bus pass", amount: 45, date: "2024-01-12" },
    { id: 5, type: "income", category: "Financial Aid", description: "Monthly aid", amount: 1200, date: "2024-01-10" }
  ]);

  useEffect(() => {
    const setupData = localStorage.getItem('userSetupData');
    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('userEmail');
    
    if (setupData) {
      setUserData(JSON.parse(setupData));
    } else {
      setUserData({
        fullName: userName || "Demo User",
        university: "University of California",
        course: "Computer Science",
        monthlyBudget: "1500",
        mainGoals: ["Track spending habits", "Save money for emergencies"]
      });
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const getTotalIncome = () => {
    return transactions
      .filter(t => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);
  };

  const getTotalExpenses = () => {
    return transactions
      .filter(t => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);
  };

  const getRemainingBudget = () => {
    const budget = parseFloat(userData?.monthlyBudget || "0");
    return budget - getTotalExpenses();
  };

  const getBudgetProgress = () => {
    const budget = parseFloat(userData?.monthlyBudget || "0");
    const spent = getTotalExpenses();
    return budget > 0 ? (spent / budget) * 100 : 0;
  };

  const getCategorySpending = () => {
    const categoryTotals: { [key: string]: number } = {};
    transactions
      .filter(t => t.type === "expense")
      .forEach(t => {
        categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
      });
    return categoryTotals;
  };

  const categorySpending = getCategorySpending();
  const totalIncome = getTotalIncome();
  const totalExpenses = getTotalExpenses();
  const remainingBudget = getRemainingBudget();
  const budgetProgress = getBudgetProgress();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="relative z-10">
        <nav className="fixed top-4 left-24 right-4 z-50">
          <div className="bg-white/95 backdrop-blur-md border border-gray-200/30 rounded-3xl shadow-2xl shadow-gray-500/8 hover:shadow-3xl hover:shadow-gray-500/15 transition-all duration-300">
            <div className="flex items-center justify-between h-16 px-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-600">
                    <path d="M12 2L22 7L12 12L2 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 7L2 17L12 12L22 17L22 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-bold text-xl text-gray-900 font-display">Koda</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 font-display">
                    Welcome back, {userData?.fullName || "User"}!
                  </p>
                  <p className="text-xs text-gray-500 font-primary">
                    {userData?.university || "University"}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex pt-24">
          <div className="w-16 bg-white/95 backdrop-blur-md border border-gray-200/30 rounded-3xl shadow-2xl shadow-gray-500/8 hover:shadow-3xl hover:shadow-gray-500/15 transition-all duration-300 min-h-screen fixed left-4 top-4 pt-24 z-40">
            <div className="flex flex-col items-center py-4 space-y-4">
              {[
                { id: "overview", icon: Home, tooltip: "Overview" },
                { id: "transactions", icon: Receipt, tooltip: "Transactions" },
                { id: "budget", icon: Target, tooltip: "Budget" },
                { id: "analytics", icon: BarChart3, tooltip: "Analytics" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-gray-100 text-gray-700 shadow-lg shadow-gray-500/15"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-100 hover:shadow-md hover:shadow-gray-500/10"
                  }`}
                  title={tab.tooltip}
                >
                  <tab.icon className="w-5 h-5" />
                  <div className="absolute left-full ml-3 px-2 py-1 bg-gray-900 text-white text-xs rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                    {tab.tooltip}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 ml-24 px-6 py-8">
          {activeTab === "overview" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-white/95 backdrop-blur-sm border border-gray-200/50 shadow-2xl rounded-3xl shadow-gray-500/10 hover:shadow-gray-500/20 hover:shadow-3xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 font-primary">Total Income</p>
                        <p className="text-2xl font-bold text-gray-700 font-display">
                          ${totalIncome.toFixed(2)}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center shadow-md shadow-gray-500/15">
                        <TrendingUp className="w-6 h-6 text-gray-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/95 backdrop-blur-sm border border-gray-200/50 shadow-2xl rounded-3xl shadow-gray-500/10 hover:shadow-gray-500/20 hover:shadow-3xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 font-primary">Total Expenses</p>
                        <p className="text-2xl font-bold text-gray-700 font-display">
                          ${totalExpenses.toFixed(2)}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center shadow-md shadow-gray-500/15">
                        <TrendingDown className="w-6 h-6 text-gray-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/95 backdrop-blur-sm border border-gray-200/50 shadow-2xl rounded-3xl shadow-gray-500/10 hover:shadow-gray-500/20 hover:shadow-3xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 font-primary">Remaining Budget</p>
                        <p className="text-2xl font-bold text-gray-700 font-display">
                          ${remainingBudget.toFixed(2)}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center shadow-md shadow-gray-500/15">
                        <Wallet className="w-6 h-6 text-gray-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/95 backdrop-blur-sm border border-gray-200/50 shadow-2xl rounded-3xl shadow-gray-500/10 hover:shadow-gray-500/20 hover:shadow-3xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 font-primary">Budget Used</p>
                        <p className="text-2xl font-bold text-gray-700 font-display">
                          {budgetProgress.toFixed(1)}%
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center shadow-md shadow-gray-500/15">
                        <PieChart className="w-6 h-6 text-gray-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-white/95 via-green-50/20 to-emerald-50/30 backdrop-blur-sm border border-green-200/30 shadow-lg rounded-3xl shadow-green-500/10 hover:shadow-green-500/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-display text-gray-900">
                    <Target className="w-5 h-5 text-gray-600" />
                    Monthly Budget Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 font-primary">
                        ${getTotalExpenses().toFixed(2)} of ${userData?.monthlyBudget || "0"} spent
                      </span>
                      <span className="text-gray-600 font-primary">
                        {budgetProgress.toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                      <div 
                        className="h-3 rounded-full transition-all duration-300 bg-gray-600"
                        style={{ width: `${Math.min(budgetProgress, 100)}%` }}
                      ></div>
                    </div>
                    {budgetProgress > 100 && (
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span className="font-primary">You've exceeded your monthly budget!</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-white/95 backdrop-blur-sm border border-gray-200/50 shadow-2xl rounded-3xl shadow-gray-500/10 hover:shadow-gray-500/20 hover:shadow-3xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-display text-gray-900">
                      <BarChart3 className="w-5 h-5 text-gray-600" />
                      Income vs Expenses
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-end justify-between h-48 px-4">
                        <div className="flex flex-col items-center space-y-2">
                          <div className="w-16 bg-gray-500 rounded-t-2xl relative" style={{ height: `${(totalIncome / Math.max(totalIncome, totalExpenses)) * 160}px` }}>
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 font-primary">
                              ${totalIncome.toFixed(0)}
                            </div>
                          </div>
                          <span className="text-xs font-medium text-gray-600 font-primary">Income</span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                          <div className="w-16 bg-gray-600 rounded-t-2xl relative" style={{ height: `${(totalExpenses / Math.max(totalIncome, totalExpenses)) * 160}px` }}>
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 font-primary">
                              ${totalExpenses.toFixed(0)}
                            </div>
                          </div>
                          <span className="text-xs font-medium text-gray-600 font-primary">Expenses</span>
                        </div>
                      </div>
                      <div className="text-center pt-4 border-t">
                        <p className="text-sm text-gray-600 font-primary">Net Balance</p>
                        <p className="text-2xl font-bold text-gray-700 font-display">
                          ${(totalIncome - totalExpenses).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/95 backdrop-blur-sm border border-gray-200/50 shadow-2xl rounded-3xl shadow-gray-500/10 hover:shadow-gray-500/20 hover:shadow-3xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-display text-gray-900">
                      <PieChart className="w-5 h-5 text-gray-600" />
                      Spending by Category
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center">
                      <div className="relative w-48 h-48">
                        <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
                          {Object.entries(categorySpending).map(([category, amount], index) => {
                            const total = Object.values(categorySpending).reduce((sum, val) => sum + val, 0);
                            const percentage = (amount / total) * 100;
                            const circumference = 2 * Math.PI * 40;
                            const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
                            const strokeDashoffset = -((index * percentage) / 100) * circumference;
                            
                            const colors = ['#6b7280', '#4b5563', '#374151', '#1f2937', '#111827', '#9ca3af'];
                            const color = colors[index % colors.length];
                            
                            return (
                              <circle
                                key={category}
                                cx="50"
                                cy="50"
                                r="40"
                                fill="none"
                                stroke={color}
                                strokeWidth="8"
                                strokeDasharray={strokeDasharray}
                                strokeDashoffset={strokeDashoffset}
                                className="transition-all duration-500"
                              />
                            );
                          })}
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <p className="text-2xl font-bold text-gray-900 font-display">${totalExpenses.toFixed(0)}</p>
                            <p className="text-sm text-gray-600 font-primary">Total Spent</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      {Object.entries(categorySpending).map(([category, amount], index) => {
                        const total = Object.values(categorySpending).reduce((sum, val) => sum + val, 0);
                        const percentage = ((amount / total) * 100).toFixed(1);
                        const colors = ['#6b7280', '#4b5563', '#374151', '#1f2937', '#111827', '#9ca3af'];
                        const color = colors[index % colors.length];
                        
                        return (
                          <div key={category} className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
                              <span className="font-primary text-gray-700">{category}</span>
                            </div>
                            <span className="font-medium text-gray-900 font-primary">${amount.toFixed(2)} ({percentage}%)</span>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-white/95 via-green-50/20 to-emerald-50/30 backdrop-blur-sm border border-green-200/30 shadow-lg rounded-3xl shadow-green-500/10 hover:shadow-green-500/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-display text-gray-900">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    Monthly Spending Trend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <div className="relative h-full">
                      <svg className="w-full h-full" viewBox="0 0 400 200">
                        <defs>
                          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                        
                        {(() => {
                          const data = [120, 180, 150, 220, 190, 250, 200];
                          const maxValue = Math.max(...data);
                          const points = data.map((value, index) => {
                            const x = (index / (data.length - 1)) * 360 + 20;
                            const y = 180 - ((value / maxValue) * 160);
                            return `${x},${y}`;
                          }).join(' ');
                          
                          return (
                            <>
                              <polygon
                                points={`20,180 ${points} 380,180`}
                                fill="url(#gradient)"
                                opacity="0.3"
                              />
                              <polyline
                                points={points}
                                fill="none"
                                stroke="#6b7280"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              {data.map((value, index) => {
                                const x = (index / (data.length - 1)) * 360 + 20;
                                const y = 180 - ((value / maxValue) * 160);
                                return (
                                  <circle
                                    key={index}
                                    cx={x}
                                    cy={y}
                                    r="4"
                                    fill="#6b7280"
                                    className="hover:r-6 transition-all duration-200"
                                  />
                                );
                              })}
                            </>
                          );
                        })()}
                        
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#6b7280" stopOpacity="0.3"/>
                            <stop offset="100%" stopColor="#6b7280" stopOpacity="0"/>
                          </linearGradient>
                        </defs>
                      </svg>
                      
                      <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 font-primary">
                        <span>$300</span>
                        <span>$200</span>
                        <span>$100</span>
                        <span>$0</span>
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 font-primary px-5">
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                        <span>Jul</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white/95 backdrop-blur-sm border border-gray-200/50 shadow-2xl rounded-3xl shadow-gray-500/10 hover:shadow-gray-500/20 hover:shadow-3xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-gray-500/15">
                      <TrendingUp className="w-8 h-8 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 font-display mb-2">Financial Health</h3>
                    <div className="text-3xl font-bold text-gray-700 font-display mb-2">
                      {Math.min(100, Math.max(0, 100 - budgetProgress)).toFixed(0)}
                    </div>
                    <p className="text-sm text-gray-600 font-primary">Score out of 100</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/95 backdrop-blur-sm border border-gray-200/50 shadow-2xl rounded-3xl shadow-gray-500/10 hover:shadow-gray-500/20 hover:shadow-3xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-gray-500/15">
                      <PiggyBank className="w-8 h-8 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 font-display mb-2">Savings Rate</h3>
                    <div className="text-3xl font-bold text-gray-700 font-display mb-2">
                      {totalIncome > 0 ? ((totalIncome - totalExpenses) / totalIncome * 100).toFixed(1) : 0}%
                    </div>
                    <p className="text-sm text-gray-600 font-primary">Of total income</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/95 backdrop-blur-sm border border-gray-200/50 shadow-2xl rounded-3xl shadow-gray-500/10 hover:shadow-gray-500/20 hover:shadow-3xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-gray-500/15">
                      <Calendar className="w-8 h-8 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 font-display mb-2">Days Left</h3>
                    <div className="text-3xl font-bold text-gray-700 font-display mb-2">
                      {Math.max(0, 30 - new Date().getDate())}
                    </div>
                    <p className="text-sm text-gray-600 font-primary">In this month</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-white/95 via-green-50/20 to-emerald-50/30 backdrop-blur-sm border border-green-200/30 shadow-lg rounded-3xl shadow-green-500/10 hover:shadow-green-500/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-display text-gray-900">
                    <Receipt className="w-5 h-5 text-green-600" />
                    Recent Transactions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {transactions.slice(0, 5).map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl border border-gray-200/30 shadow-md shadow-gray-500/8 hover:shadow-lg hover:shadow-gray-500/12 transition-all duration-200">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-sm ${
                            transaction.type === "income" ? "bg-gray-100 shadow-gray-500/15" : "bg-gray-100 shadow-gray-500/15"
                          }`}>
                            {transaction.type === "income" ? (
                              <Plus className="w-5 h-5 text-gray-600" />
                            ) : (
                              <Minus className="w-5 h-5 text-gray-600" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 font-primary">{transaction.description}</p>
                            <p className="text-sm text-gray-500 font-primary">{transaction.category}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-700 font-display">
                            {transaction.type === "income" ? "+" : "-"}${transaction.amount.toFixed(2)}
                          </p>
                          <p className="text-sm text-gray-500 font-primary">{transaction.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {userData?.mainGoals && userData.mainGoals.length > 0 && (
                <Card className="bg-white/95 backdrop-blur-sm border border-gray-200/50 shadow-2xl rounded-3xl shadow-gray-500/10 hover:shadow-gray-500/20 hover:shadow-3xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-display text-gray-900">
                      <PiggyBank className="w-5 h-5 text-gray-600" />
                      Your Financial Goals
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {userData.mainGoals.map((goal: string, index: number) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <Target className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-gray-700 font-primary">{goal}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {activeTab === "transactions" && (
            <div className="space-y-6">
              <Card className="bg-white/95 backdrop-blur-sm border border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between font-display text-gray-900">
                    <div className="flex items-center gap-2">
                      <Receipt className="w-5 h-5 text-gray-600" />
                      All Transactions
                    </div>
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Transaction
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {transactions.map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            transaction.type === "income" ? "bg-green-100" : "bg-red-100"
                          }`}>
                            {transaction.type === "income" ? (
                              <Plus className="w-6 h-6 text-green-600" />
                            ) : (
                              <Minus className="w-6 h-6 text-red-600" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 font-primary">{transaction.description}</p>
                            <p className="text-sm text-gray-500 font-primary">{transaction.category} • {transaction.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`text-lg font-semibold font-display ${
                            transaction.type === "income" ? "text-green-600" : "text-red-600"
                          }`}>
                            {transaction.type === "income" ? "+" : "-"}${transaction.amount.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "budget" && (
            <div className="space-y-6">
              <Card className="bg-white/95 backdrop-blur-sm border border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-display text-gray-900">
                      <Target className="w-5 h-5 text-gray-600" />
                    Budget Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label className="text-gray-700 font-medium">Monthly Budget</Label>
                        <Input
                          type="number"
                          value={userData?.monthlyBudget || ""}
                          className="mt-2 text-gray-900"
                          placeholder="Enter monthly budget"
                        />
                      </div>
                      <div>
                        <Label className="text-gray-700 font-medium">Current Spending</Label>
                        <Input
                          type="number"
                          value={getTotalExpenses().toFixed(2)}
                          disabled
                          className="mt-2 bg-gray-100"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 font-display">Spending by Category</h3>
                      <div className="space-y-3">
                        {Object.entries(categorySpending).map(([category, amount]) => (
                          <div key={category} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <span className="font-medium text-gray-700 font-primary">{category}</span>
                            <span className="font-semibold text-red-600 font-display">${amount.toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "analytics" && (
            <div className="space-y-8">
 Financial Overview Charts               <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
 Income vs Expenses Bar Chart                 <Card className="bg-white/95 backdrop-blur-sm border border-gray-200 shadow-lg lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-display text-gray-900">
                      <BarChart3 className="w-5 h-5 text-green-600" />
                      Income vs Expenses
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
 Bar Chart Visualization                       <div className="flex items-end justify-between h-48 px-4">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-16 bg-green-500 rounded-t-lg relative" style={{ height: `${(totalIncome / Math.max(totalIncome, totalExpenses)) * 180}px` }}>
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600">
                              ${totalIncome.toFixed(0)}
                            </div>
                          </div>
                          <span className="text-sm font-medium text-gray-600">Income</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-16 bg-red-500 rounded-t-lg relative" style={{ height: `${(totalExpenses / Math.max(totalIncome, totalExpenses)) * 180}px` }}>
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600">
                              ${totalExpenses.toFixed(0)}
                            </div>
                          </div>
                          <span className="text-sm font-medium text-gray-600">Expenses</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <div className={`w-16 rounded-t-lg relative ${
                            (totalIncome - totalExpenses) >= 0 ? "bg-blue-500" : "bg-orange-500"
                          }`} style={{ height: `${(Math.abs(totalIncome - totalExpenses) / Math.max(totalIncome, totalExpenses)) * 180}px` }}>
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600">
                              ${Math.abs(totalIncome - totalExpenses).toFixed(0)}
                            </div>
                          </div>
                          <span className="text-sm font-medium text-gray-600">Net</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

 Budget Progress Donut Chart                 <Card className="bg-white/95 backdrop-blur-sm border border-gray-200/50 shadow-2xl rounded-3xl shadow-gray-500/10 hover:shadow-gray-500/20 hover:shadow-3xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-display text-gray-900">
                      <PieChart className="w-5 h-5 text-gray-600" />
                      Budget Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center space-y-4">
                      <div className="relative w-32 h-32">
                        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            className="text-gray-200"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="transparent"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <path
                            className={`${budgetProgress > 100 ? "text-red-500" : budgetProgress > 80 ? "text-yellow-500" : "text-green-500"}`}
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="transparent"
                            strokeDasharray={`${Math.min(budgetProgress, 100)}, 100`}
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900 font-display">
                              {budgetProgress.toFixed(0)}%
                            </div>
                            <div className="text-xs text-gray-500 font-primary">Used</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-600 font-primary">Budget Status</div>
                        <div className={`text-sm font-medium ${
                          budgetProgress > 100 ? "text-red-600" : 
                          budgetProgress > 80 ? "text-yellow-600" : "text-green-600"
                        }`}>
                          {budgetProgress > 100 ? "Over Budget" : 
                           budgetProgress > 80 ? "Near Limit" : "On Track"}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

 Spending Breakdown and Trends               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
 Spending by Category                 <Card className="bg-white/95 backdrop-blur-sm border border-gray-200/50 shadow-2xl rounded-3xl shadow-gray-500/10 hover:shadow-gray-500/20 hover:shadow-3xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-display text-gray-900">
                      <PieChart className="w-5 h-5 text-gray-600" />
                      Spending by Category
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Object.entries(categorySpending).map(([category, amount], index) => {
                        const percentage = (amount / getTotalExpenses()) * 100;
                        const colors = ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-red-500", "bg-purple-500", "bg-pink-500"];
                        return (
                          <div key={category} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <div className="flex items-center gap-2">
                                <div className={`w-3 h-3 rounded-full ${colors[index % colors.length]}`}></div>
                                <span className="text-gray-600 font-primary">{category}</span>
                              </div>
                              <div className="text-right">
                                <span className="text-gray-600 font-primary">{percentage.toFixed(1)}%</span>
                                <div className="text-xs text-gray-500">${amount.toFixed(2)}</div>
                              </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full transition-all duration-300 ${colors[index % colors.length]}`}
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/95 backdrop-blur-sm border border-gray-200/50 shadow-2xl rounded-3xl shadow-gray-500/10 hover:shadow-gray-500/20 hover:shadow-3xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-display text-gray-900">
                      <TrendingUp className="w-5 h-5 text-gray-600" />
                      Monthly Spending Trend
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
 Mock trend data for visualization                       <div className="h-32 flex items-end justify-between px-2">
                        {[
                          { month: "Jan", amount: 1200, color: "bg-blue-200" },
                          { month: "Feb", amount: 1100, color: "bg-blue-300" },
                          { month: "Mar", amount: 1300, color: "bg-blue-400" },
                          { month: "Apr", amount: 1000, color: "bg-blue-500" },
                          { month: "May", amount: 1400, color: "bg-blue-600" },
                          { month: "Jun", amount: getTotalExpenses(), color: "bg-green-500" }
                        ].map((data, index) => (
                          <div key={data.month} className="flex flex-col items-center gap-1">
                            <div className="text-xs text-gray-500 font-primary">${data.amount.toFixed(0)}</div>
                            <div 
                              className={`w-6 ${data.color} rounded-t transition-all duration-300`}
                              style={{ height: `${(data.amount / 1500) * 80}px` }}
                            ></div>
                            <div className="text-xs text-gray-500 font-primary">{data.month}</div>
                          </div>
                        ))}
                      </div>
                      <div className="text-center text-sm text-gray-600 font-primary">
                        Current month spending: ${getTotalExpenses().toFixed(2)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-white/95 backdrop-blur-sm border border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-display text-gray-900">
                      <Target className="w-5 h-5 text-gray-600" />
                    Financial Health Score
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
 Budget Management Score                     <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-3 relative">
                        <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            className="text-gray-200"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="transparent"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <path
                            className="text-green-500"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="transparent"
                            strokeDasharray={`${Math.max(0, 100 - budgetProgress)}, 100`}
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-lg font-bold text-gray-900 font-display">
                            {Math.max(0, 100 - budgetProgress).toFixed(0)}
                          </span>
                        </div>
                      </div>
                      <div className="text-sm font-medium text-gray-700 font-primary">Budget Control</div>
                    </div>

 Savings Rate Score                     <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-3 relative">
                        <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            className="text-gray-200"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="transparent"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <path
                            className="text-blue-500"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="transparent"
                            strokeDasharray={`${Math.min(100, (totalIncome - totalExpenses) / totalIncome * 100)}, 100`}
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-lg font-bold text-gray-900 font-display">
                            {Math.min(100, Math.max(0, (totalIncome - totalExpenses) / totalIncome * 100)).toFixed(0)}
                          </span>
                        </div>
                      </div>
                      <div className="text-sm font-medium text-gray-700 font-primary">Savings Rate</div>
                    </div>

 Expense Tracking Score                     <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-3 relative">
                        <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            className="text-gray-200"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="transparent"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <path
                            className="text-purple-500"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="transparent"
                            strokeDasharray="85, 100"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-lg font-bold text-gray-900 font-display">85</span>
                        </div>
                      </div>
                      <div className="text-sm font-medium text-gray-700 font-primary">Tracking</div>
                    </div>

 Overall Score                     <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-3 relative">
                        <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            className="text-gray-200"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="transparent"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <path
                            className="text-green-500"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="transparent"
                            strokeDasharray="78, 100"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-lg font-bold text-gray-900 font-display">78</span>
                        </div>
                      </div>
                      <div className="text-sm font-medium text-gray-700 font-primary">Overall</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

 Advanced Financial Analytics               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
 Income Sources Breakdown                 <Card className="bg-white/95 backdrop-blur-sm border border-gray-200/50 shadow-2xl rounded-3xl shadow-gray-500/10 hover:shadow-gray-500/20 hover:shadow-3xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-display text-gray-900">
                      <DollarSign className="w-5 h-5 text-gray-600" />
                      Income Sources
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Object.entries(
                        transactions
                          .filter(t => t.type === "income")
                          .reduce((acc, t) => {
                            acc[t.category] = (acc[t.category] || 0) + t.amount;
                            return acc;
                          }, {} as Record<string, number>)
                      ).map(([source, amount], index) => {
                        const percentage = (amount / totalIncome) * 100;
                        const colors = ["bg-green-500", "bg-emerald-500", "bg-teal-500", "bg-cyan-500"];
                        return (
                          <div key={source} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <div className="flex items-center gap-2">
                                <div className={`w-3 h-3 rounded-full ${colors[index % colors.length]}`}></div>
                                <span className="text-gray-600 font-primary">{source}</span>
                              </div>
                              <div className="text-right">
                                <span className="text-gray-600 font-primary">{percentage.toFixed(1)}%</span>
                                <div className="text-xs text-gray-500">${amount.toFixed(2)}</div>
                              </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full transition-all duration-300 ${colors[index % colors.length]}`}
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

 Weekly Spending Pattern                 <Card className="bg-white/95 backdrop-blur-sm border border-gray-200/50 shadow-2xl rounded-3xl shadow-gray-500/10 hover:shadow-gray-500/20 hover:shadow-3xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-display text-gray-900">
                      <Calendar className="w-5 h-5 text-gray-600" />
                      Weekly Spending Pattern
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="h-32 flex items-end justify-between px-2">
                        {[
                          { day: "Mon", amount: 45, color: "bg-blue-300" },
                          { day: "Tue", amount: 32, color: "bg-blue-400" },
                          { day: "Wed", amount: 67, color: "bg-blue-500" },
                          { day: "Thu", amount: 28, color: "bg-blue-400" },
                          { day: "Fri", amount: 89, color: "bg-blue-600" },
                          { day: "Sat", amount: 156, color: "bg-blue-700" },
                          { day: "Sun", amount: 78, color: "bg-blue-500" }
                        ].map((data, index) => (
                          <div key={data.day} className="flex flex-col items-center gap-1">
                            <div className="text-xs text-gray-500 font-primary">${data.amount}</div>
                            <div 
                              className={`w-4 ${data.color} rounded-t transition-all duration-300`}
                              style={{ height: `${(data.amount / 200) * 80}px` }}
                            ></div>
                            <div className="text-xs text-gray-500 font-primary">{data.day}</div>
                          </div>
                        ))}
                      </div>
                      <div className="text-center text-sm text-gray-600 font-primary">
                        Average daily spending: $70.71
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

 Cash Flow Analysis               <Card className="bg-white/95 backdrop-blur-sm border border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-display text-gray-900">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    Cash Flow Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 Net Cash Flow                     <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                      <div className="w-16 h-16 mx-auto mb-3 bg-green-100 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-8 h-8 text-green-600" />
                      </div>
                      <div className="text-2xl font-bold text-green-600 font-display">
                        ${(totalIncome - totalExpenses).toFixed(2)}
                      </div>
                      <div className="text-sm text-gray-600 font-primary">Net Cash Flow</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {totalIncome > totalExpenses ? "Positive" : "Negative"}
                      </div>
                    </div>

 Average Daily Income                     <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                      <div className="w-16 h-16 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                        <DollarSign className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-blue-600 font-display">
                        ${(totalIncome / 30).toFixed(2)}
                      </div>
                      <div className="text-sm text-gray-600 font-primary">Daily Income</div>
                      <div className="text-xs text-gray-500 mt-1">Average per day</div>
                    </div>

 Average Daily Expenses                     <div className="text-center p-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl">
                      <div className="w-16 h-16 mx-auto mb-3 bg-red-100 rounded-full flex items-center justify-center">
                        <TrendingDown className="w-8 h-8 text-red-600" />
                      </div>
                      <div className="text-2xl font-bold text-red-600 font-display">
                        ${(totalExpenses / 30).toFixed(2)}
                      </div>
                      <div className="text-sm text-gray-600 font-primary">Daily Expenses</div>
                      <div className="text-xs text-gray-500 mt-1">Average per day</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

 Financial Goals Progress               <Card className="bg-white/95 backdrop-blur-sm border border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-display text-gray-900">
                      <Target className="w-5 h-5 text-gray-600" />
                    Financial Goals Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {userSetupData.mainGoals.slice(0, 3).map((goal, index) => {
                      const progress = Math.min(100, (index + 1) * 25 + Math.random() * 20);
                      const colors = ["bg-green-500", "bg-blue-500", "bg-purple-500"];
                      return (
                        <div key={goal} className="space-y-3">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              {getGoalIcon(goal)}
                              <span className="font-medium text-gray-700 font-primary">{goal}</span>
                            </div>
                            <span className="text-sm font-medium text-gray-600 font-primary">
                              {progress.toFixed(0)}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div 
                              className={`h-3 rounded-full transition-all duration-500 ${colors[index % colors.length]}`}
                              style={{ width: `${progress}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-500 font-primary">
                            <span>Started 2 weeks ago</span>
                            <span>${(progress * 10).toFixed(0)} saved</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          </div>
        </div>

 Floating Bottom Bar         <div className="fixed bottom-4 left-24 right-4 z-50">
          <div className="bg-white/95 backdrop-blur-md border border-gray-200/30 rounded-3xl shadow-2xl shadow-gray-500/8 hover:shadow-3xl hover:shadow-gray-500/15 transition-all duration-300">
            <div className="flex items-center justify-between h-16 px-6">
 Quick Actions               <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-2xl hover:bg-gray-700 transition-colors duration-200">
                  <Plus className="w-4 h-4" />
                  <span className="font-medium font-primary">Add Transaction</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 transition-colors duration-200">
                  <Target className="w-4 h-4" />
                  <span className="font-medium font-primary">Set Goal</span>
                </button>
              </div>

 Quick Stats               <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-sm text-gray-500 font-primary">This Month</div>
                  <div className="text-lg font-bold text-gray-900 font-display">
                    ${(totalIncome - totalExpenses).toFixed(0)}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 font-primary">Budget Used</div>
                  <div className="text-lg font-bold text-gray-900 font-display">
                    {budgetProgress.toFixed(0)}%
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 font-primary">Transactions</div>
                  <div className="text-lg font-bold text-gray-900 font-display">
                    {transactions.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
