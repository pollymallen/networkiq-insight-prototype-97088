import { Bell, Settings, User, TrendingUp, Users, Activity, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScreenType } from "@/pages/Index";

interface DigestScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

const DigestScreen = ({ onNavigate }: DigestScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-background pb-8">
      {/* Header */}
      <header className="bg-card border-b px-4 py-4 shadow-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-primary/10 p-2">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">NetworkIQ</h1>
              <p className="text-sm text-muted-foreground">Sarah Chen</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <Settings className="h-5 w-5 text-muted-foreground" />
            <User className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 pt-6">
        {/* Date */}
        <h2 className="mb-6 text-2xl font-bold text-foreground">
          Monday, October 14
        </h2>

        {/* Stats Cards */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Card className="p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-primary/10 p-2">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">3</div>
                <div className="text-sm text-muted-foreground">Opportunities</div>
              </div>
            </div>
          </Card>
          
          <Card className="p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-success/10 p-2">
                <Users className="h-5 w-5 text-success" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">847</div>
                <div className="text-sm text-muted-foreground">Total Connections</div>
              </div>
            </div>
          </Card>
          
          <Card className="p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-ai/10 p-2">
                <Activity className="h-5 w-5 text-ai" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">12</div>
                <div className="text-sm text-muted-foreground">Active This Week</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Opportunities List */}
        <div className="space-y-4">
          {/* Jennifer Liu - HIGH PRIORITY - CLICKABLE */}
          <Card 
            className="cursor-pointer border-2 border-primary p-6 shadow-md transition-all hover:shadow-lg"
            onClick={() => onNavigate("detail")}
          >
            <div className="mb-4 flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="text-4xl">👩‍💼</div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-foreground">Jennifer Liu</h3>
                    <Badge className="bg-primary text-primary-foreground">HIGH PRIORITY</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">VP of Engineering</p>
                  <p className="text-sm font-medium text-foreground">DataCore Systems</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Connection Strength</div>
                <div className="text-2xl font-bold text-primary">85%</div>
              </div>
            </div>
            
            <div className="mb-4 rounded-lg bg-alert-light p-4">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 flex-shrink-0 text-alert" />
                <div>
                  <p className="font-semibold text-alert-foreground">Perfect Timing to Reconnect</p>
                  <p className="text-sm text-foreground">
                    DataCore Systems announced partnership with AWS - TechCrunch, 2 hours ago
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Last contact: <span className="font-semibold">14 months ago</span></span>
              <span className="font-semibold text-primary">View Details →</span>
            </div>
          </Card>

          {/* Marcus Chen - NOT CLICKABLE */}
          <Card className="p-6 opacity-60 shadow-sm">
            <div className="mb-4 flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="text-4xl">👨‍💼</div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Marcus Chen</h3>
                  <p className="text-sm text-muted-foreground">CTO</p>
                  <p className="text-sm font-medium text-foreground">TechVision Inc</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Connection Strength</div>
                <div className="text-2xl font-bold text-foreground">72%</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              Last contact: <span className="font-semibold">8 months ago</span>
            </div>
          </Card>

          {/* Priya Patel - NOT CLICKABLE */}
          <Card className="p-6 opacity-60 shadow-sm">
            <div className="mb-4 flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="text-4xl">👩‍💼</div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Priya Patel</h3>
                  <p className="text-sm text-muted-foreground">Head of Product</p>
                  <p className="text-sm font-medium text-foreground">InnovateLabs</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Connection Strength</div>
                <div className="text-2xl font-bold text-foreground">68%</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              Last contact: <span className="font-semibold">11 months ago</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DigestScreen;
