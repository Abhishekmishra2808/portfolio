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
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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

const YouTubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
);

const ArchitectureIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
);


// --- Components ---
const projects = [
    {
        title: "Bioline: AI-Powered eDNA Analysis Platform",
        description: "An advanced bioinformatics platform leveraging a transformer-based AI pipeline to analyze raw environmental DNA, identify taxonomic lineages, and discover potential new species.",
        category: "AI Research & Bioinformatics Platform",
        tech: ["PyTorch", "Hugging Face", "Neo4j", "AWS", "Docker", "Kubernetes", "Linux"],
        liveUrl: "https://test-bioline.onrender.com/",
        githubUrl: "https://github.com/Abhishekmishra2808/test-bioline",
        image: "/BioLine.png",
        architectureUrl: "https://drive.google.com/file/d/1dAhg51AToQwWHk2uPVuHBdl4X3jOyofJ/view?usp=sharing",
        youtubeUrl: "https://www.youtube.com/watch?v=i7P405rwkt0"
    },
    {
        title: "MoleculeX: Strategic Intelligence Platform",
        description: "MoleculeX is a strategic intelligence platform for pharmaceutical market research. Moving beyond standard LLM interfaces, it employs a proprietary 'Swarm-and-Council' architecture to convert live web data and internal documents into peer-reviewed, board-ready strategic reports.",
        category: "AI Research & Strategic Intelligence",
        tech: ["Python", "React", "FastAPI", "PostgreSQL", "Docker", "AWS"],
        liveUrl: "https://molecule-delta.vercel.app/",
        githubUrl: "https://github.com/Abhishekmishra2808/molecule-x",
        image: "/MoleculeX.jpeg",
        youtubeUrl: "https://youtu.be/VOU2sL3VK7Y"
    },
    {
        title: "RuraLens: Digital Twin for Smart Rural Governance",
        description: "A digital twin platform using IoT, satellite imagery, and AI for predictive maintenance in rural villages, with a blockchain back-end for transparent financial transactions.",
        category: "GovTech & Digital Twin Platform",
        tech: ["OpenCV", "Web3", "IoT", "PostGIS", "Node.js", "Express"],
        liveUrl: "https://village-digital-twin-1.onrender.com/",
        githubUrl: "https://github.com/Abhishekmishra2808/village-digital-twin",
        image: "/RuraLens.png",
        architectureUrl: "https://drive.google.com/file/d/1YKBEOaaNThRwkrCHx8gJGzZ8QwL2pq-l/view?usp=sharing"
    },
    // {
    //     title: "AI Quiz Clash",
    //     description: "A real-time web platform for knowledge-based competition, featuring an on-demand content engine powered by the Gemini AI to generate an endless stream of quiz questions.",
    //     category: "Full-Stack Web Application / AI Game",
    //     tech: ["React", "Vite", "Firebase", "Tailwind", "Redux", "JavaScript"],
    //     liveUrl: "https://quiz-iota-nine-98.vercel.app/",
    //     githubUrl: "https://github.com/Abhishekmishra2808/quiz",
    //     image: "/quiz.jpeg"
    // },
    {
        title: "MOSDAC-AI: Intelligent Scientific Data Agent",
        description: "A specialized chatbot developed for an ISRO hackathon, acting as a digital expert on India's meteorological and oceanographic data by autonomously scraping and structuring scientific data.",
        category: "AI Agent / Specialized Chatbot",
        tech: ["FastAPI", "Gemini API", "Pandas", "NumPy", "Jupyter", "Python"],
        liveUrl: "https://mosdac-ai.onrender.com/",
        githubUrl: "https://github.com/Abhishekmishra2808/mosdac-ai",
        image: "/Mosdac.png"
    }
];

const skills = [
    { 
        name: "AI / Machine Learning Engineering", 
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>
    },
    { 
        name: "Full-Stack AI Application Development", 
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
    },
    { 
        name: "MLOps & Systems Architecture", 
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
    },
    { 
        name: "Generative AI & NLP", 
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>
    },
    { 
        name: "Solid Engineering Principles", 
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /></svg>
    },
    { 
        name: "Decentralized & Emerging Tech", 
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
    }
];


// --- Components ---

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Work', href: '#work' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: 'mailto:mishra.abhishek2808@gmail.com' }
    ];

    return (
        <header 
            className={`w-full flex justify-between items-center sticky top-0 z-50 backdrop-blur-xl transition-all duration-500 px-4 sm:px-6 md:px-8 lg:px-12 ${
                scrolled 
                ? 'py-2 bg-stone-50/90 shadow-sm border-b border-stone-200/50' 
                : 'py-4 md:py-5 bg-transparent border-b border-transparent'
            }`}
        >
            <a href="#" className="text-lg sm:text-xl text-gray-900 tracking-tight hover:text-blue-600 transition-all duration-300 hover:scale-105" style={{ fontFamily: "'Space Grotesk', 'Inter', -apple-system, sans-serif", fontWeight: '700', letterSpacing: '-0.02em' }}>
                Abhishek Mishra
            </a>
            
            <nav className="hidden md:flex items-center gap-5 lg:gap-6">
                {navLinks.map((link) => (
                    <a 
                        key={link.name} 
                        href={link.href} 
                        className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors relative group py-1"
                    >
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                ))}
            </nav>

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
                        opacity: 0.12,
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
                        {/* Gradient Wash behind text */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white/80 blur-3xl -z-10 rounded-full transform scale-110"></div>

                        {/* Vertical Gradient for Depth */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-50/30 to-stone-100/50 blur-2xl -z-20"></div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight animate-slideDown font-extrabold" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
                            <span className="block" style={{ background: 'linear-gradient(90deg, #000000 0%, #1f2937 40%, #6b7280 70%, #d1d5db 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                Full-Stack Developer & ML Engineer.
                            </span>
                        </h1>
                        
                        {displayText === text1 && (
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-6 sm:mt-8 font-medium animate-slideUp" style={{ background: 'linear-gradient(90deg, #374151 0%, #6b7280 50%, #9ca3af 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                {displaySubtext}
                                {displaySubtext.length < text2.length && <span className="animate-pulse">|</span>}
                            </h3>
                        )}
                        
                        {displaySubtext === text2 && (
                            <p className="mt-8 sm:mt-10 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-light animate-fadeIn animation-delay-500">
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
                className="relative bg-white/80 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-stone-200/60 flex flex-col gap-6 text-center items-center shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
            {/* Gradient Border Effect - Subtle */}
            <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-transparent via-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            {/* Soft Glow Background */}
            <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.03) 0%, transparent 60%)`
                }}
            />
            
            {/* Content */}
            <div className="relative z-10 w-full flex flex-col gap-6 items-center">
                <div className="relative group/avatar">
                    <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 scale-90 group-hover:scale-110"></div>
                    <img
                        src="/abhishek_img.jpg"
                        alt="Abhishek Mishra"
                        className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl border-2 border-white shadow-lg object-cover transition-transform duration-700 group-hover:scale-[1.02] group-hover:rotate-1"
                    />
                </div>
                
                <div className="space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Abhishek Mishra</h2>
                    <p className="text-gray-500 font-medium">Full-Stack & ML Engineer</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-400 pt-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <span>Delhi, India</span>
                    </div>
                </div>
                
                {/* Resume Download Button */}
                <a 
                    href="/abhishek_resume.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gray-900 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:bg-gray-800 hover:-translate-y-0.5 flex items-center justify-center gap-2 group/btn"
                >
                    <span>View Resume</span>
                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
                
                <div className="flex items-center gap-4 pt-2">
                    <a href="https://github.com/Abhishekmishra2808" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-gray-900 transition-colors transform hover:scale-110">
                        <GitHubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/abhishek-mishra-b76993317/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-blue-600 transition-colors transform hover:scale-110">
                        <LinkedInIcon />
                    </a>
                    <a href="mailto:mishra.abhishek2808@gmail.com" className="p-2 text-gray-400 hover:text-red-500 transition-colors transform hover:scale-110">
                        <MailIcon />
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
        <div className={`md:col-span-1 space-y-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
                            key={skill.name} 
                            className="text-gray-700 bg-gradient-to-r from-stone-50 to-white border border-transparent ring-1 ring-stone-200/50 rounded-xl px-6 py-4 text-base transition-all hover:ring-blue-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transform cursor-pointer group relative overflow-hidden flex items-center gap-3"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{skill.icon}</span>
                            <span className="relative z-10 font-medium">{skill.name}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/50 to-blue-50/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


const techIconsMap = {
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "PyTorch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "TensorFlow": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    "AWS S3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "NumPy": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    "Pandas": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "Redux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    "Tailwind": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "OpenCV": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
    "Jupyter": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    "VSCode": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    "Nginx": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    "Neo4j": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg",
    "Vite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    "PostGIS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "Hugging Face": "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
    "MLOps": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    "YOLO": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", // Fallback to OpenCV
    "Web3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/polygon/polygon-original.svg",
    "IoT": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
    "Gemini API": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
    "NLP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "BeautifulSoup4": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
};

const Work = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="md:col-span-1 grid grid-cols-1 md:grid-cols-2 gap-y-12 sm:gap-y-16 gap-x-8">
            {projects.map((project, index) => (
                <div 
                    key={index} 
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`bg-white rounded-3xl border border-stone-200 flex flex-col transition-all duration-500 overflow-hidden group cursor-pointer ${hoveredIndex === index ? 'shadow-2xl border-blue-300/70 scale-[1.02] -translate-y-2' : 'hover:shadow-xl hover:border-blue-200/50'}`} 
                    style={{ 
                        boxShadow: hoveredIndex === index ? '0 25px 50px -12px rgba(59, 130, 246, 0.25)' : '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                        animationDelay: index * 200 + 'ms'
                    }}
                >
                    <div className="bg-stone-100 h-64 sm:h-72 flex items-center justify-center relative overflow-hidden">
                        <img 
                            src={project.image} 
                            alt={project.title}
                            className={`w-full h-full object-cover transition-all duration-700 ${hoveredIndex === index ? 'scale-110' : 'scale-100'}`}
                            style={{ objectPosition: 'top center' }}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-60'}`}></div>
                        
                        {/* Floating Action Button on Image */}
                        <div className={`absolute bottom-4 right-4 flex gap-2 transition-all duration-500 ${hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                            {project.youtubeUrl && (
                                <a 
                                    href={project.youtubeUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="p-3 bg-red-600 rounded-full text-white hover:bg-red-700 shadow-lg hover:scale-110 transition-all"
                                    title="Watch Video"
                                >
                                    <YouTubeIcon />
                                </a>
                            )}
                            {project.architectureUrl && (
                                <a 
                                    href={project.architectureUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="p-3 bg-purple-600 rounded-full text-white hover:bg-purple-700 shadow-lg hover:scale-110 transition-all"
                                    title="View Architecture"
                                >
                                    <ArchitectureIcon />
                                </a>
                            )}
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-gray-900 hover:text-blue-600 shadow-lg hover:scale-110 transition-all" title="View Live Demo">
                                <ArrowUpRightIcon />
                            </a>
                        </div>
                    </div>
                    
                    <div className="p-6 sm:p-8 flex flex-col flex-grow relative">
                        <div className="absolute -top-6 left-6 sm:left-8">
                             <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider">
                                {project.category.split(' ')[0]}
                             </span>
                        </div>

                        <div className="mt-2">
                            <h3 className={`text-xl sm:text-2xl font-bold text-gray-900 transition-colors duration-300 ${hoveredIndex === index ? 'text-blue-600' : ''}`}>{project.title}</h3>
                            <p className="mt-3 text-gray-600 leading-relaxed text-sm sm:text-base line-clamp-3">{project.description}</p>
                        </div>
                        
                        <div className="mt-6 pt-6 border-t border-stone-100">
                            <div className="flex flex-wrap gap-3 items-center">
                                {project.tech.slice(0, 5).map((t, i) => (
                                    techIconsMap[t] ? (
                                        <div key={t} className="relative group/icon" title={t}>
                                            <img src={techIconsMap[t]} alt={t} className="w-6 h-6 grayscale group-hover/icon:grayscale-0 transition-all duration-300 hover:scale-125" />
                                        </div>
                                    ) : (
                                        <span 
                                            key={t} 
                                            className="text-xs bg-stone-100 text-gray-600 px-2.5 py-1 rounded-md font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                        >
                                            {t}
                                        </span>
                                    )
                                ))}
                                {project.tech.length > 5 && (
                                    <span className="text-xs text-gray-400 font-medium">+{project.tech.length - 5}</span>
                                )}
                            </div>
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
            className={`py-20 sm:py-24 md:py-32 grid md:grid-cols-[280px_1fr] gap-8 lg:gap-12 border-t border-stone-200/50 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
            <div className="md:col-span-1 sticky top-28 self-start">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 group inline-block tracking-wide relative">
                    {title}
                    <span className="block h-1.5 w-12 bg-blue-600 mt-2 rounded-full group-hover:w-full transition-all duration-500 ease-out"></span>
                </h2>
            </div>
            {children}
        </section>
    );
};


const Footer = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <footer className="w-full py-12 sm:py-16 border-t border-stone-200/50 text-center px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-stone-50 to-white">
            {/* Textured Background */}
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            {/* Radial Gradient Highlight */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-radial-gradient from-blue-50/50 to-transparent opacity-50 pointer-events-none"></div>
            
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

            <div className="relative z-10 max-w-4xl mx-auto">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 animate-fadeIn tracking-tight">
                    Get in Touch
                </h3>
                <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg px-4 animate-slideUp leading-relaxed">
                    I'm currently seeking new opportunities and am open to collaboration. Feel free to reach out if you have a project in mind or just want to connect.
                </p>
                
                <div className="mt-10 flex justify-center gap-6">
                    <a href="https://github.com/Abhishekmishra2808" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-700 hover:text-black">
                        <GitHubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/abhishek-mishra-b76993317/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-700 hover:text-blue-600">
                        <LinkedInIcon />
                    </a>
                    <a href="mailto:mishra.abhishek2808@gmail.com" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-700 hover:text-red-500">
                        <MailIcon />
                    </a>
                </div>

                <a 
                    href="mailto:mishra.abhishek2808@gmail.com" 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`mt-12 inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-10 rounded-full transition-all duration-500 shadow-lg text-base relative overflow-hidden group ${isHovered ? 'scale-105 shadow-2xl' : 'hover:scale-105'}`}
                    style={{
                        boxShadow: isHovered ? '0 20px 40px rgba(59, 130, 246, 0.4)' : '0 10px 20px rgba(59, 130, 246, 0.2)'
                    }}
                >
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="relative z-10">Say Hello</span>
                    <span className={`absolute inset-0 animate-shimmer opacity-50`}></span>
                </a>
                
                <div className="mt-20 pt-8 border-t border-stone-200 text-sm text-gray-500 animate-fadeIn flex flex-col sm:flex-row justify-between items-center gap-4" style={{ animationDelay: '0.5s' }}>
                    <span>&copy; {new Date().getFullYear()} Abhishek Mishra. All rights reserved.</span>
                    <span className="flex items-center gap-1">
                        Made with <span className="text-red-500 animate-pulse">❤</span>, React & Tailwind
                    </span>
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
          <div className="grid md:grid-cols-[280px_1fr] gap-8 lg:gap-12 py-12 md:py-16 lg:py-20">
            <div className="md:col-span-1">
              <ProfileCard />
            </div>
            <div className="md:col-span-1">
                <About />
            </div>
          </div>
          <Section title="Featured Work" id="work">
            <Work />
          </Section>
        </div>
        <Footer />
      </main>
    </div>
  );
}


