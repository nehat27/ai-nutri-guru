
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const Landing = () => {
  useEffect(() => {
    // Set a delay for the animation to start
    const timeout = setTimeout(() => {
      document.querySelectorAll('.animate-on-load').forEach((el, index) => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'translateY(0)';
      });
    }, 100);
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold text-primary bg-primary/10 rounded-full animate-on-load opacity-0 transition-all duration-500 delay-100" style={{ transform: 'translateY(20px)' }}>
              Personalized Nutrition Powered by AI
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-on-load opacity-0 transition-all duration-500 delay-200" style={{ transform: 'translateY(20px)' }}>
              Your Journey to a <span className="text-primary">Healthier You</span> Starts Here
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 animate-on-load opacity-0 transition-all duration-500 delay-300" style={{ transform: 'translateY(20px)' }}>
              Get personalized meal plans, nutrition insights, and wellness recommendations tailored to your unique body and goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 animate-on-load opacity-0 transition-all duration-500 delay-400" style={{ transform: 'translateY(20px)' }}>
              <Button asChild size="lg" className="h-12 px-8">
                <Link to="/signup">Start Your Journey</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8">
                <Link to="/login">Already have an account?</Link>
              </Button>
            </div>
          </div>
          
          {/* Features Preview */}
          <div className="max-w-5xl mx-auto mt-20 glass rounded-2xl p-6 md:p-10 animate-on-load opacity-0 transition-all duration-500 delay-500" style={{ transform: 'translateY(20px)' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                icon="🍽️" 
                title="Personalized Meal Plans" 
                description="Get AI-generated meal plans based on your preferences, goals, and dietary needs."
              />
              <FeatureCard 
                icon="📊" 
                title="Nutritional Analysis" 
                description="See detailed breakdowns of nutrients, calories, and more for every meal."
              />
              <FeatureCard 
                icon="🏆" 
                title="Progress Tracking" 
                description="Track your progress, celebrate achievements, and stay motivated."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How NutriAI Works</h2>
            <p className="text-muted-foreground">Our intelligent system adapts to your unique needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StepCard 
              number="1" 
              title="Create Your Profile" 
              description="Sign up and tell us about your lifestyle, preferences, and goals."
            />
            <StepCard 
              number="2" 
              title="Complete Assessment" 
              description="Answer questions about your health, diet, and fitness objectives."
            />
            <StepCard 
              number="3" 
              title="Receive Your Plan" 
              description="Get your personalized nutrition and wellness plan based on AI analysis."
            />
            <StepCard 
              number="4" 
              title="Track & Adapt" 
              description="Monitor your progress while we adapt recommendations based on your feedback."
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-muted-foreground">Join thousands who have transformed their relationship with food</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="NutriAI completely changed how I approach my meals. The personalized recommendations fit perfectly with my lifestyle!"
              name="Sarah K."
              role="Fitness Enthusiast"
            />
            <TestimonialCard 
              quote="As someone with multiple food allergies, finding an app that understands my needs was a game-changer. Highly recommend!"
              name="Michael T."
              role="Tech Professional"
            />
            <TestimonialCard 
              quote="The combination of modern nutrition science with traditional wisdom sets this app apart from everything else I've tried."
              name="Priya M."
              role="Yoga Instructor"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Nutrition?</h2>
            <p className="text-muted-foreground mb-8">Join NutriAI today and take the first step toward a healthier lifestyle</p>
            <Button asChild size="lg" className="h-12 px-8">
              <Link to="/signup">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 border-t">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="relative w-6 h-6">
                <div className="absolute inset-0 rounded-full bg-primary/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <span className="font-semibold">NutriAI</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
              <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            </div>
            
            <div className="mt-4 md:mt-0 text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} NutriAI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => {
  return (
    <div className="bg-background/70 backdrop-blur-sm rounded-xl p-6 text-center transition-all hover:shadow-soft hover:-translate-y-1">
      <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center text-2xl bg-primary/10 rounded-xl">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

const StepCard = ({ number, title, description }: { number: string; title: string; description: string }) => {
  return (
    <div className="relative p-6">
      <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
        {number}
      </div>
      <div className="pl-16">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

const TestimonialCard = ({ quote, name, role }: { quote: string; name: string; role: string }) => {
  return (
    <div className="bg-background glass rounded-xl p-6 transition-all hover:shadow-soft">
      <div className="mb-4 text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
        </svg>
      </div>
      <p className="mb-4 text-sm">{quote}</p>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </div>
  );
};

export default Landing;
