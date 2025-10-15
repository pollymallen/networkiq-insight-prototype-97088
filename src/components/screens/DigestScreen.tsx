import { Bell, Settings, User, TrendingUp, Users, Activity, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScreenType } from "@/pages/Index";

interface DigestScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

const DigestScreen = ({ onNavigate }: DigestScreenProps) => {
  return (
    <div className="min-h-screen bg-slate-900 pb-8">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900 px-4 py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-slate-800 p-2">
              <Users className="h-5 w-5 text-lime-400" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-white">NetworkIQ</h1>
              <p className="text-sm text-gray-400">Sarah Chen</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Bell className="h-5 w-5 text-gray-400" />
            <Settings className="h-5 w-5 text-gray-400" />
            <User className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 pt-6">
        {/* Date */}
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-white">
          Monday, October 14
        </h2>

        {/* Stats Cards */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Card className="rounded-2xl border border-slate-700 bg-slate-800 p-6 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-slate-900 p-3">
                <TrendingUp className="h-5 w-5 text-lime-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-lime-400">3</div>
                <div className="text-sm text-gray-400">Opportunities</div>
              </div>
            </div>
          </Card>
          
          <Card className="rounded-2xl border border-slate-700 bg-slate-800 p-6 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-slate-900 p-3">
                <Users className="h-5 w-5 text-gray-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">847</div>
                <div className="text-sm text-gray-400">Total Connections</div>
              </div>
            </div>
          </Card>
          
          <Card className="rounded-2xl border border-slate-700 bg-slate-800 p-6 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-slate-900 p-3">
                <Activity className="h-5 w-5 text-gray-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">12</div>
                <div className="text-sm text-gray-400">Active This Week</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Opportunities List */}
        <div className="space-y-4">
          {/* Jennifer Liu - HIGH PRIORITY - CLICKABLE */}
          <Card 
            className="cursor-pointer rounded-2xl border-2 border-lime-400/30 bg-white p-8 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            onClick={() => onNavigate("detail")}
          >
            <div className="mb-4 flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="text-4xl">👩‍💼</div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold tracking-tight text-slate-900">Jennifer Liu</h3>
                    <Badge className="bg-lime-400 text-xs font-semibold uppercase tracking-wider text-slate-900">HIGH PRIORITY</Badge>
                  </div>
                  <p className="text-sm text-gray-600">VP of Engineering</p>
                  <p className="text-sm font-medium text-slate-900">DataCore Systems</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Connection Strength</div>
                <div className="text-2xl font-bold text-lime-400">85%</div>
              </div>
            </div>
            
            <div className="mb-4 rounded-lg border border-lime-400/20 bg-lime-400/10 p-4">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 flex-shrink-0 text-lime-400" />
                <div>
                  <p className="font-semibold text-slate-900">Perfect Timing to Reconnect</p>
                  <p className="text-sm text-gray-700">
                    DataCore Systems announced partnership with AWS - TechCrunch, 2 hours ago
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Last contact: <span className="font-semibold">14 months ago</span></span>
              <span className="font-semibold text-lime-400">View Details →</span>
            </div>
          </Card>

          {/* Marcus Chen - NOT CLICKABLE */}
          <Card className="rounded-2xl bg-slate-800 p-6 opacity-60 shadow-sm">
            <div className="mb-4 flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="text-4xl">👨‍💼</div>
                <div>
                  <h3 className="text-xl font-bold text-white">Marcus Chen</h3>
                  <p className="text-sm text-gray-400">CTO</p>
                  <p className="text-sm font-medium text-gray-200">TechVision Inc</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Connection Strength</div>
                <div className="text-2xl font-bold text-white">72%</div>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              Last contact: <span className="font-semibold">8 months ago</span>
            </div>
          </Card>

          {/* Priya Patel - NOT CLICKABLE */}
          <Card className="rounded-2xl bg-slate-800 p-6 opacity-60 shadow-sm">
            <div className="mb-4 flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="text-4xl">👩‍💼</div>
                <div>
                  <h3 className="text-xl font-bold text-white">Priya Patel</h3>
                  <p className="text-sm text-gray-400">Head of Product</p>
                  <p className="text-sm font-medium text-gray-200">InnovateLabs</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Connection Strength</div>
                <div className="text-2xl font-bold text-white">68%</div>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              Last contact: <span className="font-semibold">11 months ago</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DigestScreen;
