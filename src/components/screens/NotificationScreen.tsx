import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScreenType } from "@/pages/Index";

interface NotificationScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

const NotificationScreen = ({ onNavigate }: NotificationScreenProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 p-4">
      <Card className="w-full max-w-md rounded-2xl bg-white p-10 text-center shadow-2xl">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-lime-400 p-4">
            <Bell className="h-12 w-12 text-slate-900" />
          </div>
        </div>
        
        <div className="mb-2 text-sm font-medium text-gray-500">
          Monday, 8:00 AM
        </div>
        
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-slate-900">
          NetworkIQ
        </h1>
        
        <p className="mb-8 text-lg text-gray-600">
          <span className="font-semibold text-lime-400">3 reconnection opportunities</span> today
        </p>
        
        <Button 
          size="lg" 
          className="w-full rounded-lg bg-lime-400 px-8 py-4 font-semibold text-slate-900 shadow-lg shadow-lime-400/20 transition-all hover:scale-105 hover:bg-lime-300 hover:shadow-xl"
          onClick={() => onNavigate("digest")}
        >
          View Opportunities
        </Button>
      </Card>
    </div>
  );
};

export default NotificationScreen;
