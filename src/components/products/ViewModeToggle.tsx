
import { Grid3X3, List } from 'lucide-react';

interface ViewModeToggleProps {
  viewMode: string;
  setViewMode: (mode: 'grid' | 'list') => void;
}

export const ViewModeToggle = ({ viewMode, setViewMode }: ViewModeToggleProps) => {
  return (
    <div className="flex items-center space-x-2">
      <button 
        onClick={() => setViewMode('grid')}
        className={`p-2 ${viewMode === 'grid' ? 'bg-earth-100 text-earth-900' : 'bg-white text-earth-500'} border border-earth-200 rounded-md hover:bg-earth-50`}
      >
        <Grid3X3 size={20} />
      </button>
      <button 
        onClick={() => setViewMode('list')}
        className={`p-2 ${viewMode === 'list' ? 'bg-earth-100 text-earth-900' : 'bg-white text-earth-500'} border border-earth-200 rounded-md hover:bg-earth-50`}
      >
        <List size={20} />
      </button>
    </div>
  );
};
