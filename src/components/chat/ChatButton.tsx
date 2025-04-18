
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

interface ChatButtonProps {
  onClick: () => void;
}

const ChatButton = ({ onClick }: ChatButtonProps) => {
  const isMobile = useIsMobile();
  
  return (
    <Button
      onClick={onClick}
      className="fixed bottom-4 right-4 rounded-full shadow-lg bg-brick-600 hover:bg-brick-700 text-white z-40"
      size={isMobile ? "default" : "lg"}
    >
      <MessageCircle className={isMobile ? "h-5 w-5" : "h-6 w-6"} />
    </Button>
  );
};

export default ChatButton;
