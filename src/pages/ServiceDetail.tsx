import { useParams, Link, Navigate } from "react-router-dom";
import {
  Mail,
  PenTool,
  Shield,
  Video,
  Globe,
  GitBranch,
  HardDrive,
  AlertTriangle,
  HelpCircle,
  ArrowLeft,
  Clock,
  CheckCircle,
  LucideIcon,
} from "lucide-react";
import { getServiceById, categories } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, LucideIcon> = {
  Mail,
  PenTool,
  Shield,
  Video,
  Globe,
  GitBranch,
  HardDrive,
  AlertTriangle,
  HelpCircle,
};

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = id ? getServiceById(id) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const IconComponent = iconMap[service.icon] || HelpCircle;
  const category = categories.find((c) => c.id === service.category);

  return (
    <div className="container py-10">
      {/* Back Button */}
      <Link
        to="/services"
        className="mb-6 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Kembali ke Katalog
      </Link>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Card className="border-border bg-card">
            <CardHeader className="border-b border-border">
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <CardTitle className="text-2xl text-card-foreground">
                      {service.title}
                    </CardTitle>
                    {category && (
                      <Badge
                        variant="secondary"
                        className="border-border bg-secondary text-secondary-foreground"
                      >
                        {category.label}
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                Informasi Layanan
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 rounded-lg border border-border bg-background p-4">
                  <Clock className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">
                      Waktu Penyelesaian
                    </p>
                    <p className="text-sm text-muted-foreground">
                      1-3 hari kerja tergantung kompleksitas
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-border bg-background p-4">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Persyaratan</p>
                    <p className="text-sm text-muted-foreground">
                      Lengkapi formulir pengajuan dengan data yang valid
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                  Field yang Diperlukan
                </h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  {service.formSchema.map((field) => (
                    <div
                      key={field.name}
                      className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2"
                    >
                      <span className="text-sm text-foreground">
                        {field.label}
                      </span>
                      {field.required && (
                        <span className="text-xs text-destructive">*</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24 border-border bg-card">
            <CardContent className="pt-6">
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                Ajukan Layanan
              </h3>
              <p className="mb-6 text-sm text-muted-foreground">
                Klik tombol di bawah untuk mengisi formulir pengajuan{" "}
                {service.title}.
              </p>
              <Button asChild className="w-full">
                <Link to={`/request/${service.id}`}>Ajukan Sekarang</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
