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
    <div className="min-h-screen bg-slate-900 pb-8">
      {/* Header with Profile */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 px-4 pb-24 pt-6">
        <Button 
          variant="ghost" 
          size="sm" 
          className="mb-4 text-white hover:bg-white/10"
          onClick={() => onNavigate("digest")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Digest
        </Button>
        
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 text-6xl">👩‍💼</div>
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-white">Jennifer Liu</h1>
          <p className="mb-1 text-lg text-gray-200">VP of Engineering</p>
          <p className="text-gray-300">DataCore Systems</p>
        </div>
      </div>

      <div className="mx-auto -mt-16 max-w-4xl px-4">
        {/* Connection Strength Card */}
        <Card className="mb-4 rounded-2xl bg-white p-8 shadow-2xl">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-slate-900">Connection Strength</h3>
              <p className="text-sm text-gray-600">Strong relationship maintained</p>
            </div>
            <Badge className="bg-lime-400 text-xs font-semibold uppercase tracking-wider text-slate-900">STRONG</Badge>
          </div>
          <Progress value={85} className="mb-2 h-3" />
          <p className="text-right text-2xl font-bold text-lime-400">85%</p>
        </Card>

        {/* Alert Card */}
        <Card className="mb-4 rounded-2xl border-2 border-lime-400/20 bg-lime-400/10 p-8 shadow-xl">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-6 w-6 flex-shrink-0 text-lime-400" />
            <div className="flex-1">
              <h3 className="mb-2 text-lg font-bold tracking-tight text-white">Perfect Timing to Reconnect</h3>
              <p className="mb-2 text-sm text-gray-200">
                <strong>DataCore Systems announced partnership with AWS</strong>
              </p>
              <p className="text-sm text-gray-400">TechCrunch • 2 hours ago</p>
              <p className="mt-3 text-sm text-gray-200">
                This aligns with your last conversation about cloud infrastructure scaling. 
                Jennifer mentioned this was a key goal for 2024.
              </p>
            </div>
          </div>
        </Card>

        {/* Context Card */}
        <Card className="mb-4 rounded-2xl bg-white p-8 shadow-2xl">
          <div className="mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-lime-400" />
            <h3 className="text-lg font-semibold tracking-tight text-slate-900">Relationship Context</h3>
          </div>
          
          <div className="mb-4 space-y-3">
            <div>
              <p className="text-sm font-medium text-gray-600">Last Interaction</p>
              <p className="text-slate-900">Dinner in San Francisco • December 2023</p>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-600">Open Commitment</p>
              <p className="font-medium text-slate-900">
                She offered to introduce you to her CEO when the AWS deal closed
              </p>
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-gray-600">Topics Discussed</p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-slate-800 text-xs text-gray-300">Cloud Infrastructure</Badge>
              <Badge className="bg-slate-800 text-xs text-gray-300">Enterprise SaaS</Badge>
              <Badge className="bg-slate-800 text-xs text-gray-300">Scaling Teams</Badge>
              <Badge className="bg-slate-800 text-xs text-gray-300">AWS Migration</Badge>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Button 
            size="lg"
            className="rounded-lg bg-slate-800 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-slate-700"
            onClick={() => onNavigate("history")}
          >
            See Full History
          </Button>
          <Button 
            size="lg"
            className="rounded-lg bg-lime-400 px-8 py-4 font-semibold text-slate-900 shadow-lg shadow-lime-400/20 transition-all hover:scale-105 hover:bg-lime-300"
            onClick={() => onNavigate("composer")}
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Draft Message
          </Button>
        </div>

        {/* AI Recommendation */}
        <Card className="rounded-2xl border border-slate-700 bg-slate-800 p-8 shadow-lg">
          <div className="flex items-start gap-3">
            <Sparkles className="h-6 w-6 flex-shrink-0 text-lime-400" />
            <div>
              <h3 className="mb-2 font-bold tracking-tight text-white">AI Recommendation</h3>
              <p className="text-sm text-gray-300">
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
