import { categories } from "@/data/services";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  selected: string;
  onChange: (category: string) => void;
}

const CategoryFilter = ({ selected, onChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selected === "all" ? "default" : "outline"}
        size="sm"
        onClick={() => onChange("all")}
        className={cn(
          "rounded-full",
          selected !== "all" && "border-border text-foreground hover:bg-accent"
        )}
      >
        Semua
      </Button>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selected === category.id ? "default" : "outline"}
          size="sm"
          onClick={() => onChange(category.id)}
          className={cn(
            "rounded-full",
            selected !== category.id && "border-border text-foreground hover:bg-accent"
          )}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
