import { Link } from "react-router-dom";
import { Moon, Sun, Maximize, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
// Import logo dari assets
import LogoImage from "@/assets/logo.png";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  // Fungsi untuk toggle fullscreen mode
  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-100/50 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:border-slate-700/50 dark:bg-slate-900/80 dark:supports-[backdrop-filter]:bg-slate-900/60">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo & Brand - Kiri */}
        <Link
          to="/"
          className="group flex items-center gap-3 transition-all duration-300"
        >
          {/* Logo tanpa background box - pure logo */}
          <div className="relative h-12 w-12">
            {/* Glow effect di belakang logo - muncul saat hover */}
            {/* Light mode: blue glow | Dark mode: cyan glow */}
            <div className="absolute inset-0 rounded-xl bg-blue-500/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 dark:bg-cyan-500/30" />

            {/* Logo image langsung tanpa box wrapper */}
            <img
              src={LogoImage}
              alt="Kominfo Logo"
              className="relative h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Brand Text */}
          <div className="flex flex-col">
            {/* Light mode: text hitam | Dark mode: text putih */}
            <span className="text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400">
              Helpdesk TIK
            </span>
            {/* Light mode: text abu gelap | Dark mode: text abu terang */}
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Kota Tangerang
            </span>
          </div>
        </Link>

        {/* Action Buttons - Kanan */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button - Dark/Light mode */}
          {/* Light mode: abu gelap dengan hover biru | Dark mode: abu terang dengan hover cyan */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Aktifkan mode terang" : "Aktifkan mode gelap"
            }
            className="relative h-10 w-10 rounded-xl text-slate-600 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-cyan-400"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          {/* Fullscreen Button - Hidden di mobile */}
          {/* Light mode: abu gelap dengan hover biru | Dark mode: abu terang dengan hover cyan */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleFullscreen}
            aria-label="Mode layar penuh"
            className="relative hidden h-10 w-10 rounded-xl text-slate-600 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-cyan-400 md:flex"
          >
            <Maximize className="h-5 w-5" />
          </Button>

          {/* Login Button - Primary CTA dengan gradient */}
          {/* Light mode: gradient biru | Dark mode: gradient cyan */}
          <Button
            asChild
            className="group ml-2 gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 font-semibold shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 dark:from-cyan-500 dark:to-blue-500 dark:shadow-cyan-500/20 dark:hover:shadow-cyan-500/30"
          >
            <Link to="/login">
              <LogIn className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              <span className="hidden sm:inline">Login</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
