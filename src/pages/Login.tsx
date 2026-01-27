import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Headphones, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login
    setTimeout(() => {
      toast({
        title: "Login Berhasil!",
        description: "Selamat datang di Helpdesk TIK.",
      });
      setIsLoading(false);
      navigate("/my-tickets");
    }, 1000);
  };

  return (
    <div className="flex min-h-[calc(100vh-200px)] items-center justify-center py-10">
      <div className="container max-w-md">
        <Card className="border-border bg-card">
          <CardHeader className="space-y-4 text-center">
            {/* Logo */}
            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary shadow-lg">
                <Headphones className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <div>
              <CardTitle className="text-2xl text-card-foreground">
                Masuk ke Helpdesk
              </CardTitle>
              <p className="mt-2 text-sm text-muted-foreground">
                Masukkan kredensial Anda untuk mengakses akun
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nama@tangerangkota.go.id"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="border-border bg-background pr-10 text-foreground placeholder:text-muted-foreground"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Memproses..." : "Masuk"}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              <p>Demo: Gunakan email dan password apapun</p>
            </div>

            <div className="mt-4 text-center">
              <Link
                to="/"
                className="text-sm text-primary hover:underline"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
