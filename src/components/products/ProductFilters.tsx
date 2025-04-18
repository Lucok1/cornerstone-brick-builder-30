
import { useState } from 'react';
import { Currency } from '@/types/product';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  currency: Currency;
  setCurrency: React.Dispatch<React.SetStateAction<Currency>>;
}

export const ProductFilters = ({
  selectedCategory,
  setSelectedCategory,
  currency,
  setCurrency
}: ProductFiltersProps) => {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="min-w-40">
        <Select 
          value={selectedCategory} 
          onValueChange={setSelectedCategory}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Catégorie" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes les catégories</SelectItem>
            <SelectItem value="hollow-bricks">Briques Creuses</SelectItem>
            <SelectItem value="solid-bricks">Briques Pleines</SelectItem>
            <SelectItem value="hourdis">Hourdis</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="min-w-32">
        <Select 
          value={currency} 
          onValueChange={(value) => setCurrency(value as Currency)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Devise" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="XOF">XOF</SelectItem>
            <SelectItem value="USD">USD</SelectItem>
            <SelectItem value="EUR">EUR</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
