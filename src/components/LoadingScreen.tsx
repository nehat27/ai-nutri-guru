
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 4;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50">
      <div className="animate-float mb-8">
        <div className="w-24 h-24 relative">
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse-soft"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-primary"
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
      </div>
      <h1 className="text-2xl font-semibold mb-2 text-foreground animate-fade-in">
        NutriAI
      </h1>
      <p className="text-muted-foreground mb-6 animate-fade-in delay-100 text-center px-4">
        Your personal nutrition and wellness companion
      </p>
      
      <div className="w-64 h-1 bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary transition-all duration-200 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs text-muted-foreground mt-2">Loading resources...</p>
    </div>
  );
};

export default LoadingScreen;
