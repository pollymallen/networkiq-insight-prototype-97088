import { useState } from "react";
import NotificationScreen from "@/components/screens/NotificationScreen";
import DigestScreen from "@/components/screens/DigestScreen";
import ContactDetailScreen from "@/components/screens/ContactDetailScreen";
import HistoryScreen from "@/components/screens/HistoryScreen";
import ComposerScreen from "@/components/screens/ComposerScreen";
import SuccessScreen from "@/components/screens/SuccessScreen";
import MaintenanceScreen from "@/components/screens/MaintenanceScreen";

export type ScreenType = 
  | "notification" 
  | "digest" 
  | "detail" 
  | "history" 
  | "composer" 
  | "success" 
  | "maintenance";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>("notification");

  const navigateTo = (screen: ScreenType) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      {currentScreen === "notification" && <NotificationScreen onNavigate={navigateTo} />}
      {currentScreen === "digest" && <DigestScreen onNavigate={navigateTo} />}
      {currentScreen === "detail" && <ContactDetailScreen onNavigate={navigateTo} />}
      {currentScreen === "history" && <HistoryScreen onNavigate={navigateTo} />}
      {currentScreen === "composer" && <ComposerScreen onNavigate={navigateTo} />}
      {currentScreen === "success" && <SuccessScreen onNavigate={navigateTo} />}
      {currentScreen === "maintenance" && <MaintenanceScreen onNavigate={navigateTo} />}
    </div>
  );
};

export default Index;
