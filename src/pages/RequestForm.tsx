import { useState } from "react";
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getServiceById } from "@/data/services";
import { submitRequest } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FormRenderer from "@/components/forms/FormRenderer";
import { useToast } from "@/hooks/use-toast";

const RequestForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const service = id ? getServiceById(id) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const handleSubmit = async (data: Record<string, unknown>) => {
    setIsLoading(true);
    try {
      const response = await submitRequest({
        serviceId: service.id,
        formData: data,
      });

      if (response.success) {
        toast({
          title: "Pengajuan Berhasil!",
          description: `Nomor tiket: ${response.ticketId}. ${response.message}`,
        });
        navigate("/my-tickets");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Pengajuan Gagal",
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
        to={service.route}
        className="mb-6 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Kembali ke Detail Layanan
      </Link>

      <div className="mx-auto max-w-2xl">
        <Card className="border-border bg-card">
          <CardHeader className="border-b border-border">
            <CardTitle className="text-card-foreground">
              Formulir Pengajuan: {service.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Lengkapi formulir di bawah ini untuk mengajukan {service.title}
            </p>
          </CardHeader>
          <CardContent className="pt-6">
            <FormRenderer
              fields={service.formSchema}
              onSubmit={handleSubmit}
              isLoading={isLoading}
              submitLabel="Kirim Pengajuan"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RequestForm;
