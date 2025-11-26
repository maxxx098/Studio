import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Bot, User } from 'lucide-react';
import { generateCreativeResponse } from '../services/geminiService';
import { ChatMessage, ChatSender } from '../types';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', sender: ChatSender.AI, text: 'I am your Virtual Creative Director. Need a tagline, a brief, or just some brutal honesty?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: ChatSender.USER,
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const responseText = await generateCreativeResponse(userMsg.text);

    const aiMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      sender: ChatSender.AI,
      text: responseText
    };

    setMessages(prev => [...prev, aiMsg]);
    setIsTyping(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 bg-yellow-400 text-black p-4 rounded-full shadow-[0_0_20px_rgba(250,204,21,0.5)] hover:scale-110 transition-transform duration-300 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <Sparkles size={24} />
      </button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 w-[90vw] md:w-[400px] h-[600px] bg-neutral-900 border border-yellow-400/30 shadow-2xl flex flex-col font-sans"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-black flex justify-between items-center">
              <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                 <h3 className="font-bold uppercase tracking-wider text-sm">Creative Director AI</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 ${msg.sender === ChatSender.USER ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.sender === ChatSender.AI ? 'bg-yellow-400 text-black' : 'bg-neutral-700 text-white'}`}>
                    {msg.sender === ChatSender.AI ? <Bot size={16} /> : <User size={16} />}
                  </div>
                  <div className={`p-3 rounded-sm text-sm max-w-[80%] ${msg.sender === ChatSender.AI ? 'bg-neutral-800 text-neutral-200 border border-white/5' : 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/20'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                 <div className="flex gap-3">
                   <div className="w-8 h-8 rounded-full bg-yellow-400 text-black flex items-center justify-center shrink-0">
                     <Bot size={16} />
                   </div>
                   <div className="p-3 rounded-sm bg-neutral-800 border border-white/5 flex items-center gap-1">
                     <span className="w-1 h-1 bg-white rounded-full animate-bounce"></span>
                     <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></span>
                     <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                   </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-black border-t border-white/10 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask for a tagline..."
                className="flex-1 bg-neutral-900 border border-white/20 px-4 py-2 text-sm focus:outline-none focus:border-yellow-400 text-white placeholder-neutral-500"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping}
                className="bg-yellow-400 text-black p-2 hover:bg-white transition-colors disabled:opacity-50"
              >
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AiAssistant;