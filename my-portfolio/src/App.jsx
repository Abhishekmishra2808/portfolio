import { useState, useEffect, useRef } from 'react'
import './App.css'

// SEO Meta Tags Component
const SEOMetaTags = () => {
    useEffect(() => {
        // Set document title
        document.title = "Abhishek Mishra - Full-Stack Developer & ML Engineer Portfolio";
        
        // Set meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = "description";
            document.head.appendChild(metaDescription);
        }
        metaDescription.content = "Portfolio of Abhishek Mishra - Full-Stack Developer & ML Engineer specializing in AI, Machine Learning, and Full-Stack Development. View projects in bioinformatics, IoT, and AI applications.";
        
        // Set meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = "keywords";
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.content = "Abhishek Mishra, Full-Stack Developer, ML Engineer, AI Engineer, Machine Learning, Python, React, PyTorch, TensorFlow, Portfolio, Web Development";
        
        // Set meta author
        let metaAuthor = document.querySelector('meta[name="author"]');
        if (!metaAuthor) {
            metaAuthor = document.createElement('meta');
            metaAuthor.name = "author";
            document.head.appendChild(metaAuthor);
        }
        metaAuthor.content = "Abhishek Mishra";
    }, []);
    
    return null;
};

// --- SVG Icons ---
const ArrowUpRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-4 h-4 ml-1.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
  >
    <path
      fillRule="evenodd"
      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0V4.75a.75.75 0 00-.75-.75H7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
      clipRule="evenodd"
    />
  </svg>
);

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
);

const LeetCodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M13.483 0a1.374 1.374 0 0 0-1.374 1.374v9.704h-1.237V1.374A1.374 1.374 0 0 0 9.5 0H2.25A1.374 1.374 0 0 0 .875 1.374v15.25A1.374 1.374 0 0 0 2.25 18h5.849a1.374 1.374 0 0 0 1.374-1.374v-4.82h1.237v4.82A1.374 1.374 0 0 0 12.083 18H21.75a1.374 1.374 0 0 0 1.374-1.374V1.374A1.374 1.374 0 0 0 21.75 0h-8.267zM3.625 15.25V2.75h4.5v12.5h-4.5zm16.75 0h-6.849v4.875a1.374 1.374 0 0 0 1.374 1.375h1.237a1.374 1.374 0 0 0 1.374-1.375v-4.875h1.25V2.75h-12.133v12.5z"></path>
    </svg>
);


// --- Components ---
const projects = [
    {
        title: "Bioline: AI-Powered eDNA Analysis Platform",
        description: "An advanced bioinformatics platform leveraging a transformer-based AI pipeline to analyze raw environmental DNA, identify taxonomic lineages, and discover potential new species.",
        category: "AI Research & Bioinformatics Platform",
        tech: ["Python", "PyTorch", "Hugging Face", "MLOps", "Neo4j", "React", "AWS S3"],
        liveUrl: "https://test-bioline.onrender.com/",
        githubUrl: "https://github.com/Abhishekmishra2808/test-bioline",
        image: "/BioLine.png",
        architectureUrl: "https://drive.google.com/file/d/1dAhg51AToQwWHk2uPVuHBdl4X3jOyofJ/view?usp=sharing"
    },
    {
        title: "Village Twin: Digital Twin for Smart Rural Governance",
        description: "A digital twin platform using IoT, satellite imagery, and AI for predictive maintenance in rural villages, with a blockchain back-end for transparent financial transactions.",
        category: "GovTech & Digital Twin Platform",
        tech: ["PyTorch", "OpenCV", "YOLO", "Web3", "IoT", "PostGIS", "React"],
        liveUrl: "https://village-digital.onrender.com/",
        githubUrl: "https://github.com/Abhishekmishra2808/village-digital-twin",
        image: "/RuraLens.png",
        architectureUrl: "https://drive.google.com/file/d/1YKBEOaaNThRwkrCHx8gJGzZ8QwL2pq-l/view?usp=sharing"
    },
    {
        title: "AI Quiz Clash",
        description: "A real-time web platform for knowledge-based competition, featuring an on-demand content engine powered by the Gemini AI to generate an endless stream of quiz questions.",
        category: "Full-Stack Web Application / AI Game",
        tech: ["React", "Vite", "Firebase", "Gemini API", "JavaScript"],
        liveUrl: "https://quiz-iota-nine-98.vercel.app/",
        githubUrl: "https://github.com/Abhishekmishra2808/quiz",
        image: "/quiz.jpeg"
    },
    {
        title: "MOSDAC-AI: Intelligent Scientific Data Agent",
        description: "A specialized chatbot developed for an ISRO hackathon, acting as a digital expert on India's meteorological and oceanographic data by autonomously scraping and structuring scientific data.",
        category: "AI Agent / Specialized Chatbot",
        tech: ["Python", "Gemini API", "FastAPI", "NLP", "BeautifulSoup4"],
        liveUrl: "https://mosdac-ai.onrender.com/",
        githubUrl: "https://github.com/Abhishekmishra2808/mosdac-ai",
        image: "/Mosdac.png"
    }
];

const skills = [
    "AI / Machine Learning Engineering",
    "Full-Stack AI Application Development",
    "MLOps & Systems Architecture",
    "Generative AI & NLP",
    "Solid Engineering Principles",
    "Decentralized & Emerging Tech"
];


// --- Components ---

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`w-full flex justify-between items-center py-4 md:py-6 lg:py-8 sticky top-0 z-50 backdrop-blur-xl border-b border-stone-200/50 px-4 sm:px-6 md:px-8 lg:px-12 transition-all duration-500 ${scrolled ? 'bg-stone-50/95 shadow-lg' : 'bg-stone-50/80'}`}>
            <a href="#" className="text-lg sm:text-xl text-gray-900 tracking-tight hover:text-blue-600 transition-all duration-300 hover:scale-105" style={{ fontFamily: "'Space Grotesk', 'Inter', -apple-system, sans-serif", fontWeight: '700', letterSpacing: '-0.02em' }}>
                Abhishek Mishra
            </a>
            <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-stone-200 bg-white/80 shadow-sm hover:shadow-md hover:border-green-300 transition-all duration-300 hover:scale-105 group">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse group-hover:scale-125 transition-transform"></div>
                    <span className="text-xs sm:text-sm font-medium text-gray-700 hidden sm:inline group-hover:text-green-600 transition-colors">Available for work</span>
                    <span className="text-xs font-medium text-gray-700 sm:hidden group-hover:text-green-600 transition-colors">Available</span>
                </div>
            </div>
        </header>
    );
};

const Hero = () => {
    const text1 = "Full-Stack Developer & ML Engineer.";
    const text2 = "Crafting intelligent systems for complex problem domains.";

    const [showContent, setShowContent] = useState(false);
    const [displayText, setDisplayText] = useState('');
    const [displaySubtext, setDisplaySubtext] = useState('');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    useEffect(() => {
        const timer = setTimeout(() => setShowContent(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        if (!showContent) return;
        
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i <= text1.length) {
                setDisplayText(text1.substring(0, i));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 50);

        return () => clearInterval(typingInterval);
    }, [showContent, text1]);

    useEffect(() => {
        if (displayText !== text1) return;
        
        let j = 0;
        const subtextInterval = setInterval(() => {
            if (j <= text2.length) {
                setDisplaySubtext(text2.substring(0, j));
                j++;
            } else {
                clearInterval(subtextInterval);
            }
        }, 40);

        return () => clearInterval(subtextInterval);
    }, [displayText, text1, text2]);

    // Real tech stack logos from projects
    const techLogos = [
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', name: 'PyTorch', left: 3, top: 8 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', name: 'Python', left: 89, top: 12 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React', left: 7, top: 82 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', name: 'TensorFlow', left: 93, top: 88 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', name: 'Firebase', left: 96, top: 35 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'Node.js', left: 18, top: 22 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', name: 'Docker', left: 72, top: 68 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', name: 'MongoDB', left: 42, top: 10 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', name: 'PostgreSQL', left: 58, top: 85 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', name: 'AWS', left: 28, top: 92 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', name: 'JavaScript', left: 5, top: 48 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', name: 'TypeScript', left: 82, top: 6 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', name: 'Git', left: 91, top: 52 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', name: 'NumPy', left: 48, top: 45 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', name: 'Pandas', left: 14, top: 62 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', name: 'FastAPI', left: 95, top: 73 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', name: 'Express', left: 35, top: 28 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', name: 'Redux', left: 68, top: 18 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', name: 'Tailwind', left: 22, top: 78 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', name: 'Kubernetes', left: 78, top: 90 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', name: 'MySQL', left: 12, top: 33 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg', name: 'OpenCV', left: 62, top: 58 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg', name: 'Jupyter', left: 38, top: 72 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', name: 'VSCode', left: 85, top: 26 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', name: 'Nginx', left: 52, top: 15 },
    ];

    return (
        <section className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
            {/* Fine Grid Background */}
            <div 
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(209, 213, 219, 0.15) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(209, 213, 219, 0.15) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px',
                    transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`,
                    transition: 'transform 0.3s ease-out'
                }}
            />
            
            {/* Gradient Overlay for depth */}
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at center, transparent 0%, rgba(250, 250, 249, 0.6) 100%)'
                }}
            />
            
            {/* Interactive Glow Effect following mouse */}
            <div
                className="absolute pointer-events-none"
                style={{
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(59, 130, 246, 0.04) 50%, transparent 70%)',
                    left: mousePosition.x - 250,
                    top: mousePosition.y - 250,
                    transition: 'all 0.15s ease-out',
                    filter: 'blur(60px)'
                }}
            />
            
            {/* Floating Tech Logos */}
            {techLogos.map((tech, index) => (
                <div
                    key={index}
                    className="absolute pointer-events-none"
                    style={{
                        left: `${tech.left}%`,
                        top: `${tech.top}%`,
                        animation: `float ${8 + index * 0.8}s ease-in-out infinite`,
                        animationDelay: `${index * 0.7}s`,
                        opacity: 0.15,
                        width: '60px',
                        height: '60px'
                    }}
                >
                    <img 
                        src={tech.url} 
                        alt={tech.name}
                        style={{
                            width: '100%',
                            height: '100%',
                            filter: 'grayscale(100%)'
                        }}
                    />
                </div>
            ))}
            
            {/* Content Layer */}
            {showContent && (
                <>
                    <div style={{ position: 'relative', zIndex: 10 }} className="text-center px-4 sm:px-6 max-w-6xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.15] tracking-tight animate-slideDown" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
                            <span style={{ fontWeight: '800', background: 'linear-gradient(90deg, #000000 0%, #1f2937 40%, #6b7280 70%, #d1d5db 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Full-Stack Developer & ML Engineer.</span>
                            {displayText.length < text1.length && <span className="animate-pulse text-gray-900">|</span>}
                        </h1>
                        
                        {displayText === text1 && (
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6 font-medium animate-slideUp" style={{ background: 'linear-gradient(90deg, #374151 0%, #6b7280 50%, #9ca3af 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                {displaySubtext}
                                {displaySubtext.length < text2.length && <span className="animate-pulse">|</span>}
                            </h3>
                        )}
                        
                        {displaySubtext === text2 && (
                            <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-light animate-fadeIn animation-delay-500">
                                Building the future with AI, <span className="font-semibold text-blue-600">one intelligent system at a time</span>.
                            </p>
                        )}
                    </div>
                    
                    {/* Scroll Down Animation - Fixed at bottom */}
                    <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce group cursor-pointer" style={{ zIndex: 10 }} onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                        <span className="text-xs sm:text-sm text-gray-500 font-medium group-hover:text-blue-600 transition-colors">Scroll Down</span>
                        <svg 
                            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-blue-600 transition-colors" 
                            fill="none" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </div>
                </>
            )}
        </section>
    );
};

const ProfileCard = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
    };

    return (
        <div className="sticky top-28">
            <div 
                className="relative bg-white/60 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-stone-200/50 flex flex-col gap-4 sm:gap-6 text-center items-center shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group"
                style={{ boxShadow: '0 0 0 1px rgba(99, 102, 241, 0.05), 0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
            {/* Animated gradient background */}
            <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.08) 0%, rgba(59, 130, 246, 0.04) 40%, transparent 70%)`
                }}
            />
            
            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${20 + (i * 12) % 60}%`,
                            animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
                            animationDelay: `${i * 0.3}s`
                        }}
                    />
                ))}
            </div>
            
            {/* Glow effect following mouse */}
            {isHovered && (
                <div
                    className="absolute w-32 h-32 rounded-full pointer-events-none transition-all duration-300"
                    style={{
                        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
                        left: `${mousePosition.x}%`,
                        top: `${mousePosition.y}%`,
                        transform: 'translate(-50%, -50%)',
                        filter: 'blur(20px)'
                    }}
                />
            )}

            {/* Content */}
            <div className="relative z-10 w-full flex flex-col gap-4 sm:gap-6 items-center">
                <div className="relative group/avatar">
                    <img
                        src="/abhishek_img.jpg"
                        alt="Abhishek Mishra"
                        className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-stone-100 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:border-blue-200"
                    />
                    {/* Rotating ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animation: 'logo-spin 3s linear infinite' }}></div>
                    <div className="absolute inset-0 rounded-full" style={{ boxShadow: 'inset 0 0 20px rgba(99, 102, 241, 0.2)' }}></div>
                </div>
                
                <div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 transition-colors group-hover:text-blue-600">Abhishek Mishra</h2>
                    <p className="text-gray-600 mt-2 font-medium text-sm sm:text-base">Full-Stack Developer & ML Engineer</p>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">Delhi, India</p>
                    <a href="tel:+918178246838" className="text-blue-600 hover:text-indigo-600 text-xs sm:text-sm mt-1 inline-block transition-colors">+91 8178246838</a>
                </div>
                
                {/* Resume Download Button */}
                <a 
                    href="/resume.pdf" 
                    download="Abhishek_Mishra_Resume.pdf"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-full transition-all duration-500 shadow-lg text-center inline-flex items-center justify-center gap-2 text-sm sm:text-base relative overflow-hidden group/btn hover:shadow-2xl hover:scale-105 animate-heartbeat"
                    style={{ animationIterationCount: 3 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 animate-shimmer opacity-30"></div>
                    <svg className="w-5 h-5 relative z-10 group-hover/btn:animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="relative z-10">Download Resume</span>
                </a>
                
                <div className="flex items-center gap-3 pt-2">
                    <a href="https://github.com/Abhishekmishra2808" target="_blank" rel="noopener noreferrer" className="p-3 bg-gradient-to-br from-stone-100/80 to-blue-50/50 rounded-full hover:from-blue-100/80 hover:to-indigo-50/80 transition-all text-gray-700 hover:text-blue-600 hover:scale-110 transform hover:rotate-12 shadow-sm hover:shadow-lg hover-glow group/icon relative">
                        <GitHubIcon />
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/abhishek-mishra-b76993317/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gradient-to-br from-stone-100/80 to-blue-50/50 rounded-full hover:from-blue-100/80 hover:to-indigo-50/80 transition-all text-gray-700 hover:text-blue-600 hover:scale-110 transform hover:rotate-12 shadow-sm hover:shadow-lg hover-glow group/icon relative">
                        <LinkedInIcon />
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">LinkedIn</span>
                    </a>
                    <a href="mailto:mishra.abhishek2808@gmail.com" className="p-3 bg-gradient-to-br from-stone-100/80 to-blue-50/50 rounded-full hover:from-blue-100/80 hover:to-indigo-50/80 transition-all text-gray-700 hover:text-blue-600 hover:scale-110 transform hover:rotate-12 shadow-sm hover:shadow-lg hover-glow group/icon relative">
                        <MailIcon />
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">Email</span>
                    </a>
                </div>
            </div>
            </div>
        </div>
    );
};

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`md:col-span-2 space-y-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="group">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 relative inline-block">
                    About Me
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-500"></span>
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg hover:text-gray-900 transition-colors">
                    As an AI Engineer, I'm passionate about building intelligent, end-to-end systems that tackle complex challenges at the intersection of science and society. My work is driven by a fascination with decoding intricate data—whether it's the genetic code of a new species or the operational data of a rural village.
                    <br /><br />
                    My hands-on project experience ranges from building bioinformatics platforms with Transformer models to developing full-stack decentralized applications using Web3 and IoT for transparent governance.
                </p>
            </div>
            <div className="group">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 relative inline-block">
                    Professional Focus
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-500"></span>
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6 hover:text-gray-900 transition-colors">
                    Primary Specialization: <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">AI & Machine Learning Engineering</span>
                </p>
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Core Competencies:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                        <li 
                            key={skill} 
                            className="text-gray-700 bg-gradient-to-br from-gray-50 to-blue-50/30 border border-gray-200 rounded-xl px-5 py-4 text-base transition-all hover:from-white hover:to-blue-50/50 hover:shadow-md hover:border-blue-200/50 hover:scale-105 transform cursor-pointer group relative overflow-hidden"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            <span className="relative z-10">{skill}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
const CodingProfiles = () => {
    // State to hold LeetCode stats. Initialized with your current data.
    const [stats, setStats] = useState({
        totalSolved: 17,
        easy: 10,
        medium: 7,
        hard: 0,
        loading: true, // Start in a loading state
    });

    const [isHovered, setIsHovered] = useState(false);

    // This effect runs when the component mounts
    useEffect(() => {
        // For now, we'll simulate a network request with a timeout
        const timer = setTimeout(() => {
            setStats(prevStats => ({...prevStats, loading: false}));
        }, 1000); // Simulate a 1-second load time

        return () => clearTimeout(timer); // Cleanup timer on unmount

    }, []); // The empty array ensures this effect runs only once

    const { totalSolved, easy, medium, hard, loading } = stats;
    const easyPercentage = totalSolved > 0 ? (easy / totalSolved) * 100 : 0;
    const mediumPercentage = totalSolved > 0 ? (medium / totalSolved) * 100 : 0;
    const hardPercentage = totalSolved > 0 ? (hard / totalSolved) * 100 : 0;

    return (
        <div className="md:col-span-2">
            <div 
                className={`bg-white/60 backdrop-blur-sm rounded-3xl border border-stone-200/50 p-8 transition-all duration-500 group relative overflow-hidden ${loading ? 'animate-pulse' : 'hover:shadow-2xl hover:border-yellow-300/50 hover:scale-[1.02]'}`} 
                style={{ boxShadow: '0 0 0 1px rgba(234, 179, 8, 0.08), 0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-green-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="flex items-start justify-between relative z-10">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">LeetCode Stats</h3>
                        <p className="text-gray-600 mt-2 transition-all duration-300">Total Solved: <span className="font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent group-hover:from-yellow-600 group-hover:to-green-600 transition-all duration-500">{totalSolved}+</span></p>
                    </div>
                    <div className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                        <LeetCodeIcon />
                    </div>
                </div>

                <div className="mt-8 space-y-6 relative z-10">
                    {/* Easy Problems */}
                    <div className="group/bar">
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-sm group-hover/bar:scale-125 transition-transform duration-300"></span>
                                <span className="text-sm font-medium text-gray-700 group-hover/bar:text-green-600 transition-colors">Easy</span>
                            </div>
                            <span className="text-sm font-semibold text-gray-900 group-hover/bar:text-green-600 transition-colors">{easy} / {totalSolved}</span>
                        </div>
                        <div className="relative h-3 bg-stone-100 rounded-full overflow-hidden shadow-inner group-hover/bar:h-4 transition-all duration-300">
                            <div 
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
                                style={{ 
                                    width: loading ? '0%' : `${easyPercentage}%`,
                                    boxShadow: isHovered ? '0 0 20px rgba(34, 197, 94, 0.8)' : '0 0 10px rgba(34, 197, 94, 0.5)'
                                }}
                            >
                                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                                <div className="absolute inset-0 animate-shimmer opacity-30"></div>
                            </div>
                        </div>
                    </div>

                    {/* Medium Problems */}
                    <div className="group/bar">
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 shadow-sm group-hover/bar:scale-125 transition-transform duration-300"></span>
                                <span className="text-sm font-medium text-gray-700 group-hover/bar:text-yellow-600 transition-colors">Medium</span>
                            </div>
                            <span className="text-sm font-semibold text-gray-900 group-hover/bar:text-yellow-600 transition-colors">{medium} / {totalSolved}</span>
                        </div>
                        <div className="relative h-3 bg-stone-100 rounded-full overflow-hidden shadow-inner group-hover/bar:h-4 transition-all duration-300">
                            <div 
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-full transition-all duration-1000 ease-out"
                                style={{ 
                                    width: loading ? '0%' : `${mediumPercentage}%`,
                                    boxShadow: isHovered ? '0 0 20px rgba(251, 191, 36, 0.8)' : '0 0 10px rgba(251, 191, 36, 0.5)',
                                    transitionDelay: '200ms'
                                }}
                            >
                                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                                <div className="absolute inset-0 animate-shimmer opacity-30"></div>
                            </div>
                        </div>
                    </div>

                    {/* Hard Problems */}
                    <div className="group/bar">
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-gradient-to-br from-red-400 to-rose-600 shadow-sm group-hover/bar:scale-125 transition-transform duration-300"></span>
                                <span className="text-sm font-medium text-gray-700 group-hover/bar:text-red-600 transition-colors">Hard</span>
                            </div>
                            <span className="text-sm font-semibold text-gray-900 group-hover/bar:text-red-600 transition-colors">{hard} / {totalSolved}</span>
                        </div>
                        <div className="relative h-3 bg-stone-100 rounded-full overflow-hidden shadow-inner group-hover/bar:h-4 transition-all duration-300">
                            <div 
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-400 via-rose-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                                style={{ 
                                    width: loading ? '0%' : `${hardPercentage}%`,
                                    boxShadow: isHovered ? '0 0 20px rgba(239, 68, 68, 0.8)' : '0 0 10px rgba(239, 68, 68, 0.5)',
                                    transitionDelay: '400ms'
                                }}
                            >
                                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                                <div className="absolute inset-0 animate-shimmer opacity-30"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-stone-200 relative z-10">
                     <a href="https://leetcode.com/u/eXIzQQrEW7/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-all duration-300 hover:gap-2 group">
                        View LeetCode Profile <ArrowUpRightIcon/>
                    </a>
                </div>
                 <p className="text-xs text-gray-500 mt-4 italic relative z-10">
                    *Stats are updated periodically. For live data, please visit the profile.
                </p>
            </div>
        </div>
    );
};

const Work = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
                <div 
                    key={index} 
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`bg-white/60 backdrop-blur-sm rounded-3xl border border-stone-200/50 flex flex-col transition-all duration-500 overflow-hidden group cursor-pointer ${hoveredIndex === index ? 'shadow-2xl border-blue-300/70 scale-[1.02] -translate-y-2' : 'hover:shadow-lg hover:border-blue-200/50'}`} 
                    style={{ boxShadow: hoveredIndex === index ? '0 20px 40px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.1)' : '0 0 0 1px rgba(59, 130, 246, 0.05), 0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}
                >
                    <div className="bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-stone-50 h-48 sm:h-56 flex items-center justify-center relative overflow-hidden">
                        <img 
                            src={project.image} 
                            alt={project.title}
                            className={`w-full h-full object-cover rounded-t-3xl transition-all duration-700 ${hoveredIndex === index ? 'scale-110' : 'scale-100'}`}
                            style={{ objectPosition: 'top center' }}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 transition-opacity duration-500 pointer-events-none ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="absolute inset-0 animate-shimmer"></div>
                        </div>
                    </div>
                    <div className="p-4 sm:p-6 flex flex-col flex-grow">
                        <div>
                            <span className={`text-xs uppercase tracking-wider font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent transition-all duration-300 ${hoveredIndex === index ? 'tracking-widest' : ''}`}>{project.category}</span>
                            <h3 className={`mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-gray-900 transition-colors duration-300 ${hoveredIndex === index ? 'text-blue-600' : ''}`}>{project.title}</h3>
                            <p className="mt-2 sm:mt-3 text-gray-600 leading-relaxed text-xs sm:text-sm">{project.description}</p>
                        </div>
                        <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 flex-wrap flex gap-2">
                            {project.tech.map((t, i) => (
                                <span 
                                    key={t} 
                                    className="text-xs bg-gradient-to-br from-stone-100 to-blue-50/50 text-gray-700 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full font-medium hover:from-blue-50 hover:to-indigo-50/50 transition-all duration-300 hover:scale-110 hover:shadow-md"
                                    style={{ 
                                        animationDelay: `${i * 50}ms`,
                                        transition: `all 0.3s ease ${i * 50}ms`
                                    }}
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                        <div className="mt-auto pt-4 sm:pt-6 flex items-center flex-wrap gap-3 sm:gap-4">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs sm:text-sm font-medium text-blue-600 hover:text-indigo-600 transition-all duration-300 hover:gap-2 group">
                                Live Demo <ArrowUpRightIcon/>
                            </a>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs sm:text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:gap-2 group">
                                GitHub <ArrowUpRightIcon/>
                            </a>
                            {project.architectureUrl && (
                                <a href={project.architectureUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs sm:text-sm font-medium text-purple-600 hover:text-purple-700 transition-all duration-300 hover:gap-2 group">
                                    Architecture <ArrowUpRightIcon/>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const Section = ({ title, children, id }) => {
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section 
            ref={sectionRef}
            id={id} 
            className={`py-12 sm:py-16 md:py-20 grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 border-t border-stone-200/50 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
            <div className="md:col-span-1 sticky top-28 self-start">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 group inline-block">
                    {title}
                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-500 rounded-full"></span>
                    <span className="absolute -inset-2 bg-blue-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></span>
                </h2>
            </div>
            {children}
        </section>
    );
};


const Footer = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <footer className="w-full py-16 sm:py-20 md:py-24 border-t border-stone-200/50 text-center px-4 sm:px-6 relative overflow-hidden">
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <div 
                        key={i}
                        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/5 to-indigo-500/5 blur-3xl animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 1.5}s`,
                            animationDuration: `${8 + i}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 animate-fadeIn">
                    Get in Touch
                </h3>
                <p className="mt-4 sm:mt-6 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg px-4 animate-slideUp">
                    I'm currently seeking new opportunities and am open to collaboration. Feel free to reach out if you have a project in mind or just want to connect.
                </p>
                <a 
                    href="mailto:mishra.abhishek2808@gmail.com" 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`mt-8 sm:mt-10 inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all duration-500 shadow-lg text-sm sm:text-base relative overflow-hidden group ${isHovered ? 'scale-110 shadow-2xl' : 'hover:scale-105'}`}
                    style={{
                        boxShadow: isHovered ? '0 20px 40px rgba(59, 130, 246, 0.4)' : '0 10px 20px rgba(59, 130, 246, 0.2)'
                    }}
                >
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="relative z-10">Say Hello</span>
                    <span className={`absolute inset-0 animate-shimmer opacity-50`}></span>
                </a>
                <div className="mt-16 sm:mt-20 text-xs sm:text-sm text-gray-500 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
                    &copy; {new Date().getFullYear()} Abhishek Mishra. Inspired by modern design principles.
                </div>
            </div>
        </footer>
    );
};


// Scroll Progress Bar Component
const ScrollProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div 
            className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 z-[100] transition-all duration-150 shadow-lg animate-pulse-glow"
            style={{ 
                width: `${scrollProgress}%`,
                boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)'
            }}
        />
    );
};

// Back to Top Button Component
const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`fixed bottom-8 right-8 p-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full shadow-lg transition-all z-50 animate-fadeIn group ${isHovered ? 'scale-125 shadow-2xl rotate-12' : 'hover:scale-110 hover:shadow-xl'}`}
                    style={{
                        boxShadow: isHovered ? '0 20px 40px rgba(59, 130, 246, 0.4)' : '0 10px 20px rgba(59, 130, 246, 0.3)'
                    }}
                    aria-label="Back to top"
                >
                    <div className="relative">
                        <svg className={`w-6 h-6 transition-transform duration-300 ${isHovered ? 'animate-bounce-subtle' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        {isHovered && (
                            <span className="absolute inset-0 rounded-full bg-white/20 animate-ping"></span>
                        )}
                    </div>
                </button>
            )}
        </>
    );
};

export default function App() {
  return (
    <div className="bg-stone-50 min-h-screen font-sans antialiased text-gray-900">
      <SEOMetaTags />
      <ScrollProgressBar />
      <BackToTopButton />
      <Header />
      <main>
        <Hero />
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 py-12 md:py-16 lg:py-20">
            <div className="md:col-span-1">
              <ProfileCard />
            </div>
            <div className="md:col-span-2">
                <About />
            </div>
          </div>
          <Section title="Featured Work" id="work">
            <Work />
          </Section>
          <Section title="Coding Profiles" id="coding">
            <CodingProfiles />
          </Section>
        </div>
        <Footer />
      </main>
    </div>
  );
}


