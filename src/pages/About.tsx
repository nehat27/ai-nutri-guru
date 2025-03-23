
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Leaf, 
  Apple, 
  Brain, 
  HeartPulse, 
  ShieldCheck, 
  Sparkles, 
  UserCheck, 
  Scale,
  Utensils,
  CalendarDays,
  BarChart,
  Medal
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 mt-16 mb-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
              <Leaf className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About NutriAI</h1>
            <p className="text-xl text-muted-foreground">
              Where ancient wisdom meets modern science for personalized nutrition
            </p>
          </div>
          
          {/* Mission Section */}
          <Card className="mb-16 border-none shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-6 leading-relaxed">
                At NutriAI, we believe that optimal nutrition is deeply personal. Our mission is to blend the time-tested 
                wisdom of traditional nutritional practices with cutting-edge AI technology to create truly personalized 
                nutrition plans that work with your unique body, lifestyle, and goals.
              </p>
              <p className="text-lg leading-relaxed">
                We're not just another diet app. We're creating a nutrition ecosystem that adapts to you, learns from your 
                progress, and evolves to support your ever-changing health journey. Because we believe that when nutrition 
                is personalized, sustainable change becomes possible.
              </p>
            </CardContent>
          </Card>
          
          {/* How It Works Section - NEW */}
          <Card className="mb-16 border-none shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">How NutriAI Works</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-start">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">1. Personalized Assessment</h3>
                  <p className="text-muted-foreground">
                    Complete our comprehensive questionnaire that analyzes your age, health status, physical attributes, 
                    mental wellbeing, lifestyle patterns, dietary restrictions, and fitness goals.
                  </p>
                </div>
                
                <div className="flex flex-col items-start">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">2. AI Analysis</h3>
                  <p className="text-muted-foreground">
                    Our advanced AI algorithms process your information to create a nutrition profile unique to you, 
                    considering thousands of data points and the latest nutritional science.
                  </p>
                </div>
                
                <div className="flex flex-col items-start">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <Utensils className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">3. Custom Meal Plans</h3>
                  <p className="text-muted-foreground">
                    Receive tailor-made meal plans that respect your preferences, restrictions, and nutritional needs, 
                    featuring seasonal and locally available ingredients for maximum nutritional benefit.
                  </p>
                </div>
                
                <div className="flex flex-col items-start">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <CalendarDays className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">4. Adaptive Evolution</h3>
                  <p className="text-muted-foreground">
                    Your plan evolves as you do – our system learns from your feedback, progress, and changing needs, 
                    continuously refining recommendations for optimal results.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Key Features Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">What Makes Us Different</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard 
                icon={<Brain className="h-8 w-8 text-primary" />}
                title="AI-Powered Personalization"
                description="Our advanced algorithms analyze your unique profile to create nutrition plans tailored specifically to you."
              />
              
              <FeatureCard 
                icon={<Apple className="h-8 w-8 text-primary" />}
                title="Seasonal & Local Focus"
                description="We emphasize foods that are in season and available in your location for maximum nutritional benefit."
              />
              
              <FeatureCard 
                icon={<HeartPulse className="h-8 w-8 text-primary" />}
                title="Holistic Health Approach"
                description="We consider mental health, physical appearance, and lifestyle factors alongside nutritional needs."
              />
              
              <FeatureCard 
                icon={<ShieldCheck className="h-8 w-8 text-primary" />}
                title="Evidence-Based Recommendations"
                description="All our nutritional advice is grounded in scientific research and traditional wisdom."
              />
              
              <FeatureCard 
                icon={<Sparkles className="h-8 w-8 text-primary" />}
                title="Gamified Experience"
                description="Stay motivated with challenges, leaderboards, and rewards that make healthy eating fun."
              />
              
              <FeatureCard 
                icon={<Scale className="h-8 w-8 text-primary" />}
                title="Real-Time Analysis"
                description="Get immediate insights into the nutritional value of your meals and overall dietary patterns."
              />

              {/* New Features */}
              <FeatureCard 
                icon={<BarChart className="h-8 w-8 text-primary" />}
                title="Age-Specific Nutrition"
                description="Receive recommendations tailored to your specific age group and life stage for optimal health and development."
              />
              
              <FeatureCard 
                icon={<Medal className="h-8 w-8 text-primary" />}
                title="Weekly Cheat Day"
                description="Every 7th day can be a guilt-free cheat day with healthy yet indulgent options aligned with your dietary preferences."
              />
            </div>
          </div>
          
          {/* Testimonials Section - NEW */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">What Our Users Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold">JD</span>
                      </div>
                      <div>
                        <p className="font-semibold">John D.</p>
                        <p className="text-muted-foreground text-sm">Age 42, Lost 25 lbs</p>
                      </div>
                    </div>
                    <p className="italic">
                      "NutriAI completely changed my relationship with food. The personalized meal plans made 
                      healthy eating so much easier, and the cheat day options kept me motivated without feeling 
                      deprived. After 6 months, I've reached my goal weight and have more energy than ever!"
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold">SP</span>
                      </div>
                      <div>
                        <p className="font-semibold">Sarah P.</p>
                        <p className="text-muted-foreground text-sm">Age 35, Fitness Enthusiast</p>
                      </div>
                    </div>
                    <p className="italic">
                      "As someone with specific dietary needs due to my training schedule, NutriAI has been 
                      a game-changer. The age-specific recommendations helped me optimize my nutrition for 
                      recovery, and the seasonal food focus introduced me to new ingredients I now love!"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Join Us Section */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-6">Join Our Community</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Ready to transform your relationship with food? Start your personalized nutrition journey today and join thousands who are discovering the power of AI-driven nutrition plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8">
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8">
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </div>
          
          {/* Team Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Our Team</h2>
            <p className="text-lg mb-4 max-w-2xl mx-auto">
              NutriAI is built by a passionate team of nutritionists, AI specialists, and health enthusiasts dedicated to revolutionizing personalized nutrition.
            </p>
            <p className="text-muted-foreground">
              Founded in 2023 with headquarters in San Francisco, CA.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <Card className="border bg-card/50 hover:shadow-md transition-all">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-2">
          <div className="mb-4">{icon}</div>
          <h3 className="font-bold text-xl">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default About;
