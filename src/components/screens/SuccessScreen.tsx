import { ArrowLeft, CheckCircle, Clock, Bell, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScreenType } from "@/pages/Index";

interface SuccessScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

const SuccessScreen = ({ onNavigate }: SuccessScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-background pb-8">
      <div className="mx-auto max-w-3xl px-4 pt-6">
        <Button 
          variant="ghost" 
          size="sm" 
          className="mb-6"
          onClick={() => onNavigate("digest")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Digest
        </Button>

        {/* Success State */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-success/10 p-6">
              <CheckCircle className="h-16 w-16 text-success" />
            </div>
          </div>
          <h1 className="mb-2 text-3xl font-bold text-foreground">Message Sent!</h1>
          <p className="text-muted-foreground">
            Your message to Jennifer Liu has been sent via LinkedIn
          </p>
        </div>

        {/* What Happens Next */}
        <Card className="mb-4 p-6 shadow-md">
          <h2 className="mb-4 text-xl font-bold text-foreground">What happens next?</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-primary/10 p-2">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">We'll track engagement</h3>
                <p className="text-sm text-muted-foreground">
                  You'll be notified when Jennifer views or responds to your message
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-ai/10 p-2">
                <Bell className="h-5 w-5 text-ai" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Smart follow-up reminders</h3>
                <p className="text-sm text-muted-foreground">
                  If there's no response in 7 days, we'll suggest a gentle follow-up
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-success/10 p-2">
                <Calendar className="h-5 w-5 text-success" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Relationship updated</h3>
                <p className="text-sm text-muted-foreground">
                  Your last contact date and connection strength have been refreshed
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Next Opportunity */}
        <Card className="mb-4 bg-gradient-primary p-6 text-center shadow-lg">
          <h2 className="mb-2 text-xl font-bold text-primary-foreground">
            Ready for your next opportunity?
          </h2>
          <p className="mb-4 text-primary-foreground/90">
            You have 2 more reconnection opportunities today
          </p>
          <Button 
            variant="secondary"
            size="lg"
            className="font-semibold"
            onClick={() => onNavigate("digest")}
          >
            View Remaining Opportunities
          </Button>
        </Card>

        {/* Weekly Maintenance Preview */}
        <Card className="p-6 shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-foreground">Weekly Relationship Maintenance</h2>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => onNavigate("maintenance")}
            >
              View All
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex items-center gap-4 rounded-lg border bg-muted/50 p-4">
            <div className="text-3xl">👨‍💼</div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">David Park</h3>
              <p className="text-sm text-muted-foreground">Director of Sales at SalesTech Pro</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Due</div>
              <div className="font-semibold text-foreground">This Week</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SuccessScreen;
