import { ArrowLeft, Calendar, Mail, Linkedin, Coffee, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScreenType } from "@/pages/Index";

interface HistoryScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

const HistoryScreen = ({ onNavigate }: HistoryScreenProps) => {
  const interactions = [
    {
      icon: Coffee,
      color: "bg-amber-500",
      date: "December 2023",
      title: "Dinner in San Francisco",
      description: "3-hour conversation about scaling engineering teams and cloud strategy. Jennifer offered CEO introduction.",
    },
    {
      icon: Mail,
      color: "bg-primary",
      date: "December 2023",
      title: "Follow-up Email",
      description: "Sent resources on microservices architecture. Jennifer responded with thanks and update on Q1 plans.",
    },
    {
      icon: Linkedin,
      color: "bg-blue-600",
      date: "August 2023",
      title: "LinkedIn Interaction",
      description: "Commented on her post about team growth. Brief exchange about hiring challenges.",
    },
    {
      icon: Calendar,
      color: "bg-success",
      date: "May 2023",
      title: "Tech Conference Meeting",
      description: "Initial connection at CloudNext. Discussed AWS services and DataCore's infrastructure needs.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 pb-8">
      <div className="mx-auto max-w-4xl px-4 pt-6">
        <Button 
          variant="ghost" 
          size="sm" 
          className="mb-6 text-white hover:bg-white/10"
          onClick={() => onNavigate("detail")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Profile
        </Button>

        <div className="mb-6 text-center">
          <div className="mb-4 text-5xl">👩‍💼</div>
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-white">Jennifer Liu</h1>
          <p className="text-gray-300">VP of Engineering at DataCore Systems</p>
        </div>

        {/* Metrics */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Card className="rounded-2xl border border-slate-700 bg-slate-800 p-6 shadow-lg">
            <div className="mb-2 text-sm font-medium text-gray-400">Connection Strength</div>
            <Progress value={85} className="mb-2 h-2" />
            <div className="text-3xl font-bold text-lime-400">85%</div>
          </Card>
          
          <Card className="rounded-2xl border border-slate-700 bg-slate-800 p-6 shadow-lg">
            <div className="mb-2 text-sm font-medium text-gray-400">Total Interactions</div>
            <div className="text-4xl font-bold text-lime-400">4</div>
          </Card>
          
          <Card className="rounded-2xl border border-slate-700 bg-slate-800 p-6 shadow-lg">
            <div className="mb-2 text-sm font-medium text-gray-400">Last Contact</div>
            <div className="text-4xl font-bold text-lime-400">14<span className="text-xl">mo</span></div>
          </Card>
        </div>

        {/* Timeline */}
        <div className="mb-8">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-white">Relationship Timeline</h2>
          <div className="space-y-6">
            {interactions.map((interaction, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-slate-800 p-3 text-lime-400 shadow-md">
                    <interaction.icon className="h-5 w-5" />
                  </div>
                  {index < interactions.length - 1 && (
                    <div className="mt-2 h-full w-0.5 bg-slate-700"></div>
                  )}
                </div>
                <Card className="flex-1 rounded-2xl bg-white p-6 shadow-xl">
                  <div className="mb-1 text-sm font-medium text-gray-600">
                    {interaction.date}
                  </div>
                  <h3 className="mb-2 text-lg font-bold tracking-tight text-slate-900">
                    {interaction.title}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {interaction.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="rounded-2xl border border-slate-700 bg-slate-800 p-8 text-center shadow-lg">
          <h3 className="mb-2 text-xl font-bold tracking-tight text-white">
            Ready to Reconnect?
          </h3>
          <p className="mb-4 text-gray-300">
            Based on this history, now is the perfect time to reach out
          </p>
          <Button 
            size="lg"
            className="rounded-lg bg-lime-400 px-8 py-4 font-semibold text-slate-900 shadow-lg shadow-lime-400/20 transition-all hover:scale-105 hover:bg-lime-300"
            onClick={() => onNavigate("composer")}
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Draft Reconnection Message
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default HistoryScreen;
