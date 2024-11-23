import React, { useState, useEffect } from 'react';
import { Send, Twitter, Mail, Copy, ExternalLink } from 'lucide-react';
import CustomLogo from './test.svg';

const PrimeGenesis = () => {
    const [currentSection, setCurrentSection] = useState('home');
    const [isVisible, setIsVisible] = useState(false);
    const [copiedContract, setCopiedContract] = useState('');

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleCopyContract = (contract) => {
        navigator.clipboard.writeText(contract);
        setCopiedContract(contract);
        setTimeout(() => setCopiedContract(''), 2000);
    };

    

    const coins = [
     /*   {
            name: "Prime Genesis Token Beta I (PGTBI)",
            description: "The first Prime Genesis Token, \n Beta Test I",
            isActive: false,
            parameters: [
                "This token has been retired due to lack of trading activity. Liquidity has been withdrawn in accordance with our transparency rules. You can check them on Faq section."
            ],
            contract: "0x...",
            exchange: "#",
            image: require('./img/Coin1.png')
        },*/
        {
            name: "Prime Genesis Community Token I",
            description: "This will be our first creation ",
            isActive: true,
            parameters: [
                "launching soon... "
            ],
            contract: "0x...",
            exchange: "#",
            image: require('./img/Test1.png')
        }
    ];
    //oooooooooooooooooo
    //ooooooooooooooooooooo
    //oooooooooooooooooooooooooooooooooooooo
    //ooooooooooooooooooooooooooooooooooooooooooooo

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
            <div className="flex-grow">
            {/* Header */}
            <header className="border-b border-gray-800 bg-gray-900/95 sticky top-0 z-50 backdrop-blur-sm">
                <nav className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center group">
                            <img src={CustomLogo} className="h-8 w-18 text-blue-500 transition-transform duration-300 ease-in-out group-hover:rotate-12" alt="Custom Logo" />
                            <span className="ml-2 text-xl font-bold">Prime Genesis</span>
                        </div>
                        <div className="flex space-x-6">
                            {['home', 'mission','coins', 'faq'].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => setCurrentSection(section)}
                                    className={`relative px-2 py-1 transition-colors duration-200 ${currentSection === section ? 'text-blue-500' : 'text-gray-300 hover:text-blue-400'
                                        }`}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                    {currentSection === section && (
                                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            {currentSection === 'home' && (
                <section className={`py-20 text-center transform transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'
                    }`}>
                    <div className="container mx-auto px-6">
                        <h1 className="text-6xl font-bold mb-4">Trust</h1>
                            <p className="text-2xl font-bold mb-6 text-gray-300">Trust. Transparency. Together.
                            </p>

                        <div className="max-w-2xl mx-auto space-y-6 mb-12">
                            <p className="text-xl text-gray-400">
                                    Every coin listed on Prime Genesis adheres to strict, transparent rules.
                            </p>
                            <p className="text-xl text-gray-400">
                                    Our mission is to create a trusted environment where investors are true partners in building a better crypto future.
                        
                            </p>
                            
                            <p className="text-2xl font-bold text-gray-300">
                                Stay Hungry, Stay Bullish
                                </p>

                                <p className="text-xl text-blue-400 font-semibold">
                                    Join us as we build the first community-driven HODL coin. Together, we're proving that crypto can be different.
                                </p>
                        </div>

                        <div className="flex justify-center space-x-4">
                            <a
                                href="https://t.me/primegenesisdev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg flex items-center transition-transform duration-200 hover:scale-105"
                            >
                                <Send className="mr-2 h-5 w-5" />
                                Join Telegram
                            </a>
                            <a
                                href="https://x.com/PrimeGenesisCEO"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg flex items-center transition-transform duration-200 hover:scale-105"
                            >
                                <Twitter className="mr-2 h-5 w-5" />
                                Follow Updates
                            </a>
                        </div>
                    </div>
                </section>
            )}

            {/* Coins Section */}
            {currentSection === 'coins' && (
                    <section className="py-12">
                        <div className="container mx-auto px-6">
                            <div className="grid gap-8 md:grid-cols-2">
                                {coins.map((coin, index) => (
                                    <div
                                        key={index}
                                        className={`rounded-lg p-6 transition-all duration-200 relative overflow-hidden
                                ${coin.isActive ? 'bg-gray-800 hover:shadow-lg hover:shadow-blue-500/10' : 'bg-gray-700 opacity-50'}
                            `}
                                    >
                                        {/* Main Content */}
                                        <div className="pb-16"> {/* Added padding to prevent content overlap with buttons */}
                                            <div className="flex items-start space-x-4 mb-4">
                                                <img
                                                    src={coin.image}
                                                    alt={coin.name}
                                                    className={`w-16 h-16 rounded-full ${coin.isActive ? 'opacity-100' : 'opacity-50'}`}
                                                />
                                                <div>
                                                    <h3 className={`text-xl font-bold ${coin.isActive ? '' : 'text-gray-500'}`}>
                                                        {coin.name}
                                                    </h3>
                                                    <p className={`${coin.isActive ? 'text-gray-400' : 'text-gray-500'}`}>
                                                        {coin.description}
                                                    </p>
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className={`font-semibold mb-2 ${coin.isActive ? '' : 'text-gray-500'}`}>
                                                    Parameters:
                                                </h4>
                                                <ul className={`list-disc pl-5 ${coin.isActive ? 'text-gray-400' : 'text-gray-500'}`}>
                                                    {coin.parameters.map((param, idx) => (
                                                        <li key={idx} className={`transition-colors ${coin.isActive ? 'hover:text-blue-400' : ''}`}>
                                                            {param}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Bottom Buttons */}
                                        <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2">
                                            <button
                                                onClick={() => handleCopyContract(coin.contract)}
                                                disabled={!coin.isActive}
                                                className={`py-4 flex items-center justify-center space-x-2 transition-all duration-200 border-t border-r border-gray-700
                                        ${coin.isActive
                                                        ? 'bg-gray-900/50 hover:bg-blue-600 text-gray-300 hover:text-white'
                                                        : 'bg-gray-600/30 text-gray-500 cursor-not-allowed'
                                                    }`}
                                            >
                                                <Copy className="h-4 w-4" />
                                                <span>
                                                    {copiedContract === coin.contract ? 'Copied!' : 'Copy Contract'}
                                                </span>
                                            </button>
                                            <a
                                                href={coin.exchange}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`py-4 flex items-center justify-center space-x-2 transition-all duration-200 border-t border-gray-700
                                        ${coin.isActive
                                                        ? 'bg-gray-900/50 hover:bg-blue-600 text-gray-300 hover:text-white'
                                                        : 'bg-gray-600/30 text-gray-500 cursor-not-allowed'
                                                    }`}
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                                <span>View on Exchange</span>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

            {/* FAQ Section */}
            {currentSection === 'faq' && (
                <section className="py-12">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            
                        <div className="bg-gray-800 rounded-lg p-6 transition-all duration-200 hover:shadow-lg">
                                    <h3 className="text-xl font-bold mb-2">What makes Prime Genesis different from other projects?</h3>
                                <p className="text-gray-400">
                                        Prime Genesis focuses on long-term trust rather than short-term gains. We're not here to pump and dump;
                                        we're building a sustainable, community-driven ecosystem where everyone benefits together.
                                </p>
                                </div> 

                        <div className="bg-gray-800 rounded-lg p-6 transition-all duration-200 hover:shadow-lg">
                                    <h3 className="text-xl font-bold mb-2">How is the community involved in decision-making?</h3>
                                    <p className="text-gray-400">
                                        Our community isn't just a bystander, it's the core of our project.
                                        Key decisions are made transparently, and community votes will play a significant role in shaping the future direction.
                                    </p>
                                </div> 

                        <div className="bg-gray-800 rounded-lg p-6 transition-all duration-200 hover:shadow-lg">
                                    <h3 className="text-xl font-bold mb-2">What's next after the first HODL coin?</h3>
                                    <p className="text-gray-400">
                                        Phase 2! Once we prove ourselves as a resilient community, we'll expand into more advanced DeFi initiatives. Our roadmap is ambitious, and this is just the beginning.
                                    </p>
                                </div> 

                        <div className="bg-gray-800 rounded-lg p-6 transition-all duration-200 hover:shadow-lg">
                                <h3 className="text-xl font-bold mb-2">Can I share one of my coins here on your list?</h3>
                                <p className="text-gray-400">
                                    Not yet, we're currently in beta, and that feature isn't available just yet. We can talk about but you have to prove you are a reliable dev.
                                </p>
                            </div> 
                            

                        <div className="bg-gray-800 rounded-lg p-6 transition-all duration-200 hover:shadow-lg">
                                <h3 className="text-xl font-bold mb-2">Any question?</h3>
                                <p className="text-gray-400">
                                        * You can send us a mail primegenesisdev@gmail.com
                                        <br /> * Contact on X
                                        
                                </p>
                            </div>

                        </div>
                    </div>
                </section>
                )}

            {/* Mission */}
            {currentSection === 'mission' && (
                    <section className="py-12 bg-gray-900">
                        <div className="container mx-auto px-6">
                            <div className="max-w-4xl mx-auto">
                                {/* Main Mission Statement */}
                                <div className="text-center mb-16">
                                    <h2 className="text-4xl font-bold mb-6 text-gray-100">Our Mission: Building Trust, Together</h2>
                                    <p className="text-xl text-gray-400">
                                        At Prime Genesis, we believe that the true value of cryptocurrency lies in its community.
                                        Our mission is to restore trust and integrity to the crypto world by creating a decentralized,
                                        transparent ecosystem where every investor has a voice and a stake in the future.
                                        <br /><br />
                                        Our journey begins with the creation of the first true HODL-focused coin.
                                        This initial phase is a test of our collective strength and commitment. Once we've proven ourselves as a community-demonstrating resilience,
                                        transparency, and growth-we'll enter Phase 2, expanding into broader decentralized initiatives.
                                    </p>
                                </div>

                                {/* Why We Exist */}
                                <div className="bg-gray-800 rounded-lg p-8 mb-8 transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                                    <h3 className="text-2xl font-bold mb-4 text-blue-400">Why We Exist</h3>
                                    <p className="text-gray-400">
                                        The crypto market holds immense potential for progress, yet it's plagued by scams and
                                        short-term speculation.
                                        Prime Genesis was born from investors who
                                        believed deeply in the transformative power of digital assets but grew disillusioned by
                                        a system riddled with mistrust. We are here to change that narrative.
                                    </p>
                                </div>

                                {/* Core Values */}
                                <div className="grid gap-6 mb-8">
                                    <h3 className="text-2xl font-bold text-center text-gray-100">Our Core Values</h3>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="bg-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                                            <h4 className="text-xl font-bold mb-3 text-blue-400">Community-Driven</h4>
                                            <p className="text-gray-400">
                                                We are more than a platform; we are a movement. Prime Genesis thrives on the active
                                                participation of its members, who shape, support, and strengthen our ecosystem.
                                            </p>
                                        </div>
                                        <div className="bg-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                                            <h4 className="text-xl font-bold mb-3 text-blue-400">Transparency and Trust</h4>
                                            <p className="text-gray-400">
                                                Every step we take is guided by clear, open rules to ensure fairness and accountability.
                                                We can't promise to fix the entire market, but we guarantee integrity in every project we launch.
                                            </p>
                                        </div>
                                        <div className="bg-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                                            <h4 className="text-xl font-bold mb-3 text-blue-400">Long-Term Vision</h4>
                                            <p className="text-gray-400"><br />
                                                Our focus is on creating a lasting impact one coin,
                                                one project, one community at a time. This will lead to the Prime Genesis Project phase two.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Movement for Change */}
                                <div className="bg-gray-800 rounded-lg p-8 mb-8 transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                                    <h3 className="text-2xl font-bold mb-4 text-blue-400">A Movement for Change</h3>
                                    <p className="text-gray-400 mb-4">
                                        In this initial phase, we aim to demonstrate our strength and integrity by launching
                                        a HODL-focused coin. This is just the beginning. The journey ahead is challenging but
                                        filled with potential.
                                    </p>
                                    <p className="text-gray-400">
                                        One step at a time, we will redefine the crypto landscape, driven by the belief that
                                        together, we can create a better future.
                                    </p>
                                </div>

                                {/* Our Promise */}
                                <div className="bg-gray-800 rounded-lg p-8 mb-8 transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                                    <h3 className="text-2xl font-bold mb-4 text-blue-400">Our Promise</h3>
                                    <p className="text-gray-400 mb-4">
                                        We cannot control the entire market, but we can control our actions. Prime Genesis
                                        guarantees a scam-free, transparent environment in this first phase of coin creation.
                                        We are committed to doing our part and together, we'll set a new standard.
                                    </p>
                                </div>

                                {/* Final Statement */}
                                <div className="text-center">
                                    <h3 className="text-3xl font-bold text-blue-400">Prime Genesis: This Project Is You.</h3>
                                </div>
                            </div>
                        </div>
                    </section> 
            )}


            {/* For Newbies Section */}
            {currentSection === 'forNewbies' && (
                <section className="py-12">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-8">Getting Started</h2>
                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="bg-gray-800 rounded-lg p-6 transition-all duration-200 hover:shadow-lg">
                                <h3 className="text-xl font-bold mb-4">Understanding Crypto</h3>
                                <p className="text-gray-400 mb-4">New to cryptocurrency? Start here to learn the basics of blockchain technology and digital assets.</p>
                                <a href="#" className="text-blue-500 hover:text-blue-400 flex items-center">
                                    Learn More
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-6 transition-all duration-200 hover:shadow-lg">
                                <h3 className="text-xl font-bold mb-4">Safety First</h3>
                                <p className="text-gray-400 mb-4">Learn how to identify legitimate projects and protect your investments from scams.</p>
                                <a href="#" className="text-blue-500 hover:text-blue-400 flex items-center">
                                    Security Guide
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                )}
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 mt-20">
                <div className="container mx-auto px-6 py-8">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center group">
                            <img src={CustomLogo} className="h-8 w-18 text-blue-500 transition-transform duration-300 ease-in-out group-hover:rotate-12" alt="Custom Logo" />
                            <span className="ml-2 text-lg font-bold">Prime Genesis</span>
                        </div>
                        <div className="flex space-x-4">
                            <a
                                href="https://x.com/PrimeGenesisCEO"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-500 transition-colors"
                            >
                                <Twitter className="h-6 w-6" />
                            </a>
                            <a
                                href="https://t.me/primegenesisdev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-500 transition-colors"
                            >
                                <Send className="h-6 w-6" />
                            </a>
                            <a
                                href="mailto:primegenesisdev@gmail.com"
                                className="text-gray-400 hover:text-blue-500 transition-colors"
                            >
                                <Mail className="h-6 w-6" />
                            </a>

                          
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PrimeGenesis;