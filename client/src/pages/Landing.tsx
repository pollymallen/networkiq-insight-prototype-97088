import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bell } from "lucide-react";

export default function Landing() {
  const handleLogin = () => {
    window.location.href = "/api/login";
  };

  return (
    <div className="min-h-screen bg-gradient-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
            <Bell className="w-10 h-10 text-primary-foreground" />
          </div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-3xl font-bold" data-testid="text-app-title">
            NetworkIQ
          </h1>
          <p className="text-muted-foreground" data-testid="text-app-description">
            Stay connected with intelligent networking reminders
          </p>
        </div>

        <div className="space-y-4 pt-4">
          <Button 
            onClick={handleLogin}
            className="w-full"
            size="lg"
            data-testid="button-login"
          >
            Sign In to Get Started
          </Button>
          
          <p className="text-sm text-muted-foreground">
            Track reconnection opportunities and never miss an important follow-up
          </p>
        </div>
      </Card>
    </div>
  );
}
