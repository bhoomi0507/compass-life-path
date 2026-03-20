import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const PREDEFINED_QA: Record<string, string> = {
  "What should I do next?":
    "Based on your progress, you should continue with your current course modules. Once you finish, try the career simulation to test your skills!",
  "Explain my roadmap":
    "Your roadmap has 8 steps: talk to a mentor → get assigned a course → try career simulation → learn → complete modules → take the final test → unlock opportunities → start earning. You're currently in the learning phase!",
  "How do I complete my course?":
    "Go to the Courses page, work through each module in order, and complete the exercises. Once all modules are done, you'll unlock the final test.",
};

const QUICK_PROMPTS = Object.keys(PREDEFINED_QA);

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; text: string }[]
  >([{ role: "bot", text: "Hi! 👋 I'm here to help you navigate your career journey. Ask me anything!" }]);
  const [input, setInput] = useState("");

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    const userMsg = text.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setInput("");

    const match = QUICK_PROMPTS.find(
      (q) => q.toLowerCase() === userMsg.toLowerCase()
    );
    const reply = match
      ? PREDEFINED_QA[match]
      : "That's a great question! For now, I'd suggest checking your dashboard for next steps or reaching out to your mentor for personalized guidance.";

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    }, 600);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 active:scale-95",
          isOpen
            ? "bg-muted text-foreground"
            : "bg-primary text-primary-foreground hover:shadow-xl hover:-translate-y-0.5"
        )}
      >
        {isOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] max-h-[480px] rounded-2xl border border-border bg-card shadow-xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="px-5 py-4 border-b border-border bg-primary/5">
            <p className="font-display text-sm font-semibold text-foreground">HerPath Assistant</p>
            <p className="text-[11px] text-muted-foreground font-body">Ask me about your journey</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-[200px] max-h-[300px]">
            {messages.map((m, i) => (
              <div
                key={i}
                className={cn(
                  "max-w-[85%] px-3.5 py-2.5 rounded-2xl text-[13px] font-body leading-relaxed",
                  m.role === "bot"
                    ? "bg-secondary/60 text-foreground self-start rounded-bl-md"
                    : "bg-primary text-primary-foreground self-end ml-auto rounded-br-md"
                )}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Quick prompts */}
          <div className="px-4 pb-2 flex flex-wrap gap-1.5">
            {QUICK_PROMPTS.map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                className="text-[11px] font-body px-3 py-1.5 rounded-full border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-border flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
              placeholder="Type a message…"
              className="flex-1 bg-secondary/40 rounded-full px-4 py-2 text-sm font-body text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              onClick={() => handleSend(input)}
              className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/85 transition-colors active:scale-95"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
