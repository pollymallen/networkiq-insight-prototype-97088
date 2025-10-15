import { ArrowLeft, AlertCircle, Sparkles, TrendingUp, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScreenType } from "@/pages/Index";

interface ContactDetailScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

const ContactDetailScreen = ({ onNavigate }: ContactDetailScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-background pb-8">
      {/* Header with Profile */}
      <div className="bg-gradient-primary px-4 pb-24 pt-6">
        <Button 
          variant="ghost" 
          size="sm" 
          className="mb-4 text-primary-foreground hover:bg-white/20"
          onClick={() => onNavigate("digest")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Digest
        </Button>
        
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 text-6xl">👩‍💼</div>
          <h1 className="mb-2 text-3xl font-bold text-primary-foreground">Jennifer Liu</h1>
          <p className="mb-1 text-lg text-primary-foreground/90">VP of Engineering</p>
          <p className="text-primary-foreground/80">DataCore Systems</p>
        </div>
      </div>

      <div className="mx-auto -mt-16 max-w-4xl px-4">
        {/* Connection Strength Card */}
        <Card className="mb-4 p-6 shadow-lg">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Connection Strength</h3>
              <p className="text-sm text-muted-foreground">Strong relationship maintained</p>
            </div>
            <Badge className="bg-success text-success-foreground">STRONG</Badge>
          </div>
          <Progress value={85} className="mb-2 h-3" />
          <p className="text-right text-2xl font-bold text-primary">85%</p>
        </Card>

        {/* Alert Card */}
        <Card className="mb-4 border-2 border-alert bg-alert-light p-6 shadow-md">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-6 w-6 flex-shrink-0 text-alert" />
            <div className="flex-1">
              <h3 className="mb-2 text-lg font-bold text-foreground">Perfect Timing to Reconnect</h3>
              <p className="mb-2 text-sm text-foreground">
                <strong>DataCore Systems announced partnership with AWS</strong>
              </p>
              <p className="text-sm text-muted-foreground">TechCrunch • 2 hours ago</p>
              <p className="mt-3 text-sm text-foreground">
                This aligns with your last conversation about cloud infrastructure scaling. 
                Jennifer mentioned this was a key goal for 2024.
              </p>
            </div>
          </div>
        </Card>

        {/* Context Card */}
        <Card className="mb-4 p-6 shadow-md">
          <div className="mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Relationship Context</h3>
          </div>
          
          <div className="mb-4 space-y-3">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Last Interaction</p>
              <p className="text-foreground">Dinner in San Francisco • December 2023</p>
            </div>
            
            <div>
              <p className="text-sm font-medium text-muted-foreground">Open Commitment</p>
              <p className="font-medium text-foreground">
                She offered to introduce you to her CEO when the AWS deal closed
              </p>
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-muted-foreground">Topics Discussed</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Cloud Infrastructure</Badge>
              <Badge variant="secondary">Enterprise SaaS</Badge>
              <Badge variant="secondary">Scaling Teams</Badge>
              <Badge variant="secondary">AWS Migration</Badge>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Button 
            variant="outline" 
            size="lg"
            className="font-semibold"
            onClick={() => onNavigate("history")}
          >
            See Full History
          </Button>
          <Button 
            size="lg"
            className="bg-gradient-primary font-semibold shadow-md"
            onClick={() => onNavigate("composer")}
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Draft Message
          </Button>
        </div>

        {/* AI Recommendation */}
        <Card className="border-2 border-ai bg-ai-light p-6 shadow-md">
          <div className="flex items-start gap-3">
            <Sparkles className="h-6 w-6 flex-shrink-0 text-ai" />
            <div>
              <h3 className="mb-2 font-bold text-foreground">AI Recommendation</h3>
              <p className="text-sm text-foreground">
                This is an ideal time to reconnect. The AWS partnership validates topics from 
                your last conversation, showing you were paying attention. A brief message 
                congratulating her and referencing your previous discussion about cloud strategy 
                would be well-received.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContactDetailScreen;
