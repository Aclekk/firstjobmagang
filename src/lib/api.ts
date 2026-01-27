import { services, Service } from "@/data/services";
import { mockTickets, Ticket } from "@/data/tickets";

// Simulated API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// GET /services
export const fetchServices = async (): Promise<Service[]> => {
  await delay(300);
  return services;
};

// GET /services/:id
export const fetchServiceById = async (id: string): Promise<Service | null> => {
  await delay(200);
  const service = services.find((s) => s.id === id);
  return service || null;
};

// POST /requests
export interface RequestPayload {
  serviceId: string;
  formData: Record<string, unknown>;
}

export interface RequestResponse {
  success: boolean;
  ticketId: string;
  message: string;
}

export const submitRequest = async (payload: RequestPayload): Promise<RequestResponse> => {
  await delay(800);
  
  // Simulate successful submission
  const ticketId = `TKT-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 1000)).padStart(3, "0")}`;
  
  return {
    success: true,
    ticketId,
    message: "Pengajuan berhasil dikirim. Kami akan memproses permintaan Anda.",
  };
};

// GET /tickets
export const fetchTickets = async (): Promise<Ticket[]> => {
  await delay(400);
  return mockTickets;
};

// GET /tickets/:id
export const fetchTicketById = async (id: string): Promise<Ticket | null> => {
  await delay(200);
  const ticket = mockTickets.find((t) => t.id === id);
  return ticket || null;
};

// POST /incidents
export interface IncidentPayload {
  formData: Record<string, unknown>;
}

export const submitIncident = async (payload: IncidentPayload): Promise<RequestResponse> => {
  await delay(800);
  
  const ticketId = `INC-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 1000)).padStart(3, "0")}`;
  
  return {
    success: true,
    ticketId,
    message: "Laporan insiden berhasil dikirim. Tim akan segera menindaklanjuti.",
  };
};
