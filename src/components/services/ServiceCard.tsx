import { Link } from "react-router-dom";
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
  LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Service } from "@/data/services";
import { cn } from "@/lib/utils";

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

interface ServiceCardProps {
  service: Service;
  className?: string;
}

const ServiceCard = ({ service, className }: ServiceCardProps) => {
  const IconComponent = iconMap[service.icon] || HelpCircle;

  return (
    <Link to={service.route}>
      <Card
        className={cn(
          "group cursor-pointer overflow-hidden border-border/50 bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5",
          className
        )}
      >
        <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
            <IconComponent className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div>
            <h3 className="font-semibold text-card-foreground transition-colors group-hover:text-primary">
              {service.title}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
              {service.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ServiceCard;
