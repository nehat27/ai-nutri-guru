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
import { cn } from "@/lib/utils";

const Dashboard = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  const [userName, setUserName] = useState("User");
  const [loadingMealPlan, setLoadingMealPlan] = useState(true);
  const [userAge, setUserAge] = useState(35); // Default age
  
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
      if (user.age) {
        setUserAge(user.age);
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
  
  // Age-specific recommendations
  const getAgeRecommendations = (age) => {
    if (age < 18) {
      return {
        title: "Teen Nutrition",
        recommendations: [
          {
            title: "Calcium for Growth",
            description: "Focus on calcium-rich foods like dairy, fortified non-dairy beverages, and leafy greens to support bone development.",
            foods: ["Yogurt", "Milk", "Cheese", "Fortified cereals", "Leafy greens"]
          },
          {
            title: "Iron for Development",
            description: "Teenage bodies need iron for muscle development and blood health. Include lean meats, beans, and iron-fortified foods.",
            foods: ["Lean beef", "Beans", "Lentils", "Spinach", "Tofu"]
          },
          {
            title: "Healthy Snacking",
            description: "Support your active lifestyle with nutrient-dense snacks that provide sustained energy throughout the day.",
            foods: ["Nut butter with fruit", "Trail mix", "Hummus with vegetables", "Smoothies"]
          }
        ]
      };
    } 
    else if (age >= 18 && age < 30) {
      return {
        title: "Young Adult Nutrition",
        recommendations: [
          {
            title: "Metabolism Support",
            description: "Your metabolism is still relatively high, but balanced meals help maintain energy and prevent weight fluctuations.",
            foods: ["Lean proteins", "Complex carbs", "Healthy fats", "Colorful vegetables"]
          },
          {
            title: "Stress Management",
            description: "Balance work and lifestyle stress with foods that support brain health and reduce inflammation.",
            foods: ["Fatty fish", "Berries", "Dark chocolate", "Fermented foods", "Green tea"]
          },
          {
            title: "Fitness Optimization",
            description: "Support your active lifestyle with nutrients that aid recovery and improve performance.",
            foods: ["Protein-rich foods", "Whole grains", "Bananas", "Tart cherries", "Sweet potatoes"]
          }
        ]
      };
    }
    else if (age >= 30 && age < 50) {
      return {
        title: "Adult Nutrition Priorities",
        recommendations: [
          {
            title: "Metabolism Management",
            description: "As metabolism naturally slows, focus on nutrient-dense foods that provide satiety with fewer calories.",
            foods: ["Lean proteins", "Fiber-rich vegetables", "Berries", "Greek yogurt", "Nuts"]
          },
          {
            title: "Heart Health",
            description: "Begin prioritizing cardiovascular health with foods that support healthy cholesterol and blood pressure.",
            foods: ["Fatty fish", "Olive oil", "Avocados", "Whole grains", "Leafy greens"]
          },
          {
            title: "Antioxidant Protection",
            description: "Combat cellular aging and support immune function with antioxidant-rich foods.",
            foods: ["Berries", "Colorful vegetables", "Green tea", "Dark chocolate", "Nuts"]
          }
        ]
      };
    }
    else {
      return {
        title: "Mature Adult Nutrition",
        recommendations: [
          {
            title: "Bone Health Priority",
            description: "Calcium and vitamin D become increasingly important to maintain bone density and prevent osteoporosis.",
            foods: ["Dairy or fortified alternatives", "Sardines", "Tofu", "Leafy greens", "Fortified cereals"]
          },
          {
            title: "Anti-Inflammatory Focus",
            description: "Minimize inflammation with foods rich in omega-3 fatty acids and antioxidants.",
            foods: ["Fatty fish", "Walnuts", "Flaxseeds", "Turmeric", "Berries", "Olive oil"]
          },
          {
            title: "Digestive Health",
            description: "Support changing digestive needs with fiber-rich foods and probiotics.",
            foods: ["Yogurt", "Kefir", "Whole grains", "Beans", "Fruits with edible skins"]
          }
        ]
      };
    }
  };
  
  const ageRecommendations = getAgeRecommendations(userAge);
  
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
          <TabsList className="grid grid-cols-5 h-12 glass">
            <TabsTrigger value="meal-plan">Meal Plan</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="fitness">Fitness</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
            <TabsTrigger value="age-specific">Age Specific</TabsTrigger>
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
                    <Progress value={85} className={cn("h-2 bg-secondary/50")} />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Carbs</span>
                      <span className="font-medium">220 / 250 g</span>
                    </div>
                    <Progress value={88} className={cn("h-2 bg-secondary/50")} />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Fats</span>
                      <span className="font-medium">55 / 65 g</span>
                    </div>
                    <Progress value={85} className={cn("h-2 bg-secondary/50")} />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Hydration</span>
                      <span className="font-medium">5 / 8 glasses</span>
                    </div>
                    <Progress value={62} className={cn("h-2 bg-secondary/50")} />
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
                    <Progress value={85} className={cn("h-2", "bg-emerald-500/10")} />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Carbohydrates (45%)</span>
                      <span className="text-sm font-medium">220g / 250g</span>
                    </div>
                    <Progress value={88} className={cn("h-2", "bg-indigo-500/10")} />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Healthy Fats (25%)</span>
                      <span className="text-sm font-medium">55g / 65g</span>
                    </div>
                    <Progress value={85} className={cn("h-2", "bg-amber-500/10")} />
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
                        <Progress value={70} className
