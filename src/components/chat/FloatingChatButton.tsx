import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Panel */}
      <div
        className={cn(
          "absolute bottom-16 right-0 w-80 overflow-hidden rounded-2xl border border-border bg-card shadow-xl transition-all duration-300",
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border bg-primary px-4 py-3">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-primary-foreground" />
            <span className="font-medium text-primary-foreground">Helpdesk Chat</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Chat Body */}
        <div className="flex h-72 flex-col bg-card">
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex flex-col gap-3">
              {/* Bot Message */}
              <div className="flex gap-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
                  <MessageCircle className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="rounded-2xl rounded-tl-sm bg-muted px-4 py-2">
                  <p className="text-sm text-foreground">
                    Halo! Selamat datang di Helpdesk TIK. Ada yang bisa kami bantu?
                  </p>
                </div>
              </div>

              {/* Info Message */}
              <div className="mx-auto rounded-lg bg-accent/50 px-3 py-2 text-center">
                <p className="text-xs text-muted-foreground">
                  🤖 Chatbot Helpdesk (integrasi menyusul)
                </p>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-border p-3">
            <div className="flex gap-2">
              <Input
                placeholder="Ketik pesan..."
                className="flex-1 rounded-full border-border bg-background"
                disabled
              />
              <Button size="icon" className="shrink-0 rounded-full" disabled>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <Button
        size="icon"
        className={cn(
          "h-14 w-14 rounded-full shadow-lg transition-all duration-300 hover:scale-105",
          isOpen && "rotate-90"
        )}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Tutup chat" : "Buka chat"}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};

export default FloatingChatButton;
