
import { useState } from 'react';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuoteRequestDialog from './QuoteRequestDialog';

const QuoteRequestButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Button 
        onClick={() => setIsDialogOpen(true)}
        size="lg" 
        className="bg-brick-600 hover:bg-brick-700 text-white flex items-center gap-2"
      >
        <FileText className="h-5 w-5" />
        Demander un devis
      </Button>
      
      <QuoteRequestDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  );
};

export default QuoteRequestButton;
