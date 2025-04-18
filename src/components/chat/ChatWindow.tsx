
import { useState } from 'react';
import { X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

interface Message {
  type: 'user' | 'bot';
  content: string;
}

interface ChatWindowProps {
  onClose: () => void;
}

const ChatWindow = ({ onClose }: ChatWindowProps) => {
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', content: 'Bonjour ! Je suis votre assistant virtuel Cornerstone. Comment puis-je vous aider ?' }
  ]);
  const [input, setInput] = useState('');
  const isMobile = useIsMobile();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { type: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simuler une réponse du bot (à remplacer par une vraie IA plus tard)
    setTimeout(() => {
      const botResponse = { 
        type: 'bot' as const, 
        content: "Je suis là pour vous aider avec toutes vos questions concernant nos produits et services. Comment puis-je vous assister aujourd'hui ?" 
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className={`fixed ${isMobile ? 'inset-0' : 'bottom-20 right-4 w-96 h-[500px]'} bg-white rounded-lg shadow-xl flex flex-col border border-gray-200 z-50`}>
      <div className="flex items-center justify-between p-4 border-b bg-brick-600 text-white rounded-t-lg">
        <h3 className="font-semibold">Assistant Cornerstone</h3>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:text-white hover:bg-brick-700">
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.type === 'user'
                  ? 'bg-brick-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="border-t p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Écrivez votre message..."
            className="flex-1 rounded-md border border-gray-300 p-2 focus:outline-none focus:border-brick-600"
          />
          <Button type="submit" className="bg-brick-600 hover:bg-brick-700">
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatWindow;
