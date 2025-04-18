
import { useState, createContext, useContext } from 'react';
import ChatButton from './ChatButton';
import ChatWindow from './ChatWindow';

interface ChatContextType {
  isOpen: boolean;
  toggleChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <ChatContext.Provider value={{ isOpen, toggleChat }}>
      {children}
      <ChatButton onClick={toggleChat} />
      {isOpen && <ChatWindow onClose={toggleChat} />}
    </ChatContext.Provider>
  );
};
