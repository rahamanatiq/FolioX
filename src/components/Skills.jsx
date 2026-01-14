import React from 'react';
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaAws, FaDocker, FaGithub, FaRobot, FaDatabase, FaCogs, FaCode, FaLanguage, FaChartBar, FaFileAlt } from 'react-icons/fa';
import { SiCplusplus, SiDjango, SiPostgresql, SiFastapi, SiGoogle, SiLatex, SiLeetcode, SiCodeforces } from 'react-icons/si';

// Define the skills with their specific icons and labels
const skillsData = [
    // Generative AI / Tech
    { name: 'Generative AI', icon: FaRobot },
    { name: 'NLP', icon: FaLanguage },
    { name: 'Transformers', icon: FaCogs },
    { name: 'LLMs', icon: FaRobot },
    { name: 'RAG', icon: FaDatabase },
    { name: 'FastAPI', icon: SiFastapi },
    { name: 'ChromaDB', icon: FaDatabase },
    { name: 'AWS', icon: FaAws },
    { name: 'GitHub', icon: FaGithub },
    { name: 'Docker', icon: FaDocker },
    { name: 'AI Automation', icon: FaCogs },
    { name: 'CI/CD', icon: FaCogs },

    // Programming
    { name: 'Python', icon: FaPython },
    { name: 'C++', icon: SiCplusplus },
    { name: 'Java', icon: FaJava },
    { name: 'C', icon: FaCode },
    { name: 'Django', icon: SiDjango },
    { name: 'HTML', icon: FaHtml5 },
    { name: 'CSS', icon: FaCss3Alt },
    { name: 'JavaScript', icon: FaJs },
    { name: 'PostgreSQL', icon: SiPostgresql },

    // Tools & Others
    { name: 'MS Office', icon: FaFileAlt },
    { name: 'Google Workspace', icon: SiGoogle },
    { name: 'Power BI', icon: FaChartBar },
    { name: 'LaTeX', icon: SiLatex },
    { name: 'Problem Solving', icon: FaCode },
    { name: 'CodeForces', icon: SiCodeforces },
    { name: 'LeetCode', icon: SiLeetcode }
];

const Skills = () => {
    return (
        <div id="skills" style={{
            height: '80vh',
            width: '100%',
            padding: '15vh 5% 0', // Pulled up significantly
            background: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start', // Align to top
            alignItems: 'center',
            overflow: 'hidden',
            gap: '7rem' // Increased gap to push icons down
        }}>
            {/* Header Section */}
            <div style={{ textAlign: 'center' }}>
                <div style={{
                    display: 'inline-block',
                    backgroundColor: '#cfe2ff', // Light blue/periwinkle
                    color: '#084298', // Darker blue text
                    padding: '0.6rem 2rem',
                    borderRadius: '50px',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    marginBottom: '1.5rem',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                }}>
                    <h2>My Skills</h2>
                </div>
                <h2 style={{
                    fontSize: '1.5rem', // Reduced font size
                    fontWeight: '800',
                    color: '#333', // Dark text for contrast
                    lineHeight: '1.4', // Increased line height slightly for better readability
                    margin: 0,
                    maxWidth: '800px'
                }}>
                    A foundation built on <span style={{ color: '#4d73e2' }}>Technical Rigor</span><br />and <span style={{ color: '#4d73e2' }}>Algorithmic Thinking</span>
                </h2>
            </div>

            {/* Marquee Container */}
            <div style={{
                display: 'flex',
                width: '100%',
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}>
                <div style={{
                    display: 'flex',
                    width: 'max-content',
                    animation: 'marquee 40s linear infinite',
                }}>
                    {/* Render skills twice for seamless loop */}
                    {[...skillsData, ...skillsData].map((skill, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '0 3rem',
                            color: '#333', // Dark text for items
                            minWidth: '150px'
                        }}>
                            <skill.icon size={60} style={{ marginBottom: '1.5rem', color: '#4d73e2' }} /> {/* Matches blue theme */}
                            <span style={{ fontSize: '1rem', fontWeight: '600', textAlign: 'center' }}>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <style>
                {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
            </style>
        </div>
    );
};

export default Skills;
