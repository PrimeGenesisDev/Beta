import React, { useState, useEffect } from 'react';
import CustomLogo from './test.svg';
import { Shield, Send, Twitter, Github, ExternalLink, ArrowRight } from 'lucide-react';

const PrimeGenesis = () => {
    const [currentSection, setCurrentSection] = useState('home');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const coins = [
        {
            name: "Prime Genesis Token Beta I (PGTBI)",
            description: "The first Prime Genesis Token, \n Beta Test I",
            parameters: [
                "Dev holds 80% of his asset* locked forever",
                "Maximum 10% weekly sell limit",
                "*Created on Pumpfun",
                "Dev: Prime Genesis Dev"
            ],
            links: {
                website: "#",
                telegram: "#",
                contract: "#"
            }
        },
        {
            name: "Prime Genesis Token Beta II (PGTBII)",
            description: "The third Prime Genesis Token, Beta Test II",
            parameters: [
                "Launching soon"
            ],
            links: {
                website: "#",
                telegram: "#",
                contract: "#"
            }
        },
        /*{
            name: "Prime Genesis Token Beta II (PGTBII)",
            description: "The second Prime Genesis Token, Beta Test II",
            parameters: [
                "Dev holds 80% of his assets* locked forever",
                "Maximum 10% weekly sell limit",
                "*Created on Pumpfun",
                "Launching 11/22/24",
                "Dev: Prime Genesis Dev"
            ],
            links: {
                website: "#",
                telegram: "#",
                contract: "#"
            }
        },
        {
            name: "Prime Genesis Token Beta III (PGTBIII)",
            description: "The third Prime Genesis Token, Beta Test III",
            parameters: [
                "Launching soon"
            ],
            links: {
                website: "#",
                telegram: "#",
                contract: "#"
            }
        }*/
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            {/* Header */}
            <header className="border-b border-gray-800 bg-gray-900/95 sticky top-0 z-50 backdrop-blur-sm">
                <nav className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center group">
                            <img src={CustomLogo} className="h-8 w-18 text-blue-500 transition-transform duration-300 ease-in-out group-hover:rotate-12" alt="Custom Logo" />
                            <span className="ml-2 text-xl font-bold">Prime Genesis</span>
                        </div>
                        <div className="flex space-x-6">
                            {['home', 'coins', 'faq'].map((section) => ( //QUI VA MESSO ,'forNewbies' section
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
                        <p className="text-2xl font-bold mb-6 text-gray-300">Not the next scam</p>

                        <div className="max-w-2xl mx-auto space-y-6 mb-12">
                            <p className="text-xl text-gray-400">
                                Every coin created and listed here won't be a rugpull. For every coin there are some rules the dev will strictly follow.
                            </p>
                            <p className="text-xl text-gray-400">
                                We want to give investors transparency and not to scam them.
                            </p>
                            <p className="text-xl text-blue-400 font-semibold">
                                Follow our community. Some bigger news are coming spring 2025
                            </p>
                            <p className="text-2xl font-bold text-gray-300">
                                Stay Hungry, Stay Bullish
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
                                href="https://x.com/PrimeGenesisDev"
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
                                    className="bg-gray-800 rounded-lg p-6 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/10"
                                >
                                    <h3 className="text-xl font-bold mb-2 flex items-center">
                                        {coin.name}
                                        <Shield className="ml-2 h-4 w-4 text-blue-500" />
                                    </h3>
                                    <p className="text-gray-400 mb-4">{coin.description}</p>
                                    <div className="mb-4">
                                        <h4 className="font-semibold mb-2">Parameters:</h4>
                                        <ul className="list-disc pl-5 text-gray-400">
                                            {coin.parameters.map((param, idx) => (
                                                <li key={idx} className="hover:text-blue-400 transition-colors">{param}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex space-x-4">
                                        {Object.entries(coin.links).map(([key, value]) => (
                                            <a
                                                key={key}
                                                href={value}
                                                className="text-blue-500 hover:text-blue-400 flex items-center"
                                            >
                                                {key.charAt(0).toUpperCase() + key.slice(1)}
                                                <ExternalLink className="ml-1 h-4 w-4" />
                                            </a>
                                        ))}
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
                                <h3 className="text-xl font-bold mb-2">How do we gain?</h3>
                                <p className="text-gray-400">
                                    The Prime Genesis developer earns by selling a portion of their assets, but always follows the terms of each contract strictly. We're investing based on trust and firmly believe that this will bring much higher returns in the long run, far beyond any rug-pull scam.
                                </p>
                            </div>

                            <div className="bg-gray-800 rounded-lg p-6 transition-all duration-200 hover:shadow-lg">
                                <h3 className="text-xl font-bold mb-2">What are parameters?</h3>
                                <p className="text-gray-400">
                                    Parameters are strict rules that developers must follow and trading restrictions, you can find them in the coins list.
                                </p>
                            </div>

                        

                            <div className="bg-gray-800 rounded-lg p-6 transition-all duration-200 hover:shadow-lg">
                                <h3 className="text-xl font-bold mb-2">Can the meme coin drop?</h3>
                                <p className="text-gray-400">
                                    Yes, because while we're on PumpFun, the liquidity isn't fully controlled by us. We're actively working on improving this. For now, we can only ensure the security of our own portion. This is one of our primary goals, and we're focused on achieving it as we continue to grow.
                                </p>
                            </div>

                            <div className="bg-gray-800 rounded-lg p-6 transition-all duration-200 hover:shadow-lg">
                                <h3 className="text-xl font-bold mb-2">Could I share one of my memecoins here?</h3>
                                <p className="text-gray-400">
                                    We're currently in beta testing, and that feature isn't available just yet.
                                </p>
                            </div>

                            <div className="bg-gray-800 rounded-lg p-6 transition-all duration-200 hover:shadow-lg">
                                <h3 className="text-xl font-bold mb-2">Any question?</h3>
                                <p className="text-gray-400">
                                    Contact us on "X".
                                </p>
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
                                href="https://x.com/PrimeGenesisDev"
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
                            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                                <Github className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PrimeGenesis;