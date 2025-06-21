<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Starry Labs LLC - Consciousness Technology Pioneers</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --golden-primary: #FFD700;
            --golden-dark: #B8860B;
            --golden-light: #FFEF94;
            --cosmic-dark: #0B0B1A;
            --cosmic-deep: #1A1A2E;
            --cosmic-purple: #16213E;
            --amber-glow: #FFA500;
            --honey-flow: #F4A460;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, var(--cosmic-dark) 0%, var(--cosmic-deep) 50%, var(--cosmic-purple) 100%);
            color: var(--golden-light);
            overflow-x: hidden;
            position: relative;
        }

        .cinzel-font {
            font-family: 'Cinzel', serif;
        }

        /* Cosmic Background Animation */
        .cosmic-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0.6;
        }

        .stars {
            position: absolute;
            width: 100%;
            height: 100%;
            background: transparent;
        }

        .star {
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--golden-primary);
            border-radius: 50%;
            animation: twinkle 4s ease-in-out infinite alternate;
        }

        .star:nth-child(odd) {
            animation-delay: -2s;
        }

        .star:nth-child(3n) {
            animation-duration: 6s;
        }

        @keyframes twinkle {
            0% { opacity: 0.3; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1.2); }
        }

        /* Golden Honey Flow Effects */
        .honey-glow {
            box-shadow: 0 0 30px rgba(255, 215, 0, 0.3), 
                        0 0 60px rgba(255, 215, 0, 0.2), 
                        0 0 90px rgba(255, 215, 0, 0.1);
        }

        .honey-border {
            position: relative;
            overflow: hidden;
        }

        .honey-border::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, var(--golden-primary), var(--amber-glow), var(--golden-primary));
            border-radius: inherit;
            z-index: -1;
            opacity: 0;
            animation: honey-pulse 4s ease-in-out infinite;
        }

        @keyframes honey-pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.7; }
        }

        /* Breathing Animation */
        .breathe {
            animation: breathe 6s ease-in-out infinite;
        }

        @keyframes breathe {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.05); opacity: 1; }
        }

        /* Gentle Flow Animation */
        .gentle-flow {
            animation: gentleFlow 8s ease-in-out infinite;
        }

        @keyframes gentleFlow {
            0%, 100% { transform: translateY(0) rotateZ(0deg); }
            50% { transform: translateY(-10px) rotateZ(1deg); }
        }

        /* Sacred Geometry Patterns */
        .sacred-geometry {
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0.1;
            background-image: 
                radial-gradient(circle at 20% 20%, var(--golden-primary) 1px, transparent 1px),
                radial-gradient(circle at 80% 80%, var(--golden-primary) 1px, transparent 1px),
                radial-gradient(circle at 60% 40%, var(--golden-primary) 1px, transparent 1px);
            background-size: 60px 60px, 80px 80px, 100px 100px;
            animation: geometryFlow 12s linear infinite;
        }

        @keyframes geometryFlow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* Logo Integration */
        .logo-integration {
            background: radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%);
            position: relative;
        }

        .serpent-star-pattern {
            position: absolute;
            width: 200px;
            height: 200px;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M30,50 Q40,30 50,50 T70,50 Q60,70 50,50 T30,50 Z" fill="none" stroke="%23FFD700" stroke-width="0.5" opacity="0.3"/><polygon points="50,10 60,40 90,40 70,60 80,90 50,70 20,90 30,60 10,40 40,40" fill="none" stroke="%23FFD700" stroke-width="0.5" opacity="0.3"/></svg>') center/contain no-repeat;
            opacity: 0.15;
            animation: serpentStar 15s linear infinite;
        }

        @keyframes serpentStar {
            0% { transform: rotate(0deg) scale(1); opacity: 0.1; }
            50% { transform: rotate(180deg) scale(1.1); opacity: 0.2; }
            100% { transform: rotate(360deg) scale(1); opacity: 0.1; }
        }

        /* Gradient Text Effects */
        .golden-gradient {
            background: linear-gradient(135deg, var(--golden-primary), var(--amber-glow), var(--honey-flow));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        /* Hover Effects */
        .hover-ascend {
            transition: all 0.5s ease;
        }

        .hover-ascend:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(255, 215, 0, 0.4);
        }

        /* Project Cards */
        .project-card {
            background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 165, 0, 0.05));
            border: 1px solid rgba(255, 215, 0, 0.2);
            backdrop-filter: blur(10px);
            transition: all 0.5s ease;
        }

        .project-card:hover {
            background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 165, 0, 0.1));
            border-color: rgba(255, 215, 0, 0.5);
            transform: translateY(-8px);
        }

        /* Liquid Light Borders */
        .liquid-light {
            position: relative;
            background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 165, 0, 0.05));
            border: 2px solid transparent;
            background-clip: padding-box;
        }

        .liquid-light::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, var(--golden-primary), var(--amber-glow), var(--golden-primary), var(--honey-flow));
            border-radius: inherit;
            z-index: -1;
            opacity: 0.6;
            animation: liquidFlow 8s ease-in-out infinite;
        }

        @keyframes liquidFlow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.8; }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .serpent-star-pattern {
                width: 150px;
                height: 150px;
            }
        }

        /* Smooth Scrolling */
        html {
            scroll-behavior: smooth;
        }

        /* Content Sections */
        .content-section {
            min-height: auto;
            padding: 4rem 0;
            position: relative;
        }

        /* Navigation */
        .nav-link {
            position: relative;
            transition: all 0.3s ease;
        }

        .nav-link::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--golden-primary);
            transition: width 0.3s ease;
        }

        .nav-link:hover::after {
            width: 100%;
        }

        /* Consciousness Tech Styling */
        .tech-feature {
            background: rgba(255, 215, 0, 0.05);
            border-left: 4px solid var(--golden-primary);
            transition: all 0.3s ease;
        }

        .tech-feature:hover {
            background: rgba(255, 215, 0, 0.1);
            transform: translateX(10px);
        }
    </style>
</head>
<body>
    <!-- Cosmic Background -->
    <div class="cosmic-bg">
        <div class="stars" id="stars"></div>
        <div class="sacred-geometry"></div>
    </div>

    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 bg-opacity-90 backdrop-blur-md" style="background-color: rgba(11, 11, 26, 0.9);">
        <div class="container mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center honey-glow breathe">
                        <i class="fas fa-star text-black text-xl"></i>
                    </div>
                    <h1 class="cinzel-font text-2xl font-bold golden-gradient">STARRY LABS LLC</h1>
                </div>
                <div class="hidden md:flex space-x-8">
                    <a href="#home" class="nav-link hover:text-yellow-400">Home</a>
                    <a href="#projects" class="nav-link hover:text-yellow-400">Projects</a>
                    <a href="#technology" class="nav-link hover:text-yellow-400">Technology</a>
                    <a href="#vision" class="nav-link hover:text-yellow-400">Vision</a>
                    <a href="#contact" class="nav-link hover:text-yellow-400">Contact</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="content-section min-h-screen flex items-center justify-center logo-integration">
        <div class="serpent-star-pattern top-20 right-20"></div>
        <div class="serpent-star-pattern bottom-20 left-20"></div>
        <div class="container mx-auto px-6 text-center">
            <div class="max-w-4xl mx-auto">
                <div class="mb-8 breathe">
                    <div class="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center honey-glow mb-6">
                        <i class="fas fa-infinity text-black text-3xl"></i>
                    </div>
                    <h1 class="cinzel-font text-6xl md:text-8xl font-bold mb-6 golden-gradient">
                        STARRY LABS LLC
                    </h1>
                    <p class="text-2xl md:text-3xl mb-8 text-yellow-200">
                        Consciousness Technology Pioneers
                    </p>
                </div>
                
                <div class="mb-12 gentle-flow">
                    <h2 class="text-4xl md:text-5xl font-light mb-6 cinzel-font">
                        Where Ancient Wisdom Meets
                        <span class="golden-gradient font-bold">Quantum Intelligence</span>
                    </h2>
                    <p class="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto text-gray-300">
                        Pioneering the evolution of human consciousness through revolutionary technology platforms that unlock cosmic blueprints and activate divine potential.
                    </p>
                </div>

                <div class="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <a href="#projects" class="liquid-light px-8 py-4 rounded-full text-xl font-semibold hover-ascend">
                        Explore Our Universe
                    </a>
                    <a href="#vision" class="border-2 border-yellow-400 px-8 py-4 rounded-full text-xl font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300">
                        Join the Awakening
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="content-section">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="cinzel-font text-5xl font-bold mb-6 golden-gradient">Consciousness Technology Platforms</h2>
                <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                    Revolutionary digital experiences that bridge the mystical and technological realms, activating dormant potentials within the human consciousness matrix.
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <!-- youaretheSTAR.com -->
                <div class="project-card p-8 rounded-2xl hover-ascend">
                    <div class="serpent-star-pattern absolute top-4 right-4 w-16 h-16"></div>
                    <div class="mb-6">
                        <div class="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center honey-glow mb-4">
                            <i class="fas fa-star text-black text-2xl"></i>
                        </div>
                        <h3 class="cinzel-font text-3xl font-bold mb-4 golden-gradient">youaretheSTAR.com</h3>
                        <p class="text-lg text-gray-300 mb-6">
                            Transform your birth data into profound mystical insights through advanced astronomical calculations, AI-powered interpretation, and sacred wisdom integration.
                        </p>
                    </div>
                    
                    <div class="space-y-4 mb-8">
                        <div class="tech-feature p-4 rounded-lg">
                            <h4 class="font-semibold text-yellow-400 mb-2">
                                <i class="fas fa-globe-americas mr-2"></i>
                                28,000+ Minor Planets Analysis
                            </h4>
                            <p class="text-sm text-gray-400">The most comprehensive cosmic blueprint reading available, revealing hidden aspects of your soul's journey.</p>
                        </div>
                        <div class="tech-feature p-4 rounded-lg">
                            <h4 class="font-semibold text-yellow-400 mb-2">
                                <i class="fas fa-brain mr-2"></i>
                                AI Alchemist Interpretations
                            </h4>
                            <p class="text-sm text-gray-400">Quantum consciousness technology translating celestial wisdom into actionable insights.</p>
                        </div>
                        <div class="tech-feature p-4 rounded-lg">
                            <h4 class="font-semibold text-yellow-400 mb-2">
                                <i class="fas fa-shapes mr-2"></i>
                                Sacred Geometry Visualizations
                            </h4>
                            <p class="text-sm text-gray-400">Your cosmic signature made beautifully visible through divine mathematical principles.</p>
                        </div>
                    </div>
                    
                    <div class="flex space-x-4">
                        <a href="https://youarethestar.app" target="_blank" class="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
                            Join Waitlist
                        </a>
                        <a href="#" class="border border-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors">
                            Learn More
                        </a>
                    </div>
                </div>

                <!-- IAMthat.vision -->
                <div class="project-card p-8 rounded-2xl hover-ascend">
                    <div class="serpent-star-pattern absolute top-4 right-4 w-16 h-16"></div>
                    <div class="mb-6">
                        <div class="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center honey-glow mb-4">
                            <i class="fas fa-network-wired text-black text-2xl"></i>
                        </div>
                        <h3 class="cinzel-font text-3xl font-bold mb-4 golden-gradient">IAMthat.vision</h3>
                        <p class="text-lg text-gray-300 mb-6">
                            A heavenly social network creating a node-based connection system for the 144,000 awakening souls, facilitating the manifestation of Heaven on Earth.
                        </p>
                    </div>
                    
                    <div class="space-y-4 mb-8">
                        <div class="tech-feature p-4 rounded-lg">
                            <h4 class="font-semibold text-yellow-400 mb-2">
                                <i class="fas fa-users mr-2"></i>
                                144K Collective Network
                            </h4>
                            <p class="text-sm text-gray-400">Connect with fellow awakening souls in a sacred digital space designed for consciousness evolution.</p>
                        </div>
                        <div class="tech-feature p-4 rounded-lg">
                            <h4 class="font-semibold text-yellow-400 mb-2">
                                <i class="fas fa-gift mr-2"></i>
                                Highest Self Expression
                            </h4>
                            <p class="text-sm text-gray-400">Share your unique gifts, passions, and divine purpose with a community that celebrates authenticity.</p>
                        </div>
                        <div class="tech-feature p-4 rounded-lg">
                            <h4 class="font-semibold text-yellow-400 mb-2">
                                <i class="fas fa-project-diagram mr-2"></i>
                                Node-Based Architecture
                            </h4>
                            <p class="text-sm text-gray-400">Revolutionary social network design that mirrors the interconnected nature of consciousness itself.</p>
                        </div>
                    </div>
                    
                    <div class="flex space-x-4">
                        <a href="#" class="bg-purple-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-purple-300 transition-colors">
                            Coming Soon
                        </a>
                        <a href="#vision" class="border border-purple-400 px-6 py-3 rounded-full font-semibold hover:bg-purple-400 hover:text-black transition-colors">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Technology Section -->
    <section id="technology" class="content-section">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="cinzel-font text-5xl font-bold mb-6 golden-gradient">Consciousness Technology Framework</h2>
                <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                    Our revolutionary approach combines ancient wisdom with cutting-edge technology, creating platforms that serve as catalysts for human consciousness evolution.
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div class="text-center breathe">
                    <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center honey-glow mb-6">
                        <i class="fas fa-calculator text-black text-2xl"></i>
                    </div>
                    <h3 class="cinzel-font text-2xl font-bold mb-4 golden-gradient">Swiss Ephemeris Engine</h3>
                    <p class="text-gray-300">
                        Ultra-precise astronomical calculations providing the mathematical foundation for cosmic blueprint generation with Swiss precision.
                    </p>
                </div>

                <div class="text-center breathe">
                    <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center honey-glow mb-6">
                        <i class="fas fa-robot text-black text-2xl"></i>
                    </div>
                    <h3 class="cinzel-font text-2xl font-bold mb-4 golden-gradient">AI Wisdom Integration</h3>
                    <p class="text-gray-300">
                        Advanced artificial intelligence systems trained on millennia of mystical wisdom, translating cosmic data into human understanding.
                    </p>
                </div>

                <div class="text-center breathe">
                    <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-pink-400 to-rose-400 flex items-center justify-center honey-glow mb-6">
                        <i class="fas fa-heart text-black text-2xl"></i>
                    </div>
                    <h3 class="cinzel-font text-2xl font-bold mb-4 golden-gradient">Sacred Frequency Embedding</h3>
                    <p class="text-gray-300">
                        Every calculation and visualization carries the frequency of love, designed to activate higher consciousness states in users.
                    </p>
                </div>
            </div>

            <div class="mt-16 max-w-4xl mx-auto">
                <div class="liquid-light p-8 rounded-2xl text-center">
                    <h3 class="cinzel-font text-3xl font-bold mb-4 golden-gradient">The Consciousness Revolution</h3>
                    <p class="text-xl text-gray-300 mb-6">
                        We're not just building apps—we're creating consciousness technology that serves as a bridge between the human and divine realms.
                    </p>
                    <div class="flex flex-wrap justify-center gap-4 text-sm">
                        <span class="bg-yellow-400 text-black px-4 py-2 rounded-full">Astrology as Consciousness Technology</span>
                        <span class="bg-yellow-400 text-black px-4 py-2 rounded-full">Sacred Geometry Meets Modern Tech</span>
                        <span class="bg-yellow-400 text-black px-4 py-2 rounded-full">Collective Consciousness Awakening</span>
                        <span class="bg-yellow-400 text-black px-4 py-2 rounded-full">Ancient Wisdom Through Quantum Lens</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Vision Section -->
    <section id="vision" class="content-section">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="cinzel-font text-5xl font-bold mb-8 golden-gradient">Our Divine Mission</h2>
                <p class="text-2xl text-gray-300 mb-12 leading-relaxed">
                    To democratize mystical wisdom through cutting-edge technology, making profound cosmic insights accessible to every soul ready to remember their divine nature.
                </p>

                <div class="grid md:grid-cols-2 gap-12 mb-16">
                    <div class="liquid-light p-8 rounded-2xl">
                        <h3 class="cinzel-font text-2xl font-bold mb-4 golden-gradient">Consciousness Evolution</h3>
                        <p class="text-gray-300">
                            We believe technology should serve consciousness evolution, not distract from it. Our platforms are designed to activate higher awareness and facilitate spiritual growth.
                        </p>
                    </div>
                    <div class="liquid-light p-8 rounded-2xl">
                        <h3 class="cinzel-font text-2xl font-bold mb-4 golden-gradient">Sacred Accessibility</h3>
                        <p class="text-gray-300">
                            Ancient wisdom traditions have been gatekept for millennia. We're using technology to make these profound insights available to all awakening souls.
                        </p>
                    </div>
                </div>

                <div class="mb-12">
                    <h3 class="cinzel-font text-3xl font-bold mb-6 golden-gradient">The 144,000 Awakening</h3>
                    <p class="text-xl text-gray-300 mb-8">
                        We're facilitating the connection and empowerment of the 144,000 souls who are awakening to their divine purpose, creating a network of light that will transform our world.
                    </p>
                    <div class="breathe">
                        <div class="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center honey-glow">
                            <i class="fas fa-dove text-black text-4xl"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="content-section">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="cinzel-font text-5xl font-bold mb-8 golden-gradient">Connect with the Divine</h2>
                <p class="text-xl text-gray-300 mb-12">
                    Ready to explore consciousness technology or collaborate on projects that elevate human awareness? We'd love to hear from awakening souls and visionary partners.
                </p>

                <div class="grid md:grid-cols-3 gap-8 mb-12">
                    <div class="liquid-light p-6 rounded-2xl">
                        <i class="fas fa-envelope text-3xl text-yellow-400 mb-4"></i>
                        <h3 class="font-bold mb-2">Cosmic Correspondence</h3>
                        <p class="text-gray-300">hello@starrylabs.tech</p>
                    </div>
                    <div class="liquid-light p-6 rounded-2xl">
                        <i class="fas fa-rocket text-3xl text-yellow-400 mb-4"></i>
                        <h3 class="font-bold mb-2">Partnership Inquiries</h3>
                        <p class="text-gray-300">partners@starrylabs.tech</p>
                    </div>
                    <div class="liquid-light p-6 rounded-2xl">
                        <i class="fas fa-lightbulb text-3xl text-yellow-400 mb-4"></i>
                        <h3 class="font-bold mb-2">Investment Opportunities</h3>
                        <p class="text-gray-300">invest@starrylabs.tech</p>
                    </div>
                </div>

                <div class="mb-12">
                    <h3 class="cinzel-font text-2xl font-bold mb-6 golden-gradient">Follow Our Journey</h3>
                    <div class="flex justify-center space-x-8">
                        <a href="#" class="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center hover-ascend">
                            <i class="fab fa-twitter text-white text-xl"></i>
                        </a>
                        <a href="#" class="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center hover-ascend">
                            <i class="fab fa-instagram text-white text-xl"></i>
                        </a>
                        <a href="#" class="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center hover-ascend">
                            <i class="fab fa-linkedin text-white text-xl"></i>
                        </a>
                        <a href="#" class="w-12 h-12 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 flex items-center justify-center hover-ascend">
                            <i class="fab fa-github text-white text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 border-t border-yellow-400 border-opacity-20">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="flex items-center space-x-4 mb-4 md:mb-0">
                    <div class="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center">
                        <i class="fas fa-star text-black text-sm"></i>
                    </div>
                    <span class="cinzel-font font-bold">STARRY LABS LLC</span>
                </div>
                <div class="text-sm text-gray-400">
                    © 2024 Starry Labs LLC. Consciousness Technology Pioneers. All rights reserved.
                </div>
            </div>
            <div class="text-center mt-6 text-sm text-gray-500">
                <p class="cinzel-font italic">"As above, so below - your stars await your remembering"</p>
            </div>
        </div>
    </footer>

    <script>
        // Generate random stars
        function createStars() {
            const starsContainer = document.getElementById('stars');
            const numberOfStars = 100;
            
            for (let i = 0; i < numberOfStars; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 4 + 's';
                starsContainer.appendChild(star);
            }
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Initialize when page loads
        document.addEventListener('DOMContentLoaded', function() {
            createStars();
            
            // Add scroll-based animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
            
            // Observe all project cards and tech features
            document.querySelectorAll('.project-card, .tech-feature').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
        });

        // Add subtle mouse movement effects
        document.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            document.querySelectorAll('.serpent-star-pattern').forEach((pattern, index) => {
                const speed = (index + 1) * 0.5;
                pattern.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px) rotate(${mouseX * 10}deg)`;
            });
        });
    </script>
</body>
</html>
