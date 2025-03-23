
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
  Scale 
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
          
          {/* Features Grid */}
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
          
          {/* Team Section Placeholder */}
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
