import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { ArrowLeft, ArrowRight, Check, User, DollarSign, Target, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Setup = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    university: "",
    course: "",
    graduationYear: "",
    
    hasPartTimeJob: "",
    monthlyIncome: "",
    hasFinancialAid: "",
    monthlyAid: "",
    
    monthlyBudget: "",
    paysRent: "",
    monthlyRent: "",
    hasMealPlan: "",
    
    mainGoals: []
  });

  const totalSteps = 4;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGoalToggle = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      mainGoals: prev.mainGoals.includes(goal)
        ? prev.mainGoals.filter(g => g !== goal)
        : [...prev.mainGoals, goal]
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Setup complete:", formData);
      localStorage.setItem('userSetupData', JSON.stringify(formData));
      navigate("/dashboard");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.fullName && formData.university && formData.course;
      case 2:
        return formData.hasPartTimeJob && formData.hasFinancialAid;
      case 3:
        return formData.monthlyBudget;
      case 4:
        return formData.mainGoals.length > 0;
      default:
        return false;
    }
  };

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1: return <User className="w-5 h-5" />;
      case 2: return <DollarSign className="w-5 h-5" />;
      case 3: return <Target className="w-5 h-5" />;
      case 4: return <Settings className="w-5 h-5" />;
      default: return <Check className="w-5 h-5" />;
    }
  };

  const getStepTitle = (step: number) => {
    switch (step) {
      case 1: return "Basic Information";
      case 2: return "Financial Situation";
      case 3: return "Expenses & Budget";
      case 4: return "Goals & Preferences";
      default: return "Complete";
    }
  };

  const getStepDescription = (step: number) => {
    switch (step) {
      case 1: return "Tell us a bit about yourself";
      case 2: return "Help us understand your income sources";
      case 3: return "Set up your spending limits";
      case 4: return "Customize your experience";
      default: return "You're all set!";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
 Grid Background       <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
 Progress Indicator           <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                {getStepIcon(currentStep)}
                <h1 className="text-2xl font-bold text-gray-900 font-display">
                  {getStepTitle(currentStep)}
                </h1>
              </div>
              <span className="text-sm text-gray-500 font-primary">
                Step {currentStep} of {totalSteps}
              </span>
            </div>
            <p className="text-gray-600 mb-6 font-primary">
              {getStepDescription(currentStep)}
            </p>
            
 Progress Bar             <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

 Setup Card           <Card className="bg-white/95 backdrop-blur-sm border border-gray-200 shadow-xl">
            <CardContent className="p-8">
 Step 1: Basic Information               {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-gray-700 font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className="border-gray-300 focus:border-green-500 focus:ring-green-500 text-gray-900"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="university" className="text-gray-700 font-medium">
                      University/College *
                    </Label>
                    <Input
                      id="university"
                      type="text"
                      placeholder="e.g., University of California"
                      value={formData.university}
                      onChange={(e) => handleInputChange("university", e.target.value)}
                      className="border-gray-300 focus:border-green-500 focus:ring-green-500 text-gray-900"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="course" className="text-gray-700 font-medium">
                      Course/Program *
                    </Label>
                    <Input
                      id="course"
                      type="text"
                      placeholder="e.g., Computer Science"
                      value={formData.course}
                      onChange={(e) => handleInputChange("course", e.target.value)}
                      className="border-gray-300 focus:border-green-500 focus:ring-green-500 text-gray-900"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="graduationYear" className="text-gray-700 font-medium">
                      Expected Graduation Year
                    </Label>
                    <Input
                      id="graduationYear"
                      type="number"
                      placeholder="e.g., 2025"
                      value={formData.graduationYear}
                      onChange={(e) => handleInputChange("graduationYear", e.target.value)}
                      className="border-gray-300 focus:border-green-500 focus:ring-green-500 text-gray-900"
                    />
                  </div>
                </div>
              )}

 Step 2: Financial Situation               {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <Label className="text-gray-700 font-medium">
                      Do you have a part-time job? *
                    </Label>
                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant={formData.hasPartTimeJob === "yes" ? "default" : "outline"}
                        onClick={() => handleInputChange("hasPartTimeJob", "yes")}
                        className={`flex-1 ${formData.hasPartTimeJob === "yes" ? "bg-green-600 hover:bg-green-700" : ""}`}
                      >
                        Yes
                      </Button>
                      <Button
                        type="button"
                        variant={formData.hasPartTimeJob === "no" ? "default" : "outline"}
                        onClick={() => handleInputChange("hasPartTimeJob", "no")}
                        className={`flex-1 ${formData.hasPartTimeJob === "no" ? "bg-green-600 hover:bg-green-700" : ""}`}
                      >
                        No
                      </Button>
                    </div>
                  </div>

                  {formData.hasPartTimeJob === "yes" && (
                    <div className="space-y-2">
                      <Label htmlFor="monthlyIncome" className="text-gray-700 font-medium">
                        Monthly Income
                      </Label>
                      <Input
                        id="monthlyIncome"
                        type="number"
                        placeholder="e.g., 800"
                        value={formData.monthlyIncome}
                        onChange={(e) => handleInputChange("monthlyIncome", e.target.value)}
                        className="border-gray-300 focus:border-green-500 focus:ring-green-500 text-gray-900"
                      />
                    </div>
                  )}

                  <div className="space-y-4">
                    <Label className="text-gray-700 font-medium">
                      Do you receive financial aid/loans? *
                    </Label>
                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant={formData.hasFinancialAid === "yes" ? "default" : "outline"}
                        onClick={() => handleInputChange("hasFinancialAid", "yes")}
                        className={`flex-1 ${formData.hasFinancialAid === "yes" ? "bg-green-600 hover:bg-green-700" : ""}`}
                      >
                        Yes
                      </Button>
                      <Button
                        type="button"
                        variant={formData.hasFinancialAid === "no" ? "default" : "outline"}
                        onClick={() => handleInputChange("hasFinancialAid", "no")}
                        className={`flex-1 ${formData.hasFinancialAid === "no" ? "bg-green-600 hover:bg-green-700" : ""}`}
                      >
                        No
                      </Button>
                    </div>
                  </div>

                  {formData.hasFinancialAid === "yes" && (
                    <div className="space-y-2">
                      <Label htmlFor="monthlyAid" className="text-gray-700 font-medium">
                        Monthly Financial Aid
                      </Label>
                      <Input
                        id="monthlyAid"
                        type="number"
                        placeholder="e.g., 1200"
                        value={formData.monthlyAid}
                        onChange={(e) => handleInputChange("monthlyAid", e.target.value)}
                        className="border-gray-300 focus:border-green-500 focus:ring-green-500 text-gray-900"
                      />
                    </div>
                  )}
                </div>
              )}

 Step 3: Expenses & Budget               {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="monthlyBudget" className="text-gray-700 font-medium">
                      Monthly Budget Goal *
                    </Label>
                    <Input
                      id="monthlyBudget"
                      type="number"
                      placeholder="e.g., 1500"
                      value={formData.monthlyBudget}
                      onChange={(e) => handleInputChange("monthlyBudget", e.target.value)}
                      className="border-gray-300 focus:border-green-500 focus:ring-green-500 text-gray-900"
                    />
                  </div>

                  <div className="space-y-4">
                    <Label className="text-gray-700 font-medium">
                      Do you pay rent?
                    </Label>
                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant={formData.paysRent === "yes" ? "default" : "outline"}
                        onClick={() => handleInputChange("paysRent", "yes")}
                        className={`flex-1 ${formData.paysRent === "yes" ? "bg-green-600 hover:bg-green-700" : ""}`}
                      >
                        Yes
                      </Button>
                      <Button
                        type="button"
                        variant={formData.paysRent === "no" ? "default" : "outline"}
                        onClick={() => handleInputChange("paysRent", "no")}
                        className={`flex-1 ${formData.paysRent === "no" ? "bg-green-600 hover:bg-green-700" : ""}`}
                      >
                        No
                      </Button>
                    </div>
                  </div>

                  {formData.paysRent === "yes" && (
                    <div className="space-y-2">
                      <Label htmlFor="monthlyRent" className="text-gray-700 font-medium">
                        Monthly Rent
                      </Label>
                      <Input
                        id="monthlyRent"
                        type="number"
                        placeholder="e.g., 800"
                        value={formData.monthlyRent}
                        onChange={(e) => handleInputChange("monthlyRent", e.target.value)}
                        className="border-gray-300 focus:border-green-500 focus:ring-green-500 text-gray-900"
                      />
                    </div>
                  )}

                  <div className="space-y-4">
                    <Label className="text-gray-700 font-medium">
                      Do you have a meal plan?
                    </Label>
                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant={formData.hasMealPlan === "yes" ? "default" : "outline"}
                        onClick={() => handleInputChange("hasMealPlan", "yes")}
                        className={`flex-1 ${formData.hasMealPlan === "yes" ? "bg-green-600 hover:bg-green-700" : ""}`}
                      >
                        Yes
                      </Button>
                      <Button
                        type="button"
                        variant={formData.hasMealPlan === "no" ? "default" : "outline"}
                        onClick={() => handleInputChange("hasMealPlan", "no")}
                        className={`flex-1 ${formData.hasMealPlan === "no" ? "bg-green-600 hover:bg-green-700" : ""}`}
                      >
                        No
                      </Button>
                    </div>
                  </div>
                </div>
              )}

 Step 4: Goals & Preferences               {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <Label className="text-gray-700 font-medium">
                      What are your financial goals? (Select all that apply) *
                    </Label>
                    <p className="text-sm text-gray-500">
                      Choose one or more goals to help us personalize your dashboard
                    </p>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        "Save money for emergencies",
                        "Track spending habits",
                        "Build credit score",
                        "Pay off student loans",
                        "Save for post-graduation",
                        "Just stay organized"
                      ].map((goal) => (
                        <Button
                          key={goal}
                          type="button"
                          variant={formData.mainGoals.includes(goal) ? "default" : "outline"}
                          onClick={() => handleGoalToggle(goal)}
                          className={`justify-start h-auto p-4 text-left ${formData.mainGoals.includes(goal) ? "bg-green-600 hover:bg-green-700" : ""}`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                              formData.mainGoals.includes(goal) 
                                ? "bg-white border-white" 
                                : "border-gray-300"
                            }`}>
                              {formData.mainGoals.includes(goal) && (
                                <Check className="w-3 h-3 text-green-600" />
                              )}
                            </div>
                            {goal}
                          </div>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

 Navigation Buttons               <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>

                <div className="flex gap-3">
                  {currentStep < totalSteps && (
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={handleSkip}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      Skip
                    </Button>
                  )}
                  
                  <Button
                    type="button"
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                  >
                    {currentStep === totalSteps ? "Complete Setup" : "Next"}
                    {currentStep < totalSteps && <ArrowRight className="w-4 h-4" />}
                    {currentStep === totalSteps && <Check className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Setup;
