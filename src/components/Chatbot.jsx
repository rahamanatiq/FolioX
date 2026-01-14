import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from 'react-markdown';
import { FaRobot, FaPaperPlane, FaTimes, FaCommentDots } from 'react-icons/fa';
import { PORTFOLIO_CONTENT } from '../data/portfolioContext';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi! I'm Atiq's AI assistant. Ask me anything about his projects, skills, or experience!", sender: 'bot' }
    ]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const userMessage = { text: inputText, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInputText('');
        setIsLoading(true);

        try {
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

            if (!apiKey) {
                throw new Error("API Key missing");
            }

            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

            const chat = model.startChat({
                history: [
                    {
                        role: "user",
                        parts: [{ text: PORTFOLIO_CONTENT }],
                    },
                    {
                        role: "model",
                        parts: [{ text: "Understood. I am ready to answer questions about Atiqur Rahman based on the provided context." }],
                    },
                    // Convert previous messages to history format if needed, 
                    // but for simple context, just system prompt is often enough.
                    // For better context retention, we can map `messages` here.
                ],
            });

            const result = await chat.sendMessage(userMessage.text);
            const response = await result.response;
            const text = response.text();

            setMessages(prev => [...prev, { text: text, sender: 'bot' }]);
        } catch (error) {
            console.error("Chat Error:", error);
            let errorMessage = "I'm having trouble connecting right now.";

            if (error.message.includes("API Key")) {
                errorMessage = "My API key is missing. Please add VITE_GEMINI_API_KEY to your .env file.";
            } else {
                // Temporary: Show exact error for debugging
                errorMessage = `Connection Error: ${error.message || error.toString()}. \n\nPlease check your API key and internet connection.`;
            }

            setMessages(prev => [...prev, { text: errorMessage, sender: 'bot' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Floating Buttom */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    style={{
                        position: 'fixed',
                        bottom: '30px',
                        right: '30px',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: '#4d73e2',
                        color: 'white',
                        border: 'none',
                        boxShadow: '0 4px 15px rgba(77, 115, 226, 0.4)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.8rem',
                        zIndex: 1000,
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(77, 115, 226, 0.6)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(77, 115, 226, 0.4)';
                    }}
                >
                    <FaRobot style={{ fontSize: '1.5rem', animation: 'pulse 2s infinite' }} />
                </button>
            )}
            <style>{`
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                    100% { transform: scale(1); }
                }

                .chat-window {
                    position: fixed;
                    bottom: 100px;
                    right: 30px;
                    width: 350px;
                    height: 500px;
                }

                .chat-header {
                    padding: 1rem;
                    background-color: #4d73e2;
                    color: white;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    box-sizing: border-box; /* Ensure padding doesn't affect width */
                }

                .close-btn {
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                    font-size: 1.2rem;
                    padding: 0.5rem; /* Larger touch target */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                @media (max-width: 480px) {
                    .chat-window {
                        width: 90vw;
                        height: 70vh;
                        bottom: 20px;
                        right: 5vw;
                    }
                    /* Removed absolute positioning to prevent overlap/collapse */
                }
            `}</style>

            {/* Chat Window */}
            {isOpen && (
                <div className="chat-window" style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 1000,
                    border: '1px solid rgba(255,255,255,0.5)',
                    overflow: 'hidden',
                    animation: 'slideUp 0.3s ease-out'
                }}>
                    {/* Header */}
                    <div className="chat-header">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <FaRobot size={24} />
                            <div>
                                <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: '700' }}>Atiq's Assistant</h3>
                                <span style={{ fontSize: '0.75rem', opacity: 0.9 }}>Online</span>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="close-btn"
                        >
                            <FaTimes />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div style={{
                        flex: 1,
                        padding: '1rem',
                        overflowY: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        backgroundColor: '#f8f9fa'
                    }}>
                        {messages.map((msg, index) => (
                            <div key={index} style={{
                                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                maxWidth: '80%',
                                padding: '0.8rem 1rem',
                                borderRadius: '15px',
                                borderTopLeftRadius: msg.sender === 'bot' ? '5px' : '15px',
                                borderTopRightRadius: msg.sender === 'user' ? '5px' : '15px',
                                backgroundColor: msg.sender === 'user' ? '#4d73e2' : 'white',
                                color: msg.sender === 'user' ? 'white' : '#333',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                                fontSize: '0.9rem',
                                lineHeight: '1.5'
                            }}>
                                {msg.sender === 'bot' ? (
                                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                                ) : (
                                    msg.text
                                )}
                            </div>
                        ))}
                        {isLoading && (
                            <div style={{ alignSelf: 'flex-start', padding: '0.5rem 1rem', backgroundColor: 'white', borderRadius: '15px', fontSize: '0.8rem', color: '#888' }}>
                                Typing...
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSendMessage} style={{
                        padding: '1rem',
                        borderTop: '1px solid #eee',
                        display: 'flex',
                        gap: '0.5rem',
                        backgroundColor: 'white'
                    }}>
                        <input
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Ask a question..."
                            style={{
                                flex: 1,
                                padding: '0.8rem',
                                borderRadius: '25px',
                                border: '1px solid #ddd',
                                outline: 'none',
                                fontSize: '0.9rem'
                            }}
                        />
                        <button type="submit" disabled={isLoading} style={{
                            width: '45px',
                            height: '45px',
                            borderRadius: '50%',
                            backgroundColor: '#4d73e2',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.2s',
                            opacity: isLoading ? 0.7 : 1
                        }}>
                            <FaPaperPlane />
                        </button>
                    </form>

                    <style>{`
                        @keyframes slideUp {
                            from { opacity: 0; transform: translateY(20px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                    `}</style>
                </div>
            )}
        </>
    );
};

export default Chatbot;
