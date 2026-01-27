import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Clock, ExternalLink, X } from "lucide-react";
import { fetchTickets } from "@/lib/api";
import { Ticket, getPriorityLabel, getPriorityColor } from "@/data/tickets";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StatusBadge from "@/components/ui/status-badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { format } from "date-fns";
import { id } from "date-fns/locale";

const MyTickets = () => {
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  const { data: tickets = [], isLoading } = useQuery({
    queryKey: ["tickets"],
    queryFn: fetchTickets,
  });

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "dd MMM yyyy, HH:mm", { locale: id });
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

      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Tiket Saya</h1>
        <p className="text-muted-foreground">
          Pantau status pengajuan dan laporan Anda
        </p>
      </div>

      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="animate-pulse border-border bg-card">
              <CardContent className="p-6">
                <div className="h-6 w-32 rounded bg-muted" />
                <div className="mt-2 h-4 w-64 rounded bg-muted" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : tickets.length === 0 ? (
        <Card className="border-border bg-card">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <p className="text-lg font-medium text-foreground">
              Belum ada tiket
            </p>
            <p className="mt-2 text-muted-foreground">
              Mulai dengan mengajukan layanan
            </p>
            <Button asChild className="mt-4">
              <Link to="/services">Lihat Layanan</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <Card
              key={ticket.id}
              className="cursor-pointer border-border bg-card transition-colors hover:border-primary/50"
              onClick={() => setSelectedTicket(ticket)}
            >
              <CardContent className="p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="font-mono text-sm font-medium text-primary">
                        {ticket.id}
                      </span>
                      <StatusBadge status={ticket.status} />
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs ${getPriorityColor(ticket.priority)}`}
                      >
                        {getPriorityLabel(ticket.priority)}
                      </span>
                    </div>
                    <h3 className="font-medium text-card-foreground">
                      {ticket.serviceName}
                    </h3>
                    <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">
                      {ticket.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{formatDate(ticket.createdAt)}</span>
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Detail Modal */}
      <Dialog open={!!selectedTicket} onOpenChange={() => setSelectedTicket(null)}>
        <DialogContent className="border-border bg-card sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-card-foreground">
              <span className="font-mono text-primary">
                {selectedTicket?.id}
              </span>
            </DialogTitle>
          </DialogHeader>

          {selectedTicket && (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <StatusBadge status={selectedTicket.status} />
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${getPriorityColor(selectedTicket.priority)}`}
                >
                  {getPriorityLabel(selectedTicket.priority)}
                </span>
              </div>

              <div>
                <h3 className="font-medium text-foreground">
                  {selectedTicket.serviceName}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {selectedTicket.description}
                </p>
              </div>

              <div className="space-y-2 rounded-lg border border-border bg-background p-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Dibuat</span>
                  <span className="text-foreground">
                    {formatDate(selectedTicket.createdAt)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Diperbarui</span>
                  <span className="text-foreground">
                    {formatDate(selectedTicket.updatedAt)}
                  </span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full border-border text-foreground"
                onClick={() => setSelectedTicket(null)}
              >
                Tutup
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MyTickets;
