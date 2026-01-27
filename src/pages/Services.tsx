import { useState, useMemo } from "react";
import { services, getServicesByCategory } from "@/data/services";
import ServiceGrid from "@/components/services/ServiceGrid";
import SearchBar from "@/components/services/SearchBar";
import CategoryFilter from "@/components/services/CategoryFilter";

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredServices = useMemo(() => {
    let result = getServicesByCategory(selectedCategory);

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (service) =>
          service.title.toLowerCase().includes(query) ||
          service.description.toLowerCase().includes(query)
      );
    }

    return result;
  }, [searchQuery, selectedCategory]);

  return (
    <div className="container py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="mb-2 text-3xl font-bold text-foreground">
          Katalog Layanan
        </h1>
        <p className="text-muted-foreground">
          Temukan layanan TIK yang Anda butuhkan
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-4">
        <div className="max-w-md">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
        <CategoryFilter selected={selectedCategory} onChange={setSelectedCategory} />
      </div>

      {/* Results */}
      {filteredServices.length > 0 ? (
        <>
          <p className="mb-4 text-sm text-muted-foreground">
            Menampilkan {filteredServices.length} dari {services.length} layanan
          </p>
          <ServiceGrid services={filteredServices} />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-lg font-medium text-foreground">
            Layanan tidak ditemukan
          </p>
          <p className="mt-2 text-muted-foreground">
            Coba ubah kata kunci atau filter kategori
          </p>
        </div>
      )}
    </div>
  );
};

export default Services;
