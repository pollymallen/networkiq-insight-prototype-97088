import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScreenType } from "@/pages/Index";

interface NotificationScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

const NotificationScreen = ({ onNavigate }: NotificationScreenProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 text-center shadow-lg">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-primary/10 p-4">
            <Bell className="h-12 w-12 text-primary" />
          </div>
        </div>
        
        <div className="mb-2 text-sm font-medium text-muted-foreground">
          Monday, 8:00 AM
        </div>
        
        <h1 className="mb-2 text-3xl font-bold text-foreground">
          NetworkIQ
        </h1>
        
        <p className="mb-8 text-lg text-muted-foreground">
          <span className="font-semibold text-primary">3 reconnection opportunities</span> today
        </p>
        
        <Button 
          size="lg" 
          className="w-full bg-gradient-primary font-semibold shadow-md transition-all hover:shadow-lg"
          onClick={() => onNavigate("digest")}
        >
          View Opportunities
        </Button>
      </Card>
    </div>
  );
};

export default NotificationScreen;
