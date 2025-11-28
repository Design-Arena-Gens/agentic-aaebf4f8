"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ChatMessage = {
  id: string;
  author: "user" | "bot";
  content: string;
};

const WEBHOOK_URL =
  "https://intelliwaveai.app.n8n.cloud/webhook/c99b5d4e-0dec-4616-b0c0-274f8febddf6/chat";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "intro",
      author: "bot",
      content:
        "Bonjour, je suis l'IA d'Intelliwave. Que puis-je concevoir pour vous aujourd'hui ?"
    }
  ]);
  const [pendingMessage, setPendingMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, isTyping]);

  const sendMessage = async () => {
    if (!pendingMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      author: "user",
      content: pendingMessage.trim()
    };

    setMessages((prev) => [...prev, userMessage]);
    setPendingMessage("");
    setIsTyping(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userMessage.content })
      });

      const payload = await response.json();
      const reply =
        payload?.reply ||
        "Merci pour votre message. Notre équipe reviendra vers vous très rapidement.";

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          author: "bot",
          content: reply
        }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-error-${Date.now()}`,
          author: "bot",
          content:
            "Le service est temporairement indisponible. Vous pouvez nous écrire à bonjour@intelliwave.ai."
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const suggestionChips = useMemo(
    () => [
      "Je veux un chatbot pour mon service client",
      "Comment intégrer n8n avec mon CRM ?",
      "Peut-on créer un agent vocal ?"
    ],
    []
  );

  return (
    <div className="chat-launcher">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-widget"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="chat-header">
              <h3>Intelliwave AI</h3>
              <button
                type="button"
                aria-label="Fermer le chatbot"
                className="chat-close"
                onClick={handleToggle}
              >
                ×
              </button>
            </div>
            <div className="chat-body" ref={scrollRef}>
              {messages.map((message) => (
                <div key={message.id} className={`message ${message.author}`}>
                  {message.content}
                </div>
              ))}
              {isTyping && (
                <div className="typing-indicator">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              )}
            </div>
            <div className="chat-suggestions">
              {suggestionChips.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => setPendingMessage(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
            <form
              className="chat-input"
              onSubmit={(event) => {
                event.preventDefault();
                void sendMessage();
              }}
            >
              <input
                type="text"
                placeholder="Écrire un message..."
                value={pendingMessage}
                onChange={(event) => setPendingMessage(event.target.value)}
              />
              <button type="submit">Envoyer</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        type="button"
        onClick={handleToggle}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? "Fermer l'IA" : "Discuter avec Intelliwave"}
      </motion.button>
    </div>
  );
}
