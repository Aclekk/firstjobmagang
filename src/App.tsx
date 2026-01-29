import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import AppLayout from "@/components/layout/AppLayout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import RequestForm from "@/pages/RequestForm";
import Incident from "@/pages/Incident";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                {/* Public Routes - Bisa diakses tanpa login */}
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:id" element={<ServiceDetail />} />
                <Route path="/login" element={<Login />} />

                {/* Protected Routes - Butuh login */}
                {/* Email Resmi */}
                <Route
                  path="/request/email-resmi"
                  element={
                    <ProtectedRoute>
                      <RequestForm />
                    </ProtectedRoute>
                  }
                />

                {/* Tanda Tangan Elektronik */}
                <Route
                  path="/request/tanda-tangan-elektronik"
                  element={
                    <ProtectedRoute>
                      <RequestForm />
                    </ProtectedRoute>
                  }
                />

                {/* VPN - TIDAK PERLU LOGIN (Public) */}
                <Route path="/request/vpn" element={<RequestForm />} />

                {/* Dynamic Service Request Route */}
                <Route
                  path="/request/:id"
                  element={
                    <ProtectedRoute>
                      <RequestForm />
                    </ProtectedRoute>
                  }
                />

                {/* Subdomain */}
                <Route
                  path="/request/subdomain"
                  element={
                    <ProtectedRoute>
                      <RequestForm />
                    </ProtectedRoute>
                  }
                />

                {/* Repository Git */}
                <Route
                  path="/request/repository-git"
                  element={
                    <ProtectedRoute>
                      <RequestForm />
                    </ProtectedRoute>
                  }
                />

                {/* Repository Storage */}
                <Route
                  path="/request/repository-storage"
                  element={
                    <ProtectedRoute>
                      <RequestForm />
                    </ProtectedRoute>
                  }
                />

                {/* Laporan Insiden - Juga butuh login */}
                <Route
                  path="/incident"
                  element={
                    <ProtectedRoute>
                      <Incident />
                    </ProtectedRoute>
                  }
                />
              </Route>

              {/* 404 Page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
