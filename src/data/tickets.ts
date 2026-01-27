export type TicketStatus = "open" | "in_progress" | "resolved" | "closed";
export type TicketPriority = "low" | "medium" | "high" | "critical";

export interface Ticket {
  id: string;
  serviceId: string;
  serviceName: string;
  status: TicketStatus;
  priority: TicketPriority;
  createdAt: string;
  updatedAt: string;
  description: string;
}

export const mockTickets: Ticket[] = [
  {
    id: "TKT-2024-001",
    serviceId: "email-resmi",
    serviceName: "Email Resmi",
    status: "open",
    priority: "medium",
    createdAt: "2024-01-15T08:30:00Z",
    updatedAt: "2024-01-15T08:30:00Z",
    description: "Pengajuan email resmi untuk pegawai baru",
  },
  {
    id: "TKT-2024-002",
    serviceId: "vpn",
    serviceName: "VPN",
    status: "in_progress",
    priority: "high",
    createdAt: "2024-01-14T10:00:00Z",
    updatedAt: "2024-01-15T14:20:00Z",
    description: "Permintaan akses VPN untuk WFH",
  },
  {
    id: "TKT-2024-003",
    serviceId: "laporan-insiden",
    serviceName: "Laporan Insiden",
    status: "resolved",
    priority: "critical",
    createdAt: "2024-01-13T06:15:00Z",
    updatedAt: "2024-01-14T09:45:00Z",
    description: "Sistem email down selama 2 jam",
  },
  {
    id: "TKT-2024-004",
    serviceId: "subdomain",
    serviceName: "Subdomain",
    status: "closed",
    priority: "low",
    createdAt: "2024-01-10T11:00:00Z",
    updatedAt: "2024-01-12T16:00:00Z",
    description: "Pengajuan subdomain untuk aplikasi absensi",
  },
  {
    id: "TKT-2024-005",
    serviceId: "video-conference",
    serviceName: "Video Conference Zoom",
    status: "open",
    priority: "medium",
    createdAt: "2024-01-16T07:00:00Z",
    updatedAt: "2024-01-16T07:00:00Z",
    description: "Request Zoom untuk rapat koordinasi",
  },
];

export const getStatusLabel = (status: TicketStatus): string => {
  const labels: Record<TicketStatus, string> = {
    open: "Menunggu",
    in_progress: "Diproses",
    resolved: "Selesai",
    closed: "Ditutup",
  };
  return labels[status];
};

export const getStatusColor = (status: TicketStatus): string => {
  const colors: Record<TicketStatus, string> = {
    open: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    in_progress: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    resolved: "bg-green-500/20 text-green-400 border-green-500/30",
    closed: "bg-muted text-muted-foreground border-border",
  };
  return colors[status];
};

export const getPriorityLabel = (priority: TicketPriority): string => {
  const labels: Record<TicketPriority, string> = {
    low: "Rendah",
    medium: "Sedang",
    high: "Tinggi",
    critical: "Kritis",
  };
  return labels[priority];
};

export const getPriorityColor = (priority: TicketPriority): string => {
  const colors: Record<TicketPriority, string> = {
    low: "bg-muted text-muted-foreground",
    medium: "bg-blue-500/20 text-blue-400",
    high: "bg-orange-500/20 text-orange-400",
    critical: "bg-red-500/20 text-red-400",
  };
  return colors[priority];
};
