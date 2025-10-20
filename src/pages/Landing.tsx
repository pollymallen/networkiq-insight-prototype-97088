import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

const Landing = () => {
  const handleLogin = () => {
    window.location.href = "/api/login";
  };

  return (
    <div className="min-h-screen bg-gradient-background flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-neon-green rounded-full p-6">
            <Bell className="w-12 h-12 text-background" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-foreground mb-4">
          NetworkIQ
        </h1>
        
        <p className="text-lg text-muted-foreground mb-2">
          Smart reconnection opportunities
        </p>
        
        <p className="text-muted-foreground mb-8">
          Stay connected with your professional network. Never miss an opportunity to reconnect.
        </p>
        
        <Button
          data-testid="button-login"
          onClick={handleLogin}
          className="w-full bg-neon-green hover:bg-neon-green/90 text-background font-semibold py-6 text-lg rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Landing;
