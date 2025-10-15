import { ArrowLeft, CheckCircle, Clock, Bell, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScreenType } from "@/pages/Index";

interface SuccessScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

const SuccessScreen = ({ onNavigate }: SuccessScreenProps) => {
  return (
    <div className="min-h-screen bg-slate-900 pb-8">
      <div className="mx-auto max-w-3xl px-4 pt-6">
        <Button 
          variant="ghost" 
          size="sm" 
          className="mb-6 text-white hover:bg-white/10"
          onClick={() => onNavigate("digest")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Digest
        </Button>

        {/* Success State */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-lime-400 p-6">
              <CheckCircle className="h-16 w-16 text-slate-900" />
            </div>
          </div>
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-white">Message Sent!</h1>
          <p className="text-gray-300">
            Your message to Jennifer Liu has been sent via LinkedIn
          </p>
        </div>

        {/* What Happens Next */}
        <Card className="mb-4 rounded-2xl bg-white p-8 shadow-2xl">
          <h2 className="mb-4 text-xl font-bold tracking-tight text-slate-900">What happens next?</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-slate-800 p-3">
                <Clock className="h-5 w-5 text-lime-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">We'll track engagement</h3>
                <p className="text-sm text-gray-600">
                  You'll be notified when Jennifer views or responds to your message
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-slate-800 p-3">
                <Bell className="h-5 w-5 text-lime-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Smart follow-up reminders</h3>
                <p className="text-sm text-gray-600">
                  If there's no response in 7 days, we'll suggest a gentle follow-up
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-slate-800 p-3">
                <Calendar className="h-5 w-5 text-lime-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Relationship updated</h3>
                <p className="text-sm text-gray-600">
                  Your last contact date and connection strength have been refreshed
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Next Opportunity */}
        <Card className="mb-4 rounded-2xl border border-slate-700 bg-slate-800 p-8 text-center shadow-lg">
          <h2 className="mb-2 text-xl font-bold tracking-tight text-white">
            Ready for your next opportunity?
          </h2>
          <p className="mb-4 text-gray-300">
            You have 2 more reconnection opportunities today
          </p>
          <Button 
            size="lg"
            className="rounded-lg bg-lime-400 px-8 py-4 font-semibold text-slate-900 shadow-lg shadow-lime-400/20 transition-all hover:scale-105 hover:bg-lime-300"
            onClick={() => onNavigate("digest")}
          >
            View Remaining Opportunities
          </Button>
        </Card>

        {/* Weekly Maintenance Preview */}
        <Card className="rounded-2xl bg-white p-8 shadow-2xl">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold tracking-tight text-slate-900">Weekly Relationship Maintenance</h2>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-gray-600 hover:text-slate-900"
              onClick={() => onNavigate("maintenance")}
            >
              View All
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
            <div className="text-3xl">👨‍💼</div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900">David Park</h3>
              <p className="text-sm text-gray-600">Director of Sales at SalesTech Pro</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Due</div>
              <div className="font-semibold text-slate-900">This Week</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SuccessScreen;
