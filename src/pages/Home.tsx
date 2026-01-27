import { Link } from "react-router-dom";
import { services } from "@/data/services";
import ServiceGrid from "@/components/services/ServiceGrid";
import { Button } from "@/components/ui/button";
import { ArrowRight, Headphones } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        </div>

        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-primary shadow-lg shadow-primary/30">
                <Headphones className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>

            {/* Title */}
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Layanan{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Helpdesk TIK
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Layanan TIK Dinas Komunikasi dan Informatika Kota Tangerang V3
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/services">
                  Lihat Semua Layanan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-border text-foreground hover:bg-accent sm:w-auto"
              >
                <Link to="/incident">Laporkan Insiden</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
              Layanan Tersedia
            </h2>
            <p className="text-muted-foreground">
              Pilih layanan yang Anda butuhkan
            </p>
          </div>

          <ServiceGrid services={services} />

          <div className="mt-10 text-center">
            <Button
              asChild
              variant="outline"
              className="border-border text-foreground hover:bg-accent"
            >
              <Link to="/services">
                Lihat Katalog Lengkap
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
