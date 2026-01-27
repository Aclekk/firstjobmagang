import { Link } from "react-router-dom";
import { Moon, Sun, Maximize, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">H</span>
          </div>
          <span className="text-lg font-semibold text-foreground">Helpdesk TIK</span>
        </Link>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
            className="text-foreground hover:bg-accent"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleFullscreen}
            aria-label="Mode layar penuh"
            className="hidden text-foreground hover:bg-accent md:flex"
          >
            <Maximize className="h-5 w-5" />
          </Button>

          <Button asChild variant="default" className="ml-2">
            <Link to="/login">
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
