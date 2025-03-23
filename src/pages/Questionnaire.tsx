
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

const Questionnaire = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  
  // Personal Information
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  
  // Health Information
  const [healthConditions, setHealthConditions] = useState<string[]>([]);
  const [allergies, setAllergies] = useState("");
  const [skinConcerns, setSkinConcerns] = useState<string[]>([]);
  const [hairConcerns, setHairConcerns] = useState<string[]>([]);
  
  // Lifestyle
  const [activityLevel, setActivityLevel] = useState("");
  const [sleepQuality, setSleepQuality] = useState("");
  const [stressLevel, setStressLevel] = useState(5);
  const [occupation, setOccupation] = useState("");
  
  // Diet Preferences
  const [dietType, setDietType] = useState("");
  const [mealPreference, setMealPreference] = useState("");
  const [dislikedFoods, setDislikedFoods] = useState("");
  const [location, setLocation] = useState("");
  
  // Goals
  const [fitnessGoals, setFitnessGoals] = useState<string[]>([]);
  const [wellnessGoals, setWellnessGoals] = useState<string[]>([]);
  const [timeframe, setTimeframe] = useState("");
  
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    } else {
      submitQuestionnaire();
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const submitQuestionnaire = () => {
    // Compile all the questionnaire data
    const questionnaireData = {
      personal: { age, gender, height, weight },
      health: { healthConditions, allergies, skinConcerns, hairConcerns },
      lifestyle: { activityLevel, sleepQuality, stressLevel, occupation },
      diet: { dietType, mealPreference, dislikedFoods, location },
      goals: { fitnessGoals, wellnessGoals, timeframe }
    };
    
    // Save to localStorage
    localStorage.setItem("questionnaireData", JSON.stringify(questionnaireData));
    
    toast({
      title: "Success",
      description: "Your questionnaire has been submitted! Generating your personalized recommendations.",
    });
    
    // Redirect to dashboard
    navigate("/dashboard");
  };
  
  const toggleHealthCondition = (condition: string) => {
    setHealthConditions(
      healthConditions.includes(condition)
        ? healthConditions.filter(c => c !== condition)
        : [...healthConditions, condition]
    );
  };
  
  const toggleSkinConcern = (concern: string) => {
    setSkinConcerns(
      skinConcerns.includes(concern)
        ? skinConcerns.filter(c => c !== concern)
        : [...skinConcerns, concern]
    );
  };
  
  const toggleHairConcern = (concern: string) => {
    setHairConcerns(
      hairConcerns.includes(concern)
        ? hairConcerns.filter(c => c !== concern)
        : [...hairConcerns, concern]
    );
  };
  
  const toggleFitnessGoal = (goal: string) => {
    setFitnessGoals(
      fitnessGoals.includes(goal)
        ? fitnessGoals.filter(g => g !== goal)
        : [...fitnessGoals, goal]
    );
  };
  
  const toggleWellnessGoal = (goal: string) => {
    setWellnessGoals(
      wellnessGoals.includes(goal)
        ? wellnessGoals.filter(g => g !== goal)
        : [...wellnessGoals, goal]
    );
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="container mx-auto py-12 px-4 mt-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-sm font-medium text-muted-foreground">
                Step {currentStep} of {totalSteps}
              </h2>
              <span className="text-sm font-medium text-muted-foreground">
                {Math.round((currentStep / totalSteps) * 100)}% Complete
              </span>
            </div>
            <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
          </div>
          
          <div className="glass rounded-2xl p-8 shadow-soft animate-fade-in mb-8">
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold mb-2">Personal Information</h1>
                  <p className="text-muted-foreground text-sm">
                    Let's start with some basic information about you
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="Enter your age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Gender</Label>
                    <RadioGroup value={gender} onValueChange={setGender}>
                      <div className="flex space-x-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="male" id="male" />
                          <Label htmlFor="male">Male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="female" id="female" />
                          <Label htmlFor="female">Female</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Other</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="Enter your height"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="Enter your weight"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}
            
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold mb-2">Health Information</h1>
                  <p className="text-muted-foreground text-sm">
                    Tell us about your health conditions and concerns
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Do you have any of the following health conditions?</Label>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      {["Diabetes", "Hypertension", "Heart Disease", "High Cholesterol", "Thyroid Issues", "Digestive Disorders", "Food Allergies", "None"].map((condition) => (
                        <div key={condition} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`condition-${condition}`} 
                            checked={healthConditions.includes(condition)}
                            onCheckedChange={() => toggleHealthCondition(condition)}
                          />
                          <Label htmlFor={`condition-${condition}`} className="text-sm">
                            {condition}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Label htmlFor="allergies">
                      Do you have any food allergies or intolerances?
                    </Label>
                    <Textarea
                      id="allergies"
                      placeholder="List any food allergies or intolerances"
                      value={allergies}
                      onChange={(e) => setAllergies(e.target.value)}
                      rows={3}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Label>Any skin concerns?</Label>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      {["Acne", "Dryness", "Aging", "Dullness", "Sensitivity", "Hyperpigmentation", "None"].map((concern) => (
                        <div key={concern} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`skin-${concern}`} 
                            checked={skinConcerns.includes(concern)}
                            onCheckedChange={() => toggleSkinConcern(concern)}
                          />
                          <Label htmlFor={`skin-${concern}`} className="text-sm">
                            {concern}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Label>Any hair concerns?</Label>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      {["Hair Loss", "Dandruff", "Dryness", "Oiliness", "Gray Hair", "Split Ends", "None"].map((concern) => (
                        <div key={concern} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`hair-${concern}`} 
                            checked={hairConcerns.includes(concern)}
                            onCheckedChange={() => toggleHairConcern(concern)}
                          />
                          <Label htmlFor={`hair-${concern}`} className="text-sm">
                            {concern}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold mb-2">Lifestyle</h1>
                  <p className="text-muted-foreground text-sm">
                    Tell us about your daily routine and lifestyle
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="activity-level">How would you describe your activity level?</Label>
                    <Select value={activityLevel} onValueChange={setActivityLevel}>
                      <SelectTrigger id="activity-level">
                        <SelectValue placeholder="Select your activity level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                        <SelectItem value="light">Lightly active (light exercise 1-3 days/week)</SelectItem>
                        <SelectItem value="moderate">Moderately active (moderate exercise 3-5 days/week)</SelectItem>
                        <SelectItem value="very">Very active (hard exercise 6-7 days/week)</SelectItem>
                        <SelectItem value="extra">Extra active (very hard exercise & physical job)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Label htmlFor="sleep-quality">How would you rate your sleep quality?</Label>
                    <Select value={sleepQuality} onValueChange={setSleepQuality}>
                      <SelectTrigger id="sleep-quality">
                        <SelectValue placeholder="Select your sleep quality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="poor">Poor (Less than 5 hours, frequent disruptions)</SelectItem>
                        <SelectItem value="fair">Fair (5-6 hours, some disruptions)</SelectItem>
                        <SelectItem value="good">Good (7-8 hours, few disruptions)</SelectItem>
                        <SelectItem value="excellent">Excellent (8+ hours, uninterrupted)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Label>
                      On a scale of 1-10, how would you rate your average stress level?
                      <span className="ml-2 text-muted-foreground">
                        ({stressLevel}/10)
                      </span>
                    </Label>
                    <Slider
                      min={1}
                      max={10}
                      step={1}
                      value={[stressLevel]}
                      onValueChange={(value) => setStressLevel(value[0])}
                      className="py-4"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Very Low Stress</span>
                      <span>Moderate Stress</span>
                      <span>Very High Stress</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Label htmlFor="occupation">What is your occupation?</Label>
                    <Input
                      id="occupation"
                      placeholder="E.g., Office worker, Teacher, etc."
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}
            
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold mb-2">Dietary Preferences</h1>
                  <p className="text-muted-foreground text-sm">
                    Tell us about your eating habits and preferences
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="diet-type">Do you follow any specific diet?</Label>
                    <Select value={dietType} onValueChange={setDietType}>
                      <SelectTrigger id="diet-type">
                        <SelectValue placeholder="Select your diet type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="omnivore">Omnivore (Eat Everything)</SelectItem>
                        <SelectItem value="vegetarian">Vegetarian</SelectItem>
                        <SelectItem value="vegan">Vegan</SelectItem>
                        <SelectItem value="pescatarian">Pescatarian</SelectItem>
                        <SelectItem value="paleo">Paleo</SelectItem>
                        <SelectItem value="keto">Keto</SelectItem>
                        <SelectItem value="mediterranean">Mediterranean</SelectItem>
                        <SelectItem value="gluten-free">Gluten-Free</SelectItem>
                        <SelectItem value="dairy-free">Dairy-Free</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Label htmlFor="meal-preference">How many meals do you prefer per day?</Label>
                    <Select value={mealPreference} onValueChange={setMealPreference}>
                      <SelectTrigger id="meal-preference">
                        <SelectValue placeholder="Select your meal preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2-meals">2 meals</SelectItem>
                        <SelectItem value="3-meals">3 meals</SelectItem>
                        <SelectItem value="4-meals">3 meals + 1 snack</SelectItem>
                        <SelectItem value="5-meals">3 meals + 2 snacks</SelectItem>
                        <SelectItem value="6-meals">6 small meals</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Label htmlFor="disliked-foods">
                      Are there any foods you strongly dislike or avoid?
                    </Label>
                    <Textarea
                      id="disliked-foods"
                      placeholder="E.g., Mushrooms, Olives, etc."
                      value={dislikedFoods}
                      onChange={(e) => setDislikedFoods(e.target.value)}
                      rows={3}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">
                      What's your general location? (For seasonal food recommendations)
                    </Label>
                    <Input
                      id="location"
                      placeholder="E.g., New York, USA"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}
            
            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold mb-2">Your Goals</h1>
                  <p className="text-muted-foreground text-sm">
                    Tell us what you'd like to achieve
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>What are your fitness goals? (Select all that apply)</Label>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      {["Weight Loss", "Weight Gain", "Muscle Building", "Endurance", "Flexibility", "Strength", "Overall Fitness", "Sports Performance"].map((goal) => (
                        <div key={goal} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`fitness-${goal}`} 
                            checked={fitnessGoals.includes(goal)}
                            onCheckedChange={() => toggleFitnessGoal(goal)}
                          />
                          <Label htmlFor={`fitness-${goal}`} className="text-sm">
                            {goal}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Label>What are your wellness goals? (Select all that apply)</Label>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      {["Better Sleep", "Stress Reduction", "Mental Clarity", "Energy Boost", "Digestive Health", "Skin Health", "Immune Support", "Heart Health"].map((goal) => (
                        <div key={goal} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`wellness-${goal}`} 
                            checked={wellnessGoals.includes(goal)}
                            onCheckedChange={() => toggleWellnessGoal(goal)}
                          />
                          <Label htmlFor={`wellness-${goal}`} className="text-sm">
                            {goal}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Label htmlFor="timeframe">What is your timeframe for achieving these goals?</Label>
                    <Select value={timeframe} onValueChange={setTimeframe}>
                      <SelectTrigger id="timeframe">
                        <SelectValue placeholder="Select your timeframe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-month">1 month</SelectItem>
                        <SelectItem value="3-months">3 months</SelectItem>
                        <SelectItem value="6-months">6 months</SelectItem>
                        <SelectItem value="1-year">1 year</SelectItem>
                        <SelectItem value="ongoing">Ongoing lifestyle change</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="h-12 px-6"
            >
              Previous
            </Button>
            
            <Button 
              onClick={nextStep}
              className="h-12 px-6"
            >
              {currentStep === totalSteps ? "Submit" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
