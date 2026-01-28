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
  Sparkles,
  FileText,
  Users,
  Calendar,
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
      {/* 🔙 Back Button - Premium Style */}
      <Link
        to="/services"
        className="group mb-8 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-blue-100 hover:text-blue-700 hover:shadow-md dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-blue-950 dark:hover:text-blue-400"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Kembali ke Katalog
      </Link>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* 📄 Main Content - Left Side (2/3 width) */}
        <div className="space-y-6 lg:col-span-2">
          {/* Header Card */}
          <Card className="overflow-hidden border-slate-200/60 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/20 shadow-lg dark:border-slate-800/60 dark:from-slate-900/80 dark:via-blue-950/20 dark:to-cyan-950/10">
            <CardHeader className="border-b border-slate-200/60 bg-white/60 backdrop-blur-sm dark:border-slate-800/60 dark:bg-slate-900/60">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                {/* Icon Box - Premium */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-2xl" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-200/50 bg-gradient-to-br from-blue-100 to-blue-50 shadow-lg dark:border-blue-800/50 dark:from-blue-950/60 dark:to-blue-900/40">
                    <IconComponent className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>

                {/* Title & Meta */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-start gap-3">
                    <CardTitle className="text-3xl font-bold text-slate-900 dark:text-slate-50">
                      {service.title}
                    </CardTitle>
                    {category && (
                      <Badge
                        variant="secondary"
                        className="border border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300"
                      >
                        {category.label}
                      </Badge>
                    )}
                  </div>
                  <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                    {service.description}
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6 pt-6">
              {/* 📊 Quick Stats */}
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex items-start gap-3 rounded-xl border border-slate-200/60 bg-white/80 p-4 backdrop-blur-sm dark:border-slate-800/60 dark:bg-slate-900/50">
                  <div className="rounded-lg bg-blue-100 p-2 dark:bg-blue-950/50">
                    <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      Waktu Proses
                    </p>
                    <p className="mt-1 font-bold text-slate-900 dark:text-slate-50">
                      1-3 Hari Kerja
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-slate-200/60 bg-white/80 p-4 backdrop-blur-sm dark:border-slate-800/60 dark:bg-slate-900/50">
                  <div className="rounded-lg bg-green-100 p-2 dark:bg-green-950/50">
                    <Users className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      PIC Layanan
                    </p>
                    <p className="mt-1 font-bold text-slate-900 dark:text-slate-50">
                      Tim TIK
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-slate-200/60 bg-white/80 p-4 backdrop-blur-sm dark:border-slate-800/60 dark:bg-slate-900/50">
                  <div className="rounded-lg bg-purple-100 p-2 dark:bg-purple-950/50">
                    <Calendar className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      Jam Layanan
                    </p>
                    <p className="mt-1 font-bold text-slate-900 dark:text-slate-50">
                      08:00 - 16:00
                    </p>
                  </div>
                </div>
              </div>

              {/* 📋 Informasi Layanan */}
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-slate-50">
                  <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Informasi Layanan
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-4 rounded-xl border border-slate-200/60 bg-white/80 p-5 backdrop-blur-sm dark:border-slate-800/60 dark:bg-slate-900/50">
                    <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-green-600 dark:text-green-400" />
                    <div className="flex-1">
                      <p className="mb-1 font-semibold text-slate-900 dark:text-slate-50">
                        Persyaratan
                      </p>
                      <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                        Lengkapi seluruh formulir pengajuan dengan data yang
                        valid dan akurat. Pastikan informasi yang diisi sesuai
                        dengan kebutuhan layanan.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl border border-slate-200/60 bg-white/80 p-5 backdrop-blur-sm dark:border-slate-800/60 dark:bg-slate-900/50">
                    <Clock className="mt-0.5 h-6 w-6 shrink-0 text-blue-600 dark:text-blue-400" />
                    <div className="flex-1">
                      <p className="mb-1 font-semibold text-slate-900 dark:text-slate-50">
                        Proses Pengajuan
                      </p>
                      <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                        Setelah pengajuan diterima, tim TIK akan melakukan
                        verifikasi dan proses lebih lanjut. Anda akan mendapat
                        notifikasi melalui email mengenai status pengajuan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ✅ Field yang Diperlukan */}
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-slate-50">
                  <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Field yang Diperlukan
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {service.formSchema.map((field) => (
                    <div
                      key={field.name}
                      className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900/50"
                    >
                      <CheckCircle className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                      <span className="flex-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                        {field.label}
                      </span>
                      {field.required && (
                        <Badge variant="destructive" className="text-xs">
                          Wajib
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 📌 Sidebar - Right Side (1/3 width) */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            {/* CTA Card */}
            <Card className="border-slate-200/60 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg dark:border-slate-800/60 dark:from-blue-950/30 dark:to-cyan-950/20">
              <CardContent className="space-y-4 pt-6">
                <div className="text-center">
                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 p-4 dark:bg-blue-950/50">
                    <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-50">
                    Ajukan Layanan
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    Klik tombol di bawah untuk mengisi formulir pengajuan{" "}
                    <span className="font-semibold">{service.title}</span>.
                  </p>
                </div>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 py-6 text-base font-semibold shadow-lg hover:from-blue-700 hover:to-blue-600 hover:shadow-xl dark:from-blue-500 dark:to-blue-600"
                >
                  <Link to={`/request/${service.id}`}>
                    Ajukan Sekarang
                    <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Help Card */}
            <Card className="border-slate-200/60 bg-white dark:border-slate-800/60 dark:bg-slate-900/50">
              <CardContent className="space-y-3 pt-6">
                <h4 className="font-semibold text-slate-900 dark:text-slate-50">
                  Butuh Bantuan?
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Hubungi helpdesk TIK untuk informasi lebih lanjut.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <span className="font-medium">Email:</span>
                    <span>tik@tangerangkota.go.id</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <span className="font-medium">Telp:</span>
                    <span>(021) 5517744</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
