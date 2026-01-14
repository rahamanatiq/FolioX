import React, { useState, useEffect } from 'react';

const Project = () => {
    const [activeTab, setActiveTab] = useState('projects');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);

    const projectData = [
        {
            title: "Question Pair Similarity",
            image: "/assets/projects/question_pair_new.jpg",
            description: "End-to-end semantic similarity system built with Siamese-LSTM, ANN, and Transformers."
        },
        {
            title: "Bilingual Chatbot",
            image: "/assets/projects/chatbot_new.jpg",
            description: "PDF-based RAG assistant supporting English and Bangla using Langchain and Gemini."
        },
        {
            title: "Tesla Stock Forecasting",
            image: "/assets/projects/tesla_new.jpg",
            description: "Comprehensive forecasting pipeline using ARIMA and LSTM with rolling metrics."
        },
        {
            title: "RAG with FastAPI",
            image: "/assets/projects/rag_new.png",
            description: "FastAPI-powered RAG system using Google Gemini and FAISS for document indexing."
        },
        {
            title: "Rock Paper Scissors",
            image: "/assets/projects/rps_new.png",
            description: "Interactive Python game featuring a Tkinter GUI and real-time result tracking."
        }
    ];

    const thesisData = [
        {
            title: "Sentiment Analysis: A Comparative Analysis of Transformer Models on Twitter Data",
            image: "/assets/projects/thesis.png",
            description: "Explored various Transformer models like BERT, RoBERTa, DIstilBERT & GPT-2 in capturing sentiment nuances within social media texts",
            link: "https://drive.google.com/drive/folders/13MCPxSojKKcUKWwrsT-Cru4UCs0JLQWT",
            tools: ["NLP", "Python", "Transformer Model", "Numpy", "Panda", "Tensorflow", "Scikit-Learn", "Matplotlib"]
        }
    ];

    // Get current data based on tab
    const currentData = activeTab === 'projects' ? projectData : thesisData;

    // Responsive Index Management
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsToShow(1);
            } else if (window.innerWidth < 1200) {
                setItemsToShow(2);
            } else {
                setItemsToShow(3);
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setCurrentIndex(0); // Reset slider
    };

    const nextSlide = () => {
        if (currentData.length <= itemsToShow) return;

        if (currentIndex < currentData.length - itemsToShow) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setCurrentIndex(0); // Loop back to start
        }
    };

    const prevSlide = () => {
        if (currentData.length <= itemsToShow) return;

        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        } else {
            setCurrentIndex(currentData.length - itemsToShow); // Loop to end
        }
    };

    return (
        <div id="project" style={{
            minHeight: 'auto', // Removed 100vh constraint
            width: '100%',
            padding: '4rem 5% 2rem', // Reduced padding
            background: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem' // Reduced gap
        }}>
            {/* Header Section */}
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <div style={{
                    display: 'inline-block',
                    backgroundColor: '#cfe2ff',
                    color: '#084298',
                    padding: '0.6rem 2rem',
                    borderRadius: '50px',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    marginBottom: '1.5rem',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                }}>
                    <h2>My Work</h2>
                </div>
                <h2 style={{
                    fontSize: '2rem',
                    fontWeight: '800',
                    color: '#333',
                    lineHeight: '1.3',
                    margin: 0,
                    maxWidth: '900px'
                }}>
                    <h5>See what I have accomplished so far!</h5>
                </h2>
            </div>

            {/* Tab Navigation */}
            <div style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '2rem',
            }}>
                {['projects', 'thesis'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => handleTabChange(tab)}
                        style={{
                            padding: '0.6rem 1.5rem',
                            border: 'none',
                            background: 'transparent',
                            color: activeTab === tab ? '#333' : '#888',
                            fontWeight: activeTab === tab ? '700' : '500',
                            fontSize: '1.1rem',
                            cursor: 'pointer',
                            position: 'relative',
                            textTransform: 'capitalize',
                            transition: 'color 0.3s ease'
                        }}
                    >
                        {tab}
                        {activeTab === tab && (
                            <span style={{
                                position: 'absolute',
                                bottom: '-5px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '30px',
                                height: '3px',
                                backgroundColor: '#4d73e2',
                                borderRadius: '2px'
                            }}></span>
                        )}
                    </button>
                ))}
            </div>

            {/* Content Wrapper */}
            <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '1200px',
                padding: window.innerWidth <= 768 ? '0' : '0 50px', // Remove horizontal padding on mobile
            }}>
                {/* Navigation Arrows (Desktop Only) */}
                {(currentData.length > itemsToShow && window.innerWidth > 768) && (
                    <>
                        <button onClick={prevSlide} style={{
                            position: 'absolute',
                            left: '0',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            border: '1px solid #ddd',
                            backgroundColor: 'white',
                            color: '#333',
                            fontSize: '1.2rem',
                            cursor: 'pointer',
                            zIndex: 10,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor = '#4d73e2';
                                e.currentTarget.style.color = 'white';
                                e.currentTarget.style.borderColor = '#4d73e2';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor = 'white';
                                e.currentTarget.style.color = '#333';
                                e.currentTarget.style.borderColor = '#ddd';
                            }}
                        >
                            ‹
                        </button>
                        <button onClick={nextSlide} style={{
                            position: 'absolute',
                            right: '0',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            border: '1px solid #ddd',
                            backgroundColor: 'white',
                            color: '#333',
                            fontSize: '1.2rem',
                            cursor: 'pointer',
                            zIndex: 10,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor = '#4d73e2';
                                e.currentTarget.style.color = 'white';
                                e.currentTarget.style.borderColor = '#4d73e2';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor = 'white';
                                e.currentTarget.style.color = '#333';
                                e.currentTarget.style.borderColor = '#ddd';
                            }}
                        >
                            ›
                        </button>
                    </>
                )}

                {/* Card Container - Vertical Stack on Mobile, Slider on Desktop */}
                <div style={{
                    overflow: window.innerWidth <= 768 ? 'visible' : 'hidden', // Allow overflow on mobile
                    width: '100%',
                    paddingTop: '30px',
                    paddingBottom: '30px'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: window.innerWidth <= 768 ? 'column' : 'row', // Vertical stack mobile
                        gap: window.innerWidth <= 768 ? '2rem' : '0', // Gap for stack
                        transition: window.innerWidth <= 768 ? 'none' : 'transform 0.5s ease-in-out',
                        transform: window.innerWidth <= 768 ? 'none' : `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
                    }}>
                        {currentData.map((item, index) => (
                            <div key={index} style={{
                                flex: (window.innerWidth <= 768) ? 'auto' : (activeTab === 'thesis' ? '0 0 100%' : `0 0 ${100 / itemsToShow}%`),
                                width: (window.innerWidth <= 768) ? '100%' : 'auto',
                                padding: (window.innerWidth <= 768) ? '0' : '0 15px',
                                boxSizing: 'border-box',
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <div style={{
                                    backgroundColor: 'white',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                    border: '1px solid #f0f0f0',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    flexDirection: (activeTab === 'thesis' && window.innerWidth > 768) ? 'row' : 'column',
                                    height: 'auto',
                                    minHeight: '100%',
                                    maxWidth: activeTab === 'thesis' ? '1000px' : 'none',
                                    width: '100%'
                                }}
                                    onMouseEnter={(e) => {
                                        if (window.innerWidth > 768) {
                                            e.currentTarget.style.transform = 'translateY(-10px)';
                                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                                    }}
                                >
                                    {/* Image Container */}
                                    <div style={{
                                        width: (activeTab === 'thesis' && window.innerWidth > 768) ? '45%' : '100%',
                                        minWidth: (activeTab === 'thesis' && window.innerWidth > 768) ? '300px' : 'auto',
                                        height: (activeTab === 'thesis' && window.innerWidth > 768) ? 'auto' : '240px',
                                        minHeight: (activeTab === 'thesis' && window.innerWidth > 768) ? '400px' : 'auto',
                                        backgroundColor: activeTab === 'thesis' ? 'white' : '#eef2f6',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        overflow: 'hidden',
                                        position: 'relative'
                                    }}>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: activeTab === 'thesis' ? 'contain' : 'cover',
                                                padding: activeTab === 'thesis' ? '1rem' : '0',
                                                transition: 'transform 0.5s ease',
                                            }}
                                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                        />
                                    </div>

                                    {/* Content Container */}
                                    <div style={{
                                        padding: (activeTab === 'thesis' && window.innerWidth <= 768) ? '1.5rem' : '2rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        flexGrow: 1,
                                        width: (activeTab === 'thesis' && window.innerWidth > 768) ? '55%' : '100%',
                                        justifyContent: 'center',
                                        borderTop: (activeTab === 'thesis' && window.innerWidth > 768) ? 'none' : '1px solid #f0f0f0',
                                        borderLeft: (activeTab === 'thesis' && window.innerWidth > 768) ? '1px solid #f0f0f0' : 'none'
                                    }}>
                                        <h3 style={{
                                            fontSize: (activeTab === 'thesis' && window.innerWidth <= 768) ? '1.1rem' : '1.3rem', // Smaller title on mobile
                                            fontWeight: '700',
                                            color: '#2c3e50',
                                            marginBottom: '0.8rem'
                                        }}>
                                            {item.title}
                                        </h3>
                                        <p style={{
                                            fontSize: '0.95rem',
                                            lineHeight: '1.6',
                                            color: '#6c757d',
                                            marginBottom: '1.5rem',
                                            flexGrow: 1
                                        }}>
                                            {item.description}
                                        </p>

                                        {/* Tools / Tech Stack */}
                                        {item.tools && (
                                            <div style={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                gap: '0.5rem',
                                                marginBottom: '1rem'
                                            }}>
                                                {item.tools.map((tool, i) => (
                                                    <span key={i} style={{
                                                        fontSize: '0.75rem',
                                                        backgroundColor: '#f0f4ff',
                                                        color: '#4d73e2',
                                                        padding: '0.3rem 0.6rem',
                                                        borderRadius: '15px',
                                                        fontWeight: '600'
                                                    }}>
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <div style={{
                                            marginTop: 'auto',
                                            alignSelf: 'flex-start'
                                        }}>
                                            <a
                                                href={item.link || "#"}
                                                target={item.link ? "_blank" : "_self"}
                                                rel="noopener noreferrer"
                                                style={{
                                                    fontSize: '0.9rem',
                                                    fontWeight: '600',
                                                    color: '#4d73e2',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem',
                                                    textDecoration: 'none',
                                                    cursor: item.link ? 'pointer' : 'default'
                                                }}>
                                                {item.link ? "Book Details" : "View Details"} <span>→</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
