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
    <div className="min-h-screen bg-gradient-background pb-8">
      <div className="mx-auto max-w-3xl px-4 pt-6">
        <Button 
          variant="ghost" 
          size="sm" 
          className="mb-6"
          onClick={() => onNavigate("success")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <h1 className="mb-6 text-3xl font-bold text-foreground">
          Weekly Relationship Maintenance
        </h1>

        {/* Info Card */}
        <Card className="mb-6 bg-gradient-success p-6 shadow-md">
          <h2 className="mb-2 text-xl font-bold text-success-foreground">
            Keep Your Network Warm
          </h2>
          <p className="text-success-foreground/90">
            These are relationships worth maintaining even without a specific trigger. 
            A brief, thoughtful check-in helps keep the connection strong.
          </p>
        </Card>

        {/* Contact Card */}
        <Card className="mb-6 p-6 shadow-lg">
          <div className="mb-6 flex items-start gap-4">
            <div className="text-5xl">👨‍💼</div>
            <div className="flex-1">
              <div className="mb-2 flex items-center gap-2">
                <h2 className="text-2xl font-bold text-foreground">David Park</h2>
                <Badge className="bg-success text-success-foreground">TIER 1</Badge>
              </div>
              <p className="mb-1 text-muted-foreground">Director of Sales</p>
              <p className="font-medium text-foreground">SalesTech Pro</p>
              <div className="mt-3 flex items-center gap-4 text-sm">
                <span className="text-muted-foreground">
                  Last contact: <span className="font-semibold">10 weeks ago</span>
                </span>
                <span className="text-muted-foreground">
                  Connection: <span className="font-semibold text-primary">78%</span>
                </span>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="mb-3 font-bold text-foreground">Conversation Starters</h3>
            <div className="space-y-3">
              {conversationStarters.map((starter) => (
                <Card key={starter.number} className="bg-muted/50 p-4">
                  <div className="flex gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {starter.number}
                    </div>
                    <p className="text-sm text-foreground">{starter.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Card>

        {/* Pro Tip */}
        <Card className="mb-6 border-2 border-primary bg-primary/5 p-6 shadow-md">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-6 w-6 flex-shrink-0 text-primary" />
            <div>
              <h3 className="mb-2 font-bold text-foreground">Pro tip</h3>
              <p className="text-sm text-foreground">
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
            variant="outline" 
            size="lg"
            className="font-semibold"
          >
            <Clock className="mr-2 h-5 w-5" />
            Remind Me Next Week
          </Button>
          <Button 
            size="lg"
            className="bg-gradient-primary font-semibold shadow-md"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Draft Check-in Message
          </Button>
        </div>

        {/* Maintenance Cadence */}
        <Card className="p-6 shadow-md">
          <h3 className="mb-4 font-bold text-foreground">Your Maintenance Cadence</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
              <div className="flex items-center gap-3">
                <Badge className="bg-success text-success-foreground">TIER 1</Badge>
                <span className="text-sm text-foreground">Key relationships</span>
              </div>
              <span className="text-sm font-semibold text-foreground">Every 3 months</span>
            </div>
            
            <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
              <div className="flex items-center gap-3">
                <Badge variant="secondary">TIER 2</Badge>
                <span className="text-sm text-foreground">Important contacts</span>
              </div>
              <span className="text-sm font-semibold text-foreground">Every 6 months</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MaintenanceScreen;
