import { Service } from "@/data/services";
import ServiceCard from "./ServiceCard";

interface ServiceGridProps {
  services: Service[];
}

const ServiceGrid = ({ services }: ServiceGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServiceGrid;
