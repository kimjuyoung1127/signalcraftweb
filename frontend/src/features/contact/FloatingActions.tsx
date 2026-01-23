"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Mail, X, Send, ChevronLeft, Bot, User } from "lucide-react";
import { Link } from "@/i18n/routing";

type ViewState = "menu" | "chat";

interface Message {
    id: string;
    role: "user" | "bot";
    text: string;
}

export function FloatingActions() {
    const [isOpen, setIsOpen] = useState(false);
    const [view, setView] = useState<ViewState>("menu");
    const [messages, setMessages] = useState<Message[]>([
        { id: "1", role: "bot", text: "Hello! How can I help you today?" },
    ]);
    const [input, setInput] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const chatEndRef = useRef<HTMLDivElement>(null);

    // Reset view and messages when closing (optional, can keep history)
    useEffect(() => {
        if (!isOpen) {
            const timer = setTimeout(() => {
                setView("menu");
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // Auto-scroll to bottom of chat
    useEffect(() => {
        if (view === "chat" && chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, view]);

    const handleSendMessage = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim()) return;

        const newMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            text: input,
        };

        setMessages((prev) => [...prev, newMessage]);
        setInput("");

        // Simulate bot response
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    id: (Date.now() + 1).toString(),
                    role: "bot",
                    text: "Thank you for your message. Our team will get back to you shortly."
                },
            ]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40"
                        />

                        {/* Modal Container */}
                        <motion.div
                            layoutId="fab-container"
                            className="mb-4 bg-background/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl overflow-hidden origin-bottom-right w-[90vw] max-w-[360px] max-h-[600px] flex flex-col relative z-50"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {view === "menu" ? (
                                    <motion.div
                                        key="menu"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.2 }}
                                        className="p-6 space-y-4"
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                                                SignalCraft AI
                                            </h3>
                                            <button
                                                onClick={() => setIsOpen(false)}
                                                className="p-1 hover:bg-white/10 rounded-full transition-colors"
                                            >
                                                <X className="w-5 h-5 text-muted-foreground" />
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => setView("chat")}
                                            className="w-full group relative overflow-hidden p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all text-left flex items-start gap-4"
                                        >
                                            <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
                                                <Bot className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-foreground">AI Assistant</div>
                                                <div className="text-xs text-muted-foreground mt-1">Chat directly with our AI agent</div>
                                            </div>
                                        </button>

                                        <Link
                                            href="/contact"
                                            className="w-full group relative overflow-hidden p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-purple-500/10 hover:border-purple-500/50 transition-all text-left flex items-start gap-4"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400 group-hover:scale-110 transition-transform">
                                                <Mail className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-foreground">Contact Support</div>
                                                <div className="text-xs text-muted-foreground mt-1">Send us a message via email</div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="chat"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex flex-col h-[450px]"
                                    >
                                        {/* Header */}
                                        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
                                            <button
                                                onClick={() => setView("menu")}
                                                className="p-2 hover:bg-white/10 rounded-full transition-colors -ml-2"
                                            >
                                                <ChevronLeft className="w-5 h-5" />
                                            </button>
                                            <span className="font-semibold text-sm">AI Support Agent</span>
                                            <button
                                                onClick={() => setIsOpen(false)}
                                                className="p-2 hover:bg-white/10 rounded-full transition-colors -mr-2 text-muted-foreground"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>

                                        {/* Messages */}
                                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                            {messages.map((msg) => (
                                                <div
                                                    key={msg.id}
                                                    className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                                                >
                                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "bot" ? "bg-blue-600" : "bg-purple-600"
                                                        }`}>
                                                        {msg.role === "bot" ? <Bot className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-white" />}
                                                    </div>
                                                    <div
                                                        className={`p-3 rounded-2xl text-sm max-w-[80%] ${msg.role === "user"
                                                            ? "bg-purple-500/20 text-purple-100 rounded-tr-sm"
                                                            : "bg-white/10 text-gray-200 rounded-tl-sm"
                                                            }`}
                                                    >
                                                        {msg.text}
                                                    </div>
                                                </div>
                                            ))}
                                            <div ref={chatEndRef} />
                                        </div>

                                        {/* Input */}
                                        <form onSubmit={handleSendMessage} className="p-3 border-t border-white/10 bg-white/5">
                                            <div className="relative flex items-center gap-2">
                                                <input
                                                    ref={inputRef}
                                                    type="text"
                                                    value={input}
                                                    onChange={(e) => setInput(e.target.value)}
                                                    placeholder="Type a message..."
                                                    className="w-full bg-black/20 border border-white/10 rounded-full py-2.5 pl-4 pr-12 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                                                />
                                                <button
                                                    type="submit"
                                                    disabled={!input.trim()}
                                                    className="absolute right-2 p-1.5 bg-blue-600 text-white rounded-full disabled:opacity-50 disabled:bg-gray-600 transition-all hover:scale-105"
                                                >
                                                    <Send className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* FAB Button */}
            <motion.button
                layoutId="fab-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="pointer-events-auto relative group flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg shadow-blue-500/25 transition-all z-50"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X className="w-6 h-6" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="menu"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MessageSquare className="w-6 h-6" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Tooltip hint when closed */}
                {!isOpen && (
                    <span className="absolute right-full mr-3 px-3 py-1.5 bg-background/90 text-foreground text-xs font-medium rounded-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap border border-white/10">
                        Start Diagnosis
                    </span>
                )}
            </motion.button>
        </div>
    );
}
