import { useState } from "react";
import { ArrowLeft, Sparkles, Check, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ScreenType } from "@/pages/Index";

interface ComposerScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

const ComposerScreen = ({ onNavigate }: ComposerScreenProps) => {
  const [message, setMessage] = useState(
    "Hi Jennifer! Just saw the AWS partnership announcement - this is exactly what you were hoping for when we talked last year. Would love to catch up and hear how it came together. Coffee next time I'm in Seattle?"
  );

  const whyThisWorks = [
    "References specific news event (shows you're paying attention)",
    "Connects to your previous conversation (demonstrates continuity)",
    "Celebrates her achievement (positive, supportive tone)",
    "Proposes low-pressure next step (coffee, not a sales pitch)",
    "Brief and respectful of her time (under 50 words)",
  ];

  return (
    <div className="min-h-screen bg-gradient-background pb-8">
      <div className="mx-auto max-w-3xl px-4 pt-6">
        <Button 
          variant="ghost" 
          size="sm" 
          className="mb-6"
          onClick={() => onNavigate("detail")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Profile
        </Button>

        {/* Profile Header */}
        <div className="mb-6 flex items-center gap-4">
          <div className="text-4xl">👩‍💼</div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Jennifer Liu</h1>
            <p className="text-sm text-muted-foreground">VP of Engineering at DataCore Systems</p>
          </div>
        </div>

        {/* AI Notice */}
        <Card className="mb-4 border-2 border-ai bg-ai-light p-4 shadow-md">
          <div className="flex items-start gap-3">
            <Sparkles className="h-5 w-5 flex-shrink-0 text-ai" />
            <div>
              <h3 className="mb-1 font-bold text-foreground">AI-Generated Message</h3>
              <p className="text-sm text-foreground">
                This message was crafted based on your relationship history, recent news, 
                and best practices for reconnection. Feel free to edit it to match your style.
              </p>
            </div>
          </div>
        </Card>

        {/* Message Composer */}
        <Card className="mb-4 p-6 shadow-lg">
          <label className="mb-2 block text-sm font-medium text-foreground">
            Your Message
          </label>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[150px] resize-none text-base"
            placeholder="Type your message..."
          />
          <div className="mt-2 text-right text-sm text-muted-foreground">
            {message.split(' ').length} words
          </div>
        </Card>

        {/* Why This Works */}
        <Card className="mb-6 p-6 shadow-md">
          <h3 className="mb-4 font-bold text-foreground">Why this message works:</h3>
          <div className="space-y-3">
            {whyThisWorks.map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-0.5 rounded-full bg-success/10 p-1">
                  <Check className="h-4 w-4 text-success" />
                </div>
                <p className="text-sm text-foreground">{reason}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Button 
            variant="outline" 
            size="lg"
            className="font-semibold"
          >
            Save Draft
          </Button>
          <Button 
            size="lg"
            className="bg-gradient-primary font-semibold shadow-md"
            onClick={() => onNavigate("success")}
          >
            <Send className="mr-2 h-5 w-5" />
            Send via LinkedIn
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ComposerScreen;
