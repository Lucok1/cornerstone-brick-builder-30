
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatButtonProps {
  onClick: () => void;
}

const ChatButton = ({ onClick }: ChatButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="fixed bottom-4 right-4 rounded-full shadow-lg bg-brick-600 hover:bg-brick-700 text-white"
      size="lg"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default ChatButton;
