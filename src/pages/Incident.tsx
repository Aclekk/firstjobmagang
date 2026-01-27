import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { getServiceById } from "@/data/services";
import { submitIncident } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FormRenderer from "@/components/forms/FormRenderer";
import { useToast } from "@/hooks/use-toast";

const Incident = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const incidentService = getServiceById("laporan-insiden");

  if (!incidentService) {
    return null;
  }

  const handleSubmit = async (data: Record<string, unknown>) => {
    setIsLoading(true);
    try {
      const response = await submitIncident({ formData: data });

      if (response.success) {
        toast({
          title: "Laporan Terkirim!",
          description: `Nomor tiket: ${response.ticketId}. ${response.message}`,
        });
        navigate("/my-tickets");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Laporan Gagal",
        description: "Terjadi kesalahan. Silakan coba lagi.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container py-10">
      {/* Back Button */}
      <Link
        to="/"
        className="mb-6 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Kembali ke Beranda
      </Link>

      <div className="mx-auto max-w-2xl">
        {/* Alert Banner */}
        <div className="mb-6 flex items-start gap-3 rounded-lg border border-destructive/50 bg-destructive/10 p-4">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
          <div>
            <p className="font-medium text-foreground">Laporkan Insiden TIK</p>
            <p className="text-sm text-muted-foreground">
              Gunakan formulir ini untuk melaporkan gangguan atau insiden pada
              sistem TIK. Tim kami akan segera menindaklanjuti.
            </p>
          </div>
        </div>

        <Card className="border-border bg-card">
          <CardHeader className="border-b border-border">
            <CardTitle className="text-card-foreground">
              Formulir Laporan Insiden
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Berikan informasi selengkap mungkin agar kami dapat menangani
              dengan cepat
            </p>
          </CardHeader>
          <CardContent className="pt-6">
            <FormRenderer
              fields={incidentService.formSchema}
              onSubmit={handleSubmit}
              isLoading={isLoading}
              submitLabel="Kirim Laporan"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Incident;
