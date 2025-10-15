import { ArrowLeft, Lightbulb, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScreenType } from "@/pages/Index";

interface MaintenanceScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

const MaintenanceScreen = ({ onNavigate }: MaintenanceScreenProps) => {
  const conversationStarters = [
    {
      number: 1,
      text: "His company just launched a new product line in Q4. Ask how the launch is going and if there are any early learnings.",
    },
    {
      number: 2,
      text: "He mentioned his team was experimenting with AI-powered sales tools. Check in on how that's progressing.",
    },
    {
      number: 3,
      text: "Share a relevant article about sales automation trends and ask for his perspective based on his experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 pb-8">
      <div className="mx-auto max-w-3xl px-4 pt-6">
        <Button 
          variant="ghost" 
          size="sm" 
          className="mb-6 text-white hover:bg-white/10"
          onClick={() => onNavigate("success")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <h1 className="mb-6 text-3xl font-bold tracking-tight text-white">
          Weekly Relationship Maintenance
        </h1>

        {/* Info Card */}
        <Card className="mb-6 rounded-2xl border border-slate-700 bg-slate-800 p-8 shadow-lg">
          <h2 className="mb-2 text-xl font-bold tracking-tight text-white">
            Keep Your Network Warm
          </h2>
          <p className="text-gray-300">
            These are relationships worth maintaining even without a specific trigger. 
            A brief, thoughtful check-in helps keep the connection strong.
          </p>
        </Card>

        {/* Contact Card */}
        <Card className="mb-6 rounded-2xl bg-white p-8 shadow-2xl">
          <div className="mb-6 flex items-start gap-4">
            <div className="text-5xl">👨‍💼</div>
            <div className="flex-1">
              <div className="mb-2 flex items-center gap-2">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">David Park</h2>
                <Badge className="bg-lime-400 text-xs font-semibold uppercase tracking-wider text-slate-900">TIER 1</Badge>
              </div>
              <p className="mb-1 text-gray-600">Director of Sales</p>
              <p className="font-medium text-slate-900">SalesTech Pro</p>
              <div className="mt-3 flex items-center gap-4 text-sm">
                <span className="text-gray-600">
                  Last contact: <span className="font-semibold">10 weeks ago</span>
                </span>
                <span className="text-gray-600">
                  Connection: <span className="font-semibold text-lime-400">78%</span>
                </span>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="mb-3 font-bold tracking-tight text-slate-900">Conversation Starters</h3>
            <div className="space-y-3">
              {conversationStarters.map((starter) => (
                <Card key={starter.number} className="rounded-lg bg-slate-50 p-4">
                  <div className="flex gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lime-400 text-sm font-bold text-slate-900">
                      {starter.number}
                    </div>
                    <p className="text-sm text-gray-700">{starter.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Card>

        {/* Pro Tip */}
        <Card className="mb-6 rounded-2xl border-2 border-lime-400/20 bg-lime-400/10 p-8 shadow-lg">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-6 w-6 flex-shrink-0 text-lime-400" />
            <div>
              <h3 className="mb-2 font-bold tracking-tight text-white">Pro tip</h3>
              <p className="text-sm text-gray-200">
                For maintenance check-ins, keep it light and specific. Reference something 
                from your last conversation or recent news about their company. Avoid generic 
                "just checking in" messages.
              </p>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Button 
            size="lg"
            className="rounded-lg bg-slate-800 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-slate-700"
          >
            <Clock className="mr-2 h-5 w-5" />
            Remind Me Next Week
          </Button>
          <Button 
            size="lg"
            className="rounded-lg bg-lime-400 px-8 py-4 font-semibold text-slate-900 shadow-lg shadow-lime-400/20 transition-all hover:scale-105 hover:bg-lime-300"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Draft Check-in Message
          </Button>
        </div>

        {/* Maintenance Cadence */}
        <Card className="rounded-2xl border border-slate-700 bg-slate-800 p-8 shadow-lg">
          <h3 className="mb-4 font-bold tracking-tight text-white">Your Maintenance Cadence</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg bg-slate-900 p-4">
              <div className="flex items-center gap-3">
                <Badge className="bg-lime-400 text-xs font-semibold uppercase tracking-wider text-slate-900">TIER 1</Badge>
                <span className="text-sm text-gray-300">Key relationships</span>
              </div>
              <span className="text-sm font-semibold text-lime-400">Every 3 months</span>
            </div>
            
            <div className="flex items-center justify-between rounded-lg bg-slate-900 p-4">
              <div className="flex items-center gap-3">
                <Badge className="bg-slate-700 text-xs font-semibold uppercase tracking-wider text-gray-300">TIER 2</Badge>
                <span className="text-sm text-gray-300">Important contacts</span>
              </div>
              <span className="text-sm font-semibold text-white">Every 6 months</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MaintenanceScreen;
