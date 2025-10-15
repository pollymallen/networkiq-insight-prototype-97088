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
    <div className="min-h-screen bg-gradient-background pb-8">
      <div className="mx-auto max-w-4xl px-4 pt-6">
        <Button 
          variant="ghost" 
          size="sm" 
          className="mb-6"
          onClick={() => onNavigate("detail")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Profile
        </Button>

        <div className="mb-6 text-center">
          <div className="mb-4 text-5xl">👩‍💼</div>
          <h1 className="mb-2 text-3xl font-bold text-foreground">Jennifer Liu</h1>
          <p className="text-muted-foreground">VP of Engineering at DataCore Systems</p>
        </div>

        {/* Metrics */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Card className="p-4 shadow-md">
            <div className="mb-2 text-sm font-medium text-muted-foreground">Connection Strength</div>
            <Progress value={85} className="mb-2 h-2" />
            <div className="text-2xl font-bold text-primary">85%</div>
          </Card>
          
          <Card className="p-4 shadow-md">
            <div className="mb-2 text-sm font-medium text-muted-foreground">Total Interactions</div>
            <div className="text-4xl font-bold text-foreground">4</div>
          </Card>
          
          <Card className="p-4 shadow-md">
            <div className="mb-2 text-sm font-medium text-muted-foreground">Last Contact</div>
            <div className="text-4xl font-bold text-foreground">14<span className="text-xl">mo</span></div>
          </Card>
        </div>

        {/* Timeline */}
        <div className="mb-8">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Relationship Timeline</h2>
          <div className="space-y-6">
            {interactions.map((interaction, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`rounded-full ${interaction.color} p-3 text-white shadow-md`}>
                    <interaction.icon className="h-5 w-5" />
                  </div>
                  {index < interactions.length - 1 && (
                    <div className="mt-2 h-full w-0.5 bg-border"></div>
                  )}
                </div>
                <Card className="flex-1 p-4 shadow-sm">
                  <div className="mb-1 text-sm font-medium text-muted-foreground">
                    {interaction.date}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    {interaction.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {interaction.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-primary p-6 text-center shadow-lg">
          <h3 className="mb-2 text-xl font-bold text-primary-foreground">
            Ready to Reconnect?
          </h3>
          <p className="mb-4 text-primary-foreground/90">
            Based on this history, now is the perfect time to reach out
          </p>
          <Button 
            size="lg"
            variant="secondary"
            className="font-semibold"
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
