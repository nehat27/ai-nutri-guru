
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Dashboard = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  const [userName, setUserName] = useState("User");
  const [loadingMealPlan, setLoadingMealPlan] = useState(true);
  
  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem("authenticated") === "true";
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    
    // Get user data
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      if (user.name) {
        setUserName(user.name.split(" ")[0]);
      }
    }
    
    // Simulate API loading
    const timer = setTimeout(() => {
      setLoadingMealPlan(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  // Mock data for charts
  const weeklyProgress = [
    { day: "Mon", calories: 1800, target: 2000 },
    { day: "Tue", calories: 1950, target: 2000 },
    { day: "Wed", calories: 2100, target: 2000 },
    { day: "Thu", calories: 1750, target: 2000 },
    { day: "Fri", calories: 1900, target: 2000 },
    { day: "Sat", calories: 2300, target: 2000 },
    { day: "Sun", calories: 2200, target: 2000 },
  ];
  
  const macroData = [
    { name: "Protein", value: 30 },
    { name: "Carbs", value: 45 },
    { name: "Fats", value: 25 },
  ];
  
  const MACRO_COLORS = ["#10b981", "#6366f1", "#f59e0b"];
  
  const breakfastItems = [
    {
      name: "Greek Yogurt Parfait",
      description: "Greek yogurt with fresh berries, honey, and granola",
      nutrients: { calories: 320, protein: 18, carbs: 42, fat: 8 },
      tags: ["High Protein", "Vegetarian"]
    },
    {
      name: "Avocado Toast",
      description: "Whole grain toast with smashed avocado, poached egg, and cherry tomatoes",
      nutrients: { calories: 350, protein: 15, carbs: 30, fat: 20 },
      tags: ["Healthy Fats", "Vegetarian"]
    },
    {
      name: "Berry Smoothie Bowl",
      description: "Mixed berry smoothie topped with sliced banana, chia seeds, and coconut flakes",
      nutrients: { calories: 380, protein: 12, carbs: 65, fat: 10 },
      tags: ["Antioxidants", "Vegan"]
    }
  ];
  
  const lunchItems = [
    {
      name: "Quinoa Salad Bowl",
      description: "Quinoa with roasted vegetables, chickpeas, and tahini dressing",
      nutrients: { calories: 420, protein: 16, carbs: 58, fat: 15 },
      tags: ["Plant-Based", "Fiber Rich"]
    },
    {
      name: "Grilled Chicken Wrap",
      description: "Grilled chicken with mixed greens, avocado, and greek yogurt sauce in a whole grain wrap",
      nutrients: { calories: 450, protein: 35, carbs: 40, fat: 18 },
      tags: ["High Protein", "Lean Meat"]
    },
    {
      name: "Mediterranean Salad",
      description: "Mixed greens with cucumber, tomatoes, olives, feta cheese, and olive oil dressing",
      nutrients: { calories: 380, protein: 12, carbs: 20, fat: 28 },
      tags: ["Heart Healthy", "Low Carb"]
    }
  ];
  
  const dinnerItems = [
    {
      name: "Baked Salmon",
      description: "Baked salmon with quinoa and roasted Brussels sprouts",
      nutrients: { calories: 480, protein: 40, carbs: 30, fat: 22 },
      tags: ["Omega-3", "High Protein"]
    },
    {
      name: "Vegetable Stir Fry",
      description: "Tofu and mixed vegetable stir fry with brown rice and teriyaki sauce",
      nutrients: { calories: 420, protein: 20, carbs: 65, fat: 12 },
      tags: ["Plant-Based", "High Fiber"]
    },
    {
      name: "Turkey Chili",
      description: "Lean ground turkey chili with beans, tomatoes, and spices",
      nutrients: { calories: 380, protein: 35, carbs: 40, fat: 10 },
      tags: ["High Protein", "Lean Meat"]
    }
  ];
  
  const snackItems = [
    {
      name: "Apple with Almond Butter",
      description: "Fresh apple slices with a tablespoon of natural almond butter",
      nutrients: { calories: 180, protein: 5, carbs: 25, fat: 10 },
      tags: ["Healthy Fats", "Fiber"]
    },
    {
      name: "Protein Smoothie",
      description: "Protein powder with banana, spinach, and almond milk",
      nutrients: { calories: 220, protein: 25, carbs: 20, fat: 5 },
      tags: ["High Protein", "Post-Workout"]
    },
    {
      name: "Hummus with Vegetables",
      description: "Homemade hummus with carrot, cucumber, and bell pepper sticks",
      nutrients: { calories: 150, protein: 6, carbs: 18, fat: 8 },
      tags: ["Plant-Based", "Fiber Rich"]
    }
  ];
  
  const exerciseRecommendations = [
    {
      name: "Morning Yoga",
      description: "15-minute morning yoga routine for flexibility and mental clarity",
      duration: "15 mins",
      intensity: "Low",
      benefits: ["Flexibility", "Stress Reduction", "Mental Focus"]
    },
    {
      name: "HIIT Workout",
      description: "High-intensity interval training to boost metabolism and burn calories",
      duration: "25 mins",
      intensity: "High",
      benefits: ["Fat Burning", "Cardiovascular Health", "Strength"]
    },
    {
      name: "Evening Walk",
      description: "Brisk evening walk to help with digestion and relaxation before sleep",
      duration: "30 mins",
      intensity: "Low",
      benefits: ["Digestion Aid", "Stress Reduction", "Sleep Quality"]
    }
  ];
  
  const weeklyChallenge = {
    title: "7-Day Hydration Challenge",
    description: "Drink at least 8 glasses of water every day for a week to boost energy and skin health",
    progress: 3,
    goal: 7,
    participants: 243,
    tips: [
      "Keep a water bottle with you throughout the day",
      "Set reminders on your phone to drink water",
      "Try infusing water with fruits for added flavor",
      "Drink a glass of water before each meal"
    ]
  };
  
  const nutritionTips = [
    {
      title: "Mindful Eating",
      description: "Practice mindful eating by eliminating distractions during meals and focusing on the taste, texture, and smell of your food. This can help prevent overeating and improve digestion."
    },
    {
      title: "Balanced Plate Method",
      description: "Use the balanced plate method: fill half your plate with non-starchy vegetables, one quarter with lean protein, and one quarter with whole grains or starchy vegetables."
    },
    {
      title: "Healthy Snacking",
      description: "Choose snacks that combine protein and fiber to keep you satisfied between meals. Examples include Greek yogurt with berries, apple with nut butter, or hummus with vegetables."
    }
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6 mt-16">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold">Welcome back, {userName}</h1>
          <p className="text-muted-foreground">Here's your personalized nutrition and wellness plan</p>
        </div>
        
        <Tabs defaultValue="meal-plan" className="space-y-8">
          <TabsList className="grid grid-cols-4 h-12 glass">
            <TabsTrigger value="meal-plan">Meal Plan</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="fitness">Fitness</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
          </TabsList>
          
          {/* Meal Plan Tab */}
          <TabsContent value="meal-plan" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
              {/* Daily Stats */}
              <Card className="xl:col-span-1 glass">
                <CardHeader>
                  <CardTitle>Daily Summary</CardTitle>
                  <CardDescription>Your nutrition at a glance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Calories</span>
                      <span className="font-medium">1,850 / 2,000 kcal</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Protein</span>
                      <span className="font-medium">85 / 100 g</span>
                    </div>
                    <Progress value={85} className="h-2 bg-secondary/50" indicatorClassName="bg-emerald-500" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Carbs</span>
                      <span className="font-medium">220 / 250 g</span>
                    </div>
                    <Progress value={88} className="h-2 bg-secondary/50" indicatorClassName="bg-indigo-500" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Fats</span>
                      <span className="font-medium">55 / 65 g</span>
                    </div>
                    <Progress value={85} className="h-2 bg-secondary/50" indicatorClassName="bg-amber-500" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Hydration</span>
                      <span className="font-medium">5 / 8 glasses</span>
                    </div>
                    <Progress value={62} className="h-2 bg-secondary/50" indicatorClassName="bg-blue-500" />
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full h-60">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={macroData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {macroData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={MACRO_COLORS[index % MACRO_COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardFooter>
              </Card>
              
              {/* Meal Plan */}
              <Card className="xl:col-span-3 glass">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div>
                    <CardTitle>Today's Meal Plan</CardTitle>
                    <CardDescription>Personalized for your nutrition goals</CardDescription>
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="12" cy="5" r="1" />
                          <circle cx="12" cy="19" r="1" />
                        </svg>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Regenerate Meal Plan</DropdownMenuItem>
                      <DropdownMenuItem>Adjust Preferences</DropdownMenuItem>
                      <DropdownMenuItem>Save Meal Plan</DropdownMenuItem>
                      <DropdownMenuItem>Print Meal Plan</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>
                
                <CardContent className="pt-4">
                  {loadingMealPlan ? (
                    <div className="space-y-4">
                      <div className="h-24 rounded-md bg-secondary/40 animate-pulse"></div>
                      <div className="h-24 rounded-md bg-secondary/40 animate-pulse"></div>
                      <div className="h-24 rounded-md bg-secondary/40 animate-pulse"></div>
                      <div className="h-24 rounded-md bg-secondary/40 animate-pulse"></div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {/* Breakfast */}
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                              <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                              <line x1="6" y1="1" x2="6" y2="4"></line>
                              <line x1="10" y1="1" x2="10" y2="4"></line>
                              <line x1="14" y1="1" x2="14" y2="4"></line>
                            </svg>
                          </div>
                          <h3 className="text-lg font-semibold">Breakfast (7:00 - 9:00 AM)</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {breakfastItems.map((item, index) => (
                            <MealCard key={`breakfast-${index}`} meal={item} />
                          ))}
                        </div>
                      </div>
                      
                      {/* Lunch */}
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                              <line x1="8" y1="6" x2="21" y2="6"></line>
                              <line x1="8" y1="12" x2="21" y2="12"></line>
                              <line x1="8" y1="18" x2="21" y2="18"></line>
                              <line x1="3" y1="6" x2="3.01" y2="6"></line>
                              <line x1="3" y1="12" x2="3.01" y2="12"></line>
                              <line x1="3" y1="18" x2="3.01" y2="18"></line>
                            </svg>
                          </div>
                          <h3 className="text-lg font-semibold">Lunch (12:00 - 2:00 PM)</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {lunchItems.map((item, index) => (
                            <MealCard key={`lunch-${index}`} meal={item} />
                          ))}
                        </div>
                      </div>
                      
                      {/* Dinner */}
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                              <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
                              <path d="M7 2v20"></path>
                              <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
                            </svg>
                          </div>
                          <h3 className="text-lg font-semibold">Dinner (6:00 - 8:00 PM)</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {dinnerItems.map((item, index) => (
                            <MealCard key={`dinner-${index}`} meal={item} />
                          ))}
                        </div>
                      </div>
                      
                      {/* Snacks */}
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                              <path d="M4 11h16"></path>
                              <path d="M12 2v20"></path>
                              <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                            </svg>
                          </div>
                          <h3 className="text-lg font-semibold">Snacks (Any Time)</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {snackItems.map((item, index) => (
                            <MealCard key={`snack-${index}`} meal={item} />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Nutrition Tab */}
          <TabsContent value="nutrition" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Weekly Progress</CardTitle>
                  <CardDescription>Your caloric intake vs. target</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={weeklyProgress}>
                        <defs>
                          <linearGradient id="colorCalories" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                        <YAxis stroke="hsl(var(--muted-foreground))" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "hsl(var(--card))",
                            borderColor: "hsl(var(--border))",
                            borderRadius: "var(--radius)"
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="calories"
                          stroke="hsl(var(--primary))"
                          fillOpacity={1}
                          fill="url(#colorCalories)"
                          name="Calories"
                        />
                        <Area
                          type="monotone"
                          dataKey="target"
                          stroke="hsl(var(--muted-foreground))"
                          strokeDasharray="3 3"
                          fill="transparent"
                          name="Target"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Nutrient Balance</CardTitle>
                  <CardDescription>Your macro and micronutrient intake</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Protein (30%)</span>
                      <span className="text-sm font-medium">85g / 100g</span>
                    </div>
                    <Progress value={85} className="h-2" indicatorClassName="bg-emerald-500" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Carbohydrates (45%)</span>
                      <span className="text-sm font-medium">220g / 250g</span>
                    </div>
                    <Progress value={88} className="h-2" indicatorClassName="bg-indigo-500" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Healthy Fats (25%)</span>
                      <span className="text-sm font-medium">55g / 65g</span>
                    </div>
                    <Progress value={85} className="h-2" indicatorClassName="bg-amber-500" />
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Vitamins & Minerals</h3>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-xs">Vitamin D</span>
                        <span className="text-xs font-medium">75%</span>
                      </div>
                      <Progress value={75} className="h-1.5" />
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-xs">Calcium</span>
                        <span className="text-xs font-medium">90%</span>
                      </div>
                      <Progress value={90} className="h-1.5" />
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-xs">Iron</span>
                        <span className="text-xs font-medium">65%</span>
                      </div>
                      <Progress value={65} className="h-1.5" />
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-xs">Vitamin C</span>
                        <span className="text-xs font-medium">120%</span>
                      </div>
                      <Progress value={100} className="h-1.5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Nutrition Tips</CardTitle>
                  <CardDescription>Evidence-based nutrition advice</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {nutritionTips.map((tip, index) => (
                    <div key={index} className="p-4 rounded-lg bg-secondary/30">
                      <h3 className="font-semibold mb-2">{tip.title}</h3>
                      <p className="text-sm text-muted-foreground">{tip.description}</p>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View More Tips
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <Card className="glass">
              <CardHeader>
                <CardTitle>Nutritional Analysis</CardTitle>
                <CardDescription>Detailed breakdown of your nutrition</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="p-4 rounded-lg bg-secondary/30 text-center">
                      <div className="text-4xl font-bold">1,850</div>
                      <div className="text-sm text-muted-foreground">Calories</div>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-secondary/30 text-center">
                      <div className="text-4xl font-bold text-emerald-500">85g</div>
                      <div className="text-sm text-muted-foreground">Protein</div>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-secondary/30 text-center">
                      <div className="text-4xl font-bold text-indigo-500">220g</div>
                      <div className="text-sm text-muted-foreground">Carbs</div>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-secondary/30 text-center">
                      <div className="text-4xl font-bold text-amber-500">55g</div>
                      <div className="text-sm text-muted-foreground">Fats</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Additional Nutrients</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-sm">Fiber</span>
                          <span className="text-sm font-medium">28g / 30g</span>
                        </div>
                        <Progress value={93} className="h-2" />
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-sm">Sugar</span>
                          <span className="text-sm font-medium">35g / 50g</span>
                        </div>
                        <Progress value={70} className="h-2" />
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-sm">Sodium</span>
                          <span className="text-sm font-medium">1,800mg / 2,300mg</span>
                        </div>
                        <Progress value={78} className="h-2" />
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-sm">Potassium</span>
                          <span className="text-sm font-medium">3,100mg / 3,500mg</span>
                        </div>
                        <Progress value={89} className="h-2" />
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-sm">Calcium</span>
                          <span className="text-sm font-medium">900mg / 1,000mg</span>
                        </div>
                        <Progress value={90} className="h-2" />
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-sm">Iron</span>
                          <span className="text-sm font-medium">12mg / 18mg</span>
                        </div>
                        <Progress value={67} className="h-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Fitness Tab */}
          <TabsContent value="fitness" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 glass">
                <CardHeader>
                  <CardTitle>Recommended Exercises</CardTitle>
                  <CardDescription>Based on your fitness goals and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {exerciseRecommendations.map((exercise, index) => (
                    <div key={index} className="bg-secondary/30 rounded-lg p-4">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="font-semibold mb-1">{exercise.name}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{exercise.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-3">
                            {exercise.benefits.map((benefit, i) => (
                              <Badge key={i} variant="outline" className="bg-primary/10">
                                {benefit}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex gap-3 mt-3 md:mt-0">
                          <div className="text-center">
                            <div className="text-xs text-muted-foreground">Duration</div>
                            <div className="font-medium">{exercise.duration}</div>
                          </div>
                          
                          <div className="text-center">
                            <div className="text-xs text-muted-foreground">Intensity</div>
                            <div className="font-medium">{exercise.intensity}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end mt-2">
                        <Button variant="ghost" size="sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                          Watch Tutorial
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Full Workout Plan
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Fitness Tracker</CardTitle>
                  <CardDescription>Track your activity and progress</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Today's Activity</h3>
                    
                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-3 rounded-lg bg-secondary/30 text-center">
                        <div className="text-2xl font-bold">3,241</div>
                        <div className="text-xs text-muted-foreground">Steps</div>
                      </div>
                      
                      <div className="p-3 rounded-lg bg-secondary/30 text-center">
                        <div className="text-2xl font-bold">25</div>
                        <div className="text-xs text-muted-foreground">Minutes</div>
                      </div>
                      
                      <div className="p-3 rounded-lg bg-secondary/30 text-center">
                        <div className="text-2xl font-bold">180</div>
                        <div className="text-xs text-muted-foreground">Calories</div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Weekly Activity</h3>
                    
                    <div className="h-40">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={weeklyProgress}>
                          <defs>
                            <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
                              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1} />
                            </linearGradient>
                          </defs>
                          <XAxis dataKey="day" tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                          <YAxis tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "hsl(var(--card))",
                              borderColor: "hsl(var(--border))",
                              borderRadius: "var(--radius)",
                              fontSize: "12px"
                            }}
                          />
                          <Area
                            type="monotone"
                            dataKey="calories"
                            stroke="hsl(var(--primary))"
                            fillOpacity={1}
                            fill="url(#colorActivity)"
                            name="Active Minutes"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Your Recent Achievements</h3>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                            <path d="M8.21 13.89L7 23l9-9-8.99-9-.79 9.01"></path>
                            <path d="M13.33 6.67C13.33 4.28 11.39 2.34 9 2.34S4.67 4.28 4.67 6.67c0 2.1 1.45 3.82 3.33 4.28"></path>
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium">3-Day Streak</div>
                          <div className="text-xs text-muted-foreground">Keep it up!</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                            <path d="M8 9l5 5 5-5"></path>
                            <path d="M21 15V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path>
                            <path d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium">First Workout Complete</div>
                          <div className="text-xs text-muted-foreground">You did it!</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Log Activity
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          {/* Challenges Tab */}
          <TabsContent value="challenges" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 glass">
                <CardHeader>
                  <CardTitle>Weekly Challenge</CardTitle>
                  <CardDescription>Join others in this community challenge</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-secondary/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">{weeklyChallenge.title}</h3>
                    <p className="text-muted-foreground mb-6">{weeklyChallenge.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Your Progress</span>
                        <span className="text-sm font-medium">{weeklyChallenge.progress} / {weeklyChallenge.goal} days</span>
                      </div>
                      <Progress value={(weeklyChallenge.progress / weeklyChallenge.goal) * 100} className="h-3" />
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <path d="M5 17V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12"></path>
                            <path d="M15 21v-4a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v4"></path>
                            <circle cx="9" cy="7" r="2"></circle>
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Participants</div>
                          <div className="font-medium">{weeklyChallenge.participants}</div>
                        </div>
                      </div>
                      
                      <Button size="sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="8.5" cy="7" r="4"></circle>
                          <line x1="20" y1="8" x2="20" y2="14"></line>
                          <line x1="23" y1="11" x2="17" y2="11"></line>
                        </svg>
                        Invite Friends
                      </Button>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3">Tips for Success</h4>
                      <ul className="space-y-2">
                        {weeklyChallenge.tips.map((tip, index) => (
                          <li key={index} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1 mr-2">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span className="text-sm">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">
                    View All Challenges
                  </Button>
                  <Button>
                    Log Today's Progress
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Leaderboard</CardTitle>
                  <CardDescription>Top participants in the challenge</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                        <div className="flex items-center space-x-3">
                          <div className="w-7 h-7 flex items-center justify-center font-medium">
                            {index + 1}
                          </div>
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            {index === 0 ? (
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                                <circle cx="12" cy="12" r="10"></circle>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            )}
                          </div>
                          <div>
                            <div className="text-sm font-medium">
                              {index === 2 ? "You" : `User ${100 + index}`}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {index === 0 ? "7/7 days" : index === 1 ? "6/7 days" : index === 2 ? "3/7 days" : index === 3 ? "2/7 days" : "1/7 days"}
                            </div>
                          </div>
                        </div>
                        
                        {index === 0 && (
                          <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20">
                            Gold
                          </Badge>
                        )}
                        {index === 1 && (
                          <Badge variant="outline" className="bg-slate-400/10 text-slate-400 border-slate-400/20">
                            Silver
                          </Badge>
                        )}
                        {index === 2 && (
                          <Badge variant="outline" className="bg-amber-700/10 text-amber-700 border-amber-700/20">
                            Bronze
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Your Challenge History</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="text-sm">Completed Challenges</div>
                        <div className="font-medium">8</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm">Success Rate</div>
                        <div className="font-medium">75%</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm">Best Streak</div>
                        <div className="font-medium">14 days</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Statistics
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const MealCard = ({ meal }: { 
  meal: { 
    name: string; 
    description: string; 
    nutrients: { 
      calories: number; 
      protein: number; 
      carbs: number; 
      fat: number;
    };
    tags: string[];
  } 
}) => {
  return (
    <div className="bg-background/70 rounded-lg overflow-hidden shadow-soft transition-all hover:shadow-md hover:-translate-y-1">
      <div className="p-4">
        <h4 className="font-semibold mb-1">{meal.name}</h4>
        <p className="text-sm text-muted-foreground mb-3">{meal.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {meal.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-primary/10 text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="grid grid-cols-4 gap-2 text-center text-xs">
          <div>
            <div className="font-semibold">{meal.nutrients.calories}</div>
            <div className="text-muted-foreground">kcal</div>
          </div>
          <div>
            <div className="font-semibold text-emerald-500">{meal.nutrients.protein}g</div>
            <div className="text-muted-foreground">Protein</div>
          </div>
          <div>
            <div className="font-semibold text-indigo-500">{meal.nutrients.carbs}g</div>
            <div className="text-muted-foreground">Carbs</div>
          </div>
          <div>
            <div className="font-semibold text-amber-500">{meal.nutrients.fat}g</div>
            <div className="text-muted-foreground">Fats</div>
          </div>
        </div>
      </div>
      
      <div className="bg-secondary/30 px-4 py-2 flex justify-between items-center">
        <Button variant="ghost" size="sm" className="text-xs h-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          Recipe
        </Button>
        
        <Button variant="ghost" size="sm" className="text-xs h-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
          Swap
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
